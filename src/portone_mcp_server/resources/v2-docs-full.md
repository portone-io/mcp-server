# PortOne 개발자 문서 (V2 전체 문서)

> PortOne은 온라인 결제, 본인인증, 파트너 정산 자동화 및 재무/회계 업무를 위한 API와 SDK를 제공합니다.

## 목차


### V2 스키마 파일

- [V2 GraphQL 스키마](https://developers.portone.io/schema/v2.graphql)
- [V2 OpenAPI YAML](https://developers.portone.io/schema/v2.openapi.yml)
- [V2 OpenAPI JSON](https://developers.portone.io/schema/v2.openapi.json)

### V2 SDK

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
- [포트원 SDK 소개](https://developers.portone.io/sdk/ko/readme): 포트원에서 제공하는 SDK 가이드입니다.

### V2 API 레퍼런스

- [API 하위호환성 지원](https://developers.portone.io/api/backward-compatibility): 포트원이 보장하는 V1, V2 API 하위호환성에 대한 내용입니다.

### V2 통합 가이드

- [컨펌 프로세스](https://developers.portone.io/opi/ko/extra/confirm-process/readme-v2): 결제승인의 주체를 고객사 서버로 가져갈수 있는 서비스 입니다.
- [스마트 라우팅](https://developers.portone.io/opi/ko/console/guide/smartrouting): 포트원 스마트 라우팅을 사용하기 위한 그룹 설정을 관리할 수 있습니다. 관리자콘솔 내 스마트 라우팅 그룹 설정 방법을 안내합니다.
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
- [포트원 결제 연동 Doc](https://developers.portone.io/opi/ko/readme): 포트원 결제 연동 가이드입니다. 빠른 시간 안에 결제를 연동할 수 있게 도와드립니다.
- [PG 거래대사 가이드](https://developers.portone.io/opi/ko/etc/recon): PG 거래대사는 PG사와 간편결제사로부터 정산 받는 금액 및 상세내역을 포트원 콘솔에서 PG가 여러 개여도 한 번에 자동 대사된 데이터를 확인할 수 있는 통합 조회 서비스입니다.
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
- [스마트 라우팅 - 콘솔 가이드](https://developers.portone.io/opi/ko/extra/smart-routing/console-guide): 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
- [스마트 라우팅 - 연동하기](https://developers.portone.io/opi/ko/extra/smart-routing/integration): 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
- [스마트 라우팅](https://developers.portone.io/opi/ko/extra/smart-routing/intro): 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
- [프로모션 생성하기](https://developers.portone.io/opi/ko/extra/promotion/console-guide): 프로모션 기간, 예산, 할인 조건 등 설정 방법을 안내합니다.
- [프로모션 결제 연동하기](https://developers.portone.io/opi/ko/extra/promotion/integration): 프로모션 할인금액을 적용하는 방법을 안내합니다.
- [프로모션](https://developers.portone.io/opi/ko/extra/promotion/intro): 카드 즉시 할인을 쉽게 운영 및 관리할 수 있는 서비스입니다.
- [퀵 가이드](https://developers.portone.io/opi/ko/quick-guide/payment): 결제연동 퀵 가이드
- [결제 연동 준비하기](https://developers.portone.io/opi/ko/integration/ready/readme): 포트원을 이용한 연동 개발이 처음이시라면 아래 안내 사항에 따라 진행하세요.
- [가상계좌 입금통보 설정](https://developers.portone.io/opi/ko/integration/virtual-account/readme): 결제대행사별 입금통보 URL을 안내합니다.
- [결제대행사별 연동 정보 확인하기 - KG이니시스](https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/inicis)
- [결제대행사별 연동 정보 확인하기 - 토스페이먼츠 (신모듈)](https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/tosspayments)

### 파트너정산

- [용어 사전](https://developers.portone.io/platform/ko/guides/dictionary)
- [서비스 프로세스](https://developers.portone.io/platform/ko/guides/process)
- [고객사 예시](https://developers.portone.io/platform/ko/usages/client)
- [계약 예시](https://developers.portone.io/platform/ko/usages/contract)
- [할인 예시](https://developers.portone.io/platform/ko/usages/discount)
- [추가 수수료 예시](https://developers.portone.io/platform/ko/usages/fee)
- [주문정산 예시](https://developers.portone.io/platform/ko/usages/order)
- [파트너 예시](https://developers.portone.io/platform/ko/usages/partner)
- [파트너 정산 자동화 서비스 가이드](https://developers.portone.io/platform/ko/readme)

### 릴리스 노트

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

### 블로그

- [포트원 V2 이야기 - OOM 이슈 탐방기](https://developers.portone.io/blog/posts/2024-02/v2-oom): ZIO를 사용하면서 발생했던 OOM 이슈에 대해 원인을 분석합니다.
- [포트원 V2 이야기 - 웹훅 재시도, 어디까지 고도화해 보셨나요?](https://developers.portone.io/blog/posts/2024-02/v2-webhook): 웹훅의 중요성과 한계점을 살펴보고 포트원 V2에서 웹훅 시스템을 고도화한 이야기를 소개합니다.
- [포트원 V2 이야기 - Scala와 ZIO로 안정적인 결제 시스템 만들기](https://developers.portone.io/blog/posts/2024-02/v2-zio): 안정적인 결제 시스템을 만들기 위해 기술적으로 의사결정한 내용에 대해 소개합니다.
- [포트원 V2 이야기 - Event Sourcing으로 결제 시스템 만들기 (기본편)](https://developers.portone.io/blog/posts/2024-07/v2-event-sourcing-basic): 포트원 V2 시스템의 근간을 이루고 있는 기술 중 하나인 Event Sourcing에 대해 소개합니다.
- [Data Evolution: The Shift from AWS DMS to GCP Datastream](https://developers.portone.io/blog/posts/2024-04/gcp-datastream): Gives an overview of the PortOne Data Infrastructure and the migration story from AWS DMS to GCP Datastream.
- [Solid로 간결하게 고성능 웹앱 만들기](https://developers.portone.io/blog/posts/2024-04/solid): 포트원에서 사용하는 프론트엔드 웹 프레임워크 중 하나인 Solid에 대해 소개하고, 포트원 내에서의 활용 사례를 다룹니다.
- [포트원이 여러 PG사의 인터페이스를 연동하는 방법](https://developers.portone.io/blog/posts/2024-03/tgs): 여러 PG사의 인터페이스를 효율적으로 연동하기 위한 결정사항들을 소개합니다.


# https://developers.portone.io/opi/ko/extra/confirm-process/readme-v2

---
title: 컨펌 프로세스
description: 결제승인의 주체를 고객사 서버로 가져갈수 있는 서비스 입니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/extra/confirm-process/readme-v1
---

**해당 서비스는 결제 승인 직전에 고객사에서 결제 의사를 최종적으로 확인하는 서비스입니다.**

(관련 이미지 첨부)

## 컨펌 프로세스란?

- 결제 승인 직전 고객사에 결제 승인 요청 의사를 마지막으로 확인하는 서비스 입니다.

- 기본적인 결제 플로우상 고객사에서 결제 요청 후 별도의 확인 없이 결제 승인되는 구조입니다.
  하지만 해당 서비스 이용 시 고객사가 최종적으로 결제 승인 요청의 주체가 될 수 있습니다.

(이미지 첨부: 컨펌 프로세스 플로우)

<div class="hint" data-style="info">

**해당 서비스가 반드시 필요한 고객사는 아래와 같은 경우입니다.**

(관련 이미지 첨부)

- 판매 제품의 재고가 소량으로 재고파악이 필요한 경우 (한정된 상품 또는 고가 제품 판매시)
- 선착순 방식으로 결제가 진행되어야 하는 경우
- 결제 승인 전 마지막으로 고객사에서 처리하고 싶은 로직이 존재하는 경우

</div>

## 컨펌 프로세스 사용 케이스

### 판매 제품의 재고가 소량으로 재고파악이 필요한 경우

고객사의 판매 제품이 재고가 충분하지 않을 경우 구매자가 동시에 구매를 요청할 수 있기 때문에
결제 직전 고객사 서버에서 재고 수량을 한 번 더 확인하고 수량이 있는 경우에만 결제가 승인되도록
처리할 수 있습니다.\
만약 컨펌 프로세스를 설정하지 않는 경우 실제 결제 승인 후 재고가 부족하여 제품 발송이 늦어지거나
주문을 취소 처리가 발생하여 고객의 결제 경험 만족도를 저하시키는 상황이 반복될 수 있습니다.

![](</gitbook-assets/ko/image (217).png>)

### 선착순 방식으로 결제가 진행되어야 하는 경우

마라톤 참가 신청, 인기 콘서트 티켓팅 또는 OO Day 같은 특별 할인 행사처럼 특정 시간에 매우 많은 고객이
동시에 결제 요청을 하는 경우 한정된 수량을 초과하지 않도록 고객사에서 최종적으로 수량을 확인한 후
결제가 승인되도록 처리할 수 있습니다.

![](</gitbook-assets/ko/image (164).png>)

### 결제 승인 전 마지막으로 고객사에서 처리하고 싶은 로직이 존재하는 경우

이밖에 다른 사유로 고객사에서 결제 승인 완료 직전 자체 업무 처리가 필요한 경우(결제 직전 고객사 서버 헬스체크 등) 해당 서비스를 이용할 수 있습니다.

![](</gitbook-assets/ko/image (262).png>)

<div class="hint" data-style="info">

**컨펌 프로세스 신청 방법**

기술지원 메일(<support@portone.io>)로 **상점 아이디**를 기재하여 메일 발송

포트원 콘솔 로그인 후 \[결제연동] 페이지 상단에서 상점 아이디를 확인 하실 수 있습니다.

</div>

<div class="hint" data-style="warning">

엑심베이의 경우 컨펌 프로세스 사용이 불가능합니다.

</div>

## 컨펌 프로세스 이용 방법

컨펌 프로세스 이용시 고객사는 `PortOne.requestPayment()`, `PortOne.loadPaymentUI()` 함수 호출 시

`confirmUrl` 파라미터를 정의하고 해당 파라미터에 고객사 EndPoint URL을 설정합니다.

```json title="JavaScript SDK"
{
  //...중략
  "confirmUrl": "고객사 EndPoint URL 기재"
  //...중략
}
```

## Payload Schema

콘솔에서 설정하신 웹훅 버전에 따라 상이한 형식의 payload가 송신됩니다.

### `2024-01-01` 사용 시

- `payment_id`: 고객사에서 채번한 결제건의 고유 주문 번호입니다.
- `tx_id`: 포트원에서 채번한 결제건의 고유 거래 번호입니다.
- `total_amount`: 결제건의 결제 요청 금액입니다.

**컨펌 웹훅 payload 예시:**

```json
{
  "payment_id": "example-payment-id",
  "tx_id": "55451513-9763-4a7a-bb43-78a4c65be843",
  "total_amount": 1000
}
```

### `2024-04-25` 사용 시

- `type`: 웹훅을 트리거한 이벤트의 타입입니다. 컨펌 웹훅의 경우 `type`의 값은 `Transaction.Confirm`으로 고정됩니다.

- `timestamp`: 해당 웹훅을 트리거한 이벤트의 발생 시각(RFC 3339 형식)입니다.

- `data`: 웹훅을 트리거한 이벤트의 실제 세부 내용입니다. 컨펌 웹훅의 경우 해당 필드의 상세 스키마는 아래와 같습니다.
  - `paymentId`: 고객사에서 채번한 결제건의 고유 주문 번호입니다.
  - `transactionId`: 포트원에서 채번한 결제건의 고유 거래 번호입니다.
  - `totalAmount`: 결제건의 결제 요청 금액입니다.

**컨펌 웹훅 payload 예시:**

```json
{
  "type": "Transaction.Confirm",
  "timestamp": "2024-04-25T10:00:00.000Z",
  "data": {
    "paymentId": "example-payment-id",
    "transactionId": "55451513-9763-4a7a-bb43-78a4c65be843",
    "totalAmount": 1000
  }
}
```

## SDK 실패 응답에 특정 에러 메세지 포함시키기

고객사는 재고 부족 등의 이유로 포트원이 보낸 컨펌 프로세스 요청에 실패 응답을 보낼 수 있고, 이러한 실패 사유를 서비스를 이용하는 고객들에게 보여주고 싶을 수 있습니다.
이러한 경우 Response Body에 `errorMessage` 라는 필드를 포함하여 에러 응답을 보내주시면 해당 메세지를 포함해 SDK 응답으로 리턴해드리고 있습니다.

**Error Response Body 예시:**

```json
{
  "errorMessage": "재고가 모두 소진되었습니다. 관리자에게 문의하세요."
}
```

## 컨펌 웹훅 요청 검증하기

컨펌 프로세스 웹훅 또한 다른 일반적인 웹훅과 동일한 방식으로 검사하시는 것을 권장합니다.
[웹훅 연동하기 - 웹훅 요청 검증하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2#웹훅-메시지-검증하기)를 참고하셔서 컨펌 웹훅을 신뢰할 수 있는지를 검사하세요.


# https://developers.portone.io/opi/ko/console/guide/smartrouting

---
title: 스마트 라우팅
description: 포트원 스마트 라우팅을 사용하기 위한 그룹 설정을 관리할 수 있습니다. 관리자콘솔 내 스마트 라우팅 그룹 설정 방법을 안내합니다.
targetVersions:
  - v2
---

<div class="hint" data-style="info">

스마트 라우팅 기능이 궁금하다면 [스마트 라우팅 기능 소개](https://developers.portone.io/opi/ko/extra/smart-routing/intro)를 확인해 보세요!

스마트 라우팅은 **V2 결제 서비스 이용시**에만 사용이 가능합니다.

</div>

## 스마트 라우팅 그룹 생성하기

스마트 라우팅을 사용하기 위해서는 포트원 관리자콘솔 내 \[연동 관리] - \[스마트 라우팅]에서 그룹 설정이 필요합니다.

1. (관련 이미지 첨부)

   포트원 콘솔 내에서 \[연동 관리] - \[스마트 라우팅]을 클릭하세요.

2. \[스마트 라우팅 그룹 생성하기]를 클릭하세요.

3. (관련 이미지 첨부)

   연동할 환경을 선택하세요. \[실연동], \[테스트] 선택 시 해당 환경으로 등록된 채널만 표시됩니다.
   스마트 라우팅 그룹 내에 동일한 환경의 채널끼리만 설정이 가능합니다.

4. \[그룹 이름]은 필수로 입력해야 합니다. 그룹 이름은 별칭과 같이 사용되므로 그룹의 특징을
   잘 나타내는 이름으로 작성하시길 권장드립니다.

5. \[그룹 아이디]의 경우 그룹 생성 후 자동으로 채번되며, 결제 요청 시 사용됩니다.

6. \[+채널 추가]를 클릭하세요.

7. (관련 이미지 첨부)

   그룹에 사용할 채널을 선택하세요. [지원 PG사 확인 바로가기](https://developers.portone.io/opi/ko/extra/smart-routing/intro?v=v2)

8. 채널은 최소 1개부터 최대 10개까지 설정이 가능합니다.

9. 채널 추가 후 **비활성화** 하는 경우 해당 채널은 입력된 비율과 상관없이 라우팅 시 배제됩니다.

10. 비율의 합은 100% 미만이거나 초과될 수 없습니다. 총 합이 100%여야만 합니다.

11. 채널 설정을 완료하였으면 \[저장] 버튼을 클릭하여 그룹을 생성합니다.

## 스마트 라우팅 그룹 수정하기

1. (관련 이미지 첨부)

   생성된 그룹은 위와 같이 표시됩니다.

2. 그룹 설정을 변경하고 싶으신 경우 해당 그룹을 클릭하세요.

3. (관련 이미지 첨부)

   이미 생성된 그룹 내에서 결제대행사를 추가 혹은 삭제할 수 있습니다.

4. 결제대행사별 비율을 변경할 수 있습니다.

5. \[예약 시간 설정]을 체크한 후 시간을 설정하면 변경 시점을 예약할 수 있습니다. 예약 시간은 시간 단위로
   선택 가능하며, 미래 시점으로만 예약할 수 있습니다.

6. 즉시 적용을 원하시는 경우 \[예약 시간 설정]을 체크하지 않은 채 \[저장]을 클릭하세요.

## 스마트 라우팅 그룹 삭제하기

1. 수정 모드에서 \[그룹 삭제]를 클릭하세요.

2. 삭제된 그룹은 복원되지 않으며, 결제 요청 파라미터 변경 없이 그룹을 삭제하는 경우 결제가
   원활하지 않을 수 있습니다. 삭제 시 신중히 진행하시길 권장드립니다.


# https://developers.portone.io/opi/ko/extra/identity-verification/readme-v2

---
title: 본인인증 연동하기
description: 포트원을 이용하여 간편하게 본인인증을 연동하는 방법을 확인합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/extra/identity-verification/v1/readme
---

**본인인증 서비스**란 인증 절차를 거쳐 본인 여부와 입력한 정보의 정확성을 확인하여 주는 서비스입니다. 현재 존재하는 대표적인 본인인증 서비스는 아래와 같습니다.

- 다날 휴대폰 본인인증
- KG이니시스 통합인증

## 휴대폰 본인인증

휴대폰 본인인증 서비스란 본인 명의로 개통한 휴대폰을 이용하여 최소한의 개인정보를 입력하는 인증 절차를 거쳐 본인 여부와 입력한 정보의 정확성을 확인하여 주는 서비스입니다.

고객은 웹사이트에 가입, 결제, 또는 성인 인증 등을 위해 본인인증을 시행합니다. 본인인증은 모바일
기기에 설치된 본인인증 전용 앱을 이용하거나 사용자 본인 정보(이름, 생년월일, 휴대폰번호)를 인증요청
페이지에 입력한 후 문자로 온 인증번호를 기입하는 방식으로 이루어집니다.

(이미지 첨부: 휴대폰 본인인증 화면 예시)

포트원을 이용한 휴대폰 본인인증의 Flow는 JavaScript SDK를 이용하여 휴대폰 본인인증을 완료하고 고객사 서버에서 포트원 REST API를 이용하여 **인증완료정보를 획득**하는 방법으로 진행됩니다.

<div class="hint" data-style="info">

**API를 이용한 본인인증**

수기결제처럼 API 호출만으로 진행하는 본인인증도 지원하고 있습니다. REST API 문서의 해당 부분 설명을 참고해 주세요.

</div>

## 통합인증

통합인증 서비스란 카카오톡 인증서, 네이버 인증서 등의 민간 인증서를 통한 인증 절차를 거쳐 본인 여부와 입력한 정보의
정확성을 확인하여 주는 서비스입니다. 통합인증은 **KG이니시스**를 통해 제공되며 민간 인증서를
이용하거나 사용자 본인이 가입된 간편인증을 통해 인증요청을 보내고 간편인증 페이지에서 인증처리를
하는 방식으로 이루어집니다.

> **이용가능 수단 : 네이버 / PASS / 페이코 / TOSS / 금융인증서 / 카카오 / 신한 / KB모바일 / 삼성패스**

(이미지 첨부: 휴대폰 본인인증 화면 예시)

## SDK를 사용한 본인인증

포트원을 이용한 본인인증의 Flow는 휴대폰 본인인증, 통합인증 모두 JavaScript SDK를 이용하여 본인인증을 완료하고 고객사 서버에서 포트원 REST API를 이용하여 **인증완료정보를 획득**하는 방법으로 진행됩니다.

### 1. 포트원 SDK 설치

포트원 SDK를 설치하는 방법은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout) 문서를 참고하세요.

### 2. 본인인증 요청하기

SDK의 `PortOne.requestIdentityVerification()` 함수를 호출하여 본인인증창을 열 수 있습니다.

먼저, 관리자 콘솔의 결제 연동 페이지에서 **Store ID**와 사용할 채널의 **채널 키**를 확인해 주세요.

그리고 아래와 같이 파라미터들을 설정하여 호출합니다.

```ts
PortOne.requestIdentityVerification({
  // 고객사 storeId로 변경해주세요.
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
  identityVerificationId: `identity-verification-${crypto.randomUUID()}`,
  // 연동 정보 메뉴의 채널 관리 탭에서 확인 가능합니다.
  channelKey: "channel-key-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
});
```

**identityVerificationId**는 본인인증 건을 구분하는 문자열로, 본인인증 요청 및 조회에 필요합니다.
같은 identityVerificationId에 대해 여러 번의 본인인증 시도가 가능하나, 최종적으로 인증에 성공하는
것은 단 한 번만 가능합니다.

### 3. 본인인증 완료 처리 (브라우저)

`PortOne.requestIdentityVerification()` 함수의 반환값을 통해 본인인증 요청의 결과를 확인합니다.

`code`가 있으면 본인인증 과정에서 오류가 발생한 것이므로 적절히 처리하여야 합니다.

본인인증이 성공한 경우 identityVerificationId를 서버에 전달하여 서버측 본인인증 완료 처리를 하도록 합니다.

```ts
const response = await PortOne.requestIdentityVerification({
  /* 객체 생략 */
});
// 프로세스가 제대로 완료되지 않은 경우 에러 코드가 존재합니다
if (response.code !== undefined) {
  return alert(response.message);
}

const verificationResult = await fetch("{서버의 인증 정보를 받는 endpoint}", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    identityVerificationId,
  }),
});
```

결과값에 들어 있는 필드는 다음과 같습니다.

| 필드명                    | 설명        | 비고   |
| ---------------------- | --------- | ---- |
| identityVerificationId | 본인인증 건 ID | 공통   |
| code                   | 오류 코드     | 실패 시 |
| message                | 오류 문구     | 실패 시 |

#### 3-1. redirect 방식의 경우

모바일 환경에서의 본인인증은 대부분 redirect 방식으로 이루어집니다. redirect 방식에서는 브라우저가
본인인증창으로 리다이렉트되었다가, 인증창에서의 작업이 끝나면 지정한 `redirectUrl`로 다시
리다이렉트됩니다. 이 경우에는 함수 호출 결과를 이용할 수 없고, 인증 성공 여부 등은
[쿼리 문자열](http://en.wikipedia.org/wiki/Query_string)로 전달받게 됩니다.

```ts
PortOne.requestIdentityVerification({
  /* 파라미터 생략 */
  redirectUrl: `${BASE_URL}/identity-verification-redirect`,
});
```

쿼리 문자열로 전달되는 내용은 다음과 같습니다.

| 키                      | 설명      | 비고   |
| ---------------------- | ------- | ---- |
| identityVerificationId | 결제 건 ID | 공통   |
| code                   | 오류 코드   | 실패 시 |
| message                | 오류 문구   | 실패 시 |

예를 들어 identityVerificationId가 `identity-verification-39ecfa97`, redirectUrl이
`https://example.com/identity-verification-redirect`인 경우, 결제 성공 시에
`https://example.com/identity-verification-redirect?identityVerificationId=identity-verification-39ecfa97`로
리다이렉트됩니다.

### 4. 인증 완료 처리 (서버)

본인인증 완료 이후 획득한 `identityVerificationId`를 이용하여 고객 인증정보를 조회할 수 있습니다.

```ts title="server-side"
app.use(bodyParser.json());

// "/identity-verifications"에 대한 POST 요청을 처리하는 controller
app.post("/identity-verifications", async (req, res) => {
  // request의 body에서 identityVerificationId 추출
  const { identityVerificationId } = req.body;
  try {
    // 포트원 본인인증 내역 단건조회 API 호출
    const verificationResponse = await fetch({
      url: `https://api.portone.io/identity-verifications/${encodeURIComponent(identityVerificationId)}`,
      headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
    });
    if (!verificationResponse.ok)
      throw new Error(
        `verificationResponse: ${await verificationResponse.json()}`,
      );
    const identityVerification = await verificationResponse.json();
    if (identityVerification.status !== "VERIFIED") {
      // 인증 실패
    }
  } catch (e) {
    console.error(e);
  }
});
```

#### 인증 정보 활용하기

조회한 인증 정보에서 다음의 고객 정보를 추출하는 서비스 코드 예제입니다.
아래 파라미터들은 모두 본인인증 단건 조회의 결과가 인증 완료 상태일 때 (status = `VERIFIED`) 제공되는 `verifiedCustomer` 필드 내에 존재합니다.

- `ci`: 연계 정보(Connecting Information).
  - 사람마다 고유하고 서비스별로 달라지지 않기 때문에, 서비스 간 연계에 사용할 수 있음.
  - 다날의 경우 항상 제공.
  - KG이니시스의 경우 카카오를 제외한 인증 업체에서 항상 제공. 카카오의 경우 별도 서류 작성이 필요합니다.

- `di`: 중복 가입 확인 정보(Duplication Information).
  - 해당 서비스 안에서만 사람마다 고유함.
  - 이용자의 중복 가입을 확인하는 데 사용할 수 있음.
  - 다날의 경우 항상 제공.
  - KG이니시스의 경우 제공되지 않음.

- `name`: 이름

- `gender`: 성별

- `birthDate`: 생년월일 (YYYY-MM-DD)

- `operator`: 통신사
  - 다날의 경우 하기 안내를 따라 추가 계약 후 제공.
  - KG이니시스의 경우 미제공.

- `phoneNumber`: 숫자로만 구성된 전화번호
  - 다날의 경우 하기 안내를 따라 추가 계약 후 제공.
  - KG이니시스의 경우 항상 제공.

- `isForeigner`: 외국인 여부.
  - 다날의 경우 하기 안내를 따라 추가 계약 후 제공.
  - KG이니시스의 경우 항상 제공.

<div class="hint" data-style="info">

다날의 외국인(**`isForeigner`**) 여부는 **API 방식** 본인인증에 한하여 **개인정보 제공동의 약관을 사이트에 게재**한 후 **<cs@portone.io>로 신청**하여 취득할 수 있습니다. 해당 부분은 당사 계약 이후 다날PG사로 요청 후 승인이 완료되면 이용 가능한 점 참고해 주시기 바랍니다.

**메일 요청 신청 양식**

- 상호명 :
- 사업자번호 :
- 본인인증용 다날 상점ID(CPID) :
- 업종 :
- 필요사유 :
- 개인정보취급방침 url : 앱서비스로 URL형태로 전달이 어려우신 경우 '개인정보취급방침' 경로를 캡쳐하여 전달주시기 바랍니다.

**참고 - 포트원 이용 고객사의 개인정보처리방침 적용 예시**

- `(주)마플 : https://marpple.shop/kr/@/privacy`
- `(주)브레이브모바일 / 숨고 : https://soomgo.com/terms/privacy`
- `(주)마켓잇 : https://static.marketit.asia/static/privacy-terms.pdf`

</div>

<div class="hint" data-style="info">

KG이니시스의 성별, 외국인 여부는 인증 업체에 따라 사용자가 직접 입력할 수 있고, 정보를 검증하지 않습니다.

</div>

```ts title="Express"
// "/identity-verifications"에 대한 POST 요청을 처리하는 controller
app.post("/identity-verifications", async (req, res) => {
  // request의 body에서 identity_verification_id 추출
  const { identityVerificationId } = req.body;
  try {
    // 인증 토큰 발급 받기
    // identityVerificationId로 인증 정보 조회

    const { ci, di, name, gender, birthDate } =
      identityVerification.verifiedCustomer;
    // 연령 제한 로직 예시
    if (new Date(birthDate).getFullYear() <= 1999) {
      // 연령 만족
    } else {
      // 연령 미달
    }
    // 1인 1계정 허용 로직 예시
    if (di == null) {
      // PG사에서 di를 미제공
    } else {
      // DB에서 di 조회 후 가입여부 검사
      const user = await Users.find({ di });
      if (user == null) {
        // 신규 고객
      } else {
        // 이미 가입된 고객
      }
    }
  } catch (e) {
    console.error(e);
  }
});
```


# https://developers.portone.io/sdk/ko/v2-mobile-sdk/readme

---
title: 모바일 SDK 레퍼런스
description: 결제창 연동시 사용되는 SDK에 대한 설명 문서입니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-mobile-sdk/readme
---

포트원 모바일 SDK는 Javascript로 작성된 포트원 V2 SDK를 모바일 환경에서 모바일 플랫폼 네이티브 코드(Kotlin, Swift 등) 으로 사용 가능하도록 만들어진 SDK입니다.

현재는 Android SDK와 React Native만 지원하고 있으며, iOS, Flutter 등 다른 플랫폼에 대해서도 지원 예정입니다.

## Android SDK

Android 네이티브 환경에서 사용 가능한 SDK 입니다. 해당 Git 레포지토리의 README.md 파일을 참고하여 사용하실 수 있습니다.

- [Github 링크](https://github.com/portone-io/android-sdk)

## React Native

React Native 환경에서 사용 가능한 SDK 입니다. 해당 Git 레포지토리의 README.md 파일을 참고하여 사용하실 수 있습니다.

- [Github 링크](https://github.com/portone-io/react-native-sdk)


# https://developers.portone.io/sdk/ko/v2-server-sdk/readme

---
title: 서버 SDK 레퍼런스
description: 웹훅 및 REST API 연동시 사용되는 SDK에 대한 설명 문서입니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/readme
---

포트원 서버 SDK는 웹훅을 포함한 포트원 V2 REST API를 여러 언어에서 별도의 보일러플레이트 없이 사용 가능하도록 만들어진 SDK입니다.

현재 JavaScript, Python, JVM을 지원하고 있으며, Go, PHP 등을 지원할 예정입니다.

## JavaScript

![NPM Version](https://img.shields.io/npm/v/%40portone%2Fserver-sdk)

![JSR Version](https://img.shields.io/jsr/v/%40portone/server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/javascript)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/js)

JavaScript 및 TypeScript에서 사용 가능한 JavaScript SDK는 [npm](https://www.npmjs.com/package/@portone/server-sdk)과 [jsr](https://jsr.io/@portone/server-sdk)을 통해 배포되고 있습니다.
`@portone/server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="npm">

```shell
npm install --save @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="yarn">

```shell
yarn add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="pnpm">

```shell
pnpm add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="bun">

```shell
bun add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="deno">

```shell
deno add jsr:@portone/server-sdk
```

</div>

<div class="tabs-content" data-title="ni">

```shell
ni @portone/server-sdk
```

</div>

</div>

Node.js의 경우 v20 이상에서 정상 동작하며, v20 미만 버전은 폴리필이 필요합니다.

<details>

<summary>폴리필 방법</summary>

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js v18 이상 v20 미만">

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
globalThis.crypto = require("node:crypto").webcrypto;
```

```javascript title="ESM"
import { webcrypto } from "node:crypto";
globalThis.crypto = webcrypto;
```

</div>

<div class="tabs-content" data-title="Node.js v18 미만">

[@whatwg-node/fetch](https://www.npmjs.com/package/@whatwg-node/fetch) 패키지를 의존성에 추가해 주세요.

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
const { fetch, crypto } = require("@whatwg-node/fetch");
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

```javascript title="ESM"
import { crypto, fetch } from "@whatwg-node/fetch";
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

</div>

</div>

</details>

## Python

![PyPI - Version](https://img.shields.io/pypi/v/portone-server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/python)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/py)

Python SDK는 [PyPI](https://pypi.org/project/portone-server-sdk)를 통해 배포되고 있습니다.
`portone-server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="uv">

```shell
uv add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="poetry">

```shell
poetry add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="rye">

```shell
rye add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pipenv">

```shell
pipenv install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Conda">

```shell
conda install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Hatch">

```toml title="pyproject.toml"
[project]
dependencies = [
  "portone-server-sdk~=x.x.x"
]
```

</div>

<div class="tabs-content" data-title="PDM">

```shell
pdm add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pip requirements">

```shell title="requirements.txt"
portone-server-sdk ~= x.x.x
```

</div>

</div>

Python 3.9 이상에서 정상 동작합니다.

## JVM

[![Maven Central Version](https://img.shields.io/maven-central/v/io.portone/server-sdk)](https://central.sonatype.com/artifact/io.portone/server-sdk)

[![javadoc](https://javadoc.io/badge2/io.portone/server-sdk/javadoc.svg)](https://javadoc.io/doc/io.portone/server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/jvm)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/jvm)

Java, Kotlin, Scala 등에서 사용 가능한 JVM SDK는 [Maven](https://central.sonatype.com/artifact/io.portone/server-sdk)을 통해 배포되고 있습니다.

`io.portone:server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="Apache Maven">

```xml
<dependency>
  <groupId>io.portone</groupId>
  <artifactId>server-sdk</artifactId>
  <version>x.x.x</version>
</dependency>
```

</div>

<div class="tabs-content" data-title="Gradle (Kotlin)">

```kotlin
implementation("io.portone:server-sdk:x.x.x")
```

</div>

<div class="tabs-content" data-title="Gradle (Groovy)">

```groovy
implementation 'io.portone:server-sdk:x.x.x'
```

</div>

<div class="tabs-content" data-title="sbt">

```scala
libraryDependencies += "io.portone" % "server-sdk" % "x.x.x"
```

</div>

</div>


# https://developers.portone.io/sdk/ko/v2-sdk/billing-key-and-pay-request

---
title: requestIssueBillingKeyAndPay 요청 형식
description: requestIssueBillingKeyAndPay 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrq
---

## `requestIssueBillingKeyAndPay` 요청 데이터 정의



# https://developers.portone.io/sdk/ko/v2-sdk/billing-key-and-pay-response

---
title: requestIssueBillingKeyAndPay 응답 형식
description: requestIssueBillingKeyAndPay 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrt
---

## `requestIssueBillingKeyAndPay` 응답 데이터 정의



# https://developers.portone.io/sdk/ko/v2-sdk/billing-key-request

---
title: requestIssueBillingKey 요청 형식
description: requestIssueBillingKey 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrq
---

## `requestIssueBillingKey` 요청 데이터 정의



# https://developers.portone.io/sdk/ko/v2-sdk/billing-key-response

---
title: requestIssueBillingKey 응답 형식
description: requestIssueBillingKey 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrt
---

## `requestIssueBillingKey` 응답 데이터 정의



# https://developers.portone.io/sdk/ko/v2-sdk/changelog

---
title: 버전별 Changelog
description: '@portone/browser-sdk 패키지의 버전별 변경 사항을 확인하세요.'
targetVersions:
  - v2
---



# https://developers.portone.io/sdk/ko/v2-sdk/identity-verification-request

---
title: requestIdentityVerification 요청 형식
description: requestIdentityVerification 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/cft
---

## `requestIdentityVerification` 요청 데이터 정의



# https://developers.portone.io/sdk/ko/v2-sdk/identity-verification-response

---
title: requestIdentityVerification 응답 형식
description: requestIdentityVerification 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/cft-rt
---

## `requestIdentityVerification` 응답 데이터 정의



# https://developers.portone.io/sdk/ko/v2-sdk/load-issue-billing-key-ui-request

---
title: loadIssueBillingKeyUI 요청 형식
description: loadIssueBillingKeyUI 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrq
---

## `loadIssueBillingKeyUI` 요청 데이터 정의



# https://developers.portone.io/sdk/ko/v2-sdk/load-issue-billing-key-ui-response

---
title: loadIssueBillingKeyUI 응답 형식
description: loadIssueBillingKeyUI 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrt
---

## `loadIssueBillingKeyUI` 응답 데이터 정의

### onIssueBillingKeySuccess



### onIssueBillingKeyFail



# https://developers.portone.io/sdk/ko/v2-sdk/load-payment-ui-request

---
title: loadPaymentUI 요청 형식
description: loadPaymentUI 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrq
---

## `loadPaymentUI` 요청 데이터 정의



# https://developers.portone.io/sdk/ko/v2-sdk/load-payment-ui-response

---
title: loadPaymentUI 응답 형식
description: loadPaymentUI 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrt
---

## `loadPaymentUI` 응답 데이터 정의

### onPaymentSuccess



### onPaymentFail



# https://developers.portone.io/sdk/ko/v2-sdk/payment-request

---
title: requestPayment 요청 형식
description: requestPayment 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrq
---

## `requestPayment` 요청 데이터 정의



# https://developers.portone.io/sdk/ko/v2-sdk/payment-response

---
title: requestPayment 응답 형식
description: requestPayment 호출 결과로 받는 데이터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrt
---

## `requestPayment` 응답 데이터 정의



# https://developers.portone.io/sdk/ko/v2-sdk/readme

---
title: JavaScript SDK 레퍼런스
description: 결제창 연동시 사용되는 SDK에 대한 설명 문서입니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/readme
---



# https://developers.portone.io/sdk/ko/v2-sdk/update-load-issue-billing-key-ui-request

---
title: updateLoadIssueBillingKeyUIRequest 요청 형식
description: updateLoadIssueBillingKeyUIRequest 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrq
---

## `updateLoadIssueBillingKeyUIRequest` 요청 데이터 정의



# https://developers.portone.io/sdk/ko/v2-sdk/update-load-payment-ui-request

---
title: updateLoadPaymentUIRequest 요청 형식
description: updateLoadPaymentUIRequest 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrq
---

## `updateLoadPaymentUIRequest` 요청 데이터 정의



# https://developers.portone.io/opi/ko/integration/webhook/readme-v2

---
title: 웹훅 연동하기
description: 웹훅 알림을 받아 결제 정보를 동기화할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/webhook/readme-v1
---

(관련 이미지 첨부)

## 웹훅(Webhook) 이란?

특정 이벤트가 발생하였을 때 타 서비스나 응용프로그램으로 알림을 보내는 기능입니다.
Webhook 프로바이더는 해당 이벤트가 발행하면 `HTTP POST` 요청을 생성하여 callback URL(endpoint)로 이벤트 정보을 보냅니다.
주기적으로 데이터를 폴링(polling)하지 않고 원하는 이벤트에 대한 정보만 수신할 수 있어서 webhook은 리소스나 통신 측면에서 훨씬 더 효율적입니다.
Webhook을 활용하면 커스텀 기능이나 다른 애플리케이션과 연동하여 기능을 확장할 수 있습니다.

포트원에서는 결제 완료 등 이벤트가 발생했을 때 고객사의 서버에 전송하고 있습니다.
이벤트가 발생하면 포트원 콘솔에 등록된 웹훅 URL로 HTTP POST 요청을 보냅니다. 고객사에서는 이 요청을 받아 최신 결제 정보로 동기화하도록 구현해야 합니다.

## 웹훅 연동이 꼭 필요한가요?

안정적인 결제 처리를 위해 웹훅 연동을 강력히 권장합니다.
인터넷 연결 끊김, 브라우저 자동 새로고침 등의 이유로 클라이언트에서 결제 완료에 대한 응답을 받지 못하는 경우가 간헐적으로 발생합니다.
이런 경우 연동한 웹훅을 통해 누락 없이 결제 정보를 동기화할 수 있습니다.

## 웹훅 버전에 따른 스키마 안내

웹훅 형식에 하위 호환이 보장되지 않는 변경이 있을 경우 새로운 웹훅 버전이 추가됩니다. 어떤 버전의 웹훅을 받을지 콘솔에서 설정할 수 있습니다.

현재 웹훅 버전은 두 가지입니다.

- `2024-04-25` (최신)
  - 본문 형식이 Standard Webhooks를 따르도록 변경 (Standard Webhooks 기반 메시지 검증의 경우 기존 버전에서도 사용 가능)
  - 메시지의 확장성을 명시

- `2024-01-01`
  - 최초 웹훅 버전

### `2024-04-25` (최신) 사용 시

- `type`: 웹훅을 트리거한 이벤트의 타입입니다. 가능한 `type`의 종류는 아래와 같습니다.
  - **결제 관련**
    - `Transaction.Ready`: **결제창이 열렸을 때**
    - `Transaction.Paid`: **결제(예약 결제 포함)가 승인**되었을 때 (모든 결제 수단)
    - `Transaction.VirtualAccountIssued`: **가상계좌가 발급**되었을 때
    - `Transaction.PartialCancelled`: **결제가 부분 취소**되었을 때
    - `Transaction.Cancelled`: **결제가 완전 취소**되었을 때
    - `Transaction.Failed`: **결제(예약 결제 포함)가 실패**했을 때
    - `Transaction.PayPending`: **결제 승인 대기** 상태가 되었을 때 (해외 결제시 발생 가능)
    - `Transaction.CancelPending`: (결제 취소가 비동기로 수행되는 경우) **결제 취소를 요청**했을 때
    - `Transaction.DisputeCreated`: **분쟁이 발생**되었을 때
    - `Transaction.DisputeResolved`: **분쟁이 해소**되었을 때

  - **빌링키 발급 관련**
    - `BillingKey.Ready`: **빌링키 발급창이 열렸을 때**
    - `BillingKey.Issued`: **빌링키가 발급**되었을 때
    - `BillingKey.Failed`: **빌링키 발급이 실패**했을 때
    - `BillingKey.Deleted`: **빌링키가 삭제**되었을 때
    - `BillingKey.Updated`: **빌링키가 업데이트**되었을 때

- `timestamp`: 해당 웹훅을 트리거한 이벤트의 발생 시각(RFC 3339 형식)입니다.
  고객사 서버가 웹훅을 수신하는 데 실패하여 재시도가 일어나도 이 값은 동일하게 유지됩니다.

- `data`: 웹훅을 트리거한 이벤트의 실제 세부 내용입니다. `type` 에 따라 해당 필드의 스키마가 달라질 수 있으며, `type` 별 상세 스키마는 아래와 같습니다.
  - **공통**
    - `storeId`: 웹훅을 트리거한 상점의 아이디입니다.

  - **결제 관련**
    - `paymentId`: 고객사에서 채번한 결제 건의 고유 주문 번호입니다.
    - `transactionId`: 포트원에서 채번한 고유 거래 번호입니다. 한 결제 건에 여러 시도가 있을 경우 transactionId가 달라질 수 있습니다.
    - `cancellationId`: (optional) 포트원에서 채번한 결제건의 취소 고유 번호입니다. `type`이 `Transaction.PartialCancelled`, `Transaction.Cancelled`, `Transaction.CancelPending` 일 때 존재합니다.

  - **빌링키 발급 관련**
    - `billingKey`: 포트원에서 채번한 빌링키입니다.

<div class="hint" data-style="info">

**웹훅 메시지에는 별도 안내 없이 `type` 값이나 새로운 필드가 추가될 수 있습니다.**

- 알지 못하는 `type`을 가진 메시지의 경우 에러를 발생시키지 말고 메시지 전체를 무시해 주세요.
- 알지 못하는 필드가 있는 경우 해당 필드를 무시해 주세요.

</div>

**웹훅 본문 예시 1**: `type`이 `Transaction.Cancelled` 일 때

```json
{
  "type": "Transaction.Cancelled",
  "timestamp": "2024-04-25T10:00:00.000Z",
  "data": {
    "paymentId": "example-payment-id",
    "storeId": "store-ae356798-3d20-4969-b739-14c6b0e1a667",
    "transactionId": "55451513-9763-4a7a-bb43-78a4c65be843",
    "cancellationId": "0cdd91e9-4e7c-44a3-a72e-1a6511826c2b"
  }
}
```

**웹훅 본문 예시 2**: `type`이 `BillingKey.Issued` 일 때

```json
{
  "type": "BillingKey.Issued",
  "timestamp": "2024-04-25T10:00:00.000Z",
  "data": {
    "storeId": "store-61e0db3d-b967-47db-8b50-96002da90d55",
    "billingKey": "billing-key-75ae3cab-6afe-422d-bf34-3a7b1762451d"
  }
}
```

### `2024-01-01` 사용 시

- `payment_id`: 고객사에서 채번한 결제 건의 고유 주문 번호입니다.

- `tx_id`: 포트원에서 채번한 고유 거래 번호입니다. 한 결제 건에 여러 시도가 있을 경우 transactionId가 달라질 수 있습니다.

- `status`: 결제건의 상태입니다. 가능한 `status`의 종류는 아래와 같습니다.
  - `Ready`: **결제창이 열렸을 때**
  - `Paid`: **결제(예약 결제 포함)가 승인**되었을 때 (모든 결제 수단, 가상계좌의 경우 계좌에 입금이 완료되는 순간)
  - `VirtualAccountIssued`: **가상계좌가 발급**되었을 때
  - `PartialCancelled`: **결제가 부분 취소**되었을 때
  - `Cancelled`: **결제가 완전 취소**되었을 때
  - `Failed`: **결제(예약 결제 포함)가 실패**했을 때
  - `PayPending`: **결제 승인 대기** 상태가 되었을 때 (해외 결제시 발생 가능)
  - `CancelPending`: (결제 취소가 비동기로 수행되는 경우) **결제 취소를 요청**했을 때

웹훅 payload 예시:

```json
{
  "payment_id": "example-payment-id",
  "tx_id": "55451513-9763-4a7a-bb43-78a4c65be843",
  "status": "Ready"
}
```

## 웹훅 URL 설정

웹훅 URL을 설정하면 포트원에서 이벤트 발생 시 해당 URL로 웹훅을 전송합니다. URL은 관리자 콘솔에서 두 가지 형태로 지원하고 있습니다.
콘솔에서 설정했더라도 결제 시에 `noticeUrls`파라미터로 지정하여 호출하는 경우 해당 URL로 전송됩니다.

### 1. 관리자 콘솔 설정

웹훅을 통해 결제 정보를 통보받을 URL을 설정하는 과정은 다음과 같습니다.

(관련 이미지 첨부)

- 포트원 관리자 콘솔 내 \[결제 연동] → \[연동 관리] → **\[결제알림(Webhook) 관리]** 탭을 선택합니다.

- \[웹훅 버전] 항목에서 **\[결제모듈 V2]** 를 선택합니다.

- \[설정 모드] 항목에서 \[실연동] 또는 \[테스트]를 선택합니다. (연동 환경에 따라 웹훅 URL을 각각 다르게 설정할 수 있습니다.)

- **Endpoint URL**에 웹훅 데이터를 수신할 URL을 입력합니다.

- **Content Type**을 설정합니다. `Content Type`은 `application/json` 또는
  `application/x-www-form-urlencoded` 중 하나로 설정할 수 있습니다.

  > **`2024-04-25` 버전부터는 `application/json` 만 지원합니다.**

- `저장` 버튼을 클릭합니다.

<div class="hint" data-style="info">

`호출 테스트` 버튼을 클릭하면 저장된 URL로 테스트 웹훅이 발송됩니다. 이를 통해 올바른 URL과 Content-Type을 지정했는지 테스트할 수 있습니다.
콘솔 내 화면에서 Endpoint URL 변경 후 저장하지 않은 채 호출테스트를 시도하시면 이전에 저장된 주소로 발송되오니 주의하시길 바랍니다.

</div>

### 2. 결제 파라미터 설정

포트원 SDK의 `PortOne.requestPayment()` 혹은 `PortOne.requestIssueBillingKey()` 함수 파라미터 중
`noticeUrls`를 통해 관리자콘솔에서 설정한 웹훅 수신 URL을 덮어쓸 수 있습니다.

```ts
PortOne.requestPayment({
  /* 객체 생략 */
  noticeUrls: ["https://수신할-웹훅-URL"],
});
```

## 웹훅 메시지 검증하기

웹훅 수신 주소는 공개된 URL이기 때문에, 기본적으로는 수신한 웹훅 메시지의 내용을 신뢰할 수 없습니다.
예를 들어, 결제 완료 알림을 웹훅으로 수신했다고 해서 꼭 결제가 완료된 것이 아닐 수 있습니다.

웹훅 메시지를 처리하는 전략은 두 가지가 있습니다.

- 웹훅 메시지를 신뢰하지 않고, 결제 건의 상태를 포트원 API를 통해 새로 조회하여 이 응답만 신뢰하기
- 웹훅 메시지를 검증하기

두 가지 방법 모두 외부에서 위조한 요청을 신뢰하지 않는다는 점에서는 동일합니다.
여기서는 보다 근본적인 방법인 웹훅 메시지 검증에 대해 설명합니다.

포트원은 [Standard Webhooks](https://www.standardwebhooks.com/)에 따른 메시지 검증을 지원합니다.
또한, JVM 및 JS 환경의 경우 메시지 검증 코드를 서버 SDK를 통해 배포하고 있습니다.

<div class="hint" data-style="info">

IP 필터가 필요하신 고객사의 경우, 아래의 IP를 필터에 추가해 주세요.

- 포트원 V2 웹훅 IP: `52.78.5.241`

포트원의 웹훅 IP가 추가 또는 변경되는 경우 미리 연락처로 메일을 보내 드립니다.
이 경우에 IP 필터를 대응해 주실 수 있어야 시스템 영향 없이 웹훅을 계속 수신하실 수 있습니다.

</div>

### 1. 웹훅 시크릿 발급하기

(관련 이미지 첨부)

- 포트원 관리자 콘솔 내 \[결제 연동] → \[연동 관리] → **\[결제알림(Webhook) 관리]** 탭을 선택합니다.
- \[웹훅 버전] 항목에서 **\[결제모듈 V2]** 를 선택합니다.
- \[설정 모드] 항목에서 \[실연동] 또는 \[테스트]를 선택합니다. (연동 환경에 따라 웹훅 시크릿을 각각 발급할 수 있습니다.)
- 우측 하단의 **\[웹훅 시크릿 발급]** 버튼을 클릭합니다.

### 2. 시크릿을 이용해 signature 검사하기

포트원에서 보내는 웹훅에는 **해당 시크릿을 이용해 생성된 시그니처가 요청 헤더를 통해 전달**됩니다.
포트원에서 제공하는 서버 SDK를 이용하면 고객사 서버에서 웹훅을 수신할 때 시그니처가 유효한지 손쉽게 검증할 수 있습니다.
현재 제공되고 있는 서버 SDK 목록은 아래와 같습니다.

#### JavaScript

![NPM Version](https://img.shields.io/npm/v/%40portone%2Fserver-sdk)

![JSR Version](https://img.shields.io/jsr/v/%40portone/server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/javascript)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/js)

JavaScript 및 TypeScript에서 사용 가능한 JavaScript SDK는 [npm](https://www.npmjs.com/package/@portone/server-sdk)과 [jsr](https://jsr.io/@portone/server-sdk)을 통해 배포되고 있습니다.
`@portone/server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="npm">

```shell
npm install --save @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="yarn">

```shell
yarn add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="pnpm">

```shell
pnpm add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="bun">

```shell
bun add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="deno">

```shell
deno add jsr:@portone/server-sdk
```

</div>

<div class="tabs-content" data-title="ni">

```shell
ni @portone/server-sdk
```

</div>

</div>

Node.js의 경우 v20 이상에서 정상 동작하며, v20 미만 버전은 폴리필이 필요합니다.

<details>

<summary>폴리필 방법</summary>

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js v18 이상 v20 미만">

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
globalThis.crypto = require("node:crypto").webcrypto;
```

```javascript title="ESM"
import { webcrypto } from "node:crypto";
globalThis.crypto = webcrypto;
```

</div>

<div class="tabs-content" data-title="Node.js v18 미만">

[@whatwg-node/fetch](https://www.npmjs.com/package/@whatwg-node/fetch) 패키지를 의존성에 추가해 주세요.

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
const { fetch, crypto } = require("@whatwg-node/fetch");
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

```javascript title="ESM"
import { crypto, fetch } from "@whatwg-node/fetch";
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

</div>

</div>

</details>

#### Python

![PyPI - Version](https://img.shields.io/pypi/v/portone-server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/python)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/py)

Python SDK는 [PyPI](https://pypi.org/project/portone-server-sdk)를 통해 배포되고 있습니다.
`portone-server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="uv">

```shell
uv add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="poetry">

```shell
poetry add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="rye">

```shell
rye add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pipenv">

```shell
pipenv install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Conda">

```shell
conda install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Hatch">

```toml title="pyproject.toml"
[project]
dependencies = [
  "portone-server-sdk~=x.x.x"
]
```

</div>

<div class="tabs-content" data-title="PDM">

```shell
pdm add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pip requirements">

```shell title="requirements.txt"
portone-server-sdk ~= x.x.x
```

</div>

</div>

Python 3.9 이상에서 정상 동작합니다.

#### JVM

[![Maven Central Version](https://img.shields.io/maven-central/v/io.portone/server-sdk)](https://central.sonatype.com/artifact/io.portone/server-sdk)

[![javadoc](https://javadoc.io/badge2/io.portone/server-sdk/javadoc.svg)](https://javadoc.io/doc/io.portone/server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/jvm)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/jvm)

Java, Kotlin, Scala 등에서 사용 가능한 JVM SDK는 [Maven](https://central.sonatype.com/artifact/io.portone/server-sdk)을 통해 배포되고 있습니다.

`io.portone:server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="Apache Maven">

```xml
<dependency>
  <groupId>io.portone</groupId>
  <artifactId>server-sdk</artifactId>
  <version>x.x.x</version>
</dependency>
```

</div>

<div class="tabs-content" data-title="Gradle (Kotlin)">

```kotlin
implementation("io.portone:server-sdk:x.x.x")
```

</div>

<div class="tabs-content" data-title="Gradle (Groovy)">

```groovy
implementation 'io.portone:server-sdk:x.x.x'
```

</div>

<div class="tabs-content" data-title="sbt">

```scala
libraryDependencies += "io.portone" % "server-sdk" % "x.x.x"
```

</div>

</div>

Server SDK 사용을 원치 않으시거나 SDK가 지원되지 않는 언어를 이용중이시라면 메시지 검증 코드를 직접 작성하실 수 있습니다.
포트원의 웹훅 검증 절차는 [Standard Webhooks](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md) 스펙을
준수하고 있으므로, 해당 스펙에서 안내된 대로 검증 코드를 작성하시면 됩니다. 해당 저장소에는 여러 언어로 레퍼런스 구현도 작성되어 있습니다.

### 3. 무중단으로 시크릿 교체하기

시크릿은 항상 기밀성 있게 관리되어야 하지만, 실수로 인해 타인에게 노출될 수 있고 시크릿을 얻은 누군가는 이를 악용할 수 있습니다.
이러한 경우에 대비해 포트원에서는 **고객사의 서비스에 영향을 주지 않고 무중단으로 기존 시크릿을 새 시크릿으로 교체**하는 방법을 가이드하고 있습니다.

- 먼저 웹훅 시크릿을 추가로 하나 더 발급합니다. (웹훅 시크릿은 테스트/실연동 환경별로 각각 동시에 **최대 2개까지** 발급 가능합니다.)

- 고객사 서버 코드에서 사용되고 있던 시크릿을 새로 발급한 시크릿으로 교체합니다.
  (시크릿은 기밀 정보이므로 어플리케이션 내에 하드코딩하지 않고 환경 변수로 관리하시는 것을 권장합니다.)

(관련 이미지 첨부)

- 더 이상 기존 시크릿이 고객사 서버에서 사용되지 않는 것을 확인한 후, 콘솔에서 기존 시크릿을 만료시킵니다.

## 웹훅 요청 처리 코드 예시

다음은 포트원으로부터 보내진 웹훅 요청을 고객사 서버에서 받아 처리하는 예시 코드입니다.
본 코드는 참고용으로 작성된 코드이며, Server SDK를 이용한 signature verify 과정과
포트원 서버에서 결제 정보를 조회하여 검증 및 저장하는 과정을 포함하고 있습니다.

```ts title="Express"
import * as PortOne from "@portone/server-sdk";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const portone = PortOne.PortOneClient(process.env.PORTONE_API_SECRET);

// 웹훅 검증 시 텍스트로 된 body가 필요합니다.
app.use(
  "/portone-webhook",
  bodyParser.text({
    type: "application/json",
  }),
);

// POST 요청을 받는 /portone-webhook
app.post("/portone-webhook", async (req, res, next) => {
  try {
    try {
      // 웹훅 메시지를 검증합니다.
      // 시그니처 불일치 등 검증에 실패할 경우 PortOne.Errors.WebhookVerificationError가 발생합니다.
      const webhook = await PortOne.Webhook.verify(
        process.env.PORTONE_WEBHOOK_SECRET,
        req.body,
        req.headers,
      );
      // 결제 관련 정보일 경우만 처리합니다.
      if ("paymentId" in webhook.data) {
        const { paymentId } = webhook.data;
        // 1. 포트원 결제내역 단건조회 API 호출
        const paymentResponse = await portone.payment.getPayment({ paymentId });

        if (paymentResponse === null) {
          // 웹훅 정보와 일치하는 결제건이 실제로는 존재하지 않는 경우
          return res.status(200).end();
        }

        const { id, status, amount, method } = paymentResponse;
        // 2. 고객사 내부 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
        const order = await OrderService.findById(id);
        if (order.amount === amount.total) {
          switch (status) {
            case "VIRTUAL_ACCOUNT_ISSUED": {
              // 가상 계좌가 발급된 상태입니다.
              // method에 들어 있는 계좌 정보를 이용해 원하는 로직을 구성하세요.
              break;
            }
            case "PAID": {
              // 모든 금액을 지불했습니다! 완료 시 원하는 로직을 구성하세요.
              break;
            }
          }
        } else {
          // 결제 금액이 불일치하여 위/변조 시도가 의심됩니다.
        }
      }
    } catch (e) {
      if (e instanceof PortOne.Webhook.WebhookVerificationError)
        // 결제 검증에 실패했습니다.
        return res.status(400).end();
      throw e;
    }
    res.status(200).end();
  } catch (e) {
    next(e);
  }
});
```

<div class="hint" data-style="info">

**웹훅 관련 정보**

Connection Timeout 및 Read Timeout 모두 30초 입니다.

</div>

<div class="hint" data-style="info">

**웹훅 처리 전에 브라우저 결제 완료 처리가 진행되는 경우**

기본적으로 포트원 서버는 웹훅을 호출한 뒤 고객사 응답을 기다리지 않고 브라우저에 302 redirect 응답을 보내기 때문에 결과 도달에 대한 순서를 보장하지 않습니다. 다만 고객사 요청이 있을 경우 webhook 호출 이후에 브라우저에 302 redirect 또는 callback 응답을 보내어 순서를 보장해 드리고 있습니다. 웹훅 우선순위 요청은 <support@portone.io> 로 고객사 식별코드를 기재하여 요청해 주시면 됩니다.

</div>

<div class="hint" data-style="info">

**웹훅 재전송 정책**

네트워크 문제나 고객사 오류 등으로 웹훅이 실패할 경우 최대 5회까지 웹훅을 재전송합니다.

재전송 시간은 exponential backoff를 적용하여 0 → 1 → 4 → 16 → 64 → 256분을 기다립니다. 이에 더하여 무작위로 지연 시간을 변형하는 jittering이 적용됩니다.

</div>


# https://developers.portone.io/sdk/ko/v2-sdk/_components/sdk-installation

---
title: V2 JavaScript SDK 설치하기
description: 웹 브라우저에서 결제창 연동 시 사용되는 SDK 설치 방법을 안내합니다.
targetVersions:
  - v2
---

포트원 V2 SDK는 npm 레지스트리와 CDN을 통해 배포되고 있습니다.

- npm, yarn 등 패키지 매니저를 사용한다면 의존
  대상으로 [@portone/browser-sdk](https://www.npmjs.com/package/@portone/browser-sdk)를 추가하세요.

- 패키지 매니저를 사용하지 않는다면 `<script>` 요소를 이용하여 CDN에서 SDK를 직접 불러오세요.

- CDN에서 ESM 모듈 형태로도 SDK를 제공하고 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="패키지 의존 대상으로 추가">

사용하는 패키지 매니저에 알맞은 명령어를 실행하세요.

```shell
npm i @portone/browser-sdk
```

```shell
yarn add @portone/browser-sdk
```

```shell
pnpm add @portone/browser-sdk
```

패키지 매니저로 SDK를 불러온 경우 `PortOne` 객체를 import해서 사용합니다.

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
```

</div>

<div class="tabs-content" data-title="<script> 요소로 추가">

```html
<script src="https://cdn.portone.io/v2/browser-sdk.js"></script>
```

`<script>` 요소로 SDK를 불러온 경우 전역 객체 `window`에 `PortOne` 객체가 추가됩니다.

</div>

<div class="tabs-content" data-title="ESM 모듈로 추가">

ESM 모듈을 사용하는 경우 URL에서 `PortOne` 객체를 직접 import할 수 있습니다.

```javascript
import * as PortOne from "https://cdn.portone.io/v2/browser-sdk.esm.js";
```

</div>

</div>

<div class="hint" data-style="info">

**타입스크립트 지원**

포트원 V2 SDK는 타입스크립트 선언 파일(`.d.ts`)의 형식으로 타입 정보를 제공하고 있습니다. npm 레지스트리를 이용하는 경우 각종 개발 환경에서 별도 설정 없이 사용 가능합니다.

</div>


# https://developers.portone.io/opi/ko/integration/pg/v2/danal-identity-verification

---
title: 다날 본인인증
description: 다날 본인인증 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 다날 본인인증 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)  페이지의 내용을 참고하여 채널 설정을 진행합니다.

## SDK 방식으로 본인인증하기

- [본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/readme-v2) 페이지의 내용을 참고하여 연동을 진행합니다.

### 전화번호 고정하기

`customer.phoneNumber` 값을 채워 요청을 보내면 본인인증 창에서 해당 값으로 전화번호가 고정됩니다.

> 전화번호를 입력하실 때에는 `-` 없이 숫자만 입력해주세요.

### 이름 고정하기

`customer.fullName` 혹은 (`customer.firstName` + `customer.lastName`) 값을 채워 보내면 본인인증
창에서 해당 값으로 이름이 고정됩니다.

> `customer.firstName` 과 `customer.lastName` 을 이용하실 경우엔 성을 `lastName`에, 이름을 `firstName`에 입력해주세요.
>
> ex) 이름이 "**홍길동**"인 경우: `customer.lastName == '홍'` & `customer.firstName == '길동'`

## API 방식으로 본인인증하기

- [본인인증 관련 API](https://developers.portone.io/api/rest-v2/identityVerification) 페이지의 내용을 참고하여 연동을 진행합니다.

## 다날 특수 파라미터 안내

포트원에서는 `bypass` 파라미터를 통해 다날에서 특수하게 지원하는 파라미터들을 입력할 수 있도록 지원하고 있습니다.

- `IsCarrier`: (SDK) 본인인증 창이 열렸을 때, 해당 통신사만 활성화시킬 수 있습니다.
- `AGELIMIT`: (SDK, API) 본인인증을 진행할 수 있는 최소 나이를 설정할 수 있습니다.
- `CPTITLE`: (SDK, API) 고객사 서비스 URL 혹은 본인확인 기능 사용 경로를 입력할 수 있습니다.

SDK, API 에서 각각 아래와 같은 방식으로 특수 파라미터들을 입력하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="bypass 파라미터 예시">

```ts
// 필요한 파라미터를 선택하여 입력해주세요.
const danalBypass = {
  danal: {
    IsCarrier: "KTF",
    AGELIMIT: 20,
    CPTITLE: "www.MarketA.co.kr",
  },
};
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 사용 예시">

SDK의 `requestIdentityVerification` 함수의 파라미터 중 `bypass` 필드에 아래와 같이 값을 채울 수 있습니다.

```ts
PortOne.requestIdentityVerification({
  /* 기타 파라미터 생략 */
  bypass: danalBypass,
});
```

</div>

<div class="tabs-content" data-title="API 사용 예시">

[본인인증 요청 API](https://developers.portone.io/api/rest-v2/identityVerification#post%20%2Fidentity-verifications%2F%7BidentityVerificationId%7D%2Fsend)를 사용할 경우, bypass 필드에 아래 Json을 Stringify 해서 입력하셔야 합니다.

```ts
await axios({
  url: `https://api.portone.io/identity-verifications/${encodeURIComponent(identityVerificationId)}/send`,
  method: "post",
  headers: { "Content-Type": "application/json" },
  data: {
    /* 기타 파라미터 생략 */
    bypass: danalBypass,
  },
});
```

</div>

</div>

### `IsCarrier` 파라미터 사용 시 유의사항

가능한 값: `SKT`, `KTF`, `LGT`, `MVNO`

여러 개의 통신사를 활성화시키려면 위 값들을 semicolon(`;`) 으로 이어야 합니다. ex) `SKT;KTF`

### `CPTITLE` 파라미터 사용 시 유의사항

본인인증 동작에 영향을 주지는 않지만, KISA의 ePrivacy Clean 서비스 연동을 위해 설정을 권장합니다.

해당 값 설정에 대한 가이드는 아래와 같습니다.

- 본인확인 기능을 앱에서만 사용하는 경우 서비스 홈 URL 입력. Ex) `m.login.MarketC.co.kr`
- 본인확인 기능을 사용하는 웹 페이지가 존재할 경우 해당 URL 입력. Ex) `www.MarketA.co.kr`
- 웹 서비스 URL 자체가 존재하지 않는 경우 서비스 이름 (app 이름) 입력. Ex) `마켓A`

해당 값을 넘기지 않을 경우 `포트원`으로 default 값을 채웁니다.

## 일반 파라미터 유의사항 안내

### `customer.id` 파라미터 사용 시 유의사항

고객의 식별 아이디를 입력할 때에는 글자수 200자 이내로 제한됩니다.


# https://developers.portone.io/opi/ko/integration/pg/v2/eximbay-v2

---
title: 엑심베이
description: 엑심베이 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.
- V2 결제 모듈을 사용하시려면 엑심베이 신모듈로 연동하셔야 합니다.

## 결제 창 호출

브라우저 SDK의 `PortOne.requestPayment` 함수를 사용해 결제창을 호출합니다.
엑심베이 연동만을 위한 파라미터는 [브라우저 SDK 파라미터 목록](https://developers.portone.io/sdk/ko/v2-sdk/payment-request?v=v2#bypass-oneof-object)의 `bypass.eximbay_v2` 항목을 참조해 주세요.

## 가능한 결제수단

엑심베이의 경우 포트원의 결제수단 구분과 상관없이 여러 결제수단을 표시할 수 있습니다.
따라서 항상 `payMethod`는 `CARD`로 설정하고, `bypass.eximbay_v2`를 사용해 결제수단을 설정해야 합니다.

- MID에 설정된 기본 결제수단을 전부 표시하려면 `bypass.eximbay_v2.payment`를 생략해야 합니다.
- 특정 결제수단을 단독으로 표시하려면 `bypass.eximbay_v2.payment.payment_method`를 설정합니다.
- 일부 결제수단만을 표시하려면 `bypass.eximbay_v2.payment.multi_payment_method`에 결제수단 목록을 전달합니다.
- 엑심베이의 결제수단 코드는 포트원 코드와 상이하므로, [EXIMBAY Docs](https://developer.eximbay.com/eximbay/api_sdk/code-organization.html#paymentCode)에서 확인 후 입력해야 합니다.

## 유의사항

- `products` 입력 시 `link`를 필수로 입력해야 합니다.

- 네이버페이 포인트로 결제할 경우에는 `bypass.eximbay_v2.tax` 내용을 모두 입력해야 합니다.

- 계좌이체 사용 시에는 현금영수증 발급을 위해 반드시 `bypass.eximbay_v2.tax.receipt_status`를 `Y`로 입력해야 합니다.

- `bypass.eximbay_v2.payment_method`에 일본 편의점 결제를 지정할 경우 `customer.phoneNumber`을 필수로 입력해야 합니다.

- 간편결제 사용 시 `products`를 필수로 입력해야 합니다.

- 아래 결제수단의 경우 사용이 제한되므로 결제 연동 시 유의해 주시기 바랍니다.
  - 가상계좌(`P305`) : 호환성 이슈로 추후 지원 예정
  - Klarna(`P197`) : 엑심베이 정책에 따라 신규 결제 사용 불가


# https://developers.portone.io/opi/ko/integration/pg/v2/hyphen

---
title: 하이픈
description: 하이픈 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/hyphen
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 가능한 결제 수단

- 간편 결제

  하이픈은 계좌 간편 결제를 전용으로 지원하는 PG사로, 등록한 계좌를 이용한 결제만 가능하며 다른 결제 수단은 지원하지 않습니다.

  따라서 `payMethod` 파라미터를 아래와 같이 설정해야 합니다.

  - 간편결제 : `EASY_PAY`

### 계좌 간편 결제란?

고객이 PG사에서 제공하는 결제 페이지에서 본인 명의의 계좌를 등록하고, 상품 구매 시 비밀번호 인증 등을 통해 등록된 계좌에서 출금하여 결제하는 서비스를 의미합니다.

### 계좌 간편 결제의 장점

계좌 간편 결제는 아래와 같은 장점을 제공합니다.

1. **우수한 사용성**

   보안 프로그램이나 추가 앱 설치 과정이 필요하지 않습니다.
   또한 복잡한 계좌 입력이나 인증 과정 없이 최초 한 번만 계좌를 등록하고 이후에는 비밀번호를 통해 간편하게 인증할 수 있습니다.

2. **낮은 수수료**

   바로 계좌 결제는 오픈 뱅킹 기반의 계좌 이체 서비스로, 신용카드 결제에 비해 낮은 수수료로 해당 서비스를 이용할 수 있습니다.

3. **빠른 정산 주기**

   하이픈의 계좌 간편 결제 서비스는 통상 D+2일 주기로 정산을 해드리고 있습니다. 빠른 정산을 통해 현금 흐름을 효율적으로 관리할 수 있습니다.

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 하이픈 채널 사용을 명시해주세요.

하이픈 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    payMethod: "EASY_PAY",
    storeDetails: {
      businessName: "상호명",
    },
    customer: {
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- totalAmount: number

  **결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다. 하이픈의 경우 해당 값은 `EASY_PAY`로 고정해주세요.

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

    - 하이픈의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - firstName?: string

    **구매자 이름**

    - 하이픈의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - lastName?: string

    **구매자 성**

    - 하이픈의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

- storeDetails?: object

  **상점 정보**

  - businessName?: string

    **상호명**

    - 결제창에 표시될 상호명입니다. 입력하지 않으면 포트원 대표상점명으로 표시됩니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - hyphen?: object

    **하이픈에서 제공하는 파라미터 모음**

    - designCd?: string

      **결제창 디자인 색상 코드**

      - `#`으로 시작하는 여섯자리 Hex 값을 입력합니다. (ex. `#C1272C`)

#### 예시 코드

```json title="bypass 예시 코드"
{
  "bypass": {
    "hyphen": {
      "designCd": "#C1272C"
    }
  }
}
```

### 유의사항

<details>

<summary>`paymentId` 허용 문자 및 길이 제한</summary>

`paymentId` 에는 영문, 숫자, `_`(underscore) 만으로 이루어진 문자열만 입력할 수 있습니다.

여기에 포함되지 않는 한글이나 `♤`, `♡`, `♧` 등의 특수 문자는 허용되지 않습니다.

또한 `paymentId`의 최대 길이는 50자이므로, 해당 길이를 넘지 않는 값으로 결제를 요청해주세요.

</details>

<details>

<summary>`orderName` 길이 제한</summary>

`orderName`의 최대 길이는 100byte 입니다. (UTF-8 인코딩 기준)

</details>


# https://developers.portone.io/opi/ko/integration/pg/v2/inicis-unified-identity-verification

---
title: KG이니시스 통합인증
description: KG이니시스 통합인증 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/inicis
---

## KG이니시스 통합인증 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 사전 계약 안내

SMS를 통한 본인인증을 진행하기 위해서는 KG이니시스와 별도 계약이 필요합니다.

## SDK를 통해 본인인증하기

- [본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/readme-v2) 페이지의 내용을 참고하여 연동을 진행합니다.

## KG이니시스 특수 파라미터 안내

포트원에서는 `bypass` 파라미터를 통해 KG이니시스에서 특수하게 지원하는 파라미터들을 입력할 수 있도록 지원하고 있습니다.
`flgFixedUser` 파라미터의 경우 필수로 입력해야 합니다.

- `flgFixedUser`: 인증 창에 고객 정보가 자동으로 입력하도록 설정할 수 있습니다.
- `directAgency`: 인증 업체를 사용자가 선택하지 않고 특정 인증 업체를 통해 인증하도록 설정할 수 있습니다.
- `logoUrl`: 인증 창 좌측 상단 KG이니시스 로고 대신 들어갈 로고의 URL입니다

SDK를 통해 아래와 같이 특수 파라미터들을 입력하실 수 있습니다.

```ts
PortOne.requestIdentityVerification({
  /* 기타 파라미터 생략 */
  bypass: {
    inicisUnified: {
      flgFixedUser: "N",
      directAgency: "PASS",
      logoUrl: "https://www.MarketA.co.kr/logo.png",
    },
  },
});
```

### `flgFixedUser` 사용 시 유의사항

`Y` 또는 `N`만 입력 가능합니다.

`Y`인 경우 이름, 연락처, 출생년도, 출생월, 출생일을 필수로 입력해야 합니다.

### `directAgency` 사용 시 유의사항

인증 업체 코드를 입력해야 합니다.

`SMS`의 경우, KG이니시스와 계약하지 않으면 `알 수 없는 오류가 발생했습니다.` 메시지와 함께 인증 진행이 불가능합니다.

<details>

<summary>인증 업체 코드 확인하기</summary>

- PAYCO(페이코)
- PASS(패스 (통신사))
- TOSS(토스)
- KFTC(금융결제원)
- KAKAO(카카오)
- NAVER(네이버)
- SAMSUNG(삼성패스)
- SHINHAN(신한은행)
- KB(국민은행)
- HANA(하나은행)
- WOORI(우리은행)
- NH(농협은행)
- KAKAOBANK(카카오뱅크)
- SMS(휴대폰 인증, 별도 계약 필요)

</details>

### `logoUrl` 사용 시 주의사항

최적 크기는 가로 164px, 세로 28px입니다.

인증 창은 HTTPS를 사용하므로, HTTP URL 사용 시 이미지가 제대로 표시되지 않을 수 있습니다.


# https://developers.portone.io/opi/ko/integration/pg/v2/inicis-v2

---
title: KG이니시스
description: KG이니시스 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/inicis
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 사전 계약 안내

아래 기능을 사용하시려면 KG이니시스에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 결제 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답(ex. 결제창에서 에스크로 결제를 했으나 비-에스크로 결제 응답을 받음)을 얻게 될 수 있으니 주의해주시기 바랍니다.

- API를 통한 수기 결제 (가상계좌, 카드)
- API를 통한 빌링키 발급
- 에스크로 결제
- 상점분담무이자 설정
- 부가세 및 비과세 금액 직접 설정
- 카드사 포인트 사용 여부 설정
- OK캐시백 적립 옵션 설정
- 부분무이자 설정
- 몰포인트 설정
- 카드사/간편결제 다이렉트 호출
- 휴대폰 결제 익월 환불

## 가능한 결제 수단

- **결제창 일반 결제**

  `payMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드 : `CARD`
  - 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 상품권 : `GIFT_CERTIFICATE`
  - 휴대폰 소액 결제 : `MOBILE`
  - 간편결제 : `EASY_PAY`

- **결제창 빌링키 발급**

  `billingKeyMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `CARD`

- **API 수기(키인) 결제**

  `method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card` 로 설졍하여 카드 관련 파라미터 입력
  - 가상계좌: `virtualAccount` 로 설정하여 가상계좌 관련 파라미터 입력

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Finstant)
  를 참고해주시기 바랍니다.

- **API 빌링키 발급**

  `method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card` 로 설졍하여 카드 관련 파라미터 입력

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v2/billingKey#post%20%2Fbilling-keys)를 참고해주시기 바랍니다.

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey`파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KG이니시스 채널 사용을 명시해주세요.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    payMethod: "CARD",
    customer: {
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- totalAmount: number

  **결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - 신용카드 : `CARD`
  - 실시간 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제 : `MOBILE`
  - 간편 결제 : `EASY_PAY`

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - firstName?: string

    **구매자 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - lastName?: string

    **구매자 성**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - phoneNumber?: string

    **구매자 연락처**

    - KG이니시스의 PC 결제의 경우 필수로 입력해야 합니다. (모바일인 경우에는 optional)

  - email?: string

    **구매자 이메일**

    - KG이니시스의 PC 결제의 경우 필수로 입력해야 합니다. (모바일인 경우에는 optional)

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - inicis\_v2?: InicisV2BypassOnPc & InicisV2BypassOnMobile

    **이니시스 bypass 파라미터**

    KG이니시스는 PC 결제 모듈과 모바일 결제 모듈이 분리되어 있기 때문에 bypass 파라미터 또한 PC용과 모바일용이 분리되어 있습니다.

    - **bypass 예시 코드**

      ```json
      {
        "bypass": {
          "inicis_v2": {
            "logo_url": "https://portone.io/assets/portone.87061e94.avif",
            "logo_2nd": "https://admin.portone.io/assets/img/auth/lock.png",
            "parentemail": "parentemail",
            "Ini_SSGPAY_MDN": "01012341234",
            "acceptmethod": ["SKIN(#C1272C)", "below1000", "ocb"],
            "P_CARD_OPTION": "selcode=14",
            "P_NMANE": "포트원",
            "P_RESERVED": ["below1000=Y", "noeasypay=Y"]
          }
        }
      }
      ```

    **PC용 파라미터**

    - logo\_url?: string

      결제창에 삽입할 메인 로고 url

      결제창 중앙 상단에 표시됩니다.
      이미지 권장 사이즈는 89\*18 입니다.

    - logo\_2nd?: string

      결제창에 삽입할 서브 로고 url

      결제창 우측 상단에 표시됩니다.
      이미지 권장 사이즈는 64\*13 입니다.

    - parentemail?: string

      보호자 이메일 주소

      14세 미만 고객의 경우 필수 입력입니다.
      "@", "." 외의 특수문자는 입력 불가합니다.

    - Ini\_SSGPAY\_MDN?: string

      SSGPAY 결제요청 시 PUSH 전송 휴대폰번호

      `-` 없이 숫자만 허용합니다.

    - acceptmethod?: string\[]

      추가 옵션

      아래 string 중 원하는 옵션들을 골라 array 형태로 입력합니다.

      - SKIN(${string})?: string

        결제창 색상

        `string` 부분에는 `#`으로 시작하는 여섯자리 Hex 값을 입력합니다. (ex. `SKIN(#C1272C)`)

      - below1000?: string

        (카드결제 & 간편결제 시) 1000원 미만 결제 허용 옵션

      - ocb?: string

        (카드결제 시) 카드 메인화면에 OCB 적립을 위한 카드번호 창 표시옵션 (별도 계약시 이용 가능)

      - paypopup?: string

        (카드결제 시) 안심클릭계열 신용카드 POPUP 형태 표시옵션

      - hidebar?: string

        (카드결제 시) 프로그레스바 미노출 옵션

      - noeasypay?: string

        (카드결제 시) 간편결제 미노출 옵션

      - slimquota(${string})?: string

        부분 무이자 설정 (별도 계약시 이용 가능)

        `string` 부분에는 `코드-개월:개월^코드-개월:개월` 와 같은 형식으로 입력합니다. (ex. `slimquota(11-2:3^34-2:3)`)
        카드사 코드는 [KG이니시스 통합 코드](https://manual.inicis.com/pay/code.html) 페이지에서
        "결제요청 시 카드코드" 섹션을 참고하시기 바랍니다.

      - mallpoint(${string})?: string

        몰포인트 (별도 계약시 이용 가능)

        `string` 부분에는 `카드코드:카드코드` 와 같은 형식으로 입력합니다. (ex. `mallpoint(11:34)`)
        카드사 코드는 [KG이니시스 통합 코드](https://manual.inicis.com/pay/code.html) 페이지에서
        "결제요청 시 카드코드" 섹션을 참고하시기 바랍니다.

    **모바일용 파라미터**

    - P\_CARD\_OPTION?: string

      신용카드 우선선택 옵션

      설정한 카드코드에 해당하는 카드가 선택된 채로 Display 됩니다.
      `selcode=카드코드` 형식으로 입력합니다. (ex. `selcode=14`)

    - P\_MNAME?: string

      가맹점 이름

    - P\_RESERVED?: string\[]

      추가 옵션

      아래 string 중 원하는 옵션들을 골라 array 형태로 입력합니다.

      - below1000=Y?: string

        (카드결제 & 간편결제 시) 1000원 미만 결제 허용 옵션

      - noeasypay=Y?: string

        (카드결제 시) 간편결제 미노출 옵션

      - global\_visa3d=Y?: string

        해외카드 노출 옵션

      - apprun\_check=Y?: string

        (android의 경우) custom url scheme 대신 intent schema(intent://) 호출

### 유의사항

#### 공통

<details>

<summary>PC와 모바일에서 파라미터 필수 여부가 상이합니다.</summary>

위의 주요 파라미터 설명에도 안내되어 있듯이, PC 결제와 모바일 결제에서 필수 여부가 상이한 파라미터가 존재합니다. 아래 필드들은 PC 결제에서는 필수이지만, 모바일 결제에서는 선택입니다.

- `customer.fullName` 혹은 `customer.firstName + customer.lastName`
- `customer.phoneNumber`
- `customer.email`

</details>

<details>

<summary>`paymentId` 에는 ASCII 문자만 허용됩니다.</summary>

`paymentId` 에는 ASCII 문자만으로 이루어진 문자열만 입력할 수 있습니다.

ASCII 문자에 포함되지 않는 한글이나 `♤`, `♡`, `♧` 등의 특수 문자는 허용되지 않습니다.

입력 가능한 ASCII 문자의 종류는 [링크](http://www.ascii-code.com/) → `ASCII printable characters` 섹션을 참고하세요.

</details>

<details>

<summary>지원되는 결제창 언어</summary>

SDK를 통한 결제 요청 파라미터에는 결제창 언어를 지정할 수 있는 `locale` 파라미터가 존재합니다.
PC 결제의 경우 `KO_KR`, `EN_US`, `ZH_CN`을 지원하며, 모바일 결제의 경우 `KO_KR`, `EN_US`만을 지원합니다.

</details>

<details>

<summary>지원되는 결제 통화</summary>

SDK를 통한 결제 요청 파라미터에는 결제 통화를 지정할 수 있는 `currency` 파라미터가 존재합니다.
KG이니시스의 경우 `KRW`와 `USD`를 지원하며, 이 중 `USD`는 카드 결제일 경우에만 지정 가능합니다.

</details>

<details>

<summary>부가세, 면세금액 직접 지정을 위해서는 별도 계약이 필요합니다.</summary>

SDK를 통한 결제 요청 파라미터에는 부가세를 지정할 수 있는 `vat` 파라미터와 면세 금액을 지정할 수 있는 `taxFreeAmount` 파라미터가 존재합니다.
KG이니시스의 경우 부가세 및 면세금액을 직접 지정하기 위해서는 별도 계약이 필요합니다. 별도 계약이 되지 않은 상태에서 `vat`와 `taxFreeAmount`에 값을 지정해 결제를 요청하면
요청한 내용과 다른 금액으로 실결제가 발생할 수 있습니다.

</details>

<details>

<summary>이니시스에서 지원하는 현금영수증 발급 유형</summary>

현금영수증은 현금성 거래인 실시간 계좌이체 및 가상계좌 발급 시 사용이 가능합니다.
KG이니시스의 경우 현금영수증 발급 유형을 `CORPORATE` 혹은 `PERSONAL` 등 파라미터로 제어할 수 없습니다.
어떤 유형의 현금영수증을 발행할지는 항상 결제창 내에서 선택 가능하며, 결제창 호출 파라미터로는 현금영수증을 발행 여부만을 제어할 수 있습니다.
`cashReceiptType` 파라미터를 `ANONYMOUS`로 설정 시 결제창에서 현금영수증 발급 UI가 미노출됩니다.

</details>

#### 카드 결제

<details>

<summary>카드사 다이렉트 호출 시 할부 개월 수 옵션은 고정 할부 개월 수만 지원합니다.</summary>

KG이니시스 경우 **카드사 다이렉트 호출 시 할부 개월 수 옵션은** 고정 할부 개월 수만 지원합니다. 카드사 다이렉트 호출을 설정했으나 할부 개월 수 옵션을 `card.installment.monthOption.fixedMonth` 가 아닌
`card.installment.monthOption.availableMonthList`로 설정할 경우 에러가 발생합니다.

</details>

<details>

<summary>카드사 다이렉트 호출 시 지원하는 카드사 종류</summary>

KG이니시스의 경우 **포트원에서 관리하는 카드사 중 토스뱅크를 제외한 모든 카드사를 지원**합니다. 포트원에서 관리하는 카드사 목록을 확인하시려면
[JS SDK 결제요청 파라미터](https://developers.portone.io/sdk/ko/v2-sdk/payment-request) 페이지에서 `card` -> `cardCompany` 필드 설명을 참고해주세요.

</details>

<details>

<summary>이니시스에서 지원하지 않는 카드 관련 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `useAppCardOnly`: 앱카드만 허용할지 여부
- `useInstallment`: 할부 사용 여부. (KG이니시스의 경우 `installment` 파라미터로 직접 설정 가능합니다.)
- `useFreeInterestFromMall`: 상점부담무이자 사용 여부. (KG이니시스의 경우 `installment.freeInstallmentPlans` 파라미터로 직접 설정 가능합니다.)

</details>

#### 간편 결제

<details>

<summary>이니시스에서 지원하는 간편결제사 종류</summary>

KG이니시스의 경우 아래 간편결제사를 지원합니다. `easyPay.easyPayProvider` 파라미터에 아래 리스트 중 원하는 값을 입력하세요.

- 카카오페이: `KAKAOPAY`
- 네이버페이: `NAVERPAY`
- 삼성페이: `SAUMSUNGPAY`
- ssg페이: `SSGPAY`
- 애플페이: `APPLEPAY`
- lpay: `LPAY`
- 토스페이: `TOSSPAY`
- 페이코: `PAYCO`

</details>

<details>

<summary>이니시스에서 지원하지 않는 간편결제 관련 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `useCardPoint`: 카드사 포인트 사용 여부
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보
- `availablePayMethod`: 간편결제 세부 결제수단 지정 렌더링 옵션
- `availableCards`: 결제 수단으로써 사용 허가할 카드사 리스트
- `useInstallment`: 할부 사용 여부. (KG이니시스의 경우 `installment` 파라미터로 직접 설정 가능합니다.)
- `useFreeInterestFromMall`: 상점부담무이자 사용 여부. (KG이니시스의 경우 `installment.freeInstallmentPlans` 파라미터로 직접 설정 가능합니다.)

</details>

#### 계좌이체

<details>

<summary>이니시스에서 지원하지 않는 계좌이체 관련 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 계좌이체 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보

</details>

#### 가상계좌 결제

<details>

<summary>이니시스에서 지원하지 않는 가상계좌 관련 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 가상계좌 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보
- `fixedOption`: 고정식 가상계좌 옵션. (KG이니시스의 경우 API를 통해서만 고정식 가상계좌 발급이 가능합니다.)

</details>

#### 상품권 결제

<details>

<summary>이니시스에서 지원하는 상품권 종류 및 필수 여부</summary>

KG이니시스 모바일 결제의 경우 `giftCertificateType`을 필수로 입력해야 하며, PC 결제의 경우는 선택 사항입니다.
PC 결제에서 해당 파라미터를 입력하지 않을 경우 결제창 내에서 상품권 종류를 선택할 수 있습니다. KG이니시스에서 지원하는 상품권 종류는 아래와 같습니다.

- 도서문화상품권: `BOOKNLIFE`
- 스마트문상: `SMART_MUNSANG`
- 컬쳐랜드 문화상품권: `CULTURELAND`

</details>

#### 휴대폰 소액 결제

<details>

<summary>`productType` 파라미터는 필수 입력해야 합니다.</summary>

- KG이니시스의 경우 **휴대폰 소액결제시 상품 유형을 구분 짓는 `productType` 파라미터가 필수**로 입력해야 합니다.
- `productType`의 값은 `PRODUCT_TYPE_REAL` 또는 `PRODUCT_TYPE_DIGITAL`를 입력해야 합니다.

</details>

<details>

<summary>결제창에 노출될 통신사 리스트 지정 옵션 지원 여부</summary>

KG이니시스 모바일 결제의 경우 `availableCarriers` 필드를 통해 결제창에 노출될 통신사 리스트를 지정할 수 있습니다. PC에서는 해당 파라미터를 지원하지 않습니다.

</details>

<details>

<summary>이니시스에서 지원하지 않는 휴대폰 소액결제 관련 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `carrier`: 휴대폰 소액결제 통신사 바로 호출을 위한 통신사 구분 값

</details>

## SDK 빌링키 발급 요청하기

빌링키 발급 요청 시에는 `requestIssueBillingKey` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KG이니시스 채널 사용을 명시해주세요.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyMethod: "CARD",
    issueId: "test-issueId",
    issueName: "test-issueName",
    customer: {
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyMethod: string

  **빌링키 발급수단**

  KG이니시스는 빌링키 발급 수단으로 카드만을 지원하므로 해당 파라미터는 `CARD`로 고정해야 합니다.

- issueId: string

  **빌링키 발급 건 고유 ID**

  - 고객사에서 채번하여 사용해야 합니다.
  - KG이니시스의 경우 필수 입력해야 합니다.

- issueName: string

  **빌링키 발급 시 결제창에 표시되는 제목**

  - KG이니시스의 경우 필수 입력해야 합니다.

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - firstName?: string

    **구매자 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - lastName?: string

    **구매자 성**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - phoneNumber?: string

    **구매자 연락처**

    - KG이니시스의 PC 빌링키 발급의 경우 필수로 입력해야 합니다. (모바일인 경우에는 optional)

  - email?: string

    **구매자 이메일**

    - KG이니시스의 PC 빌링키 발급의 경우 필수로 입력해야 합니다. (모바일인 경우에는 optional)

- offerPeriod?: object

  **제공 기간**

  - KG이니시스 모바일 빌링키 발급의 경우 필수로 입력해야 합니다. (PC인 경우에는 optional)

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - inicis\_v2?: object

    **이니시스에서 제공하는 파라미터 모음**

    **개인/법인카드 사용 선택 옵션**

    - 모바일에서만 동작하는 파라미터입니다.
    - 'percard' 혹은 'cocard'를 입력할 수 있습니다.
    - 'percard' 입력 시 개인 카드로만 결제를 진행할 수 있으며, 'cocard' 입력 시 법인 카드로만 결제를 진행 할 수 있습니다.

### 유의사항

<details>

<summary>PC와 모바일에서 파라미터 필수 여부가 상이합니다.</summary>

위의 주요 파라미터 설명에도 안내되어 있듯이, PC 빌링키 발급과 모바일 빌링키 발급에서 필수 여부가 상이한 파라미터가 존재합니다.

아래 필드들은 PC에서는 필수이지만, 모바일에서는 선택입니다.

- `customer.fullName` 혹은 `customer.firstName + customer.lastName`
- `customer.phoneNumber`
- `customer.email`

아래 필드들은 모바일에서는 필수이지만, PC에서는 선택입니다.

- `offerPeriod`

</details>

<details>

<summary>`issueId` 에는 ASCII 문자만 허용됩니다.</summary>

`issueId` 에는 ASCII 문자만으로 이루어진 문자열만 입력할 수 있습니다.

ASCII 문자에 포함되지 않는 한글이나 `♤`, `♡`, `♧` 등의 특수 문자는 허용되지 않습니다.

입력 가능한 ASCII 문자의 종류는 [링크](http://www.ascii-code.com/) → `ASCII printable characters` 섹션을 참고하세요.

</details>

<details>

<summary>`offerPeriod` 파라미터 제약 사항</summary>

SDK를 통한 빌링키 발급 요청 파라미터에는 제공 기간을 나타내는 `offerPeriod` 파라미터가 존재합니다.
날짜 범위를 입력하는 방식(`range`)과 간격을 입력하는 방식(`interval`) 중 하나를 선택하여 입력할 수 있습니다.

- `range` 방식으로 입력할 경우 `from`과 `to` 모두를 입력하셔야 하, `from`은 `to`보다 과거 시간이어야 합니다.
- `interval` 방식으로 입력할 경우는 `1m` 또는 `1y`만 허용됩니다. `1m`를 입력할 경우 `월 정기결제`, `1y`를 입력할 경우 `연 정기결제` 로 빌링키 발급 창에 노출됩니다.

</details>

<details>

<summary>지원되는 결제창 언어</summary>

SDK를 통한 빌링키 발급 요청 파라미터에는 결제창 언어를 지정할 수 있는 `locale` 파라미터가 존재합니다.
PC 빌링키 발급의 경우 `KO_KR`, `EN_US`, `ZH_CN`을 지원하며, 모바일 빌링키 발급의 경우 해당 파라미터를 지원하지 않고 항상 한국어로 노출됩니다.

</details>

<details>

<summary>지원되는 결제 통화</summary>

SDK를 통한 빌링키 발급 요청 파라미터에는 displayAmount에 대한 통화를 지정할 수 있는 `currency` 파라미터가 존재합니다.
PC 빌링키 발급의 경우 `KRW`와 `USD`를 지원하며, 모바일 빌링키 발급의 경우 `KRW`만 지원합니다.

</details>

<details>

<summary>카드사 다이렉트 호출을 지원하지 않습니다.</summary>

KG이니시스 경우 카드사 다이렉트 호출을 통한 빌링키 발급을 지원하지 않습니다.
`card.cardCompany` 필드에 값을 채워도 빌링키 발급 동작에 아무런 영향을 미치지 않습니다.

</details>

## SDK 빌링키 발급 및 결제 요청하기

빌링키 발급 및 결제 요청 시에는 `requestIssueBillingKeyAndPay` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KG이니시스 채널 사용을 명시해주세요.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKeyAndPay() {
  PortOne.requestIssueBillingKeyAndPay({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyAndPayMethod: "PHONE",
    totalAmount: 1000,
    currency: "KRW",
    paymentId: "test-paymentId",
    orderName: "test-orderName",
    customer: {
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyAndPayMethod: string

  **빌링키 발급 및 결제수단**

  KG이니시스는 빌링키 발급 및 결제 수단으로 휴대폰 소액 결제만을 지원하므로 해당 파라미터는 `PHONE`로 고정해야 합니다.

- paymentId: string

  **빌링키 발급 및 결제 건 고유 ID**

  - 고객사에서 채번하여 사용해야 합니다.
  - KG이니시스의 경우 필수 입력해야 합니다.

- orderName: string

  **빌링키 발급 및 결제 시 결제창에 표시되는 제목**

  - KG이니시스의 경우 필수 입력해야 합니다.

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - firstName?: string

    **구매자 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - lastName?: string

    **구매자 성**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - phoneNumber?: string

    **구매자 연락처**

    - KG이니시스의 경우 필수 입력해야 합니다.

  - email?: string

    **구매자 이메일**

    - KG이니시스의 경우 필수 입력해야 합니다.

- offerPeriod?: object

  **제공 기간**

  - KG이니시스 모바일 빌링키 발급 및 결제의 경우 필수로 입력해야 합니다. (PC인 경우에는 optional)

### 유의사항

<details>

<summary>PC와 모바일에서 파라미터 필수 여부가 상이합니다.</summary>

위의 주요 파라미터 설명에도 안내되어 있듯이, PC 빌링키 발급 및 결제와 모바일 빌링키 발급 및 결제에서 필수 여부가 상이한 파라미터가 존재합니다.

아래 필드들은 모바일에서는 필수이지만, PC에서는 선택입니다.

- `offerPeriod`

</details>

<details>

<summary>`paymentId` 에는 ASCII 문자만 허용됩니다.</summary>

`paymentId` 에는 ASCII 문자만으로 이루어진 문자열만 입력할 수 있습니다.

ASCII 문자에 포함되지 않는 한글이나 `♤`, `♡`, `♧` 등의 특수 문자는 허용되지 않습니다.

입력 가능한 ASCII 문자의 종류는 [링크](http://www.ascii-code.com/) → `ASCII printable characters` 섹션을 참고하세요.

</details>

<details>

<summary>`productType` 파라미터는 필수 입력해야 합니다.</summary>

- KG이니시스의 경우 **빌링키 발급 및 결제 시 상품 유형을 구분 짓는 `productType` 파라미터가 필수**로 입력해야 합니다.
- `productType`의 값은 `PRODUCT_TYPE_REAL` 또는 `PRODUCT_TYPE_DIGITAL`를 입력해야 합니다.

</details>

<details>

<summary>`offerPeriod` 파라미터 제약 사항</summary>

SDK를 통한 빌링키 발급 및 결제 요청 파라미터에는 제공 기간을 나타내는 `offerPeriod` 파라미터가 존재합니다.
날짜 범위를 입력하는 방식(`range`)과 간격을 입력하는 방식(`interval`) 중 하나를 선택하여 입력할 수 있습니다.

- `range` 방식으로 입력할 경우 `from`과 `to` 모두를 입력하셔야 하, `from`은 `to`보다 과거 시간이어야 합니다.
- `interval` 방식으로 입력할 경우는 `1m` 또는 `1y`만 허용됩니다. `1m`를 입력할 경우 `월 정기결제`, `1y`를 입력할 경우 `연 정기결제` 로 빌링키 발급 및 결제 창에 노출됩니다.

</details>

<details>

<summary>이니시스에서 지원하지 않는 빌링키 발급 및 결제 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `locale`: 결제창 언어를 지정하기 위한 값
- `mobile.carrier`: 휴대폰 소액결제 통신사 바로 호출을 위한 통신사 구분 값
- `mobile.availableCarriers`: 빌링키 발급 및 결제창에 노출될 통신사 리스트

</details>

<details>

<summary>지원되는 결제 통화</summary>

SDK를 통한 빌링키 발급 및 결제 요청 파라미터에는 totalAmount에 대한 통화를 지정할 수 있는 `currency` 파라미터가 존재합니다.
이니시스 빌링키 발급 및 결제의 경우, `KRW`만 지원합니다.

</details>

## API 수기(키인)결제 요청하기

수기(키인)로 결제하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/instant`를 이용하여 결제 요청을 해야합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 수기(키인) 결제 요청">

```javascript
// ... 수기(키인) 결제
const issueResponse = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/instant`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    orderName: "나이키 와플 트레이너 2 SD",
    amount: {
      total: 10000,
    },
    currency: "KRW",
    customer: {
      name: {
        full: "홍길동",
      },
      email: "test@test.com",
      phoneNumber: "010-1234-0000",
    },
    method: {
      virtualAccount: {
        bank: `SHINHAN`,
        expiry: {
          dueDate: `2024-11-12T00:00:00+09+00`, //입금기한은 미래시간만 가능합니다.
        },
        cashReceipt: {
          type: `PERSONAL`,
          customerIdentityNumber: `010-1234-0000`,
        },
        remitteeName: `테스트`,
      },
    },
    productCount: 1,
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - taxFree?: number

    **면세액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- method: object

  **결제수단 정보**

  - virtualAccount?: object

    **가상계좌 결제 시 파라미터**

    - bank: string

      **발급 은행**

      - 은행코드는 ENUM으로 정의되어 있습니다.
      - [BANK ENUM 바로가기](https://developers.portone.io/api/rest-v2/type-def#Bank)

    - expiry: object

      **입금 만료 기한**

      - validHours?: integer

        **유효 시간**

      - dueDate?: string

        **만료 시점**

        시간은 ISO8601 형식으로 입력해야 합니다.

    - option: object

      **가상계좌 발급 방식**

      - type: string

        **가상계좌 발급 유형**

        발급 유형은 ENUM으로 정의되어 있습니다.

        - 회전식 가상계좌 : `NORMAL`
        - 고정식 가상계좌 : `FIXED`
        - 회전식 가상계좌는 일반적으로 사용되는 방식이며 PG사에서 직접 채번한 가상계좌번호를 사용합니다.

      - fixed?: object

        **고정식 가상계좌 발급 유형**

        - accountNumber?: string

          **고정식 가상계좌번호**

          - PG사가 일정 개수만큼의 가상계좌번호를 발급하여 가맹점에게 미리 전달하고 가맹점이 그 중 하나를 선택하여 사용하는 방식입니다.
            KG이니시스에서는 해당 방식만 지원하고 있습니다.

    - cashReceipt: object

      **현금영수증 정보**

      - type: string

        **발급 유형**

        발급 유형은 ENUM으로 정의되어 있습니다.

        - 소득공제용 : `PERSONAL`
        - 지출증빙용 : `CORPORATE`
        - 미발행 : `NO_RECEIPT`

      - customerIdentityNumber: string

        **현금영수증 식별 번호**

        - 소득공제인 경우 주민등록번호 혹은 휴대폰 번호를 입력해야 합니다.
        - 지출증빙인 경우 사업자등록번호를 입력해야 합니다.

    - remitteeName?: string

      **예금주명**

  - card?: object

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber?: string

        **생년월일 또는 사업자 등록 번호**

      - passwordTwoDigits?: string

        **비밀번호 앞 두자리**

- customer?: object

  **고객 정보**

  - name: object

    **고객 이름**

    KG이니시스의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - email: string

    **구매자 이메일**

    - KG이니시스의 경우 필수로 입력해야 합니다.

- productCount?: integer

  **상품 개수**

## API 빌링키 발급 요청하기

빌링키를 발급하기 위해서는 `POST /billing-keys`를 이용하여 빌링키 발급 요청을 해야합니다.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 빌링키 발급 요청">

```javascript
const issueResponse = await axios({
  url: "https://api.portone.io/billing-keys",
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
    },
    method: {
      card: {
        credential: {
          number: "1111111111111111",
          expiryMonth: "01",
          expiryYear: "20",
          birthOrBusinessRegistrationNumber: "900101",
          passwordTwoDigits: "00",
        },
      },
    },
  },
});
```

</div>

</div>

### 주요 파라미터

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- method: object

  **결제수단 정보**

  - card?: object

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber?: string

        **생년월일 또는 사업자 등록 번호**

      - passwordTwoDigits?: string

        **비밀번호 앞 두자리**

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    KG이니시스의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - email: string

    **구매자 이메일**

    - KG이니시스의 경우 필수로 입력해야 합니다.

## API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제를 하기 위해 `POST /payments/${PAYMENT_ID_HERE}/billing-key`를 이용하여 결제를 요청합니다.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/billing-key`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
    orderName: "월간 이용권 정기결제",
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      phoneNumber: `010-1234-5678`,
      email: `test@test.com`,
    },
    amount: {
      total: 10000,
    },
    currency: "KRW",
    productCount: 1,
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- billingKey: string

  **빌링키 결제에 사용할 빌링키**

- orderName: string

  **주문명**

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - taxFree?: number

    **면세액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    KG이니시스의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - email: string

    **구매자 이메일**

    - KG이니시스의 경우 필수로 입력해야 합니다.

- productCount?: integer

  **상품 개수**

## API 빌링키 예약/반복 결제 요청하기

예약 결제를 하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/schedule` 를 이용하여 결제를 예약합니다.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/schedule`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    payment: {
      billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
      orderName: "월간 이용권 정기결제",
      customer: {
        id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      },
      amount: {
        total: 10000,
      },
      currency: "KRW",
    },
    timeToPay: "2023-01-01 00:00:00", // 결제를 시도할 시각
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- payment: object

  **빌링키 결제 요청 입력정보**

  - billingKey: string

    **빌링키 결제에 사용할 빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **결제 금액**

    - total: number

      **총 결제 금액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

    - taxFree?: number

      **면세액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - currency: string

    **결제 통화**

    결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- timeToPay: string

  **결제 예정 시점**

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    KG이니시스의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - email: string

    **구매자 이메일**

    - KG이니시스의 경우 필수로 입력해야 합니다.

### 유의사항

#### 공통

<details>

<summary>이니시스 필수 파라미터</summary>

KG이니시스의 경우에는 키인(수기)결제, 빌링키 발급, 빌링키 단건 결제 시 아래의 파라미터를 필수로 입력해야 합니다.

- `customer.name.full` 혹은 `customer.name.separated`
- `customer.phoneNumber`
- `customer.email`

</details>

#### 에스크로

<details>

<summary>이니시스에서 에스크로 배송 등록시 필수 파라미터</summary>

KG이니시스의 경우 에스크로 배송 등록 시 아래의 파라미터를 필수로 입력해야 합니다.

- `sender.name`
- `sender.phoneNumber`
- `sender.zipcode`
- `sender.address`
- `receiver.name`
- `receiver.phoneNumber`
- `receiver.zipcode`
- `receiver.address`
- `products`

</details>

## API 영수증 내 하위 상점 거래 등록

오픈마켓 고객사의 경우 해당 API를 호출하여 결제 내역 매출 전표에 하위 상점 거래를 등록할 수 있습니다.

자세한 파라미터 구성은
[REST API Docs](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Fregister-store-receipt)
를 참고해주시기 바랍니다.

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- items: RegisterStoreReceiptBodyItem\[]

  **등록할 거래 건 리스트**

  \= 매출전표에 등록할 하위 상점 거래 건 리스트를 등록 하셔야합니다.

  - storeBusinessRegistrationNumber: string

    **하위 상점 사업자등록번호**

  - storeName: string

    **하위 상점 명**

  - totalAmount: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - taxFreeAmount: number

    **면세액**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - vatAmount: number

    **부가세**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - supplyAmount: number

    **공급가액**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - currency: string

    **결제 통화**

    결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.


# https://developers.portone.io/opi/ko/integration/pg/v2/kakaopay

---
title: 카카오페이
description: 카카오페이 간편결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/kakaopay
---

## 카카오페이 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 가능한 결제수단

- 간편 결제
  - `payMethod`(결제) 혹은 `billingKeyMethod`(빌링키 발급) 파라미터를 `EASY_PAY` 로 설정해야 합니다.
  - 결제창 내에서 카드 및 카카오페이머니 선택이 가능합니다.

## SDK - 유의할 파라미터

### 결제/빌링키 발급 공통

- `windowType`

  - 카카오페이의 경우 PC는 `IFRAME`, mobile은 `REDIRECTION`만 지원되며 이외의 다른 방식으로 결제창을 호출할 경우 에러를 리턴합니다.

  - `windowType` 파라미터를 채우지 않을 경우 자동으로 아래와 같이 세팅됩니다.

    ```json
    {
      "pc": "IFRAME",
      "mobile": "REDIRECTION"
    }
    ```

- `locale`
  - 카카오페이의 경우 `KO_KR`만 지원합니다. 이외의 값을 넣어도 무시됩니다.

- `bypass`

  - 카카오페이의 경우 아래와 같이 `custom_message` 필드를 채워줄 수 있습니다.

  ```json
  {
    "bypass": {
      "kakaopay": {
        "custom_message": "여기가 안내 문구영역입니다."
      }
    }
  }
  ```

  - `custom_message`: 결제 화면에 보여줄 사용자 정의 문구입니다.(카카오페이와 사전 협의 필요)
  - 해당 필드를 채워서 요청할 시 아래와 같이 카카오페이 결제창 내에서 문구가 띄워집니다.

* `easyPay`
  - `easyPayProvider`
    - 카카오페이의 경우 PG사 자체가 간편결제사이므로 `easyPayProvider` 는 비워두어도 무방하며 다른 값을 채울 경우 무시됩니다.

  - `availableCards`
    - 해당 파라미터로 사용 가능한 카드사를 제한할 수 있습니다.

    - 지원하는 카드사 목록:
      - `CARD_COMPANY_SHINHAN_CARD`
      - `CARD_COMPANY_KOOKMIN_CARD`
      - `CARD_COMPANY_HYUNDAI_CARD`
      - `CARD_COMPANY_LOTTE_CARD`
      - `CARD_COMPANY_SAMSUNG_CARD`
      - `CARD_COMPANY_NH_CARD`
      - `CARD_COMPANY_BC_CARD`
      - `CARD_COMPANY_HANA_CARD`
      - `CARD_COMPANY_CITI_CARD`
      - `CARD_COMPANY_KAKAO_BANK`

### 결제 (`requestPayment`)

- `currency`
  - 카카오페이의 경우 원화 결제만 지원하므로 `KRW` 이외의 값을 넣으면 에러를 리턴합니다.

- `isEscrow`
  - 카카오페이에서는 에스크로 결제를 지원하지 않으며, 해당 파라미터를 채워서 요청할 경우 포트원 내부적으로만 저장됩니다.

- `isCulturalExpense`
  - 카카오페이에서는 지원하지 않는 파라미터입니다. 해당 파라미터를 채워서 요청할 경우 포트원 내부적으로만 저장됩니다.

- `productType`
  - 카카오페이에서는 지원하지 않는 파라미터입니다. 해당 파라미터를 채워서 요청할 경우 포트원 내부적으로만 저장됩니다.

- `easyPay.installment`
  - `freeInstallmentPlans`
    - 카카오페이는 지원하지 않는 파라미터입니다.

  - `monthOption`
    - 카카오페이는 고정개월 수 할부 옵션(`fixedMonth`)만 지원합니다.
    - 카카오페이의 경우, 결제 금액이 5만원 미만이어도 해당 파라미터가 채워져 있으면 체크카드로 결제가 불가능합니다.

### 빌링키 발급 (`requestIssueBillingKey`)

- `issueName`
  - 빌링키 발급 시 결제창에 표시되는 제목입니다. (카카오페이는 필수 입력)


# https://developers.portone.io/opi/ko/integration/pg/v2/kcp-v2

---
title: NHN KCP
description: NHN KCP 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/nhn-kcp
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 사전 계약 안내

아래 기능을 사용하시려면 KCP에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 결제 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답(ex. 결제창에서 에스크로 결제를 했으나 비-에스크로 결제 응답을 받음)을 얻게 될 수 있으니 주의해주시기 바랍니다.

- API를 통한 수기 결제 (가상계좌, 카드)
- API를 통한 빌링키 발급
- 에스크로 결제
- 상점분담무이자 설정
- 부가세 및 비과세 금액 직접 설정
- 부분무이자 설정
- 휴대폰 결제 익월 환불

## 가능한 결제 수단

- **결제창 일반 결제**

  `payMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드 : `CARD`
  - 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 상품권 : `GIFT_CERTIFICATE`
  - 휴대폰 소액 결제 : `MOBILE`
  - 간편결제 : `EASY_PAY`

- **결제창 빌링키 발급**

  `billingKeyMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `CARD`

- **API 수기(키인) 결제**

  `method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card` 로 설졍하여 카드 관련 파라미터 입력
  - 가상계좌: `virtualAccount` 로 설정하여 가상계좌 관련 파라미터 입력

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Finstant)
  를 참고해주시기 바랍니다.

- **API 빌링키 발급**

  `method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card` 로 설졍하여 카드 관련 파라미터 입력

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v2/billingKey#post%20%2Fbilling-keys)를 참고해주시기 바랍니다.

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey`파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KCP 채널 사용을 명시해주세요.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    payMethod: "CARD",
    customer: {
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.
  KCP의 경우 최대 40자 까지 허용합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.
  KCP의 경우 최대 100Byte까지 허용합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- totalAmount: number

  **결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - 신용카드 : `CARD`
  - 실시간 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제 : `MOBILE`
  - 간편 결제 : `EASY_PAY`

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

  - firstName?: string

    **구매자 이름**

  - lastName?: string

    **구매자 성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - kcp\_v2?: object

    **KCP에서 제공하는 파라미터 모음**

    - site\_logo?: string

      **결제창에 삽입할 메인 로고 url**

      - 결제창 왼쪽 상단에 표시됩니다.
      - 이미지 사이즈는 150\*50 미만으로 설정해야 하며, GIF, JPG 파일만 지원됩니다.

    - skin\_indx?: integer

      **결제창 색상**

      - PC로 결제창 호출 시 결제창 색상을 변경합니다.
      - 1\~12까지 설정 가능합니다.

    - kcp\_pay\_title?: string

      **결제창 상단 문구**

      - 결제창의 상단 문구를 변경합니다.

    - shop\_user\_id?: string

      **기관에 따라 리스크 관리 조치를 위한 쇼핑몰 관리 ID**

      - 상품권, 휴대폰 결제 시 필수로 입력해야 합니다.

    - site\_name?: string

      **카드사 다이렉트 호출 시 결제창에 표기될 상호명**

      - PC의 경우 신한, 현대, 삼성, 농협, 하나, 외환, 롯데, 씨티, 우리카드사에 대해 다이렉트 호출 시 필수로 입력해야 합니다.
      - 모바일의 경우 필수로 입력해야 합니다.

    - disp\_tax\_yn?: string

      **결제창 현금영수증 노출 여부**

      - 결제창에서 현금영수증 노출 여부를 설정할 수 있습니다. 실시간 계좌이체 또는 가상계좌 결제 시 사용할 수 있습니다.
      - `Y`: 노출
      - `N`: 노출하지 않음
      - `R`: 소득공제로 노출
      - `E`: 지출증빙으로 노출

    - deli\_term?: string

      **에스크로 결제 예상 배송 소요일**

      - 에스크로 결제 시, 결제 상품의 예상 배송 소요일입니다. KCP측에서 에스크로 결제 사용 시 입력을 권장하고 있습니다.
      - 미입력 시 '00'으로 입력됩니다.
      - 입력 형식은 두 자리 수로 입력되어야 합니다. ex. 예상 배송 소요기간이 3일인 경우,`03`으로 입력

#### 예제

```json title="bypass 파라미터 예시"
{
  "bypass": {
    "kcp_v2": {
      "site_logo": "https://portone.io/assets/portone.jpg",
      "skin_indx": 6,
      "shop_user_id": "user_id1",
      "site_name": "포트원 고객사"
    }
  }
}
```

### SDK 결제 - 유의사항

#### 공통

<details>

<summary>`paymentId` 파라미터 내 한글, 특수문자 미지원</summary>

`paymentId` 에는 영문/숫자만 사용할 수 있습니다. 한글이나 특수 문자가 포함된 채 결제를 요청하는 경우
결제 실패가 발생하오니 유의하시기 바랍니다.

</details>

<details>

<summary>결제창 표시 언어 지원 안내</summary>

SDK를 통한 결제 요청 시 `locale` 파라미터를 이용하여 결제창 언어를 변경할 수 있으며, PC 및 모바일 환경 모두
한국어(`KO_KR`) 및 영어(`EN_US`)를 지원합니다.
미입력 시 자동으로 한국어로 표시됩니다.

</details>

<details>

<summary>결제 통화 지원 안내</summary>

SDK를 통한 결제 요청 시 `currency` 파라미터를 이용하여 결제 통화를 지정할 수 있으며, KCP에서는
`KRW`와 `USD`만 지원됩니다. 단, `USD`는 카드 결제일 경우에만 지정 가능합니다.

</details>

<details>

<summary>부가세, 면세금액 직접 지정을 위해서는 별도 계약이 필요합니다.</summary>

SDK를 통한 결제 요청 시 면세 금액(`taxFreeAmount`) 와 부가세(`vatAmount`) 파라미터를 이용하여 면세금액과 부가세를
직접 지정할 수 있습니다. 다만 직접 지정하여 사용하기 위해서는 사전에 KCP와 별도로 계약을 진행해야 합니다.
별도로 계약을 진행하지 않은 상태에서 해당 파라미터에 값을 지정하여 결제를 요청하는 경우 요청한 내용과 다른 금액으로
실결제가 발생할 수 있습니다.

</details>

<details>

<summary>KCP에서 지원하는 현금영수증 발급 유형</summary>

현금영수증은 현금성 거래인 실시간 계좌이체 및 가상계좌 발급 시 사용이 가능합니다.
KCP의 경우 현금영수증 발급 유형을 `CORPORATE` 혹은 `PERSONAL` 등 파라미터로 제어할 수 없습니다.
어떤 유형의 현금영수증을 발행할지는 항상 결제창 내에서 선택 가능합니다.

</details>

#### 카드 결제

<details>

<summary>카드사 다이렉트 호출 시 고정 할부 개월 수만 설정할 수 있습니다.</summary>

KCP의 경우 카드사 다이렉트 호출 시 **고정 할부 개월 수**만 설정 가능합니다.
카드사 다이렉트 호출 시 할부 개월 수 옵션을 `card.installment.monthOption.fixedMonth` 가 아닌
`card.installment.monthOption.availableMonthList`로 설정할 경우 에러가 발생합니다.

</details>

<details>

<summary>카드사 다이렉트 호출 시 지원하는 카드사 종류</summary>

아래 카드사는 다이렉트 호출이 가능합니다.

- 신한카드
- 현대카드
- 삼성카드
- 농협카드
- 하나카드
- 롯데카드
- 씨티카드
- 우리카드
- 비씨카드
- 국민카드
- 우체국은행 카드
- 광주은행 카드
- 새마을금고 카드
- 수협은행 카드
- 제주은행 카드
- 신협 카드
- 저축은행 카드
- KDB산업은행 카드

</details>

<details>

<summary>미지원 카드 관련 파라미터 안내 </summary>

KCP의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `useCardPoint`: 카드 포인트 사용 여부.
  - KCP의 경우 지정하지 않아도 카드 포인트를 사용 가능합니다.

- `useInstallment`: 할부 사용 여부.
  - KCP의 경우 `installment` 파라미터로 직접 설정 가능합니다.

- `useFreeInterestFromMall`: 상점부담무이자 사용 여부.
  - KCP의 경우 `installment.freeInstallmentPlans` 파라미터로 직접 설정 가능합니다.

</details>

<details>

<summary>일부 카드사에 한하여 다이렉트 호출 시 필수 파라미터 안내 </summary>

PC 환경에서 카드사 다이렉트 결제 요청 시, 다음 카드사들의 경우 `bypass.kcp_v2.site_name`을 필수로 입력해야 합니다.

- 신한카드
- 우리카드
- 현대카드
- 삼성카드
- 농협카드
- 하나카드
- 롯데카드
- 씨티카드

모바일 환경에서 카드사 다이렉트 결제 요청 시, 고객사 상호명 파라미터인 `bypass.kcp_v2.site_name`을 필수로 입력해야 합니다.

</details>

#### 간편 결제

<details>

<summary>간편결제 허브형 지원 안내</summary>

KCP의 경우 아래 간편결제 허브형을 지원합니다. `easyPay.easyPayProvider` 파라미터에 아래 리스트 중 원하는 값을 입력하세요.

- 카카오페이: `KAKAOPAY`
- 네이버페이: `NAVERPAY`
- 삼성페이: `SAMSUNGPAY`
- ssg페이: `SSGPAY`
- 애플페이: `APPLEPAY`
- lpay: `LPAY`
- 토스페이: `TOSSPAY`
- 페이코: `PAYCO`

</details>

<details>

<summary>미지원 간편결제 관련 파라미터 안내</summary>

KCP의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `useCardPoint`: 카드사 포인트 사용 여부

- `customerIdentifier`: 현금영수증 발행 대상 식별 정보

- `availablePayMethod`: 간편결제 세부 결제수단 지정 렌더링 옵션

- `availableCards`: 결제 수단으로써 사용 허가할 카드사 리스트

- `useInstallment`: 할부 사용 여부.
  - KCP의 경우 `installment` 파라미터로 직접 설정 가능합니다.

- `useFreeInterestFromMall`: 상점부담무이자 사용 여부.
  - KCP의 경우 `installment.freeInstallmentPlans` 파라미터로 직접 설정 가능합니다.

</details>

#### 계좌이체

<details>

<summary>미지원 계좌이체 관련 파라미터 안내</summary>

KCP의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 계좌이체 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보

</details>

#### 가상계좌 결제

<details>

<summary>미지원 가상계좌 관련 파라미터 안내</summary>

KCP의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 가상계좌 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보
- `fixedOption`: 고정식 가상계좌 옵션

</details>

#### 상품권 결제

<details>

<summary>상품권 지원 안내</summary>

KCP PC, 모바일 결제에서 `giftCertificateType`는 선택 사항입니다.
결제에서 해당 파라미터를 입력하지 않을 경우 결제창 내에서 상품권 종류를 선택할 수 있습니다. KCP에서 지원하는 상품권 종류는 아래와 같습니다.

- 도서문화상품권: `BOOKNLIFE`
- 컬쳐랜드 문화상품권: `CULTURELAND`

</details>

<details>

<summary>상품권 또는 휴대폰 결제 시 필수 파라미터 안내</summary>

KCP에서 상품권, 휴대폰 결제 시 리스크 관리를 위해 고객사 회원의 ID를 필수로 받고 있어,
`bypass.kcp_v2.shop_user_id`를 필수로 입력하셔야 합니다.

</details>

#### 휴대폰 소액 결제

<details>

<summary>결제창에 노출될 통신사 지정 옵션 지원 여부</summary>

KCP 모바일 결제의 경우 하나의 통신사만 지정할 수 있으며 `availableCarriers`를 사용할 수 없습니다.
통신사 구분 값을 위한 `carrier`만 사용이 가능합니다.

</details>

#### 에스크로 결제

<details>

<summary>에스크로 결제 시 필수 파라미터 안내 </summary>

KCP 에스크로 결제 시 `products` 파라미터를 필수로 요구합니다.
구매 상품의 정보를 담아 `products` 리스트에 하나 이상의 상품 정보가 포함되어야 합니다.

</details>

<details>

<summary>에스크로 결제 시 입력 권장 파라미터 안내 </summary>

KCP에서 에스크로 결제 시 예상 배송 소요일인 `bypass.kcp_v2.deli_term`을 입력을 권장하고 있습니다.
입력 형식은 두 자리 수로 입력 되어야 합니다. ex. 예상 배송 소요기간이 3일인 경우,'03'으로 입력
정확한 소요일을 알 수 없어 미입력 시 '00'으로 입력됩니다.

</details>

## SDK 빌링키 발급 요청하기

빌링키 발급 요청 시에는 `requestIssueBillingKey` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KCP 채널 사용을 명시해주세요.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyMethod: "CARD",
    issueId: "test-issueId",
    issueName: "test-issueName",
    customer: {
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyMethod: string

  **빌링키 발급수단**

  KCP는 빌링키 발급 수단으로 카드만을 지원하므로 해당 파라미터는 `CARD`로 고정해야 합니다.

- issueId: string

  **빌링키 발급 건 고유 ID**

  - 고객사에서 채번하여 사용해야 합니다.
  - KCP의 경우 필수 입력해야 합니다. // 추후 수정 필요, 포트원 내부 채번으로 수정할 예정

- issueName: string

  **빌링키 발급 시 결제창에 표시되는 제목**

  - 모바일 발급의 경우 필수 입력해야 합니다.

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

  - firstName?: string

    **구매자 이름**

  - lastName?: string

    **구매자 성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

- offerPeriod?: object

  **제공 기간**

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - kcp\_v2?: object

    **KCP에서 제공하는 파라미터 모음**

    **결제창에서 주민번호/사업자 번호 고정여부 설정**

    - S: 주민번호만 표시
    - C: 사업자번호만 표시

### SDK 빌링키 발급 - 유의사항

<details>

<summary>파라미터 제약 사항</summary>

SDK를 통한 빌링키 발급 요청 `offerPeriod` 파라미터를 이용하여 제공 기간을 나타낼 수 있으며, 빌링키 발급 시
`interval`파라미터만 지원됩니다.

</details>

<details>

<summary>카드사 다이렉트 호출 미지원 안내</summary>

KCP 경우 카드사 다이렉트 호출을 통한 빌링키 발급을 지원하지 않습니다.
`card.cardCompany` 필드에 값을 채워도 빌링키 발급 동작에 아무런 영향을 미치지 않습니다.

</details>

## API 수기(키인)결제 요청하기

수기(키인) 결제 요청 시 `POST /payments/${PAYMENT_ID_HERE}/instant` API를 호출해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 수기(키인) 카드 결제 요청">

```javascript
// ... 수기(키인) 결제
const issueResponse = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/instant`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    orderName: "나이키 와플 트레이너 2 SD",
    amount: {
      total: 10000,
    },
    currency: "KRW",
    customer: {
      name: {
        full: "홍길동",
      },
      email: "test@test.com",
      phoneNumber: "010-1234-0000",
    },
    method: {
      card: {
        credential: {
          nuber: "1234123400001234", // 카드 번호 입력 시 숫자만 입력해주세요.
          expiryYear: "26", // 유효기간 만료 연도 2자리
          expiryMonth: "12", // 유효기간 만료 월 2자리
          birthOrBusinessRegistrationNumber: "900101", // 카드 소유주 생년월일 또는 사업자 등록번호
          passwordTwoDigits: "00", // 카드 비밀번호 앞 2자리
        },
      },
    },
  },
});
```

</div>

<div class="tabs-content" data-title="API 수기(키인) 가상계좌 발급 요청">

```javascript
// ... 수기(키인) 결제
const issueResponse = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/instant`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    orderName: "나이키 와플 트레이너 2 SD",
    amount: {
      total: 10000,
    },
    currency: "KRW",
    customer: {
      name: {
        full: "홍길동",
      },
      email: "test@test.com",
      phoneNumber: "010-1234-0000",
    },
    method: {
      virtualAccount: {
        bank: `SHINHAN`,
        expiry: {
          dueDate: `2024-11-12T00:00:00+09+00`, //입금기한은 미래시간만 가능합니다.
        },
        cashReceipt: {
          type: `PERSONAL`,
          customerIdentityNumber: `010-1234-0000`,
        },
        remitteeName: `테스트`,
      },
    },
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.
  KCP의 경우 최대 40자까지 허용합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.
  KCP의 경우 최대 100 바이트까지 허용합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - taxFree?: number

    **면세액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- method: object

  **결제수단 정보**

  - virtualAccount?: object

    **가상계좌 결제 시 파라미터**

    - bank: string

      **발급 은행**

      - 은행코드는 ENUM으로 정의되어 있습니다.
      - [BANK ENUM 바로가기](https://developers.portone.io/api/rest-v2/type-def#Bank)

    - expiry: object

      **입금 만료 기한**
      `validHours` 또는 `dueDate` 필드 중 하나를 지정합니다.

      - validHours?: integer

        **유효 시간**

      - dueDate?: string

        **만료 시점**

        시간은 RFC 3339 date-time 형식으로 입력해야 합니다.

    - option: object

      **가상계좌 발급 방식**

      - type: string

        **가상계좌 발급 유형**
        회전식 가상계좌만 지원하므로 `NORMAL`로 입력합니다.

    - cashReceipt: object

      **현금영수증 정보**

      - type: string

        **발급 유형**
        `PERSONAL` 또는 `CORPORATE`로 입력합니다.

        - 소득공제용 : `PERSONAL`
        - 지출증빙용 : `CORPORATE`

      - customerIdentityNumber: string

        **현금영수증 식별 번호**

        - 소득공제인 경우 주민등록번호 혹은 휴대폰 번호를 입력해야 합니다.
        - 지출증빙인 경우 사업자등록번호를 입력해야 합니다.

  - card?: object

    **카드 결제 시 파라미터**

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자 등록 번호**

      - passwordTwoDigits: string

        **비밀번호 앞 두자리**

- customer?: object

  **고객 정보**

  - name?: object

    **고객 이름**

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

### 유의사항

#### 카드 결제

<details>

<summary>미지원 파라미터 안내</summary>

무이자 및 카드 포인트 파라미터는 지원하지 않습니다. 해당 파라미터를 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

</details>

#### 가상계좌 결제

<details>

<summary>고정식 가상계좌 미지원 안내</summary>

회전식(일반) 가상계좌만 지원되며, 고정식 가상계좌는 지원하지 않습니다.

</details>

<details>

<summary>가상계좌 발급 시 입금자명 관련 안내</summary>

발급된 가상계좌의 입금자명은 결제 요청 시 `customer.name` 파라미터에 입력된 이름으로 표시됩니다.
`remitteeName`을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

</details>

<details>

<summary>가상계좌 발급 가능 은행 안내</summary>

- 아래 은행에 한하여 가상계좌 발급이 가능합니다.
  - 기업은행
  - 국민은행
  - 수협은행
  - NH농협은행
  - 우리은행
  - SC제일은행
  - iM뱅크
  - 부산은행
  - 광주은행
  - 경남은행
  - 우체국
  - 하나은행
  - 신한은행

</details>

## API 빌링키 발급 요청하기

빌링키를 발급 요청 시 `POST /billing-keys`를 호출해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 빌링키 발급 요청">

```javascript
const issueResponse = await axios({
  url: "https://api.portone.io/billing-keys",
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
    },
    method: {
      card: {
        credential: {
          number: "1111111111111111",
          expiryMonth: "01",
          expiryYear: "20",
          birthOrBusinessRegistrationNumber: "900101",
          passwordTwoDigits: "00",
        },
      },
    },
  },
});
```

</div>

</div>

### 주요 파라미터

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- method: object

  **결제수단 정보**

  - card?: object

    **카드 빌링키 발급 시 파라미터**

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber?: string

        - KCP의 경우 필수로 입력해야 합니다.

      - passwordTwoDigits?: string

        **비밀번호 앞 두자리**

        - KCP의 경우 필수로 입력해야 합니다.

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

  - email: string

    **구매자 이메일**

## API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제 요청 시 `POST /payments/${PAYMENT_ID_HERE}/billing-key` API를 호출해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 단건 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/billing-key`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    payment: {
      billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
      orderName: "후불 결제",
      customer: {
        id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
        phoneNumber: "010-1234-5678",
        email: "test@test.com",
      },
      amount: {
        total: 10000,
      },
      currency: "KRW",
    },
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- billingKey: string

  **빌링키 결제에 사용할 빌링키**

- orderName: string

  **주문명**

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - taxFree?: number

    **면세액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

  - email: string

    **구매자 이메일**

- productCount?: integer

  **상품 개수**

## API 빌링키 예약/반복 결제 요청하기

예약 결제를 하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/schedule` 를 이용하여 결제를 예약합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/schedule`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    payment: {
      billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
      orderName: "월간 이용권 정기결제",
      customer: {
        id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      },
      amount: {
        total: 10000,
      },
      currency: "KRW",
    },
    timeToPay: "2023-01-01T00:00:00+09:00", // 결제 예정 시점. RFC 3339 형식으로 입력해야 합니다.
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- payment: object

  **빌링키 결제 요청 입력정보**

  - billingKey: string

    **빌링키 결제에 사용할 빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **결제 금액**

    - total: number

      **총 결제 금액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

    - taxFree?: number

      **면세액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - currency: string

    **결제 통화**

    결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

  - customer: object

    **고객 정보**

    - name: object

      **고객 이름**

      - full?: string

        **한 줄 이름 형식 (ex. 김포트)**

      - separated?: object

        **분리된 이름**

        - first: string

          **이름**

        - last: string

          **성**

    - phoneNumber: string

      **구매자 연락처**

    - email: string

      **구매자 이메일**

- timeToPay: string

  **결제 예정 시점**


# https://developers.portone.io/opi/ko/integration/pg/v2/kpn

---
title: 한국결제네트웍스(KPN)
description: 한국결제네트웍스(KPN) 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 사전 계약 안내

아래 기능을 사용하시려면 한국결제네트웍스(KPN)에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 결제 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답(ex. 결제창에서 에스크로 결제를 했으나 비-에스크로 결제 응답을 받음)을 얻게 될 수 있으니 주의해주시기 바랍니다.

- API를 통한 수기(키인) 결제 (카드, 가상계좌)
- API를 통한 빌링키 발급
- 에스크로 결제 (결제창)
- 가상계좌 입금통보 설정 (백노티)
- 상점분담무이자 설정
- 부분무이자 설정
- 비과세 금액 직접 설정
- 간편결제 다이렉트 호출
- 결제 취소 시 계좌 환불 서비스 설정

## 가능한 결제 수단

- **결제창 일반 결제**

  `payMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드 : `CARD`
  - 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액 결제 : `MOBILE`
  - 간편결제 : `EASY_PAY`

- **결제창 빌링키 발급**

  `billingKeyMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `CARD`

- **API 수기(키인) 결제**

  `method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card` 로 설졍하여 카드 관련 파라미터 입력
  - 가상계좌: `virtualAccount` 로 설정하여 가상계좌 관련 파라미터 입력

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Finstant)
  를 참고해주시기 바랍니다.

- **API 빌링키 발급**

  `method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card` 로 설졍하여 카드 관련 파라미터 입력

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v2/billingKey#post%20%2Fbilling-keys)를 참고해주시기 바랍니다.

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키를 지정하여 한국결제네트웍스(KPN) 채널 사용을 명시해주세요.

한국결제네트웍스(KPN) 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="SDK 결제 요청"
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${Math.random().toString(36).slice(2)}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    payMethod: "CARD",
  });
}
```

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- totalAmount: number

  **결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - 신용카드 : `CARD`
  - 실시간 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제 : `MOBILE`
  - 간편 결제 : `EASY_PAY`

- bypass?: object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - kpn?: object

    **한국결제네트웍스(KPN)에서 제공하는 파라미터**

    - CardSelect?: enum\[]

      **일부 렌더링할 결제방식 목록**

      특정 카드사로 구별되지 않는 결제수단을 지정할 때 사용합니다.

      - 해외카드 (VISA + MASTER + JCB) : `GLOBAL`
      - 구인증 : `LEGACY_AUTH`
      - 키인 : `KEY_IN`

### 유의사항

#### 공통

<details>

<summary>`paymentId`의 경우 영문 대/소문자 및 숫자만 허용됩니다.</summary>

`paymentId` 입력시 0-9,a-z,A-Z 의 문자만 입력 가능합니다.

한글이나 `♤`, `♡`, `♧` 등의 특수 문자 입력시 결제가 정상적으로 동작하지 않을 수 있습니다.

</details>

<details>

<summary>결제창 표시 언어 지원 안내</summary>

SDK를 통한 결제 요청시 `locale` 파라미터를 사용하여 결제창 내에 언어를 제어할 수 있습니다.
한국결제네트웍스(KPN)의 경우 한국어 및 영어만 지원합니다.

- 한국어 : `KO_KR`
- 영어 : `EN_US`

</details>

<details>

<summary>지원되는 결제 통화</summary>

SDK를 통한 결제 요청시 `currency` 파라미터를 사용하여 통화를 설정할 수 있습니다.
한국결제네트웍스(KPN)의 경우 `KRW` 만 지원합니다.

- 원화 : `KRW`

</details>

<details>

<summary>결제 요청 시 면세금액 설정 시 우선 적용 안내</summary>

계약 당시 MID를 면세, 과세 용도로 나누어서 발급받은 경우에도 결제 요청시 파라미터로 전달하는 금액 정보를 우선 사용합니다.
고객사에서 면세 또는 과세금액을 계산하여 처리하는 경우 `totalAmount`와 `taxFreeAmount`를 올바르게 전달하여야 합니다.

</details>

#### 카드 결제

<details>

<summary>카드 관련 미지원 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `useAppCardOnly`: 앱카드만 허용할지 여부
- `useFreeInterestFromMall`: 상점부담무이자 사용 여부

</details>

<details>

<summary>카드 다이렉트 호출 지원 카드사 안내</summary>

KPN을 이용하시는 경우 아래 카드사 한해 다이렉트 호출이 가능합니다.

- 신한카드
- 현대카드
- 삼성카드
- 농협카드
- 하나카드
- 롯데카드
- 씨티카드
- 우리카드
- 비씨카드
- 국민카드
- 우체국은행 카드
- 새마을금고 카드
- 신협 카드
- 저축은행 카드
- KDB산업은행 카드
- 카카오뱅크 카드
- 케이뱅크 카드

```typescript title="SDK 카드 다이렉트 결제 요청"
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${Math.random().toString(36).slice(2)}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    payMethod: "CARD",
    card: {
      cardCompany: "KOOKMIN_CARD", // 국민카드 다이렉트
    },
  });
}
```

</details>

<details>

<summary>카드 다이렉트 이용 시 약관동의 절차 안내</summary>

다이렉트 호출시 아래 3가지 약관 동의 절차가 고객사 페이지 내에 있어야 합니다.

- `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=1` (전자금융거래 이용약관)
- `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=3` (개인정보 수집 및 이용처리 동의)
- `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=4` (개인정보 제3자 제공 동의)

영어 약관이 필요한 경우 URL 뒤에 `&langType=ENG`을 추가하여 사용할 수 있습니다.

</details>

#### 간편 결제

<details>

<summary>간편결제 다이렉트 호출 지원 안내</summary>

한국결제네트웍스(KPN)의 경우 아래 간편결제사를 지원합니다. `easyPay.easyPayProvider` 파라미터에 아래 값을 입력하여
간편결제사를 지정하여 호출할 수 있습니다.

- 카카오페이: `KAKAOPAY`
- 네이버페이: `NAVERPAY`
- 삼성페이: `SAUMSUNGPAY`
- 토스페이: `TOSSPAY`
- 페이코: `PAYCO`

</details>

<details>

<summary>네이버페이 다이렉트 호출 미지원</summary>

한국결제네트웍스(KPN)의 경우, 현재 네이버페이 다이렉트 호출은 지원하지 않습니다.

</details>

<details>

<summary>간편결제 관련 미지원 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우 간편결제 결제시 아래 파라미터들을 지원하지 않으며,
해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `customerIdentifier`: 현금영수증 발행 대상 식별 정보
- `useCardPoint`: 카드사 포인트 사용 여부
- `useFreeInterestFromMall`: 상점부담무이자 사용 여부
- `useInstallment`: 할부 사용 여부
- `cashReceiptType`: 현금영수증 타입
- `installment`: 할부 설정
- `availableCards`: 결제 수단으로써 사용 허가할 카드사 리스트
- `availablePayMethod`: 간편결제 세부 결제수단 지정 렌더링 옵션

</details>

#### 계좌이체

<details>

<summary>계좌이체 관련 미지원 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 계좌이체 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보

</details>

<details>

<summary>현금영수증 발급 유형 지원 안내</summary>

현금영수증은 현금성 거래인 실시간 계좌이체 및 가상계좌 발급 시 사용이 가능합니다.
한국결제네트웍스(KPN)의 경우 현금영수증 발급 유형을 `CORPORATE` 혹은 `PERSONAL` 등 파라미터로 제어할 수 없습니다.
결제창 내에서 선택한 유형으로 현금영수증은 발급되며, 결제창 호출 파라미터로는 현금영수증을 발행 여부만을 제어할 수 있습니다.

`cashReceiptType` 파라미터를 `ANONYMOUS`로 설정시 결제창에서 현금영수증 발급 UI가 미노출됩니다.

</details>

#### 가상계좌 결제

<details>

<summary>가상계좌 관련 미지원 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 가상계좌 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보
- `fixedOption`: 고정식 가상계좌 옵션

</details>

<details>

<summary>가상계좌 사용시 입금통보 URL 설정 안내</summary>

한국결제네트웍스(KPN)의 경우, 가상계좌를 사용하는 경우 입금통보 URL을 별도로 설정해야 합니다.

자세한 내용은 [가상계좌 입금통보 URL 설정 가이드](https://developers.portone.io/opi/ko/integration/virtual-account/readme?v=v2#notice-config-kpn)를
참조해 주세요.

</details>

<details>

<summary>가상계좌 지원 은행 안내</summary>

한국결제네트웍스(KPN)에서 가상계좌 발급이 가능한 은행은 아래와 같습니다.

은행코드는 [BANK ENUM](https://developers.portone.io/api/rest-v2/type-def#Bank)으로 정의되어 있으며
아래 목록에 대한 ENUM 코드를 매핑하여 API에 사용하실 수 있습니다.

- 기업은행
- 국민은행
- 외환은행
- 농협은행
- 우리은행
- SC은행
- 한국씨티은행
- 대구은행
- 부산은행
- 광주은행
- 경남은행
- 우체국
- KEB하나은행
- 신한은행

</details>

<details>

<summary>현금영수증 발급 유형 지원 안내</summary>

현금영수증은 현금성 거래인 실시간 계좌이체 및 가상계좌 발급 시 사용이 가능합니다.
한국결제네트웍스(KPN)의 경우 현금영수증 발급 유형을 `CORPORATE` 혹은 `PERSONAL` 등 파라미터로 제어할 수 없습니다.
결제창 내에서 선택한 유형으로 현금영수증은 발급되며, 결제창 호출 파라미터로는 현금영수증을 발행 여부만을 제어할 수 있습니다.

`cashReceiptType` 파라미터를 `ANONYMOUS`로 설정시 결제창에서 현금영수증 발급 UI가 미노출됩니다.

</details>

#### 휴대폰 소액결제

<details>

<summary>필수 입력 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우 **휴대폰 소액결제 시 상품 유형을 구분짓는 `productType` 파라미터를 필수**로 입력해야 합니다.

- 실물 : `PRODUCT_TYPE_REAL`
- 디지털 : `PRODUCT_TYPE_DIGITAL`

</details>

<details>

<summary>휴대폰 소액결제 관련 미지원 파라미터</summary>

한국결제네트웍스(KPN)의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `carrier`: 휴대폰 소액결제 통신사 바로 호출을 위한 통신사 구분 값
- `availableCarriers`: 결제창에 노출될 통신사 리스트 지정 옵션

</details>

## SDK 빌링키 발급 요청하기

빌링키 발급 요청 시에는 `requestIssueBillingKey` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키를 지정하여 한국결제네트웍스(KPN) 채널 사용을 명시해주세요.

한국결제네트웍스(KPN) 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="SDK 빌링키 발급 요청"
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyMethod: "CARD",
    issueId: "test-issueId",
    issueName: "test-issueName",
    customer: {
      customerId: "uniqueCustomerId",
      fullName: "포트원",
    },
  });
}
```

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyMethod: string

  **빌링키 발급수단**

  한국결제네트웍스(KPN)는 빌링키 발급 수단으로 카드만을 지원하므로 해당 파라미터는 `CARD`로 고정해야 합니다.

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 고유 ID**

    - 한국결제네트웍스(KPN)의 경우 구매자 ID를 필수로 입력해야 합니다.

  - fullName?: string

    **구매자 전체 이름**

    - 한국결제네트웍스(KPN)의 경우 `fullName` 혹은 (`firstName` + `lastName`)을 필수로 입력해야 합니다.

  - firstName?: string

    **구매자 이름**

    - 한국결제네트웍스(KPN)의 경우 `fullName` 혹은 (`firstName` + `lastName`)을 필수로 입력해야 합니다.

  - lastName?: string

    **구매자 성**

    - 한국결제네트웍스(KPN)의 경우 `fullName` 혹은 (`firstName` + `lastName`)을 필수로 입력해야 합니다.

### 유의사항

<details>

<summary>파라미터 입력 형식 안내</summary>

SDK를 통한 빌링키 발급 요청 시 `offerPeriod` 파라미터를 사용하여 결제창 내에 제공 기간을 표시할 수 있습니다.
해당 파라미터는 range형태로만 입력 가능합니다.

구체적인 형식은 SDK 가이드를 참고해주세요. [결제요청 파라미터 가이드 바로가기](https://developers.portone.io/docs/ko/v2-payment/v2-sdk/payment-request?v=v2)

</details>

<details>

<summary>결제창 표시 언어 지원 안내</summary>

SDK를 통한 빌링키 발급 요청시 `locale` 파라미터를 사용하여 결제창 내에 언어를 제어할 수 있습니다.
한국결제네트웍스(KPN)의 경우 한국어 및 영어만 지원합니다.

- 한국어 : `KO_KR`
- 영어 : `EN_US`

</details>

<details>

<summary>카드 다이렉트 호출 미지원 안내</summary>

한국결제네트웍스(KPN) 경우 빌링키 발급 시 카드사 다이렉트 호출 기능을 지원하지 않습니다.
`card.cardCompany` 필드에 값을 입력한 후 빌링키 발급을 요청한 경우에도 빌링키 발급 동작에 아무런 영향을 미치지 않습니다.

</details>

## API 수기(키인) 결제 요청하기

수기(키인)로 결제하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/instant` API를 통해 결제를 요청해야 합니다.

```typescript title="API 수기(키인) 결제 요청"
// ... 수기(키인) 결제
const issueResponse = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/instant`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    paymentId: `payment${Math.random().toString(36).slice(2)}`,
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    orderName: "나이키 와플 트레이너 2 SD",
    amount: {
      total: 10000,
      taxFree: 3000,
    },
    currency: "KRW",
    customer: {
      name: {
        full: "홍길동",
      },
      phoneNumber: "010-1234-0000",
    },
    method: {
      virtualAccount: {
        bank: `SHINHAN`,
        expiry: {
          dueDate: `2024-11-12T00:00:00+09+00`, // 입금기한은 미래시간만 가능합니다.
        },
        cashReceipt: {
          type: `PERSONAL`,
          customerIdentityNumber: `010-1234-0000`,
        },
      },
    },
  },
});
```

### 주요 파라미터

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - taxFree?: number

    **면세액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- method: object

  **결제수단 정보**

  - virtualAccount?: object

    **가상계좌 결제 시 파라미터**

    - bank: string

      **발급 은행**

      - 은행코드는 ENUM으로 정의되어 있습니다.
      - [BANK ENUM 바로가기](https://developers.portone.io/api/rest-v2/type-def#Bank)

    - expiry: object

      **입금 만료 기한**

      - validHours?: integer

        **유효 시간**

      - dueDate?: string

        **만료 시점**

        시간은 ISO8601 형식으로 입력해야 합니다.

    - option: object

      **가상계좌 발급 방식**

      - type: string

        **가상계좌 발급 유형**

        발급 유형은 ENUM으로 정의되어 있습니다.

        - 회전식 가상계좌 : `NORMAL`

        한국결제네트웍스(KPN)의 경우 **회전식 가상계좌**(`NORMAL`)만 지원합니다.

        회전식 가상계좌는 일반적으로 사용되는 방식이며 PG사에서 직접 채번한 가상계좌번호를 사용합니다.

    - cashReceipt: object

      **현금영수증 정보**

      - type: string

        **발급 유형**

        발급 유형은 ENUM으로 정의되어 있습니다.

        - 소득공제용 : `PERSONAL`
        - 지출증빙용 : `CORPORATE`
        - 미발행 : `NO_RECEIPT`

      - customerIdentityNumber: string

        **현금영수증 식별 번호**

        - 소득공제인 경우 주민등록번호 혹은 휴대폰 번호를 입력해야 합니다.
        - 지출증빙인 경우 사업자등록번호를 입력해야 합니다.

  - card?: object

    **카드 결제 시 파라미터**

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber?: string

        **생년월일 6자리 또는 사업자 등록 번호**

      - passwordTwoDigits?: string

        **비밀번호 앞 두자리**

  - customer?: object

    **고객 정보**

    - name?: object

      **고객 이름**

      - full?: string

        **한 줄 이름 형식 (ex. 김포트)**

      - separated?: object

        **분리된 이름**

        - first: string

          **이름**

        - last: string

          **성**

    - phoneNumber?: string

      **구매자 연락처**

### 유의사항

<details>

<summary>카드 정보 입력 파라미터 안내</summary>

API를 통한 수기(키인) 결제 요청 파라미터에는 카드의 상세 정보를 입력하는 필드가 존재합니다.

한국결제네트웍스(KPN)의 경우 카드 번호 + 유효기간만으로 결제가 가능하나, 일부 고객사의 경우 생년월일 + 비밀번호 앞 두 자리를 추가적으로 입력이 필요할 수 있습니다.

자세한 내용은 한국결제네트웍스(KPN) 담당자에게 문의해주시기 바랍니다.

</details>

<details>

<summary>결제 통화 지원 안내</summary>

API를 통한 수기(키인) 결제 요청시 `currency` 파라미터를 이용하여 통화를 지정할 수 있습니다.

한국결제네트웍스(KPN)의 경우 `KRW`와 `USD`를 지원하며, 이 중 `USD`로 지정한 경우 해외카드 결제만 가능합니다.

결제는 1센트 단위로 가능하지만 매입사에 따라 결제 취소가 불가능할 수 있습니다.
결제 취소의 경우 1달러 이상 금액부터 가능한 경우가 발생할 수 있습니다.

자세한 내용은 한국결제네트웍스(KPN) 담당자에게 문의해주시기 바랍니다.

</details>

<details>

<summary>가상계좌 에스크로 결제 미지원 안내</summary>

한국결제네트웍스(KPN)의 경우, API 수기(키인) 결제를 통한 가상계좌 발급 시 에스크로 결제는 지원하지 않습니다.

가상계좌 에스크로 결제 이용을 원하시는 경우 결제창 방식으로 발급하여 사용하시길 권장드립니다.

</details>

## API 빌링키 발급 요청하기

빌링키를 발급하기 위해서는 `POST /billing-keys` API를 이용하여 빌링키 발급을 요청해야 합니다.

한국결제네트웍스(KPN) 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="API 빌링키 발급 요청"
const issueResponse = await axios({
  url: "https://api.portone.io/billing-keys",
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      name: {
        full: "홍길동",
      },
      phoneNumber: "010-1234-0000",
    },
    method: {
      card: {
        credential: {
          number: "1111111111111111",
          expiryMonth: "01",
          expiryYear: "20",
          birthOrBusinessRegistrationNumber: "900101",
          passwordTwoDigits: "00",
        },
      },
    },
  },
});
```

### 주요 파라미터

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- method: object

  **결제수단 정보**

  - card?: object

    **카드 빌링키 발급 시 파라미터**

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자 등록 번호**

      - passwordTwoDigits: string

        **비밀번호 앞 두자리**

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    - 한국결제네트웍스(KPN)의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    * full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    * separated?: object

      **분리된 이름**

      - first?: string

        **이름**

      - last?: string

        **성**

  - phoneNumber?: string

    **구매자 연락처**

### 유의사항

<details>

<summary>필수 파라미터 안내</summary>

한국결제네트웍스(KPN)의 경우에는 빌링키 발급 시 아래의 파라미터를 필수로 입력해야 합니다.

- `customer.name.full` 혹은 `customer.name.separated`

그 외에는 위에서 설명한 주요 파라미터들을 참고하여 입력해주시기 바랍니다.

</details>

## API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제를 진행하려면 `POST /payments/${PAYMENT_ID_HERE}/billing-key` API를 이용하여 결제를 요청하실 수 있습니다.

한국결제네트웍스(KPN) 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="API 빌링키 단건 결제"
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/billing-key`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
    orderName: "월간 이용권 정기결제",
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      phoneNumber: `010-1234-5678`,
      email: `test@test.com`,
    },
    amount: {
      total: 10000,
    },
    currency: "KRW",
    productCount: 1,
  },
});
```

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- billingKey: string

  **빌링키 결제에 사용할 빌링키**

- orderName: string

  **주문명**

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - taxFree?: number

    **면세액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- customer?: object

  **고객 정보**

  - name?: object

    **고객 이름**

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first?: string

        **이름**

      - last?: string

        **성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

## API 빌링키 예약/반복 결제 요청하기

예약 결제를 진행하려면 `POST /payments/${PAYMENT_ID_HERE}/schedule` API를 이용하여 결제를 예약하실 수 있습니다.

한국결제네트웍스(KPN) 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="API 예약/반복 결제"
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/schedule`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    payment: {
      billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
      orderName: "월간 이용권 정기결제",
      customer: {
        id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      },
      amount: {
        total: 10000,
        taxFree: 3000,
      },
      currency: "KRW",
    },
    timeToPay: "2023-01-01 00:00:00", // 결제를 시도할 시각이며 미래 시각만 가능합니다.
  },
});
```

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- payment: object

  **빌링키 결제 요청 입력정보**

  - billingKey: string

    **빌링키 결제에 사용할 빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **결제 금액**

    - total: number

      **총 결제 금액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

    - taxFree?: number

      **면세액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - currency: string

    **결제 통화**

    결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- timeToPay: string

  **결제 예정 시점**

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    - 한국결제네트웍스(KPN)의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    * full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    * separated?: object

      **분리된 이름**

      - first?: string

        **이름**

      - last?: string

        **성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

## 공통 유의사항

<details>

<summary>부가세 지정금액 결제 미지원</summary>

한국결제네트웍스(KPN)의 경우 결제 시 부가세액을 직접 지정할 수 없습니다.

결제 요청 파라미터에 VAT(부가세)를 지정하시더라도 해당 값은 무시되며, 결제 금액에 대한 부가세는 한국결제네트웍스(KPN)에서 자동으로 계산됩니다.

만약 결제 요청시 VAT(부가세) 파라미터에 금액을 지정하는 경우 결제 조회시 요청 파라미터에 입력한 값이 응답으로 내려가므로, 부가세 파라미터를 지정하지 않는 것을 권장드립니다.

</details>

<details>

<summary>환불서비스 신청 안내</summary>

한국결제네트웍스(KPN)의 경우 계좌 환불의 형태로 결제를 취소하려면 별도 설정을 진행해야 합니다.

일반적으로 아래와 같은 경우에 대해 계좌 환불 서비스 신청이 필요합니다.

- 가상계좌 입금 후 환불
- 휴대폰 결제 후 익월 환불
- 계좌이체 취소가 불가능한 경우(환불 기한 초과, 계좌 제한 등)

또한, 위 환불 서비스를 이용할 경우에는 결제 취소시 환불 계좌 정보를 필수적으로 입력해야 합니다.

자세한 내용은 한국결제네트웍스(KPN) 담당자에게 문의해주시기 바랍니다.

</details>


# https://developers.portone.io/opi/ko/integration/pg/v2/ksnet

---
title: KSNET
description: KSNET 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/ksnet/readme
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)  페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 가능한 결제수단

- **SDK 결제**
  - `payMethod` 파라미터를 결제수단에 따라 아래와 같이 설정해야 합니다.
    - 신용카드 : `CARD`
    - 실시간 계좌이체 : `TRANSFER`
    - 가상계좌 : `VIRTUAL_ACCOUNT`
    - 휴대폰 소액결제 : `MOBILE`
    - 간편 결제 : `EASY_PAY`

- **API 수기(키인) 결제**
  - `method` 파라미터 내부 필드를 결제수단에 따라 아래와 같이 선택해야 합니다.
    - 신용카드 : `card`
    - 가상계좌 : `virtualAccount`

- **SDK 빌링키 발급**
  - `billingKeyMethod`(빌링키 발급) 파라미터를 `CARD`로 설정해야 합니다.

- **API 빌링키 발급**
  - `method` 파라미터 내부 필드를 `card`로 선택해야 합니다.

## SDK 결제 및 빌링키 발급 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야합니다. `channelKey` 파라미터에 결제 채널 연동 시
생성된 채널 키값을 지정하여 KSNET 연동임을 명시해주세요. 만약 `channelKey`가 입력되지 않는 경우
`pgProvider` 파라미터에 입력된 값에 따라 결제창이 호출됩니다.

KSNET 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    paymentId: `payment-${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    payMethod: "CARD",
    card: {
      cardCompany: "BC_CARD",
    },
  });
}
```

</div>

</div>

## API 수기(키인)결제 및 빌링키 발급 및 예약/반복 결제 요청하기

수기(키인)로 결제하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/instant/pay`를 이용하여 결제
요청을 해야합니다. 그리고 빌링키를 발급하기 위해서는 `POST /billing-keys`를 이용하여 빌링키 발급
요청을 해야합니다. 이후 발급된 빌링키로 예약/반복 결제를 하기위해 `POST /schedules` 를 이용하여
결제를 예약합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 수기(키인) 결제 요청">

```ts
// ... 수기(키인) 결제
const issueResponse = await axios({
  url: `https://api.portone.io/payments/${encodeURIComponent(PAYMENT_ID_HERE)}/instant`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey,
    orderName,
    productType,
    customer: {
      id: customerId,
      name: {
        first: firstName,
        last: lastName,
      },
    },
    amount: {
      total: totalAmount,
    },
    currency,
    method: {
      card: {
        credential: {
          number: cardNumber,
          expiryYear,
          expiryMonth,
          birthOrBusinessRegistrationNumber,
          passwordTwoDigits,
        },
      },
    },
  },
});
```

</div>

<div class="tabs-content" data-title="API 빌링키 발급 요청">

```ts
// ... 빌링키 발급
const issueResponse = await axios({
  url: "https://api.portone.io/billing-keys",
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey,
    customer: {
      id: customerId,
    },
    method: {
      card: {
        credential: {
          number: cardNumber,
          expiryYear,
          expiryMonth,
          birthOrBusinessRegistrationNumber,
          passwordTwoDigits,
        },
      },
    },
  },
});
```

</div>

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
async function schedulePayment() {
  // 포트원 결제 예약 API 호출
  const response = await axios({
    url: `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/schedule`,
    method: "post",
    headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
    data: {
      payment: {
        billing_key: BILLING_KEY_HERE,
        orderName: "월간 이용권 정기결제",
        customer: {
          id: CUSTOMER_ID_HERE,
          // 고객 정보가 필요한 경우 API 명세에 따라 추가해주세요.
        },
        amount: {
          total: 8900,
        },
        currency: "KRW",
      },
      timeToPay: "2023-08-24T14:15:22Z", // 결제를 시도할 시각
    },
  });
  // 결제 예약 이후 로직을 구성해주세요.
}
```

</div>

</div>

## 주요 파라미터

- storeId: string

  고객사의 상점을 식별하는 고유한 값입니다.

- paymentId: string

  고객사가 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- orderName: string

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키로 호출하고자 하는 채널을 지정합니다.

- totalAmount: number

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를
  고려한 number 형식만 허용됩니다.

- currency: string

  결제통화로 원화 결제를 원할 시 `KRW`로 입력해야 합니다. KSNET의 경우 `KRW`와 `USD`를 지원합니다.

- payMethod: string

  결제수단을 구분하는 코드로 원하는 결제수단 값을 입력해야 합니다.

- customer.fullName: string

  구매자 이름으로 KSNET의 경우 필수로 입력해야 합니다.

- taxFreeAmount?: number

  면세 금액으로 KSNET과 상점아이디 계약시 복합과세로 계약한 경우 면세 처리를 위해 면세금액을
  반드시 입력해야 합니다. 면세금액 미 입력 시 면세금액은 0원으로 자동 처리되며, 결제 요청 금액은
  모두 과세 처리 되오니 이 점 유의하시기 바랍니다.

- card.cardCompany: string

  카드사 다이렉트 호출 시 결제대행사의 통합결제창을 거치지 않고, 지정한 카드사의 결제화면이 호출됩니다.
  카드사별로 지원하는 기능이 상이함으로, 카드 다이렉트 호출 유의사항을 확인해 주세요.

## 유의할 파라미터 - SDK

### SDK 결제/빌링키 발급 공통

- windowType?: string

  - KSNET의 경우 PC는 `IFRAME`, mobile은 `REDIRECTION`만 지원되며 이외의 다른 방식으로 결제창을 호출할 경우 에러를 리턴합니다.

  - `windowType` 파라미터를 채우지 않을 경우 자동으로 아래와 같이 세팅됩니다.

    ```json
    {
      "pc": "IFRAME",
      "mobile": "REDIRECTION"
    }
    ```

- locale?: string

  - KSNET의 경우 `KO_KR`만 지원합니다. 이외의 값을 넣어도 무시됩니다.

- redirectUrl?: string

  - 모바일 환경에서 결제 요청 시 `REDIRECTION` 타입이므로, 필수로 입력해야 합니다.

### API 결제

- productType: string

  판매 상품에 대한 상품 유형 파라미터로 API 결제 시 필수로 입력해야 합니다.

  - `PHYSICAL`: 실물 상품
  - `DIGITAL` : 디지털 상품

### SDK 결제 (`requestPayment`)

- productType?: string

  휴대폰 결제인 경우 필수로 입력해야 하며, KSNET의 상점아이디에 설정된 상품 유형과 일치해야합니다.
  디지털 상품유형으로 설정된 경우 항상 `PRODUCT_TYPE_DIGITAL`로 입력해야 합니다.

  - `PRODUCT_TYPE_REAL`: 실물 상품
  - `PRODUCT_TYPE_DIGITAL` : 디지털 상품

- bypass?: object

  - ksnet?: object

    - sndQpayType?: string

      카드 결제 시 결제창에 간편 결제 수단 표시 여부를 설정할 수 있습니다.

      - `0` : 간편결제 수단 표시 하지 않음
      - `1` : 간편결제 수단 표시함

### 카드 다이렉트 호출

- customer?: object

  - fullName?: string

    - KSNET을 통한 카드사 다이렉트 호출 시, 구매자명 파라미터는 필수 입력입니다.

  - phoneNumber?: string

    - 모바일 환경에서 **BC카드, 수협카드, 전북카드, 광주카드, 카카오뱅크카드** 를 다이렉트 호출하는 경우, 필수 입력입니다.

- bypass?: object

  - ksnet?: object

    - tcode?: string

      - 모바일 환경에서 **BC카드, 수협카드, 전북카드, 광주카드, 카카오뱅크카드** 를 다이렉트 호출하는 경우, 필수 입력입니다.
      - 통신사에 따라 LG는 lgt, KT는 ktf, SKT는 skt로 입력해야 하며, 통신사 구분이 어려우신 경우 임의의 값을 입력하여 요청해도 무방합니다.

    - url?: string

      - **우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를 다이렉트 호출하는 경우 필수 입력입니다.

- storeDetails?: object

  - businessName?: string

    - **국민카드, 우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를 다이렉트 호출하는 경우, 필수 입력입니다.

  - businessRegistrationNumber?: string

    - **국민카드, 우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를 다이렉트 호출하는 경우, 필수 입력입니다.

- installments?: object

  - monthOption?: object

    - availableMonthList?: number\[]

      - **국민카드, 우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를 다이렉트 호출하는 경우, 렌더링할 할부개월 리스트를 지정할 수 있습니다.

## 연동 유의사항

### KSNET과 사전 계약이 필요한 경우

포트원을 통해 KSNET을 이용하고자 하는 고객사의 경우 상점아이디의 과세설정이 반드시 `복합과세`로 설정되어 있어야 합니다.

아래의 기능을 사용하려면 사전 신청을 통해 KSNET과 계약을 완료해야 합니다.

계약을 하지 않은 경우 해당 기능을 이용하여 결제 시 결제 승인에 실패하거나, 승인에 성공하더라도 의도한 바와 다른 응답을 받을 수 있습니다.
(ex. 에스크로 결제를 요청하여 결제를 진행하였으나 비-에스크로 결제 응답을 받는 경우)

- 키인결제

- 고객사 부담 무이자 할부 설정

- 가상계좌 입금마감기한 지정

- 가상계좌 환불

- 간편결제

- 신용카드 할부

- 에스크로 (배송 에스크로만 지원)
  - KSNET에서는 일반 에스크로, 배송 에스크로 두 가지 유형의 에스크로를 제공하고있으나, 포트원에서는
    KSNET 배송 에스크로만 제공하고 있으므로 에스크로 사용을 원할 시 KSNET에 **배송 에스크로**로
    설정을 요청 해야합니다.

- 휴대폰 결제
  - KSNET을 통해 상품 유형 설정(ex. 실물 혹은 디지털) 요청을 해야합니다.

### 카드 결제

- `card.installment.freeInstallmentPlans.cardCompany` 파라미터는 일부 카드사에 대해서만 적용 가능합니다.
  - 지원 가능한 카드 : 비씨,국민,하나,삼성,신한,현대,롯데,농협
  - 지원 불가능한 카드 : 씨티

<details>

<summary>파라미터 사용 예시 </summary>

```json
{
  "card": {
    "installment": {
      "freeInstallmentPlans": [
        {
          "cardCompany": "KOOKMIN_CARD",
          "months": [9, 10]
        }
      ]
    }
  }
}
```

</details>

- 결제 통화 `currency`를 `USD`로 지정하여 결제 요청한 경우 해외 발급 카드로만 결제가 가능합니다. 국내에서 발급받은 해외 겸용 카드는 결제 승인이 불가합니다.

### 간편결제

- 간편결제 시 무이자 할부 설정은 불가능하며, 할부 개월 수 표시 설정은 일부 간편결제에서만 가능합니다.

  - 지원 가능한 간편결제 : 네이버페이, 카카오페이, L페이
  - 지원 불가능한 간편결제 : 페이코, SSG페이 (1\~12개월 표시 고정)

- 간편결제로 결제 요청 시 고객사 분담 무이자 설정은 사용이 불가능합니다.

- 간편결제 중 카카오페이, 페이코를 통한 카드 결제의 경우 포트원으로 전달되는 결제 응답에 카드정보가 제공되지 않아 결제 정보에 카드사 정보가 제공되지 않습니다.

- 카카오페이 사용을 원하실 경우 앱 또는 웹 하단에 대표자명, 주소, 전화번호와 같은 상점정보를 필수로 입력해야합니다.

### 간편결제 다이렉트

- KSNET 간편결제 다이렉트는 아래의 결제 방식을 지원합니다.
  - 네이버페이 카드
  - 카카오페이 카드 및 머니
  - 페이코
  - L페이 카드

- 네이버페이 머니·포인트의 경우 현재 KSNET에서는 다이렉트 호출을 지원하지 않습니다.

- 간편결제 다이렉트를 사용하기 위해서는 `bypass.ksnet.easyPayDirect`를 `true`로 설정하고, `payMethod`를 `EASY_PAY`, `easyPay.easyPayProvider`를 `NAVERPAY`, `KAKAOPAY`, `PAYCO`, `LPAY` 중 하나로 지정합니다.

- 구매자 이름(`customer.fullName`)을 입력해야 합니다.

- 네이버페이의 경우
  - 현재 카드 결제만 가능
  - 상점명(`storeDetails.businessName`) 필수
  - `customer.email`, `customer.phoneNumber` 선택
  - 할부 개월 수 표시 설정 가능
  - 이용 가능 카드사 설정 가능 (신한, BC, 국민, 농협, 롯데, 삼성, 시티, 우리, 하나, 현대)

- 카카오페이의 경우
  - 상점 대표자명(`storeDetails.ceoFullName`) 필수
  - 상점 주소(`storeDetails.address`) 필수
  - 상점 전화번호(`storeDetails.phoneNumber`) 필수
  - `customer.email`, `customer.phoneNumber` 필수
  - `easyPay.availablePayMethods`로 결제 유형 한정 가능(`["CARD"]`로 지정할 경우 카드만, `["MONEY"]`로 지정할 경우 머니만)
  - 할부 개월 수 표시 설정 가능
  - 이용 가능 카드사 설정 가능 (신한, BC, 국민, 농협, 롯데, 삼성, 시티, 우리, 하나, 현대)

- 페이코의 경우
  - 상점명(`storeDetails.businessName`) 필수
  - 사업자등록번호(`storeDetails.businessRegistrationNumber`) 필수
  - `customer.email`, `customer.phoneNumber` 필수

- L페이의 경우
  - `customer.email`, `customer.phoneNumber` 선택

### 계좌이체

- SDK로 계좌이체 결제 요청 시 결제창 내에서 현금영수증 발급을 위한 정보 입력 시 휴대폰 번호 및 사업자번호는 숫자만 입력해야 합니다.
  하이픈(-)을 포함한 다른 문자가 포함되는 경우 별다른 에러 표시 없이 결제는 정상승인되지만 현금영수증이 발급되지 않으니 유의하여 사용이 필요합니다.

### 가상계좌

- KSNET의 경우 가상계좌 발급 시 예금주명은 고객사명으로 고정되어 별도의 지정이 불가능합니다.

- KSNET의 경우 일회성 가상계좌의 경우 부가세, 면세 금액 설정을 지원하지 않습니다.

- KSNET의 경우 가상계좌 환불 기능은 특약이 있는 고객사만 사용 가능하며, KSNET과 사전에 계약 진행이 필요합니다.

- 포트원을 통한 KSNET을 사용하는 경우 가상계좌 발급 시 입금기한을 필수로 입력하여 사용해야 합니다.
  입금기한을 입력하지 않는 경우 가상계좌 에러를 리턴하고, 가상계좌가 정상적으로 발급되지 않습니다.

- 가상계좌 발급 시 입금 기한은 `virtualAccount.accountExpiry.dueDate` 또는
  `virtualAccount.accountExpiry.validHours` 파라미터로 설정해야하며 `dueDate`는 ISO8601 형식으로,
  `validHours`는 number 형식으로 입력해야 합니다.

<details>

<summary>ISO8601 형식 예시 </summary>

- YYYY-MM-DDTHH:mm:ssZ
- YYYY-MM-DDTHH:mm:ss±hh:mm

</details>

- 가상계좌 결제 건 결제취소(환불)은 06:00 \~ 23:00 까지만 가능하며, 이 외의 시간에 시도하면 에러를 리턴합니다. 이는 KSNET의 정책으로 포트원과 무관합니다.

- 가상계좌 결제 시 결제창에서 발급한 현금영수증의 경우 해당 거래가 취소되더라도 자동으로 취소되지
  않습니다. 따라서, 직접 현금영수증 발급 취소를 진행해야 하므로 유의하시기 바랍니다.

- 복합과세가 적용된 가상계좌 결제 후 부분 취소하는 경우 기존에 발급한 현금영수증을 취소하고, 부분취소 금액이 반영된 금액 정보로 현금영수증을 재발급해야 합니다.

### 휴대폰결제

- 휴대폰 소액 결제 승인 건은 부분취소가 불가능합니다.

### 에스크로

- 에스크로 거래는 SDK 결제에서만 가능합니다.

- 에스크로 결제 시 구매 확정을 위해 주문자 이메일(`customer.email`)을 필수로 입력해야 합니다.

- 에스크로 거래는 KSNET 관리자 페이지 (ksta.ksnet.co.kr > PG 거래내역 > 배송 에스크로 거래조회)에서
  거래 후 30분\~ 1시간 뒤 확인이 가능합니다. 에스크로 정보 수정의 경우도 등록이 완료된 이후부터
  가능하오니 유의해서 사용이 필요합니다.

- 에스크로 배송정보 등록/변경 API (POST `/payments/${PAYMENT_ID_HERE}/escrow/logis`)에 사용되는
  배송정보 발송일시 `logistics_form.send_at` 파라미터는 ISO8601 형식으로 입력해야 합니다.

<details>

<summary>ISO8601 형식 예시</summary>

- YYYY-MM-DDTHH:mm:ssZ
- YYYY-MM-DDTHH:mm:ss±hh:mm

</details>

### API 수기(키인) 결제

- 고객사 분담 무이자를 원하시는 경우 KSNET과 별도의 계약 후 method.card.useFreeInterestFromMerchant
  파라미터를 true로 입력하여 사용 가능합니다.

- 포트원을 통한 KSNET API 수기(키인) 결제는 카드 번호와 유효기간만으로 결제를 요청하는 비인증 승인 API만 연동되어 있어 `birthOrBusinessRegistrationNumber` 와 `passwordTwoDigits` 는 검증하지 않습니다.

### API 빌링키 발급

- method.card.credential의 `number`, `expiryYear`, `expiryMonth`, `birthOrBusinessRegistrationNumber`, `passwordTwoDigits` 파라미터는 필수 입력해야 합니다.

### 빌링키 결제

- 고객사 분담 무이자를 원하시는 경우 KSNET과 별도의 계약 후 `card.use_free_interest_from_mall` 파라미터를 true로 입력하여 사용 가능합니다.

### 기타

- 카드, 간편결제를 제외한 결제수단의 경우 매출 전표 확인이 불가능합니다. 이는 KSNET 정책으로 포트원과 무관합니다.

- 카드결제, 계좌이체, 가상계좌, 간편결제로 정상 승인된 건에 대해 부분취소를 하는 경우 총 9회까지 가능합니다.

- 결제 취소는 결제일 기준 6개월 이내 거래건만 가능합니다.

- KSNET의 경우 승인 영수증 및 취소 영수증 확인 시 자동으로 인쇄 기능이 호출되며, 이는 KSNET의 정책으로 포트원과 무관합니다.

- 결제 시 면세 금액이 포함된 경우 면세 금액 (`taxFreeAmount`) 파라미터에 정확한 금액을 입력해야
  하며, 입력하지 않을 경우 매출전표 및 실제 처리 내역이 다를 수 있습니다.

- KSNET의 경우 상점 분담 무이자 할부 설정은 카드 발급사가 **비씨,국민,하나,삼성,신한,현대,롯데,농협**인 카드에 대해서만 가능합니다.


# https://developers.portone.io/opi/ko/integration/pg/v2/naverpay

---
title: 네이버페이 (결제형)
description: 네이버페이 간편결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/naver
---

## 네이버페이 (결제형) 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 가능한 결제 수단

- 간편 결제
  - `payMethod`(결제) 혹은 `billingKeyMethod`(빌링키 발급) 파라미터를 `EASY_PAY` 로 설정해야 합니다.
  - 결제창 내에서 카드, 계좌이체, 네이버페이 머니 충전식 결제 중 선택이 가능합니다.

## SDK - 유의할 파라미터

### 결제/빌링키 발급 공통

- `windowType`

  - 네이버페이의 경우 PC는 `POPUP`, mobile은 `REDIRECTION`만 지원되며 이외의 다른 방식으로 결제창을 호출할 경우 에러를 리턴합니다.

  - `windowType` 파라미터를 채우지 않을 경우 자동으로 아래와 같이 세팅됩니다.

    ```json
    {
      "pc": "POPUP",
      "mobile": "REDIRECTION"
    }
    ```

- `locale`
  - 네이버페이의 경우 `KO_KR`만 지원합니다. 이외의 값을 넣어도 무시됩니다.

- `easyPay`
  - `easyPayProvider`
    - 네이버페이의 경우 PG사 자체가 간편결제사이므로 `easyPayProvider` 는 비워두어도 무방하며 다른 값을 채울 경우 무시됩니다.

- `currency`
  - 네이버페이의 경우 원화 결제만 지원하므로 `KRW` 이외의 값을 넣으면 에러를 리턴합니다.

### 결제 (`requestPayment`)

- `payMethod`
  - `EASY_PAY` 로 설정해야 합니다.

- `bypass`

  - 포트원에서 정규화한 파라미터 이외에 네이버페이에서만 특수하게 지원하는 파라미터들을 `bypass` 를 통해 넘겨줄 수 있습니다.

    - `useCfmYmdt`
      - 이용완료일
      - `YYYYMMDD` 형식의 문자열로 넘겨야 합니다.
      - 상품 유형에 따라 네이버페이-고객사 간 필수값으로 계약되는 경우 입력합니다

    - `productItems`

      - 상품 정보

      - 네이버페이의 상품 정보는 일반화된 Product 파라미터가 아닌 해당 파라미터로 넘겨주어야 합니다.

        <details>

        <summary> `productItem`의 배열을 넘겨야 합니다. </summary>

        `productItem` 은 다음 6개의 속성으로 하나의 상품 정보를 표현하는 객체의 배열입니다.

        - **`categoryType`** (필수) : [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product) 참고
        - **`categoryId`** (필수) : [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product) 참고
        - **`uid`** (필수) : 고객사 내부의 상품 고유 ID를 활용하는 것이 일반적이지만, 네이버페이 가이드 참고가 필요합니다. [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product)
        - **`name`** (필수) : 주문상품의 명칭
        - **`count`** (필수) : 상품 주문 개수
        - `sellerId` (선택) : 고객사가 하위 판매자를 식별하기 위한 고유 ID(영문 대소문자 및 숫자 허용)고객사의 업종이 통신판매중개업에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 대상 고객사만 필수 입력합니다.비대상 고객사은 입력하지 않습니다.
        - `payReferrer` (선택) : 네이버 플랫폼의 타 서비스와 제휴계약 후 유입분석을 진행하는 경우에만 입력 [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product_ref)
        - `startDate` (선택) : 시작일(YYYYMMDD)
        - `endDate` (선택) : 종료일(YYYYMMDD)

        </details>

    - `deliveryFee`
      - 배송비
      - `number` 타입으로 넘겨야 합니다.

  - 예를 들어 아래와 같이 `bypass` 파라미터를 넘겨줄 수 있습니다.

    ```json
    {
      "bypass": {
        "naverpay": {
          "useCfmYmdt": "20230421",
          "productItems": [
            {
              "categoryType": "categoryType", // 결제 상품 유형
              "categoryId": "categoryId", // 결제 상품 분류
              "uid": "uid", // 결제 상품 식별값
              "name": "name", // 상품명
              "payReferrer": "NAVER_BOOK", // 결제 상품 유입경로
              "startDate": "20230421", // 시작일(YYYYMMDD)
              "endDate": "20230428", // 종료일(YYYYMMDD)
              "sellerId": "sellerId", // 하위 판매자 식별키
              "count": 5 // 결제 상품 개수
            }
          ],
          "deliveryFee": 3000
        }
      }
    }
    ```

- `orderName`

  - 주문명

  - 네이버페이 내부적으로 **`외 2개`** 의 표현이 자동생성되므로 **"`xxxx 외 2개"`** 대신
    `bypass.naverpay.productItems[0].name`(첫번째 상품명)으로 설정하길 권장합니다.

- `customer.name`

  - 고객사 고객의 이름입니다.

  - 결제 상품이 고위험 업종에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 **대상 고객사의 경우
    필수 입력**합니다.

- `customer.birth{Year, Month, Day}`

  - 각각 고객사 고객의 출생 년도/월/일입니다.

  - 결제 상품이 고위험 업종에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 **대상 고객사의 경우
    세 필드 모두 필수 입력**합니다.

- `easyPay.installment`
  - 네이버페이는 지원하지 않습니다.

- `easyPay.availableCards`
  - 네이버페이는 지원하지 않습니다.

### 빌링키 발급 (`requestBillingKeyIssue`)

- `billingKeyMethod`
  - `EASY_PAY` 로 설정해야 합니다

- `issueId`
  - 고객사에서 채번하는 빌링키 발급 건 고유 ID
  - 네이버페이의 경우 필수 입력입니다.
  - 하나의 네이버 계정에 대해서 같은 issueId를 재사용할 수 없습니다.

- `issueName`
  - 빌링키 발급 시 결제창에 표시되는 제목입니다.
  - 네이버페이의 경우 필수 입력입니다.

- `displayAmount`
  - 네이버페이의 경우, 빌링키 발급창에 띄워줄 금액 정보를 파라미터로 설정할 수 있습니다. (optional)
  - 해당 파라미터를 입력할 경우 `currency` 필드도 함께 입력해야 합니다.

- `currency`
  - 네이버페이의 경우, 빌링키 발급창에 띄워줄 금액 정보를 파라미터로 설정할 수 있습니다. (optional)
  - 해당 파라미터를 입력할 경우 `displayAmount` 필드도 함께 입력해야 합니다.

## 이외 연동 주의사항

- **에러 메시지 비 가공**
  - 결제창 호출(`requestPayment` 함수)후 결제창 하단의 “취소" 버튼 클릭 등으로 결제 프로세스가
    중단되거나 잔액 부족, 한도 초과, 100원 미만 결제 등의 사유로 결제에 실패하면 콜백 함수(popup
    방식)/`redirectUrl`(리디렉션 방식)로 전달되는 결제 결과(response 객체/쿼리 파라미터)에 실패
    사유(error\_msg)가 전달됩니다. 이 에러 메시지는 사용자에게 가공 없이 그대로 노출되어야 합니다.
    해당 규칙 미 준수시 네이버페이 실 검수 진행시 수정 요청을 받게 됩니다.

  - 예) error\_msg가 “잔액 부족"이라고 가정할때, "결제에 실패하였습니다. 실패 사유:" + "잔액 부족"과
    같은 형태로 가공되면 안됨

- **100원 미만 결제 처리**
  - 네이버페이 - 결제형의 최소 결제 금액은 100원이기 때문에, 100원 미만 결제 요청에 대해 예외 처리가
    되어있어야 합니다.

  - 예) 사용자에게 최소 결제 금액이 100원이라 결제를 할 수 없다는 의미를 담는 에러 메시지가
    노출되어야 함

- **"API 호출 권한이 없습니다" 에러**
  - 네이버페이 결제형 연동은 **네이버페이 검수진행이 시작되기 전까지는 운영환경에서 결제창 호출 시
    위와 같은 오류가 도출**됩니다. 해당 부분은 검수가 진행되면 해결되는 부분이기 때문에 무시해주시면
    됩니다.


# https://developers.portone.io/opi/ko/integration/pg/v2/nice-v2

---
title: 나이스페이먼츠
description: 나이스페이먼츠 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/nice-v2/readme
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.
  V2 결제 모듈을 사용하시려면 나이스페이먼츠(신모듈)로 연동하셔야 합니다.

## 가능한 결제수단

- **일반 결제**
  - `payMethod`파라미터를 결제수단에 따라 아래와 같이 설정해야 합니다.
    - 신용카드 : `CARD`
    - 실시간 계좌이체 : `TRANSFER`
    - 가상계좌 : `VIRTUAL_ACCOUNT`
    - 휴대폰 소액결제 : `MOBILE`
    - 상품권결제: `GIFT_CERTIFICATE`
    - 간편 결제 : `EASY_PAY`

- **API 수기(키인) 결제**
  - `method`파라미터를 `card`로 설정해야 합니다.

- **API 빌링키 발급**
  - `method`파라미터를 `card`로 설정해야 합니다.

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey`파라미터에 결제 채널 연동 시 생성된 채널 키값을 지정하여 나이스페이먼츠 채널 사용을 명시해주세요.

나이스페이먼츠 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    paymentId: `payment-${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    payMethod: "CARD",
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- orderName: string

  주문명으로 고객사에서 **40Byte** 이내로 자유롭게 입력합니다.

  **특수문자 유의사항**

  - 사용 가능 : **\_**
  - 사용 불가 : **% & | $ - + = \[ ]**
  - 사용 가능하나 권장하지 않음 : **( )**

- channelKey: string

  콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키로 호출하고자 하는 채널을 지정합니다.

- totalAmount: number

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다. 나이스페이먼츠의 경우 `KRW`와 `USD`를 지원합니다.

- payMethod: string

  결제수단으로 결제하고자 하는 결제수단의 값을 입력해야 합니다.

- taxFreeAmount?: number

  면세금액으로 나이스페이먼츠와 상점아이디 계약시 지정금액 혹은 복합과세 방식으로 계약한 경우 면세 처리를 위해 면세금액을 반드시 입력해야 합니다.

  면세금액 미 입력 시 면세금액은 0원으로 자동 처리되며, 결제 요청 금액은 모두 과세 처리 되오니 이 점 유의하시기 바랍니다.

### 유의할 파라미터

- `virtualAccount.accountExpiry`

  가상계좌 발급 시 입금 기한은 필수로 입력해야 합니다.

- `card.installment.monthOption.fixedMonth`

  나이스페이먼츠는 **카드사 다이렉트 호출시 고정 할부 개월수를 필수로 입력**해야 합니다. 결제
  금액이 할부 지원 금액 미만(대부분 50,000원이상 할부지원이나 카드사에 따라 상이함)인 경우 **할부
  개월수를 0(일시불)으로 전달**해야 합니다.

- `productType`

  휴대폰 소액 결제 시 실물/컨텐츠 여부(`productType`) 파라미터는 필수 입력입니다. 입력하지 않는
  경우 "나이스페이 V2 휴대폰 소액결제시 상품 유형 파라미터는 필수 입력입니다." 라는 에러 메시지가
  리턴되면서 결제창 호출에 실패하오니 유의하시기 바랍니다. 또한 상점아이디 설정과 실물/컨텐츠
  여부가 불일치할 경우 "CPID미설정 오류입나다."라는 메시지가 리턴되며 결제창 호출에 실패하니
  유의하시기 바랍니다.

- `giftCertificate.certificateType`

  나이스페이먼츠는 컬쳐랜드만 지원하므로 상품권 결제시 항상 `CULTURELAND`로 지정해주어야 합니다.

- `bypass.nice_v2.MallUserID`

  나이스페이먼츠 상품권 결제시 고객사 구매자 ID를 의미하는 MalluserID는 필수로 입력해주어야 합니다.

- `easyPay.availablePayMethods`

  나이스페이먼츠를 통한 간편결제 결제 요청 시 다른 간편결제 수단과 다르게 네이버페이와 SSG페이의
  경우 어떤 방식으로 결제하느냐에 따라 availablePayMethods을 입력해야 합니다.

  - 네이버페이의 경우 카드 결제인 경우 `CARD`, 포인트 혹은 머니 결제인 경우 `CHARGE` 로 입력해야
    합니다.

  - SSG페이의 경우 계좌 결제인 경우 `TRANSFER`로 입력해야 하며, SSG페이는 계좌 결제 시에만
    다이렉트 호출이 가능합니다. 카드 혹은 머니 결제를 이용하시는 경우 `availablePayMethods`를
    제외한채 호출하시길 바랍니다.

## API 수기(키인)결제 요청하기

수기(키인)로 결제하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/instant`를 이용하여 결제 요청을 해야합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 수기(키인) 결제 요청">

```ts
// ... 수기(키인) 결제
const issueResponse = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/instant`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    orderName: "나이키 와플 트레이너 2 SD",
    amount: {
      total: 10000,
      taxFree: 500,
    },
    currency: "KRW",
    customer: {
      name: {
        full: "홍길동",
      },
      email: "test@test.com",
      phoneNumber: "01012345678",
    },
    method: {
      card: {
        credential: {
          number: "1111111111111111",
          expiryMonth: "01",
          expiryYear: "20",
          birthOrBusinessRegistrationNumber: "900101",
          passwordTwoDigits: "00",
        },
        installmentMonth: 3, // 카드 할부 개월수
        useFreeInterestFromMerchant: true, // 고객사 분담 무이자 설정
        useCardPoint: true, // 카드 포인트 사용 설정
      },
    },
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 하며, URL path에 포함돼야 합니다.

- channelKey: string

  콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키로 호출하고자 하는 채널을 지정합니다.

- orderName: string

  주문명으로 고객사에서 자유롭게 입력합니다.

- amount: object

  결제 금액에 대한 정보를 담고있는 객체입니다.

  - total: number

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - taxFree?: number

    면세 금액으로 나이스페이먼츠과 상점아이디 계약시 지정금액 혹은 복합과세 방식으로 계약한 경우 면세 처리를 위해 면세금액을 반드시 입력해야 합니다.
    면세금액 미 입력 시 면세금액은 0원으로 자동 처리되며, 결제 요청 금액은 모두 과세 처리 되오니 이 점 유의하시기 바랍니다.

  - currency: string

    결제통화로 원화 결제를 원할 시 `KRW`로 입력해야 합니다.

- method: object

  결제 수단에 대한 정보를 담고있는 객체입니다.

  - card: object

    - credential: object

      - number: string

        카드번호로 10자리 이상 20자리 이하의 숫자만 입력해야 합니다.

      - expiryMonth: string

        카드 유효기간의 월로 2자리 숫자만 입력해야 합니다.

      - expiryYear: string

        카드 유효기간의 년도로 2자리 숫자만 입력해야 합니다.

      - birthOrBusinessRegistrationNumber: string

        카드 소지자의 생년월일 혹은 사업자 등록번호로 6자리 숫자만 입력해야 합니다.

      - passwordTwoDigits: string

        카드 비밀번호 앞 2자리로 2자리 숫자만 입력해야 합니다.

    - installmentMonth?: number

      카드 할부 개월수로 0(일시불) 혹은 2\~12개월까지의 숫자만 입력해야 합니다.

    - useFreeInterestFromMerchant?: boolean

      고객사 부담 무이자 설정으로 `true` 혹은 `false`만 입력

    - useCardPoint?: boolean

      카드 포인트 사용 설정으로 `true` 혹은 `false`만 입력

### 유의할 파라미터

- `method.card.InstallmentMonth`

  카드 할부 개월수로 0(일시불) 혹은 2\~12개월까지의 숫자만 입력해야 합니다. 입력하지 않은 경우 일시불로 처리됩니다.

- `method.useFreeInterestFromMerchant`

  고객사 부담 무이자 설정으로 `true` 혹은 `false`만 입력.

- `method.card.useCardPoint`

  카드 할부 개월수로 0(일시불) 혹은 2\~12개월까지의 숫자만 입력해야 합니다. 입력하지 않은 경우 일시불로 처리됩니다.

## API 빌링키 발급 및 예약/반복 결제 요청하기

빌링키를 발급하기 위해서는 `POST /billing-keys`를 이용하여 빌링키 발급 요청을 해야합니다. 이후
발급된 빌링키로 예약/반복 결제를 하기위해 `POST /payments/${PAYMENT_ID_HERE}/schedule` 를 이용하여
결제를 예약합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 빌링키 발급 요청">

```ts
const issueResponse = await axios({
  url: "https://api.portone.io/billing-keys",
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
    },
    method: {
      card: {
        credential: {
          number: "1111111111111111",
          expiryMonth: "01",
          expiryYear: "20",
          birthOrBusinessRegistrationNumber: "900101",
          passwordTwoDigits: "00",
        },
      },
    },
  },
});
```

</div>

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/schedule`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    payment: {
      billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
      orderName: "월간 이용권 정기결제",
      customer: {
        id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      },
      amount: {
        total: 10000,
        taxFree: 500,
      },
      currency: "KRW",
      useFreeInterestFromMerchant: true, // 고객사 분담 무이자 설정
      InstallmentMonth: 3, // 카드 할부 개월수
      useCardPoint: true, // 카드 포인트 사용 설정
    },
    timeToPay: "2023-01-01 00:00:00", // 결제를 시도할 시각
  },
});
```

</div>

</div>

### 빌링키 발급 주요 파라미터

- channelKey: string

  콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키로 호출하고자 하는 채널을 지정합니다.

- method: object

  결제 수단에 대한 정보를 담고있는 객체입니다.

  - card: object

    - credential: object

      - number: string

        카드번호로 10자리 이상 20자리 이하의 숫자만 입력해야 합니다.

      - expiryMonth: string

        카드 유효기간의 월로 2자리 숫자만 입력해야 합니다.

      - expiryYear: string

        카드 유효기간의 년도로 2자리 숫자만 입력해야 합니다.

      - birthOrBusinessRegistrationNumber: string

        카드 소지자의 생년월일 혹은 사업자 등록번호로 6자리 숫자만 입력해야 합니다.

      - passwordTwoDigits: string

        카드 비밀번호 앞 2자리로 2자리 숫자만 입력해야 합니다.

### API 예약/반복 결제 주요 파라미터

- paymentId: string

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 하며, URL path에 포함돼야 합니다.

- payment: object

  **빌링키 결제 요청 입력정보**

  - billingKey: string

    **빌링키 결제에 사용할 빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **결제 금액**

    - total: number

      **총 결제 금액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

    - taxFree?: number

      **면세액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

      면세 금액으로 (신)나이스페이먼츠과 상점아이디 계약시 지정금액 혹은 복합과세 방식으로 계약한 경우 면세 처리를 위해 면세금액을 반드시 입력해야 합니다.
      면세금액 미 입력 시 면세금액은 0원으로 자동 처리되며, 결제 요청 금액은 모두 과세 처리 되오니 이 점 유의하시기 바랍니다.

  - currency: string

    **결제 통화**

    결제통화로 원화 결제 시 `KRW`로 입력해야 합니다. (신)나이스페이먼츠의 경우 빌링키로 결제시 `KRW`만 지원합니다.

- timeToPay: string

  결제를 시도할 시각으로 ISO8601 형식으로 입력해야 합니다.

## 연동 유의사항

### 나이스페이먼츠과 사전 계약이 필요한 경우

아래 기능을 사용하시려면 나이스페이먼츠에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 PG창 호출에 실패하거나, 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답을 얻게 될 수 있으니 이 점 유의하시길 바랍니다.

- 모든 결제 수단(간편결제 포함)

- 면세 / 복합과세 사용

- 부가세 지정 금액 방식 사용(영세율 포함)

- 부분 취소

- 할부 사용

- 상점 부담 무이자 할부 사용

- 카드사 포인트 사용

- 에스크로 사용

- 해외 결제 사용

- 일부 bypass 파라미터
  - UserCI
  - MallUserID
  - DirectCouponYN
  - PaycoClientId, PaycoAccessToken
  - SamPayMallType

### 일반결제 공통 유의사항

- 결제창 호출 실패 사유 알 수 없음
  - 상점 아이디 설정 이슈, 파라미터 설정 오류 등으로 결제창 호출이 불가능한 경우 PG사로부터 정확한
    사유를 전달 받고 있지 않아 “알 수 없는 이유로 결제가 중단되었습니다. 나이스페이로
    문의(1661-0808)하세요.”라는 에러를 리턴합니다. 이 메시지를 받으신 경우 결제창 호출 시 사용한
    파라미터 전문과 함께 포트원으로 문의해 주시길 바랍니다.

### 카드 일반결제 유의사항

| 기능                     | 사용 가능 여부                            |
| ---------------------- | ----------------------------------- |
| 상점 부담 무이자 할부           | 가능                                  |
| 다이렉트 호출                | `단독 사용 불가능(고정 할부 개월수가 함께 전달 되어야 함)` |
| 다이렉트 호출 + 고정 할부 개월수    | 가능                                  |
| 다이렉트 호출 + 리스트 할부 개월수   | `불가능`                               |
| 비 다이렉트 호출 + 고정 할부 개월수  | `PC만 가능`                            |
| 비 다이렉트 호출 + 리스트 할부 개월수 | `PC만 가능`                            |

- 토스뱅크 카드의 경우 카드사 다이렉트 호출 불가능합니다.
  - 나이스페이먼츠의 경우 토스뱅크 카드 다이렉트 호출이 지원되지 않습니다.

- 모바일 환경에서는 다이렉트 호출시에만 할부 옵션 설정이 가능합니다. -나이스페이먼츠의 경우 일반
  카드 결제 시(간편결제 제외) 할부 옵션(고정 할부 개월수)사용이 가능하나 **모바일 환경**에서는
  **카드사 다이렉트 호출할 때만 할부 옵션 사용이 가능합니다.** 만약 모바일 환경에서 다이렉트 호출
  코드 없이 할부 옵션을 전달하는 경우 무시됩니다.

### 계좌이체 일반결제 유의사항

- 계좌이체 다이렉트 호출 시 은행 코드 지정이 불가능합니다.
  - 나이스페이먼츠의 경우 계좌이체 다이렉트 호출을 하더라도 뱅크페이가 호출되오니 이 점 유의하시기 바랍니다.
  - 다이렉트 호출을 원하시는 경우 은행코드 대신 bypass 파라미터인 `DirectShowOpt`를 설정하여 사용하시길 바랍니다.

- 계좌이체 다이렉트 호출 시 현금영수증 정보는 필수 입력해야 합니다.
  - 계좌이체 결제는 현금성 결제로 현금영수증 발급이 가능합니다. 따라서 현금영수증 정보를 필수로
    입력해야 합니다. 만약 입력하지 않을 경우 나이스페이먼츠 계좌이체 다이렉트 호출 시 **현금영수증
    발급 유형은 필수 입력**입니다.라는 에러 메시지가 리턴되며, 결제창이 호출되지 않으니 유의하시기
    바랍니다.

- 계좌이체 에스크로 결제시에는 다이렉트 호출이 불가능합니다.
  - 나이스페이먼츠 정책상 에스크로를 사용한 계좌이체 결제시에는 다이렉트 호출이 불가능합니다. 아래와
    같이 계좌이체 + 에스크로 + 다이렉트 호출을 위한 파라미터를 설정할 경우 "나이스페이 V2 계좌이체
    에스크로 결제시 다이렉트 호출은 불가능합니다."라는 에러 메시지가 리턴되며, 결제창이 호출되지
    않으니 유의하시기 바랍니다.

- 계좌이체 에스크로 결제시 결제창에 올바른 이메일을 입력해야 합니다.
  - 존재하지 않는 이메일을 입력할 경우 **이메일 주소 오류**라는 에러 메시지와 함께 승인 실패됩니다.
    또한 실제로 존재하는 이메일 도메인이더라도 나이스페이먼츠 정책상 유효하지 않다고 취급하는 이메일
    주소((예) <ex@portone.finance>)를 입력한 경우 정상 승인되지만 **이후 에스크로 API를 이용하여 배송
    정보 등록 시 에스크로 구매 확정 이메일이 전송되지 않습니다.**

- 사파리 브라우저의 경우 미지원 대상으로 결제가 원활하지 않습니다.

### 상품권 일반결제 유의사항

- 승인 완료시 나이스페이먼츠로부터 승인번호(`approvalNumber`)가 전달되지 않으니 이 점 유의하시기 바랍니다.
  - 나이스페이먼츠는 상품권 결제시 별도의 승인 번호를 전달하지 않습니다. 따라서 결제 내역 조회시 승인 번호가 null로 리턴됩니다.

### 카카오페이 일반결제 유의사항

| 기능                          | 사용 가능 여부                                       |
| --------------------------- | ---------------------------------------------- |
| 상점 부담 무이자 할부                | `불가능`                                          |
| 카드사 지정 다이렉트 호출              | BC, 국민, 삼성, 신한, 현대, 롯데, 씨티, NH농협 그리고 하나 카드만 가능 |
| 카드사 지정 다이렉트 호출 + 고정 할부 개월수  | BC, 국민, 삼성, 신한, 현대, 롯데, 씨티, NH농협 그리고 하나 카드만 가능 |
| 카드사 지정 다이렉트 호출 + 리스트 할부 개월수 | `불가능`                                          |
| 비 다이렉트 호출 + 고정 할부 개월수       | `불가능`                                          |
| 비 다이렉트 호출 + 리스트 할부 개월수      | `불가능`                                          |

### 네이버페이 일반결제 유의사항

| 기능                          | 사용 가능 여부                                       |
| --------------------------- | ---------------------------------------------- |
| 상점 부담 무이자 할부                | `불가능`                                          |
| 카드사 지정 다이렉트 호출              | BC, 국민, 삼성, 신한, 현대, 롯데, 씨티, NH농협 그리고 하나 카드만 가능 |
| 카드사 지정 다이렉트 호출 + 고정 할부 개월수  | BC, 국민, 삼성, 신한, 현대, 롯데, 씨티, NH농협 그리고 하나 카드만 가능 |
| 카드사 지정 다이렉트 호출 + 리스트 할부 개월수 | 가능(단, `일시불이 항상 포함` 됨)                          |
| 비 다이렉트 호출 + 고정 할부 개월수       | `불가능`                                          |
| 비 다이렉트 호출 + 리스트 할부 개월수      | 가능(단, `일시불이 항상 포함` 됨)                          |

- 네이버페이 머니와 포인트 복합 결제 시, 포인트가 먼저 사용 됩니다.
  - 네이버페이 포인트 결제 시 네이버페이 머니, 포인트 또는 복합(머니와 포인트 함께 사용) 방식으로
    결제가 가능하며, 만약 복합 방식으로 결제할 경우 포인트 금액이 먼저 차감됩니다.

- 네이버페이 포인트 결제 시 현금영수증 정보를 필수 입력해야합니다.
  - 네이버페이 포인트 결제 시 현금영수증 발급이 가능하며 **현금영수증
    정보(`easyPay.cashReceiptType`, `easyPay.customerIdentifier`)를 필수로 입력**해야 합니다. 만약
    입력하지 않을 경우 "나이스페이 V2 네이버페이 포인트 결제시 현금영수증 발급 유형은 필수
    입력입니다."라는 에러 메시지가 리턴되며, 결제창이 호출되지 않으니 유의하시기 바랍니다. 단,
    **네이버페이 머니로 결제할 경우에만 현금영수증이 발급**됩니다. 결제 금액 모두 네이버페이
    포인트로 결제하는 경우에는 결제창 호출 시 현금영수증 정보를 전달하더라도 발급되지 않습니다.

### 페이코 일반결제 유의사항

| 기능                          | 사용 가능 여부 |
| --------------------------- | -------- |
| 상점 부담 무이자 할부                | 가능       |
| 카드사 지정 다이렉트 호출              | 가능       |
| 카드사 지정 다이렉트 호출 + 고정 할부 개월수  | 가능       |
| 카드사 지정 다이렉트 호출 + 리스트 할부 개월수 | 가능       |
| 비 다이렉트 호출 + 고정 할부 개월수       | `불가능`    |
| 비 다이렉트 호출 + 리스트 할부 개월수      | 가능       |

### 삼성페이/11Pay(구.SKPay)/SSGPAY 일반결제 유의사항

| 기능                          | 사용 가능 여부 |
| --------------------------- | -------- |
| 상점 부담 무이자 할부                | 가능       |
| 카드사 지정 다이렉트 호출              | `불가능`    |
| 카드사 지정 다이렉트 호출 + 고정 할부 개월수  | `불가능`    |
| 카드사 지정 다이렉트 호출 + 리스트 할부 개월수 | `불가능`    |
| 비 다이렉트 호출 + 고정 할부 개월수       | `불가능`    |
| 비 다이렉트 호출 + 리스트 할부 개월수      | `불가능`    |

### 애플페이/LPAY 일반결제 유의사항

| 기능                          | 사용 가능 여부 |
| --------------------------- | -------- |
| 상점 부담 무이자 할부                | `불가능`    |
| 카드사 지정 다이렉트 호출              | `불가능`    |
| 카드사 지정 다이렉트 호출 + 고정 할부 개월수  | `불가능`    |
| 카드사 지정 다이렉트 호출 + 리스트 할부 개월수 | `불가능`    |
| 비 다이렉트 호출 + 고정 할부 개월수       | `불가능`    |
| 비 다이렉트 호출 + 리스트 할부 개월수      | `불가능`    |

### SSG페이 계좌 결제 유의사항

- SSG페이 계좌 결제는 현금성 결제로 현금영수증 발급이 가능하므로 **현금영수증
  정보(`easyPay.cashReceiptType`, `easyPay.customerIdentifier`)는 필수 입력**입니다. 만약 입력하지
  않을 경우 "나이스페이 V2 SSGPAY 은행 계좌 결제시 현금영수증 발급 유형은 필수 입력입니다."라는 에러
  메시지가 뜨면서 결제창이 호출되지 않으니 유의하시기 바랍니다.

- SSG페이 계좌 결제 시 주문 번호(`paymentId`)에 특수문자 사용이 불가능합니다.

- SSGPAY 계좌 결제 시 현금영수증 발급 정보를 확인할 수 없습니다.
  - SSGPAY 은행 계좌 결제 시 현금영수증 발급 정보를 입력하여 정상적으로 발급되더라도 승인
    완료(status: paid)시 나이스페이먼츠에서 현금영수증 발급 정보를 전달하지 않아 포트원 API로
    결제/현금영수증 발급 내역 조회 또는 포트원 콘솔에서 현금영수증 내역을 확인할 수 없습니다. 단,
    나이스페이먼츠 어드민에서는 확인이 가능하오니 확인이 필요한 경우 나이스페이먼츠 어드민에서
    확인하시길 바랍니다.

<details>

<summary>파라미터 예시</summary>

```ts
PortOne.requestPayment({
  // ...중략
  payMethod: "EASY_PAY",
  easyPay: {
    easyPayProvider: "SSGPAY",
    availablePayMethods: "TRANSGER",
    cashReceiptType: "PERSONAL",
    customerIdentifier: "01000000000",
  },
});
```

</details>

### 일반결제 현금영수증 유의사항

- SDK 파라미터로 현금영수증 식별 번호를 전달하는 경우 휴대폰 번호만 사용 가능합니다.
  - 계좌이체 다이렉트 호출, 네이버페이 포인트 결제, SSGPAY 계좌 결제 시 현금영수증 정보는 필수
    입력입니다. 단, 휴대폰 번호가 아닌 주민등록번호를 전달한 경우 현금영수증이 정상적으로 발급되지
    않으니 유의하시기 바랍니다.

- 가상계좌 발급 혹은 일반적인 계좌이체(다이렉트 호출하지 않은 경우) 결제 시 현금영수증 파라미터를
  입력에 유의하시기 바랍니다.
  - 결제창을 통한 가상계좌 발급 또는 일반적인 계좌이체(비 다이렉트 호출) 결제 시에는 현금영수증
    정보를 파라미터로 전달할 수 없기(전달하더라도 결제창에 자동 입력되지 않음)때문에 구매자가
    결제창에 직접 현금영수증 정보를 입력해야 합니다. 만약 비 다이렉트 호출 시 현금영수증 정보를
    파라미터로 넘기는 경우 **결제 창 호출에 실패하였습니다. 나이스페이 V2 계좌이체 결제시 현금영수증
    정보는 다이렉트 호출시에만 입력 가능합니다.** 라는 에러메세지와 함께 결제창이 호출되지 않습니다.

### API 지원 기능

나이스페이먼츠는 API를 통해 아래 기능들을 지원합니다.

- 빌링키 발급
- 빌링키 결제
- 수기(키인) 결제
- 예약 결제
- 결제 취소(가상계좌 환불 포함)
- 에스크로 배송 정보 등록, 조회(수정 불가능)
- 가상계좌 발급, 말소
- 포트원 외부 결제 건 현금영수증 발급, 조회, 취소

### 가상계좌 발급 API 유의사항

- 고정식 가상계좌 지원합니다.
  - 나이스페이먼츠의 경우 API를 통한 고정식 가상계좌 사용을 지원합니다. 고정식 가상계좌를 사용하기
    위해서는 `virtualAccount.option.type`를 `FIXED`로 전달해야 합니다. 단, 고정식 가상계좌 및
    과오납체크를 사용하도록 나이스페이먼츠와 사전 협의가 필요합니다.

### 에스크로 API 유의사항

- 배송 정보 등록시 유의할 파라미터
  - 배송자 이름인 `sender.name` 파라미터가 필수 입니다.

  - 배송지 주소인 `receiver.address` 파라미터가 필수입니다.

  - 이메일 전송 여부인 `sendEmail` 파라미터가 필수입니다.
    - 나이스페이먼츠의 경우 다른 PG에서는 지원하지 않는 `sendEmail` 파라미터를 지원합니다.
    - 에스크로 구매 확정시 결제 창에 입력했던 이메일로 해당 사실을 전송할지 여부. (기본값: true | boolean type)

- 배송 정보 수정 불가합니다.
  - 나이스페이먼츠는 API로 에스크로 배송 정보 등록은 가능하지만 **수정은 불가능**합니다.

### 현금영수증 API 유의사항

- 결제창에서 발급 받지 못한 현금영수증은 API로 발급 불가능합니다.
  - 나이스페이먼츠의 경우 현금성 결제(가상계좌, 계좌이체, 네이버페이 포인트 결제 등)시 승인 단계에서
    현금영수증을 발급 요청할 수 있습니다. 이때 결제 승인 단계에서 현금영수증을 발급 요청하지 못한
    경우, 현금영수증 발급 API(`POST /cash-receipts`)를 사용한다고 하더라도 발급이 되지 않으니 참고
    부탁드립니다.

- API로 현금영수증 발급 시, 현금영수증 카드 사용이 불가능합니다.
  - API로 현금영수증 발급(`POST /cash-receipts`)시 발급 받을 현금영수증 정보(현금영수증 발급 유형,
    현금영수증 발행 식별 정보)를 전달해야 합니다. 단, 나이스페이먼츠의 경우 **발행 식별 정보 중
    현금영수증 카드 번호는 사용이 불가능**하오니 참고 부탁드립니다.


# https://developers.portone.io/opi/ko/integration/pg/v2/paypal-v2

---
title: 페이팔
description: 페이팔 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/spb/readme
---

## 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널을 설정해야 합니다.
포트원 V2 결제 모듈을 사용하시려면 페이팔(SPB/RT)로 연동해야 합니다.

<div class="hint" data-style="info">

포트원 V2에서는 페이팔 일반결제의 경우 SPB(Smart Payment Button), 정기결제의 경우 RT(Reference Transaction) 방식만 지원합니다.&#x20;
페이팔은 카드나 계좌 등의 결제수단을 지정하여 결제를 호출할 수 없습니다. (단, 페이팔 계정내에서 사용자가 등록한 결제수단에 따라 카드 혹은 계좌 등을 선택할 수 있습니다.)

</div>

<div class="hint" data-style="info">

페이팔의 경우 다른 결제대행사(PG)의 결제창 호출 방식과 달리 **버튼을 렌더링**한 후 결제를 진행해야 합니다.

</div>

## 주요 파라미터

- 일반결제 시 `uiType`파라미터를 `PAYPAL_SPB`, 빌링키 발급 시 `PAYPAL_RT`로 설정해야 합니다.
  페이팔의 경우 `uiType` 파라미터를 필수로 입력해야 합니다.

- 페이팔의 경우 `payMethod`, `windowType` 파라미터를 생략한 채 호출해도 됩니다.

  - 단, `windowType` 파라미터 지정 시 PC 및 모바일 환경 모두 `UI`로 지정하셔야 하며, 이 외의 값을 입력하는 경우 에러가 리턴됩니다.

## 일반 결제/빌링키 발급 공통 준비 사항

페이팔의 경우 고객사의 화면에 페이팔 결제/빌링키 발급 버튼을 렌더링 한 후, 페이팔의 버튼을 클릭하여 페이팔의 결제/빌링키 발급 창을 호출하는 방식입니다.

페이팔의 버튼을 렌더링 하기 위해, 버튼을 렌더링 할 곳에 클래스명이 `portone-ui-container`인 DOM element를 선언하셔야 합니다.

```html
<!--
  페이팔 버튼을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 DOM element를 넣습니다.
  포트원 SDK는 해당 id를 가지는 element를 찾아 버튼을 렌더링합니다.
-->
<div class="portone-ui-container">
  <!-- 여기에 페이팔 버튼이 생성됩니다. -->
</div>
```

## 일반 결제(`loadPaymentUI`) 호출하기

일반 결제의 경우, 고객사의 결제 화면에 페이팔 결제 버튼을 렌더링 하기위해 `loadPaymentUI` 함수를 사용해야 합니다.

결제 성공 시의 동작을 `onPaymentSuccess` 콜백 함수에, 결제 실패 시의 동작을 `onPaymentFail`에 작성해야 합니다.

```ts
const requestData = {
  uiType: "PAYPAL_SPB",
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceecl",
  channelKey: "channel-key-893597d6-e62d-410f-83f9-119f530b4b11",
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
};
const response = await PortOne.loadPaymentUI(requestData, {
  onPaymentSuccess: (response) => {
    setResult(response);
  },
  onPaymentFail: (error) => {
    alert(error);
  },
});
```

(관련 이미지 첨부)

따라서 다른 PG사와 결제 플로우가 상이하기 때문에 고객사는 **결제(체크아웃) 페이지가 렌더링 되는 시점에**
`PortOne.requestPayment` 함수 대신 **`PortOne.loadPaymentUI`함수를 별도로 호출해 페이팔 결제 버튼을 렌더링**한 후 사용해야 합니다.

(이미지 첨부: 페이팔 일반결제 연동 플로우)

### 결제 요청 데이터 업데이트

페이팔의 결제 플로우에 의하면 고객사의 결제 페이지가 렌더링될 때 결제 요청 데이터가 결정되어야 하고,
결제 페이지 내에서 구매자의 정보(ex. 구매자 이름, 구매자 주소 등)가 새로 입력되거나 혹은 변경되거나,
쿠폰 및 포인트 사용으로 인한 결제 금액에 대해 변경이 발생한 경우 최종적으로 결정된 구매 정보를 기준으로 페이팔 결제버튼을 새로 렌더링 시킨 후 사용하도록 권장하고 있습니다.

하지만 이런 방식으로 사용하는 것은 번거롭기에 포트원에서는 고객사의 편의를 위해 최초 페이팔 결제 버튼을 렌더링 시킨 후 주문 정보가 변경되었을 때,
추가로 결제 버튼 렌더링하지 않고 **결제 요청 데이터를 업데이트**할 수 있는 `PortOne.updateLoadPaymentUIRequest` 함수를 제공하고 있습니다.

구매 정보 변경이 있을 경우 **`PortOne.updateLoadPaymentUIRequest`함수를 호출하여 결제 데이터를 업데이트**하시면
구매자가 페이팔 결제 버튼을 누를 때 최종적으로 변경된 결제 요청 데이터로 페이팔 결제창이 호출됩니다.

```ts title="SDK 일반 결제 요청"
import * as PortOne from "@portone/browser-sdk/v2";
const requestData = {
  uiType: "PAYPAL_SPB",
  orderName: "포트원 페이팔 테스트 결제",
  // ...중략
};
function loadPaymentUI() {
  // loadPaymentUI의 파라미터로 결제 요청 데이터, 결제 프로세스 성공, 실패 시 호출될 "콜백 함수"를 전달해야 합니다.
  PortOne.loadPaymentUI({
    requestData,
    onPaymentSuccess: (response) => {
      // 성공 시 호출되는 콜백 함수 내용
    },
    onPaymentFail: (error) => {
      // 실패 시 호출되는 콜백함수 내용
    },
  });
}

function updateLoadPaymentUIRequest() {
  // 결제 요청 데이터가 변경되면 고객사에서 선언한 updateLoadPaymentUIRequest 함수가 호출됩니다.
  // PortOne.updateLoadPaymentUIRequest가 최종적으로 변경 된 결제 요청 데이터를 전달합니다.
  PortOne.updateLoadPaymentUIRequest(requestData);
}
```

## 빌링키 발급(`loadIssueBillingKeyUI`) 호출하기

빌링키 발급의 경우, 고객사의 빌링키 발급 화면에 페이팔 빌링키 발급 버튼을 렌더링 하기위해 `loadIssueBillingKeyUI` 함수를 사용해야 합니다.

발급 성공 시의 동작을 `onIssueBillingKeySuccess` 콜백 함수에, 발급 실패 시의 동작을 `onIssueBillingKeyFail`에 작성하셔야 합니다.

```ts
const requestData = {
  uiType: "PAYPAL_RT",
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
  channelKey: "channel-key-893597d6-e62d-410f-83f9-119f530b4b11",
  issueId: `issue-id-${crypto.randomUUID()}`,
};
const response = await PortOne.loadIssueBillingKeyUI(requestData, {
  onIssueBillingKeySuccess: (response) => {
    setResult(response);
  },
  onIssueBillingKeyFail: (error) => {
    alert(error);
  },
});
```

(관련 이미지 첨부)

따라서 다른 PG사와 결제 플로우가 상이하기 때문에 고객사는 **결제(체크아웃) 페이지가 렌더링 되는 시점에**
`PortOne.requestIssueBillingKey` 함수 대신 **`PortOne.loadIssueBillingKeyUI`함수를 별도로 호출해
페이팔 빌링키 발급 버튼을 렌더링**한 후 사용해야 합니다.

### 빌링키 발급 요청 데이터 업데이트

페이팔의 결제 플로우에 의하면 고객사의 빌링키 발급 페이지가 렌더링될 때 빌링키 발급 요청 데이터가 결정되어야 하고,
해당 페이지 내에서 구매자의 정보(ex. 구매자 이름, 구매자 주소 등)가 새로 입력되거나 혹은 변경이 발생한 경우
최종적으로 결정된 빌링키 발급 정보를 기준으로 페이팔 빌링키 발급 버튼을 새로 렌더링 시킨 후 사용하도록 권장하고 있습니다.

하지만 이런 방식으로 사용하는 것은 번거롭기에 포트원에서는 고객사의 편의를 위해 최초 페이팔 빌링키 발급 버튼을 렌더링 시킨 후
주문 정보가 변경되었을 때, 추가로 빌링키 발급 버튼을 렌더링하지 않고 **빌링키 발급 요청 데이터를 업데이트**할 수 있는
`PortOne.updateLoadIssueBillingKeyUIRequest` 함수를 제공하고 있습니다.

빌링키 발급 정보 변경이 있을 경우 **`PortOne.updateLoadIssueBillingKeyUIRequest`함수를 호출하여 데이터를 업데이트**하시면
구매자가 페이팔 빌링키 발급 버튼을 누를 때 최종적으로 변경된 데이터로 페이팔 빌링키 발급창이 호출됩니다.

(이미지 첨부: 페이팔 정기결제 빌링키 발급 연동 플로우)

```ts title="SDK 빌링키 발급 요청"
import * as PortOne from "@portone/browser-sdk/v2";
const requestData = {
  uiType: "PAYPAL_RT",
  // ...중략
};
function loadIssueBillingKeyUI() {
  // loadIssueBillingKeyUI 파라미터로 결제 요청 데이터, 결제 프로세스 성공, 실패 시 호출될 "콜백 함수"를 전달해야 합니다.
  PortOne.loadIssueBillingKeyUI({
    requestData,
    onIssueBillingKeySuccess: (response) => {
      // 성공 시 호출되는 콜백 함수 내용
    },
    onIssueBillingKeyFail: (error) => {
      // 실패 시 호출되는 콜백함수 내용
    },
  });
}

function updateLoadIssueBillingKeyUIRequest() {
  // 결제 요청 데이터가 변경되면 고객사에서 선언한 updateLoadIssueBillingKeyUIRequest 함수가 호출됩니다.
  // PortOne.updateLoadIssueBillingKeyUIRequest가 최종적으로 변경 된 결제 요청 데이터를 전달합니다.
  PortOne.updateLoadIssueBillingKeyUIRequest(requestData);
}
```

## 비동기 프로세스 처리하기

결제 승인 및 취소 시 비동기 프로세스가 존재하는 경우 결제 상태를 최종적으로 반영하기 위해서 반드시 **웹훅 연동을 해야**합니다.  \[[→ 웹훅 연동하기 바로가기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)]

### 비동기 상태

1. 결제 요청 후 대기 상태
   페이팔 결제 건은 결제 승인 요청 시 바로 승인 되지 않고 일정 시간이후 처리되는 "승인 대기(pending)" 상태가 존재합니다.
   때문에 트랜잭션 종료 시 콜백 함수로 전달되는 결제 아이디(paymentId)로 결제 내역을 조회하여 status 응답에 따라 후처리 로직을 구현해야 합니다. \[[→ 결제내역 단건조회 API 바로가기](https://developers.portone.io/api/rest-v2/payment#get%20%2Fpayments%2F%7BpaymentId%7D)]

2. 결제 취소 후 대기 상태
   결제 취소 시 취소 승인이 바로 되지 않고 일정 시간이후 취소 승인이 처리되는 경우가 존재합니다.

결제 취소 API를 통해 결제를 취소한 경우 API 응답의 `status` 값을 기준으로 취소 승인 여부를 판단해야 합니다.
취소 승인 대기인 경우 `status` 값이 `REQUESTED`로 응답되며 이후 취소 승인이 완료되면 웹훅이 발송됩니다.

콘솔을 통해 결제를 취소한 경우 취소 승인이 바로 되지 않으면 결제 상태는 변경되지 않고,
콘솔 내 \[결제내역 상세 > 취소요청내역] 탭에서 취소 요청 내역을 확인할 수 있습니다.
이후 취소 승인이 되면, 결제 취소로 상태가 변경됩니다.

<details>

<summary>콘솔 표시 예시</summary>

(이미지 첨부: 결제 취소 후 취소 승인 대기상태)

(이미지 첨부: 결제 취소 후 취소 승인 대기상태일 때 결제내역 상세)

</details>

## 고위험 산업(STC) 안내

페이팔은 판매자 보호 정책을 통해 고객사 거래에서 이상거래나 사기 등 위험 발생 시, 판매자 보호 정책을 통해 고객사의 손해를 보존하는 판매자 보호 프로그램을 가지고 있습니다.
이 판매자 보호 정책을 적용하기 위해서는 페이팔 측에서 제공하는 STC 기능을 사용해야 합니다.

<div class="hint" data-style="warning">

**고위험 산업군(게임과 같은 디지털 상품 또는 중고거래 등)의 경우 페이팔에서 STC API를 통해 판매자 보호 정책을 적용하도록 강력하게 요구하고 있습니다.**
**또한, 고위험 산업군이 아닌 경우에도 STC API를 연동하는 것을 권장하고 있습니다.**

판매자 보호 정책에 관한 자세한 내용 및 협의가 필요한 경우 페이팔에 직접 문의해 주세요.

---

고위험 산업에 해당하는 산업군들은 다음과 같습니다.

1. 이벤트/티켓 판매 산업

2. 연료 산업

3. 게임/디지털 상품 산업

4. 마켓플레이스 사업

5. 온라인 여행 산업(렌터카, 숙박, 여행 패키지, 교통)

6. P2P 산업

7. 소매, 식품 산업

   - **소매, 식품 산업의 경우 다음과 같은 경우에만 STC 연동이 필요합니다.**

     - 모바일 기기를 통해 매장 내 구매가 가능한 산업

   - **다음 산업의 경우에는 STC 연동이 필요하지 않습니다.**

     - 타사 배송업체를 통해 주소로 실물 상품을 배송하는 산업
     - 자체 배송 트럭을 통해 주소로 실물 상품을 배송하는 산업
     - 소비자가 수령할 수 있도록 자체 매장으로 실물 상품을 배송하는 산업

8. 택시, 공유 이동수단 사업

9. 통신사

10. 결제 시스템 보안 서비스 산업

</div>

### 결제 처리

STC 기능을 사용하기 위해 다음 정보를 확인해 주세요.

1. 페이팔 Business 계정 가입 시 선택한 산업 종류(Industry)를 확인해야 합니다.
2. 계정의 산업 종류를 확인한 후, 해당 산업에 맞는 파라미터를 아래와 같은 형식으로 loadUI 호출 시 bypass.paypal\_v2 객체에 추가하여 호출해야 합니다.

<details>

<summary>결제 요청시 STC 적용하기</summary>

```ts
// 해당 파라미터들은 예시로 산업군에 따라 추가 또는 제외 가능한 파라미터들이 있습니다.
_({
  additional_data: [
    {
      key: "sender_account_id", // 고객사 account ID(merchant-id)
      value: "A12345N343",
    },
    {
      key: "sender_first_name", // 고객사의 account에 등록된 구매자의 이름
      value: "John",
    },
    {
      key: "sender_last_name", // 고객사의 account에 등록된 구매자의 이름
      value: "Doe",
    },
    {
      key: "sender_email", // 고객사의 account에 등록된 구매자의 이메일 주소
      value: "example@example.com",
    },
    {
      key: "sender_phone", // 고객사의 account에 등록된 구매자의 연락처
      value: "(02)16705176",
    },
    {
      key: "sender_country_code", // 고객사의 account에 등록된 국가 코드
      value: "KR", // ISO Alpha-2 형식 국가 코드
    },
    {
      key: "sender_create_date", // 고객사의 account에 등록된 국가 코드
      value: "2023-10-10T23:59:59+09:00", // IOS8601 형식
    },
  ],
});
```

</details>

### 산업군 별 파라미터

페이팔에서 지원하는 판매자 보호 정책(Seller Protection Policy) 적용을 위해서, 결제 시에 산업군 별 파라미터를 추가하여 전달해야 합니다.
해당 문서의 파라미터들은 모두 optional이지만, 고위험 거래 처리를 위해 하나 이상의 필드를 추가하여 전달해야 합니다.
페이팔에서는 위험도 분석을 위해, 고객사가 제공할 수 있는 최대한의 데이터를 전달하는 것을 권장하고 있습니다.

모든 파라미터는 String 타입으로 전달해야 합니다. 또한 Format이 작성되어 있지 않은 필드들은 자유 형식으로 작성하여 전달해야 합니다.

<details>

<summary>이벤트/티켓 판매 산업</summary>

| Field Name            | Description                        | Format                                                          |
| --------------------- | ---------------------------------- | --------------------------------------------------------------- |
| sender\_account\_id   | 구매자 계정의 id                         |                                                                 |
| sender\_first\_name   | 구매자의 이름                            |                                                                 |
| sender\_last\_name    | 구매자의 성                             |                                                                 |
| sender\_email         | 구매자의 이메일                           | E.123 - Email Address                                           |
| sender\_phone         | 구매자의 휴대전화 번호                       | E.123 - Telephone Number (national notation)                    |
| sender\_country\_code | 구매자의 국가 코드                         | ISO Alpha-2 Country Code                                        |
| sender\_create\_date  | 구매자의 계정 생성일                        | ISO 8601 date format                                            |
| dg\_delivery\_method  | 발신 방법                              | (`email`, `phone`, `venue_pickup`, `kiosk_pickup`) 중의 하나로 전송해야함 |
| cd\_string\_one       | 여분 필드 1(행사일 등의 정보 입력, 중요도 낮음)      |                                                                 |
| cd\_string\_two       | 여분 필드 2 (행사 카테고리 등의 정보 입력, 중요도 낮음) |                                                                 |
| cd\_int\_one          | 티켓의 수(중요도 낮음)                      |                                                                 |

</details>

<details>

<summary>연료 산업</summary>

| Field Name            | Description  | Format                                       |
| --------------------- | ------------ | -------------------------------------------- |
| sender\_account\_id   | 구매자 계정의 id   |                                              |
| sender\_first\_name   | 구매자의 이름      |                                              |
| sender\_last\_name    | 구매자의 성       |                                              |
| sender\_email         | 구매자의 이메일     | E.123 - Email Address                        |
| sender\_phone         | 구매자의 휴대전화 번호 | E.123 - Telephone Number (national notation) |
| sender\_country\_code | 구매자의 국가 코드   | ISO Alpha-2 Country Code                     |
| sender\_create\_date  | 구매자의 계정 생성일  | ISO 8601 date format                         |

</details>

<details>

<summary>게임/디지털 상품 산업</summary>

| Field Name            | Description  | Format                                       |
| --------------------- | ------------ | -------------------------------------------- |
| sender\_account\_id   | 구매자 계정의 id   |                                              |
| sender\_first\_name   | 구매자의 이름      |                                              |
| sender\_last\_name    | 구매자의 성       |                                              |
| sender\_email         | 구매자의 이메일     | E.123 - Email Address                        |
| sender\_phone         | 구매자의 휴대전화 번호 | E.123 - Telephone Number (national notation) |
| sender\_country\_code | 구매자의 국가 코드   | ISO Alpha-2 Country Code                     |
| sender\_create\_date  | 구매자의 계정 생성일  | ISO 8601 date format                         |

</details>

<details>

<summary>마켓플레이스 산업</summary>

| Field Name                       | Description                                                                                       | Format                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| sender\_account\_id              | 구매자/발신자 계정의 id                                                                                    |                                              |
| sender\_first\_name              | 구매자/발신자의 이름                                                                                       |                                              |
| sender\_last\_name               | 구매자/발신자의 성                                                                                        |                                              |
| sender\_email                    | 구매자/발신자의 이메일                                                                                      | E.123 - Email Address                        |
| sender\_phone                    | 구매자/발신자의 휴대전화 번호                                                                                  | E.123 - Telephone Number (national notation) |
| sender\_address\_zip             | (미국 머천트 한정) 구매자/발신자가 고객사 계정에 등록한 우편번호                                                             |                                              |
| sender\_country\_code            | 구매자/발신자의 국가 코드                                                                                    | ISO Alpha-2 Country Code                     |
| sender\_create\_date             | 구매자/발신자의 계정 생성일                                                                                   | ISO 8601 date format                         |
| sender\_signup\_ip               | 구매자/발신자의 회원 가입 시점의 IP 주소                                                                          | IP(IPv4 / IPv6)                              |
| sender\_popularity\_score        | 구매자/발신자의 신용도 점수                                                                                   | (high, medium, low) 중의 하나                    |
| receiver\_account\_id            | 판매자/수신자 계정의 id                                                                                    |                                              |
| receiver\_create\_date           | 판매자/수신자의 계정 생성일                                                                                   | ISO 8601 date format                         |
| receiver\_email                  | 판매자/수신자의 이메일                                                                                      | E.123 - Email Address                        |
| receiver\_address\_country\_code | 판매자/수신자의 국가 코드                                                                                    | ISO Alpha-2 Country Code                     |
| business\_name                   | 판매자/수신자가 계정에 등록한 사업용 이름                                                                           |                                              |
| recipient\_popularity\_score     | 판매자/수신자의 신용도 점수                                                                                   | (high, medium, low) 중의 하나                    |
| first\_interaction\_date         | 발신자/수신자의 첫 번째 상호작용 날짜. '상호작용'의 정의는 고객사에서 정의합니다. ex)발신자와 수신자 간의 첫 번째 거래 시도, 발신자와 수신자 간의 친구 추가 날짜 등 | ISO 8601 date format                         |
| txn\_count\_total                | 발신자/구매자가 현재까지 고객사에서 진행한 총 거래 횟수(PayPal 또는 기타 결제수단을 통해)                                            | Number                                       |
| transaction\_is\_tangible        | 판매자/수신자의 거래가 유형 거래인지, 무형 거래인지를 나타내는 필드                                                            | 유형 거래인 경우 1, 무형 거래인 경우 0                     |

</details>

<details>

<summary>온라인 여행 산업(렌터카, 숙박, 여행 패키지, 교통)</summary>

| Field Name                | Description                                                   | Format                                       |
| ------------------------- | ------------------------------------------------------------- | -------------------------------------------- |
| sender\_account\_id       | 구매자 계정의 id                                                    |                                              |
| sender\_first\_name       | 구매자의 이름                                                       |                                              |
| sender\_last\_name        | 구매자의 성                                                        |                                              |
| sender\_email             | 구매자의 이메일                                                      | E.123 - Email Address                        |
| sender\_phone             | 구매자의 휴대전화 번호                                                  | E.123 - Telephone Number (national notation) |
| sender\_country\_code     | 구매자의 국가 코드                                                    | ISO Alpha-2 Country Code                     |
| sender\_create\_date      | 구매자의 계정 생성일                                                   | ISO 8601 date format                         |
| ota\_type                 | 여행 산업 종류(숙박인 경우 hotel 등, 교통인 경우 train 등의 종류 입력)               |                                              |
| ota\_service\_start\_date | 서비스 제공 시작일                                                    | ISO 8601 date format                         |
| ota\_service\_end\_date   | 서비스 제공 종료일                                                    | ISO 8601 date format                         |
| ota\_service\_guest\_t\_f | 게스트(서비스를 받는 사람) 변경 가능 여부, 사기범들이 변경 가능 서비스에 비용을 지불하는 경향이 있습니다. | 변경 가능시 1, 아닐시 0                              |
| ota\_start\_country       | 서비스를 시작한 국가 (ex: 차 렌트, 숙박이 예약된 국가)                            | ISO Alpha-2 Country Code                     |
| ota\_start\_city          | 서비스를 시작한 도시                                                   |                                              |
| ota\_start\_zip\_code     | 서비스 시작 장소의 우편 번호                                              |                                              |
| cd\_string\_one           | 여분 필드 1, 여행 산업 - 교통에 해당하는 머천트만 사용, 티켓 종류 입력                   | ISO 8601 date format                         |

</details>

<details>

<summary>P2P 산업</summary>

| Field Name                       | Description  | Format                                       |
| -------------------------------- | ------------ | -------------------------------------------- |
| sender\_account\_id              | 구매자 계정의 id   |                                              |
| sender\_first\_name              | 구매자의 이름      |                                              |
| sender\_last\_name               | 구매자의 성       |                                              |
| sender\_email                    | 구매자의 이메일     | E.123 - Email Address                        |
| sender\_phone                    | 구매자의 휴대전화 번호 | E.123 - Telephone Number (national notation) |
| sender\_country\_code            | 구매자의 국가 코드   | ISO Alpha-2 Country Code                     |
| sender\_create\_date             | 구매자의 계정 생성일  | ISO 8601 date format                         |
| receiver\_account\_id            | 수신자 계정의 id   |                                              |
| receiver\_create\_date           | 수신자의 계정 생성일  | ISO 8601 date format                         |
| receiver\_email                  | 수신자의 이메일     | E.123 - Email Address                        |
| receiver\_address\_country\_code | 수신자의 국가 코드   | ISO Alpha-2 Country Code                     |

</details>

<details>

<summary>소매, 식품 산업</summary>

| Field Name            | Description           | Format                                       |
| --------------------- | --------------------- | -------------------------------------------- |
| sender\_account\_id   | 구매자 계정의 id            |                                              |
| sender\_first\_name   | 구매자의 이름               |                                              |
| sender\_last\_name    | 구매자의 성                |                                              |
| sender\_email         | 구매자의 이메일              | E.123 - Email Address                        |
| sender\_phone         | 구매자의 휴대전화 번호          | E.123 - Telephone Number (national notation) |
| sender\_country\_code | 구매자의 국가 코드            | ISO Alpha-2 Country Code                     |
| sender\_create\_date  | 구매자의 계정 생성일           | ISO 8601 date format                         |
| dg\_delivery\_method  | 발신 방법                 | (`email`, `phone`) 중의 하나로 전송해야함              |
| highrisk\_txn\_flag   | 고객사에서 고위험으로 분류한 상품 여부 | 위험 상품인 경우 1, 아닐 시 0                          |

</details>

<details>

<summary>택시, 공유 이동수단 산업</summary>

| Field Name            | Description                           | Format                                       |
| --------------------- | ------------------------------------- | -------------------------------------------- |
| sender\_account\_id   | 구매자 계정의 id                            |                                              |
| sender\_first\_name   | 구매자의 이름                               |                                              |
| sender\_last\_name    | 구매자의 성                                |                                              |
| sender\_email         | 구매자의 이메일                              | E.123 - Email Address                        |
| sender\_phone         | 구매자의 휴대전화 번호                          | E.123 - Telephone Number (national notation) |
| sender\_address\_zip  | (미국 머천트 한정) 구매자/발신자가 고객사 계정에 등록한 우편번호 |                                              |
| sender\_country\_code | 구매자의 국가 코드                            | ISO Alpha-2 Country Code                     |
| sender\_create\_date  | 구매자의 계정 생성일                           | ISO 8601 date format                         |
| highrisk\_txn\_flag   | 차량 예약과 같은 고객사에서 고위험으로 분류한 결제 건 여부     | 위험 거래인 경우 1, 아닐 시 0                          |
| cd\_string\_one       | 여분 필드 1                               |                                              |

</details>

<details>

<summary>통신사</summary>

| Field Name            | Description  | Format                                       |
| --------------------- | ------------ | -------------------------------------------- |
| sender\_account\_id   | 구매자 계정의 id   |                                              |
| sender\_first\_name   | 구매자의 이름      |                                              |
| sender\_last\_name    | 구매자의 성       |                                              |
| sender\_email         | 구매자의 이메일     | E.123 - Email Address                        |
| sender\_phone         | 구매자의 휴대전화 번호 | E.123 - Telephone Number (national notation) |
| sender\_country\_code | 구매자의 국가 코드   | ISO Alpha-2 Country Code                     |
| sender\_create\_date  | 구매자의 계정 생성일  | ISO 8601 date format                         |

</details>

<details>

<summary>결제 시스템 보안 서비스 산업</summary>

| Field Name            | Description  | Format                                       |
| --------------------- | ------------ | -------------------------------------------- |
| sender\_account\_id   | 구매자 계정의 id   |                                              |
| sender\_first\_name   | 구매자의 이름      |                                              |
| sender\_last\_name    | 구매자의 성       |                                              |
| sender\_email         | 구매자의 이메일     | E.123 - Email Address                        |
| sender\_phone         | 구매자의 휴대전화 번호 | E.123 - Telephone Number (national notation) |
| sender\_country\_code | 구매자의 국가 코드   | ISO Alpha-2 Country Code                     |
| sender\_create\_date  | 구매자의 계정 생성일  | ISO 8601 date format                         |

</details>

<details>

<summary>기타 산업</summary>

| Field Name            | Description  | Format                                       |
| --------------------- | ------------ | -------------------------------------------- |
| sender\_account\_id   | 구매자 계정의 id   |                                              |
| sender\_first\_name   | 구매자의 이름      |                                              |
| sender\_last\_name    | 구매자의 성       |                                              |
| sender\_email         | 구매자의 이메일     | E.123 - Email Address                        |
| sender\_phone         | 구매자의 휴대전화 번호 | E.123 - Telephone Number (national notation) |
| sender\_country\_code | 구매자의 국가 코드   | ISO Alpha-2 Country Code                     |
| sender\_create\_date  | 구매자의 계정 생성일  | ISO 8601 date format                         |
| cd\_string\_one       | 여분 필드 1      |                                              |
| cd\_string\_two       | 여분 필드 2      |                                              |
| cd\_int\_one          | 여분 숫자필드 1    | Number                                       |

</details>

## 사용 가능한 결제수단

결제 수단에 따라 가능한 국가 및 통화가 제한적이오니 자세한 사항은 페이팔에 문의해 주세요.

<details>

<summary>일반 결제수단</summary>

- card

- credit(PayPal Credit (US, UK))

- paylater

  - Pay Later (US): 4개월 무이자 할부 또는 6, 12, 24개월 할부
  - Pay Later (UK): 3개월 무이자 할부 또는 4개월 무이자 할부 + 이후 유이자 할부
  - Pay in 4 (AU): 매 2주마다 4회에 걸쳐 지불
  - 4X PayPal (France): 90일 내 4회에 걸쳐 지불
  - Später Bezahlen (Germany): 3, 6, 12, 24개월 할부 또는 30일 이내 지불
  - Italy: 3개월 할부
  - Spain: 3개월 할부

- bancontact(BE / EUR)

- blik(PL / PLN)

- eps(AT / EUR)

- giropay(DE / EUR)

- ideal(NL / EUR)

- mybank(IT / EUR)

- sepa(DE / EUR)

- p24(PL / PLN, EUR)

- sofort(AT, BE, DE, ES, NL / EUR 또는 GB / GBP)

</details>

<details>

<summary>간편결제수단 (Alternative Methods)</summary>

- Bancontact

  - 구매자: BE / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- BLIK

  - 구매자: PL/ PLN
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- eps

  - 구매자: AT / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- giropay

  - 구매자: DE / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- iDEAL

  - 구매자: IT / EUR

- MyBank

  - 구매자: IT
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- Przelewy24

  - 구매자: PL / PLN, EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- SEPA-Lastschrift

  - 구매자: DE

- SOFORT

  - 구매자

    - AT, BE, DE, ES, NL / EUR
    - GB / GBP

  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

단, **Venmo(US)와 Pay upon Invoice(DE)는 지원하지 않습니다.**

</details>

## 일반결제 유의사항

<details>

<summary>파라미터 사용 시 유의사항</summary>

- orderName: string

  **주문명**

  결제 요청 시 입력한 주문명은 비회원 결제 시에만 결제창에 표기됩니다.

  (이미지 첨부: 예시) 비회원 결제 화면 1)

  (이미지 첨부: 예시) 비회원 결제 화면 2)

  (이미지 첨부: 예시) 회원 결제 화면 1)

  (이미지 첨부: 예시) 회원 결제 화면 2)

- customer.phoneNumber?: string

  **구매자 연락처**

  - 페이팔의 경우 [E164 형식](http://www.itu.int/rec/T-REC-E.164-201011-I/en)으로 입력해야 하며, 입력 된 연락처 정보는 페이팔 비회원으로 결제 시 연락처 정보에 자동 입력됩니다.

    - 예를 들어 한국 구매자의 연락처가 010-1234-5678인 경우 국가번호를 포함하여 821012345678로 입력해야 됩니다.

  - 만약 접속 국가 형식과 맞지 않는 휴대폰 번호를 입력한 경우 자동완성되지 않고 무시되오니 결제창 호출 시 유의하시기 바랍니다.

  (이미지 첨부: 예시) 결제창 내 구매자 연락처 입력 화면)

- products?: object\[]

  **구매 상품 상세 정보**

  - `products.name`(상품명), `products.quantity`(상품 수량), `products.amount`(상품 단위 가격) 정보만 결제창에 표기됩니다.
  - 각 상품의 수량과 단위 가격을 계산했을 때, 총 주문 금액과 **반드시 일치해야**합니다. 일치하지 않는 경우 에러 메시지가 리턴되면서 결제창이 호출되지 않습니다.
  - 예를 들어 17달러인 상품 2개와 23달러인 상품 3개에 대한 구매 상품 정보를 기입한 경우 총 주문금액(`totalAmount`)을 `10300`로 입력해야 결제창이 정상적으로 호출됩니다.
  - 페이팔의 경우 결제 요청 시 **해당 정보를 전달하는 것을 강력하게 권고**하고 있으니 가능한 입력하여 사용하시길 바랍니다.

  ```ts title="예시 코드"
  _({
    //...중략
    products: [
      {
        id: "1666779119262",
        name: "시그니처 핫 초콜릿",
        code: "DRINK_SIGNITURE_HOT_CHOCOLATE",
        amount: 1700,
        quantity: 2,
        tag: "TAG-1",
      },
      {
        id: "1666779134572",
        name: "아이스 아메리카노",
        code: "DRINK_AMERICANO",
        amount: 2300,
        quantity: 3,
        tag: "TAG-2",
      },
    ],
    totalAmount: 10300,
    currency: "USD",
  });
  ```

  (이미지 첨부: 예시) 결제창 내 구매 상품 상세 정보 화면)

  - name: string

    **상품명**

  - amount: number

    **상품 단위 가격**

    - 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.
    - 1000 만큼 원화(KRW) 결제를 하는 경우, scale factor가 0이기 때문에 **1000 \* (10의 0승) = 1000**을 전달해야 합니다.
    - 1.50 만큼 달러(USD) 결제를 하는 경우, scale factor가 2이기 때문에 **1.50 \* (10의 2승) = 150**을 전달해야 합니다.
    - 이렇게 전달 된 값은 실제로 PG사에 결제를 요청할때 currency에 따라 올바른 값으로 변환되기 때문에 반드시 currency값을 필수로 입력해야 합니다.

  - quantity: number

    상품 수량

- currency: string

  **결제 통화**

  페이팔에서 지원하는 통화는 아래 스크린샷을 참고해주세요. 지원하지 않는 통화로 결제 시도시 에러 메시지가 리턴되며 결제창이 호출되지 않습니다. 또한 접속 국가나 결제 수단에 따라 지원하는 통화가 달라질 수 있고, 페이팔의 지원 여부에 따라 결제창 호출이 불가능할 수 있습니다.

  (이미지 첨부: 사용 가능한 결제 통화)

- customer?: object

  **고객 정보**

  - 페이팔 결제창 내에서 비회원으로 결제 시 `customer.firstName`과 `customer.lastName`의 정보가 청구인의 이름과 성으로 자동 입력됩니다. `customer.fullName`으로 결제창을 호출하는 경우 자동입력되지 않으니 유의하시기 바랍니다.
  - 회원으로 결제시에는 **회원 가입시 입력한 이름 정보가 자동으로 입력**되며 결제창 호출 시 입력한 정보로 override 되지 않습니다.

  (관련 이미지 첨부)

  - fullName?: string

    **구매자 전체 이름**

    `fullName`과 `firstName` / `lastName`이 모두 입력된 경우 `fullName`으로 기록됩니다.

  - firstName?: string

    **구매자 이름**

    `firstName`을 입력하는 경우 `lastName`도 필수로 입력해야 합니다. `fullName`이 없고, `firstName`과 `lastName`을 입력한 경우 `{firstName} {lastName}`으로 저장됩니다.

  - lastName?: string

    **구매자 성**

    `lastName`을 입력하는 경우 `firstName`도 필수로 입력해야 합니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - paypal\_v2?: object

    **페이팔에서 제공하는 파라미터 모음**

    - style?: object

      **페이팔 버튼 커스텀마이징**

      페이팔 결제 버튼을 커스텀마이징 할 경우 자세한 내용은 페이팔에서 제공하는 문서([https://developer.paypal.com/sdk/js/reference/#link-style](http://developer.paypal.com/sdk/js/reference/#link-style))를 참고하세요.

      - layout?: string

        **페이팔 버튼 렌더링 방향**

        - `hotizontal` 적용 시 버튼이 최대 2개까지 밖에 렌더링 되지 않습니다. 때문에 페이팔에서는 `layout`을 `horizontal`이 아닌 `vertical`로 설정하도록 권고하고 있습니다.
        - 페이팔 버튼은 기본적으로 vertical(수직)로 렌더링 됩니다.

        ```ts title="예시 코드"
        PortOne.loadPaymentUI(
          {
            //...중략
            bypass: {
              paypal_v2: {
                style: {
                  //...중략
                  layout: "horizontal",
                },
              },
            },
          }, //콜백 함수
        );
        ```

        (이미지 첨부: 예시) vertical style 버튼 표시 화면)

        (이미지 첨부: 예시) horizontal style 버튼 표시 화면)

      - color?: string

        **페이팔 버튼 색상**

        - `gold`, `blue`, `silver`, `white`, `black` 중 선택할 수 있습니다.
        - 기본적으로는 `gold`로 표시됩니다.

      - height?: number

        **페이팔 버튼 크기**

        크기 변경은 25\~55 사이의 값으로만 지정할 수 있습니다.

      - shape?: string

        **페이팔 버튼 모양**

        `rect`(사각 모양)과 `pill`(둥근 모양) 중에 선택할 수 있으며, 기본적으로 `rect` 모양으로 표시됩니다.

      - label?: string

        **페이팔 버튼 라벨**

        - `paypal`, `checkout`, `buynow`, `pay`, `installment` 중 선택할 수 있습니다.
        - 기본적으로 `paypal`로 표시됩니다.
        - `installment`는 결제 국가가 `MX`혹은 `BR`인 경우에만 유효합니다.

      - period?: string

        **페이팔 버튼에 할부 결제 표시**

        `label` 파라미터가 `installment`인 경우 버튼에 표시됩니다.

      - tagline?: boolean

        **페이팔 버튼에 제공되는 추가 설명**

        해당 파라미터를 사용하시기 위해서는 `layout` 파라미터를 `horizontal`로 지정해야 사용하실 수 있습니다.

    - enable-funding?: string

      **렌더링할 페이팔 결제 버튼 지정**

      결제 버튼 종류를 comma(,) separated string으로 지정하여 결제창을 호출하는 경우 해당 버튼을 포함하여 렌더링됩니다.

      ```ts title="예시 코드"
      PortOne.loadPaymentUI(
        {
          // ...중략
          bypass: {
            paypal_v2: {
              "enable-funding": "paylater,card",
            },
          },
        }, //콜백 함수
      );
      ```

      (이미지 첨부: 결제 버튼 종류)

      (이미지 첨부: 예시) 접속 국가: 독일, enable-funding: “paylater” 설정 시 화면)

      (이미지 첨부: 예시) 접속 국가: 이탈리아, enable-funding: “paylater” 설정 시 화면)

      (이미지 첨부: 예시) 접속 국가: 벨기에, enable-funding: “paylater” 설정 시 화면)

    - disable-funding?: string

      **렌더링에서 제외할 페이팔 결제 버튼 지정**

      - 결제 버튼 종류를 comma(,) separated string으로 지정하여 결제창을 호출하는 경우 해당 버튼을 제외하고 렌더링됩니다.
      - 사용 가능한 버튼 종류는 `enable-funding`에서 제공하는 버튼 종류와 동일합니다.

      (이미지 첨부: 예시) 접속 국가: 이탈리아, enable-funding: 'paylater' 설정 시 화면)

      (이미지 첨부: 예시) 접속 국가: 이탈리아, enable-funding: 'paylater', disable-funding: 'mybank' 설정 시 화면)

    - purchase\_units?: object\[]

      **페이팔 주문 상세 정보**

      - 각각의 element에 배송 정보를 담을 수 있습니다.
      - 포트원을 통해 페이팔을 연동하는 고객사는 **`purchase_units`의 길이가 항상 0 또는 1이어야** 합니다.

      * shipping?: object

        **상품 배송지 정보**

        - address?: object

          **상품 수령 주소**

          - 결제창 호출 시 기본적으로 구매자가 페이팔에 가입할 때 입력한 배송주소를 렌더링합니다.
          - `purchase_units\[]`에 입력 된 배송 정보는 결제창에 호출 시 대체로 자동 완성되지만, 페이팔 회원으로 결제할 때와 비회원으로 결제할 때 각각 다른 정책이 적용됩니다.
          - 주문할 때 입력한 주소로 override하고 싶을 때 `purchase_units\[].shipping.address`에 override할 주소를 입력한 후 결제 요청해야 합니다. 단, **주소가 유효하지 않거나 address\_line\_1을 입력하지 않은 경우엔 override가 되지 않을 수 있습니다.**

          <details>

          <summary>예시 1) 페이팔 회원으로 결제 시 `shipping.address` 정보를 입력하지 않은 경우 </summary>

          (이미지 첨부: bypass.paypal\\\_v2.purchase\\\_units\\\[\\].shipping 미입력 → 가입시 설정한 배송 주소로 자동 입력된 화면)

          </details>

          <details>

          <summary>예시 2) 페이팔 회원으로 결제 시 `shipping.address` 정보를 입력한 경우 </summary>

          ```ts
          PortOne.loadPaymentUI(
            {
              bypass: {
                paypal_v2: {
                  // ...중략
                  purchase_units: [
                    {
                      shipping: {
                        address: {
                          // 상품 수령 주소
                          address_line_1: "세종대로 110", // 도로명 주소
                          address_line_2: "서울특별시청", // 아파트 동 호수
                          admin_area_1: "서울특별시", // 주(CA, NY)
                          admin_area_2: "중구", // 시(Los Angeles, New York)
                          postal_code: "04524", // 상품 수령지 우편번호
                          country_code: "KR", // [필수 입력] 상품 수령지 국가 코드
                        },
                        name: {
                          full_name: "홍길동", // 상품 수령인 이름
                        },
                      },
                    },
                  ],
                },
              },
            }, // 콜백 함수
          );
          ```

          (이미지 첨부: bypass.paypal\\\_v2.purchase\\\_units\\\[\\].shipping 입력 → 입력한 배송 주소로 override 된 화면)

          </details>

          <details>

          <summary>예시 3) `shipping.address`의 국가 정보와 구매자의 접속 국가가 일치하지 않은 경우</summary>

          페이팔 결제창에 렌더링 되는 주소 형식은 구매자의 접속 국가에 따라 결정됩니다. 배송 주소의 국가와 구매자의 접속 국가를 다른 경우, 국가 간 주소 체계가 달라 정상적으로 자동입력 되지 않을 수 있습니다.

          (이미지 첨부: 접속 국가 : 미국, payer 및 shipping 정보를 한국 주소 체계로 전달한 화면)

          </details>

          - address\_line\_1: string

            **도로명 주소, ex) `200 N Spring St`**

          - address\_line\_2?: string

            **번지 혹은 건물 호수, ex) `Los Angeles City Hall 1`**

          - admin\_area\_1?: string

            **주와 같은 큰 단위의 주소, ex) `CA`, `NY`**

            - country(UK)
            - state(US)
            - province(Canada)
            - 특별시/광역시/도(Korea)

          - admin\_area\_2?: string

            **도시, 마을 등 중간 단위의 주소, ex) `Los Angeles`**

          - postal\_code?: string

            **우편 번호**

          - country\_code: string

            **국가 코드, ex) `KR`**

    - payer?: object

      **구매자 상세정보**

      - tax\_info?: object

        **구매자 세금 정보**

        - tax\_id?: string

          **구매자 세금 ID**

        - tax\_id\_type?: string

          **구매자 세금 유형**

          브라질(에서 접속한 또는 브라질 계정으로 로그인 한) 구매자인 경우 `bypass.paypal_v2.payer.tax_info` 정보를 필수로 입력해야 합니다.

          ```ts title="예시 코드"
          _({
            tax_info: {
              tax_id: "examplestring",
              tax_id_type: "BR_CPF",
            },
          });
          ```

      - address?: object

        **구매자의 결제 금액 청구지 주소 정보(billing address)**

        페이팔 비회원 결제 시 페이팔 결제창 내 청구지 주소(billing address) 정보로 사용됩니다. 회원으로 결제하는 경우 회원 가입 시 입력한 billing address가 자동 입력되며 해당 파라미터의 정보는 무시됩니다.

        <details>

        <summary>예시 1) 페이팔 회원으로 결제 시 `payer.address` 정보를 입력한 경우</summary>

        입력된 정보는 무시되고 페이팔 가입 시 기입한 구매자의 청구 주소가 자동 입력됩니다.

        ```ts title="예시 코드"
        _({
          bypass: {
            paypal_v2: {
              // ...중략
              payer: {
                address: {
                  address_line_1: "200 N Spring St", // 도로명 주소
                  address_line_2: "Los Angeles City Hall", // 아파트 동 호수
                  admin_area_1: "CA", // 주(CA, NY)
                  admin_area_2: "Los Angeles", // 시(Los Angeles, New York)
                  postal_code: "90012", // 상품 수령지 우편번호
                  country_code: "US", // [필수 입력] 상품 수령지 국가 코드
                },
              },
            },
          },
        });
        ```

        (이미지 첨부: \`payer.address\`입력했음에도 페이팔 가입 시 기입한 정보로 자동 입력된 화면)

        </details>

        <details>

        <summary>예시 2) 페이팔 비회원으로 결제 시 `payer.address` 정보를 입력한 경우</summary>

        입력된 정보가 구매자의 청구 주소지란에 자동 입력됩니다.

        ```ts title="예시 코드"
        _({
          bypass: {
            paypal_v2: {
              // ...중략
              payer: {
                address: {
                  address_line_1: "200 N Spring St", // 도로명 주소
                  address_line_2: "Los Angeles City Hall", // 아파트 동 호수
                  admin_area_1: "CA", // 주(CA, NY)
                  admin_area_2: "Los Angeles", // 시(Los Angeles, New York)
                  postal_code: "90012", // 상품 수령지 우편번호
                  country_code: "US", // [필수 입력] 상품 수령지 국가 코드
                },
              },
            },
          },
        });
        ```

        (이미지 첨부: \`payer.address\`에 입력한 정보로 자동 입력된 화면)

        </details>

        <details>

        <summary>예시 3) 페이팔 비회원으로 결제 시 `payer.address` 정보 미 입력 상태이면서 `shipping.address` 정보를 입력한 경우 </summary>

        구매자의 청구 주소(`bypass.paypal_v2.payer.address`)를 입력하지 않고 배송 주소(`bypass.paypal_v2.pusrchase_units\[].shipping.address`)만 입력한 경우 청구 주소란에 배송 주소가 자동으로 입력됩니다.

        ```ts title="예시 코드"
        _({
          bypass: {
            paypal_v2: {
              // ...중략
              purchase_units: [
                {
                  shipping: {
                    address: {
                      // 상품 수령 주소
                      address_line_1: "세종대로 110", // 도로명 주소
                      address_line_2: "서울특별시청", // 아파트 동 호수
                      admin_area_1: "서울특별시", // 주(CA, NY)
                      admin_area_2: "중구", // 시(Los Angeles, New York)
                      postal_code: "04524", // 상품 수령지 우편번호
                      country_code: "KR", // [필수 입력] 상품 수령지 국가 코드
                    },
                    name: {
                      full_name: "홍길동", // 상품 수령인 이름
                    },
                  },
                },
              ],
            },
          },
        });
        ```

        (이미지 첨부: 예시) 체크박스 선택 시 청구 주소에 shipping 정보가 자동 입력된 화면)

        (이미지 첨부: 예시) 체크박스 선택 해제 시 청구 주소와 배송 주소에 모두 shipping 정보가 자동 입력된 화면)

        </details>

        <details>

        <summary>예시 4) 페이팔 비회원으로 결제 시 `payer.address` 정보와 `shipping.address` 정보를 모두 입력한 경우 </summary>

        구매자의 청구 주소(`bypass.paypal_v2.payer.address`)와 배송 주소(`bypass.paypal_v2.shipping.address`)를 모두 입력한 경우엔, **청구 주소와 동일한 배송주소** 체크박스를 해제했을 때 하단에 렌더링 되는 배송 정보란에 배송 주소가 자동 입력됩니다.

        ```ts title="예시 코드"
        _({
          bypass: {
            paypal_v2: {
              // ...중략
              purchase_units: [
                {
                  shipping: {
                    address: {
                      // 상품 수령 주소
                      address_line_1: "세종대로 110", // 도로명 주소
                      address_line_2: "서울특별시청", // 아파트 동 호수
                      admin_area_1: "서울특별시", // 주(CA, NY)
                      admin_area_2: "중구", // 시(Los Angeles, New York)
                      postal_code: "04524", // 상품 수령지 우편번호
                      country_code: "KR", // [필수 입력] 상품 수령지 국가 코드
                    },
                    name: {
                      full_name: "홍길동", // 상품 수령인 이름
                    },
                  },
                },
              ],
              payer: {
                address: {
                  address_line_1: "고산자로 270", // 도로명 주소
                  address_line_2: "성동구청", // 아파트 동 호수
                  admin_area_1: "서울특별시", // 주(CA, NY)
                  admin_area_2: "성동구", // 시(Los Angeles, New York)
                  postal_code: "04750", // 상품 수령지 우편번호
                  country_code: "KR", // [필수 입력] 상품 수령지 국가 코드
                },
              },
            },
          },
        });
        ```

        (이미지 첨부: 예시) 체크박스 선택 시 청구 주소란에 payer 정보가 자동 입력된 화면)

        (이미지 첨부: 예시) 체크박스 해제 시 payer 정보는 청구 주소란에 shipping 정보는 배송 주소란에 정상적으로 자동 입력된 경우)

        </details>

        <details>

        <summary>예시 5) `payer.address`의 국가 정보와 구매자의 접속 국가가 일치하지 않은 경우 </summary>

        페이팔 결제창에 렌더링 되는 주소 형식은 구매자의 접속 국가에 따라 결정됩니다. 청구 주소의 국가와 구매자의 접속 국가를 다른 경우, 국가 간 주소 체계가 달라 정상적으로 자동입력 되지 않을 수 있습니다.

        (이미지 첨부: 접속 국가 : 미국, \`payer.address\`정보를 한국 주소 체계로 전달한 화면)

        </details>

        - address\_line\_1?: string

          **도로명 주소, ex) `200 N Spring St`**

        - address\_line\_2?: string

          **번지 혹은 건물 호수, ex) `Los Angeles City Hall 1`**

        - admin\_area\_1?: string

          **주와 같은 큰 단위의 주소, ex) `CA`, `NY`**

          - country(UK)
          - state(US)
          - province(Canada)
          - 특별시/광역시/도(Korea)

        - admin\_area\_2?: string

          **도시, 마을 등 중간 단위의 주소, ex) `Los Angeles`**

        - postal\_code?: string

          **우편 번호**

        - country\_code: string

          **국가 코드, ex) `KR`**

</details>

<details>

<summary>미지원 파라미터</summary>

- taxFreeAmount?: number

  **면세 금액**

  페이팔은 면세/복합과세를 지원하지 않기 때문에 taxFreeAmount 입력한 경우 “taxFreeAmount must be 0 in Paypal!”이라는 에러 메시지가 리턴되면서 결제창이 호출되지 않습니다.

- country?: string

  **결제 국가**

  - 페이팔의 경우 실연동 결제 시 **구매자가 접속한 국가에 따라 국가 정보가 자동으로 적용**되어 해당 파라미터로 전달한 국가 정보는 무시됩니다.
  - 예시) `country : US`를 입력하여 결제창을 호출했지만 구매자가 접속한 환경이 “KR(한국)”인 경우 한국에 지원되는 결제 버튼만 렌더링됩니다.
  - 페이팔 sandbox 모드인 경우 입력한 국가 정보로 전달됩니다.

- customer?: object

  **고객 정보**

  - address?: object

    **구매자 주소**

    - 페이팔의 경우 사용되는 주소 체계가 달라 구매자 주소 정보는 `customer.address`이 아닌 **`bypass.paypal_v2.payer.address` 혹은 `bypass.paypal_v2.purchase_units\[].shipping.address`를 사용**해야 합니다.
    - `bypass.paypal_v2.payer.address`, `bypass.paypal_v2.purchase_units\[].shipping.address` 파라미터에 대한 자세한 사항은 **파라미터 사용 시 유의사항** 을 참고하시기 바랍니다.

- redirectUrl?: string

  **리디력션 방식에서 결제 프로세스 완료 후 이동될 고객사 URL**

  페이팔의 경우 PC와 모바일 모두 팝업으로 결제창이 렌더링되기 때문에 결제 프로세스 종료시 콜백 함수가 호촐됩니다. 따라서 redirectUrl 파라미터는 무시됩니다.

- appScheme?: string

  **모바일 결제 후 고객사 앱으로 복귀를 위한 URL scheme**

  페이팔의 경우 외부 앱으로 이동하지 않아 해당 파라미터는 무시됩니다.

- `isEscrow`

  **에스크로 결제 여부**

  페이팔의 경우 에스크로 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

- `locale`

  **결제창 표시 언어**

  페이팔의 경우 구매자가 접속한 환경에 따라 자동 적용되기 때문에 해당 파라미터는 무시됩니다.

- `isCulturalExpense`

  **문화비 지출 여부**

  페이팔의 경우 도서 문화비 항목을 지원하지 않아 해당 파라미터는 무시됩니다.

- offerPeriod?: string

  **서비스 제공 기간**

  페이팔은 결제창 내 제공 기간 정보 노출을 지원하지 않아 해당 파라미터가 무시됩니다.

- storeDetails?: object

  **상점 정보**

  페이팔은 상점 세부 정보를 지원하지 않아 해당 파라미터가 무시됩니다.

- card?: object

  **카드 결제에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 카드 결제 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

- virtualAccount?: object

  **가상계좌 발급에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 가상계좌 발급 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

- transfer?: object

  **계좌이체 결제에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 계좌이체 결제 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

- mobile?: object

  **휴대폰 소액결제에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 휴대폰 소액결제 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

- giftCertificate?: object

  **상품권 결제에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 상품권 결제 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

- easyPay?: object

  **간편결제 결제에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 간편결제 결제 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

</details>

### 일반결제 FAQ

<details>

<summary>모든 결제 건의 결제수단은 `paypal`로 저장되나요?</summary>

페이팔을 통해 카드 결제 외 BanContact, BLIK, eps, giropay 등 다양한 결제 수단으로 결제가 가능하지만 **결제 승인 이후 상세 결제 수단 정보**를 알 수 없기에 `paypal`로 일괄 저장됩니다.

</details>

<details>

<summary>할부 결제 여부와 할부 개월수에 대한 정보는 어디서 확인할 수 있나요?</summary>

페이팔에서 Pay Later를 통해 할부 결제가 가능하지만 **결제 승인 이후 상세 할부 정보**를 알 수 없기에 할부에 대한 정보는 제공하지 않습니다.

</details>

<details>

<summary>접속한 국가에 따라 렌더링 되는 결제 버튼이 달라요.</summary>

페이팔은 **구매자가 접속한 나라에 따라 이용 가능한 결제 수단**이 달라 접속 국가에 따라 렌더링되는 버튼의 종류와 개수가 달라집니다.

(이미지 첨부: 예시 1)

(이미지 첨부: 예시 2)

</details>

<details>

<summary>페이팔 회원과 비회원에 따라 결제 플로우가 달라요.</summary>

페이팔은 기본적으로 구매자가 페이팔에 가입 후 로그인하여 등록된 결제 수단(없다면 새로 등록 또는 카드 정보 직접 입력)으로 결제하는 방식입니다.
다만, 비회원도 결제가 가능하도록 제공하고 있지만 사용 가능한 결제 수단과 렌더링 되는 결제창에 다소 차이가 있습니다.
회원과 비회원간 기능 차이를 간략하게 정리하면 아래와 같습니다.

(관련 이미지 첨부)

</details>

<details>

<summary>Pay Later(할부) 기능을 사용하고 싶어요.</summary>

#### 1. Pay Later 버튼 활성화하기

페이팔의 Pay Later(할부) 결제를 사용하려면 `enable-funding` 파라미터에 `paylater` 입력한 후 호출해야 합니다.
포트원의 경우 Pay Later를 버튼 형태로 제공하고 있으며, 위의 파라미터를 입력하지 않는 시 Pay Later를 지원하는 국가에서 접속하더라도 Pay Later 버튼이 표시되지 않습니다. (단, 미국의 경우 자동으로 표시됩니다.)

```ts
PortOne.loadPaymentUI({
  // ...중략
  bypass: {
    paypal_v2: {
      // ...중략
      "enable-funding": "paylater",
    },
  },
});
```

Pay Later 버튼은 **구매자가 접속한 국가에 따라 다른 버튼이 렌더링** 되며, Pay Later 기능을 제공하지 않는 국가에서 접속한 경우 `enable-funding` 파라미터에 `paylater` 값을 전달하더라도 **Pay Later 버튼이 렌더링되지 않습니다.**

(이미지 첨부: 예시) 벨기에에서 접속 시 버튼이 렌더링 되지 않음)

(이미지 첨부: 예시) 프랑스에서 접속 시 '4X Paypal' 버튼이 렌더링 됨)

(이미지 첨부: 예시) 이탈리아에서 접속 시 'Paga in 3 rate' 버튼이 렌더링 됨)

Pay Later 기능을 지원하는 국가에서 접속하더라도 구매자 계정에 설정된 국가가 Pay Later를 제공하지 않는 국가인 경우, 일반 카드 결제 화면이 렌더링됩니다.

#### 2. Pay Later 사용 국가별 페이팔 계정 생성하기

Pay Later(할부) 기능을 여러 국가에 제공하기 위해서는 **페이팔 머천트 계정을 국가별로 각각 따로 만들어야** 합니다.
예를 들어 고객사이 \[독일], \[스페인], \[이탈리아] 3개 국가에 대해 Pay Later 서비스를 제공하고자 하는 경우 고객사는 \[독일], \[스페인], \[이탈리아]의 **페이팔 머천트 계정을 각각 따로 만들어야** 합니다.

국가별로 생성한 페이팔 Account ID를 \[결제 연동] > \[채널 관리] 페이지에서 채널 등록 후 결제창 호출 시 지정해야 합니다. **고객사는 구매자가 접속한 국가에 따라 올바른 채널의 채널키를 전달해야** 합니다.

#### 3. Pay Later 국가별 정책 알아보기

- US(미국) / USD(달러)

  - Pay in 4

    - Eligible US buyers can pay in four interest-free payments for purchases of $30 to $1,500.
    - USD 30 \~ USD 1,500 결제 시 4개월 무이자 할부 제공

  - Pay Monthly

    - Eligible US buyers can pay in 6, 12, or 24 monthly installments for purchases of $199 to $10,000.
    - USD 199 \~ USD 10,000 결제 시 6, 12, 24개월 (유이자) 할부 중 선택하도록 제공

- AU(호주) / AUD(호주 달러)

  - Pay in 4

    Pay Later in Australia includes Pay in 4, which eligible AU buyers can use to pay in four interest-free payments for purchases of $30 to $2,000 AUD. The first payment is due at the time of the transaction, and subsequent payments are due every two weeks.

    AUD 30 \~ AUD 2,000 결제 시 2주마다 4번에 걸쳐 결제하도록 제공

- GE(독일) / EUR(유로화)

  - PayPal Ratenzahlung

    - Eligible German buyers can pay in 3, 6, 12, or 24 monthly installments for purchases of 99€ to 5,000€.
    - EUR 99 \~ EUR 5,000 결제 시 3, 6, 12, 24개월 (유이자) 할부 중 선택하도록 제공

  - Pay in 30

    - Eligible German buyers can pay within 30 days for purchases of 1€ to 1,000€.
    - EUR 1 \~ EUR 1,000 결제 시 30일 안에 결제되며, 30일 안에 자동으로 결제될 은행 계좌(IBAN, International Bank Account Number) 등록하도록 제공

- ES(스페인) / EUR(유로화)

  - Pay in 3 installments

    - Pay Later in Spain includes Pay in 3 instalments, which eligible buyers in Spain can use to pay in three interest-free payments for purchases of 30€ – 2,000€. The first payment is due at the time of the transaction, and subsequent payments are due every month.
    - EUR 30 \~ EUR 2,000 결제 시 3개월 무이자 할부 제공

- IT(이탈리아) / EUR(유로화)

  - Pay in 3 installments

    - Pay Later in Italy includes Pay in 3 installments, which eligible buyers in Italy can use to pay in three interest-free payments for purchases of 30€ – 2,000€. The first payment is due at the time of the transaction, and subsequent payments are due every month.
    - EUR 30 \~ EUR 2,000 결제 시 3개월 무이자 할부 제공

- FR(프랑스) / EUR(유로화)

  - Pay in 4X

    - Pay Later in France includes Pay in 4X, which is an installment offer that allows consumers to spread the cost of a purchases across four equal payments for transactions between 30€ – 2,000€. The first payment is due at the time of the transaction. The subsequent payments spread across 90 days.
    - EUR 30 \~ EUR 2,000 결제 시 90일동안 4번에 걸쳐 결제하도록 제공 (무이자)

- GB(영국) / GBP(영국 파운드화)

  - Pay in 3

    - Eligible UK buyers can pay in three interest-free payments for purchases of £30 – £2,000.
    - GBP 30 \~ GBP 2,000 결제 시 3개월 무이자 할부 제공

  - PayPal Credit - Eligible UK buyers receive a revolving line of credit that they can use to pay over time. PayPal Credit offers either 0% interest for 4 months on purchases over £99 or a merchant-specific Installment offers. For the 0% interest for 4 months offer, any remaining balance due after the promotional period or any transactions under £99 are charged interest at the standard variable rate. Terms and conditions apply.

    - GBP 99 이상 결제 시 첫 4개월 간 무이자 할부 제공. 4개월 이상 할부 결제 시 5개월째부터는 유이자 할부 적용

</details>

<details>

<summary>간편 결제 수단(Alternative Method) 버튼이 표시되지 않아요.</summary>

기본적으로 `loadPaymentUI` 함수를 호출해 페이팔 결제 버튼을 렌더링하는 경우 구매자가 접속한 국가에 따라 이용 가능한 간편 결제 수단 버튼들이 자동으로 렌더링 됩니다.
하지만 일부 버튼의 경우엔 자동으로 렌더링되지 않는 경우가 있습니다. 원하는 간편 결제 수단 버튼이 표시되지 않는 경우 나라별로 지원 가능한 간편 결제 수단(Alternative Method) 식별자를 `enable-funding` 파라미터에 아래와 같이 comma(,)로 구분하여 string(문자열) 형식으로 요청하면 정상적으로 렌더링됩니다.

💡 예) enable-funding: “paylater,bancontact”

렌더링 할 수 있는 버튼의 종류는 아래와 같습니다.

(관련 이미지 첨부) />

</details>

<details>

<summary>간편 결제 수단(Alternative Method)을 클릭해도 결제가 되지 않아요.</summary>

페이팔은 기본적으로 결제창 호출 시 구매자가 페이팔에 가입할 때 입력한 배송 주소가 자동으로 입력됩니다. 배송 주소를 변경하고자 할 때, 국가 코드(`purchase\_units\[].shipping.address.country\_code`)가 변경하는 경우 변경된 국가 코드에 따라 기존에 선택한 **간편 결제 수단(Alternative Method)이 지원되지 않는 국가인 경우 결제가 불가능**할 수 있습니다.

예를 들어 벨기에(국가코드: BE)에서만 사용 가능한 BanContact로 결제 시, `purchase\_units\[].shipping.address.country\_code`를 BE가 아닌 다른 값으로 변경한 후 BanContact 결제 버튼을 클릭하면 아래와 첨부한 스크린샷과 같이 일반 카드 결제 화면이 렌더링됩니다.

(관련 이미지 첨부)

</details>

### 정기결제 유의사항

<details>

<summary>파라미터 사용 시 유의사항</summary>

- orderName: string

  **주문명**

  빌링키 발급 창 내 “판매자가 보낸 메모” 내용으로 표기됩니다.

  (이미지 첨부: 예시) 빌링키 발급 시 화면)

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - paypal\_v2?: object

    **페이팔에서 제공하는 파라미터 모음**

    ```ts title="예시 코드"
    PortOne.loadPaymentUI(
      {
        bypass: {
          paypal_v2: {
            shipping_address: {
              // 상품 수령 주소
              recipient_name: "홍길동", // 수령인 이름
              line1: "세종대로 110", // 도로명 주소
              line2: "서울특별시청", // 아파트 동 호수
              city: "중구", // 시(Los Angeles, New York)
              state: "서울특별시", // 주(CA, NY)
              postal_code: "04524", // 상품 수령지 우편번호
              country_code: "KR", // [필수 입력] 상품 수령지 국가 코드
            },
          },
        },
      }, // 콜백 함수
    );
    ```

    (이미지 첨부: shipping\_address를 전달하지 않은 경우 구매자 정보로 설정된 화면)

    (이미지 첨부: shipping\_address에 수령인 이름과 배송 정보를 전달한 경우 수령인 이름과 배송 정보가 override된 화면)

    - style?: string

      **페이팔 버튼 커스텀마이징**

      페이팔 버튼을 커스텀마이징 할 경우 자세한 내용은 페이팔에서 제공하는 문서([https://developer.paypal.com/sdk/js/reference/#link-style](http://developer.paypal.com/sdk/js/reference/#link-style))를 참고하세요.

    - layout?: string

      **페이팔 버튼 렌더링 방향**

      - `hotizontal` 적용 시 버튼이 최대 2개까지 밖에 렌더링 되지 않습니다. 때문에 페이팔에서는 `layout`을 `horizontal`이 아닌 `vertical`로 설정하도록 권고하고 있습니다.
      - 페이팔 버튼은 기본적으로 vertical(수직)로 렌더링 됩니다.

      ```ts title="예시 코드"
      PortOne.loadPaymentUI(
        {
          //...중략
          bypass: {
            paypal_v2: {
              style: {
                //...중략
                layout: "horizontal",
              },
            },
          },
        }, //콜백 함수
      );
      ```

      (이미지 첨부: 예시) vertical style 버튼 표시 화면)

      (이미지 첨부: 예시) horizontal style 버튼 표시 화면)

    - color?: string

      **페이팔 버튼 색상**

      - `gold`, `blue`, `silver`, `white`, `black` 중 선택할 수 있습니다.
      - 기본적으로는 `gold`로 표시됩니다.

    - height?: number

      **페이팔 버튼 크기**

      크기 변경은 25\~55 사이의 값으로만 지정할 수 있습니다.

    - shape?: string

      **페이팔 버튼 모양**

      `rect`(사각 모양)과 `pill`(둥근 모양) 중에 선택할 수 있으며, 기본적으로 `rect` 모양으로 표시됩니다.

    - label?: string

      **페이팔 버튼 라벨**

      - `paypal`, `checkout`, `buynow`, `pay`, `installment` 중 선택할 수 있습니다.
      - 기본적으로 `paypal`로 표시됩니다.
      - `installment`는 결제 국가가 `MX`혹은 `BR`인 경우에만 유효합니다.

    - period?: string

      **페이팔 버튼에 할부 결제 표시**

      `label:installment`인 경우 버튼에 표시됩니다.

    - tagline?: boolean

      **페이팔 버튼에 제공되는 추가 설명**

      해당 파라미터를 사용하시기 위해서는 `bypass.paypal_v2.style.layout`을 horizontal로 지정해야 사용하실 수 있습니다.

    - shipping\_address?: object

      **주문 상품의 배송 주소**

      - 배송 정보 중 `line1`, `city` 그리고 `country_code`는 필수 입력해야 합니다. 전달하지
        않을 경우 에러가 리턴되며 빌링키 발급창이 호출되지 않습니다.

      * recipient\_name?: string

        **수령인 이름**

      * line1: string

        **도로명 주소, ex) `200 N Spring St`**

      * line2?: string

        **번지 혹은 건물 호수, ex) `Los Angeles City Hall 1`**

      * city: string

        **도시, 마을 등 중간 단위의 주소, ex) `Los Angeles`**

      * state?: string

        **주와 같은 큰 단위의 주소, ex) `CA`, `NY`**

        - country(UK)
        - state(US)
        - province(Canada)
        - 특별시/광역시/도(Korea)

      * postal\_code?: string

        **우편 번호**

      * country\_code: string

        **국가 코드, ex) `KR`**

        - 페이팔의 경우 빌링키 발급창에 기본적으로 구매자가 페이팔에 가입할 때 입력한 배송 정보가 자동으로 입력됩니다. 만약 이 배송 정보를 override하고 싶다면 `shipping_address` 파라미터에 override할 주소를 입력하고 `shipping_address.recipient_name`에 override할 수령인 이름을 입력하신 후 호출하시면 됩니다.

</details>

<details>

<summary>미지원 파라미터</summary>

- totalAmount?: number

  **총 결제 금액**

  빌링키 발급 시 지원하지 않는 파라미터로 발급 시 무조건 0으로 저장됩니다.

- taxFreeAmount?: number

  **면세 금액**

  페이팔은 면세/복합과세를 지원하지 않기 때문에 해당 파라미터는 지원하지 않습니다.

- country?: string

  **결제 국가**

  - 페이팔의 경우 실연동 결제 시 **구매자가 접속한 국가에 따라 국가 정보가 자동으로 적용**되어 해당 파라미터로 전달한 국가 정보는 무시됩니다.
  - 예시) `country : US`를 입력하여 결제창을 호출했지만 구매자가 접속한 환경이 “KR(한국)”인 경우 한국에 지원되는 결제 버튼만 렌더링됩니다.
  - 페이팔 sandbox 모드인 경우 입력한 국가 정보로 전달됩니다.

- currency?: string

  **결제 통화**

  빌링키 발급 시 결제가 되지 않기 때문에 해당 파라미터는 무시됩니다.

- customer?: object

  **고객 정보**

  - address?: object

    **구매자 주소**

    - 페이팔의 경우 사용되는 주소 체계가 달라 구매자 주소 정보는 `customer.address`이 아닌 **`bypass.paypal_v2.shipping_address`를 사용**해야 합니다.
    - `bypass.paypal_v2.shipping_address` 파라미터에 대한 자세한 사항은 **파라미터 사용 시 유의사항** 을 참고하시기 바랍니다.

- redirectUrl?: string

  **리디력션 방식에서 결제 프로세스 완료 후 이동될 고객사 URL**

  페이팔의 경우 PC와 모바일 모두 팝업으로 빌링키 발급창이 렌더링되기 때문에 프로세스 종료시 콜백 함수가 호촐됩니다. 따라서 redirectUrl 파라미터는 무시됩니다.

- appScheme?: string

  **모바일 결제 후 고객사 앱으로 복귀를 위한 URL scheme**

  페이팔의 경우 외부 앱으로 이동하지 않아 해당 파라미터는 무시됩니다.

- `isEscrow`

  **에스크로 결제 여부**

  페이팔의 경우 에스크로 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

- `locale`

  **결제창 표시 언어**

  페이팔의 경우 구매자가 접속한 환경에 따라 자동 적용되기 때문에 해당 파라미터는 무시됩니다.

- `isCulturalExpense`

  **문화비 지출 여부**

  페이팔의 경우 도서 문화비 항목을 지원하지 않아 해당 파라미터는 무시됩니다.

- offerPeriod?: string

  **서비스 제공 기간**

  페이팔은 결제창 내 제공 기간 정보 노출을 지원하지 않아 해당 파라미터가 무시됩니다.

- storeDetails?: object

  **상점 정보**

  페이팔은 상점 세부 정보를 지원하지 않아 해당 파라미터가 무시됩니다.

</details>

<details>

<summary>미국 테스트 상점 아이디 사용 불가</summary>

페이팔 내부 이슈로 인해 미국 테스트 상점 아이디인 `7WBB3CKT63FRG`을 사용할 수 없습니다.
영국이나 일본 등 다른 테스트 상점 아이디를 통해 테스트가 필요합니다.

</details>

<details>

<summary>**(필독) Risk Data Acquisition 정책**</summary>

페이팔은 이상 거래를 줄이기 위해 Risk Data Acquisition 정책을 시행하고 있습니다.
일반적으로 페이팔 창에서 진행되는 결제나 빌링키 발급은 페이팔이 구매자 접속 정보를 직접 확인하여 이상 거래를 판단합니다.

하지만 발급된 빌링키로 브라우저에서 재결제하는 경우 \[고객사 브라우저]에서 \[포트원 API]를 통해 \[페이팔 API]가 호출되는 구조로 페이팔이 구매자 접속 정보를 직접 확인할 수 없어 이상거래를 판단하기 어렵습니다.
따라서 구매자의 브라우저/디바이스 접속 정보를 페이팔에 전달해야 합니다.
때문에 브라우저에서 발급된 빌링키를 이용하여 결제를 호출하는 경우 **고객사 클라이언트 페이지에 페이팔 Fraudnet 스크립트/Magnes SDK를 반드시 추가해야** 합니다.

<details>

<summary>결제 플로우 알아보기</summary>

브라우저/앱에 페이팔 Fraudnet Script/Magnes SDK를 추가한 후 빌링키 결제 관련 API를 호출했을 때의 플로우는 다음과 같습니다.

(관련 이미지 첨부)

</details>

<details>

<summary>브라우저 내 스크립트 사용 예시</summary>

```html title="코드 예시"
<!-- 고객사 클라이언트 -->
<script
  type="application/json"
  fncls="fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"
>
  {
    "f": "RISK_SESSION_CORRELATION_ID",
    "s": "SOURCE_IDENTIFIER",
    "sandbox": true
  }
</script>
<script type="text/javascript" src="https://c.paypal.com/da/r/fb.js"></script>
<noscript>
  <img
    src="https://c.paypal.com/v1/r/d/b/ns?f=RISK_SESSION_CORRELATION_ID&s=SOURCE_IDENTIFIER&js=0&r=1"
  />
</noscript>
```

- 파라미터 설명

  | 파라미터      | 설명                                                        | 예시                                              |
  | --------- | --------------------------------------------------------- | ----------------------------------------------- |
  | `fncls`   | `fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99`로 항상 고정    | `fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99` |
  | `f`       | 주문번호(`paymentId`) 전달                                      | `paymentId_230980198`                           |
  | `s`       | string (`{페이팔 Account ID}_{페이지 유형}` 형식. 페이지 유형은 아래 목록 참고) | `7WBB3CKT63FRG_checkout-page`                   |
  | `sandbox` | 페이팔 Account ID가 테스트 용인지 운영 용인지 여부                         | `true`                                          |

- 페이지 유형

  - `home-page`
  - `search-result-page`
  - `category-page`
  - `product-detail-page`
  - `cart-page`
  - `inline-cart-page`
  - `checkout-page`

</details>

<details>

<summary>앱 내 스크립트 사용 예시</summary>

- 안드로이드

  [**Android Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/android/) 가이드 문서에 따라 아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야 합니다. 이때 두 번째 파라미터(`paypalClientMetaDataId`)로는 주문번호(`paymentId`)를 전달해야 합니다.

  ```java title="코드 예시"
  MagnesResult magnesResult = MagnesSDK.getInstance()
    .collectAndSubmit(
      context, // Context
      paypalClientMetaDataId, // String
      additionalData // HashMap<String, String>
    )
  ```

- iOS Switft

  [**iOS Swift SDK Integration**](http://developer.paypal.com/limited-release/magnes/integrate/ios-swift/) 가이드 문서에 따라 아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야합니다. 이때 첫번째 파라미터(withPayPalClientMetadataId)로는 주문번호(paymentId)를 전달해야 합니다.

  ```swift title="코드 예시"
  let magnesResult: MagnesResult =
    MagnesSDK.shared().collectAndSubmit(
      withPayPalClientMetadataId: "YOUR-PAYPAL-CLIENT-METADATA-ID",
      withAdditionalData: [String: String]
    )
  ```

- iOS Objective-C

  [**iOS Objective-C SDK Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/ios-objective-c/) 가이드 문서에 따라 아래와 같이 collectAndSubmitWithPayPalClientMetadataId 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야합니다. 이때 첫번째 파라미터(YOUR-PAYPAL-CLIENT-METADATA-ID)로는 주문번호(paymentId)를 전달해주시면 됩니다.

  ```objc title="코드 예시"
  //PPRMOCMagnesSDK *magnesSDK = [PPRMOCMagnesSDK shared];
  PPRMOCMagnesSDKResult *magnesResult =
  [magnesSDK
  collectAndSubmitWithPayPalClientMetadataId:@"YOUR-PAYPAL-CLIENT-METADATA-ID"
  withAdditionalData:@{}];
  ```

</details>

</details>

### 정기결제 FAQ

<details>

<summary>모든 빌링키 발급 건의 결제수단은 paypal로 저장되나요?</summary>

페이팔을 통해 카드 결제 외 BanContact, BLIK, eps, giropay 등 다양한 결제 수단으로 결제가 가능하지만 **빌링키 발급 승인 이후 상세 결제 수단 정보**를 알 수 없기에 paypal로 일괄 저장되며 [빌링키 단건 조회 API](https://developers.portone.io/api/rest-v2/billingKey#get%20%2Fbilling-keys%2F%7BbillingKey%7D)로 조회시 결제수단 상세 정보는 모두 null로 내려갑니다.

</details>


# https://developers.portone.io/opi/ko/integration/pg/v2/readme

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

    - 결제창 일반결제 : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제 / 상품권(컬쳐랜드 / 스마트문상 / 도서문화상품권)
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
    - API 수기(키인)결제 : 카드 / 가상계좌
    - API 정기결제 : 카드
    - 간편결제 허브형 : 카카오페이 / 네이버페이 / 페이코 / SSGPay / LPay / 삼성페이 / 애플페이 / 11Pay

- **KG이니시스**

  - 연동 기능 : 인증결제(결제창) / 비인증결제(API) / 정기결제(결제창/API) / 간편결제(결제창/다이렉트 호출)

  - 결제 수단

    - 결제창 일반결제: 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 결제 / 상품권 결제(컬처랜드/스마트문상/도서문화상품권)
    - API 수기(키인)결제: 카드 / 가상계좌
    - 결제창/API 정기결제: 카드 / 휴대폰
    - 간편결제 허브형: 카카오페이 / 네이버페이 / 토스페이 / 삼성페이 / SSGpay / L.Pay / 애플페이 / 페이코

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

  - 연동 기능 : 인증결제(결제창)

  - 결제 수단

    - 해외결제 일반결제 : 카드 / 유니온페이 / 알리페이 / 위챗페이 / 일본 편의점 결제 등

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


# https://developers.portone.io/opi/ko/integration/pg/v2/smartro-v2

---
title: 스마트로
description: 스마트로 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/smartro-v2/readme
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.
  V2 결제 모듈을 사용하시려면 스마트로(신모듈)로 연동하셔야 합니다.

## 가능한 결제 수단

- **결제창 일반결제**

  `payMethod` 파라미터를 결제수단에 따라 아래와 같이 설정해야 합니다.

  - 신용카드 : `CARD`
  - 실시간 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제 : `MOBILE`
  - 간편 결제 : `EASY_PAY`

- **결제창 빌링키발급**

  `payMethod` 파라미터를 `card`로 설정해야 합니다

- **API 수기(키인) 결제**

  `method` 파라미터를 `virtualAccount`로 설정해야 합니다.

- **API 빌링키 발급**

  `method` 파라미터를 `card`로 설정해야 합니다.

## 공통 유의사항

<details>

<summary>주문 번호(`paymentId`)에 특수문자를 사용할 수 없습니다.</summary>

SDK 및 API를 이용하여 결제 요청시 숫자, 문자(알파벳 소문자와 대문자) 또는 그 조합으로 이루어진 거래 번호를 사용해야 합니다.

</details>

<details>

<summary>주문 번호(`paymentId`)는 최대 40자까지 입력할 수 있습니다.</summary>

스마트로의 경우 `paymentId`는 최대 40자까지 가능하며, 40자가 넘을 경우 40자까지 잘려서 저장됩니다.

</details>

<details>

<summary>결제통화(`currency`) 파라미터가 적용되지 않습니다.</summary>

일반적으로 `currency` 파라미터를 이용하여 결제통화를 지정할 수 있지만 스마트로의 경우 상점아이디 설정에 따라 사용 가능한 통화가 자동으로 결정됩니다. 따라서 결제 요청 시 `currency`를 입력하더라도 적용되지 않습니다.

스마트로의 경우 `KRW`와 `USD`만 지원하며 이 외의 값을 입력하는 경우 에러를 리턴하며 결제가 진행되지 않습니다.

</details>

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey`파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 스마트로 채널 사용을 명시해주세요.

스마트로 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    payMethod: "CARD",
    customer: {
      phoneNumber: "010-0000-1234",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- totalAmount: number

  **결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - 신용카드 : `CARD`
  - 실시간 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제 : `MOBILE`
  - 간편 결제 : `EASY_PAY`

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 고유 ID**

    - 스마트로의 경우 간편결제로 결제 요청시 필수로 입력해야 합니다.
    - 20자 이하로만 입력 가능합니다.

  - phoneNumber?: string

    **구매자 연락처**

    - 스마트로의 경우 결제창 호출 시 필수로 입력합니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - smartro\_v2?: object

    **스마트로에서 제공하는 파라미터 모음**

    - GoodsCnt?: number

      **결제 상품 품목 갯수**

    - SkinColor?: string

      **UI 색상 스타일**

      - 미 설정시 기본으로 `RED`로 적용됩니다.
      - `RED`, `GREEN`, `BLUE`, `PURPLE`를 선택할 수 있습니다.

    - OpenType?: string

      **해외 카드 사용 설정**

      - 국내 카드: `KR`, 해외 카드: `EN`
      - 미 설정시 기본으로 `KR`로 적용됩니다.
      - `EN`으로 설정 시 해외 카드만 결제가 가능합니다.

- 예시 코드

  ```json
  {
    "bypass": {
      "smartro_v2": {
        "GoodsCnt": 2,
        "SkinColor": "BLUE",
        "OpenType": "EN"
      }
    }
  }
  ```

## SDK 빌링키 발급 요청하기

빌링키 발급 요청 시에는 `requestBillingKeyIssue` 함수를 호출해야 합니다.
`channelKey`파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 스마트로 채널 사용을 명시해주세요.

스마트로 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyMethod: "CARD",
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyMethod: string

  **빌링키 발급수단**

  스마트로는 카드 이외 발급 수단은 지원하지 않아 `CARD`로 설정해야 합니다.

- issueId: string

  **빌링키 발급 건 고유 ID**

  - 고객사에서 채번하여 사용해야 합니다.
  - 스마트로의 경우 필수 입력해야 하며, 특수문자는 사용이 불가합니다.

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 고유 ID**

    - 스마트로의 경우 빌링키 발급 시 필수로 입력해야 합니다.
    - 20자 이하로만 입력 가능합니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - smartro\_v2?: object

    **스마트로에서 제공하는 파라미터 모음**

    - SkinColor?: string

      **UI 색상 스타일**

      - 미 설정시 기본으로 `RED`로 적용됩니다.
      - `RED`, `GREEN`, `BLUE`, `PURPLE`를 선택할 수 있습니다.

    - IsPwdPass?: string

      **결제 비밀번호 등록 Skip 여부**

      - 비밀번호 설정 미사용: `Y`, 비밀번호 설정 사용: `N`
      - 미 설정시 기본으로 `N`으로 적용됩니다.

### SDK 연동 유의사항

#### 사전 계약

아래 기능을 사용하시려면 스마트로에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 결제 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답( ex. 결제창에서 에스크로 결제를 했으나 비-에스크로 결제 응답을 받음)을 얻게 될 수 있으니 주의해주시기 바랍니다.

- 간편결제 사용
- 면세 / 복합과세 사용
- 할부 사용
- 상점 부담 무이자 할부 사용
- 카드사 포인트 사용
- 에스크로 사용
- \[TBD] 해외 결제 사용

#### 카드 결제

<details>

<summary>할부 개월수 리스트 제어가 불가능합니다.</summary>

일반적으로 `card.installment.monthOption.availableMonthList` 파라미터를 사용하여 구매자에게 노출할 할부 개월수 리스트를 제어할 수 있으나 **스마트로의 경우 해당 기능을 지원하지 않습니다.**
추가로 상점 아이디에 무이자 할부 설정에 따라 무이자 정보가 자동 표기됩니다.

</details>

<details>

<summary>카드사 다이렉트 호출 시 할부 개월수를 고정해야합니다.</summary>

스마트로의 경우 **카드사 다이렉트 호출 파라미터와 고정 할부 개월수는 항상 같이 사용** 해야 합니다. 하나의 파라미터만 설정하는 경우 에러가 리턴되며 정상적으로 결제가 진행되지 않습니다.

</details>

<details>

<summary>카드사 포인트 사용 여부 파라미터로 제어가 불가능합니다.</summary>

일반적으로 `card.useCardPoint` 파라미터로 카드사 포인트 사용 여부를 설정할 수 있지만 **스마트로는 상점 아이디 설정에 따라 카드사 포인트 사용 여부가 결정**됩니다.

</details>

<details>

<summary> 일부 카드 다이렉트 호출 시 윈도우 환경에서만 가능합니다.</summary>

스마트로의 경우 윈도우 OS에서만 전북 카드(code: `372`)와 카카오뱅크 카드(code: `090`)로 다이렉트 호출이 가능합니다.

</details>

#### 간편 결제

<details>

<summary> 스마트로-네이버페이 결제 시 카드결제만 가능합니다.</summary>

스마트로를 통한 네이버페이를 다이렉트로 호출하여 결제하는 경우 등록된 카드로만 결제가 가능하고 네이버페이 포인트/머니 결제는 불가능합니다.
네이버페이 포인트/머니로 결제를 원하시면 결제창 호출 시 결제수단을 카드로 지정하여 호출한 뒤, 결제를 진행해야합니다.

</details>

#### 가상계좌 결제

<details>

<summary>현금영수증 파라미터 사용 시 다이렉트로 호출해야 합니다.</summary>

기본적으로 결제창을 통하여 현금성 결제수단(실시간 계좌이체, 가상계좌)으로 결제하는 경우 현금영수증을 발급할 수 있으며, 결제창 내에서 현금영수증 정보(현금영수증 발급 유형, 현금영수증 발행 식별 번호)를 입력할 수 있습니다.

스마트로의 경우 결제 요청 시 **`virtualAccount.cashReceiptType`와 `virtualAccount.customerIdentifier`를 이용하여 현금영수증 정보를 사전에 정보를 전달할** 수 있으며, 전달한 정보는 결제창에 자동 입력됩니다. 단, 이 파라미터를 이용하려면 스마트로 정책상 다이렉트로 호출해야 합니다.

예시코드

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    payMethod: "VIRTUAL_ACCOUNT",
    virtualAccount: {
      accountExpiry: {
        dueDate: `2024-11-12T23:59:59+09:00`, // 입금기한은 미래시간만 가능합니다.
      },
      cashReceiptType: `PERSONAL`,
      customerIdentifier: `01088325501`,
      bankCode: `KOOOKMIN_BANK`,
    },
  });
}
```

</details>

#### 휴대폰 소액결제

<details>

<summary>`productType` 파라미터는 필수 입력해야 합니다.</summary>

- 스마트로의 경우 **휴대폰 소액결제시 상품 유형을 구분 짓는 `productType` 파라미터가 필수**로 요구됩니다.
- `productType`의 값은 `PRODUCT_TYPE_REAL` 또는 `PRODUCT_TYPE_DIGITAL`를 입력해야 합니다.
- 상품 유형은 스마트로 상점아이디의 설정과 일치해야 합니다. 일치하지 않는 경우 호출한 결제창 내에 에러가 리턴되며, 결제가 불가능합니다.

</details>

#### 빌링키 발급

<details>

<summary>결제창 빌링키 발급 시 한국어만 지원됩니다.</summary>

스마트로의 경우 결제창 호출 시 한국어 또는 영어로 지원됩니다만 **빌링키 발급**시에는 한국어만 지원합니다.

</details>

<details>

<summary>휴대폰 본인인증 프로세스를 진행해야 빌링키 발급이 가능합니다.</summary>

스마트로의 경우 **빌링키 발급시 휴대폰 본인인증 프로세스**를 진행해야 합니다.
동일 고객에 한하여 휴대폰 본인인증은 최초 1회만 진행하고 있습니다. 따라서 `customerId` 파라미터에 고객을 식별할 수 있는 값을 넣어 사용해야 합니다.
단, 동일한 고객이더라도 `customerId`가 달라지는 경우 휴대폰 프로세스를 다시 진행해야 합니다.

</details>

#### 에스크로 결제

<details>

<summary>에스크로 결제시 카드사/가상계좌 다이렉트 호출 사용이 불가능합니다.</summary>

스마트로는 에스크로 결제시 카드사 다이렉트 호출 및 가상계좌 다이렉트 호출이 불가능합니다. 만약 에스크로 결제시 아래와 같이 다이렉트 호출을 할 경우 에러가 리턴되면서 결제창이 호출되지 않습니다.

예시코드

- V2 에스크로 + 카드사 다이렉트 호출

```ts
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
  channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
  payMethod: "CARD",
  totalAmount: 50000,
  isEscrow: true, // 에스크로 결제
  card: {
    cardCompany: "BC_CARD", // 카드사 다이렉트 호출
    installment: {
      monthOption: {
        fixedMonth: 5,
      },
    },
  },
});
```

- V2 에스크로 + 가상계좌 다이렉트 호출

```ts
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
  channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
  payMethod: "VIRTUAL_ACCOUNT",
  virtualAccount: {
    accountExpiry: {
      dueDate: `2024-11-12T23:59:59+09:00`, // 입금기한은 미래시간만 가능합니다.
    },
  },
  totalAmount: 50000,
  isEscrow: true, // 에스크로 결제
  virtualAccount: {
    bankCode: "SHINHAN_BANK", // 은행 다이렉트 호출
  },
});
```

</details>

<details>

<summary>에스크로 계좌이체 결제시 현금영수증 파라미터 사용이 불가능합니다. </summary>

에스크로 결제 시에는 `cashReceiptType`와 `customerIdentifier` 파라미터를 사용할 수 없습니다. 해당 파라미터를 전달하는 경우 에러가 리턴되면서 결제창이 호출되지 않습니다.

예시코드

- V2 에스크로 + 계좌이체 + 현금영수증 정보 전달

```ts
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
  channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
  totalAmount: 50000,
  payMethod: "TRANSFER", // 계좌이체 결제
  isEscrow: true, // 에스크로 결제
  transfer: {
    // 현금영수증 정보 전달
    cashReceiptType: "CORPORATE",
    customerIdentifier: "1178178260",
  },
});
```

</details>

#### 기타

<details>

<summary>서비스 제공기간(`offerPeriod`) 이용시 시작일(`from`)과 종료일(`to`)를 모두 입력해야 합니다. </summary>

결제창 내 서비스 제공 기간 노출을 원하는 경우 `offerPeriod`를 이용하여 제어할 수 있습니다. 해당 파라미터 이용시에는 `from` 및 `to` 파라미터를 모두 입력해야 결제창에 정상적으로 노출됩니다.

</details>

<details>

<summary>현금영수증 관련 파라미터 사용시 발급 유형( `cashReceiptType`)에 따라 발행 대상 식별 정보(`customerIdentifier`)를 올바르게 입력해야 합니다. </summary>

`cashReceiptType: ANONYMOUS`일 때, `customerIdentifier`에 값을 입력하거나 `cashReceiptType: PERSONAL` 혹은 `cashReceiptType: CORPORATE`일 때, `customerIdentifier`에 값을 입력하지 않으면 에러가 리턴되면서 결제창이 호출되지 않습니다.

</details>

### SDK 결제 FAQ

<details>

<summary>\[테스트연동] 부분취소는 안되나요?</summary>

테스트 모드로 연동한 채널을 이용하여 결제한 체크카드 거래건의 경우 전액 취소만 가능하며 부분취소는 불가능합니다.

</details>

<details>

<summary>\[테스트연동] 국민카드/카카오뱅크카드 사용 시 결제가 자꾸 실패해요.</summary>

테스트 모드로 연동한 채널을 이용하는 경우 국민카드 또는 카카오뱅크로 결제가 불가능합니다. 다른 카드사의 카드로 테스트 해보시길 바랍니다.

</details>

<details>

<summary>\[테스트연동] 카카오페이/페이코 결제 시 결제가 안돼요 </summary>

테스트 모드로 연동한 채널을 이용하여 카카오페이 또는 페이코 결제 시 삼성/현대/농협/신한 카드만 사용이 가능합니다. 이 외의 카드는 결제가 불가능합니다.

</details>

<details>

<summary>\[테스트연동] Kbank로 가상계좌 발급이 불가능해요</summary>

테스트 모드로 연동한 채널을 이용하여 가상계좌 발급 요청시 Kbank, 국민은행, 전북은행, 광주은행, 대구은행 등 일부 은행에서는 발급이 불가능합니다.

</details>

<details>

<summary>\[테스트연동] 카카오페이 결제 시 자동으로 취소가 되나요?</summary>

테스트 모드로 연동한 채널을 이용하여 카카오페이 결제 시 자동취소가 불가능합니다. 테스트 결제 건에 대해 직접 취소처리 하셔야 합니다. 취소는 포트원 콘솔 내 결제내역 혹은 결제 취소 API (POST /payments/{paymentId}/cancel)를 이용하여 취소할 수 있습니다.

</details>

### API 수기(키인)결제 요청하기

수기(키인)로 결제하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/instant`를 이용하여 결제 요청을 해야합니다.
스마트로의 경우 결제수단은 가상계좌 발급만 가능하며, 예시코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 수기(키인) 결제 요청">

```ts
// ... 수기(키인) 결제
const issueResponse = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/instant`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    orderName: "나이키 와플 트레이너 2 SD",
    amount: {
      total: 10000,
    },
    currency: "KRW",
    customer: {
      name: {
        full: "홍길동",
      },
      email: "test@test.com",
      phoneNumber: "010-1234-0000",
    },
    method: {
      virtualAccount: {
        bank: `SHINHAN`,
        expiry: {
          dueDate: `2024-11-12T00:00:00+09+00`, //입금기한은 미래시간만 가능합니다.
        },
        option: `NOMAL`,
        cashReceipt: {
          type: `PERSONAL`,
          customerIdentityNumber: `010-1234-0000`,
        },
        remitteeName: `테스트`,
      },
    },
    productCount: 1,
  },
});
```

</div>

</div>

#### 주요 파라미터

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- method: object

  **결제수단 정보**

  스마트로의 경우 가상계좌만 지원합니다.

  - virtualAccount: object

    **가상계좌 결제 시 파라미터**

    - bank: string

      **발급 은행**

      - 은행코드는 ENUM으로 정의되어 있습니다.
      - [BANK ENUM 바로가기](https://developers.portone.io/api/rest-v2/type-def#Bank)

    - expiry: object

      **입금 만료 기한**

      - validHours?: integer

        **유효 시간**

      - dueDate?: string

        **만료 시점**

        시간은 ISO8601 형식으로 입력해야 합니다.

    - option: object

      **가상계좌 발급 방식**

      - type: string

        **가상계좌 발급 유형**

        발급 유형은 ENUM으로 정의되어 있습니다.

        - 회전식 가상계좌 : `NORMAL`
        - 고정식 가상계좌 : `FIXED`
        - 회전식 가상계좌는 일반적으로 사용되는 방식이며 PG사에서 직접 채번한 가상계좌번호를 사용합니다.

      - fixed?: object

        **고정식 가상계좌 발급 유형**

        - pgAccountId?: string

          **고정식 가상계좌 ID**

          - 고객사가 가상계좌번호를 직접 관리하지 않고 PG사가 pgAccountId에 매핑되는 가상계좌번호를 내려주는 방식입니다.
            동일한 pgAccountId로 가상계좌 발급 요청시에는 항상 같은 가상계좌번호가 내려옵니다.

          - 스마트로의 경우 해당 방식만 지원합니다.

    - cashReceipt?: object

      **현금영수증 정보**

      - type?: string

        **발급 유형**

        발급 유형은 ENUM으로 정의되어 있습니다.

        - 소득공제용 : `PERSONAL`
        - 지출증빙용 : `CORPORATE`
        - 미발행 : `NO_RECEIPT`

      - customerIdentityNumber?: string

        **현금영수증 식별 번호**

        - 소득공제인 경우 주민등록번호 혹은 휴대폰 번호를 입력해야 합니다.
        - 지출증빈인 경우 사업자등록번호를 입력해야 합니다.

    - remitteeName?: string

      **예금주명**

  - customer?: object

    **고객 정보**

    - name?: object

      **고객 이름**

      - full?: string

        **한 줄 이름 형식 (ex. 김포트)**

      - separated?: object

        **분리된 이름**

        - first?: string

          **이름**

        - last?: string

          **성**

    - phoneNumber?: string

      **구매자 연락처**

    - email?: string

      **구매자 이메일**

  - productCount?: integer

    **상품 개수**

### API 빌링키 발급

빌링키를 발급하기 위해서는 `POST /billing-keys`를 이용하여 빌링키 발급 요청을 해야합니다.

예시코드

<div class="tabs-container">

<div class="tabs-content" data-title="API 빌링키 발급 요청">

```ts
const issueResponse = await axios({
  url: "https://api.portone.io/billing-keys",
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
    },
    method: {
      card: {
        credential: {
          number: "1111111111111111",
          expiryMonth: "01",
          expiryYear: "20",
          birthOrBusinessRegistrationNumber: "900101",
          passwordTwoDigits: "00",
        },
      },
    },
  },
});
```

</div>

</div>

#### 빌링키 발급 주요 파라미터

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- method: object

  **결제수단 정보**

  스마트로의 경우 가상계좌만 지원합니다.

  - card?: object

    **카드 결제 시 파라미터**

    - credential?: object

      **인증 관련 정보**

      - number?: string

        **카드 번호**

      - expiryYear?: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth?: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자 등록 번호**

      - passwordTwoDigits: string

        **비밀번호 앞 두자리**

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 고유 ID**

    - 스마트로의 경우 빌링키 발급 시 필수로 입력해야 합니다.
    - 20자 이하로만 입력 가능합니다.

### API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제를 하기 위해 `POST /payments/${PAYMENT_ID_HERE}/billing-key`를 이용하여 결제를 요청합니다.

예시코드

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/billing-key`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
    orderName: "월간 이용권 정기결제",
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      phoneNumber: `010-1234-5678`,
      email: `test@test.com`,
    },
    amount: {
      total: 10000,
    },
    currency: "KRW",
    productCount: 1,
  },
});
```

</div>

</div>

#### 빌링키 단건 결제 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- billingKey: string

  **빌링키 결제에 사용할 빌링키**

- orderName: string

  **주문명**

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- customer?: object

  **고객 정보**

  - name: object

    **고객 이름**

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first?: string

        **이름**

      - last?: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

  - email: string

    **구매자 이메일**

- productCount?: integer

  **상품 개수**

### API 빌링키 예약/반복 결제

예약 결제를 하기위해서는 `POST /payments/${PAYMENT_ID_HERE}/schedule` 를 이용하여 결제를 예약합니다.

예시코드

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/schedule`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    payment: {
      billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
      orderName: "월간 이용권 정기결제",
      customer: {
        id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      },
      amount: {
        total: 10000,
      },
      currency: "KRW",
    },
    timeToPay: "2023-01-01 00:00:00", // 결제를 시도할 시각
  },
});
```

</div>

</div>

#### 빌링키 예약 결제 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- payment: object

  **빌링키 결제 요청 입력정보**

  - billingKey: string

    **빌링키 결제에 사용할 빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **결제 금액**

    - total: number

      **총 결제 금액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - currency: string

    **결제 통화**

    결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- timeToPay: string

  **결제 예정 시점**


# https://developers.portone.io/opi/ko/integration/pg/v2/tosspay-v2

---
title: 토스페이
description: 토스페이 간편결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/tosspay-v2/readme
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 가능한 결제 수단

- **결제창 일반 결제**

  `payMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 간편결제 : `EASY_PAY`

- **결제창 빌링키 발급**

  `billingKeyMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 간편결제 : `EASY_PAY`

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키를 지정하여 토스페이 채널 사용을 명시해주세요.

토스페이 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="SDK 결제 요청"
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${Math.random().toString(36).slice(2)}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    payMethod: "EASY_PAY",
  });
}
```

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- totalAmount: number

  **결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  간편 결제의 경우 `EASY_PAY`로 입력해야 합니다.

- bypass?: object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - tosspay\_v2?: object

    **토스페이에서 제공하는 파라미터**

    - expiredTime?: string

      **결제 만료 기한**

      `yyyy-MM-dd HH:mm:ss` 의 형식으로 입력해야 합니다.

      입력하지 않을 경우, 기본값인 15분으로 설정됩니다. 최대 60분까지 설정할 수 있습니다.

    - cashReceiptTradeOption?: string

      **현금영수증 발급 대상 타입**

      전달하지 않을경우, 기본값은 GENERAL 입니다.

      일반 (default) : `GENERAL` / 문화비 : `CULTURE` / 교통비 : `PUBLIC_TP`

### 유의사항

#### 공통

<details>

<summary>매출전표 지원 안내</summary>

카드결제인 경우에만 매출전표가 제공됩니다.

</details>

<details>

<summary>현금영수증 발급 안내</summary>

토스페이의 경우, 현금영수증 발급에 대한 정보를 따로 입력받지 않고 앱에 저장된 식별정보로 현금영수증이 발급됩니다.

이 때문에 현금영수증 타입을 personal, corporate로 지정하더라도 실제로는 다른 타입의 현금영수증이 발급될 수 있습니다.

</details>

## SDK 빌링키 발급 요청하기

빌링키 발급 요청 시에는 `requestIssueBillingKey` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키를 지정하여 토스페이 채널 사용을 명시해주세요.

토스페이 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="SDK 빌링키 발급 요청"
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyMethod: "EASY_PAY",
    issueId: "test-issueId",
    issueName: "test-issueName",
    customer: {
      customerId: "uniqueCustomerId",
    },
    redirectUrl: "http://localhost",
  });
}
```

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyMethod: string

  **빌링키 발급수단**

  토스페이는 빌링키 발급 수단으로 간편결제(토스페이)만을 지원하므로 해당 파라미터는 `EASY_PAY`로 고정해야 합니다.

- customer?: object

  **고객 정보**

  - customerId?: string

    **구매자 고유 ID**

    - 토스페이의 경우 구매자 ID를 필수로 입력해야 합니다.

- redirectUrl: string

  **빌링키 발급 후 이동할 URL**

  모바일 환경의 경우, 필수 입력입니다.

### 유의사항

<details>

<summary>빌링키 발급 웹훅 연동 안내</summary>

토스페이 빌링키 발급시 빌링키 발급 웹훅을 반드시 연동하는 것이 좋습니다.

콘솔에서 웹훅 URL을 설정하거나, `requestIssueBillingKey` 함수 파라미터 중 noticeUrls를 입력하여 웹훅을 전달받을 수 있습니다.

만약 웹훅을 연동하지 않은 경우, 엔드유저가 빌링키 발급 도중 팝업이나 브라우저를 끄는 행위등으로 인해 고객사의 SDK 콜백 코드가 실행되지 않아 실제로 빌링키가 발급됐으나 발급정보가 누락될 수 있습니다.

[웹훅 연동 가이드 바로가기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)

</details>

<details>

<summary>빌링키 업데이트 웹훅 연동 안내</summary>

빌링키가 발급된후에 토스페이앱에서 엔드유저가 직접 빌링키에 연결된 결제수단을 변경할 수 있습니다.

콘솔에 웹훅 URL을 설정해 둔 경우라면 이 때 빌링키 업데이트 웹훅이 전송됩니다.

만약 빌링키에 연결된 결제수단을 서비스 내부적으로 사용하고 있다면, 빌링키 업데이트 웹훅을 연동하시거나 정보를 표시하기 전 포트원의 빌링키 정보 조회 API를 호출하여 데이터를 최신화하기를 권장합니다.

[웹훅 연동 가이드 바로가기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)

</details>

## API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제를 진행하려면 `POST /payments/${PAYMENT_ID_HERE}/billing-key` API를 이용하여 결제를 요청하실 수 있습니다.

토스페이 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="API 빌링키 단건 결제"
const response = await axios({
  url: `https://api.portone.io/payments/${encodeURIComponent(PAYMENT_ID_HERE)}/billing-key`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
    orderName: "월간 이용권 정기결제",
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      phoneNumber: `010-1234-5678`,
      email: `test@test.com`,
    },
    amount: {
      total: 50000,
      taxFree: 3000,
    },
    currency: "KRW",
  },
});
```

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- billingKey: string

  **빌링키 결제에 사용할 빌링키**

- orderName: string

  **주문명**

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- customer?: object

  **고객 정보**

  - name?: object

    **고객 이름**

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first?: string

        **이름**

      - last?: string

        **성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

## API 빌링키 예약/반복 결제 요청하기

예약 결제를 진행하려면 `POST /payments/${PAYMENT_ID_HERE}/schedule` API를 이용하여 결제를 예약하실 수 있습니다.

토스페이 기준으로 작성한 예시 코드는 아래와 같습니다.

```typescript title="API 예약/반복 결제"
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/schedule`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    payment: {
      billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
      orderName: "월간 이용권 정기결제",
      customer: {
        id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      },
      amount: {
        total: 10000,
        taxFree: 3000,
      },
      currency: "KRW",
    },
    timeToPay: "2023-01-01 00:00:00", // 결제를 시도할 시각이며 미래 시각만 가능합니다.
  },
});
```

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- payment: object

  **빌링키 결제 요청 입력정보**

  - billingKey: string

    **빌링키 결제에 사용할 빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **결제 금액**

    - total: number

      **총 결제 금액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

    - taxFree?: number

      **면세액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - currency: string

    **결제 통화**

    결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- timeToPay: string

  **결제 예정 시점**

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    - 토스페이의 경우 full 혹은 separated를 필수로 입력해야 합니다.

      - full?: string

        **한 줄 이름 형식 (ex. 김포트)**

      - separated?: object

        **분리된 이름**

        - first?: string

          **이름**

        - last?: string

          **성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**


# https://developers.portone.io/opi/ko/integration/pg/v2/tosspayments

---
title: 토스페이먼츠
description: 토스페이먼츠 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/newtoss/readme
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.
- V2 결제 모듈을 사용하시려면 토스페이먼츠(신모듈)로 연동하셔야 합니다.

(관련 이미지 첨부)

## 가능한 결제수단

- **일반 결제**
  - `payMethod`파라미터를 결제수단에 따라 아래와 같이 설정해야 합니다.
    - 신용카드 : `CARD`
    - 실시간 계좌이체 : `TRANSFER`
    - 가상계좌 : `VIRTUAL_ACCOUNT`
    - 휴대폰 소액결제 : `MOBILE`
    - 간편 결제 : `EASY_PAY`
    - 상품권 결제 : `GIFT_CERTIFICATE`

- **빌링키 발급**
  - `billingKeyMethod`(빌링키 발급) 파라미터를 `CARD`로 설정해야 합니다.

## SDK 결제 및 빌링키 발급 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출하고, 빌링키 발급 시에는 `requestIssueBillingKey` 함수를 호출해야합니다.
`channelKey` 파라미터에 결제 채널 연동 시 입력한 채널 키를 지정하여 토스페이먼츠 연동임을 명시해주세요.
만약 `channelKey`가 입력되지 않는 경우 `pgProvider` 파라미터에 입력된 값에 따라 결제 및 빌링키 발급 창이 호출됩니다.

토스페이먼츠 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    paymentId: `payment-{${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    payMethod: "CARD",
  });
}
```

</div>

<div class="tabs-content" data-title="SDK 빌링키 발급 요청">

```ts
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyMethod: "CARD",
  });
}
```

</div>

</div>

## API 빌링키 발급 및 예약/반복 결제 요청하기

빌링키를 발급하기 위해서는 `POST /billing-keys`를 이용하여 빌링키 발급 요청을 해야합니다. 이후
발급된 빌링키로 예약/반복 결제를 하기위해 `POST /payments/${PAYMENT_ID_HERE}/schedules` 를 이용하여
결제를 예약합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 빌링키 발급 요청">

```ts
// ... 빌링키 발급
const issueResponse = await axios({
  url: `https://api.portone.io/billing-keys`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey,
    customer: {
      id: customerId,
    },
    method: {
      card: {
        credential: {
          number: cardNumber,
          expiryYear,
          expiryMonth,
          birthOrBusinessRegistrationNumber,
          passwordTwoDigits,
        },
      },
    },
  },
});
```

</div>

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
async function schedulePayment() {
  // 포트원 결제 예약 API 호출
  const response = await axios({
    url: `https://api.portone.io/payments/${encodeURIComponent(PAYMENT_ID_HERE)}/schedules`,
    method: "post",
    headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
    data: {
      payment: {
        billingKey: BILLING_KEY_HERE,
        orderName: "월간 이용권 정기결제",
        customer: {
          id: CUSTOMER_ID_HERE,
          // 고객 정보가 필요한 경우 API 명세에 따라 추가해주세요.
        },
        amount: {
          total: 8900,
        },
        currency: "KRW",
      },
      timeToPay: "2023-08-24T14:15:22Z", // 결제를 시도할 시각
    },
  });
  // 결제 예약 이후 로직을 구성해주세요.
}
```

</div>

</div>

## 주요 파라미터

- storeId: string

  고객사의 상점을 식별하는 고유한 값입니다.

- paymentId: string

  고객사가 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- orderName: string

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  콘솔의 결제 연동 메뉴에 표시되는 채널 키를 입력해야 합니다.

- totalAmount: number

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  결제통화로 원화 결제를 원할 시 `KRW`로 입력해야 합니다.

- payMethod: string

  결제수단을 구분하는 코드로 원하는 결제수단 값을 입력해야 합니다.

## 유의할 파라미터 - SDK

### 결제/빌링키 발급 공통

- `windowType`

  - 토스페이먼츠의 경우 PC는 `IFRAME`, mobile은 `REDIRECTION`만 지원되며 이외의 다른 방식으로 결제창을 호출할 경우 에러를 리턴합니다.

  - `windowType` 파라미터를 채우지 않을 경우 자동으로 아래와 같이 세팅됩니다.

    ```json
    {
      "pc": "IFRAME",
      "mobile": "REDIRECTION"
    }
    ```

- `locale`
  - 토스페이먼츠의 경우 `KO_KR`만 지원합니다. 이외의 값을 넣어도 무시됩니다.

- `redirectUrl`
  - 모바일 환경에서 결제 요청 시 `REDIRECTION` 타입이므로, 필수로 입력해야 합니다.

### 결제 (`requestPayment`)

- `easyPay`
  - `easyPayProvider`
    - 간편결제 결제 요청 시, 사용하고자 하는 간편 결제사에 따라 아래 목록을 참고하여 `easyPayProvider` 파라미터를 입력해야 합니다.
      - 페이코 : `PAYCO`
      - 삼성페이 : `SAMSUNGPAY`
      - SSG페이 : `SSGPAY`
      - 카카오페이 : `KAKAOPAY`
      - 네이버페이 : `NAVERPAY`
      - L페이 : `LPAY`
      - 토스페이 : `TOSSPAY`
      - 애플페이 : `APPLEPAY`

- `giftCertificate`
  - `giftCertificateType`

  - 상품권 결제 요청 시, 사용하고자 하는 상품권 종류에 따라 아래 목록을 참고하여 `giftCertificateType` 파라미터를 입력해야 합니다.
    - 도서문화상품권 : `BOOKNLIFE`
    - 스마트문상 ((구)게임문화상품권) : `SMART_MUNSANG`
    - 문화상품권 : `CULTURELAND`

- `paymentId`
  - 토스페이먼츠를 사용하는 경우 영문 대소문자, 숫자, 특수문자(-,\_)만 허용되며, 6자 이상 64자 이하만 가능합니다.

- `currency`
  - 토스페이먼츠의 경우 원화 결제만 지원하므로 `KRW` 이외의 값을 넣으면 에러를 리턴합니다.

- `isCulturalExpense`
  - 문화비(도서, 공연, 박물관 등) 지출 여부를 구분하고자 할 때 파라미터를 입력하여 사용할 수 있습니다.

- `bypass`

  - 토스페이먼츠에서는 아래의 파라미터를 지원합니다.

  - `tosspayments`

    - `discountCode`

      - 토스페이먼츠와 고객사 간의 계약에 따라 프로모션을 적용할 수 있습니다.

      ```json
      {
        "tosspayments": {
          "discountCode": "즉시 할인 코드(카드사 고유 번호)"
        }
      }
      ```

    - `useInternationalCardOnly`

      - 해외 카드로만 결제가 가능하도록 설정할 수 있습니다.

      ```json
      {
        "tosspayments": {
          "useInternationalCardOnly": true
        }
      }
      ```

### 빌링키 발급 (`requestIssueBillingKey`)

- 없음

## 연동 유의사항

### 토스페이먼츠와 사전 계약이 필요한 경우

아래의 기능을 사용하려면 사전 신청을 통해 토스페이먼츠와 계약을 완료해야 합니다.

계약을 하지 않은 경우에 해당 기능을 이용하여 결제 시 결제 승인에 실패하거나, 승인에 성공하더라도 의도한 바와 다른 응답을 받을 수 있습니다.
(ex. 에스크로 결제를 요청하여 결제를 진행하였으나 비-에스크로 결제 응답을 받는 경우)

- 휴대폰 소액결제
- 간편결제
- 상품권 결제
- 면세 / 복합과세
- 신용카드 할부
- 상점 분담 무이자 할부
- 카드사 포인트 사용
- 에스크로

### 카드 결제

- `card.useAppCardOnly` 파라미터는 일부 카드사에 대해서만 적용 가능합니다.
  - 지원 가능한 카드 : 국민, 농협, 롯데, 삼성, 신한, 현대, 우리, 하나
  - 지원 불가능한 카드 : 씨티

- `card.installment.monthOption.availableMonthList` 파라미터의 경우 다른 PG사들과 다르게 동작합니다.

  - 해당 파라미터로 결제창에 랜더링 될 할부 리스트를 제어할 수 있습니다. 다른 PG사의 경우 전달한
    값만 랜더링 되지만, 토스페이먼츠의 경우에는 토스페이먼츠 자체 정책에 따라 **일시불 \~ 전달한 값
    중 최대값까지 모두** 랜더링됩니다.

  <details>

  <summary>파라미터 사용 예시 </summary>

  - 예1. 일시불만 허용하고 싶은 경우 (토스페이먼츠 가능)

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [0]
          }
        }
      }
    }
    ```

    - 예2. 5개월만 허용하고 싶은 경우 (토스페이먼츠 불가능)

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [5]
          }
        }
      }
    }
    ```

    - 예3. 다른 PG사 호출 시 일시불\~5개월까지 허용하고 싶은 경우

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [0, 1, 2, 3, 4, 5]
          }
        }
      }
    }
    ```

    - 예4. 토스페이먼츠 호출 시 일시불\~5개월까지 허용하고 싶은 경우

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [0, 1, 2, 3, 4, 5] // [5], [3,5] 로 입력해도 됨
          }
        }
      }
    }
    ```

    - 예5. 토스페이먼츠 호출 시 3개월과 5개월까지 허용하고 싶은 경우 -> 불가능

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [0, 1, 2, 3, 4, 5] // [5], [3,5] 로 입력해도 됨
          }
        }
      }
    }
    ```

    - 예6. 다른 PG사 호출 시 3개월과 5개월까지 허용하고 싶은 경우

    ```json
    {
      "card": {
        "installment": {
          "monthOption": {
            "availableMonthList": [3, 5]
          }
        }
      }
    }
    ```

  </details>

- 무이자 할부가 적용 되어도 ISP 계열 카드로 결제시에는 `무이자` 표기가 되지 않습니다. 고객사은
  토스페이먼츠와 사전 계약 또는 카드사 정책에 따라 무이자 할부 기능을 사용할 수 있습니다. 이에 따라
  결제창 내에서 각 카드사별 최대 무이자 할부 개우러수에 따라 할부 개월수 옆에 `무이자` 또는 `무`라고
  표기됩니다.

  <details>

  <summary> 예시 </summary>

  - 예1. 삼성카드 - 최대 3개월 무이자 할부 적용 -> 3개월까지 `무` 표기

    (관련 이미지 첨부)

  - 예2. BC카드 - 최대 12개월 무이자 할부 적용 -> 표기되지 않음 -> 실제 결제 승인 시 무이자 할부 적용 됩니다. 이는 ISP 계열 카드사 결제 시 사용되는 페이북 앱 특성에 따른 것으로 실제 결제 승인시에는 정상적으로 무이자 할부가 적용됩니다.

    (관련 이미지 첨부)

  </details>

- ISP 계열 카드 및 간편결제의 경우 해당 앱 내에서 할부 기간 선택이 가능합니다.
  - 간편결제의 경우 모바일 웹에서 결제 요청 시 토스페이먼츠 결제창 내에서의 할부기간 선택은 불가능하며, 간편결제 앱 내에서 할부 선택이 가능합니다.
  - ISP 계열 카드의 경우 PC 웹에서 결제 요청 시 토스페이먼츠 결제창 내에서의 할부기간 선택은 불가능하며, ISP 앱 내에서 할부 선택이 가능합니다.

- 카카오페이의 경우 카카오페이 정책 상 13개월 이상 할부 결제를 지원하지 않기 때문에, 카카오페이로 결제 요청 시에는 최대 12개월까지만 할부 결제가 가능합니다.

### 가상계좌

- 토스페이먼츠를 통한 가상계좌는
  경남은행, 광주은행, KB국민은행, IBK기업은행, NH농협은행, DGB대구은행,
  부산은행, 새마을금고, Sh수협은행, 신한은행, 우리은행, 우체국예금보험, 하나은행에서 발급받을 수 있습니다.

### 카드사 다이렉트 호출

- 토스페이먼츠의 경우 카드사 다이렉트 (`card.cardCompany`) 호출 시 할부 결제를 하려면 고정 할부
  개월수 (`card.installment.monthOption.fixedMonth`)를 입력한 후 요청해야합니다. 만약, `fixedMonth`
  값을 전달하지 않는 경우에는 무조건 **일시불**로 결제가 됩니다.

  - 카드사 다이렉트 호출 기능을 사용하고자 한다면 자체적으로 구매자가 할부 개월 수를 선택할 수 있는 UI/UX를 구현한 뒤 결제 요청 시 해당 값을 함께 요청해주셔야 합니다.

  <details>

  <summary> 예시 </summary>

  - 예1. 현대카드 다이렉트 호출 후 결제 시 일시불로 결제됩니다.

    ```json
    {
      // ... 기타 파라미터
      "card": {
        "cardCompany": "HYUNDAI_CARD"
      }
    }
    ```

    - 예2. 삼성카드 다이렉트 호출 후 결제 시 5개월 할부로 결제 됩니다.

    ```json
    {
      // ... 기타 파라미터
      "card": {
        "cardCompany": "SAMSUNG_CARD",
        "installment": {
          "monthOption": {
            "fixedMonth": 5
          }
        }
      }
    }
    ```

  </details>

- 고정 할부 개월수 (`card.installment.monthOption.fixedMonth`)를 입력한 후 결제 요청 시 앱카드
  내에서 확인이 가능합니다. 결제창 혹은 앱카드 내에서 개월수가 확인되지 않더라도 실제 결제 승인 시
  `fixedMonth`에 요청한 값으로 승인 됩니다.

  <details>

  <summary> 예시 </summary>

  - 예1. BD카드 다이렉트 호출 후 결제 시 5개월 할부로 결제 됩니다.

  ```json
  {
    // ... 기타 파라미터
    "card": {
      "cardCompany": "BC_CARD",
      "installment": {
        "monthOption": {
          "fixedMonth": 5
        }
      }
    }
  }
  ```

  (관련 이미지 첨부)

  </details>

- 페이북을 통한 ISP 계열 카드 결제 시 실물 카드 번호와 다를 수 있습니다. 토스페이먼츠가 실제 카드
  번호와 다른 카드 번호를 전달하고 있어 결제 내역 단건 조회 (POST `/payments/{payment_id}`) 시
  응답되는 `payment_method_detail.card.detail.bin` 정보가 정확하지 않을 수 있습니다.

- 사파리 브라우저에서는 페이북 결제 시 팝업 호출 이슈가 있어 ISP 계열 카드 결제가 불가능합니다. 이는
  토스페이먼츠 결제창에서 페이북으로 넘어가는 과정에서 발생하는 이슈로 포트원과는 무관합니다.

### 간편결제

- 테스트MID로 간편결제 호출 시 테스트가 원활하지 않을 수 있습니다. 간편결제의 경우 사전에
  토스페이먼츠와 사전계약이 필요하며, ` [PAY_PROCESS_ABORTED] Toss Payments와 계약된
  결제수단(NAVERPAY)이 아닙니다.` 와 같은 에러 발생 시 고객사의 실 상점아이디로 토스페이먼츠와 계약
  후 사용이 가능합니다.

- 일부 간편결제 사 (ex. 토스페이, L페이 등)의 경우 해당 간편결제사 정책에 따라 고정 할부 개월수
  파라미터를 입력해도 해당 할부 개월 수와 일시불이 동시에 표기되는 경우가 있습니다.

### 기타

- 상품권 결제는 부분취소가 불가능합니다.

- 테스트 결제 건은 매출 전표 확인이 불가능합니다.

- 간편결제를 통해 카드 외의 결제수단으로 결제한 경우 매출 전표 확인이 불가능합니다.

- 토스페이먼츠를 통한 SSG페이 결제 시 토스페이먼츠 결제창에서 휴대폰 번호가 선택사항이어서
  미입력시에도 다음단계로 진입이 가능합니다. 이 때, SSG페이의 경우 입력받은 휴대폰 전화번호로 앱푸시
  알람이 가도록 로직이 구현되어있기 때문에 사용자가 앱푸시 알람을 받지 못할 수 있습니다. 휴대폰 번호
  입력이 필수로 되어있지 않는 것은 토스페이먼츠의 정책으로 포트원과 무관합니다.

- API를 통한 현금영수증 (POST `/payments/cash-receipts`) 발급 시 현금영수증 유형(type) 과 현금영수증
  발급 번호(identifier)의 유효성을 검증하지 않고 발급 요청한 값대로 승인되오니 API 이용 시
  현금영수증 정보를 정확하게 입력해야 합니다.

  <details>

  <summary> 예시 </summary>

  - 예1. 현금영수증 발급 유형이 지출 증빙일 때, 현금영수증 발급 번호에 휴대폰 번호를 입력하는 경우
    정상 처리됩니다.

  </details>

- 삼성페이를 통한 결제 도중 세션값이 만료된 경우 안내 메세지가 잘려서 보일 수 있습니다. 이는
  토스페이먼츠에서 발생하는 이슈로 포트원과 무관합니다.

  <details>

  <summary> 예시 </summary>

  (관련 이미지 첨부)

  </details>

- 사파리 또는 파이어폭스 브라우저의 경우 팝업 차단 해제가 설정되어있지 않는 경우 페이북, 가상계좌
  발급, 휴대폰 소액결제 등 결제가 정상적으로 진행되지 않을 수 있으니, 팝업을 해제하고 사용할 수
  있도록 안내가 필요합니다.

- IE 브라우저에서 페이코 결제 시 결제창이 잘릴 수 있습니다. 이는 토스페이먼츠에서 발생하는 이슈로
  포트원과 무관합니다.

- IE 브라우저 결제 중단 시 일부 메세지가 인코딩 된 메세지로 전달될 수 있으며, 이는 토스페이먼츠에서
  발생하는 이슈로 포트원과 무관합니다.


# https://developers.portone.io/opi/ko/integration/start/_components/sdk-installation

---
title: V2 JavaScript SDK 설치하기
description: 웹 브라우저에서 결제창 연동 시 사용되는 SDK 설치 방법을 안내합니다.
targetVersions:
  - v2
---

포트원 V2 SDK는 npm 레지스트리와 CDN을 통해 배포되고 있습니다.

- npm, yarn 등 패키지 매니저를 사용한다면 의존
  대상으로 [@portone/browser-sdk](http://www.npmjs.com/package/@portone/browser-sdk)를 추가하세요.

- 패키지 매니저를 사용하지 않는다면 `<script>` 요소를 이용하여 CDN에서 SDK를 직접 불러오세요.

- CDN에서 ESM 모듈 형태로도 SDK를 제공하고 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="패키지 의존 대상으로 추가">

사용하는 패키지 매니저에 알맞은 명령어를 실행하세요.

```shell
npm i @portone/browser-sdk
```

```shell
yarn add @portone/browser-sdk
```

```shell
pnpm add @portone/browser-sdk
```

패키지 매니저로 SDK를 불러온 경우 `PortOne` 객체를 import해서 사용합니다.

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
```

</div>

<div class="tabs-content" data-title="<script> 요소로 추가">

```html
<script src="https://cdn.portone.io/v2/browser-sdk.js"></script>
```

`<script>` 요소로 SDK를 불러온 경우 전역 객체 `window`에 `PortOne` 객체가 추가됩니다.

</div>

<div class="tabs-content" data-title="ESM 모듈로 추가">

ESM 모듈을 사용하는 경우 URL에서 `PortOne` 객체를 직접 import할 수 있습니다.

```javascript
import * as PortOne from "https://cdn.portone.io/v2/browser-sdk.esm.js";
```

</div>

</div>

<div class="hint" data-style="info">

**타입스크립트 지원**

포트원 V2 SDK는 타입스크립트 선언 파일(`.d.ts`)의 형식으로 타입 정보를 제공하고 있습니다. npm 레지스트리를 이용하는 경우 각종 개발 환경에서 별도 설정 없이 사용 가능합니다.

</div>


# https://developers.portone.io/opi/ko/integration/start/v2/checkout

---
title: 인증 결제 연동하기
description: PG 결제창을 이용하는 인증 결제를 연동합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/auth
---

## **SDK 일반 결제**

<details>

<summary>

영상으로 보기

</summary>

[포트원 인증 결제의 이해 - 쇼핑몰 멀티PG 연동하기](https://www.youtube.com/watch?v=DhcQFLYV9Q8)

</details>

## **결제 연동 샘플 프로젝트**

SDK를 지원하지 않는 플랫폼을 포함하여 다양한 플랫폼에서 결제 연동 예시를 확인하실 수 있도록 [portone-sample GitHub 저장소](https://github.com/portone-io/portone-sample)에서 샘플 프로젝트를 제공하고 있습니다.
일부 플랫폼의 경우 devcontainers 환경에서 바로 실행해보실 수 있습니다.

## 1. 포트원 SDK 설치

포트원은 다양한 PG의 결제창을 통일된 방법으로 호출할 수 있도록 자바스크립트 SDK를 제공합니다. 브라우저에서 포트원 SDK를 호출하여 결제를 진행하게 됩니다.



## 2. 결제 요청

SDK의 `PortOne.requestPayment()` 함수를 호출하여 결제 수단에 따른 결제창을 열 수 있습니다.

먼저, 관리자 콘솔의 결제 연동 페이지에서 **Store ID**와 사용할 채널의 **채널 키**를 확인해 주세요.

그리고 아래와 같이 파라미터들을 설정하여 호출합니다.

```ts
const response = await PortOne.requestPayment({
  // Store ID 설정
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
  // 채널 키 설정
  channelKey: "channel-key-893597d6-e62d-410f-83f9-119f530b4b11",
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
  payMethod: "CARD",
});
```

**paymentId**는 결제 건을 구분하는 문자열로, 결제 요청 및 조회에 필요합니다. 같은 paymentId에 대해 여러 번의 결제 시도가 가능하나,
최종적으로 결제에 성공하는 것은 단 한 번만 가능합니다. (중복 결제 방지)

**orderName**은 주문 내용을 나타내는 문자열입니다. 특정한 형식이 있지는 않지만, 결제 처리에 필요하므로 필수적으로 전달해 주셔야 합니다.

**totalAmount**와 **currency**는 결제 금액과 결제 화폐를 지정합니다.

**payMethod**는 결제 수단을 지정합니다.

## 3. 결제 완료 처리 (브라우저)

`PortOne.requestPayment()` 함수의 반환값을 통해 결제 요청의 결과를 확인합니다.

`code`가 있으면 결제 과정에서 오류가 발생한 것이므로 적절히 처리하여야 합니다.

결제가 성공한 경우 paymentId를 서버에 전달하여 서버측 결제 완료 처리를 하도록 합니다. (가상 계좌 결제의 경우 결제가 아직 완료되지 않은 상태일 수 있습니다.)

```ts
async function requestPayment() {
  const response = await PortOne.requestPayment({
    /* 파라미터 생략 */
  });

  if (response.code !== undefined) {
    // 오류 발생
    return alert(response.message);
  }

  // /payment/complete 엔드포인트를 구현해야 합니다. 다음 목차에서 설명합니다.
  const notified = await fetch(`${SERVER_BASE_URL}/payment/complete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // paymentId와 주문 정보를 서버에 전달합니다
    body: JSON.stringify({
      paymentId: paymentId,
      // 주문 정보...
    }),
  });
}
```

결과값에 들어 있는 필드는 다음과 같습니다.

| 필드명       | 설명           | 비고                 |
| --------- | ------------ | ------------------ |
| paymentId | 결제 건 ID      | 공통                 |
| code      | 오류 코드        | 실패 시               |
| message   | 오류 문구        | 실패 시               |
| pgCode    | PG 오류 코드 그대로 | 실패 및 PG 오류 코드 존재 시 |
| pgMessage | PG 오류 문구 그대로 | 실패 및 PG 오류 문구 존재 시 |

### 3-1. redirect 방식의 경우

모바일 환경에서의 결제는 대부분 redirect 방식으로 이루어집니다. redirect 방식에서는 브라우저가 결제창으로 리다이렉트되었다가, 결제창에서의 작업이 끝나면
지정한 `redirectUrl`로 다시 리다이렉트됩니다. 이 경우에는 함수 호출 결과를 이용할 수 없고,
결제 성공 여부 등은 [쿼리 문자열](http://en.wikipedia.org/wiki/Query_string)로 전달받게 됩니다.

```ts
PortOne.requestPayment({
  /* 파라미터 생략 */
  redirectUrl: `${BASE_URL}/payment-redirect`,
});
```

쿼리 문자열로 전달되는 내용은 다음과 같습니다.

| 키         | 설명           | 비고                 |
| --------- | ------------ | ------------------ |
| paymentId | 결제 건 ID      | 공통                 |
| code      | 오류 코드        | 실패 시               |
| message   | 오류 문구        | 실패 시               |
| pgCode    | PG 오류 코드 그대로 | 실패 및 PG 오류 코드 존재 시 |
| pgMessage | PG 오류 문구 그대로 | 실패 및 PG 오류 문구 존재 시 |

예를 들어 paymentId가 `payment-39ecfa97`, redirectUrl이 `https://example.com/payment-redirect`인 경우,
결제 성공 시에 `https://example.com/payment-redirect?paymentId=payment-39ecfa97`로 리다이렉트됩니다.

## 4. 결제 완료 처리 (서버)

paymentId를 서버에 전달하면, 서버는 포트원의 [결제 조회 API](https://developers.portone.io/api/rest-v2/payment#get%20%2Fpayments%2F%7BpaymentId%7D)를
호출하여 해당 결제 건의 상태를 확인하고 결제 완료 처리를 하여야 합니다.

<div class="hint" data-style="info">

**결제 검증 필수**

인증 결제의 흐름상 결제 금액 등 정보가 고객의 브라우저 측에서 처리되므로, 의도한 결제 내용이 맞는지 꼭 확인하여야 위변조를 막을 수 있습니다.

</div>

예시로, 위에서 사용했던 `/payment/complete` 엔드포인트를 다음과 같이 구현할 수 있습니다.

[PORTONE\_API\_SECRET](https://developers.portone.io/opi/ko/integration/ready/readme?v=v2#4-2-v2-api-secret-%EB%B0%9C%EA%B8%89%ED%95%98%EA%B8%B0)
은 V2 전용 시크릿으로, 포트원 콘솔 내 결제연동 탭에서 발급받을 수 있습니다.

```ts title="Express"
app.use(bodyParser.json());

// POST 요청을 받는 /payments/complete
app.post("/payment/complete", async (req, res) => {
  try {
    // 요청의 body로 paymentId가 오기를 기대합니다.
    const { paymentId, order } = req.body;

    // 1. 포트원 결제내역 단건조회 API 호출
    const paymentResponse = await fetch(
      `https://api.portone.io/payments/${encodeURIComponent(paymentId)}`,
      {
        headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
      },
    );
    if (!paymentResponse.ok)
      throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
    const payment = await paymentResponse.json();

    // 2. 고객사 내부 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
    const orderData = await OrderService.getOrderData(order);
    if (orderData.amount === payment.amount.total) {
      switch (payment.status) {
        case "VIRTUAL_ACCOUNT_ISSUED": {
          const paymentMethod = payment.paymentMethod;
          // 가상 계좌가 발급된 상태입니다.
          // 계좌 정보를 이용해 원하는 로직을 구성하세요.
          break;
        }
        case "PAID": {
          // 모든 금액을 지불했습니다! 완료 시 원하는 로직을 구성하세요.
          break;
        }
      }
    } else {
      // 결제 금액이 불일치하여 위/변조 시도가 의심됩니다.
    }
  } catch (e) {
    // 결제 검증에 실패했습니다.
    res.status(400).send(e);
  }
});
```


# https://developers.portone.io/opi/ko/integration/start/v2/keyin

---
title: 수기(키인) 결제 연동하기
description: 구매자 인증 없이 결제 수단 정보만으로 결제를 요청합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/non-auth
---

<div class="hint" data-style="info">

수기 결제를 이용하기 위해서는 PG사와 별도 협의가 필요합니다.

</div>

수기(키인) 결제 API를 이용해 1회성 결제 요청이 가능합니다.

## 수기 결제의 장단점

아래의 예제처럼 고객사가 직접 만든 UI로 결제 정보를 입력받을 수 있습니다.

그러나 간편 결제와 다르게 고객이 매번 정보를 기입해야 한다는 번거로움이 있습니다.

## 수기 결제 예제

고객사 서버에서 아래와 같이 포트원 API를 호출합니다.

```ts title="server-side"
// 포트원 수기(키인)결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/instant`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelKey: CHANNEL_KEY_HERE,
      orderName: "월간 이용권 정기결제",
      // 수기 결제 API를 참고해 고객 정보를 채워주세요.
      customer: YOUR_CUSTOMER_INFO,
      amount: {
        total: 8900,
      },
      currency: "KRW",
      // 수기(키인)결제 API를 참고해 카드 / 가상계좌 정보를 채워주세요.
      method: PAYMENT_METHOD_HERE,
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```


# https://developers.portone.io/opi/ko/integration/start/v2/readme

---
title: 결제 연동 시작하기
description: 새롭게 출시된 V2 결제 서비스를 소개합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/readme
---

## 포트원 신모듈 소개 \[V2]

포트원 V2는 10년 간의 포트원 운영 경험을 바탕으로 새롭게 설계되었습니다. 개발자 경험의 혁신적인 개선을 통해 포트원을 연동하는 개발자들은
더욱 쉽게 시스템을 이해하고 빠르게 결제 기능을 연동할 수 있습니다.
또한 포트원 V2는 사용자가 직접 느낄 수 있는 개발자 경험의 개선 이외에도, 눈에 보이지 않는 내부적인 부분 또한 많은 개선을 이루었습니다.

### 혁신적인 개발자 경험: 쉽고 편리한 결제 연동

(이미지 첨부: \<V2 OpenAPI 문서 & 활용 예시>)

포트원 V2는 개발자 경험(Developer Experience)을 혁신적으로 개선하여 쉽고 편리한 결제 연동을 돕습니다.
포트원이 제공하는 차별화된 개발자 경험의 예시는 아래와 같습니다.

- **Open API Spec Download**

  - 연동용 코드 자동 생성, Custom API Document 활용, Postman Import 등에
    사용 가능한 Open API Spec을 다운로드하실 수 있는 기능을 제공합니다.

    (이미지 첨부: \<Postman 에서 Open API Spec 파일 Import 하기>)

    (이미지 첨부: \<Postman Import 후 API Structure 예시>)

  - **직관성 있는 스키마 설계**

    - open API spec 파일은 [REST API 문서 페이지](../../../../../../api/rest-v2)에서 **OpenAPI JSON 내려받기** 버튼을 눌러
      다운 받으실 수 있습니다.

    - 타입에 따라 달라지는 스키마 구조를 정확히 표현하여 더욱 예측 가능한 인터페이스로 디자인했습니다.

    - 예를 들어 가상계좌로 결제한 결제 건을 조회한다고 가정했을 때, 해당 결제 건은 계좌번호를 항상 포함하고 있을 것입니다.
      하지만 기존 시스템을 이용하는 경우, 결제수단별로 응답 스키마가 달라지지 않고 모든 필드를 열거하고 있기 때문에
      가상계좌 결제 건임에도 계좌번호는 optional로 제공됩니다.
      반면 포트원 V2는 결제수단별로 달라지는 스키마 구조를 정확히 표현하고 있기 때문에, 가상계좌 결제 건일 때는
      계좌번호가 required로 제공된다는 것이 타입으로 보장됩니다.

    - 이러한 예시를 통해 확인할 수 있듯이, 개발자는 포트원 V2의 직관적인 인터페이스를 통해 결제 시스템을 쉽게 이해하고 불필요한 코드 작성을 최소화할 수 있습니다.

      (이미지 첨부: \<V2 스키마 설계 예시>)

  - **npm, Typescript 지원**

    - V2 SDK는 Typescript로 작성되어 함수의 파라미터 및 응답의 타입을 확인하실 수 있고, npm을 통해 install이 가능합니다.

      (이미지 첨부: \<V2 SDK Typescript 코드 예시>)

## 내부 시스템 개선: 풍부한 데이터와 견고한 서버

포트원 V2는 개발자 경험의 개선을 통해 연동의 편리함을 보장하면서, 장기적으로 고객사의 서비스 운영에 도움이 될 만한 내부 시스템 개선을 진행했습니다.
고객사의 제품 품질 향상과 개선된 비즈니스 의사결정을 도울 수 있는 풍부한 데이터를 제공합니다. 또한 안정적인 운영을 위해 훨씬 더 견고한 시스템을 구축했습니다.

### 확장성: 무한한 가능성을 열어주는 결제 시스템

V2는 '항상 준비된 시스템'입니다. 향상된 [오토스케일링](https://ko.wikipedia.org/wiki/%EC%98%A4%ED%86%A0%EC%8A%A4%EC%BC%80%EC%9D%BC%EB%A7%81)
능력을 제공하는 포트원 V2는 블랙프라이데이부터 크리스마스 선착순 이벤트까지, 아무리 많은 결제 트래픽이 몰려도 문제없이 처리할 수 있습니다.
V1의 오토스케일링도 훌륭하지만, V2는 더 빠른 반응 속도로 더 많은 트래픽을 감당할 수 있는 '진화된 스케일링 능력'을 갖췄습니다.

### 안정성: 신뢰할 수 있는 서버

V2의 서버 시스템은 더욱 강해졌습니다. 휴먼 에러의 위험성을 극단적으로 줄이기 위해 모든 서버 시스템은 자동화된 코드로 관리됩니다.
추가로 [Scala](https://ko.wikipedia.org/wiki/%EC%8A%A4%EC%B9%BC%EB%9D%BC_\(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4\))와
같은 강타입 언어를 사용하여 시스템의 안정성을 더욱 강화했습니다.

### 완벽한 데이터 보존: 우수한 데이터 정합성과 풍부한 정보 제공

V2는 모든 데이터를 수집하고 기록합니다. [Event Sourcing](https://learn.microsoft.com/ko-kr/azure/architecture/patterns/event-sourcing)
기술을 접목하여 서비스의 모든 결제 처리 내역을 빠짐없이 보존합니다. 이를 통해 비즈니스 의사결정에 필요한 주요 정보를 풍부하게 제공합니다.

### 기능 확장: 신속한 업데이트와 혁신

V2는 최신 결제 기능을 가장 빠르게 제공합니다. 곧 출시될 스마트라우팅은 V2 인프라를 이용 중인 고객사에게 우선하여 제공됩니다.
최신 기능을 통해 결제 프로세스를 혁신하고, 고객의 결제 경험을 향상시킬 수 있습니다.

## 사용 가능한 PG사

현재 V2 서비스에서 사용 가능한 PG사는 다음과 같으며, 지속적으로 확장하고 있습니다.

### 결제

- **토스페이먼츠**
- **KSNET**
- **카카오페이**
- **네이버페이**
- **스마트로**
- **나이스페이먼츠**
- **페이팔**
- **KG이니시스**
- **한국결제네트웍스(KPN)**
- **NHN KCP**
- **토스페이**
- **하이픈 바로계좌결제**

### 본인인증

- **다날 본인인증**

## 새로워진 V2 시스템과 함께 비즈니스를 한 단계 업그레이드할 준비가 되셨나요?

<div class="hint" data-style="info">

포트원에서는 결제모듈 V2를 연동하시는 분들께 별도의 기술지원을 추가적으로 지원하고 있습니다.
연동하시면서 기술지원이 필요하시거나 궁금하신 사항이 있으신 경우 아래 이메일로 문의주시기 바랍니다.

- V2 기술지원 이메일: <tech.support@portone.io>

</div>


# https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/hyphen

---
title: 결제대행사별 연동 정보 확인하기 - 하이픈
targetVersions:
  - v2
---

1. [HYPHEN PAY & 바로계좌결제 운영 백오피스](http://payadmin.hyphen.im/) 접속 후 **바로계좌결제** 선택 후
   로그인을 합니다.

   (이미지 첨부: HYPHEN 백오피스 로그인 화면)

2. \[상점관리]→\[바로계좌결제 상점정보관리]를 클릭합니다.

3. 상점명을 클릭합니다.

   (이미지 첨부: HYPHEN \[상점관리] - \[상점정보관리] 예시 화면)

4. \[상점 기본정보]에서 \[상점번호]를 확인합니다.

   (이미지 첨부: HYPHEN \[상점 기본정보] 예시 화면)

5. \[암호화 키, 토큰]에서 \[암호화 키]와 \[암호화 토큰]을 확인합니다.

   (이미지 첨부: HYPHEN \[암호화 키, 토큰] 예시 화면)

6. 포트원 콘솔에서 채널 추가 시 \[PG상점아이디(상점 번호)], \[암호화 키], \[암호화 토큰]을
   입력한 후 \[저장]을 클릭합니다.


# https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/kcp-v2

---
title: 결제대행사별 연동 정보 확인하기 - NHN KCP (V2)
targetVersions:
  - v2
---

<div class="hint" data-style="danger">

포트원 V2에서 제공하는 KCP의 경우 **KCP의 PG-API방식**만 지원합니다. 따라서 아래와 같이 인증서 발급 후
사용할 수 있습니다.

해당 인증서의 경우 유효기간은 **5년**이며, 유효기간 만료 30일전부터 갱신이 가능합니다.

**서비스 인증서의 유효기간이 만료되거나 폐기된 경우** 즉시 결제 승인/취소 등 관련
**서비스 이용이 불가능**하오니
서비스 사용을 위해서 인증서를 재발급이 필요한 후 **포트원에 저장된 채널 정보를 업데이트** 해야 합니다.

</div>

1. [KCP 파트너관리자](http://partner.kcp.co.kr/) 접속 후 로그인을 합니다.

2. \[고객센터]→\[인증센터]→\[KCP PG-API]를 클릭합니다.

   (이미지 첨부: NHN KCP 파트너관리자 내 \[고객센터] - \[PG-API 인증서] 예시 화면)

3. KCP PG-API 발급 버튼을 클릭합니다.

4. 파트너 관리자 비밀번호(로그인시 입력한 비밀번호)를 입력한 후 다음을 클릭합니다.

   (이미지 첨부: \[PG-API 인증서] 발급시 \[파트너 관리자 비밀번호 입력] 화면)

5. 사용할 개인키 비밀번호를 입력한 후 다음을 클릭합니다.

   - 개인키 비밀번호를 분실하신 경우 확인이 불가함으로 폐기 후 재발급해야 합니다.

   - 개인키를 폐기하는 즉시 기존에 사용하던 개인키와 서비스 인증서 사용이 불가능하며,
     결제 승인/취소/조회가 불가능하오니 잘 보관하시길 바랍니다.

   (이미지 첨부: \[PG-API 인증서] 발급시 \[개인키 비밀번호 등록] 화면)

6. KCP PG-API 개인키 및 서비스 인증서 발급이 완료되면 로컬에 .zip 파일이 다운로드 됩니다.

   - 서비스 인증서의 유효기간은 발급일로부터 5년으로, 유효기간 만료 30일전부터 갱신이 가능합니다.
   - 서비스 인증서의 유효기간이 만료되었거나 폐기한 경우 원활한 서비스 사용을 위해 인증서를 재발급해주세요.

   (이미지 첨부: \[PG-API 인증서] 발급 완료 화면)

7. 로컬내에서 압축 풀면 `KCP_AUTH_{$사이트코드}_CERT.pem` 파일과 `KCP_AUTH_{$사이트코드}_PRIKEY.pem` 파일을 확인할 수 있습니다.

8. 포트원 콘솔에서 채널 추가 시 \[MID(사이트코드)], \[PG-API 인증서키], \[PG-API 개인키], \[개인키 비밀번호]를
   입력한 후 저장을 클릭합니다.

9. 정기결제를 이용하시는 경우, 아래 절차를 진행해주세요.

   1. [KCP 파트너관리자](http://partner.kcp.co.kr/) 접속 후 로그인을 합니다.
   2. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹등록]을 클릭합니다.
   3. \[상점정보]→\[사이트코드]에서 그룹등록할 사이트코드를 선택합니다.
   4. \[그룹정보]에서 \[유형3]을 선택한 후 원하는 그룹명을 입력합니다.
   5. \[결제입력 정보]에서 \[결제유형] 및 \[납부유형]을 확인하시고 고객사 유형에 맞게 선택합니다.
   6. \[고지방법]에서 원하시는 고지 방법을 선택한 후 \[등록하기]를 클릭합니다.

   (이미지 첨부: KCP 파트너관리자 내 관리용 그룹등록 화면)

   7. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹조회]를 클릭합니다.
   8. \[사이트코드]에서 사용한 사이트코드를 선택한 후 \[검색]을 클릭합니다.

   (이미지 첨부: KCP 파트너관리자 내 관리용 그룹조회 화면)

   9. 포트원 콘솔에서 채널 추가 시 앞서 발급한  \[MID(사이트코드)], \[PG-API 인증서키], \[PG-API 개인키],
      \[개인키 비밀번호], \[정기자동결제 그룹아이디]를 입력한 후 \[저장]을 클릭합니다.


# https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/paypal-v2

---
title: 결제대행사별 연동 정보 확인하기 - 페이팔 (V2)
targetVersions:
  - v2
---

1. [페이팔](http://www.paypal.com/) 접속 후 로그인을 합니다.

2. \[Account settings]-\[Business information]을 클릭합니다.

   (이미지 첨부: 페이팔 페이지 내 PayPal Merchant ID 조회 화면)

3. 포트원 콘솔에서 채널 추가 시 \[PayPal Merchant ID]를 입력한 후 `저장`을 클릭합니다.

   <div class="hint" data-style="info">

   - 포트원에서 제공하는 페이팔 테스트용 계정으로 채널을 추가하신 경우, 테스트 결제 시 테스트용 구매자 계정을 이용하여 결제를 진행해야합니다.
     [→ 테스트용 계정생성 바로가기](http://developer.paypal.com/dashboard/accounts)

   - 판매자와 구매자 계정 국가가 모두 한국인 경우 페이팔 정책상 결제가 불가능합니다.
     따라서 테스트용 구매자 계정 생성 시 Sandbox Accounts의 Country가 US인 Personal(구매자) 계정으로 생성하여 테스트를 해야합니다.

   - 테스트 계정으로 결제 시 테스트용 카드정보를 참고하여 결제를 진행해야 합니다. [→ 테스트용 카드정보 바로가기](http://developer.paypal.com/api/rest/sandbox/card-testing/#link-creditcardgeneratorfortesting)

   </div>


# https://developers.portone.io/opi/ko/integration/start/v2/billing/issue

---
title: 1. 빌링키 발급하기
description: 결제창 또는 API를 이용하여 빌링키를 발급할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/non-auth
---

포트원에서는 PG사 결제창을 통해 빌링키를 발급하는 방법과 API를 이용하여 빌링키를 발급하는 방법을 지원합니다.

결제창을 이용한 빌링키 발급과 API를 통한 빌링키 발급 방식의 장단점은 아래와 같습니다.

**결제창을 통한 빌링키 발급**

- **장점**
  - 결제 수단 정보가 고객사나 포트원의 서버를 거치지 않고 직접 PG사로 전달되기 때문에 보안 문제가 일어날 가능성이 적습니다.

- **단점**
  - PG사의 일반결제창을 통해 카드정보를 입력받기 때문에 웹브라우저를 통해서만 빌링키 발급이 이루어지며, **카드정보 입력란을 커스터마이징 할 수 없습니다.**

**API를 통한 빌링키 발급**

- **장점**
  - 고객사가 원하는 형태의 화면으로 **카드정보 입력란을 커스터마이징**할 수 있습니다.
  - 고객사 UI/UX 친화적인 결제 환경을 계획하고 계시다면 API 연동 개발을 선택하시길 권장드립니다.

- **단점**
  - **개인정보 이용약관**을 명시해야 하며 PG사 및 카드사 심사가 까다롭고 개인정보 유출에 유의해야 합니다.

## 결제창을 통한 빌링키 발급

결제창을 이용해 빌링키를 발급할 때는 포트원 SDK를 이용합니다.

포트원 SDK를 설치하는 방법은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout) 문서를 참고하세요.

`PortOne.requestIssueBillingKey()` 함수를 호출하면 빌링키를 발급하기 위한 결제창을 열 수 있습니다.

브라우저에서 포트원 SDK를 호출하여 빌링키를 발급하고, 서버로 빌링키를 전달합니다.

```ts
const issueResponse = PortOne.requestIssueBillingKey({
  storeId: "store-9bf6076d-beef-4729-9521-ae66c14e0569",
  channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d",
  billingKeyMethod: "CARD",
});
// 빌링키가 제대로 발급되지 않은 경우 에러 코드가 존재합니다
if (issueResponse.code !== undefined) {
  return alert(issueResponse.message);
}

// 고객사 서버에 빌링키를 전달합니다
const response = await fetch(`${MY_SEVER_URL}/billings`, {
  method: "POST",
  header: { "Content-Type": "application/json" },
  body: JSON.stringify({
    billingKey: issueResponse.billingKey,
    // ...
  }),
});
if (!response.ok) throw new Error(`response: ${await response.json()}`);
```

## API를 통한 빌링키 발급

고객 결제 정보를 이용하여 포트원 빌링키 발급 API를 호출하면 포트원 서버가 PG사를 통해 빌링키를 발급받습니다.

이 과정에서 카드 정보는 포트원 서버에 기록되지 않습니다.

브라우저로부터 결제 정보를 전달 받은 뒤, 서버에서 포트원 API를 호출하세요.

```ts title="server-side"
// customerId, cardNumber, expiryYear, expiryMonth, birthOrBusinessRegistrationNumber, passwordTwoDigits 등 정보를 전달받습니다.

// 포트원 빌링키 발급 API 호출
const issueResponse = await fetch("https://api.portone.io/billing-keys", {
  method: "POST",
  headers: {
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    channelKey: CHANNEL_KEY_HERE,
    customer: {
      id: customerId,
    },
    method: {
      card: {
        credential: {
          number: cardNumber,
          expiryYear,
          expiryMonth,
          birthOrBusinessRegistrationNumber,
          passwordTwoDigits,
        },
      },
    },
  }),
});
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
const {
  billingKeyInfo: { billingKey },
} = await issueResponse.json();
// 빌링키가 발급되었습니다! 빌링키를 저장하거나 결제하는 로직을 구성하세요.
```

## 빌링키 발급 방식에 따른 인증과정 필수 여부

빌링키를 발급 받는 단계에서 인증과정은 다음과 같이 구분할 수 있습니다.

1. PG사의 결제창을 띄우는 방식

   - PG사의 결제창 안에서 '공인인증(본인인증)' 절차를 요구하게 됩니다.

2. API 호출 방식

   - API 호출만으로 빌링키 발급이 가능하기 때문에 인증 절차가 없습니다.

인증과정 포함 여부는 결제대행사별로 다르므로 상세 내용은 아래 링크에서 확인하세요.

- [정기결제의 인증 과정 필수 여부](https://help.portone.io/content/schedule-requirement)


# https://developers.portone.io/opi/ko/integration/start/v2/billing/payment

---
title: 2. 결제 요청하기
description: 포트원 빌링키 결제 API를 사용해 바로 결제를 요청합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/non-auth
---

포트원의 빌링키 결제 API를 호출하여 결제를 진행합니다.

바로 결제를 진행하고 싶은 것이 아니라 미래 특정 시점에 결제가 일어나게 하고 싶다면 [결제 예약하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/schedule)을 참고하세요.

```ts title="server-side"
// 고객사에서 채번하는 새로운 결제 ID를 만들어주세요.
const paymentId = OrderService.getNewPaymentId();

// 포트원 빌링키 결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(paymentId)}/billing-key`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      billingKey,
      orderName: "월간 이용권 정기결제",
      // 빌링키 결제 API를 참고해 고객 정보를 채워주세요.
      customer: YOUR_CUSTOMER_INFO,
      amount: {
        total: 8900,
      },
      currency: "KRW",
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```


# https://developers.portone.io/opi/ko/integration/start/v2/billing/readme

---
title: 빌링키 결제 연동하기
description: 카드 혹은 휴대 전화 정보를 이용하여 빌링키를 발급하고, 빌링키를 이용해 결제를 요청하는 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/non-auth
---

## 빌링키란?

구독형 정기결제, 종량제 과금결제 등 고객사가 원하는 시점에 결제를 일으키기 위한 결제용 비밀 키입니다.

고객사가 고객의 카드정보를 저장할 수 없기 때문에, 해당 카드에 대응하는 빌링키를 발급 받아 저장하고, 결제 시점에는 결제 정보 대신 빌링키를 이용하여 요청하는 방식을 씁니다.

가지고 있는 빌링키를 사용해 즉시 결제를 요청하거나, 시간을 정해 결제를 예약할 수 있습니다.

<div class="hint" data-style="warning">

### 빌링키는 정기 구독에만 사용이 가능합니다.

빌링키를 이용한 결제는 결제수단이 본인 소유인지 확인이 어려워 관리가 어렵고, 카드사 심사 시 빌링키를 사용한 비정기적인 결제를 허용하지 않을 수 있습니다.

</div>


# https://developers.portone.io/opi/ko/integration/start/v2/billing/schedule

---
title: 3. 예약/반복결제 구현하기
description: 발급한 빌링키로 예약/반복결제를 구현하는 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/start/v1/non-auth
---

## 1. 결제 예약하기

미래의 특정 시점에 결제가 진행되도록 할 때는 **포트원 결제 예약 API**를 이용합니다.

```ts title="server-side"
// 포트원 결제 예약 API 호출
const scheduleResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/schedule`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payment: {
        billingKey: BILLING_KEY_HERE,
        orderName: "월간 이용권 정기결제",
        customer: {
          id: CUSTOMER_ID_HERE,
          // 고객 정보가 필요한 경우 API 명세에 따라 추가해주세요.
        },
        amount: {
          total: 8900,
        },
        currency: "KRW",
      },
      timeToPay: "2023-08-24T14:15:22Z", // 결제를 시도할 시각
    }),
  },
);
if (!scheduleResponse.ok)
  throw new Error(`scheduleResponse: ${await scheduleResponse.json()}`);
```

## 2. 결제 결과 수신하기

예약한 시간에 결제가 시도되면 지정한 서버의 웹훅 URL로 고객사 거래 번호(**`payment_id`**)가
전달됩니다. 결제 결과를 확인하신 뒤 결제 완료 처리를 하시면 됩니다.

웹훅을 받아 결제 결과를 확인하는 방법은 [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)를 참고해주세요.

## 3. 반복 결제 구현하기

반복 결제는 예약된 결제가 완료된 뒤 다음 결제를 예약하는 식으로 구현할 수 있습니다.


# https://developers.portone.io/api/backward-compatibility

---
title: API 하위호환성 지원
description: 포트원이 보장하는 V1, V2 API 하위호환성에 대한 내용입니다.
targetVersions:
  - v1
  - v2
---

### 하위호환성

포트원이 제공하는 모든 Stable API에 대해 아래와 같은 하위호환성이 보장됩니다.

1. 현재 사용 가능한 입력 형식은 앞으로도 사용할 수 있습니다.
   - 입력 형식 내 필드 정의가 삭제되지 않습니다.

   - 필수 입력 정보가 추가되거나, 선택 입력 정보가 필수로 변경되지 않습니다.
     - 오로지 선택 입력 정보만 추가될 수 있습니다.

   - 하위 필드의 형식(타입) 또한 위 규칙을 지키며 변경됩니다.

   - enum 타입의 값이 삭제되지 않습니다.

2. 출력 형식이 확장될 수 있지만, 축소되지 않습니다.
   - 출력 형식 내 필드 정의가 삭제되지 않습니다.

   - 사용 중인 필수 출력 정보가 선택사항으로 변경되거나 출력 시 누락되지 않습니다.
     - 이미 존재하는 용례 내에서는 필수 출력 정보가 언제나 유지됩니다.
     - 단, **기능이 추가 및 확장되는 등 새로운 용례로 사용될 때의 출력 정보에 한하여 선택사항으로 변경될 수 있습니다.**

   - 하위 필드의 형식(타입) 또한 위 규칙을 지키며 변경됩니다.

   - 단, **새로운 필드 또는 enum 값, oneOf 케이스가 추가될 수 있습니다.**
     - 알지 못하는 필드 및 값이 주어지더라도 crash가 발생하지 않도록 유의하여 개발해주세요.
     <!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

     - 새로운 필드 및 값이 추가되는 경우 사전 공지를 통해 안내드립니다.

     <!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

`UNSTABLE`이 표기된 일부 API의 경우, 위 하위호환성 정책과 무관하게 변경 및 지원 종료될 수 있으니 이용에 유의하세요.


# https://developers.portone.io/opi/ko/readme

---
title: 포트원 결제 연동 Doc
description: 포트원 결제 연동 가이드입니다. 빠른 시간 안에 결제를 연동할 수 있게 도와드립니다.
targetVersions:
  - v1
  - v2
---



<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="danger">

2024년 9월 1일부로 포트원 V1 API에 대해 일부 보안 규격이 지원 종료됩니다.

자세한 사항은 [TLS 지원 범위](https://developers.portone.io/opi/ko/support/tls-support?v=v1)를 참고해주세요.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## 연동 준비하기

결제 연동 전 회원 가입부터 채널 연동 방법까지 확인할 수 있습니다.

[결제 연동 준비하기](https://developers.portone.io/opi/ko/integration/ready/readme)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

## 결제 연동하기

해당 가이드를 통해 결제창을 손쉽게 연동할 수 있습니다.

[인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/auth)

[비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth)

[결제취소(환불) 연동하기](https://developers.portone.io/opi/ko/integration/cancel/v1/basic)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

## 인증결제 연동하기

해당 가이드를 통해 결제창(SDK) 결제를 손쉽게 연동할 수 있습니다.

[인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout)

## 수기(키인)결제 연동하기

해당 가이드를 통해 API 결제를 손쉽게 연동할 수 있습니다.

[수기(키인) 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/keyin)

## 빌링키 결제 연동하기

해당 가이드를 통해 빌링키 결제를 손쉽게 연동할 수 있습니다.

[빌링키 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/readme)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 결제 결과 누락 없이 수신받기

해당 가이드를 통해 안정적으로 결제 결과를 수신받을 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

[웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v1)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

## 본인인증 연동하기

해당 가이드를 통해 본인인증을 손쉽게 연동할 수 있습니다.

[본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/readme-v2)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

## 기타 서비스 연동하기

해당 가이드를 통해 부가적인 서비스 연동을 손쉽게 처리할 수 있습니다.

[본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/readme)

[결제 URL 생성하기](https://developers.portone.io/opi/ko/extra/link-pay/readme-v1)

## TIP

결제창 연동 시 꼭 확인해 보세요.

[면세금액 결제방법](https://developers.portone.io/opi/ko/support/tax)

[오픈 전 체크리스트](https://developers.portone.io/opi/ko/integration/checklist/readme-v1)

[컨펌 프로세스](https://developers.portone.io/opi/ko/extra/confirm-process/readme-v1)

[포트원 결제 플로우](https://developers.portone.io/opi/ko/support/flow)

[대표상점과 하위상점](https://developers.portone.io/opi/ko/support/agency-and-tier)

[결제대행사별 빌링키 획득 규칙](https://developers.portone.io/opi/ko/support/code-info/pg)

[PG사별 은행코드](https://developers.portone.io/opi/ko/support/code-info/pg-1)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## 관리자 콘솔 사용하기

관리자 콘솔 사용 방법을 안내합니다.

[관리자 콘솔 소개](https://developers.portone.io/opi/ko/console/guide/readme)

## API

포트원에서 제공하는 API 명세를 확인할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

API 문서 바로가기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

API 문서 바로가기

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## SDK

결제 연동 JS SDK 명세를 확인할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[JavaScript SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-sdk/readme)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

## FAQ

[자주 묻는 질문](https://developers.portone.io/opi/ko/support/faq/undefined)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## PG사별 결제 연동 가이드

각 PG사별 결제 연동 가이드를 안내합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

[결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v1/readme)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v2/readme)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/etc/recon

---
title: PG 거래대사 가이드
description: >-
  PG 거래대사는 PG사와 간편결제사로부터 정산 받는 금액 및 상세내역을 포트원 콘솔에서 PG가 여러 개여도 한 번에 자동 대사된 데이터를
  확인할 수 있는 통합 조회 서비스입니다.
---

## PG 거래대사 유의사항

- 포트원을 통해 연동된 아래 12개의 PG사 내역을 조회할 수 있습니다.
  - 지원 PG : **KCP, KG이니시스, 나이스페이먼츠, 토스페이, 네이버페이, 다날, 페이코, (구)토스페이먼츠, 토스페이먼츠, 카카오페이, 엑심베이, 헥토파이낸셜**
  - 고객사가 포트원을 통하지 않고 PG 직연동한 경우 지원 불가
  - 9/26 이후 지원 예정 PG사 : KPN, 하이픈, KSNET

- 고객사 주문번호를 정확하게 확인하기 위해서는 **실제 사용하시는 주문번호의 연동**이 필요합니다.

- 네이버페이를 연동하실 경우 정산 API 키 등록이 필요합니다.

## 거래대사 및 정산/입금대사 소개

### 1. 거래대사

- 포트원을 통해 발생한 고객사 주문 데이터와 PG사의 결제 데이터를 비교하여 신뢰도 높은 데이터를 제공합니다.

- **주요 기능**
  - 일별로 고객사 거래 데이터와 PG 정산 데이터를 매칭합니다.
  - 여러 PG사와 결제수단을 한 번에 관리할 수 있습니다.
  - PG사 어드민에서 직접 취소한 거래 건도 확인하실 수 있습니다.

### 2. 정산/입금대사

- 입금된 정산금의 상세 내역을 확인할 수 있는 자료를 제공합니다.

- **주요 기능**
  - 해당일의 PG 정산금 상세내역을 통해 입금 금액의 상세내역을 쉽게 확인할 수 있습니다.

### 3. 어떤 점이 좋나요?

- 다양한 PG사와 결제수단, 통화를 통합하여 일관된 기준으로 거래 및 정산 데이터를 제공하므로,
  매출 및 결제 내역의 일치성을 높여주고 매출 인식에 참조할 수 있습니다.

- 거래대사를 통해 고객사 거래 데이터와 PG사의 데이터를 비교하고 정산이 확정된 정산금 데이터를 추가하므로,
  데이터 오류를 최소화할 수 있습니다.

## 상세 기능 설명

### 1. 거래내역

- 일 총거래건수와 거래금액, 총 거래 이상 건수, 거래이상금액을 확인 가능합니다.

### 2. 정산내역

- 일 정산금과 수수료를 확인 가능할 수 있습니다.

### 3. 거래건별조회

- 고객사 주문번호, PG 거래번호, 포트원 거래번호를 하나의 엑셀에서 볼 수 있습니다.
- 결제수단별 상세내역을 확인할 수 있습니다.
- 공급가액, 면세가액, 부가세, PG 정산 수수료, PG 정산 수수료 부가세

## 메뉴별 기능 설명

### 1. 거래 정산내역

거래일 기준 고객사 거래데이터, 혹은 정산일 기준 정산데이터를 확인할 수 있습니다.

- **정산내역**에서는 정산일 기준으로 데이터가 조회됩니다.

- **거래내역**에서는 거래일 기준으로 데이터가 조회되고 이는 PG사와 동일한 기준입니다.

- 조회 기간으로 기본 조회 후, 조회기간 내 상점아이디와 PG 고객 식별아이디, 그리고 대사상태값으로
  필터링 가능합니다.
  - 아무 것도 선택하지 않았을 경우 이번달 1일부터 어제까지의 기간이 선택됩니다.

#### 1.1 거래 내역

(관련 이미지 첨부)

**(1) 요약대시보드**

- 설정한 조건으로 조회한 거래 결과의 요약을 확인할 수 있습니다.

- 총 거래건수와 거래금액 : 설정한 조건으로 조회한 총 거래 건수와 거래 금액을 확인할 수 있습니다.

- 총 거래 이상건수와 총 거래 이상 금액 : 설정한 조건으로 조회한 총 거래 이상 건수와 거래 이상 금액을 확인할 수 있습니다.
  - 통화를 선택하여 통화별로 확인하실 수 있으며 통화가 다른 경우 KRW 로 환산하지 않습니다.
  - 거래 이상 금액 : PG사 결제 금액과 고객사가 포트원에 연동한 주문금액을 비교했을 때 불일치하거나, PG사와 고객사 정보 어느 한 쪽이 없어서 비교할 수 없는 경우의 금액의 합계

**(2) 필터**

- 대사상태, PG 고객식별아이디와 상점아이디로 필터링할 수 있습니다. (복수 선택 가능)
- 필터 초기화 선택 시 조회기간과 필터가 모두 초기화됩니다.

**(3) 표 설정**

- 표시되는 항목을 선택하여 항목을 **커스터마이징** 할 수 있습니다.

(관련 이미지 첨부)

- 초기 설정값은 모두 선택사항으로 설정 화면에서 제외할 수 있습니다.
- 초기화를 통해 초기 설정값으로 되돌아갈 수 있습니다.

**(4) 엑셀 다운로드**

- 조회 조건에 해당하는 **전체 데이터를 엑셀로 다운로드**할 수 있습니다.

**(5) 테이블 조회**

- 일별 합계 (해당 날짜에 대한 상점아이디, PG 고객 식별아이디의 전체 합계)
  - 합계 내 PG 고객 식별 아이디로 상세 조회 가능

- 개별 항목
  - 거래내역 - 거래일, 대사상태(대사일치, 불일치, 불능, 수집이전거래건), 상점아이디,
    PG 고객 식별아이디&결제대행사, 거래건수, 거래금액, 취소건수, 취소금액, 거래 이상 건수, 거래 이상 금액

- 조회일자가 같고, 통화가 다를 경우 다음 열에 표시됩니다.

- 참고 사항
  - 수집이전 거래건 : 오래된 거래건이 늦게 정산되어, PG사에서 수집 가능한 거래정보가 없는 경우에 해당합니다.
    정산정보 외에 일부 거래정보가 누락되어 있을 수 있습니다.

#### 1.2 정산 내역

(관련 이미지 첨부)

**(1) 요약대시보드**

- 설정한 조건으로 조회한 거래 결과의 요약을 확인할 수 있습니다.
- 총 정산과 정산금액 : 설정한 조건으로 조회한 총 정산 건수와 정산 금액을 확인할 수 있습니다.

**(2) 필터**

- PG 고객식별아이디와 상점아이디로 적용 가능 (복수 선택 가능)
- 필터 초기화 선택 시 조회기간과 필터가 모두 초기화됩니다.

**(3) 표 설정**

- 표시되는 항목을 선택하여 항목을 **커스터마이징** 할 수 있습니다.

(관련 이미지 첨부)

- 초기 설정값은 모두 선택사항으로 설정 화면에서 제외할 수 있습니다.
- 초기화를 통해 초기 설정값으로 되돌아갈 수 있습니다.

**(4) 엑셀 다운로드**  조회 조건에 해당하는 **전체 데이터를 엑셀로 다운로드**할 수 있습니다.

**(5) 테이블 조회**

- 일별 합계 (해당 날짜에 대한 상점아이디, PG 고객 식별아이디의 전체 합계)
  - 선택하여 합계 내 PG 고객 식별 아이디로 상세 조회 가능
  - 정산내역 - 정산일, 상점아이디, PG 고객식별아이디&결제대행사, 정산건수, 정산금액, 취소건수, 취소금액, 거래금액, PG 수수료, PG 수수료 부가세

- 조회일자가 같고, 통화가 다를 경우 다음 열에 표시됩니다.

### 2. 거래 건별조회

고객사 거래정산데이터 상세내역을 확인할 수 있습니다.

- 조회 기간으로 기본 조회 후, 조회기간 내 상점아이디와 PG 고객 식별아이디, 대사상태, 거래상태(승인, 부분취소, 취소, 기타 취소)값으로 필터링 가능합니다.
  - 아무 것도 선택하지 않았을 경우 이번달 1일부터 어제까지의 기간이 선택됩니다.

- 기타 취소는 식별할 수 없는 취소건(unclassified cancel) 에 해당합니다.

(관련 이미지 첨부)

**(1) 검색**

- 설정한 조건에 해당하는 **조회 리스트**에서, 검색명과 정확히 일치하는 내역을 확인할 수 있습니다.
  - 주문명 검색
  - PG 거래 번호
  - 고객사 거래 번호
  - 포트원 거래 번호

- 참고 사항 : 유사 검색 기능은 지원되지 않습니다.
  ex) “포트원”을 검색하기 위해 “포트”를 검색하여도 “포트원”이 조회되지 않습니다.

**(2) 요약대시보드**

- 설정한 조건으로 조회한 거래 결과의 요약을 확인할 수 있습니다.

- 총 거래금액 : 설정한 조건으로 조회한 총 거래 금액을 확인할 수 있습니다.

- 총 거래 이상 금액 : 설정한 조건으로 조회한 총 거래 이상 금액을 확인할 수 있습니다.
  - 거래이상금액 : PG사 결제 금액과 고객사가 포트원에 연동한 주문금액을 비교했을 때 불일치하거나,
    PG사와 고객사 정보 어느 한 쪽이 없어서 비교할 수 없는 경우의 금액의 합계

**(3) 조회기준일**

- 거래일/정산일 을 선택할 수 있습니다.

**(4) 필터**

- 대사상태, 거래 구분, 거래 유형, PG 고객식별아이디와 상점아이디 적용 가능 (복수 선택 가능)
- 필터 초기화 선택 시 조회기간과 필터가 모두 초기화됩니다.
- 대사 상태 - “대사 불일치” 상태값의 종류

| 사유          | 설명                                                           | 비고                                                                                          |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 결제 금액 불일치   | 두 원장의 결제 금액이 불일치합니다.                                         | 금액 차이가 있으면 무조건 불일치로 표시                                                                      |
| 면세 금액 불일치   | 두 원장의 면세금액이 불일치합니다.                                          | 금액 차이가 있으면 무조건 불일치로 표시                                                                      |
| 부가세 금액 불일치  | 두 원장의 부가세 금액이 불일치합니다.                                        | 금액 차이가 있으면 무조건 불일치로 표시                                                                      |
| 에스크로 여부 불일치 | 두 원장에서 에스크로(안전결제)여부가 불일치합니다.                                 | Y/N 다르면 불일치 표시                                                                              |
| 할부 개월 수 불일치 | 두 원장의 카드 할부개월 수가 불일치합니다.                                     | 할부개월수 다르면 불일치 표시                                                                            |
| 결제일자 불일치    | 두 원장의 결제일시가 불일치합니다. 시스템으로 인해 차이날 수 있는 근소한 차이의 경우는 일치로 처리합니다. | 두 원장의 결제일시가 다른 일자에 일어나면 불일치 표시 (자정 기점으로 PG와 포트원간의 전송시간에 의해 거래일자가 변경되는 경우도 다른 일자일 경우 불일치 표시) |

**(5) 표 설정** 표시되는 항목을 선택하여 항목을 **커스터마이징** 할 수 있습니다.

(관련 이미지 첨부)

- 초기 설정값은 모두 선택사항으로 설정 화면에서 제외할 수 있습니다.
- 초기화를 통해 초기 설정값으로 되돌아갈 수 있습니다.

**(6) 엑셀 다운로드**

- 조회 조건에 해당하는 **전체 데이터를 엑셀로 다운로드**할 수 있습니다.

**(7) 테이블 조회**

- 조회조건 반영
  - 거래정산내역에서 검색을 원하는 리스트를 선택하여 거래건별조회로 진입했을 경우 해당 조건으로 조회된 결과가 보여집니다.
    - 조회기준일, 조회기간, 필터가 반영됩니다.

  - 사이드바 메뉴에서 직접 선택하여 거래건별조회로 진입했을 경우 이번달 1일부터 어제까지의 모든 데이터가 조회됩니다.

- 개별 항목
  - 거래일, 대사상태(대사일치, 불일치, 불능, 수집이전거래건), 상점아이디, PG 고객 식별아이디&결제대행사, 고객사 결제번호(주문번호), PG 결제번호, 포트원 결제번호, 주문명, 거래유형, 거래금액, 공급가액, 면세가액, 부가세, PG수수료, PG수수료 부가세, 정산금액, 거래 이상 금액, 에스크로

**(8) 거래유형 상세정보**

- 거래 유형에 마우스오버시 카드 형태로 상세 정보가 보여집니다.

| 거래유형   | 상세내용                        |
| ------ | --------------------------- |
| 카드     | 발급사, 매입사, 카드 승인번호, 카드 할부개월수 |
| 상품권    | 타입, 승인번호                    |
| 계좌이체   | 은행이름, 승인번호                  |
| 가상계좌   | 은행이름, 승인번호                  |
| 간편결제   | 간편결제사 이름                    |
| 모바일 결제 | 통신사                         |
| 기타     | 기타                          |

## 수식 설명

| 금액           | 공식                                                                             |
| ------------ | ------------------------------------------------------------------------------ |
| 정산건수         | 조회기간내 (승인 건수 - (취소) - (부분 취소)) + 기타정산건(수집이전거래건수; 승인과 취소, 부분 취소 데이터가 없는 정산 데이터) |
| 정산금액         | 조회기간 내 (승인금액 - (취소 금액) - (부분 취소 금액) - (수수료) - 수수료 VAT)                         |
| 거래 건수        | 조회기간 내 (승인) 건수                                                                 |
| 거래 금액        | 조회기간 내 승인 금액                                                                   |
| 취소 건수        | 조회기간내 (취소) + (부분취소) + (기타취소) 건수                                                |
| 취소 금액        | 조회기간 내 (취소 금액) + (부분취소) + (기타취소) 금액                                            |
| 공급가액         | 거래금액-(할인금액)-(면세가액)-(부가세)                                                       |
| 과세사업자 면세가액=0 |                                                                                |
| 부가세          | (거래금액-면세가액)/11 후 반올림                                                           |
| 과세사업자 면세가액=0 |                                                                                |
| 거래 이상금액      | 거래불일치 금액 절대값 + 거래대사 불능금액                                                       |
| PG 수수료 부가세   | PG사에서 값을 주지 않을 경우 PG수수료/10 후 반올림                                               |

## FAQ

- 데이터는 전체 기간 조회 가능한가요?
  - 최대 3개월까지 조회가능합니다.

- 여러 PG사의 데이터를 통합할 때, 각 PG사별 특성이나 차이점을 어떻게 반영하나요?
  - PG사 데이터를 모두 확인할 수 있는 통합 인터페이스를 만들었고, 공통으로 가져올 수 있는 값들을 기본값으로 반영하고,
    PG사에 따라 제공하는 값들은 있는 경우 제공하고 있습니다.

- 거래대사 작업 후 불일치하는 데이터가 발견될 경우, 어떤 프로세스로 해결하나요?
  - 고객사가 인지할 수 있도록 어떤 건이 있는지, 총액은 얼마인지, 어디의 불일치인지 알려줍니다.
    재무데이터를 임의로 수정하는 것은 서비스 제공사가 할 수 있는 일이 아닙니다.

- 실시간 데이터 업데이트가 가능한가요? 아니면 일별 업데이트인가요?
  - 전날 기준 거래, 정산데이터를 가져와서 매일 업데이트합니다.

- 복합 결제(예: 신용카드+포인트)의 경우, 데이터 처리는 어떻게 이루어지나요?
  - 별도로 구분되지 않고 간편결제로 표시됩니다.

- 환불, 부분 취소 등의 예외 케이스는 어떻게 처리되나요?
  - 거래 상태값에 부분취소, 취소가 있습니다.

- 다국어 및 다중 통화 지원 계획은 어떻게 되나요?
  - 데이터에 있으면 모든 통화를 보여줍니다.

- 누락 시 대응 계획은 무엇인가요?
  - 데이터 수집시 PG사에 데이터가 없거나, 타임 아웃 등으로 누락이 일어나면 포트원에서 자동으로 파악이
    가능하여 개발팀이 확인하고 다시 수집합니다.


# https://developers.portone.io/opi/ko/support/contact

---
title: 직접 문의하기
description: 기술지원 문의를 위한 연락처 정보입니다.
targetVersions:
  - v1
  - v2
---

포트원 결제 연동 및 운영 과정에서 기술적인 어려움을 겪고 있다면, 아래 메일로 문의하세요.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- V1: <support@portone.io>
- V2: <tech.support@portone.io>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- V2: <tech.support@portone.io>
- V1: <support@portone.io>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/support/tls-support

---
title: TLS 지원 범위
description: 포트원 v1 API의 TLS 지원 범위 및 설정 가이드를 확인할 수 있습니다.
---

2024년 9월 1일부터 포트원을 이용하는 고객님들의 개인정보 및 결제정보를 더욱 안전하게 보호하기 위해
v1 API 서버(api.iamport.kr)의 TLS 버전 및 Cipher Suite 지원 범위가 변경됩니다.

## 변경사항 요약

- HTTP 평문 통신에 대한 지원이 중단됩니다.
- TLS 1.0, 1.1 버전에 대한 지원이 중단됩니다.
- 보안성이 떨어지는 일부 Legacy Cipher Suite 들에 대한 지원이 중단됩니다.

Protocol
Cipher Suite
2024-09-01 전
2024-09-01 이후

HTTP
N/A
O
X

TLSv1.0
(omitted)

TLSv1.1
(omitted)

TLSv1.2
AES256-SHA
O
X

AES128-SHA
AES128-GCM-SHA256
AES128-SHA256
AES256-GCM-SHA384
AES256-SHA256
ECDHE-ECDSA-AES128-SHA
ECDHE-RSA-AES128-SHA
ECDHE-RSA-AES256-SHA
ECDHE-ECDSA-AES256-SHA

ECDHE-ECDSA-AES128-SHA256
O
O

ECDHE-RSA-AES128-SHA256
ECDHE-ECDSA-AES256-SHA384
ECDHE-RSA-AES256-SHA384
ECDHE-ECDSA-AES128-GCM-SHA256
ECDHE-RSA-AES128-GCM-SHA256
ECDHE-ECDSA-AES256-GCM-SHA384
ECDHE-RSA-AES256-GCM-SHA384

TLSv1.3
TLS-AES-128-GCM-SHA256
O
O

TLS-AES-256-GCM-SHA384
TLS-CHACHA20-POLY1305-SHA256

<details>

<summary>

HTTP 평문 통신 지원을 중단하는 이유

</summary>

TLS를 이용하지 않는 평문 HTTP 통신은 데이터를 암호화하지 않고 평문 상태로 전송하기 때문에 다양한
종류의 공격에 몹시 취약합니다. 먼저 별도의 암호화가 없기 때문에 모든 종류의 [도청]과
[스니핑 공격]에 의해 API 키나 민감한 고객정보가 공격자에게 쉽게 노출될 수 있습니다.
뿐만 아니라 [DNS spoofing]이나 [ARP spoofing]과 같은 [Active MITM 공격][MITM]을 통해
공격자가 결제 API 요청이나 응답을 변조하는 것까지도 가능하기 때문에, 정보 유출뿐 아니라
결제금액을 위조하거나 결제상품, 결제사용자를 바꿔치기하는 유형의 공격도 가능합니다.

따라서 암호화되지 않은 평문 HTTP 통신을 실제 운영환경에서 사용하여선 절대 안 됩니다. 포트원 v1
API를 평문 HTTP 통신으로 호출하고 계시는 고객님께선 즉시 API endpoint를 <http://api.iamport.kr> 에서
<https://api.iamport.kr> 로 바꿔주셔서, TLS를 활성화시켜주셔야만 합니다.

[도청]: https://en.wikipedia.org/wiki/Network_eavesdropping

[스니핑 공격]: https://en.wikipedia.org/wiki/Sniffing_attack

[DNS spoofing]: https://en.wikipedia.org/wiki/DNS_spoofing

[ARP spoofing]: https://en.wikipedia.org/wiki/ARP_spoofing

[MITM]: https://en.wikipedia.org/wiki/Man-in-the-middle_attack

</details>

<details>

<summary>

TLS 1.0, 1.1 지원을 중단하는 이유

</summary>

TLS 1.0과 1.1은 각각 1999년, 2006년에 공개된 보안 표준으로, [POODLE]이나 [BEAST]와 같은 널리
알려진 여러 공격들에 취약합니다. 국제 인터넷 표준화 기구인 IETF는 2021-03-23 [RFC 8996]를 통해
TLS 1.0과 1.1을 deprecate 시켰으며, AWS, Google[^tls-1.0-chrome], Apple, Microsoft 등 많은 국제 기업들이 자사 제품
및 API 이용 시 TLS 1.2 미만 버전에 대해 제한을 두고 있습니다.[^tls-1.0-browsers] TLS 1.0 및 1.1에 존재하는 문제
및 취약점들은 아래와 같습니다.

[POODLE]: https://en.wikipedia.org/wiki/POODLE

[BEAST]: https://en.wikipedia.org/wiki/Transport_Layer_Security#BEAST_attack

[RFC 8996]: https://www.rfc-editor.org/rfc/rfc8996.html

1. [BEAST] (Browser Exploit Against SSL/TLS) 공격

   [BEAST] 공격은 [중간자 공격][MITM]을 동반하는 공격으로, TLS 1.1 미만 버전에 적용 가능합니다.

   1.1 버전 미만의 TLS는 [스트림 암호] 대신 [블록 암호]를 사용할경우, [Mode of operation]으로
   무조건 [CBC]를 사용해야만 했습니다. [CBC] 모드는 예측 가능한 [IV]를 사용할 경우
   Chosen-plaintext attack에 취약해진다는 문제를 갖고있는데, TLS 1.0은 이후 버전들과는 다르게
   항상 이전 블록의 암호화 결과를 사용하도록 만들어져있어, IV의 예측이 가능했고, HTTP는 특성상
   헤더 부분의 정보 엔트로피가 낮아 공격자가 높은 확률로 암호문을 복호화하는데에 성공할 수
   있었습니다.

   [0/n split, 1/n-1 split]과 같은 취약점 우회수단이 몇가지 존재하나 이는 클라이언트측에서만
   적용할 수 있는 우회수단이고, TLS 1.0을 사용하면서 서버측에서 BEAST 취약점을 우회하려면
   [블록 암호] 자체를 사용하지 않아야 합니다. 문제는 TLS 1.0에서 블록 암호를 비활성화할 경우 사용할 수
   있는 남은 유일한 암호화 수단은 더더욱 취약한것으로 알려진 [RC4] 뿐이기 때문에, 결론적으로 TLS
   1.0은 사용하지 않아야 합니다.

   TLS 1.2는 AES [GCM]과 같은 [AEAD] 지원, [ChaCha20]과 같은 안전한 [스트림 암호] 지원을 통해 이
   문제를 해결하였습니다.

   [스트림 암호]: https://en.wikipedia.org/wiki/Stream_cipher

   [블록 암호]: https://en.wikipedia.org/wiki/Block_cipher

   [Mode of operation]: https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation

   [CBC]: https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_block_chaining_\(CBC\)

   [IV]: https://en.wikipedia.org/wiki/Initialization_vector

   [0/n split, 1/n-1 split]: https://www.cryptologie.net/article/378/1n-1-split-to-circumvent-beast/

   [RC4]: https://en.wikipedia.org/wiki/RC4

   [GCM]: https://en.wikipedia.org/wiki/Galois/Counter_Mode

   [AEAD]: https://en.wikipedia.org/wiki/Authenticated_encryption

   [ChaCha20]: https://en.wikipedia.org/wiki/Salsa20#ChaCha_variant

2. 약한 해시 함수 사용

   TLS 1.2 이후 버전과는 달리, TLS 1.0과 1.1은 [cryptographic hash function]이 필요한 곳에 무조건
   [MD5]나 [SHA-1]과 같이 오래되고 약한 해시함수를 쓰도록 정해져있습니다. [MD5], [SHA-1] 모두
   지금은 상당히 낮은 비용의 [chosen-prefix collision attack]이 발견되어서[^sha-1-collision],
   [HMAC] 이외의 용도로는 사용하지 말아야합니다. 따라서 TLS 1.2 미만 버전은 사용하지
   않아야합니다.

   [cryptographic hash function]: https://en.wikipedia.org/wiki/Cryptographic_hash_function

   [MD5]: https://en.wikipedia.org/wiki/MD5

   [SHA-1]: https://en.wikipedia.org/wiki/SHA-1

   [chosen-prefix collision attack]: https://en.wikipedia.org/wiki/Collision_attack#Chosen-prefix_collision_attack

   [HMAC]: https://en.wikipedia.org/wiki/HMAC

</details>

<details>

<summary>

일부 Legacy Cipher Suite 들에 대한 지원을 중단하는 이유

</summary>

Cipher Suite란 TLS 통신시 사용되는 암호 알고리즘의 집합을 의미합니다. TLS 1.2는 다양한 Cipher
Suite들을 지원하지만 이들 모두가 안전한 것은 아닙니다. 포트원은 아래 기준을 모두 충족하는 안전한
Cipher Suite들만을 지원하도록 정책을 변경하였습니다.

- [완전 순방향 비밀성(Perfect Forward Secrecy)][PFS]을 보장할 것

  TLS 통신 중 잠재적으로 발생할 수 있는 위험 요소 중 하나는, 키교환 알고리즘에 의해 생성된
  세션키가 유출되었을 때 해당 세션키의 수명이 일시적이지 않다면 과거 세션에서 주고받았던
  데이터들까지 모두 해독될 수 있다는 것입니다. [완전 순방향 비밀성][PFS]을 보장한다는 것은 매
  세션마다 새로운 키를 생성함으로써 키가 유출되더라도 과거의 통신이 해독되는 것을 막는 것입니다.
  완전 순방향 비밀성이 보장될 경우, TLS 프로토콜에 새로운 취약점이 발견되어 통신이 복호화당하는
  사태가 발생하더라도, 공격자에게 노출하는 기밀의 범위를 크게 줄일 수 있습니다.

- [MD5], [SHA-1] 등 약한 해시 함수를 쓰지 않을 것

- [RC4], 3DES 등 약한 암호화 알고리즘을 사용하지 않을 것, 국제표준 암호화 알고리즘만을 사용할 것

[PFS]: https://en.wikipedia.org/wiki/Forward_secrecy

</details>

---

## TLS 버전 및 Cipher Suite 업그레이드 가이드

포트원은 TLS 1.3 으로의 업그레이드를 권장합니다.

### Java 6

Java 6은 기본적으로 TLS 1.2를 지원하지 않습니다.

(이미지 첨부: 출처: https\://www\.ateam-oracle.com/post/transport-level-security-tls-and-java)

JDK 6u121 버전부터는 TLS 1.2를 지원하지만 default TLS 버전은 여전히 1.0일뿐더러 Java 6의 JCE(Java
Cryptography Extension) Provider가 타원곡선 암호화 알고리즘을 지원하지 않기때문에 [완전 순방향
비밀성][PFS]이 보장되지 않아 여전히 Legacy Cipher Suite를 써야합니다.

따라서, Java 6에서 TLS 통신을 안전하게 하려면 아래 두 방법 중 하나를 택해야 합니다.

<details>

<summary>

JDK 8u261 이상으로 버전 업그레이드

</summary>

가장 바람직한 방법은 공식 지원이 이미 종료된 Java 6의 사용을 멈추고, Java 8 이상의 버전으로
업그레이드하는 것입니다. Java 8 부터 기본 TLS 버전이 1.2이고, JDK 8u261 이상부터는 TLS 1.3 통신을
지원하기때문에 TLS 통신을 안전하게 할 수 있습니다.

Java 7의 경우, Java 6과 마찬가지로 보안 업데이트가 중단된 상태이고 기본으로 TLS 1.0을 사용하기
때문에 Java 7로의 업그레이드는 권장하지 않습니다.

</details>

<details>

<summary>

서드파티 라이브러리를 통한 TLS 버전 업데이트

</summary>

자바 업그레이드가 곤란할 경우, 서드파티 라이브러리를 사용해 TLS 버전을 업그레이드할 수 있습니다.

TLS 1.2 및 [완전 순방향 비밀성][PFS]를 지원하는 서드파티 JCE(Java Cryptography Extension) 및
JSSE(Java Secure Socket Extension) 구현체를 설치할 경우, 자바 업그레이드 없이 TLS 통신을 안전하게
할 수 있습니다.

본 가이드에서는 [Bouncy Castle]이라는 오픈소스 라이브러리를 이용한 예시를 설명합니다.

1. [Bouncy Castle] 홈페이지에서 아래의 세 파일을 다운받습니다.

   - bcprov-jdk15to18-_VERSION_.jar
   - bctls-jdk15to18-_VERSION_.jar
   - bcutil-jdk15to18-_VERSION_.jar

2. 세 jar 파일을 `${JAVA_HOME}/jre/lib/ext` 디렉토리에 복사합니다.

3. `${JAVA_HOME}/jre/lib/security` 디렉토리의 "java.security" 파일을 아래와 같이 수정합니다.



4. 오라클이 배포하는 "[jce\_policy-6.zip][jce_policy-6.zip]" 파일을 다운로드 받습니다.

5. 압축을 푼 후 "US\_export\_policy.jar", "local\_policy.jar" 두 파일을 \
   `${JAVA_HOME}/jre/lib/security` 디렉토리 내에 덮어씌웁니다.

[Bouncy Castle]: https://www.bouncycastle.org/latest_releases.html

[jce_policy-6.zip]: https://www.oracle.com/java/technologies/jce-6-download.html

</details>

### Java 7

Java 7의 경우 TLS 1.2를 지원하기는 하나 default TLS 버전은 여전히 1.0입니다.

(이미지 첨부: 출처: https\://www\.ateam-oracle.com/post/transport-level-security-tls-and-java)

뿐만 아니라 JDK 버전에 따라 포트원에서 허용하는 Cipher Suite 조건인 "Forward secrecy 지원"과 "SHA-1 미사용"을 만족하는
Cipher Suite를 지원하지 않기도 합니다.
본 가이드에서는 Java 7에서 포트원 보안 규격에 맞는 TLS 버전 및 Cipher suite 설정에 대한 방법 3가지를 제공합니다.

<details>

<summary>

JDK 8u261 이상으로 버전 업그레이드

</summary>

가장 바람직한 방법은 공식 지원이 이미 종료된 Java 7의 사용을 멈추고, Java 8 이상의 버전으로
업그레이드하는 것입니다. Java 8 부터 기본 TLS 버전이 1.2이고, JDK 8u261 이상부터는 TLS 1.3 통신을
지원하기때문에 TLS 통신을 안전하게 할 수 있습니다.

</details>

<details>

<summary>

JDK 7u321 이상으로 버전 업그레이드, 1.2 사용 설정

</summary>

JDK 7u321 버전부터 기본 Cipher Suite가 [완전 순방향 비밀성][PFS]을 지원하고 [SHA-1] 등 약한 해시를
사용하지 않는것으로 변경되었습니다. 따라서 JDK 7u321 이상으로 업그레이드 할 경우, 기본 TLS 버전
수정을 제외한 별도의 설정이 필요하지 않습니다. JDK 7u321 미만의 버전을 사용할 경우, 최소한 JDK
7u191 이상의 버전을 사용해야 안전한 Cipher Suite들을 사용할 수 있습니다.

JDK 버전업이 완료되었다면, 아래 두 방법 중 하나를 골라 기본 TLS 버전을 1.0에서 1.2로 올려야 합니다.

1. System property

   Java 애플리케이션 구동 시 아래와 같은 system property 설정을 추가하면, 기본 TLS 버전이 1.2로
   변경됩니다.

   ```bash
   java -Djdk.tls.client.protocols="TLSv1.2" ...
   ```

   코드에 강제로 TLS 1.2 이외의 버전을 사용하도록 하는 코드가 있을 경우, 에러가 발생할 수
   있습니다.

2. Socket client의 TLS 버전 지정

   아래와 같이 자바 코드수준에서도 TLS socket client가 사용할 TLS 버전을 직접 지정해줄 수
   있습니다.

   ```java
   // SSLSocket, SSLEngine, SSLServerSocket API를 사용하는 경우
   sslSocket.setEnabledProtocols(new String[] {"TLSv1.2"});

   // SSLContext 생성자를 사용하는 경우
   SSLContext ctx = SSLContext.getInstance("TLSv1.2");

   // SSLParameters API를 사용하는 경우
   sslParameters.setProtocols(new String[] {"TLSv1.2"});
   ```

</details>

<details>

<summary>

서드파티 라이브러리를 통한 TLS 버전 업데이트

</summary>

Java 6 가이드와 마찬가지 방법으로 서드파티 라이브러리를 통해 TLS 버전을 업데이트할 수 있습니다.

</details>

---

[^tls-1.0-chrome]: ["TLS 1.0 and TLS 1.1 - Chrome Platform Status"](https://chromestatus.com/feature/5759116003770368). chromestatus.com. Retrieved 2024-03-25.

[^tls-1.0-browsers]: Bright, Peter (2018-10-17). ["Apple, Google, Microsoft, and Mozilla come together to end TLS 1.0"](https://arstechnica.com/gadgets/2018/10/browser-vendors-unite-to-end-support-for-20-year-old-tls-1-0/). Retrieved 2024-03-25.

[^sha-1-collision]: Gaëtan Leurent; Thomas Peyrin (2020-01-05). ["SHA-1 is a Shambles - First Chosen-Prefix Collision on SHA-1 and Application to the PGP Web of Trust"](https://eprint.iacr.org/2020/014.pdf) (PDF).


# https://developers.portone.io/opi/ko/console/guide/account

---
title: 상점 계정 관리
description: >-
  포트원 콘솔에서 하위 상점을 생성하여 상점별로 결제 거래 건을 분리하여 관리할 수 있으며, 해당 상점을 관리할 수 있는 계정을 별도로
  생성하여 권한을 나눌 수 있습니다. 이에 대해 안내합니다.
---

## 포트원 관리자콘솔 계정 체계

- 최고 관리자 계정 (Owner): 관리자 콘솔 가입시 회원가입한 계정을 고객사를 대표하는
  관리자 계정으로 칭합니다. 해당 계정은 모든 기능을 사용할 수 있습니다.
  - 하위 상점 및 하위 계정 생성이 가능합니다.
  - 긴급 연락처 관리, 사업자 정보 등록이 가능합니다.
  - 해당 계정을 **탈퇴하는 경우** 고객 정보와 종속되어 있는 하위 상점 및 하위 계정이 모두 삭제됩니다.

- 관리자 계정 (Admin) : Owner가 생성할 수 있으며, 모든 기능을 사용할 수 있습니다.
  - 상점 당 1개만 생성가능합니다.
  - 하위 상점 및 하위 계정 생성이 가능합니다.
  - 긴급 연락처 관리, 사업자 정보 등록이 가능합니다.

- 고객사 매니저 계정 (Manager) : Owner 또는 Admin이 생성할 수 있습니다.
  - 상점 계정 관리 및 결제 연동은 조회만 가능합니다.
  - 나머지 관리자콘솔 기능은 사용할 수 있습니다.
  - 해당 권한으로 계정 생성 개수 제한이 없습니다.

- 고객사 개발 계정 (Dev):  Owner 또는 Admin이 생성할 수 있습니다.
  - 결제 연동 기능만 사용이 가능하며, 상점 계정 관리는 조회만 가능합니다.
  - 이 외의 관리자콘솔 기능은 사용할 수 없습니다.
  - 해당 권한으로 계정 생성은 10개까지 가능합니다.

- 고객사 조회 계정 (Read Only) : Owner 또는 Admin 또는 Manager가 생성할 수 있습니다.
  - 해당 계정은 모든 기능의 조회만 가능합니다.
  - 엑셀 다운로드 권한은 별로도 설정할 수 있습니다.

- 하위 상점 매니저 계정(Manager) : Owner 또는 Admin 또는 하위 상점의 Manager가 생성할 수 있습니다.
  - 해당 계정은 소속된 하위 상점의 모든 기능을 사용할 수 있습니다.
  - 상점 계정 관리 및 사업자 정보를 조회할 수 있습니다.

- 하위 상점 조회 계정(Read Only) : Owner 또는 Admin 또는 하위 상점의 Manager가 생성할 수 있습니다.
  - 해당 계정은 소속된 하위 상점의 모든 기능에 대해 조회만 가능합니다.

## 관리자 계정 관리

_파란색 부분은 사용 가능한 버튼 표기입니다_

(이미지 첨부: 관리자 계정 시점)

(이미지 첨부: 그 외 계정 시점)

- 관리자 계정은 해당 화면에서 고객사에 소속된 계정들을 신규 생성, 발급, 역할 및 정보 수정, 삭제 하실 수 있습니다.
- 나머지 계정은 해당 화면을 통해 고객사에 소속된 계정들을 조회하실 수 있습니다.

![](</gitbook-assets/ko/image (175).png>) ![](</gitbook-assets/ko/image (126).png>)

## 고객사, 하위 상점 체계

- 고객사: 포트원에서 고객사이란 고유한 사업자등록번호를 가지고있는 사업체로 정의합니다.
  유일한 예외는 타 고객사들을 위해 결제를 개발해주시는 에이전시 뿐 입니다.

- 하위상점: 고객사는 서비스 및 상품군 별, 지역별, 등등 사업을 나누어 관리자 콘솔로 관리하고
  결제를 연동할 수 있습니다. 해당사항으로 나뉘는 단위를 하위상점으로 정의합니다.
  - 결제 연동: 고객사가 신청한 결제수단 및 대행사를 특정 하위상점에 관리자 콘솔에서 할당할 수 있습니다.
  - 하위상점 계정: 하위상점에 소속된 계정은 하위상점관련된 기능 및 결제건만 확인 하실 수 있습니다.

## 하위 상점 관리

### 고객사 관리자 계정 시점

(이미지 첨부: 고객사 관리자 계정 계정 시점)

- 고객사 관리자 계정은 하위상점을 추가, 수정 할 수 있으며 해당 하위상점의 소속된 계정을 생성, 수정, 삭제 하실 수 있으십니다.

#### 하위상점 추가 및 수정

![](</gitbook-assets/ko/image (237).png>) ![](</gitbook-assets/ko/image (200).png>)

- 상점 명 입력, 사용할 결제채널 선택, 서비스 url 입력, 담당자 정보 입력, 티어코드 입력 후 하위상점을 추가하실 수 있습니다
  - 사용할 결제 채널은 전자결제 신청하기를 통해서 발급되고 연동에서 관리중인 고객사의 결제채널을 할당 해 줄 수 있습니다.
  - 타 하위상점에게 이미 할당된 결제 채널은 중복 할당할 수 없습니다.
  - 티어코드는 하위상점 url에서 포트원 결제 sdk 호출시 import.agency(‘티어코드’)로 결제를 호출 하실 수 있습니다.

#### 하위계정 추가

![](</gitbook-assets/ko/image (267).png>) ![](</gitbook-assets/ko/image (173).png>)

- 계정 아이디, 역할 (Manager, Read Only), 메모를 입력하신 뒤 하위계정을 생성 하실 수 있습니다.

### 그 외 계정 시점

(이미지 첨부: 관리자 계정 외 고객사 계정 시점)

(이미지 첨부: 하위 상점 매니저 계정 시점)

(이미지 첨부: 매니저 계정 외 하위 상점 계정 시점)

## 하위상점별 웹훅 설정&#x20;

하위상점 수정에서 결제알림 동일 설정 옵션을 해제하면 하위상점별 웹훅 설정을 할 수 있습니다.

1. 상점/계정 관리에서 하위상점 관리 > 별도로 웹훅을 설정할 하위상점 선택
2. 하위상점 수정에서 `결제알림은 대표 상점과 동일하게 설정할게요` 체크박스 해제
3. 결제 연동에서 별도로 웹훅을 설정할 하위상점으로 변경
4. 결제알림(Webhook) 관리 탭에서 설정

(관련 이미지 첨부)

하단의 결제알림 동일설정 체크박스를 해제해주세요

(관련 이미지 첨부)

웹훅 연동을 원하시는 하위상점을 선택한 뒤 결제알림 관리 탭에서 웹훅을 수정해주세요.


# https://developers.portone.io/opi/ko/console/guide/billing-payments

---
title: 빌링결제 내역 조회
description: >-
  포트원을 통해 발생한 빌링키 결제 내역을 상태별로 조회하고 결제 예약일 변경, 예약 해지, 결제 재시도, 결제 재예약 기능을 이용하여 빌링
  결제 건을 관리할 수 있으며, 결제 실패 건에 대한 일괄 재시도를 자동화해주는 리커버리 기능에 대해 안내합니다.
targetVersions:
  - v1
  - v2
---

<div class="hint" data-style="info">

빌링결제 상세 내역 조회 및 캘린더의 경우 상점별로 데이터가 표시됩니다.
하위상점을 생성하여 사용하시는 경우 오른쪽 상단의 상점을 선택하여 해당 상점의 데이터를 확인할 수 있습니다.

</div>

## 상세 내역 조회

(이미지 첨부: \[결제] - \[빌링결제 내역 조회] 예시 화면)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

발급한 빌링키를 이용하여 [비 인증 결제(빌링키) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)
혹은 [결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule)로
시도된 거래 건을 상태별로 조회할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

발급한 빌링키를 이용하여 [빌링키 결제 API](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Fbilling-key)
혹은 [결제 예약 API](https://developers.portone.io/api/rest-v2/payment.paymentSchedule#post%20%2Fpayments%2F%7BpaymentId%7D%2Fschedule)로
시도된 거래 건을 상태별로 조회할 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 조회 기준

- **상태별 최종 업데이트 일시**(default) : 예약, 성공, 실패, 해지 상태 건에 대해 최종 업데이트 일시를 기준으로 조회합니다.
  (결제 예약건의 경우 예약 예정 시각을 기준으로 조회됩니다.)

- **빌링결제 등록 일시** : 예약결제의 경우 예약건이 등록된 일시를 기준으로,
  빌링키 일회성 결제 건의 경우 결제를 시도한 일시를 기준으로 조회합니다.

- **오늘** : 오늘 00시 00분 00초부터 23시 59분 59초로 설정됩니다.

- **최근7일** : 오늘을 기준으로 D-7일로 설정됩니다.

- **이번 달** : 이번달 1일부터 말일까지로 설정됩니다.

- **올해** : 올해 1월 1일부터 12월 31일까지로 설정됩니다.

### 필터

필터에 따라 빌링 결제 내역을 필터링하여 조회할 수 있습니다. 필터는 결제대행사에 따라 다중 선택할 수 있습니다.

#### 결제대행사

- **전체** : 모든 결제대행사의 거래를 조회합니다.

- 결제대행사 필터는 하나의 결제대행사에 모든 `pg_provider`가 포함됩니다.
  - KG이니시스 : inicis, html5\_inicis, inicis\_v2
  - 나이스페이먼츠 : nice, nice\_v2
  - 페이팔 : paypal, paypal\_v2
  - 스마트로 : smartro, smartro\_v2
  - 토스페이 : tosspay, tosspay\_v2
  - 토스페이먼츠 : uplus, tosspayments

### 내역검색

빌링 결제 정보를 검색하여 거래건을 특정할 수 있습니다.

**빌링결제 아이디** : 빌링결제 아이디(`schedule_id`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

**고객사 거래번호** : 고객사 거래번호(`merchant_uid`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**포트원 빌링키** : 포트원 빌링키(`customer_uid`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 식별 정보** : 고객식별정보 (`customer_id`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 이름** : 고객 이름 (`buyer_name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**상품 이름** : 상품 이름 (`name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

**고객사 거래번호** : 고객사 거래번호(`paymentId`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**포트원 빌링키** : 포트원 빌링키(`billingKey`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 식별 정보** : 고객식별정보 (`customer.id`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 이름**: 고객 이름 (`customer.name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**상품 이름** : 상품 이름 (`orderName`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 리커버리

(이미지 첨부: \[결제] - \[빌링결제 내역 조회] - \[리커버리] 화면 예시)

전날 실패한 모든 빌링결제를 매일 설정한 시간에 자동으로 재시도합니다.
예를 들어 리커버리 시간을 16시로 설정한 경우 매일 16시에 전날 00시\~23시59분까지 발생한 결제 실패 건에 대해
일괄 재시도를 시도합니다. 이 때, 결제 실패된 경우 다음 날 리커버리 항목에 포함되며, 결제 성공 상태가 될 때까지
계속해서 시도합니다.

리커버리 시간 설정은 01시부터 23시까지 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제예약 API(Schedule API)를 이용한 결제 예약 건 중 결제 실패 상태인 거래 건에 한하여 리커버리 기능을 사용할 수 있습니다.
비 인증 결제(빌링키) API(Again API) 건에 대한 리커버리 기능은 상반기 내로 업데이트될 예정입니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

빌링키 결제 API 및 결제 예약 API를 이용한 결제 건 중 결제 실패 상태인 거래 건에 한하여 리커버리 기능을 사용할 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 상태별 상세조회

- **전체** : 모든 빌링 결제 상태의 거래를 조회합니다.
- **예약** : 예약 (status : `Scheduled`) 상태인 거래 건만 표시됩니다.
- **성공** : 결제 대기 (status : `Pending`) 및 결제 성공 (status : `Succeeded`) 상태인 거래 건만 표시됩니다.
- **실패** : 실패 (status : `Failed`) 상태인 거래 건만 표시됩니다.
- **해지** : 해지 (status : `Revoked`) 상태인 거래 건만 표시됩니다.

#### 예약

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제예약 API(Schedule API)를 이용한 결제 예약 건 중 결제 예약 상태인 거래 건입니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

결제 예약 API를 이용한 결제 예약 건 중 결제 예약 상태인 거래 건입니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

예약 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.

해당 모달에서 결제 건의 상세정보, 예약해지 및 변경, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있습니다.

- 예약 해지 변경 카테고리에서는 예약 해지 또는 예약일 변경을 할 수 있습니다.

  <details>

  <summary>예약 상태 건 클릭 시 상세 조회 화면 예시</summary>

  (관련 이미지 첨부)

  </details>

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

#### 성공

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제예약 API(Schedule API)를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되어 결제 성공 상태인 거래 건입니다.
비 인증 결제(빌링키) API(Again API)를 이용한 결제 건 중 정상적으로 결제가 진행되어 결제 성공 상태인 겨래 건입니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

결제 예약 API를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되어 결제 성공 상태인 거래 건입니다.
빌링키 결제 API를 이용한 결제 건 중 정상적으로 결제가 진행되어 결제 성공 상태인 거래 건입니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

성공 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.

해당 모달에서 결제 건의 상세정보, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있으며,
  해당 건의 결제 내역 조회 화면으로 이동할 수 있습니다.

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

#### 실패

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제예약 API(Schedule API)를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되지 못해 결제 실패 상태인 거래 건입니다.
비 인증 결제(빌링키) API(Again API)를 이용한 결제 건 중 정상적으로 결제가 진행되지 못해 결제 실패 상태인 겨래 건입니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

결제 예약 API를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되지 못해 결제 실패 상태인 거래 건입니다.
빌링키 결제 API를 이용한 결제 건 중 정상적으로 결제가 진행되지 못해 결제 실패 상태인 거래 건입니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

빌링 결제 실패는 한도초과, 잔액부족, 정지된 카드, 유효기간 만료 등 사용자 이유
혹은 사용 불가한 빌링키, 올바르지 않은 결제 요청 등의 이유로 발생할 수 있습니다.

실패 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.

해당 모달에서 결제 건의 상세정보, 재시도 재예약, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있습니다.

- 재시도 재예약 카테고리에서는 해당 건을 즉시 재시도하거나 결제를 재예약할 수 있습니다.

  <details>

  <summary>실패 상태 건 클릭 시 상세 조회 화면 예시</summary>

  (관련 이미지 첨부)

  </details>

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

#### 해지

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제예약 API(Schedule API)를 이용한 결제 예약 건 중 예약 해지 상태인 거래 건입니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

결제 예약 API를 이용한 결제 예약 건 중 예약 해지 상태인 거래 건입니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

해지 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.

해당 모달에서 결제 건의 상세정보, 재예약, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있습니다.

- 재예약 카테고리에서는 해당 건을 다시 재예약할 수 있습니다.

  <details>

  <summary>해지 상태 건 클릭 시 상세 조회 화면 예시</summary>

  (관련 이미지 첨부)

  </details>

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

## 빌링결제 캘린더

(이미지 첨부: \[결제] - \[빌링결제 캘린더] 예시 화면)

빌링결제 캘린더에서는 빌링결제 건에 대한 월간/일간 데이터를 확인할 수 있습니다.

### 기준

- 페이지 최초 진입 시 해당 월을 기준으로 데이터가 표시되며, 월을 조정하여
  해당 월의 빌링결제 데이터를 확인할 수 있습니다.

- 기본적으로 거래 **금액**을 기준으로 표시되며, 토글을 클릭하여 **건수**를 기준으로 데이터 확인이 가능합니다.

- 기본적으로 **KRW**를 기준으로 표시되며, 해외 통화 빌링 결제 거래건이 있는 경우 해당 통화를 선택할 수 있으며
  각 통화별 빌링결제 데이터를 확인할 수 있습니다.

- 해당 월의 결제예약 / 결제성공 / 결제실패 / 예약해지 상태별로 거래 금액 혹은 건수 데이터를 확인할 수 있습니다.

- 해당 일의 결제예약 / 결제성공 / 결제실패 / 예약해지 상태별로 거래 금액 혹은 건수 데이터를 확인할 수 있습니다.


# https://developers.portone.io/opi/ko/console/guide/channel-manage

---
title: 연동 정보
description: >-
  포트원 결제 모듈을 사용하기 위한 연동 설정을 관리할 수 있습니다. 결제대행사 채널 관리, 식별코드 및 API Keys, 결제알림(웹훅)
  관리, 추가 설정 관리 방법에 대해 안내합니다. 
targetVersions:
  - v1
  - v2
---

## 채널 관리

포트원 결제 모듈 연동 시 사용할 결제대행사 채널을 추가합니다. 결제대행사 선택 후 결제 모듈에 따라 지원되는 결제 방식 및 결제 수단, 포트원 결제 모듈이 다르므로
고객사에 알맞은 채널을 선택하여 추가해야 합니다.

### 연동 방법

<div class="tabs-container">

<div class="tabs-content" data-title="테스트 연동">

#### 테스트 환경 채널 연동 방법

(관련 이미지 첨부)

1. 연동 모드를 `테스트`로 변경해 주세요.
2. 사용할 `결제대행사`를 선택해 주세요.

(관련 이미지 첨부)

5. 연동할 결제방식 및 결제수단에 따라 `결제 모듈`을 선택해 주세요.
6. `다음` 버튼을 클릭해 주세요.

(관련 이미지 첨부)

5. `채널 이름`은 원하시는 이름으로 입력해 주세요. 채널 이름은 채널 목록에 표시되므로 사용자가 구분할 수 있는 값으로 입력하여 사용해 주세요. ex) KCP 정기결제용
   (공용 테스트 채널이 제공되는 결제대행사의 경우 MID 선택 시 자동으로 표시됩니다.)

6. `채널 속성`은 기본적으로 `결제`가 선택됩니다. 본인인증 용도로 채널을 연동하시는 경우 `본인인증`을 선택해 주세요.

7. 테스트 용도로 발급 받은 `상점 아이디`를 직접 입력하시거나, 제공되는 다른 공용 상점아이디를 선택합니다.

8. 추가로 입력해야 하는 정보는 결제대행사별로 상이하며, 직접 발급받은 테스트 상점아이디를 이용하시는 경우 필수 입력 항목을 확인하여 올바르게 입력해 주세요.

9. `과세구분`을 선택해 주세요. 과세 혹은 면세 설정 시 \[결제사 정산] 메뉴에서 부가세 신고 참고 자료용 데이터에 적용됩니다.

10. `저장`버튼을 눌러 채널을 추가를 완료합니다.

<div class="hint" data-Style="info">

채널 등록 시 결제대행사별 저장하는 파라미터가 다릅니다. 파라미터 정보 확인은 하단의 \[결제대행사 선택하여 연동하기]를 확인해주세요.

</div>

</div>

<div class="tabs-content" data-title="실연동">

#### 운영 환경 채널 연동 방법

(관련 이미지 첨부)

1. 연동 모드를 `실연동`으로 변경해 주세요.
2. 사용할 `결제대행사`를 선택해 주세요.

(관련 이미지 첨부)

3. 연동할 결제방식 및 결제수단에 따라 `결제 모듈`을 선택해 주세요.
4. `다음` 버튼을 클릭해 주세요.

(관련 이미지 첨부)

5. `채널 이름`은 원하시는 이름으로 입력해 주세요. 채널 이름은 채널 목록에 표시되므로 사용자가 구분할 수 있는 값으로 입력하여 사용해 주세요. ex) KCP 정기결제용
6. `채널 속성`을 선택해 주세요. 기본적으로 `결제`가 선택됩니다. 본인인증 용도로 채널을 연동하시는 경우 `본인인증`을 선택해 주세요.
7. 결제대행사와 계약 후 발급 받은 `상점 아이디`와 추가 정보를 입력해 주세요.
8. `과세구분`을 선택해 주세요. 과세 혹은 면세 설정 시 \[결제사 정산]메뉴에서 부가세 신고 참고 자료용 데이터에 적용됩니다.
9. `저장`버튼을 눌러 채널을 추가를 완료합니다.

<div class="hint" data-Style="info">

채널 등록 시 결제대행사별 저장하는 파라미터가 다릅니다. 파라미터 정보 확인은 하단의 \[결제대행사 선택하여 연동하기]를 확인해주세요.

</div>

</div>

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="info">

채널 추가 시 입력해야 하는 값은 결제대행사별로 다르므로
[결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v2/readme)
를 참고하여 확인 후 입력 및 저장해야합니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

채널 추가 시 입력해야 하는 값은 결제대행사별로 다르므로
[결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v1/readme)
를 참고하여 확인 후 입력 및 저장해야합니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## 식별코드 및 API Keys

포트원 결제 연동시 필요한 연동 정보를 확인할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] → \[식별코드·API Keys] 메뉴에서 \[V1 API]를 선택하여 고객사 식별코드, REST API Key, REST API Secret을 확인할 수 있습니다.

(관련 이미지 첨부)

### 고객사 식별코드

- 포트원 가입 시 사용자에게 자동으로 생성되는 **고유값**입니다.
- 결제창 연동 시 사용되며, 결제 호출 시 \[객체 초기화]에 사용됩니다.
- **기술 문의** 시 해당 값을 공유해 주시면 빠르게 문제 해결을 도와드릴 수 있습니다.

### REST API Key, REST API Secret란?

- V1 API 호출 시 사용되는 Access Token을 발급할 때 사용되는 값입니다.
- REST API Secret은 재발급이 가능하며, 재발급 즉시 기존의 Secret은 사용이 불가능합니다.

<div class="hint" data-style="danger">

REST API Key, REST API Secret **결제 거래 건을 컨트롤할 수 있는 민감 정보**로 외부로 유출되지 않도록 주의가 필요합니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

### 스토어 아이디(Store ID) 복사하기

포트원 V2 결제 모듈 연동 시 필요한 스토어 아이디(Store ID)를 복사할 수 있습니다.

(관련 이미지 첨부)

- 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] 화면에서 스토어 아이디를 복사할 수 있습니다.

<div class="hint" data-style="info">

**스토어 아이디(Store ID)란?**

- 포트원 가입 시 \[대표 상점]이 생성되며, 자동으로 생성되는 고유값 입니다.
- 추가로 하위 상점을 생성하는 경우 **상점마다 고유하게 부여**됩니다.
- 결제창 연동 시 사용되며, 결제 호출 시 `storeId` 파라미터에 해당 값을 넣어야 합니다.
- **기술 문의 시 해당 값을 공유**해 주시면 빠르게 문제 해결을 도와드릴 수 있습니다.

</div>

### V2 API Secret 발급하기

V2 API를 연동하기 위해서는 V2 API Secret을 별도로 발급한 후 사용이 가능합니다.
V2 API Secret 은 **Owner, Admin** 계정에서만 발급 및 삭제가 가능합니다.

(관련 이미지 첨부)

- 관리자 콘솔 화면에서 \[결제연동] → \[연동 관리] → \[식별코드·API Keys] 메뉴에서 \[V2 API]를 선택합니다.
- `새로운 API Secret 발급`을 클릭합니다.
- Secret 목록에 표시될 `Secret 이름`을 입력하고 `만료 기한`을 선택한 후 `생성`을 클릭합니다.
- 생성된 Secret을 복사합니다. `API Secret을 확인했습니다`를 누른 후엔 Secret 값을 확인할 수 없으니 주의해 주세요.

<div class="hint" data-style="danger">

API Secret 발급 직후에만 값을 확인할 수 있습니다. 페이지를 벗어나면 API Secret 확인이 불가하오니 복사한 후 임의의 장소에 저장하여 사용하세요.
만약, API Secret 값을 잊어버리신 경우 새로 발급받아 사용해야 합니다.

</div>

<div class="hint" data-style="info">

**API Secret이란?**

- API 사용 시 Authorization 헤더 인증을 위해 사용되는 값입니다.

- API Secret을 발급받으신 후, 선호하는 [인증 방식](https://developers.portone.io/api/rest-v2?v=v2#auth)
  을 선택하여 API를 사용하실 수 있습니다.

</div>

<div class="hint" data-style="danger">

API Secret은 **결제 거래 건을 컨트롤할 수 있는 민감 정보**로 고객사 서버에서만 사용되어야 하며,
브라우저 등 외부에 노출되어서는 안 됩니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 결제알림(Webhook) 관리

결제 거래 건에 이벤트 발생 시 포트원에서 고객사가 설정한 URL로 웹훅을 전송합니다.
최신 상태의 결제 결과 처리를 위해서 결제 연동 시 웹훅 연동을 함께 구현하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

웹훅에 대한 자세한 설명은 [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v1?v=v1)를 참고하세요.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

웹훅에 대한 자세한 설명은 [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2?v=v2)를 참고하세요.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 웹훅 URL 관리자 콘솔 설정

웹훅을 통해 결제 정보를 통보받을 URL을 설정하는 과정은 다음과 같습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

URL은 관리자 콘솔에서 두 가지 형태로 지원하고 있습니다.
콘솔에서 설정했더라도 결제 시에 `notice_url`파라미터로 지정하여 호출하는 경우 해당 URL로 전송됩니다.

웹훅을 통해 결제 정보를 통보받을 URL을 설정하는 과정은 다음과 같습니다.

(관련 이미지 첨부)

- 포트원 관리자 콘솔 내 \[결제 연동] → \[연동 관리] → **\[결제알림(Webhook) 관리]** 탭을 선택합니다.

- \[웹훅 버전] 항목에서 **\[결제모듈 V1]** 을 선택합니다.

- \[설정 모드] 항목에서 \[실연동] 또는 \[테스트]를 선택합니다. (연동 환경에 따라 웹훅 URL을 각각 다르게 설정할 수 있습니다.)

- **Endpoint URL**에 웹훅 데이터를 수신할 URL을 입력합니다.

- **Content Type**을 설정합니다. `Content Type`은 `application/json`
  또는 `application/x-www-form-urlencoded` 중 하나로 설정할 수 있습니다.

- `저장` 버튼을 클릭합니다.

<div class="hint" data-style="info">

`호출 테스트` 버튼을 클릭하면 저장된 URL로 테스트 웹훅이 발송됩니다. 이를 통해 올바른 URL과 Content-Type을 지정했는지 테스트할 수 있습니다.
콘솔 내 화면에서 Endpoint URL 변경 후 저장하지 않은 채 호출테스트를 시도하시면 이전에 저장된 주소로 발송되오니 주의하시길 바랍니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

(관련 이미지 첨부)

- 포트원 관리자 콘솔 내 \[결제 연동] → \[연동 관리] → **\[결제알림(Webhook) 관리]** 탭을 선택합니다.

- \[웹훅 버전] 항목에서 **\[결제모듈 V2]** 를 선택합니다.

- \[설정 모드] 항목에서 \[실연동] 또는 \[테스트]를 선택합니다. (연동 환경에 따라 웹훅 URL을 각각 다르게 설정할 수 있습니다.)

- **Endpoint URL**에 웹훅 데이터를 수신할 URL을 입력합니다.

- **Content Type**을 설정합니다. `Content Type`은 `application/json` 또는
  `application/x-www-form-urlencoded` 중 하나로 설정할 수 있습니다.

- `저장` 버튼을 클릭합니다.

<div class="hint" data-style="info">

`호출 테스트` 버튼을 클릭하면 저장된 URL로 테스트 웹훅이 발송됩니다. 이를 통해 올바른 URL과 Content-Type을 지정했는지 테스트할 수 있습니다.
콘솔 내 화면에서 Endpoint URL 변경 후 저장하지 않은 채 호출테스트를 시도하시면 이전에 저장된 주소로 발송되오니 주의하시길 바랍니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 추가 설정 관리

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

### 화이트리스트(whitelist) 관리

(관련 이미지 첨부)

- 결제 요청 시 허용할 IP대역대를 관리할 수 있습니다.

- 포트원 관리자의 IP보안설정에 입력하는 값은 IP가 아닌 CIDR 블록방식 으로 입력하셔야 합니다.
  예를 들어 입력 하시고자 하는 IP가 `1.1.1.1` 이라고 가정 했을때 해당 IP 하나만 허용하고 싶으시다면
  `1.1.1.1/32`로 작성 하셔야 하고 만약 `1.1.1.1` \~ `1.1.1.255`까지의 IP대역을 모두 허용하고 싶으시다면
  `1.1.1.0/24` 형태로 작성하시면 됩니다. 보다 자세한 표기법은 RFC4632 를 참고부탁드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

포트원 V2 결제 모듈에서는 화이트리스트 기능을 지원하지 않습니다.

해당 기능을 필요로 하시는 경우 V2 기술지원 메일(<tech.support@portone.io>)로 문의 부탁드립니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/console/guide/home

---
title: 홈
description: >-
  포트원 콘솔 홈화면에서는 결제 현황 대시보드, 공지사항, FAQ, 포트원 새소식, 포트원 서비스 가이드 링크를 제공하고 있으며, 이에 대해
  안내합니다.
---

(이미지 첨부: 관리자콘솔-홈 화면 예시)

## 대시보드

1주/1개월/6개월/사용자 선택 기간에 따른 일간 결제 데이터를 확인할 수 있습니다.
아직 실 결제가 일어나지 않은 경우 오른쪽 상단에 \[테스트 데이터]를 활성화하여 대시보드 그래프 예시 등을
확인할 수 있습니다.

- 거래액 : 결제승인이 발생한 모든 금액이 표시됩니다. 현재 결제 상태가 승인(`PAID`)
  혹은 취소(`CANCELLED`/`PARTIAL_CANCELLED`) 거래건이 모두 집계됩니다.

- 거래취소액 : 결제 승인 이후 결제 취소된 금액이 표시됩니다. 전액 취소(`CANCELLED`) 및 부분 취소(`PARTIAL_CANCELLED`) 거래건이 모두 집계됩니다.

- 순거래액 : 거래액에서 거래취소액을 제외한 금액이 표시됩니다.

## 공지사항

포트원의 최신 공지사항을 확인할 수 있습니다. 우측 상단의 \[더보기]를 클릭하여 더 많은 공지사항을 확인해 보세요.

## FAQ

포트원의 FAQ를 확인할 수 있습니다. 우측 상단의 \[더보기]를 클릭하여 더 많은 FAQ를 확인해 보세요.

## 포트원 새소식

포트원의 새로운 소식을 확인할 수 있습니다. 우측 상단의 \[더보기]를 클릭하여 포트원 블로그에서 더 많은 소식을 확인해 보세요.

## 포트원 서비스 가이드

포트원 서비스에 대한 이용 가이드를 확인할 수 있습니다.


# https://developers.portone.io/opi/ko/console/guide/integration

---
title: 연동 관리
description: >-
  포트원 결제 모듈을 사용하기 위한 연동 설정을 관리할 수 있습니다. 결제대행사 채널 관리, 식별코드 및 API Keys, 결제알림(웹훅)
  관리, 추가 설정 관리 방법에 대해 안내합니다. 
targetVersions:
  - v1
  - v2
---

포트원 연동 시 필요한 사항들을 설정 및 관리할 수 있습니다.

연동 정보 탭에서는 채널관리, 식별코드·API Keys, 결제알림(Webhook)관리, 추가 설정 관리 등을 설정할 수 있고,
스마트 라우팅 탭에서는 스마트 라우팅 그룹을 설정할 수 있습니다.

[연동 정보](https://developers.portone.io/opi/ko/console/guide/channel-manage)

[스마트 라우팅](https://developers.portone.io/opi/ko/console/guide/smartrouting)


# https://developers.portone.io/opi/ko/console/guide/pay

---
title: 결제
description: 포트원을 관리자콘솔을 통해 발생한 거래를 조회 및 관리하는 방법을 안내합니다.
---

포트원을 통해 발생한 결제 거래 건을 조회하고 부분 취소 및 전체 취소 기능을 이용하여 결제 건을 관리할 수 있습니다.
엑셀 다운로드 기능을 제공하여 화면에서 필터링된 결제 내역을 다운로드 받아 활용할 수 있습니다.

또한 발급한 빌링키를 이용한 결제 거래 건을 별도 내역으로 확인할 수 있으며, 빌링 결제 예약건을 상태별로
관리할 수 있고, 빌링 결제 캘린더에서 일간/월간 결제 데이터를 확인할 수 있습니다.

[결제 내역 조회](https://developers.portone.io/opi/ko/console/guide/payments)

[빌링결제 내역 조회](https://developers.portone.io/opi/ko/console/guide/billing-payments)


# https://developers.portone.io/opi/ko/console/guide/payments

---
title: 결제 내역 조회
description: >-
  포트원을 통해 발생한 결제 내역을 상태별로 조회하고, 부분 취소 및 전체 취소 기능을 이용하여 결제 건을 관리할 수 있으며, 이에 대해
  안내합니다.
targetVersions:
  - v1
  - v2
---

(관련 이미지 첨부)

## 기준 시각

- **상태 승인 시각**(default) : 최종 결제 상태로 업데이트된 시각을 기준으로 조회합니다.
  (결제 취소건의 경우 취소 시각을 기준으로 조회됩니다.)

- **결제 요청 시각** : 결제를 요청한 시각을 기준으로 결제 건을 조회합니다.

<div class="hint" data-style="info">

**기준 시각에 따라 조회 결과가 다르게 표시됩니다.**

예를 들어 4/1 결제 후 4/5에 결제 취소한 경우, 상태 승인 시각을 기준으로 4/1\~4/4로 기간을 설정한 후
검색하면 해당 거래건은 결과에 포함되지 않습니다.

</div>

## 내역 검색

결제 정보를 검색하여 거래건을 특정할 수 있습니다.

**전체** : 입력한 단어와 여러 결제 정보 필드 중 매칭되는 거래 건을 표시합니다.
여러 필드에서 일부 혹은 전부 일치하는 경우 검색 결과에 표시됩니다.
또한, 검색의 경우 단어의 앞에서부터 일치하는 경우에만 표시되며 중간만 일치하는 경우 원하는 검색 결과를 얻지 못할 수 있습니다.

**포트원 거래번호** : 포트원 거래번호 (`imp_uid`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

**가맹점 거래번호** : 가맹점 거래번호 (`merchant_uid`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**주문명** : 주문명 (`name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**카드사 승인번호** : 카드사 승인번호 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 이름** : 고객 이름 (`buyer_name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 휴대폰 번호** : 고객 휴대폰 번호 (`buyer_tel`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 이메일** : 고객 이메일 (`buyer_email`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 주소** : 고객 주소 (`buyer_addr`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 우편번호** : 고객 우편번호(`buyer_postcode`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

**가맹점 거래번호** : 가맹점 거래번호 (`paymentId`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**주문명** : 주문명 (`orderName`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**카드사 승인번호** : 카드사 승인번호 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 이름** : 고객 이름 (`customer.fullname`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 휴대폰 번호** : 고객 휴대폰 번호 (`customer.phoneNumber`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 이메일** : 고객 이메일 (`customer.email`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 주소** : 고객 주소 (`customer.address`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**고객 우편번호** : 고객 우편번호(`customer.zipcode`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

**결제대행사 승인번호** : 결제대행사(PG사) 승인번호 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.

**카드번호** : 카드번호 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
카드 번호의 경우 결제대행사에 따라 마스킹되는 부분이 다르므로, 앞에 6\~8자리(BIN)번호 혹은 뒷 4자리로 검색하시길 권장드립니다.

**상점아이디** : 결제대행사 상점아이디 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**결제환경** : 결제환경(PC/MOBILE/API) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다. 검색하는 경우 대문자로 검색해야 합니다.

**실시간 계좌 은행** : 실시간 계좌이체 거래 건에 한하여 실시간 계좌 은행 데이터 중 입력한 택스트와 일치하는 데이터가 표시됩니다.
(ex. 실시간 계좌이체 거래 건의 계좌은행이 토스뱅크인 경우 )

**가상계좌 은행** : 가상계좌 거래 건에 한하여 가상계좌 은행 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**계좌번호** : 가상계좌 거래 건에 한하여 계좌번호 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**입금자명** : 가상계좌 거래 건에 한하여 입금자명 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.

**현금영수증 발급번호** : 실시간 계좌이체 또는 가상계좌 거래 시 현금영수증을 발급한 거래 건에 한하여
현금영수증 발급번호(국세청 승인번호) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.

**취소 사유** : 결제 취소 건에 한하여 취소 사유 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
포트원 어드민콘솔에서 취소한 경우 취소 사유는 **관리자페이지취소**로 일괄 입력됩니다.

**카드사명** : 카드사명 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
**할부개월수** : 카드 결제 시 할부가 적용된 거래 건에 한하여 할부개월수 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.

## 필터

필터에 따라 결제 내역을 필터링하여 조회할 수 있습니다. 필터는 결제상태, 결제수단, 결제대행사, 결제유형, 결제모드에 따라 다중 선택할 수 있습니다.

### 결제상태

- **전체** : 모든 결제 상태의 거래를 조회합니다.

- **결제 완료** : **결제 완료** (status : PAID) 상태인 거래 건만 표시됩니다. 결제 취소건은 포함되지 않습니다.

- **결제 예정** : **결제 예정** (status : READY) 상태인 거래 건만 표시됩니다.
  - 결제창이 화면에 표시되는 순간 결제 예정 상태로 거래 건이 저장됩니다.

  - 일반적으로 결제 승인이되면 결제 완료 상태로 업데이트 됩니다. 다만, 결제 도중 모종의 이유로 고객이 결제창을 이탈하는 경우에는
    해당 거래 건은 계속 결제 예정 상태로 남게 됩니다.

- **결제 실패** : **결제 실패** (status : FAILED) 상태인 거래 건만 표시됩니다.

- **결제 취소** : **전체 취소** (status : CANCELLED) 및 **부분 취소** (PARTIAL\_CANCELLED) 상태인 거래 건만 표시됩니다.

- **승인 대기** : **승인 대기** (status : PENDING) 상태인 거래 건만 표시됩니다.
  - 승인 대기 상태는 페이팔(SPB/RT) 거래 건에서만 발생하며, 결제 및 환불 요청 완료 후 실제 승인되기까지 결제상태를 의미합니다.

### 결제수단

**전체** : 모든 결제 수단의 거래를 조회합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

**카드결제** : 결제 요청 시 결제 수단을 카드(`pay_method : card`)로 지정하여 호출한 뒤
신용카드, 체크카드, 법인카드, 기프트카드 등 카드로 진행된 거래 건만 표시됩니다.

**실시간 계좌이체** :  결제 요청 시 결제 수단을 실시간 계좌이체(`pay_method : trans`)로
지정하여 호출한 뒤 계좌이체로 진행된 거래 건만 표시됩니다.

**가상계좌** : 결제 요청 시 결제 수단을 가상계좌 (`pay_method : vbank`)로
지정하여 호출한 뒤 가상계좌로 진행된 거래 건만 표시됩니다.

**휴대폰 소액결제** : 결제 요청 시 결제 수단을 휴대폰 소액결제 (`pay_method : phome`)로
지정하여 호출한 뒤 휴대폰 소액결제로 진행된 거래 건만 표시됩니다.

**문화상품권** : 결제 요청 시 결제 수단을 문화상품권 (`pay_method : culturegift`)로 지정하여 호출한 뒤
문화상품권으로 진행된 거래 건만 표시됩니다. 문화상품권의 경우 웰컴페이먼츠만 지원합니다.

**컬쳐랜드** : 결제 요청 시 결제 수단을 컬쳐랜드 문화상품권 (`pay_method : cultureland`)로 지정하여 호출한 뒤
컬쳐랜드 문화상품권으로 진행된 거래 건만 표시됩니다.

**스마트문상** : 결제 요청 시 결제 수단을 스마트문상(`pay_method : smartculture`)로 지정하여 호출한 뒤
스마트문상 ((구)게임문화상품권)으로 진행된 거래 건만 표시됩니다.

**북앤라이프** : 결제 요청 시 결제 수단을 북앤라이프(`pay_method : booknlife`)로 지정하여 호출한 뒤
도서문화상품권으로 진행된 거래 건만 표시됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

**카드결제** : 결제 요청 시 결제 수단을 카드(`payMethod : CARD`)로 지정하여 호출한 뒤
신용카드, 체크카드, 법인카드, 기프트카드 등 카드로 진행된 거래 건만 표시됩니다.

**실시간 계좌이체** :  결제 요청 시 결제 수단을 실시간 계좌이체(`payMethod : TRANSFER`)로
지정하여 호출한 뒤 계좌이체로 진행된 거래 건만 표시됩니다.

**가상계좌** : 결제 요청 시 결제 수단을 가상계좌 (`payMethod : VIRTUAL_ACCOUNT`)로
지정하여 호출한 뒤 가상계좌로 진행된 거래 건만 표시됩니다.

**휴대폰 소액결제** : 결제 요청 시 결제 수단을 휴대폰 소액결제 (`payMethod : MOBILE`)로
지정하여 호출한 뒤 휴대폰 소액결제로 진행된 거래 건만 표시됩니다.

**문화상품권** : 문화상품권의 경우 V1 결제모듈의 웰컴페이먼츠만 지원합니다.

**컬쳐랜드** : 결제 요청 시 결제 수단을 컬쳐랜드 문화상품권
(`payMethod : GIFT_CERTIFICATE`, `giftCertificate.giftCertificateType : CULTURELAND`)로 지정하여 호출한 뒤
컬쳐랜드 문화상품권으로 진행된 거래 건만 표시됩니다.

**스마트문상** : 결제 요청 시 결제 수단을 스마트문상
(`payMethod : GIFT_CERTIFICATE`, `giftCertificate.giftCertificateType : SMART_MUNSANG`)로 지정하여 호출한 뒤
스마트문상 ((구)게임문화상품권)으로 진행된 거래 건만 표시됩니다.

**북앤라이프** : 결제 요청 시 결제 수단을 북앤라이프
(`payMethod : GIFT_CERTIFICATE`, `giftCertificate.giftCertificateType : BOOKNLIFE`)로 지정하여 호출한 뒤
도서문화상품권으로 진행된 거래 건만 표시됩니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

**포인트결제** : 실제 승인된 결제가 포인트로 진행된 거래 건만 표시됩니다.

- 예를 들어 네이버페이 포인트 사용 결제 건 등이 해당됩니다.

**기타** : 결제 수단을 알 수 없거나 해외 현지 결제 수단으로 진행된 거래 건만 표시됩니다.

### 결제대행사

- **전체** : 모든 결제대행사의 거래를 조회합니다.
- 결제대행사 필터는 `pg_provider`를 기준으로 구분됩니다.

### 결제유형

- **전체** : 모든 결제유형의 거래를 조회합니다.
- **정기 결제** : 발급한 빌링키로 시도된 결제 거래 건만 표시됩니다.
- **일반 결제** : SDK 및 API로 시도된 일회성 결제 거래 건만 표시됩니다.

### 결제모드

- **전체** : 모든 결제모드의 거래를 조회합니다.

- **실결제** : 실연동 채널로 시도된 결제 거래 건만 표시됩니다.

- **테스트 결제** : 테스트 채널로 시도된 결제 거래 건만 표시됩니다. 기본적으로 체크 표시가 해제되어있으니
  테스트 거래 건을 조회할 실 때 필터에서 체크한 후 검색을 해야 합니다.

## 순거래액

총 거래액, 총 거래취소 금액, 순 거래액 집계 금액은 홈 대시보드에서 확인하시거나 결제 데이터 분석 서비스에서 상세히 확인하실 수 있습니다.

## 엑셀다운로드

조회된 거래 내역을 엑셀 파일 형식으로 로컬에 다운로드 받을 수 있습니다. 엑셀 다운로드 클릭 시 원하는 정보를 선택하여 커스텀할 수 있습니다.


# https://developers.portone.io/opi/ko/console/guide/promotion

---
title: 프로모션
description: 카드사 할인을 사용하기 위한 프로모션 설정을 관리할 수 있습니다. 관리자콘솔 내 프로모션 설정 방법을 안내합니다.
targetVersions:
  - v1
  - v2
---

## 프로모션이란?

고객사가 카드사와 계약하여 사용자에게 즉시 할인을 제공하는 카드 즉시 할인 서비스입니다.

고객사의 매출을 성장시키는데 가장 효율이 좋은 방법 중 하나입니다.
예를 들어, 포트원의 고객사 중 K사의 경우 카드 프로모션 진행 기간동안 동기간 대비(1일 평균) 전체 거래액이 1.6x 이상 증가하였고,
프로모션 예산 대비 거래액 ROAS는 평균 1780%, 최대 2270% 로 가장 효율 높은 매출 성장을 이끌어낼 수 있었습니다.

프로모션 도입을 원하시는 고객사의 경우 세일즈팀 메일(<sales@portone.io>)으로 문의 주시기 바랍니다.

<div class="hint" data-style="info">

프로모션 메뉴의 경우 도입 고객사에 한하여 포트원 콘솔 내에서 확인하실 수 있습니다.

프로모션 결제를 이용하시려면 관리자콘솔에서 프로모션 생성 후 프로모션 아이디를 포함하여 결제를 요청해야 합니다.
프로모션 연동 방법이 궁금하다면 [프로모션 결제 연동하기](https://developers.portone.io/opi/ko/extra/promotion/integration)를 확인해 보세요.

</div>

## 프로모션 생성하기

프로모션 결제를 사용하기 위해서는 포트원 관리자콘솔 내 \[프로모션]에서 프로모션 설정이 필요합니다.
프로모션은 상점별로 생성하여 사용할 수 있으며, 하위상점을 사용하시는 고객사의 경우 프로모션을 각각 생성하여 사용하시길 권장드립니다.

1. 포트원 콘솔 내에서 \[프로모션]을 클릭하세요.
2. \[+ 프로모션 추가]를 클릭하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 1)

3. **프로모션 추가** 화면에서 다음 정보를 입력하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 2)

- \[프로모션 이름] : 생성된 프로모션을 고객사에서 구분할 수 있는 이름을 입력하시길 권장드립니다.

- \[프로모션 일정] : 프로모션 시작일과 종료일을 선택하세요. 시작일이 미래인 경우 생성 후 **예정** 상태이며,
  설정된 시작일이 경과되면 **진행중** 상태로 변경되며 프로모션 할인이 적용됩니다.

- \[카드사] : 프로모션 할인을 제공할 카드사를 선택하세요. 카드사는 한 프로모션 당 한 곳만 설정할 수 있습니다.

- \[프로모션 예산] : 프로모션을 진행할 전체 예산으로 할인 금액으로 사용할 예산을 입력하세요.
  예산이 100% 소진된 이후 결제 건에 대해서는 프로모션이 적용되지 않습니다.

- \[할인방식] : 할인율 또는 할인금액을 선택할 수 있으며, 입력된 수치에 따라 정률 또는 정액으로 할인 금액이 적용됩니다.

- \[최소 결제 금액] : 최소 결제 금액 설정시 주문 금액이 최소 결제 금액 이상인 경우에만 프로모션 할인이 적용됩니다.
  만약 최소 결제 금액을 입력하지 않는 경우 해당 카드로 결제되는 모든 건에 프로모션 할인이 적용됩니다.

- \[최대 할인 금액] : 할인방식 중 할인율로 설정한 경우에만 입력 가능하며, 최대 할인 금액 설정시 프로모션 할인 금액이
  최대 할인 금액을 초과할 수 없습니다. 최대 할인 금액을 설정하지 않는 경우 주문 금액에 정률로 계산되어 프로모션 할인이 적용됩니다.

4. \[저장]을 클릭하세요.

## 프로모션 수정하기

1. 생성된 프로모션 우측에 \[...]을 클릭하세요.
2. \[수정]을 클릭하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 3)

3. **프로모션 수정** 화면에서 원하는 정보를 수정하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 4)

- **예정** 상태인 경우, 프로모션 아이디를 제외한 모든 정보를 수정할 수 있습니다.
- **일시중지**, **진행중**, **예산소진** 상태인 경우 프로모션 이름 및 프로모션 일정만 수정할 수 있습니다.
- **종료** 상태인 경우 모든 정보를 수정할 수 없습니다.

## 프로모션 상태 안내

생성된 프로모션은 총 5개의 상태로 구분할 수 있으며, 상태에 따라 프로모션 아이디를 지정하여 결제 요청했더라도
프로모션 할인 금액이 적용되지 않을 수 있습니다.

### 예정

프로모션 생성 후 프로모션 시작일이 경과되지 않은 경우 **예정**상태로 표시됩니다.
예정 상태인 경우 프로모션 아이디를 제외한 모든 정보를 수정할 수 있습니다.

예정 상태인 프로모션을 일시중지하는 경우 프로모션 시작일이 경과되어도 프로모션이 진행중 상태로 변경되지 않으며,
프로모션 아이디를 지정하여 결제를 요청하더라도 프로모션 할인이 적용되지 않습니다.

예정 상태인 프로모션을 종료하는 경우 종료 상태로 변경되며 상태 변경이 불가능합니다.

### 진행중

프로모션 생성 후 프로모션 시작일이 경과된 경우 **진행중**상태로 표시됩니다.
진행중 상태인 경우 프로모션 이름 및 프로모션 일정만 수정할 수 있습니다.

진행중 상태인 경우 결제 요청 시 프로모션 아이디를 지정하면 프로모션 할인이 적용됩니다.

진행중 상태인 프로모션을 일시중지하는 경우 직후 결제 요청 건부터 프로모션 아이디를 지정했더라도 프로모션 할인이 적용되지 않습니다.
다만, 일시중지 직전 결제 요청되었으나 결제 승인이 완료되지 않은 건의 경우 프로모션 할인 금액이 적용될 수 있습니다.

진행중 상태인 프로모션을 종료하는 경우 종료 상태로 변경되며 상태 변경이 불가능합니다.

### 일시중지

사용자가 직접 생성된 프로모션을 일시중지할 수 있으며 예정, 진행중, 예산소진 상태인 경우 일시중지가 가능합니다.

예정이거나 진행중 혹은 예산소진 상태에서 일시중지 상태로 변경된 경우 프로모션 이름 및
프로모션 일정 중 종료일만 변경할 수 있으며, 시작일은 변경이 불가능합니다.

일시중지하는 경우 프로모션 시작일이 경과되거나 예산이 남아있어도 프로모션 할인은 적용되지 않습니다.
재시작하여 프로모션이 원 상태로 변경되며, 다시 사용이 가능합니다.

### 예산소진

프로모션 할인금액이 설정된 예산만큼 모두 소진된 경우 **예산소진**상태로 표시됩니다.
예산소진 상태인 경우 프로모션 아이디를 지정하여 결제 요청하더라도 프로모션 할인이 적용되지 않습니다.

만약 프로모션 할인이 적용된 거래건이 취소되는 경우 해당 거래 건에 적용되었던 할인 금액만큼 예산에 귀속되며,
이후 거래 요청 시 할인 금액이 적용됩니다.

### 종료

프로모션 종료일이 경과되거나 사용자가 종료한 경우 **종료**상태로 표시됩니다.
종료된 프로모션은 재시작할 수 없습니다.

프르모션이 종료되는 경우 즉시 프로모션 할인이 적용되지 않습니다. 다만, 종료 직전 결제 요청한 경우 프로모션 종료 이후
결제 승인이 완료되면 프로모션 할인금액이 적용됩니다.

## 프로모션 엑셀 다운로드

엑셀 다운로드 클릭 시 **프로모션 내역**, **거래 내역** 두 가지 유형으로 데이터를 다운로드 받을 수 있습니다.

- 프로모션 내역 : 조회 기간 내 전체 프로모션 내역에 대해 다운로드할 수 있습니다.
  - 프로모션 아이디, 프로모션 이름, 상태, 카드사, 예산, 소진금액, 할인율/할인금액, 최소 결제 금액, 최대 할인 금액, 프로모션 생성날짜,
    프로모션 수정 날짜, 프로모션 시작 날짜, 프로모션 종료 예정 날짜, 프로모션 실제 종료 날짜가 포함됩니다.

- 거래 내역 : 조회 기간 내 전체 프로모션이 적용된 건별 거래 내역에 대해 다운로드 할 수 있습니다.
  - 고객사 주문번호, 포트원 거래번호, 프로모션 아이디, PG사 승인번호, 카드사 승인번호 등 거래 데이터가 포함됩니다.
  - 만약 특정 프로모션이 적용된 거래 내역 확인을 원하시는 경우 해당 프로모션의 `...` 버튼 클릭 후 `거래내역 다운로드`를 클릭하세요.


# https://developers.portone.io/opi/ko/console/guide/readme

---
title: 관리자 콘솔 소개
description: 포트원 관리자 콘솔 사용법을 안내합니다.
---

포트원 관리자콘솔은 포트원 계정 생성 및 하위상점 관리, 전자결제 신청, 결제대행사 연동 설정을 통합하여 관리할 수 있는 페이지입니다.

또한, 결제 내역 조회 및 결제 취소를 할 수 있으며, 예약된 결제 내역 및 예약 변경, 해지 기능을 제공하며 통합된 결제대행산 정산 내역을 확인할 수 있습니다.

별도로 포트원에서 제공하는 파트너 정산 자동화 및 결제 데이터 분석도 이용하실 수 있습니다.

[포트원 관리자콘솔 바로가기](https://admin.portone.io)

[전자결제 신청](https://developers.portone.io/opi/ko/console/guide/reg)

[홈](https://developers.portone.io/opi/ko/console/guide/home)

[결제](https://developers.portone.io/opi/ko/console/guide/pay)

[연동 관리](https://developers.portone.io/opi/ko/console/guide/integration)

[상점 계정 관리](https://developers.portone.io/opi/ko/console/guide/account)


# https://developers.portone.io/opi/ko/console/guide/reg

---
title: 전자결제 신청
description: 결제대행사 및 결제수단을 선택하고 전자결제를 신청하는 과정을 안내합니다.
---

포트원 관리자콘솔에서 [로그인](https://admin.portone.io/auth/signin)을 한 뒤 좌측 상단에 있는
**\[전자결제 신청]** 버튼을 클릭하면 고객사가 사용하고자 하는 모든 결제 수단과 이를 지원하는 결제대행사를
신청할 수 있는 페이지로 이동합니다.

(관련 이미지 첨부)

## 시작하기

(관련 이미지 첨부)

- \[개인정보 제 3자 제공], \[개인정보 수집 및 이용] 약관을 확인하시고 동의하는 경우 체크합니다.

- `개발 연동 테스트` 를 누르면 `결제 연동` 페이지로 이동합니다.
  `결제 연동` 페이지에서 테스트 채널을 추가하여 전자결제 신청 전에 결제 테스트를 해볼 수 있습니다.

- `시작하기`를 누르면 `비즈니스 인증` 페이지로 이동합니다.
  `비즈니스 인증` 페이지에서 사업자 정보를 추가한 후 전자결제 신청을 진행할 수 있습니다.

- 우측 상단 `서비스 둘러보기`를 클릭하면 해당 페이지에서 벗어나 포트원 관리자콘솔을 둘러볼 수 있습니다.

- 우측 상단 `이미 가입된 결제대행사가 있어요`를 클릭하면 포트원 고객센터로 연결됩니다.
  문의사항이 있으신 경우 메세지를 남겨주시면 결제 대행사 추가 가입 절차에 대해 안내 드리겠습니다.

## 비즈니스 인증

### 사업자 정보 등록

(관련 이미지 첨부)

- 전자결제신청(결제대행사 계약)을 진행할 사업자 등록증 사본을 첨부해 주세요.

- 사업자 등록증 업로드 시 파일 상태에 따라 일부 정보는 자동으로 적용됩니다.
  만약 자동으로 적용되지 않은 정보가 있다면 안내에 따라 직접 입력해 주세요.

- 포트원 가입 계정과 대표자 이메일 주소가 다를 경우 `포트원 계정으로 사용할게요` 체크박스를 해제한 후 대표자 이메일 주소를 입력해 주세요.

- 사업자 등록증이 없는 경우 전자결제 신청이 불가능합니다. 사업자 등록 이후 서비스를 신청해 주세요.
  - `아직 사업자 등록증이 없어요`를 클릭한 후 `개발 연동 테스트` 또는 `서비스 둘러보기`를 클릭하여 페이지를 벗어날 수 있습니다.

- 비즈니스 인증을 중단하려면 우측 상단의 \[나가기]를 클릭하세요.

- 비즈니스 인증 정보를 임시 저장하려면 우측 상단의 \[임시 저장]을 클릭하세요.

### 담당자 정보 등록

(관련 이미지 첨부)

- 전자결제 신청 완료 후 결제대행사 및 포트원의 안내를 받을 담당자 정보를 등록해 주세요.
- 사업자 등록증상의 대표자 정보와 담당자 정보가 일치하는 경우 `대표자 1 정보 불러오기` 를 선택해 주세요.

### 서비스 정보 등록

(관련 이미지 첨부)

- 상세 판매 품목 : 판매하시는 서비스 유형(업종)을 선택해 주세요. (중복 선택 가능)

- 서비스 형태 선택 : 연동하시는 서비스의 형태를 선택해 주세요. (웹/앱)

- 서비스 URL 입력 : 결제대행사 계약을 진행하기 위해서는 운영중인 서비스(웹/앱)의 URL을 입력해야 합니다.
  원활한 계약을 위해서 아래 서비스 기본 구성 요건을 확인하신 후 서비스에 반영이 필요합니다.

  - 결제대행사 계약을 위한 서비스 기본 구성 요건 \[[바로가기](https://guide.portone.io/6e20063c-1305-475f-a71a-c4d5cd5f3556)]

- 요청/추가 메모 : 기타 전달할 내용이 있는 경우 해당 항목에 작성해 주시면 확인 후 안내 드리겠습니다.

### 최종 확인

(관련 이미지 첨부)

- 등록된 정보를 최종적으로 확인합니다.

- 정보 수정이 필요하시면 `정보 수정하기` 버튼을 클릭해 주세요.

- 비즈니스 인증 `제출하기` 클릭 시, `전자결제 신청하기` 페이지로 이동합니다.

- 주의 : 제출 이후 이미 등록한 비즈니스 정보에 대해서 수정이 필요한 경우 `상점·계정관리`의 사업자
  정보에서 `정보 수정 요청`을 클릭하여 [포트원 고객센터](https://x06k7.channel.io/lounge)를 통해
  수정이 가능합니다.

## 전자결제 신청

### 포트원 추천 패키지

(관련 이미지 첨부)

- 이용하실 결제수단 및 결제형태를 선택해 주세요.

- 선호하는 결제수단을 선택하면, 그에 따라 포트원 추천 패키지가 노출됩니다.
  결제대행사 선택이 어려우신 경우 추천패키지로 쉽고 간편하게 신청이 가능합니다.

### 결제대행사 직접 선택하기

(관련 이미지 첨부)

- 우측 상단 `전자결제 직접 선택하기` 버튼을 클릭하시면 원하시는 결제대행사(PG사)를 직접 선택하여
  신청하실 수 있습니다.

- 일반결제, 간편결제, 해외결제, 본인인증 총 4개의 서비스별로 포트원이 지원하는 결제대행사와 결제
  수단을 확인할 수 있습니다. 판매하시는 서비스 형태 및 필요한 형태에 따라 선택해주세요.

- 결제수단을 선택하면 장바구니에 담기며, 선택한 결제대행사와 결제수단의 개수는 장바구니 아이콘에
  표기됩니다.

- 주의사항: 사이트를 워드프레스 우커머스 플러그인으로 제작하시는 경우, 지원 가능한 PG사가 구분되어
  있으니 참고하시어 선택해 주세요. \[[워드프레스 우커머스 플러그인 지원 PG
  목록](https://help.portone.io/content/wordpress-available-pg)]

### 결제수단 담기

- 원하는 결제대행사의 결제수단을 클릭하면 장바구니에 담기고, 장바구니에서 선택한 결제대행사 및
  결제수단을 확인할 수 있습니다.

- 장바구니에서 특정 결제대행사를 삭제하고 싶은 경우, \[`X`]버튼 클릭 후 \[`저장`] 을 클릭하세요.
  결제수단 추가를 원하는 경우 \[`돌아가기`]버튼을 클릭하여 다시 선택이 가능합니다.

### 추가 정보 입력

(관련 이미지 첨부)

- 특정 결제대행사의 경우, 계약에 필요한 상세 정보 입력이 필요합니다. 내용을 확인하고 꼼꼼히 상세 정보를 입력해주세요.

### 최종 확인

(관련 이미지 첨부)

- 선택하신 결제대행사와 결제수단을 확인해주세요.
- 추가 신청이 필요한 경우 `이전으로 가기` 버튼을 클릭해 주세요.

## 신청 내역 확인

(관련 이미지 첨부)

- 신청한 결제대행사와 결제수단을 확인할 수 있습니다.

- 추가 신청이 필요하시면 `전자 결제를 추가할게요`를 클릭해 주세요.

- 실제 PG사 계약 상태와 콘솔 내 노출되는 상태값이 상이할 수 있습니다. 확인이 필요한 경우, 콘솔
  하단의 [상담톡](https://x06k7.channel.io/lounge)을 통해 문의주시기 바랍니다.

- 신청 후, 약 3 영업일내 PG사 계약 담당자가 직접 연락을 드립니다.

- 일부 PG사는 추가 접수 절차가 필요하여, 포트원에서 별도 안내된 이메일을 참고하시어 진행을
  부탁드립니다.

## (참고) 결제 연동

- 결제대행사(PG사)와 계약을 위해서는 신청하신 PG사의 모듈 연동이 필요합니다.

- [V1 연동 매뉴얼 바로가기](https://developers.portone.io/opi/ko/integration/ready/readme?v=v1)

- [V2 연동 매뉴얼 바로가기](https://developers.portone.io/opi/ko/integration/ready/readme?v=v2)

- 연동과 관련하여 궁금하신 사항은 **포트원 기술지원 이메일 <support@portone.io>**
  또는 채널톡으로 문의 주시기 바랍니다.


# https://developers.portone.io/opi/ko/extra/smart-routing/console-guide

---
title: 스마트 라우팅 - 콘솔 가이드
description: 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
targetVersions:
  - v1
  - v2
---

<div class="hint" data-style="info">

스마트 라우팅 기능이 궁금하다면 [스마트 라우팅 기능 소개](https://developers.portone.io/opi/ko/extra/smart-routing/intro)를 확인해 보세요!

</div>

## 스마트 라우팅 그룹 생성하기

스마트 라우팅을 사용하기 위해서는 포트원 관리자콘솔 내 \[연동 관리] - \[스마트 라우팅]에서 그룹 설정이 필요합니다.

1. (관련 이미지 첨부)

   포트원 콘솔 내에서 \[연동 관리] - \[스마트 라우팅]을 클릭하세요.

2. \[스마트 라우팅 그룹 생성하기]를 클릭하세요.

3. (관련 이미지 첨부)

   연동할 환경을 선택하세요. \[실연동], \[테스트] 선택 시 해당 환경으로 등록된 채널만 표시됩니다.
   스마트 라우팅 그룹 내에 동일한 환경의 채널끼리만 설정이 가능합니다.

4. \[그룹 이름]은 필수로 입력해야 합니다. 그룹 이름은 별칭과 같이 사용되므로 그룹의 특징을
   잘 나타내는 이름으로 작성하시길 권장드립니다.

5. \[그룹 아이디]의 경우 그룹 생성 후 자동으로 채번되며, 결제 요청 시 사용됩니다.

6. \[+채널 추가]를 클릭하세요.

7. (관련 이미지 첨부)

   그룹에 사용할 채널을 선택하세요. [지원 PG사 확인 바로가기](https://developers.portone.io/opi/ko/extra/smart-routing/intro?v=v2#사용-가능한-pg사-및-결제수단-)

8. 채널은 최소 1개부터 최대 10개까지 설정이 가능합니다.

9. 채널 추가 후 **비활성화** 하는 경우 해당 채널은 입력된 비율과 상관없이 라우팅 시 배제됩니다.

10. 비율의 합은 100% 미만이거나 초과될 수 없습니다. 총 합이 100%여야만 합니다.

11. 채널 설정을 완료하였으면 \[저장] 버튼을 클릭하여 그룹을 생성합니다.

## 스마트 라우팅 그룹 수정하기

1. (관련 이미지 첨부)

   생성된 그룹은 위와 같이 표시됩니다.

2. 그룹 설정을 변경하고 싶으신 경우 해당 그룹을 클릭하세요.

3. (관련 이미지 첨부)

   이미 생성된 그룹 내에서 결제대행사를 추가 혹은 삭제할 수 있습니다.

4. 결제대행사별 비율을 변경할 수 있습니다.

5. \[예약 시간 설정]을 체크한 후 시간을 설정하면 변경 시점을 예약할 수 있습니다. 예약 시간은 시간 단위로
   선택 가능하며, 미래 시점으로만 예약할 수 있습니다.

6. 즉시 적용을 원하시는 경우 \[예약 시간 설정]을 체크하지 않은 채 \[저장]을 클릭하세요.

## 스마트 라우팅 그룹 삭제하기

1. 수정 모드에서 \[그룹 삭제]를 클릭하세요.

2. 삭제된 그룹은 복원되지 않으며, 결제 요청 파라미터 변경 없이 그룹을 삭제하는 경우 결제가
   원활하지 않을 수 있습니다. 삭제 시 신중히 진행하시길 권장드립니다.


# https://developers.portone.io/opi/ko/extra/smart-routing/integration

---
title: 스마트 라우팅 - 연동하기
description: 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
targetVersions:
  - v1
  - v2
---

<div class="hint" data-style="info">

스마트 라우팅 기능이 궁금하다면 [스마트 라우팅 기능 소개](https://developers.portone.io/opi/ko/extra/smart-routing/intro)를 확인해 보세요!

스마트 라우팅을 이용하시려면 관리자콘솔에서 스마트 라우팅 그룹을 먼저 설정해야합니다.
그룹 설정 방법이 궁금하다면 [스마트 라우팅 그룹 설정 가이드](https://developers.portone.io/opi/ko/extra/smart-routing/console-guide)를 확인해 보세요.

</div>

## SDK(결제창) 인증결제 연동하기

SDK를 이용하는 경우 결제 호출 시 생성한 스마트 라우팅 그룹의 ID를 전용 파라미터인 `channelGroupId`에
지정하여 사용이 가능합니다.
이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다. 단, 결제대행사 별로 지원하는 기능이 다를 수 있으니
그룹 내에서 사용하는 모든 결제대행사에서 지원하는 기능만 사용하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/auth) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
IMP.request_pay(
  {
    // 결제대행사를 지정할 때 사용한 channelKey, pg 대신
    // channelGroupId 파라미터에 스마트 라우팅 그룹 ID를 설정합니다.
    channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",
    pay_method: "card", //결제수단 선택
    merchant_uid: "ORD20180131-0000011", //고객사 주문번호
    name: "Norway swivel chair", //주문명
    amount: 1000, // 결제 금액
    //고객 정보
    buyer_email: "gildong@gmail.com",
    buyer_name: "Hong Gildong",
    buyer_tel: "010-4242-4242",
    buyer_addr: "Shinsa-dong, Gangnam-gu, Seoul",
    buyer_postcode: "01181",
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // Payment is successful
    } else {
      // Payment failed
    }
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout) 문서를 참고하시기 바랍니다.

### 예제 코드

```tsx
//포트원 인증결제 SDK 호출
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",

  // 결제대행사를 지정할 때 사용한 channelKey 대신
  // channelGroupId 파라미터에 스마트 라우팅 그룹 ID를 설정합니다.
  channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",

  // 기타 인증결제 파라미터 설정
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
  payMethod: "CARD",

  // 스마트 라우팅 사용 시 필수 파라미터 추가 설정
  customer: {
    fullName: "홍길동",
    phoneNumber: "010-1234-5678",
    email: "test@test.com",
  },
});
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

- channelGroupId: string

  **스마트 라우팅 그룹 ID**

  관리자 콘솔의 \[연동 관리] → \[스마트 라우팅] 메뉴에서 확인할 수 있습니다.

  스마트 라우팅 그룹 ID를 지정하여 결제창을 호출하면, 스마트 라우팅 그룹 내 설정된 채널 비율에 따라
  확률 기반으로 하나의 결제대행사가 호출됩니다.

### 필수 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

각 파라미터에 대한 상세한 설명은 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq) 문서를 참고하시기 바랍니다.

- merchant\_uid: string

  **고객사 주문번호**

- name: string

  **주문명**

- amount: number

  **결제금액**

- pay\_method: string

  **결제수단 구분코드**

- custom\_data: object

  **사용자 정의 데이터**

  결제 응답시 **echo** 로 받아보실 수 있는 필드 입니다.

  JSON notation(string)으로 저장됩니다.

  주문 건에 대해 부가정보를 저장할 공간이 필요할 때 사용합니다

- tax\_free: number

  **면세금액**

  결제금액 중 면세금액에 해당하는 금액을 입력합니다.

- vat\_amount: number

  **부가세**

  결제금액 중 부가세에 해당하는 금액을 입력합니다. (기본값: null)

- vbank\_due: string

  **가상계좌 입금기한**

  스마트 라우팅을 이용한 가상계좌 결제 사용 시 필수 입력해야 합니다.

  다음과 같은 형식으로 설정이 가능합니다 :

  `YYYY-MM-DD`

  `YYYYMMDD`

  `YYYY-MM-DD HH:mm:ss`

  `YYYYMMDDHHmmss`

- buyer\_tel: string

  **주문자 연락처**

  일부 PG사에서 해당 필드 누락시 오류 발생

- buyer\_email: string

  **주문자 이메일**

  일부 PG사에서 해당 필드 누락시 오류 발생(페이먼트월)

기타 파라미터는 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq) 문서를 참고하시길 바랍니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

각 파라미터에 대한 상세한 설명은 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v2-sdk/payment-request) 문서를 참고하시기 바랍니다.

- storeId: string

  **고객사 ID**

- paymentId: string

  **고객사 주문 고유 번호**

- orderName: string

  **주문명**

- totalAmount: number

  **결제 금액**

- currency: string

  **결제 통화**

- payMethod: string

  **결제수단 구분코드**

- virtualAccount?: object

  가상계좌 결제 사용 시 필요한 파라미터입니다.

  - accountExpiry: object

    **가상계좌 입금 만료기한**

    스마트 라우팅을 이용한 가상계좌 결제 사용 시 필수 입력해야 합니다.

    - validHours?: number

      **가상계좌 입금 유효 시간**

    - dueDate?: string

      **가상계좌 입금 유효 시각**

- easyPay?: object

  **간편결제 정보**

  스마트 라우팅을 이용한 간편결제 다이렉트 호출 시 필수 입력해야 합니다.

  - easyPayProvider?: string

    **간편결제 수단**

- productType: string

  **상품 유형**

  스마트 라우팅을 이용한 휴대폰 소액결제 사용 시 필수 입력해야 합니다.

- customer: object

  **구매자 정보**

  - fullName: string

    **구매자 전체 이름**

    `fullName` 파라미터 대신 `firstName`과 `lastName` 파라미터를 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

  - email: string

    **구매자 이메일 주소**

기타 파라미터는 \[결제요청 파라미터]\(/sdk/ko/v2-sdk/payment-request 문서를 참고하시길 바립니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 스마트 라우팅 내 새로운 결제대행사 채널 추가 시 테스트 후 사용하시길 권장드립니다. </summary>

결제대행사별로 결제 수단에 따라 필수 파라미터가 다르므로 그룹 내 새로운 결제대행사 추가 시 테스트 환경에서
테스트를 진행한 후 실환경에 반영하시길 권장 드립니다.
필수 파라미터 조건을 충족하지 못하는 경우 에러가 리턴되며, 결제창이 정상적으로 호출되지 않을 수 있습니다.

</details>

<details>

<summary> 간편결제 사용을 원하시는 경우 허브형으로 사용하시길 권장드립니다. </summary>

**간편결제 허브형을 사용하시는 경우**, 결제대행사 별 계약에 따라 결제창에 표시되는 간편결제가 상이할 수 있습니다.

**간편결제 다이렉트 호출을 사용하시는 경우**, 결제대행사 별 계약에 따라 결제 호출 시 에러가 리턴되며 결제창이
호출되지 않을 수 있습니다. 가급적 결제대행사 별 동일한 간편결제 수단을 모두 계약하신 후 사용하시길 권장드립니다.

단, **간편결제 직연동**의 경우 스마트 라우팅 기능을 제공하지 않습니다.

</details>

## API 수기(키인)결제 연동하기

API를 이용하는 경우 결제 호출 시 생성한 스마트 라우팅 그룹의 ID를 전용 파라미터인 `channelGroupId`에
지정하여 사용이 가능합니다.
이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다. 단, 결제대행사 별로 지원하는 기능이 다를 수 있으니
그룹 내에서 사용하는 모든 결제대행사에서 지원하는 기능만 사용하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [수기(키인)결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/keyin) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 예제 코드

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts title="server-side"
// card_number, expiry, birth, pwd_2digit 등 정보를 전달받습니다.
// 포트원 비인증 결제(일회성) API 호출
const onetimeResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/onetime",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      // 중략...
    }),
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="카드 결제">

```ts
// 포트원 수기(키인)결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/instant`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // channelGroupId 파라미터에 스마트 라우팅 그룹 ID를 설정합니다.
      channelGroupId: "channel-group-test-94ab2b51-b7e1-4b74-9a9c-9fb6e117a6ac",
      orderName: "월간 이용권 정기결제",
      // 수기 결제 API를 참고해 고객 정보를 채워주세요.
      customer: {
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",

      // 수기(키인)결제 API를 참고해 카드 / 가상계좌 정보를 채워주세요.
      method: {
        card: {
          credential: {
            number: "0000123400001234", // 16자리 숫자만 입력해야 합니다.
            expiryYear: "26", // 연도의 뒤 2자리를 입력해야 합니다.
            expiryMonth: "12",
            birthOrBusinessRegistrationNumber: "900101", // 생년월일 6자리 또는 사업자 등록번호 10자리를 입력해야 합니다.
            passwordTwoDigits: "00", // 카드 비밀번호 앞 2자리 입력해야 합니다.
          },
        },
      },
      productType: "PHYSICAL", // 상품이 실물인 경우 `PHYSICAL`, 디지털인 경우 `DIGITAL` 입력해야 합니다.
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

</div>

<div class="tabs-content" data-title="가상계좌 결제">

```ts
// 포트원 수기(키인)결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/instant`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelGroupId: "channel-group-live-94ab2b51-b7e1-4b74-9a9c-9fb6e117a6ac",
      orderName: "월간 이용권 정기결제",
      // 수기 결제 API를 참고해 고객 정보를 채워주세요.
      customer: {
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
        phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
        email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",

      // 수기(키인)결제 API를 참고해 카드 / 가상계좌 정보를 채워주세요.
      method: {
        virtaulAccount: {
          bank: "KOOKMIN", // 은행별 enum 확인 후 발급할 은행 값을 입력해야 합니다.
          expiry: {
            dueDate: "2023-12-21T00:00:00+09:00", // RFC 3339 형식으로 입력해야 합니다.
          },
          option: {
            type: "NORMAL", // 일반 가상계좌 (회전식)인 경우 `NORMAL`로 입력해야 합니다.
          },
          cashReceipt: {
            type: "PERSONAL", // 소득공제용인 경우 `PERSONAL`, 지출증빙용인 경우 `CORPORATE`로 입력해야 합니다.
            customerIdentityNumber: "01000001234", // 현금영수증 발급 번호
          },
          remitteeName: "포트원", // 가상계좌 예금주명을 입력해야 합니다.
        },
        productCount: 1, // 상품 개수를 입력해야 합니다.
      },
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

</div>

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

- channelGroupId: string

  **스마트 라우팅 그룹 ID**

  관리자 콘솔의 \[연동 관리] → \[스마트 라우팅] 메뉴에서 확인할 수 있습니다.

  스마트 라우팅 그룹 ID를 지정하여 결제창을 호출하면, 스마트 라우팅 그룹 내 설정된 채널 비율에 따라
  확률 기반으로 하나의 결제대행사가 호출됩니다.

### 필수 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- merchant\_uid: string

  **고객사 거래 고유번호**

- amount: number

  **주문 금액**

- card\_number: string

  **카드번호**

  (dddd-dddd-dddd-dddd) 기재 양식을 유의하세요.

- expiry: string

  **카드 유효기간**

  (YYYY-MM) 기재 양식을 유의하세요.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- orderName: string

  **주문명**

- amount: object

  **주문 금액**

  - total: number

    **결제 금액**

- currency: string

  **결제 통화**

- customer: object

  **구매자 정보**

  - name: object

    **구매자 이름**

    - full: string

      **구매자 전체 이름**

      `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

    가상계좌 발급 시 필수 입력해야 합니다.

  - email: string

    **구매자 이메일 주소**

    가상계좌 발급 시 필수 입력해야 합니다.

- method: object

  **결제 수단**

  - card: object

    **카드 결제**

    - credential: object

      **카드 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **카드 유효기간 중 연도**

      - expiryMonth: string

        **카드 유효기간 중 월**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자번호**

      - passwordTwoDigits: string

        **카드 비밀번호 앞 2자리**

  - virtualAccount: object

    **가상 계좌**

    - bank: object

      **은행 정보**

    - expiry: object

      **만료 기한**

      - dueDate: string

        **만료 시점**

    - option: object

      **가상계좌 발급 방식**

      - type: string

        **가상계좌 발급 유형**

        일반 가상계좌 (회전식)인 경우 `NOMAL`를 입력해야 합니다.

    - cashReceipt: object

      **현금영수증 정보**

      - type: string

        **현금영수증 발급 유형**

      - customerIdentityNumber: string

        **현금영수증 발급 식별 정보**

    - remitteeName: string

      **가상계좌 예금주명**

- productType: string

  **상품 유형**

  KSNET로 카드 결제시에만 MID 설정 정보와 검증을 진행합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

- productCount: string

  **상품 개수**

  스마트로로 가상계좌 발급시에만 정보가 유효합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 실제로 결제된 결제대행사 정보는 결제 조회 시 확인할 수 있습니다. </summary>

실제로 결제를 요청하여 결제 승인, 실패된 경우 결제대행사 정보를 확인할 수 있습니다.
<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->결제대행사 정보는 콘솔 결제내역 또는 결제 조회 API의 `pg_provider` 파라미터에서 확인 가능합니다.<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->
<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->결제대행사 정보는 콘솔 결제내역 또는 결제 조회 API의 `channel` 파라미터에서 확인 가능합니다.<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

<details>

<summary> 수기(키인) 결제 시 카드를 이용하는 경우 결제대행사 계약을 사전에 확인하시길 바랍니다. </summary>

카드 결제의 경우 결제대행사에 따라 카드번호, 유효기간, 비밀번호, 생년월일 4가지 정보를 다르게 요구할 수 있습니다.
스마트 라우팅 사용 시 4개의 정보를 전부 입력하시거나 사용하시는 결제대행사의 계약 조건을 모두 충족할 수 있도록
파라미터를 입력한 후 결제 요청을 해야합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 가상계좌 발급 이용 시 고정식 가상계좌 사용을 권장하지 않습니다.</summary>

고정식 가상계좌의 경우 결제대행사별로 발급 유형이 다르므로 스마트 라우팅 이용 시 가상계좌 발급이
올바르지 않을 수 있습니다.
가상계좌 발급을 이용하시는 경우 일반(회전식) 가상계좌를 이용하시길 권장드립니다.

</details>

<details>

<summary> 가상계좌 발급 이용 시 `virtualAccount.expiry.validHours` 사용을 권장하지 않습니다.</summary>

스마트 라우팅 이용 시 가상계좌 만료시간 파라미터 중 `virtualAccount.expiry.validHours` 사용을 권장하지 않습니다.
해당 파라미터의 경우 지원하는 PG사가 한정적이기 때문에 해당 파라미터를 사용하는 경우 일부 PG사에 한하여
정상적으로 가상계좌 발급이 불가능할 수 있습니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## API 빌링키 발급 및 정기결제 연동하기

빌링키 발급 API 호출 시 생성한 스마트 라우팅 그룹의 ID를 전용 파라미터인 `channelGroupId`에
지정하여 사용이 가능합니다.
`channelGroupId`를 지정하여 빌링키 발급 요청 시 그룹 내 모든 채널로 빌링키 발급을 시도합니다.
이후 발급된 결제대행사의 빌링키가 모두 포트원 빌링키에 맵핑됩니다.

<div class="hint" data-style="info">

스마트 라우팅 기능을 이용하여 발급된 포트원 빌링키는 **슈퍼빌링키**라고 부릅니다.

</div>

해당 빌링키로 빌링키 결제 또는 예약결제 API를 이용하여 결제 요청 시 해당 스마트 라우팅 그룹 내 채널
비율 설정에 따라 결제를 요청합니다.

이 외에 빌링키 발급 및 결제 요청 시 다른 기능들은 기존과 동일하게 사용이 가능합니다.
단, 결제대행사 별로 지원하는 기능이 다를 수 있으니 그룹 내에서 사용하는 모든 결제대행사에서 지원하는
기능만 사용하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

빌링키 결제와 관련된 자세한 내용은 [비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

빌링키 결제와 관련된 자세한 내용은 [빌링결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/readme) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 예제 코드

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 발급">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts
const issueResponse = await fetch(
  `https://api.iamport.kr/subscribe/customers/${customer_uid}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",
      customer_id: customer_id, //고객 식별 정보로 고객사에서 기입
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      // 중략...
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
const {
  billingKeyInfo: { customer_uid },
} = await issueResponse.json();
// 빌링키가 발급되었습니다! 빌링키를 저장하거나 결제하는 로직을 구성하세요.
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

```ts
const issueResponse = await fetch("https://api.portone.io/billing-keys", {
  method: "POST",
  headers: {
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chanenlGroupId: "channel-group-live-94ab2b51-b7e1-4b74-9a9c-9fb6e117a6ac",
    customer: {
      id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
      name: {
        full: "김포트", // 고객 이름을 입력해야 합니다.
      },
      phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
      email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
    },
    method: {
      card: {
        credential: {
          number: "0000123400001234", // 16자리 숫자만 입력해야 합니다.
          expiryYear: "26", // 연도의 뒤 2자리를 입력해야 합니다.
          expiryMonth: "12",
          birthOrBusinessRegistrationNumber: "900101", // 생년월일 6자리 또는 사업자 등록번호 10자리를 입력해야 합니다.
          passwordTwoDigits: "00", // 카드 비밀번호 앞 2자리 입력해야 합니다.
        },
      },
    },
  }),
});
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);

const {
  billingKeyInfo: { billingKey, channels },
  channelSpecificFailures,
} = await issueResponse.json();

// `channels` 필드에 사용 가능한 채널 여러 개가 포함된 것을 확인할 수 있습니다.
// 이 필드는 빌링키 조회에서도 확인 가능합니다.
console.log(`빌링키: ${billingKey}`);
console.log(`발급 성공한 채널: ${channels}`);

if (channelSpecificFailures.length !== 0)
  console.log(`발급에 실패한 채널이 있습니다: ${channelSpecificFailures}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts
// 포트원 빌링키 결제 API 호출
const paymentResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/again",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_uid: "customer_uid", // 슈퍼 빌링키
      merchant_uid: "merchant_uid",
      name: "월간 이용권 정기결제",
      // 빌링키 결제 API를 참고해 고객 정보를 채워주세요.
      amount: {
        total: 8900,
      },
      currency: "KRW",
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/billing-key`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
      orderName: "후불 결제",
      customer: {
        id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
        phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
        email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",
      productType: "PHYSICAL", // 상품이 실물인 경우 `PHYSICAL`, 디지털인 경우 `DIGITAL` 입력해야 합니다.
      productCount: 1, // 상품 개수를 입력해야 합니다.
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts title="server-side"
// 결제 예약
const paymentResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/schedule",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_uid: "gildong_0001_1234", // 슈퍼 빌링키
      schedules: [
        {
          merchant_uid: "order_monthly_0001", // 주문 번호
          schedule_at: 1519862400, // 결제 시도 시각 in Unix Time Stamp. 예: 다음 달 1일
          amount: 8900,
          name: "월간 이용권 정기결제",
          buyer_name: "홍길동",
          buyer_tel: "01012345678",
          buyer_email: "gildong@gmail.com",
          // 중략...
        },
      ],
    }),
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/schedule`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payment: {
        billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
        orderName: "월간 이용권 정기 결제",
        customer: {
          id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
          name: {
            full: "김포트", // 고객 이름을 입력해야 합니다.
          },
          phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
          email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
        },
        amount: {
          total: 8900,
        },
        currency: "KRW",
        productType: "PHYSICAL", // 상품이 실물인 경우 `PHYSICAL`, 디지털인 경우 `DIGITAL` 입력해야 합니다.
        productCount: 1, // 상품 개수를 입력해야 합니다.
      },
      timeToPay: "2024-05-01T00:00:00+09:00", // ISO8601 형식으로 입력해야 합니다.
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

</div>

### 주요 파라미터

- channelGroupId: string

  **스마트 라우팅 그룹 ID**

  관리자 콘솔의 \[연동 관리] → \[스마트 라우팅] 메뉴에서 확인할 수 있습니다.

  스마트 라우팅 그룹 ID를 지정하여 결제창을 호출하면, 스마트 라우팅 그룹 내 설정된 채널 비율에 따라
  확률 기반으로 하나의 결제대행사가 호출됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

스마트 라우팅 그룹 ID를 지정하여 빌링키 발급 API를 호출하면, 스마트 라우팅 그룹 내 활성화 된 채널들에 대해 빌링키 발급을 시도합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

### 필수 파라미터

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 발급">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- customer\_uid: string

  **구매자의 결제 수단 식별 고유번호**

- card\_number: string

  **카드번호**

  (dddd-dddd-dddd-dddd) 기재 양식을 유의하세요.

- expiry: string

  **카드 유효기간**

  (YYYY-MM) 기재 양식을 유의하세요.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- customer: object

  **구매자 정보**

  - name: object

    **구매자 이름**

    - full: string

      **구매자 전체 이름**

      `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

    가상계좌 발급 시 필수 입력해야 합니다.

  - email: string

    **구매자 이메일 주소**

    가상계좌 발급 시 필수 입력해야 합니다.

- method: object

  **결제 수단**

  - card: object

    **카드 결제**

    - credential: object

      **카드 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **카드 유효기간 중 연도**

      - expiryMonth: string

        **카드 유효기간 중 월**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자번호**

      - passwordTwoDigits: string

        **카드 비밀번호 앞 2자리**

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- customer\_uid: string

  **구매자의 결제 수단 식별 고유번호**

- merchant\_uid: string

  **고객사 주문번호**

  동일한 주문 번호로 중복 결제가 불가하며, 스마트로 신모듈의 경우 특수문자 포함이 불가능합니다.

- amount: number

  **결제금액**

- name: string

  **제품명**

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- orderName: string

  **주문명**

- amount: object

  **주문 금액**

  - total: number

    **결제 금액**

- currency: string

  **결제 통화**

- customer: object

  **구매자 정보**

  - id: string

    **구매자 식별정보**

  - name: object

    **구매자 이름**

    - full: string

      **구매자 전체 이름**

      `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

    가상계좌 발급 시 필수 입력해야 합니다.

  - email: string

    **구매자 이메일 주소**

    가상계좌 발급 시 필수 입력해야 합니다.

- productType: string

  **상품 유형**

  KSNET로 카드 결제시에만 MID 설정 정보와 검증을 진행합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

- productCount: string

  **상품 개수**

  스마트로로 가상계좌 발급시에만 정보가 유효합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- customer\_uid: string

  **구매자의 결제 수단 식별 고유번호**

- schedules.merchant\_uid: string

  **고객사의 주문번호**

  동일한 주문 번호로 중복 결제가 불가하며, 스마트로 신모듈의 경우 특수문자 포함이 불가능합니다.

- schedules.schedule\_at: integer

  **예약시각**

- schedules.currency: string

  **결제 통화**

  e.g) KRW, USD 등 (단, 페이팔 신모듈의 경우 KRW 결제가 불가능하므로 반드시 유효한 값을 필수로 입력해야합니다.)

- schedules.amount: number

  **결제금액**

- schedules.name: string

  **주문명**

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- payment: object

  **결제 정보**

  - billingKey: string

    **빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **주문 금액**

    - total: number

      **결제 금액**

  - currency: string

    **결제 통화**

  - customer: object

    **구매자 정보**

    - name: object

      **구매자 이름**

      - full: string

        **구매자 전체 이름**

        `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

    - phoneNumber: string

      **구매자 연락처**

      가상계좌 발급 시 필수 입력해야 합니다.

    - email: string

      **구매자 이메일 주소**

      가상계좌 발급 시 필수 입력해야 합니다.

  - productType: string

    **상품 유형**

    KSNET로 카드 결제시에만 MID 설정 정보와 검증을 진행합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

  - productCount: string

    **상품 개수**

    스마트로로 가상계좌 발급시에만 정보가 유효합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

- timeToPay: string

  **결제 예정 시점**

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

</div>

### 유의사항

<details>

<summary> 빌링키 발급 요청 시 지정한 그룹 내 모든 채널로 빌링키를 발급합니다. </summary>

그룹 내 채널을 활성화한 채로 비율을 0으로 설정한 경우 해당 채널로도 빌링키 발급을 요청합니다.
빌링키 발급을 원하지 않는 경우 채널을 비활성화 상태로 두거나 그룹 내에서 삭제해야 합니다.

</details>

<details>

<summary> 슈퍼빌링키 발급 시 일부 PG사에 대해서만 발급될 수 있습니다.  </summary>

슈퍼 빌링키를 발급 요청 시 일부 PG사는 요청은 성공하고, 일부 PG사는 요청은 실패하는 경우가 발생할 수 있습니다.
이 경우 포트원 빌링키(슈퍼빌링키)는 정상적으로 발급되지만 사용 가능한 빌링키는 요청이 성공한
결제대행사의 빌링키로 제한됩니다.

요청이 실패한 결제대행사 목록은 API 응답의 `channelSpecificFailures` 필드로 확인할 수 있고,
이 배열에 항목이 있는 경우 필요에 따라 빌링키 발급 실패로 취급하여 사용할 수 있습니다.

</details>

<details>

<summary> 슈퍼빌링키 결제 시 특정 PG사를 지정할 수 있습니다.  </summary>

슈퍼 빌링키를 이용해 결제를 요청할 때 결제 요청에 `channelKey` 파라미터를 전달하는 경우 해당 채널로
결제를 요청합니다.

</details>

<details>

<summary> 슈퍼빌링키 결제 시 그룹 설정에 따라 결제됩니다.  </summary>

`channelKey`를 별도로 전달하지 않은 경우 아래와 같이 자동으로 채널이 결정됩니다.

- 슈퍼 빌링키 발급에 사용된 스마트 라우팅 그룹의 현재 설정된 채널 비율에 따라 확률에 기반하여
  자동으로 선택합니다.

- 만약 결제 시점에 스마트 라우팅 그룹 내에 새로운 결제대행사 채널이 추가되어 있는 경우,
  해당 결제대행사의 빌링키가 발급되어 있지 않으므로 채널 선택 시 제외됩니다.

예를 들어 PG사 A, B, C에 대해 슈퍼 빌링키가 발급되었고,
이후 그룹 설정을 B 10%, C 30%, D 60%로 변경한 후 결제 요청을 하면
빌링키가 B와 C에 대해서만 존재하기 때문에 B와 C의 설정된 비율에 따라 확률에 기반하여 자동으로 선택됩니다.

</details>

<details>

<summary> 슈퍼 빌링키를 이용하여 결제 요청 시 불가피하게 그룹 내 비율이 0인 채널로 진행될 수 있습니다. </summary>

슈퍼 빌링키를 이용하여 결제 요청했을 때, 슈퍼 빌링키에 맵핑된 결제대행사 빌링키 중 그룹 비율에 따라
사용 가능한 빌링키가 없는 경우 그룹 내 채널 비율이 0으로 설정되어있더라도 해당 결제대행사로 결제가
일어날 수 있습니다.

예를 들어, 그룹 내에 나이스페이먼츠, KG이니시스, 토스페이먼츠 총 3개의 결제대행사를 설정한 경우 빌링키
발급 시 3개의 결제대행사로부터 빌링키를 발급 받은 후 슈퍼 빌링키에 맵핑 됩니다.
이후 그룹 설정을 토스페이먼츠 0%, 스마트로 100%로 변경한 경우 위에 발급한 슈퍼 빌링키로 결제 요청 시
토스페이먼츠 빌링키만 사용이 가능하기 때문에 0%로 결제 비율이 설정되어있음에도 토스페이먼츠로 결제가
발생하게 됩니다.
만약 기존에 발급한 결제대행사 채널이 모두 비활성화되어 있거나 그룹 내에서 삭제된 경우 결제가 실패되오니
그룹 설정 변경 시 유의하시기 바랍니다.

</details>


# https://developers.portone.io/opi/ko/extra/smart-routing/intro

---
title: 스마트 라우팅
description: 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
targetVersions:
  - v1
  - v2
---

## 스마트 라우팅이란?

(관련 이미지 첨부)

스마트 라우팅은 원클릭 결제 트래픽 자동 분산 서비스로 최초 연동 이후 포트원 관리자콘솔 내에서
결제대행사 추가/삭제 및 결제대행사 별 결제 요청 비율을 설정할 수 있습니다.
노코드 방식으로 고객사에서 멀티 PG 인프라를 구성하는데 필요한 개발 리소스를 확 줄였습니다.

SDK 일반결제 및 API 키인(수기) 결제 요청 시 스마트 라우팅 그룹 아이디를 지정하여 호출하는 경우
설정하신 그룹 내 결제대행사 비율에 따라 확률에 기반하여 결제를 요청합니다.

API 빌링키 발급 요청 시 스마트 라우팅 그룹 아이디를 지정하여 호출하는 경우 설정하신 그룹 내
모든 결제대행사로 빌링키를 발급 요청합니다. 하나의 포트원 빌링키에 발급된 모든 결제대행사의 빌링키가
맵핑되며 이를 **슈퍼 빌링키**라고 부릅니다. 슈퍼 빌링키를 이용하여 빌링키 결제 또는 예약 결제 시
그룹 내 결제대행사 비율에 따라 확률에 기반하여 그 중 하나의 결제대행사 빌링키로 결제를 요청합니다.

## 사용 가능한 PG사 및 결제수단&#x20;

스마트 라우팅 기능은 아래 PG사에 한하여 제공하고 있습니다.
(추후 지원 PG사 확대 예정)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

### 결제창(SDK) 인증결제

- **나이스페이먼츠(신모듈)** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **토스페이먼츠(신모듈)** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **KSNET** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **스마트로(신모듈)** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제

### API 수기(키인)결제

- **나이스페이먼츠(신모듈)** : 카드
- **토스페이먼츠(신모듈)** : 카드
- **KSNET** : 카드

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

### 결제창(SDK) 인증결제

- **나이스페이먼츠** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **KG이니시스** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **토스페이먼츠** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **한국결제네트웍스(KPN)** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **KSNET** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **스마트로** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **NHN KCP** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제

### API 수기(키인)결제

- **나이스페이먼츠** : 카드 / 가상계좌
- **KG이니시스** : 카드 / 가상계좌
- **토스페이먼츠** : 카드 / 가상계좌
- **한국결제네트웍스(KPN)** : 카드 / 가상계좌
- **KSNET** : 카드 / 가상계좌
- **스마트로** : 가상계좌
- **NHN KCP** : 카드 / 가상계좌

### API 빌링키 발급 및 정기결제

- **나이스페이먼츠** : 카드
- **KG이니시스** : 카드
- **토스페이먼츠** : 카드
- **한국결제네트웍스(KPN)** : 카드
- **KSNET** : 카드
- **스마트로** : 카드
- **NHN KCP** : 카드

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 스마트 라우팅 연동 안내

(관련 이미지 첨부)

스마트 라우팅을 사용하기 위해서는 포트원 관리자콘솔 내 \[연동 관리] - \[스마트 라우팅]에서 그룹 설정이 필요합니다.
자세한 내용은 [스마트 라우팅 그룹 설정 가이드](https://developers.portone.io/opi/ko/extra/smart-routing/console-guide)에서 확인할 수 있습니다.

그룹 설정 후 결제 요청 시 `channelGroupId` 파라미터를 지정하여 호출해야 합니다.
자세한 내용은 [스마트 라우팅 연동하기](https://developers.portone.io/opi/ko/extra/smart-routing/integration)에서 확인할 수 있습니다.

## 스마트 라우팅 FAQ

<details>

<summary> 스마트 라우팅 그룹 이용 시 지원되는 모든 결제수단을 사용할 수 있는건가요? </summary>

스마트 라우팅 그룹을 지정하여 결제 호출 시 결제 수단에 대한 제약은 없습니다.
다만, 스마트 라우팅 이용 시 동일한 그룹 내에 설정된 채널은 가급적 동일한 결제수단으로 계약이 완료되어 있어야 합니다.

ex) 카드 및 가상계좌 이용을 원하시는 경우 스마트 라우팅 그룹에서 사용할 모든 PG사와
카드 및 가상계좌 사용 계약이 필요합니다.

그렇지 않는 경우 결제 호출 시 결제 수단에 따라 에러가 리턴될 수 있으며, 결제창 호출이 불가능할 수 있습니다.

</details>

<details>

<summary> 간편결제도 스마트 라우팅 기능을 사용할 수 있나요? </summary>

**간편결제 허브형을 사용하시는 경우**, 결제대행사 별 계약에 따라 결제창에 표시되는 간편결제가 상이할 수 있습니다.

**간편결제 다이렉트 호출을 사용하시는 경우**, 결제대행사 별 계약에 따라 결제 호출 시 에러가 리턴되며 결제창이
호출되지 않을 수 있습니다. 가급적 결제대행사 별 동일한 간편결제 수단을 모두 계약하신 후 사용하시길 권장드립니다.

단, **간편결제 직연동**의 경우 스마트 라우팅 기능을 제공하지 않습니다.

</details>

<details>

<summary> SDK(결제창) 빌링키 발급할 때도 사용하고 싶어요!</summary>

SDK(결제창) 빌링키 발급의 경우 해당 기능을 지원하지 않습니다. 빌링키 발급 시 스마트 라우팅 기능을 사용하고
싶으신 경우 API 방식으로 빌링키를 발급하여 사용하시길 권장드립니다.

</details>


# https://developers.portone.io/opi/ko/extra/promotion/console-guide

---
title: 프로모션 생성하기
description: 프로모션 기간, 예산, 할인 조건 등 설정 방법을 안내합니다.
targetVersions:
  - v1
  - v2
---

## 프로모션 생성하기

프로모션 결제를 사용하기 위해서는 포트원 관리자콘솔 내 \[프로모션]에서 프로모션 설정이 필요합니다.
프로모션은 상점별로 생성하여 사용할 수 있으며, 하위상점을 사용하시는 고객사의 경우 프로모션을 각각 생성하여 사용하시길 권장드립니다.

1. 포트원 콘솔 내에서 \[프로모션]을 클릭하세요.
2. \[+ 프로모션 추가]를 클릭하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 1)

3. **프로모션 추가** 화면에서 다음 정보를 입력하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 2)

- \[프로모션 이름] : 생성된 프로모션을 고객사에서 구분할 수 있는 이름을 입력하시길 권장드립니다.

- \[프로모션 일정] : 프로모션 시작일과 종료일을 선택하세요. 시작일이 미래인 경우 생성 후 **예정** 상태이며,
  설정된 시작일이 경과되면 **진행중** 상태로 변경되며 프로모션 할인이 적용됩니다.

- \[카드사] : 프로모션 할인을 제공할 카드사를 선택하세요. 카드사는 한 프로모션 당 한 곳만 설정할 수 있습니다.

- \[프로모션 예산] : 프로모션을 진행할 전체 예산으로 할인 금액으로 사용할 예산을 입력하세요.
  예산이 100% 소진된 이후 결제 건에 대해서는 프로모션이 적용되지 않습니다.

- \[프로모션 예산 미복구] : 프로모션 할인이 적용된 거래 건이 부분취소 혹은 전체취소 되었을 때,
  적용되었던 프로모션 금액을 예산에 다시 포함시킬지 여부를 설정할 수 있습니다.
  기본적으로 취소된 프로모션 금액이 예산에 복구되며, 프로모션 예산 미복구를 활성화하는 경우 복구되지 않습니다.
  프로모션 예산 미복구를 활성화하는 경우, 환불 예상 비율 혹은 환불 예상 금액을 입력하여 여유 예산을 설정할 수 있습니다.

- \[할인방식] : 할인율 또는 할인금액을 선택할 수 있으며, 입력된 수치에 따라 정률 또는 정액으로 할인 금액이 적용됩니다.
  할인율 방식을 선택한 경우, \[최대 할인 금액]을 설정할 수 있으며 최대 할인 금액 설정시 프로모션 할인 금액이
  최대 할인 금액을 초과할 수 없습니다. 최대 할인 금액을 설정하지 않는 경우 주문 금액에 정률로 계산되어 프로모션 할인이 적용됩니다.

- \[할인 조건 설정] : 할인 조건을 최대 5개까지 설정할 수 있습니다. 최소 결제 금액을 기준으로 구간별
  할인금액 / 할인율을 설정할 수 있습니다.

  - \[최소 결제 금액] : 최소 결제 금액 설정시 주문 금액이 최소 결제 금액 이상인 경우에만 프로모션 할인이 적용됩니다.
    만약 최소 결제 금액을 0으로 입력하는 경우 해당 카드로 결제되는 모든 건에 프로모션 할인이 적용됩니다.

  - \[할인율] : 입력된 할인율만큼 주문 금액을 기준으로 정률로 계산되어 할인이 적용됩니다.

  - \[할인금액] : 입력된 할인 금액만큼 할인이 적용됩니다.

  - 예를 들어, `10000원 이상 결제 시 10% 할인, 50000원 이상 결제 시 20% 할인` 과 같은 정책을 생성하고 싶다면
    조건 1을 **최소 결제 금액 10000원, 할인율 10%**, 조건 2를 **최소 결제 금액 50000원, 할인율 20%** 와 같이 설정하시기 바랍니다.

<div class="hint" data-style="info">

1. 할인 조건의 경우 생성 후 수정이 불가능하므로 변경을 원하시면 삭제 후 다시 추가해야 합니다.

2. 추가 할인 조건의 경우 앞서 생성된 조건의 할인비율보다 크게 설정해야합니다.
   할인 금액 방식으로 입력하는 경우에도 (할인 금액 / 최소 결제 금액) \* 100으로 할인율을 계산하며,
   만약 할인율이 낮아지는 경우 금액 입력이 불가능 합니다.

</div>

4. \[저장]을 클릭하세요.

## 프로모션 수정하기

1. 생성된 프로모션 우측에 \[...]을 클릭하세요.
2. \[수정]을 클릭하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 3)

3. **프로모션 수정** 화면에서 원하는 정보를 수정하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 4)

- **예정** 상태인 경우, 프로모션 아이디를 제외한 모든 정보를 수정할 수 있습니다.
- **일시중지**, **진행중**, **예산소진** 상태인 경우 프로모션 이름 및 프로모션 일정만 수정할 수 있습니다.
- **종료** 상태인 경우 모든 정보를 수정할 수 없습니다.

## 프로모션 상태 안내

생성된 프로모션은 총 5개의 상태로 구분할 수 있으며, 상태에 따라 프로모션 아이디를 지정하여 결제 요청했더라도
프로모션 할인 금액이 적용되지 않을 수 있습니다.

### 예정

프로모션 생성 후 프로모션 시작일이 경과되지 않은 경우 **예정**상태로 표시됩니다.
예정 상태인 경우 프로모션 아이디를 제외한 모든 정보를 수정할 수 있습니다.

예정 상태인 프로모션을 일시중지하는 경우 프로모션 시작일이 경과되어도 프로모션이 진행중 상태로 변경되지 않으며,
프로모션 아이디를 지정하여 결제를 요청하더라도 프로모션 할인이 적용되지 않습니다.

예정 상태인 프로모션을 종료하는 경우 종료 상태로 변경되며 상태 변경이 불가능합니다.

### 진행중

프로모션 생성 후 프로모션 시작일이 경과된 경우 **진행중**상태로 표시됩니다.
진행중 상태인 경우 프로모션 이름 및 프로모션 일정만 수정할 수 있습니다.

진행중 상태인 경우 결제 요청 시 프로모션 아이디를 지정하면 프로모션 할인이 적용됩니다.

진행중 상태인 프로모션을 일시중지하는 경우 직후 결제 요청 건부터 프로모션 아이디를 지정했더라도 프로모션 할인이 적용되지 않습니다.
다만, 일시중지 직전 결제 요청되었으나 결제 승인이 완료되지 않은 건의 경우 프로모션 할인 금액이 적용될 수 있습니다.

진행중 상태인 프로모션을 종료하는 경우 종료 상태로 변경되며 상태 변경이 불가능합니다.

### 일시중지

사용자가 직접 생성된 프로모션을 일시중지할 수 있으며 예정, 진행중, 예산소진 상태인 경우 일시중지가 가능합니다.

예정이거나 진행중 혹은 예산소진 상태에서 일시중지 상태로 변경된 경우 프로모션 이름 및
프로모션 일정 중 종료일만 변경할 수 있으며, 시작일은 변경이 불가능합니다.

일시중지하는 경우 프로모션 시작일이 경과되거나 예산이 남아있어도 프로모션 할인은 적용되지 않습니다.
재시작하여 프로모션이 원 상태로 변경되며, 다시 사용이 가능합니다.

### 예산소진

프로모션 할인금액이 설정된 예산만큼 모두 소진된 경우 **예산소진**상태로 표시됩니다.
예산소진 상태인 경우 프로모션 아이디를 지정하여 결제 요청하더라도 프로모션 할인이 적용되지 않습니다.

만약 프로모션 할인이 적용된 거래건이 취소되는 경우 해당 거래 건에 적용되었던 할인 금액만큼 예산에 귀속되며,
이후 거래 요청 시 할인 금액이 적용됩니다.

### 종료

프로모션 종료일이 경과되거나 사용자가 종료한 경우 **종료**상태로 표시됩니다.
종료된 프로모션은 재시작할 수 없습니다.

프르모션이 종료되는 경우 즉시 프로모션 할인이 적용되지 않습니다. 다만, 종료 직전 결제 요청한 경우 프로모션 종료 이후
결제 승인이 완료되면 프로모션 할인금액이 적용됩니다.

## 프로모션 엑셀 다운로드

엑셀 다운로드 클릭 시 **프로모션 내역**, **거래 내역** 두 가지 유형으로 데이터를 다운로드 받을 수 있습니다.

- 프로모션 내역 : 조회 기간 내 전체 프로모션 내역에 대해 다운로드할 수 있습니다.

- 프로모션 아이디, 프로모션 이름, 상태, 카드사, 예산, 소진금액, 할인조건, 최대 할인 금액, 프로모션 생성날짜,
  프로모션 수정 날짜, 프로모션 시작 날짜, 프로모션 종료 예정 날짜, 프로모션 실제 종료 날짜가 포함됩니다.

- 거래 내역 : 조회 기간 내 전체 프로모션이 적용된 건별 거래 내역에 대해 다운로드 할 수 있습니다.

- 고객사 주문번호, 포트원 거래번호, 프로모션 아이디, PG사 승인번호, 카드사 승인번호 등 거래 데이터가 포함됩니다.

- 만약 특정 프로모션이 적용된 거래 내역 확인을 원하시는 경우 해당 프로모션의 `...` 버튼 클릭 후 `거래내역 다운로드`를 클릭하세요.


# https://developers.portone.io/opi/ko/extra/promotion/integration

---
title: 프로모션 결제 연동하기
description: 프로모션 할인금액을 적용하는 방법을 안내합니다.
targetVersions:
  - v1
  - v2
---

## 프로모션 결제 연동하기

고객사에서 카드사 즉시할인을 쉽게 적용하고 운영 관리하실 수 있도록 프로모션 기능을 제공하고 있습니다.
포트원 콘솔 내 **프로모션** 메뉴에서 카드사 별 프로모션을 생성 후 결제 요청 시 적용할 수 있으며,
프로모션에 설정된 예산, 할인방식, 할인금액/할인률에 따라 자동으로 계산되어 결제가 승인됩니다.

<div class="hint" data-style="info">

프로모션 메뉴의 경우 도입 고객사에 한하여 포트원 콘솔 내에서 확인하실 수 있습니다.

프로모션 결제를 연동하시려면 관리자콘솔에서 프로모션을 먼서 생성해야합니다.
프로모션 생성 방법이 궁금하다면 [프로모션 설정 가이드](https://developers.portone.io/opi/ko/extra/promotion/console-guide)를 확인해 보세요.

</div>

### 프로모션 할인 금액 표시하기

포트원에서 제공하는 프로모션을 이용하시는 경우 결제 요청 전 고객사에서 주문 페이지를 구현하여 사용하시길 권장드립니다.

고객사의 주문 페이지에 프로모션 할인 금액을 표시하시려면 [프로모션 단건 조회 API](https://developers.portone.io/api/rest-v2/promotion?v=v2)를 참고하여
사용할 프로모션 아이디로 API를 조회한 후 응답 필드의 `discountPolicy.partitions[]` 내의 `scheme`과 `amountFrom` 데이터를 갖고 직접 계산해서 사용하시길 권장드립니다.

**프로모션 할인 정책 조회 예시**

예를 들어 조회할 프로모션의 할인 정책이 `10000원 이상 결제 시 10% 할인, 50000원 이상 결제 시 20% 할인` 이라면 `discountPolicy` 필드는 아래와 같이 조회가 될 것입니다.

```javascript
const promotion = {
  // ... other fields
  discountPolicy: {
    partitions: [
      {
        amountFrom: 10000,
        scheme: {
          type: "PERCENT",
          percent: 10,
        },
      },
      {
        amountFrom: 50000,
        scheme: {
          type: "PERCENT",
          percent: 20,
        },
      },
    ],
  },
};
```

아래와 같은 로직으로 프로모션이 적용된 이후의 금액을 계산하실 수 있습니다.

```ts
const selectDiscountScheme = (partitions, amount) => {
  const select = (partitions) => {
    const [head, ...tail] = partitions;
    if (tail.length === 0) {
      return head.scheme;
    }

    const from = head.amountFrom;
    const to = tail[0].amountFrom;

    if (from <= amount && amount < to) return head.scheme;
    else return select(tail);
  };

  if (partitions[0].amountFrom > amount) return null;
  else return select(partitions);
};

const getPaymentAmount = (discountScheme, amount) => {
  if (discountScheme.type == "PERCENT") {
    // 정률 할인
    return amount - (amount * discountScheme.percent) / 100;
  } else {
    // 정액 할인
    return amount - discountScheme.amount;
  }
};

const orderAmount = getOrderAmount();
const response = await fetch(
  `https://api.portone.io/promotions/${promotionId}`,
  {
    method: "GET",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
  },
);
const promotion = await response.json();

// 금액 구간에 맞는 할인 정책을 구합니다.
const discountScheme = selectDiscountScheme(
  promotion.discountPolicy.partitions,
  orderAmount,
);
// 프로모션이 적용된 실결제 금액을 구합니다.
const paymentAmount = getPaymentAmount(discountScheme, orderAmount);
```

## SDK(결제창) 인증결제 연동하기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

SDK를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotion_id`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

SDK를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotionId`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

프로모션 결제의 경우 특정 카드사 결제 시 적용되므로 결제 호출 시 **카드 다이렉트**호출 방식만 지원되며,
해당 프로모션의 카드사와 다이렉트 호출 카드사가 일치하는 경우에만 프로모션 조건이 적용됩니다.

만약, 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 진행이 불가하오니 유의하시길 바랍니다.

이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/auth) 및 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
IMP.request_pay(
  {
    isPromotion: true, //프로모션 사용 여부
    promotion_id: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력 (Ex. 현대카드 프로모션)
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //결제수단 선택
    card: {
      direct: {
        code: "367", //현대카드 다이렉트 호출
      },
    },
    merchant_uid: "ORD20180131-0000011", //고객사 주문번호
    name: "Norway swivel chair", //주문명
    amount: 1000, // 결제 금액
    //고객 정보
    buyer_email: "gildong@gmail.com",
    buyer_name: "Hong Gildong",
    buyer_tel: "010-4242-4242",
    buyer_addr: "Shinsa-dong, Gangnam-gu, Seoul",
    buyer_postcode: "01181",
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // Payment is successful
    } else {
      // Payment failed
    }
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout) 및 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v2-sdk/payment-request) 문서를 참고하시기 바랍니다.

### 예제 코드

```tsx
//포트원 인증결제 SDK 호출
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
  promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력 (Ex. 현대카드 프로모션)
  //카드 다이렉트 호출
  card: {
    cardCompany: "HYUNDAI_CARD",
  },
  //기타 인증결제 파라미터 설정
  channelKey: "channel-key-f042e8e2-92f1-4f68-ad61-cec6ede41529",
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
  payMethod: "CARD",
  customer: {
    fullName: "홍길동",
    phoneNumber: "010-1234-5678",
    email: "test@test.com",
  },
});
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- promotion\_id?: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

- card?: object

  **카드 결제 옵션 설정**

  - direct?: object

    **카드 다이렉트 호출**

  - code?: string

    **카드사 코드**

    카드 다이렉트 호출 시 [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 문서를 참조하여 프로모션과 동일한 카드사로 지정해야 합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- promotionId?: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

- card?: object

  **카드 정보**

  - cardCompany?: string

    **카드사 다이렉트 호출 시 필요한 카드사 식별 값**

    카드 다이렉트 호출 시 [카드사 식별 값](https://developers.portone.io/sdk/ko/v2-sdk/payment-request?v=v2#card-object) 문서를 참조하여 프로모션과 동일한 카드사로 지정해야 합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 프로모션 결제를 이용하는 경우 카드 다이렉트 호출 방식으로 결제를 요청해야합니다. </summary>

결제 요청 시 프로모션 아이디를 지정했더라도 카드 다이렉트 방식으로 호출하지 않는 경우 에러가 리턴됩니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary> 프로모션 생성시 카드사와 결제 호출시 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 결제 호출시 `card.direct.code`에 지정한 카드사가 일치하지 않는 경우 에러가 리턴됩니다.
결제 요청시 동일한 카드사로 매칭하여 호출해야 합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션 생성시 카드사와 결제 호출시 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 결제 호출시 `card.cardCompany`에 지정한 카드사가 일치하지 않는 경우 에러가 리턴됩니다.
결제 요청시 동일한 카드사로 매칭하여 호출해야 합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## API 수기(키인)결제 연동하기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

API를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotion_id`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

API를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotionId`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

해당 프로모션의 카드사와 수기(키인) 결제 요청 시 입력한 카드의 카드사가 일치하는 경우에만 프로모션 조건이 적용됩니다.
(입력한 카드의 카드사 정보는 카드 BIN번호를 기준으로 체크됩니다.)
만약, 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 진행이 불가하오니 유의하시길 바랍니다.

이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
// card_number, expiry, birth, pwd_2digit 등 정보를 전달받습니다.
// 포트원 비인증 결제(일회성) API 호출
const onetimeResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/onetime",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pg: `${pg_provider}.${pg_mid}`,
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력
      // 중략...
    }),
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [수기(키인)결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/keyin) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
// 포트원 수기(키인)결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/instant`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelKey: "channel-key-f042e8e2-92f1-4f68-ad61-cec6ede41529",
      //적용할 프로모션 아이디 입력
      promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e",
      orderName: "1개월 이용권",
      // 수기 결제 API를 참고해 고객 정보를 채워주세요.
      customer: {
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",

      // 수기(키인)결제 API를 참고해 카드 정보를 채워주세요.
      method: {
        card: {
          cardCredintial: {
            number: "0000123400001234", // 16자리 숫자만 입력해야 합니다.
            expiryYear: "26", // 연도의 뒤 2자리를 입력해야 합니다.
            expiryMonth: "12",
            birthOrBusinessRegistrationNumber: "900101", // 생년월일 6자리 또는 사업자 등록번호 10자리를 입력해야 합니다.
            passwordTwoDigits: "00", // 카드 비밀번호 앞 2자리 입력해야 합니다.
          },
        },
      },
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- promotion\_id: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- promotionId: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 프로모션 생성시 카드사와 결제 요청시 입력된 카드의 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 결제 요청시 입력한 카드 정보의 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 실패 처리됩니다.

</details>

## API 정기결제 연동하기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

발급된 빌링키를 이용하여 단건 결제 API 또는 예약 결제 API를 이용하는 경우
API 요청시 생성한 프로모션의 ID를 전용 파라미터인 `promotion_id`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

발급된 빌링키를 이용하여 단건 결제 API 또는 예약 결제 API를 이용하는 경우
API 요청시 생성한 프로모션의 ID를 전용 파라미터인 `promotionId`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

해당 프로모션의 카드사와 발급된 빌링키의 카드사가 일치하는 경우에만 프로모션 조건이 적용됩니다.
만약, 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 진행이 불가하오니 유의하시길 바랍니다.

예약 결제를 사용하시는 경우 결제가 실행되는 시점에 예약 시 입력한 프로모션 아이디를 기반으로 예산 및 조건을 확인한 후
적용됩니다. 만약 결제가 실행되는 시점에 예산 소진 상태이거나 프로모션이 종료된 상태인 경우 할인이 적용되지 않습니다.

이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

예약 결제와 관련된 자세한 내용은 [결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule) 문서를 참고하시기 바랍니다.

### 예제 코드

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 결제">

```ts
// 포트원 빌링키 결제 API 호출
const paymentResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/again",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_uid,
      merchant_uid,
      name: "월간 이용권 정기결제",
      // 빌링키 결제 API를 참고해 고객 정보를 채워주세요.
      amount: {
        total: 8900,
      },
      currency: "KRW",
      //적용할 프로모션 아이디 입력
      promotion_id: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e",
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

```ts
// 결제 예약
axios({
  url: `https://api.iamport.kr/subscribe/payments/schedule`,
  method: "post",
  headers: { Authorization: access_token },
  data: {
    customer_uid: "gildong_0001_1234", // 카드(빌링키)와 1:1로 대응하는 값
    promotion_id: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 값
    schedules: [
      {
        merchant_uid: "order_monthly_0001", // 주문 번호
        schedule_at: 1519862400, // 결제 시도 시각 in Unix Time Stamp. 예: 다음 달 1일
        amount: 8900,
        name: "월간 이용권 정기결제",
        buyer_name: "홍길동",
        buyer_tel: "01012345678",
        buyer_email: "gildong@gmail.com",
      },
    ],
  },
});
```

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

빌링키 결제와 관련된 자세한 내용은 [빌링결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/readme) 문서를 참고하시기 바랍니다.

### 예제 코드

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 결제">

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/billing-key`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
      promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력
      orderName: "후불 결제",
      customer: {
        id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
        phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
        email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/schedule`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payment: {
        billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
        promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력
        orderName: "월간 이용권 정기 결제",
        customer: {
          id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
          name: {
            full: "김포트", // 고객 이름을 입력해야 합니다.
          },
          phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
          email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
        },
        amount: {
          total: 8900,
        },
        currency: "KRW",
      },
      timeToPay: "2024-05-01T00:00:00+09:00", // ISO8601 형식으로 입력해야 합니다.
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

</div>

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- promotion\_id: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- promotionId: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 프로모션 생성시 카드사와 발급된 빌링키의 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 발급된 빌링키의 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 실패 처리됩니다.

</details>

## 공통 유의사항

<div class="hint" data-style="info">

프로모션 서비스에서 제공하는 로직은 내부 사정에 의해 변동될 수 있으며, 변동 시 고객사에 사전 고지될 예정입니다.

</div>

<details>

<summary> 프로모션이 진행중이 아닌 경우 할인 적용이 되지 않습니다. </summary>

결제 요청 시 프로모션 아이디를 지정했더라도 프로모션이 **진행중** 상태가 아닌 경우 프로모션 할인 적용 없이
일반 결제와 동일한 프로세스로 결제가 진행됩니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션 결제 완료 건 취소시 예산이 복구됩니다. </summary>

프로모션 할인이 적용된 결제 완료(`status:paid`)건을 취소하는 경우 기본적으로 적용되었던 할인 금액이 프로모션 예산에 복구됩니다.
만약 예산 복구 기능 사용을 원하지 않는 경우 프로모션 추가/수정시 **프로모션 예산 미복구**를 활성화해 주세요.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<details>

<summary> 프로모션 할인 적용 시점 안내 </summary>

결제창을 호출하는 시점에 프로모션 예산에서 할인 금액에 대해 선점하고 있기 때문에, 실제 예산이 모두 소진되지 않더라도 선점된 프로모션 금액을 포함하여
예산을 초과하는 경우 할인 금액이 적용되지 않습니다.

만약 결제 시도 중 결제 실패 혹은 사용자가 결제 승인 전 취소하는 경우 선점되었던 할인 금액은 즉시 예산으로 귀속됩니다.
이후 결제 요청 고객에게 다시 할인 금액이 적용됩니다.

</details>

<details>

<summary> 프로모션 할인 미적용 케이스 안내 </summary>

생성한 프로모션의 최소 결제 금액 조건에 따라 프로모션 할인이 적용되지 않을 수 있습니다.
또한 할인 조건에 따라 적용되어야 하는 할인 금액보다 예산이 적은 경우 프로모션 할인이 적용되지 않습니다.

예시) 프로모션 A의 상태가 남은 예산 금액 : 1,000원, 할인율 : 10%일 때,
주문 금액이 200,000원인 경우 적용되어야 하는 할인 금액이 2,000원이므로 고객이 결제 요청 시 프로모션 할인이 적용되지 않습니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션이 할인 적용 건 부분 취소 안내 </summary>

프로모션 할인이 적용된 거래 건을 부분 취소하는 경우 상품의 주문금액(프로모션 할인이 적용되지 않은 원래 금액)
을 입력해야 합니다.

결제 취소 시 콘솔 내 결제취소 상세 모달에서 \[프로모션 예산 설정] 옵션을 선택할 수 있으며, 결제 취소 API 이용시
`promotionDiscountRetainOption` 파라미터로 옵션을 선택할 수 있습니다.

- 프로모션 혜택 조정 (기본설정) : 결제 부분 취소시 잔여 결제 금액이 할인 적용 기준 금액보다 적은 경우
  잔여 결제 금액에 맞추어 프로모션 할인 금액이 차감되어 적용됩니다.

  - 예시 1 :
    프로모션 할인 조건이 `5천원 이상 결제시 10% 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5400원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 조정** 옵션을 선택한 경우 프로모션 조건에 부합하지 않아 실제 1400원이 결제 취소 요청되며,
    결제 완료 금액은 4000원이 됩니다.

  - 예시 2 :
    프로모션 할인 조건이 `5천원 이상 결제시 1000원 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5000원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 조정** 옵션을 선택한 경우 프로모션 조건에 부합하지 않아 실제 1000원이 결제 취소 요청되며,
    결제 완료 금액은 4000원이 됩니다.

- 프로모션 혜택 유지 : 결제 부분 취소시 잔여 결제 금액이 할인 적용 기준 금액보다 적더라도 프로모션 할인 혜택이
  그대로 유지됩니다. 할인 혜택을 동일한 수준으로 유지하기 위해 기존에 적용된 할인 조건을 할인율로 환산하여 적용하게 됩니다.

  - 예시 1 :
    프로모션 할인 조건이 `5천원 이상 결제시 10% 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5400원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 유지** 옵션을 선택한 경우 실제 1800원이 결제 취소 요청되며,
    결제 완료 금액은 3600원이 됩니다.
    (주문금액 6000원에서 2000원 부분 취소시 주문금액은 4000원이며 기존 할인 조건인 10% 할인이 유지되어 실 결제 금액은 3600원이 됩니다.)

  - 예시 2 :
    프로모션 할인 조건이 `5천원 이상 결제시 1000원 할인`일 때 6000원 결제 요청시 프로모션 할인이 적용되어 5000원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 유지** 옵션을 선택한 경우 실제 1800원이 결제 취소 요청되며,
    결제 완료 금액은 3200원이 됩니다.
    (본 예시에서 기존에 적용된 할인 조건인 `5천원 이상 결제시 1000원 할인`은 20% 할인으로 환산됩니다. 주문금액 6000원에서 2000원 부분 취소시
    남은 주문금액은 4000원이므로, 취소 이후 결제 완료 금액은 3200원이 되고 실제 취소 금액은 1800원이 됩니다.)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션 할인이 적용된 건에 여러번 부분 취소 요청하는 경우 안내 </summary>

프로모션 할인이 적용된 거래 건을 여러번 부분 취소하는 경우 처음 선택한 취소 옵션으로만 가능합니다.
예를 들어 \[프로모션 혜택 유지]로 처음 부분 취소한 경우 동일 거래 건에 대해 부분 취소를 진행하는 경우
\[프로모션 혜택 유지] 옵션으로만 취소가 가능합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/extra/promotion/intro

---
title: 프로모션
description: 카드 즉시 할인을 쉽게 운영 및 관리할 수 있는 서비스입니다.
targetVersions:
  - v1
  - v2
---

## 프로모션이란?

고객사가 카드사와 계약하여 사용자에게 즉시 할인을 제공하는 **카드 즉시 할인 서비스**를 운영하고 관리할
수 있는 서비스 입니다.

카드 즉시 할인 서비스를 이용시 필요한 **프로모션 관리 시스템**과 **프로모션 정산 대사 시스템** 을 제공합니다.
포트원 콘솔에서 기간, 할인 조건, 예산 등 다양한 옵션의 프로모션을 설정할 수 있으며,
생성된 프로모션 아이디를 포함하여 결제 요청시 즉시 할인을 적용할 수 있습니다.
또한, 프로모션이 종료된 후 할인이 적용된 거래 건들만 모아 엑셀로 다운로드하여 한 번에 결제 내역 정리 및 정산 금액 대사를 할 수 있습니다.

프로모션은 일부 고객사에 한하여 제공하고 있으며, 프로모션 도입을 원하시는 고객사의 경우 포트원으로 문의 주시기 바랍니다.

<div class="hint" data-style="info">

프로모션 메뉴의 경우 도입 고객사에 한하여 포트원 콘솔 내에서 확인하실 수 있습니다.

</div>

[프로모션 생성하기](https://developers.portone.io/opi/ko/extra/promotion/console-guide)

[프로모션 결제 연동하기](https://developers.portone.io/opi/ko/extra/promotion/integration)


# https://developers.portone.io/sdk/ko/readme

---
title: 포트원 SDK 소개
description: 포트원에서 제공하는 SDK 가이드입니다.
targetVersions:
  - v1
  - v2
---

포트원은 고객사에서 보다 쉽게 서비스를 이용하실 수 있도록 프로그래밍 언어 / 플랫폼 별 SDK를 제공하고 있습니다.

## 브라우저 SDK

브라우저 환경에서 포트원 서비스를 연동할 때 사용하는 자바스크립트 SDK입니다. 브라우저에서 포트원 SDK를 호출하여 결제, 본인인증 등을 진행하게 됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[JavaScript SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-sdk/readme)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 모바일 SDK

JS SDK를 모바일 환경에서 모바일 플랫폼 네이티브 코드(Kotlin, Swift 등) 으로 쉽게 사용할 수 있도록 만들어진 SDK입니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

[모바일 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v1-mobile-sdk/readme)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[모바일 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-mobile-sdk/readme)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

## 서버 SDK

웹훅을 포함한 포트원 V2 REST API를 여러 언어에서 쉽게 사용할 수 있도록 만들어진 SDK입니다.

[서버 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-server-sdk/readme)

## 샘플 프로젝트

SDK를 지원하지 않는 플랫폼을 포함하여 다양한 플랫폼에서 결제 연동 예시를 확인하실 수 있도록 [portone-sample GitHub 저장소](https://github.com/portone-io/portone-sample)에서 샘플 프로젝트를 제공하고 있습니다.
일부 플랫폼의 경우 devcontainers 환경에서 바로 실행해보실 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/quick-guide/payment

---
title: 퀵 가이드
description: 결제연동 퀵 가이드
customLayout: InteractiveDocs
targetVersion:
  - v2
versionVariants:
  v1: /opi/ko/integration/ready/readme?v=v1
---

퀵 가이드 내용을 포함한 포트원 결제 연동 샘플 프로젝트를 [GitHub 저장소](https://github.com/portone-io/portone-sample)에서 추가로 확인하실 수 있습니다.

## 브라우저 측

### 포트원 브라우저 SDK 불러오기

포트원 브라우저 SDK를 불러옵니다.

아래 명령어로 브라우저 SDK를 설치합니다.

![NPM Version](https://img.shields.io/npm/v/%40portone%2Fbrowser-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="npm">

```shell
npm install --save @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="yarn">

```shell
yarn add @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="pnpm">

```shell
pnpm add @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="bun">

```shell
bun add @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="deno">

```shell
deno add npm:@portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="ni">

```shell
ni @portone/browser-sdk
```

</div>

</div>

### 상품 정보 불러오기

서버로부터 결제할 상품의 정보를 불러옵니다.

### 결제 요청

포트원 브라우저 SDK를 사용하여 결제를 요청합니다.

- storeId: string

  **상점 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 [관리자 콘솔 > 연동 정보](https://admin.portone.io/integration-v2/manage/channel) 우측 상단에서 확인할 수 있습니다.

- channelKey: string

  **채널키**

  [관리자 콘솔 > 연동 정보](https://admin.portone.io/integration-v2/manage/channel)에서 채널 연동 시 생성된 채널키입니다.

- paymentId: string

  **고객사 주문 고유 번호**

  주문을 식별하는 고유 번호로, 포트원에서 제공하지 않고 직접 입력합니다.

  이미 승인이 완료된 `paymentId`로 결제나 가상계좌 발급을 시도하는 경우 에러가 발생합니다.

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 영문 대소문자, 숫자, `-`, `_`만 허용되며, 6자 이상 64자 이하로 입력합니다.

  </div>

  <div class="hint" data-style="warning">

  KCP의 경우 영문 대소문자, 숫자만 허용되며, 40자 이하로 입력합니다.

  </div>

  <div class="hint" data-style="warning">

  스마트로의 경우 영문 대소문자, 숫자만 허용되며, 40자 이하로 입력합니다.

  </div>

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 영문 대소문자, 숫자만 허용되며, 32자 이하로 입력합니다.

  </div>

  <div class="hint" data-style="warning">

  KG이니시스의 경우 ASCII 문자만 허용되며, 40자 이하로 입력합니다.

  </div>

- orderName: string

  **주문명**

  주문명으로 자유롭게 입력합니다.

  <div class="hint" data-style="warning">

  나이스페이먼츠의 경우 최대 40바이트까지 입력할 수 있으며, 사용 가능한 특수문자는 아래와 같습니다.

  - 사용 가능: `_`
  - 사용 불가: `% & | $ - + = [ ]`
  - 사용 가능하나 권장하지 않음: `( )`

  </div>

  <div class="hint" data-style="warning">

  KCP의 경우 최대 100바이트까지 입력할 수 있습니다.

  </div>

  <div class="hint" data-style="warning">

  스마트로의 경우 최대 40바이트까지 입력할 수 있습니다.

  </div>

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 최대 256바이트까지 입력할 수 있습니다.

  </div>

  <div class="hint" data-style="warning">

  KG이니시스의 경우 최대 40바이트까지 입력할 수 있으며, 40바이트 초과시 37바이트에서 잘리고 "..."가 추가됩니다.

  </div>

- totalAmount: number

  **결제 금액**

  결제 금액을 정수로 입력합니다.

  - 해외 통화의 경우 통화의 최소 단위를 기준으로 합니다. 예를 들어, USD의 최소 단위는 센트(0.01 USD)이므로, 6 USD의 경우 100배하여 600으로 입력합니다.

  - 통화의 최소 단위는 [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)에 의해 표준화된 minor unit입니다.
    - KRW: 1배
    - USD: 100배
    - JPY: 1배

- currency: string

  **결제 통화**

  [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)에 의해 표준화된 알파벳 통화 코드를 입력합니다.

  <div class="hint" data-style="warning">

  토스페이먼츠는 `KRW`만을 지원합니다.

  </div>

  <div class="hint" data-style="warning">

  나이스페이먼츠는 `KRW`만을 지원합니다.

  </div>

  <div class="hint" data-style="warning">

  스마트로는 `KRW`와 `USD`만을 지원합니다. 상점 아이디의 설정에 따라 결제 통화가 고정되어 `currency`와 일치하지 않을 수 있습니다.

  </div>

  <div class="hint" data-style="warning">

  한국결제네트웍스는 `KRW`와 `USD`만을 지원합니다.

  </div>

  <div class="hint" data-style="warning">

  KSNET은 `KRW`와 `USD`만을 지원합니다.

  </div>

  <div class="hint" data-style="warning">

  KCP는 `KRW`와 `USD`만을 지원합니다. `USD`의 경우 별도 계약이 필요합니다.

  </div>

  <div class="hint" data-style="warning">

  KG이니시스 카드 결제는 `KRW`와 `USD`만을 지원합니다.

  </div>

  <div class="hint" data-style="warning">

  카드 결제를 제외한 KG이니시스는 `KRW`만을 지원합니다.

  </div>

- payMethod: string

  **결제 수단**

  사용할 결제 수단에 맞는 값을 입력합니다.

  <details>

  <summary>지원 결제 수단 코드</summary>

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  <div class="hint" data-style="warning">

  휴대폰 소액결제, 간편결제, 상품권 결제는 별도 계약이 필요합니다.

  </div>

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  </details>

* card?: object

  **카드 결제 추가 정보**

  `payMethod`가 `CARD`인 경우 카드 결제와 관련한 추가 정보를 입력할 수 있습니다.

  - cardCompany?: string

    **단독 노출 카드사**

    구매자가 카드사를 선택하지 않고 입력한 카드사 화면으로 바로 이동하도록 합니다.

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 카드사 단독 노출과 동시에 할부를 설정하려면 `card.installment.monthOption.fixedMonth`를 반드시 전달해야 하며, 그렇지 않을 경우 일시불로 결제됩니다.

    </div>

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 카드사 단독 노출 시 `card.installment.monthOption.fixedMonth`를 필수로 지정해야 합니다.
    결제 금액이 할부 지원 금액 미만인 경우 할부 개월 수를 `0`으로 전달해야 합니다.

    </div>

    <div class="hint" data-style="warning">

    스마트로의 경우 전북카드, 카카오뱅크 카드는 Windows에서만 단독 노출이 가능합니다.

    </div>

    <div class="hint" data-style="warning">

    KCP의 경우 카드사 단독 노출 시 `bypass.kcp_v2.site_name`을 필수로 지정해야 할 수 있습니다.
    자세한 사항은 해당 파라미터 설명을 참조해 주세요.

    </div>

    <div class="hint" data-style="warning">

    한국결제네트웍스의 경우 카드사 단독 노출 시에 아래 3가지 약관 동의 절차가 고객사 페이지 내에 있어야 합니다.

    - `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=1` (전자금융거래 이용약관)
    - `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=3` (개인정보 수집 및 이용처리 동의)
    - `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=4` (개인정보 제3자 제공 동의)

    영어 약관이 필요한 경우 URL 뒤에 `&langType=ENG`을 추가하여 사용할 수 있습니다.

    </div>

    <div class="hint" data-style="warning">

    KG이니시스의 경우 카드사 단독 노출 시 별도 계약이 필요합니다.

    </div>

    <details>

    <summary>지원 카드사 코드 목록</summary>

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST`(우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST` (우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    </details>

  - availableCards?: string\[]

    **카드사 일부 노출**

    지정한 일부 카드사만을 목록에 노출할 수 있습니다. 상단의 카드사 식별 값 항목을 참고해주세요.

  * useFreeInterestFromMall?: boolean

    **상점 분담 무이자 활성화 여부**

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 상점 분담 무이자 할부 이용 시 별도 계약이 필요합니다.

    </div>

  - useInstallment?: boolean

    **할부 사용 여부**

  - installment?: object

    **할부 설정**

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 신용카드 할부 이용 시 별도 계약이 필요합니다.

    </div>

    <div class="hint" data-style="warning">

    스마트로의 경우 신용카드 할부 이용 시 별도 계약이 필요합니다.

    </div>

    - freeInstallmentPlans?: object\[]

      **무이자 할부 설정**

      고객사가 부담하는 무이자 할부 설정입니다.

      <div class="hint" data-style="warning">

      스마트로의 경우 상점 부담 무이자 할부 이용 시 별도 계약이 필요합니다.

      </div>

      <div class="hint" data-style="warning">

      한국결제네트웍스의 경우 상점 부담 무이자 할부 이용 시 별도 계약이 필요합니다.

      </div>

      <div class="hint" data-style="warning">

      KG이니시스의 경우 상점 부담 무이자 할부 이용 시 별도 계약이 필요합니다.

      </div>

      - cardCompany: string

        **무이자 할부를 제공하는 카드사 식별 값**

        상단의 카드사 식별 값 항목을 참고해주세요.

      - months: number\[]

        **무이자 할부를 제공하는 개월 수**

    - monthOption?: object

      **할부 개월 수 설정**

      할부 결제 시 할부 개월 수를 설정할 수 있습니다.

      `fixedMonth`와 `availableMonthList` 중 하나만 제공해주세요.

      - fixedMonth: number

        **구매자가 선택할 수 없도록 고정된 할부 개월 수**

        구매자가 할부 개월 수를 선택할 수 있도록 하려면 `availableMonthList`를 사용해주세요.

      * availableMonthList: number\[]

        **구매자가 선택할 수 있는 할부 개월 수 목록**

  * useCardPoint?: boolean

    **카드사 포인트 사용 여부**

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 카드사 포인트 사용 시 별도 계약이 필요합니다.

    </div>

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 카드사 포인트 사용 시 별도 계약이 필요합니다.

    </div>

    <div class="hint" data-style="warning">

    KG이니시스의 경우 카드사 포인트 사용 시 별도 계약이 필요합니다.

    </div>

  - useAppCardOnly?: boolean

    **앱 카드만 허용할지 여부**

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 씨티카드는 적용이 불가능합니다.

    </div>

- virtualAccount?: object

  **가상계좌 발급 추가 정보**

  `payMethod`가 `VIRTUAL_ACCOUNT`인 경우 가상계좌와 관련한 추가 정보를 입력할 수 있습니다.

  - cashReceiptType?: string

    **결제창에서 발급 가능한 현금영수증 발급 유형**

    - `PERSONAL` (소득공제용)
    - `CORPORATE` (지출증빙용)
    - `ANONYMOUS` (미발행(국세청번호 자동발급))

    <div class="hint" data-style="warning">

    스마트로의 경우 `cashReceiptType`과 `bankCode`를 같이 사용해야 합니다.

    </div>

  - customerIdentifier?: string

    **현금영수증 발행 대상 식별 정보**

    소득공제용(`PERSONAL`)의 경우 전화번호를, 지출증빙용(`CORPORATE`)의 경우 사업자번호를 입력하며, 미발행(`ANONYMOUS`)의 경우 무시됩니다.

    <div class="hint" data-style="warning">

    스마트로의 경우 `cashReceiptType`에 `ANONYMOUS` 외의 값이 설정되면 올바른 `customerIdentifier`를 반드시 입력해야 합니다.

    </div>

  - fixedOption?: oneof object

    **고정식 가상계좌 설정**

    - `pgAccountId`와 `accountNumber` 중 하나만 입력해주세요.

    * pgAccountId?: string

      결제대행사로부터 사전에 가상계좌를 발급받은 경우, 그 번호를 입력해주세요.

    * accountNumber?: string

      고정하여 사용할 가상계좌 번호를 입력해주세요.

  - bankCode?: string

    **단독 노출 은행**

    구매자가 은행을 선택하지 않고 입력한 은행이 자동 선택되도록 합니다.

    <details>

    <summary>지원 은행 코드</summary>

    - `KYONGNAM_BANK` (경남은행)
    - `GWANGJU_BANK` (광주은행)
    - `KOOKMIN_BANK` (국민은행)
    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `KFCC` (새마을금고)
    - `SUHYUP_BANK` (수협은행)
    - `SHINHAN_BANK` (신한은행)
    - `WOORI_BANK` (우리은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `K_BANK` (케이뱅크)

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `K_BANK` (케이뱅크)
    - `SUHYUP_BANK` (수협은행)
    - `JEONBUK_BANK` (전북은행)
    - `KYONGNAM_BANK` (경남은행)

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `CITI_BANK_KOREA` (한국씨티은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `KYONGNAM_BANK` (경남은행)

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `JEONBUK_BANK` (전북은행)
    - `KYONGNAM_BANK` (경남은행)

    </details>

  - accountExpiry?: object

    **가상계좌 입금 만료기한**

    `validHours`와 `dueDate` 중 하나만 입력해주세요.

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 입금 만료기한을 필수로 입력해야 합니다.

    </div>

    - validHours?: number

      **가상계좌 입금 유효 시간**

      가상계좌 입금 유효기간을 시간 단위로 입력해주세요.

      - `3`을 전달하면 지금으로부터 3시간 후에 만료됩니다.

    - dueDate?: string

      **가상계좌 입금 만료 시각**

      - 아래 형식 중 하나로 입력해주세요.
        - `YYYYMMDD`
        - `YYYYMMDDHHmmss`
        - `YYYY-MM-DD`
        - `YYYY-MM-DD HH:mm:ss`

- transfer?: object

  **계좌이체 추가 정보**

  `payMethod`가 `TRANSFER`인 경우 계좌이체와 관련한 추가 정보를 입력할 수 있습니다.

  - cashReceiptType?: string

    **결제창에서 발급 가능한 현금영수증 발급 유형**

    - `PERSONAL` (소득공제용)
    - `CORPORATE` (지출증빙용)
    - `ANONYMOUS` (미발행(국세청번호 자동발급))

  - customerIdentifier?: string

    **현금영수증 발행 대상 식별 정보**

  - bankCode?: string

    **단독 노출 은행**

    구매자가 은행을 선택하지 않고 입력한 은행이 자동 선택되도록 합니다.

    <details>

    <summary>지원 은행 코드</summary>

    - `KYONGNAM_BANK` (경남은행)
    - `GWANGJU_BANK` (광주은행)
    - `KOOKMIN_BANK` (국민은행)
    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `KFCC` (새마을금고)
    - `SUHYUP_BANK` (수협은행)
    - `SHINHAN_BANK` (신한은행)
    - `WOORI_BANK` (우리은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)

    </details>

- mobile?: object

  **휴대폰 소액결제 추가 정보**

  `payMethod`가 `MOBILE`인 경우 휴대폰 소액결제와 관련한 추가 정보를 입력할 수 있습니다.

  - carrier?: string

    **단독 호출 통신사**

    구매자가 통신사를 선택하지 않고 입력한 통신사가 자동 선택되도록 합니다.

    - `SKT` (SKT)
    - `KT` (KT)
    - `LGU` (LGU)
    - `HELLO` (LG 헬로모바일)
    - `KCT` (티플러스)
    - `SK7` (SK 세븐모바일)

  - availableCarriers?: string\[]

    **통신사 일부 노출**

    지정한 일부 통신사만을 목록에 노출할 수 있습니다. 상단의 통신사 식별 값 항목을 참고해주세요.

- giftCertificate?: object

  **상품권 추가 정보**

  `payMethod`가 `GIFT_CERTIFICATE`인 경우 상품권과 관련한 추가 정보를 입력할 수 있습니다.

  - giftCertificateType?: string

    **상품권 유형**

    <details>

    <summary>지원 상품권 유형 코드</summary>

    - `BOOKNLIFE` (도서문화상품권)
    - `SMART_MUNSANG` (스마트문상, (구)게임문화상품권)
    - `CULTURELAND` (문화상품권)

    - `CULTURELAND` (문화상품권)

    </details>

- easyPay?: object

  **간편결제 추가 정보**

  `payMethod`가 `EASY_PAY`인 경우 간편결제와 관련한 추가 정보를 입력할 수 있습니다.

  - easyPayProvider?: string

    **간편결제 수단**

    <div class="hint" data-style="warning">

    한국결제네트웍스의 경우 간편결제 수단을 직접 지정하려면 별도 계약이 필요합니다.

    </div>

    <div class="hint" data-style="warning">

    KG이니시스의 경우 간편결제 수단 설정 시 별도 계약이 필요합니다.

    </div>

    <details>

    <summary>지원 간편결제 코드</summary>

    - `PAYCO` (페이코)
    - `SAMSUNGPAY` (삼성페이)
    - `APPLEPAY` (애플페이)
    - `SSGPAY` (SSG페이)
    - `KAKAOPAY` (카카오페이)
    - `NAVERPAY` (네이버페이)
    - `LPAY` (L페이)
    - `TOSSPAY` (토스페이)

    - `KAKAOPAY` (카카오페이)
    - `SAMSUNGPAY` (삼성페이)
    - `TOSSPAY` (토스페이)
    - `PAYCO` (페이코)

    - `KAKAOPAY` (카카오페이)
    - `NAVERPAY` (네이버페이)
    - `SAMSUNGPAY` (삼성페이)
    - `SSGPAY` (SSG페이)
    - `APPLEPAY` (애플페이)
    - `LPAY` (L페이)
    - `TOSSPAY` (토스페이)
    - `PAYCO` (페이코)

    </details>

  * useFreeInterestFromMall?: boolean

    **상점분담 무이자 활성화 여부**

  - useCardPoint?: boolean

    **카드사 포인트 사용 여부**

  - availableCards?: string\[]

    **카드사 일부 노출**

    지정한 일부 카드사만을 목록에 노출할 수 있습니다.

    <details>

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST`(우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST` (우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST` (우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    </details>

  - installment?: object

    **할부 설정**

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 할부 사용 시 별도 계약이 필요합니다.

    </div>

    - freeInstallmentPlans?: object\[]

      **무이자 할부 설정**

      고객사가 부담하는 무이자 할부 설정입니다.

      - cardCompany: string

        **무이자 할부를 제공하는 카드사 식별 값**

        상단의 카드사 식별 값 항목을 참고해주세요.

      - months: number\[]

        **무이자 할부를 제공하는 개월 수**

    - monthOption?: object

      **할부 개월 수 설정**

      할부 결제 시 할부 개월 수를 설정할 수 있습니다.

      `fixedMonth`와 `availableMonthList` 중 하나만 제공해주세요.

      - fixedMonth: number

        **구매자가 선택할 수 없도록 고정된 할부 개월 수**

        구매자가 할부 개월 수를 선택할 수 있도록 하려면 `availableMonthList`를 사용해주세요.

      - availableMonthList: number\[]

        **구매자가 선택할 수 있는 할부 개월 수 목록**

        <div class="hint" data-style="warning">

        토스페이먼츠의 경우 자체 정책에 따라 **일시불부터 전달한 값 중 최댓값까지 모두 표시**됩니다.

        </div>

  - cashReceiptType?: string

    **결제창에서 발급 가능한 현금영수증 발급 유형**

    - `PERSONAL` (소득공제용)
    - `CORPORATE` (지출증빙용)
    - `ANONYMOUS` (미발행(국세청번호 자동발급))

  - customerIdentifier?: string

    **현금영수증 발행 대상 식별 정보**

  - availablePayMethods?: string\[]

    **노출할 간편결제 방식**

    - `CARD` (카드 결제)
    - `CHARGE` (포인트 충전 및 적립 결제)
    - `MONEY` (토스페이 머니 결제)
    - `TRANSFER` (계좌 결제)

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 일부 간편결제 수단에 대해 `availablePayMethods`가 필수입니다.

    - 네이버페이: 카드 결제인 경우 `CARD`, 포인트 혹은 머니 결제인 경우 `CHARGE`를 입력합니다.
    - SSG페이: 계좌 결제를 노출하는 `TRANSFER`만 유효하며, 카드 혹은 머니 결제인 경우 `availablePayMethods`를 생략해야 합니다.

    </div>

- taxFreeAmount?: number

  **면세 금액**

  결제 금액 중 면세금액에 해당하는 금액을 입력합니다.

  - 미입력 시 0으로 취급됩니다.
  - 결제 금액과 동일하게 통화별 scale factor가 적용된 금액으로 전달해주세요.

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 면세 및 복합과세 이용 시 별도 계약이 필요합니다.

  </div>

  <div class="hint" data-style="warning">

  나이스페이먼츠와 계약 시 지정된 면세금액을 반드시 입력해야 합니다.

  </div>

  <div class="hint" data-style="warning">

  KCP의 경우 면세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.
  계약을 진행하지 않고 값을 지정하는 경우 요청한 내용과 다른 금액으로 결제가 발생할 수 있습니다.

  </div>

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 면세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.
  계약을 진행하지 않고 값을 지정하는 경우 요청한 내용과 다른 금액으로 결제가 발생할 수 있습니다.
  면세 금액이 지정된 경우, MID에 지정된 면세 및 과세 여부보다 지정된 금액을 우선합니다.

  </div>

  <div class="hint" data-style="warning">

  KG이니시스의 경우 면세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.

  </div>

- vatAmount?: number

  **부가세**

  부가세 금액을 입력합니다.

  - 미입력 시 과세 금액의 1/11 로 자동 계산됩니다.
  - 결제 금액과 동일하게 통화별 scale factor가 적용된 금액으로 전달해주세요.

  <div class="hint" data-style="warning">

  KCP의 경우 부가세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.
  계약을 진행하지 않고 값을 지정하는 경우 요청한 내용과 다른 금액으로 결제가 발생할 수 있습니다.

  </div>

  <div class="hint" data-style="warning">

  KG이니시스의 경우 부가세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.

  </div>

- customer?: object

  **구매자 정보**

  <div class="hint" data-style="warning">

  KSNET 결제 시 구매자 이름을 필수로 입력해야 합니다.

  </div>

  <div class="hint" data-style="warning">

  KG이니시스 결제 시 PC 환경에서는 구매자 이름, 연락처, 이메일을 필수로 입력해야 합니다.

  </div>

  <div class="hint" data-style="warning">

  스마트로 결제 시 구매자 연락처를 필수로 입력해야 합니다.

  </div>

  - customerId?: string

    **구매자 고유 아이디**

    구매자를 식별하는 고유 번호로, 자유롭게 입력합니다.

  - fullName?: string

    **구매자 전체 이름**

    - `fullName`과 (`firstName`, `lastName`) 쌍 중 하나만 입력해 주세요.

  - firstName?: string

    **구매자의 성을 제외한 이름**

    - `firstName`과 `lastName`은 함께 입력해야 합니다. 전체 이름은 `{firstName} {lastName}`으로 기록됩니다.

  - lastName?: string

    **구매자의 성**

    - `firstName`과 `lastName`은 함께 입력해야 합니다. 전체 이름은 `{firstName} {lastName}`으로 기록됩니다.

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일 주소**

    <div class="hint" data-style="warning">

    KG이니시스의 경우 특수문자는 `@`와 `.`만 허용됩니다.

    </div>

  - address?: object

    **구매자 주소**

    - country?: string

      **국가**

      [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html)에 의해 표준화된 2글자 국가 코드입니다.

    - addressLine1: string

      **일반 주소**

    - addressLine2: string

      **상세 주소**

    - city?: string

      **도시**

    - province?: string

      **주, 도, 시**

  - zipcode?: string

    **구매자 우편번호**

  - gender?: string

    **구매자 성별**

    - `MALE`, `FEMALE`, `OTHER` 중 하나를 입력해주세요.

  - birthYear?: string

    **구매자 출생년도**

    - `1990`과 같이 숫자 4자리로 입력해 주세요.

  - birthMonth?: string

    **구매자 출생월**

    - `07`과 같이 숫자 2자리로 입력해 주세요.

  - birthDay?: string

    **구매자 출생일**

    - `08`과 같이 숫자 2자리로 입력해 주세요.

- customData?: object

  `customData`에는 임의의 데이터를 저장할 수 있습니다.
  서버에서 결제건 조회 시에 확인할 수 있으며, 상품 정보를 전달하여 서버가 인식한 상품 정보와 일치하는지 확인할 수 있습니다.

- bypass?: object

  **결제대행사 고유 기능**

  - tosspayments?: object

    - discountCode?: string

      - 결제수단에 프로모션을 적용할 경우 토스페이먼츠로부터 제공받은 코드를 입력합니다.

    - useInternationalCardOnly?: boolean

      - `true`로 설정하면 해외 카드로만 결제를 허용합니다.

  - nice\_v2?: object

    - LogoImage?: string

      **결제창 로고 이미지 URL**

    - NPDisableScroll?: string

      **PC환경 결제창 스크롤 미사용 여부**

      기본값은 `N`입니다.

      - `Y`: 미사용
      - `N`: 사용

    - SkinType?: string

      **결제창 스킨 색상**

      `red`, `green`, `purple`, `gray`, `dark` 중 하나를 입력해주세요.

    - UserCI?: string

      **문화상품권 결제 시 구매자 CI 정보**

      아이디/비밀번호 외 추가로 CI 인증이 필요한 경우 사용합니다.

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - MallUserID?: string

      **구매자 식별 번호**

      <div class="hint" data-style="warning">

      문화 상품권 결제 시 필수 입력입니다.

      </div>

    - DirectCouponYN?: string

      **신용카드 쿠폰 자동 적용 여부**

      기본값은 `N`입니다.

      - `Y`: 사전 등록된 선 할인 쿠폰을 자동 적용
      - `N`: 쿠폰 미적용

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - DirectShowOpt?: string

      **단독 호출 결제 수단**

      - `BANK`: 계좌이체
      - `CELLPHONE`: 휴대폰 소액결제

    - CardShowOpt?: string

      **카드사별 호출 방식**

      `카드 코드:노출 유형` 값의 목록을 `|`로 구분하여 입력해주세요.

      - 카드 코드
        - `02` (국민)
        - `04` (삼성)
        - `06` (신한)
        - `07` (현대)
        - `08` (롯데)
        - `12` (NH)
        - `15` (우리)

      - 노출 유형
        - `1` (안심클릭)
        - `2` (간편결제)
        - `3` (앱카드 직접 호출)

      - `08:3|02:3`의 경우 롯데카드와 국민카드 선택시 앱카드를 직접 호출합니다.

    - PaycoClientId?: string

      **페이코에서 고객사에 발급한 Client Id**

      페이코 계정 자동 로그인 기능을 사용하는 경우 입력합니다.

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - PaycoAccessToken?: string

      **페이코 접속 토큰**

      페이코 계정 자동 로그인 기능을 사용하는 경우 입력합니다.

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - SamsungPayType?: string

      **삼성페이 고객사 유형**

      기본값은 `99`입니다.

      - `01`: 삼성페이 내 쇼핑
      - `99`: 기타

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

  - smartro\_v2?: object

    - GoodsCnt?: number

      **결제 상품 품목 개수**

    - SkinColor?: string

      **결제창 색상**

      `RED`, `GREEN`, `BLUE`, `PURPLE`을 선택할 수 있으며, 기본값은 `RED`입니다.

    - OpenType?: string

      **허용 카드 국가 설정**

      - `KR`: 국내 카드만 허용 (기본값)
      - `EN`: 해외 카드만 허용

  - kpn: object

    - CardSelect?: string\[]

      **카드결제 특수 결제방식 노출**

      카드결제 시에 특정 카드사에 해당하지 않는 특수 결제방식을 노출할 수 있습니다.

      - `GLOBAL`: 해외 카드(Visa, Mastercard, JCB)를 노출합니다.
      - `LEGACY_AUTH`: 구 인증결제 방식을 노출합니다.
      - `KEY_IN`: 키인 결제를 노출합니다.

  - kcp\_v2?: object

  * site\_logo?: string

    **결제창 로고 URL**

    - 결제창 좌측 상단에 표시됩니다.
    - 이미지 사이즈는 가로 150px, 세로 50px 미만으로 설정해야 하며, GIF, JPG 파일만 지원됩니다.

  * skin\_indx?: number

    **결제창 색상**

    PC로 결제창 호출 시 결제창 색상을 변경합니다.

    - 1: 청색 (#207bba, 기본값)
    - 2: 자주색 (#b52ecb)
    - 3: 갈색 (#9a6d3f)
    - 4: 분홍색 (#e41f7d)
    - 5: 남색 (#284c8c)
    - 6: 청록색 (#319cb9)
    - 7: 황토색 (#a77f1d)
    - 8: 주황색 (#b2b2b2)
    - 9: 초록색 (#3cc871)
    - 10: 다홍색 (#ee3b34)
    - 11: 검은색 (#000000)
    - 12: 은색 (#f4f4f4)

  * kcp\_pay\_title?: string

    **결제창 상단 문구**

    결제창의 상단에 `NHN KCP - 결제의 중심!` 대신 표시될 문구입니다.

  * shop\_user\_id?: string

    **기관에 따라 리스크 관리 조치를 위한 쇼핑몰 관리 ID**

    - 상품권, 휴대폰 결제 시 필수로 입력해야 합니다.

  * site\_name?: string

    **카드사 단독 노출 시 결제창에 표기될 상호명**

    - PC의 경우 신한, 현대, 삼성, 농협, 하나, 외환, 롯데, 씨티, 우리카드 단독 노출 시 필수로 입력해야 합니다.
    - 모바일의 경우 필수로 입력해야 합니다.

  * disp\_tax\_yn?: string

    **현금영수증 노출 여부**

    결제창에서 현금영수증 노출 여부를 설정합니다. 실시간 계좌이체 또는 가상계좌 결제 시 사용할 수 있습니다.

    - `Y`: 노출
    - `N`: 노출하지 않음
    - `R`: 소득공제로 노출
    - `E`: 지출증빙으로 노출

  * deli\_term?: string

    **에스크로 결제 예상 배송 소요일**

    에스크로 결제 시, 결제 상품의 예상 배송 소요일입니다. 에스크로 결제 사용 시 입력을 권장하고 있습니다.

    - 기본값은 `00`입니다.
    - 항상 두 자리 수로 입력되어야 합니다. 예상 배송 소요기간이 3일인 경우, `03`으로 입력합니다.

- redirectUrl?: string

  **리디렉션 방식에서 결제 프로세스 완료 후 이동될 고객사 URL**

  - 대부분의 모바일 결제환경에서 반드시 입력해야 합니다.

- noticeUrls?: string\[]

  **결제 웹훅 수신 URL**

  관리자 콘솔에서 설정한 웹훅 주소 대신 사용할 주소입니다.

  - 해당 값 설정시 관리자 콘솔에 설정한 주소로는 웹훅이 발송되지 않습니다.

- appScheme?: string

  **모바일 결제 후 고객사 앱으로 복귀하기 위한 URL scheme**

  ISP/앱카드에서 결제 완료 후 고객사 앱으로 복귀할 때 사용합니다.

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 `myappscheme://` 형식으로 입력해 주세요.

  </div>

- productType?: string

  **상품 유형**

  - 실물 상품: `PRODUCT_TYPE_REAL`
  - 디지털 상품: `PRODUCT_TYPE_DIGITAL`

  <div class="hint" data-style="warning">

  나이스페이먼츠 휴대폰 소액결제 시 `productType`는 필수 입력이며, 상점에 설정된 상품 유형과 입력된 상품 유형이 다른 경우 결제가 실패합니다.

  </div>

  <div class="hint" data-style="warning">

  스마트로 휴대폰 소액결제 시 `productType`는 필수 입력이며, 상점에 설정된 상품 유형과 입력된 상품 유형이 다른 경우 결제가 실패합니다.

  </div>

  <div class="hint" data-style="warning">

  한국결제네트웍스 휴대폰 소액결제 시 `productType`는 필수 입력입니다.

  </div>

- offerPeriod?: oneof object

  **서비스 제공 기간**

  `range`와 `interval` 중 하나만 입력해주세요.

  - range?: object

    **서비스 제공 기간 범위**

    - from?: string

      **시작 시점**

    - to?: string

      **종료 시점**

    <div class="hint" data-style="warning">

    스마트로의 경우 `from`과 `to`를 동시에 입력해야 합니다.

    </div>

  - interval?: string

    **제공 기간**

    - `{number}d` (`{number}`일)
    - `{number}m` (`{number}`분)
    - `{number}y` (`{number}`년)

- products?: object\[]

  **구매 상품 상세 정보**

  - id: string

    **상품 아이디**

  - name: string

    **상품명**

  - code?: string

    **상품 코드**

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 반드시 입력해주세요.

    </div>

  - amount: number

    **상품 단위 가격**

    - 결제 금액과 동일하게 통화별 scale factor가 적용된 금액으로 전달해주세요.

  - quantity: number

    **상품 수량**

  - tag?: string

    **상품 태그**

- storeDetails?: object

  **상점 정보**

  - ceoFullName?: string

    **상점 대표자 이름**

  - phoneNumber?: string

    **상점 연락처**

  - address?: string

    **상점 주소**

  - zipcode?: string

    **상점 우편번호**

- isCulturalExpense?: boolean

  **문화비 지출 여부**

  도서, 공연, 박물관 등 문화비 지출 여부

- isEscrow?: boolean

  **에스크로 결제 여부**

  `true`로 설정하면 에스크로를 사용합니다.

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  <div class="hint" data-style="warning">

  나이스페이먼츠의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  <div class="hint" data-style="warning">

  KG이니시스의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  #### locale?: string

  **결제창 언어**

  - 한국어: `KO_KR`
  - 영어: `EN_US`

  - 한국어: `KO_KR`
  - 영어: `EN_US`
  - 중국어(간체): `ZH_CN`

  <div class="hint" data-style="warning">

  KG이니시스의 경우 중국어(간체)는 PC 결제 시에만 지원됩니다.

  </div>

- country?: string

  **결제 국가**

  [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html)에 의해 표준화된 2글자 국가 코드입니다.

- popup?: object

  **결제창이 팝업 방식일 경우 결제창에 적용할 속성**

  - center?: boolean

    `true`로 설정하면 결제창이 브라우저 화면의 정중앙에 표시됩니다.

### 결제 오류 처리

결제 중 오류가 발생하여 결제가 완료되지 않은 경우를 처리합니다.

`SDK`의 반환 값에 `code`가 있는 경우 오류 상태로 `message` 필드에 오류 메시지가 존재합니다.
결제대행사로부터 오류를 전달받은 경우 `code`는 `FAILURE_TYPE_PG`이고, 결제대행사의 오류 코드인 `pgCode`를 기반으로 결제 오류를 처리할 수 있습니다.

### 서버 측으로 결제 완료 요청

완료된 결제의 `paymentId`를 서버로 전송하여 결제 상태를 반영합니다.

### 결제 완료 상태 처리

서버로부터 검증 후 결제가 완료된 경우를 처리합니다.

### 가상계좌 발급 상태 처리

서버로부터 검증 후 가상계좌가 발급된 경우를 처리합니다.

### 결제 실패 상태 처리

서버로부터 검증 결과를 획득하여, 결제가 최종적으로 실패한 경우를 처리합니다.

## 서버 측

### 포트원 서버 SDK 불러오기

포트원 서버 SDK를 불러옵니다.

아래 명령어로 서버 SDK를 설치합니다.

![NPM Version](https://img.shields.io/npm/v/%40portone%2Fserver-sdk)

![JSR Version](https://img.shields.io/jsr/v/%40portone/server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="npm">

```shell
npm install --save @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="yarn">

```shell
yarn add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="pnpm">

```shell
pnpm add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="bun">

```shell
bun add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="deno">

```shell
deno add jsr:@portone/server-sdk
```

</div>

<div class="tabs-content" data-title="ni">

```shell
ni @portone/server-sdk
```

</div>

</div>

Node.js의 경우 v20 이상에서 정상 동작하며, v20 미만 버전은 폴리필이 필요합니다.

<details>

<summary>폴리필 방법</summary>

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js v18 이상 v20 미만">

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
globalThis.crypto = require("node:crypto").webcrypto;
```

```javascript title="ESM"
import { webcrypto } from "node:crypto";
globalThis.crypto = webcrypto;
```

</div>

<div class="tabs-content" data-title="Node.js v18 미만">

[@whatwg-node/fetch](https://www.npmjs.com/package/@whatwg-node/fetch) 패키지를 의존성에 추가해 주세요.

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
const { fetch, crypto } = require("@whatwg-node/fetch");
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

```javascript title="ESM"
import { crypto, fetch } from "@whatwg-node/fetch";
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

</div>

</div>

</details>

아래 명령어로 서버 SDK를 설치합니다.

![PyPI - Version](https://img.shields.io/pypi/v/portone-server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="uv">

```shell
uv add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="poetry">

```shell
poetry add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="rye">

```shell
rye add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pipenv">

```shell
pipenv install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Conda">

```shell
conda install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Hatch">

```toml title="pyproject.toml"
[project]
dependencies = [
  "portone-server-sdk~=x.x.x"
]
```

</div>

<div class="tabs-content" data-title="PDM">

```shell
pdm add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pip requirements">

```shell title="requirements.txt"
portone-server-sdk ~= x.x.x
```

</div>

</div>

아래 명령어로 서버 SDK를 설치합니다.

![PyPI - Version](https://img.shields.io/pypi/v/portone-server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="uv">

```shell
uv add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="poetry">

```shell
poetry add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="rye">

```shell
rye add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pipenv">

```shell
pipenv install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Conda">

```shell
conda install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Hatch">

```toml title="pyproject.toml"
[project]
dependencies = [
  "portone-server-sdk~=x.x.x"
]
```

</div>

<div class="tabs-content" data-title="PDM">

```shell
pdm add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pip requirements">

```shell title="requirements.txt"
portone-server-sdk ~= x.x.x
```

</div>

</div>

Maven Central을 통해 서버 SDK를 설치합니다.

[![Maven Central Version](https://img.shields.io/maven-central/v/io.portone/server-sdk)](https://central.sonatype.com/artifact/io.portone/server-sdk)

[![javadoc](https://javadoc.io/badge2/io.portone/server-sdk/javadoc.svg)](https://javadoc.io/doc/io.portone/server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="Apache Maven">

```xml
<dependency>
  <groupId>io.portone</groupId>
  <artifactId>server-sdk</artifactId>
  <version>x.x.x</version>
</dependency>
```

</div>

<div class="tabs-content" data-title="Gradle (Kotlin)">

```kotlin
implementation("io.portone:server-sdk:x.x.x")
```

</div>

<div class="tabs-content" data-title="Gradle (Groovy)">

```groovy
implementation 'io.portone:server-sdk:x.x.x'
```

</div>

</div>

### 포트원 API Secret 설정

서버 SDK를 사용하기 위해 포트원 V2 API Secret을 설정합니다.
API Secret은 포트원 관리자콘솔의 [결제 연동 > 연동 정보 > 식별코드 ・ API Keys > V2 API](https://admin.portone.io/integration-v2/manage/api-keys?version=v2)에서 발급받으실 수 있습니다.

### 결제 완료 요청

완료된 결제의 실제 상태를 조회해 시스템에 반영합니다. 브라우저 SDK를 통해 결제하는 경우 모든 결제 과정이 브라우저에서 진행되므로 결제가 조작되는 것을 막기 위해 서버에서 검증이 필요합니다.

### 결제 정보 조회

브라우저에서 전송한 `paymentId`를 통해 실제 결제 상태를 조회합니다.

<div class="hint" data-style="warning">

ISP/페이북을 통한 결제 시 토스페이먼츠가 실제 카드 번호와 다른 카드 번호를 전달하고 있어 결제 내역 단건 조회시 응답되는 `payment_method_detail.card.detail.bin` 정보가 정확하지 않을 수 있습니다.

</div>

### 결제 정보 일치 검증

포트원에 전달한 `customData`로 조회한 상품 정보와 결제 정보가 일치하는지 검증합니다.

### 웹훅 수신

결제 상태의 변화를 실시간으로 확인해야 한다면 웹훅을 사용할 수 있습니다.

### HTTP Body 수신 설정

웹훅 내용을 검증하기 위해서는 HTTP Body를 문자열 형태로 수신해야 합니다.

### 웹훅 검증

수신한 웹훅이 위조되지 않았는지 포트원 서버 SDK를 사용하여 검증합니다.

### 결제 상태 업데이트

검증된 웹훅 결과를 바탕으로 결제 상태를 업데이트합니다.


# https://developers.portone.io/opi/ko/integration/ready/readme

---
title: 결제 연동 준비하기
description: 포트원을 이용한 연동 개발이 처음이시라면 아래 안내 사항에 따라 진행하세요.
targetVersions:
  - v1
  - v2
---

## 1. 포트원 회원가입 하기

포트원 관리자 콘솔은 **별도 계약 없이 무료로** 회원가입이 가능합니다.

- 포트원 콘솔 화면에서 \[가입하기]를 클릭해 주세요. [→ 포트원 콘솔 바로 가기](https://admin.portone.io)

(이미지 첨부: 로그인 화면 예시)

- 포트원에서 사용할 이메일 주소 및 비밀번호를 입력한 후 \[가입]을 눌러주세요.

(이미지 첨부: 회원가입 화면 예시)

- 가입 완료 후 입력하신 이메일로 인증 메일이 발송됩니다. 메일 인증 전까지 로그인이 불가능하오니 꼭 인증 후 로그인을 시도해 주세요.

(이미지 첨부: 인증 메일 내용 예시)

<div class="hint" data-style="info">메일을 받지 못하신 경우 스팸메일함을 확인해주세요.</div>

## 2. 전자결제 신청하기

비지니스 정보(사업자 정보) 등록 후 이용할 결제대행사 및 결제수단 신청합니다.

- 로그인 후 \[홈]화면에서 왼쪽 상단에 \[전자결제 신청]을 클릭해 주세요.
- 약관 동의 후 \[시작하기!]를 클릭해 주세요.

(이미지 첨부: 약관동의 화면 예시)

- \[비지니스 인증] 정보를 단계에 따라 입력합니다.
- \[전자결제 신청] 정보를 단계에 따라 선택합니다.

**아직 전자결제 신청 전이라면 상세 가이드를 참고하여 전자결제를 신청해보세요!** [→ 전자결제 신청 상세 가이드 바로가기](http://help.portone.io/category/procedure/pg-application)

<div class="hint" data-style="info">

전자결제 신청 전 테스트를 하고싶으신 분은 아래 결제대행사 채널 설정하기를
참고하신 후 테스트 환경으로 채널 추가하여 테스트를 진행하실 수 있습니다.

</div>

## 3. 결제대행사 채널 설정하기

결제 연동 시 사용할 결제대행사 채널을 추가합니다.

- 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] → \[채널 관리] 메뉴에서 연동하고자 하는 결제대행사 및 결제 모듈을 선택하여 채널을 추가합니다.

### 3-1. 연동 방법

<div class="tabs-container">

<div class="tabs-content" data-title="테스트 연동">

#### 테스트 환경 채널 연동 방법

(관련 이미지 첨부)

1. 연동 모드를 `테스트`로 변경해 주세요.
2. 사용할 `결제대행사`를 선택해 주세요.

(관련 이미지 첨부)

5. 연동할 결제방식 및 결제수단에 따라 `결제 모듈`을 선택해 주세요.
6. `다음` 버튼을 클릭해 주세요.

(관련 이미지 첨부)

5. `채널 이름`은 원하시는 이름으로 입력해 주세요. 채널 이름은 채널 목록에 표시되므로 사용자가 구분할 수 있는 값으로 입력하여 사용해 주세요. ex) KCP 정기결제용
   (공용 테스트 채널이 제공되는 결제대행사의 경우 MID 선택 시 자동으로 표시됩니다.)

6. `채널 속성`은 기본적으로 `결제`가 선택됩니다. 본인인증 용도로 채널을 연동하시는 경우 `본인인증`을 선택해 주세요.

7. 테스트 용도로 발급 받은 `상점 아이디`를 직접 입력하시거나, 제공되는 다른 공용 상점아이디를 선택합니다.

8. 추가로 입력해야 하는 정보는 결제대행사별로 상이하며, 직접 발급받은 테스트 상점아이디를 이용하시는 경우 필수 입력 항목을 확인하여 올바르게 입력해 주세요.

9. `과세구분`을 선택해 주세요. 과세 혹은 면세 설정 시 \[결제사 정산] 메뉴에서 부가세 신고 참고 자료용 데이터에 적용됩니다.

10. `저장`버튼을 눌러 채널을 추가를 완료합니다.

<div class="hint" data-style="info">

채널 등록 시 결제대행사별 저장하는 파라미터가 다릅니다. 파라미터 정보 확인은 하단의 \[결제대행사별 연동 정보 확인하기]를 확인해주세요.

</div>

</div>

<div class="tabs-content" data-title="실연동">

#### 운영 환경 채널 연동 방법

(관련 이미지 첨부)

1. 연동 모드를 `실연동`으로 변경해 주세요.
2. 사용할 `결제대행사`를 선택해 주세요.

(관련 이미지 첨부)

3. 연동할 결제방식 및 결제수단에 따라 `결제 모듈`을 선택해 주세요.
4. `다음` 버튼을 클릭해 주세요.

(관련 이미지 첨부)

5. `채널 이름`은 원하시는 이름으로 입력해 주세요. 채널 이름은 채널 목록에 표시되므로 사용자가 구분할 수 있는 값으로 입력하여 사용해 주세요. ex) KCP 정기결제용
6. `채널 속성`을 선택해 주세요. 기본적으로 `결제`가 선택됩니다. 본인인증 용도로 채널을 연동하시는 경우 `본인인증`을 선택해 주세요.
7. 결제대행사와 계약 후 발급 받은 `상점 아이디`와 추가 정보를 입력해 주세요.
8. `과세구분`을 선택해 주세요. 과세 혹은 면세 설정 시 \[결제사 정산]메뉴에서 부가세 신고 참고 자료용 데이터에 적용됩니다.
9. `저장`버튼을 눌러 채널을 추가를 완료합니다.

<div class="hint" data-style="info">

채널 등록 시 결제대행사별 저장하는 파라미터가 다릅니다. 파라미터 정보 확인은 하단의 \[결제대행사별 연동 정보 확인하기]를 확인해주세요.

</div>

</div>

</div>

### 3-2. 결제대행사별 연동 정보 확인하기

#### 결제대행사

<details>

<summary>나이스페이먼츠</summary>

<div class="hint" data-style="info">

**채널 연동 시 필요한 입력 정보 확인 방법은 구모듈과 신모듈이 동일합니다.**

</div>

1. [나이스페이먼츠 가맹점 관리자](http://npg.nicepay.co.kr/merchant/mkeyMngForm.do) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[KEY관리]를 클릭합니다.
3. MID 및 Key 값을 확인할 수 있습니다.

(이미지 첨부: 나이스페이먼츠 가맹점 관리자 내 KEY 조회 화면)

4. \[가맹점정보]→\[비밀번호관리]→\[거래취소비밀번호]를 클릭합니다.
5. 비밀번호를 설정합니다. 비밀번호는 최대 10자리까지 가능합니다.

(이미지 첨부: 나이스페이먼츠 가맹점 관리자 내 거래취소비밀번호 설정 화면)

6. 포트원 콘솔에서 채널 추가 시 \[MID], \[Key], \[결제취소 비밀번호]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>다날</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="일반결제">

포트원 콘솔에서 채널 추가 시 계약 완료 후 다날로부터 전달받은 \[CPID], \[CPPWD], \[신용카드 암호화 KEY], \[계좌이체/가상계좌 암호화 KEY]를 입력한 후 `저장`을 클릭합니다.

<div class="hint" data-style="info">

**CPPWD**는 상품권 결제를 연동하는 경우에만 필수로 입력해야 합니다. 만약 상품권 결제를 이용하지 않는다면 빈칸으로 둔 채 채널을 추가해야 합니다.

</div>

</div>

<div class="tabs-content" data-title="휴대폰결제/본인인증">

포트원 콘솔에서 채널 추가 시 계약 완료 후 다날로부터 전달받은 \[CPID], \[CPPWD], \[상품코드]를 입력한 후 `저장`을 클릭합니다.

<div class="hint" data-style="info">

휴대폰 본인인증만 이용하시는 경우 **상품코드**는 빈칸으로 저장해도 무방합니다.

</div>

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="info">

포트원 V2에서는 현재 다날 **휴대폰 본인인증**만 연동이 가능합니다.
휴대폰 본인인증만 이용하시는 경우 **상품코드**는 빈칸으로 저장해도 무방합니다.

</div>

포트원 콘솔에서 채널 추가 시 계약 완료 후 다날로부터 전달받은 \[CPID], \[CPPWD], \[상품코드]를 입력한 후 `저장`을 클릭합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>모빌리언스</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 모빌리언스로부터 전달받은 \[서비스ID]를 입력한 후 `저장`을 클릭합니다.

<div class="hint" data-style="info">

정기결제를 이용하는 경우 **정기결제용 서비스ID**를 필수로 입력해야 합니다.

</div>

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>스마트로</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

**채널 연동 시 필요한 입력 정보 확인 방법은 구모듈과 신모듈이 동일합니다.**

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

1. [스마트로 스마일비즈](http://www.smilebiz.co.kr/index.html) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[Key관리]를 클릭합니다.
3. MID 및 Key 값을 확인할 수 있습니다.

(이미지 첨부: 스마트로 스마일비즈 내 KEY 조회 화면)

4. \[가맹점정보]→\[기본정보]→\[거래취소 비밀번호]를 클릭합니다.
5. 비밀번호를 설정합니다. 비밀번호는 최대 6자리까지 가능합니다.

(이미지 첨부: 스마트로 스마일비즈 내 거래취소비밀번호 설정 화면)

6. 포트원 콘솔에서 채널 추가 시 \[MID], \[Key], \[결제취소 비밀번호]를 입력한 후 `저장`을 클릭합니다. (Key는 Merchant Key 를 입력해야 합니다.)

<div class="hint" data-style="info">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

신모듈 이용 시 유의사항

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

- 정기결제 이용 시 스마트로로부터 전달 받은 **ssp Mall ID**를 필수로 입력해야 합니다.
- 에스크로 결제 이용 시 스마트로로부터 전달 받은 **API Key**를 필수로 입력해야 합니다.

</div>

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>웰컴페이먼츠</summary>

1. [웰컴페이먼츠 관리자시스템](http://wbiz.paywelcome.co.kr/) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[기본정보]를 클릭합니다.
3. MID 값을 확인할 수 있습니다.

(이미지 첨부: 웰컴페이먼츠 관리자시스템 내 상점ID 조회 화면)

4. \[상점정보]→\[계약정보]→\[부가정보]를 클릭합니다.
5. 웹결제 signkey 생성 조회에서 `조회`를 클릭합니다.
6. `생성/갱신`을 클릭하여 \[웹결제 Signkey Key], \[필드암호화IV], \[필드암호화KEY] 값을 생성합니다.

(이미지 첨부: 웰컴페이먼츠 관리자시스템 내 웹결제 signkey 생성 화면)

7. 포트원 콘솔에서 채널 추가 시 \[MID], \[Sign Key], \[필드암호화IV], \[필드암호화Key]를 입력한 후 `저장`을 클릭합니다. (상점ID는 MID, 웹결제 Signkey Key는 Sign Key를 입력해야 합니다.)

</details>

<details>

<summary>이지페이(KICC)</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 이지페이(KICC)로부터 전달받은 \[가맹점ID]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>키움페이</summary>

1. [키움페이 상점관리자](http://agent.kiwoompay.co.kr/) 접속 후 로그인을 합니다.
2. \[고객지원]→\[기술지원]→\[연동정보설정]를 클릭합니다.
3. CPID를 선택하여 `조회하기`를 클릭합니다.
4. 결제수단을 선택합니다.
5. 결제연동키를 확인합니다.

(이미지 첨부: 키움페이 상점관리자 내 CPID 조회 화면)

6. 포트원 콘솔에서 채널 추가 시 \[CPID], \[결제연동키]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>토스페이먼츠</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="신모듈">



</div>

<div class="tabs-content" data-title="구모듈">

1. [토스페이먼츠 개발자센터](http://developers.tosspayments.com/) 접속 후 로그인을 합니다.
2. \[내 개발정보]를 클릭합니다.
3. \[API키] 메뉴에서 \[상점아이디(MID)]와 \[머트 키]를 확인합니다.

(이미지 첨부: 토스페이먼츠 개발자센터 내 API 키 조회 화면)

4. 포트원 콘솔에서 채널 추가 시 \[상점아이디(MID)], \[머트 키]를 입력한 후 `저장`을 클릭합니다.

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->



<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>헥토파이낸셜</summary>

1. [헥토파이낸셜 가맹점관리자](http://nspay.settlebank.co.kr/cpnInfo.do) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[기본정보]→\[라이센스&암호화키 정보]를 클릭합니다.
3. \[상점아이디], \[라이센스키(전문 해쉬 키)], \[암호화 키] 값을 확인할 수 있습니다.

(이미지 첨부: 헥토파이낸셜 가맹점관리자 내 라이센스&암호화키 정보 화면)

4. 포트원 콘솔에서 채널 추가 시 \[상점아이디], \[라이센스키(전문 해쉬 키)], \[암호화 키]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>KG이니시스</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="결제창 일반/정기 결제">



</div>

<div class="tabs-content" data-title="결제창 일반결제 및 API 수기/정기결제">

1. [KG이니시스 가맹점관리자](http://iniweb.inicis.com/security/login.do) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[부가정보]를 클릭합니다.
3. INIAPI key 생성 갱신의 조회 버튼을 클릭하여 \[INIAPI KEY], \[INIAPI IV] 값을 확인할 수 있습니다. 값이 표시되지 않는 경우 갱신 버튼을 클릭해 주세요.

(이미지 첨부: KG이니시스 가맹점관리자 내 크레덴셜 정보 조회 화면 1)

6. 포트원 콘솔에서 채널 추가 시 \[상점아이디]를 입력한 후 `저장`을 클릭합니다. \[INIAPI Key], \[INIAPI IV]의 값은 케이스에 따라 추가로 입력한 후 `저장`을 클릭합니다.

</div>

<div class="tabs-content" data-title="통합 본인인증">

포트원 콘솔에서 채널 추가 시 계약 완료 후 KG이니시스로부터 전달받은 \[MID]와\[apikey]를 입력한 후 `저장`을 클릭합니다.

</div>

<div class="tabs-content" data-title="신용카드 본인인증">

<div class="hint" data-style="warning">

신용카드 본인인증 서비스는 2021-11-22일부로 신규 서비스를 제공하지 않습니다.

</div>

포트원 콘솔에서 채널 추가 시 계약 완료 후 KG이니시스로부터 전달받은 \[SEEDKEY],\[SEEDIV], \[DI\_CODE]를 입력한 후 `저장`을 클릭합니다.

<div class="hint" data-style="info">

DI\_CODE는 12자리로 고객사에서 자체적으로 사이트(서비스)를 관리하는 코드입니다. 고객사 사이트(서비스)마다 DI\_CODE를 부여하여 관리하고 있는 경우에는 KG이니시스 카드본인인증 계약 진행시 계약서상에 고객사가 직접 기입한 값을 입력하시면 됩니다.

계약시 **DI\_CODE를 기입하지 않은 경우** 빈칸으로 저장해야 합니다.

</div>

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="결제창 일반/정기 결제">



</div>

<div class="tabs-content" data-title="통합 본인인증">

포트원 콘솔에서 채널 추가 시 계약 완료 후 KG이니시스로부터 전달받은 \[MID]와 \[apikey]를 입력한 후 `저장`을 클릭합니다.

</div>

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

<details>

<summary>KSNET</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 KSNET으로부터 전달받은 \[상점아이디(MID)] 및 \[API Key]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>한국결제네트웍스(KPN)</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 한국결제네트웍스(KPN)로부터 전달받은 \[상점아이디(MID)] 및 \[Secret OTP]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>NHN KCP</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="결제창 일반/수기결제 및 API 수기/정기결제">

1. 포트원 콘솔에서 채널 추가 시 계약 완료 후 KCP로부터 전달받은 사이트코드 및 사이트키를 입력한 후 `저장`을 클릭합니다.

2. 정기결제를 이용하시는 경우, 아래 절차를 진행해주세요.

   1. [KCP 파트너관리자](http://partner.kcp.co.kr/) 접속 후 로그인을 합니다.

   2. \[고객센터]→\[인증센터]→\[관리용 사설인증서]→\[인증서 발급]을 클릭합니다.

      (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 화면 1)

   3. 사용자명, 인증서 비밀번호를 입력한 후 \[다음]을 눌러 인증서를 발급합니다.

      (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 화면 2)

      (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 완료 화면)

   4. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹등록]을 클릭합니다.

   5. \[상점정보]→\[사이트코드]에서 그룹등록할 사이트코드를 선택합니다.

   6. \[그룹정보]에서 \[유형3]을 선택한 후 원하는 그룹명을 입력합니다.

   7. \[결제입력 정보]에서 \[결제유형] 및 \[납부유형]을 확인하시고 고객사 유형에 맞게 선택합니다.

   8. \[고지방법]에서 원하시는 고지 방법을 선택한 후 \[등록하기]를 클릭합니다.

      (이미지 첨부: KCP 파트너관리자 내 관리용 그룹등록 화면)

   9. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹조회]를 클릭합니다.

   10. \[사이트코드]에서 사용한 사이트코드를 선택한 후 \[검색]을 클릭합니다.

       (이미지 첨부: KCP 파트너관리자 내 관리용 그룹조회 화면)

   11. 포트원 콘솔에서 채널 추가 시 사이트코드, 사이트키, 앞서 발급한 정기자동결제 그룹아이디를 입력한 후 \[저장]을 클릭합니다.

</div>

<div class="tabs-content" data-title="결제창 정기결제">

1. [KCP 파트너관리자](http://partner.kcp.co.kr/) 접속 후 로그인을 합니다.

2. \[고객센터]→\[인증센터]→\[관리용 사설인증서]→\[인증서 발급]을 클릭합니다.

   (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 화면 1)

3. 사용자명, 인증서 비밀번호를 입력한 후 \[다음]을 눌러 인증서를 발급합니다.

   (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 화면 2)

   (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 완료 화면)

4. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹등록]을 클릭합니다.

5. \[상점정보]→\[사이트코드]에서 그룹등록할 사이트코드를 선택합니다.

6. \[그룹정보]에서 \[유형3]을 선택한 후 원하는 그룹명을 입력합니다.

7. \[결제입력 정보]에서 \[결제유형] 및 \[납부유형]을 확인하시고 고객사 유형에 맞게 선택합니다.

8. \[고지방법]에서 원하시는 고지 방법을 선택한 후 \[등록하기]를 클릭합니다.

   (이미지 첨부: KCP 파트너관리자 내 관리용 그룹등록 화면)

9. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹조회]를 클릭합니다.

10. \[사이트코드]에서 사용한 사이트코드를 선택한 후 \[검색]을 클릭합니다.

    (이미지 첨부: KCP 파트너관리자 내 관리용 그룹조회 화면)

11. 포트원 콘솔에서 채널 추가 시 사이트코드, 사이트키, 앞서 발급한 정기자동결제 그룹아이디를 입력한 후 \[저장]을 클릭합니다.

</div>

<div class="tabs-content" data-title="KCP 퀵페이">

포트원 콘솔에서 채널 추가 시 계약 완료 후 KCP로부터 전달받은 \[사이트코드] 및 \[사이트키], \[파트너 타입], \[파트너 서브타입], \[파트너이름]를 입력한 후 `저장`을 클릭합니다.

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->



<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

#### 간편결제 직연동

<details>

<summary>네이버페이 결제형</summary>

포트원 콘솔에서 채널 추가 시 네이버페이 1차 승인 시 발송된 안내 메일을 참고하여 \[파트너ID(페이센터아이디)], \[ClientID], \[Client Secret], \[ChainID]를 입력한 후 `저장`을 클릭합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

포트원 V1을 이용하시는 경우 채널 추가 시 입력한 \[ChainID]가 자동 적용되지 않습니다. 결제 요청 시 `naverChainId` 파라미터에 해당 값을 입력하여 요청해야 합니다.
포트원 V2 또는 결제사 정산 서비스를 이용하시는 경우 채널 추가 시 입력한 \[ChainID]가 자동 적용됩니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="info">

포트원 V2을 이용하시는 경우 채널 추가 시 입력한 \[ChainID]가 결제 요청 시 자동 적용됩니다.
결제사 정산 서비스를 이용하시는 경우에도 채널 추가 시 입력한 \[ChainID]를 입력해야 합니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>네이버페이 주문형</summary>

포트원 콘솔에서 채널 추가 시 네이버페이 1차 승인 시 발송된 안내 메일을 참고하여 \[파트너ID(페이센터아이디)], \[certiKey]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>카카오페이</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 카카오페이로부터 전달받은 \[CID]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>토스페이</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

**채널 연동 시 필요한 입력 정보 확인 방법은 모듈에 상관없이 동일합니다.**

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

1. [토스페이 가맹점 관리자](http://merchant.pay.toss.im/) 접속 후 로그인을 합니다.
2. \[가맹점 정보]→\[API Key정보]를 클릭합니다.

(이미지 첨부: 토스페이 가맹점 관리자 내 API Key 조회 화면)

3. 포트원 콘솔에서 채널 추가 시 \[상점아이디(MID)], \[API Key]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>페이코</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 페이코로부터 전달받은 \[가맹점코드(CPID)], \[ProductID], \[SellerKey]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary>하이픈</summary>



</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

#### 해외 결제대행사

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>엑심베이</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 엑심베이로부터 전달받은 \[상점아이디] 및 \[Secret Key]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>페이먼트월</summary>

1. [페이먼트월](http://api.paymentwall.com/developers/applications) 접속 후 로그인을 합니다.
2. \[My Projects]를 클릭합니다.

(이미지 첨부: 페이먼트월 페이지 내 Key 조회 화면)

3. 포트원 콘솔에서 채널 추가 시 \[Project Key], \[Secret Key]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>페이팔</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="페이팔 일반결제(SPB) / 정기결제(RT)">



</div>

<div class="tabs-content" data-title="페이팔 일반결제(Express Checkout)">

1. [페이팔](http://www.paypal.com/) 접속 후 로그인을 합니다.

2. \[Account settings]-\[Account access]를 클릭합니다.

3. \[API access]의 \[Update]를 클릭합니다.

   (이미지 첨부: 페이팔 페이지 내 PayPal Merchant ID 조회 화면 1)

4. \[NVP/SOAP API Integration (Classic)]를 클릭합니다.

   (이미지 첨부: 페이팔 페이지 내 PayPal Merchant ID 조회 화면 2)

5. \[API signature]를 선택한 후 \[Agree and Submit]을 클릭합니다.

   (이미지 첨부: 페이팔 페이지 내 PayPal Merchant ID 조회 화면 3)

6. 포트원 콘솔에서 채널 추가 시 \[API username], \[API password], \[Signature]를 입력한 후 `저장`을 클릭합니다.

<div class="hint" data-style="info">

- 테스트 모드로 결제를 진행하고 싶으신 경우 페이팔 테스트용 판매자/구매자 계정을 생성한 후 채널을 추가하여 테스트 결제를 진행해야 합니다. [→ 테스트용 계정생성 바로가기](http://developer.paypal.com/dashboard/accounts)

- 판매자와 구매자 계정 국가가 모두 한국인 경우 페이팔 정책상 결제가 불가능합니다.
  따라서 테스트용 구매자 계정 생성 시 Sandbox Accounts의 Country가 US인 Personal(구매자) 계정으로 생성하여 테스트를 해야합니다.

- 테스트 계정으로 결제 시 테스트용 카드정보를 참고하여 결제를 진행해야 합니다. [→ 테스트용 카드정보 바로가기](http://developer.paypal.com/api/rest/sandbox/card-testing/#link-creditcardgeneratorfortesting)

</div>

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="info">

포트원 V2에서는 페이팔 SPB 및 RT 방식만 제공합니다.

</div>



<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

## 4. 포트원 연동정보 확인하기

포트원을 이용한 결제 연동 시 필요한 연동정보를 확인합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->* 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] → \[식별코드·API Keys] 메뉴에서 \[V1 API]를 선택하여 고객사 식별코드, REST API Key, REST API Secret을 확인할 수 있습니다." "(관련 이미지 첨부)<div class="hint" data-style="info">

**고객사 식별코드란?**

- 포트원 가입 시 사용자에게 자동으로 생성되는 **고유값**입니다.
- 결제창 연동 시 사용되며, 결제 호출 시 \[객체 초기화]에 사용됩니다.
- **기술 문의** 시 해당 값을 공유해 주시면 빠르게 문제 해결을 도와드릴 수 있습니다.

</div><div class="hint" data-style="info">

**REST API Key, REST API Secret란?**

- V1 API 호출 시 사용되는 Access Token을 발급할 때 사용되는 값입니다.
- REST API Secret은 재발급이 가능하며, 재발급 즉시 기존의 Secret은 사용이 불가능합니다.

</div><div class="hint" data-style="danger">

REST API Key, REST API Secret **결제 거래 건을 컨트롤할 수 있는 민감 정보**로 외부로 유출되지 않도록 주의가 필요합니다.

</div><!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->### 4-1. 스토어 아이디(Store ID) 복사하기포트원을 이용한 결제 연동 시 필요한 스토어 아이디(Store ID)를 복사할 수 있습니다." "(관련 이미지 첨부)* 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] 화면에서 스토어 아이디를 복사할 수 있습니다.

  <div class="hint" data-style="info">

  **스토어 아이디(Store ID)란?**

  - 포트원 가입 시 \[대표 상점]이 생성되며, 자동으로 생성되는 고유값 입니다.
  - 추가로 하위 상점을 생성하는 경우 **상점마다 고유하게 부여**됩니다.
  - 결제창 연동 시 사용되며, 결제 호출 시 `storeId` 파라미터에 해당 값을 넣어야 합니다.
  - **기술 문의 시 해당 값을 공유**해 주시면 빠르게 문제 해결을 도와드릴 수 있습니다.

  </div>### 4-2. V2 API Secret 발급하기V2 API를 연동하기 위해서는 V2 API Secret을 별도로 발급한 후 사용이 가능합니다.
V2 API Secret 은 **Owner, Admin** 계정에서만 발급 및 삭제가 가능합니다." "(관련 이미지 첨부)* 관리자 콘솔 화면에서 \[결제연동] → \[연동 관리] → \[식별코드·API Keys] 메뉴에서 \[V2 API]를 선택합니다.
* `새로운 API Secret 발급`을 클릭합니다.
* Secret 목록에 표시될 `Secret 이름`을 입력하고 `만료 기한`을 선택한 후 `생성`을 클릭합니다.
* 생성된 Secret을 복사합니다. `API Secret을 확인했습니다`를 누른 후엔 Secret 값을 확인할 수 없으니 주의해 주세요." "<div class="hint" data-style="danger">

API Secret 발급 직후에만 값을 확인할 수 있습니다. 페이지를 벗어나면 API Secret
확인이 불가하오니 복사한 후 임의의 장소에 저장하여 사용하세요. 만약, API
Secret 값을 잊어버리신 경우 새로 발급받아 사용해야 합니다.

</div><div class="hint" data-style="info">

**API Secret이란?**

- API 사용 시 Authorization 헤더 인증을 위해 사용되는 값입니다.

- API Secret을 발급받으신 후, 선호하는 [인증 방식](https://developers.portone.io/api/rest-v2?v=v2#auth)
  을 선택하여 API를 사용하실 수 있습니다.

</div><div class="hint" data-style="danger">

API Secret은 **결제 거래 건을 컨트롤할 수 있는 민감 정보**로 고객사 서버에서만 사용되어야 하며, 브라우저 등 외부에 노출되어서는 안 됩니다.

</div><!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/integration/virtual-account/readme

---
title: 가상계좌 입금통보 설정
description: 결제대행사별 입금통보 URL을 안내합니다.
targetVersions:
  - v1
  - v2
---

가상계좌 결제를 이용하는 고객사의 경우 가상계좌 발급 후 고객이 입금 완료 했을 때 입금통보를 받을 수 있도록 아래와 같이 사전 설정을 진행해야 합니다.

## 결제대행사별 가상계좌 입금통보 URL

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

| 결제대행사        | 코드값 (pg provider) | 입금통보 주소                                                                                                                                                                                                                                  |
| ------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| KG이니시스       | html5\_inicis     | [https://service.iamport.kr/inicis\_payments/notice\_vbank](http://service.iamport.kr/inicis_payments/notice_vbank)                                                                                                                      |
| NHN KCP      | kcp               | [https://service.iamport.kr/kcp\_payments/notice\_vbank](http://service.iamport.kr/kcp_payments/notice_vbank)                                                                                                                            |
| 이지페이(KICC)   | kicc              | [https://service.iamport.kr/kicc\_payments/notice\_vbank](http://service.iamport.kr/kicc_payments/notice_vbank)                                                                                                                          |
| 헥토파이낸셜       | settle            | [https://service.iamport.kr/settle\_payments/notice\_vbank](http://service.iamport.kr/settle_payments/notice_vbank)                                                                                                                      |
| 키움페이         | daou              | 발행 통지 URL: [https://service.iamport.kr/daou\_payments/result](http://service.iamport.kr/daou_payments/result) 결과 통지 URL: [https://service.iamport.kr/daou\_payments/notice\_vbank](http://service.iamport.kr/daou_payments/notice_vbank) |
| 토스페이먼츠(신모듈)  | tosspayments      | [https://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments](http://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments)                                                            |
| 스마트로(신모듈)    | smartro\_v2       | 입금 통보, 환불이체 URL 동일: [https://tx-gateway-service.prod.iamport.co/smartro-v2](http://tx-gateway-service.prod.iamport.co/smartro-v2)                                                                                                        |
| 나이스페이먼츠(구모듈) | nice              | [https://service.iamport.kr/nice\_payments/notice\_vbank](http://service.iamport.kr/nice_payments/notice_vbank)                                                                                                                          |
| 나이스페이먼츠(신모듈) | nice\_v2          | [https://tx-gateway-service.prod.iamport.co/nicepay-v2](http://tx-gateway-service.prod.iamport.co/nicepay-v2)                                                                                                                            |
| 웰컴페이먼츠       | welcome           | [https://tx-gateway-service.prod.iamport.co/welcome](http://tx-gateway-service.prod.iamport.co/welcome)                                                                                                                                  |

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

| PG       | 코드값 (pg provider) | 입금통보 주소                                                                                                                                                                       |   |
| -------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| 토스페이먼츠   | tosspaysments     | [https://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments](http://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments) |   |
| 스마트로     | smartro\_v2       | 입금 통보, 환불이체 URL 동일: [https://tx-gateway-service.prod.iamport.co/smartro-v2](http://tx-gateway-service.prod.iamport.co/smartro-v2)                                             |   |
| 나이스페이먼츠  | nice\_v2          | [https://tx-gateway-service.prod.iamport.co/nicepay-v2](http://tx-gateway-service.prod.iamport.co/nicepay-v2)                                                                 |   |
| KG이니시스   | inicis\_v2        | [https://tx-gateway-service.prod.iamport.co/inicis-v2](http://tx-gateway-service.prod.iamport.co/inicis-v2)                                                                   |   |
| 한국결제네트웍스 | kpn               | [https://tx-gateway-service.prod.iamport.co/kpn/virtual-account](http://tx-gateway-service.prod.iamport.co/kpn/virtual-account)                                               |   |
| NHN KCP  | kcp\_v2           | [https://tx-gateway-service.prod.iamport.co/kcp-v2](http://tx-gateway-service.prod.iamport.co/kcp-v2)                                                                         |   |

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 결제대행사별 가상계좌 입금통보 URL 설정 방법

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>KG이니시스 설정 방법</summary>

1. [KG이니시스 가맹점관리자](http://iniweb.inicis.com/security/login.do) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[결제수단 정보]를 클릭합니다.
3. \[가상계좌] 항목 중 \[입금내역 통보]를 **실시간통보함**으로 설정해주세요.
4. \[입금통보 URL(IP)]를 `https://service.iamport.kr/inicis_payments/notice_vbank` 로 설정해주세요.
5. \[통보전문]을 **URL수신사용(일반)** 으로 설정해주세요.
6. \[채번방식]을 **건별채번**으로 설정해주세요.

(이미지 첨부: KG이니시스 가맹점관리자 내 입금통보 URL 설정 화면)

</details>

<details>

<summary>KCP 설정 방법</summary>

1. \[KCP 파트너관리자]\([https://partner.kcp.co.kr/](http://partner.kcp.co.kr/)) 접속 후 로그인을 합니다.
2. \[기술관리센터]→\[웹훅(Webhook) 관리]→\[웹훅URL 설정]을 클릭합니다.
3. \[변경 결제결과URL]을 `https://service.iamport.kr/kcp_payments/notice_vbank`로 설정해주세요.
4. \[인코딩 설정]을 `UTF-8`로 설정해주세요.

(이미지 첨부: KCP 파트너관리자 내 웹훅 URL 설정 화면)

</details>

<details>

<summary>나이스페이먼츠(구모듈) 설정 방법</summary>

1. [나이스페이먼츠 가맹점 관리자](http://npg.nicepay.co.kr/merchant/mkeyMngForm.do) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[기본정보]를 클릭합니다.
3. \[결제데이터통보] 항목에서 **가상계좌**의 \[URL/IP]를 `https://service.iamport.kr/nice_payments/notice_vbank` 로 설정해주세요.
4. \[재전송 간격]은 1분, \[재전송 횟수]는 3회로 설정해주세요.
5. \[OK체크] 체크 여부는 선택이며, 체크하지 않아도 무관합니다.

- 정상적인 입금통보 전송, 재전송을 위해 **암호화 전송 여부, 미전송시 체크를 해제**해야 합니다.
- 재전송 간격: 최소 1분 \~ 최대 10분까지만 입력 가능합니다.
- 재전송 횟수: 최소 1회 \~ 최대 10회까지 재전송 가능합니다.(전송 실패 건에 대해 자동 재전송)

(이미지 첨부: 나이스페이먼츠 가맹점 관리자 내 입금통보 URL 설정 화면)

</details>

<details>

<summary>이지페이(KICC) 설정 방법</summary>

이지페이(KICC) MID 발급 시 입금통보 URL이 자동으로 등록됩니다.
만약, 가상계좌 입금통보가 정상적으로 동작하지 않는 경우 KICC 영업담당자 혹은 대표 연락처(1644-2004, <easypay_cs@kicc.co.kr>)를 통해 \[가상계좌 입금통보 URL] 설정을 확인하시기 바랍니다.

</details>

<details>

<summary>헥토파이낸셜 설정 방법</summary>

헥토파이낸셜 MID 발급 후 헥토파이낸셜 담당자 및 기술팀에 메일로 요청해야 합니다.
<settle_pgdev@settlebank.co.kr>(개발팀)에 발급받은 MID 정보와 함께 아래와 같이 메일을 발송하여 요청을 진행해주세요.

> 헥토파이낸셜의 가상계좌 기능을 이용하기 위해 포트원의 vbank API를 사용하고자 합니다.
> 관련해서 정상적인 입금확인 절차가 이루어질 수 있도록 지정된 MID에 대한 가상계좌 통보 URL을 설정해 주시기 바랍니다.
>
> MID: XXXXXX 입금통보 URL: [https://service.iamport.kr/settle\_payments/notice\_vbank](http://service.iamport.kr/settle_payments/notice_vbank)
>
> 설정이 완료되면 회신 부탁드립니다.

</details>

<details>

<summary>키움페이 설정 방법</summary>

1. [키움페이 상점관리자](http://agent.kiwoompay.co.kr/) 접속 후 로그인을 합니다.
2. \[고객지원]→\[기술지원]→\[연동정보설정]를 클릭합니다.
3. \[CPID]를 선택한 후 \[조회하기]을 클릭합니다.
4. \[발행 통지 URL]을 [https://service.iamport.kr/daou\_payments/result](http://service.iamport.kr/daou_payments/result)로 설정해주세요.
5. \[결과 통지 URL]을 [https://service.iamport.kr/daou\_payments/notice\_vbank](http://service.iamport.kr/daou_payments/notice_vbank)로 설정해주세요.

(이미지 첨부: 키움페이 상점관리자 내 입금통보 URL 설정 화면 1)

(이미지 첨부: 키움페이 상점관리자 내 입금통보 URL 설정 화면 2)

(이미지 첨부: 키움페이 상점관리자 내 입금통보 URL 설정 화면 3)

</details>

<details>

<summary>웰컴페이먼츠 설정 방법</summary>

1. [웰컴페이먼츠 관리자시스템](http://wbiz.paywelcome.co.kr/) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[결제수단 정보]를 클릭합니다.
3. \[가상계좌] 항목 중 \[입금내역 통보]를 **실시간통보함**으로 설정해주세요.
4. \[입금통보 URL(IP)]를 `https://tx-gateway-service.prod.iamport.co/welcome`로 설정해주세요.
5. \[통보전문]을 **URL수신사용(일반)** 으로 설정해주세요.

(이미지 첨부: 웰컴페이먼츠 관리자시스템 내 입금통보 URL 설정 화면 1)

(이미지 첨부: 웰컴페이먼츠 관리자시스템 내 입금통보 URL 설정 화면 2)

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>KSNET 설정 방법</summary>

KSNET은 포트원을 통해 발급된 MID에 대해 자동으로 입금통보 URL이 설정됩니다.
만약 입금통보를 받지 못하는 경우 KSNET 담당자에게 메일을 통해 확인 요청 후 변경이 필요합니다.

</details>

<details>

<summary>토스페이먼츠(신모듈) 설정 방법</summary>

1. [토스페이먼츠 개발자센터](http://developers.tosspayments.com/) 접속 후 로그인을 합니다.
2. \[내 개발정보]를 클릭합니다.
3. \[상점]을 선택한 후 \[웹훅]을 클릭합니다.
4. \[+ 웹훅 등록하기]를 클릭합니다.
5. \[이름]을 입력하고, \[URL]은 `https://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments`로 설정해주세요.
6. \[구독할 이벤트]에서 `DEPOSIT_CALLBACK`을 체크한 후 \[등록하기]를 클릭합니다.

(이미지 첨부: 토스페이먼츠 개발자센터 내 입금통보 URL 설정 화면 1)

(이미지 첨부: 토스페이먼츠 개발자센터 내 입금통보 URL 설정 화면 2)

</details>

<details>

<summary>나이스페이먼츠(신모듈) 설정 방법</summary>

1. [나이스페이먼츠 가맹점 관리자](http://npg.nicepay.co.kr/merchant/mkeyMngForm.do) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[기본정보]를 클릭합니다.
3. \[결제데이터통보] 항목에서 **가상계좌**의 \[URL/IP]를 `https://tx-gateway-service.prod.iamport.co/nicepay-v2` 로 설정해주세요.
4. \[재전송 간격]은 1분, \[재전송 횟수]는 3회로 설정해주세요.
5. \[OK체크] 체크 여부는 선택이며, 체크하지 않아도 무관합니다.

- 정상적인 입금통보 전송, 재전송을 위해 **암호화 전송 여부, 미전송시 체크를 해제**해야 합니다.
- 재전송 간격: 최소 1분 \~ 최대 10분까지만 입력 가능합니다.
- 재전송 횟수: 최소 1회 \~ 최대 10회까지 재전송 가능합니다.(전송 실패 건에 대해 자동 재전송)

(이미지 첨부: 나이스페이먼츠 가맹점 관리자 내 입금통보 URL 설정 화면 )

</details>

<details>

<summary>스마트로(신모듈) 설정 방법</summary>

1. [스마트로 스마일비즈](http://www.smilebiz.co.kr/index.html) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[기본정보]를 클릭합니다.
3. \[결제 데이터 통보] 항목 중 \[가상계좌] 및 \[환불]항목에 다음과 같이 설정해주세요.
4. \[통보 티입]은 **신통보** 를 선택합니다.
5. \[인코딩 타입]은 **UTF-8** 를 선택합니다.
6. \[URL/IP]는 `https://tx-gateway-service.prod.iamport.co/smartro-v2`로 입력해주세요.
7. \[재전송 간격]은 1분, \[재전송 횟수]는 5회로 입력한 후 \[저장]을 클릭합니다.

- 재전송 간격: 최소 1분 \~ 최대 10분까지만 입력 가능합니다.
- 재전송 횟수: 최소 1회 \~ 최대 10회까지 재전송 가능합니다.(전송 실패 건에 대해 자동 재전송)

(이미지 첨부: 스마트로 스마일비즈 내 입금통보 URL 설정 화면)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary>KG이니시스 설정 방법</summary>

1. [KG이니시스 가맹점관리자](http://iniweb.inicis.com/security/login.do) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[결제수단 정보]를 클릭합니다.
3. \[가상계좌] 항목 중 \[입금내역 통보]를 **실시간통보함**으로 설정해주세요.
4. \[입금통보 URL(IP)]를 `https://tx-gateway-service.prod.iamport.co/inicis-v2` 로 설정해주세요.
5. \[통보전문]을 **URL수신사용(일반)** 으로 설정해주세요.
6. \[채번방식]을 **건별채번**으로 설정해주세요.

(이미지 첨부: KG이니시스 가맹점관리자 내 입금통보 URL 설정 화면)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary>한국결제네트웍스(KPN) 설정 방법</summary>

한국결제네트웍스(KPN)는 계약 이후, 발급된 MID에 대해 **가상계좌 백노티 기능**을 별도로 요청해야 합니다.

한국결제네트웍스(KPN) 담당자에게 MID 정보와 함께 입금 통보 URL을 전달하여 가상계좌 백노티 기능 요청을 진행해주세요.

만약 입금통보를 받지 못하는 경우 한국결제네트웍스(KPN) 담당자에게 메일을 통해 확인 요청 후 변경이 필요합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary>NHN KCP 설정 방법</summary>

1. [KCP 파트너관리자](http://partner.kcp.co.kr) 접속 후 로그인을 합니다.
2. \[기술관리센터]→\[웹훅(Webhook) 관리]→\[웹훅URL 설정]을 클릭합니다.
3. \[웹훅 URL]을 `https://tx-gateway-service.prod.iamport.co/kcp-v2`로 설정해주세요.
4. \[인코딩 설정]을 `UTF-8`로 설정해주세요.
5. \[저장]을 클릭합니다.

(이미지 첨부: KCP 파트너관리자 내 웹훅 URL 설정 화면)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/inicis

---
title: 결제대행사별 연동 정보 확인하기 - KG이니시스
targetVersions:
  - v1
  - v2
---

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

- **INILite Key**는 정기결제 시 필수로 입력해야 합니다.
- **INIAPI Key**, **INIAPI IV** 하위 상점 관련 API 사용시 필수로 입력해야 합니다. [영수증 내 하위 상점 거래 등록 API 바로가기](https://developers.portone.io/api/rest-v1/partner#post%20%2Fpartners%2Freceipts%2F%7Bimp_uid%7D)

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="info">

크레덴셜 중 **hashKey** 는 선택사항으로, KG이니시스에서 제공하는 모바일 금액위변조 방지 기능 사용을 원하실 경우 입력하시면 됩니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

1. [KG이니시스 가맹점관리자](http://iniweb.inicis.com/security/login.do) 접속 후 로그인을 합니다.

2. \[상점정보]→\[계약정보]→\[부가정보]를 클릭합니다.

3. 아래의 크레덴셜 값들을 확인합니다. 값이 표시되지 않는 경우 생성/갱신 버튼을 클릭해 주세요.

   **웹결제 signkey 생성 조회**의 조회 버튼을 클릭하여 값을 확인할 수 있습니다.
   **INIAPI key 생성 갱신**의 조회 버튼을 클릭하여 \[INIAPI KEY], \[INIAPI IV] 값을 확인할 수 있습니다.

   <!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

   **모바일 금액위변조 HashKey**의 조회 버튼을 클릭하여 값을 확인할 수 있습니다.

   <!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

(이미지 첨부: KG이니시스 가맹점관리자 내 크레덴셜 정보 조회 화면 1)

4. INILite Key의 조회 버튼을 클릭하여 값을 확인할 수 있습니다.

(이미지 첨부: KG이니시스 가맹점관리자 내 크레덴셜 정보 조회 화면 2)

5. 포트원 콘솔에서 채널 추가 시 \[상점아이디]와 위 과정에서 발급받은 크레덴셜 값들을 입력한 후 `저장`을 클릭합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="warning">

포트원 V1 결제모듈을 사용하시는 경우 KG이니시스로부터 전달받은 키파일을 별도로 등록해야 합니다. 키파일 등록과 관련하여 문의사항이 있는 경우 채널톡으로 문의해주세요.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/tosspayments

---
title: 결제대행사별 연동 정보 확인하기 - 토스페이먼츠 (신모듈)
targetVersions:
  - v1
  - v2
---

1. [토스페이먼츠 개발자센터](http://developers.tosspayments.com/) 접속 후 로그인을 합니다.
2. \[내 개발정보]를 클릭합니다.
3. \[API키] 메뉴에서 \[상점아이디(MID)]와 \[클라이언트키], \[시크릿키]를 확인합니다.
4. API 버전은 `2022-07-27`로 설정해야합니다.

(이미지 첨부: 토스페이먼츠 개발자센터 내 API 키 조회 화면)

5. 포트원 콘솔에서 채널 추가 시 \[상점아이디(MID)]와 \[클라이언트키], \[시크릿키]를 입력한 후 `저장`을 클릭합니다.


# https://developers.portone.io/platform/ko/guides/dictionary

---
title: 용어 사전
description: ''
---

|   용어  |                           설명                           |                                           비고                                          |
| :---: | :----------------------------------------------------: | :-----------------------------------------------------------------------------------: |
|   콘솔  |   포트원의 거래내역을 확인하고 파트너와 정산을 등록하고 내역을 확인 할 수 있는 솔루션입니다.  |                         [관리자콘솔 바로가기](https://admin.portone.io)                        |
|  고객사  |             포트원의 결제서비스를 이용하고 있는 포트원의 고객입니다.            |                                                                                       |
|  파트너  |          고객사가 결제사정산 이후 하위정산을 받을 고객사의 파트너사 입니다.         |                                                                                       |
| 결제사정산 |       포트원의 결제 이후 결제대행사(PG) 또는 간편결제사로부터 고객사가 받는 정산      |                                                                                       |
| 파트너정산 |              결제사정산 이후에 고객사가 파트너에게 내려주는 정산              |                                                                                       |
|   계약  |        고객사와 파트너 사이에 정산이 이루어지기 위한 조건(중개수수료, 주기 등)       |                                                                                       |
|  영업일  |                 은행이 영업을 하는 날로, 휴일이 아닌 날                | 10일(금), 11일(토), 12(일), 13(월)이라고 할 때, 11,12,13일의 전영업일은 10일이고, 10,11,12일의 후영업일은 13일입니다. |
|  달력일  |                      휴일과 상관없는 단순일                      |                                                                                       |
|  수수료  |                   절차 및 중개 등 때 수수하는 금전                  |                                                                                       |
|  부가세  | 상품(재화)의 거래나 서비스(용역)의 제공과정에서 얻어지는 부가가치(이윤)에 대하여 과세하는 세금 |                  일반과세자는 10%의 세율이 적용함으로, 수수료가 3천원 일 경우, 부가세는 300원으로 계산                 |
| 할인분담금 |             할인금액에 대해 고객사와 파트너가 나누어 부담하는 금액             |                                                                                       |
|   정률  |               수수료를 계산하는 방식으로 백분율을 곱하는 방식               |                          3만원에 대해 3%의 수수료로 계약 했을 시, 수수료는 900원                          |
|   정액  |           수수료를 계산하는 방식으로 고정된 금액 또는 건수에 곱하는 방식          |                                       판매 건당 1천원                                       |


# https://developers.portone.io/platform/ko/guides/process

---
title: 서비스 프로세스
description: ''
---

## ✔️ 파트너 정산 자동화 서비스 프로세스

<div class="hint" data-style="etc">

📘  **파트너정산은 간단한 API연동과 관리자 콘솔 등록을 통해 파트너정산을 자동화 하는 서비스 입니다.**

</div>

전반적인 프로세스는 다음과 같으며 포트원의 결제 서비스를 이용하고 있다고 가정합니다.

- 포트원 고객사는 API/콘솔을 통해 **파트너와 포트원 고객사간의 계약을 등록**합니다.
  - 중개 수수료, 정산 주기, 추가 수수료 등 정산정보를 등록합니다.

- 포트원 고객사는 API/콘솔을 통해 **파트너(하위셀러)를 등록**합니다.
  - 파트너 아이디, 파트너 계좌 등 파트너 정보를 등록합니다.
  - 파트너에게 기본으로 적용될 계약을 등록합니다.

- 포트원 고객사가 정산 API를 통해 **결제 아이디와 할인금액, 상품정보와 같은 주문정보, 파트너 아이디를 전달**합니다.
  - 포트원 결제 sdk/api 처리 이후 정산 api를 통해 결제 아이디, 할인금액, 주문정보, 파트너 아이디를 전달합니다.

- 포트원은 정산 API를 통해 **주문정보 기반으로 정산금액을 계산**합니다.
  - 파트너 아이디 를 통해 정산대상 파트너를 찾습니다.
  - 해당 파트너로 등록된 기본계약 아이디를 통해 중개수수료를 계산하고 정산주기를 통해 해당 정산건의 정산일을 계산합니다.
  - 할인금액을 반영하여 결제금액과 합하여 주문금액을 계산합니다.
  - 할인아이디를 통해 할인금액의 파트너 분담금을 계산합니다.
  - 추가수수료 아이디를 통해 해당 주문건에 적용되어야할 추가 과금을 계산합니다.

- 포트원은 파트너별로 **누적된 정산금액을 정산일에 맞춰 이체할 금액을 계산**합니다.


# https://developers.portone.io/platform/ko/usages/client

---
title: 고객사 예시
description: ''
---

## 사전 조건

- 가맹점 : 커머스 마켓플레이스

- 파트너 : 셀러 A, 셀러 B

- 계약 조건

  | 파트너 | 중개수수료 |          정산주기         |
  | :-: | :---: | :-------------------: |
  |  A  |  10%  | D+2, 매월 31일, 전 영업일 기준 |
  |  B  |  20%  | D+2, 매월 31일, 전 영업일 기준 |


# https://developers.portone.io/platform/ko/usages/contract

---
title: 계약 예시
description: ''
---

## 사전 조건

|  계약 | 중개수수료 |          정산주기         |
| :-: | :---: | :-------------------: |
| 계약1 |  10%  | D+2, 매월 31일, 전 영업일 기준 |

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
contract_payload = {
"platformFee": {
  "fixedRate": 10000
  }, # 10% 수수료. 료율 표시 기준은 1/100000 입니다. 따라서 소수점 5자리까지 표시 가능합니다.
"platformFeeVatPayer": "PARTNER", # 부가세 부담 여부. 파트너 부담("PARTNER"), 파트너 미부담("MERCHANT") 가 있습니다.
"id": "contractA",
"memo": "contract A",
"settlementCycle": { #정산주기
  "lagDays": 2, #정산 지연일 (d+n)일
  "datePolicy": "HOLIDAY_BEFORE", # 전 영업일 기준
  "method": { #'daily','weekly','monthly' 'manualDates' 중 하나를 선택하셔야 합니다.
    'monthly':{
      "daysOfMonth":[31] # 매월 31일. 31일은 월말 기준으로 합니다.
      }
    }
  }
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

contract_A = requests.post('https://api.portone.io/platform/contracts/', headers=headers, json=contract_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
// 10% 수수료. 료율 표시 기준은 1/100000 입니다. 따라서 소수점 5자리까지 표시 가능합니다.
const contract_payload = {
  platformFee: { fixedRate: 10000 },
  // 부가세 부담 여부. 파트너 부담("PARTNER"), 파트너 미부담("MERCHANT") 가 있습니다.
  platformFeeVatPayer: "PARTNER",
  id: "contractA",
  memo: "contract A",
  //정산주기
  settlementCycle: {
    //정산 지연일 (d+n)일
    lagDays: 2,
    // 전 영업일 기준
    datePolicy: "HOLIDAY_BEFORE",
    // 'daily','weekly','monthly' 'manualDates' 중 하나를 선택하셔야 합니다.
    method: {
      // 매월 31일. 31일은 월말 기준으로 합니다.
      monthly: { daysOfMonth: [31] },
    },
  },
};

axios
  .post("https://api.portone.io/platform/contracts", contract_payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "contract": {
    "id": "contractA",
    "graphqlId": "NTpjb250cmFjdEE=",
    "memo": "contract A",
    "platformFee": {
      "type": "FIXED_RATE",
      "rate": 10000
    },
    "settlementCycle": {
      "lagDays": 2,
      "datePolicy": "HOLIDAY_BEFORE",
      "method": {
        "type": "MONTHLY",
        "daysOfMonth": [31]
      }
    },
    "platformFeeVatPayer": "PARTNER",
    "isHidden": false,
    "appliedAt": "2023-08-11T11:18:52.944447Z" // 업데이트 된 순간을 뜻합니다. 추후 해당 계약에대한 업데이트가 있을 때 해당 시점을 보여줍니다.
  }
}
```

</div>

</div>


# https://developers.portone.io/platform/ko/usages/discount

---
title: 할인 예시
description: ''
---

## 사전 조건

- 할인 정책 1 : 할인 금액 50% 파트너 분담

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
discount_payload = {
"id": "discount_2", #할인 아이디
"partnerShareRate": 50000, # 10^5기준, 50% 분담
"memo": "테스트 할인"
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

discount_A = requests.post('https://api.portone.io/platform/discount-share-policies', headers=headers, json=discount_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const discount_payload = {
  id: "discount_2", //할인 아이디
  partnerShareRate: 50000, // 10^5기준, 50% 분담
  memo: "테스트 할인",
};

axios
  .post(
    "https://api.portone.io/platform/discount-share-policies",
    discount_payload,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `PortOne ${PORTONE_API_SECRET}`,
      },
    },
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "discountSharePolicy": {
    "id": "discount_2",
    "graphqlId": "MjpkaXNjb3VudF8y",
    "partnerShareRate": 50000,
    "memo": "테스트 할인",
    "isHidden": false,
    "appliedAt": "2023-08-13T10:41:02.385833Z"
  }
}
```

</div>

</div>


# https://developers.portone.io/platform/ko/usages/fee

---
title: 추가 수수료 예시
description: ''
---

## 사전 조건

- 추가수수료 정책 1 : 추가수수료 5% 파트너 분담

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
additionalfees_payload = {
  "id": "addtional_fee_3",
  "fee": {
    "fixedRate": 5,
  },
  "memo": "테스트 추가수수료",
  "vatPayer": "PARTNER"
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

fee_A = requests.post('https://api.portone.io/platform/additional-fee-policies', headers=headers, json=additionalfees_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const additionalfees_payload = {
  id: "addtional_fee_3", //추가 수수료 아이디
  fee: {
    fixedRate: 5, // 5%분담
  },
  memo: "테스트 추가수수료",
  vatPayer: "PARTNER",
};

axios
  .post(
    "https://api.portone.io/platform/additional-fee-policies",
    additionalfees_payload,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `PortOne ${PORTONE_API_SECRET}`,
      },
    },
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "additionalFeePolicy": {
    "id": "addtional_fee_3",
    "graphqlId": "MzphZGR0aW9uYWxfZmVlXzM=",
    "fee.type": "FIXED_RATE",
    "fee.rate": 5,
    "memo": "테스트 추가수수료",
    "vatPayer": "PARTNER",
    "isHidden": false,
    "appliedAt": "2023-08-13T12:31:50.822913Z"
  }
}
```

</div>

</div>


# https://developers.portone.io/platform/ko/usages/order

---
title: 주문정산 예시
description: ''
---

## 주문 정산 생성

주문 정산을 생성하는 예시입니다.

### 사전 조건

- 주문금액 : 10,000원
- 결제금액 : 10,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
import requests
# ... 결제 요청 및 결제 완료 로직 생략. 포트원 결제일경우 https://developers.portone.io/opi/ko/authpay/guide?v=v2 를 참고하세요

# 주문 정산 요청

orderTransferData = {
"partnerId": "partner_A", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_1", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
"orderAmount": 10000,
},
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 주문 정산 요청
const orderTransferData = {
  partnerId: "partner_A", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_1", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000,
  },
  settlementStartDate: null, // 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

axios
  .post("https://api.portone.io/platform/transfer/order", orderTransferData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7MCX58SGYCNVN1CWY3HXM6D",
    "graphqlId": "NjowMUg3TUNYNThTR1lDTlZOMUNXWTNIWE02RA==",
    "partner": {
      // 파트너 정보 생략
    },
    "status": "IN_PROCESS", // 정산 상태값. 정산 api 문서에서 보다 자세하게 확인하실 수 있습니다.
    "settlementDate": "2023-08-31", //정산일
    "settlementCurrency": "KRW", //포트원 결제 통화를 따릅니다.
    "isForTest": false,
    "amount": {
      "settlement": 8900, //최종 정산금액
      "payment": 10000, //결제금액
      "order": 10000, //주문금액
      "platformFee": 1000, //중개 수수료 10%
      "platformFeeVat": 100, //중개수수료 부가세
      "additionalFee": 0, //추가 수수료
      "additionalFeeVat": 0, //추가 수수료 부가세
      "discount": 0, //할인금액
      "discountShare": 0 //할인금액 중 파트너가 부담하는 금액
    },
    "contract": {
      //적용된 계약 정보. 파트너 A의 대표 계약이 적용됩니다.
      "id": "contractA",
      "graphqlId": "NTpjb250cmFjdEE=",
      "memo": "contract A",
      "platformFee": {
        "type": "FIXED_RATE",
        "rate": 10000
      },
      "payment": {
        "id": "payment_1",
        "orderName": "string",
        "currency": "KRW",
        "method": {
          "card": {}
        },
        "paidAt": "2023-08-11T08:21:01.241Z"
      }
    },
    "settlementStartDate": "2023-08-11", //기본값으로 결제 완료 시점을 따릅니다.
    "orderLines": [],
    "additionalFees": [],
    "discounts": []
  }
}
```

</div>

</div>

## 주문 취소 정산 등록

주문 정산건에 대해서 주문 취소가 일어났을 때 주문취소 정산을 등록하는 예시입니다.

### 사전 조건

- 취소금액 : 5,000원
- 결제 취소금액 : 5,000원
- 판매 파트너 : A
- 정산시작일 (결제 취소 완료 시점): 2023-08-12

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
# 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
# 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
# ... 중략....

# 주문취소 정산 요청
orderCancelTransferData ={
  "partnerId": "partner_A",
  "paymentId": "payment_1", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  "cancellationId": "cancellation_1", # 포트원 결제시 결제 취소 아이디
  "orderDetail": {
  "orderAmount": 5000,
  },
  "settlementStartDate": None, #결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  "isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderCancelTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderCancelTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
// 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
// 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
// ... 중략....

// 주문취소 정산 요청
const orderCancelTransferData = {
  partnerId: "partner_A",
  paymentId: "payment_1", // 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  cancellationId: "cancellation_1", // 포트원 결제시 결제 취소 아이디
  orderDetail: {
    orderAmount: 5000,
  },
  settlementStartDate: null, // 결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

axios
  .post(
    "https://api.portone.io/platform/transfer/order",
    orderCancelTransferData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `PortOne ${PORTONE_API_SECRET}`,
      },
    },
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER_CANCEL",
    "id": "01H7J87XQ4JAS28RWZBC29YCJ1",
    "graphqlId": "NjowMUg3Sjg3WFE0SkFTMjhSV1pCQzI5WUNKMQ==",
    "partner": {
      // 파트너 정보 생략 ...
    },
    "status": "SCHEDULED", // 정산 상태값. 미래 시점인경우 SCHEDULED 상태입니다.
    "settlementDate": "2023-08-3", //정산일
    "settlementCurrency": "KRW", //포트원 결제 통화를 따릅니다.
    "isForTest": false,
    "amount": {
      "settlement": 4450, //최종 정산취소금액
      "payment": 5000, //결제 취소 금액
      "order": 5000, //주문 취소 금액
      "platformFee": 500, //중개 수수료 10%
      "platformFeeVat": 50, //중개수수료 부가세
      "additionalFee": 0, //추가 수수료
      "additionalFeeVat": 0, //추가 수수료 부가세
      "discount": 0, //할인금액
      "discountShare": 0 //할인금액 중 파트너가 부담하는 금액
    },
    "contract": {
      //계약 정보 생략 ...
    },
    "payment": {
      "id": "payment_1",
      "orderName": "string",
      "currency": "KRW",
      "method": {
        "card": {}
      },
      "paidAt": "2023-08-11T08:21:01.241Z"
    }
  },
  "settlementStartDate": "2023-08-12", //기본값으로 결제 취소 시점을 따릅니다.
  "orderLines": [],
  "additionalFees": [],
  "discounts": [],
  "cancellation": {
    // 결제 취소 정보
    "id": "cancellation_1",
    "cancelledAt": "2023-08-12T11:57:15.292Z"
  }
}
```

</div>

</div>

## 상품 정보를 통한 주문 정산

상품 정보를 통한 주문 정산을 생성하는 예시입니다.

### 사전 조건

- 주문금액 : 14,000원
- 결제금액 : 14,000원
- 판매 파트너 : A, 정산시작일 (결제완료 시점): 2023-08-11

|  상품 |   가격   |  갯수 |
| :-: | :----: | :-: |
|  A  | 2,000원 |  5개 |
|  B  | 4,000원 |  1개 |

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# 주문정산과 차이나는 부분만 기재하였습니다.
orderTransferData ={
  # 생략 ...
  "orderDetail":{
    "orderLines":[
      {
        "product": {
          "id": "product_A", # 상품아이디
          "name": "상품 A", # 상품명
          "amount": 2000, # 상품 가격
          "tag": "과일", # 상품 태그 에시
        },
        "quantity": 5,
        "discounts": [], # 해당 상품에만 적용되는 할인정보
        "additionalFees": [], # 해당 상품에만 적용되는 추가 수수료 정보
      },
      {
        "product": {
          "id": "product_B", # 상품아이디
          "name": "상품 B", # 상품명
          "amount": 4000, # 상품 가격
          "tag": "과일", # 상품 태그 예시
        },
        "quantity": 1,
        "discounts": [], # 해당 상품에만 적용되는 할인정보
        "additionalFees": [], # 해당 상품에만 적용되는 추가 수수료 정보
      }
    ]
  }
# 생략 ...
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 위 주문정산1과 차이나는 부분만 기재하였습니다.
const orderTransferData = {
  // ... 생략 ...
  orderDetail: {
    orderLines: [
      {
        product: {
          id: "product_A", // 상품 아이디
          name: "상품 A", // 상품 명
          amount: 2000, // 상품 가격
          tag: "과일", // 상품 태그 에시
        },
        quantity: 5,
        discounts: [], // 해당 상품에만 적용되는 할인정보
        additionalFees: [], // 해당 상품에만 적용되는 추가 수수료 정보
      },
      {
        product: {
          id: "product_B", // 상품 아이시
          name: "상품 B", // 상품 명
          amount: 4000, // 상품 가격
          tag: "과일", // 상품 태그 예시
        },
        quantity: 1,
        discounts: [], // 해당 상품에만 적용되는 할인정보
        additionalFees: [], // 해당 상품에만 적용되는 추가 수수료 정보
      },
    ],
  },
  // ... 생략 ...
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

axios
  .post("https://api.portone.io/platform/transfer/order", orderTransferData, {
    headers: headers,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7MCX58SGYCNVN1CWY3HXM6D",
    "graphqlId": "NjowMUg3TUNYNThTR1lDTlZOMUNXWTNIWE02RA==",
    "partner": {
      // 파트너 정보 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      // 전체 주문건에 대한 정산정보
      "settlement": 12460, // 전체 주문건에 대한 정산 금액
      "payment": 14000,
      "order": 14000,
      "platformFee": 1400,
      "platformFeeVat": 140,
      "additionalFee": 0,
      "additionalFeeVat": 0,
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      //계약 정보 생략
    },
    "payment": {
      "id": "payment_1",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [
      // 상품별 주문 및 정산정보
      {
        "product": {
          "id": "product_A",
          "name": "상품 A",
          "amount": 2000,
          "tag": "과일"
        },
        "quantity": 5,
        "discounts": [],
        "additionalFees": [],
        "amount": {
          //상품 별 정산정보. 참고로 전체 주문에대한 할인 및 추가수수료 정보는 전체 주문건에 대한 정산정보에 포함됩니다.
          "settlement": 8900,
          "payment": 10000,
          "order": 10000,
          "platformFee": 1000,
          "platformFeeVat": 100,
          "additionalFee": 0,
          "additionalFeeVat": 0,
          "discount": 0,
          "discountShare": 0
        }
      },
      {
        "product": {
          "id": "product_B",
          "name": "상품 B",
          "amount": 4000,
          "tag": "과일"
        },
        "quantity": 1,
        "discounts": [],
        "additionalFees": [],
        "amount": {
          "settlement": 3560,
          "payment": 4000,
          "order": 4000,
          "platformFee": 400,
          "platformFeeVat": 40,
          "additionalFee": 0,
          "additionalFeeVat": 0,
          "discount": 0,
          "discountShare": 0
        }
      }
    ],
    "additionalFees": [], //전체 주문건에 대한 추가 수수료 정문
    "discounts": [] //전체 주문건에 대한 할인정보
  }
}
```

</div>

</div>

## 상품 정보를 통한 주문 취소 정산

상품 정보를 통한 주문 취소 정산을 등록하는 예시입니다.

### 사전 조건

- 주문취소 금액 : 4,000원
- 취소 상품 A 가격: 2,000
- 취소 갯수: 2개
- 결제 취소금액 4,000원

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
# 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
# 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
# ... 중략....

# 주문취소 정산 요청
orderCancelTransferData ={
  "partnerId": "partner_A",
  "paymentId": "payment_1", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  "cancellationId": "cancellation_1", # 포트원 결제시 결제 취소 아이디
  "orderDetail": {
  "orderAmount": 4000,
  "orderLines": [
    {
    "productId": "product_A", # 상품 A 아이디
    "quantity": "2" # 상품 취소 갯수
  }
],
  },
  "settlementStartDate": None, #결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  "isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderCancelTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderCancelTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
// 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
// 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
// ... 중략....

// 주문취소 정산 요청
const orderCancelTransferData = {
  partnerId: "partner_A",
  paymentId: "payment_1", // 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  cancellationId: "cancellation_1", // 포트원 결제시 결제 취소 아이디
  orderDetail: {
    orderAmount: 5000,
    orderLines: [
      {
        productId: "product_A", // 상품 A 아이디
        quantity: "2", // 상품 취소 갯수
      },
    ],
  },
  settlementStartDate: null, // 결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

axios
  .post(
    "https://api.portone.io/platform/transfer/order",
    orderCancelTransferData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `PortOne ${PORTONE_API_SECRET}`,
      },
    },
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER_CANCEL",
    "id": "01H7J87XQ4JAS28RWZBC29YCJ1",
    "graphqlId": "NjowMUg3Sjg3WFE0SkFTMjhSV1pCQzI5WUNKMQ==",
    "partner": {
      // 파트너 정보 생략 ...
    },
    "status": "SCHEDULED", // 정산 상태값. 미래 시점인경우 SCHEDULED 상태입니다.
    "settlementDate": "2023-08-3", //정산일
    "settlementCurrency": "KRW", //포트원 결제 통화를 따릅니다.
    "isForTest": false,
    "amount": {
      "settlement": 3560, //최종 정산취소금액
      "payment": 4000, //결제 취소 금액
      "order": 4000, //주문 취소 금액
      "platformFee": 400, //중개 수수료 10%
      "platformFeeVat": 40, //중개수수료 부가세
      "additionalFee": 0, //추가 수수료
      "additionalFeeVat": 0, //추가 수수료 부가세
      "discount": 0, //할인금액
      "discountShare": 0 //할인금액 중 파트너가 부담하는 금액
    },
    "contract": {
      //계약 정보 생략 ...
    },
    "payment": {
      "id": "payment_1",
      "orderName": "string",
      "currency": "KRW",
      "method": {
        "card": {}
      },
      "paidAt": "2023-08-11T08:21:01.241Z"
    }
  },
  "settlementStartDate": "2023-08-12", //기본값으로 결제 취소 시점을 따릅니다.
  "orderLines": [],
  "additionalFees": [],
  "discounts": [],
  "cancellation": {
    // 결제 취소 정보
    "id": "cancellation_1",
    "cancelledAt": "2023-08-12T11:57:15.292Z"
  }
}
```

</div>

</div>

## 주문 : 정산 파트너가 1:N일 때

정산 API는 현재 1명의 파트너에 대해 1개의 정산건만 지원하고 있습니다.

따라서 단일 주문에 여러 파트너가 정산을 해야한다면 파트너의 주문금액 기준으로 정산건을 분리하여 별도의
정산건을 생성하셔야 합니다.

이는 orderLines를 통한 정산API에도 동일하게 적용됩니다.

(추후 상품관리 기능을 통해 각 상품별 정산 파트너를 지정할 수 있도록 개선할 예정입니다.)

### 사전 조건

- 전체 주문금액 : 10,000원
- 결제금액 10,000원
- 판매 파트너 A, B
- 파트너 A 할당 주문금액 5,000원
- 파트너 B 할당 주문금액 5,000원

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# ... 결제 요청 및 결제 완료 로직 생략. 포트원 결제일경우 https://developers.portone.io/opi/ko/authpay/guide?v=v2 를 참고하세요

# 주문건에 대해서 주문금액 기준으로 직접 파트너별로 분리하여 정산건을 생성합니다.

orderTransferData_A ={
"partnerId": "partner_A", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_3", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
"orderAmount": 5000,
},
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse_A =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData_A)

orderTransferData_B ={
"partnerId": "partner_B", # 파트너 B 파트너 아이디 등록 가정
"paymentId": "payment_3", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
"orderAmount": 5000,
},
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": False # 테스트 정산 여부
}

orderTransferResponse_B =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData_B)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
// ... 결제 요청 및 결제 완료 로직 생략. 포트원 결제일경우 https://developers.portone.io/opi/ko/authpay/guide?v=v2 를 참고하세요
// 주문건에 대해서 주문금액 기준으로 직접 파트너별로 분리하여 정산건을 생성합니다.

const orderTransferData_A = {
  partnerId: "partner_A", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_3", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 5000,
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

const orderTransferData_B = {
  partnerId: "partner_B", // 파트너 B 파트너 아이디 등록 가정
  paymentId: "payment_3", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 5000,
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function sendOrderTransfer(data) {
  try {
    const response = await axios.post(
      "https://api.portone.io/platform/transfer/order",
      data,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error sending order transfer:", error);
  }
}

(async () => {
  const orderTransferResponse_A = await sendOrderTransfer(orderTransferData_A);
  console.log(orderTransferResponse_A);

  const orderTransferResponse_B = await sendOrderTransfer(orderTransferData_B);
  console.log(orderTransferResponse_B);
})();
```

</div>

</div>

## 주문 정산 할인 반영

할인 정책 생성은 쿠폰 또는 포인트와 같은 할인 유형에 대해서 분담율을 설정하신 후 생성 하실 수 있습니다.

할인 정책 생성은 콘솔이나 api를 통해서 하실 수 있습니다. 생성 후 `discounts` 파라미터에 `sharePolicyId`
와 `amount` (할인금액)을 전달하시면 됩니다.

### 사전 조건

- 주문금액 : 10,000원
- 할인금액 :2,000원
- 결제금액 : 8,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 할인 정책: 파트너 분담율 50%

### 샘플코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_4", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
    "orderAmount": 10000, # 주문금액
  },
"settlementStartDate": None, # 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
"discounts": [ # 주문에 적용될 할인 정책. 리스트로써 할인 유형별 여러개를 전달하실 수 있습니다.
  {
    "sharePolicyId": "discount_2", # 할인 정책 아이디
    "amount": 2000 # 할인 금액
  }
]
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransfer_A = request.post ('https://api.portone.io/platform/transfers/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransfer_payload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_4", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
  discounts: [
    // 주문에 적용될 할인 정책. 할인 유형별 여러개를 전달하실 수 있습니다.
    {
      sharePolicyId: "discount_2", // 할인 정책 아이디
      amount: 2000, // 할인 금액
    },
  ],
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function post_platform_api(endpoint, payload) {
  try {
    const response = await axios.post(
      `https://api.portone.io/${endpoint}`,
      payload,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error posting to platform API:", error);
  }
}

(async () => {
  const orderTransfer_A = await post_platform_api(
    "platform/transfers/order",
    orderTransfer_payload,
  );
  console.log(orderTransfer_A);
})();
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7Q7WKY98R1TKM8XBHSQ1J6F",
    "graphqlId": "NjowMUg3UTdXS1k5OFIxVEtNOFhCSFNRMUo2Rg==",
    "partner": {
      // 파트너 정보 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      //주문건 정산 정보
      "settlement": 7900, // 정산금액
      "payment": 8000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 0,
      "additionalFeeVat": 0,
      "discount": 2000, // 적용된 할인금액
      "discountShare": 1000 //파트너가 부담할 할인금액 (할인 정책의 파트너 분담율이 50% 이기 때문에)
    },
    "contract": {
      // 계약 정보 생략
    },
    "payment": {
      "id": "payment_4",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [],
    "additionalFees": [],
    "discounts": [
      //적용된 할인 정보
      {
        "sharePolicy": {
          //적용된 할인 정책
          "id": "discount_2",
          "graphqlId": "MjpkaXNjb3VudF8y",
          "partnerShareRate": 50000,
          "memo": "테스트 할인",
          "isHidden": false,
          "appliedAt": "2023-08-13T10:41:02.385833Z"
        },
        "amount": 2000,
        "shareAmount": 1000
      }
    ]
  }
}
```

</div>

</div>

## 주문 정산 상품 할인 반영

주문 전체가 아닌 특정 상품에대해서 할인 정책을 적용하고 싶으시면 orderLines 의 각 상품 항목의 discounts 파라미터에 전달하시면 됩니다.

### 사전 조건

- A 상품 금액 : 10,000원
- A 상품 할인금액 : 2000원
- 구매 갯수 : 2개
- 결제금액 : 16,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 할인 정책: 파트너 분담율 50%

### 샘플코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_4", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
    "orderAmount": 20000, # 주문금액
    "orderLines": [
    {
      "product": {
        "id": "product_A",
        "name": "A상품",
        "amount": 10000
      },
      "quantity": 2,
      "discounts": [
        {
          "sharePolicyId": "discount_2", # 할인 정책 아이디
          "amount": 2000 # 할인 금액
        }
      ],
     }
    ]
  },
"settlementStartDate": None, # 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
}

 headers = {
  'Authorization': f'PortOne ${PORTONE_API_SECRET}',
  'Content-Type': 'application/json'
}
orderTransfer_A = requests.post ('https://api.portone.io/platform/transfers/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransfer_payload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_4", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
    orderLines: [
      {
        product: {
          id: "product_A",
          name: "A상품",
          amount: 10000,
        },
        quantity: 2,
        discounts: [
          {
            sharePolicyId: "discount_2", // 할인 정책 아이디
            amount: 2000, // 할인 금액
          },
        ],
      },
    ],
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function post_platform_api(endpoint, payload) {
  try {
    const response = await axios.post(
      `https://api.portone.io/${endpoint}`,
      payload,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error posting to platform API:", error);
  }
}

(async () => {
  const orderTransfer_A = await post_platform_api(
    "platform/transfers/order",
    orderTransfer_payload,
  );
  console.log(orderTransfer_A);
})();
```

</div>

</div>

## 주문 정산 추가 수수료 반영

추가수수료 정책 생성 은 로켓배송, 마케팅채널 수수료 등 특정 주문건에 적용되는 수수료 입니다.
관리자 콘솔이나 API를 통해서 적용하실 수 있습니다.
`additionalFees` 파라미터에 `policyId` 를 전달하시면 됩니다.

### 사전 조건

- 주문금액 : 10,000원
- 추가수수료(로켓배송) : 2,000원
- 결제금액 : 8,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 추가 수수료 정책: 수수료율 5%, 부가세 파트너 부담

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_5", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
    "orderAmount": 10000, # 주문금액
  },
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
"additionalFees": [ # 주문에 추가수수료 정책들. 리스트로써 여러개를 전달하실 수 있습니다.
  {
    "policyId": "addtional_fee_3", # 추가수수료 정책 아이디
  }
]
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransfer_A =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

async function postPlatformApi(endpoint, payload) {
  const baseURL = "https://api.portone.io/";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
  };

  try {
    const response = await axios.post(baseURL + endpoint, payload, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

const orderTransferPayload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_5", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
  additionalFees: [
    // 주문에 추가수수료 정책들. 리스트로써 여러개를 전달하실 수 있습니다.
    {
      policyId: "addtional_fee_3", // 추가수수료 정책 아이디
    },
  ],
};

// Using the function
(async () => {
  const orderTransferA = await postPlatformApi(
    "platform/transfers/order",
    orderTransferPayload,
  );
  console.log(orderTransferA);
})();
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7QEET738MFFY40NP4V7WW4V",
    "graphqlId": "NjowMUg3UUVFVDczOE1GRlk0ME5QNFY3V1c0Vg==",
    "partner": {
      //파트너 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      //주문건 정산 정보
      "settlement": 8350,
      "payment": 10000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 500, //추가수수료
      "additionalFeeVat": 50, //추가수수료 부가세
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      // 계약 생약
    },
    "payment": {
      "id": "payment_5",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [],
    "additionalFees": [
      // 적용된 추가수수료 정책 정보
      {
        "policy": {
          "id": "addtional_fee_3",
          "graphqlId": "MzphZGR0aW9uYWxfZmVlXzM=",
          "fee": {
            "type": "FIXED_RATE",
            "rate": 5000
          },
          "memo": "테스트 추가수수료",
          "vatPayer": "PARTNER",
          "isHidden": false,
          "appliedAt": "2023-08-13T12:31:50.822913Z"
        },
        "amount": 500,
        "vat": 50
      }
    ],
    "discounts": []
  }
}
```

</div>

</div>

## 주문 정산 상품별 추가 수수료 반영

주문 전체가 아닌 특정 상품에대해서 할인 정책영 적용하고 싶으시면 `orderLines` 의 각 상품 항목의
`additionalFees` 파라미터에 전달하시면 됩니다.

### 사전 조건

- A 상품 금액 : 10,000원
- A 상품 갯수 : 2개
- A 추가수수료(로켓배송) : 2,000원
- 결제금액 : 16,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 추가 수수료 정책: 수수료율 5%, 부가세 파트너 부담

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_5", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
  "orderAmount": 20000, # 주문금액
    "orderLines": [{
      "product": {
        "id": "product_A",
        "name": "A상품",
        "amount": 10000
      },
      "quantity": 2,
      "additionalFees": [{
          "policyId": "fee_1" # 상품별 추가 수수료 정책
          }
        ]
      }
    ]
  },
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransfer_A =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

async function postPlatformApi(endpoint, payload) {
  const baseURL = "https://api.portone.io/";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
  };

  try {
    const response = await axios.post(baseURL + endpoint, payload, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

const orderTransferPayload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_5", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
    orderLines: [
      {
        product: {
          id: "product_A",
          name: "A상품",
          amount: 10000,
        },
        quantity: 2,
        additionalFees: [
          {
            policyId: "fee_1", // 상품별 추가 수수료 정책
          },
        ],
      },
    ],
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

// Using the function
(async () => {
  const orderTransferA = await postPlatformApi(
    "platform/transfers/order",
    orderTransferPayload,
  );
  console.log(orderTransferA);
})();
```

</div>

</div>

## 포트원 결제가 아닌 주문 정산

`externalPaymentDetail` 에 결제정보를 전달주시면 됩니다. `paymentId` 는 고객사에서 사용한 고유
주문번호를 전달해주시면 됩니다.

### 예시 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_5", # 고객사 주문번호
"orderDetail": {
    "orderAmount": 10000, # 주문금액
  },
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
"externalPaymentDetail": { # 포트원 결제가 아닌 주문 정산시 전달하시면 됩니다.
    "currency": "KRW", # 결제 통화 정보
    "orderName": "테스트 주문",
    "paidAt": "2023-08-11T08:21:01.241Z", # 결제 완료 시점. settlementStartDate을 전달하지 않으실경우 꼭 전달하셔야 됩니다.
    "method": {
      "card": {},
    }
  },
"additionalFees": [ # 주문에 추가수수료 정책들. 여러개를 전달하실 수 있습니다.
  {
    "policyId": "addtional_fee_3", # 추가수수료 정책 아이디
  }
]
}

orderTransfer_A = request.post ('https://api.portone.io/platform/transfers/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransferPayload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_5", // 고객사 주문번호
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  // 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  settlementStartDate: null,
  isForTest: false, // 테스트 정산 여부
  externalPaymentDetail: {
    // 포트원 아닌 결제건 정보
    currency: "KRW",
    orderName: "테스트 주문",
    paidAt: "2023-08-11T08:21:01.241Z",
    method: {
      card: {},
    },
  },
  additionalFees: [
    // 주문에 추가수수료 정책들
    {
      policyId: "addtional_fee_3", // 추가수수료 정책 아이디
    },
  ],
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function postPlatformApi(endpoint, data) {
  try {
    const response = await axios.post(endpoint, data, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting to API:", error);
    return null;
  }
}

const orderTransferA = postPlatformApi(
  "platform/transfers/order",
  orderTransferPayload,
);
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7QEET738MFFY40NP4V7WW4V",
    "graphqlId": "NjowMUg3UUVFVDczOE1GRlk0ME5QNFY3V1c0Vg==",
    "partner": {
      //파트너 정보 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      "settlement": 8350,
      "payment": 10000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 500,
      "additionalFeeVat": 50,
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      //계약 정보 생략
    },
    "payment": {
      "type": "EXTERNAL", //포트원 결제가 아닐경우 결제일 경우 EXTERNAL로 표기됩니다.
      "id": "payment_5",
      "orderName": "테스트 주문",
      "currency": "KRW",
      "method": {
        "type": "CARD"
      },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [],
    "additionalFees": [
      // 추가수수료 정보 생략
    ],
    "discounts": []
  }
}
```

</div>

</div>

## 정산 시작일을 지정해서 보내는 경우

정산고려를 배달완료, 수강오픈, 이용완료 등의 시점부터 하고 싶으시면 `settlementStartDate` 파라미터에
해당시점을 `YYYY-MM-DD`형식으로 전달하시면 됩니다.

해당 시점이 정해졌을 때 정산 api를 호출하시면 됩니다.

### 예시 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_6", # 포트원 결제시 가맹점 주문번호 (merchant_uid)
"orderDetail": {
  "orderAmount": 10000, # 주문금액
},
"settlementStartDate": '2023-09-01', # 배송완료 시점 (예시)
"isForTest": false, # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransfer_payload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_6", // 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  settlementStartDate: "2023-09-01", // 배송완료 시점 (예시)
  isForTest: false, // 테스트 정산 여부
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function sendOrderTransfer(data) {
  try {
    const response = await axios.post(
      "https://api.portone.io/platform/transfer/order",
      data,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error sending order transfer:", error);
  }
}
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7QHWNSNHCT9RF9GYKSKXRBZ",
    "graphqlId": "NjowMUg3UUhXTlNOSENUOVJGOUdZS1NLWFJCWg==",
    "partner": {
      //파트너 정보 생략
    },
    "status": "SCHEDULED", // 정산 시작일이 미래이므로 SCHEDULED 상태로 표기됩니다.
    "settlementDate": "2023-09-27", //설날을 고려하여 그 전 영업일이 됐습니다.
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      "settlement": 8900,
      "payment": 10000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 0,
      "additionalFeeVat": 0,
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      // 계약 정보 생약
    },
    "payment": {
      "id": "payment_6",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-09-01",
    "orderLines": [],
    "additionalFees": [],
    "discounts": []
  }
}
```

</div>

</div>


# https://developers.portone.io/platform/ko/usages/partner

---
title: 파트너 예시
description: ''
---

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
partner_payload = {
"id": "partnerA", # 파트너 아이디
"name": "파이썬 강사", # 파트너 이름 및 사업자명
"email": "admin@portone.io",
"businessRegistrationNumber": "1178178260", #파트너 사업자 등록번호. 필수는 아닙니다
"account": {
  "bank": "SHINHAN", # 파트너 계좌 은행. 국내 은행일경우 영문 대문자로 보내줘야 하며 이에대한 enum 값을 api문서에서 확인 가능합니다.
  "currency": "KRW", # 계좌 입금 통화
  "number": "10358907249", # 계좌 번호
  "holder": "김포트" # 예금주
},
"defaultContractId": "contractA", # 해당 파트너에게 적용하길 원하는 대표계약
"memo": "파트너 테스트 생성",
"tags": [
  "파이썬"
]
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

partner_A = requests.post('https://api.portone.io/platform/partners/', headers=headers, json=partner_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const partnerPayload = {
  id: "partnerA", // 파트너 아이디
  name: "파이썬 강사", // 파트너 이름 및 사업자명
  email: "admin@portone.io",
  businessRegistrationNumber: "1178178260", // 파트너 사업자 등록번호. 필수는 아닙니다
  account: {
    bank: "SHINHAN", // 파트너 계좌 은행. 국내 은행일경우 영문 대문자로 보내줘야 하며 이에 대한 enum 값을 api문서에서 확인 가능합니다.
    currency: "KRW", // 계좌 입금 통화
    number: "10358907249", // 계좌 번호
    holder: "김포트", // 예금주
  },
  defaultContractId: "contractA", // 해당 파트너에게 적용하길 원하는 대표계약
  memo: "파트너 테스트 생성",
  tags: ["파이썬"],
};

axios
  .post("https://api.portone.io/platform/partners", partnerPayload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "partner": {
    "id": "partnerA",
    "graphqlId": "NDpwYXJ0bmVyQQ==",
    "name": "파이썬 강사",
    "email": "admin@portone.io",
    "businessRegistrationNumber": "1178178260",
    "account": {
      "bank": "SHINHAN",
      "currency": "KRW",
      "number": "10358907249",
      "holder": "김포트",
      "status": "VERIFIED" // 계좌 인증 상태
    },
    "status": "APPROVED",
    "defaultContractId": "contractA",
    "memo": "파트너 테스트 생성",
    "tags": ["파이썬"],
    "isHidden": false,
    "appliedAt": "2023-08-11T11:19:58.829787Z"
  }
}
```

</div>

</div>


# https://developers.portone.io/platform/ko/readme

---
title: 파트너 정산 자동화 서비스 가이드
description: ''
---

## ✔️ 파트너 정산 자동화 서비스란?

<div class="hint" data-style="etc">

👍 **매달 반복되는 모든 파트너(하위셀러) 정산을 한 번에 처리하는 원스톱 정산 솔루션입니다.**

</div>

포트원의 파트너 정산 자동화 서비스를 이용하여 **마켓플레이스**, **플랫폼 사업자**들이 간단한 API연동과
포트원 관리자 콘솔을 통해서 간편하게 하위정산을 처리할 수 있습니다.

플랫폼 사업을 운영하는 포트원의 고객사분들의 다양한 요청을 통해 기획된 본 서비스는,
모든 정산 케이스들을 매우 편리하게 처리할 수 있습니다.

**하위셀러 정산 시스템 구축**을 위해 고객사 자체 개발에 드는 많은 비용과 시간을,
포트원 파트너 정산 자동화 서비스로 재무, 개발 공수를 획기적으로 줄여보세요.

## ✔️ 어떤 비지니스에 파트너 정산 자동화 서비스가 필요할까요?

파트너정산 서비스를 통해 정산 금액을 계산 및 관리하고 정산주기에 맞춰서 이체하실 수 있습니다.

각 주문건별로 중개수수료, 부가세, 할인 분담금 등을 파트너정산 서비스에서는 자동으로 정산금액을 계산합니다.

### 🛒 커머스 마켓플레이스

- 셀러가 마켓플레이스에 입점하여 상품을 판매하는 경우, 셀러에게 중개 수수료 및 할인분담금 등을 정산하는 경우
- 마케팅 채널 비용, 풀필먼트와 같이 추가로 발생하는 비용을 정산하는 경우

### 🖥 온라인 강의 플랫폼

- 크리에이터와 Revenue Share를 통해 주문건 마다 수익을 나누는 경우 (크리에이터, 파트너와 각 주문건별로 Revenue Share를 처리하는 경우)

### 🛵 배달 플랫폼

- 앱에서 이루어진 주문건별로 배달업체 및 식당과 수수료를 정산하는 경우

### 🤝 중고거래 플랫폼

- 앱에서 이루어진 거래건당 중개 수수료를 정산하는 경우
- 매입상품 플랫폼 커머스, 주기적으로 매입하는 상품에 대한 정산을 처리하는 경우

## ✔️ 왜 파트너 정산 자동화 서비스를 꼭 써야할까요?

포트원 결제 연동 서비스에서 확장하여 복잡한 정산도 손쉽게 처리가 가능합니다!

### 간단한 정산 API를 통해 실시간 정산 데이터 등록 및 관리

- 주문정보를 통한 손쉬운 정산 관리
- 주문건 외 추가 처리 필요한 정산건별

### 단순 중개수수료 처리부터 다양한 파트너 과금 모델 지원

- 쿠폰 및 포인트에 적용되는 할인 분담율
- 마케팅 비용 분담, 풀필먼트 수수료와 같은 주문별 추가 수수료
- 정산 시 수식 편집 가능

### 뱅킹앱 엑셀 다운로드 및 지급대행을 통한 이체 자동화

[파트너 정산 자동화 서비스 가이드](https://www.youtube.com/watch?v=tLeo78Ko4h4)


# https://developers.portone.io/release-notes/api-sdk/2023-04-24

---
releasedAt: 2023-04-24T00:00:00.000Z
writtenAt: 2023-04-27T00:00:00.000Z
---

## 수정사항

### ✔️ 비인증 결제에서 웹훅 재전송이 작동하지 않던 오류를 수정했습니다

비인증 결제건의 웹훅 응답이 500으로 전송되는 경우, 1분 간격으로 최대 5회 웹훅이 재전송 됩니다.


# https://developers.portone.io/release-notes/api-sdk/2023-05-08

---
releasedAt: 2023-05-08T00:00:00.000Z
writtenAt: 2023-05-11T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 결제내역 대용량 조회 API를 이용할 수 있습니다

결제내역 대용량 조회 API를 통해 5만건 이상의 결제내역을 한 번에 조회할 수 있습니다. 1회 호출 시
1,000건의 결제내역이 나타나며, 추가 호출을 통해 5만건 이상의 결제내역을 확인할 수 있습니다.

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다. [→ 결제내역 다건조회 API](https://developers.portone.io/api/rest-v2/payment?v=v2#get%20%2Fpayments-by-cursor)

## 기타 수정사항

### ✔️ 네이버페이 구매확정 API 에서 요청인을 설정할 수 있습니다

기존 네이버페이 구매확정 시 admin(store)이 기본값으로 구현되어 있었으나, `/requester` 파라미터를
추가하여 customer 로 구매확정할 수 있습니다.

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다. [→ \[결제형-네이버페이\] 에스크로 주문 확정 API](https://api.iamport.kr/)


# https://developers.portone.io/release-notes/api-sdk/2023-05-12

---
releasedAt: 2023-05-12T00:00:00.000Z
writtenAt: 2023-05-15T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 스마트로의 새로운 결제모듈을 이용할 수 있습니다

기존 결제모듈을 통해 제공되는 결제기능은 제한적이었으나, 이번 업데이트를 통해 이용 가능한 결제기능이
대폭 확대되었습니다. 그럼, 새로운 스마트로 결제모듈의 주요 기능을 바로 소개합니다.

- REST API 를 이용해 연동합니다
- 기존에 발급된 연동키값(MID, 서명, 결제취소 비밀번호)을 그대로 새로운 결제모듈에서 이용할 수 있습니다
- 정기결제를 지원합니다
- 허브형 간편결제를 지원합니다
- KRW, USD 결제를 지원합니다
- 카드사 결제창 다이렉트 호출이 가능합니다
- 에스크로 결제를 지원합니다
- 에스크로 배송 정보를 수정할 수 있습니다
- 면세 금액을 직접 설정할 수 있습니다
- 회전식/고정식 가상계좌를 발급할 수 있습니다

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다. [→ 스마트로 PG 설정하기](https://developers.portone.io/docs/ko/pg/payment-gateway/smartro-v2/readme)


# https://developers.portone.io/release-notes/api-sdk/2023-05-22

---
releasedAt: 2023-05-22T00:00:00.000Z
writtenAt: 2023-05-25T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 페이팔 정기결제를 이용 가능합니다

기존에 해외 정기결제를 연동하기 위해서는 페이먼트월이 유일한 선택지였지만 이번 업데이트를 통해 보다 다양한 선택지를 제공합니다.
그럼, 페이팔 정기결제를 이용하기 위한 주요 절차를 소개합니다.

- 포트원 SDK 1.3.0 부터 빌링키를 발급할 수 있습니다

- 빌링키 발급을 위해서는 포트원의 페이팔 파트너 계정으로 사전에 등록해야 합니다
  - 기존 페이팔 SPB 를 이용 중인 고객은 바로 이용 가능합니다

- 결제창 호출을 위해서는 페이팔 SPB 버튼 렌더링이 필요합니다

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다.
[→ 페이팔 RT 빌링키 발급 연동가이드 바로가기](https://developers.portone.io/docs/ko/pg/payment-gateway/rt)

### ✔️ 네이버페이(결제형)을 이용 중인 경우, 모바일 결제창이 표시됩니다

네이버페이의 업데이트에 따라, 네이버페이(결제형)을 이용 중인 경우 PC에서 결제창 호출 시 모바일 UI의 결제창이 표시되도록 수정했습니다.
또한 결제창 호출 시, 열린 웹페이지의 전체화면으로 결제창이 표시됩니다.

전체화면이 아닌 팝업으로 결제창을 나타나도록 하기 위해서는 `naverPopupMode` 파라미터 설정이 필요합니다.

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다.
[→ 네이버페이(결제형) 팝업 모드 설정하기](https://developers.portone.io/docs/ko/pg/simple/naver)

### ✔️ 워드프레스 우커머스를 통해 네이버페이(주문형)을 이용 중인 경우, 구매자의 배송지 변경 사항이 자동 반영됩니다

이번 업데이트를 통해 우커머스에서 배송지 정보를 간편하게 확인할 수 있습니다.

구매자가 배송지 변경 시 주문 건의 \[상세정보] - \[상태] 항목은 ‘배송지 변경’으로 표시되며, \[배송] 항목에서 변경된 배송지를 확인할 수 있습니다.
이와 함께 \[주문 메모]에 변경 내역이 기록됩니다.

본 기능 이용을 위해서는 아임포트 우커머스 플러그인 `2.2.36` 버전으로 업데이트하시기 바랍니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/api-sdk/2023-05-25

---
releasedAt: 2023-05-25T00:00:00.000Z
writtenAt: 2023-05-31T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 우리카드 독자 결제망을 이용할 수 있습니다

우리카드가 독자 결제망을 구축함에 따라 우리카드 결제건의 매입도 우리카드를 통해 실행됩니다.\
이러한 변경은 5월 26일부터 발급되는 모든 우리카드에 적용됩니다.

이번 업데이트를 통해 우리카드 결제창을 다이렉트 호출할 수 있습니다.
우리카드 결제 건에 대해 관리자콘솔에서 결제내역 조회 시, 결제수단에서 바로 '우리카드'로 구별할 수 있으며
API 결제내역 조회 시 카드사 코드번호(금융결제원 표준코드번호) '041' 로 구별할 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2023-06-19

---
releasedAt: 2023-06-19T00:00:00.000Z
writtenAt: 2023-06-21T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ KG이니시스를 통해 애플페이를 이용할 수 있습니다

KG이니시스 간편결제수단으로 애플페이를 이용할 수 있습니다. 이번 업데이트를 통해 포트원은 토스, KCP, KG이니시스, 총 3개 PG사를 통해 애플페이를 지원합니다.

기존에 KG이니시스를 이용 중이라면 결제수단 추가 계약을 통해 애플페이를 연동할 수 있습니다. 하단의 일반
문의 채널을 통해 관련 문의를 남겨주시면 포트원 고객지원팀이 안내드리겠습니다.

### ✔️ 기타 수정사항

- 블루월넛 가상계좌 만료일자가 실제 만료일자로 저장됩니다
- 엑심베이 결제 취소 안내 메일이 결제시 설정된 언어로 발송됩니다
- 페이먼트월 결제대기(pending) 단계에서 결제실패로 웹훅이 발송되던 오류를 수정했습니다
- 카카오페이 이용시 `partner_user_id`를 고객 식별 파라미터로 설정 가능합니다


# https://developers.portone.io/release-notes/api-sdk/2023-07-03

---
releasedAt: 2023-07-03T00:00:00.000Z
writtenAt: 2023-07-05T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ (구)토스페이먼츠 SDK(결제창) 결제 요청 시 아이패드 기기에서 모바일 환경의 결제창이 표시됩니다

iOS13 이후 아이패드 기기에서 결제 요청 시 PC 환경의 결제창이 표시되어 결제가 정상적으로 진행되지
않았습니다. 이번 업데이트를 통해 아이패드에서도 모바일 환경의 결제창이 표시되어 정상적으로 결제를
진행할 수 있습니다.

### ✔️ 헥토파이낸셜 빌링키 발급을 위한 API를 이용할 수 있습니다

기존 헥토파이낸셜의 경우 API를 통한 빌링키 발급 요청 시 결제가 함께 진행되었으나, 이번 업데이트를 통해 결제 없이 빌링키만 독립적으로 발급할 수 있습니다.

본 기능 사용을 위한 자세한 내용은 관련 연동가이드를 확인 바랍니다. [→ 헥토파이낸셜 빌링키 발급 요청하기](https://developers.portone.io/docs/ko/pg/payment-gateway/settle/readme)

## 기타 수정사항

### ✔️ KG모빌리언스를 통해 신용카드 결제를 이용할 수 있습니다

KG모빌리언스와 계약을 통해 새로운 결제수단으로 신용카드를 이용할 수 있습니다. 하단의 일반 문의 채널을 통해 관련 문의를 남겨주시면 포트원 고객지원팀이 안내드리겠습니다.

본 기능 설정을 위한 자세한 내용은 관련 연동가이드를 확인 바랍니다. [→ KG모빌리언스](https://developers.portone.io/docs/ko/pg/payment-gateway/kg)


# https://developers.portone.io/release-notes/api-sdk/2023-07-10

---
releasedAt: 2023-07-10T00:00:00.000Z
writtenAt: 2023-07-12T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ 나이스페이먼츠의 새로운 결제창을 이용할 수 있습니다

포트원을 통해 나이스페이먼츠의 새로운 결제창(이하 ‘(신) 나이스페이먼츠’)을 이용할 수 있습니다. 이번
업데이트를 통해 기존 모듈보다 확장된 결제수단을 제공하며, 모든 간편결제에 대해 허브형과 다이렉트
호출을 지원합니다.

(신) 나이스페이먼츠에서 이용 가능한 간편결제는 다음과 같습니다.

- 카카오페이
- 네이버페이
- 페이코
- 삼성페이
- 11Pay (구.SKPay)
- SSG Pay
- L Pay
- 애플페이

이 외에도 SDK/API 빌링키 발급, 에스크로, API 가상계좌 발급 및 회수, 면세 및 부가세 금액 지정(영세율 포함), 상점분담무이자 등의 기능을 지원합니다.

(신) 나이스페이먼츠 이용시 고려해야 하는 조건들이 있으니 다음 문서를 참고하시기 바랍니다.

[→ (신)나이스페이먼츠 일반결제 연동 유의사항](https://developers.portone.io/docs/ko/pg/payment-gateway/nice-v2/payment-caution)

[→ (신)나이스페이먼츠 비인증결제 연동 유의사항(빌링키 발급 및 API 연동)](https://developers.portone.io/docs/ko/pg/payment-gateway/nice-v2/billing-api-caution)

기존에 나이스페이먼츠를 이용 중이라면 간편결제사와 별도의 계약없이 간단한 신청만으로 간편결제를
이용할 수 있습니다. 하단의 일반 문의 채널을 통해 관련 문의를 남겨주시면 포트원 고객지원팀이
안내드리겠습니다.


# https://developers.portone.io/release-notes/api-sdk/2023-07-17

---
releasedAt: 2023-07-17T00:00:00.000Z
writtenAt: 2023-07-19T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ KCP를 통해 PC환경에서 애플페이 허브형과 다이렉트형을 이용할수 있습니다

기존에 KCP를 통해 애플페이를 이용하기 위해서는 모바일 환경에서만 가능했지만,
이번 업데이트를 통해 PC환경에서 애플페이 허브형과 다이렉트형을 모두 지원합니다.

### **결제 모듈 V1**✔️ PG MID 복수조회 API (`GET /users/pg`) 호출시 `channel_name`과 `channel_key`를&#xA;받아볼 수 있습니다

API를 통해 PG 설정 정보 호출시 channel\_name과 channel\_key 응답을 받아볼 수 있습니다.

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다.
[→ PG MID 복수조회 API 호출하기](https://developers.portone.io/docs/ko/api/miscellaneous-api/pg/pg-mid-api)

## 기타 수정사항

### **결제 모듈 V1**✔️ 네이버페이 웹훅 수신 시점에 거래 취소시 콜백을 수신합니다

웹훅 우선순위 설정 후 네이버페이 결제시, 웹훅 수신 포인트에서 결제상태가 결제취소여도 콜백을 수신합니다.

### **결제 모듈 V1**✔️ 페이먼트월 취소 요청 시점에 고객사 웹훅을 호출하지 않습니다

기존에는 결제 취소 요청시 즉시 결제상태가 변경되는 웹훅이 전송되어 잘못된 결제상태를 수신하는 문제가 있었으나,
이번 업데이트를 통해 페이먼트월 결제 취소 요청시 콜백을 수신하는 시점에 결제상태를 결제취소로 변경합니다.


# https://developers.portone.io/release-notes/api-sdk/2023-07-31

---
releasedAt: 2023-07-31T00:00:00.000Z
writtenAt: 2023-07-31T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ KCP 결제창 내 할인쿠폰 적용 여부 파라미터 기능 추가

KCP 인증결제창에서 할인쿠폰 적용 여부를 컨트롤 할수 있는 파라미터가 추가되었습니다.
할인쿠폰기능을 사용하기 위해서는 KCP와 협의가 먼저 선행되어야 하는점 유의하세요

본 기능 설정을 위한 자세한 내용은 SDK 가이드 문서를 확인 해주세요
[→ KCP SDK 연동가이드 확인하기](https://developers.portone.io/docs/ko/pg/payment-gateway/nhn-kcp#4-%EA%B8%B0%ED%83%80-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0)


# https://developers.portone.io/release-notes/api-sdk/2023-08-31

---
releasedAt: 2023-09-01T00:00:00.000Z
writtenAt: 2023-09-01T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ 엑심베이 브라우저 팝업 차단 해제 문구 default 언어를 영문으로 변경

엑심베이는 해외결제를 지원하는 PG사이기에 글로벌 언어인 영어로
팝업차단 해제 문구가 고객에게 안내되도록 변경하였습니다.

### **결제 모듈 V1**✔️ NHN KCP 빌링키 발급 시 주민등록입력/생년월일 파라미터로 노출 여부

NHN KCP결제창을 통한 빌링키 발급시 파라미터를 통해 빌링키 발급을 위한 정보입력 과정에서 필요한 항목중 개인정보에 해당되는 주민등록번호/생년월일 항목을
선택할수 있도록 하였습니다.

본 기능 설정을 위한 자세한 내용은 SDK 가이드 문서를 확인 해주세요
[→ KCP SDK 연동가이드 확인하기](https://developers.portone.io/docs/ko/pg/payment-gateway/nhn-kcp#4-%EA%B8%B0%ED%83%80-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0)

### **결제 모듈 V1**✔️ 결제 URL 생성 API 지원 PG사 확대

이번 업데이트를 통해 아래 PG사도 결제 URL 생성 API를 통해 결제를 발생시킬수 있게되었습니다.

- (신)토스페이먼츠
- (신)스마트로
- KSNET
- (신)페이팔 일반결제/정기결제
- (신)나이스페이먼츠


# https://developers.portone.io/release-notes/api-sdk/2023-12-15

---
releasedAt: 2023-12-15T00:00:00.000Z
writtenAt: 2023-12-15T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ (신) 토스페이먼츠 SDK(결제창) 빌링키 발급 시 결제창 백그라운드 변경

기존에는 토스페이먼츠 결제창의 백그라운드가 모서리 부분에만 표시되었으나 결제창 호출 시 전체 백그라운드를 동일한 색상으로 처리하여 깔끔하게 표시되도록 하였습니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/api-sdk/2024-01-08

---
releasedAt: 2024-01-08T00:00:00.000Z
writtenAt: 2024-01-08T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 신모듈에서 나이스페이먼츠 결제를 지원합니다.

이제 포트원 V2를 통해 나이스페이먼츠 일반결제/정기결제가 가능합니다. 이번 업데이트를 통해 다양한 결제수단을 제공하며, 모든 간편결제에 대해 허브형과 다이렉트 호출을 지원합니다.

나이스페이먼츠에서 지원하는 결제수단 아래와 같습니다.

- 카드

- 실시간 계좌이체

- 가상계좌 (회전식/고정식)

- 휴대폰 소액결제

- 상품권 (컬쳐랜드)

- 간편결제 (허브형/다이렉트)
  - 카카오페이
  - 네이버페이
  - 페이코
  - 삼성페이
  - 애플페이
  - 11Pay (구.SKPay)
  - SSGPay
  - LPay

이 외에도 SDK/API 빌링키 발급, 에스크로, API 가상계좌 발급 및 말소, 면세 및 부가세 금액 지정(영세율 포함), 상점분담무이자 등의 기능을 지원합니다.

나이스페이먼츠 연동에 대해 자세히 알고 싶다면 [→ 나이스페이먼츠 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/nice-v2?v=v2) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-01-11

---
releasedAt: 2024-01-11T00:00:00.000Z
writtenAt: 2024-01-11T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ 토스페이 정기결제 이용이 가능합니다.

기존에는 토스페이 일반결제만 지원하였으나 이번 업데이트를 통해 토스페이 일반결제와 정기결제를
이용하실 수 있습니다. 그럼, 토스페이 정기결제를 이용하기 위한 주요 절차를 소개합니다.

- 포트원 SDK 1.3.0 부터 빌링키 발급 및 정기결제를 사용할 수 있습니다.
- 토스페이 일반결제 / 정기결제를 사용하시려면 (신)토스페이(tosspay\_v2)로 연동해야 합니다.
- (신)토스페이 결제 시 카드결제, 계좌결제를 지정할 수 있습니다.

(신)토스페이 연동에 대해 자세히 알고 싶다면
[→ (신)토스페이 연동가이드](https://developers.portone.io/docs/ko/pg/simple/tosspay-v2/readme?v=v1) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-01-25

---
releasedAt: 2024-01-24T00:00:00.000Z
writtenAt: 2024-01-25T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ 네이버페이 결제형에서 10원부터 결제할 수 있습니다.

네이버페이 결제형의 기존 최소주문금액 100원이었으나, 10원으로 수정되었습니다.

### **관리자 콘솔**✔️ 가상계좌 발급취소/말소 API를 이용하여 가상계좌를 말소한 경우 결제실패로&#xA;분류되어 표시됩니다.

가상계좌 발급 후 입금 전에 API를 이용해 가상계좌를 말소한 경우, 관리자콘솔 \[결제 상세 내역 조회]에서
결제실패로 분류됩니다. 가상계좌 말소 건은 엑셀 다운로드시 실패 상세 항목에 **계좌말소**로 표시되어
구분할 수 있습니다.

### **관리자 콘솔**✔️ 엑셀 내의 `PG계정` 컬럼명이 `PG상점아이디(MID)` 로 변경되었습니다.

\[결제 상세 내역 조회]에서 엑셀 다운로드시 기존에 PG계정으로 표시되던 컬럼명이 **PG상점아이디(MID)** 로 표시됩니다.

## 기타 수정사항

### **결제 모듈 V1**✔️ Microsoft Edge 브라우저에서 adblock extension과 충돌하는 현상이 수정되었습니다.

Microsoft Edge 브라우저 환경에서 결제 모듈 호출 시 adblock extension과 충돌을 일으켜 결제창이
정상적으로 호출되지 않는 현상이 간헐적으로 발생하였으나 현재는 수정되어 정상적으로 호출이
가능합니다.

### **결제 모듈 V1**✔️ (신) 페이팔 결제 요청 시 컨텐츠 상품인 경우 배송지 입력란이 표시되지 않습니다.

기존에는 디지털 상품인 경우에도 배송지 입력란이 표시되었으나 결제 요청 시 `digital:true`로
입력한 경우 청구주소로 배송 체크박스 및 상세 주소 입력 칸이 표시되지 않습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-01-30

---
releasedAt: 2024-01-31T00:00:00.000Z
writtenAt: 2024-02-01T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ easyPay.easyPayProvider(간편결제수단) 파라미터에 대한 동작이 변경되었습니다.

기존에는 토스페이먼츠 결제창(SDK) 결제 요청 시 `payMethod:EASY_PAY` 입력 후
`easyPay.easyPayProvider` 파라미터를 입력하지 않은 경우 통합결제창이 호출되었으나,
`payMethod:EASY_PAY` 입력 후 `easyPay.easyPayProvider` 파라미터를 입력하지 않은 경우 **에러를
리턴**합니다.

따라서, 통합결제창 호출을 원하시는 경우 `payMehtod:CARD` 로 변경하여 호출하시고, 간편결제 다이렉트
호출을 원하시는 경우 `payMethod:EASY_PAY`로 입력하신 후 `easyPayProvider`를 입력하여 호출하시기
바랍니다.

(빌링키 발급 및 정기결제를 사용하시는 경우 위의 변경으로 인한 영향을 받지 않습니다.)


# https://developers.portone.io/release-notes/api-sdk/2024-02-23

---
releasedAt: 2024-02-23T00:00:00.000Z
writtenAt: 2024-02-26T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 신모듈에서 페이팔 결제를 지원합니다.

이제 포트원 V2를 통해 페이팔 일반결제 및 정기결제를 이용할 수 있습니다. 포트원에서는 페이팔
일반결제는 SPB(Smart Payment Button) 방식으로, 정기결제는 RT(Reference Transaction) 방식으로
제공합니다.

페이팔 연동에 대해 자세히 알고 싶다면 [→ 페이팔 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/paypal-v2?v=v2) 에서 확인하실 수 있습니다.

### **결제 모듈 V1**✔️ 결제 취소 시 발송되는 웹훅에 취소내역 아이디 (`cancellation_id`)가 포함됩니다.

기존에는 웹훅 발송 시 결제번호(`imp_uid`), 주문번호(`merchant_uid`), 결제 결과(`status`) 정보만
전달하였으나, 이제 취소내역 아이디(`cancellation_id`)도 포함하여 전달됩니다.

### **결제 모듈 V1**✔️ Schedule API의 `checking_amount` 파라미터 입력시 `currency`가 `KRW`로 자동 입력됩니다.

기존에는 `checking_amount` 파라미터를 사용할 때, 직접 `currency` 파라미터를 입력해야 정상적으로 결제 및 취소 처리가 가능했습니다.

이번 업데이트에서는 고객 편의성을 높이고자 자동으로 `currency` 파라미터가 `KRW`로 적용되도록 변경했습니다.
따라서 해외 통화 결제를 이용하는 경우 반드시 `currency` 파라미터에 해당 국가 통화를 입력하여 이용하시기 바랍니다.


# https://developers.portone.io/release-notes/api-sdk/2024-03-08

---
releasedAt: 2024-03-08T00:00:00.000Z
writtenAt: 2024-03-11T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 신모듈에서 스마트로 API 정기결제를 지원합니다.

이제 포트원 V2를 통해 스마트로에서도 API를 이용하여 빌링키를 발급할 수 있습니다.

스마트로 API 빌링키 발급에 대해 자세히 알고싶다면 [→ 스마트로 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/smartro-v2?v=v2) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-03-15

---
releasedAt: 2024-03-15T00:00:00.000Z
writtenAt: 2024-03-18T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ 결제 요청 시 파라미터 유효성 검증이 추가되었습니다.

결제 요청 시 필수 파라미터인 `amount`와 `merchant_uid`에 대한 유효성 검증 로직이 추가되었습니다.
`amount`는 number 형식으로, `merchant_uid`는 string 형식으로 요청해야 합니다.
형식이 올바르지 않는 경우 에러가 리턴되며 결제창 호출이 실패하니 유의하시기 바랍니다.

### **결제 모듈 V1****결제 모듈 V2**✔️ 토스페이먼츠(신모듈) 간편결제를 IFRAME으로 이용할 수 있습니다.

토스페이먼츠를 통해 카카오페이, 페이코, 삼성페이, Lpay, 토스페이 호출 시 기존에는 POPUP 방식으로 호출되었으나
이번 업데이트를 통해 IFRAME으로 이용 가능하여 간편결제 창을 닫은 후에도 정상적으로 실패응답을 확인할 수 있습니다.

## 기타 수정사항

### **결제 모듈 V1**✔️ 엑심베이 결제 취소시 호출되는 API 버전이 업그레이드 되었습니다.

기존에 포트원이 제공하던 알리페이가 알리페이 플러스로 변경됨에 따라 결제 취소시 호출되는 API 버전이 업그레이드 되었습니다.
결제 취소의 경우 기존과 동일한 방법으로 이용할 수 있습니다.

### **결제 모듈 V2**✔️ 모바일 환경에서 웰컴페이먼츠를 통해 가상계좌 결제 요청시 입금 기한을 설정할 수 있습니다.

기존에는 모바일 환경에서 웰컴페이먼츠를 통해 가상계좌 결제 요청시 입금 기한 설정이 불가능했으나, 이제 입금 기한 파라미터에 입력된 날짜로 설정할 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-03-25

---
releasedAt: 2024-03-25T00:00:00.000Z
writtenAt: 2024-03-25T00:00:00.000Z
---

## 주요 업데이트 사항

### **관리자 콘솔**✔️ 결제 연동 페이지가 새롭게 단장했습니다.

- **\[채널 관리]**
  - 기존 연동 관리와 달리 채널 추가 시 결제 모듈 별 지원되는 기능 및 결제 수단 정보를 쉽게 확인할 수 있습니다.
  (관련 이미지 첨부)
  - 자세한 채널 추가 방법은 가이드를 참고해 주세요. [→ 포트원 V1 채널 연동 가이드 바로가기](../../../../docs/ko/ready/readme)

- **\[식별코드·API Keys]**
  - V2 API Secret을 발급할 수 있습니다.
  - V2 API Secret의 경우 유효기간에 따라 갯수에 제한없이 발급이 가능합니다.
  (관련 이미지 첨부)

- **\[결제알림(Webhook) 관리]**
  - 포트원 V2 결제모듈에서 사용하는 웹훅 데이터 형식으로도 테스트할 수 있습니다.
  - 포트원 V1/V2 결제 모듈 모두 테스트/실환경에 대해 웹훅을 각각 설정할 수 있습니다.
  (관련 이미지 첨부)


# https://developers.portone.io/release-notes/api-sdk/2024-04-01

---
releasedAt: 2024-03-29T00:00:00.000Z
writtenAt: 2024-04-04T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 신모듈에서 KG이니시스 결제를 지원합니다.

이제 포트원 V2를 통해 KG이니시스 일반결제 및 정기결제가 가능합니다. 이번 업데이트를 통해 다양한 결제수단을 제공하며, 모든 간편결제에 대해 허브형과 다이렉트 호출을 지원합니다.

KG이니시스에서 지원하는 결제수단 아래와 같습니다.

- 카드

- 실시간 계좌이체

- 가상계좌 (회전식/고정식)

- 휴대폰 소액결제

- 상품권 (컬쳐랜드/스마트문상/해피머니/도서문화상품권)

- 간편결제 (허브형/다이렉트)
  - 카카오페이
  - 네이버페이
  - 페이코
  - 삼성페이
  - 애플페이
  - 토스페이
  - SSGPay
  - LPay

이 외에도 SDK/API 빌링키 발급, 에스크로, API 가상계좌 발급 및 말소, 면세 및 부가세 금액 지정, 상점분담무이자,
하위 사업자 정보로 현금영수증 발급 등의 기능을 지원합니다.

KG이니시스 연동에 대해 자세히 알고 싶다면 [→ KG이니시스 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/inicis-v2?v=v2) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-04-05

---
releasedAt: 2024-04-03T00:00:00.000Z
writtenAt: 2024-04-04T00:00:00.000Z
---

## 기타 수정사항

### **관리자 콘솔**✔️ 결제 내역 엑셀 내의 카드유형 정보가 추가되었습니다.

\[결제 상세 내역 조회]에서 엑셀 다운로드시 신용카드, 체크카드, 기프트카드에 대한 정보가 표시됩니다.


# https://developers.portone.io/release-notes/api-sdk/2024-04-12

---
releasedAt: 2024-04-12T00:00:00.000Z
writtenAt: 2024-04-12T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 신모듈에서 한국결제네트웍스(KPN) 결제를 지원합니다.

이제 포트원 V2를 통해 한국결제네트웍스 일반결제 및 정기결제가 가능합니다. 이번 업데이트를 통해 다양한 결제수단을 제공하며,
일부 간편결제에 대해 허브형과 다이렉트 호출을 지원합니다.

한국결제네트웍스에서 지원하는 결제수단은 아래와 같습니다.

- 카드

- 실시간 계좌이체

- 가상계좌 (회전식)

- 휴대폰 소액결제

- 간편결제 (허브형/다이렉트)
  - 카카오페이
  - 네이버페이 (다이렉트 호출 불가)
  - 페이코
  - 삼성페이
  - 토스페이

이 외에도 SDK/API 빌링키 발급, 에스크로, API 가상계좌 발급 및 말소, 면세 금액 지정, 상점분담무이자 등의 기능을 지원합니다.

한국결제네트웍스 연동에 대해 자세히 알고 싶다면 [→ 한국결제네트웍스 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/kpn?v=v2) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-05-08

---
releasedAt: 2024-05-08T00:00:00.000Z
writtenAt: 2024-05-08T00:00:00.000Z
---

## 주요 업데이트 사항

### **관리자 콘솔**✔️ 빌링결제 내역조회 페이지가 새롭게 오픈했습니다.

새로운 빌링결제 내역 조회 페이지에서는 빌링키 결제 및 결제 예약건에 대해 한 번에 조회 및 관리할 수 있습니다.

- **\[상세 내역 조회]**

  - 빌링키 결제 내역을 상태별로 조회할 수 있습니다.

  - 콘솔 화면에서 결제 예약일 변경, 예약 해지, 결제 즉시 재시도, 결제 재예약을 할 수 있습니다.

  - 리커버리 기능을 설정하여 결제 실패 건에 대한 일괄 재시도를 자동화할 수 있습니다.
    - 포트원 V1 결제 서비스의 경우 결제예약 API(Schedule API)를 이용한 결제 예약 건 중 결제 실패 상태인
      거래 건에 한하여 리커버리 기능을 사용할 수 있습니다. 비 인증 결제(빌링키) API(Again API) 건에 대한
      리커버리 기능은 상반기 내로 업데이트될 예정입니다.

    - 포트원 V2 결제 서비스의 경우 빌링키 결제 API 및 결제 예약 API를 이용한 결제 건 중 결제 실패
      상태인 거래 건에 한하여 리커버리 기능을 사용할 수 있습니다.

  (관련 이미지 첨부)

- **\[빌링결제 캘린더]**

  - 빌링결제 건에 대한 월간/일간 데이터를 확인할 수 있습니다.

  (관련 이미지 첨부)

  - 자세한 내용은 가이드를 참고해 주세요. [→ 포트원 빌링결제 내역 가이드 바로가기](../../../../docs/ko/console/guide/billing-payments)


# https://developers.portone.io/release-notes/api-sdk/2024-05-14

---
releasedAt: 2024-05-14T00:00:00.000Z
writtenAt: 2024-05-17T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ KSNET을 통한 카드사 다이렉트 기능을 지원합니다.

이제 포트원 V1의 KSNET을 통해 카드사 다이렉트 결제가 가능합니다. 이번 업데이트를 통해 카드사 결제창을
바로 호출하여 사용하세요.

KSNET 카드사 다이렉트 연동에 대해 자세히 알고 싶다면
[→ KSNET 연동가이드](https://developers.portone.io/docs/ko/pg/payment-gateway/ksnet/readme?v=v1#%EC%B9%B4%EB%93%9C%EC%82%AC-%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8A%B8-%ED%98%B8%EC%B6%9C)
에서 확인하실 수 있습니다.

(\* 포트원 V2 결제 모듈의 경우 추후에 KSNET을 통한 카드사 다이렉트 기능이 지원될 예정입니다.)


# https://developers.portone.io/release-notes/api-sdk/2024-06-03

---
releasedAt: 2024-06-03T00:00:00.000Z
writtenAt: 2024-06-03T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 스마트 라우팅 기능이 새롭게 출시되었습니다.

포트원 V2에서 스마트 라우팅 기능을 제공합니다.

(관련 이미지 첨부)

### 스마트 라우팅이란?

스마트 라우팅은 원클릭 결제 트래픽 자동 분산 서비스로 최초 연동 이후 포트원 관리자콘솔 내에서
결제대행사 추가/삭제 및 결제대행사 별 결제 요청 비율을 설정할 수 있습니다.
노코드 방식으로 고객사에서 멀티 PG 인프라를 구성하는데 필요한 개발 리소스를 확 줄였습니다.

**지원 범위**

- 결제창(SDK) 인증결제
- API 수기(키인) 결제
- API 빌링키 발급 및 빌링키결제/예약결제

**지원 기능**

1. 스마트 라우팅 그룹 설정에 따른 결제 트래픽 분산 자동화
2. 슈퍼빌링키 발급

- 스마트 라우팅 그룹 내 모든 결제대행사에 대해 빌링키 발급 요청 및 저장

**지원 결제대행사**

- 나이스페이먼츠
- KG이니시스
- 토스페이먼츠
- 스마트로
- KSNET
- KPN
- NHN KCP (6월 중 제공 예정)

이번 업데이트를 통해 스마트 라우팅 그룹을 생성하고 자동화된 결제 트래픽 분산 서비스를 경험해보세요.

스마트 라우팅에 대해 자세히 알고 싶다면
[→ 스마트 라우팅 소개](https://developers.portone.io/opi/ko/extra/smart-routing/intro) 및
[→ 스마트 라우팅 연동하기](https://developers.portone.io/opi/ko/extra/smart-routing/integration)
문서에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-06-17

---
releasedAt: 2024-06-17T00:00:00.000Z
writtenAt: 2024-06-17T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 결제모듈에서 NHN KCP 결제를 지원합니다.

이제 포트원 V2를 통해 NHN KCP 일반결제 및 정기결제가 가능합니다. 이번 업데이트를 통해 다양한 결제수단을 제공하며,
일부 간편결제에 대해 허브형과 다이렉트 호출을 지원합니다.

NHN KCP에서 지원하는 결제수단은 아래와 같습니다.

- 카드

- 실시간 계좌이체

- 가상계좌

- 휴대폰 소액결제

- 상품권 결제(컬쳐랜드/해피머니/도서문화상품권)

- 간편결제 (허브형/다이렉트)
  - 카카오페이
  - 네이버페이
  - 페이코
  - SSG페이
  - L페이
  - 삼성페이
  - 애플페이
  - 토스페이

이 외에도 SDK/API 빌링키 발급, 에스크로, API 가상계좌 발급, 면세 금액 지정, 상점분담무이자 등의 기능을 지원합니다.

NHN KCP 연동에 대해 자세히 알고 싶다면 [→ NHN KCP 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/kcp-v2?v=v2) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-06-19

---
releasedAt: 2024-06-19T00:00:00.000Z
writtenAt: 2024-06-19T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 결제모듈에서 토스페이 결제 직연동을 지원합니다.

이제 포트원 V2를 통해 토스페이 직연동이 가능합니다. 이번 업데이트를 통해 일반결제 및 정기결제를 지원합니다.

토스페이에서 지원하는 결제수단은 아래와 같습니다.

- 카드
- 계좌
- 토스머니

토스페이 연동에 대해 자세히 알고 싶다면 [→ 토스페이 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/tosspay-v2?v=v2) 에서 확인하실 수 있습니다.

### **결제 모듈 V2**✔️ 웹훅 신버전이 추가되었습니다.

V2 결제모듈을 이용하시는 경우 빌링키 발급 관련 웹훅을 받아보실 수 있습니다.
웹훅을 연동하여 이벤트 발생 시 결제 건의 상태를 동기화할 수 있습니다.

웹훅 버전에 대한 자세한 내용은 [웹훅 연동하기](https://developers.portone.io/docs/ko/v2-payment/webhook?v=v2#웹훅-버전에-따른-스키마-안내)에서 확인하실 수 있습니다.

### **결제 모듈 V2**✔️ 웹훅 시크릿 기능이 추가되었습니다.

V2 결제모듈을 이용하시는 경우 웹훅 시크릿을 사용하여 포트원이 생성한 웹훅 요청인지 출처를 확인할 수 있으며,
악의적인 공격자가 보낸 웹훅 요청을 차단할 수 있습니다.

웹훅 시크릿에 대한 자세한 내용은 [웹훅 연동하기](https://developers.portone.io/docs/ko/v2-payment/webhook?v=v2#웹훅-요청-검증하기)에서 확인하실 수 있습니다.

## 기타 업데이트 사항

### **결제 모듈 V1**✔️ KG이니시스 통합인증 시 보안성이 강화되었습니다.

이제 포트원을 통한 KG이니시스 통합인증 이용시 민감정보를 암호화하여 처리할 수 있습니다.
고객사에서는 별도로 추가 대응 없이 바로 적용되어 사용하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-06-20

---
releasedAt: 2024-06-27T00:00:00.000Z
writtenAt: 2024-07-01T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1****결제 모듈 V2**✔️ 빌링키 다건조회 API가 추가되었습니다.

이제 포트원을 통해 발급된 빌링키를 한 번에 조회할 수 있습니다.

빌링키 다건조회 API에 대한 자세한 내용은 [빌링키 다건조회 API](https://developers.portone.io/api/rest-v2/billingKey#get%20%2Fbilling-keys)에서
확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-07-04

---
releasedAt: 2024-07-05T00:00:00.000Z
writtenAt: 2024-07-08T00:00:00.000Z
---

## 기타 업데이트 사항

### **결제 모듈 V1**✔️ 엑심베이 Econtext 결제 시 일부 건에 대한 결제 상태 처리 로직이 변경되었습니다.

결제 승인이 완료된 경우 브라우저 새로고침 등의 이유로 결제 프로세스가 비정상적으로 종료된 경우에도
결제 상태가 `결제 완료`로 유지됩니다.

### **결제 모듈 V1**✔️ 엑심베이 결제 시 금액 위변조가 발생하는 경우 결제 취소 처리되도록 변경되었습니다.

승인 결과 처리 단계에서 결제 요청 당시 결제 금액과 승인 결제 금액이 다른 경우 자동으로 결제 취소 됩니다.


# https://developers.portone.io/release-notes/api-sdk/2024-07-11

---
releasedAt: 2024-07-10T00:00:00.000Z
writtenAt: 2024-07-10T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ KG이니시스 통합인증 결과 중 성별 정보를 확인할 수 있습니다.

이제 KG이니시스 통합인증을 통해 인증 시 응답에 성별 정보가 포함되며, 인증 후 내역 조회 시 응답 필드에도
성별 정보가 포함됩니다.

성별 정보를 활용하시려면 이전 인증 내역의 경우 Null로 응답됩니다.

### **결제 모듈 V2**✔️ 한국결제네트웍스(KPN)을 통한 카드 다이렉트 결제가 지원됩니다.

이제 한국결제네트웍스(KPN)을 이용하시는 고객사에서도 아래 지원되는 카드사에 한하여 카드 다이렉트
결제를 이용하실 수 있습니다.

**지원 카드 목록**

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

KPN 카드 다이렉트에 대한 자세한 내용은 [KPN 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/kpn)에서 확인하실 수 있습니다.

## 기타 업데이트 사항

### **결제 모듈 V2**✔️ redirectUrl 파라미터 입력 형식 유효성 검증 기준이 완화되었습니다.

기존에는 http 또는 https 프로토콜인 경우에만 입력 가능하였으나, 이제 다른 프로토콜로 입력한 경우에도
정상적으로 결제 요청이 가능하도록 유효성 검증 기준을 완화하였습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-09-05

---
releasedAt: 2024-09-05T00:00:00.000Z
writtenAt: 2024-09-05T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 결제모듈에서 KG이니시스 통합인증을 지원합니다.

이제 포트원 V2를 통해 KG이니시스 통합인증이 가능합니다.
이번 업데이트를 통해 통신사PASS, 토스 인증서, 카카오 인증서, 네이버 인증서 등 민간인증서를 이용하여
본인인증을 진행할 수 있습니다.

통합인증에서 지원하는 인증수단은 아래와 같습니다.

- 통신사PASS
- 토스
- 카카오
- 네이버
- 페이코
- 금융결제원
- KB국민은행
- 신한은행
- 하나은행
- 우리은행
- IBK기업은행
- NH농협은행
- 카카오뱅크
- 삼성패스

KG이니시스 통합인증 연동에 대해 자세히 알고 싶다면 [→ KG이니시스 통합인증 연동가이드](https://developers.portone.io/opi/ko/integration/pg/v2/inicis-unified-identity-verification?v=v2) 에서 확인하실 수 있습니다.

### **결제 모듈 V1**✔️ 포트원 V1 결제모듈에서 KCP 간편결제 다이렉트 호출 결제 이용시 해당 거래건에 결제수단 정보를 표시하는 방식이 일부 변경되었습니다.

KCP 간편결제 다이렉트 호출 결제의 경우 기존에 결제수단(`pay_method`)이 `naverpay`, `payco`, `kakaopay와` 같은
간편결제사로 분류하는 코드였으나 9월 2일 거래건부터 결제 승인 시 결제수단에 따라 `point` 혹은 `card`로 표시되도록 변경되었습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-09-27

---
releasedAt: 2024-09-27T00:00:00.000Z
writtenAt: 2024-09-30T00:00:00.000Z
---

## 주요 업데이트 사항

### **PG 거래대사**✔️ 이제 콘솔 내 PG 거래대사에서 조회한 데이터를 엑셀로 다운로드하여 사용해 보세요.

(관련 이미지 첨부)

PG 거래대사 내의 **거래 정산 내역** 메뉴에서 정산일 또는 거래일을 기준으로,
**거래 건별 조회** 메뉴에서는 정산일을 기준으로 최대 3개월 분량의 데이터를 엑셀로 다운로드할 수 있습니다.

### **PG 거래대사**✔️ KSNET, KPN, 하이픈에서 발생한 거래 건도 PG 거래대사에서 데이터 확인이 가능해집니다.

기존에 12개 PG사 (KCP, KG이니시스, 나이스페이먼츠, 토스페이, 네이버페이, 다날, 페이코, (구)토스페이먼츠,
토스페이먼츠, 카카오페이, 엑심베이, 헥토파이낸셜) 에서만 지원하던 **PG 거래대사**가 KSNET, KPN, 하이픈까지 확장하여
총 15개 PG사 데이터에 한하여 제공됩니다.

(참고 : PG 거래대사 메뉴의 경우 클로즈 베타로 운영되고 있으며,
사용을 원하시는 고객께서는 [PG거래대사 베타서비스 신청 바로가기](https://forms.gle/cZAqJLGqovC1STrS8)에서 신청해 주시길 바랍니다.)

### **결제 모듈 V1**✔️ 엑심베이 결제시 결제 금액 위변조 확인이 강화됩니다.

기존에는 엑심베이로부터 전달받은 값 자체에 위변조 내용이 있는지 hash만 검증했으나
앞으로는 hash 검증에 추가로 실제 결제금액까지 비교하여 금액을 위변조하여 결제가 승인되지 않도록 로직을 추가하였습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-12-19

---
releasedAt: 2024-12-19T00:00:00.000Z
writtenAt: 2024-12-12T00:00:00.000Z
---

안녕하세요 원 페이먼트 인프라팀입니다.

24년 12월 19일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 아래 3가지 개선으로 보다 좋은 사용성을 제공합니다.

1. 통합 결제 내역 - 상점별 내역 조회 기능이 추가되었습니다.
2. 통합 결제 내역 - 일괄 웹훅 재전송 기능이 추가되었습니다.
3. 통합 결제 내역 - 필터 사용성을 개선하였습니다.

### **관리자 콘솔**

## 주요 업데이트 사항

### ✔️ 통합 결제 내역 - 상점별 내역 조회

- **상점별 내역 조회**
  - 전체 또는 하위 상점별로 나누어 통합 결제 내역을 확인할 수 있습니다.

이를 통해, 기존에 전체 내역에서 수동으로 분류해서 확인해야 하는 번거로움을 대폭 줄이고 쉽게 상점별로 결제 내역을 조회할 수 있게 되었습니다.

(관련 이미지 첨부)

### ✔️ 통합 결제 내역 - 일괄 웹훅 재전송

- **웹훅 일괄 재전송**
  - 웹훅 수신에 실패한 결제 건들에 대해 일괄로 웹훅을 재전송할 수 있도록 기능이 추가되었습니다.
  - 조회된 기간 내에 웹훅 수신에 실패한 결제 건 수를 한 번에 파악할 수 있습니다.

- **상점별 구분 발송**
  - 전체 또는 하위 상점별로 나누어 웹훅 일괄 재전송 기능을 사용할 수 있습니다.

이를 통해, 기존에 웹훅 재전송을 개별 건마다 적용하던 불편함을 개선하고 웹훅 재전송을 일괄적으로 빠르게 적용할 수 있게 되었습니다.

(관련 이미지 첨부)

### ✔️ 통합 결제 내역 - 필터 사용성 개선

- **옵션 배열 방식 변경**
  - 선택 항목이 많은 경우, 기존 **horizontal 배열**에서 **vertical 배열**로 변경하여 가독성과 사용성을 개선하였습니다.

- **“전체 선택” 기능 확장**
  - 기존 “전체 선택” 기능이 일괄 적용만 가능했던 점을 개선하여, 각 항목별로도 “전체 선택” 기능을 추가했습니다. 이를 통해 더 세부적으로 선택 및 해제가 가능하도록 했습니다.

이를 통해, 기존에 비해 한눈에 옵션을 확인할 수 있어 선택 과정이 간소화되었고 필요한 옵션만 빠르고 정확하게 설정할 수 있도록 편의성을 향상시켰습니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/api-sdk/2025-01-15

---
releasedAt: 2025-01-15T00:00:00.000Z
writtenAt: 2025-01-15T00:00:00.000Z
---

안녕하세요 원 페이먼트 인프라팀입니다.

25년 1월 15일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 아래 3가지 새로운 기능을 통해 조금 더 편리한 원 페이먼트 인프라를 경험하실 수 있습니다.

1. **PG 거래대사** 메뉴를 이용하실 수 있습니다.
2. **결제 데이터 분석** 메뉴를 이용하실 수 있습니다.
3. **제품 온보딩 가이드** 기능을 이용하실 수 있습니다.

### **관리자 콘솔**

## 주요 업데이트 사항

### ✔️ PG 거래대사 메뉴 가이드

PG 거래대사 메뉴를 통해 아래 2가지의 업무에 쉽게 활용하실 수 있습니다.

- **거래 대사**
  - 거래 정산 내역 - 거래 내역 탭
    - 포트원을 통해 연동된 고객사 주문 데이터와 PG사의 결제 정보를 자동 비교 / 대사하여 거래 이상 건수 및 금액을 쉽게 확인할 수 있습니다.
    - 거래일 기준으로 포트원 거래 데이터와 PG사 거래 데이터를 자동 대사합니다.
    - 다양한 PG사와 결제수단, 통화를 통합하여 일관된 기준으로 거래 및 정산 데이터를 제공합니다.

(관련 이미지 첨부)

- **정산 내역 확인**
  - 거래 정산 내역 - 정산 내역 탭
    - 정산금의 상세 내역을 확인할 수 있는 자료를 제공합니다.
    - 정산일 기준으로 정산 금액이 어떤 거래 데이터들로 이루어져 있는지 쉽게 확인할 수 있습니다.
    - 미래 정산금액 / 일자를 확인하여 현금 흐름 예측에 활용할 수 있습니다.

(관련 이미지 첨부)

이를 통해, PG 를 통해 받아야 하는 금액에 이상이 없는지 체크하고 특정 기간 내에 받을 정산 금액을 쉽게 확인할 수 있어 현금 흐름 예측하는 데에 용이하게 활용하실 수 있습니다.

### ✔️ 결제 데이터 분석 메뉴 가이드

결제 데이터 분석 메뉴를 통해 결제 수단, PG 트렌드를 분석하고 현재 우리의 고객은 어떤 결제 수단을 통해 많이 결제하고 있는지 파악할 수 있어 추후 프로모션 등에 데이터 활용을 할 수 있는 기반을 마련할 수 있습니다.

- **결제 현황 분석**
  - 비교 기간 대비 거래액 및 거래 건수 추이를 한 눈에 파악이 가능합니다.
  - 비교 기간 대비 건별 평균 거래액 및 고객당 평균 거래액 추이를 확인할 수 있습니다.
  - 기간 내 취소 및 환불률을 확인할 수 있으며 통화별로도 분리하여 확인이 가능합니다.

(관련 이미지 첨부)

- **결제수단별 인사이트**
  - 검색한 기간 내에 결제수단별로 거래액 및 거래 건수 순위를 쉽게 파악할 수 있습니다.
  - 카드사별로 구분하여 거래액 추이를 쉽게 파악할 수 있습니다.
  - 간편결제별로 구분하여 거래액 추이를 쉽게 파악할 수 있습니다.

(관련 이미지 첨부)

- **결제대행사별 인사이트**
  - 결제대행사별로 구분하여 거래액 및 거래 건수를 쉽게 파악할 수 있습니다.

(관련 이미지 첨부)

### ✔️ 제품 온보딩 가이드 기능 추가

- **포트원 사용 가이드**
  - 유의사항 : Owner, Admin 계정만 확인 가능합니다.
  - 포트원을 통해 온라인 결제를 사용하기 위해 필수적으로 진행해야 하는 단계 중 아직 완료되지 않은 사항들을 빠르게 확인하고 진행할 수 있습니다.

(관련 이미지 첨부)

- **제품별 온보딩 가이드**
  - 여러 서비스 중 원하는 목적에 맞는 제품을 바로 확인하고 메뉴로 이동할 수 있도록 제품별 온보딩 가이드를 추가하였습니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/platform/2023-08-31

---
releasedAt: 2023-08-31T00:00:00.000Z
writtenAt: 2023-09-01T00:00:00.000Z
---

## 주요 업데이트 사항

### **파트너 정산 자동화**✔️ 파트너정산 서비스가 출시되었습니다.

플랫폼 및 마켓플레이스 사업자가 손쉽게 하위정산 할 수 있는 파트너정산 서비스가 런칭 되었습니다.
파트너(셀러) 등록, 계약 등록, 정산등록 과 같은 정산의 세밀한 모든 부분을 관리자 콘솔로 관리하세요!
해당 서비스는 유료 서비스입니다. 문의를 원하시면 신청(<https://platform.contact.portone.io/>)하시면
영업일 2일안에 연락드리겠습니다.

[→ 파트너 정산 자동화 서비스 소개](https://portone.io/korea/ko/service/platform)
[→ 파트너 정산 자동화 연동가이드 확인하기](https://developers.portone.io/platform/ko/readme)


# https://developers.portone.io/release-notes/platform/2023-11-08

---
releasedAt: 2023-11-08T00:00:00.000Z
writtenAt: 2023-11-09T00:00:00.000Z
---

조금 더 일관성 있는 변수 체계를 만들기 위해 정산 수식에서 쓸 수 있는 변수의 명칭이 변경되며,
플랫폼중개수수료액 수식이 추가 지원됩니다.

## 주요 업데이트 사항

### ✔️ 수식 변수 명칭이 변경되었습니다.

- DISCOUNT\_SHARE\_RATE(할인분담률) , PLATFORM\_FEE\_RATE(플랫폼중개수수료률) , ADD\_FEE\_RATE(추가수수료률)
  → **FIXED\_RATE**(정률)

- ADD\_FEE\_AMOUNT(추가수수료액) , PLATFORM\_FEE\_AMOUNT(플랫폼중개수수료액) → **FIXED\_AMOUNT**(정액)

### ✔️ 추가 수수료 수식에서 신규 변수를 지원합니다.

추가 수수료 수식에서는 플랫폼 중개 수수료 수식을 통해 계산된 PLATFORM\_FEE\_AMOUNT(플랫폼중개수수료액)이
추가로 지원됩니다. 이를 통해 추가 수수료를 부여할 때, 결제 혹은 주문 금액 중에서 중개 수수료를 제외한
금액만 추가 수수료를 부여하실 수 있습니다.

## 수식 별 변수 지원 현황

이번 릴리즈를 통해서 각 수식 별로 사용 가능 변수는 아래와 같습니다.

|         영문 변수 명         |   한글 변수 명   | 플랫폼수수료수식 | 할인분담수식 | 추가수수료수식 |
| :---------------------: | :---------: | :------: | :----: | :-----: |
|      ORDER\_AMOUNT      |     주문금액    |     O    |    X   |    O    |
|     PAYMENT\_AMOUNT     |     결제금액    |     O    |    X   |    O    |
|     DISCOUNT\_AMOUNT    |     할인금액    |     O    |    O   |    O    |
|       FIXED\_RATE       |      정률     |     O    |    O   |    O    |
|      FIXED\_AMOUNT      |      정액     |     O    |    X   |    O    |
| DISCOUNT\_SHARE\_AMOUNT |    할인분담금    |     O    |    X   |    O    |
|  PLATFORM\_FEE\_AMOUNT  |  플랫폼중개수수료액  |     X    |    X   |    O    |
|    PLATFORM\_FEE\_VAT   | 플랫폼중개수수료부가세 |     X    |    X   |    O    |


# https://developers.portone.io/release-notes/platform/2023-11-14

---
releasedAt: 2023-11-14T00:00:00.000Z
writtenAt: 2023-11-15T00:00:00.000Z
---

주문 정산 등록 API가 개선되며, 인증 토큰 발급과 관련하여 변경 사항이 있습니다.

## 주요 업데이트 사항

### ✔️ 주문 정산 등록 API가 개선되었습니다.

- **paymentId** 기반으로 파트너당 여러 건의 주문 정산 건을 등록할 수 있게됩니다.
- 추후 정산 아이디(transferId) 기반으로 주문 취소 정산을 등록할 수 있는 API도 개발 예정이며, 곧 안내드리겠습니다.

### ✔️ 주문 정산 삭제 API가 추가되었습니다.

- 정산 아이디(transferId)를 기반하여 정산이 완료되지 않은(상태: 정산 예정, 정산 중) 정산 건을 삭제할 수 있습니다.
- `DELETE /platform/transfers/{$id}` 요청 본문 없이 호출하여 사용하실 수 있습니다.

### ✔️ 인증 토큰 발급 시 일부 사항이 변경되었습니다.

- graphql 중 `loginViaApiKey` mutation이 `loginViaApiSecret` 로 변경됩니다.

- 따라서 rest api 중 `/login/api-key` api는 **deprecate**되고
  [API secret 를 사용한 토큰 발급 api](https://developers.portone.io/api/rest-v2/auth#post%20%2Flogin%2Fapi-secret)가
  추가됩니다.

- `/login/api-key`의 경우, 하위 호환성 보장을 위해 24년 3월까지 사용이 가능하나, 가급적 변경해주시길 바랍니다.


# https://developers.portone.io/release-notes/platform/2023-12-15

---
releasedAt: 2023-12-15T00:00:00.000Z
writtenAt: 2023-12-15T00:00:00.000Z
---

## 주요 업데이트 사항

### **파트너 정산 자동화**✔️ 정산 건을 삭제할 수 있도록 변경

주문 정산 건, 취소 주문 정산 건, 수동 정산 건을 삭제할 수 있습니다. 단, 정산 건의 상태가 정산 예정, 정산 중일 경우에만 삭제가 가능합니다.
주문 정산 건의 경우 동일한 paymentId를 가진 취소 주문 정산 건이 등록되어있는 경우에는 삭제가 불가능합니다.


# https://developers.portone.io/release-notes/platform/2024-05-20

---
releasedAt: 2024-05-20T00:00:00.000Z
writtenAt: 2024-05-20T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 상세 내역 다운로드 API가 추가되었습니다.

- \[상세 내역 조회] 페이지에서 정산 상세 내역을 CSV 파일로 다운로드할 수 있습니다.
- 파일 다운로드 후 상세 내역을 확인하고 정산 명세서를 손쉽게 정리해보세요.

(관련 이미지 첨부)

### ✔️ 예금주 조회 API 응답 본문이 변경되었습니다.

- 예금주 조회 API 요청 후 정상 인증 완료 시 응답 본문에 `accountVerificationId`가 추가되었습니다.

### ✔️ 파트너 관리 API 요청/응답 본문이 일부 변경되었습니다.

- 파트너 생성/다건 생성/수정 API 요청 시 파트너 유형이 비사업자 (원천징수납세자)인 경우,
  생년월일을 선택적으로 등록할 수 있습니다.
  - 생년월일을 입력할 경우, 8자리로 입력 가능합니다. ex. (YYYYMMDD/YYYY-MM-DD)로 입력 가능

- 파트너 조회/다건 조회/생성/다건 생성/수정/보관/복원 API 응답 시 파트너 사업자 상태 필드(`businessStatus`)가
  추가되었습니다. 사업자등록번호(`businessRegistrationNumber`)가 변경되거나 기입하여 생성한 경우에 사업자
  상태가 업데이트 됩니다.

- 파트너 생성/수정 API 요청 시 예금주 계좌조회에 실패하더라도 파트너를 등록할 수 있습니다. 계좌조회가
  어려운 경우 고객사가 직접 계좌 정보를 입력할 수 있습니다.
  - 예금주 조회에서 발급받은 `accountVerificationId`를 사용하여 추가적인 계좌 인증을 생략할 수 있습니다.


# https://developers.portone.io/release-notes/platform/2024-05-29

---
releasedAt: 2024-05-29T00:00:00.000Z
writtenAt: 2024-05-29T00:00:00.000Z
---

안녕하세요. 포트원 파트너정산 팀입니다.

송금대행 서비스가 출시되어 상세 이용 방법 안내 드립니다.

송금대행 서비스 이용을 원하시는 경우, 전용 가상계좌 부여를 위해 포트원 고객센터에 문의를 남겨주시기 바랍니다.

## 주요 업데이트 사항

### ✔️ 송금대행 서비스가 출시되었습니다!

(이미지 첨부: \[송금대행 일괄지급] 예시 화면)

전용 가상계좌에 정산금을 충전하면 실시간으로 잔액을 조회할 수 있으며,
계산된 정산금을 한 번의 버튼 클릭으로 대량 지급할 수 있습니다.
지급 결과는 실시간으로 조회 가능하며, 성공/실패 금액 및 실패 사유 또한 확인할 수 있습니다.

### ✔️ 새로운 정산 처리 구조 소개

(이미지 첨부: 변경된 정산 처리 구조 흐름)

- 주문정산/수기 정산을 기반으로 정산 API를 생성할 경우, 미리 설정한 계약 / 정산 주기 조건 등에 따라서
  정산일을 기준으로 정산 내역을 생성합니다.

- 정산내역 중 지급할 내역을 선택한 뒤 일괄지급을 실행하면 전자서명 후 실제 송금이 이루어집니다.
  이를 통해 정산금 계산부터 일괄지급까지 전 영역을 자동화할 수 있습니다.

### ✔️ 용어

- 정산 상세 내역 : 주문, 수기(수동) 정산 내역을 의미합니다.
  **\[정산 상세내역 조회]** 페이지에서 정산 API를 호출한 모든 내역을 건 별로 조회할 수 있습니다.

- 정산 내역 : 파트너, 계약, 정산 유형, 정산일을 기준으로 정산금을 계산하여 집계한 내역입니다.
  **\[정산 내역 관리]** 페이지에서 모든 정산 건을 조회할 수 있으며, 정산일이 생성된 경우 과거 데이터와
  미래 데이터 모두 조회할 수 있습니다.

- 지급 내역 : 여러 정산 건을 파트너 단위로 묶어서 지급하기 위한 내역입니다.
  지급 내역은 파트너 아이디를 기반으로 집계됩니다. **\[지급 내역 관리]** 페이지에서 모든 지급 건의 목록을 조회할 수 있습니다.

- 일괄 지급(구: 대량이체) : 일괄 지급 현황을 관리하는 관리 단위로, 정산 내역을 기반으로 파트너에게
  지급할 복수의 정산 건을 선택할 때 생성됩니다. \[일괄지급 내역 관리] 페이지에서 모든 일괄 지급 건을 조회할 수 있습니다.

### ✔️ 가상계좌

(이미지 첨부: 가상계좌 할당 예시 화면)

- 송금 대행 기능 이용을 원하시는 고객사에 한해 고객사별 전용 가상계좌를 할당해 드립니다.
  송금대행 서비스 이용을 원하시는 경우 전용 가상계좌 부여를 위해 파트너스 슬랙 혹은 채널톡 고객센터를
  통해 연락해 주시기를 바랍니다.

- 언제든지 자유롭게 입금이 가능하며, 잔액 조회 버튼을 클릭하면 현재의 잔액을 즉시 확인할 수 있습니다.
  가상계좌 즉시 출금 기능은 6월 중 개발 예정이며 해당 기능이 출시되기 전까지 출금을 원하시는 경우
  포트원 개발팀으로 문의 주시면 즉시 출금 처리를 도와드리겠습니다.

### ✔️ 정산 내역 관리

(이미지 첨부: \[정산 내역 관리] 예시 화면)

- 정산 관리 내역은 1시간마다 배치를 통해 동기화됩니다. 등록한 정산 상세 내역 중 \[정산일]이 도래한
  정산 건은 자동 취합되며, 정산 내역 관리 페이지에서 조회할 수 있습니다.

- 이미 생성된 정산 내역이 있더라도 API 혹은 콘솔의 수기 정산 기능으로 해당 정산일에 추가 정산 내역을
  등록하면, 정산 금액은 합산됩니다.

- 다만 기존의 정산 건이 지급실패/지급보류 상태로 변경된 경우, 추가 정산 내역을 등록하더라도 정산
  금액은 합산되지 않고 새로운 정산 건이 별도로 생성됩니다.

### ✔️ 송금대행 일괄지급

**요약**

- \[대량 이체] 기능은 \[일괄 지급] 기능으로 변경되었습니다. \[일괄 지급] 시,
  원하는 정산 건을 선택하여 파트너 단위의 지급 내역을 생성할 수 있습니다.

**이용 가이드**

- \[정산 내역 관리]에서 일괄지급을 희망하는 \[정산일]을 선택합니다. 최대 10개의 정산일 선택할 수 있습니다.

- \[송금대행 일괄지급] 버튼을 클릭하면 \[송금대행 일괄지급 선택] 페이지에 진입하여 지급할 정산 내역을
  자유롭게 선택할 수 있습니다.

  (이미지 첨부: \[송금대행 일괄지급 선택] 예시 화면)

- 선택한 정산 내역을 기반으로 \[선택 완료] 버튼 클릭 시 \[송금대행 일괄지급 실행] 페이지로 이동되며,
  자동으로 \[지급 내역]이 생성됩니다.

  - 통장 메모 관리
    - 보내는 이 통장메모, 받는 이 통장메모를 건별로, 대량으로 기입할 수 있습니다.

    - 받는 이 통장 메모는 입금 계좌에 적요로 사용되며 “OO사 1월 정산금 지급”과 파트너가 이해할 수 있는
      적절한 설명을 기입해주시기 바랍니다.

    - 보내는 이 통장 메모의 경우 내부적인 관리 용도로 사용 가능합니다.

  - 지급 금액 확인
    - \[총 지급 금액과 가상계좌 잔액을 확인했습니다] 를 체크하고 지급을 실행합니다.
    - 충전 금액이 부족할 경우, 일괄지급을 실행할 수 없습니다.
    - 충전금액의 잔액은 실시간으로 반영됩니다.

  (이미지 첨부: \[송금대행 일괄지급 실행] 예시 화면)

- 공인인증서 인증을 완료하면 송금대행 일괄지급이 실행됩니다.

  - 총액과 건수를 확인한 뒤, 공인인증서 비밀번호를 입력합니다.

  - 법인용 공인인증서에 저장되어 있는 사업자등록번호를 기반으로 인증이 완료되면, 송금대행 일괄지급이 시작됩니다.

  - 특이사항: 전자서명 검증을 위해서는 사업자번호가 등록된 상태여야 합니다.
    회원 가입 단계에서 사업자번호 등록이 누락된 경우,  관리자콘솔 메뉴의 \[상점·계정 관리] → \[사업자 정보]를 확인해주시고,
    \[채널톡 아이콘] 을 통해서 포트원 고객 센터로 문의해주세요.

  (이미지 첨부: 공인인증서 예시 화면)

### ✔️ 일괄지급 내역 관리

(이미지 첨부: \[일괄지급 내역 관리] 예시 화면)

- \[일괄지급 내역 관리]에서 일괄 지급 현황을 실시간으로 확인할 수 있습니다.
  지급 오류를 방지하기 위해 지급은 시스템에서 차례로 진행되며, 2개 이상의 일괄지급을 동시에 진행할 수 없습니다.

- 정보 오기입 등의 사유로 송금대행 일괄 지급 중단이 필요하신 경우 \[중단] 버튼을 이용하여 즉시 지급을
  중단할 수 있습니다. 지급중단 처리는 준비완료, 진행 중 상태일 때 가능합니다

### ✔️ 지급 내역 관리

(이미지 첨부: \[지급 내역 관리] 예시 화면)

- 지급 내역 페이지에서 진행 중인 지급 현황을 확인할 수 있습니다.

- 지급이 실패한 경우, 실패 사유를 확인할 수 있습니다. 지급 실패 건에 대해 지급을 재시도하고자 하는 경우,
  \[정산내역관리] 페이지에서 ‘지급실패’ 상태 탭에서 해당 지급 건을 확인한 뒤 새롭게 일괄지급을 실행할 수 있습니다.

## 기타 개선 사항

### ✔️ 파트너 검색 / 계약 검색 기능 추가

(이미지 첨부: 검색 예시 화면)

- 파트너 및 계약 검색 기능이 추가되었습니다. 더 쉽고 정확하게 내역 검색이 가능합니다.
  - 파트너 검색 : 파트너 이름, 파트너 아이디, 파트너 연락처, 사업자등록번호
  - 계약 검색 : 계약 이름, 계약 아이디, 계약 메모

### ✔️ Notes

- 테스트모드로 일괄 지급을 실행하는 경우 실제 송금은 진행되지 않고, 전체 내역이 성공 처리됩니다.

- 원화(KRW)를 제외한 외국 통화에 대해서는 아래의 통화만 지원됩니다. 이외의 통화 지원은 추후 검토 예정입니다.
  - 정산 API 지원 통화 : KRW, USD, JPY, EUR, CNY , TWD, AUD, THB, HKD

- 원화(KRW)를 제외한 모든 외국 통화에 대해서는 현재 일괄 지급을 지원하지 않습니다.

- 기존 “직접 지급”(수기 상태 관리)형태의 일괄 지급은 현재 지원되지 않고 있으며 3분기 지원 예정입니다.

- 예치금 반환 기능은 현재 제공되지 않으며 영업 시간 내 파트너스 슬랙 채널 혹은 채널톡 고객센터로 요청 시
  즉시 반환해 드립니다. 예치금 반환은 기능은 6월 중 제공 예정입니다.


# https://developers.portone.io/release-notes/platform/2024-06-05

---
releasedAt: 2024-06-05T00:00:00.000Z
writtenAt: 2024-06-05T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 파트너 관리 기능 업데이트

(관련 이미지 첨부)

- 과세 유형 등록 기능 업데이트
  - 파트너가 사업자인 경우, 과세 유형을 등록하고 수정할 수 있습니다.
  - 일반 과세 사업자, 간이 과세 사업자 - 세금계산서 발행 유형, 간이 과세 사업자 - 세금계산서 미발행 유형, 면세 사업자를 구분하여 저장할 수 있습니다.
  - 등록한 과세 유형은 파트너 관리 테이블에서 확인할 수 있습니다.

- 파트너 관리 테이블 업데이트
  - 파트너별 과세 유형을 파트너 관리 테이블에서 확인할 수 있습니다.

- 담당자 연락처 선택값으로 변경
  - 파트너 등록/수정 시 필수적으로 입력해야했던 담당자 정보 (휴대폰 번호)를 선택값으로 변경하였습니다.
  - 파트너의 휴대폰 번호가 없을 경우, 공란으로 등록/수정할 수 있습니다.

### ✔️ API 업데이트

- 파트너 생성/조회/수정 API
  - 사업자 유형에 과세 유형(`taxationType`)이 추가되었습니다.

- 파트너 생성 API
  - 담당자 정보의 휴대폰 번호(`phoneNumber`)가 선택 값으로 변경되었습니다.


# https://developers.portone.io/release-notes/platform/2024-07-05

---
releasedAt: 2024-07-05T00:00:00.000Z
writtenAt: 2024-07-05T00:00:00.000Z
---

안녕하세요. 파트너 정산 자동화팀입니다.

24년 07월 05일, 서비스 개선 사항 안내드립니다.

보안 강화 및 데이터 보호를 위한 사용자 권한별 사용 기능이 신설되었으며

정산내역관리 페이지에서 파트너 과세 유형을 확인하고 엑셀 다운로드할 수 있습니다.

## 주요 업데이트 사항

### ✔️ 권한별 기능 제한 안내

(관련 이미지 첨부)

- 안전한 정산 데이터 관리를 위한 역할별 권한 관리 체계 신설

- Owner 혹은 Admin 계정에 한해 데이터 편집 권한이 부여, 그 외의 계정은 데이터 조회 권한 부여

- 사용자 별 권한 부여 및 수정은 \[상점계정관리 페이지> 관리자권한 관리 탭] 에서 Owner 혹은 Admin 계정이 직접 관리 가능

- 상세 내용은 아래 표 참조

  | 권한 / 역할  | Owner | Admin | Dev | Manager | Read Only | Read Only (엑셀 다운로드 불가) | API Secret |
  | -------- | ----- | ----- | --- | ------- | --------- | ---------------------- | ---------- |
  | 정산 관리 정책 | 조회/편집 | 조회/편집 | 조회  | 조회      | 조회        | 조회                     | 조회/편집      |
  | 파트너 관리   | 조회/편집 | 조회/편집 | 조회  | 조회      | 조회        | 조회                     | 조회/편집      |
  | 정산 상세 조회 | 조회/편집 | 조회/편집 | 조회  | 조회      | 조회        | 조회                     | 조회/편집      |
  | 정산 내역 관리 | 조회/편집 | 조회/편집 | 조회  | 조회      | 조회        | 조회                     | 조회/편집      |
  | 지급 내역 관리 | 조회/편집 | 조회/편집 | 조회  | 조회      | 조회        | 조회                     | 조회         |
  | 일괄 지급 관리 | 조회/편집 | 조회/편집 | 조회  | 조회      | 조회        | 조회                     | 조회         |
  | 내역 다운로드  | 가능    | 가능    | 가능  | 가능      | 가능        | 불가능                    | 가능         |

## 개선 사항

### ✔️ 파트너 업데이트 API - 과세 유형 기본값 적용

- 파트너 수정 API에서 파트너의 사업 유형 변경 시(비사업자 → 사업자)에 과세 유형이 필수값에서 선택값으로 변경
- 에러 유형이 더욱 상세하게 반환되도록 수정

### ✔️ 정산 내역 관리 - 엑셀 다운로드 시 파트너 과세 유형 지원

(관련 이미지 첨부)

- 정산 내역 관리에서 엑셀 다운로드 시 과세 유형 확인 가능


# https://developers.portone.io/release-notes/platform/2024-07-11

---
releasedAt: 2024-07-11T00:00:00.000Z
writtenAt: 2024-07-11T00:00:00.000Z
---

안녕하세요. 파트너 정산 자동화팀입니다.

24년 07월 11일, 서비스 개선 사항 안내드립니다.

가상계좌의 잔액에 대한 출금을 지원하며, 파트너 관리에 원천징수 비대상자 유형이 추가되었습니다.

또한, 지급 금액을 기준으로한 원천징수 세액 계산 기능이 출시되었으니 많은 이용 부탁드립니다.

## 주요 업데이트 사항

### ✔️ 가상계좌 잔액 출금 기능

(이미지 첨부: 정산 내역 관리 > 내 가상계좌 잔액)

정산 금액을 지급하기 위해 예치한 금액을 임의의 계좌로 출금하는 기능이 출시되었습니다.
파트너정산 > 정산 내역 관리 페이지 > 내 가상계좌 잔액의 \[출금] 버튼을 클릭할 경우 가상계좌 출금 페이지로 이동합니다.

(이미지 첨부: 가상계좌 출금)

해당 페이지에서 계좌 정보와 출금 액수를 기재 후 전자서명을 완료하면 해당 계좌로 입력 잔액이 출금됩니다.
해당 기능은 \[관리자] 권한을 가진 사용자만 이용할 수 있습니다.

### ✔️ 파트너 관리 - 원천징수 비대상자, 소득 유형 추가

(이미지 첨부: 파트너관리 > 파트너 등록)

세무 처리를 고려하여 정산금을 계산할 수 있도록 파트너 유형이 확장되었으며, 원천징수 대상자와 원천징수 비대상자를 구분하여 등록할 수 있습니다.

\[원천징수 대상자] 탭에 소득 유형을 추가하였고, 원하는 경우 \[정산 정책 관리 > 정산 규칙 관리 페이지]에서
정산금에서 원천징수 세액을 자동으로 차감하도록 설정할 수 있습니다.
다만 \[원천징수 비대상자]는 원천징수세액 관련 설정을 완료하더라도 원천징수 세액이 차감되지 않습니다.

### ✔️ 지급 금액에서 원천징수세액 제외 지원

(이미지 첨부: 정산 정책 관리 > 정산 규칙 관리 > 원천징수세액 정산금 차감 기준 설정)

정산 정책 관리 페이지의 정산 규칙 관리 탭에서 원천징수세액 정산금 차감 기준을 설정할 수 있습니다.

파트너 유형이 원천징수 대상자인 경우, 지급 금액에서 자동으로 \[원천징수세액]를 제외한 후 지급할 수 있습니다.
기존에는 \[추가수수료] 기능을 통해 원천세에 대한 기능을 우회 처리할 수 있었으나, 더욱 간편하게 설정할 수 있도록 세부 설정 기능을 제공하게 되었습니다.

\[지급금액에 원천징수세액 제외] 옵션을 선택하면, 세액을 자동 차감한 뒤 최종 정산금을 계산하도록 설정할 수 있고,
\[지급금액에 원천징수세액 포함]을 선택하여 기존의 계산 방식대로 원천세를 포함하여 지급 후 파트너가 별도로 신고할 수 있도록 설정도 가능합니다.

(이미지 첨부: 정산 내역 관리 > 일괄 지급 실행)

\[지급금액에 원천징수세액 제외]가 설정되어 있는 경우, 일괄 지급 실행 시 해당 금액 만큼 계산되어 차감하여 지금액이 확정됩니다.

(이미지 첨부: 지급 내역 관리)

지급이 완료된 경우 계산된 원천징수세액을 지급 내역에서도 내용을 확인할 수 있습니다.

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-07-30

---
releasedAt: 2024-07-30T00:00:00.000Z
writtenAt: 2024-07-30T00:00:00.000Z
---

안녕하세요. 파트너 정산 자동화팀입니다.

24년 07월 30일, 서비스 개선 사항 안내드립니다.

파트너와 정산내역에 관한 사용자 정의 속성을 등록/ 관리할 수 있는 기능이 출시되었습니다.

## 주요 업데이트 사항

### ✔️ 파트너 사용자 정의 속성

(이미지 첨부: 파트너 관리 > 파트너 사용자 정의 속성)

- 파트너 관리 페이지에서 파트너 사용자 정의 속성을 등록할 수 있으며 최대 10개까지 추가 가능합니다.
- 속성 이름은 등록 후에도 수정 가능합니다.
- 보안에 민감한 정보도 관리할 수 있도록 각각의 속성 값의 조회 권한을 설정할 수 있습니다.
- 등록된 값은 \[파트너 관리] 페이지와 \[정산 상세 조회] 페이지에서 확인 가능합니다.

(이미지 첨부: 파트너 관리 > 파트너 정보 수정)

- 파트너 정보 등록 / 파트너 정보 수정 시 속성 값을 지정할 수 있습니다.

### ✔️ 정산 사용자 정의 속성

(이미지 첨부: 정산 상세 조회 > 정산 사용자 정의 속성)

- 정산 상세 조회 페이지에서 정산 사용자 정의 속성을 등록할 수 있으며 최대 10개까지 추가 가능합니다.
- 속성 이름은 등록 후에도 수정 가능합니다.
- 보안에 민감한 정보도 관리할 수 있도록 각 속성 값의 조회 권한을 설정할 수 있습니다.

(이미지 첨부: 정산 상세 조회)

- 파트너 사용자 정의 속성값과 정산 사용자 정의 속성 값은 \[정산 상세 조회] 페이지에서 확인할 수 있습니다.
- 관리자만 조회 가능할 수 있는 속성 칼럼은 비관리자가 조회 시 노출되지 않습니다.

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-08-07

---
releasedAt: 2024-08-07T00:00:00.000Z
writtenAt: 2024-08-07T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 8월 7일, 서비스 업데이트 사항 안내드립니다.

지급 및 정산 내역의 다건 조회를 위한 API가 추가되었습니다.

## 주요 업데이트 사항

### ✔️ 지급/정산 내역 조회 API 지원

(이미지 첨부: 정산 내역 관련 API > 정산 내역 다건 조회)

- 정산내역 다건 조회 API가 추가되었습니다.

(이미지 첨부: 지급 내역 관련 API > 지급 내역 다건 조회)

- 지급 내역 다건 조회 API가 추가되었습니다.

(이미지 첨부: 일괄 지급 내역 관련 API > 일괄 지급 내역 다건 조회)

- 일괄 지급 내역 다건 조회 API가 추가되었습니다.

### ✔️ 수기 정산 건 임의 정산일 지원

- 임의의 정산일을 지정해 수기 정산건을 등록할 수 있도록 변경되었습니다.
- 모든 정산일을 지원함에 따라 PlatformUnavailableSettlementDateError 에러가 삭제되었습니다.

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-08-22

---
releasedAt: 2024-08-22T00:00:00.000Z
writtenAt: 2024-08-22T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 8월 22일, 서비스 업데이트 사항 안내드립니다.

정산 상세 API 중 주문 정산 등록 시 할인 금액 중 면세 금액(이하. 면세 할인 금액)을 지원합니다.

- 주문 정산, 주문 취소 정산 시 면세 할인 금액을 지정하여 정확한 주문 금액 중 면세금액과 결제 금액 중 면세금액을 지원합니다.
- 해당 주문 면세 금액과 결제 면세 금액, 할인 면세 금액에 대해서 정산 금액 결과에 반영되며 현재는 API 상에서 확인 가능합니다.

더불어 이체 내역 다건 조회 API가 추가되었습니다. 가상 계좌 내 충전, 파트너 정산 송금, 송금 이체 내역들을 조회할 수 있습니다.

## 주요 업데이트 사항

### ✔️ 면세 할인 금액 지원

주문 정산건과 주문 취소 정산건 생성 시 `discounts`에 면세 할인 금액(`taxFreeAmount`)을 지정하여 면세 주문 금액에서 면세 할인 금액을 차감하고, 면세 할인 분담 금액을 계산하실 수 있습니다.

현재는 콘솔에서 할인 면세 금액과 관련된 필드를 확인하실 수 없고 API를 통해서만 확인하실 수 있습니다. 추후 콘솔에서도 확인하실 수 있도록 업데이트될 예정입니다.

#### API 변경사항

**주문 정산건 생성 요청**

- **`discounts`:[\[CreatePlatformOrderTransferBodyDiscount\[\]\]](/api/rest-v2/type-def#CreatePlatformOrderTransferBodyDiscount)** 할인 정보에 면세 할인 금액 필드가 추가되었습니다.
  - **`taxFreeAmount?: integer`** 면세 할인 금액

**주문 취소 정산건 생성 요청**

- **`discounts`:[\[CreatePlatformOrderCancelTransferBodyDiscount\[\]\]](/api/rest-v2/type-def#CreatePlatformOrderCancelTransferBodyDiscount)** 할인 정보에 면세 할인 금액 필드가 추가되었습니다.
  - **`taxFreeAmount?: integer`** 면세 할인 금액

**주문 정산건 생성, 주문 취소 정산건 생성 응답**

- **`amount`:[\[PlatformOrderSettlementAmount\]](/api/rest-v2/type-def#PlatformOrderSettlementAmount)** 정산 금액 정보에 필드가 추가되었습니다.
  - **`paymentTaxFree: integer`** 결제 면세 금액
    - 기존 `taxFree`를 대체하는 필드입니다. `taxFree`를 사용하고 계셨다면 `paymentTaxFree`를 대신 사용해 주세요

  - **`paymentSupply: integer`** 결제 공급가액
    - 기존 `supply`를 대체하는 필드입니다. `supply`를 사용하고 계셨다면 `paymentSupply`를 대신 사용해 주세요

  - **`orderTaxFree: integer`** 면세 주문 금액

  - **`discountTaxFree: integer`** 면세 할인 금액

  - **`discountShareTaxFree: integer`** 면세 할인 분담 금액

- **`discounts`:[\[PlatformOrderTransferDiscount\[\]\]](/api/rest-v2/type-def#PlatformOrderTransferDiscount)** 정산 금액 계산 시 사용된 할인 정보에 필드가 추가되었습니다.
  - **`taxFreeAmount: integer`** 면세 할인 금액
  - **`shareTaxFreeAmount: integer`** 면세 할인 분담 금액

**정산 상세 내역 다운로드 필드 추가**

- **`fields?`:[\[PlatformTransferSheetField\[\]\]](/api/rest-v2/type-def#PlatformTransferSheetField)** 다운로드 할 시트 필드가 추가되었습니다.
  - **`SETTLEMENT_PAYMENT_SUPPLY_AMOUNT`**: 결제 공급가액
    - 기존 `SETTLEMENT_SUPPLY_AMOUNT`를 대체하는 필드입니다. `SETTLEMENT_SUPPLY_AMOUNT`를 사용하고 계셨다면 `SETTLEMENT_PAYMENT_SUPPLY_AMOUNT`를 대신 사용해 주세요

  - **`SETTLEMENT_PAYMENT_TAX_FREE_AMOUNT`**: 결제 면세 금액
    - 기존 `SETTLEMENT_TAX_FREE_AMOUNT`를 대체하는 필드입니다. `SETTLEMENT_TAX_FREE_AMOUNT`를 사용하고 계셨다면 `SETTLEMENT_PAYMENT_TAX_FREE_AMOUNT`를 대신 사용해 주세요

  - **`SETTLEMENT_ORDER_TAX_FREE_AMOUNT`**: 면세 주문 금액

  - **`SETTLEMENT_DISCOUNT_TAX_FREE_AMOUNT`**: 면세 할인 금액

  - **`SETTLEMENT_DISCOUNT_SHARE_TAX_FREE_AMOUNT`**: 면세 할인 분담 금액

**주문 정산건 생성 응답 에러 타입 추가 & 변경**

- 에러 타입 추가
  - **PlatformSettlementAmountExceededError**: 정산 가능한 금액을 초과한 경우 에러 타입이 추가되었습니다.
    - **`type: AmountExceededType`** 필드로 요청받은 금액과 초과한 금액의 타입을 알 수 있습니다.
      - **`DISCOUNT_THAN_ORDER`**: 할인금액이 주문금액을 초과
      - **`DISCOUNT_TAX_FREE_THAN_DISCOUNT`**: 면세 할인금액이 할인금액을 초과
      - **`DISCOUNT_TAX_FREE_THAN_ORDER_TAX_FREE`**: 면세 할인금액이 면세 주문금액을 초과
      - **`PAYMENT_TAX_FREE_THAN_PAYMENT`**: 면세 결제금액이 결제금액을 초과

- 에러 타입 변경
  - **PlatformDiscountExceededOrderAmountError**: 할인 금액이 주문 금액을 초과한 경우
  - **PlatformTaxFreeAmountOverFlowError**: 결제 면세 금액이 결제금액을 초과한 경우
  - 위의 두 에러 타입이 제거되고 **PlatformSettlementAmountExceededError** 타입으로 통합되었습니다.

**주문 취소 정산건 생성 응답 에러 타입 추가 & 변경**

- 에러 타입 추가
  - **PlatformSettlementAmountExceededError**: 정산 가능한 금액을 초과한 경우 에러 타입이 추가되었습니다.
    - **`type: AmountExceededType`** 필드로 요청받은 금액과 초과한 금액의 타입을 알 수 있습니다.
      - **`DISCOUNT_THAN_ORDER`**: 할인금액이 주문금액을 초과
      - **`DISCOUNT_TAX_FREE_THAN_DISCOUNT`**: 면세 할인금액이 할인금액을 초과
      - **`DISCOUNT_TAX_FREE_THAN_ORDER_TAX_FREE`**: 면세 할인금액이 면세 주문금액을 초과
      - **`PAYMENT_TAX_FREE_THAN_PAYMENT`**: 면세 결제금액이 결제금액을 초과

- 에러 타입 변경
  - **PlatformDiscountCancelExceededOrderCancelAmountError**: 취소 할인 금액이 취소 주문 금액을 초과한 경우
  - **PlatformTaxFreeAmountOverFlowError**: 결제 면세 금액이 결제금액을 초과한 경우
  - 위의 두 에러 타입이 제거되고 **PlatformSettlementAmountExceededError** 타입으로 통합되었습니다.

### ✔️ 이체 내역 조회 지원

(이미지 첨부: 이체 내역 다건 조회 API)

- 이체 내역 다건 조회 기능이 추가되었습니다. 가상 계좌 내 충전, 파트너 정산 송금, 송금 이체 내역들을 조회할 수 있습니다.

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-10-21

---
releasedAt: 2024-10-21T00:00:00.000Z
writtenAt: 2024-10-21T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 10월 21일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 그간 고객사에서 특히 요청이 많았던 기능들을 추가 제공합니다.

1. **송금대행 일괄지급 예약 기능을 지원합니다.**
2. **수기정산 일괄등록 기능을 지원합니다.**

## 주요 업데이트 사항

### ✔️ 송금대행 일괄지급 예약 기능

(이미지 첨부: 송금대행 일괄지급 실행)

- 송금대행 일괄지급은 기존에 **즉시 지급**만 가능하였으나, 이번 업데이트로 즉시 지급과 **예약 지급을 선택**하여 지급을 실행할 수 있습니다. 내부 정책에 맞게 지급 일시를 유연하게 관리해보세요!

### ✔️ 송금대행 일괄지급 예약 내역 관리 기능

(이미지 첨부: 정산 내역 관리)

- **예약내역을 확인**할 수 있습니다.
- 일괄지급 **예약시간**은 실제 실행 전까지 자유로이 **변경하거나 취소**할 수 있습니다.

### ✔️ 수기정산 내역 일괄 등록 기능

(이미지 첨부: 수기 정산 일괄 등록)

- 수기정산 내역 일괄 등록 기능이 출시되었습니다.
- 포트원이 제공하는 양식을 다운로드하여 데이터를 업로드하면 **자동으로 콘솔에 반영**됩니다.

### API 변경사항

#### ✔️ 일괄 지급 내역 다건 조회

일괄 지급 내역 다건 조회 응답값이 수정되었습니다.

- **`items`: [PlatformBulkPayout\[\]](/api/rest-v2/type-def#PlatformBulkPayout)** 일괄 지급 내역에 필드가 추가되었습니다.
  - **`scheduledAt?: string`** 일괄지급 예정일시
  - **`status`: [PlatformBulkPayoutStatus](/api/rest-v2/type-def#PlatformBulkPayoutStatus)** 일괄지급 상태에 `SCHEDULED` (예약됨) 상태가 추가되었습니다.

- **`counts`: [PlatformBulkPayoutStatusStats](/api/rest-v2/type-def#PlatformBulkPayoutStatusStats)** 일괄지급 상태별 통계에 `scheduled`상태인 일괄지급 건 수가 추가되었습니다.
  - **`scheduled: integer`** 예약된 일괄지급 건 수

#### ✔️ 지급 내역 다건 조회

지급 내역 다건 조회 응답값이 수정되었습니다.

- **`items`: [PlatformPayout\[\]](/api/rest-v2/type-def#PlatformPayout)** 지급 내역에 필드가 추가되었습니다.
  - **`scheduledAt?: string`** 지급 예정일시
  - **`status`: [PlatformPayoutStatus](/api/rest-v2/type-def#PlatformPayoutStatus)** 지급 상태에 `SCHEDULED` (예약됨) 상태가 추가되었습니다.

- **`counts`: [PlatformPayoutStatusStats](/api/rest-v2/type-def#PlatformPayoutStatusStats)** 지급 상태별 통계에 `scheduled` 상태인 지급 건 수가 추가되었습니다.
  - **`scheduled: integer`** 예약된 지급 건 수

#### ✔️ 정산 내역 다건 조회

정산 내역 다건 조회 응답값이 수정되었습니다.

- **`items`: [PlatformPartnerSettlement\[\]](/api/rest-v2/type-def#PlatformPartnerSettlement)** 정산 내역에 필드가 추가되었습니다.
  - **`status`: [PlatformPartnerSettlementStatus](/api/rest-v2/type-def#PlatformPartnerSettlementStatus)** 정산 상태에 `PAYOUT_SCHEDULED` (지급 예약) 상태가 추가되었습니다.

- **`counts`: [PlatformPartnerSettlementStatusStats](/api/rest-v2/type-def#PlatformPartnerSettlementStatusStats)** 정산 상태별 통계에 payoutScheduled 상태인 정산 내역 건 수가 추가되었습니다.
  - **`payoutScheduled: integer`** 지급 예약된 정산 내역 건 수

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-11-07

---
releasedAt: 2024-11-07T00:00:00.000Z
writtenAt: 2024-11-07T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 11월 7일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 파트너 등록 기능과 유효성 검증 기능을 고도화했습니다.

1. 파트너 일괄 등록을 지원합니다.
2. 휴폐업 상태, 예금주 검증 상태를 파트너 관리 테이블에서 조회할 수 있습니다.

## 주요 업데이트 사항

## ✔️ 파트너 일괄 등록 기능

(이미지 첨부: 파트너 일괄 등록)

- **\[파트너 관리] 페이지에서 파트너 정보를 대량으로 등록하는 기능**이 신설되었습니다.
- 포트원이 제공하는 **CSV 양식을 다운로드**하여 데이터를 업로드하면 **자동으로 콘솔**에 반영됩니다.
- 파트너 일괄 등록 시 **일괄 휴폐업 조회, 일괄 예금주 조회를 진행**합니다.
- 예금주 검증 상태에 따라 예금주가 존재하는 경우 **정확한 예금주로 정보를 치환하여 자동 저장할** 수 있습니다.

### ✔️ 파트너 휴폐업 조회 상태, 예금주 검증 상태 조회

(이미지 첨부: 파트너 관리)

- 파트너가 국세청에 등록된 사업자라면 휴폐업 상태를 \[파트너 관리] 테이블에서 손쉽게 조회할 수 있습니다.
- 계좌번호 정보가 있다면 예금주 검증 상태를 \[파트너 관리] 테이블에서 조회할 수 있습니다.

### ✔️ 휴폐업 조회 상태, 예금주 검증 상태 필터 기능

(이미지 첨부: 파트너 관리)

- \[필터] 기능을 통해 휴폐업 상태와 예금주 검증 상태별 파트너 데이터를 조회할 수 있습니다.

## API 변경사항

## ✔️ 파트너 관리

**계좌 상태 코드 변경**

- 신설 `VERIFY_ERROR` : 계좌 인증 오류
- 제거 `VERIFYING` : 해당 에러는 미사용 코드로 제거되었습니다.
- 제거 `EXPIRED` : 해당 에러는 미사용 코드로 제거되었습니다.

**휴폐업 상태 코드 변경**

- 변경 `VERIFY_FAILED` → `VERIFY_ERROR` : 조회 오류
- 제거 `VERIFYING` : 해당 에러는 미사용 코드로 제거되었습니다.

**파트너 다건 조회 - 필터 조건 추가**

파트너 내역을 검색 및 조회 시에 파트너의 계좌 상태, 사업자 상태를 기반하여 조회가 가능합니다.

- `filter.accountStatus` : 파트너 계좌 상태
- `filter.businessStatuses` : 파트너 사업자 상태

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-11-25

---
releasedAt: 2024-11-25T00:00:00.000Z
writtenAt: 2024-11-25T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 11월 25일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 세금계산서 역발행 신규 기능을 제공합니다.

1. 파트너 다수에게 대량으로 세금계산서 발행 승인 요청을 보낼 수 있어 일일이 작업하는 노고를 줄여 드립니다.
2. 국세청 사이트에 방문하지 않고도 세금계산서 발행 및 수정 세금계산서 작성이 가능합니다.

## 세금계산서 역발행 신규 업데이트 사항

### ✔️ 국세청 연동

- 콘솔 우측 최상단 \[세금계산서 연동관리]에서 공동인증서를 **1회만 연동** 완료하면, 손쉽게 역발행 세금계산서를 작성/관리 할 수 있습니다.

(이미지 첨부: 세금계산서 연동 관리)

### ✔️ 세금계산서 작성

- 세금계산서를 작성 중 **임시저장** 할 수 있습니다.

(이미지 첨부: 세금계산서 작성)

- **국세청에서 제공하는 전자세금계산서 양식**으로 편리하게 사용할 수 있습니다.

(이미지 첨부: 세금계산서 작성)

### ✔️ 세금계산서 일괄 등록

- 포트원에서 제공하는 양식에 맞추어 csv 파일 작성 완료 후 콘솔에 업데이트 하면, **자동으로 데이터가 입력**됩니다.

(이미지 첨부: 세금계산서 일괄 등록)

- 세금계산서의 역발행 **승인 요청 / 발행 / 국세청 전송 상태**를 **간편하게 확인**할 수 있습니다.

(이미지 첨부: 세금계산서 목록)

### ✔️ 파트너 국세청 연동 및 세금계산서 조회/승인/거부

- 공급자는 **이메일에서** 최초 1회 공동인증서를 **연동 완료**한 후, 세금계산서 조회/승인/거부할 수 있습니다.

(이미지 첨부: 전자세금계산서 조회)

### ✔️ 수정 세금계산서 작성

- 세금계산서를 국세청에 전송한 이후에 수정이 필요한 경우, **국세청 홈페이지 방문 없이** 포트원 콘솔에서 수정 세금계산서 작성이 가능합니다.

(이미지 첨부: 수정 세금계산서 작성)

## API 변경사항

### ✔️ 파트너 관련 API

파트너 다건 조회 요청 본문이 수정되었습니다.

- `PlatformPartnerFilterInput` 파트너 필터 입력 정보에 필드가 추가되었습니다.
  - `types` : PlatformPartnerTypeName 파트너 유형 필터가 추가되었습니다.
  - `taxationTypes` : PlatformPartnerTaxationType 파트너 과세 유형 필터가 추가되었습니다.
  - `memberCompanyConnectionStatuses` : PlatformPartnerMemberCompanyConnectionStatus 파트너 연동 사업자 연결 상태 필터가 추가되었습니다.

파트너 관련 API들의 응답 본문이 수정되었습니다.

- `PlatformPartnerTypeBusiness` 파트너 사업자 정보에 필드가 추가되었습니다.
  - `memberCompanyConnectionStatus` :  PlatformPartnerMemberCompanyConnectionStatus 파트너 연동 사업자 연결 상태가 추가되었습니다.
  - `memberCompanyConnectionFailedReason?`: String  연동사업자 연결 실패 사유가 추가되었습니다.

### ✔️ 사업자 조회

- 사업자 조회 API가 추가 되었습니다.

(이미지 첨부: 사업자 조회 API)

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-12-10

---
releasedAt: 2024-12-10T00:00:00.000Z
writtenAt: 2024-12-10T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 12월 10일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 아래 5가지 개선으로 보다 좋은 사용성을 제공합니다.

1. **파트너 엑셀 다운로드** 기능을 지원합니다.
2. **기본 통장메모 일괄 설정**을 제공하여 한 번 설정해두면, 송금대행 일괄지급 시 **반복 기입할 필요가 없습니다.**
3. 기존 1건만 제공되던 **송금대행 일괄지급 예약**을 **10건**까지 제공합니다.
4. 일괄지급 선택 페이지에서 **파트너별 정산 상계 금액 확인**이 가능합니다.
5. 상세 조회 페이지에서 **보다 편리하게** 디자인이 개선되었습니다.

## 주요 업데이트 사항

### ✔️ 파트너 엑셀 다운로드

- \[파트너 관리] 에서 조회한 파트너를 **csv 파일로 다운로드** 할 수 있습니다.

(이미지 첨부: 파트너 관리)

### ✔️ 기본 통장메모 일괄 설정

- \[정산 내역 관리]의 우상단 \[일괄지급 기본 설정]을 클릭하여 **기본 통장메모를 일괄 설정**할 수 있습니다.
- 보내는 이와 받는 이에게 노출되는 통장메모 입력 후 **1회만 저장**하면, 이후 송금대행 일괄지급 실행 시 통장메모가 **자동으로 적용되어 노출**됩니다.

(이미지 첨부: 일괄지급 기본 설정)

### ✔️ 송금대행 일괄지급 예약 10건까지 생성 가능

- 송금대행 일괄지급 예약 시, 기존에는 1건만 예약이 가능했으나 총 10건까지 예약할 수 있도록 개선되었습니다.

(이미지 첨부: 정산 내역 관리)

### ✔️ 파트너별 정산 상계 금액 확인

- \[송금대행 일괄지급 선택] 에서 정산 상계 금액을 **자동계산**해 노출합니다.
- 정산내역이 **파트너별로 정렬되며,** 파트너별 최종 지급예정 금액이 **마이너스인 금액을 빨간색으로 표기**해 정정 대상에 대한 **가시성을 높였습니다.**

(이미지 첨부: 송금대행 일괄지급 선택)

### ✔️ 정산 상세 조회 디자인 업데이트

- \[정산 상세 조회] 에서 **표 설정이 추가**되었습니다.
- **원하는 조건**으로 보다 편하게 정산 상세 내역을 조회할 수 있습니다.

(이미지 첨부: 정산 상세 조회)

- **테이블 가독성을 증대하고, 보다 편리한 필터 사용**이 가능하도록 디자인을 개선하였습니다.

(이미지 첨부: 정산 상세 조회)

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2025-01-16

---
releasedAt: 2025-01-16T00:00:00.000Z
writtenAt: 2025-01-16T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

금번 정기 업데이트 개선사항 공유 드립니다.

이번 업데이트는 소소하지만 확실한 편리함을 드릴 수 있는 개선사항들로 꾸려졌습니다.

1. 역발행 세금계산서 **이메일 재발송**

2. 역발행 세금계산서 **공급자 랜딩 페이지 내 토큰 만료 오류 케이스 추가**
   1. 이메일 재발송 시 기존 이메일 토큰 만료 에러
   2. 기존 세금계산서 토큰 유효기간 만료 에러

3. **정산내역관리/지급내역관리 표 헤더 상단고정**

## ✔️ 역발행 세금계산서 이메일 재발송

- 아래 2가지 발송경로를 통하여 **역발행 세금계산서 이메일 재발송** 기능을 지원합니다.
  - 세금계산서 목록에서 최우측으로 스크롤하여, \[메일 재전송] 버튼을 클릭
  - 세금계산서 목록에서 세금계산서 단건을 클릭하여 세금계산서 조회 페이지 진입 후, 좌측 하단의 \[메일 재전송] 버튼을 클릭

- 메일 재발송을 하면 **기존 페이지의 토큰은 만료**되고, 새로 발송한 메일에 대하여 **신규 토큰이 생성**됩니다. 이에 따라 토큰의 기간도 **이메일 재발송 후, 2달로 갱신**됩니다.

(이미지 첨부: 발송경로 1. 세금계산서 목록에서 최우측으로 스크롤하여, \[메일 재전송] 버튼 클릭)

(이미지 첨부: 발송경로 2. 세금계산서 목록에서 세금계산서 단건을 클릭하여 세금계산서 조회 페이지 진입 후, 좌측 하단의 \[메일 재전송] 버튼 클릭)

## ✔️ 역발행 세금계산서 공급자 랜딩 페이지 내 토큰 만료 오류 케이스 추가

**이메일 재발송 시 기존 이메일 토큰 만료 에러**

- 세금계산서 발행 요청 **이메일을 재발송**할 경우, 기존 이메일 **토큰 만료되어 조회 불가**한 케이스에 대하여 에러 메시지를 노출합니다.

(이미지 첨부: true)

**기존 세금계산서 토큰 유효기간 만료 에러**

- **토큰이 만료(이메일 발송일로부터 2달 경과)된 세금계산서**에 대하여 에러 메시지를 노출합니다.

(이미지 첨부: true)

## ✔️ 정산내역관리/지급내역관리 표 헤더 상단고정

- 정산/지급내역관리의 **표 리스트를 스크롤**하는 경우, **컬럼명을 고정**하여 각 컬럼 항목에 해당하는 데이터를 명확하게 인지할 수 있도록 개선하였습니다.

(이미지 첨부: true)

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2025-02-10

---
releasedAt: 2025-02-10T00:00:00.000Z
writtenAt: 2025-02-10T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

이번 업데이트에서는 **정산정책관리 및 정산금 계산관리 기능**이 더욱 강력해졌습니다.

**다양한 정산 정책과 복잡한 정산 수식**을 보다 쉽게 설정하고 자동화할 수 있도록 기능을 개선했습니다.

## ✔️ 정산정책관리 및 정산금 계산관리 기능 고도화

### 1️⃣ **맞춤형 정산 파라미터 설정**

- 각 플랫폼에서 필요한 정산 입력 값을 **직접 설정**할 수 있도록 지원합니다.
- **사업자 유형, 구매자 유형, 다양한 할인 정책, 수수료, 부가세 정책** 등을 고려한 **맞춤형 설정**이 가능합니다.

### 2️⃣ **사용자 정의 정산 수식 지원**

- 플랫폼의 정책에 맞춰 **사용자 정의 수식** 을 작성할 수 있습니다.

### 3️⃣ **자유로운 계산 순서 조정**

- **여러 개의 정산 수식을 조합**하여 원하는 **순서대로 적용**할 수 있습니다.
- 예를 들어, **할인 금액 차감 후 수수료 적용** 등의 시나리오 설정 가능합니다.

### 4️⃣ 수식별 소수점 및 부가세 처리 기준 제공

- **회계 기준에 맞는** 부가세 및 정산 금액에 대한 **소수부 처리 기준**을 설정하여 **정밀한 정산**이 가능합니다.

(이미지 첨부: true)

### ✅ **이제 정산 자동화, 더 쉽고 유연하게!**

이번 개선을 통해 **정산 정책이 복잡한 플랫폼 비즈니스에서도 자동화가 더욱 쉬워집니다.**

다양한 예외 사항을 고려한 정산 구조를 설정하고, 플랫폼에 맞는 정산 정책을 더욱 유연하게 운영해 보세요!

📢 **업데이트 사용 방법:** \[파트너 정산 자동화] → \[정산 정책 관리] → \[계산 관리]

### 🚧 API 변경사항

이제 [주문 정산건 생성](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#post%20%2Fplatform%2Ftransfers%2Forder)하실 때에 정산 파라미터를 활용하실 수 있습니다.

(이미지 첨부: true)

사용자 정의 함수의 계산 결과와 파라미터에 지정된 값을 응답 메세지에서 확인할 수 있습니다.

> 영향 API : [정산건 조회](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#get%20%2Fplatform%2Ftransfers%2F%7Bid%7D), [주문 정산건 생성](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#post%20%2Fplatform%2Ftransfers%2Forder), [주문 취소 정산건 생성](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#post%20%2Fplatform%2Ftransfers%2Forder-cancel), [정산건 다건 조회](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#get%20%2Fplatform%2Ftransfer-summaries)

- 사용자 정의 함수 :  [PlatformOrderTransfer](https://developers.portone.io/api/rest-v2/type-def?v=v2#PlatformOrderTransfer).amount.**userDefinedFormulas**
- 정산 파라미터 : [PlatformOrderTransfer](https://developers.portone.io/api/rest-v2/type-def?v=v2#PlatformOrderTransfer).**parameters**

더 궁금한 점이 있다면 고객 지원팀에 문의해 주세요! 🚀

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2025-02-13

---
releasedAt: 2025-02-13T00:00:00.000Z
writtenAt: 2025-02-13T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

세금계산서 발행을 위한 **파트너 국세청 연동/연동해제 기능**을 REST API로 지원합니다.

이제 더욱 유연하게 파트너 정보를 국세청 시스템과 연동할 수 있습니다.

## ✔️ 파트너 국세청 연동/연동해제 REST API 제공

- **단건 연동/연동해제 API** 지원
- **다양한 필터링 조건**을 통한 **다건 연동/연동해제 API** 추가

신규 API 스키마는 개발자 센터에서 참조하실 수 있습니다.  \[[개발자센터 바로 가기](https://developers.portone.io/api/rest-v2/platform.partner?v=v2#post%20%2Fplatform%2Fpartners%2Fmember-company-connect%2F%7Bid%7D)]

이제 API를 활용하여 **세금계산서 발행 프로세스를 더욱 간편하게 자동화**하세요! 🚀

(이미지 첨부: true)

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2025-03-04

---
releasedAt: 2025-03-04T00:00:00.000Z
writtenAt: 2025-03-04T00:00:00.000Z
---

안녕하세요, 파트너 정산 자동화팀입니다.

금번 업데이트 사항 공유 드립니다.

## ✅ 주요 업데이트

## ✔️ 1. 수기정산건 등록 시 즉시반영

- **기존:** 정산 완료 상태의 수기 정산건 등록 후 **10분 후** 정산내역 관리에 반영

- **변경:** 정산 완료 상태의 수기 정산건 등록 시 **즉시** 정산내역 관리에 반영
  - 수기 정산건 등록 후, **정산 내역 관리 페이지**에서 수기 정산건에 등록한 정산일이 포함된 기간으로 조회하면 **수기 정산건이 반영된 정산 내역을 즉시 확인 가능**

- **경로:** 정산 상세 조회 > **수기 정산 등록 > 정산 내역 관리 페이지**에서 확인 가능

(이미지 첨부: Step 1. 정산 상세 조회 페이지에서 수기정산건 등록)

(이미지 첨부: Step 2. 수기 정산건 등록 시 정산 내역 관리 목록에서 즉시 확인 가능)

## ✔️ 2. 국세청 미연동 사업자번호 세금계산서 발행 제한

- **기존:** 국세청 연동되지 않은 사업자번호도 세금계산서 **발행 요청 가능** → 공급자가 발행 페이지에서 오류 확인

- **변경:** 국세청 미연동 사업자번호의 세금계산서 **발행 요청이 실패**하도록 개선 → 파트너의 오류 경험을 사전에 방지

- **경로:**
  - 세금계산서 > 세금계산서 작성 > **일괄등록 (단건등록은 기존에도 국세청 미연동자 세금계산서 발행 제한)**
  - 세금계산서 > 세금계산서 목록 > **요청실패**

(이미지 첨부: true)

늘 파트너정산자동화 서비스를 이용해주셔 감사합니다.

자세한 사항은 [업데이트 상세보기](https://developers.portone.io/release-notes) 페이지에서 확인할 수 있습니다.

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/console/2023-04-24

---
releasedAt: 2023-04-24T00:00:00.000Z
writtenAt: 2023-04-27T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 결제내역 조회 시 상태 승인 시각을 기준으로 확인할 수 있습니다

관리자콘솔 `[결제 상세 내역 조회]` 메뉴 - `[기준 시각]`을 `'상태 승인 시각'`으로 선택해 보세요.\
다섯 가지 결제 상태에 따라 가장 최근에 업데이트된 시각을 확인할 수 있습니다.

앞으로는 결제건의 결제 상태와 더불어 마지막 결제 상태가 업데이트된 시각도 함께 볼 수 있습니다.

<div class="hint" data-style="info">

**Tip**: 포트원 관리자콘솔은 결제 상태를 결제완료, 결제예정, 결제실패, 결제취소, 승인대기로 분류하고 있습니다.

</div>

(관련 이미지 첨부)

## 기타 수정사항

### ✔️ 매니저 권한을 부여받은 계정으로 정산 서비스를 이용할 수 있습니다

포트원 관리자콘솔은 계정 권한을 총 다섯 가지로 분류하고 있습니다.

1. **Admin(Owner)**: 모든 기능 접근 가능, 계정 삭제 시 상점 삭제
2. **Admin**: 모든 기능 접근 가능
3. **Dev**: 결제 연동 설정, 결제 내역 조회
4. **Manager**: 결제 내역 조회 및 수정, 리포트 조회, 계정 관리
5. **Read Only**: 결제 내역 조회, 리포트 조회

### ✔️ 결제연동 설정 시, 결제대행사로 다날 또는 KG이니시스를 선택하는 경우에만 본인인증을 선택할 수 있습니다

관리자콘솔 `[결제연동]` 메뉴 - `[테스트/실 연동 관리]` 탭에서 결제대행사 설정 및 추가를 진행할 때
본인인증 서비스를 제공하는 다날과 KG이니시스를 선택하는 경우에만 채널 속성에서 `'본인인증'` 선택이
활성화 됩니다. 이 외 결제대행사 선택 시 `'본인인증'` 선택은 비활성화 됩니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/console/2023-05-08

---
releasedAt: 2023-05-08T00:00:00.000Z
writtenAt: 2023-05-11T00:00:00.000Z
---

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/console/2023-05-22

---
releasedAt: 2023-05-22T00:00:00.000Z
writtenAt: 2023-05-25T00:00:00.000Z
---

(관련 이미지 첨부)

## 주요 업데이트 사항

### ✔️ 페이코 직연동을 이용 중인 경우, 판매자용 매출전표가 표시됩니다

이번 업데이트를 통해 판매자용 매출전표가 표시되도록 수정했습니다.
관리자콘솔 \[결제 상세 내역 조회] - 결제 건 선택 - ‘승인 영수증’을 선택해 확인해보세요.


# https://developers.portone.io/release-notes/console/2023-07-05

---
releasedAt: 2023-07-05T00:00:00.000Z
writtenAt: 2023-07-05T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 전자결제 신청시 포트원 추천 패키지를 선택할 수 있습니다.

수많은 결제수단과 결제대행사 중 어떤 것이 우리 서비스에 알맞을지 고민됐다면, 포트원이 추천하는 결제수단과 결제대행사를 선택해서 전자결제를 신청하세요.

결제 데이터를 기반으로 증명된, 온라인 서비스를 운영 중인 기업이 가장 많이 이용하는 결제수단 네
가지를 제안합니다. 결제수단 선택시 포트원이 추천하는 결제대행사를 즉시 확인할 수 있습니다.

포트원 추천 패키지는 결제수단, 결제대행사 이용 비용, 결제형태와 연동방식을 종합적으로 고려하여
선별했습니다. 특정 결제수단과 결제대행사를 이용을 원한다면 \[전자결제 직접 선택하기]를 통해 자유롭게
골라보세요.

(관련 이미지 첨부)

### ✔️ 전자결제 신청시 결제서비스의 모든 구성을 커스텀할 수 있습니다.

기존에는 결제수단을 선택한 후 다음 페이지에서 결제대행사와 결제형태를 확인할 수 있었기에 전자결제 신청 과정이 번거로웠습니다.

앞으로는 한 페이지에서 결제수단별로 이용 가능한 결제대행사를 확인하고, 결제형태까지 선택해보세요. 선택한 결제서비스는 장바구니에 담겨 즉시 확인하고 수정할 수 있습니다.

결제대행사별로 제공하는 결제수단이 궁금하다면, 우측 상단의 \[모든 결제대행사 보기]를 통해 포트원에서 지원하는 모든 결제대행사와 결제수단, 수수료까지 한 눈에 살펴보세요.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/console/2023-07-07

---
releasedAt: 2023-07-07T00:00:00.000Z
writtenAt: 2023-07-10T00:00:00.000Z
---

## 주요 업데이트 사항

### **PG 거래대사**✔️ 엑심베이의 정산내역을 확인할 수 있습니다

이번 업데이트를 통해 처음으로 해외결제건의 정산내역을 조회할 수 있습니다.
관리자콘솔 \[정산]메뉴 - \[통합 내역 조회]에서 정산내역을 조회할 수 있으며, 엑심베이를 통한 7월 5일 결제건부터 확인할 수 있습니다.\
엑심베이는 결제일로부터 2일 후에 결제일의 정산내역을 수신합니다.
이용에 참고바랍니다.

📍정산통합조회 서비스의 기능이 궁금하다면 [→ 서비스소개 보기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍이용 중인 PG사도 정산내역 조회가 가능한지 궁금하다면
[→ 지원 PG사 확인하기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍정산통합조회 서비스의 이용방법이 궁금하다면 [→ 이용방법 보기](https://guide.portone.io/92af7604-5813-48fa-a186-82e8e7356a3e)

### **PG 거래대사**✔️ 정산 통화별로 정산내역을 조회할 수 있습니다

기존에는 원화로만 정산내역을 조회할 수 있엇지만, 이번 업데이트를 통해 결제통화 및 정산통화별로 정산내역을 조회할 수 있습니다.
또한 \[통합 내역 조회] 메뉴의 조회 기준일이 정산예정일에 맞추어 자동으로 설정됩니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/console/2023-07-17

---
releasedAt: 2023-07-17T00:00:00.000Z
writtenAt: 2023-07-19T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ KG이니시스 승인 영수증에서 신규 매출전표가 표시됩니다

이번 업데이트를 통해 관리자콘솔의 \[결제 내역 상세 조회] 메뉴에서 KG이니시스 결제건 선택시 승인 영수증에서 신규 매출전표가 표시됩니다.

## 기타 수정사항

- 클래식 콘솔에서 결제내역 조회시 모든 PG사를 필터로 추가하여 검색할 수 있습니다


# https://developers.portone.io/release-notes/console/2023-08-23

---
releasedAt: 2023-08-23T00:00:00.000Z
writtenAt: 2023-08-23T00:00:00.000Z
---

## 주요 업데이트 사항

### **PG 거래대사**✔️ KG이니시스의 정산내역을 확인할 수 있습니다.

이번 업데이트를 통해 KG이니시스를 포함한 주요 10개 결제대행사(PG)/간편결제사의 정산 내역을 조회할 수 있습니다.
관리자콘솔 메뉴 \[결제사 정산] - \[통합 내역 조회]에서 정산 내역을 조회할 수 있으며, KG이니시스의 경우 8월 1일 결제건부터 조회가 가능하오니 이용에 참고하시기 바랍니다.

📍 정산 통합 조회 서비스의 기능이 궁금하다면
[→ 서비스 소개 보기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍 이용 중인 결제대행사(PG사)도 정산 내역 조회가 가능한지 궁금하다면
[→ 지원 결제대행사(PG)사 확인하기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍 정산 통합 조회 서비스의 이용 방법이 궁금하다면 [→ 이용 방법 보기](https://guide.portone.io/92af7604-5813-48fa-a186-82e8e7356a3e)


# https://developers.portone.io/release-notes/console/2023-09-12

---
releasedAt: 2023-09-15T00:00:00.000Z
writtenAt: 2023-09-15T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 전자결제 신청하기 페이지 리뉴얼

이번 업데이트를 통해 전자결제 신청 후 계약 진행 상황을 실시간을 볼 수 있는 상태값 조회 페이지가 개선되었습니다.
이외에 자세한 리뉴얼 상황은 아래와 같습니다.

📍 결제대행사별로, 계약 건별로 상황을 확인할 수 있습니다.\
📍 계약 과정에서 필요한 서류 등 체크리스트를 확인할 수 있습니다.\
📍 워드프레스/ 우커머스 사이트를 지원하는 결제대행사 정보를 확인하실 수 있습니다.\
📍 포트원 추천패키지 상세 가이드가 추가되었습니다.


# https://developers.portone.io/release-notes/console/2023-12-27

---
releasedAt: 2023-12-27T00:00:00.000Z
writtenAt: 2024-01-02T00:00:00.000Z
---

## 주요 업데이트 사항

### **PG 거래대사**✔️ 헥토파이낸셜의 정산내역을 확인할 수 있습니다.

이번 업데이트를 통해 헥토파이낸셜을 포함한 11개 PG사와 간편결제사의 정산 내역을 조회할 수 있습니다.
관리자콘솔 메뉴 \[결제사 정산] - \[통합 내역 조회]에서 정산 내역을 조회할 수 있으며,
헥토파이낸셜의 경우 8월 1일 결제건부터 조회가 가능하오니 이용에 참고하시기 바랍니다.

📍 정산 통합 조회 서비스의 기능이 궁금하다면
[→ 서비스 소개 보기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍 이용 중인 결제대행사(PG사)도 정산 내역 조회가 가능한지 궁금하다면
[→ 지원 결제대행사(PG)사 확인하기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍 정산 통합 조회 서비스의 이용 방법이 궁금하다면 [→ 이용 방법 보기](https://guide.portone.io/92af7604-5813-48fa-a186-82e8e7356a3e)

## 기타 수정사항

### **결제 모듈 V1**✔️ KG이니시스 결제 시 결제 통화 위/변조 검사가 추가되었습니다.

PC 환경에서 KG이니시스의 승인 요청시 결제 통화 및 결제 금액 위/변조 검사를 진행합니다.


# https://developers.portone.io/release-notes/console/2024-09-05

---
releasedAt: 2024-09-05T00:00:00.000Z
writtenAt: 2024-09-05T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 좌측 메뉴 영역이 새롭게 변경되었습니다.

(관련 이미지 첨부)

기존 \[파트너 정산] 메뉴는 \[파트너 정산 자동화], \[애널리틱스] 메뉴는 \[결제 데이터 분석]으로 변경됩니다.

- **\[메뉴 접기]**

  - 메뉴 접기 아이콘을 클릭하여 좌측 메뉴 영역을 접을 수 있습니다.
  - 메뉴가 접힌 상태에서 한번 더 클릭하는 경우 다시 메뉴를 펼칠 수 있습니다.

- **\[전자결제 신청]**
  - 전자결제 신청을 원하시는 경우 좌측 메뉴 영역 하단의 \[전자결제 신청]을 클릭해 주세요.

- **\[로그아웃]**
  - 좌측 메뉴 영역 상단의 \[계정 정보]를 클릭한 후 \[로그아웃]을 클릭해 주세요.


# https://developers.portone.io/blog/posts/2024-02/v2-oom

---
title: 포트원 V2 이야기 - OOM 이슈 탐방기
description: ZIO를 사용하면서 발생했던 OOM 이슈에 대해 원인을 분석합니다.
author: BaekGeunYoung
date: 2024-02-28T15:00:01.000Z
tags:
  - Core V2
  - Backend
  - Scala
  - ZIO
---

본 글은 ZIO에 대한 기본적인 이해를 전제로 하고 있으니, ZIO에 대한 간략한 소개는 [포트원 V2 이야기 -
Scala와 ZIO로 안정적인 결제 시스템 만들기](../v2-zio)를 참고해주세요.

## 사전 배경: CQRS 패턴의 도입

포트원 V2 모듈은 CQRS 패턴을 활용하고 있습니다. 앞선 [글](../v2-zio)에서 소개드렸듯이 포트원 V2는
이벤트 소싱이라는 디자인 패턴을 도입했는데, 이벤트 소싱을 하게 되면 데이터가 훨씬 상세하게 남는다는
장점이 있지만 상태가 아닌 개별 이벤트들이 DB에 저장되므로 다양한 필터를 통한 조회 요구사항에는
적절하지 않습니다. 하지만 포트원 콘솔에는 다양한 필터 조건을 걸고, 정렬을 하며, 심지어는 full-text
search 까지 지원해야 하는 등의 고도화된 조회 요구사항이 존재합니다. 이러한 요구사항을 만족하기 위해
Write DB와 Read DB를 분리해서 사용하기로 결정했는데, 이러한 데이터 접근 패턴을 CQRS 패턴이라고
부릅니다.

## 문제 상황

CQRS 패턴을 구현하기 위해서는 Write DB에서 발생한 변경 사항을 Read DB에도 반영시켜주는 파이프라인이
필요한데, Read DB를 통해 포트원에서 발생한 모든 결제건을 누락없이 볼 수 있어야 하므로 이
파이프라인의 신뢰성을 높이는 것은 매우 중요합니다. 포트원 V2의 코어 모듈은 이 파이프라인의
시작점이라고 할 수 있는데, Write DB에 발생한 변경사항을 주기적으로 캐치하여 Kafka로 publish를 해주는
background job이 존재합니다.

(관련 이미지 첨부)

이러한 job은 recursive하게 자기 자신을 주기적으로 호출하는 방식으로 작성되어 있었는데, 대략 아래와 같은 코드로 단순하게 표현할 수 있을 것입니다.

```scala
private def scrapAndPublish: UIO[Nothing] =
  for {
    events  <- getEvents
    _       <- publish(events)
    nothing <- scrapAndPublish.delay(1.second)
  } yield nothing
```

해당 코드를 배포하고 난 직후엔 아무 문제 없이 의도한대로 잘 동작하였으나, 코드를 배포한 지 며칠이
지나자 OOM이 발생해 어플리케이션이 강제로 재시작되었고 다시 며칠동안은 문제가 없다가 OOM이
발생하기를 반복했습니다. 아래의 두 사진 중 위의 것은 문제가 된 인스턴스의 JVM old generation size
추이를 나타낸 그래프이고, 아래의 사진은 같은 메트릭에 대해 문제가 없는 인스턴스의 일반적인
그래프입니다.

(관련 이미지 첨부)

(관련 이미지 첨부)

그래프를 통해 계속적인 재귀 호출로 인해 메모리가 정리되지 않고 계속해서 쌓이고 있음을 짐작할 수
있었고, 이 이슈를 해결하기 위해 몇 가지 실험과 ZIO의 코드 분석을 진행했습니다.

## 무한 재귀인데 OOM이 나는 이유

그런데 무언가 이상했습니다. 상황을 확인하고 가장 먼저 든 생각은 “무한 재귀 호출로 인해 문제가
생긴거라면 `OutOfMemoryError`가 아니라 `StackOverflowError`가 발생해야 하는 것 아닌가?”하는
것이었습니다. 일반적으로 함수의 호출은 스택이라는 메모리 공간에 스택 프레임을 생성하기 때문에 함수
호출의 깊이가 매우 깊어지면 스택에 남은 공간이 없어질 것이기 때문이죠. 예를 들어 아래와 같은
`Option`을 이용한 무한 재귀 호출 코드는 `StackOverflowError`를 발생시킬 것입니다.

```scala
def optionInfRec(n: Int): Option[Nothing] =
  Some(n).flatMap(_ => optionInfRec(n + 1))

optionInfRec(0)

--- 실행결과 ---
java.lang.StackOverflowError
  at scala.Option.flatMap(Option.scala:283)
  at io.portone.tx.InfRecSpec$.optionInfRec$1(InfRecSpec.scala:11)
  at io.portone.tx.InfRecSpec$.$anonfun$spec$2(InfRecSpec.scala:12)
  at io.portone.tx.InfRecSpec$.$anonfun$spec$2$adapted(InfRecSpec.scala:11)
  at scala.Option.flatMap(Option.scala:283)
  at io.portone.tx.InfRecSpec$.optionInfRec$1(InfRecSpec.scala:11)
  at io.portone.tx.InfRecSpec$.$anonfun$spec$2(InfRecSpec.scala:12)
  at io.portone.tx.InfRecSpec$.$anonfun$spec$2$adapted(InfRecSpec.scala:11)
```

하지만 ZIO를 이용한 무한 재귀 호출 코드는 `StackOverflowError`를 발생시키지 않습니다.

```scala
def zioInfRec(n: Int): UIO[Nothing] =
  ZIO.succeed(n).flatMap(_ => zioInfRec(n + 1))

unsafeRun(zioInfRec(0))
```

### ZIO의 Lazy Evaluation

ZIO의 경우에만 `StackOverflowError` 가 발생하지 않는 이유는 우선 ZIO는 `flatMap`의 인자로 전달 받은 함수를 즉시 평가하지 않기 때문입니다.
지난 글에서 ZIO는 동작을 기술하는 data type일 뿐이라고 소개했던 것을 기억하시나요?
ZIO에서 제공하는 `flatMap`이라는 함수에서는 파라미터로 받은 `k` 함수를 평가하지 않고 `OnSuccess`라는 data type에 그대로 넣어주고 있습니다.

```scala
def flatMap[R1 <: R, E1 >: E, B](k: A => ZIO[R1, E1, B])(implicit trace: Trace): ZIO[R1, E1, B] =
    ZIO.OnSuccess(trace, self, k) // OnSuccess는 ZIO의 subtype입니다.
```

반면 Option의 `flatMap` 구현을 보면 파라미터로 받은 f 함수를 즉시 평가하고 있습니다.

```scala
@inline final def flatMap[B](f: A => Option[B]): Option[B] =
    if (isEmpty) None else f(this.get)
```

다시 말해 위의 무한 재귀 호출 코드에서 재귀 호출이 일어나는 부분은 lambda 함수로 감싸져 있는데,
ZIO는 이 함수를 즉시 평가하지 않기 때문에 이 코드는 실제로는 재귀 호출을 하지 않는 코드가 되는
것이죠! 이를 확인하기 위해 우리가 만든 ZIO를 한번 콘솔에 출력해보겠습니다.

```scala
OnSuccess(
  io.portone.tx.InfRecSpec.zioInfRec(InfRecSpec.scala:10),
  Sync(
    io.portone.tx.InfRecSpec.zioInfRec(InfRecSpec.scala:10),
    io.portone.tx.InfRecSpec$$$Lambda$1000/0x00000008012be5e8@398d44c6
  ),
  io.portone.tx.InfRecSpec$$$Lambda$1001/0x00000008012be8a8@781006f6
)
```

실제로 `OnSuccess`가 계속해서 nested된 형태가 아니라, lambda 함수의 reference만 들어있는 것을 확인할 수 있습니다.

## ZIO가 실제로 실행되는 원리

여기까지 확인을 했다면, **“이건 단순히 평가 시점을 뒤로 미룬 것 뿐이고, 나중에 lambda가 실제로
평가될 때는 결국 문제가 발생하는거 아닌가?”** 하는 생각이 들 수 있습니다. 이 부분에 대한 궁금증을
해소하기 위해서는 우선 단순한 데이터 타입에 불과한 ZIO가 어떻게 실제로 실행되는지에 대해 이해해야
하는데요, 이 때 알아야 하는 개념이 `Fiber`와 `FiberRuntime`입니다.

### Fiber와 FiberRuntime

ZIO는 `Fiber`라는 객체 위에서 실행되고 그 실행 환경을 구체적으로 정의한 구현체를 `FiberRuntime`이라고 부릅니다.

```scala
// 실행하고자 하는 zio 객체를 이용해 Fiber를 만듭니다.
val fiber = makeFiber(zio)
// Fiber.start 함수를 호출하면 zio가 실제로 평가됩니다.
fiber.start(zio)
```

`FiberRuntime` 에는 실제로 ZIO를 한 단계씩 실행해나가는 `runLoop` 라는 함수가 존재하는데, 이 함수는
ZIO를 바깥에서부터 하나씩 처리하고 다음 평가할 ZIO를 만들어 이어서 처리하는 식으로 구현되어
있습니다. 위에서 소개한 `OnSuccess` 객체를 처리하는 로직은 어떻게 작성되어 있을까요? `OnSuccess` 는
순차 실행을 추상화한 데이터 타입이며, 그렇기 때문에 가장 기본적이고도 가장 강력한 Effect 조합기라고
할 수 있습니다. 이를 처리하는 코드를 직접 살펴보겠습니다. (편의를 위해 코드를 단순화했으며, 실제
ZIO의 코드와는 상이한 부분이 있을 수 있습니다.)

```scala
private def runLoop(effect: ZIO[Any, Any, Any], currentDepth: Int): AnyRef = {
  ...

  effect match {
    case onSuccess: OnSuccess[_, _, _, _] =>
      val first = onSuccess.first
      val andThen = onSuccess.successK

      // 첫번째 effect를 runLoop 함수를 재귀호출하여 평가하고,
      // andThen 함수에 이 결과를 넣어 이어서 평가할 ZIO 객체를 만듭니다.
      val continuation = andThen(runLoop(first, currentDepth + 1))
      ...

    case ... // handling other cases
  }
}
```

### Stack Safety를 위한 Trampoline

위 코드에서 하는 일은 첫번째 ZIO를 `runLoop` 함수를 재귀호출하여 먼저 평가하고, 그 결과를 가지고
`andThen` 함수를 호출해 이어서 평가할 ZIO 객체를 만드는 것입니다. 어쨌거나 `runLoop` 함수를 재귀
호출하기 때문에 원래 가졌던 궁금증처럼 여기서도 결국 `StackOverflowError`가 발생할 가능성이
있어보입니다. 하지만 그럼에도 실제로는 `StackOverflowError`가 발생하지 않았던 이유는 무엇일까요? 그
이유는 함수 호출의 깊이가 특정 임계값에 도달하면 즉시 스택을 비우고 연산을 한번 중지했다가 다시
시작하는 로직이 존재하기 때문입니다. `runLoop` 함수의 파라미터로 `currentDepth` 가 존재하는 것이
보이시나요? 재귀 호출을 할 때마다 이 값을 하나씩 늘려 호출을 하고, 함수의 첫 시작 부분에는 이 값이
임계치에 도달했는지를 확인하는 로직이 존재합니다.

```scala
if (currentDepth >= FiberRuntime.MaxDepthBeforeTrampoline) {
  ...

  throw Trampoline(effect, false)
}
```

여기서 발생한 `Trampoline` 이라는 에러를 catch하는 로직은 아래와 같습니다.

```scala
...
catch {
  case trampoline: Trampoline =>
    tell(FiberMessage.Resume(trampoline.effect))
}
```

이렇게 연산을 실제로 이어나가는 대신, “연산을 재개해라”라는 명령을 추상화한 객체를 만듦으로써
명시적으로 스택을 비워 stack safety를 달성할 수 있습니다. Exception의 이름이 `Trampoline` 이라는
것이 조금 특이한데, 사실 Trampoline이란 이렇게 **함수의 stack safety를 보장하기 위해 stack 대신
heap을 사용해 연산을 이어나가는 일반화된 패턴**을 의미하는 용어입니다. Trampoline은 stack safety를
보장할 수 있는 우아한 함수형 기법이지만, heap을 이용하기 때문에 메모리 동적 할당에 따른 오버헤드를
감수해야 하고 메모리에 random access를 해야 하기 때문에 stack을 일반적으로 이용하는 것보다
locality가 떨어져 cache 효율성이 낮아질 수 있습니다.

## 이제 진짜 원인 파악을 해보자

여기까지 이해를 했다면, 원래의 코드에서 왜 문제가 생겼는지를 쉽게 이해할 수 있습니다. 사실 `runLoop`
함수에서 하는 일이 한 가지 더 있는데, 함수 호출의 깊이가 깊어져 trampoline이 발생하게 되면 현재
effect를 나중에 평가하기 위해 stack에 쌓아두는 것입니다. 이 작업을 추가한 `runLoop` 코드는 다음과
같습니다.

```scala
private def runLoop(effect: ZIO[Any, Any, Any], currentDepth: Int): AnyRef = {
  ...

  effect match {
    case onSuccess: OnSuccess[_, _, _, _] =>
      val first = onSuccess.first
      val andThen = onSuccess.successK

      // 첫번째 effect를 runLoop 함수를 재귀호출하여 평가하고,
      // andThen 함수에 이 결과를 넣어 이어서 평가할 ZIO 객체를 만듭니다.
      try {
        val continuation = andThen(runLoop(first, currentDepth + 1))
      } catch {
        case trampoline: Trampoline =>
          // trampoline이 발생하면 나중에 effect를 다시 실행하기 위해 stack에 저장합니다.
          self.reifiedStack += effect

          throw trampoline
      }

      ...

    case ... // handling other cases
  }
}
```

우리의 코드는 trampoline이 무한히 발생해 stack에도 effect들이 무한히 쌓이게 되므로 OOM이 발생하는 것이었습니다!

(관련 이미지 첨부)

## 해결 방법

원인을 파악하기까지 꽤나 힘들었지만, 해결 방법은 단순합니다. 그것은 Scala의 for-comprehension을
사용하지 않는 것인데요, for-comprehension으로 만들어진 코드는 우리가 정확히 원하는 코드와는 약간의
차이가 있습니다. 윗부분에서 소개한 `zioInfRec` 함수를 for-comprehension 스타일로 바꾼다면 아래와
같이 작성할 수 있을 것입니다.

```scala
def withForComprehension(n: Int): UIO[Nothing] =
  for {
    _       <- ZIO.succeed(n)
    nothing <- withForComprehension(n + 1)
  } yield nothing
```

그리고 이 코드는 아래의 코드와 동치입니다.

```scala
def withForComprehension2(n: Int): UIO[Nothing] =
  ZIO
    .succeed(n)
    .flatMap(_ => withForComprehension2(n + 1).map(nothing => nothing))
```

가장 마지막 부분에 `.map(nothing => nothing)` 이 붙는 것이 보이시나요? 이 부분은 사실 없어도 되는
코드이지만, for-comprehension의 변환 규칙에 의해 어쩔 수 없이 붙게 되는 코드입니다. 의미적으로는
사실상 같은 일을 하는 코드이지만, 만들어지는 ZIO의 구성 자체는 분명한 차이점을 가지고 있으며 이를
`FiberRuntime` 위에서 실행할 때도 동작 방식에서 큰 차이를 갖게 됩니다.

### for-comprehension 사용 유무에 따른 구조적 차이

마지막 부분에 `.map(nothing => nothing)` 이 추가된 경우와 그렇지 않은 경우를 각각 콘솔에
출력해보았습니다. (이해를 돕기 위해 단순화하여 편집한 출력입니다. 크게 신경쓰지 않아도 되는
파라미터는 생략하였으며, lambda 함수의 reference들은 단순하게 `lambda` 라고만 표기하였습니다.)

```scala
// 1. map(nothing => nothing)이 추가되지 않은 경우
OnSuccess(
  Sync(lambda),
  lambda
)

// 2. map(nothing => nothing)이 추가된 경우
OnSuccess(
  OnSuccess(
    Sync(lambda),
    lambda
  ),
  lambda
)
```

두 ZIO의 구조적인 차이가 확인되시나요?
1번의 경우 `OnSuccess` 가 한 겹만 존재하는데 반해, 2번의 경우는 `OnSuccess` 안에 다시 `OnSuccess` 가 존재하는 구조입니다.
이렇게 `OnSuccess` 가 한 겹 더 생기는 이유는 `map` 함수는 단순히 `flatMap` 함수 호출을 wrapping하는 식으로 구현되어 있기 때문입니다.

```scala
def map[B](f: A => B): ZIO[R, E, B] = flatMap(a => ZIO.succeed(f(a)))
```

1번의 경우 `OnSuccess` 케이스를 `FiberRuntime` 에서 처리할 때 재귀호출 하는 `runLoop` 의 파라미터로
항상 `Sync` 를 넣어주기 때문에 해당 재귀 호출은 중첩된 재귀 호출을 하지 않고 곧바로 리턴될 것입니다.
반면 2번의 경우 `OnSuccess` 가 두 번 겹쳐 있으므로, `runLoop` 재귀 호출의 파라미터로 `OnSuccess` 를
넣어주게 되고 이는 중첩된 `runLoop` 재귀 호출을 유발합니다. 중첩된 재귀 호출은 Trampoline을 일으킬
것이고, 이 때 stack에 있던 중첩된 effect들이 heap (`reifiedStack`)으로 옮겨가면서 메모리를 차지하게
됩니다.

### 문제 해결

다시 맨 첫부분의 `scrapAndPublish` 예시로 돌아가서, 해당 함수를 아래와 같이 for-comprehension을
사용하지 않도록 바꿈으로써 문제를 해결할 수 있습니다.

```scala
private def scrapAndPublish: UIO[Nothing] =
  getEvents
    .flatMap(events => publish(events))
    .flatMap(_ => scrapAndPublish.delay(1.second))
```

또한
[better-monadic-for](https://github.com/oleg-py/better-monadic-for?tab=readme-ov-file#final-map-optimization)이라는
Scala compile plugin을 적용하면 for-comprehension을 없애지 않고도 문제를 해결할 수 있습니다! 이
글에서 설명하는 경우와 같이 마지막 부분에 불필요한 `map` 함수를 해당 플러그인이 제거해줍니다.

## 마무리

이번 글에서는 ZIO를 사용하면서 겪었던 OOM 이슈에 대해 그 원인과 해결 방법을 알아보았습니다. 원인을
분석해보면서 ZIO의 FiberRuntime 개념, Trampoline 패턴, for-comprehension의 작동 방식 등 흥미로운
여러 주제들에 대해서도 함께 공부할 수 있는 시간이었던 것 같습니다.

우리는 기술을 통해 온라인 결제 시장을 혁신하고자 하는 팀입니다.
이와 같은 기술적인 고민을 함께 하며 포트원의 미션에 동참하고 싶으신 분들은 언제든지 포트원의 문을 두드려주시면 감사하겠습니다!


# https://developers.portone.io/blog/posts/2024-02/v2-webhook

---
title: 포트원 V2 이야기 - 웹훅 재시도, 어디까지 고도화해 보셨나요?
description: 웹훅의 중요성과 한계점을 살펴보고 포트원 V2에서 웹훅 시스템을 고도화한 이야기를 소개합니다.
author: LimJiGyu
date: 2024-02-28T15:00:02.000Z
tags:
  - Core V2
  - Backend
  - Scala
  - Webhook
  - Architecture
---

포트원의 V2 시스템은 고객들에게 더 나은 가치를 제공하기 위해 다양한 방면으로 기술적 고도화를
진행했습니다. 기존에 결제 서비스를 운영하며 발생했던 여러 문제들에 대해 새롭게 고민했고, 그 중에는
결제 과정에서 반드시 필요한 웹훅 기능도 있었습니다.

웹훅은 포트원과 고객사 서버의 상태를 동기화하는 매우 중요한 수단인데, 기존 시스템을 운영하며 웹훅과
관련한 몇 가지 문제점을 발견했고 이를 해결하기 위해 많은 기술적 고민을 거쳤습니다. 지금부터, V2
시스템을 설계하며 웹훅과 관련해 고민했던 여러 기술적 문제들과 그 해결 과정을 공유하고자 합니다.

## 웹훅이란?

웹훅은 하나의 시스템이 다른 시스템에 어떤 이벤트가 발생했음을 알리는 방법입니다.

일반적으로 네트워크 통신은 서비스를 제공받는 클라이언트 앱에서 서비스를 제공하는 서버 앱을 호출하는
방향으로 이루어지지만, 서비스를 이용하는 과정에서 서버 앱에 특정 이벤트가 발생했는지 확인해야 하는
경우가 생길 수 있습니다. 이 경우, 클라이언트는 서버에게 데이터를 조회하는 요청을 규칙적인 주기로
전송하여 확인하고자 하는 특정 이벤트가 발생했는지를 반복적으로 확인해야 하는데 이를
폴링(Polling)이라고 합니다.

그러나 이는 특정 이벤트가 어느 시점에 발생할 지 모르는 상황에서 클라이언트가 서버를 확인하는 작업을
반복하는 것이기 때문에 이벤트가 발생하기 전까지의 무의미한 네트워크 호출 과정에서 인프라 자원의
비효율을 발생시키며, 이벤트 처리에 대한 실시간성 역시 좋지 않은 방식입니다. 따라서 특정 이벤트가
발생한 경우, 서버 측에서 클라이언트 측으로 HTTP 요청을 발송하여 정보를 역방향으로 전달하는 방식을
사용할 수 있고 이를 웹훅이라고 합니다. 그리고 이러한 특성 때문에 웹훅은 Reverse API, Push API 라고도
불립니다.

(관련 이미지 첨부)

웹훅을 사용하게 되면 클라이언트는 더 이상 이벤트의 발생 시점을 확인하기 위해 서버를 폴링할 필요가
없어지게 됩니다. 그 대신 서버에게 클라이언트 측 URL을 미리 전달하고, 이벤트가 발생하면 해당
엔드포인트로 서버가 발송한 이벤트 관련 데이터(Payload)를 통해 적절한 이벤트 처리 로직을 실행시킬 수
있습니다. 이는 이벤트가 발생한 시점에 서버가 직접 요청하기 때문에 실시간성 또한 매우 높은 방식이라고
할 수 있습니다.

## 포트원의 웹훅 사용 방식

포트원은 이러한 웹훅의 특성을 잘 활용하고 있으며 결제 서비스를 제공하는 과정에서 발생하는 여러 이벤트들을 고객사에 전달하고 있습니다.

한 번의 결제 과정에서도 여러 상황에 대한 웹훅을 발송하고 있지만, 비동기 이벤트에 대한 알림을
전달하는 웹훅의 특성을 가장 잘 설명하는 대표적인 사례는 가상계좌 결제에서 찾아볼 수 있습니다.

가상계좌 결제란 사용자에게 일시적으로 할당된 계좌로 결제할 수 있는 방법을 말합니다. 이 방식에서는
사용자가 계좌를 생성한 이후 입금 기한 내에 계좌로 돈을 입금하면 상품 또는 서비스에 대한 결제로
처리됩니다. 이는 전통적인 신용카드 결제와 달리, 고객사 페이지에서 가상계좌가 생성 처리되는 시점
이후에 입금이 비동기적으로 이루어지는 결제 방식입니다.

이러한 결제 방식에서, 고객이 입금을 완료했는지를 실시간으로 확인하기 위해 폴링 방식을 사용하는 것은
비효율적입니다. 입금 시점 전까지 반복적으로 대역폭을 불필요하게 소모하고, 서버에 부담을 주며, 결제
확인에 대한 지연을 초래하기 때문입니다. 반면, 웹훅을 사용하면 입금이 확인되는 즉시 서버에서 고객사의
지정된 웹훅 URL로 알림을 보냄으로써 이러한 비효율을 없앨 수 있습니다.

현재 포트원은 가상계좌 방식 입금 통보 외에도 결제 성공 혹은 실패와 같은 다양한 이벤트에 대해서도
웹훅을 전달하며, 이는 고객사가 결제 상태를 실시간으로 추적하고 관리하는 데에 도움을 줍니다

포트원에서 웹훅은 단순한 알림 기능을 넘어서는 중요한 역할을 하기도 합니다. 예를 들어, 고객이 결제
과정 중에 문제를 겪어 고객사 페이지로 콜백이 오기 전에 결제 창을 비정상적으로 종료하더라도, 포트원
서버에서는 결제 승인 시 웹훅을 발송하기 때문에 고객사 서버에서는 이 결제 건을 적절히 처리할 수
있습니다. 이는 고객의 결제 경험을 개선하고, 잠재적인 매출 손실을 방지하는 데 도움이 됩니다.

결국, 웹훅은 포트원이 제공하는 결제 시스템에서 여러 이벤트를 처리하기 위해 꼭 필요한 요소이며, 이를
통해 고객사는 더 빠르고 효율적인 결제 처리와 함께 향상된 사용자 경험을 제공할 수 있습니다. 포트원은
이러한 웹훅 기술을 통해 결제 서비스의 신뢰성과 효율성을 동시에 높이고 있습니다.

## 웹훅 시스템에서 발생하는 문제점

웹훅은 효율적인 이벤트 알림 메커니즘을 제공하지만, 그 자체로 완벽하지는 않습니다. 가장 큰 문제 중 하나는 웹훅 호출이 실패할 경우 발생합니다.

웹훅 호출의 실패는 고객사의 결제 데이터와 이벤트 처리 로직의 누락으로 이어질 수 있기 때문에 적절한
처리가 필요합니다. 이 때 웹훅의 재시도 정책이 그에 대한 좋은 방법이 될 수 있습니다. 단순히 한 번의
네트워크 호출 실패로 인해 전체 서비스의 비즈니스 로직을 실패로 처리하거나 대체 로직(fallback)으로
전환하는 것은, 네트워크 호출을 재시도하는 것과 비교하여 더 큰 리소스 낭비가 될 수 있기 때문입니다.

또한 실제로 웹훅이 실패하는 대부분의 원인은, 웹훅을 받는 시스템에 큰 장애가 발생했거나 명확한
비즈니스 로직상의 실패 응답을 주는 경우보다, 네트워크의 일시적인 장애가 있거나 간헐적인 실패
응답으로 인해 발생하는 경우가 더 많기 때문에 재시도 정책은 이러한 일시적 문제를 극복하고 웹훅이
중요한 데이터를 성공적으로 전송하는 데에 큰 도움을 줍니다.

그러나 단순히 재시도를 하는 것이 문제를 해결하지는 않습니다. 이를테면 네트워크 문제로 인한 시간
초과가 발생한 경우, 문제가 해결될 때까지 지속적으로 웹훅이 실패할 수 있습니다. 그리고 이러한
상황에서 재시도를 일정 간격 없이 바로 실행한다면, 이는 문제가 있는 네트워크에 더 큰 부담을 주고
오히려 상황을 악화시킬 수 있습니다. 만약 서버 또는 중간 네트워크에 일시적인 과부하가 발생하여 요청이
지연되고 있는 상황에서, 모든 클라이언트가 연속적으로 최대 3회 재시도를 한다면 네트워크 트래픽은
예상치 못하게 최대 3배까지 증가할 수 있습니다.

위와 같은 문제를 방지하기 위해 재시도의 적절한 간격을 결정하기 위한 정책이 필요합니다. 그리고 재시도
간격에 대한 정책을 결정하더라도, 이러한 재시도 정책을 기술적으로 구현하여 원하는 웹훅 발송 시점에
적절히 재시도를 실행해야 하고, 재시도 이벤트가 시스템의 변경이나 배포 과정에서도 누락되지 않도록
안전하게 관리되는 시스템을 설계해야 합니다.

이제부터, 포트원 V2가 어떻게 이러한 문제들을 해결하고 안전한 웹훅 시스템을 설계했는지 살펴보겠습니다.

## 문제 해결, 재시도 시스템 고도화

포트원 V2는 웹훅 시스템의 이러한 문제점들을 해결하기 위해 웹훅 재시도 시스템을 고도화하는 데에
중점을 두었습니다. 그리고 이 과정에서 구현한 몇 가지의 핵심 전략들을 소개하고자 합니다.

### 1. Exponential Backoff

Exponential Backoff는 재시도 간의 대기 시간을 지수함수(exponential)의 형태로 점차 증가시키는 방법입니다.

예를 들어, 첫 번째 시도를 위한 대기 시간이 1분이면, 두 번째 시도의 대기 시간은 2분, 세 번째 시도는
4분이 됩니다. 이렇게 함으로써, 네트워크에 갑작스럽게 부하를 주는 것을 방지하고, 동시에 많은 요청이
집중되는 것을 피할 수 있습니다.

만약 모든 재시도 요청이 동일한 시간 간격으로 이루어진다면, 장애 시간동안 재시도 해야할 요청들이
누적됨에 따라 네트워크 트래픽이 기하급수적으로 증가하게 됩니다. 따라서 네트워크 트래픽이 적절히
분산되도록 만들기 위해 재시도 간격 또한 기하급수적(exponential)으로 증가시킨다고 생각하면 쉽게
이해할 수 있습니다. 이를 통해 장애 시간 동안 재시도 해야 할 요청 수가 증가하더라도 단위 시간 당
네트워크 트래픽이 고루 분산되어 웹훅을 수신하는 서버의 부담을 줄일 수 있습니다.

아래는 현재 Scala로 구현된 V2 Core 컴포넌트에서 재시도 간격을 계산하는 코드입니다. 첫 번째 웹훅
시도는 바로 진행하기 때문에 0 으로 시작하며 이후부터는 동일한 웹훅에 대한 재시도 횟수가 증가함에
따라 1 → 2 → 4 .. → 256 까지 지수함수의 형태로 증가하도록 구현되어 있습니다. 이 때 단위는 분이지만
함수를 호출하는 코드에서 사용하기 위해 초 단위로 변경하여 응답하고 있습니다.

```scala
def calculateDelaySeconds: Duration = {
    """
    현재 시도 횟수에 따른 지연 시간(초) 계산
    시도 횟수에 따라 0 -> 1 -> 4 -> 16 -> 64 -> 256 순으로 간격 설정
    """
    if (currentExecutionCount == 1)
      // 첫 번째 시도는 backoff 없이 바로 시도
      return Duration.fromSeconds(0.minute.toSeconds)
    else
      // 두 번째 시도부터 4의 지수 형태로 증가
      return Duration.fromSeconds(
        math.pow(4, currentExecutionCount - 2).toInt.minute.toSeconds
      )
  }
```

우리는 Exponential Backoff 전략을 통해 장애 시간 동안 누적되는 재시도 요청들이 단위 시간 당 네트워크
트래픽을 기하급수적으로 증가시키는 현상을 막을 수 있었습니다. 그러나, 이 전략을 사용하더라도 여전히
동일한 시간대에 발생한 모든 요청은 동일한 시간 간격으로 함께 수행된다는 한계가 존재합니다. 따라서
우리는 이러한 한계를 극복하기 위해 Jitter 라는 또 다른 전략을 함께 사용하여 문제를 해결합니다.

### 2. Jitter

Jitter는 정해진 시간 간격에 무작위성(randomness)을 추가하여, 모든 재시도가 동시에 이루어지지 않도록
합니다. 이는 동일한 시간대에 실패한 각 재시도 이벤트들이 서로 다른 시간에 재시도하도록 만들고 결국,
네트워크 트래픽이 골고루 분산되도록 만드는 효과를 가져옵니다. 이 또한 Exponential Backoff 전략과
함께 트래픽 급증이나 네트워크 오버로드로 인한 장애를 방지하는 데 도움이 됩니다.

아래 코드는 위에서 보았던 재시도 간격 계산 함수 `calculateDelaySeconds` 에 jittered 함수를 추가로
사용한 코드입니다. 내용을 정리하면 Exponential Backoff 전략을 통해 계산된 시간 간격(delay)에 0부터
1사이의 무작위 숫자를 곱해서 확률적으로 지연 시간을 결정하는 방식입니다.

이 때 min, max 라는 변수는 무작위 결과가 나올 수 있는 범위를 결정하는 요소라고 볼 수 있습니다.
Jitter 방식은 다시 Full Jitter, Equal Jitter 로 나눠지는데 이는 무작위 결과가 산출되는 범위를 전체
범위로 할 것인지 아니면 최소 지연 시간을 결정하고 남은 범위로 할 것인지의 차이를 가집니다. 예를 들면
현재 재시도 간격이 4분으로 정해졌다면, Full Jitter의 경우 0-4분 사이에서 무작위로 선택하지만 Equal
Jitter의 경우 최소 지연 시간을 2분이라고 설정한 뒤 2-4분 사이에서 무작위로 선택하는 방식입니다.

두 가지 방식 모두 장단점이 있으나 현재 포트원은 성능상 네트워크 트래픽을 더 고루 분산시키는 Full
Jitter 방식을 사용하고 있으며 이에 따라 min 값을 0으로 사용하고 있습니다.

(만약 이 주제에 대해 더 자세하게 알아보고 싶으시면 [AWS Architecture Blog 에서 소개한
글](https://aws.amazon.com/ko/blogs/architecture/exponential-backoff-and-jitter/)을 읽어보셔도
좋습니다)

```scala
def calculateDelaySeconds: Duration = {
    """
    무작위 시간 추가 (jitter)
    """
    if (currentExecutionCount == 1)
      // 첫 번째 시도는 backoff 없이 바로 시도
      return Duration.fromSeconds(
        jittered(
          0.minute.toSeconds
        ).toLong
      )
    else
      // 두 번째 시도부터 4의 지수 형태로 증가
      return Duration.fromSeconds(
        jittered(
          math.pow(4, currentExecutionCount - 2).toInt.minute.toSeconds
        ).toLong
      )
  }

private def jittered(delay: Long) = {
    // min, max 를 설정하여 무작위로 정해질 시간의 범위를 조정
    val min    = 0.0
    val max    = 1.0
    val random = scala.util.Random.nextDouble()
    delay * min * (1 - random) + delay * max * random
  }
```

앞서 살펴본 Exponential Backoff, Jitter 전략은 단순히 재시도 간격을 늘리는 것을 넘어서, 전체적인
네트워크 부하를 전략적으로 분산시키고 이를 통해 고객사의 장애 상황에 최대한 영향을 주지 않도록
시스템을 설계합니다.

우리는 앞서 세운 전략들로 적절한 재시도 간격을 결정할 수 있게 되었습니다. 그렇다면, 이제 기술적으로
이러한 정책을 구현할 수 있는 시스템이 필요합니다. 결정된 시간이 지난 후 어떻게 원하는 시점에 실제
재시도 요청이 이루어지도록 할 수 있을까요? 그리고 만약 새로운 버전이 배포되면서 서버가 종료되었을
때에도 재시도 해야 할 이벤트들이 누락되지 않도록 하려면 어떻게 해야할까요?

### 3. Message Queue - SQS

포트원 V2에서는 위와 같은 요구사항을 달성하기 위해 메시지 큐(SQS)를 활용하여 시스템을 설계했습니다.

물론 재시도 간격을 기술적으로 구현하기 위한 방법에는 여러 가지가 있겠지만, 가장 처음 생각할 수 있는
단순한 방법은 외부 인프라를 이용하지 않고 언어나 라이브러리에서 제공하는 타이머를 이용하는
방법입니다. 그러나 만약, 서버가 언어 혹은 라이브러리에서 지원하는 타이머와 비동기 구현의 조합을
활용하여 직접 애플리케이션 메모리에 재시도 할 이벤트들을 보유하게 되면, 새로운 버전의 배포 시
메모리에 저장된 재시도 이벤트들이 모두 손실되는 문제가 발생할 수 있습니다. 이는 웹훅 데이터의
누락으로 이어질 수 있어, 안정적인 시스템 운영에 큰 장애가 됩니다. 이를 해결하기 위해, 재시도
이벤트들을 서버가 아닌 외부 인프라에 저장할 필요가 있었습니다.

이 때, 데이터를 저장할 수 있는 외부 인프라에는 다양한 종류가 있지만 우리의 시나리오는 재시도 할
이벤트들을 일회성으로 등록하고 처리하는 것이었기 때문에 메시지 큐를 사용하는 것이 가장 적합하다고
판단했습니다. 그리고 Kafka, Kinesis, RabbitMQ, SQS 등 여러 종류의 메시지 큐 중에서도 SQS를
선택했는데, 그 이유는 다음과 같습니다.

#### Delay Queue 기능 자체 지원

Exponential Backoff와 Jitter와 같은 기법을 적용하기 위해 메시지 처리를 일정 시간 지연시킬 필요가
있습니다. 만약 메시지가 지연되지 않고 반복적으로 애플리케이션에 짧은 주기로 도달한다면 인프라 비용이
상당히 비효율적으로 소모될 것이기 때문입니다.

SQS는 큐 자체적으로 이러한 지연 처리 기능을 지원하며, 각 메시지의 생산 시점에 원하는 지연 시간을 매
번 설정할 수 있는 기능을 제공합니다. 이는 결정된 재시도 간격의 기술적 구현을 별도의 로직이나
커스터마이징 없이도 SQS 기능만으로 간단하게 달성할 수 있게 해줍니다.

#### FIFO 정책을 강제하지 않는 Standard 모드 지원

모든 재시도 이벤트들은 큐에 전송된 순서에 관계 없이 서로 다른 지연시간을 가지고 독립적으로 처리되어야 합니다.

예를 들어, 먼저 전송된 메시지는 16분 후에 처리되어야 하지만 이후에 전송된 다른 메시지는 1분의
지연시간을 가질 수 있습니다. 이 때, FIFO 정책이 엄격하게 지켜진다면 어느 메시지의 지연 시간에
맞추더라도 두 메시지의 지연 처리 요구사항을 모두 만족시키는 것은 불가능합니다.

그러나 SQS는 Standard와 FIFO 두 가지 종류를 가지고 있는데, Standard 모드에서는 FIFO(First-In,
First-Out) 정책을 강제하지 않습니다. 이는 각 메시지가 서로 다른 지연시간을 가질 수 있게 하여,
메시지들이 독립적으로 운영될 수 있도록 해야 한다는 요구사항을 쉽게 만족시킵니다.

#### Dead Letter Queue(DLQ)를 통한 실패 관리

최대 재시도 횟수를 초과한 메시지는 DLQ(Dead Letter Queue)로 전송됩니다. 이를 통해 실패한 메시지에
대한 검사와 관리가 가능해져, 시스템의 안정성과 신뢰성을 향상시킬 수 있습니다.

#### AWS Fully Managed Service의 이점

SQS는 AWS에서 제공하는 완전 관리형 서비스입니다. 따라서 추가적인 인프라 관리를 필요로 하는 다른 메시지 큐들과 달리 시스템에 쉽게 통합할 수 있다는 장점을 가지고 있습니다.

즉, SQS를 통해 앞서 설계한 우리의 재시도 정책을 기술적으로 간단하게 구현하면서도 애플리케이션의
변경이나 시스템의 장애에도 손실을 최소화할 수 있는 웹훅 시스템을 구축할 수 있었습니다.

## 최종 아키텍처

최종적으로, 웹훅 시스템의 아키텍처를 그림으로 표현하면 다음과 같습니다.

(관련 이미지 첨부)

Transaction Service는 V2 시스템에서 결제의 코어 기능을 담당하는 컴포넌트이며 실질적으로 웹훅을
발송하는 주체입니다. 그리고 Transaction Webhook Service 는 SQS를 구독하여 웹훅 재전송을 위한 단순한
로직을 반복하는 작은 컴포넌트입니다. 이 컴포넌트가 하는 작업은 SQS에 처리할 메시지가 있는지
지속적으로 확인하고, 만약 메시지가 있으면 Transaction Service로 웹훅 재전송을 요청한 뒤 메시지를
삭제하는 것이 전부입니다. 즉, 웹훅의 발송을 담당하는 컴포넌트와 메시지 큐를 폴링하여 전달하는
컴포넌트가 협업하는 구조입니다.

이 시스템이 동작하는 시나리오를 간단히 설명하면 다음과 같습니다.

1. 고객사 서버로 최초 웹훅을 발송합니다.

2. 고객사로부터 응답을 받습니다. 이 때, 정상 응답을 받은 경우 웹훅 프로세스는 완료됩니다.
   하지만 실패 응답을 받았을 경우 재시도 프로세스가 시작됩니다.

3. 재시도 할 웹훅에 대한 정보를 담아 SQS에 메시지를 전송합니다. 이 때, SQS의 지연 발송 기능을 이용하여
   재시도 간격 이후에 메시지가 수신될 수 있도록 합니다.

4. 정해진 지연 시간이 지나면 Transaction Webhook Service가 메시지를 수신하고, 재시도 로직을 시작합니다.

5. Transaction Service로 웹훅을 재발송 하라는 요청을 전송합니다.
   Transaction Service는 간단한 Validation 이후 고객사 서버로 웹훅을 재발송합니다.
   이 때, 성공하면 프로세스가 완료되며 다시 실패한 경우 3번 로직으로 돌아갑니다.
   그리고 Transaction Webhook Service로 처리가 완료되었다는 응답을 전송합니다.

6. 웹훅 재발송에 대한 응답을 받습니다.

7. 처리한 메시지를 삭제합니다. 웹훅의 성공 여부와 관계없이 정상적으로 응답이 오기만 했다면
   해당 재발송 이벤트는 이미 처리된 것이기 때문에 메시지를 삭제해도 문제 없습니다.
   만약 웹훅이 실패했다면, 다음 재발송 이벤트를 위한 SQS 메시지는 Transaction Service가 새롭게 전송했을 것입니다.

포트원 V2 코어에서는 위와 같은 아키텍처로 앞서 설명한 요구사항들을 모두 만족시키는 웹훅 시스템을 구현할 수 있었습니다.

## 마무리

지금까지 포트원의 결제 기능에서 핵심적인 역할을 하는 웹훅에 대해 알아보았으며, V2 시스템에서
안전하고 효과적으로 웹훅을 제공하기 위해 시도한 여러 가지 고도화 방법들을 탐구해보았습니다.

V2는 이러한 웹훅 시스템 고도화를 통해 고객의 결제 데이터 손실을 최소화하고, 고객사 서버의 장애
상황으로 인한 웹훅 재시도 상황에서도 트래픽 부하를 매우 효율적으로 관리할 수 있게 되었습니다.

이 글을 통해 소개한 웹훅 시스템의 고도화 이외에도, 포트원의 V2 시스템은 다양한 기술적 도전과 혁신을
통해 계속해서 발전하고 있으며, 앞으로 더 많은 주제와 기술적 성과들을 여러분과 공유할 예정입니다.
포트원의 기술 여정에 여러분을 초대하며, 다음 주제에 대한 기대감을 가져주시길 부탁드립니다. 저희는
여러분과 함께 성장하며, 더 나은 서비스를 제공하기 위해 끊임없이 노력할 것입니다. 다음 주제에서
뵙겠습니다!


# https://developers.portone.io/blog/posts/2024-02/v2-zio

---
title: 포트원 V2 이야기 - Scala와 ZIO로 안정적인 결제 시스템 만들기
description: 안정적인 결제 시스템을 만들기 위해 기술적으로 의사결정한 내용에 대해 소개합니다.
author: BaekGeunYoung
date: 2024-02-28T15:00:00.000Z
tags:
  - Core V2
  - Backend
  - Scala
  - ZIO
---

## 포트원 라이트닝 프로젝트

지난 10년간 포트원은 고객에게 ‘편리한 결제 연동 경험’을 제공했고, 지금까지 많은 사랑을 받고 있습니다.
많은 서비스들이 연동의 편의성을 강조하며 모듈을 출시하고 있지만, 연동 편의성은 오랜 노하우를 축적한 포트원이 가장 잘하는 영역입니다.
2023년 하반기, 포트원은 혁신적인 결제 경험을 위해 새로 ‘라이트닝 프로젝트’에 돌입했습니다.

_'연동 방식, 지금이 과연 최선의 방법일까?'_

_'결제 연동을 진행하는 개발자들이 시스템을 더 쉽게 이해하려면 어떻게 해야 할까?'_

_'휴먼 에러를 가장 효과적으로 줄일 수 있는 방법은 무엇일까?'_

지금까지의 운영 경험을 바탕으로 포트원을 연동하는 개발자들이 더욱 쉽게 시스템을 이해하고 결제를 연동할 수 있도록,
내부 시스템 개선으로 더 많은 결제 트래픽을 수용할 수 있는 새로운 V2 결제 모듈을 만들었습니다.

야심찬 목표를 가지고 시작한 프로젝트인 만큼, 개발 조직에서 목표를 달성하기 위해 어떤 기술적 노력들을 했는지
"포트원 V2 이야기"라는 대주제로 기술블로그를 통해 많은 분들과 공유하고자 합니다.
그 이야기의 첫 시작으로 이번 글에서는 포트원 V2의 코드베이스를 구성하고 있는 가장 근본적인 기술들에 대해 이야기해보고자 하는데요,
크게 2가지 정도로 기술의 갈래를 나누어볼 수 있을 것 같습니다.

- **Programming Language: Scala**
- **Effect System: ZIO**

## Programming Language: Scala

프로그래밍 언어는 저마다 다른 철학과 특징을 가지고 있으며, 이로 인해 각각의 언어는 서로 다른 영역에서 효과적으로 활용될 수 있습니다.
어플리케이션이 만족해야 하는 거시적인 요구사항에 따라 적절한 프로그래밍 언어를 선택하는 것은 단순히 개발을 넘어 비즈니스 관점에서도 매우 중요한 의사결정 문제입니다.
프로그래밍 언어를 선택하기에 앞서, 포트원의 결제 모듈은 어떤 요구사항을 만족해야 하는지를 먼저 알아보겠습니다.

1. **버그 없는 제품을 만들어야 합니다.**

포트원은 결제 시스템이기 때문에 버그에 매우 민감합니다.
제품이 의도대로 동작하지 않을 시 포트원의 고객사는 즉시 금전적인 손해를 입게 될 것입니다.
인간에 의한 버그 발생 가능성을 최소화할 수 있도록, 코드의 예측 가능성과 테스트 용이성을 극대화할 수 있는 언어를 선택해야 합니다.

2. **제품을 빠른 속도로 발전시킬 수 있어야 합니다.**

포트원은 디지털 커머스 회사들의 성장을 가속화하고자 하는 미션을 가지고 있습니다.
급성장하는 이커머스 시장의 트렌드에 맞게, 포트원은 고객사의 성장을 돕는 결제 관련 핵심 기능들을 앞으로 매우 많이, 빠르게 만들어 제공해야 합니다.
이러한 요구사항을 만족하기 위해 우리는 추상화와 모듈화를 가능케 하는 언어를 선택함으로써 유지보수 용이성을 높이고, 핵심 비즈니스 영역에만 집중할 수 있습니다.
또한 보일러 플레이트 코드를 줄여 개발 생산성을 높일 수 있는 메타프로그래밍 지원까지 있다면 매우 좋을 것 같습니다.

포트원 개발팀은 이러한 요구사항을 만족하는 언어로 [스칼라(Scala)][scala]를 선택했습니다.
Scala는 국내에서는 많이 쓰이지 않는 생소한 언어이지만 포트원의 결제 모듈을 만들기에 적합한 특징을 많이 가지고 있는데, 그 특징에 대해 하나씩 소개해보겠습니다.

### Multi-paradigm 지원 (OOP + FP)

#### OOP 지원

Scala는 OOP(Object Oriented Programming, 객체 지향 프로그래밍)를 지원합니다.
Scala는 Java Bytecode로 컴파일되어 JVM 위에서 실행되는 언어인데, Java와 완전히 같지는 않지만 비슷한 방식으로 Inheritance(상속) 기능을 제공합니다.
Inheritance는 객체의 인터페이스와 구현체를 분리할 수 있는 OOP의 핵심 기능으로, 이 기능을 통해 관심사를 분리하고 적절한 추상화를 달성할 수 있습니다.

Inheritance를 이용한 관심사의 분리를 예시 코드로 알아보겠습니다.
포트원은 다양한 방식의 결제를 지원하며, 그 중 본인인증을 별도로 거치지 않고 카드 정보만으로 즉시 결제가 이루어지는 수기(키인)결제 방식이 존재합니다.
수기결제의 비즈니스 로직을 먼저 한글로 풀어보겠습니다.

1. 수기결제를 시작한다는 내용의 이벤트 저장
2. 사용자가 넘긴 channel key를 이용해 채널(PG사별 연동 정보가 담긴 엔티티)을 얻어오기
3. 채널 정보 요청 결과를 이벤트로 저장
4. 채널을 이용해 PG사에 수기결제 요청하기
5. 수기 결제 요청 결과를 이벤트로 저장

중간중간 이벤트를 저장하는 부분이 눈에 띄는데, 이는 포트원 V2 모듈이 Event Sourcing이라는 디자인 패턴을 활용하고 있기 때문입니다.
이 패턴에 대해서는 추후에 별도 주제로 다루겠습니다.

위 비즈니스 로직을 실행하기 위해 아래와 같이 3가지의 인터페이스가 필요합니다.

```scala
// 이벤트 저장
trait Persist[Evt] {
  def apply(events: Evt*): UIO[Unit]
}

// 채널 정보 가져오기
trait ChannelService {
  def fetchChannel(
      storeId: Store.Id,
      channelKey: NonEmptyString
  ): IO[FetchChannelError, Channel]
}

// PG사에 수기(키인)결제 요청하기
trait InstantPayGatewayService {
  def pay(
      base: Base,
      channel: Channel,
      paymentMethodForm: InstantPaymentMethodForm,
  ): IO[InstantGatewayService.Failure, PayResponse]
}
```

해당 인터페이스의 구현체 코드까지 본 글에서 소개하진 않겠습니다만, 분명 구현체 코드들은 특정 기술이나 프로토콜, 외부 서비스 등에 의존한 채로 작성될 것입니다.
핵심 비즈니스 로직을 작성할 때는 구현에 대한 세부사항을 모른 채로 해당 함수들의 시그니쳐에만 의존해서 로직을 작성할 수 있습니다.

```scala
for {
  // 1. 수기결제를 시작한다는 내용의 이벤트 저장
  _ <- persist(Event.CommandReceived(id, form, store, customer, paymentMethodForm))

  // 2. 사용자가 넘긴 channel key를 이용해 channel 얻어오기
  channel <- channelService
               .fetchChannel(store.id, form.channelKey)
               .flatMapError(e => fail(Event.FetchingChannelFailed(form.channelKey, e)))

  // 3. 채널 정보 요청 결과를 이벤트로 저장
  _ <- persist(Event.FetchingChannelSucceeded(channel))

  // 4. 채널을 이용해 PG사에 수기결제 요청하기
  resp <- instantGatewayService
            .pay(base, channel, paymentMethodForm)
            .flatMapError(e => failWithWebhook(base, channel, Event.TgsFailed(e)))

  // 5. 수기 결제 요청 결과를 이벤트로 저장
  _ <- persist(Event.TgsSucceeded(resp))

  ...
} yield ??
```

#### FP 지원

Scala는 위에서 확인한 것처럼 OOP도 지원하지만 FP(Functional Programming, 함수형 프로그래밍) 패러다임 또한
동시에 지원한다는 큰 특징을 가지고 있습니다.
1985년 발표된 John Hudges의 [**“Why Functional Programming Matters”**][why-fp-matters] 라는 논문에서는
아래와 같이 Functional Programming의 주요 특징 및 장점을 요약하고 있습니다.

> **Why Functional Programming Matters 인용**
>
> Functional programs contain no assignment statements,
> so variables, once given a value, never change.
> More generally, functional programs contain no side-effects at all.
> A function call can have no effect other than to compute its result.
> This eliminates a major source of bugs, and also makes the order of execution irrelevant — since
> no sideeffect can change an expression’s value, it can be evaluated at any time.
> This relieves the programmer of the burden of prescribing the flow of control.
> Since expressions can be evaluated at any time, one can freely replace variables
> by their values and vice versa — that is, programs are “referentially transparent”.
> This freedom helps make functional programs more tractable
> mathematically than their conventional counterparts.

다시 말해 함수형 프로그래밍이란 부수 효과가 없는 순수 함수를 중심으로 코드의 예측 가능성과 재사용성을 높이는 프로그래밍 방식을 뜻합니다.
부수 효과의 대표적인 예시로는 Exception이 있는데, 어떤 함수가 내부 구현에서 throw하는 Exception은
함수의 시그니쳐에 드러나지 않기 때문에 함수를 순수하지 않게 만듭니다.
(Java의 경우 `throws` 키워드를 이용해 특정 Checked Exception의 발생 가능성을 표현하는 등,
일부 언어에서는 Exception에 국한된 Effect System을 언어 차원에서 제공하기도 합니다.)
함수형 프로그래밍 패러다임에서는 일반적으로 `Either` 라는 타입을 리턴 타입으로 사용해 에러의 발생 가능성을 표현하고 함수를 순수하게 만들 수 있습니다.
아래는 클라이언트가 넘겨준 request를 우리의 도메인 모델로 변환하는 코드의 예시입니다.
도메인 모델마다 제약 사항이 있으므로, 클라이언트의 request를 변환할 때 실패할 가능성이 있을 것입니다.
이를 `Either[Errors, SomeDomainType]` 라는 타입으로 표현할 수 있고, 이 타입을 리턴하는 `decode` 함수를 만들어 사용할 수 있습니다.

```scala
// raw String을 Store.Id 타입으로 변환합니다. (실패할 수 있음을 Either 타입으로 표현)
def decodeStoreId(raw: String): Either[Error, Store.Id] = ???

// raw String을 Payment.Id 타입으로 변환합니다. (실패할 수 있음을 Either 타입으로 표현)
def decodePaymentId(raw: String): Either[Error, Payment.Id] = ???
```

그리고 `Either` 는 `flatMap` 함수를 통한 chaining을 지원하는데, 이를 이용해 request의 여러 필드들을 차례로 변환하는 코드를 작성할 수 있습니다.
(가독성을 위해 Scala의 [for-comprehension][]을 이용했습니다.)

```scala
// request.storeId와 request.paymentId를 각각 적절한 도메인 타입으로 변환합니다.
// 둘 중 하나라도 변환에 실패하면 해당 타입은 에러를 담고 있을 것입니다.
val validated: Either[Error, (Store.Id, Payment.Id)] =
  for {
    storeId   <- decodeStoreId(request.storeId)
    paymentId <- decodePaymentId(request.paymentId)
  } yield (storeId, paymentId)
```

이렇게 Exception을 사용하지 않고 `Either` type을 이용하면 어떤 코드 블락이 어떤 에러들을 리턴할 수 있는지를
타입을 통해 명확히 문서화할 수 있고, 코드의 플로우에 대한 예측 가능성이 한 층 향상된다는 장점이 있습니다.
이 부분에서는 Exception이라는 부수 효과를 type으로 encoding하는 방법에 대해 간략히 소개드렸지만, 실제로는 훨씬 더 많은 종류의 부수 효과가 존재합니다.
(외부 리소스의 획득 및 해제, mutable 변수의 값 변경, I/O operation 등등…)
이러한 모든 부수 효과를 타입으로 표현하고자 하는 시스템을 Effect System이라고 부르는데, 이에 대해서는 뒷부분에서 다시 자세하게 설명하겠습니다.

### 강력한 매크로 지원

Scala는 소스의 [AST(Abstract Syntax Tree)][ast]에 접근하고, 수정하고, 새로운 AST를 만들어낼 수 있는 강력한 매크로 기능을 지원합니다.
매크로를 적절히 이용하면 여러 곳에서 기계적이고 반복적으로 작성해야만 하는 코드의 양을 획기적으로 줄일 수 있고, 이를 통해 개발 생산성의 향상을 도모할 수 있습니다.

포트원에서는 마이크로서비스들 간의 통신에서 gRPC를 사용하고 있는데, 응답으로 나가는
protobuf message를 정의할 때 아래와 같은 형식을 따르도록 컨벤션을 맞추었습니다.

```proto
message SomeResponse {
  oneof result {
    Error error = 1;
    Data data = 2;
    ...
  }

  message Error {
    oneof error {
      // ex) InvalidArgument invalid_argument = 1;
      [ErrorName] [error_name] = 1;
      [ErrorName] [error_name] = 2;
      ...
    }
  }

  message Data {
    ...
  }
}
```

준수한 표현력을 가진 message이지만, 이를 통해 자동 생성된 Scala class 정의에 맞게
응답을 만들어주기 위해서는 아래와 같이 복잡한 객체 생성 코드를 작성해야 합니다.

```scala
val invalidArgument =
  SomeResponse(
    SomeResponse.Result.Error(
      SomeResponse.Error(
        SomeResponse.Error.Error.InvalidArgument(InvalidArgument()),
      ),
    ),
  )
```

어떤 RPC가 여러 개의 에러를 발생시킬 가능성이 있다고 하면, 에러가 발생하는 경우마다 모두 이런 복잡한 에러 응답 생성 코드를 작성해야 할 것입니다.
아래 코드는 포트원 V2에 존재하는 `빌링키 삭제` 기능에서, 경우에 맞게 에러 응답을 만들어주는 코드 예시입니다.

```scala
private def mapDeleteSchedulesError(failure: ScheduleService.DeleteFailure): DeleteSchedulesResponse =
  failure match {
    case ScheduleService.DeleteFailure.BillingKeyDeleted(_)  =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.BillingKeyAlreadyDeleted(grpc.BillingKeyAlreadyDeleted()),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.BillingKeyNotFound(_) =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.BillingKeyNotFound(grpc.BillingKeyNotFound()),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.NotFound(ids)         =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.BillingKeyNotFound(grpc.BillingKeyNotFound()),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.AlreadyDeleted(ids)   =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.ScheduleAlreadyDeleted(grpc.ScheduleAlreadyDeleted(ids)),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.AlreadyProcessed(ids) =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.ScheduleAlreadyProcessed(grpc.ScheduleAlreadyProcessed(ids)),
          ),
        ),
      )
  }
```

클래스 간의 계층 구조가 매우 복잡하기 때문에 이러한 코드는 결코 쉽게 작성할 수 없으며, 각각의 RPC에 존재하는 메세지가
하나의 추상 클래스로 묶이는 것도 아니기 때문에 일반적인 방법으로는 해당 코드를 공통화하는 것도 불가능합니다.

하지만 이 코드들은 분명한 패턴을 가지고 있기 때문에 기계적으로 작성할 수 있고, 그렇다면 매크로를 사용해 코드 생성을 자동화하는 것이 가능합니다.
매크로를 사용하면 위 코드를 아래와 같이 단순하게 만들 수 있습니다.
(해당 매크로의 구현은 다소 복잡하기 때문에 본 글에서 소개하지는 않고, 매크로를 주제로 한 별도의 글로 추후에 다시 소개하겠습니다.)

```scala
private def mapDeleteSchedulesError(failure: ScheduleService.DeleteFailure): DeleteSchedulesResponse =
  failure match {
    case ScheduleService.DeleteFailure.BillingKeyDeleted(_)  =>
      genErrorResponse[DeleteSchedulesResponse](grpc.BillingKeyAlreadyDeleted())
    case ScheduleService.DeleteFailure.BillingKeyNotFound(_) =>
      genErrorResponse[DeleteSchedulesResponse](grpc.BillingKeyNotFound())
    case ScheduleService.DeleteFailure.NotFound(ids)         =>
      genErrorResponse[DeleteSchedulesResponse](grpc.ScheduleNotFound(ids))
    case ScheduleService.DeleteFailure.AlreadyDeleted(ids)   =>
      genErrorResponse[DeleteSchedulesResponse](grpc.ScheduleAlreadyDeleted(ids))
    case ScheduleService.DeleteFailure.AlreadyProcessed(ids) =>
      genErrorResponse[DeleteSchedulesResponse](grpc.ScheduleAlreadyProcessed(ids))
  }
```

## Effect System: ZIO

Scala는 강력한 타입 시스템을 탑재한 것으로 잘 알려져 있습니다.
Effect System 은 타입 시스템의 확장으로, 어떤 프로그램이 실행되는 과정에서 발생할 수 있는 부수 효과들 또한 타입으로 표현하는 시스템을 말합니다.
Effect System을 이용하면 코드가 어떤 부수 효과를 가지고 있는지 명시적으로 표현할 수 있으므로
버그 발생 가능성을 낮추고 예측 가능성을 높인다는 기존 타입 시스템의 장점을 강화할 수 있으며,
더불어 effect를 type으로 추상화함으로써 재사용성과 테스트 용이성을 높일 수 있습니다.
위에서 소개한 `Either` 또한 실패 타입을 명시하고 Exception이라는 부수 효과를 제거할 수 있으므로 Effect System의 일부라고 할 수 있지만,
현실 세계에서는 Exception 이외에도 훨씬 많은 종류의 부수 효과가 존재합니다.
(I/O operation, mutable 변수의 값 변경, 외부 리소스의 획득/해제 등..)
이러한 모든 종류의 부수 효과를 타입으로 표현하는 Effect System 라이브러리가 Scala 진영에는 다수 존재했으며,
부수 효과를 명시적으로 표현하고 제어할 수 있다는 점은 버그가 없는 어플리케이션을 만들어야 하는 포트원의 상황에 잘 적용될 수 있다고 생각해
Effect System을 도입하기로 결정했습니다.

많은 Effect System 라이브러리 중 [ZIO][zio]는 가장 늦게 만들어졌음에도 불구하고 효율적인 런타임 구현과 실용적인 API로 많은 사랑을 받으며
최근 Scala 진영에서 가장 인기 있는 Effect System 라이브러리가 되었습니다.

(이미지 첨부: Scala Effect System별 GitHub Star History)

모든 기술이 그렇듯 Effect System 또한 장점만을 가지고 있는 것은 아닙니다.
Effect System을 이용하게 되면 함수가 가지고 있는 부수 효과의 종류에 따라 적절한 Effect Type 을 매번 골라야 하며
하나의 함수가 여러 종류의 부수 효과를 동시에 가지고 있는 경우 타입 구성이 복잡해져 오히려 유지보수 용이성을 떨어뜨리고
의도치 않게 runtime overhead 를 발생시키는 등의 단점 또한 존재합니다.
ZIO 는 이러한 단점을 보완하기 위해 많은 프로그램에서 흔히 사용되는 부수 효과들을 하나로 합쳐
다양한 상황에서 보편적으로 사용할 수 있는 단 하나의 Effect Type 을 제공합니다.
이 type 의 이름은 라이브러리 이름과 동일한 `ZIO` 이고, 해당 함수의 타입 파라미터 구성은 아래와 같습니다.

### `ZIO[R, E, A]`

- **R - Environment Type**. 해당 Effect 가 R type 의 의존성을 필요로 한다는 의미입니다.
- **E – Failure Type**. 해당 Effect 는 E type 의 값으로 실패할 수 있다는 의미입니다.
- **A – Success Type**. 해당 Effect 는 A type 의 값으로 성공할 수 있다는 의미입니다.

한마디로 `ZIO[R, E, A]` 타입은 `R` type 의 의존성을 필요로 하며, 실패했을 때는 `E` type 의 값을 produce하고
성공했을 때는 `A` type의 값을 produce하는 어떤 Effect를 의미합니다.
다시 말해 해당 타입은 `R => Either[E, A]` 타입의 effectful 한 버전이라고 할 수 있습니다.

### ZIO는 데이터 타입에 불과하다

ZIO는 순수 함수형 Effect System으로 함수형 프로그래밍 철학을 충실히 따르고 있으며,
ZIO data type은 그 자체로는 아무런 부수 효과를 발생시키지 않는 정적인 data type입니다.
그렇기 때문에 ZIO를 이용해 작성한 함수는 부수 효과를 실제로 발생시키는 것이 아닌 부수 효과를 “서술”하는 일을 하게 되며,
단순히 ZIO의 data type을 만드는 일을 하게 됩니다.
그렇게 만들어진 ZIO는 동작에 대한 서술을 모두 담고 있어 나중에 원할 때면 언제든 평가(evaluation)될 수 있으며,
이미 만들어진 ZIO를 다른 ZIO와 합치거나 반복/재시도 등의 새로운 기능을 덧붙이는 등의 작업을 매우 안전하고 손쉽게 할 수 있습니다.

이렇게 동작에 대한 서술(description)과 평가(evaluation)을 분리하는 테크닉을 Lazy Evaluation이라고 합니다.
우리는 Lazy Evaluation을 통해 **코드의 합성 가능성/유지보수 용이성/예측 가능성 등을 극대화**할 수 있게 됩니다.

### **ZIO를 이용해 Effect 조립하기**

동시성 프로그래밍 혹은 비동기 프로그래밍을 할 때 이러한 Lazy Evaluation을 잘 활용할 수 있는데,
포트원 콘솔을 통해 가입한 상점의 정보를 얻어오는 코드를 예시로 들어보겠습니다.
기본적인 상점 정보와 더불어 결제에 관한 구체적인 정보도 가져와야 하는데,
이 둘은 각각 `getStore`와 `getPaymentSettings` 라는 RPC를 호출하여 가져올 수 있습니다.

```scala
val getStore: IO[StatusException, GetStoreResponse] =
  storeService.getStore(getStoreRequest)

val getPaymentSettings: IO[StatusException, GetPaymentSettingsResponse] =
  storeService.getPaymentSettings(getPaymentSettingsRequest)
```

위 코드에서 주목할 점은 두 RPC가 리턴하는 타입이 `Response`가 아니라 `IO[StatusException, Response]` 라는 점입니다.
해당 RPC들은 실제로 부수 효과를 발생시키는 것이 아닌, 부수 효과를 서술하는 ZIO 타입을 리턴하고 있습니다.
(`IO[E, A]` 타입은 `ZIO[Any, E, A]` 타입의 alias입니다.)
Functional Effect System을 사용하지 않는 코드라면 아마 `getStore` 와 `getPaymentSettings` 함수를
호출하는 즉시 I/O가 발생할 것이고, 이 두 I/O는 병렬화되지 못하고 순차적으로 발생할 것입니다.
하지만 우리는 ZIO 타입을 이용해 함수를 순수하게 만들었으므로 이 Effect들을 우리가 원하는대로 조립할 수 있습니다.

```scala
val getStore: IO[StatusException, GetStoreResponse] =
  storeService.getStore(getStoreRequest)

val getPaymentSettings: IO[StatusException, GetPaymentSettingsResponse] =
  storeService.getPaymentSettings(getPaymentSettingsRequest)

// Effect 조립하기: zipPar(2개의 Effect를 concurrent하게 실행)를 이용
val getStoreAndSettings = getStore.zipPar(getPaymentSettings)
```

위 예시는 두 개의 작업을 동시에 실행해 결과를 Tuple로 모으는 코드라면, 두 개의 작업을 동시에 실행한 후 먼저 도착한 것만 취하고
다른 작업의 실행을 즉시 취소하는 코드는 어떻게 작성할 수 있을까요?
실행 흐름 간 경쟁을 Effect System 없이 구현하려면
훨씬 더 복잡하고 난해한 low level API를 이용해 로직을 작성해야 할 것입니다.
아래는 Java에서 스레드 간 경쟁을 구현하는 코드입니다.

```java
import java.util.Random;
import java.util.concurrent.CountDownLatch;

public class RaceExample {
  public static void main(String[] args) throws InterruptedException {
    Random rand = new Random();
    int numThreads = 2; // 2개의 스레드 생성
    CountDownLatch latch = new CountDownLatch(1);

    WorkerThread[] threads = new WorkerThread[numThreads];

    for (int i = 0; i < numThreads; i++) {
      threads[i] = new WorkerThread(i, latch, rand);
      threads[i].start();
    }

    // 두 개의 스레드 중 먼저 완료되는 한 스레드만을 기다립니다.
    latch.await();

    // 아직 실행 중인 다른 하나의 스레드를 interrupt 합니다.
    for (int i = 0; i < numThreads; i++) {
      if (!threads[i].isDone()) {
        threads[i].interrupt();
      }
    }
  }

  static class WorkerThread extends Thread {
    private int id;
    private CountDownLatch latch;
    private volatile boolean done = false;
    private Random rand;

    public WorkerThread(int id, CountDownLatch latch, Random rand) {
      this.id = id;
      this.latch = latch;
      this.rand = rand;
    }

    @Override
    public void run() {
      try {
        // 스레드에서 특정 작업을 수행합니다.
        System.out.println("[Thread " + id + "] COMPLETED");
        done = true;
      } catch (InterruptedException e) {
        System.out.println("[Thread " + id + "] INTERRUPTED");
      } finally {
        latch.countDown(); // CountDownLatch 를 감소시켜 작업이 완료됐음을 알립니다.
      }
    }

    public boolean isDone() {
      return done;
    }
  }
}
```

얼핏 봐도 상당히 복잡해보이는 코드입니다.
Java의 Thread와 CountDownLatch, volatile 키워드 등 난해한 low level API를
많이 사용해야 하므로 이는 생산성을 떨어뜨리고 버그의 발생 가능성을 높입니다.
ZIO를 이용하면 `raceEither` 함수를 이용해 동시 작업 간 경쟁 코드를 쉽고 안전하게 구현할 수 있습니다.
(Java의 Thread는 void 값만을 리턴하는 반면 ZIO는 실행이 완료된 후 type-safe하게 값을 리턴한다는 점도 큰 장점입니다.)

```scala
// raceEither를 이용하여 먼저 실행이 완료된 ZIO만 취하기
val getStoreOrSettings = getStore.raceEither(getPaymentSettings)
```

### ZIO를 이용해 반복 작업 구현하기

특정한 작업을 우리가 원하는 주기로 반복하고 싶은 경우에는 어떻게 해야 할까요?
ZIO에서는 실행 계획을 추상화한 `Schedule` 객체를 제공하고 있어, 적절한 Schedule을 만들고 이를 ZIO에 적용하기만 하면 됩니다.
아래의 코드는 ZIO에서 제공하는 기본적인 Schedule 생성 함수의 예시입니다.

```scala
// 예시1) 딜레이 없이 5회 반복
val recurs = Schedule.recurs(5)

// 예시2) 10ms의 주기로 영원히 반복
val spaced = Schedule.spaced(10.milliseconds)

// 예시3) 10ms에서 시작해 exponential하게 주기를 늘려가며 반복
val exponential = Schedule.exponential(10.milliseconds)
```

또한 아래와 같이 실행 계획을 합성할 수도 있습니다.

```scala
// 예시 1) 1초 간격으로 10번 동안 반복
val schedule = Schedule.recurs(10) && Schedule.spaced(1.second)

// 예시 2) 반복 주기를 exponential하게 증가시키되, 최대 주기는 10초
val schedule = Schedule.exponential(100.milliseconds) && Schedule.spaced(10.second)

// schedule을 이용하여 ZIO를 반복 실행하기
val getStoreRepeatedly =
  storeService.getStore(getStoreRequest).schedule(schedule)
```

지금까지 ZIO를 이용해 함수의 부수 효과를 제거하고,
ZIO는 순수한 데이터 타입이라는 점을 이용해 ZIO를 자유롭게 합성하고 조작하는 방법에 대해 알아보았습니다.
처음엔 이러한 접근법이 다소 낯설게 느껴질 수 있으나,
타입으로 효과를 표현한다는 것은 이미 여러번 언급했듯이 함수가 하는 일을 훨씬 더 명시적으로 표현하여
버그의 발생 가능성을 낮추고 코드의 예측 가능성을 높이는 데 기여합니다.
실제로 ZIO 라이브러리를 꽤 오랜 기간 동안 사용하면서 그 실효성과 사용성을 검증해 온 포트원 개발팀의 입장에서는
Effect System을 도입하기로 한 것이 초반의 러닝 커브를 감안하고도 적절한 의사결정이었다고 생각하고 있습니다.

흔히 라이브러리는 외부 의존성으로 취급되어 어플리케이션을 만들 때면 이 라이브러리 의존성을 격리하여 언제든 대체할 수 있는 형태로 아키텍쳐를 구성하곤 합니다.
그러나 Effect System 을 사용하게 되면 프로젝트 도처에 해당 의존성을 가지는 코드가 존재하게 되므로 Effect System 라이브러리는
사실상 프로젝트를 구성하는 핵심 요소로 기능하게 될 것입니다.
대체하기가 힘든 만큼, 우리가 사용하는 Effect System은 효과적인 런타임과 사용성 있는 API를 제공해야 하며,
해당 Effect System을 중심으로 견고한 생태계가 형성되어 있어야 합니다.
ZIO는 그러한 조건에 잘 부합하는 Effect System이었고 현재까지는 아주 만족스럽게 사용 중입니다.

## 마무리

이번 글에서는 포트원 V2 이야기의 첫 시작으로, 포트원 V2 모듈의 코드베이스를 구성하고 있는 핵심 기술들에 대해 살펴보았습니다.
포트원은 수많은 고객사의 결제 요청을 감당해야 하는 시스템인 만큼 버그 없이 안정적으로 서빙할 수 있어야 하며,
디지털 커머스 회사들의 성장을 가속화한다는 포트원의 미션에 맞게 더 혁신적인 기능들을 빠르게 추가할 수도 있어야 합니다.
이러한 요구사항을 만족하기 위해 신중한 고민을 거쳐 의사결정을 했고, 그렇게 탄생한 포트원 V2 모듈은 수많은 디지털 커머스 회사들과 함께할 준비를 마쳤습니다.
포트원 V2에서는 커머스 회사들이 결제와 관련된 고민을 덜 수 있도록 멋진 기능들을 많이 출시할 예정이니, 앞으로 포트원 V2 모듈의 행보를 지켜봐주세요!

[scala]: https://scala-lang.org/

[why-fp-matters]: https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf

[for-comprehension]: https://docs.scala-lang.org/tour/for-comprehensions.html

[ast]: https://en.wikipedia.org/wiki/Abstract_syntax_tree

[zio]: https://zio.dev/


# https://developers.portone.io/blog/posts/2024-07/v2-event-sourcing-basic

---
title: 포트원 V2 이야기 - Event Sourcing으로 결제 시스템 만들기 (기본편)
description: 포트원 V2 시스템의 근간을 이루고 있는 기술 중 하나인 Event Sourcing에 대해 소개합니다.
author: BaekGeunYoung
date: 2024-07-07T15:00:00.000Z
tags:
  - Core V2
  - Backend
  - Event Sourcing
---

안녕하세요. 포트원 V2 이야기로 다시 돌아온 포트원 엔지니어 Kai입니다.
포트원 V2 시스템을 구성하고 있는 핵심 기술들 중 이번에 소개해 드릴 것은 Event Sourcing이라는 기술입니다.
Event Sourcing이 무엇인지, 포트원이 결제 시스템을 구축하는 데에 왜 이 기술을 도입하기로 결정했는지,
도입을 결정하면서 함께 신경 쓴 것들은 무엇인지, 직접 기술을 적용하면서 느낀 챌린지는 무엇인지 등에 대해 정리해 보도록 하겠습니다.
(참고로 Event Sourcing에 관한 글은 기본편과 심화편으로 나누어 업로드될 예정입니다!)

## Event Sourcing이란?

Event Sourcing이란 DB에 데이터를 저장하는 방식에 관한 기술입니다.
일반적으로 백엔드 어플리케이션을 만들 때, DB에는 보통 State(상태)를 저장하곤 합니다.
이러한 방식은 직관적이어서 이해하기 쉽다는 장점이 있지만, 항상 엔티티의 최종 상태만을 담고 있기 때문에 변경된 기록을 정확하게 추적할 수 없고,
한 데이터에 대해 검색 및 변경 요청이 빈번하게 발생하기 때문에 동시성으로 인한 문제를 피하려 많은 고민을 해야 합니다.

반면 Event Sourcing 방식에서는 종 상태만을 저장하는 것이 아니라, 엔티티의 상태를 변경하기 위해 발생하는 하나하나의 사건(Event)들을 모두 DB에 저장합니다.
때문에 특정 엔티티에 대한 변경 내역을 모두 추적할 수 있으며, 이벤트는 한 번 발생한 이후 수정되지 않기 때문에 Update나 Delete 없이 항상 Insert 작업만 일어납니다.

## 결제와 Event Sourcing

포트원은 이러한 Event Sourcing이라는 기술을 왜 도입하기로 결정했을까요?
아시다시피 포트원은 오랜 시간 동안 PG 통합 결제 모듈을 제공해왔고 그동안 많은 시행착오와 노하우를 쌓아왔습니다.
Event Sourcing을 사용하기로 결정하는 데에는 기존의 시스템을 운영하면서 가지고 있던 아쉬움들이 큰 영향을 주었는데요,
크게 두 가지 정도를 소개 드릴 수 있을 것 같습니다.

### 1. 정확한 내역 파악의 필요성

기존 시스템을 운영하면서 느꼈던 가장 큰 pain point는 결제건에 대한 변경 내역을 정확히 알 수 없다는 것이었는데요,
아래와 같이 구체적인 변경 내역을 물어오는 문의들이 여러 고객사로부터 자주 있었습니다.

- 어떤 결제건에 부분 환불 요청을 총 몇 번 / 각각 언제 했는지
- 어떤 결제건의 특정 타입의 웹훅이 몇 번 재시도 되었는지
- 어떤 결제건의 PG사 승인 응답 전문이 무엇인지

기존에는 이러한 문의가 들어오면 로그를 확인해 보곤 하는데, 로그는 영원히 검색 엔진에 올려둘 수가 없기 때문에
시간이 오래 지난 변경 내역은 확인하기가 힘듭니다. 따라서 완벽한 답변을 드릴 수 없었던 경우도 종종 있었는데,
Event Sourcing을 도입하게 되면 엔티티에 가해진 모든 이벤트가 DB에 저장되기 때문에 이렇게 맥락 파악을 요청하는 문의에 완벽하게 대응할 수 있을 것이라고 생각했습니다.
또한 포트원은 데이터를 기반으로 여러 가지 인사이트를 제공하고 운영 효율화를 도와줄 수 있는 B2B SaaS 기업으로의 도약을 계획하고 있었는데,
이러한 상황에서 Event Sourcing 방식으로 쌓인 풍부한 raw data는 앞으로 포트원의 발전을 뒷받침할 든든한 뿌리가 될 것이라고 생각했습니다.
종합해 보면, 무엇보다 결제라는 행위는 돈을 주고받는 것이기 때문에 결제 서비스를 제공하는 입장에서 데이터를 최대한 정확하게 보관하는 것이 매우 중요하다고 생각하여 Event Sourcing이 매력적인 선택지로 다가왔던 것 같습니다.

### 2. 자유로운 스키마 발전의 필요성

기존 시스템이 갖고 있던 또 하나의 pain point는 DB Schema에 관한 것인데요,
아시다시피 포트원은 국내외의 여러 PG사 결제 모듈을 하나의 인터페이스, 하나의 플로우로 통합해 주는 PG 통합 연동 모듈을 제공하고 있습니다.
때문에 어떤 PG사를 포트원에서 추가적으로 지원하기 위해 작업을 할 땐 해당 PG사에서 지원하는 파라미터 목록을 확인한 후,
포트원에서 이미 정의한 파라미터로 맵핑할 수 있는지를 검사합니다. 만약 맵핑할만한 파라미터가 마땅히 존재하지 않는다면 포트원에서는 새로이 인터페이스에 파라미터를 추가하고 내부 디비에도 해당 데이터를 저장할 수 있도록 스키마를 발전시켜야 합니다.
포트원의 기존 시스템은 MySQL을 사용하고 있었고, DB 스키마의 지원을 받아 데이터를 정형화하여 관리하고 있었습니다.
때문에 스키마에 필드를 추가하고 싶을 땐 `ALTER TABLE ADD COLUMN` 과 같은 DDL을 실행해야 하는데요,
기술이 많이 발전했다고 해도 Online DDL 실행은 여전히 개발자들에게 어렵고 부담스러운 작업입니다.
처리해야 할 데이터의 양이 많다면 DDL 실행이 완료되기까지 시간이 굉장히 오래 걸릴 수 있으며,
그동안 DB Server의 자원을 많이 점유해 실 서비스에 영향을 줄 수도 있습니다.

반면 Event Sourcing을 하게 되면 DB Schema에 의존하지 않고 자체적인 Event 포맷 정의 및 직렬화/역직렬화 전략을 구성하게 되기 때문에 이러한 문제로부터 완전히 자유로울 수 있습니다.
사실 스키마를 자유롭게 구성할 수 있다는 점이 백엔드 개발에서 큰 장점이 되는 경우가 많지는 않은데,
포트원은 여러 PG사의 인터페이스를 통합하는 특성을 갖고 있기 때문에 이 점을 큰 장점으로 생각하게 되었습니다.

## Event Sourcing과 잘 어울리는 DB 고르기

### 1. Event Sourcing의 DB 접근 특징

Event Sourcing은 한마디로 DB에 최종 상태만을 저장하는 것이 아니라 개별 이벤트를 모두 저장하는 기술인데요,
이 때문에 어플리케이션에서 DB에 접근하는 패턴이나 DB를 다루는 방식이 어느 정도의 특징을 띠게 됩니다. 이를 대략적으로 정리해보면 아래와 같습니다.

- Update/Delete 없이 항상 Insert와 Select만 발생한다.
- 이벤트의 형태는 매우 다양하므로, DB Schema에 의존하지 않는 자체적인 Event 직렬화 전략이 필요하다.
- 쿼리가 다양하지 않고 단일하다. (Insert 쿼리 한 개, Select 쿼리 한 개)
- 상태가 아닌 개별 이벤트를 저장하므로 굉장히 많은 양의 데이터가 쌓인다.

### 2. 특징에 어울리는 DB 고르기

그리고 이러한 특징들과 잘 어울리는 DB로는 어떤 것이 있을까요?
이 특징들을 잘 서포트하는 DB를 고르기 위해서는 DB가 갖추어야 하는 기능과 갖추지 않아도 되는 기능을 정리해 볼 필요가 있습니다.

- Insert와 Select query만 발생하며 쿼리가 복잡하지 않음 → Transaction 지원이 그다지 필요하지 않음
- DB Schema를 활용해 데이터를 정형화할 필요가 없음 → Schemaless DB를 사용해도 무방
- 데이터가 매우 많이 쌓임 → Scale out이 자유로운 DB를 사용해야 함

위와 같은 요구사항을 잘 만족하는 DB는 무엇일까요?
많은 선택지가 있을 수 있겠지만 일반적으로 NoSQL DB를 우선 떠올릴 수 있습니다.
포트원에서도 Cassandra라는 NoSQL DB를 Event Sourcing을 위한 DB로 사용하고 있는데요,
Cassandra는 특히 peer-to-peer architecture를 갖는 Dynamo Style의 DB로 이론상 무제한에 가까운 Scalability를 제공하기 때문에 Event Sourcing에서 사용하기에 적합하다고 판단했습니다.

### 3. 이외 고려할 것들

물론 위에 적은 내용들만을 고려해서 DB를 선택할 수 있는 것은 아닙니다.
무엇보다 어플리케이션에 존재하는 모든 영속 엔티티를 Event Sourcing 방식으로 관리할 필요는 없기 때문에 보다 일반적인 용례를 커버할 수도 있어야 하는데,
이 점을 생각한다면 SQL 인터페이스를 제공하며 Transaction 지원도 되고 수평 확장도 용이한 [Google Spanner](https://cloud.google.com/spanner/)나 [CockroachDB](https://github.com/cockroachdb/cockroach) 등을 사용하는 것을 고려해 볼 수도 있습니다.
이러한 DB를 사용하지 않은 이유를 정리해 보면 크게 아래와 같습니다.

**1) 검증되지 않은 DB**

Google Spanner나 CochroachDB와 같이 NoSQL과 SQL의 장점을 융합하려는 시도는 비교적 최근에 이루어지고 있는 것이고, 해당 DB에 대해 아주 잘 알고 있는 개발자가 사내에 존재하는 것이 아니라면 충분히 검증된 다른 DB를 사용하는 것이 낫다고 판단했습니다.

**2) MSA 환경**

저희는 Microservice Architecture를 구성해두었기 때문에 Event Sourcing이 필요한 Bounded Context가 꽤 명확한 편이었습니다.
따라서 해당 Context 내에서는 Event Sourcing으로 커버하기 힘든 유스케이스가 거의 없다는 점도 의사결정의 주된 고려 사항이었습니다.

**3) AuroraDB 도입을 위한 환경이 이미 마련되어 있음**

저희 아키텍처의 다른 마이크로 서비스들은 모두 AuroraDB를 활발하게 사용하고 있었기 때문에 NoSQL로 커버할 수 없는 용례가 나타나더라도 언제든 AuroraDB를 쉽게 도입할 수 있었습니다.

결과적으로 저희는 대부분의 상황에서 NoSQL을 이용해 Event Sourcing을 하고 있고, 내부적으로 존재하는 사소한 유스케이스에 대해서는 AuroraDB를 사용하여 서비스를 운영하고 있습니다.

## Event Sourcing 구현 살펴보기

Event Sourcing의 특징과 의사결정 배경을 살펴보았으니, 이제 실제 구현에 대해서도 간단하게 살펴보겠습니다.
Event Sourcing은 생소한 기술이긴 하지만 핵심 아이디어 자체는 매우 간단합니다.
로직을 수행하는 과정에서 일어난 사건들을 이벤트로 저장하고, 이 이벤트들을 이용해 외부로 노출될 상태를 만들어내는 것입니다.
이러한 아이디어를 구현하는 데에 필요한 핵심적인 함수 두 가지가 있습니다.

- `commandHandler: (Command, State) => Response`
- `eventHandler: (State, Seq[Event]) => State`

이 두 함수에 대해 알아보기 이전에 `Command`, `Event`, `State`가 무엇인지를 먼저 설명하겠습니다.

- `Command`: 특정 로직의 수행을 지시하는 명령입니다. HTTP에 비유하자면 Request의 역할을 한다고 이해하시면 좋을 것 같습니다.
- `Event`: `Command`를 받아 로직을 수행하는 과정에서 발생하는 사건들을 표현하는 객체입니다. 이 `Event` 들은 DB에 저장되어 Single Source Of Truth의 역할을 합니다.
- `State`: 일련의 `Event`들이 모여 결과적으로 만들어지는 상태를 뜻합니다. 일반적으로 백엔드 애플리케이션에서 흔히 다루는 도메인 엔티티라고 생각하시면 됩니다.

기본적인 개념에 대해 알았으니, 이제 `commandHandler` 와 `eventHandler` 가 무엇인지는 쉽게 이해할 수 있을 것 같습니다.

- `commandHandler`: 현재 상태(State)에서 명령(Command)를 받아 도메인 로직을 수행하고, 응답을 리턴하는 함수입니다. 로직을 수행하는 과정에서 이벤트를 쌓을 때마다 `eventHandler`를 호출합니다.
- `eventHandler`: 현재 상태(State)에서 어떤 이벤트(Event)가 새로 쌓이게 되면 어떤 새로운 상태로 전이할지를 정의하는 함수입니다.

그다지 어렵지 않죠? `commandHandler`는 일반적인 어플리케이션에서 작성하는 도메인 로직과 유사하지만 DB에 상태를 직접 업데이트하는 것이 아니라 이벤트를 쌓을 뿐이고,
새롭게 쌓인 이벤트를 가지고 최신 상태를 만들어내는 코드가 `eventHandler`에 정의되는 것입니다. `commandHandler`의 예시를 하나 들어보겠습니다. 수기 결제 요청을 받아 수행하는 commandHandler입니다.

```scala
// commandHandler: 설명을 위해 단순화한 예시 코드입니다.
for {
  // 1. 수기결제를 시작한다는 내용의 이벤트 저장
  _ <- persist(Event.CommandReceived(id, form, store, customer))

  // 2. 사용자가 넘긴 channel key를 이용해 channel 얻어오기
  channel <- channelService
               .fetchChannel(store.id, form.channelKey)
               .flatMapError(e => fail(Event.FetchingChannelFailed(form.channelKey, e)))

  // 3. 채널 정보 요청 결과를 이벤트로 저장
  _ <- persist(Event.FetchingChannelSucceeded(channel))

  // 4. 채널을 이용해 PG사에 수기결제 요청하기
  result <- txGatewayService
            .payInstantly(base, channel, paymentMethodForm)
            .flatMapError(e => fail(base, channel, Event.TgsFailed(e)))

  // 5. 수기 결제 요청 결과를 이벤트로 저장
  _ <- persist(Event.TgsSucceeded(result))

  ...
} yield Response.Succeeded(result)
```

위 코드에서 `persist`함수를 호출할 때마다 DB에 이벤트가 쌓이게 되고, eventHandler를 거쳐 상태가 업데이트되는데요,
`persist`함수를 어떻게 주입하고 있는지도 확인해 보겠습니다.
eventHandler 역할을 하는 `handleEvent` 함수에서 상태가 어떻게 전이되는지 확인할 수 있습니다.

```scala
val persist = new Persist[E] {
  def apply(event: E): UIO[Unit] =
  for {
      state    <- current.get
      newState  = handleEvent(state, event)
      _        <- eventRepository.insert(entityId, state.sequenceNr, event)
      _        <- current.update(_ => newState)
    } yield ()
}

// eventHandler: 설명을 위해 단순화한 예시 코드입니다.
private def handleEvent(state: State, event: Event): State =
  (state, event) match {
    case (_: State.Empty, _: Event.CommandReceived)          => State.Initialized(???)
    case (_: State.Empty, _: Event.FetchingChannelSucceeded) => State.ChannelSelected(???)
    case (_: State.ChannelSelected, _: TgsSucceeded)         => State.Paid(???)

    ...
  }
```

위 예시에선 설명을 위해 단순화한 부분이 많지만, Event Sourcing 구현의 핵심을 이루는 `commandHandler` 와 `eventHandler` 가 어떻게 구성되는지에 대해 충분히 감을 잡으셨을 것이라고 생각합니다.
Event Sourcing의 구현에 있어 더 디테일하게 신경 써야 할 부분들에 대해서는 심화편에서 좀 더 깊게 다루어보도록 하겠습니다!

## Event Sourcing 도입에 따른 Challenge

저희가 Event Sourcing을 도입하게 된 것은 분명 해당 위에서 설명드린 여러 가지 장점을 누리기 위해서이지만,
반대로 해당 기술을 도입하면서 추가적으로 신경 써야 할 것들 또한 적지 않았습니다.
혹시 Event Sourcing의 도입을 고려하고 있지만 어떠한 챌린지가 있을지를 몰라 의사결정에 어려움을 겪고 계신 분들이 있다면,
그런 분들께 도움을 드리고자 제가 느낀 챌린지들을 공유하고자 합니다.

### Challenge 1. Event 직렬화/역직렬화에 각별히 신경 써야 한다.

글의 윗부분에서 Event Sourcing의 특징에 대해 소개할 때, 해당 기술을 도입하게 되면 DB Schema에 의존하지 않는 자체적인 데이터 포맷 정의 및 직렬화/역직렬화 전략을 구성해야 한다고 말씀드렸는데요,
이는 장점과 단점이 공존하는 특징인 것 같습니다.
DB Schema에 얽매이지 않고 자유롭게 데이터의 형식을 정의할 수 있게 되는 대신, 모든 이벤트를 DB에 저장할 수 있는 형태로 직렬화하고, 반대로 역직렬화하는 코드를 모두 수동으로 작성해야 합니다.
그리고 직렬화 포맷의 특성을 이해하고 이벤트가 하위 호환성을 유지할 수 있도록 많은 신경을 써주어야 합니다.

### Challenge 2. DB를 직접 조작하기가 힘들다.

일반적으로 DB의 내용은 항상 어플리케이션을 통해서만 수정하는 것이 바람직하지만, 드물게는 개발자가 DB에 직접 접속해 데이터를 강제로 조작하는 경우도 있습니다.
이는 위험한 행동이긴 하지만 어쩔 수 없는 상황에서는 분명 유용할 수 있는 프랙티스입니다.
다만 이러한 접근은 DB에 담긴 데이터가 human-readable/human-updatable 할 때만 유용하며, Event Sourcing DB에는 직렬화된 데이터가 담기기 때문에 이 데이터를 사람이 수동으로 조작하는 것에는 한계가 있습니다.
이런 경우 강제 업데이트를 위한 별도의 기능을 어플리케이션에 개발해야 할 것입니다.

### Challenge 3. 조회를 위한 별도의 모델이 필요하다.

사용자가 조회를 통해 얻고 싶은 것은 상태이지만, Event Sourcing DB의 record에는 개별 이벤트가 담겨있습니다.
따라서 Event Sourcing을 도입하게 되면 특정 조건으로 필터를 걸어 조건을 만족하는 엔티티를 한 번에 조회하는 등의 요구사항에 대응할 수 없습니다.
Event Sourcing을 사용하면서 동시에 이러한 요구사항에 대응하기 위해서는 조회를 위한 별도의 모델이 필요합니다.
보통 Event Sourcing DB로부터 주기적으로 데이터를 전달받아 조회에 특화된 별도 DB에 데이터를 동기화하고 이 별도 DB를 조회 요구사항을 만족하는 식으로 접근하게 되는데,
이러한 접근 방식을 CQRS(Command-Query Responsibility Segregation) 패턴이라고 부릅니다.
CQRS 패턴을 구현하기 위해서는 신뢰성 있는 데이터 동기화 아키텍처를 구성해야 하며, 이 아키텍처가 충분히 성숙해지기까지 꽤 많은 리소스를 들여야 할 것입니다.

## 정리

포트원 V2 시스템의 근간을 이루고 있는 Event Sourcing 기술의 개념과 도입 배경, 간단한 구현과 Challenge까지 개괄적인 내용을 함께 살펴보았습니다.
Event Sourcing의 경우 굉장히 낯선 기술이고, 국내에서 해당 기술을 도입한 사례를 거의 찾아볼 수 없었기 때문에 저희도 실제로 이 기술을 도입하면서 많은 시행착오가 있었는데요,
많은 분들이 본 글을 읽고 Event Sourcing 기술이 가지는 특징과 장단점에 대해 더 깊게 이해하게 되셨기를 바래봅니다.

과감한 결정을 한 만큼 장기적으로 그 효과는 강력할 것이라고 생각합니다.
Event Sourcing이라는 단단한 뿌리 위에서 폭발적으로 성장하는 포트원을 지켜봐 주세요!


# https://developers.portone.io/blog/posts/2024-04/gcp-datastream

---
title: 'Data Evolution: The Shift from AWS DMS to GCP Datastream'
description: >-
  Gives an overview of the PortOne Data Infrastructure and the migration story
  from AWS DMS to GCP Datastream.
author: chandulal
date: 2024-04-03T15:00:00.000Z
tags:
  - Data Infra
  - Data Ingestion
  - GCP
  - Data Engineering
---

<div class="hint" data-style="info">이 글은 PortOne Global 소속 엔지니어가 작성한 글입니다.</div>

## Introduction

At PortOne, we use AWS DMS to capture changes from our service databases
using Change Data Capture (CDC) and ingest them into our Data Lake.
We store all our CDC data in AWS S3 and merge it with the BigQuery table
every hour using Airflow as a scheduler.
Our pipeline code, written in Python's Pandas library,
merges incremental changes into the BigQuery table.
We have multiple mart tables built on top of the raw tables in BigQuery.

Although this solution has worked well for us, we encountered several challenges along the way:

- **High Latency:** at least an hour.

- **Manual Backfill:** requires multiple steps to backfill data
  from the source database to the BigQuery table.

- **Missing Rows:** There are instances of missing records if there are delays or complications
  with the writing process of AWS DMS.

- **High Maintenance:** the solution requires multiple components to maintain,
  such as AWS DMS, Airflow, and a Kubernetes cluster to run all our pipelines.

Our approach involves utilizing GCP Datastream as our Change Data Capture (CDC) solution
to address and overcome the aforementioned challenges.

### About GCP Datastream

GCP Datastream is a managed CDC service provided by Google Cloud Platform (GCP)
that enables real-time, automated, and reliable data replication
from various sources to target destinations.
It is a serverless and easy-to-use change data capture and replication service
that directly ingests data from sources such as MySQL and Postgres into BigQuery.

It supports integrating various Google Cloud services,
including BigQuery, Cloud Storage, and Pub/Sub.

## Data Infrastructure Change

### Before

(이미지 첨부: Architecture using AWS DMS)

Here, we utilize AWS Database Migration Service(DMS) to capture changes in data
from six to seven databases. The DMS consistently copies CDC data from RDS
to Amazon S3 with hourly partitioning on S3.
Next, Airflow initiates a DAG every hour to combine new CDC data from S3 to BigQuery.
The underlying job, written in Pandas DataFrame,
runs on Kubernetes and upserts the data in BigQuery.

### After

(이미지 첨부: Architecture using GCP Datastream)

Here, we simplified the previous architecture
by removing AWS DMS, AWS S3, and Data Pipelines run by Airflow.
Instead, we utilize GCP Datastream, which directly connects to databases like PostgreSQL and MySQL,
copies CDC data, and merges it into BigQuery.
It provides the option to specify the staleness
to balance BigQuery query performance and cost versus data freshness.
Further details will be covered later in this blog.

## Data Partitioning

Data partitioning allows for more efficient and scalable data processing
by dividing data into smaller, manageable segments.
This can lead to faster query performance, reduced costs, and improved data availability.
It also allows for easier data management by providing the ability
to load or delete data partitions selectively.
Data partitioning plays a crucial role as we pay for the data
scanned by the queries we run in BigQuery.

The main challenge with GCP Datastream is its lack of support
for partitioning when writing data into BigQuery.
As a result, all mart tables, which build incrementally every hour,
must scan the full table ingested by Datastream, causing our BigQuery costs to skyrocket.

We manually created a partition for all large tables to mitigate this issue.
Although this solution worked for us, we do not recommend it
because it can affect your data ingestion.
Please use it cautiously and consult GCP support if you encounter any issues.

Here are the steps we took to add a partition to the table ingested using Datastream.
For example, we have a _**transaction**_ table with over 100 million rows
being ingested via Datastream and want to add a partition.

- Pause the Datastream that ingests the _**transaction**_ table.

- Create a new _**transaction\_v2**_ table using the same Data Definition Language (DDL)
  as the original _**transaction**_ table but by appending the partition clause.

  Find the DDL for the existing _**transaction**_ table.

  ```sql
  SELECT
    ddl
  FROM
    `<project-id>`.`region-<region-anme>`.INFORMATION_SCHEMA.TABLES
  WHERE
    table_name="transaction" and table_schema='<dataset name>'
  ```

  Use the DDL statement retrieve from above query
  and add your partition using `PARTITION BY` clause.

  ```sql
  CREATE TABLE transaction_v2
  (
    id INT64,
    amount NUMERIC
  )
  PARTITION BY DATE(updated_at)
  CLUSTER BY id;
  ```

- Insert data from the _**transaction**_ into _**transaction\_v2**_.

- Drop the _**transaction**_ table.

- Create a new _**transaction**_ table using the DDL of _**transaction\_v2**_,
  which has the partition clause.

- Insert data from _**transaction\_v2**_ into the new _**transaction**_ table.

- Drop the _**transaction\_v2**_ table.

- Resume the Datastream.

Using **updated\_at** as a partition column in the raw tables
allows us to retrieve any new changes from the raw table
without scanning the entire table for mart table updates.

## Data Transformation

**Key Features**

We started using GCP Dataform for data transformation,
enabling users to define, test, and deploy data models in a reproducible and modular manner.
It helps data teams manage complex pipelines and maintain data quality efficiently.

- **SQL-based Data Transformations:** Define and run SQL transformations on your data,
  and build complex pipelines with reusable scripts.

- **Dependency Management:** Ensure transformations are executed in the right order
  and manage dependencies among them.

- **Version Control:** Version control your data transformation code with Git,
  track changes, collaborate, and revert to previous versions if needed.

- **Testing and Validation:** Write tests and validations for your data,
  and define rules and expectations to ensure quality and integrity.

- **Incremental Builds:** Optimize the execution time of your data pipelines
  by processing only changed data since the last build.

- **Collaboration and Sharing:** Share and reuse data transformation code with your team,
  create and manage projects, grant access, and promote code reuse across projects.

- **Scheduler Integration:** Automate execution of your data pipelines at specified intervals
  with scheduling tools like Airflow or Google Cloud Scheduler.

- **Extensibility:** Extend Dataform through plugins and custom JavaScript code,
  write custom logic, integrate with external systems,
  or implement advanced data processing tasks using JavaScript.

We haven't used GCP Dataform extensively at this time.
We will share more information in the future after using it more.

## Security

### Datastream security

GCP Datastream is designed with security in mind and provides several features
to ensure the security of data replication.
Key features include encryption at rest and in transit, VPC service control,
IAM roles and permissions, and audit logging.

### PII column security

Our GCP Datastream-based pipeline uses two methods to handle
Personally Identifiable Information (PII) columns.
The first method completely blocks specific PII column(s) from being included in the Datastream.
This ensures that Datastream does not ingest PII columns into BigQuery.

In some cases, our customer support or marketing team needs the PII of our customers,
such as email, phone number, etc.
In those cases, we ingest the PII column(s) into BigQuery and mask them
using the dynamic data masking feature of BigQuery.

**About Dynamic Data Masking**

BigQuery provides dynamic data masking at the column level,
enabling access to a column while obscuring its data for privileged user groups.
Combining data masking with column-level access control allows you to configure
access to column data at different levels based on user privileges.
This simplifies data sharing, eliminates the need to modify existing queries,
allows scalability when applying data access policies, and enables attribute-based access control.

Here are the benefits of using BigQuery for dynamic data masking at the column level:

- Simplifies data sharing with larger groups by masking sensitive columns.

- Existing queries automatically mask column data based on user roles,
  eliminating the need to exclude inaccessible columns.

- Enables scalability of data access policies by writing a policy tag once
  and applying it to any number of columns.

- Provides contextual data access based on data policy and associated principals
  through attribute-based access control.

## Cost

### Ingest required columns only

When using GCP Datastream, it is important to be mindful of the volume of data
being ingested into BigQuery.
Datastream charges based on the amount of data processed through it,
so ensure to ingest only necessary tables and columns.

### Use staleness settings

Data staleness in Datastream refers to the amount of time between
when a change is made in the source database and when that change is captured
and replicated in the target destination.
Datastream provides an option to specify the staleness
to balance BigQuery query performance and cost versus data freshness.
By setting the staleness settings, merging costs can be reduced.
However, setting too low of a staleness value can result in higher costs
due to more frequent querying of the target destination.

To increase or decrease the staleness in the existing tables ingesting via Datastream.

```sql
ALTER TABLE <dataset-name>.<table_name>
SET OPTIONS (
  max_staleness = INTERVAL 30 MINUTE
);
```

### Use BigQuery reservation for backfill

Setting reservation pricing before starting the backfill of large tables
is important to reduce high backfill costs.
In our case, we started the backfill of a large table without using BigQuery reservation,
and the cost was 2 times higher than it would have been with reservation pricing.

(이미지 첨부: BigQuery Cost during the Backfill without Reservation)

(이미지 첨부: BigQuery Cost during the Backfill with Reservation)

## The bottleneck of GCP Datastream

### Lack of data partitioning

GCP Datastream is a powerful tool for real-time data replication,
but it can still be improved in some areas.
One major bottleneck is the lack of built-in partitioning.
When a large table is ingested through Datastream,
there should be an option to create a partition in the target table.

### Lack of pre-transformation

Another challenge with GCP Datastream is the absence of pre-transformation.
There is no option to transform the data before it is sent to the target system.
This feature can help encrypt source columns, create derived columns, etc.

### Full table scan while merging incremental changes

GCP Datastream scans the full table to apply a few incremental rows.
This approach can be inefficient and expensive.
To optimize the performance of GCP Datastream,
developing a more efficient way of scanning the table and applying incremental rows is essential.

## What’s Next?

We have made significant changes in our latest solution for ingesting real-time data
from our source database to BigQuery.
We have replaced AWS DMS with GCP Datastream.
This has allowed us to take advantage of the unique features that GCP Datastream offers.

Additionally, we have implemented GCP Dataform for data modelling and mart tables.
This has given us more flexibility and control over our data.

However, we have encountered a few challenges with GCP Datastream.
It does not support pre-transformation, which is essential for our use case.
To address this, we are considering using Dataflow for real-time pre-transformation.
This would allow us to apply transformations to the data before it is ingested into BigQuery,
giving us more control over the quality and consistency of our data.
Overall, we believe that these changes have greatly improved the efficiency and effectiveness
of our data ingestion process.


# https://developers.portone.io/blog/posts/2024-04/solid

---
title: Solid로 간결하게 고성능 웹앱 만들기
description: 포트원에서 사용하는 프론트엔드 웹 프레임워크 중 하나인 Solid에 대해 소개하고, 포트원 내에서의 활용 사례를 다룹니다.
author: XiNiHa
date: 2024-04-14T15:00:00.000Z
tags:
  - Frontend
  - Solid
  - SolidStart
---

포트원에서는 프로덕트를 개발할 때 각 제품의 특성에 따라 다양한 프레임워크들을 검토 후 적용하고 있으며,
이 중 [Solid]의 경우 몇몇 프로덕트에 대해 프로덕션에서 적용하여 성공적으로 운영하고 있습니다.
이번 글에서는 Solid에 대한 간단한 소개부터, Solid가 가진 여러 특징들을 살펴보고,
포트원이 Solid를 도입한 방식과 도입 이후의 경험들에 대해서 이야기해보려 합니다.

## Solid?

아마 이 글을 읽으시는 분들 대부분은 React 혹은 Vue를 사용하는 프론트엔드 개발자이실 텐데요,
Solid는 이러한 프론트엔드 프레임워크들을 대체하기 위해서 만들어진 프레임워크로,
기존의 VDOM 및 컴포넌트 기반 프레임워크들이 가지고 있던 성능 및 편의성 측면의 단점을 개선하고,
그러면서도 Suspense와 스트리밍 SSR과 같은 다양한 최신 기능들을 지원하는 등,
다방면에서 뛰어난 모습을 보여 주는 프레임워크입니다.
앞서 언급된 프레임워크들에 비해 상대적으로 최근에 출시된 프레임워크라는 점 때문에
생태계 측면에서 부족한 부분들도 있지만,
코어 프레임워크 자체는 굉장히 안정적이고, 사용하기 간편하며,
다양한 기능들과 뛰어난 성능을 모두 갖추고 있습니다.

Solid는 2021년에 버전 v1.0이 출시된 프레임워크이며,
이후 [JavaScript Framework Benchmark] 등에서 최상위권의 성능을 보여주며 주목받기 시작했습니다.
Solid의 특징들은 이후 Angular나 Vue, Svelte 등에 간접적인 영향을 주거나,
Qwik이나 Leptos 등의 프레임워크들에 직접적으로 영향을 주는 등,
전반적인 프론트엔드 생태계에 큰 변화를 가져왔습니다.
과연 Solid의 어떤 점이 매력적이었길래 이렇게 많은 관심을 받고 있는 것일까요?
한번 Solid의 기반부터 짚어 나가면서 Solid의 여러 특징들을 살펴보도록 하겠습니다.

## Solid 시작하기

### 반응형 시스템

Solid의 가장 핵심적인 특징은 아마 Signal로 대표되는 반응형 시스템일 것입니다.
여기서 “반응형 시스템”은 단일 상태의 변화에 따라서 이 상태에 의존하는
파생 상태들과 부수 효과들이 연달아서 _반응하며_ 갱신 및 실행되는 시스템을 의미하는데요,
Solid는 Signal을 바탕으로 매우 간편하게 상태 그래프를 구성할 수 있는 반응형 시스템을 제공합니다.
한번 코드를 살펴볼까요?

```tsx
import { createEffect, createMemo, createSignal } from "solid-js";

// SolidJS가 변화를 추적할 수 있는 상태(Signal)를 생성합니다.
const [count, setCount] = createSignal(0);

// Signal의 값은 함수 호출을 통해 읽을 수 있습니다.
console.log(count());

// 다른 상태에 의존하는 새로운 상태를 생성합니다.
const doubleCount = createMemo(() => {
  // createMemo 등의 함수 내에서 Signal의 값을 가져올 경우,
  // 해당 Signal의 값 변화를 자동으로 구독하며,
  // 값이 변화할 경우 함수를 재실행합니다.
  return count() * 2;
});

// 의존하는 상태가 변화할 때마다 실행되는 부수 효과를 생성합니다.
createEffect(() => {
  console.log(`doubleCount: ${doubleCount()}`);
});

// 한 상태를 업데이트하면, 해당 상태에 의존하는 모든 부수 효과가 순차적으로 실행됩니다.
setInterval(() => {
  // 상태가 업데이트될 때, 부수 효과가 동기적으로 실행됩니다.
  setCount(count() + 1);
  console.log(`count update completed`);
}, 1000);

// 위 코드는 다음을 출력합니다.
//
// 0
// doubleCount: 0
// (1초 후)
// doubleCount: 2
// count update completed
// (1초 후)
// doubleCount: 4
// count update completed
// ...
```

(이미지 첨부: 예제 코드로 생성된 반응형 그래프)

예제 코드에서도 드러나듯이, Solid의 반응형 유틸리티들을 활용하면
컴포넌트나 Rules of Hooks 같은 거추장스러운 규칙들 혹은 다른 복잡한 구조를 도입하지 않고도
매우 간단한 방식으로 각종 상태와 다양한 부수 효과들을 관리할 수 있습니다.
또한 이 방식은 상태가 업데이트됨에 따라서 꼭 재실행이 필요한 코드들만 다시 실행되기 때문에,
컴포넌트 단위로 상태 업데이트를 관리하는 React와 같은 프레임워크들에 비해
많은 상황에서 뛰어난 성능을 보여줍니다.

### 반응형 시스템으로 DOM 조작하기

앞서 살펴보았듯이, Solid의 반응형 시스템을 사용하면 상태 변화에 따라서 실행되는
부수 효과를 손쉽게 생성할 수 있습니다.
그렇다면, 이걸 활용해서 DOM 요소가 상태의 변화에 따라서 함께 변화하도록 할 수 있지 않을까요?

```tsx
import { createEffect, createSignal } from "solid-js";

// 1초마다 1씩 증가하는 count 상태를 만듭니다.
const [count, setCount] = createSignal(0);
setInterval(() => setCount(count() + 1), 1000);

const div = document.createElement("div");
createEffect(() => {
  // count 상태가 변화할 때마다 div의 textContent를 업데이트합니다.
  div.textContent = count();
});
```

위 코드를 보면 알 수 있듯이, Solid에서는 매우 간단하게
상태의 변화에 따라 변화하는 DOM 요소를 만들 수 있습니다.
`render()` 함수나 컴포넌트 같은 것을 사용할 필요도 없이,
단순히 Solid에서 제공하는 몇 가지 함수들만 가지고도
손쉽게 상태에 따라 변화하는 UI를 만드는 것이 가능한데요,
Solid는 여기서 한 발 더 나아가서 JSX로부터 위와 같이
DOM을 구성하는 코드를 자동으로 생성해내는 기능을 제공하여,
단순함과 성능에 더해 편의성까지 챙겼습니다.

### JSX 컴파일러

Solid는 JSX를 효율적으로 컴파일하기 위해 [dom-expressions]라는 패키지를 Babel 플러그인 형태로 제공합니다.
이 플러그인은 소스 코드 내의 JSX를 Solid와 함께 사용할 수 있는 형태로 컴파일하는데요,

```tsx
// VDOM 객체가 아닌, 실제 HTMLDivElement를 반환합니다.
const div = <div width={100} />;
```

위 JSX를 컴파일하면, 다음과 같은 코드가 됩니다.

```tsx
import { template as _$template } from "solid-js/web";
const _tmpl$ = _$template(`<div width="100">`);
const div = _tmpl$();
```

`_$template()` 함수는 인자로 입력받은 템플릿을 DOM 노드로 생성하고,
호출 시 이 노드를 복제하는 함수인 `_tmpl$()` 함수를 반환합니다.
따라서 `_tmpl$()` 함수를 호출해서 `div` 변수에 넣으면
변수 안에는 실제 DOM 노드가 들어가게 되는 것입니다. 좀 더 복잡한 예제를 살펴볼까요?

```tsx
import { createSignal } from "solid-js";

const [count, setCount] = createSignal(0);
const [height, setHeight] = createSignal(100);

// 1초마다 count를 1 증가시킵니다.
setInterval(() => setCount(count() + 1), 1000);
// 500ms마다 height를 0~300 사이의 랜덤한 값으로 설정합니다.
setInterval(() => setHeight(Math.random() * 300), 500);

const div = <div height={height()}>{`Count: ${count()}`}</div>;
```

위 예제를 컴파일하면, 다음과 같은 코드가 됩니다.

```tsx
// 컴파일된 JSX에서 사용하는 import들과 _tmpl$들이 상단에 먼저 배치됩니다.
import { template as _$template } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
const _tmpl$ = _$template(`<div>`);
// 여기부터 사용자가 작성한 코드가 시작됩니다.
import { createSignal } from "solid-js";
const [count, setCount] = createSignal(0);
const [height, setHeight] = createSignal(100);
setInterval(() => setCount(count() + 1), 1000);
setInterval(() => setHeight(Math.random() * 300), 500);
const div = (() => {
  const _el$ = _tmpl$();
  _$insert(_el$, () => `Count: ${count()}`);
  _$effect(() => _$setAttribute(_el$, "height", height()));
  return _el$;
})();
```

다른 부분은 제쳐두고, `"const div = (() => {"`로 시작하는,
JSX에 해당하는 부분부터 한번 살펴보겠습니다.
먼저 `_tmpl$()` 함수를 통해서 `_el$`을 생성하는 부분까지는 이전 예제와 동일합니다.
이후 `_$insert()`를 통해서 `_el$` 내에 텍스트를 집어넣는데,
`_$insert()` 함수는 `createEffect()`를 약간 변형한 함수로,
두 번째 인자로 전달된 콜백(이 경우 ``"() => `Count: ${count()}`"``)의 반환값을
첫 번째 인자로 전달된 DOM 노드 안에 삽입하는데,
결국 아까 JSX 없이 `createEffect()`만으로 DOM을 조작했을 때와 기능적으로 유사한 코드입니다.
다음은 `_$effect()` 함수와 `_$setAttribute()` 함수를 통해서 `height` 상태의 값이 변할 때마다
DOM 노드의 `height` 애트리뷰트도 함께 변경시켜주는 코드이고,
이것들이 적용된 DOM 노드인 `_el$`을 반환하면서 JSX 코드가 마무리됩니다.

위 코드에서 찾아볼 수 있는 특별한 점이 하나 있는데요,
바로 `count`의 변화에 따라 `div` 내부의 텍스트를 변화시키는 동작과,
`height`의 변화에 따라 `div`의 `height`를 변화시키는 동작이 별개로 이루어진다는 점입니다.
따라서 `height`가 변화할 때에도 `div` 내부의 텍스트를 변화시키는 동작은 실행되지 않고,
`count`가 변화할 때에도 `div`의 `height`를 변화시키는 동작은 실행되지 않습니다.
이는 React의 컴포넌트 단위 리렌더 모델과는 크게 차이가 존재하는 부분이며,
Solid가 뛰어난 성능을 보여줄 수 있는 비결입니다.
이렇게 DOM을 업데이트하는 방식을 Fine-grained DOM Update라고 부르며,
이 방식은 Solid를 시작으로 Svelte 5나 Vue (Vapor Mode) 등의 프레임워크에도
적용되기 시작한 방식이기도 합니다.

### 컴포넌트

Solid의 컴포넌트는 React 등의 일반적인 프레임워크의 컴포넌트와는 성격이 많이 다른데요,
일반적인 프레임워크들이 컴포넌트를 상태 업데이트를 위한 최소 단위로 삼는 반면,
Solid는 앞서 살펴보았듯이 JSX 자체가 반응성을 가지고 UI를 업데이트하기 때문에,
렌더링 퍼포먼스에 대한 고민 없이 컴포넌트를 온전히 코드를 정돈하기 위한
단위의 용도로 사용할 수 있습니다.
Solid를 사용할 때 컴포넌트는 그저 하나의 함수일 뿐인 것인데요, 한번 살펴볼까요?

```tsx
import { createSignal } from "solid-js";
import { render } from "solid-js/web";

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
  );
}

render(() => <Counter />, document.getElementById("app"));
```

`<div />` 과 같은 일반적인 JSX와 달리, `<Counter />` 같이
컴포넌트에 대한 JSX는 마치 함수 호출처럼 동작합니다.
따라서 `<Counter />` 는 `Counter` 함수를 1번 실행시킬 것이고,
이에 따라 반환되는 `<button>` DOM 노드가 `render()` 함수에 전달되어 `#app`에 그려질 것입니다.
동작 방식을 보면 알 수 있듯이, 리액트의 컴포넌트와 달리 Solid의 컴포넌트는 최초 1번만 실행되기 때문에,
early return 같은 패턴을 사용할 수 없고, 최초 리턴 시에 모든 UI 요소를 전부 반환해야 합니다.
초기 리액트가 장점으로 내세웠던 “UI를 매번 새로 그리는 것처럼 코드를 짤 수 있도록 해 준다”는
부분에 대해서는 다소 부족한 부분이 있다고 볼 수도 있지만,
“상태 변화에 따라서 UI가 변화하는 그래프를 만든다”는 식으로 사고방식을 바꾸어 접근한다면
훨씬 더 수월하게 코드를 작성할 수 있을 것입니다.

### UI 유틸리티 컴포넌트

Solid는 다양한 UI 패턴을 위한 몇 가지 유틸리티 컴포넌트들을 제공합니다.

```tsx
import { For, Match, Show, Switch } from "solid-js";

// 조건에 따라 표시할 UI는 <Show>를 통해 표현합니다.
const [visible, setVisible] = createSignal(false);
const conditional = (
  <Show when={visible()}>
    <p>Visible</p>
  </Show>
);

// 배열을 순회할 때는 <For>를 사용합니다.
const [items, setItems] = createSignal(["foo", "bar"]);
const list = (
  <ul>
    <For each={items()}>{(item) => <li>{item}</li>}</For>
  </ul>
);

// 여러 조건에 대해 비교할 때는 <Switch>를 사용합니다.
const [route, setRoute] = createSignal("home");
const view = (
  <Switch fallback={<p>Not Found</p>}>
    <Match when={route() === "home"}>
      <p>Home</p>
    </Match>
    <Match when={route() === "login"}>
      <p>Login</p>
    </Match>
  </Switch>
);
```

사실 React나 Vue의 JSX에서는 위 UI 패턴들을 순수 JS 문법으로 표현할 수 있고,
이것은 Solid에서도 동일합니다. 하지만 Solid에서는 위 컴포넌트를 사용했을 때
내부적으로 DOM 요소를 재사용하는 등의 최적화를 통해 최상의 성능을 보장해 주며,
따라서 순수 JS 문법을 사용하기보다는 위 컴포넌트를 사용하는 것이 권장됩니다.
이는 VDOM을 사용하지 않는 Solid의 특성상, 불필요한 요소를 생성하는 것의 오버헤드가
더욱 크기 때문이기도 합니다.

### 에러 처리

Solid에서는 컴포넌트 렌더링 도중에 발생할 수 있는 다양한 종류의 에러를 처리하기 위해
`<ErrorBoundary>` 컴포넌트를 제공합니다.
에러가 발생할 수 있는 UI 요소를 별도 컴포넌트로 분리해야만 하는 React와 달리,
Solid에서는 `<ErrorBoundary>` 하위에서 에러가 발생하기만 했다면
따로 컴포넌트를 분리하지 않아도 올바르게 에러를 처리해 줍니다.

```tsx
import { ErrorBoundary } from "solid-js";

const readData = () => {
  throw new Error("Not implemented!");
};

const Component = () => {
  const data = readData();
  return <>{data}</>;
};

const view = (
  // 렌더링 시 Error: Not implemented! 가 표시됩니다.
  <ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
    {/* 바로 호출한 함수에서 에러가 발생한 경우에도 올바르게 처리되며, */}
    {readData()}
    {/* 컴포넌트 내부에서 에러가 발생한 경우에도 올바르게 처리됩니다. */}
    <Component />
  </ErrorBoundary>
);
```

### 데이터 가져오기

Solid는 비동기 함수를 사용하여 데이터를 가져올 수 있는 `createResource()`라는 유틸리티를 제공합니다.
이 유틸리티를 사용하면 데이터 로딩을 위한 별도의 라이브러리를 사용하지 않고도
간단한 데이터 로딩을 손쉽게 구현할 수 있습니다.

```tsx
import { createResource, ErrorBoundary, Show, Suspense } from "solid-js";

const [data] = createResource(async () => {
  const res = await fetch("https://my-api.com");
  const json = await res.json();
  return json;
});

// 데이터가 로딩되는 동안은 Loading...이,
// 에러가 발생하면 Error!가,
// 데이터가 완전히 로딩되면 value 값이 표시됩니다.
const view = (
  <>
    {/* 1. data 리소스의 추가 속성 사용 */}
    <Show when={!data.error} fallback={<div>Error!</div>}>
      <Show when={!data.loading} fallback={<div>Loading...</div>}>
        {data()?.value}
      </Show>
    </Show>
    {/* 2. <ErrorBoundary>와 <Suspense> 사용 */}
    <ErrorBoundary fallback={<div>Error!</div>}>
      <Suspense fallback={<div>Loading...</div>}>{data()?.value}</Suspense>
    </ErrorBoundary>
  </>
);
```

`createResource()`를 사용할 때는 선호하는 API 스타일에 따라서
리소스 내의 `loading`이나 `error`와 같은 추가적인 속성을 활용할 수도 있고,
`<ErrorBoundary>`나 `<Suspense>` 같은 컴포넌트를 활용할 수도 있습니다.
다만 `<Suspense>` 컴포넌트를 활용할 경우 `useTransition()`이나
스트리밍 SSR과 같은 추가적인 기능들을 활용할 수 있기 때문에,
아주 간단한 경우를 제외하고는 `<Suspense>` 컴포넌트를 활용하는 방향이 더욱 권장됩니다.

Solid는 이외에도 다양한 UI 패턴들을 위한 여러 기능들을 제공하는데,
자세히 알아보시려면 [Solid의 공식 튜토리얼][solid tutorial],
[레퍼런스 문서][solid reference] 등을 참고하거나,
다양한 JS 프레임워크들 간의 코드를 비교해서 보여주는 [Component Party] 등을
참고해보시면 좋을 것 같습니다.

## 라이브러리 생태계

이때까지 Solid의 기본적인 특징들을 살펴 보았는데요,
이제부터는 Solid를 활용하여 본격적으로 다양한 애플리케이션을 만들기 위한
다양한 라이브러리 생태계를 살펴 보겠습니다.

### 프로젝트 세팅

현 시점에서 Solid로 웹 애플리케이션을 개발하기 위해 가장 권장되는 방법은
Solid의 공식 메타프레임워크(Next, Nuxt와 같이, 프레임워크를 기반으로 만든 프레임워크)인
[SolidStart]를 활용하는 것입니다.
SolidStart는 [Vite]와 [Nitro]를 기반으로 하는 프레임워크인데, SSR과 CSR을 모두 지원하고,
파일 시스템 라우팅과 커스텀 라우팅을 모두 사용할 수 있으며, `"use server"`를 활용한 서버 함수나,
NodeJS/Vercel/Cloudflare/AWS Lambda 등 다양한 플랫폼에 배포하기 위한 여러 프리셋들도 제공합니다.
그 외에도 상황 및 취향에 따라서 SolidStart를 사용하는 대신 Vite을 그대로 사용하거나,
상대적으로 정적인 콘텐츠로 이뤄진 사이트에서 [Astro]와 Solid를 조합하여 사용하는 등
다양한 선택지가 존재합니다.
또한 [Tauri] 등을 사용하면 Solid를 활용하여 데스크탑 앱을 만드는 것 역시 가능합니다.

### 코어 라이브러리

Solid 팀에서는 Solid로 애플리케이션을 개발할 때 활용할 수 있는 몇 가지 코어 라이브러리들을 제공합니다.
먼저 [Solid Router]는 기본적인 클라이언트 라우팅 기능부터 중첩 라우팅이나 라우터 중심 데이터 플로우까지
다양한 기능을 제공하는 라이브러리로, SolidStart와도 함께 사용할 수 있는 매우 유용한 라이브러리입니다.
[Solid Meta]는 `<head>` 내의 `<title>`이나 `<meta>`와 같은 태그들을 렌더링하기 위한 라이브러리로,
SSR 상황이나 비동기 렌더링을 활용하는 상황, 클라이언트 라우팅이나 중첩 라우팅 등을 활용하는 상황 등을
모두 고려하여 설계되어, 어떤 상황에서도 간편하게 사용할 수 있습니다.
이외에 styled-components의 Solid 버전인 [solid-styled-components] 역시 존재합니다.

### 커뮤니티 라이브러리

커뮤니티 내에서 개발한 오픈소스 라이브러리 역시 다양하게 존재하는데요,
react-use나 VueUse 같이 작은 유틸리티들을 모아서 라이브러리화한 [Solid Primitives],
Radix UI처럼 WAI-ARIA 기반으로 접근성을 준수한 컴포넌트 라이브러리인 [Kobalte],
손쉬운 Form 제작을 위한 [Modular Forms] 등 Solid를 위한 다양한 라이브러리가 존재하고,
또한 [TanStack]의 Query/Virtual/Table/Form, Web Animation API 기반 애니메이션 라이브러리인 [Motion One] 등
다양한 라이브러리들이 Solid 어댑터를 제공하여 React 혹은 Vue에서와 유사하게 사용이 가능합니다.
이외에도 Radix 대신 Kobalte를 활용하여 shadcn/ui를 Solid로 포팅한 [Solid UI]도 존재하고,
MDX 등을 활용하기 위한 다양한 플러그인들 역시 존재합니다.

### 기타 유틸리티

Solid로 애플리케이션을 개발하는 과정에서 활용할 수 있는 다양한 유틸리티들도 존재하는데요,
Solid의 반응형 상태 그래프를 시각화해서 확인할 수 있도록 도와주는 [Solid Developer Tools],
Solid를 사용하는 과정에서 권장되지 않는 코드 패턴들을 검사해 주는 [eslint-plugin-solid],
테스트 과정에서 사용할 수 있는 [Solid Testing Library] 등을 활용하면
전반적인 개발 경험을 크게 향상시킬 수 있습니다.

## 포트원에서의 Solid

이때까지는 Solid 프레임워크와 그 생태계를 소개하는 것에 초점을 두었는데,
다음으로는 포트원 내에서 저희가 Solid를 활용하는 방법에 대해 이야기해보도록 하겠습니다.
포트원은 현재 두 프로젝트에서 Solid를 적용하여 사용하고 있는데요,
결제 브릿지 페이지와 포트원 홈페이지가 그것으로,
두 프로젝트 모두에서 SolidStart를 적용하여 사용하고 있습니다.

### 결제 브릿지 페이지

(관련 이미지 첨부)

포트원의 결제 브릿지 페이지는 고객사에서 포트원 결제 모듈을 사용할 때
PG사의 결제창을 대체하여 사용할 수 있는 포트원의 커스텀 결제창을 제공하는 제품입니다.
해당 제품을 위한 기술을 선택할 때, 결제창이라는 특성을 고려하여 다음 요소들을 중심으로 평가를 진행했습니다.

- **빠른 초기 로딩**

  결제창은 고객사의 페이지에서 별도의 페이지를 렌더링하는 방식으로 로딩되며,
  따라서 웹사이트에 최초 진입하는 것과 같은 방식으로 페이지가 그려집니다.
  특히 결제창은 사용자가 결제 버튼을 누른 이후 최대한 빨리 로딩되어야 사용자의 이탈을 최소화할 수 있는데,
  따라서 페이지의 초기 로딩 성능을 측정하는 데 도움을 주는 TTFB, FCP, LCP 등의
  [Web Vitals] 메트릭을 최적화하는 데에 중점을 두었습니다.

- **서버 측 데이터 로딩**

  결제 브릿지 페이지는 제품 특성상 결제창을 띄우기 위한
  다양한 정보(카드사별 최대 할부 개월수, 무이자 혜택 정보, 카드사 프로모션 정보 등)를
  API로 불러와야 했는데, 이때 내부 API를 사용하는 과정에서 추가적인 인증 절차를 최소화하기 위해
  서버 사이드에서 API 시크릿을 직접 사용하여 API를 호출하는 방식으로 데이터 로딩을 구현할 필요가 있었습니다.
  따라서 서버 없이 CSR 방식으로 클라이언트에서만 화면을 그리기보다는,
  서버에서 데이터 로딩을 진행하고 SSR 중에 로딩된 데이터를 스트리밍하는 방식으로
  퍼포먼스를 최적화할 수 있도록 하는 데 중점을 두었습니다.

- **UI 반응성 및 사용성**

  결제 브릿지 페이지는 상대적으로 동적인 요소들을 많이 가지고 있는 제품이며,
  특히 각 UI 요소를 클릭했을 때 사용자가 느끼는 불편함 없이 최대한 부드럽게 동작할 필요가 있었습니다.
  따라서 서버 사이드에서만 렌더링되는 템플릿 위주의 스택을 선택하기보다는,
  적정량의 JS를 활용하여 우수한 사용자 경험을 제공하는 방향이 적절하다고 판단했습니다.

이러한 요소들을 모두 고려하여 SolidStart의 스트리밍 SSR을 활용하기로 결정했는데요,
스트리밍 SSR은 서버에서 데이터를 로딩하는 상황에서 페이지의 초기 로딩 속도를 향상시키기 위한
최적의 방법 중 하나이며, SolidStart는 현존하는 프레임워크들 중 가장 스트리밍 SSR을
잘 지원하는 프레임워크 중 하나였습니다.
또한 SSR 성능이나 애플리케이션의 JS 번들 크기 역시 페이지의 로딩 속도에 큰 영향을 미치는 요소이고,
해당 측면에서 Solid와 SolidStart가 매우 뛰어난 모습을 보여 준다는 점 역시 긍정적인 요소였습니다.

SolidStart를 도입한 결과는 아주 만족스러웠는데요,
반응형 시스템을 기반으로 이해하기 쉽게 구성된 코드 구조부터,
별다른 노력 없이도 손쉽게 적용 가능했던 서버 사이드 데이터 로딩과 스트리밍 SSR,
Vercel Edge Functions로의 간편한 배포, 그리고 이것들이 합쳐져서 보여주는 뛰어난 성능까지
모두 흠잡을 데가 없었습니다.
스트리밍 SSR 과정에서 간혹 SSR 및 Hydration 관련 버그가 발생하기도 하였으나,
모두 빠르게 고쳐져서 버전업만 틈틈이 해주면 별다른 문제 없이 사용할 수 있었습니다.
이후 유지보수 과정에서도 별다른 문제가 발생하지 않았으며,
현재 월마다 약 30만건 이상의 요청을 무리 없이 처리하고 있습니다.

### 포트원 홈페이지

(관련 이미지 첨부)

포트원 홈페이지는 대체로 정적인 콘텐츠로 구성되었으나 페이지의 사용성을 위해
일부 동적인 컴포넌트가 적용된 형태인데요,
이러한 요구사항에 완벽히 대응하기 위해 포트원에서는 SolidStart의
Islands Router 기능을 활용하기로 결정했습니다.
Islands Router는 SolidStart 0.2에서 실험적으로 제공하던 기능으로,
페이지의 대부분을 서버에서만 렌더링하고,
일부 컴포넌트에 대해서만 Hydration을 진행하는 방식으로
다운로드 및 실행될 JS의 양을 최소화할 수 있도록 돕는 기능입니다.
이는 포트원 홈페이지에 적용하기 아주 적합한 특성을 가진 기능이었고,
실험적으로 제공되던 기능임에도 불구하고 특유의 강력함에 집중하여 기능 적용을 결정하였습니다.
그러나 이후 SolidStart가 0.4로 업그레이드되는 과정에서 해당 기능이 일시적으로 삭제되었고,
현재 최신 버전의 SolidStart에서는 사용할 수 없는 상태가 되었습니다.
따라서 포트원에서는 추후 SolidStart가 해당 기능을 다시 추가할 때까지
SolidStart의 구버전을 사용하면서 필요에 따라 프레임워크 코드를 자체적으로 패치하는 방향으로
대응하여 사용하고 있습니다.

포트원 홈페이지에 SolidStart와 Islands Router를 적용하면서 얻은 가장 큰 수확은 역시 성능인데요,
꼭 필요한 컴포넌트가 아니면 서버에서만 컴포넌트를 렌더링한다는 특성상,
다운로드 및 실행해야 할 JS의 양이 매우 적은 덕에 페이지의
전반적인 로딩 및 동작 단계에서의 성능이 뛰어난 모습을 보여줍니다.
또한 이렇게 성능을 챙기는 와중에도 동적인 컴포넌트들은 모두 클라이언트에서 실행되고,
페이지 이동 역시 클라이언트 사이드 라우팅의 형태로 이뤄지기 때문에
페이지의 사용성 역시 희생하지 않을 수 있었습니다.
이는 React Server Components나 NextJS의 App 라우터를 사용했을 때에도 유사하게 얻을 수 있는 장점이나,
Solid와 SolidStart는 React와 NextJS 대비 프레임워크의 번들 사이즈, SSR 및 Hydration 성능 등에서
큰 이점을 보여 주기 때문에, 전반적으로 더 나은 성능을 달성할 수 있었습니다.

## 정리

이때까지 Solid의 특징들부터 시작해서, Solid 주변 생태계,
그리고 포트원 내에서의 Solid 활용 사례까지 살펴보았습니다.
포트원에서 Solid를 도입하는 것을 초기부터 푸시하고, 이후 프로덕트 개발과 유지보수까지 경험해본 사람으로서,
Solid는 이미 프로덕션에도 충분히 적용해볼 만한, 많은 장점을 가지면서도 동시에 안정적인 프레임워크라고 생각하는데요,
여러분도 이번 기회에 Solid를 비롯한 프론트엔드 생태계 내의 다양한 프레임워크들을 한번 둘러보시면 어떨까요?

[solid]: https://www.solidjs.com/

[javascript framework benchmark]: https://krausest.github.io/js-framework-benchmark/current.html

[dom-expressions]: https://github.com/ryansolid/dom-expressions

[solid tutorial]: https://www.solidjs.com/tutorial/introduction_basics

[solid reference]: https://docs.solidjs.com

[component party]: https://component-party.dev

[solidstart]: https://docs.solidjs.com/solid-start

[vite]: https://vitejs.dev

[nitro]: https://nitro.unjs.io

[astro]: https://astro.build

[tauri]: https://tauri.app

[solid router]: https://docs.solidjs.com/solid-router

[solid meta]: https://github.com/solidjs/solid-meta

[solid-styled-components]: https://github.com/solidjs/solid-styled-components

[solid primitives]: https://primitives.solidjs.community

[kobalte]: https://kobalte.dev

[modular forms]: https://modularforms.dev

[tanstack]: https://tanstack.com

[motion one]: https://github.com/solidjs-community/solid-motionone

[solid ui]: https://www.solid-ui.com

[solid developer tools]: https://github.com/thetarnav/solid-devtools

[eslint-plugin-solid]: https://github.com/solidjs-community/eslint-plugin-solid

[solid testing library]: https://github.com/solidjs/solid-testing-library

[web vitals]: https://web.dev/articles/vitals?hl=ko


# https://developers.portone.io/blog/posts/2024-03/tgs

---
title: 포트원이 여러 PG사의 인터페이스를 연동하는 방법
description: 여러 PG사의 인터페이스를 효율적으로 연동하기 위한 결정사항들을 소개합니다.
author: ChanceKim
date: 2024-03-11T15:00:00.000Z
tags:
  - Backend
  - MSA
  - gRPC
  - DDD
  - Typed Error
---

소프트웨어 엔지니어로서 새로운 서비스를 개발하다 보면 결제 기능을 구현해야 하는 경우가 생깁니다.
일반적으로 엔지니어들은 결제 기능을 구현하기 위해 특정 PG사가 제공하는 연동 가이드를 따라가며 개발을 진행하고, 서비스를 런칭합니다.
그러나 포트원은 여러 PG사의 인터페이스를 추상화하여 어떤 PG사를 사용하는지와 관계없이 통일된 인터페이스를 제공하는 것을 핵심 가치로 삼고 있습니다.
따라서 포트원의 엔지니어들은 일반적인 PG 연동 작업과는 다른 차원의 문제들을 해결해 나가야 합니다.

다른 한편으로 포트원은 현재 모놀리식 아키텍처(V1)에서 MSA(V2)로의 전환을 진행중입니다.
V1을 완전히 버리고 V2로 넘어가는 것이 아니기 때문에 하나의 PG사를 새로 연동할 때, V1과 V2 모두에 연동해주어야 하죠.
흔히 잘 운영되는 시스템의 특정 모듈을 변경하는 작업을 달리는 자동차의 바퀴를 갈아 끼우는 일에 빗대어 이야기하곤 하는데,
포트원의 현재 상황은 나란히 달리고 있는 구형 자동차와 신형 자동차의 바퀴를 한꺼번에 갈아 끼워야 하는 상황입니다.

이 글에서는 이와 같은 어려움 속에서 최적의 업무 효율을 달성하기 위해 선택한 아키텍처 레벨 및 단일 서비스 레벨의 결정사항에 대해 설명드리려 합니다.

## PG사 간의 인터페이스 차이

먼저, PG사 간의 인터페이스가 얼마나 다른지를 살펴보기 위해 예시를 들어 보겠습니다.
아래는 대표적인 간편결제사 두 곳에서 결제창을 생성하기 위해 필요한 파라미터 목록입니다.

- 카카오페이 결제 파라미터

|        Name        |     타입     | 필수여부 |                                     설명                                     |
| :----------------: | :--------: | :--: | :------------------------------------------------------------------------: |
|         cid        |   String   |   O  |                                 가맹점 코드, 10자                                |
|     cid\_secret    |   String   |   X  |                       가맹점 코드 인증키, 24자, 숫자와 영문 소문자 조합                       |
| partner\_order\_id |   String   |   O  |                              가맹점 주문번호, 최대 100자                             |
|  partner\_user\_id |   String   |   O  |                             가맹점 회원 id, 최대 100자                             |
|     item\_name     |   String   |   O  |                                상품명, 최대 100자                                |
|     item\_code     |   String   |   X  |                                상품코드, 최대 100자                               |
|      quantity      |   Integer  |   O  |                                    상품 수량                                   |
|    total\_amount   |   Integer  |   O  |                                    상품 총액                                   |
|  tax\_free\_amount |   Integer  |   O  |                                  상품 비과세 금액                                 |
|     vat\_amount    |   Integer  |   X  | 상품 부가세 금액 값을 보내지 않을 경우 다음과 같이 VAT 자동 계산 (상품총액 - 상품 비과세 금액)/11 : 소숫점 이하 반올림 |
|   green\_deposit   |   Integer  |   X  |                                    컵 보증금                                   |
|    approval\_url   |   String   |   O  |                        결제 성공 시 redirect url, 최대 255자                       |
|     cancel\_url    |   String   |   O  |                        결제 취소 시 redirect url, 최대 255자                       |
|      fail\_url     |   String   |   O  |                        결제 실패 시 redirect url, 최대 255자                       |
|  available\_cards  | JSON Array |   X  |                     결제 수단으로써 사용 허가할 카드사를 지정해야 하는 경우 사용                     |

- 네이버페이 결제 파라미터

|            Name           |    타입   | 필수여부 |                                                                                                                                                         설명                                                                                                                                                         |
| :-----------------------: | :-----: | :--: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       merchantPayKey      |  String |   O  |                                                                                                                                     가맹점 주문내역 확인 가능한 가맹점 결제번호 또는 주문번호를 전달해야 합니다                                                                                                                                     |
| merchantPayTransactionKey |  String |      |                                                                                                                            가맹점 주문내역 히스토리 확인이 가능한 가맹점 결제 트랜잭션 번호 또는 주문 트랜잭션 번호를 전달해야 합니다.                                                                                                                           |
|      merchantUserKey      |  String |      |                                                                                                                                   가맹점의 사용자 키(개인 아이디와 같은 개인정보 데이터는 제외하여 전달해야 합니다)                                                                                                                                   |
|        productName        |  String |   O  |                                                                                                                                        대표 상품명. 예: 장미의 이름 외 1건(X), 장미의 이름(O)                                                                                                                                        |
|        productCount       |  Number |   O  |                                                                                                                                 상품 수량 예: A 상품 2개 + B 상품 1개의 경우 productCount 3으로 전달                                                                                                                                 |
|       totalPayAmount      |  Number |   O  |                                                                                                                                                총 결제 금액. 최소 결제금액은 10원                                                                                                                                               |
|       taxScopeAmount      |  Number |   O  |                                                                                                                               과세 대상 금액. 과세 대상 금액 + 면세 대상 금액 + 컵 보증금 금액 (옵션) = 총 결제 금액                                                                                                                              |
|      taxExScopeAmount     |  Number |   O  |                                                                                                                               면세 대상 금액. 과세 대상 금액 + 면세 대상 금액 + 컵 보증금 금액 (옵션) = 총 결제 금액                                                                                                                              |
|  environmentDepositAmount |  Number |      |                                                                                                     1회용 컵에 담은 상품의 결제건인 경우에만 필수값이며, 그 외에는 전달할 필요가 없습니다.  컵 보증금 금액. 과세 대상 금액 + 면세 대상 금액 + 컵 보증금 금액 (옵션) = 총 결제 금액                                                                                                    |
|         returnUrl         |  String |   O  |                                                                      결제 인증 결과 전달 URL, 결제 완료 후 이동할 URL(returnUrl + 가맹점 파라미터 전달이 가능합니다) 네이버페이는 결제 작업 완료 후, 가맹점이 등록한 returnUrl로 리디렉션을 수행합니다 가맹점은 이를 활용하여 내부 처리를 수행하거나 구매자에게 결제 결과 화면을 노출할 수 있습니다                                                                      |
|       purchaserName       |  String |      |                                                                                                                            구매자 성명. 결제 상품이 보험 및 위험 업종 등인 경우에만 필수 값입니다. 그 외에는 전달할 필요가 없습니다                                                                                                                           |
|     purchaserBirthday     |  String |      |                                                                                                                      구매자 생년월일(yyyymmdd). 결제 상품이 보험 및 위험 업종 등인 경우에만 필수 값입니다. 그 외에는 전달할 필요가 없습니다                                                                                                                     |
|       extraDeduction      | Boolean |      |                                                                                       도서 / 공연 / 영화 소득공제 대상 여부. 문화체육관광부에서 인증한 소득공제 제공 사업자가 대상 상품을 판매하는 경우 필수 값입니다. 해당 파라미터를 사용하기 위해서는 별도 요청을 주셔야 합니다. true : 대상, false : 비 대상                                                                                       |
|         useCfmYmdt        |  String |      | 이용완료일(yyyymmdd) 가맹점 타입이 이용완료일 정산 또는 이용완료일 포인트 적립인 경우 필수 해당 값을 기준으로 이용완료일 정산의 경우 '정산기준일' 또는 이용완료일 포인트 적립인 경우 '포인트적립 기준일'이 지정됩니다. 이용완료일은 반드시 결제일과 같거나 결제일 이후여야 하며, 이용완료일이 결제일자 이전으로 적용될 경우 에러(InvalidUseCfmYmdt)가 발생됩니다. 이용완료일이 결제일자 기준으로 1년을 초과할 경우 별도 에러가 발생되지는 않으나 전달한 이용완료일(useCfmYmdt) 값이 결제일자 +365일로 조정 처리됩니다. |
|   merchantExtraParameter  |  String |      |                                                                                                                      가맹점 자체적으로 추가 구분값으로 활용 가능한 별도의 예비 필드 (개인 아이디와 같은 개인정보 데이터는 제외하여 전달해야 합니다)                                                                                                                      |
|        productItems       |  Array  |   O  |                                                                                                                                                   productItem 배열                                                                                                                                                   |
|      subMerchantInfo      |  Object |      |                                                                                                                                          하부가맹점 정보. PG 업종 가맹점인 경우에만 필수값입니다                                                                                                                                          |

위처럼 같은 기능을 하는 인터페이스임에도 PG사에 따라 파라미터 명과 파라미터 타입, 필수 파라미터 목록 모두 상이한 것을 볼 수 있습니다.
심지어 사용하는 통신 프로토콜마저 PG사마다 상이하죠.
2개의 PG사만을 비교해도 이러한 차이가 뚜렷한데, 포트원은 30개가 넘는 PG사 모듈을 제공하고 있기 때문에 인터페이스를 효과적으로 추상화하는 것이 매우 중요한 과제입니다.

## 아키텍처 레벨 결정사항

### 추상화만을 담당하는 마이크로서비스

앞서 설명드린 것처럼 현재 포트원은 모놀리식 아키텍처(V1)에서 MSA(V2)로의 전환 작업을 진행 중입니다.
이러한 전환 과정에서 V1과 V2를 모두 운영하며 새로운 PG를 연동하려면 V1과 V2 양쪽에 모두 연동 작업을 수행해야 합니다.
이는 개발 리소스를 두 배로 소모하는 일이며 매우 비효율적인 작업입니다.

이러한 비효율을 최소화하기 위해 저희는 V1과 V2에서 모두 사용 가능한 PG 인터페이스 추상화용 마이크로서비스인
TGS(Transaction Gateway Service)를 도입했습니다.
이 서비스 도입을 통해 V1과 V2에서 고객사의 요청을 처리하는 서비스들은 어떤 PG사로 결제가 이루어지든 통일된 인터페이스를 이용해 결제를 발생시킬 수 있습니다.
포트원이 고객사에게 주는 편리함을 포트원 내부에서는 TGS가 다른 서비스들에게 제공하는 것이죠.

다만 TGS의 도입에 앞서 선행돼야 하는 작업이 있었습니다.
모놀리식 서비스인 V1의 코드를 일부 수정하여 PG사의 인터페이스를 직접 호출하는 것이 아니라 TGS의 인터페이스를 호출하도록 변경해주어야 했습니다.
이 작업 역시 작지 않은 작업이었지만 V1과 V2가 언제까지 함께 운영될지 모르는 상황에서
서비스를 계속해서 발전시켜 나가려면 어느 정도 시간이 들더라도 반드시 해야만 하는 일이라는 결론에 도달했습니다.

TGS가 PG의 인터페이스를 추상화하는 역할을 담당하게 되면서 외부로부터 결제 요청을 처리하는 서비스는 결제 데이터를 저장하고 서빙하는 본연의 역할에 충실할 수 있게 됐습니다.

### gRPC를 통한 API 제공

(이미지 첨부: 효율적인 PG사 연동을 위한 아키텍처)

TGS가 API를 제공하는 방식 역시 아키텍처를 설계할 때의 주요 결정사항 중 하나였습니다.
가장 흔히 사용되는 방식으로는 REST API가 있지만 저희는 gRPC를 이용하여 API를 제공하기로 결정했습니다.
저희는 gRPC가 가지는 여러 장점 중 아래 두 가지에 집중했습니다.

#### 1. 인터페이스 우선 개발

TGS는 포트원의 내부 서비스와 PG사의 중간 다리 역할을 하는 만큼 신규로 연동할 PG사가 기존에 연동된 PG사에서 요구하던 파라미터 이외의 파라미터를 요구하거나,
기존에 연동된 PG사가 새로운 파라미터를 제공하는 경우에는 인터페이스의 수정이 불가피합니다.
만약 이런 수정 작업 중 TGS의 작업자가 변경된 인터페이스의 공유를 깜빡하는 경우에는 외부로 API를 제공하는 서비스들에서 해당 기능을 제공하기 어려워지기 때문에,
TGS 작업자는 다른 서비스로 인터페이스를 공유하는 것이 매우 중요합니다.

gRPC를 사용하는 경우 proto file로 인터페이스를 우선 정의하고 해당 파일을 기반으로 생성된 서버/클라이언트 코드를 사용하여 통신하게 됩니다.
인터페이스가 먼저 정의가 돼야지만 서버 기능 추가가 가능하기 때문에, proto file에 수정이 있는 경우 클라이언트가 되는 서비스의 개발자들로부터
반드시 리뷰를 받도록 PR 정책을 수립하면 인터페이스가 공유되지 않는 상황을 프로세스적으로 방지할 수 있습니다.

#### 2. 언어별로 자동 생성되는 클라이언트

위에서 언급했듯이 gRPC는 proto file로 작성된 인터페이스를 기반으로 클라이언트 코드를 생성할 수 있습니다.
현재 V1, V2는 각각 PHP와 Scala를 사용하여 개발 돼 있기 때문에 proto file을 기반으로 클라이언트 코드를 생성할 수 있다면,
TGS의 인터페이스가 변경되더라도 각기 다른 언어로 작성된 클라이언트 코드를 수정해주어야 한다는 부담이 사라지게 됩니다.

물론 REST API의 경우 이미 널리 사용되고 있어 학습을 위한 기간이 거의 필요하지 않고, 다양한 라이브러리들이 지원된다는 장점이 있지만,
포트원 내부 서비스와 PG사들 사이에서 인터페이스를 추상화해 주어야 한다는 목적에 맞춰 보았을 때
위 2가지의 장점이 REST API가 가지는 장점보다 더 많은 이득을 준다고 판단되어 최종적으로 gRPC를 사용하고 있습니다.

## 서비스 레벨의 결정사항

### Domain Driven Design(DDD)

TGS는 PG사마다 다른 용어와 개념을 공통화하여 도메인 영역을 최대한 간결하게 만들어야 합니다.
만약 PG사에서 사용되는 용어가 도메인 영역에 침범하도록 개발을 진행한다면
도메인 영역은 너무 많은 개념을 담게 되어 처음부터 개발을 해온 사람이 아니라면 도저히 이해할 수 없는 서비스가 돼버릴 것입니다.

실제로 TGS의 초기 구현은 이와 같은 문제를 가진 채로 개발이 진행됐습니다.
TGS는 프레젠테이션, 어플리케이션, 도메인, 인프라 레이어로 이루어진
[레이어드 아키텍처](https://www.baeldung.com/cs/layered-architecture)를 따릅니다.
아래 사진은 이런 구조에서 토스페이먼츠를 위한 클래스들이 도메인 레이어를 침범하여 포트원 도메인 클래스와 혼재되어 있는 모습을 보여주는 사진입니다.

(이미지 첨부: 개발초기 TGS의 도메인 레이어)

이대로 계속 개발을 진행했다면 TGS에 연동하는 PG사가 늘어남에 따라 도메인 레이어가 계속해서 비대해질 수밖에 없었을 것입니다.
어플리케이션 레이어의 경우에는 상황이 더 심각합니다.
비즈니스 로직은 포트원 도메인 엔티티에 정의돼 있기 때문에 어플리케이션 로직에서는 PG사별 객체를 포트원 엔티티로 전환한 후 비즈니스 로직을 실행하고,
이를 다시 프레젠테이션 레이어로 올려보내주어야 하죠.
이렇게 프레젠테이션 레이어를 제외한 모든 레이어에 구석구석 침투해 있는 PG사별 클래스로 인해 프로젝트 전체 구조를 파악하지 못한 경우에
신규 기능 연동이 매우 어려운 상황이었습니다.

이와 같은 문제를 해결하기 위해서 TGS에는 DDD 방법론을 도입하여,
도메인 영역에서 사용되는 용어들을 정리하고 이를 기반으로 어플리케이션 및 프레젠테이션 영역을 보다 깔끔하게 만들어 주기로 결정했습니다.
TGS에 DDD를 도입하는 과정은 크게 3단계로 나누어 진행됐습니다.

#### 1. 보편 언어(Ubiquitous Language) 정리

보편 언어를 정리하는 일은 DDD의 시작이라고 할 수 있습니다.
명확하게 정리된 보편 언어는 도메인을 이해하기 쉽게 만들어주고, 구성원들간의 미스 커뮤니케이션이 일어나지 않도록 도움을 줍니다.
TGS는 여러 PG사와의 통신을 담당하는 서비스인 만큼, 여러 PG 연동을 경험한 분들에게 도움의 받아 보편 언어를 정리했습니다.
정리된 보편 언어는 항상 접근이 간편한 곳에 위치해 있어야 하기 때문에 저희는 이를 위한 레포지토리를 생성하고 용어들을 마크다운 파일로 정리했습니다.

(이미지 첨부: 보편 언어를 위한 레파지토리)

#### 2. 보편 언어를 이용해 도메인 엔티티와 값 객체(VO) 정의

정리된 보편 언어는 코드에도 그대로 녹아들어야 합니다. 그래야만 엔지니어와 관련자 사이에 통일된 언어로 커뮤니케이션이 가능하기 때문이죠.
리팩토링 전 KSNET의 API를 통해 발생한 거래를 저장하기 위한 클래스와 리팩토링 후의 클래스 모습입니다.
변경 전에는 `aid`, `tid`, `tradeDate` 처럼 PG사에서 사용하는 언어를 이용해 데이터를 저장했다면,
변경 후에는 포트원의 보편 언어로 모두 대체된 모습을 볼 수 있습니다.

<div class="hint" data-style="info">

클래스명에 PG사의 명칭이 들어가있어서 도메인 엔티티가 아니라고 느껴질 수 있지만,
각 PG사와의 거래는 분명하게 TGS의 [bounded context](https://martinfowler.com/bliki/BoundedContext.html) 안에 존재하는 개념이기에 PG사의 명칭을 클래스명에 포함시켰습니다.

</div>

(이미지 첨부: 보편 언어를 사용하는 클래스)

#### 3. 각 PG사를 위한 데이터 클래스는 인프라 레이어로 이동

도메인 레이어를 보편 언어를 이용한 엔티티와 값 객체로 채우게 되면서 PG사를 위한 클래스들은 자연스럽게 인프라 레이어로 이동시켰습니다.
그리고 인프라 레이어에서 PG사의 클래스를 도메인 엔티티와 값 객체로 변환하여 반환하게 만들었습니다.
이제 PG사의 클래스들은 인프라 레이어에서 DTO로써만 존재하게 됐습니다.
그리고 자연스럽게 PG사와 통신하는 Client 구현체는 부패 방지 계층의 역할을 띄게 됩니다.
부패 방지 계층이란 연동하고자 하는 시스템과 기존 시스템 사이에 존재하는 도메인 모델의 차이를 기존 시스템에 맞게 변환하기 위한 계층으로,
도메인 레이어를 외부의 용어와 완벽하게 분리할 수 있게 도와줍니다.

(이미지 첨부: 인프라 레이어에 존재하는 PG사별 Client 구현체)

도메인 레이어와 어플리케이션 레이어를 수정하는 개발자는 더 이상 인프라 레이어의 구현에 대해서 알 필요가 없습니다.
그저 Client가 반환한 도메인 엔티티와 값 객체를 이용해 로직을 구성하기만 하면 되는 것이죠.

3단계로 진행된 리팩토링 과정에서 사실 대단한 DDD 기법을 사용하지는 않았습니다.
Aggregate, CQRS, 이벤트 소싱 등의 기법은 전혀 등장하지 않았죠.
그렇지만 보편 언어를 정의하여 커뮤니케이션의 효율을 높이고,
기술 의존도가 없는 도메인 레이어에 비즈니스 로직을 응축해 놓음으로써 이식성이 높아졌기에 DDD가 추구하던 본질적인 장점은 취할 수 있게 되었습니다.
덤으로 간단해진 어플리케이션 레이어 로직 덕분에 PG 연동 속도도 빨라지게 되어 생산성도 비약적으로 증가했습니다.

### Typed Error 활용

결제 도메인에서 에러 처리는 다른 도메인보다 특히나 중요합니다. 잘못된 에러 처리로 인해 결제 내역이 사라진다거나 결제가 여러 번 처리된다면 매우 큰 혼란이 생길 것입니다.
명확한 에러 처리를 위해서는 특정 함수에서 어떤 에러가 발생할 수 있는지 문서화하는 것이 중요하나,
문서와 주석은 outdated 되기 쉽다는 단점이 있습니다.
저희는 이런 문제를 해결하기 위한 방법으로 함수형 프로그래밍을 위한 Kotlin 라이브러리인
[Arrow](https://arrow-kt.io/)의 typed error를 적극적으로 활용하고 있습니다.

Typed error를 사용하면 특정 함수에서 발생할 수 있는 에러를 코드를 통해 문서화할 수 있기 때문에 outdated 될 염려가 없고,
에러 처리가 강제되기 때문에 특정 에러 케이스를 놓친다거나 하는 문제가 발생할 염려가 적습니다.
예를 들어, Arrow를 사용해 함수 시그니처에 typed error를 적용하면 아래와 같은 코드를 작성하게 됩니다.
Typed error를 적용함으로써 예시 코드의 `pay()` 함수에선 `AmountTooBig`, `InvalidCardInfo`, `TransactionAlreadyExists`
에러가 발생할 수 있다는 것을 코드 레벨에서 확인할 수 있습니다.

```kotlin
interface Example {
    fun pay(): Effect<PayError, Unit>

    sealed interface PayError {
      data object AmountTooBig: PayError
      data object InvalidCardInfo: PayError
      data object TransactionAlreadyExists: PayError
    }
}
```

반면 typed error를 사용하는 코드는 이런 의문을 가지게 합니다. ‘Kotlin에서 의도적으로 삭제한 checked exception를 다시 되살리는 것 아닌가?’.
네, typed error는 checked exception과 거의 동일한 의도로 사용됩니다.
Kotlin에서 checked exception을 삭제한 주요 이유는 대부분의 exception은 처리할 수 없는 exception이기 때문입니다.
하지만 저희는 꼭 처리해 주어야 하는 예외 케이스가 있다면 checked exception을 사용하는 것이 그렇지 않은 경우보다 코드 퀄리티를 높여줄 수 있다고 생각했으며,
결제가 예외 처리에 매우 민감한 도메인이라는 점을 감안하여 checked exception을 대신할 수 있는 typed error를 사용하고 있습니다.

물론 typed error를 잘못 사용할 경우에는 checked exception이 가지던 문제점들이 그대로 발생할 수 있습니다.
때문에 올바른 방법으로 사용하는 것이 매우 중요하며, 이에 대한 내용은 추후 별도의 글에서 다뤄보도록 하겠습니다.

## 마치며

지금까지 포트원이 여러 PG사의 인터페이스를 효율적으로 연동하기 위해 논의했던 기술적 결정사항들에 대해 알아보았습니다.
부디 이 글이 비슷한 문제를 해결하고자 하는 분들에게 작게나마 도움이 된다면 좋겠습니다.

포트원은 지금도 고객사에게 더 좋은 결제 경험을 제공하기 위해 노력하고 있습니다.
저희와 함께 간편한 결제 연동이라는 문제를 함께 풀어나가고 싶으신 분이 계시다면 포트원의 문을 두드려 주시면 감사하겠습니다!
