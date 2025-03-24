---
title: KG이니시스
description: KG이니시스 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/inicis
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 사전 계약 안내

아래 기능을 사용하시려면 KG이니시스에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 결제 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답(ex. 결제창에서 에스크로 결제를 했으나 비-에스크로 결제 응답을 받음)을 얻게 될 수 있으니 주의해주시기 바랍니다.

- API를 통한 수기 결제 (가상계좌, 카드)
- API를 통한 빌링키 발급
- 에스크로 결제
- 상점분담무이자 설정
- 부가세 및 비과세 금액 직접 설정
- 카드사 포인트 사용 여부 설정
- OK캐시백 적립 옵션 설정
- 부분무이자 설정
- 몰포인트 설정
- 카드사/간편결제 다이렉트 호출
- 휴대폰 결제 익월 환불

## 가능한 결제 수단

- **결제창 일반 결제**

  `payMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드 : `CARD`
  - 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 상품권 : `GIFT_CERTIFICATE`
  - 휴대폰 소액 결제 : `MOBILE`
  - 간편결제 : `EASY_PAY`

- **결제창 빌링키 발급**
  카드 결제는 `requestIssueBillingKey` 함수, 휴대폰 결제는 `requestIssueBillingKeyAndPay` 함수를 이용합니다. `requestIssueBillingKeyAndPay` 함수를 이용할 때에는 빌링키 발급과 동시에 결제가 일어납니다.

  `billingKeyMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `CARD`
  - 휴대폰: `MOBILE`

- **API 수기(키인) 결제**

  `method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card` 로 설졍하여 카드 관련 파라미터 입력
  - 가상계좌: `virtualAccount` 로 설정하여 가상계좌 관련 파라미터 입력

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Finstant)
  를 참고해주시기 바랍니다.

- **API 빌링키 발급**

  `method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card` 로 설졍하여 카드 관련 파라미터 입력

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v2/billingKey#post%20%2Fbilling-keys)를 참고해주시기 바랍니다.

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey`파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KG이니시스 채널 사용을 명시해주세요.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "나이키 와플 트레이너 2 SD",
    totalAmount: 1000,
    currency: "CURRENCY_KRW",
    payMethod: "CARD",
    customer: {
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- totalAmount: number

  **결제 금액**

  결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- payMethod: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - 신용카드 : `CARD`
  - 실시간 계좌이체 : `TRANSFER`
  - 가상계좌 : `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제 : `MOBILE`
  - 간편 결제 : `EASY_PAY`

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - firstName?: string

    **구매자 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - lastName?: string

    **구매자 성**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - phoneNumber?: string

    **구매자 연락처**

    - KG이니시스의 PC 결제의 경우 필수로 입력해야 합니다. (모바일인 경우에는 optional)

  - email?: string

    **구매자 이메일**

    - KG이니시스의 PC 결제의 경우 필수로 입력해야 합니다. (모바일인 경우에는 optional)

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - inicis\_v2?: InicisV2BypassOnPc & InicisV2BypassOnMobile

    **이니시스 bypass 파라미터**

    KG이니시스는 PC 결제 모듈과 모바일 결제 모듈이 분리되어 있기 때문에 bypass 파라미터 또한 PC용과 모바일용이 분리되어 있습니다.

    - **bypass 예시 코드**

      ```json
      {
        "bypass": {
          "inicis_v2": {
            "logo_url": "https://portone.io/assets/portone.87061e94.avif",
            "logo_2nd": "https://admin.portone.io/assets/img/auth/lock.png",
            "parentemail": "parentemail",
            "Ini_SSGPAY_MDN": "01012341234",
            "acceptmethod": ["SKIN(#C1272C)", "below1000", "ocb"],
            "P_CARD_OPTION": "selcode=14",
            "P_NMANE": "포트원",
            "P_RESERVED": ["below1000=Y", "noeasypay=Y"]
          }
        }
      }
      ```

    - InicisV2BypassOnPc

      **PC용 파라미터**

      - logo\_url?: string

        결제창에 삽입할 메인 로고 url

        결제창 중앙 상단에 표시됩니다.
        이미지 권장 사이즈는 89\*18 입니다.

      - logo\_2nd?: string

        결제창에 삽입할 서브 로고 url

        결제창 우측 상단에 표시됩니다.
        이미지 권장 사이즈는 64\*13 입니다.

      - parentemail?: string

        보호자 이메일 주소

        14세 미만 고객의 경우 필수 입력입니다.
        "@", "." 외의 특수문자는 입력 불가합니다.

      - Ini\_SSGPAY\_MDN?: string

        SSGPAY 결제요청 시 PUSH 전송 휴대폰번호

        `-` 없이 숫자만 허용합니다.

      - acceptmethod?: string\[]

        추가 옵션

        아래 string 중 원하는 옵션들을 골라 array 형태로 입력합니다.

        - SKIN(${string})?: string

          결제창 색상

          `string` 부분에는 `#`으로 시작하는 여섯자리 Hex 값을 입력합니다. (ex. `SKIN(#C1272C)`)

        - below1000?: string

          (카드결제 & 간편결제 시) 1000원 미만 결제 허용 옵션

        - ocb?: string

          (카드결제 시) 카드 메인화면에 OCB 적립을 위한 카드번호 창 표시옵션 (별도 계약시 이용 가능)

        - paypopup?: string

          (카드결제 시) 안심클릭계열 신용카드 POPUP 형태 표시옵션

        - hidebar?: string

          (카드결제 시) 프로그레스바 미노출 옵션

        - noeasypay?: string

          (카드결제 시) 간편결제 미노출 옵션

        - slimquota(${string})?: string

          부분 무이자 설정 (별도 계약시 이용 가능)

          `string` 부분에는 `코드-개월:개월^코드-개월:개월` 와 같은 형식으로 입력합니다. (ex. `slimquota(11-2:3^34-2:3)`)
          카드사 코드는 [KG이니시스 통합 코드](https://manual.inicis.com/pay/code.html) 페이지에서
          "결제요청 시 카드코드" 섹션을 참고하시기 바랍니다.

        - mallpoint(${string})?: string

          몰포인트 (별도 계약시 이용 가능)

          `string` 부분에는 `카드코드:카드코드` 와 같은 형식으로 입력합니다. (ex. `mallpoint(11:34)`)
          카드사 코드는 [KG이니시스 통합 코드](https://manual.inicis.com/pay/code.html) 페이지에서
          "결제요청 시 카드코드" 섹션을 참고하시기 바랍니다.

    - InicisV2BypassOnMobile

      **모바일용 파라미터**

      - P\_CARD\_OPTION?: string

        신용카드 우선선택 옵션

        설정한 카드코드에 해당하는 카드가 선택된 채로 Display 됩니다.
        `selcode=카드코드` 형식으로 입력합니다. (ex. `selcode=14`)

      - P\_MNAME?: string

        가맹점 이름

      - P\_RESERVED?: string\[]

        추가 옵션

        아래 string 중 원하는 옵션들을 골라 array 형태로 입력합니다.

        - below1000=Y?: string

          (카드결제 & 간편결제 시) 1000원 미만 결제 허용 옵션

        - noeasypay=Y?: string

          (카드결제 시) 간편결제 미노출 옵션

        - global\_visa3d=Y?: string

          해외카드 노출 옵션

        - apprun\_check=Y?: string

          (android의 경우) custom url scheme 대신 intent schema(intent://) 호출

### 유의사항

#### 공통

<details>

<summary>PC와 모바일에서 파라미터 필수 여부가 상이합니다.</summary>

위의 주요 파라미터 설명에도 안내되어 있듯이, PC 결제와 모바일 결제에서 필수 여부가 상이한 파라미터가 존재합니다. 아래 필드들은 PC 결제에서는 필수이지만, 모바일 결제에서는 선택입니다.

- `customer.fullName` 혹은 `customer.firstName + customer.lastName`
- `customer.phoneNumber`
- `customer.email`

</details>

<details>

<summary>`paymentId` 에는 ASCII 문자만 허용됩니다.</summary>

`paymentId` 에는 ASCII 문자만으로 이루어진 문자열만 입력할 수 있습니다.

ASCII 문자에 포함되지 않는 한글이나 `♤`, `♡`, `♧` 등의 특수 문자는 허용되지 않습니다.

입력 가능한 ASCII 문자의 종류는 [링크](http://www.ascii-code.com/) → `ASCII printable characters` 섹션을 참고하세요.

</details>

<details>

<summary>지원되는 결제창 언어</summary>

SDK를 통한 결제 요청 파라미터에는 결제창 언어를 지정할 수 있는 `locale` 파라미터가 존재합니다.
PC 결제의 경우 `KO_KR`, `EN_US`, `ZH_CN`을 지원하며, 모바일 결제의 경우 `KO_KR`, `EN_US`만을 지원합니다.

</details>

<details>

<summary>지원되는 결제 통화</summary>

SDK를 통한 결제 요청 파라미터에는 결제 통화를 지정할 수 있는 `currency` 파라미터가 존재합니다.
KG이니시스의 경우 `KRW`와 `USD`를 지원하며, 이 중 `USD`는 카드 결제일 경우에만 지정 가능합니다.

</details>

<details>

<summary>부가세, 면세금액 직접 지정을 위해서는 별도 계약이 필요합니다.</summary>

SDK를 통한 결제 요청 파라미터에는 부가세를 지정할 수 있는 `vat` 파라미터와 면세 금액을 지정할 수 있는 `taxFreeAmount` 파라미터가 존재합니다.
KG이니시스의 경우 부가세 및 면세금액을 직접 지정하기 위해서는 별도 계약이 필요합니다. 별도 계약이 되지 않은 상태에서 `vat`와 `taxFreeAmount`에 값을 지정해 결제를 요청하면
요청한 내용과 다른 금액으로 실결제가 발생할 수 있습니다.

</details>

<details>

<summary>이니시스에서 지원하는 현금영수증 발급 유형</summary>

현금영수증은 현금성 거래인 실시간 계좌이체 및 가상계좌 발급 시 사용이 가능합니다.
KG이니시스의 경우 현금영수증 발급 유형을 `CORPORATE` 혹은 `PERSONAL` 등 파라미터로 제어할 수 없습니다.
어떤 유형의 현금영수증을 발행할지는 항상 결제창 내에서 선택 가능하며, 결제창 호출 파라미터로는 현금영수증을 발행 여부만을 제어할 수 있습니다.
`cashReceiptType` 파라미터를 `ANONYMOUS`로 설정 시 결제창에서 현금영수증 발급 UI가 미노출됩니다.

</details>

#### 카드 결제

<details>

<summary>카드사 다이렉트 호출 시 할부 개월 수 옵션은 고정 할부 개월 수만 지원합니다.</summary>

KG이니시스 경우 **카드사 다이렉트 호출 시 할부 개월 수 옵션은** 고정 할부 개월 수만 지원합니다. 카드사 다이렉트 호출을 설정했으나 할부 개월 수 옵션을 `card.installment.monthOption.fixedMonth` 가 아닌
`card.installment.monthOption.availableMonthList`로 설정할 경우 에러가 발생합니다.

</details>

<details>

<summary>카드사 다이렉트 호출 시 지원하는 카드사 종류</summary>

KG이니시스의 경우 **포트원에서 관리하는 카드사 중 토스뱅크를 제외한 모든 카드사를 지원**합니다. 포트원에서 관리하는 카드사 목록을 확인하시려면
[JS SDK 결제요청 파라미터](https://developers.portone.io/sdk/ko/v2-sdk/payment-request) 페이지에서 `card` -> `cardCompany` 필드 설명을 참고해주세요.

</details>

<details>

<summary>이니시스에서 지원하지 않는 카드 관련 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `useAppCardOnly`: 앱카드만 허용할지 여부
- `useInstallment`: 할부 사용 여부. (KG이니시스의 경우 `installment` 파라미터로 직접 설정 가능합니다.)
- `useFreeInterestFromMall`: 상점부담무이자 사용 여부. (KG이니시스의 경우 `installment.freeInstallmentPlans` 파라미터로 직접 설정 가능합니다.)

</details>

#### 간편 결제

<details>

<summary>이니시스에서 지원하는 간편결제사 종류</summary>

KG이니시스의 경우 아래 간편결제사를 지원합니다. `easyPay.easyPayProvider` 파라미터에 아래 리스트 중 원하는 값을 입력하세요.

- 카카오페이: `KAKAOPAY`
- 네이버페이: `NAVERPAY`
- 삼성페이: `SAUMSUNGPAY`
- ssg페이: `SSGPAY`
- 애플페이: `APPLEPAY`
- lpay: `LPAY`
- 토스페이: `TOSSPAY`
- 페이코: `PAYCO`

</details>

<details>

<summary>이니시스에서 지원하지 않는 간편결제 관련 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `useCardPoint`: 카드사 포인트 사용 여부
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보
- `availablePayMethod`: 간편결제 세부 결제수단 지정 렌더링 옵션
- `availableCards`: 결제 수단으로써 사용 허가할 카드사 리스트
- `useInstallment`: 할부 사용 여부. (KG이니시스의 경우 `installment` 파라미터로 직접 설정 가능합니다.)
- `useFreeInterestFromMall`: 상점부담무이자 사용 여부. (KG이니시스의 경우 `installment.freeInstallmentPlans` 파라미터로 직접 설정 가능합니다.)

</details>

#### 계좌이체

<details>

<summary>이니시스에서 지원하지 않는 계좌이체 관련 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 계좌이체 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보

</details>

#### 가상계좌 결제

<details>

<summary>이니시스에서 지원하지 않는 가상계좌 관련 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 가상계좌 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보
- `fixedOption`: 고정식 가상계좌 옵션. (KG이니시스의 경우 API를 통해서만 고정식 가상계좌 발급이 가능합니다.)

</details>

#### 상품권 결제

<details>

<summary>이니시스에서 지원하는 상품권 종류 및 필수 여부</summary>

KG이니시스 모바일 결제의 경우 `giftCertificateType`을 필수로 입력해야 하며, PC 결제의 경우는 선택 사항입니다.
PC 결제에서 해당 파라미터를 입력하지 않을 경우 결제창 내에서 상품권 종류를 선택할 수 있습니다. KG이니시스에서 지원하는 상품권 종류는 아래와 같습니다.

- 도서문화상품권: `BOOKNLIFE`
- 스마트문상: `SMART_MUNSANG`
- 컬쳐랜드 문화상품권: `CULTURELAND`

</details>

#### 휴대폰 소액 결제

<details>

<summary>`productType` 파라미터는 필수 입력해야 합니다.</summary>

- KG이니시스의 경우 **휴대폰 소액결제시 상품 유형을 구분 짓는 `productType` 파라미터가 필수**로 입력해야 합니다.
- `productType`의 값은 `PRODUCT_TYPE_REAL` 또는 `PRODUCT_TYPE_DIGITAL`를 입력해야 합니다.

</details>

<details>

<summary>결제창에 노출될 통신사 리스트 지정 옵션 지원 여부</summary>

KG이니시스 모바일 결제의 경우 `availableCarriers` 필드를 통해 결제창에 노출될 통신사 리스트를 지정할 수 있습니다. PC에서는 해당 파라미터를 지원하지 않습니다.

</details>

<details>

<summary>이니시스에서 지원하지 않는 휴대폰 소액결제 관련 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `carrier`: 휴대폰 소액결제 통신사 바로 호출을 위한 통신사 구분 값

</details>

## SDK 카드 빌링키 발급 요청하기

카드 빌링키 발급 요청 시에는 `requestIssueBillingKey` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KG이니시스 채널 사용을 명시해주세요.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKey() {
  PortOne.requestIssueBillingKey({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyMethod: "CARD",
    issueId: "test-issueId",
    issueName: "test-issueName",
    customer: {
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

<br />

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyMethod: string

  **빌링키 발급수단**

  KG이니시스는 빌링키 발급 수단으로 카드만을 지원하므로 해당 파라미터는 `CARD`로 고정해야 합니다.

- issueId: string

  **빌링키 발급 건 고유 ID**

  - 고객사에서 채번하여 사용해야 합니다.
  - KG이니시스의 경우 필수 입력해야 합니다.

- issueName: string

  **빌링키 발급 시 결제창에 표시되는 제목**

  - KG이니시스의 경우 필수 입력해야 합니다.

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - firstName?: string

    **구매자 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - lastName?: string

    **구매자 성**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - phoneNumber?: string

    **구매자 연락처**

    - KG이니시스의 PC 빌링키 발급의 경우 필수로 입력해야 합니다. (모바일인 경우에는 optional)

  - email?: string

    **구매자 이메일**

    - KG이니시스의 PC 빌링키 발급의 경우 필수로 입력해야 합니다. (모바일인 경우에는 optional)

- offerPeriod?: object

  **제공 기간**

  - KG이니시스 모바일 빌링키 발급의 경우 필수로 입력해야 합니다. (PC인 경우에는 optional)

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - inicis\_v2?: object

    **이니시스에서 제공하는 파라미터 모음**

    - carduse?: 'percard' | 'cocard'

      **개인/법인카드 사용 선택 옵션**

      - 모바일에서만 동작하는 파라미터입니다.
      - 'percard' 혹은 'cocard'를 입력할 수 있습니다.
      - 'percard' 입력 시 개인 카드로만 결제를 진행할 수 있으며, 'cocard' 입력 시 법인 카드로만 결제를 진행 할 수 있습니다.

### 유의사항

<details>

<summary>PC와 모바일에서 파라미터 필수 여부가 상이합니다.</summary>

위의 주요 파라미터 설명에도 안내되어 있듯이, PC 빌링키 발급과 모바일 빌링키 발급에서 필수 여부가 상이한 파라미터가 존재합니다.

아래 필드들은 PC에서는 필수이지만, 모바일에서는 선택입니다.

- `customer.fullName` 혹은 `customer.firstName + customer.lastName`
- `customer.phoneNumber`
- `customer.email`

아래 필드들은 모바일에서는 필수이지만, PC에서는 선택입니다.

- `offerPeriod`

</details>

<details>

<summary>`issueId` 에는 ASCII 문자만 허용됩니다.</summary>

`issueId` 에는 ASCII 문자만으로 이루어진 문자열만 입력할 수 있습니다.

ASCII 문자에 포함되지 않는 한글이나 `♤`, `♡`, `♧` 등의 특수 문자는 허용되지 않습니다.

입력 가능한 ASCII 문자의 종류는 [링크](http://www.ascii-code.com/) → `ASCII printable characters` 섹션을 참고하세요.

</details>

<details>

<summary>`offerPeriod` 파라미터 제약 사항</summary>

SDK를 통한 빌링키 발급 요청 파라미터에는 제공 기간을 나타내는 `offerPeriod` 파라미터가 존재합니다.
날짜 범위를 입력하는 방식(`range`)과 간격을 입력하는 방식(`interval`) 중 하나를 선택하여 입력할 수 있습니다.

- `range` 방식으로 입력할 경우 `from`과 `to` 모두를 입력하셔야 하, `from`은 `to`보다 과거 시간이어야 합니다.
- `interval` 방식으로 입력할 경우는 `1m` 또는 `1y`만 허용됩니다. `1m`를 입력할 경우 `월 정기결제`, `1y`를 입력할 경우 `연 정기결제` 로 빌링키 발급 창에 노출됩니다.

</details>

<details>

<summary>지원되는 결제창 언어</summary>

SDK를 통한 빌링키 발급 요청 파라미터에는 결제창 언어를 지정할 수 있는 `locale` 파라미터가 존재합니다.
PC 빌링키 발급의 경우 `KO_KR`, `EN_US`, `ZH_CN`을 지원하며, 모바일 빌링키 발급의 경우 해당 파라미터를 지원하지 않고 항상 한국어로 노출됩니다.

</details>

<details>

<summary>지원되는 결제 통화</summary>

SDK를 통한 빌링키 발급 요청 파라미터에는 displayAmount에 대한 통화를 지정할 수 있는 `currency` 파라미터가 존재합니다.
PC 빌링키 발급의 경우 `KRW`와 `USD`를 지원하며, 모바일 빌링키 발급의 경우 `KRW`만 지원합니다.

</details>

<details>

<summary>카드사 다이렉트 호출을 지원하지 않습니다.</summary>

KG이니시스 경우 카드사 다이렉트 호출을 통한 빌링키 발급을 지원하지 않습니다.
`card.cardCompany` 필드에 값을 채워도 빌링키 발급 동작에 아무런 영향을 미치지 않습니다.

</details>

## SDK 휴대폰 빌링키 발급 및 결제 요청하기

휴대폰 빌링키 발급 및 결제 요청 시에는 `requestIssueBillingKeyAndPay` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KG이니시스 채널 사용을 명시해주세요.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestIssueBillingKeyAndPay() {
  PortOne.requestIssueBillingKeyAndPay({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-3b37819a-1c72-4deb-a245-8c810af5403d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    billingKeyAndPayMethod: "PHONE",
    totalAmount: 1000,
    currency: "KRW",
    paymentId: "test-paymentId",
    orderName: "test-orderName",
    customer: {
      fullName: "포트원",
      phoneNumber: "010-0000-1234",
      email: "test@portone.io",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

<br />

- storeId: string

  **스토어 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyAndPayMethod: string

  **빌링키 발급 및 결제수단**

  KG이니시스는 빌링키 발급 및 결제 수단으로 휴대폰 소액 결제만을 지원하므로 해당 파라미터는 `PHONE`로 고정해야 합니다.

- paymentId: string

  **빌링키 발급 및 결제 건 고유 ID**

  - 고객사에서 채번하여 사용해야 합니다.
  - KG이니시스의 경우 필수 입력해야 합니다.

- orderName: string

  **빌링키 발급 및 결제 시 결제창에 표시되는 제목**

  - KG이니시스의 경우 필수 입력해야 합니다.

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - firstName?: string

    **구매자 이름**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - lastName?: string

    **구매자 성**

    - KG이니시스의 경우 fullName 혹은 (firstName + lastName)을 필수로 입력해야 합니다.

  - phoneNumber?: string

    **구매자 연락처**

    - KG이니시스의 경우 필수 입력해야 합니다.

  - email?: string

    **구매자 이메일**

    - KG이니시스의 경우 필수 입력해야 합니다.

- offerPeriod?: object

  **제공 기간**

  - KG이니시스 모바일 빌링키 발급 및 결제의 경우 필수로 입력해야 합니다. (PC인 경우에는 optional)

### 유의사항

<details>

<summary>PC와 모바일에서 파라미터 필수 여부가 상이합니다.</summary>

위의 주요 파라미터 설명에도 안내되어 있듯이, PC 빌링키 발급 및 결제와 모바일 빌링키 발급 및 결제에서 필수 여부가 상이한 파라미터가 존재합니다.

아래 필드들은 모바일에서는 필수이지만, PC에서는 선택입니다.

- `offerPeriod`

</details>

<details>

<summary>`paymentId` 에는 ASCII 문자만 허용됩니다.</summary>

`paymentId` 에는 ASCII 문자만으로 이루어진 문자열만 입력할 수 있습니다.

ASCII 문자에 포함되지 않는 한글이나 `♤`, `♡`, `♧` 등의 특수 문자는 허용되지 않습니다.

입력 가능한 ASCII 문자의 종류는 [링크](http://www.ascii-code.com/) → `ASCII printable characters` 섹션을 참고하세요.

</details>

<details>

<summary>`productType` 파라미터는 필수 입력해야 합니다.</summary>

- KG이니시스의 경우 **빌링키 발급 및 결제 시 상품 유형을 구분 짓는 `productType` 파라미터가 필수**로 입력해야 합니다.
- `productType`의 값은 `PRODUCT_TYPE_REAL` 또는 `PRODUCT_TYPE_DIGITAL`를 입력해야 합니다.

</details>

<details>

<summary>`offerPeriod` 파라미터 제약 사항</summary>

SDK를 통한 빌링키 발급 및 결제 요청 파라미터에는 제공 기간을 나타내는 `offerPeriod` 파라미터가 존재합니다.
날짜 범위를 입력하는 방식(`range`)과 간격을 입력하는 방식(`interval`) 중 하나를 선택하여 입력할 수 있습니다.

- `range` 방식으로 입력할 경우 `from`과 `to` 모두를 입력하셔야 하, `from`은 `to`보다 과거 시간이어야 합니다.
- `interval` 방식으로 입력할 경우는 `1m` 또는 `1y`만 허용됩니다. `1m`를 입력할 경우 `월 정기결제`, `1y`를 입력할 경우 `연 정기결제` 로 빌링키 발급 및 결제 창에 노출됩니다.

</details>

<details>

<summary>이니시스에서 지원하지 않는 빌링키 발급 및 결제 파라미터</summary>

KG이니시스의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `locale`: 결제창 언어를 지정하기 위한 값
- `mobile.carrier`: 휴대폰 소액결제 통신사 바로 호출을 위한 통신사 구분 값
- `mobile.availableCarriers`: 빌링키 발급 및 결제창에 노출될 통신사 리스트

</details>

<details>

<summary>지원되는 결제 통화</summary>

SDK를 통한 빌링키 발급 및 결제 요청 파라미터에는 totalAmount에 대한 통화를 지정할 수 있는 `currency` 파라미터가 존재합니다.
이니시스 빌링키 발급 및 결제의 경우, `KRW`만 지원합니다.

</details>

## API 수기(키인)결제 요청하기

수기(키인)로 결제하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/instant`를 이용하여 결제 요청을 해야합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 수기(키인) 결제 요청">

```javascript
// ... 수기(키인) 결제
const issueResponse = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/instant`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    orderName: "나이키 와플 트레이너 2 SD",
    amount: {
      total: 10000,
    },
    currency: "KRW",
    customer: {
      name: {
        full: "홍길동",
      },
      email: "test@test.com",
      phoneNumber: "010-1234-0000",
    },
    method: {
      virtualAccount: {
        bank: `SHINHAN`,
        expiry: {
          dueDate: `2024-11-12T00:00:00+09+00`, //입금기한은 미래시간만 가능합니다.
        },
        cashReceipt: {
          type: `PERSONAL`,
          customerIdentityNumber: `010-1234-0000`,
        },
        remitteeName: `테스트`,
      },
    },
    productCount: 1,
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - taxFree?: number

    **면세액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- method: object

  **결제수단 정보**

  - virtualAccount?: object

    **가상계좌 결제 시 파라미터**

    - bank: string

      **발급 은행**

      - 은행코드는 ENUM으로 정의되어 있습니다.
      - [BANK ENUM 바로가기](https://developers.portone.io/api/rest-v2/type-def#Bank)

    - expiry: object

      **입금 만료 기한**

      - validHours?: integer

        **유효 시간**

      - dueDate?: string

        **만료 시점**

        시간은 ISO8601 형식으로 입력해야 합니다.

    - option: object

      **가상계좌 발급 방식**

      - type: string

        **가상계좌 발급 유형**

        발급 유형은 ENUM으로 정의되어 있습니다.

        - 회전식 가상계좌 : `NORMAL`
        - 고정식 가상계좌 : `FIXED`
        - 회전식 가상계좌는 일반적으로 사용되는 방식이며 PG사에서 직접 채번한 가상계좌번호를 사용합니다.

      - fixed?: object

        **고정식 가상계좌 발급 유형**

        - accountNumber?: string

          **고정식 가상계좌번호**

          - PG사가 일정 개수만큼의 가상계좌번호를 발급하여 가맹점에게 미리 전달하고 가맹점이 그 중 하나를 선택하여 사용하는 방식입니다.
            KG이니시스에서는 해당 방식만 지원하고 있습니다.

    - cashReceipt: object

      **현금영수증 정보**

      - type: string

        **발급 유형**

        발급 유형은 ENUM으로 정의되어 있습니다.

        - 소득공제용 : `PERSONAL`
        - 지출증빙용 : `CORPORATE`
        - 미발행 : `NO_RECEIPT`

      - customerIdentityNumber: string

        **현금영수증 식별 번호**

        - 소득공제인 경우 주민등록번호 혹은 휴대폰 번호를 입력해야 합니다.
        - 지출증빙인 경우 사업자등록번호를 입력해야 합니다.

    - remitteeName?: string

      **예금주명**

  - card?: object

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber?: string

        **생년월일 또는 사업자 등록 번호**

      - passwordTwoDigits?: string

        **비밀번호 앞 두자리**

- customer?: object

  **고객 정보**

  - name: object

    **고객 이름**

    KG이니시스의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - email: string

    **구매자 이메일**

    - KG이니시스의 경우 필수로 입력해야 합니다.

- productCount?: integer

  **상품 개수**

## API 빌링키 발급 요청하기

빌링키를 발급하기 위해서는 `POST /billing-keys`를 이용하여 빌링키 발급 요청을 해야합니다.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 빌링키 발급 요청">

```javascript
const issueResponse = await axios({
  url: "https://api.portone.io/billing-keys",
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    channelKey: "channel-key-9987cb87-****-****-****-********896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
    },
    method: {
      card: {
        credential: {
          number: "1111111111111111",
          expiryMonth: "01",
          expiryYear: "20",
          birthOrBusinessRegistrationNumber: "900101",
          passwordTwoDigits: "00",
        },
      },
    },
  },
});
```

</div>

</div>

### 주요 파라미터

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[결제연동] > \[채널관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- method: object

  **결제수단 정보**

  - card?: object

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber?: string

        **생년월일 또는 사업자 등록 번호**

      - passwordTwoDigits?: string

        **비밀번호 앞 두자리**

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    KG이니시스의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - email: string

    **구매자 이메일**

    - KG이니시스의 경우 필수로 입력해야 합니다.

## API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제를 하기 위해 `POST /payments/${PAYMENT_ID_HERE}/billing-key`를 이용하여 결제를 요청합니다.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/billing-key`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
    orderName: "월간 이용권 정기결제",
    customer: {
      id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      phoneNumber: `010-1234-5678`,
      email: `test@test.com`,
    },
    amount: {
      total: 10000,
    },
    currency: "KRW",
    productCount: 1,
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- billingKey: string

  **빌링키 결제에 사용할 빌링키**

- orderName: string

  **주문명**

- amount: object

  **결제 금액**

  - total: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - taxFree?: number

    **면세액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

- currency: string

  **결제 통화**

  결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    KG이니시스의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - email: string

    **구매자 이메일**

    - KG이니시스의 경우 필수로 입력해야 합니다.

- productCount?: integer

  **상품 개수**

## API 빌링키 예약/반복 결제 요청하기

예약 결제를 하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/schedule` 를 이용하여 결제를 예약합니다.

KG이니시스 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/schedule`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    payment: {
      billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
      orderName: "월간 이용권 정기결제",
      customer: {
        id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
      },
      amount: {
        total: 10000,
      },
      currency: "KRW",
    },
    timeToPay: "2023-01-01 00:00:00", // 결제를 시도할 시각
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- payment: object

  **빌링키 결제 요청 입력정보**

  - billingKey: string

    **빌링키 결제에 사용할 빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **결제 금액**

    - total: number

      **총 결제 금액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

    - taxFree?: number

      **면세액**

      결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - currency: string

    **결제 통화**

    결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.

- timeToPay: string

  **결제 예정 시점**

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

    KG이니시스의 경우 full 혹은 separated를 필수로 입력해야 합니다.

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber: string

    **구매자 연락처**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - email: string

    **구매자 이메일**

    - KG이니시스의 경우 필수로 입력해야 합니다.

### 유의사항

#### 공통

<details>

<summary>이니시스 필수 파라미터</summary>

KG이니시스의 경우에는 키인(수기)결제, 빌링키 발급, 빌링키 단건 결제 시 아래의 파라미터를 필수로 입력해야 합니다.

- `customer.name.full` 혹은 `customer.name.separated`
- `customer.phoneNumber`
- `customer.email`

</details>

#### 에스크로

<details>

<summary>이니시스에서 에스크로 배송 등록시 필수 파라미터</summary>

KG이니시스의 경우 에스크로 배송 등록 시 아래의 파라미터를 필수로 입력해야 합니다.

- `sender.name`
- `sender.phoneNumber`
- `sender.zipcode`
- `sender.address`
- `receiver.name`
- `receiver.phoneNumber`
- `receiver.zipcode`
- `receiver.address`
- `products`

</details>

## API 영수증 내 하위 상점 거래 등록

오픈마켓 고객사의 경우 해당 API를 호출하여 결제 내역 매출 전표에 하위 상점 거래를 등록할 수 있습니다.

자세한 파라미터 구성은
[REST API Docs](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Fregister-store-receipt)
를 참고해주시기 바랍니다.

### 주요 파라미터

- paymentId: string

  **결제 주문 번호**

  - 고객사에서 채번하여 사용하는 주문번호로 고유한 값이여야 합니다.
  - URL path에 포함하여 요청해야 합니다.

- items: RegisterStoreReceiptBodyItem\[]

  **등록할 거래 건 리스트**

  \= 매출전표에 등록할 하위 상점 거래 건 리스트를 등록 하셔야합니다.

  - storeBusinessRegistrationNumber: string

    **하위 상점 사업자등록번호**

  - storeName: string

    **하위 상점 명**

  - totalAmount: number

    **총 결제 금액**

    결제 금액으로 결제를 원하는 통화(currency)별 scale factor(소수점 몇번째 자리까지 유효한지)를 고려한 number 형식만 허용됩니다.

  - taxFreeAmount: number

    **면세액**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - vatAmount: number

    **부가세**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - supplyAmount: number

    **공급가액**

    - KG이니시스의 경우 필수로 입력해야 합니다.

  - currency: string

    **결제 통화**

    결제통화로 원화 결제 시 `KRW`로 입력해야 합니다.
