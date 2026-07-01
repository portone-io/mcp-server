import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GraphQLClient } from "graphql-request";
import z from "zod";
import { getSettlementStatistics } from "./request/getSettlements.ts";
import { validateReconciliationDateRange } from "./utils/dateRange.ts";
import { getToken, type TokenProvider } from "./utils/key.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "getSettlementStatistics";

const DateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD 형식의 날짜여야 합니다.");

const Statistic = z.object({
  currency: z.string().describe("통화"),
  amount: z.number().describe("정산 금액"),
  count: z.number().describe("정산 건 수"),
  pendingAmount: z.number().describe("정산 예정 금액"),
  pendingCount: z.number().describe("정산 예정 건 수"),
});

const DailyStatistics = z.object({
  date: z.string().describe("정산일"),
  statistics: Statistic.array().describe("해당 일자의 통화별 통계"),
});

const OutputSchema = z.object({
  rangeTotalStatistics: Statistic.array().describe(
    "검색 구간 내 통화별 합산 통계",
  ),
  dailyStatistics: DailyStatistics.array().describe("일별 정산 통계"),
});

const InputSchema = z.object({
  store: z
    .string()
    .optional()
    .describe(
      "조회할 하위 상점 아이디. 생략하면 고객사 내 모든 하위 상점을 조회합니다.",
    ),
  from: DateString.describe("정산일 조회 시작일 (YYYY-MM-DD)"),
  to: DateString.describe("정산일 조회 종료일 (YYYY-MM-DD)"),
});

export const config = {
  title: "거래대사 정산 통계 조회",
  description: `특정 하위 상점(store)의 거래대사 정산 통계를 조회합니다.

검색 구간 내 통화별 합산 통계(정산/정산예정 금액·건수)와 일별 통계를 제공합니다.
날짜는 반드시 YYYY-MM-DD 형식으로 입력합니다.
조회 기간 제약: from 은 최근 6개월 이내여야 하고, 한 번에 조회 가능한 구간은 최대 3개월입니다.
store 아이디는 list_stores 도구로 먼저 조회할 수 있습니다.`,
  inputSchema: InputSchema.shape,
  outputSchema: OutputSchema.shape,
};

export function init(
  tokenProvider: TokenProvider,
  client: GraphQLClient,
): ToolCallback<typeof config.inputSchema> {
  return async ({ store, from, to }) => {
    const dateRangeError = validateReconciliationDateRange(from, to);
    if (dateRangeError != null) {
      return toolErrorResult({
        type: "error",
        data: { message: dateRangeError },
      });
    }

    const token = await getToken(tokenProvider);
    if (token.type === "error") {
      return toolErrorResult(token);
    }

    const result = await getSettlementStatistics({
      client,
      authorization: token.data,
      from,
      until: to,
      filter: { storeIds: store == null ? undefined : [store] },
    });

    if (result.type === "error") {
      return toolErrorResult(result);
    }

    const structuredContent: z.infer<typeof OutputSchema> = {
      rangeTotalStatistics: result.data.rangeTotalStatistics,
      dailyStatistics: result.data.dailyStatistics,
    };
    return {
      content: [
        { type: "text", text: JSON.stringify(structuredContent, null, 2) },
      ],
      structuredContent,
    };
  };
}
