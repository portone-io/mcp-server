---
title: Triple-A
description: Triple-A 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다. `channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키를 지정하여 Triple-A 채널 사용을 명시해주세요.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
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
```

</div>

</div>

### 사용 가능 파라미터

- storeId: string

  **상점 아이디**

- paymentId: string

  **고객사 주문 고유 번호**

  - 고객사가 채번하는 주문 고유 번호입니다.
  - 이미 승인된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  Triple-A로 전달되지 않으며 포트원 결제 내역 확인 시에만 사용됩니다.

- channelKey: string

  **채널 키**

  Triple-A 채널의 채널키를 입력합니다.

- totalAmount: number

  **결제 금액**

  결제 금액을 정수로 나타냅니다.

  해외 통화의 경우 통화의 최소 단위(minor unit)를 기준으로 합니다. 예를 들어, USD의 최소 단위는 센트(0.01 USD)이므로, 6 USD의 경우 100배하여 600으로 입력합니다.

  최소 단위는 [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)에 표준화된 것을 기준으로 합니다.

  - KRW: 1배
  - USD: 100배
  - JPY: 1배

- currency: string

  **결제 통화 코드**

  - ISO 4217 통화 코드
  - [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)

- locale?: Locale

  **결제창 언어**

  - `EN_US`: 영어
  - `ZH_CN`: 중국어 (중국 본토)
  - `JA_JP`: 일본어
  - `RU_RU`: 러시아어
  - `VI_VN`: 베트남어
  - `ID_ID`: 인도네시아어
  - `FR_FR`: 프랑스어
  - `NL_NL`: 네덜란드어
  - `ES_ES`: 스페인어
  - `PT_PT`: 포르투갈어
  - `DE_DE`: 독일어
  - `IT_IT`: 이탈리아어
  - `PL_PL`: 폴란드어
  - `AR_001`: 현대 표준 아랍어

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 ID**

    구매자를 식별하는 고유한 값으로, 값이 없으면 포트원에서 자동으로 생성합니다.

  - fullName?: string

    **구매자 전체 이름**

    `fullName`이 없고 `firstName`과 `lastName`이 있는 경우 `${lastName} ${firstName}`이 대신 사용됩니다.

  - firstName?: string

    **구매자 이름**

    `firstName`을 입력하는 경우 `lastName`도 필수로 입력해야 합니다. `fullName`이 없고,
    `firstName`과 `lastName`이 존재하는 경우 `{firstName} {lastName}`으로 저장됩니다.

  - lastName?: string

    **구매자 성**

    `lastName`을 입력하는 경우 `firstName`도 필수로 입력해야 합니다.

  - phoneNumber?: string

    **구매자 휴대전화 번호**

    `+6591234567`과 같이 `+(국가코드)`로 시작하는 [E.164](https://www.itu.int/rec/T-REC-E.164/) 형식의 전화번호를 입력합니다.

  - email?: string

    **구매자 이메일 주소**

- products?: object\[]

  **구매 상품 정보**

  입력 시 결제창에 상품 정보가 표시됩니다.

  - id: string

    **상품 ID**

  - name: string

    **상품명**

  - amount: number

    **상품 단위 가격**

    상품의 단위당 가격을 정수로 나타냅니다.

    해외 통화의 경우 통화의 최소 단위(minor unit)를 기준으로 합니다. 예를 들어, USD의 최소 단위는 센트(0.01 USD)이므로, 6 USD의 경우 100배하여 600으로 입력합니다.

    최소 단위는 [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)에 표준화된 것을 기준으로 합니다.

    - KRW: 1배
    - USD: 100배
    - JPY: 1배

  - quantity: number

    **상품 수량**

- bypass?: oneof object

  - triple\_a?: object

    **Triple-A 특수 파라미터**

    - payer\_poi?: string

      **결제자 신원 증명 정보**

      신분증, 여권 등 결제자의 신원을 증명할 수 있는 자료의 URL을 입력합니다.

      SGD 1500 이상의 결제 등 결제자 신원 조회가 필요한 경우에, `payer_poi`를 입력하면 별도의 신원 요청 과정을 거치지 않고 결제가 진행됩니다.

    - shipping\_cost?: number

      **배송비**

      결제창에 표시할 배송비를 정수로 나타냅니다.
      `products`가 지정된 경우에만 사용할 수 있습니다.

      해외 통화의 경우 통화의 최소 단위(minor unit)를 기준으로 합니다. 예를 들어, USD의 최소 단위는 센트(0.01 USD)이므로, 6 USD의 경우 100배하여 600으로 입력합니다.

      최소 단위는 [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)에 표준화된 것을 기준으로 합니다.

      - KRW: 1배
      - USD: 100배
      - JPY: 1배

    - shipping\_discount?: number

      **배송비 할인 금액**

      결제창에 표시할 배송비 할인 금액을 정수로 나타냅니다.
      `products`가 지정된 경우에만 사용할 수 있습니다.

    - tax\_cost?: number

      **세금**

      결제창에 표시할 세금을 정수로 나타냅니다.
      `products`가 지정된 경우에만 사용할 수 있습니다.

## API 결제 취소 요청하기

암호화폐 결제의 경우 결제 취소를 위해서는 환불받을 지갑 주소를 입력받아야 합니다.

API로 취소 요청 시, 구매자의 이메일 주소를 전달하면 해당 메일을 통해 지갑 주소 입력 및 환불 절차가 진행됩니다.

결제 취소 요청을 구매자가 확인하고 지갑 주소를 입력하는 시점에 환불 금액이 확정됩니다.
환불 금액은 결제 요청 금액을 환불 시점에 암호화폐로 환산한 금액입니다.
환불 금액이 확정된 이후 입력한 지갑 주소로 환불이 진행됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 결제 취소">

```ts
const response = await fetch(
  `https://api.portone.io/payments/${paymentId}/cancel`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      reason: "단순 변심 전체 취소",
      refundEmail: "buyer@example.com",
    }),
  },
);

const {
  cancellation: { id },
} = await response.json(); // id: 취소 요청 아이디
```

</div>

</div>

### 사용 가능 파라미터

- paymentId: string

  **고객사 주문 고유 번호**

  - 결제 요청 시에 사용한 `paymentId`를 입력합니다.

- storeId?: string

  **상점 아이디**

  하위 상점의 결제를 취소할 경우 필수로 입력합니다.

- amount?: number

  취소 총 금액

  값을 입력하지 않으면 전액 취소됩니다.

- currentCancellableAmount?: number

  **결제 건의 취소 가능 잔액**

  본 취소 요청 이전의 취소 가능 잔액으로써, 값을 입력하면 잔액이 일치하는 경우에만 취소가 진행됩니다.
  값을 입력하지 않으면 별도의 검증 처리를 수행하지 않습니다.

- refundEmail: string

  **환불 이메일**

  Triple-A 결제 환불에 필요합니다. 해당 이메일로 환불 안내가 발송됩니다.

- reason: string

  **취소 사유**

- skipWebhook?: boolean

  **웹훅 생략 여부**

  취소가 성공했을 때 웹훅을 전송하지 않으려면 `true`로 설정합니다.

## API 결제 취소 요청 취소

결제 취소를 요청했을 때, 구매자가 아직 지갑 주소를 입력하지 않았다면 취소 요청을 취소할 수 있습니다.

결제 취소 요청 결과로 획득한 `cancellation.id` 값을 사용하여 요청합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 결제 취소 요청 취소">

```ts
const response = await fetch(
  `https://api.portone.io/payments/${paymentId}/cancellations/${cancellationId}/stop`,
  {
    method: "POST",
    headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  },
);
```

</div>

</div>

### 사용 가능 파라미터

- paymentId: string

  **고객사 주문 고유 번호**

  - 결제 요청 시에 사용한 `paymentId`를 입력합니다.

- cancellationId: string

  **취소 요청 아이디**

- storeId?: string

  **상점 아이디**

  하위 상점의 취소 요청인 경우 필수로 입력합니다.
