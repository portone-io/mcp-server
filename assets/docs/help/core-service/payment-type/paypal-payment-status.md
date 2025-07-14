---
title: 페이팔 결제상태 변경케이스 안내
category: 결제서비스 (채널설정 및 이용안내) > 결제유형 > 해외결제
tags:
  - 페이팔
  - 해외결제
pgCompanies:
  - 페이팔
searchTags:
  - Pending
  - 페이팔 결제상태
  - 페이팔
  - 페이팔(Express Checkout)
  - 페이팔(Smart Payment Button)
  - 페이팔(Reference Transaction)
datetime: 2024-01-25T15:00:00.000Z
---

<Callout content="페이팔의 경우 결제상태가 즉시 반영되지 않고 검토 후
최종 결제완료로 결정되는 경우가 존재합니다. 이런 경우의 처리 프로세스를 안내드립니다." />

### **발생 케이스**

페이팔의 경우 구매자 / 판매자 보호정책에 의해 결제가 승인된 시점에는 Pending(보류) 상태로 처리한 다음, 페이팔 자체적으로 내부 검토 후 최종 paid(결제완료)되었다고 변경하는 케이스가 존재합니다.

이는 **최초 승인 시점에는 해당 결제에 대해 review가 필요하다고 Paypal이 판단하여 결제실패로 포트원에 응답을 보내고 추후에 완료 처리하는 프로세스**로 보여지는데, 보통 **eCheck 결제수단 혹은 구매자의 Paypal 계정이 명확하지 않을 때 보통 Pending 상태**로 만들게 됩니다.

### **대응 방법**

1. 결제 시점에는 Paypal이 Pending상태의 거래건으로 응답\
   (포트원에서는 이 거래건을 status : failed로 기록합니다 / 페이팔에 한함)
2. (통상적으로 2\~3일 후) 해당 결제건에 대한 이슈가 해결되어 IPN으로 결제승인되었음을 Paypal -> 포트원으로 통지
3. 포트원에서 거래건 status : paid 로 변경 후 거래건에 설정된 Webhook 발송

<Callout content="포트원은 거래상태값을 정의할 때 한국 결제수단 위주로 진행되다보니 Paypal 이 추후 추가되었을 때
해당되는 상태값이 없는 경우가 있어 pending 과 같은 상태를 failed 로 처리하고 있었습니다.
이 부분에 대해서 Paypal Original 상태값을 별도로 조회하실 수 있도록 추가 메타정보를 제공드리고 있습니다." title="포트원에서는 페이팔의 pending을 failed로 처리합니다." icon="💡" />

- 대상 : 포트원 거래상태 (status) 가 failed 인 거래건 중
- 방법 : [https://api.iamport.kr/payments/`{imp_uid}`](https://developers.portone.io/api/rest-v1/payment#get%20%2Fpayments%2F%7Bimp_uid%7D)API 를 통한 조회 시 query string 으로 extension=true 옵션을 추가
  - 예시 : [https://api.iamport.kr/payments/`{imp_uid}`?extension=true](https://developers.portone.io/api/rest-v1/payment#get%20%2Fpayments%2F%7Bimp_uid%7D)
  - 응답 : 응답속성 내 extension 객체가 추가됨
    - extension.PaymentStatus : Paypal 로부터 응답된 주문상태를 의미하는 값으로, Pending 이라는 값인지 체크. PaymentStatus 는 None, Canceled-Reversal, Completed, Denied, Expired, Failed, In-Progress, Partially-Refunded, Pending, Refunded, Reversed, Processed, Voided, Completed-Funds-Held 중 하나입니다.
    - extension.PendingReason : Pending 거래건인 경우 그 사유에 대해 나타내는 코드입니다. none, address, authorization, echeck, intl, multi-currency, order, paymentreview, regulatoryreview, unilateral, verify, other 중 하나입니다.
    - extension.ReasonCode : Pending 거래와는 관련이 없습니다만, 정산금 지급이 홀드된 경우 그 사유를 의미하는 코드입니다. none, chargeback, guarantee, buyer-complaint, refund, other 중 하나입니다.

포트원에서 거래데이터를 조회할 수 있는 API 중 /payments/`{imp_uid}` 에만 현재 extension=true query string 옵션이 동작하므로 참고 부탁드립니다.

<Callout title="V2 페이팔 연동가이드 보러가기↗" />

<Callout title="V1 페이팔(Smart Payment Button) 연동가이드 보러가기↗" />

<Callout title="V1 페이팔(Referenct Transaction) 연동가이드 보러가기↗" />

<Callout title="페이팔(Express Checkout) 연동가이드 보러가기↗" />
