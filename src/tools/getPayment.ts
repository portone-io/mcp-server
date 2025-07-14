import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Payment } from "@portone/server-sdk/payment";
import z from "zod";
import type { HttpClient } from "../types.ts";
import { maskPayment } from "./utils/portoneRest.ts";

export const name = "getPayment";

export const config = {
  title: "포트원 결제 정보 조회",
  description: `고객사 거래번호로 포트원 서버에서 결제 내역을 검색합니다. 고객사 거래번호는 포트원 V1에서는 merchant_uid이며, V2에서는 paymentId에 해당합니다.`,
  inputSchema: {
    paymentId: z.string().describe("고객사에서 발급한 거래번호입니다."),
    storeId: z
      .string()
      .optional()
      .describe(
        "하위 상점을 포함한 특정 상점의 결제 건만을 조회할 경우에만 입력합니다. `store-id-{uuid}` 형식입니다.",
      ),
  },
  outputSchema: {
    result: z.object({}).passthrough().describe("마스킹된 결제 정보"),
  },
};

export function init(
  httpClient: HttpClient,
): ToolCallback<typeof config.inputSchema> {
  return async ({ paymentId, storeId }) => {
    const params = new URLSearchParams();
    if (storeId) {
      params.set("storeId", storeId);
    }

    const url = `/payments/${paymentId}${params.toString() ? `?${params.toString()}` : ""}`;

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

      const data = (await response.json()) as Payment;
      const maskedData = maskPayment(data);
      const structuredContent = {
        result: maskedData,
      };

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(structuredContent, null, 2),
          },
        ],
        structuredContent,
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
