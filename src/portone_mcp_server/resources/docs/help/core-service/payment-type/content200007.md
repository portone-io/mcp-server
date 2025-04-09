---
title: '글로벌_페이레터 해외결제 서비스 안내 '
category: 결제서비스 (채널설정 및 이용안내) > 결제유형 > 해외결제
tags:
  - 페이레터
  - 크로스보더
  - 해외결제
pgCompanies:
  - null
searchTags:
  - 해외 정기결제
  - 해외결제
  - '크로스보더 '
  - '글로벌 정기결제 '
  - 글로벌
datetime: 2024-06-11T06:06:47.384Z
---

<Callout content="" title="글로벌 페이레터를 통한 해외결제 이용시 아래 특징을 참고해주세요!" />

### **글로벌 페이레터 서비스 이용안내**

- 글로벌 서비스 확장 시, 현지 국가 결제 수단 기능 추가 연동 개발 없이 이용 가능
- 간편한 DCC(Dynamic Currency Conversion) 기능 지원
- 다양한 기능을 제공하는 관리자 콘솔 지원
- 링크 생성 결제 기능 지원
- 코리아포트원 설정 없이 글로벌 포트원 콘솔 설정/연동 가능

#### **서비스 이용절차**

- 포트원 해외결제서비스 [도입문의](https://go.portone.io/l/1047343/2023-11-27/6rv/?_gl=1*19xamm*_gcl_au*MTk3NzM1MTQzMC4xNzE3NzMwMDU0*_ga*OTE5ODY1NzY1LjE3MDY3Nzk5MDA.*_ga_PD0FDL16NZ*MTcxODE4MDYwMy4xNDEuMS4xNzE4MTgyOTkzLjAuMC4w) 신청
- 페이레터 사전 심사 진행
- 포트원 서비스 이용 계약 진행
- 페이레터 계약 진행 (가입신청/카드사 심사)

#### **지원 결제 수단**

- 해외 발행 글로벌 카드 : VISA, Master, JCB/AMEX/UnionPay

#### **지원 결제 방식**

- 해외카드 일반(인증) 결제창 방식
- 해외카드 정기(비인증) 결제창 방식

#### **지원 하는 통화**

- 결제통화

<Indent level="1">

- 해외카드 VISA, Master, JCB : USD, KRW, JPY
- 해외카드 Amex : USD, KRW
- 해외카드 UnionPay : USD, KRW

</Indent>

- 정산통화

<Indent level="1">

- 정산 가능 통화 : KRW, USD

</Indent>

- DCC(Dynamic Currency Conversion) 서비스

<Indent level="1">

DCC는 고객이 카드를 발급받은 국가에 따라 결제시 자국의 화폐로 결제할 수 있는 고객편의 서비스 입니다. 

- 페이레터가 지원하는 결제통화에 대해서 DCC 기능 이용이 가능합니다.
- 포트원의 DCC의 경우 결제(승인)통화와 결제자의 국가코드를 기준으로 두 가지의 통화에 대해 사용자에게 선택권을 부여합니다.
- 따라서 스토어의 기본통화 외에 ‘자국 화폐’로 신용카드 결제를 진행하게 하며, 자국통화로만 진행되는 간편결제(Alternative Payment Method) 들도 이용이 가능합니다.
- 예를 들어, 스토어 상품을 USD로 설정하였고, 결제자를 한국으로 인식하셨다면 USD와 KRW 간에 DCC 가 이루어지며, KRW로 변환 시 KRW를 지원하는 PG사와 한국의 간편결제사를 결제창에 동적으로 노출 시킵니다.

</Indent>

#### **결제 수수료(VAT별도)**

- 페이레터 PG 수수료

<Indent level="1">

1. 해외카드(VISA, Master, JCB)

- 객단가 USD50.00 이상\_인증결제: 4.20% / 비인증결제: 4.40%
- 객단가 USD50.00 미만\_인증결제: 6.30% / 비인증결제: 6.50%

2\. 해외카드(Amex): 4.50%

3\. 해외카드(UnionPay): 4.10%

</Indent>

- 페이레터 가입비 (VAT별도)

<Indent level="1">

20만원 (페이레터 정책/ 최초 1회 과금)

</Indent>

#### **포트원 이용요금(VAT별도)**

<Indent level="1">

0.50% (minimum 500 USD)

- 코리아 포트원과 별도 계약이 필요 합니다.
- 전월 발생된 거래액 기준으로 청구 됩니다.

</Indent>

#### **정산주기**

- 해외카드(Visa, Master, JCB, Amex, UnionPay) : 매주 목요일 정산(익익주 전 일요일\~토요일 거래)
- 정산시 , 환율기준 : 정산 전 일 국민은행 10회차 고시 환율(전신환 매입율) 적용
- 롤링 리저브 : 10%, 180일\
  (일반 PG사의 보증보험의 개념으로, 정산금액의 10%를 180일동안 가지고 있다가 이후에 정산해주는 개념입니다)

#### 📌 결제대행사별 위험 업종유형을 참고 하세요!

- 결제대행사(PG) 계약을 위해서는 온라인 결제시 판매하는 서비스(상품) 유형을 1차적으로 심사를 하고 입점 가능여부가 결정됩니다.
- 결제대행사(PG)별 입점 심사 기준(RM)정책은 카드사 등록불가 업종 기준을 바탕으로 적용됩니다.

<Callout title="글로벌_페이레터_해외결제 제한 업종 보러가기 ↗" />

#### **글로벌\_페이레터 연동방법**

- [글로벌 포트원 가입 ↗ ](https://admin.portone.cloud/register) > 가입 후 테스트 연동을 위한 \[[글로벌 포트원 콘솔 ↗](https://admin.portone.cloud/)] 채널(PSP)정보 설정 및 결제 테스트 진행
- 참고가이드

<Indent level="1">

- [글로벌 포트원 콘솔 채널(PG) 정보 설정 방법  보러가기↗](https://www.docs.portone.cloud/docs/cross_border/cross_border_integration)
- [글로벌 포트원 결제 연동 메뉴얼 보러가기↗](https://www.docs.portone.cloud/docs/cross_border/cross_border_integration)
- [글로벌 포트원\_페이레터 테스트 연동정보 보러가기↗](https://www.docs.portone.cloud/docs/cross_border/cross_border_integration)
- [글로벌 포트원\_통합 콘솔 가이드 보러가기↗](https://docs.portone.cloud/docs/getting-started-2)

</Indent>

<Callout title="참고사항" content="1. 페이레터는 이용하실 결제(승인) 통화별로 PG상점아이디(MID)를 발급이 필요 합니다.
2.정기결제서비스 이용시, 실운영(Live)용 상점아이디(MID)를 페이레터로부터 발급받은 후 페이레터 측에서 포트원의 서버 아이피를 등록해야 하는 절차가 필요하고, (글로벌 포트원 서버 아이피-13.228.32.0)
3. 결제통화를 여러개 사용을 원하시면 “마스터-서브 머천트” 구조로 포트원의 계정을 개설하신 다음에, 
결제통화 별로 서브 머천트 형태로 계정을 설정해야 하니 이용에 참고 부탁 드립니다.
4. 카드사 심사시 영문/현지어 사이트와 해외카드 연동이 되어 있어야 합니다. " icon="💡" />

### **글로벌 포트원 콘솔 설정 및 결제창 예시**

- 글로벌 포트원 콘솔 설정화면 예시





- **글로벌 포트원 페이레터 결제창 예시**

<Indent level="1">

- ‘페이레터’ 에서 제공하는 결제창이 호출 됩니다.
- 페이레터 결제창 내의 \[CreditCard(3DS]를 클릭하시면 일반(인증)결제 방식으로 결제가 진행되고,\
  \[CreditCard]클릭시 비인증결제 모듈로 카드정보 입력하는 화면이 보여지고 빌링키 발급이 가능합니다.

</Indent>





- **글로벌 포트원 DCC 설정 및 결제창 기능 적용예시**





<Callout title="글로벌_해외결제 대행사별 위험업종 유형 보러가기 ↗" />
