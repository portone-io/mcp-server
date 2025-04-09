---
title: CI, DI 값 이해하기
category: 결제서비스 (채널설정 및 이용안내) > 이용안내 > 본인인증
seo:
  title: CI, DI 값 이해하기
  description: 본인인증시 확인할 수 있는 데이터인 CI와 DI값 소개 및 각 활용방법 안내입니다.
tags:
  - 본인인증
  - 다날
  - KG이니시스
pgCompanies:
  - KG이니시스
  - 다날
searchTags:
  - 개인고유식별키
  - DI
  - CI
datetime: 2024-01-25T15:00:00.000Z
---

<Callout content="" title="본인인증시 확인할 수 있는 데이터인 CI와 DI값을 소개하고 활용방법을 안내드립니다." />

### **CI 와 DI 값을 이해하기**

- **CI (Connection Information) , 88byte : 개인 고유 식별키**
  - 인증업체, 인증방법 등과 관계없이 개인에게 고유하게 부여되는 온라인상 주민등록번호로, 포트원에서는 unique\_key로 부릅니다.
- **DI (Duplication Information) , 66byte : 사이트별 개인 고유 식별키**
  - 인증업체 혹은 인증되는 PG사의 상점아이디별로 달라지는 개인 고유번호로 포트원에서는 unique\_in\_site 로 부릅니다.

### **포트원에서 CI, DI값 확인하는 방법**

- 본인인증정보를 조회하는 API([GET `/certifications/{imp_uid}`](https://developers.portone.io/api/rest-v1/certification#get%20%2Fcertifications%2F%7Bimp_uid%7D))를 호출하여 응답값으로 CI, DI값을 확인하실 수 있습니다.

<Indent level="1">

- unique\_key (string, optional) : CI
- unique\_in\_site (string,optional) : DI

</Indent>

<Callout content="KG이니시스의 통합인증의 경우 일부 인증서에서 DI값이 응답되지 않는 경우가 있습니다. (인증사 미제공)" icon="💡" title="참고사항" />

### **FAQ**

1. 휴대폰기기가 (통신사를 바꿨어요 / 개명했어요 / 휴대폰번호가 바뀌었어요) 변경되었습니다. CI, DI 값이 바뀌나요?

<Indent level="1">

- CI는 같은 고객이라면 바뀌지 않는 고유한 식별정보이므로 기존 CI 값과 동일합니다. \
  만약 같은 사이트에서 같은 인증방법으로 재 인증을 하셨다면 DI값도 같겠지만 다른 사이트 혹은 다른 인증방식으로 인증을 재시도하셨다면 DI 값은 바뀔 것 입니다.

</Indent>

2\. 다날 PG사를 통해서 이용하는 본인인증용 상점아아디가 2개 입니다. 각각 다른 사이트에 연동해두었는데 동일인이 두 사이트에서 본인인증을 시도하면 CI, DI 값이 어떻게 응답되나요

<Indent level="1">

- 동일인이므로 상점아이디 속성과 관계없이 CI는 동일하게 응답됩니다. \
  DI는 상점아이디에 영향을 받으므로 다른 DI 값을 응답받습니다.

</Indent>
