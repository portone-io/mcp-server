---
title: 1. 빌링키 발급하기
description: 결제창 또는 API를 이용하여 빌링키를 발급할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/non-auth
---

포트원에서는 PG사 결제창을 통해 빌링키를 발급하는 방법과 API를 이용하여 빌링키를 발급하는 방법을 지원합니다.

결제창을 이용한 빌링키 발급과 API를 통한 빌링키 발급 방식의 장단점은 아래와 같습니다.

**결제창을 통한 빌링키 발급**

- **장점**
  - 결제 수단 정보가 고객사나 포트원의 서버를 거치지 않고 직접 PG사로 전달되기 때문에 보안 문제가 일어날 가능성이 적습니다.

- **단점**
  - PG사의 일반결제창을 통해 카드정보를 입력받기 때문에 웹브라우저를 통해서만 빌링키 발급이 이루어지며, **카드정보 입력란을 커스터마이징 할 수 없습니다.**

**API를 통한 빌링키 발급**

- **장점**
  - 고객사가 원하는 형태의 화면으로 **카드정보 입력란을 커스터마이징**할 수 있습니다.
  - 고객사 UI/UX 친화적인 결제 환경을 계획하고 계시다면 API 연동 개발을 선택하시길 권장드립니다.

- **단점**
  - **개인정보 이용약관**을 명시해야 하며 PG사 및 카드사 심사가 까다롭고 개인정보 유출에 유의해야 합니다.

## 결제창을 통한 빌링키 발급

결제창을 이용해 빌링키를 발급할 때는 포트원 SDK를 이용합니다.

포트원 SDK를 설치하는 방법은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout) 문서를 참고하세요.

`PortOne.requestIssueBillingKey()` 함수를 호출하면 빌링키를 발급하기 위한 결제창을 열 수 있습니다.

브라우저에서 포트원 SDK를 호출하여 빌링키를 발급하고, 서버로 빌링키를 전달합니다.

```ts
const issueResponse = PortOne.requestIssueBillingKey({
  storeId: "store-9bf6076d-beef-4729-9521-ae66c14e0569",
  channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d",
  billingKeyMethod: "CARD",
});
// 빌링키가 제대로 발급되지 않은 경우 에러 코드가 존재합니다
if (issueResponse.code !== undefined) {
  return alert(issueResponse.message);
}

// 고객사 서버에 빌링키를 전달합니다
const response = await fetch(`${MY_SEVER_URL}/billings`, {
  method: "POST",
  header: { "Content-Type": "application/json" },
  body: JSON.stringify({
    billingKey: issueResponse.billingKey,
    // ...
  }),
});
if (!response.ok) throw new Error(`response: ${await response.json()}`);
```

## API를 통한 빌링키 발급

고객 결제 정보를 이용하여 포트원 빌링키 발급 API를 호출하면 포트원 서버가 PG사를 통해 빌링키를 발급받습니다.

이 과정에서 카드 정보는 포트원 서버에 기록되지 않습니다.

브라우저로부터 결제 정보를 전달 받은 뒤, 서버에서 포트원 API를 호출하세요.

```ts title="server-side"
// customerId, cardNumber, expiryYear, expiryMonth, birthOrBusinessRegistrationNumber, passwordTwoDigits 등 정보를 전달받습니다.

// 포트원 빌링키 발급 API 호출
const issueResponse = await fetch("https://api.portone.io/billing-keys", {
  method: "POST",
  headers: {
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    channelKey: CHANNEL_KEY_HERE,
    customer: {
      id: customerId,
    },
    method: {
      card: {
        credential: {
          number: cardNumber,
          expiryYear,
          expiryMonth,
          birthOrBusinessRegistrationNumber,
          passwordTwoDigits,
        },
      },
    },
  }),
});
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
const {
  billingKeyInfo: { billingKey },
} = await issueResponse.json();
// 빌링키가 발급되었습니다! 빌링키를 저장하거나 결제하는 로직을 구성하세요.
```

## 빌링키 발급 방식에 따른 인증과정 필수 여부

빌링키를 발급 받는 단계에서 인증과정은 다음과 같이 구분할 수 있습니다.

1. PG사의 결제창을 띄우는 방식

   - PG사의 결제창 안에서 '공인인증(본인인증)' 절차를 요구하게 됩니다.

2. API 호출 방식

   - API 호출만으로 빌링키 발급이 가능하기 때문에 인증 절차가 없습니다.

인증과정 포함 여부는 결제대행사별로 다르므로 상세 내용은 아래 링크에서 확인하세요.

- [정기결제의 인증 과정 필수 여부](https://help.portone.io/content/schedule-requirement)
