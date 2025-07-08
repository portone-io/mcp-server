---
title: 토스페이
description: 토스페이 간편결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/tosspay-v2/readme
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 가능한 결제 수단

- **결제창 일반 결제**

  `payMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 간편결제 : `EASY_PAY`

- **결제창 빌링키 발급**

  `billingKeyMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 간편결제 : `EASY_PAY`

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키를 지정하여 토스페이 채널 사용을 명시해주세요.

토스페이 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="SDK 결제 요청"
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${Math.random().toString(36).slice(2)}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    payMethod: "EASY_PAY",
  });
}
```

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- totalAmount: number

  **결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  간편 결제의 경우 `EASY_PAY`로 입력해야 합니다.

- bypass?: object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - tosspay\_v2?: object

    **토스페이에서 제공하는 파라미터**

    - expiredTime?: string

      **결제 만료 기한**

      `yyyy-MM-dd HH:mm:ss` 의 형식으로 입력해야 합니다.

      입력하지 않을 경우, 기본값인 15분으로 설정됩니다. 최대 60분까지 설정할 수 있습니다.

    - cashReceiptTradeOption?: string

      **현금영수증 발급 대상 타입**

      전달하지 않을경우, 기본값은 GENERAL 입니다.

      일반 (default) : `GENERAL` / 문화비 : `CULTURE` / 교통비 : `PUBLIC_TP`

### 유의사항

#### 공통

<details>

<summary>매출전표 지원 안내</summary>

카드결제인 경우에만 매출전표가 제공됩니다.

</details>

<details>

<summary>현금영수증 발급 안내</summary>

토스페이의 경우, 현금영수증 발급에 대한 정보를 따로 입력받지 않고 앱에 저장된 식별정보로 현금영수증이 발급됩니다.

이 때문에 현금영수증 타입을 personal, corporate로 지정하더라도 실제로는 다른 타입의 현금영수증이 발급될 수 있습니다.

</details>

## SDK 빌링키 발급 요청하기

빌링키 발급 요청 시에는 `requestIssueBillingKey` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키를 지정하여 토스페이 채널 사용을 명시해주세요.

토스페이 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="SDK 빌링키 발급 요청"
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyMethod: "EASY_PAY",
    issueId: "test-issueId",
    issueName: "test-issueName",
    customer: {
      customerId: "uniqueCustomerId",
    },
    redirectUrl: "http://localhost",
  });
}
```

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyMethod: string

  **빌링키 발급수단**

  토스페이는 빌링키 발급 수단으로 간편결제(토스페이)만을 지원하므로 해당 파라미터는 `EASY_PAY`로 고정해야 합니다.

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 고유 ID**

    - 토스페이의 경우 구매자 ID를 필수로 입력해야 합니다.

- redirectUrl: string

  **빌링키 발급 후 이동할 URL**

  모바일 환경의 경우, 필수 입력입니다.

### 유의사항

<details>

<summary>빌링키 발급 웹훅 연동 안내</summary>

토스페이 빌링키 발급시 빌링키 발급 웹훅을 반드시 연동하는 것이 좋습니다.

콘솔에서 웹훅 URL을 설정하거나, `requestIssueBillingKey` 함수 파라미터 중 noticeUrls를 입력하여 웹훅을 전달받을 수 있습니다.

만약 웹훅을 연동하지 않은 경우, 엔드유저가 빌링키 발급 도중 팝업이나 브라우저를 끄는 행위등으로 인해 고객사의 SDK 콜백 코드가 실행되지 않아 실제로 빌링키가 발급됐으나 발급정보가 누락될 수 있습니다.

[웹훅 연동 가이드 바로가기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)

</details>

<details>

<summary>빌링키 업데이트 웹훅 연동 안내</summary>

빌링키가 발급된후에 토스페이앱에서 엔드유저가 직접 빌링키에 연결된 결제수단을 변경할 수 있습니다.

콘솔에 웹훅 URL을 설정해 둔 경우라면 이 때 빌링키 업데이트 웹훅이 전송됩니다.

만약 빌링키에 연결된 결제수단을 서비스 내부적으로 사용하고 있다면, 빌링키 업데이트 웹훅을 연동하시거나 정보를 표시하기 전 포트원의 빌링키 정보 조회 API를 호출하여 데이터를 최신화하기를 권장합니다.

[웹훅 연동 가이드 바로가기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)

</details>

## API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제를 진행하려면 `POST /payments/${PAYMENT_ID_HERE}/billing-key` API를 이용하여 결제를 요청하실 수 있습니다.

토스페이 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="API 빌링키 단건 결제"
const response = await axios({
  url: `https://api.portone.io/payments/${encodeURIComponent(PAYMENT_ID_HERE)}/billing-key`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
    orderName: "월간 이용권 정기결제",
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      phoneNumber: `010-1234-5678`,
      email: `test@test.com`,
    },
    amount: {
      total: 50000,
      taxFree: 3000,
    },
    currency: "KRW",
  },
});
```

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- billingKey: string

  **빌링키 결제에 사용할 빌링키**

- orderName: string

  **주문명**

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- customer?: object

  **고객 정보**

  - name?: object

    **고객 이름**

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first?: string

        **이름**

      - last?: string

        **성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

## API 빌링키 예약/반복 결제 요청하기

예약 결제를 진행하려면 `POST /payments/${PAYMENT_ID_HERE}/schedule` API를 이용하여 결제를 예약하실 수 있습니다.

토스페이 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="API 예약/반복 결제"
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/schedule`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    payment: {
      billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
      orderName: "월간 이용권 정기결제",
      customer: {
        id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      },
      amount: {
        total: 10000,
        taxFree: 3000,
      },
      currency: "KRW",
    },
    timeToPay: "2023-01-01 00:00:00", // 결제를 시도할 시각이며 미래 시각만 가능합니다.
  },
});
```

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- payment: object

  **빌링키 결제 요청 입력정보**

  - billingKey: string

    **빌링키 결제에 사용할 빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **결제 금액**

    - total: number

      **총 결제 금액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

    - taxFree?: number

      **면세액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - currency: string

    **결제 통화**

    결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- timeToPay: string

  **결제 예정 시점**

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    - 토스페이의 경우 full 혹은 separated를 필수로 입력해야 합니다.

      - full?: string

        **한 줄 이름 형식 (ex. 김포트)**

      - separated?: object

        **분리된 이름**

        - first?: string

          **이름**

        - last?: string

          **성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**
