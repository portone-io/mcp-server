import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { getApiAuthorization } from "./utils/apiAuth.ts";
import type { TokenProvider } from "./utils/key.ts";
import {
  accumulate,
  accumulateInto,
  bucketOf,
  CollectionInfo,
  classifyFailure,
  emptyAccumulator,
  FAILURE_CATEGORY_LABELS,
  formatIsoWithOffset,
  formatUtcOffset,
  groupByCurrency,
  MoneyTotals,
  ratio,
  StoreId,
  statusCounts,
  toMoneyTotals,
} from "./utils/paymentAnalytics.ts";
import {
  collectionInfoOf,
  collectNormalizedPayments,
} from "./utils/paymentCache.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "getRealtimePaymentPulse";

/** 준실시간 모니터링용 캐시 유효 시간. 이 시간 안의 재호출은 같은 결과를 반환합니다. */
const PULSE_TTL_MILLIS = 20_000;

/** 준실시간 창의 수집 상한. 창이 짧으므로 별도 입력 없이 고정합니다. */
const PULSE_MAX_RECORDS = 20000;

const PulsePoint = z.object({
  bucket: z.string().describe("구간 라벨 (버킷 시작 시각)"),
  count: z.number().describe("건수"),
  paidCount: z.number().describe("결제 완료 건수"),
  failedCount: z.number().describe("결제 실패 건수"),
  amount: z.number().describe("총 결제금액 합계"),
  paidAmount: z.number().describe("실제 결제금액 합계"),
});

const CurrencyPulse = z.object({
  currency: z.string().describe("통화"),
  totals: MoneyTotals.extend({
    paidCount: z.number(),
    failedCount: z.number(),
    paidRate: z.number().describe("전체 건수 대비 결제 완료 비율 (0~1)"),
    failureRate: z.number().describe("전체 건수 대비 결제 실패 비율 (0~1)"),
  }).describe("창 전체 합산"),
  series: PulsePoint.array().describe("버킷 시간순 시계열"),
});

const OutputSchema = z.object({
  window: z.object({
    from: z.string().describe("창 시작 시각"),
    to: z.string().describe("창 종료 시각 (조회 시점)"),
    windowMinutes: z.number(),
    bucketMinutes: z.number(),
    timeZoneOffset: z.string().describe("버킷 라벨에 사용한 타임존 오프셋"),
  }),
  totalCount: z.number().describe("창 내 전체 결제 건수"),
  statusCounts: z
    .record(z.string(), z.number())
    .describe("결제 상태별 건수 (통화 무관)"),
  byCurrency: CurrencyPulse.array().describe("통화별 집계"),
  topFailureCategories: z
    .object({
      category: z.string(),
      label: z.string(),
      count: z.number(),
      share: z.number().describe("전체 실패 건수 대비 비중 (0~1)"),
    })
    .array()
    .describe("창 내 실패 사유 대분류 상위 5개"),
  freshness: z
    .object({
      cached: z.boolean().describe("캐시된 수집 결과를 재사용했는지 여부"),
      fetchedAt: z.string().describe("원시 데이터 수집 시각"),
      ageSeconds: z.number().describe("수집 시각으로부터 경과한 초"),
      ttlSeconds: z.number().describe("캐시 유효 시간(초). 폴링 주기의 하한"),
    })
    .describe("데이터 신선도"),
  collection: CollectionInfo,
  notes: z.string().array(),
});

const InputSchema = z.object({
  store: StoreId,
  windowMinutes: z
    .number()
    .int()
    .min(1)
    .max(1440)
    .default(60)
    .describe("현재 시각을 기준으로 되돌아볼 시간(분). 최대 1440분(24시간)"),
  bucketMinutes: z
    .number()
    .int()
    .min(1)
    .max(60)
    .default(5)
    .describe("시계열 버킷 크기(분)"),
});

export const config = {
  title: "준실시간 결제 모니터링",
  description: `최근 N분 구간의 결제 건을 수집해 분 단위 시계열, 상태 분포, 실패 사유 상위 항목을 반환합니다.

콘솔의 LIVE 모니터링에 대응하는 도구이지만, **진짜 실시간 스트림이 아니라 근사치(준실시간)** 입니다. 다음 한계를 전제로 사용하세요.
  - 포트원 API 는 결제 이벤트 스트림을 제공하지 않으므로, 이 도구는 호출 시점에 최근 구간을 다시 조회하는 폴링 방식입니다.
  - 동일 조건 재호출은 ${PULSE_TTL_MILLIS / 1000}초간 캐시된 결과를 그대로 반환합니다. 그보다 짧은 주기로 폴링해도 값이 갱신되지 않습니다.
  - 수집 기준은 결제 건 생성시점이며, 승인·상태 반영에는 지연이 있을 수 있어 창의 마지막 버킷은 과소 집계될 수 있습니다. 추세 판단에는 마지막 버킷을 제외하는 것이 안전합니다.
  - 실시간 알림·감시가 목적이라면 이 도구를 반복 호출하는 대신 포트원 웹훅 연동을 사용하세요.

버킷 라벨은 서버 로컬 타임존 기준입니다. 확정된 기간의 집계가 필요하면 getPaymentSummary 를 사용하세요.`,
  inputSchema: InputSchema.shape,
  outputSchema: OutputSchema.shape,
};

export function init(
  tokenProvider: TokenProvider,
): ToolCallback<typeof config.inputSchema> {
  return async ({ store, windowMinutes, bucketMinutes }) => {
    const authorization = await getApiAuthorization(tokenProvider);
    if (authorization.type === "error") {
      return toolErrorResult(authorization);
    }

    const now = new Date();
    // 캐시 적중률을 확보하기 위해 창 경계를 TTL 단위로 내림 정렬합니다.
    const alignedNow = new Date(
      Math.floor(now.getTime() / PULSE_TTL_MILLIS) * PULSE_TTL_MILLIS,
    );
    const windowStart = new Date(alignedNow.getTime() - windowMinutes * 60_000);
    const offsetMinutes = -now.getTimezoneOffset();

    const collected = await collectNormalizedPayments({
      authorization: authorization.data,
      storeId: store,
      from: windowStart.toISOString(),
      until: alignedNow.toISOString(),
      maxRecords: PULSE_MAX_RECORDS,
      ttlMillis: PULSE_TTL_MILLIS,
    });
    if (collected.type === "error") {
      return toolErrorResult(collected);
    }

    const payments = collected.data.payments;
    const byCurrency = [...groupByCurrency(payments).entries()]
      .map(([currency, items]) => {
        const totals = emptyAccumulator();
        const series = new Map<string, ReturnType<typeof emptyAccumulator>>();
        for (const payment of items) {
          accumulate(totals, payment);
          const bucket =
            payment.createdAt == null
              ? null
              : bucketOf(
                  payment.createdAt,
                  "MINUTE",
                  offsetMinutes,
                  bucketMinutes,
                );
          if (bucket != null) {
            accumulateInto(series, bucket, payment);
          }
        }
        return {
          currency,
          totals: {
            ...toMoneyTotals(totals),
            paidCount: totals.paidCount,
            failedCount: totals.failedCount,
            paidRate: ratio(totals.paidCount, totals.count),
            failureRate: ratio(totals.failedCount, totals.count),
          },
          series: [...series.entries()]
            .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
            .map(([bucket, accumulator]) => ({
              bucket,
              count: accumulator.count,
              paidCount: accumulator.paidCount,
              failedCount: accumulator.failedCount,
              amount: accumulator.total,
              paidAmount: accumulator.paid,
            })),
        };
      })
      .sort((a, b) => b.totals.count - a.totals.count);

    const failed = payments.filter((payment) => payment.status === "FAILED");
    const failureCounts = new Map<string, number>();
    for (const payment of failed) {
      const category = classifyFailure(
        payment.failureReason,
        payment.failurePgMessage,
      );
      failureCounts.set(category, (failureCounts.get(category) ?? 0) + 1);
    }

    const ageSeconds = Math.round(
      (Date.now() - collected.data.fetchedAt) / 1000,
    );
    const notes: string[] = [
      "준실시간 근사치입니다. 마지막 버킷은 승인/상태 반영 지연으로 과소 집계될 수 있습니다.",
    ];
    if (collected.data.collection.truncated) {
      notes.push(
        `창 내 결제 건이 수집 상한(${PULSE_MAX_RECORDS}건)을 초과해 일부만 집계했습니다. windowMinutes 를 줄여주세요.`,
      );
    }
    if (collected.data.cached) {
      notes.push(
        `${PULSE_TTL_MILLIS / 1000}초 이내 재호출이라 캐시된 결과를 반환했습니다.`,
      );
    }

    const structuredContent: z.infer<typeof OutputSchema> = {
      window: {
        from: formatIsoWithOffset(windowStart, offsetMinutes),
        to: formatIsoWithOffset(alignedNow, offsetMinutes),
        windowMinutes,
        bucketMinutes,
        timeZoneOffset: formatUtcOffset(offsetMinutes),
      },
      totalCount: payments.length,
      statusCounts: statusCounts(payments),
      byCurrency,
      topFailureCategories: [...failureCounts.entries()]
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([category, count]) => ({
          category,
          label: FAILURE_CATEGORY_LABELS[category] ?? category,
          count,
          share: ratio(count, failed.length),
        })),
      freshness: {
        cached: collected.data.cached,
        fetchedAt: new Date(collected.data.fetchedAt).toISOString(),
        ageSeconds,
        ttlSeconds: PULSE_TTL_MILLIS / 1000,
      },
      collection: collectionInfoOf(collected.data),
      notes,
    };

    return {
      content: [
        { type: "text", text: JSON.stringify(structuredContent, null, 2) },
      ],
      structuredContent,
    };
  };
}
