---
"@portone/mcp-server": minor
---

환경 전환 방식을 `PORTONE_ENV`(내부 환경 URL 하드코딩)에서 개별 엔드포인트 오버라이드로 변경합니다. `PORTONE_CONSOLE_URL` / `PORTONE_MERCHANT_SERVICE_URL` / `PORTONE_CHANNEL_SERVICE_URL` / `PORTONE_GRAPHQL_URL` 환경 변수로 각 서비스 엔드포인트를 개별 오버라이드할 수 있으며, 미설정 시 운영(prod) 환경 기본값을 사용합니다.