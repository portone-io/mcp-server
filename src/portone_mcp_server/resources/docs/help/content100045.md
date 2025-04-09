---
title: Lpay&Lpoint 스키마 추가/변경
category: 업데이트
tags:
  - 업데이트
datetime: 2021-06-03T15:00:00.000Z
---

**포트원 SDK를 사용하는 경우**

- 안드로이드 SDK는 특정 패키지에 의존하는 부분이 없어서 변경될 사항이 없으며,
  IOS는 포트원SDK 예제 및 로직 관련 일부 수정처리가 완료되었습니다.
- info.plist 에 Lpay\&Lpoint 스키마 추가(lmslpay) 및 SDK 버전 업데이트를 진행해주시면 됩니다

**자체개발하시는 경우**

- `IOS` : 웹뷰 자체 구현 고객 → info.plist 추가 및 (옵션사항) SDK 미설치 이동 로직 수정
- `Android` : 기본적으로 수정되어야 할 내용 없으나, 안드로이드 11(api 30) 의 경우 Andorid 11 보안 정책 변경에 따라 패키지명 명시가 필요할 경우 AndroidManifest.xml  내에 해당 패지키 추가 부탁드립니다.\
  \<package android:name=“com.lottemembers.android” /> \<!-- L.POINT -->\
  아래 링크의 규칙을 따라서 구현해주시면 됩니다.\
  (참고 : <https://developer.android.com/training/basics/intents/package-visibility?hl=ko>)
