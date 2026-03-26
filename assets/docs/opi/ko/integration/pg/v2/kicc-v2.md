---
title: 이지페이(KICC) 해외결제
description: 이지페이(KICC) 해외결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 가능한 결제 수단

- **결제창 일반 결제**

  KICC 해외결제를 통해 위챗페이와 알리페이 플러스를 이용할 수 있습니다.
  이용하고자 하는 결제사 별 파라미터는 아래를 참고해주세요.

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KICC 채널 사용을 명시해주세요.

KICC 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="위챗페이">

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
    payMethod: "EASY_PAY",
    easyPay: {
      easyPayProvider: "WECHAT",
    },
    locale: "KO_KR",
    customer: {
      fullName: "PortOne",
      email: "test@example.com",
    },
  });
}
```

**주요 파라미터 설명**

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  - 고객사가 채번하는 주문 고유 번호입니다.
  - 이미 승인 완료 된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

  KICC와 위챗페이에서는 영문만 사용하는 것을 권장합니다.

- channelKey: string

  **채널 키**

  콘솔에서 채널 연동 시 생성된 채널 키입니다.

- totalAmount: number

  **결제 금액**

  결제 금액(실제 결제 금액 X 10^ 해당 currency의 scale factor, 예: $1.50 -> 150)

- currency: string

  **결제 통화 코드**

  [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) 통화 코드

  - `KRW`: 한국 원
  - `USD`: 미국 달러

- locale?: Locale

  **결제창 언어**

  - `ZH_CN`: 중국어 (중국 본토) (기본값)
  - `KO_KR`: 한국어
  - `EN_US`: 영어
  - `ZH_TW`: 중국어 (대만)

- customer?: object

  **고객 정보**

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

</div>

<div class="tabs-content" data-title="알리페이 플러스">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "PortOne Purchase",
    orderDescription: "Description for Order",
    totalAmount: 100, // 1 USD
    currency: "USD",
    payMethod: "ALIPAY_PLUS",
    alipayPlus: {
      easyPayProvider: "ALIPAY",
    },
    customer: {
      fullName: "PortOne",
      email: "test@example.com",
    },
  });
}
```

**주요 파라미터 설명**

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  - 고객사가 채번하는 주문 고유 번호입니다.
  - 이미 승인 완료 된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

  KICC와 알리페이 플러스에서는 영문만 사용하는 것을 권장합니다.

- orderDescription: string

  **주문 상세 정보**

  주문 상세 정보로 고객사에서 자유롭게 입력합니다.

  KICC와 알리페이 플러스에서는 영문만 사용하는 것을 권장합니다.

- channelKey: string

  **채널 키**

  콘솔에서 채널 연동 시 생성된 채널 키입니다.

- totalAmount: number

  **결제 금액**

  결제 금액(실제 결제 금액 X 10^ 해당 currency의 scale factor, 예: $1.50 -> 150)

- currency: string

  **결제 통화 코드**

  [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) 통화 코드

  - `KRW`: 한국 원
  - `USD`: 미국 달러

- alipayPlus: object

  **알리페이 플러스 정보**

  - easyPayProvider?: string

    **알리페이 플러스를 통해 이용할 간편결제**

    미입력 시 이용 가능한 간편결제 수단이 모두 노출되는 알리페이 플러스 통합 월렛 화면이 표기됩니다.

    - `ALIPAY`: Alipay (알리페이)
    - `TRUE_MONEY`: TrueMoney (트루머니)
    - `ALIPAY_HK`: AlipayHK (알리페이 홍콩)
    - `TOUCH_N_GO`: Touch 'n Go (터치앤고)
    - `G_CASH`: GCash (지캐시)
    - `DANA`: DANA (다나)
    - `RABBIT_LINE_PAY`: Rabbit LINE Pay (래빗 라인페이)
    - `BPI`: BPI - Bank of the Philippine Islands (필리핀 제도 은행)
    - `BOOST`: Boost (부스트)
    - `BILL_EASE`: BillEase (빌이즈)
    - `TINABA`: Tinaba (티나바)
    - `MPAY`: MPay (엠페이)
    - `KREDIVO`: Kredivo (크레디보)

- customer?: object

  **고객 정보**

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

</div>

</div>

## 유의 사항

<div class="tabs-container">

<div class="tabs-content" data-title="위챗페이">

### 결제 승인

위챗페이의 경우 위챗 앱을 이용해 QR코드를 스캔하여 결제를 진행하는 방식으로 결제창이 닫힌 이후에도 구매자가 QR코드를 이미
스캔해둔 상태라면 언제든지 결제 승인이 발생할 수 있습니다.

따라서 PC에서 callback / Mobile에서 redirect 된 이후 결제내역 조회를 통해 확인된 상태값을 100% 신뢰하지 않도록
해야하며 웹훅 연동은 필수로 진행해야합니다.

### 결제 취소

위챗페이의 경우 결제 취소가 비동기로 처리됩니다. 결제 취소 요청에 대한 응답으로 주문 상태를 변경하지 않고
웹훅을 통해 결제 취소 결과를 반영하도록 처리가 필요합니다.

### 도메인 등록

위챗페이는 KICC를 통해 결제창이 오픈될 고객사 결제 페이지 도메인에 대한 등록 요청이 필요합니다.

등록되어있지 않은 도메인에 대해서는 모바일 결제 시도 시 오류 페이지로 연결되므로 유의 바랍니다.

</div>

<div class="tabs-content" data-title="알리페이 플러스">

### 결제 승인

알리페이 플러스의 경우 일부 결제 수단은 앱으로 QR코드를 스캔하여 결제를 진행하는 방식으로 결제창이 닫힌 이후에도 구매자가 QR코드를 이미
스캔해둔 상태라면 언제든지 결제 승인이 발생할 수 있습니다.

따라서 PC에서 callback / Mobile에서 redirect 된 이후 결제내역 조회를 통해 확인된 상태값을 100% 신뢰하지 않도록
해야하며 웹훅 연동은 필수로 진행해야합니다.

</div>

</div>
