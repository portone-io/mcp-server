---
title: 비인증결제 연동하기
description: 카드 정보를 직접 입력하여 일회성 결제 또는 빌링키를 발급 및 정기결제 이용 방법을 안내합니다.
targetVersions:
  - v1
---

## 비인증 결제란?

카드 번호, 유효기간, 카드 소유주 생년월일, 비밀번호 2자리 등 카드 정보를 직접 입력하여 일회성 결제(키인(수기)결제)
방식과 카드 정보를 이용하여 빌링키를 발급하고 판매자가 원하는 시점에 고객의 별도 인증 없이 결제를 요청하는 방식을 통칭합니다.

<div class="hint" data-style="info">

구매자의 인증 없이도 결제를 진행할 수 있어 간편하다는 장점이 있지만 구매자 인증 과정이 생략되는만큼
서비스 운영 중 보안상의 이슈가 발생할 확률이 높아 **결제대행사 가입 시 입점심사가 까다롭게 진행**된다는 점 참고해주세요.

</div>

## 키인결제

구매자 인증 없이 카드정보만으로 결제되는 방식(일회성 결제)입니다.
키인(수기) 결제는 카드 정보를 입력하는 것만으로 별도 인증절차 없이 결제가 이루어지며,
결제는 일회성으로 진행되고 카드정보를 저장하지 않기 때문에 결제 요청 시 매번 카드정보를 입력해야 합니다.

<div class="hint" data-style="info">

주로 ARS를 통해 고객분께 카드 정보를 획득하여 결제를 요청하는 콜센타 또는
인증결제의 번거로움을 회피하기 위해 일부 고객사에서 사용하는 방식입니다.
최근에는 인증결제가 간편결제방식으로 전환되면서
매번 카드정보를 기입해야 하는 번거로움 때문에 많이 사용되지 않은 방식입니다.

</div>

카드 정보를 바탕으로 [비 인증 결제(일회성) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fonetime)
를 이용하여 결제를 진행하는 방식입니다.

- **지원 결제대행사**
  - KG이니시스
  - NHN KCP
  - 나이스페이먼츠 (구모듈, 신모듈)
  - 토스페이먼츠 (신모듈)
  - 키움페이
  - KSNET
  - 웰컴페이먼츠
  - 헥토파이낸셜

```ts title="server-side"
// card_number, expiry, birth, pwd_2digit 등 정보를 전달받습니다.
// 포트원 비인증 결제(일회성) API 호출
const onetimeResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/onetime",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pg: `${pg_provider}.${pg_mid}`,
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      // 중략...
    }),
  },
);
```

## 빌링키 결제

카드 정보를 바탕으로 빌링키를 발급한 후 해당 빌링키를 이용하여 결제되는 방식입니다.
빌링키를 이용하여 즉시 결제 또는 결제를 예약하여 정기결제 형식으로 이용할 수 있습니다.

<div class="hint" data-style="info">

**빌링키란?**

구독형 정기결제, 종량제 과금결제 등 구현 시 원하는 시점에 재 결제를 진행할 수 있는 결제용 암호화 키 입니다.
고객사가 고객의 카드 정보를 소유할 수 없기 때문에 카드사로부터 해당 카드에 대응하는 빌링키를
발급받아 저장하고, 이후 원하는 시점에 해당 빌링키로 결제를 청구하기 위해 사용합니다.

</div>

### 빌링키 발급하기

빌링키는 결제대행사에 따라 다음 두 가지 방식을 이용하여 발급받을 수 있습니다.

#### REST API 방식

고객 결제 정보를 이용하여 [빌링키 발급 API](https://developers.portone.io/api/rest-v1/billingkey#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를
호출하면 포트원 서버가 결제대행사를 통해 빌링키를 발급받습니다.

이 과정에서 고객의 카드 정보는 포트원 서버에 기록되지 않습니다.

브라우저로부터 결제 정보를 전달 받은 뒤, 서버에서 포트원 API를 호출하세요.

- **장점**
  - 고객사가 원하는 형태의 화면으로 **카드정보 입력란을 커스터마이징**할 수 있습니다.
  - 고객사 UI/UX 친화적인 결제 환경을 계획하고 계시다면 API 연동 개발을 선택하시길 권장드립니다.

- **단점**
  - **개인정보 이용약관**을 명시해야 하며 PG사 및 카드사 심사가 까다롭고 개인정보 유출에 유의해야 합니다.

- **지원 결제대행사**
  - KG이니시스
  - NHN KCP
  - 나이스페이먼츠 (구모듈, 신모듈)
  - 토스페이먼츠 (신모듈)
  - 키움페이
  - KSNET
  - 웰컴페이먼츠
  - 헥토파이낸셜

```ts title="server-side"
// customer_uid, card_number, expiry, birth, pwd_2digit 등 정보를 전달받습니다.
// 포트원 빌링키 발급 API 호출
const issueResponse = await fetch(
  `https://api.iamport.kr/subscribe/customers/${customer_uid}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pg: `${pg_provider}.${pg_mid}`,
      customer_id: customer_id, //고객 식별 정보로 고객사에서 기입
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      // 중략...
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
const {
  billingKeyInfo: { customer_uid },
} = await issueResponse.json();
// 빌링키가 발급되었습니다! 빌링키를 저장하거나 결제하는 로직을 구성하세요.
```

#### 결제창(SDK) 방식

결제창을 이용해 빌링키를 발급할 때는 포트원 SDK를 이용합니다.

포트원 SDK를 설치하는 방법은
[포트원 SDK 설치하기](https://developers.portone.io/opi/ko/integration/start/v1/auth?v=v1#1-포트원-sdk-설치하기-) 문서를 참고하세요.

`IMP.request_pay()` 함수를 호출 시 `customer_uid` 파라미터를 포함하는 경우 빌링키를 발급하기 위한
결제창을 열 수 있습니다.

브라우저에서 포트원 SDK를 호출하여 빌링키를 발급하고, 서버로 빌링키를 전달합니다.

- **장점**
  - 결제 수단 정보가 고객사나 포트원의 서버를 거치지 않고 직접 PG사로 전달되기 때문에 보안 문제가 일어날 가능성이 적습니다.

- **단점**
  - PG사의 일반결제창을 통해 카드정보를 입력받기 때문에 웹브라우저를 통해서만 빌링키 발급이 이루어지며,
    **카드정보 입력란을 커스터마이징 할 수 없습니다.**

- **지원 결제대행사**
  - KG이니시스
  - NHN KCP
  - 토스페이먼츠 (신모듈)
  - 다날
  - 이지페이(KICC)
  - 모빌리언스 (휴대폰 소액결제 한정)
  - 웰컴페이먼츠
  - 스마트로 (신모듈)
  - 헥토파이낸셜 (내통장 결제 한정)
  - 카카오페이
  - 네이버페이 (결제형 한정)
  - 페이코
  - 스마일페이
  - 토스페이 (신모듈)
  - 페이먼트월
  - 페이팔 (RT)

```ts
IMP.request_pay(
  {
    customer_uid: "gildong_0001_1234", // 카드(빌링키)와 1:1로 대응하는 값
    /* ...생략... */
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // 빌링키 발급 성공
    } else {
      // 빌링키 발급 실패
    }
  },
);
```

#### 유의사항

<div class="hint" data-style="info">

**`customer_uid` 란?**

PG사가 발급한 빌링키와 1:1로 맵핑되는, 고객사가 지정한 고유한 값입니다.
`customer_uid`는 카드 번호 단위로 구분하여 저장되어야 합니다.

예) **홍길동** 고객이 **A 카드** 빌링키를 요청하는 경우
`customer_uid`는 **회원별 카드 번호 단위**로 고유하게 발급되어야 합니다.

</div>

<div class="hint" data-style="danger">

이전 빌링키 발급에 사용된 `customer_uid`를 재사용하는 경우 가장 마지막 빌링키 발급에 사용된
카드번호의 빌링키로 대체됩니다. (**기존에 발급된 빌링키는 자동으로 해지되지 않습니다.**)

</div>

#### 빌링키 발급 방식에 따른 인증과정 필수 여부

빌링키를 발급 받는 단계에서 인증과정은 다음과 같이 구분할 수 있습니다.

1. PG사의 결제창을 띄우는 방식

   - PG사의 결제창 안에서 '공인인증(본인인증)' 절차를 요구하게 됩니다.

2. API 호출 방식

   - API 호출만으로 빌링키 발급이 가능하기 때문에 인증 절차가 없습니다.

인증과정 포함 여부는 결제대행사별로 다르므로 상세 내용은 아래 링크에서 확인하세요.

- [정기결제의 인증 과정 필수 여부](https://help.portone.io/content/schedule-requirement)

### 빌링키 결제 요청하기

발급 받은 포트원 빌링키를 이용하여 [비 인증 결제(빌링키) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)
또는 [결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule)
를 호출하여 즉시 결제 및 결제 예약을 진행합니다.

#### 즉시 결제

<div class="hint" data-style="info">

**빌링키 발급과 결제 요청을 한번에 하기**

[결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule)를
사용하면 등록된 customer\_uid가 없는 경우 빌링키 신규 발급을 먼저 진행한 후 schedule정보를 예약합니다.(카드정보 필수사항)

</div>

[비 인증 결제(빌링키) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)
를 참고하여 파라미터를 입력한 후 결제 요청해야 합니다.

```ts title="server-side"
// 포트원 빌링키 결제 API 호출
const paymentResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/again",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_uid,
      merchant_uid,
      name: "월간 이용권 정기결제",
      // 빌링키 결제 API를 참고해 고객 정보를 채워주세요.
      amount: {
        total: 8900,
      },
      currency: "KRW",
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

#### 예약/반복결제

**1. 결제 예약하기**

미래 특정 시점에 결제가 진행되도록 결제를 예약할 수 있습니다.
포트원 [결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule)
를 이용하여 원하시는 시점에 결제 예약을 손쉽게 등록할 수 있습니다.

```ts title="server-side"
// 결제 예약
axios({
  url: `https://api.iamport.kr/subscribe/payments/schedule`,
  method: "post",
  headers: { Authorization: access_token },
  data: {
    customer_uid: "gildong_0001_1234", // 카드(빌링키)와 1:1로 대응하는 값
    schedules: [
      {
        merchant_uid: "order_monthly_0001", // 주문 번호
        schedule_at: 1519862400, // 결제 시도 시각 in Unix Time Stamp. 예: 다음 달 1일
        amount: 8900,
        name: "월간 이용권 정기결제",
        buyer_name: "홍길동",
        buyer_tel: "01012345678",
        buyer_email: "gildong@gmail.com",
      },
    ],
  },
});
```

**2. 결제 결과 수신하기**

예약한 시간에 결제가 시도되면 Webhook 이벤트가 발생하여 지정한 서버의 callback URL로 결제
번호(`imp_uid`)와 주문 번호(`merchant_uid`)가 전달됩니다. 웹훅으로 예약결제에 대한 결과를 수신하면
결제결과 완료 로직 처리를 진행합니다.

<div class="hint" data-style="info">

**포트원 Webhook**

포트원 Webhook의 개념과 URL 설정 방법은 [**포트원 Webhook**](https://developers.portone.io/opi/ko/integration/webhook/readme-v1) 문서를 참고하세요.

</div>

```ts title="server-side"
// "/iamport-callback/schedule"에 대한 POST 요청을 처리
app.post("/iamport-callback/schedule", async (req, res) => {
  try {
    const { imp_uid, merchant_uid } = req.body;
    // 액세스 토큰(access token) 발급 받기
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      method: "post", // POST method
      headers: { "Content-Type": "application/json" },
      data: {
        imp_key: "imp_apikey", // REST API 키
        imp_secret:
          "ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f",
      },
    });
    const { access_token } = getToken.data; // 인증 토큰
    // imp_uid로 포트원 서버에서 결제 정보 조회
    const getPaymentData = await axios({
      url: `https://api.iamport.kr/payments/${imp_uid}`, // imp_uid 전달
      method: "get", // GET method
      headers: { Authorization: access_token },
    });
    const paymentData = getPaymentData.data; // 조회한 결제 정보
    const { status } = paymentData;
    if (status === "paid") {
      // 결제 성공적으로 완료
      // DB에 결제 정보 저장
      await Orders.findByIdAndUpdate(merchant_uid, { $set: paymentData }); // Mongoose
      // ...
    } else {
      // 재결제 시도
    }
  } catch (e) {
    res.status(400).send(e);
  }
});
```

**3. 반복결제 구현하기**

포트원 서버에 결제 예약 요청을 하고 예약한 시간에 결제가 시도되면 지정된 웹훅 URL을 통해서
서버에 알리는 과정을 반복적으로 수행하여 반복 결제를 구현할 수 있습니다.

(관련 이미지 첨부)

예약된 결제가 시도되었을 때 발생하는 webhook 이벤트를 처리하는 로직에서 예약된 결제가 정상적으로 완료되고 결제 내역이 저장되면 다음 결제를 예약하는 예제입니다.

```ts title="server-side"
// "/iamport-callback/schedule"에 대한 POST 요청을 처리
app.post("/iamport-callback/schedule", async (req, res) => {
  try {
    const { imp_uid, merchant_uid } = req.body;
    // 액세스 토큰(access token) 발급 받기
    /* ...중략 ... */
    // imp_uid로 포트원 서버에서 결제 정보 조회
    /* ...중략 ... */
    const paymentData = getPaymentData.data; // 조회한 결제 정보
    const { status } = paymentData;
    if (status === "paid") {
      // 결제 성공적으로 완료
      // DB에 결제 정보 저장
      await Orders.findByIdAndUpdate(merchant_uid, { $set: paymentData });
      // ...
      // 새로운 결제 예약
      axios({
        url: "{결제예약을 받을 서비스 URL}",
        method: "post",
        // 인증 토큰 Authorization header에 추가
        headers: { Authorization: access_token },
        data: {
          customer_uid: "gildong_0001_1234", // 카드(빌링키)와 1:1로 대응하는 값
          schedules: [
            {
              // 주문 번호
              merchant_uid: "order_monthly_0001",
              // 결제 시도 시각 in Unix Time Stamp. 예: 다음 달 1일
              schedule_at: 1519516800,
              amount: 8900,
              name: "월간 이용권 정기결제",
              // ...
            },
          ],
        },
      });
    } else {
      // 재결제 시도
    }
  } catch (e) {
    res.status(400).send(e);
  }
});
```
