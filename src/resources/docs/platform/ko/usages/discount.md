---
title: 할인 예시
description: ''
---

## 사전 조건

- 할인 정책 1 : 할인 금액 50% 파트너 분담

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
discount_payload = {
"id": "discount_2", #할인 아이디
"partnerShareRate": 50000, # 10^5기준, 50% 분담
"memo": "테스트 할인"
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

discount_A = requests.post('https://api.portone.io/platform/discount-share-policies', headers=headers, json=discount_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const discount_payload = {
  id: "discount_2", //할인 아이디
  partnerShareRate: 50000, // 10^5기준, 50% 분담
  memo: "테스트 할인",
};

axios
  .post(
    "https://api.portone.io/platform/discount-share-policies",
    discount_payload,
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
  "discountSharePolicy": {
    "id": "discount_2",
    "graphqlId": "MjpkaXNjb3VudF8y",
    "partnerShareRate": 50000,
    "memo": "테스트 할인",
    "isHidden": false,
    "appliedAt": "2023-08-13T10:41:02.385833Z"
  }
}
```

</div>

</div>
