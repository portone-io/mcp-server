---
title: 3. 예약/반복결제 구현하기
description: 발급한 빌링키로 예약/반복결제를 구현하는 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/non-auth
---

## 1. 결제 예약하기

미래의 특정 시점에 결제가 진행되도록 할 때는 **포트원 결제 예약 API**를 이용합니다.

```ts title="server-side"
// 포트원 결제 예약 API 호출
const scheduleResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/schedule`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payment: {
        billingKey: BILLING_KEY_HERE,
        orderName: "월간 이용권 정기결제",
        customer: {
          id: CUSTOMER_ID_HERE,
          // 고객 정보가 필요한 경우 API 명세에 따라 추가해주세요.
        },
        amount: {
          total: 8900,
        },
        currency: "KRW",
      },
      timeToPay: "2023-08-24T14:15:22Z", // 결제를 시도할 시각
    }),
  },
);
if (!scheduleResponse.ok)
  throw new Error(`scheduleResponse: ${await scheduleResponse.json()}`);
```

## 2. 결제 결과 수신하기

예약한 시간에 결제가 시도되면 지정한 서버의 웹훅 URL로 고객사 거래 번호(**`payment_id`**)가
전달됩니다. 결제 결과를 확인하신 뒤 결제 완료 처리를 하시면 됩니다.

웹훅을 받아 결제 결과를 확인하는 방법은 [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)를 참고해주세요.

## 3. 반복 결제 구현하기

반복 결제는 예약된 결제가 완료된 뒤 다음 결제를 예약하는 식으로 구현할 수 있습니다.
