---
title: '[릴리즈노트] 2025-01-16 파트너 정산 자동화 업데이트'
category: 업데이트
tags:
  - 파트너정산
  - 업데이트
searchTags:
  - 지급내역관리
  - 정산내역관리
  - 토큰 만료 오류
  - 이메일 재발송
  - 역발행 세금계산서 이메일 재발송
  - '역발행 '
  - 파트너정산
datetime: 2025-06-10T05:35:23.827Z
---

<Callout title="2025년 1월 16일 파트너 정산 자동화 업데이트 소식을 안내드립니다." />



<Callout content="안녕하세요 파트너 정산 자동화팀입니다.

25년 1월 16일, 서비스 업데이트 사항 안내드립니다.
금번 정기 업데이트 개선사항 공유 드립니다. 
이번 업데이트는 소소하지만 확실한 편리함을 드릴 수 있는 개선사항들로 꾸려졌습니다.

1. 역발행 세금계산서 이메일 재발송
2. 역발행 세금계산서 공급자 랜딩 페이지 내 토큰 만료 오류 케이스 추가
- 이메일 재발송 시 기존 이메일 토큰 만료 에러
- 기존 세금계산서 토큰 유효기간 만료 에러
3. 정산내역관리/지급내역관리 표 헤더 상단고정" />

## **주요 업데이트 사항**

#### **✔️역발행 세금계산서 이메일 재발송**

- 아래 2가지 발송경로를 통하여 역발행 세금계산서 이메일 재발송 기능을 지원합니다.
  - 세금계산서 목록에서 최우측으로 스크롤하여, \[메일 재전송] 버튼을 클릭
  - 세금계산서 목록에서 세금계산서 단건을 클릭하여 세금계산서 조회 페이지 진입 후, 좌측 하단의 \[메일 재전송] 버튼을 클릭
- 메일 재발송을 하면 기존 페이지의 토큰은 만료되고, 새로 발송한 메일에 대하여 신규 토큰이 생성됩니다. 이에 따라 토큰의 기간도 이메일 재발송 후, 2달로 갱신됩니다.





#### **✔️역발행 세금계산서 공급자 랜딩 페이지 내 토큰 만료 오류 케이스 추가**

이메일 재발송 시 기존 이메일 토큰 만료 에러

- 세금계산서 발행 요청 이메일을 재발송할 경우, 기존 이메일 토큰 만료되어 조회 불가한 케이스에 대하여 에러 메시지를 노출합니다.



- 토큰이 만료(이메일 발송일로부터 2달 경과)된 세금계산서에 대하여 에러 메시지를 노출합니다.



#### ✔️**정산내역관리/지급내역관리 표 헤더 상단고정**

- 정산/지급내역관리의 표 리스트를 스크롤하는 경우, 컬럼명을 고정하여 각 컬럼 항목에 해당하는 데이터를 명확하게 인지할 수 있도록 개선하였습니다.



##### [\[파트너정산 릴리즈노트\] 2025-01-16업데이트 보러가기↗](https://developers.portone.io/release-notes/platform/2025-01-16)
