---
title: 계약 예시
description: ''
---

## 사전 조건

| 계약|중개수수료|           정산주기           |
|:---:|:--------:|:----------------------------:|
|계약1|    10%   |D+2, 매월 31일, 전 영업일 기준|

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
contract_payload = {
"platformFee": {
  "fixedRate": 10000
  }, # 10% 수수료. 료율 표시 기준은 1/100000 입니다. 따라서 소수점 5자리까지 표시 가능합니다.
"platformFeeVatPayer": "PARTNER", # 부가세 부담 여부. 파트너 부담("PARTNER"), 파트너 미부담("MERCHANT") 가 있습니다.
"id": "contractA",
"memo": "contract A",
"settlementCycle": { #정산주기
  "lagDays": 2, #정산 지연일 (d+n)일
  "datePolicy": "HOLIDAY_BEFORE", # 전 영업일 기준
  "method": { #'daily','weekly','monthly' 'manualDates' 중 하나를 선택하셔야 합니다.
    'monthly':{
      "daysOfMonth":[31] # 매월 31일. 31일은 월말 기준으로 합니다.
      }
    }
  }
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

contract_A = requests.post('https://api.portone.io/platform/contracts/', headers=headers, json=contract_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
// 10% 수수료. 료율 표시 기준은 1/100000 입니다. 따라서 소수점 5자리까지 표시 가능합니다.
const contract_payload = {
  platformFee: { fixedRate: 10000 },
  // 부가세 부담 여부. 파트너 부담("PARTNER"), 파트너 미부담("MERCHANT") 가 있습니다.
  platformFeeVatPayer: "PARTNER",
  id: "contractA",
  memo: "contract A",
  //정산주기
  settlementCycle: {
    //정산 지연일 (d+n)일
    lagDays: 2,
    // 전 영업일 기준
    datePolicy: "HOLIDAY_BEFORE",
    // 'daily','weekly','monthly' 'manualDates' 중 하나를 선택하셔야 합니다.
    method: {
      // 매월 31일. 31일은 월말 기준으로 합니다.
      monthly: { daysOfMonth: [31] },
    },
  },
};

axios
  .post("https://api.portone.io/platform/contracts", contract_payload, {
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
  "contract": {
    "id": "contractA",
    "graphqlId": "NTpjb250cmFjdEE=",
    "memo": "contract A",
    "platformFee": {
      "type": "FIXED_RATE",
      "rate": 10000
    },
    "settlementCycle": {
      "lagDays": 2,
      "datePolicy": "HOLIDAY_BEFORE",
      "method": {
        "type": "MONTHLY",
        "daysOfMonth": [31]
      }
    },
    "platformFeeVatPayer": "PARTNER",
    "isHidden": false,
    "appliedAt": "2023-08-11T11:18:52.944447Z" // 업데이트 된 순간을 뜻합니다. 추후 해당 계약에대한 업데이트가 있을 때 해당 시점을 보여줍니다.
  }
}
```

</div>

</div>
