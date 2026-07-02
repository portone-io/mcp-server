---
"@portone/mcp-server": patch
---

거래대사/정산 조회 기간 제약 조정: 정산 요약·통계는 최대 1개월, 건별 거래대사 내역(getReconciliationsByFilter)은 최대 2주로 축소했습니다. (최근 6개월 이내 시작일 제약은 유지)
