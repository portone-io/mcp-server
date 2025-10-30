---
title: 나이스정보통신을 통한 간편결제 연동방법
category: 결제서비스 (채널설정 및 이용안내) > 결제유형 > 간편결제
tags:
  - 나이스정보통신
  - 간편결제
pgCompanies:
  - 나이스정보통신
searchTags:
  - 간편결제창 바로 호출
  - 나이스페이
  - 결제창
  - 나이스정보통신
  - 간편결제
datetime: 2024-07-08T05:47:06.710Z
---

**나이스페이를 통하여 간편결제서비스를 이용하시는 경우 아래 두가지 방법으로 연동이 가능합니다.**\ <Highlight text="나이스페이는 (구)모듈과 (신)모듈에 따라 지원가능한 간편결제" /> **가 상이하오니 유의하시어 연동부탁드립니다.**

**1) 나이스페이 결제창 안에서 간편결제를 이용**\
**2) 간편결제창을 직접 띄우는 방법**

## **(구)나이스정보통신**

#### **1.  나이스정보통신 결제창 내 간편결제 서비스 이용**

- pg : nice.상점아이디
- pay\_method : '**card**'

<Callout content="꼭 확인해주세요!
위 예시 화면은 범용적으로 모든 가맹점이 사용할 수 있도록 제공되는 결제창으로, 
포트원를 통한 (구)나이스페이 이용시 간편결제는 ‘카카오페이’ 만 지원가능합니다." icon="💡" title="참고사항 " />



#### **2. 직접 간편결제 모듈 호출하는 방식 이용(**<Highlight text="간편결제창 바로 호출!" />**)**

- pg : nice.상점아이디
- pay\_method

<Indent level="1">

- kakaopay

</Indent>

## **(신)나이스정보통신**

#### **1.  나이스정보통신 결제창 내 간편결제 서비스 이용**

- pg : nice\_v2.상점아이디
- pay\_method : '**card**'

#### **2. 직접 간편결제 모듈 호출하는 방식 이용 (**<Highlight text="간편결제창 바로 호출!" />**)**

- pg : nice\_v2.상점아이디
- pay\_method 

<Indent level="1">

- naverpay\_card (네이버페이 - 카드)
- naverpay\_point (네이버페이 - 포인트)
- kakaopay (카카오페이)
- payco (페이코)
- samsungpay (삼성페이는 카드수수료의 0.3%가 추가적으로 부과 됩니다(삼성페이 정책))
- skpay (SKPAY)
- ssgpay (SSGPAY)
- ssgpay\_bank (SSGPAY 은행계좌)
- lpay (LPAY)
- applepay (애플페이)

</Indent>
