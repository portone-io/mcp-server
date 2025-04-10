---
title: 연동 유의사항
description: (신) 토스페이 연동 유의사항을 소개합니다.
targetVersions:
  - v1
---

## 토스페이와 사전 계약이 필요한 경우

아래 기능을 사용하시려면 토스페이에 사전 신청 후 계약이 완료되어야 합니다.

- 비인증 결제

## 공통사항

### 매출전표

카드결제인 경우에만 매출전표가 제공됩니다.

### 현금영수증 발급

토스페이의 경우, 현금영수증 발급에 대한 정보를 따로 입력받지 않고, 앱에 저장된 식별정보로 현금영수증을 발급합니다.
이 떄문에 현금영수증 타입을 `personal`, `corporate`로 지정하더라도 실제로는 다른 타입의 현금영수증이 발급될 수 있습니다.

## 비인증 결제 관련

### 빌링키 발급 웹훅 연동 권장

토스페이 빌링키 발급시 빌링키 발급 웹훅을 반드시 연동하는 것이 좋습니다. `request_pay` 함수의
`notice_url`을 입력하거나 콘솔에서 웹훅 URL을 입력하여 웹훅을 전달받을 수 있습니다. 만약 웹훅을
연동하지 않은 경우 구매자가 빌링키 발급 도중 팝업이나 브라우저를 끄는 행위등으로 인해 고객사의 SDK
콜백 코드가 실행되지 않아 실제로 빌링키가 발급됐지만 발급정보가 누락되는 케이스가 생길 수 있습니다.

- 웹훅 바디는 아래와 같은 형식으로 전달됩니다. 고객사에서는 `merchant_uid`와 `customer_uid`의
  매핑관계를 따로 저장하고 웹훅으로 전달받은 `merchant_uid`와 매핑된 `customer_uid`를 이용해 빌링키
  정보 조회 API를 호출하여 빌링키 정보를 가져올 수 있습니다.

```json title="웹훅 바디 예시"
{
  "imp_uid": "imp_895265444670",
  "merchant_uid": "oid_a12512basbasdasdfqwfasd",
  "status": "paid"
}
```

### customer\_uid 재사용 주의

새로운 빌링키를 발급할 때 기존에 발급했던 빌링키와 동일한 `customer_uid`를 사용하여 기존에 발급된
빌링키를 덮어씌우지 않도록 주의하세요. 토스페이의 경우 한번 빌링키를 발급했던 수단을 재사용 할 수
없으므로 기존에 사용하던 `customer_uid`를 재사용하는 경우 이전에 빌링키를 발급했던 수단은 더 이상
사용 불가능합니다.

### 빌링키 정보 최신화

빌링키가 발급된후에 토스페이앱에서 구매자가 직접 빌링키에 연결된 결제수단을 변경할 수 있습니다. 만약
빌링키에 연결된 결제수단을 서비스 내부적으로 사용하고 있다면 해당 정보를 보여주기 전 포트원의 빌링키
정보 조회 API를 호출하여 데이터를 최신화하기를 권장합니다.

## 결제 취소 관련

### 부가세를 직접 지정한 결제의 부분 취소 요청 시 부가세 입력은 필수

부가세를 직접 지정한 결제를 부분 취소 요청하는 경우 취소 금액의 부가세를 입력해야 합니다. 만약 부분
취소 요청 시 부가세를 입력하지 않는 경우 남은 결제금액의 부가세, 과세금액 정보가 올바르지 않게 될 수
있으며 이후 추가 부분취소 요청 시 취소 가능 과세금액 계산 오류로 취소 요청이 불가능할 수 있습니다.
