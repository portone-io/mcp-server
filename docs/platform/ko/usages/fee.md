---
title: 추가 수수료 예시
description: ''
---

## 사전 조건

- 추가수수료 정책 1 : 추가수수료 5% 파트너 분담

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
additionalfees_payload = {
  "id": "addtional_fee_3",
  "fee": {
    "fixedRate": 5,
  },
  "memo": "테스트 추가수수료",
  "vatPayer": "PARTNER"
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

fee_A = requests.post('https://api.portone.io/platform/additional-fee-policies', headers=headers, json=additionalfees_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const additionalfees_payload = {
  id: "addtional_fee_3", //추가 수수료 아이디
  fee: {
    fixedRate: 5, // 5%분담
  },
  memo: "테스트 추가수수료",
  vatPayer: "PARTNER",
};

axios
  .post(
    "https://api.portone.io/platform/additional-fee-policies",
    additionalfees_payload,
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

### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "additionalFeePolicy": {
    "id": "addtional_fee_3",
    "graphqlId": "MzphZGR0aW9uYWxfZmVlXzM=",
    "fee.type": "FIXED_RATE",
    "fee.rate": 5,
    "memo": "테스트 추가수수료",
    "vatPayer": "PARTNER",
    "isHidden": false,
    "appliedAt": "2023-08-13T12:31:50.822913Z"
  }
}
```

</div>

</div>
