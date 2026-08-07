import { getToken, type TokenProvider } from "./key.ts";
import type { Result } from "./result.ts";

/**
 * 포트원 REST V2 API(`api.portone.io`) 호출용 Authorization 헤더를 결정합니다.
 *
 * 1. `PORTONE_API_SECRET` 이 설정되어 있으면 `PortOne <시크릿>` 을 사용합니다.
 *    (REST V2 API 의 표준 인증 방식)
 * 2. 없으면 콘솔 OAuth 액세스 토큰(`Bearer ...`)을 사용합니다. 브라우저 로그인이
 *    필요하면 로그인 안내 메시지를 담은 에러를 반환합니다.
 */
export function apiSecretAuthorization(): string | null {
  const secret = process.env.PORTONE_API_SECRET?.trim();
  return secret ? `PortOne ${secret}` : null;
}

export async function getApiAuthorization(
  tokenProvider: TokenProvider,
): Promise<Result<string>> {
  const secret = apiSecretAuthorization();
  if (secret !== null) {
    return { type: "success", data: secret };
  }
  return getToken(tokenProvider);
}
