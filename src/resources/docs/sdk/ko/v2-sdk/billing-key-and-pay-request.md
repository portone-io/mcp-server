---
title: requestIssueBillingKeyAndPay 요청 형식
description: requestIssueBillingKeyAndPay 호출 시 사용되는 파라미터의 형식을 확인할 수 있습니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/v1-sdk/javascript-sdk/payrq
---

<div class="hint" data-style="info">

아래의 경우 정책상 빌링키 발급과 초회 결제가 함께 일어나야 하므로 이용하는 함수입니다.

- KG이니시스 휴대폰 결제
- 웰컴페이먼츠 휴대폰 결제

위에 해당하지 않는 경우에는 `requestIssueBillingKey` 함수로 빌링키를 발급한 뒤, 별도로 결제를 호출해 주시기 바랍니다.

</div>

## `requestIssueBillingKeyAndPay` 요청 데이터 정의

- request: IssueBillingKeyAndPayRequest

  [definition link](https://developers.portone.io/schema/browser-sdk.yml#/resources/request/IssueBillingKeyAndPayRequest)
