---
"@portone/mcp-server": minor
---

콘솔 기능 인증에 `PORTONE_ACCESS_TOKEN` 환경 변수를 통한 액세스 토큰 주입(정적 토큰 모드)을 지원합니다. 설정 시 브라우저 OAuth 로그인 플로우를 건너뛰어, 브라우저를 열 수 없는 서버 환경에서도 콘솔 기능을 사용할 수 있습니다. `PORTONE_TOKEN_TYPE`(기본값 `Bearer`)로 토큰 타입을 지정할 수 있습니다.
