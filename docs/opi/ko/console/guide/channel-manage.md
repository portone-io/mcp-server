---
title: 연동 정보
description: >-
  포트원 결제 모듈을 사용하기 위한 연동 설정을 관리할 수 있습니다. 결제대행사 채널 관리, 식별코드 및 API Keys, 결제알림(웹훅)
  관리, 추가 설정 관리 방법에 대해 안내합니다. 
targetVersions:
  - v1
  - v2
---

## 채널 관리

포트원 결제 모듈 연동 시 사용할 결제대행사 채널을 추가합니다. 결제대행사 선택 후 결제 모듈에 따라 지원되는 결제 방식 및 결제 수단, 포트원 결제 모듈이 다르므로
고객사에 알맞은 채널을 선택하여 추가해야 합니다.

### 연동 방법

<div class="tabs-container">

<div class="tabs-content" data-title="테스트 연동">

#### 테스트 환경 채널 연동 방법

(관련 이미지 첨부)

1. 연동 모드를 `테스트`로 변경해 주세요.
2. 사용할 `결제대행사`를 선택해 주세요.

(관련 이미지 첨부)

5. 연동할 결제방식 및 결제수단에 따라 `결제 모듈`을 선택해 주세요.
6. `다음` 버튼을 클릭해 주세요.

(관련 이미지 첨부)

5. `채널 이름`은 원하시는 이름으로 입력해 주세요. 채널 이름은 채널 목록에 표시되므로 사용자가 구분할 수 있는 값으로 입력하여 사용해 주세요. ex) KCP 정기결제용
   (공용 테스트 채널이 제공되는 결제대행사의 경우 MID 선택 시 자동으로 표시됩니다.)

6. `채널 속성`은 기본적으로 `결제`가 선택됩니다. 본인인증 용도로 채널을 연동하시는 경우 `본인인증`을 선택해 주세요.

7. 테스트 용도로 발급 받은 `상점 아이디`를 직접 입력하시거나, 제공되는 다른 공용 상점아이디를 선택합니다.

8. 추가로 입력해야 하는 정보는 결제대행사별로 상이하며, 직접 발급받은 테스트 상점아이디를 이용하시는 경우 필수 입력 항목을 확인하여 올바르게 입력해 주세요.

9. `과세구분`을 선택해 주세요. 과세 혹은 면세 설정 시 \[결제사 정산] 메뉴에서 부가세 신고 참고 자료용 데이터에 적용됩니다.

10. `저장`버튼을 눌러 채널을 추가를 완료합니다.

<div class="hint" data-Style="info">

채널 등록 시 결제대행사별 저장하는 파라미터가 다릅니다. 파라미터 정보 확인은 하단의 \[결제대행사 선택하여 연동하기]를 확인해주세요.

</div>

</div>

<div class="tabs-content" data-title="실연동">

#### 운영 환경 채널 연동 방법

(관련 이미지 첨부)

1. 연동 모드를 `실연동`으로 변경해 주세요.
2. 사용할 `결제대행사`를 선택해 주세요.

(관련 이미지 첨부)

3. 연동할 결제방식 및 결제수단에 따라 `결제 모듈`을 선택해 주세요.
4. `다음` 버튼을 클릭해 주세요.

(관련 이미지 첨부)

5. `채널 이름`은 원하시는 이름으로 입력해 주세요. 채널 이름은 채널 목록에 표시되므로 사용자가 구분할 수 있는 값으로 입력하여 사용해 주세요. ex) KCP 정기결제용
6. `채널 속성`을 선택해 주세요. 기본적으로 `결제`가 선택됩니다. 본인인증 용도로 채널을 연동하시는 경우 `본인인증`을 선택해 주세요.
7. 결제대행사와 계약 후 발급 받은 `상점 아이디`와 추가 정보를 입력해 주세요.
8. `과세구분`을 선택해 주세요. 과세 혹은 면세 설정 시 \[결제사 정산]메뉴에서 부가세 신고 참고 자료용 데이터에 적용됩니다.
9. `저장`버튼을 눌러 채널을 추가를 완료합니다.

<div class="hint" data-Style="info">

채널 등록 시 결제대행사별 저장하는 파라미터가 다릅니다. 파라미터 정보 확인은 하단의 \[결제대행사 선택하여 연동하기]를 확인해주세요.

</div>

</div>

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="info">

채널 추가 시 입력해야 하는 값은 결제대행사별로 다르므로
[결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v2/readme)
를 참고하여 확인 후 입력 및 저장해야합니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

채널 추가 시 입력해야 하는 값은 결제대행사별로 다르므로
[결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v1/readme)
를 참고하여 확인 후 입력 및 저장해야합니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## 식별코드 및 API Keys

포트원 결제 연동시 필요한 연동 정보를 확인할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] → \[식별코드·API Keys] 메뉴에서 \[V1 API]를 선택하여 고객사 식별코드, REST API Key, REST API Secret을 확인할 수 있습니다.

(관련 이미지 첨부)

### 고객사 식별코드

- 포트원 가입 시 사용자에게 자동으로 생성되는 **고유값**입니다.
- 결제창 연동 시 사용되며, 결제 호출 시 \[객체 초기화]에 사용됩니다.
- **기술 문의** 시 해당 값을 공유해 주시면 빠르게 문제 해결을 도와드릴 수 있습니다.

### REST API Key, REST API Secret란?

- V1 API 호출 시 사용되는 Access Token을 발급할 때 사용되는 값입니다.
- REST API Secret은 재발급이 가능하며, 재발급 즉시 기존의 Secret은 사용이 불가능합니다.

<div class="hint" data-style="danger">

REST API Key, REST API Secret **결제 거래 건을 컨트롤할 수 있는 민감 정보**로 외부로 유출되지 않도록 주의가 필요합니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

### 스토어 아이디(Store ID) 복사하기

포트원 V2 결제 모듈 연동 시 필요한 스토어 아이디(Store ID)를 복사할 수 있습니다.

(관련 이미지 첨부)

- 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] 화면에서 스토어 아이디를 복사할 수 있습니다.

<div class="hint" data-style="info">

**스토어 아이디(Store ID)란?**

- 포트원 가입 시 \[대표 상점]이 생성되며, 자동으로 생성되는 고유값 입니다.
- 추가로 하위 상점을 생성하는 경우 **상점마다 고유하게 부여**됩니다.
- 결제창 연동 시 사용되며, 결제 호출 시 `storeId` 파라미터에 해당 값을 넣어야 합니다.
- **기술 문의 시 해당 값을 공유**해 주시면 빠르게 문제 해결을 도와드릴 수 있습니다.

</div>

### V2 API Secret 발급하기

V2 API를 연동하기 위해서는 V2 API Secret을 별도로 발급한 후 사용이 가능합니다.
V2 API Secret 은 **Owner, Admin** 계정에서만 발급 및 삭제가 가능합니다.

(관련 이미지 첨부)

- 관리자 콘솔 화면에서 \[결제연동] → \[연동 관리] → \[식별코드·API Keys] 메뉴에서 \[V2 API]를 선택합니다.
- `새로운 API Secret 발급`을 클릭합니다.
- Secret 목록에 표시될 `Secret 이름`을 입력하고 `만료 기한`을 선택한 후 `생성`을 클릭합니다.
- 생성된 Secret을 복사합니다. `API Secret을 확인했습니다`를 누른 후엔 Secret 값을 확인할 수 없으니 주의해 주세요.

<div class="hint" data-style="danger">

API Secret 발급 직후에만 값을 확인할 수 있습니다. 페이지를 벗어나면 API Secret 확인이 불가하오니 복사한 후 임의의 장소에 저장하여 사용하세요.
만약, API Secret 값을 잊어버리신 경우 새로 발급받아 사용해야 합니다.

</div>

<div class="hint" data-style="info">

**API Secret이란?**

- API 사용 시 Authorization 헤더 인증을 위해 사용되는 값입니다.

- API Secret을 발급받으신 후, 선호하는 [인증 방식](https://developers.portone.io/api/rest-v2?v=v2#auth)
  을 선택하여 API를 사용하실 수 있습니다.

</div>

<div class="hint" data-style="danger">

API Secret은 **결제 거래 건을 컨트롤할 수 있는 민감 정보**로 고객사 서버에서만 사용되어야 하며,
브라우저 등 외부에 노출되어서는 안 됩니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 결제알림(Webhook) 관리

결제 거래 건에 이벤트 발생 시 포트원에서 고객사가 설정한 URL로 웹훅을 전송합니다.
최신 상태의 결제 결과 처리를 위해서 결제 연동 시 웹훅 연동을 함께 구현하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

웹훅에 대한 자세한 설명은 [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v1?v=v1)를 참고하세요.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

웹훅에 대한 자세한 설명은 [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2?v=v2)를 참고하세요.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 웹훅 URL 관리자 콘솔 설정

웹훅을 통해 결제 정보를 통보받을 URL을 설정하는 과정은 다음과 같습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

URL은 관리자 콘솔에서 두 가지 형태로 지원하고 있습니다.
콘솔에서 설정했더라도 결제 시에 `notice_url`파라미터로 지정하여 호출하는 경우 해당 URL로 전송됩니다.

웹훅을 통해 결제 정보를 통보받을 URL을 설정하는 과정은 다음과 같습니다.

(관련 이미지 첨부)

- 포트원 관리자 콘솔 내 \[결제 연동] → \[연동 관리] → **\[결제알림(Webhook) 관리]** 탭을 선택합니다.

- \[웹훅 버전] 항목에서 **\[결제모듈 V1]** 을 선택합니다.

- \[설정 모드] 항목에서 \[실연동] 또는 \[테스트]를 선택합니다. (연동 환경에 따라 웹훅 URL을 각각 다르게 설정할 수 있습니다.)

- **Endpoint URL**에 웹훅 데이터를 수신할 URL을 입력합니다.

- **Content Type**을 설정합니다. `Content Type`은 `application/json`
  또는 `application/x-www-form-urlencoded` 중 하나로 설정할 수 있습니다.

- `저장` 버튼을 클릭합니다.

<div class="hint" data-style="info">

`호출 테스트` 버튼을 클릭하면 저장된 URL로 테스트 웹훅이 발송됩니다. 이를 통해 올바른 URL과 Content-Type을 지정했는지 테스트할 수 있습니다.
콘솔 내 화면에서 Endpoint URL 변경 후 저장하지 않은 채 호출테스트를 시도하시면 이전에 저장된 주소로 발송되오니 주의하시길 바랍니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

(관련 이미지 첨부)

- 포트원 관리자 콘솔 내 \[결제 연동] → \[연동 관리] → **\[결제알림(Webhook) 관리]** 탭을 선택합니다.

- \[웹훅 버전] 항목에서 **\[결제모듈 V2]** 를 선택합니다.

- \[설정 모드] 항목에서 \[실연동] 또는 \[테스트]를 선택합니다. (연동 환경에 따라 웹훅 URL을 각각 다르게 설정할 수 있습니다.)

- **Endpoint URL**에 웹훅 데이터를 수신할 URL을 입력합니다.

- **Content Type**을 설정합니다. `Content Type`은 `application/json` 또는
  `application/x-www-form-urlencoded` 중 하나로 설정할 수 있습니다.

- `저장` 버튼을 클릭합니다.

<div class="hint" data-style="info">

`호출 테스트` 버튼을 클릭하면 저장된 URL로 테스트 웹훅이 발송됩니다. 이를 통해 올바른 URL과 Content-Type을 지정했는지 테스트할 수 있습니다.
콘솔 내 화면에서 Endpoint URL 변경 후 저장하지 않은 채 호출테스트를 시도하시면 이전에 저장된 주소로 발송되오니 주의하시길 바랍니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 추가 설정 관리

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

### 화이트리스트(whitelist) 관리

(관련 이미지 첨부)

- 결제 요청 시 허용할 IP대역대를 관리할 수 있습니다.

- 포트원 관리자의 IP보안설정에 입력하는 값은 IP가 아닌 CIDR 블록방식 으로 입력하셔야 합니다.
  예를 들어 입력 하시고자 하는 IP가 `1.1.1.1` 이라고 가정 했을때 해당 IP 하나만 허용하고 싶으시다면
  `1.1.1.1/32`로 작성 하셔야 하고 만약 `1.1.1.1` \~ `1.1.1.255`까지의 IP대역을 모두 허용하고 싶으시다면
  `1.1.1.0/24` 형태로 작성하시면 됩니다. 보다 자세한 표기법은 RFC4632 를 참고부탁드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

포트원 V2 결제 모듈에서는 화이트리스트 기능을 지원하지 않습니다.

해당 기능을 필요로 하시는 경우 V2 기술지원 메일(<tech.support@portone.io>)로 문의 부탁드립니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->
