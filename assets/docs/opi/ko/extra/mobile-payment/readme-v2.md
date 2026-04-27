---
title: 모바일 앱에서 결제 연동하기
description: 모바일 앱(Android, iOS, Flutter, React Native)에서 포트원 결제를 연동하는 방법을 안내합니다.
targetVersions:
  - v2
---

포트원은 Android, iOS, Flutter, React Native용 공식 V2 SDK를 제공하고 있으며,
V2 SDK가 제공되지 않는 플랫폼이나,
앱이 이미 WebView로 구성되어 있는 경우에는 WebView에서 직접 연동할 수 있습니다.
([WebView 앱 연동 사례](https://github.com/portone-io/iamport-react-native/blob/HEAD/exampleForWebView/README.md))

## 연동원리

모바일 앱에서 결제를 연동하기 전에, 모바일 결제가 어떻게 동작하는지 이해해야 합니다.

### 왜 WebView를 사용하는가?

대부분의 PG사(카드사, 간편결제 등)는 **웹 기반 결제 UI만 제공**합니다.
카드 번호 입력 폼, 3DS 인증, 간편결제 동의 화면은 모두 웹 페이지로 구현되어 있습니다.

따라서 모바일 앱에서도 네이티브 UI가 아닌 **WebView 안에서 결제 UI를 표시**하게 됩니다.
포트원의 모바일 SDK는 이 WebView를 자동으로 관리하는 얇은 래퍼이며,
SDK 없이 연동할 경우 WebView를 직접 구성해야 합니다.

### 결제 흐름

사용자가 앱에서 결제를 시작하면 다음 과정이 진행됩니다.

```markdown
1. 앱이 WebView를 열고, 포트원 Browser SDK가 포함된 페이지를 로드
2. Browser SDK가 PG 결제 UI를 WebView에 표시
3. 사용자가 카드 정보 입력 / 간편결제 인증 진행
4. (필요시) 외부 앱 실행 — 은행 앱, 카카오페이 등
5. 외부 앱에서 인증 완료 → Deep Link로 앱 복귀
6. PG가 결제 결과와 함께 redirectUrl로 리다이렉트
7. 앱이 리다이렉트를 가로채서 결과 추출
8. 서버에서 결제 검증 후 주문 완료
```

포트원 모바일 SDK는 1\~7단계를 자동으로 처리합니다.

### 웹 결제와의 차이점

`PortOne.requestPayment()`는 결제창이 뜨기 전에 발생하는 오류(파라미터 형식 오류, 네트워크 통신 실패 등)를 Promise에서 throw합니다.
이는 모바일 WebView에서도 동일하지만, 결제 결과는 웹 브라우저와 달리 **리다이렉트 방식**으로 받아야 합니다.

```typescript
PortOne.requestPayment({
  // ... 결제 파라미터
  redirectUrl: "myapp://payment-complete",
  appScheme: "myapp://",
});
```

1. `redirectUrl`에 결제 완료 후 리다이렉트될 URL을 지정합니다. 결제 내에서 사용하지 않을 URL이면 됩니다.
2. `appScheme`에 앱의 URL scheme을 지정합니다. 이 값은 카드사 앱에 전달되어, 인증 완료 후 앱으로 복귀할 때 사용됩니다.
3. 결제 완료 시 WebView가 `redirectUrl`로 이동하며, 쿼리 파라미터에 결제 결과가 포함됩니다.
4. 앱이 이 URL을 가로채서 쿼리 파라미터에서 결과를 추출합니다.

<div class="hint" data-style="info">

모바일 결제에서는 `redirectUrl` 설정이 필수입니다.
설정하지 않으면 결제 UI가 정상적으로 표시되지 않을 수 있습니다.

</div>

<div class="hint" data-style="info">

결제 파라미터에 대한 자세한 내용은 [리다이렉트 방식의 경우](https://developers.portone.io/opi/ko/integration/start/v2/checkout?v=v2#3-1-리다이렉트-방식의-경우) 문서를 참고하세요.

</div>

### 외부 앱 처리

결제 도중 PG사의 결제 페이지가 카드사 앱카드, ISP 인증, 계좌이체 앱 등을 실행하기 위해
`kftc-bankpay://`, `ispmobile://`, `intent://` 같은 URL로 WebView를 이동시키는 경우가 있습니다.

**모바일 브라우저**(Safari, Chrome)에서는 이러한 커스텀 URL scheme을 만나면 OS에 자동으로 전달하여 해당 앱을 실행합니다.
하지만 **앱 내 WebView는 웹 콘텐츠 렌더링 전용**이므로 이 동작이 기본적으로 지원되지 않습니다.

- iOS `WKWebView`: HTTP/HTTPS가 아닌 scheme으로의 네비게이션을 차단합니다.
- Android `WebView`: 알 수 없는 scheme에 대해 오류 페이지(`ERR_UNKNOWN_URL_SCHEME`)를 표시합니다.

따라서 WebView의 URL 네비게이션 이벤트를 가로채서, 네이티브 코드에서 OS API를 호출하여 외부 앱을 직접 실행해야 합니다.

|URL 유형           |예시                |처리 방법                 |
|-------------------|--------------------|--------------------------|
|일반 웹 URL        |`https://...`       |WebView에서 정상 로드     |
|PG/카드사 앱 scheme|`kftc-bankpay://...`|해당 외부 앱 실행         |
|Android Intent     |`intent://...`      |Intent URI 파싱 후 앱 실행|
|커스텀 scheme      |`myapp://...`       |결제 완료 — 결과 추출     |

포트원 모바일 SDK는 이 URL 인터셉트 및 외부 앱 실행을 자동으로 처리합니다.

## SDK를 사용한 연동

포트원은 Android, iOS, React Native, Flutter용 공식 모바일 SDK를 제공합니다.
SDK가 위 연동원리에서 설명한 WebView 생성, 외부 앱 실행, 결제 결과 수신을 모두 자동으로 처리하므로 가장 간편한 연동 방식입니다.

SDK를 지원하는 플랫폼이라면 SDK를 사용하는 것을 권장합니다.

|플랫폼      |SDK                        |설치 방법            |레퍼런스                                                |
|------------|---------------------------|---------------------|--------------------------------------------------------|
|Android     |`android-sdk`              |JitPack              |[GitHub](https://github.com/portone-io/android-sdk)     |
|iOS         |`PortOneSDK`               |Swift Package Manager|[GitHub](https://github.com/portone-io/ios-sdk)         |
|React Native|`@portone/react-native-sdk`|npm                  |[GitHub](https://github.com/portone-io/react-native-sdk)|
|Flutter     |`portone_flutter`          |pub.dev              |[GitHub](https://github.com/portone-io/portone_flutter) |

<div class="hint" data-style="info">

각 SDK의 설치 및 사용법은 [모바일 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-mobile-sdk/readme)를 참고하세요.<br />
다양한 플랫폼의 연동 예시는 [portone-sample GitHub 저장소](https://github.com/portone-io/portone-sample)에서 확인하실 수 있습니다.

</div>

---

## SDK 없이 직접 연동하기

V2 SDK가 제공되지 않는 플랫폼이나 WebView를 직접 제어하고 싶은 경우,
아래 단계를 따라 연동할 수 있습니다.

### Step 1. 의존성 설치

WebView를 표시하고 외부 앱을 실행하기 위한 라이브러리를 설치합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="Flutter">

```yaml title="pubspec.yaml"
dependencies:
  flutter_inappwebview: ^6.1.5 # WebView
  url_launcher: ^6.3.1 # 외부 앱 실행
```

```shell
flutter pub get
```

</div>

<div class="tabs-content" data-title="Android (Kotlin)">

Android의 `WebView`는 기본 제공되므로 별도 의존성이 필요하지 않습니다.

`build.gradle`에서 minSdk 21 이상을 확인하세요.

```kotlin title="build.gradle.kts"
android {
    defaultConfig {
        minSdk = 21
    }
}
```

</div>

<div class="tabs-content" data-title="iOS (Swift)">

iOS의 `WKWebView`는 WebKit 프레임워크에 기본 포함되어 있으므로 별도 의존성이 필요하지 않습니다.

배포 대상은 iOS 14 이상을 권장합니다.

</div>

<div class="tabs-content" data-title="React Native">

`react-native-webview`로 WebView를 표시하고, `Linking` API로 외부 앱을 실행합니다.

```shell
npm install react-native-webview
```

iOS의 경우 추가로 Pod을 설치합니다.

```shell
cd ios && pod install
```

</div>

</div>

### Step 2. 플랫폼 필수 설정

결제 과정에서 은행 앱, 간편결제 앱 등 외부 앱이 실행됩니다.
OS 정책상 실행 가능한 외부 앱을 사전에 선언해야 하며, **이 설정이 없으면 외부 앱 실행이 실패합니다.**

<div class="hint" data-style="info">

Flutter와 React Native는 크로스 플랫폼 프레임워크이므로 Android와 iOS 설정을 **모두** 적용해야 합니다.

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="Flutter">

Flutter 프로젝트에서는 각 플랫폼의 네이티브 설정 파일에 직접 추가합니다.

- **Android**: `android/app/src/main/AndroidManifest.xml` — Android 탭의 `queries` 내용을 추가합니다.
- **iOS**: `ios/Runner/Info.plist` — iOS 탭의 `LSApplicationQueriesSchemes`와 `CFBundleURLTypes` 내용을 추가합니다.

</div>

<div class="tabs-content" data-title="Android">

Android 11(API 30) 이상에서는 **패키지 가시성** 정책에 따라 AndroidManifest.xml에 결제 앱 패키지를 선언해야 합니다.

```xml title="AndroidManifest.xml"
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <queries>
    <package android:name="com.kftc.bankpay.android" /> <!-- 뱅크페이 -->
    <package android:name="kvp.jjy.MispAndroid320" /> <!-- ISP / 페이북 -->
    <package android:name="com.hyundaicard.appcard" /> <!-- 현대카드 -->
    <package android:name="com.shcard.smartpay" /> <!-- 신한 SOL페이 -->
    <package android:name="com.shinhan.smartcaremgr" /> <!-- 신한 슈퍼SOL -->
    <package android:name="com.shinhan.sbanking" /> <!-- 신한 SOL뱅크 -->
    <package android:name="com.kbcard.cxh.appcard" /> <!-- KB Pay -->
    <package android:name="com.kbstar.kbbank" /> <!-- KB스타뱅킹 -->
    <package android:name="kr.co.samsungcard.mpocket" /> <!-- 삼성카드 -->
    <package android:name="com.samsung.android.spay" /> <!-- Samsung Wallet -->
    <package android:name="net.ib.android.smcard" /> <!-- monimo -->
    <package android:name="com.lcacApp" /> <!-- 디지로카 (롯데카드) -->
    <package android:name="com.lottemembers.android" /> <!-- L.POINT with L.PAY -->
    <package android:name="com.hanaskcard.paycla" /> <!-- 하나Pay (하나카드) -->
    <package android:name="nh.smart.nhallonepay" /> <!-- NH Pay -->
    <package android:name="kr.co.citibank.citimobile" /> <!-- 씨티모바일 -->
    <package android:name="com.kakao.talk" /> <!-- 카카오톡 (카카오페이) -->
    <package android:name="com.nhnent.payapp" /> <!-- PAYCO -->
    <package android:name="com.wooricard.smartapp" /> <!-- 우리카드 우리WON카드 -->
    <package android:name="com.wooribank.smart.npib" /> <!-- 우리은행 우리WON뱅킹 -->
    <package android:name="viva.republica.toss" /> <!-- 토스 -->
    <package android:name="com.nhn.android.search" /> <!-- 네이버 (네이버페이) -->
    <package android:name="com.kakaobank.channel" /> <!-- 카카오뱅크 -->
    <package android:name="com.ahnlab.v3mobileplus" /> <!-- V3 Mobile Plus -->
    <package android:name="com.TouchEn.mVaccine.webs" /> <!-- 터치엔 엠백신 -->
    <package android:name="com.sktelecom.tauth" /> <!-- PASS by SKT -->
    <package android:name="com.kt.ktauth" /> <!-- PASS by KT -->
    <package android:name="com.lguplus.smartotp" /> <!-- PASS by U+ -->
    <package android:name="com.mysmilepay.app" /> <!-- 스마일페이 -->
    <package android:name="com.ssg.serviceapp.android.egiftcertificate" /> <!-- SSGPAY -->
    <package android:name="com.hanabank.mzplatform" /> <!-- 아이부자 -->
    <package android:name="com.knb.psb" /> <!-- BNK경남은행 -->
    <package android:name="kr.ac.yonsei.idcard" /> <!-- 연세페이 -->
    <package android:name="jp.naver.line.android" /> <!-- LINE (LINE Pay) -->
    <package android:name="com.eg.android.AlipayGphone" /> <!-- Alipay -->
    <package android:name="hk.alipay.wallet" /> <!-- AlipayHK -->
    <package android:name="com.tencent.mm" /> <!-- WeChat -->
    <package android:name="com.globe.gcash.android" /> <!-- GCash -->
    <package android:name="th.co.truemoney.wallet" /> <!-- TrueMoney -->
    <intent>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="https" />
    </intent>
  </queries>
</manifest>
```

앱이 외부 결제 앱에서 복귀할 수 있도록 커스텀 URL scheme도 등록합니다.
결제를 시작하는 Activity의 `intent-filter`에 앱의 URL scheme을 추가합니다.

```xml title="AndroidManifest.xml"
<application ...>
  <activity
    android:name=".MainActivity"
    android:launchMode="singleTask"
    android:exported="true">
    <intent-filter>
      <action android:name="android.intent.action.MAIN" />
      <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
    <intent-filter>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="myapp" />
    </intent-filter>
  </activity>
</application>
```

</div>

<div class="tabs-content" data-title="iOS">

Info.plist에 `LSApplicationQueriesSchemes`를 등록하여 결제 앱의 URL scheme을 선언해야 합니다.
iOS 15 이상에서는 최대 50개까지 등록할 수 있으므로, 필요한 항목만을 추가합니다.

```xml title="Info.plist"
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>kftc-bankpay</string> <!-- 뱅크페이 -->
  <string>ispmobile</string> <!-- ISP / 페이북 -->
  <string>hdcardappcardansimclick</string> <!-- 현대카드 -->
  <string>shinhan-sr-ansimclick</string> <!-- 신한 SOL페이 -->
  <string>shinhan-sr-ansimclick-payco</string> <!-- 신한 SOL페이 (PAYCO) -->
  <string>shinhan-sr-ansimclick-lpay</string> <!-- 신한 SOL페이 (L.PAY) -->
  <string>kb-acp</string> <!-- KB Pay -->
  <string>kbbank</string> <!-- KB스타뱅킹 -->
  <string>mpocket.online.ansimclick</string> <!-- 삼성카드 -->
  <string>lotteappcard</string> <!-- 디지로카 (롯데카드) -->
  <string>lmslpay</string> <!-- L.POINT with L.PAY -->
  <string>cloudpay</string> <!-- 하나Pay (하나카드) -->
  <string>nhallonepayansimclick</string> <!-- NH Pay -->
  <string>citimobileapp</string> <!-- 씨티모바일 (씨티카드) -->
  <string>kakaotalk</string> <!-- 카카오톡 (카카오페이) -->
  <string>payco</string> <!-- PAYCO -->
  <string>com.wooricard.wcard</string> <!-- 우리카드 우리WON카드 -->
  <string>newsmartpib</string> <!-- 우리은행 우리WON뱅킹 -->
  <string>supertoss</string> <!-- 토스 -->
  <string>naversearchthirdlogin</string> <!-- 네이버 (네이버페이) -->
  <string>kakaobank</string> <!-- 카카오뱅크 -->
  <string>tauthlink</string> <!-- PASS by SKT -->
  <string>ktauthexternalcall</string> <!-- PASS by KT -->
  <string>upluscorporation</string> <!-- PASS by U+ -->
  <string>kn-bankpay</string> <!-- BNK경남은행 -->
  <string>yonseipay</string> <!-- 연세페이 -->
  <string>line</string> <!-- LINE (LINE Pay) -->
  <string>alipays</string> <!-- Alipay -->
  <string>alipayhk</string> <!-- AlipayHK -->
  <string>weixin</string> <!-- WeChat -->
  <string>ascendmoney</string> <!-- TrueMoney -->
</array>
```

앱이 외부 결제 앱에서 복귀할 수 있도록 커스텀 URL scheme도 등록합니다.

```xml title="Info.plist"
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>myapp</string>
    </array>
  </dict>
</array>
```

</div>

<div class="tabs-content" data-title="React Native">

React Native 프로젝트에서는 각 플랫폼의 네이티브 설정 파일에 직접 추가합니다.

- **Android**: `android/app/src/main/AndroidManifest.xml` — Android 탭의 `queries` 내용을 추가합니다.
- **iOS**: `ios/<프로젝트명>/Info.plist` — iOS 탭의 `LSApplicationQueriesSchemes`와 `CFBundleURLTypes` 내용을 추가합니다.

</div>

</div>

### Step 3. WebView에서 결제 페이지 로드

WebView를 생성하고 포트원 Browser SDK가 포함된 HTML을 로드합니다.
`redirectUrl`에 결제 완료 후 리다이렉트될 URL을, `appScheme`에 카드사 앱 등에서 복귀할 때 사용할 앱 URL scheme을 지정합니다.

<div class="hint" data-style="warning">

WebView에 HTML 텍스트를 직접 로드하는 경우 `data:` 또는 `file:` 등의 opaque URL이 사용됩니다.
이 상태에서 `postMessage`를 사용하면 [정상 동작하지 않을 수 있으니](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#targetorigin) 주의하세요.
`baseUrl`을 `https://` URL로 임의 설정하여 해소할 수 있습니다.

</div>

```html
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.portone.io/v2/browser-sdk.js"></script>
    <script>
      PortOne.requestPayment({
        storeId: "store-...",
        paymentId: "payment-...",
        orderName: "주문명",
        totalAmount: 1000,
        currency: "KRW",
        channelKey: "channel-key-...",
        payMethod: "CARD",
        redirectUrl: "myapp://payment-complete",
        appScheme: "myapp://",
      });
    </script>
  </head>
</html>
```

<div class="hint" data-style="info">

위 예시는 이해를 돕기 위한 최소 구성입니다.
실제 연동 시에는 [결제대행사별 연동 가이드](https://developers.portone.io/opi/ko/integration/pg/v2/readme?v=v2)및 [브라우저 SDK 요청 형식](https://developers.portone.io/sdk/ko/v2-sdk/payment-request?v=v2)에 따라 파라미터를 추가하세요.

</div>

<div class="hint" data-style="warning">

Android `WebView`는 JavaScript가 기본 비활성화이므로 `settings.javaScriptEnabled = true` 설정이 필요합니다.
(iOS `WKWebView`와 Flutter `InAppWebView`는 기본 활성화입니다.)

결제 완료 시 WebView가 `redirectUrl`로 이동하므로,
다음 Step의 URL 네비게이션 처리에서 해당 URL을 구분할 수 있어야 합니다.

</div>

### Step 4. URL 네비게이션 처리

WebView에서 발생하는 URL 네비게이션을 프로토콜별로 분기 처리해야 합니다.
아래 코드는 분기 처리의 핵심 로직만 발췌한 것입니다.

|URL 프로토콜                              |처리 방법                                  |
|------------------------------------------|-------------------------------------------|
|`http://`, `https://`                     |WebView에서 정상 로드                      |
|커스텀 scheme (`myapp://`)                |결제 완료 — URL 쿼리 파라미터에서 결과 추출|
|`intent://` (Android)                     |Intent URI를 파싱하여 해당 앱 실행         |
|PG/카드사 앱 scheme (`kftc-bankpay://` 등)|해당 외부 앱 실행                          |

<div class="hint" data-style="info">

엑심베이 GCash 결제는 `intent://`나 `gcash://`가 아닌 `https://gcash.onelink.me` URL을 사용하며,
이때 `gcash://com.mynt.gcash/app`을 직접 호출해야 합니다.
자세한 처리는 [React Native SDK의 해당 부분](https://github.com/portone-io/react-native-sdk/blob/03dac55/src/SdkDelegate.tsx#L96-L103)을 참고하세요.

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="Flutter (Dart)">

`InAppWebView`의 `shouldOverrideUrlLoading` 콜백에서 URL scheme별로 분기합니다.<br />
전체 동작하는 예시는 [portone\_flutter SDK의 portone\_webview.dart](https://github.com/portone-io/portone_flutter/blob/233b101/lib/v2/widget/portone_webview.dart#L114-L151)를 참고하세요.

```dart
InAppWebView(
  initialSettings: InAppWebViewSettings(
    useShouldOverrideUrlLoading: true,
    resourceCustomSchemes: ["intent"],
  ),
  shouldOverrideUrlLoading: (controller, navigateAction) async {
    // URI 파서는 플랫폼마다 동작이 다를 수 있으므로 (예: 페이북),
    // rawValue에서 직접 protocol을 추출합니다.
    final uri = navigateAction.request.url!.rawValue;
    var protocol = uri.substring(0, uri.indexOf(':'));

    switch (protocol) {
      case 'http':
      case 'https':
        return NavigationActionPolicy.ALLOW;
      case 'myapp':
        // 결제 완료 — 쿼리 파라미터에서 결과 추출
        return NavigationActionPolicy.CANCEL;
      case 'intent':
        // intent:// URI에서 scheme을 추출하여 앱 실행
        // 미설치 시 마켓으로 이동
        return NavigationActionPolicy.CANCEL;
      default:
        // PG/카드사 앱 등 외부 앱 실행
        if (await canLaunchUrlString(uri)) launchUrlString(uri);
        return NavigationActionPolicy.CANCEL;
    }
  },
)
```

</div>

<div class="tabs-content" data-title="Android (Kotlin)">

`WebViewClient`의 `shouldOverrideUrlLoading`에서 URL scheme별로 분기합니다.<br />
전체 구현은 [Android SDK의 PortOneWebView.kt](https://github.com/portone-io/android-sdk/blob/c3aeec4/sdk/src/main/java/io/portone/sdk/android/PortOneWebView.kt#L75-L111)를 참고하세요.

```kotlin
webView.settings.javaScriptEnabled = true

webView.webViewClient = object : WebViewClient() {
    override fun shouldOverrideUrlLoading(
        view: WebView, request: WebResourceRequest
    ): Boolean {
        val url = request.url
        return when (url.scheme) {
            "http", "https" -> false // WebView에서 정상 로드
            "myapp" -> {
                // 결제 완료 — 쿼리 파라미터에서 결과 추출
                handlePaymentResult(url)
                true
            }
            "intent" -> {
                // Intent URI 파싱 후 앱 실행, 미설치 시 마켓 이동
                launchIntentOrMarket(url)
                true
            }
            else -> {
                // PG/카드사 앱 등 외부 앱 실행
                startActivity(Intent(Intent.ACTION_VIEW, url))
                true
            }
        }
    }
}
```

</div>

<div class="tabs-content" data-title="iOS (Swift)">

`WKNavigationDelegate`의 `decidePolicyFor`에서 URL scheme별로 분기합니다.<br />
전체 구현은 [iOS SDK의 PaymentWebView.swift](https://github.com/portone-io/ios-sdk/blob/a88175c/Sources/PortOneSdk/PaymentWebView.swift#L117-L181)를 참고하세요.

```swift
func webView(
    _ webView: WKWebView,
    decidePolicyFor navigationAction: WKNavigationAction,
    decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
) {
    guard let url = navigationAction.request.url else {
        decisionHandler(.allow)
        return
    }

    switch url.scheme {
    case "http", "https":
        decisionHandler(.allow)
    case "myapp":
        // 결제 완료 — 쿼리 파라미터에서 결과 추출
        handlePaymentResult(url: url)
        decisionHandler(.cancel)
    default:
        // PG/카드사 앱 등 외부 앱 실행
        UIApplication.shared.open(url)
        decisionHandler(.cancel)
    }
}
```

</div>

<div class="tabs-content" data-title="React Native">

`react-native-webview`의 `onShouldStartLoadWithRequest`에서 URL scheme별로 분기합니다.<br />
전체 구현은 [React Native SDK의 SdkDelegate.tsx](https://github.com/portone-io/react-native-sdk/blob/deea773/src/SdkDelegate.tsx#L83-L156)를 참고하세요.

```tsx
import { Linking } from "react-native";
import { WebView } from "react-native-webview";

<WebView
  source={{ html: paymentHtml }}
  originWhitelist={["*"]}
  javaScriptEnabled
  onShouldStartLoadWithRequest={(request) => {
    const url = request.url;
    const protocol = url.split(":", 2)[0];

    switch (protocol) {
      case "http":
      case "https":
        return true;
      case "myapp":
        // 결제 완료 — 쿼리 파라미터에서 결과 추출
        handlePaymentResult(url);
        return false;
      case "intent":
        // intent:// URI에서 scheme을 추출하여 앱 실행
        // 미설치 시 마켓으로 이동
        launchIntentOrMarket(url);
        return false;
      default:
        // PG/카드사 앱 등 외부 앱 실행
        Linking.openURL(url).catch(() => {});
        return false;
    }
  }}
/>;
```

</div>

</div>

### Step 5. 결제 결과 처리

결제가 완료되면 `redirectUrl`로 리다이렉트되며, 쿼리 파라미터에 결제 결과가 포함됩니다.
파라미터에 대한 자세한 내용은 [리다이렉트 방식의 경우](https://developers.portone.io/opi/ko/integration/start/v2/checkout?v=v2#3-1-리다이렉트-방식의-경우) 문서를 참고하세요.

<div class="hint" data-style="warning">

`redirectUrl`로 이동하기 전에 앱이 종료되는 경우도 있습니다.
이 경우 앱이 결제 종료를 서버에 알릴 수 없으므로, 서버에서
[웹훅](https://developers.portone.io/opi/ko/integration/start/v2/checkout#5-웹훅-연동하기) 또는 [수동 승인](https://developers.portone.io/opi/ko/integration/start/v2/checkout#3-1-리다이렉트-방식의-경우) 기능을 함께 사용하는 것을 권장합니다.

</div>

<div class="hint" data-style="warning">

클라이언트 측 결제 결과만으로 주문을 확정하면 안됩니다. 서버에서 [결제 조회 API](https://developers.portone.io/api/rest-v2/payment#get%20%2Fpayments%2F%7BpaymentId%7D)를 호출하여 결제 상태와 금액을 검증해야 합니다.

</div>

서버 측 결제 검증 방법은 [인증 결제 연동하기 - 결제 완료 처리 (서버)](https://developers.portone.io/opi/ko/integration/start/v2/checkout#4-결제-완료-처리-서버)를 참고하세요.

## 참고 링크

- [모바일 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-mobile-sdk/readme)
- [결제 연동 샘플 프로젝트](https://github.com/portone-io/portone-sample)
- [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout) (웹 결제 연동 가이드)
- [결제 조회 API](https://developers.portone.io/api/rest-v2/payment#get%20%2Fpayments%2F%7BpaymentId%7D) (서버 측 검증)
