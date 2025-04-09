---
title: 결제는 어떻게 취소할 수 있나요?
category: 자주 묻는 질문 (일반 문의) > 결제서비스 > 결제서비스
seo:
  title: 결제는 어떻게 취소할 수 있나요?
  description: >-
    포트원을 통해 거래를 취소(환불)하는 방법 안내입니다. 결제대행사를 통해 직접 취소를 진행하는 경우 포트원에서 취소 여부를 알 수
    없습니다. 결제부터 취소까지 모두 포트원 API 혹은 관리자콘솔에서 진행부탁드립니다.
  keywords:
    - 관리자콘솔
tags:
  - 공통
  - 관리자콘솔
pgCompanies:
  - 공통
searchTags:
  - 취소방법
  - 결제환불
  - API취소
  - 관리자콘솔 환불
  - 환불방법
  - 관리자콘솔 결제취소
  - 콘솔 결제취소
  - 결제취소
datetime: 2024-01-25T15:00:00.000Z
---

<Callout content="" title="포트원을 통해 거래를 취소(환불)하는 방법은 2 가지 입니다." />

- **결제대행사를 통해 직접 취소를 진행하는 경우 포트원에서 취소 여부를 알 수 없기 때문에 정상 취소된 건도 포트원에서는 여전히 '결제완료'로 상태값이 반영되지 않고 남아있게 됩니다**
- **결제부터 취소까지 모두 포트원의 API 혹은 관리자콘솔을 사용해 주셔야 하는 점 유의하여 주시기 바랍니다.**

### **포트원 관리자콘솔을 통해 환불하기**

1. [포트원 관리자콘솔↗](https://admin.portone.io)클릭 > 내역 > 우측 표기된 취소 버튼으로 취소



2\. [포트원 관리자콘솔↗ ](https://admin.portone.io)클릭 > 내역 > 취소하고자 하는 거래건의 행을 클릭 > 결제내역 상세 결제취소 탭 진입



### **포트원의 API로 환불하기**

- 포트원에서 제공드리는 API로 환불요청이 가능합니다.
  - V1 취소요청 API [POST `/payments/cancel`](https://developers.portone.io/api/rest-v1/payment#post%20%2Fpayments%2Fcancel)
  - V2 취소요청 API [POST `/payments/{paymentId}/cancel`](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Fcancel)
    ]
