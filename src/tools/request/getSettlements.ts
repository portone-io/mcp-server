import { parse } from "graphql";
import { type GraphQLClient, gql } from "graphql-request";
import { match, P } from "ts-pattern";
import z from "zod";
import { nullableObject } from "../utils/nullableObject.ts";
import { toRequestError } from "../utils/requestError.ts";
import type { Result } from "../utils/result.ts";
import { ReconciliationPgProvider } from "./getReconciliations.ts";

const ErrorResponse = z.object({
  __typename: z.string(),
  message: z.string().nullable(),
});

/** 정산/거래 요약·통계 조회용 필터 (하위 상점 및 PG 식별자 기준) */
export const SettlementFilter = z
  .object({
    storeIds: z.array(z.string()),
    pgSpecifiers: z.array(
      z.object({
        pgMerchantId: z.string(),
        pgProvider: ReconciliationPgProvider,
      }),
    ),
  })
  .partial();
export type SettlementFilter = z.infer<typeof SettlementFilter>;

// ---------------------------------------------------------------------------
// 정산 요약 (paymentReconciliationSettlementSummaries)
// ---------------------------------------------------------------------------

const SettlementAggregate = z.object({
  settlementAmount: z.number(),
  settlementCount: z.number(),
  feeAmount: z.number(),
  feeVatAmount: z.number(),
  cancelAmount: z.number(),
  cancelCount: z.number(),
  transactionAmount: z.number(),
  postCorrectionCount: z.number(),
  postCorrectionAmount: z.number(),
});

const SettlementDetail = z
  .object({
    storePlainId: z.string().nullable(),
    pgSpecifier: z.object(
      nullableObject({ pgMerchantId: z.string(), pgProvider: z.string() }),
    ),
    settlementAmount: z.number(),
    settlementCount: z.number(),
    feeAmount: z.number(),
    feeVatAmount: z.number(),
    cancelAmount: z.number(),
    cancelCount: z.number(),
    transactionAmount: z.number(),
    postCorrectionCount: z.number(),
    postCorrectionAmount: z.number(),
  })
  .partial({ storePlainId: true, pgSpecifier: true });

const SettlementSummaryNode = z.object({
  date: z.string(),
  settlementCurrency: z.string(),
  transactionCurrency: z.string(),
  aggregate: SettlementAggregate,
  details: z.array(SettlementDetail),
});
export type SettlementSummaryNode = z.infer<typeof SettlementSummaryNode>;

const CursorPageInfo = z.object({
  startCursor: z.string(),
  endCursor: z.string(),
  hasPreviousPage: z.boolean(),
  hasNextPage: z.boolean(),
});

const SettlementSummariesPayload = z.object({
  edges: z.array(z.object({ node: SettlementSummaryNode, cursor: z.string() })),
  pageInfo: CursorPageInfo,
});

const GetSettlementSummariesResponse = z
  .object({
    merchant: z
      .object({
        reconciliation: z.object({
          paymentReconciliationSettlementSummaries: SettlementSummariesPayload,
        }),
      })
      .or(ErrorResponse),
  })
  .transform(({ merchant }) => {
    if ("__typename" in merchant) return merchant;
    return merchant.reconciliation.paymentReconciliationSettlementSummaries;
  });

type GetSettlementSummariesResponse = Exclude<
  z.infer<typeof GetSettlementSummariesResponse>,
  z.infer<typeof ErrorResponse>
>;

const getSettlementSummariesQuery = parse(gql`
query GetSettlementSummaries(
  $dateRange: DateRangeInput!
  $filter: PaymentReconciliationSettlementSummaryFilterInput
  $first: Int!
  $after: String
) {
  merchant {
    ...ErrorFragment
    ... on Merchant {
      reconciliation {
        paymentReconciliationSettlementSummaries(
          dateRange: $dateRange
          filter: $filter
          first: $first
          after: $after
        ) {
          edges {
            cursor
            node {
              date
              settlementCurrency
              transactionCurrency
              aggregate {
                settlementAmount
                settlementCount
                feeAmount
                feeVatAmount
                cancelAmount
                cancelCount
                transactionAmount
                postCorrectionCount
                postCorrectionAmount
              }
              details {
                storePlainId
                pgSpecifier {
                  pgMerchantId
                  pgProvider
                }
                settlementAmount
                settlementCount
                feeAmount
                feeVatAmount
                cancelAmount
                cancelCount
                transactionAmount
                postCorrectionCount
                postCorrectionAmount
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

/**
 * 거래대사 정산 요약 정보를 일별로 조회합니다 (from/until 은 YYYY-MM-DD 형식).
 */
export async function getSettlementSummaries({
  client,
  authorization,
  from,
  until,
  filter,
  first,
  after,
}: {
  client: GraphQLClient;
  authorization: string;
  from: string;
  until: string;
  filter?: SettlementFilter;
  first: number;
  after?: string;
}): Promise<Result<GetSettlementSummariesResponse>> {
  try {
    const response = await client.request({
      document: getSettlementSummariesQuery,
      requestHeaders: { authorization },
      variables: { dateRange: { from, until }, filter, first, after },
    });
    const parsed = await GetSettlementSummariesResponse.parseAsync(response);

    return match(parsed)
      .returnType<Result<GetSettlementSummariesResponse>>()
      .with({ __typename: P.nonNullable }, ({ __typename, message }) => ({
        type: "error",
        data: { message, type: __typename },
      }))
      .otherwise((data) => ({ type: "success", data }));
  } catch (error) {
    return toRequestError(error);
  }
}

// ---------------------------------------------------------------------------
// 정산 통계 (paymentReconciliationSettlementStatistics)
// ---------------------------------------------------------------------------

const SettlementStatistic = z.object({
  amount: z.number(),
  count: z.number(),
  pendingAmount: z.number(),
  pendingCount: z.number(),
  currency: z.string(),
});

const DailySettlementStatistics = z.object({
  date: z.string(),
  statistics: z.array(SettlementStatistic),
});

const SettlementStatisticsPayload = z.object({
  __typename: z.literal("PaymentReconciliationSettlementStatisticsPayload"),
  rangeTotalStatistics: z.array(SettlementStatistic),
  dailyStatistics: z.array(DailySettlementStatistics),
});
export type SettlementStatisticsPayload = z.infer<
  typeof SettlementStatisticsPayload
>;

const GetSettlementStatisticsResponse = z
  .object({
    merchant: z
      .object({
        reconciliation: z.object({
          // Output 는 union 이므로 payload 또는 error typename 을 가짐
          paymentReconciliationSettlementStatistics:
            SettlementStatisticsPayload.or(ErrorResponse),
        }),
      })
      .or(ErrorResponse),
  })
  .transform(({ merchant }) => {
    if ("__typename" in merchant) return merchant;
    return merchant.reconciliation.paymentReconciliationSettlementStatistics;
  });

type GetSettlementStatisticsResponse = Extract<
  z.infer<typeof GetSettlementStatisticsResponse>,
  { __typename: "PaymentReconciliationSettlementStatisticsPayload" }
>;

const getSettlementStatisticsQuery = parse(gql`
query GetSettlementStatistics(
  $dateRange: DateRangeInput!
  $filter: PaymentReconciliationSettlementStatisticsFilterInput
) {
  merchant {
    ...ErrorFragment
    ... on Merchant {
      reconciliation {
        paymentReconciliationSettlementStatistics(
          dateRange: $dateRange
          filter: $filter
        ) {
          __typename
          ...ErrorFragment
          ... on PaymentReconciliationSettlementStatisticsPayload {
            rangeTotalStatistics {
              amount
              count
              pendingAmount
              pendingCount
              currency
            }
            dailyStatistics {
              date
              statistics {
                amount
                count
                pendingAmount
                pendingCount
                currency
              }
            }
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

/**
 * 거래대사 정산 통계(검색 구간 합산 + 일별)를 조회합니다 (from/until 은 YYYY-MM-DD 형식).
 */
export async function getSettlementStatistics({
  client,
  authorization,
  from,
  until,
  filter,
}: {
  client: GraphQLClient;
  authorization: string;
  from: string;
  until: string;
  filter?: SettlementFilter;
}): Promise<Result<GetSettlementStatisticsResponse>> {
  try {
    const response = await client.request({
      document: getSettlementStatisticsQuery,
      requestHeaders: { authorization },
      variables: { dateRange: { from, until }, filter },
    });
    const parsed = await GetSettlementStatisticsResponse.parseAsync(response);

    if ("rangeTotalStatistics" in parsed) {
      return { type: "success", data: parsed };
    }
    return {
      type: "error",
      data: { message: parsed.message, type: parsed.__typename },
    };
  } catch (error) {
    return toRequestError(error);
  }
}
