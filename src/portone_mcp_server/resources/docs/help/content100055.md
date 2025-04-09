---
title: '[📌주요공지] HTTP 평문 통신 지원 중단 및 TLS 버전, Cipher Suite 업데이트 안내'
category: 공지사항
tags:
  - 공지사항
datetime: 2024-04-09T06:47:10.391Z
---

안녕하세요,

저희 코리아 포트원에서는 고객님들의 데이터 보안을 최우선으로 생각하고 있습니다. \
고객님들께 더욱 안전한 환경을 제공하기 위해, <Highlight text="&quot;2024년 9월 1일부터 일부 위험한 통신 프로토콜 지원을 중단&quot;" /> 하게 되었습니다.

2024년 9월 1일 이후로는 아래 3가지 경우에 해당하는 API 호출이 금지되므로,[포트원에서 제공드리는 가이드 ↗](https://developers.portone.io/opi/ko/support/tls-support?v=v1)에 따라 안전한 프로토콜만을 사용하고 계시는지 다시 한번 확인 부탁드립니다.

<Highlight text="1.HTTP 평문 통신 지원 중단" />

- 2024년 9월 1일부터, 코리아포트원에서 제공되는 API 서비스(api.iamport.kr)는 HTTP 평문 통신을 지원하지 않게 됩니다.
- HTTP 평문 통신을 이용하고계시는 경우 HTTPS를 이용해 API 호출이 가능하도록 변경해주셔야하며 HTTPS 통신 시 사용하게 될 TLS 버전 및 Cipher Suite 역시 아래 요구사항에 맞게 적용이 필요합니다.

<Highlight text="2.TLS 1.0 및 1.1 지원 중단" />

- 2024년 9월 1일부터, 코리아포트원에서 제공되는 API 서비스(api.iamport.kr)는 TLS 1.0 및 1.1에 대한 지원을 중단합니다.
- 이전 버전의 TLS를 사용 중인 경우 시스템 또는 앱 업데이트가 필요합니다.

<Highlight text="3.일부 취약한 암호문 집합(Cipher Suite) 지원 중단" />

- 2024년 9월 1일부터, 코리아포트원에서 제공되는 API 서비스(api.iamport.kr)는 보안에 취약한 일부 legacy cipher suite의 지원을 중단합니다.
- 지원 중단에 해당되는 cipher suite를 사용하시는 경우 시스템 또는 앱 업데이트가 필요합니다.

☞ 지원 중단 대상 TLS 버전 및 cipher suite, 버전 업그레이드에 대한 가이드 및 관련 자세한 사항들은 [TLS 지원범위 안내](https://developers.portone.io/opi/ko/support/tls-support?v=v1) 를 확인해주시기 바랍니다.

코리아포트원 서비스를 이용해주시어 감사드리며 더 나은 서비스 제공을 위해 항상 노력하겠습니다. \
궁금한 사항이나 추가적인 정보가 필요하시면 언제든지 문의주시기 바랍니다.

감사합니다.\
코리아포트원 개발팀 드림
