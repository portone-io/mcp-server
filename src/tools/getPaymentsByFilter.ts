import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { filterOutNone, maskPayment } from "./utils/portoneRest.js";

interface HttpClient {
  get: (url: string) => Promise<Response>;
}

export const name = "get_portone_payments_by_filter";

export const config = {
  title: "포트원 결제 내역 검색",
  description: `조건에 맞는 포트원 결제 내역을 검색합니다.
최대 10개의 결과만 반환되며, 민감한 정보는 마스킹됩니다.

Args:
  from_time: 조회 시작 시간 (ISO 8601 형식)
  until_time: 조회 종료 시간 (ISO 8601 형식)
  status: 결제 상태 (READY, PENDING, VIRTUAL_ACCOUNT_ISSUED, PAID, CANCELLED, PARTIAL_CANCELLED, FAILED)
  payment_method_type: 결제 수단 타입 (CARD, TRANSFER, VIRTUAL_ACCOUNT, MOBILE, GIFT_CERTIFICATE, EASY_PAY)
  pg_provider: PG사 (TOSSPAYMENTS, KCP, INICIS, NICE, DANAL 등)
  is_test: 테스트 결제 여부
  is_scheduled: 예약 결제 여부
  sort_by: 정렬 기준 (REQUESTED_AT, STATUS_CHANGED_AT, PAID_AT, CANCELLED_AT)
  sort_order: 정렬 순서 (ASC, DESC)
  text_search: 통합 검색 (주문명, 고객명, 고객 이메일, 카드 번호)
  text_search_by_field: 필드별 검색 (order_name, customer_name, customer_email, card_number)
  merchant_id: 상점 ID
  store_id: 하위 상점 ID
  payment_id: 결제 ID
  transaction_id: 주문 ID
  cursor: 페이지네이션 커서
  limit: 조회 개수 (최대 10)

Returns:
  검색된 결제 내역 목록 (마스킹됨)`,
  inputSchema: {
    from_time: z.string().optional().describe("조회 시작 시간"),
    until_time: z.string().optional().describe("조회 종료 시간"),
    status: z
      .enum([
        "READY",
        "PENDING",
        "VIRTUAL_ACCOUNT_ISSUED",
        "PAID",
        "CANCELLED",
        "PARTIAL_CANCELLED",
        "FAILED",
      ])
      .optional()
      .describe("결제 상태"),
    payment_method_type: z
      .enum([
        "CARD",
        "TRANSFER",
        "VIRTUAL_ACCOUNT",
        "MOBILE",
        "GIFT_CERTIFICATE",
        "EASY_PAY",
      ])
      .optional()
      .describe("결제 수단 타입"),
    pg_provider: z.string().optional().describe("PG사"),
    is_test: z.boolean().optional().describe("테스트 결제 여부"),
    is_scheduled: z.boolean().optional().describe("예약 결제 여부"),
    sort_by: z
      .enum(["REQUESTED_AT", "STATUS_CHANGED_AT", "PAID_AT", "CANCELLED_AT"])
      .optional()
      .describe("정렬 기준"),
    sort_order: z.enum(["ASC", "DESC"]).optional().describe("정렬 순서"),
    text_search: z.string().optional().describe("통합 검색"),
    text_search_by_field: z
      .object({
        order_name: z.string().optional(),
        customer_name: z.string().optional(),
        customer_email: z.string().optional(),
        card_number: z.string().optional(),
      })
      .optional()
      .describe("필드별 검색"),
    merchant_id: z.string().optional().describe("상점 ID"),
    store_id: z.string().optional().describe("하위 상점 ID"),
    payment_id: z.string().optional().describe("결제 ID"),
    transaction_id: z.string().optional().describe("주문 ID"),
    cursor: z.string().optional().describe("페이지네이션 커서"),
    limit: z.number().max(10).default(10).describe("조회 개수"),
  },
};

export function init(
  httpClient: HttpClient,
): ToolCallback<typeof config.inputSchema> {
  return async ({
    from_time,
    until_time,
    status,
    payment_method_type,
    pg_provider,
    is_test,
    is_scheduled,
    sort_by,
    sort_order,
    text_search,
    text_search_by_field,
    merchant_id,
    store_id,
    payment_id,
    transaction_id,
    cursor,
    limit,
  }) => {
    const params = filterOutNone({
      from: from_time,
      until: until_time,
      status,
      paymentMethodType: payment_method_type,
      pgProvider: pg_provider,
      isTest: is_test,
      isScheduled: is_scheduled,
      sortBy: sort_by,
      sortOrder: sort_order,
      textSearch: text_search,
      merchantId: merchant_id,
      storeId: store_id,
      paymentId: payment_id,
      transactionId: transaction_id,
      cursor,
      limit: Math.min(limit || 10, 10),
    });

    // Add field-specific search parameters
    if (text_search_by_field) {
      if (text_search_by_field.order_name) {
        params.textSearchByField = "ORDER_NAME";
        params.textSearch = text_search_by_field.order_name;
      } else if (text_search_by_field.customer_name) {
        params.textSearchByField = "CUSTOMER_NAME";
        params.textSearch = text_search_by_field.customer_name;
      } else if (text_search_by_field.customer_email) {
        params.textSearchByField = "CUSTOMER_EMAIL";
        params.textSearch = text_search_by_field.customer_email;
      } else if (text_search_by_field.card_number) {
        params.textSearchByField = "CARD_NUMBER";
        params.textSearch = text_search_by_field.card_number;
      }
    }

    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      searchParams.set(key, String(value));
    }

    const url = `/payments?${searchParams.toString()}`;

    try {
      const response = await httpClient.get(url);

      if (!response.ok) {
        const errorText = await response.text();
        return {
          content: [
            {
              type: "text",
              text: `Error searching payments: ${response.status} ${response.statusText}\n${errorText}`,
            },
          ],
        };
      }

      const data = (await response.json()) as {
        items?: unknown[];
        hasNext?: boolean;
        cursor?: string;
      };
      const payments = data.items || [];
      const maskedPayments = payments.map(maskPayment);

      const result = {
        items: maskedPayments,
        hasNext: data.hasNext,
        cursor: data.cursor,
      };

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error searching payments: ${error}`,
          },
        ],
      };
    }
  };
}
