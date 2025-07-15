import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { HttpClient } from "../types.ts";
import { filterFields, PAYMENT_FIELDS } from "./utils/portoneRest.ts";

export const name = "getPayment";

export const config = {
  title: "포트원 결제 정보 조회",
  description: `고객사 거래번호로 포트원 서버에서 결제 내역을 검색합니다.
고객사 거래번호는 포트원 V1에서는 merchant_uid이며, V2에서는 paymentId에 해당합니다.

Note:
  UNAUTHORIZED 에러의 경우 MCP 서버의 API_SECRET 환경변수 설정이 잘못되었을 가능성이 있습니다.
  소문자 imp_ 혹은 imps_ 로 시작하는 거래번호는 고객사 거래번호가 아닌 V1 포트원 거래번호(imp_uid)일 가능성이 있습니다.
  날짜 및 시간 정보 해석에는 타임존에 유의하세요. 포트원에서는 RFC 3339를 사용하며, Z는 Zulu Time을 의미합니다.`,
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

      const data = await response.json();
      const maskedData = filterFields(PAYMENT_FIELDS, data);
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
