---
title: 본인인증 결과 파라미터
description: 본인인증 요청에 대해 반환되는 응답 정보를 확인합니다.
targetVersions:
  - v1
versionVariants:
  v2: /sdk/ko/v2-sdk/identity-verification-response
---

## rsp (object) <a href="#request_pay-rsp" id="request_pay-rsp" />

- success: boolean

  **본인인증 성공여부**

- error\_code: string

  **실패코드**

- error\_msg: string

  **실패사유 문구**

- imp\_uid: string

  **고유 본인인증 번호**

- merchant\_uid: string

  **주문번호**

  본인인증창 요청시 전달된 주문번호가 그대로 반환됩니다.
