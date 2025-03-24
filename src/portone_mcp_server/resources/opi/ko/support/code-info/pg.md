---
title: 결제대행사별 빌링키 획득 규칙
description: 결제대행사별 빌링키 획득 규칙을 안내합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="info">

발급과 동시에 결제 기능은 포트원 결제모듈 V1에서만 지원되며, 지원 여부는 결제창 방식 기준으로 작성되었습니다.
API방식으로 연동하실 때는 [비인증 결제(일회성) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fonetime)
를 사용하시거나 [빌링키 발급 API](https://developers.portone.io/api/rest-v1/billingkey#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)
로 발급 후 결제 로직을 직접 구현하실 수 있습니다.

</div>

|       결제대행사      |코드값(pg provider)|결제창 방식|API 방식|              발급과 동시에 결제 기능 (결제창기준)              |
|:---------------------:|:-----------------:|:---------:|:------:|:--------------------------------------------------------------:|
| 나이스페이먼츠(구모듈)|        nice       |     X     |    O   |                                -                               |
| 나이스페이먼츠(신모듈)|      nice\_v2     |     X     |    O   |                                -                               |
|  토스페이먼츠(신모듈) |    tosspayments   |     O     |    O   |                             불가능                             |
|          KCP          |    kcp\_billing   |     O     |    X   |                             불가능                             |
|          KCP          |        kcp        |     X     |    O   |                                -                               |
|       KG이니시스      |   html5\_inicis   |     O     |    X   |                             불가능                             |
|       KG이니시스      |       inicis      |     X     |    O   |                                -                               |
|          다날         |    danal\_tpay    |     O     |    X   |                              가능                              |
|    다날(휴대폰결제)   |       danal       |     O     |    O   |                              가능                              |
|      헥토파이낸셜     |       settle      |     X     |    O   |                                -                               |
|     이지페이(KICC)    |        kicc       |     O     |    X   |                             불가능                             |
|        키움페이       |        daou       |     X     |    O   |                                -                               |
|      KG모빌리언스     |      moblians     |     O     |    X   |                              가능                              |
|         KSNET         |       ksnet       |     X     |    O   |                                -                               |
|    스마트로(신모듈)   |    smartro\_v2    |     O     |    X   |                             불가능                             |
|      웰컴페이먼츠     |      welcome      |     O     |    O   |발급 수단에 따라 상이함. (카드 : 불가능 / 휴대폰소액결제 : 가능)|
|       카카오페이      |      kakaopay     |     O     |    X   |                              가능                              |
|       네이버페이      |      naverpay     |     O     |    X   |                             불가능                             |
|         페이코        |       payco       |     O     |    X   |                             불가능                             |
|        토스페이       |    tosspay\_v2    |     O     |    X   |                             불가능                             |
|헥토파이낸셜 내통장결제|    settle\_acc    |     O     |    X   |                              가능                              |
|       페이먼트월      |    paymentwall    |     O     |    X   |                              가능                              |
|      페이팔 (RT)      |     paypal\_v2    |     O     |    X   |                             불가능                             |
