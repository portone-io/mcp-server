---
title: 포트원 V2 Android 모바일 SDK
description: Android를 위한 포트원 V2 모바일 SDK 사용 방법을 안내합니다.
targetVersions:
- v2
---

# android-sdk

[![](https://jitpack.io/v/portone-io/android-sdk.svg)](https://jitpack.io/#portone-io/android-sdk)

안드로이드 클라이언트 환경에서 포트원 V2 결제 시스템에 연동하기 위한 SDK입니다.

## 설치하기

프로젝트의 그래들 혹은 메이븐 설정을 아래와 같이 설정하세요.

### 그래들

```Gradle Kotlin DSL
// settings.gradle.kts

    dependencyResolutionManagement {
        repositories {
            mavenCentral()
            maven {
                url = uri("https://jitpack.io")
            }
        } 
    }

// build.gradle.kts

    dependencies {
        implementation("com.github.portone-io:android-sdk:x.y.z")
    }

```

#### minSdkVersion이 API LEVEL 26 미만인 경우

java 8 API를 사용하기 위해, desugaring 의존성을 추가해주셔야 합니다.

```Gradle Kotlin DSL
// settings.gradle.kts

    dependencyResolutionManagement {
        repositories {
            mavenCentral()
            maven {
                url = uri("https://jitpack.io")
            }
        } 
    }

// build.gradle.kts
    compileOptions {
        isCoreLibraryDesugaringEnabled = true
    }

    dependencies {
        implementation("com.github.portone-io:android-sdk:x.y.z")
        coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:x.y.z")
    }
```

### 메이븐

```XML
	<repositories>
		<repository>
		    <id>jitpack.io</id>
		    <url>https://jitpack.io</url>
		</repository>

    	<dependency>
	    <groupId>com.github.portone-io</groupId>
	    <artifactId>android-sdk</artifactId>
	    <version>x.y.z</version>
	</dependency>
	</repositories>
```

### AndroidManifest.xml 설정

카드, 간편결제사 앱을 실행 하기 위해 다음 앱 스킴 목록을 AndroidManifest.xml에 추가해주세요.

```XML
    <queries>

        <!-- 간편결제 -->
        <package android:name="com.kftc.bankpay.android" /> <!-- 뱅크페이 -->
        <package android:name="com.nhnent.payapp" /> <!-- 페이코 -->
        <package android:name="com.lottemembers.android" /> <!-- LPAY -->
        <package android:name="com.ssg.serviceapp.android.egiftcertificate" /> <!-- SSGPAY -->
        <package android:name="com.inicis.kpay" /> <!-- KPAY -->
        <package android:name="com.tmoney.tmpay" /> <!-- 티머니페이 -->
        <package android:name="viva.republica.toss" /> <!-- 토스페이 -->
        <package android:name="com.samsung.android.spay" /> <!-- 삼성페이 -->
        <package android:name="com.kakao.talk" /> <!-- 카카오페이 -->
        <package android:name="com.nhn.android.search" /> <!-- 네이버 -->
        <package android:name="com.mysmilepay.app" /> <!-- 스마일페이 -->
        <!-- 카드 -->
        <package android:name="kvp.jjy.MispAndroid320" /> <!-- ISP페이북 -->
        <package android:name="com.kbcard.cxh.appcard" /> <!-- KBPay -->
        <package android:name="com.kbstar.reboot" /> <!-- liiv -->
        <package android:name="com.kbstar.kbbank" /> <!-- liiv -->
        <package android:name="com.samsung.android.spaylite" /> <!-- 삼성페이니 -->
        <package android:name="com.nhnent.payapp" /> <!-- 페이코 -->
        <package android:name="com.lge.lgpay" /> <!-- 엘지페이 -->
        <package android:name="com.hanaskcard.paycla" /> <!-- 하나 -->
        <package android:name="kr.co.hanamembers.hmscustomer" /> <!-- 하나멤버스 -->
        <package android:name="com.hanaskcard.rocomo.potal" /> <!-- 하나공인인증 -->
        <package android:name="kr.co.citibank.citimobile" /> <!-- 씨티모바일 -->
        <package android:name="com.lcacApp" /> <!-- 롯데 -->
        <package android:name="kr.co.samsungcard.mpocket" /> <!-- 삼성 -->
        <package android:name="com.shcard.smartpay" /> <!-- 신한 -->
        <package android:name="com.shinhancard.smartshinhan" /> <!-- 신한(ARS/일반/smart) -->
        <package android:name="com.shinhan.smartcaremgr" /> <!-- 신한 SOL -->
        <package android:name="com.hyundaicard.appcard" /> <!-- 현대 -->
        <package android:name="nh.smart.nhallonepay" /> <!-- 농협 -->
        <package android:name="nh.smart.card" /> <!-- 농협 -->
        <package android:name="net.ib.android.smcard" /> <!-- 삼성 모니모 -->
        <package android:name="kr.co.citibank.citimobile" /> <!-- 씨티 -->
        <package android:name="com.wooricard.smartapp" /> <!-- 우리WON카드 -->
        <package android:name="com.wooribank.smart.npib" /> <!-- 우리WON뱅킹 -->
        <!-- 백신 -->
        <package android:name="com.TouchEn.mVaccine.webs" /> <!-- TouchEn -->
        <package android:name="com.ahnlab.v3mobileplus" /> <!-- V3 -->
        <package android:name="kr.co.shiftworks.vguardweb" /> <!-- vguard -->
        <!-- 신용카드 공인인증 -->
        <package android:name="com.hanaskcard.rocomo.potal" /> <!-- 하나 -->
        <package android:name="com.lumensoft.touchenappfree" /> <!-- 현대 -->
        <!-- 계좌이체 -->
        <package android:name="com.kftc.bankpay.android" /> <!-- 뱅크페이 -->
        <package android:name="kr.co.kfcc.mobilebank" /> <!-- MG 새마을금고 -->
        <package android:name="com.nh.cashcardapp" /> <!-- 뱅크페이 -->
        <package android:name="com.knb.psb" /> <!-- BNK경남은행 -->
        <package android:name="com.lguplus.paynow" /> <!-- 페이나우 -->
        <package android:name="com.kbankwith.smartbank" /> <!-- 케이뱅크 -->
        <!-- 해외결제 -->
        <package android:name="com.eg.android.AlipayGphone" /> <!-- 페이나우 -->
        <!-- 기타 -->
        <package android:name="com.sktelecom.tauth" /> <!-- PASS -->
        <package android:name="com.lguplus.smartotp" /> <!-- PASS -->
        <package android:name="com.kt.ktauth" /> <!-- PASS -->
        <package android:name="kr.danal.app.damoum" /> <!-- 다날 다모음 -->
        <package android:name="com.shinhan.sbanking" /> <!-- 신한 SOL뱅크 -->
    </queries>
```

## 사용 방법

일반적인 플로우는 결제를 요청할 화면에서, registerForXXXXActivity() -> requestXXX를 호출하는 방식으로 이루어져 있습니다.

예) 일반 결제 요청 시, registerForPaymentActivity()로 결제 완료/실패 시 어떻게 처리할지 등록 -> 이후 requestPayment를 호출하여 결제 요청

### 일반 결제(PortOne.requestPayment)

결제 요청 시 필요한 자세한 파라미터에 대한 내용은 PaymentRequest.kt 파일에 기술되어 있습니다.

```kotlin
class MainActivity : AppCompatActivity() {
    // 결제 완료/실패 이후 응답을 처리 하기 위한 ResultLauncher 생성
    private val paymentActivityResultLauncher =
        PortOne.registerForPaymentActivity(this, callback = object :
            PaymentCallback {
            override fun onSuccess(response: PaymentResponse.Success) {
                AlertDialog.Builder(this@MainActivity)
                    .setTitle("결제 성공")
                    .setMessage(response.toString())
                    .show()
            }

            override fun onFail(response: PaymentResponse.Fail) {
                AlertDialog.Builder(this@MainActivity)
                    .setTitle("결제 실패")
                    .setMessage(response.toString())
                    .show()
            }

        })
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        PortOne.requestPayment(
            this,
            request = PaymentRequest(
                storeId = "상점 아이디",
                channelKey = "채널 키",
                paymentId = "결제 건 ID",
                orderName = "주문 명",
                amount = Amount(total = 1000, currency = Currency.KRW), // 금액
                method = PaymentMethod.Card() // 결제수단 관련 정보
            ),
            resultLauncher = paymentActivityResultLauncher
        )

```

### 빌링키 발급(PortOne.requestIssueBillingKey)

빌링키 발급 시 필요한 자세한 파라미터에 대한 내용은 IssueBillingKeyRequest.kt 파일에 기술되어 있습니다.

```kotlin
class MainActivity : AppCompatActivity() {
    // 빌링키 발급 완료/실패 이후 응답을 처리 하기 위한 ResultLauncher 생성
    private val issueBillingKeyActivityResultLauncher =
        PortOne.registerForIssueBillingKeyActivity(this, callback = object :
            IssueBillingKeyCallback {
            override fun onSuccess(response: IssueBillingKeyResponse.Success) {
                AlertDialog.Builder(this@IssueBillingKeyTestActivity)
                    .setTitle("빌링키 발급 성공")
                    .setMessage(response.toString())
                    .show()
            }

            override fun onFail(response: IssueBillingKeyResponse.Fail) {
                AlertDialog.Builder(this@IssueBillingKeyTestActivity)
                    .setTitle("빌링키 발급 실패")
                    .setMessage(response.toString())
                    .show()
            }

        })

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        // 빌링키 발급 요청 함수 호출, 호출 시 전달한 IssueBillingKeyRequest 정보로 발급을 요청하는 Activity를 생성합니다.
        PortOne.requestIssueBillingKey(
                    this,
                    request = IssueBillingKeyRequest(
                        storeId = "상점 아이디",
                        channelKey = "채널 키",
                        method = BillingKeyMethod.Card() // 빌링키 발급 수단
                    ),
                    resultLauncher = issueBillingKeyActivityResultLauncher
                )

```

### 본인인증 (PortOne.requestIdentityVerification)

본인인증 시 필요한 자세한 파라미터에 대한 내용은 IdentityVerificationRequest.kt 파일에 기술되어 있습니다.

```kotlin
class MainActivity : AppCompatActivity() {
    // 본인인증 완료/실패 이후 응답을 처리 하기 위한 ResultLauncher 생성
    private val identityVerificationActivityResultLauncher =
        PortOne.registerForIdentityVerificationActivity(this, callback = object :
            IdentityVerificationCallback {
            override fun onSuccess(response: IdentityVerificationResponse.Success) {
                AlertDialog.Builder(this@IdentityVerificationTestActivity)
                    .setTitle("본인인증 성공")
                    .setMessage(response.toString())
                    .show()
            }

            override fun onFail(response: IdentityVerificationResponse.Fail) {
                AlertDialog.Builder(this@IdentityVerificationTestActivity)
                    .setTitle("본인인증 실패")
                    .setMessage(response.toString())
                    .show()
            }

        })

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        // 본인인증 함수 호출, 호출 시 전달한 IdentityVerificationRequest 정보로 본인인증을 요청하는 Activity를 생성합니다.
         PortOne.requestIdentityVerification(
                    this,
                    request = IdentityVerificationRequest(
                        storeId = "상정 아이디",
                        identityVerificationId = "본인인증 요청 ID",
                        channelKey = "채널 키"
                    ),
                    resultLauncher = identityVerificationActivityResultLauncher
                )

```

## 버전

[유의적 버전 2.0.0](https://semver.org/spec/v2.0.0.html)을 사용합니다.

현재 주(主) 버전은 0입니다. 이는 라이브러리 공개 API가 아직 고정되지 않았음을 의미합니다. 주 버전이 1이 되기 전에도 릴리스 버전(프리릴리스가 아닌 버전)의 SDK를 프로덕션에서 사용할 수 있으며, 포트원은 관련 기술 지원을 제공합니다.

## 기술 지원

- tech.support@portone.io 로 문의 부탁드립니다.
