---
title: 가상계좌 계좌정보는 어떻게 확인할 수 있나요?
category: 자주 묻는 질문 (일반 문의) > 결제서비스 > 결제서비스
tags:
  - 공통
  - 가상계좌
pgCompanies:
  - 공통
searchTags:
  - 가상계좌은행정보
  - 계좌번호조회
  - 가상계좌조회
datetime: 2024-04-18T10:00:41.772Z
---

<Callout content="발급되는 가상계좌를 고객에게 보여주거나 따로 발송하기 위해서는 가상계좌정보를 가지고 계셔야 해요! 아쉽게도 계좌발급 이후 포트원에서 자동으로 구매자에게 계좌정보를 보내드리는 기능을 제공드리고 있지 않습니다" />

#### 1. API 로 정보 받아오기

아래 API 호출하여 가상계좌 관련된 응답값을 받아보실 수 있습니다.파라메터를 활용하시어 고객에게 문자발송 & 카카오톡 안내 & 마이페이지에 표기 등 원하시는 로직을 구현하실 수 있습니다.

API : [`GET /payments/\{imp_uid\}`](https://developers.portone.io/api/rest-v1/payment#get%20%2Fpayments%2F%7Bimp_uid%7D)

- 가상계좌 응답 파라메터
  - vbank\_code (string) : 가상계좌 은행 표준코드 (금융결제원기준)
  - vbank\_name (string): 입금받을 가상계좌 은행명
  - vbank\_num (string) : 입금받을 가상계좌 계좌번호
  - vbank\_holder (string) : 입금받을 가상계좌 예금주
  - vbank\_date (integer) : 입금받을 가상계좌 마감기한 UNIX timestamp
  - vbank\_issued\_at (integer) : 가상계좌 생성 시각 UNIX timestamp

#### 2. 포트원 관리자콘솔에서 확인하기

포트원 관리자콘솔 > 통합 결제 > 결제내역 상세 > 결제정보 ‘결제수단’ 에서 확인가능

