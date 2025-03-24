---
title: 웰컴페이먼츠
description: 웰컴페이먼츠 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 웰컴페이먼츠 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 2. 최신 JavaScript SDK로 업데이트하기 <a href="#2." id="2." />

웰컴페이먼츠 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**웰컴페이먼츠를 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다**

</div>

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) 문서를 통해 최신 SDK를 설치해주세요.

## 3.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
웰컴페이먼츠 결제/빌링키 발급/빌링키 발급과 동시에 결제창을 호출할 수 있습니다. **트랜잭션 결과**는
PC의 경우 **callback** 함수로 전달되고
모바일의 경우 **m\_redirect\_url**로 302 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="일반 결제 창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "orderNo0001", // 고객사에서 채번한 주문 고유 번호입니다.
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    const { imp_uid, merchant_uid } = rsp;

    // 콜백 함수로 전달 받은 imp_uid로 포트원 결제 내역 조회 API를 통해 결제 상태를 판단합니다.
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

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

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank (가상계좌)
  - phone (휴대폰소액결제)
  - culturegift (문화상품권)
  - lpay (LPAY)
  - kakaopay (카카오페이)
  - payco (페이코)
  - tosspay (토스페이)

- merchant\_uid: string

  **주문 번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제 금액**

  **string** 이 아닌 점에 유의하세요.

- tax\_free?: number

  **면세 금액**

- vat\_amount?: number

  **부가세 금액**

  상점 아이디가 “부가세 업체 정함”으로 설정 된 경우일때만 전달 가능합니다.

  주의: 전체 금액의 10% 이하만 허용 됩니다.

- buyer\_name: string

  **구매자 이름**

  주의: 웰컴페이먼츠의 경우 구매자 이름은 필수 입력입니다.

- buyer\_tel: string

  **구매자 연락처**

  주의: 웰컴페이먼츠의 경우 구매자 연락처는 필수 입력입니다.

- buyer\_email?: string

  **구매자 이메일 주소**

- m\_redirect\_url?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  주의: 웰컴페이먼츠의 경우 **모바일 환경에서 필수 입력**입니다.

- notice\_url?: string 또는 **string\[]**

  **트랜잭션 종료 후 웹훅이 발송 될 고객사 서버 URL**

  주의: notice\_url 파라미터 설정시, 콘솔에 설정 된 웹훅 URL은 override 되며 notice\_url에 전달 한 주소로만 웹훅이 발송됩니다.

- confirm\_url?: string

  **트랜잭션 승인 직전 최종 승인 여부를 질의 할 고객사 서버 URL**

  트랜잭션 승인 직전, 포트원 서버에서 confirm\_url로 트랜잭션 최종 승인 여부를 질의하게 되며 200 외의 응답을 받은 경우 트랜잭션은 중단됩니다.

- app\_scheme?: string

  **IOS 앱에서 결제시 카드/은행 앱에서 인증 후 복귀 될 고객사 커스텀 앱 URL Scheme**

  - 예: portone://
  - 주의: **IOS 앱 결제시 필수** 입력이며 **앱이 아닌 모바일 웹 결제시에는 입력하지 마세요.**

- currency?: 'KRW'

  **결제 통화**

  웰컴페이먼츠의 경우 KRW만 허용되며, 미 입력시 KRW로 자동 적용됩니다.

- language?: string

  **결제창 언어 설정**

  - ko(한국어, 기본값)
  - en(영어)
  - zh(중국어)

- digital?: boolean

  **휴대폰 소액결제시 실물/컨텐츠 여부**

  주의: **휴대폰 소액결제시 필수 입력**입니다.

- vbank\_due: string

  **가상계좌 입금기한**

  - YYYY-MM-DD
  - YYYY-MM-DD HH:mm:ss
  - YYYYMMDD
  - YYYYMMDDHHmmss

  주의: 웰컴페이먼츠의 경우 무시되며 무조건 59초로 설정 됩니다.

- escrow?: boolean

  **에스크로 결제 여부**

  웰컴페이먼츠의 경우, 카드/계좌이체/가상계좌 결제시 에스크로 결제가 허용됩니다.

- useCardPoint?: boolean

  **카드사 포인트 사용 여부**

  웰컴페이먼츠의 경우, 카드사 포인트 사용 불가 옵션(useCardPoint: false)은 지원하지 않습니다.

  카드사 포인트 사용(useCardPoint: true) 또는 기본값(=파라미터 전달하지 않음, 결제창에서 고객이 카드사 포인트 사용 여부 결정)만 사용 가능합니다.

- useFreeInterestFromMall?: boolean

  **상점 부담 무이자 할부 사용 여부**

- period?: object

  **서비스 제공 기간**

  (from과 to) 또는 interval 중 하나만 입력 가능합니다.

  주의: 모바일 환경 - 휴대폰 소액결제시엔 지원하지 않습니다.

  (from과 to) 웰컴페이먼츠의 경우

  - PC: 날짜까지만 입력 가능하며 시간은 무시됩니다.
  - 모바일: 날짜와 시간 모두 입력 가능하며 초는 무시됩니다.

  * from: string

    **서비스 제공 시작 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * to: string

    **서비스 제공 종료 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * interval?: string

    **서비스 제공 간격**

    - 1m: 매월 정기결제
    - 1y: 매년 정기결제

- bypass?: object

  - welcome?: object

    - logo\_url?: string

      결제창에 노출 될 메인 로고 URL(크기: 89x19)로 **PC 전용** 파라미터입니다.

    - logo\_2nd?: string

      결제창에 노출 될 서브 로고 URL(크기: 64x13)로 **PC 전용** 파라미터입니다.

    - P\_CARD\_OPTION?: object

      **모바일 카드/간편결제 전용** 파라미터입니다.

      1. 신용카드 우선 선택 옵션

         예) selcode=14

         - 해당 카드 코드에 해당하는 카드가 선택된 채로 Display
         - 간편결제는 불가능 (타 카드 선택 가능)

      2. 선택적 표시 옵션

         예1) onlycard=visa3d
         예2) selcode=14:onlycard=visa3d

         - 안심결제: visa3d
         - ISP: isp
         - 간편결제: easypay 중 선택 적 표시
         - bypass.P\_ONLY\_EASYPAYCODE?: string

      카드 결제창 내 렌더링 될 간편 결제 리스트를 의미하며 **모바일 전용** 파라미터입니다.

      예) 카카오페이, 엘페이, 페이코만 렌더링 →
      ”KAKAOPAY:LPAY:PAYCO” 전달

      - 카카오페이: KAKAOPAY
      - 엘페이: LPAY
      - 페이코: PAYCO
      - 토스페이: TOSSPAY

    - acceptmethod?: string\[]

      **PC - 카드 결제 전용 파라미터**

      |형식                             |설명                                                                                                                                                                                                                               |
      |---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
      |SKIN(색상코드)                   |결제 창의 배경 색상 <br /> - 기본값 : #c1272c <br /> - 예시: SKIN(#fc6b2d)                                                                                                                                                         |
      |below1000                        |1,000원 미만 결제 허용 여부 <br /> - 기본값: 허용하지 않음                                                                                                                                                                         |
      |paypopup                         |안심클릭을 팝업 형태로 렌더링 시킬지 여부 <br /> - 기본값: 레이어                                                                                                                                                                  |
      |onlyeasypaycode(간편 결제 리스트)|카드 결제창 내 렌더링 될 간편 결제 리스트 <br /> 예) 카카오페이, 엘페이, 페이코만 렌더링 → ”kakaopay:lpay:payco” 전달 <br /> - 카카오페이: `kakaopay` <br /> - 엘페이: `lpay` <br /> - 페이코: `payco` <br /> - 토스페이: `tosspay`|
      |SLIMQUOTA(슬림 할부 설정)        |부분 무이자 설정. 슬림 할부 <br /> - 형식) SLIMQUOTA(코드-개월:개월^코드-개월:개월 <br /> - 예시) SLIMQUOTA(11-2:3^34-2:3)                                                                                                         |

      **PC - 휴대폰 소액 결제 전용 파라미터**

      |형식                       |설명                                                                                                                                                                                                                                                                                                                                                         |
      |---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
      |hppdefaultcorp(통신사 코드)|휴대폰 소액결제시 기본 선택되어있는 통신사 <br /> - 기본: 기본 선택되어있는 통신사 없음 <br /> 예) KT 기본 선택 → ”hppdefaultcorp(KT)” 전달 <br /> - SKT: `SKT` <br /> - KT: `KTF` <br /> - LG 유플러스: `LGT` <br /> - 알뜰폰 전체: `MVNO` <br /> - 알뜰폰 CJ 헬로 모바일: `CJH` <br /> - 알뜰폰 티플러스: `KCT` <br /> - 알뜰폰 SK 세븐모바일: `SKL` <br />|
      |hppnofix(N 또는 Y)         |휴대폰 소액결제창에 자동 입력되는 `buyer_tel`값을 수정할 수 있는지 여부 <br /> - 기본값: 수정 가능 <br /> - Y : 수정 불가능 <br /> - N : 수정 가능(기본) <br />                                                                                                                                                                                              |

      ```json
      {
        "channelKey": "{콘솔 내 연동 정보의 채널키}",
        "bypass": {
          "welcome": {
            "acceptmethod": [
              "SKIN(#fc6b2d)", // 결제창 배경 색상 #fc6b2d
              "below1000", // 1,000원 이하 결제 허용
              "paypopup", // 안심 클릭을 팝업으로 렌더링
              "onlyeasypaycode(kakaopay:payco)", // 카드 결제창 내 간편결제는 카카오페이와 페이코만 렌더링
              "hppdefaultcorp(KT)", // 휴대폰 소액결제시 KT 기본 선택
              "hppnofix(Y)" // 휴대폰 소액결제시 결제 창 내에서 구매자 전화번호 수정 불가능
            ]
          }
        }
      }
      ```

    - P\_RESERVED: string\[]

      **모바일 - 카드 결제 전용 파라미터**

      |형식       |설명                                                      |
      |-----------|----------------------------------------------------------|
      |below1000=Y|1,000원 미만 결제 허용 여부 <br /> - 기본값: 허용하지 않음|

      **모바일 - 휴대폰 소액 결제 전용 파라미터**

      |형식                          |설명                                                                                                                                                                                                                                                                                                                                                     |
      |------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
      |hpp\_default\_corp=통신사 코드|휴대폰 소액결제시 기본 선택되어있는 통신사 <br /> - 기본: 기본 선택되어있는 통신사 없음 <br /> 예) KT 기본 선택 → ”hpp\_default\_corp=KT” 전달 <br /> - SKT: `SKT` <br /> - KT: `KTF` <br /> - LG 유플러스: `LGT` <br /> - 알뜰폰 전체: `MVNO` <br /> - 알뜰폰 CJ 헬로 모바일: `CJH` <br /> - 알뜰폰 티플러스: `KCT` <br /> - 알뜰폰 SK 세븐모바일: `SKL`|
      |hpp\_nofix=Y 또는 N           |휴대폰 소액결제창에 자동 입력되는 buyer\_tel값을 수정할 수 있는지 여부 <br /> - 기본: 수정 가능 <br /> - Y : 수정 불가능 <br /> - N : 수정 가능(기본) <br />                                                                                                                                                                                             |

      ```json
      {
        "channelKey": "{콘솔 내 연동 정보의 채널키}",
        "bypass": {
          "welcome": {
            "P_RESERVED": [
              "below1000=Y", // 1,000원 이하 결제 허용
              "hpp_default_corp=KT", // 휴대폰 소액결제시 KT 기본 선택
              "hppnofix=Y" // 휴대폰 소액결제시 결제 창 내에서 구매자 전화번호 수정 불가능
            ]
          }
        }
      }
      ```

</details>

<details>

<summary>

<strong>웰컴페이먼츠 지원 결제 수단</strong>

</summary>

- card + 에스크로, 다이렉트
- vbank + 에스크로
- trans + 에스크로
- phone
- culturegift
- lpay
- kakaopay
- payco
- tosspay

</details>

</div>

<div class="tabs-content" data-title="빌링키 발급 창 요청">

일반 결제 창 호출 파라미터에서 **customer\_uid**, **customer\_id**값을 추가하면 빌링키 발급 창을 호출할 수 있습니다.
빌링키 발급 창에서 빌링키를 발급 받은 후, 빌링 결제 API를 호출해 해당 빌링키로 결제를 할 수 있습니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 빌링키 발급 수단입니다. 웰컴페이먼츠의 경우 'card'만 지원됩니다.
    merchant_uid: "orderMonthly0001", // 고객사에서 채번한 주문 고유 번호입니다.
    name: "빌링키 발급",
    amount: 1000, // 전달한 결제 금액 만큼 실제로 승인되지는 않으며, 단순히 빌링키 발급 창에 표기 용도입니다.
    customer_uid: "your-customer-unique-id", // 고객사가 구매자의 결제 수단을 특정하기 위해 채번한 고유 ID로 빌링키 발급시 필수 입력입니다.
    customer_id: "matthew", // 고객사가 회원에게 부여한 고유 ID입니다.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 빌링키 발급 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    const { imp_uid, merchant_uid } = rsp;

    // 콜백 함수로 전달 받은 imp_uid로 포트원 결제 내역 조회 API를 통해 빌링키 발급 상태를 판단합니다.
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- pg(deprecated)?: 'welcome'

  **PG사 구분코드**

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- merchant\_uid: string

  **주문 번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제 금액**

  **string** 이 아닌 점에 유의하세요.

  전달한 결제 금액 만큼 실제로 승인되지는 않으며, 단순히 빌링키 발급 창에 표기 용도입니다.

- pay\_method: 'card'

  **빌링키 발급 수단**

  웰컴페이먼츠의 경우, 빌링키 발급 수단은 `card`만 허용되며 **반드시 `card`를 필수로 입력해주셔야** 합니다.

- customer\_uid: string

  **빌링키 발급 수단 고유 ID**

  고객사가 구매자의 빌링키 발급 수단을 특정하기 위해 채번한 고유 번호로 빌링키 발급시 필수 입력입니다.

- customer\_id?: string

  **구매자 고유 ID**

  고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다.

- buyer\_name: string

  **구매자 이름**

  주의: 웰컴페이먼츠의 경우 구매자 이름은 필수 입력입니다.

- buyer\_tel: string

  **구매자 연락처**

  주의: 웰컴페이먼츠의 경우 구매자 연락처는 필수 입력입니다.

- buyer\_email?: string

  **구매자 이메일 주소**

- m\_redirect\_url?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  주의: 웰컴페이먼츠의 경우 **모바일 환경에서 필수 입력**입니다.

- notice\_url?: string | string\[]

  **트랜잭션 종료 후 웹훅이 발송 될 고객사 서버 URL**

  주의: notice\_url 파라미터 설정시, 콘솔에 설정 된 웹훅 URL은 override 되며 notice\_url에 전달 한 주소로만 웹훅이 발송됩니다.

- period?: object

  **서비스 제공 기간**

  (from과 to) 또는 interval 중 하나만 입력 가능합니다.

  (from과 to) 웰컴페이먼츠의 경우

  - PC: 날짜까지만 입력 가능하며 시간은 무시됩니다.
  - 모바일: 날짜와 시간 모두 입력 가능하며 초는 무시됩니다.

  * from: string

    **서비스 제공 시작 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * to: string

    **서비스 제공 종료 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * interval?: string

    **서비스 제공 간격**

    - 1m: 매월 정기결제
    - 1y: 매년 정기결제

  - bypass?: object

    - welcome?: object

      - logo\_url?: string

        결제창에 노출 될 메인 로고 URL(크기: 89x19)로 **PC 전용** 파라미터입니다.

      - logo\_2nd?: string

        결제창에 노출 될 서브 로고 URL(크기: 64x13)로 **PC 전용** 파라미터입니다.

</details>

<details>

<summary>

<strong>웰컴페이먼츠 지원 빌링키 발급 수단</strong>

</summary>

- card

</details>

</div>

<div class="tabs-content" data-title="빌링키 발급과 동시에 결제 창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "phone", // 빌링키 발급 및 결제 수단입니다. 웰컴페이먼츠의 경우 'phone'만 지원합니다.
    merchant_uid: "orderNo0001", // 고객사에서 채번한 주문 고유 번호입니다.
    name: "주문명:결제테스트",
    amount: 1000, // 전달한 금액 만큼 실제로 승인이 됩니다.
    customer_uid: "your-customer-unique-id", // 고객사가 구매자의 결제 수단을 특정하기 위해 채번한 고유 ID로 빌링키 발급시 필수 입력입니다.
    customer_id: "matthew", // 고객사가 회원에게 부여한 고유 ID입니다.
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    const { imp_uid, merchant_uid } = rsp;

    // 콜백 함수로 전달 받은 imp_uid로 포트원 결제 내역 조회 API를 통해 결제 상태를 판단합니다.
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- pg(deprecated)?: 'welcome'

  **PG사 구분코드**

- merchant\_uid: string

  **주문 번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제 금액**

  **string** 이 아닌 점에 유의하세요.

- pay\_method: 'phone'

  **빌링키 발급 및 결제 수단**

  - phone (휴대폰소액결제)

  웰컴페이먼츠의 경우, 빌링키 발급 동시에 결제 수단은 `phone`만 허용되며 **반드시 `phone`을 필수로 입력해주셔야** 합니다.

  **빌링키 발급 수단 고유 ID**

  고객사가 구매자의 빌링키 발급 수단을 특정하기 위해 채번한 고유 번호로 빌링키 발급시 필수 입력입니다.

- customer\_id?: string

  **구매자 고유 ID**

  고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다.

- buyer\_name: string

  **구매자 이름**

  주의: 웰컴페이먼츠의 경우 구매자 이름은 필수 입력입니다.

- buyer\_tel: string

  **구매자 연락처**

  주의: 웰컴페이먼츠의 경우 구매자 연락처는 필수 입력입니다.

- buyer\_email?: string

  **구매자 이메일 주소**

- m\_redirect\_url?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  주의: 웰컴페이먼츠의 경우 **모바일 환경에서 필수 입력**입니다.

- notice\_url?: string 또는 **string\[]**

  **트랜잭션 종료 후 웹훅이 발송 될 고객사 서버 URL**

  주의: notice\_url 파라미터 설정시, 콘솔에 설정 된 웹훅 URL은 override 되며 notice\_url에 전달 한 주소로만 웹훅이 발송됩니다.

- confirm\_url?: string

  **트랜잭션 승인 직전 최종 승인 여부를 질의 할 고객사 서버 URL**

  트랜잭션 승인 직전, 포트원 서버에서 confirm\_url로 트랜잭션 최종 승인 여부를 질의하게 되며 200 외의 응답을 받은 경우 트랜잭션은 중단됩니다.

- currency?: 'KRW'

  **결제 통화**

  웰컴페이먼츠의 경우 KRW만 허용되며, 미 입력시 KRW로 자동 적용됩니다.

- digital: boolean

  **실물/컨텐츠 여부**

- period?: object

  **서비스 제공 기간**

  (from과 to) 또는 interval 중 하나만 입력 가능합니다.

  (from과 to) 웰컴페이먼츠의 경우

  - PC: 날짜까지만 입력 가능하며 시간은 무시됩니다.
  - 모바일: 날짜와 시간 모두 입력 가능하며 초는 무시됩니다.

  * from: string

    **서비스 제공 시작 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * to: string

    **서비스 제공 종료 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * interval?: string

    **서비스 제공 간격**

    - 1m: 매월 정기결제
    - 1y: 매년 정기결제

- bypass?: object

  - welcome?: object

    - acceptmethod?: string\[]

      **PC - 휴대폰 소액 결제 전용 파라미터**

      |형식                       |설명                                                                                                                                                                                                                                                                                                                                                         |
      |---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
      |hppdefaultcorp(통신사 코드)|휴대폰 소액결제시 기본 선택되어있는 통신사 <br /> - 기본: 기본 선택되어있는 통신사 없음 <br /> 예) KT 기본 선택 → ”hppdefaultcorp(KT)” 전달 <br /> - SKT: `SKT` <br /> - KT: `KTF` <br /> - LG 유플러스: `LGT` <br /> - 알뜰폰 전체: `MVNO` <br /> - 알뜰폰 CJ 헬로 모바일: `CJH` <br /> - 알뜰폰 티플러스: `KCT` <br /> - 알뜰폰 SK 세븐모바일: `SKL` <br />|
      |hppnofix(N 또는 Y)         |휴대폰 소액결제창에 자동 입력되는 `buyer_tel`값을 수정할 수 있는지 여부 <br /> - 기본값: 수정 가능 <br /> - Y : 수정 불가능 <br /> - N : 수정 가능(기본) <br />                                                                                                                                                                                              |

      ```json
      {
        "channelKey": "{콘솔 내 연동 정보의 채널키}",
        "bypass": {
          "welcome": {
            "acceptmethod": [
              "SKIN(#fc6b2d)", // 결제창 배경 색상 #fc6b2d
              "below1000", // 1,000원 이하 결제 허용
              "paypopup", // 안심 클릭을 팝업으로 렌더링
              "onlyeasypaycode(kakaopay:payco)", // 카드 결제창 내 간편결제는 카카오페이와 페이코만 렌더링
              "hppdefaultcorp(KT)", // 휴대폰 소액결제시 KT 기본 선택
              "hppnofix(Y)" // 휴대폰 소액결제시 결제 창 내에서 구매자 전화번호 수정 불가능
            ]
          }
        }
      }
      ```

    - P\_RESERVED?: string\[]

      **모바일 - 휴대폰 소액 결제 전용 파라미터**

      |형식                          |설명                                                                                                                                                                                                                                                                                                                                                     |
      |------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
      |hpp\_default\_corp=통신사 코드|휴대폰 소액결제시 기본 선택되어있는 통신사 <br /> - 기본: 기본 선택되어있는 통신사 없음 <br /> 예) KT 기본 선택 → ”hpp\_default\_corp=KT” 전달 <br /> - SKT: `SKT` <br /> - KT: `KTF` <br /> - LG 유플러스: `LGT` <br /> - 알뜰폰 전체: `MVNO` <br /> - 알뜰폰 CJ 헬로 모바일: `CJH` <br /> - 알뜰폰 티플러스: `KCT` <br /> - 알뜰폰 SK 세븐모바일: `SKL`|
      |hpp\_nofix=Y 또는 N           |휴대폰 소액결제창에 자동 입력되는 buyer\_tel값을 수정할 수 있는지 여부 <br /> - 기본: 수정 가능 <br /> - Y : 수정 불가능 <br /> - N : 수정 가능(기본) <br />                                                                                                                                                                                             |

      ```json
      {
        "channelKey": "{콘솔 내 연동 정보의 채널키}",
        "bypass": {
          "welcome": {
            "P_RESERVED": [
              "below1000=Y", // 1,000원 이하 결제 허용
              "hpp_default_corp=KT", // 휴대폰 소액결제시 KT 기본 선택
              "hppnofix=Y" // 휴대폰 소액결제시 결제 창 내에서 구매자 전화번호 수정 불가능
            ]
          }
        }
      }
      ```

</details>

<details>

<summary>

<strong>웰컴페이먼츠 지원 빌링키 발급과 동시에 결제 수단</strong>

</summary>

- phone

</details>

</div>

</div>

<details>

<summary>

<strong>가능한 트랜잭션 환경</strong>

</summary>

- PC (iframe)
- 모바일 (리디렉션)

</details>
