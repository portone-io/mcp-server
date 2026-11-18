---
title: 체크아웃
description: 포트원이 호스팅하는 체크아웃 페이지를 생성하고 결제 결과를 처리합니다.
targetVersions:
  - v2
---

체크아웃은 고객사가 결제 UI를 직접 구현하지 않아도 사용할 수 있는 포트원 호스팅 결제 페이지입니다.
서버에서 주문 정보와 체크아웃 프로필을 이용해 결제 세션을 생성하고, 응답으로 받은 URL로 구매자를 이동시키면 됩니다.체크아웃 페이지에는 주문 및 구매자 정보, 이용 가능한 결제 수단, 사용자 지정 약관이 표시됩니다. 결제 수단은 체크아웃 프로필의 설정과
결제 세션을 생성할 때 입력한 국가 및 통화에 따라 자동으로 결정됩니다.## 지원 범위현재 체크아웃은 **V2 해외결제 채널**을 지원합니다.* 페이팔(PayPal)
* 이지페이(KICC) 해외결제
* 엑심베이(Eximbay)
* 페이먼트월(Paymentwall)
* KG이니시스 일본결제/\* 헥토파이낸셜 해외결제는 당분간 노출하지 않습니다.
\- 헥토파이낸셜 해외결제
\*/지원하는 PG사와 결제 수단은 계속 변경될 수 있습니다.## 연동 흐름1) 관리자 콘솔에서 체크아웃 프로필을 설정합니다.
2) 고객사 서버에서 주문을 생성하고 포트원 결제 세션 생성 API를 호출합니다.
3) API 응답의 `url`로 구매자를 이동시키거나 링크를 전달합니다.
4) 포트원이 호스팅하는 페이지에서 구매자가 결제를 진행합니다.
5) 웹훅을 수신한 뒤 결제 조회 API로 결제 상태와 금액을 검증하고 주문을 처리합니다.## 1. 체크아웃 프로필 설정하기관리자 콘솔의 **체크아웃** 메뉴에서 프로필을 설정합니다. 프로필은 결제 수단별 PG사와 채널을 묶은 설정이며,
결제 세션을 생성할 때 프로필 키(`profileKey`)로 지정합니다.1) **결제 연동 > 연동 정보**에서 사용할 V2 해외결제 채널을 추가합니다.
2) **체크아웃** 메뉴에서 테스트 또는 실연동 프로필을 선택합니다.
3) 사용할 결제 수단을 활성화하고 각 결제 수단에 PG사와 채널을 연결합니다.
4) 프로필 키를 복사해 서버에서 관리합니다.자세한 설정 방법은 [체크아웃 관리자 콘솔 가이드](https://help.portone.io/category/admin-console/checkout)를 참고하세요.<div class="hint" data-style="warning">

테스트 채널은 테스트 프로필에, 실연동 채널은 실연동 프로필에만 연결할 수
있습니다. 결제 세션을 생성할 때도 환경에 맞는 상점과 프로필을 사용하세요.

</div>## 2. 결제 세션 생성하기고객사 서버에서 [결제 세션 생성 API](https://developers.portone.io/api/rest-v2/paymentSession?v=v2#post%20%2Fpayment-sessions)를 호출합니다.
API Secret이 브라우저나 앱에 노출되지 않도록 이 요청은 반드시 서버에서 처리하세요.```ts title="server-side"
const order = await OrderService.findById(ORDER_ID);
const paymentId = `payment-${crypto.randomUUID()}`;

const sessionResponse = await fetch("https://api.portone.io/payment-sessions", {
  method: "POST",
  headers: {
    Authorization: `PortOne ${process.env.PORTONE_API_SECRET}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
    paymentId,
    profileKey: "checkout-profile-key",
    country: "US",
    currency: "USD",
    totalAmount: order.totalAmount,
    orderName: order.name,
    redirectUrl: "https://example.com/checkout/complete",
    products: order.products.map((product) => ({
      id: product.id,
      name: product.name,
      unitPrice: product.unitPrice,
      quantity: product.quantity,
    })),
    customerName: order.customer.name,
    customerEmail: order.customer.email,
    customData: JSON.stringify({ orderId: order.id }),
  }),
});

if (!sessionResponse.ok) {
  throw new Error(`sessionResponse: ${await sessionResponse.text()}`);
}

const session = await sessionResponse.json();
// 주문과 paymentId 및 session.sessionId의 관계를 고객사 서버에 저장합니다.
await OrderService.attachPaymentSession(order.id, paymentId, session.sessionId);

// session.url을 브라우저에 반환하거나 고객에게 전달합니다.
return Response.json({ url: session.url });
```주요 요청 필드는 다음과 같습니다.|필드                           |필수|설명                                                                                             |
|-------------------------------|----|-------------------------------------------------------------------------------------------------|
|`storeId`                      |필수|결제를 처리할 포트원 상점 아이디입니다.                                                          |
|`paymentId`                    |필수|고객사가 생성한 결제 건 아이디입니다. 주문과 연결해 저장하세요.                                  |
|`profileKey`                   |필수|관리자 콘솔에서 설정한 체크아웃 프로필 키입니다.                                                 |
|`country`                      |필수|구매 국가의 ISO 3166-1 alpha-2 코드입니다.                                                       |
|`currency`                     |필수|결제 통화의 세 자리 코드입니다.                                                                  |
|`totalAmount`                  |필수|전체 결제 금액입니다.                                                                            |
|`orderName`                    |필수|체크아웃 페이지와 결제사 UI에 표시할 주문명입니다.                                               |
|`redirectUrl`                  |선택|결제 절차가 끝난 뒤 구매자를 이동시킬 URL입니다. 생략하면 포트원의 기본 결과 페이지가 표시됩니다.|
|`products`                     |선택|상품별 이름, 단가, 수량 등의 정보입니다.                                                         |
|`customerName`, `customerEmail`|선택|체크아웃 페이지에 표시할 구매자 정보입니다.                                                      |
|`storeName`, `orderImageUrl`   |선택|페이지에 표시할 상점 이름과 주문 대표 이미지입니다.                                              |
|`agreements`                   |선택|사용자 지정 약관의 이름과 URL입니다. 구매자가 모든 약관에 동의해야 결제 버튼이 활성화됩니다.     |
|`customData`                   |선택|결제 조회 결과에도 포함할 문자열입니다. 객체를 저장하려면 JSON 문자열로 변환하세요.              |
|`colors`                       |선택|`primary`, `primaryHover`, `primaryLight` CSS 색상으로 페이지를 꾸밉니다.                        |
|`ttlSeconds`                   |선택|결제 세션이 유지되는 시간(초)입니다.                                                             |성공하면 다음 형식으로 결제 세션 아이디, 체크아웃 URL, 만료 시각이 반환됩니다.```json
{
  "sessionId": "payment-session-id",
  "url": "https://checkout.portone.io/sessions/iCnBi5J37oYefUP8pZIZ-JTsKN3J14hm7JKNO5MYkH6FrGkN",
  "expiresAt": "2026-07-15T09:30:00Z"
}
````expiresAt` 이후에는 해당 URL에 접근할 수 없습니다. 결제 링크를 장기간 보관하지 말고, 만료된 링크가 필요한 경우 새 결제 세션을 생성하세요.필요한 경우 [결제 세션 조회 API](https://developers.portone.io/api/rest-v2/paymentSession?v=v2#get%20%2Fpayment-sessions%2F%7BsessionId%7D)로 생성한 세션의 정보를
다시 확인할 수 있습니다. 이 API는 인증 헤더 없이 웹 페이지에서도 접근할 수 있으므로 `customData`, 상품 정보 등의 필드에 비밀 값이나
불필요한 개인정보를 포함하지 마세요.## 3. 구매자에게 체크아웃 열어주기응답으로 받은 `url`을 프론트엔드에 반환한 뒤 현재 창에서 이동시키거나 새 창으로 열 수 있습니다.```ts title="client-side"
const response = await fetch("/api/checkout-sessions", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ orderId }),
});

if (!response.ok) throw new Error("결제 링크를 생성하지 못했습니다.");

const { url } = await response.json();
window.location.assign(url);
```같은 URL을 QR 코드로 변환해 게시하거나 문자 및 메신저로 전달할 수도 있습니다.### 특정 결제 수단 바로 호출하기주문서에서 결제 수단을 선택하게 하지 않고 특정 결제 수단을 바로 열려면 결제 세션 생성 요청의 `paymentMethod`를 지정합니다.
추가 정보 입력이 필요하지 않은 결제 수단은 체크아웃 주문서를 건너뛰고 해당 결제창으로 바로 이동합니다.```json
{
  "storeId": "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
  "paymentId": "payment-8f40c7d4",
  "profileKey": "checkout-profile-key",
  "paymentMethod": "PAY_PAL",
  "country": "US",
  "currency": "USD",
  "totalAmount": 1000,
  "orderName": "월간 이용권"
}
```지정한 결제 수단은 프로필에서 활성화되어 있고 요청한 국가, 통화 및 금액을 지원해야 합니다.### 사용 가능한 결제 수단 미리 조회하기고객사 페이지에서 결제 수단을 직접 표시하거나 다이렉트 호출 전에 지원 여부를 확인하려면
[체크아웃 프로필 평가 API](https://developers.portone.io/api/rest-v2/checkoutProfile?v=v2#get%20%2Fcheckout-profiles%2Fevaluate)를 사용할 수 있습니다.```ts
const params = new URLSearchParams({
  profileKey: "checkout-profile-key",
  country: "US",
  currency: "USD",
  amount: "1000",
});

const response = await fetch(
  `https://api.portone.io/checkout-profiles/evaluate?${params}`,
);
const { methods } = await response.json();

// [{ paymentMethod: "PAY_PAL", channelKey: "channel-key-..." }, ...]
```프로필 평가는 조회 시점에 주어진 조건으로 사용할 수 있는 결제 수단과 연결된 채널을 반환합니다. 실제 결제 요청에는 같은 조건을 사용하세요.## 4. 결제 결과 처리하기`redirectUrl`은 구매자의 브라우저를 돌려보내기 위한 주소입니다. 브라우저가 중간에 닫히거나 네트워크 문제가 생길 수 있으므로
리다이렉트 도착만으로 주문을 결제 완료 처리하지 마세요.결제 결과는 다음과 같이 서버에서 처리합니다.1. [V2 웹훅](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)을 설정하고 결제 이벤트를 수신합니다.

2. 웹훅의 서명을 검증하거나, 웹훅에서 받은 `paymentId`로
   [결제 조회 API](https://developers.portone.io/api/rest-v2/payment?v=v2#get%20%2Fpayments%2F%7BpaymentId%7D)를 호출합니다.

3. 조회한 결제 상태, 결제 금액, 통화가 고객사 주문 정보와 일치하는지 확인합니다.

4. 같은 이벤트를 여러 번 받아도 결과가 같도록 주문 처리를 멱등하게 구현합니다.<div class="hint" data-style="warning">

결제 완료 웹훅을 받았더라도 고객사 서버에 저장된 주문 금액과 포트원의 결제
조회 결과를 반드시 비교하세요. 검증이 끝난 뒤에만 상품 지급이나 주문 확정을
처리해야 합니다.

</div>`redirectUrl`로 돌아온 구매자에게는 고객사 서버에 저장된 주문 상태를 조회해 결과를 표시하세요. 웹훅과 브라우저 리다이렉트의 도착 순서는
보장되지 않으므로, 아직 처리 중이라면 잠시 후 상태를 다시 조회하도록 구현할 수 있습니다.## 5. 더 이상 사용하지 않는 세션 종료하기주문이 취소되거나 재고가 만료되어 링크를 더 이상 사용하지 못하게 하려면 고객사 서버에서
[결제 세션 종료 API](https://developers.portone.io/api/rest-v2/paymentSession?v=v2#post%20%2Fpayment-sessions%2F%7BsessionId%7D%2Fclose)를 호출합니다.```ts title="server-side"
const response = await fetch(
  `https://api.portone.io/payment-sessions/${encodeURIComponent(sessionId)}/close`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${process.env.PORTONE_API_SECRET}`,
    },
  },
);

if (!response.ok) {
  throw new Error(`closeResponse: ${await response.text()}`);
}
```종료된 세션으로는 체크아웃 페이지에 접근할 수 없습니다. 결제를 다시 받아야 한다면 새 세션을 생성하여 새 URL을 전달하세요.
