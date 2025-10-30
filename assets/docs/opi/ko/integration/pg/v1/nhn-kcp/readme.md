---
title: NHN KCP
description: NHN KCP 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

(관련 이미지 첨부)

## 채널 설정하기

[결제대행사 채널 설정하기](../../../../ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 일반결제

### 가능한 결제 수단

- **결제창 일반 결제**

  `pay_method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드 : `card`

  - 계좌이체 : `trans`

  - 가상계좌 : `vbank`

  - 상품권 :
    - 컬쳐랜드 문화상품권 : `cultureland`
    - 스마트 문상 : `smartculture`
    - 도서문화상품권 : `booknlife`

  - 휴대폰 소액 결제 : `phone`

  - 간편결제 :
    - 삼성페이 : `samsung`
    - 페이코 : `payco`
    - L페이 : `lpay`
    - 카카오페이 : `kakaopay`
    - 네이버페이 : `naverpay`
    - 애플페이 : `applepay`

  - 베네피아 포인트 : `point`

- **결제창 빌링키 발급**

  `pay_method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card`

- **API 수기(키인) 결제**

  - 카드

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)
  를 참고해주시기 바랍니다.

- **API 빌링키 발급**

  - 카드

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 참고해주시기 바랍니다.

### SDK 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여 NHN
KCP 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback** 으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "결제테스트", //주문명
    amount: 1004,
    company: "상호명", //해당 파라미터 설정시 통합결제창에 해당 상호명이 노출됩니다.
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    language: "ko", // en 입력 후 호출 시 영문으로 결제창이 표시됩니다.
    m_redirect_url: "https://testtest.test", //모바일에서 결제 완료 후 리디렉션 될 URL
    auth_mode: "key-in", // 키인결제(일회성 결제)이용시 설정
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

</div>

</div>

#### 주요 파라미터

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 후
  `kcp.{mid(사이트코드)}` 형식으로 채널을 지정할 때 사용됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - `card` (신용카드)
  - `trans` (실시간 계좌이체)
  - `vbank` (가상계좌)
  - `phone` (휴대폰 소액결제)
  - `cultureland` (컬쳐랜드 문화상품권)
  - `smartculture` (스마트문상)
  - `booknlife` (도서문화상품권)
  - `payco` (페이코)
  - `lpay` (L페이)
  - `kakaopay` (카카오페이)
  - `naverpay` (네이버페이)
  - `samsung` (삼성페이)
  - `applepay` (애플페이)
  - `point` (베네피아 포인트)

- merchant\_uid: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- amount: integer

  **결제금액**

<br />

#### 기타 파라미터

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정값**

  - card\_quota: number\[]

    **할부 개월수**

    예시

    - `[]`: 일시불만 결제 가능
    - `2,3,4,5,6`: 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능
    - `3`: 일시불을 포함한 2,3개월까지 할부개월 선택 가능

  예시코드

  <div class="tabs-container">

  <div class="tabs-content" data-title="할부개월수 설정">

  ```json
  {
    "display": {
      "card_quota": [6] // 할부개월 6개월까지만 활성화
    }
  }
  ```

  </div>

  </div>

- card?: oneof object

  **카드 결제시 세부 설정 정보**

  - detail?: object\[]

    **카드사 렌더링 정보**

    - card\_code?: string

      **카드사 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code)를 참고하세요.

    - enabled?: boolean

      **렌더링 여부**

  - direct?: object

    **카드사 다이렉트 호출 정보**

    - code?: string

      **카드사 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code)를 참고하세요.

    - quota?: number

      **고정 할부 개월수**

      - 일시불인 경우 0으로 입력해야 합니다.

      - 카드사별 포인트 사용시 아래 할부 개월수를 더해서 요청해야 합니다.
        - 현대카드 : 80개월
        - 국민카드, 비씨카드, 삼성카드, 하나카드, 롯데카드, 신한카드, 농협카드, 우리카드, 씨티카드 : 60개월

  예시코드

  <div class="tabs-container">

  <div class="tabs-content" data-title="카드사 다이렉트 호출">

  ```json
  {
    "card": {
      "direct": {
        "code": "367",
        "quota": 3
        //카드사 포인트 사용 경우
        //quota: 80 = 80(현대카드 포인트 할부개월) + 0(일시불)
        //quota: 93 = 80(현대카드 포인트 할부개월) + 13개월 할부
        //quota: 60 = 60(기타카드 포인트 할부개월) + 0(일시불)
        //quota: 63 = 60(기타카드 포인트 할부개월) + 3개월 할부
      }
    },
    "company": "고객사" //해당 파라미터를 설정하지 않으면 카드사 모듈 창에 iamport 로 표기
  }
  ```

  </div>

  <div class="tabs-content" data-title="특정 카드사 노출">

  ```json
  {
    "card": {
      "detail": [
        { "card_code": "*", "enabled": false }, // 모든 카드사 비활성화
        { "card_code": "366", "enabled": true } // 특정 카드만 활성화
      ]
    }
  }
  ```

  </div>

  </div>

- appCard?: boolean

  **앱카드 렌더링 여부**

  `true`로 호출시 각 카드사 앱카드 결제만 활성화됩니다.

  예시코드

  <div class="tabs-container">

  <div class="tabs-content" data-title="카드사 앱카드만 노출">

  ```json
  {
    "appCard": true //true 설정시 각 카드사 앱카드 결제만 활성화
  }
  ```

  </div>

  </div>

#### 유의사항

<details>

<summary>할부 결제는 5만원 이상 결제 요청시 이용 가능합니다.</summary>

일반적으로 결제 금액이 5만원 이상일 경우 할부 결제가 가능하며, 특정 카드사에 따라 1만원 이상일 경우에도 사용이 가능합니다.

</details>

<details>

<summary>상품권 결제시 `bypass.shop_user_id`파라미터를 필수 입력해야합니다.</summary>

결제수단 중 상품권 결제를 요청하는 경우 고객사에서 관리하는 회원ID를 아래와 같은 방법으로 파라미터를 필수로 입력해야 합니다.
해당 정보는 상품권 기관 RM 조치를 위해 입력받고 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="상품권 결제 호출 예제">

```ts
IMP.request_pay({
  channelKey: "{콘솔 내 연동 정보의 채널키}",
  pay_method: "cultureland", //컬처랜드 문화상품권
  merchant_uid: "A00021-TEST",
  name: "당근 10kg",
  amount: 1004,
  buyer_email: "test@porton.io",
  buyer_name: "포트원 기술지원팀",
  buyer_tel: "010-1234-5678",
  buyer_addr: "서울특별시 강남구 삼성동",
  buyer_postcode: "123-456",
  bypass: {
    shop_user_id: "abaddd", // 고객사 회원 id 입력
  },
});
```

</div>

</div>

</details>

<details>

<summary>휴대폰 소액결제시 `buyer_name`과 `bypass.shop_user_id` 파라미터를 필수 입력해야합니다.</summary>

결제수단 중 휴대폰 소액결제를 요청하는 경우 구매자 이름(`buyer_name`)과 고객사에서 관리하는 회원ID(`bypass.shop_user_id`)를 필수로 입력해야 합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="휴대폰 소액결제 호출 예제">

```ts
IMP.request_pay({
  channelKey: "{콘솔 내 연동 정보의 채널키}",
  pay_method: "phone", //휴대폰 소액결제
  merchant_uid: "A00021-TEST",
  name: "당근 10kg",
  amount: 1004,
  buyer_email: "test@portone.io",
  buyer_name: "포트원 기술지원팀", // 휴대폰 결제시 필수
  buyer_tel: "010-1234-5678",
  buyer_addr: "서울특별시 강남구 삼성동",
  buyer_postcode: "123-456",
  bypass: {
    shop_user_id: "abaddd", // 고객사 회원 id 입력 (휴대폰 결제시 필수)
  },
});
```

</div>

</div>

</details>

<details>

<summary>휴대폰 소액결제 시 전화번호를 고정할 수 있습니다.</summary>

`prefill.phoneNumber` 파라미터에 고정할 휴대폰 번호를 입력한 후 결제를 요청합니다.

</details>

<details>

<summary>에스크로 결제관련 안내</summary>

에스크로 결제를 위해서는 **`escrow`** 파라미터를 추가하고 **true** 값으로 설정되어야 합니다.
에스크로 결제 요청시 **장바구니 상품을 묶어서 결제하는 경우**
해당 품목에 대한 정보를 전달하기 위해 해당 상품 관련 정보를 추가 파라미터(**`kcpProducts`**)로 전달해야 합니다.
**`kcpProducts`** 는 다음 4개의 필수 속성으로 구성된 객체배열입니다.

- orderNumber : 상품주문번호
- name : 상품명
- quantity : 수량
- amount : 상품 가격

**`amount`** 값은 결제 금액(`param.amount`) 값과 관계가 없으며 비교 검증하지 않습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="탭">

```ts title="JavaScript SDK"
IMP.request_pay({
  channelKey: "{콘솔 내 연동 정보의 채널키}",
  escrow: true, // 에스크로 결제인 경우 필요
  kcpProducts: [
    {
      orderNumber: "xxxx",
      name: "상품A",
      quantity: 3,
      amount: 1000,
    },
    {
      orderNumber: "yyyy",
      name: "상품B",
      quantity: 2,
      amount: 3000,
    },
  ],
});
```

</div>

</div>

</details>

<details>

<summary>결제창 내 할인쿠폰 영역 활성/비활성화 안내</summary>

`bypass.coupon_apply_yn`파라미터를 이용하여 결제창 내 할인쿠폰 영역을 활성/비활성화 할 수 있습니다.
해당 기능은 KCP와 협의 후 사용 가능합니다.

- `Y`: 활성
- `N`: 비활성

</details>

### SDK 빌링키 발급 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여 NHN
KCP 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback** 으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

빌링키 발급 요청 시에는 `customer_uid` 파라미터를 입력한 후 호출해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 요청">

```ts title="Javascript SDK" showLineNumbers
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //'card'만 지원됩니다.
    merchant_uid: "order_monthly_0001", //상점에서 생성한 고유 주문번호
    name: "정기결제",
    amount: 0, //결제창에 표시될 금액. 발급 요청시에는 결제가 승인되지 않습니다.
    customer_uid: "your-customer-unique-id", //포트원 빌링키로 필수 입력해야 합니다.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "https://testtest.test", //모바일에서 결제 완료 후 리디렉션 될 URL
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

</div>

</div>

#### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 후
  `kcp_billing.{mid(사이트코드)}` 형식으로 채널을 지정할 때 사용됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **포트원 빌링키**

  빌링 결제시 사용되는 값으로 고객사에서 입력한 후 요청해야 합니다. 해당 값은 고객이 입력한 카드정보와 1:1로 매칭됩니다.

- amount: integer

  **결제금액**

  결제창에 표시되는 금액입니다.

#### 유의사항

<details>

<summary>빌링키 발급시 사용한 `customer_uid`는 고객사에서 저장해야 합니다.</summary>

발급된 빌링키를 이용하여 단건 결제 또는 예약/반복 결제 요청시 `customer_uid`를 입력한 후 요청해야합니다.
고객사에서는 빌링키 발급 후 사용한 `customer_uid`를 고객 정보에 맵핑하여 관리하시길 권장드립니다.

</details>

<details>

<summary>빌링키 발급시 생년월일 입력 박스를 항상 표시되도록 설정할 수 있습니다.</summary>

NHN KCP 결제창을 이용한 빌링키 발급 시 PC환경에서 공인인증서 인증 절차를 생략할 수 있습니다.
인증서 인증 절차를 생략하는 경우에도 기본적으로 결제창 내에 주민등록번호 입력 박스가 표시되며,
카드 번호 8자리 입력시 주민등록번호 입력 박스가 생년월일 입력 박스로 변환됩니다.
만약 초기 화면에서 생년월일 입력 박스가 항상 표시되길 원하시면 `bypass.batch_birth_day_yn` 파라미터를 포함하여 빌링키 발급을 요청해야 합니다.

- `Y`: 생년월일 입력박스 항상 표시

</details>

### API 수기(키인)결제 요청하기

수기(키인) 결제 요청시 [`POST /subscribe/payments/onetime`](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime) API를 호출해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 수기(키인) 카드 결제 요청">

```sh
curl -H "Content-Type: application/json" \
       -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
       https://api.iamport.kr/subscribe/payments/onetime
```

</div>

</div>

### API 빌링키 발급 요청하기

빌링키 발급 요청시 [`POST /subscribe/payments/onetime`](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime) 또는
[`POST /subscribe/customers/{customer_uid}`](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D) API를 호출해야 합니다.

`POST /subscribe/payments/onetime`를 호출하시는 경우 빌링키 발급과 동시에 결제가 요청됩니다.
빌링키 발급 및 결제를 원하시는 경우 `customer_uid` 파라미터를 필수로 입력해야 합니다.

`POST /subscribe/customers/{customer_uid}`를 호출하시는 경우 빌링키만 발급됩니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 발급과 동시에 결제 요청하기">

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

</div>

<div class="tabs-content" data-title="빌링키 발급 요청하기">

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

</div>

</div>

#### 유의사항

<details>

<summary>빌링키 발급시 사용한 `customer_uid`는 고객사에서 저장해야 합니다.</summary>

발급된 빌링키를 이용하여 단건 결제 또는 예약/반복 결제 요청시 `customer_uid`를 입력한 후 요청해야합니다.
고객사에서는 빌링키 발급 후 사용한 `customer_uid`를 고객 정보에 맵핑하여 관리하시길 권장드립니다.

</details>

### API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제를 하기 위해서는 [`POST /subscribe/payments/again`](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)
를 이용하여 결제를 요청해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 단건 결제">

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>

### API 빌링키 예약/반복 결제 요청하기

발급된 빌링키로 예약 결제를 하기 위해서는 [`POST /subscribe/payments/schedule`](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe?v=v1#post%20%2Fsubscribe%2Fpayments%2Fschedule)
를 이용하여 결제를 예약합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>
