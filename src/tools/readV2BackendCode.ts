import axios from "axios";

export function getTool(apiBaseUrl: string) {
  return {
    name: "read_v2_backend_code",
    description: "포트원 V2 API의 백엔드 코드 예제를 조회합니다.",
    inputSchema: {
      type: "object",
      properties: {
        language: {
          type: "string",
          enum: [
            "java",
            "python",
            "php",
            "node",
            "go",
            "dotnet",
            "ruby",
            "rust",
          ],
          description: "프로그래밍 언어",
        },
        endpoint: {
          type: "string",
          description:
            'API 엔드포인트 경로. 예: "payments/{paymentId}", "identity-verifications/{identityVerificationId}"',
        },
        method: {
          type: "string",
          enum: ["GET", "POST", "PATCH", "DELETE"],
          description: "HTTP 메소드",
        },
      },
      required: ["language", "endpoint", "method"],
    },
  };
}

export async function handler(
  apiBaseUrl: string,
  args: { language: string; endpoint: string; method: string },
): Promise<string> {
  const { language, endpoint, method } = args;

  const url = `${apiBaseUrl}/api/v2/codegen/server/${language}`;

  try {
    const response = await axios.post(url, {
      endpoint,
      method,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return `백엔드 코드 예제를 가져오는 데 실패했습니다: ${error.response?.data || error.message}`;
    }
    return `백엔드 코드 예제를 가져오는 데 실패했습니다: ${error}`;
  }
}
