---
title: 이지페이(KICC) 해외결제
description: 이지페이(KICC) 해외결제 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 가능한 결제 수단

- **결제창 일반 결제**

  KICC 해외결제를 통해 위챗페이와 알리페이 플러스를 이용할 수 있습니다.
  이용하고자 하는 결제사 별 파라미터는 아래를 참고해주세요.

## SDK 결제 요청하기

결제 요청 시에는 `request_pay` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KICC 채널 사용을 명시해주세요.

KICC 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="위챗페이">

```javascript
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "wechat",
    merchant_uid: "order_no_0001",
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
    //* ...중략... *//
  },
);
```

**주요 파라미터 설명**

- channelKey: string

**채널키**

결제를 진행할 채널을 지정합니다.

포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

- pay\_method: string

  **결제수단 구분코드**

  - wechat (위챗페이)
  - alipay\_plus (알리페이 플러스)

- merchant\_uid: string

  **주문번호**

  고객사에서 매번 고유하게 채번되어야 합니다.

- buyer\_name: string

  **주문자 이름**

- buyer\_email: string

  **주문자 이메일**

- buyer\_tel: string

  **주문자 연락처**

- amount: number

  **결제금액**

- currency: string

  **결제 통화 코드**

  [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) 통화 코드

  - `KRW`: 한국 원
  - `USD`: 미국 달러

  미입력하거나 올바르지 않은 값을 입력한 경우 원화(KRW)결제로 동작합니다.

- language: string

  **결제창 언어**

  - `ko`: 한국어
  - `en`: 영어
  - `zh`: 중국어 (중국본토)

</div>

<div class="tabs-content" data-title="알리페이 플러스">

```javascript
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "alipay_plus",
    merchant_uid: "order_no_0001",
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    order_description: "주문 상세 내용",
    alipay_plus: {
      wallet: "alipay",
    },
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

- pay\_method: string

  **결제수단 구분코드**

  - wechat (위챗페이)
  - alipay\_plus (알리페이 플러스)

- merchant\_uid: string

  **주문번호**

  고객사에서 매번 고유하게 채번되어야 합니다.

- buyer\_name: string

  **주문자 이름**

- buyer\_email: string

  **주문자 이메일**

- buyer\_tel: string

  **주문자 연락처**

- order\_description: string

  **주문 상세 정보**

  주문 상세 정보로 고객사에서 자유롭게 입력합니다.

  알리페이 플러스 결제시 필수입니다.

  KICC와 알리페이 플러스에서는 영문만 사용하는 것을 권장합니다.

- amount: number

  **결제금액**

- currency: string

  **결제 통화 코드**

  [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) 통화 코드

  - `KRW`: 한국 원
  - `USD`: 미국 달러

  미입력하거나 올바르지 않은 값을 입력한 경우 원화(KRW)결제로 동작합니다.

- language: string

  **결제창 언어**

  - `ko`: 한국어
  - `en`: 영어
  - `zh`: 중국어 (중국본토)

- alipay\_plus: object

  **알리페이 플러스 정보**

  - wallet?: string

    **알리페이 플러스를 통해 이용할 간편결제**

    미입력 시 이용 가능한 간편결제 수단이 모두 노출되는 알리페이 플러스 통합 월렛 화면이 표기됩니다.

    - `alipay`: Alipay (알리페이)
    - `true_money`: TrueMoney (트루머니)
    - `alipay_hk`: AlipayHK (알리페이 홍콩)
    - `touch_n_go`: Touch 'n Go (터치앤고)
    - `gcash`: GCash (지캐시)
    - `dana`: DANA (다나)
    - `rabbit_line_pay`: Rabbit LINE Pay (래빗 라인페이)
    - `bpi`: BPI - Bank of the Philippine Islands (필리핀 제도 은행)
    - `boost`: Boost (부스트)
    - `bill_ease`: BillEase (빌이즈)
    - `tinaba`: Tinaba (티나바)
    - `mpay`: MPay (엠페이)
    - `kredivo`: Kredivo (크레디보)

</div>

</div>

## 유의 사항

<div class="tabs-container">

<div class="tabs-content" data-title="위챗페이">

### 결제 승인

위챗페이의 경우 위챗 앱을 이용해 QR코드를 스캔하여 결제를 진행하는 방식으로 결제창이 닫힌 이후에도 구매자가 QR코드를 이미
스캔해둔 상태라면 언제든지 결제 승인이 발생할 수 있습니다.

따라서 PC에서 callback / Mobile에서 redirect 된 이후 결제내역 조회를 통해 확인된 상태값을 100% 신뢰하지 않도록
해야하며 웹훅 연동은 필수로 진행해야합니다.

### 결제 취소

위챗페이의 경우 결제 취소가 비동기로 처리됩니다. 결제 취소 요청에 대한 응답으로 주문 상태를 변경하지 않고
웹훅을 통해 결제 취소 결과를 반영하도록 처리가 필요합니다.

### 도메인 등록

위챗페이는 KICC를 통해 결제창이 오픈될 고객사 결제 페이지 도메인에 대한 등록 요청이 필요합니다.

등록되어있지 않은 도메인에 대해서는 모바일 결제 시도 시 오류 페이지로 연결되므로 유의 바랍니다.

</div>

<div class="tabs-content" data-title="알리페이 플러스">

### 결제 승인

알리페이 플러스의 경우 일부 결제 수단은 앱으로 QR코드를 스캔하여 결제를 진행하는 방식으로 결제창이 닫힌 이후에도 구매자가 QR코드를 이미
스캔해둔 상태라면 언제든지 결제 승인이 발생할 수 있습니다.

따라서 PC에서 callback / Mobile에서 redirect 된 이후 결제내역 조회를 통해 확인된 상태값을 100% 신뢰하지 않도록
해야하며 웹훅 연동은 필수로 진행해야합니다.

</div>

</div>
