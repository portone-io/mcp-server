---
title: KG이니시스 통합인증
description: KG이니시스 통합인증 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/inicis
---

## KG이니시스 통합인증 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 사전 계약 안내

SMS를 통한 본인인증을 진행하기 위해서는 KG이니시스와 별도 계약이 필요합니다.

## SDK를 통해 본인인증하기

- [본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/readme-v2) 페이지의 내용을 참고하여 연동을 진행합니다.

## KG이니시스 특수 파라미터 안내

포트원에서는 `bypass` 파라미터를 통해 KG이니시스에서 특수하게 지원하는 파라미터들을 입력할 수 있도록 지원하고 있습니다.
`flgFixedUser` 파라미터의 경우 필수로 입력해야 합니다.

- `flgFixedUser`: 인증 창에 고객 정보가 자동으로 입력하도록 설정할 수 있습니다.
- `directAgency`: 인증 업체를 사용자가 선택하지 않고 특정 인증 업체를 통해 인증하도록 설정할 수 있습니다.
- `logoUrl`: 인증 창 좌측 상단 KG이니시스 로고 대신 들어갈 로고의 URL입니다

SDK를 통해 아래와 같이 특수 파라미터들을 입력하실 수 있습니다.

```ts
PortOne.requestIdentityVerification({
  /* 기타 파라미터 생략 */
  bypass: {
    inicisUnified: {
      flgFixedUser: "N",
      directAgency: "PASS",
      logoUrl: "https://www.MarketA.co.kr/logo.png",
    },
  },
});
```

### `flgFixedUser` 사용 시 유의사항

`Y` 또는 `N`만 입력 가능합니다.

`Y`인 경우 이름, 연락처, 출생년도, 출생월, 출생일을 필수로 입력해야 합니다.

### `directAgency` 사용 시 유의사항

인증 업체 코드를 입력해야 합니다.

`SMS`의 경우, KG이니시스와 계약하지 않으면 `알 수 없는 오류가 발생했습니다.` 메시지와 함께 인증 진행이 불가능합니다.

<details>

<summary>인증 업체 코드 확인하기</summary>

- PAYCO(페이코)
- PASS(패스 (통신사))
- TOSS(토스)
- KFTC(금융결제원)
- KAKAO(카카오)
- NAVER(네이버)
- SAMSUNG(삼성패스)
- SHINHAN(신한은행)
- KB(국민은행)
- HANA(하나은행)
- WOORI(우리은행)
- NH(농협은행)
- KAKAOBANK(카카오뱅크)
- SMS(휴대폰 인증, 별도 계약 필요)

</details>

### `logoUrl` 사용 시 주의사항

최적 크기는 가로 164px, 세로 28px입니다.

인증 창은 HTTPS를 사용하므로, HTTP URL 사용 시 이미지가 제대로 표시되지 않을 수 있습니다.
