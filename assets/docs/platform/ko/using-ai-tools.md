---
title: AI 도구 활용하기
description: AI 도구를 활용하여 쉽고 빠르게 포트원을 연동하세요. 연동 코드 작성은 물론, 24시간 언제나 관련 질의에 대한 답변을 받을 수 있습니다.
targetVersions:
  - v1
  - v2
---

## 포트원 MCP (Model Context Protocol) 서버

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
      "args": ["portone-mcp-server@latest"]
    }
  }
}
```

<div class="hint" data-style="info">

사용 환경에 [uv](https://docs.astral.sh/uv/getting-started/installation/)가 설치되어 있어야 합니다.

</div>

설정 파일 수정이 완료된 후 AI 도구를 재시작하면 MCP 서버가 적용됩니다.

#### 포트원 기능 사용하기

MCP 서버에 포트원 기능을 연동하면, AI가 아래와 같은 작업을 수행할 수 있습니다.

- 결제 내역 단건/다건 조회
- 본인인증 내역 단건/다건 조회

연동을 활성화하려면, MCP 설정 파일의 env 블록에 포트원 관리자 콘솔에서 발급받은 API\_SECRET을 추가합니다.

```json
{
  // ...

  "mcpServers": {
    // ...

    "portone-mcp-server": {
      "command": "uvx",
      "args": ["portone-mcp-server@latest"],
      // 아래 env 블록을 추가하여 API 시크릿을 설정합니다.
      "env": {
        "API_SECRET": "<YOUR_PORTONE_API_SECRET>"
      }
    }
  }
}
```

<div class="hint" data-style="warning">

**API 시크릿은 MCP 서버에서 제공하는 기능 외에도 포트원 REST API의 모든 권한을 가집니다.**

내부의 인가된 인원만이 MCP 서버를 사용할 수 있도록 통제해야 합니다.

</div>

<div class="hint" data-style="warning">

**MCP 서버는 포트원의 공개된 API 기능만을 사용하며, 인증을 위해 사용자가 제공한 API 시크릿을 활용합니다.**

이 인증 과정은 전적으로 MCP 서버 내부에서 일어나므로, 언어 모델의 문제로 인해 비인가 사용자에게 기밀 정보가 유출되지는 않습니다.

</div>

<div class="hint" data-style="warning">

**제3자 AI 서비스를 사용할 경우, API 응답(조회된 데이터 등)이 AI 서비스 측으로 전달되어 저장되거나 해당 서비스의 정책에 따라 모델 학습에 사용될 수 있습니다.**

MCP 서버는 API 응답에 포함된 개인정보가 외부로 전달되지 않도록, 우선적으로 해당 정보를 식별 및 제거하는 보호 조치를 마련하고 있습니다.
다만, 그 외의 정보는 AI 서비스의 운영 정책에 따라 일시적으로 저장되거나 처리될 수 있는 점을 유의해야 합니다.

</div>

### 2. MCP 서버 활용하기

사용 중인 AI 도구에 포트원 MCP 서버가 적용되었다면, 아래 예시들과 같이 질의하여 사용할 수 있습니다.

#### 개발 관련 프롬프트 예시

- _"포트원 V2로 카카오페이 결제창 호출을 구현해줘"_
- _"포트원 문서 읽고 V1 페이팔 결제창 호출하는 코드 작성해줘"_
- _"포트원 V2 Python 서버 SDK 사용해서 결제건 조회하는 스크립트 작성해줘"_
- _"Kotlin으로 포트원 V2 웹훅 검증하는 코드 작성해줘"_
- _"Java로 포트원 서버 SDK 사용해서 포트원 V2 결제 연동하는 법 알려줘"_
- _"포트원 파트너정산 자동화 서비스에 파트너 등록하는 코드를 타입스크립트로 구현해줘"_

#### 전반적인 질의 예시

- _"포트원 문서 읽고 V2와 V1의 차이점을 설명해줘"_
- _"포트원 V2가 지원하는 PG사 목록 보여줘"_
- _"포트원 API의 하위호환성 정책 설명해줘"_
- _"포트원 파트너정산 자동화 서비스가 제공하는 기능들을 요약해줘"_

## llms.txt 표준 지원

포트원 개발자센터 웹사이트는 [llms.txt 표준](https://llmstxt.org)을 준수하며, LLM이 문서 정보를 쉽게 조회할 수 있도록 지원하고 있습니다.

- [llms.txt](https://developers.portone.io/llms.txt): LLM을 위한 가이드 및 문서 목차를 포함합니다.
- [llms-full.txt](https://developers.portone.io/llms-full.txt): llms.txt에 더해 모든 문서 내용을 추가로 포함합니다.
- [llms-small.txt](https://developers.portone.io/llms-small.txt): llms.txt에 더해 모든 문서의 메타 정보만 추가로 포함합니다.

llms.txt, llms-small.txt를 사용하는 AI 어시스턴트의 프롬프트에 포함하거나, llms-full.txt를 파일로 업로드해 질의하는 방식으로도 활용이 가능합니다.

## LLM 전용 개발자센터 문서 디렉터리

포트원 개발자센터 내 문서들을 마크다운 형식으로 담고 있는 LLM 전용 문서 디렉터리를 제공합니다.

해당 디렉터리는 포트원 MCP 서버와 같은 포트원 관련 도구를 만드는 데 사용될 수 있으며,

Cursor, Windsurf, Claude Code와 같이 코드베이스 맥락을 자동으로 분석하는 AI 도구를 사용하는 경우
해당 디렉터리를 해당 도구로 열어 질의하는 방식으로도 활용하실 수 있습니다.

이 경우 위 AI 도구들이 제공하는 임베딩 기반 색인과 RAG (Retrieval Augmented Generation) 검색이 자동적으로 적용되어
일부 질의에 대해 보다 원활하게 원하는 결과를 얻으실 수 있습니다.

(파일: LLM 전용 포트원 문서 디렉터리 다운로드)
