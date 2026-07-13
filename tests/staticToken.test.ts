import { describe, expect, it } from "vitest";
import { TokenProvider } from "../src/tools/utils/key.ts";

describe("TokenProvider 정적 토큰 모드", () => {
  it("정적 액세스 토큰이 설정되면 즉시 authorized 상태를 반환한다", async () => {
    const provider = new TokenProvider({
      staticAccessToken: "test-access-token",
    });
    expect(provider.usesStaticToken).toBe(true);
    const state = await provider.getToken();
    expect(state).toEqual({
      state: "authorized",
      authorization: "Bearer test-access-token",
    });
  });

  it("토큰 타입을 지정하면 Authorization 헤더에 반영된다", async () => {
    const provider = new TokenProvider({
      staticAccessToken: "abc",
      staticTokenType: "Token",
    });
    const state = await provider.getToken();
    expect(state).toMatchObject({ authorization: "Token abc" });
  });

  it("토큰 앞뒤 공백을 제거한다", async () => {
    const provider = new TokenProvider({ staticAccessToken: "  abc  " });
    const state = await provider.getToken();
    expect(state).toMatchObject({ authorization: "Bearer abc" });
  });

  it("토큰이 없거나 공백뿐이면 정적 모드가 아니다", () => {
    expect(new TokenProvider().usesStaticToken).toBe(false);
    expect(new TokenProvider({ staticAccessToken: null }).usesStaticToken).toBe(
      false,
    );
    expect(
      new TokenProvider({ staticAccessToken: "   " }).usesStaticToken,
    ).toBe(false);
  });

  it("정적 모드에서 launchRefresher 는 리프레시 타이머를 만들지 않는다", () => {
    const provider = new TokenProvider({ staticAccessToken: "abc" });
    expect(() => provider.launchRefresher()).not.toThrow();
  });
});
