---
title: 연동 유의사항
description: (신)페이팔 정기결제(RT) 이용시 특이사항을 확인할수 있습니다.
targetVersions:
  - v1
---

## RT 연동 유의사항

<details>

<summary>빌링키 발급 수단 및 정보를 알 수 없음</summary>

페이팔을 통해 다양한 수단으로 빌링키 발급이 가능하지만, 페이팔이 승인 된 빌링키 발급 수단 및 정보를 알려주지 않습니다. 따라서 페이팔 빌링키 발급 건의 결제 수단(pay\_method)은 모두 paypal로 일괄 저장되며 [발급 된 빌링키 정보 조회](https://developers.portone.io/api/rest-v1/billingkey?v=v1#get%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)시 카드 정보는 모두 null로 내려갑니다.

```http
GET /subscribe/customers/{customer_uid}

{
  // ...중략
  "pg_provider": "paypal_v2",
  "customer_uid": "{customer_uid}",
  "card_name": null,
  "card_code": null,
  "card_number": null,
  "card_type": null
}
```

</details>

<details>

<summary>Magnes & Fraudnet 이상 거래 대응 필요</summary>

페이팔은 이상 거래를 줄이기 위해 Risk Data Acquisition 정책을 시행하고 있습니다.
일반 결제나 빌링키 발급은 페이팔 버튼을 통해 진행되기 때문에
페이팔이 이상 거래 판단을 위한 구매자 접속 정보를 얻을 수 있지만,
브라우저에서 발급 된 빌링키로 재결제 (again API 호출) 할때는 고객사 브라우저에서 포트원 API를 통해
페이팔 API가 호출되는 구조이기 때문에 이상 거래 판단을 위한 구매자 접속 정보를 얻을 수 없습니다.

따라서 발급 된 빌링키로 재결제를 할때는 구매자의 브라우저/디바이스 접속 정보를
페이팔에 전달할 수 있도록 **again API가 호출되는 고객사 클라이언트 페이지에
반드시 페이팔 Fraudnet 스크립트/Magnes SDK를 아래와 같이 추가해야** 합니다.

**페이팔 RT를 통한 again API 호출시에는 Magnes & Fraudnet 조치가 필수적으로 요구됩니다.**

브라우저/앱에 페이팔 Fraudnet Script/Magnes SDK를 추가한 후 again API를 호출할때 진행되는 플로우는 아래와 같습니다.

(관련 이미지 첨부)

### 브라우저

```html
<!-- again API가 호출되는 고객사 클라이언트 -->
<script
  type="application/json"
  fncls="fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"
>
  {
    "f": "RISK_SESSION_CORRELATION_ID",
    "s": "SOURCE_IDENTIFIER",
    "sandbox": true
  }
</script>
<script type="text/javascript" src="https://c.paypal.com/da/r/fb.js"></script>
<noscript>
  <img
    src="https://c.paypal.com/v1/r/d/b/ns?f=RISK_SESSION_CORRELATION_ID&s=SOURCE_IDENTIFIER&js=0&r=1"
  />
</noscript>
```

|파라미터 |설명                                                                           |예시                                           |
|---------|-------------------------------------------------------------------------------|-----------------------------------------------|
|`fncls`  |`fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99`로 항상 고정                    |`fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99`|
|`f`      |주문번호(`merchant_uid`) 전달                                                  |`mid_1683690731602`                            |
|`s`      |string (`{페이팔 Account ID}_{페이지 유형}` 형식. 페이지 유형은 아래 목록 참고)|`7WBB3CKT63FRG_checkout-page`                  |
|`sandbox`|페이팔 Account ID가 테스트 용인지 운영 용인지 여부                             |`true`                                         |

**\[페이지 유형]**

- `home-page`
- `search-result-page`
- `category-page`
- `product-detail-page`
- `cart-page`
- `inline-cart-page`
- `checkout-page`

### 앱

#### 안드로이드

[**Android Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/android/) 가이드 문서에 따라
아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야 합니다.
이때 두번째 파라미터(paypalClientMetaDataId)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```java
MagnesResult magnesResult = MagnesSDK.getInstance()
   .collectAndSubmit(Context context, String paypalClientMetaDataId,
     HashMap<String, String>
     additionalData)
```

### IOS Switft

[**iOS Swift SDK Integration**](http://developer.paypal.com/limited-release/magnes/integrate/ios-swift/) 가이드 문서에 따라
아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야 합니다.
이때 첫번째 파라미터(withPayPalClientMetadataId)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```swift
let magnesResult:MagnesResult =
MagnesSDK.shared().collectAndSubmit(withPayPalClientMetadataId:
  "YOUR-PAYPAL-CLIENT-METADATA-ID", withAdditionalData: [String: String])
```

### IOS Objective-C

[**iOS Objective-C SDK Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/ios-objective-c/) 가이드 문서에 따라
아래와 같이 collectAndSubmitWithPayPalClientMetadataId 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야 합니다.
이때 첫번째 파라미터(YOUR-PAYPAL-CLIENT-METADATA-ID)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```objective-c
//PPRMOCMagnesSDK *magnesSDK = [PPRMOCMagnesSDK shared];
PPRMOCMagnesSDKResult *magnesResult =
[magnesSDK
collectAndSubmitWithPayPalClientMetadataId:@"YOUR-PAYPAL-CLIENT-METADATA-ID"
withAdditionalData:@{}];
```

</details>

<details>

<summary>파라미터 유의사항</summary>

### `name`

빌링키 발급 창 내 “판매자가 보낸 메모” 하단에 표기할 메시지를 name 파라미터로 전달할 수 있습니다.

(관련 이미지 첨부)

### `pg`

필수 입력이며 페이팔의 경우 `paypal_v2` 또는 `paypal_v2.{페이팔 Account ID}`를 입력해야 합니다. **paypal로 입력시 빌링키 발급이 불가능**합니다.

### `pay_method`

`paypal`만 입력 가능하며 다른 값을 입력하면 “페이팔에서 제공하지 않는 빌링키 발급 수단입니다.”라는 에러 메시지와 함께 빌링키 발급 창이 호출되지 않습니다.

또한 pay\_method를 `paypal`로 입력 후 카드, 계좌 등 어떤 결제 수단으로 빌링키를 발급 받아도 빌링키 발급 수단은 무조건 `paypal`로 저장됩니다. 이는 페이팔이 실제 발급 된 빌링키 종류를 구분해 알려주지 않고 모두 `paypal`로 일괄 응답해주기 때문입니다.

### `bypass.paypal_v2.style`

페이팔 RT 버튼을 커스터마이징 하기 위한 파라미터입니다. 자세한 내용은 [페이팔에서 제공하는 문서](http://developer.paypal.com/sdk/js/reference/#link-style)를 참고하세요.

### `bypass.paypal_v2.shipping_address`

페이팔은 기본적으로 구매자가 페이팔에 가입할때 입력 한 배송 정보를 빌링키 발급 창에 자동으로 입력해줍니다. 만약 이 배송 정보를 override하고 싶다면 shipping\_address 파라미터에 override할 주소를 입력하고 shipping\_address.recipient\_name에 override할 수령인 이름을 입력하면 됩니다.

배송 정보 중 **`line1`, `city` 그리고 `country_code`는 필수 입력**입니다. 전달하지
않을 경우 에러가 리턴되며 빌링키 발급 창이 호출되지 않습니다.

```json
{
  "bypass": {
    "paypal_v2": {
      // ...중략
      "shipping_address": {
        // 상품 수령 주소
        "recipient_name": "홍길동", // 수령인 이름
        "line1": "세종대로 110", // 도로명 주소
        "line2": "서울특별시청", // 아파트 동 호수
        "city": "중구", // 시(Los Angeles, New York)
        "state": "서울특별시", // 주(CA, NY)
        "postal_code": "04524", // 상품 수령지 우편번호
        "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
      }
    } // end-of paypal_v2
  } // end-of-bypass
}
```

(이미지 첨부: shipping\_address를 전달하지 않은 경우 가입시 설정된 기본 정보(수령인 이름: John Doe / 배송 주소: 1 Main St, San Jose, CA 95131, UnitedStates)로 설정됩니다.)

(이미지 첨부: shipping\_address에 수령인 이름과 배송 정보를 전달한 경우 수령인 이름과 배송 정보가 override 됩니다.)

</details>

<details>

<summary>사용 불가능한 파라미터</summary>

### `amount/tax_free`

결제/면세 금액 파라미터는 결제 시에만 제공되기 때문에 빌링키 발급 시에는 무조건 0으로 저장됩니다.

### `country`

빌링키 발급 국가를 의미하는 country 파라미터로 페이팔 sandbox 모드에서만 유의미하며 **운영 모드에서는 구매자가 접속한 환경에 따라 자동 적용되기 때문에 전달한 파라미터가 무시**됩니다.

### `currency`

결제 통화를 의미하는 currency 파라미터로 빌링키 발급시에는 결제가 되지 않기 때문에 해당 파라미터는 무시됩니다.

### `buyer_addr`

페이팔 빌링키 발급 창 내에는 상품 배송지(shipping address)가 표기되는데, 이 상품 배송지는 페이팔 회원가입시 기입한 정보가 자동으로 입력됩니다.

단, 이때의 주소는 총 5개의 영역으로 나누어진 상세 주소로 기존에 포트원이 제공하던 buyer\_addr 파라미터로는 커버가 불가능하므로 페이팔 전용 파라미터(`bypass.paypal_v2.shipping_address`)를 사용하셔야 합니다. 자세한 내용은 하단의 예제 코드를 참고해주세요.

```json
{
  "bypass": {
    "paypal_v2": {
      // ...중략
      "shipping_address": {
        // 상품 수령 주소
        "recipient_name": "홍길동", // 수령인 이름
        "line1": "세종대로 110", // 도로명 주소
        "line2": "서울특별시청", // 아파트 동 호수
        "city": "중구", // 시(Los Angeles, New York)
        "state": "서울특별시", // 주(CA, NY)
        "postal_code": "04524", // 상품 수령지 우편번호
        "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
      }
    } // end-of paypal_v2
  } // end-of-bypass
}
```

### `popup`

페이팔의 경우 빌링키 발급 창이 무조건 팝업으로 렌더링되기 때문에 해당 파라미터는 무시 됩니다.

### `m_redirect_url`

페이팔의 경우 PC와 모바일 모두 팝업으로 빌링키 발급 창이 렌더링되기 때문에 빌링키 발급 프로세스 종료시 모두 콜백 함수가 호촐됩니다. 따라서 m\_redirect\_url 파라미터는 무시됩니다.

### `app_scheme`

페이팔의 경우 외부 앱으로 이동하는 경우가 없기 때문에 해당 파라미터는 무시됩니다.

### `escrow`

페이팔의 경우 에스크로 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

### `language`

빌링키 발급 창 언어 설정을 의미하는 language 파라미터는 구매자가 접속한 환경에 따라 자동 적용되기 때문에 전달한 파라미터가 무시됩니다.

### `bypass.isCulturalExpense`

페이팔의 경우 문화비 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `bypass.cashReceiptType`

페이팔의 경우 현금영수증 발급이 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `bypass.customerIdentifier`

페이팔의 경우 현금영수증 발급이 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `bypass.useInternationalFreeFromMall`

페이팔의 경우 상점 부담 무이자 할부가 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `card`

페이팔의 경우 카드사 다이렉트 호출, 상점 부담 무이자 할부, 렌더링 될 카드 종류 제어 등이 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `display`

카드 할부 개월수를 의미하는 display: { card\_quota } 파라미터는 결제 시에만 적용되므로 빌링키 발급 시에는 무시됩니다.

### `vbank_due`

페이팔의 경우 가상계좌 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

### `appCard`

페이팔의 경우 앱카드 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `useCardPoint`

페이팔의 경우 카드 포인트 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `period`

페이팔은 빌링키 발급 창 내 제공 기간 정보 노출을 지원하지 않아 해당 파라미터가 무시됩니다.

### `storeDetails`

페이팔은 상점 세부 정보를 입력할 필요가 없기 때문에 해당 파라미터가 무시됩니다.

</details>
