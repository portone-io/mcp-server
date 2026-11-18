---
title: KCP 본인인증
description: KCP 본인인증 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## KCP 본인인증 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.
- KCP 관리자 페이지에서 부가서비스 > 휴대폰본인확인 > 인증결과URL설정 메뉴에서 인증 결과 URL로 `checkout-service.prod.iamport.co`를 설정합니다.

## SDK 방식으로 본인인증하기

- [본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/readme-v2) 페이지의 내용을 참고하여 연동을 진행합니다.

<div class="hint" data-style="warning">

SDK 방식으로 본인인증을 이용하기 위해서는 KCP 관리자 페이지에서 신규 연동방식(V2) 설정이 되어 있어야 합니다.

partner.kcp.co.kr > \[부가서비스] > \[휴대폰본인확인] > \[연동방식 설정] 에서 **신규 연동방식(V2) 사용여부**를 **사용**으로 설정해주세요.

설정하지 않을 경우 `requestIdentityVerification`의 응답으로 `pgCode`가 `CS24`, `pgMessage`가 `정보조회가 올바르지 않습니다.`와 같은 오류가 발생할 수 있습니다.

</div>

## KCP 특수 파라미터 안내

포트원에서는 `bypass` 파라미터를 통해 KCP에서 특수하게 지원하는 파라미터들을 입력할 수 있도록 지원하고 있습니다.

- `web_siteid`: DI 생성 시 사용할 사이트 ID입니다. 미입력 시 KCP에서 발급한 사이트 ID로 설정됩니다.

SDK의 `requestIdentityVerification` 함수의 파라미터 중 `bypass` 필드에 아래와 같이 값을 채울 수 있습니다.

```ts
PortOne.requestIdentityVerification({
  /* 기타 파라미터 생략 */
  bypass: {
    kcp_v2: {
      web_siteid: "J01234567890",
    },
  },
});
```

## 일반 파라미터 유의사항 안내

### `identityVerificationId` 파라미터 유의사항

영어 대소문자와 숫자만 사용 가능하며 40자 이하로 입력해야 합니다.
