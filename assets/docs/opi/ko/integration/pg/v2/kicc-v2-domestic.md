---
title: 이지페이(KICC) 국내결제
description: 이지페이(KICC) 국내결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 안내에 따라 채널을 설정합니다.
  V2 결제 모듈을 사용하시려면 이지페이(KICC) 신모듈로 연동하셔야 합니다.

## 가능한 결제수단

- 결제창 일반결제: 신용카드, 실시간 계좌이체, 가상계좌, 휴대폰 소액결제, 간편결제
- 결제창 빌링키 발급: 카드, 네이버페이
- API 빌링키 결제: 결제창에서 발급한 빌링키를 사용한 일반결제, 예약 결제, 반복 결제
- 위챗페이, 알리페이 플러스, 라인페이 등 해외 결제수단은 [이지페이(KICC) 해외결제](https://developers.portone.io/opi/ko/integration/pg/v2/kicc-v2-global)를 참고해 주세요.

## SDK 결제 요청하기

결제하려면 `requestPayment` 함수를 호출합니다.
`channelKey`에는 콘솔에서 채널을 연동할 때 생성된 이지페이(KICC) 채널 키를 입력해 주세요.
이 문서에서 안내하는 바이트 길이는 EUC-KR 인코딩을 기준으로 합니다.

이지페이(KICC) 카드 결제 요청 예시는 다음과 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";

function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해 주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔의 결제 연동 화면에서 채널을 연동할 때 생성된 채널 키를 입력해 주세요.
    paymentId: `payment-${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "KRW",
    payMethod: "CARD",
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

  결제 건마다 고유하게 생성해야 합니다. 영문 대소문자, 숫자, 하이픈(`-`), 밑줄(`_`)만 사용하여
  **40자 이내**로 입력해 주세요.

- orderName: string

  **주문명**

  **50바이트**까지만 전달됩니다.

- totalAmount: number

  **결제 금액**

  결제 통화(`currency`)의 scale factor를 반영한 정수로 입력합니다.

- currency: string

  **결제 통화**

  국내 결제는 원화만 지원하므로 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단**

  결제에 사용할 수단을 지정합니다.

  - 신용카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

    20바이트까지만 전달됩니다.

  - firstName?: string

    **구매자 이름**

    `lastName`과 함께 입력해야 합니다. `fullName` 없이 두 값을 입력하면
    `{firstName} {lastName}`이 구매자 이름으로 전달됩니다.

  - lastName?: string

    **구매자 성**

    `firstName`과 함께 입력해야 합니다.

  - phoneNumber?: string

    **구매자 연락처**

    11자 이내로 입력해야 합니다.

  - email?: string

    **구매자 이메일**

    이메일 주소를 50자 이내로 입력해야 합니다.

  - address?: object

    **구매자 주소**

    200바이트까지만 전달됩니다.

    - addressLine1: string

      **주소 첫째 줄**

    - addressLine2: string

      **주소 둘째 줄**

    - city?: string

      **도시**

    - province?: string

      **주/도/시**

  - zipcode?: string

    **구매자 우편번호**

    에스크로 결제에서 수취인의 우편번호로 전달됩니다. 숫자만 사용해 6자 이내로 입력해야 합니다.
    그 외 결제에서는 이지페이(KICC)로 전달되지 않습니다.

- taxFreeAmount?: number

  **면세 금액**

- vatAmount?: number

  **부가세 금액**

  미입력 시 과세 금액의 1/11로 자동 계산됩니다.

- locale?: string

  **결제창 언어**

  지원하는 언어는 다음과 같습니다. 지원하지 않는 값을 입력하면 기본 언어로 결제창이 열립니다.
  카드사, 간편결제사 또는 통신사의 결제창을 바로 호출하면 `locale` 설정이 적용되지 않습니다.

  - 한국어: `KO_KR`
  - 영어: `EN_US`
  - 일본어: `JA_JP`
  - 중국어: `ZH_CN` 또는 `ZH_TW`

- isEscrow?: boolean

  **에스크로 사용 여부**

  실시간 계좌이체와 가상계좌 결제에서만 사용할 수 있습니다.

  `true`로 설정하면 다음 정보를 모두 입력해야 합니다.

  - 구매자 이름: `customer.fullName` 또는 `customer.firstName`과 `customer.lastName`
  - 구매자 연락처: `customer.phoneNumber`
  - 구매자 이메일: `customer.email`
  - 상품 정보: `products`

- card?: object

  **카드 결제 설정**

  - cardCompany?: string

    **카드사**

    지정한 카드사의 결제창을 바로 엽니다.

    - 신한카드: `SHINHAN_CARD`
    - 삼성카드: `SAMSUNG_CARD`
    - 현대카드: `HYUNDAI_CARD`
    - 국민카드: `KOOKMIN_CARD`
    - 롯데카드: `LOTTE_CARD`
    - 하나카드: `HANA_CARD`
    - 우리카드: `WOORI_CARD`
    - BC카드: `BC_CARD`
    - NH 농협카드: `NH_CARD`
    - 씨티카드: `CITI_CARD`
    - 수협카드: `SUHYUP_CARD`
    - 광주카드: `GWANGJU_CARD`
    - 전북카드: `JEONBUK_CARD`
    - 제주카드: `JEJU_CARD`
    - KDB산업은행 카드: `KOREA_DEVELOPMENT_BANK`
    - 새마을금고 카드: `KFCC`
    - 신협 카드: `SHINHYUP`
    - 우체국 카드: `EPOST`
    - 저축은행 카드: `SAVINGS_BANK_KOREA`
    - 카카오뱅크 카드: `KAKAO_BANK`
    - K뱅크 카드: `K_BANK`
    - 토스뱅크 카드: `TOSS_BANK`

  - availableCards?: string\[]

    **노출할 카드사 목록**

    입력할 수 있는 카드사 코드는 `cardCompany`와 같습니다.
    `cardCompany`를 입력하면 `availableCards`는 무시되고 지정한 카드사만 사용됩니다.

  - useCardPoint?: boolean

    **카드사 포인트 사용 여부**

    `true`로 설정하면 결제창에서 카드사 포인트 사용 여부를 선택할 수 있습니다.

  - installment?: object

    **할부 설정**

    - monthOption?: object

      **할부 개월 수 설정**

      `fixedMonth`와 `availableMonthList` 중 하나만 입력합니다.

      - fixedMonth?: number

        **고정 할부 개월 수**

      - availableMonthList?: number\[]

        **구매자가 선택할 수 있는 할부 개월 수 목록**

    - freeInstallmentPlans?: object\[]

      **무이자 할부 설정**

      - cardCompany: string

        **무이자 할부를 제공하는 카드사**

      - months: number\[]

        **무이자 할부를 제공하는 개월 수**

- easyPay?: object

  **간편결제 설정**

  - easyPayProvider?: string

    **간편결제사**

    간편결제 시 필수이며, 지정한 간편결제사의 결제창을 엽니다.

    - 카카오페이: `KAKAOPAY`
    - 네이버페이: `NAVERPAY`
    - 토스페이: `TOSSPAY`
    - 삼성페이: `SAMSUNGPAY`
    - 애플페이: `APPLEPAY`
    - 페이코: `PAYCO`

  - availableCards?: string\[]

    **노출할 카드사 목록**

    입력할 수 있는 카드사 코드는 `card.cardCompany`와 같습니다.
    카드사 1곳만 입력할 수 있습니다.

  - availablePayMethods?: string\[]

    **노출할 결제수단**

    네이버페이 결제 시 다음 값을 입력할 수 있습니다.

    - 네이버페이 카드: `CARD`
    - 네이버페이 포인트/머니: `CHARGE`

  - cashReceiptType?: string

    **현금영수증 발급 유형**

    `customerIdentifier`와 함께 입력해야 합니다.

    - 소득공제용: `PERSONAL`
    - 지출증빙용: `CORPORATE`

  - customerIdentifier?: string

    **현금영수증 발행 대상 식별 정보**

    카드번호, 사업자번호, 휴대폰번호 중 하나입니다.
    하이픈 없이 숫자만 입력합니다.

  - installment?: object

    **할부 설정**

    `card.installment`와 동일한 형식입니다.

- virtualAccount?: object

  **가상계좌 결제 설정**

  - accountExpiry: object

    **입금 기한**

    가상계좌 결제에서는 반드시 입력해야 합니다. `validHours`와 `dueDate` 중 하나만 입력합니다.
    입력한 값을 KST 기준 날짜(`YYYYMMDD`)와 시각(`HHmmss`)으로 변환해 전달합니다.

    - validHours?: number

      **유효 시간**

      예를 들어 `3`을 입력하면 지금부터 3시간 후가 입금 기한으로 지정됩니다.

    - dueDate?: string

      **만료 시각**

      RFC 3339의 date-time 형식으로 입력해야 합니다.

- mobile?: object

  **휴대폰 소액결제 설정**

  - carrier?: string

    **통신사**

    지정한 통신사의 결제창을 바로 엽니다.

    - `SKT` (SK텔레콤)
    - `KT` (KT)
    - `LGU` (LG U+)
    - `SK7` (SK 세븐모바일)

- products?: object\[]

  **상품 정보**

  에스크로 결제에서는 상품 정보를 1개 이상 20개 이하로 입력해야 합니다.
  각 상품의 단가(`amount`)와 수량(`quantity`)을 곱한 금액의 합계가 `totalAmount`와 같아야 합니다.

  - id: string

    **상품 ID**

    40바이트 이내로 입력해야 합니다.

  - name: string

    **상품명**

    50바이트까지만 전달됩니다.

  - amount: number

    **상품 단위 가격**

  - quantity: number

    **상품 수량**

### 카드 결제 유의사항

#### **무이자 할부**

`installment.freeInstallmentPlans`에 카드사와 무이자 개월 수를 지정하면 무이자 할부가 적용됩니다.
`card.cardCompany`로 카드사를 다이렉트 호출하는지에 따라 입력 방법이 다릅니다.

카드사 다이렉트 호출을 사용하지 않는 경우

- 무이자 할부나 카드사 포인트(`card.useCardPoint`)를 사용하려면 `card.availableCards`에 대상 카드사를 지정합니다.
- `card.availableCards`에 지정한 카드사별로 무이자 할부 개월 수를 `card.installment.freeInstallmentPlans`에 입력합니다.

카드사 다이렉트 호출을 사용하는 경우

- 할부 개월 수는 `card.installment.monthOption`에 한 개만 지정합니다.
- 무이자 할부는 `card.installment.freeInstallmentPlans`에 설정합니다. 카드사는 `card.cardCompany`에 지정한 카드사와 같아야 하며, 할부 개월 수는 `card.installment.monthOption`에 지정한 값과 같아야 합니다.

간편결제

- `easyPay.installment.monthOption`에 선택 가능한 할부 개월 수를 지정합니다. 간편결제창에서 할부 개월 수를 선택합니다.
- 무이자 할부는 `easyPay.availableCards`에 카드사를 지정하고, `easyPay.installment.freeInstallmentPlans`에 해당 카드사의 무이자 개월 수를 지정합니다.

#### **카드사 포인트**

`card.useCardPoint`를 `true`로 설정하려면 `card.cardCompany` 또는 `card.availableCards`에
카드사를 1곳 이상 지정해야 합니다. `card.availableCards`에 지정한 카드사에는 모두 포인트 사용
설정이 적용됩니다.

대상 카드사를 입력하지 않으면 결제창 호출 전에 오류가 반환됩니다.

## 결제창 빌링키 발급

빌링키를 발급하려면 `requestIssueBillingKey` 함수를 호출합니다.
이지페이(KICC)는 카드와 네이버페이 빌링키 발급을 지원합니다.

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
  });
}
```

</div>

<div class="tabs-content" data-title="네이버페이">

```ts
import * as PortOne from "@portone/browser-sdk/v2";

function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해 주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔의 결제 연동 화면에서 채널을 연동할 때 생성된 채널 키를 입력해 주세요.
    billingKeyMethod: "EASY_PAY",
    issueId: `issue-${crypto.randomUUID()}`,
    issueName: "네이버페이 정기결제 등록",
    easyPay: {
      easyPayProvider: "NAVERPAY",
      availablePayMethods: ["CARD"],
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- billingKeyMethod: string

  **빌링키 발급 수단**

  - 카드: `CARD`
  - 네이버페이: `EASY_PAY`

- issueId: string

  **빌링키 발급 건 고유 ID**

  **필수 입력**이며, 1바이트 이상 40바이트 이하로 입력해야 합니다.

- issueName: string

  **빌링키 발급 시 결제창에 표시되는 제목**

  **필수 입력**이며, 1바이트 이상 50바이트 이하로 입력해야 합니다.

- customer?: object

  **고객 정보**

  카드 빌링키 발급 시에만 이지페이(KICC)로 전달됩니다.
  각 항목의 입력 규칙은 SDK 결제 요청의 `customer`와 같습니다.

  - fullName?: string

    **구매자 전체 이름**

  - firstName?: string

    **구매자 이름**

  - lastName?: string

    **구매자 성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

- easyPay?: object

  **간편결제 설정**

  - easyPayProvider: string

    **간편결제수단**

    네이버페이(`NAVERPAY`)만 지원합니다.

  - availablePayMethods: string\[]

    **노출할 결제수단**

    네이버페이 빌링키를 발급할 때 **반드시 입력해야 합니다**. 목록의 첫 번째 값만 사용됩니다.

    - 네이버페이 카드: `CARD`
    - 네이버페이 포인트/머니: `CHARGE`

  - availableCards?: string\[]

    **노출할 카드사 목록**

    입력할 수 있는 카드사 코드는 SDK 결제 요청의 `card.cardCompany`와 같습니다.

- locale?: string

  **결제창 언어**

  카드 빌링키 발급 시에만 전달됩니다. SDK 결제 요청의 `locale`과 동일한 값을 지원합니다.

## API 빌링키 결제 요청하기

발급된 빌링키로 결제하려면 `POST /payments/{paymentId}/billing-key`를 호출합니다.
예약 결제와 반복 결제는 `POST /payments/{paymentId}/schedule`을 이용합니다.

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

  URL 경로에 포함되며, 1바이트 이상 40바이트 이하로 입력해야 합니다.

- billingKey: string

  **결제에 사용할 빌링키**

  결제창에서 발급한 카드 또는 네이버페이 빌링키를 입력합니다.

- orderName: string

  **주문명**

  1바이트 이상 50바이트 이하로 입력해야 합니다.

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

    20바이트 이내로 입력해야 합니다.

    - full?: string

      **고객 전체 이름**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - email?: string

    **고객 이메일**

    이메일 주소를 50자 이내로 입력해야 합니다.

  - phoneNumber?: string

    **고객 전화번호**

    숫자만 사용하여 11자 이내로 입력해야 합니다.

- cashReceipt?: object

  **현금영수증 정보**

  네이버페이 빌링키 결제에서만 사용할 수 있습니다. `type`, `customerIdentityNumber`,
  `customerIdentityNumberType`을 **모두 입력해야** 이지페이(KICC)로 전달됩니다.

  - type: string

    **현금영수증 발급 유형**

    - 소득공제용: `PERSONAL`
    - 지출증빙용: `CORPORATE`

  - customerIdentityNumber?: string

    **사용자 식별 번호**

    숫자만 사용하여 20자 이내로 입력해야 합니다.

  - customerIdentityNumberType?: string

    **사용자 식별 번호 유형**

    - 휴대전화번호: `PHONE`
    - 카드번호: `CARD`
    - 사업자등록번호: `BUSINESS`

## API 지원 기능

이지페이(KICC)는 포트원 V2 API에서 다음 기능을 지원합니다.

- 카드와 네이버페이 빌링키 결제
- 예약 결제
- 빌링키 삭제
- 결제 취소
- 에스크로 배송 정보 등록
- 현금영수증 발급, 조회, 취소
- 가상계좌 말소

### 에스크로 API 유의사항

- 에스크로 배송 정보는 등록만 지원합니다. 배송 정보 수정과 조회 API는 지원하지 않습니다.

- **구매자에게 발송된 이지페이(KICC) 메일에서만 구매를 확정할 수 있습니다.**
  포트원의 구매 확정 API로는 처리할 수 없습니다.

- 배송 정보 등록 시 물류 회사(`logistics.company`)는 필수입니다.
  송장 번호(`logistics.invoiceNumber`)는 30바이트 이내로 입력해야 합니다.

- 배송 정보를 등록하면 이지페이(KICC)가 결제 요청 시 입력한 `customer.email`로 물품 수령 확인
  메일을 발송합니다.

- 지원하는 물류 회사는 다음과 같습니다.

  - CJ대한통운: `CJ`
  - 롯데글로벌로지스: `LOTTE`
  - 로젠택배: `LOGEN`
  - 동원로엑스: `DONGWON`
  - 우체국: `POST`
  - 한진택배: `HANJIN`
  - 기타: `ETC`

### 현금영수증 API 유의사항

- 포트원을 거치지 않고 결제한 건에도 현금영수증을 발급하거나 취소할 수 있습니다.

- 현금영수증 발급 시 다음 파라미터는 필수입니다.

  - `amount.vat`: 부가세 금액
  - `customer.identityNumberType`: 식별 정보 유형 (`CARD`, `PHONE`, `BUSINESS`)

- `customer.identityNumber`는 숫자만 사용하여 50자 이내로 입력해야 합니다.

- `customer.email`에 이메일 주소를 20자 이내로 입력해야 하며, 영문 대소문자와 숫자 외에는 `@`, `.`,
  `_`, `-`만 사용할 수 있습니다.

- `paymentId`는 영문 대소문자, 숫자, 하이픈(`-`), 밑줄(`_`)만 사용하여 40자 이내로 입력해야 합니다.

- `customer.name`은 20바이트까지, `orderName`은 50바이트까지만 전달됩니다.

### 결제 취소 API 유의사항

#### 비동기 취소

가상계좌 입금 후 환불과 휴대폰 소액결제 익월 환불은 **비동기 방식**으로 처리됩니다.
이지페이(KICC)가 취소 요청을 접수한 뒤 실제 환불을 처리합니다. 휴대폰 소액결제 당월 환불과
그 외 결제수단의 취소는 실시간으로 처리됩니다.

- 응답의 `status`가 `REQUESTED`(취소 요청)로 반환되며, 이 시점에는 취소가 확정되지 않습니다.
  응답만 보고 주문 상태를 취소로 변경하지 마세요.

- 환불 계좌(`refundAccount`)를 필수로 입력해야 합니다. 환불 금액은 요청일의 다음 영업일에 해당
  계좌로 입금됩니다.

#### 에스크로

- 에스크로 결제는 부분 취소할 수 없으며 전액 취소만 지원합니다.

- 다음 경우에는 결제 취소 API로 취소할 수 없으므로,
  [이지페이(KICC) 가맹점관리자](https://office.easypay.co.kr/)에서 직접 취소해 주세요.

  - 구매를 확정한 경우
  - 계좌이체 에스크로의 배송정보를 등록한 경우
