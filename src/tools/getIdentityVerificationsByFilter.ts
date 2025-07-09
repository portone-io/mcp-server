import axios from "axios";
import { filterOutNone, maskIdentityVerification } from "./utils/portone.js";

export function getTool() {
  return {
    name: "get_identity_verifications_by_filter",
    title: "포트원 본인인증 내역 필터 검색",
    description:
      "포트원 서버에서 주어진 조건을 모두 만족하는 본인인증 정보를 검색합니다.",
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
          enum: [
            "REQUESTED_AT",
            "VERIFIED_AT",
            "FAILED_AT",
            "STATUS_UPDATED_AT",
          ],
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
            enum: ["READY", "PENDING", "FAILED", "VERIFIED"],
          },
          description: "포함할 본인인증 상태 목록",
        },
        pg_provider: {
          type: "array",
          items: {
            type: "string",
          },
          description: "본인인증이 일어난 결제대행사 목록",
        },
        version: {
          type: "string",
          enum: ["V1", "V2"],
          description: "포트원 버전",
        },
        carrier: {
          type: "array",
          items: {
            type: "string",
            enum: ["SKT", "KT", "LGU", "SKT_MVNO", "KT_MVNO", "LGU_MVNO"],
          },
          description: "포함할 통신사 목록",
        },
        customer_name: {
          type: "string",
          description: "발급자 성명 일부분",
        },
        pg_merchant_id: {
          type: "string",
          description: "결제대행사 상점아이디(MID) 일부분",
        },
        is_test: {
          type: "boolean",
          description: "테스트 인증 건 포함 여부",
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
    timestampType: args.timestamp_type || "REQUESTED_AT",
    storeId: args.store_id,
    status: args.status,
    pgProviders: args.pg_provider,
    version: args.version,
    carriers: args.carrier,
    customerName: args.customer_name,
    pgMerchantId: args.pg_merchant_id,
    isTest: args.is_test,
    limit: 10, // 최대 10개만 반환
  });

  try {
    const response = await axios.get(
      "https://api.portone.io/identity-verifications",
      {
        params,
        headers: {
          Authorization: `PortOne ${apiSecret}`,
        },
      },
    );

    const data = response.data;
    const totalCount = data.totalCount || 0;
    const items = data.items || [];

    // Mask sensitive data
    const maskedItems = items.map((item: any) =>
      maskIdentityVerification(item),
    );

    return {
      message: `조건을 만족하는 본인인증 건의 개수: ${totalCount}개`,
      total_count: totalCount,
      items: maskedItems,
      item_count: maskedItems.length,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return (
        error.response?.data || `본인인증 목록 조회 실패: ${error.message}`
      );
    }
    return `본인인증 목록 조회 실패: ${error}`;
  }
}
