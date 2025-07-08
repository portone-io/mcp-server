---
title: API 연동
description: 웰컴페이먼츠 API 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 지원 기능

- 가상 계좌 발급, 회수
- 현금영수증 발급, 취소, 조회
- 외부 결제건 현금영수증 발급, 취소, 조회
- 빌링키 발급
- 예약결제
- 에스크로 등록, 조회
- 결제건 환불

## 추가된 파라미터

### `pay_method` 파라미터 추가

- 포트원을 통하지 않은 외부 결제건에 대한 현금영수증 발급시 필수로 요구되는 파라미터로 trans(계좌이체), vbank(가상계좌) 만 지정 가능합니다.

- 사용가능한 API
  - 현금영수증 발급(외부) API

### `products` 파라미터 추가

에스크로 배송 정보 등록 및 수정 시 상품들에 대한 정보를 입력하는 파라미터로 필수로 요구됩니다.

```json
{
  "products": {
    "id": "상품 고유 아이디 (required)",
    "name": "상품 이름",
    "code": "상품 고유 코드",
    "amount": "상품 단위 가격 (required)",
    "currency": "상품 단위 가격 화폐 (default: KRW)",
    "quantity": "상품 수량 (defatul: 1)",
    "tag": "상품의 카테고리"
  }
}
```

### `corp_reg_no` 파라미터 추가

외부 결제건의 현금영수증 발급 시, 사업자 등록번호를 입력하는 파라미터로 필수로 요구됩니다.

- 계좌이체 : trans
- 가상계좌 : vbank

## API 별 상세 설명

### 빌링키 결제

- 요청 URL: `https://api.iamport.kr/subscribe/again`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**
  - `customer_uid`
  - `merchant_uid`
  - `amount`
  - `buyer_name`

- 주의사항
  - `tax_free` 파라미터는 `부가세업체정함` 설정 고객사에 한해 사용 가능합니다.

  - `vat_amount` 파라미터는 `부가세업체정함` 설정업체에 한해 사용 가능하며 전체금액의 10%이하로 설정
    해야합니다. vat\_amount 가 총 상품가격의 10% 초과할 경우는 결제가 거절됩니다.

### 키인 결제

- 요청 URL: `https://api.iamport.kr/subscribe/onetime`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**

  - `merchant_uid`
  - `card_number`
  - `expiry`
  - `buyer_name`

- 주의사항
  - `tax_free` 파라미터는 `부가세업체정함` 설정 고객사에 한해 사용 가능합니다.

  - `vat_amount` 파라미터는 `부가세업체정함` 설정업체에 한해 사용 가능하며 전체금액의 10%이하로 설정
    해야합니다. vat\_amount 가 총 상품가격의 10% 초과할 경우는 결제가 거절됩니다.

### 예약 결제

- 요청 URL: `https://api.iamport.kr/subscribe/schedule`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**

  - `schedules.merchant_uid`
  - `schedules.amount`
  - `schedules.buyer_name`

- 주의 사항

  - `tax_free` 파라미터는 `부가세업체정함` 설정 고객사에 한해 사용 가능합니다.

  - `vat_amount` 파라미터는 `부가세업체정함` 설정업체에 한해 사용 가능하며 전체금액의 10%이하로 설정
    해야합니다. vat\_amount 가 총 상품가격의 10% 초과할 경우는 결제가 거절됩니다.

### 가상계좌 발급

- 요청 URL: `https://api.iamport.kr/vbanks`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**

  - `merchant_uid`
  - `amount`
  - `vbank_code`
  - `vbank_due`
  - `buyer_name`

- 주의 사항
  - `vbank_holder` 경우 적용되지 않고 고객사명이 사용됩니다.

  - 계좌 발급 받거나 환불금액을 입금받을 수 있는 은행 목록과 코드는
    [https://api.iamport.kr/#vbank\_codes](http://api.iamport.kr/#vbank_codes)에서 확인 가능합니다.

### 에스크로 배송 정보 등록

- 요청 URL: `https://api.iamport.kr/escrows/logis/{imp_uid}`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**
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
  - `products.id`
  - `products.name`
  - `products.amount`

- 주의 사항
  - `welcome`는 배송수정시, 지번주소/도로명주소와 상세주소를 구분하여 받고있기 때문에, 발신자의
    주소와 수신자의 주소 정보를 기존의 `sender.addr`와 `receiver.addr` 파라미터 대신 새로 추가된
    파라미터 `formed_address`의 `address_line_1`(지번주소 또는 도로명주소)와
    `address_line_2`(상제주소)에 설정해야합니다.

### 에스크로 배송 정보 수정

- 요청 URL: `https://api.iamport.kr/escrows/logis/{imp_uid}`
  - 요청 메소드: `PUT`

- **웰컴페이먼츠 필수 파라미터**
  - `imp_uid`
  - `logis.company`
  - `logis.invoice`
  - `logis.sent_at`
  - `products.id`
  - `products.name`
  - `products.amount`

- 주의 사항
  - `welcome`는 배송 정보 수정시, 지번주소/도로명주소와 상세주소를 구분하여 받고있기 때문에,
    발신자의 주소와 수신자의 주소 정보를 기존의 `sender.addr`와 `receiver.addr` 파라미터 대신 새로
    추가된 파라미터 `formed_address`의 `address_line_1`(지번주소 또는 도로명주소)와
    `address_line_2`(상제주소)에 설정해야합니다.

### 현금영수증 발급 (아임포트 결제건)

- 요청 URL: `https://api.iamport.kr/receipts/{imp_uid}`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**
  - `imp_uid`
  - `identifier`
  - `type`
  - `buyer_tel`
  - `corp_reg_no`

### 현금영수증 발급 (외부 결제건)

- 요청 URL: `https://api.iamport.kr/receipts/external/{imp_uid}`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**
  - `merchant_uid`
  - `name`
  - `amount`
  - `identifier`
  - `type`
  - `buyer_tel`
  - `corp_reg_no`
  - `pay_method`

### 결제 취소

- 요청 URL: `https://api.iamport.kr/payments/cancel`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**
  - `imp_uid`
  - `refund_holder` (가상계좌, 계좌이체 거래건)
  - `refund_account` (가상계좌, 계좌이체 거래건)
  - `refund_bank` (가상계좌, 계좌이체 거래건)
  - `refund_tel` (가상계좌, 계좌이체 거래건)

- 주의 사항
  - 부분 취소는 지불수단 별로 **부분환불 사용 서비스 신청 고객사에 한 해** 지원 가능합니다. 부분 환불
    사용 서비스 사용 신청 및 사용 여부 문의는 웰컴페이먼츠 계약 담당자에게 확인해주시기를 바랍니다.

  - tax\_free 파라미터는 `부가세업체정함` 설정 고객사에 한 해 결제 시 면세 금액을 지정했던 경우
    **필수** 입력 바랍니다.

  - vat\_amount 파라미터는 `부가세업체정함` 설정 고객사에 한 해 결제 시 부가세를 지정했던 경우 **필수**
    입력 바랍니다.
