---
title: 세금계산서 웹훅 가이드
description: 세금계산서 상태 변화 웹훅의 사용 방법과 설정 가이드입니다.
---

## ✔️ 웹훅이란?

<div class="hint" data-style="info">

🔔 **웹훅(Webhook)** 은 서버에서 특정 이벤트가 발생했을 때 설정된 URL로 이벤트와 관련된 데이터를 전송하는 방식을 의미합니다.

</div>

포트원 파트너 정산 내 세금계산서 제품은 세금계산서의 상태가 변경되었을 때 고객사가 사전에 설정한 URL로 즉각적으로 이벤트와 관련된 정보를 전달하여 효율적인 시스템 연동을 지원합니다.

### 웹훅이 필요한 이유

웹훅은 다음과 같은 이유로 시스템 간 효율적인 통합에 필수적입니다.

- **리소스 절약**: 주기적으로 데이터를 폴링(polling)하지 않고 이벤트 발생 시에만 정보를 받아볼 수 있어 리소스와 네트워크 대역폭을 크게 절약합니다.
- **실시간성**: 이벤트 발생 직후 즉시 알림을 받을 수 있어 지연 없이 후속 처리가 가능합니다.
- **확장성**: 여러 시스템이나 서비스를 쉽게 연동할 수 있어 비즈니스 프로세스 자동화와 확장에 용이합니다.

## ✔️ 세금계산서 웹훅 사용 예시

### 사용 시나리오

- 세금계산서가 국세청에 성공적으로 전송 완료된 경우에만 정산금 지급 처리를 수행해야 하는 정책이 존재할 수 있습니다.
  이 때 세금계산서 상태를 확인하기 위해 반복하여 콘솔에 접속하지 않고도 웹훅을 통해 실시간으로 상태 알림을 전달받을 수 있습니다.

- 고객사의 내부 데이터베이스에 세금계산서의 상태를 직접 관리하고자 하는 경우, 상태 변화를 내부 시스템에 실시간으로 반영합니다.

### 동작 흐름

1. 포트원에서 특정 이벤트(예: 세금계산서 국세청 전송 완료)가 발생합니다.
2. 고객사가 사전에 설정한 웹훅 URL로 JSON 데이터를 포함한 HTTP POST 요청이 발송됩니다.
3. 고객사 서버는 웹훅 데이터를 받아 필요한 내부 로직을 처리합니다.

### 예시 코드 (Node.js)

```javascript
const express = require("express");
const app = express();

app.use(express.json());

// 포트원에 사전 설정된 웹훅 URL 예시: https://<고객사 서버 URL>/webhook/taxinvoice
app.post("/webhook/taxinvoice", (req, res) => {
  const event = req.body;

  switch (event.type) {
    case "TaxInvoice.SendingCompleted":
      // 세금계산서 국세청 전송 완료 로직 처리
      handleSendingCompleted(event.data);
      break;
    // 다른 이벤트 처리 로직 추가 가능
  }

  res.status(200).send("Webhook received successfully");
});
```

## ✔️ 웹훅 스키마

웹훅 데이터는 다음 JSON 구조로 전달됩니다.

|필드명   |타입                  |필수|설명                       |예시                         |
|---------|----------------------|----|---------------------------|-----------------------------|
|type     |String                |O   |웹훅 이벤트 유형           |`TaxInvoice.SendingCompleted`|
|timestamp|String (RFC 3339 형식)|O   |이벤트 발생 시각           |`2025-03-20T14:25:10Z`       |
|data     |Object                |O   |세금계산서 관련 상세 데이터|`{...}`                      |

### 실제 웹훅 데이터 예시

```json
{
  "type": "TaxInvoice.SendingCompleted",
  "timestamp": "2025-03-20T14:25:10Z",
  "data": {
    "taxInvoiceId": "txi-test",
    "supplierDocumentKey": "sdk-test",
    "recipientDocumentKey": "rdk-test",
    "status": "SENDING_COMPLETED",
    "supplierBrn": "1234567890",
    "totalAmount": 110000,
    "totalSupplyAmount": 100000,
    "totalTaxAmount": 10000
  }
}
```

### `type` 상세 정보

웹훅을 트리거한 이벤트의 타입으로, 아래와 같은 종류로 구성됩니다.

- `TaxInvoice.Requested`: 역발행 요청이 완료된 경우
- `TaxInvoice.Issued`: 공급자가 발행을 승인한 경우
- `TaxInvoice.RequestCancelled`: 공급받는자가 역발행 요청을 취소한 경우
- `TaxInvoice.IssuanceCancelled`: 공급자가 역발행 승인 이후 취소한 경우
- `TaxInvoice.Refused`: 공급자가 역발행 요청을 발행 거부한 경우
- `TaxInvoice.SendingCompleted`: 발행 완료된 세금계산서가 국세청에 전송 완료된 경우
- `TaxInvoice.Manual`: 특정 이벤트가 발생하지 않고 수동 웹훅 재발송 기능을 이용한 경우 (**수동 웹훅 발송 API는 추후 지원 예정**)

### `data` 객체 상세

|필드명              |타입  |필수|설명                  |예시               |
|--------------------|------|----|----------------------|-------------------|
|taxInvoiceId        |String|O   |세금계산서 고유 아이디|`txi-test`         |
|supplierDocumentKey |String|O   |공급자 문서 번호      |`sdk-test`         |
|recipientDocumentKey|String|O   |공급받는자 문서 번호  |`rdk-test`         |
|status              |String|O   |세금계산서 상태       |`SENDING_COMPLETED`|
|supplierBrn         |String|O   |공급자 사업자 등록번호|`1234567890`       |
|totalAmount         |Number|O   |합계금액              |`110000`           |
|totalSupplyAmount   |Number|O   |공급가액              |`100000`           |
|totalTaxAmount      |Number|O   |세액                  |`10000`            |

### `status` 상세 정보

세금계산서의 현재 상태를 나타내는 값으로, 다음과 같은 종류로 구성됩니다. 웹훅의 경우 아래 상태들 중 주요 상태로 변경되는 이벤트에 대해서만 발송됩니다.

- `DRAFTED`: 임시 저장 완료
- `DRAFT_PENDING`: 임시 저장 대기 (일괄 발행 시 시스템의 처리 대기 상태)
- `DRAFT_FAILED`: 임시 저장 실패
- `REQUESTED`: 발행 요청 완료 (공급자에게 이메일이 발송된 상태)
- `REQUEST_PENDING`: 발행 요청 대기 (일괄 발행 시 시스템의 처리 대기 상태)
- `REQUEST_FAILED`: 발행 요청 실패
- `REQUEST_CANCELLED`: 공급받는 자에 의한 발행 취소 (공급자가 역발행 승인하기 이전에 공급받는자가 미리 취소한 상태)
- `REQUEST_REFUSED`: 발행 요청 거부
- `ISSUED`: 발행 완료
- `ISSUANCE_CANCELLED`: 공급자에 의한 발행 취소 (공급자가 역발행 승인 이후 취소된 상태)
- `BEFORE_SENDING`: 국세청 전송 전
- `WAITING_SENDING`: 국세청 전송 대기
- `SENDING`: 국세청 전송 중
- `SENDING_COMPLETED`: 국세청 전송 완료 (세금계산서가 발행 승인되어 최종적으로 국세청까지 전달된 상태)
- `SENDING_FAILED`: 국세청 전송 실패

## ✔️ 웹훅 설정 방법

포트원 세금계산서 웹훅은 기술팀에서 직접 설정합니다. 아래 절차를 따라 웹훅 설정을 요청해주세요.

### 설정 요청 절차

1. 웹훅 수신 URL을 준비해주세요.
2. 기술지원 이메일(<support.b2b@portone.io>)로 웹훅 URL(운영 환경, 테스트 환경 별도 적용 가능)을 전달해주세요.
3. 테스트 모드 설정이 완료되었다는 회신을 받으면 테스트 모드에서 웹훅 정상 작동 여부를 확인해주세요
4. 운영 환경에도 적용을 요청하신 뒤 운영 환경에서 웹훅 정상 작동 여부를 확인해주세요.

### 테스트 모드 웹훅 정상 작동 확인 방법

- 포트원 콘솔에서 웹훅 테스트 토글을 활성화해주세요.
- 테스트용 세금계산서를 발행 요청하면 설정된 테스트용 URL로 웹훅이 전송됩니다.

### IP 필터링 안내

포트원은 아래 고정 IP를 사용하여 웹훅을 전송합니다.

안전한 웹훅 수신을 위해 IP 필터링이 필요하신 경우, 아래 IP를 허용 목록에 추가해 주세요.

- **포트원 V2 웹훅 IP**: `52.78.5.241`

추후 웹훅 발송 IP가 추가/변경될 경우 사전에 메일로 안내드릴 예정이며, 이 때 IP 필터를 업데이트해 주셔야 정상적으로 웹훅 수신이 가능합니다.

### 웹훅 실패 시 재시도 정책

웹훅 요청 시 실패 응답을 받은 경우, 포트원에서는 총 5회(최초 요청 + 4회 재시도)까지 웹훅 전송을 시도합니다.
또한 고객사의 시스템 장애 상황에서 웹훅 과부하로 인한 영향을 최소화하기 위해 다음과 같은 재시도 정책을 적용하고 있습니다:

- 지수함수 형태로 지연 시간을 점진적으로 늘리는 **Exponential Backoff** 방식
- 지연 시간에 무작위성을 추가하는 **Equal Jitter** 정책

이러한 정책에 따라 각 재시도는 5분, 10분, 20분, 40분의 기본 지연시간을 기반으로 하지만, 실제 지연시간은 기본값의 절반 정도의 무작위성을 추가하여 결정됩니다. 위에서 언급된 재시도 정책의 자세한 기술적 내용이 궁금하시면 [포트원 기술 블로그 - 웹훅 재시도](https://developers.portone.io/blog/posts/2024-02/v2-webhook)에서 확인하실 수 있습니다.
