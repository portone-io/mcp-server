import axios from "axios";

export function getTool(apiBaseUrl: string) {
  return {
    name: "read_v2_frontend_code",
    description: "포트원 V2 SDK의 프론트엔드 코드 예제를 조회합니다.",
    inputSchema: {
      type: "object",
      properties: {
        framework: {
          type: "string",
          enum: ["react", "vue2", "vue3", "javascript"],
          description: "프론트엔드 프레임워크",
        },
        example: {
          type: "string",
          enum: [
            "request-payment",
            "request-identity-verification",
            "request-issue-billing-key",
            "request-issue-billing-key-and-pay",
          ],
          description: "예제 타입",
        },
      },
      required: ["framework", "example"],
    },
  };
}

export async function handler(
  apiBaseUrl: string,
  args: { framework: string; example: string },
): Promise<string> {
  const { framework, example } = args;

  const url = `${apiBaseUrl}/api/v2/codegen/client/${framework}`;

  try {
    const response = await axios.post(url, {
      example,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return `프론트엔드 코드 예제를 가져오는 데 실패했습니다: ${error.response?.data || error.message}`;
    }
    return `프론트엔드 코드 예제를 가져오는 데 실패했습니다: ${error}`;
  }
}
