---
title: 결제대행사별 연동 정보 확인하기 - 페이팔 (V2)
targetVersions:
  - v2
---

1. [페이팔](http://www.paypal.com/) 접속 후 로그인을 합니다.

2. \[Account settings]-\[Business information]을 클릭합니다.

   (이미지 첨부: 페이팔 페이지 내 PayPal Merchant ID 조회 화면)

3. 포트원 콘솔에서 채널 추가 시 \[PayPal Merchant ID]를 입력한 후 `저장`을 클릭합니다.

   <div class="hint" data-style="info">

   - 포트원에서 제공하는 페이팔 테스트용 계정으로 채널을 추가하신 경우, 테스트 결제 시 테스트용 구매자 계정을 이용하여 결제를 진행해야합니다.
     [→ 테스트용 계정생성 바로가기](http://developer.paypal.com/dashboard/accounts)

   - 판매자와 구매자 계정 국가가 모두 한국인 경우 페이팔 정책상 결제가 불가능합니다.
     따라서 테스트용 구매자 계정 생성 시 Sandbox Accounts의 Country가 US인 Personal(구매자) 계정으로 생성하여 테스트를 해야합니다.

   - 테스트 계정으로 결제 시 테스트용 카드정보를 참고하여 결제를 진행해야 합니다. [→ 테스트용 카드정보 바로가기](http://developer.paypal.com/api/rest/sandbox/card-testing/#link-creditcardgeneratorfortesting)

   </div>
