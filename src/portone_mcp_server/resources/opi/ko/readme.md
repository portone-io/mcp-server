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

<a class="m-4" href="https://developers.portone.io/api/rest-v1">

<span>API 문서 바로가기</span>

<i class="i-ic-baseline-chevron-right inline-block text-2xl" />

</a>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<a class="m-4" href="https://developers.portone.io/api/rest-v2">

<span>API 문서 바로가기</span>

<i class="i-ic-baseline-chevron-right inline-block text-2xl" />

</a>

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
