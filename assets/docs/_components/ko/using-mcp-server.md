---
title: 포트원 MCP (Model Context Protocol) 서버 사용하기
description: 포트원이 제공하는 MCP (Model Context Protocol) 서버 사용 방법을 안내합니다.
targetVersions:
  - v1
  - v2
---

포트원은 쉬운 연동과 빠른 개발을 위해 MCP 서버를 제공합니다. [(GitHub 저장소 바로가기)](https://github.com/portone-io/mcp-server)

포트원 MCP 서버는 개발자센터 문서 내용을 AI에게 제공하여,
AI가 보다 정확하고 구체적인 정보를 바탕으로 사용자의 연동 및 질의를 돕도록 합니다.

### 1. MCP 서버 등록하기

포트원 MCP 서버를 사용하기 위해서는 먼저 사용하는 AI 도구에 서버를 등록해야 합니다.

Cursor, Windsurf, Claude Code, Claude for Desktop 등 다양한 AI 도구의 설정 파일에서 아래 내용을 추가하여 MCP 서버를 등록할 수 있습니다.

```json
{
  // ...

  "mcpServers": {
    // ...

    "portone-mcp-server": {
      "command": "uvx",
      "args": ["portone-mcp-server"]
    }
  }
}
```

<div class="hint" data-style="info">

사용 환경에 [uv](https://docs.astral.sh/uv/getting-started/installation/)가 설치되어 있어야 합니다.

</div>

설정 파일 수정이 완료된 후 AI 도구를 재시작하면 MCP 서버가 적용됩니다.

### 2. MCP 서버 활용하기

사용 중인 AI 도구에 포트원 MCP 서버가 적용되었다면, 아래 예시들과 같이 질의하여 사용할 수 있습니다.

#### 개발 관련 프롬프트 예시

- _"포트원 V2 Python 서버 SDK를 사용해서 서버 연동 코드를 작성해줘"_
- _"포트원 V2 Kotlin 서버 SDK를 사용해 웹훅 검증을 구현해줘"_
- _"포트원 V1 브라우저 SDK를 사용한 페이팔 결제창 호출을 구현해줘"_
- _"파트너정산 자동화 서비스에 파트너 등록하는 코드를 타입스크립트로 구현해줘"_
- _"포트원 V2 본인인증 기능 연동해줘"_

#### 전반적인 질의 예시

- _"포트원 V2와 V1의 차이점을 설명해줘"_
- _"포트원 V2가 지원하는 PG사 목록 보여줘"_
- _"포트원 API의 하위호환성 정책 설명해줘"_
- _"포트원 파트너정산 자동화 서비스가 제공하는 기능들을 요약해줘"_
