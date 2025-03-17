---
title: 파트너 예시
description: ''
---

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
partner_payload = {
"id": "partnerA", # 파트너 아이디
"name": "파이썬 강사", # 파트너 이름 및 사업자명
"email": "admin@portone.io",
"businessRegistrationNumber": "1178178260", #파트너 사업자 등록번호. 필수는 아닙니다
"account": {
  "bank": "SHINHAN", # 파트너 계좌 은행. 국내 은행일경우 영문 대문자로 보내줘야 하며 이에대한 enum 값을 api문서에서 확인 가능합니다.
  "currency": "KRW", # 계좌 입금 통화
  "number": "10358907249", # 계좌 번호
  "holder": "김포트" # 예금주
},
"defaultContractId": "contractA", # 해당 파트너에게 적용하길 원하는 대표계약
"memo": "파트너 테스트 생성",
"tags": [
  "파이썬"
]
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

partner_A = requests.post('https://api.portone.io/platform/partners/', headers=headers, json=partner_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const partnerPayload = {
  id: "partnerA", // 파트너 아이디
  name: "파이썬 강사", // 파트너 이름 및 사업자명
  email: "admin@portone.io",
  businessRegistrationNumber: "1178178260", // 파트너 사업자 등록번호. 필수는 아닙니다
  account: {
    bank: "SHINHAN", // 파트너 계좌 은행. 국내 은행일경우 영문 대문자로 보내줘야 하며 이에 대한 enum 값을 api문서에서 확인 가능합니다.
    currency: "KRW", // 계좌 입금 통화
    number: "10358907249", // 계좌 번호
    holder: "김포트", // 예금주
  },
  defaultContractId: "contractA", // 해당 파트너에게 적용하길 원하는 대표계약
  memo: "파트너 테스트 생성",
  tags: ["파이썬"],
};

axios
  .post("https://api.portone.io/platform/partners", partnerPayload, {
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

### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "partner": {
    "id": "partnerA",
    "graphqlId": "NDpwYXJ0bmVyQQ==",
    "name": "파이썬 강사",
    "email": "admin@portone.io",
    "businessRegistrationNumber": "1178178260",
    "account": {
      "bank": "SHINHAN",
      "currency": "KRW",
      "number": "10358907249",
      "holder": "김포트",
      "status": "VERIFIED" // 계좌 인증 상태
    },
    "status": "APPROVED",
    "defaultContractId": "contractA",
    "memo": "파트너 테스트 생성",
    "tags": ["파이썬"],
    "isHidden": false,
    "appliedAt": "2023-08-11T11:19:58.829787Z"
  }
}
```

</div>

</div>
