---
title: NHN KCP(신모듈) 본인인증 연동하기
description: NHN KCP(신모듈) 본인인증 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/kcp-v2-identity-verification
---

## NHN KCP(신모듈) 본인인증 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## API 방식으로 본인인증하기

- [본인인증 관련 API](https://developers.portone.io/api/rest-v1/certification?v=v1)페이지의 내용을 참고하여 연동을 진행합니다.

### 본인인증 요청 API

```ts title="server-side"
const response = await fetch(
  `https://api.iamport.kr/certifications/otp/request`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      merchant_uid: "merchant_1234567890",
      name: "홍길동",
      phone: "01012345678",
      birth: "900101",
      gender_digit: "1",
      carrier: "SKT",
      is_mvno: false,
      verification_method: "SMS",
      ip: "127.0.0.1",
      bypass: {
        kcpV2: {
          media_type: "MC01", // PC
          web_siteid: "SITE_123456",
          cp_sms_msg: "인증번호는 [000000] 입니다.",
          cp_callback: "01012345678",
        },
      },
    }),
  },
);

const data = await response.json();
```

<div class="tabs-container">

<div class="tabs-content" data-title="필수 파라미터">

- channelKey: string

  **본인인증 요청하고자 하는 PG사의 채널키**

  pg 파라미터는 deprecated 되었기 때문에, 반드시 channelKey 파라미터에 본인인증을 요청하고자 하는 PG사 채널의 채널키를 입력해주세요.

- name: string

  **본인인증 대상자 성명**

- phone: string

  **본인인증 대상자 전화번호**

- birth: string

  **본인인증 대상자 생년월일(YYMMDD)**

- gender\_digit: string

  **주민등록번호 뒷부분 첫차리**

  외국인 고객은 다음 기준에 따라 입력해주세요:

  - 남성: \~1999년생은 5, 2000년 이후 출생자는 7
  - 여성: \~1999년생은 6, 2000년 이후 출생자는 8

- carrier: string

  **통신사 코드**

  - SKT
  - KT
  - LGT

- is\_mvno: boolean

  **알뜰폰 사용 여부**

  알뜰폰 사용자의 경우, carrier 파라미터에 SKT, KT, LGT 중 하나를 지정 후
  is\_mvno 파라미터를 true로 지정합니다.

- verification\_method: string

  **본인인증 방식**

  - SMS
  - APP

- bypass.kcpV2.media\_type: string

  **미디어 타입**

  - PC : MC01
  - MOBILE : MC02

</div>

<div class="tabs-content" data-title="선택 파라미터">

- merchant\_uid: string

  **고객사 주문번호**

  본인인증을 식별하기 위한 고객사의 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- bypass.kcpV2.web\_siteid: string

  **KCP 사이트 식별코드**

  DI 생성 시 사용할 사이트 ID입니다. 미입력 시 KCP에서 발급한 사이트 ID로 설정됩니다.

- bypass.kcpV2.cp\_sms\_msg: string

  **CP 지정 SMS 메세지**

  인증번호 난수가 채워질 \[000000] 부분만 제외 (6자리)하고 표시할 문자 발송 내용으로 요청 바랍니다.
  “\[000000]” 문자열은 반드시 포함되어야 합니다.

  ex) “cp\_sms\_msg” : “\[TEST SHOP]이용자번호는\[000000]입니다.”

- bypass.kcpV2.cp\_callback: string

  **CP 지정 callback 번호**

  인증번호 SMS의 발신자

</div>

</div>

### 본인인증 확인 API

```ts title="sever-side"
const response = await fetch(
  `https://api.iamport.kr/certifications/otp/confirm/{imp_uid}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imp_uid: "imp_uid",
      otp: "123456",
    }),
  },
);
```

<div class="tabs-container">

<div class="tabs-content" data-title="필수 파라미터">

- imp\_uid: string

  **포트원 인증 고유번호**

</div>

<div class="tabs-content" data-title="선택 파라미터">

- otp: string

  **SMS로 전송된 인증번호**

  APP 방식 본인인증에서는 전달하지 않습니다.

</div>

</div>
