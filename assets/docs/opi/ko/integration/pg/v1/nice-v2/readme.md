---
title: 나이스정보통신 (신모듈)
description: 나이스정보통신 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/nice-v2
---

## 1. 나이스정보통신(신모듈) 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

아래 기능을 사용하시려면 나이스정보통신에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 PG창 호출에 실패하거나, 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답을 얻게 될 수 있으니 주의 해주시기 바랍니다.

- 모든 결제 수단(간편결제 포함)

- 면세 / 복합과세 사용

- 부가세 지정 금액 방식 사용(영세율 포함)

- 부분 취소

- 할부 사용

- 상점 부담 무이자 할부 사용

- 카드사 포인트 사용

- 에스크로 사용

- 해외 결제 사용

- 일부 bypass 파라미터
  - UserCI
  - MallUserID
  - DirectCouponYN
  - PaycoClientId, PaycoAccessToken
  - SamPayMallType

## 2. 최신 JavaScript SDK로 업데이트하기 <a href="#2." id="2." />

나이스정보통신(신모듈) 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**(신) 나이스정보통신를 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다**

</div>

<div class="hint" data-style="danger">

## **기존에 deprecated된 콜백 응답은 모두 제거**됐습니다.

신규 JS SDK는 기존 모듈에서 제공했던 CallBack 응답 파라미터가 대부분 삭제되었습니다.
(특히 deprecated 로 명시된 파라미터는 모두 삭제되었습니다.)

해당 JS SDK 사용시 Callback 으로 내려받을수 있는 데이터는 오직 아래 두가지 입니다.

**`imp_uid`, `merchant_uid`**

따라서 해당 SDK를 사용하실때는 `IMP.request_pay`로부터 응답된 객체(또는 쿼리 파라미터)에서
`imp_uid`를 가지고 **아임포트 REST API(GET `/payments/imp_uid`)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여
응답 파라미터 중 `status` 파라미터로 결제 상태를 파악하셔야 합니다.

</div>

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) 문서를 통해 최신 SDK를 설치해주세요.

## 3.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
(신) 나이스정보통신 결제창을 호출할 수 있습니다. **결제 결과**는 PC의 경우 `IMP.request_pay(param,
callback)` 호출 후 **callback**으로 수신되고 모바일의 경우
**m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `nice_v2` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank (가상계좌)
  - phone (휴대폰소액결제)
  - cultureland (컬쳐랜드)
  - naverpay\_card (네이버페이 - 카드)
  - naverpay\_point (네이버페이 - 포인트)
  - kakaopay (카카오페이)
  - payco (페이코)
  - samsungpay (삼성페이)
  - skpay (11Pay (구.SKPay))
  - ssgpay (SSGPAY)
  - ssgpay\_bank (SSGPAY 은행계좌)
  - lpay (LPAY)
  - applepay (애플페이)
  - tosspay\_card (토스페이 - 카드)
  - tosspay\_money (토스페이 - 머니)
  - alipay (알리페이)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- name: string

  **상품명**

  **40Byte** 이내로 작성해주세요

  **특수문자 유의사항**

  - 사용 가능 : **\_**
  - 사용 불가 : **% & | $ - + = \[ ]**
  - 사용 가능하나 권장하지 않음 : **( )**

- amount: number

  **결제금액**

  소수점 두번째 자리까지 허용합니다.

- buyer\_name?: string

  **구매자 이름**

- buyer\_email?: string

  **구매자 이메일**

- buyer\_tel: string

  **구매자 전화번호**

- buyer\_addr?: string

  **구매자 주소**

- buyer\_postcode?: string

  **구매자 우편번호**

- tax\_free?: number

  **면세금액**

- vat\_amount?: number

  **부가세**

- vbank\_due: string

  **가상계좌 입금기한**

  `YYYY-MM-DD` 또는 `YYYY-MM-DD HH:mm:ss` 형식으로 지정합니다. (신) 나이스정보통신의 경우 필수 입력입니다.

- escrow: boolean

  **에스크로 결제 여부**

- digital?: boolean

  **디지털 컨텐츠 여부**

  휴대폰 소액결제 시 필수 입력합니다. 디지털 컨텐츠(`true`), 실물 상품(`false`)

- language?: string

  **결제창 언어**

  - `ko`: 한국어 (기본값)
  - `en`: 영어
  - `zh`: 중국어

- currency?: string

  **결제 통화 (기본값: KRW)**

  - KRW (한국 원)
  - USD (미국 달러)

- m\_redirect\_url?: string

  **모바일 결제 후 리디렉션 될 URL**

- app\_scheme?: string

  **모바일 앱 URL scheme** (모바일 전용)

- notice\_url?: string | string\[]

  **웹훅 수신 URL**

  포트원 관리자 콘솔에 설정한 웹훅 URL 대신 사용할 URL을 지정합니다.

- confirm\_url?: string

  **Confirm process URL**

- custom\_data?: object

  **가맹점 커스텀 데이터**

  결제 정보와 함께 저장할 커스텀 데이터입니다. 결제 조회 시 반환됩니다.

- period?: object

  **서비스 제공 기간**

  날짜만 입력이 가능하며(시간은 무시) 시작 날짜와 종료 날짜를 모두 입력해야 합니다.

  - from: string

    **YYYYMMDD**

  - to: string

    **YYYYMMDD**

- bypass?: object

  **나이스정보통신(신모듈) 전용 파라미터**

  - nice\_v2?: object

    - LogoImage?: string

      **로고 이미지 URL** (full URL)

    - NPDisableScroll?: string

      **결제창 스크롤 미사용 여부** (PC 전용)

      - `Y`: 미사용 (기본값)
      - `N`: 사용

    - SkinType?: string

      **결제창 스킨 색상**

      - `red`, `green`, `purple`, `gray`, `dark`

    - UserCI?: string

      **문화상품권 결제 시 사용자 CI 정보**

      아이디/비밀번호 외 추가로 CI 인증이 필요한 경우 사용합니다. 사전 협의 필요.

    - MallUserID?: string

      **상점 사용자 아이디**

      문화상품권 결제 시 필수 입력합니다.

    - DirectCouponYN?: string

      **신용카드 쿠폰 자동 적용 여부**

      - `Y`: 사전 등록된 선 할인 쿠폰 자동 적용
      - `N`: 쿠폰 미적용 (기본값)

    - DirectShowOpt?: string

      **다이렉트 호출 결제 수단**

      - `BANK`: 계좌이체 다이렉트 호출
      - `CELLPHONE`: 휴대폰 소액결제 다이렉트 호출

    - CardShowOpt?: string

      **카드사별 호출 방식**

      형식: `카드코드:노출유형|카드코드:노출유형`

      노출 유형: `1`(안심클릭), `2`(간편결제), `3`(앱카드 직접 호출)

      예시: `"08:3|02:3"` (롯데카드, 국민카드 앱카드 직접 호출)

    - PaycoClientId?: string

      **페이코 자동 로그인용 ClientId**

      페이코에서 가맹점에 발급한 ClientId입니다. 사전 협의 필요.

    - PaycoAccessToken?: string

      **페이코 자동 로그인용 접속 토큰**

    - SamPayMallType?: string

      **삼성페이 가맹점 유형**

      - `01`: 삼성페이 내 쇼핑
      - `99`: 기타 (기본값)

</details>

<details>

<summary>

<strong>결제 가능 결제수단</strong>

</summary>

- card + 에스크로, 다이렉트
- vbank + 에스크로
- trans + 에스크로, 다이렉트(은행 지정 X)
- phone + 다이렉트(통신사 지정 X)
- cultureland
- naverpay\_card
- naverpay\_point
- kakaopay
- payco
- samsungpay
- skpay
- ssgpay
- ssgpay\_bank
- lpay
- applepay
- tosspay\_card
- tosspay\_money
- alipay

</details>

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

(신) 나이스정보통신의 경우 비인증 결제창 방식은 간편결제(네이버페이 / 카카오페이)만 지원합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "kakaopay",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 0,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    customer_uid: "your-customer-unique-id",
    customer_id: "your-customer-id", // 고객사가 회원에게 부여한 고유 ID로 필수 입력
  },
  function (rsp) {
    // callback 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `nice_v2` 로 지정하면 됩니다.

<div class="hint" data-style="warning">

`pg` 파라미터는 지원 중단 예정입니다.

JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

</div>

- pay\_method: string

  **빌링키 발급 수단 구분코드**

  - naverpay\_card (네이버페이 - 카드)
  - naverpay\_point (네이버페이 - 포인트)
  - kakaopay (카카오페이)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- name: string

  **상품명**

  **40Byte** 이내로 작성해주세요

  **특수문자 유의사항**

  - 사용 가능 : **\_**
  - 사용 불가 : **% & | $ - + = \[ ]**
  - 사용 가능하나 권장하지 않음 : **( )**

- buyer\_name?: string

  **구매자 이름**

- buyer\_email?: string

  **구매자 이메일**

- buyer\_tel: string

  **구매자 전화번호**

- buyer\_addr?: string

  **구매자 주소**

- buyer\_postcode?: string

  **구매자 우편번호**

- customer\_uid: string

  **빌링키 발급을 위한 결제 수단을 특정하는 고유 번호**

  빌링키 발급시 필수 입력

- customer\_id: string

  **구매자 식별자**

  (신)나이스 빌링키 발급 시 필수 입력

- m\_redirect\_url: string

  **리다이렉트 URL**

  리다이렉트 방식으로 진행할 경우, 트랜잭션 종료 이후 302 리디렉션 될 고객사 URL

- notice\_url?: string | string\[]

  **웹훅 수신 URL**

- custom\_data?: object

  **가맹점 커스텀 데이터**

</details>

</div>

</div>

<details>

<summary>

<strong>가능한 결제 환경</strong>

</summary>

- PC (iframe)
- 모바일 (리디렉션)

</details>
