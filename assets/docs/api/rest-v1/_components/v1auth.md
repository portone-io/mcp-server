---
title: V1 API 인증 방법
description: 포트원 V1 API 사용 시 인증 방법에 관한 내용입니다.
targetVersions:
  - v1
---

포트원 API를 호출할 때는 **액세스 토큰**을 `Authorization` 헤더에 넣어주어야 합니다.\
액세스 토큰은 [access\_token 발급 API - POST /users/getToken](https://developers.portone.io/schema/v1.openapi.yml)를 호출해서 발급받을 수 있습니다.

액세스 토큰 발급 API를 호출하려면 **API 키**와 **API 시크릿**을 인자로 넣어주어야 합니다.

<details>

<summary>API 키와 API 시크릿 확인하기</summary>

1. [관리자 콘솔 `상점・계정 관리` 화면](https://admin.portone.io/merchant) 접속
2. `내 식별코드・API Keys` 버튼 클릭

(이미지 첨부: API 키와 API 시크릿은 관리자 콘솔 → 상점・계정 관리 메뉴 → 내 식별코드・API Keys 모달을 열어서 확인하실 수 있습니다)

<div class="hint" data-style="danger">

**API 시크릿은 절대로 외부에 노출되어서는 안 되는 값**입니다.\
실제 구현에서 액세스 토큰 발급은 꼭 서버 사이드에서 해주세요.

</div>

</details>

<details>

<summary>액세스 토큰 발급 받기</summary>

[access\_token 발급 API - POST /users/getToken](https://developers.portone.io/schema/v1.openapi.yml) 호출

(이미지 첨부: /users/getToken API를 호출해서 액세스 토큰을 발급받습니다)

<div class="hint" data-style="info">

포트원 REST API 서버는 **Google Public NTP**의 시간과 동기화되고 있습니다.

</div>

<div class="hint" data-style="warning">

하위 상점 연동을 할 경우 액세스 토큰을 발급받을 때 **Agent 계정**의 **API 키** 와 **API 시크릿**을 사용해야 합니다.

[Agency & Tier 란?](https://developers.portone.io/opi/ko/support/agency-and-tier)

</div>

</details>

<details>

<summary>액세스 토큰 사용하기</summary>

발급받은 액세스 토큰은 다른 API를 호출할 때\
`Authorization` 헤더에 `Bearer <액세스 토큰>` 형식의 값을 넣어주면 됩니다.

자세한 내용은 [MDN - HTTP 인증 문서](https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication)를 참고해주세요.

(관련 이미지 첨부)

<div class="hint" data-style="warning">

하위 상점 연동을 할 경우 포트원 API 호출시 `Tier` 헤더에 하위 상점 티어 코드를 입력해야 합니다.

[Agency & Tier 란?](https://developers.portone.io/opi/ko/support/agency-and-tier)

(관련 이미지 첨부)

</div>

</details>

<details>

<summary>액세스 토큰 만료기한 연장</summary>

만료된 액세스 토큰으로 API를 호출하면 `401 Unauthorized` 응답을 받습니다.\
액세스 토큰의 만료 기한은 발행시간부터 **30분**입니다.

- 기존 액세스 토큰이 만료되기 전 [access\_token 발급 API - POST /users/getToken](https://developers.portone.io/schema/v1.openapi.yml)를 다시 호출했을 경우
  - 기존 액세스 토큰이 반환됩니다.\
    **만료 기한이 1분 안쪽으로 남았을 때** 요청했다면 기존 액세스 토큰의 만료 기한이 **5분 연장**됩니다.

- 기존 액세스 토큰이 만료된 다음 [access\_token 발급 API - POST /users/getToken](https://developers.portone.io/schema/v1.openapi.yml)를 다시 호출했을 경우
  - 새로운 액세스 토큰이 반환됩니다.

(관련 이미지 첨부)

<div class="hint" data-style="info">

액세스 토큰의 재사용과 만료기한 5분 연장 동작방식은 다음과 같은 상황을 고려해서 설계되었습니다.

- 한 고객사에서 여러 대의 웹서버가 동시에 경쟁적으로 REST API(`/users/getToken`)를 호출하는 상황
- 한 고객사에서 여러 대의 웹서버가 시간 동기화 되어있지 않은 상황

</div>

</details>
