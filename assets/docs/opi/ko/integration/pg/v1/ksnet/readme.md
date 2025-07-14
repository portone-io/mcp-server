---
title: KSNET
description: KSNET 결제창 연동 가이드입니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/ksnet
---

(이미지 첨부: KSNET)

## 1. KSNET 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여
채널 설정을 진행합니다.

## 2. 결제 요청하기

[JavaScript SDK (신규)](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)의 `IMP.request_pay(param, callback)`을 호출하여
KSNET 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback**으로 수신되고 모바일의 경우 **m\_redirect\_url**로 리디렉션됩니다.

<div class="hint" data-style="info">

KSNET 결제는 최신 SDK에서만 지원됩니다.
기존 JavaScript SDK를 사용 중이신 경우 [JavaScript SDK (신규)](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) 문서를 참고하여 업데이트를 진행해주세요.

**KSNET을 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다.**

</div>

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="danger">

**기존에 deprecated된 응답들은 모두 제거**됐습니다.

KSNET 연동시에 사용되는 신규 JS SDK는 기존 모듈에서 제공했던 CallBack 파라미터가 대부분 삭제되었습니다.(특히 deprecated 로 명시된 파라미터는 모두 삭제되었습니다.)

해당 JS SDK 사용시 Callback 으로 내려받을수 있는 데이터는 오직 아래 두가지 입니다.

**`imp_uid`, `merchant_uid`**

따라서 해당 SDK를 사용하실때는 `IMP.request_pay`로부터 응답된 객체(또는 쿼리 파라미터)에서 `imp_uid`를 가지고 **아임포트 REST API(GET `/payments/imp_uid`)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여 응답 파라미터 중 status 파라미터로 결제 상태를 파악하셔야 합니다.

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="JavaScript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_id_1667634130160", // 상점에서 채번하는 고유 주문 번호
    name: "나이키 와플 트레이너 2 SD",
    pay_method: "card",
    escrow: false,
    amount: "109000",
    tax_free: 3000,
    buyer_name: "홍길동",
    buyer_email: "buyer@example.com",
    buyer_tel: "02-1670-5176",
    buyer_addr: "성수이로 20길 16",
    buyer_postcode: "04783",
    app_scheme: "portone://",
    m_redirect_url: "https://helloworld.com/payments/result",
    notice_url: "https://helloworld.com/api/v1/payments/notice",
    confirm_url: "https://helloworld.com/api/v1/payments/confirm",
    currency: "KRW",
    digital: false,
    period: {
      from: "2022-12-01",
      to: "2023-01-01",
    },
    custom_data: { userId: 30930 },
    display: { card_quota: [0, 6] },
    bypass: {
      ksnet: {
        sndQpayType: "0",
      },
    },
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `ksnet.{PG 상점 아이디}`

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - vbank (가상계좌)
  - trans (계좌이체)
  - phone (휴대폰소액결제)
  - lpay (LPAY)
  - ssgpay (SSGPAY)
  - kakaopay (카카오페이)
  - naverpay (네이버페이)
  - payco (페이코)

- merchant\_uid: string

  **고객사 채번 주문 고유번호**

  고객사에서 매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  지정하지 않은 경우 0원입니다.

- tax\_free?: number

  **면세금액**

  지정하지 않은 경우 0원입니다.

  <div class="hint" data-style="info">

  포트원을 통해 KSNET를 사용하는 경우 과세 설정이 `복합과세`이므로 면세금액을 반드시 입력해야 합니다.

  </div>

- buyer\_name: string

  **구매자명**

- buyer\_tel?: string

  **구매자 전화번호**

- currency: string

  **결제 통화**

  결제통화로 KSNET 카드 다이렉트의 경우 `KRW` 만 허용됩니다.

- digital?: boolean

  **디지털 상품 유형 여부**

  <div class="hint" data-style="info">

  해당 필드는 **휴대폰 결제**에서만 사용되며, 상점이 `디지털 상품유형`으로 설정된 경우 항상 `true`로 전달해야 합니다.

  </div>

- appCard?: boolean

  **카드 결제시, 카드 결제창에 앱카드만 선택 가능하도록 할지 여부 (기본값: **false**)**

- useFreeInterestFromMall?: boolean

  **상점 부담 무이자 할부 사용 여부**

  고객사가 부담하는 무이자 할부 여부를 설정 할 수 있습니다.

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정**

  - card\_quota?: number\[]

    **할부 개월수 설정**

    `[0]` : 일시불
    `[2,3,4]` : 2,3,4 개월

- card?: object

  **카드 결제시 세부 설정 정보**

  - direct?: object

    **카드사 다이렉트 호출시 설정 정보**

    - code?: string

      **카드사 코드**

- storeDetails?: object

  **상점 세부 정보**

  - businessName?: string

    **상점 사업자 명**

  - businessRegistrationNumber?: string

    **상점 사업자 번호**

    - 하이픈(-) 을 제외한, 숫자만 전달하여야합니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사 그대로 bypass할 값들의 모음**

  - ksnet?: string

    **KSNET 전용 파라미터**

    - sndQpayType?: string

      **카드 결제 시 결제창에 간편 결제 수단 표시 여부**

      0 : 간편결제 수단 표시하지 않음 / 1 : 간편결제 수단 표시함

    - tcode?: string

      **통신사 구분**

      통신사에 따라 LG는 `lgt`, KT는 `kgf`, SKT는 `skt`로 입력해야 하며, 통신사 구분이 어려우신 경우
      임의의 값을 입력하여 요청해도 무방합니다.

    - url?: string

      **고객사 url**

      - 결제를 요청하는 사이트의 url을 입력하여야 합니다.

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

**KSNET은 결제창 기반 비인증 결제를 지원하지 않습니다.**

</div>

<div class="tabs-content" data-title="API 결제">

### 일회성 결제 요청하기

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 일회성 결제를 요청합니다.
요청 시 전달된 카드 정보는 포트원에 등록되지 않습니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

### 빌링키 발급 요청하기

REST [**API POST /subscribe/customers/{customer\_uid}**](https://developers.portone.io/api/rest-v1/billingkey#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 호출하여 빌링키 발급을 요청합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

### 빌링키로 결제 요청하기

빌링키 발급과 최초 결제가 성공하면 빌링키는 전달된 `customer_uid` 와 1:1 매칭되어 포트원에 저장됩니다.
보안상의 이유로 서버는 빌링키에 직접 접근할 수 없기 때문에 `customer_uid`를 이용해서
재결제([**POST /subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)) REST API를 다음과 같이 호출합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid": "your-customer-unique-id", "merchant_uid": "order_id_8237352", "amount": 3000, "product_type": "digital"}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>

## 3. API 기능

### 승인 취소(환불)

결제 승인 완료 건에 대해 승인 취소(환불)를 할 수 있는 API입니다.\
REST [**API POST /payments/cancel**](https://developers.portone.io/api/rest-v1/payment#post%20%2Fpayments%2Fcancel)를
호출하여 승인 취소(환불)을 요청합니다.

### 현금영수증 등록

포트원을 통한 거래건이지만 결제창에서 현금영수증 등록을 하지 못한 경우 API를 통해 현금영수증을 등록할 수 있습니다.\
REST [**API POST /receipts/{imp\_uid}**](https://developers.portone.io/api/rest-v1/receipt#post%20%2Freceipts%2F%7Bimp_uid%7D)를
호출하여 현금영수증을 요청합니다.

- `product_type`(디지털: `"digital"`, 실물: `"real"`), `buyer_name` 파라미터는 KSNET 필수 입력 대상입니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"identifier": "1178178260", "identifier_type": "business", "type": "company", "product_type": "digital"}' \
     https://api.iamport.kr/receipts/{imp_uid}
```

### 외부 현금영수증 등록

포트원을 통한 거래건이 아닌 현금성 거래의 경우에도 API를 통해 현금영수증을 등록할 수 있습니다.\
REST [**API POST /receipts/external/{merchant\_uid}**](https://developers.portone.io/api/rest-v1/receipt#post%20%2Freceipts%2Fexternal%2F%7Bmerchant_uid%7D)를
호출하여 현금영수증을 요청합니다.

- `product_type`, `pg`, `buyer_name` 파라미터는 KSNET 필수 입력 대상입니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid": "order_id_1667643230720", "name": "나이키 와플 트레이너 2 SD", "amount": 109000, "identifier": "1178178260",  "identifier_type": "business", "type": "company", "product_type": "digital", "tax_free": "3000", "pg": "ksnet"}' \
     https://api.iamport.kr/receipts/external/{merchant_uid}
```

## 4. 부가기능

### 할부개월수 렌더링

결제창 호출 시 표시할 할부개월수를 설정할 수 있습니다.

```json
{
  //...중략
  "display": {
    "card_quota": [5, 6] // 할부개월 5,6개월만 활성화
  }
}
```

상점 부담 무이자 할부의 경우 card.detail 파라미터를 사용하여 최대 할부개월수 설정이 가능합니다.

```json
{
  "card": {
    "detail": [
      { "card_code": "366", "max_month": 5 }, // 특정 카드사 (신한카드) 상점 부담 무이자 최대 5개월 할부 설정
      { "card_code": "381", "max_month": 3 } // 특정 카드사 (KB국민카드) 상점 부담 무이자 최대 3개월 할부 설정
    ]
  }
}
```

<div class="hint" data-style="info">

KB 앱카드 결제 시, card.useInstallment 파라미터 true 설정 시에만 할부 개월 수 설정이 가능합니다.

</div>

자세한 상점 부담 무이자 할부 설정 가이드는  [\[API\&SDK\] - \[브라우저 SDK\] - \[결제요청 파라미터\] - \[상점 부담 무이자 할부 최대 개월수 설정하기](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq?v=v1#상점-부담-무이자-할부-최대-개월수-설정하기) 에서 확인 가능합니다.

**파라미터 설명**

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정**

  - card\_quota?: number\[]

    **할부 개월수 설정**

    `[0]` : 일시불
    `[2,3,4]` : 2,3,4 개월

- useFreeInterestFromMall?: boolean

  **상점 부담 무이자 할부 사용 여부**

- card?: object

  **카드 결제시, 카드 결제에 대한 세부 정보 설정**

  - useInstallment?: boolean

    **할부 가능 여부**

  - detail?: object\[]

    **카드사 렌더링 정보**

    - card\_code?: string

      **카드사 코드**

    - max\_month?: number

      **상점 부담 무이자 할부 최대 개월수**

<div class="hint" data-style="info">

할부 결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다. (현대카드의 경우 1만원 이상 결제 요청시 사용 가능)

</div>

### 카드사 다이렉트 호출

카드사 다이렉트 호출 시 결제대행사의 통합결제창을 거치지 않고, 지정한 카드사의 결제화면이 호출됩니다.

```json
{
  //...중략
  "card": {
    "direct": {
      "code": "361" // 카드사 지정
    }
  }
}
```

**파라미터 설명**

- card?: object

  **카드 결제시 세부 설정 정보**

  - direct?: object

    **카드사 다이렉트 호출시 설정 정보**

    - code?: string

      **카드사 코드**

      [카드사 코드 바로가기](https://developers.portone.io/opi/ko/support/code-info/card-code?v=v1)

#### 유의사항

<details>

<summary> 필수 파라미터 안내</summary>

- KSNET을 통한 카드사 다이렉트 호출 시 `buyer_name` 파라미터는 필수 입력해야 합니다.

- 모바일 환경에서 **BC카드, 수협카드, 전북카드, 광주카드, 카카오뱅크카드** 를 다이렉트 호출하는 경우
  `buyer_tel`, `bypass.ksnet.tcode` 파라미터를 필수 입력해야 합니다.

- **국민카드, 우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를
  다이렉트 호출하는 경우 `storeDetails.businessName`, `storeDetails.businessRegistrationNumber` 파라미터를
  필수 입력해야 합니다.

- **우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를 다이렉트
  호출하는 경우 `bypass.ksnet.url` 파라미터를 필수 입력해야 합니다.

</details>

<details>

<summary> 일부 카드사의 경우 다이렉트 호출과 할부개월 리스트 렌더링을 함께 사용할 수 없습니다.</summary>

- 우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드의 경우 다이렉트 호출 시
  렌더링할 할부개월 리스트를 지정할 수 없습니다.

</details>

### 간편결제 다이렉트 호출

```json
{
  //...중략
  "bypass": {
    "ksnet": {
      "easyPayDirect": true
    }
  },
  "pay_method": "naverpay",
  "storeDetails": {
    "ceoFullName": "홍길동",
    "address": "서울시 ...",
    "phoneNumber": "01000000000",
    "businessName": "상호명",
    "businessRegistrationNumber": "000000000"
  }
}
```

- KSNET 간편결제 다이렉트는 아래의 결제 방식을 지원합니다.
  - 네이버페이 카드
  - 카카오페이 카드 및 머니
  - 페이코
  - L페이 카드

- 네이버페이 머니·포인트의 경우 현재 KSNET에서는 다이렉트 호출을 지원하지 않습니다.

- 간편결제 다이렉트를 사용하기 위해서는 `bypass.ksnet.easyPayDirect`를 `true`로 설정하고, `pay_method`를 `naverpay`, `kakaopay`, `payco`, `lpay` 중 하나로 지정합니다.

- 구매자 이름(`buyer_name`)을 입력해야 합니다.

- 네이버페이의 경우
  - 현재 카드 결제만 가능
  - 상점명(`storeDetails.businessName`) 필수
  - `buyer_email`, `buyer_tel` 선택
  - 할부 개월 수 표시 설정 가능
  - 이용 가능 카드사 설정 가능 (신한, BC, 국민, 농협, 롯데, 삼성, 시티, 우리, 하나, 현대)

- 카카오페이의 경우
  - 상점 대표자명(`storeDetails.ceoFullName`) 필수
  - 상점 주소(`storeDetails.address`) 필수
  - 상점 전화번호(`storeDetails.phoneNumber`) 필수
  - `buyer_email`, `buyer_tel` 필수
  - 할부 개월 수 표시 설정 가능
  - 이용 가능 카드사 설정 가능 (신한, BC, 국민, 농협, 롯데, 삼성, 시티, 우리, 하나, 현대)

- 페이코의 경우
  - 상점명(`storeDetails.businessName`) 필수
  - 사업자등록번호(`storeDetails.businessRegistrationNumber`) 필수
  - `buyer_email`, `buyer_tel` 필수

- L페이의 경우
  - `buyer_email`, `buyer_tel` 선택
