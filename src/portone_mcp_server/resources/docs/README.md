# 포트원 개발자센터 문서

> 포트원(PortOne)은 온라인 결제, 본인인증, 파트너 정산 자동화 및 재무/회계 업무를 위한 API와 SDK를 제공하는 서비스입니다.

1. 포트원 개발자센터 개별 문서 파일은 각각 경로(pathname), 제목(title), 설명(description)을 가지며, 이를 통해 해당 문서의 내용을 유추할 수 있습니다.

   - `opi/`: 원 페이먼트 인프라(결제, 본인인증) 관련 문서
   - `platform/`: 파트너정산 자동화 관련 문서
   - `api/`: 포트원이 제공하는 API 관련 문서
   - `sdk/`: 포트원이 제공하는 SDK 관련 문서
   - `schema/`: 포트원 API, SDK 스키마 파일
   - `blog/posts/`: 블로그 포스트
   - `release-notes/`: 릴리즈노트

2. 온라인 결제 및 본인인증에 관련해서는 버전(V1, V2)을 올바르게 파악하는 것이 아주 중요합니다. 사용자 질의에 관련된 섹션(V1, V2, 공통 등)을 확실하게 파악한 후 해당 버전의 문서와 공통 문서 내용을 제공 및 활용하세요.

   - 버전이 파악되지 않은 경우 사용자에게 질의하여 버전을 먼저 확인하고, 그럴 수 없는 불가피한 경우 공통 문서 또는 최신 버전인 V2 문서를 우선적으로 활용하세요.

3. API 및 SDK 스키마를 조회하고 싶은 경우 해당 버전의 스키마 파일에서 YAML, JSON, GraphQL SDL 형식으로 정확하게 확인할 수 있습니다.

4. 사용자에게 문서 레퍼런스를 URL로 제공할 때는 마크다운 파일 링크가 아닌, 개발자센터 웹사이트 URL을 사용하세요.

   - `.md`로 끝나는 URL은 마크다운 파일 링크입니다. 마크다운 파일 링크에서 마지막 `.md`를 제거하면 웹사이트 URL로 사용할 수 있습니다.
   - 사용자가 원하는 버전(V1, V2)이 특정되었다면 `?v=v2`, `?v=v1` 쿼리 파라미터를 추가하여 URL로 제공하세요.
   - hostname이 누락된 URL의 경우 `https://developers.portone.io`를 추가하여 공유하세요.

5. 이미지, 파일 다운로드 링크 등이 마크다운 문서에서는 대부분 누락됩니다. 해당 내용을 조회해야 하는 경우 개발자센터 웹사이트에서 확인해야 합니다.
