import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { maskIdentityVerification } from "./utils/portoneRest.js";
import { HttpClient } from "../types.js";

export const name = "get_portone_identity_verification";

export const config = {
  title: "포트원 본인인증 정보 조회",
  description: `고객사 본인인증 거래번호로 포트원 서버에서 결제 내역을 검색합니다.
고객사 본인인증 거래번호는 포트원 V1에서는 merchant_uid이며, V2에서는 identityVerificationId에 해당합니다.

Returns:
  인증 건을 찾으면 상세 정보를 반환하고, 찾지 못하면 오류를 반환합니다.

Note:
  UNAUTHORIZED 에러의 경우 MCP 서버의 API_SECRET 환경변수 설정이 잘못되었을 가능성이 있습니다.
  소문자 imp_ 혹은 imps_ 로 시작하는 거래번호는 고객사 거래번호가 아닌 V1 포트원 거래번호(imp_uid)일 가능성이 있습니다.
  날짜 및 시간 정보 해석에는 타임존에 유의하세요. 포트원에서는 RFC 3339를 사용하며, Z는 Zulu Time을 의미합니다.`,
  inputSchema: {
    identityVerificationId: z
      .string()
      .describe("고객사에서 발급한 본인인증 거래번호입니다."),
    storeId: z
      .string()
      .optional()
      .describe(
        "하위 상점을 포함한 특정 상점의 인증 건만을 조회할 경우에만 입력합니다. `store-id-{uuid}` 형식입니다.",
      ),
  },
};

export function init(
  httpClient: HttpClient,
): ToolCallback<typeof config.inputSchema> {
  return async ({ identityVerificationId, storeId }) => {
    const params = new URLSearchParams();
    if (storeId) {
      params.set("storeId", storeId);
    }

    const url = `/identity-verifications/${identityVerificationId}${params.toString() ? `?${params.toString()}` : ""}`;

    try {
      const response = await httpClient.get(url);

      if (!response.ok) {
        const errorText = await response.text();
        return {
          content: [
            {
              type: "text",
              text: errorText,
            },
          ],
          isError: true,
        };
      }

      const data = await response.json();
      const maskedData = maskIdentityVerification(data);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(maskedData, null, 2),
          },
        ],
      };
    } catch {
      return {
        content: [
          {
            type: "text",
            text: `서버로부터 잘못된 응답 수신`,
          },
        ],
        isError: true,
      };
    }
  };
}
