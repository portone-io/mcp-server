---
title: NHN KCP
description: NHN KCP 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/nhn-kcp
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 사전 계약 안내

아래 기능을 사용하시려면 KCP에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 결제 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답(ex. 결제창에서 에스크로 결제를 했으나 비-에스크로 결제 응답을 받음)을 얻게 될 수 있으니 주의해주시기 바랍니다.

- API를 통한 수기 결제 (가상계좌, 카드)
- API를 통한 빌링키 발급
- 에스크로 결제
- 상점분담무이자 설정
- 부가세 및 비과세 금액 직접 설정
- 부분무이자 설정
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

  `billingKeyMethod` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `CARD`

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
`channelKey`파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KCP 채널 사용을 명시해주세요.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

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
  KCP의 경우 최대 40자 까지 허용합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.
  KCP의 경우 최대 100Byte까지 허용합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

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

  - firstName?: string

    **구매자 이름**

  - lastName?: string

    **구매자 성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - kcp\_v2?: object

    **KCP에서 제공하는 파라미터 모음**

    - site\_logo?: string

      **결제창에 삽입할 메인 로고 url**

      - 결제창 왼쪽 상단에 표시됩니다.
      - 이미지 사이즈는 150\*50 미만으로 설정해야 하며, GIF, JPG 파일만 지원됩니다.

    - skin\_indx?: integer

      **결제창 색상**

      - PC로 결제창 호출 시 결제창 색상을 변경합니다.
      - 1\~12까지 설정 가능합니다.

    - kcp\_pay\_title?: string

      **결제창 상단 문구**

      - 결제창의 상단 문구를 변경합니다.

    - shop\_user\_id?: string

      **기관에 따라 리스크 관리 조치를 위한 쇼핑몰 관리 ID**

      - 상품권, 휴대폰 결제 시 필수로 입력해야 합니다.

    - site\_name?: string

      **카드사 다이렉트 호출 시 결제창에 표기될 상호명**

      - PC의 경우 신한, 현대, 삼성, 농협, 하나, 외환, 롯데, 씨티, 우리카드사에 대해 다이렉트 호출 시 필수로 입력해야 합니다.
      - 모바일의 경우 필수로 입력해야 합니다.

    - disp\_tax\_yn?: string

      **결제창 현금영수증 노출 여부**

      - 결제창에서 현금영수증 노출 여부를 설정할 수 있습니다. 실시간 계좌이체 또는 가상계좌 결제 시 사용할 수 있습니다.
      - `Y`: 노출
      - `N`: 노출하지 않음
      - `R`: 소득공제로 노출
      - `E`: 지출증빙으로 노출

    - deli\_term?: string

      **에스크로 결제 예상 배송 소요일**

      - 에스크로 결제 시, 결제 상품의 예상 배송 소요일입니다. KCP측에서 에스크로 결제 사용 시 입력을 권장하고 있습니다.
      - 미입력 시 '00'으로 입력됩니다.
      - 입력 형식은 두 자리 수로 입력되어야 합니다. ex. 예상 배송 소요기간이 3일인 경우,`03`으로 입력

#### 예제

```json title="bypass 파라미터 예시"
{
  "bypass": {
    "kcp_v2": {
      "site_logo": "https://portone.io/assets/portone.jpg",
      "skin_indx": 6,
      "shop_user_id": "user_id1",
      "site_name": "포트원 고객사"
    }
  }
}
```

### SDK 결제 - 유의사항

#### 공통

<details>

<summary>`paymentId` 파라미터 내 한글, 특수문자 미지원</summary>

`paymentId` 에는 영문/숫자만 사용할 수 있습니다. 한글이나 특수 문자가 포함된 채 결제를 요청하는 경우
결제 실패가 발생하오니 유의하시기 바랍니다.

</details>

<details>

<summary>결제창 표시 언어 지원 안내</summary>

SDK를 통한 결제 요청 시 `locale` 파라미터를 이용하여 결제창 언어를 변경할 수 있으며, PC 및 모바일 환경 모두
한국어(`KO_KR`) 및 영어(`EN_US`)를 지원합니다.
미입력 시 자동으로 한국어로 표시됩니다.

</details>

<details>

<summary>결제 통화 지원 안내</summary>

SDK를 통한 결제 요청 시 `currency` 파라미터를 이용하여 결제 통화를 지정할 수 있으며, KCP에서는
`KRW`와 `USD`만 지원됩니다. 단, `USD`는 카드 결제일 경우에만 지정 가능합니다.

</details>

<details>

<summary>부가세, 면세금액 직접 지정을 위해서는 별도 계약이 필요합니다.</summary>

SDK를 통한 결제 요청 시 면세 금액(`taxFreeAmount`) 와 부가세(`vatAmount`) 파라미터를 이용하여 면세금액과 부가세를
직접 지정할 수 있습니다. 다만 직접 지정하여 사용하기 위해서는 사전에 KCP와 별도로 계약을 진행해야 합니다.
별도로 계약을 진행하지 않은 상태에서 해당 파라미터에 값을 지정하여 결제를 요청하는 경우 요청한 내용과 다른 금액으로
실결제가 발생할 수 있습니다.

</details>

<details>

<summary>KCP에서 지원하는 현금영수증 발급 유형</summary>

현금영수증은 현금성 거래인 실시간 계좌이체 및 가상계좌 발급 시 사용이 가능합니다.
KCP의 경우 현금영수증 발급 유형을 `CORPORATE` 혹은 `PERSONAL` 등 파라미터로 제어할 수 없습니다.
어떤 유형의 현금영수증을 발행할지는 항상 결제창 내에서 선택 가능합니다.

</details>

#### 카드 결제

<details>

<summary>카드사 다이렉트 호출 시 고정 할부 개월 수만 설정할 수 있습니다.</summary>

KCP의 경우 카드사 다이렉트 호출 시 **고정 할부 개월 수**만 설정 가능합니다.
카드사 다이렉트 호출 시 할부 개월 수 옵션을 `card.installment.monthOption.fixedMonth` 가 아닌
`card.installment.monthOption.availableMonthList`로 설정할 경우 에러가 발생합니다.

</details>

<details>

<summary>카드사 다이렉트 호출 시 지원하는 카드사 종류</summary>

아래 카드사는 다이렉트 호출이 가능합니다.

- 신한카드
- 현대카드
- 삼성카드
- 농협카드
- 하나카드
- 롯데카드
- 씨티카드
- 우리카드
- 비씨카드
- 국민카드
- 우체국은행 카드
- 광주은행 카드
- 새마을금고 카드
- 수협은행 카드
- 제주은행 카드
- 신협 카드
- 저축은행 카드
- KDB산업은행 카드

</details>

<details>

<summary>미지원 카드 관련 파라미터 안내 </summary>

KCP의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `useCardPoint`: 카드 포인트 사용 여부.
  - KCP의 경우 지정하지 않아도 카드 포인트를 사용 가능합니다.

- `useInstallment`: 할부 사용 여부.
  - KCP의 경우 `installment` 파라미터로 직접 설정 가능합니다.

- `useFreeInterestFromMall`: 상점부담무이자 사용 여부.
  - KCP의 경우 `installment.freeInstallmentPlans` 파라미터로 직접 설정 가능합니다.

</details>

<details>

<summary>일부 카드사에 한하여 다이렉트 호출 시 필수 파라미터 안내 </summary>

PC 환경에서 카드사 다이렉트 결제 요청 시, 다음 카드사들의 경우 `bypass.kcp_v2.site_name`을 필수로 입력해야 합니다.

- 신한카드
- 우리카드
- 현대카드
- 삼성카드
- 농협카드
- 하나카드
- 롯데카드
- 씨티카드

모바일 환경에서 카드사 다이렉트 결제 요청 시, 고객사 상호명 파라미터인 `bypass.kcp_v2.site_name`을 필수로 입력해야 합니다.

</details>

#### 간편 결제

<details>

<summary>간편결제 허브형 지원 안내</summary>

KCP의 경우 아래 간편결제 허브형을 지원합니다. `easyPay.easyPayProvider` 파라미터에 아래 리스트 중 원하는 값을 입력하세요.

- 카카오페이: `KAKAOPAY`
- 네이버페이: `NAVERPAY`
- 삼성페이: `SAMSUNGPAY`
- ssg페이: `SSGPAY`
- 애플페이: `APPLEPAY`
- lpay: `LPAY`
- 토스페이: `TOSSPAY`
- 페이코: `PAYCO`

</details>

<details>

<summary>미지원 간편결제 관련 파라미터 안내</summary>

KCP의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `useCardPoint`: 카드사 포인트 사용 여부

- `customerIdentifier`: 현금영수증 발행 대상 식별 정보

- `availablePayMethod`: 간편결제 세부 결제수단 지정 렌더링 옵션

- `availableCards`: 결제 수단으로써 사용 허가할 카드사 리스트

- `useInstallment`: 할부 사용 여부.
  - KCP의 경우 `installment` 파라미터로 직접 설정 가능합니다.

- `useFreeInterestFromMall`: 상점부담무이자 사용 여부.
  - KCP의 경우 `installment.freeInstallmentPlans` 파라미터로 직접 설정 가능합니다.

</details>

#### 계좌이체

<details>

<summary>미지원 계좌이체 관련 파라미터 안내</summary>

KCP의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 계좌이체 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보

</details>

#### 가상계좌 결제

<details>

<summary>미지원 가상계좌 관련 파라미터 안내</summary>

KCP의 경우 아래 파라미터들을 지원하지 않으며, 해당 파라미터들을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

- `bankCode`: 가상계좌 은행 다이렉트 호출 시 은행 코드
- `customerIdentifier`: 현금영수증 발행 대상 식별 정보
- `fixedOption`: 고정식 가상계좌 옵션

</details>

#### 상품권 결제

<details>

<summary>상품권 지원 안내</summary>

KCP PC, 모바일 결제에서 `giftCertificateType`는 선택 사항입니다.
결제에서 해당 파라미터를 입력하지 않을 경우 결제창 내에서 상품권 종류를 선택할 수 있습니다. KCP에서 지원하는 상품권 종류는 아래와 같습니다.

- 도서문화상품권: `BOOKNLIFE`
- 컬쳐랜드 문화상품권: `CULTURELAND`

</details>

<details>

<summary>상품권 또는 휴대폰 결제 시 필수 파라미터 안내</summary>

KCP에서 상품권, 휴대폰 결제 시 리스크 관리를 위해 고객사 회원의 ID를 필수로 받고 있어,
`bypass.kcp_v2.shop_user_id`를 필수로 입력하셔야 합니다.

</details>

#### 휴대폰 소액 결제

<details>

<summary>결제창에 노출될 통신사 지정 옵션 지원 여부</summary>

KCP 모바일 결제의 경우 하나의 통신사만 지정할 수 있으며 `availableCarriers`를 사용할 수 없습니다.
통신사 구분 값을 위한 `carrier`만 사용이 가능합니다.

</details>

#### 에스크로 결제

<details>

<summary>에스크로 결제 시 필수 파라미터 안내 </summary>

KCP 에스크로 결제 시 `products` 파라미터를 필수로 요구합니다.
구매 상품의 정보를 담아 `products` 리스트에 하나 이상의 상품 정보가 포함되어야 합니다.

</details>

<details>

<summary>에스크로 결제 시 입력 권장 파라미터 안내 </summary>

KCP에서 에스크로 결제 시 예상 배송 소요일인 `bypass.kcp_v2.deli_term`을 입력을 권장하고 있습니다.
입력 형식은 두 자리 수로 입력 되어야 합니다. ex. 예상 배송 소요기간이 3일인 경우,'03'으로 입력
정확한 소요일을 알 수 없어 미입력 시 '00'으로 입력됩니다.

</details>

## SDK 빌링키 발급 요청하기

빌링키 발급 요청 시에는 `requestIssueBillingKey` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 KCP 채널 사용을 명시해주세요.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

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

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- billingKeyMethod: string

  **빌링키 발급수단**

  KCP는 빌링키 발급 수단으로 카드만을 지원하므로 해당 파라미터는 `CARD`로 고정해야 합니다.

- issueId: string

  **빌링키 발급 건 고유 ID**

  - 고객사에서 채번하여 사용해야 합니다.
  - KCP의 경우 필수 입력해야 합니다. // 추후 수정 필요, 포트원 내부 채번으로 수정할 예정

- issueName: string

  **빌링키 발급 시 결제창에 표시되는 제목**

  - 모바일 발급의 경우 필수 입력해야 합니다.

- customer?: object

  **고객 정보**

  - fullName?: string

    **구매자 전체 이름**

  - firstName?: string

    **구매자 이름**

  - lastName?: string

    **구매자 성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

- offerPeriod?: object

  **제공 기간**

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - kcp\_v2?: object

    **KCP에서 제공하는 파라미터 모음**

    - batch\_soc\_choice?: 'percard' | 'cocard'

      **결제창에서 주민번호/사업자 번호 고정여부 설정**

      - S: 주민번호만 표시
      - C: 사업자번호만 표시

### SDK 빌링키 발급 - 유의사항

<details>

<summary>파라미터 제약 사항</summary>

SDK를 통한 빌링키 발급 요청 `offerPeriod` 파라미터를 이용하여 제공 기간을 나타낼 수 있으며, 빌링키 발급 시
`interval`파라미터만 지원됩니다.

</details>

<details>

<summary>카드사 다이렉트 호출 미지원 안내</summary>

KCP 경우 카드사 다이렉트 호출을 통한 빌링키 발급을 지원하지 않습니다.
`card.cardCompany` 필드에 값을 채워도 빌링키 발급 동작에 아무런 영향을 미치지 않습니다.

</details>

## API 수기(키인)결제 요청하기

수기(키인) 결제 요청 시 `POST /payments/${PAYMENT_ID_HERE}/instant` API를 호출해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 수기(키인) 카드 결제 요청">

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
      card: {
        credential: {
          nuber: "1234123400001234", // 카드 번호 입력 시 숫자만 입력해주세요.
          expiryYear: "26", // 유효기간 만료 연도 2자리
          expiryMonth: "12", // 유효기간 만료 월 2자리
          birthOrBusinessRegistrationNumber: "900101", // 카드 소유주 생년월일 또는 사업자 등록번호
          passwordTwoDigits: "00", // 카드 비밀번호 앞 2자리
        },
      },
    },
  },
});
```

</div>

<div class="tabs-content" data-title="API 수기(키인) 가상계좌 발급 요청">

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
  },
});
```

</div>

</div>

### 주요 파라미터

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다. 이미 승인 완료된 `paymentId`로 결제를 시도하는 경우 에러가 발생합니다.
  KCP의 경우 최대 40자까지 허용합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.
  KCP의 경우 최대 100 바이트까지 허용합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

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
      `validHours` 또는 `dueDate` 필드 중 하나를 지정합니다.

      - validHours?: integer

        **유효 시간**

      - dueDate?: string

        **만료 시점**

        시간은 RFC 3339 date-time 형식으로 입력해야 합니다.

    - option: object

      **가상계좌 발급 방식**

      - type: string

        **가상계좌 발급 유형**
        회전식 가상계좌만 지원하므로 `NORMAL`로 입력합니다.

    - cashReceipt: object

      **현금영수증 정보**

      - type: string

        **발급 유형**
        `PERSONAL` 또는 `CORPORATE`로 입력합니다.

        - 소득공제용 : `PERSONAL`
        - 지출증빙용 : `CORPORATE`

      - customerIdentityNumber: string

        **현금영수증 식별 번호**

        - 소득공제인 경우 주민등록번호 혹은 휴대폰 번호를 입력해야 합니다.
        - 지출증빙인 경우 사업자등록번호를 입력해야 합니다.

  - card?: object

    **카드 결제 시 파라미터**

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자 등록 번호**

      - passwordTwoDigits: string

        **비밀번호 앞 두자리**

- customer?: object

  **고객 정보**

  - name?: object

    **고객 이름**

    - full?: string

      **한 줄 이름 형식 (ex. 김포트)**

    - separated?: object

      **분리된 이름**

      - first: string

        **이름**

      - last: string

        **성**

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일**

### 유의사항

#### 카드 결제

<details>

<summary>미지원 파라미터 안내</summary>

무이자 및 카드 포인트 파라미터는 지원하지 않습니다. 해당 파라미터를 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

</details>

#### 가상계좌 결제

<details>

<summary>고정식 가상계좌 미지원 안내</summary>

회전식(일반) 가상계좌만 지원되며, 고정식 가상계좌는 지원하지 않습니다.

</details>

<details>

<summary>가상계좌 발급 시 입금자명 관련 안내</summary>

발급된 가상계좌의 입금자명은 결제 요청 시 `customer.name` 파라미터에 입력된 이름으로 표시됩니다.
`remitteeName`을 설정하더라도 결제 동작에 아무런 영향을 주지 않습니다.

</details>

<details>

<summary>가상계좌 발급 가능 은행 안내</summary>

- 아래 은행에 한하여 가상계좌 발급이 가능합니다.
  - 기업은행
  - 국민은행
  - 수협은행
  - NH농협은행
  - 우리은행
  - SC제일은행
  - iM뱅크
  - 부산은행
  - 광주은행
  - 경남은행
  - 우체국
  - 하나은행
  - 신한은행

</details>

## API 빌링키 발급 요청하기

빌링키를 발급 요청 시 `POST /billing-keys`를 호출해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

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

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- method: object

  **결제수단 정보**

  - card?: object

    **카드 빌링키 발급 시 파라미터**

    - credential: object

      **인증 관련 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **유효 기간 만료 연도 (YY 형식 ex. 24)**

      - expiryMonth: string

        **유효기간 만료 월 (MM 형식 ex. 05)**

      - birthOrBusinessRegistrationNumber?: string

        - KCP의 경우 필수로 입력해야 합니다.

      - passwordTwoDigits?: string

        **비밀번호 앞 두자리**

        - KCP의 경우 필수로 입력해야 합니다.

- customer: object

  **고객 정보**

  - name: object

    **고객 이름**

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

  - email: string

    **구매자 이메일**

## API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제 요청 시 `POST /payments/${PAYMENT_ID_HERE}/billing-key` API를 호출해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 단건 결제">

```ts
const response = await axios({
  url: `https://api.portone.io/payments/${PAYMENT_ID_HERE}/billing-key`,
  method: "post",
  headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
  data: {
    payment: {
      billingKey: "billing-key-1", // 빌링키 발급 API를 통해 발급받은 빌링키
      orderName: "후불 결제",
      customer: {
        id: "customer-1234", // 고객사에서 관리하는 고객 고유번호
        phoneNumber: "010-1234-5678",
        email: "test@test.com",
      },
      amount: {
        total: 10000,
      },
      currency: "KRW",
    },
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

  - email: string

    **구매자 이메일**

- productCount?: integer

  **상품 개수**

## API 빌링키 예약/반복 결제 요청하기

예약 결제를 하기 위해서는 `POST /payments/${PAYMENT_ID_HERE}/schedule` 를 이용하여 결제를 예약합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

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
    timeToPay: "2023-01-01T00:00:00+09:00", // 결제 예정 시점. RFC 3339 형식으로 입력해야 합니다.
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

  - customer: object

    **고객 정보**

    - name: object

      **고객 이름**

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

    - email: string

      **구매자 이메일**

- timeToPay: string

  **결제 예정 시점**
