---
title: 주문정산 예시
description: ''
---

## 주문 정산 생성

주문 정산을 생성하는 예시입니다.

### 사전 조건

- 주문금액 : 10,000원
- 결제금액 : 10,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
import requests
# ... 결제 요청 및 결제 완료 로직 생략. 포트원 결제일경우 https://developers.portone.io/opi/ko/authpay/guide?v=v2 를 참고하세요

# 주문 정산 요청

orderTransferData = {
"partnerId": "partner_A", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_1", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
"orderAmount": 10000,
},
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 주문 정산 요청
const orderTransferData = {
  partnerId: "partner_A", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_1", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000,
  },
  settlementStartDate: null, // 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

axios
  .post("https://api.portone.io/platform/transfer/order", orderTransferData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7MCX58SGYCNVN1CWY3HXM6D",
    "graphqlId": "NjowMUg3TUNYNThTR1lDTlZOMUNXWTNIWE02RA==",
    "partner": {
      // 파트너 정보 생략
    },
    "status": "IN_PROCESS", // 정산 상태값. 정산 api 문서에서 보다 자세하게 확인하실 수 있습니다.
    "settlementDate": "2023-08-31", //정산일
    "settlementCurrency": "KRW", //포트원 결제 통화를 따릅니다.
    "isForTest": false,
    "amount": {
      "settlement": 8900, //최종 정산금액
      "payment": 10000, //결제금액
      "order": 10000, //주문금액
      "platformFee": 1000, //중개 수수료 10%
      "platformFeeVat": 100, //중개수수료 부가세
      "additionalFee": 0, //추가 수수료
      "additionalFeeVat": 0, //추가 수수료 부가세
      "discount": 0, //할인금액
      "discountShare": 0 //할인금액 중 파트너가 부담하는 금액
    },
    "contract": {
      //적용된 계약 정보. 파트너 A의 대표 계약이 적용됩니다.
      "id": "contractA",
      "graphqlId": "NTpjb250cmFjdEE=",
      "memo": "contract A",
      "platformFee": {
        "type": "FIXED_RATE",
        "rate": 10000
      },
      "payment": {
        "id": "payment_1",
        "orderName": "string",
        "currency": "KRW",
        "method": {
          "card": {}
        },
        "paidAt": "2023-08-11T08:21:01.241Z"
      }
    },
    "settlementStartDate": "2023-08-11", //기본값으로 결제 완료 시점을 따릅니다.
    "orderLines": [],
    "additionalFees": [],
    "discounts": []
  }
}
```

</div>

</div>

## 주문 취소 정산 등록

주문 정산건에 대해서 주문 취소가 일어났을 때 주문취소 정산을 등록하는 예시입니다.

### 사전 조건

- 취소금액 : 5,000원
- 결제 취소금액 : 5,000원
- 판매 파트너 : A
- 정산시작일 (결제 취소 완료 시점): 2023-08-12

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
# 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
# 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
# ... 중략....

# 주문취소 정산 요청
orderCancelTransferData ={
  "partnerId": "partner_A",
  "paymentId": "payment_1", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  "cancellationId": "cancellation_1", # 포트원 결제시 결제 취소 아이디
  "orderDetail": {
  "orderAmount": 5000,
  },
  "settlementStartDate": None, #결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  "isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderCancelTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderCancelTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
// 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
// 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
// ... 중략....

// 주문취소 정산 요청
const orderCancelTransferData = {
  partnerId: "partner_A",
  paymentId: "payment_1", // 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  cancellationId: "cancellation_1", // 포트원 결제시 결제 취소 아이디
  orderDetail: {
    orderAmount: 5000,
  },
  settlementStartDate: null, // 결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

axios
  .post(
    "https://api.portone.io/platform/transfer/order",
    orderCancelTransferData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `PortOne ${PORTONE_API_SECRET}`,
      },
    },
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER_CANCEL",
    "id": "01H7J87XQ4JAS28RWZBC29YCJ1",
    "graphqlId": "NjowMUg3Sjg3WFE0SkFTMjhSV1pCQzI5WUNKMQ==",
    "partner": {
      // 파트너 정보 생략 ...
    },
    "status": "SCHEDULED", // 정산 상태값. 미래 시점인경우 SCHEDULED 상태입니다.
    "settlementDate": "2023-08-3", //정산일
    "settlementCurrency": "KRW", //포트원 결제 통화를 따릅니다.
    "isForTest": false,
    "amount": {
      "settlement": 4450, //최종 정산취소금액
      "payment": 5000, //결제 취소 금액
      "order": 5000, //주문 취소 금액
      "platformFee": 500, //중개 수수료 10%
      "platformFeeVat": 50, //중개수수료 부가세
      "additionalFee": 0, //추가 수수료
      "additionalFeeVat": 0, //추가 수수료 부가세
      "discount": 0, //할인금액
      "discountShare": 0 //할인금액 중 파트너가 부담하는 금액
    },
    "contract": {
      //계약 정보 생략 ...
    },
    "payment": {
      "id": "payment_1",
      "orderName": "string",
      "currency": "KRW",
      "method": {
        "card": {}
      },
      "paidAt": "2023-08-11T08:21:01.241Z"
    }
  },
  "settlementStartDate": "2023-08-12", //기본값으로 결제 취소 시점을 따릅니다.
  "orderLines": [],
  "additionalFees": [],
  "discounts": [],
  "cancellation": {
    // 결제 취소 정보
    "id": "cancellation_1",
    "cancelledAt": "2023-08-12T11:57:15.292Z"
  }
}
```

</div>

</div>

## 상품 정보를 통한 주문 정산

상품 정보를 통한 주문 정산을 생성하는 예시입니다.

### 사전 조건

- 주문금액 : 14,000원
- 결제금액 : 14,000원
- 판매 파트너 : A, 정산시작일 (결제완료 시점): 2023-08-11

|상품|  가격 |갯수|
|:--:|:-----:|:--:|
|  A |2,000원| 5개|
|  B |4,000원| 1개|

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# 주문정산과 차이나는 부분만 기재하였습니다.
orderTransferData ={
  # 생략 ...
  "orderDetail":{
    "orderLines":[
      {
        "product": {
          "id": "product_A", # 상품아이디
          "name": "상품 A", # 상품명
          "amount": 2000, # 상품 가격
          "tag": "과일", # 상품 태그 에시
        },
        "quantity": 5,
        "discounts": [], # 해당 상품에만 적용되는 할인정보
        "additionalFees": [], # 해당 상품에만 적용되는 추가 수수료 정보
      },
      {
        "product": {
          "id": "product_B", # 상품아이디
          "name": "상품 B", # 상품명
          "amount": 4000, # 상품 가격
          "tag": "과일", # 상품 태그 예시
        },
        "quantity": 1,
        "discounts": [], # 해당 상품에만 적용되는 할인정보
        "additionalFees": [], # 해당 상품에만 적용되는 추가 수수료 정보
      }
    ]
  }
# 생략 ...
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 위 주문정산1과 차이나는 부분만 기재하였습니다.
const orderTransferData = {
  // ... 생략 ...
  orderDetail: {
    orderLines: [
      {
        product: {
          id: "product_A", // 상품 아이디
          name: "상품 A", // 상품 명
          amount: 2000, // 상품 가격
          tag: "과일", // 상품 태그 에시
        },
        quantity: 5,
        discounts: [], // 해당 상품에만 적용되는 할인정보
        additionalFees: [], // 해당 상품에만 적용되는 추가 수수료 정보
      },
      {
        product: {
          id: "product_B", // 상품 아이시
          name: "상품 B", // 상품 명
          amount: 4000, // 상품 가격
          tag: "과일", // 상품 태그 예시
        },
        quantity: 1,
        discounts: [], // 해당 상품에만 적용되는 할인정보
        additionalFees: [], // 해당 상품에만 적용되는 추가 수수료 정보
      },
    ],
  },
  // ... 생략 ...
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

axios
  .post("https://api.portone.io/platform/transfer/order", orderTransferData, {
    headers: headers,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7MCX58SGYCNVN1CWY3HXM6D",
    "graphqlId": "NjowMUg3TUNYNThTR1lDTlZOMUNXWTNIWE02RA==",
    "partner": {
      // 파트너 정보 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      // 전체 주문건에 대한 정산정보
      "settlement": 12460, // 전체 주문건에 대한 정산 금액
      "payment": 14000,
      "order": 14000,
      "platformFee": 1400,
      "platformFeeVat": 140,
      "additionalFee": 0,
      "additionalFeeVat": 0,
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      //계약 정보 생략
    },
    "payment": {
      "id": "payment_1",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [
      // 상품별 주문 및 정산정보
      {
        "product": {
          "id": "product_A",
          "name": "상품 A",
          "amount": 2000,
          "tag": "과일"
        },
        "quantity": 5,
        "discounts": [],
        "additionalFees": [],
        "amount": {
          //상품 별 정산정보. 참고로 전체 주문에대한 할인 및 추가수수료 정보는 전체 주문건에 대한 정산정보에 포함됩니다.
          "settlement": 8900,
          "payment": 10000,
          "order": 10000,
          "platformFee": 1000,
          "platformFeeVat": 100,
          "additionalFee": 0,
          "additionalFeeVat": 0,
          "discount": 0,
          "discountShare": 0
        }
      },
      {
        "product": {
          "id": "product_B",
          "name": "상품 B",
          "amount": 4000,
          "tag": "과일"
        },
        "quantity": 1,
        "discounts": [],
        "additionalFees": [],
        "amount": {
          "settlement": 3560,
          "payment": 4000,
          "order": 4000,
          "platformFee": 400,
          "platformFeeVat": 40,
          "additionalFee": 0,
          "additionalFeeVat": 0,
          "discount": 0,
          "discountShare": 0
        }
      }
    ],
    "additionalFees": [], //전체 주문건에 대한 추가 수수료 정문
    "discounts": [] //전체 주문건에 대한 할인정보
  }
}
```

</div>

</div>

## 상품 정보를 통한 주문 취소 정산

상품 정보를 통한 주문 취소 정산을 등록하는 예시입니다.

### 사전 조건

- 주문취소 금액 : 4,000원
- 취소 상품 A 가격: 2,000
- 취소 갯수: 2개
- 결제 취소금액 4,000원

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
# 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
# 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
# ... 중략....

# 주문취소 정산 요청
orderCancelTransferData ={
  "partnerId": "partner_A",
  "paymentId": "payment_1", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  "cancellationId": "cancellation_1", # 포트원 결제시 결제 취소 아이디
  "orderDetail": {
  "orderAmount": 4000,
  "orderLines": [
    {
    "productId": "product_A", # 상품 A 아이디
    "quantity": "2" # 상품 취소 갯수
  }
],
  },
  "settlementStartDate": None, #결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  "isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderCancelTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderCancelTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
// 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
// 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
// ... 중략....

// 주문취소 정산 요청
const orderCancelTransferData = {
  partnerId: "partner_A",
  paymentId: "payment_1", // 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  cancellationId: "cancellation_1", // 포트원 결제시 결제 취소 아이디
  orderDetail: {
    orderAmount: 5000,
    orderLines: [
      {
        productId: "product_A", // 상품 A 아이디
        quantity: "2", // 상품 취소 갯수
      },
    ],
  },
  settlementStartDate: null, // 결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

axios
  .post(
    "https://api.portone.io/platform/transfer/order",
    orderCancelTransferData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `PortOne ${PORTONE_API_SECRET}`,
      },
    },
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER_CANCEL",
    "id": "01H7J87XQ4JAS28RWZBC29YCJ1",
    "graphqlId": "NjowMUg3Sjg3WFE0SkFTMjhSV1pCQzI5WUNKMQ==",
    "partner": {
      // 파트너 정보 생략 ...
    },
    "status": "SCHEDULED", // 정산 상태값. 미래 시점인경우 SCHEDULED 상태입니다.
    "settlementDate": "2023-08-3", //정산일
    "settlementCurrency": "KRW", //포트원 결제 통화를 따릅니다.
    "isForTest": false,
    "amount": {
      "settlement": 3560, //최종 정산취소금액
      "payment": 4000, //결제 취소 금액
      "order": 4000, //주문 취소 금액
      "platformFee": 400, //중개 수수료 10%
      "platformFeeVat": 40, //중개수수료 부가세
      "additionalFee": 0, //추가 수수료
      "additionalFeeVat": 0, //추가 수수료 부가세
      "discount": 0, //할인금액
      "discountShare": 0 //할인금액 중 파트너가 부담하는 금액
    },
    "contract": {
      //계약 정보 생략 ...
    },
    "payment": {
      "id": "payment_1",
      "orderName": "string",
      "currency": "KRW",
      "method": {
        "card": {}
      },
      "paidAt": "2023-08-11T08:21:01.241Z"
    }
  },
  "settlementStartDate": "2023-08-12", //기본값으로 결제 취소 시점을 따릅니다.
  "orderLines": [],
  "additionalFees": [],
  "discounts": [],
  "cancellation": {
    // 결제 취소 정보
    "id": "cancellation_1",
    "cancelledAt": "2023-08-12T11:57:15.292Z"
  }
}
```

</div>

</div>

## 주문 : 정산 파트너가 1:N일 때

정산 API는 현재 1명의 파트너에 대해 1개의 정산건만 지원하고 있습니다.

따라서 단일 주문에 여러 파트너가 정산을 해야한다면 파트너의 주문금액 기준으로 정산건을 분리하여 별도의
정산건을 생성하셔야 합니다.

이는 orderLines를 통한 정산API에도 동일하게 적용됩니다.

(추후 상품관리 기능을 통해 각 상품별 정산 파트너를 지정할 수 있도록 개선할 예정입니다.)

### 사전 조건

- 전체 주문금액 : 10,000원
- 결제금액 10,000원
- 판매 파트너 A, B
- 파트너 A 할당 주문금액 5,000원
- 파트너 B 할당 주문금액 5,000원

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# ... 결제 요청 및 결제 완료 로직 생략. 포트원 결제일경우 https://developers.portone.io/opi/ko/authpay/guide?v=v2 를 참고하세요

# 주문건에 대해서 주문금액 기준으로 직접 파트너별로 분리하여 정산건을 생성합니다.

orderTransferData_A ={
"partnerId": "partner_A", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_3", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
"orderAmount": 5000,
},
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse_A =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData_A)

orderTransferData_B ={
"partnerId": "partner_B", # 파트너 B 파트너 아이디 등록 가정
"paymentId": "payment_3", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
"orderAmount": 5000,
},
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": False # 테스트 정산 여부
}

orderTransferResponse_B =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData_B)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
// ... 결제 요청 및 결제 완료 로직 생략. 포트원 결제일경우 https://developers.portone.io/opi/ko/authpay/guide?v=v2 를 참고하세요
// 주문건에 대해서 주문금액 기준으로 직접 파트너별로 분리하여 정산건을 생성합니다.

const orderTransferData_A = {
  partnerId: "partner_A", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_3", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 5000,
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

const orderTransferData_B = {
  partnerId: "partner_B", // 파트너 B 파트너 아이디 등록 가정
  paymentId: "payment_3", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 5000,
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function sendOrderTransfer(data) {
  try {
    const response = await axios.post(
      "https://api.portone.io/platform/transfer/order",
      data,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error sending order transfer:", error);
  }
}

(async () => {
  const orderTransferResponse_A = await sendOrderTransfer(orderTransferData_A);
  console.log(orderTransferResponse_A);

  const orderTransferResponse_B = await sendOrderTransfer(orderTransferData_B);
  console.log(orderTransferResponse_B);
})();
```

</div>

</div>

## 주문 정산 할인 반영

할인 정책 생성은 쿠폰 또는 포인트와 같은 할인 유형에 대해서 분담율을 설정하신 후 생성 하실 수 있습니다.

할인 정책 생성은 콘솔이나 api를 통해서 하실 수 있습니다. 생성 후 `discounts` 파라미터에 `sharePolicyId`
와 `amount` (할인금액)을 전달하시면 됩니다.

### 사전 조건

- 주문금액 : 10,000원
- 할인금액 :2,000원
- 결제금액 : 8,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 할인 정책: 파트너 분담율 50%

### 샘플코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_4", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
    "orderAmount": 10000, # 주문금액
  },
"settlementStartDate": None, # 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
"discounts": [ # 주문에 적용될 할인 정책. 리스트로써 할인 유형별 여러개를 전달하실 수 있습니다.
  {
    "sharePolicyId": "discount_2", # 할인 정책 아이디
    "amount": 2000 # 할인 금액
  }
]
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransfer_A = request.post ('https://api.portone.io/platform/transfers/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransfer_payload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_4", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
  discounts: [
    // 주문에 적용될 할인 정책. 할인 유형별 여러개를 전달하실 수 있습니다.
    {
      sharePolicyId: "discount_2", // 할인 정책 아이디
      amount: 2000, // 할인 금액
    },
  ],
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function post_platform_api(endpoint, payload) {
  try {
    const response = await axios.post(
      `https://api.portone.io/${endpoint}`,
      payload,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error posting to platform API:", error);
  }
}

(async () => {
  const orderTransfer_A = await post_platform_api(
    "platform/transfers/order",
    orderTransfer_payload,
  );
  console.log(orderTransfer_A);
})();
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7Q7WKY98R1TKM8XBHSQ1J6F",
    "graphqlId": "NjowMUg3UTdXS1k5OFIxVEtNOFhCSFNRMUo2Rg==",
    "partner": {
      // 파트너 정보 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      //주문건 정산 정보
      "settlement": 7900, // 정산금액
      "payment": 8000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 0,
      "additionalFeeVat": 0,
      "discount": 2000, // 적용된 할인금액
      "discountShare": 1000 //파트너가 부담할 할인금액 (할인 정책의 파트너 분담율이 50% 이기 때문에)
    },
    "contract": {
      // 계약 정보 생략
    },
    "payment": {
      "id": "payment_4",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [],
    "additionalFees": [],
    "discounts": [
      //적용된 할인 정보
      {
        "sharePolicy": {
          //적용된 할인 정책
          "id": "discount_2",
          "graphqlId": "MjpkaXNjb3VudF8y",
          "partnerShareRate": 50000,
          "memo": "테스트 할인",
          "isHidden": false,
          "appliedAt": "2023-08-13T10:41:02.385833Z"
        },
        "amount": 2000,
        "shareAmount": 1000
      }
    ]
  }
}
```

</div>

</div>

## 주문 정산 상품 할인 반영

주문 전체가 아닌 특정 상품에대해서 할인 정책을 적용하고 싶으시면 orderLines 의 각 상품 항목의 discounts 파라미터에 전달하시면 됩니다.

### 사전 조건

- A 상품 금액 : 10,000원
- A 상품 할인금액 : 2000원
- 구매 갯수 : 2개
- 결제금액 : 16,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 할인 정책: 파트너 분담율 50%

### 샘플코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_4", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
    "orderAmount": 20000, # 주문금액
    "orderLines": [
    {
      "product": {
        "id": "product_A",
        "name": "A상품",
        "amount": 10000
      },
      "quantity": 2,
      "discounts": [
        {
          "sharePolicyId": "discount_2", # 할인 정책 아이디
          "amount": 2000 # 할인 금액
        }
      ],
     }
    ]
  },
"settlementStartDate": None, # 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
}

 headers = {
  'Authorization': f'PortOne ${PORTONE_API_SECRET}',
  'Content-Type': 'application/json'
}
orderTransfer_A = requests.post ('https://api.portone.io/platform/transfers/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransfer_payload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_4", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
    orderLines: [
      {
        product: {
          id: "product_A",
          name: "A상품",
          amount: 10000,
        },
        quantity: 2,
        discounts: [
          {
            sharePolicyId: "discount_2", // 할인 정책 아이디
            amount: 2000, // 할인 금액
          },
        ],
      },
    ],
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function post_platform_api(endpoint, payload) {
  try {
    const response = await axios.post(
      `https://api.portone.io/${endpoint}`,
      payload,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error posting to platform API:", error);
  }
}

(async () => {
  const orderTransfer_A = await post_platform_api(
    "platform/transfers/order",
    orderTransfer_payload,
  );
  console.log(orderTransfer_A);
})();
```

</div>

</div>

## 주문 정산 추가 수수료 반영

추가수수료 정책 생성 은 로켓배송, 마케팅채널 수수료 등 특정 주문건에 적용되는 수수료 입니다.
관리자 콘솔이나 API를 통해서 적용하실 수 있습니다.
`additionalFees` 파라미터에 `policyId` 를 전달하시면 됩니다.

### 사전 조건

- 주문금액 : 10,000원
- 추가수수료(로켓배송) : 2,000원
- 결제금액 : 8,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 추가 수수료 정책: 수수료율 5%, 부가세 파트너 부담

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_5", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
    "orderAmount": 10000, # 주문금액
  },
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
"additionalFees": [ # 주문에 추가수수료 정책들. 리스트로써 여러개를 전달하실 수 있습니다.
  {
    "policyId": "addtional_fee_3", # 추가수수료 정책 아이디
  }
]
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransfer_A =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

async function postPlatformApi(endpoint, payload) {
  const baseURL = "https://api.portone.io/";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
  };

  try {
    const response = await axios.post(baseURL + endpoint, payload, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

const orderTransferPayload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_5", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
  additionalFees: [
    // 주문에 추가수수료 정책들. 리스트로써 여러개를 전달하실 수 있습니다.
    {
      policyId: "addtional_fee_3", // 추가수수료 정책 아이디
    },
  ],
};

// Using the function
(async () => {
  const orderTransferA = await postPlatformApi(
    "platform/transfers/order",
    orderTransferPayload,
  );
  console.log(orderTransferA);
})();
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7QEET738MFFY40NP4V7WW4V",
    "graphqlId": "NjowMUg3UUVFVDczOE1GRlk0ME5QNFY3V1c0Vg==",
    "partner": {
      //파트너 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      //주문건 정산 정보
      "settlement": 8350,
      "payment": 10000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 500, //추가수수료
      "additionalFeeVat": 50, //추가수수료 부가세
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      // 계약 생약
    },
    "payment": {
      "id": "payment_5",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [],
    "additionalFees": [
      // 적용된 추가수수료 정책 정보
      {
        "policy": {
          "id": "addtional_fee_3",
          "graphqlId": "MzphZGR0aW9uYWxfZmVlXzM=",
          "fee": {
            "type": "FIXED_RATE",
            "rate": 5000
          },
          "memo": "테스트 추가수수료",
          "vatPayer": "PARTNER",
          "isHidden": false,
          "appliedAt": "2023-08-13T12:31:50.822913Z"
        },
        "amount": 500,
        "vat": 50
      }
    ],
    "discounts": []
  }
}
```

</div>

</div>

## 주문 정산 상품별 추가 수수료 반영

주문 전체가 아닌 특정 상품에대해서 할인 정책영 적용하고 싶으시면 `orderLines` 의 각 상품 항목의
`additionalFees` 파라미터에 전달하시면 됩니다.

### 사전 조건

- A 상품 금액 : 10,000원
- A 상품 갯수 : 2개
- A 추가수수료(로켓배송) : 2,000원
- 결제금액 : 16,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 추가 수수료 정책: 수수료율 5%, 부가세 파트너 부담

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_5", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
  "orderAmount": 20000, # 주문금액
    "orderLines": [{
      "product": {
        "id": "product_A",
        "name": "A상품",
        "amount": 10000
      },
      "quantity": 2,
      "additionalFees": [{
          "policyId": "fee_1" # 상품별 추가 수수료 정책
          }
        ]
      }
    ]
  },
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransfer_A =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

async function postPlatformApi(endpoint, payload) {
  const baseURL = "https://api.portone.io/";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
  };

  try {
    const response = await axios.post(baseURL + endpoint, payload, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

const orderTransferPayload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_5", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
    orderLines: [
      {
        product: {
          id: "product_A",
          name: "A상품",
          amount: 10000,
        },
        quantity: 2,
        additionalFees: [
          {
            policyId: "fee_1", // 상품별 추가 수수료 정책
          },
        ],
      },
    ],
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

// Using the function
(async () => {
  const orderTransferA = await postPlatformApi(
    "platform/transfers/order",
    orderTransferPayload,
  );
  console.log(orderTransferA);
})();
```

</div>

</div>

## 포트원 결제가 아닌 주문 정산

`externalPaymentDetail` 에 결제정보를 전달주시면 됩니다. `paymentId` 는 고객사에서 사용한 고유
주문번호를 전달해주시면 됩니다.

### 예시 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_5", # 고객사 주문번호
"orderDetail": {
    "orderAmount": 10000, # 주문금액
  },
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
"externalPaymentDetail": { # 포트원 결제가 아닌 주문 정산시 전달하시면 됩니다.
    "currency": "KRW", # 결제 통화 정보
    "orderName": "테스트 주문",
    "paidAt": "2023-08-11T08:21:01.241Z", # 결제 완료 시점. settlementStartDate을 전달하지 않으실경우 꼭 전달하셔야 됩니다.
    "method": {
      "card": {},
    }
  },
"additionalFees": [ # 주문에 추가수수료 정책들. 여러개를 전달하실 수 있습니다.
  {
    "policyId": "addtional_fee_3", # 추가수수료 정책 아이디
  }
]
}

orderTransfer_A = request.post ('https://api.portone.io/platform/transfers/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransferPayload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_5", // 고객사 주문번호
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  // 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  settlementStartDate: null,
  isForTest: false, // 테스트 정산 여부
  externalPaymentDetail: {
    // 포트원 아닌 결제건 정보
    currency: "KRW",
    orderName: "테스트 주문",
    paidAt: "2023-08-11T08:21:01.241Z",
    method: {
      card: {},
    },
  },
  additionalFees: [
    // 주문에 추가수수료 정책들
    {
      policyId: "addtional_fee_3", // 추가수수료 정책 아이디
    },
  ],
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function postPlatformApi(endpoint, data) {
  try {
    const response = await axios.post(endpoint, data, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting to API:", error);
    return null;
  }
}

const orderTransferA = postPlatformApi(
  "platform/transfers/order",
  orderTransferPayload,
);
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7QEET738MFFY40NP4V7WW4V",
    "graphqlId": "NjowMUg3UUVFVDczOE1GRlk0ME5QNFY3V1c0Vg==",
    "partner": {
      //파트너 정보 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      "settlement": 8350,
      "payment": 10000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 500,
      "additionalFeeVat": 50,
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      //계약 정보 생략
    },
    "payment": {
      "type": "EXTERNAL", //포트원 결제가 아닐경우 결제일 경우 EXTERNAL로 표기됩니다.
      "id": "payment_5",
      "orderName": "테스트 주문",
      "currency": "KRW",
      "method": {
        "type": "CARD"
      },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [],
    "additionalFees": [
      // 추가수수료 정보 생략
    ],
    "discounts": []
  }
}
```

</div>

</div>

## 정산 시작일을 지정해서 보내는 경우

정산고려를 배달완료, 수강오픈, 이용완료 등의 시점부터 하고 싶으시면 `settlementStartDate` 파라미터에
해당시점을 `YYYY-MM-DD`형식으로 전달하시면 됩니다.

해당 시점이 정해졌을 때 정산 api를 호출하시면 됩니다.

### 예시 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_6", # 포트원 결제시 가맹점 주문번호 (merchant_uid)
"orderDetail": {
  "orderAmount": 10000, # 주문금액
},
"settlementStartDate": '2023-09-01', # 배송완료 시점 (예시)
"isForTest": false, # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransfer_payload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_6", // 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  settlementStartDate: "2023-09-01", // 배송완료 시점 (예시)
  isForTest: false, // 테스트 정산 여부
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function sendOrderTransfer(data) {
  try {
    const response = await axios.post(
      "https://api.portone.io/platform/transfer/order",
      data,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error sending order transfer:", error);
  }
}
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7QHWNSNHCT9RF9GYKSKXRBZ",
    "graphqlId": "NjowMUg3UUhXTlNOSENUOVJGOUdZS1NLWFJCWg==",
    "partner": {
      //파트너 정보 생략
    },
    "status": "SCHEDULED", // 정산 시작일이 미래이므로 SCHEDULED 상태로 표기됩니다.
    "settlementDate": "2023-09-27", //설날을 고려하여 그 전 영업일이 됐습니다.
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      "settlement": 8900,
      "payment": 10000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 0,
      "additionalFeeVat": 0,
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      // 계약 정보 생약
    },
    "payment": {
      "id": "payment_6",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-09-01",
    "orderLines": [],
    "additionalFees": [],
    "discounts": []
  }
}
```

</div>

</div>
