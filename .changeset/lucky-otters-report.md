---
"@portone/mcp-server": minor
---

getPaymentsByFilter 에 결제 실패 사유·취소 사유 추가

결제 내역 조회 결과에서 실패 사유(`failure.reason`, `failure.pgCode`, `failure.pgMessage`)와
취소 내역별 취소 사유(`cancellation.reason`, 취소 금액·요청/완료 시각·요청 주체)를 조회할 수 있습니다.
실패 사유는 실패한 결제건, 취소 사유는 전체/부분 취소된 결제건에만 존재합니다.