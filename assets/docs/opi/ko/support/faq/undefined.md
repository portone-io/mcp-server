---
title: 자주 묻는 질문
description: 고객사에서 빈번하게 물어보시는 질문을 확인 합니다.
cover: >-
  https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxOTcwMjR8MHwxfHNlYXJjaHwzfHxRdWVzdGlvbnxlbnwwfHx8fDE2ODE3MTczODk&ixlib=rb-4.0.3&q=85
coverY: 185
targetVersions:
  - v1
---

<details>

<summary>웹훅 발송규칙</summary>

- 기본적으로 1회 발송 됩니다.
- 재발송 설정을 희망하는 경우 1분 단위로 최대 5회까지 발송이 가능하며 고객사 응답(**HTTP STATUS**)이 **200**응답을 주시는 경우 발송은 중단됩니다.
- 관리자 콘솔에서 웹훅 재 전송이 가능합니다. (결제승인내역 -> 웹훅로그 -> 재전송)
- 웹훅주소를 변경한 경우 과거거래 재 발송시 기존 웹훅 URL로 전송됩니다.

</details>

<details>

<summary>통합 응답코드 제공 여부</summary>

결제응답으로 내려가는 오류코드 및 메세지는 원천사(PG사)가 내려주는 응답코드와 메세지를 그대로 내려드리고 있습니다. 당사와 연동되어 있는 PG사에 따라 응답코드와 메세지가 모두 상이하여 통합적으로 정리되어 있는 오류코드표는 존재하지 않습니다.

</details>

<details>

<summary>운영계정 및 개발계정 구분방법</summary>

**하나의 계정으로 실모드 & 테스트모드 운영**

기존 설정되어있던 항목에 'PG사 추가' 하여 테스트용 상점정보를 입력

- 장점: 동일한 고객사 식별코드 / API key, secret 으로 테스트가 가능
- 단점: 상용계정과 함께 운영하기 때문에 PG설정/저장에 주의필요

**\[체크사항]**

동일 PG의 경우 상점 아이디별로 결제요청을 하려면 pg 파라미터에 **PG사명.상점아이디** 로 지정하여 요청해야 합니다.

**테스트용도로 새로운 계정 생성하여 분리**

포트원 관리자페이지(<https://admin.portone.io/>) 회원가입 하시어 개발용도의 계정을 생성하시는 방법입니다.

- 장점 : 상용과 개발용을 분리함으로써 안정적인 테스트 가능
- 단점 : 고객사 식별코드 / API key, secret 정보가 달라지다보니 소스코드 분기가 필요

</details>

<div class="hint" data-style="info">

**더 많은 질문 리스트는 헬프센터를 참고해 주세요**

[헬프센터 바로가기](https://help.portone.io/category/faq)

</div>
