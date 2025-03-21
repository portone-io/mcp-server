---
emoji: ⌨
title: 브랜드페이 위젯 연동
description: 토스페이먼츠 브랜드페이 위젯 연동 방법을 안내합니다.
targetVersions:
  - v1
---

- 브랜드페이의 경우 고객사의 주문 페이지에 바로 브랜드페이를 통한 결제가 가능하도록 브랜드페이 UI를
  렌더링 할 수 있는 위젯 기능을 제공합니다.

- 위젯 기능을 연동하기 위해서는 일반적으로 포트원 SDK에서 사용하던 함수가 아닌 `IMP.loadUI` 함수와
  `IMP.updateLoadUIRequest` 함수를 사용해야 합니다.

(관련 이미지 첨부)

## 브랜드페이 위젯 렌더링

- 브랜드페이 위젯은 고객사 체크아웃 페이지에 결제수단 선택 UI를 렌더링 한 후, 결제버튼 클릭시
  브랜드페이로 결제를 하는 방식입니다.

- 따라서 다른 PG사와 결제 플로우가 상이하기 때문에 고객사는 **체크아웃 페이지가 렌더링 되는 시점에
  `IMP.request_pay` 함수 대신 `IMP.loadUI`라는 별도의 함수를 호출해 위젯을 렌더링 해야**합니다.

(관련 이미지 첨부)

```html
<!--
  1. 고객사 체크아웃 페이지가 렌더링됩니다.
  브랜드페이 위젯을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣습니다.
  data-portone-ui-type는 브랜드페이 위젯용임을 나타내는 toss-brandpay-widget로 설정합니다.
  결제하기 버튼 역할을 하는 element의 경우 id를 "portone-toss-brandpay-widget-button"로 설정해야 합니다.
  포트원 SDK는 해당 id를 가지는 element를 찾아 결제하기 event를 등록합니다.
-->
<div class="portone-ui-container" data-portone-ui-type="toss-brandpay-widget">
  <!-- 3. 여기에 결제수단 위젯이 생성됩니다. -->
</div>

<div id="portone-toss-brandpay-widget-button">
  <!-- 1-1. 결제하기 버튼 구현 -->
</div>

<script>
  window.onload = function () {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달해 포트원 객체를 초기화합니다.
    IMP.init(고객사_식별코드);

    // 2-2. "결제 요청 데이터"와 결제 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 브랜드페이 위젯 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI("toss-brandpay-widget", 결제_요청_데이터, 콜백_함수);

    // 4. 구매자가 결제하기 버튼을 누르면 PG사 결제창이 렌더링 됩니다.
    // 5. 이때 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출합니다.
    // 6-7. 포트원 DB에 미결제(ready) 결제 건이 생성됩니다.
    // 8. PG사 결제창이 호출됩니다.
    // 9. 결제 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };
</script>
```

<div class="hint" data-style="info">

### 위젯이 렌더링 되지 않을 때

`portone-ui-container` 라는 class 이름을 갖는 div
element를 찾지 못할 경우 **portone-ui-container를 찾을 수 없습니다.** 라는 에러가
발생합니다.

`portone-ui-container` element가 2개 이상인데, `data-portone-ui-type`
attribute가 `toss-brandpay-widget`인 element를 찾지 못할 경우, **data-portone-ui-type에
올바른 UI 타입을 입력해주세요.** 라는 에러가 발생합니다.

`portone-ui-container` element가 2개 이상이고, `data-portone-ui-type`
attribute가 `oss-brandpay-widget`인 elemente도 2개 이상인 경우, **동일한 data-portone-ui-type을
갖는 DOM element가 2개 이상 존재합니다.** 라는 에러가 발생합니다.

</div>

## 결제 요청 데이터 업데이트

- 브랜드페이의 특성상, 고객사 체크아웃 페이지가 렌더링 될 때 결제 요청 데이터가 결정 되어야 합니다.
  때문에 고객사 체크아웃 페이지에서 포인트나 쿠폰을 적용 해 결제 금액이 바뀌는 경우에 이를 다시
  업데이트 할 수 있는 방법이 제공돼야 합니다.

- 포트원 SDK는 위와 같은 경우에 대응하기 위해 결제 정보를 업데이트 할 수 있는
  `IMP.updateLoadUIRequest` 함수를 제공하고 있습니다.  구매자 입력으로 인해 결제 요청 데이터가
  변경될때 **IMP.updateLoadUIRequest 함수를 호출**하시면 구매자가 결제 버튼을 누를때 최종적으로 변경
  된 결제 요청 데이터로 브랜드페이 결제창이 호출됩니다.

(관련 이미지 첨부)

```html
<form>
  <!-- 결제 요청 데이터를 입력 받는 form -->
  <!-- ...중략 -->
  <label for="amount">결제 금액</label>
  <!-- 4. 구매자가 쿠폰을 적용해 결제 요청 금액이 변경(예) 1000 -> 2000)되었습니다. -->
  <input id="amount" name="amount" value="1000" onchnage="onChangeAmount()" />
</form>

<!--
  1. 고객사 체크아웃 페이지가 렌더링됩니다.
  브랜드페이 위젯을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣습니다.
  data-portone-ui-type는 브랜드페이 위젯용임을 나타내는 toss-brandpay-widget로 설정합니다.
  결제하기 버튼 역할을 하는 element의 경우 id를 "portone-toss-brandpay-widget-button"로 설정해야 합니다.
  포트원 SDK는 해당 id를 가지는 element를 찾아 결제하기 event를 등록합니다.
-->
<div class="portone-ui-container" data-portone-ui-type="toss-brandpay-widget">
  <!-- 3. 여기에 결제수단 위젯이 생성됩니다. -->
</div>

<div id="portone-toss-brandpay-widget-button">
  <!-- 1-1. 결제하기 버튼 구현 -->
</div>

<script>
  var requestData = {
    pg: "toss_brandpay",
    amount: 1000,
    // ...중략
  };
  window.onload = function () {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달 해 포트원 객체를 초기화합니다.
    IMP.init(고객사_식별코드);

    // 2-2. "결제 요청 데이터"와 결제 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 브랜드페이 위젯 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI("toss-brandpay-widget", requestData, 콜백_함수);

    // 6. 구매자가 결제하기 버튼을 누르면 PG사 결제창이 렌더링 됩니다.
    // 7. 이떄 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출하며
    // 결제 요청 금액은 1000에서 2000으로 변경됩니다.

    // 8-9. 포트원 DB에 미결제(ready) 결제 건이 생성됩니다.
    // 10. PG사 결제창이 호출됩니다.
    // 11. 결제 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };

  function onChangeAmount() {
    // 5. 결제 요청 금액이 변경되면 고객사가 선언한 onChangeAmount 함수가 호출됩니다.
    // IMP.updateLoadUIRequest에 최종적으로 변경 된 결제 요청 데이터를 전달합니다.
    requestData.amount = document.getElementById("amount").value;
    IMP.updateLoadUIRequest("toss-brandpay-widget", requestData);
  }
</script>
```

## loadUI 요청 객체

loadUI 호출시 파라미터인 결제요청 데이터의 경우 IMP.request\_pay의 요청데이터와 동일한 객체이므로, [브랜드페이 연동문서](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/readme)를 참고해주세요.
