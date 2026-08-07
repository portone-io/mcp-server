import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { getApiAuthorization } from "./utils/apiAuth.ts";
import type { TokenProvider } from "./utils/key.ts";
import {
  CollectionInfo,
  DateTimeString,
  dimensionLabel,
  dimensionValue,
  MaxPayments,
  type NormalizedPayment,
  ratio,
  STATUS_LABELS,
  StoreId,
} from "./utils/paymentAnalytics.ts";
import {
  collectionInfoOf,
  collectNormalizedPayments,
} from "./utils/paymentCache.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "getPaymentStatusBreakdownByDimension";

/** 상태 교차 분석에 의미가 있는 차원만 노출합니다. */
const CrossDimension = z.enum([
  "METHOD",
  "PG_PROVIDER",
  "PLATFORM_TYPE",
  "CHANNEL_TYPE",
  "CARD_BRAND",
]);

const Metric = z.enum(["COUNT", "AMOUNT"]);

const Row = z.object({
  key: z.string().describe("차원 값 (예: CARD, TOSSPAYMENTS, SDK_MOBILE)"),
  label: z.string().describe("차원 값의 한국어 라벨. 매핑이 없으면 키와 동일"),
  total: z.number().describe("행 합계 (metric 기준)"),
  byStatus: z
    .record(z.string(), z.number())
    .describe(
      "결제 상태별 값 (metric 기준). 값이 0인 상태는 포함하지 않습니다.",
    ),
  shareByStatus: z
    .record(z.string(), z.number())
    .describe("행 합계 대비 상태별 비중 (0~1). 스택바의 100% 기준 표시에 사용"),
});

const OutputSchema = z.object({
  range: z.object({
    from: z.string(),
    to: z.string(),
    dimension: z.string(),
    metric: z.string(),
    currency: z.string().nullable().describe("metric=AMOUNT 일 때 사용한 통화"),
  }),
  totalCount: z.number().describe("집계에 포함된 결제 건수"),
  statuses: z.string().array().describe("등장한 결제 상태 목록 (스택 순서)"),
  statusLabels: z
    .record(z.string(), z.string())
    .describe("결제 상태별 한국어 라벨"),
  rows: Row.array().describe("행 합계 내림차순으로 정렬된 차원별 상태 분포"),
  collection: CollectionInfo,
  notes: z.string().array(),
});

const InputSchema = z.object({
  store: StoreId,
  from: DateTimeString.describe("조회 시작 일시 (포함). 결제 건 생성시점 기준"),
  to: DateTimeString.describe("조회 종료 일시 (미포함). 결제 건 생성시점 기준"),
  dimension: CrossDimension.describe(
    "결제 상태와 교차 집계할 차원. METHOD(결제수단), PG_PROVIDER(결제대행사), PLATFORM_TYPE(PC/모바일/API), CHANNEL_TYPE(실연동/테스트), CARD_BRAND(카드 브랜드)",
  ),
  metric: Metric.default("COUNT").describe(
    "집계 지표. COUNT 는 건수, AMOUNT 는 총 결제금액(amount.total) 합계입니다.",
  ),
  currency: z
    .string()
    .length(3)
    .toUpperCase()
    .optional()
    .describe(
      "집계할 통화. metric=AMOUNT 이고 구간에 여러 통화가 섞여 있으면 반드시 지정해야 합니다.",
    ),
  maxPayments: MaxPayments,
});

export const config = {
  title: "결제 상태 × 차원 교차 집계",
  description: `기간 내 모든 결제 건을 수집해 결제 상태와 지정한 차원(결제수단 / 결제대행사 / 플랫폼 등)을 교차 집계합니다.

콘솔의 "결제상태 상세 분석" 스택 바 차트에 대응하는 도구입니다.
행(차원 값)별로 상태 분포와 비중(shareByStatus)을 함께 제공하므로, 특정 결제수단·PG사에서 실패율이 높은지 바로 확인할 수 있습니다.

Note:
  - 수집 구간은 결제 건 생성시점 기준입니다.
  - metric=AMOUNT 는 서로 다른 통화를 합산하지 않기 위해 단일 통화로만 집계합니다. 여러 통화가 섞여 있으면 currency 를 지정하세요.`,
  inputSchema: InputSchema.shape,
  outputSchema: OutputSchema.shape,
};

export function init(
  tokenProvider: TokenProvider,
): ToolCallback<typeof config.inputSchema> {
  return async ({
    store,
    from,
    to,
    dimension,
    metric,
    currency,
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

    const notes: string[] = [];
    let payments: NormalizedPayment[] = collected.data.payments;

    if (currency != null) {
      payments = payments.filter((payment) => payment.currency === currency);
    } else if (metric === "AMOUNT") {
      const currencies = new Set(payments.map((payment) => payment.currency));
      if (currencies.size > 1) {
        return toolErrorResult({
          type: "error",
          data: {
            message: `구간에 여러 통화(${[...currencies].join(", ")})가 포함되어 있어 금액을 합산할 수 없습니다. currency 를 지정해 다시 조회해주세요.`,
          },
        });
      }
    }

    const rows = new Map<string, Map<string, number>>();
    const statuses = new Set<string>();
    for (const payment of payments) {
      const key = dimensionValue(payment, dimension);
      let row = rows.get(key);
      if (row == null) {
        row = new Map<string, number>();
        rows.set(key, row);
      }
      const value = metric === "AMOUNT" ? payment.total : 1;
      row.set(payment.status, (row.get(payment.status) ?? 0) + value);
      statuses.add(payment.status);
    }

    // 스택 순서를 안정적으로 유지하기 위해 라벨 정의 순서를 우선합니다.
    const statusOrder = Object.keys(STATUS_LABELS).filter((status) =>
      statuses.has(status),
    );
    for (const status of statuses) {
      if (!statusOrder.includes(status)) {
        statusOrder.push(status);
      }
    }

    const resultRows = [...rows.entries()]
      .map(([key, row]) => {
        const total = [...row.values()].reduce((sum, value) => sum + value, 0);
        const byStatus: Record<string, number> = {};
        const shareByStatus: Record<string, number> = {};
        for (const status of statusOrder) {
          const value = row.get(status);
          if (value == null || value === 0) continue;
          byStatus[status] = value;
          shareByStatus[status] = ratio(value, total);
        }
        return {
          key,
          label: dimensionLabel(dimension, key),
          total,
          byStatus,
          shareByStatus,
        };
      })
      .sort((a, b) => b.total - a.total);

    if (collected.data.collection.truncated) {
      notes.push(
        `수집 상한(maxPayments=${maxPayments})에 도달해 일부 결제 건만 집계했습니다. 구간을 나눠 조회하거나 maxPayments 를 늘려주세요.`,
      );
    }
    if (metric === "AMOUNT") {
      notes.push(
        "금액 지표는 amount.total(총 결제금액) 기준이며, 실패 건은 시도 금액이 집계됩니다.",
      );
    }

    const structuredContent: z.infer<typeof OutputSchema> = {
      range: { from, to, dimension, metric, currency: currency ?? null },
      totalCount: payments.length,
      statuses: statusOrder,
      statusLabels: Object.fromEntries(
        statusOrder.map((status) => [status, STATUS_LABELS[status] ?? status]),
      ),
      rows: resultRows,
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
