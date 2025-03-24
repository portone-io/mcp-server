---
title: 페이팔
description: 페이팔 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/spb/readme
---

## 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널을 설정해야 합니다.
포트원 V2 결제 모듈을 사용하시려면 페이팔(SPB/RT)로 연동해야 합니다.

<div class="hint" data-style="info">

포트원 V2에서는 페이팔 일반결제의 경우 SPB(Smart Payment Button), 정기결제의 경우 RT(Reference Transaction) 방식만 지원합니다. <br />
페이팔은 카드나 계좌 등의 결제수단을 지정하여 결제를 호출할 수 없습니다. (단, 페이팔 계정내에서 사용자가 등록한 결제수단에 따라 카드 혹은 계좌 등을 선택할 수 있습니다.)

</div>

<div class="hint" data-style="info">

페이팔의 경우 다른 결제대행사(PG)의 결제창 호출 방식과 달리 **버튼을 렌더링**한 후 결제를 진행해야 합니다.

</div>

## 주요 파라미터

- 일반결제 시 `uiType`파라미터를 `PAYPAL_SPB`, 빌링키 발급 시 `PAYPAL_RT`로 설정해야 합니다.
  페이팔의 경우 `uiType` 파라미터를 필수로 입력해야 합니다.

- 페이팔의 경우 `payMethod`, `windowType` 파라미터를 생략한 채 호출해도 됩니다.

  - 단, `windowType` 파라미터 지정 시 PC 및 모바일 환경 모두 `UI`로 지정하셔야 하며, 이 외의 값을 입력하는 경우 에러가 리턴됩니다.

## 일반 결제/빌링키 발급 공통 준비 사항

페이팔의 경우 고객사의 화면에 페이팔 결제/빌링키 발급 버튼을 렌더링 한 후, 페이팔의 버튼을 클릭하여 페이팔의 결제/빌링키 발급 창을 호출하는 방식입니다.

페이팔의 버튼을 렌더링 하기 위해, 버튼을 렌더링 할 곳에 클래스명이 `portone-ui-container`인 DOM element를 선언하셔야 합니다.

```html
<!--
  페이팔 버튼을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 DOM element를 넣습니다.
  포트원 SDK는 해당 id를 가지는 element를 찾아 버튼을 렌더링합니다.
-->
<div class="portone-ui-container">
  <!-- 여기에 페이팔 버튼이 생성됩니다. -->
</div>
```

## 일반 결제(`loadPaymentUI`) 호출하기

일반 결제의 경우, 고객사의 결제 화면에 페이팔 결제 버튼을 렌더링 하기위해 `loadPaymentUI` 함수를 사용해야 합니다.

결제 성공 시의 동작을 `onPaymentSuccess` 콜백 함수에, 결제 실패 시의 동작을 `onPaymentFail`에 작성해야 합니다.

```ts
const requestData = {
  uiType: "PAYPAL_SPB",
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceecl",
  channelKey: "channel-key-893597d6-e62d-410f-83f9-119f530b4b11",
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
};
const response = await PortOne.loadPaymentUI(requestData, {
  onPaymentSuccess: (response) => {
    setResult(response);
  },
  onPaymentFail: (error) => {
    alert(error);
  },
});
```

(관련 이미지 첨부)

따라서 다른 PG사와 결제 플로우가 상이하기 때문에 고객사는 **결제(체크아웃) 페이지가 렌더링 되는 시점에**
`PortOne.requestPayment` 함수 대신 **`PortOne.loadPaymentUI`함수를 별도로 호출해 페이팔 결제 버튼을 렌더링**한 후 사용해야 합니다.

(이미지 첨부: 페이팔 일반결제 연동 플로우)

### 결제 요청 데이터 업데이트

페이팔의 결제 플로우에 의하면 고객사의 결제 페이지가 렌더링될 때 결제 요청 데이터가 결정되어야 하고,
결제 페이지 내에서 구매자의 정보(ex. 구매자 이름, 구매자 주소 등)가 새로 입력되거나 혹은 변경되거나,
쿠폰 및 포인트 사용으로 인한 결제 금액에 대해 변경이 발생한 경우 최종적으로 결정된 구매 정보를 기준으로 페이팔 결제버튼을 새로 렌더링 시킨 후 사용하도록 권장하고 있습니다.

하지만 이런 방식으로 사용하는 것은 번거롭기에 포트원에서는 고객사의 편의를 위해 최초 페이팔 결제 버튼을 렌더링 시킨 후 주문 정보가 변경되었을 때,
추가로 결제 버튼 렌더링하지 않고 **결제 요청 데이터를 업데이트**할 수 있는 `PortOne.updateLoadPaymentUIRequest` 함수를 제공하고 있습니다.

구매 정보 변경이 있을 경우 **`PortOne.updateLoadPaymentUIRequest`함수를 호출하여 결제 데이터를 업데이트**하시면
구매자가 페이팔 결제 버튼을 누를 때 최종적으로 변경된 결제 요청 데이터로 페이팔 결제창이 호출됩니다.

```ts title="SDK 일반 결제 요청"
import * as PortOne from "@portone/browser-sdk/v2";
const requestData = {
  uiType: "PAYPAL_SPB",
  orderName: "포트원 페이팔 테스트 결제",
  // ...중략
};
function loadPaymentUI() {
  // loadPaymentUI의 파라미터로 결제 요청 데이터, 결제 프로세스 성공, 실패 시 호출될 "콜백 함수"를 전달해야 합니다.
  PortOne.loadPaymentUI({
    requestData,
    onPaymentSuccess: (response) => {
      // 성공 시 호출되는 콜백 함수 내용
    },
    onPaymentFail: (error) => {
      // 실패 시 호출되는 콜백함수 내용
    },
  });
}

function updateLoadPaymentUIRequest() {
  // 결제 요청 데이터가 변경되면 고객사에서 선언한 updateLoadPaymentUIRequest 함수가 호출됩니다.
  // PortOne.updateLoadPaymentUIRequest가 최종적으로 변경 된 결제 요청 데이터를 전달합니다.
  PortOne.updateLoadPaymentUIRequest(requestData);
}
```

## 빌링키 발급(`loadIssueBillingKeyUI`) 호출하기

빌링키 발급의 경우, 고객사의 빌링키 발급 화면에 페이팔 빌링키 발급 버튼을 렌더링 하기위해 `loadIssueBillingKeyUI` 함수를 사용해야 합니다.

발급 성공 시의 동작을 `onIssueBillingKeySuccess` 콜백 함수에, 발급 실패 시의 동작을 `onIssueBillingKeyFail`에 작성하셔야 합니다.

```ts
const requestData = {
  uiType: "PAYPAL_RT",
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
  channelKey: "channel-key-893597d6-e62d-410f-83f9-119f530b4b11",
  issueId: `issue-id-${crypto.randomUUID()}`,
};
const response = await PortOne.loadIssueBillingKeyUI(requestData, {
  onIssueBillingKeySuccess: (response) => {
    setResult(response);
  },
  onIssueBillingKeyFail: (error) => {
    alert(error);
  },
});
```

(관련 이미지 첨부)

따라서 다른 PG사와 결제 플로우가 상이하기 때문에 고객사는 **결제(체크아웃) 페이지가 렌더링 되는 시점에**
`PortOne.requestIssueBillingKey` 함수 대신 **`PortOne.loadIssueBillingKeyUI`함수를 별도로 호출해
페이팔 빌링키 발급 버튼을 렌더링**한 후 사용해야 합니다.

### 빌링키 발급 요청 데이터 업데이트

페이팔의 결제 플로우에 의하면 고객사의 빌링키 발급 페이지가 렌더링될 때 빌링키 발급 요청 데이터가 결정되어야 하고,
해당 페이지 내에서 구매자의 정보(ex. 구매자 이름, 구매자 주소 등)가 새로 입력되거나 혹은 변경이 발생한 경우
최종적으로 결정된 빌링키 발급 정보를 기준으로 페이팔 빌링키 발급 버튼을 새로 렌더링 시킨 후 사용하도록 권장하고 있습니다.

하지만 이런 방식으로 사용하는 것은 번거롭기에 포트원에서는 고객사의 편의를 위해 최초 페이팔 빌링키 발급 버튼을 렌더링 시킨 후
주문 정보가 변경되었을 때, 추가로 빌링키 발급 버튼을 렌더링하지 않고 **빌링키 발급 요청 데이터를 업데이트**할 수 있는
`PortOne.updateLoadIssueBillingKeyUIRequest` 함수를 제공하고 있습니다.

빌링키 발급 정보 변경이 있을 경우 **`PortOne.updateLoadIssueBillingKeyUIRequest`함수를 호출하여 데이터를 업데이트**하시면
구매자가 페이팔 빌링키 발급 버튼을 누를 때 최종적으로 변경된 데이터로 페이팔 빌링키 발급창이 호출됩니다.

(이미지 첨부: 페이팔 정기결제 빌링키 발급 연동 플로우)

```ts title="SDK 빌링키 발급 요청"
import * as PortOne from "@portone/browser-sdk/v2";
const requestData = {
  uiType: "PAYPAL_RT",
  // ...중략
};
function loadIssueBillingKeyUI() {
  // loadIssueBillingKeyUI 파라미터로 결제 요청 데이터, 결제 프로세스 성공, 실패 시 호출될 "콜백 함수"를 전달해야 합니다.
  PortOne.loadIssueBillingKeyUI({
    requestData,
    onIssueBillingKeySuccess: (response) => {
      // 성공 시 호출되는 콜백 함수 내용
    },
    onIssueBillingKeyFail: (error) => {
      // 실패 시 호출되는 콜백함수 내용
    },
  });
}

function updateLoadIssueBillingKeyUIRequest() {
  // 결제 요청 데이터가 변경되면 고객사에서 선언한 updateLoadIssueBillingKeyUIRequest 함수가 호출됩니다.
  // PortOne.updateLoadIssueBillingKeyUIRequest가 최종적으로 변경 된 결제 요청 데이터를 전달합니다.
  PortOne.updateLoadIssueBillingKeyUIRequest(requestData);
}
```

## 비동기 프로세스 처리하기

결제 승인 및 취소 시 비동기 프로세스가 존재하는 경우 결제 상태를 최종적으로 반영하기 위해서 반드시 **웹훅 연동을 해야**합니다.  \[[→ 웹훅 연동하기 바로가기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)]

### 비동기 상태

1. 결제 요청 후 대기 상태
   페이팔 결제 건은 결제 승인 요청 시 바로 승인 되지 않고 일정 시간이후 처리되는 "승인 대기(pending)" 상태가 존재합니다.
   때문에 트랜잭션 종료 시 콜백 함수로 전달되는 결제 아이디(paymentId)로 결제 내역을 조회하여 status 응답에 따라 후처리 로직을 구현해야 합니다. \[[→ 결제내역 단건조회 API 바로가기](https://developers.portone.io/api/rest-v2/payment#get%20%2Fpayments%2F%7BpaymentId%7D)]

2. 결제 취소 후 대기 상태
   결제 취소 시 취소 승인이 바로 되지 않고 일정 시간이후 취소 승인이 처리되는 경우가 존재합니다.

결제 취소 API를 통해 결제를 취소한 경우 API 응답의 `status` 값을 기준으로 취소 승인 여부를 판단해야 합니다.
취소 승인 대기인 경우 `status` 값이 `REQUESTED`로 응답되며 이후 취소 승인이 완료되면 웹훅이 발송됩니다.

콘솔을 통해 결제를 취소한 경우 취소 승인이 바로 되지 않으면 결제 상태는 변경되지 않고,
콘솔 내 \[결제내역 상세 > 취소요청내역] 탭에서 취소 요청 내역을 확인할 수 있습니다.
이후 취소 승인이 되면, 결제 취소로 상태가 변경됩니다.

<details>

<summary>콘솔 표시 예시</summary>

(이미지 첨부: 결제 취소 후 취소 승인 대기상태)

(이미지 첨부: 결제 취소 후 취소 승인 대기상태일 때 결제내역 상세)

</details>

## 고위험 산업(STC) 안내

페이팔은 판매자 보호 정책을 통해 고객사 거래에서 이상거래나 사기 등 위험 발생 시, 판매자 보호 정책을 통해 고객사의 손해를 보존하는 판매자 보호 프로그램을 가지고 있습니다.
이 판매자 보호 정책을 적용하기 위해서는 페이팔 측에서 제공하는 STC 기능을 사용해야 합니다.

<div class="hint" data-style="warning">

**고위험 산업군(게임과 같은 디지털 상품 또는 중고거래 등)의 경우 페이팔에서 STC API를 통해 판매자 보호 정책을 적용하도록 강력하게 요구하고 있습니다.**
**또한, 고위험 산업군이 아닌 경우에도 STC API를 연동하는 것을 권장하고 있습니다.**

판매자 보호 정책에 관한 자세한 내용 및 협의가 필요한 경우 페이팔에 직접 문의해 주세요.

<br />

---

<br />

고위험 산업에 해당하는 산업군들은 다음과 같습니다.

1. 이벤트/티켓 판매 산업

2. 연료 산업

3. 게임/디지털 상품 산업

4. 마켓플레이스 사업

5. 온라인 여행 산업(렌터카, 숙박, 여행 패키지, 교통)

6. P2P 산업

7. 소매, 식품 산업

   - **소매, 식품 산업의 경우 다음과 같은 경우에만 STC 연동이 필요합니다.**

     - 모바일 기기를 통해 매장 내 구매가 가능한 산업

   - **다음 산업의 경우에는 STC 연동이 필요하지 않습니다.**

     - 타사 배송업체를 통해 주소로 실물 상품을 배송하는 산업
     - 자체 배송 트럭을 통해 주소로 실물 상품을 배송하는 산업
     - 소비자가 수령할 수 있도록 자체 매장으로 실물 상품을 배송하는 산업

8. 택시, 공유 이동수단 사업

9. 통신사

10. 결제 시스템 보안 서비스 산업

</div>

### 결제 처리

STC 기능을 사용하기 위해 다음 정보를 확인해 주세요.

1. 페이팔 Business 계정 가입 시 선택한 산업 종류(Industry)를 확인해야 합니다.
2. 계정의 산업 종류를 확인한 후, 해당 산업에 맞는 파라미터를 아래와 같은 형식으로 loadUI 호출 시 bypass.paypal\_v2 객체에 추가하여 호출해야 합니다.

<details>

<summary>결제 요청시 STC 적용하기</summary>

```ts
// 해당 파라미터들은 예시로 산업군에 따라 추가 또는 제외 가능한 파라미터들이 있습니다.
_({
  additional_data: [
    {
      key: "sender_account_id", // 고객사 account ID(merchant-id)
      value: "A12345N343",
    },
    {
      key: "sender_first_name", // 고객사의 account에 등록된 구매자의 이름
      value: "John",
    },
    {
      key: "sender_last_name", // 고객사의 account에 등록된 구매자의 이름
      value: "Doe",
    },
    {
      key: "sender_email", // 고객사의 account에 등록된 구매자의 이메일 주소
      value: "example@example.com",
    },
    {
      key: "sender_phone", // 고객사의 account에 등록된 구매자의 연락처
      value: "(02)16705176",
    },
    {
      key: "sender_country_code", // 고객사의 account에 등록된 국가 코드
      value: "KR", // ISO Alpha-2 형식 국가 코드
    },
    {
      key: "sender_create_date", // 고객사의 account에 등록된 국가 코드
      value: "2023-10-10T23:59:59+09:00", // IOS8601 형식
    },
  ],
});
```

</details>

### 산업군 별 파라미터

페이팔에서 지원하는 판매자 보호 정책(Seller Protection Policy) 적용을 위해서, 결제 시에 산업군 별 파라미터를 추가하여 전달해야 합니다.
해당 문서의 파라미터들은 모두 optional이지만, 고위험 거래 처리를 위해 하나 이상의 필드를 추가하여 전달해야 합니다.
페이팔에서는 위험도 분석을 위해, 고객사가 제공할 수 있는 최대한의 데이터를 전달하는 것을 권장하고 있습니다.

모든 파라미터는 String 타입으로 전달해야 합니다. 또한 Format이 작성되어 있지 않은 필드들은 자유 형식으로 작성하여 전달해야 합니다.

<details>

<summary>이벤트/티켓 판매 산업</summary>

|Field Name           |Description                                            |Format                                                                   |
|---------------------|-------------------------------------------------------|-------------------------------------------------------------------------|
|sender\_account\_id  |구매자 계정의 id                                       |                                                                         |
|sender\_first\_name  |구매자의 이름                                          |                                                                         |
|sender\_last\_name   |구매자의 성                                            |                                                                         |
|sender\_email        |구매자의 이메일                                        |E.123 - Email Address                                                    |
|sender\_phone        |구매자의 휴대전화 번호                                 |E.123 - Telephone Number (national notation)                             |
|sender\_country\_code|구매자의 국가 코드                                     |ISO Alpha-2 Country Code                                                 |
|sender\_create\_date |구매자의 계정 생성일                                   |ISO 8601 date format                                                     |
|dg\_delivery\_method |발신 방법                                              |(`email`, `phone`, `venue_pickup`, `kiosk_pickup`) 중의 하나로 전송해야함|
|cd\_string\_one      |여분 필드 1(행사일 등의 정보 입력, 중요도 낮음)        |                                                                         |
|cd\_string\_two      |여분 필드 2 (행사 카테고리 등의 정보 입력, 중요도 낮음)|                                                                         |
|cd\_int\_one         |티켓의 수(중요도 낮음)                                 |                                                                         |

</details>

<details>

<summary>연료 산업</summary>

|Field Name           |Description           |Format                                      |
|---------------------|----------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id      |                                            |
|sender\_first\_name  |구매자의 이름         |                                            |
|sender\_last\_name   |구매자의 성           |                                            |
|sender\_email        |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>게임/디지털 상품 산업</summary>

|Field Name           |Description           |Format                                      |
|---------------------|----------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id      |                                            |
|sender\_first\_name  |구매자의 이름         |                                            |
|sender\_last\_name   |구매자의 성           |                                            |
|sender\_email        |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>마켓플레이스 산업</summary>

|Field Name                      |Description                                                                                                                                                        |Format                                      |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
|sender\_account\_id             |구매자/발신자 계정의 id                                                                                                                                            |                                            |
|sender\_first\_name             |구매자/발신자의 이름                                                                                                                                               |                                            |
|sender\_last\_name              |구매자/발신자의 성                                                                                                                                                 |                                            |
|sender\_email                   |구매자/발신자의 이메일                                                                                                                                             |E.123 - Email Address                       |
|sender\_phone                   |구매자/발신자의 휴대전화 번호                                                                                                                                      |E.123 - Telephone Number (national notation)|
|sender\_address\_zip            |(미국 머천트 한정) 구매자/발신자가 고객사 계정에 등록한 우편번호                                                                                                   |                                            |
|sender\_country\_code           |구매자/발신자의 국가 코드                                                                                                                                          |ISO Alpha-2 Country Code                    |
|sender\_create\_date            |구매자/발신자의 계정 생성일                                                                                                                                        |ISO 8601 date format                        |
|sender\_signup\_ip              |구매자/발신자의 회원 가입 시점의 IP 주소                                                                                                                           |IP(IPv4 / IPv6)                             |
|sender\_popularity\_score       |구매자/발신자의 신용도 점수                                                                                                                                        |(high, medium, low) 중의 하나               |
|receiver\_account\_id           |판매자/수신자 계정의 id                                                                                                                                            |                                            |
|receiver\_create\_date          |판매자/수신자의 계정 생성일                                                                                                                                        |ISO 8601 date format                        |
|receiver\_email                 |판매자/수신자의 이메일                                                                                                                                             |E.123 - Email Address                       |
|receiver\_address\_country\_code|판매자/수신자의 국가 코드                                                                                                                                          |ISO Alpha-2 Country Code                    |
|business\_name                  |판매자/수신자가 계정에 등록한 사업용 이름                                                                                                                          |                                            |
|recipient\_popularity\_score    |판매자/수신자의 신용도 점수                                                                                                                                        |(high, medium, low) 중의 하나               |
|first\_interaction\_date        |발신자/수신자의 첫 번째 상호작용 날짜. '상호작용'의 정의는 고객사에서 정의합니다. ex)발신자와 수신자 간의 첫 번째 거래 시도, 발신자와 수신자 간의 친구 추가 날짜 등|ISO 8601 date format                        |
|txn\_count\_total               |발신자/구매자가 현재까지 고객사에서 진행한 총 거래 횟수(PayPal 또는 기타 결제수단을 통해)                                                                          |Number                                      |
|transaction\_is\_tangible       |판매자/수신자의 거래가 유형 거래인지, 무형 거래인지를 나타내는 필드                                                                                                |유형 거래인 경우 1, 무형 거래인 경우 0      |

</details>

<details>

<summary>온라인 여행 산업(렌터카, 숙박, 여행 패키지, 교통)</summary>

|Field Name               |Description                                                                                              |Format                                      |
|-------------------------|---------------------------------------------------------------------------------------------------------|--------------------------------------------|
|sender\_account\_id      |구매자 계정의 id                                                                                         |                                            |
|sender\_first\_name      |구매자의 이름                                                                                            |                                            |
|sender\_last\_name       |구매자의 성                                                                                              |                                            |
|sender\_email            |구매자의 이메일                                                                                          |E.123 - Email Address                       |
|sender\_phone            |구매자의 휴대전화 번호                                                                                   |E.123 - Telephone Number (national notation)|
|sender\_country\_code    |구매자의 국가 코드                                                                                       |ISO Alpha-2 Country Code                    |
|sender\_create\_date     |구매자의 계정 생성일                                                                                     |ISO 8601 date format                        |
|ota\_type                |여행 산업 종류(숙박인 경우 hotel 등, 교통인 경우 train 등의 종류 입력)                                   |                                            |
|ota\_service\_start\_date|서비스 제공 시작일                                                                                       |ISO 8601 date format                        |
|ota\_service\_end\_date  |서비스 제공 종료일                                                                                       |ISO 8601 date format                        |
|ota\_service\_guest\_t\_f|게스트(서비스를 받는 사람) 변경 가능 여부, 사기범들이 변경 가능 서비스에 비용을 지불하는 경향이 있습니다.|변경 가능시 1, 아닐시 0                     |
|ota\_start\_country      |서비스를 시작한 국가 (ex: 차 렌트, 숙박이 예약된 국가)                                                   |ISO Alpha-2 Country Code                    |
|ota\_start\_city         |서비스를 시작한 도시                                                                                     |                                            |
|ota\_start\_zip\_code    |서비스 시작 장소의 우편 번호                                                                             |                                            |
|cd\_string\_one          |여분 필드 1, 여행 산업 - 교통에 해당하는 머천트만 사용, 티켓 종류 입력                                   |ISO 8601 date format                        |

</details>

<details>

<summary>P2P 산업</summary>

|Field Name                      |Description           |Format                                      |
|--------------------------------|----------------------|--------------------------------------------|
|sender\_account\_id             |구매자 계정의 id      |                                            |
|sender\_first\_name             |구매자의 이름         |                                            |
|sender\_last\_name              |구매자의 성           |                                            |
|sender\_email                   |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone                   |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code           |구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date            |구매자의 계정 생성일  |ISO 8601 date format                        |
|receiver\_account\_id           |수신자 계정의 id      |                                            |
|receiver\_create\_date          |수신자의 계정 생성일  |ISO 8601 date format                        |
|receiver\_email                 |수신자의 이메일       |E.123 - Email Address                       |
|receiver\_address\_country\_code|수신자의 국가 코드    |ISO Alpha-2 Country Code                    |

</details>

<details>

<summary>소매, 식품 산업</summary>

|Field Name           |Description                           |Format                                      |
|---------------------|--------------------------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id                      |                                            |
|sender\_first\_name  |구매자의 이름                         |                                            |
|sender\_last\_name   |구매자의 성                           |                                            |
|sender\_email        |구매자의 이메일                       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호                |E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드                    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일                  |ISO 8601 date format                        |
|dg\_delivery\_method |발신 방법                             |(`email`, `phone`) 중의 하나로 전송해야함   |
|highrisk\_txn\_flag  |고객사에서 고위험으로 분류한 상품 여부|위험 상품인 경우 1, 아닐 시 0               |

</details>

<details>

<summary>택시, 공유 이동수단 산업</summary>

|Field Name           |Description                                                     |Format                                      |
|---------------------|----------------------------------------------------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id                                                |                                            |
|sender\_first\_name  |구매자의 이름                                                   |                                            |
|sender\_last\_name   |구매자의 성                                                     |                                            |
|sender\_email        |구매자의 이메일                                                 |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호                                          |E.123 - Telephone Number (national notation)|
|sender\_address\_zip |(미국 머천트 한정) 구매자/발신자가 고객사 계정에 등록한 우편번호|                                            |
|sender\_country\_code|구매자의 국가 코드                                              |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일                                            |ISO 8601 date format                        |
|highrisk\_txn\_flag  |차량 예약과 같은 고객사에서 고위험으로 분류한 결제 건 여부      |위험 거래인 경우 1, 아닐 시 0               |
|cd\_string\_one      |여분 필드 1                                                     |                                            |

</details>

<details>

<summary>통신사</summary>

|Field Name           |Description           |Format                                      |
|---------------------|----------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id      |                                            |
|sender\_first\_name  |구매자의 이름         |                                            |
|sender\_last\_name   |구매자의 성           |                                            |
|sender\_email        |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>결제 시스템 보안 서비스 산업</summary>

|Field Name           |Description           |Format                                      |
|---------------------|----------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id      |                                            |
|sender\_first\_name  |구매자의 이름         |                                            |
|sender\_last\_name   |구매자의 성           |                                            |
|sender\_email        |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>기타 산업</summary>

|Field Name           |Description           |Format                                      |
|---------------------|----------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id      |                                            |
|sender\_first\_name  |구매자의 이름         |                                            |
|sender\_last\_name   |구매자의 성           |                                            |
|sender\_email        |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일  |ISO 8601 date format                        |
|cd\_string\_one      |여분 필드 1           |                                            |
|cd\_string\_two      |여분 필드 2           |                                            |
|cd\_int\_one         |여분 숫자필드 1       |Number                                      |

</details>

## 사용 가능한 결제수단

결제 수단에 따라 가능한 국가 및 통화가 제한적이오니 자세한 사항은 페이팔에 문의해 주세요.

<details>

<summary>일반 결제수단</summary>

- card

- credit(PayPal Credit (US, UK))

- paylater

  - Pay Later (US): 4개월 무이자 할부 또는 6, 12, 24개월 할부
  - Pay Later (UK): 3개월 무이자 할부 또는 4개월 무이자 할부 + 이후 유이자 할부
  - Pay in 4 (AU): 매 2주마다 4회에 걸쳐 지불
  - 4X PayPal (France): 90일 내 4회에 걸쳐 지불
  - Später Bezahlen (Germany): 3, 6, 12, 24개월 할부 또는 30일 이내 지불
  - Italy: 3개월 할부
  - Spain: 3개월 할부

- bancontact(BE / EUR)

- blik(PL / PLN)

- eps(AT / EUR)

- giropay(DE / EUR)

- ideal(NL / EUR)

- mybank(IT / EUR)

- sepa(DE / EUR)

- p24(PL / PLN, EUR)

- sofort(AT, BE, DE, ES, NL / EUR 또는 GB / GBP)

</details>

<details>

<summary>간편결제수단 (Alternative Methods)</summary>

- Bancontact

  - 구매자: BE / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- BLIK

  - 구매자: PL/ PLN
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- eps

  - 구매자: AT / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- giropay

  - 구매자: DE / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- iDEAL

  - 구매자: IT / EUR

- MyBank

  - 구매자: IT
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- Przelewy24

  - 구매자: PL / PLN, EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- SEPA-Lastschrift

  - 구매자: DE

- SOFORT

  - 구매자

    - AT, BE, DE, ES, NL / EUR
    - GB / GBP

  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

단, **Venmo(US)와 Pay upon Invoice(DE)는 지원하지 않습니다.**

</details>

## 일반결제 유의사항

<details>

<summary>파라미터 사용 시 유의사항</summary>

- orderName: string

  **주문명**

  결제 요청 시 입력한 주문명은 비회원 결제 시에만 결제창에 표기됩니다.

  (이미지 첨부: 예시) 비회원 결제 화면 1)

  (이미지 첨부: 예시) 비회원 결제 화면 2)

  (이미지 첨부: 예시) 회원 결제 화면 1)

  (이미지 첨부: 예시) 회원 결제 화면 2)

- customer.phoneNumber?: string

  **구매자 연락처**

  - 페이팔의 경우 [E164 형식](http://www.itu.int/rec/T-REC-E.164-201011-I/en)으로 입력해야 하며, 입력 된 연락처 정보는 페이팔 비회원으로 결제 시 연락처 정보에 자동 입력됩니다.

    - 예를 들어 한국 구매자의 연락처가 010-1234-5678인 경우 국가번호를 포함하여 821012345678로 입력해야 됩니다.

  - 만약 접속 국가 형식과 맞지 않는 휴대폰 번호를 입력한 경우 자동완성되지 않고 무시되오니 결제창 호출 시 유의하시기 바랍니다.

  (이미지 첨부: 예시) 결제창 내 구매자 연락처 입력 화면)

- products?: object\[]

  **구매 상품 상세 정보**

  - `products.name`(상품명), `products.quantity`(상품 수량), `products.amount`(상품 단위 가격) 정보만 결제창에 표기됩니다.
  - 각 상품의 수량과 단위 가격을 계산했을 때, 총 주문 금액과 **반드시 일치해야**합니다. 일치하지 않는 경우 에러 메시지가 리턴되면서 결제창이 호출되지 않습니다.
  - 예를 들어 17달러인 상품 2개와 23달러인 상품 3개에 대한 구매 상품 정보를 기입한 경우 총 주문금액(`totalAmount`)을 `10300`로 입력해야 결제창이 정상적으로 호출됩니다.
  - 페이팔의 경우 결제 요청 시 **해당 정보를 전달하는 것을 강력하게 권고**하고 있으니 가능한 입력하여 사용하시길 바랍니다.

  ```ts title="예시 코드"
  _({
    //...중략
    products: [
      {
        id: "1666779119262",
        name: "시그니처 핫 초콜릿",
        code: "DRINK_SIGNITURE_HOT_CHOCOLATE",
        amount: 1700,
        quantity: 2,
        tag: "TAG-1",
      },
      {
        id: "1666779134572",
        name: "아이스 아메리카노",
        code: "DRINK_AMERICANO",
        amount: 2300,
        quantity: 3,
        tag: "TAG-2",
      },
    ],
    totalAmount: 10300,
    currency: "USD",
  });
  ```

  (이미지 첨부: 예시) 결제창 내 구매 상품 상세 정보 화면)

  - name: string

    **상품명**

  - amount: number

    **상품 단위 가격**

    - 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.
    - 1000 만큼 원화(KRW) 결제를 하는 경우, scale factor가 0이기 때문에 **1000 \* (10의 0승) = 1000**을 전달해야 합니다.
    - 1.50 만큼 달러(USD) 결제를 하는 경우, scale factor가 2이기 때문에 **1.50 \* (10의 2승) = 150**을 전달해야 합니다.
    - 이렇게 전달 된 값은 실제로 PG사에 결제를 요청할때 currency에 따라 올바른 값으로 변환되기 때문에 반드시 currency값을 필수로 입력해야 합니다.

  - quantity: number

    상품 수량

- currency: string

  **결제 통화**

  페이팔에서 지원하는 통화는 아래 스크린샷을 참고해주세요. 지원하지 않는 통화로 결제 시도시 에러 메시지가 리턴되며 결제창이 호출되지 않습니다. 또한 접속 국가나 결제 수단에 따라 지원하는 통화가 달라질 수 있고, 페이팔의 지원 여부에 따라 결제창 호출이 불가능할 수 있습니다.

  (이미지 첨부: 사용 가능한 결제 통화)

- customer?: object

  **고객 정보**

  - 페이팔 결제창 내에서 비회원으로 결제 시 `customer.firstName`과 `customer.lastName`의 정보가 청구인의 이름과 성으로 자동 입력됩니다. `customer.fullName`으로 결제창을 호출하는 경우 자동입력되지 않으니 유의하시기 바랍니다.
  - 회원으로 결제시에는 **회원 가입시 입력한 이름 정보가 자동으로 입력**되며 결제창 호출 시 입력한 정보로 override 되지 않습니다.

  (관련 이미지 첨부)

  - fullName?: string

    **구매자 전체 이름**

    `fullName`과 `firstName` / `lastName`이 모두 입력된 경우 `fullName`으로 기록됩니다.

  - firstName?: string

    **구매자 이름**

    `firstName`을 입력하는 경우 `lastName`도 필수로 입력해야 합니다. `fullName`이 없고, `firstName`과 `lastName`을 입력한 경우 `{firstName} {lastName}`으로 저장됩니다.

  - lastName?: string

    **구매자 성**

    `lastName`을 입력하는 경우 `firstName`도 필수로 입력해야 합니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - paypal\_v2?: object

    **페이팔에서 제공하는 파라미터 모음**

    - style?: object

      **페이팔 버튼 커스텀마이징**

      페이팔 결제 버튼을 커스텀마이징 할 경우 자세한 내용은 페이팔에서 제공하는 문서([https://developer.paypal.com/sdk/js/reference/#link-style](http://developer.paypal.com/sdk/js/reference/#link-style))를 참고하세요.

      - layout?: string

        **페이팔 버튼 렌더링 방향**

        - `hotizontal` 적용 시 버튼이 최대 2개까지 밖에 렌더링 되지 않습니다. 때문에 페이팔에서는 `layout`을 `horizontal`이 아닌 `vertical`로 설정하도록 권고하고 있습니다.
        - 페이팔 버튼은 기본적으로 vertical(수직)로 렌더링 됩니다.

        ```ts title="예시 코드"
        PortOne.loadPaymentUI(
          {
            //...중략
            bypass: {
              paypal_v2: {
                style: {
                  //...중략
                  layout: "horizontal",
                },
              },
            },
          }, //콜백 함수
        );
        ```

        (이미지 첨부: 예시) vertical style 버튼 표시 화면)

        (이미지 첨부: 예시) horizontal style 버튼 표시 화면)

      - color?: string

        **페이팔 버튼 색상**

        - `gold`, `blue`, `silver`, `white`, `black` 중 선택할 수 있습니다.
        - 기본적으로는 `gold`로 표시됩니다.

      - height?: number

        **페이팔 버튼 크기**

        크기 변경은 25\~55 사이의 값으로만 지정할 수 있습니다.

      - shape?: string

        **페이팔 버튼 모양**

        `rect`(사각 모양)과 `pill`(둥근 모양) 중에 선택할 수 있으며, 기본적으로 `rect` 모양으로 표시됩니다.

      - label?: string

        **페이팔 버튼 라벨**

        - `paypal`, `checkout`, `buynow`, `pay`, `installment` 중 선택할 수 있습니다.
        - 기본적으로 `paypal`로 표시됩니다.
        - `installment`는 결제 국가가 `MX`혹은 `BR`인 경우에만 유효합니다.

      - period?: string

        **페이팔 버튼에 할부 결제 표시**

        `label` 파라미터가 `installment`인 경우 버튼에 표시됩니다.

      - tagline?: boolean

        **페이팔 버튼에 제공되는 추가 설명**

        해당 파라미터를 사용하시기 위해서는 `layout` 파라미터를 `horizontal`로 지정해야 사용하실 수 있습니다.

    - enable-funding?: string

      **렌더링할 페이팔 결제 버튼 지정**

      결제 버튼 종류를 comma(,) separated string으로 지정하여 결제창을 호출하는 경우 해당 버튼을 포함하여 렌더링됩니다.

      ```ts title="예시 코드"
      PortOne.loadPaymentUI(
        {
          // ...중략
          bypass: {
            paypal_v2: {
              "enable-funding": "paylater,card",
            },
          },
        }, //콜백 함수
      );
      ```

      (이미지 첨부: 결제 버튼 종류)

      (이미지 첨부: 예시) 접속 국가: 독일, enable-funding: “paylater” 설정 시 화면)

      (이미지 첨부: 예시) 접속 국가: 이탈리아, enable-funding: “paylater” 설정 시 화면)

      (이미지 첨부: 예시) 접속 국가: 벨기에, enable-funding: “paylater” 설정 시 화면)

    - disable-funding?: string

      **렌더링에서 제외할 페이팔 결제 버튼 지정**

      - 결제 버튼 종류를 comma(,) separated string으로 지정하여 결제창을 호출하는 경우 해당 버튼을 제외하고 렌더링됩니다.
      - 사용 가능한 버튼 종류는 `enable-funding`에서 제공하는 버튼 종류와 동일합니다.

      (이미지 첨부: 예시) 접속 국가: 이탈리아, enable-funding: 'paylater' 설정 시 화면)

      (이미지 첨부: 예시) 접속 국가: 이탈리아, enable-funding: 'paylater', disable-funding: 'mybank' 설정 시 화면)

    - purchase\_units?: object\[]

      **페이팔 주문 상세 정보**

      - 각각의 element에 배송 정보를 담을 수 있습니다.
      - 포트원을 통해 페이팔을 연동하는 고객사는 **`purchase_units`의 길이가 항상 0 또는 1이어야** 합니다.

      * shipping?: object

        **상품 배송지 정보**

        - address?: object

          **상품 수령 주소**

          - 결제창 호출 시 기본적으로 구매자가 페이팔에 가입할 때 입력한 배송주소를 렌더링합니다.
          - `purchase_units\[]`에 입력 된 배송 정보는 결제창에 호출 시 대체로 자동 완성되지만, 페이팔 회원으로 결제할 때와 비회원으로 결제할 때 각각 다른 정책이 적용됩니다.
          - 주문할 때 입력한 주소로 override하고 싶을 때 `purchase_units\[].shipping.address`에 override할 주소를 입력한 후 결제 요청해야 합니다. 단, **주소가 유효하지 않거나 address\_line\_1을 입력하지 않은 경우엔 override가 되지 않을 수 있습니다.**

          <details>

          <summary>예시 1) 페이팔 회원으로 결제 시 `shipping.address` 정보를 입력하지 않은 경우 </summary>

          (이미지 첨부: bypass.paypal\\\_v2.purchase\\\_units\\\[\\].shipping 미입력 → 가입시 설정한 배송 주소로 자동 입력된 화면)

          </details>

          <details>

          <summary>예시 2) 페이팔 회원으로 결제 시 `shipping.address` 정보를 입력한 경우 </summary>

          ```ts
          PortOne.loadPaymentUI(
            {
              bypass: {
                paypal_v2: {
                  // ...중략
                  purchase_units: [
                    {
                      shipping: {
                        address: {
                          // 상품 수령 주소
                          address_line_1: "세종대로 110", // 도로명 주소
                          address_line_2: "서울특별시청", // 아파트 동 호수
                          admin_area_1: "서울특별시", // 주(CA, NY)
                          admin_area_2: "중구", // 시(Los Angeles, New York)
                          postal_code: "04524", // 상품 수령지 우편번호
                          country_code: "KR", // [필수 입력] 상품 수령지 국가 코드
                        },
                        name: {
                          full_name: "홍길동", // 상품 수령인 이름
                        },
                      },
                    },
                  ],
                },
              },
            }, // 콜백 함수
          );
          ```

          (이미지 첨부: bypass.paypal\\\_v2.purchase\\\_units\\\[\\].shipping 입력 → 입력한 배송 주소로 override 된 화면)

          </details>

          <details>

          <summary>예시 3) `shipping.address`의 국가 정보와 구매자의 접속 국가가 일치하지 않은 경우</summary>

          페이팔 결제창에 렌더링 되는 주소 형식은 구매자의 접속 국가에 따라 결정됩니다. 배송 주소의 국가와 구매자의 접속 국가를 다른 경우, 국가 간 주소 체계가 달라 정상적으로 자동입력 되지 않을 수 있습니다.

          (이미지 첨부: 접속 국가 : 미국, payer 및 shipping 정보를 한국 주소 체계로 전달한 화면)

          </details>

          - address\_line\_1: string

            **도로명 주소, ex) `200 N Spring St`**

          - address\_line\_2?: string

            **번지 혹은 건물 호수, ex) `Los Angeles City Hall 1`**

          - admin\_area\_1?: string

            **주와 같은 큰 단위의 주소, ex) `CA`, `NY`**

            - country(UK)
            - state(US)
            - province(Canada)
            - 특별시/광역시/도(Korea)

          - admin\_area\_2?: string

            **도시, 마을 등 중간 단위의 주소, ex) `Los Angeles`**

          - postal\_code?: string

            **우편 번호**

          - country\_code: string

            **국가 코드, ex) `KR`**

    - payer?: object

      **구매자 상세정보**

      - tax\_info?: object

        **구매자 세금 정보**

        - tax\_id?: string

          **구매자 세금 ID**

        - tax\_id\_type?: string

          **구매자 세금 유형**

          브라질(에서 접속한 또는 브라질 계정으로 로그인 한) 구매자인 경우 `bypass.paypal_v2.payer.tax_info` 정보를 필수로 입력해야 합니다.

          ```ts title="예시 코드"
          _({
            tax_info: {
              tax_id: "examplestring",
              tax_id_type: "BR_CPF",
            },
          });
          ```

      - address?: object

        **구매자의 결제 금액 청구지 주소 정보(billing address)**

        페이팔 비회원 결제 시 페이팔 결제창 내 청구지 주소(billing address) 정보로 사용됩니다. 회원으로 결제하는 경우 회원 가입 시 입력한 billing address가 자동 입력되며 해당 파라미터의 정보는 무시됩니다.

        <details>

        <summary>예시 1) 페이팔 회원으로 결제 시 `payer.address` 정보를 입력한 경우</summary>

        입력된 정보는 무시되고 페이팔 가입 시 기입한 구매자의 청구 주소가 자동 입력됩니다.

        ```ts title="예시 코드"
        _({
          bypass: {
            paypal_v2: {
              // ...중략
              payer: {
                address: {
                  address_line_1: "200 N Spring St", // 도로명 주소
                  address_line_2: "Los Angeles City Hall", // 아파트 동 호수
                  admin_area_1: "CA", // 주(CA, NY)
                  admin_area_2: "Los Angeles", // 시(Los Angeles, New York)
                  postal_code: "90012", // 상품 수령지 우편번호
                  country_code: "US", // [필수 입력] 상품 수령지 국가 코드
                },
              },
            },
          },
        });
        ```

        (이미지 첨부: \`payer.address\`입력했음에도 페이팔 가입 시 기입한 정보로 자동 입력된 화면)

        </details>

        <details>

        <summary>예시 2) 페이팔 비회원으로 결제 시 `payer.address` 정보를 입력한 경우</summary>

        입력된 정보가 구매자의 청구 주소지란에 자동 입력됩니다.

        ```ts title="예시 코드"
        _({
          bypass: {
            paypal_v2: {
              // ...중략
              payer: {
                address: {
                  address_line_1: "200 N Spring St", // 도로명 주소
                  address_line_2: "Los Angeles City Hall", // 아파트 동 호수
                  admin_area_1: "CA", // 주(CA, NY)
                  admin_area_2: "Los Angeles", // 시(Los Angeles, New York)
                  postal_code: "90012", // 상품 수령지 우편번호
                  country_code: "US", // [필수 입력] 상품 수령지 국가 코드
                },
              },
            },
          },
        });
        ```

        (이미지 첨부: \`payer.address\`에 입력한 정보로 자동 입력된 화면)

        </details>

        <details>

        <summary>예시 3) 페이팔 비회원으로 결제 시 `payer.address` 정보 미 입력 상태이면서 `shipping.address` 정보를 입력한 경우 </summary>

        구매자의 청구 주소(`bypass.paypal_v2.payer.address`)를 입력하지 않고 배송 주소(`bypass.paypal_v2.pusrchase_units\[].shipping.address`)만 입력한 경우 청구 주소란에 배송 주소가 자동으로 입력됩니다.

        ```ts title="예시 코드"
        _({
          bypass: {
            paypal_v2: {
              // ...중략
              purchase_units: [
                {
                  shipping: {
                    address: {
                      // 상품 수령 주소
                      address_line_1: "세종대로 110", // 도로명 주소
                      address_line_2: "서울특별시청", // 아파트 동 호수
                      admin_area_1: "서울특별시", // 주(CA, NY)
                      admin_area_2: "중구", // 시(Los Angeles, New York)
                      postal_code: "04524", // 상품 수령지 우편번호
                      country_code: "KR", // [필수 입력] 상품 수령지 국가 코드
                    },
                    name: {
                      full_name: "홍길동", // 상품 수령인 이름
                    },
                  },
                },
              ],
            },
          },
        });
        ```

        (이미지 첨부: 예시) 체크박스 선택 시 청구 주소에 shipping 정보가 자동 입력된 화면)

        (이미지 첨부: 예시) 체크박스 선택 해제 시 청구 주소와 배송 주소에 모두 shipping 정보가 자동 입력된 화면)

        </details>

        <details>

        <summary>예시 4) 페이팔 비회원으로 결제 시 `payer.address` 정보와 `shipping.address` 정보를 모두 입력한 경우 </summary>

        구매자의 청구 주소(`bypass.paypal_v2.payer.address`)와 배송 주소(`bypass.paypal_v2.shipping.address`)를 모두 입력한 경우엔, **청구 주소와 동일한 배송주소** 체크박스를 해제했을 때 하단에 렌더링 되는 배송 정보란에 배송 주소가 자동 입력됩니다.

        ```ts title="예시 코드"
        _({
          bypass: {
            paypal_v2: {
              // ...중략
              purchase_units: [
                {
                  shipping: {
                    address: {
                      // 상품 수령 주소
                      address_line_1: "세종대로 110", // 도로명 주소
                      address_line_2: "서울특별시청", // 아파트 동 호수
                      admin_area_1: "서울특별시", // 주(CA, NY)
                      admin_area_2: "중구", // 시(Los Angeles, New York)
                      postal_code: "04524", // 상품 수령지 우편번호
                      country_code: "KR", // [필수 입력] 상품 수령지 국가 코드
                    },
                    name: {
                      full_name: "홍길동", // 상품 수령인 이름
                    },
                  },
                },
              ],
              payer: {
                address: {
                  address_line_1: "고산자로 270", // 도로명 주소
                  address_line_2: "성동구청", // 아파트 동 호수
                  admin_area_1: "서울특별시", // 주(CA, NY)
                  admin_area_2: "성동구", // 시(Los Angeles, New York)
                  postal_code: "04750", // 상품 수령지 우편번호
                  country_code: "KR", // [필수 입력] 상품 수령지 국가 코드
                },
              },
            },
          },
        });
        ```

        (이미지 첨부: 예시) 체크박스 선택 시 청구 주소란에 payer 정보가 자동 입력된 화면)

        (이미지 첨부: 예시) 체크박스 해제 시 payer 정보는 청구 주소란에 shipping 정보는 배송 주소란에 정상적으로 자동 입력된 경우)

        </details>

        <details>

        <summary>예시 5) `payer.address`의 국가 정보와 구매자의 접속 국가가 일치하지 않은 경우 </summary>

        페이팔 결제창에 렌더링 되는 주소 형식은 구매자의 접속 국가에 따라 결정됩니다. 청구 주소의 국가와 구매자의 접속 국가를 다른 경우, 국가 간 주소 체계가 달라 정상적으로 자동입력 되지 않을 수 있습니다.

        (이미지 첨부: 접속 국가 : 미국, \`payer.address\`정보를 한국 주소 체계로 전달한 화면)

        </details>

        - address\_line\_1?: string

          **도로명 주소, ex) `200 N Spring St`**

        - address\_line\_2?: string

          **번지 혹은 건물 호수, ex) `Los Angeles City Hall 1`**

        - admin\_area\_1?: string

          **주와 같은 큰 단위의 주소, ex) `CA`, `NY`**

          - country(UK)
          - state(US)
          - province(Canada)
          - 특별시/광역시/도(Korea)

        - admin\_area\_2?: string

          **도시, 마을 등 중간 단위의 주소, ex) `Los Angeles`**

        - postal\_code?: string

          **우편 번호**

        - country\_code: string

          **국가 코드, ex) `KR`**

</details>

<details>

<summary>미지원 파라미터</summary>

- taxFreeAmount?: number

  **면세 금액**

  페이팔은 면세/복합과세를 지원하지 않기 때문에 taxFreeAmount 입력한 경우 “taxFreeAmount must be 0 in Paypal!”이라는 에러 메시지가 리턴되면서 결제창이 호출되지 않습니다.

- country?: string

  **결제 국가**

  - 페이팔의 경우 실연동 결제 시 **구매자가 접속한 국가에 따라 국가 정보가 자동으로 적용**되어 해당 파라미터로 전달한 국가 정보는 무시됩니다.
  - 예시) `country : US`를 입력하여 결제창을 호출했지만 구매자가 접속한 환경이 “KR(한국)”인 경우 한국에 지원되는 결제 버튼만 렌더링됩니다.
  - 페이팔 sandbox 모드인 경우 입력한 국가 정보로 전달됩니다.

- customer?: object

  **고객 정보**

  - address?: object

    **구매자 주소**

    - 페이팔의 경우 사용되는 주소 체계가 달라 구매자 주소 정보는 `customer.address`이 아닌 **`bypass.paypal_v2.payer.address` 혹은 `bypass.paypal_v2.purchase_units\[].shipping.address`를 사용**해야 합니다.
    - `bypass.paypal_v2.payer.address`, `bypass.paypal_v2.purchase_units\[].shipping.address` 파라미터에 대한 자세한 사항은 **파라미터 사용 시 유의사항** 을 참고하시기 바랍니다.

- redirectUrl?: string

  **리디력션 방식에서 결제 프로세스 완료 후 이동될 고객사 URL**

  페이팔의 경우 PC와 모바일 모두 팝업으로 결제창이 렌더링되기 때문에 결제 프로세스 종료시 콜백 함수가 호촐됩니다. 따라서 redirectUrl 파라미터는 무시됩니다.

- appScheme?: string

  **모바일 결제 후 고객사 앱으로 복귀를 위한 URL scheme**

  페이팔의 경우 외부 앱으로 이동하지 않아 해당 파라미터는 무시됩니다.

- `isEscrow`

  **에스크로 결제 여부**

  페이팔의 경우 에스크로 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

- `locale`

  **결제창 표시 언어**

  페이팔의 경우 구매자가 접속한 환경에 따라 자동 적용되기 때문에 해당 파라미터는 무시됩니다.

- `isCulturalExpense`

  **문화비 지출 여부**

  페이팔의 경우 도서 문화비 항목을 지원하지 않아 해당 파라미터는 무시됩니다.

- offerPeriod?: string

  **서비스 제공 기간**

  페이팔은 결제창 내 제공 기간 정보 노출을 지원하지 않아 해당 파라미터가 무시됩니다.

- storeDetails?: object

  **상점 정보**

  페이팔은 상점 세부 정보를 지원하지 않아 해당 파라미터가 무시됩니다.

- card?: object

  **카드 결제에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 카드 결제 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

- virtualAccount?: object

  **가상계좌 발급에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 가상계좌 발급 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

- transfer?: object

  **계좌이체 결제에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 계좌이체 결제 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

- mobile?: object

  **휴대폰 소액결제에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 휴대폰 소액결제 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

- giftCertificate?: object

  **상품권 결제에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 상품권 결제 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

- easyPay?: object

  **간편결제 결제에 대한 상세 옵션**

  페이팔의 경우 결제 요청 시 결제 수단은 항상 `paypal`로 지정되며, 간편결제 결제 시 사용되는 옵션 설정을 지원하지 않아 해당 파라미터를 사용할 수 없습니다.

</details>

### 일반결제 FAQ

<details>

<summary>모든 결제 건의 결제수단은 `paypal`로 저장되나요?</summary>

페이팔을 통해 카드 결제 외 BanContact, BLIK, eps, giropay 등 다양한 결제 수단으로 결제가 가능하지만 **결제 승인 이후 상세 결제 수단 정보**를 알 수 없기에 `paypal`로 일괄 저장됩니다.

</details>

<details>

<summary>할부 결제 여부와 할부 개월수에 대한 정보는 어디서 확인할 수 있나요?</summary>

페이팔에서 Pay Later를 통해 할부 결제가 가능하지만 **결제 승인 이후 상세 할부 정보**를 알 수 없기에 할부에 대한 정보는 제공하지 않습니다.

</details>

<details>

<summary>접속한 국가에 따라 렌더링 되는 결제 버튼이 달라요.</summary>

페이팔은 **구매자가 접속한 나라에 따라 이용 가능한 결제 수단**이 달라 접속 국가에 따라 렌더링되는 버튼의 종류와 개수가 달라집니다.

(이미지 첨부: 예시 1)

(이미지 첨부: 예시 2)

</details>

<details>

<summary>페이팔 회원과 비회원에 따라 결제 플로우가 달라요.</summary>

페이팔은 기본적으로 구매자가 페이팔에 가입 후 로그인하여 등록된 결제 수단(없다면 새로 등록 또는 카드 정보 직접 입력)으로 결제하는 방식입니다.
다만, 비회원도 결제가 가능하도록 제공하고 있지만 사용 가능한 결제 수단과 렌더링 되는 결제창에 다소 차이가 있습니다.
회원과 비회원간 기능 차이를 간략하게 정리하면 아래와 같습니다.

(관련 이미지 첨부)

</details>

<details>

<summary>Pay Later(할부) 기능을 사용하고 싶어요.</summary>

#### 1. Pay Later 버튼 활성화하기

페이팔의 Pay Later(할부) 결제를 사용하려면 `enable-funding` 파라미터에 `paylater` 입력한 후 호출해야 합니다.
포트원의 경우 Pay Later를 버튼 형태로 제공하고 있으며, 위의 파라미터를 입력하지 않는 시 Pay Later를 지원하는 국가에서 접속하더라도 Pay Later 버튼이 표시되지 않습니다. (단, 미국의 경우 자동으로 표시됩니다.)

```ts
PortOne.loadPaymentUI({
  // ...중략
  bypass: {
    paypal_v2: {
      // ...중략
      "enable-funding": "paylater",
    },
  },
});
```

Pay Later 버튼은 **구매자가 접속한 국가에 따라 다른 버튼이 렌더링** 되며, Pay Later 기능을 제공하지 않는 국가에서 접속한 경우 `enable-funding` 파라미터에 `paylater` 값을 전달하더라도 **Pay Later 버튼이 렌더링되지 않습니다.**

(이미지 첨부: 예시) 벨기에에서 접속 시 버튼이 렌더링 되지 않음)

(이미지 첨부: 예시) 프랑스에서 접속 시 '4X Paypal' 버튼이 렌더링 됨)

(이미지 첨부: 예시) 이탈리아에서 접속 시 'Paga in 3 rate' 버튼이 렌더링 됨)

Pay Later 기능을 지원하는 국가에서 접속하더라도 구매자 계정에 설정된 국가가 Pay Later를 제공하지 않는 국가인 경우, 일반 카드 결제 화면이 렌더링됩니다.

<br />

#### 2. Pay Later 사용 국가별 페이팔 계정 생성하기

Pay Later(할부) 기능을 여러 국가에 제공하기 위해서는 **페이팔 머천트 계정을 국가별로 각각 따로 만들어야** 합니다.
예를 들어 고객사이 \[독일], \[스페인], \[이탈리아] 3개 국가에 대해 Pay Later 서비스를 제공하고자 하는 경우 고객사는 \[독일], \[스페인], \[이탈리아]의 **페이팔 머천트 계정을 각각 따로 만들어야** 합니다.

국가별로 생성한 페이팔 Account ID를 \[결제 연동] > \[채널 관리] 페이지에서 채널 등록 후 결제창 호출 시 지정해야 합니다. **고객사는 구매자가 접속한 국가에 따라 올바른 채널의 채널키를 전달해야** 합니다.

<br />

#### 3. Pay Later 국가별 정책 알아보기

- US(미국) / USD(달러)

  - Pay in 4

    - Eligible US buyers can pay in four interest-free payments for purchases of $30 to $1,500.
    - USD 30 \~ USD 1,500 결제 시 4개월 무이자 할부 제공

  - Pay Monthly

    - Eligible US buyers can pay in 6, 12, or 24 monthly installments for purchases of $199 to $10,000.
    - USD 199 \~ USD 10,000 결제 시 6, 12, 24개월 (유이자) 할부 중 선택하도록 제공

- AU(호주) / AUD(호주 달러)

  - Pay in 4

    Pay Later in Australia includes Pay in 4, which eligible AU buyers can use to pay in four interest-free payments for purchases of $30 to $2,000 AUD. The first payment is due at the time of the transaction, and subsequent payments are due every two weeks.

    AUD 30 \~ AUD 2,000 결제 시 2주마다 4번에 걸쳐 결제하도록 제공

- GE(독일) / EUR(유로화)

  - PayPal Ratenzahlung

    - Eligible German buyers can pay in 3, 6, 12, or 24 monthly installments for purchases of 99€ to 5,000€.
    - EUR 99 \~ EUR 5,000 결제 시 3, 6, 12, 24개월 (유이자) 할부 중 선택하도록 제공

  - Pay in 30

    - Eligible German buyers can pay within 30 days for purchases of 1€ to 1,000€.
    - EUR 1 \~ EUR 1,000 결제 시 30일 안에 결제되며, 30일 안에 자동으로 결제될 은행 계좌(IBAN, International Bank Account Number) 등록하도록 제공

- ES(스페인) / EUR(유로화)

  - Pay in 3 installments

    - Pay Later in Spain includes Pay in 3 instalments, which eligible buyers in Spain can use to pay in three interest-free payments for purchases of 30€ – 2,000€. The first payment is due at the time of the transaction, and subsequent payments are due every month.
    - EUR 30 \~ EUR 2,000 결제 시 3개월 무이자 할부 제공

- IT(이탈리아) / EUR(유로화)

  - Pay in 3 installments

    - Pay Later in Italy includes Pay in 3 installments, which eligible buyers in Italy can use to pay in three interest-free payments for purchases of 30€ – 2,000€. The first payment is due at the time of the transaction, and subsequent payments are due every month.
    - EUR 30 \~ EUR 2,000 결제 시 3개월 무이자 할부 제공

- FR(프랑스) / EUR(유로화)

  - Pay in 4X

    - Pay Later in France includes Pay in 4X, which is an installment offer that allows consumers to spread the cost of a purchases across four equal payments for transactions between 30€ – 2,000€. The first payment is due at the time of the transaction. The subsequent payments spread across 90 days.
    - EUR 30 \~ EUR 2,000 결제 시 90일동안 4번에 걸쳐 결제하도록 제공 (무이자)

- GB(영국) / GBP(영국 파운드화)

  - Pay in 3

    - Eligible UK buyers can pay in three interest-free payments for purchases of £30 – £2,000.
    - GBP 30 \~ GBP 2,000 결제 시 3개월 무이자 할부 제공

  - PayPal Credit - Eligible UK buyers receive a revolving line of credit that they can use to pay over time. PayPal Credit offers either 0% interest for 4 months on purchases over £99 or a merchant-specific Installment offers. For the 0% interest for 4 months offer, any remaining balance due after the promotional period or any transactions under £99 are charged interest at the standard variable rate. Terms and conditions apply.

    - GBP 99 이상 결제 시 첫 4개월 간 무이자 할부 제공. 4개월 이상 할부 결제 시 5개월째부터는 유이자 할부 적용

</details>

<details>

<summary>간편 결제 수단(Alternative Method) 버튼이 표시되지 않아요.</summary>

기본적으로 `loadPaymentUI` 함수를 호출해 페이팔 결제 버튼을 렌더링하는 경우 구매자가 접속한 국가에 따라 이용 가능한 간편 결제 수단 버튼들이 자동으로 렌더링 됩니다.
하지만 일부 버튼의 경우엔 자동으로 렌더링되지 않는 경우가 있습니다. 원하는 간편 결제 수단 버튼이 표시되지 않는 경우 나라별로 지원 가능한 간편 결제 수단(Alternative Method) 식별자를 `enable-funding` 파라미터에 아래와 같이 comma(,)로 구분하여 string(문자열) 형식으로 요청하면 정상적으로 렌더링됩니다.

💡 예) enable-funding: “paylater,bancontact”

렌더링 할 수 있는 버튼의 종류는 아래와 같습니다.

(관련 이미지 첨부) />

</details>

<details>

<summary>간편 결제 수단(Alternative Method)을 클릭해도 결제가 되지 않아요.</summary>

페이팔은 기본적으로 결제창 호출 시 구매자가 페이팔에 가입할 때 입력한 배송 주소가 자동으로 입력됩니다. 배송 주소를 변경하고자 할 때, 국가 코드(`purchase\_units\[].shipping.address.country\_code`)가 변경하는 경우 변경된 국가 코드에 따라 기존에 선택한 **간편 결제 수단(Alternative Method)이 지원되지 않는 국가인 경우 결제가 불가능**할 수 있습니다.

예를 들어 벨기에(국가코드: BE)에서만 사용 가능한 BanContact로 결제 시, `purchase\_units\[].shipping.address.country\_code`를 BE가 아닌 다른 값으로 변경한 후 BanContact 결제 버튼을 클릭하면 아래와 첨부한 스크린샷과 같이 일반 카드 결제 화면이 렌더링됩니다.

(관련 이미지 첨부)

</details>

### 정기결제 유의사항

<details>

<summary>파라미터 사용 시 유의사항</summary>

- orderName: string

  **주문명**

  빌링키 발급 창 내 “판매자가 보낸 메모” 내용으로 표기됩니다.

  (이미지 첨부: 예시) 빌링키 발급 시 화면)

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - paypal\_v2?: object

    **페이팔에서 제공하는 파라미터 모음**

    ```ts title="예시 코드"
    PortOne.loadPaymentUI(
      {
        bypass: {
          paypal_v2: {
            shipping_address: {
              // 상품 수령 주소
              recipient_name: "홍길동", // 수령인 이름
              line1: "세종대로 110", // 도로명 주소
              line2: "서울특별시청", // 아파트 동 호수
              city: "중구", // 시(Los Angeles, New York)
              state: "서울특별시", // 주(CA, NY)
              postal_code: "04524", // 상품 수령지 우편번호
              country_code: "KR", // [필수 입력] 상품 수령지 국가 코드
            },
          },
        },
      }, // 콜백 함수
    );
    ```

    (이미지 첨부: shipping\_address를 전달하지 않은 경우 구매자 정보로 설정된 화면)

    (이미지 첨부: shipping\_address에 수령인 이름과 배송 정보를 전달한 경우 수령인 이름과 배송 정보가 override된 화면)

    - style?: string

      **페이팔 버튼 커스텀마이징**

      페이팔 버튼을 커스텀마이징 할 경우 자세한 내용은 페이팔에서 제공하는 문서([https://developer.paypal.com/sdk/js/reference/#link-style](http://developer.paypal.com/sdk/js/reference/#link-style))를 참고하세요.

    - layout?: string

      **페이팔 버튼 렌더링 방향**

      - `hotizontal` 적용 시 버튼이 최대 2개까지 밖에 렌더링 되지 않습니다. 때문에 페이팔에서는 `layout`을 `horizontal`이 아닌 `vertical`로 설정하도록 권고하고 있습니다.
      - 페이팔 버튼은 기본적으로 vertical(수직)로 렌더링 됩니다.

      ```ts title="예시 코드"
      PortOne.loadPaymentUI(
        {
          //...중략
          bypass: {
            paypal_v2: {
              style: {
                //...중략
                layout: "horizontal",
              },
            },
          },
        }, //콜백 함수
      );
      ```

      (이미지 첨부: 예시) vertical style 버튼 표시 화면)

      (이미지 첨부: 예시) horizontal style 버튼 표시 화면)

    - color?: string

      **페이팔 버튼 색상**

      - `gold`, `blue`, `silver`, `white`, `black` 중 선택할 수 있습니다.
      - 기본적으로는 `gold`로 표시됩니다.

    - height?: number

      **페이팔 버튼 크기**

      크기 변경은 25\~55 사이의 값으로만 지정할 수 있습니다.

    - shape?: string

      **페이팔 버튼 모양**

      `rect`(사각 모양)과 `pill`(둥근 모양) 중에 선택할 수 있으며, 기본적으로 `rect` 모양으로 표시됩니다.

    - label?: string

      **페이팔 버튼 라벨**

      - `paypal`, `checkout`, `buynow`, `pay`, `installment` 중 선택할 수 있습니다.
      - 기본적으로 `paypal`로 표시됩니다.
      - `installment`는 결제 국가가 `MX`혹은 `BR`인 경우에만 유효합니다.

    - period?: string

      **페이팔 버튼에 할부 결제 표시**

      `label:installment`인 경우 버튼에 표시됩니다.

    - tagline?: boolean

      **페이팔 버튼에 제공되는 추가 설명**

      해당 파라미터를 사용하시기 위해서는 `bypass.paypal_v2.style.layout`을 horizontal로 지정해야 사용하실 수 있습니다.

    - shipping\_address?: object

      **주문 상품의 배송 주소**

      - 배송 정보 중 `line1`, `city` 그리고 `country_code`는 필수 입력해야 합니다. 전달하지
        않을 경우 에러가 리턴되며 빌링키 발급창이 호출되지 않습니다.

      * recipient\_name?: string

        **수령인 이름**

      * line1: string

        **도로명 주소, ex) `200 N Spring St`**

      * line2?: string

        **번지 혹은 건물 호수, ex) `Los Angeles City Hall 1`**

      * city: string

        **도시, 마을 등 중간 단위의 주소, ex) `Los Angeles`**

      * state?: string

        **주와 같은 큰 단위의 주소, ex) `CA`, `NY`**

        - country(UK)
        - state(US)
        - province(Canada)
        - 특별시/광역시/도(Korea)

      * postal\_code?: string

        **우편 번호**

      * country\_code: string

        **국가 코드, ex) `KR`**

        - 페이팔의 경우 빌링키 발급창에 기본적으로 구매자가 페이팔에 가입할 때 입력한 배송 정보가 자동으로 입력됩니다. 만약 이 배송 정보를 override하고 싶다면 `shipping_address` 파라미터에 override할 주소를 입력하고 `shipping_address.recipient_name`에 override할 수령인 이름을 입력하신 후 호출하시면 됩니다.

</details>

<details>

<summary>미지원 파라미터</summary>

- totalAmount?: number

  **총 결제 금액**

  빌링키 발급 시 지원하지 않는 파라미터로 발급 시 무조건 0으로 저장됩니다.

- taxFreeAmount?: number

  **면세 금액**

  페이팔은 면세/복합과세를 지원하지 않기 때문에 해당 파라미터는 지원하지 않습니다.

- country?: string

  **결제 국가**

  - 페이팔의 경우 실연동 결제 시 **구매자가 접속한 국가에 따라 국가 정보가 자동으로 적용**되어 해당 파라미터로 전달한 국가 정보는 무시됩니다.
  - 예시) `country : US`를 입력하여 결제창을 호출했지만 구매자가 접속한 환경이 “KR(한국)”인 경우 한국에 지원되는 결제 버튼만 렌더링됩니다.
  - 페이팔 sandbox 모드인 경우 입력한 국가 정보로 전달됩니다.

- currency?: string

  **결제 통화**

  빌링키 발급 시 결제가 되지 않기 때문에 해당 파라미터는 무시됩니다.

- customer?: object

  **고객 정보**

  - address?: object

    **구매자 주소**

    - 페이팔의 경우 사용되는 주소 체계가 달라 구매자 주소 정보는 `customer.address`이 아닌 **`bypass.paypal_v2.shipping_address`를 사용**해야 합니다.
    - `bypass.paypal_v2.shipping_address` 파라미터에 대한 자세한 사항은 **파라미터 사용 시 유의사항** 을 참고하시기 바랍니다.

- redirectUrl?: string

  **리디력션 방식에서 결제 프로세스 완료 후 이동될 고객사 URL**

  페이팔의 경우 PC와 모바일 모두 팝업으로 빌링키 발급창이 렌더링되기 때문에 프로세스 종료시 콜백 함수가 호촐됩니다. 따라서 redirectUrl 파라미터는 무시됩니다.

- appScheme?: string

  **모바일 결제 후 고객사 앱으로 복귀를 위한 URL scheme**

  페이팔의 경우 외부 앱으로 이동하지 않아 해당 파라미터는 무시됩니다.

- `isEscrow`

  **에스크로 결제 여부**

  페이팔의 경우 에스크로 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

- `locale`

  **결제창 표시 언어**

  페이팔의 경우 구매자가 접속한 환경에 따라 자동 적용되기 때문에 해당 파라미터는 무시됩니다.

- `isCulturalExpense`

  **문화비 지출 여부**

  페이팔의 경우 도서 문화비 항목을 지원하지 않아 해당 파라미터는 무시됩니다.

- offerPeriod?: string

  **서비스 제공 기간**

  페이팔은 결제창 내 제공 기간 정보 노출을 지원하지 않아 해당 파라미터가 무시됩니다.

- storeDetails?: object

  **상점 정보**

  페이팔은 상점 세부 정보를 지원하지 않아 해당 파라미터가 무시됩니다.

</details>

<details>

<summary>미국 테스트 상점 아이디 사용 불가</summary>

페이팔 내부 이슈로 인해 미국 테스트 상점 아이디인 `7WBB3CKT63FRG`을 사용할 수 없습니다.
영국이나 일본 등 다른 테스트 상점 아이디를 통해 테스트가 필요합니다.

</details>

<details>

<summary>**(필독) Risk Data Acquisition 정책**</summary>

페이팔은 이상 거래를 줄이기 위해 Risk Data Acquisition 정책을 시행하고 있습니다.
일반적으로 페이팔 창에서 진행되는 결제나 빌링키 발급은 페이팔이 구매자 접속 정보를 직접 확인하여 이상 거래를 판단합니다.

하지만 발급된 빌링키로 브라우저에서 재결제하는 경우 \[고객사 브라우저]에서 \[포트원 API]를 통해 \[페이팔 API]가 호출되는 구조로 페이팔이 구매자 접속 정보를 직접 확인할 수 없어 이상거래를 판단하기 어렵습니다.
따라서 구매자의 브라우저/디바이스 접속 정보를 페이팔에 전달해야 합니다.
때문에 브라우저에서 발급된 빌링키를 이용하여 결제를 호출하는 경우 **고객사 클라이언트 페이지에 페이팔 Fraudnet 스크립트/Magnes SDK를 반드시 추가해야** 합니다.

<details>

<summary>결제 플로우 알아보기</summary>

브라우저/앱에 페이팔 Fraudnet Script/Magnes SDK를 추가한 후 빌링키 결제 관련 API를 호출했을 때의 플로우는 다음과 같습니다.

(관련 이미지 첨부)

</details>

<details>

<summary>브라우저 내 스크립트 사용 예시</summary>

```html title="코드 예시"
<!-- 고객사 클라이언트 -->
<script
  type="application/json"
  fncls="fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"
>
  {
    "f": "RISK_SESSION_CORRELATION_ID",
    "s": "SOURCE_IDENTIFIER",
    "sandbox": true
  }
</script>
<script type="text/javascript" src="https://c.paypal.com/da/r/fb.js"></script>
<noscript>
  <img
    src="https://c.paypal.com/v1/r/d/b/ns?f=RISK_SESSION_CORRELATION_ID&s=SOURCE_IDENTIFIER&js=0&r=1"
  />
</noscript>
```

- 파라미터 설명

  |파라미터 |설명                                                                           |예시                                           |
  |---------|-------------------------------------------------------------------------------|-----------------------------------------------|
  |`fncls`  |`fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99`로 항상 고정                    |`fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99`|
  |`f`      |주문번호(`paymentId`) 전달                                                     |`paymentId_230980198`                          |
  |`s`      |string (`{페이팔 Account ID}_{페이지 유형}` 형식. 페이지 유형은 아래 목록 참고)|`7WBB3CKT63FRG_checkout-page`                  |
  |`sandbox`|페이팔 Account ID가 테스트 용인지 운영 용인지 여부                             |`true`                                         |

- 페이지 유형

  - `home-page`
  - `search-result-page`
  - `category-page`
  - `product-detail-page`
  - `cart-page`
  - `inline-cart-page`
  - `checkout-page`

</details>

<details>

<summary>앱 내 스크립트 사용 예시</summary>

- 안드로이드

  [**Android Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/android/) 가이드 문서에 따라 아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야 합니다. 이때 두 번째 파라미터(`paypalClientMetaDataId`)로는 주문번호(`paymentId`)를 전달해야 합니다.

  ```java title="코드 예시"
  MagnesResult magnesResult = MagnesSDK.getInstance()
    .collectAndSubmit(
      context, // Context
      paypalClientMetaDataId, // String
      additionalData // HashMap<String, String>
    )
  ```

- iOS Switft

  [**iOS Swift SDK Integration**](http://developer.paypal.com/limited-release/magnes/integrate/ios-swift/) 가이드 문서에 따라 아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야합니다. 이때 첫번째 파라미터(withPayPalClientMetadataId)로는 주문번호(paymentId)를 전달해야 합니다.

  ```swift title="코드 예시"
  let magnesResult: MagnesResult =
    MagnesSDK.shared().collectAndSubmit(
      withPayPalClientMetadataId: "YOUR-PAYPAL-CLIENT-METADATA-ID",
      withAdditionalData: [String: String]
    )
  ```

- iOS Objective-C

  [**iOS Objective-C SDK Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/ios-objective-c/) 가이드 문서에 따라 아래와 같이 collectAndSubmitWithPayPalClientMetadataId 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야합니다. 이때 첫번째 파라미터(YOUR-PAYPAL-CLIENT-METADATA-ID)로는 주문번호(paymentId)를 전달해주시면 됩니다.

  ```objc title="코드 예시"
  //PPRMOCMagnesSDK *magnesSDK = [PPRMOCMagnesSDK shared];
  PPRMOCMagnesSDKResult *magnesResult =
  [magnesSDK
  collectAndSubmitWithPayPalClientMetadataId:@"YOUR-PAYPAL-CLIENT-METADATA-ID"
  withAdditionalData:@{}];
  ```

</details>

</details>

### 정기결제 FAQ

<details>

<summary>모든 빌링키 발급 건의 결제수단은 paypal로 저장되나요?</summary>

페이팔을 통해 카드 결제 외 BanContact, BLIK, eps, giropay 등 다양한 결제 수단으로 결제가 가능하지만 **빌링키 발급 승인 이후 상세 결제 수단 정보**를 알 수 없기에 paypal로 일괄 저장되며 [빌링키 단건 조회 API](https://developers.portone.io/api/rest-v2/billingKey#get%20%2Fbilling-keys%2F%7BbillingKey%7D)로 조회시 결제수단 상세 정보는 모두 null로 내려갑니다.

</details>
