---
title: 결제 연동 준비하기
description: 포트원을 이용한 연동 개발이 처음이시라면 아래 안내 사항에 따라 진행하세요.
targetVersions:
  - v1
  - v2
---

## <span id="registration">1. 포트원 회원가입 하기</span>

포트원 관리자 콘솔은 **별도 계약 없이 무료로** 회원가입이 가능합니다.

- 포트원 콘솔 화면에서 \[가입하기]를 클릭해 주세요. [→ 포트원 콘솔 바로 가기](https://admin.portone.io)

(이미지 첨부: 로그인 화면 예시)

- 포트원에서 사용할 이메일 주소 및 비밀번호를 입력한 후 \[가입]을 눌러주세요.

(이미지 첨부: 회원가입 화면 예시)

- 가입 완료 후 입력하신 이메일로 인증 메일이 발송됩니다. 메일 인증 전까지 로그인이 불가능하오니 꼭 인증 후 로그인을 시도해 주세요.

(이미지 첨부: 인증 메일 내용 예시)

<div class="hint" data-style="info">메일을 받지 못하신 경우 스팸메일함을 확인해주세요.</div>

<br />

## 2. 전자결제 신청하기

비지니스 정보(사업자 정보) 등록 후 이용할 결제대행사 및 결제수단 신청합니다.

- 로그인 후 \[홈]화면에서 왼쪽 상단에 \[전자결제 신청]을 클릭해 주세요.
- 약관 동의 후 \[시작하기!]를 클릭해 주세요.

(이미지 첨부: 약관동의 화면 예시)

- \[비지니스 인증] 정보를 단계에 따라 입력합니다.
- \[전자결제 신청] 정보를 단계에 따라 선택합니다.

**아직 전자결제 신청 전이라면 상세 가이드를 참고하여 전자결제를 신청해보세요!** [→ 전자결제 신청 상세 가이드 바로가기](http://help.portone.io/category/procedure/pg-application)

<div class="hint" data-style="info">

전자결제 신청 전 테스트를 하고싶으신 분은 아래 결제대행사 채널 설정하기를
참고하신 후 테스트 환경으로 채널 추가하여 테스트를 진행하실 수 있습니다.

</div>

## <span id="channel-config">3. 결제대행사 채널 설정하기</span>

결제 연동 시 사용할 결제대행사 채널을 추가합니다.

- 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] → \[채널 관리] 메뉴에서 연동하고자 하는 결제대행사 및 결제 모듈을 선택하여 채널을 추가합니다.

### 3-1. 연동 방법

<div class="tabs-container">

<div class="tabs-content" data-title="테스트 연동">

#### 테스트 환경 채널 연동 방법

(관련 이미지 첨부)

1. 연동 모드를 `테스트`로 변경해 주세요.
2. 사용할 `결제대행사`를 선택해 주세요.

(관련 이미지 첨부)

5. 연동할 결제방식 및 결제수단에 따라 `결제 모듈`을 선택해 주세요.
6. `다음` 버튼을 클릭해 주세요.

(관련 이미지 첨부)

5. `채널 이름`은 원하시는 이름으로 입력해 주세요. 채널 이름은 채널 목록에 표시되므로 사용자가 구분할 수 있는 값으로 입력하여 사용해 주세요. ex) KCP 정기결제용
   (공용 테스트 채널이 제공되는 결제대행사의 경우 MID 선택 시 자동으로 표시됩니다.)

6. `채널 속성`은 기본적으로 `결제`가 선택됩니다. 본인인증 용도로 채널을 연동하시는 경우 `본인인증`을 선택해 주세요.

7. 테스트 용도로 발급 받은 `상점 아이디`를 직접 입력하시거나, 제공되는 다른 공용 상점아이디를 선택합니다.

8. 추가로 입력해야 하는 정보는 결제대행사별로 상이하며, 직접 발급받은 테스트 상점아이디를 이용하시는 경우 필수 입력 항목을 확인하여 올바르게 입력해 주세요.

9. `과세구분`을 선택해 주세요. 과세 혹은 면세 설정 시 \[결제사 정산] 메뉴에서 부가세 신고 참고 자료용 데이터에 적용됩니다.

10. `저장`버튼을 눌러 채널을 추가를 완료합니다.

<div class="hint" data-style="info">

채널 등록 시 결제대행사별 저장하는 파라미터가 다릅니다. 파라미터 정보 확인은 하단의 \[결제대행사별 연동 정보 확인하기]를 확인해주세요.

</div>

</div>

<div class="tabs-content" data-title="실연동">

#### 운영 환경 채널 연동 방법

(관련 이미지 첨부)

1. 연동 모드를 `실연동`으로 변경해 주세요.
2. 사용할 `결제대행사`를 선택해 주세요.

(관련 이미지 첨부)

3. 연동할 결제방식 및 결제수단에 따라 `결제 모듈`을 선택해 주세요.
4. `다음` 버튼을 클릭해 주세요.

(관련 이미지 첨부)

5. `채널 이름`은 원하시는 이름으로 입력해 주세요. 채널 이름은 채널 목록에 표시되므로 사용자가 구분할 수 있는 값으로 입력하여 사용해 주세요. ex) KCP 정기결제용
6. `채널 속성`을 선택해 주세요. 기본적으로 `결제`가 선택됩니다. 본인인증 용도로 채널을 연동하시는 경우 `본인인증`을 선택해 주세요.
7. 결제대행사와 계약 후 발급 받은 `상점 아이디`와 추가 정보를 입력해 주세요.
8. `과세구분`을 선택해 주세요. 과세 혹은 면세 설정 시 \[결제사 정산]메뉴에서 부가세 신고 참고 자료용 데이터에 적용됩니다.
9. `저장`버튼을 눌러 채널을 추가를 완료합니다.

<div class="hint" data-style="info">

채널 등록 시 결제대행사별 저장하는 파라미터가 다릅니다. 파라미터 정보 확인은 하단의 \[결제대행사별 연동 정보 확인하기]를 확인해주세요.

</div>

</div>

</div>

### <span id="integration-info">3-2. 결제대행사별 연동 정보 확인하기</span>

#### 결제대행사

<details>

<summary>나이스페이먼츠</summary>

<div class="hint" data-style="info">

**채널 연동 시 필요한 입력 정보 확인 방법은 구모듈과 신모듈이 동일합니다.**

</div>

1. [나이스페이먼츠 가맹점 관리자](http://npg.nicepay.co.kr/merchant/mkeyMngForm.do) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[KEY관리]를 클릭합니다.
3. MID 및 Key 값을 확인할 수 있습니다.

(이미지 첨부: 나이스페이먼츠 가맹점 관리자 내 KEY 조회 화면)

4. \[가맹점정보]→\[비밀번호관리]→\[거래취소비밀번호]를 클릭합니다.
5. 비밀번호를 설정합니다. 비밀번호는 최대 10자리까지 가능합니다.

(이미지 첨부: 나이스페이먼츠 가맹점 관리자 내 거래취소비밀번호 설정 화면)

6. 포트원 콘솔에서 채널 추가 시 \[MID], \[Key], \[결제취소 비밀번호]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>다날</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="일반결제">

포트원 콘솔에서 채널 추가 시 계약 완료 후 다날로부터 전달받은 \[CPID], \[CPPWD], \[신용카드 암호화 KEY], \[계좌이체/가상계좌 암호화 KEY]를 입력한 후 `저장`을 클릭합니다.

<div class="hint" data-style="info">

**CPPWD**는 상품권 결제를 연동하는 경우에만 필수로 입력해야 합니다. 만약 상품권 결제를 이용하지 않는다면 빈칸으로 둔 채 채널을 추가해야 합니다.

</div>

</div>

<div class="tabs-content" data-title="휴대폰결제/본인인증">

포트원 콘솔에서 채널 추가 시 계약 완료 후 다날로부터 전달받은 \[CPID], \[CPPWD], \[상품코드]를 입력한 후 `저장`을 클릭합니다.

<div class="hint" data-style="info">

휴대폰 본인인증만 이용하시는 경우 **상품코드**는 빈칸으로 저장해도 무방합니다.

</div>

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="info">

포트원 V2에서는 현재 다날 **휴대폰 본인인증**만 연동이 가능합니다.
휴대폰 본인인증만 이용하시는 경우 **상품코드**는 빈칸으로 저장해도 무방합니다.

</div>

포트원 콘솔에서 채널 추가 시 계약 완료 후 다날로부터 전달받은 \[CPID], \[CPPWD], \[상품코드]를 입력한 후 `저장`을 클릭합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>모빌리언스</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 모빌리언스로부터 전달받은 \[서비스ID]를 입력한 후 `저장`을 클릭합니다.

<div class="hint" data-style="info">

정기결제를 이용하는 경우 **정기결제용 서비스ID**를 필수로 입력해야 합니다.

</div>

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>스마트로</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

**채널 연동 시 필요한 입력 정보 확인 방법은 구모듈과 신모듈이 동일합니다.**

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

1. [스마트로 스마일비즈](http://www.smilebiz.co.kr/index.html) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[Key관리]를 클릭합니다.
3. MID 및 Key 값을 확인할 수 있습니다.

(이미지 첨부: 스마트로 스마일비즈 내 KEY 조회 화면)

4. \[가맹점정보]→\[기본정보]→\[거래취소 비밀번호]를 클릭합니다.
5. 비밀번호를 설정합니다. 비밀번호는 최대 6자리까지 가능합니다.

(이미지 첨부: 스마트로 스마일비즈 내 거래취소비밀번호 설정 화면)

6. 포트원 콘솔에서 채널 추가 시 \[MID], \[Key], \[결제취소 비밀번호]를 입력한 후 `저장`을 클릭합니다. (Key는 Merchant Key 를 입력해야 합니다.)

<div class="hint" data-style="info">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

신모듈 이용 시 유의사항

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

- 정기결제 이용 시 스마트로로부터 전달 받은 **ssp Mall ID**를 필수로 입력해야 합니다.
- 에스크로 결제 이용 시 스마트로로부터 전달 받은 **API Key**를 필수로 입력해야 합니다.

</div>

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>웰컴페이먼츠</summary>

1. [웰컴페이먼츠 관리자시스템](http://wbiz.paywelcome.co.kr/) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[기본정보]를 클릭합니다.
3. MID 값을 확인할 수 있습니다.

(이미지 첨부: 웰컴페이먼츠 관리자시스템 내 상점ID 조회 화면)

4. \[상점정보]→\[계약정보]→\[부가정보]를 클릭합니다.
5. 웹결제 signkey 생성 조회에서 `조회`를 클릭합니다.
6. `생성/갱신`을 클릭하여 \[웹결제 Signkey Key], \[필드암호화IV], \[필드암호화KEY] 값을 생성합니다.

(이미지 첨부: 웰컴페이먼츠 관리자시스템 내 웹결제 signkey 생성 화면)

7. 포트원 콘솔에서 채널 추가 시 \[MID], \[Sign Key], \[필드암호화IV], \[필드암호화Key]를 입력한 후 `저장`을 클릭합니다. (상점ID는 MID, 웹결제 Signkey Key는 Sign Key를 입력해야 합니다.)

</details>

<details>

<summary>이지페이(KICC)</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 이지페이(KICC)로부터 전달받은 \[가맹점ID]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>키움페이</summary>

1. [키움페이 상점관리자](http://agent.kiwoompay.co.kr/) 접속 후 로그인을 합니다.
2. \[고객지원]→\[기술지원]→\[연동정보설정]를 클릭합니다.
3. CPID를 선택하여 `조회하기`를 클릭합니다.
4. 결제수단을 선택합니다.
5. 결제연동키를 확인합니다.

(이미지 첨부: 키움페이 상점관리자 내 CPID 조회 화면)

6. 포트원 콘솔에서 채널 추가 시 \[CPID], \[결제연동키]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>토스페이먼츠</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="신모듈">

1. [토스페이먼츠 개발자센터](http://developers.tosspayments.com/) 접속 후 로그인을 합니다.
2. \[내 개발정보]를 클릭합니다.
3. \[API키] 메뉴에서 \[상점아이디(MID)]와 \[클라이언트키], \[시크릿키]를 확인합니다.
4. API 버전은 `2022-07-27`로 설정해야합니다.

(이미지 첨부: 토스페이먼츠 개발자센터 내 API 키 조회 화면)

5. 포트원 콘솔에서 채널 추가 시 \[상점아이디(MID)]와 \[클라이언트키], \[시크릿키]를 입력한 후 `저장`을 클릭합니다.

</div>

<div class="tabs-content" data-title="구모듈">

1. [토스페이먼츠 개발자센터](http://developers.tosspayments.com/) 접속 후 로그인을 합니다.
2. \[내 개발정보]를 클릭합니다.
3. \[API키] 메뉴에서 \[상점아이디(MID)]와 \[머트 키]를 확인합니다.

(이미지 첨부: 토스페이먼츠 개발자센터 내 API 키 조회 화면)

4. 포트원 콘솔에서 채널 추가 시 \[상점아이디(MID)], \[머트 키]를 입력한 후 `저장`을 클릭합니다.

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

1. [토스페이먼츠 개발자센터](http://developers.tosspayments.com/) 접속 후 로그인을 합니다.
2. \[내 개발정보]를 클릭합니다.
3. \[API키] 메뉴에서 \[상점아이디(MID)]와 \[클라이언트키], \[시크릿키]를 확인합니다.
4. API 버전은 `2022-07-27`로 설정해야합니다.

(이미지 첨부: 토스페이먼츠 개발자센터 내 API 키 조회 화면)

5. 포트원 콘솔에서 채널 추가 시 \[상점아이디(MID)]와 \[클라이언트키], \[시크릿키]를 입력한 후 `저장`을 클릭합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>헥토파이낸셜</summary>

1. [헥토파이낸셜 가맹점관리자](http://nspay.settlebank.co.kr/cpnInfo.do) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[기본정보]→\[라이센스&암호화키 정보]를 클릭합니다.
3. \[상점아이디], \[라이센스키(전문 해쉬 키)], \[암호화 키] 값을 확인할 수 있습니다.

(이미지 첨부: 헥토파이낸셜 가맹점관리자 내 라이센스&암호화키 정보 화면)

4. 포트원 콘솔에서 채널 추가 시 \[상점아이디], \[라이센스키(전문 해쉬 키)], \[암호화 키]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>KG이니시스</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="결제창 일반/정기 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

- **INILite Key**는 정기결제 시 필수로 입력해야 합니다.
- **INIAPI Key**, **INIAPI IV** 하위 상점 관련 API 사용시 필수로 입력해야 합니다. [영수증 내 하위 상점 거래 등록 API 바로가기](/api/rest-v1/partner#post%20%2Fpartners%2Freceipts%2F%7Bimp_uid%7D)

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

</div>

<div class="tabs-content" data-title="결제창 일반결제 및 API 수기/정기결제">

1. [KG이니시스 가맹점관리자](http://iniweb.inicis.com/security/login.do) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[부가정보]를 클릭합니다.
3. INIAPI key 생성 갱신의 조회 버튼을 클릭하여 \[INIAPI KEY], \[INIAPI IV] 값을 확인할 수 있습니다. 값이 표시되지 않는 경우 갱신 버튼을 클릭해 주세요.

(이미지 첨부: KG이니시스 가맹점관리자 내 크레덴셜 정보 조회 화면 1)

6. 포트원 콘솔에서 채널 추가 시 \[상점아이디]를 입력한 후 `저장`을 클릭합니다. \[INIAPI Key], \[INIAPI IV]의 값은 케이스에 따라 추가로 입력한 후 `저장`을 클릭합니다.

</div>

<div class="tabs-content" data-title="통합 본인인증">

포트원 콘솔에서 채널 추가 시 계약 완료 후 KG이니시스로부터 전달받은 \[MID]와\[apikey]를 입력한 후 `저장`을 클릭합니다.

</div>

<div class="tabs-content" data-title="신용카드 본인인증">

<div class="hint" data-style="warning">

신용카드 본인인증 서비스는 2021-11-22일부로 신규 서비스를 제공하지 않습니다.

</div>

포트원 콘솔에서 채널 추가 시 계약 완료 후 KG이니시스로부터 전달받은 \[SEEDKEY],\[SEEDIV], \[DI\_CODE]를 입력한 후 `저장`을 클릭합니다.

<div class="hint" data-style="info">

DI\_CODE는 12자리로 고객사에서 자체적으로 사이트(서비스)를 관리하는 코드입니다. 고객사 사이트(서비스)마다 DI\_CODE를 부여하여 관리하고 있는 경우에는 KG이니시스 카드본인인증 계약 진행시 계약서상에 고객사가 직접 기입한 값을 입력하시면 됩니다.

계약시 **DI\_CODE를 기입하지 않은 경우** 빈칸으로 저장해야 합니다.

</div>

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="결제창 일반/정기 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

- **INILite Key**는 정기결제 시 필수로 입력해야 합니다.
- **INIAPI Key**, **INIAPI IV** 하위 상점 관련 API 사용시 필수로 입력해야 합니다. [영수증 내 하위 상점 거래 등록 API 바로가기](/api/rest-v1/partner#post%20%2Fpartners%2Freceipts%2F%7Bimp_uid%7D)

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

</div>

<div class="tabs-content" data-title="통합 본인인증">

포트원 콘솔에서 채널 추가 시 계약 완료 후 KG이니시스로부터 전달받은 \[MID]와 \[apikey]를 입력한 후 `저장`을 클릭합니다.

</div>

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

<details>

<summary>KSNET</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 KSNET으로부터 전달받은 \[상점아이디(MID)] 및 \[API Key]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>한국결제네트웍스(KPN)</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 한국결제네트웍스(KPN)로부터 전달받은 \[상점아이디(MID)] 및 \[Secret OTP]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>NHN KCP</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="결제창 일반/수기결제 및 API 수기/정기결제">

1. 포트원 콘솔에서 채널 추가 시 계약 완료 후 KCP로부터 전달받은 사이트코드 및 사이트키를 입력한 후 `저장`을 클릭합니다.

2. 정기결제를 이용하시는 경우, 아래 절차를 진행해주세요.

   1. [KCP 파트너관리자](http://partner.kcp.co.kr/) 접속 후 로그인을 합니다.

   2. \[고객센터]→\[인증센터]→\[관리용 사설인증서]→\[인증서 발급]을 클릭합니다.

      (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 화면 1)

   3. 사용자명, 인증서 비밀번호를 입력한 후 \[다음]을 눌러 인증서를 발급합니다.

      (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 화면 2)

      (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 완료 화면)

   4. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹등록]을 클릭합니다.

   5. \[상점정보]→\[사이트코드]에서 그룹등록할 사이트코드를 선택합니다.

   6. \[그룹정보]에서 \[유형3]을 선택한 후 원하는 그룹명을 입력합니다.

   7. \[결제입력 정보]에서 \[결제유형] 및 \[납부유형]을 확인하시고 고객사 유형에 맞게 선택합니다.

   8. \[고지방법]에서 원하시는 고지 방법을 선택한 후 \[등록하기]를 클릭합니다.

      (이미지 첨부: KCP 파트너관리자 내 관리용 그룹등록 화면)

   9. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹조회]를 클릭합니다.

   10. \[사이트코드]에서 사용한 사이트코드를 선택한 후 \[검색]을 클릭합니다.

       (이미지 첨부: KCP 파트너관리자 내 관리용 그룹조회 화면)

   11. 포트원 콘솔에서 채널 추가 시 사이트코드, 사이트키, 앞서 발급한 정기자동결제 그룹아이디를 입력한 후 \[저장]을 클릭합니다.

</div>

<div class="tabs-content" data-title="결제창 정기결제">

1. [KCP 파트너관리자](http://partner.kcp.co.kr/) 접속 후 로그인을 합니다.

2. \[고객센터]→\[인증센터]→\[관리용 사설인증서]→\[인증서 발급]을 클릭합니다.

   (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 화면 1)

3. 사용자명, 인증서 비밀번호를 입력한 후 \[다음]을 눌러 인증서를 발급합니다.

   (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 화면 2)

   (이미지 첨부: KCP 파트너관리자 내 관리용 사설인증서 발급 완료 화면)

4. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹등록]을 클릭합니다.

5. \[상점정보]→\[사이트코드]에서 그룹등록할 사이트코드를 선택합니다.

6. \[그룹정보]에서 \[유형3]을 선택한 후 원하는 그룹명을 입력합니다.

7. \[결제입력 정보]에서 \[결제유형] 및 \[납부유형]을 확인하시고 고객사 유형에 맞게 선택합니다.

8. \[고지방법]에서 원하시는 고지 방법을 선택한 후 \[등록하기]를 클릭합니다.

   (이미지 첨부: KCP 파트너관리자 내 관리용 그룹등록 화면)

9. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹조회]를 클릭합니다.

10. \[사이트코드]에서 사용한 사이트코드를 선택한 후 \[검색]을 클릭합니다.

    (이미지 첨부: KCP 파트너관리자 내 관리용 그룹조회 화면)

11. 포트원 콘솔에서 채널 추가 시 사이트코드, 사이트키, 앞서 발급한 정기자동결제 그룹아이디를 입력한 후 \[저장]을 클릭합니다.

</div>

<div class="tabs-content" data-title="KCP 퀵페이">

포트원 콘솔에서 채널 추가 시 계약 완료 후 KCP로부터 전달받은 \[사이트코드] 및 \[사이트키], \[파트너 타입], \[파트너 서브타입], \[파트너이름]를 입력한 후 `저장`을 클릭합니다.

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="danger">

포트원 V2에서 제공하는 KCP의 경우 **KCP의 PG-API방식**만 지원합니다. 따라서 아래와 같이 인증서 발급 후
사용할 수 있습니다.

해당 인증서의 경우 유효기간은 **5년**이며, 유효기간 만료 30일전부터 갱신이 가능합니다.

**서비스 인증서의 유효기간이 만료되거나 폐기된 경우** 즉시 결제 승인/취소 등 관련
**서비스 이용이 불가능**하오니
서비스 사용을 위해서 인증서를 재발급이 필요한 후 **포트원에 저장된 채널 정보를 업데이트** 해야 합니다.

</div>

1. [KCP 파트너관리자](http://partner.kcp.co.kr/) 접속 후 로그인을 합니다.

2. \[고객센터]→\[인증센터]→\[KCP PG-API]를 클릭합니다.

   (이미지 첨부: NHN KCP 파트너관리자 내 \[고객센터] - \[PG-API 인증서] 예시 화면)

3. KCP PG-API 발급 버튼을 클릭합니다.

4. 파트너 관리자 비밀번호(로그인시 입력한 비밀번호)를 입력한 후 다음을 클릭합니다.

   (이미지 첨부: \[PG-API 인증서] 발급시 \[파트너 관리자 비밀번호 입력] 화면)

5. 사용할 개인키 비밀번호를 입력한 후 다음을 클릭합니다.

   - 개인키 비밀번호를 분실하신 경우 확인이 불가함으로 폐기 후 재발급해야 합니다.

   - 개인키를 폐기하는 즉시 기존에 사용하던 개인키와 서비스 인증서 사용이 불가능하며,
     결제 승인/취소/조회가 불가능하오니 잘 보관하시길 바랍니다.

   (이미지 첨부: \[PG-API 인증서] 발급시 \[개인키 비밀번호 등록] 화면)

6. KCP PG-API 개인키 및 서비스 인증서 발급이 완료되면 로컬에 .zip 파일이 다운로드 됩니다.

   - 서비스 인증서의 유효기간은 발급일로부터 5년으로, 유효기간 만료 30일전부터 갱신이 가능합니다.
   - 서비스 인증서의 유효기간이 만료되었거나 폐기한 경우 원활한 서비스 사용을 위해 인증서를 재발급해주세요.

   (이미지 첨부: \[PG-API 인증서] 발급 완료 화면)

7. 로컬내에서 압축 풀면 `KCP_AUTH_{$사이트코드}_CERT.pem` 파일과 `KCP_AUTH_{$사이트코드}_PRIKEY.pem` 파일을 확인할 수 있습니다.

8. 포트원 콘솔에서 채널 추가 시 \[MID(사이트코드)], \[PG-API 인증서키], \[PG-API 개인키], \[개인키 비밀번호]를
   입력한 후 저장을 클릭합니다.

9. 정기결제를 이용하시는 경우, 아래 절차를 진행해주세요.

   1. [KCP 파트너관리자](http://partner.kcp.co.kr/) 접속 후 로그인을 합니다.
   2. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹등록]을 클릭합니다.
   3. \[상점정보]→\[사이트코드]에서 그룹등록할 사이트코드를 선택합니다.
   4. \[그룹정보]에서 \[유형3]을 선택한 후 원하는 그룹명을 입력합니다.
   5. \[결제입력 정보]에서 \[결제유형] 및 \[납부유형]을 확인하시고 고객사 유형에 맞게 선택합니다.
   6. \[고지방법]에서 원하시는 고지 방법을 선택한 후 \[등록하기]를 클릭합니다.

   (이미지 첨부: KCP 파트너관리자 내 관리용 그룹등록 화면)

   7. \[결제관리]→\[정기자동결제 그룹관리]→\[그룹조회]를 클릭합니다.
   8. \[사이트코드]에서 사용한 사이트코드를 선택한 후 \[검색]을 클릭합니다.

   (이미지 첨부: KCP 파트너관리자 내 관리용 그룹조회 화면)

   9. 포트원 콘솔에서 채널 추가 시 앞서 발급한  \[MID(사이트코드)], \[PG-API 인증서키], \[PG-API 개인키],
      \[개인키 비밀번호], \[정기자동결제 그룹아이디]를 입력한 후 \[저장]을 클릭합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

#### 간편결제 직연동

<details>

<summary>네이버페이 결제형</summary>

포트원 콘솔에서 채널 추가 시 네이버페이 1차 승인 시 발송된 안내 메일을 참고하여 \[파트너ID(페이센터아이디)], \[ClientID], \[Client Secret], \[ChainID]를 입력한 후 `저장`을 클릭합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

포트원 V1을 이용하시는 경우 채널 추가 시 입력한 \[ChainID]가 자동 적용되지 않습니다. 결제 요청 시 `naverChainId` 파라미터에 해당 값을 입력하여 요청해야 합니다.
포트원 V2 또는 결제사 정산 서비스를 이용하시는 경우 채널 추가 시 입력한 \[ChainID]가 자동 적용됩니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="info">

포트원 V2을 이용하시는 경우 채널 추가 시 입력한 \[ChainID]가 결제 요청 시 자동 적용됩니다.
결제사 정산 서비스를 이용하시는 경우에도 채널 추가 시 입력한 \[ChainID]를 입력해야 합니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>네이버페이 주문형</summary>

포트원 콘솔에서 채널 추가 시 네이버페이 1차 승인 시 발송된 안내 메일을 참고하여 \[파트너ID(페이센터아이디)], \[certiKey]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>카카오페이</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 카카오페이로부터 전달받은 \[CID]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>토스페이</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

**채널 연동 시 필요한 입력 정보 확인 방법은 모듈에 상관없이 동일합니다.**

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

1. [토스페이 가맹점 관리자](http://merchant.pay.toss.im/) 접속 후 로그인을 합니다.
2. \[가맹점 정보]→\[API Key정보]를 클릭합니다.

(이미지 첨부: 토스페이 가맹점 관리자 내 API Key 조회 화면)

3. 포트원 콘솔에서 채널 추가 시 \[상점아이디(MID)], \[API Key]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>페이코</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 페이코로부터 전달받은 \[가맹점코드(CPID)], \[ProductID], \[SellerKey]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary>하이픈</summary>

1. [HYPHEN PAY & 바로계좌결제 운영 백오피스](http://payadmin.hyphen.im/) 접속 후 **바로계좌결제** 선택 후
   로그인을 합니다.

   (이미지 첨부: HYPHEN 백오피스 로그인 화면)

2. \[상점관리]→\[바로계좌결제 상점정보관리]를 클릭합니다.

3. 상점명을 클릭합니다.

   (이미지 첨부: HYPHEN \[상점관리] - \[상점정보관리] 예시 화면)

4. \[상점 기본정보]에서 \[상점번호]를 확인합니다.

   (이미지 첨부: HYPHEN \[상점 기본정보] 예시 화면)

5. \[암호화 키, 토큰]에서 \[암호화 키]와 \[암호화 토큰]을 확인합니다.

   (이미지 첨부: HYPHEN \[암호화 키, 토큰] 예시 화면)

6. 포트원 콘솔에서 채널 추가 시 \[PG상점아이디(상점 번호)], \[암호화 키], \[암호화 토큰]을
   입력한 후 \[저장]을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

#### 해외 결제대행사

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>엑심베이</summary>

포트원 콘솔에서 채널 추가 시 계약 완료 후 엑심베이로부터 전달받은 \[상점아이디] 및 \[Secret Key]를 입력한 후 `저장`을 클릭합니다.

</details>

<details>

<summary>페이먼트월</summary>

1. [페이먼트월](http://api.paymentwall.com/developers/applications) 접속 후 로그인을 합니다.
2. \[My Projects]를 클릭합니다.

(이미지 첨부: 페이먼트월 페이지 내 Key 조회 화면)

3. 포트원 콘솔에서 채널 추가 시 \[Project Key], \[Secret Key]를 입력한 후 `저장`을 클릭합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>페이팔</summary>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="페이팔 일반결제(SPB) / 정기결제(RT)">

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

</div>

<div class="tabs-content" data-title="페이팔 일반결제(Express Checkout)">

1. [페이팔](http://www.paypal.com/) 접속 후 로그인을 합니다.

2. \[Account settings]-\[Account access]를 클릭합니다.

3. \[API access]의 \[Update]를 클릭합니다.

   (이미지 첨부: 페이팔 페이지 내 PayPal Merchant ID 조회 화면 1)

4. \[NVP/SOAP API Integration (Classic)]를 클릭합니다.

   (이미지 첨부: 페이팔 페이지 내 PayPal Merchant ID 조회 화면 2)

5. \[API signature]를 선택한 후 \[Agree and Submit]을 클릭합니다.

   (이미지 첨부: 페이팔 페이지 내 PayPal Merchant ID 조회 화면 3)

6. 포트원 콘솔에서 채널 추가 시 \[API username], \[API password], \[Signature]를 입력한 후 `저장`을 클릭합니다.

<div class="hint" data-style="info">

- 테스트 모드로 결제를 진행하고 싶으신 경우 페이팔 테스트용 판매자/구매자 계정을 생성한 후 채널을 추가하여 테스트 결제를 진행해야 합니다. [→ 테스트용 계정생성 바로가기](http://developer.paypal.com/dashboard/accounts)

- 판매자와 구매자 계정 국가가 모두 한국인 경우 페이팔 정책상 결제가 불가능합니다.
  따라서 테스트용 구매자 계정 생성 시 Sandbox Accounts의 Country가 US인 Personal(구매자) 계정으로 생성하여 테스트를 해야합니다.

- 테스트 계정으로 결제 시 테스트용 카드정보를 참고하여 결제를 진행해야 합니다. [→ 테스트용 카드정보 바로가기](http://developer.paypal.com/api/rest/sandbox/card-testing/#link-creditcardgeneratorfortesting)

</div>

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="info">

포트원 V2에서는 페이팔 SPB 및 RT 방식만 제공합니다.

</div>

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

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

## <span id="integration-identifiers">4. 포트원 연동정보 확인하기</span>

포트원을 이용한 결제 연동 시 필요한 연동정보를 확인합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->* 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] → \[식별코드·API Keys] 메뉴에서 \[V1 API]를 선택하여 고객사 식별코드, REST API Key, REST API Secret을 확인할 수 있습니다." "(관련 이미지 첨부)<div class="hint" data-style="info">

**고객사 식별코드란?**

- 포트원 가입 시 사용자에게 자동으로 생성되는 **고유값**입니다.
- 결제창 연동 시 사용되며, 결제 호출 시 \[객체 초기화]에 사용됩니다.
- **기술 문의** 시 해당 값을 공유해 주시면 빠르게 문제 해결을 도와드릴 수 있습니다.

</div><div class="hint" data-style="info">

**REST API Key, REST API Secret란?**

- V1 API 호출 시 사용되는 Access Token을 발급할 때 사용되는 값입니다.
- REST API Secret은 재발급이 가능하며, 재발급 즉시 기존의 Secret은 사용이 불가능합니다.

</div><div class="hint" data-style="danger">

REST API Key, REST API Secret **결제 거래 건을 컨트롤할 수 있는 민감 정보**로 외부로 유출되지 않도록 주의가 필요합니다.

</div><!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->### 4-1. 스토어 아이디(Store ID) 복사하기포트원을 이용한 결제 연동 시 필요한 스토어 아이디(Store ID)를 복사할 수 있습니다." "(관련 이미지 첨부)* 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] 화면에서 스토어 아이디를 복사할 수 있습니다.

  <div class="hint" data-style="info">

  **스토어 아이디(Store ID)란?**

  - 포트원 가입 시 \[대표 상점]이 생성되며, 자동으로 생성되는 고유값 입니다.
  - 추가로 하위 상점을 생성하는 경우 **상점마다 고유하게 부여**됩니다.
  - 결제창 연동 시 사용되며, 결제 호출 시 `storeId` 파라미터에 해당 값을 넣어야 합니다.
  - **기술 문의 시 해당 값을 공유**해 주시면 빠르게 문제 해결을 도와드릴 수 있습니다.

  </div>### 4-2. V2 API Secret 발급하기V2 API를 연동하기 위해서는 V2 API Secret을 별도로 발급한 후 사용이 가능합니다.
V2 API Secret 은 **Owner, Admin** 계정에서만 발급 및 삭제가 가능합니다." "(관련 이미지 첨부)* 관리자 콘솔 화면에서 \[결제연동] → \[연동 관리] → \[식별코드·API Keys] 메뉴에서 \[V2 API]를 선택합니다.
* `새로운 API Secret 발급`을 클릭합니다.
* Secret 목록에 표시될 `Secret 이름`을 입력하고 `만료 기한`을 선택한 후 `생성`을 클릭합니다.
* 생성된 Secret을 복사합니다. `API Secret을 확인했습니다`를 누른 후엔 Secret 값을 확인할 수 없으니 주의해 주세요." "<div class="hint" data-style="danger">

API Secret 발급 직후에만 값을 확인할 수 있습니다. 페이지를 벗어나면 API Secret
확인이 불가하오니 복사한 후 임의의 장소에 저장하여 사용하세요. 만약, API
Secret 값을 잊어버리신 경우 새로 발급받아 사용해야 합니다.

</div><div class="hint" data-style="info">

**API Secret이란?**

- API 사용 시 Authorization 헤더 인증을 위해 사용되는 값입니다.

- API Secret을 발급받으신 후, 선호하는 [인증 방식](https://developers.portone.io/api/rest-v2?v=v2#auth)
  을 선택하여 API를 사용하실 수 있습니다.

</div><div class="hint" data-style="danger">

API Secret은 **결제 거래 건을 컨트롤할 수 있는 민감 정보**로 고객사 서버에서만 사용되어야 하며, 브라우저 등 외부에 노출되어서는 안 됩니다.

</div><!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->
