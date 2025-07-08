---
title: 본인인증 요청 파라미터
description: 본인인증 요청에 필요한 파라미터 정보를 확인합니다.
targetVersions:
  - v1
versionVariants:
  v2: /sdk/ko/v2-sdk/identity-verification-request
---

## certification(param, callback) <a href="#certification" id="certification" />

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  최신 JavaScript SDK 버전부터 사용 가능합니다.

- pg(deprecated)?: string

  **PG사 구분코드**

  다음과 같은 형식으로 기재합니다.

  `PG사코드.{상점ID}`

  <details>

  <summary>상세코드 확인하기</summary>

  본인인증 업체

  - `danal`(다날 휴대폰소액결제 및 휴대폰 본인인증)
  - `inicis_unified`(KG이니시스 통합인증)
  - `inicis`(KG이니시스 API 수기/정기결제 및 신용카드 본인인증)

  </details>

  <div class="hint" data-style="warning">

  pg 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- merchant\_uid: string

  **주문번호**

  - 고객사에서 생성/관리하는 고유 주문번호

- min\_age?: number

  **허용최소 나이**

  - 본인인증을 진행할수 있는 최소나이
  - 다날 휴대폰 본인인증만 지원

- name?: string

  **고객 이름**

  - 본인인증 화면 내 이름 필드에 자동입력됨
  - 다날 휴대폰 본인인증만 지원

- phone?: string

  **고객 전화번호**

  - 본인인증 화면 내 전화번호 필드에 자동입력됨
  - 다날 휴대폰 본인인증만 지원

- carrier?: string

  **본인인증 통신사**

  - 본인인증 화면에서 선택 가능한 통신사 설정
  - 다날 휴대폰 본인인증만 지원
  - SKT : `SKT`
  - KT : `KTF`
  - LGU+ : `LGT`
  - 알뜰폰 : `MVNO`

- company?: string

  **서비스 도메인 URL 또는 명칭**

  - 서비스의 대표 도메인 URL(예 : <https://portone.io>) 또는 서비스 명칭(예 : 포트원)으로 설정
  - 본인인증 동작에 영향을 주지는 않지만, [KISA의 ePrivacy Clean 서비스](https://www.eprivacy.go.kr/) 연동을 위해 설정 권장
  - React Native / Ionic 등 앱 내 local html을 통해 본 함수가 호출되는 경우, URL 도메인을 인식할 수 없으므로 설정 권장(미 설정 시: `포트원`)

- m\_redirect\_url?: string

  **리디렉션 URL**

  - 모바일 환경에서 본인인증 후 리디렉션될 URL
  - 리디렉션될 때 query string 으로 `imp_uid`, `merchant_uid`, `success` 가 전달됩니다.

- popup?: boolean

  **팝업 사용여부**

  - PC: `popup` : `true` 옵션이 강제 적용됨
  - 모바일: `popup` : `false` 사용시, `m_redirect_url` 필수 입력
