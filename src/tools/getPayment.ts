import axios from "axios";
import { maskPayment } from "./utils/portone.js";

export function getTool() {
  return {
    name: "get_payment",
    title: "포트원 결제 정보 조회",
    description: `고객사 거래번호로 포트원 서버에서 결제 내역을 검색합니다.
고객사 거래번호는 포트원 V1에서는 merchant_uid이며, V2에서는 paymentId에 해당합니다.

참고:
- UNAUTHORIZED 에러의 경우 MCP 서버의 API_SECRET 환경변수 설정이 잘못되었을 가능성이 있음
- 소문자 imp_ 혹은 imps_로 시작하는 거래번호는 V1 포트원 거래번호(imp_uid)일 가능성이 있음
- 날짜 및 시간 정보는 RFC 3339 형식 사용 (Z는 Zulu Time)`,
    inputSchema: {
      type: "object",
      properties: {
        payment_id: {
          type: "string",
          description: "고객사에서 발급한 거래번호",
        },
        store_id: {
          type: "string",
          description:
            "하위 상점을 포함한 특정 상점의 결제 건만을 조회할 경우에만 입력. `store-id-{uuid}` 형식",
        },
      },
      required: ["payment_id"],
    },
  };
}

export async function handler(
  apiSecret: string,
  args: { payment_id: string; store_id?: string },
): Promise<string | Record<string, any>> {
  const { payment_id: paymentId, store_id: storeId } = args;

  try {
    const headers: Record<string, string> = {
      Authorization: `PortOne ${apiSecret}`,
    };

    if (storeId) {
      headers["X-Store-Id"] = storeId;
    }

    const response = await axios.get(
      `https://api.portone.io/payments/${paymentId}`,
      { headers },
    );

    return maskPayment(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data || `결제 정보 조회 실패: ${error.message}`;
    }
    return `결제 정보 조회 실패: ${error}`;
  }
}
