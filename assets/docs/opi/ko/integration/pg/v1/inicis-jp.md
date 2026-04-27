---
title: KG이니시스 일본결제
description: KG이니시스 일본결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 가능한 결제 수단에

- **결제창 일반 결제**

  `pay_method` 파라미터를 결제 수단에 따라 아래와 같이 설정합니다.

  - 카드 : `card`

  - 편의점결제 : `cvs`

  - 간편결제
    - PayPay : `paypay`
    - Amazon Pay : `amazonpay`
    - Rakuten Pay : `rakutenpay`
    - Merpay : `merpay`
    - au PAY : `aupay`
    - dBarai : `dbarai`

## SDK 결제 요청하기

[JavaScript SDK (신규)](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)의 `IMP.request_pay(param, callback)`을 호출하여
이니시스 일본결제 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback**으로 수신되고 모바일의 경우 **m\_redirect\_url**로 리디렉션됩니다.

<div class="hint" data-style="info">

이니시스 일본결제는 최신 SDK에서만 지원됩니다.
기존 JavaScript SDK를 사용 중이신 경우 [JavaScript SDK (신규)](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) 문서를 참고하여 업데이트를 진행해주세요.

**이니시스 일본결제를 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다.**

</div>

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="danger">

**기존에 deprecated된 응답들은 모두 제거**됐습니다.

이니시스 일본결제 연동시에 사용되는 신규 JS SDK는 기존 모듈에서 제공했던 CallBack 파라미터가 대부분 삭제되었습니다.(특히 deprecated 로 명시된 파라미터는 모두 삭제되었습니다.)

해당 JS SDK 사용시 Callback 으로 내려받을수 있는 데이터는 오직 아래 두가지 입니다.

**`imp_uid`, `merchant_uid`**

따라서 해당 SDK를 사용하실때는 `IMP.request_pay`로부터 응답된 객체(또는 쿼리 파라미터)에서 `imp_uid`를 가지고 **포트원 REST API(GET `/payments/imp_uid`)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여 응답 파라미터 중 status 파라미터로 결제 상태를 파악하셔야 합니다.

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제요청 (JPPG)">

```javascript
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_id_1667634130160",
    name: "Test",
    amount: 100,
    currency: "JPY",
    popup: true,
    buyer_name: "Port One",
    buyer_email: "buyer@example.com",
    buyer_tel: "0216705176",
    buyer_first_name_kana: "ポート",
    buyer_last_name_kana: "ワン",
    m_redirect_url: "https://helloworld.com/payments/result",
    notice_url: "https://helloworld.com/api/v1/payments/notice",
    storeDetails: {
      storeName: "波音戸音 毛流",
      storeNameKana: "ポートーンモール",
      storeNameEn: "Portone Mall",
      storeNameShort: "PTM",
      contactName: "サポート窓口",
      email: "help@example.com",
      phoneNumber: "0216705176",
      openingHours: {
        open: "11:00",
        close: "23:00",
      },
    },
    display: {
      card_quota: [0, 3, 5, 6, 10, 12],
    },
    cvs: {
      payment_deadline: {
        valid_hours: 48,
        due_date: "2026-04-01T23:59:59Z",
      },
    },
    bypass: {
      inicis_jp: {
        paymentUI: {
          colorTheme: "red1",
          logoUrl: "https://example.com/logo.svg",
        },
      },
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

  - `card` (카드)
  - `cvs` (편의점)
  - `paypay` (PayPay)
  - `amazonpay` (Amazon Pay)
  - `rakutenpay` (Rakuten Pay)
  - `merpay` (Merpay)
  - `aupay` (au PAY)
  - `dbarai` (dBarai)

- merchant\_uid: string

  **주문번호**

  고객사에서 매번 고유하게 채번되어야 합니다.

  알파벳 대소문자, 숫자 및 일부 특수문자만 사용이 가능하여 사용에 유의가 필요합니다.

- name: string

  **주문명**

  이니시스 일본결제의 경우 영어와 일본어만 허용합니다.

- amount: number

  **결제금액**

- currency: string

  **결제 통화 코드**

  [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) 통화 코드

  - `JPY`: 일본 엔

  이니시스 일본결제는 일본 엔(JPY)만 지원합니다.

- popup: boolean

  **결제창 팝업 여부**

  이니시스 일본결제는 PC환경에서는 팝업 결제창만 지원합니다. (iframe 미지원)

- buyer\_name: string

  **주문자 명**

- buyer\_email?: string

  **주문자 이메일**

  편의점 결제 시 해당 메일로 입금 요청 메일이 발송됩니다.

- buyer\_tel?: string

  **주문자 연락처**

- buyer\_first\_name\_kana?: string

  **주문자의 이름 (후리가나)**

  편의점 결제 시 필수 값 입니다.

  가타카나만 허용합니다.

- buyer\_last\_name\_kana?: string

  **주문자의 성 (후리가나)**

  편의점 결제 시 필수 값 입니다.

  가타카나만 허용합니다.

- storeDetails: object

  **상점 정보(가맹점 정보)**

  - storeName: string

    **상점명**

  - storeNameKana: string

    **상점명 (후리가나)**

    가타카나만 허용합니다.

  - storeNameEn: string

    **상점명 (영문)**

    알파벳만 허용합니다.

  - storeNameShort: string

    **상점명 (약어)**

  - contactName: string

    **상점 연락처 정보 이름**

    ex. 고객센터 (일어)

  - email: string

    **상점 이메일**

  - phoneNumber: string

    **상점 연락처**

  - openingHours: object

    **상점 영업시간**

    - open: string

      **영업 시작 시간**

      HH:mm 포맷으로 입력해야하며 00:00\~23:59 범위의 값만 허용합니다.

    - close: string

      **영업 종료 시간**

      HH:mm 포맷으로 입력해야하며 00:00\~23:59 범위의 값만 허용합니다.

- display?: object

  - card\_quota?: number\[]

    **카드 할부 개월수 리스트**

    이니시스 일본결제의 경우 일시불, 3, 5, 6, 10, 12개월만 지정 가능합니다.

    - `[0]`: 일시불만 노출
    - `[3, 5, 6]`: 할부개월 수로 3, 5, 6개월 노출
    - `[0, 3, 5, 6]`: 할부개월 수로 일시불 및 3, 5, 6개월 노출

- cvs?: object

  **편의점 결제 시 파라미터**

  - payment\_deadline?: object

    **지불 기한**

    편의점 결제 이용 시 아래 `valid_hours`, `due_date` 두 파라미터 중 하나는 필수입니다.

    - valid\_hours?: integer

      **유효 시간 (시간 단위)**

      편의점 결제의 지불기한을 시간 단위로 지정합니다. 현재 시간 기준으로 계산되며 최소 1일\~최대 30일 범위의 일수로 변환됩니다.

    - due\_date?: string

      **만료 시점**

      시간은 ISO8601 형식으로 입력해야 합니다.

- m\_redirect\_url?: string

  **모바일 결제 후 리디렉션 될 URL**

- notice\_url?: string | string\[]

  **웹훅 수신 URL**

- custom\_data?: object

  **가맹점 커스텀 데이터**

- bypass?: object

  - inicis\_jp?: object

    - paymentUI?: object

      - colorTheme?: string

        **결제창 색상**

        사용 가능 색상 목록

        - `red1`
        - `red2`
        - `red3`
        - `red4`
        - `orange`
        - `yellow`
        - `black`
        - `purple`
        - `green`
        - `blue1`
        - `blue2`
        - `blue3`
        - `blue4`
        - `blue5`
        - `blue6`

      - logoUrl?: string

        **가맹점 로고 이미지 URL**

        69\*20 픽셀 크기의 이미지 URL

</div>

<div class="tabs-content" data-title="SDK 결제요청 (SBPS)">

```javascript
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_id_1667634130160",
    name: "Test",
    amount: 100,
    currency: "JPY",
    popup: true,
    buyer_name: "Port One",
    buyer_email: "buyer@example.com",
    buyer_tel: "0216705176",
    customer_id: "customer_portone",
    m_redirect_url: "https://helloworld.com/payments/result",
    notice_url: "https://helloworld.com/api/v1/payments/notice",
    display: {
      card_quota: [0, 3, 5, 6, 10, 12],
    },
    bypass: {
      inicis_jp: {
        paymentUI: {
          colorTheme: "red1",
          logoUrl: "https://example.com/logo.svg",
        },
      },
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

  - `card` (카드)
  - `paypay` (PayPay)

- merchant\_uid: string

  **주문번호**

  고객사에서 매번 고유하게 채번되어야 합니다.

  알파벳 대소문자, 숫자 및 일부 특수문자만 사용이 가능하여 사용에 유의가 필요합니다.

- name: string

  **주문명**

  이니시스 일본결제의 경우 영어와 일본어만 허용합니다.

- amount: number

  **결제금액**

- currency: string

  **결제 통화 코드**

  [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) 통화 코드

  - `JPY`: 일본 엔

  이니시스 일본결제는 일본 엔(JPY)만 지원합니다.

- popup: boolean

  **결제창 팝업 여부**

  이니시스 일본결제는 PC환경에서는 팝업 결제창만 지원합니다. (iframe 미지원)

- buyer\_name: string

  **주문자 명**

- buyer\_email?: string

  **주문자 이메일**

- buyer\_tel?: string

  **주문자 연락처**

- customer\_id: string

  **구매자 ID**

  CBT 유형이 SBPS인 경우 필수 입력이며 최대 30자로 설정해야합니다.

- display?: object

  - card\_quota?: number\[]

    **카드 할부 개월수 리스트**

    이니시스 일본결제의 경우 일시불, 3, 5, 6, 10, 12개월만 지정 가능합니다.

    - `[0]`: 일시불만 노출
    - `[3, 5, 6]`: 할부개월 수로 3, 5, 6개월 노출
    - `[0, 3, 5, 6]`: 할부개월 수로 일시불 및 3, 5, 6개월 노출

- m\_redirect\_url?: string

  **모바일 결제 후 리디렉션 될 URL**

- notice\_url?: string | string\[]

  **웹훅 수신 URL**

- custom\_data?: object

  **가맹점 커스텀 데이터**

- bypass?: object

  - inicis\_jp?: object

    - paymentUI?: object

      - colorTheme?: string

        **결제창 색상**

        사용 가능 색상 목록

        - `red1`
        - `red2`
        - `red3`
        - `red4`
        - `orange`
        - `yellow`
        - `black`
        - `purple`
        - `green`
        - `blue1`
        - `blue2`
        - `blue3`
        - `blue4`
        - `blue5`
        - `blue6`

      - logoUrl?: string

        **가맹점 로고 이미지 URL**

        69\*20 픽셀 크기의 이미지 URL

</div>

</div>

### 유의 사항

#### 결제 취소

카드결제 및 간편결제의 경우 결제 취소 및 부분취소를 지원하지만 편의점 결제의 경우 결제 취소를 지원하지 않습니다.
