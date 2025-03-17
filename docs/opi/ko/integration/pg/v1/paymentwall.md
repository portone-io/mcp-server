---
title: 페이먼트월
description: 페이먼트월 결제창 연동가이드를 확인 합니다.
targetVersions:
  - v1
---

## 1. 페이먼트월 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
페이먼트월 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 IMP.request\_pay(param, callback)
호출 후 **callback** 으로 수신되며
모바일의 경우**m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 페이먼트월은 국가IP에 따라 결제수단이 활성화 됩니다.(생략가능)
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    currency: "KRW", // 필수 파라미터
    buyer_email: "test@portone.io", //필수 파라미터
    buyer_name: "Jack Son", // 반드시 Firstname Lastname 이 빈칸으로 구분되어야
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    use_test_method: true, // 테스트 결제 수단을 활성화하는 파라미터,
    bypass: {
      // 터미날3 인경우 해당 파라미터 설정, 미 설정시 Defualt(일반) 결제창 활성화
      widget_code: "t3_1",
      // 특정 결제수단만 활성화 하는 경우 사용 all 인 경우(default) 국가 지원 결제수단 모두 표
      ps: "all",
      country_code: "DE", // 코드가 지정되면 지정된 국가에서 지원하는 결제수단이 활성화됩니다.
    },
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `paymentwall`로 지정하면 됩니다. 페이먼트월 채널을 여러개 사용하는 경우 `{pg}.{mid}` 형식으로 요청해야 합니다. (예시-`paymentwall.{projeckey}`)

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method?: string

  **결제수단 구분코드**

  결제수단 제어는 [페이먼트월 홈페이지](http://api.paymentwall.com/) 안에서 Project를 활성화 하여 제어가 가능합니다. 따라서 `pay_method`의 값은 무시될 수 있습니다.

  (별도로 제어하지 않으시면 국가IP에 맞는 결제수단이 기본으로 노출됩니다)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  string 형식이 아닌 integer 형식으로 요청해야 합니다.

- name: string

  **주문명**

  페이먼트월의 경우 필수로 입력해야 합니다.

- buyer\_name: string

  **구매자 이름**

  결제시 사용되는 구매자 이름 입니다. 페이먼트월의 경우 필수로 입력해야 합니다.

- buyer\_email: string

  **구매자 email 주소**

  결제시 사용되는 구매자 이메일입니다. 페이먼트월의 경우 필수로 입력해야 합니다.

- currency: string

  **통화구분코드**

  입력하지 않는 경우 기본적으로 `KRW`로 요청하며, 해외 통화 결제 시 해당 통화 구분 코드를 입력한 후 요청해야 합니다.

- use\_test\_method?: boolean

  **테스트 결제수단 활성화 여부**

  LIVE 프로젝트에서 테스트 결제수단을 활성화 하는 경우 사용합니다.

  만약 LIVE 프로젝트가 아니라면(페이먼트월 심사 완료 전 단계), `use_test_method` 파라미터 설정과 동시에 bypass의 `ps` 파라미터를 `test`로 설정해야 테스트 결제수단 사용이 가능합니다.

  ```ts title="Javascript SDK"
  IMP.request_pay({
    use_test_method: true,
    bypass: {
      ps: "test", // LIVE 프로젝트가 아닌 경우, ps도 test로 설정해야만 테스트 결제수단이 활성화됩니다.
    },
  });
  ```

- bypass: object

  **페이먼트월 전용 파라미터**

  - widget\_code?: string

    터미날3 인 경우 `t3_1`로 파라미터를 설정해야 합니다. 미설정시 Default(일반) 결제창이 활성화됩니다.

  - ps?: string

    특정 결제수단만 활성화 하는 경우 사용됩니다. 페이먼트월 가이드를 참고하여 해당하는 코드를 입력해야 합니다. [→ 페이먼트월 가이드 바로가기](http://docs.paymentwall.com/reference/payment-system-shortcodes) ex) `kakaopaykr` = 카카오페이

  - country\_code?: string

    지정된 국가에서 지원되는 결제수단이 위젯상에 노출됩니다. 다음 문서를 참고하여 해당하는 국가코드를 입력해야 합니다. [→ 국가코드 바로가기](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

</div>

<div class="tabs-content" data-title="비 인증 결제">

인증결제창 호출 파라미터에서 `customer_uid` 값을 추가하면 비 인증 결제창을 호출할 수 있습니다.
비 인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 빌링키 결제는 오직 신용카드만 가능합니다.
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 20, // 빌링키 발급과 함께 최초 승인이 같이 이루어집니다.
    currency: "USD", // 필수 파라미터
    customer_uid: "your-customer-unique-id", // 필수 입력
    buyer_email: "test@portone.io", // 빌링키 발급시 기재한 주소와 빌링키 결제할때 기재한 주소가 동일해야 합니다.
    buyer_name: "Jack Son", // 반드시 Firstname Lastname 이 빈칸으로 구분되어야 합니다.
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

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `paymentwall`로 지정하면 됩니다. 페이먼트월 채널을 여러개 사용하는 경우 `{pg}.{mid}` 형식으로 요청해야 합니다. (예시-`paymentwall.{projeckey}`)

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.
  빌링키 발급이 성공하면 실 빌링키는 `customer_uid`와 1:1 매칭되어 **포트원 서버에 저장**됩니다.
  `customer_uid`를 고객사 내부서버에 저장한 후 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출하여 결제 요청을 해야합니다.

  ```sh title="server-side"
  curl -H "Content-Type: application/json" \
      -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
      https://api.iamport.kr/subscribe/payments/again
  ```

- amount: number

  **결제금액**

  string 형식이 아닌 integer 형식으로 요청해야 합니다.
  설정된 금액으로 **최초 승인이 발생**됩니다.

- name: string

  **주문명**

  페이먼트월의 경우 필수로 입력해야 합니다.

- buyer\_name: string

  **구매자 이름**

  결제시 사용되는 구매자 이름 입니다. 페이먼트월의 경우 필수로 입력해야 합니다.

- buyer\_email: string

  **구매자 email 주소**

  결제시 사용되는 구매자 이메일입니다. 페이먼트월의 경우 필수로 입력해야 합니다.

- currency: string

  **통화구분코드**

  입력하지 않는 경우 기본적으로 `KRW`로 요청하며, 해외 통화 결제 시 해당 통화 구분 코드를 입력한 후 요청해야 합니다.

</div>

</div>

<div class="hint" data-style="danger">

**배송정보 등록 API**

페이먼트월을 통한 이커머스(실물상품) 결제인 경우 아래 배송정보등록 API를 반드시 연동해야 합니다. 해당 API를 연동하지 않을 경우 정산 시 문제가 발생할 수 있습니다.

[→ 페이먼트월 배송등록 API 바로가기](https://developers.portone.io/api/rest-v1/pg.paymentwall)

</div>

<div class="hint" data-style="danger">

페이먼트월의 경우 빌링키 발급 시 빌링키 발급과 동시에 결제가 이루어지는 방식으로만 제공하고 있습니다.
페이먼트월 정책에 따라 최초 결제 승인 없이 **빌링키만 발급하는 방식은 지원되지 않습니다.**

또한, 빌링키만 발급하기 위해 임의의 결제를 발생시켜 승인 후 즉시 취소하는 경우 카드사 정책에 따라 이용이 중지될 수 있습니다.

</div>
