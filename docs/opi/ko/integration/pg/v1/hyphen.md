---
title: 하이픈
description: 하이픈 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/hyphen
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 가능한 결제 수단

- 간편 결제

  하이픈은 계좌 간편 결제를 전용으로 지원하는 PG사로, 등록한 계좌를 이용한 결제만 가능하며 다른 결제 수단은 지원하지 않습니다.

  따라서 `pay_method` 파라미터를 아래와 같이 설정해야 합니다.

  - 계좌이체 : `trans`

### 계좌 간편 결제란?

고객이 PG사에서 제공하는 결제 페이지에서 본인 명의의 계좌를 등록하고, 상품 구매 시 비밀번호 인증 등을 통해 등록된 계좌에서 출금하여 결제하는 서비스를 의미합니다.

### 계좌 간편 결제의 장점

계좌 간편 결제는 아래와 같은 장점을 제공합니다.

1. **우수한 사용성**

   보안 프로그램이나 추가 앱 설치 과정이 필요하지 않습니다.
   또한 복잡한 계좌 입력이나 인증 과정 없이 최초 한 번만 계좌를 등록하고 이후에는 비밀번호를 통해 간편하게 인증할 수 있습니다.

2. **낮은 수수료**

   바로 계좌 결제는 오픈 뱅킹 기반의 계좌 이체 서비스로, 신용카드 결제에 비해 낮은 수수료로 해당 서비스를 이용할 수 있습니다.

3. **빠른 정산 주기**

   하이픈의 계좌 간편 결제 서비스는 통상 D+2일 주기로 정산을 해드리고 있습니다. 빠른 정산을 통해 현금 흐름을 효율적으로 관리할 수 있습니다.

## SDK 결제 요청하기

하이픈 결제는 최신 SDK에서만 지원됩니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback**으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

하이픈 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "trans",
    merchant_uid: "orderMonthly0001", // 상점에서 관리하는 주문 번호
    name: "테스트결제",
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    amount: 1004,
    storeDetails: {
      businessName: "상호명",
    },
    bypass: {
      hyphen: {
        designCd: "#C1272C",
      },
    },
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

</div>

### 주요 파라미터

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg?: string

  **PG사 구분코드**

  `hyphen.{MID}` 형태로 지정하여 사용해야 합니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  하이픈의 경우 `trans`만 지원됩니다.

- merchant\_uid: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.
  이미 승인 완료된 `merchant_uid`로 결제를 시도하는 경우 에러가 발생합니다.

- name: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- amount: number

  **결제 금액**

  결제 금액으로 number 형식만 허용됩니다.

- buyer\_name: string

  **구매자 이름**

  하이픈의 경우 필수로 입력해야 합니다.

- storeDetails?: object

  **상점 정보**

  - businessName?: string

    **상호명**

    - 결제창에 표시될 상호명입니다. 입력하지 않으면 포트원 대표상점명으로 표시됩니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - hyphen?: object

    **하이픈에서 제공하는 파라미터 모음**

    - designCd?: string

      **결제창 디자인 색상 코드**

      - `#`으로 시작하는 여섯자리 Hex 값을 입력합니다. (ex. `#C1272C`)

### 유의사항

<details>

<summary>`merchant_uid` 허용 문자 및 길이 제한</summary>

`merchant_uid` 에는 영문, 숫자, `_`(underscore) 만으로 이루어진 문자열만 입력할 수 있습니다.

여기에 포함되지 않는 한글이나 `♤`, `♡`, `♧` 등의 특수 문자는 허용되지 않습니다.

또한 `merchant_uid`의 최대 길이는 40자이므로, 해당 길이를 넘지 않는 값으로 결제를 요청해주세요.

</details>

<details>

<summary>`name` 길이 제한</summary>

`name`의 최대 길이는 40자입니다.

</details>
