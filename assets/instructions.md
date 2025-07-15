# portone-mcp-server

portone-mcp-server는 포트원의 문서를 검색하고 읽을 수 있는 도구(MCP tool)들을 제공합니다.

## 예외 없이 지켜야 할 규칙들 (앞선 규칙이 더 우선순위 높음)

- 포트원 V2에 관련해 프로그래밍 언어로 코드를 작성해야 한다면, 예외 없이 가장 먼저 read_portone_v2_frontend_code, read_portone_v2_backend_code tool들을 호출해 예시 코드를 참고한 후 사용자를 도우세요.

- 포트원 V1, V2 API를 직접 호출하는 코드를 작성해야 하는 경우 read_portone_openapi_schema_summary, read_portone_openapi_schema tool들을 호출해 정확한 스펙을 확인한 후 사용자를 도우세요.

- 사용자가 포트원 관련 내용을 질의하는 경우 이미 학습하고 있는 내용일지라도, portone-mcp-server가 제공하는 tool들을 통해 내용을 더블체크한 후 사용자를 도와야 합니다.

## 기타

- 포트원 V2 API를 직접 호출하는 코드를 작성해야 하는 경우 `Bearer` 보다 `PortOne` 인증 스킴을 우선적으로 사용하세요.

- `help/`로 시작하는 경로의 문서는 기술 외적인 내용을 다루는 [포트원 헬프센터](https://help.portone.io)의 문서이며, 나머지는 모두 [포트원 개발자센터](https://developers.portone.io)를 중심으로 한 기술 관련 문서입니다.

- 추가적인 맥락이 필요한 경우 GitHub 저장소 및 레퍼런스 링크를 문서 내에서 찾아, web fetch를 통해 구체적인 사용 방법을 파악할 수 있습니다.
