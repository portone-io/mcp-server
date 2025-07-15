---
title: 스마트로(신모듈)
description: 스마트로 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/smartro-v2
---

## 1. 스마트로 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 최신 JavaScript SDK로 업데이트하기 <a href="#2." id="2." />

스마트로(신모듈) 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**스마트로 신모듈을 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다**

</div>

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)문서를 통해 최신 SDK를 설치해주세요.

## 3.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
스마트로 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)`
호출 후 **callback**으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "orderNo0001", // 상점에서 생성한 고유 주문번호 주의: 스마트로 일반결제시 주문 번호에 특수문자 사용 불가
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    period: {
      from: "20230512", //YYYYMMDD
      to: "20230515", //YYYYMMDD
    },
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `smartro_v2` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank(가상계좌)
  - phone (휴대폰소액결제)
  - lpay (LPAY)
  - kakaopay (카카오페이)
  - naverpay (네이버페이)
  - payco (페이코)
  - pinpay (핀페이)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.
  주의: 스마트로 일반결제시 주문 번호에 특수문자 사용 불가

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

  소수점 두번째 자리까지 허용합니다.

- buyer\_tel: string

  **구매자 전화번호**

  주의: 스마트로 일반 결제시 필수 입력

- vbank\_due: string

  **가상계좌 입금기한 (YYYY-MM-DD)**

  스마트로의 경우 필수 입력이며 날짜는 무조건 23:59:59로 설정 됨

- escrow: boolean

  **에스크로 결제 여부**

- period?: object

  **서비스 제공 기간**

  날짜만 입력이 가능하며(시간은 무시) 시작 날짜와 종료 날짜를 모두 입력해야 합니다.

  - from: string

    **YYYYMMDD**

  - to: string

    **YYYYMMDD**

</details>

<details>

<summary>

<strong>결제 가능 결제수단</strong>

</summary>

- card + 에스크로, 다이렉트
- vbank + 에스크로
- trans + 에스크로
- phone
- lpay
- naverpay
- kakaopay
- pinpay
- payco

</details>

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

인증결제창 호출 파라미터에서 **customer\_uid**, **customer\_id**값을 추가하면 비 인증 결제창을 호출할 수 있습니다.
비 인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 'card'만 지원됩니다.
    merchant_uid: "orderMonthly0001", // 상점에서 관리하는 주문 번호 주의: 스마트로 일반결제시 주문 번호에 특수문자 사용 불가
    name: "최초인증결제",
    amount: 1000, // 실제 승인은 발생되지 않고 오직 빌링키만 발급됩니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    customer_id: "matthew", //고객사가 회원에게 부여한 고유 ID로 필수 입력.
  },
  function (rsp) {
    // callback 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `smartro_v2` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

  주의: 스마트로 일반결제시 주문 번호에 특수문자 사용 불가

- customer\_uid: string

  **빌링키 발급을 위한 결제 수단을 특정하는 고유 번호**

  빌링키 발급시 필수 입력

- customer\_id: string

  **구매자 식별자**

  주의: 스마트로 빌링키 발급시 필수 입력으로 입력 길이는 **20자**로 제한됩니다.

- m\_redirect\_url: string

  **리다이렉트 URL**

  리디렉션 방식으로 진행할 경우, 트랜잭션 종료 이후 302 리디렉션 될 고객사 URL

  스마트로의 경우 모바일 환경에서 **리디렉션 방식으로 빌링키 발급창이 렌더링 되기 때문에 필수입력입니다.**

</details>

</div>

</div>

<details>

<summary>

<strong>가능한 결제 환경</strong>

</summary>

- PC (iframe)
- 모바일 (리디렉션)

</details>
