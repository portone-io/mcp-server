import axios from "axios";
import type { PaymentFilter } from "../types.js";
import { filterOutNone, maskPayment } from "./utils/portone.js";

export function getTool() {
  return {
    name: "get_payments_by_filter",
    title: "포트원 결제 내역 필터 검색",
    description:
      "포트원 서버에서 주어진 조건을 모두 만족하는 결제 내역을 검색합니다.",
    inputSchema: {
      type: "object",
      properties: {
        from_time: {
          type: "string",
          format: "date-time",
          description: "조회할 시작 시각",
        },
        until_time: {
          type: "string",
          format: "date-time",
          description: "조회할 끝 시각",
        },
        timestamp_type: {
          type: "string",
          enum: ["CREATED_AT", "STATUS_CHANGED_AT"],
          description: "조회 범위 기준",
        },
        store_id: {
          type: "string",
          description: "특정 상점 ID",
        },
        status: {
          type: "array",
          items: {
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
          },
          description: "포함할 결제 상태 목록",
        },
        methods: {
          type: "array",
          items: {
            type: "string",
            enum: [
              "CARD",
              "VIRTUAL_ACCOUNT",
              "TRANSFER",
              "MOBILE",
              "GIFT_CERTIFICATE",
              "EASY_PAY",
              "CASH",
              "PAYPAL",
            ],
          },
          description: "포함할 결제 수단 목록",
        },
        pg_provider: {
          type: "array",
          items: {
            type: "string",
          },
          description: "포함할 결제대행사 목록",
        },
        is_test: {
          type: "boolean",
          description: "테스트 결제 포함 여부",
        },
        version: {
          type: "string",
          enum: ["V1", "V2"],
          description: "포트원 버전",
        },
        currency: {
          type: "string",
          description: "3자리 통화 코드",
        },
        payment_id: {
          type: "string",
          description: "고객사 거래번호 일부분",
        },
        order_name: {
          type: "string",
          description: "결제 주문명 일부분",
        },
        customer_name: {
          type: "string",
          description: "구매자 성명 일부분",
        },
        customer_email: {
          type: "string",
          description: "구매자 이메일 일부분",
        },
        pg_merchant_id: {
          type: "string",
          description: "결제대행사 상점아이디(MID) 일부분",
        },
      },
      required: ["from_time", "until_time"],
    },
  };
}

export async function handler(
  apiSecret: string,
  args: any,
): Promise<string | Record<string, any>> {
  // Convert parameters to API format
  const params = filterOutNone({
    from: args.from_time,
    until: args.until_time,
    timestampType: args.timestamp_type || "CREATED_AT",
    storeId: args.store_id,
    status: args.status,
    methods: args.methods,
    pgProviders: args.pg_provider,
    isTest: args.is_test,
    version: args.version,
    currency: args.currency,
    paymentId: args.payment_id,
    orderName: args.order_name,
    customerName: args.customer_name,
    customerEmail: args.customer_email,
    pgMerchantId: args.pg_merchant_id,
    limit: 10, // 최대 10개만 반환
  });

  try {
    const response = await axios.get("https://api.portone.io/payments", {
      params,
      headers: {
        Authorization: `PortOne ${apiSecret}`,
      },
    });

    const data = response.data;
    const totalCount = data.totalCount || 0;
    const items = data.items || [];

    // Mask sensitive data
    const maskedItems = items.map((item: any) => maskPayment(item));

    return {
      message: `조건을 만족하는 결제 건의 개수: ${totalCount}개`,
      total_count: totalCount,
      items: maskedItems,
      item_count: maskedItems.length,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data || `결제 목록 조회 실패: ${error.message}`;
    }
    return `결제 목록 조회 실패: ${error}`;
  }
}
