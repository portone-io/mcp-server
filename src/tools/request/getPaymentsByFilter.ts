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

const PageResponse = z.object({
  totalCount: z.number(),
});

const PaymentResponse = z.object(
  nullableObject({
    amount: z.object(
      nullableObject({
        total: z.number(),
        taxFree: z.number(),
        vat: z.number(),
        supply: z.number(),
        discount: z.number(),
        paid: z.number(),
        cancelled: z.number(),
        cancelledTaxFree: z.number(),
        cardDiscount: z.number(),
        easyPayDiscount: z.number(),
        promotionDiscount: z.number(),
        currentDiscount: z.number(),
        cancellable: z.number(),
      }),
    ),
    billingKey: z.string(),
    channel: z.object(
      nullableObject({
        type: z.string(),
        id: z.string(),
        key: z.string(),
        name: z.string(),
        pgProvider: z.string(),
        pgMerchantId: z.string(),
      }),
    ),
    channelGroup: z.object(
      nullableObject({
        plainId: z.string(),
        name: z.string(),
        isForTest: z.boolean(),
      }),
    ),
    currency: z.string(),
    customer: z.object(
      nullableObject({
        id: z.string(),
      }),
    ),
    histories: z.array(
      z.object(
        nullableObject({
          status: z.string(),
          statusChangedAt: z.string(),
          paid: z.number(),
          cancelled: z.number(),
          partialCancelled: z.number(),
        }),
      ),
    ),
    lastWebhookStatus: z.string(),
    orderName: z.string(),
    transactionId: z.string(),
    scheduleId: z.string(),
    requestedAt: z.string(),
    plainId: z.string(),
    methodTypes: z.array(z.string()),
    storeId: z.string(),
  }),
);

const PaymentsResponse = z
  .object({
    items: z.array(PaymentResponse),
    page: PageResponse,
  })
  .or(ErrorResponse);

const GetPaymentsByFilterResponse = z
  .object({
    merchant: z
      .object({
        store: z
          .object({
            payments: PaymentsResponse,
          })
          .or(ErrorResponse),
      })
      .or(
        z.object({
          payments: PaymentsResponse,
        }),
      )
      .or(ErrorResponse),
  })
  .transform(({ merchant }) => {
    if ("__typename" in merchant) return merchant;
    if ("store" in merchant) {
      if ("__typename" in merchant.store) return merchant.store;
      return merchant.store.payments;
    } else {
      return merchant.payments;
    }
  });

type GetPaymentsByFilterResponse = Exclude<
  z.infer<typeof GetPaymentsByFilterResponse>,
  z.infer<typeof ErrorResponse>
>;

const getPaymentsByFilterQuery = parse(gql`
query GetPaymentsByFilter(
  $storeId: ID
  $page: PageInput
  $sort: PaymentSortInput
  $filter: PaymentFilterInputV2Input
  $includeMerchantPayment: Boolean!
  $includeStorePayment: Boolean!
) {
  merchant {
    ...ErrorFragment
    ... on Merchant {
      payments(page: $page, sort: $sort, filter: $filter) @include(if: $includeMerchantPayment) {
        ...ErrorFragment
        ...PaymentFragment
      }
      store(id: $storeId) {
        ...ErrorFragment
        ... on Store {
          payments(page: $page, sort: $sort, filter: $filter) @include(if: $includeStorePayment) {
            ...ErrorFragment
            ...PaymentFragment
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

fragment PaymentFragment on PaymentsPayload {
  items {
    amount {
      total
      taxFree
      vat
      supply
      discount
      paid
      cancelled
      cancelledTaxFree
      cardDiscount
      easyPayDiscount
      promotionDiscount
      currentDiscount
      cancellable
    }
    billingKey
    channel {
      type
      id
      key
      name
      pgProvider
      pgMerchantId
    }
    channelGroup {
      plainId
      name
      isForTest
    }
    currency
    customer {
      id
    }
    histories {
      status
      statusChangedAt
      paid
      cancelled
      partialCancelled
    }
    lastWebhookStatus
    orderName
    transactionId
    storeId
    scheduleId
    requestedAt
    plainId
    methodTypes
  }
  page {
    totalCount
  }
}
`);

export const PaymentSortBy = z.enum(["REQUESTED_AT", "STATUS_CHANGED_AT"]);
export type PaymentSortBy = z.infer<typeof PaymentSortBy>;

export const PaymentStatus = z.enum([
  "READY",
  "PENDING",
  "VIRTUAL_ACCOUNT_ISSUED",
  "PAID",
  "FAILED",
  "PARTIAL_CANCELLED",
  "CANCELLED",
]);
export type PaymentStatus = z.infer<typeof PaymentStatus>;

export const PaymentType = z.enum(["NORMAL", "SCHEDULE"]);
export type PaymentType = z.infer<typeof PaymentType>;

export const PaymentMethodDetailType = z.enum([
  "CARD",
  "TRANSFER",
  "VIRTUAL_ACCOUNT",
  "GIFT_CERTIFICATE",
  "MOBILE",
  "EASY_PAY",
  "CONVENIENCE_STORE",
  "POINT",
]);
export type PaymentMethodDetailType = z.infer<typeof PaymentMethodDetailType>;

export const PgProvider = z.enum([
  "HTML5_INICIS",
  "PAYPAL",
  "PAYPAL_V2",
  "INICIS",
  "DANAL",
  "NICE",
  "DANAL_TPAY",
  "JTNET",
  "UPLUS",
  "NAVERPAY",
  "KAKAO",
  "SETTLE",
  "KCP",
  "MOBILIANS",
  "KAKAOPAY",
  "NAVERCO",
  "SYRUP",
  "KICC",
  "EXIMBAY",
  "SMILEPAY",
  "PAYCO",
  "KCP_BILLING",
  "ALIPAY",
  "PAYPLE",
  "CHAI",
  "BLUEWALNUT",
  "SMARTRO",
  "SMARTRO_V2",
  "PAYMENTWALL",
  "TOSSPAYMENTS",
  "KCP_QUICK",
  "DAOU",
  "GALAXIA",
  "TOSSPAY",
  "KCP_DIRECT",
  "SETTLE_ACC",
  "SETTLE_FIRM",
  "INICIS_UNIFIED",
  "KSNET",
  "PINPAY",
  "NICE_V2",
  "TOSS_BRANDPAY",
  "WELCOME",
  "TOSSPAY_V2",
  "INICIS_V2",
  "KPN",
  "KCP_V2",
  "HYPHEN",
  "EXIMBAY_V2",
  "INICIS_JP",
  "PAYLETTER_GLOBAL",
]);
export type PgProvider = z.infer<typeof PgProvider>;

export const SelectedChannelType = z.enum(["LIVE", "TEST"]);
export type SelectedChannelType = z.infer<typeof SelectedChannelType>;

export const PaymentWebhookStatus = z.enum([
  "SUCCEEDED",
  "FAILED_NOT_OK_RESPONSE",
  "FAILED_UNEXPECTED_ERROR",
]);
export type PaymentWebhookStatus = z.infer<typeof PaymentWebhookStatus>;

export const TimestampType = z.enum(["CREATED_AT", "STATUS_CHANGED_AT"]);

export const PaymentFilter = z.object({
  timestampType: TimestampType.optional(),
  from: z.string(),
  until: z.string(),
  statuses: z.array(PaymentStatus).optional(),
  types: z.array(PaymentType).optional(),
  methods: z.array(PaymentMethodDetailType).optional(),
  pgProviders: z.array(PgProvider).optional(),
  channelTypes: z.array(SelectedChannelType).optional(),
  currencies: z.array(z.string()).optional(),
  lastWebhookStatuses: z.array(PaymentWebhookStatus).optional(),
  textSearch: z
    .object({
      id: z.string(),
      orderName: z.string(),
    })
    .partial(),
});
export type PaymentFilter = z.infer<typeof PaymentFilter>;

export async function getPaymentsByFilter({
  client,
  authorization,
  id,
  page,
  pageSize,
  sortBy,
  isDescending,
  filter,
}: {
  client: GraphQLClient;
  authorization: string;
  id?: string;
  page: number;
  pageSize: number;
  sortBy?: PaymentSortBy;
  isDescending?: boolean;
  filter: PaymentFilter;
}): Promise<Result<GetPaymentsByFilterResponse>> {
  try {
    const response = await client.request({
      document: getPaymentsByFilterQuery,
      requestHeaders: {
        authorization,
      },
      variables: {
        storeId: id,
        page: {
          number: page,
          size: pageSize,
        },
        sort: {
          by: sortBy,
          order: isDescending === true ? "DESC" : "ASC",
        },
        filter,
        includeMerchantPayment: id == null,
        includeStorePayment: id != null,
      },
    });
    const parsed = await GetPaymentsByFilterResponse.parseAsync(response);

    return match(parsed)
      .returnType<Result<GetPaymentsByFilterResponse>>()
      .with({ __typename: P.nonNullable }, ({ __typename, message }) => ({
        type: "error",
        data: {
          message,
          type: __typename,
        },
      }))
      .otherwise((stores) => ({
        type: "success",
        data: stores,
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
