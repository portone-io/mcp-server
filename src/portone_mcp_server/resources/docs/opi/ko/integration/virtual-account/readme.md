---
title: 가상계좌 입금통보 설정
description: 결제대행사별 입금통보 URL을 안내합니다.
targetVersions:
  - v1
  - v2
---

가상계좌 결제를 이용하는 고객사의 경우 가상계좌 발급 후 고객이 입금 완료 했을 때 입금통보를 받을 수 있도록 아래와 같이 사전 설정을 진행해야 합니다.

## 결제대행사별 가상계좌 입금통보 URL

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

|결제대행사            |코드값 (pg provider)|입금통보 주소                                                                                                                                                                                                                                                              |
|----------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|KG이니시스            |html5\_inicis       |[https://service.iamport.kr/inicis\_payments/notice\_vbank](http://service.iamport.kr/inicis_payments/notice_vbank)                                                                                                                                                        |
|NHN KCP               |kcp                 |[https://service.iamport.kr/kcp\_payments/notice\_vbank](http://service.iamport.kr/kcp_payments/notice_vbank)                                                                                                                                                              |
|이지페이(KICC)        |kicc                |[https://service.iamport.kr/kicc\_payments/notice\_vbank](http://service.iamport.kr/kicc_payments/notice_vbank)                                                                                                                                                            |
|헥토파이낸셜          |settle              |[https://service.iamport.kr/settle\_payments/notice\_vbank](http://service.iamport.kr/settle_payments/notice_vbank)                                                                                                                                                        |
|키움페이              |daou                |<ul><li>발행 통지 URL: [https://service.iamport.kr/daou\_payments/result](http://service.iamport.kr/daou_payments/result)</li> <li>결과 통지 URL: [https://service.iamport.kr/daou\_payments/notice\_vbank](http://service.iamport.kr/daou_payments/notice_vbank)</li></ul>|
|토스페이먼츠(신모듈)  |tosspayments        |[https://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments](http://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments)                                                                                              |
|스마트로(신모듈)      |smartro\_v2         |입금 통보, 환불이체 URL 동일: [https://tx-gateway-service.prod.iamport.co/smartro-v2](http://tx-gateway-service.prod.iamport.co/smartro-v2)                                                                                                                                |
|나이스페이먼츠(구모듈)|nice                |[https://service.iamport.kr/nice\_payments/notice\_vbank](http://service.iamport.kr/nice_payments/notice_vbank)                                                                                                                                                            |
|나이스페이먼츠(신모듈)|nice\_v2            |[https://tx-gateway-service.prod.iamport.co/nicepay-v2](http://tx-gateway-service.prod.iamport.co/nicepay-v2)                                                                                                                                                              |
|웰컴페이먼츠          |welcome             |[https://tx-gateway-service.prod.iamport.co/welcome](http://tx-gateway-service.prod.iamport.co/welcome)                                                                                                                                                                    |

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

|PG              |코드값 (pg provider)|입금통보 주소                                                                                                                                                                | |
|----------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-|
|토스페이먼츠    |tosspaysments       |[https://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments](http://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments)| |
|스마트로        |smartro\_v2         |입금 통보, 환불이체 URL 동일: [https://tx-gateway-service.prod.iamport.co/smartro-v2](http://tx-gateway-service.prod.iamport.co/smartro-v2)                                  | |
|나이스페이먼츠  |nice\_v2            |[https://tx-gateway-service.prod.iamport.co/nicepay-v2](http://tx-gateway-service.prod.iamport.co/nicepay-v2)                                                                | |
|KG이니시스      |inicis\_v2          |[https://tx-gateway-service.prod.iamport.co/inicis-v2](http://tx-gateway-service.prod.iamport.co/inicis-v2)                                                                  | |
|한국결제네트웍스|kpn                 |[https://tx-gateway-service.prod.iamport.co/kpn/virtual-account](http://tx-gateway-service.prod.iamport.co/kpn/virtual-account)                                              | |
|NHN KCP         |kcp\_v2             |[https://tx-gateway-service.prod.iamport.co/kcp-v2](http://tx-gateway-service.prod.iamport.co/kcp-v2)                                                                        | |

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 결제대행사별 가상계좌 입금통보 URL 설정 방법

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>KG이니시스 설정 방법</summary>

1. [KG이니시스 가맹점관리자](http://iniweb.inicis.com/security/login.do) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[결제수단 정보]를 클릭합니다.
3. \[가상계좌] 항목 중 \[입금내역 통보]를 **실시간통보함**으로 설정해주세요.
4. \[입금통보 URL(IP)]를 `https://service.iamport.kr/inicis_payments/notice_vbank` 로 설정해주세요.
5. \[통보전문]을 **URL수신사용(일반)** 으로 설정해주세요.
6. \[채번방식]을 **건별채번**으로 설정해주세요.

(이미지 첨부: KG이니시스 가맹점관리자 내 입금통보 URL 설정 화면)

</details>

<details>

<summary>KCP 설정 방법</summary>

1. \[KCP 파트너관리자]\([https://partner.kcp.co.kr/](http://partner.kcp.co.kr/)) 접속 후 로그인을 합니다.
2. \[기술관리센터]→\[웹훅(Webhook) 관리]→\[웹훅URL 설정]을 클릭합니다.
3. \[변경 결제결과URL]을 `https://service.iamport.kr/kcp_payments/notice_vbank`로 설정해주세요.
4. \[인코딩 설정]을 `UTF-8`로 설정해주세요.

(이미지 첨부: KCP 파트너관리자 내 웹훅 URL 설정 화면)

</details>

<details>

<summary>나이스페이먼츠(구모듈) 설정 방법</summary>

1. [나이스페이먼츠 가맹점 관리자](http://npg.nicepay.co.kr/merchant/mkeyMngForm.do) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[기본정보]를 클릭합니다.
3. \[결제데이터통보] 항목에서 **가상계좌**의 \[URL/IP]를 `https://service.iamport.kr/nice_payments/notice_vbank` 로 설정해주세요.
4. \[재전송 간격]은 1분, \[재전송 횟수]는 3회로 설정해주세요.
5. \[OK체크] 체크 여부는 선택이며, 체크하지 않아도 무관합니다.

- 정상적인 입금통보 전송, 재전송을 위해 **암호화 전송 여부, 미전송시 체크를 해제**해야 합니다.
- 재전송 간격: 최소 1분 \~ 최대 10분까지만 입력 가능합니다.
- 재전송 횟수: 최소 1회 \~ 최대 10회까지 재전송 가능합니다.(전송 실패 건에 대해 자동 재전송)

(이미지 첨부: 나이스페이먼츠 가맹점 관리자 내 입금통보 URL 설정 화면)

</details>

<details>

<summary>이지페이(KICC) 설정 방법</summary>

이지페이(KICC) MID 발급 시 입금통보 URL이 자동으로 등록됩니다.
만약, 가상계좌 입금통보가 정상적으로 동작하지 않는 경우 KICC 영업담당자 혹은 대표 연락처(1644-2004, <easypay_cs@kicc.co.kr>)를 통해 \[가상계좌 입금통보 URL] 설정을 확인하시기 바랍니다.

</details>

<details>

<summary>헥토파이낸셜 설정 방법</summary>

헥토파이낸셜 MID 발급 후 헥토파이낸셜 담당자 및 기술팀에 메일로 요청해야 합니다.
<settle_pgdev@settlebank.co.kr>(개발팀)에 발급받은 MID 정보와 함께 아래와 같이 메일을 발송하여 요청을 진행해주세요.

> 헥토파이낸셜의 가상계좌 기능을 이용하기 위해 포트원의 vbank API를 사용하고자 합니다.
> 관련해서 정상적인 입금확인 절차가 이루어질 수 있도록 지정된 MID에 대한 가상계좌 통보 URL을 설정해 주시기 바랍니다.
>
> MID: XXXXXX 입금통보 URL: [https://service.iamport.kr/settle\_payments/notice\_vbank](http://service.iamport.kr/settle_payments/notice_vbank)
>
> 설정이 완료되면 회신 부탁드립니다.

</details>

<details>

<summary>키움페이 설정 방법</summary>

1. [키움페이 상점관리자](http://agent.kiwoompay.co.kr/) 접속 후 로그인을 합니다.
2. \[고객지원]→\[기술지원]→\[연동정보설정]를 클릭합니다.
3. \[CPID]를 선택한 후 \[조회하기]을 클릭합니다.
4. \[발행 통지 URL]을 [https://service.iamport.kr/daou\_payments/result](http://service.iamport.kr/daou_payments/result)로 설정해주세요.
5. \[결과 통지 URL]을 [https://service.iamport.kr/daou\_payments/notice\_vbank](http://service.iamport.kr/daou_payments/notice_vbank)로 설정해주세요.

(이미지 첨부: 키움페이 상점관리자 내 입금통보 URL 설정 화면 1)

(이미지 첨부: 키움페이 상점관리자 내 입금통보 URL 설정 화면 2)

(이미지 첨부: 키움페이 상점관리자 내 입금통보 URL 설정 화면 3)

</details>

<details>

<summary>웰컴페이먼츠 설정 방법</summary>

1. [웰컴페이먼츠 관리자시스템](http://wbiz.paywelcome.co.kr/) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[결제수단 정보]를 클릭합니다.
3. \[가상계좌] 항목 중 \[입금내역 통보]를 **실시간통보함**으로 설정해주세요.
4. \[입금통보 URL(IP)]를 `https://tx-gateway-service.prod.iamport.co/welcome`로 설정해주세요.
5. \[통보전문]을 **URL수신사용(일반)** 으로 설정해주세요.

(이미지 첨부: 웰컴페이먼츠 관리자시스템 내 입금통보 URL 설정 화면 1)

(이미지 첨부: 웰컴페이먼츠 관리자시스템 내 입금통보 URL 설정 화면 2)

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>KSNET 설정 방법</summary>

KSNET은 포트원을 통해 발급된 MID에 대해 자동으로 입금통보 URL이 설정됩니다.
만약 입금통보를 받지 못하는 경우 KSNET 담당자에게 메일을 통해 확인 요청 후 변경이 필요합니다.

</details>

<details>

<summary>토스페이먼츠(신모듈) 설정 방법</summary>

1. [토스페이먼츠 개발자센터](http://developers.tosspayments.com/) 접속 후 로그인을 합니다.
2. \[내 개발정보]를 클릭합니다.
3. \[상점]을 선택한 후 \[웹훅]을 클릭합니다.
4. \[+ 웹훅 등록하기]를 클릭합니다.
5. \[이름]을 입력하고, \[URL]은 `https://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments`로 설정해주세요.
6. \[구독할 이벤트]에서 `DEPOSIT_CALLBACK`을 체크한 후 \[등록하기]를 클릭합니다.

(이미지 첨부: 토스페이먼츠 개발자센터 내 입금통보 URL 설정 화면 1)

(이미지 첨부: 토스페이먼츠 개발자센터 내 입금통보 URL 설정 화면 2)

</details>

<details>

<summary>나이스페이먼츠(신모듈) 설정 방법</summary>

1. [나이스페이먼츠 가맹점 관리자](http://npg.nicepay.co.kr/merchant/mkeyMngForm.do) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[기본정보]를 클릭합니다.
3. \[결제데이터통보] 항목에서 **가상계좌**의 \[URL/IP]를 `https://tx-gateway-service.prod.iamport.co/nicepay-v2` 로 설정해주세요.
4. \[재전송 간격]은 1분, \[재전송 횟수]는 3회로 설정해주세요.
5. \[OK체크] 체크 여부는 선택이며, 체크하지 않아도 무관합니다.

- 정상적인 입금통보 전송, 재전송을 위해 **암호화 전송 여부, 미전송시 체크를 해제**해야 합니다.
- 재전송 간격: 최소 1분 \~ 최대 10분까지만 입력 가능합니다.
- 재전송 횟수: 최소 1회 \~ 최대 10회까지 재전송 가능합니다.(전송 실패 건에 대해 자동 재전송)

(이미지 첨부: 나이스페이먼츠 가맹점 관리자 내 입금통보 URL 설정 화면 )

</details>

<details>

<summary>스마트로(신모듈) 설정 방법</summary>

1. [스마트로 스마일비즈](http://www.smilebiz.co.kr/index.html) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[기본정보]를 클릭합니다.
3. \[결제 데이터 통보] 항목 중 \[가상계좌] 및 \[환불]항목에 다음과 같이 설정해주세요.
4. \[통보 티입]은 **신통보** 를 선택합니다.
5. \[인코딩 타입]은 **UTF-8** 를 선택합니다.
6. \[URL/IP]는 `https://tx-gateway-service.prod.iamport.co/smartro-v2`로 입력해주세요.
7. \[재전송 간격]은 1분, \[재전송 횟수]는 5회로 입력한 후 \[저장]을 클릭합니다.

- 재전송 간격: 최소 1분 \~ 최대 10분까지만 입력 가능합니다.
- 재전송 횟수: 최소 1회 \~ 최대 10회까지 재전송 가능합니다.(전송 실패 건에 대해 자동 재전송)

(이미지 첨부: 스마트로 스마일비즈 내 입금통보 URL 설정 화면)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary>KG이니시스 설정 방법</summary>

1. [KG이니시스 가맹점관리자](http://iniweb.inicis.com/security/login.do) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[결제수단 정보]를 클릭합니다.
3. \[가상계좌] 항목 중 \[입금내역 통보]를 **실시간통보함**으로 설정해주세요.
4. \[입금통보 URL(IP)]를 `https://tx-gateway-service.prod.iamport.co/inicis-v2` 로 설정해주세요.
5. \[통보전문]을 **URL수신사용(일반)** 으로 설정해주세요.
6. \[채번방식]을 **건별채번**으로 설정해주세요.

(이미지 첨부: KG이니시스 가맹점관리자 내 입금통보 URL 설정 화면)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary>한국결제네트웍스(KPN) 설정 방법</summary>

한국결제네트웍스(KPN)는 계약 이후, 발급된 MID에 대해 **가상계좌 백노티 기능**을 별도로 요청해야 합니다.

한국결제네트웍스(KPN) 담당자에게 MID 정보와 함께 입금 통보 URL을 전달하여 가상계좌 백노티 기능 요청을 진행해주세요.

만약 입금통보를 받지 못하는 경우 한국결제네트웍스(KPN) 담당자에게 메일을 통해 확인 요청 후 변경이 필요합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary>NHN KCP 설정 방법</summary>

1. [KCP 파트너관리자](http://partner.kcp.co.kr) 접속 후 로그인을 합니다.
2. \[기술관리센터]→\[웹훅(Webhook) 관리]→\[웹훅URL 설정]을 클릭합니다.
3. \[웹훅 URL]을 `https://tx-gateway-service.prod.iamport.co/kcp-v2`로 설정해주세요.
4. \[인코딩 설정]을 `UTF-8`로 설정해주세요.
5. \[저장]을 클릭합니다.

(이미지 첨부: KCP 파트너관리자 내 웹훅 URL 설정 화면)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->
