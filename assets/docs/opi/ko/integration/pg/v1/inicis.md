---
title: KG이니시스
description: KG이니시스 결제창 연동 가이드입니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/inicis-v2
---

## 1. KG이니시스 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
KG이니시스 결제창을 호출할 수 있습니다.
**결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback** 으로 수신 되며
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678", //필수 파라미터 입니다.
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    escrow: true, //에스크로 결제인 경우 설정
    vbank_due: "YYYYMMDD",
    bypass: {
      // PC 경우
      acceptmethod: "noeasypay", // 간편결제 버튼을 통합결제창에서 제외(PC)
      // acceptmethod: "cardpoint", // 카드포인트 사용시 설정(PC)
      // 모바일 경우
      P_RESERVED: "noeasypay=Y", // 간편결제 버튼을 통합결제창에서 제외(모바일)
      // P_RESERVED: "cp_yn=Y", // 카드포인트 사용시 설정(모바일)
      // P_RESERVED: "twotrs_bank=Y&iosapp=Y&app_scheme=your_app_scheme://", // iOS에서 계좌이체시 결제가 이뤄지던 앱으로 돌아가기
    },
    period: {
      from: "20200101", //YYYYMMDD
      to: "20201231", //YYYYMMDD
    },
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `html5_inicis.{PG상점아이디}`

  PG상점아이디는 KG이니시스와 계약 후 발급받을 수 있습니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  <details>

  <summary>결제수단 구분코드</summary>

  - `card` (신용카드)
  - `kakaopay` (카카오페이 허브형)
  - `naverpay` (네이버페이)
  - `samsung` (삼성페이 허브형)
  - `applepay` (애플페이 허브형)
  - `ssgpay` (SSG페이 허브형)
  - `payco` (페이코 허브형)
  - `tosspay` (토스페이 허브형)
  - `lpay` (L페이 허브형)
  - `trans` (실시간 계좌이체)
  - `vbank`(가상계좌)
  - `phone` (휴대폰소액결제)
  - `cultureland` (문화상품권)
  - `smartculture` (스마트문상)
  - `booknlife`(도서문화상품권)

  </details>

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- buyer\_tel: string

  **주문자연락처**

  필수 파라미터 입니다.

- vbank\_due?: string

  가상계좌 입금마감일시를 지정할수 있습니다.(미 지정시 Default 30일)

- period?: object

  고객이 구매하는 제품에 대한 제공기간을 명시합니다.

  - from: string

    **YYYYMMDD**

  - to: string

    **YYYYMMDD**

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

**PG사 결제창으로 카드정보를 입력받고 빌링키를 발급할수 있습니다.**

- 인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 비 인증 결제창을 호출할 수 있습니다.
- 비 인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.
- amount 파라미터에 금액을 설정하여도 실제 승인은 이루어지지 않습니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 'card'만 지원됩니다.
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 0, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `html5_inicis` 로 설정

  - KG이니시스에서 발급받은 상점아이디가 여러개(각각 일반 및 정기)인 경우에는 html5\_inicis.{상점아이디} 또는 inicis.{상점아이디}(for ActiveX)로 지정합니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: number

  **결제금액**

  결제창에 표시될 금액으로 실제 승인은 이루어지지 않습니다.(실 결제를 발생시키기 위해서는 **customer\_uid** 로 **REST API 를 이용하여 결제요청**을 해주셔야 합니다.)

**빌링키(customer\_uid)로 결제 요청하기**

빌링키 발급이 성공하면 실 빌링키는 customer\_uid 와 1:1 매칭되어 **포트원 서버에 저장**됩니다. customer\_uid를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출하시면 결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
    -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
    https://api.iamport.kr/subscribe/payments/again
```

</div>

<div class="tabs-content" data-title="비인증 API 방식">

**API 방식으로 빌링키 발급,결제요청,예약결제를 구현할수 있습니다.**

**일회성 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 일회성 결제를 요청합니다. 요청 시 전달된 카드는 포트원에 등록되지 않습니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

**빌링키 발급 요청하기**

REST [**API POST /subscribe/customers/{customer\_uid}**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 호출하여 빌링키 발급을 요청합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

**빌링키 발급 및 최초 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 빌링키 발급과 최초 결제를 요청합니다.

- **`customer_uid`** : 빌링키 등록을 위해서 지정해야 합니다.
- **`amount`** : 0원 이상 설정시 빌링키 발급과 동시에 실결제가 발생됩니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

**빌링키로 결제 요청하기**

빌링키 발급과 최초 결제가 성공하면 빌링키는 전달된 `customer_uid` 와 1:1 매칭되어 포트원에 저장됩니다. 보안상의 이유로 서버는 빌링키에 직접 접근할 수 없기 때문에 `customer_uid`를 이용해서 재결제([**POST /subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)) REST API를 다음과 같이 호출합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

**자세한 가이드는 아래 링크를 참조하세요**

[비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth)

</div>

</div>

## 3. 부가기능

<div class="tabs-container">

<div class="tabs-content" data-title="할부개월수 조정">

```json
{
  "display": {
    "card_quota": [6] // 할부개월 6개월만 활성화
  }
}
```

**파라미터 설명**

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정값**

  - card\_quota: number\[]

    **할부 개월수**

    예시

    - `[]`: 일시불만 결제 가능
    - `2,3,4,5,6`: 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능
    - `3`: 일시불을 포함한 2,3개월까지 할부개월 선택 가능

<div class="hint" data-style="info">

할부결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다.

</div>

</div>

<div class="tabs-content" data-title="카드사 모듈 바로 호출">

```json
{
  "card": {
    "direct": {
      "code": "367",
      "quota": 3
    }
  }
}
```

**파라미터 설명**

- card?: object

  - direct?: object

    - code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - quota?: number

      **할부 개월 수**

      일시불일 시 0 으로 설정됩니다.

</div>

<div class="tabs-content" data-title="카드사 노출 조작">

```json
{
  "card": {
    "detail": [
      { "card_code": "*", "enabled": false }, //모든 카드사 비활성화
      { "card_code": "366", "enabled": true } //특정 카드만 활성화
    ]
  }
}
```

**파라미터 설명**

- detail?: object\[]

  **카드사 렌더링 정보**

  - card\_code?: string

    **카드사 코드**

    [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code)를 참고하세요.

  - enabled?: boolean

    **렌더링 여부**

</div>

<div class="tabs-content" data-title="영세율">

```json
// 영세율의 경우
{
  "amount": 1000,
  "tax_free": 0,
  "vat_amount": 0
}
```

**파라미터 설명**

- vat\_amount?: number

  상점아이디(MID)에 영세율 설정된 경우 부가세(`vat_amount`) 및 면세금액(`tax_free`)를 0원으로 지정하여 영세율 결제 가능

<div class="hint" data-style="danger">

주의사항

- 취소 시 **요청된 값 그대로 KG이니시스에서 취소**가 되므로, 취소할 금액, 부가세, 면세금액을 정확하게 전달해 주셔야 부가세, 면세금액이 설정되어 정상적으로 취소가 된다는 점 주의해주시기 바랍니다.
- 실시간 계좌이체 및 가상계좌의 경우 현금영수증 발급하지 않으면 매출전표에 부가세가 나눠서 표시 되지 않습니다

</div>

</div>

<div class="tabs-content" data-title="상점부담무이자할부 설정">

<div class="hint" data-style="info">

**상점 부담 무이자 할부 설정은 사전에 반드시 KG이니시스에 협의후 KG이니시스쪽 설정이 먼저 선행되어야 합니다.**

</div>

KG이니시스 설정이 완료되었으면 아래와 같이 파라미터 설정하시면 됩니다.

```json
{
  "card": {
    "interest_free": 7 //모든 카드 7개월까지 상점분담무이자
  }
}
```

</div>

</div>
