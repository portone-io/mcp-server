---
title: KG모빌리언스 (신모듈)
description: KG모빌리언스 (신모듈) 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. KG모빌리언스 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
KG 모빌리언스 결제창을 호출할 수 있습니다.
**결제 결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후 **callback** 으로 수신되고
모바일의 경우 **m\_redirect\_url**로 리디렉션됩니다.

### 지원 결제수단

- **카드**

- **간편결제**
  - 페이코
  - 삼성페이
  - SSGPAY
  - 카카오페이
  - Npay
  - L.Pay
  - 토스페이
  - 애플페이

- **가상계좌**

- **계좌이체**

- **휴대폰**

- **상품권결제**
  - 컬쳐랜드 문화상품권
  - 스마트문상 (게임문화상품권)
  - 도서문화상품권

### 지원 결제환경

- **PC** (popup)
- **모바일** (리디렉션)

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
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
    //* ...중략... *//
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

- pay\_method?: string

  **결제수단 구분 코드**

  - `card` (신용카드)
  - `phone` (휴대폰 소액 결제)
  - `vbank` (가상계좌)
  - `trans` (실시간 계좌이체)
  - `cultureland` (컬쳐랜드 문화상품권)
  - `booknlife` (도서문화상품권)
  - `smartculture` (스마트문상)
  - `payco`
  - `samsung`
  - `ssgpay`
  - `kakaopay`
  - `naverpay`
  - `lpay`
  - `tosspay`
  - `applepay`

  기본값: `card`

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다. 최소 4글자, 최대 40글자입니다.

- name: string

  **주문명**

  최대 40글자입니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요.

- tax\_free?: number

  **면세금액**

- vat\_amount?: number

  **부가세**

  기본값: 과세 금액의 1/11

- escrow?: boolean

  **에스크로 설정여부**

  계좌이체 에스크로 사용 여부 / 가상계좌 에스크로 노출 여부

  기본값: `false`

- buyer\_name?: string

  **구매자 이름**

  계좌이체 에스크로 사용 시 필수

- buyer\_tel?: string

  **구매자 연락처**

  SSGPAY 결제 시 필수

  `bypass.mobilians_v2.pay_options.ra_direct`가 `"Y"`이고 `escrow`가 `true`인 경우 필수

- buyer\_email?: string

  **구매자 이메일**

  `bypass.mobilians_v2.pay_options.ra_direct`가 `"Y"`이고 `escrow`가 `true`인 경우 필수

- customer\_id?: string

  **구매자 고유 ID**

  길이제한 20 bytes

  상품권 결제 시 필수 입력

- vbank\_due?: string

  **가상계좌 입금 기한**

  가상계좌인 경우 필수

  `YYYY-MM-DD` 또는 `YYYYMMDD` 형식으로 요청

- useCardPoint?: boolean

  **카드 포인트 사용 여부 (일반 카드 결제시 사용가능)**

  모빌리언스 서비스 ID에 포인트 사용 설정 필요

- card?: object

  **카드 관련 설정**

  - direct?: object

    **카드사 다이렉트 호출 설정**

    - code?: string

      **다이렉트 호출되는 카드사 코드**

      다이렉트 호출 시 `quota` 필수

    - quota?: number

      **카드사 다이렉트 호출 시 적용할 할부 개월 수**

    - usePoint?: boolean

      **카드사 다이렉트 호출 시 적용할 카드 포인트 사용 여부**

      모빌리언스 서비스 ID에 포인트 사용 설정 필요

      기본값: 사용자 선택

  - detail?: object\[]

    **결제창에 노출할 카드사 리스트**

    - card\_code?: string

      **카드사 코드**

    - enabled?: boolean

      **해당 카드 활성화 여부**

- display?: object

  **결제창 표시 관련 설정**

  - card\_quota?: number\[]

    **신용카드 할부개월**

    - `[3, 5, 9]` → 3 \~ 9개월 표시
    - `[3]` → 3개월 표시
    - `[]` → 일시불

- phone?: object

  **휴대폰 결제 관련 설정**

  - carrier?: string

    **휴대폰 통신사 코드**

    `SKT`, `KTF`, `LGT`, `CJH`, `KCT`, `SKL`

- bypass?: object

  **PG사 전용 파라미터**

  - cashReceiptType?: string

    **현금영수증 발급용도**

    간편결제, 계좌이체 시 사용

    - `personal` (개인 소득공제용)
    - `corporate` (사업자 지출증빙용)

    기본값: 사용자선택

  - customerIdentifier?: string

    **현금영수증 식별번호**

    간편결제, 계좌이체 시 사용

    휴대폰번호 또는 사업자번호

  - mobilians\_v2?: object

    **모빌리언스 전용 파라미터**

    - cp\_logo?: string

      **가맹점 로고 표기**

      - `Y`: 표기
      - `N`: 미표기

      기본값: `N`

      사전에 모빌리언스 측과 협의된 로고가 등록되어있는 경우 사용 가능합니다.

      <div class="hint" data-style="info">

      상품권 결제에서는 사용불가

      </div>

    - css\_type?: string

      **결제창 색상 설정**

      HTML 색상코드 (예: `#FF0000`)

      <div class="hint" data-style="info">

      상품권 결제에서는 사용불가

      </div>

    - pay\_options?: object

      **결제 옵션**

      - cn\_pay\_app\_use\_yn?: string

        **WON 카드/뱅킹 결제만 제공 여부** (신용카드)

        - `Y`: WON 카드, WON 뱅킹 결제만 제공
        - `N`: 전체 제공

        기본값: `N`

      - cn\_pay\_app\_use\_cd?: string

        **WON 카드/뱅킹 단독 결제 코드** (신용카드)

        `cn_pay_app_use_yn`가 `Y`인 경우에만 사용 가능

        - `01`: WON 카드
        - `02`: WON 뱅킹

      - ep\_pay\_type?: string

        **간편결제 결제수단**

        - `C`: 카드 (Npay에서만 사용 가능)
        - `P`: Npay 포인트 (Npay에서만 사용 가능)
        - `M`: 카카오페이 머니, 토스 머니

        <div class="hint" data-style="info">

        Npay 포인트 결제 시 `bypass.cashReceiptType`, `bypass.customerIdentifier` 필수

        </div>

      - mc\_fix\_no?: string

        **휴대폰 번호 고정**

        - `Y`: 고정 (`buyer_tel` 필수)

      - mc\_safe\_call?: string

        **휴대폰결제 ARS 인증**

      - ra\_escrow\_password?: string

        **계좌이체 에스크로 구매 비밀번호**

        `ra_direct`가 `Y`이고 `escrow`가 `true`인 경우 필수

      - ra\_direct?: string

        **계좌이체 뱅크페이 다이렉트 호출 여부**

        - `Y`: 다이렉트 호출 (`bypass.cashReceiptType`, `bypass.customerIdentifier` 필수)
        - `N`: 일반

        기본값: `N`

      - va\_cash\_receipt?: string

        **가상계좌 현금영수증 노출 여부**

        - `Y`: 노출
        - `N`: 미노출

        기본값: `Y`

      - va\_email?: string

        **가상계좌 이메일 입력 필수 여부**

        - `Y`: 필수
        - `N`: 선택

        기본값: `Y`

    - hidden\_options?: object

      **결제창 영역 노출 설정**

      - footer\_area?: string

        **footer 영역 미노출 여부**

        - `Y`: 미노출
        - `N`: 노출

        기본값: `N`

        <div class="hint" data-style="info">

        휴대폰 결제창에서만 사용 가능

        </div>

      - product\_area?: string

        **상품 정보 영역 미노출 여부**

        - `Y`: 미노출
        - `N`: 노출

        기본값: `N`

        <div class="hint" data-style="info">

        휴대폰 결제창에서만 사용 가능

        </div>

      - email\_area?: string

        **이메일 입력 영역 미노출 여부**

        - `Y`: 미노출
        - `N`: 노출

        기본값: `N`

    - LOGO\_YN?: string

      **상품권 결제창 고객사 로고 표시 여부**

      - `Y`: 표시
      - `N`: 미표시

      기본값: `N`

      사전에 모빌리언스 측과 협의된 로고가 등록되어있는 경우 사용 가능합니다.

    - EMAIL\_HIDDEN?: string

      **상품권 결제창 이메일입력영역 숨김여부**

      - `Y`: 숨김
      - `N`: 표시

      기본값: `N`

      컬쳐랜드 문화상품권에서만 사용 가능

## 3. 빌링키 발급과 동시에 최초 결제

인증결제창 호출 파라미터에서 **`customer_uid`** 값을 추가하면 빌링키 발급과 동시에 최초 결제를 진행할 수 있습니다.

### 지원 결제수단

- **휴대폰**
- **카드**

### 지원 결제환경

- **PC** (popup)
- **모바일** (리디렉션)

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "phone",
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 1004, // 결제창에 표시될 금액. 실제 승인이 발생됩니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

<div class="hint" data-style="info">

- 빌링키 발급 가능하도록 설정된 서비스 ID를 이용하셔야 빌링키 발급이 가능합니다. 그렇지 않은 경우 결제만 진행되고 빌링키 발급은 진행되지 않을 수 있습니다.

</div>

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

- pay\_method: string

  **결제수단 구분 코드**

  `card` 또는 `phone`만 허용

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- customer\_uid: string

  **빌링키**

  비 인증 결제창에서 고객이 입력한 결제정보와 1:1로 매칭될 빌링키를 지정합니다.

- name: string

  **주문명**

- amount: number

  **결제금액**

  결제창에 표시될 금액으로 실제 승인이 발생됩니다.

- buyer\_name?: string

  **구매자 이름**

- buyer\_tel?: string

  **구매자 연락처**

- buyer\_email?: string

  **구매자 이메일**

- phone?: object

  **휴대폰 결제 관련 설정**

  - carrier?: string

    **휴대폰 통신사 코드**

    `SKT`, `KTF`, `LGT`, `CJH`, `KCT`, `SKL`

- bypass?: object

  **PG사 전용 파라미터**

  - mobilians\_v2?: object

    **모빌리언스 전용 파라미터**

    - cp\_logo?: string

      **가맹점 로고 표기**

      - `Y`: 표기
      - `N`: 미표기

      기본값: `N`
      사전에 모빌리언스 측과 협의된 로고가 등록되어있는 경우 사용 가능합니다.

    - css\_type?: string

      **결제창 색상 설정**

      HTML 색상코드

    - pay\_options?: object

      **결제 옵션**

      - mc\_fix\_no?: string

        **휴대폰 번호 고정**

        - `Y`: 고정 (`buyer_tel` 필수)

      - mc\_safe\_call?: string

        **휴대폰결제 ARS 인증**

    - hidden\_options?: object

      **결제창 영역 노출 설정**

      - footer\_area?: string

        **footer 영역 미노출 여부**

        - `Y`: 미노출
        - `N`: 노출

        기본값: `N`

        <div class="hint" data-style="info">

        휴대폰 결제의 경우만 사용 가능

        </div>

      - product\_area?: string

        **상품 정보 영역 미노출 여부**

        - `Y`: 미노출
        - `N`: 노출

        기본값: `N`

        <div class="hint" data-style="info">

        휴대폰 결제의 경우만 사용 가능

        </div>

      - email\_area?: string

        **이메일 입력 영역 미노출 여부**

        - `Y`: 미노출
        - `N`: 노출

        기본값: `N`

### 빌링키(`customer_uid`)로 결제 요청하기

빌링키 발급이 성공하면 실 빌링키는 `customer_uid` 와 1:1 매칭되어 **포트원 서버에 저장**됩니다.
`customer_uid`를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain) 를 호출하시면
결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":1004}' \
     https://api.iamport.kr/subscribe/payments/again
```

## 4. 빌링키 발급 (카드)

**카드 결제수단**의 경우 빌링키만 발급하고 실 결제는 발생시키지 않을 수 있습니다.

### 지원 결제수단

- **카드**

### 지원 결제환경

- **PC** (popup)
- **모바일** (리디렉션)

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "빌링키 발급",
    amount: 0, // 빌링키 발급만 진행 (실 결제 없음)
    customer_uid: "your-customer-unique-id", // 필수 입력
    customer_id: "your-customer-id", // 필수 입력
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

- pay\_method: string

  **결제수단 구분 코드**

  `card`만 허용

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- customer\_uid: string

  **빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- customer\_id: string

  **구매자 고유 ID**

- name: string

  **주문명**

- amount: number

  **결제금액**

  빌링키 발급만 진행할 경우 `0`으로 설정

- buyer\_name?: string

  **구매자 이름**

- buyer\_tel?: string

  **구매자 연락처**

- buyer\_email?: string

  **구매자 이메일**

- bypass?: object

  **PG사 전용 파라미터**

  - mobilians\_v2?: object

    **모빌리언스 전용 파라미터**

    - cp\_logo?: string

      **가맹점 로고 표기**

      - `Y`: 표기
      - `N`: 미표기

      기본값: `N`
      사전에 모빌리언스 측과 협의된 로고가 등록되어있는 경우 사용 가능합니다.

    - css\_type?: string

      **결제창 색상 설정**

      HTML 색상코드

    - hidden\_options?: object

      **결제창 영역 노출 설정**

      - email\_area?: string

        **이메일 입력 영역 미노출 여부**

        - `Y`: 미노출
        - `N`: 노출

        기본값: `N`

## 4. 유의사항

<details>

<summary>신용카드 빌링키 결제 관련</summary>

- 신용카드 빌링키 결제는 **실운영 환경에서만 가능**합니다. 테스트 채널에서 발급된 빌링키로 결제는 불가능합니다.
- 빌링키 결제 시 **부가세, 면세금액 파라미터는 지원하지 않습니다.**

</details>

<details>

<summary>간편결제 관련</summary>

- 카드 결제창에서 간편결제로 결제 시 간편결제사를 알 수 없어 포트원 결제내역에서 결제수단은 **카드결제로 표시**됩니다.

</details>

<details>

<summary>상품권 결제 관련</summary>

- 상품권 결제는 **1-transaction으로 동작**하기 때문에 컨펌프로세스는 사용 불가능합니다.
- 게임문화상품권 결제는 **부분취소 불가**합니다.

</details>

<details>

<summary>매출전표 미지원</summary>

- 모빌리언스 결제는 매출전표를 제공하지 않습니다.

</details>

<details>

<summary>현금영수증 관련</summary>

- **TS 서비스 계약**이 되어 있어야 현금영수증 발급/취소 API를 사용할 수 있습니다.
- 결제창을 통해 발급된 **현금영수증 정보는 제공하지 않음**

</details>

<details>

<summary>실시간 계좌이체 관련</summary>

- 실시간 계좌이체 결제 건의 **계좌 정보는 제공하지 않음**

</details>

<details>

<summary>최소 결제 금액</summary>

결제가능 최소 금액은 결제수단마다 다르며, 최소 금액 미달 시 결제창에 "100원 미만 결제는 불가능하다"고 표시됩니다.

</details>

<details>

<summary>결제 취소 시 과세 처리</summary>

- **과세**: 입력한 부가세와 상관없이 모빌리언스에서 자동 계산된 부가세 기준으로 처리됩니다.

- **복합 과세**:
  - 첫번째 취소: 입력한 면세액, 부가세액 기준으로 처리됨
  - 두번째(마지막) 취소: 입력한 면세액, 부가세액과 상관없이 모빌리언스에서 자동 계산된 나머지 금액을 취소함

</details>

<details>

<summary>페이코 결제 관련</summary>

페이코는 복합과세를 지원하지 않습니다. 따라서 면세액(`tax_free`), 부가세(`vat`) 파라미터를 사용할 수 없습니다.

</details>

<details>

<summary>면세액(`tax_free`), 부가세(`vat`) 파라미터 사용 관련</summary>

카드, 간편결제에서만 면세액(`tax_free`), 부가세(`vat`) 파라미터를 사용할 수 있습니다.
면세액과 부가세 파라미터 사용 시 올바르게 계산된 금액을 입력해야 합니다. 그렇지 않으면 결제가 실패하거나 모빌리언스 측에서 계산된 금액이 적용되어 의도하지 않은 면세액, 부가세 정보로 거래가 발생할 수 있습니다.

</details>

<details>

<summary>가상계좌 말소</summary>

부산은행, 광주은행, 경남은행 가상계좌에 대해서는 가상계좌 말소 API를 지원하지 않습니다.

</details>

<details>

<summary>모바일 환경 이슈</summary>

- 아이폰 모바일 환경에서 크롬이나 인앱 브라우저에서 계좌이체를 하면 뱅크페이에서 결제 완료 후 **사파리로 이동하는 이슈**가 있습니다. (모빌리언스 수정 예정)
- 팝업을 사용할 수 없는 웹뷰 환경에서는 **애플페이 결제 불가**합니다.

</details>
