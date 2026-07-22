/**
 * PortOne 서비스 엔드포인트.
 *
 * 기본값은 운영(prod) 환경입니다. 아래 환경 변수를 설정하면 각 엔드포인트를
 * 개별적으로 다른 환경(예: 내부 테스트 환경)으로 오버라이드할 수 있습니다.
 * - `PORTONE_CONSOLE_URL`          : 콘솔 (OAuth authorize / 브라우저 로그인)
 * - `PORTONE_MERCHANT_SERVICE_URL` : 머천트 서비스 (OAuth token 교환·갱신)
 * - `PORTONE_CHANNEL_SERVICE_URL`  : 채널 서비스 (채널 조회·추가)
 * - `PORTONE_GRAPHQL_URL`          : GraphQL 게이트웨이 (스토어·결제·거래대사·정산)
 *
 * 문서/헬프센터 URL은 환경과 무관하므로 오버라이드하지 않습니다.
 */

/**
 * 환경 변수로 URL을 오버라이드하되, 값이 없거나 공백뿐이면 기본값을 사용한다.
 */
function urlFromEnv(name: string, fallback: string): string {
  const value = process.env[name]?.trim();
  return value ? value : fallback;
}

export const DEVELOPERS_URL = "https://developers.portone.io";
export const HELP_CENTER_URL = "https://help.portone.io";
export const CONSOLE_URL = urlFromEnv(
  "PORTONE_CONSOLE_URL",
  "https://admin.portone.io",
);
export const MERCHANT_SERVICE_URL = urlFromEnv(
  "PORTONE_MERCHANT_SERVICE_URL",
  "https://merchant-service.prod.iamport.co",
);
export const CHANNEL_SERVICE_URL = urlFromEnv(
  "PORTONE_CHANNEL_SERVICE_URL",
  "https://channel-service.prod.iamport.co",
);
export const GRAPHQL_URL = urlFromEnv(
  "PORTONE_GRAPHQL_URL",
  "https://api.portone.io/graphql",
);
