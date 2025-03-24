---
title: 페이팔(Express Checkout)
description: 페이팔(Express Checkout) 결제연동 방법을 안내합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="danger">

페이팔 Express checkout 방식으로 신규 가입 및 연동이 불가합니다.
페이팔 연동을 원하는 경우, [페이팔 일반 결제(Smart Payment Buttons) 연동 가이드](https://developers.portone.io/opi/ko/integration/pg/v1/spb/readme)
또는 [페이팔 정기 결제(Reference Transaciton) 연동 가이드](https://developers.portone.io/opi/ko/integration/pg/v1/rt/readme)를 참고하여 진행해주세요.

</div>

## 1. 페이팔 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
페이팔 결제창을 호출할 수 있습니다. **결제결과**는 **PC / 모바일** 모두
**`m_redirect_url`** 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 관리하는 주문 번호
    name: "주문명:결제테스트",
    amount: 14.2,
    currency: "USD", // 기본값: USD(원화 KRW는 페이팔 정책으로 인해 지원하지 않음)
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `paypal` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)

- merchant\_uid: string

  **`고객사 주문번호`**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- currency: string

  **결제통화코드**

  지원 가능한 모든 통화는 [페이팔 공식 문서](http://developer.paypal.com/docs/api/reference/currency-codes/#paypal-account-payments)를 참고해주세요

- m\_redirect\_url: string

  **결제결과 수신 URL**

  PC환경 모바일 환경 모두 해당 값을 필수로 설정해야 결과를 받아볼수 있습니다.

</div>

</div>

## 추가 기능 <a href="#additional-features" id="additional-features" />

Paypal에서는 고위험업종(게임, 디지털 콘텐츠) 고객사의 경우 판매자 보호 및 더 높은 수준의 위험관리를
위해 STC API(SetTransactionContext API)를 제공합니다.

고위험거래를 안전하게 요청하기 위해서는 거래를 증명할 추가적인 정보(STC API로 전달할 정보)가
필요하며, 아래 예제와 같이 `request_pay`에 파라미터를 추가하여 고위험거래를 요청할 수 있습니다.

```ts
IMP.request_pay({
  /* 요청 객체 */
  // Paypal 전용 파라미터로 결제요청 파라미터 문서에 존재하지 않습니다.
  optional: {
    use_stc_api: true,
    stc_data: {
      // Paypal과 협의한 STC(SetTransactionContext) 데이터를 넣어주세요.
      sender_account_id: "A12345N343",
    },
  },
});
```

고위험거래인 경우에만 해당 파라미터가 제공될 수 있도록 사용에 유의해주세요.

자세한 내용은 [Paypal Transaction Risk](http://developer.paypal.com/limited-release/raas/) 문서를 참고해주세요.

<div class="hint" data-style="info">

STC API를 사용하기 위해서는 **Paypal과의 STC 데이터 협의**가 필요하며,
**포트원 지원팀(<support@portone.io>)을 통해 요청**해주시면 협의 프로세스를 안내해드리고 있습니다.

연동을 원하시는 경우 원활한 연동절차를 위해 요청 전 **아래 pdf의 Create REST API Application 섹션을 완료**해주세요.

</div>

(파일 다운로드 링크)

<div class="hint" data-style="warning">

**참고사항**

포트원은 페이팔 정기결제를 지원하지 않습니다.

</div>
