---
title: 포트원 V2 Python 서버 SDK
description: Python을 위한 포트원 V2 서버 SDK 사용 방법을 안내합니다.
targetVersions:
- v2
---

# PortOne Server SDK for Python

Python 서버 환경에서 포트원 V2 결제 시스템에 연동하기 위한 SDK입니다.

## 의존성

현대적인 Python 환경을 사용하며, Python 3.9 이상을 지원합니다. 내부 HTTP
클라이언트로는 httpx를 사용합니다.

## 설치

![PyPI - Version](https://img.shields.io/pypi/v/portone-server-sdk)

PyPI를 통해 설치합니다.

### uv

```shell
uv add portone-server-sdk
```

### poetry

```shell
poetry add portone-server-sdk
```

### requirements.txt

```requirement
portone-server-sdk == x.x.x
```

## 사용법

### 포트원 REST API

먼저 [포트원 개발자콘솔](https://admin.portone.io/integration-v2/manage/api-keys?version=v2)에서 API Secret을 발급받습니다.

발급받은 API Secret을 사용해 필요한 API에 맞는 Client를 생성합니다.

```python
# 결제 관련 API를 사용하는 경우
from portone_server_sdk import PaymentClient
payment_client = PaymentClient(secret=PORTONE_API_SECRET)
payment_client.get_payment(...)

# 전체 API를 사용하는 경우
from portone_server_sdk import PortOneClient
portone_client = PortOneClient(secret=PORTONE_API_SECRET)
# 상위 Client를 생성한 경우 하위 Client에 접근 가능합니다.
portone_client.payment.get_payment(...)
```

Client의 각 메서드는 메서드마다 고유한 Error와 ValueError을 발생시킬 수 있습니다.
현재 SDK 버전에서 지원하지 않는 응답을 받을 경우 ValueError가 발생합니다.

```python
from portone_server_sdk.errors import UnknownError, ForbiddenError, InvalidRequestError, PaymentNotFoundError, UnauthorizedError
from portone_server_sdk.payment import GetPaymentError

try:
    payment = payment_client.get_payment(...)
except ValueError:
    pass
except GetPaymentError as e:
    if isinstance(e, UnknownError):
        ...
    elif isinstance(e, ForbiddenError):
        ...
    elif isinstance(e, InvalidRequestError):
        ...
    elif isinstance(e, PaymentNotFoundError):
        ...
    elif isinstance(e, UnauthorizedError):
        ...
```

### 웹훅 검증

먼저 [포트원 개발자콘솔](https://admin.portone.io/integration-v2/manage/webhook?version=V2)에서 웹훅 시크릿을 발급받습니다.

webhook.verify 함수로 웹훅 내용을 검증할 수 있습니다.

**주의: 웹훅 내용은 서버에서 전달한 body를 JSON 형태로 파싱하지 않고, 문자열 형태로 그대로 입력합니다.**

```python
import portone_server_sdk as portone

payload = '{"type":"BillingKey.Issued","timestamp":"2024-04-25T10:00:00.000Z","data":{"storeId":"store-61e0db3d-b967-47db-8b50-96002da90d55","billingKey":"billing-key-75ae3cab-6afe-422d-bf34-3a7b1762451d"}}'
headers = {
    "webhook-id": "test-id",
    "webhook-signature": "v1,aW52YWxpZCBzaWduYXR1cmU=",
    "webhook-timestamp": "100",
}
webhook = portone.webhook.verify(PORTONE_WEBHOOK_SECRET, payload, headers)
```

webhook.verify 함수는 웹훅 내용을 Webhook 타입으로 변환하여 반환합니다.

```python
if isinstance(webhook, portone.webhook.WebhookTransactionPaid):
    println(webhook.data.paymentId)
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

Packages under _portone-io/server-sdk-py_ are primarily distributed under the
terms of both the [Apache License (Version 2.0)] and the [MIT license]. See
[COPYRIGHT] for details.

[MIT license]: LICENSE-MIT
[Apache License (Version 2.0)]: LICENSE-APACHE
[COPYRIGHT]: COPYRIGHT
