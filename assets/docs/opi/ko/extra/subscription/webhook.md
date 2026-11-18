---
title: 구독 결제 웹훅
description: 구독 결제에서 발송하는 웹훅의 종류와 처리 방법을 안내합니다.
targetVersions:
  - v2
---

구독 결제는 고객, 구독, 인보이스의 상태가 바뀔 때마다 웹훅을 발송합니다.
API로 직접 바꾼 경우에도 웹훅이 발송됩니다.

## 수신 설정

구독 결제 웹훅은 관리자 콘솔에 등록한 V2 결제 웹훅 주소로 발송되며, 서명 검증 방법도 결제 웹훅과 같습니다.

- 웹훅 버전이 **2024-04-25**로 설정된 경우에만 발송됩니다.
- 테스트 고객의 웹훅은 테스트 환경 웹훅 주소로, 실결제 고객의 웹훅은 실연동 웹훅 주소로 발송됩니다.

[웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)

## 본문 형식

```json
{
  "type": "Invoice.Paid",
  "timestamp": "2026-11-01T09:00:12.345Z",
  "data": {
    "storeId": "store-00000000-0000-0000-0000-000000000000",
    "invoiceId": "invoice-0193c1a2",
    "subscriptionId": "subscription-0193c1a2",
    "customerId": "customer-1234"
  }
}
```

`data`에는 바뀐 대상의 아이디만 담깁니다. 고객 웹훅은 `customerId`, 구독 웹훅은 `subscriptionId`와 `customerId`, 인보이스 웹훅은 `invoiceId`, `subscriptionId`, `customerId`를 담습니다.

## 웹훅 처리 방법

웹훅은 무엇이 바뀌었는지만 알려 줍니다. 각 이벤트를 받으면 **조회 API로 상세 내용을 가져와** 그 결과를 기준으로 처리해 주세요.
금액, 상태, 결제 실패 사유 같은 상세 정보는 웹훅 본문에 없으며, 조회 API의 응답이 가장 최신 상태입니다.

|웹훅            |상세 조회 API                                                                                                          |
|----------------|-----------------------------------------------------------------------------------------------------------------------|
|`Customer.*`    |[구독 고객 조회](https://developers.portone.io/api/rest-v2/subscription.customer)(`GET /customers/{customerId}`)       |
|`Subscription.*`|[구독 조회](https://developers.portone.io/api/rest-v2/subscription.subscription)(`GET /subscriptions/{subscriptionId}`)|
|`Invoice.*`     |[인보이스 조회](https://developers.portone.io/api/rest-v2/subscription.invoice)(`GET /invoices/{invoiceId}`)           |

- 같은 웹훅이 두 번 이상 도착할 수 있습니다. 인보이스 아이디 등으로 이미 처리한 건인지 확인해 한 번만 반영해 주세요.
- 처리에 성공하면 `200`으로 응답해 주세요.

서명 검증부터 조회까지 이어지는 예시 코드는 [웹훅 처리하기](https://developers.portone.io/opi/ko/extra/subscription/integration#5-웹훅-처리하기)를 참고해 주세요.

## 웹훅 종류

**고객**

|type                              |발송 시점                          |
|----------------------------------|-----------------------------------|
|`Customer.Created`                |고객이 생성되었을 때               |
|`Customer.Updated`                |고객 정보가 수정되었을 때          |
|`Customer.PaymentMethodRegistered`|결제수단이 등록되거나 교체되었을 때|
|`Customer.PaymentMethodRevoked`   |결제수단이 해지되었을 때           |

**구독**

|type                          |발송 시점                                                         |
|------------------------------|------------------------------------------------------------------|
|`Subscription.Created`        |구독이 생성되었을 때                                              |
|`Subscription.Updated`        |구독이 수정되었을 때                                              |
|`Subscription.Activated`      |구독이 `ACTIVE`가 되었을 때 (구독 등록 완료, 첫 회차 결제 회수 등)|
|`Subscription.Incomplete`     |구독이 `INCOMPLETE`가 되었을 때 (첫 회차 결제 실패 등)            |
|`Subscription.Paused`         |구독이 일시중지되었을 때                                          |
|`Subscription.Resumed`        |구독이 재개되었을 때                                              |
|`Subscription.DiscountAdded`  |구독에 할인이 붙었을 때                                           |
|`Subscription.DiscountRemoved`|구독에서 할인이 떨어졌을 때                                       |
|`Subscription.Ended`          |구독이 해지 또는 종료되었을 때                                    |

**인보이스**

|type                     |발송 시점                                               |
|-------------------------|--------------------------------------------------------|
|`Invoice.Paid`           |인보이스가 결제 완료되었을 때 (0원 청구, 수동 완납 포함)|
|`Invoice.PaymentFailed`  |인보이스 결제가 실패했을 때                             |
|`Invoice.Canceled`       |인보이스가 취소되었을 때                                |
|`Invoice.Regenerated`    |취소한 회차가 새 인보이스로 다시 만들어졌을 때          |
|`Invoice.PaymentRefunded`|결제된 인보이스가 환불되었을 때                         |

<div class="hint" data-style="warning">

`Invoice.Paid`는 인보이스가 결제 완료되는 모든 경우에 발송됩니다.
구독 등록 SDK가 실패로 응답했더라도 첫 회차가 뒤늦게 결제되면 이 웹훅이 발송되므로, 서비스 제공 여부는 이 웹훅을 기준으로 판단해 주세요.

</div>
