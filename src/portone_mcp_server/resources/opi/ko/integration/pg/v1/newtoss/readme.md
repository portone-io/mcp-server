---
title: 토스페이먼츠(신모듈)
description: 토스페이먼츠 (신모듈 / 2022-07-27 버전) 연동 방법을 확인합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/tosspayments
---

## 1. 토스페이먼츠 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 최신 JavaScript SDK로 업데이트하기

토스페이먼츠 신모듈 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**토스페이먼츠 신모듈을 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다**

</div>

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)문서를 통해 최신 SDK를 설치해주세요.

## 3. 결제 요청하기

신규 SDK가 제공하는 `IMP` 모듈에서 `request_pay` 함수를 호출합니다.

`pg` 파라미터를 `tosspayments`로 지정하여 토스페이먼츠 신 모듈 연동임을 명시해주세요.

토스페이먼츠 신 모듈을 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts showLineNumbers
const userCode = "고객사 식별코드";
IMP.init(userCode); // 고객사 식별 코드를 넣어 모듈을 초기화해주세요.

IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_id_1667634130160",
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
    m_redirect_url: "https://helloworld.com/payments/result", // 모바일 환경에서 필수 입력
    notice_url: "https://helloworld.com/api/v1/payments/notice",
    confirm_url: "https://helloworld.com/api/v1/payments/confirm",
    currency: "KRW",
    locale: "ko",
    custom_data: { userId: 30930 },
    display: { card_quota: [0, 6] },
    appCard: false,
    useCardPoint: true,
    bypass: {
      tosspayments: {
        useInternationalCardOnly: true, // 영어 결제창 활성화
      },
    },
  },
  (response) => {
    // PC 환경에서 결제 프로세스 완료 후 실행 될 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `tosspayments` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method?: string

  - 카드 (card)
  - 계좌이체(trans)
  - 가상계좌(vbank)
  - 휴대폰 소액결제(phone)
  - 도서문화상품권(booknlife)
  - 스마트문상(smartculture)
  - 컬쳐랜드(cultureland)
  - 카카오페이 (kakaopay)
  - 네이버페이 (naverpay)
  - 엘페이 (lpay)
  - 삼성페이(samsung)
  - SSGpay (ssgpay)
  - 애플페이 (applepay)
  - 페이코 (payco)
  - 토스간편결제 (tosspay)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- buyer\_name: string

  **구매자 이름**

- buyer\_email?: string

  **구매자 email 주소**

- currency?: string

  **통화구분코드**

- appCard?: boolean

  카드 결제시, 카드 결제창에 앱카드만 선택 가능하도록 할지 여부 (기본값: **false**)

- useCardPoint?: boolean

  카드 결제시, 카드 포인트 사용 허용할지 여부

</details>

<details>

<summary>**기타 파라미터 설명**</summary>

- bypass?: object

  - isCulturalExpense?: boolean

    문화비 지출여부

  - useInternationalCardOnly?: boolean

    해외카드(Visa, MasterCard, UnionPay) 결제 여부입니다. 값이 `true`면 해외카드 결제가 가능한 영문 결제창이 열립니다.

  - cashReceiptType?: string

    현금성 결제(계좌이체, 가상계좌)창에서 선택할 수 있는 현금영수증 발급 유형 (기본값: 결제창에서 선택 가능)

    - anonymous (미발행, 자진발급)
    - personal (소득공제)
    - corporate (지출증빙)

```json
{
  "pay_method": "trans",
  "bypass": {
    "isCulturalExpense": true,
    "cashReceiptType": "personal"
  }
}
```

</details>

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 비 인증 결제창을 호출할 수 있습니다. 비 인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 'card'만 지원됩니다.
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 0, // 실제 승인은 발생되지 않고 오직 빌링키만 발급됩니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    customer_id: "matthew", //고객사가 회원에게 부여한 고유 ID
  },
  function (rsp) {
    // callback 로직
  },
);
```

<div class="hint" data-style="info">

- 비인증 결제를 위해서는 **토스페이먼츠로 부터 발급받은 MID정보**를 포트원 관리자콘솔에 설정하셔야 비 인증 결제창을 활성화 시킬수 있습니다.
- 빌링키 발급시 **실 결제는 발생되지 않습니다**.(금액을 지정해도 결제가 발생되지 않음)

</div>

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `tosspayments` 로 지정하면 됩니다.

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

- customer\_id?: string

  **`구매자 식별자`**

  빌링키를 발급한 고객의 고유 ID 를 지정합니다.(회원ID) 해당 값 설정시 빌링키와 고객을 맵핑할 수 있습니다. 누락시 포트원에서 임의의 값을 설정합니다.

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

<div class="hint" data-style="danger">

**MID 발급시 주의사항**

토스페이먼츠로 부터 MID 발급시 **API version** 은 반드시 **1.4** 이어야 합니다.

</div>

**일회성 결제 요청하기**

[**REST API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 일회성 결제를 요청합니다. 요청 시 전달된 카드는 포트원에 등록되지 않습니다.

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

</div>

</div>

## 4. 부가기능

<div class="tabs-container">

<div class="tabs-content" data-title="할부개월수 설정">

```json title="javascript"
{
  "display": {
    "card_quota": [6], // 할부개월 6개월만 활성화
    "only_installment": true // 일시불 항목은 제외
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

  - only\_installment?: boolean

    `true` 인 경우 `card_quota` 에 설정한 할부개월수만 표시

<div class="hint" data-style="info">

할부결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다.

</div>

</div>

<div class="tabs-content" data-title="카드사 모듈 바로 호출">

```json title="javascript"
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

<div class="tabs-content" data-title="고정식 가상계좌 발급">

토스페이먼츠 고정식 가상계좌 발급 서비스를 이용하기 위해서는 **토스페이먼츠 측과 협의**를 통해 결제에 이용하는 MID에 고정식 가상계좌 설정이 반드시 선행되어야 합니다.

해당 설정이 완료되면 두가지 방식으로 고정식 가상계좌를 발급할 수 있습니다.

- [API 방식](https://developers.portone.io/api/rest-v1/vbank?v=v1#post%20%2Fvbanks)
- 결제창 방식

두 방식 모두 **고유식별번호**가 유입되어야 하며 해당 값은 각 고객을 특정할수 있는 고유값이어야 합니다.

결제창 방식을 이용하기 위해서 고객에게 사전에 해당 고유식별번호가 안내되어야 하며 가상계좌 발급단계에서 아래 첨부이미지처럼 고유식별번호 란에 해당 값이 유입되어야 합니다.

(관련 이미지 첨부)

API 방식 또한 `vbank_key` 파라미터가 고유식별번호에 대응되는 값으로 API방식은 고객사에서 직접 해당 값을 기재해서 호출할수 있기 때문에 고객 편의차원에서 훨씬 간편한 고정식 가상계좌 서비스를 제공할수 있습니다.

고정식 가상계좌 발급이 정상적으로 이루어지면 아래와 같이 고객휴대폰 번호로 SMS가 발송되며 고객은 해당 정보를 보고 입금을 할수 있습니다.(비용: 무료)

(관련 이미지 첨부)

</div>

</div>

## 5. 사용가능 기능

토스페이먼츠 신모듈을 통해서 사용가능한 추가 기능들은 다음과 같습니다. 자세한 내용은 API 문서를 참고해주세요.

- [결제금액 사전등록 API](https://developers.portone.io/api/rest-v1/payment.validation?v=v1#post%20%2Fpayments%2Fprepare)
- [결제취소 API](https://developers.portone.io/api/rest-v1/payment?v=v1#post%20%2Fpayments%2Fcancel)
- [현금영수증 API](https://developers.portone.io/api/rest-v1/receipt?v=v1)
- [현금영수증 발급(외부) API](https://developers.portone.io/api/rest-v1/receipt?v=v1#post%20%2Freceipts%2Fexternal%2F%7Bmerchant_uid%7D)

<div class="hint" data-style="danger">

**기존에 deprecated된 응답들은 모두 제거됐습니다. ⚠️**

신 토스페이먼츠 모듈 연동시에 사용되는 신규 JS SDK는 기존 모듈에서 제공했던 CallBack 파라미터가 대부분 삭제되었습니다.(특히 deprecated 로 명시된 파라미터는 모두 삭제되었습니다.)

해당 JS SDK 사용시 Callback 으로 내려받을수 있는 데이터는 오직 아래 두가지 입니다.

**`imp_uid`, `merchant_uid`**

따라서 해당 SDK를 사용하실때는 `IMP.request_pay()`로부터 응답된 객체(또는 쿼리 파라미터)에서 `imp_uid`를 가지고 **아임포트 REST API(GET `/payments/imp_uid`)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여 응답 파라미터 중 status 파라미터로 결제 상태를 파악하셔야 합니다.

</div>

<div class="hint" data-style="info">

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

위 JS SDK 를 이용하여 토스페이먼츠,케이에스넷 연동시 callback Data는
아래와 같이 두가지 형태로만 내려갑니다.

- `imp_uid`
- `merchant_uid`

위 PG사를 제외한 다른 PG사는 `imp_success` 파라미터가 기존처럼 내려가지만
해당 파리미터는 deprecated 된 값이기 때문에 해당 값에 의존성을 가진 프로그램 로직은 모두 삭제하시는
방향성을 잡아가셔야 하는점 유념하시기 바랍니다.

</div>

<div class="hint" data-style="info">

**토스페이먼츠 API 버전 설정**

- [토스페이먼츠 개발자센터](http://app.tosspayments.com/signin?redirectUrl=https%3A%2F%2Fdevelopers.tosspayments.com%2Fmy%2Fapi-keys) 로그인

- 왼쪽 네비게이션 메뉴 API 키 선택 → API 버전을 **2022-07-27**로 선택

  API 버전을 다르게 설정하면 결제 승인 / 실패 시 실제 응답과 다른 응답을 받아볼 수 있으니 **반드시 API 버전을 2022-07-27로** 맞춰주시기 바랍니다

(관련 이미지 첨부)

</div>
