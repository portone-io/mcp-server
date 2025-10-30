---
title: 결제대행사별 연동 정보 확인하기 - KG이니시스
targetVersions:
  - v1
  - v2
---

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

- **INILite Key**는 정기결제 시 필수로 입력해야 합니다.
- **INIAPI Key**, **INIAPI IV** 하위 상점 관련 API 사용시 필수로 입력해야 합니다. [영수증 내 하위 상점 거래 등록 API 바로가기](https://developers.portone.io/api/rest-v1/partner#post%20%2Fpartners%2Freceipts%2F%7Bimp_uid%7D)

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="info">

크레덴셜 중 **hashKey** 는 선택사항으로, KG이니시스에서 제공하는 모바일 금액위변조 방지 기능 사용을 원하실 경우 입력하시면 됩니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

1. [KG이니시스 가맹점관리자](http://iniweb.inicis.com/security/login.do) 접속 후 로그인을 합니다.

2. \[상점정보]→\[계약정보]→\[부가정보]를 클릭합니다.

3. 아래의 크레덴셜 값들을 확인합니다. 값이 표시되지 않는 경우 생성/갱신 버튼을 클릭해 주세요.

   <ul>

   <li>**웹결제 signkey 생성 조회**의 조회 버튼을 클릭하여 값을 확인할 수 있습니다.</li>
   <li>**INIAPI key 생성 갱신**의 조회 버튼을 클릭하여 \[INIAPI KEY], \[INIAPI IV] 값을 확인할 수 있습니다.</li>

   <!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

   <li>**모바일 금액위변조 HashKey**의 조회 버튼을 클릭하여 값을 확인할 수 있습니다.</li>

   <!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

   </ul>

(이미지 첨부: KG이니시스 가맹점관리자 내 크레덴셜 정보 조회 화면 1)

4. INILite Key의 조회 버튼을 클릭하여 값을 확인할 수 있습니다.

(이미지 첨부: KG이니시스 가맹점관리자 내 크레덴셜 정보 조회 화면 2)

5. 포트원 콘솔에서 채널 추가 시 \[상점아이디]와 위 과정에서 발급받은 크레덴셜 값들을 입력한 후 `저장`을 클릭합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="warning">

포트원 V1 결제모듈을 사용하시는 경우 KG이니시스로부터 전달받은 키파일을 별도로 등록해야 합니다. 키파일 등록과 관련하여 문의사항이 있는 경우 채널톡으로 문의해주세요.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->
