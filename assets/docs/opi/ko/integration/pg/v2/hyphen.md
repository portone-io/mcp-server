---
title: 하이픈
description: 하이픈 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/hyphen
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 가능한 결제 수단

- 간편 결제

  하이픈은 계좌 간편 결제를 전용으로 지원하는 PG사로, 등록한 계좌를 이용한 결제만 가능하며 다른 결제 수단은 지원하지 않습니다.

  따라서 `payMethod` 파라미터를 아래와 같이 설정해야 합니다.

  - 간편결제 : `EASY_PAY`

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

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 하이픈 채널 사용을 명시해주세요.

하이픈 기준으로 작성한 예시 코드는 아래와 같습니다.

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
    currency: "CURRENCY_KRW",
    payMethod: "EASY_PAY",
    storeDetails: {
      businessName: "상호명",
    },
    customer: {
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
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

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- totalAmount: number

  **결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다. 하이픈의 경우 해당 값은 `EASY_PAY`로 고정해주세요.

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

    - 하이픈의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - firstName?: string

    **구매자 이름**

    - 하이픈의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - lastName?: string

    **구매자 성**

    - 하이픈의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

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

#### 예시 코드

```json title="bypass 예시 코드"
{
  "bypass": {
    "hyphen": {
      "designCd": "#C1272C"
    }
  }
}
```

### 유의사항

<details>

<summary>`paymentId` 허용 문자 및 길이 제한</summary>

`paymentId` 에는 영문, 숫자, `_`(underscore) 만으로 이루어진 문자열만 입력할 수 있습니다.

여기에 포함되지 않는 한글이나 `♤`, `♡`, `♧` 등의 특수 문자는 허용되지 않습니다.

또한 `paymentId`의 최대 길이는 50자이므로, 해당 길이를 넘지 않는 값으로 결제를 요청해주세요.

</details>

<details>

<summary>`orderName` 길이 제한</summary>

`orderName`의 최대 길이는 100byte 입니다. (UTF-8 인코딩 기준)

</details>
