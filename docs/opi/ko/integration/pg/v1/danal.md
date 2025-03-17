---
title: 다날
description: 다날 결제연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 다날 PG 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 호출">

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여 다날 Tpay 결제창을 호출할 수 있습니다.
**결제결과**는 PC/모바일 환경 모두 경우 IMP.request\_pay(param, callback) 호출 후 **callback** 으로 수신됩니다.

```ts title="Javascript SDK" showLineNumbers
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

  `danal_tpay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank(가상계좌)
  - phone(휴대폰 소액결제) : 휴대폰 결제인 경우 pg 파라미터는 **`danal`** 로 지정하면 됩니다.
  - cultureland (문화상품권)
  - booknlife (도서문화상품권)

- merchant\_uid: string

  **고객사 채번 주문 고유번호**

  고객사에서 매번 고유하게 채번되어야 합니다.

- buyer\_tel: string

  **주문자 연락처**

  미 설정 시 다날 결제창에서 오류 발생 가능

- amount: number

  **결제금액**

  지정하지 않은 경우 0원입니다.

- biz\_num?: string

  **사업자등록번호**

  가상계좌 결제창 호출 시 `사업자등록번호 10자리` 필수 입력 (미설정 시 다날 결제창에서 오류 발생 가능)

</div>

<div class="tabs-content" data-title="비인증 결제(결제창 방식)">

인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 비 인증 결제창을 호출할 수 있습니다.

<div class="hint" data-style="danger">

**amount 금액**

- 빌링키 발급시 amount 파라미터에 금액이 설정되는 경우 **실 결제와 동시에 빌링키가 발급**됩니다.
- 실결제를 원하지 않은 경우 amount 금액을 **0원**으로 설정합니다.

(amount를 0으로 지정한 경우 다날에서 최초 10원 테스트 결제를 하고 30분 쯤 후 자동 취소됩니다.)

</div>

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 'card'만 지원됩니다.
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 0, // 빌링키 발급만 진행하며 결제승인을 하지 않습니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    buyer_addr: "서울특별시 강남구 삼성동",
    period: {
      from: "20200101", //YYYYMMDD
      to: "20201231", //YYYYMMDD
    },
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

  `danal_tpay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: Integer

  **결제금액**

  0원으로 설정시 빌링키만 발급되며 **0원 이상 설정시 실결제와 빌링키 발급이 동시**에 이루어 집니다.

- period?: object

  정기결제시 고객이 구매하는 제품에 대한 제공기간을 명시합니다. 해당 일자가 다날 결제창에 표기 됩니다.

  - from: string

    **YYYYMMDD**

  - to: string

    **YYYYMMDD**

### 빌링키(customer\_uid)로 결제 요청하기

빌링키 발급이 성공하면 실 빌링키는 customer\_uid 와 1:1 매칭되어 **포트원 서버에 저장**됩니다. customer\_uid를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출하시면 결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>

## 3. 부가기능

<div class="tabs-container">

<div class="tabs-content" data-title="통신사 노출 제어">

```json title="특정 통신사만 노출"
{
  "phone": {
    "detail": [
      {
        "carrier": "*", // 모두 활성화
        "enabled": false
      },
      {
        "carrier": "SKT", // SKT만 활성화
        "enabled": true
      }
    ]
  }
}
```

```json title="2개 이상 통신사 노출"
{
  "phone": {
    "detail": [
      {
        "carrier": "SKT",
        "enabled": false
      },
      {
        "carrier": "KTF",
        "enabled": false
      },
      {
        "carrier": "LGT",
        "enabled": false
      },
      {
        "carrier": "CJH",
        "enabled": false
      }
    ]
  }
}
// KCT, SKL 을 제외한 나머지 통신사는 비활성화 됩니다.
```

```json title="특정 통신사만 비노출"
{
  "phone": {
    "detail": [
      {
        "carrier": "SKT",
        "enabled": false
      }
    ]
  }
}
```

<div class="hint" data-style="info">

`phone 파라미터 미 설정시`(기본값) 모든 통신사 노출됨

</div>

</div>

<div class="tabs-content" data-title="휴대폰 번호 고정">

```json
{
  "prefill": {
    "phoneNumber": "휴대폰번호" // 휴대폰번호 입력(하이픈 제거)
  }
}
```

<div class="hint" data-style="info">

휴대폰 결제시 해당 파라미터를 설정하면 휴대폰번호를 고정시킬수 있습니다.

</div>

</div>

<div class="tabs-content" data-title="카드결제 할부개월수">

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

<div class="tabs-content" data-title="카드사 모듈 호출">

```json
{
  "card": {
    "direct": {
      "code": "367",
      "quota": 3,
      "usePoint": "Y"
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

    - usePoint?: string

      해당 파라미터 설정시 카드사 포인트가 후취방식으로 결제됩니다.

<div class="hint" data-style="danger">

**주의사항**

- 카드사 모듈 바로 호출을 이용하기 위해서는 다날측 설정이 우선 필요 합니다.

</div>

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

</div>
