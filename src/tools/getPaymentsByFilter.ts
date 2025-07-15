import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import { GetPaymentsResponse } from "@portone/server-sdk/payment";
import z from "zod";
import type { HttpClient } from "../types.ts";
import { filterOutNone } from "./utils/mapping.ts";
import {
  filterFields,
  PaymentField,
  PgProviderSchema,
} from "./utils/portoneRest.ts";

const PaymentTimeRangeField = z.enum(["CREATED_AT", "STATUS_CHANGED_AT"]);
const PaymentStatus = z.enum([
  "READY",
  "PENDING",
  "VIRTUAL_ACCOUNT_ISSUED",
  "PAID",
  "FAILED",
  "PARTIAL_CANCELLED",
  "CANCELLED",
]);
const PaymentMethodType = z.enum([
  "CARD",
  "TRANSFER",
  "VIRTUAL_ACCOUNT",
  "GIFT_CERTIFICATE",
  "MOBILE",
  "EASY_PAY",
  "CONVENIENCE_STORE",
]);

export const name = "getPaymentsByFilter";

export const config = {
  title: "포트원 결제 내역 검색",
  description: `포트원 서버에서 주어진 조건을 모두 만족하는 결제 내역을 최대 10개까지 검색합니다.

Note:
  UNAUTHORIZED 에러의 경우 MCP 서버의 API_SECRET 환경변수 설정이 잘못되었을 가능성이 있습니다.
  소문자 imp_ 혹은 imps_ 로 시작하는 거래번호는 고객사 거래번호가 아닌 V1 포트원 거래번호(imp_uid)일 가능성이 있습니다.
  날짜 및 시간 정보 입출력 시에는 반드시 타임존을 명시합니다.`,
  inputSchema: {
    fromTime: z
      .string()
      .datetime({ offset: true })
      .describe("조회 시작 시간 (ISO 8601 형식)"),
    untilTime: z
      .string()
      .datetime({ offset: true })
      .describe("조회 종료 시간 (ISO 8601 형식)"),
    pageIndex: z
      .number()
      .min(0)
      .describe("검색할 페이지 위치입니다. 0부터 시작합니다."),
    pageSize: z
      .number()
      .min(1)
      .default(10)
      .describe("한 페이지에 반환할 결과의 수입니다."),
    fields: z.array(PaymentField).describe("검색 결과로 받을 필드 목록입니다."),
    timestampType: PaymentTimeRangeField.optional()
      .default("STATUS_CHANGED_AT")
      .describe(`조회 범위가 결제를 처음 시도한 시각 기준이면 "CREATED_AT",
마지막으로 결제 상태가 변경된 시각 기준이면 "STATUS_CHANGED_AT"입니다.
미입력 시 "STATUS_CHANGED_AT"입니다.`),
    storeId: z
      .string()
      .optional()
      .describe(
        "하위 상점을 포함한 특정 상점의 결제 건만을 조회할 경우에만 입력합니다. `store-id-{uuid}` 형식입니다.",
      ),
    status: z
      .array(PaymentStatus)
      .optional()
      .describe("포함할 결제 상태 목록입니다."),
    methods: z
      .array(PaymentMethodType)
      .optional()
      .describe("포함할 결제 수단 목록입니다."),
    pgProvider: z
      .array(PgProviderSchema)
      .optional()
      .describe("포함할 결제가 일어난 결제대행사 목록입니다."),
    isTest: z
      .boolean()
      .optional()
      .default(true)
      .describe("테스트 결제를 포함할지 여부입니다. 미입력 시 `true`입니다."),
    version: z
      .enum(["V1", "V2"])
      .optional()
      .describe("포함할 포트원 버전입니다. 미입력 시 모두 검색됩니다."),
    currency: z
      .string()
      .optional()
      .describe("포함할 결제 통화를 나타내는 세 자리 통화 코드입니다."),
    paymentId: z
      .string()
      .optional()
      .describe(
        "고객사에서 발급한 거래번호 일부분입니다. V2에서는 paymentId, V1에서는 merchant_uid에 대응됩니다.",
      ),
    orderName: z.string().optional().describe("결제 주문명 일부분입니다."),
    customerName: z.string().optional().describe("구매자의 성명 일부분입니다."),
    customerEmail: z
      .string()
      .optional()
      .describe("구매자의 이메일 일부분입니다."),
    pgMerchantId: z
      .string()
      .optional()
      .describe("결제대행사에서 제공한 상점아이디 (MID) 일부분입니다."),
  },
  outputSchema: {
    items: z
      .array(z.object({}).passthrough())
      .describe("조회된 결제 건의 목록"),
    totalCount: z.number().describe("조건에 맞는 본인인증 건의 총 개수"),
  },
};

export function init(
  httpClient: HttpClient,
): ToolCallback<typeof config.inputSchema> {
  return async ({
    fromTime,
    untilTime,
    pageIndex,
    pageSize,
    fields,
    timestampType,
    storeId,
    status,
    methods,
    pgProvider,
    isTest,
    version,
    currency,
    paymentId,
    orderName,
    customerName,
    customerEmail,
    pgMerchantId,
  }) => {
    const textSearch = [
      { field: "PAYMENT_ID", value: paymentId },
      { field: "ORDER_NAME", value: orderName },
      { field: "CUSTOMER_NAME", value: customerName },
      { field: "CUSTOMER_EMAIL", value: customerEmail },
      { field: "PG_MERCHANT_ID", value: pgMerchantId },
    ].filter((item) => item.value !== undefined);

    const searchFilter = filterOutNone({
      from: fromTime,
      until: untilTime,
      timestampType: timestampType,
      storeId: storeId,
      status: status,
      methods: methods,
      pgProvider: pgProvider,
      isTest: isTest,
      version: version,
      currency: currency,
      textSearch: textSearch.length > 0 ? textSearch : undefined,
    });

    const response = await httpClient.get(
      `/payments?requestBody=${encodeURIComponent(
        JSON.stringify({
          filter: searchFilter,
          page: {
            number: pageIndex,
            size: pageSize,
          },
        }),
      )}`,
    );

    if (!response.ok) {
      const text = await response.text();
      return { content: [{ type: "text", text }], isError: true };
    }

    try {
      const data = (await response.json()) as GetPaymentsResponse;
      const maskedPayments = filterFields(fields, data.items);
      const structuredContent = {
        items: maskedPayments,
        totalCount: data.page.totalCount,
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
