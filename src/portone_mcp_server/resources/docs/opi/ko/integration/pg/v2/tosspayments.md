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
    - 실시간 계좌이체 : `TRANSFER`
    - 가상계좌 : `VIRTUAL_ACCOUNT`
    - 휴대폰 소액결제 : `MOBILE`
    - 간편 결제 : `EASY_PAY`
    - 상품권 결제 : `GIFT_CERTIFICATE`

- **빌링키 발급**
  - `billingKeyMethod`(빌링키 발급) 파라미터를 `CARD`로 설정해야 합니다.

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
    currency: "CURRENCY_KRW",
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

  고객사의 상점을 식별하는 고유한 값입니다.

- paymentId: string

  고객사가 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- orderName: string

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  콘솔의 결제 연동 메뉴에 표시되는 채널 키를 입력해야 합니다.

- totalAmount: number

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  결제통화로 원화 결제를 원할 시 `KRW`로 입력해야 합니다.

- payMethod: string

  결제수단을 구분하는 코드로 원하는 결제수단 값을 입력해야 합니다.

## 유의할 파라미터 - SDK

### 결제/빌링키 발급 공통

- `windowType`

  - 토스페이먼츠의 경우 PC는 `IFRAME`, mobile은 `REDIRECTION`만 지원되며 이외의 다른 방식으로 결제창을 호출할 경우 에러를 리턴합니다.

  - `windowType` 파라미터를 채우지 않을 경우 자동으로 아래와 같이 세팅됩니다.

    ```json
    {
      "pc": "IFRAME",
      "mobile": "REDIRECTION"
    }
    ```

- `locale`
  - 토스페이먼츠의 경우 `KO_KR`만 지원합니다. 이외의 값을 넣어도 무시됩니다.

- `redirectUrl`
  - 모바일 환경에서 결제 요청 시 `REDIRECTION` 타입이므로, 필수로 입력해야 합니다.

### 결제 (`requestPayment`)

- `easyPay`
  - `easyPayProvider`
    - 간편결제 결제 요청 시, 사용하고자 하는 간편 결제사에 따라 아래 목록을 참고하여 `easyPayProvider` 파라미터를 입력해야 합니다.
      - 페이코 : `PAYCO`
      - 삼성페이 : `SAMSUNGPAY`
      - SSG페이 : `SSGPAY`
      - 카카오페이 : `KAKAOPAY`
      - 네이버페이 : `NAVERPAY`
      - L페이 : `LPAY`
      - 토스페이 : `TOSSPAY`
      - 애플페이 : `APPLEPAY`

- `giftCertificate`
  - `giftCertificateType`

  - 상품권 결제 요청 시, 사용하고자 하는 상품권 종류에 따라 아래 목록을 참고하여 `giftCertificateType` 파라미터를 입력해야 합니다.
    - 도서문화상품권 : `BOOKNLIFE`
    - 스마트문상 ((구)게임문화상품권) : `SMART_MUNSANG`
    - 문화상품권 : `CULTURELAND`

- `paymentId`
  - 토스페이먼츠를 사용하는 경우 영문 대소문자, 숫자, 특수문자(-,\_)만 허용되며, 6자 이상 64자 이하만 가능합니다.

- `currency`
  - 토스페이먼츠의 경우 원화 결제만 지원하므로 `KRW` 이외의 값을 넣으면 에러를 리턴합니다.

- `isCulturalExpense`
  - 문화비(도서, 공연, 박물관 등) 지출 여부를 구분하고자 할 때 파라미터를 입력하여 사용할 수 있습니다.

- `bypass`

  - 토스페이먼츠에서는 아래의 파라미터를 지원합니다.

  - `tosspayments`

    - `discountCode`

      - 토스페이먼츠와 고객사 간의 계약에 따라 프로모션을 적용할 수 있습니다.

      ```json
      {
        "tosspayments": {
          "discountCode": "즉시 할인 코드(카드사 고유 번호)"
        }
      }
      ```

    - `useInternationalCardOnly`

      - 해외 카드로만 결제가 가능하도록 설정할 수 있습니다.

      ```json
      {
        "tosspayments": {
          "useInternationalCardOnly": true
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
  결제창 내에서 각 카드사별 최대 무이자 할부 개우러수에 따라 할부 개월수 옆에 `무이자` 또는 `무`라고
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

  - 예1. BD카드 다이렉트 호출 후 결제 시 5개월 할부로 결제 됩니다.

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
