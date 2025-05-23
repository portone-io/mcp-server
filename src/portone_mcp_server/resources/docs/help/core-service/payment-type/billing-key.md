---
title: 정기결제의 '빌링키' 개념 안내
category: 결제서비스 (채널설정 및 이용안내) > 결제유형 > 정기결제
seo:
  title: 정기결제의 '빌링키' 개념 안내
  description: >-
    정기결제 전 고객의 카드정보에 대응하는 결제용 암호화 key인 빌링키가 발급됩니다. 빌링키 발급 방식은 결제창 방식과 API 방식
    2가지가 있으며, 향후 정기결제 진행시 이때 발급된 빌링키를 이용하여 결제가 이뤄지게 됩니다.
tags:
  - 공통
  - 정기결제
pgCompanies:
  - 공통
searchTags:
  - 빌링키발급
  - customer_uid
  - 정기결제 빌링키
  - 빌링키
datetime: 2024-01-25T15:00:00.000Z
---

### **빌링키의 개념**

- 고객이 정기결제를 시도하고 난 뒤 고객사에서는 고객의 결제정보를 저장할 수 있습니다.
- 결제정보는 민감한 정보이기 때문에 카드사에서는 해당<Highlight text="카드 정보에 대응하는 결제용 암호화 key인 빌링키" />를 \
  발급해 줍니다.
- 포트원에서는 빌링키 발급 시 고객사에서 지정한 customer\_uid를 unique\_key로 포트원 서버에 저장합니다.
- 보안상의 이유로 서버는 빌링키에 직접 접근하실 수 없기 때문에 빌링키와 대응하는 customer\_uid를 \
  활용하셔야 합니다. 만약 고객이 여러 장의 카드를 등록하였다면 customer\_uid를 카드 한 장에 대응하도록 \
  값을 구성해 주셔야 합니다.

### **빌링키 발급 방식**

###### **빌링키를 발급받는 방식은 총 2가지가 존재합니다.**

1. 결제창 방식 : PG사의 결제창을 띄워 결제정보를 입력하여 빌링키를 발급받는 방식

<Indent level="1">

- PG사에서 제공하는 결제창 화면을 반드시 띄워야 합니다.
- 결제창 호출(IMP.request\_pay) 시 customer\_uid 파라미터를 반드시 함께 지정해야 합니다.
- PG사에서 요구하는 본인인증(공인인증) 절차가 존재할 수 있습니다.

</Indent>



2\. API 방식 : API 호출로 빌링키를 발급받는 방식

<Indent level="1">

- 고객이 카드정보를 입력하는 화면 UI를 직접 구현해야 합니다.
- API 호출시 필요한 고객의 카드정보를 반드시 함께 호출해야 합니다.

</Indent>



### **빌링키 발급시 필요한 정보**

###### **빌링키 발급 시에 기본적으로 필요한 정보는 다음과 같습니다.**

<Indent level="1">

- 카드번호
- 유효기간(년/월)
- 생년월일(6자리) 혹은 사업자번호 10자리 (무기명 법인 사업자의 경우에만 사업자 번호를 입력)
- 비밀번호 앞 2자리

</Indent>

<Callout content="필요한 정보 갯수는 결제대행사별로 다소 상이할 수 있으나 대부분의 경우 위 4가지를 모두 요구합니다." title="참고사항" icon="💡" />
