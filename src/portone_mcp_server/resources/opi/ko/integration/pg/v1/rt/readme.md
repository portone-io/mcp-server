---
title: 페이팔(Reference Transaction) 정기결제
description: 페이팔(Reference Transaction) 빌링키 발급 및 정기결제 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/paypal-v2
---

<div class="hint" data-style="info">

페이팔 정기결제의 경우 RT(Reference Transaction) 방식만 지원합니다.

</div>

## 페이팔 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

<div class="hint" data-style="warning">

페이팔 빌링키 발급 및 정기결제는 **SDK 1.3.0 부터 사용 가능**합니다.

SDK 스크립트의 주소가 `https://cdn.iamport.kr/v1/iamport.js` 인지 확인해주세요.

위 JS SDK 를 이용하여 페이팔 정기결제 연동시 callback Data는 아래와 같이 두가지 형태로만 내려갑니다.

- `imp_uid`
- `merchant_uid`

해당 SDK를 사용하실때는 IMP.request\_pay로부터 응답된 객체(또는 쿼리 파라미터)에서
imp\_uid를 가지고 **포트원 REST API(GET /payments/imp\_uid)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여
응답 파라미터 중 status(결제 상태)파라미터에 따라 추가 로직을 구현해야 합니다.

</div>

## 페이팔 정기결제 버튼 렌더링

페이팔 정기결제 빌링키 발급은 고객사 체크아웃 페이지에 페이팔 정기결제 버튼(아래 이미지 참고)을 렌더링 한 후,
버튼을 클릭해 페이팔 빌링키 발급 창을 호출하는 방식입니다.

(관련 이미지 첨부)

따라서 다른 PG사와 빌링키 발급 플로우가 상이하기 때문에 고객사는 **체크아웃 페이지가 렌더링 되는 시점에** `IMP.request_pay` 함수 대신
**`IMP.loadUI`라는 별도의 함수를 호출해 페이팔 정기결제 버튼을 렌더링 해야**합니다.

(이미지 첨부: 페이팔 정기결제 빌링키 발급 연동 플로우)

```html
<!--
1. 고객사 체크아웃 페이지가 렌더링됩니다.
   페이팔 버튼을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣어줍니다.
   향후 비슷한 플로우로 동작하는 PG사가 생기거나, 2개 이상의 dom element가 렌더링 될 것을 대비해
   data-portone-ui-type을 paypal-rt로 설정합니다.
-->
<div class="portone-ui-container" data-portone-ui-type="paypal-rt">
  <!-- 3. 여기에 페이팔 버튼이 생성됩니다. -->
</div>

<script>
  window.onload = function() {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달 해 포트원 객체를 초기화합니다.
    IMP.init(고객사 식별코드);

    // 2-2. "빌링키 발급 요청 데이터"와 빌링키 발급 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 PG사 버튼 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI('paypal-rt', 빌링키 발급 요청 데이터, 콜백 함수);

    // 4. 구매자가 PG사 버튼을 누르면 PG사 빌링키 발급 창이 렌더링 됩니다.
    // 5. 이때 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출합니다.
    // 6-7. 포트원 DB에 미결제(ready) 빌링키 발급 건이 생성됩니다.
    // 8. PG사 빌링키 발급 창이 호출됩니다.
    // 9. 빌링키 발급 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };
</script>
```

<div class="hint" data-style="info">

### 페이팔 정기결제 버튼이 보이지 않을 때

`portone-ui-container` 라는 class 이름을 갖는 div
element를 찾지 못할 경우 "portone-ui-container를 찾을 수 없습니다." 라는 에러가 발생합니다.

`portone-ui-container` element가 2개 이상인데, `data-portone-ui-type`
attribute가 `paypal-rt`인 element를 찾지 못할 경우, "data-portone-ui-type에 올바른
UI 타입을 입력해주세요."라는 에러가 발생합니다.

`portone-ui-container` element가 2개 이상이고, `data-portone-ui-type`
attribute가 `paypal-rt`인 elemente도 2개 이상인 경우, “동일한 data-portone-ui-type을
갖는 DOM element가 2개 이상 존재합니다."라는 에러가 발생합니다.

</div>

## 빌링키 발급 요청 데이터 업데이트

페이팔 정기결제 동작의 특성상, 고객사 체크아웃 페이지가 렌더링 될 때
빌링키 발급 요청 데이터가 결정 되어야 합니다.
때문에 고객사 체크아웃 페이지 등에서 구매자가 등록 할 결제 수단을 변경하는 등의 행위로 빌링키 발급 정보가 바뀌는 경우에는
그 다음 페이지로 이동해 최종적으로 결정 된 빌링키 발급 정보를 기준으로 페이팔 버튼을 렌더링 시켜야 합니다.
페이팔 데모 페이지에서도 같은 방식으로 구현되어있습니다.

하지만 페이팔 정기결제 때문에 페이지를 하나 더 만드는 것은 고객사 입장에서 매우 번거로운 일이기 때문에
포트원에서는 처음 페이팔 버튼을 렌더링 시킨 후, 페이팔 버튼을 누르기 전 빌링키 발급 정보가 바뀌었을때
“빌링키 발급 요청 데이터”를 업데이트 할 수 있는 `IMP.updateLoadUIRequest` 함수를 제공하고 있습니다.

구매자 입력으로 인해 **빌링키 발급 요청 데이터가 변경될때 `IMP.updateLoadUIRequest`함수를 호출**하시면
구매자가 페이팔 정기결제 버튼을 누를때 최종적으로 변경 된 빌링키 발급 요청 데이터로 페이팔 빌링키 발급 창이 호출됩니다.

(관련 이미지 첨부)

```html
<form>
  <!-- 빌링키 발급 요청 데이터를 입력 받는 form -->
  <!-- ...중략 -->
  <!-- 4. 구매자가 등록 할 결제 수단을 변경해 빌링키 발급 주문 명이 변경(예) 카카오페이로 등록 -> 페이팔로 등록)되었습니다. -->
  <input
    id="name"
    name="name"
    value="카카오페이로 등록"
    onchange="onChangeName()"
  />
</form>

<!-- 1. 고객사 체크아웃 페이지가 렌더링됩니다. -->
<!-- 페이팔 버튼을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣어줍니다. -->
<!-- 향후 비슷한 플로우로 동작하는 PG사가 생기거나, 2개 이상의 dom element가 렌더링 될 것을 대비해 data-portone-ui-type을 paypal-rt로 설정합니다. -->
<div class="portone-ui-container" data-portone-ui-type="paypal-rt">
  <!-- 3. 여기에 페이팔 버튼이 생성됩니다. -->
</div>

<script>
  var requestData = {
    channelKey: '{콘솔 내 연동 정보의 채널키}',
    name: '카카오페이로 등록',
    // ...중략
  }
  window.onload = function() {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달 해 포트원 객체를 초기화합니다.
    IMP.init(고객사 식별코드)
    // 2-2. requestData(빌링키 발급 요청 데이터)와 빌링키 발급 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 PG사 버튼 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI('paypal-rt', requestData, 콜백 함수)
    // 6. 구매자가 PG사 버튼을 누르면 PG사 빌링키 발급 창이 렌더링 됩니다.
    // 7. 이때 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출하며
    // 빌링키 발급 주문 명은 '카카오페이로 등록'에서 '페이팔로 등록'으로 변경됩니다.
    // 8-9. 포트원 DB에 미결제(ready) 빌링키 발급 건이 생성됩니다.
    // 10. PG사 빌링키 발급 창이 호출됩니다.
    // 11. 빌링키 발급 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };

  function onChangeName() {
    // 5. 빌링키 발급 주문 명이 변경되면 고객사가 선언한 onChangeName 함수가 호출됩니다.
    // IMP.updateLoadUIRequest에 최종적으로 변경 된 빌링키 발급 요청 데이터를 전달합니다.
    requestData.name = document.getElementById('name').value
    IMP.updateLoadUIRequest('paypal-rt',requestData)
  }
</script>
```

## loadUI 요청 객체

|파라미터          |데이터타입|필수여부    |의미                                                                                                                                                                                                                                                               |
|------------------|----------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|merchant\_uid     |string    |required    |주문 번호 (고객사에서 고유하게 채번하여 사용해야 합니다.)                                                                                                                                                                                                          |
|name              |string    |optional    |제품명                                                                                                                                                                                                                                                             |
|~~pg(deprecated)~~|~~string~~|~~required~~|~~결제대행사 구분 값 (코드 구분 값 : paypal\_v2)~~                                                                                                                                                                                                                 |
|channelKey        |string    |required    |<p>paypal\_v2 채널의 채널 키 </p><p>(포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.)</p>                                                                                                                                          |
|pay\_method       |string    |required    |<p>결제수단 (코드 구분 값 : paypal)</p><p>(페이팔의 경우 결제수단은 paypal로 지정한 후 호출해야 합니다.)</p>                                                                                                                                                       |
|customer\_uid     |string    |required    |<p>포트원 빌링키</p><p>(고객사에서 빌링키 발급 시 고유하게 채번하여 요청해야 합니다. 빌링키 결제 시 해당 값을 이용하여 결제를 요청해야 하기 때문에 고객사에서 별도로 저장하셔야 합니다.)</p>                                                                       |
|customer\_id      |string    |optional    |<p>고객 식별 아이디</p><p>(고객사에서 구매자를 특정하기 위해 고유하게 채번하여 사용하는 아이디로 빌링키 발급시 필수 입력해야 합니다.)</p>                                                                                                                          |
|notice\_url       |string    |optional    |<p>웹훅 수신 주소</p><p>(결제창에서 빌링키 발급 완료 후 발송되는 웹훅 수신 주소로 URL string 또는 string\[]로 N개 설정 가능합니다.</p><p>웹훅 발송 여부는 콘솔 내 \[결제 > 상세 내역 조회] 메뉴에서 해당 거래 건 클릭하여 웹훅 발송 내역을 확인할 수 있습니다.)</p>|
|custom\_data      |object    |optional    |<p>사용자 정의 데이터</p><p>(빌링키 발급 정보와 함께 고객사에서 관리하고 싶은 데이터를 저장할 수 있으며 JSON 형식으로 요청해야합니다.)</p>                                                                                                                         |

<div class="hint" data-style="warning">

**파라미터 유의사항**

아래 링크로 반드시 유의사항을 숙지하셔야 합니다.

[연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/rt/warning)

</div>

<div class="hint" data-style="warning">

**(신) 페이팔 정기결제 유의사항**

구매자 계정이 한국인 경우 해당 서비스 이용이 불가합니다.

</div>

<p>연동 특이 사항</p>

## 비동기 처리

### 결제 처리

페이팔 결제 건은 승인 요청 시 바로 승인 되지 않고 일정 시간 후 처리되는 `승인 대기(pending)` 상태가 존재합니다.
따라서 고객사는 트랜잭션 종료시 콜백 함수로 전달되는 포트원 거래 번호(imp\_uid)로
결제 내역을 조회([GET /payments/{imp\_uid}](https://developers.portone.io/api/rest-v1/payment?v=v1#get%20%2Fpayments%2F%7Bimp_uid%7D))한 후 응답 되는 status를 보고
각 상황에 맞는 후 처리 로직을 작성해야 합니다.

승인 대기 상태에서는 최종적으로 승인(paid)이 될 수도 있고 승인이 되지 않을 수도(failed) 있기 때문에
고객사는 반드시 (가상계좌나 정기결제와 같이 결제가 비동기로 승인되는 경우 포트원 → 고객사로 결제 결과를 통보해주는)
**웹훅 기능을 연동해야** 합니다.

### 취소 처리

페이팔 결제 취소 요청 시 취소 요청이 바로 승인 되지 않고 일정 시간 후 승인처리되는 경우가 존재합니다.
고객사는 결제 취소 요청 응답 처리 시 취소가 승인되었는지 여부를 확인해야 합니다.

결제 취소 API를 통해 취소 요청을 한 경우 API 응답의 status와 cancel\_history 값을 기준으로 취소 승인 여부를 판단해야 합니다.
status가 cancelled 이고 cancel\_history에 취소 요청 내역이 있는 경우 취소가 승인된 것이고 그렇지 않은 경우 취소 승인대기 상태입니다.

콘솔을 통한 취소 요청이 승인대기인 경우 결제내역에서 결제상태는 결제취소로 변경되지 않고 진행중인 취소요청 내역이 있음이 표시되며 결제내역 상세 화면에서 취소요청내역이 조회됩니다.
취소 요청이 승인대기 상태인 경우 최종적으로 승인되거나 승인되지 않을 수 있기 때문에 고객사는 최종 취소 처리 결과를 전달받기 위해 고객사 통보 웹훅 기능을 연동해야 합니다.

<details>

<summary>취소 요청이 승인대기 중인 결제상태</summary>

(관련 이미지 첨부)

</details>

<details>

<summary>취소 요청이 승인대기 중인 결제내역 상세</summary>

(관련 이미지 첨부)

</details>

### Magnes & Fraudnet 이상 거래 대응

페이팔은 이상 거래를 줄이기 위해 Risk Data Acquisition 정책을 시행하고 있습니다.
일반 결제나 빌링키 발급은 페이팔 버튼을 통해 진행되기 때문에 페이팔이 이상 거래 판단을 위한 구매자 접속 정보를 얻을 수 있지만,
발급 된 빌링키로 재결제 (again API 호출) 할때는 고객사 서버에서 포트원 API를 통해 페이팔 API가 호출되는 구조이기 때문에
이상 거래 판단을 위한 구매자 접속 정보를 얻을 수 없습니다.

따라서 발급 된 빌링키로 재결제를 할때는 구매자의 브라우저/디바이스 접속 정보를 페이팔에 전달할 수 있도록
**again API가 호출되는 고객사 클라이언트 페이지에 반드시 페이팔 Fraudnet 스크립트/Magnes SDK를 아래와 같이 추가해야** 합니다.

**페이팔 정기결제를 통한 again API 호출시에는 Magnes & Fraudnet 조치가
필수적으로 요구됩니다.**

브라우저/앱에 페이팔 Fraudnet Script/Magnes SDK를 추가한 후 again API를 호출할때 진행되는 플로우는 아래와 같습니다.

(관련 이미지 첨부)

#### 브라우저

```html
<!-- again API가 호출되는 고객사 클라이언트 -->
<script
  type="application/json"
  fncls="fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"
>
  {
    "f": "RISK_SESSION_CORRELATION_ID",
    "s": "SOURCE_IDENTIFIER",
    "sandbox": true
  }
</script>
<script type="text/javascript" src="https://c.paypal.com/da/r/fb.js"></script>
<noscript>
  <img
    src="https://c.paypal.com/v1/r/d/b/ns?f=RISK_SESSION_CORRELATION_ID&s=SOURCE_IDENTIFIER&js=0&r=1"
  />
</noscript>
```

|파라미터|의미                                                     |예시                                         |
|--------|---------------------------------------------------------|---------------------------------------------|
|fncls   |fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99로 항상 고정|fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99|
|f       |주문번호(merchant\_uid) 전달                             |mid\_1683690731602                           |
|s       |string                                                   |7WBB3CKT63FRG\_checkout-page                 |
|sandbox |페이팔 Account ID가 테스트 용인지 운영 용인지 여부       |true                                         |

#### 앱

#### 안드로이드

[**Android Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/android/)
가이드 문서에 따라 아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야합니다.
이때 두번째 파라미터(paypalClientMetaDataId)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```java
MagnesResult magnesResult = MagnesSDK.getInstance()
   .collectAndSubmit(Context context, String paypalClientMetaDataId,
     HashMap<String, String>
     additionalData)
```

#### IOS Switft

[**iOS Swift SDK Integration**](http://developer.paypal.com/limited-release/magnes/integrate/ios-swift/)
가이드 문서에 따라 아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야합니다.
이때 첫번째 파라미터(withPayPalClientMetadataId)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```swift
let magnesResult:MagnesResult =
MagnesSDK.shared().collectAndSubmit(withPayPalClientMetadataId:
  "YOUR-PAYPAL-CLIENT-METADATA-ID", withAdditionalData: [String: String])
```

#### IOS Objective-C

[**iOS Objective-C SDK Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/ios-objective-c/)
가이드 문서에 따라 아래와 같이 collectAndSubmitWithPayPalClientMetadataId 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야합니다.
이때 첫번째 파라미터(YOUR-PAYPAL-CLIENT-METADATA-ID)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```objective-c
//PPRMOCMagnesSDK *magnesSDK = [PPRMOCMagnesSDK shared];
PPRMOCMagnesSDKResult *magnesResult =
[magnesSDK
collectAndSubmitWithPayPalClientMetadataId:@"YOUR-PAYPAL-CLIENT-METADATA-ID"
withAdditionalData:@{}];
```

### 고위험 결제 처리

페이팔은 판매자 보호 정책을 통해 고객사 거래에서 이상 거래나 사기 등이 발생 시,
판매자 보호 정책을 통해 고객사가 손해 입을 수 있는 부분을 보존하는 판매자 보호 프로그램을 가지고 있습니다.
이 판매자 보호 정책을 적용하기 위해서는 페이팔 측에서 제공하는 STC 기능을 사용해야 합니다.

STC 기능을 사용하시기 위해 다음 정보를 확인하셔야 합니다.

1. 페이팔 Business 계정 가입시 산업 종류(Industry)를 결정하는데, 계정의 산업 종류를 확인해야 합니다.

2. 계정의 산업 종류를 확인하신 뒤, loadUI 호출 해 빌링키를 발급 받을때 그리고 발급 된 빌링키로 재결제(again API 호출)할 때
   모두 bypass.paypal\_v2 객체에 아래와 같은 형식으로 전달해주셔야 합니다.

<details>

<summary>빌링키 발급시 STC 적용하기</summary>

```javascript
IMP.loadUI(
  "paypal-rt",
  {
    //...중략
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "paypal",
    merchant_uid: "mid_1234567890", // 주문 번호
    customer_uid: "cuid_1234567890", // [필수 입력] 빌링키와 1:1 매핑되는 UUID
    bypass: {
      paypal_v2: {
        additional_data: [
          {
            key: "sender_account_id", // 고객사 account ID(merchant-id)
            value: "A12345N343",
          },
          {
            key: "sender_first_name", // 고객사의 account에 등록 된 구매자의 이름
            value: "John",
          },
          {
            key: "sender_last_name", // 고객사의 account에 등록 된 구매자의 이름
            value: "Doe",
          },
          {
            key: "sender_email", // 고객사의 account에 등록 된 구매자의 이메일 주소
            value: "example@example.com",
          },
          {
            key: "sender_phone", // 고객사의 account에 등록 된 구매자의 연락처
            value: "(02)16705176",
          },
          {
            key: "sender_country_code", // 고객사 계정에 등록된 국가 코드
            value: "KR", // ISO Alpha-2 형식 국가 코드
          },
          {
            key: "sender_create_date", // 고객사 고객 계정이 생성된 날짜
            value: "2023-10-10T23:59:59+09:00", // IOS8601 형식
          },
        ],
      },
    },
  },
  (response) => {
    //...중략
  },
);
```

</details>

<details>

<summary>

발급 된 빌링키로 단건 결제(again API 호출)시 STC 적용하기

</summary>

```ts
await fetch("https://api.iamport.kr/subscribe/payments/again", {
  method: "POST",
  headers: {
    Authorization: `Basic ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    customer_uid, // [필수 입력] 빌링키 발급시 전달 한 빌링키와 1:1 매핑되는 UUID
    merchant_uid, // [필수 입력] 주문 번호
    currency, // [필수 입력] 결제 통화 (페이팔은 KRW 불가능)
    amount, // [필수 입력] 결제 금액
    name, // 주문명
    bypass: JSON.stringify({
      paypal_v2: {
        additional_data: [
          {
            key: "sender_account_id", // 고객사 account ID(merchant-id)
            value: "A12345N343",
          },
          {
            key: "sender_first_name", // 고객사의 account에 등록 된 구매자의 이름
            value: "John",
          },
          {
            key: "sender_last_name", // 고객사의 account에 등록 된 구매자의 이름
            value: "Doe",
          },
          {
            key: "sender_email", // 고객사의 account에 등록 된 구매자의 이메일 주소
            value: "example@example.com",
          },
          {
            key: "sender_phone", // 고객사의 account에 등록 된 구매자의 연락처
            value: "(02)16705176",
          },
          {
            key: "sender_country_code", // 고객사의 account에 등록 된 국가 코드
            value: "KR", // ISO Alpha-2 형식 국가 코드
          },
          {
            key: "sender_create_date", // 고객사의 account에 등록 된 국가 코드
            value: "2023-10-10T23:59:59+09:00", // IOS8601 형식
          },
        ],
      },
    }), // end of bypass string
  }), // end of body
});
```

</details>

<div class="hint" data-style="warning">

**고위험 산업(게임과 같은 디지털 상품, 중고거래)의 경우에는 STC API를 통해 판매자 보호 정책을 적용하는 것을 페이팔에서 필수로 요구하고 있습니다.**

**판매자 보호 정책에 관한 자세한 내용과 협의가 필요하시다면 페이팔 측에 직접 문의를 하셔야 합니다.**

**고위험 산업이 아닌 경우에도 STC API를 연동하는 것을 권장하고 있습니다.**

<br />

---

<br />

고위험 산업에 해당하는 산업군들은 다음과 같습니다.

각 산업별 STC에 필요한 요청 파라미터들이 달라, 고위험 산업에 해당하는 고객사 분들께는 페이팔 전자결제 신청 시 포트원 지원팀에서 안내가 될 예정입니다.

1. 이벤트/티켓 판매 산업

2. 연료 산업

3. 게임/디지털 상품 산업

4. 마켓플레이스 사업

5. 온라인 여행 산업(렌터카, 숙박, 여행 패키지, 교통)

6. P2P 산업

7. 소매, 식품 산업
   - **소매, 식품 산업의 경우 다음과 같은 경우에만 STC 연동이 필요합니다.**
     - 모바일 기기를 통해 매장 내 구매가 가능한 산업

   - **다음 산업의 경우에는 STC 연동이 필요하지 않습니다.**
     - 타사 배송업체를 통해 주소로 실물 상품을 배송하는 산업
     - 자체 배송 트럭을 통해 주소로 실물 상품을 배송하는 산업
     - 소비자가 수령할 수 있도록 자체 매장으로 실물 상품을 배송하는 산업

8. 택시, 공유 이동수단 사업

9. 통신사

10. 결제 시스템 보안 서비스 산업

</div>
