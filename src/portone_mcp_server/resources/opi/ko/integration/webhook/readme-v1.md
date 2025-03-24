---
title: 웹훅 연동하기
description: 포트원 웹훅을 사용하여 포트원 서버에 저장된 결제 정보를 고객사 서버에 동기화하고 네트워크 불안정성을 보완하는 방법을 설명합니다.
cover: >-
  https://images.unsplash.com/photo-1522096823084-2d1aa8411c13?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxOTcwMjR8MHwxfHNlYXJjaHwxfHxzZW5kfGVufDB8fHx8MTY4MTcxNzQ3NQ&ixlib=rb-4.0.3&q=85
coverY: -136
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/webhook/readme-v2
---

(관련 이미지 첨부)

## 웹훅(Webhook)이란?

특정 이벤트가 발생하였을 때 타 서비스나 응용프로그램으로 알림을 보내는 기능입니다.
Webhook 프로바이더는 해당 이벤트가 발행하면 `HTTP POST` 요청을 생성하여 callback URL(endpoint)로 이벤트 정보을 보냅니다.
주기적으로 데이터를 폴링(polling)하지 않고 원하는 이벤트에 대한 정보만 수신할 수 있어서 webhook은 리소스나 통신측면에서 훨씬 더 효율적입니다.
Webhook을 활용하면 커스텀 기능이나 다른 애플리케이션과 연동하여 기능을 확장할 수 있습니다.

포트원에서는 결제 완료 등 이벤트가 발생했을 때 고객사의 서버에 전송하고 있습니다.
이벤트가 발생하면 포트원 콘솔에 등록된 웹훅 URL로 HTTP POST 요청을 보냅니다. 고객사에서는 이 요청을 받아 최신 결제 정보로 동기화하도록 구현해야 합니다.

## 웹훅 연동이 꼭 필요한가요?

안정적인 결제 처리를 위해 웹훅 연동을 강력히 권장합니다.
인터넷 연결 끊김, 브라우저 자동 새로고침 등의 이유로 클라이언트에서 결제 완료에 대한 응답을 받지 못하는 경우가 간헐적으로 발생합니다.
이런 경우 연동한 웹훅을 통해 누락 없이 결제 정보를 동기화할 수 있습니다.

## 웹훅 발생 이벤트

포트원 웹훅은 다음과 같은 이벤트에 발생됩니다.

- **결제가 승인**되었을 때(모든 결제 수단) - (status : `paid`)
- **가상계좌가 발급**되었을 때 - (status : `ready`)
- **가상계좌에 결제 금액이 입금**되었을 때 - (status : `paid`)
- **예약결제가 시도**되었을 때 - (status : `paid` or `failed`)
- **관리자 콘솔에서 결제 취소**되었을 때 - (status : `cancelled`)

<div class="hint" data-style="danger">

**결제 실패 시에는 웹훅이 호출되지 않아요!**

</div>

## 웹훅 URL 설정

웹훅 URL을 설정하면 포트원에서 이벤트 발생 시 해당 URL로 웹훅을 전송합니다.
URL은 관리자 콘솔에서 두 가지 형태로 지원하고 있습니다.
콘솔에서 설정했더라도 결제 시에 `notice_url`파라미터로 지정하여 호출하는 경우 해당 URL로 전송됩니다.

### 1. 관리자 콘솔 설정

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

### 2. 결제 파라미터 설정

포트원 SDK의 `IMP.request_pay()` 함수 파라미터 중 `notice_url`를 통해 관리자콘솔에서 설정한 웹훅 수신 URL을 덮어쓸 수 있습니다.

```ts title="client-side"
function requestPay() {
  // IMP.request_pay(param, callback) 결제창 호출
  IMP.request_pay(
    {
      // ...
      notice_url: "https://웹훅수신 URL", //웹훅수신 URL 설정
      // ...
    },
    function (rsp) {
      // callback
      if (rsp.success) {
        console.log(rsp);
      } else {
        console.log(rsp);
      }
    },
  );
}
```

<div class="hint" data-style="info">

**웹훅 관련 정보**

웹훅은 최초 또는 재발송 통해 전송이 가능하며, 각각 타임아웃이 다릅니다.

1. **최초 웹훅**의 경우 **Connection TimeOut 설정시각은 10초**이며 가맹접 웹훅응답을 기다리는 **Read TimeOut 시각은 30초**입니다.
2. **재발송 웹훅**의 경우 **요청에 대한 전체 타임아웃이 15초**입니다.

</div>

### 3. 웹훅 요청 검증하기

웹훅 수신주소는 공개된 URL로 포트원이 아닌 서버에서 웹훅을 보낼 위험이 있기 때문에,
고객사 서버는 **웹훅을 수신하고 반드시 [결제내역 단건조회 API](https://developers.portone.io/api/rest-v1/payment?v=v1#get%20%2Fpayments%2F%7Bimp_uid%7D)를 통해
결제건을 조회하여 웹훅의 내용을 검증해야 합니다.**
결제가 정상적으로 성공하였지만, 네트워크 문제 등의 이유로 웹훅을 수신받지 못하거나 늦게 수신받는 경우가 있을 수 있습니다.
웹훅이 오지 않거나 늦은 경우 결제건을 바로 취소 처리하시면 네트워크 문제가 발생했을 때 정상적으로 결제된 결제건이 환불되어 금전 피해가 발생할 수 있습니다.
**웹훅이 수신되지 않은 경우에도 결제 취소를 하기 이전에 [결제내역 단건조회 API](https://developers.portone.io/api/rest-v1/payment?v=v1#get%20%2Fpayments%2F%7Bimp_uid%7D)를 통해
결제건의 상태를 조회하여, 결제 상태에 따라 취소 처리를 해야 합니다.**

웹훅 수신 후 고객사 서버에서 정상 응답을 한 경우에도, 네트워크 상의 문제로 웹훅의 response가 포트원 서버로 도달하지 않았다면
웹훅 재발송 기능을 설정한 고객사에 한해 웹훅이 재발송 될 수 있습니다.
만약 동일한 내용의 웹훅을 여러 번 수신받는 경우가 발생하더라도, 문제가 발생하지 않도록 처리해 주시길 권장드립니다.

```url
curl -H "Content-Type: application/json" -X POST -d '{ "imp_uid": "imp_1234567890", "merchant_uid": "order_id_8237352", "status": "paid" }' { NotificationURL }
```

> Webhook `POST` 요청의 본문은 다음의 정보를 포함합니다. 고객사 서버는 해당 정보를 수신하고 포트원 서버에서 결제 정보를 조회하여 검증 및 저장할 수 있습니다.
>
> - `imp_uid` : 결제번호
> - `merchant_uid`: 주문번호
> - `status`: 결제 결과
> - `cancellation_id`: 취소내역 아이디

웹훅 EndPoint URL 수신부 POST 요청에 대한 코드 예시

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js">

Webhook 이벤트의 `POST` 요청을 처리할 endpoint를 다음과 같이 생성하여 결제 정보를 조회하고 검증하여 저장합니다.

```ts title="server-side"
app.use(bodyParser.json());
// ...
// "/portone-webhook"에 대한 POST 요청을 처리
app.post("/portone-webhook", async (req, res) => {
  try {
    // req의 body에서 imp_uid, merchant_uid 추출
    const { imp_uid, merchant_uid } = req.body;
    // 액세스 토큰(access token) 발급 받기
    /* ...중략... */
    // imp_uid로 포트원 서버에서 결제 정보 조회
    /* ...중략... */
    const paymentData = getPaymentData.data; // 조회한 결제 정보
    // ...
    // DB에서 결제되어야 하는 금액 조회
    const order = await Orders.findById(paymentData.merchant_uid);
    const amountToBePaid = order.amount; // 결제 되어야 하는 금액
    // ...
    // 결제 검증하기
    const { amount, status } = paymentData;
    // 결제금액 일치. 결제 된 금액 === 결제 되어야 하는 금액
    if (amount === amountToBePaid) {
      // DB에 결제 정보 저장
      await Orders.findByIdAndUpdate(merchant_uid, { $set: paymentData });
      switch (status) {
        case "ready": // 가상계좌 발급
          // DB에 가상계좌 발급 정보 저장
          const { vbank_num, vbank_date, vbank_name } = paymentData;
          await Users.findByIdAndUpdate("/* 고객 id */", {
            $set: { vbank_num, vbank_date, vbank_name },
          });
          // 가상계좌 발급 안내 문자메시지 발송
          SMS.send({
            text: `가상계좌 발급이 성공되었습니다. 계좌 정보 ${vbank_num} ${vbank_date} ${vbank_name}`,
          });
          res.send({ status: "vbankIssued", message: "가상계좌 발급 성공" });
          break;
        case "paid": // 결제 완료
          res.send({ status: "success", message: "일반 결제 성공" });
          break;
      }
    } else {
      // 결제금액 불일치. 위/변조 된 결제
      throw { status: "forgery", message: "위조된 결제시도" };
    }
  } catch (e) {
    res.status(400).send(e);
  }
});
```

</div>

</div>

<details>

<summary> 포트원 IP 리스트 </summary>

포트원의 웹훅은 다음의 세 가지 IP 주소로부터 발송됩니다. Inbound 요청에 방화벽 규칙을 설정해야 하는 등 필요한 경우에 한해 사용해 주시길 바랍니다.

> - **52.78.100.19**
> - **52.78.48.223**
> - **52.78.5.241**

</details>

<div class="hint" data-style="danger">

**웹훅 처리 전에 브라우저 결제 완료 처리가 진행되는 경우**

기본적으로 포트원 서버는 웹훅을 호출한 뒤 고객사 응답을 기다리지 않고 브라우저에 302 redirect 응답을 보내기 때문에 결과 도달에 대한 순서를 보장하지 않습니다. 다만 고객사 요청이 있을 경우 webhook 호출 이후에 브라우저에 302 redirect 또는 callback 응답을 보내어 순서를 보장해 드리고 있습니다. 웹훅 우선순위 설정 요청은 <support@portone.io> 로 고객사 식별코드를 기재하여 요청해 주시면 됩니다.

</div>

<div class="hint" data-style="info">

**웹훅 재 전송이 가능한가요?**

웹훅은 기본적으로 1회 전송되도록 설정되어 있습니다. 네트워크 에러가 발생하거나 고객사 응답(HTTP 상태 코드)이 500번대인 경우, 재발송 설정을 원하신다면 웹훅이 최대 5회까지 1분 간격으로 재시도될 수 있습니다. 웹훅 재발송 설정 요청은 <support@portone.io> 로 고객사 식별코드를 기재하여 요청해 주시면 됩니다.

</div>

## localhost로 호출테스트 하기

기본적으로 webhook 호출 테스트는 **외부망에서 접근 가능한 도메인만 가능합니다.** `localhost`의 경우,
로컬머신 혹은 같은 망을 공유하고 있는 경우에만 접근이 가능하기 때문에, 포트원에서 `localhost`로
callback URL을 호출할 수 없습니다.하지만 [ngrok](http://ngrok.com/) 이라는 서비스를 통해
`localhost`를 외부망에서 접근 가능한 도메인으로 포워딩 하면 해당 도메인을 callback URL로 설정할 수
있습니다.다음은 `localhost:3000`으로 실행된 개발환경을 ngrok 을 이용해서 외부 접속 가능한 도메인으로
포워딩하는 예제입니다. 해당 도메인을 callback URL로 설정하면 호출 테스트를 할 수 있습니다.

[이미지 링크](https://developers.portone.io/gitbook-assets/ko/ngrok.gif)

<p>ngrok 사용 예시</p>
