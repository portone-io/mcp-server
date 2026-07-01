import { parse } from "graphql";
import { type GraphQLClient, gql } from "graphql-request";
import { match, P } from "ts-pattern";
import z from "zod";
import { nullableObject } from "../utils/nullableObject.ts";
import type { Result } from "../utils/result.ts";

const ErrorResponse = z.object({
  __typename: z.string(),
  message: z.string().nullable(),
});

/** 거래대사 대사 상태 (조회 필터용) */
export const ReconciliationStatus = z.enum([
  "MATCHED",
  "NOT_MATCHED",
  "INCOMPARABLE",
  "NOT_COLLECTED",
]);
export type ReconciliationStatus = z.infer<typeof ReconciliationStatus>;

/** 거래대사 결제 상태 (승인/취소/후보정) */
export const ReconciliationActionType = z.enum([
  "APPROVAL",
  "FULL_CANCEL",
  "PARTIAL_CANCEL",
  "UNCLASSIFIED_CANCEL",
  "POST_CORRECTION",
]);
export type ReconciliationActionType = z.infer<typeof ReconciliationActionType>;

/** 거래대사 결제 수단 필터 값 */
export const ReconciliationPaymentMethodType = z.enum([
  "CARD",
  "CHARGE",
  "TRANSFER",
  "ARS",
  "GIFT_CERTIFICATE",
  "MOBILE",
  "VIRTUAL_ACCOUNT",
  "ETC",
  "EASY_PAY_ETC",
  "EASY_PAY_PAYCO",
  "EASY_PAY_SAMSUNGPAY",
  "EASY_PAY_SSGPAY",
  "EASY_PAY_KAKAOPAY",
  "EASY_PAY_NAVERPAY",
  "EASY_PAY_CHAI",
  "EASY_PAY_LPAY",
  "EASY_PAY_KPAY",
  "EASY_PAY_TOSSPAY",
  "EASY_PAY_LGPAY",
  "EASY_PAY_APPLEPAY",
  "EASY_PAY_PINPAY",
  "EASY_PAY_SKPAY",
  "EASY_PAY_WECHATPAY",
  "EASY_PAY_PAYPAL",
  "EASY_PAY_ALIPAY",
  "EASY_PAY_TOSS_BRANDPAY",
  "EASY_PAY_KB_APP",
  "EASY_PAY_TMONEYPAY",
  "EASY_PAY_HYPHEN",
  "EASY_PAY_OK_CASHBAG",
  "EASY_PAY_BENEPIA",
]);
export type ReconciliationPaymentMethodType = z.infer<
  typeof ReconciliationPaymentMethodType
>;

/** 거래대사 매치 실패 사유 */
export const ReconciliationNotMatchedReason = z.enum([
  "PAYMENT_AMOUNT_NOT_MATCHED",
  "TAX_FREE_AMOUNT_NOT_MATCHED",
  "VAT_AMOUNT_NOT_MATCHED",
  "ESCROW_NOT_MATCHED",
  "INSTALLMENT_MONTH_NOT_MATCHED",
  "PAYMENT_DATE_NOT_MATCHED",
]);
export type ReconciliationNotMatchedReason = z.infer<
  typeof ReconciliationNotMatchedReason
>;

/**
 * 대사 불가(INCOMPARABLE) 사유. 게이트웨이가 내부 incomparable_reason 과
 * backward_incomparable_reason(PG_COLLECTION_FAILED / PG_DATA_MISSING 등)을
 * 하나의 enum 으로 병합해 노출합니다.
 */
export const ReconciliationIncomparableReason = z.enum([
  "NO_MATCHING_PORTONE_TRANSACTION",
  "CHANNEL_MISMATCH",
  "RECONCILIATION_SKIPPED",
  "PG_COLLECTION_FAILED",
  "PG_DATA_MISSING",
  "UNKNOWN",
]);
export type ReconciliationIncomparableReason = z.infer<
  typeof ReconciliationIncomparableReason
>;

/** 대사용 PG사 (거래대사 전용 PG 식별자) */
export const ReconciliationPgProvider = z.enum([
  "KAKAOPAY",
  "NICEPAY",
  "NAVERPAY",
  "UPLUS",
  "TOSSPAYMENTS",
  "TOSSPAY",
  "PAYCO",
  "KCP",
  "DANAL",
  "EXIMBAY",
  "INICIS",
  "HECTO",
  "KSNET",
  "KPN",
  "HYPHEN",
]);
export type ReconciliationPgProvider = z.infer<typeof ReconciliationPgProvider>;

/** 정렬 방식 */
export const SortOrder = z.enum(["DESC", "ASC"]);
export type SortOrder = z.infer<typeof SortOrder>;

const Settlement = z.object(
  nullableObject({
    feeAmount: z.number(),
    feeVatAmount: z.number(),
    settlementAmount: z.number(),
    settlementCurrency: z.string(),
    settlementDate: z.string(),
  }),
);

const PaymentMethod = z
  .object({
    __typename: z.string(),
    paymentMethodType: z.string().nullable().optional(),
    installmentMonth: z.number().nullable().optional(),
    name: z.string().nullable().optional(),
  })
  .partial();

const PgSpecifier = z.object(
  nullableObject({
    pgMerchantId: z.string(),
    pgProvider: z.string(),
  }),
);

/**
 * 거래대사 건 하나에 대한 응답. GraphQL 인터페이스(PaymentReconciliation)의
 * 공통 필드와 각 상태별 구체 타입(Matched/NotMatched/Incomparable/NotCollected/PostCorrection)의
 * 필드를 모두 optional 로 수용합니다. 상태는 __typename 으로 판별합니다.
 */
const ReconciliationNode = z
  .object({
    __typename: z.string(),
    plainId: z.string(),
    actionType: z.string(),
    pgSpecifier: PgSpecifier.nullable(),
    merchantPlainId: z.string(),
    paymentAmount: z.number(),
    taxFreeAmount: z.number(),
    vatAmount: z.number(),
    supplyAmount: z.number(),
    anomalyAmount: z.number().nullable().optional(),
    paidAt: z.string(),
    isEscrow: z.boolean().nullable(),
    paymentCurrency: z.string(),
    paymentMethod: PaymentMethod.nullable(),
    settlement: Settlement.nullable(),
    // 상태별 구체 필드 (필수형 / optional 형이 타입마다 다름)
    pgTxId: z.string().nullable().optional(),
    pgTxIdOptional: z.string().nullable().optional(),
    transactionPlainId: z.string().nullable().optional(),
    transactionPlainIdOptional: z.string().nullable().optional(),
    paymentPlainId: z.string().nullable().optional(),
    paymentPlainIdOptional: z.string().nullable().optional(),
    orderName: z.string().nullable().optional(),
    orderNameOptional: z.string().nullable().optional(),
    storePlainId: z.string().nullable().optional(),
    storePlainIdOptional: z.string().nullable().optional(),
    notMatchedReasons: z.array(z.string()).nullable().optional(),
    // INCOMPARABLE(대사 불가) 사유. 게이트웨이는 내부의 backward_incomparable
    // 상태/사유를 INCOMPARABLE + 이 단일 reason 으로 병합해 노출합니다.
    // enum 드리프트 방지를 위해 문자열로 수용합니다.
    reason: z.string().nullable().optional(),
  })
  .partial({
    pgSpecifier: true,
    isEscrow: true,
    paymentMethod: true,
    settlement: true,
  });
export type ReconciliationNode = z.infer<typeof ReconciliationNode>;

const CursorPageInfo = z.object({
  startCursor: z.string(),
  endCursor: z.string(),
  hasPreviousPage: z.boolean(),
  hasNextPage: z.boolean(),
});

const ReconciliationsPayload = z.object({
  edges: z.array(z.object({ node: ReconciliationNode, cursor: z.string() })),
  pageInfo: CursorPageInfo,
});

const GetReconciliationsResponse = z
  .object({
    merchant: z
      .object({
        reconciliation: z.object({
          paymentReconciliations: ReconciliationsPayload,
        }),
      })
      .or(ErrorResponse),
  })
  .transform(({ merchant }) => {
    if ("__typename" in merchant) return merchant;
    return merchant.reconciliation.paymentReconciliations;
  });

type GetReconciliationsResponse = Exclude<
  z.infer<typeof GetReconciliationsResponse>,
  z.infer<typeof ErrorResponse>
>;

const getReconciliationsQuery = parse(gql`
query GetReconciliations(
  $dateCondition: ReconciliationDateConditionInput!
  $searchCondition: PaymentReconciliationSearchConditionInput
  $filter: PaymentReconciliationFilterInput
  $order: PaymentReconciliationOrderInput
  $first: Int!
  $after: String
) {
  merchant {
    ...ErrorFragment
    ... on Merchant {
      reconciliation {
        paymentReconciliations(
          dateCondition: $dateCondition
          searchCondition: $searchCondition
          filter: $filter
          order: $order
          first: $first
          after: $after
        ) {
          edges {
            cursor
            node {
              __typename
              plainId
              actionType
              pgSpecifier {
                pgMerchantId
                pgProvider
              }
              merchantPlainId
              paymentAmount
              taxFreeAmount
              vatAmount
              supplyAmount
              paidAt
              isEscrow
              paymentCurrency
              paymentMethod {
                __typename
                ... on ReconciliationPaymentMethodCard {
                  installmentMonth
                }
                ... on ReconciliationPaymentMethodEasyPay {
                  paymentMethodType
                }
                ... on ReconciliationPaymentMethodEtc {
                  name
                }
              }
              settlement {
                feeAmount
                feeVatAmount
                settlementAmount
                settlementCurrency
                settlementDate
              }
              ... on PaymentReconciliationMatched {
                pgTxId
                transactionPlainId
                paymentPlainId
                orderName
                storePlainId
              }
              ... on PaymentReconciliationNotMatched {
                pgTxId
                anomalyAmount
                transactionPlainId
                paymentPlainId
                orderName
                storePlainId
                notMatchedReasons
              }
              ... on PaymentReconciliationIncomparable {
                pgTxId
                anomalyAmount
                reason
                paymentPlainIdOptional
                orderNameOptional
              }
              ... on PaymentReconciliationNotCollected {
                pgTxIdOptional
                anomalyAmount
                transactionPlainIdOptional
                paymentPlainIdOptional
                orderNameOptional
                storePlainIdOptional
              }
              ... on PaymentReconciliationPostCorrection {
                pgTxIdOptional
                anomalyAmount
                transactionPlainIdOptional
                paymentPlainIdOptional
                orderNameOptional
                storePlainIdOptional
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasPreviousPage
            hasNextPage
          }
        }
      }
    }
  }
}

fragment ErrorFragment on Error {
  __typename
  message
}
`);

/** 거래대사 조회 필터 */
export const ReconciliationFilter = z
  .object({
    storeIds: z.array(z.string()),
    channelKeys: z.array(z.string()),
    pgSpecifiers: z.array(
      z.object({
        pgMerchantId: z.string(),
        pgProvider: ReconciliationPgProvider,
      }),
    ),
    paymentMethodTypes: z.array(ReconciliationPaymentMethodType),
    paymentReconciliationStatuses: z.array(ReconciliationStatus),
    actionTypes: z.array(ReconciliationActionType),
    transactionCurrencies: z.array(z.string()),
    settlementCurrencies: z.array(z.string()),
  })
  .partial();
export type ReconciliationFilter = z.infer<typeof ReconciliationFilter>;

/** 거래대사 검색어 조건 */
export const ReconciliationSearchCondition = z
  .object({
    paymentPlainId: z.string(),
    transactionPlainId: z.string(),
    pgTxId: z.string(),
    orderName: z.string(),
  })
  .partial();
export type ReconciliationSearchCondition = z.infer<
  typeof ReconciliationSearchCondition
>;

/** 거래대사 정렬 조건 */
export const ReconciliationOrder = z
  .object({
    settlementDate: SortOrder,
    transactionDate: SortOrder,
    transactionAmount: SortOrder,
    anomalyAmount: SortOrder,
    settlementAmount: SortOrder,
  })
  .partial();
export type ReconciliationOrder = z.infer<typeof ReconciliationOrder>;

/**
 * 거래대사 건별 내역을 조회합니다. dateCondition 은 정산일 범위 또는 결제일 범위 중
 * 하나를 지정합니다 (from/until 은 YYYY-MM-DD 형식).
 */
export async function getReconciliations({
  client,
  authorization,
  dateType,
  from,
  until,
  filter,
  searchCondition,
  order,
  first,
  after,
}: {
  client: GraphQLClient;
  authorization: string;
  dateType: "SETTLEMENT" | "TRANSACTION";
  from: string;
  until: string;
  filter?: ReconciliationFilter;
  searchCondition?: ReconciliationSearchCondition;
  order?: ReconciliationOrder;
  first: number;
  after?: string;
}): Promise<Result<GetReconciliationsResponse>> {
  const dateRange = { from, until };
  const dateCondition =
    dateType === "SETTLEMENT"
      ? { settlementDateRange: dateRange }
      : { transactionDateRange: dateRange };
  try {
    const response = await client.request({
      document: getReconciliationsQuery,
      requestHeaders: {
        authorization,
      },
      variables: {
        dateCondition,
        searchCondition,
        filter,
        order,
        first,
        after,
      },
    });
    const parsed = await GetReconciliationsResponse.parseAsync(response);

    return match(parsed)
      .returnType<Result<GetReconciliationsResponse>>()
      .with({ __typename: P.nonNullable }, ({ __typename, message }) => ({
        type: "error",
        data: {
          message,
          type: __typename,
        },
      }))
      .otherwise((data) => ({
        type: "success",
        data,
      }));
  } catch (error) {
    if (error instanceof Error) {
      return {
        type: "error",
        data: error,
      };
    } else {
      return {
        type: "error",
        data: {
          message: `알 수 없는 오류가 발생했습니다.`,
          cause: error,
        },
      };
    }
  }
}
