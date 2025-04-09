---
title: '[릴리즈노트] 2024-10-21 파트너정산 자동화 업데이트'
category: 업데이트
tags:
  - 파트너정산
  - 업데이트
searchTags:
  - 일괄등록
  - 수기정산 일괄등록
  - 수기정산
  - 송금대행 일괄지급
  - 송금대행
  - 업데이트
  - 파트너정산
datetime: 2025-02-13T06:02:32.259Z
---

<Callout title="2024년 10월 21일 파트너 정산 자동화 업데이트 소식을 안내드립니다." />



<Callout content="안녕하세요 파트너 정산 자동화팀입니다.

24년 10월 21일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 그간 고객사에서 특히 요청이 많았던 기능들을 추가 제공합니다.

1. 송금대행 일괄지급 예약 기능을 지원합니다.
2. 수기정산 일괄등록 기능을 지원합니다." />

## **주요 업데이트 사항**

✔️ 송금대행 일괄지급 예약 기능



- 송금대행 일괄지급은 기존에 **즉시 지급만** 가능하였으나, 이번 업데이트로 즉시 지급과 **예약 지급을 선택하여** 지급을 실행할 수 있습니다. 내부 정책에 맞게 지급 일시를 유연하게 관리해보세요!

✔️ 송금대행 일괄지급 예약 내역 관리 기능



- 예약내역을 확인할 수 있습니다.
- 일괄지급 예약시간은 실제 실행 전까지 자유로이 변경하거나 취소할 수 있습니다.

✔️ 수기정산 내역 일괄 등록 기능



#### **API 변경사항**

✔️ 일괄 지급 내역 다건 조회

일괄 지급 내역 다건 조회 응답값이 수정되었습니다.

- items: [PlatformBulkPayout\[\]](https://developers.portone.io/api/rest-v2/type-def#PlatformBulkPayout) 일괄 지급 내역에 필드가 추가되었습니다.
  - scheduledAt?: string 일괄지급 예정일시
  - status: [PlatformBulkPayoutStatus](https://developers.portone.io/api/rest-v2/type-def#PlatformBulkPayoutStatus) 일괄지급 상태에 SCHEDULED (예약됨) 상태가 추가되었습니다.
- counts: [PlatformBulkPayoutStatusStats](https://developers.portone.io/api/rest-v2/type-def#PlatformBulkPayoutStatusStats) 일괄지급 상태별 통계에 scheduled상태인 일괄지급 건 수가 추가되었습니다.
  - scheduled: integer 예약된 일괄지급 건 수

✔️ 지급 내역 다건 조회

지급 내역 다건 조회 응답값이 수정되었습니다.

- items: [PlatformPayout\[\]](https://developers.portone.io/api/rest-v2/type-def#PlatformPayout) 지급 내역에 필드가 추가되었습니다.
  - scheduledAt?: string 지급 예정일시
  - status: [PlatformPayoutStatus](https://developers.portone.io/api/rest-v2/type-def#PlatformPayoutStatus) 지급 상태에 SCHEDULED (예약됨) 상태가 추가되었습니다.
- counts: [PlatformPayoutStatusStats](https://developers.portone.io/api/rest-v2/type-def#PlatformPayoutStatusStats) 지급 상태별 통계에 scheduled 상태인 지급 건 수가 추가되었습니다.
  - scheduled: integer 예약된 지급 건 수

✔️ 정산 내역 다건 조회

정산 내역 다건 조회 응답값이 수정되었습니다.

- items: [PlatformPartnerSettlement\[\]](https://developers.portone.io/api/rest-v2/type-def#PlatformPartnerSettlement) 정산 내역에 필드가 추가되었습니다.
  - status: [PlatformPartnerSettlementStatus](https://developers.portone.io/api/rest-v2/type-def#PlatformPartnerSettlementStatus) 정산 상태에 PAYOUT\_SCHEDULED (지급 예약) 상태가 추가되었습니다.
- counts: [PlatformPartnerSettlementStatusStats](https://developers.portone.io/api/rest-v2/type-def#PlatformPartnerSettlementStatusStats) 정산 상태별 통계에 payoutScheduled 상태인 정산 내역 건 수가 추가되었습니다.
  - payoutScheduled: integer 지급 예약된 정산 내역 건 수

##### [\[파트너정산 릴리즈노트\] 2024-10-21 업데이트 보러가기↗](https://developers.portone.io/release-notes/platform/2024-10-21)
