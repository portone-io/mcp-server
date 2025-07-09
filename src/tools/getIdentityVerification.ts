import axios from "axios";
import { maskIdentityVerification } from "./utils/portone.js";

export function getTool() {
  return {
    name: "get_identity_verification",
    title: "포트원 본인인증 정보 조회",
    description: `고객사 본인인증 거래번호로 포트원 서버에서 결제 내역을 검색합니다.
고객사 본인인증 거래번호는 포트원 V1에서는 merchant_uid이며, V2에서는 identityVerificationId에 해당합니다.`,
    inputSchema: {
      type: "object",
      properties: {
        identity_verification_id: {
          type: "string",
          description: "고객사에서 발급한 본인인증 거래번호",
        },
        store_id: {
          type: "string",
          description:
            "특정 상점의 인증 건만 조회할 경우 입력. `store-id-{uuid}` 형식",
        },
      },
      required: ["identity_verification_id"],
    },
  };
}

export async function handler(
  apiSecret: string,
  args: { identity_verification_id: string; store_id?: string },
): Promise<string | Record<string, any>> {
  const {
    identity_verification_id: identityVerificationId,
    store_id: storeId,
  } = args;

  try {
    const headers: Record<string, string> = {
      Authorization: `PortOne ${apiSecret}`,
    };

    if (storeId) {
      headers["X-Store-Id"] = storeId;
    }

    const response = await axios.get(
      `https://api.portone.io/identity-verifications/${identityVerificationId}`,
      { headers },
    );

    return maskIdentityVerification(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return (
        error.response?.data || `본인인증 정보 조회 실패: ${error.message}`
      );
    }
    return `본인인증 정보 조회 실패: ${error}`;
  }
}
