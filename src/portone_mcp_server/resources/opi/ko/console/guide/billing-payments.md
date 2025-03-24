---
title: 빌링결제 내역 조회
description: >-
  포트원을 통해 발생한 빌링키 결제 내역을 상태별로 조회하고 결제 예약일 변경, 예약 해지, 결제 재시도, 결제 재예약 기능을 이용하여 빌링
  결제 건을 관리할 수 있으며, 결제 실패 건에 대한 일괄 재시도를 자동화해주는 리커버리 기능에 대해 안내합니다.
targetVersions:
  - v1
  - v2
---

<div class="hint" data-style="info">

빌링결제 상세 내역 조회 및 캘린더의 경우 상점별로 데이터가 표시됩니다.
하위상점을 생성하여 사용하시는 경우 오른쪽 상단의 상점을 선택하여 해당 상점의 데이터를 확인할 수 있습니다.

</div>

## 상세 내역 조회

(이미지 첨부: \[결제] - \[빌링결제 내역 조회] 예시 화면)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

발급한 빌링키를 이용하여 [비 인증 결제(빌링키) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)
혹은 [결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule)로
시도된 거래 건을 상태별로 조회할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

발급한 빌링키를 이용하여 [빌링키 결제 API](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Fbilling-key)
혹은 [결제 예약 API](https://developers.portone.io/api/rest-v2/payment.paymentSchedule#post%20%2Fpayments%2F%7BpaymentId%7D%2Fschedule)로
시도된 거래 건을 상태별로 조회할 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 조회 기준

- **상태별 최종 업데이트 일시**(default) : 예약, 성공, 실패, 해지 상태 건에 대해 최종 업데이트 일시를 기준으로 조회합니다.
  (결제 예약건의 경우 예약 예정 시각을 기준으로 조회됩니다.)

- **빌링결제 등록 일시** : 예약결제의 경우 예약건이 등록된 일시를 기준으로,
  빌링키 일회성 결제 건의 경우 결제를 시도한 일시를 기준으로 조회합니다.

- **오늘** : 오늘 00시 00분 00초부터 23시 59분 59초로 설정됩니다.

- **최근7일** : 오늘을 기준으로 D-7일로 설정됩니다.

- **이번 달** : 이번달 1일부터 말일까지로 설정됩니다.

- **올해** : 올해 1월 1일부터 12월 31일까지로 설정됩니다.

### 필터

필터에 따라 빌링 결제 내역을 필터링하여 조회할 수 있습니다. 필터는 결제대행사에 따라 다중 선택할 수 있습니다.

#### 결제대행사

- **전체** : 모든 결제대행사의 거래를 조회합니다.

- 결제대행사 필터는 하나의 결제대행사에 모든 `pg_provider`가 포함됩니다.
  - KG이니시스 : inicis, html5\_inicis, inicis\_v2
  - 나이스페이먼츠 : nice, nice\_v2
  - 페이팔 : paypal, paypal\_v2
  - 스마트로 : smartro, smartro\_v2
  - 토스페이 : tosspay, tosspay\_v2
  - 토스페이먼츠 : uplus, tosspayments

### 내역검색

빌링 결제 정보를 검색하여 거래건을 특정할 수 있습니다.

<ul>

<li>**빌링결제 아이디** : 빌링결제 아이디(`schedule_id`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>**고객사 거래번호** : 고객사 거래번호(`merchant_uid`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**포트원 빌링키** : 포트원 빌링키(`customer_uid`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 식별 정보** : 고객식별정보 (`customer_id`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 이름** : 고객 이름 (`buyer_name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**상품 이름** : 상품 이름 (`name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>**고객사 거래번호** : 고객사 거래번호(`paymentId`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**포트원 빌링키** : 포트원 빌링키(`billingKey`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 식별 정보** : 고객식별정보 (`customer.id`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 이름**: 고객 이름 (`customer.name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**상품 이름** : 상품 이름 (`orderName`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</ul>

### 리커버리

(이미지 첨부: \[결제] - \[빌링결제 내역 조회] - \[리커버리] 화면 예시)

전날 실패한 모든 빌링결제를 매일 설정한 시간에 자동으로 재시도합니다.
예를 들어 리커버리 시간을 16시로 설정한 경우 매일 16시에 전날 00시\~23시59분까지 발생한 결제 실패 건에 대해
일괄 재시도를 시도합니다. 이 때, 결제 실패된 경우 다음 날 리커버리 항목에 포함되며, 결제 성공 상태가 될 때까지
계속해서 시도합니다.

리커버리 시간 설정은 01시부터 23시까지 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제예약 API(Schedule API)를 이용한 결제 예약 건 중 결제 실패 상태인 거래 건에 한하여 리커버리 기능을 사용할 수 있습니다.
비 인증 결제(빌링키) API(Again API) 건에 대한 리커버리 기능은 상반기 내로 업데이트될 예정입니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

빌링키 결제 API 및 결제 예약 API를 이용한 결제 건 중 결제 실패 상태인 거래 건에 한하여 리커버리 기능을 사용할 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 상태별 상세조회

- **전체** : 모든 빌링 결제 상태의 거래를 조회합니다.
- **예약** : 예약 (status : `Scheduled`) 상태인 거래 건만 표시됩니다.
- **성공** : 결제 대기 (status : `Pending`) 및 결제 성공 (status : `Succeeded`) 상태인 거래 건만 표시됩니다.
- **실패** : 실패 (status : `Failed`) 상태인 거래 건만 표시됩니다.
- **해지** : 해지 (status : `Revoked`) 상태인 거래 건만 표시됩니다.

#### 예약

<ul>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>결제예약 API(Schedule API)를 이용한 결제 예약 건 중 결제 예약 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>결제 예약 API를 이용한 결제 예약 건 중 결제 예약 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<li>예약 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.</li>

<li>

해당 모달에서 결제 건의 상세정보, 예약해지 및 변경, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있습니다.

- 예약 해지 변경 카테고리에서는 예약 해지 또는 예약일 변경을 할 수 있습니다.

  <details>

  <summary>예약 상태 건 클릭 시 상세 조회 화면 예시</summary>

  (관련 이미지 첨부)

  </details>

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

</li>

</ul>

#### 성공

<ul>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>결제예약 API(Schedule API)를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되어 결제 성공 상태인 거래 건입니다.</li>
<li>비 인증 결제(빌링키) API(Again API)를 이용한 결제 건 중 정상적으로 결제가 진행되어 결제 성공 상태인 겨래 건입니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>결제 예약 API를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되어 결제 성공 상태인 거래 건입니다.</li>
<li>빌링키 결제 API를 이용한 결제 건 중 정상적으로 결제가 진행되어 결제 성공 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<li>성공 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.</li>

<li>

해당 모달에서 결제 건의 상세정보, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있으며,
  해당 건의 결제 내역 조회 화면으로 이동할 수 있습니다.

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

</li>

</ul>

#### 실패

<ul>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>결제예약 API(Schedule API)를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되지 못해 결제 실패 상태인 거래 건입니다.</li>
<li>비 인증 결제(빌링키) API(Again API)를 이용한 결제 건 중 정상적으로 결제가 진행되지 못해 결제 실패 상태인 겨래 건입니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>결제 예약 API를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되지 못해 결제 실패 상태인 거래 건입니다.</li>
<li>빌링키 결제 API를 이용한 결제 건 중 정상적으로 결제가 진행되지 못해 결제 실패 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<li>

빌링 결제 실패는 한도초과, 잔액부족, 정지된 카드, 유효기간 만료 등 사용자 이유
혹은 사용 불가한 빌링키, 올바르지 않은 결제 요청 등의 이유로 발생할 수 있습니다.

</li>

<li>실패 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.</li>

<li>

해당 모달에서 결제 건의 상세정보, 재시도 재예약, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있습니다.

- 재시도 재예약 카테고리에서는 해당 건을 즉시 재시도하거나 결제를 재예약할 수 있습니다.

  <details>

  <summary>실패 상태 건 클릭 시 상세 조회 화면 예시</summary>

  (관련 이미지 첨부)

  </details>

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

</li>

</ul>

#### 해지

<ul>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>결제예약 API(Schedule API)를 이용한 결제 예약 건 중 예약 해지 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>결제 예약 API를 이용한 결제 예약 건 중 예약 해지 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<li>해지 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.</li>

<li>

해당 모달에서 결제 건의 상세정보, 재예약, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있습니다.

- 재예약 카테고리에서는 해당 건을 다시 재예약할 수 있습니다.

  <details>

  <summary>해지 상태 건 클릭 시 상세 조회 화면 예시</summary>

  (관련 이미지 첨부)

  </details>

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

</li>

</ul>

## 빌링결제 캘린더

(이미지 첨부: \[결제] - \[빌링결제 캘린더] 예시 화면)

빌링결제 캘린더에서는 빌링결제 건에 대한 월간/일간 데이터를 확인할 수 있습니다.

### 기준

- 페이지 최초 진입 시 해당 월을 기준으로 데이터가 표시되며, 월을 조정하여
  해당 월의 빌링결제 데이터를 확인할 수 있습니다.

- 기본적으로 거래 **금액**을 기준으로 표시되며, 토글을 클릭하여 **건수**를 기준으로 데이터 확인이 가능합니다.

- 기본적으로 **KRW**를 기준으로 표시되며, 해외 통화 빌링 결제 거래건이 있는 경우 해당 통화를 선택할 수 있으며
  각 통화별 빌링결제 데이터를 확인할 수 있습니다.

- 해당 월의 결제예약 / 결제성공 / 결제실패 / 예약해지 상태별로 거래 금액 혹은 건수 데이터를 확인할 수 있습니다.

- 해당 일의 결제예약 / 결제성공 / 결제실패 / 예약해지 상태별로 거래 금액 혹은 건수 데이터를 확인할 수 있습니다.
