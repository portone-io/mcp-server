---
title: 결제대행사 선택하여 연동하기
description: 각 PG사별 결제 연동 방법을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/readme
---

하위 페이지에서 각 PG사별 결제 연동 방법을 확인할 수 있습니다.

## PG사별 지원되는 결제 수단 정보

### 결제

#### 결제대행사

- **토스페이먼츠**

  - 연동 기능: 인증결제(결제창) / 비인증결제(API) / 정기결제(결제창/API) / 간편결제(결제창/다이렉트 호출)

  - 결제 수단

    - 결제창 일반결제 : 카드 / 퀵계좌이체 / 가상계좌 / 휴대폰 소액결제 / 상품권(컬쳐랜드 / 스마트문상 / 도서문화상품권)
    - 결제창 수기(키인)결제 : 카드
    - API 수기(키인)결제 : 카드 / 가상계좌
    - 결제창/API 정기결제 : 카드
    - 간편결제 허브형 : 카카오페이 / 네이버페이 / 페이코 / SSGPay / LPay / 삼성페이 / 애플페이 / 토스페이

- **KSNET**

  - 연동 기능: 인증결제(결제창) / 비인증결제(API) / 정기결제(API) / 간편결제(결제창/다이렉트 호출)

  - 결제 수단

    - 결제창 일반결제 : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
    - API 수기(키인)결제 : 카드 / 가상계좌
    - API 정기결제 : 카드
    - 간편결제 허브형 : 카카오페이 / 네이버페이 /  페이코 / SSGPay / LPay

- **스마트로**

  - 연동 기능: 인증결제(결제창) / 비인증결제(API) / 정기결제(결제창/API) / 간편결제(결제창/다이렉트 호출)

  - 결제 수단

    - 결제창 일반결제 : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
    - API 수기(키인)결제 : 가상계좌
    - 결제창/API 정기결제 : 카드
    - 간편결제 허브형 : 카카오페이 / 네이버페이 / 페이코 / LPay / 핀페이

- **나이스페이먼츠**

  - 연동 기능: 인증결제(결제창) / 비인증결제(API) / 정기결제(API) / 간편결제(결제창/다이렉트 호출)

  - 결제 수단

    - 결제창 일반결제 : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제 / 상품권(컬쳐랜드)
    - 결제창 정기결제 : 카카오페이 / 네이버페이
    - API 수기(키인)결제 : 카드 / 가상계좌
    - API 정기결제 : 카드
    - 간편결제 허브형 : 카카오페이 / 네이버페이 / 페이코 / SSGPay / LPay / 삼성페이 / 애플페이 / 11Pay / 토스페이

- **KG이니시스**

  - 연동 기능 : 인증결제(결제창) / 비인증결제(API) / 정기결제(결제창/API) / 간편결제(결제창/다이렉트 호출)

  - 결제 수단

    - 결제창 일반결제: 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 결제 / 상품권 결제(컬처랜드/스마트문상/도서문화상품권)
    - API 수기(키인)결제: 카드 / 가상계좌
    - 결제창/API 정기결제: 카드 / 휴대폰
    - 간편결제 허브형: 카카오페이 / 네이버페이 / 토스페이 / 삼성페이 / SSGpay / L.Pay / 애플페이 / 페이코

- **KG이니시스 일본결제**

  - 연동 기능 : 인증결제(결제창) / 간편결제(결제창)

  - 결제 수단

    - 결제창 일반결제: 카드 / 편의점결제
    - 간편결제 허브형: RakutenPay, Amazon Pay, Paypay, dBarai, Au Pay, Merpay

- **한국결제네트웍스(KPN)**

  - 연동 기능 : 인증결제(결제창) / 비인증결제(API) / 정기결제(결제창/API) / 간편결제(결제창/다이렉트 호출)

  - 결제 수단

    - 결제창 일반결제: 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 결제
    - API 수기(키인)결제: 카드 / 가상계좌
    - 결제창/API 정기결제: 카드
    - 간편결제 허브형: 카카오페이 / 네이버페이 / 토스페이 / 삼성페이 / 페이코

- **NHN KCP**

  - 연동 기능 : 인증결제(결제창) / 비인증결제(API) / 정기결제(결제창/API) / 간편결제(결제창/다이렉트 호출)

  - 결제 수단

    - 결제창 일반결제: 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 결제
    - API 수기(키인)결제: 카드 / 가상계좌
    - 결제창/API 정기결제: 카드
    - 간편결제 허브형: 카카오페이 / 네이버페이 / 토스페이 / 삼성페이 / SSGpay / L.Pay / 애플페이 / 페이코

- **엑심베이**

  - 연동 기능 : 인증결제(결제창) / 간편결제(결제창/다이렉트 호출)

  - 결제 수단

    - 결제창 일반결제: 카드 / 실시간 계좌이체 / 가상계좌
    - 간편결제 허브형: 카카오페이 / 토스페이 / 페이코

#### 간편결제 직연동

- **카카오페이**

  - 연동 기능: 간편결제(결제창)

  - 결제 수단

    - 간편결제: 카카오페이

- **네이버페이**

  - 연동 기능: 간편결제(결제창)

  - 결제 수단

    - 간편결제: 네이버페이

- **토스페이**

  - 연동 기능 : 간편결제(결제창)

  - 결제 수단

    - 간편결제 : 토스페이

- **하이픈**

  - 연동 기능 : 간편결제(결제창)

  - 결제 수단

    - 간편결제 : 바로계좌결제

#### 해외결제

- **페이팔**

  - 연동 기능 : 인증결제(결제창) / 정기결제(결제창)

  - 결제 수단

    - 해외결제 일반결제 / 정기결제 : 카드 / 계좌이체 (구매자 페이팔 계정에 등록 후 사용 가능)

- **엑심베이**

  - 연동 기능 : 인증결제(결제창) / 정기결제(결제창)

  - 결제 수단

    - 해외결제 일반결제 : 카드 / 유니온페이 / 알리페이 / 위챗페이 / 일본 편의점 결제 등
    - 해외결제 정기결제 : 카드

- **페이레터**

  - 연동 기능 : 인증결제(결제창) / 정기결제(결제창/API)

  - 결제 수단

    - 해외결제 일반결제 : 카드 / 유니온페이 / 알리페이 / 위챗페이
    - 해외결제 정기결제 : 카드 / 유니온페이

### 본인인증

- **다날 본인인증**

  - 연동 기능: SMS 문자 메세지를 통한 본인인증 / PASS APP을 통한 본인인증

  - 본인인증 수단

    - SDK 본인인증: SMS / PASS
    - API 본인인증: SMS / PASS

- **이니시스 통합인증**

  - 연동 기능: 민간인증서 및 PASS APP을 통한 본인인증

  - 본인인증 수단

    - SDK 본인인증만 지원
