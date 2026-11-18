---
title: 페이레터
description: 페이레터 국내결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 안내에 따라 페이레터 채널을 설정합니다.

## 가능한 결제수단

- 결제창 일반결제: 카드, 실시간 계좌이체, 가상계좌, 휴대폰 소액결제, 상품권(도서문화상품권, 스마트문상, 컬쳐랜드), 간편결제(카카오페이, 네이버페이, 토스페이, 페이코, 삼성페이)
- 결제창 빌링키 발급: 카드
- API 빌링키 결제: 결제창에서 발급한 빌링키를 사용한 일반 결제, 예약 결제, 반복 결제
- 해외카드, 위챗페이, 알리페이 등 해외 결제수단은 [페이레터 해외결제](https://developers.portone.io/opi/ko/integration/pg/v2/payletter-global)를 참고해 주세요.

## 결제 승인 방식

페이레터는 별도의 승인 API가 없습니다. 결제창에서 인증과 승인이 함께 끝나고, 승인 결과는 페이레터가 포트원에 보내는 통보로 확정됩니다.
그래서 결제창이 닫힌 이후에 결제가 성공 처리될 수 있습니다.

- SDK 응답만으로 결제 성공을 판단하지 마세요. 반드시 [웹훅](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)을 연동하여 결제 상태가 바뀌는 시점을 처리해야 합니다.
- 결제 상태는 [결제 조회 API](https://developers.portone.io/api/rest-v2/payment#get%20%2Fpayments%2F%7BpaymentId%7D)로도 확인할 수 있습니다.

## SDK 결제 요청하기

결제하려면 `requestPayment` 함수를 호출합니다.
`channelKey`에는 콘솔에서 채널을 연동할 때 생성된 페이레터 채널 키를 입력해 주세요.

페이레터는 결제창을 열 때 결제수단을 하나 지정해야 하므로 `payMethod`를 반드시 입력해야 합니다.
결제수단을 고르는 화면은 따로 제공되지 않습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="카드">

```ts
import * as PortOne from "@portone/browser-sdk/v2";

function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해 주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔의 결제 연동 화면에서 채널을 연동할 때 생성된 채널 키를 입력해 주세요.
    paymentId: `payment${crypto.randomUUID().replaceAll("-", "")}`, // 영문과 숫자만 사용할 수 있습니다.
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "KRW",
    payMethod: "CARD",
    customer: {
      customerId: "customer1234", // 필수 입력입니다.
      fullName: "홍길동",
    },
  });
}
```

</div>

<div class="tabs-content" data-title="가상계좌">

```ts
import * as PortOne from "@portone/browser-sdk/v2";

function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d",
    paymentId: `payment${crypto.randomUUID().replaceAll("-", "")}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "KRW",
    payMethod: "VIRTUAL_ACCOUNT",
    customer: {
      customerId: "customer1234",
      fullName: "홍길동",
    },
    virtualAccount: {
      accountExpiry: {
        validHours: 24,
      },
      cashReceiptType: "PERSONAL", // 입력하면 결제창에 현금영수증 발급 창이 노출됩니다.
    },
  });
}
```

</div>

<div class="tabs-content" data-title="간편결제">

```ts
import * as PortOne from "@portone/browser-sdk/v2";

function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d",
    paymentId: `payment${crypto.randomUUID().replaceAll("-", "")}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "KRW",
    payMethod: "EASY_PAY",
    customer: {
      customerId: "customer1234",
      fullName: "홍길동",
    },
    easyPay: {
      easyPayProvider: "SAMSUNGPAY",
    },
    storeDetails: {
      storeName: "포트원 스토어", // 삼성페이, 토스페이는 필수 입력입니다.
    },
  });
}
```

</div>

<div class="tabs-content" data-title="상품권">

```ts
import * as PortOne from "@portone/browser-sdk/v2";

function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d",
    paymentId: `payment${crypto.randomUUID().replaceAll("-", "")}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 10000,
    currency: "KRW",
    payMethod: "GIFT_CERTIFICATE",
    customer: {
      customerId: "customer1234",
      fullName: "홍길동",
    },
    giftCertificate: {
      giftCertificateType: "BOOKNLIFE",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **상점 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유 값입니다. 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  콘솔에서 채널을 연동할 때 생성된 키로 결제에 사용할 채널을 지정합니다.

- paymentId: string

  **고객사 주문 고유 번호**

  결제 건마다 고유하게 생성해야 합니다. **영문 대소문자와 숫자만** 사용하여 **50자 이내**로 입력해 주세요.

- orderName: string

  **주문명**

  100자 이내로 입력해야 합니다. `<`, `>` 와 제어 문자는 사용할 수 없습니다.

- totalAmount: number

  **결제 금액**

  결제 통화(`currency`)의 scale factor를 반영한 정수로 입력합니다.

- currency: string

  **결제 통화**

  국내 결제는 원화만 지원하므로 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단**

  결제에 사용할 수단을 반드시 지정해야 합니다.

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 상품권: `GIFT_CERTIFICATE`
  - 간편결제: `EASY_PAY`

- customer: object

  **고객 정보**

  - customerId: string

    **구매자 고유 ID**

    **필수 입력**이며 50자 이내로 입력해야 합니다. 도서문화상품권으로 결제할 때는 **30자 이내**로 입력해야 합니다.

  - fullName?: string

    **구매자 이름**

    20자 이내로 입력해야 합니다.

- taxFreeAmount?: number

  **면세 금액**

- vatAmount?: number

  **부가세 금액**

  미입력 시 면세 금액을 제외한 금액의 1/11로 자동 계산됩니다.

- storeDetails?: object

  **상점 정보**

  - storeName?: string

    **상점명**

    페이레터에 결제 서비스명으로 전달됩니다. EUC-KR 기준 20바이트(한글 10자, 영문 20자) 이내로 입력해야 합니다.

    **삼성페이와 토스페이 결제 시 필수 입력**입니다.

- card?: object

  **카드 결제 설정**

  - useFreeInterestFromMall?: boolean

    **상점부담 무이자 활성화 여부**

    `true`로 입력하면 페이레터에 설정된 상점부담 무이자 할부개월이 결제창에 노출됩니다.
    페이레터와 상점부담 무이자 계약이 되어 있어야 합니다.

- easyPay?: object

  **간편결제 설정**

  - easyPayProvider: string

    **간편결제사**

    간편결제 시 필수이며, 지정한 간편결제사의 결제창을 엽니다.

    - 카카오페이: `KAKAOPAY`
    - 네이버페이: `NAVERPAY`
    - 토스페이: `TOSSPAY`
    - 페이코: `PAYCO`
    - 삼성페이: `SAMSUNGPAY`

- giftCertificate?: object

  **상품권 설정**

  - giftCertificateType: string

    **상품권 종류**

    상품권 결제 시 필수입니다.

    - 도서문화상품권: `BOOKNLIFE`
    - 스마트문상: `SMART_MUNSANG`
    - 컬쳐랜드상품권: `CULTURELAND`

- virtualAccount?: object

  **가상계좌 결제 설정**

  - accountExpiry?: object

    **입금 기한**

    `validHours`와 `dueDate` 중 하나만 입력합니다. 입력한 값을 KST 기준 날짜와 시각으로 변환해 전달합니다.

    - validHours?: number

      **유효 시간**

      예를 들어 `3`을 입력하면 지금부터 3시간 후가 입금 기한으로 지정됩니다.

    - dueDate?: string

      **만료 시각**

      RFC 3339의 date-time 형식으로 입력해야 합니다.

  - cashReceiptType?: string

    **현금영수증 발급 유형**

    입력하면 결제창에 현금영수증 발급 창이 노출됩니다. 발급 유형과 식별 번호는 구매자가 결제창에서 직접 입력하므로,
    이 값과 `customerIdentifier`는 페이레터로 전달되지 않습니다.

- transfer?: object

  **실시간 계좌이체 설정**

  - cashReceiptType?: string

    **현금영수증 발급 유형**

    가상계좌의 `cashReceiptType`과 같이 현금영수증 발급 창의 노출 여부만 결정합니다.

- appScheme?: string

  **모바일 앱 스킴**

  모바일 앱 안에서 결제할 때, 외부 앱 인증을 마친 뒤 돌아올 앱의 스킴을 입력합니다.

- bypass?: object

  **PG사 전용 파라미터**

  - payletter?: object

    - keyin_flag?: string

      **결제창 키인 결제 여부**

      `Y`로 설정하면 카드사 선택 없이 결제창에서 카드번호를 직접 입력받는 키인 결제창을 엽니다.
      카드 결제(`payMethod: CARD`)에서만 사용할 수 있으며, 페이레터와 키인 결제 계약이 되어 있어야 합니다.

### 결제수단별 유의사항

#### 카드

카드사 지정(`card.cardCompany`), 할부(`card.installment`), 카드 포인트(`card.useCardPoint`) 등 카드 옵션은 페이레터로 전달되지 않습니다.
카드사와 할부 개월 수는 구매자가 결제창에서 선택합니다.
키인 결제는 `bypass.payletter.keyin_flag`를 `Y`로 보내면 결제창에서 카드번호를 직접 입력받습니다. 별도 계약과 수기 결제용 MID가 필요합니다.
ISP 계열 카드 결제는 카드사 정책에 따라 실물 카드번호와 다른 카드번호가 전달될 수 있어 카드 정보가 정확하지 않을 수 있습니다.
페이레터는 무이자 할부 적용 여부를 전달하지 않아 결제 건의 `installment.isInterestFree`는 무이자 할부로 결제되어도 항상 `false`입니다.

#### 가상계좌

- 채번된 계좌 정보는 결제창이 닫힌 뒤 전달되며, 입금이 완료되면 웹훅으로 다시 알려드립니다.
- **입금이 완료된 가상계좌 결제는 취소할 수 없습니다.** 부분 취소도 불가합니다. 입금 전에는 가상계좌 비활성화 API로 채번을 취소할 수 있습니다.
- 현금영수증 발급 창을 사용하려면 페이레터와 현금영수증 계약이 되어 있어야 합니다.
- 결제를 취소할 수 없어 결제창에서 발급한 현금영수증도 자동으로 취소되지 않습니다. 현금영수증은 직접 취소해야 합니다.

#### 휴대폰 소액결제

통신사 지정(`mobile.carrier`)은 페이레터로 전달되지 않습니다. 구매자가 결제창에서 통신사를 선택합니다.

#### 상품권

- 도서문화상품권은 `customer.customerId`를 30자 이내로 입력해야 합니다.

#### 간편결제

- **삼성페이와 토스페이는 `storeDetails.storeName`을 반드시 입력해야 합니다.**
- 간편결제의 결제수단(카드·포인트 등) 선택은 구매자가 각 간편결제 결제창에서 합니다. `easyPay.availablePayMethods`는 어떤 간편결제에도 전달되지 않습니다.

## 결제창 빌링키 발급

빌링키를 발급하려면 `requestIssueBillingKey` 함수를 호출합니다.
페이레터는 **카드** 빌링키 발급만 지원합니다.

페이레터는 빌링키 발급 전용 API가 없어 결제 금액이 0원인 결제창으로 빌링키를 발급합니다. 발급 과정에서 실제 결제는 발생하지 않습니다.
결제와 동시에 빌링키를 발급하는 `requestIssueBillingKeyAndPay`는 지원하지 않습니다.

<div class="hint" data-style="info">

빌링키 발급은 페이레터와 자동결제 계약이 되어 있어야 사용할 수 있습니다.

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="카드">

```ts
import * as PortOne from "@portone/browser-sdk/v2";

function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해 주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔의 결제 연동 화면에서 채널을 연동할 때 생성된 채널 키를 입력해 주세요.
    billingKeyMethod: "CARD",
    issueId: `issue-${crypto.randomUUID()}`,
    issueName: "정기결제 카드 등록",
    customer: {
      customerId: "customer1234", // 필수 입력입니다.
      fullName: "홍길동",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- billingKeyMethod: string

  **빌링키 발급 수단**

  카드(`CARD`)만 지원합니다.

- issueId: string

  **빌링키 발급 건 고유 ID**

  **필수 입력**입니다.

- issueName?: string

  **빌링키 발급 시 결제창에 표시되는 제목**

  100자 이내로 입력해야 합니다. 미입력 시 `빌링키 발급`으로 표시됩니다.

- customer: object

  **고객 정보**

  - customerId: string

    **구매자 고유 ID**

    **필수 입력**이며 50자 이내로 입력해야 합니다.

  - fullName?: string

    **구매자 이름**

    20자 이내로 입력해야 합니다.

## API 빌링키 결제 요청하기

발급된 빌링키로 결제하려면 `POST /payments/{paymentId}/billing-key`를 호출합니다.
예약 결제와 반복 결제는 `POST /payments/{paymentId}/schedule`을 이용합니다.

빌링키 결제는 결제창 없이 즉시 승인되며, 응답으로 결제 결과가 확정됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 빌링키 결제 요청">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/billing-key`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    billingKey: "billing-key-1", // 결제창으로 발급받은 빌링키
    orderName: "월간 이용권 정기결제",
    amount: {
      total: 10000,
    },
    currency: "KRW",
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **고객사 주문 고유 번호**

  URL 경로에 포함되며, **영문 대소문자와 숫자만** 사용하여 50자 이내로 입력해야 합니다.

- billingKey: string

  **결제에 사용할 빌링키**

  결제창에서 발급한 카드 빌링키를 입력합니다.

- orderName: string

  **주문명**

  100자 이내로 입력해야 합니다. `<`, `>` 와 제어 문자는 사용할 수 없습니다.

- currency: string

  **결제 통화**

  `KRW`만 지원합니다.

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

  - taxFree?: number

    **면세 금액**

  - vat?: number

    **부가세 금액**

    미입력 시 면세 금액을 제외한 금액의 1/11로 자동 계산됩니다.

- customer?: object

  **고객 정보**

  - name?: object

    **고객 이름**

    20자 이내로 입력해야 합니다.

## API 지원 기능

페이레터는 포트원 V2 API에서 다음 기능을 지원합니다.

- 카드 빌링키 결제
- 예약 결제
- 빌링키 삭제
- 결제 취소

### 결제 취소 API 유의사항

- 전액 취소와 부분 취소를 모두 지원합니다.
- **입금이 완료된 가상계좌 결제는 취소할 수 없습니다.** 입금 전 채번 취소는 가상계좌 비활성화 API를 이용해 주세요.

### 지원하지 않는 기능

다음 기능은 페이레터 국내결제에서 사용할 수 없습니다.

- 에스크로
- 현금영수증 발급, 취소 API

<div class="hint" data-style="info">

페이레터 해외결제를 연동하시려면 [페이레터 해외결제](https://developers.portone.io/opi/ko/integration/pg/v2/payletter-global) 문서를 참고해 주세요.

</div>
