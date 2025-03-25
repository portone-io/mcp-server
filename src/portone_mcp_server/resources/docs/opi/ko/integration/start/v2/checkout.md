---
title: 인증 결제 연동하기
description: PG 결제창을 이용하는 인증 결제를 연동합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/auth
---

## **SDK 일반 결제**

<details>

<summary>

<strong>영상으로 보기</strong>

</summary>

[포트원 인증 결제의 이해 - 쇼핑몰 멀티PG 연동하기](https://www.youtube.com/watch?v=DhcQFLYV9Q8)

</details>

## **결제 연동 샘플 프로젝트**

SDK를 지원하지 않는 플랫폼을 포함하여 다양한 플랫폼에서 결제 연동 예시를 확인하실 수 있도록 [portone-sample GitHub 저장소](https://github.com/portone-io/portone-sample)에서 샘플 프로젝트를 제공하고 있습니다.
일부 플랫폼의 경우 devcontainers 환경에서 바로 실행해보실 수 있습니다.

## 1. 포트원 SDK 설치

포트원은 다양한 PG의 결제창을 통일된 방법으로 호출할 수 있도록 자바스크립트 SDK를 제공합니다. 브라우저에서 포트원 SDK를 호출하여 결제를 진행하게 됩니다.

포트원 V2 SDK는 npm 레지스트리와 CDN을 통해 배포되고 있습니다.

- npm, yarn 등 패키지 매니저를 사용한다면 의존
  대상으로 [@portone/browser-sdk](https://www.npmjs.com/package/@portone/browser-sdk)를 추가하세요.

- 패키지 매니저를 사용하지 않는다면 `<script>` 요소를 이용하여 CDN에서 SDK를 직접 불러오세요.

- CDN에서 ESM 모듈 형태로도 SDK를 제공하고 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="패키지 의존 대상으로 추가">

사용하는 패키지 매니저에 알맞은 명령어를 실행하세요.

```shell
npm i @portone/browser-sdk
```

```shell
yarn add @portone/browser-sdk
```

```shell
pnpm add @portone/browser-sdk
```

패키지 매니저로 SDK를 불러온 경우 `PortOne` 객체를 import해서 사용합니다.

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
```

</div>

<div class="tabs-content" data-title="<script> 요소로 추가">

```html
<script src="https://cdn.portone.io/v2/browser-sdk.js"></script>
```

`<script>` 요소로 SDK를 불러온 경우 전역 객체 `window`에 `PortOne` 객체가 추가됩니다.

</div>

<div class="tabs-content" data-title="ESM 모듈로 추가">

ESM 모듈을 사용하는 경우 URL에서 `PortOne` 객체를 직접 import할 수 있습니다.

```javascript
import * as PortOne from "https://cdn.portone.io/v2/browser-sdk.esm.js";
```

</div>

</div>

<div class="hint" data-style="info">

**타입스크립트 지원**

포트원 V2 SDK는 타입스크립트 선언 파일(`.d.ts`)의 형식으로 타입 정보를 제공하고 있습니다. npm 레지스트리를 이용하는 경우 각종 개발 환경에서 별도 설정 없이 사용 가능합니다.

</div>

## 2. 결제 요청

SDK의 `PortOne.requestPayment()` 함수를 호출하여 결제 수단에 따른 결제창을 열 수 있습니다.

먼저, 관리자 콘솔의 결제 연동 페이지에서 **Store ID**와 사용할 채널의 **채널 키**를 확인해 주세요.

그리고 아래와 같이 파라미터들을 설정하여 호출합니다.

```ts
const response = await PortOne.requestPayment({
  // Store ID 설정
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
  // 채널 키 설정
  channelKey: "channel-key-893597d6-e62d-410f-83f9-119f530b4b11",
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
  payMethod: "CARD",
});
```

**paymentId**는 결제 건을 구분하는 문자열로, 결제 요청 및 조회에 필요합니다. 같은 paymentId에 대해 여러 번의 결제 시도가 가능하나,
최종적으로 결제에 성공하는 것은 단 한 번만 가능합니다. (중복 결제 방지)

**orderName**은 주문 내용을 나타내는 문자열입니다. 특정한 형식이 있지는 않지만, 결제 처리에 필요하므로 필수적으로 전달해 주셔야 합니다.

**totalAmount**와 **currency**는 결제 금액과 결제 화폐를 지정합니다.

**payMethod**는 결제 수단을 지정합니다.

## 3. 결제 완료 처리 (브라우저)

`PortOne.requestPayment()` 함수의 반환값을 통해 결제 요청의 결과를 확인합니다.

`code`가 있으면 결제 과정에서 오류가 발생한 것이므로 적절히 처리하여야 합니다.

결제가 성공한 경우 paymentId를 서버에 전달하여 서버측 결제 완료 처리를 하도록 합니다. (가상 계좌 결제의 경우 결제가 아직 완료되지 않은 상태일 수 있습니다.)

```ts
async function requestPayment() {
  const response = await PortOne.requestPayment({
    /* 파라미터 생략 */
  });

  if (response.code !== undefined) {
    // 오류 발생
    return alert(response.message);
  }

  // /payment/complete 엔드포인트를 구현해야 합니다. 다음 목차에서 설명합니다.
  const notified = await fetch(`${SERVER_BASE_URL}/payment/complete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // paymentId와 주문 정보를 서버에 전달합니다
    body: JSON.stringify({
      paymentId: paymentId,
      // 주문 정보...
    }),
  });
}
```

결과값에 들어 있는 필드는 다음과 같습니다.

|필드명   |설명               |비고                        |
|---------|-------------------|----------------------------|
|paymentId|결제 건 ID         |공통                        |
|code     |오류 코드          |실패 시                     |
|message  |오류 문구          |실패 시                     |
|pgCode   |PG 오류 코드 그대로|실패 및 PG 오류 코드 존재 시|
|pgMessage|PG 오류 문구 그대로|실패 및 PG 오류 문구 존재 시|

### 3-1. redirect 방식의 경우

모바일 환경에서의 결제는 대부분 redirect 방식으로 이루어집니다. redirect 방식에서는 브라우저가 결제창으로 리다이렉트되었다가, 결제창에서의 작업이 끝나면
지정한 `redirectUrl`로 다시 리다이렉트됩니다. 이 경우에는 함수 호출 결과를 이용할 수 없고,
결제 성공 여부 등은 [쿼리 문자열](http://en.wikipedia.org/wiki/Query_string)로 전달받게 됩니다.

```ts
PortOne.requestPayment({
  /* 파라미터 생략 */
  redirectUrl: `${BASE_URL}/payment-redirect`,
});
```

쿼리 문자열로 전달되는 내용은 다음과 같습니다.

|키       |설명               |비고                        |
|---------|-------------------|----------------------------|
|paymentId|결제 건 ID         |공통                        |
|code     |오류 코드          |실패 시                     |
|message  |오류 문구          |실패 시                     |
|pgCode   |PG 오류 코드 그대로|실패 및 PG 오류 코드 존재 시|
|pgMessage|PG 오류 문구 그대로|실패 및 PG 오류 문구 존재 시|

예를 들어 paymentId가 `payment-39ecfa97`, redirectUrl이 `https://example.com/payment-redirect`인 경우,
결제 성공 시에 `https://example.com/payment-redirect?paymentId=payment-39ecfa97`로 리다이렉트됩니다.

## 4. 결제 완료 처리 (서버)

paymentId를 서버에 전달하면, 서버는 포트원의 [결제 조회 API](https://developers.portone.io/api/rest-v2/payment#get%20%2Fpayments%2F%7BpaymentId%7D)를
호출하여 해당 결제 건의 상태를 확인하고 결제 완료 처리를 하여야 합니다.

<div class="hint" data-style="info">

**결제 검증 필수**

인증 결제의 흐름상 결제 금액 등 정보가 고객의 브라우저 측에서 처리되므로, 의도한 결제 내용이 맞는지 꼭 확인하여야 위변조를 막을 수 있습니다.

</div>

예시로, 위에서 사용했던 `/payment/complete` 엔드포인트를 다음과 같이 구현할 수 있습니다.

[PORTONE\_API\_SECRET](https://developers.portone.io/opi/ko/integration/ready/readme?v=v2#4-2-v2-api-secret-%EB%B0%9C%EA%B8%89%ED%95%98%EA%B8%B0)
은 V2 전용 시크릿으로, 포트원 콘솔 내 결제연동 탭에서 발급받을 수 있습니다.

```ts title="Express"
app.use(bodyParser.json());

// POST 요청을 받는 /payments/complete
app.post("/payment/complete", async (req, res) => {
  try {
    // 요청의 body로 paymentId가 오기를 기대합니다.
    const { paymentId, order } = req.body;

    // 1. 포트원 결제내역 단건조회 API 호출
    const paymentResponse = await fetch(
      `https://api.portone.io/payments/${encodeURIComponent(paymentId)}`,
      {
        headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
      },
    );
    if (!paymentResponse.ok)
      throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
    const payment = await paymentResponse.json();

    // 2. 고객사 내부 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
    const orderData = await OrderService.getOrderData(order);
    if (orderData.amount === payment.amount.total) {
      switch (payment.status) {
        case "VIRTUAL_ACCOUNT_ISSUED": {
          const paymentMethod = payment.paymentMethod;
          // 가상 계좌가 발급된 상태입니다.
          // 계좌 정보를 이용해 원하는 로직을 구성하세요.
          break;
        }
        case "PAID": {
          // 모든 금액을 지불했습니다! 완료 시 원하는 로직을 구성하세요.
          break;
        }
      }
    } else {
      // 결제 금액이 불일치하여 위/변조 시도가 의심됩니다.
    }
  } catch (e) {
    // 결제 검증에 실패했습니다.
    res.status(400).send(e);
  }
});
```
