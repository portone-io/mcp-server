---
title: KG이니시스 일본결제
description: KG이니시스 일본결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 가능한 결제 수단

- **결제창 일반 결제**

  `payMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드 : `CARD`
  - 편의점결제 : `CONVENIENCE_STORE`
  - 간편결제 : `EASY_PAY`

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey`파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KG이니시스 채널 사용을 명시해주세요.

KG이니시스 일본결제 기준으로 작성한 예시 코드는 아래와 같습니다.

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
    totalAmount: 10,
    currency: "CURRENCY_JPY",
    payMethod: "CARD",
    customer: {
      fullName: "matt",
      firstNameKana: "マット",
      lastNameKana: "デイモン",
      phoneNumber: "01012341234",
      email: "test@portone.io",
    },
    storeDetails: {
      storeName: "韓国ストア",
      storeNameShort: "ストア",
      storeNameEn: "Kankoku Store",
      storeNameKana: "カンコクストア",
      contactName: "contact",
      email: "store@portone.io",
      phoneNumber: "3712345678",
      openingHours: {
        open: "00:00",
        close: "23:00",
      },
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

  결제통화로 엔화 결제만 허용하며 `CURRENCY_JPY`로 입력해야 합니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - 신용카드 : `CARD`
  - 편의점 결제 : `CONVENIENCE_STORE`
  - 간편 결제 : `EASY_PAY`

- card?: object

  **카드 결제 시 파라미터**

  - installment?: object

    **할부 개월 수 설정**

    - monthOption?: object

      **할부 개월 수 설정**

      - fixedMonth?: integer

        **고정 할부 개월 수**

        0을 입력한 경우 일시불만 표시됩니다.

      - availableMonthList?: integer\[]

        **렌더링을 허용 할 할부 개월 수 리스트**

        목록에 0이 포함되어 있는 경우 일시불도 표시됩니다.
        목록에 0만 있는 경우 일시불만 표시됩니다.

- convenienceStore?: object

  **편의점 결제 시 파라미터**

  - paymentDeadline: object

    **지불 기한**

    - validHours?: integer

    **유효 시간**

    - dueDate?: string

    **만료 시점**

    시간은 ISO8601 형식으로 입력해야 합니다.

- easyPay?: object

  **간편 결제 시 파라미터**

  - easyPayProvider: string

    **간편 결제 수단**

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 ID**

    CBT 유형이 SBPS인 경우 필수 입력입니다. 입력하지 않은 경우 포트원에서 자동 채번된 식별값이 사용됩니다.

  - fullName?: string

    **구매자 전체 이름**

    - 이니시스 일본결제의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - firstName?: string

    **구매자 이름**

    - 이니시스 일본결제의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - lastName?: string

    **구매자 성**

    - 이니시스 일본결제의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - firstNameKana?: string

    **구매자 이름 (후리가나)**

    - 편의점 결제의 경우 firstNameKana + lastNameKana를 필수로 입력해야 합니다.

  - lastNameKana?: string

    **구매자 성 (후리가나)**

    - 편의점 결제의 경우 firstNameKana + lastNameKana를 필수로 입력해야 합니다.

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

- storeDetails?: object

  **상점 정보(가맹점 정보)**

  - storeName?: string

    **상점명**

    CBT 유형이 JPPG인 경우 필수 입력입니다.

  - storeNameKana?: string

    **상점명 (후리가나)**

    CBT 유형이 JPPG인 경우 필수 입력입니다.

    가타카나만 허용합니다.

  - storeNameEn?: string

    **상점명 (영문)**

    CBT 유형이 JPPG인 경우 필수 입력입니다.

    알파벳만 허용합니다.

  - storeNameShort?: string

    **상점명 (약어)**

    CBT 유형이 JPPG인 경우 필수 입력입니다.

  - contactName?: string

    **상점 연락처 정보 이름**

    CBT 유형이 JPPG인 경우 필수 입력입니다.

  - email?: string

    **상점 이메일**

    CBT 유형이 JPPG인 경우 필수 입력입니다.

  - phoneNumber?: string

    **상점 연락처**

    CBT 유형이 JPPG인 경우 필수 입력입니다.

  - openingHours?: object

    **상점 영업시간**

    CBT 유형이 JPPG인 경우 필수 입력입니다.

    - open?: string

      **영업 시작 시간**

      HH:mm 포맷으로 입력해야하며 00:00\~23:59 범위의 값만 허용합니다.

    - close?: string

      **영업 종료 시간**

      HH:mm 포맷으로 입력해야하며 00:00\~23:59 범위의 값만 허용합니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - inicis\_jp?: InicisJp

    [definition link](https://developers.portone.io/schema/browser-sdk.yml#/resources/entity/bypass/payment/InicisJp)

### 유의사항

#### 공통

<details>

<summary>`redirectUrl` 은 필수 입력입니다.</summary>

이니시스 일본결제의 경우 PC, 모바일 환경을 구분하지 않고 항상 리디렉션 방식으로 결제창이 동작합니다. 따라서 `redirectUrl` 는 항상 입력해야 합니다.

</details>

<details>

<summary>`paymentId` 에는 ASCII 문자만 허용됩니다.</summary>

`paymentId` 에는 ASCII 문자만으로 이루어진 문자열만 입력할 수 있습니다.

ASCII 문자에 포함되지 않는 한글이나 `♤`, `♡`, `♧` 등의 특수 문자는 허용되지 않습니다.

입력 가능한 ASCII 문자의 종류는 [링크](http://www.ascii-code.com/) → `ASCII printable characters` 섹션을 참고하세요.

</details>

<details>

<summary>지원되는 결제창 언어</summary>

이니시스 일본결제 결제창의 언어는 일본어로 고정입니다.

</details>

<details>

<summary>지원되는 결제 통화</summary>

KG이니시스 일본결제의 경우 `JPY`만 지원합니다.

</details>

#### 카드 결제

<details>

<summary>할부 개월 수 옵션은 일부 할부 개월 수만 지원합니다.</summary>

KG이니시스 일본결제 카드 결제 경우 할부개월 수는 3, 5, 6, 10, 12개월만 지원합니다.

</details>

<details>

<summary>이니시스 일본결제에서 지원하지 않는 카드 관련 파라미터</summary>

KG이니시스 일본결제의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `cardCompany`: 카드 결제시 사용되는 카드사 코드
- `availableCards`: 노출할 카드사 제어
- `useAppCardOnly`: 앱카드만 허용할지 여부
- `useInstallment`: 할부 사용 여부. (이니시스 일본결제의 경우 `installment` 파라미터로 직접 설정 가능합니다.)
- `useFreeInterestFromMall`: 상점부담무이자 사용 여부. (이니시스 일본결제의 경우 `installment.freeInstallmentPlans` 파라미터로 직접 설정 가능합니다.)

</details>

#### 간편 결제

<details>

<summary>이니시스 일본결제에서 지원하는 간편결제사 종류</summary>

KG이니시스 일본결제의 경우 아래 간편결제사를 지원합니다. `easyPay.easyPayProvider` 파라미터에 아래 리스트 중 원하는 값을 입력하세요.

- 아마존페이: `AMAZONPAY`
- 라쿠텐페이: `RAKUTENPAY`
- Paypay: `PAYPAY`
- dBarai: `DBARAI`
- AuPay: `AUPAY`
- Merpay: `MERPAY`

</details>

<details>

<summary>이니시스 일본결제에서 지원하지 않는 간편결제 관련 파라미터</summary>

이니시스 일본결제의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `installment`: 할부 설정
- `useCardPoint`: 카드사 포인트 사용 여부
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보
- `availablePayMethod`: 간편결제 세부 결제수단 지정 렌더링 옵션
- `availableCards`: 결제 수단으로써 사용 허가할 카드사 리스트
- `useInstallment`: 할부 사용 여부. (이니시스 일본결제의 경우 `installment` 파라미터로 직접 설정 가능합니다.)
- `useFreeInterestFromMall`: 상점부담무이자 사용 여부. (이니시스 일본결제의 경우 `installment.freeInstallmentPlans` 파라미터로 직접 설정 가능합니다.)

</details>

#### 편의점결제

<details>

<summary>`convenienceStore.paymentDeadline` 파라미터는 필수로 입력해야 합니다.</summary>

- KG이니시스 일본결제 편의점 결제의 경우 **지불기한인 `convenienceStore.paymentDeadline` 파라미터가 필수**로 입력해야 합니다.
- 지불기한은 최소 1일, 최대 30일까지만 설정 가능합니다.

</details>

<details>

<summary>편의점 결제는 입금 이전에만 취소할 수 있습니다.</summary>

</details>
