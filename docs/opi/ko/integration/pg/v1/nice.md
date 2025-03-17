---
title: (구) 나이스페이먼츠
description: (구) 나이스페이먼츠 결제창 연동 가이드를 안내합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="warning">

**나이스페이먼츠(구모듈) 연동 방법에 관한 매뉴얼**입니다.

신규 연동 고객사이시거나 나이스페이먼츠 신모듈로 업그레이드를 원하신다면 [나이스페이먼츠(신모듈) 연동 가이드](https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/readme)를 참고하여 진행해주세요.
구모듈에 비해 신모듈에서 다양한 기능 및 결제수단을 지원하고 있습니다. 신규 고객사의 경우 가급적 신모듈로 연동하는 것을 권장드립니다.

</div>

## 1. 나이스페이먼츠 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
NICE페이먼츠 결제창을 호출할 수 있습니다.
**결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback** 으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    language: "en", // 결제창 언어 선택 파라미터  ko: 한국어, en: 영문
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    niceMobileV2: true, // 신규 모바일 버전 적용 시 설정
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

  `nice` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card(신용카드)
  - trans(실시간 계좌이체)
  - vbank(가상계좌)
  - phone(휴대폰소액결제)
  - kakaopay(카카오페이)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- niceMobileV2?: boolean

  나이스 모바일 신규버전 적용 여부(기본 값: `false`)

- escrow?: boolean

  **에스크로 설정여부**

- currency?: string

  **결제 통화(기본 값: KRW)**

  - KRW(한국 원)
  - USD(미국 달러)(모바일의 경우 `niceMobileV2` 파라미터가 `true`일 경우에만 사용 가능)

</div>

<div class="tabs-content" data-title="비인증 API 요청">

**API 방식으로 빌링키 발급,결제요청,예약결제를 구현할수 있습니다.**

---

**일회성 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 일회성 결제를 요청합니다. 요청 시 전달된 카드는 포트원에 등록되지 않습니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

---

**빌링키 발급 요청하기**

REST [**API POST /subscribe/customers/{customer\_uid}**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 호출하여 빌링키 발급을 요청합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

---

**빌링키 발급 및 최초 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 빌링키 발급과 최초 결제를 요청합니다.

- **`customer_uid`** : 빌링키 등록을 위해서 지정해야 합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

---

**빌링키로 결제 요청하기**

빌링키 발급과 최초 결제가 성공하면 빌링키는 전달된 `customer_uid` 와 1:1 매칭되어 포트원에 저장됩니다.
보안상의 이유로 서버는 빌링키에 직접 접근할 수 없기 때문에 `customer_uid`를 이용해서
재결제([**POST /subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)) REST API를 다음과 같이 호출합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

<div class="hint" data-style="info">

**나이스페이먼츠는 비인증 결제는 API 방식으로만 지원됩니다.**

비인증 결제를 연동하기 위해서는 카드정보를 획득할수 있는 UI를 구성해 주셔야 하며
해당 가이드는 [**비인증결제 연동하기**](https://developers.portone.io/opi/ko/integration/start/v1/non-auth)에서 확인해주시면 됩니다.

</div>

</div>

</div>

## 3. 부가기능

<div class="tabs-container">

<div class="tabs-content" data-title="할부개월수 설정">

```json
{
  "display": {
    "card_quota": [6] // 할부개월 6개월까지만 활성화
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

할부결제는 **5만원 이상 결제 요청 시**에만 이용 가능합니다.

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

- **`code`** : 카드사 금융결제원 표준 코드. [**링크**](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조 (**string**)
- **`quota`** : 할부 개월 수. 일시불일 시 0으로 지정. (**number**)

<div class="hint" data-style="danger">

**주의사항**

- 일부 PG사의 경우, 모든 상점아이디에 대하여 카드사 결제창 direct 노출 기능을 지원하지 않습니다. 반드시 포트원을 통해 현재 사용중인 상점아이디가 카드사 결제창 direct 호출이 가능하도록 설정이 되어있는지 PG사에 확인이 필요합니다.

</div>

</div>

<div class="tabs-content" data-title="특정 카드사 노출">

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

<div class="tabs-content" data-title="부가세 지정">

```json
// 영세율 결제 경우
{
  "amount": 1000,
  "tax_free": 0,
  "vat_amount": 0 // 부가세 지정
}
```

**파라미터 설명**

- vat\_amount?: number

  **부가세 지정**

  상점 아이디 설정이 영세율 방식인 경우 부가세를 지정할 수 있습니다.

<div class="hint" data-style="danger">

주의사항

- 상점 아이디 설정이 지정금액 방식인 경우에는 취소 시에 공급가액, 부가세, 봉사료, 면세금액 등을 설정하도록 하고 있습니다.([링크](http://developers.nicepay.co.kr/tip.php)의 1617 코드 참조). 취소 시 취소할 금액, 부가세, 면세금액을 정확하게 전달해 주셔야 공급가액, 부가세, 면세금액, 봉사료(0원)가 설정되어 정상적으로 취소가 된다는 점 주의해주시기 바랍니다.

</div>

</div>

</div>
