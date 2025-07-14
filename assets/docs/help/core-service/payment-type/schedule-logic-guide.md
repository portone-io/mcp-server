---
title: 정기결제 로직 구현 방법
category: 결제서비스 (채널설정 및 이용안내) > 결제유형 > 정기결제
seo:
  title: 정기결제 로직 구현 방법
  description: 최초 결제정보 저장 이후 재결재가 이뤄지는 정기결제 로직과 구현 방법을 확인해보세요.
tags:
  - 공통
  - 정기결제
  - V1
pgCompanies:
  - 공통
searchTags:
  - schedule API
  - again API
  - 예약결제
  - 재결제
  - 빌링키
  - 정기결제로직
  - 정기결제구현
  - 정기결제
datetime: 2024-01-25T15:00:00.000Z
---

<Callout content="최초에 결제정보를 저장(빌링키 발급)한 이후 재결제는 아래의 두 가지 방식으로 구현하실 수 있습니다.
두 가지 방식 모두 매 결제시마다 포트원으로 재결제에 대한 API를 호출해 주셔야 합니다.
" title="" />

### **정기결제 로직 도식화**



- 고객사에서 원하는 일자에 재결제를 요청하시는 방식 **(again API)**
  [POST /subscribe/payments/again](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)
- 포트원에서 재결제(스케쥴러)를 요청하는 방식 **(schedule API)**
  [POST /subscribe/payments/schedule](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule) \
  재결제가 발생되는 로직은 고객사의 내부 정책에 맞게 직접 요청을 주셔야 합니다.

<Callout content="" icon="" title="schedule API와 again API의 차이점 보러가기 ↗" />

#### **결제와 취소는 모두 고객사의 요청으로 인하여 진행됩니다.**

- 결제와 취소는 포트원에서 자체적으로 진행하지 않고 고객에서 포트원으로 요청된 건에 대하여 진행합니다.
- 정기결제의 재결제 또한 마찬가지로 고객께서 포트원으로 결제 요청을 전달 주셔야 합니다.

#### **정기결제는 정기적인 결제가 아닐 수도 있습니다.**

- 정기결제는 결제정보를 고객사에서 저장하고 있다는 특징이 있습니다.
- 고객사에서는 저장된 결제정보를 활용하여 원하는 때에 결제를 요청할 수 있습니다.
