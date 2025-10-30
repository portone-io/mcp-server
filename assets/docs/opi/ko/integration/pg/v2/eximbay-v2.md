---
title: 엑심베이
description: 엑심베이 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.
- V2 결제 모듈을 사용하시려면 엑심베이 신모듈로 연동하셔야 합니다.

## 해외결제 차지백 웹훅 등록

- 해외결제 차지백 웹훅을 수신하기 위해서는 엑심베이에 웹훅 URL로 `https://tx-gateway-service.prod.iamport.co/eximbay-v2`를 등록해 주셔야 합니다.
- 웹훅 URL을 등록하신 후 받으신 웹훅 시크릿 키를 채널 정보에 입력해 주세요.

## 가능한 결제수단

엑심베이의 경우 포트원의 결제수단 구분과 상관없이 MID에 설정된 여러 결제수단을 표시할 수 있습니다.
`payMethod`를 생략하고, 특정 결제수단만을 노출할 경우 `bypass.eximbay_v2`를 사용해야 합니다.

- MID에 설정된 기본 결제수단을 전부 표시하려면 `bypass.eximbay_v2.payment`를 생략해야 합니다.
- 특정 결제수단을 단독으로 표시하려면 `bypass.eximbay_v2.payment.payment_method`를 설정합니다.
- 일부 결제수단만을 표시하려면 `bypass.eximbay_v2.payment.multi_payment_method`에 결제수단 목록을 전달합니다.
- 엑심베이의 결제수단 코드는 포트원 코드와 상이하므로, [EXIMBAY Docs](https://developer.eximbay.com/eximbay/api_sdk/code-organization.html#paymentCode)에서 확인 후 입력해야 합니다.

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다. `channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키를 지정하여 엑심베이 채널 사용을 명시해주세요.

엑심베이 기준으로 작성한 예제 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "PortOne Purchase",
    totalAmount: 100, // 1 USD
    currency: "USD",
    customer: {
      fullName: "PortOne",
      email: "test@example.com",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  - 고객사가 채번하는 주문 고유 번호입니다.
  - 이미 승인 완료 된 `paymentId`로 결제나 가상계좌 발급을 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  콘솔에서 채널 연동 시 생성된 채널 키입니다.

- totalAmount: number

  **결제 금액**

  결제 금액(실제 결제 금액 X 10^ 해당 currency의 scale factor, 예: $1.50 -> 150)

- currency: string

  **결제 통화 코드**

  - ISO 4217 통화 코드
  - [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)

- locale?: Locale

  **결제창 언어**

  - `KO_KR`: 한국어
  - `EN_US`: 영어
  - `JA_JP`: 일본어
  - `ZH_CN`: 중국어 (중국 본토)
  - `ZH_TW`: 중국어 (대만)
  - `TH_TH`: 타이어
  - `VI_VN`: 베트남어

- customer?: object

  **고객 정보**

  엑심베이의 경우 구매자 성명과 이메일은 필수 입력 항목입니다.

  - customerId?: string

    **구매자 고유 ID**

  - fullName?: string

    **구매자 전체 이름**

    `fullName`과 `firstName` / `lastName`이 모두 입력된 경우 `fullName`으로 기록됩니다.

  - firstName?: string

    **구매자 이름**

    `firstName`을 입력하는 경우 `lastName`도 필수로 입력해야 합니다. `fullName`이 없고,
    `firstName`과 `lastName`이 존재하는 경우 `{firstName} {lastName}`으로 저장됩니다.

  - lastName?: string

    **구매자 성**

    `lastName`을 입력하는 경우 `firstName`도 필수로 입력해야 합니다.

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일 주소**

    결제 완료 메일이 발송됩니다.

- products?: object\[]

  **구매 상품 정보**

  - 해외카드 결제를 제외하고 필수 입력입니다.
  - 해외카드의 경우에도 위험 거래 관리가 필요한 경우 요구될 수 있습니다.

  * id: string

    **상품 ID**

  * name: string

    **상품명**

  * amount: number

    **상품 단위 가격**

    결제 금액과 동일하게 scale factor가 적용된 값을 입력합니다.

  * quantity: number

    **상품 수량**

  * link: string

    **상품 판매 URL**

- bypass?: oneof object

  - eximbay\_v2?: object

    **엑심베이 특수 파라미터**

    - payment?: object

      - payment\_method?: string

        **결제수단 단독 노출**

        엑심베이의 결제수단 코드는 포트원 코드와 상이하므로, [EXIMBAY Docs](https://developer.eximbay.com/eximbay/api_sdk/code-organization.html#paymentCode)에서 확인 후 입력해야 합니다.

      - multi\_payment\_method?: string\[]

        **결제수단 노출 목록**

        여러 결제수단을 노출합니다.

    - merchant?: object

      - shop?: string

        **상점명**

      - partner\_code?: string

        **파트너 코드**

    - tax?: object

      - receipt\_status?: string

        **현금영수증 발급 여부**

        - `Y`: 발급
        - `N`: 미발급

        네이버페이 결제 시 필수 입력이며, 계좌이체 사용 시에는 반드시 `Y`로 입력해야 합니다.

    - surcharge?: object\[]

      **최대 3개의 추가 비용 목록**

      - name?: string

        **항목명**

      - quantity?: string

        **수량**

      - unit\_price?: string

        **단가 (음수 가능)**

    - ship\_to?: object

      - city?: string

        **배송지 도시**

      - country?: string

        **배송지 국가 (ISO 3166 두 자리 국가 코드)**

      - first\_name?: string

        **수신인의 성을 제외한 이름**

      - last\_name?: string

        **수신인의 성**

      - phone\_number?: string

        **수신인 전화번호**

      - postal\_code?: string

        **배송지 우편번호**

      - state?: string

        **배송지가 미국 혹은 캐나다인 경우, 배송지 주 정보**

      - street1?: string

        **배송지 상세 주소**

    - bill\_to?: object

      - city?: string

        **청구지 도시**

      - country?: string

        **청구지 국가 (ISO 3166 두 자리 국가 코드)**

      - first\_name?: string

        **청구 카드 명의자의 성을 제외한 이름**

      - last\_name?: string

        **청구 카드 명의자의 성**

      - phone\_number?: string

        **청구 카드 명의자의 전화번호**

      - postal\_code?: string

        **청구지 우편번호**

      - state?: string

        **청구지가 미국 혹은 캐나다인 경우, 청구지 주 정보**

      - street1?: string

        **청구지 상세 주소**

    - settings?: object

      - call\_from\_app?: string

        **모바일 앱 내에서 결제를 연동할 경우 설정**

        - `Y`: 모바일 앱 환경인 경우
        - `N`: 모바일 앱 환경이 아닌 경우

      - issuer\_country?: string

        **해외 결제 가맹점에서 국내 결제를 사용할 경우 `KR`**

      - virtualaccount\_expiry\_date?: string

        **입금 만료 일자 (yyyyMMddHH)**

## SDK 빌링키 발급 및 결제 요청하기

엑심베이의 경우 빌링키 발급과 동시에 최초 결제가 일어나며, `requestIssueBillingKeyAndPay` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키를 지정하여 엑심베이 채널 사용을 명시해주세요.

엑심베이 기준으로 작성한 예제 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 및 결제 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function issueBillingKeyAndPay() {
  PortOne.requestIssueBillingKeyAndPay({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "PortOne Recurring Payment",
    totalAmount: 100, // 1 USD
    currency: "USD",
    customer: {
      fullName: "PortOne",
      email: "test@example.com",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  - 고객사가 채번하는 주문 고유 번호입니다.
  - 이미 승인 완료 된 `paymentId`로 결제나 가상계좌 발급을 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  콘솔에서 채널 연동 시 생성된 채널 키입니다.

- totalAmount: number

  **결제 금액**

  결제 금액(실제 결제 금액 X 10^ 해당 currency의 scale factor, 예: $1.50 -> 150)

- currency: string

  **결제 통화 코드**

  - ISO 4217 통화 코드
  - [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)

- locale?: Locale

  **결제창 언어**

  - `KO_KR`: 한국어
  - `EN_US`: 영어
  - `JA_JP`: 일본어
  - `ZH_CN`: 중국어 (중국 본토)
  - `ZH_TW`: 중국어 (대만)
  - `TH_TH`: 타이어
  - `VI_VN`: 베트남어

- customer?: object

  **고객 정보**

  엑심베이의 경우 구매자 성명과 이메일은 필수 입력 항목입니다.

  - customerId?: string

    **구매자 고유 ID**

  - fullName?: string

    **구매자 전체 이름**

    `fullName`과 `firstName` / `lastName`이 모두 입력된 경우 `fullName`으로 기록됩니다.

  - firstName?: string

    **구매자 이름**

    `firstName`을 입력하는 경우 `lastName`도 필수로 입력해야 합니다. `fullName`이 없고,
    `firstName`과 `lastName`이 존재하는 경우 `{firstName} {lastName}`으로 저장됩니다.

  - lastName?: string

    **구매자 성**

    `lastName`을 입력하는 경우 `firstName`도 필수로 입력해야 합니다.

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일 주소**

    결제 완료 메일이 발송됩니다.

- products?: object\[]

  **구매 상품 정보**

  - 해외카드 결제를 제외하고 필수 입력입니다.
  - 해외카드의 경우에도 위험 거래 관리가 필요한 경우 요구될 수 있습니다.

  * id: string

    **상품 ID**

  * name: string

    **상품명**

  * amount: number

    **상품 단위 가격**

    결제 금액과 동일하게 scale factor가 적용된 값을 입력합니다.

  * quantity: number

    **상품 수량**

  * link: string

    **상품 판매 URL**

- bypass?: oneof object

  - eximbay\_v2?: object

    **엑심베이 특수 파라미터**

    - payment?: object

      - payment\_method?: string

        **결제수단 단독 노출**

        엑심베이의 결제수단 코드는 포트원 코드와 상이하므로, [EXIMBAY Docs](https://developer.eximbay.com/eximbay/api_sdk/code-organization.html#paymentCode)에서 확인 후 입력해야 합니다.

      - multi\_payment\_method?: string\[]

        **결제수단 노출 목록**

        여러 결제수단을 노출합니다.

    - merchant?: object

      - shop?: string

        **상점명**

    - surcharge?: object\[]

      **최대 3개의 추가 비용 목록**

      - name?: string

        **항목명**

      - quantity?: string

        **수량**

      - unit\_price?: string

        **단가 (음수 가능)**

    - ship\_to?: object

      - city?: string

        **배송지 도시**

      - country?: string

        **배송지 국가 (ISO 3166 두 자리 국가 코드)**

      - first\_name?: string

        **수신인의 성을 제외한 이름**

      - last\_name?: string

        **수신인의 성**

      - phone\_number?: string

        **수신인 전화번호**

      - postal\_code?: string

        **배송지 우편번호**

      - state?: string

        **배송지가 미국 혹은 캐나다인 경우, 배송지 주 정보**

      - street1?: string

        **배송지 상세 주소**

    - bill\_to?: object

      - city?: string

        **청구지 도시**

      - country?: string

        **청구지 국가 (ISO 3166 두 자리 국가 코드)**

      - first\_name?: string

        **청구 카드 명의자의 성을 제외한 이름**

      - last\_name?: string

        **청구 카드 명의자의 성**

      - phone\_number?: string

        **청구 카드 명의자의 전화번호**

      - postal\_code?: string

        **청구지 우편번호**

      - state?: string

        **청구지가 미국 혹은 캐나다인 경우, 청구지 주 정보**

      - street1?: string

        **청구지 상세 주소**

## API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제 요청 시 `POST /payments/{paymentId}/billing-key` API를 호출해야 합니다.

엑심베이 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 단건 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${paymentId}/billing-key`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    billingKey: "billing-key-1", // SDK 빌링키 발급 및 결제 시 발급받은 빌링키
    orderName: "PortOne Recurring Payment",
    customer: {
      name: {
        full: "PortOne",
      },
      email: "test@example.com",
    },
    amount: {
      total: 100, // 1 USD
    },
    currency: "USD",
    locale: "KO_KR",
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사가 채번하는 주문 고유 번호입니다.
  - 이미 승인 완료 된 `paymentId`로 결제나 가상계좌 발급을 시도하는 경우 에러가 발생합니다.
  - URL path에 포함하여 요청해야 합니다.

- billingKey: string

  **빌링키 결제에 사용할 빌링키**

- orderName: string

  **주문명**

- amount: object

  **결제 금액**

  `vat`와 `taxFree` 파라미터는 지원하지 않습니다.

  - total: number

    **총 결제 금액**

    결제 금액(실제 결제 금액 X 10^ 해당 currency의 scale factor, 예: $1.50 -> 150)

- currency: string

  **결제 통화**

  - [ISO 4217 통화 코드](https://en.wikipedia.org/wiki/ISO_4217)

- customer: object

  **고객 정보**

  엑심베이의 경우 고객 이름과 이메일은 필수 입력 항목입니다.

  - name: object

    **고객 이름**

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber?: string

    **구매자 연락처**

  - email: string

    **구매자 이메일**

- products?: object\[]

  **구매 상품 정보**

  - 해외카드 결제를 제외하고 필수 입력입니다.
  - 해외카드의 경우에도 위험 거래 관리가 필요한 경우 요구될 수 있습니다.

  * id: string

    **상품 ID**

  * name: string

    **상품명**

  * amount: number

    **상품 단위 가격**

    결제 금액과 동일하게 scale factor가 적용된 값을 입력합니다.

  * quantity: number

    **상품 수량**

  * link: string

    **상품 판매 URL**

- bypass?: oneof object

  - eximbayV2?: object

    **엑심베이 특수 파라미터**

    - merchant?: object

      - shop?: string

        **상점명**

    - surcharge?: object\[]

      **최대 3개의 추가 비용 목록**

      - name?: string

        **항목명**

      - quantity?: string

        **수량**

      - unitPrice?: string

        **단가 (음수 가능)**

    - shipTo?: object

      - city?: string

        **배송지 도시**

      - country?: string

        **배송지 국가 (ISO 3166 두 자리 국가 코드)**

      - firstName?: string

        **수신인의 성을 제외한 이름**

      - lastName?: string

        **수신인의 성**

      - phoneNumber?: string

        **수신인 전화번호**

      - postalCode?: string

        **배송지 우편번호**

      - state?: string

        **배송지가 미국 혹은 캐나다인 경우, 배송지 주 정보**

      - street1?: string

        **배송지 상세 주소**

    - billTo?: object

      - city?: string

        **청구지 도시**

      - country?: string

        **청구지 국가 (ISO 3166 두 자리 국가 코드)**

      - firstName?: string

        **청구 카드 명의자의 성을 제외한 이름**

      - lastName?: string

        **청구 카드 명의자의 성**

      - phoneNumber?: string

        **청구 카드 명의자의 전화번호**

      - postalCode?: string

        **청구지 우편번호**

      - state?: string

        **청구지가 미국 혹은 캐나다인 경우, 청구지 주 정보**

      - street1?: string

        **청구지 상세 주소**

## API 빌링키 예약/반복 결제 요청하기

예약 결제를 하기 위해서는 `POST /payments/{paymentId}/schedule` 를 이용하여 결제를 예약합니다.

엑심베이 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${paymentId}/schedule`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    payment: {
      billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
      orderName: "PortOne Recurring Payment",
      customer: {
        name: {
          full: "PortOne",
        },
        email: "test@example.com",
      },
      amount: {
        total: 100, // 1 USD
      },
      currency: "USD",
      locale: "KO_KR",
    },
    timeToPay: "2023-01-01T00:00:00+09:00", // 결제 예정 시점. RFC 3339 형식으로 입력해야 합니다.
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사가 채번하는 주문 고유 번호입니다.
  - 이미 승인 완료 된 `paymentId`로 결제나 가상계좌 발급을 시도하는 경우 에러가 발생합니다.
  - URL path에 포함하여 요청해야 합니다.

- payment: object

  **빌링키 결제 요청 입력정보**

  - billingKey: string

    **빌링키 결제에 사용할 빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **결제 금액**

    `vat`와 `taxFree` 파라미터는 지원하지 않습니다.

    - total: number

      **총 결제 금액**

      결제 금액(실제 결제 금액 X 10^ 해당 currency의 scale factor, 예: $1.50 -> 150)

  - currency: string

    **결제 통화**

    - [ISO 4217 통화 코드](https://en.wikipedia.org/wiki/ISO_4217)

  - customer: object

    **고객 정보**

    엑심베이의 경우 고객 이름과 이메일은 필수 입력 항목입니다.

    - name: object

      **고객 이름**

      - full?: string

        **한 줄 이름 형식 (ex. 김포트)**

      - separated?: object

        **분리된 이름**

        - first: string

          **이름**

        - last: string

          **성**

    - phoneNumber?: string

      **구매자 연락처**

    - email: string

      **구매자 이메일**

  - products?: object\[]

    **구매 상품 정보**

    - 해외카드 결제를 제외하고 필수 입력입니다.
    - 해외카드의 경우에도 위험 거래 관리가 필요한 경우 요구될 수 있습니다.

    * id: string

      **상품 ID**

    * name: string

      **상품명**

    * amount: number

      **상품 단위 가격**

      결제 금액과 동일하게 scale factor가 적용된 값을 입력합니다.

    * quantity: number

      **상품 수량**

    * link: string

      **상품 판매 URL**

  - bypass?: oneof object

    - eximbayV2?: object

      **엑심베이 특수 파라미터**

      - merchant?: object

        - shop?: string

          **상점명**

      - surcharge?: object\[]

        **최대 3개의 추가 비용 목록**

        - name?: string

          **항목명**

        - quantity?: string

          **수량**

        - unitPrice?: string

          **단가 (음수 가능)**

      - shipTo?: object

        - city?: string

          **배송지 도시**

        - country?: string

          **배송지 국가 (ISO 3166 두 자리 국가 코드)**

        - firstName?: string

          **수신인의 성을 제외한 이름**

        - lastName?: string

          **수신인의 성**

        - phoneNumber?: string

          **수신인 전화번호**

        - postalCode?: string

          **배송지 우편번호**

        - state?: string

          **배송지가 미국 혹은 캐나다인 경우, 배송지 주 정보**

        - street1?: string

          **배송지 상세 주소**

      - billTo?: object

        - city?: string

          **청구지 도시**

        - country?: string

          **청구지 국가 (ISO 3166 두 자리 국가 코드)**

        - firstName?: string

          **청구 카드 명의자의 성을 제외한 이름**

        - lastName?: string

          **청구 카드 명의자의 성**

        - phoneNumber?: string

          **청구 카드 명의자의 전화번호**

        - postalCode?: string

          **청구지 우편번호**

        - state?: string

          **청구지가 미국 혹은 캐나다인 경우, 청구지 주 정보**

        - street1?: string

          **청구지 상세 주소**

- timeToPay: string

  **결제 예정 시점**

## 유의사항

### 공통

- `customer.name` 및 `customer.email`은 필수 입력 항목입니다.
- 해외카드 결제를 제외하고 `products`를 필수로 입력해야 합니다. 해외카드의 경우에도 위험 거래 관리가 필요한 경우 요구될 수 있습니다.
- `products` 입력 시 `link`를 필수로 입력해야 합니다.

### SDK 결제 / 빌링키 발급 및 결제 요청

- 네이버페이 포인트로 결제할 경우에는 `bypass.eximbay_v2.tax` 내용을 모두 입력해야 합니다.

- 계좌이체 사용 시에는 현금영수증 발급을 위해 반드시 `bypass.eximbay_v2.tax.receipt_status`를 `Y`로 입력해야 합니다.

- `bypass.eximbay_v2.payment_method`에 일본 편의점 결제를 지정할 경우 `customer.phoneNumber`을 필수로 입력해야 합니다.

- 아래 결제수단의 경우 사용이 제한되므로 결제 연동 시 유의해 주시기 바랍니다.
  - 가상계좌(`P305`) : 호환성 이슈로 추후 지원 예정
  - Klarna(`P197`) : 엑심베이 정책에 따라 신규 결제 사용 불가

- 모바일 앱 내에서 결제를 연동할 경우 `appScheme` 파라미터를 설정하고 `bypass.eximbay_v2.settings.call_from_app` 파라미터를 "Y"로 설정해야 합니다.
