---
title: 수동 승인
description: 고객사 서버에서 API를 호출하여 결제를 승인하는 연동 방식입니다.
targetVersions:
  - v2
---

포트원을 통해 PG의 결제 UI를 표시하면, 구매자는 UI에서 정보 입력 및 인증을 진행합니다. 이 과정이 끝나고 UI가 닫히면 자동으로 결제 승인(또는 가상계좌 발급, 빌링키 발급)이 일어납니다.

그러나 채널 설정에서 **수동 승인**을 켜면, 결제 UI가 완료되더라도 고객사 서버에서 포트원의 **수동 승인** API를 호출하지 않으면 결제 승인 등이 일어나지 않습니다.

<div class="hint" data-style="warning">

**수동 승인을 사용할 수 없는 PG**

엑심베이, 페이레터 해외결제의 경우 수동 승인을 지원하지 않고, 채널 설정에서도 해당 항목이 보이지 않습니다.

이는 근본적으로 위챗 결제와 같이 일부 해외 결제수단이 수동 승인을 지원하지 않기 때문입니다. 따라서 추후 포트원에 추가되는 PG가 이러한 결제수단을 지원한다면, 해당 PG에서는 수동 승인을 이용할 수 없을 가능성이 높습니다.

</div>

<div class="hint" data-style="info">

**컨펌 프로세스와의 비교**

수동 승인은 컨펌 프로세스와 동일한 목적의 기능이며, V2 신규 연동에서는 더 간편한 수동 승인 이용을 권장합니다.

컨펌 프로세스를 이용할 수 있는 PG의 목록도 수동 승인과 동일합니다.

</div>

## 수동 승인이 유용한 경우

- 결제 승인 전 마지막으로 재고 확인이 필요할 때
- 수량이 한정된 선착순 판매일 때
- 결제 완료 상태를 웹훅으로 수신하기보다, 직접 API를 호출해서 결제를 완료시키는 것을 선호할 때
- 수동 승인 방식으로 타 결제사를 연동한 상태에서 포트원도 같은 구조로 연동하고 싶을 때

## 자동 승인이 유용한 경우

- 수동 승인을 지원하지 않는 PG를 이용할 때
- 수동 승인을 지원하지 않는 PG를 추후 연동할 가능성이 높을 때 (특히, 위챗 등 다양한 해외 결제수단 연동을 고려하고 있을 때)
- 결제 완료 등 결제 상태를 웹훅으로 수신하는 데 불편함이 없을 때

## 인증 결제 수동 승인 이용 방법

채널 설정에서 수동 승인을 켭니다. 수동 승인 설정은 채널별로 적용됩니다.

수동 승인이 켜진 채널로 `PortOne.requestPayment`를 호출하면 응답에 `paymentToken` 필드가 포함됩니다.
(수동 승인을 켜지 않은 채널이면 `paymentToken` 필드는 포함되지 않습니다.)

이렇게 UI 호출 응답으로 받은 `paymentToken`을 이용해 서버에서 [인증 결제 수동 승인](https://developers.portone.io/api/rest-v2/payment?v=v2#post%20%2Fpayments%2F%7BpaymentId%7D%2Fconfirm) API를 호출하면 결제가 승인됩니다. (가상계좌 발급 건의 경우 수동 승인 API 호출 시에 가상계좌가 발급됩니다.)

## 빌링키 발급 수동 승인 이용 방법

채널 설정에서 수동 승인을 켭니다. 수동 승인 설정은 채널별로 적용됩니다.

수동 승인이 켜진 채널로 `PortOne.requestIssueBillingKey`나 `PortOne.requestIssueBillingKeyAndPay`를 호출하면 응답에 `billingIssueToken` 필드가 포함됩니다.
(수동 승인을 켜지 않은 채널이면 `billingIssueToken` 필드는 포함되지 않습니다.)

이때 빌링키는 아직 발급된 상태가 아닙니다. 따라서 응답으로 전달되는 `billingKey` 값은 `NEEDS_CONFIRMATION`입니다. `requestIssueBillingKeyAndPay`를 사용한 경우에는 `txId` 값 또한 `NEEDS_CONFIRMATION`으로 전달됩니다.

이렇게 UI 호출 응답으로 받은 `billingIssueToken`을 이용해 서버에서 포트원 API를 호출하면 빌링키가 발급됩니다. `requestIssueBillingKeyAndPay`의 경우 빌링키 발급과 함께 초회 결제도 일어납니다.

- `requestIssueBillingKey`의 경우 [빌링키 발급 수동 승인](https://developers.portone.io/api/rest-v2/payment.billingKey?v=v2#post%20%2Fbilling-keys%2Fconfirm) API를 호출합니다.
- `requestIssueBillingKeyAndPay`의 경우 [빌링키 발급 및 초회 결제 수동 승인](https://developers.portone.io/api/rest-v2/payment.billingKey?v=v2#post%20%2Fbilling-keys%2Fconfirm-issue-and-pay) API를 호출합니다.

<div class="hint" data-style="info">

**수동 승인 API 호출 시점**

수동 승인 API는 가능한 한 즉시 호출하는 것을 권장합니다. 타임아웃 시간은 PG별로 상이하지만, 오래 대기하면 승인이 실패할 수 있습니다.

</div>
