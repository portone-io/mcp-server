---
title: Javascript SDK
description: 결제창 연동시 호출 및 응답 파라미터를 확인 할 수 있습니다.
targetVersions:
  - v1
---

포트원 JavaScript SDK를 사용하면 웹사이트 또는 앱에서 결제창 또는 본인인증창과 연동할 수 있습니다.

## SDK Library 로드하기 <a href="#sdk-library" id="sdk-library" />

**포트원 JavaScript SDK**를 사용하기 위해서 먼저 해당 라이브러리를 다음과 같이 페이지에 추가해야 합니다.
해당 라이브러리는 CDN **(<https://cdn.iamport.kr/js/iamport.payment-{SDK-최신버전}.js>**)을 통한
사용을 권장합니다. 라이브러리가 로드되면, **IMP** 전역 객체를 **window** 객체의 프로퍼티로 접근하여 **IMP**의 함수들을 호출할 수 있습니다.

```html title="HTML"
<!-- jQuery -->
<script
  type="text/javascript"
  src="https://code.jquery.com/jquery-1.12.4.min.js"
></script>
<!-- iamport.payment.js -->
<script
  type="text/javascript"
  src="https://cdn.iamport.kr/js/iamport.payment-{SDK-최신버전}.js"
></script>
```

<div class="hint" data-style="warning">

**jQuery 1.0 이상이 설치**되어 있어야 합니다.

</div>
