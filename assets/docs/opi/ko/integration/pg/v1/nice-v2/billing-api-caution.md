---
title: 빌링키 발급 / API 연동 유의사항
description: (신)나이스페이먼츠 비인증 결제 연동 유의사항을 소개합니다.
targetVersions:
  - v1
---

## API 지원 기능

- 빌링키 발급
- 빌링키 결제
- 키인 결제
- 예약 결제
- 결제 취소(가상계좌 환불 포함)
- 에스크로 배송 정보 등록, 조회(수정 불가능)
- 가상계좌 발급, 회수(수정 불가능)
- 포트원 외부 결제 건 현금영수증 발급, 조회, 취소

## 빌링키 삭제

간편결제 (카카오페이, 네이버페이) 빌링키의 경우 삭제 요청 시 `reason` 파라미터에 빌링키를 삭제하려는 사유를 반드시 입력해야 합니다.

## 비인증 결제

(신) 나이스페이먼츠는 발급 된 빌링키로 재결제(`POST /subscribe/payemnts/again`),
키인 결제(`POST /subscribe/payments/onetime`) 그리고 스케줄 결제(`POST /subscribe/payments/schedule`)를
모두 지원하며 기본 파라미터 외에 아래 3개의 파라미터를 추가로 지원합니다.

**간편결제 (카카오페이, 네이버페이) 빌링키로 결제 시에는 할부결제가 불가능하기 때문에 `card_quota` 파라미터 없이 요청해야 합니다.**

|파라미터                     |데이터 타입           |의미                                                                                               |
|-----------------------------|----------------------|---------------------------------------------------------------------------------------------------|
|vat\_amount                  |double                |총 결제 금액 중 부가세 금액. 부가세 직접 입력 방식을 위해 사용. 단, 나이스페이먼츠와 사전 협의 필요|
|intereset\_free\_by\_merchant|boolean(기본값: false)|상점 부담 무이자 할부 적용 여부. 단, 나이스페이먼츠와 사전 협의 필요                               |
|use\_card\_point             |boolean(기본값: false)|카드사 포인트 사용 여부. 단, 나이스페이먼츠와 사전 협의 필요                                       |

## 가상계좌

### 가상계좌 API 발급시 `business_registration_number` 파라미터 추가 지원

|파라미터                      |데이터 타입|의미                   |
|------------------------------|-----------|-----------------------|
|business\_registration\_number|string     |구매자 사업자 등록 번호|

(신) 나이스페이먼츠의 경우 API를 통한 가상 계좌 발급 시, 향후 해당 거래 건을 에스크로 배송 정보로 등록할 때
사용될 구매자의 사업자 번호를 `business_registration_number` 파라미터로 입력받고 있습니다.

### API로 가상계좌 채번은 가능하나 발급된 가상계좌 정보는 수정 불가능

(신) 나이스페이먼츠는 `POST /vbanks` API로 가상 계좌를 채번 할 수 있지만 `PUT /vbanks` API로
**이미 채번 된 가상계좌 정보(입금 기한, 입금 금액)를 수정할 수 없습니다.**

## 에스크로 결제

### 배송 정보 등록시 `send_email` 파라미터 추가 지원

|파라미터   |데이터 타입|의미                                                                                     |
|-----------|-----------|-----------------------------------------------------------------------------------------|
|send\_email|boolean    |에스크로 구매 확정시 결제 창에 입력했던 이메일로 해당 사실을 전송할지 여부 (기본값: true)|

(신) 나이스페이먼츠의 경우 에스크로 결제건에 대해 배송 정보 등록 API 호출 시 `send_email` 파라미터를
이용하여 구매 확정됐을 때 결제창에 입력한 이메일로 구매 확정 내용을 전송할지 여부를 제어할 수 있습니다.
기본 값은 true(구매 확정 여부 이메일 전송)이며 false로 입력 시 구매가 확정되어도 이메일로 안내되지 않습니다.

### 배송 정보 수정 불가

(신) 나이스페이먼츠는 `POST /escrow/logis/{imp_uid}` API로 에스크로 배송 정보 등록은 가능하지만
`PUT /escrow/logis/{imp_uid}` API로 **수정은 불가능**합니다.

## 현금영수증

### 결제창에서 발급 받지 못한 현금영수증은 API로 발급 불가능

(신) 나이스페이먼츠의 경우 현금성 결제(가상계좌, 계좌이체, 네이버페이 포인트 결제 등)시 승인 단계에서
현금영수증을 발급 요청할 수 있습니다. 이때 결제 승인 단계에서 현금영수증을 발급 요청하지 못한 경우,
현금영수증 발급 API(`POST /receipts/{imp_uid}`)를 사용한다고 하더라도 발급이 되지 않으니 참고 부탁드립니다.

### API로 현금영수증 발급 시, 현금영수증 카드 사용 불가능

API로 현금영수증 발급(`POST /receipts/{imp_uid}`)시 발급 받을 현금영수증 정보(현금영수증 발급 유형,
현금영수증 발행 식별 정보, 현금영수증 발행 식별 정보 유형)를 전달해야 합니다.
단, (신) 나이스페이먼츠의 경우 **현금영수증 카드 번호로 현금영수증 발급이 불가능**하오니 참고 부탁드립니다.

<details>

<summary>\[가능] 사업자 등록번호로 지출증빙용 현금영수증 발급</summary>

```http
POST /receipts/{imp_uid}

{
  // ...중략
  "type": "company", // 현금영수증 발급 유형: 지출증빙
  "identifier": "1178178260", // 현금영수증 발행 식별 정보: 사업자 등록번호
  "identifier_type": "business" // 현금영수증 발행 식별 정보 유형: 사업자 등록번호
}
```

</details>

<details>

<summary>\[가능] 휴대폰 번호로 소득공제용 현금영수증 발급</summary>

```http
POST /receipts/{imp_uid}

{
  // ...중략
  "type": "personal", // 현금영수증 발급 유형: 소득공제
  "identifier": "01012345678", // 현금영수증 발행 식별 정보: 휴대폰 번호
  "wdentifier_type": "phone" // 현금영수증 발행 식별 정보 유형: 휴대폰 번호
}
```

</details>

<details>

<summary>\[가능] 주민등록번호로 소득공제용 현금영수증 발급</summary>

```http
POST /receipts/{imp_uid}

{
  // ...중략
  "type": "personal", // 현금영수증 발급 유형: 소득공제
  "identifier": "9010102012345", // 현금영수증 발행 식별 정보: 주민등록번호
  "identifier_type": "person" // 현금영수증 발행 식별 정보 유형: 주민등록번호
}
```

</details>

<details>

<summary>\[불가능] 현금영수증 카드번호로 소득공제용 현금영수증 발급</summary>

```http
POST /receipts/{imp_uid}

{
  // ...중략
  "type": "personal", // 현금영수증 발급 유형: 소득공제
  "identifier": "123456789012", // 현금영수증 발행 식별 정보: 현금영수증 카드번호
  "identifier_type": "taxcard" // 현금영수증 발행 식별 정보 유형: 현금영수증 카드번호
}
```

</details>
