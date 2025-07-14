---
title: 복수 PG설정 및 사용하기
description: 복수 PG를 사용하는 경우 설정방법을 확인할 수 있습니다.
targetVersions:
  - v1
---

이 문서는 포트원 관리자 콘솔에서 복수의 PG사를 설정하여 원하는 결제 수단으로 결제창을 호출하는 방법을 설명합니다.

## PG 설정하기

추가 설정이 필요한 PG설정정보를 아래와 같이 설정해 주세요.

[포트원 관리자 콘솔](https://admin.portone.io/) > 결제 연동 > 테스트/실 연동 > 실 연동 또는 테스트
연동 선택 > PG사 / PG 모듈 선택 > \[+추가] 클릭

(관련 이미지 첨부)

## 특정 PG사의 결제창 열기 <a href="#pg" id="pg" />

결제창을 호출하기 위한 [**JavaScript SDK**](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay`를
호출할 때 `channelKey` 속성에 PG사의 채널키를 지정하여 해당 PG사의 결제창을 호출할 수 있습니다.

만약 포트원 관리자 콘솔 PG사 등록 현황이 아래와 같이 **3개의 PG설정**을 등록했다고 가정해 보면,

|          PG사         |상점아이디 (예시)|       용도      |                     채널키                     |
|:---------------------:|:---------------:|:---------------:|:----------------------------------------------:|
|**(신) 나이스페이먼츠**|      MID-a      | **인증 결제용** |channel-key-12345678-1234-5678-9012-123456789012|
|**(신) 나이스페이먼츠**|      MID-b      |**비인증 결제용**|channel-key-abcdefgh-abcd-efgh-ijkl-abcdefghijkl|
|       카카오페이      |      MID-c      |   인증 결제용   |channel-key-98765432-9876-5432-1098-987654321098|

다음과 같이 `channelKey` 속성에 `channel-key-98765432-9876-5432-1098-987654321098`를 지정하면 등록한 카카오페이 설정으로 결제창이 호출됩니다

<div class="tabs-container">

<div class="tabs-content" data-title="카카오페이 호출">

```ts
IMP.request_pay({
  channelKey: "channel-key-98765432-9876-5432-1098-987654321098", // 카카오페이 채널키
  amount: 1000,
  name: "테스트 주문",
  buyer_name: "구매자",
  buyer_email: "buyer@iamport.kr",
});
```

</div>

</div>

위에서 등록한 PG 설정 중 **(신) 나이스페이먼츠 (인증 결제용)** 와 **(신) 나이스페이먼츠 (비인증 결제용)** 의 경우 **PG사 코드값이 동일**하지만, `channelKey` 파라미터를 통해 구분이 가능합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="(신) 나이스페이먼츠 인증 결제용 호출">

```ts
IMP.request_pay({
  channelKey: "channel-key-12345678-1234-5678-9012-123456789012", // (신) 나이스페이먼츠 인증 결제용 채널키
  amount: 1000,
  name: "테스트 주문",
  buyer_name: "구매자",
  buyer_email: "buyer@iamport.kr",
});
```

</div>

<div class="tabs-content" data-title="(신) 나이스페이먼츠 비인증 결제용 호출">

```ts
IMP.request_pay({
  channelKey: "channel-key-abcdefgh-abcd-efgh-ijkl-abcdefghijkl", // (신) 나이스페이먼츠 비인증 결제용 채널키
  amount: 1000,
  name: "테스트 주문",
  buyer_name: "구매자",
  buyer_email: "buyer@iamport.kr",
});
```

</div>

</div>

<div class="hint" data-style="warning">

기존에 사용되던 `pg` 파라미터는 지원 중단 예정입니다.

JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 PG사 구분을 대체해주세요.

</div>
