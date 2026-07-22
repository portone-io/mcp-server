# PortOne MCP Server

포트원 사용자를 위한 MCP (Model Context Protocol) 서버입니다. 포트원 개발자센터, 헬프센터 등 공식 문서 내용을 LLM(Large Language Model)에 제공해 정확한 정보를 바탕으로 사용자의 연동 및 질의를 돕도록 합니다.

이외에도 포트원 콘솔에서 제공하는 기능 중 일부를 수행할 수 있습니다.

- 채널 목록 조회
- 테스트 채널 추가
- 하위 상점 조회
- 결제 내역 조회
- 거래대사 건별 내역 조회 (정산/거래 대사, 불일치 상세 포함)
- 거래대사 정산 요약 조회
- 거래대사 정산 통계 조회

콘솔 기능 사용 시 브라우저를 통해 콘솔 로그인이 필요합니다.

## DXT를 이용한 설치

[DXT (Desktop Extensions)](https://github.com/anthropics/dxt)를 이용해 MCP 서버를 원클릭으로 설치할 수 있습니다.

1. [GitHub Releases](https://github.com/portone-io/mcp-server/releases)에서 최신 `portone-mcp-server.dxt` 파일을 다운로드합니다.

2. 지원하는 AI 도구(Claude Desktop 등)에서 다운로드한 `.dxt` 파일을 드래그 앤 드롭하거나 열기를 통해 설치합니다.

3. 설치 후 도구를 재시작하여 MCP 서버가 정상적으로 등록되었는지 확인합니다.

> [!WARNING]
> **Claude Desktop에서 DXT 파일 사용 시 주의사항**
>
> 현재 [알려진 이슈](https://github.com/anthropics/dxt/issues/45)로 인해 Claude Desktop에서 DXT 설치 후 MCP 서버가 정상적으로 작동하지 않을 수 있습니다.
>
> 이 경우 Node.js 22.6.0 이상을 설치하고 Claude Desktop 설정에서 **"MCP용 내장 Node.js 사용"** 옵션을 비활성화한 후 재시작하면 정상적으로 작동합니다.

## MCP 서버 등록하기

1. Node.js 22.6.0 이상이 설치되어 있어야 합니다.

1. 사용하는 AI 도구의 MCP 설정에서 아래 내용을 추가합니다. (Cursor, Windsurf, Claude Desktop, etc...)

   ```json
   "mcpServers": {

     // 기존 설정

     "portone-mcp-server": {
       "command": "npx",
       "args": [
         "-y",
         "@portone/mcp-server@latest"
       ]
     }
   }
   ```

1. 도구를 재시작해 portone-mcp-server 및 해당 서버가 제공하는 도구들이 잘 등록되었는지 확인합니다.

> [!CAUTION]
> **제3자 AI 서비스를 사용할 경우, API 응답(조회된 데이터 등)이 AI 서비스 측으로 전달되어 저장되거나 해당 서비스의 정책에 따라 모델 학습에 사용될 수 있습니다.**
>
> MCP 서버는 API 응답에 포함된 개인정보가 외부로 전달되지 않도록, 우선적으로 해당 정보를 식별 및 제거하는 보호 조치를 마련하고 있습니다.
> 다만, 그 외의 정보는 AI 서비스의 운영 정책에 따라 일시적으로 저장되거나 처리될 수 있는 점을 유의해야 합니다.

## 서버 환경에서 사용하기 (액세스 토큰 주입)

브라우저 로그인이 불가능한 서버 환경에서는 `PORTONE_ACCESS_TOKEN` 환경 변수로
외부에서 발급한 콘솔 OAuth 액세스 토큰을 주입할 수 있습니다. 이 변수가 설정되면
브라우저를 통한 대화형 OAuth 로그인 플로우(로컬 콜백 서버, PKCE)를 건너뛰고,
주입된 토큰을 그대로 콘솔 기능 호출의 `Authorization` 헤더로 사용합니다.

```json
"mcpServers": {
  "portone-mcp-server": {
    "command": "npx",
    "args": ["-y", "@portone/mcp-server@latest"],
    "env": {
      "PORTONE_ACCESS_TOKEN": "<콘솔에서 발급한 액세스 토큰>"
    }
  }
}
```

- `PORTONE_ACCESS_TOKEN`: 콘솔 OAuth 액세스 토큰(필수). 설정 시 정적 토큰 모드로 동작합니다.
- `PORTONE_TOKEN_TYPE`: 토큰 타입(선택, 기본값 `Bearer`).

> [!IMPORTANT]
> - 정적 토큰 모드에서는 리프레시 토큰이 없으므로 토큰의 발급/갱신/만료 관리는
>   호출 측(서버)의 책임입니다. 만료된 토큰을 주입하면 콘솔 기능 호출이 실패합니다.
> - 토큰은 프로세스별로 격리됩니다. 여러 사용자를 처리하는 서버라면 사용자마다
>   별도의 프로세스에 해당 사용자의 토큰을 주입해, 토큰이 공유되지 않도록 하세요.
> - `PORTONE_ACCESS_TOKEN` 이 없으면 기존과 동일하게 브라우저 로그인 플로우로 동작합니다.

## 개발(dev) 환경으로 실행하기

기본적으로 MCP 서버는 PortOne 운영(prod) 환경에 연결됩니다. `PORTONE_ENV`
환경 변수로 개발(dev) 환경으로 전환할 수 있습니다.

```json
"mcpServers": {
  "portone-mcp-server": {
    "command": "npx",
    "args": ["-y", "@portone/mcp-server@latest"],
    "env": {
      "PORTONE_ENV": "dev"
    }
  }
}
```

- `PORTONE_ENV`: 연결할 환경(선택). `prod`(기본값) 또는 `dev`.
  - `prod` 또는 미설정: 운영 환경(콘솔·머천트·채널 서비스·GraphQL 게이트웨이)에 연결합니다.
  - `dev`: 개발 환경에 연결합니다.
  - 그 외의 값이 들어오면 경고를 출력하고 운영 환경으로 동작합니다.

> [!NOTE]
> - `PORTONE_ENV` 는 콘솔 기능(스토어·채널·결제·거래대사·정산 등) 호출 대상 환경만
>   전환합니다. 문서/헬프센터 조회는 환경과 무관하게 동일하게 동작합니다.
> - dev 환경에서는 dev 콘솔 계정으로 로그인해야 하며, `PORTONE_ACCESS_TOKEN` 을
>   함께 사용하는 경우 해당 dev 환경에서 발급한 토큰을 주입해야 합니다.

## 개발하기

### 요구사항

- Node.js 22.6.0 이상
- pnpm (권장) 또는 npm

1. 저장소를 클론한 후 필요한 패키지 설치하기

   ```bash
   pnpm install
   ```

1. MCP 서버 실행 (개발 모드)

   ```bash
   pnpm dev
   ```

1. 코드 린팅 및 포맷팅

   ```bash
   pnpm lint
   pnpm format
   ```

1. 타입 체크

   ```bash
   pnpm typecheck
   ```

1. 빌드 및 퍼블리싱

   ```bash
   # 먼저 package.json의 version을 변경합니다.
   rm -rf dist
   pnpm install
   pnpm build
   pnpm publish
   ```

1. 로컬 환경의 MCP 서버 등록하기

   ```json
   "mcpServers": {
      "portone-mcp-server": {
        "command": "node",
        "args": [
          "/your/absolute/path/to/portone-mcp-server/dist/index.js"
        ]
      }
   }
   ```

1. 문서 업데이트하기

   요구사항:

   - 로컬에 developers.portone.io, help.portone.io 저장소가 클론되어 있어야 합니다.
   - nvm (Node Version Manager) 및 노드 20, 23 버전이 설치되어 있어야 합니다.
   - corepack이 설치되어 있어야 합니다.

   developers.portone.io 저장소에서 생성된 문서를 MCP 서버에 업데이트하려면 다음과 같이 실행합니다:

   ```bash
   # 환경 변수를 사용하는 방법
   export DEVELOPERS_PORTONE_IO_PATH="/path/to/developers.portone.io"
   export HELP_PORTONE_IO_PATH="/path/to/help.portone.io"
   pnpm update-docs

   # 또는 대화형으로 실행
   pnpm update-docs
   # 프롬프트가 표시되면 developers.portone.io, help.portone.io 저장소 경로 입력
   ```

   이 스크립트는 다음을 수행합니다:

   1. developers.portone.io, help.portone.io 저장소에서 `pnpm docs-for-llms` 명령을 실행 (로컬에 설정된 브랜치 기준으로 문서 생성)
   2. MCP 서버의 docs 디렉토리를 새로 생성된 내용으로 교체
   3. 개발자센터, 헬프센터 외 일부 문서 다운로드 및 교체

## Python 버전에서 마이그레이션

기존에 Python 버전(<0.13.0)의 MCP 서버를 사용하고 계셨다면 TypeScript 버전으로 마이그레이션하는 것을 권장합니다.

### 마이그레이션 방법

1. **MCP 설정 변경**

   기존 파이썬 버전 설정:

   ```json
   "mcpServers": {
     "portone-mcp-server": {
       "command": "uvx",
       "args": ["portone-mcp-server@latest"]
     }
   }
   ```

   새로운 TypeScript 버전 설정:

   ```json
   "mcpServers": {
     "portone-mcp-server": {
       "command": "npx",
       "args": ["-y", "@portone/mcp-server@latest"]
     }
   }
   ```

2. **환경 변수 및 API 시크릿 설정은 동일**하게 유지됩니다.

3. **Node.js 설치**: Node.js 22.6.0 이상이 필요합니다.

4. **AI 도구 재시작**: 설정 변경 후 사용 중인 AI 도구를 재시작합니다.

## 라이선스

[Apache License 2.0](LICENSE-APACHE) OR [MIT License](LICENSE-MIT)
