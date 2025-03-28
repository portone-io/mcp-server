---
title: 포트원 V2 JavaScript, TypeScript 서버 SDK
description: JavaScript, TypeScript를 위한 포트원 V2 서버 SDK 사용 방법을 안내합니다.
targetVersions:
- v2
---

# PortOne Server SDK for JavaScript

JavaScript 서버 환경에서 포트원 V2 결제 시스템에 연동하기 위한 SDK입니다.

## 의존성

Web Crypto API와 Fetch API를 사용합니다.

- Node.js의 경우 v20 이상이 필요합니다.
- 기타 위 표준 API를 지원하는 모든 자바스크립트 런타임에서 사용할 수 있습니다.

## 설치

![NPM Version](https://img.shields.io/npm/v/%40portone%2Fserver-sdk)
![JSR Version](https://img.shields.io/jsr/v/%40portone/server-sdk)

npm 혹은 jsr을 통해 설치합니다.

```shell
npm install --save @portone/server-sdk
```

## 사용법

### 포트원 REST API

먼저 [포트원 개발자콘솔](https://admin.portone.io/integration-v2/manage/api-keys?version=v2)에서 API Secret을 발급받습니다.

발급받은 API Secret을 사용해 필요한 API에 맞는 Client를 생성합니다.

```js
import { PortOneClient, PaymentClient } from "@portone/server-sdk";

// 결제 관련 API를 사용하는 경우
const paymentClient = PaymentClient({ secret: PORTONE_API_SECRET });
paymentClient.getPayment(/* ... */);

// 전체 API를 사용하는 경우
const portoneClient = PortOneClient({ secret: PORTONE_API_SECRET });
// 상위 Client를 생성한 경우 하위 Client에 접근 가능합니다.
portoneClient.payment.getPayment(/* ... */);
```

Client의 각 함수는 함수마다 고유한 타입의 Error을 발생시킬 수 있습니다.
Error의 data 필드는 서버로부터 받은 오류 응답값을 나타내며, data.type 필드를 통해 오류의 상세 원인을 파악하실 수 있습니다.

```js
import { GetPaymentError } from "@portone/server-sdk/payment";

try {
    const payment = await paymentClient.getPayment({ paymentId: 'test' });
} catch (e) {
    if (e instanceof GetPaymentError) {
        switch (e.data.type) {
            case "FORBIDDEN":
                // 요청이 거절된 경우
            case "INVALID_REQUEST":
                // 입력 정보가 유효하지 않은 경우
        }
    }
}
```

포트원 REST API로부터 현재 SDK 버전에서 지원하지 않는 응답을 받을 수 있습니다.
이 경우 `isUnrecognized` 편의 함수를 통해 해당 응답을 검출할 수 있습니다.

```js
import { isUnrecognizedPayment } from "@portone/server-sdk/payment";

const payment = await paymentClient.getPayment({ paymentId: 'test' });
console.log(payment.amount.total); // Error: Property 'amount' does not exist on type 'Payment'.
if (!isUnrecognizedPayment(payment)) {
    console.log(payment.amount.total) // Ok
}
```

### 웹훅 검증

먼저 [포트원 개발자콘솔](https://admin.portone.io/integration-v2/manage/webhook?version=V2)에서 웹훅 시크릿을 발급받습니다.

Webhook.verify 함수로 웹훅 내용을 검증할 수 있습니다.

**주의: 웹훅 내용은 서버에서 전달한 body를 JSON 형태로 파싱하지 않고, 문자열 형태로 그대로 입력합니다.**

```js
import { Webhook } from "@portone/server-sdk";

const payload = `{"type":"BillingKey.Issued","timestamp":"2024-04-25T10:00:00.000Z","data":{"storeId":"store-61e0db3d-b967-47db-8b50-96002da90d55","billingKey":"billing-key-75ae3cab-6afe-422d-bf34-3a7b1762451d"}}`;
const headers = {
    "webhook-id": "test-id",
    "webhook-signature": `v1,aW52YWxpZCBzaWduYXR1cmU=`,
    "webhook-timestamp": "100",
};
await Webhook.verify(PORTONE_WEBHOOK_SECRET, payload, headers);
```

Webhook.verify 함수는 body를 object 형태로 변환하여 반환합니다.
웹훅 또한 현재 SDK 버전에서 지원하지 않은 응답을 받을 수 있으며,
이 경우 `isUnrecognizedWebhook` 편의 함수를 통해 해당 응답을 검출할 수 있습니다.

```js
const webhook = await Webhook.verify(/* ... */);

console.log(webhook.data) // Error: Property 'data' does not exist on type 'Webhook'.
if (!Webhook.isUnrecognizedWebhook(webhook)) {
    console.log(payment.data) // Ok
}
```

## 버전

[유의적 버전 2.0.0](https://semver.org/spec/v2.0.0.html)을 사용합니다.

현재 주(主) 버전은 0입니다. 이는 라이브러리 공개 API가 아직 고정되지 않았음을
의미합니다. 주 버전이 1이 되기 전에도 릴리스 버전(프리릴리스가 아닌 버전)의
SDK를 프로덕션에서 사용할 수 있으며, 포트원은 관련 기술 지원을 제공합니다.

## API 안정성

포트원 V2는 REST API의 하위 호환을 보장합니다. 본 SDK는 REST API에 의존하므로,
한 버전의 SDK로 연동한 뒤에는 해당 버전에 특별한 버그가 없는 한 연동이 깨지지
않습니다.

SDK의 버전을 업데이트한 경우 코드 호환성이 깨질 수 있습니다. 이 경우 코드 작업이
필요합니다.

## 기술 지원

- tech.support@portone.io

---

Packages under _portone-io/server-sdk-js_ are primarily distributed under the
terms of both the [Apache License (Version 2.0)] and the [MIT license]. See
[COPYRIGHT] for details.

[MIT license]: LICENSE-MIT
[Apache License (Version 2.0)]: LICENSE-APACHE
[COPYRIGHT]: COPYRIGHT
