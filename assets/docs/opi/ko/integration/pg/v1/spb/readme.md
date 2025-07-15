---
title: 페이팔(Smart Payment Buttons) 일반결제
description: 페이팔(Smart Payment Buttons) 일반결제 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/paypal-v2
---

<div class="hint" data-style="info">

페이팔 일반결제의 경우 SPB(Smart Payment Button) 방식만 지원합니다.

</div>

## 페이팔 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

<div class="hint" data-style="warning">

페이팔 일반결제는 **SDK 1.3.0 부터 사용 가능**합니다.

SDK 스크립트의 주소가 `https://cdn.iamport.kr/v1/iamport.js 인지 확인해주세요.`

위 JS SDK 를 이용하여 페이팔 정기결제 연동시 callback Data는 아래와 같이 두가지 형태로만 내려갑니다.

- `imp_uid`
- `merchant_uid`

해당 SDK를 사용하실때는 IMP.request\_pay로부터 응답된 객체(또는 쿼리 파라미터)에서 imp\_uid를 가지고
**포트원 REST API(GET /payments/imp\_uid)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여
응답 파라미터 중 status(결제 상태) 파라미터에 따라 추가 로직을 구현해야 합니다.

</div>

## 페이팔 일반결제 버튼 렌더링

페이팔 일반결제는 고객사 체크아웃 페이지에 페이팔 일반결제 버튼(아래 이미지 참고)을 렌더링 한 후,
이 일반결제 버튼을 클릭해 페이팔 결제창을 호출하는 방식입니다.

[이미지 링크](<https://developers.portone.io/gitbook-assets/ko/image (6) (1) (1).png>)



따라서 다른 PG사와 결제 플로우가 상이하기 때문에 고객사는 **체크아웃 페이지가 렌더링 되는 시점에**
`IMP.request_pay` 함수 대신 **`IMP.loadUI`라는 별도의 함수를 호출해 페이팔 일반결제 버튼을 렌더링 해야**합니다.

(이미지 첨부: 페이팔 정기결제 빌링키 발급 연동 플로우)

```html
<!--
1. 고객사 체크아웃 페이지가 렌더링됩니다.
   페이팔 버튼을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣어줍니다.
   향후 비슷한 플로우로 동작하는 PG사가 생기거나, 2개 이상의 dom element가 렌더링 될 것을 대비해
   data-portone-ui-type을 paypal-spb로 설정합니다.
-->
<div class="portone-ui-container" data-portone-ui-type="paypal-spb">
  <!-- 3. 여기에 페이팔 버튼이 생성됩니다. -->
</div>

<script>
  window.onload = function() {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달 해 포트원 객체를 초기화합니다.
    IMP.init(고객사 식별코드);

    // 2-2. "결제 요청 데이터"와 결제 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 PG사 버튼 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI('paypal-spb', 결제 요청 데이터, 콜백 함수);

    // 4. 구매자가 PG사 버튼을 누르면 PG사 결제창이 렌더링 됩니다.
    // 5. 이때 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출합니다.
    // 6-7. 포트원 DB에 미결제(ready) 결제 건이 생성됩니다.
    // 8. PG사 결제창이 호출됩니다.
    // 9. 결제 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };
</script>
```

<div class="hint" data-style="info">

### 페이팔 일반결제 버튼이 보이지 않을 때

`portone-ui-container` 라는 class 이름을 갖는 div
element를 찾지 못할 경우 "portone-ui-container를 찾을 수 없습니다." 라는 에러가 발생합니다.

`portone-ui-container` element가 2개 이상인데, `data-portone-ui-type`
attribute가 `paypal-spb`인 element를 찾지 못할 경우, "data-portone-ui-type에 올바른
UI 타입을 입력해주세요."라는 에러가 발생합니다.

`portone-ui-container` element가 2개 이상이고, `data-portone-ui-type`
attribute가 `paypal-spb`인 elemente도 2개 이상인 경우, “동일한 data-portone-ui-type을
갖는 DOM element가 2개 이상 존재합니다."라는 에러가 발생합니다.

</div>

## 결제 요청 데이터 업데이트

페이팔 일반결제 동작의 특성상, 고객사 체크아웃 페이지가 렌더링 될 때 결제 요청 데이터가 결정 되어야 합니다.
때문에 고객사 체크아웃 페이지 등에서 구매자의 정보(이름, 주소 등)를 입력한다거나
포인트 등을 적용하여 결제 금액이 바뀌는 경우에는 그 다음 페이지로 이동해 최종적으로 결정 된 구매 정보를 기준으로 페이팔 버튼을 렌더링 시켜야 합니다.
페이팔 데모 페이지에서도 같은 방식으로 구현되어있습니다.

하지만 페이팔 일반결제 때문에 페이지를 하나 더 만드는 것은 고객사 입장에서 매우 번거로운 일이기 때문에
포트원에서는 처음 페이팔 버튼을 렌더링 시킨 후,
페이팔 버튼을 누르기 전 주문 정보가 바뀌었을때
“결제 요청 데이터”를 업데이트 할 수 있는 `IMP.updateLoadUIRequest` 함수를 제공하고 있습니다.

구매자 입력으로 인해 **결제 요청 데이터가 변경될때 `IMP.updateLoadUIRequest`함수를 호출**하시면
구매자가 페이팔 결제 버튼을 누를때 최종적으로 변경 된 결제 요청 데이터로 페이팔 결제창이 호출됩니다.

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
   페이팔 버튼을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣어줍니다.
   향후 비슷한 플로우로 동작하는 PG사가 생기거나, 2개 이상의 dom element가 렌더링 될 것을 대비해
   data-portone-ui-type을 paypal-spb로 설정합니다.
-->
<div class="portone-ui-container" data-portone-ui-type="paypal-spb">
  <!-- 3. 여기에 페이팔 버튼이 생성됩니다. -->
</div>

<script>
  var requestData = {
    channelKey: '{콘솔 내 연동 정보의 채널키}',
    pay_method: 'paypal',
    amount: 1000,
    // ...중략
  }
  window.onload = function() {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달 해 포트원 객체를 초기화합니다.
    IMP.init(고객사 식별코드);

    // 2-2. requestData(결제 요청 데이터)와 결제 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 PG사 버튼 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI('paypal-spb', requestData, 콜백 함수);

    // 6. 구매자가 PG사 버튼을 누르면 PG사 결제창이 렌더링 됩니다.
    // 7. 이떄 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출하며
    // 결제 요청 금액은 1000에서 2000으로 변경됩니다.

    // 8-9. 포트원 DB에 미결제(ready) 결제 건이 생성됩니다.
    // 10. PG사 결제창이 호출됩니다.
    // 11. 결제 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };

  function onChangeAmount() {
    // 5. 결제 요청 금액이 변경되면 고객사가 선언한 onChangeAmount 함수가 호출됩니다.
    // IMP.updateLoadUIRequest에 최종적으로 변경 된 결제 요청 데이터를 전달합니다.
    requestData.amount = document.getElementById('amount').value
    IMP.updateLoadUIRequest('paypal-spb',requestData)
  }
</script>
```

## loadUI 요청 객체

|파라미터                                                                                              |데이터타입|필수여부    |의미                                                                                                                                                                                                                                                                                                                                                                                                                              |
|------------------------------------------------------------------------------------------------------|----------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|merchant\_uid                                                                                         |string    |required    |고객사 채번 주문 고유 번호                                                                                                                                                                                                                                                                                                                                                                                                        |
|name                                                                                                  |string    |optional    |제품명                                                                                                                                                                                                                                                                                                                                                                                                                            |
|amount                                                                                                |number    |required    |금액                                                                                                                                                                                                                                                                                                                                                                                                                              |
|\~\~pg(deprecated)\`\`                                                                                |~~string~~|~~required~~|~~paypal\_v2~~                                                                                                                                                                                                                                                                                                                                                                                                                    |
|channelKey                                                                                            |string    |required    |<p>paypal\_v2 채널의 채널 키 </p><p>(포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.)</p>                                                                                                                                                                                                                                                                                                         |
|pay\_method                                                                                           |string    |required    |paypal (결제수단)                                                                                                                                                                                                                                                                                                                                                                                                                 |
|[country](http://chaifinance.notion.site/country-29b79aaa067846cea251a7875b0f6ed4)                    |string    |optional    |<p>국가 코드</p><p>주의: 페이팔 일반결제 테스트 모드시에만 유효</p>                                                                                                                                                                                                                                                                                                                                                               |
|customer\_id                                                                                          |string    |optional    |고객사가 구매자를 특정하기 위해 채번한 고유 번호                                                                                                                                                                                                                                                                                                                                                                                  |
|buyer\_name                                                                                           |string    |optional    |구매자 전체 이름                                                                                                                                                                                                                                                                                                                                                                                                                  |
|[buyer\_first\_name](http://chaifinance.notion.site/buyer_first_name-b40318cbf8e2489385a58cc59ae7ab7e)|string    |optional    |구매자 이름 주의: 페이팔에서만 유효하며 buyer\_name이 아닌 buyer\_first\_name과 buyer\_last\_name 입력을 권장                                                                                                                                                                                                                                                                                                                     |
|[buyer\_last\_name](http://chaifinance.notion.site/buyer_last_name-0571c7432cf44c0ab6f3fddf34238666)  |string    |optional    |구매자 성 주의: 페이팔에서만 유효하며 buyer\_name이 아닌 buyer\_first\_name과 buyer\_last\_name 입력을 권장                                                                                                                                                                                                                                                                                                                       |
|buyer\_tel                                                                                            |string    |optional    |구매자 전화번호                                                                                                                                                                                                                                                                                                                                                                                                                   |
|buyer\_email                                                                                          |string    |optional    |구매자 이메일 주소                                                                                                                                                                                                                                                                                                                                                                                                                |
|notice\_url                                                                                           |string    |optional    |<p>결제 창에서 결제 승인 완료 또는 가상계좌 발급 완료시 고객사에게 노티 될 웹훅 URL string 또는 string\[]로 N개 설정 가능</p><p>웹훅이 잘 발송 됐는지는 결제 승인 내역에서 아임포트 번호를 눌러봤을때 웹훅 발송 내역을 보고 확인할 수 있음</p>                                                                                                                                                                                    |
|confirm\_url                                                                                          |string    |optional    |<p>결제창이 호출되고 구매자가 최종 결제 승인을 하기까지 수량 소진 등 모종의 사유로 더이상 결제가 불가능 하게 되는 상황을 대비해, 최종 결제 승인 직전 최종 결제 승인 여부를 질의할 고객사 웹서버 endpoint</p><p>아임포트가 해당 endpoint로 최종 결제 승인 질의시, 200 외의 응답을 받으면 최종 결제 승인을 시키지 않고 결제 실패 상태로 기록함</p><p /><p>

<strong>주의: 아임포트 CS팀으로 해당 기능 사용 신청을 해야 함</strong>

</p>|
|[products](http://chaifinance.notion.site/products-9107dec19480457bbfeb06e9244eb31c)                  |array     |optional    |결제 상품 정보                                                                                                                                                                                                                                                                                                                                                                                                                    |
|[currency](http://chaifinance.notion.site/currency-196b9c5e6a8543df9059ff20199028fc)                  |string    |optional    |결제 통화 (기본값: USD)                                                                                                                                                                                                                                                                                                                                                                                                           |
|custom\_data                                                                                          |object    |optional    |결제 정보와 함께 관리하고 싶은 고객사 커스텀 JSON 데이터                                                                                                                                                                                                                                                                                                                                                                          |

<div class="hint" data-style="warning">

**파라미터 유의사항**

아래 링크로 반드시 유의사항을 숙지하셔야 합니다.

[연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/spb/warning)

</div>

<div class="hint" data-style="warning">

**결제 유의사항**

판매자/구매자 계정이 모두 한국 계정인 경우 결제가 불가합니다.
(단, 예외적으로 테스트 환경에서는 결제 테스트가 가능합니다.)

판매자 계정이 해외 계정인 경우 구매자 계정 국가에 상관없이 자유롭게 결제가 가능합니다. (해외 판매자 계정 <-> 한국 구매자 계정 간 거래 가능)

</div>

## 비동기 처리

### 결제 처리

페이팔 결제 건은 승인 요청 시 바로 승인 되지 않고 일정 시간 후 처리되는 `승인 대기(pending)` 상태가 존재합니다.
따라서 고객사는 트랜잭션 종료시 콜백 함수로 전달되는 포트원 번호(imp\_uid)로
결제 내역을 조회([GET /payments/{imp\_uid}](https://developers.portone.io/api/rest-v1/payment?v=v1#get%20%2Fpayments%2F%7Bimp_uid%7D))한 후
응답 되는 status를 보고 각 상황에 맞는 후 처리 로직을 작성해야 합니다.

승인 대기 상태에서는 최종적으로 승인(paid)이 될 수도 있고 승인이 되지 않을 수도(failed) 있기 때문에
고객사는 반드시 (가상계좌나 정기결제와 같이 결제가 비동기로 승인되는 경우 포트원 → 고객사로 결제 결과를 통보해주는) **웹훅 기능을 연동해야** 합니다.

### 취소 처리

페이팔 결제 취소 요청 시 취소 요청이 바로 승인 되지 않고 일정 시간 후 승인처리되는 경우가 존재합니다.
고객사는 결제 취소 요청 응답 처리 시 취소가 승인되었는지 여부를 확인해야 합니다.

결제 취소 API를 통해 취소 요청을 한 경우 API 응답의 status와 cancel\_history 값을 기준으로 취소 승인 여부를 판단해야 합니다.
status가 cancelled 이고 cancel\_history에 취소 요청 내역이 있는 경우 취소가 승인된 것이고 그렇지 않은 경우 취소 승인대기 상태입니다.

콘솔을 통한 취소 요청이 승인대기인 경우 결제내역에서 결제상태는 결제취소로 변경되지 않고
진행중인 취소요청 내역이 있음이 표시되며 결제내역 상세 화면에서 취소요청내역이 조회됩니다.
취소 요청이 승인대기 상태인 경우 최종적으로 승인되거나 승인되지 않을 수 있기 때문에
고객사는 최종 취소 처리 결과를 전달받기 위해 고객사 통보 웹훅 기능을 연동해야 합니다.

<details>

<summary>취소 요청이 승인대기 중인 결제상태</summary>

(관련 이미지 첨부)

</details>

<details>

<summary>취소 요청이 승인대기 중인 결제내역 상세</summary>

(관련 이미지 첨부)

</details>

### 고위험 결제 처리

페이팔은 판매자 보호 정책을 통해 고객사 거래에서 이상거래나 사기 등이 발생 시,
판매자 보호 정책을 통해 고객사가 손해 입을 수 있는 부분을 보존하는 판매자 보호 프로그램을 가지고 있습니다.
이 판매자 보호 정책을 적용하기 위해서는 페이팔 측에서 제공하는 STC 기능을 사용해야 합니다.

STC 기능을 사용하시기 위해 다음 정보를 확인하셔야 합니다.

1. 페이팔 Business 계정 가입시 산업 종류(Industry)를 결정하는데, 계정의 산업 종류를 확인해야 합니다.
2. 계정의 산업 종류를 확인하신 뒤, 해당 산업에 맞는 파라미터를 아래와 같은 형식으로 loadUI 호출 시 bypass.paypal\_v2 객체에 작성해 추가해 주시면 됩니다.

<details>

<summary>결제 요청시 STC 적용하기</summary>

```json
// 해당 파라미터들은 산업군 별로 추가가 필요하거나 제외해도 되는 파라미터들이 있습니다.
{
  "additional_data": [
    {
      "key": "sender_account_id", // 고객사 account ID(merchant-id)
      "value": "A12345N343"
    },
    {
      "key": "sender_first_name", // 고객사의 account에 등록 된 구매자의 이름
      "value": "John"
    },
    {
      "key": "sender_last_name", // 고객사의 account에 등록 된 구매자의 이름
      "value": "Doe"
    },
    {
      "key": "sender_email", // 고객사의 account에 등록 된 구매자의 이메일 주소
      "value": "example@example.com"
    },
    {
      "key": "sender_phone", // 고객사의 account에 등록 된 구매자의 연락처
      "value": "(02)16705176"
    },
    {
      "key": "sender_country_code", // 고객사의 account에 등록 된 국가 코드
      "value": "KR" // ISO Alpha-2 형식 국가 코드
    },
    {
      "key": "sender_create_date", // 고객사의 account에 등록 된 국가 코드
      "value": "2023-10-10T23:59:59+09:00" // IOS8601 형식
    }
  ]
}
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

<details>

<summary>연동가능 결제수단</summary>

- card

- credit(PayPal Credit (US, UK))

- paylater
  - Pay Later (US): 4개월 무이자 할부 또는 6, 12, 24개월 할부
  - Pay Later (UK): 3개월 무이자 할부 또는 4개월 무이자 할부 + 이후 유이자 할부
  - Pay in 4 (AU): 매 2주마다 4회에 걸쳐 지불
  - 4X PayPal (France): 90일 내 4회에 걸쳐 지불
  - Später Bezahlen (Germany): 3, 6, 12, 24개월 할부 또는 30일 이내 지불
  - Italy: 3개월 할부
  - Spain: 3개월 할부

- bancontact(BE / EUR)

- blik(PL / PLN)

- eps(AT / EUR)

- giropay(DE / EUR)

- ideal(NL / EUR)

- mybank(IT / EUR)

- sepa(DE / EUR)

- p24(PL / PLN, EUR)

- sofort(AT, BE, DE, ES, NL / EUR 또는 GB / GBP)

</details>

<details>

<summary>간편결제 </summary>

### Alternative Methods

페이팔은 간편 결제를 Alternative Methods라고 부르고 있습니다. Alternative Methods도 Pay Later 처럼 결제가 가능한 국가와 통화는 매우 제한적입니다.

- Bancontact
  - 구매자: BE / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- BLIK
  - 구매자: PL/ PLN
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- eps
  - 구매자: AT / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- giropay
  - 구매자: DE / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- iDEAL
  - 구매자: IT / EUR

- MyBank
  - 구매자: IT
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- Przelewy24
  - 구매자: PL / PLN, EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- SEPA-Lastschrift
  - 구매자: DE

- SOFORT
  - 구매자
    - AT, BE, DE, ES, NL / EUR
    - GB / GBP

  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

단, **Venmo(US)와 Pay upon Invoice(DE)는 지원하지 않습니다.**

</details>
