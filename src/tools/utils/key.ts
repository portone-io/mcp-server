import { getQuery, H3, serve } from 'h3';
import open from "open";
import { z } from 'zod/v4';

const CONSOLE_URL = 'https://admin.portone.io'
const MERCHANT_SERVICE_URL = 'https://merchant-service.prod.iamport.co'
const OAUTH_CLIENT_ID = 'MCP'

type Token = {
  access: string
  refresh: string
  refreshAt: number
  expiresAt: number
  tokenType: string
}

const OAuthTokenResponse = z.object({
  accessToken: z.string(),
  tokenType: z.string(),
  expiresIn: z.number(),
  scope: z.array(z.string()),
  refreshToken: z.string(),
})

export class OAuthError extends Error { }

export class TokenProvider {
  private server: H3
  token: Token | null = null
  codeVerifier: string | null = null

  constructor() {
    this.server = new H3()
      .get('/oauth/mcp', async (event) => {
        const query = getQuery(event);
        const { code, error, error_description: errorDescription } = query;
        if (code == null) {
          const message = errorDescription == null ? error : errorDescription
          return `OAuth Error: ${message}`
        }
        try {
          this.token = await this.exchangeAuthorizationCode(code)
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Internal Server Error'
          return new Response(message, {
            status: 500,
          })
        }
        return `<!DOCTYPE html>
<html lang='en'>
  <head><meta charset='utf-8'><script>window.close()</script></head>
  <body>Authorization complete. You may close this window.</body>
</html>
`;
      });
  }

  serveListener() {
    serve(this.server, {
      port: 1270,
    });
    setInterval(() => {
      if (this.token !== null && Date.now() >= this.token.refreshAt) {
        this.refresh(this.token.refresh);
      }
    }, 10 * 1000);
  }

  async exchangeAuthorizationCode(code: string): Promise<Token> {
    const res = await fetch(new URL('/oauth/token', MERCHANT_SERVICE_URL), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        grant_type: 'authorization_code',
        code,
        code_verifier: this.codeVerifier,
      }),
    })
    if (!res.ok) {
      throw new OAuthError(`server returned status: ${res.status}`);
    }
    try {
      const text = await res.text()
      const response = z.parse(OAuthTokenResponse, JSON.parse(text))
      const now = Date.now()
      return {
        access: response.accessToken,
        refresh: response.refreshToken,
        refreshAt: now + 60,
        expiresAt: now + 300,
        tokenType: response.tokenType,
      }
    } catch (error) {
      throw new OAuthError('Invalid server response', { cause: error });
    }
  }

  async refresh(refreshToken: string): Promise<Token> {
    const res = await fetch(new URL('/oauth/token', MERCHANT_SERVICE_URL), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    })
    if (!res.ok) {
      throw new OAuthError(`server returned status: ${res.status}`);
    }
    try {
      const text = await res.text()
      const response = z.parse(OAuthTokenResponse, JSON.parse(text))
      const now = Date.now()
      return {
        access: response.accessToken,
        refresh: response.refreshToken,
        refreshAt: now + 60,
        expiresAt: now + 300,
        tokenType: response.tokenType,
      }
    } catch (error) {
      throw new OAuthError('Invalid server response', { cause: error });
    }
  }

  async getToken(): Promise<string | null> {
    if (this.token === null || Date.now() >= this.token.expiresAt) {
      this.codeVerifier = crypto.getRandomValues(Buffer.alloc(32)).toString('base64url');
      const codeChallenge = Buffer.from(await crypto.subtle.digest('SHA-256', Buffer.from(this.codeVerifier, 'ascii'))).toString('base64url');

      const url = new URL('/oauth/authorize', CONSOLE_URL);
      url.searchParams.set('client_id', OAUTH_CLIENT_ID);
      url.searchParams.set('redirect_uri', 'http://127.0.0.1:1270/oauth/mcp');
      url.searchParams.set('response_type', 'code');
      url.searchParams.set('scope', 'HOME_AND_REPORT');
      url.searchParams.set('code_challenge', codeChallenge);
      url.searchParams.set('code_challenge_method', 'S256');

      await open(url.toString());
      return null;
    } else {
      return `${this.token.tokenType} ${this.token.access}`;
    }
  }
}
