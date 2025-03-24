---
title: 카카오페이
description: 카카오페이 간편결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/kakaopay
---

## 카카오페이 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 가능한 결제수단

- 간편 결제
  - `payMethod`(결제) 혹은 `billingKeyMethod`(빌링키 발급) 파라미터를 `EASY_PAY` 로 설정해야 합니다.
  - 결제창 내에서 카드 및 카카오페이머니 선택이 가능합니다.

## SDK - 유의할 파라미터

### 결제/빌링키 발급 공통

- `windowType`

  - 카카오페이의 경우 PC는 `IFRAME`, mobile은 `REDIRECTION`만 지원되며 이외의 다른 방식으로 결제창을 호출할 경우 에러를 리턴합니다.

  - `windowType` 파라미터를 채우지 않을 경우 자동으로 아래와 같이 세팅됩니다.

    ```json
    {
      "pc": "IFRAME",
      "mobile": "REDIRECTION"
    }
    ```

- `locale`
  - 카카오페이의 경우 `KO_KR`만 지원합니다. 이외의 값을 넣어도 무시됩니다.

- `bypass`

  - 카카오페이의 경우 아래와 같이 `custom_message` 필드를 채워줄 수 있습니다.

  ```json
  {
    "bypass": {
      "kakaopay": {
        "custom_message": "여기가 안내 문구영역입니다."
      }
    }
  }
  ```

  - `custom_message`: 결제 화면에 보여줄 사용자 정의 문구입니다.(카카오페이와 사전 협의 필요)
  - 해당 필드를 채워서 요청할 시 아래와 같이 카카오페이 결제창 내에서 문구가 띄워집니다.

[이미지 링크](https://developers.portone.io/gitbook-assets/ko/KakaoTalk_Photo_2023-04-10-17-39-36.jpeg)



- `easyPay`
  - `easyPayProvider`
    - 카카오페이의 경우 PG사 자체가 간편결제사이므로 `easyPayProvider` 는 비워두어도 무방하며 다른 값을 채울 경우 무시됩니다.

  - `availableCards`
    - 해당 파라미터로 사용 가능한 카드사를 제한할 수 있습니다.

    - 지원하는 카드사 목록:
      - `CARD_COMPANY_SHINHAN_CARD`
      - `CARD_COMPANY_KOOKMIN_CARD`
      - `CARD_COMPANY_HYUNDAI_CARD`
      - `CARD_COMPANY_LOTTE_CARD`
      - `CARD_COMPANY_SAMSUNG_CARD`
      - `CARD_COMPANY_NH_CARD`
      - `CARD_COMPANY_BC_CARD`
      - `CARD_COMPANY_HANA_CARD`
      - `CARD_COMPANY_CITI_CARD`
      - `CARD_COMPANY_KAKAO_BANK`

### 결제 (`requestPayment`)

- `currency`
  - 카카오페이의 경우 원화 결제만 지원하므로 `KRW` 이외의 값을 넣으면 에러를 리턴합니다.

- `isEscrow`
  - 카카오페이에서는 에스크로 결제를 지원하지 않으며, 해당 파라미터를 채워서 요청할 경우 포트원 내부적으로만 저장됩니다.

- `isCulturalExpense`
  - 카카오페이에서는 지원하지 않는 파라미터입니다. 해당 파라미터를 채워서 요청할 경우 포트원 내부적으로만 저장됩니다.

- `productType`
  - 카카오페이에서는 지원하지 않는 파라미터입니다. 해당 파라미터를 채워서 요청할 경우 포트원 내부적으로만 저장됩니다.

- `easyPay.installment`
  - `freeInstallmentPlans`
    - 카카오페이는 지원하지 않는 파라미터입니다.

  - `monthOption`
    - 카카오페이는 고정개월 수 할부 옵션(`fixedMonth`)만 지원합니다.
    - 카카오페이의 경우, 결제 금액이 5만원 미만이어도 해당 파라미터가 채워져 있으면 체크카드로 결제가 불가능합니다.

### 빌링키 발급 (`requestIssueBillingKey`)

- `issueName`
  - 빌링키 발급 시 결제창에 표시되는 제목입니다. (카카오페이는 필수 입력)
