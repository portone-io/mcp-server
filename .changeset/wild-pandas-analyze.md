---
"@portone/mcp-server": minor
---

결제 내역 다건 조회(집계) 도구 4종 추가

REST V2 결제 대용량 다건 조회(`/payments-by-cursor`)를 전체 페이징으로 수집해 집계하는 도구를 추가했습니다.

- `getPaymentSummary`: 거래 현황 요약·시계열(시/일/월)·평균 거래액(건별/고객당)·비교 구간 증감률
- `getPaymentBreakdown`: 결제수단 / 결제대행사 / 결제상태 / 카드 브랜드 / 에스크로 등 차원별 분포
- `getPaymentFailureReasons`: 결제 실패 사유 대분류 집계
- `getPaymentStatusBreakdownByDimension`: 결제 상태 × 차원 교차 집계

기존 `getPaymentsByFilter` 는 개별 결제 건을 조회하는 "결제 내역 단건 조회" 도구로 설명을 명확히 했습니다.

REST V2 API 호출용으로 `PORTONE_API_SECRET`(선택, 없으면 콘솔 OAuth 토큰 사용)과
`PORTONE_API_URL`(엔드포인트 오버라이드) 환경 변수를 지원합니다.
