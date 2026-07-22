# @portone/mcp-server

## 0.19.0

### Minor Changes

- 72877a4: `PORTONE_CONSOLE_URL` / `PORTONE_MERCHANT_SERVICE_URL` / `PORTONE_CHANNEL_SERVICE_URL` / `PORTONE_GRAPHQL_URL` 환경 변수로 각 서비스 엔드포인트를 개별 오버라이드할 수 있으며, 미설정 시 운영 환경 기본값을 사용합니다.

## 0.18.0

### Minor Changes

- 3604417: 콘솔 기능 인증에 `PORTONE_ACCESS_TOKEN` 환경 변수를 통한 액세스 토큰 주입(정적 토큰 모드)을 지원합니다. 설정 시 브라우저 OAuth 로그인 플로우를 건너뛰어, 브라우저를 열 수 없는 서버 환경에서도 콘솔 기능을 사용할 수 있습니다. `PORTONE_TOKEN_TYPE`(기본값 `Bearer`)로 토큰 타입을 지정할 수 있습니다.

## 0.17.1

### Patch Changes

- d2160e9: 거래대사/정산 조회 기간 제약 조정: 정산 요약·통계는 최대 1개월, 건별 거래대사 내역(getReconciliationsByFilter)은 최대 2주로 축소했습니다. (최근 6개월 이내 시작일 제약은 유지)
- 1d72854: 거래대사/정산 조회 시 GraphQL 오류(직렬화 실패 등) 응답의 에러 메시지가 비어 나가던 문제를 개선했습니다. 이제 GraphQL 에러의 message·extensions.code·path 를 함께 노출하고, message 가 비어 있으면 에러 코드로 대체해 항상 진단 가능한 정보를 반환합니다.

## 0.17.0

### Minor Changes

- fecca33: 정산/거래대사 조회 도구 추가 (getReconciliationsByFilter, getSettlementSummaries, getSettlementStatistics). 특정 상점(store) 단위로 거래대사 건별 내역·불일치 사유, 정산 요약, 정산 통계를 조회하며 조회 기간은 최근 6개월 이내·최대 3개월로 제한됩니다.

## 0.16.0

### Minor Changes

- 62f6d7c: 문서 업데이트

## 0.15.0

### Minor Changes

- c16b2d8: node 버전 업데이트
- 2a445e3: 문서 검색 도구 토큰 사용량 최적화

### Patch Changes

- dd98a91: 문서 업데이트
- 8ef6983: 헬프센터 URL 수정
- db94d0d: regex search, 스키마, 코드 관련 tool의 schema 제거
- 06a7794: server 및 mobile sdk 문서 url 수정

## 0.15.0-alpha.5

### Patch Changes

- 06a7794: server 및 mobile sdk 문서 url 수정

## 0.15.0-alpha.4

### Patch Changes

- db94d0d: regex search, 스키마, 코드 관련 tool의schema 제거

## 0.15.0-alpha.3

### Patch Changes

- 1edf2a5: 문서 업데이트

## 0.15.0-alpha.2

### Patch Changes

- 8ef6983: 헬프센터 URL 수정

## 0.15.0-alpha.1

### Patch Changes

- 150bf9e: 문서 업데이트 2025-11-25

## 0.15.0-alpha.0

### Minor Changes

- c16b2d8: node 버전 업데이트
- 2a445e3: 문서 검색 도구 토큰 사용량 최적화

### Patch Changes

- dd98a91: 문서 업데이트

## 0.14.0

### Minor Changes

- 84d51a2: - readPortoneDoc 기능에 메타정보 및 웹 URL 조회 추가
  - getPortoneDocsUrl 추가
- aea689f: API Secret 방식에서 콘솔 로그인 방식으로 변경
  - 본인인증 조회 기능 삭제
  - 테스트 채널 조회 및 추가 기능 추가
  - 하위상점 정보 조회 기능 추가

### Patch Changes

- 3031abe: 프롬프트 수정

## 0.13.0

### Minor Changes

- 47b7df7: TypeScript 버전 릴리즈
