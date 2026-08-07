import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { getApiAuthorization } from "./utils/apiAuth.ts";
import type { TokenProvider } from "./utils/key.ts";
import {
  accumulateInto,
  CollectionInfo,
  DateTimeString,
  Dimension,
  dimensionLabel,
  dimensionValue,
  emptyAccumulator,
  groupByCurrency,
  MaxPayments,
  MoneyTotals,
  PaymentStatusValue,
  ratio,
  StoreId,
  toMoneyTotals,
} from "./utils/paymentAnalytics.ts";
import {
  collectionInfoOf,
  collectNormalizedPayments,
} from "./utils/paymentCache.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "getPaymentBreakdown";

const Group = MoneyTotals.extend({
  key: z.string().describe("그룹 키 (예: CARD, TOSSPAYMENTS, PAID)"),
  label: z.string().describe("그룹 키의 한국어 라벨. 매핑이 없으면 키와 동일"),
  countShare: z.number().describe("해당 통화 내 건수 비중 (0~1)"),
  amountShare: z.number().describe("해당 통화 내 총 결제금액 비중 (0~1)"),
});

const CurrencyBreakdown = z.object({
  currency: z.string().describe("통화"),
  total: MoneyTotals.describe("해당 통화 전체 합계"),
  groups: Group.array().describe("금액 내림차순으로 정렬된 그룹별 집계"),
});

const OutputSchema = z.object({
  range: z.object({
    from: z.string(),
    to: z.string(),
    groupBy: z.string(),
    statuses: z
      .string()
      .array()
      .describe("적용한 결제 상태 필터. 비어 있으면 전체"),
  }),
  totalCount: z.number().describe("집계에 포함된 전체 결제 건수"),
  byCurrency: CurrencyBreakdown.array().describe(
    "통화별 그룹 집계. 통화가 다른 금액은 합산하지 않습니다.",
  ),
  collection: CollectionInfo,
  notes: z.string().array(),
});

const InputSchema = z.object({
  store: StoreId,
  from: DateTimeString.describe("조회 시작 일시 (포함). 결제 건 생성시점 기준"),
  to: DateTimeString.describe("조회 종료 일시 (미포함). 결제 건 생성시점 기준"),
  groupBy: Dimension.describe(
    "집계 기준 차원. METHOD(결제수단), PG_PROVIDER(결제대행사), STATUS(결제상태), CARD_BRAND(카드 브랜드), ESCROW(에스크로 상태), CHANNEL_TYPE(실연동/테스트), PLATFORM_TYPE(PC/모바일/API)",
  ),
  statuses: PaymentStatusValue.array()
    .optional()
    .describe(
      "집계에 포함할 결제 상태. 생략하면 전체 상태를 포함합니다. 결제수단·결제대행사 현황을 볼 때는 보통 PAID(및 PARTIAL_CANCELLED)만 지정합니다.",
    ),
  maxPayments: MaxPayments,
});

export const config = {
  title: "결제 항목별 분포 조회",
  description: `기간 내 모든 결제 건을 수집해 지정한 차원(결제수단 / 결제대행사 / 결제상태 / 카드 브랜드 / 에스크로 등)으로 건수·금액을 집계합니다.

콘솔의 "결제수단 현황", "결제대행사 현황", "결제상태 현황" 도넛/파이 차트에 대응하는 도구입니다.

Note:
  - 수집 구간은 결제 건 생성시점 기준입니다.
  - 금액은 통화별로만 합산합니다. 서로 다른 통화의 금액은 절대 합산하지 않습니다.
  - 값이 없는 항목은 UNKNOWN, 에스크로 미사용은 NONE 으로 표기됩니다.
  - 통화 자체의 분포는 byCurrency 로 이미 제공되므로 groupBy 에 통화는 없습니다.`,
  inputSchema: InputSchema.shape,
  outputSchema: OutputSchema.shape,
};

export function init(
  tokenProvider: TokenProvider,
): ToolCallback<typeof config.inputSchema> {
  return async ({ store, from, to, groupBy, statuses, maxPayments }) => {
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

    const statusFilter = statuses == null ? null : new Set<string>(statuses);
    const payments =
      statusFilter == null
        ? collected.data.payments
        : collected.data.payments.filter((payment) =>
            statusFilter.has(payment.status),
          );

    const byCurrency = [...groupByCurrency(payments).entries()]
      .map(([currency, items]) => {
        const total = emptyAccumulator();
        const groups = new Map<string, ReturnType<typeof emptyAccumulator>>();
        for (const payment of items) {
          accumulateInto(groups, dimensionValue(payment, groupBy), payment);
          total.count += 1;
          total.total += payment.total;
          total.paid += payment.paid;
          total.cancelled += payment.cancelled;
        }
        return {
          currency,
          total: toMoneyTotals(total),
          groups: [...groups.entries()]
            .map(([key, accumulator]) => ({
              key,
              label: dimensionLabel(groupBy, key),
              ...toMoneyTotals(accumulator),
              countShare: ratio(accumulator.count, total.count),
              amountShare: ratio(accumulator.total, total.total),
            }))
            .sort((a, b) => b.amount - a.amount || b.count - a.count),
        };
      })
      .sort((a, b) => b.total.amount - a.total.amount);

    const notes: string[] = [];
    if (collected.data.collection.truncated) {
      notes.push(
        `수집 상한(maxPayments=${maxPayments})에 도달해 일부 결제 건만 집계했습니다. 구간을 나눠 조회하거나 maxPayments 를 늘려주세요.`,
      );
    }
    if (byCurrency.length > 1) {
      notes.push(
        "여러 통화가 포함되어 있어 통화별로 분리해 집계했습니다. 통화가 다른 금액은 합산하지 마세요.",
      );
    }
    if (statuses == null) {
      notes.push(
        "결제 상태 필터를 지정하지 않아 실패·취소 건이 모두 포함되어 있습니다. 결제수단/결제대행사 비중을 볼 때는 statuses 를 PAID 등으로 제한하세요.",
      );
    }

    const structuredContent: z.infer<typeof OutputSchema> = {
      range: { from, to, groupBy, statuses: statuses ?? [] },
      totalCount: payments.length,
      byCurrency,
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
