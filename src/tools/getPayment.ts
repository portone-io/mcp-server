import axios from "axios";
import { maskPayment } from "./utils/portone.js";

export function getTool(apiSecret: string) {
  return {
    name: "get_payment",
    description: "포트원 결제 정보를 조회합니다.",
    inputSchema: {
      type: "object",
      properties: {
        payment_id: {
          type: "string",
          description: "조회할 결제 ID",
        },
      },
      required: ["payment_id"],
    },
  };
}

export async function handler(
  apiSecret: string,
  args: { payment_id: string },
): Promise<string | Record<string, any>> {
  const { payment_id: paymentId } = args;

  try {
    const response = await axios.get(
      `https://api.portone.io/payments/${paymentId}`,
      {
        headers: {
          Authorization: `PortOne ${apiSecret}`,
        },
      },
    );

    return maskPayment(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data || `결제 정보 조회 실패: ${error.message}`;
    }
    return `결제 정보 조회 실패: ${error}`;
  }
}
