---
"@portone/mcp-server": patch
---

거래대사/정산 조회 시 GraphQL 오류(직렬화 실패 등) 응답의 에러 메시지가 비어 나가던 문제를 개선했습니다. 이제 GraphQL 에러의 message·extensions.code·path 를 함께 노출하고, message 가 비어 있으면 에러 코드로 대체해 항상 진단 가능한 정보를 반환합니다.
