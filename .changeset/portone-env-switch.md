---
"@portone/mcp-server": patch
---

`PORTONE_ENV` 환경 변수로 연결 환경(운영/개발)을 전환할 수 있도록 지원합니다. `dev` 로 설정하면 콘솔·머천트 서비스·채널 서비스·GraphQL 게이트웨이가 PortOne 개발(dev) 환경을 향하며, 미설정 또는 `prod` 시 기존과 동일하게 운영 환경으로 동작합니다.