---
title: 퀵 가이드
description: 결제연동 퀵 가이드
customLayout: InteractiveDocs
targetVersion:
  - v2
versionVariants:
  v1: /opi/ko/integration/ready/readme?v=v1
---

퀵 가이드 내용을 포함한 포트원 결제 연동 샘플 프로젝트를 [GitHub 저장소](https://github.com/portone-io/portone-sample)에서 추가로 확인하실 수 있습니다.

## 브라우저 측

### 포트원 브라우저 SDK 불러오기

포트원 브라우저 SDK를 불러옵니다.

<!-- CONDITIONAL CONTENT language=frontend/React START -->

아래 명령어로 브라우저 SDK를 설치합니다.

![NPM Version](https://img.shields.io/npm/v/%40portone%2Fbrowser-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="npm">

```shell
npm install --save @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="yarn">

```shell
yarn add @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="pnpm">

```shell
pnpm add @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="bun">

```shell
bun add @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="deno">

```shell
deno add npm:@portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="ni">

```shell
ni @portone/browser-sdk
```

</div>

</div>

<!-- CONDITIONAL CONTENT language=frontend/React END -->

### 상품 정보 불러오기

서버로부터 결제할 상품의 정보를 불러옵니다.

### 결제 요청

포트원 브라우저 SDK를 사용하여 결제를 요청합니다.

- storeId: string

  **상점 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 [관리자 콘솔 > 연동 정보](https://admin.portone.io/integration-v2/manage/channel) 우측 상단에서 확인할 수 있습니다.

- channelKey: string

  **채널키**

  [관리자 콘솔 > 연동 정보](https://admin.portone.io/integration-v2/manage/channel)에서 채널 연동 시 생성된 채널키입니다.

- paymentId: string

  **고객사 주문 고유 번호**

  주문을 식별하는 고유 번호로, 포트원에서 제공하지 않고 직접 입력합니다.

  이미 승인이 완료된 `paymentId`로 결제나 가상계좌 발급을 시도하는 경우 에러가 발생합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 영문 대소문자, 숫자, `-`, `_`만 허용되며, 6자 이상 64자 이하로 입력합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

  <div class="hint" data-style="warning">

  KCP의 경우 영문 대소문자, 숫자만 허용되며, 40자 이하로 입력합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

  <div class="hint" data-style="warning">

  스마트로의 경우 영문 대소문자, 숫자만 허용되며, 40자 이하로 입력합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 영문 대소문자, 숫자만 허용되며, 32자 이하로 입력합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스의 경우 ASCII 문자만 허용되며, 40자 이하로 입력합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

- orderName: string

  **주문명**

  주문명으로 자유롭게 입력합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

  <div class="hint" data-style="warning">

  나이스페이먼츠의 경우 최대 40바이트까지 입력할 수 있으며, 사용 가능한 특수문자는 아래와 같습니다.

  - 사용 가능: `_`
  - 사용 불가: `% & | $ - + = [ ]`
  - 사용 가능하나 권장하지 않음: `( )`

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

  <div class="hint" data-style="warning">

  KCP의 경우 최대 100바이트까지 입력할 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

  <div class="hint" data-style="warning">

  스마트로의 경우 최대 40바이트까지 입력할 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 최대 256바이트까지 입력할 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스의 경우 최대 40바이트까지 입력할 수 있으며, 40바이트 초과시 37바이트에서 잘리고 "..."가 추가됩니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

- totalAmount: number

  **결제 금액**

  결제 금액을 정수로 입력합니다.

  - 해외 통화의 경우 통화의 최소 단위를 기준으로 합니다. 예를 들어, USD의 최소 단위는 센트(0.01 USD)이므로, 6 USD의 경우 100배하여 600으로 입력합니다.

  - 통화의 최소 단위는 [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)에 의해 표준화된 minor unit입니다.
    - KRW: 1배
    - USD: 100배
    - JPY: 1배

- currency: string

  **결제 통화**

  [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)에 의해 표준화된 알파벳 통화 코드를 입력합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

  <div class="hint" data-style="warning">

  토스페이먼츠는 `KRW`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

  <div class="hint" data-style="warning">

  나이스페이먼츠는 `KRW`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

  <div class="hint" data-style="warning">

  스마트로는 `KRW`와 `USD`만을 지원합니다. 상점 아이디의 설정에 따라 결제 통화가 고정되어 `currency`와 일치하지 않을 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스는 `KRW`와 `USD`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'ksnet' START -->

  <div class="hint" data-style="warning">

  KSNET은 `KRW`와 `USD`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'ksnet' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

  <div class="hint" data-style="warning">

  KCP는 `KRW`와 `USD`만을 지원합니다. `USD`의 경우 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'inicis' && payMethods === 'card' START -->

  <div class="hint" data-style="warning">

  KG이니시스 카드 결제는 `KRW`와 `USD`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'inicis' && payMethods === 'card' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'inicis' && payMethods !== 'card' START -->

  <div class="hint" data-style="warning">

  카드 결제를 제외한 KG이니시스는 `KRW`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'inicis' && payMethods !== 'card' END -->

- payMethod: string

  **결제 수단**

  사용할 결제 수단에 맞는 값을 입력합니다.

  <details>

  <summary>지원 결제 수단 코드</summary>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  <div class="hint" data-style="warning">

  휴대폰 소액결제, 간편결제, 상품권 결제는 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'nice' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'nice' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'smartro' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kpn' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'ksnet' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'ksnet' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kcp' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kcp' END -->

  </details>

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "card" START -->

- card?: object

  **카드 결제 추가 정보**

  `payMethod`가 `CARD`인 경우 카드 결제와 관련한 추가 정보를 입력할 수 있습니다.

  - cardCompany?: string

    **단독 노출 카드사**

    구매자가 카드사를 선택하지 않고 입력한 카드사 화면으로 바로 이동하도록 합니다.

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 카드사 단독 노출과 동시에 할부를 설정하려면 `card.installment.monthOption.fixedMonth`를 반드시 전달해야 하며, 그렇지 않을 경우 일시불로 결제됩니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 카드사 단독 노출 시 `card.installment.monthOption.fixedMonth`를 필수로 지정해야 합니다.
    결제 금액이 할부 지원 금액 미만인 경우 할부 개월 수를 `0`으로 전달해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    <div class="hint" data-style="warning">

    스마트로의 경우 전북카드, 카카오뱅크 카드는 Windows에서만 단독 노출이 가능합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

    <div class="hint" data-style="warning">

    KCP의 경우 카드사 단독 노출 시 `bypass.kcp_v2.site_name`을 필수로 지정해야 할 수 있습니다.
    자세한 사항은 해당 파라미터 설명을 참조해 주세요.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

    <div class="hint" data-style="warning">

    한국결제네트웍스의 경우 카드사 단독 노출 시에 아래 3가지 약관 동의 절차가 고객사 페이지 내에 있어야 합니다.

    - `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=1` (전자금융거래 이용약관)
    - `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=3` (개인정보 수집 및 이용처리 동의)
    - `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=4` (개인정보 제3자 제공 동의)

    영어 약관이 필요한 경우 URL 뒤에 `&langType=ENG`을 추가하여 사용할 수 있습니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

    <div class="hint" data-style="warning">

    KG이니시스의 경우 카드사 단독 노출 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

    <details>

    <summary>지원 카드사 코드 목록</summary>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST`(우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['nice', 'smartro', 'kpn', 'inicis', 'ksnet', 'kcp'].includes(name) START -->

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST` (우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['nice', 'smartro', 'kpn', 'inicis', 'ksnet', 'kcp'].includes(name) END -->

    </details>

  - availableCards?: string\[]

    **카드사 일부 노출**

    지정한 일부 카드사만을 목록에 노출할 수 있습니다. 상단의 카드사 식별 값 항목을 참고해주세요.

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'kpn', 'inicis'].includes(name) START -->

  - useFreeInterestFromMall?: boolean

    **상점 분담 무이자 활성화 여부**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 상점 분담 무이자 할부 이용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'kpn', 'inicis'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'inicis'].includes(name) START -->

  - useInstallment?: boolean

    **할부 사용 여부**

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'inicis'].includes(name) END -->

  - installment?: object

    **할부 설정**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 신용카드 할부 이용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    <div class="hint" data-style="warning">

    스마트로의 경우 신용카드 할부 이용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

    - freeInstallmentPlans?: object\[]

      **무이자 할부 설정**

      고객사가 부담하는 무이자 할부 설정입니다.

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

      <div class="hint" data-style="warning">

      스마트로의 경우 상점 부담 무이자 할부 이용 시 별도 계약이 필요합니다.

      </div>

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

      <div class="hint" data-style="warning">

      한국결제네트웍스의 경우 상점 부담 무이자 할부 이용 시 별도 계약이 필요합니다.

      </div>

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

      <div class="hint" data-style="warning">

      KG이니시스의 경우 상점 부담 무이자 할부 이용 시 별도 계약이 필요합니다.

      </div>

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

      - cardCompany: string

        **무이자 할부를 제공하는 카드사 식별 값**

        상단의 카드사 식별 값 항목을 참고해주세요.

      - months: number\[]

        **무이자 할부를 제공하는 개월 수**

    - monthOption?: object

      **할부 개월 수 설정**

      할부 결제 시 할부 개월 수를 설정할 수 있습니다.

      <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name !== 'kcp' START -->

      `fixedMonth`와 `availableMonthList` 중 하나만 제공해주세요.

      <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name !== 'kcp' END -->

      - fixedMonth: number

        **구매자가 선택할 수 없도록 고정된 할부 개월 수**

        구매자가 할부 개월 수를 선택할 수 있도록 하려면 `availableMonthList`를 사용해주세요.

      <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'smartro', 'inicis'].includes(name) START -->

      - availableMonthList: number\[]

        **구매자가 선택할 수 있는 할부 개월 수 목록**

      <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'smartro', 'inicis'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'smartro'].includes(name) START -->

  - useCardPoint?: boolean

    **카드사 포인트 사용 여부**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 카드사 포인트 사용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 카드사 포인트 사용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

    <div class="hint" data-style="warning">

    KG이니시스의 경우 카드사 포인트 사용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'smartro'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => !['kpn', 'inicis'].includes(name) START -->

  - useAppCardOnly?: boolean

    **앱 카드만 허용할지 여부**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 씨티카드는 적용이 불가능합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => !['kpn', 'inicis'].includes(name) END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "card" END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "virtualAccount" START -->

- virtualAccount?: object

  **가상계좌 발급 추가 정보**

  `payMethod`가 `VIRTUAL_ACCOUNT`인 경우 가상계좌와 관련한 추가 정보를 입력할 수 있습니다.

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => name !== 'kcp' START -->

  - cashReceiptType?: string

    **결제창에서 발급 가능한 현금영수증 발급 유형**

    - `PERSONAL` (소득공제용)
    - `CORPORATE` (지출증빙용)
    - `ANONYMOUS` (미발행(국세청번호 자동발급))

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    <div class="hint" data-style="warning">

    스마트로의 경우 `cashReceiptType`과 `bankCode`를 같이 사용해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => name !== 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kpn', 'kcp'].includes(name) START -->

  - customerIdentifier?: string

    **현금영수증 발행 대상 식별 정보**

    소득공제용(`PERSONAL`)의 경우 전화번호를, 지출증빙용(`CORPORATE`)의 경우 사업자번호를 입력하며, 미발행(`ANONYMOUS`)의 경우 무시됩니다.

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    <div class="hint" data-style="warning">

    스마트로의 경우 `cashReceiptType`에 `ANONYMOUS` 외의 값이 설정되면 올바른 `customerIdentifier`를 반드시 입력해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kpn', 'kcp'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kcp', 'kpn'].includes(name) START -->

  - fixedOption?: oneof object

    **고정식 가상계좌 설정**

    - `pgAccountId`와 `accountNumber` 중 하나만 입력해주세요.

    * pgAccountId?: string

      결제대행사로부터 사전에 가상계좌를 발급받은 경우, 그 번호를 입력해주세요.

    * accountNumber?: string

      고정하여 사용할 가상계좌 번호를 입력해주세요.

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kcp', 'kpn'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kcp', 'kpn'].includes(name) START -->

  - bankCode?: string

    **단독 노출 은행**

    구매자가 은행을 선택하지 않고 입력한 은행이 자동 선택되도록 합니다.

    <details>

    <summary>지원 은행 코드</summary>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    - `KYONGNAM_BANK` (경남은행)
    - `GWANGJU_BANK` (광주은행)
    - `KOOKMIN_BANK` (국민은행)
    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `KFCC` (새마을금고)
    - `SUHYUP_BANK` (수협은행)
    - `SHINHAN_BANK` (신한은행)
    - `WOORI_BANK` (우리은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `K_BANK` (케이뱅크)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `K_BANK` (케이뱅크)
    - `SUHYUP_BANK` (수협은행)
    - `JEONBUK_BANK` (전북은행)
    - `KYONGNAM_BANK` (경남은행)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `CITI_BANK_KOREA` (한국씨티은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `KYONGNAM_BANK` (경남은행)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'ksnet' START -->

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `JEONBUK_BANK` (전북은행)
    - `KYONGNAM_BANK` (경남은행)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'ksnet' END -->

    </details>

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kcp', 'kpn'].includes(name) END -->

  - accountExpiry?: object

    **가상계좌 입금 만료기한**

    `validHours`와 `dueDate` 중 하나만 입력해주세요.

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 입금 만료기한을 필수로 입력해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

    - validHours?: number

      **가상계좌 입금 유효 시간**

      가상계좌 입금 유효기간을 시간 단위로 입력해주세요.

      - `3`을 전달하면 지금으로부터 3시간 후에 만료됩니다.

    - dueDate?: string

      **가상계좌 입금 만료 시각**

      - 아래 형식 중 하나로 입력해주세요.
        - `YYYYMMDD`
        - `YYYYMMDDHHmmss`
        - `YYYY-MM-DD`
        - `YYYY-MM-DD HH:mm:ss`

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "virtualAccount" END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "transfer" START -->

- transfer?: object

  **계좌이체 추가 정보**

  `payMethod`가 `TRANSFER`인 경우 계좌이체와 관련한 추가 정보를 입력할 수 있습니다.

  - cashReceiptType?: string

    **결제창에서 발급 가능한 현금영수증 발급 유형**

    - `PERSONAL` (소득공제용)
    - `CORPORATE` (지출증빙용)
    - `ANONYMOUS` (미발행(국세청번호 자동발급))

  - customerIdentifier?: string

    **현금영수증 발행 대상 식별 정보**

  - bankCode?: string

    **단독 노출 은행**

    구매자가 은행을 선택하지 않고 입력한 은행이 자동 선택되도록 합니다.

    <details>

    <summary>지원 은행 코드</summary>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    - `KYONGNAM_BANK` (경남은행)
    - `GWANGJU_BANK` (광주은행)
    - `KOOKMIN_BANK` (국민은행)
    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `KFCC` (새마을금고)
    - `SUHYUP_BANK` (수협은행)
    - `SHINHAN_BANK` (신한은행)
    - `WOORI_BANK` (우리은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    </details>

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "transfer" END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "mobile" START -->

- mobile?: object

  **휴대폰 소액결제 추가 정보**

  `payMethod`가 `MOBILE`인 경우 휴대폰 소액결제와 관련한 추가 정보를 입력할 수 있습니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - carrier?: string

    **단독 호출 통신사**

    구매자가 통신사를 선택하지 않고 입력한 통신사가 자동 선택되도록 합니다.

    - `SKT` (SKT)
    - `KT` (KT)
    - `LGU` (LGU)
    - `HELLO` (LG 헬로모바일)
    - `KCT` (티플러스)
    - `SK7` (SK 세븐모바일)

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - availableCarriers?: string\[]

    **통신사 일부 노출**

    지정한 일부 통신사만을 목록에 노출할 수 있습니다. 상단의 통신사 식별 값 항목을 참고해주세요.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "mobile" END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "giftCertificate" START -->

- giftCertificate?: object

  **상품권 추가 정보**

  `payMethod`가 `GIFT_CERTIFICATE`인 경우 상품권과 관련한 추가 정보를 입력할 수 있습니다.

  - giftCertificateType?: string

    **상품권 유형**

    <details>

    <summary>지원 상품권 유형 코드</summary>

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" START -->

    - `BOOKNLIFE` (도서문화상품권)
    - `SMART_MUNSANG` (스마트문상, (구)게임문화상품권)
    - `CULTURELAND` (문화상품권)

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "nice" START -->

    - `CULTURELAND` (문화상품권)

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "nice" END -->

    </details>

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "giftCertificate" END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "easyPay" START -->

- easyPay?: object

  **간편결제 추가 정보**

  `payMethod`가 `EASY_PAY`인 경우 간편결제와 관련한 추가 정보를 입력할 수 있습니다.

  - easyPayProvider?: string

    **간편결제 수단**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

    <div class="hint" data-style="warning">

    한국결제네트웍스의 경우 간편결제 수단을 직접 지정하려면 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

    <div class="hint" data-style="warning">

    KG이니시스의 경우 간편결제 수단 설정 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

    <details>

    <summary>지원 간편결제 코드</summary>

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' START -->

    - `PAYCO` (페이코)
    - `SAMSUNGPAY` (삼성페이)
    - `APPLEPAY` (애플페이)
    - `SSGPAY` (SSG페이)
    - `KAKAOPAY` (카카오페이)
    - `NAVERPAY` (네이버페이)
    - `LPAY` (L페이)
    - `TOSSPAY` (토스페이)

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kpn' START -->

    - `KAKAOPAY` (카카오페이)
    - `SAMSUNGPAY` (삼성페이)
    - `TOSSPAY` (토스페이)
    - `PAYCO` (페이코)

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kpn' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' START -->

    - `KAKAOPAY` (카카오페이)
    - `NAVERPAY` (네이버페이)
    - `SAMSUNGPAY` (삼성페이)
    - `SSGPAY` (SSG페이)
    - `APPLEPAY` (애플페이)
    - `LPAY` (L페이)
    - `TOSSPAY` (토스페이)
    - `PAYCO` (페이코)

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' END -->

    </details>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - useFreeInterestFromMall?: boolean

    **상점분담 무이자 활성화 여부**

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - useCardPoint?: boolean

    **카드사 포인트 사용 여부**

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - availableCards?: string\[]

    **카드사 일부 노출**

    지정한 일부 카드사만을 목록에 노출할 수 있습니다.

    <details>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST`(우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['nice', 'smartro', 'kpn', 'inicis', 'ksnet'].includes(name) START -->

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST` (우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['nice', 'smartro', 'kpn', 'inicis', 'ksnet'].includes(name) END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST` (우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

    </details>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - installment?: object

    **할부 설정**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 할부 사용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

    - freeInstallmentPlans?: object\[]

      **무이자 할부 설정**

      고객사가 부담하는 무이자 할부 설정입니다.

      - cardCompany: string

        **무이자 할부를 제공하는 카드사 식별 값**

        상단의 카드사 식별 값 항목을 참고해주세요.

      - months: number\[]

        **무이자 할부를 제공하는 개월 수**

    - monthOption?: object

      **할부 개월 수 설정**

      할부 결제 시 할부 개월 수를 설정할 수 있습니다.

      `fixedMonth`와 `availableMonthList` 중 하나만 제공해주세요.

      - fixedMonth: number

        **구매자가 선택할 수 없도록 고정된 할부 개월 수**

        구매자가 할부 개월 수를 선택할 수 있도록 하려면 `availableMonthList`를 사용해주세요.

      - availableMonthList: number\[]

        **구매자가 선택할 수 있는 할부 개월 수 목록**

        <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

        <div class="hint" data-style="warning">

        토스페이먼츠의 경우 자체 정책에 따라 **일시불부터 전달한 값 중 최댓값까지 모두 표시**됩니다.

        </div>

        <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - cashReceiptType?: string

    **결제창에서 발급 가능한 현금영수증 발급 유형**

    - `PERSONAL` (소득공제용)
    - `CORPORATE` (지출증빙용)
    - `ANONYMOUS` (미발행(국세청번호 자동발급))

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - customerIdentifier?: string

    **현금영수증 발행 대상 식별 정보**

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - availablePayMethods?: string\[]

    **노출할 간편결제 방식**

    - `CARD` (카드 결제)
    - `CHARGE` (포인트 충전 및 적립 결제)
    - `MONEY` (토스페이 머니 결제)
    - `TRANSFER` (계좌 결제)

    <!-- CONDITIONAL CONTENT when=({ pg: {name}}) => name === "nice" START -->

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 일부 간편결제 수단에 대해 `availablePayMethods`가 필수입니다.

    - 네이버페이: 카드 결제인 경우 `CARD`, 포인트 혹은 머니 결제인 경우 `CHARGE`를 입력합니다.
    - SSG페이: 계좌 결제를 노출하는 `TRANSFER`만 유효하며, 카드 혹은 머니 결제인 경우 `availablePayMethods`를 생략해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: {name}}) => name === "nice" END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "easyPay" END -->

- taxFreeAmount?: number

  **면세 금액**

  결제 금액 중 면세금액에 해당하는 금액을 입력합니다.

  - 미입력 시 0으로 취급됩니다.
  - 결제 금액과 동일하게 통화별 scale factor가 적용된 금액으로 전달해주세요.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 면세 및 복합과세 이용 시 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

  <div class="hint" data-style="warning">

  나이스페이먼츠와 계약 시 지정된 면세금액을 반드시 입력해야 합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

  <div class="hint" data-style="warning">

  KCP의 경우 면세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.
  계약을 진행하지 않고 값을 지정하는 경우 요청한 내용과 다른 금액으로 결제가 발생할 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 면세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.
  계약을 진행하지 않고 값을 지정하는 경우 요청한 내용과 다른 금액으로 결제가 발생할 수 있습니다.
  면세 금액이 지정된 경우, MID에 지정된 면세 및 과세 여부보다 지정된 금액을 우선합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스의 경우 면세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

- vatAmount?: number

  **부가세**

  부가세 금액을 입력합니다.

  - 미입력 시 과세 금액의 1/11 로 자동 계산됩니다.
  - 결제 금액과 동일하게 통화별 scale factor가 적용된 금액으로 전달해주세요.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

  <div class="hint" data-style="warning">

  KCP의 경우 부가세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.
  계약을 진행하지 않고 값을 지정하는 경우 요청한 내용과 다른 금액으로 결제가 발생할 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스의 경우 부가세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

- customer?: object

  **구매자 정보**

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'ksnet' START -->

  <div class="hint" data-style="warning">

  KSNET 결제 시 구매자 이름을 필수로 입력해야 합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'ksnet' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스 결제 시 PC 환경에서는 구매자 이름, 연락처, 이메일을 필수로 입력해야 합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'smartro' START -->

  <div class="hint" data-style="warning">

  스마트로 결제 시 구매자 연락처를 필수로 입력해야 합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'smartro' END -->

  - customerId?: string

    **구매자 고유 아이디**

    구매자를 식별하는 고유 번호로, 자유롭게 입력합니다.

  - fullName?: string

    **구매자 전체 이름**

    - `fullName`과 (`firstName`, `lastName`) 쌍 중 하나만 입력해 주세요.

  - firstName?: string

    **구매자의 성을 제외한 이름**

    - `firstName`과 `lastName`은 함께 입력해야 합니다. 전체 이름은 `{firstName} {lastName}`으로 기록됩니다.

  - lastName?: string

    **구매자의 성**

    - `firstName`과 `lastName`은 함께 입력해야 합니다. 전체 이름은 `{firstName} {lastName}`으로 기록됩니다.

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일 주소**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

    <div class="hint" data-style="warning">

    KG이니시스의 경우 특수문자는 `@`와 `.`만 허용됩니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

  - address?: object

    **구매자 주소**

    - country?: string

      **국가**

      [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html)에 의해 표준화된 2글자 국가 코드입니다.

    - addressLine1: string

      **일반 주소**

    - addressLine2: string

      **상세 주소**

    - city?: string

      **도시**

    - province?: string

      **주, 도, 시**

  - zipcode?: string

    **구매자 우편번호**

  - gender?: string

    **구매자 성별**

    - `MALE`, `FEMALE`, `OTHER` 중 하나를 입력해주세요.

  - birthYear?: string

    **구매자 출생년도**

    - `1990`과 같이 숫자 4자리로 입력해 주세요.

  - birthMonth?: string

    **구매자 출생월**

    - `07`과 같이 숫자 2자리로 입력해 주세요.

  - birthDay?: string

    **구매자 출생일**

    - `08`과 같이 숫자 2자리로 입력해 주세요.

- customData?: object

  `customData`에는 임의의 데이터를 저장할 수 있습니다.
  서버에서 결제건 조회 시에 확인할 수 있으며, 상품 정보를 전달하여 서버가 인식한 상품 정보와 일치하는지 확인할 수 있습니다.

- bypass?: object

  **결제대행사 고유 기능**

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" START -->

  - tosspayments?: object

    - discountCode?: string

      - 결제수단에 프로모션을 적용할 경우 토스페이먼츠로부터 제공받은 코드를 입력합니다.

    - useInternationalCardOnly?: boolean

      - `true`로 설정하면 해외 카드로만 결제를 허용합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "nice" START -->

  - nice\_v2?: object

    - LogoImage?: string

      **결제창 로고 이미지 URL**

    - NPDisableScroll?: string

      **PC환경 결제창 스크롤 미사용 여부**

      기본값은 `N`입니다.

      - `Y`: 미사용
      - `N`: 사용

    - SkinType?: string

      **결제창 스킨 색상**

      `red`, `green`, `purple`, `gray`, `dark` 중 하나를 입력해주세요.

    - UserCI?: string

      **문화상품권 결제 시 구매자 CI 정보**

      아이디/비밀번호 외 추가로 CI 인증이 필요한 경우 사용합니다.

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - MallUserID?: string

      **구매자 식별 번호**

      <div class="hint" data-style="warning">

      문화 상품권 결제 시 필수 입력입니다.

      </div>

    - DirectCouponYN?: string

      **신용카드 쿠폰 자동 적용 여부**

      기본값은 `N`입니다.

      - `Y`: 사전 등록된 선 할인 쿠폰을 자동 적용
      - `N`: 쿠폰 미적용

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - DirectShowOpt?: string

      **단독 호출 결제 수단**

      - `BANK`: 계좌이체
      - `CELLPHONE`: 휴대폰 소액결제

    - CardShowOpt?: string

      **카드사별 호출 방식**

      `카드 코드:노출 유형` 값의 목록을 `|`로 구분하여 입력해주세요.

      - 카드 코드
        - `02` (국민)
        - `04` (삼성)
        - `06` (신한)
        - `07` (현대)
        - `08` (롯데)
        - `12` (NH)
        - `15` (우리)

      - 노출 유형
        - `1` (안심클릭)
        - `2` (간편결제)
        - `3` (앱카드 직접 호출)

      - `08:3|02:3`의 경우 롯데카드와 국민카드 선택시 앱카드를 직접 호출합니다.

    - PaycoClientId?: string

      **페이코에서 고객사에 발급한 Client Id**

      페이코 계정 자동 로그인 기능을 사용하는 경우 입력합니다.

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - PaycoAccessToken?: string

      **페이코 접속 토큰**

      페이코 계정 자동 로그인 기능을 사용하는 경우 입력합니다.

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - SamsungPayType?: string

      **삼성페이 고객사 유형**

      기본값은 `99`입니다.

      - `01`: 삼성페이 내 쇼핑
      - `99`: 기타

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "nice" END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

  - smartro\_v2?: object

    - GoodsCnt?: number

      **결제 상품 품목 개수**

    - SkinColor?: string

      **결제창 색상**

      `RED`, `GREEN`, `BLUE`, `PURPLE`을 선택할 수 있으며, 기본값은 `RED`입니다.

    - OpenType?: string

      **허용 카드 국가 설정**

      - `KR`: 국내 카드만 허용 (기본값)
      - `EN`: 해외 카드만 허용

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  - kpn: object

    - CardSelect?: string\[]

      **카드결제 특수 결제방식 노출**

      카드결제 시에 특정 카드사에 해당하지 않는 특수 결제방식을 노출할 수 있습니다.

      - `GLOBAL`: 해외 카드(Visa, Mastercard, JCB)를 노출합니다.
      - `LEGACY_AUTH`: 구 인증결제 방식을 노출합니다.
      - `KEY_IN`: 키인 결제를 노출합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "kcp" START -->

  - kcp\_v2?: object

  * site\_logo?: string

    **결제창 로고 URL**

    - 결제창 좌측 상단에 표시됩니다.
    - 이미지 사이즈는 가로 150px, 세로 50px 미만으로 설정해야 하며, GIF, JPG 파일만 지원됩니다.

  * skin\_indx?: number

    **결제창 색상**

    PC로 결제창 호출 시 결제창 색상을 변경합니다.

    - 1: 청색 (#207bba, 기본값)
    - 2: 자주색 (#b52ecb)
    - 3: 갈색 (#9a6d3f)
    - 4: 분홍색 (#e41f7d)
    - 5: 남색 (#284c8c)
    - 6: 청록색 (#319cb9)
    - 7: 황토색 (#a77f1d)
    - 8: 주황색 (#b2b2b2)
    - 9: 초록색 (#3cc871)
    - 10: 다홍색 (#ee3b34)
    - 11: 검은색 (#000000)
    - 12: 은색 (#f4f4f4)

  * kcp\_pay\_title?: string

    **결제창 상단 문구**

    결제창의 상단에 `NHN KCP - 결제의 중심!` 대신 표시될 문구입니다.

  * shop\_user\_id?: string

    **기관에 따라 리스크 관리 조치를 위한 쇼핑몰 관리 ID**

    - 상품권, 휴대폰 결제 시 필수로 입력해야 합니다.

  * site\_name?: string

    **카드사 단독 노출 시 결제창에 표기될 상호명**

    - PC의 경우 신한, 현대, 삼성, 농협, 하나, 외환, 롯데, 씨티, 우리카드 단독 노출 시 필수로 입력해야 합니다.
    - 모바일의 경우 필수로 입력해야 합니다.

  * disp\_tax\_yn?: string

    **현금영수증 노출 여부**

    결제창에서 현금영수증 노출 여부를 설정합니다. 실시간 계좌이체 또는 가상계좌 결제 시 사용할 수 있습니다.

    - `Y`: 노출
    - `N`: 노출하지 않음
    - `R`: 소득공제로 노출
    - `E`: 지출증빙으로 노출

  * deli\_term?: string

    **에스크로 결제 예상 배송 소요일**

    에스크로 결제 시, 결제 상품의 예상 배송 소요일입니다. 에스크로 결제 사용 시 입력을 권장하고 있습니다.

    - 기본값은 `00`입니다.
    - 항상 두 자리 수로 입력되어야 합니다. 예상 배송 소요기간이 3일인 경우, `03`으로 입력합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "kcp" END -->

- redirectUrl?: string

  **리디렉션 방식에서 결제 프로세스 완료 후 이동될 고객사 URL**

  - 대부분의 모바일 결제환경에서 반드시 입력해야 합니다.

- noticeUrls?: string\[]

  **결제 웹훅 수신 URL**

  관리자 콘솔에서 설정한 웹훅 주소 대신 사용할 주소입니다.

  - 해당 값 설정시 관리자 콘솔에 설정한 주소로는 웹훅이 발송되지 않습니다.

- appScheme?: string

  **모바일 결제 후 고객사 앱으로 복귀하기 위한 URL scheme**

  ISP/앱카드에서 결제 완료 후 고객사 앱으로 복귀할 때 사용합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" START -->

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 `myappscheme://` 형식으로 입력해 주세요.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" END -->

- productType?: string

  **상품 유형**

  - 실물 상품: `PRODUCT_TYPE_REAL`
  - 디지털 상품: `PRODUCT_TYPE_DIGITAL`

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods }}) => name === "nice" && payMethods === 'mobile' START -->

  <div class="hint" data-style="warning">

  나이스페이먼츠 휴대폰 소액결제 시 `productType`는 필수 입력이며, 상점에 설정된 상품 유형과 입력된 상품 유형이 다른 경우 결제가 실패합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods }}) => name === "nice" && payMethods === 'mobile' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'smartro' && payMethods === 'mobile' START -->

  <div class="hint" data-style="warning">

  스마트로 휴대폰 소액결제 시 `productType`는 필수 입력이며, 상점에 설정된 상품 유형과 입력된 상품 유형이 다른 경우 결제가 실패합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'smartro' && payMethods === 'mobile' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'kpn' && payMethods === 'mobile' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스 휴대폰 소액결제 시 `productType`는 필수 입력입니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'kpn' && payMethods === 'mobile' END -->

- offerPeriod?: oneof object

  **서비스 제공 기간**

  `range`와 `interval` 중 하나만 입력해주세요.

  - range?: object

    **서비스 제공 기간 범위**

    - from?: string

      **시작 시점**

    - to?: string

      **종료 시점**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    <div class="hint" data-style="warning">

    스마트로의 경우 `from`과 `to`를 동시에 입력해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  - interval?: string

    **제공 기간**

    - `{number}d` (`{number}`일)
    - `{number}m` (`{number}`분)
    - `{number}y` (`{number}`년)

- products?: object\[]

  **구매 상품 상세 정보**

  - id: string

    **상품 아이디**

  - name: string

    **상품명**

  - code?: string

    **상품 코드**

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 반드시 입력해주세요.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' END -->

  - amount: number

    **상품 단위 가격**

    - 결제 금액과 동일하게 통화별 scale factor가 적용된 금액으로 전달해주세요.

  - quantity: number

    **상품 수량**

  - tag?: string

    **상품 태그**

- storeDetails?: object

  **상점 정보**

  - ceoFullName?: string

    **상점 대표자 이름**

  - phoneNumber?: string

    **상점 연락처**

  - address?: string

    **상점 주소**

  - zipcode?: string

    **상점 우편번호**

- isCulturalExpense?: boolean

  **문화비 지출 여부**

  도서, 공연, 박물관 등 문화비 지출 여부

- isEscrow?: boolean

  **에스크로 결제 여부**

  `true`로 설정하면 에스크로를 사용합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" START -->

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

  <div class="hint" data-style="warning">

  나이스페이먼츠의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => ['kcp', 'kpn', 'inicis'].includes(name) START -->

  - locale?: string

  **결제창 언어**

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['kcp', 'kpn'].includes(name) START -->

  - 한국어: `KO_KR`
  - 영어: `EN_US`

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['kcp', 'kpn'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  - 한국어: `KO_KR`
  - 영어: `EN_US`
  - 중국어(간체): `ZH_CN`

  <div class="hint" data-style="warning">

  KG이니시스의 경우 중국어(간체)는 PC 결제 시에만 지원됩니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => ['kcp', 'kpn', 'inicis'].includes(name) END -->

- country?: string

  **결제 국가**

  [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html)에 의해 표준화된 2글자 국가 코드입니다.

- popup?: object

  **결제창이 팝업 방식일 경우 결제창에 적용할 속성**

  - center?: boolean

    `true`로 설정하면 결제창이 브라우저 화면의 정중앙에 표시됩니다.

### 결제 오류 처리

결제 중 오류가 발생하여 결제가 완료되지 않은 경우를 처리합니다.

`SDK`의 반환 값에 `code`가 있는 경우 오류 상태로 `message` 필드에 오류 메시지가 존재합니다.
결제대행사로부터 오류를 전달받은 경우 `code`는 `FAILURE_TYPE_PG`이고, 결제대행사의 오류 코드인 `pgCode`를 기반으로 결제 오류를 처리할 수 있습니다.

### 서버 측으로 결제 완료 요청

완료된 결제의 `paymentId`를 서버로 전송하여 결제 상태를 반영합니다.

<!-- CONDITIONAL CONTENT when=({ pg }) => pg.payMethods !== "virtualAccount"  START -->

### 결제 완료 상태 처리

서버로부터 검증 후 결제가 완료된 경우를 처리합니다.

<!-- CONDITIONAL CONTENT when=({ pg }) => pg.payMethods !== "virtualAccount"  END -->

<!-- CONDITIONAL CONTENT when=({ pg }) => pg.payMethods === "virtualAccount"  START -->

### 가상계좌 발급 상태 처리

서버로부터 검증 후 가상계좌가 발급된 경우를 처리합니다.

<!-- CONDITIONAL CONTENT when=({ pg }) => pg.payMethods === "virtualAccount"  END -->

### 결제 실패 상태 처리

서버로부터 검증 결과를 획득하여, 결제가 최종적으로 실패한 경우를 처리합니다.

## 서버 측

### 포트원 서버 SDK 불러오기

포트원 서버 SDK를 불러옵니다.

<!-- CONDITIONAL CONTENT language=backend/Express START -->

아래 명령어로 서버 SDK를 설치합니다.

![NPM Version](https://img.shields.io/npm/v/%40portone%2Fserver-sdk)

![JSR Version](https://img.shields.io/jsr/v/%40portone/server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="npm">

```shell
npm install --save @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="yarn">

```shell
yarn add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="pnpm">

```shell
pnpm add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="bun">

```shell
bun add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="deno">

```shell
deno add jsr:@portone/server-sdk
```

</div>

<div class="tabs-content" data-title="ni">

```shell
ni @portone/server-sdk
```

</div>

</div>

Node.js의 경우 v20 이상에서 정상 동작하며, v20 미만 버전은 폴리필이 필요합니다.

<details>

<summary>폴리필 방법</summary>

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js v18 이상 v20 미만">

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
globalThis.crypto = require("node:crypto").webcrypto;
```

```javascript title="ESM"
import { webcrypto } from "node:crypto";
globalThis.crypto = webcrypto;
```

</div>

<div class="tabs-content" data-title="Node.js v18 미만">

[@whatwg-node/fetch](https://www.npmjs.com/package/@whatwg-node/fetch) 패키지를 의존성에 추가해 주세요.

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
const { fetch, crypto } = require("@whatwg-node/fetch");
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

```javascript title="ESM"
import { crypto, fetch } from "@whatwg-node/fetch";
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

</div>

</div>

</details>

<!-- CONDITIONAL CONTENT language=backend/Express END -->

<!-- CONDITIONAL CONTENT language=backend/FastAPI START -->

아래 명령어로 서버 SDK를 설치합니다.

![PyPI - Version](https://img.shields.io/pypi/v/portone-server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="uv">

```shell
uv add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="poetry">

```shell
poetry add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="rye">

```shell
rye add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pipenv">

```shell
pipenv install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Conda">

```shell
conda install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Hatch">

```toml title="pyproject.toml"
[project]
dependencies = [
  "portone-server-sdk~=x.x.x"
]
```

</div>

<div class="tabs-content" data-title="PDM">

```shell
pdm add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pip requirements">

```shell title="requirements.txt"
portone-server-sdk ~= x.x.x
```

</div>

</div>

<!-- CONDITIONAL CONTENT language=backend/FastAPI END -->

<!-- CONDITIONAL CONTENT language=backend/Flask START -->

아래 명령어로 서버 SDK를 설치합니다.

![PyPI - Version](https://img.shields.io/pypi/v/portone-server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="uv">

```shell
uv add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="poetry">

```shell
poetry add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="rye">

```shell
rye add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pipenv">

```shell
pipenv install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Conda">

```shell
conda install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Hatch">

```toml title="pyproject.toml"
[project]
dependencies = [
  "portone-server-sdk~=x.x.x"
]
```

</div>

<div class="tabs-content" data-title="PDM">

```shell
pdm add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pip requirements">

```shell title="requirements.txt"
portone-server-sdk ~= x.x.x
```

</div>

</div>

<!-- CONDITIONAL CONTENT language=backend/Flask END -->

<!-- CONDITIONAL CONTENT language=backend/Spring_Kotlin START -->

Maven Central을 통해 서버 SDK를 설치합니다.

[![Maven Central Version](https://img.shields.io/maven-central/v/io.portone/server-sdk)](https://central.sonatype.com/artifact/io.portone/server-sdk)

[![javadoc](https://javadoc.io/badge2/io.portone/server-sdk/javadoc.svg)](https://javadoc.io/doc/io.portone/server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="Apache Maven">

```xml
<dependency>
  <groupId>io.portone</groupId>
  <artifactId>server-sdk</artifactId>
  <version>x.x.x</version>
</dependency>
```

</div>

<div class="tabs-content" data-title="Gradle (Kotlin)">

```kotlin
implementation("io.portone:server-sdk:x.x.x")
```

</div>

<div class="tabs-content" data-title="Gradle (Groovy)">

```groovy
implementation 'io.portone:server-sdk:x.x.x'
```

</div>

</div>

<!-- CONDITIONAL CONTENT language=backend/Spring_Kotlin END -->

### 포트원 API Secret 설정

서버 SDK를 사용하기 위해 포트원 V2 API Secret을 설정합니다.
API Secret은 포트원 관리자콘솔의 [결제 연동 > 연동 정보 > 식별코드 ・ API Keys > V2 API](https://admin.portone.io/integration-v2/manage/api-keys?version=v2)에서 발급받으실 수 있습니다.

### 결제 완료 요청

완료된 결제의 실제 상태를 조회해 시스템에 반영합니다. 브라우저 SDK를 통해 결제하는 경우 모든 결제 과정이 브라우저에서 진행되므로 결제가 조작되는 것을 막기 위해 서버에서 검증이 필요합니다.

### 결제 정보 조회

브라우저에서 전송한 `paymentId`를 통해 실제 결제 상태를 조회합니다.

<!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' START -->

<div class="hint" data-style="warning">

ISP/페이북을 통한 결제 시 토스페이먼츠가 실제 카드 번호와 다른 카드 번호를 전달하고 있어 결제 내역 단건 조회시 응답되는 `payment_method_detail.card.detail.bin` 정보가 정확하지 않을 수 있습니다.

</div>

<!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' END -->

### 결제 정보 일치 검증

포트원에 전달한 `customData`로 조회한 상품 정보와 결제 정보가 일치하는지 검증합니다.

### 웹훅 수신

결제 상태의 변화를 실시간으로 확인해야 한다면 웹훅을 사용할 수 있습니다.

### HTTP Body 수신 설정

웹훅 내용을 검증하기 위해서는 HTTP Body를 문자열 형태로 수신해야 합니다.

### 웹훅 검증

수신한 웹훅이 위조되지 않았는지 포트원 서버 SDK를 사용하여 검증합니다.

### 결제 상태 업데이트

검증된 웹훅 결과를 바탕으로 결제 상태를 업데이트합니다.
