---
title: 연동 유의사항
description: (신)페이팔 일반결제(SPB) 이용시 특이사항을 확인할수 있습니다.
targetVersions:
  - v1
---

<details>

<summary>결제수단을 알수 없음</summary>

페이팔을 통해 카드 결제 외 BanContact, BLIK, eps, giropay 등 다양한 결제 수단으로 결제가 가능하지만,
**페이팔이 승인 된 결제 수단을 알려주지 않기 때문**에 페이팔의 모든 결제 건의 결제 수단은 paypal로 일괄 저장됩니다.

</details>

<details>

<summary>할부 결제 여부와 할부 개월수를 알 수 없음</summary>

Pay Later를 이용하면 할부 결제가 가능합니다. 하지만 **페이팔이 승인 된 할부 정보를 알려주지 않기 때문**에
실제로 할부로 결제가 됐는지, 됐다면 몇 개월 할부로 결제 됐는지 알 수 없습니다.

</details>

<details>

<summary>접속한 국가에 따라 렌더링 되는 결제 버튼이 다름</summary>

페이팔은 **구매자가 접속한 나라에 따라 이용 가능한 결제 수단이 달라지는 방식**입니다.
따라서 구매자가 접속한 나라에 따라 렌더링 되는 버튼의 종류와 개수가 달라집니다.

(관련 이미지 첨부)

(관련 이미지 첨부)

</details>

<details>

<summary>회원 / 비회원 결제 플로우가 다름</summary>

페이팔은 네이버페이와 같이 구매자가 페이팔에 가입한 계정으로 로그인한 후
등록된 결제 수단(없다면 새로 등록 또는 카드 정보 직접 입력)으로 결제를 하는 방식입니다.

페이팔에 가입되어있지 않은 구매자도 비회원으로 결제가 가능하지만,
회원으로 로그인했을 때와 사용 가능한 결제 수단과 렌더링 되는 결제창에 다소 차이가 있습니다.
회원 / 비회원간 적용/사용 가능한 기능 차이를 간략하게 정리하면 아래와 같습니다.

(관련 이미지 첨부)

</details>

<details>

<summary>Pay Later 버튼은 enable-funding 파라미터에 반드시 paylater를 넣어야 렌더링 됨</summary>

페이팔은 할부 결제를 Pay Later로 부르고 있습니다.
포트원은 Pay Later를 버튼 형태로 제공하고 있으며, **해당 버튼을 렌더링 하기 위해서는 enable-funding 파라미터에 `paylater` 값을 반드시 넣어주셔야** 합니다.
넣지 않으면 Pay Later를 지원하는 국가에서 접속한다고 하더라도 자동으로 렌더링 되지 않습니다. (단, 미국 제외)

```tsx
IMP.loadUI({
  // ...중략
  bypass: {
    paypal_v2: {
      //  ...중략
      "enable-funding": "paylater",
    },
  },
});
```

Pay Later Button은 기본적으로 **구매자가 접속한 국가에 따라 해당 국가에 맞는 버튼이 렌더링** 되며,
**Pay Later 기능을 제공하지 않는 국가에서 접속했을 땐** enable-funding 파라미터에 `paylater` 값을 전달해도 **Pay Later 버튼이 렌더링되지 않**습니다.

(이미지 첨부: 접속 국가: 벨기에 enable-funding: “paylater” → 아무 버튼도 렌더링 되지 않음)

(이미지 첨부: 접속 국가: 프랑스  enable-funding: “paylater” → 4X Paypal 버튼이 렌더링 됨)

(이미지 첨부: 접속 국가: 이탈리아 enable-funding: “paylater” → Paga in 3 rate 버튼이 렌더링 됨)

</details>

<details>

<summary>Pay Later를 지원하는 국가 별로 페이팔 계정을 별도로 만들어야 함</summary>

Pay Later로 결제가 가능한 국가와 통화는 매우 제한적이며 그 방식 또한 국가 별로 상이합니다. 자세한 내용은 아래 국가별 정책을 참고해주세요.

- **US(미국) / USD(달러)**

  - Pay in 4

    Eligible US buyers can pay in four interest-free payments for purchases of $30 to $1,500.

    30 \~ 1,500 달러 결제시에 4개월 무이자 할부

    - 자세히 보기 (ex. 700달러 결제)

      (관련 이미지 첨부)

  - Pay Monthly

    Eligible US buyers can pay in 6, 12, or 24 monthly installments for purchases of $199 to $10,000.

    199 \~ 10,000 달러 결제시 6, 12, 24개월 (유이자) 할부 중 선택하는 방식

    - 자세히 보기 (ex. 700달러 결제)

      (관련 이미지 첨부)

- **AU(호주) / AUD(호주 달러)**

  - Pay in 4

    Pay Later in Australia includes Pay in 4, which eligible AU buyers can use to pay in four interest-free payments for purchases of $30 to $2,000 AUD. The first payment is due at the time of the transaction, and subsequent payments are due every two weeks.

    30 \~ 2,000 호주 달러까지의 결제 건에 대해 2주마다 4번에 걸쳐 결제

    - 자세히 보기 (ex. AUD 호주 달러 결제)

      (관련 이미지 첨부)

- **GE(독일) / EUR(유로화)**

  - PayPal Ratenzahlung

    Eligible German buyers can pay in 3, 6, 12, or 24 monthly installments for purchases of 99€ to 5,000€.

    99 \~ 5,000 유로까지의 결제 건에 대해 3, 6, 12, 24개월 (유이자) 할부 중 선택하는 방식

    - 자세히 보기 (ex. 700 유로 결제)

      (관련 이미지 첨부)

  - Pay in 30

    Eligible German buyers can pay within 30 days for purchases of 1€ to 1,000€.

    1 \~ 1,000 유로까지의 결제 건에 대해 30일 안에 결제하는 방식. 30일 안에 자동으로 결제 될 은행 계좌(IBAN, International Bank Account Number)를 등록해야 한다.

- **ES(스페인) / EUR(유로화)**

  - Pay in 3 installments

    Pay Later in Spain includes Pay in 3 instalments, which eligible buyers in Spain can use to pay in three interest-free payments for purchases of 30€ – 2,000€. The first payment is due at the time of the transaction, and subsequent payments are due every month.

    30 \~ 2,000 유료까지의 결제 건에 대해 3개월 무이자 할부

    - 자세히 보기 (ex. 700 유로 결제)

      (관련 이미지 첨부)

- **IT(이탈리아) / EUR(유로화)**

  - Pay in 3 installments

    Pay Later in Italy includes Pay in 3 installments, which eligible buyers in Italy can use to pay in three interest-free payments for purchases of 30€ – 2,000€. The first payment is due at the time of the transaction, and subsequent payments are due every month.

    30 \~ 2,000 유료까지의 결제 건에 대해 3개월 무이자 할부

    - 자세히 보기 (ex. 700 유로 결제)

      (관련 이미지 첨부)

- **FR(프랑스) / EUR(유로화)**

  - Pay in 4X

    Pay Later in France includes Pay in 4X, which is an installment offer that allows consumers to spread the cost of a purchases across four equal payments for transactions between 30€ – 2,000€. The first payment is due at the time of the transaction. The subsequent payments spread across 90 days.

    30 \~ 2,000유로까지의 결제 금액에 대해 90일에 걸쳐 4번 분할 무이자 결제

    - 자세히 보기 (ex. 700유로 결제)

      (관련 이미지 첨부)

- **GB(영국) / GBP(영국 파운드화)**

  - Pay in 3

    Eligible UK buyers can pay in three interest-free payments for purchases of £30 – £2,000.

    30 \~ 2,000 파운드까지의 결제 금액에 대해 3개월 무이자 할부

    - 자세히 보기(ex. 700 파운드 결제)

      (관련 이미지 첨부)

  - PayPal Credit - Eligible UK buyers receive a revolving line of credit that they can use to pay over time. PayPal Credit offers either 0% interest for 4 months on purchases over £99 or a merchant-specific Installment offers. For the 0% interest for 4 months offer, any remaining balance due after the promotional period or any transactions under £99 are charged interest at the standard variable rate. Terms and conditions apply.

    99 파운드 이상의 결제 금액에 대해 첫 4개월 간 무이자 할부. 4개월 이상 할부 결제 시 5개월째부터는 유이자 할부 적용

즉, 예를 들어 고객사가 독일, 스페인, 이탈리아 이렇게 3개 나라에 대해 서비스를 제공하고 각 나라별 Pay Later 기능도 함께 제공한다고 가정합니다. 이 경우 고객사는 독일, 스페인, 이탈리아용 **페이팔 머천트 계정을 각각 따로 만들어야** 합니다.

가입 후 부여 받은 페이팔 Account ID(IMP.loadUI 함수 호출시 pg 파라미터로 전달)가 각각 D, E, I라고 한다면, **고객사는 구매자가 접속한 국가에 따라 올바른 Account ID를 전달해야** 합니다. 즉, 구매자가 독일에서 접속 한 경우엔 pg: "paypal\_v2.D", 스페인에서 접속 한 경우에는 pg: "paypal\_v2.E" 마지막으로 이탈리아에서 접속 한 경우에는 pg: "paypal\_v2.I"로 입력해줘야합니다.

</details>

<details>

<summary>Pay Later 버튼을 클릭했을때 렌더링 되는 화면은 구매자의 국가를 따라 감</summary>

페이팔은 머천트든 구매자든 가입시 국가를 설정하도록 되어있습니다. **Pay Later 버튼을 클릭했을때 렌더링 되는 화면은 구매자가 페이팔에 가입시 설정한 국가에 따라 달라집**니다.

예를 들어 Pay Later 버튼이 프랑스 용 4X PayPal이라고 하더라도, 미국 구매자 계정으로 로그인을 하면 미국의 Pay Later 정책이 적용 된 (미국의 Pay Later 버튼을 클릭했을때 나오는 화면과 동일한) 화면이 렌더링 됩니다.

(이미지 첨부: 프랑스용 Pay Later 버튼을 누르고 미국으로 설정 된 페이팔 계정으로 로그인 한 경우, 미국의 Pay Later 정책(Pay in 4, Pay Monthly)이 적용 된 화면이 렌더링 됨 (언어도 영어))

(이미지 첨부: 프랑스용 Pay Later 버튼을 누르고 프랑스로 설정 된 페이팔 계정으로 로그인 한 경우, 정상적으로 프랑스의 Pay Later 정책이 적용 된 화면이 렌더링 됨 (언어도 프랑스어))

단, 구매자 계정에 설정 된 국가가 Pay Later를 제공하지 않는 국가인 경우, 일반 카드 결제 화면이 렌더링됩니다. 예를 들어 위와 같이 프랑스 용 Pay Later 버튼을 클릭한 후 Pay Later 를 제공하지 않는 한국 계정으로 로그인하면 일반 카드 결제 화면이 렌더링 됩니다.

</details>

<details>

<summary>enable-funding 파라미터에 Alternative Method 식별자를 필수로 입력해야 하는 경우가 있음</summary>

IMP.loadUI 함수를 호출해 페이팔 결제 버튼을 렌더링하면 구매자가 접속한 국가에 따라 이용 가능한 버튼들이 자동으로 렌더링 됩니다. 하지만 **일부 버튼의 경우엔 자동으로 렌더링되지 않고 있으며 그 기준이 매우 불명확해 페이팔에 확인 요청을 드린 상태**입니다.

따라서 현재로서는 나라별로 지원 가능한 Alternative Method 식별자를 enable-funding 파라미터에 아래와 같이 comma(,)로 구분 된 string(문자열) 형식으로 넣어주셔야 정상적으로 렌더링 됩니다.

💡 예) enable-funding: “paylater,bancontact”

렌더링 할 수 있는 버튼의 종류는 아래와 같습니다.

(관련 이미지 첨부)

</details>

<details>

<summary>배송지 국가가 해당 Alternative Method 지원 국가와 일치해야 함</summary>

페이팔은 기본적으로 구매자가 페이팔에 가입할때 입력 한 배송 주소를 결제 창에 자동으로 입력해줍니다. 만약 이 배송 주소를 override하고 싶다면 purchase\_units\[].shipping.address 파라미터에 override할 주소를 입력하면 됩니다.

이때 국가 코드(purchase\_units\[].shipping.address.country\_code)는 필수 입력인데 **Alternative Method로 결제시에는 이 country\_code가 해당 Alternative Method 결제가 불가능한 나라인 경우엔 결제가 불가능**하기 때문에 주의가 요구됩니다.

예를 들어 벨기에(국가코드 BE)에서만 사용 가능한 BanContact로 결제시, purchase\_units\[].shipping.address.country\_code를 BE가 아닌 다른 값으로 입력하고 BanContact 버튼을 누르면 아래와 같은 일반 카드 결제 화면이 렌더링 됩니다.

(관련 이미지 첨부)

</details>

<details>

<summary>파라미터 유의사항</summary>

- name?: string

  주문명은 비회원으로 결제시에만 결제창에 표기 됩니다.

  (관련 이미지 첨부)

  (관련 이미지 첨부)

  회원으로 결제시에는 결제창에 표기되지 않습니다.

  (관련 이미지 첨부)

  (관련 이미지 첨부)

- pay\_method: 'paypal'

  `paypal`만 입력 가능하며 다른 값을 입력하면 “페이팔에서 제공하지 않는 결제 수단입니다.”라는 에러 메시지와 함께 결제창이 호출되지 않습니다.

  또한 pay\_method를 `paypal`로 입력 후 카드, 계좌 등 어떤 결제 수단으로 결제를 해도 결제 수단은 무조건 `paypal`로 저장됩니다. 이는 페이팔이 실제 결제 된 수단을 구분해 알려주지 않고 모두 `paypal`로 일괄 응답해주기 때문입니다.

- buyer\_tel?: string

  구매자의 휴대폰 번호를 의미하며 [E164 형식](http://www.itu.int/rec/T-REC-E.164-201011-I/en)으로 입력해주셔야 합니다. 예를 들어 01012345678이라는 휴대폰 번호를 갖는 한국 사용자는 국가 번호 82와 앞에 0을 제외한 10123456778을 입력하셔야 합니다. 입력 된 휴대폰 번호는 페이팔 비회원으로 결제시 연락처 정보에 자동 입력됩니다.

  (관련 이미지 첨부)

  만약 접속 국가 형식과 맞지 않는 휴대폰 번호를 입력한 경우엔 무시(자동 완성 되지 않음)됩니다. 예를 들어 미국에서 접속했는데 한국식 번호인 “1012345678”을 입력하면 자동 완성되지 않으며 미국식 번호인 “8317578646”을 입력하면 자동 완성됩니다.

- products?: object\[]

  구매 상품 상세 정보를 의미하며 전달 한 값 중 name(상품 명), quantity(상품 수량), unitPrice(상품 단위 금액)만 결제창에 표기됩니다. **페이팔은 해당 파라미터 입력을 강력 권장**하고 있으니, 되도록 입력해주시기 바랍니다.

  ```json
  {
    "products": [
      {
        "id": "1666779119262",
        "name": "시그니처 핫 초콜릿",
        "code": "DRINK_SIGNITURE_HOT_CHOCOLATE",
        "unitPrice": 5700,
        "quantity": 2,
        "tag": "TAG-1"
      },
      {
        "id": "1666779134572",
        "name": "아이스 아메리카노",
        "code": "DRINK_AMERICANO",
        "unitPrice": 4800,
        "quantity": 3,
        "tag": "TAG-2"
      }
    ]
  }
  ```

  (관련 이미지 첨부)

  (관련 이미지 첨부)

  💡 **각 상품의 수량 \* 단위 가격의 총 합이 주문 총 금액과 반드시 일치해야**합니다. 일치하지 않는 경우 에러 메시지가 리턴되면서 결제창이 호출되지 않습니다. 예를 들어 위 예시의 경우 5,700달러 \* 2개 + 4,800달러 \* 3개 = 총 합 25,800달러이기 때문에 주문 총 금액(amount)를 25800으로 입력해야 합니다.

- currency?: string

  결제 통화를 의미합니다. 페이팔의 경우 사용 가능한 통화는 아래와 같으며, 페이팔에서 사용 불가능한 통화로 결제 시도시 에러 메시지가 리턴되며 결제창이 호출되지 않습니다.

  (관련 이미지 첨부)

  간혹, 접속 국가나 결제 수단에 따라 사용 가능한 통화가 정해져있는 경우가 있는데 이 경우 사용 불가능한 통화를 입력하면 에러 메시지가 리턴되면서 결제창이 호출되지 않습니다.

- digital?: boolean

  컨텐츠 상품 판매 시, 실물 여부 파라미터인 digital의 값에 따라 배송 주소 입력 칸의 유/무가 달라집니다.

  **digital이 false인 경우**

  (관련 이미지 첨부)

  **digital이 true인 경우**

  (관련 이미지 첨부)

- buyer\_first\_name?: string

- buyer\_last\_name?: string

  `buyer_first_name`과 `buyer_last_name`은 페이팔 **비회원으로 결제시** 결제창 내 자동 입력 될 청구 인(payer)의 이름 정보입니다. 회원으로 결제시에는 **회원 가입시 입력 한 이름 정보가 자동으로 입력**되기 때문에 buyer\_first\_name과 buyer\_last\_name으로 override 되지 않습니다.

  페이팔은 해외 결제이기 때문에 이름 전체를 의미하는 기존 buyer\_name 파라미터 대신 buyer\_fist\_name(이름)과 buyer\_last\_name(성)을 구분해 입력해 주셔야 결제창 내 정상적으로 자동 입력됩니다.

  (관련 이미지 첨부)

- bypass?: object

  - paypal\_v2?: object

    - style?: object

      페이팔 결제 버튼을 커스터마이징 하기 위한 파라미터입니다. 자세한 내용은 페이팔에서 제공하는 문서([https://developer.paypal.com/sdk/js/reference/#link-style](http://developer.paypal.com/sdk/js/reference/#link-style))를 참고하세요.

      **hotizontal 스타일 적용시 버튼이 최대 2개까지 밖에 렌더링 되지 않음**

      페이팔 버튼은 기본적으로 vertical(수직)로 렌더링 되지만, 아래와 같이 bypass 파라미터를 사용하면 horizontal(수평)로 렌더링 시킬 수 있습니다.

      ```tsx
      IMP.loadUI(
        {
          // ...중략
          bypass: {
            paypal_v2: {
              style: {
                // ...중략
                layout: "horizontal",
              },
            },
          },
        },
        // 콜백 함수
      );
      ```

      단, 이 경우 버튼이 최대 2개까지만 렌더링 되기 때문에, 페이팔에서도 layout을 horizontal이 아닌 vertical로 설정하도록 권고하고 있습니다.

      (관련 이미지 첨부)

      (관련 이미지 첨부)

    - enable-funding?: string

      렌더링을 허용할 페이팔 버튼 종류를 comma(,) separated string으로 표현한 값으로 가능한 모든 종류는 아래와 같습니다.

      (관련 이미지 첨부)

      (이미지 첨부: 접속 국가: 독일 enable-funding: “paylater”)

      (이미지 첨부: 접속 국가: 독일 enable-funding: “paylater”)

      (이미지 첨부: 접속 국가: 한국)

      (이미지 첨부: 접속 국가: 이탈리아 enable-funding: “paylater”)

    - disable-funding?: string

      렌더링을 허용 하지 않을 페이팔 버튼 종류를 comma(,) separated string으로 표현한 값으로 가능한 모든 종류는 enable-funding과 동일합니다.

      (이미지 첨부: 접속 국가: 이탈리아 enable-funding: “paylater”)

      (이미지 첨부: 접속 국가: 이탈리아 enable-funding: “paylater” disable-funding: “mybank”)

    - purchase\_units: object\[]

      페이팔 주문 상세 정보를 의미하는 배열로 각각의 element에 배송 정보를 담을 수 있습니다.

      💡 포트원을 통해 페이팔을 연동하는 고객사는 **purchase\_units의 길이가 항상 0 또는 1이어야** 합니다.

      페이팔은 구매자가 페이팔에 가입할때 입력 한 배송주소를 결제창에 기본적으로 렌더링하지만, 이를 override하고 싶을때 purchase\_units\[].shipping.address에 override할 주소를 입력할 수 있습니다. 단, **주소가 유효하지 않거나 address\_line\_1을 입력하지 않은 경우엔 override가 되지 않**습니다.

      💡 배송 정보 중 `admin_area_2`와 `country_code`는 필수 입력입니다.

      purchase\_units\[]에 입력 된 배송 정보는 기본적으로 결제창에 자동 완성되지만, 페이팔 회원으로 결제할 때와 비회원으로 결제할 때 각각 다른 정책이 적용됩니다.

      - **페이팔 회원으로 결제시**

        - **shipping.address 정보 미입력**

          (이미지 첨부: bypass.paypal\\\_v2.purchase\\\_units\\\[\\].shipping 미입력 → 가입시 설정한 배송 주소로 자동 입력 됨)

        - **shipping.address 정보 입력**

          ```json
          {
            "bypass": {
              "paypal_v2": {
                // ...중략
                "purchase_units": [
                  {
                    "shipping": {
                      "address": {
                        // 상품 수령 주소
                        "address_line_1": "세종대로 110", // 도로명 주소
                        "address_line_2": "서울특별시청", // 아파트 동 호수
                        "admin_area_1": "서울특별시", // 주(CA, NY)
                        "admin_area_2": "중구", // 시(Los Angeles, New York)
                        "postal_code": "04524", // 상품 수령지 우편번호
                        "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
                      },
                      "name": {
                        "full_name": "홍길동" // 상품 수령인 이름
                      }
                    }
                  }
                ]
              } // end-of paypal_v2
            } // end-of-bypass
          }
          ```

      (이미지 첨부: bypass.paypal\\\_v2.purchase\\\_units\\\[\\].shipping 입력 → 입력한 배송 주소로 override 됨)

      - **페이팔 비회원으로 결제시**

        - **payer.address 정보 미입력 && shipping.address 정보 입력**

          구매자의 청구 주소(bypass.paypal\_v2.payer.address)를 입력하지 않고 배송 주소(bypass.paypal\_v2.shipping.address)만 입력 한 경우엔, 청구 주소란에 배송 주소가 자동 완성됩니다.

          ```json
          {
            "bypass": {
              "paypal_v2": {
                // ...중략
                "purchase_units": [
                  {
                    "shipping": {
                      "address": {
                        // 상품 수령 주소
                        "address_line_1": "세종대로 110", // 도로명 주소
                        "address_line_2": "서울특별시청", // 아파트 동 호수
                        "admin_area_1": "서울특별시", // 주(CA, NY)
                        "admin_area_2": "중구", // 시(Los Angeles, New York)
                        "postal_code": "04524", // 상품 수령지 우편번호
                        "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
                      },
                      "name": {
                        "full_name": "홍길동" // 상품 수령인 이름
                      }
                    }
                  }
                ]
              } // end-of paypal_v2
            } // end-of-bypass
          }
          ```

      (이미지 첨부: \[체크박스 선택 된 모습] payer 정보 없이 shipping 정보만 입력한 경우, 청구 주소에 shipping 정보가 자동 입력됩니다.)

      (이미지 첨부: \[체크박스 해제 된 모습] payer 정보 없이 shipping 정보만 입력한 경우, 청구 주소와 배송 주소에 모두 shipping 정보가 자동 입력됩니다.)

      - **payer.address 정보 입력 && shipping.address 정보 입력**

        구매자의 청구 주소(bypass.paypal\_v2.payer.address)와 배송 주소(bypass.paypal\_v2.shipping.address)를 모두 입력한 경우엔, “청구 주소와 동일한 배송주소” 체크박스를 해제했을때 하단에 렌더링 되는 배송 정보란에 배송 주소가 자동 완성됩니다.

        ```json
        {
          "bypass": {
            "paypal_v2": {
              // ...중략
              "purchase_units": [
                {
                  "shipping": {
                    "address": {
                      // 상품 수령 주소
                      "address_line_1": "세종대로 110", // 도로명 주소
                      "address_line_2": "서울특별시청", // 아파트 동 호수
                      "admin_area_1": "서울특별시", // 주(CA, NY)
                      "admin_area_2": "중구", // 시(Los Angeles, New York)
                      "postal_code": "04524", // 상품 수령지 우편번호
                      "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
                    },
                    "name": {
                      "full_name": "홍길동" // 상품 수령인 이름
                    }
                  }
                }
              ],
              "payer": {
                "address": {
                  "address_line_1": "고산자로 270", // 도로명 주소
                  "address_line_2": "성동구청", // 아파트 동 호수
                  "admin_area_1": "서울특별시", // 주(CA, NY)
                  "admin_area_2": "성동구", // 시(Los Angeles, New York)
                  "postal_code": "04750", // 상품 수령지 우편번호
                  "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
                }
              }
            } // end-of paypal_v2
          } // end-of-bypass
        }
        ```

      (이미지 첨부: \[체크박스 선택 된 모습] payer 정보와 shipping 정보를 모두 입력한 경우, 청구 주소란에 payer 정보가 자동 입력됩니다.)

      (이미지 첨부: \[체크박스 해제 된 모습] payer 정보와 shipping 정보를 모두 입력한 경우, payer 정보는 청구 주소란에 shipping 정보는 배송 주소란에 정상적으로 자동 입력됩니다.)

      - shipping.address 국가가 접속 국가와 일치하지 않는 경우

        페이팔 결제창에 렌더링 되는 주소 형식은 구매자의 접속 국가에 따라 결정됩니다. 배송 주소의 국가와 구매자의 접속 국가를 다른 경우, 국가 간 주소 체계가 다르기 때문에 정상적으로 자동입력 되지 않으니, 이 점 유념해주시기 바랍니다.

      - (이미지 첨부: 미국에서 접속시, payer 정보와 shipping 정보를 모두 한국으로 입력한 경우 청구 주소는 일부만 자동 입력되고 배송 주소는 아예 자동 입력이 되지 않습니다.)

    - payer?: object

      - tax\_info?: object

        구매자의 세금 정보로 브라질(에서 접속한 또는 브라질 계정으로 로그인 한) 구매자에 한 해 필수 입력입니다.

      - address

        구매자의 결제 금액 청구지 주소를 의미하며, 전달한 파라미터는 페이팔 결제창 내 청구지 주소(billing address) 정보에 자동으로 입력됩니다.

        💡 **청구 주소 정보 중** `country_code`**는 필수 입력입니다.**

        단, 페이팔 비 회원으로 결제시에만 해당되며, 회원으로 결제시에는 회원 가입시 입력한 billing address가 자동 입력되기 때문에 해당 파라미터는 무시됩니다.

        - **페이팔 회원으로 결제시**

          - payer.address 정보 입력

            입력 된 정보는 무시되고 페이팔 가입시 기입한 구매자의 청구 주소가 자동 입력됩니다.

            ```json
            {
              "bypass": {
                "paypal_v2": {
                  // ...중략
                  "payer": {
                    "address": {
                      "address_line_1": "200 N Spring St", // 도로명 주소
                      "address_line_2": "Los Angeles City Hall", // 아파트 동 호수
                      "admin_area_1": "CA", // 주(CA, NY)
                      "admin_area_2": "Los Angeles", // 시(Los Angeles, New York)
                      "postal_code": "90012", // 상품 수령지 우편번호
                      "country_code": "US" // [필수 입력] 상품 수령지 국가 코드
                    }
                  }
                } // end-of paypal_v2
              } // end-of-bypass
            }
            ```

            (관련 이미지 첨부)

            ![payer.address를 입력했으나 페이팔 가입시 기입한 정보로 자동 입력됩니다.](http://s3-us-west-2.amazonaws.com/secure.notion-static.com/204c59fb-cb39-42fe-9920-d55f9e1f6291/Untitled.png)

          - payer.address를 입력했으나 페이팔 가입시 기입한 정보로 자동 입력됩니다.

        - **페이팔 비회원으로 결제시**

          - payer.address 정보 입력

            입력 된 정보가 구매자의 청구 주소지란에 자동 입력됩니다.

            ```json
            {
              "bypass": {
                "paypal_v2": {
                  // ...중략
                  "payer": {
                    "address": {
                      "address_line_1": "200 N Spring St", // 도로명 주소
                      "address_line_2": "Los Angeles City Hall", // 아파트 동 호수
                      "admin_area_1": "CA", // 주(CA, NY)
                      "admin_area_2": "Los Angeles", // 시(Los Angeles, New York)
                      "postal_code": "90012", // 상품 수령지 우편번호
                      "country_code": "US" // [필수 입력] 상품 수령지 국가 코드
                    }
                  }
                } // end-of paypal_v2
              } // end-of-bypass
            }
            ```

          (관련 이미지 첨부)

        **payer.address 국가가 접속 국가와 일치하지 않는 경우**

        - 페이팔 결제창에 렌더링 되는 주소 형식은 구매자의 접속 국가에 따라 결정됩니다. 청구 주소의 국가와 구매자의 접속 국가가 다른 경우, 국가 간 주소 체계가 다르기 때문에 정상적으로 자동 입력 되지 않으니, 이 점 유념해주시기 바랍니다.

        (이미지 첨부: 미국에서 접속시, payer.address 정보를 한국으로 입력한 경우 청구 주소는 일부만 자동 입력됩니다. state에 “서울특별시”가 없기 때문입니다.)

</details>

<details>

<summary>사용 불가능한 파라미터</summary>

**`tax_free`**

페이팔은 면세/복합과세를 지원하지 않기 때문에 tax\_free를 입력한 경우 “taxFreeAmount must be 0 in Paypal!”이라는 에러 메시지가 리턴되면서 결제창이 호출되지 않습니다.

**`country`**

결제 국가를 의미하는 country 파라미터로 페이팔 sandbox 모드에서만 유의미하며 **운영 모드에서는 구매자가 접속한 환경에 따라 자동 적용되기 때문에 전달한 파라미터가 무시**됩니다.

예를 들어, country를 “US”로 입력했으나 구매자가 접속한 환경이 “KR(한국)”이라면 한국 사용자가 사용 가능한 결제 버튼들만 렌더링되기 때문에 Pay Later 버튼은 렌더링되지 않습니다.

**`buyer_addr`**

페이팔 결제창 내 표기되는 주소는 결제 금액 청구지(billing information address)와 상품 배송지(shipping address) 이렇게 2가지가 있습니다. 여기서 결제 금액 청구지의 경우 페이팔 회원으로 결제할때는 회원가입시 기입한 정보가 자동 입력되기 때문에 결제창에 노출되지 않으며, 비회원으로 결제할때만 전달 된 파라미터를 기준으로 결제창에 자동 입력됩니다.

단, 이때의 주소는 총 5개의 영역으로 나누어진 상세 주소로 기존에 포트원이 제공하던 buyer\_addr 파라미터로는 커버가 불가능하므로 페이팔 전용 파라미터(`bypass.paypal_v2.payer.address`)를사용하셔야 합니다.

```json
{
  "bypass": {
    "paypal_v2": {
      // ...중략
      "payer": {
        "address": {
          "address_line_1": "고산자로 270", // 도로명 주소
          "address_line_2": "성동구청", // 아파트 동 호수
          "admin_area_1": "서울특별시", // 주(CA, NY)
          "admin_area_2": "성동구", // 시(Los Angeles, New York)
          "postal_code": "04750", // 상품 수령지 우편번호
          "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
        }
      }
    } // end-of paypal_v2
  } // end-of-bypass
}
```

(이미지 첨부: 회원으로 결제시 청구 주소는 노출되지 않고 배송 주소만 노출되는 모습)

(이미지 첨부: 비회원으로 결제시 전달한 파라미터대로 청구 주소가 자동 입력 된 화면)

**`popup`**

페이팔의 경우 결제창이 무조건 팝업으로 렌더링되기 때문에 해당 파라미터는 무시 됩니다.

**`m_redirect_url`**

페이팔의 경우 PC와 모바일 모두 팝업으로 결제창이 렌더링되기 때문에 결제 프로세스 종료시 모두 콜백 함수가 호촐됩니다. 따라서 m\_redirect\_url 파라미터는 무시됩니다.

**`app_scheme`**

페이팔의 경우 외부 앱으로 이동하는 경우가 없기 때문에 해당 파라미터는 무시됩니다.

**`escrow`**

페이팔의 경우 에스크로 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

**`language`**

결제창 언어 설정을 의미하는 language 파라미터는 구매자가 접속한 환경에 따라 자동 적용되기 때문에 전달한 파라미터가 무시됩니다.

**`bypass.isCulturalExpense`**

페이팔의 경우 문화비 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`bypass.cashReceiptType`**

페이팔의 경우 현금영수증 발급이 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`bypass.customerIdentifier`**

페이팔의 경우 현금영수증 발급이 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`bypass.useInternationalFreeFromMall`**

페이팔의 경우 상점 부담 무이자 할부가 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`card`**

페이팔의 경우 카드사 다이렉트 호출, 상점 부담 무이자 할부, 렌더링 될 카드 종류 제어 등이 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`display`**

페이팔의 경우 Pay Later Button으로 할부 결제가 가능하지만, 국가 그리고 결제 금액별로 가능한 할부 개월수가 정해져있기 때문에 결제창에 표시 될 카드 할부 개월수를 의미하는 display: { card\_quota } 파라미터는 무시됩니다.

**`vbank_due`**

페이팔의 경우 가상계좌 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

**`appCard`**

페이팔의 경우 앱카드 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`useCardPoint`**

페이팔의 경우 카드 포인트 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`period`**

페이팔은 결제창 내 제공 기간 정보 노출을 지원하지 않아 해당 파라미터가 무시됩니다.

**`storeDetails`**

페이팔은 상점 세부 정보를 입력할 필요가 없기 때문에 해당 파라미터가 무시됩니다.

</details>
