---
title: 토스페이먼츠(신모듈)을 통한 간편결제 연동방법
category: 자주 묻는 질문 (일반 문의) > 결제서비스 > 결제서비스
tags:
  - 연동
  - 간편결제
searchTags:
  - 결제창
  - 간편결제창
  - 간편결제 연동
  - 토스페이먼츠
datetime: 2024-07-10T08:44:51.247Z
---

<Callout content="토스페이먼츠를 통하여 간편결제서비스를 이용하시는 경우,
토스페이먼츠의 결제창안에서 간편결제를 이용하는 방법과 간편결제창을 직접 띄우는 방법이 있습니다.
방법별로 연동방법은 아래를 참고해주시기 바랍니다." />

<Tag text="결제서비스 V1" />

#### 1. 결제창 내 간편결제 서비스 이용 (<Highlight text="결제창 안에서 선택!" />)

- pg : tosspayments
- pay\_method : 'card'

#### 2. 직접 간편결제 모듈 호출하는 방식 이용 (<Highlight text="간편결제창 바로 호출!" />)

- pg : tosspayments
- pay\_method
  \- kakaopay (카카오페이)
  \- tosspay (토스페이)
  \- naverpay (네이버페이)
  \- payco (페이코)
  \- lpay (Lpay)
  \- ssgpay (SSG페이)
  \- lgpay (LG페이)
  \- samsungpay (삼성페이) \
  (삼성페이는 카드수수료의 0.3%가 추가적으로 부과 됩니다\_삼성페이 정책)

<Tag text="결제 서비스 V2" />

#### 1. 결제창 내 간편결제 서비스 이용 (<Highlight text="결제창 안에서 선택!" />)

- channelKey : 포트원 콘솔 > 결제연동 > 설정한 토스페이먼츠 “<Highlight text="채널 키 (Channel Key)" />”에서 조회 가능
- payMethod : “<Highlight text="CARD" />” (대소문자 구분필요)

<Callout icon="💡" title="참고사항" content="토스페이먼츠의 경우 일반카드와 애플페이만 동시 노출되며 그 외 간편결제는 다른 MID(간편결제용 MID)로 발급되기 때문에, 간편결제만 결제창 내 노출되는 점 참고부탁드립니다.

1) 일반카드 / 애플페이 노출되는 결제창
2) (설정된) 간편결제만 노출되는 결제창" />

#### 2. 직접 간편결제 모듈 호출하는 방식 이용 (<Highlight text="간편결제창 바로 호출!" />)

- channelKey : 포트원 콘솔 > 결제연동 > 설정한 토스페이먼츠 “<Highlight text="채널 키 (Channel Key)" />”에서 조회 가능
- payMethod : "EASY\_PAY”
- "easyPay" : 파라미터 값 "easyPayProvider": "간편결제 코드"

<Indent level="1">

- SAMSUNGPAY (삼성페이)
- APPLEPAY (애플페이)
- SSGPAY (SSGPAY)
- KAKAOPAY (KAKAOPAY)
- NAVERPAY (NAVERPAY)
- LPAY (LPAY)
- TOSSPAY (TOSSPAY)
- LGPAY (LGPAY)

</Indent>

[V2 토스페이먼츠 연동 매뉴얼 보러가기 ↗](https://developers.portone.io/opi/ko/integration/pg/v2/tosspayments?v=v2)

[V1 토스페이먼츠(신모듈) 연동 매뉴얼 보러가기 ↗](https://developers.portone.io/opi/ko/integration/pg/v1/newtoss/readme?v=v1)
