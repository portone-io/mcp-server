---
title: 카카오페이
description: 카카오페이 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/kakaopay
---

## 1. 카카오페이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
카카오페이 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)`
호출 후 **callback** 으로 수신 되며
모바일의 경우 **`m_redirect_url`** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="일반결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 생략가
    merchant_uid: "order_no_0001", // 상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
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

  `kakaopay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method?: string

  **결제수단 구분코드**

  생략가능

  (호출 시 선택된 값은 무시되며 카카오페이 앱에서 신용카드와 카카오머니 중 선택한 옵션으로 설정됩니다.)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

</div>

<div class="tabs-content" data-title="정기결제창 요청">

인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 정기결제창을 호출할 수 있습니다.

<div class="hint" data-style="warning">

**amount 금액**

카카오페이 간편결제는 빌링키 발급시 amount 파라미터에 금액이 설정되는 경우 **실 결제와 동시에 빌링키가 발급**됩니다.

실결제를 원하지 않은 경우 amount 금액을 **0원**으로 설정합니다.

</div>

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 0, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
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

  **`kakaopay`** 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid?: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: number

  **결제금액**

  결제창에 표시될 금액으로 0원 이상 설정시 실 결제가 발생됩니다.

  (실 결제를 원하지 않은 경우 amount 금액을 0원으로 설정합니다.)

**빌링키(customer\_uid)로 결제 요청하기**

빌링키 발급이 성공하면 실 빌링키는 customer\_uid 와 1:1 매칭되어 **포트원 서버에 저장**됩니다. customer\_uid를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출하시면 결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
    -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
    https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>

<div class="hint" data-style="info">

## 참고사항

- 카카오페이 결제버튼이 노출되는 것을 권장 합니다.
- 카카오페이 고객사 사이니지 이미지를 [다운받아](http://biz.kakaopay.com/online/guide) 활용할 수 있습니다.

(관련 이미지 첨부)

(관련 이미지 첨부)

</div>

<div class="hint" data-style="info">

**카카오페이 간편결제는 스마트폰 카카오 앱상에서 진행됩니다.**

</div>
