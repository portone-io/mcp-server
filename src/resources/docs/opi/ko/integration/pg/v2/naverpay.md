---
title: 네이버페이 (결제형)
description: 네이버페이 간편결제 연동 방법을 안내합니다.
targetVersions:
  - v2
versionVariants:
  v1: /opi/ko/integration/pg/v1/naver
---

## 네이버페이 (결제형) 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 가능한 결제 수단

- 간편 결제
  - `payMethod`(결제) 혹은 `billingKeyMethod`(빌링키 발급) 파라미터를 `EASY_PAY` 로 설정해야 합니다.
  - 결제창 내에서 카드, 계좌이체, 네이버페이 머니 충전식 결제 중 선택이 가능합니다.

## SDK - 유의할 파라미터

### 결제/빌링키 발급 공통

- `windowType`

  - 네이버페이의 경우 PC는 `POPUP`, mobile은 `REDIRECTION`만 지원되며 이외의 다른 방식으로 결제창을 호출할 경우 에러를 리턴합니다.

  - `windowType` 파라미터를 채우지 않을 경우 자동으로 아래와 같이 세팅됩니다.

    ```json
    {
      "pc": "POPUP",
      "mobile": "REDIRECTION"
    }
    ```

- `locale`
  - 네이버페이의 경우 `KO_KR`만 지원합니다. 이외의 값을 넣어도 무시됩니다.

- `easyPay`
  - `easyPayProvider`
    - 네이버페이의 경우 PG사 자체가 간편결제사이므로 `easyPayProvider` 는 비워두어도 무방하며 다른 값을 채울 경우 무시됩니다.

- `currency`
  - 네이버페이의 경우 원화 결제만 지원하므로 `KRW` 이외의 값을 넣으면 에러를 리턴합니다.

### 결제 (`requestPayment`)

- `payMethod`
  - `EASY_PAY` 로 설정해야 합니다.

- `bypass`

  - 포트원에서 정규화한 파라미터 이외에 네이버페이에서만 특수하게 지원하는 파라미터들을 `bypass` 를 통해 넘겨줄 수 있습니다.

    - `useCfmYmdt`
      - 이용완료일
      - `YYYYMMDD` 형식의 문자열로 넘겨야 합니다.
      - 상품 유형에 따라 네이버페이-고객사 간 필수값으로 계약되는 경우 입력합니다

    - `productItems`

      - 상품 정보

      - 네이버페이의 상품 정보는 일반화된 Product 파라미터가 아닌 해당 파라미터로 넘겨주어야 합니다.

        <details>

        <summary> `productItem`의 배열을 넘겨야 합니다. </summary>

        `productItem` 은 다음 6개의 속성으로 하나의 상품 정보를 표현하는 객체의 배열입니다.

        - **`categoryType`** (필수) : [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product) 참고
        - **`categoryId`** (필수) : [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product) 참고
        - **`uid`** (필수) : 고객사 내부의 상품 고유 ID를 활용하는 것이 일반적이지만, 네이버페이 가이드 참고가 필요합니다. [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product)
        - **`name`** (필수) : 주문상품의 명칭
        - **`count`** (필수) : 상품 주문 개수
        - `sellerId` (선택) : 고객사가 하위 판매자를 식별하기 위한 고유 ID(영문 대소문자 및 숫자 허용)고객사의 업종이 통신판매중개업에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 대상 고객사만 필수 입력합니다.비대상 고객사은 입력하지 않습니다.
        - `payReferrer` (선택) : 네이버 플랫폼의 타 서비스와 제휴계약 후 유입분석을 진행하는 경우에만 입력 [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product_ref)
        - `startDate` (선택) : 시작일(YYYYMMDD)
        - `endDate` (선택) : 종료일(YYYYMMDD)

        </details>

    - `deliveryFee`
      - 배송비
      - `number` 타입으로 넘겨야 합니다.

  - 예를 들어 아래와 같이 `bypass` 파라미터를 넘겨줄 수 있습니다.

    ```json
    {
      "bypass": {
        "naverpay": {
          "useCfmYmdt": "20230421",
          "productItems": [
            {
              "categoryType": "categoryType", // 결제 상품 유형
              "categoryId": "categoryId", // 결제 상품 분류
              "uid": "uid", // 결제 상품 식별값
              "name": "name", // 상품명
              "payReferrer": "NAVER_BOOK", // 결제 상품 유입경로
              "startDate": "20230421", // 시작일(YYYYMMDD)
              "endDate": "20230428", // 종료일(YYYYMMDD)
              "sellerId": "sellerId", // 하위 판매자 식별키
              "count": 5 // 결제 상품 개수
            }
          ],
          "deliveryFee": 3000
        }
      }
    }
    ```

- `orderName`

  - 주문명

  - 네이버페이 내부적으로 **`외 2개`** 의 표현이 자동생성되므로 **"`xxxx 외 2개"`** 대신
    `bypass.naverpay.productItems[0].name`(첫번째 상품명)으로 설정하길 권장합니다.

- `customer.name`

  - 고객사 고객의 이름입니다.

  - 결제 상품이 고위험 업종에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 **대상 고객사의 경우
    필수 입력**합니다.

- `customer.birth{Year, Month, Day}`

  - 각각 고객사 고객의 출생 년도/월/일입니다.

  - 결제 상품이 고위험 업종에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 **대상 고객사의 경우
    세 필드 모두 필수 입력**합니다.

- `easyPay.installment`
  - 네이버페이는 지원하지 않습니다.

- `easyPay.availableCards`
  - 네이버페이는 지원하지 않습니다.

### 빌링키 발급 (`requestBillingKeyIssue`)

- `billingKeyMethod`
  - `EASY_PAY` 로 설정해야 합니다

- `issueId`
  - 고객사에서 채번하는 빌링키 발급 건 고유 ID
  - 네이버페이의 경우 필수 입력입니다.
  - 하나의 네이버 계정에 대해서 같은 issueId를 재사용할 수 없습니다.

- `issueName`
  - 빌링키 발급 시 결제창에 표시되는 제목입니다.
  - 네이버페이의 경우 필수 입력입니다.

- `displayAmount`
  - 네이버페이의 경우, 빌링키 발급창에 띄워줄 금액 정보를 파라미터로 설정할 수 있습니다. (optional)
  - 해당 파라미터를 입력할 경우 `currency` 필드도 함께 입력해야 합니다.

- `currency`
  - 네이버페이의 경우, 빌링키 발급창에 띄워줄 금액 정보를 파라미터로 설정할 수 있습니다. (optional)
  - 해당 파라미터를 입력할 경우 `displayAmount` 필드도 함께 입력해야 합니다.

## 이외 연동 주의사항

- **에러 메시지 비 가공**
  - 결제창 호출(`requestPayment` 함수)후 결제창 하단의 “취소" 버튼 클릭 등으로 결제 프로세스가
    중단되거나 잔액 부족, 한도 초과, 100원 미만 결제 등의 사유로 결제에 실패하면 콜백 함수(popup
    방식)/`redirectUrl`(리디렉션 방식)로 전달되는 결제 결과(response 객체/쿼리 파라미터)에 실패
    사유(error\_msg)가 전달됩니다. 이 에러 메시지는 사용자에게 가공 없이 그대로 노출되어야 합니다.
    해당 규칙 미 준수시 네이버페이 실 검수 진행시 수정 요청을 받게 됩니다.

  - 예) error\_msg가 “잔액 부족"이라고 가정할때, "결제에 실패하였습니다. 실패 사유:" + "잔액 부족"과
    같은 형태로 가공되면 안됨

- **100원 미만 결제 처리**
  - 네이버페이 - 결제형의 최소 결제 금액은 100원이기 때문에, 100원 미만 결제 요청에 대해 예외 처리가
    되어있어야 합니다.

  - 예) 사용자에게 최소 결제 금액이 100원이라 결제를 할 수 없다는 의미를 담는 에러 메시지가
    노출되어야 함

- **"API 호출 권한이 없습니다" 에러**
  - 네이버페이 결제형 연동은 **네이버페이 검수진행이 시작되기 전까지는 운영환경에서 결제창 호출 시
    위와 같은 오류가 도출**됩니다. 해당 부분은 검수가 진행되면 해결되는 부분이기 때문에 무시해주시면
    됩니다.
