import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GraphQLClient } from "graphql-request";
import { match } from "ts-pattern";
import z from "zod";
import {
  getReconciliations,
  ReconciliationActionType,
  type ReconciliationNode,
  ReconciliationPaymentMethodType,
  ReconciliationStatus,
} from "./request/getReconciliations.ts";
import { validateReconciliationDateRange } from "./utils/dateRange.ts";
import { getToken, type TokenProvider } from "./utils/key.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "getReconciliationsByFilter";

const DateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD 형식의 날짜여야 합니다.");

const Settlement = z
  .object({
    feeAmount: z.number().describe("PG 수수료"),
    feeVatAmount: z.number().describe("PG 수수료 부가세"),
    settlementAmount: z.number().describe("정산 금액"),
    settlementCurrency: z.string().describe("정산 통화"),
    settlementDate: z.string().describe("정산일"),
  })
  .partial();

const Reconciliation = z
  .object({
    id: z.string().describe("거래대사 아이디"),
    status: z
      .string()
      .describe(
        "대사 상태 (MATCHED/NOT_MATCHED/INCOMPARABLE/NOT_COLLECTED/POST_CORRECTION)",
      ),
    actionType: z.string().describe("결제 상태 (승인/취소/후보정)"),
    pgProvider: z.string().describe("대사용 PG사"),
    pgMerchantId: z.string().describe("PG사 가맹점 식별 아이디"),
    pgTxId: z.string().describe("PG사 거래 아이디"),
    paymentAmount: z.number().describe("결제 금액"),
    supplyAmount: z.number().describe("공급가액"),
    vatAmount: z.number().describe("부가세"),
    taxFreeAmount: z.number().describe("면세가액"),
    anomalyAmount: z.number().describe("거래이상 금액"),
    paidAt: z.string().describe("결제일"),
    paymentCurrency: z.string().describe("결제 통화"),
    isEscrow: z.boolean().describe("에스크로 여부"),
    paymentMethodType: z.string().describe("결제 수단 종류(__typename 기반)"),
    transactionId: z.string().describe("포트원 결제 아이디"),
    paymentId: z.string().describe("고객사 결제 아이디"),
    orderName: z.string().describe("주문명"),
    storeId: z.string().describe("하위 상점 아이디"),
    notMatchedReasons: z
      .array(z.string())
      .describe("대사 불일치 사유 목록 (NOT_MATCHED 인 경우)"),
    incomparableReason: z
      .string()
      .describe(
        "대사 불가 사유 (INCOMPARABLE 인 경우). 내부 backward_incomparable 사유(PG_COLLECTION_FAILED/PG_DATA_MISSING 등)도 이 값으로 병합되어 제공됩니다.",
      ),
    settlement: Settlement.describe("정산 정보"),
  })
  .partial();

const OutputSchema = z.object({
  items: Reconciliation.array().describe("조회된 거래대사 목록"),
  hasNextPage: z.boolean().describe("다음 페이지 존재 여부"),
  endCursor: z
    .string()
    .describe("다음 페이지 조회에 사용할 커서 (after 로 전달)"),
});

const InputSchema = z.object({
  store: z
    .string()
    .optional()
    .describe(
      "조회할 하위 상점 아이디. 생략하면 고객사 내 모든 하위 상점을 조회합니다.",
    ),
  dateType: z
    .enum(["SETTLEMENT", "TRANSACTION"])
    .default("TRANSACTION")
    .describe("from/to 로 제약할 기준 (정산일 / 결제일)"),
  from: DateString.describe("조회 시작일 (YYYY-MM-DD)"),
  to: DateString.describe("조회 종료일 (YYYY-MM-DD)"),
  statuses: z
    .array(ReconciliationStatus)
    .optional()
    .describe(
      "포함할 대사 상태 목록. 불일치 건만 보려면 [NOT_MATCHED] 로 지정합니다.",
    ),
  actionTypes: z
    .array(ReconciliationActionType)
    .optional()
    .describe("포함할 결제 상태 목록"),
  paymentMethodTypes: z
    .array(ReconciliationPaymentMethodType)
    .optional()
    .describe("포함할 결제 수단 목록"),
  transactionCurrencies: z
    .array(z.string().length(3).toUpperCase())
    .optional()
    .describe("포함할 결제 통화 목록 (세 자리 통화 코드)"),
  settlementCurrencies: z
    .array(z.string().length(3).toUpperCase())
    .optional()
    .describe("포함할 정산 통화 목록 (세 자리 통화 코드)"),
  paymentId: z.string().optional().describe("고객사 결제 아이디 검색"),
  transactionId: z.string().optional().describe("포트원 결제 아이디 검색"),
  pgTxId: z.string().optional().describe("PG사 거래 아이디 검색"),
  orderName: z.string().optional().describe("주문명 검색"),
  first: z
    .number()
    .min(1)
    .max(100)
    .default(20)
    .describe("조회할 건 수 (최대 100)"),
  after: z
    .string()
    .optional()
    .describe("이전 페이지의 마지막 커서 (endCursor 값)"),
});

export const config = {
  title: "거래대사 건별 내역 조회",
  description: `특정 하위 상점(store)의 거래대사(정산/거래 대사) 건별 내역을 조회합니다.

각 건은 다음 상태 중 하나를 가집니다:
  MATCHED(대사 성공), NOT_MATCHED(대사 불일치), INCOMPARABLE(대사 불가), NOT_COLLECTED(PG 정보 미수집), POST_CORRECTION(후보정)
  (내부적으로 구분되는 역방향 대사 불가(backward incomparable)는 INCOMPARABLE 로 합쳐져 제공됩니다.)

대사 불일치 상세는 statuses=[NOT_MATCHED] 로 조회 후 각 건의 notMatchedReasons 를 확인합니다.
대사 불가 사유는 INCOMPARABLE 건의 incomparableReason 필드에서 확인합니다.
날짜는 반드시 YYYY-MM-DD 형식으로 입력하며, dateType 으로 정산일/결제일 기준을 선택합니다.
조회 기간 제약: from 은 최근 6개월 이내여야 하고, 한 번에 조회 가능한 구간은 최대 3개월입니다.
store 아이디는 list_stores 도구로 먼저 조회할 수 있습니다.`,
  inputSchema: InputSchema.shape,
  outputSchema: OutputSchema.shape,
};

function normalize(node: ReconciliationNode): z.infer<typeof Reconciliation> {
  const status = match(node.__typename)
    .with("PaymentReconciliationMatched", () => "MATCHED")
    .with("PaymentReconciliationNotMatched", () => "NOT_MATCHED")
    .with("PaymentReconciliationIncomparable", () => "INCOMPARABLE")
    .with("PaymentReconciliationNotCollected", () => "NOT_COLLECTED")
    .with("PaymentReconciliationPostCorrection", () => "POST_CORRECTION")
    .otherwise((t) => t);

  return {
    id: node.plainId,
    status,
    actionType: node.actionType,
    pgProvider: node.pgSpecifier?.pgProvider ?? undefined,
    pgMerchantId: node.pgSpecifier?.pgMerchantId ?? undefined,
    pgTxId: node.pgTxId ?? node.pgTxIdOptional ?? undefined,
    paymentAmount: node.paymentAmount,
    supplyAmount: node.supplyAmount,
    vatAmount: node.vatAmount,
    taxFreeAmount: node.taxFreeAmount,
    anomalyAmount: node.anomalyAmount ?? undefined,
    paidAt: node.paidAt,
    paymentCurrency: node.paymentCurrency,
    isEscrow: node.isEscrow ?? undefined,
    paymentMethodType:
      node.paymentMethod?.paymentMethodType ??
      node.paymentMethod?.__typename ??
      undefined,
    transactionId:
      node.transactionPlainId ?? node.transactionPlainIdOptional ?? undefined,
    paymentId: node.paymentPlainId ?? node.paymentPlainIdOptional ?? undefined,
    orderName: node.orderName ?? node.orderNameOptional ?? undefined,
    storeId: node.storePlainId ?? node.storePlainIdOptional ?? undefined,
    notMatchedReasons: node.notMatchedReasons ?? undefined,
    incomparableReason: node.reason ?? undefined,
    settlement: node.settlement
      ? {
          feeAmount: node.settlement.feeAmount ?? undefined,
          feeVatAmount: node.settlement.feeVatAmount ?? undefined,
          settlementAmount: node.settlement.settlementAmount ?? undefined,
          settlementCurrency: node.settlement.settlementCurrency ?? undefined,
          settlementDate: node.settlement.settlementDate ?? undefined,
        }
      : undefined,
  };
}

export function init(
  tokenProvider: TokenProvider,
  client: GraphQLClient,
): ToolCallback<typeof config.inputSchema> {
  return async ({
    store,
    dateType,
    from,
    to,
    statuses,
    actionTypes,
    paymentMethodTypes,
    transactionCurrencies,
    settlementCurrencies,
    paymentId,
    transactionId,
    pgTxId,
    orderName,
    first,
    after,
  }) => {
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

    const searchCondition =
      paymentId == null &&
      transactionId == null &&
      pgTxId == null &&
      orderName == null
        ? undefined
        : {
            paymentPlainId: paymentId,
            transactionPlainId: transactionId,
            pgTxId,
            orderName,
          };

    const result = await getReconciliations({
      client,
      authorization: token.data,
      dateType,
      from,
      until: to,
      searchCondition,
      filter: {
        storeIds: store == null ? undefined : [store],
        paymentReconciliationStatuses: statuses,
        actionTypes,
        paymentMethodTypes,
        transactionCurrencies,
        settlementCurrencies,
      },
      first,
      after,
    });

    if (result.type === "error") {
      return toolErrorResult(result);
    }

    try {
      const structuredContent: z.infer<typeof OutputSchema> = {
        items: result.data.edges.map((edge) => normalize(edge.node)),
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
