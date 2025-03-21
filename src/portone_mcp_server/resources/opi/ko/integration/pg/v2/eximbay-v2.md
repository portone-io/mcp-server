---
title: 엑심베이
description: 엑심베이 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.
- V2 결제 모듈을 사용하시려면 엑심베이 신모듈로 연동하셔야 합니다.

## 결제 창 호출

브라우저 SDK의 `PortOne.requestPayment` 함수를 사용해 결제창을 호출합니다.
엑심베이 연동만을 위한 파라미터는 [브라우저 SDK 파라미터 목록](https://developers.portone.io/sdk/ko/v2-sdk/payment-request?v=v2#bypass-oneof-object)의 `bypass.eximbay_v2` 항목을 참조해 주세요.

## 가능한 결제수단

엑심베이의 경우 포트원의 결제수단 구분과 상관없이 여러 결제수단을 표시할 수 있습니다.
따라서 항상 `payMethod`는 `CARD`로 설정하고, `bypass.eximbay_v2`를 사용해 결제수단을 설정해야 합니다.

- MID에 설정된 기본 결제수단을 전부 표시하려면 `bypass.eximbay_v2.payment`를 생략해야 합니다.
- 특정 결제수단을 단독으로 표시하려면 `bypass.eximbay_v2.payment.payment_method`를 설정합니다.
- 일부 결제수단만을 표시하려면 `bypass.eximbay_v2.payment.multi_payment_method`에 결제수단 목록을 전달합니다.
- 엑심베이의 결제수단 코드는 포트원 코드와 상이하므로, [EXIMBAY Docs](https://developer.eximbay.com/eximbay/api_sdk/code-organization.html#paymentCode)에서 확인 후 입력해야 합니다.

## 유의사항

- `products` 입력 시 `link`를 필수로 입력해야 합니다.

- 네이버페이 포인트로 결제할 경우에는 `bypass.eximbay_v2.tax` 내용을 모두 입력해야 합니다.

- 계좌이체 사용 시에는 현금영수증 발급을 위해 반드시 `bypass.eximbay_v2.tax.receipt_status`를 `Y`로 입력해야 합니다.

- `bypass.eximbay_v2.payment_method`에 일본 편의점 결제를 지정할 경우 `customer.phoneNumber`을 필수로 입력해야 합니다.

- 간편결제 사용 시 `products`를 필수로 입력해야 합니다.

- 아래 결제수단의 경우 사용이 제한되므로 결제 연동 시 유의해 주시기 바랍니다.
  - 가상계좌(`P305`) : 호환성 이슈로 추후 지원 예정
  - Klarna(`P197`) : 엑심베이 정책에 따라 신규 결제 사용 불가
