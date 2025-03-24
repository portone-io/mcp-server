---
title: 토스페이(tosspay_v2)
description: 토스페이 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/tosspay-v2
---

<div class="hint" data-style="info">

토스페이(tosspay\_v2)에서는 일반결제 및 정기결제 모두 지원하고 있습니다.
신규 연동하시는 고객사께서는 해당 가이드를 참고하여 진행해주세요.

</div>

## 1. 토스페이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 최신 JavaScript SDK로 업데이트하기 <a href="#2." id="2." />

토스페이 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**토스페이를 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다.**

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)문서를 통해 최신 SDK를 설치해주세요.

</div>

## 3.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback**으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증 결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "tosspay", // 'tosspay_card', 'tosspay_money' 도 지원됩니다.
    merchant_uid: "orderMonthly0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    amount: 1004,
    card: {
      useInstallment: false,
    },
    bypass: {
      expiredTime: "2023-12-02 11:00:00", //결제 만료시간
      cashReceiptTradeOption: "CULTURE", //현금영수증 발급타입
    },
  },
  function (rsp) {
    // callback 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `tosspay_v2` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - `tosspay_money` : 계좌결제만 허용합니다.
  - `tosspay_card` : 카드결제만 허용합니다.
  - `tosspay` : 모든 결제수단을 허용합니다.

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  string 이 아닌점에 유의하세요

- card.useInstallment: boolean

  **할부 사용 가능 여부**

- bypass?: object

  - expiredTime: string

    **결제 만료 기한**

    `yyyy-MM-dd HH:mm:ss` 의 형식입니다.

    입력하지 않을 경우, 기본값인 15분으로 설정됩니다. 최대 60분까지 설정할 수 있습니다.

  - cashReceiptTradeOption: string

    **현금영수증 발급 대상 타입**

    전달하지 않을경우, 기본값은 `GENERAL` 입니다.

    - `GENERAL`: 일반 (default)
    - `CULTURE`: 문화비
    - `PUBLIC_TP`: 교통비

</details>

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

인증결제창 호출 파라미터에서 **customer\_uid**, **customer\_id**값을 추가하면 비인증 결제창을 호출할 수 있습니다.
비인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "tosspay", // 'tosspay'만 지원됩니다.
    merchant_uid: "orderMonthly0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    customer_id: "matthew", //고객사가 회원에게 부여한 고유 ID로 필수 입력.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    notice_url: "{빌링키 발급 결과를 받을 URL}",
  },
  function (rsp) {
    // callback 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `tosspay_v2` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  `tosspay` 로 지정하면 됩니다.

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- customer\_uid: string

  **빌링키 발급을 위한 결제 수단을 특정하는 고유 번호**

  빌링키 발급시 필수 입력

- customer\_id: string

  **구매자 식별자**

  주의: (신) 토스페이 빌링키 발급시 필수 입력으로 입력 길이는 **50자**로 제한됩니다.

- m\_redirect\_url: string

  **리다이렉트 URL**

  리디렉션 방식으로 진행할 경우, 트랜잭션 종료 이후 302 리디렉션 될 고객사 URL

  (신) 토스페이의 경우 모바일 환경에서 **리디렉션 방식으로 빌링키 발급창이 렌더링 되기 때문에 필수입력입니다.**

- notice\_url?: string

  **빌링키 발급 완료 웹훅 전달 URL**

  빌링키 발급이 완료됐을 때 웹훅이 전달될 URL입니다. 해당 파라미터가 전달되지 않은 경우 콘솔에 등록한 웹훅 주소로 웹훅이 발송됩니다. **(신) 토스페이의 경우 SDK 콜백만으로 빌링키 발급여부를 체크하는 경우 정보 유실 가능성이 있기 때문에, 반드시 웹훅으로 빌링키 발급여부를 체크하길 권장합니다**.

</details>

</div>

<div class="tabs-content" data-title="비인증 결제 API">

**빌링키로 결제 요청하기**

빌링키 발급 시 전달한 `customer_uid`를 이용해서 재결제([**POST /subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)) REST API를 다음과 같이 호출합니다.

```ts
await fetch("https://api.iamport.kr/subscribe/payments/again", {
  method: "POST",
  headers: {
    Authorization: `Basic ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    customer_uid: "customer_uid", // [필수 입력] 빌링키 발급시 전달 한 빌링키와 1:1 매핑되는 ID
    merchant_uid: "merchant_uid", // [필수 입력] 주문 번호
    amount: 1000, // [필수 입력] 결제 금액
    name: "주문명", // 주문명
    cash_recipt_type: "person", // 현금영수증 발급 타입
    bypass: {
      tosspay_v2: {
        cashReceiptTradeType: "GENERAL", // 현금영수증 발급 대상 타입
        sendFailPush: false, // 결제 실패 시 토스페이앱 푸시알람 발송 여부
      },
    },
  }),
});
```

### (신) 토스페이 빌링키 결제 전용 파라미터

- bypass?: object

  - tosspay\_v2?: object

    - cashReceiptTradeOption?: string

      **현금영수증 발급 대상 타입**

      - `GENERAL`: 일반 (default)
      - `CULTURE`: 문화비
      - `PUBLIC_TP`: 교통비

    - tosspay\_v2.cashReceiptTradeOption?: boolean

      **결제실패 푸시알람 사용 여부**

      - `false`: 미사용 (default)
      - `true`: 사용

</div>

</div>
