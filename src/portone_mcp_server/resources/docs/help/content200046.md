---
title: '[릴리즈노트] 2024-08-22  업데이트'
category: 업데이트
tags:
  - 업데이트
searchTags:
  - 면세할인금액
  - 면세금액
  - 파트너정산
datetime: 2025-02-13T06:02:32.259Z
---

<Callout title="2024년 08월 22일 파트너 정산 자동화 업데이트 소식을 안내드립니다." />



<Callout content="안녕하세요. 파트너 정산 자동화팀입니다.
24년 8월 22일, 서비스 업데이트 사항 안내드립니다.

정산 상세 API 중 주문 정산 등록 시 할인 금액 중 면세 금액(이하. 면세 할인 금액)을 지원합니다.

주문 정산, 주문 취소 정산 시 면세 할인 금액을 지정하여 정확한 주문 금액 중 면세금액과 결제 금액 중 면세금액을 지원합니다.
해당 주문 면세 금액과 결제 면세 금액, 할인 면세 금액에 대해서 정산 금액 결과에 반영되며 현재는 API 상에서 확인 가능합니다.
더불어 이체 내역 다건 조회 API가 추가되었습니다. 가상 계좌 내 충전, 파트너 정산 송금, 송금 이체 내역들을 조회할 수 있습니다." />

## **주요 업데이트 사항**

✔️ 면세 할인 금액 지원

- 주문 정산건과 주문 취소 정산건 생성 시 discounts에 면세 할인 금액(taxFreeAmount)을 지정하여 면세 주문 금액에서 면세 할인 금액을 차감하고, 면세 할인 분담 금액을 계산하실 수 있습니다.
- 현재는 콘솔에서 할인 면세 금액과 관련된 필드를 확인하실 수 없고 API를 통해서만 확인하실 수 있습니다. 추후 콘솔에서도 확인하실 수 있도록 업데이트될 예정입니다.

**API 변경사항**

주문 정산건 생성 요청

- discounts:[\[CreatePlatformOrderTransferBodyDiscount\[\]\]](https://developers.portone.io/api/rest-v2/type-def#CreatePlatformOrderTransferBodyDiscount) 할인 정보에 면세 할인 금액 필드가 추가되었습니다.
  - taxFreeAmount?: integer 면세 할인 금액

주문 취소 정산건 생성 요청

- discounts:[\[CreatePlatformOrderCancelTransferBodyDiscount\[\]\]](https://developers.portone.io/api/rest-v2/type-def#CreatePlatformOrderCancelTransferBodyDiscount) 할인 정보에 면세 할인 금액 필드가 추가되었습니다.
  - taxFreeAmount?: integer 면세 할인 금액

주문 정산건 생성, 주문 취소 정산건 생성 응답

- amount:[\[PlatformOrderSettlementAmount\]](https://developers.portone.io/api/rest-v2/type-def#PlatformOrderSettlementAmount) 정산 금액 정보에 필드가 추가되었습니다.
  - paymentTaxFree: integer 결제 면세 금액
    - 기존 taxFree를 대체하는 필드입니다. taxFree를 사용하고 계셨다면 paymentTaxFree를 대신 사용해 주세요
  - paymentSupply: integer 결제 공급가액
    - 기존 supply를 대체하는 필드입니다. supply를 사용하고 계셨다면 paymentSupply를 대신 사용해 주세요
  - orderTaxFree: integer 면세 주문 금액
  - discountTaxFree: integer 면세 할인 금액
  - discountShareTaxFree: integer 면세 할인 분담 금액
- discounts:[\[PlatformOrderTransferDiscount\[\]\]](https://developers.portone.io/api/rest-v2/type-def#PlatformOrderTransferDiscount) 정산 금액 계산 시 사용된 할인 정보에 필드가 추가되었습니다.
  - taxFreeAmount: integer 면세 할인 금액
  - shareTaxFreeAmount: integer 면세 할인 분담 금액

정산 상세 내역 다운로드 필드 추가

- fields?:[\[PlatformTransferSheetField\[\]\]](https://developers.portone.io/api/rest-v2/type-def#PlatformTransferSheetField) 다운로드 할 시트 필드가 추가되었습니다.
  - SETTLEMENT\_PAYMENT\_SUPPLY\_AMOUNT: 결제 공급가액
    - 기존 SETTLEMENT\_SUPPLY\_AMOUNT를 대체하는 필드입니다. SETTLEMENT\_SUPPLY\_AMOUNT를 사용하고 계셨다면 SETTLEMENT\_PAYMENT\_SUPPLY\_AMOUNT를 대신 사용해 주세요
  - SETTLEMENT\_PAYMENT\_TAX\_FREE\_AMOUNT: 결제 면세 금액
    - 기존 SETTLEMENT\_TAX\_FREE\_AMOUNT를 대체하는 필드입니다. SETTLEMENT\_TAX\_FREE\_AMOUNT를 사용하고 계셨다면 SETTLEMENT\_PAYMENT\_TAX\_FREE\_AMOUNT를 대신 사용해 주세요
  - SETTLEMENT\_ORDER\_TAX\_FREE\_AMOUNT: 면세 주문 금액
  - SETTLEMENT\_DISCOUNT\_TAX\_FREE\_AMOUNT: 면세 할인 금액
  - SETTLEMENT\_DISCOUNT\_SHARE\_TAX\_FREE\_AMOUNT: 면세 할인 분담 금액

주문 정산건 생성 응답 에러 타입 추가 & 변경

- 에러 타입 추가
  - PlatformSettlementAmountExceededError: 정산 가능한 금액을 초과한 경우 에러 타입이 추가되었습니다.
    - type: AmountExceededType 필드로 요청받은 금액과 초과한 금액의 타입을 알 수 있습니다.
      - DISCOUNT\_THAN\_ORDER: 할인금액이 주문금액을 초과
      - DISCOUNT\_TAX\_FREE\_THAN\_DISCOUNT: 면세 할인금액이 할인금액을 초과
      - DISCOUNT\_TAX\_FREE\_THAN\_ORDER\_TAX\_FREE: 면세 할인금액이 면세 주문금액을 초과
      - PAYMENT\_TAX\_FREE\_THAN\_PAYMENT: 면세 결제금액이 결제금액을 초과
- 에러 타입 변경
  - PlatformDiscountExceededOrderAmountError: 할인 금액이 주문 금액을 초과한 경우
  - PlatformTaxFreeAmountOverFlowError: 결제 면세 금액이 결제금액을 초과한 경우
  - 위의 두 에러 타입이 제거되고 PlatformSettlementAmountExceededError 타입으로 통합되었습니다.

주문 취소 정산건 생성 응답 에러 타입 추가 & 변경

- 에러 타입 추가
  - PlatformSettlementAmountExceededError: 정산 가능한 금액을 초과한 경우 에러 타입이 추가되었습니다.
    - type: AmountExceededType 필드로 요청받은 금액과 초과한 금액의 타입을 알 수 있습니다.
      - DISCOUNT\_THAN\_ORDER: 할인금액이 주문금액을 초과
      - DISCOUNT\_TAX\_FREE\_THAN\_DISCOUNT: 면세 할인금액이 할인금액을 초과
      - DISCOUNT\_TAX\_FREE\_THAN\_ORDER\_TAX\_FREE: 면세 할인금액이 면세 주문금액을 초과
      - PAYMENT\_TAX\_FREE\_THAN\_PAYMENT: 면세 결제금액이 결제금액을 초과
- 에러 타입 변경
  - PlatformDiscountCancelExceededOrderCancelAmountError: 취소 할인 금액이 취소 주문 금액을 초과한 경우
  - PlatformTaxFreeAmountOverFlowError: 결제 면세 금액이 결제금액을 초과한 경우
  - 위의 두 에러 타입이 제거되고 PlatformSettlementAmountExceededError 타입으로 통합되었습니다.

✔️ 이체 내역 조회 지원

- 이체 내역 다건 조회 기능이 추가되었습니다. 가상 계좌 내 충전, 파트너 정산 송금, 송금 이체 내역들을 조회할 수 있습니다.



##### [\[파트너정산 릴리즈노트\] 2024-08-22 업데이트 보러가기↗](https://developers.portone.io/release-notes/platform/2024-08-22)
