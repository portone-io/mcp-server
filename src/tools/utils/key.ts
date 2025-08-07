import { getQuery, H3, serve } from "h3";
import open from "open";
import { match } from "ts-pattern";
import { z } from "zod";
import type { Result } from "./result.ts";
import { CONSOLE_URL, MERCHANT_SERVICE_URL } from "./url.ts";

const OAUTH_CLIENT_ID = "MCP";
const OAUTH_TIMEOUT_MILLIS = 5 * 60 * 1000; // 5분

type Token = {
  access: string;
  refresh: string;
  refreshAt: number;
  expiresAt: number;
  tokenType: string;
};

type TokenStateAuthorized = {
  state: "authorized";
  authorization: string;
};

type TokenStateLoginRequired = {
  state: "loginRequired";
  url: URL;
};

type TokenState = TokenStateAuthorized | TokenStateLoginRequired;

const OAuthTokenResponse = z.object({
  access_token: z.string(),
  token_type: z.string(),
  expires_in: z.number(),
  scope: z.array(z.string()),
  refresh_token: z.string(),
});

export class OAuthError extends Error {}

export class TokenProvider {
  private readonly app = new H3().get("/oauth/mcp", async (event) => {
    const query = getQuery(event);
    const { code, error, error_description: errorDescription } = query;
    if (code == null) {
      const message = errorDescription == null ? error : errorDescription;
      return `OAuth Error: ${message}`;
    }
    try {
      this.token = await this.exchangeAuthorizationCode(code);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Internal Server Error";
      return new Response(message, {
        status: 500,
      });
    }
    return `<!DOCTYPE html>
<html lang="en">
  <head><meta charset='utf-8'><script>window.close()</script></head>
  <body>Authorization complete. You may close this window.</body>
</html>
`;
  });
  serverController: AbortController | null = null;
  token: Token | null = null;
  codeVerifier: string | null = null;

  launchRefresher() {
    setInterval(async () => {
      if (this.token !== null && Date.now() >= this.token.refreshAt) {
        try {
          this.token = await this.refresh(this.token.refresh);
        } catch (e) {
          console.error(e);
          this.token = null;
        }
      }
    }, 10 * 1000);
  }

  async exchangeAuthorizationCode(code: string): Promise<Token> {
    const res = await fetch(new URL("/oauth/token", MERCHANT_SERVICE_URL), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        grant_type: "authorization_code",
        code,
        code_verifier: this.codeVerifier,
      }),
    });
    if (!res.ok) {
      throw new OAuthError(
        `server returned status: ${res.status} ${await res.text()}`,
      );
    }
    try {
      const text = await res.text();
      const response = await OAuthTokenResponse.parseAsync(JSON.parse(text));
      const now = Date.now();
      this.serverController?.abort();
      this.serverController = null;
      return {
        access: response.access_token,
        refresh: response.refresh_token,
        refreshAt: now + 60_000,
        expiresAt: now + response.expires_in * 1000,
        tokenType: response.token_type,
      };
    } catch (error) {
      throw new OAuthError("Invalid server response", { cause: error });
    }
  }

  async refresh(refreshToken: string): Promise<Token> {
    const res = await fetch(new URL("/oauth/token", MERCHANT_SERVICE_URL), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });
    if (!res.ok) {
      throw new OAuthError(`server returned status: ${res.status}`);
    }
    try {
      const text = await res.text();
      const response = await OAuthTokenResponse.parseAsync(JSON.parse(text));
      const now = Date.now();
      return {
        access: response.access_token,
        refresh: response.refresh_token,
        refreshAt: now + 60_000,
        expiresAt: now + response.expires_in * 1000,
        tokenType: response.token_type,
      };
    } catch (error) {
      throw new OAuthError("Invalid server response", { cause: error });
    }
  }

  async getToken(): Promise<TokenState> {
    if (this.token === null || Date.now() >= this.token.expiresAt) {
      this.serverController?.abort();
      this.serverController = new AbortController();
      const serverTimeout = setTimeout(() => {
        this.serverController?.abort();
        this.serverController = null;
      }, OAUTH_TIMEOUT_MILLIS);
      this.serverController.signal.addEventListener("abort", () => {
        clearTimeout(serverTimeout);
      });
      serve(this.app, {
        port: 1270,
        silent: true,
        node: {
          signal: this.serverController.signal,
        },
      });
      this.codeVerifier = crypto
        .getRandomValues(Buffer.alloc(32))
        .toString("base64url");
      const codeChallenge = Buffer.from(
        await crypto.subtle.digest(
          "SHA-256",
          Buffer.from(this.codeVerifier, "ascii"),
        ),
      ).toString("base64url");

      const url = new URL("/oauth/authorize", CONSOLE_URL);
      url.searchParams.set("client_id", OAUTH_CLIENT_ID);
      url.searchParams.set("redirect_uri", "http://127.0.0.1:1270/oauth/mcp");
      url.searchParams.set("response_type", "code");
      url.searchParams.set(
        "scope",
        [
          "HOME_AND_REPORT",
          "CHANNEL_READ",
          "CHANNEL_UPDATE",
          "STORE_READ",
          "MERCHANT_READ",
        ].join(" "),
      );
      url.searchParams.set("code_challenge", codeChallenge);
      url.searchParams.set("code_challenge_method", "S256");

      await open(url.toString());
      return {
        state: "loginRequired",
        url,
      };
    } else {
      return {
        state: "authorized",
        authorization: `${this.token.tokenType} ${this.token.access}`,
      };
    }
  }
}

export async function getToken(
  tokenProvider: TokenProvider,
): Promise<Result<string>> {
  const state = await tokenProvider.getToken();
  return match(state)
    .returnType<Result<string>>()
    .with(
      {
        state: "loginRequired",
      },
      ({ url }) => ({
        type: "error",
        data: {
          message: `로그인이 필요합니다. 브라우저에서 로그인을 진행해주세요. 브라우저가 열리지 않으면 ${url} 에 직접 접속해서 로그인을 진행해주세요.`,
        },
      }),
    )
    .with(
      {
        state: "authorized",
      },
      ({ authorization }) => ({
        type: "success",
        data: authorization,
      }),
    )
    .exhaustive();
}
