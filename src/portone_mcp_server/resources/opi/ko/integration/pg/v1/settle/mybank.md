---
title: 내통장결제
description: 헥토파이낸셜에서 제공하는 오픈뱅킹 기반 계좌간편결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 내통장결제 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을
호출하여 내통장 결제 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 IMP.request\_pay(param,
callback) 호출 후 **callback** 으로 수신되며,
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    // param
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "trans",
    merchant_uid: "ORD20180131-0000011",
    name: "노르웨이 회전 의자",
    buyer_email: "gildong@gmail.com",
    buyer_name: "홍길동",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    amount: 1000,
    bypass: {
      settle: {
        addDeductionYn: "N", // 추가공제구분 (대중교통:Y, 도서,공연비:C, 추가공제없음:N)
        criPsblYn: "N", // 현금영수증 발행가능 여부 ( Y or N or ""빈문자열은 Y로인식)
        custCi: "<회원 연계정보(Connecting Information)>", // 고객사가 보유한 회원 CI를 설정하면 내통장 결제에 등록한 CI와 비교하여 동일인인지 자동검증되며 일치하지 않은 경우 결제가 중단됩니다.
      },
    },
  },
  function (rsp) {
    // callback
    // 생략
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `settle_acc.MID` 형태로 지정해야 합니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  `trans`만 사용 가능합니다.

- merchant\_uid: string

  **고객사 고유주문번호**

  매번 고유하게 채번되어야 합니다.

- buyer\_tel: string

  **구매자 연락처**

  필수 파라미터 입니다.

- amount: integer

  **결제금액**

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 값들의 모음**

  - custCi: string

    **주문자 CI**

    <div class="hint" data-style="warning">

    **2024년 6월부터 필수 파라미터로 변경되었습니다.** (신규 계약 고객의 경우 해당 파라미터를 누락한 채
    결제 요청하실 경우, 결제가 중단될 수 있습니다. 다만, 기존 고객의 경우 당분간은 해당 파라미터를 제외한 채
    결제가 가능하오나 자세한 사항은 헥토파이낸셜에 문의해 주시기 바랍니다.)

    </div>

    고객사가 보유한 회원 CI를 설정하면 내통장 결제에 등록한 CI와 비교하여 동일인인지 자동검증되며
    일치하지 않은 경우 결제가 중단됩니다.

  - addDeductionYn?: string

    **추가공제구분**

    대중교통: Y, 도서 및 공연비: C, 추가공제없음: N

    계약 후 사용 가능합니다.

  - criPsblYn?: string

    **현금영수증 발행가능 여부**

    Y or N or "", 빈문자열은 Y로 인식

<div class="hint" data-style="info">

1. **내통장결제는 팝업 형태로 제공됩니다.**
2. **매출전표가** 제공되지 않습니다.
3. 선불충전금 ( ex: 카카오페이, 네이버페이 충전금)으로만 결제하는 경우 계좌정보(은행코드)가 제공되지 않습니다.

</div>

</div>

<div class="tabs-content" data-title="정기 결제 요청">

인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 빌링키 발급 결제창을 호출할 수 있습니다.
결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "trans",
    merchant_uid: "ORD20180131-0000011",
    name: "노르웨이 회전 의자",
    buyer_email: "gildong@gmail.com",
    buyer_name: "홍길동",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    customer_uid: "A00001-001", // 빌링키와 맵핑되는
    amount: 1000,
    bypass: {
      settle: {
        addDeductionYn: "N", // 추가공제구분 (대중교통:Y, 도서,공연비:C, 추가공제없음:N)
        criPsblYn: "N", // 현금영수증 발행가능 여부 ( Y or N or ""빈문자열은 Y로인식)
        custCi: "<회원 연계정보(Connecting Information)>", // 고객사가 보유한 회원 CI를 설정하면 내통장 결제에 등록한 CI와 비교하여 동일인인지 자동검증되며 일치하지 않은 경우 결제가 중단됩니다.
      },
    },
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

<div class="hint" data-style="info">

- 헥토파이낸셜과 정기결제 계약 후 사용 가능합니다.

- 일반적으로 빌링키 발급과 동시에 결제가 발생합니다. 빌링키만 발급하시려면 `amount`를 `0` 으로
  입력하신 후 요청하세요.

</div>

#### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid?: string

  **빌링키**

  등록 계좌정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount?: integer

  **결제금액**

  0원으로 입력시 빌링키만 발급됩니다. 금액 설정시 결제와 동시에 빌링키가 발급됩니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 값들의 모음**

  - custCi: string

    **주문자 CI**

    <div class="hint" data-style="warning">

    **2024년 6월부터 필수 파라미터로 변경되었습니다.** (신규 계약 고객의 경우 해당 파라미터를 누락한 채
    결제 요청하실 경우, 결제가 중단될 수 있습니다. 다만, 기존 고객의 경우 당분간은 해당 파라미터를 제외한 채
    결제가 가능하오나 자세한 사항은 헥토파이낸셜에 문의해 주시기 바랍니다.)

    </div>

    고객사가 보유한 회원 CI를 설정하면 내통장 결제에 등록한 CI와 비교하여 동일인인지 자동검증되며
    일치하지 않은 경우 결제가 중단됩니다.

  - addDeductionYn?: string

    **추가공제구분**

    대중교통: Y, 도서 및 공연비: C, 추가공제없음: N

    계약 후 사용 가능합니다.

  - criPsblYn?: string

    **현금영수증 발행가능 여부**

    Y or N or "", 빈문자열은 Y로 인식

#### 빌링키(customer\_uid)로 결제 요청하기

빌링키 발급이 성공하면 실 빌링키는 customer\_uid 와 1:1 매칭되어 **포트원 서버에 저장**됩니다.
customer\_uid를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)
호출 시 해당 값을 지정하신 후 호출해야 합니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>
