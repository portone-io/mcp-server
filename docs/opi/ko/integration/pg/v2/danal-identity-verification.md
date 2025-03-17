---
title: 다날 본인인증
description: 다날 본인인증 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 다날 본인인증 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)  페이지의 내용을 참고하여 채널 설정을 진행합니다.

## SDK 방식으로 본인인증하기

- [본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/readme-v2) 페이지의 내용을 참고하여 연동을 진행합니다.

### 전화번호 고정하기

`customer.phoneNumber` 값을 채워 요청을 보내면 본인인증 창에서 해당 값으로 전화번호가 고정됩니다.

> 전화번호를 입력하실 때에는 `-` 없이 숫자만 입력해주세요.

### 이름 고정하기

`customer.fullName` 혹은 (`customer.firstName` + `customer.lastName`) 값을 채워 보내면 본인인증
창에서 해당 값으로 이름이 고정됩니다.

> `customer.firstName` 과 `customer.lastName` 을 이용하실 경우엔 성을 `lastName`에, 이름을 `firstName`에 입력해주세요.
>
> ex) 이름이 "**홍길동**"인 경우: `customer.lastName == '홍'` & `customer.firstName == '길동'`

## API 방식으로 본인인증하기

- [본인인증 관련 API](https://developers.portone.io/api/rest-v2/identityVerification) 페이지의 내용을 참고하여 연동을 진행합니다.

## 다날 특수 파라미터 안내

포트원에서는 `bypass` 파라미터를 통해 다날에서 특수하게 지원하는 파라미터들을 입력할 수 있도록 지원하고 있습니다.

- `IsCarrier`: (SDK) 본인인증 창이 열렸을 때, 해당 통신사만 활성화시킬 수 있습니다.
- `AGELIMIT`: (SDK, API) 본인인증을 진행할 수 있는 최소 나이를 설정할 수 있습니다.
- `CPTITLE`: (SDK, API) 고객사 서비스 URL 혹은 본인확인 기능 사용 경로를 입력할 수 있습니다.

SDK, API 에서 각각 아래와 같은 방식으로 특수 파라미터들을 입력하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="bypass 파라미터 예시">

```ts
// 필요한 파라미터를 선택하여 입력해주세요.
const danalBypass = {
  danal: {
    IsCarrier: "KTF",
    AGELIMIT: 20,
    CPTITLE: "www.MarketA.co.kr",
  },
};
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 사용 예시">

SDK의 `requestIdentityVerification` 함수의 파라미터 중 `bypass` 필드에 아래와 같이 값을 채울 수 있습니다.

```ts
PortOne.requestIdentityVerification({
  /* 기타 파라미터 생략 */
  bypass: danalBypass,
});
```

</div>

<div class="tabs-content" data-title="API 사용 예시">

[본인인증 요청 API](https://developers.portone.io/api/rest-v2/identityVerification#post%20%2Fidentity-verifications%2F%7BidentityVerificationId%7D%2Fsend)를 사용할 경우, bypass 필드에 아래 Json을 Stringify 해서 입력하셔야 합니다.

```ts
await axios({
  url: `https://api.portone.io/identity-verifications/${encodeURIComponent(identityVerificationId)}/send`,
  method: "post",
  headers: { "Content-Type": "application/json" },
  data: {
    /* 기타 파라미터 생략 */
    bypass: danalBypass,
  },
});
```

</div>

</div>

### `IsCarrier` 파라미터 사용 시 유의사항

가능한 값: `SKT`, `KTF`, `LGT`, `MVNO`

여러 개의 통신사를 활성화시키려면 위 값들을 semicolon(`;`) 으로 이어야 합니다. ex) `SKT;KTF`

### `CPTITLE` 파라미터 사용 시 유의사항

본인인증 동작에 영향을 주지는 않지만, KISA의 ePrivacy Clean 서비스 연동을 위해 설정을 권장합니다.

해당 값 설정에 대한 가이드는 아래와 같습니다.

- 본인확인 기능을 앱에서만 사용하는 경우 서비스 홈 URL 입력. Ex) `m.login.MarketC.co.kr`
- 본인확인 기능을 사용하는 웹 페이지가 존재할 경우 해당 URL 입력. Ex) `www.MarketA.co.kr`
- 웹 서비스 URL 자체가 존재하지 않는 경우 서비스 이름 (app 이름) 입력. Ex) `마켓A`

해당 값을 넘기지 않을 경우 `포트원`으로 default 값을 채웁니다.

## 일반 파라미터 유의사항 안내

### `customer.id` 파라미터 사용 시 유의사항

고객의 식별 아이디를 입력할 때에는 글자수 200자 이내로 제한됩니다.
