---
title: 인증 결제 연동하기
description: PG 결제창을 이용하는 인증 결제를 연동합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/start/v2/checkout
---

## 인증 결제란? <span id="definition" />

인증 결제는 결제 시 PG사로부터 결제에 대한 인증 결과 수신 이후 해당 인증키로 결제를 요청하는
결제 방식을 지칭합니다. 국내에서 제일 많이 볼 수 있는 결제 방식으로 결제 주문 페이지에서 결제가
요청되면 각 PG사의 결제창이 활성화되고, 그 후 고객이 선택한 카드사에 따른 카드사 전용 결제 모듈에서
인증이 완료되면 해당 인증값을 통해 결제를 요청하는 흐름으로 결제가 진행됩니다.

(이미지 첨부: 일반적인 인증 결제 플로우)

<div class="hint" data-style="info">

실제 결제 요청을 위한 통신은 고객사 서버와 PG사 서버 간에 직접적으로 이루어지며,
해당 결제 요청 과정에 카드 정보는 포함되지 않습니다.

</div>

인증 결제는 인증 방법에 따라 전통적으로 아래 두 가지 형태로 구분됩니다.

- ISP 결제 : 공개 키 기반의 전자인증서를 통해 사전에 등록된 카드 정보를 인증하는 방식
- MPI 결제 : 카드 번호, CVC, 안심클릭 비밀번호를 입력하여 카드 정보를 인증하는 방식

최근에는 대부분의 카드사에서 카드사 자체 간편결제를 지원하고 있으며, 고객은 사전에 카드를
등록하고 결제 시 결제 비밀번호를 이용하여 간편하게 결제를 요청할 수 있는 구조를 가지고
있습니다.

(이미지 첨부: 인증 결제 사용 예시)

## 인증 결제 연동하기

<details>

<summary>

<strong>영상으로 보기</strong>

</summary>

[포트원 인증 결제의 이해 - 쇼핑몰 멀티PG 연동하기](https://www.youtube.com/watch?v=DhcQFLYV9Q8)

</details>

### 1. 포트원 SDK 설치하기 <span id="sdk-installation" />

포트원은 다양한 PG의 결제창을 통일된 방법으로 호출할 수 있도록 자바스크립트 SDK를 제공합니다.
브라우저에서 포트원 SDK를 호출하여 결제를 진행하게 됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제창 연동을 진행할 주문 페이지에 아래 JS 라이브러리를 추가합니다.

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

[포트원 라이브러리 추가하기](https://www.youtube.com/watch?v=FLyOmbtnr48)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

### 2. 결제 요청하기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

#### SDK 초기화하기 <span id="sdk-initialization" />

포트원 SDK를 사용하여 결제창을 호출하려면, 먼저 포트원 SDK를 초기화하여야 합니다.

먼저, 관리자 콘솔의 결제 연동 페이지에서 **고객사 식별코드**를 확인해 주세요.

그리고 결제창을 호출할 페이지에서 다음과 같이 포트원 SDK를 초기화합니다.

<div class="hint" data-style="warning">

아래 초기화 함수를 2회 이상 중복 호출하지 않도록 주의해 주세요.

</div>

```ts
IMP.init("고객사 식별코드"); // 예: 'imp00000000'
```

##### 하위 상점에서 SDK 초기화하기

하위 상점에서 SDK를 초기화하려면, `IMP.init()` 함수 대신 `IMP.agency()` 함수를 사용합니다.

```ts
IMP.agency("고객사 식별코드", "티어코드"); // 예: 'imp00000000', '123'
```

#### 결제창 불러오기

SDK의 `IMP.request_pay()` 함수를 호출하여 결제 수단에 따른 결제창을 열 수 있습니다.

아래와 같이 [결제 요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq)를 `request_pay()` 함수의
첫 인자로 설정하여 호출합니다.

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: `payment-${crypto.randomUUID()}`, // 주문 고유 번호
    name: "노르웨이 회전 의자",
    amount: 64900,
    buyer_email: "gildong@gmail.com",
    buyer_name: "홍길동",
    buyer_tel: "010-4242-4242",
    buyer_addr: "서울특별시 강남구 신사동",
    buyer_postcode: "01181",
  },
  function (response) {
    // 결제 종료 시 호출되는 콜백 함수
    // response.imp_uid 값으로 결제 단건조회 API를 호출하여 결제 결과를 확인하고,
    // 결제 결과를 처리하는 로직을 작성합니다.
  },
);
```

[결제하기 버튼 생성 및 결제창 호출](https://www.youtube.com/watch?v=Gq7r5AUoMKs)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

SDK의 `PortOne.requestPayment()` 함수를 호출하여 결제 수단에 따른 결제창을 열 수 있습니다.

먼저, 관리자 콘솔의 결제 연동 페이지에서 **Store ID**와 사용할 채널의 **채널 키**를 확인해 주세요.

그리고 아래와 같이 [결제 요청 파라미터](https://developers.portone.io/sdk/ko/v2-sdk/payment-request)를
`requestPayment()` 함수의 첫 인자로 설정하여 호출합니다.

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

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<div class="hint" data-style="info">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

**주문 고유 번호(`merchant_uid`) 관련 유의사항**

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

**주문 고유 번호(`paymentId`) 관련 유의사항**

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

- 주문 고유 번호는 개별 결제 요청을 구분하기 위해 사용되는 문자열입니다.

- 따라서 주문 고유 번호는 결제 요청 시 항상 **고유한 값**으로 채번되어야 하며,
  결제 완료 이후 결제 기록 조회나 위변조 대사 작업 시 사용되기 때문에
  고객사 **DB 상에 별도로 저장**해야 합니다.

</div>

### 3. 결제 결과 처리하기 <span id="handle-result" />

결제창이 활성화되는 방식에 따라 결제 결과를 획득하는 방법이 상이합니다.

일반적으로 PC 환경에서는 iframe 또는 팝업 방식으로 페이지 이동 없이 결제창이 활성화되며,
따라서 SDK의 반환값을 통해서 결제 결과를 받아 볼 수 있습니다.
반면, 모바일 환경에서는 일반적으로 새로운 페이지로 리다이렉트되는 방식으로 결제창이 활성화되고,
SDK의 반환값 대신 URL의 [쿼리 문자열](http://en.wikipedia.org/wiki/Query_string) 형태로
결제 결과를 받아볼 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

결제창이 활성화되는 방식은 `windowType` 파라미터를 통해 명시적으로 설정할 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

#### SDK 반환값으로 처리하기 <span id="handle-callback" />

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

**`request_pay()`** 함수의 두 번째 인자인 **callback** 함수를 통해 결제 결과를 확인할 수 있습니다.

```ts
IMP.request_pay(
  {
    /* 파라미터 생략 */
  },
  async (response) => {
    if (response.error_code != null) {
      return alert(`결제에 실패하였습니다. 에러 내용: ${response.error_msg}`);
    }

    // 고객사 서버에서 /payment/complete 엔드포인트를 구현해야 합니다.
    // (다음 목차에서 설명합니다)
    const notified = await fetch(`${SERVER_BASE_URL}/payment/complete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // imp_uid와 merchant_uid, 주문 정보를 서버에 전달합니다
      body: JSON.stringify({
        imp_uid: response.imp_uid,
        merchant_uid: response.merchant_uid,
        // 주문 정보...
      }),
    });
  },
);
```

결제가 완료되면 반환되는 응답 객체([response](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme))의
에러 여부에 따라 처리 로직을 콜백 함수에 작성합니다.
요청이 성공했을 경우에 결제번호(`imp_uid`)와 주문번호(`merchant_uid`)를
서버에 전달하는 로직을 위와 같이 작성합니다.

<div class="hint" data-style="danger">

최종 결제 결과 처리는 반드시 [웹훅](https://developers.portone.io/opi/ko/integration/webhook/readme-v1)을 이용하여
안정적으로 처리해 주셔야 합니다.

웹훅 연동을 생략하시는 경우 결제 결과를 정상적으로 수신받지 못하는 상황이 발생합니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

`PortOne.requestPayment()` 함수의 반환값을 통해 결제 요청의 결과를 확인할 수 있습니다.

`code`가 있으면 결제 과정에서 오류가 발생한 것이므로 적절히 처리하여야 합니다.

결제가 성공한 경우 `paymentId`를 서버에 전달하여 서버 측에서 결제 완료 처리를 진행하도록 합니다.
(가상 계좌 결제의 경우 결제가 아직 완료되지 않은 상태일 수 있습니다)

```ts
async function requestPayment() {
  const response = await PortOne.requestPayment({
    /* 파라미터 생략 */
  });

  if (response.code !== undefined) {
    // 오류 발생
    return alert(response.message);
  }

  // 고객사 서버에서 /payment/complete 엔드포인트를 구현해야 합니다.
  // (다음 목차에서 설명합니다)
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

|필드명     |설명      |비고        |
|-----------|----------|------------|
|`paymentId`|결제 건 ID|공통        |
|`code`     |오류 코드 |실패 시 포함|
|`message`  |오류 문구 |실패 시 포함|

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

#### URL 쿼리 문자열로 처리하기 <span id="handle-redirect" />

모바일 환경에서의 결제는 대부분 리다이렉트 방식으로 이루어집니다.
리다이렉트 방식에서는 브라우저가 결제창으로 리다이렉트되었다가,
결제창에서의 작업이 끝나면 지정한
<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->`m_redirect_url`<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END --><!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->`redirectUrl`<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->로
다시 리다이렉트됩니다.
이 경우에는 함수 호출 결과를 이용할 수 없고,
결제 성공 여부 등은 [쿼리 문자열](http://en.wikipedia.org/wiki/Query_string)로 전달받게 됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts
IMP.request_pay({
  /* 기타 파라미터 생략 */
  m_redirect_url: `${BASE_URL}/payment-redirect`,
}); // 리다이렉트 방식의 경우 콜백은 실행되지 않습니다.
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

```ts
PortOne.requestPayment({
  /* 기타 파라미터 생략 */
  redirectUrl: `${BASE_URL}/payment-redirect`,
});
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

쿼리 문자열로 전달되는 내용은 다음과 같습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

|키            |설명                 |비고        |
|--------------|---------------------|------------|
|`imp_uid`     |포트원 결제 ID       |공통        |
|`merchant_uid`|고객사 주문 고유 번호|공통        |
|`error_code`  |오류 코드            |실패 시 포함|
|`error_msg`   |오류 문구            |실패 시 포함|

예를 들어 `merchant_uid`가 `payment-39ecfa97`, `m_redirect_url`이 `https://example.com/payment-redirect`인 경우,
결제 성공 시에 `https://example.com/payment-redirect?merchant_uid=payment-39ecfa97`로 리다이렉트됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

|키          |설명      |비고        |
|------------|----------|------------|
|`payment_id`|결제 건 ID|공통        |
|`code`      |오류 코드 |실패 시 포함|
|`message`   |오류 문구 |실패 시 포함|

예를 들어 `paymentId`가 `payment-39ecfa97`, `redirectUrl`이 `https://example.com/payment-redirect`인 경우,
결제 성공 시에 `https://example.com/payment-redirect?payment_id=payment-39ecfa97`로 리다이렉트됩니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 4. 결제 완료 처리하기 <span id="complete" />

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

`imp_uid`와 `merchant_uid`를 서버에 전달하면, 서버는 포트원의 [결제 조회 API](https://developers.portone.io/api/rest-v1/payment#get%20%2Fpayments%2F%7Bimp_uid%7D)를
호출하여 해당 결제 건의 상태를 확인하고 결제 완료 처리를 진행하여야 합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

`paymentId`를 서버에 전달하면, 서버는 포트원의 [결제 조회 API](https://developers.portone.io/api/rest-v2/payment#get%20%2Fpayments%2F%7BpaymentId%7D)를
호출하여 해당 결제 건의 상태를 확인하고 결제 완료 처리를 진행하여야 합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<div class="hint" data-style="info">

**결제 검증 필수**

인증 결제의 흐름상 결제 금액 등 정보가 고객의 브라우저 측에서 처리되므로,
의도한 결제 내용이 맞는지 서버 측에서 꼭 확인하여야 위변조를 막을 수 있습니다.

</div>

예시로, 위에서 사용했던 `/payment/complete` 엔드포인트를 다음과 같이 구현할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts title="Express"
// JSON 요청을 처리하기 위해 body-parser 미들웨어 세팅
app.use(bodyParser.json());

// POST 요청을 받는 /payments/complete
app.post("/payment/complete", async (req, res) => {
  try {
    // 요청의 body로 imp_uid와 merchant_uid가 전달되기를 기대합니다.
    const { imp_uid, merchant_uid } = req.body;

    // 1. 포트원 API 엑세스 토큰 발급
    const tokenResponse = await fetch("https://api.iamport.kr/users/getToken", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imp_key: "imp_apikey", // REST API 키
        imp_secret: "ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW", // REST API Secret
      }),
    });
    if (!tokenResponse.ok)
      throw new Error(`tokenResponse: ${await tokenResponse.json()}`);
    const { response } = await tokenResponse.json();
    const { access_token } = response;

    // 2. 포트원 결제내역 단건조회 API 호출
    const paymentResponse = await fetch(
      `https://api.iamport.kr/payments/${imp_uid}`,
      { headers: { Authorization: access_token } },
    );
    if (!paymentResponse.ok)
      throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
    const payment = await paymentResponse.json();

    // 3. 고객사 내부 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
    const order = await OrderService.findById(merchant_uid);
    if (order.amount === payment.amount) {
      switch (payment.status) {
        case "ready": {
          // 가상 계좌가 발급된 상태입니다.
          // 계좌 정보를 이용해 원하는 로직을 구성하세요.
          break;
        }
        case "paid": {
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

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[PORTONE\_API\_SECRET](https://developers.portone.io/opi/ko/integration/ready/readme?v=v2#4-2-v2-api-secret-%EB%B0%9C%EA%B8%89%ED%95%98%EA%B8%B0)
은 V2 전용 시크릿으로, 포트원 콘솔 내 결제연동 탭에서 발급받을 수 있습니다.

```ts title="Express"
// JSON 요청을 처리하기 위해 body-parser 미들웨어 세팅
app.use(bodyParser.json());

// POST 요청을 받는 /payments/complete
app.post("/payment/complete", async (req, res) => {
  try {
    // 요청의 body로 paymentId가 전달되기를 기대합니다.
    const { paymentId, orderId } = req.body;

    // 1. 포트원 결제내역 단건조회 API 호출
    const paymentResponse = await fetch(
      `https://api.portone.io/payments/${paymentId}`,
      { headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` } },
    );
    if (!paymentResponse.ok)
      throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
    const payment = await paymentResponse.json();

    // 2. 고객사 내부 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
    const order = await OrderService.findById(orderId);
    if (order.amount === payment.amount.total) {
      switch (payment.status) {
        case "VIRTUAL_ACCOUNT_ISSUED": {
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

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->
