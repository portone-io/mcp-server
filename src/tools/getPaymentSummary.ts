import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { getApiAuthorization } from "./utils/apiAuth.ts";
import type { TokenProvider } from "./utils/key.ts";
import {
  accumulate,
  accumulateInto,
  bucketOf,
  CollectionInfo,
  changeRate,
  countCustomers,
  DateTimeString,
  emptyAccumulator,
  formatUtcOffset,
  Granularity,
  groupByCurrency,
  isApproved,
  MaxPayments,
  MoneyTotals,
  type NormalizedPayment,
  parseUtcOffsetMinutes,
  ratio,
  round2,
  StoreId,
  statusCounts,
  TimestampType,
  timestampOf,
  toMoneyTotals,
} from "./utils/paymentAnalytics.ts";
import {
  collectionInfoOf,
  collectNormalizedPayments,
} from "./utils/paymentCache.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "getPaymentSummary";

const CurrencyTotals = MoneyTotals.extend({
  statusCounts: z
    .record(z.string(), z.number())
    .describe("결제 상태별 건수 (PAID / FAILED / CANCELLED 등)"),
  paidCount: z.number().describe("결제 완료(부분취소 포함) 상태의 건수"),
  approvedCount: z
    .number()
    .describe(
      "승인이 이루어진 건수 (실제 결제금액 > 0). 이후 취소된 건도 포함",
    ),
  failedCount: z.number().describe("결제 실패 건수"),
  paidRate: z.number().describe("전체 건수 대비 결제 완료 비율 (0~1)"),
  uniqueCustomers: z.number().describe("서로 다른 고객 수"),
  approvedUniqueCustomers: z
    .number()
    .describe("승인 건의 서로 다른 고객 수 (고객 정보가 없는 건은 제외)"),
  unknownCustomerCount: z.number().describe("고객 정보가 없는 건수"),
  avgPaidAmountPerPayment: z
    .number()
    .describe("건별 평균 거래액 (실제 결제금액 합계 / 승인 건수)"),
  avgPaidAmountPerCustomer: z
    .number()
    .describe("고객당 평균 거래액 (실제 결제금액 합계 / 승인 건의 고객 수)"),
});

const SeriesPoint = z.object({
  bucket: z.string().describe("구간 라벨. granularity 및 조회 타임존 기준"),
  count: z.number().describe("건수"),
  paidCount: z.number().describe("결제 완료 건수"),
  failedCount: z.number().describe("결제 실패 건수"),
  amount: z.number().describe("총 결제금액 합계"),
  paidAmount: z.number().describe("실제 결제금액 합계"),
  cancelledAmount: z.number().describe("총 취소금액 합계"),
});

const CurrencySummary = z.object({
  currency: z.string().describe("통화"),
  totals: CurrencyTotals.describe("구간 전체 합산"),
  series: SeriesPoint.array().describe("시간순 시계열"),
});

const CurrencyComparison = z.object({
  currency: z.string().describe("통화"),
  totals: CurrencyTotals.describe("비교 구간 합산"),
  delta: z
    .object({
      countRate: z.number().nullable().describe("건수 증감률 (0.1 = +10%)"),
      paidAmountRate: z
        .number()
        .nullable()
        .describe("실제 결제금액 증감률 (0.1 = +10%)"),
      avgPaidAmountPerPaymentRate: z
        .number()
        .nullable()
        .describe("건별 평균 거래액 증감률"),
    })
    .describe("현재 구간 대비 증감률. 비교 구간 값이 0이면 null"),
});

const OutputSchema = z.object({
  range: z
    .object({
      from: z.string(),
      to: z.string(),
      timeZoneOffset: z
        .string()
        .describe("집계 버킷 경계에 사용한 타임존 오프셋 (from 값에서 추출)"),
      timestampType: z.string(),
      granularity: z.string(),
    })
    .describe("조회 조건"),
  totalCount: z.number().describe("조회 구간에 포함된 전체 결제 건수"),
  currencies: z.string().array().describe("포함된 통화 목록"),
  byCurrency: CurrencySummary.array().describe(
    "통화별 집계. 통화가 다른 금액은 합산하지 않습니다.",
  ),
  comparison: z
    .object({
      range: z.object({ from: z.string(), to: z.string() }),
      totalCount: z.number(),
      byCurrency: CurrencyComparison.array(),
    })
    .optional()
    .describe("compareRange 를 지정한 경우의 비교 구간 집계와 증감률"),
  collection: CollectionInfo.describe("원시 데이터 수집 상황"),
  notes: z.string().array().describe("집계 해석 시 유의사항"),
});

const InputSchema = z.object({
  store: StoreId,
  from: DateTimeString.describe("조회 시작 일시 (포함). 타임존 필수"),
  to: DateTimeString.describe("조회 종료 일시 (미포함). 타임존 필수"),
  timestampType: TimestampType.default("CREATED_AT").describe(
    "시계열 버킷 및 구간 판정에 사용할 기준 시각. CREATED_AT 은 결제 요청(생성) 시점, STATUS_CHANGED_AT 은 마지막 상태 변경 시점입니다.",
  ),
  granularity: Granularity.default("DAY").describe("시계열 집계 단위"),
  compareRange: z
    .object({
      from: DateTimeString.describe("비교 구간 시작 일시 (포함)"),
      to: DateTimeString.describe("비교 구간 종료 일시 (미포함)"),
    })
    .optional()
    .describe(
      "증감률 계산용 비교 구간. 보통 직전 동일 길이 구간을 지정합니다. 생략하면 비교하지 않습니다.",
    ),
  maxPayments: MaxPayments,
});

export const config = {
  title: "결제 거래현황 요약 및 시계열 조회",
  description: `기간 내 모든 결제 건을 수집해 거래 현황(건수·금액)과 시계열, 평균 거래액(건별/고객당)을 집계합니다.

콘솔의 "거래 현황", "평균 거래액" 지표에 대응하는 도구입니다.
개별 결제 건의 상세 내용이 필요하면 이 도구가 아니라 getPaymentsByFilter (결제 내역 단건 조회) 를 사용하세요.

Note:
  - 원시 데이터 수집은 REST V2 결제 대용량 다건 조회(/payments-by-cursor)를 전체 페이징해 수행하며, 수집 구간은 항상 결제 건 생성시점 기준입니다.
    따라서 timestampType 을 STATUS_CHANGED_AT 으로 지정하면, 조회 구간 밖에 생성된 결제 건의 상태 변경은 집계에 포함되지 않습니다.
  - 금액은 통화별로만 합산합니다. 서로 다른 통화의 금액은 절대 합산하지 않습니다.
  - 시계열 버킷 경계는 from 에 지정한 타임존 기준입니다. KST 기준 일별 집계가 필요하면 from 을 +09:00 오프셋으로 지정하세요.
  - 조회 건수가 많으면 응답이 지연될 수 있습니다. maxPayments 상한에 도달하면 collection.truncated 가 true 이며, 집계는 부분 데이터 기준입니다.`,
  inputSchema: InputSchema.shape,
  outputSchema: OutputSchema.shape,
};

function summarizeCurrency(
  currency: string,
  payments: NormalizedPayment[],
  timestampType: TimestampType,
  granularity: Granularity,
  offsetMinutes: number,
): z.infer<typeof CurrencySummary> {
  const totals = emptyAccumulator();
  const series = new Map<string, ReturnType<typeof emptyAccumulator>>();
  const approvedPayments: NormalizedPayment[] = [];

  for (const payment of payments) {
    accumulate(totals, payment);
    if (isApproved(payment)) {
      approvedPayments.push(payment);
    }
    const timestamp = timestampOf(payment, timestampType);
    const bucket =
      timestamp == null
        ? null
        : bucketOf(timestamp, granularity, offsetMinutes);
    if (bucket != null) {
      accumulateInto(series, bucket, payment);
    }
  }

  const customers = countCustomers(payments);
  const approvedCustomers = countCustomers(approvedPayments);

  return {
    currency,
    totals: {
      ...toMoneyTotals(totals),
      statusCounts: statusCounts(payments),
      paidCount: totals.paidCount,
      approvedCount: totals.approvedCount,
      failedCount: totals.failedCount,
      paidRate: ratio(totals.paidCount, totals.count),
      uniqueCustomers: customers.uniqueCustomers,
      approvedUniqueCustomers: approvedCustomers.uniqueCustomers,
      unknownCustomerCount: customers.unknownCustomerCount,
      avgPaidAmountPerPayment:
        totals.approvedCount === 0
          ? 0
          : round2(totals.paid / totals.approvedCount),
      avgPaidAmountPerCustomer:
        approvedCustomers.uniqueCustomers === 0
          ? 0
          : round2(totals.paid / approvedCustomers.uniqueCustomers),
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
        cancelledAmount: accumulator.cancelled,
      })),
  };
}

/** 기준 시각이 [from, to) 구간에 포함되는 결제 건만 남깁니다. */
function withinRange(
  payments: NormalizedPayment[],
  timestampType: TimestampType,
  from: string,
  to: string,
): NormalizedPayment[] {
  const fromMillis = Date.parse(from);
  const toMillis = Date.parse(to);
  return payments.filter((payment) => {
    const timestamp = timestampOf(payment, timestampType);
    if (timestamp == null) return false;
    const millis = Date.parse(timestamp);
    return !Number.isNaN(millis) && millis >= fromMillis && millis < toMillis;
  });
}

export function init(
  tokenProvider: TokenProvider,
): ToolCallback<typeof config.inputSchema> {
  return async ({
    store,
    from,
    to,
    timestampType,
    granularity,
    compareRange,
    maxPayments,
  }) => {
    if (Date.parse(to) <= Date.parse(from)) {
      return toolErrorResult({
        type: "error",
        data: {
          message: "조회 종료 일시(to)는 시작 일시(from)보다 뒤여야 합니다.",
        },
      });
    }
    if (
      compareRange != null &&
      Date.parse(compareRange.to) <= Date.parse(compareRange.from)
    ) {
      return toolErrorResult({
        type: "error",
        data: {
          message: "비교 구간의 종료 일시는 시작 일시보다 뒤여야 합니다.",
        },
      });
    }

    const authorization = await getApiAuthorization(tokenProvider);
    if (authorization.type === "error") {
      return toolErrorResult(authorization);
    }

    const offsetMinutes = parseUtcOffsetMinutes(from) ?? 0;

    const collected = await collectNormalizedPayments({
      authorization: authorization.data,
      storeId: store,
      from,
      until: to,
      maxRecords: maxPayments,
    });
    if (collected.type === "error") {
      return toolErrorResult(collected);
    }

    const payments = withinRange(
      collected.data.payments,
      timestampType,
      from,
      to,
    );
    const byCurrency = [...groupByCurrency(payments).entries()]
      .map(([currency, items]) =>
        summarizeCurrency(
          currency,
          items,
          timestampType,
          granularity,
          offsetMinutes,
        ),
      )
      .sort((a, b) => b.totals.paidAmount - a.totals.paidAmount);

    const notes: string[] = [];
    if (collected.data.collection.truncated) {
      notes.push(
        `수집 상한(maxPayments=${maxPayments})에 도달해 일부 결제 건만 집계했습니다. 구간을 나눠 조회하거나 maxPayments 를 늘려주세요.`,
      );
    }
    if (timestampType === "STATUS_CHANGED_AT") {
      notes.push(
        "원시 데이터 수집은 결제 건 생성시점 기준이므로, 조회 구간 밖에 생성된 결제 건의 상태 변경은 포함되지 않습니다.",
      );
    }
    if (byCurrency.length > 1) {
      notes.push(
        "여러 통화가 포함되어 있어 통화별로 분리해 집계했습니다. 통화가 다른 금액은 합산하지 마세요.",
      );
    }

    let comparison: z.infer<typeof OutputSchema>["comparison"];
    if (compareRange != null) {
      const compared = await collectNormalizedPayments({
        authorization: authorization.data,
        storeId: store,
        from: compareRange.from,
        until: compareRange.to,
        maxRecords: maxPayments,
      });
      if (compared.type === "error") {
        return toolErrorResult(compared);
      }
      const comparePayments = withinRange(
        compared.data.payments,
        timestampType,
        compareRange.from,
        compareRange.to,
      );
      const currentByCurrency = new Map(
        byCurrency.map((entry) => [entry.currency, entry]),
      );
      comparison = {
        range: { from: compareRange.from, to: compareRange.to },
        totalCount: comparePayments.length,
        byCurrency: [...groupByCurrency(comparePayments).entries()].map(
          ([currency, items]) => {
            const previous = summarizeCurrency(
              currency,
              items,
              timestampType,
              granularity,
              offsetMinutes,
            ).totals;
            const current = currentByCurrency.get(currency)?.totals;
            return {
              currency,
              totals: previous,
              delta: {
                countRate: changeRate(current?.count ?? 0, previous.count),
                paidAmountRate: changeRate(
                  current?.paidAmount ?? 0,
                  previous.paidAmount,
                ),
                avgPaidAmountPerPaymentRate: changeRate(
                  current?.avgPaidAmountPerPayment ?? 0,
                  previous.avgPaidAmountPerPayment,
                ),
              },
            };
          },
        ),
      };
      if (compared.data.collection.truncated) {
        notes.push(
          "비교 구간도 수집 상한에 도달해 부분 데이터 기준으로 집계했습니다.",
        );
      }
    }

    const structuredContent: z.infer<typeof OutputSchema> = {
      range: {
        from,
        to,
        timeZoneOffset: formatUtcOffset(offsetMinutes),
        timestampType,
        granularity,
      },
      totalCount: payments.length,
      currencies: byCurrency.map((entry) => entry.currency),
      byCurrency,
      comparison,
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
