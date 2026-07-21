import { afterEach, describe, expect, it, vi } from "vitest";

// url.ts 는 모듈 로드 시점에 PORTONE_ENV 를 읽으므로,
// env 를 설정한 뒤 모듈 캐시를 초기화하고 동적으로 import 한다.
async function loadUrls(env?: string) {
  vi.resetModules();
  if (env === undefined) {
    delete process.env.PORTONE_ENV;
  } else {
    process.env.PORTONE_ENV = env;
  }
  return import("../src/url.ts");
}

describe("환경별 엔드포인트(PORTONE_ENV)", () => {
  afterEach(() => {
    delete process.env.PORTONE_ENV;
    vi.restoreAllMocks();
  });

  it("PORTONE_ENV 미설정 시 운영(prod) 엔드포인트를 사용한다", async () => {
    const urls = await loadUrls(undefined);
    expect(urls.CONSOLE_URL).toBe("https://admin.portone.io");
    expect(urls.MERCHANT_SERVICE_URL).toBe(
      "https://merchant-service.prod.iamport.co",
    );
    expect(urls.CHANNEL_SERVICE_URL).toBe(
      "https://channel-service.prod.iamport.co",
    );
    expect(urls.GRAPHQL_URL).toBe("https://api.portone.io/graphql");
  });

  it('PORTONE_ENV="prod" 이면 운영 엔드포인트를 사용한다', async () => {
    const urls = await loadUrls("prod");
    expect(urls.GRAPHQL_URL).toBe("https://api.portone.io/graphql");
  });

  it('PORTONE_ENV="dev" 이면 개발 엔드포인트를 사용한다', async () => {
    const urls = await loadUrls("dev");
    expect(urls.CONSOLE_URL).toBe("https://port-console-dev.vercel.app");
    expect(urls.MERCHANT_SERVICE_URL).toBe(
      "https://merchant-service.dev.iamport.co",
    );
    expect(urls.CHANNEL_SERVICE_URL).toBe(
      "https://channel-service.dev.iamport.co",
    );
    expect(urls.GRAPHQL_URL).toBe(
      "https://public-api-service.dev.iamport.co/graphql",
    );
  });

  it("대소문자·공백을 무시하고 dev 를 인식한다", async () => {
    const urls = await loadUrls("  DEV  ");
    expect(urls.MERCHANT_SERVICE_URL).toBe(
      "https://merchant-service.dev.iamport.co",
    );
  });

  it("문서 사이트 URL 은 환경과 무관하게 동일하다", async () => {
    const prod = await loadUrls("prod");
    const dev = await loadUrls("dev");
    expect(dev.DEVELOPERS_URL).toBe(prod.DEVELOPERS_URL);
    expect(dev.HELP_CENTER_URL).toBe(prod.HELP_CENTER_URL);
    expect(dev.DEVELOPERS_URL).toBe("https://developers.portone.io");
    expect(dev.HELP_CENTER_URL).toBe("https://help.portone.io");
  });

  it("알 수 없는 값이면 경고 후 운영 환경으로 폴백한다", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const urls = await loadUrls("staging");
    expect(urls.GRAPHQL_URL).toBe("https://api.portone.io/graphql");
    expect(errorSpy).toHaveBeenCalledOnce();
  });
});
