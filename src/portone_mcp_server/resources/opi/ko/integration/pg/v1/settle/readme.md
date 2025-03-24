---
title: 헥토파이낸셜
description: 헥토파이낸셜 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 헥토파이낸셜 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을
호출하여 헥토파이낸셜 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)`
호출 후 **`callback`** 으로 수신되며
모바일의 경우 **`m_redirect_url`** 로 리디렉션됩니다.

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
    buyer_tel: "010-1234-5678", // 누락시 오류 발생
    buyer_addr: "서울특별시 강남구 삼성동",
    company: "포트원", // 가상계좌 발급시 권고사항
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
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

  `settle` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank(가상계좌)
  - phone (휴대폰소액결제)

- merchant\_uid: string

  **고객사 고유주문번호**

  매번 고유하게 채번되어야 합니다.

- buyer\_tel: string

  **구매자 연락처**

  필수 파라미터 입니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- name?: string

  **상품명**

  **휴대폰** 결제 요청인 경우 필수 파라미터

- company?: string

  **회사명**

  **휴대폰, 가상계좌** 결제 요청인 경우 필수 파라미터

- company\_en?: string

  **회사명(영문)**

  **휴대폰** 결제 요청인 경우 필수 파라미터

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

**세틀뱅크는 비 인증 결제창을 지원하지 않습니다.**

</div>

<div class="tabs-content" data-title="비인증 API  결제요청">

**API 방식으로 결제요청,예약결제를 구현할수 있습니다.**

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

<div class="hint" data-style="info">

**세틀뱅크** [**빌링키 단독 발급 API**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)**는 별도 계약 후 사용가능합니다..**

</div>

**빌링키 발급 및 최초 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 빌링키 발급과 최초 결제를 요청합니다.

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

**자세한 비 인증 결제 가이드는 아래 링크를 참조하세요**

[비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth)

</div>

</div>
