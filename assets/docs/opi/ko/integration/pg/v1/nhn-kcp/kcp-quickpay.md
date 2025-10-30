---
title: KCP 퀵페이 (자체 간편결제)
description: NHN KCP 퀵페이 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 퀵페이 (자체 간편 결제)

### 퀵페이 호출하기

퀵페이의 경우 결제 기능을 포함하여 결제수단 등록 및 삭제, PIN 변경 및 초기화, 탈퇴 기능을 지원합니다.

KCP 퀵페이 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="결제수단 등록">

간편결제 서비스 결제수단을 등록합니다. 최초 결제수단 등록 시 간편결제 서비스 등록이 진행됩니다.

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001",
    name: "결제수단 등록",
    customer_uid: "use_your_unique_id_with_pay_method_0",
    bypass: {
      kcpQuick: {
        actionType: "Register",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

<div class="tabs-content" data-title="결제수단 삭제">

등록된 간편결제 서비스 결제수단을 삭제합니다.

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001",
    name: "결제수단 삭제",
    customer_uid: "use_your_unique_id_with_pay_method_0",
    bypass: {
      kcpQuick: {
        actionType: "Deregister",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="결제 요청">

등록된 간편결제 결제수단을 사용하여 결제를 진행합니다.

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //즉시 출금 이용 시 'trans' 입력
    merchant_uid: "order_no_0001",
    name: "결제",
    amount: 1000,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    customer_uid: "use_your_unique_id_with_pay_method_0",
    bypass: {
      kcpQuick: {
        actionType: "Pay",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="PIN 변경">

간편결제 서비스의 PIN을 변경합니다.

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001",
    name: "PIN 변경",
    customer_uid: "use_your_unique_id", //`bypass.kcpQuick.memberId`와 동일하게 입력
    bypass: {
      kcpQuick: {
        actionType: "PinChange",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

<div class="tabs-content" data-title="PIN 초기화">

간편결제 서비스의 PIN을 초기화합니다. 기존 등록된 모든 결제수단이 삭제됩니다.

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001",
    name: "PIN 초기화",
    customer_uid: "use_your_unique_id", // `bypass.kcpQuick.memberId`와 동일하게 입력
    bypass: {
      kcpQuick: {
        actionType: "PinReset",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

<div class="tabs-content" data-title="PIN 확인">

간편결제 서비스의 PIN을 확인합니다.

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001",
    name: "PIN 확인",
    customer_uid: "use_your_unique_id", // `bypass.kcpQuick.memberId`와 동일하게 입력
    bypass: {
      kcpQuick: {
        actionType: "PinCheck",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="등록된 전화번호 변경">

간편결제 서비스에 등록된 전화번호를 변경합니다.

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001",
    name: "전화번호 변경",
    customer_uid: "use_your_unique_id", // `bypass.kcpQuick.memberId`와 동일하게 입력
    bypass: {
      kcpQuick: {
        actionType: "PhoneChange",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="선불머니+간편결제 서비스 유저 등록">

선불머니와 간편결제 서비스를 함께 이용할 수 있도록 유저를 등록합니다. 기 간편결제 서비스 유저에서 호출 시 선불머니 서비스 가입으로 진행합니다.

<div class="hint" data-style="warning">

이 기능은 KCP와 사전 협의된 특정 고객만 사용 가능합니다.

</div>

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001",
    name: "선불머니+간편결제 서비스 유저 등록",
    bypass: {
      kcpQuick: {
        actionType: "SignUp",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="간편결제 서비스 해지">

간편결제 서비스를 해지합니다. 등록된 모든 결제수단이 삭제됩니다.

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001",
    name: "간편결제 서비스 해지",
    customer_uid: "use_your_unique_id", //`bypass.kcpQuick.memberId`와 동일하게 입력
    bypass: {
      kcpQuick: {
        actionType: "Terminate",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

<div class="tabs-content" data-title="선불머니+간편결제 서비스 해지">

선불머니와 간편결제 서비스를 모두 해지합니다. 선불머니 잔액이 남아있는 경우 사전에 환급 요청을 완료해야 합니다.

<div class="hint" data-style="warning">

이 기능은 KCP와 사전 협의된 특정 고객만 사용 가능합니다.

</div>

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001",
    name: "선불머니+간편결제 서비스 해지",
    bypass: {
      kcpQuick: {
        actionType: "Leave",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="선불머니 환급계좌 등록 및 변경">

선불머니 환급을 위한 계좌 정보를 등록하거나 변경합니다.

<div class="hint" data-style="warning">

이 기능은 KCP와 사전 협의된 특정 고객만 사용 가능합니다.

</div>

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001",
    name: "선불머니 환급계좌 등록 및 변경",
    bypass: {
      kcpQuick: {
        actionType: "RefundAccount",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="선불머니 환급 요청">

선불머니 잔액을 등록된 계좌로 환급 요청합니다.

<div class="hint" data-style="warning">

이 기능은 KCP와 사전 협의된 특정 고객만 사용 가능합니다.

</div>

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001",
    name: "선불머니 환급 요청",
    bypass: {
      kcpQuick: {
        actionType: "PrepaidRefund",
        encryptedCI: "encrypted_ci",
        memberID: "use_your_unique_id",
      },
    },
    m_redirect_url: "https://redirection.url",
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

</div>

<div class="hint" data-style="info">

퀵페이의 경우 m\_redirect\_url시 다음과 같이 4개의 파라미터가 Query String으로 전달됩니다.

- `imp_uid`
- `merchant_uid`
- `imp_status` : true 또는 false
- `kcp_action` : 인증창 유형 (요청 시 입력한 bypass.kcpQuick.actionType 값)

`kcp_action`이 Register 이고 `imp_status`가 true인 경우 결제수단 등록에 성공하였다는 것을 의미합니다.

</div>

#### 주요 파라미터

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 후
  `kcp_quick.{mid(사이트코드)}` 형식으로 채널을 지정할 때 사용됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method?: string

  **결제수단 구분코드**

  결제 요청 시 혹은 결제수단 등록 시 결제수단을 지정할 때 사용됩니다.
  결제(actionType:Pay), 결제수단등록(actionType:Register) 시 필수로 입력해야합니다.

  - card (카드)
  - trans (즉시출금)

- merchant\_uid: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- amount?: integer

  **결제금액**

  결제 요청 시 필수 입력입니다.

- customer\_uid?: string

  **결제 수단에 대한 고유 식별값**

  퀵페이에 등록된 결제수단과 1:1 맵핑됩니다.
  결제수단 등록, 결제, 결제수단 해지 시 필수로 입력해야 합니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - kcpQuick?: object

    **KCP 퀵페이 설정정보**

    퀵페이 결제시 필수로 입력해야 합니다.

    - actionType: string

      **호출 유형**

      - Register : 결제 수단 등록
      - UserRegister : 결제 수단 등록 없이 간편결제 서비스 유저 등록
      - Deregister : 결제 수단 삭제
      - Pay : 결제
      - PinChange : PIN 변경
      - PinReset : PIN 초기화
      - PinCheck : PIN 확인
      - PhoneChange : 전화번호 변경
      - Terminate : 간편결제 서비스 해지
      - SignUp : 간편결제+선불머니 서비스 유저 등록 (사전 협의 필요)
      - Leave : 간편결제+선불머니 서비스 해지 (사전 협의 필요)
      - PrepaidRefundAccount: 선불머니 환급계좌 등록 및 변경 (사전 협의 필요)
      - PrepaidRefund: 선불머니 환급 요청 (사전 협의 필요)

    - encryptedCI: string

      **암호화된 본인인증 CI**

      암호화 방법은 [`encryptedCI` 파라미터 안내](#encryptedci-parameter-guide)를 참고하세요.

    - memberCI: string

      **본인인증 CI**

      <div class="hint" data-style="warning">

      보안상의 이유로 `memberCI` 파라미터는 지원 중단 되었습니다. `encryptedCI` 파라미터를 사용해야합니다.

      </div>

    - memberID: string

      **사용자 식별값**

      고객사에서 결제유저를 식별하기 위한 값
      최대 16글자까지 입력가능하며, 하나의 유저가 여러 개의 결제수단을 등록하는 경우 동일한 `memberID`를 입력해야 합니다.

    - deviceID?: string

      **디바이스 식별값**

      미 입력시 고객이 사용한 브라우저 정보(User-Agent)가 입력됩니다.

    - noAuth?: boolean

      **무인증 등록/결제 여부**

      `true`로 입력한 경우 무인증 키가 발급되며, 이후 결제시 PIN 인증 과정이 생략됩니다.

      - true : 무인증 결제
      - false : 인증 결제

    - installment?: number

      **할부 개월수**

      입력하지 않는 경우 일시불로 진행됩니다.

    - useCardPoint?: boolean

      **카드사 포인트 결제 여부**

      입력하지 않는 경우 미사용으로 진행됩니다.

      - true : 카드사 포인트 사용
      - false : 카드사 포인트 미사용

#### 유의사항

<details>

<summary>`customer_uid` 파라미터 안내</summary>

결제수단 등록/삭제, 결제 요청시에는 결제수단을 식별하는 `customer_uid`를 입력한 후 사용해야 합니다.
이 외의 PIN 변경/확인/초기화, 사용자 등록, 해지 요청시에는 `customer_uid`에 결제수단 등록시 입력한 `memberID`를 입력해야 합니다.
위의 경우에 `customer_uid` 파라미터에 발급시 입력했던 `customer_uid`를 입력하는 경우 에러가 리턴됩니다.

</details>

<details>

<summary>`encryptedCI` 파라미터 안내</summary>

본인인증 후 전달받은 CI 값을 아래 방법으로 암호화하여 입력해야합니다.

포트원 계정의 [REST API Secret](https://developers.portone.io/api/rest-v1/auth?v=v1) 을 SHA-256 해시 알고리즘으로 처리하여 암호화 키를 생성한 후, 해당 키를 사용해 CI 데이터를 AES-256-ECB 방식으로 암호화해야 합니다.
암호화된 결과는 Base64로 인코딩하여 encryptedCI 파라미터 값으로 전달합니다.

```pseudo
FUNCTION encryptCi(ci, apiSecret):
# Step 1: SHA-256으로 API Secret을 해시하여 암호화 키 생성
key = SHA256(apiSecret)

# Step 2: AES-256-ECB 알고리즘으로 CI 데이터를 암호화
encryptedData = AES256Encrypt(data = ci, key = key, mode = ECB)

# Step 3: 암호화된 데이터를 Base64로 인코딩
base64EncodedData = Base64Encode(encryptedData)

# Step 4: Base64 인코딩된 결과 반환
RETURN base64EncodedData
END FUNCTION
```

</details>

<details>

<summary>결제수단을 여러개 등록할 수 있습니다.</summary>

한 고객에게 여러개의 결제수단을 등록할 수 있습니다.
고객 식별 정보(`memberID`)와 결제 수단 식별 정보(`customer_uid`)의 경우 1:N으로 맵핑되며,
이미 등록한 고객의 `memberID`를 동일하게 입력한 후 사용하지 않은 `customer_uid`를 지정하는 경우 여러개의 결제 수단을 등록할 수 있습니다.

</details>

<details>

<summary>결제수단 삭제 요청시 등록할 때 입력한 정보를 동일하게 입력해야 합니다.</summary>

결제수단 삭제(actionType:Deregister) 요청시 결제수단 등록할 때 사용된 `customer_uid` + `encryptedCI` + `memberID` + `deviceID` + `noAuth` 조합을
동일하게 전송해야 합니다.

</details>

<details>

<summary>PIN 초기화 시 기존에 등록된 모든 결제수단이 삭제됩니다.</summary>

PIN 초기화 시 기존에 등록된 모든 결제수단이 삭제됩니다. 이에 따라 고객사에서는 `customer_uid`로 저장된 데이터를 일괄 삭제해야 합니다.
PIN 초기화 이후 [빌링키 삭제 API](https://developers.portone.io/api/rest-v1/billingkey?v=v1#delete%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 이용하여 일괄 삭제할 수 있습니다.
만약 PIN 초기화 전에 삭제를 시도하는 경우 에러 메시지와 함께 삭제가 불가능합니다.

</details>

<details>

<summary>등록된 전화번호 변경 기능은 사전 협의 후 사용 가능합니다.</summary>

전화 번호 변경(actionType:PhoneChange)은 퀵페이에 등록된 전화번호를 변경할 수 있는 기능입니다.
해당 기능 사용을 원하시는 경우 KCP와 사전에 협의가 필요합니다.

</details>

<details>

<summary>결제 시 등록된 결제수단 화면을 표시할 수 있습니다.</summary>

결제(actionType:Pay)시 `customer_uid`를 빈 값 또는 생략한 경우 등록된 결제수단을 선택하는 화면이 표시됩니다.

</details>

<details>

<summary>결제 금액이 30만원 이상인 경우 ARS 인증이 진행됩니다.</summary>

결제 금액이 30만원 이상인 경우 ARS 인증이 진행되며, 퀵페이 등록시 입력된 전화 번호로 전화가 갑니다.

</details>

<details>

<summary>퀵페이 해지 안내 </summary>

해지(actionType:Terminate|Leave)시
[빌링키 삭제 API](https://developers.portone.io/api/rest-v1/billingkey?v=v1#delete%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 이용하여 등록되어 있던 결제수단을 일괄 삭제해야 합니다.

</details>

<details>

<summary>선불머니 서비스 이용 제한 안내</summary>

선불머니 관련 기능은 KCP와 사전에 협의된 특정 고객만 사용할 수 있는 제한된 서비스입니다.

**제한 기능 목록:**

- `SignUp`: 간편결제+선불머니 서비스 유저 등록
- `Leave`: 간편결제+선불머니 서비스 해지 (선불머니 환급 완료 후 진행 가능)
- `PrepaidRefundAccount`: 선불머니 환급계좌 등록 및 변경
- `PrepaidRefund`: 선불머니 환급 요청

</details>

<details>

<summary>무인증 결제 안내</summary>

결제 수단 등록, PIN 체크시 `noAuth:true` 파라미터를 추가하여 요청한 경우 무인증 등록이 가능합니다.
등록 이후 결제 요청하는 경우 무인증 결제를 이용할 수 있습니다. 무인증 결제시 PIN 입력 과정이 생략되며,
바로 결제가 진행됩니다.

만약 무인증 등록과정 없이 무인증 결제가 요청되는 경우 PIN 입력 화면이 표시되고, 올바른 PIN 입력시 무인증 등록 및 결제가 진행됩니다.

</details>

<details>

<summary>선불머니 결제의 경우 부분취소 불가</summary>

선불머니 결제는 KCP 정책상 부분취소를 지원하지 않으며 전체취소만 가능합니다.

**대안 방법:**

- 부분 환불이 필요한 경우: 전체 취소 후 차액만큼 재결제 진행

<div class="hint" data-style="info">

KCP에서 선불머니 부분취소 기능 지원 예정이나, 현재로서는 위의 대안 방법을 활용하시기 바랍니다.

</div>

</details>
