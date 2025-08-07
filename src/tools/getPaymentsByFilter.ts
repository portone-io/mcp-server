import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GraphQLClient } from "graphql-request";
import z from "zod";
import {
  getPaymentsByFilter,
  PaymentMethodDetailType,
  PaymentStatus,
  PaymentType,
  PaymentWebhookStatus,
  PgProvider,
  SelectedChannelType,
  TimestampType,
} from "./request/getPaymentsByFilter.ts";
import { filterFields } from "./utils/filterFields.ts";
import { getToken, type TokenProvider } from "./utils/key.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "getPaymentsByFilter";

const Amount = z
  .object({
    total: z.number().describe("총 금액"),
    taxFree: z.number().describe("면세 금액"),
    vat: z.number().describe("부가세"),
    supply: z.number().describe("공급가액"),
    dc: z.number().describe("할인액"),
    cancel: z.number().describe("총 취소액"),
    taxFreeCancel: z.number().describe("면세 취소액"),
    cardDc: z.number().describe("카드사 할인액"),
    easyDc: z.number().describe("간편결제 할인액"),
    promotionDc: z.number().describe("프로모션 할인액"),
    balance: z.number().describe("취소 가능 잔액"),
  })
  .partial();
type AmountField = keyof typeof Amount.shape;
const AmountFields = Object.keys(Amount.shape);

const Channel = z
  .object({
    type: z.string().describe("채널 실연동 종류"),
    id: z
      .string()
      .describe("채널 ID. 채널을 수정하면 채널 ID가 변경되며 채널키는 유지됨."),
    key: z.string().describe("채널키"),
    name: z.string().describe("채널명"),
    pg: z.string().describe("PG사 모듈"),
    mid: z.string().describe("PG사 MID"),
  })
  .partial();
type ChannelField = keyof typeof Channel.shape;
const ChannelFields = Object.keys(Channel.shape);

const ChannelGroup = z
  .object({
    id: z.string().describe("채널 그룹 ID"),
    name: z.string().describe("그룹명"),
    test: z.boolean().describe("테스트 여부"),
  })
  .partial();
type ChannelGroupField = keyof typeof ChannelGroup.shape;
const ChannelGroupFields = Object.keys(ChannelGroup.shape);

const History = z
  .object({
    status: z.string().describe("거래 상태"),
    changedAt: z.string().describe("상태 변경 시각"),
    paid: z.number().describe("결제액"),
    cancel: z.number().describe("취소액"),
  })
  .partial();
type HistoryField = keyof typeof Amount.shape;
const HistoryFields = Object.keys(History.shape);

const Payment = z
  .object({
    amount: Amount.describe("금액 정보"),
    billKey: z.string().describe("사용된 빌링키"),
    channel: Channel.describe("결제 당시 선택된 채널 정보"),
    group: ChannelGroup.describe("채널 그룹 정보"),
    currency: z.string().describe("결제 통화"),
    customer: z.string().describe("고객 ID"),
    history: History.array().describe("결제 상태 변경 기록"),
    webhook: z.string().describe("마지막 웹훅 수신 결과"),
    order: z.string().describe("주문명"),
    txId: z.string().describe("포트원 거래번호 (V1에서는 imp_uid)"),
    storeId: z.string().describe("거래 발생 상점아이디"),
    schedule: z.string().describe("결제 예약 ID"),
    requestAt: z.string().describe("결제 요청 시각"),
    paymentId: z.string().describe("고객사 거래번호 (V1에서는 merchant_uid)"),
    method: z.string().array().describe("사용된 결제수단 목록"),
  })
  .partial();
type PaymentField =
  | keyof typeof Payment.shape
  | `amount.${AmountField}`
  | `channel.${ChannelField}`
  | `group.${ChannelGroupField}`
  | `history.${HistoryField}`;
const PaymentFields = Object.keys(Payment.shape)
  .concat(AmountFields.map((key) => `amount.${key}`))
  .concat(ChannelFields.map((key) => `channel.${key}`))
  .concat(ChannelGroupFields.map((key) => `group.${key}`))
  .concat(HistoryFields.map((key) => `history.${key}`)) as [
  PaymentField,
  ...PaymentField[],
];

const OutputSchema = z.object({
  items: Payment.array().describe("조회된 결제 목록"),
  count: z.number().describe("페이지와 관계없이 조건에 맞는 결제 총 개수"),
});

const InputSchema = z.object({
  from: z
    .string()
    .datetime({ offset: true })
    .describe("조회 시작 시간 (ISO 8601 형식)"),
  to: z
    .string()
    .datetime({ offset: true })
    .describe("조회 종료 시간 (ISO 8601 형식)"),
  timeType: TimestampType.describe("from, to로 제약할 결제건의 기준 시각 조건"),
  page: z
    .number()
    .min(0)
    .describe("검색할 페이지 위치입니다. 0부터 시작합니다."),
  pageSize: z
    .number()
    .min(1)
    .default(10)
    .describe("한 페이지에 반환할 결과의 수"),
  status: z.array(PaymentStatus).optional().describe("포함할 결제 상태 목록"),
  types: PaymentType.array().optional().describe("일반 / 정기결제 여부"),
  method: PaymentMethodDetailType.array()
    .optional()
    .describe("포함할 결제수단 목록"),
  pg: PgProvider.array().optional().describe("포함할 PG사 모듈 목록"),
  channel: SelectedChannelType.array()
    .optional()
    .describe("실연동 및 테스트 포함 목록"),
  currency: z
    .string()
    .length(3)
    .toUpperCase()
    .array()
    .optional()
    .describe("포함할 통화 목록, 세 자리 통화 코드"),
  webhook: PaymentWebhookStatus.array()
    .optional()
    .describe("포함할 결제건의 웹훅 상태 목록"),
  id: z
    .string()
    .optional()
    .describe("paymentId / txId / imp_uid / merchant_uid 검색 필드"),
  order: z.string().optional().describe("결제건의 주문명"),
  fields: z
    .enum(PaymentFields)
    .array()
    .describe("검색 결과로 받을 필드 목록입니다."),
});

export const config = {
  title: "포트원 결제 내역 검색",
  description: `포트원 서버에서 주어진 조건을 모두 만족하는 결제 내역을 검색합니다.

Note:
  소문자 imp_ 혹은 imps_ 로 시작하는 거래번호는 고객사 거래번호가 아닌 V1 포트원 거래번호(imp_uid)일 가능성이 있습니다.
  날짜 및 시간 정보 입출력 시에는 반드시 타임존을 명시합니다.`,
  inputSchema: InputSchema.shape,
  outputSchema: OutputSchema.shape,
};

export function init(
  tokenProvider: TokenProvider,
  client: GraphQLClient,
): ToolCallback<typeof config.inputSchema> {
  return async ({
    from,
    to,
    timeType,
    page,
    pageSize,
    fields,
    status,
    order,
    id,
    webhook,
    currency,
    channel,
    pg,
    method,
    types,
  }) => {
    const token = await getToken(tokenProvider);

    if (token.type === "error") {
      return toolErrorResult(token);
    }
    const payments = await getPaymentsByFilter({
      client,
      authorization: token.data,
      filter: {
        from,
        until: to,
        timestampType: timeType,
        statuses: status,
        lastWebhookStatuses: webhook,
        channelTypes: channel,
        pgProviders: pg,
        methods: method,
        currencies: currency,
        types,
        textSearch: {
          orderName: order,
          id,
        },
      },
      page,
      pageSize,
    });

    if (payments.type === "error") {
      return toolErrorResult(payments);
    }

    const renamed = payments.data.items.map(
      ({
        amount,
        billingKey,
        channel,
        channelGroup,
        currency,
        customer,
        histories,
        lastWebhookStatus,
        orderName,
        transactionId,
        storeId,
        scheduleId,
        requestedAt,
        plainId,
        methodTypes,
      }): z.infer<typeof Payment> => {
        return {
          amount: {
            total: amount?.total ?? undefined,
            taxFree: amount?.taxFree ?? undefined,
            vat: amount?.vat ?? undefined,
            supply: amount?.supply ?? undefined,
            dc: amount?.discount ?? undefined,
            cancel: amount?.cancelled ?? undefined,
            taxFreeCancel: amount?.cancelledTaxFree ?? undefined,
            cardDc: amount?.cardDiscount ?? undefined,
            easyDc: amount?.easyPayDiscount ?? undefined,
            promotionDc: amount?.promotionDiscount ?? undefined,
            balance: amount?.cancellable ?? undefined,
          },
          billKey: billingKey ?? undefined,
          channel: {
            type: channel?.type ?? undefined,
            id: channel?.id ?? undefined,
            key: channel?.key ?? undefined,
            name: channel?.name ?? undefined,
            pg: channel?.pgProvider ?? undefined,
            mid: channel?.pgMerchantId ?? undefined,
          },
          group: {
            id: channelGroup?.plainId ?? undefined,
            name: channelGroup?.name ?? undefined,
            test: channelGroup?.isForTest ?? undefined,
          },
          currency: currency ?? undefined,
          customer: customer?.id ?? undefined,
          history:
            histories?.map(
              ({
                status,
                paid,
                cancelled,
                statusChangedAt,
                partialCancelled,
              }) => ({
                status: status ?? undefined,
                changedAt: statusChangedAt ?? undefined,
                paid: paid ?? undefined,
                cancel: cancelled ?? partialCancelled ?? undefined,
              }),
            ) ?? undefined,
          webhook: lastWebhookStatus ?? undefined,
          order: orderName ?? undefined,
          txId: transactionId ?? undefined,
          storeId: storeId ?? undefined,
          schedule: scheduleId ?? undefined,
          requestAt: requestedAt ?? undefined,
          paymentId: plainId ?? undefined,
          method: methodTypes ?? undefined,
        };
      },
    );

    try {
      const maskedPayments = renamed.map((item) => filterFields(fields, item));
      const structuredContent = {
        items: maskedPayments,
        count: payments.data.page.totalCount,
      };
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(structuredContent, null, 2),
          },
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
