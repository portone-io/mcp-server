---
title: 헥토파이낸셜 해외결제
description: 헥토파이낸셜 해외결제 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 가능한 결제 수단

- **결제창 일반 결제**

  `payMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드 : `CARD`
  - 간편 결제 : `EASY_PAY`

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 헥토파이낸셜 해외결제 채널 사용을 명시해주세요.

헥토파이낸셜 해외결제 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해 주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해 주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "PortOne Purchase",
    totalAmount: 100, // 1 USD
    currency: "USD",
    payMethod: "CARD",
    customer: {
      customerId: "customer-1234", // 고객사가 구매자에게 부여한 고유 ID
      firstName: "트원",
      lastName: "포",
      email: "test@portone.io",
    },
    storeDetails: {
      businessName: "포트원",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **상점 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.
  UTF-8 기준 최대 128Byte까지 허용합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

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

  헥토파이낸셜에서 발급받은 상점 아이디에 설정된 통화 코드를 입력합니다.

  - ISO 4217 통화 코드
  - [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - 신용카드 : `CARD`
  - 간편 결제 : `EASY_PAY`

- easyPay?: object

  **간편 결제 시 파라미터**

  - easyPayProvider: string

    **간편 결제 수단**

    - auPAY : `AUPAY`
    - PayPay : `PAYPAY`
    - 라쿠텐페이 : `RAKUTENPAY`
    - Merpay : `MERPAY`
    - 애플페이 : `APPLEPAY`
    - 구글페이 : `GOOGLE_PAY`

- customer: object

  **고객 정보**

  구매자 고유 ID는 필수 입력 항목입니다.

  - customerId: string

    **구매자 고유 ID**

    고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다.
    UTF-8 기준 최대 50Byte까지 허용합니다.

  - email?: string

    **구매자 이메일**

    UTF-8 기준 최대 60Byte까지 허용합니다.

  - firstName?: string

    **구매자 이름**

    구매자 이메일을 입력하는 경우 필수 항목입니다.
    UTF-8 기준 최대 32Byte까지 허용합니다.

  - lastName?: string

    **구매자 성**

    구매자 이메일을 입력하는 경우 필수 항목입니다.
    UTF-8 기준 최대 32Byte까지 허용합니다.

- storeDetails: object

  **상점 정보**

  - businessName: string

    **사업자명 (상호)**

    헥토파이낸셜에 상점명으로 전달됩니다.
    UTF-8 기준 최대 100Byte까지 허용합니다.

- merpayCategoryId?: string

  **Merpay 상품 카테고리 ID**

  Merpay 결제 시 필수 항목입니다.

  상품 카테고리 ID는 [GMO Payment Gateway 문서](https://docs.gmo-pg.com/mulpay/docs/payment-method/wallet/merpay/itemcategoryid)에서 `プロトコルタイプ・リンクタイプ Plus` 탭을 참고하시면 됩니다.

## 유의사항

- `currency` 파라미터에는 헥토파이낸셜에서 발급받은 상점 아이디에 설정된 통화 코드를 입력해야 합니다. 다른 통화 코드를 입력하면 의도하지 않은 금액으로 결제가 진행될 수 있습니다.
- 테스트 채널로 결제하기 위해서는 헥토파이낸셜 측 방화벽 설정이 필요합니다. 결제 테스트를 진행하는 회사 IP를 <tech.support@portone.io>로 전달해 주시면, 헥토파이낸셜 측에 IP 허용을 요청해 드립니다. 실연동 채널을 통한 결제는 이와 무관하게 정상적으로 이루어집니다.
- 테스트 채널에서는 애플페이 결제를 지원하지 않습니다.
