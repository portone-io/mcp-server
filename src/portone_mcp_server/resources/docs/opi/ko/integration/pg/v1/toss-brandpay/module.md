---
title: 모듈 로딩 연동
description: 토스페이먼츠 브랜드페이의 모듈 로딩에 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 모듈 로드 파라미터 정의

<div class="tabs-container">

<div class="tabs-content" data-title="모듈 로드 요청">

```ts title="Javascript SDK"
await IMP.loadModule(
  "toss-brandpay",
  {
    userCode: "imp00000000", //// 관리자 콘솔 - 결제 연동 페이지에서 확인 가능합니다.
  },
  {
    customerKey: "d005f081-830a-4b9c-b5e2-73e56fbe6ac3",
    loadBrandpayOptions: {
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
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- moduleType: string

  **모듈 타입**

  브랜드페이의 경우 `toss-brandpay` 를 사용합니다.

- userCode: string

  **고객사 식별코드**

  `IMP` 로 시작하는 포트원 고객사 식별코드입니다.

- tier\_code?: string

  **하위상점(Tier)의 고유코드**

  \[상점·계정 관리]-\[하위 상점 관리]에서 하위 상점을 생성한 경우에만 사용 가능합니다. 하위상점 고유코드는 알파벳 대문자 또는 숫자만 입력가능하며, 3자까지 입력 가능합니다.

- loadBrandpayOptions?: object

  브랜드페이의 모듈 로딩에 필요한 추가 파라미터입니다.
  `moduleType`을 `toss-brandpay`로 설정하는 경우 필요합니다.

- loadBrandpayOptions.customer\_id: string

  **구매자 ID**

  고객 ID입니다. 다른사용자에게 노출될 경우, 악의적 사용에 대한 문제가 있음으로 자동 증가하는 숫자는 허용되지 않습니다.
  UUID 등 유추가 불가능한 무작위 값을 사용하시길 권장드립니다.

- loadBrandpayOptions.ui?: object

  브랜드페이의 경우 결제창의 UI를 커스터마이징이 가능하며, 아래의 옵션들을 제공하고 있습니다.
  포트원을 통한 연동 후 `IMP.request_pay` 호출 시 `bypass.toss_brandpay.ui` 객체 정보를 추가하여 UI 커스터마이징 기능을 사용할 수 있습니다.

- loadBrandpayOptions.ui.buttonStyle?: string

  **버튼스타일 구분코드**

  버튼 스타일입니다. 값을 넣지 않으면 기본값인 `default`로 설정됩니다.
  `default`로 설정하면 모서리가 둥글고 주변에 여백을 가진 버튼을 사용할 수 있고, `full`로 설정하면 하단 영역이 전부 채워지는 형태의 버튼을 사용할 수 있습니다.

- loadBrandpayOptions.ui.highlightColor?: string

  **UI 메인 색상**

  UI의 메인 색상입니다. 값을 넣지 않으면 기본 색상인 `#3182f6`로 설정됩니다. [웹에서 사용할 수 있는 색상 코드 형식](http://developer.mozilla.org/ko/docs/Web/CSS/color_value)을 모두 사용할 수 있습니다.

- loadBrandpayOptions.ui.navigationBar.visible?: boolean

  **내비게이션 바 사용 여부**

  화면 뒤로 가기 기능을 제공하는 내비게이션 바 사용 여부입니다. 값을 넣지 않으면 기본값인 `true`로 설정됩니다. 내비게이션 바를 사용하지 않으려면 `false`로 설정해야 합니다.

- loadBrandpayOptions.ui.navigationBar.paddingTop?: number

  **내비게이션 바 상단 여백**

  내비게이션 바 위쪽에 설정할 여백 값입니다. 값의 단위는 `px`입니다.

- loadBrandpayOptions.ui.labels.oneTouchPay?: string

  **원터치결제 대체 텍스트**

  UI에 표시되는 `원터치결제`를 대신해 사용할 텍스트입니다. 값을 넣지 않으면 `원터치결제`로 표시됩니다.

</details>

</div>

</div>

## 모듈로드 결과값 정의

<div class="tabs-container">

<div class="tabs-content" data-title="모듈 로드 요청">

```ts title="Javascript SDK"
const brandpayModule = await IMP.loadModule(
  "toss-brandpay",
  {
    userCode: "imp00000000", //// 관리자 콘솔 - 결제 연동 페이지에서 확인 가능합니다.
  },
  {
    customerKey: "d005f081-830a-4b9c-b5e2-73e56fbe6ac3",
    loadBrandpayOptions: {
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
);

brandpayModule.setupPassword();
brandpayModule.getPaymentMethods();
brandpayModule.openSettings();
```

</div>

<details>

<summary>

<strong>setupPassword 설명</strong>

</summary>

결제할 때 사용할 비밀번호를 설정할 수 있는 메서드입니다. 비밀번호 등록・변경이 완료되면 Promise가 resolve됩니다.

자세한 내용은 [토스페이먼츠의 개발자센터 문서](http://docs.tosspayments.com/reference/brandpay-sdk#setuppassword) 를 참고하세요.

```ts title="Javascript SDK"
brandpayModule.setupPassword().catch(function (error) {
  if (error.code === "USER_CANCEL") {
    // 사용자가 창을 닫아 취소한 경우에 대한 처리
  }
});
```

</details>

<details>

<summary>

<strong>getPaymentMethods 설명</strong>

</summary>

등록되어 있는 결제 수단을 조회하는 메서드입니다. 조회가 성공했을 때 Promise가 resolve되고 고객의 결제수단 정보(BrandpayMethodResponse)가 반환됩니다.

자세한 내용은 [토스페이먼츠의 개발자센터 문서](http://docs.tosspayments.com/reference/brandpay-sdk#getpaymentmethods) 를 참고하세요.

```ts title="Javascript SDK"
brandpayModule
  .getPaymentMethods()
  .then(function (methods) {
    // 성공 처리
  })
  .catch(function (error) {
    if (error.code === "USER_CANCEL") {
      // 사용자가 결제창을 닫은 경우 에러 처리
    }
  });
```

</details>

<details>

<summary>

<strong>openSettings 설명</strong>

</summary>

브랜드페이에서 사용하는 결제수단, 비밀번호 설정을 관리하는 결제 관리창을 열 수 있습니다.

자세한 내용은 [토스페이먼츠의 개발자센터 문서](http://docs.tosspayments.com/reference/brandpay-sdk#opensettings) 를 참고하세요.

```ts title="Javascript SDK"
brandpayModule.openSettings().catch(function (error) {
  if (error.code === "USER_CANCEL") {
    // 사용자가 창을 닫아 취소한 경우에 대한 처리
  }
});
```

</details>

</div>
