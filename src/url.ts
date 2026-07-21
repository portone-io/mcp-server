/**
 * PortOne 서비스 엔드포인트.
 *
 * `PORTONE_ENV` 환경 변수로 운영(prod) / 개발(dev) 환경을 전환합니다.
 * - 미설정 또는 `prod`: 운영 환경(기본값).
 * - `dev`: 개발 환경.
 * 알 수 없는 값이 들어오면 경고 후 운영 환경으로 동작합니다.
 *
 * 문서 사이트(DEVELOPERS_URL / HELP_CENTER_URL)는 환경과 무관하므로
 * 두 환경 모두 동일한 값을 사용합니다.
 */

type Environment = "prod" | "dev";

interface Endpoints {
  /** 개발자 문서 사이트 (환경 무관). */
  DEVELOPERS_URL: string;
  /** 콘솔. OAuth authorize(브라우저 로그인)에 사용. */
  CONSOLE_URL: string;
  /** 머천트 서비스. OAuth token 교환·갱신에 사용. */
  MERCHANT_SERVICE_URL: string;
  /** 채널 서비스. 채널 조회·추가에 사용. */
  CHANNEL_SERVICE_URL: string;
  /** GraphQL 게이트웨이. 스토어·결제·거래대사·정산 조회에 사용. */
  GRAPHQL_URL: string;
  /** 헬프센터 문서 사이트 (환경 무관). */
  HELP_CENTER_URL: string;
}

const PROD: Endpoints = {
  DEVELOPERS_URL: "https://developers.portone.io",
  CONSOLE_URL: "https://admin.portone.io",
  MERCHANT_SERVICE_URL: "https://merchant-service.prod.iamport.co",
  CHANNEL_SERVICE_URL: "https://channel-service.prod.iamport.co",
  GRAPHQL_URL: "https://api.portone.io/graphql",
  HELP_CENTER_URL: "https://help.portone.io",
};

const DEV: Endpoints = {
  // 문서 사이트는 환경 무관하게 운영 값을 공용으로 사용합니다.
  DEVELOPERS_URL: PROD.DEVELOPERS_URL,
  HELP_CENTER_URL: PROD.HELP_CENTER_URL,
  CONSOLE_URL: "https://port-console-dev.vercel.app",
  MERCHANT_SERVICE_URL: "https://merchant-service.dev.iamport.co",
  CHANNEL_SERVICE_URL: "https://channel-service.dev.iamport.co",
  GRAPHQL_URL: "https://public-api-service.dev.iamport.co/graphql",
};

function resolveEnvironment(): Environment {
  const raw = process.env.PORTONE_ENV?.trim().toLowerCase();
  if (raw == null || raw === "" || raw === "prod") {
    return "prod";
  }
  if (raw === "dev") {
    return "dev";
  }
  console.error(
    `Unknown PORTONE_ENV "${process.env.PORTONE_ENV}"; falling back to "prod". Valid values: "prod", "dev".`,
  );
  return "prod";
}

const endpoints: Endpoints = resolveEnvironment() === "dev" ? DEV : PROD;

export const DEVELOPERS_URL = endpoints.DEVELOPERS_URL;
export const CONSOLE_URL = endpoints.CONSOLE_URL;
export const MERCHANT_SERVICE_URL = endpoints.MERCHANT_SERVICE_URL;
export const CHANNEL_SERVICE_URL = endpoints.CHANNEL_SERVICE_URL;
export const GRAPHQL_URL = endpoints.GRAPHQL_URL;
export const HELP_CENTER_URL = endpoints.HELP_CENTER_URL;
