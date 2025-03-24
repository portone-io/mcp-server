---
title: PortOne 개발자센터 문서 가이드
description: PortOne 개발자센터 문서를 올바르게 활용하기 위한 가이드와 목차를 제공합니다.
targetVersions:
  - v1
  - v2
date: 2025-03-24
author: PortOne
---

# 포트원 개발자센터

> 포트원(PortOne)은 온라인 결제, 본인인증, 파트너 정산 자동화 및 재무/회계 업무를 위한 API와 SDK를 제공하는 서비스입니다.

1. 이 문서는 포트원 개발자센터 문서의 포괄적인 목록을 담고 있으며, 스키마 파일, 공통 문서, V2 문서, V1 문서, 릴리스 노트, 블로그 게시물 등의 섹션으로 구성되어 있습니다.

2. 각 링크는 제목과 URL, 설명을 포함하는 형식으로 구성되어 있습니다

3. 온라인 결제 및 본인인증에 관련해서는 버전(V1, V2)을 올바르게 파악하는 것이 아주 중요합니다. 사용자 질의에 관련된 섹션(V1, V2, 공통 등)을 확실하게 파악한 후 해당 버전의 문서와 공통 문서 내용을 제공 및 활용하세요.

   - 버전이 파악되지 않은 경우 사용자에게 질의하여 버전을 먼저 확인하고, 그럴 수 없는 불가피한 경우 공통 문서 또는 최신 버전인 V2 문서를 우선적으로 활용하세요.

4. API 및 SDK 스키마를 조회하고 싶은 경우 해당 버전의 스키마 파일에서 YAML, JSON, GraphQL SDL 형식으로 정확하게 확인할 수 있습니다.

5. 사용자에게 문서 레퍼런스를 URL로 제공할 때는 마크다운 파일 링크가 아닌, 개발자센터 웹사이트 URL을 사용하세요.

   - `.md`로 끝나는 URL은 마크다운 파일 링크입니다. 마크다운 파일 링크에서 마지막 `.md`를 제거하면 웹사이트 URL로 사용할 수 있습니다.
   - 단, `_components` 가 URL에 포함된 경우 웹사이트 URL로 사용할 수 없음에 주의하세요.
   - 사용자가 원하는 버전(V1, V2)이 특정되었다면 `?v=v2`, `?v=v1` 쿼리 파라미터를 추가하여 URL로 제공하세요.
   - hostname이 누락된 URL의 경우 `https://developers.portone.io`를 추가하세요.

6. 이미지, 파일 다운로드 링크 등이 마크다운 문서에는 누락될 수 있습니다. 해당 내용을 조회해야 하는 경우 개발자센터 웹사이트에서 확인해야 합니다.

## 스키마 파일

### V2 스키마 파일

- [V2 브라우저 SDK 스키마](https://developers.portone.io/schema/browser-sdk.yml)
- [V2 GraphQL 스키마](https://developers.portone.io/schema/v2.graphql)
- [V2 OpenAPI YAML](https://developers.portone.io/schema/v2.openapi.yml)
- [V2 OpenAPI JSON](https://developers.portone.io/schema/v2.openapi.json)

### V1 스키마 파일

- [V1 OpenAPI YAML](https://developers.portone.io/schema/v1.openapi.yml)
- [V1 OpenAPI JSON](https://developers.portone.io/schema/v1.openapi.json)

## 공통 문서 (V1 & V2)

- [포트원 SDK 소개](https://developers.portone.io/sdk/ko/readme): 포트원에서 제공하는 SDK 가이드입니다.
- [API 하위호환성 지원](https://developers.portone.io/api/backward-compatibility): 포트원이 보장하는 V1, V2 API 하위호환성에 대한 내용입니다.
- [PG 거래대사 가이드](https://developers.portone.io/opi/ko/etc/recon): PG 거래대사는 PG사와 간편결제사로부터 정산 받는 금액 및 상세내역을 포트원 콘솔에서 PG가 여러 개여도 한 번에 자동 대사된 데이터를 확인할 수 있는 통합 조회 서비스입니다.
- [포트원 결제 연동 Doc](https://developers.portone.io/opi/ko/readme): 포트원 결제 연동 가이드입니다. 빠른 시간 안에 결제를 연동할 수 있게 도와드립니다.
- [직접 문의하기](https://developers.portone.io/opi/ko/support/contact): 기술지원 문의를 위한 연락처 정보입니다.
- [TLS 지원 범위](https://developers.portone.io/opi/ko/support/tls-support): 포트원 v1 API의 TLS 지원 범위 및 설정 가이드를 확인할 수 있습니다.
- [상점 계정 관리](https://developers.portone.io/opi/ko/console/guide/account): 포트원 콘솔에서 하위 상점을 생성하여 상점별로 결제 거래 건을 분리하여 관리할 수 있으며, 해당 상점을 관리할 수 있는 계정을 별도로 생성하여 권한을 나눌 수 있습니다. 이에 대해 안내합니다.
- [빌링결제 내역 조회](https://developers.portone.io/opi/ko/console/guide/billing-payments): 포트원을 통해 발생한 빌링키 결제 내역을 상태별로 조회하고 결제 예약일 변경, 예약 해지, 결제 재시도, 결제 재예약 기능을 이용하여 빌링 결제 건을 관리할 수 있으며, 결제 실패 건에 대한 일괄 재시도를 자동화해주는 리커버리 기능에 대해 안내합니다.
- [연동 정보](https://developers.portone.io/opi/ko/console/guide/channel-manage): 포트원 결제 모듈을 사용하기 위한 연동 설정을 관리할 수 있습니다. 결제대행사 채널 관리, 식별코드 및 API Keys, 결제알림(웹훅) 관리, 추가 설정 관리 방법에 대해 안내합니다. 
- [홈](https://developers.portone.io/opi/ko/console/guide/home): 포트원 콘솔 홈화면에서는 결제 현황 대시보드, 공지사항, FAQ, 포트원 새소식, 포트원 서비스 가이드 링크를 제공하고 있으며, 이에 대해 안내합니다.
- [연동 관리](https://developers.portone.io/opi/ko/console/guide/integration): 포트원 결제 모듈을 사용하기 위한 연동 설정을 관리할 수 있습니다. 결제대행사 채널 관리, 식별코드 및 API Keys, 결제알림(웹훅) 관리, 추가 설정 관리 방법에 대해 안내합니다. 
- [결제](https://developers.portone.io/opi/ko/console/guide/pay): 포트원을 관리자콘솔을 통해 발생한 거래를 조회 및 관리하는 방법을 안내합니다.
- [결제 내역 조회](https://developers.portone.io/opi/ko/console/guide/payments): 포트원을 통해 발생한 결제 내역을 상태별로 조회하고, 부분 취소 및 전체 취소 기능을 이용하여 결제 건을 관리할 수 있으며, 이에 대해 안내합니다.
- [프로모션](https://developers.portone.io/opi/ko/console/guide/promotion): 카드사 할인을 사용하기 위한 프로모션 설정을 관리할 수 있습니다. 관리자콘솔 내 프로모션 설정 방법을 안내합니다.
- [관리자 콘솔 소개](https://developers.portone.io/opi/ko/console/guide/readme): 포트원 관리자 콘솔 사용법을 안내합니다.
- [전자결제 신청](https://developers.portone.io/opi/ko/console/guide/reg): 결제대행사 및 결제수단을 선택하고 전자결제를 신청하는 과정을 안내합니다.
- [프로모션 생성하기](https://developers.portone.io/opi/ko/extra/promotion/console-guide): 프로모션 기간, 예산, 할인 조건 등 설정 방법을 안내합니다.
- [프로모션 결제 연동하기](https://developers.portone.io/opi/ko/extra/promotion/integration): 프로모션 할인금액을 적용하는 방법을 안내합니다.
- [프로모션](https://developers.portone.io/opi/ko/extra/promotion/intro): 카드 즉시 할인을 쉽게 운영 및 관리할 수 있는 서비스입니다.
- [스마트 라우팅 - 콘솔 가이드](https://developers.portone.io/opi/ko/extra/smart-routing/console-guide): 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
- [스마트 라우팅 - 연동하기](https://developers.portone.io/opi/ko/extra/smart-routing/integration): 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
- [스마트 라우팅](https://developers.portone.io/opi/ko/extra/smart-routing/intro): 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
- [결제 연동 준비하기](https://developers.portone.io/opi/ko/integration/ready/readme): 포트원을 이용한 연동 개발이 처음이시라면 아래 안내 사항에 따라 진행하세요.
- [가상계좌 입금통보 설정](https://developers.portone.io/opi/ko/integration/virtual-account/readme): 결제대행사별 입금통보 URL을 안내합니다.
- [퀵 가이드](https://developers.portone.io/opi/ko/quick-guide/payment): 결제연동 퀵 가이드
- [결제대행사별 연동 정보 확인하기 - KG이니시스](https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/inicis)
- [결제대행사별 연동 정보 확인하기 - 토스페이먼츠 (신모듈)](https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/tosspayments)

## V2 문서

### V2 문서 SDK

- [모바일 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-mobile-sdk/readme): 결제창 연동시 사용되는 SDK에 대한 설명 문서입니다.
- [서버 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-server-sdk/readme): 웹훅 및 REST API 연동시 사용되는 SDK에 대한 설명 문서입니다.
- [requestIssueBillingKeyAndPay 요청 형식](https://developers.portone.io/sdk/ko/v2-sdk/billing-key-and-pay-request): requestIssueBillingKeyAndPay 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
- [requestIssueBillingKeyAndPay 응답 형식](https://developers.portone.io/sdk/ko/v2-sdk/billing-key-and-pay-response): requestIssueBillingKeyAndPay 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
- [requestIssueBillingKey 요청 형식](https://developers.portone.io/sdk/ko/v2-sdk/billing-key-request): requestIssueBillingKey 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
- [requestIssueBillingKey 응답 형식](https://developers.portone.io/sdk/ko/v2-sdk/billing-key-response): requestIssueBillingKey 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
- [버전별 Changelog](https://developers.portone.io/sdk/ko/v2-sdk/changelog): @portone/browser-sdk 패키지의 버전별 변경 사항을 확인하세요.
- [requestIdentityVerification 요청 형식](https://developers.portone.io/sdk/ko/v2-sdk/identity-verification-request): requestIdentityVerification 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
- [requestIdentityVerification 응답 형식](https://developers.portone.io/sdk/ko/v2-sdk/identity-verification-response): requestIdentityVerification 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
- [loadIssueBillingKeyUI 요청 형식](https://developers.portone.io/sdk/ko/v2-sdk/load-issue-billing-key-ui-request): loadIssueBillingKeyUI 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
- [loadIssueBillingKeyUI 응답 형식](https://developers.portone.io/sdk/ko/v2-sdk/load-issue-billing-key-ui-response): loadIssueBillingKeyUI 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
- [loadPaymentUI 요청 형식](https://developers.portone.io/sdk/ko/v2-sdk/load-payment-ui-request): loadPaymentUI 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
- [loadPaymentUI 응답 형식](https://developers.portone.io/sdk/ko/v2-sdk/load-payment-ui-response): loadPaymentUI 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
- [requestPayment 요청 형식](https://developers.portone.io/sdk/ko/v2-sdk/payment-request): requestPayment 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
- [requestPayment 응답 형식](https://developers.portone.io/sdk/ko/v2-sdk/payment-response): requestPayment 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
- [JavaScript SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-sdk/readme): 결제창 연동시 사용되는 SDK에 대한 설명 문서입니다.
- [updateLoadIssueBillingKeyUIRequest 요청 형식](https://developers.portone.io/sdk/ko/v2-sdk/update-load-issue-billing-key-ui-request): updateLoadIssueBillingKeyUIRequest 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
- [updateLoadPaymentUIRequest 요청 형식](https://developers.portone.io/sdk/ko/v2-sdk/update-load-payment-ui-request): updateLoadPaymentUIRequest 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
- [V2 JavaScript SDK 설치하기](https://developers.portone.io/sdk/ko/v2-sdk/_components/sdk-installation): 웹 브라우저에서 결제창 연동 시 사용되는 SDK 설치 방법을 안내합니다.

### V2 문서 통합 가이드

- [스마트 라우팅](https://developers.portone.io/opi/ko/console/guide/smartrouting): 포트원 스마트 라우팅을 사용하기 위한 그룹 설정을 관리할 수 있습니다. 관리자콘솔 내 스마트 라우팅 그룹 설정 방법을 안내합니다.
- [컨펌 프로세스](https://developers.portone.io/opi/ko/extra/confirm-process/readme-v2): 결제승인의 주체를 고객사 서버로 가져갈수 있는 서비스 입니다.
- [본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/readme-v2): 포트원을 이용하여 간편하게 본인인증을 연동하는 방법을 확인합니다.
- [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2): 웹훅 알림을 받아 결제 정보를 동기화할 수 있습니다.
- [다날 본인인증](https://developers.portone.io/opi/ko/integration/pg/v2/danal-identity-verification): 다날 본인인증 연동 방법을 안내합니다.
- [엑심베이](https://developers.portone.io/opi/ko/integration/pg/v2/eximbay-v2): 엑심베이 결제 연동 방법을 안내합니다.
- [하이픈](https://developers.portone.io/opi/ko/integration/pg/v2/hyphen): 하이픈 결제 연동 방법을 안내합니다.
- [KG이니시스 통합인증](https://developers.portone.io/opi/ko/integration/pg/v2/inicis-unified-identity-verification): KG이니시스 통합인증 연동 방법을 안내합니다.
- [KG이니시스](https://developers.portone.io/opi/ko/integration/pg/v2/inicis-v2): KG이니시스 결제 연동 방법을 안내합니다.
- [카카오페이](https://developers.portone.io/opi/ko/integration/pg/v2/kakaopay): 카카오페이 간편결제 연동 방법을 안내합니다.
- [NHN KCP](https://developers.portone.io/opi/ko/integration/pg/v2/kcp-v2): NHN KCP 연동 방법을 안내합니다.
- [한국결제네트웍스(KPN)](https://developers.portone.io/opi/ko/integration/pg/v2/kpn): 한국결제네트웍스(KPN) 결제 연동 방법을 안내합니다.
- [KSNET](https://developers.portone.io/opi/ko/integration/pg/v2/ksnet): KSNET 결제 연동 방법을 안내합니다.
- [네이버페이 (결제형)](https://developers.portone.io/opi/ko/integration/pg/v2/naverpay): 네이버페이 간편결제 연동 방법을 안내합니다.
- [나이스페이먼츠](https://developers.portone.io/opi/ko/integration/pg/v2/nice-v2): 나이스페이먼츠 결제 연동 방법을 안내합니다.
- [페이팔](https://developers.portone.io/opi/ko/integration/pg/v2/paypal-v2): 페이팔 결제 연동 방법을 안내합니다.
- [결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v2/readme): 각 PG사별 결제 연동 방법을 확인할 수 있습니다.
- [스마트로](https://developers.portone.io/opi/ko/integration/pg/v2/smartro-v2): 스마트로 결제 연동 방법을 안내합니다.
- [토스페이](https://developers.portone.io/opi/ko/integration/pg/v2/tosspay-v2): 토스페이 간편결제 연동 방법을 안내합니다.
- [토스페이먼츠](https://developers.portone.io/opi/ko/integration/pg/v2/tosspayments): 토스페이먼츠 결제 연동 방법을 안내합니다.
- [V2 JavaScript SDK 설치하기](https://developers.portone.io/opi/ko/integration/start/_components/sdk-installation): 웹 브라우저에서 결제창 연동 시 사용되는 SDK 설치 방법을 안내합니다.
- [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout): PG 결제창을 이용하는 인증 결제를 연동합니다.
- [수기(키인) 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/keyin): 구매자 인증 없이 결제 수단 정보만으로 결제를 요청합니다.
- [결제 연동 시작하기](https://developers.portone.io/opi/ko/integration/start/v2/readme): 새롭게 출시된 V2 결제 서비스를 소개합니다.
- [결제대행사별 연동 정보 확인하기 - 하이픈](https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/hyphen)
- [결제대행사별 연동 정보 확인하기 - NHN KCP (V2)](https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/kcp-v2)
- [결제대행사별 연동 정보 확인하기 - 페이팔 (V2)](https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/paypal-v2)
- [1. 빌링키 발급하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/issue): 결제창 또는 API를 이용하여 빌링키를 발급할 수 있습니다.
- [2. 결제 요청하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/payment): 포트원 빌링키 결제 API를 사용해 바로 결제를 요청합니다.
- [빌링키 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/readme): 카드 혹은 휴대 전화 정보를 이용하여 빌링키를 발급하고, 빌링키를 이용해 결제를 요청하는 방법을 안내합니다.
- [3. 예약/반복결제 구현하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/schedule): 발급한 빌링키로 예약/반복결제를 구현하는 방법을 안내합니다.

## V1 문서

### V1 문서 SDK

- [모바일 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v1-mobile-sdk/readme): 포트원에서 제공하는 네이티브 모바일 SDK(플러그인)를 통해 포트원 서비스를 연동할 수 있습니다.
- [본인인증 결과 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft-rt): 본인인증 요청에 대해 반환되는 응답 정보를 확인합니다.
- [본인인증 요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft): 본인인증 요청에 필요한 파라미터 정보를 확인합니다.
- [모듈 로드 결과 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/load-module-rt): 모듈로드 요청에 대해 반환되는 응답정보를 확인합니다.
- [모듈 로드 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/load-module): PG사의 모듈 로딩에 필요한 파라미터 정보를 가져옵니다.
- [결제요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq): 결제요청 파라미터를 확인 할 수 있습니다.
- [결제응답 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrt): callback 으로 내려가는 응답 파라미터 항목을 확인할 수 있습니다.
- [JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme): 결제창 연동시 호출 및 응답 파라미터를 확인 할 수 있습니다.
- [Javascript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme): 결제창 연동시 호출 및 응답 파라미터를 확인 할 수 있습니다.

### V1 문서 API 레퍼런스

- [V1 API 인증 방법](https://developers.portone.io/api/rest-v1/_components/v1auth): 포트원 V1 API 사용 시 인증 방법에 관한 내용입니다.

### V1 문서 통합 가이드

- [복수 PG설정 및 사용하기](https://developers.portone.io/opi/ko/console/pg): 복수 PG를 사용하는 경우 설정방법을 확인할 수 있습니다.
- [대표상점과 하위상점](https://developers.portone.io/opi/ko/support/agency-and-tier): 대표상점과 하위상점 설정에 대한 안내 입니다.
- [포트원 결제 플로우](https://developers.portone.io/opi/ko/support/flow): PG사 직연동과 포트원 연동시의 결제 플로우 차이점을 확인할 수 있습니다.
- [리디렉션이란?](https://developers.portone.io/opi/ko/support/redirect): 리디렉션의 정의를 자세히 확인할수 있습니다.
- [면세금액 결제방법](https://developers.portone.io/opi/ko/support/tax): 결제 요청 시 상황에 맞게 면세 금액를 설정할 수 있는 방법을 설명합니다.
- [내 식별코드, API Keys](https://developers.portone.io/opi/ko/console/guide/api-keys)
- [결제 연동 하기](https://developers.portone.io/opi/ko/console/guide/connect)
- [결제 내역](https://developers.portone.io/opi/ko/console/guide/list): 결제가 이루어진 거래내역을 조회할 수 있는 메뉴입니다.
- [컨펌 프로세스](https://developers.portone.io/opi/ko/extra/confirm-process/readme-v1): 결제요청의 주체를 고객사 서버로 가져갈수 있는 서비스 입니다.
- [결제 URL 생성하기](https://developers.portone.io/opi/ko/extra/link-pay/readme-v1): 결제 URL 생성 API 사용법을 안내합니다.
- [플러그인을 통해 포트원 이용하기](https://developers.portone.io/opi/ko/extra/plugins/readme-v1): 여러 플랫폼의 플러그인을 통해 포트원을 이용하는 방법을 안내합니다.
- [프로모션 결제 취소하기](https://developers.portone.io/opi/ko/extra/promotion/refund): 프로모션을 적용하여 승인된 결제건들에 대하여 취소/환불하는 방법을 안내합니다.
- [오픈 전 체크리스트](https://developers.portone.io/opi/ko/integration/checklist/readme-v1): 결제 오픈전 자가진단을 해볼수 있는 오픈 전 체크사항 리스트 입니다.
- [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v1): 포트원 웹훅을 사용하여 포트원 서버에 저장된 결제 정보를 고객사 서버에 동기화하고 네트워크 불안정성을 보완하는 방법을 설명합니다.
- [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code): PortOne 에서 처리하는 카드사별 코드목록 입니다.
- [택배사 코드](https://developers.portone.io/opi/ko/support/code-info/code): 에스크로 배송등록에 필요한 택배사 코드표를 확인합니다.
- [PG사별 은행코드](https://developers.portone.io/opi/ko/support/code-info/pg-1): 각 PG사별 은행코드를 확인할 수 있습니다.
- [PG사 코드](https://developers.portone.io/opi/ko/support/code-info/pg-2): JavaScript SDK PG구분코드를 확인할 수 있습니다.
- [PG사 오류코드](https://developers.portone.io/opi/ko/support/code-info/pg-3): 각 PG사별 오류코드집을 내려받을 수 있습니다.
- [결제대행사별 빌링키 획득 규칙](https://developers.portone.io/opi/ko/support/code-info/pg): 결제대행사별 빌링키 획득 규칙을 안내합니다.
- [해외 카드코드](https://developers.portone.io/opi/ko/support/code-info/portone-code): 금융결제원 기관코드가 정의되어 있지 않은 해외 카드사 코드를 확인합니다.
- [코드 정보](https://developers.portone.io/opi/ko/support/code-info/readme): PG사/카드사/택배사/은행별 코드들을 확인할 수 있습니다.
- [자주 묻는 질문](https://developers.portone.io/opi/ko/support/faq/undefined): 고객사에서 빈번하게 물어보시는 질문을 확인 합니다.
- [본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/readme): 포트원을 이용하여 간편하게 본인인증을 연동하는 방법을 확인합니다.
- [Shopify 플러그인](https://developers.portone.io/opi/ko/extra/plugins/shopify/readme-v1): Shopify 플러그인을 통해 포트원을 사용하는 방법을 안내합니다.
- [결제버튼생성 플러그인](https://developers.portone.io/opi/ko/extra/plugins/wordpress/button)
- [Easy Digital Downloads 플러그인](https://developers.portone.io/opi/ko/extra/plugins/wordpress/edd): Easy Digital Downloads(EDD)용 플러그인을 통해 포트원과 연동합니다.
- [워드프레스 플러그인](https://developers.portone.io/opi/ko/extra/plugins/wordpress/readme-v1): 워드프레스 플러그인을 통해 포트원을 사용하는 방법을 안내합니다.
- [결제취소(환불) 연동하기](https://developers.portone.io/opi/ko/integration/cancel/v1/basic): 포트원 결제취소 API를 이용한 결제취소 방법을 안내합니다.
- [가상계좌 환불하기](https://developers.portone.io/opi/ko/integration/cancel/v1/virtual-account): 가상계좌 입금내역을 환불하는 방법을 확인합니다.
- [블루월넛](https://developers.portone.io/opi/ko/integration/pg/v1/blue): 블루월넛 결제 연동방법을 안내합니다.
- [다날](https://developers.portone.io/opi/ko/integration/pg/v1/danal): 다날 결제연동 방법을 안내합니다.
- [엑심베이](https://developers.portone.io/opi/ko/integration/pg/v1/eximbay): 엑심베이 결제 연동 방법을 안내합니다.
- [하이픈](https://developers.portone.io/opi/ko/integration/pg/v1/hyphen): 하이픈 결제 연동 방법을 안내합니다.
- [KG이니시스](https://developers.portone.io/opi/ko/integration/pg/v1/inicis): KG이니시스 결제창 연동 가이드입니다.
- [카카오페이](https://developers.portone.io/opi/ko/integration/pg/v1/kakaopay): 카카오페이 연동 방법을 안내합니다.
- [KG모빌리언스](https://developers.portone.io/opi/ko/integration/pg/v1/kg): KG모빌리언스 결제 연동 방법을 안내합니다.
- [이지페이(KICC)](https://developers.portone.io/opi/ko/integration/pg/v1/kicc): 이지페이(KICC) 결제창 연동 방법을 안내합니다.
- [네이버페이(결제형)](https://developers.portone.io/opi/ko/integration/pg/v1/naver): 네이버페이 결제형 연동 방법을 안내합니다.
- [NHN KCP](https://developers.portone.io/opi/ko/integration/pg/v1/nhn-kcp): NHN KCP 결제 연동 방법을 안내합니다.
- [(구) 나이스페이먼츠](https://developers.portone.io/opi/ko/integration/pg/v1/nice): (구) 나이스페이먼츠 결제창 연동 가이드를 안내합니다.
- [페이코](https://developers.portone.io/opi/ko/integration/pg/v1/payco): 페이코 결제 연동방법을 안내합니다.
- [페이먼트월](https://developers.portone.io/opi/ko/integration/pg/v1/paymentwall): 페이먼트월 결제창 연동가이드를 확인 합니다.
- [페이팔(Express Checkout)](https://developers.portone.io/opi/ko/integration/pg/v1/paypal): 페이팔(Express Checkout) 결제연동 방법을 안내합니다.
- [결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v1/readme): 각 결제대행사(PG)사별 결제 연동 방법 및 유의사항을 확인할 수 있습니다.
- [스마트로(구모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/smartro): 스마트로 연동 방법을 안내합니다.
- [스마일페이](https://developers.portone.io/opi/ko/integration/pg/v1/smilepay): 스마일페이 결제 연동방법을 안내합니다.
- [토스페이먼츠(구모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/toss): 토스페이먼츠 연동 방법을 확인합니다.
- [토스페이(tosspay)](https://developers.portone.io/opi/ko/integration/pg/v1/tosspay): 토스페이 연동 방법을 안내합니다.
- [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/auth): PG 결제창을 이용하는 인증 결제를 연동합니다.
- [비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth): 카드 정보를 직접 입력하여 일회성 결제 또는 빌링키를 발급 및 정기결제 이용 방법을 안내합니다.
- [결제 연동 시작하기](https://developers.portone.io/opi/ko/integration/start/v1/readme): 결제 연동을 시작합니다.
- [통합인증 준비하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/0): 통합인증 연동을 시작하기 위한 준비작업을 소개합니다.
- [통합인증 요청하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/1): 통합인증 페이지를 호출하는 방법을 확인합니다.
- [인증 완료정보 전달하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/2): 통합인증 이후 획득된 정보를 처리하는 방법을 안내합니다.
- [인증정보 조회 및 활용하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/3): 인증정보를 획득하고 활용하는 방법을 안내합니다.
- [통합인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/readme): 통합인증 기능을 구현하는 방법을 설명합니다.
- [1. 본인인증 준비하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/1): 신용카드 본인인증을 시작하기 위한 안내입니다.
- [2. 본인인증 요청하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/2): 신용카드 본인인증 창을 호출하는 방법을 안내합니다.
- [3. 인증 완료정보 전달하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/3): 신용카드 본인인증 이후 획득된 정보를 처리하는 방법을 안내합니다.
- [4. 인증정보 조회 및 활용하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/4): 인증정보를 획득하고 활용하는 방법을 안내합니다.
- [신용카드 본인인증 연동](https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/readme): 신용카드 본인인증 기능을 구현하는 방법을 설명합니다.
- [1. 본인인증 준비하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/1): 휴대폰 본인인증 연동을 위한 준비
- [2. 본인인증창 호출하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/2): 본인인증 창 호출방법을 안내합니다.
- [3. 인증 완료정보 전달하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/3): 휴대폰 본인인증 이후 획득된 정보를 처리하는 방법을 안내합니다.
- [4. 인증정보 조회 및 활용하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/4): 인증정보를 획득하고 활용하는 방법을 안내합니다.
- [휴대폰 본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/readme): 포트원을 이용하여 간편하게 휴대폰 본인인증을 연동하는 방법을 확인합니다.
- [PortOne(KR) 가입 및 PG 계약](https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-1): Shopify 연동을 위해 선행해야할 내용을 설명합니다.
- [PortOne(Global) 가입 및 결제수단 설정](https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-2): Shopify 연동을 위해 선행해야할 내용을 설명합니다.
- [PortOne(Global) 에 Shopify 스토어 등록](https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-3): Shopify 스토어 등록방법을 설명합니다.
- [Shopify 스토어에 PortOne 연결하기](https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-4): Shopify 스토어에 PortOne 연결방법을 설명합니다.
- [엔드유저의 Shopify 결제 경험](https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-5): 실 고객의 Shopify 결제 화면을 설명합니다.
- [일반결제 연동하기](https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/payment): 우커머스 플러그인을 통해 일반결제를 연동합니다.
- [우커머스 플러그인](https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/readme): 포트원 우커머스 플러그인 사용방법을 안내합니다.
- [정기결제 연동하기](https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/subscription): 우커머스 플러그인을 통해 정기결제를 연동합니다.
- [가상계좌 입금통보 URL 설정하기](https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/vbank): 우커머스 플러그인에서 가상계좌 입금통지 URL을 설정합니다.
- [키움페이 (다우데이타/페이조아)](https://developers.portone.io/opi/ko/integration/pg/v1/daou/readme): 키움페이 연동 방법을 안내합니다.
- [키움페이 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/daou/undefined): 결제 연동시 유의사항을 안내합니다.
- [KSNET](https://developers.portone.io/opi/ko/integration/pg/v1/ksnet/readme): KSNET 결제창 연동 가이드입니다.
- [연동 주의사항](https://developers.portone.io/opi/ko/integration/pg/v1/ksnet/warning): KSNET 연동 시 주의사항을 확인할 수 있습니다.
- [토스페이먼츠(신모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/newtoss/readme): 토스페이먼츠 (신모듈 / 2022-07-27 버전) 연동 방법을 확인합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/newtoss/warning): 토스페이먼츠 (신 모듈) 연동 유의사항을 소개합니다.
- [빌링키 발급 / API 연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/billing-api-caution): (신)나이스페이먼츠 비인증 결제 연동 유의사항을 소개합니다.
- [일반결제 연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/payment-caution): 나이스페이먼츠(신모듈) 일반결제 연동 유의사항을 소개합니다.
- [나이스페이먼츠 (신모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/readme): 나이스페이먼츠 연동 방법을 안내합니다.
- [페이팔(Reference Transaction) 정기결제](https://developers.portone.io/opi/ko/integration/pg/v1/rt/readme): 페이팔(Reference Transaction) 빌링키 발급 및 정기결제 연동 방법을 안내합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/rt/warning): (신)페이팔 정기결제(RT) 이용시 특이사항을 확인할수 있습니다.
- [내통장결제](https://developers.portone.io/opi/ko/integration/pg/v1/settle/mybank): 헥토파이낸셜에서 제공하는 오픈뱅킹 기반 계좌간편결제 연동 방법을 안내합니다.
- [헥토파이낸셜](https://developers.portone.io/opi/ko/integration/pg/v1/settle/readme): 헥토파이낸셜 결제 연동 방법을 안내합니다.
- [API 연동](https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/api): 스마트로 API 연동 방법을 안내합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/caution): 스마트로 연동 유의사항을 소개합니다.
- [스마트로(신모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/readme): 스마트로 연동 방법을 안내합니다.
- [페이팔(Smart Payment Buttons) 일반결제](https://developers.portone.io/opi/ko/integration/pg/v1/spb/readme): 페이팔(Smart Payment Buttons) 일반결제 연동 방법을 안내합니다.
- [고위험 거래 상세 정보](https://developers.portone.io/opi/ko/integration/pg/v1/spb/stc): (신)페이팔 일반결제(SPB) 이용시 특이사항을 확인할수 있습니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/spb/warning): (신)페이팔 일반결제(SPB) 이용시 특이사항을 확인할수 있습니다.
- [모듈 로딩 연동](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/module): 토스페이먼츠 브랜드페이의 모듈 로딩에 연동 방법을 안내합니다.
- [토스페이먼츠 브랜드페이](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/readme): 토스페이먼츠 브랜드페이 연동 방법을 안내합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/warning): 토스페이먼츠 브랜드페이 연동 유의사항을 소개합니다.
- [브랜드페이 위젯 연동](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/widget): 토스페이먼츠 브랜드페이 위젯 연동 방법을 안내합니다.
- [API 연동](https://developers.portone.io/opi/ko/integration/pg/v1/welcome/api): 웰컴페이먼츠 API 연동 방법을 안내합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/welcome/caution): 웰컴페이먼츠 연동 유의사항을 소개합니다.
- [웰컴페이먼츠](https://developers.portone.io/opi/ko/integration/pg/v1/welcome/readme): 웰컴페이먼츠 연동 방법을 안내합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/tosspay-v2/caution): (신) 토스페이 연동 유의사항을 소개합니다.
- [토스페이(tosspay_v2)](https://developers.portone.io/opi/ko/integration/pg/v1/tosspay-v2/readme): 토스페이 연동 방법을 안내합니다.

## 파트너정산

- [용어 사전](https://developers.portone.io/platform/ko/guides/dictionary)
- [서비스 프로세스](https://developers.portone.io/platform/ko/guides/process)
- [파트너 정산 자동화 서비스 가이드](https://developers.portone.io/platform/ko/readme)
- [고객사 예시](https://developers.portone.io/platform/ko/usages/client)
- [계약 예시](https://developers.portone.io/platform/ko/usages/contract)
- [할인 예시](https://developers.portone.io/platform/ko/usages/discount)
- [추가 수수료 예시](https://developers.portone.io/platform/ko/usages/fee)
- [주문정산 예시](https://developers.portone.io/platform/ko/usages/order)
- [파트너 예시](https://developers.portone.io/platform/ko/usages/partner)

## 릴리스 노트

- [API / SDK 2023-04-24](https://developers.portone.io/release-notes/api-sdk/2023-04-24)
- [API / SDK 2023-05-08](https://developers.portone.io/release-notes/api-sdk/2023-05-08)
- [API / SDK 2023-05-12](https://developers.portone.io/release-notes/api-sdk/2023-05-12)
- [API / SDK 2023-05-22](https://developers.portone.io/release-notes/api-sdk/2023-05-22)
- [API / SDK 2023-05-25](https://developers.portone.io/release-notes/api-sdk/2023-05-25)
- [API / SDK 2023-06-19](https://developers.portone.io/release-notes/api-sdk/2023-06-19)
- [API / SDK 2023-07-03](https://developers.portone.io/release-notes/api-sdk/2023-07-03)
- [API / SDK 2023-07-10](https://developers.portone.io/release-notes/api-sdk/2023-07-10)
- [API / SDK 2023-07-17](https://developers.portone.io/release-notes/api-sdk/2023-07-17)
- [API / SDK 2023-07-31](https://developers.portone.io/release-notes/api-sdk/2023-07-31)
- [API / SDK 2023-08-31](https://developers.portone.io/release-notes/api-sdk/2023-08-31)
- [API / SDK 2023-12-15](https://developers.portone.io/release-notes/api-sdk/2023-12-15)
- [API / SDK 2024-01-08](https://developers.portone.io/release-notes/api-sdk/2024-01-08)
- [API / SDK 2024-01-11](https://developers.portone.io/release-notes/api-sdk/2024-01-11)
- [API / SDK 2024-01-25](https://developers.portone.io/release-notes/api-sdk/2024-01-25)
- [API / SDK 2024-01-30](https://developers.portone.io/release-notes/api-sdk/2024-01-30)
- [API / SDK 2024-02-23](https://developers.portone.io/release-notes/api-sdk/2024-02-23)
- [API / SDK 2024-03-08](https://developers.portone.io/release-notes/api-sdk/2024-03-08)
- [API / SDK 2024-03-15](https://developers.portone.io/release-notes/api-sdk/2024-03-15)
- [API / SDK 2024-03-25](https://developers.portone.io/release-notes/api-sdk/2024-03-25)
- [API / SDK 2024-04-01](https://developers.portone.io/release-notes/api-sdk/2024-04-01)
- [API / SDK 2024-04-05](https://developers.portone.io/release-notes/api-sdk/2024-04-05)
- [API / SDK 2024-04-12](https://developers.portone.io/release-notes/api-sdk/2024-04-12)
- [API / SDK 2024-05-08](https://developers.portone.io/release-notes/api-sdk/2024-05-08)
- [API / SDK 2024-05-14](https://developers.portone.io/release-notes/api-sdk/2024-05-14)
- [API / SDK 2024-06-03](https://developers.portone.io/release-notes/api-sdk/2024-06-03)
- [API / SDK 2024-06-17](https://developers.portone.io/release-notes/api-sdk/2024-06-17)
- [API / SDK 2024-06-19](https://developers.portone.io/release-notes/api-sdk/2024-06-19)
- [API / SDK 2024-06-20](https://developers.portone.io/release-notes/api-sdk/2024-06-20)
- [API / SDK 2024-07-04](https://developers.portone.io/release-notes/api-sdk/2024-07-04)
- [API / SDK 2024-07-11](https://developers.portone.io/release-notes/api-sdk/2024-07-11)
- [API / SDK 2024-09-05](https://developers.portone.io/release-notes/api-sdk/2024-09-05)
- [API / SDK 2024-09-27](https://developers.portone.io/release-notes/api-sdk/2024-09-27)
- [API / SDK 2024-12-19](https://developers.portone.io/release-notes/api-sdk/2024-12-19)
- [API / SDK 2025-01-15](https://developers.portone.io/release-notes/api-sdk/2025-01-15)
- [관리자콘솔 2023-04-24](https://developers.portone.io/release-notes/console/2023-04-24)
- [관리자콘솔 2023-05-08](https://developers.portone.io/release-notes/console/2023-05-08)
- [관리자콘솔 2023-05-22](https://developers.portone.io/release-notes/console/2023-05-22)
- [관리자콘솔 2023-07-05](https://developers.portone.io/release-notes/console/2023-07-05)
- [관리자콘솔 2023-07-07](https://developers.portone.io/release-notes/console/2023-07-07)
- [관리자콘솔 2023-07-17](https://developers.portone.io/release-notes/console/2023-07-17)
- [관리자콘솔 2023-08-23](https://developers.portone.io/release-notes/console/2023-08-23)
- [관리자콘솔 2023-09-12](https://developers.portone.io/release-notes/console/2023-09-12)
- [관리자콘솔 2023-12-27](https://developers.portone.io/release-notes/console/2023-12-27)
- [관리자콘솔 2024-09-05](https://developers.portone.io/release-notes/console/2024-09-05)
- [파트너 정산 자동화 2023-08-31](https://developers.portone.io/release-notes/platform/2023-08-31)
- [파트너 정산 자동화 2023-11-08](https://developers.portone.io/release-notes/platform/2023-11-08)
- [파트너 정산 자동화 2023-11-14](https://developers.portone.io/release-notes/platform/2023-11-14)
- [파트너 정산 자동화 2023-12-15](https://developers.portone.io/release-notes/platform/2023-12-15)
- [파트너 정산 자동화 2024-05-20](https://developers.portone.io/release-notes/platform/2024-05-20)
- [파트너 정산 자동화 2024-05-29](https://developers.portone.io/release-notes/platform/2024-05-29)
- [파트너 정산 자동화 2024-06-05](https://developers.portone.io/release-notes/platform/2024-06-05)
- [파트너 정산 자동화 2024-07-05](https://developers.portone.io/release-notes/platform/2024-07-05)
- [파트너 정산 자동화 2024-07-11](https://developers.portone.io/release-notes/platform/2024-07-11)
- [파트너 정산 자동화 2024-07-30](https://developers.portone.io/release-notes/platform/2024-07-30)
- [파트너 정산 자동화 2024-08-07](https://developers.portone.io/release-notes/platform/2024-08-07)
- [파트너 정산 자동화 2024-08-22](https://developers.portone.io/release-notes/platform/2024-08-22)
- [파트너 정산 자동화 2024-10-21](https://developers.portone.io/release-notes/platform/2024-10-21)
- [파트너 정산 자동화 2024-11-07](https://developers.portone.io/release-notes/platform/2024-11-07)
- [파트너 정산 자동화 2024-11-25](https://developers.portone.io/release-notes/platform/2024-11-25)
- [파트너 정산 자동화 2024-12-10](https://developers.portone.io/release-notes/platform/2024-12-10)
- [파트너 정산 자동화 2025-01-16](https://developers.portone.io/release-notes/platform/2025-01-16)
- [파트너 정산 자동화 2025-02-10](https://developers.portone.io/release-notes/platform/2025-02-10)
- [파트너 정산 자동화 2025-02-13](https://developers.portone.io/release-notes/platform/2025-02-13)
- [파트너 정산 자동화 2025-03-04](https://developers.portone.io/release-notes/platform/2025-03-04)
- [파트너 정산 자동화 2025-03-17](https://developers.portone.io/release-notes/platform/2025-03-17)

## 블로그

- [포트원 V2 이야기 - OOM 이슈 탐방기](https://developers.portone.io/blog/posts/2024-02/v2-oom): ZIO를 사용하면서 발생했던 OOM 이슈에 대해 원인을 분석합니다.
- [포트원 V2 이야기 - 웹훅 재시도, 어디까지 고도화해 보셨나요?](https://developers.portone.io/blog/posts/2024-02/v2-webhook): 웹훅의 중요성과 한계점을 살펴보고 포트원 V2에서 웹훅 시스템을 고도화한 이야기를 소개합니다.
- [포트원 V2 이야기 - Scala와 ZIO로 안정적인 결제 시스템 만들기](https://developers.portone.io/blog/posts/2024-02/v2-zio): 안정적인 결제 시스템을 만들기 위해 기술적으로 의사결정한 내용에 대해 소개합니다.
- [포트원이 여러 PG사의 인터페이스를 연동하는 방법](https://developers.portone.io/blog/posts/2024-03/tgs): 여러 PG사의 인터페이스를 효율적으로 연동하기 위한 결정사항들을 소개합니다.
- [Data Evolution: The Shift from AWS DMS to GCP Datastream](https://developers.portone.io/blog/posts/2024-04/gcp-datastream): Gives an overview of the PortOne Data Infrastructure and the migration story from AWS DMS to GCP Datastream.
- [Solid로 간결하게 고성능 웹앱 만들기](https://developers.portone.io/blog/posts/2024-04/solid): 포트원에서 사용하는 프론트엔드 웹 프레임워크 중 하나인 Solid에 대해 소개하고, 포트원 내에서의 활용 사례를 다룹니다.
- [포트원 V2 이야기 - Event Sourcing으로 결제 시스템 만들기 (기본편)](https://developers.portone.io/blog/posts/2024-07/v2-event-sourcing-basic): 포트원 V2 시스템의 근간을 이루고 있는 기술 중 하나인 Event Sourcing에 대해 소개합니다.
