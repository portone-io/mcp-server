---
title: Android 11 보안정책에 따른 앱 패키지 등록 안내
category: 업데이트
tags:
  - 업데이트
datetime: 2021-12-21T15:00:00.000Z
---

안녕하세요.

포트원 기술지원팀입니다.

Android 11 (SDK 30) 부터 패키지 가시성 정책이 변경되어 기존 사용하시던 로직에서 문제가 발생할 수 있습니다.

2021년 11월부터 구글 플레이 스토어에 새로 등록하거나, 업데이트 되는 앱 모두 targetSdkVersion 30 이상의 반영이 강제되기 때문에 본 가이드를 보시고 조치를 취하시기 바랍니다.

#### 이슈

앱 targetSdkVersion 30 에서 패키지 가시성을 요구하는 함수(queryIntentActivities(), getInstalledApplications(), getInstalledApplications(), resolveActivity() 등) 호출시,패키지 가시성이 확보 되지 않았다면 null 로 return 되어 정상적인 비즈니스 로직을 수행할 수 없음.

#### 조치방안

- Android 에서 포트원 제공 앱 플러그인(SDK) 사용 고객사\
  iamport-android, iamport-flutter, iamport-react-native 등
- SDK 내에서 패키지 가시성을 요구하지 않기 때문에 별도의 조치사항이 없습니다.
- Android 에서 포트원 javascript SDK 을 직접 연동하는 고객사\
  아래 두가지 방안에서 선택하여 처리하시기 바랍니다.
  - WebViewClient shouldOverrideUrlLoading()에서 예외처리 로직 추가 방안\
    별도의 앱패키지 리스트 관리가 필요치 않기에 해당 방식을 권장합니다
    - 결제앱 설치여부 확인 등을 위해 패키지 정보를 조회하는 경우 해당 로직을 제거합니다.
      - queryIntentActivities(), getInstalledApplications(), getInstalledApplications(), resolveActivity() 등의 함수
    - 결제앱 설치 여부의 확인은 startActivity() 호출시 ActivityNotFoundException 발생을 catch 하여 앱 미설치 상황이라 간주하고, 앱마켓 이동 등 앱 미설치시 로직을 처리합니다.
      - 예시코드

```kotlin
// 예시코드이며 고객사 구현에 따라 다를 수 있습니다.
override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
    request?.url?.let {
        if (it.scheme == "about") {
            return true // 이동하지 않음
        }
        val urlStr = it.toString()
        if (!URLUtil.isNetworkUrl(urlStr) && !URLUtil.isJavaScriptUrl(urlStr)) {
            openPaymentApp(urlStr) // 앱이동
            return true
        }
				//..기타로직 중략.. (m_redirect_url 결과 체크 등)
    }
    return super.shouldOverrideUrlLoading(view, request)
}

fun openPaymentApp(url: String) {
    Intent.parseUri(url, Intent.URI_INTENT_SCHEME)?.let { intent: Intent ->
        runCatching {
            startActivity(intent) // 앱 이동
        }.recoverCatching {
					// 앱이동에 실패(미설치)시 앱스토어로 이동
            val packageName = intent.getPackage()
            if (!packageName.isNullOrBlank()) {
                startActivity(Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=$packageName")))
            }
        }
    }
}
```

- AndroidManifest.xml 수정을 통한 패키지 가시성 확보 방안\
  사용하는 PG 에 따라 다를 수 있으며, 새로운 결제수단의 추가시 매번 추가하여 새로 배포되어야 합니다.\
  아래 패키지 등록시 패키지 가시성이 확보되어 패키지 가시성을 요구하는 함수에서 정상적인 응답을 받을 수 있습니다.

```html
<queries>
  <!--간편결제-->
  <package android:name="finance.chai.app" /> <!--차이페이-->
  <package android:name="com.nhnent.payapp" /> <!--페이코-->
  <package android:name="com.lottemembers.android" /> <!--LPAY-->
  <package android:name="com.ssg.serviceapp.android.egiftcertificate" /> <!--SSGPAY-->
  <package android:name="com.inicis.kpay" /> <!--KPAY-->
  <package android:name="com.tmoney.tmpay" /> <!--티머니페이-->
  <package android:name="viva.republica.toss" /> <!--토스페이-->
  <package android:name="com.samsung.android.spay" /> <!--삼성페이-->
  <package android:name="com.kakao.talk" /> <!--카카오페이-->
  <package android:name="com.nhn.android.search" /> <!--네이버-->
  <package android:name="com.mysmilepay.app" /> <!--스마일페이-->
  <!--카드-->
  <package android:name="kvp.jjy.MispAndroid320" /> <!--ISP페이북-->
  <package android:name="com.kbcard.cxh.appcard" /> <!--KBPay-->
  <package android:name="com.kbstar.liivbank" /> <!--리브-->
  <package android:name="com.kbstar.reboot" /> <!--리브-->
  <package android:name="com.samsung.android.spaylite" /> <!--삼성페이-->
  <package android:name="com.nhnent.payapp" /> <!--페이코-->
  <package android:name="com.lge.lgpay" /> <!--엘지페이-->
  <package android:name="com.hanaskcard.paycla" /> <!--하나-->
  <package android:name="kr.co.hanamembers.hmscustomer" /> <!--하나멤버스-->
  <package android:name="com.hanaskcard.rocomo.potal" /> <!--하나공인인증-->
  <package android:name="com.citibank.cardapp" /> <!--씨티-->
  <package android:name="kr.co.citibank.citimobile" /> <!--씨티모바일-->
  <package android:name="com.lcacApp" /> <!--롯데-->
  <package android:name="kr.co.samsungcard.mpocket" /><!--삼성-->
  <package android:name="com.shcard.smartpay" /> <!--신한-->
  <package android:name="com.shinhancard.smartshinhan" /> <!--신한(ARS/일반/smart)-->
  <package android:name="com.hyundaicard.appcard" /> <!--현대-->
  <package android:name="nh.smart.nhallonepay" /> <!--농협-->
  <package android:name="kr.co.citibank.citimobile" /> <!--씨티-->
  <package android:name="com.wooricard.smartapp" /> <!--우리WON카드-->
  <package android:name="com.wooribank.smart.npib" /> <!--우리WON뱅킹-->
  <!--백신-->
  <package android:name="com.TouchEn.mVaccine.webs" /> <!--TouchEn-->
  <package android:name="com.ahnlab.v3mobileplus" /> <!--V3-->
  <package android:name="kr.co.shiftworks.vguardweb" /> <!--vguard-->
  <!--신용카드 공인인증-->
  <package android:name="com.hanaskcard.rocomo.potal" /> <!--하나-->
  <package android:name="com.lumensoft.touchenappfree" /> <!--현대-->
  <!--계좌이체-->
  <package android:name="com.kftc.bankpay.android" /> <!--뱅크페이-->
  <package android:name="kr.co.kfcc.mobilebank" /> <!--MG 새마을금고-->
  <package android:name="com.kbstar.liivbank" /> <!--뱅크페이-->
  <package android:name="com.nh.cashcardapp" /> <!--뱅크페이-->
  <package android:name="com.knb.psb" /> <!--BNK경남은행-->
  <package android:name="com.lguplus.paynow" /> <!--페이나우-->
  <package android:name="com.kbankwith.smartbank" /> <!--케이뱅크-->
  <!--해외결제-->
  <package android:name="com.eg.android.AlipayGphone" /> <!--페이나우-->
  <!--기타-->
  <package android:name="com.sktelecom.tauth" /> <!--PASS-->
  <package android:name="com.lguplus.smartotp" /> <!--PASS-->
  <package android:name="com.kt.ktauth" /> <!--PASS-->
  <package android:name="kr.danal.app.damoum" /> <!--다날 다모음-->
</queries>
```

---

#### 주의사항

targetSdkVersion 30 이상 구글 플레이 스토어 배포 전반드시 앱카드 또는 간편결제 App 이동이 이루어지는지 결제 테스트를 해보시기 바라며,특이사항 발생시 아임포트 기술지원으로 문의 주시기 바랍니다.

아임포트기술지원 <support@iamport.kr>

---

참고

- <https://developer.android.com/training/basics/intents/package-visibility?hl=ko>
- [https://docs.tosspayments.com/guides/webview#2-앱-스킴-실행을-위한-코드-추가하기](https://docs.tosspayments.com/guides/webview#2-%EC%95%B1-%EC%8A%A4%ED%82%B4-%EC%8B%A4%ED%96%89%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%BD%94%EB%93%9C-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0)
- [https://docs.tosspayments.com/misc/faq#q-android-11api-수준-30-이상인-앱에서-패키지-공개-상태-관리-대응은-어떻게-하나요](https://docs.tosspayments.com/misc/faq#q-android-11api-%EC%88%98%EC%A4%80-30-%EC%9D%B4%EC%83%81%EC%9D%B8-%EC%95%B1%EC%97%90%EC%84%9C-%ED%8C%A8%ED%82%A4%EC%A7%80-%EA%B3%B5%EA%B0%9C-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%8C%80%EC%9D%91%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%98%EB%82%98%EC%9A%94)
- <https://www.inicis.com/blog/archives/127961><https://www.ksnet.co.kr/Bbs/Details/?id=2862&ci=NOTICE>[https://support.eximbay.com/hc/ko/search?utf8=✓\&category=360003524133\&query=안드로이드+11+](https://support.eximbay.com/hc/ko/search?utf8=%E2%9C%93\&category=360003524133\&query=%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C+11+)
