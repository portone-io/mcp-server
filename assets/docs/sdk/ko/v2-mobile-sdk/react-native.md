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

1. Expo CLI를 사용해 @portone/react-native-sdk와 의존성인 react-native-webview를 설치합니다.

```shell
npx expo install @portone/react-native-sdk react-native-webview
```

2. TypeScript를 사용하시는 경우 @portone/browser-sdk를 devDependencies에
   추가합니다.

```shell
npm install --save-dev @portone/browser-sdk
yarn add -D @portone/browser-sdk
```

3. app.json의 plugin 항목으로 `@portone/react-native-sdk/plugin`를 추가합니다.

이 플러그인은 앱 링크를 사용하기 위한 AndroidManifest.xml 및 Info.plist 설정을 자동으로 추가합니다.
단, iOS 15 이상 버전에서 Info.plist 설정에는 최대 50개의 LSApplicationQueriesSchemes 항목만이 적용되므로
일부 앱 링크만이 열리지 않는 등의 문제가 발생하실 경우 플러그인을 제거하고 필요한 항목만을 골라 직접 설정해주세요.

```json
{
  "expo": {
    "plugins": ["@portone/react-native-sdk/plugin"]
  }
}
```

4. TypeScript를 사용하시는 경우 `tsconfig.json`에 다음 항목을 추가 혹은
   수정합니다.

```json
"compilerOptions": {
  "module": "NodeNext",
  "moduleResolution": "NodeNext"
}
```

## 설치 (Expo 미사용)

1. @portone/react-native-sdk와 의존성인 react-native-webview를 설치합니다.

```shell
npm install --save @portone/react-native-sdk react-native-webview
yarn add @portone/react-native-sdk react-native-webview
```

2. ios 서브디렉토리에서 pod를 사용해 react-native-webview에 필요한 네이티브
   의존성을 링킹힙니다.

```sh
pod install
```

3. TypeScript를 사용하시는 경우 @portone/browser-sdk를 devDependencies에
   추가합니다.

```shell
npm install --save-dev @portone/browser-sdk
yarn add -D @portone/browser-sdk
```

4. TypeScript를 사용하시는 경우 `tsconfig.json`에 다음 항목을 추가 혹은
   수정합니다.

```json
"compilerOptions": {
  "module": "NodeNext",
  "moduleResolution": "NodeNext"
}
```

5. 앱 링크를 사용하기 위해 android/app/src/main/AndroidManifest.xml 파일에 아래
   내용을 추가합니다.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <!-- 중략 -->
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
    <package android:name="kr.ac.yonsei.idcard" /> <!-- 연세대학교 모바일 학생증/신분증 (연세페이) -->
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

6. 앱 링크를 사용하기 위해 ios/(프로젝트 이름)/Info.plist 파일에 아래 내용을 추가합니다.

iOS 15 이상 버전에서는 최대 50개의 항목만이 적용되므로, 필요한 항목만을 추가합니다.

```xml
<dict>
  <!-- 중략 -->
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
    <string>yonseipay</string> <!-- 연세대학교 모바일 학생증/신분증 (연세페이) -->
    <string>line</string> <!-- LINE (LINE Pay) -->
    <string>alipays</string> <!-- Alipay -->
    <string>alipayhk</string> <!-- AlipayHK -->
    <string>weixin</string> <!-- WeChat -->
    <string>ascendmoney</string> <!-- TrueMoney -->
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

세부 사용법과 관련하여
[React Native 포트원 샘플 프로젝트](https://github.com/portone-io/portone-sample/tree/main/react-native)
및
[React Native Expo 포트원 샘플 프로젝트](https://github.com/portone-io/portone-sample/tree/main/react-native-expo)를
참고하실 수 있습니다.

---

Made with
[create-react-native-library](https://github.com/callstack/react-native-builder-bob)

Packages under _portone-io/react-native-sdk_ are primarily distributed under the
terms of both the [Apache License (Version 2.0)] and the [MIT license]. See
[COPYRIGHT] for details.

[MIT license]: LICENSE-MIT
[Apache License (Version 2.0)]: LICENSE-APACHE
[COPYRIGHT]: COPYRIGHT
