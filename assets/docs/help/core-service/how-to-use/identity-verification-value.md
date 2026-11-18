---
title: CI, DI 이해하기
category: 결제서비스 (채널설정 및 이용안내) > 이용안내 > 본인인증
seo:
  title: CI, DI 이해하기
  description: 본인인증시 확인할 수 있는 데이터인 CI와 DI 소개 및 각 활용 방법 안내입니다.
tags:
  - 본인인증
  - 다날
  - KCP
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

<Callout content="" title="본인인증시 확인할 수 있는 정보인 CI와 DI를 소개하고 활용방법을 안내드립니다." />

### **CI와 DI 이해하기**

CI와 DI는 모두 개인의 주민등록번호를 암호화한 값이나, 활용 범위에 차이가 있습니다.

- **CI (연계 정보, Connecting Information) , 88 바이트**
  - 사이트 및 인증 기관마다 달라지지 않는 개인 고유번호입니다. 포트원 V1에서는 unique\_key로 부릅니다.
- **DI (중복 가입 확인 정보, Duplicated joining verification Information), 66 바이트**
  - 사이트마다 달라지는 개인 고유번호입니다. 포트원 V1에서는 unique\_in\_site 로 부릅니다.

### **포트원에서 CI, DI 확인하는 방법**

- 본인인증정보를 조회하는 API([GET `/certifications/{imp_uid}`](https://developers.portone.io/api/rest-v1/certification#get%20%2Fcertifications%2F%7Bimp_uid%7D))를 호출하여 응답값으로 CI, DI를 확인하실 수 있습니다.

<Indent level="1">

- unique\_key (string, optional) : CI
- unique\_in\_site (string,optional) : DI

</Indent>

<Callout content="KG이니시스의 통합인증의 경우 일부 인증서에서 DI가 응답되지 않는 경우가 있습니다. (인증사 미제공)" icon="💡" title="참고사항" />

### **FAQ**

1. 휴대폰기기가 (통신사를 바꿨어요 / 개명했어요 / 휴대폰번호가 바뀌었어요) 변경되었습니다. CI, DI가 바뀌나요?

<Indent level="1">

- CI는 같은 고객이라면 바뀌지 않는 고유한 식별정보이므로 기존 CI와 동일합니다. \
  만약 같은 사이트에서 재인증을 하셨다면 DI도 같겠지만 다른 사이트에서 인증을 재시도하셨다면 DI는 바뀔 것입니다.

</Indent>

2\. 다날 PG사를 통해서 이용하는 본인인증용 상점아이디가 2개 입니다. 각각 다른 사이트에 연동해두었는데 동일인이 두 사이트에서 본인인증을 시도하면 CI, DI가 어떻게 응답되나요?

<Indent level="1">

- 동일인이므로 상점아이디 속성과 관계없이 CI는 동일하게 응답됩니다. \
  DI는 상점아이디에 영향을 받으므로 다른 DI를 응답받습니다.

</Indent>

3\. 상점아이디나 인증 기관이 달라도 동일인에게서 동일한 DI를 응답받을 수 있나요?

<Indent level="1">

- 동일한 사이트 식별정보(SI)를 공유할 수 있도록 기관에 요청이 필요합니다.

</Indent>

### **관련 표준**

- TTA, TTAK.KO-12.0038/R2, '_i_-PIN 서비스 중복 가입 확인 정보', 2011.
- TTA, TTAK.KO-12.0170, '_i_-PIN 서비스 연계 정보', 2011.
