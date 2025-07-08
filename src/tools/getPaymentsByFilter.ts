import axios from "axios";
import type { PaymentFilter } from "../types.js";
import { filterOutNone, maskPayment } from "./utils/portone.js";

export function getTool(apiSecret: string) {
  return {
    name: "get_payments_by_filter",
    description: "포트원 결제 목록을 필터링하여 조회합니다.",
    inputSchema: {
      type: "object",
      properties: {
        merchant_id: { type: "string", description: "상점 ID" },
        store_id: { type: "string", description: "스토어 ID" },
        payment_id: { type: "string", description: "결제 ID" },
        transaction_id: { type: "string", description: "거래 ID" },
        text_search: { type: "string", description: "텍스트 검색" },
        status: {
          type: "string",
          enum: [
            "READY",
            "PENDING",
            "VIRTUAL_ACCOUNT_ISSUED",
            "PAID",
            "FAILED",
            "PARTIAL_CANCELLED",
            "CANCELLED",
          ],
          description: "결제 상태",
        },
        methods: {
          type: "array",
          items: { type: "string" },
          description: "결제 수단 목록",
        },
        pg_providers: {
          type: "array",
          items: { type: "string" },
          description: "PG사 목록",
        },
        is_test: { type: "boolean", description: "테스트 결제 여부" },
        is_scheduled: { type: "boolean", description: "예약 결제 여부" },
        sort_by: {
          type: "string",
          enum: ["REQUESTED_AT", "STATUS_CHANGED_AT"],
          description: "정렬 기준",
        },
        sort_order: {
          type: "string",
          enum: ["ASC", "DESC"],
          description: "정렬 순서",
        },
        from: { type: "string", description: "조회 시작 시간 (ISO 8601)" },
        until: { type: "string", description: "조회 종료 시간 (ISO 8601)" },
        cursor: { type: "string", description: "페이지네이션 커서" },
        limit: { type: "number", description: "조회 개수 (최대 100)" },
      },
    },
  };
}

export async function handler(
  apiSecret: string,
  args: PaymentFilter,
): Promise<string | Record<string, any>> {
  const params = filterOutNone({
    merchantId: args.merchant_id,
    storeId: args.store_id,
    paymentId: args.payment_id,
    transactionId: args.transaction_id,
    textSearch: args.text_search,
    status: args.status,
    methods: args.methods,
    pgProviders: args.pg_providers,
    isTest: args.is_test,
    isScheduled: args.is_scheduled,
    sortBy: args.sort_by,
    sortOrder: args.sort_order,
    from: args.from,
    until: args.until,
    cursor: args.cursor,
    limit: args.limit,
  });

  try {
    const response = await axios.get("https://api.portone.io/payments", {
      params,
      headers: {
        Authorization: `PortOne ${apiSecret}`,
      },
    });

    const data = response.data;
    if (data.items) {
      data.items = data.items.map((item: any) => maskPayment(item));
    }

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data || `결제 목록 조회 실패: ${error.message}`;
    }
    return `결제 목록 조회 실패: ${error}`;
  }
}
