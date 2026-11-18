---
title: 구독 결제 연동하기
description: 구독 등록 SDK로 결제수단 등록과 첫 회차 결제를 한 번에 처리하고, 웹훅과 조회 API로 결과를 확인하는 방법을 안내합니다.
targetVersions:
  - v2
---

## 연동 흐름

구독 등록 SDK를 사용하면 아래 순서로 구독을 시작합니다.

1. **상품 등록**: 구독에 담을 상품을 등록합니다. 상품은 한 번 만들어 두고 여러 구독에서 사용합니다.
2. **구독 사전 등록**: 고객과 구독 항목을 담아 구독을 미리 만듭니다. 결제수단이 없으므로 구독은 `INCOMPLETE` 상태이며 청구되지 않습니다.
3. **구독 등록 SDK 호출**: 사전 등록한 구독 아이디와 구독 등록 비밀값으로 `requestSubscriptionRegistration`을 호출합니다. 고객이 결제창에서 결제수단을 등록하면 그 시각부터 구독이 시작되고 첫 회차를 결제합니다.
4. **결과 확인**: 고객사 서버에서 구독 조회 API로 첫 회차 결제 결과를 확인합니다.
5. **웹훅 처리**: 구독 결제 웹훅을 검증하고, 조회 API로 최신 상태를 가져와 서비스 제공 여부를 반영합니다.

이후 회차는 포트원이 청구 예정 시각마다 인보이스를 만들어 자동으로 결제하고, 결과를 웹훅으로 알려 줍니다.

<div class="hint" data-style="info">

이미 발급받은 빌링키로 구독을 등록하려면 [빌링키로 구독 등록하기](https://developers.portone.io/opi/ko/extra/subscription/billing-key)를 참고해 주세요.
기존 빌링키 정기결제를 구독 결제로 옮기거나, 청구 시작일을 미래로 정할 때 사용합니다.

</div>

<div class="hint" data-style="info">

모든 API 요청에는 `Authorization: PortOne {API_SECRET}` 헤더가 필요합니다.
결제가 일어날 수 있는 요청(고객 등록, 구독 생성, 수동 청구, 결제 재시도 등)에는 `Idempotency-Key` 헤더를 함께 보내는 것을 권장합니다.
같은 키로 3시간 안에 다시 요청하면 처음 응답을 그대로 돌려줍니다.
따라서 **서로 다른 요청에 같은 멱등 키를 사용해서는 안 됩니다.** 호출한 API나 요청 본문이 달라도 두 번째 요청은 처리되지 않고 첫 요청의 응답을 그대로 받습니다.

</div>

## 1. 상품 등록하기

[구독 상품 생성 API](https://developers.portone.io/api/rest-v2/subscription.product)로 상품을 등록합니다.
정기 상품(`RECURRING`)은 청구 주기(`interval`)가 필요하고, 일회성 상품(`ONE_TIME`)은 주기 없이 구독의 첫 회차에만 청구합니다.

```ts
await fetch("https://api.portone.io/products", {
  method: "POST",
  headers: {
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: "prd_english",
    name: "영어 심화",
    pricingType: "RECURRING",
    interval: { unit: "MONTH", count: 1 },
    amount: 99000,
    currency: "KRW",
  }),
});
```

## 2. 구독 사전 등록하기

[구독 사전 등록 API](https://developers.portone.io/api/rest-v2/subscription.subscription)(`POST /subscriptions/pre-register`)로 구독을 만듭니다.
고객이 없으면 함께 만들고, 이미 있는 고객이면 입력한 필드만 갱신합니다.

```ts
const response = await fetch(
  "https://api.portone.io/subscriptions/pre-register",
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer: {
        id: "customer-1234", // 미입력 시 자동 생성됩니다.
        name: "홍길동",
        email: "customer@example.com",
        phoneNumber: "01012345678",
      },
      items: [{ productId: "prd_english", quantity: 1 }],
      discounts: [
        {
          discountId: "disc_welcome10",
          appliesTo: { type: "SUBSCRIPTION" },
          duration: { type: "CYCLES", count: 3 },
        },
      ],
    }),
  },
);
const { subscription, registrationSecret } = await response.json();
// subscription.id 와 registrationSecret 을 결제 페이지 응답 본문으로 브라우저에 전달해 구독 등록 SDK를 호출합니다.
```

### 주요 파라미터

- id?: string

  **구독 아이디**

  미입력 시 자동 생성됩니다.

- customer: object

  **구독 고객**

  `id`를 비우면 새 고객을 만들고 아이디를 자동 생성합니다. 신규 고객이면 `name`이 필수입니다.

- items: object\[]

  **구독 항목**

  상품 아이디(`productId`)와 수량(`quantity`)의 목록입니다. 정기 상품이 하나 이상 있어야 하며, 담긴 정기 상품들의 청구 주기가 같아야 합니다.

- discounts?: object\[]

  **붙일 할인**

  할인마다 적용 범위(`appliesTo`)와 지속 방식(`duration`)을 정합니다.

- endDate?: string

  **구독 종료일**

  `yyyy-MM-dd` 형식입니다. 구독이 끝나는 날로, 오늘보다 뒤여야 합니다. 이날과 그 뒤로는 청구하지 않고 이날 구독을 종료하며, 이날부터는 구독 등록 SDK를 호출할 수 없습니다. 미입력 시 무기한입니다.

- paymentOptions?: object

  **결제 옵션**

  언어, 상품 유형, 할부 개월 수, 결제대행사별 추가 파라미터(`bypass`) 등 매 회차 결제 요청에 그대로 실을 값입니다.
  할부 개월 수는 0 이상이어야 합니다. 만든 뒤에는 [구독 수정 API](https://developers.portone.io/api/rest-v2/subscription.subscription)로 필드별로 고칠 수 있습니다.

- sendInvoiceEmail?: boolean

  **인보이스 메일 발송 여부**

  미입력 시 고객 이메일이 있으면 발송합니다.

- metadata?: object

  **사용자 정의 데이터**

  키-값 문자열을 붙여 두고 목록 조회에서 필터로 사용할 수 있습니다.

<div class="hint" data-style="info">

사전 등록한 구독은 결제수단이 등록되기 전까지 청구 시작일(`billStartDate`), 청구 기준일(`anchorDate`),
청구 기준 시각(`anchorTime`), 다음 청구 예정 시각(`nextBillingAt`)이 비어 있습니다.
이 값들은 구독 등록 SDK로 결제수단이 등록된 시각을 기준으로 정해집니다.

</div>

<div class="hint" data-style="warning">

응답의 `registrationSecret`은 구독 등록 SDK를 호출할 때 함께 넘기는 비밀값입니다.
이 응답에서만 받을 수 있고 다시 조회할 수 없으니 결제 페이지 응답 본문으로 브라우저에 전달해 주세요. URL에 넣지 마세요.
잃어버렸다면 구독을 해지하고 다시 사전 등록해 주세요. 구독이 시작(`ACTIVE`)되면 더는 쓸 수 없습니다.

</div>

## 3. 구독 등록 SDK 호출하기

브라우저에서 `requestSubscriptionRegistration` 함수를 호출합니다.
결제 금액, 주문명, 구매자 정보는 SDK가 사전 등록한 구독에서 가져오므로 전달하지 않습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 구독 등록 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";

const response = await PortOne.requestSubscriptionRegistration({
  storeId: "store-00000000-0000-0000-0000-000000000000", // 고객사 storeId로 변경해주세요.
  channelKey: "channel-key-00000000-0000-0000-0000-000000000000", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
  subscriptionId: "subscription-0193c1a2", // 구독 사전 등록 API 응답의 구독 아이디
  registrationSecret, // 구독 사전 등록 API 응답의 registrationSecret
  billingKeyMethod: "CARD",
  redirectUrl: "https://example.com/subscription-redirect", // 모바일 등 리디렉션 방식에서 결과를 받을 주소
});

if (response === undefined || response.code !== undefined) {
  // 구독 등록이 끝나지 않았습니다. response.message 로 사유를 안내해 주세요.
  return alert(response?.message);
}

// 결제수단 등록과 첫 회차 결제가 끝났습니다.
// response.subscriptionId, response.paymentId 를 고객사 서버로 전달해 확인해 주세요.
await fetch("/api/subscription/complete", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    subscriptionId: response.subscriptionId,
    paymentId: response.paymentId,
  }),
});
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **상점 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다.
  구독 등록을 지원하는 결제대행사의 채널이어야 합니다. [지원 결제대행사](#지원-결제대행사)를 확인해 주세요.

- subscriptionId: string

  **구독 아이디**

  구독 사전 등록 API로 만든 구독의 아이디입니다.

- registrationSecret: string

  **구독 등록 비밀값**

  구독 사전 등록 API 응답의 `registrationSecret`입니다. 구독 아이디와 맞지 않으면 구독 등록 창이 열리지 않습니다.

- billingKeyMethod?: string

  **결제수단**

  `CARD` 또는 `PAYPAL`입니다. 미입력 시 `CARD`입니다. `PAYPAL`은 페이팔(RT) 채널에서만 사용할 수 있습니다.

- issueId?: string

  **빌링 등록 주문 번호**

  결제대행사에 주문 번호로 전달됩니다. 스마트로, 나이스정보통신, 웰컴페이먼츠는 필수입니다.

- issueName?: string

  **빌링키 발급 주문명**

  미입력 시 구독의 첫 회차 주문명을 사용합니다.

- redirectUrl?: string

  **결과를 받을 주소**

  결제대행사 페이지로 이동해 진행하는 리디렉션 방식에서 필수입니다. 대부분의 모바일 환경이 리디렉션 방식에 해당합니다.

- windowType?: object

  **결제창 유형**

  결제대행사에 따라 가능한 창 유형이 다릅니다. 미입력 시 결제대행사의 기본 창 방식을 따릅니다.

- locale?: string

  **결제창 언어**

- productType?: string

  **상품 유형**

  미입력 시 구독 결제 옵션(`paymentOptions.productType`)의 값을 사용합니다.

- bypass?: object

  **결제대행사별 추가 파라미터**

  결제대행사에 따라 빌링키 발급 또는 빌링키 발급 및 결제 파라미터를 사용합니다. 각 결제대행사 연동 가이드를 참고해 주세요.

### 응답

|필드                 |설명                                                                          |
|---------------------|------------------------------------------------------------------------------|
|`transactionType`    |항상 `SUBSCRIPTION_REGISTRATION`입니다.                                       |
|`subscriptionId`     |구독 아이디입니다.                                                            |
|`paymentId`          |첫 회차 결제의 결제 아이디입니다.                                             |
|`billingKey`         |새로 발급된 빌링키입니다. 실패한 경우에도 빌링키 발급까지 끝났다면 전달됩니다.|
|`code`, `message`    |실패한 경우에만 전달됩니다.                                                   |
|`pgCode`, `pgMessage`|결제대행사가 오류 코드와 메시지를 내려준 경우 그대로 전달됩니다.              |

리디렉션 방식에서는 위 응답 값이 `redirectUrl`에 쿼리 파라미터로 붙습니다.

## 4. 결과 확인하기

SDK는 **첫 회차 결제까지 성공했을 때만** 성공으로 응답합니다.
결제창을 닫았거나 결제수단 등록에 실패한 경우뿐 아니라, 결제수단은 등록됐지만 첫 회차 결제가 실패했거나 결과를 확인하지 못한 경우에도 실패로 응답합니다.

<div class="hint" data-style="warning">

SDK가 실패로 응답했더라도 첫 회차 결제가 뒤늦게 완료될 수 있습니다.
구독의 최종 결과는 반드시 **`Invoice.Paid` 웹훅** 또는 [구독 조회 API](https://developers.portone.io/api/rest-v2/subscription.subscription)로 확인해 주세요.
구독이 `ACTIVE`이면 결제수단 등록과 첫 회차 결제가 끝난 것입니다.

</div>

SDK 응답 값은 브라우저를 거쳐 오므로 그대로 믿지 말고, 고객사 서버에서 [구독 조회 API](https://developers.portone.io/api/rest-v2/subscription.subscription)(`GET /subscriptions/{subscriptionId}`)로 상태를 확인합니다.

```ts title="Express"
app.post("/api/subscription/complete", async (req, res) => {
  const { subscriptionId } = req.body;
  // 사전 등록 때 저장해 둔 구독인지, 로그인한 고객의 구독인지 먼저 확인해 주세요.

  const response = await fetch(
    `https://api.portone.io/subscriptions/${encodeURIComponent(subscriptionId)}`,
    { headers: { Authorization: `PortOne ${process.env.PORTONE_API_SECRET}` } },
  );
  if (!response.ok) throw new Error(`구독 조회 실패: ${await response.text()}`);
  const { subscription } = await response.json();

  if (subscription.status === "ACTIVE") {
    // 결제수단 등록과 첫 회차 결제가 끝났습니다. 서비스를 제공합니다.
    return res.status(200).json({ status: "ACTIVE" });
  }
  // 아직 INCOMPLETE 입니다. 결과가 뒤늦게 확정되면 웹훅으로 알려 드립니다.
  res.status(200).json({ status: subscription.status });
});
```

|상황                              |구독 상태   |처리 방법                                                                                                                                              |
|----------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|첫 회차 결제 성공                 |`ACTIVE`    |서비스를 제공합니다. `Subscription.Activated`, `Invoice.Paid` 웹훅이 발송됩니다.                                                                       |
|결제창 이탈, 결제수단 등록 실패   |`INCOMPLETE`|같은 구독 아이디와 비밀값으로 구독 등록 SDK를 다시 호출할 수 있습니다.                                                                                 |
|결제수단 등록 후 첫 회차 결제 실패|`INCOMPLETE`|다른 결제수단으로 구독 등록 SDK를 다시 호출하거나, [결제 재시도 API](https://developers.portone.io/api/rest-v2/subscription.invoice)로 다시 결제합니다.|
|결과 미확정                       |`INCOMPLETE`|포트원이 결제 상태를 확인해 정리합니다. 완료되면 `Invoice.Paid` 웹훅이 발송됩니다.                                                                     |

<div class="hint" data-style="info">

구독 등록 SDK로 발급한 빌링키와 첫 회차 결제에는 기존 빌링키 발급·결제 웹훅 대신 구독 결제 웹훅이 발송됩니다.
웹훅 종류는 [구독 결제 웹훅](https://developers.portone.io/opi/ko/extra/subscription/webhook)을 참고해 주세요.

</div>

## 5. 웹훅 처리하기

첫 회차 이후의 회차는 고객이 결제창에 들어오지 않고 포트원이 자동으로 결제하므로, 결과는 웹훅으로만 받을 수 있습니다.
웹훅을 받으면 아래 순서로 처리합니다.

1. **서명 검증**: 포트원이 보낸 웹훅인지 확인합니다. 방법은 [V2 결제 웹훅](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)과 같습니다.
2. **조회 API로 상세 확인**: 웹훅 본문(`data`)에는 바뀐 대상의 아이디만 담깁니다. 금액, 상태, 실패 사유 같은 상세 내용은 각 조회 API로 가져와 판단합니다.
3. **고객사 데이터 반영**: 조회한 최신 상태를 기준으로 서비스 제공·연장·중단을 처리하고 `200`으로 응답합니다.

|웹훅            |본문의 아이디                              |상세 조회 API                                                                                                          |
|----------------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
|`Customer.*`    |`customerId`                               |[구독 고객 조회](https://developers.portone.io/api/rest-v2/subscription.customer)(`GET /customers/{customerId}`)       |
|`Subscription.*`|`subscriptionId`, `customerId`             |[구독 조회](https://developers.portone.io/api/rest-v2/subscription.subscription)(`GET /subscriptions/{subscriptionId}`)|
|`Invoice.*`     |`invoiceId`, `subscriptionId`, `customerId`|[인보이스 조회](https://developers.portone.io/api/rest-v2/subscription.invoice)(`GET /invoices/{invoiceId}`)           |

```ts title="Express"
import * as PortOne from "@portone/server-sdk";
import bodyParser from "body-parser";
import express from "express";

const app = express();

async function getPortOne(path) {
  const response = await fetch(`https://api.portone.io${path}`, {
    headers: { Authorization: `PortOne ${process.env.PORTONE_API_SECRET}` },
  });
  if (!response.ok) throw new Error(`조회 실패: ${await response.text()}`);
  return response.json();
}

// 웹훅 검증 시 텍스트로 된 body가 필요합니다.
app.use("/portone-webhook", bodyParser.text({ type: "application/json" }));

app.post("/portone-webhook", async (req, res) => {
  // 1. 서명을 검증합니다. 실패하면 WebhookVerificationError가 발생합니다.
  try {
    await PortOne.Webhook.verify(
      process.env.PORTONE_WEBHOOK_SECRET,
      req.body,
      req.headers,
    );
  } catch (e) {
    if (e instanceof PortOne.Webhook.WebhookVerificationError) {
      return res.status(400).end();
    }
    throw e;
  }

  const { type, data } = JSON.parse(req.body);

  // 2. 아이디로 최신 상태를 조회해 판단합니다.
  switch (type) {
    case "Invoice.Paid": {
      const { invoice } = await getPortOne(
        `/invoices/${encodeURIComponent(data.invoiceId)}`,
      );
      if (invoice.status === "PAID" || invoice.status === "PAID_MANUALLY") {
        // 3. 해당 회차의 서비스를 제공·연장합니다.
        // 같은 웹훅이 다시 올 수 있으므로 invoice.id 기준으로 한 번만 처리해 주세요.
      }
      break;
    }
    case "Invoice.PaymentFailed": {
      const { invoice } = await getPortOne(
        `/invoices/${encodeURIComponent(data.invoiceId)}`,
      );
      if (invoice.status === "FAILED") {
        // invoice.payment?.failure 로 실패 사유를 확인하고 고객에게 결제수단 변경을 안내합니다.
      }
      break;
    }
    case "Subscription.Ended": {
      const { subscription } = await getPortOne(
        `/subscriptions/${encodeURIComponent(data.subscriptionId)}`,
      );
      if (subscription.status === "ENDED") {
        // 서비스 제공을 종료합니다.
      }
      break;
    }
    // 그 밖의 웹훅은 필요한 것만 골라 처리합니다.
  }

  res.status(200).end();
});
```

웹훅 종류와 발송 시점은 [구독 결제 웹훅](https://developers.portone.io/opi/ko/extra/subscription/webhook)을 참고해 주세요.

## 6. 테스트 결제하기

테스트 채널로 구독을 등록하면 실제 결제 없이 전체 흐름을 확인할 수 있습니다.

1. **테스트 채널로 구독 등록**: 관리자 콘솔에서 테스트용으로 추가한 채널의 채널 키를 [구독 등록 SDK](#3-구독-등록-sdk-호출하기) 호출 시 `channelKey`로 전달합니다. 이렇게 등록한 고객은 테스트 고객이 되며, 이후 회차도 모두 테스트로 결제됩니다.
2. **웹훅 수신 확인**: 테스트 고객의 웹훅은 관리자 콘솔에 등록한 **테스트 환경 웹훅 주소**로 발송됩니다. 고객사 웹훅 수신 서버([웹훅 처리하기](#5-웹훅-처리하기) 참고)에 `Subscription.Activated`, `Invoice.Paid` 웹훅이 도착하는지 확인합니다.
3. **다음 회차 바로 청구**: 청구일까지 기다리지 않고 [테스트 구독 즉시 청구 API](https://developers.portone.io/api/rest-v2/subscription.subscription)(`POST /subscriptions/{subscriptionId}/charge-test`)로 다음 회차를 지금 청구해 정기 회차 결제와 웹훅을 확인합니다.
4. **결제 실패 확인**: 같은 API에 `simulateFailure: true`를 넣으면 결제대행사에 요청하지 않고 결제 실패로 처리합니다. `Invoice.PaymentFailed` 웹훅과 [결제 재시도](https://developers.portone.io/opi/ko/extra/subscription/management#결제-실패-처리하기) 흐름을 확인할 수 있습니다.

```ts
await fetch(
  `https://api.portone.io/subscriptions/${encodeURIComponent(subscriptionId)}/charge-test`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ simulateFailure: false }), // true 면 결제 실패로 처리합니다.
  },
);
```

<div class="hint" data-style="warning">

고객은 처음 등록한 빌링키의 채널에 따라 테스트 고객 또는 실결제 고객이 되며, 이후 바뀌지 않습니다.
같은 고객에게 다른 모드의 빌링키를 등록할 수 없으므로 테스트와 실결제에는 고객 아이디를 나눠 사용해 주세요.
테스트 구독 즉시 청구 API는 테스트 고객의 구독에만 사용할 수 있습니다.

</div>

## 지원 결제대행사

구독 등록 SDK를 지원하는 결제대행사는 아래와 같습니다. 결제수단은 카드이며, 페이팔(RT)만 페이팔 계정을 등록합니다(`billingKeyMethod: "PAYPAL"`).

- 토스페이먼츠
- 나이스정보통신
- 스마트로
- KG이니시스
- NHN KCP
- 한국결제네트웍스(KPN)
- 웰컴페이먼츠
- 갤럭시아머니트리
- KG모빌리언스
- KICC
- 페이팔(RT)
- 엑심베이
- 페이레터 해외결제

결제창에서 빌링키를 발급한 뒤 포트원이 그 빌링키로 첫 회차를 결제합니다(**등록 후 결제**).
단, **엑심베이**와 **페이레터 해외결제**는 결제창 한 번으로 빌링키 발급과 첫 회차 결제를 함께 처리합니다(**등록과 함께 결제**).
고객사는 어느 방식이든 같은 함수로 호출하며, 포트원이 채널을 보고 방식을 정합니다.

목록에 없는 결제대행사는 구독 등록 SDK를 지원하지 않습니다. [빌링키로 구독 등록하기](https://developers.portone.io/opi/ko/extra/subscription/billing-key) 방법을 사용해 주세요.

### 유의사항

- 엑심베이, 페이레터 해외결제는 첫 회차 금액이 0원이면 사용할 수 없습니다.
- 첫 회차 인보이스가 결제 실패(`FAILED`) 상태인 구독은 엑심베이, 페이레터 해외결제 채널로 다시 등록할 수 없습니다. 다른 채널로 다시 등록하거나 결제 재시도 API로 다시 결제해 주세요.
- 엑심베이는 구독 결제 옵션의 언어(`paymentOptions.locale`)가 필수입니다. 사전 등록 때 넣지 않았다면 구독 등록 SDK를 호출하기 전에 구독 수정 API로 넣어 주세요.
- 스마트로, 나이스정보통신, 웰컴페이먼츠는 `issueId`를 꼭 전달해 주세요.
