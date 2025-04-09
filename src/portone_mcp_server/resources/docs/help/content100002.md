---
title: API Response 필드 추가 배포예정
category: 업데이트
tags:
  - 업데이트
datetime: 2021-08-02T15:00:00.000Z
---

안녕하세요. 포트원입니다.

포트원을 이용해주시는 고객 여러분께 진심으로 감사드립니다.

아래와 같이 **포트원 API Response** 필드 추가 관련 배포 내용 및 운영 정책을 공유하여 드리오니, 운영하시는 서비스에 영향이 없을지 꼭 확인하시길 바랍니다.

향후에도 포트원 서비스 성능 개선을 위해 API Response 필드 추가 작업은 상시 발생할 수 있으며 고객사에서 서비스 영향 여부 확인이 필요하다고 판단될 경우, 포트원 관리자 콘솔 및 홈페이지 공지사항을 통하여 공유 드릴 수 있도록 하겠습니다.

아래 API Response 필드 추가 내용 꼭 확인 부탁드립니다.

### **일정 및 내용**

- 배포 일정 : 2021-08-04(수) 15:00 \~ 15:30
- 목적 : 포트원 API Response 필드 추가
- 상세내용
  - emb\_pg\_provider : 허브형 결제 PG사 정보
    - ex) \
      카카오페이 : kakaopay\
      네이버페이 : naverpay\
      페이코 : payco \
      삼성페이 : samsung\
      Lpay : lpay\
      KPay : kpay

\[예시] GET /payments/`{imp_uid}`

```javascript
{
  "code": 0,
    "message": "string",
      "response": {
    "imp_uid": "string",
      "merchant_uid": "string",
        "pay_method": "string",
    ......
    "emb_pg_provider" : "string"
    ......
  }
}
```

항상 포트원을 이용해 주시는 고객 여러분께 안전하고 보다 나은 서비스를 제공하도록 최선을 다하겠습니다.

감사합니다.
