---
title: 수기(키인) 결제 연동하기
description: 구매자 인증 없이 결제 수단 정보만으로 결제를 요청합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/non-auth
---

<div class="hint" data-style="info">

수기 결제를 이용하기 위해서는 PG사와 별도 협의가 필요합니다.

</div>

수기(키인) 결제 API를 이용해 1회성 결제 요청이 가능합니다.

## 수기 결제의 장단점

아래의 예제처럼 고객사가 직접 만든 UI로 결제 정보를 입력받을 수 있습니다.

그러나 간편 결제와 다르게 고객이 매번 정보를 기입해야 한다는 번거로움이 있습니다.

## 수기 결제 예제

고객사 서버에서 아래와 같이 포트원 API를 호출합니다.

```ts title="server-side"
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
      channelKey: CHANNEL_KEY_HERE,
      orderName: "월간 이용권 정기결제",
      // 수기 결제 API를 참고해 고객 정보를 채워주세요.
      customer: YOUR_CUSTOMER_INFO,
      amount: {
        total: 8900,
      },
      currency: "KRW",
      // 수기(키인)결제 API를 참고해 카드 / 가상계좌 정보를 채워주세요.
      method: PAYMENT_METHOD_HERE,
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```
