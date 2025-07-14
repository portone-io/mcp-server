---
title: 결제취소(환불) 연동하기
description: 포트원 V2 결제취소 API를 이용한 결제취소 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/cancel/v1/basic
---

## 결제 취소 정책

<div class="hint" data-style="warning">

**중요: 결제와 취소는 반드시 포트원 대시보드나 API를 통해서만 진행하세요**

PG사를 통해 직접 취소할 경우 포트원과 결제 상태가 동기화되지 않아
데이터 불일치 문제가 발생할 수 있습니다.

</div>

### 가상계좌 환불

<div class="hint" data-style="warning">

**가상계좌 환불을 위해서는 PG사 가상계좌 특약서비스에 가입되어 있어야 합니다.**

신용카드와는 달리 가상계좌의 경우 결제/환불에 대한 수수료는 환불대상에서 제외됩니다. 예를 들어 10,000원 결제건에 대해서 고객사는:

- 결제 시: 9,700원(10,000원 - 가상계좌 발행 수수료 300원)을 PG사로부터 정산받습니다.
- 환불 시: 10,300원(환불되어야할 10,000원 + 환불 계좌로의 송금 수수료 300원)을 PG사로 지불합니다.

PG사는 이런 과정에서 발생할 수 있는 혼란을 미연에 방지하고자 **가상계좌 특약서비스에 가입한 고객사에 한해서만 가상계좌 환불을 제공**하고 있습니다.

</div>

- **필수 정보**: 환불 계좌 정보 (`refundAccount.bank`, `refundAccount.number`, `refundAccount.holderName`)
  - 가상계좌는 단방향 결제수단이므로 환불 계좌 지정이 필수입니다
  - 스마트로 가상계좌는 `refundAccount.holderPhoneNumber`도 필수입니다

- **처리 시간**: 영업일 기준 1\~2일

- **취소 기한**: 제한 없음

- **수수료**: 건당 300원 (결제 수수료와 별도)

### 휴대폰 소액결제

- **취소 기한**: 결제월과 취소월이 동일한 경우에만 가능

### 카드

- **취소 기한**: 통상 1년 (카드사별 상이)

### 카카오페이

- **취소 기한**: 카드 1년 이내 / 머니 5년 이내

### 네이버페이

- **취소 기한**: 결제일로부터 1095일 이내

### 페이팔

- **취소 기한**: 180일 이내 (판매자 동의 필요)

<div class="hint" data-style="info">

결제 수단별 자세한 취소 정책은 [포트원 헬프센터](https://help.portone.io/content/cancel-deadline-by-paymethod)를 참고하세요.

</div>

## 결제 취소 API 호출

자세한 설명은 [결제 취소 API](https://developers.portone.io/api/rest-v2/payment?v=v2#post%20%2Fpayments%2F%7BpaymentId%7D%2Fcancel) 문서를 참고하세요.

### 전액 취소

<div class="tabs-container">

<div class="tabs-content" data-title="cURL">

```bash
curl -X POST 'https://api.portone.io/payments/{paymentId}/cancel' \
  -H 'Authorization: PortOne {API_SECRET}' \
  -H 'Content-Type: application/json' \
  -d '{"reason":"고객 요청"}'
```

</div>

<div class="tabs-content" data-title="JavaScript (Server SDK)">

```ts
import { PaymentClient } from "@portone/server-sdk";

const paymentClient = PaymentClient({
  secret: "your-api-secret",
});

// ... 생략 ...

try {
  const response = await paymentClient.cancelPayment({
    paymentId: "payment-id",
    reason: "고객 요청",
  });
  console.log(response);
} catch (error) {
  console.error(error);
}
```

</div>

</div>

#### 주요 파라미터

- paymentId: string

  **결제 건 아이디**

- reason: string

  **취소 사유**

### 부분 취소

<div class="tabs-container">

<div class="tabs-content" data-title="cURL">

```bash
curl -X POST 'https://api.portone.io/payments/{paymentId}/cancel' \
  -H 'Authorization: PortOne {API_SECRET}' \
  -H 'Content-Type: application/json' \
  -d '{"reason":"고객 요청","currentCancellableAmount":10000,"amount":3000}'
```

</div>

<div class="tabs-content" data-title="JavaScript (Server SDK)">

```ts
import { PaymentClient } from "@portone/server-sdk";

const paymentClient = new PaymentClient({
  secret: "your-api-secret",
});

// ... 생략 ...

try {
  const response = await paymentClient.cancelPayment({
    paymentId: "payment-id",
    reason: "고객 요청",
    currentCancellableAmount: 10000, // 검증용 잔액 값
    amount: 3000, // 취소할 금액
  });
  console.log(response);
} catch (error) {
  console.error(error);
}
```

</div>

</div>

#### 주요 파라미터

- paymentId: string

  **결제 건 아이디**

- reason: string

  **취소 사유**

- amount?: integer (64 bit)

  **취소할 금액**

  취소할 금액을 지정합니다. 지정하지 않으면 전액 취소가 진행됩니다.

- currentCancellableAmount?: integer (64 bit)

  **결제 건의 취소 가능 잔액**

  본 취소 요청 이전의 취소 가능 잔액으로써, 값을 입력하면 잔액이 일치하는 경우에만 취소가 진행됩니다. 값을 입력하지 않으면 별도의 검증 처리를 수행하지 않습니다.

### 가상계좌 환불

<div class="tabs-container">

<div class="tabs-content" data-title="cURL">

```bash
curl -X POST 'https://api.portone.io/payments/{paymentId}/cancel' \
  -H 'Authorization: PortOne {API_SECRET}' \
  -H 'Content-Type: application/json' \
  -d '{
    "reason": "고객 요청",
    "refundAccount": {
      "bank": "BANK_OF_KOREA",
      "number": "1234567890",
      "holderName": "홍길동",
      "holderPhoneNumber": "01012345678"
    }
  }'
```

</div>

<div class="tabs-content" data-title="JavaScript (Server SDK)">

```ts
import { PaymentClient } from "@portone/server-sdk";

const paymentClient = PaymentClient({
  secret: "your-api-secret",
});

// ... 생략 ...

try {
  const response = await paymentClient.cancelPayment({
    paymentId: "payment-id",
    reason: "고객 요청",
    refundAccount: {
      bank: "BANK_OF_KOREA",
      number: "1234567890",
      holderName: "홍길동",
      holderPhoneNumber: "01012345678", // 스마트로 가상계좌 취소 시 필수
    },
  });
  console.log(response);
} catch (error) {
  console.error(error);
}
```

</div>

</div>

#### 주요 파라미터

- paymentId: string

  **결제 건 아이디**

- reason: string

  **취소 사유**

- refundAccount?: object

  **환불 계좌 정보**

  - bank: string

    **계좌 은행**

    [Bank](https://developers.portone.io/api/rest-v2/type-def#Bank) 타입 참고

  - number: string

    **계좌 번호**

  - holderName: string

    **예금주**

  - holderPhoneNumber?: string

    **예금주 연락처**

    스마트로 가상계좌 결제인 경우에 필요합니다.

### 프로모션 적용 주문건 취소

프로모션이 적용된 결제 건의 취소는 [프로모션 결제 취소하기](https://developers.portone.io/opi/ko/extra/promotion/refund) 문서를 참고하세요.

## 결제 취소 API 결과 처리

자세한 설명은 [결제 취소 API](https://developers.portone.io/api/rest-v2/payment?v=v2#post%20%2Fpayments%2F%7BpaymentId%7D%2Fcancel) 문서를 참고하세요.

```ts
try {
  const response = await paymentClient.cancelPayment({
    paymentId: "payment-id",
    reason: "고객 요청",
    // ... 생략 ...
  });

  if (isUnrecognizedPaymentCancellation(response.cancellation)) {
    console.error(`취소 실패: ${response.cancellation.status}`);
  } else if (response.cancellation.status === "SUCCEEDED") {
    console.log("취소 완료");
  } else if (response.cancellation.status === "FAILED") {
    console.error("취소 실패");
  } else if (response.cancellation.status === "REQUESTED") {
    console.log("취소 요청 완료");
  }
} catch (error) {
  console.error("취소 실패:", error);
}
```

## 웹훅을 통한 결제 취소 결과 수신

관리자콘솔을 통한 취소를 포함하여 비동기로 처리되는 취소 요청이나 취소 상태 변경을 실시간으로 알림받으려면 웹훅을 설정해야 합니다.

웹훅 연동 방법은 [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2) 문서를 참고하세요.

### 결제 취소 관련 웹훅 이벤트

- `Transaction.CancelPending`: (결제 취소가 비동기로 수행되는 경우) **결제 취소를 요청**했을 때
- `Transaction.PartialCancelled`: **결제가 부분 취소**되었을 때
- `Transaction.Cancelled`: **결제가 완전 취소**되었을 때

### 웹훅 처리 예제

```ts
import * as PortOne from "@portone/server-sdk";
import bodyParser from "body-parser";
import express from "express";

const app = express();

// 웹훅 검증 시 텍스트로 된 body가 필요합니다.
app.use(
  "/webhook",
  bodyParser.text({
    type: "application/json",
  }),
);

app.post("/webhook", async (req, res) => {
  try {
    // 웹훅 검증
    const webhook = await PortOne.Webhook.verify(
      process.env.PORTONE_WEBHOOK_SECRET,
      req.body,
      req.headers,
    );

    // 취소 이벤트 처리
    if (
      webhook.type === "Transaction.Cancelled" ||
      webhook.type === "Transaction.PartialCancelled"
    ) {
      const { paymentId, cancellationId } = webhook.data;

      console.log(
        `${paymentId} 결제가 취소되었습니다. 취소 ID: ${cancellationId}`,
      );
    }

    res.status(200).send("OK");
  } catch (error) {
    if (error instanceof PortOne.Webhook.WebhookVerificationError) {
      console.error("웹훅 검증 실패:", error.message);
    } else {
      console.error("웹훅 처리 중 오류 발생:", error);
    }
    res.status(400).send("Bad Request");
  }
});
```

## 관련 문서

- [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2): 결제 취소 알림을 받기 위한 웹훅 설정
- [결제 연동 시작하기](https://developers.portone.io/opi/ko/integration/start/v2/readme): 기본적인 결제 연동 방법
- [프로모션 결제 취소하기](https://developers.portone.io/opi/ko/extra/promotion/refund): 프로모션이 적용된 결제의 취소 방법
- [관리자 콘솔 가이드](https://help.portone.io/content/cancel-guide-using-admin-console): 관리자콘솔을 통해 결제 취소하는 방법
