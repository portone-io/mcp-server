import type { Result } from "./result.ts";

type GraphQLErrorEntry = {
  message?: string;
  path?: string;
  code?: string;
};

/**
 * 요청 중 발생한 예외를 사용자/디버깅에 유용한 형태의 에러 Result 로 변환합니다.
 *
 * graphql-request 는 응답에 GraphQL `errors` 가 있으면 ClientError 를 던집니다.
 * 이 경우 게이트웨이가 내려준 message 가 빈 문자열일 수 있으므로, 각 에러의
 * message / extensions.code / path 를 함께 추출하고, message 가 비어 있으면
 * code 또는 기본 문구로 대체해 **message 가 절대 비지 않도록** 보장합니다.
 */
export function toRequestError(error: unknown): Result<never> {
  const response = (error as { response?: unknown } | null)?.response as
    | { errors?: unknown }
    | undefined;
  const rawErrors = response?.errors;

  if (Array.isArray(rawErrors) && rawErrors.length > 0) {
    const errors: GraphQLErrorEntry[] = rawErrors.map((entry) => {
      const e = entry as {
        message?: unknown;
        path?: unknown;
        extensions?: { code?: unknown };
      };
      const message =
        typeof e.message === "string" && e.message.length > 0
          ? e.message
          : undefined;
      const code =
        e.extensions?.code != null ? String(e.extensions.code) : undefined;
      const path = Array.isArray(e.path) ? e.path.join(".") : undefined;
      return { message, code, path };
    });

    const primary = errors[0];
    const message =
      primary.message ??
      (primary.code != null
        ? `GraphQL 오류 (code: ${primary.code})`
        : "GraphQL 오류가 발생했습니다. (서버가 상세 메시지를 반환하지 않음)");

    return {
      type: "error",
      data: { message, type: "GraphQLError", errors },
    };
  }

  if (error instanceof Error) {
    return {
      type: "error",
      data: {
        message: error.message || error.name || "오류가 발생했습니다.",
        type: error.name,
      },
    };
  }

  return {
    type: "error",
    data: { message: "알 수 없는 오류가 발생했습니다.", cause: String(error) },
  };
}
