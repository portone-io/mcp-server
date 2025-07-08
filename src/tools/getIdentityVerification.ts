import axios from "axios";
import { maskIdentityVerification } from "./utils/portone.js";

export function getTool(apiSecret: string) {
  return {
    name: "get_identity_verification",
    description: "포트원 본인인증 정보를 조회합니다.",
    inputSchema: {
      type: "object",
      properties: {
        identity_verification_id: {
          type: "string",
          description: "조회할 본인인증 ID",
        },
      },
      required: ["identity_verification_id"],
    },
  };
}

export async function handler(
  apiSecret: string,
  args: { identity_verification_id: string },
): Promise<string | Record<string, any>> {
  const { identity_verification_id: identityVerificationId } = args;

  try {
    const response = await axios.get(
      `https://api.portone.io/identity-verifications/${identityVerificationId}`,
      {
        headers: {
          Authorization: `PortOne ${apiSecret}`,
        },
      },
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
