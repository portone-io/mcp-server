---
title: requestIssueBillingKey 요청 형식
description: requestIssueBillingKey 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrq
---

<div class="hint" data-style="info">

아래의 경우에는 정책상 빌링키 발급과 초회 결제가 함께 일어나야 하므로 `requestIssueBillingKeyAndPay` 함수를 이용해 주세요.

- KG이니시스 휴대폰 결제
- 웰컴페이먼츠 휴대폰 결제

</div>

## `requestIssueBillingKey` 요청 데이터 정의

- request: IssueBillingKeyRequest

  [definition link](https://developers.portone.io/schema/browser-sdk.yml#/resources/request/IssueBillingKeyRequest)
