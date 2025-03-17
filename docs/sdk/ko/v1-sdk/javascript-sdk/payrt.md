---
title: 결제응답 파라미터
description: callback 으로 내려가는 응답 파라미터 항목을 확인할 수 있습니다.
targetVersions:
  - v1
versionVariants:
  v2: /sdk/ko/v2-sdk/payment-response
---

## 결제 요청에 대해 반환되는 응답 정보

<div class="hint" data-style="info">

PG사 또는 결제수단에 따라서 반환되는 속성들이 상이합니다.

</div>

<div class="hint" data-style="warning">

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

위 JS SDK 버전을 사용하면서 (신) 토스페이먼츠, (신) 스마트로, (신) 나이스페이먼츠, (신) 페이팔, KSNET, 웰컴페이먼츠 연동시에는
`imp_uid`, `merchant_uid`, `error_code`, `error_msg`만 제공됩니다.

결제 실패 사유와 코드 확인을 위해서는 `error_code`, `error_msg` 파라미터를 참고해주세요.

</div>

- success: boolean

  **결제 성공여부**

  결제승인 혹은 가상계좌 발급이 성공한 경우, True

  <div class="hint" data-style="warning">

  PG사/결제수단에 따라 `imp_success`로 반환됩니다.

  </div>

- error\_code: string

  **결제 실패코드**

  결제가 실패하는 경우 PG사 원천코드가 내려갑니다.

- error\_msg: string

  **결제 실패메세지**

  결제가 실패하는 경우 PG사 원천메세지가 내려갑니다.

- imp\_uid: string

  **포트원 고유 결제번호**

  success가 false이고 사전 validation에 실패한 경우, imp\_uid는 null일 수 있음

- merchant\_uid: string

  **주문번호**

- pay\_method: string

  **결제수단 구분코드**

  <details>

  <summary>상세코드 확인하기</summary>

  - `card` (신용카드)
  - `trans`(실시간 계좌이체)
  - `vbank`(가상계좌)
  - `phone`(휴대폰 소액결제)
  - `cultureland`(컬쳐랜드 상품권 (구.문화상품권))
  - `smartculture`(스마트문상 (게임 문화 상품권))
  - `booknlife`(도서 문화 상품권)
  - `culturegift`(문화상품권)
  - `samsung`(삼성페이)
  - `kakaopay`(카카오페이)
  - `naverpay`(네이버페이)
  - `payco`(페이코)
  - `lpay`(L페이)
  - `ssgpay`(SSG페이)
  - `tosspay`(토스페이)
  - `applepay`(애플페이)
  - `pinpay`(핀페이)
  - `skpay`(11Pay (구.SKPay))
  - `wechat`(위쳇페이)
  - `alipay`(알리페이)
  - `unionpay`(유니온페이)
  - `tenpay`(텐페이)
  - `paysbuy`(페이스바이)
  - `econtext`(편의점 결제)
  - `molpay`(MOL페이)
  - `point`(베네피아 포인트 등 포인트 결제)
  - `paypal`(페이팔)
  - `toss_brandpay`(토스페이먼츠 브랜드페이)
  - `naverpay_card`(네이버페이 - 카드)
  - `naverpay_point`(네이버페이 - 포인트)

  </details>

- paid\_amount: **number**

  **결제금액**

- status: string

  **결제상태**

  - `ready`(브라우저 창 이탈, 가상계좌 발급 완료 등 미결제 상태)
  - `paid`(결제완료)
  - `failed`(신용카드 한도 초과, 체크카드 잔액 부족, 브라우저 창 종료 또는 취소 버튼 클릭 등 결제실패 상태)

- name: string

  **주문자명**

- pg\_provider: string

  **PG사 구분코드**

  <details>

  <summary>상세코드 확인하기</summary>

  - `html5_inicis`(KG이니시스웹표준)
  - `inicis`(KG이니시스ActiveX결제창)
  - `kcp`(NHN KCP)
  - `kcp_billing`(NHN KCP 정기결제)
  - `uplus`((구) 토스페이먼츠(구 LG U+))
  - `nice`((구) 나이스페이먼츠)
  - `kicc`(한국정보통신)
  - `kakaopay`(카카오페이)
  - `danal`(다날 휴대폰 소액결제)
  - `danal_tpay`(다날 일반결제)
  - `mobilians`(모빌리언스)
  - `payco`(페이코)
  - `paypal`((구) 페이팔)
  - `eximbay`(엑심베이)
  - `naverpay`(네이버페이-결제형)
  - `naverco`(네이버페이-주문형)
  - `smilepay`(스마일페이)
  - `paymentwall`(페이먼트월)
  - `eximbay`(엑심베이)
  - `tosspay`(토스페이)
  - `smartro`((구) 스마트로)
  - `settle`(세틀뱅크)
  - `settle_acc`(세틀뱅크 내통장 결제)
  - `daou`(키움페이 (구. 페이조아))
  - `tosspayments` ((신) 토스페이먼츠)
  - `paypal_v2`((신) 페이팔)
  - `nice_v2`((신) 나이스페이먼츠)
  - `smartro_v2`((신) 스마트로)
  - `toss_brandpay`(토스페이먼츠 브랜드페이)
  - `welcome` (웰컴페이먼츠)

  </details>

- emb\_pg\_provider?: string

  **간편결제 구분코드**

  결제창에서 간편결제 호출시 결제 승인된 PG사 구분코드

  - [x] 일부 PG사 또는 간편결제로 결제가 발생되지 않은 경우 해당 파라미터는 생략됩니다.

  <details>

  <summary>상세코드 확인하기</summary>

  - naverpay
  - kakopay
  - payco
  - samsungpay
  - ssgpay
  - lpay
  - applepay
  - pinpay
  - tosspay
  - skpay
  - toss\_brandpay

  </details>

- pg\_tid: string

  **PG사 거래번호**

  PG사에서 거래당 고유하게 부여하는 거래번호입니다.

- buyer\_name: string

  **주문자명**

- buyer\_email: string

  **주문자 Email**

- buyer\_tel: string

  **주문자 연락처**

- buyer\_addr: string

  **주문자 주소**

- buyer\_postcode: string

  **주문자 우편번호**

- custom\_data: string

  **고객사 임의 지정 데이터**

- paid\_at: string

  **결제승인시각 (UNIX timestamp)**

  <div class="hint" data-style="info">

  **Unix timestamp 란?**

  **유닉스 시간**(영어: Unix time)은 시각을 나타내는 방식이다. **POSIX 시간**이나 **Epoch 시간**이라고 부르기도 한다. 1970년 1월 1일 00:00:00 협정 세계시(UTC) 부터의 경과 시간을 초로 환산하여 정수로 나타낸 것이다. 유닉스 시간에서 윤초는 무시된다. 유닉스 계열 운영 체제나 여러 다른 운영 체제, 그리고 파일 형식들에서 사용된다. 윤초 처리 방식 때문에 시간을 선형으로 표현하지 못하며 협정 세계시의 윤초를 표현할 수 없다..

  </div>

- receipt\_url?: string

  **거래 매출전표 URL**

## 추가속성

- apply\_num?: string

  **신용카드 승인번호**

  - 신용카드 결제수단에 한하여 제공

- vbank\_num?: string

  **가상계좌 입금 계좌번호**

  <div class="hint" data-style="warning">

  PG사로부터 전달된 정보 그대로 제공에 따라 숫자 외 dash(-) 또는 기타 기호가 포함되어 있을 수 있음

  </div>

- vbank\_name?: string

  **가상계좌 입금은행 명**

- vbank\_holder?: string

  **가상계좌 예금주**

  <div class="hint" data-style="warning">

  계약된 사업자명으로 표시됨, 단, 일부 PG사의 경우 null 을 반환하므로 자체 처리 필요

  </div>

- vbank\_date?: string

  **가상계좌 입금기한 (UNIX timestamp)**

## 결제 응답 샘플

```json title="결제 응답 sample object"
{
  "apply_num": "42827474",
  "bank_name": null,
  "buyer_addr": "서울특별시 강남구 삼성동",
  "buyer_email": "test@portone.io",
  "buyer_name": "포트원 기술지원팀",
  "buyer_postcode": "123-456",
  "buyer_tel": "010-1234-5678",
  "card_name": "신한카드",
  "card_number": "5428790000000294",
  "card_quota": 0,
  "currency": "KRW",
  "custom_data": null,
  "imp_uid": "imp_347242536261",
  "merchant_uid": "57008833-33004",
  "name": "당근 10kg",
  "paid_amount": 1004,
  "paid_at": 1648344363,
  "pay_method": "card",
  "pg_provider": "kcp",
  "pg_tid": "22336466628585",
  "pg_type": "payment",
  "receipt_url": "https://admin8.kcp.co.kr/assist/bill.BillActionNew.do?cmd=card_bill&tno=22336466628585&order_no=imp_347242536261&trade_mony=1004",
  "status": "paid",
  "success": true
}
```
