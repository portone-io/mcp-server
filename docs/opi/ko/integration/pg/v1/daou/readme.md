---
title: 키움페이 (다우데이타/페이조아)
description: 키움페이 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 키움페이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여 다우 페이조아 결제창을 호출할 수 있습니다. **결제 결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후 **callback**으로 수신되고 모바일의 경우 **m\_redirect\_url**로 리디렉션됩니다.

<div class="hint" data-style="warning">

**페이조아 결제창 연동을 위해서는 ****JS SDK Version 1.2.0**** 이상을 사용하셔야 합니다.**

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "mid_1234567890",
    escrow: false,
    amount: 1004,
    name: "노스페이스 롱패딩 M",
    buyer_name: "홍길동",
    buyer_email: "hello@world.com",
    buyer_tel: "01012345678",
    digital: false, // 디지털로 계약되었다면 true로 설정
    m_redirect_url: "https://allerts.com/payments/complete",
    bypass: {
      // 페이조아(다우데이타) 전용 파라미터
      daou: {
        PRODUCTCODE: "portone",
        CASHRECEIPTFLAG: 0,
      },
    },
    app_scheme: "portoneappscheme",
  },
  function (rsp) {
    // callback 로직
    // * ...중략... *
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

  `daou` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card(신용카드)
  - trans(실시간 계좌이체)
  - vbank(가상계좌)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- digital: string

  **디지털 컨텐츠 여부**

  고객사 <-> 페이조아간 계약 상태에 따라 정해진 올바른 값을 넣어야 함. 그렇지 않은 경우 결제 진행 불가

- bypass.daou.PRODUCTCODE?: string

  **결제 상품 고유 번호**

  값에 대해 정해진 규격이 없고 보내지 않을 경우 포트원에서 기본값(iamport)을 설정해 페이조아 측으로 전달

- bypass.daou.CASHRECEIPTFLAG?: number

  **현금영수증 발급 구분코드**

  비 신용결제(계좌,가상)시 페이조아에서 자동발급 여부 구분코드

  - `1`: 허용
  - `0`: 차단

- app\_scheme?: string

  **모바일 앱 URL Scheme**

  모바일 앱 환경에서 결제시 필수 파라미터

- amount: number

  **결제금액**

  **string** 이 아닌 점에 유의하세요.

- escrow?: boolean

  **에스크로 설정여부**

  계좌이체,가상계좌만 지원됩니다.

</div>

<div class="tabs-content" data-title="비 인증 API 요청">

**API 방식으로 빌링키 발급,결제요청,예약결제를 구현할수 있습니다.**

**일회성 결제 요청하기**

REST API [**POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 일회성 결제를 요청합니다. 요청 시 전달된 카드는 포트원에 등록되지 않습니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

**빌링키 발급 요청하기**

REST API [**POST /subscribe/customers/{customer\_uid}**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 호출하여 빌링키 발급을 요청합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

**빌링키 발급 및 최초 결제 요청하기**

REST API [**POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 빌링키 발급과 최초 결제를 요청합니다.

- **`customer_uid`** : 빌링키 등록을 위해서 지정해야 합니다.

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

<div class="tabs-content" data-title="에스크로 결제">

에스크로 결제를 위해서는 **`escrow`** 파라미터를 추가하고 **true** 값으로 설정해야 합니다. 에스크로 결제가 완료되면 고객사는 배송정보 등록을 진행해야 하며 해당 작업이 누락되는 경우 **정산이 진행되지 않습니다**. [**배송정보 등록**](https://developers.portone.io/api/rest-v1/escrow?v=v1#post%20%2Fescrows%2Flogis%2F%7Bimp_uid%7D) 및 [**배송수정 API**](https://developers.portone.io/api/rest-v1/escrow?v=v1#put%20%2Fescrows%2Flogis%2F%7Bimp_uid%7D) 를 이용하여 배송정보를 관리할 수 있습니다.

```json title="API Body 예시"
{
  "logis": {
    "invoice": "1728384716123",
    "company": "CJGLS",
    "receiving_at": "20220215",
    "address": "성수이로20길16"
  },
  "receiver": {
    "name": "홍길동"
  },
  "sender": {
    "relationship": "본인"
  }
}
```

<div class="hint" data-style="danger">

**주의사항**

- 에스크로 배송정보 등록/수정 시 고객사가 전달한 배송정보(운송장 번호, 택배사 이름 등)에 대해 페이조아 측에서 유효성 체크를 하지 않습니다.

</div>

</div>

</div>
