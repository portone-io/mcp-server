---
title: 페이레터
description: 페이레터 국내결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 안내에 따라 페이레터 채널을 설정합니다.

<div class="hint" data-style="warning">

페이레터 국내결제는 **최신 JavaScript SDK**에서만 사용할 수 있습니다.

SDK 스크립트의 주소가 `https://cdn.iamport.kr/v1/iamport.js` 인지 확인해 주세요.

</div>

## 가능한 결제 수단

- 결제창 일반결제: 카드, 실시간 계좌이체, 가상계좌, 휴대폰 소액결제, 상품권(도서문화상품권, 스마트문상, 컬쳐랜드), 간편결제(카카오페이, 네이버페이, 토스페이, 페이코, 삼성페이)
- 결제창 빌링키 발급: 카드
- API 빌링키 결제: 결제창에서 발급한 빌링키를 사용한 일반 결제, 예약 결제
- 해외카드, 위챗페이, 알리페이 등 해외 결제수단은 [페이레터 해외결제](https://developers.portone.io/opi/ko/integration/pg/v1/payletter-global)를 참고해 주세요.

## 결제 승인 방식

페이레터는 별도의 승인 API가 없습니다. 결제창에서 인증과 승인이 함께 끝나고, 승인 결과는 페이레터가 포트원에 보내는 통보로 확정됩니다.
그래서 결제창이 닫힌 이후에 결제가 성공 처리될 수 있습니다.

- `IMP.request_pay`의 콜백 함수나 `m_redirect_url`로 전달되는 응답만으로 결제 성공을 판단하지 마세요.
- 응답으로 전달된 `imp_uid`로 [결제 내역 조회 API](https://developers.portone.io/api/rest-v1/payment#get%20%2Fpayments%2F%7Bimp_uid%7D)를 호출하여 결제 상태를 확인하고, [웹훅](https://developers.portone.io/opi/ko/integration/webhook/readme-v1)을 연동하여 결제 상태가 바뀌는 시점을 처리해야 합니다.

## 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여 페이레터 결제창을 호출할 수 있습니다.
**결제 결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후 **callback** 으로 수신되고,
모바일의 경우 **m\_redirect_url**로 리디렉션됩니다.

페이레터는 결제창을 열 때 결제수단을 하나 지정해야 하며, 결제수단을 고르는 화면은 따로 제공되지 않습니다.
`pay_method`를 입력하지 않으면 `card`로 처리됩니다.

### 지원 결제환경

- **PC** (popup)
- **모바일** (리디렉션)

<div class="tabs-container">

<div class="tabs-content" data-title="카드">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "orderNo0001", // 영문과 숫자만 사용할 수 있습니다.
    name: "주문명:결제테스트",
    amount: 1000,
    customer_id: "customer1234", // 필수 입력입니다.
    buyer_name: "홍길동",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    const { imp_uid, merchant_uid } = rsp;

    // 콜백 함수로 전달 받은 imp_uid로 포트원 결제 내역 조회 API를 통해 결제 상태를 판단합니다.
  },
);
```

</div>

<div class="tabs-content" data-title="가상계좌">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "vbank",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 1000,
    customer_id: "customer1234",
    buyer_name: "홍길동",
    vbank_due: "20261231", // 입금 기한
    bypass: {
      cashReceiptType: "personal", // 입력하면 결제창에 현금영수증 발급 창이 노출됩니다.
    },
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

<div class="tabs-content" data-title="간편결제">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "samsungpay",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 1000,
    customer_id: "customer1234",
    buyer_name: "홍길동",
    storeDetails: {
      storeName: "포트원 스토어", // 삼성페이, 토스페이는 필수 입력입니다.
    },
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

<div class="tabs-content" data-title="상품권">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "booknlife",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 10000,
    customer_id: "customer1234",
    buyer_name: "홍길동",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

</div>

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

- pay_method: string

  **결제수단 구분코드**

  결제에 사용할 수단을 지정합니다. 미입력 시 `card`로 처리됩니다.

  - `card` (카드)
  - `trans` (실시간 계좌이체)
  - `vbank` (가상계좌)
  - `phone` (휴대폰 소액결제)
  - `booknlife` (도서문화상품권)
  - `smartculture` (스마트문상)
  - `cultureland` (컬쳐랜드상품권)
  - `kakaopay` (카카오페이)
  - `naverpay` (네이버페이)
  - `tosspay` (토스페이)
  - `payco` (페이코)
  - `samsungpay` (삼성페이)

- merchant_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다. **영문 대소문자와 숫자만** 사용하여 **40자 이내**로 입력해 주세요.
  40자를 넘으면 결제 요청이 거절됩니다.

- name: string

  **주문명**

  40자 이내로 입력해야 합니다. 40자를 넘으면 포트원에는 40자까지만 저장됩니다. `<`, `>` 와 제어 문자는 사용할 수 없습니다.

- amount: number

  **결제금액**

  **string** 이 아닌 점에 유의하세요.

- tax_free?: number

  **면세 금액**

- vat_amount?: number

  **부가세 금액**

  미입력 시 면세 금액을 제외한 금액의 1/11로 자동 계산됩니다.

- customer_id: string

  **구매자 고유 ID**

  고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다. **필수 입력**이며 50자 이내로 입력해야 합니다.
  도서문화상품권으로 결제할 때는 **30자 이내**로 입력해야 합니다.

- buyer_name?: string

  **구매자 이름**

  16자 이내로 입력해 주세요. 16자를 넘으면 포트원에는 16자까지만 저장되고, 20자를 넘으면 결제 요청이 거절됩니다.

- vbank_due?: string

  **가상계좌 입금 기한**

  `YYYYMMDD` 또는 `YYYY-MM-DD` 형식으로 입력합니다. 날짜만 입력하면 해당 날짜의 23시 59분 59초까지로 설정되며,
  KST 기준으로 변환해 전달합니다.

- m_redirect_url?: string

  **모바일 결제 후 리디렉션 될 URL**

- notice_url?: string | string\[]

  **웹훅 수신 URL**

- app_scheme?: string

  **모바일 앱 스킴**

  모바일 앱 안에서 결제할 때, 외부 앱 인증을 마친 뒤 돌아올 앱의 스킴을 입력합니다.

- storeDetails?: object

  **상점 정보**

  - storeName?: string

    **상점명**

    페이레터에 결제 서비스명으로 전달됩니다. EUC-KR 기준 20바이트(한글 10자, 영문 20자) 이내로 입력해야 합니다.

    **삼성페이와 토스페이 결제 시 필수 입력**입니다.

- auth_mode?: string

  **인증 방식**

  - `key-in`: 키인 결제 모드로 결제창을 호출합니다. 카드사 선택 없이 결제창에서 카드번호를 직접 입력받으며, 카드 결제에서만 사용할 수 있습니다. 페이레터와 키인 결제 계약이 되어 있어야 합니다.

- useFreeInterestFromMall?: boolean

  **상점부담 무이자 활성화 여부**

  카드 결제에서 사용합니다. `true`로 입력하면 페이레터에 설정된 상점부담 무이자 할부개월이 결제창에 노출됩니다.
  페이레터와 상점부담 무이자 계약이 되어 있어야 합니다.

- bypass?: object

  **PG사 전용 파라미터**

  - cashReceiptType?: string

    **현금영수증 발급 유형**

    가상계좌, 실시간 계좌이체 결제에서 사용합니다. 입력하면 결제창에 현금영수증 발급 창이 노출됩니다.
    발급 유형과 식별 번호는 구매자가 결제창에서 직접 입력하므로, 이 값과 `customerIdentifier`는 페이레터로 전달되지 않습니다.

    - `personal` (개인 소득공제용)
    - `corporate` (사업자 지출증빙용)

### 결제수단별 유의사항

#### 카드

카드사 다이렉트 호출(`card.direct`), 할부 개월 수(`display.card_quota`), 카드 포인트 등 카드 옵션은 페이레터로 전달되지 않습니다.
카드사와 할부 개월 수는 구매자가 결제창에서 선택합니다.
키인 결제는 `auth_mode: "key-in"`으로 호출하면 결제창에서 카드번호를 직접 입력받습니다. 별도 계약과 수기 결제용 MID가 필요합니다.
ISP 계열 카드 결제는 카드사 정책에 따라 실물 카드번호와 다른 카드번호가 전달될 수 있어 카드 정보가 정확하지 않을 수 있습니다.

#### 가상계좌

- 채번된 계좌 정보는 결제창이 닫힌 뒤 전달되며, 입금이 완료되면 웹훅으로 다시 알려드립니다.
- **입금이 완료된 가상계좌 결제는 취소할 수 없습니다.** 부분 취소도 불가합니다. 입금 전에는 가상계좌 말소 API로 채번을 취소할 수 있습니다.
- 현금영수증 발급 창을 사용하려면 페이레터와 현금영수증 계약이 되어 있어야 합니다.
- 결제를 취소할 수 없어 결제창에서 발급한 현금영수증도 자동으로 취소되지 않습니다. 현금영수증은 직접 취소해야 합니다.

#### 휴대폰 소액결제

통신사 지정(`phone.carrier`)은 페이레터로 전달되지 않습니다. 구매자가 결제창에서 통신사를 선택합니다.

#### 상품권

- 도서문화상품권은 `customer_id`를 30자 이내로 입력해야 합니다.

#### 간편결제

- **삼성페이와 토스페이는 `storeDetails.storeName`을 반드시 입력해야 합니다.**
- 간편결제의 결제수단(카드·포인트 등) 선택은 구매자가 각 간편결제 결제창에서 합니다. 포트원 요청으로 결제수단을 지정할 수 없습니다.

## 빌링키 발급 요청하기

일반 결제창 호출 파라미터에 **`customer_uid`** 값을 추가하면 빌링키 발급 창을 호출할 수 있습니다.
페이레터는 **카드** 빌링키 발급만 지원합니다.

페이레터는 빌링키 발급 전용 API가 없어 결제 금액이 0원인 결제창으로 빌링키를 발급합니다.
발급 과정에서 실제 결제는 발생하지 않으며, 결제와 동시에 빌링키를 발급하는 방식은 지원하지 않습니다.

<div class="hint" data-style="info">

빌링키 발급은 페이레터와 자동결제 계약이 되어 있어야 사용할 수 있습니다.

</div>

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 페이레터는 'card'만 지원합니다.
    merchant_uid: "issue0001",
    name: "정기결제 카드 등록", // 빌링키 발급 창에 표시됩니다.
    customer_uid: "your-customer-unique-id", // 빌링키와 1:1로 매칭되는 고유 ID입니다. 필수 입력입니다.
    customer_id: "customer1234", // 필수 입력입니다.
    buyer_name: "홍길동",
    m_redirect_url: "{모바일에서 빌링키 발급 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    const { imp_uid, merchant_uid } = rsp;

    // 콜백 함수로 전달 받은 imp_uid로 포트원 결제 내역 조회 API를 통해 빌링키 발급 상태를 판단합니다.
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

- pay_method?: string

  **빌링키 발급 수단**

  `card`만 허용되며, 미입력 시 `card`로 처리됩니다.

- merchant_uid?: string

  **주문번호**

  빌링키 발급 건을 구분하는 번호입니다. 매번 고유하게 채번해 주세요.
  **40자 이내**로 입력해 주세요. 40자를 넘으면 발급 요청이 거절됩니다.

- customer_uid: string

  **빌링키**

  고객이 입력한 결제 정보와 1:1로 매칭될 빌링키를 지정합니다. **필수 입력**입니다.

- customer_id: string

  **구매자 고유 ID**

  **필수 입력**이며 50자 이내로 입력해야 합니다.

- name?: string

  **주문명**

  빌링키 발급 창에 표시됩니다. 40자 이내로 입력해야 합니다. 미입력 시 `빌링키 발급`으로 표시됩니다.

- amount?: number

  **결제금액**

  빌링키 발급 시에는 사용되지 않습니다. 금액을 입력해도 결제는 발생하지 않습니다.

- buyer_name?: string

  **구매자 이름**

  16자 이내로 입력해 주세요. 16자를 넘으면 포트원에는 16자까지만 저장되고, 20자를 넘으면 결제 요청이 거절됩니다.

- m_redirect_url?: string

  **모바일 빌링키 발급 후 리디렉션 될 URL**

## API 빌링키 결제 요청하기

발급된 빌링키(`customer_uid`)로 결제하려면 [비인증 결제(일회성) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)
`POST /subscribe/payments/again`을 호출합니다.
예약 결제는 [비인증 결제(예약) API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule)
`POST /subscribe/payments/schedule`을 이용합니다.

빌링키 결제는 결제창 없이 즉시 승인되며, 응답으로 결제 결과가 확정됩니다.

- `merchant_uid`는 **영문 대소문자와 숫자만** 사용하여 40자 이내로 입력해야 합니다. 40자를 넘으면 결제 요청이 거절됩니다.
- `name`은 40자 이내로 입력해야 합니다. 40자를 넘으면 포트원에는 40자까지만 저장됩니다.
- `buyer_name`은 16자 이내로 입력해 주세요. 16자를 넘으면 포트원에는 16자까지만 저장되고, 20자를 넘으면 결제 요청이 거절됩니다.

## API 지원 기능

- 카드 빌링키 결제, 예약 결제
- 빌링키 삭제
- 결제 취소: 전액 취소와 부분 취소를 모두 지원합니다. **입금이 완료된 가상계좌 결제는 취소할 수 없습니다.** 입금 전 채번 취소는 가상계좌 말소 API를 이용해 주세요.

다음 기능은 페이레터 국내결제에서 사용할 수 없습니다.

- 에스크로
- 현금영수증 발급, 취소 API

<div class="hint" data-style="info">

페이레터 해외결제를 연동하시려면 [페이레터 해외결제](https://developers.portone.io/opi/ko/integration/pg/v1/payletter-global) 문서를 참고해 주세요.

</div>
