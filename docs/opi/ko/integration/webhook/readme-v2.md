---
title: 웹훅 연동하기
description: 웹훅 알림을 받아 결제 정보를 동기화할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/webhook/readme-v1
---

(관련 이미지 첨부)

## 웹훅(Webhook) 이란?

특정 이벤트가 발생하였을 때 타 서비스나 응용프로그램으로 알림을 보내는 기능입니다.
Webhook 프로바이더는 해당 이벤트가 발행하면 `HTTP POST` 요청을 생성하여 callback URL(endpoint)로 이벤트 정보을 보냅니다.
주기적으로 데이터를 폴링(polling)하지 않고 원하는 이벤트에 대한 정보만 수신할 수 있어서 webhook은 리소스나 통신 측면에서 훨씬 더 효율적입니다.
Webhook을 활용하면 커스텀 기능이나 다른 애플리케이션과 연동하여 기능을 확장할 수 있습니다.

포트원에서는 결제 완료 등 이벤트가 발생했을 때 고객사의 서버에 전송하고 있습니다.
이벤트가 발생하면 포트원 콘솔에 등록된 웹훅 URL로 HTTP POST 요청을 보냅니다. 고객사에서는 이 요청을 받아 최신 결제 정보로 동기화하도록 구현해야 합니다.

## 웹훅 연동이 꼭 필요한가요?

안정적인 결제 처리를 위해 웹훅 연동을 강력히 권장합니다.
인터넷 연결 끊김, 브라우저 자동 새로고침 등의 이유로 클라이언트에서 결제 완료에 대한 응답을 받지 못하는 경우가 간헐적으로 발생합니다.
이런 경우 연동한 웹훅을 통해 누락 없이 결제 정보를 동기화할 수 있습니다.

## 웹훅 버전에 따른 스키마 안내

웹훅 형식에 하위 호환이 보장되지 않는 변경이 있을 경우 새로운 웹훅 버전이 추가됩니다. 어떤 버전의 웹훅을 받을지 콘솔에서 설정할 수 있습니다.

현재 웹훅 버전은 두 가지입니다.

- `2024-04-25` (최신)
  - 본문 형식이 Standard Webhooks를 따르도록 변경 (Standard Webhooks 기반 메시지 검증의 경우 기존 버전에서도 사용 가능)
  - 메시지의 확장성을 명시

- `2024-01-01`
  - 최초 웹훅 버전

### `2024-04-25` (최신) 사용 시

- `type`: 웹훅을 트리거한 이벤트의 타입입니다. 가능한 `type`의 종류는 아래와 같습니다.
  - **결제 관련**
    - `Transaction.Ready`: **결제창이 열렸을 때**
    - `Transaction.Paid`: **결제(예약 결제 포함)가 승인**되었을 때 (모든 결제 수단)
    - `Transaction.VirtualAccountIssued`: **가상계좌가 발급**되었을 때
    - `Transaction.PartialCancelled`: **결제가 부분 취소**되었을 때
    - `Transaction.Cancelled`: **결제가 완전 취소**되었을 때
    - `Transaction.Failed`: **결제(예약 결제 포함)가 실패**했을 때
    - `Transaction.PayPending`: **결제 승인 대기** 상태가 되었을 때 (해외 결제시 발생 가능)
    - `Transaction.CancelPending`: (결제 취소가 비동기로 수행되는 경우) **결제 취소를 요청**했을 때
    - `Transaction.DisputeCreated`: **분쟁이 발생**되었을 때
    - `Transaction.DisputeResolved`: **분쟁이 해소**되었을 때

  - **빌링키 발급 관련**
    - `BillingKey.Ready`: **빌링키 발급창이 열렸을 때**
    - `BillingKey.Issued`: **빌링키가 발급**되었을 때
    - `BillingKey.Failed`: **빌링키 발급이 실패**했을 때
    - `BillingKey.Deleted`: **빌링키가 삭제**되었을 때
    - `BillingKey.Updated`: **빌링키가 업데이트**되었을 때

- `timestamp`: 해당 웹훅을 트리거한 이벤트의 발생 시각(RFC 3339 형식)입니다.
  고객사 서버가 웹훅을 수신하는 데 실패하여 재시도가 일어나도 이 값은 동일하게 유지됩니다.

- `data`: 웹훅을 트리거한 이벤트의 실제 세부 내용입니다. `type` 에 따라 해당 필드의 스키마가 달라질 수 있으며, `type` 별 상세 스키마는 아래와 같습니다.
  - **공통**
    - `storeId`: 웹훅을 트리거한 상점의 아이디입니다.

  - **결제 관련**
    - `paymentId`: 고객사에서 채번한 결제 건의 고유 주문 번호입니다.
    - `transactionId`: 포트원에서 채번한 고유 거래 번호입니다. 한 결제 건에 여러 시도가 있을 경우 transactionId가 달라질 수 있습니다.
    - `cancellationId`: (optional) 포트원에서 채번한 결제건의 취소 고유 번호입니다. `type`이 `Transaction.PartialCancelled`, `Transaction.Cancelled`, `Transaction.CancelPending` 일 때 존재합니다.

  - **빌링키 발급 관련**
    - `billingKey`: 포트원에서 채번한 빌링키입니다.

<div class="hint" data-style="info">

**웹훅 메시지에는 별도 안내 없이 `type` 값이나 새로운 필드가 추가될 수 있습니다.**

- 알지 못하는 `type`을 가진 메시지의 경우 에러를 발생시키지 말고 메시지 전체를 무시해 주세요.
- 알지 못하는 필드가 있는 경우 해당 필드를 무시해 주세요.

</div>

**웹훅 본문 예시 1**: `type`이 `Transaction.Cancelled` 일 때

```json
{
  "type": "Transaction.Cancelled",
  "timestamp": "2024-04-25T10:00:00.000Z",
  "data": {
    "paymentId": "example-payment-id",
    "storeId": "store-ae356798-3d20-4969-b739-14c6b0e1a667",
    "transactionId": "55451513-9763-4a7a-bb43-78a4c65be843",
    "cancellationId": "0cdd91e9-4e7c-44a3-a72e-1a6511826c2b"
  }
}
```

**웹훅 본문 예시 2**: `type`이 `BillingKey.Issued` 일 때

```json
{
  "type": "BillingKey.Issued",
  "timestamp": "2024-04-25T10:00:00.000Z",
  "data": {
    "storeId": "store-61e0db3d-b967-47db-8b50-96002da90d55",
    "billingKey": "billing-key-75ae3cab-6afe-422d-bf34-3a7b1762451d"
  }
}
```

### `2024-01-01` 사용 시

- `payment_id`: 고객사에서 채번한 결제 건의 고유 주문 번호입니다.

- `tx_id`: 포트원에서 채번한 고유 거래 번호입니다. 한 결제 건에 여러 시도가 있을 경우 transactionId가 달라질 수 있습니다.

- `status`: 결제건의 상태입니다. 가능한 `status`의 종류는 아래와 같습니다.
  - `Ready`: **결제창이 열렸을 때**
  - `Paid`: **결제(예약 결제 포함)가 승인**되었을 때 (모든 결제 수단, 가상계좌의 경우 계좌에 입금이 완료되는 순간)
  - `VirtualAccountIssued`: **가상계좌가 발급**되었을 때
  - `PartialCancelled`: **결제가 부분 취소**되었을 때
  - `Cancelled`: **결제가 완전 취소**되었을 때
  - `Failed`: **결제(예약 결제 포함)가 실패**했을 때
  - `PayPending`: **결제 승인 대기** 상태가 되었을 때 (해외 결제시 발생 가능)
  - `CancelPending`: (결제 취소가 비동기로 수행되는 경우) **결제 취소를 요청**했을 때

웹훅 payload 예시:

```json
{
  "payment_id": "example-payment-id",
  "tx_id": "55451513-9763-4a7a-bb43-78a4c65be843",
  "status": "Ready"
}
```

## 웹훅 URL 설정

웹훅 URL을 설정하면 포트원에서 이벤트 발생 시 해당 URL로 웹훅을 전송합니다. URL은 관리자 콘솔에서 두 가지 형태로 지원하고 있습니다.
콘솔에서 설정했더라도 결제 시에 `noticeUrls`파라미터로 지정하여 호출하는 경우 해당 URL로 전송됩니다.

### 1. 관리자 콘솔 설정

웹훅을 통해 결제 정보를 통보받을 URL을 설정하는 과정은 다음과 같습니다.

(관련 이미지 첨부)

- 포트원 관리자 콘솔 내 \[결제 연동] → \[연동 관리] → **\[결제알림(Webhook) 관리]** 탭을 선택합니다.

- \[웹훅 버전] 항목에서 **\[결제모듈 V2]** 를 선택합니다.

- \[설정 모드] 항목에서 \[실연동] 또는 \[테스트]를 선택합니다. (연동 환경에 따라 웹훅 URL을 각각 다르게 설정할 수 있습니다.)

- **Endpoint URL**에 웹훅 데이터를 수신할 URL을 입력합니다.

- **Content Type**을 설정합니다. `Content Type`은 `application/json` 또는
  `application/x-www-form-urlencoded` 중 하나로 설정할 수 있습니다.

  > **`2024-04-25` 버전부터는 `application/json` 만 지원합니다.**

- `저장` 버튼을 클릭합니다.

<div class="hint" data-style="info">

`호출 테스트` 버튼을 클릭하면 저장된 URL로 테스트 웹훅이 발송됩니다. 이를 통해 올바른 URL과 Content-Type을 지정했는지 테스트할 수 있습니다.
콘솔 내 화면에서 Endpoint URL 변경 후 저장하지 않은 채 호출테스트를 시도하시면 이전에 저장된 주소로 발송되오니 주의하시길 바랍니다.

</div>

### 2. 결제 파라미터 설정

포트원 SDK의 `PortOne.requestPayment()` 혹은 `PortOne.requestIssueBillingKey()` 함수 파라미터 중
`noticeUrls`를 통해 관리자콘솔에서 설정한 웹훅 수신 URL을 덮어쓸 수 있습니다.

```ts
PortOne.requestPayment({
  /* 객체 생략 */
  noticeUrls: ["https://수신할-웹훅-URL"],
});
```

## 웹훅 메시지 검증하기

웹훅 수신 주소는 공개된 URL이기 때문에, 기본적으로는 수신한 웹훅 메시지의 내용을 신뢰할 수 없습니다.
예를 들어, 결제 완료 알림을 웹훅으로 수신했다고 해서 꼭 결제가 완료된 것이 아닐 수 있습니다.

웹훅 메시지를 처리하는 전략은 두 가지가 있습니다.

- 웹훅 메시지를 신뢰하지 않고, 결제 건의 상태를 포트원 API를 통해 새로 조회하여 이 응답만 신뢰하기
- 웹훅 메시지를 검증하기

두 가지 방법 모두 외부에서 위조한 요청을 신뢰하지 않는다는 점에서는 동일합니다.
여기서는 보다 근본적인 방법인 웹훅 메시지 검증에 대해 설명합니다.

포트원은 [Standard Webhooks](https://www.standardwebhooks.com/)에 따른 메시지 검증을 지원합니다.
또한, JVM 및 JS 환경의 경우 메시지 검증 코드를 서버 SDK를 통해 배포하고 있습니다.

<div class="hint" data-style="info">

IP 필터가 필요하신 고객사의 경우, 아래의 IP를 필터에 추가해 주세요.

- 포트원 V2 웹훅 IP: `52.78.5.241`

포트원의 웹훅 IP가 추가 또는 변경되는 경우 미리 연락처로 메일을 보내 드립니다.
이 경우에 IP 필터를 대응해 주실 수 있어야 시스템 영향 없이 웹훅을 계속 수신하실 수 있습니다.

</div>

### 1. 웹훅 시크릿 발급하기

(관련 이미지 첨부)

- 포트원 관리자 콘솔 내 \[결제 연동] → \[연동 관리] → **\[결제알림(Webhook) 관리]** 탭을 선택합니다.
- \[웹훅 버전] 항목에서 **\[결제모듈 V2]** 를 선택합니다.
- \[설정 모드] 항목에서 \[실연동] 또는 \[테스트]를 선택합니다. (연동 환경에 따라 웹훅 시크릿을 각각 발급할 수 있습니다.)
- 우측 하단의 **\[웹훅 시크릿 발급]** 버튼을 클릭합니다.

### 2. 시크릿을 이용해 signature 검사하기

포트원에서 보내는 웹훅에는 **해당 시크릿을 이용해 생성된 시그니처가 요청 헤더를 통해 전달**됩니다.
포트원에서 제공하는 서버 SDK를 이용하면 고객사 서버에서 웹훅을 수신할 때 시그니처가 유효한지 손쉽게 검증할 수 있습니다.
현재 제공되고 있는 서버 SDK 목록은 아래와 같습니다.

#### JavaScript

![NPM Version](https://img.shields.io/npm/v/%40portone%2Fserver-sdk)

![JSR Version](https://img.shields.io/jsr/v/%40portone/server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/javascript)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/js)

JavaScript 및 TypeScript에서 사용 가능한 JavaScript SDK는 [npm](https://www.npmjs.com/package/@portone/server-sdk)과 [jsr](https://jsr.io/@portone/server-sdk)을 통해 배포되고 있습니다.
`@portone/server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="npm">

```shell
npm install --save @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="yarn">

```shell
yarn add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="pnpm">

```shell
pnpm add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="bun">

```shell
bun add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="deno">

```shell
deno add jsr:@portone/server-sdk
```

</div>

<div class="tabs-content" data-title="ni">

```shell
ni @portone/server-sdk
```

</div>

</div>

Node.js의 경우 v20 이상에서 정상 동작하며, v20 미만 버전은 폴리필이 필요합니다.

<details>

<summary>폴리필 방법</summary>

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js v18 이상 v20 미만">

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
globalThis.crypto = require("node:crypto").webcrypto;
```

```javascript title="ESM"
import { webcrypto } from "node:crypto";
globalThis.crypto = webcrypto;
```

</div>

<div class="tabs-content" data-title="Node.js v18 미만">

[@whatwg-node/fetch](https://www.npmjs.com/package/@whatwg-node/fetch) 패키지를 의존성에 추가해 주세요.

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
const { fetch, crypto } = require("@whatwg-node/fetch");
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

```javascript title="ESM"
import { crypto, fetch } from "@whatwg-node/fetch";
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

</div>

</div>

</details>

#### Python

![PyPI - Version](https://img.shields.io/pypi/v/portone-server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/python)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/py)

Python SDK는 [PyPI](https://pypi.org/project/portone-server-sdk)를 통해 배포되고 있습니다.
`portone-server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="uv">

```shell
uv add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="poetry">

```shell
poetry add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="rye">

```shell
rye add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pipenv">

```shell
pipenv install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Conda">

```shell
conda install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Hatch">

```toml title="pyproject.toml"
[project]
dependencies = [
  "portone-server-sdk~=x.x.x"
]
```

</div>

<div class="tabs-content" data-title="PDM">

```shell
pdm add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pip requirements">

```shell title="requirements.txt"
portone-server-sdk ~= x.x.x
```

</div>

</div>

Python 3.9 이상에서 정상 동작합니다.

#### JVM

[![Maven Central Version](https://img.shields.io/maven-central/v/io.portone/server-sdk)](https://central.sonatype.com/artifact/io.portone/server-sdk)

[![javadoc](https://javadoc.io/badge2/io.portone/server-sdk/javadoc.svg)](https://javadoc.io/doc/io.portone/server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/jvm)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/jvm)

Java, Kotlin, Scala 등에서 사용 가능한 JVM SDK는 [Maven](https://central.sonatype.com/artifact/io.portone/server-sdk)을 통해 배포되고 있습니다.

`io.portone:server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="Apache Maven">

```xml
<dependency>
  <groupId>io.portone</groupId>
  <artifactId>server-sdk</artifactId>
  <version>x.x.x</version>
</dependency>
```

</div>

<div class="tabs-content" data-title="Gradle (Kotlin)">

```kotlin
implementation("io.portone:server-sdk:x.x.x")
```

</div>

<div class="tabs-content" data-title="Gradle (Groovy)">

```groovy
implementation 'io.portone:server-sdk:x.x.x'
```

</div>

<div class="tabs-content" data-title="sbt">

```scala
libraryDependencies += "io.portone" % "server-sdk" % "x.x.x"
```

</div>

</div>

Server SDK 사용을 원치 않으시거나 SDK가 지원되지 않는 언어를 이용중이시라면 메시지 검증 코드를 직접 작성하실 수 있습니다.
포트원의 웹훅 검증 절차는 [Standard Webhooks](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md) 스펙을
준수하고 있으므로, 해당 스펙에서 안내된 대로 검증 코드를 작성하시면 됩니다. 해당 저장소에는 여러 언어로 레퍼런스 구현도 작성되어 있습니다.

### 3. 무중단으로 시크릿 교체하기

시크릿은 항상 기밀성 있게 관리되어야 하지만, 실수로 인해 타인에게 노출될 수 있고 시크릿을 얻은 누군가는 이를 악용할 수 있습니다.
이러한 경우에 대비해 포트원에서는 **고객사의 서비스에 영향을 주지 않고 무중단으로 기존 시크릿을 새 시크릿으로 교체**하는 방법을 가이드하고 있습니다.

- 먼저 웹훅 시크릿을 추가로 하나 더 발급합니다. (웹훅 시크릿은 테스트/실연동 환경별로 각각 동시에 **최대 2개까지** 발급 가능합니다.)

- 고객사 서버 코드에서 사용되고 있던 시크릿을 새로 발급한 시크릿으로 교체합니다.
  (시크릿은 기밀 정보이므로 어플리케이션 내에 하드코딩하지 않고 환경 변수로 관리하시는 것을 권장합니다.)

(관련 이미지 첨부)

- 더 이상 기존 시크릿이 고객사 서버에서 사용되지 않는 것을 확인한 후, 콘솔에서 기존 시크릿을 만료시킵니다.

## 웹훅 요청 처리 코드 예시

다음은 포트원으로부터 보내진 웹훅 요청을 고객사 서버에서 받아 처리하는 예시 코드입니다.
본 코드는 참고용으로 작성된 코드이며, Server SDK를 이용한 signature verify 과정과
포트원 서버에서 결제 정보를 조회하여 검증 및 저장하는 과정을 포함하고 있습니다.

```ts title="Express"
import * as PortOne from "@portone/server-sdk";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const portone = PortOne.PortOneClient(process.env.PORTONE_API_SECRET);

// 웹훅 검증 시 텍스트로 된 body가 필요합니다.
app.use(
  "/portone-webhook",
  bodyParser.text({
    type: "application/json",
  }),
);

// POST 요청을 받는 /portone-webhook
app.post("/portone-webhook", async (req, res, next) => {
  try {
    try {
      // 웹훅 메시지를 검증합니다.
      // 시그니처 불일치 등 검증에 실패할 경우 PortOne.Errors.WebhookVerificationError가 발생합니다.
      const webhook = await PortOne.Webhook.verify(
        process.env.PORTONE_WEBHOOK_SECRET,
        req.body,
        req.headers,
      );
      // 결제 관련 정보일 경우만 처리합니다.
      if ("paymentId" in webhook.data) {
        const { paymentId } = webhook.data;
        // 1. 포트원 결제내역 단건조회 API 호출
        const paymentResponse = await portone.payment.getPayment({ paymentId });

        if (paymentResponse === null) {
          // 웹훅 정보와 일치하는 결제건이 실제로는 존재하지 않는 경우
          return res.status(200).end();
        }

        const { id, status, amount, method } = paymentResponse;
        // 2. 고객사 내부 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
        const order = await OrderService.findById(id);
        if (order.amount === amount.total) {
          switch (status) {
            case "VIRTUAL_ACCOUNT_ISSUED": {
              // 가상 계좌가 발급된 상태입니다.
              // method에 들어 있는 계좌 정보를 이용해 원하는 로직을 구성하세요.
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
      }
    } catch (e) {
      if (e instanceof PortOne.Webhook.WebhookVerificationError)
        // 결제 검증에 실패했습니다.
        return res.status(400).end();
      throw e;
    }
    res.status(200).end();
  } catch (e) {
    next(e);
  }
});
```

<div class="hint" data-style="info">

**웹훅 관련 정보**

Connection Timeout 및 Read Timeout 모두 30초 입니다.

</div>

<div class="hint" data-style="info">

**웹훅 처리 전에 브라우저 결제 완료 처리가 진행되는 경우**

기본적으로 포트원 서버는 웹훅을 호출한 뒤 고객사 응답을 기다리지 않고 브라우저에 302 redirect 응답을 보내기 때문에 결과 도달에 대한 순서를 보장하지 않습니다. 다만 고객사 요청이 있을 경우 webhook 호출 이후에 브라우저에 302 redirect 또는 callback 응답을 보내어 순서를 보장해 드리고 있습니다. 웹훅 우선순위 요청은 <support@portone.io> 로 고객사 식별코드를 기재하여 요청해 주시면 됩니다.

</div>

<div class="hint" data-style="info">

**웹훅 재전송 정책**

네트워크 문제나 고객사 오류 등으로 웹훅이 실패할 경우 최대 5회까지 웹훅을 재전송합니다.

재전송 시간은 exponential backoff를 적용하여 0 → 1 → 4 → 16 → 64 → 256분을 기다립니다. 이에 더하여 무작위로 지연 시간을 변형하는 jittering이 적용됩니다.

</div>
