---
title: 포트원 V2 React Native 모바일 SDK
description: React Native를 위한 포트원 V2 모바일 SDK 사용 방법을 안내합니다.
targetVersions:
- v2
---

# PortOne SDK for React Native

React Native 환경에서 포트원 V2 결제 시스템에 연동하기 위한 SDK입니다.

## 의존성

Node.js v18을 지원하며, Expo 51.0.38과 react-native-webview 13.8.6 환경에서
테스트되었습니다.

## 기술 지원

- tech.support@portone.io

## 설치 (Expo 사용)

1. Expo CLI를 사용해 @portone/react-native-sdk와 react-native-webview를
   설치합니다.

```shell
npx expo install @portone/react-native-sdk react-native-webview
```

2. TypeScript를 사용하시는 경우 @portone/browser-sdk를 devDependencies에 추가합니다.

```shell
npm install --save-dev @portone/browser-sdk
yarn add -D @portone/browser-sdk
```

3. app.json의 plugin 항목으로 `@portone/react-native-sdk/plugin`를 추가합니다.

```json
{
  "expo": {
    "plugins": ["@portone/react-native-sdk/plugin"]
  }
}
```

4. TypeScript를 사용하시는 경우 `tsconfig.json`에 다음 항목을 추가 혹은 수정합니다.

```json
"compilerOptions": {
  "module": "NodeNext",
  "moduleResolution": "NodeNext"
}
```

## 설치 (Expo 미사용)

1. @portone/react-native-sdk와 react-native-webview를
   설치합니다.

```shell
npm install --save @portone/react-native-sdk react-native-webview
yarn add @portone/react-native-sdk react-native-webview
```

2. ios 서브디렉토리에서 pod를 사용해 react-native-webview에 필요한 네이티브 의존성을 링킹힙니다.

```sh
pod install
```

3. TypeScript를 사용하시는 경우 @portone/browser-sdk를 devDependencies에 추가합니다.

```shell
npm install --save-dev @portone/browser-sdk
yarn add -D @portone/browser-sdk
```

4. TypeScript를 사용하시는 경우 `tsconfig.json`에 다음 항목을 추가 혹은 수정합니다.

```json
"compilerOptions": {
  "module": "NodeNext",
  "moduleResolution": "NodeNext"
}
```

5. 앱 링크를 사용하기 위해 android/app/src/main/AndroidManifest.xml 파일에 아래 내용을 추가합니다.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <!-- 중략 -->
  <queries>
    <package android:name="com.kftc.bankpay.android" />
    <package android:name="kvp.jjy.MispAndroid320" />
    <package android:name="com.hyundaicard.appcard" />
    <package android:name="com.shcard.smartpay" />
    <package android:name="com.shinhan.smartcaremgr" />
    <package android:name="com.kbcard.cxh.appcard" />
    <package android:name="com.kbstar.kbbank" />
    <package android:name="com.kbstar.reboot" />
    <package android:name="kr.co.samsungcard.mpocket" />
    <package android:name="kr.co.shiftworks.vguardweb" />
    <package android:name="net.ib.android.smcard" />
    <package android:name="com.lcacApp" />
    <package android:name="com.lottemembers.android" />
    <package android:name="com.hanaskcard.paycla" />
    <package android:name="nh.smart.card" />
    <package android:name="nh.smart.nhallonepay" />
    <package android:name="kr.co.citibank.citimobile" />
    <package android:name="com.kakao.talk" />
    <package android:name="com.nhnent.payapp" />
    <package android:name="com.wooricard.smartapp" />
    <package android:name="com.wooribank.smart.npib" />
    <package android:name="viva.republica.toss" />
    <package android:name="com.nhn.android.search" />
    <package android:name="com.kakaobank.channel" />
    <package android:name="com.ahnlab.v3mobileplus" />
    <package android:name="com.samsung.android.spay" />
    <package android:name="jp.naver.line.android" />
    <package android:name="com.eg.android.AlipayGphone" />
    <package android:name="com.tencent.mm" />
    <package android:name="com.sktelecom.tauth" />
    <package android:name="com.kt.ktauth" />
    <package android:name="com.lguplus.smartotp" />
    <package android:name="com.shinhan.sbanking" />
    <intent>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="https" />
    </intent>
  </queries>
</manifest>
```

6. 앱 링크를 사용하기 위해 ios/(프로젝트 이름)/Info.plist 파일에 아래 내용을 추가합니다.

```xml
<dict>
  <!-- 중략 -->
  <key>LSApplicationQueriesSchemes</key>
  <array>
    <string>kftc-bankpay</string>
    <string>ispmobile</string>
    <string>hdcardappcardansimclick</string>
    <string>smhyundaiansimclick</string>
    <string>hyundaicardappcardid</string>
    <string>shinhan-sr-ansimclick</string>
    <string>shinhan-sr-ansimclick-naverpay</string>
    <string>shinhan-sr-ansimclick-payco</string>
    <string>shinhan-sr-ansimclick-lpay</string>
    <string>shinhan-sr-ansimclick-mola</string>
    <string>smshinhanansimclick</string>
    <string>smailapp</string>
    <string>kb-acp</string>
    <string>kb-auth</string>
    <string>kb-screen</string>
    <string>kbbank</string>
    <string>liivbank</string>
    <string>newliiv</string>
    <string>mpocket.online.ansimclick</string>
    <string>ansimclickscard</string>
    <string>ansimclickipcollect</string>
    <string>vguardstart</string>
    <string>samsungpay</string>
    <string>scardcertiapp</string>
    <string>monimopay</string>
    <string>monimopayauth</string>
    <string>lottesmartpay</string>
    <string>lotteappcard</string>
    <string>lmslpay</string>
    <string>lpayapp</string>
    <string>cloudpay</string>
    <string>hanawalletmembers</string>
    <string>nhappcardansimclick</string>
    <string>nonghyupcardansimclick</string>
    <string>nhallonepayansimclick</string>
    <string>citispay</string>
    <string>citicardappkr</string>
    <string>citimobileapp</string>
    <string>kakaotalk</string>
    <string>payco</string>
    <string>com.wooricard.wcard</string>
    <string>newsmartpib</string>
    <string>NewSmartPib</string>
    <string>supertoss</string>
    <string>naversearchthirdlogin</string>
    <string>kakaobank</string>
    <string>v3mobileplusweb</string>
    <string>line</string>
    <string>alipays</string>
    <string>weixin</string>
    <string>tauthlink</string>
    <string>ktauthexternalcall</string>
    <string>upluscorporation</string>
  </array>
</dict>
```

## 사용법

```js
import {
  IdentityVerification,
  IssueBillingKey,
  IssueBillingKeyAndPay,
  Payment,
  IssueBillingKeyUI,
  PaymentUI,
} from '@portone/react-native-sdk'

<Payment request={/* ... */} />
```

세부 사용법과 관련하여 [React Native 포트원 샘플 프로젝트](https://github.com/portone-io/portone-sample/tree/main/react-native) 및 [React Native Expo 포트원 샘플 프로젝트](https://github.com/portone-io/portone-sample/tree/main/react-native-expo)를 참고하실 수 있습니다.

---

Made with
[create-react-native-library](https://github.com/callstack/react-native-builder-bob)

Packages under _portone-io/react-native-sdk_ are primarily distributed under the
terms of both the [Apache License (Version 2.0)] and the [MIT license]. See
[COPYRIGHT] for details.

[MIT license]: LICENSE-MIT
[Apache License (Version 2.0)]: LICENSE-APACHE
[COPYRIGHT]: COPYRIGHT
