---
title: API 연동
description: 스마트로 API 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 지원 기능

- 빌링키 결제
- 예약 결제
- 에스크로 등록, 조회
- 가상계좌 발급 ,회수
- 결제건 환불
- 현금영수증 발급, 조회, 취소
- 외부 결제건 현금영수증 발급, 조회, 취소

## 추가된 파라미터

### `product_count` 파라미터 추가

- 결제 상품의 개수를 설정하는 파라미터 `product_count` 가 추가되었습니다. 설정을 하지 않을 경우 디폴트로 1개가 설정됩니다.

- 사용가능한 API
  - 빌링키 결제 API, 예약결제 API, 가상계좌 발급 API

### `formed_address` 파라미터 추가

에스크로 배송 정보 등록시 지번주소/도로명 주소 와 상세주소를 입력받는 파라미터 `formed_address`가 추가되었습니다.
스마트로의 경우 기존 파라미터인 `addr`가 아닌 해당 파라미터를 이용한 주소 설정이 필요합니다.

```json
{
  "formed_address": {
    "address_line_1": "지번주소 또는 도로명주소(스마트로 신모듈의 경우 필수)",
    "address_line_2": "상세주소(스마트로 신모듈의 경우 필수)"
  }
}
```

## API 별 상세 설명

### 빌링키 결제

- 요청 URL: `https://api.iamport.kr/subscribe/again`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `customer_uid`
  - `merchant_uid`
  - `amount`
  - `buyer_name`
  - `buyer_email`
  - `buyer_tel`

- 주의사항
  - `smartro_v2`는 `merchant_uid` 파라미터에 특수문자 포함이 불가능합니다.

### 예약 결제

- 요청 URL: `https://api.iamport.kr/subscribe/schedule`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `customer_uid`
  - `schedules.merchant_uid`
  - `schedules.amount`
  - `schedules.buyer_name`
  - `schedules.buyer_email`
  - `schedules.buyer_tel`

- 주의 사항
  - `smartro_v2`는 API 방식으로 빌링키 발급을 지원하지 않기 때문에, 예약결제시 새로운 빌링키 발급은 지원하지 않습니다.
  - `smartro_v2`는 **`merchant_uid`** 파라미터에 특수문자 포함이 불가능합니다.

### 가상계좌 발급

- 요청 URL: `https://api.iamport.kr/vbanks`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `merchant_uid`
  - `amount`
  - `vbank_code`
  - `vbank_due`
  - `vbank_holder`
  - `buyer_name`
  - `buyer_email`
  - `buyer_tel`

- 주의 사항
  - `smartro_v2`는 **`merchant_uid`** 파라미터에 특수문자 포함이 불가능합니다.

  - 계좌 발급 받거나 환불금액을 입금받을 수 있는 은행 목록과 코드는
    [https://api.iamport.kr/#vbank\_codes](http://api.iamport.kr/#vbank_codes)에서 확인 가능합니다.

### 에스크로 배송 정보 등록

- 요청 URL: `https://api.iamport.kr/escrows/logis/{imp_uid}`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `imp_uid`
  - `sender.name`
  - `sender.tel`
  - `sender.postcode`
  - `sender.formed_address`
  - `receiver.name`
  - `receiver.tel`
  - `receiver.postcode`
  - `receiver.formed_address`
  - `logis.company`
  - `logis.invoice`
  - `logis.sent_at`

- 주의 사항
  - `smartro_v2`는 배송수정시, 지번주소/도로명주소와 상세주소를 구분하여 받고있기 때문에, 발신자의
    주소와 수신자의 주소 정보를 기존의 `sender.addr`와 `receiver.addr` 파라미터 대신 새로 추가된
    파라미터 **`formed_address`** 의 `address_line_1`(지번주소 또는 도로명주소)와
    `address_line_2`(상제주소)에 설정해야 합니다.

### 에스크로 배송 정보 수정

- 요청 URL: `https://api.iamport.kr/escrows/logis/{imp_uid}`
  - 요청 메소드: `PUT`

- **스마트로 필수 파라미터**
  - `imp_uid`
  - `logis.company`
  - `logis.invoice`
  - `logis.sent_at`

- 주의 사항
  - `smartro_v2`는 배송 정보 수정시, 지번주소/도로명주소와 상세주소를 구분하여 받고 있기 때문에,
    발신자의 주소와 수신자의 주소 정보를 기존의 `sender.addr`와 `receiver.addr` 파라미터 대신
    새로 추가된 파라미터 **`formed_address`** 의 `address_line_1`(지번주소 또는 도로명주소)와
    `address_line_2`(상세주소)에 설정해야 합니다.

### 현금영수증 발급 (포트원 결제건)

- 요청 URL: `https://api.iamport.kr/receipts/{imp_uid}`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `imp_uid`
  - `identifier`
  - `type`
  - `buyer_name`
  - `buyer_tel`

- 주의사항
  - 스마트로 신모듈은 현금영수증 발급 API를 통해 발급받은 경우는 현금영수증을 발급 받은 거래건 취소
    시 현금영수증 자동 발급 취소를 지원하지 않기 때문에, 따로 현금영수증 발급 취소 API를 통해
    취소해야 합니다.

### 현금영수증 발급 (외부 결제건)

- 요청 URL: `https://api.iamport.kr/receipts/external/{imp_uid}`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `merchant_uid`
  - `name`
  - `amount`
  - `identifier`
  - `type`
  - `buyer_name`
  - `buyer_tel`

### 결제 취소

- 요청 URL: `https://api.iamport.kr/payments/cancel`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `imp_uid`
  - `refund_holder` (가상계좌, 계좌이체 거래건)
  - `refund_account` (가상계좌, 계좌이체 거래건)
  - `refund_bank` (가상계좌, 계좌이체 거래건)
  - `refund_tel` (가상계좌, 계좌이체 거래건)

- 주의 사항
  - 부분취소시 면세 금액이 포함된 경우 반드시 취소 면세금액(`tax_free`)을 포함하여 요청해야합니다.

  - 가상 계좌 결제건 취소에 한해 스마트로에 취소 요청이후 즉시 환불 처리가 되는 것이 아니라,
    스마트로에서 입력한 환불계좌로 최종 환불 처리하면 결과를 핑백(웹훅)으로 고객사에 내리면 고객사는
    해당 핑백을 응답받은 뒤 최종 취소완료처리를 해주셔야 합니다.

  - 현금영수증 미발행 가상 계좌 결제건은 스마트로에서 면세금액에 대한 검증을 따로 지원하지 않기
    때문에, 취소시 정확한 취소 면세금액을 요청해야합니다.
