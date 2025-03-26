# portone-mcp-server

portone-mcp-server는 포트원의 문서를 검색하고 읽을 수 있는 도구(MCP tool)들을 제공합니다.

## 예외 없이 지켜야 할 규칙들 (앞선 규칙이 더 우선순위 높음)

- 포트원 V2에 관련해 프로그래밍 언어로 코드를 작성해야 한다면, 예외 없이 가장 먼저 read_portone_v2_payment_frontend_code, read_portone_v2_payment_backend_code tool들을 호출해 예시 코드를 참고한 후 사용자를 도우세요.

- 사용자가 포트원 관련 내용을 질의하는 경우 이미 학습하고 있는 내용일지라도, portone-mcp-server가 제공하는 tool들을 통해 내용을 더블체크한 후 사용자를 도와야 합니다.

## 기타

- 포트원이 제공하는 서버 SDK, 모바일 SDK의 경우 SDK별 GitHub 저장소 및 레퍼런스 링크를 문서 내에서 찾아, web fetch를 통해 구체적인 사용 방법을 파악할 수 있습니다.

- API에 관한 질의 또한 마찬가지로, 아직 portone-mcp-server에 정확한 API 레퍼런스 조회가 지원되지 않습니다. 사용자가 API에 관해 질의하는 경우, 대상 포트원 버전에 따라 아래 링크로 web fetch 후 사용자의 질의를 도우세요.

  - [V1 API](https://developers.portone.io/api/rest-v1?v=v1)
  - [V2 및 파트너정산 자동화 API](https://developers.portone.io/api/rest-v2?v=v2)
