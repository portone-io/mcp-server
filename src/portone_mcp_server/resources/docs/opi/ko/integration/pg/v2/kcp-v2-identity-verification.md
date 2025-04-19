---
title: KCP 본인인증
description: KCP 본인인증 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/kcp-v2-identity-verification
---

## KCP 본인인증 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.
- KCP 관리자 페이지에서 부가서비스 > 휴대폰본인확인 > 인증결과URL설정 메뉴에서 인증 결과 URL로 `checkout-service.prod.iamport.co`를 설정합니다.

## SDK 방식으로 본인인증하기

- [본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/readme-v2) 페이지의 내용을 참고하여 연동을 진행합니다.

## API 방식으로 본인인증하기

- [본인인증 관련 API](https://developers.portone.io/api/rest-v2/identityVerification) 페이지의 내용을 참고하여 연동을 진행합니다.

### 본인인증 요청 전송 API

```ts
await axios({
  url: `https://api.portone.io/identity-verifications/${encodeURIComponent(identityVerificationId)}/send`,
  method: "post",
  headers: { "Content-Type": "application/json" },
  data: {
    /* 기타 파라미터 생략 */
    bypass: {
      kcpV2: {
        media_type: "MC01",
      },
    },
  },
});
```

<div class="tabs-container">

<div class="tabs-content" data-title="필수 파라미터">

- channelKey: string

  **본인인증 요청하고자 하는 PG사의 채널키**

  본인인증을 요청할 채널을 지정합니다.

- customer: SendIdentityVerificationBodyCustomer

  **본인인증 요청을 위한 고객 정보**

<details>

<summary>customer 필수 파라미터</summary>

- name: string

  **이름**

- phoneNumber: string

  **전화번호**

  특수문자(-)없이 숫자만 입력합니다.

- identityNumber: string

  **주민등록번호 앞 7자리**

</details>

- operator: IdentityVerificationOperator

  **본인인증 통신사**

  - SKT : SKT
  - KT : KT
  - LGU : LGU
  - SKT\_MVNO : SKT 알뜰폰
  - KT\_MVNO : KT 알뜰폰
  - LGU\_MVNO : LGU 알뜰폰

- method: IdentityVerificationMethod

  **본인인증 방식**

  - SMS
  - APP

- bypass: kcpV2Bypass

  **NHN KCP 특수파라미터**
  포트원에서는 `bypass` 파라미터를 통해 NHN KCP에서 특수하게 지원하는 파라미터들을 입력 할 수 있도록 지원하고 있습니다.

  <details>

  <summary>bypass 필수 파라미터</summary>

  - media\_type: string

    **미디어 타입**

    - PC : MC01
    - MOBILE : MC02

  </details>

</div>

<div class="tabs-content" data-title="선택 파라미터">

- storeId?: string

  **상점 아이디**

  접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.

- customer: SendIdentityVerificationBodyCustomer

  **본인인증 요청을 위한 고객 정보**

  <details>

  <summary>customer 선택 파라미터</summary>

  - id?: string

    **식별 아이디**

  </details>

- customData?: string

  **사용자 지정 데이터**

- bypass: kcpV2Bypass

  **NHN KCP 특수파라미터**
  포트원에서는 `bypass` 파라미터를 통해 NHN KCP에서 특수하게 지원하는 파라미터들을 입력 할 수 있도록 지원하고 있습니다.

  <details>

  <summary>bypass 선택 파라미터</summary>

  - web\_siteid: string

    **KCP 사이트 식별코드**

    DI 생성 시 사용할 사이트 ID입니다. 미입력 시 KCP에서 발급한 사이트 ID로 설정됩니다.

  - cp\_sms\_msg: string

    **CP 지정 SMS 메세지**

    인증번호 난수가 채워질 \[000000] 부분만 제외 (6자리)하고 표시할 문자 발송 내용으로 요청 바랍니다.
    “\[000000]” 문자열은 반드시 포함되어야 합니다.

    ex) “cp\_sms\_msg” : “\[TEST SHOP]이용자번호는\[000000]입니다.”

  - cp\_callback: string

    **CP 지정 callback 번호**

  인증번호 SMS의 발신자

  </details>

</div>

</div>

### 본인인증 확인 API

```ts
await axios({
  url: `https://api.portone.io/identity-verifications/${encodeURIComponent(identityVerificationId)}/confirm`,
  method: "post",
  headers: { "Content-Type": "application/json" },
  data: {
    otp: "000000",
  },
});
```

<div class="tabs-container">

<div class="tabs-content" data-title="선택 파라미터">

- storeId?: string

  **상점 아이디**

  접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용합니다.

- otp?: string

  **OTP (One-Time Password)**

  SMS 방식으로 요청한 경우에만 사용됩니다.

</div>

</div>

## KCP 특수 파라미터 안내

포트원에서는 `bypass` 파라미터를 통해 KCP에서 특수하게 지원하는 파라미터들을 입력할 수 있도록 지원하고 있습니다.

- `web_siteid`: (SDK, API) DI 생성 시 사용할 사이트 ID입니다. 미입력 시 KCP에서 발급한 사이트 ID로 설정됩니다.
- `media_type`: (API) 미디어 타입으로 PC 환경은 `MC01`, MOBILE 환경은 `MC02` 를 입력합니다.
- `cp_sms_msg`: (API) CP 지정 SMS 메세지입니다. 인증번호 난수가 채워질 \[000000] 부분만 제외 (6자리)하고 표시할 문자 발송 내용으로 요청 바랍니다.
- `cp_callback`: (API) CP 지정 callback 으로 인증번호 SMS의 발신자를 설정합니다.

SDK, API에서 아래와 같은 방식으로 특수 파라미터들을 입력하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK bypass 파라미터 예시">

```ts
// 필요한 파라미터를 선택하여 입력해주세요.
const kcpBypass = {
  kcp_v2: {
    web_siteid: "J01234567890",
  },
};
```

</div>

<div class="tabs-content" data-title="API bypass 파라미터 예시">

```ts
// 필요한 파라미터를 선택하여 입력해주세요.
const kcpBypass = {
  kcpV2: {
    media_type: "MC01",
    web_siteid: "J01234567890",
    cp_sms_msg: "[TEST SHOP]이용자번호는[000000]입니다.",
    cp_callback: "02-1670-5176",
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
  bypass: kcpBypass,
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
    bypass: kcpBypass,
  },
});
```

</div>

</div>

## 일반 파라미터 유의사항 안내

### `identityVerificationId` 파라미터 유의사항

영어 대소문자와 숫자만 사용 가능하며 70자 이하로 입력해야 합니다.
