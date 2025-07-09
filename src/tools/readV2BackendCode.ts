import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";

export const name = "read_portone_v2_backend_code";

export const config = {
  title: "포트원 V2 백엔드 코드 예제 읽기",
  description: `포트원 V2 백엔드 SDK 코드 예제를 가져옵니다.

Args:
  framework: 백엔드 프레임워크 (express, fastapi, flask, spring-kotlin)
  pg: 결제 게이트웨이 (smartro-v2, nice-v2, ksnet, welcome, toss-brandpay, kcp-v2, kicc, danal-tpay, tosspayments-v2, mobilians)
  pay_method: 결제 방법 (card, virtual-account, account-transfer, mobile-phone, gift-certificate, easy-pay, paypal-spp)
  smart_routing: 스마트 라우팅 사용 여부 (기본값: false)

Returns:
  지정된 조건에 맞는 백엔드 코드 예제`,
  inputSchema: {
    framework: z
      .enum(["express", "fastapi", "flask", "spring-kotlin"])
      .describe("백엔드 프레임워크"),
    pg: z
      .enum([
        "smartro-v2",
        "nice-v2",
        "ksnet",
        "welcome",
        "toss-brandpay",
        "kcp-v2",
        "kicc",
        "danal-tpay",
        "tosspayments-v2",
        "mobilians",
      ])
      .describe("결제 게이트웨이"),
    pay_method: z
      .enum([
        "card",
        "virtual-account",
        "account-transfer",
        "mobile-phone",
        "gift-certificate",
        "easy-pay",
        "paypal-spp",
      ])
      .describe("결제 방법"),
    smart_routing: z
      .boolean()
      .default(false)
      .describe("스마트 라우팅 사용 여부"),
  },
};

export function init(
  apiBasePath: string,
): ToolCallback<typeof config.inputSchema> {
  return async ({ framework, pg, pay_method, smart_routing }) => {
    const url = new URL(`${apiBasePath}/api/v2-backend-code`);
    url.searchParams.set("framework", framework);
    url.searchParams.set("pg", pg);
    url.searchParams.set("payMethod", pay_method);
    url.searchParams.set("smartRouting", String(smart_routing));

    try {
      const response = await fetch(url.toString());

      if (!response.ok) {
        const errorText = await response.text();
        return {
          content: [
            {
              type: "text",
              text: `Error fetching backend code: ${response.status} ${response.statusText}\n${errorText}`,
            },
          ],
        };
      }

      const data = (await response.json()) as { code?: string };

      if (data.code) {
        return {
          content: [
            {
              type: "text",
              text: data.code,
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: "text",
              text: "No code example found for the specified parameters.",
            },
          ],
        };
      }
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error fetching backend code: ${error}`,
          },
        ],
      };
    }
  };
}
