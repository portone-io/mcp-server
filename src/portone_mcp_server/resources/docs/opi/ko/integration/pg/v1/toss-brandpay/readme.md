---
emoji: ⌨
title: 토스페이먼츠 브랜드페이
description: 토스페이먼츠 브랜드페이 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 토스페이먼츠 브랜드페이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 최신 JavaScript SDK로 업데이트하기

토스페이먼츠 브랜드페이 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**토스페이먼츠 브랜드페이를 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다**

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

## 3. 결제 요청하기

- [JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
  브랜드페이 결제창을 호출할 수 있습니다.

- **결제 결과**는 PC 환경과 모바일 환경 모두 **callback**으로
  수신됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "toss_brandpay",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    customer_id: "d005f081-830a-4b9c-b5e2-73e56fbe6ac3",
    bypass: {
      isCulturalExpense: true,
    },
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

  `toss_brandpay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  `toss_brandpay` 로 지정하면 됩니다.

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- name: string

  **주문명**

- amount: number

  **결제금액**

  브랜드페이는 원화 결제만 지원합니다. KRW 기준으로 금액을 입력해주세요.

- buyer\_email?: string

  **구매자 email 주소**

- customer\_id: string

  **구매자 ID**

  고객 ID입니다. 다른사용자에게 노출될 경우, 악의적 사용에 대한 문제가 있음으로 자동 증가하는 숫자는 허용되지 않습니다.\
  UUID 등 유추가 불가능한 무작위 값을 사용하시길 권장드립니다.

- bypass?: object

  - isCulturalExpense: string

    **도서 문화비 결제 여부**

    도서 문화비 소득 공제 결제 여부를 나타내는 파라미터입니다. 기본값은 `false`입니다.

</details>

</div>

</div>

## 3. UI 커스터마이징

- 브랜드페이의 경우 결제창의 UI를 커스터마이징이 가능하며, 아래의 옵션들을 제공하고 있습니다.

- 포트원을 통한 연동 후 `IMP.request_pay` 호출 시 `bypass.toss_brandpay.ui` 객체 정보를 추가하여 UI
  커스터마이징 기능을 사용할 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="UI 커스터마이징">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "toss_brandpay",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    bypass: {
      toss_brandpay: {
        brandpayOptions: {
          ui: {
            buttonStyle: "default",
            highlightColor: "#3182f6",
            navigationBar: {
              visible: true,
              paddingTop: 10,
            },
            labels: {
              oneTouchPay: "원터치결제",
            },
          },
        },
      },
    },
  },
  function (rsp) {
    // callback 로직
  },
);
```

- bypass?: object

  - toss\_brandpay?: object

    - brandpayOptions?: object

      - buttonStyle?: string

        **버튼스타일 구분코드**

        - 버튼 스타일입니다. 값을 넣지 않으면 기본값인 `default`로 설정됩니다.
        - `default`로 설정하면 모서리가 둥글고 주변에 여백을 가진 버튼을 사용할 수 있고, `full`로 설정하면 하단 영역이 전부 채워지는 형태의 버튼을 사용할 수 있습니다.

      - highlightColor?: string

        **UI 메인 색상**

        - UI의 메인 색상입니다.
        - 값을 넣지 않으면 기본 색상인 `#3182f6`로 설정됩니다.
        - [웹에서 사용할 수 있는 색상 코드 형식](http://developer.mozilla.org/ko/docs/Web/CSS/color_value)을 모두 사용할 수 있습니다.

      - navigationBar.visible?: boolean

        **내비게이션 바 사용 여부**

        - 화면 뒤로 가기 기능을 제공하는 내비게이션 바 사용 여부입니다.
        - 값을 넣지 않으면 기본값인 `true`로 설정됩니다.
        - 내비게이션 바를 사용하지 않으려면 `false`로 설정해야 합니다.

      - navigationBar.paddingTop?: number

        **내비게이션 바 상단 여백**

        - 내비게이션 바 위쪽에 설정할 여백 값입니다. 값의 단위는 `px`입니다.

      - labels.oneTouchPay?: string

        **원터치결제 대체 텍스트**

        - UI에 표시되는 `원터치결제`를 대신해 사용할 텍스트입니다. 값을 넣지 않으면 `원터치결제`로 표시됩니다.

</div>

</div>

## 4. 결제수단 지정 바로 결제

- 브랜드페이에 등록된 각 결제수단은 `methodId`라는 결제 수단 ID가 맵핑됩니다.

- 결제창 호출 시 `methodId` 중 하나를 지정하는 경우 UI에서 결제수단을 선택하지 않고 해당
  결제수단으로 바로 결제를 할 수 있습니다.

- `methodId`는 [`IMP.loadModule()`](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/module)을 호출 후 사용할 수
  있는, `getPaymentMethods()` 함수를 통해 확인할 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="바로 결제">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "toss_brandpay",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    customer_id: "d005f081-830a-4b9c-b5e2-73e56fbe6ac3",
    useCardPoint: true,
    display: {
      card_quota: [6],
    },
    bypass: {
      cashReceiptType: "personal",
      customerIdentifier: "01000000000",
      toss_brandpay: {
        methodId: "3nKLoSBV7l8zUHU14cZxK",
        discountCode: "001",
      },
    },
  },
  function (rsp) {
    // callback 로직
  },
);
```

### 기타 파라미터

아래 파라미터를 사용하기 위해서는 결제 수단 ID인 `methodId`를 지정하여 함께 결제 요청해야 합니다.

<div class="hint" data-style="danger">

#### **브랜드페이 위젯에서 사용할 수 없는 파라미터** 가 포함되어 있습니다.

아래 파라미터는 브랜드페이 위젯에서는 사용할 수 없습니다.

- **`display.card_quot`**
- **`useCardPoint`**
- **`bypass.cashReceiptType`**
- **`bypass.customerIdentifier`**

</div>

- useCardPoint?: boolean

  **카드사 포인트 사용 여부**

  - 카드사 포인트를 사용 여부를 지정하는 값입니다.
  - `true` 입력 시 카드사 포인트 사용이 가능하며, 입력하지 않는 경우 기본값은 `false`입니다.
  - (단, 카드사 포인트를 사용하기 위해서는 사전에 토스페이먼츠를 통해 계약이 진행되어야 합니다.)

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정값**

  할부결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다.

  - card\_quota: number\[]

    **할부 개월수**

    예시

    - `[]`: 일시불만 결제 가능
    - `2,3,4,5,6`: 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능
    - `3`: 일시불을 포함한 2,3개월까지 할부개월 선택 가능

- bypass?: object

  - cashReceiptType?: string

    **현금영수증 발급 타입**

    - `unable`로 설정시 현금영수증을 발행하지 않으며, `personal`로 설정 시에는 소득 공제용, `corporate`으로 설정 시에는 지출 증빙용으로 현금영수증을 발급합니다.
    - `anonymous`으로 설정하는 경우 현금영수증 자진발급됩니다. 기본값은 `unable`입니다.

  - customerIdentifier?: string

    **현금영수증 발급 식별번호**

    - 현금영수증 발급을 위한 식별번호입니다.
    - 현금영수증 종류에 따라 휴대폰번호, 사업자등록번호, 현금영수증 카드번호를 입력할 수 있습니다.

  - toss\_brandpay?: object

    - discountCode?: string

      **카드사 즉시 할인 코드**

      - 토스페이먼츠의 [카드혜택 조회 API](http://docs.tosspayments.com/reference#%EC%B9%B4%EB%93%9C-%ED%98%9C%ED%83%9D-%EC%A1%B0%ED%9A%8C-1)로 적용할 수 있는 할인 코드 목록을 조회할 수 있습니다.
      - 해당 API는 포트원을 통해 지원이 불가능하므로, 직접 토스페이먼츠 API를 연동하여 사용해야 합니다.

### 브랜드페이 위젯 전용 파라미터

아래 파라미터를 사용하기 위해서는 결제 수단 ID인 `methodId`를 지정하여 함께 결제 요청해야 합니다.

<div class="hint" data-style="info">

#### 브랜드페이 위젯에서만 사용 가능한 파라미터입니다.

`bypass.toss_brandpay.widgetOptions` 에 설정되어야 합니다.

</div>

- methodType?: string

  **위젯에 보여줄 결제 수단**

  - 위젯에 보여줄 결제수단을 선택합니다.
  - `카드`, `계좌` 중 하나입니다. 예를 들어 `카드`를 선택하면 등록한 결제수단 중 `카드`만 노출됩니다.

- methodId?: string

  **위젯에서 기본 결제수단으로 선택할 결제수단의 ID**

  - 위젯을 열었을때, 해당 methodId에 해당하는 결제수단이 가장 먼저 보여집니다.
  - 가장 최근에 결제한 카드를 보여주거나, 유저가 선호하는 카드를 보여줄 때 사용할 수 있습니다.

- ui.promotionSection.summary.visible?: boolean

  **혜택 배지 영역 표시여부**

  - 해택 배지 영역에서는 즉시 할인 대상 카드 정보 등을 간략히 보여줍니다. 기본값은 `true`입니다.

- ui.promotionSection.description.visible?: boolean

  **혜택 배지 영역 표시여부**

  - 결제 해택 영역을 보여주거나 숨깁니다. 기본값은 `true`입니다.

- ui.promotionSection.description.defaultOpen?: boolean

  **결제 혜택 상세 설명 표시 여부**

  - 결제 혜택의 상세 설명을 보여주거나 숨깁니다.
  - `true`인 경우, 결제 카드사의 결제 혜택을 자세히 설명합니다. 기본값은 `false`입니다.

</div>

</div>
