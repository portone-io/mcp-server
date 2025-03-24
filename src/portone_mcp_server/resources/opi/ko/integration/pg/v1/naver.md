---
title: 네이버페이(결제형)
description: 네이버페이 결제형 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/naverpay
---

## 1. 네이버페이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 PG 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
네이버페이 결제형 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 IMP.request\_pay(param,
callback) 호출 후 **callback** 으로 수신 되며
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="일반결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001", // 상점에서 관리하는 주문 번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    naverUseCfm: "20221231", // 이용완료일자(필요시 설정합니다)
    naverPopupMode: true, // 팝업모드 활성화
    m_redirect_url: "{결제 완료 후 리디렉션 될 URL}",
    naverPurchaserName: "구매자이름",
    naverPurchaserBirthday: "20151201",
    naverChainId: "sAMplEChAINid",
    naverMerchantUserKey: "고객사의 사용자 키",
    naverCultureBenefit: true, // 문화비 소득공제 적용여부
    naverProducts: [
      {
        categoryType: "BOOK",
        categoryId: "GENERAL",
        uid: "107922211",
        name: "한국사",
        payReferrer: "NAVER_BOOK",
        sellerId: "sellerA",
        count: 10,
      },
      {
        categoryType: "MUSIC",
        categoryId: "CD",
        uid: "299911002",
        name: "러블리즈",
        payReferrer: "NAVER_BOOK",
        sellerId: "sellerB",
        count: 1,
      },
      {
        categoryType: "TRAVEL",
        categoryId: "DOMESTIC",
        uid: "11234355",
        name: "국내 호텔 여행",
        payReferrer: "NAVER_MAP",
        sellerId: "sellerC",
        count: 1,
        startDate: 20240117,
        endDate: 20240118,
      },
    ],
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `naverpay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- naverUseCfm?: string

  **이용 완료일** (`yyyyMMdd` 형식의 문자열로 **결제 당일 또는 미래의 일자**여야 함)

  - 상품 유형에 따라 네이버페이-고객사 간 필수값으로 계약되는 경우 입력합니다

- name: string

  **제품명**

  네이버페이 내부적으로 `외 2개` 의 표현이 자동생성되므로 `xxxx 외 2개` 대신`naverProducts[0].name`(첫번째 상품명)으로 설정하길 권장합니다.

- naverPopupMode?: boolean

  **결제창 팝업여부**

  `false`인 경우 페이지 리디렉션 방식으로 진행되며 `m_redirect_url`을 설정해야 합니다

- m\_redirect\_url?: string

  **리다이렉트 URL**

  리디렉션 방식으로 진행(`naverPopupMode: false`)할 경우 결제 완료 후 리디렉션 될 URL

- naverPurchaserName?: string

  **구매자 이름**

  결제 상품이 고위험 업종에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 **대상 고객사만 필수 입력**합니다.

- naverPurchaserBirthday?: string

  **구매자 생년월일(yyyyMMdd)**

  결제 상품이 고위험 업종에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 **대상 고객사만 필수 입력**합니다.

- naverProducts: object\[]

  **상품정보**

  네이버페이 매뉴얼의 **`productItems`** 파라미터와 동일합니다.

  (해당 파라미터 누락시 네이버페이 검수를 통과할 수 없습니다.)

  `naverProducts`는 다음 6개의 속성으로 하나의 상품 정보를 표현하는 객체의 배열입니다.

  - categoryType: string

    [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product) 참고

  - categoryId: string

    [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product) 참고

  - uid: string

    고객사 내부의 상품 고유 ID를 활용하는 것이 일반적이지만, 네이버페이 가이드 참고가 필요합니다. [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product)

  - name: string

    **주문상품의 명칭**

  - count: number

    **상품 주문 개수**

  - payReferrer?: string

    네이버 플랫폼의 타 서비스와 제휴계약 후 유입분석을 진행하는 경우에만 입력 [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product_ref)

  - startDate?: string

    시작일(yyyyMMdd, 예: 20160701) 결제 상품이 공연, 영화, 보험, 여행, 항공, 숙박인 경우 입력을 권장합니다. ( 숫자 허용 )

  - endDate?: string

    종료일(yyyyMMdd, 예: 20160701) 결제 상품이 공연, 영화, 보험, 여행, 항공, 숙박인 경우 입력을 권장합니다. ( 숫자 허용 )

  - sellerId?: string

    고객사가 하위 판매자를 식별하기 위한 고유 ID(영문 대소문자 및 숫자 허용)

    - 고객사의 업종이 통신판매중개업에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 대상 고객사만 필수 입력합니다.
    - 비대상 고객사는 입력하지 않습니다.

- naverChainId(deprecated)?: string

  **네이버페이 그룹형 고객사용 chain id**

  포트원 콘솔에서 채널 등록 시 chain id를 추가하시고 channelKey 파라미터를 이용해 채널을 지정하신다면 설정이 필요 없는 값입니다.

  deprecated된 pg 파라미터를 이용하여 채널을 선택할 경우 설정이 필요합니다.

- naverCultureBenefit?: boolean

  **네이버페이 도서/공연 소득공제**

  도서/공연 소득공제가 필요한 경우 해당 파라미터를 설정합니다.

- naverMerchantUserKey?: string

  **고객사의 사용자 키**

  - 개인 아이디와 같은 개인정보 데이터는 제외하여 전달해야 합니다.
  - 네이버페이 기준 **고위험군 제품을 판매하는 고객사의 경우 필수** 입력합니다.
  - 비 대상 고객사는 입력하지 않습니다.

</div>

<div class="tabs-content" data-title="정기결제창 요청">

**빌링키 발급받기**

```ts title="JavaScript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    customer_uid: "gildong_0001_1234", // 빌링, 필수 입력.
    merchant_uid: "order_monthly_0001", // 상점에서 생성한 고유 주문번호
    name: "Slim 요금제(1개월 단위)",
    amount: 1004, // 실 결제는 발생되지 않습니다.
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678", // 필수 입력.
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    naverProductCode: "반복결제 상품코드",
    naverProductCount: 5,
    naverPopupMode: true, // 팝업모드 활성화
    m_redirect_url: "{등록 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `naverpay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **빌링키**

  - 정기/반복 결제 등록을 위해서 지정해야 합니다. 미 지정 시, 일반결제로 진행됩니다.
  - 등록 후 해당 키를 사용해 반복결제 승인을 요청할 수 있습니다.

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

  정기/반복 결제 등록과정에서는 결제승인이 이뤄지지 않습니다.

- naverProductCode: string

  **고객사의 상품코드**

  - 동일한 고객이 동일상품에 대해 중복으로 반복결제 등록하는 것을 방지하기 위한 파라미터입니다.
  - 기본값은 random으로 자동 생성되어 중복결제가 가능하므로 값을 지정해 주세요.

- naverProductCount: number

  **결제대상 상품 수**

- name: string

  **제품명**

  네이버페이 내부적으로 **`외 2개`** 의 표현이 자동생성되므로 **`xxxx 외 2개`** 대신`naverProducts[0].name`(첫번째 상품명)으로 설정하길 권장합니다.

- naverPopupMode?: boolean

  **결제창 팝업여부**

  `false`인 경우 페이지 리디렉션 방식으로 진행되며 `m_redirect_url`을 설정해야 합니다

- m\_redirect\_url?: string

  **리다이렉트 URL**

  리디렉션 방식으로 진행(`naverPopupMode`: **false**)할 경우 결제 완료 후 리디렉션 될 URL

- naverActionType?: string

  **신규 등록/수단 변경 여부**

  네이버페이를 통해 발급한 빌링키의 결제 수단을 변경하고자 하는 경우 포트원 빌링키인 `customer_uid`를 동일하게 입력하고, `naverActionType` 파라미터를 `CHANGE`로 입력하여 빌링키를 재발급해야 합니다.

  `naverActionType` 파라미터를 이용하지 않고 동일한 고객의 정보로 추가 빌링키를 발급 시도하면 이전의 결제 수단 정보가 구매자의 네이버페이 계정에 그대로 남아있어 문제가 발생할 수 있습니다.

  - `NEW`(default) : 신규 등록
  - `CHANGE` 결제 수단 변경

<br />

**결제요청하기**

빌링키 발급이 완료되면 설정한 **`customer_uid`** 를 이용하여 결제승인 API를 호출하여 결제를 요청하거나 결제를 예약할 수 있습니다

<br />

**결제 요청방법**

REST API [**/subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain) 를 호출하여 결제를 요청할 수 있습니다.

- customer\_uid: string

  정기/반복결제 등록 시 사용된 해당 고객의 `customer_uid`

- merchant\_uid: string

  **고객사 주문번호**

- amount: number

  **결제승인 요청금액** (결제고객 등록 시 지정된 금액과 달라도 무방함)

- tax\_free: number

  **`amount` 중 면세공급가액** (기본값: 0)

- name: string

  **주문의 명칭**

- extra.naverUseCfm: string

  **이용 완료일** (yyyyMMdd 형식의 문자열로 결제 당일 또는 미래의 일자여야 함)

  상품 유형에 따라, 네이버페이-고객사 간 필수값으로 계약되는 경우 입력합니다.

```json title="sample json"
{
  "customer_uid": "gildong_0001_1234",
  "merchant_uid": "order_monthly_0002", //재사용 불가
  "amount": 10000,
  "name": "Slim 요금제(최초과금)",
  "extra": {
    "naverUseCfm": "20201001"
  }
}
```

```http title="form-urlencoded"
customer_uid={고객사의 결제 고객을 특정하는 Unique Key}&merchant_uid={고객사 주문번호}&amount=10000&name=Slim 요금제(최초과금)&extra[naverUseCfm]=20201001
```

**결제 예약방법**

REST API [**/subscribe/payments/schedule**](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe?v=v1#post%20%2Fsubscribe%2Fpayments%2Fschedule)를 호출하여 결제예약을 할 수 있습니다.

- customer\_uid: string

  정기/반복결제 등록 시 사용된 해당 고객의 `customer_uid`

- schedules: object\[]

  **결제 예약 정보 객체 배열**

  1개 이상 설정 가능합니다.

  - merchant\_uid: string

    **고객사 주문번호**

  - schedule\_at: string

    **결제요청 예약시각**

    UNIX timestamp로 설정합니다.

  - amount: number

    **결제승인 요청금액**

    결제고객 등록 시 지정된 금액과 달라도 무방합니다.

  - extra: object

    - naverUseCfm: string

      이용 완료일(yyyyMMdd 형식의 문자열로 결제 당일 또는 미래의 일자여야 함) 상품 유형에 따라, 네이버페이-고객사 간 필수값으로 계약되는 경우 입력합니다.

```json title="sample json"
{
  "customer_uid": "gildong_0001_1234",
  "schedules": [
    {
      "merchant_uid": "order_monthly_0003", //재사용 불가
      "schedule_at": 1519862400,
      "amount": 10000,
      "extra": {
        "naverUseCfm": "20201001"
      }
    }
  ]
}
```

```http title="form-urlencoded"
customer_uid={고객사의 결제 고객을 특정하는 Unique Key}&schedules[0][merchant_uid]={고객사 주문번호}&schedules[0][schedule_at]={결제요청 예약시각 UNIX timestamp}&schedules[0][amount]=10000&schedules[0][extra][naverUseCfm]=20201001\
```

</div>

</div>

<div class="hint" data-style="warning">

**연동 주의사항**

### 에러 메세지를 가공하지 않은 상태로 노출해야합니다.

결제창 호출(IMP.request\_pay 함수)후 결제창 하단의 "취소" 버튼 클릭 등으로 결제 프로세스가 중단되거나
잔액 부족, 한도 초과, 10원 미만 결제 등의 사유로 결제에 실패하면
콜백 함수(popup 방식)/m\_redirect\_url(리디렉션 방식)로 전달되는 결제 결과(response 객체/쿼리 파라미터)에 실패 사유(error\_msg)가 전달됩니다.
이 에러 메시지는 사용자에게 가공 없이 그대로 노출되어야 합니다. 해당 내용을 준수하지 않는 경우 네이버페이 검수 진행시 수정 요청이 있을 수 있습니다.

예) error\_msg가 "잔액 부족"이라고 가정할때, "결제에 실패하였습니다. 실패 사유:" + "잔액 부족"과 같은 형태로 가공되면 안됨

### 최소 결제 금액에 대해 예외 처리해야 합니다.

네이버페이 결제형의 경우 10원 이상부터 결제가 가능합니다. 10원 미만의 경우 결제 요청에 대해 예외 처리가 필요합니다.

예) 사용자에게 최소 결제 금액이 10원이라 결제를 할 수 없다는 의미를 담는 에러 메시지가 노출되어야 함

</div>

<div class="hint" data-style="info">

**"API 호출 권한이 없습니다"**

네이버페이 결제형 연동은 **네이버페이 검수진행이 시작되기 전까지는 운영환경에서 결제창 호출시**

**위와 같은 오류가 도출**됩니다. 해당 부분은
검수가 진행되면 해결되는 부분이기 때문에 무시해주시면 됩니다.

</div>

<details>

<summary>거래 취소 시 유의사항</summary>

포트원 환불 API인 `POST` [**`/payments/cancel`**](https://developers.portone.io/api/rest-v1/payment?v=v1#post%20%2Fpayments%2Fcancel) 호출시 아래 파라미터를 반드시 설정해 주셔야 합니다.
(**해당 파라미터 누락시 네이버페이 실 검수를 통과할 수 없습니다.**)

- extra: object

  - requester: string

    **API를 호출하는 출처**

    - customer: 구매자에 의한 요청
    - admin(기본값): 어드민에 의한 요청

- reason: string

  **결제 취소 사유.**

**예시(json)**

```json
{
  "imp_uid": "imp_123412341234", //환불처리할 포트원 거래고유번호
  "amount": 3000, //환불할 금액
  "reason": "결제 취소 사유", //실제 사유와 같아야 함
  "extra": {
    "requester": "customer"
  }
}
```

**예시(form-urlencoded)**

```http
imp_uid=imp_123412341234&amount=3000&extra[requester]=customer
```

</details>

<details>

<summary>빌링키 삭제 시 유의사항</summary>

포트원 빌링키 삭제 API인 `DELETE` [**`/subscribe/customers/{customer_uid}`**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#delete%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D) 호출시 아래 파라미터를 반드시 설정해 주셔야 합니다.
(**해당 파라미터 누락시 네이버페이 실 검수를 통과할 수 없습니다.**)

- extra: object

  - requester: string

    **API를 호출하는 출처**

    - customer: 구매자에 의한 요청
    - admin(기본값): 어드민에 의한 요청

- reason: string

  **결제 취소 사유.**

**예시(Query string)**

```http
reason=사용자 요청에 의한 해지&extra[requester]=customer
```

</details>

## 3. 검수요청 하기

네이버페이(결제형)은 다른 결제대행사와 다르게 별도의 검수절차가 존재합니다.
자세한 검수 요청 가이드는 [헬프센터 > 네이버페이(결제형) 검수요청 항목](https://help.portone.io/content/naverpay-review-items) 페이지를 참고부탁드립니다.
