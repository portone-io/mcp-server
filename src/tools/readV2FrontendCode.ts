import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";

export const name = "read_portone_v2_frontend_code";

export const config = {
  title: "포트원 V2 프론트엔드 코드 예제 읽기",
  description: `지정된 매개변수에 따라 포트원 V2 프론트엔드 코드 예제를 가져옵니다.
포트원 V2에 관련해 어떤 상황이든 프로그래밍 언어로 코드를 작성해야 한다면, 예외 없이 가장 먼저 이 도구를 호출해 예시 코드를 참고한 후 사용자를 도우세요.
framework를 제외한 모든 Args는 선택사항이며, 특정되지 않은 경우 비워두세요.`,
  inputSchema: {
    framework: z
      .string()
      .optional()
      .describe(
        "사용할 프레임워크. 일치하지 않더라도 현재 맥락에서 가장 유사한 프레임워크를 명시합니다. 옵션: html, react",
      ),
    pg: z
      .string()
      .optional()
      .describe(
        "사용할 결제 게이트웨이. 옵션: toss, nice, smartro, kpn, inicis, ksnet, kcp, kakao, naver, tosspay, hyphen, eximbay",
      ),
    pay_method: z
      .string()
      .optional()
      .describe(
        "사용할 결제 방법. 옵션: card, virtualAccount, easyPay, transfer, mobile, giftCertificate",
      ),
    smart_routing: z
      .boolean()
      .optional()
      .describe("스마트 라우팅 사용 여부. 옵션: true 또는 false"),
  },
  outputSchema: {
    result: z.string().describe("마크다운 형식의 프론트엔드 코드 예제"),
  },
};

export function init(
  apiBasePath: string,
): ToolCallback<typeof config.inputSchema> {
  return async ({ framework, pg, pay_method, smart_routing }) => {
    const url = new URL(
      `${apiBasePath}/opi/ko/quick-guide/payment/frontend-code`,
    );
    if (framework) url.searchParams.set("framework", framework);
    if (pg) url.searchParams.set("pg", pg);
    if (pay_method) url.searchParams.set("payMethod", pay_method);
    if (smart_routing)
      url.searchParams.set("smartRouting", String(smart_routing));

    try {
      const response = await fetch(url.toString());

      if (!response.ok) {
        const errorText = await response.text();
        return {
          content: [
            {
              type: "text",
              text: `Error fetching frontend code: ${response.status} ${response.statusText}\n${errorText}`,
            },
          ],
          isError: true,
        };
      }

      const data = await response.text();

      if (data) {
        const structuredContent = {
          result: data,
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
      } else {
        return {
          content: [
            {
              type: "text",
              text: "No code example found for the specified parameters.",
            },
          ],
          isError: true,
        };
      }
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error fetching frontend code: ${error}`,
          },
        ],
        isError: true,
      };
    }
  };
}
