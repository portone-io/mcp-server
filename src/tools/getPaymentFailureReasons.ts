import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { getApiAuthorization } from "./utils/apiAuth.ts";
import type { TokenProvider } from "./utils/key.ts";
import {
  amountByCurrency,
  CollectionInfo,
  classifyFailure,
  DateTimeString,
  FAILURE_CATEGORY_LABELS,
  MaxPayments,
  type NormalizedPayment,
  ratio,
  StoreId,
} from "./utils/paymentAnalytics.ts";
import {
  collectionInfoOf,
  collectNormalizedPayments,
} from "./utils/paymentCache.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "getPaymentFailureReasons";

const ReasonSample = z.object({
  reason: z.string().describe("실패 사유 원문 (failure.reason)"),
  pgCode: z.string().nullable().describe("PG사 실패 코드 (failure.pgCode)"),
  pgMessage: z.string().nullable().describe("PG사 실패 메시지"),
  count: z.number().describe("동일한 사유 원문의 건수"),
});

const FailureCategory = z.object({
  category: z.string().describe("실패 사유 대분류 코드"),
  label: z.string().describe("대분류 한국어 라벨"),
  count: z.number().describe("해당 분류의 실패 건수"),
  share: z.number().describe("전체 실패 건수 대비 비중 (0~1)"),
  amountByCurrency: z
    .record(z.string(), z.number())
    .describe("통화별 실패 시도 금액 합계 (amount.total)"),
  topReasons: ReasonSample.array().describe(
    "해당 분류에서 건수가 많은 실패 사유 원문",
  ),
});

const OutputSchema = z.object({
  range: z.object({ from: z.string(), to: z.string() }),
  totalCount: z.number().describe("구간 내 전체 결제 건수"),
  failedCount: z.number().describe("결제 실패(FAILED) 건수"),
  failureRate: z.number().describe("전체 건수 대비 실패 비율 (0~1)"),
  categories: FailureCategory.array().describe(
    "건수 내림차순으로 정렬된 실패 사유 대분류",
  ),
  collection: CollectionInfo,
  notes: z.string().array(),
});

const InputSchema = z.object({
  store: StoreId,
  from: DateTimeString.describe("조회 시작 일시 (포함). 결제 건 생성시점 기준"),
  to: DateTimeString.describe("조회 종료 일시 (미포함). 결제 건 생성시점 기준"),
  topReasonsPerCategory: z
    .number()
    .int()
    .min(1)
    .max(20)
    .default(5)
    .describe("대분류별로 함께 반환할 실패 사유 원문의 개수"),
  maxPayments: MaxPayments,
});

export const config = {
  title: "결제 실패 사유 집계",
  description: `기간 내 결제 실패(FAILED) 건의 실패 사유를 대분류로 재분류해 집계합니다.

콘솔의 "결제 실패 사유" 도넛 차트에 대응하는 도구입니다.

분류 방식:
  PG사별 실패 메시지는 표준화되어 있지 않으므로, failure.reason 과 failure.pgMessage 의 키워드를 매핑 테이블로 대분류합니다.
  (사용자 취소/중단, 한도 초과, 잔액 부족, 카드 정보 오류, 인증 실패, 카드사 거절, 미지원 결제수단, 중복 결제, 타임아웃/네트워크, 요청 정보 오류, PG/시스템 오류, 사유 미기재, 기타)
  failure.pgCode 는 PG사마다 의미가 달라 분류 기준으로 쓰지 않고, 각 분류의 대표 사례(topReasons)에 원문과 함께 노출합니다.
  분류 결과가 ETC(기타) 또는 UNKNOWN(사유 미기재)로 몰리면 topReasons 의 원문을 직접 확인해 해석하세요.

Note: 수집 구간은 결제 건 생성시점 기준입니다.`,
  inputSchema: InputSchema.shape,
  outputSchema: OutputSchema.shape,
};

/** 실패 사유 원문별 건수를 집계해 상위 N개를 반환합니다. */
function topReasonsOf(
  payments: NormalizedPayment[],
  limit: number,
): z.infer<typeof ReasonSample>[] {
  const counts = new Map<string, z.infer<typeof ReasonSample>>();
  for (const payment of payments) {
    const reason = payment.failureReason ?? "";
    const key = `${reason}|${payment.failurePgCode ?? ""}`;
    const existing = counts.get(key);
    if (existing == null) {
      counts.set(key, {
        reason,
        pgCode: payment.failurePgCode,
        pgMessage: payment.failurePgMessage,
        count: 1,
      });
    } else {
      existing.count += 1;
    }
  }
  return [...counts.values()].sort((a, b) => b.count - a.count).slice(0, limit);
}

export function init(
  tokenProvider: TokenProvider,
): ToolCallback<typeof config.inputSchema> {
  return async ({ store, from, to, topReasonsPerCategory, maxPayments }) => {
    if (Date.parse(to) <= Date.parse(from)) {
      return toolErrorResult({
        type: "error",
        data: {
          message: "조회 종료 일시(to)는 시작 일시(from)보다 뒤여야 합니다.",
        },
      });
    }

    const authorization = await getApiAuthorization(tokenProvider);
    if (authorization.type === "error") {
      return toolErrorResult(authorization);
    }

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

    const all = collected.data.payments;
    const failed = all.filter((payment) => payment.status === "FAILED");

    const grouped = new Map<string, NormalizedPayment[]>();
    for (const payment of failed) {
      const category = classifyFailure(
        payment.failureReason,
        payment.failurePgMessage,
      );
      const bucket = grouped.get(category);
      if (bucket == null) {
        grouped.set(category, [payment]);
      } else {
        bucket.push(payment);
      }
    }

    const categories = [...grouped.entries()]
      .map(([category, payments]) => ({
        category,
        label: FAILURE_CATEGORY_LABELS[category] ?? category,
        count: payments.length,
        share: ratio(payments.length, failed.length),
        amountByCurrency: amountByCurrency(payments),
        topReasons: topReasonsOf(payments, topReasonsPerCategory),
      }))
      .sort((a, b) => b.count - a.count);

    const notes: string[] = [];
    if (collected.data.collection.truncated) {
      notes.push(
        `수집 상한(maxPayments=${maxPayments})에 도달해 일부 결제 건만 집계했습니다. 구간을 나눠 조회하거나 maxPayments 를 늘려주세요.`,
      );
    }
    if (failed.length === 0) {
      notes.push("구간 내 결제 실패 건이 없습니다.");
    }
    const etc = grouped.get("ETC")?.length ?? 0;
    if (failed.length > 0 && ratio(etc, failed.length) >= 0.3) {
      notes.push(
        "기타(ETC)로 분류된 비중이 30% 이상입니다. 키워드 매핑에 잡히지 않은 PG사 메시지가 많으므로 topReasons 의 원문을 확인해 해석하세요.",
      );
    }

    const structuredContent: z.infer<typeof OutputSchema> = {
      range: { from, to },
      totalCount: all.length,
      failedCount: failed.length,
      failureRate: ratio(failed.length, all.length),
      categories,
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
