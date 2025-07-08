---
title: JavaScript SDK
description: 결제창 연동시 호출 및 응답 파라미터를 확인 할 수 있습니다.
targetVersions:
  - v1
versionVariants:
  v2: /sdk/ko/v2-sdk/readme
---

<div class="hint" data-style="info">

기존에 사용하신 JavaScript SDK의 문서를 원하시면 [javascript-sdk-old](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme)를 참고해주세요.

</div>

## SDK Library 로드하기 <a href="#sdk-library" id="sdk-library" />

**포트원 JavaScript SDK**를 사용하기 위해서 SDK Script Tag를 다음과 같이 페이지 HTML에 추가해야
합니다. 라이브러리가 로드되면, **IMP** 전역 객체를 **window** 객체의 프로퍼티로 접근하여 **IMP**의
함수들을 호출할 수 있습니다.

```html title="HTML"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

## 기존에 사용하시던 SDK를 업데이트하시는 경우

### 1. jQuery 의존성 삭제

더 이상 포트원 SDK를 사용하기 위해 jQuery를 추가하실 필요가 없습니다.\
고객사 페이지에서 **jQuery를 추가로 사용하지 않으시는 경우 jQuery 의존성을 삭제해주세요.**

### **2. request\_pay 응답 객체에 \`success\`가 포함되지 않습니다.**

기존에 제공되는 `success` 또는 `imp_success` 프로퍼티는 결제 성공 여부가 아닌 내부 트랜잭션 정상
종료 여부를 나타냈기에 의미가 모호하여 응답에 포함되지 않도록 수정되었습니다.

<div class="hint" data-style="danger">

**success**나 **error\_code**는 **결제 성공 여부를 나타내지 않습니다.**

포트원 REST API로 [결제 상세 내역을 조회](https://developers.portone.io/api/rest-v1/payment?v=v1#get%20%2Fpayments%2F%7Bimp_uid%7D)해야 결제 성공 여부를 받을 수 있습니다.

자세한 내용은 [인증 결제 연동하기 - 결제 완료 처리하기](https://developers.portone.io/opi/ko/integration/start/v1/auth?v=v1#4-결제-완료-처리하기-)를 참고해주세요.

</div>
