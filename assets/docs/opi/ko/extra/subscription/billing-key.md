---
title: 빌링키로 구독 등록하기
description: >-
  이미 발급받은 빌링키로 고객과 구독을 직접 등록하는 방법을 안내합니다. 기존 빌링키 정기결제를 구독 결제로 옮기거나 청구 시작일을 미래로
  정할 때 사용합니다.
targetVersions:
  - v2
---

결제창 없이 빌링키로 고객과 구독을 직접 등록하는 방법입니다. 아래 경우에 사용합니다.

- **기존 빌링키 정기결제를 구독 결제로 옮길 때**: 이미 발급받아 보관 중인 빌링키를 고객과 함께 등록하면, 고객이 결제수단을 다시 등록하지 않아도 구독 결제로 넘어올 수 있습니다.
- **청구 시작일을 미래로 정할 때**: 구독 등록 SDK는 결제수단을 등록한 시각에 첫 회차를 결제하므로, 첫 청구를 특정 날짜로 미루려면 이 방법을 사용합니다.
- **구독 등록 SDK를 지원하지 않는 결제대행사를 사용할 때**: [지원 결제대행사](https://developers.portone.io/opi/ko/extra/subscription/integration#지원-결제대행사)를 확인해 주세요.

새로 구독을 시작하는 고객이라면 결제수단 등록과 첫 회차 결제를 한 번에 처리하는 [구독 등록 SDK](https://developers.portone.io/opi/ko/extra/subscription/integration)를 권장합니다.

<div class="hint" data-style="info">

모든 API 요청에는 `Authorization: PortOne {API_SECRET}` 헤더가 필요합니다.
결제가 일어날 수 있는 요청(고객 등록, 구독 생성 등)에는 `Idempotency-Key` 헤더를 함께 보내는 것을 권장합니다.
같은 키로 3시간 안에 다시 요청하면 처음 응답을 그대로 돌려줍니다.
따라서 **서로 다른 요청에 같은 멱등 키를 사용해서는 안 됩니다.** 호출한 API나 요청 본문이 달라도 두 번째 요청은 처리되지 않고 첫 요청의 응답을 그대로 받습니다.

</div>

## 연동 흐름

1. **빌링키 준비**: 이미 보유한 빌링키를 사용하거나, [빌링키 발급](https://developers.portone.io/opi/ko/integration/start/v2/billing/issue) 가이드에 따라 결제창(`requestIssueBillingKey`) 또는 API로 새로 발급합니다.
2. **고객 등록**: [구독 고객 등록 API](https://developers.portone.io/api/rest-v2/subscription.customer)(`POST /customers`)로 빌링키와 함께 고객을 등록합니다. `subscription` 필드를 함께 보내면 구독까지 한 번에 만들 수 있습니다.
3. **구독 생성**: 이미 등록된 고객에게 구독을 추가할 때는 [구독 생성 API](https://developers.portone.io/api/rest-v2/subscription.subscription)(`POST /subscriptions`)를 사용합니다.
4. **결과 확인**: 구독 결제 웹훅을 받아 조회 API로 상세 내용을 확인합니다. [웹훅 처리하기](https://developers.portone.io/opi/ko/extra/subscription/integration#5-웹훅-처리하기)와 같은 방법입니다.

## 고객과 구독 등록하기

`billStartDate`로 청구 시작일을 정할 수 있으며, 오늘이면 첫 회차를 즉시 결제합니다.
첫 회차 결제 요청이 빌링키의 결제대행사 규칙(예: 엑심베이의 결제 언어 필수)에 맞지 않으면 구독을 만들지 않고 `INVALID_REQUEST`로 거절합니다.

```ts
await fetch("https://api.portone.io/customers", {
  method: "POST",
  headers: {
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
    "Content-Type": "application/json",
    "Idempotency-Key": crypto.randomUUID(),
  },
  body: JSON.stringify({
    id: "customer-1234",
    name: "홍길동",
    billingKey: "billing-key-...", // 발급받은 빌링키
    subscription: {
      items: [{ productId: "prd_english", quantity: 1 }],
      billStartDate: "2026-12-01",
    },
  }),
});
```

상품은 [상품 등록하기](https://developers.portone.io/opi/ko/extra/subscription/integration#1-상품-등록하기)에서 미리 만들어 둡니다.

<details>

<summary>결제수단을 바꾸려면</summary>

새 빌링키를 발급받아 구독 고객 등록 API로 다시 등록하면 고객의 빌링키가 교체됩니다.
고객의 모든 구독이 다음 회차부터 새 빌링키로 결제됩니다.

이전 빌링키는 자동으로 삭제하지 않습니다. 더 이상 쓰지 않는다면 [빌링키 삭제 API](https://developers.portone.io/api/rest-v2/payment.billingKey#delete%20%2Fbilling-keys%2F%7BbillingKey%7D)로 직접 삭제해 주세요.

빌링키를 먼저 삭제했다면 새 빌링키를 같은 방법으로 등록해 주세요. 등록하기 전까지는 그 고객으로 구독을 만들 수 없습니다.

</details>

[구독 결제 웹훅](https://developers.portone.io/opi/ko/extra/subscription/webhook)
