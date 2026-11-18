---
title: 토스페이먼츠
description: 토스페이먼츠 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/newtoss/readme
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.
- V2 결제 모듈을 사용하시려면 토스페이먼츠(신모듈)로 연동하셔야 합니다.

(관련 이미지 첨부)

## 가능한 결제수단

- **일반 결제**
  - `payMethod`파라미터를 결제수단에 따라 아래와 같이 설정해야 합니다.
    - 신용카드 : `CARD`
    - 퀵계좌이체 : `TRANSFER`
    - 가상계좌 : `VIRTUAL_ACCOUNT`
    - 휴대폰 소액결제 : `MOBILE`
    - 간편 결제 : `EASY_PAY`
    - 상품권 결제 : `GIFT_CERTIFICATE`

- **빌링키 발급**
  - `billingKeyMethod`파라미터를 결제수단에 따라 아래와 같이 설정해야 합니다.
    - 신용카드 : `CARD`
    - 퀵계좌이체 : `TRANSFER`

## SDK 결제 및 빌링키 발급 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출하고, 빌링키 발급 시에는 `requestIssueBillingKey` 함수를 호출해야합니다.
`channelKey` 파라미터에 결제 채널 연동 시 입력한 채널 키를 지정하여 토스페이먼츠 연동임을 명시해주세요.
만약 `channelKey`가 입력되지 않는 경우 `pgProvider` 파라미터에 입력된 값에 따라 결제 및 빌링키 발급 창이 호출됩니다.

토스페이먼츠 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    paymentId: `payment-{${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "KRW",
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    payMethod: "CARD",
  });
}
```

</div>

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

## SDK 구독 등록 요청하기

[구독 결제](https://developers.portone.io/opi/ko/extra/subscription/intro)를 사용하는 경우 `requestSubscriptionRegistration` 함수로 결제수단 등록과 첫 회차 결제를 한 번에 처리할 수 있습니다.
토스페이먼츠 채널은 결제창에서 빌링키를 발급한 뒤 포트원이 그 빌링키로 첫 회차를 결제합니다.
금액, 주문명, 구매자 정보는 사전 등록한 구독에서 가져오므로 전달하지 않습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 구독 등록 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestSubscriptionRegistration() {
  PortOne.requestSubscriptionRegistration({
    storeId: "store-00000000-0000-0000-0000-000000000000", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-00000000-0000-0000-0000-000000000000", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    subscriptionId: "subscription-0193c1a2", // 구독 사전 등록 API로 만든 구독 아이디를 입력해주세요.
    registrationSecret: "rsec_...", // 구독 사전 등록 API 응답의 registrationSecret을 입력해주세요.
    billingKeyMethod: "CARD",
  });
}
```

</div>

</div>

구독 사전 등록, 결과 확인, 파라미터 설명은 [구독 결제 연동하기](https://developers.portone.io/opi/ko/extra/subscription/integration)를 참고해주세요.

## API 빌링키 발급 및 예약/반복 결제 요청하기

빌링키를 발급하기 위해서는 `POST /billing-keys`를 이용하여 빌링키 발급 요청을 해야합니다. 이후
발급된 빌링키로 예약/반복 결제를 하기위해 `POST /payments/${PAYMENT_ID_HERE}/schedules` 를 이용하여
결제를 예약합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 빌링키 발급 요청">

```ts
// ... 빌링키 발급
const issueResponse = await axios({
  url: `https://api.portone.io/billing-keys`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey,
    customer: {
      id: customerId,
    },
    method: {
      card: {
        credential: {
          number: cardNumber,
          expiryYear,
          expiryMonth,
          birthOrBusinessRegistrationNumber,
          passwordTwoDigits,
        },
      },
    },
  },
});
```

</div>

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
async function schedulePayment() {
  // 포트원 결제 예약 API 호출
  const response = await axios({
    url: `https://api.portone.io/payments/${encodeURIComponent(PAYMENT_ID_HERE)}/schedules`,
    method: "post",
    headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
    data: {
      payment: {
        billingKey: BILLING_KEY_HERE,
        orderName: "월간 이용권 정기결제",
        customer: {
          id: CUSTOMER_ID_HERE,
          // 고객 정보가 필요한 경우 API 명세에 따라 추가해주세요.
        },
        amount: {
          total: 8900,
        },
        currency: "KRW",
      },
      timeToPay: "2023-08-24T14:15:22Z", // 결제를 시도할 시각
    },
  });
  // 결제 예약 이후 로직을 구성해주세요.
}
```

</div>

</div>

## 주요 파라미터

- storeId: string

  **상점 ID**

  고객사의 상점을 식별하는 고유한 값입니다.

- paymentId: string

  **결제 ID**

  고객사가 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- orderName: string

  **주문명**

  고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  콘솔의 결제 연동 메뉴에 표시되는 채널 키를 입력해야 합니다.

- totalAmount: number

  **결제 금액**

  결제를 원하는 통화(`currency`)별 scale factor(소수점 몇 번째 자리까지 유효한지)를 고려한 정수로 입력합니다.

- currency: string

  **결제 통화**

  원화 결제를 원할 시 `KRW`로 입력합니다.

- payMethod: string

  **결제수단 코드**

  결제수단을 구분하는 코드입니다. 원하는 결제수단 값을 입력해야 합니다.

## 유의할 파라미터 - SDK

### 결제/빌링키 발급 공통

- windowType?: object

  **결제창 호출 방식**

  토스페이먼츠의 경우 PC는 `IFRAME`, mobile은 `REDIRECTION`만 지원되며 이외의 다른 방식으로 결제창을 호출할 경우 에러를 리턴합니다. 파라미터를 채우지 않을 경우 자동으로 아래와 같이 세팅됩니다.

  ```json
  {
    "pc": "IFRAME",
    "mobile": "REDIRECTION"
  }
  ```

- locale?: string

  **결제창 언어**

  토스페이먼츠의 경우 `KO_KR`만 지원합니다. 이외의 값을 넣어도 무시됩니다.

- redirectUrl?: string

  **결제 후 리다이렉트 URL**

  모바일 환경에서 결제 요청 시 `REDIRECTION` 타입이므로, 필수로 입력해야 합니다.

### 결제 (`requestPayment`)

- easyPay?: object

  **간편결제 파라미터**

  - easyPayProvider?: string

    **간편결제사**

    간편결제 결제 요청 시, 사용하고자 하는 간편 결제사에 따라 아래 값 중 하나를 입력합니다.

    - 페이코 : `PAYCO`
    - 삼성페이 : `SAMSUNGPAY`
    - SSG페이 : `SSGPAY`
    - 카카오페이 : `KAKAOPAY`
    - 네이버페이 : `NAVERPAY`
    - L페이 : `LPAY`
    - 토스페이 : `TOSSPAY`
    - 애플페이 : `APPLEPAY`
    - 페이팔 : `PAYPAL`

- giftCertificate?: object

  **상품권 결제 파라미터**

  - giftCertificateType?: string

    **상품권 종류**

    상품권 결제 요청 시, 사용하고자 하는 상품권 종류에 따라 아래 값 중 하나를 입력합니다.

    - 도서문화상품권 : `BOOKNLIFE`
    - 스마트문상 ((구)게임문화상품권) : `SMART_MUNSANG`
    - 컬쳐랜드 문화상품권 : `CULTURELAND`

- paymentId: string

  **결제 ID**

  토스페이먼츠를 사용하는 경우 영문 대소문자, 숫자, 특수문자(`-`, `_`)만 허용되며, 6자 이상 64자 이하만 가능합니다.

- currency: string

  **결제통화**

  토스페이먼츠의 경우 원화(`KRW`) 결제가 기본이며, 페이팔 결제에선 `USD`만 허용됩니다. 그 외 통화는 에러를 리턴합니다.

- country?: string

  **국가 코드**

  페이팔 결제 시 필수입니다. ISO 3166-1 alpha-2 형식의 국가 코드를 입력합니다.

- products?: object\[]

  **구매 상품 상세 정보**

  페이팔 결제 시 사용합니다. 각 상품의 `amount × quantity` 합계는 `totalAmount`와 반드시 일치해야 하며, 일치하지 않으면 에러가 리턴되고 결제창이 호출되지 않습니다.

  - id: string

    **상품 ID**

    각 항목을 고유하게 식별하는 값입니다.

  - name: string

    **상품명**

  - amount: number

    **상품 단위 가격**

    정수로 입력합니다. 해외 통화의 경우 [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)의 최소 단위(minor unit)를 기준으로 합니다. (예: USD는 100배 — `$2.99` → `299`)

  - quantity: number

    **상품 수량**

  - description: string

    **상품 설명**

  ```json
  [
    {
      "id": "1666779119262",
      "name": "Blue Widget",
      "code": "WIDGET_BLUE",
      "amount": 2999,
      "quantity": 1
    },
    {
      "id": "1666779134572",
      "name": "Red Hat",
      "code": "HAT_RED",
      "amount": 1500,
      "quantity": 1
    }
  ]
  ```

- isCulturalExpense?: boolean

  **문화비 지출 여부**

  문화비(도서, 공연, 박물관 등) 지출 여부를 구분하고자 할 때 입력합니다.

- card?: object

  **카드 결제 파라미터**

  - installment?: object

    **할부 결제 옵션**

    - monthOption?: object

      **할부 개월 옵션**

      - fixedMonth?: number

        **고정 할부 개월수**

        토스페이먼츠의 경우 현대카드는 1만원, 그 외는 5만원 이상 결제에 대해서만 적용됩니다.

- bypass?: object

  **결제대행사 전용 파라미터**

  토스페이먼츠에서는 아래의 파라미터를 지원합니다.

  - tosspayments?: object

    **토스페이먼츠 전용 bypass 컨테이너**

    - discountCode?: string

      **즉시 할인 코드**

      토스페이먼츠와 고객사 간의 계약에 따라 프로모션을 적용할 때 사용합니다. 카드사 고유 번호를 입력합니다.

    - useInternationalCardOnly?: boolean

      **해외 카드 전용 결제 여부**

      `true`로 설정하면 해외 카드로만 결제가 가능하도록 제한합니다.

    - paypal?: object

      **페이팔 결제 전용 파라미터**

      자세한 사용 방법은 [페이팔 (해외 간편 결제)](#페이팔-해외-간편-결제) 섹션을 참고하세요.

      - shipping?: object

        **배송 정보**

        페이팔 Seller Protection 자격 충족을 위해 권장되는 배송지 정보입니다.

        - fullName?: string

          **수령인 이름**

          페이팔 결제창/배송 라벨에 표시됩니다.

        - address?: object

          **배송지 주소**

          - country: string

            **국가 코드**

            ISO 3166-1 alpha-2 형식의 국가 코드를 입력합니다. (예: 미국 `"US"`, 한국 `"KR"`)
            `address` 객체를 전달할 경우 반드시 입력해야 합니다.

          - line1?: string

            **주소 첫 번째 줄**

            도로명/번지 등 기본 주소를 입력합니다. (예: `"706 E Alisal St"`)

          - line2?: string

            **주소 두 번째 줄**

            동·호수, 빌딩명 등 상세 주소를 입력합니다. (예: `"Suite 200"`)

          - area1?: string

            **상위 행정구역**

            주(state) / 도(province) / 광역시 등 국가별 상위 행정구역을 입력합니다. (예: 미국 캘리포니아주 `"CA"`)

          - area2: string

            **도시(city) 명**

            도시명을 입력합니다. (예: `"Salinas"`)

          - postalCode?: string

            **우편번호**

            중국, 일본, 프랑스, 독일 등 페이팔이 요구하는 일부 국가에서는 필수이며, 그 외 국가에서는 선택입니다.

      - setTransactionContext?: object

        **Set Transaction Context (STC)**

        페이팔의 부정 거래·결제 취소·환불 등 리스크 관리에 활용되는 자유 JSON 객체입니다. 결제 거래의 안전성과 신뢰성 확보를 위해 반드시 전달해야 합니다.

        업종별 권장 STC 키 정의는 [페이팔 STC 가이드](https://static.tosspayments.com/public/STC.pdf)를 참고해 업종(industry)에 맞는 파라미터를 추가합니다. 문서 표의 `Data Field Name` 컬럼 값을 객체의 key로, 같은 행의 `Description`에 부합하는 값을 객체의 value로 입력합니다.

  ```json
  {
    "tosspayments": {
      "discountCode": "즉시 할인 코드(카드사 고유 번호)",
      "useInternationalCardOnly": true,
      "paypal": {
        "shipping": {
          "fullName": "John Smith",
          "address": {
            "country": "US",
            "line1": "706 E Alisal St",
            "area1": "CA",
            "area2": "Salinas",
            "postalCode": "93905"
          }
        },
        "setTransactionContext": {
          "sender_account_id": "10000600",
          "sender_email": "john@example.com",
          "sender_country_code": "US"
        }
      }
    }
  }
  ```

### 빌링키 발급 (`requestIssueBillingKey`)

- 없음

## 연동 유의사항

### 토스페이먼츠와 사전 계약이 필요한 경우

아래의 기능을 사용하려면 사전 신청을 통해 토스페이먼츠와 계약을 완료해야 합니다.

계약을 하지 않은 경우에 해당 기능을 이용하여 결제 시 결제 승인에 실패하거나, 승인에 성공하더라도 의도한 바와 다른 응답을 받을 수 있습니다.
(ex. 에스크로 결제를 요청하여 결제를 진행하였으나 비-에스크로 결제 응답을 받는 경우)

- 휴대폰 소액결제
- 간편결제
- 상품권 결제
- 면세 / 복합과세
- 신용카드 할부
- 상점 분담 무이자 할부
- 카드사 포인트 사용
- 에스크로
- 페이팔 (해외결제)

### 카드 결제

- `card.useAppCardOnly` 파라미터는 일부 카드사에 대해서만 적용 가능합니다.
  - 지원 가능한 카드 : 국민, 농협, 롯데, 삼성, 신한, 현대, 우리, 하나
  - 지원 불가능한 카드 : 씨티

- `card.installment.monthOption.availableMonthList` 파라미터의 경우 다른 PG사들과 다르게 동작합니다.

  - 해당 파라미터로 결제창에 랜더링 될 할부 리스트를 제어할 수 있습니다. 다른 PG사의 경우 전달한
    값만 랜더링 되지만, 토스페이먼츠의 경우에는 토스페이먼츠 자체 정책에 따라 **일시불 \~ 전달한 값
    중 최대값까지 모두** 랜더링됩니다.

  <details>

  <summary>파라미터 사용 예시 </summary>

  - 예1. 일시불만 허용하고 싶은 경우 (토스페이먼츠 가능)

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [0]
          }
        }
      }
    }
    ```

    - 예2. 5개월만 허용하고 싶은 경우 (토스페이먼츠 불가능)

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [5]
          }
        }
      }
    }
    ```

    - 예3. 다른 PG사 호출 시 일시불\~5개월까지 허용하고 싶은 경우

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [0, 1, 2, 3, 4, 5]
          }
        }
      }
    }
    ```

    - 예4. 토스페이먼츠 호출 시 일시불\~5개월까지 허용하고 싶은 경우

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [0, 1, 2, 3, 4, 5] // [5], [3,5] 로 입력해도 됨
          }
        }
      }
    }
    ```

    - 예5. 토스페이먼츠 호출 시 3개월과 5개월까지 허용하고 싶은 경우 -> 불가능

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [0, 1, 2, 3, 4, 5] // [5], [3,5] 로 입력해도 됨
          }
        }
      }
    }
    ```

    - 예6. 다른 PG사 호출 시 3개월과 5개월까지 허용하고 싶은 경우

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [3, 5]
          }
        }
      }
    }
    ```

  </details>

- 무이자 할부가 적용 되어도 ISP 계열 카드로 결제시에는 `무이자` 표기가 되지 않습니다. 고객사은
  토스페이먼츠와 사전 계약 또는 카드사 정책에 따라 무이자 할부 기능을 사용할 수 있습니다. 이에 따라
  결제창 내에서 각 카드사별 최대 무이자 할부 개월 수에 따라 할부 개월 수 옆에 `무이자` 또는 `무`라고
  표기됩니다.

  <details>

  <summary> 예시 </summary>

  - 예1. 삼성카드 - 최대 3개월 무이자 할부 적용 -> 3개월까지 `무` 표기

    (관련 이미지 첨부)

  - 예2. BC카드 - 최대 12개월 무이자 할부 적용 -> 표기되지 않음 -> 실제 결제 승인 시 무이자 할부 적용 됩니다. 이는 ISP 계열 카드사 결제 시 사용되는 페이북 앱 특성에 따른 것으로 실제 결제 승인시에는 정상적으로 무이자 할부가 적용됩니다.

    (관련 이미지 첨부)

  </details>

- ISP 계열 카드 및 간편결제의 경우 해당 앱 내에서 할부 기간 선택이 가능합니다.
  - 간편결제의 경우 모바일 웹에서 결제 요청 시 토스페이먼츠 결제창 내에서의 할부기간 선택은 불가능하며, 간편결제 앱 내에서 할부 선택이 가능합니다.
  - ISP 계열 카드의 경우 PC 웹에서 결제 요청 시 토스페이먼츠 결제창 내에서의 할부기간 선택은 불가능하며, ISP 앱 내에서 할부 선택이 가능합니다.

- 카카오페이의 경우 카카오페이 정책 상 13개월 이상 할부 결제를 지원하지 않기 때문에, 카카오페이로 결제 요청 시에는 최대 12개월까지만 할부 결제가 가능합니다.

### 가상계좌

- 토스페이먼츠를 통한 가상계좌는
  경남은행, 광주은행, KB국민은행, IBK기업은행, NH농협은행, DGB대구은행,
  부산은행, 새마을금고, Sh수협은행, 신한은행, 우리은행, 우체국예금보험, 하나은행에서 발급받을 수 있습니다.

### 카드사 다이렉트 호출

- 토스페이먼츠의 경우 카드사 다이렉트 (`card.cardCompany`) 호출 시 할부 결제를 하려면 고정 할부
  개월수 (`card.installment.monthOption.fixedMonth`)를 입력한 후 요청해야합니다. 만약, `fixedMonth`
  값을 전달하지 않는 경우에는 무조건 **일시불**로 결제가 됩니다.

  - 카드사 다이렉트 호출 기능을 사용하고자 한다면 자체적으로 구매자가 할부 개월 수를 선택할 수 있는 UI/UX를 구현한 뒤 결제 요청 시 해당 값을 함께 요청해주셔야 합니다.

  <details>

  <summary> 예시 </summary>

  - 예1. 현대카드 다이렉트 호출 후 결제 시 일시불로 결제됩니다.

    ```json
    {
      // ... 기타 파라미터
      "card": {
        "cardCompany": "HYUNDAI_CARD"
      }
    }
    ```

    - 예2. 삼성카드 다이렉트 호출 후 결제 시 5개월 할부로 결제 됩니다.

    ```json
    {
      // ... 기타 파라미터
      "card": {
        "cardCompany": "SAMSUNG_CARD",
        "installment": {
          "monthOption": {
            "fixedMonth": 5
          }
        }
      }
    }
    ```

  </details>

- 고정 할부 개월수 (`card.installment.monthOption.fixedMonth`)를 입력한 후 결제 요청 시 앱카드
  내에서 확인이 가능합니다. 결제창 혹은 앱카드 내에서 개월수가 확인되지 않더라도 실제 결제 승인 시
  `fixedMonth`에 요청한 값으로 승인 됩니다.

  <details>

  <summary> 예시 </summary>

  - 예1. BC카드 다이렉트 호출 후 결제 시 5개월 할부로 결제 됩니다.

  ```json
  {
    // ... 기타 파라미터
    "card": {
      "cardCompany": "BC_CARD",
      "installment": {
        "monthOption": {
          "fixedMonth": 5
        }
      }
    }
  }
  ```

  (관련 이미지 첨부)

  </details>

- 페이북을 통한 ISP 계열 카드 결제 시 실물 카드 번호와 다를 수 있습니다. 토스페이먼츠가 실제 카드
  번호와 다른 카드 번호를 전달하고 있어 결제 내역 단건 조회 (POST `/payments/{payment_id}`) 시
  응답되는 `payment_method_detail.card.detail.bin` 정보가 정확하지 않을 수 있습니다.

- 사파리 브라우저에서는 페이북 결제 시 팝업 호출 이슈가 있어 ISP 계열 카드 결제가 불가능합니다. 이는
  토스페이먼츠 결제창에서 페이북으로 넘어가는 과정에서 발생하는 이슈로 포트원과는 무관합니다.

### 간편결제

- 테스트MID로 간편결제 호출 시 테스트가 원활하지 않을 수 있습니다. 간편결제의 경우 사전에
  토스페이먼츠와 사전계약이 필요하며, ` [PAY_PROCESS_ABORTED] Toss Payments와 계약된
  결제수단(NAVERPAY)이 아닙니다.` 와 같은 에러 발생 시 고객사의 실 상점아이디로 토스페이먼츠와 계약
  후 사용이 가능합니다.

- 일부 간편결제 사 (ex. 토스페이, L페이 등)의 경우 해당 간편결제사 정책에 따라 고정 할부 개월수
  파라미터를 입력해도 해당 할부 개월 수와 일시불이 동시에 표기되는 경우가 있습니다.

### 페이팔 (해외 간편 결제)

토스페이먼츠 페이팔은 해외 결제 전용 결제수단입니다.
판매자 보호(Seller Protection) 및 페이팔 위험 관리(STC) 요건을 충족하도록 일부 파라미터의 추가 입력이 권장됩니다.

#### 사전 계약

- 토스페이먼츠와 페이팔 결제 사용을 위한 사전 계약이 필요합니다.

#### 페이팔 샌드박스 계정

테스트 환경에서 페이팔 결제 흐름을 검증하려면 페이팔에서 제공하는 샌드박스(Sandbox) 계정을 별도로 생성해야 합니다. 토스페이먼츠 테스트 MID만으로는 페이팔 결제창이 정상 동작하지 않으므로, 아래 절차로 구매자용 테스트 계정을 준비한 뒤 결제창 로그인에 사용해 주세요.

- [페이팔 개발자 대시보드](https://developer.paypal.com/)에 가입합니다.
- `Testing Tools > Sandbox Accounts` 메뉴에서 **Create account** 버튼을 눌러 **Personal(개인 구매자)** 계정을 생성합니다.
- 생성된 샌드박스 계정의 이메일과 비밀번호로 결제창에 로그인하면 실제 정산·청구 없이 결제 흐름을 테스트할 수 있습니다.
- 샌드박스 환경에서는 외화 결제 금액이 개발자센터/토스페이먼츠 콘솔의 테스트 결제 내역에 정확히 표시되지 않을 수 있습니다. (페이팔 자체 정책)
- 실제 사전 계약된 라이브 MID에서는 별도의 샌드박스 계정 없이 실 구매자 계정으로 결제가 이루어집니다.

#### 필수 파라미터

- currency: string

  **결제 통화**

  `"USD"`만 허용됩니다. KRW로 호출 시 결제가 거부됩니다.

- country: string

  **국가 코드**

  ISO 3166-1 alpha-2 형식의 국가 코드를 입력합니다. (예: `"US"`) 구매자의 결제 국가를 의미하며, 미입력 시 결제가 거부됩니다.

- totalAmount: number

  **결제 금액**

  USD 최소 단위(센트) 기준 정수로 입력합니다. (예: `$29.99` → `2999`)

- customer: object

  **고객 정보**

  - email: string

    **구매자 이메일**

    페이팔 청구·알림 발송에 사용됩니다.

  - fullName?: string

    **구매자 이름**

    페이팔 결제창에 표시됩니다. `fullName`이 없는 경우 `firstName`+`lastName` 조합으로 대체할 수 있습니다.

  - firstName?: string

    **구매자 이름 (성+이름 분리 시 이름)**

    `fullName`이 없는 경우 `lastName`과 함께 입력합니다.

  - lastName?: string

    **구매자 성 (성+이름 분리 시 성)**

    `fullName`이 없는 경우 `firstName`과 함께 입력합니다.

#### 판매자 보호 (Seller Protection)

페이팔 Seller Protection 자격 충족을 위해 **`products`**(상품 목록)와 **`bypass.tosspayments.paypal.shipping`**(배송지)을 함께 전달하는 것을 권장합니다.

##### `bypass.tosspayments.paypal.shipping` 하위 필드

- fullName?: string

  **수령인 이름**

  페이팔 결제창/배송 라벨에 표시됩니다.

- address?: object

  **배송지 주소**

  - country: string

    **국가 코드**

    배송지 국가의 ISO 3166-1 alpha-2 코드를 입력합니다. (예: 미국 `"US"`, 한국 `"KR"`) `address` 객체를 전달할 경우 반드시 입력해야 합니다.

  - line1?: string

    **주소 첫 번째 줄**

    도로명/번지 등 기본 주소를 입력합니다. (예: `"706 E Alisal St"`)

  - line2?: string

    **주소 두 번째 줄**

    동·호수, 빌딩명 등 상세 주소를 입력합니다. (예: `"Suite 200"`)

  - area1?: string

    **상위 행정구역**

    주(state) / 도(province) / 광역시 등 국가별 상위 행정구역을 입력합니다. (예: 미국 캘리포니아주 `"CA"`)

  - area2: string

    **도시(city) 명**

    도시명을 입력합니다. (예: `"Salinas"`)

  - postalCode?: string

    **우편번호**

    중국, 일본, 프랑스, 독일 등 페이팔이 요구하는 일부 국가에서는 필수이며, 그 외 국가에서는 선택입니다.

> 항목별 형식·국가별 필수 여부는 페이팔/토스페이먼츠 정책을 따릅니다. 위 파라미터를 전달하면 페이팔에서 제공하는 판매자 보호(Seller Protection)를 받을 수 있으므로 반드시 함께 전달하는 것을 권장합니다.

```typescript
PortOne.requestPayment({
  storeId: "store-...",
  channelKey: "channel-key-...",
  paymentId: "payment-...",
  orderName: "Blue Widget Bundle",
  totalAmount: 4499,
  currency: "USD",
  country: "US",
  payMethod: "EASY_PAY",
  easyPay: { easyPayProvider: "PAYPAL" },
  customer: {
    fullName: "John Smith",
    email: "john@example.com",
  },
  products: [
    {
      id: "sku-blue-widget",
      name: "Blue Widget",
      amount: 2999,
      quantity: 1,
      description: "Standard blue widget — 1 ea",
    },
    {
      id: "sku-red-hat",
      name: "Red Hat",
      amount: 1500,
      quantity: 1,
    },
  ],
  bypass: {
    tosspayments: {
      paypal: {
        // 배송 정보 (페이팔 Seller Protection 자격 충족용)
        shipping: {
          fullName: "John Smith",
          address: {
            country: "US",
            line1: "706 E Alisal St",
            line2: "Suite 200",
            area1: "CA", // 주/도
            area2: "Salinas", // 도시
            postalCode: "93905",
          },
        },
      },
    },
  },
});
```

#### 위험 관리 — Set Transaction Context (STC)

페이팔에서 추가로 요청하는 STC(Set Transaction Context) 정보를 `bypass.tosspayments.paypal.setTransactionContext` 객체로 전달합니다. 페이팔이 부정 거래·결제 취소·환불 등 리스크 관리에 활용하는 정보로, **결제 거래의 안전성과 신뢰성을 확보하기 위해 반드시 전달해야 합니다.**

```typescript
const bypass = {
  tosspayments: {
    paypal: {
      setTransactionContext: {
        sender_account_id: "10000600",
        sender_email: "john@example.com",
        sender_country_code: "US",
        sender_create_date: "2024-01-15T08:00:00Z",
        // ... 업종별 권장 키
      },
    },
  },
};
```

업종별 권장 STC 키 정의는 [페이팔 STC 가이드](https://static.tosspayments.com/public/STC.pdf)를 참고해 업종(industry)에 맞는 파라미터를 추가합니다. 문서 표의 `Data Field Name` 컬럼 값을 `setTransactionContext` 객체의 key로, 같은 행의 `Description`에 부합하는 값을 객체의 value로 입력합니다.

예를 들어 이벤트/티케팅 업종을 운영 중이라면, STC 문서 내 해당 업종 페이지(예: 3페이지)에 안내된 모든 파라미터를 `setTransactionContext` 객체에 추가하세요.

#### 이용약관 동의

페이팔 결제창을 호출하기 전에 구매자에게 아래 세 가지 약관 동의를 받아야 합니다. 결제 페이지에 약관 링크/체크박스를 노출하고 동의를 받은 뒤에 결제창을 호출하세요.

- [전자금융거래 이용약관](https://pages.tosspayments.com/terms/en/paypal/general_terms_and_conditions)
- [개인(신용)정보 수집이용 동의](https://pages.tosspayments.com/terms/en/paypal/collection_use_consent)
- [개인(신용)정보 제3자 제공 및 국외 이전 동의](https://pages.tosspayments.com/terms/en/paypal/providing_transmitting_consent)

#### 거래 수수료

라이브 환경에서 페이팔 결제를 취소하면 거래 수수료는 반환되지 않습니다. (전체/부분 취소 공통)

### 기타

- 상품권 결제는 부분취소가 불가능합니다.

- 테스트 결제 건은 매출 전표 확인이 불가능합니다.

- 간편결제를 통해 카드 외의 결제수단으로 결제한 경우 매출 전표 확인이 불가능합니다.

- 토스페이먼츠를 통한 SSG페이 결제 시 토스페이먼츠 결제창에서 휴대폰 번호가 선택사항이어서
  미입력시에도 다음단계로 진입이 가능합니다. 이 때, SSG페이의 경우 입력받은 휴대폰 전화번호로 앱푸시
  알람이 가도록 로직이 구현되어있기 때문에 사용자가 앱푸시 알람을 받지 못할 수 있습니다. 휴대폰 번호
  입력이 필수로 되어있지 않는 것은 토스페이먼츠의 정책으로 포트원과 무관합니다.

- API를 통한 현금영수증 (POST `/payments/cash-receipts`) 발급 시 현금영수증 유형(type) 과 현금영수증
  발급 번호(identifier)의 유효성을 검증하지 않고 발급 요청한 값대로 승인되오니 API 이용 시
  현금영수증 정보를 정확하게 입력해야 합니다.

  <details>

  <summary> 예시 </summary>

  - 예1. 현금영수증 발급 유형이 지출 증빙일 때, 현금영수증 발급 번호에 휴대폰 번호를 입력하는 경우
    정상 처리됩니다.

  </details>

- 삼성페이를 통한 결제 도중 세션값이 만료된 경우 안내 메세지가 잘려서 보일 수 있습니다. 이는
  토스페이먼츠에서 발생하는 이슈로 포트원과 무관합니다.

  <details>

  <summary> 예시 </summary>

  (관련 이미지 첨부)

  </details>

- 사파리 또는 파이어폭스 브라우저의 경우 팝업 차단 해제가 설정되어있지 않는 경우 페이북, 가상계좌
  발급, 휴대폰 소액결제 등 결제가 정상적으로 진행되지 않을 수 있으니, 팝업을 해제하고 사용할 수
  있도록 안내가 필요합니다.

- IE 브라우저에서 페이코 결제 시 결제창이 잘릴 수 있습니다. 이는 토스페이먼츠에서 발생하는 이슈로
  포트원과 무관합니다.

- IE 브라우저 결제 중단 시 일부 메세지가 인코딩 된 메세지로 전달될 수 있으며, 이는 토스페이먼츠에서
  발생하는 이슈로 포트원과 무관합니다.
