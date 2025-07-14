---
title: 모듈 로드 파라미터
description: PG사의 모듈 로딩에 필요한 파라미터 정보를 가져옵니다.
targetVersions:
  - v1
---

## 모듈로드 파라미터 정의

<div class="tabs-container">

<div class="tabs-content" data-title="모듈 로드 요청">

```ts title="Javascript SDK"
await IMP.loadModule(
  "moduleType",
  {
    userCode: "Merchant ID", //// Example: imp00000000
    tierCode: "Tier Code",
  },
  {
    //something loadModule option
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- moduleType: string

  **모듈 타입**

- userCode: string

  **고객사 식별코드**

  `IMP` 로 시작하는 고객사 식별코드입니다.

- tier\_code?: string

  **하위상점(Tier)의 고유코드**

  알파벳 대문자 또는 숫자 3자리입니다.

</details>

</div>

</div>
