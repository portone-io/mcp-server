import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { maskIdentityVerification } from "./utils/portone.js";

export const name = "get_portone_identity_verification";

export const config = {
  title: "포트원 본인인증 정보 조회",
  description: `포트원 본인인증 정보를 조회합니다.
민감한 정보는 마스킹되어 반환됩니다.

Args:
  identity_verification_id: 본인인증 ID
  store_id: 상점 ID (선택)

Returns:
  마스킹된 본인인증 정보`,
  inputSchema: {
    identity_verification_id: z.string().describe("본인인증 ID"),
    store_id: z.string().optional().describe("상점 ID"),
  },
};

export function init(httpClient: {
  get: (url: string, options?: any) => Promise<Response>;
}): ToolCallback<typeof config.inputSchema> {
  return async ({ identity_verification_id, store_id }) => {
    const params = new URLSearchParams();
    if (store_id) {
      params.set("storeId", store_id);
    }

    const url = `/identity-verifications/${identity_verification_id}${params.toString() ? `?${params.toString()}` : ""}`;

    try {
      const response = await httpClient.get(url);

      if (!response.ok) {
        const errorText = await response.text();
        return {
          content: [
            {
              type: "text",
              text: `Error fetching identity verification: ${response.status} ${response.statusText}\n${errorText}`,
            },
          ],
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
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error fetching identity verification: ${error}`,
          },
        ],
      };
    }
  };
}
