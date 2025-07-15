---
title: 엑심베이
description: 엑심베이 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 엑심베이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
엑심베이 결제창을 호출할 수 있습니다. **결제결과**는 **PC / 모바일** 모두 **callback** 으로 전달됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 관리하는 주문 번호
    name: "주문명:결제테스트",
    amount: 14.2,
    currency: "USD", // 기본값: USD
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    popup: false, // 팝업창 활성 비활성화 컨트롤
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

  `eximbay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - 신용카드: `card`
  - 알리페이 / 알리페이 플러스: `alipay` (상점아이디 설정에 따라 알리페이 혹은 알리페이 플러스로 호출됩니다. )
  - 해외카드: `card`
  - 유니온페이: `unionpay`
  - 텐페이: `tenpay`
  - 일본 편의점결제(eContext): `econtext`
  - 위챗페이: `wechat`
  - 몰페이: `molpay`

- merchant\_uid: string

  **고객사 고유주문번호**

  매번 고유하게 채번되어야 합니다.

- buyer: string

  **구매자명**

- buyer\_tel: string

  **구매자 연락처**

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- currency?: string

  **결제통화코드**

  - KRW
  - USD
  - EUR
  - GBP
  - JPY
  - THB
  - SGD
  - RUB
  - HKD
  - CAD
  - AUD
  - CNY
  - TWD
  - MYR
  - VND
  - PHP
  - MNT
  - NZD
  - AED
  - MOP
  - BRL
  - KZT
  - NOK
  - SAR
  - TRY

- language?: string

  - 한국어 : ko
  - 영어 : en
  - 중국어 : zh
  - 일본어 : jp

</div>

</div>

<div class="hint" data-style="warning">

**참고사항**

포트원은 엑심베이 정기결제를 지원하지 않습니다.

</div>

<details>

<summary>편의점 결제 테스트 방법</summary>

**편의점결제 동작 방식**

한국의 가상계좌와 같이 결제창 내에서는 등록을 한 다음에 고객에게 이메일 / 문자로 전달되는 화면을 편의점 카운터에서 지불하며 처리합니다.

- 포트원 내부에서는 `pay_method: "vbank"` 로 기록됨
- Econtext 등록이 완료되었다는 콜백함수 및 웹훅 전송 (`status: "ready"` 상태 / `vbank_num`은 `unknown`으로 고정)
- Econtext 로부터 입금확인이 되면 포트원에서 엑심베이로부터 응답을 받아 `status: "paid"`로 변경 후 결제완료처리에 대한 웹훅 전송

**편의점결제 테스트 진행순서**

가상계좌와 같이 실제 고객이 입금한 결과를 테스트해야 하므로 아래와 같이 입금완료됨을 임의적으로 통지받아보실 수 있습니다.

1. 엑심베이 테스트모드 ON상태에서 1번과 같이 결제창 진행

2. 콜백 응답 중 `pg_tid` 값을 별도로 메모 (포트원 관리자콘솔 PG사승인번호 컬럼에서 확인 가능)

3. <http://test.econ.ne.jp/site/tuchi_2/tuchi_menu_2.html>로 이동 후 계정 로그인
   (아이디 : `ectest` / 비번 : `#eg0810#`)

4. ShopID : `361301`, orderID : 2번에서 확보한 PG사승인번호 입력

5. 하단에 있는 **`登録`** 버튼 클릭

6. 다음 페이지에서 한 번 더 **`登録`** 클릭

7. 10분 후 결제상태가 `status: "paid"`로 바뀌는지 확인 (이 때 입금에 대한 웹훅 발송됨)

</details>

## 3. 기타 파라미터

<div class="tabs-container">

<div class="tabs-content" data-title="국내 결제창 호출">

엑심베이**국내 결제창**을 사용하기 위해서는 아래와 같은 방법으로 파라미터 설정이 필요합니다.

```json
{
  "bypass": {
    "issuercountry": "KR"
  }
}
```

<div class="hint" data-style="success">

**국내 결제창 카드 별 승인 통화**

**해외카드**

- VISA/MAster/JCB : KRW 승인 (자국통화승인 서비스 가능)
- AMEX/UnionPay : USD 승인  (자국통화승인 서비스 불가)

**국내카드(국내에서 발행 된 (8개) 카드사 모두 이용 가능)**

- 결제(승인)/정산 통화 : KRW만 지원

</div>

**국내 결제창을 호출하는 경우**

```ts
IMP.request_pay({
  channelKey: "{콘솔 내 연동 정보의 채널키}",
  pay_method: "card",
  merchant_uid: "order_no_0001",
  name: "주문명:결제테스트",
  amount: 14.2,
  currency: "KRW",
  buyer_email: "test@portone.io",
  buyer_name: "구매자이름",
  buyer_tel: "010-1234-5678",
  buyer_addr: "서울특별시 강남구 삼성동",
  buyer_postcode: "123-456",
  popup: false,
  bypass: {
    issuercountry: "KR",
  },
});
```

</div>

</div>
