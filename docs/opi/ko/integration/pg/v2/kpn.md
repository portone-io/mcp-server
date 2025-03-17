---
title: 한국결제네트웍스(KPN)
description: 한국결제네트웍스(KPN) 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 사전 계약 안내

아래 기능을 사용하시려면 한국결제네트웍스(KPN)에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 결제 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답(ex. 결제창에서 에스크로 결제를 했으나 비-에스크로 결제 응답을 받음)을 얻게 될 수 있으니 주의해주시기 바랍니다.

- API를 통한 수기(키인) 결제 (카드, 가상계좌)
- API를 통한 빌링키 발급
- 에스크로 결제 (결제창)
- 가상계좌 입금통보 설정 (백노티)
- 상점분담무이자 설정
- 부분무이자 설정
- 비과세 금액 직접 설정
- 간편결제 다이렉트 호출
- 결제 취소 시 계좌 환불 서비스 설정

## 가능한 결제 수단

- **결제창 일반 결제**

  `payMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드 : `CARD`
  - 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액 결제 : `MOBILE`
  - 간편결제 : `EASY_PAY`

- **결제창 빌링키 발급**

  `billingKeyMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `CARD`

- **API 수기(키인) 결제**

  `method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card` 로 설졍하여 카드 관련 파라미터 입력
  - 가상계좌: `virtualAccount` 로 설정하여 가상계좌 관련 파라미터 입력

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Finstant)
  를 참고해주시기 바랍니다.

- **API 빌링키 발급**

  `method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card` 로 설졍하여 카드 관련 파라미터 입력

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v2/billingKey#post%20%2Fbilling-keys)를 참고해주시기 바랍니다.

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키를 지정하여 한국결제네트웍스(KPN) 채널 사용을 명시해주세요.

한국결제네트웍스(KPN) 기준으로 작성한 예시 코드는 아래와 같습니다.

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
    payMethod: "CARD",
  });
}
```

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- totalAmount: number

  **결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - 신용카드 : `CARD`
  - 실시간 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제 : `MOBILE`
  - 간편 결제 : `EASY_PAY`

- bypass?: object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - kpn?: object

    **한국결제네트웍스(KPN)에서 제공하는 파라미터**

    - CardSelect?: enum\[]

      **일부 렌더링할 결제방식 목록**

      특정 카드사로 구별되지 않는 결제수단을 지정할 때 사용합니다.

      - 해외카드 (VISA + MASTER + JCB) : `GLOBAL`
      - 구인증 : `LEGACY_AUTH`
      - 키인 : `KEY_IN`

### 유의사항

#### 공통

<details>

<summary>`paymentId`의 경우 영문 대/소문자 및 숫자만 허용됩니다.</summary>

`paymentId` 입력시 0-9,a-z,A-Z 의 문자만 입력 가능합니다.

한글이나 `♤`, `♡`, `♧` 등의 특수 문자 입력시 결제가 정상적으로 동작하지 않을 수 있습니다.

</details>

<details>

<summary>결제창 표시 언어 지원 안내</summary>

SDK를 통한 결제 요청시 `locale` 파라미터를 사용하여 결제창 내에 언어를 제어할 수 있습니다.
한국결제네트웍스(KPN)의 경우 한국어 및 영어만 지원합니다.

- 한국어 : `KO_KR`
- 영어 : `EN_US`

</details>

<details>

<summary>지원되는 결제 통화</summary>

SDK를 통한 결제 요청시 `currency` 파라미터를 사용하여 통화를 설정할 수 있습니다.
한국결제네트웍스(KPN)의 경우 `KRW` 만 지원합니다.

- 원화 : `KRW`

</details>

<details>

<summary>결제 요청 시 면세금액 설정 시 우선 적용 안내</summary>

계약 당시 MID를 면세, 과세 용도로 나누어서 발급받은 경우에도 결제 요청시 파라미터로 전달하는 금액 정보를 우선 사용합니다.
고객사에서 면세 또는 과세금액을 계산하여 처리하는 경우 `totalAmount`와 `taxFreeAmount`를 올바르게 전달하여야 합니다.

</details>

#### 카드 결제

<details>

<summary>카드 관련 미지원 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `useAppCardOnly`: 앱카드만 허용할지 여부
- `useFreeInterestFromMall`: 상점부담무이자 사용 여부

</details>

<details>

<summary>카드 다이렉트 호출 지원 카드사 안내</summary>

KPN을 이용하시는 경우 아래 카드사 한해 다이렉트 호출이 가능합니다.

- 신한카드
- 현대카드
- 삼성카드
- 농협카드
- 하나카드
- 롯데카드
- 씨티카드
- 우리카드
- 비씨카드
- 국민카드
- 우체국은행 카드
- 새마을금고 카드
- 신협 카드
- 저축은행 카드
- KDB산업은행 카드
- 카카오뱅크 카드
- 케이뱅크 카드

```typescript title="SDK 카드 다이렉트 결제 요청"
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${Math.random().toString(36).slice(2)}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    payMethod: "CARD",
    card: {
      cardCompany: "KOOKMIN_CARD", // 국민카드 다이렉트
    },
  });
}
```

</details>

<details>

<summary>카드 다이렉트 이용 시 약관동의 절차 안내</summary>

다이렉트 호출시 아래 3가지 약관 동의 절차가 고객사 페이지 내에 있어야 합니다.

- `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=1` (전자금융거래 이용약관)
- `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=3` (개인정보 수집 및 이용처리 동의)
- `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=4` (개인정보 제3자 제공 동의)

영어 약관이 필요한 경우 URL 뒤에 `&langType=ENG`을 추가하여 사용할 수 있습니다.

</details>

#### 간편 결제

<details>

<summary>간편결제 다이렉트 호출 지원 안내</summary>

한국결제네트웍스(KPN)의 경우 아래 간편결제사를 지원합니다. `easyPay.easyPayProvider` 파라미터에 아래 값을 입력하여
간편결제사를 지정하여 호출할 수 있습니다.

- 카카오페이: `KAKAOPAY`
- 네이버페이: `NAVERPAY`
- 삼성페이: `SAUMSUNGPAY`
- 토스페이: `TOSSPAY`
- 페이코: `PAYCO`

</details>

<details>

<summary>네이버페이 다이렉트 호출 미지원</summary>

한국결제네트웍스(KPN)의 경우, 현재 네이버페이 다이렉트 호출은 지원하지 않습니다.

</details>

<details>

<summary>간편결제 관련 미지원 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우 간편결제 결제시 아래 파라미터들을 지원하지 않으며,
해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `customerIdentifier`: 현금영수증 발행 대상 식별 정보
- `useCardPoint`: 카드사 포인트 사용 여부
- `useFreeInterestFromMall`: 상점부담무이자 사용 여부
- `useInstallment`: 할부 사용 여부
- `cashReceiptType`: 현금영수증 타입
- `installment`: 할부 설정
- `availableCards`: 결제 수단으로써 사용 허가할 카드사 리스트
- `availablePayMethod`: 간편결제 세부 결제수단 지정 렌더링 옵션

</details>

#### 계좌이체

<details>

<summary>계좌이체 관련 미지원 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 계좌이체 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보

</details>

<details>

<summary>현금영수증 발급 유형 지원 안내</summary>

현금영수증은 현금성 거래인 실시간 계좌이체 및 가상계좌 발급 시 사용이 가능합니다.
한국결제네트웍스(KPN)의 경우 현금영수증 발급 유형을 `CORPORATE` 혹은 `PERSONAL` 등 파라미터로 제어할 수 없습니다.
결제창 내에서 선택한 유형으로 현금영수증은 발급되며, 결제창 호출 파라미터로는 현금영수증을 발행 여부만을 제어할 수 있습니다.

`cashReceiptType` 파라미터를 `ANONYMOUS`로 설정시 결제창에서 현금영수증 발급 UI가 미노출됩니다.

</details>

#### 가상계좌 결제

<details>

<summary>가상계좌 관련 미지원 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 가상계좌 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보
- `fixedOption`: 고정식 가상계좌 옵션

</details>

<details>

<summary>가상계좌 사용시 입금통보 URL 설정 안내</summary>

한국결제네트웍스(KPN)의 경우, 가상계좌를 사용하는 경우 입금통보 URL을 별도로 설정해야 합니다.

자세한 내용은 [가상계좌 입금통보 URL 설정 가이드](https://developers.portone.io/opi/ko/integration/virtual-account/readme?v=v2#notice-config-kpn)를
참조해 주세요.

</details>

<details>

<summary>가상계좌 지원 은행 안내</summary>

한국결제네트웍스(KPN)에서 가상계좌 발급이 가능한 은행은 아래와 같습니다.

은행코드는 [BANK ENUM](https://developers.portone.io/api/rest-v2/type-def#Bank)으로 정의되어 있으며
아래 목록에 대한 ENUM 코드를 매핑하여 API에 사용하실 수 있습니다.

- 기업은행
- 국민은행
- 외환은행
- 농협은행
- 우리은행
- SC은행
- 한국씨티은행
- 대구은행
- 부산은행
- 광주은행
- 경남은행
- 우체국
- KEB하나은행
- 신한은행

</details>

<details>

<summary>현금영수증 발급 유형 지원 안내</summary>

현금영수증은 현금성 거래인 실시간 계좌이체 및 가상계좌 발급 시 사용이 가능합니다.
한국결제네트웍스(KPN)의 경우 현금영수증 발급 유형을 `CORPORATE` 혹은 `PERSONAL` 등 파라미터로 제어할 수 없습니다.
결제창 내에서 선택한 유형으로 현금영수증은 발급되며, 결제창 호출 파라미터로는 현금영수증을 발행 여부만을 제어할 수 있습니다.

`cashReceiptType` 파라미터를 `ANONYMOUS`로 설정시 결제창에서 현금영수증 발급 UI가 미노출됩니다.

</details>

#### 휴대폰 소액결제

<details>

<summary>필수 입력 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우 **휴대폰 소액결제 시 상품 유형을 구분짓는 `productType` 파라미터를 필수**로 입력해야 합니다.

- 실물 : `PRODUCT_TYPE_REAL`
- 디지털 : `PRODUCT_TYPE_DIGITAL`

</details>

<details>

<summary>휴대폰 소액결제 관련 미지원 파라미터</summary>

한국결제네트웍스(KPN)의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `carrier`: 휴대폰 소액결제 통신사 바로 호출을 위한 통신사 구분 값
- `availableCarriers`: 결제창에 노출될 통신사 리스트 지정 옵션

</details>

## SDK 빌링키 발급 요청하기

빌링키 발급 요청 시에는 `requestIssueBillingKey` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키를 지정하여 한국결제네트웍스(KPN) 채널 사용을 명시해주세요.

한국결제네트웍스(KPN) 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="SDK 빌링키 발급 요청"
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyMethod: "CARD",
    issueId: "test-issueId",
    issueName: "test-issueName",
    customer: {
      customerId: "uniqueCustomerId",
      fullName: "포트원",
    },
  });
}
```

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyMethod: string

  **빌링키 발급수단**

  한국결제네트웍스(KPN)는 빌링키 발급 수단으로 카드만을 지원하므로 해당 파라미터는 `CARD`로 고정해야 합니다.

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 고유 ID**

    - 한국결제네트웍스(KPN)의 경우 구매자 ID를 필수로 입력해야 합니다.

  - fullName?: string

    **구매자 전체 이름**

    - 한국결제네트웍스(KPN)의 경우 `fullName` 혹은 (`firstName` + `lastName`)을 필수로 입력해야 합니다.

  - firstName?: string

    **구매자 이름**

    - 한국결제네트웍스(KPN)의 경우 `fullName` 혹은 (`firstName` + `lastName`)을 필수로 입력해야 합니다.

  - lastName?: string

    **구매자 성**

    - 한국결제네트웍스(KPN)의 경우 `fullName` 혹은 (`firstName` + `lastName`)을 필수로 입력해야 합니다.

### 유의사항

<details>

<summary>파라미터 입력 형식 안내</summary>

SDK를 통한 빌링키 발급 요청 시 `offerPeriod` 파라미터를 사용하여 결제창 내에 제공 기간을 표시할 수 있습니다.
해당 파라미터는 range형태로만 입력 가능합니다.

구체적인 형식은 SDK 가이드를 참고해주세요. [결제요청 파라미터 가이드 바로가기](https://developers.portone.io/docs/ko/v2-payment/v2-sdk/payment-request?v=v2)

</details>

<details>

<summary>결제창 표시 언어 지원 안내</summary>

SDK를 통한 빌링키 발급 요청시 `locale` 파라미터를 사용하여 결제창 내에 언어를 제어할 수 있습니다.
한국결제네트웍스(KPN)의 경우 한국어 및 영어만 지원합니다.

- 한국어 : `KO_KR`
- 영어 : `EN_US`

</details>

<details>

<summary>카드 다이렉트 호출 미지원 안내</summary>

한국결제네트웍스(KPN) 경우 빌링키 발급 시 카드사 다이렉트 호출 기능을 지원하지 않습니다.
`card.cardCompany` 필드에 값을 입력한 후 빌링키 발급을 요청한 경우에도 빌링키 발급 동작에 아무런 영향을 미치지 않습니다.

</details>

## API 수기(키인) 결제 요청하기

수기(키인)로 결제하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/instant` API를 통해 결제를 요청해야 합니다.

```typescript title="API 수기(키인) 결제 요청"
// ... 수기(키인) 결제
const issueResponse = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/instant`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    paymentId: `payment${Math.random().toString(36).slice(2)}`,
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    orderName: "나이키 와플 트레이너 2 SD",
    amount: {
      total: 10000,
      taxFree: 3000,
    },
    currency: "KRW",
    customer: {
      name: {
        full: "홍길동",
      },
      phoneNumber: "010-1234-0000",
    },
    method: {
      virtualAccount: {
        bank: `SHINHAN`,
        expiry: {
          dueDate: `2024-11-12T00:00:00+09+00`, // 입금기한은 미래시간만 가능합니다.
        },
        cashReceipt: {
          type: `PERSONAL`,
          customerIdentityNumber: `010-1234-0000`,
        },
      },
    },
  },
});
```

### 주요 파라미터

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

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

- method: object

  **결제수단 정보**

  - virtualAccount?: object

    **가상계좌 결제 시 파라미터**

    - bank: string

      **발급 은행**

      - 은행코드는 ENUM으로 정의되어 있습니다.
      - [BANK ENUM 바로가기](https://developers.portone.io/api/rest-v2/type-def#Bank)

    - expiry: object

      **입금 만료 기한**

      - validHours?: integer

        **유효 시간**

      - dueDate?: string

        **만료 시점**

        시간은 ISO8601 형식으로 입력해야 합니다.

    - option: object

      **가상계좌 발급 방식**

      - type: string

        **가상계좌 발급 유형**

        발급 유형은 ENUM으로 정의되어 있습니다.

        - 회전식 가상계좌 : `NORMAL`

        한국결제네트웍스(KPN)의 경우 **회전식 가상계좌**(`NORMAL`)만 지원합니다.

        회전식 가상계좌는 일반적으로 사용되는 방식이며 PG사에서 직접 채번한 가상계좌번호를 사용합니다.

    - cashReceipt: object

      **현금영수증 정보**

      - type: string

        **발급 유형**

        발급 유형은 ENUM으로 정의되어 있습니다.

        - 소득공제용 : `PERSONAL`
        - 지출증빙용 : `CORPORATE`
        - 미발행 : `NO_RECEIPT`

      - customerIdentityNumber: string

        **현금영수증 식별 번호**

        - 소득공제인 경우 주민등록번호 혹은 휴대폰 번호를 입력해야 합니다.
        - 지출증빙인 경우 사업자등록번호를 입력해야 합니다.

  - card?: object

    **카드 결제 시 파라미터**

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber?: string

        **생년월일 6자리 또는 사업자 등록 번호**

      - passwordTwoDigits?: string

        **비밀번호 앞 두자리**

  - customer?: object

    **고객 정보**

    - name?: object

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

### 유의사항

<details>

<summary>카드 정보 입력 파라미터 안내</summary>

API를 통한 수기(키인) 결제 요청 파라미터에는 카드의 상세 정보를 입력하는 필드가 존재합니다.

한국결제네트웍스(KPN)의 경우 카드 번호 + 유효기간만으로 결제가 가능하나, 일부 고객사의 경우 생년월일 + 비밀번호 앞 두 자리를 추가적으로 입력이 필요할 수 있습니다.

자세한 내용은 한국결제네트웍스(KPN) 담당자에게 문의해주시기 바랍니다.

</details>

<details>

<summary>결제 통화 지원 안내</summary>

API를 통한 수기(키인) 결제 요청시 `currency` 파라미터를 이용하여 통화를 지정할 수 있습니다.

한국결제네트웍스(KPN)의 경우 `KRW`와 `USD`를 지원하며, 이 중 `USD`로 지정한 경우 해외카드 결제만 가능합니다.

결제는 1센트 단위로 가능하지만 매입사에 따라 결제 취소가 불가능할 수 있습니다.
결제 취소의 경우 1달러 이상 금액부터 가능한 경우가 발생할 수 있습니다.

자세한 내용은 한국결제네트웍스(KPN) 담당자에게 문의해주시기 바랍니다.

</details>

<details>

<summary>가상계좌 에스크로 결제 미지원 안내</summary>

한국결제네트웍스(KPN)의 경우, API 수기(키인) 결제를 통한 가상계좌 발급 시 에스크로 결제는 지원하지 않습니다.

가상계좌 에스크로 결제 이용을 원하시는 경우 결제창 방식으로 발급하여 사용하시길 권장드립니다.

</details>

## API 빌링키 발급 요청하기

빌링키를 발급하기 위해서는 `POST /billing-keys` API를 이용하여 빌링키 발급을 요청해야 합니다.

한국결제네트웍스(KPN) 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="API 빌링키 발급 요청"
const issueResponse = await axios({
  url: "https://api.portone.io/billing-keys",
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      name: {
        full: "홍길동",
      },
      phoneNumber: "010-1234-0000",
    },
    method: {
      card: {
        credential: {
          number: "1111111111111111",
          expiryMonth: "01",
          expiryYear: "20",
          birthOrBusinessRegistrationNumber: "900101",
          passwordTwoDigits: "00",
        },
      },
    },
  },
});
```

### 주요 파라미터

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- method: object

  **결제수단 정보**

  - card?: object

    **카드 빌링키 발급 시 파라미터**

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자 등록 번호**

      - passwordTwoDigits: string

        **비밀번호 앞 두자리**

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    - 한국결제네트웍스(KPN)의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    * full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    * separated?: object

      **분리된 이름**

      - first?: string

        **이름**

      - last?: string

        **성**

  - phoneNumber?: string

    **구매자 연락처**

### 유의사항

<details>

<summary>필수 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우에는 빌링키 발급 시 아래의 파라미터를 필수로 입력해야 합니다.

- `customer.name.full` 혹은 `customer.name.separated`

그 외에는 위에서 설명한 주요 파라미터들을 참고하여 입력해주시기 바랍니다.

</details>

## API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제를 진행하려면 `POST /payments/${PAYMENT_ID_HERE}/billing-key` API를 이용하여 결제를 요청하실 수 있습니다.

한국결제네트웍스(KPN) 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="API 빌링키 단건 결제"
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/billing-key`,
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
      total: 10000,
    },
    currency: "KRW",
    productCount: 1,
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

  - taxFree?: number

    **면세액**

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

한국결제네트웍스(KPN) 기준으로 작성한 예시 코드는 아래와 같습니다.

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

    - 한국결제네트웍스(KPN)의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    * full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    * separated?: object

      **분리된 이름**

      - first?: string

        **이름**

      - last?: string

        **성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

## 공통 유의사항

<details>

<summary>부가세 지정금액 결제 미지원</summary>

한국결제네트웍스(KPN)의 경우 결제 시 부가세액을 직접 지정할 수 없습니다.

결제 요청 파라미터에 VAT(부가세)를 지정하시더라도 해당 값은 무시되며, 결제 금액에 대한 부가세는 한국결제네트웍스(KPN)에서 자동으로 계산됩니다.

만약 결제 요청시 VAT(부가세) 파라미터에 금액을 지정하는 경우 결제 조회시 요청 파라미터에 입력한 값이 응답으로 내려가므로, 부가세 파라미터를 지정하지 않는 것을 권장드립니다.

</details>

<details>

<summary>환불서비스 신청 안내</summary>

한국결제네트웍스(KPN)의 경우 계좌 환불의 형태로 결제를 취소하려면 별도 설정을 진행해야 합니다.

일반적으로 아래와 같은 경우에 대해 계좌 환불 서비스 신청이 필요합니다.

- 가상계좌 입금 후 환불
- 휴대폰 결제 후 익월 환불
- 계좌이체 취소가 불가능한 경우(환불 기한 초과, 계좌 제한 등)

또한, 위 환불 서비스를 이용할 경우에는 결제 취소시 환불 계좌 정보를 필수적으로 입력해야 합니다.

자세한 내용은 한국결제네트웍스(KPN) 담당자에게 문의해주시기 바랍니다.

</details>
