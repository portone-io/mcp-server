---
title: 2. 결제 요청하기
description: 포트원 빌링키 결제 API를 사용해 바로 결제를 요청합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/non-auth
---

포트원의 빌링키 결제 API를 호출하여 결제를 진행합니다.

바로 결제를 진행하고 싶은 것이 아니라 미래 특정 시점에 결제가 일어나게 하고 싶다면 [결제 예약하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/schedule)을 참고하세요.

```ts title="server-side"
// 고객사에서 채번하는 새로운 결제 ID를 만들어주세요.
const paymentId = OrderService.getNewPaymentId();

// 포트원 빌링키 결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(paymentId)}/billing-key`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      billingKey,
      orderName: "월간 이용권 정기결제",
      // 빌링키 결제 API를 참고해 고객 정보를 채워주세요.
      customer: YOUR_CUSTOMER_INFO,
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
