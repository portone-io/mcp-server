---
title: 결제직전에 재고를 확인할 수 있나요? (Confirm process)
category: 자주 묻는 질문 (일반 문의) > 일반 문의 > 자주 묻는 질문
seo:
  title: 결제직전에 재고를 확인할 수 있나요? (Confirm process)
  description: |
    최종 결제승인 직전 가맹점에서 승인에 대한 확정을 한번 더 진행하실 수 있습니다.
  keywords:
    - 'confirm_url '
    - 재고확인
    - Confirm process
tags:
  - 공통
pgCompanies:
  - KG이니시스
  - 다날
  - NHN KCP
  - 나이스페이먼츠
  - 스마트로
  - 토스페이먼츠
  - 웰컴페이먼츠
  - KICC
  - KSNET
  - 한국결제네트웍스(KPN)
  - KG모빌리언스
  - 스마일페이
  - 페이팔
  - 헥토파이낸셜
  - 카카오페이
  - 네이버페이(결제형)
  - 토스페이
  - 페이코
searchTags:
  - confirm_url
  - 재고확인
  - Confirm process
datetime: 2024-04-16T08:08:41.539Z
---

<Callout content="최종 결제승인 직전 가맹점에서 승인에 대한 확정을 한번 더 진행하실 수 있습니다." />

#### **지원가능한 PG사 알아보기**

- 다날
- KG이니시스
- NHN KCP
- KCP 퀵페이
- 나이스페이먼츠
- 스마트로
- 토스페이먼츠
- 웰컴페이먼츠
- 이지페이(KICC)
- KSNET
- 한국결제네트웍스(KPN)
- KG모빌리언스
- 스마일페이
- 페이팔
- 헥토파이낸셜 내통장결제
- 카카오페이
- 네이버페이 결제형
- 토스페이
- 페이코

#### **지원 불가한 PG사 확인하기**

- 네이버페이 주문형
- 다날 상품권결제
- 키움페이
- 엑심베이

<Callout content="인스타그램 웹뷰는 구조상 confirm process 적용이 불가하기 때문에 가맹점에서 별도 분기 처리 로직을 추가해 주셔야 합니다. " icon="💡" title="유의사항" />

#### **연동 방식**

포트원 서버에서 PG사로 최종 요청 보내기 직전 포트원→ 가맹점으로 HTTP 요청을 보내게 됩니다.\
(POST)  요청을 받을 URL은 매 결제건마다 confirm\_url 이라는 파라미터로 지정하실 수 있으며, 지정하지 않는 경우 기존처럼 그냥 결제 진행됩니다.

POST 요청에 대해서는 5초 내로 응답을 해주셔야 하며(Timeout) 결제진행은 200응답, 거절은 그 외의 응답을 해주시면 됩니다.  (confirm\_url이 요청된 거래에 대해 Timeout 이 발생하면 500응답을 받은 것으로 간주하고 결제는 중단됩니다)

- **IMP.request\_pay(param) 호출시 confirm\_url 파라미터 지정**

포트원에서 결제진행여부를 확인할 URL을 입력해주세요! \
결제승인 직전 해당 URL로 아래와 같은 POST요청을 보내게 됩니다. (Content-Type은 application/json 으로 보내게 됩니다)

<Indent level="1">

- imp\_uid
- merchant\_uid
- amount

</Indent>

```javascript
IMP.request_pay({

  //다른파라미터 생략

  confirm_url: '

  [https://test.com/payments/confirm](https://test.com/payments/confirm)

  '

})
```

- **포트원에서 confirm URL로 POST요청을 보냈을 때 결제를 진행하려면 HTTP Status 200 응답을, 그렇지 않으면 그 외의 응답을 보내시면 됩니다 (ex. 500)**\
  응답본문 Json 에 reason 이라는 필드가 있으면 해당 정보를 결제실패사유로 기록하고 고객에게도 출력하게 됩니다.

```javascript
{

  "reason" : "재고수량부족"

}
```

<Callout content="이용을 원하시면 포트원 기술지원팀(support@portone.io)로 포트원 계정과 함께 confirm process 설정요청을 주시기 바랍니다." title="참고사항" icon="💡" />
