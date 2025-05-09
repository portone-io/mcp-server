---
title: '[릴리즈노트] 2024-07-10  업데이트'
category: 업데이트
tags:
  - API / SDK
  - 업데이트
searchTags:
  - redirectUrl 파라미터
  - 카드 다이렉트
  - 한국결제네트웍스 카드 다이렉트
  - 본인인증 정보
  - 인증 성별
  - 이니시스 추가 정보
  - 이니시스 성별 정보
  - 업데이트
  - 릴리즈노트
datetime: 2024-07-12T02:36:07.463Z
---

<Callout title="2024년 7월 10일 API / SDK 업데이트 소식을 안내드립니다." />



## **주요 업데이트 사항**

<Tag text="결제 서비스 V1" />

✔️ 이니시스 통합인증 결과 중 성별 정보를 확인할 수 있습니다.

이제 이니시스 통합인증을 통해 인증 시 응답에 성별 정보가 포함되며, 인증 후 내역 조회 시 응답 필드에도 성별 정보가 포함됩니다.

성별 정보를 활용하시려면 이전 인증 내역의 경우 Null로 응답됩니다.

<Tag text="결제 서비스 V2" />

✔️ 한국결제네트웍스(KPN)을 통한 카드 다이렉트 결제가 지원됩니다.

이제 한국결제네트웍스(KPN)을 이용하시는 고객사에서도 아래 지원되는 카드사에 한하여 카드 다이렉트 결제를 이용하실 수 있습니다.

지원 카드 목록

- BC카드
- 신한카드
- 삼성카드
- 현대카드
- 롯데카드
- KB국민카드
- NH농협카드
- 씨티카드
- 우리카드
- 하나카드
- 우체국은행카드
- 카카오뱅크카드
- 케이뱅크카드
- 신협카드
- KDB산업은행
- 저축은행카드
- 새마을금고카드

KPN 카드 다이렉트에 대한 자세한 내용은 [KPN 연동가이드](https://developers.portone.io/opi/ko/integration/pg/v2/kpn?v=v2)에서 확인하실 수 있습니다.

## 기타 업데이트 사항

<Tag text="결제 서비스 V2" />

✔️ redirectUrl 파라미터 입력 형식 유효성 검증 기준이 완화되었습니다.

기존에는 http 또는 https 프로토콜인 경우에만 입력 가능하였으나, 이제 다른 프로토콜로 입력한 경우에도 정상적으로 결제 요청이 가능하도록 유효성 검증 기준을 완화하였습니다.

[\[API/SDK 릴리즈노트\] 2024-07-10 업데이트 보러가기↗](https://developers.portone.io/release-notes/api-sdk/2024-07-11)
