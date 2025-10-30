---
title: 페이레터 해외결제
description: 페이레터 해외결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 페이레터 해외결제 채널 설정 내용을 참고하여 채널 설정을 진행합니다.

## 가능한 결제 수단

- **결제창 일반 결제**

  페이레터의 경우, `pay_method` 파라미터를 지원하고 있지 않아,
  계약된 모든 결제 수단이 페이레터 결제창에 노출됩니다.

  특정 결제 수단만 노출하고 싶으신 경우, 아래에 후술될 `bypass.payletter_global.pginfo` 파라미터를 사용하시면 됩니다.

- **일반 결제**
  - 특정 결제 수단만 결제창에 표기하고 싶으신 경우, `bypass.payletter_global.pginfo` 파라미터를 결제수단에 따라 아래와 같이 설정하시면 됩니다.
    - 해외카드 비인증 : `PLCreditCard`
    - 해외카드 인증(3DS) : `PLCreditCardMpi`
    - 유니온페이 : `PLUnionPay_HC`
    - 위챗페이 PC결제: `WeChatPayQRCodePayment`
    - 위챗페이 모바일결제 : `WeChatPayH5Payment`
    - 알리페이 : `ICBAlipay`

## SDK 결제 요청하기

결제 요청 시에는 [JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출해야 합니다.

## 가능한 빌링키 발급 및 결제 수단

- **빌링키 발급 및 결제**

  페이레터의 경우, `pay_method` 파라미터를 지원하고 있지 않아,
  계약된 모든 빌링키 발급 및 결제 수단이 페이레터 결제창에 노출됩니다.
  특정 결제 수단만 노출하고 싶으신 경우, 아래에 후술될 `bypass.payletter_global.pginfo` 파라미터를 사용하시면 됩니다.

- **가능한 빌링키 발급 및 결제 수단**
  - 특정 빌링키 발급 및 결제 수단만 결제창에 표기하고 싶으신 경우, `bypass.payletter_global.pginfo` 파라미터를 결제 수단에 따라 아래와 같이 설정하시면 됩니다.

  - 빌링키 발급 및 결제의 경우, 위챗, 알리페이 등의 간편결제 수단으로 발급하는 것을 지원하지 않고 있어 아래의 결제 수단으로만 발급이 가능합니다.
    - 해외카드 비인증 : `PLCreditCard`
    - 해외카드 인증(3DS) : `PLCreditCardMpi`
    - 유니온페이 : `PLUnionPay_HC`

## SDK 빌링키 발급 및 결제 요청하기

빌링키 발급 및 결제 요청 시에는 `customer_uid` 파라미터를 포함하여 [JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출해야 합니다.

<div class="hint" data-style="warning">

페이레터 해외결제는 **SDK 1.3.0 부터 사용 가능**합니다.

SDK 스크립트의 주소가 `https://cdn.iamport.kr/v1/iamport.js` 인지 확인해주세요.

위 JS SDK 를 이용하여 페이팔 정기결제 연동시 callback Data는 아래와 같이 두가지 형태로만 내려갑니다.

- `imp_uid`
- `merchant_uid`

해당 SDK를 사용하실때는 IMP.request\_pay로부터 응답된 객체(또는 쿼리 파라미터)에서 imp\_uid를 가지고
**포트원 REST API(GET /payments/imp\_uid)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여
응답 파라미터 중 status(결제 상태) 파라미터에 따라 추가 로직을 구현해야 합니다.

</div>

### 비동기 결제

<div class="hint" data-style="warning">

페이레터 일반결제, 빌링키 발급 및 결제는 승인 요청 시 바로 승인되지 않고 일정 시간 후 처리되는 **승인 대기(pending) 상태**가 존재합니다. 따라서 고객사는 트랜잭션 종료시 콜백 함수로 전달되는 포트원 번호(imp\_uid)로 결제 내역을 조회(GET /payments/{imp\_uid})한 후 응답되는 status를 보고 각 상황에 맞는 후 처리 로직을 작성해야 합니다.

승인 대기 상태에서는 고객사는 반드시 (가상계좌나 정기결제와 같이 결제가 비동기로 승인되는 경우 포트원 → 고객사로 결제 결과를 통보해주는) 웹훅 기능을 연동해야 합니다.

</div>

## 유의사항

- `merchant_uid` 에는 영문, 숫자만으로 이루어진 문자열만 입력할 수 있습니다.
- 페이레터의 경우 구매자 이메일을 필수로 받고있어,`buyer_email`을 필수로 입력하셔야 합니다.
- 해외결제시 카드는 `KRW`, `USD`, `JPY`, 알리페이⋅위챗페이는 `CNY`를 지원합니다.
- WeChatPay, Alipay 결제 시 `bypass.payletter_global.servicename` 파라미터를 필수로 입력하셔야 합니다.
