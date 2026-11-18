---
title: 페이레터 해외결제
description: 페이레터 해외결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 페이레터 해외결제 채널 설정 내용을 참고하여 채널 설정을 진행합니다.

## 가능한 결제 수단

- **결제창 일반 결제**

  페이레터의 경우, `payMethod` 파라미터를 지원하고 있지 않아,
  계약된 모든 결제 수단이 페이레터 결제창에 노출됩니다.

  특정 결제 수단만 노출하고 싶으신 경우, 아래에 후술될 `bypass.payletter_global.pginfo` 파라미터를 사용하시면 됩니다.

- **일반 결제**
  - 특정 결제 수단만 결제창에 표기하고 싶으신 경우, `bypass.payletter_global.pginfo` 파라미터를 결제수단에 따라 아래와 같이 설정하시면 됩니다.
    - 해외카드 비인증 : `PLCreditCard`
    - 해외카드 인증(3DS) : `PLCreditCardMpi`
    - 유니온페이 : `PLUnionPay_HC`
    - 위챗페이 PC결제 : `WeChatPayQRCodePayment`
    - 위챗페이 모바일결제 : `WeChatPayH5Payment`
    - 알리페이 : `ICBAlipay`
    - 알리페이 HK (알리페이+) : `AlipayPlusAlipayHK`
    - BPI (알리페이+) : `AlipayPlusBPI`
    - Dana (알리페이+) : `AlipayPlusDana`
    - GCash (알리페이+) : `AlipayPlusGcash`
    - Rabbit LINE Pay (알리페이+) : `AlipayPlusRabbitLinePay`
    - Touch 'n Go (알리페이+) : `AlipayPlusTNG`
    - TrueMoney (알리페이+) : `AlipayPlusTrueMoney`
    - 애플페이 : `PLApplePay`

## SDK 결제 요청하기

결제 요청 시에는 [requestPayment](https://developers.portone.io/sdk/ko/v2-sdk/payment-request?v=v2) 함수를 호출해야 합니다.
`channelKey`파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 페이레터 해외결제 채널 사용을 명시해주세요.
페이레터 연동만을 위한 파라미터는 [requestPayment 요청 형식](https://developers.portone.io/sdk/ko/v2-sdk/payment-request?v=v2#bypass-oneof-object)의 `bypass.payletter_global` 항목을 참조해 주세요.

## 가능한 빌링키 발급 및 결제 수단

- **빌링키 발급 및 결제**

  페이레터의 경우, `billingKeyAndPayMethod` 파라미터를 지원하고 있지 않아,
  계약된 모든 빌링키 발급 및 결제 수단이 페이레터 결제창에 노출됩니다.
  특정 결제 수단만 노출하고 싶으신 경우, 아래에 후술될 `bypass.payletter_global.pginfo` 파라미터를 사용하시면 됩니다.

- **가능한 빌링키 발급 및 결제 수단**
  - 특정 빌링키 발급 및 결제 수단만 결제창에 표기하고 싶으신 경우, `bypass.payletter_global.pginfo` 파라미터를 결제 수단에 따라 아래와 같이 설정하시면 됩니다.

  - 빌링키 발급 및 결제의 경우, 위챗, 알리페이 등의 간편결제 수단으로 발급하는 것을 지원하지 않고 있어 아래의 결제 수단으로만 발급이 가능합니다.
    - 해외카드 비인증 : `PLCreditCard`
    - 해외카드 인증(3DS) : `PLCreditCardMpi`
    - 유니온페이 : `PLUnionPay_HC`

## SDK 빌링키 발급 및 결제 요청하기

빌링키 발급 및 결제 요청 시에는 [requestIssueBillingKeyAndPay](https://developers.portone.io/sdk/ko/v2-sdk/billing-key-and-pay-request?v=v2) 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 페이레터 해외결제 채널 사용을 명시해주세요.

## SDK 구독 등록 요청하기

[구독 결제](https://developers.portone.io/opi/ko/extra/subscription/intro)를 사용하는 경우 `requestSubscriptionRegistration` 함수로 결제수단 등록과 첫 회차 결제를 한 번에 처리할 수 있습니다.
페이레터 해외결제 채널은 결제창 한 번으로 빌링키 발급과 첫 회차 결제를 함께 처리합니다.
금액, 주문명, 구매자 정보는 사전 등록한 구독에서 가져오므로 전달하지 않습니다.

- 첫 회차 금액이 0원인 구독은 이 채널로 등록할 수 없습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 구독 등록 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestSubscriptionRegistration() {
  PortOne.requestSubscriptionRegistration({
    storeId: "store-00000000-0000-0000-0000-000000000000", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-00000000-0000-0000-0000-000000000000", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    subscriptionId: "subscription-0193c1a2", // 구독 사전 등록 API로 만든 구독 아이디를 입력해주세요.
    registrationSecret: "rsec_...", // 구독 사전 등록 API 응답의 registrationSecret을 입력해주세요.
    billingKeyMethod: "CARD",
  });
}
```

</div>

</div>

구독 사전 등록, 결과 확인, 파라미터 설명은 [구독 결제 연동하기](https://developers.portone.io/opi/ko/extra/subscription/integration)를 참고해주세요.

## 결제수단별 승인 가능 통화

- 카드: `KRW`, `USD`, `JPY`
- Alipay: `USD`, `CNY`
- Alipay+: `USD`
- WeChatPay: `KRW`, `USD`, `CNY`

## 유의사항

- `paymentId` 에는 영문, 숫자만으로 이루어진 문자열만 입력할 수 있습니다.
- 페이레터의 경우 구매자 이메일을 필수로 받고있어,`customer.email`을 필수로 입력하셔야 합니다.
- WeChatPay, Alipay, Alipay+ 결제 시 `bypass.payletter_global.servicename` 파라미터를 필수로 입력하셔야 합니다.
- 페이레터의 경우 결제창을 닫은 이후에 결제가 성공 처리될 수 있습니다. 웹훅을 연동하여 결제 실패 상태에서 결제 성공 상태로 바뀌는 경우를 처리해야 합니다.
