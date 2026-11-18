---
title: 브랜드페이 정기결제
description: 토스페이먼츠 브랜드페이의 카드·계좌로 빌링키를 발급하고 정기결제를 연동하는 방법을 안내합니다.
targetVersions:
  - v1
---

토스페이먼츠 브랜드페이에 등록된 카드 또는 계좌로 빌링키를 발급하고, 고객사의 서버에서 원하는 시점에 결제를 요청할 수 있습니다.
구매자는 빌링키 발급창에서 결제수단을 선택하고 자동결제 인증을 진행합니다. 등록된 결제수단이 없다면 같은 화면에서 카드나 계좌를 새로 등록할 수 있습니다.

## 사전 준비

- 브랜드페이 자동결제는 리스크 검토 및 추가 계약 후 사용할 수 있습니다.
- [브랜드페이 연동 문서](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/readme)를 참고하여 채널 설정과 포트원 JavaScript SDK 설치를 진행합니다.
- 구매자를 식별할 `customer_id`와 결제수단을 식별할 `customer_uid`를 고객사 서버에서 생성하고 관리합니다.

## 1. 빌링키 발급 요청하기

`IMP.request_pay()`에 `pay_method: "toss_brandpay"`와 `customer_uid`를 전달하여 빌링키 발급창을 호출합니다.
카드와 계좌 모두 `pay_method`를 `toss_brandpay`로 설정하며, 구매자가 발급창에서 사용할 결제수단을 선택합니다.

빌링키 발급 시에는 결제가 이루어지지 않습니다. 실제 결제는 발급 완료 후 서버에서 별도로 요청합니다.

빌링키 발급창은 PC와 모바일 모두 iframe으로 열리고, 발급 결과는 콜백 함수로 전달됩니다.

```ts title="JavaScript SDK"
IMP.init("imp00000000"); // 포트원 고객사 식별코드

// 로그인한 구매자에 대해 고객사 서버에서 생성하고 저장한 값을 사용합니다.
const customerId = "d005f081-830a-4b9c-b5e2-73e56fbe6ac3";
const customerUid = "billing-8ea5a3b1-1ab9-4f0c-a901-35785f8a924f";

IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "toss_brandpay",
    merchant_uid: crypto.randomUUID(),
    name: "월간 이용권 정기결제 등록",
    customer_id: customerId,
    customer_uid: customerUid,
  },
  async (rsp) => {
    if (rsp.error_code) {
      alert(rsp.error_msg);
      return;
    }

    // 고객사 서버에서 로그인한 구매자의 발급 요청과 빌링키 정보를 확인합니다.
    const response = await fetch("/api/billing/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customer_uid: customerUid }),
    });
    if (!response.ok) {
      alert("빌링키 등록 결과를 확인하지 못했습니다.");
      return;
    }
    // 서버에서 발급 확인을 마친 후 등록 완료 화면을 표시합니다.
  },
);
```

`/api/billing/complete`는 고객사가 구현할 서버 엔드포인트의 예시입니다. 아래의 빌링키 발급 결과 확인 절차에 따라 구현하세요.

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리]에서 확인한 브랜드페이 채널키를 입력합니다.

- pay_method: string

  **결제수단 구분코드**

  `toss_brandpay`로 지정합니다.

- customer_id: string

  **구매자 ID**

  브랜드페이의 `customerKey`에 해당합니다. 동일한 구매자에게는 같은 값을 사용해야 기존에 등록한 결제수단을 이용할 수 있습니다.
  UUID와 같이 유추하기 어려운 무작위 값을 생성하여 구매자와 연결해 저장하세요.
  영문 대소문자, 숫자, 특수문자 `-`, `_`, `=`, `.`, `@`로 구성된 2자 이상 50자 이하의 문자열을 사용합니다.

- customer_uid: string

  **빌링키 발급을 위한 결제 수단을 특정하는 고유 번호**

  빌링키와 1:1로 매핑되는, 고객사가 지정하는 결제수단별 고유값입니다. 발급 후 빌링키 조회와 결제 요청에 사용합니다.
  새로운 빌링키를 등록할 때는 기존에 사용하지 않은 값을 발급하여 저장합니다.

- merchant_uid?: string

  **주문번호**

  빌링키 발급 요청을 식별하는 주문번호입니다. 발급 요청마다 고유한 값을 지정하는 것을 권장합니다.
  생략하면 자동으로 생성됩니다.

## 2. 빌링키 발급 결과 확인하기

포트원 V1 SDK로 브랜드페이 빌링키를 발급할 때 콜백 응답에 `error_code`가 있으면 실패이며,
오류가 없는 경우에도 고객사 서버에서 [빌링키 조회 API](https://developers.portone.io/api/rest-v1/billingkey#get%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 호출하여 등록 결과를 확인하세요.

클라이언트에서 전달받은 `customer_uid`가 로그인한 구매자의 발급 요청에 사용한 값인지 확인한 뒤 조회합니다.
조회 결과의 구매자와 채널이 발급 요청과 일치하는지 확인하고, 검증된 `customer_uid`를 해당 구매자의 결제수단으로 저장합니다.
API 액세스 토큰은 서버에서만 사용합니다.

```ts title="server-side"
// 로그인한 구매자의 발급 요청에 저장한 customerUid를 사용합니다.
const response = await fetch(
  `https://api.iamport.kr/subscribe/customers/${encodeURIComponent(customerUid)}`,
  { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } },
);
const result = await response.json();
if (!response.ok || result.code !== 0 || !result.response) {
  throw new Error(result.message || "빌링키 조회에 실패했습니다.");
}

const billingKey = result.response;
if (
  billingKey.customer_uid !== customerUid ||
  billingKey.customer_id !== customerId ||
  billingKey.pg_provider !== "toss_brandpay" ||
  billingKey.pg_id !== BRANDPAY_MID
) {
  throw new Error("빌링키 정보가 발급 요청과 일치하지 않습니다.");
}
// 검증한 customerUid를 구매자의 결제수단으로 저장합니다.
```

## 3. 빌링키로 결제하기

발급받은 빌링키의 `customer_uid`로 [빌링키 결제 API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출합니다.
결제에는 빌링키 발급 시 선택한 결제수단이 사용됩니다. 원화(`KRW`) 결제만 지원합니다.

```ts title="server-side"
// 구매자에게 연결된 customerUid와 주문 금액을 고객사 서버에서 조회합니다.
const response = await fetch(
  "https://api.iamport.kr/subscribe/payments/again",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_uid: customerUid,
      merchant_uid: crypto.randomUUID(), // 결제 요청마다 고유한 주문번호
      name: "월간 이용권",
      amount: 8900,
      currency: "KRW",
    }),
  },
);
const result = await response.json();
if (!response.ok || result.code !== 0 || !result.response) {
  throw new Error(result.message || "빌링키 결제 요청에 실패했습니다.");
}

const payment = result.response;
if (payment.status !== "paid" || payment.amount !== 8900) {
  throw new Error("결제 상태 또는 금액을 확인해 주세요.");
}
// 결제 결과를 저장하고 상품 또는 서비스를 제공합니다.
```

예약결제는 [예약/반복결제 연동 가이드](https://developers.portone.io/opi/ko/integration/start/v1/non-auth#예약반복결제)를 참고하세요.
비동기 결제 결과 처리는 [웹훅 연동 가이드](https://developers.portone.io/opi/ko/integration/webhook/readme-v1)를 참고하세요.

## 유의사항

- 빌링키 발급 후 브랜드페이에서 다른 결제수단을 선택하더라도 기존 빌링키의 결제수단이 변경되지는 않습니다.
  자동결제에 사용할 결제수단을 바꾸려면 새로 빌링키를 발급하고 고객사에 저장한 결제수단 정보를 변경하세요.

- 브랜드페이에서 구매자가 탈퇴하거나 거래수단을 삭제하면 해당 결제수단으로 더 이상 자동결제할 수 없습니다.
  결제 실패 시 고객에게 빌링키 재등록을 안내하세요.
