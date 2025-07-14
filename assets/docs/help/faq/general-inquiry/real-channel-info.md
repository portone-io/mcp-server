---
title: 계약 후 어떤 상점정보를 발급받게 되나요?
category: 자주 묻는 질문 (일반 문의) > 일반 문의 > 자주 묻는 질문
seo:
  title: 계약 후 발급되는 상점정보
  description: >-
    상점아이디와 함께 알면 좋은 연동정보, 각 PG사에서 발급해주는 Key값 등 계약 후 발급되는 상점정보에 대해 추가적으로 포트원이
    안내드립니다.
tags:
  - 공통
  - 상점정보
pgCompanies:
  - 공통
searchTags:
  - 사이트코드
  - 상점아이디용어
  - 용어설명
  - 결제대행사상점정보
datetime: 2024-01-25T15:00:00.000Z
---

<Callout content="결제대행사에서는 계약이 완료되면 고객사별로 상점 정보를 발급합니다.
결제대행사별로 어떤 상점 정보가 발급되는지, 상점아이디를 부르는 명칭은 어떻게 다른지 안내드립니다." />

### **상점아이디를 의미하는 용어**

아래 용어는 모두 상점아이디를 의미합니다.

- MID
- CPID
- 서비스ID
- CID
- 사이트코드
- 상점ID (파트너 ID)
- 머천트ID
- ID
- API 사용자 이름
- Account ID

### **상점아이디와 함께 발급되는 정보**

결제대행사에서는 상점아이디와 함께 필요한 추가적인 상점 정보를 발급하는 곳이 존재합니다.\
직접 결제대행사에서 발급하지 않더라도 결제대행사 상점관리자 페이지 안에서 조회한 후 설정해 주셔야 하는 값도 존재합니다.

- NHN KCP : 사이트코드 / 사이트키
- KG이니시스 : MID / 웹표준결제 signKey / 빌링용 merchant key (정기결제 이용시 발급)
- 나이스페이먼츠 : MID / KEY / 결제취소 비밀번호(구모듈에서 사용. 별도 설정 필요)
- 다날\_카드/계좌이체/가상계좌 : CPID / 계좌이체 · 가상계좌 암호화 KEY / 신용카드 암호화 KEY
- 다날\_휴대폰결제 : CPID / PWD / 아이템코드
- 다날\_SMS본인인증 : CPID / CPPWD
- 토스페이먼츠(구모듈) : MID / Mertkey
- 토스페이먼츠(신모듈) : MID / 시크릿 키 / 클라이언트 키
- 이지페이(KICC) : MID
- 카카오페이 : CID
- 네이버페이(주문형) : 파트너ID / 가맹점 인증키
- 네이버페이(결제형) : 파트너 ID / ClientID / Client Secret
- KG모빌리언스 : 서비스ID / 정기결제용 서비스ID (정기결제 이용시 발급)
- 블루월넛 : MID / KEY / 결제취소 비밀번호
- 페이코 : CPID / ProductID / SellerKey
- 스마일페이 : MID / merchantEncKey / merchantHashKey 서명키
- 헥토파이낸셜 : MID / 라이센스키 (전문 해쉬 키) / 암호화 키
- 토스페이 : MID / API Key
- 키움페이 : CPID / 결제연동키
- 스마트로 : MID / Key / 거래취소 비밀번호
- KSNET : MID / apiKey
- 웰컴페이먼츠 : MID/ Sign Key / 필드 암호화 IV / 필드 암호화 Key
- 엑심베이(Eximbay) : MID / Secret Key
- 페이팔 (Express Checkout) : API Username / API Password / Signature / Email계정 주소
- 페이팔 (SPB/RT) : Account ID
- 페이먼트월(Paymentwall) : Project Key / Secret Key
