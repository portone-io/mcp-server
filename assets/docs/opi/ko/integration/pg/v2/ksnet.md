---
title: KSNET
description: KSNET 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/ksnet/readme
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)  페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 가능한 결제수단

- **SDK 결제**
  - `payMethod` 파라미터를 결제수단에 따라 아래와 같이 설정해야 합니다.
    - 신용카드 : `CARD`
    - 실시간 계좌이체 : `TRANSFER`
    - 가상계좌 : `VIRTUAL_ACCOUNT`
    - 휴대폰 소액결제 : `MOBILE`
    - 간편 결제 : `EASY_PAY`

- **API 수기(키인) 결제**
  - `method` 파라미터 내부 필드를 결제수단에 따라 아래와 같이 선택해야 합니다.
    - 신용카드 : `card`
    - 가상계좌 : `virtualAccount`

- **SDK 빌링키 발급**
  - `billingKeyMethod`(빌링키 발급) 파라미터를 `CARD`로 설정해야 합니다.

- **API 빌링키 발급**
  - `method` 파라미터 내부 필드를 `card`로 선택해야 합니다.

## SDK 결제 및 빌링키 발급 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야합니다. `channelKey` 파라미터에 결제 채널 연동 시
생성된 채널 키값을 지정하여 KSNET 연동임을 명시해주세요. 만약 `channelKey`가 입력되지 않는 경우
`pgProvider` 파라미터에 입력된 값에 따라 결제창이 호출됩니다.

KSNET 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    paymentId: `payment-${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    payMethod: "CARD",
    card: {
      cardCompany: "BC_CARD",
    },
  });
}
```

</div>

</div>

## API 수기(키인)결제 및 빌링키 발급 및 예약/반복 결제 요청하기

수기(키인)로 결제하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/instant/pay`를 이용하여 결제
요청을 해야합니다. 그리고 빌링키를 발급하기 위해서는 `POST /billing-keys`를 이용하여 빌링키 발급
요청을 해야합니다. 이후 발급된 빌링키로 예약/반복 결제를 하기위해 `POST /schedules` 를 이용하여
결제를 예약합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 수기(키인) 결제 요청">

```ts
// ... 수기(키인) 결제
const issueResponse = await axios({
  url: `https://api.portone.io/payments/${encodeURIComponent(PAYMENT_ID_HERE)}/instant`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey,
    orderName,
    productType,
    customer: {
      id: customerId,
      name: {
        first: firstName,
        last: lastName,
      },
    },
    amount: {
      total: totalAmount,
    },
    currency,
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

<div class="tabs-content" data-title="API 빌링키 발급 요청">

```ts
// ... 빌링키 발급
const issueResponse = await axios({
  url: "https://api.portone.io/billing-keys",
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
    url: `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/schedule`,
    method: "post",
    headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
    data: {
      payment: {
        billing_key: BILLING_KEY_HERE,
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

  콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키로 호출하고자 하는 채널을 지정합니다.

- totalAmount: number

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를
  고려한 number 형식만 허용됩니다.

- currency: string

  결제통화로 원화 결제를 원할 시 `KRW`로 입력해야 합니다. KSNET의 경우 `KRW`와 `USD`를 지원합니다.

- payMethod: string

  결제수단을 구분하는 코드로 원하는 결제수단 값을 입력해야 합니다.

- customer.fullName: string

  구매자 이름으로 KSNET의 경우 필수로 입력해야 합니다.

- taxFreeAmount?: number

  면세 금액으로 KSNET과 상점아이디 계약시 복합과세로 계약한 경우 면세 처리를 위해 면세금액을
  반드시 입력해야 합니다. 면세금액 미 입력 시 면세금액은 0원으로 자동 처리되며, 결제 요청 금액은
  모두 과세 처리 되오니 이 점 유의하시기 바랍니다.

- card.cardCompany: string

  카드사 다이렉트 호출 시 결제대행사의 통합결제창을 거치지 않고, 지정한 카드사의 결제화면이 호출됩니다.
  카드사별로 지원하는 기능이 상이함으로, 카드 다이렉트 호출 유의사항을 확인해 주세요.

## 유의할 파라미터 - SDK

### SDK 결제/빌링키 발급 공통

- windowType?: string

  - KSNET의 경우 PC는 `IFRAME`, mobile은 `REDIRECTION`만 지원되며 이외의 다른 방식으로 결제창을 호출할 경우 에러를 리턴합니다.

  - `windowType` 파라미터를 채우지 않을 경우 자동으로 아래와 같이 세팅됩니다.

    ```json
    {
      "pc": "IFRAME",
      "mobile": "REDIRECTION"
    }
    ```

- locale?: string

  - KSNET의 경우 `KO_KR`만 지원합니다. 이외의 값을 넣어도 무시됩니다.

- redirectUrl?: string

  - 모바일 환경에서 결제 요청 시 `REDIRECTION` 타입이므로, 필수로 입력해야 합니다.

### API 결제

- productType: string

  판매 상품에 대한 상품 유형 파라미터로 API 결제 시 필수로 입력해야 합니다.

  - `PHYSICAL`: 실물 상품
  - `DIGITAL` : 디지털 상품

### SDK 결제 (`requestPayment`)

- productType?: string

  휴대폰 결제인 경우 필수로 입력해야 하며, KSNET의 상점아이디에 설정된 상품 유형과 일치해야합니다.
  디지털 상품유형으로 설정된 경우 항상 `PRODUCT_TYPE_DIGITAL`로 입력해야 합니다.

  - `PRODUCT_TYPE_REAL`: 실물 상품
  - `PRODUCT_TYPE_DIGITAL` : 디지털 상품

- bypass?: object

  - ksnet?: object

    - sndQpayType?: string

      카드 결제 시 결제창에 간편 결제 수단 표시 여부를 설정할 수 있습니다.

      - `0` : 간편결제 수단 표시 하지 않음
      - `1` : 간편결제 수단 표시함

### 카드 다이렉트 호출

- customer?: object

  - fullName?: string

    - KSNET을 통한 카드사 다이렉트 호출 시, 구매자명 파라미터는 필수 입력입니다.

  - phoneNumber?: string

    - 모바일 환경에서 **BC카드, 수협카드, 전북카드, 광주카드, 카카오뱅크카드** 를 다이렉트 호출하는 경우, 필수 입력입니다.

- bypass?: object

  - ksnet?: object

    - tcode?: string

      - 모바일 환경에서 **BC카드, 수협카드, 전북카드, 광주카드, 카카오뱅크카드** 를 다이렉트 호출하는 경우, 필수 입력입니다.
      - 통신사에 따라 LG는 lgt, KT는 ktf, SKT는 skt로 입력해야 하며, 통신사 구분이 어려우신 경우 임의의 값을 입력하여 요청해도 무방합니다.

    - url?: string

      - **우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를 다이렉트 호출하는 경우 필수 입력입니다.

- storeDetails?: object

  - businessName?: string

    - **국민카드, 우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를 다이렉트 호출하는 경우, 필수 입력입니다.

  - businessRegistrationNumber?: string

    - **국민카드, 우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를 다이렉트 호출하는 경우, 필수 입력입니다.

- installments?: object

  - monthOption?: object

    - availableMonthList?: number\[]

      - **국민카드, 우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를 다이렉트 호출하는 경우, 렌더링할 할부개월 리스트를 지정할 수 있습니다.

## 연동 유의사항

### KSNET과 사전 계약이 필요한 경우

포트원을 통해 KSNET을 이용하고자 하는 고객사의 경우 상점아이디의 과세설정이 반드시 `복합과세`로 설정되어 있어야 합니다.

아래의 기능을 사용하려면 사전 신청을 통해 KSNET과 계약을 완료해야 합니다.

계약을 하지 않은 경우 해당 기능을 이용하여 결제 시 결제 승인에 실패하거나, 승인에 성공하더라도 의도한 바와 다른 응답을 받을 수 있습니다.
(ex. 에스크로 결제를 요청하여 결제를 진행하였으나 비-에스크로 결제 응답을 받는 경우)

- 키인결제

- 고객사 부담 무이자 할부 설정

- 가상계좌 입금마감기한 지정

- 가상계좌 환불

- 간편결제

- 신용카드 할부

- 에스크로 (배송 에스크로만 지원)
  - KSNET에서는 일반 에스크로, 배송 에스크로 두 가지 유형의 에스크로를 제공하고있으나, 포트원에서는
    KSNET 배송 에스크로만 제공하고 있으므로 에스크로 사용을 원할 시 KSNET에 **배송 에스크로**로
    설정을 요청 해야합니다.

- 휴대폰 결제
  - KSNET을 통해 상품 유형 설정(ex. 실물 혹은 디지털) 요청을 해야합니다.

### 카드 결제

- `card.installment.freeInstallmentPlans.cardCompany` 파라미터는 일부 카드사에 대해서만 적용 가능합니다.
  - 지원 가능한 카드 : 비씨,국민,하나,삼성,신한,현대,롯데,농협
  - 지원 불가능한 카드 : 씨티

<details>

<summary>파라미터 사용 예시 </summary>

```json
{
  "card": {
    "installment": {
      "freeInstallmentPlans": [
        {
          "cardCompany": "KOOKMIN_CARD",
          "months": [9, 10]
        }
      ]
    }
  }
}
```

</details>

- 결제 통화 `currency`를 `USD`로 지정하여 결제 요청한 경우 해외 발급 카드로만 결제가 가능합니다. 국내에서 발급받은 해외 겸용 카드는 결제 승인이 불가합니다.

### 간편결제

- 간편결제 시 무이자 할부 설정은 불가능하며, 할부 개월 수 표시 설정은 일부 간편결제에서만 가능합니다.

  - 지원 가능한 간편결제 : 네이버페이, 카카오페이, L페이
  - 지원 불가능한 간편결제 : 페이코, SSG페이 (1\~12개월 표시 고정)

- 간편결제로 결제 요청 시 고객사 분담 무이자 설정은 사용이 불가능합니다.

- 간편결제 중 카카오페이, 페이코를 통한 카드 결제의 경우 포트원으로 전달되는 결제 응답에 카드정보가 제공되지 않아 결제 정보에 카드사 정보가 제공되지 않습니다.

- 카카오페이 사용을 원하실 경우 앱 또는 웹 하단에 대표자명, 주소, 전화번호와 같은 상점정보를 필수로 입력해야합니다.

### 간편결제 다이렉트

- KSNET 간편결제 다이렉트는 아래의 결제 방식을 지원합니다.
  - 네이버페이 카드
  - 카카오페이 카드 및 머니
  - 페이코
  - L페이 카드

- 네이버페이 머니·포인트의 경우 현재 KSNET에서는 다이렉트 호출을 지원하지 않습니다.

- 간편결제 다이렉트를 사용하기 위해서는 `bypass.ksnet.easyPayDirect`를 `true`로 설정하고, `payMethod`를 `EASY_PAY`, `easyPay.easyPayProvider`를 `NAVERPAY`, `KAKAOPAY`, `PAYCO`, `LPAY` 중 하나로 지정합니다.

- 구매자 이름(`customer.fullName`)을 입력해야 합니다.

- 네이버페이의 경우
  - 현재 카드 결제만 가능
  - 상점명(`storeDetails.businessName`) 필수
  - `customer.email`, `customer.phoneNumber` 선택
  - 할부 개월 수 표시 설정 가능
  - 이용 가능 카드사 설정 가능 (신한, BC, 국민, 농협, 롯데, 삼성, 시티, 우리, 하나, 현대)

- 카카오페이의 경우
  - 상점 대표자명(`storeDetails.ceoFullName`) 필수
  - 상점 주소(`storeDetails.address`) 필수
  - 상점 전화번호(`storeDetails.phoneNumber`) 필수
  - `customer.email`, `customer.phoneNumber` 필수
  - `easyPay.availablePayMethods`로 결제 유형 한정 가능(`["CARD"]`로 지정할 경우 카드만, `["MONEY"]`로 지정할 경우 머니만)
  - 할부 개월 수 표시 설정 가능
  - 이용 가능 카드사 설정 가능 (신한, BC, 국민, 농협, 롯데, 삼성, 시티, 우리, 하나, 현대)

- 페이코의 경우
  - 상점명(`storeDetails.businessName`) 필수
  - 사업자등록번호(`storeDetails.businessRegistrationNumber`) 필수
  - `customer.email`, `customer.phoneNumber` 필수

- L페이의 경우
  - `customer.email`, `customer.phoneNumber` 선택

### 계좌이체

- SDK로 계좌이체 결제 요청 시 결제창 내에서 현금영수증 발급을 위한 정보 입력 시 휴대폰 번호 및 사업자번호는 숫자만 입력해야 합니다.
  하이픈(-)을 포함한 다른 문자가 포함되는 경우 별다른 에러 표시 없이 결제는 정상승인되지만 현금영수증이 발급되지 않으니 유의하여 사용이 필요합니다.

### 가상계좌

- KSNET의 경우 가상계좌 발급 시 예금주명은 고객사명으로 고정되어 별도의 지정이 불가능합니다.

- KSNET의 경우 일회성 가상계좌의 경우 부가세, 면세 금액 설정을 지원하지 않습니다.

- KSNET의 경우 가상계좌 환불 기능은 특약이 있는 고객사만 사용 가능하며, KSNET과 사전에 계약 진행이 필요합니다.

- 포트원을 통한 KSNET을 사용하는 경우 가상계좌 발급 시 입금기한을 필수로 입력하여 사용해야 합니다.
  입금기한을 입력하지 않는 경우 가상계좌 에러를 리턴하고, 가상계좌가 정상적으로 발급되지 않습니다.

- 가상계좌 발급 시 입금 기한은 `virtualAccount.accountExpiry.dueDate` 또는
  `virtualAccount.accountExpiry.validHours` 파라미터로 설정해야하며 `dueDate`는 ISO8601 형식으로,
  `validHours`는 number 형식으로 입력해야 합니다.

<details>

<summary>ISO8601 형식 예시 </summary>

- YYYY-MM-DDTHH:mm:ssZ
- YYYY-MM-DDTHH:mm:ss±hh:mm

</details>

- 가상계좌 결제 건 결제취소(환불)은 06:00 \~ 23:00 까지만 가능하며, 이 외의 시간에 시도하면 에러를 리턴합니다. 이는 KSNET의 정책으로 포트원과 무관합니다.

- 가상계좌 결제 시 결제창에서 발급한 현금영수증의 경우 해당 거래가 취소되더라도 자동으로 취소되지
  않습니다. 따라서, 직접 현금영수증 발급 취소를 진행해야 하므로 유의하시기 바랍니다.

- 복합과세가 적용된 가상계좌 결제 후 부분 취소하는 경우 기존에 발급한 현금영수증을 취소하고, 부분취소 금액이 반영된 금액 정보로 현금영수증을 재발급해야 합니다.

### 휴대폰결제

- 휴대폰 소액 결제 승인 건은 부분취소가 불가능합니다.

### 에스크로

- 에스크로 거래는 SDK 결제에서만 가능합니다.

- 에스크로 결제 시 구매 확정을 위해 주문자 이메일(`customer.email`)을 필수로 입력해야 합니다.

- 에스크로 거래는 KSNET 관리자 페이지 (ksta.ksnet.co.kr > PG 거래내역 > 배송 에스크로 거래조회)에서
  거래 후 30분\~ 1시간 뒤 확인이 가능합니다. 에스크로 정보 수정의 경우도 등록이 완료된 이후부터
  가능하오니 유의해서 사용이 필요합니다.

- 에스크로 배송정보 등록/변경 API (POST `/payments/${PAYMENT_ID_HERE}/escrow/logis`)에 사용되는
  배송정보 발송일시 `logistics_form.send_at` 파라미터는 ISO8601 형식으로 입력해야 합니다.

<details>

<summary>ISO8601 형식 예시</summary>

- YYYY-MM-DDTHH:mm:ssZ
- YYYY-MM-DDTHH:mm:ss±hh:mm

</details>

### API 수기(키인) 결제

- 고객사 분담 무이자를 원하시는 경우 KSNET과 별도의 계약 후 method.card.useFreeInterestFromMerchant
  파라미터를 true로 입력하여 사용 가능합니다.

- 포트원을 통한 KSNET API 수기(키인) 결제는 카드 번호와 유효기간만으로 결제를 요청하는 비인증 승인 API만 연동되어 있어 `birthOrBusinessRegistrationNumber` 와 `passwordTwoDigits` 는 검증하지 않습니다.

### API 빌링키 발급

- method.card.credential의 `number`, `expiryYear`, `expiryMonth`, `birthOrBusinessRegistrationNumber`, `passwordTwoDigits` 파라미터는 필수 입력해야 합니다.

### 빌링키 결제

- 고객사 분담 무이자를 원하시는 경우 KSNET과 별도의 계약 후 `card.use_free_interest_from_mall` 파라미터를 true로 입력하여 사용 가능합니다.

### 기타

- 카드, 간편결제를 제외한 결제수단의 경우 매출 전표 확인이 불가능합니다. 이는 KSNET 정책으로 포트원과 무관합니다.

- 카드결제, 계좌이체, 가상계좌, 간편결제로 정상 승인된 건에 대해 부분취소를 하는 경우 총 9회까지 가능합니다.

- 결제 취소는 결제일 기준 6개월 이내 거래건만 가능합니다.

- KSNET의 경우 승인 영수증 및 취소 영수증 확인 시 자동으로 인쇄 기능이 호출되며, 이는 KSNET의 정책으로 포트원과 무관합니다.

- 결제 시 면세 금액이 포함된 경우 면세 금액 (`taxFreeAmount`) 파라미터에 정확한 금액을 입력해야
  하며, 입력하지 않을 경우 매출전표 및 실제 처리 내역이 다를 수 있습니다.

- KSNET의 경우 상점 분담 무이자 할부 설정은 카드 발급사가 **비씨,국민,하나,삼성,신한,현대,롯데,농협**인 카드에 대해서만 가능합니다.
