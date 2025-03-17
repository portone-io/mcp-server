---
title: V2 JavaScript SDK 설치하기
description: 웹 브라우저에서 결제창 연동 시 사용되는 SDK 설치 방법을 안내합니다.
targetVersions:
  - v2
---

포트원 V2 SDK는 npm 레지스트리와 CDN을 통해 배포되고 있습니다.

- npm, yarn 등 패키지 매니저를 사용한다면 의존
  대상으로 [@portone/browser-sdk](http://www.npmjs.com/package/@portone/browser-sdk)를 추가하세요.

- 패키지 매니저를 사용하지 않는다면 `<script>` 요소를 이용하여 CDN에서 SDK를 직접 불러오세요.

- CDN에서 ESM 모듈 형태로도 SDK를 제공하고 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="패키지 의존 대상으로 추가">

사용하는 패키지 매니저에 알맞은 명령어를 실행하세요.

```shell
npm i @portone/browser-sdk
```

```shell
yarn add @portone/browser-sdk
```

```shell
pnpm add @portone/browser-sdk
```

패키지 매니저로 SDK를 불러온 경우 `PortOne` 객체를 import해서 사용합니다.

```javascript
import * as PortOne from "@portone/browser-sdk/v2";
```

</div>

<div class="tabs-content" data-title="<script> 요소로 추가">

```html
<script src="https://cdn.portone.io/v2/browser-sdk.js"></script>
```

`<script>` 요소로 SDK를 불러온 경우 전역 객체 `window`에 `PortOne` 객체가 추가됩니다.

</div>

<div class="tabs-content" data-title="ESM 모듈로 추가">

ESM 모듈을 사용하는 경우 URL에서 `PortOne` 객체를 직접 import할 수 있습니다.

```javascript
import * as PortOne from "https://cdn.portone.io/v2/browser-sdk.esm.js";
```

</div>

</div>

<div class="hint" data-style="info">

**타입스크립트 지원**

포트원 V2 SDK는 타입스크립트 선언 파일(`.d.ts`)의 형식으로 타입 정보를 제공하고 있습니다. npm 레지스트리를 이용하는 경우 각종 개발 환경에서 별도 설정 없이 사용 가능합니다.

</div>
