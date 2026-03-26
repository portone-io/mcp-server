---
title: 갤럭시아머니트리
description: 갤럭시아머니트리 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/galaxia
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 가능한 결제 수단

- **결제창 일반 결제**

  `payMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드 : `CARD`
  - 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액 결제 : `MOBILE`
  - 상품권 : `GIFT_CERTIFICATE`
  - 간편결제 : `EASY_PAY`

- **결제창 빌링키 발급**

  `billingKeyMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `CARD`

- **결제창 빌링키 발급과 동시에 결제**

  `billingKeyAndPayMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 휴대폰: `MOBILE`

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 갤럭시아머니트리 채널 사용을 명시해주세요.

갤럭시아머니트리 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "KRW",
    payMethod: "CARD",
    customer: {
      customerId: "customer-1234", // 고객사가 구매자에게 부여한 고유 ID (필수)
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
    bypass: {
      galaxia: {
        ITEM_CODE: "상품코드", // 필수, 최대 10바이트
      },
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

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. (최대 64자)

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다. 갤럭시아머니트리의 경우 필수로 입력해야 합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- totalAmount: number

  **결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다. 갤럭시아머니트리의 경우 `KRW`만 지원됩니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - 신용카드 : `CARD`
  - 실시간 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제 : `MOBILE`
  - 상품권 : `GIFT_CERTIFICATE`
  - 간편 결제 : `EASY_PAY`

- taxFreeAmount?: number

  **면세 금액** (기본값: 0)

- vatAmount?: number

  **부가세 금액**

  미 입력시 과세 금액의 1/11로 자동 계산됩니다.

- customer: object

  **고객 정보**

  - customerId: string

    **구매자 고유 ID**

    고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다. 갤럭시아머니트리의 경우 필수 입력이며 최대 20자까지 허용됩니다.

  - fullName?: string

    **구매자 전체 이름**

  - firstName?: string

    **구매자 이름**

  - lastName?: string

    **구매자 성**

  - phoneNumber?: string

    **구매자 연락처**

    계좌이체 결제 시 필수 입력입니다.

  - email?: string

    **구매자 이메일**

- redirectUrl?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  갤럭시아머니트리의 경우 **모바일 환경에서 필수 입력**입니다.

- noticeUrls?: string\[]

  **트랜잭션 종료 후 웹훅이 발송 될 고객사 서버 URL**

  설정시 콘솔에 설정된 웹훅 URL은 override 되며 해당 주소로만 웹훅이 발송됩니다.

- appScheme?: string

  **IOS 앱에서 결제시 카드/은행 앱에서 인증 후 복귀 될 고객사 커스텀 앱 URL Scheme**

  - 예: `portone://`
  - 주의: **IOS 앱 결제시 필수** 입력이며 **앱이 아닌 모바일 웹 결제시에는 입력하지 마세요.**

- isEscrow?: boolean

  **에스크로 결제 여부** (기본값: false)

  갤럭시아머니트리의 경우, 계좌이체/가상계좌 결제시 에스크로 결제가 허용됩니다.

- virtualAccount?: object

  **가상계좌 결제 관련 설정**

  - accountExpiry?: object

    **입금 만료 기한**

    갤럭시아머니트리의 경우 가상계좌 결제시 **필수 입력**입니다.

    - validHours?: integer

      **유효 시간**

    - dueDate?: string

      **만료 시점**

      시간은 RFC 3339 date-time 형식으로 입력해야 합니다.

- card?: object

  **카드 결제 관련 설정**

  - cardCompany?: string

    **카드사 다이렉트 호출 시 카드사 코드**

    [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

  - installment?: object

    **할부 설정**

    - monthOption?: object

      **할부 개월 수 옵션**

      - fixedMonth?: number

        **고정 할부 개월 수**

        일시불일 시 0으로 설정합니다.

      - availableMonthList?: number\[]

        **선택 가능한 할부 개월 수 목록**

        예시: `[0, 2, 3, 4, 5, 6]` - 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능

- mobile?: object

  **휴대폰 결제 관련 설정**

  - carrier?: string

    **휴대폰 통신사 코드**

    `SKT`, `KT`, `LGU`, `HELLO`, `KCT`, `SK7`

- giftCertificate?: object

  **상품권 결제 관련 설정**

  - giftCertificateType?: string

    **상품권 종류**

    - 컬쳐랜드: `CULTURELAND`
    - 스마트문상: `SMART_MUNSANG`
    - 도서문화상품권: `BOOKNLIFE`
    - 해피머니: `HAPPYMONEY`

- easyPay?: object

  **간편결제 관련 설정**

  - easyPayProvider?: string

    **간편결제사 코드**

    - 카카오페이: `KAKAOPAY`
    - 네이버페이: `NAVERPAY`
    - 토스페이: `TOSSPAY`
    - 삼성페이: `SAMSUNGPAY`
    - 애플페이: `APPLEPAY`
    - 페이코: `PAYCO`
    - 머니트리: `MONEYTREE`

- bypass: object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - galaxia: object

    **갤럭시아머니트리 전용 파라미터**

    - ITEM\_CODE: string

      **구매 상품코드**

      갤럭시아머니트리에서 발급받은 상품 코드를 입력합니다. (최대 10자, **필수**)

### 유의사항

<details>

<summary>갤럭시아머니트리 지원 결제 수단</summary>

- CARD (신용카드)

- TRANSFER (실시간 계좌이체) + 에스크로

- VIRTUAL\_ACCOUNT (가상계좌) + 에스크로

- MOBILE (휴대폰소액결제)

- GIFT\_CERTIFICATE (상품권)
  - CULTURELAND (컬쳐랜드)
  - SMART\_MUNSANG (스마트문상)
  - BOOKNLIFE (도서문화상품권)
  - HAPPYMONEY (해피머니)

- EASY\_PAY (간편결제)
  - KAKAOPAY (카카오페이)
  - NAVERPAY (네이버페이)
  - TOSSPAY (토스페이)
  - SAMSUNGPAY (삼성페이)
  - APPLEPAY (애플페이)
  - PAYCO (페이코)
  - MONEYTREE (머니트리)

</details>

<details>

<summary>가능한 트랜잭션 환경</summary>

- PC (iframe)
- 모바일 (리디렉션)

</details>

## SDK 빌링키 발급 요청하기

빌링키 발급 요청 시에는 `requestIssueBillingKey` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 갤럭시아머니트리 채널 사용을 명시해주세요.

갤럭시아머니트리 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyMethod: "CARD", // 갤럭시아머니트리의 경우 'CARD'만 지원됩니다.
    issueId: "test-issueId",
    issueName: "빌링키 발급",
    displayAmount: 1000,
    currency: "KRW",
    customer: {
      customerId: "customer-1234", // 고객사가 구매자에게 부여한 고유 ID (필수)
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
    bypass: {
      galaxia: {
        ITEM_CODE: "상품코드", // 필수, 최대 10바이트
      },
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

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyMethod: string

  **빌링키 발급수단**

  갤럭시아머니트리는 빌링키 발급 수단으로 카드만을 지원하므로 해당 파라미터는 `CARD`로 고정해야 합니다.

- issueId: string

  **빌링키 발급 건 고유 ID**

  고객사에서 채번하여 사용해야 합니다.

- issueName: string

  **빌링키 발급 시 결제창에 표시되는 제목**

  갤럭시아머니트리의 경우 필수로 입력해야 합니다.

- displayAmount?: number

  **결제창에 표시될 금액**

  빌링키 발급 시 amount가 0이거나 미입력시 1000원으로 노출됩니다. (결제 발생하지 않음)

- currency?: string

  **결제 통화**

  갤럭시아머니트리의 경우 `KRW`만 지원됩니다.

- customer: object

  **고객 정보**

  - customerId: string

    **구매자 고유 ID**

    고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다. 갤럭시아머니트리의 경우 필수 입력입니다.

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

- redirectUrl?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  갤럭시아머니트리의 경우 **모바일 환경에서 필수 입력**입니다.

- bypass: object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - galaxia: object

    **갤럭시아머니트리 전용 파라미터**

    - ITEM\_CODE: string

      **구매 상품코드**

      고객사에서 내부적으로 관리하는 상품 코드를 입력합니다. (최대 10자, **필수**)

<details>

<summary>갤럭시아머니트리 지원 빌링키 발급 수단</summary>

- CARD (카드)

</details>

## SDK 빌링키 발급 및 결제 요청하기

빌링키 발급과 동시에 결제 요청 시에는 `requestIssueBillingKeyAndPay` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 갤럭시아머니트리 채널 사용을 명시해주세요.

갤럭시아머니트리 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 및 결제 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKeyAndPay() {
  PortOne.requestIssueBillingKeyAndPay({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyAndPayMethod: "MOBILE", // 갤럭시아머니트리의 경우 'MOBILE'만 지원됩니다.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "월간 이용권 정기결제",
    totalAmount: 1000, // 전달한 금액 만큼 실제로 승인이 됩니다.
    currency: "KRW",
    customer: {
      customerId: "customer-1234", // 고객사가 구매자에게 부여한 고유 ID (필수)
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
    bypass: {
      galaxia: {
        ITEM_CODE: "상품코드", // 필수, 최대 10바이트
      },
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

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyAndPayMethod: string

  **빌링키 발급 및 결제수단**

  갤럭시아머니트리의 경우, 빌링키 발급과 동시에 결제 수단은 `MOBILE`만 허용되며 **반드시 `MOBILE`을 필수로 입력해주셔야** 합니다.

- paymentId: string

  **주문 번호**

  매번 고유하게 채번되어야 합니다.

- orderName: string

  **주문명**

  갤럭시아머니트리의 경우 필수로 입력해야 합니다.

- totalAmount: number

  **결제 금액**

  **string** 이 아닌 점에 유의하세요. 전달한 금액 만큼 실제로 승인이 됩니다.

- currency?: string

  **결제 통화**

  갤럭시아머니트리의 경우 `KRW`만 지원됩니다.

- customer: object

  **고객 정보**

  - customerId: string

    **구매자 고유 ID**

    고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다. 갤럭시아머니트리의 경우 필수 입력이며 최대 20자까지 허용됩니다.

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

- redirectUrl?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  갤럭시아머니트리의 경우 **모바일 환경에서 필수 입력**입니다.

- mobile?: object

  **휴대폰 결제 관련 설정**

  - carrier?: string

    **휴대폰 통신사 코드**

    `SKT`, `KT`, `LGU`, `HELLO`, `KCT`, `SK7`

- bypass: object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - galaxia: object

    **갤럭시아머니트리 전용 파라미터**

    - ITEM\_CODE: string

      **구매 상품코드**

      갤럭시아머니트리에서 발급받은 상품 코드를 입력합니다. (최대 10자, **필수**)

<details>

<summary>갤럭시아머니트리 지원 빌링키 발급과 동시에 결제 수단</summary>

- MOBILE (휴대폰소액결제)

</details>

## 연동 유의사항

### 갤럭시아머니트리 필수 파라미터

갤럭시아머니트리 연동 시 아래 파라미터는 필수로 입력해야 합니다.

- `bypass.galaxia.ITEM_CODE`: 고객사에서 내부적으로 관리하는 상품 코드 (최대 10자)
- `customer.customerId`: 고객사가 구매자에게 부여한 고유 ID (최대 20자)
- `orderName`: 주문명

### 모바일 결제 시 필수 파라미터

모바일 환경에서 결제 시 `redirectUrl` 파라미터를 필수로 입력해야 합니다.

### 가상계좌 결제 시 필수 파라미터

가상계좌 결제 시 `virtualAccount.accountExpiry` 파라미터를 필수로 입력해야 합니다.

### 빌링키 발급 제약사항

- **결제창 빌링키 발급**: 카드(`CARD`)만 지원
- **결제창 빌링키 발급과 동시에 결제**: 휴대폰(`MOBILE`)만 지원

### 지원 통화

갤럭시아머니트리는 `KRW`만 지원합니다.
