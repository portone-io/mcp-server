import { afterEach, describe, expect, it, vi } from "vitest";

const OVERRIDE_VARS = [
  "PORTONE_CONSOLE_URL",
  "PORTONE_MERCHANT_SERVICE_URL",
  "PORTONE_CHANNEL_SERVICE_URL",
  "PORTONE_GRAPHQL_URL",
] as const;

// url.ts 는 모듈 로드 시점에 환경 변수를 읽으므로,
// env 를 설정한 뒤 모듈 캐시를 초기화하고 동적으로 import 한다.
async function loadUrls(env: Record<string, string> = {}) {
  vi.resetModules();
  for (const key of OVERRIDE_VARS) {
    delete process.env[key];
  }
  Object.assign(process.env, env);
  return import("../src/url.ts");
}

describe("엔드포인트 오버라이드", () => {
  afterEach(() => {
    for (const key of OVERRIDE_VARS) {
      delete process.env[key];
    }
    vi.restoreAllMocks();
  });

  it("오버라이드 env 가 없으면 운영(prod) 기본값을 사용한다", async () => {
    const urls = await loadUrls();
    expect(urls.CONSOLE_URL).toBe("https://admin.portone.io");
    expect(urls.MERCHANT_SERVICE_URL).toBe(
      "https://merchant-service.prod.iamport.co",
    );
    expect(urls.CHANNEL_SERVICE_URL).toBe(
      "https://channel-service.prod.iamport.co",
    );
    expect(urls.GRAPHQL_URL).toBe("https://api.portone.io/graphql");
  });

  it("각 env 변수로 해당 엔드포인트를 오버라이드한다", async () => {
    const urls = await loadUrls({
      PORTONE_CONSOLE_URL: "https://console.example.test",
      PORTONE_MERCHANT_SERVICE_URL: "https://merchant.example.test",
      PORTONE_CHANNEL_SERVICE_URL: "https://channel.example.test",
      PORTONE_GRAPHQL_URL: "https://gateway.example.test/graphql",
    });
    expect(urls.CONSOLE_URL).toBe("https://console.example.test");
    expect(urls.MERCHANT_SERVICE_URL).toBe("https://merchant.example.test");
    expect(urls.CHANNEL_SERVICE_URL).toBe("https://channel.example.test");
    expect(urls.GRAPHQL_URL).toBe("https://gateway.example.test/graphql");
  });

  it("일부만 오버라이드하면 나머지는 기본값을 유지한다", async () => {
    const urls = await loadUrls({
      PORTONE_GRAPHQL_URL: "https://gateway.example.test/graphql",
    });
    expect(urls.GRAPHQL_URL).toBe("https://gateway.example.test/graphql");
    expect(urls.CONSOLE_URL).toBe("https://admin.portone.io");
  });

  it("공백뿐인 값은 무시하고 기본값을 사용한다", async () => {
    const urls = await loadUrls({ PORTONE_CONSOLE_URL: "   " });
    expect(urls.CONSOLE_URL).toBe("https://admin.portone.io");
  });

  it("값의 앞뒤 공백을 제거한다", async () => {
    const urls = await loadUrls({
      PORTONE_GRAPHQL_URL: "  https://gateway.example.test/graphql  ",
    });
    expect(urls.GRAPHQL_URL).toBe("https://gateway.example.test/graphql");
  });

  it("문서 사이트 URL 은 오버라이드 대상이 아니다", async () => {
    const urls = await loadUrls({
      PORTONE_CONSOLE_URL: "https://x.example.test",
    });
    expect(urls.DEVELOPERS_URL).toBe("https://developers.portone.io");
    expect(urls.HELP_CENTER_URL).toBe("https://help.portone.io");
  });
});
