import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GraphQLClient } from "graphql-request";
import z from "zod";
import { getSettlementSummaries } from "./request/getSettlements.ts";
import { validateReconciliationDateRange } from "./utils/dateRange.ts";
import { getToken, type TokenProvider } from "./utils/key.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "getSettlementSummaries";

const DateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD 형식의 날짜여야 합니다.");

const Aggregate = z.object({
  settlementAmount: z.number().describe("정산 금액"),
  settlementCount: z.number().describe("정산 건 수"),
  feeAmount: z.number().describe("PG 수수료"),
  feeVatAmount: z.number().describe("PG 수수료 부가세"),
  cancelAmount: z.number().describe("취소 금액"),
  cancelCount: z.number().describe("취소 건 수"),
  transactionAmount: z.number().describe("거래 합계 금액"),
  postCorrectionCount: z.number().describe("후보정 건 수"),
  postCorrectionAmount: z.number().describe("후보정 금액"),
});

const Detail = Aggregate.extend({
  storeId: z.string().optional().describe("하위 상점 아이디"),
  pgProvider: z.string().optional().describe("대사용 PG사"),
  pgMerchantId: z.string().optional().describe("PG사 가맹점 식별 아이디"),
});

const Summary = z.object({
  date: z.string().describe("정산일"),
  settlementCurrency: z.string().describe("정산 통화"),
  transactionCurrency: z.string().describe("결제 통화"),
  aggregate: Aggregate.describe("정산내역 합산 데이터"),
  details: Detail.array().describe("상점/PG 별 상세 데이터"),
});

const OutputSchema = z.object({
  items: Summary.array().describe("일별 정산 요약 목록"),
  hasNextPage: z.boolean().describe("다음 페이지 존재 여부"),
  endCursor: z.string().describe("다음 페이지 조회에 사용할 커서"),
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
  first: z
    .number()
    .min(1)
    .max(100)
    .default(31)
    .describe("조회할 일 수 (최대 100)"),
  after: z.string().optional().describe("이전 페이지의 마지막 커서"),
});

export const config = {
  title: "거래대사 정산 요약 조회",
  description: `특정 하위 상점(store)의 거래대사 정산 요약을 정산일 기준 일별로 조회합니다.

각 일자별로 정산 금액/건수, PG 수수료, 취소, 후보정 합산치와 상점·PG별 상세 내역을 제공합니다.
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
  return async ({ store, from, to, first, after }) => {
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

    const result = await getSettlementSummaries({
      client,
      authorization: token.data,
      from,
      until: to,
      filter: { storeIds: store == null ? undefined : [store] },
      first,
      after,
    });

    if (result.type === "error") {
      return toolErrorResult(result);
    }

    try {
      const structuredContent: z.infer<typeof OutputSchema> = {
        items: result.data.edges.map(({ node }) => ({
          date: node.date,
          settlementCurrency: node.settlementCurrency,
          transactionCurrency: node.transactionCurrency,
          aggregate: node.aggregate,
          details: node.details.map((detail) => ({
            storeId: detail.storePlainId ?? undefined,
            pgProvider: detail.pgSpecifier?.pgProvider ?? undefined,
            pgMerchantId: detail.pgSpecifier?.pgMerchantId ?? undefined,
            settlementAmount: detail.settlementAmount,
            settlementCount: detail.settlementCount,
            feeAmount: detail.feeAmount,
            feeVatAmount: detail.feeVatAmount,
            cancelAmount: detail.cancelAmount,
            cancelCount: detail.cancelCount,
            transactionAmount: detail.transactionAmount,
            postCorrectionCount: detail.postCorrectionCount,
            postCorrectionAmount: detail.postCorrectionAmount,
          })),
        })),
        hasNextPage: result.data.pageInfo.hasNextPage,
        endCursor: result.data.pageInfo.endCursor,
      };
      return {
        content: [
          { type: "text", text: JSON.stringify(structuredContent, null, 2) },
        ],
        structuredContent,
      };
    } catch {
      return {
        content: [{ type: "text", text: "서버로부터 잘못된 응답 수신" }],
        isError: true,
      };
    }
  };
}
