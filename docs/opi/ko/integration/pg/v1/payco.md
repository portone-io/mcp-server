---
title: 페이코
description: 페이코 결제 연동방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 페이코 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
페이코 결제창을 호출할 수 있습니다. **결제결과**는 PC, 모바일 모두 `IMP.request_pay(param, callback)` 호출
후 **callback** 으로 수신됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001", // 상점에서 관리하는 주문 번호
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

  `payco` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- popup?: boolean

  페이코의 경우 모바일 환경에서 기본으로 iframe 방식으로 결제창이 호출됩니다.
  팝업 방식으로 결제창 호출을 원하시는 경우 `popup : true`로 설정해 주세요.

  **WebView 등 팝업이 차단되는 환경**에서는 `popup : false`로 설정하신 후 호출하시길 권장드립니다.

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank(가상계좌)

- merchant\_uid: string

  **`고객사 주문번호`**

  매번 고유하게 채번되어야 합니다.

- buyer\_tel: string

  **구매자 연락처**

  필수 파라미터 입니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

</div>

<div class="tabs-content" data-title="정기 결제창 요청">

인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 비 인증 결제창을 호출할 수 있습니다.

<div class="hint" data-style="info">

**amount 금액**

- 금액이 설정되어도 실결제는 발생되지 않습니다.

</div>

```ts title="JavaScript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "PAYCO 자동결제 등록",
    amount: 1000, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급(자동결제 등록) 성공");
    } else {
      alert("빌링키 발급(자동결제 등록) 실패");
    }
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

  **`payco`** 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- popup?: boolean

  페이코의 경우 모바일에서 기본으로 iframe 방식으로 결제창이 호출됩니다. `popup : true`로 설정하시면 결제창이 팝업창으로 뜨게 됩니다.

  **WebView 등 팝업이 차단되는 환경**에서는 `popup : false`로 설정하는 것을 권장합니다.

- customer\_uid?: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: number

  **결제금액**

  금액이 설정되어도 실 결제는 발생되지 않습니다.

**빌링키(`customer_uid`)로 결제 요청하기**

빌링키 발급이 성공하면 실 빌링키는 `customer_uid` 와 1:1 매칭되어 **포트원 서버에 저장**됩니다. `customer_uid`를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출하시면 결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

<div class="tabs-content" data-title="정기결제 API 방식">

**페이코는 API 비 인증 결제를 지원하지 않습니다.**

</div>

</div>
