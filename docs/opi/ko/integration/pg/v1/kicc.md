---
title: 이지페이(KICC)
description: 이지페이(KICC) 결제창 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 이지페이(KICC) 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제">

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여 KICC 결제창을 호출할 수 있습니다.
**결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후 **callback**으로 수신되고
모바일의 경우 **m\_redirect\_url**로 리디렉션됩니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678", // 필수
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `kicc` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card(신용카드)
  - trans(실시간 계좌이체)
  - vbank(가상계좌)
  - phone(휴대폰소액결제)

- merchant\_uid: string

  **주문번호**

  고객사에서 매번 고유하게 채번되어야 합니다.

- buyer\_tel: string

  **`주문자 연락처`**

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- escrow?: boolean

  **에스크로 설정여부**

  계좌이체, 가상계좌만 지원됩니다.

</div>

<div class="tabs-content" data-title="비인증 결제(결제창)">

인증결제창 호출 파라미터에서 **`customer_uid`** 값을 추가하면 비 인증 결제창을 호출할 수 있습니다.
비 인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 'card'만 지원됩니다.
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 1004, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다.
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

<div class="hint" data-style="info">

- 비 인증 결제를 위해서는 **KICC와 협의가 완료된 MID 정보** 관리자콘솔에 설정하셔야 비인증 결제창을 활성화 시킬수 있습니다.
- KICC는 빌링키 발급시 **실 결제가 발생되지 않습니다**.(금액을 지정해도 결제가 발생되지 않음)

</div>

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  **`kicc.<KICC와 협의가 완료된 MID>`** 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: number

  **결제금액**

  결제창에 표시될 금액으로 실제 승인은 이루어지지 않습니다.

  (실 결제를 발생시키기 위해서는 **`customer_uid`** 로 **REST API 를 이용하여 결제요청**을 해 주셔야 합니다.)

### 빌링키(`customer_uid`)로 결제 요청하기

빌링키 발급이 성공하면 실 빌링키는 `customer_uid` 와 1:1 매칭되어 **포트원 서버에 저장**됩니다. `customer_uid`를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain) 를 호출하시면 결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":1004}' \
     https://api.iamport.kr/subscribe/payments/again
```

**포트원을 통한 KICC API 방식 비 인증 결제는 지원되지 않습니다.**

</div>

</div>

## 3. 부가기능

<div class="tabs-container">

<div class="tabs-content" data-title="에스크로 설정">

KICC는 **현금성 결제수단** (실시간 계좌이체, 가상계좌)에 한하여 에스크로 결제수단을 지원합니다.

> 에스크로 설정을 위해서는 아래 파라미터를 기본적으로 설정한 후 추가적인 파라미터를
>
> 입력해야 합니다.
>
> - **`escrow: true`**

**추가 파라미터 안내**

에스크로 결제 시 다음 파라미터를 반드시 설정해야 합니다.

- `buyer_name` : 구매자 이름

- `buyer_email` : 구매자 이메일

- `buyer_tel` : 구매자 전화번호

- `kiccProducts` : 상품별 부분배송을 위한 상품 관련 정보 (4개의 필수 속성으로 구성된 객체배열). 해당 `amount` 값은 결제 금액(`param.amount`) 값과 관계가 없으며 비교검증되지 않습니다.
  - `orderNumber` : 상품주문번호
  - `name` : 상품명
  - `quantity` : 수량
  - `amount` : 상품 가격

```json
{
  "escrow": true, // 에스크로 결제인 경우 필요
  "kiccProducts": [
    {
      "orderNumber": "xxxx",
      "name": "상품A",
      "quantity": 3,
      "amount": 1000
    },
    {
      "orderNumber": "yyyy",
      "name": "상품B",
      "quantity": 2,
      "amount": 3000
    }
  ]
}
```

</div>

<div class="tabs-content" data-title="카드사 모듈 바로 호출">

```json
{
  "card": {
    "direct": {
      "code": "367",
      "quota": 3
    }
  }
}
```

**파라미터 설명**

- **`code`** : 카드사 금융결제원 표준 코드. [**링크**](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조 (**string**)
- **`quota`** : 할부 개월 수. 일시불일 시 0 으로 지정. (**number**)

<div class="hint" data-style="danger">

**주의사항**

- 일부 PG사의 경우, 모든 상점아이디에 대하여 카드사 결제창 direct 노출 기능을 지원하지 않습니다. 반드시 포트원을 통해 현재 사용중인 상점아이디가 카드사 결제창 direct 호출이 가능하도록 설정이 되어있는지 PG사에 확인이 필요합니다.

</div>

</div>

<div class="tabs-content" data-title="특정 카드사 노출">

```json
{
  "card": {
    "detail": [
      { "card_code": "*", "enabled": false }, //모든 카드사 비활성화
      { "card_code": "366", "enabled": true } //특정 카드만 활성화
    ]
  }
}
```

**파라미터 설명**

- detail?: object\[]

  **카드사 렌더링 정보**

  - card\_code?: string

    **카드사 코드**

    [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code)를 참고하세요.

  - enabled?: boolean

    **렌더링 여부**

</div>

</div>
