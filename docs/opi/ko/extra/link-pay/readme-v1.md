---
title: 결제 URL 생성하기
description: 결제 URL 생성 API 사용법을 안내합니다.
targetVersions:
  - v1
---

## 1. 개요

본 문서는 포트원에서 제공하는 결제 URL 생성 API 명세를 기술합니다. 포트원 서비스를 이용중인 고객사는
해당 서비스를 제약없이 이용 가능합니다.

## 2. API URI

해당 API는 REST 방식으로 구현되어 인터넷 웹 서비스의 형태로 제공됩니다.

> **HTTP Method : POST**
>
> **Content-Type : application/json;charset=UTF-8**

<div class="tabs-container">

<div class="tabs-content" data-title="운영">

```http title="URI"
POST https://api.iamport.co/api/supplements/v1/link/payment
```

</div>

</div>

## 3. 설명

API를 이용하여 결제가 가능한 URL을 생성하고, 고객이 해당 URL을 클릭하면 결제를 진행할 수 있습니다.
PG사가 지원하는 모든 결제수단에 대해 지원이 가능합니다. 만약 설정한 시간이 만료된 경우 해당 URL을
클릭하더라도 결제가 진행되지 않습니다.

## 4. 요청 메세시 상세

**POST** https\://api.iamport.co/api/supplements/v1/link/payment

_결제URL을 생성합니다._

HTTP Method : POST

Content-Type : Application.json;charset=UTF-8

### Parameters

#### Body

- title: string

  **브릿지 페이지 노출문구**

- user\_code: string

  **고객사식별코드**

- amount: integer

  **결제금액**

- merchant\_uid: string

  **주문번호**

- name: string

  **제품명**

- tax\_free?: integer

  **면세금액**

- currency: string

  **통화구분코드**

- language?: string

  **결제대행사 결제창 표기언어**

  - ko
  - en

- buyer\_name?: string

  **주문자명**

- buyer\_tel: string

  **주문자연락처**

- buyer\_addr?: string

  **주문자주소**

- buyer\_email?: string

  **주문자 이메일주**

- buyer\_postcode?: string

  **주문자 우편번호**

- custom\_data?: object

  **에코항목**

- notice\_url?: string

  **결제결과(성공거래)를 수신받을 URL(웹훅)**

- expired\_at: string

  **페이지 만료시각**

- display\_language?: string

  **브릿지 페이지 표기언어**

  - ko : 한국어
  - en : 영어

- pay\_methods: object\[]

  - pg?: string

    pg사 구분코드

    [pg 파라미터 가이드 바로가기](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq?v=v1#pg-string)

  - pay\_method?: string

    결제수단 구분코드

    [pay\_method 가이드 바로가기](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq?v=v1#pay_method-string)

  - label?: string

    브릿지페이지 결제수단 표현값 ex. 신용카드

- direct?: object

  - pg?: string

    pg사 구분코드 ex. paymentwall.mid

    [pg 파라미터 가이드 바로가기](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq?v=v1#pg-string)

  - pay\_method?: string

    결제수단 구분코드. (하나의 결제수단만 선택 가능합니다.)

    [pay\_method 가이드 바로가기](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq?v=v1#pay_method-string)

### Responses

**200: OK** - 성공

```json title="json"
{
  "shortenedUrl": "https://impay.link/91e8f8cc" //결제링크 생성
}
```

### 요청 JSON 전문 예시

```json title="일반 호출"
{
  "payment_info": "{\"title\":\"테스트고객사\",\"user_code\":\"imp68124833\",\"amount\":10000,\"merchant_uid\":\"merchant_1630665784552\",\"name\":\"결제링크 테스트\",\"tax_free\":\"면세공급가액\",\"currency\":\"KRW\",\"language\":\"ko\",\"buyer_name\":\"\",\"buyer_tel\":\"\",\"buyer_addr\":\"\",\"buyer_email\":\"\",\"buyer_postcode\":\"\",\"custom_data\":\"json_object\",\"notice_url\":\"결제 결과를 받을 url\",\"pay_methods\":[{\"pg\":\"INIpayTest\",\"pay_method\":\"card\",\"label\":\"신용/체크카드\"},{\"pg\":\"INIpayTest\",\"pay_method\":\"naverpay\",\"label\":\"네이버페이\"},{\"pg\":\"INIpayTest\",\"pay_method\":\"kakaopay\",\"label\":\"카카오페이\"},{\"pg\":\"INIpayTest\",\"pay_method\":\"phone\",\"label\":\"핸드폰 소액결제\"},{\"pg\":\"INIpayTest\",\"pay_method\":\"trans\",\"label\":\"계좌이체\"},{\"pg\":\"INIpayTest\",\"pay_method\":\"vbank\",\"label\":\"가상계좌\"}]}",
  "expired_at": 1634324016
}
```

```json title="PG사 결제창 다이렉트 호출"
{
  "payment_info": "{\"title\":\"테스트고객사\",\"user_code\":\"imp68124833\",\"amount\":1000,\"merchant_uid\":\"merchant_16306657845522\",\"name\":\"결제링크 테스트\",\"tax_free\":\"면세공급가액\",\"currency\":\"KRW\",\"language\":\"ko\",\"buyer_name\":\"\",\"buyer_tel\":\"\",\"buyer_addr\":\"\",\"buyer_email\":\"\",\"direct\":{\"pg\":\"tosspayments\",\"pay_method\":\"card\"}}",
  "expired_at": 1634324016
}
```

### 결제(브릿지) 페이지 화면 예시

<div class="tabs-container">

<div class="tabs-content" data-title="결제(브릿지) 페이지">

**결제 URL API 요청이 성공한경우 응답 URL 렌더링 화면 예시입니다.**

(이미지 첨부: 결제 URL 페이지 화면)

</div>

<div class="tabs-content" data-title=" 만료(브릿지) 화면">

**결제 URL 페이지 만료시각(expire\_at)이 지난 경우 표시되는 화면입니다.**

(이미지 첨부: 결제 URL만료 화면)

</div>

</div>

## 5.결제 URL 비활성화 방법

**응답**(**shortenedUrl**) **URL 마지막 String 을 결제 URI API 주소 뒤에 삽입하여 호출**

> **HTTP Method :** **PUT**

<div class="hint" data-style="success">

**API 응답이 아래와 같은경우**

```json
{ "shortenedUrl": "https://impay.link/4bdf239e" }
```

`https://api.iamport.co/api/supplements/v1/link/payment/4bdf239e`

위와 같이 호출시 결제 URL 즉시 비활성화 처리됩니다.

</div>

<div class="hint" data-style="danger">

**결제결과 획득방법**

**결제 URL API로 진행된 결제는 오직 웹훅으로만 결제 결과를 수신받을수 있습니다.**

웹훅은 결제가 성공한 경우에만 발송되기 때문에 해당 서비스를 이용하실때는 오직 승인된 결과만 받아보면문제가 없는 서비스에 한하여 해당 API를 이용하시기 바랍니다.

</div>
