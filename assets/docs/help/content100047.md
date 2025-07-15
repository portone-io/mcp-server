---
title: 하나카드 토스뱅크 앱스킴 추가
category: 업데이트
tags:
  - 업데이트
datetime: 2021-08-01T15:00:00.000Z
---

<Callout content="- iOS 네이티브 코드에서 UIApplication.shared.canOpenURL() 를 통해 그 결과로 결제앱을 여는 동작을 하신다면, 앱 스킴이 화이트 리스트에 등록 되어있어야 합니다.
- 미등록시 canOpenURL 결과가 무조건 false 로 오기 때문에 앱이 정상적으로 실행되지 않을 수 있습니다.
" />

#### **`해당고객`**

- webview 를 통해 아임포트 js sdk 를 연동하여 iOS 앱을 서비스하시면서, 내부에 UIApplication.shared.canOpenURL() 를 쓰시는 경우
- iamport react-native, flutter, cordova, capacitor 등의 플러그인을 통해 iOS 앱을 서비스하시는 경우
- iamport-ios sdk 를통해 iOS 앱을 서비스하시는 경우 (iamport-ios v1.0.0-dev.11 부터는 필요치 않으나 권장)

#### **`미해당고객`**

- iOS 모바일 앱 없이 웹 브라우저를 통한 서비스만 하시는 경우 (워드프레스 플러그인 등)

#### **반영 방법**

어플리케이션 단에서 수정가능한 사항이므로 고객님의 앱에서 수정을 해주셔야 합니다.

1. \[프로젝트 폴더]/ios/\[프로젝트 이름]/info.plist 파일을 오픈합니다.
2. LSApplicationQueriesSchemes 속성에 supertoss\:// 외부 앱 리스트를 항목을 추가합니다.

자세한 사항은 아래 링크 참고 부탁드립니다.

- [iamport-ios sdk 예시 보러가기 ↗](https://github.com/iamport/iamport-ios/blob/c50900cfb876d7c19f276a43aea740bd206e17e2/Example/iamport-ios/Info.plist#L67)
