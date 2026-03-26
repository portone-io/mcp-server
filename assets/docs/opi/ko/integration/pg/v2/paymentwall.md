---
title: 페이먼트월
description: 페이먼트월 결제 연동 방법을 안내합니다.
targetVersions:
  - v2
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 가능한 결제 수단

페이먼트월의 경우, `payMethod` 파라미터를 지원하고 있지 않아, 국가IP에 맞는 결제수단이 기본으로 노출됩니다.
특정 결제수단만 노출하고 싶으신 경우, 아래에 후술될 `bypass.paymentwall.ps` 파라미터를 사용하시면 됩니다.

- 페이먼트월 결제수단 코드는 포트원 코드와 상이하므로, [PAYMENTWALL Docs](https://docs.paymentwall.com/reference/payment-system-shortcodes)에서 `Payment System short code`를 확인 후 입력해야 합니다.

## SDK 결제 요청하기

결제 요청 시에는 `requestPayment` 함수를 호출해야 합니다.
`channelKey` 파라미터에 결제 채널 연동 후 생성된 채널 키값을 지정하여 페이먼트월 채널 사용을 명시해주세요.

페이먼트월 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
function requestPayment() {
  PortOne.requestPayment({
    storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec", // 고객사 storeId로 변경해주세요.
    channelKey: "channel-key-9987cb87-6458-4888-b94e-68d9a2da896d", // 콘솔 결제 연동 화면에서 채널 연동 시 생성된 채널 키를 입력해주세요.
    paymentId: `payment${crypto.randomUUID()}`,
    orderName: "PortOne Purchase",
    totalAmount: 1000,
    currency: "KRW",
    customer: {
      customerId: "customer-1234", // 고객사가 구매자에게 부여한 고유 ID
      email: "test@portone.io",
    },
  });
}
```

</div>

</div>

### 주요 파라미터

- storeId: string

  **상점 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 관리자 콘솔에서 확인할 수 있습니다.

- paymentId: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- orderName: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- channelKey: string

  **채널 키**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 시 생성되는 값입니다. 결제 호출 시 채널을 지정할 때 사용됩니다.

- totalAmount: number

  **결제 금액**

  결제 금액(실제 결제 금액 X 10^ 해당 currency의 scale factor, 예: $1.50 -> 150)

- currency: string

  **결제 통화 코드**

  - ISO 4217 통화 코드
  - [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)

- locale?: Locale

  **결제창 언어**

  - `KO_KR`: 한국어
  - `EN_US`: 영어
  - `JA_JP`: 일본어
  - `ZH_CN`: 중국어 (중국 본토)
  - `ZH_TW`: 중국어 (대만)
  - `TH_TH`: 타이어
  - `RU_RU`: 러시아어
  - `VI_VN`: 베트남어
  - `FR_FR`: 프랑스어
  - `NL_NL`: 네덜란드어
  - `ES_ES`: 에스파냐어
  - `PT_PT`: 포르투갈어
  - `DE_DE`: 독일어
  - `IT_IT`: 이탈리아어
  - `PL_PL`: 폴란드어
  - `TR_TR`: 터키어
  - `SV_SE`: 스웨덴어
  - `FI_FI`: 핀란드어
  - `UK_UA`: 우크라이나어
  - `EL_GR`: 그리스어
  - `TL_PH`: 타갈로그어
  - `HI_IN`: 힌디어
  - `HR_HR`: 크로아티아어
  - `LT_LT`: 리투아니아어
  - `SL_SI`: 슬로베니아어
  - `SR_RS`: 세르비아어
  - `BG_BG`: 불가리아어
  - `PT_BR`: 포르투갈어 (브라질)

- customer: object

  **고객 정보**

  페이먼트월의 경우 구매자 고유 ID와 이메일은 필수 입력 항목입니다.

  - customerId: string

    **구매자 고유 ID**

    고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다.

  - email: string

    **구매자 이메일**

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - paymentwall?: object

    **페이먼트월 특수 파라미터**

    - widget?: string

      **위젯 코드**

      `pw_1`과 `t3_1`만 입력 가능하며, 미설정시 기본(`pw_1`) 결제창이 활성화됩니다.

    - ps?: string

      **결제수단 단독 노출**

      페이먼트월 결제수단 코드는 포트원 코드와 상이하므로, [PAYMENTWALL Docs](https://docs.paymentwall.com/reference/payment-system-shortcodes)에서 `Payment System short code`를 확인 후 입력해야 합니다.

    - country\_code?: string

      **국가 코드**

      지정된 국가에서 지원되는 결제수단이 결제창에 노출됩니다. [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)를 참고하여 해당하는 국가코드를 입력해야 합니다.

## 유의사항

- 페이먼트월 프로젝트는 반드시 페이먼트월에서 제공하는 포트원 전용 링크를 통해 생성해야 합니다. 정상적으로 생성된 프로젝트는 프로젝트명 뒤에 `[import]`가 표시됩니다.
- 페이먼트월을 통해 결제하는 경우 [페이먼트월 배송 정보 등록 API](https://developers.portone.io/api/rest-v2/pgSpecific#post%20%2Fpaymentwall%2Fdelivery%2Fconfirm)를 반드시 연동해야 합니다. 등록된 배송 정보는 차지백 발생 시 상품 배송 완료를 증빙하는 자료로 활용됩니다.
- 요청 통화와 승인 통화(프로세싱 통화)가 다른 경우 부분 취소는 지원되지 않으며, 전체 취소만 가능합니다.
- 국내 가상계좌 결제는 지원되지 않습니다.
