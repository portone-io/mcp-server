---
title: 스마트로
description: 스마트로 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/smartro-v2/readme
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.
  V2 결제 모듈을 사용하시려면 스마트로(신모듈)로 연동하셔야 합니다.

## 가능한 결제 수단

- **결제창 일반결제**

  `payMethod` 파라미터를 결제수단에 따라 아래와 같이 설정해야 합니다.

  - 신용카드 : `CARD`
  - 실시간 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제 : `MOBILE`
  - 간편 결제 : `EASY_PAY`

- **결제창 빌링키발급**

  `payMethod` 파라미터를 `card`로 설정해야 합니다

- **API 수기(키인) 결제**

  `method` 파라미터를 `virtualAccount`로 설정해야 합니다.

- **API 빌링키 발급**

  `method` 파라미터를 `card`로 설정해야 합니다.

## 공통 유의사항

<details>

<summary>주문 번호(`paymentId`)에 특수문자를 사용할 수 없습니다.</summary>

SDK 및 API를 이용하여 결제 요청시 숫자, 문자(알파벳 소문자와 대문자) 또는 그 조합으로 이루어진 거래 번호를 사용해야 합니다.

</details>

<details>

<summary>주문 번호(`paymentId`)는 최대 40자까지 입력할 수 있습니다.</summary>

스마트로의 경우 `paymentId`는 최대 40자까지 가능하며, 40자가 넘을 경우 40자까지 잘려서 저장됩니다.

</details>

<details>

<summary>결제통화(`currency`) 파라미터가 적용되지 않습니다.</summary>

일반적으로 `currency` 파라미터를 이용하여 결제통화를 지정할 수 있지만 스마트로의 경우 상점아이디 설정에 따라 사용 가능한 통화가 자동으로 결정됩니다. 따라서 결제 요청 시 `currency`를 입력하더라도 적용되지 않습니다.

스마트로의 경우 `KRW`와 `USD`만 지원하며 이 외의 값을 입력하는 경우 에러를 리턴하며 결제가 진행되지 않습니다.

</details>

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey`파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 스마트로 채널 사용을 명시해주세요.

스마트로 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    payMethod: "CARD",
    customer: {
      phoneNumber: "010-0000-1234",
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

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 고유 ID**

    - 스마트로의 경우 간편결제로 결제 요청시 필수로 입력해야 합니다.
    - 20자 이하로만 입력 가능합니다.

  - phoneNumber?: string

    **구매자 연락처**

    - 스마트로의 경우 결제창 호출 시 필수로 입력합니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - smartro\_v2?: object

    **스마트로에서 제공하는 파라미터 모음**

    - GoodsCnt?: number

      **결제 상품 품목 갯수**

    - SkinColor?: string

      **UI 색상 스타일**

      - 미 설정시 기본으로 `RED`로 적용됩니다.
      - `RED`, `GREEN`, `BLUE`, `PURPLE`를 선택할 수 있습니다.

    - OpenType?: string

      **해외 카드 사용 설정**

      - 국내 카드: `KR`, 해외 카드: `EN`
      - 미 설정시 기본으로 `KR`로 적용됩니다.
      - `EN`으로 설정 시 해외 카드만 결제가 가능합니다.

- 예시 코드

  ```json
  {
    "bypass": {
      "smartro_v2": {
        "GoodsCnt": 2,
        "SkinColor": "BLUE",
        "OpenType": "EN"
      }
    }
  }
  ```

## SDK 빌링키 발급 요청하기

빌링키 발급 요청 시에는 `requestBillingKeyIssue` 함수를 호출해야 합니다.
`channelKey`파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 스마트로 채널 사용을 명시해주세요.

스마트로 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyMethod: "CARD",
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyMethod: string

  **빌링키 발급수단**

  스마트로는 카드 이외 발급 수단은 지원하지 않아 `CARD`로 설정해야 합니다.

- issueId: string

  **빌링키 발급 건 고유 ID**

  - 고객사에서 채번하여 사용해야 합니다.
  - 스마트로의 경우 필수 입력해야 하며, 특수문자는 사용이 불가합니다.

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 고유 ID**

    - 스마트로의 경우 빌링키 발급 시 필수로 입력해야 합니다.
    - 20자 이하로만 입력 가능합니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - smartro\_v2?: object

    **스마트로에서 제공하는 파라미터 모음**

    - SkinColor?: string

      **UI 색상 스타일**

      - 미 설정시 기본으로 `RED`로 적용됩니다.
      - `RED`, `GREEN`, `BLUE`, `PURPLE`를 선택할 수 있습니다.

    - IsPwdPass?: string

      **결제 비밀번호 등록 Skip 여부**

      - 비밀번호 설정 미사용: `Y`, 비밀번호 설정 사용: `N`
      - 미 설정시 기본으로 `N`으로 적용됩니다.

### SDK 연동 유의사항

#### 사전 계약

아래 기능을 사용하시려면 스마트로에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 결제 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답( ex. 결제창에서 에스크로 결제를 했으나 비-에스크로 결제 응답을 받음)을 얻게 될 수 있으니 주의해주시기 바랍니다.

- 간편결제 사용
- 면세 / 복합과세 사용
- 할부 사용
- 상점 부담 무이자 할부 사용
- 카드사 포인트 사용
- 에스크로 사용
- \[TBD] 해외 결제 사용

#### 카드 결제

<details>

<summary>할부 개월수 리스트 제어가 불가능합니다.</summary>

일반적으로 `card.installment.monthOption.availableMonthList` 파라미터를 사용하여 구매자에게 노출할 할부 개월수 리스트를 제어할 수 있으나 **스마트로의 경우 해당 기능을 지원하지 않습니다.**
추가로 상점 아이디에 무이자 할부 설정에 따라 무이자 정보가 자동 표기됩니다.

</details>

<details>

<summary>카드사 다이렉트 호출 시 할부 개월수를 고정해야합니다.</summary>

스마트로의 경우 **카드사 다이렉트 호출 파라미터와 고정 할부 개월수는 항상 같이 사용** 해야 합니다. 하나의 파라미터만 설정하는 경우 에러가 리턴되며 정상적으로 결제가 진행되지 않습니다.

</details>

<details>

<summary>카드사 포인트 사용 여부 파라미터로 제어가 불가능합니다.</summary>

일반적으로 `card.useCardPoint` 파라미터로 카드사 포인트 사용 여부를 설정할 수 있지만 **스마트로는 상점 아이디 설정에 따라 카드사 포인트 사용 여부가 결정**됩니다.

</details>

<details>

<summary> 일부 카드 다이렉트 호출 시 윈도우 환경에서만 가능합니다.</summary>

스마트로의 경우 윈도우 OS에서만 전북 카드(code: `372`)와 카카오뱅크 카드(code: `090`)로 다이렉트 호출이 가능합니다.

</details>

#### 간편 결제

<details>

<summary> 스마트로-네이버페이 결제 시 카드결제만 가능합니다.</summary>

스마트로를 통한 네이버페이를 다이렉트로 호출하여 결제하는 경우 등록된 카드로만 결제가 가능하고 네이버페이 포인트/머니 결제는 불가능합니다.
네이버페이 포인트/머니로 결제를 원하시면 결제창 호출 시 결제수단을 카드로 지정하여 호출한 뒤, 결제를 진행해야합니다.

</details>

#### 가상계좌 결제

<details>

<summary>현금영수증 파라미터 사용 시 다이렉트로 호출해야 합니다.</summary>

기본적으로 결제창을 통하여 현금성 결제수단(실시간 계좌이체, 가상계좌)으로 결제하는 경우 현금영수증을 발급할 수 있으며, 결제창 내에서 현금영수증 정보(현금영수증 발급 유형, 현금영수증 발행 식별 번호)를 입력할 수 있습니다.

스마트로의 경우 결제 요청 시 **`virtualAccount.cashReceiptType`와 `virtualAccount.customerIdentifier`를 이용하여 현금영수증 정보를 사전에 정보를 전달할** 수 있으며, 전달한 정보는 결제창에 자동 입력됩니다. 단, 이 파라미터를 이용하려면 스마트로 정책상 다이렉트로 호출해야 합니다.

예시코드

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    payMethod: "VIRTUAL_ACCOUNT",
    virtualAccount: {
      accountExpiry: {
        dueDate: `2024-11-12T23:59:59+09:00`, // 입금기한은 미래시간만 가능합니다.
      },
      cashReceiptType: `PERSONAL`,
      customerIdentifier: `01088325501`,
      bankCode: `KOOOKMIN_BANK`,
    },
  });
}
```

</details>

#### 휴대폰 소액결제

<details>

<summary>`productType` 파라미터는 필수 입력해야 합니다.</summary>

- 스마트로의 경우 **휴대폰 소액결제시 상품 유형을 구분 짓는 `productType` 파라미터가 필수**로 요구됩니다.
- `productType`의 값은 `PRODUCT_TYPE_REAL` 또는 `PRODUCT_TYPE_DIGITAL`를 입력해야 합니다.
- 상품 유형은 스마트로 상점아이디의 설정과 일치해야 합니다. 일치하지 않는 경우 호출한 결제창 내에 에러가 리턴되며, 결제가 불가능합니다.

</details>

#### 빌링키 발급

<details>

<summary>결제창 빌링키 발급 시 한국어만 지원됩니다.</summary>

스마트로의 경우 결제창 호출 시 한국어 또는 영어로 지원됩니다만 **빌링키 발급**시에는 한국어만 지원합니다.

</details>

<details>

<summary>휴대폰 본인인증 프로세스를 진행해야 빌링키 발급이 가능합니다.</summary>

스마트로의 경우 **빌링키 발급시 휴대폰 본인인증 프로세스**를 진행해야 합니다.
동일 고객에 한하여 휴대폰 본인인증은 최초 1회만 진행하고 있습니다. 따라서 `customerId` 파라미터에 고객을 식별할 수 있는 값을 넣어 사용해야 합니다.
단, 동일한 고객이더라도 `customerId`가 달라지는 경우 휴대폰 프로세스를 다시 진행해야 합니다.

</details>

#### 에스크로 결제

<details>

<summary>에스크로 결제시 카드사/가상계좌 다이렉트 호출 사용이 불가능합니다.</summary>

스마트로는 에스크로 결제시 카드사 다이렉트 호출 및 가상계좌 다이렉트 호출이 불가능합니다. 만약 에스크로 결제시 아래와 같이 다이렉트 호출을 할 경우 에러가 리턴되면서 결제창이 호출되지 않습니다.

예시코드

- V2 에스크로 + 카드사 다이렉트 호출

```ts
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
  channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
  payMethod: "CARD",
  totalAmount: 50000,
  isEscrow: true, // 에스크로 결제
  card: {
    cardCompany: "BC_CARD", // 카드사 다이렉트 호출
    installment: {
      monthOption: {
        fixedMonth: 5,
      },
    },
  },
});
```

- V2 에스크로 + 가상계좌 다이렉트 호출

```ts
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
  channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
  payMethod: "VIRTUAL_ACCOUNT",
  virtualAccount: {
    accountExpiry: {
      dueDate: `2024-11-12T23:59:59+09:00`, // 입금기한은 미래시간만 가능합니다.
    },
  },
  totalAmount: 50000,
  isEscrow: true, // 에스크로 결제
  virtualAccount: {
    bankCode: "SHINHAN_BANK", // 은행 다이렉트 호출
  },
});
```

</details>

<details>

<summary>에스크로 계좌이체 결제시 현금영수증 파라미터 사용이 불가능합니다. </summary>

에스크로 결제 시에는 `cashReceiptType`와 `customerIdentifier` 파라미터를 사용할 수 없습니다. 해당 파라미터를 전달하는 경우 에러가 리턴되면서 결제창이 호출되지 않습니다.

예시코드

- V2 에스크로 + 계좌이체 + 현금영수증 정보 전달

```ts
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
  channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
  totalAmount: 50000,
  payMethod: "TRANSFER", // 계좌이체 결제
  isEscrow: true, // 에스크로 결제
  transfer: {
    // 현금영수증 정보 전달
    cashReceiptType: "CORPORATE",
    customerIdentifier: "1178178260",
  },
});
```

</details>

#### 기타

<details>

<summary>서비스 제공기간(`offerPeriod`) 이용시 시작일(`from`)과 종료일(`to`)를 모두 입력해야 합니다. </summary>

결제창 내 서비스 제공 기간 노출을 원하는 경우 `offerPeriod`를 이용하여 제어할 수 있습니다. 해당 파라미터 이용시에는 `from` 및 `to` 파라미터를 모두 입력해야 결제창에 정상적으로 노출됩니다.

</details>

<details>

<summary>현금영수증 관련 파라미터 사용시 발급 유형( `cashReceiptType`)에 따라 발행 대상 식별 정보(`customerIdentifier`)를 올바르게 입력해야 합니다. </summary>

`cashReceiptType: ANONYMOUS`일 때, `customerIdentifier`에 값을 입력하거나 `cashReceiptType: PERSONAL` 혹은 `cashReceiptType: CORPORATE`일 때, `customerIdentifier`에 값을 입력하지 않으면 에러가 리턴되면서 결제창이 호출되지 않습니다.

</details>

### SDK 결제 FAQ

<details>

<summary>\[테스트연동] 부분취소는 안되나요?</summary>

테스트 모드로 연동한 채널을 이용하여 결제한 체크카드 거래건의 경우 전액 취소만 가능하며 부분취소는 불가능합니다.

</details>

<details>

<summary>\[테스트연동] 국민카드/카카오뱅크카드 사용 시 결제가 자꾸 실패해요.</summary>

테스트 모드로 연동한 채널을 이용하는 경우 국민카드 또는 카카오뱅크로 결제가 불가능합니다. 다른 카드사의 카드로 테스트 해보시길 바랍니다.

</details>

<details>

<summary>\[테스트연동] 카카오페이/페이코 결제 시 결제가 안돼요 </summary>

테스트 모드로 연동한 채널을 이용하여 카카오페이 또는 페이코 결제 시 삼성/현대/농협/신한 카드만 사용이 가능합니다. 이 외의 카드는 결제가 불가능합니다.

</details>

<details>

<summary>\[테스트연동] Kbank로 가상계좌 발급이 불가능해요</summary>

테스트 모드로 연동한 채널을 이용하여 가상계좌 발급 요청시 Kbank, 국민은행, 전북은행, 광주은행, 대구은행 등 일부 은행에서는 발급이 불가능합니다.

</details>

<details>

<summary>\[테스트연동] 카카오페이 결제 시 자동으로 취소가 되나요?</summary>

테스트 모드로 연동한 채널을 이용하여 카카오페이 결제 시 자동취소가 불가능합니다. 테스트 결제 건에 대해 직접 취소처리 하셔야 합니다. 취소는 포트원 콘솔 내 결제내역 혹은 결제 취소 API (POST /payments/{paymentId}/cancel)를 이용하여 취소할 수 있습니다.

</details>

### API 수기(키인)결제 요청하기

수기(키인)로 결제하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/instant`를 이용하여 결제 요청을 해야합니다.
스마트로의 경우 결제수단은 가상계좌 발급만 가능하며, 예시코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 수기(키인) 결제 요청">

```ts
// ... 수기(키인) 결제
const issueResponse = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/instant`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    orderName: "나이키 와플 트레이너 2 SD",
    amount: {
      total: 10000,
    },
    currency: "KRW",
    customer: {
      name: {
        full: "홍길동",
      },
      email: "test@test.com",
      phoneNumber: "010-1234-0000",
    },
    method: {
      virtualAccount: {
        bank: `SHINHAN`,
        expiry: {
          dueDate: `2024-11-12T00:00:00+09+00`, //입금기한은 미래시간만 가능합니다.
        },
        option: `NOMAL`,
        cashReceipt: {
          type: `PERSONAL`,
          customerIdentityNumber: `010-1234-0000`,
        },
        remitteeName: `테스트`,
      },
    },
    productCount: 1,
  },
});
```

</div>

</div>

#### 주요 파라미터

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

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- method: object

  **결제수단 정보**

  스마트로의 경우 가상계좌만 지원합니다.

  - virtualAccount: object

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
        - 고정식 가상계좌 : `FIXED`
        - 회전식 가상계좌는 일반적으로 사용되는 방식이며 PG사에서 직접 채번한 가상계좌번호를 사용합니다.

      - fixed?: object

        **고정식 가상계좌 발급 유형**

        - pgAccountId?: string

          **고정식 가상계좌 ID**

          - 고객사가 가상계좌번호를 직접 관리하지 않고 PG사가 pgAccountId에 매핑되는 가상계좌번호를 내려주는 방식입니다.
            동일한 pgAccountId로 가상계좌 발급 요청시에는 항상 같은 가상계좌번호가 내려옵니다.

          - 스마트로의 경우 해당 방식만 지원합니다.

    - cashReceipt?: object

      **현금영수증 정보**

      - type?: string

        **발급 유형**

        발급 유형은 ENUM으로 정의되어 있습니다.

        - 소득공제용 : `PERSONAL`
        - 지출증빙용 : `CORPORATE`
        - 미발행 : `NO_RECEIPT`

      - customerIdentityNumber?: string

        **현금영수증 식별 번호**

        - 소득공제인 경우 주민등록번호 혹은 휴대폰 번호를 입력해야 합니다.
        - 지출증빈인 경우 사업자등록번호를 입력해야 합니다.

    - remitteeName?: string

      **예금주명**

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

  - productCount?: integer

    **상품 개수**

### API 빌링키 발급

빌링키를 발급하기 위해서는 `POST /billing-keys`를 이용하여 빌링키 발급 요청을 해야합니다.

예시코드

<div class="tabs-container">

<div class="tabs-content" data-title="API 빌링키 발급 요청">

```ts
const issueResponse = await axios({
  url: "https://api.portone.io/billing-keys",
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
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

</div>

</div>

#### 빌링키 발급 주요 파라미터

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- method: object

  **결제수단 정보**

  스마트로의 경우 가상계좌만 지원합니다.

  - card?: object

    **카드 결제 시 파라미터**

    - credential?: object

      **인증 관련 정보**

      - number?: string

        **카드 번호**

      - expiryYear?: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth?: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자 등록 번호**

      - passwordTwoDigits: string

        **비밀번호 앞 두자리**

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 고유 ID**

    - 스마트로의 경우 빌링키 발급 시 필수로 입력해야 합니다.
    - 20자 이하로만 입력 가능합니다.

### API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제를 하기 위해 `POST /payments/${PAYMENT_ID_HERE}/billing-key`를 이용하여 결제를 요청합니다.

예시코드

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
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

</div>

</div>

#### 빌링키 단건 결제 주요 파라미터

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

  - name: object

    **고객 이름**

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first?: string

        **이름**

      - last?: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

  - email: string

    **구매자 이메일**

- productCount?: integer

  **상품 개수**

### API 빌링키 예약/반복 결제

예약 결제를 하기위해서는 `POST /payments/${PAYMENT_ID_HERE}/schedule` 를 이용하여 결제를 예약합니다.

예시코드

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
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
      },
      currency: "KRW",
    },
    timeToPay: "2023-01-01 00:00:00", // 결제를 시도할 시각
  },
});
```

</div>

</div>

#### 빌링키 예약 결제 주요 파라미터

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

  - currency: string

    **결제 통화**

    결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- timeToPay: string

  **결제 예정 시점**
