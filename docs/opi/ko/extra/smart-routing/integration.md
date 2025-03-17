---
title: 스마트 라우팅 - 연동하기
description: 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
targetVersions:
  - v1
  - v2
---

<div class="hint" data-style="info">

스마트 라우팅 기능이 궁금하다면 [스마트 라우팅 기능 소개](https://developers.portone.io/opi/ko/extra/smart-routing/intro)를 확인해 보세요!

스마트 라우팅을 이용하시려면 관리자콘솔에서 스마트 라우팅 그룹을 먼저 설정해야합니다.
그룹 설정 방법이 궁금하다면 [스마트 라우팅 그룹 설정 가이드](https://developers.portone.io/opi/ko/extra/smart-routing/console-guide)를 확인해 보세요.

</div>

## SDK(결제창) 인증결제 연동하기

SDK를 이용하는 경우 결제 호출 시 생성한 스마트 라우팅 그룹의 ID를 전용 파라미터인 `channelGroupId`에
지정하여 사용이 가능합니다.
이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다. 단, 결제대행사 별로 지원하는 기능이 다를 수 있으니
그룹 내에서 사용하는 모든 결제대행사에서 지원하는 기능만 사용하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/auth) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
IMP.request_pay(
  {
    // 결제대행사를 지정할 때 사용한 channelKey, pg 대신
    // channelGroupId 파라미터에 스마트 라우팅 그룹 ID를 설정합니다.
    channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",
    pay_method: "card", //결제수단 선택
    merchant_uid: "ORD20180131-0000011", //고객사 주문번호
    name: "Norway swivel chair", //주문명
    amount: 1000, // 결제 금액
    //고객 정보
    buyer_email: "gildong@gmail.com",
    buyer_name: "Hong Gildong",
    buyer_tel: "010-4242-4242",
    buyer_addr: "Shinsa-dong, Gangnam-gu, Seoul",
    buyer_postcode: "01181",
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // Payment is successful
    } else {
      // Payment failed
    }
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout) 문서를 참고하시기 바랍니다.

### 예제 코드

```tsx
//포트원 인증결제 SDK 호출
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",

  // 결제대행사를 지정할 때 사용한 channelKey 대신
  // channelGroupId 파라미터에 스마트 라우팅 그룹 ID를 설정합니다.
  channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",

  // 기타 인증결제 파라미터 설정
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
  payMethod: "CARD",

  // 스마트 라우팅 사용 시 필수 파라미터 추가 설정
  customer: {
    fullName: "홍길동",
    phoneNumber: "010-1234-5678",
    email: "test@test.com",
  },
});
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

- channelGroupId: string

  **스마트 라우팅 그룹 ID**

  관리자 콘솔의 \[연동 관리] → \[스마트 라우팅] 메뉴에서 확인할 수 있습니다.

  스마트 라우팅 그룹 ID를 지정하여 결제창을 호출하면, 스마트 라우팅 그룹 내 설정된 채널 비율에 따라
  확률 기반으로 하나의 결제대행사가 호출됩니다.

### 필수 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

각 파라미터에 대한 상세한 설명은 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq) 문서를 참고하시기 바랍니다.

- merchant\_uid: string

  **고객사 주문번호**

- name: string

  **주문명**

- amount: number

  **결제금액**

- pay\_method: string

  **결제수단 구분코드**

- custom\_data: object

  **사용자 정의 데이터**

  결제 응답시 **echo** 로 받아보실 수 있는 필드 입니다.

  JSON notation(string)으로 저장됩니다.

  주문 건에 대해 부가정보를 저장할 공간이 필요할 때 사용합니다

- tax\_free: number

  **면세금액**

  결제금액 중 면세금액에 해당하는 금액을 입력합니다.

- vat\_amount: number

  **부가세**

  결제금액 중 부가세에 해당하는 금액을 입력합니다. (기본값: null)

- vbank\_due: string

  **가상계좌 입금기한**

  스마트 라우팅을 이용한 가상계좌 결제 사용 시 필수 입력해야 합니다.

  다음과 같은 형식으로 설정이 가능합니다 :

  `YYYY-MM-DD`

  `YYYYMMDD`

  `YYYY-MM-DD HH:mm:ss`

  `YYYYMMDDHHmmss`

- buyer\_tel: string

  **주문자 연락처**

  일부 PG사에서 해당 필드 누락시 오류 발생

- buyer\_email: string

  **주문자 이메일**

  일부 PG사에서 해당 필드 누락시 오류 발생(페이먼트월)

기타 파라미터는 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq) 문서를 참고하시길 바랍니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

각 파라미터에 대한 상세한 설명은 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v2-sdk/payment-request) 문서를 참고하시기 바랍니다.

- storeId: string

  **고객사 ID**

- paymentId: string

  **고객사 주문 고유 번호**

- orderName: string

  **주문명**

- totalAmount: number

  **결제 금액**

- currency: string

  **결제 통화**

- payMethod: string

  **결제수단 구분코드**

- virtualAccount?: object

  가상계좌 결제 사용 시 필요한 파라미터입니다.

  - accountExpiry: object

    **가상계좌 입금 만료기한**

    스마트 라우팅을 이용한 가상계좌 결제 사용 시 필수 입력해야 합니다.

    - validHours?: number

      **가상계좌 입금 유효 시간**

    - dueDate?: string

      **가상계좌 입금 유효 시각**

- easyPay?: object

  **간편결제 정보**

  스마트 라우팅을 이용한 간편결제 다이렉트 호출 시 필수 입력해야 합니다.

  - easyPayProvider?: string

    **간편결제 수단**

- productType: string

  **상품 유형**

  스마트 라우팅을 이용한 휴대폰 소액결제 사용 시 필수 입력해야 합니다.

- customer: object

  **구매자 정보**

  - fullName: string

    **구매자 전체 이름**

    `fullName` 파라미터 대신 `firstName`과 `lastName` 파라미터를 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

  - email: string

    **구매자 이메일 주소**

기타 파라미터는 \[결제요청 파라미터]\(/sdk/ko/v2-sdk/payment-request 문서를 참고하시길 바립니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 스마트 라우팅 내 새로운 결제대행사 채널 추가 시 테스트 후 사용하시길 권장드립니다. </summary>

결제대행사별로 결제 수단에 따라 필수 파라미터가 다르므로 그룹 내 새로운 결제대행사 추가 시 테스트 환경에서
테스트를 진행한 후 실환경에 반영하시길 권장 드립니다.
필수 파라미터 조건을 충족하지 못하는 경우 에러가 리턴되며, 결제창이 정상적으로 호출되지 않을 수 있습니다.

</details>

<details>

<summary> 간편결제 사용을 원하시는 경우 허브형으로 사용하시길 권장드립니다. </summary>

**간편결제 허브형을 사용하시는 경우**, 결제대행사 별 계약에 따라 결제창에 표시되는 간편결제가 상이할 수 있습니다.

**간편결제 다이렉트 호출을 사용하시는 경우**, 결제대행사 별 계약에 따라 결제 호출 시 에러가 리턴되며 결제창이
호출되지 않을 수 있습니다. 가급적 결제대행사 별 동일한 간편결제 수단을 모두 계약하신 후 사용하시길 권장드립니다.

단, **간편결제 직연동**의 경우 스마트 라우팅 기능을 제공하지 않습니다.

</details>

## API 수기(키인)결제 연동하기

API를 이용하는 경우 결제 호출 시 생성한 스마트 라우팅 그룹의 ID를 전용 파라미터인 `channelGroupId`에
지정하여 사용이 가능합니다.
이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다. 단, 결제대행사 별로 지원하는 기능이 다를 수 있으니
그룹 내에서 사용하는 모든 결제대행사에서 지원하는 기능만 사용하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [수기(키인)결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/keyin) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 예제 코드

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts title="server-side"
// card_number, expiry, birth, pwd_2digit 등 정보를 전달받습니다.
// 포트원 비인증 결제(일회성) API 호출
const onetimeResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/onetime",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      // 중략...
    }),
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="카드 결제">

```ts
// 포트원 수기(키인)결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/instant`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // channelGroupId 파라미터에 스마트 라우팅 그룹 ID를 설정합니다.
      channelGroupId: "channel-group-test-94ab2b51-b7e1-4b74-9a9c-9fb6e117a6ac",
      orderName: "월간 이용권 정기결제",
      // 수기 결제 API를 참고해 고객 정보를 채워주세요.
      customer: {
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",

      // 수기(키인)결제 API를 참고해 카드 / 가상계좌 정보를 채워주세요.
      method: {
        card: {
          credential: {
            number: "0000123400001234", // 16자리 숫자만 입력해야 합니다.
            expiryYear: "26", // 연도의 뒤 2자리를 입력해야 합니다.
            expiryMonth: "12",
            birthOrBusinessRegistrationNumber: "900101", // 생년월일 6자리 또는 사업자 등록번호 10자리를 입력해야 합니다.
            passwordTwoDigits: "00", // 카드 비밀번호 앞 2자리 입력해야 합니다.
          },
        },
      },
      productType: "PHYSICAL", // 상품이 실물인 경우 `PHYSICAL`, 디지털인 경우 `DIGITAL` 입력해야 합니다.
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

</div>

<div class="tabs-content" data-title="가상계좌 결제">

```ts
// 포트원 수기(키인)결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/instant`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelGroupId: "channel-group-live-94ab2b51-b7e1-4b74-9a9c-9fb6e117a6ac",
      orderName: "월간 이용권 정기결제",
      // 수기 결제 API를 참고해 고객 정보를 채워주세요.
      customer: {
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
        phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
        email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",

      // 수기(키인)결제 API를 참고해 카드 / 가상계좌 정보를 채워주세요.
      method: {
        virtaulAccount: {
          bank: "KOOKMIN", // 은행별 enum 확인 후 발급할 은행 값을 입력해야 합니다.
          expiry: {
            dueDate: "2023-12-21T00:00:00+09:00", // RFC 3339 형식으로 입력해야 합니다.
          },
          option: {
            type: "NORMAL", // 일반 가상계좌 (회전식)인 경우 `NORMAL`로 입력해야 합니다.
          },
          cashReceipt: {
            type: "PERSONAL", // 소득공제용인 경우 `PERSONAL`, 지출증빙용인 경우 `CORPORATE`로 입력해야 합니다.
            customerIdentityNumber: "01000001234", // 현금영수증 발급 번호
          },
          remitteeName: "포트원", // 가상계좌 예금주명을 입력해야 합니다.
        },
        productCount: 1, // 상품 개수를 입력해야 합니다.
      },
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

</div>

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

- channelGroupId: string

  **스마트 라우팅 그룹 ID**

  관리자 콘솔의 \[연동 관리] → \[스마트 라우팅] 메뉴에서 확인할 수 있습니다.

  스마트 라우팅 그룹 ID를 지정하여 결제창을 호출하면, 스마트 라우팅 그룹 내 설정된 채널 비율에 따라
  확률 기반으로 하나의 결제대행사가 호출됩니다.

### 필수 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- merchant\_uid: string

  **고객사 거래 고유번호**

- amount: number

  **주문 금액**

- card\_number: string

  **카드번호**

  (dddd-dddd-dddd-dddd) 기재 양식을 유의하세요.

- expiry: string

  **카드 유효기간**

  (YYYY-MM) 기재 양식을 유의하세요.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- orderName: string

  **주문명**

- amount: object

  **주문 금액**

  - total: number

    **결제 금액**

- currency: string

  **결제 통화**

- customer: object

  **구매자 정보**

  - name: object

    **구매자 이름**

    - full: string

      **구매자 전체 이름**

      `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

    가상계좌 발급 시 필수 입력해야 합니다.

  - email: string

    **구매자 이메일 주소**

    가상계좌 발급 시 필수 입력해야 합니다.

- method: object

  **결제 수단**

  - card: object

    **카드 결제**

    - credential: object

      **카드 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **카드 유효기간 중 연도**

      - expiryMonth: string

        **카드 유효기간 중 월**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자번호**

      - passwordTwoDigits: string

        **카드 비밀번호 앞 2자리**

  - virtualAccount: object

    **가상 계좌**

    - bank: object

      **은행 정보**

    - expiry: object

      **만료 기한**

      - dueDate: string

        **만료 시점**

    - option: object

      **가상계좌 발급 방식**

      - type: string

        **가상계좌 발급 유형**

        일반 가상계좌 (회전식)인 경우 `NOMAL`를 입력해야 합니다.

    - cashReceipt: object

      **현금영수증 정보**

      - type: string

        **현금영수증 발급 유형**

      - customerIdentityNumber: string

        **현금영수증 발급 식별 정보**

    - remitteeName: string

      **가상계좌 예금주명**

- productType: string

  **상품 유형**

  KSNET로 카드 결제시에만 MID 설정 정보와 검증을 진행합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

- productCount: string

  **상품 개수**

  스마트로로 가상계좌 발급시에만 정보가 유효합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 실제로 결제된 결제대행사 정보는 결제 조회 시 확인할 수 있습니다. </summary>

실제로 결제를 요청하여 결제 승인, 실패된 경우 결제대행사 정보를 확인할 수 있습니다.
<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->결제대행사 정보는 콘솔 결제내역 또는 결제 조회 API의 `pg_provider` 파라미터에서 확인 가능합니다.<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->
<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->결제대행사 정보는 콘솔 결제내역 또는 결제 조회 API의 `channel` 파라미터에서 확인 가능합니다.<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

<details>

<summary> 수기(키인) 결제 시 카드를 이용하는 경우 결제대행사 계약을 사전에 확인하시길 바랍니다. </summary>

카드 결제의 경우 결제대행사에 따라 카드번호, 유효기간, 비밀번호, 생년월일 4가지 정보를 다르게 요구할 수 있습니다.
스마트 라우팅 사용 시 4개의 정보를 전부 입력하시거나 사용하시는 결제대행사의 계약 조건을 모두 충족할 수 있도록
파라미터를 입력한 후 결제 요청을 해야합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 가상계좌 발급 이용 시 고정식 가상계좌 사용을 권장하지 않습니다.</summary>

고정식 가상계좌의 경우 결제대행사별로 발급 유형이 다르므로 스마트 라우팅 이용 시 가상계좌 발급이
올바르지 않을 수 있습니다.
가상계좌 발급을 이용하시는 경우 일반(회전식) 가상계좌를 이용하시길 권장드립니다.

</details>

<details>

<summary> 가상계좌 발급 이용 시 `virtualAccount.expiry.validHours` 사용을 권장하지 않습니다.</summary>

스마트 라우팅 이용 시 가상계좌 만료시간 파라미터 중 `virtualAccount.expiry.validHours` 사용을 권장하지 않습니다.
해당 파라미터의 경우 지원하는 PG사가 한정적이기 때문에 해당 파라미터를 사용하는 경우 일부 PG사에 한하여
정상적으로 가상계좌 발급이 불가능할 수 있습니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## API 빌링키 발급 및 정기결제 연동하기

빌링키 발급 API 호출 시 생성한 스마트 라우팅 그룹의 ID를 전용 파라미터인 `channelGroupId`에
지정하여 사용이 가능합니다.
`channelGroupId`를 지정하여 빌링키 발급 요청 시 그룹 내 모든 채널로 빌링키 발급을 시도합니다.
이후 발급된 결제대행사의 빌링키가 모두 포트원 빌링키에 맵핑됩니다.

<div class="hint" data-style="info">

스마트 라우팅 기능을 이용하여 발급된 포트원 빌링키는 **슈퍼빌링키**라고 부릅니다.

</div>

해당 빌링키로 빌링키 결제 또는 예약결제 API를 이용하여 결제 요청 시 해당 스마트 라우팅 그룹 내 채널
비율 설정에 따라 결제를 요청합니다.

이 외에 빌링키 발급 및 결제 요청 시 다른 기능들은 기존과 동일하게 사용이 가능합니다.
단, 결제대행사 별로 지원하는 기능이 다를 수 있으니 그룹 내에서 사용하는 모든 결제대행사에서 지원하는
기능만 사용하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

빌링키 결제와 관련된 자세한 내용은 [비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

빌링키 결제와 관련된 자세한 내용은 [빌링결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/readme) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 예제 코드

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 발급">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts
const issueResponse = await fetch(
  `https://api.iamport.kr/subscribe/customers/${customer_uid}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",
      customer_id: customer_id, //고객 식별 정보로 고객사에서 기입
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      // 중략...
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
const {
  billingKeyInfo: { customer_uid },
} = await issueResponse.json();
// 빌링키가 발급되었습니다! 빌링키를 저장하거나 결제하는 로직을 구성하세요.
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

```ts
const issueResponse = await fetch("https://api.portone.io/billing-keys", {
  method: "POST",
  headers: {
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chanenlGroupId: "channel-group-live-94ab2b51-b7e1-4b74-9a9c-9fb6e117a6ac",
    customer: {
      id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
      name: {
        full: "김포트", // 고객 이름을 입력해야 합니다.
      },
      phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
      email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
    },
    method: {
      card: {
        credential: {
          number: "0000123400001234", // 16자리 숫자만 입력해야 합니다.
          expiryYear: "26", // 연도의 뒤 2자리를 입력해야 합니다.
          expiryMonth: "12",
          birthOrBusinessRegistrationNumber: "900101", // 생년월일 6자리 또는 사업자 등록번호 10자리를 입력해야 합니다.
          passwordTwoDigits: "00", // 카드 비밀번호 앞 2자리 입력해야 합니다.
        },
      },
    },
  }),
});
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);

const {
  billingKeyInfo: { billingKey, channels },
  channelSpecificFailures,
} = await issueResponse.json();

// `channels` 필드에 사용 가능한 채널 여러 개가 포함된 것을 확인할 수 있습니다.
// 이 필드는 빌링키 조회에서도 확인 가능합니다.
console.log(`빌링키: ${billingKey}`);
console.log(`발급 성공한 채널: ${channels}`);

if (channelSpecificFailures.length !== 0)
  console.log(`발급에 실패한 채널이 있습니다: ${channelSpecificFailures}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts
// 포트원 빌링키 결제 API 호출
const paymentResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/again",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_uid: "customer_uid", // 슈퍼 빌링키
      merchant_uid: "merchant_uid",
      name: "월간 이용권 정기결제",
      // 빌링키 결제 API를 참고해 고객 정보를 채워주세요.
      amount: {
        total: 8900,
      },
      currency: "KRW",
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/billing-key`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
      orderName: "후불 결제",
      customer: {
        id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
        phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
        email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",
      productType: "PHYSICAL", // 상품이 실물인 경우 `PHYSICAL`, 디지털인 경우 `DIGITAL` 입력해야 합니다.
      productCount: 1, // 상품 개수를 입력해야 합니다.
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts title="server-side"
// 결제 예약
const paymentResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/schedule",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_uid: "gildong_0001_1234", // 슈퍼 빌링키
      schedules: [
        {
          merchant_uid: "order_monthly_0001", // 주문 번호
          schedule_at: 1519862400, // 결제 시도 시각 in Unix Time Stamp. 예: 다음 달 1일
          amount: 8900,
          name: "월간 이용권 정기결제",
          buyer_name: "홍길동",
          buyer_tel: "01012345678",
          buyer_email: "gildong@gmail.com",
          // 중략...
        },
      ],
    }),
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/schedule`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payment: {
        billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
        orderName: "월간 이용권 정기 결제",
        customer: {
          id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
          name: {
            full: "김포트", // 고객 이름을 입력해야 합니다.
          },
          phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
          email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
        },
        amount: {
          total: 8900,
        },
        currency: "KRW",
        productType: "PHYSICAL", // 상품이 실물인 경우 `PHYSICAL`, 디지털인 경우 `DIGITAL` 입력해야 합니다.
        productCount: 1, // 상품 개수를 입력해야 합니다.
      },
      timeToPay: "2024-05-01T00:00:00+09:00", // ISO8601 형식으로 입력해야 합니다.
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

</div>

### 주요 파라미터

- channelGroupId: string

  **스마트 라우팅 그룹 ID**

  관리자 콘솔의 \[연동 관리] → \[스마트 라우팅] 메뉴에서 확인할 수 있습니다.

  스마트 라우팅 그룹 ID를 지정하여 결제창을 호출하면, 스마트 라우팅 그룹 내 설정된 채널 비율에 따라
  확률 기반으로 하나의 결제대행사가 호출됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

스마트 라우팅 그룹 ID를 지정하여 빌링키 발급 API를 호출하면, 스마트 라우팅 그룹 내 활성화 된 채널들에 대해 빌링키 발급을 시도합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

### 필수 파라미터

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 발급">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- customer\_uid: string

  **구매자의 결제 수단 식별 고유번호**

- card\_number: string

  **카드번호**

  (dddd-dddd-dddd-dddd) 기재 양식을 유의하세요.

- expiry: string

  **카드 유효기간**

  (YYYY-MM) 기재 양식을 유의하세요.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- customer: object

  **구매자 정보**

  - name: object

    **구매자 이름**

    - full: string

      **구매자 전체 이름**

      `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

    가상계좌 발급 시 필수 입력해야 합니다.

  - email: string

    **구매자 이메일 주소**

    가상계좌 발급 시 필수 입력해야 합니다.

- method: object

  **결제 수단**

  - card: object

    **카드 결제**

    - credential: object

      **카드 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **카드 유효기간 중 연도**

      - expiryMonth: string

        **카드 유효기간 중 월**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자번호**

      - passwordTwoDigits: string

        **카드 비밀번호 앞 2자리**

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- customer\_uid: string

  **구매자의 결제 수단 식별 고유번호**

- merchant\_uid: string

  **고객사 주문번호**

  동일한 주문 번호로 중복 결제가 불가하며, 스마트로 신모듈의 경우 특수문자 포함이 불가능합니다.

- amount: number

  **결제금액**

- name: string

  **제품명**

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- orderName: string

  **주문명**

- amount: object

  **주문 금액**

  - total: number

    **결제 금액**

- currency: string

  **결제 통화**

- customer: object

  **구매자 정보**

  - id: string

    **구매자 식별정보**

  - name: object

    **구매자 이름**

    - full: string

      **구매자 전체 이름**

      `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

    가상계좌 발급 시 필수 입력해야 합니다.

  - email: string

    **구매자 이메일 주소**

    가상계좌 발급 시 필수 입력해야 합니다.

- productType: string

  **상품 유형**

  KSNET로 카드 결제시에만 MID 설정 정보와 검증을 진행합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

- productCount: string

  **상품 개수**

  스마트로로 가상계좌 발급시에만 정보가 유효합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- customer\_uid: string

  **구매자의 결제 수단 식별 고유번호**

- schedules.merchant\_uid: string

  **고객사의 주문번호**

  동일한 주문 번호로 중복 결제가 불가하며, 스마트로 신모듈의 경우 특수문자 포함이 불가능합니다.

- schedules.schedule\_at: integer

  **예약시각**

- schedules.currency: string

  **결제 통화**

  e.g) KRW, USD 등 (단, 페이팔 신모듈의 경우 KRW 결제가 불가능하므로 반드시 유효한 값을 필수로 입력해야합니다.)

- schedules.amount: number

  **결제금액**

- schedules.name: string

  **주문명**

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- payment: object

  **결제 정보**

  - billingKey: string

    **빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **주문 금액**

    - total: number

      **결제 금액**

  - currency: string

    **결제 통화**

  - customer: object

    **구매자 정보**

    - name: object

      **구매자 이름**

      - full: string

        **구매자 전체 이름**

        `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

    - phoneNumber: string

      **구매자 연락처**

      가상계좌 발급 시 필수 입력해야 합니다.

    - email: string

      **구매자 이메일 주소**

      가상계좌 발급 시 필수 입력해야 합니다.

  - productType: string

    **상품 유형**

    KSNET로 카드 결제시에만 MID 설정 정보와 검증을 진행합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

  - productCount: string

    **상품 개수**

    스마트로로 가상계좌 발급시에만 정보가 유효합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

- timeToPay: string

  **결제 예정 시점**

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

</div>

### 유의사항

<details>

<summary> 빌링키 발급 요청 시 지정한 그룹 내 모든 채널로 빌링키를 발급합니다. </summary>

그룹 내 채널을 활성화한 채로 비율을 0으로 설정한 경우 해당 채널로도 빌링키 발급을 요청합니다.
빌링키 발급을 원하지 않는 경우 채널을 비활성화 상태로 두거나 그룹 내에서 삭제해야 합니다.

</details>

<details>

<summary> 슈퍼빌링키 발급 시 일부 PG사에 대해서만 발급될 수 있습니다.  </summary>

슈퍼 빌링키를 발급 요청 시 일부 PG사는 요청은 성공하고, 일부 PG사는 요청은 실패하는 경우가 발생할 수 있습니다.
이 경우 포트원 빌링키(슈퍼빌링키)는 정상적으로 발급되지만 사용 가능한 빌링키는 요청이 성공한
결제대행사의 빌링키로 제한됩니다.

요청이 실패한 결제대행사 목록은 API 응답의 `channelSpecificFailures` 필드로 확인할 수 있고,
이 배열에 항목이 있는 경우 필요에 따라 빌링키 발급 실패로 취급하여 사용할 수 있습니다.

</details>

<details>

<summary> 슈퍼빌링키 결제 시 특정 PG사를 지정할 수 있습니다.  </summary>

슈퍼 빌링키를 이용해 결제를 요청할 때 결제 요청에 `channelKey` 파라미터를 전달하는 경우 해당 채널로
결제를 요청합니다.

</details>

<details>

<summary> 슈퍼빌링키 결제 시 그룹 설정에 따라 결제됩니다.  </summary>

`channelKey`를 별도로 전달하지 않은 경우 아래와 같이 자동으로 채널이 결정됩니다.

- 슈퍼 빌링키 발급에 사용된 스마트 라우팅 그룹의 현재 설정된 채널 비율에 따라 확률에 기반하여
  자동으로 선택합니다.

- 만약 결제 시점에 스마트 라우팅 그룹 내에 새로운 결제대행사 채널이 추가되어 있는 경우,
  해당 결제대행사의 빌링키가 발급되어 있지 않으므로 채널 선택 시 제외됩니다.

예를 들어 PG사 A, B, C에 대해 슈퍼 빌링키가 발급되었고,
이후 그룹 설정을 B 10%, C 30%, D 60%로 변경한 후 결제 요청을 하면
빌링키가 B와 C에 대해서만 존재하기 때문에 B와 C의 설정된 비율에 따라 확률에 기반하여 자동으로 선택됩니다.

</details>

<details>

<summary> 슈퍼 빌링키를 이용하여 결제 요청 시 불가피하게 그룹 내 비율이 0인 채널로 진행될 수 있습니다. </summary>

슈퍼 빌링키를 이용하여 결제 요청했을 때, 슈퍼 빌링키에 맵핑된 결제대행사 빌링키 중 그룹 비율에 따라
사용 가능한 빌링키가 없는 경우 그룹 내 채널 비율이 0으로 설정되어있더라도 해당 결제대행사로 결제가
일어날 수 있습니다.

예를 들어, 그룹 내에 나이스페이먼츠, KG이니시스, 토스페이먼츠 총 3개의 결제대행사를 설정한 경우 빌링키
발급 시 3개의 결제대행사로부터 빌링키를 발급 받은 후 슈퍼 빌링키에 맵핑 됩니다.
이후 그룹 설정을 토스페이먼츠 0%, 스마트로 100%로 변경한 경우 위에 발급한 슈퍼 빌링키로 결제 요청 시
토스페이먼츠 빌링키만 사용이 가능하기 때문에 0%로 결제 비율이 설정되어있음에도 토스페이먼츠로 결제가
발생하게 됩니다.
만약 기존에 발급한 결제대행사 채널이 모두 비활성화되어 있거나 그룹 내에서 삭제된 경우 결제가 실패되오니
그룹 설정 변경 시 유의하시기 바랍니다.

</details>
