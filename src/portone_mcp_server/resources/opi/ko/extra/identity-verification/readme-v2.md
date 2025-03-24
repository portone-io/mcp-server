---
title: 본인인증 연동하기
description: 포트원을 이용하여 간편하게 본인인증을 연동하는 방법을 확인합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/extra/identity-verification/v1/readme
---

**본인인증 서비스**란 인증 절차를 거쳐 본인 여부와 입력한 정보의 정확성을 확인하여 주는 서비스입니다. 현재 존재하는 대표적인 본인인증 서비스는 아래와 같습니다.

- 다날 휴대폰 본인인증
- KG이니시스 통합인증

## 휴대폰 본인인증

휴대폰 본인인증 서비스란 본인 명의로 개통한 휴대폰을 이용하여 최소한의 개인정보를 입력하는 인증 절차를 거쳐 본인 여부와 입력한 정보의 정확성을 확인하여 주는 서비스입니다.

고객은 웹사이트에 가입, 결제, 또는 성인 인증 등을 위해 본인인증을 시행합니다. 본인인증은 모바일
기기에 설치된 본인인증 전용 앱을 이용하거나 사용자 본인 정보(이름, 생년월일, 휴대폰번호)를 인증요청
페이지에 입력한 후 문자로 온 인증번호를 기입하는 방식으로 이루어집니다.

(이미지 첨부: 휴대폰 본인인증 화면 예시)

포트원을 이용한 휴대폰 본인인증의 Flow는 JavaScript SDK를 이용하여 휴대폰 본인인증을 완료하고 고객사 서버에서 포트원 REST API를 이용하여 **인증완료정보를 획득**하는 방법으로 진행됩니다.

<div class="hint" data-style="info">

**API를 이용한 본인인증**

수기결제처럼 API 호출만으로 진행하는 본인인증도 지원하고 있습니다. REST API 문서의 해당 부분 설명을 참고해 주세요.

</div>

## 통합인증

통합인증 서비스란 카카오톡 인증서, 네이버 인증서 등의 민간 인증서를 통한 인증 절차를 거쳐 본인 여부와 입력한 정보의
정확성을 확인하여 주는 서비스입니다. 통합인증은 **KG이니시스**를 통해 제공되며 민간 인증서를
이용하거나 사용자 본인이 가입된 간편인증을 통해 인증요청을 보내고 간편인증 페이지에서 인증처리를
하는 방식으로 이루어집니다.

> **이용가능 수단 : 네이버 / PASS / 페이코 / TOSS / 금융인증서 / 카카오 / 신한 / KB모바일 / 삼성패스**

(이미지 첨부: 휴대폰 본인인증 화면 예시)

## SDK를 사용한 본인인증

포트원을 이용한 본인인증의 Flow는 휴대폰 본인인증, 통합인증 모두 JavaScript SDK를 이용하여 본인인증을 완료하고 고객사 서버에서 포트원 REST API를 이용하여 **인증완료정보를 획득**하는 방법으로 진행됩니다.

### 1. 포트원 SDK 설치

포트원 SDK를 설치하는 방법은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout) 문서를 참고하세요.

### 2. 본인인증 요청하기

SDK의 `PortOne.requestIdentityVerification()` 함수를 호출하여 본인인증창을 열 수 있습니다.

먼저, 관리자 콘솔의 결제 연동 페이지에서 **Store ID**와 사용할 채널의 **채널 키**를 확인해 주세요.

그리고 아래와 같이 파라미터들을 설정하여 호출합니다.

```ts
PortOne.requestIdentityVerification({
  // 고객사 storeId로 변경해주세요.
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
  identityVerificationId: `identity-verification-${crypto.randomUUID()}`,
  // 연동 정보 메뉴의 채널 관리 탭에서 확인 가능합니다.
  channelKey: "channel-key-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
});
```

**identityVerificationId**는 본인인증 건을 구분하는 문자열로, 본인인증 요청 및 조회에 필요합니다.
같은 identityVerificationId에 대해 여러 번의 본인인증 시도가 가능하나, 최종적으로 인증에 성공하는
것은 단 한 번만 가능합니다.

### 3. 본인인증 완료 처리 (브라우저)

`PortOne.requestIdentityVerification()` 함수의 반환값을 통해 본인인증 요청의 결과를 확인합니다.

`code`가 있으면 본인인증 과정에서 오류가 발생한 것이므로 적절히 처리하여야 합니다.

본인인증이 성공한 경우 identityVerificationId를 서버에 전달하여 서버측 본인인증 완료 처리를 하도록 합니다.

```ts
const response = await PortOne.requestIdentityVerification({
  /* 객체 생략 */
});
// 프로세스가 제대로 완료되지 않은 경우 에러 코드가 존재합니다
if (response.code !== undefined) {
  return alert(response.message);
}

const verificationResult = await fetch("{서버의 인증 정보를 받는 endpoint}", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    identityVerificationId,
  }),
});
```

결과값에 들어 있는 필드는 다음과 같습니다.

|필드명                |설명          |비고   |
|----------------------|--------------|-------|
|identityVerificationId|본인인증 건 ID|공통   |
|code                  |오류 코드     |실패 시|
|message               |오류 문구     |실패 시|

#### 3-1. redirect 방식의 경우

모바일 환경에서의 본인인증은 대부분 redirect 방식으로 이루어집니다. redirect 방식에서는 브라우저가
본인인증창으로 리다이렉트되었다가, 인증창에서의 작업이 끝나면 지정한 `redirectUrl`로 다시
리다이렉트됩니다. 이 경우에는 함수 호출 결과를 이용할 수 없고, 인증 성공 여부 등은
[쿼리 문자열](http://en.wikipedia.org/wiki/Query_string)로 전달받게 됩니다.

```ts
PortOne.requestIdentityVerification({
  /* 파라미터 생략 */
  redirectUrl: `${BASE_URL}/identity-verification-redirect`,
});
```

쿼리 문자열로 전달되는 내용은 다음과 같습니다.

|키                    |설명      |비고   |
|----------------------|----------|-------|
|identityVerificationId|결제 건 ID|공통   |
|code                  |오류 코드 |실패 시|
|message               |오류 문구 |실패 시|

예를 들어 identityVerificationId가 `identity-verification-39ecfa97`, redirectUrl이
`https://example.com/identity-verification-redirect`인 경우, 결제 성공 시에
`https://example.com/identity-verification-redirect?identityVerificationId=identity-verification-39ecfa97`로
리다이렉트됩니다.

### 4. 인증 완료 처리 (서버)

본인인증 완료 이후 획득한 `identityVerificationId`를 이용하여 고객 인증정보를 조회할 수 있습니다.

```ts title="server-side"
app.use(bodyParser.json());

// "/identity-verifications"에 대한 POST 요청을 처리하는 controller
app.post("/identity-verifications", async (req, res) => {
  // request의 body에서 identityVerificationId 추출
  const { identityVerificationId } = req.body;
  try {
    // 포트원 본인인증 내역 단건조회 API 호출
    const verificationResponse = await fetch({
      url: `https://api.portone.io/identity-verifications/${encodeURIComponent(identityVerificationId)}`,
      headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` },
    });
    if (!verificationResponse.ok)
      throw new Error(
        `verificationResponse: ${await verificationResponse.json()}`,
      );
    const identityVerification = await verificationResponse.json();
    if (identityVerification.status !== "VERIFIED") {
      // 인증 실패
    }
  } catch (e) {
    console.error(e);
  }
});
```

#### 인증 정보 활용하기

조회한 인증 정보에서 다음의 고객 정보를 추출하는 서비스 코드 예제입니다.
아래 파라미터들은 모두 본인인증 단건 조회의 결과가 인증 완료 상태일 때 (status = `VERIFIED`) 제공되는 `verifiedCustomer` 필드 내에 존재합니다.

- `ci`: 연계 정보(Connecting Information).
  - 사람마다 고유하고 서비스별로 달라지지 않기 때문에, 서비스 간 연계에 사용할 수 있음.
  - 다날의 경우 항상 제공.
  - KG이니시스의 경우 카카오를 제외한 인증 업체에서 항상 제공. 카카오의 경우 별도 서류 작성이 필요합니다.

- `di`: 중복 가입 확인 정보(Duplication Information).
  - 해당 서비스 안에서만 사람마다 고유함.
  - 이용자의 중복 가입을 확인하는 데 사용할 수 있음.
  - 다날의 경우 항상 제공.
  - KG이니시스의 경우 제공되지 않음.

- `name`: 이름

- `gender`: 성별

- `birthDate`: 생년월일 (YYYY-MM-DD)

- `operator`: 통신사
  - 다날의 경우 하기 안내를 따라 추가 계약 후 제공.
  - KG이니시스의 경우 미제공.

- `phoneNumber`: 숫자로만 구성된 전화번호
  - 다날의 경우 하기 안내를 따라 추가 계약 후 제공.
  - KG이니시스의 경우 항상 제공.

- `isForeigner`: 외국인 여부.
  - 다날의 경우 하기 안내를 따라 추가 계약 후 제공.
  - KG이니시스의 경우 항상 제공.

<div class="hint" data-style="info">

다날의 외국인(**`isForeigner`**) 여부는 **API 방식** 본인인증에 한하여 **개인정보 제공동의 약관을 사이트에 게재**한 후 **<cs@portone.io>로 신청**하여 취득할 수 있습니다. 해당 부분은 당사 계약 이후 다날PG사로 요청 후 승인이 완료되면 이용 가능한 점 참고해 주시기 바랍니다.

**메일 요청 신청 양식**

- 상호명 :
- 사업자번호 :
- 본인인증용 다날 상점ID(CPID) :
- 업종 :
- 필요사유 :
- 개인정보취급방침 url : 앱서비스로 URL형태로 전달이 어려우신 경우 '개인정보취급방침' 경로를 캡쳐하여 전달주시기 바랍니다.

**참고 - 포트원 이용 고객사의 개인정보처리방침 적용 예시**

- `(주)마플 : https://marpple.shop/kr/@/privacy`
- `(주)브레이브모바일 / 숨고 : https://soomgo.com/terms/privacy`
- `(주)마켓잇 : https://static.marketit.asia/static/privacy-terms.pdf`

</div>

<div class="hint" data-style="info">

KG이니시스의 성별, 외국인 여부는 인증 업체에 따라 사용자가 직접 입력할 수 있고, 정보를 검증하지 않습니다.

</div>

```ts title="Express"
// "/identity-verifications"에 대한 POST 요청을 처리하는 controller
app.post("/identity-verifications", async (req, res) => {
  // request의 body에서 identity_verification_id 추출
  const { identityVerificationId } = req.body;
  try {
    // 인증 토큰 발급 받기
    // identityVerificationId로 인증 정보 조회

    const { ci, di, name, gender, birthDate } =
      identityVerification.verifiedCustomer;
    // 연령 제한 로직 예시
    if (new Date(birthDate).getFullYear() <= 1999) {
      // 연령 만족
    } else {
      // 연령 미달
    }
    // 1인 1계정 허용 로직 예시
    if (di == null) {
      // PG사에서 di를 미제공
    } else {
      // DB에서 di 조회 후 가입여부 검사
      const user = await Users.find({ di });
      if (user == null) {
        // 신규 고객
      } else {
        // 이미 가입된 고객
      }
    }
  } catch (e) {
    console.error(e);
  }
});
```
