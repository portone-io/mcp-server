---
title: 갤럭시아머니트리
description: 갤럭시아머니트리 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 갤럭시아머니트리 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 2. 최신 JavaScript SDK로 업데이트하기 <a href="#2." id="2." />

갤럭시아머니트리 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**갤럭시아머니트리를 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다**

</div>

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) 문서를 통해 최신 SDK를 설치해주세요.

## 3. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
갤럭시아머니트리 결제/빌링키 발급/빌링키 발급과 동시에 결제창을 호출할 수 있습니다. **트랜잭션 결과**는
PC의 경우 **callback** 함수로 전달되고
모바일의 경우 **m\_redirect\_url**로 302 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="일반 결제 창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "orderNo0001", // 고객사에서 채번한 주문 고유 번호입니다.
    name: "주문명:결제테스트",
    amount: 1000,
    customer_id: "matthew", // 고객사가 회원에게 부여한 고유 ID입니다. (필수)
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    bypass: {
      galaxia: {
        ITEM_CODE: "상품코드", // 필수, 최대 10바이트
      },
    },
  },
  function (rsp) {
    // callback 로직
    const { imp_uid, merchant_uid } = rsp;

    // 콜백 함수로 전달 받은 imp_uid로 포트원 결제 내역 조회 API를 통해 결제 상태를 판단합니다.
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

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method?: string

  **결제수단 구분코드**

  <details>

  <summary>결제수단 구분코드</summary>

  - `card` (신용카드) - 기본값
  - `trans` (실시간 계좌이체)
  - `vbank` (가상계좌)
  - `phone` (휴대폰소액결제)
  - `cultureland` (컬쳐랜드)
  - `smartculture` (스마트문상)
  - `booknlife` (도서문화상품권)
  - `happymoney` (해피머니)
  - `kakaopay` (카카오페이)
  - `naverpay` (네이버페이)
  - `tosspay` (토스페이)
  - `samsungpay` (삼성페이)
  - `applepay` (애플페이)
  - `payco` (페이코)

  </details>

- merchant\_uid: string

  **주문 번호**

  매번 고유하게 채번되어야 합니다. (최대 64자)

- customer\_id: string

  **구매자 고유 ID**

  고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다. (최대 20자)

  갤럭시아머니트리의 경우 필수로 입력해야 합니다.

- name: string

  **주문명**

  갤럭시아머니트리의 경우 필수로 입력해야 합니다.

- amount: number

  **결제 금액**

  **string** 이 아닌 점에 유의하세요.

- tax\_free?: number

  **면세 금액** (기본값: 0)

- vat\_amount?: number

  **부가세 금액**

  미 입력시 과세 금액의 1/11로 자동 계산됩니다.

- buyer\_name?: string

  **구매자 이름**

  계좌이체 결제시 구매자 이름은 필수 입력입니다.

- buyer\_tel?: string

  **구매자 연락처**

- buyer\_email?: string

  **구매자 이메일 주소**

- buyer\_addr?: string

  **구매자 주소**

- buyer\_postcode?: string

  **구매자 우편번호**

- m\_redirect\_url?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  주의: 갤럭시아머니트리의 경우 **모바일 환경에서 필수 입력**입니다.

- custom\_data?: object

  **가맹점 커스텀 데이터**

- notice\_url?: string 또는 **string\[]**

  **트랜잭션 종료 후 웹훅이 발송 될 고객사 서버 URL**

  주의: notice\_url 파라미터 설정시, 콘솔에 설정 된 웹훅 URL은 override 되며 notice\_url에 전달 한 주소로만 웹훅이 발송됩니다.

- app\_scheme?: string

  **IOS 앱에서 결제시 카드/은행 앱에서 인증 후 복귀 될 고객사 커스텀 앱 URL Scheme**

  - 예: portone://
  - 주의: **IOS 앱 결제시 필수** 입력이며 **앱이 아닌 모바일 웹 결제시에는 입력하지 마세요.**

- currency?: 'KRW'

  **결제 통화**

  갤럭시아머니트리의 경우 KRW만 허용되며, 미 입력시 KRW로 자동 적용됩니다.

- escrow?: boolean

  **에스크로 결제 여부** (기본값: false)

  갤럭시아머니트리의 경우, 계좌이체/가상계좌 결제시 에스크로 결제가 허용됩니다.

- vbank\_due: string

  **가상계좌 입금기한**

  - YYYY-MM-DD
  - YYYYMMDD

  주의: 갤럭시아머니트리의 경우 가상계좌 결제시 **필수 입력**입니다.

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정값**

  - card\_quota?: number\[]

    **할부 개월수**

    예시

    - `[]`: 일시불만 결제 가능
    - `2,3,4,5,6`: 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능
    - `3`: 3개월 할부만 표시

- card?: object

  **카드 결제 관련 설정**

  - direct?: object

    **카드사 다이렉트 호출 설정**

    - code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - quota?: number

      **할부 개월 수**

      일시불일 시 0으로 설정합니다.

- phone?: object

  **휴대폰 결제 관련 설정**

  - carrier?: string

    **휴대폰 통신사 코드**

    `SKT`, `KTF`, `LGT`, `CJH`, `KCT`, `SKL`

- bypass: object

  - galaxia: object

    - ITEM\_CODE: string

      **구매 상품코드**

      갤럭시아머니트리에서 발급받은 상품 코드를 입력합니다. (최대 10자, 필수)

<details>

<summary>

<strong>갤럭시아머니트리 지원 결제 수단</strong>

</summary>

- card (신용카드)
- trans (실시간 계좌이체) + 에스크로
- vbank (가상계좌) + 에스크로
- phone (휴대폰소액결제)
- cultureland (컬쳐랜드)
- smartculture (스마트문상)
- booknlife (도서문화상품권)
- happymoney (해피머니)
- kakaopay (카카오페이)
- naverpay (네이버페이)
- tosspay (토스페이)
- samsungpay (삼성페이)
- applepay (애플페이)
- payco (페이코)
- moneytree (머니트리)

</details>

</div>

<div class="tabs-content" data-title="빌링키 발급 창 요청">

일반 결제 창 호출 파라미터에서 **customer\_uid** 값을 추가하면 빌링키 발급 창을 호출할 수 있습니다.
빌링키 발급 창에서 빌링키를 발급 받은 후, 빌링 결제 API를 호출해 해당 빌링키로 결제를 할 수 있습니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 빌링키 발급 수단입니다. 갤럭시아머니트리의 경우 'card'만 지원됩니다.
    merchant_uid: "orderMonthly0001", // 고객사에서 채번한 주문 고유 번호입니다.
    name: "빌링키 발급",
    amount: 1000,
    customer_id: "matthew", // 고객사가 회원에게 부여한 고유 ID입니다. (필수)
    customer_uid: "your-customer-unique-id", // 고객사가 구매자의 결제 수단을 특정하기 위해 채번한 고유 ID로 빌링키 발급시 필수 입력입니다.
    m_redirect_url: "{모바일에서 빌링키 발급 완료 후 리디렉션 될 URL}",
    bypass: {
      galaxia: {
        ITEM_CODE: "상품코드", // 필수, 최대 10바이트
      },
    },
  },
  function (rsp) {
    // callback 로직
    const { imp_uid, merchant_uid } = rsp;

    // 콜백 함수로 전달 받은 imp_uid로 포트원 결제 내역 조회 API를 통해 빌링키 발급 상태를 판단합니다.
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

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: 'card'

  **빌링키 발급 수단**

  갤럭시아머니트리의 경우, 빌링키 발급 수단은 `card`만 허용되며 **반드시 `card`를 필수로 입력해주셔야** 합니다.

- merchant\_uid: string

  **주문 번호**

  매번 고유하게 채번되어야 합니다.

- customer\_id: string

  **구매자 고유 ID**

  고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다.

- customer\_uid: string

  **빌링키 발급 수단 고유 ID**

  고객사가 구매자의 빌링키 발급 수단을 특정하기 위해 채번한 고유 번호로 빌링키 발급시 필수 입력입니다.

- name: string

  **주문명**

  갤럭시아머니트리의 경우 필수로 입력해야 합니다.

- amount: number

  **결제 금액**

  **string** 이 아닌 점에 유의하세요.

  빌링키 발급시 amount가 0이거나 미입력시 1000원으로 노출됩니다. (결제 발생하지 않음)

- buyer\_name?: string

  **구매자 이름**

- buyer\_tel?: string

  **구매자 연락처**

- buyer\_email?: string

  **구매자 이메일 주소**

- m\_redirect\_url?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  주의: 갤럭시아머니트리의 경우 **모바일 환경에서 필수 입력**입니다.

- notice\_url?: string | string\[]

  **트랜잭션 종료 후 웹훅이 발송 될 고객사 서버 URL**

  주의: notice\_url 파라미터 설정시, 콘솔에 설정 된 웹훅 URL은 override 되며 notice\_url에 전달 한 주소로만 웹훅이 발송됩니다.

- bypass: object

  - galaxia: object

    - ITEM\_CODE: string

      **구매 상품코드**

      갤럭시아머니트리에서 발급받은 상품 코드를 입력합니다. (최대 10자, 필수)

<details>

<summary>

<strong>갤럭시아머니트리 지원 빌링키 발급 수단</strong>

</summary>

- card

</details>

</div>

<div class="tabs-content" data-title="빌링키 발급과 동시에 결제 창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "phone", // 빌링키 발급 및 결제 수단입니다. 갤럭시아머니트리의 경우 'phone'만 지원됩니다.
    merchant_uid: "orderNo0001", // 고객사에서 채번한 주문 고유 번호입니다.
    name: "주문명:결제테스트",
    amount: 1000, // 전달한 금액 만큼 실제로 승인이 됩니다.
    customer_id: "matthew", // 고객사가 회원에게 부여한 고유 ID입니다. (필수)
    customer_uid: "your-customer-unique-id", // 고객사가 구매자의 결제 수단을 특정하기 위해 채번한 고유 ID로 빌링키 발급시 필수 입력입니다.
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    bypass: {
      galaxia: {
        ITEM_CODE: "상품코드", // 필수, 최대 10바이트
      },
    },
  },
  function (rsp) {
    // callback 로직
    const { imp_uid, merchant_uid } = rsp;

    // 콜백 함수로 전달 받은 imp_uid로 포트원 결제 내역 조회 API를 통해 결제 상태를 판단합니다.
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

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: 'phone'

  **빌링키 발급 및 결제 수단**

  갤럭시아머니트리의 경우, 빌링키 발급과 동시에 결제 수단은 `phone`만 허용되며 **반드시 `phone`을 필수로 입력해주셔야** 합니다.

- merchant\_uid: string

  **주문 번호**

  매번 고유하게 채번되어야 합니다.

- customer\_id: string

  **구매자 고유 ID**

  고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다. (최대 20자)

- customer\_uid: string

  **빌링키 발급 수단 고유 ID**

  고객사가 구매자의 빌링키 발급 수단을 특정하기 위해 채번한 고유 번호로 빌링키 발급시 필수 입력입니다.

- name: string

  **주문명**

  갤럭시아머니트리의 경우 필수로 입력해야 합니다.

- amount: number

  **결제 금액**

  **string** 이 아닌 점에 유의하세요.

- buyer\_name?: string

  **구매자 이름**

- buyer\_tel?: string

  **구매자 연락처**

- buyer\_email?: string

  **구매자 이메일 주소**

- m\_redirect\_url?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  주의: 갤럭시아머니트리의 경우 **모바일 환경에서 필수 입력**입니다.

- phone?: object

  **휴대폰 결제 관련 설정**

  - carrier?: string

    **휴대폰 통신사 코드**

    `SKT`, `KTF`, `LGT`, `CJH`, `KCT`, `SKL`

- bypass: object

  - galaxia: object

    - ITEM\_CODE: string

      **구매 상품코드**

      갤럭시아머니트리에서 발급받은 상품 코드를 입력합니다. (최대 10자, 필수)

<details>

<summary>

<strong>갤럭시아머니트리 지원 빌링키 발급과 동시에 결제 수단</strong>

</summary>

- phone (휴대폰소액결제)

</details>

</div>

</div>

<details>

<summary>

<strong>가능한 트랜잭션 환경</strong>

</summary>

- PC (iframe)
- 모바일 (리디렉션)

</details>
