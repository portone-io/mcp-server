import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { maskPayment } from "./utils/portone.js";

export const name = "get_portone_payment";

export const config = {
  title: "포트원 결제 정보 조회",
  description: `포트원 결제 정보를 조회합니다.
민감한 정보는 마스킹되어 반환됩니다.

Args:
  payment_id: 결제 ID
  store_id: 상점 ID (선택)

Returns:
  마스킹된 결제 정보`,
  inputSchema: {
    payment_id: z.string().describe("결제 ID"),
    store_id: z.string().optional().describe("상점 ID"),
  },
};

export function init(httpClient: {
  get: (url: string, options?: any) => Promise<Response>;
}): ToolCallback<typeof config.inputSchema> {
  return async ({ payment_id, store_id }) => {
    const params = new URLSearchParams();
    if (store_id) {
      params.set("storeId", store_id);
    }

    const url = `/payments/${payment_id}${params.toString() ? `?${params.toString()}` : ""}`;

    try {
      const response = await httpClient.get(url);

      if (!response.ok) {
        const errorText = await response.text();
        return {
          content: [
            {
              type: "text",
              text: `Error fetching payment: ${response.status} ${response.statusText}\n${errorText}`,
            },
          ],
        };
      }

      const data = await response.json();
      const maskedData = maskPayment(data);

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
            text: `Error fetching payment: ${error}`,
          },
        ],
      };
    }
  };
}
