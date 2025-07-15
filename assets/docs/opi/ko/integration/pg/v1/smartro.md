---
title: 스마트로(구모듈)
description: 스마트로 연동 방법을 안내합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="warning">

**스마트로(구모듈) 연동 방법에 관한 매뉴얼**입니다.

신규 연동 고객사이시거나 스마트로 신모듈로의 업그레이드를 원하신다면 [스마트로(신모듈) 연동 가이드](https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/readme)를 참고하여 진행해주세요.
구모듈에 비해 신모듈에서 다양한 기능 및 결제수단을 지원하고 있습니다. 신규 고객사의 경우 가급적 신모듈로 연동하는 것을 권장드립니다.

</div>

## 1. 스마트로 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
스마트로 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)`
호출 후 **callback**으로 수신되고
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

  `smartro` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank(가상계좌)

- merchant\_uid: string

  **`고객사 주문번호`**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

</div>

</div>
