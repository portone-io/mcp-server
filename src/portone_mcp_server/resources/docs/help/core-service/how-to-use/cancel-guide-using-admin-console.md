---
title: 포트원을 통한 결제 취소 방법
category: 결제서비스 (채널설정 및 이용안내) > 이용안내 > 결제취소/환불
seo:
  title: 포트원을 통한 결제 취소 방법
  description: 포트원 관리자 콘솔과 포트원 API를 통해 거래를 취소 및 환불할 수 있습니다. 포트원을 통한 결제취소 방법을 확인해보세요.
  keywords:
    - 관리자콘솔
tags:
  - 공통
  - 결제취소-환불
pgCompanies:
  - 공통
searchTags:
  - API취소
  - API결제취소
  - 환불방법
  - 결제취소
  - 결제취소방법
datetime: 2024-01-25T15:00:00.000Z
---

<Callout content="포트원을 통해 거래를 취소(환불)하는 방법 2가지를 안내해드립니다." />

<Callout content="결제대행사를 통해 직접 취소를 진행할 경우 포트원과 결제상태가 동기화되지 않습니다. 
실제 정상 취소된 건도 포트원을 통해 취소가 요청되지 않기 때문에, 포트원에는 '결제완료'로 상태값이 유지됩니다. 따라서 결제부터 취소까지 모두 포트원의 API 혹은 관리자콘솔을 통해 진행해 주셔야 하는 점 유의하여 주시기 바랍니다." title="유의사항" icon="❗" />

### **관리자콘솔을 통해 환불하기**

- 경로 : 포트원 관리자콘솔 클릭 > 내역 > 우측 표기된 취소 버튼으로 취소



2\. 포트원 관리자콘솔 클릭 > 내역 > 취소하고자 하는 거래건의 행을 클릭 > 결제내역 상세 결제취소 탭 진입



<Callout title="포트원 관리자콘솔 보러가기↗" />

### **API로 환불하기**

- 포트원에서 제공드리는 API로 환불요청이 가능합니다. 운영하시는 사이트 내에서 고객이 취소를 요청할 때\
  자동으로 취소처리가 되도록 시스템을 구현하고자 하는 경우 아래 API를 활용하시면 됩니다.
  - V1 취소요청 API [POST `/payments/cancel`](https://developers.portone.io/api/rest-v1/payment#post%20%2Fpayments%2Fcancel)
  - V2 취소요청 API [POST `/payments/{paymentId}/cancel`](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Fcancel)

<Callout title="V1 API 상세 문서 보러가기↗" />

<Callout title="V2 API 상세 문서 보러가기↗" />
