---
title: 프로모션 결제 연동하기
description: 프로모션 할인금액을 적용하는 방법을 안내합니다.
targetVersions:
  - v1
  - v2
---

## 프로모션 결제 연동하기

고객사에서 카드사 즉시할인을 쉽게 적용하고 운영 관리하실 수 있도록 프로모션 기능을 제공하고 있습니다.
포트원 콘솔 내 **프로모션** 메뉴에서 카드사 별 프로모션을 생성 후 결제 요청 시 적용할 수 있으며,
프로모션에 설정된 예산, 할인방식, 할인금액/할인률에 따라 자동으로 계산되어 결제가 승인됩니다.

<div class="hint" data-style="info">

프로모션 메뉴의 경우 도입 고객사에 한하여 포트원 콘솔 내에서 확인하실 수 있습니다.

프로모션 결제를 연동하시려면 관리자콘솔에서 프로모션을 먼서 생성해야합니다.
프로모션 생성 방법이 궁금하다면 [프로모션 설정 가이드](https://developers.portone.io/opi/ko/extra/promotion/console-guide)를 확인해 보세요.

</div>

### 프로모션 할인 금액 표시하기

포트원에서 제공하는 프로모션을 이용하시는 경우 결제 요청 전 고객사에서 주문 페이지를 구현하여 사용하시길 권장드립니다.

고객사의 주문 페이지에 프로모션 할인 금액을 표시하시려면 [프로모션 단건 조회 API](https://developers.portone.io/api/rest-v2/promotion?v=v2)를 참고하여
사용할 프로모션 아이디로 API를 조회한 후 응답 필드의 `discountPolicy.partitions[]` 내의 `scheme`과 `amountFrom` 데이터를 갖고 직접 계산해서 사용하시길 권장드립니다.

**프로모션 할인 정책 조회 예시**

예를 들어 조회할 프로모션의 할인 정책이 `10000원 이상 결제 시 10% 할인, 50000원 이상 결제 시 20% 할인` 이라면 `discountPolicy` 필드는 아래와 같이 조회가 될 것입니다.

```javascript
const promotion = {
  // ... other fields
  discountPolicy: {
    partitions: [
      {
        amountFrom: 10000,
        scheme: {
          type: "PERCENT",
          percent: 10,
        },
      },
      {
        amountFrom: 50000,
        scheme: {
          type: "PERCENT",
          percent: 20,
        },
      },
    ],
  },
};
```

아래와 같은 로직으로 프로모션이 적용된 이후의 금액을 계산하실 수 있습니다.

```ts
const selectDiscountScheme = (partitions, amount) => {
  const select = (partitions) => {
    const [head, ...tail] = partitions;
    if (tail.length === 0) {
      return head.scheme;
    }

    const from = head.amountFrom;
    const to = tail[0].amountFrom;

    if (from <= amount && amount < to) return head.scheme;
    else return select(tail);
  };

  if (partitions[0].amountFrom > amount) return null;
  else return select(partitions);
};

const getPaymentAmount = (discountScheme, amount) => {
  if (discountScheme.type == "PERCENT") {
    // 정률 할인
    return amount - (amount * discountScheme.percent) / 100;
  } else {
    // 정액 할인
    return amount - discountScheme.amount;
  }
};

const orderAmount = getOrderAmount();
const response = await fetch(
  `https://api.portone.io/promotions/${promotionId}`,
  {
    method: "GET",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
  },
);
const promotion = await response.json();

// 금액 구간에 맞는 할인 정책을 구합니다.
const discountScheme = selectDiscountScheme(
  promotion.discountPolicy.partitions,
  orderAmount,
);
// 프로모션이 적용된 실결제 금액을 구합니다.
const paymentAmount = getPaymentAmount(discountScheme, orderAmount);
```

## SDK(결제창) 인증결제 연동하기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

SDK를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotion_id`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

SDK를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotionId`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

프로모션 결제의 경우 특정 카드사 결제 시 적용되므로 결제 호출 시 **카드 다이렉트**호출 방식만 지원되며,
해당 프로모션의 카드사와 다이렉트 호출 카드사가 일치하는 경우에만 프로모션 조건이 적용됩니다.

만약, 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 진행이 불가하오니 유의하시길 바랍니다.

이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/auth) 및 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
IMP.request_pay(
  {
    isPromotion: true, //프로모션 사용 여부
    promotion_id: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력 (Ex. 현대카드 프로모션)
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //결제수단 선택
    card: {
      direct: {
        code: "367", //현대카드 다이렉트 호출
      },
    },
    merchant_uid: "ORD20180131-0000011", //고객사 주문번호
    name: "Norway swivel chair", //주문명
    amount: 1000, // 결제 금액
    //고객 정보
    buyer_email: "gildong@gmail.com",
    buyer_name: "Hong Gildong",
    buyer_tel: "010-4242-4242",
    buyer_addr: "Shinsa-dong, Gangnam-gu, Seoul",
    buyer_postcode: "01181",
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // Payment is successful
    } else {
      // Payment failed
    }
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout) 및 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v2-sdk/payment-request) 문서를 참고하시기 바랍니다.

### 예제 코드

```tsx
//포트원 인증결제 SDK 호출
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
  promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력 (Ex. 현대카드 프로모션)
  //카드 다이렉트 호출
  card: {
    cardCompany: "HYUNDAI_CARD",
  },
  //기타 인증결제 파라미터 설정
  channelKey: "channel-key-f042e8e2-92f1-4f68-ad61-cec6ede41529",
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
  payMethod: "CARD",
  customer: {
    fullName: "홍길동",
    phoneNumber: "010-1234-5678",
    email: "test@test.com",
  },
});
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- promotion\_id?: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

- card?: object

  **카드 결제 옵션 설정**

  - direct?: object

    **카드 다이렉트 호출**

  - code?: string

    **카드사 코드**

    카드 다이렉트 호출 시 [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 문서를 참조하여 프로모션과 동일한 카드사로 지정해야 합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- promotionId?: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

- card?: object

  **카드 정보**

  - cardCompany?: string

    **카드사 다이렉트 호출 시 필요한 카드사 식별 값**

    카드 다이렉트 호출 시 [카드사 식별 값](https://developers.portone.io/sdk/ko/v2-sdk/payment-request?v=v2#card-object) 문서를 참조하여 프로모션과 동일한 카드사로 지정해야 합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 프로모션 결제를 이용하는 경우 카드 다이렉트 호출 방식으로 결제를 요청해야합니다. </summary>

결제 요청 시 프로모션 아이디를 지정했더라도 카드 다이렉트 방식으로 호출하지 않는 경우 에러가 리턴됩니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary> 프로모션 생성시 카드사와 결제 호출시 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 결제 호출시 `card.direct.code`에 지정한 카드사가 일치하지 않는 경우 에러가 리턴됩니다.
결제 요청시 동일한 카드사로 매칭하여 호출해야 합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션 생성시 카드사와 결제 호출시 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 결제 호출시 `card.cardCompany`에 지정한 카드사가 일치하지 않는 경우 에러가 리턴됩니다.
결제 요청시 동일한 카드사로 매칭하여 호출해야 합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## API 수기(키인)결제 연동하기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

API를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotion_id`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

API를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotionId`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

해당 프로모션의 카드사와 수기(키인) 결제 요청 시 입력한 카드의 카드사가 일치하는 경우에만 프로모션 조건이 적용됩니다.
(입력한 카드의 카드사 정보는 카드 BIN번호를 기준으로 체크됩니다.)
만약, 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 진행이 불가하오니 유의하시길 바랍니다.

이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
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
      promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력
      // 중략...
    }),
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [수기(키인)결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/keyin) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
// 포트원 수기(키인)결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/instant`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelKey: "channel-key-f042e8e2-92f1-4f68-ad61-cec6ede41529",
      //적용할 프로모션 아이디 입력
      promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e",
      orderName: "1개월 이용권",
      // 수기 결제 API를 참고해 고객 정보를 채워주세요.
      customer: {
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",

      // 수기(키인)결제 API를 참고해 카드 정보를 채워주세요.
      method: {
        card: {
          cardCredintial: {
            number: "0000123400001234", // 16자리 숫자만 입력해야 합니다.
            expiryYear: "26", // 연도의 뒤 2자리를 입력해야 합니다.
            expiryMonth: "12",
            birthOrBusinessRegistrationNumber: "900101", // 생년월일 6자리 또는 사업자 등록번호 10자리를 입력해야 합니다.
            passwordTwoDigits: "00", // 카드 비밀번호 앞 2자리 입력해야 합니다.
          },
        },
      },
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- promotion\_id: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- promotionId: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 프로모션 생성시 카드사와 결제 요청시 입력된 카드의 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 결제 요청시 입력한 카드 정보의 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 실패 처리됩니다.

</details>

## API 정기결제 연동하기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

발급된 빌링키를 이용하여 단건 결제 API 또는 예약 결제 API를 이용하는 경우
API 요청시 생성한 프로모션의 ID를 전용 파라미터인 `promotion_id`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

발급된 빌링키를 이용하여 단건 결제 API 또는 예약 결제 API를 이용하는 경우
API 요청시 생성한 프로모션의 ID를 전용 파라미터인 `promotionId`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

해당 프로모션의 카드사와 발급된 빌링키의 카드사가 일치하는 경우에만 프로모션 조건이 적용됩니다.
만약, 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 진행이 불가하오니 유의하시길 바랍니다.

예약 결제를 사용하시는 경우 결제가 실행되는 시점에 예약 시 입력한 프로모션 아이디를 기반으로 예산 및 조건을 확인한 후
적용됩니다. 만약 결제가 실행되는 시점에 예산 소진 상태이거나 프로모션이 종료된 상태인 경우 할인이 적용되지 않습니다.

이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

예약 결제와 관련된 자세한 내용은 [결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule) 문서를 참고하시기 바랍니다.

### 예제 코드

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 결제">

```ts
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
      //적용할 프로모션 아이디 입력
      promotion_id: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e",
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

```ts
// 결제 예약
axios({
  url: `https://api.iamport.kr/subscribe/payments/schedule`,
  method: "post",
  headers: { Authorization: access_token },
  data: {
    customer_uid: "gildong_0001_1234", // 카드(빌링키)와 1:1로 대응하는 값
    promotion_id: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 값
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

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

빌링키 결제와 관련된 자세한 내용은 [빌링결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/readme) 문서를 참고하시기 바랍니다.

### 예제 코드

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 결제">

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/billing-key`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
      promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력
      orderName: "후불 결제",
      customer: {
        id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
        phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
        email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/schedule`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payment: {
        billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
        promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력
        orderName: "월간 이용권 정기 결제",
        customer: {
          id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
          name: {
            full: "김포트", // 고객 이름을 입력해야 합니다.
          },
          phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
          email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
        },
        amount: {
          total: 8900,
        },
        currency: "KRW",
      },
      timeToPay: "2024-05-01T00:00:00+09:00", // ISO8601 형식으로 입력해야 합니다.
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

</div>

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- promotion\_id: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- promotionId: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 프로모션 생성시 카드사와 발급된 빌링키의 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 발급된 빌링키의 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 실패 처리됩니다.

</details>

## 공통 유의사항

<div class="hint" data-style="info">

프로모션 서비스에서 제공하는 로직은 내부 사정에 의해 변동될 수 있으며, 변동 시 고객사에 사전 고지될 예정입니다.

</div>

<details>

<summary> 프로모션이 진행중이 아닌 경우 할인 적용이 되지 않습니다. </summary>

결제 요청 시 프로모션 아이디를 지정했더라도 프로모션이 **진행중** 상태가 아닌 경우 프로모션 할인 적용 없이
일반 결제와 동일한 프로세스로 결제가 진행됩니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션 결제 완료 건 취소시 예산이 복구됩니다. </summary>

프로모션 할인이 적용된 결제 완료(`status:paid`)건을 취소하는 경우 기본적으로 적용되었던 할인 금액이 프로모션 예산에 복구됩니다.
만약 예산 복구 기능 사용을 원하지 않는 경우 프로모션 추가/수정시 **프로모션 예산 미복구**를 활성화해 주세요.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<details>

<summary> 프로모션 할인 적용 시점 안내 </summary>

결제창을 호출하는 시점에 프로모션 예산에서 할인 금액에 대해 선점하고 있기 때문에, 실제 예산이 모두 소진되지 않더라도 선점된 프로모션 금액을 포함하여
예산을 초과하는 경우 할인 금액이 적용되지 않습니다.

만약 결제 시도 중 결제 실패 혹은 사용자가 결제 승인 전 취소하는 경우 선점되었던 할인 금액은 즉시 예산으로 귀속됩니다.
이후 결제 요청 고객에게 다시 할인 금액이 적용됩니다.

</details>

<details>

<summary> 프로모션 할인 미적용 케이스 안내 </summary>

생성한 프로모션의 최소 결제 금액 조건에 따라 프로모션 할인이 적용되지 않을 수 있습니다.
또한 할인 조건에 따라 적용되어야 하는 할인 금액보다 예산이 적은 경우 프로모션 할인이 적용되지 않습니다.

예시) 프로모션 A의 상태가 남은 예산 금액 : 1,000원, 할인율 : 10%일 때,
주문 금액이 200,000원인 경우 적용되어야 하는 할인 금액이 2,000원이므로 고객이 결제 요청 시 프로모션 할인이 적용되지 않습니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션이 할인 적용 건 부분 취소 안내 </summary>

프로모션 할인이 적용된 거래 건을 부분 취소하는 경우 상품의 주문금액(프로모션 할인이 적용되지 않은 원래 금액)
을 입력해야 합니다.

결제 취소 시 콘솔 내 결제취소 상세 모달에서 \[프로모션 예산 설정] 옵션을 선택할 수 있으며, 결제 취소 API 이용시
`promotionDiscountRetainOption` 파라미터로 옵션을 선택할 수 있습니다.

- 프로모션 혜택 조정 (기본설정) : 결제 부분 취소시 잔여 결제 금액이 할인 적용 기준 금액보다 적은 경우
  잔여 결제 금액에 맞추어 프로모션 할인 금액이 차감되어 적용됩니다.

  - 예시 1 :
    프로모션 할인 조건이 `5천원 이상 결제시 10% 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5400원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 조정** 옵션을 선택한 경우 프로모션 조건에 부합하지 않아 실제 1400원이 결제 취소 요청되며,
    결제 완료 금액은 4000원이 됩니다.

  - 예시 2 :
    프로모션 할인 조건이 `5천원 이상 결제시 1000원 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5000원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 조정** 옵션을 선택한 경우 프로모션 조건에 부합하지 않아 실제 1000원이 결제 취소 요청되며,
    결제 완료 금액은 4000원이 됩니다.

- 프로모션 혜택 유지 : 결제 부분 취소시 잔여 결제 금액이 할인 적용 기준 금액보다 적더라도 프로모션 할인 혜택이
  그대로 유지됩니다. 할인 혜택을 동일한 수준으로 유지하기 위해 기존에 적용된 할인 조건을 할인율로 환산하여 적용하게 됩니다.

  - 예시 1 :
    프로모션 할인 조건이 `5천원 이상 결제시 10% 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5400원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 유지** 옵션을 선택한 경우 실제 1800원이 결제 취소 요청되며,
    결제 완료 금액은 3600원이 됩니다.
    (주문금액 6000원에서 2000원 부분 취소시 주문금액은 4000원이며 기존 할인 조건인 10% 할인이 유지되어 실 결제 금액은 3600원이 됩니다.)

  - 예시 2 :
    프로모션 할인 조건이 `5천원 이상 결제시 1000원 할인`일 때 6000원 결제 요청시 프로모션 할인이 적용되어 5000원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 유지** 옵션을 선택한 경우 실제 1800원이 결제 취소 요청되며,
    결제 완료 금액은 3200원이 됩니다.
    (본 예시에서 기존에 적용된 할인 조건인 `5천원 이상 결제시 1000원 할인`은 20% 할인으로 환산됩니다. 주문금액 6000원에서 2000원 부분 취소시
    남은 주문금액은 4000원이므로, 취소 이후 결제 완료 금액은 3200원이 되고 실제 취소 금액은 1800원이 됩니다.)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션 할인이 적용된 건에 여러번 부분 취소 요청하는 경우 안내 </summary>

프로모션 할인이 적용된 거래 건을 여러번 부분 취소하는 경우 처음 선택한 취소 옵션으로만 가능합니다.
예를 들어 \[프로모션 혜택 유지]로 처음 부분 취소한 경우 동일 거래 건에 대해 부분 취소를 진행하는 경우
\[프로모션 혜택 유지] 옵션으로만 취소가 가능합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->
