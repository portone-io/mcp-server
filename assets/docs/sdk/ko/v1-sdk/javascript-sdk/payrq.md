---
title: 결제요청 파라미터
description: 결제요청 파라미터를 확인 할 수 있습니다.
targetVersions:
  - v1
versionVariants:
  v2: /sdk/ko/v2-sdk/payment-request
---

## 결제요청 파라미터 정의

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  최신 JavaScript SDK 버전부터 사용 가능합니다.

- pg(deprecated)?: string

  **PG사 구분코드**

  다음과 같은 형식으로 기재합니다.

  `PG사코드.{상점ID}`

  <details>

  <summary>상세코드 확인하기</summary>

  결제대행사

  - `danal`(다날 휴대폰소액결제 및 휴대폰 본인인증)
  - `danal_tpay`(다날 결제창 일반/정기결제)
  - `daou`(키움페이 결제창 일반결제 및 API 수기/정기결제)
  - `html5_inicis`(KG이니시스 결제창 일반/정기결제)
  - `inicis_unified`(KG이니시스 통합인증)
  - `inicis`(KG이니시스 API 수기/정기결제 및 신용카드 본인인증)
  - `kcp`(NHN KCP 결제창 일반/수기결제 및 API 수기/정기결제)
  - `kcp_billing`(NHN KCP 결제창 정기결제)
  - `kicc`(이지페이(한국정보통신) 결제창 일반/정기결제)
  - `ksnet`(KSNET 결제창 일반결제 및 API 수기/정기결제)
  - `mobilians`(모빌리언스 결제창 일반/정기결제)
  - `nice`(나이스페이먼츠(구모듈) 결제창 일반결제 및 API 수기/정기결제)
  - `nice_v2`(나이스페이(신모듈) 결제창 일반결제 및 API 수기/정기결제)
  - `settle`(헥토파이낸셜 결제창 일반결제 및 API 수기/정기결제)
  - `settle_acc` (헥토파이낸셜 내통장결제)
  - `smartro`(스마트로(구모듈) 결제창 일반결제 )
  - `smartro_v2`(스마트로(신모듈) 결제창 일반/정기결제 및 API 수기/정기결제)
  - `tosspayments`(토스페이먼츠(신모듈) 결제창 일반/수기/정기결제 및 API 일반/수기/정기결제)
  - `toss_brandpay`(토스페이먼츠 브랜드페이)
  - `uplus`(토스페이먼츠(구모듈) 결제창 일반결제)
  - `welcome`(웰컴페이먼츠 결제창 일반/정기결제 및 API 일반/정기결제)

  간편결제 직연동

  - `tosspay`(토스페이 일반결제)
  - `tosspay_v2` (토스페이 일반/정기결제)
  - `payco`(페이코 일반/정기결제)
  - `kakaopay`(카카오페이 일반/정기결제)
  - `naverpay`(네이버페이-결제형)
  - `naverco`(네이버페이-주문형)
  - `smilepay`(스마일페이 일반/정기결제)

  해외 결제대행사

  - `paypal`(페이팔(ExpressCheckout) 결제창 일반결제)
  - `paypal_v2`(페이팔(SPB/RT) 결제창 일반/정기결제)
  - `eximbay`(엑심베이 결제창 일반결제)
  - `paymentwall`(페이먼트월 결제창 일반 및 API 수기/정기결제)

  </details>

  <div class="hint" data-style="warning">

  pg 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method?: string

  **결제수단 구분코드**

  PG사별 지원되는 결제수단이 모두 상이합니다.

  [**결제대행사 선택하여 연동하기**](https://developers.portone.io/opi/ko/integration/pg/v1/readme)를 참고하세요

  <details>

  <summary>상세코드 확인하기</summary>

  - `card` (신용카드)
  - `trans`(실시간계좌이체)
  - `vbank`(가상계좌)
  - `phone`(휴대폰소액결제)
  - `applepay` (애플페이)
  - `naverpay`(네이버페이)
  - `samsungpay`(삼성페이)
  - `kpay`(KPay앱)
  - `kakaopay`(카카오페이)
  - `payco`(페이코)
  - `lpay`(LPAY)
  - `ssgpay`(SSG페이)
  - `tosspay`(토스페이)
  - `cultureland`(컬쳐랜드)
  - `smartculture`(스마트문상)
  - `culturegift`(문화상품권)
  - `booknlife`(도서문화상품권)
  - `point`(베네피아 포인트 / OK캐시백 포인트)
  - `wechat`(위쳇페이)
  - `alipay`(알리페이/알리페이플러스)
  - `unionpay`(유니온페이)
  - `pinpay`(핀페이)
  - `ssgpay_bank`(SSG 은행계좌)
  - `skpay`(11Pay (구.SKPay))
  - `naverpay_card`(네이버페이 - 카드)
  - `naverpay_point`(네이버페이 - 포인트)
  - `paypal`(페이팔 SPB 결제)
  - `toss_brandpay`(토스페이먼츠 브랜드페이)
  - `tosspay_card` (토스페이 - 카드)
  - `tosspay_money` (토스페이 - 머니(계좌, 포인트))

  </details>

- escrow?: boolean

  **에스크로 결제창 활성화 여부**

  일부 PG사만 지원됩니다.

  <div class="hint" data-style="info">

  에스크로 설정은 PG사와 협의 이후 진행되어야 하는 점에 유의해주세요

  </div>

- products?: object\[]

  **상품 정보**

  토스페이먼츠 신모듈(`pg`: `tosspayments.~`)을 통한 에스크로 결제(`escrow`: `true`)시에만 유효하며, 필수값은 아닙니다.

  **1개의 주문 건에 여러 상품이 결제될 때 상품에 따라 배송이 다르게 이루어지는 경우, 1개의 주문에 여러 배송 정보를 넣기 위해 사용됩니다.**

  상품을 나타내는 아래의 객체들을 갖는 **배열**을 전달해주세요.

  - id?: string

    상품 고유 ID

  - name?: string

    상품명

  - code?: string

    상품 코드

  - unitPrice?: number

    상품 단위 가격

  - quantity?: number

    수량

- merchant\_uid?: string

  **고객사 주문번호**

  - 주문번호는 매 결제 요청 시마다 항상 다른, 고유한 값으로 채번되어야 합니다.
  - **40자** 이내로 작성해주세요
  - 결제 승인완료 처리된 주문번호를 동일하게 재설정할 경우 **사전거절** 처리됩니다.

- name?: string

  **주문명**

  - 40자 이내로 작성해주세요

- amount?: number

  **결제금액**

  - 문자열이 아닌 숫자 타입으로 지정해야 하는 점에 유의하세요.

- custom\_data?: object

  **사용자 정의 데이터**

  - 결제 응답시 **echo** 로 받아보실 수 있는 필드 입니다.
  - JSON notation(string)으로 저장됩니다.
  - 주문 건에 대해 부가정보를 저장할 공간이 필요할 때 사용합니다

- tax\_free?: number

  **면세금액**

  - 결제금액 중 면세금액에 해당하는 금액을 입력합니다.

- vat\_amount?: number

  **부가세**

  - 결제금액 중 부가세에 해당하는 금액을 입력합니다. (기본값: null)

  <details>

  <summary>지원되는 PG사</summary>

  - 나이스페이먼츠
  - (신) 토스페이

  </details>

- currency?: string

  **결제통화 구분코드**

  - 미입력 시 기본값은 KRW 입니다.

  - 예외적으로, PayPal 은 원화(KRW) 미지원으로 인해 USD 가 기본값으로 적용됩니다.
    - PayPal에서 지원하는 통화는 [PayPal 지원 통화](https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/)를 참고해주세요.

  <details>

  <summary>상세코드 확인하기</summary>

  **결제통화 구분코드**

  - KRW
  - USD
  - EUR
  - JPY

  <div class="hint" data-style="info">

  - PayPal은 원화(KRW) 미 지원으로 USD가 기본
  - PayPal에서 지원하는 통화는 [PayPal 지원 통화](https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/%20target=) 참조

  </div>

  </details>

- language?: string

  **결제창 언어 설정** (지원되지 않는 일부 PG사 존재)

  <details>

  <summary>상세코드 확인하기</summary>

  - en (영어)
  - ko (한국어)
  - zh (중국어)

  </details>

- buyer\_name?: string

  **주문자명**

- buyer\_tel?: string

  **주문자 연락처**

  - 일부 PG사에서 해당 필드 누락시 오류 발생

- buyer\_email?: string

  **주문자 이메일**

  - 일부 PG사에서 해당 필드 누락시 오류 발생(페이먼트월)

- buyer\_addr?: string

  **주문자 주소**

- buyer\_postcode?: string

  **주문자 우편번호**

- confirm\_url?: string

  [**confirm\_process**](https://developers.portone.io/opi/ko/extra/confirm-process/readme-v1) **에 사용할 고객사 endpoint URL**

  - 사용 시 기술지원 메일로 별도 요청이 필요합니다. (<support@portone.io>)

- notice\_url?: string

  **웹훅(Webhook) 수신 URL**

  - 포트원 관리자 콘솔에 설정한 웹훅 URL 대신 사용할 웹훅 URL 을 결제 시마다 설정할 수 있습니다.
  - 해당 값 설정 시 관리자 콘솔에 설정한 URL 에는 웹훅 발송이 되지 않는 점에 유의해주세요.

- customer\_uid?: string

  **고객사 정의 빌링키**

  비인증 결제 이용 시 빌링키와 1:1 로 대응되는 고객사 정의 고객 빌링키입니다.

## 추가속성

- digital?: boolean

  **디지털 상품 여부**

  - 휴대폰 결제수단인 경우 필수 항목입니다.
  - 결제제품이 실물이 아닌 경우 true 로 설정합니다.
  - 실물/디지털 여부에 따라 수수료율이 상이하게 측정되니 유의하시기 바랍니다.

- vbank\_due?: string

  **가상계좌 입금기한**

  - 결제수단이 가상계좌인 경우 입금기한을 설정할 수 있습니다.

  - 다음과 같은 형식으로 설정이 가능합니다 :

    - `YYYY-MM-DD`
    - `YYYYMMDD`
    - `YYYY-MM-DD HH:mm:ss`
    - `YYYYMMDDHHmmss`

- m\_redirect\_url?: string

  **결제완료이후 이동될 URL 주소**

  - 결제창이 새로운 URL 로 리다이렉트되는 결제 방식의 경우 필수 설정 항목입니다.
  - 대부분의 모바일 결제환경에서 결제창 호출 시 필수적으로 요구됩니다.
  - 리다이렉트 환경에서 해당 필드 누락 시 결제 결과를 수신받지 못하는 점에 유의하세요.

- app\_scheme?: string

  **모바일 앱 결제 중 고객사 앱 복귀를 위한 URL scheme**

  - WebView 환경 결제시 필수 설정 항목입니다.
  - ISP/앱카드 등에서 결제정보 인증 후 기존 앱으로 복귀할 때 사용합니다.

- biz\_num?: string

  **사업자등록번호**

  - 다날 가상계좌 결제수단 사용 시 필수 항목입니다.

- useFreeInterestFromMall?: boolean

  **상점 부담 무이자 할부 사용 여부**

  고객사가 부담하는 무이자 할부 여부를 설정 할 수 있습니다.

## 부가기능

### 원하는 할부개월수만 활성화하기

```json
{
  "display": {
    "card_quota": [6] // 할부개월 6개월만 활성화
  }
}
```

**파라미터 설명**

- display?: object

  - card\_quota: number\[]

    **카드 할부 개월수 리스트**

    - `[]`: 일시불만 결제 가능
    - `[6]`: 일시불 및 6개월 할부개월만 선택 가능
    - `[2, 3, 4, 5, 6]`: 일시불을 포함해 2, 3, 4, 5, 6개월까지 할부개월 선택 가능

<div class="hint" data-style="info">

할부결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다.

</div>

### 카드사 결제모듈 바로(direct) 호출하기

```ts
const param = {
  // ....중략....
  card: {
    direct: {
      code: "367", // 카드사 금융결제원 표준 코드 (현대카드)
      quota: 3, // 지정 할부개월수 (3개월)
    },
  },
};
```

**파라미터 설명**

- card?: object

  - direct?: object

    - code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - quota?: number

      **할부 개월 수**

      일시불일 시 0 으로 설정됩니다.

<div class="hint" data-style="danger">

**주의사항**

- PG마다 다이렉트 호출 지원 여부가 상이합니다. PG별 가이드 문서 및 테스트를 통해 다이렉트 호출이 가능한지 확인해주세요.
- 일부 PG사의 경우 승인된 상점아이디에 대해서만 카드사 결제창 direct 노출 기능을 지원합니다. 반드시 포트원을 통해 현재 사용중인 상점아이디가 카드사 결제창 direct 호출이 가능한지 확인해주세요.

</div>

### 원하는 카드사만 결제창 노출하기

```json
{
  "card": {
    "detail": [
      { "card_code": "*", "enabled": false }, // 모든 카드사 비활성화
      { "card_code": "366", "enabled": true } // 특정 카드사 (신한카드) 만 활성화
    ]
  }
}
```

**파라미터 설명**

- card?: object

  - detail?: object\[]

    - card\_code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - enabled?: boolean

      **해당 카드 활성화 여부**

### 상점 부담 무이자 할부 최대 개월수 설정하기

```json
{
  "card": {
    "detail": [
      { "card_code": "366", "max_month": 5 }, // 특정 카드사 (신한카드) 상점 부담 무이자 최대 5개월 할부 설정
      { "card_code": "381", "max_month": 3 } // 특정 카드사 (KB국민카드) 상점 부담 무이자 최대 3개월 할부 설정
    ]
  },
  "useFreeInterestFromMall": true
}
```

**파라미터 설명**

- card?: object

  - detail?: object\[]

    - card\_code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - enabled?: boolean

      **해당 카드 활성화 여부**

- useFreeInterestFromMall?: boolean

  **상점 부담 무이자 할부 사용 여부**

<details>

<summary>지원되는 PG사</summary>

- 토스페이먼츠(신모듈)
- KSNET
- 나이스페이(신모듈)
- 웰컴페이먼츠
- KSNET 카드 다이렉트
- KG이니시스

</details>
