# 포트원 개발자센터

> 포트원(PortOne)은 온라인 결제, 본인인증, 파트너 정산 자동화 및 재무/회계 업무를 위한 API와 SDK를 제공하는 서비스입니다.

1. 이 문서는 포트원 개발자센터 문서의 포괄적인 목록을 담고 있으며, 스키마 파일, 공통 문서, V2 문서, V1 문서, 릴리스 노트, 블로그 게시물 등의 섹션으로 구성되어 있습니다.

2. 각 링크는 제목과 URL, 설명을 포함하는 형식으로 구성되어 있습니다

3. 온라인 결제 및 본인인증에 관련해서는 버전(V1, V2)을 올바르게 파악하는 것이 아주 중요합니다. 사용자 질의에 관련된 섹션(V1, V2, 공통 등)을 확실하게 파악한 후 해당 버전의 문서와 공통 문서 내용을 제공 및 활용하세요.

   - 버전이 파악되지 않은 경우 사용자에게 질의하여 버전을 먼저 확인하고, 그럴 수 없는 불가피한 경우 공통 문서 또는 최신 버전인 V2 문서를 우선적으로 활용하세요.

4. API 및 SDK 스키마를 조회하고 싶은 경우 해당 버전의 스키마 파일에서 YAML, JSON, GraphQL SDL 형식으로 정확하게 확인할 수 있습니다.

5. 사용자에게 문서 레퍼런스를 URL로 제공할 때는 마크다운 파일 링크가 아닌, 개발자센터 웹사이트 URL을 사용하세요.

   - `.md`로 끝나는 URL은 마크다운 파일 링크입니다. 마크다운 파일 링크에서 마지막 `.md`를 제거하면 웹사이트 URL로 사용할 수 있습니다.
   - 단, `_components` 가 URL에 포함된 경우 웹사이트 URL로 사용할 수 없음에 주의하세요.
   - 사용자가 원하는 버전(V1, V2)이 특정되었다면 `?v=v2`, `?v=v1` 쿼리 파라미터를 추가하여 URL로 제공하세요.
   - hostname이 누락된 URL의 경우 `https://developers.portone.io`를 추가하세요.

6. 이미지, 파일 다운로드 링크 등이 마크다운 문서에는 누락될 수 있습니다. 해당 내용을 조회해야 하는 경우 개발자센터 웹사이트에서 확인해야 합니다.

## 목차

### V1 스키마 파일

- [V1 OpenAPI YAML](https://developers.portone.io/schema/v1.openapi.yml)
- [V1 OpenAPI JSON](https://developers.portone.io/schema/v1.openapi.json)

### V1 SDK

- [모바일 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v1-mobile-sdk/readme): 포트원에서 제공하는 네이티브 모바일 SDK(플러그인)를 통해 포트원 서비스를 연동할 수 있습니다.
- [본인인증 결과 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft-rt): 본인인증 요청에 대해 반환되는 응답 정보를 확인합니다.
- [본인인증 요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft): 본인인증 요청에 필요한 파라미터 정보를 확인합니다.
- [모듈 로드 결과 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/load-module-rt): 모듈로드 요청에 대해 반환되는 응답정보를 확인합니다.
- [모듈 로드 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/load-module): PG사의 모듈 로딩에 필요한 파라미터 정보를 가져옵니다.
- [결제요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq): 결제요청 파라미터를 확인 할 수 있습니다.
- [결제응답 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrt): callback 으로 내려가는 응답 파라미터 항목을 확인할 수 있습니다.
- [JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme): 결제창 연동시 호출 및 응답 파라미터를 확인 할 수 있습니다.
- [Javascript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme): 결제창 연동시 호출 및 응답 파라미터를 확인 할 수 있습니다.
- [포트원 SDK 소개](https://developers.portone.io/sdk/ko/readme): 포트원에서 제공하는 SDK 가이드입니다.

### V1 API 레퍼런스

- [V1 API 인증 방법](https://developers.portone.io/api/rest-v1/_components/v1auth): 포트원 V1 API 사용 시 인증 방법에 관한 내용입니다.
- [API 하위호환성 지원](https://developers.portone.io/api/backward-compatibility): 포트원이 보장하는 V1, V2 API 하위호환성에 대한 내용입니다.

### V1 통합 가이드

- [복수 PG설정 및 사용하기](https://developers.portone.io/opi/ko/console/pg): 복수 PG를 사용하는 경우 설정방법을 확인할 수 있습니다.
- [대표상점과 하위상점](https://developers.portone.io/opi/ko/support/agency-and-tier): 대표상점과 하위상점 설정에 대한 안내 입니다.
- [포트원 결제 플로우](https://developers.portone.io/opi/ko/support/flow): PG사 직연동과 포트원 연동시의 결제 플로우 차이점을 확인할 수 있습니다.
- [리디렉션이란?](https://developers.portone.io/opi/ko/support/redirect): 리디렉션의 정의를 자세히 확인할수 있습니다.
- [면세금액 결제방법](https://developers.portone.io/opi/ko/support/tax): 결제 요청 시 상황에 맞게 면세 금액를 설정할 수 있는 방법을 설명합니다.
- [내 식별코드, API Keys](https://developers.portone.io/opi/ko/console/guide/api-keys)
- [결제 연동 하기](https://developers.portone.io/opi/ko/console/guide/connect)
- [결제 내역](https://developers.portone.io/opi/ko/console/guide/list): 결제가 이루어진 거래내역을 조회할 수 있는 메뉴입니다.
- [컨펌 프로세스](https://developers.portone.io/opi/ko/extra/confirm-process/readme-v1): 결제요청의 주체를 고객사 서버로 가져갈수 있는 서비스 입니다.
- [결제 URL 생성하기](https://developers.portone.io/opi/ko/extra/link-pay/readme-v1): 결제 URL 생성 API 사용법을 안내합니다.
- [플러그인을 통해 포트원 이용하기](https://developers.portone.io/opi/ko/extra/plugins/readme-v1): 여러 플랫폼의 플러그인을 통해 포트원을 이용하는 방법을 안내합니다.
- [프로모션 결제 취소하기](https://developers.portone.io/opi/ko/extra/promotion/refund): 프로모션을 적용하여 승인된 결제건들에 대하여 취소/환불하는 방법을 안내합니다.
- [오픈 전 체크리스트](https://developers.portone.io/opi/ko/integration/checklist/readme-v1): 결제 오픈전 자가진단을 해볼수 있는 오픈 전 체크사항 리스트 입니다.
- [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v1): 포트원 웹훅을 사용하여 포트원 서버에 저장된 결제 정보를 고객사 서버에 동기화하고 네트워크 불안정성을 보완하는 방법을 설명합니다.
- [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code): PortOne 에서 처리하는 카드사별 코드목록 입니다.
- [택배사 코드](https://developers.portone.io/opi/ko/support/code-info/code): 에스크로 배송등록에 필요한 택배사 코드표를 확인합니다.
- [PG사별 은행코드](https://developers.portone.io/opi/ko/support/code-info/pg-1): 각 PG사별 은행코드를 확인할 수 있습니다.
- [PG사 코드](https://developers.portone.io/opi/ko/support/code-info/pg-2): JavaScript SDK PG구분코드를 확인할 수 있습니다.
- [PG사 오류코드](https://developers.portone.io/opi/ko/support/code-info/pg-3): 각 PG사별 오류코드집을 내려받을 수 있습니다.
- [결제대행사별 빌링키 획득 규칙](https://developers.portone.io/opi/ko/support/code-info/pg): 결제대행사별 빌링키 획득 규칙을 안내합니다.
- [해외 카드코드](https://developers.portone.io/opi/ko/support/code-info/portone-code): 금융결제원 기관코드가 정의되어 있지 않은 해외 카드사 코드를 확인합니다.
- [코드 정보](https://developers.portone.io/opi/ko/support/code-info/readme): PG사/카드사/택배사/은행별 코드들을 확인할 수 있습니다.
- [자주 묻는 질문](https://developers.portone.io/opi/ko/support/faq/undefined): 고객사에서 빈번하게 물어보시는 질문을 확인 합니다.
- [본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/readme): 포트원을 이용하여 간편하게 본인인증을 연동하는 방법을 확인합니다.
- [Shopify 플러그인](https://developers.portone.io/opi/ko/extra/plugins/shopify/readme-v1): Shopify 플러그인을 통해 포트원을 사용하는 방법을 안내합니다.
- [결제버튼생성 플러그인](https://developers.portone.io/opi/ko/extra/plugins/wordpress/button)
- [Easy Digital Downloads 플러그인](https://developers.portone.io/opi/ko/extra/plugins/wordpress/edd): Easy Digital Downloads(EDD)용 플러그인을 통해 포트원과 연동합니다.
- [워드프레스 플러그인](https://developers.portone.io/opi/ko/extra/plugins/wordpress/readme-v1): 워드프레스 플러그인을 통해 포트원을 사용하는 방법을 안내합니다.
- [결제취소(환불) 연동하기](https://developers.portone.io/opi/ko/integration/cancel/v1/basic): 포트원 결제취소 API를 이용한 결제취소 방법을 안내합니다.
- [가상계좌 환불하기](https://developers.portone.io/opi/ko/integration/cancel/v1/virtual-account): 가상계좌 입금내역을 환불하는 방법을 확인합니다.
- [블루월넛](https://developers.portone.io/opi/ko/integration/pg/v1/blue): 블루월넛 결제 연동방법을 안내합니다.
- [다날](https://developers.portone.io/opi/ko/integration/pg/v1/danal): 다날 결제연동 방법을 안내합니다.
- [엑심베이](https://developers.portone.io/opi/ko/integration/pg/v1/eximbay): 엑심베이 결제 연동 방법을 안내합니다.
- [하이픈](https://developers.portone.io/opi/ko/integration/pg/v1/hyphen): 하이픈 결제 연동 방법을 안내합니다.
- [KG이니시스](https://developers.portone.io/opi/ko/integration/pg/v1/inicis): KG이니시스 결제창 연동 가이드입니다.
- [카카오페이](https://developers.portone.io/opi/ko/integration/pg/v1/kakaopay): 카카오페이 연동 방법을 안내합니다.
- [KG모빌리언스](https://developers.portone.io/opi/ko/integration/pg/v1/kg): KG모빌리언스 결제 연동 방법을 안내합니다.
- [이지페이(KICC)](https://developers.portone.io/opi/ko/integration/pg/v1/kicc): 이지페이(KICC) 결제창 연동 방법을 안내합니다.
- [네이버페이(결제형)](https://developers.portone.io/opi/ko/integration/pg/v1/naver): 네이버페이 결제형 연동 방법을 안내합니다.
- [NHN KCP](https://developers.portone.io/opi/ko/integration/pg/v1/nhn-kcp): NHN KCP 결제 연동 방법을 안내합니다.
- [(구) 나이스페이먼츠](https://developers.portone.io/opi/ko/integration/pg/v1/nice): (구) 나이스페이먼츠 결제창 연동 가이드를 안내합니다.
- [페이코](https://developers.portone.io/opi/ko/integration/pg/v1/payco): 페이코 결제 연동방법을 안내합니다.
- [페이먼트월](https://developers.portone.io/opi/ko/integration/pg/v1/paymentwall): 페이먼트월 결제창 연동가이드를 확인 합니다.
- [페이팔(Express Checkout)](https://developers.portone.io/opi/ko/integration/pg/v1/paypal): 페이팔(Express Checkout) 결제연동 방법을 안내합니다.
- [결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v1/readme): 각 결제대행사(PG)사별 결제 연동 방법 및 유의사항을 확인할 수 있습니다.
- [스마트로(구모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/smartro): 스마트로 연동 방법을 안내합니다.
- [스마일페이](https://developers.portone.io/opi/ko/integration/pg/v1/smilepay): 스마일페이 결제 연동방법을 안내합니다.
- [토스페이먼츠(구모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/toss): 토스페이먼츠 연동 방법을 확인합니다.
- [토스페이(tosspay)](https://developers.portone.io/opi/ko/integration/pg/v1/tosspay): 토스페이 연동 방법을 안내합니다.
- [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/auth): PG 결제창을 이용하는 인증 결제를 연동합니다.
- [비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth): 카드 정보를 직접 입력하여 일회성 결제 또는 빌링키를 발급 및 정기결제 이용 방법을 안내합니다.
- [결제 연동 시작하기](https://developers.portone.io/opi/ko/integration/start/v1/readme): 결제 연동을 시작합니다.
- [통합인증 준비하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/0): 통합인증 연동을 시작하기 위한 준비작업을 소개합니다.
- [통합인증 요청하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/1): 통합인증 페이지를 호출하는 방법을 확인합니다.
- [인증 완료정보 전달하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/2): 통합인증 이후 획득된 정보를 처리하는 방법을 안내합니다.
- [인증정보 조회 및 활용하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/3): 인증정보를 획득하고 활용하는 방법을 안내합니다.
- [통합인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/readme): 통합인증 기능을 구현하는 방법을 설명합니다.
- [1. 본인인증 준비하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/1): 신용카드 본인인증을 시작하기 위한 안내입니다.
- [2. 본인인증 요청하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/2): 신용카드 본인인증 창을 호출하는 방법을 안내합니다.
- [3. 인증 완료정보 전달하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/3): 신용카드 본인인증 이후 획득된 정보를 처리하는 방법을 안내합니다.
- [4. 인증정보 조회 및 활용하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/4): 인증정보를 획득하고 활용하는 방법을 안내합니다.
- [신용카드 본인인증 연동](https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/readme): 신용카드 본인인증 기능을 구현하는 방법을 설명합니다.
- [1. 본인인증 준비하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/1): 휴대폰 본인인증 연동을 위한 준비
- [2. 본인인증창 호출하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/2): 본인인증 창 호출방법을 안내합니다.
- [3. 인증 완료정보 전달하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/3): 휴대폰 본인인증 이후 획득된 정보를 처리하는 방법을 안내합니다.
- [4. 인증정보 조회 및 활용하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/4): 인증정보를 획득하고 활용하는 방법을 안내합니다.
- [휴대폰 본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/readme): 포트원을 이용하여 간편하게 휴대폰 본인인증을 연동하는 방법을 확인합니다.
- [PortOne(KR) 가입 및 PG 계약](https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-1): Shopify 연동을 위해 선행해야할 내용을 설명합니다.
- [PortOne(Global) 가입 및 결제수단 설정](https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-2): Shopify 연동을 위해 선행해야할 내용을 설명합니다.
- [PortOne(Global) 에 Shopify 스토어 등록](https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-3): Shopify 스토어 등록방법을 설명합니다.
- [Shopify 스토어에 PortOne 연결하기](https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-4): Shopify 스토어에 PortOne 연결방법을 설명합니다.
- [엔드유저의 Shopify 결제 경험](https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-5): 실 고객의 Shopify 결제 화면을 설명합니다.
- [일반결제 연동하기](https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/payment): 우커머스 플러그인을 통해 일반결제를 연동합니다.
- [우커머스 플러그인](https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/readme): 포트원 우커머스 플러그인 사용방법을 안내합니다.
- [정기결제 연동하기](https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/subscription): 우커머스 플러그인을 통해 정기결제를 연동합니다.
- [가상계좌 입금통보 URL 설정하기](https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/vbank): 우커머스 플러그인에서 가상계좌 입금통지 URL을 설정합니다.
- [키움페이 (다우데이타/페이조아)](https://developers.portone.io/opi/ko/integration/pg/v1/daou/readme): 키움페이 연동 방법을 안내합니다.
- [키움페이 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/daou/undefined): 결제 연동시 유의사항을 안내합니다.
- [KSNET](https://developers.portone.io/opi/ko/integration/pg/v1/ksnet/readme): KSNET 결제창 연동 가이드입니다.
- [연동 주의사항](https://developers.portone.io/opi/ko/integration/pg/v1/ksnet/warning): KSNET 연동 시 주의사항을 확인할 수 있습니다.
- [토스페이먼츠(신모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/newtoss/readme): 토스페이먼츠 (신모듈 / 2022-07-27 버전) 연동 방법을 확인합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/newtoss/warning): 토스페이먼츠 (신 모듈) 연동 유의사항을 소개합니다.
- [빌링키 발급 / API 연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/billing-api-caution): (신)나이스페이먼츠 비인증 결제 연동 유의사항을 소개합니다.
- [일반결제 연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/payment-caution): 나이스페이먼츠(신모듈) 일반결제 연동 유의사항을 소개합니다.
- [나이스페이먼츠 (신모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/readme): 나이스페이먼츠 연동 방법을 안내합니다.
- [페이팔(Reference Transaction) 정기결제](https://developers.portone.io/opi/ko/integration/pg/v1/rt/readme): 페이팔(Reference Transaction) 빌링키 발급 및 정기결제 연동 방법을 안내합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/rt/warning): (신)페이팔 정기결제(RT) 이용시 특이사항을 확인할수 있습니다.
- [내통장결제](https://developers.portone.io/opi/ko/integration/pg/v1/settle/mybank): 헥토파이낸셜에서 제공하는 오픈뱅킹 기반 계좌간편결제 연동 방법을 안내합니다.
- [헥토파이낸셜](https://developers.portone.io/opi/ko/integration/pg/v1/settle/readme): 헥토파이낸셜 결제 연동 방법을 안내합니다.
- [API 연동](https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/api): 스마트로 API 연동 방법을 안내합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/caution): 스마트로 연동 유의사항을 소개합니다.
- [스마트로(신모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/readme): 스마트로 연동 방법을 안내합니다.
- [페이팔(Smart Payment Buttons) 일반결제](https://developers.portone.io/opi/ko/integration/pg/v1/spb/readme): 페이팔(Smart Payment Buttons) 일반결제 연동 방법을 안내합니다.
- [고위험 거래 상세 정보](https://developers.portone.io/opi/ko/integration/pg/v1/spb/stc): (신)페이팔 일반결제(SPB) 이용시 특이사항을 확인할수 있습니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/spb/warning): (신)페이팔 일반결제(SPB) 이용시 특이사항을 확인할수 있습니다.
- [모듈 로딩 연동](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/module): 토스페이먼츠 브랜드페이의 모듈 로딩에 연동 방법을 안내합니다.
- [토스페이먼츠 브랜드페이](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/readme): 토스페이먼츠 브랜드페이 연동 방법을 안내합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/warning): 토스페이먼츠 브랜드페이 연동 유의사항을 소개합니다.
- [브랜드페이 위젯 연동](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/widget): 토스페이먼츠 브랜드페이 위젯 연동 방법을 안내합니다.
- [API 연동](https://developers.portone.io/opi/ko/integration/pg/v1/welcome/api): 웰컴페이먼츠 API 연동 방법을 안내합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/welcome/caution): 웰컴페이먼츠 연동 유의사항을 소개합니다.
- [웰컴페이먼츠](https://developers.portone.io/opi/ko/integration/pg/v1/welcome/readme): 웰컴페이먼츠 연동 방법을 안내합니다.
- [연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/tosspay-v2/caution): (신) 토스페이 연동 유의사항을 소개합니다.
- [토스페이(tosspay_v2)](https://developers.portone.io/opi/ko/integration/pg/v1/tosspay-v2/readme): 토스페이 연동 방법을 안내합니다.
- [PG 거래대사 가이드](https://developers.portone.io/opi/ko/etc/recon): PG 거래대사는 PG사와 간편결제사로부터 정산 받는 금액 및 상세내역을 포트원 콘솔에서 PG가 여러 개여도 한 번에 자동 대사된 데이터를 확인할 수 있는 통합 조회 서비스입니다.
- [포트원 결제 연동 Doc](https://developers.portone.io/opi/ko/readme): 포트원 결제 연동 가이드입니다. 빠른 시간 안에 결제를 연동할 수 있게 도와드립니다.
- [직접 문의하기](https://developers.portone.io/opi/ko/support/contact): 기술지원 문의를 위한 연락처 정보입니다.
- [TLS 지원 범위](https://developers.portone.io/opi/ko/support/tls-support): 포트원 v1 API의 TLS 지원 범위 및 설정 가이드를 확인할 수 있습니다.
- [상점 계정 관리](https://developers.portone.io/opi/ko/console/guide/account): 포트원 콘솔에서 하위 상점을 생성하여 상점별로 결제 거래 건을 분리하여 관리할 수 있으며, 해당 상점을 관리할 수 있는 계정을 별도로 생성하여 권한을 나눌 수 있습니다. 이에 대해 안내합니다.
- [빌링결제 내역 조회](https://developers.portone.io/opi/ko/console/guide/billing-payments): 포트원을 통해 발생한 빌링키 결제 내역을 상태별로 조회하고 결제 예약일 변경, 예약 해지, 결제 재시도, 결제 재예약 기능을 이용하여 빌링 결제 건을 관리할 수 있으며, 결제 실패 건에 대한 일괄 재시도를 자동화해주는 리커버리 기능에 대해 안내합니다.
- [연동 정보](https://developers.portone.io/opi/ko/console/guide/channel-manage): 포트원 결제 모듈을 사용하기 위한 연동 설정을 관리할 수 있습니다. 결제대행사 채널 관리, 식별코드 및 API Keys, 결제알림(웹훅) 관리, 추가 설정 관리 방법에 대해 안내합니다. 
- [홈](https://developers.portone.io/opi/ko/console/guide/home): 포트원 콘솔 홈화면에서는 결제 현황 대시보드, 공지사항, FAQ, 포트원 새소식, 포트원 서비스 가이드 링크를 제공하고 있으며, 이에 대해 안내합니다.
- [연동 관리](https://developers.portone.io/opi/ko/console/guide/integration): 포트원 결제 모듈을 사용하기 위한 연동 설정을 관리할 수 있습니다. 결제대행사 채널 관리, 식별코드 및 API Keys, 결제알림(웹훅) 관리, 추가 설정 관리 방법에 대해 안내합니다. 
- [결제](https://developers.portone.io/opi/ko/console/guide/pay): 포트원을 관리자콘솔을 통해 발생한 거래를 조회 및 관리하는 방법을 안내합니다.
- [결제 내역 조회](https://developers.portone.io/opi/ko/console/guide/payments): 포트원을 통해 발생한 결제 내역을 상태별로 조회하고, 부분 취소 및 전체 취소 기능을 이용하여 결제 건을 관리할 수 있으며, 이에 대해 안내합니다.
- [프로모션](https://developers.portone.io/opi/ko/console/guide/promotion): 카드사 할인을 사용하기 위한 프로모션 설정을 관리할 수 있습니다. 관리자콘솔 내 프로모션 설정 방법을 안내합니다.
- [관리자 콘솔 소개](https://developers.portone.io/opi/ko/console/guide/readme): 포트원 관리자 콘솔 사용법을 안내합니다.
- [전자결제 신청](https://developers.portone.io/opi/ko/console/guide/reg): 결제대행사 및 결제수단을 선택하고 전자결제를 신청하는 과정을 안내합니다.
- [프로모션 생성하기](https://developers.portone.io/opi/ko/extra/promotion/console-guide): 프로모션 기간, 예산, 할인 조건 등 설정 방법을 안내합니다.
- [프로모션 결제 연동하기](https://developers.portone.io/opi/ko/extra/promotion/integration): 프로모션 할인금액을 적용하는 방법을 안내합니다.
- [프로모션](https://developers.portone.io/opi/ko/extra/promotion/intro): 카드 즉시 할인을 쉽게 운영 및 관리할 수 있는 서비스입니다.
- [스마트 라우팅 - 콘솔 가이드](https://developers.portone.io/opi/ko/extra/smart-routing/console-guide): 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
- [스마트 라우팅 - 연동하기](https://developers.portone.io/opi/ko/extra/smart-routing/integration): 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
- [스마트 라우팅](https://developers.portone.io/opi/ko/extra/smart-routing/intro): 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
- [결제 연동 준비하기](https://developers.portone.io/opi/ko/integration/ready/readme): 포트원을 이용한 연동 개발이 처음이시라면 아래 안내 사항에 따라 진행하세요.
- [가상계좌 입금통보 설정](https://developers.portone.io/opi/ko/integration/virtual-account/readme): 결제대행사별 입금통보 URL을 안내합니다.
- [퀵 가이드](https://developers.portone.io/opi/ko/quick-guide/payment): 결제연동 퀵 가이드
- [결제대행사별 연동 정보 확인하기 - KG이니시스](https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/inicis)
- [결제대행사별 연동 정보 확인하기 - 토스페이먼츠 (신모듈)](https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/tosspayments)

### 파트너정산

- [용어 사전](https://developers.portone.io/platform/ko/guides/dictionary)
- [서비스 프로세스](https://developers.portone.io/platform/ko/guides/process)
- [파트너 정산 자동화 서비스 가이드](https://developers.portone.io/platform/ko/readme)
- [고객사 예시](https://developers.portone.io/platform/ko/usages/client)
- [계약 예시](https://developers.portone.io/platform/ko/usages/contract)
- [할인 예시](https://developers.portone.io/platform/ko/usages/discount)
- [추가 수수료 예시](https://developers.portone.io/platform/ko/usages/fee)
- [주문정산 예시](https://developers.portone.io/platform/ko/usages/order)
- [파트너 예시](https://developers.portone.io/platform/ko/usages/partner)

### 릴리스 노트

- [API / SDK 2023-04-24](https://developers.portone.io/release-notes/api-sdk/2023-04-24)
- [API / SDK 2023-05-08](https://developers.portone.io/release-notes/api-sdk/2023-05-08)
- [API / SDK 2023-05-12](https://developers.portone.io/release-notes/api-sdk/2023-05-12)
- [API / SDK 2023-05-22](https://developers.portone.io/release-notes/api-sdk/2023-05-22)
- [API / SDK 2023-05-25](https://developers.portone.io/release-notes/api-sdk/2023-05-25)
- [API / SDK 2023-06-19](https://developers.portone.io/release-notes/api-sdk/2023-06-19)
- [API / SDK 2023-07-03](https://developers.portone.io/release-notes/api-sdk/2023-07-03)
- [API / SDK 2023-07-10](https://developers.portone.io/release-notes/api-sdk/2023-07-10)
- [API / SDK 2023-07-17](https://developers.portone.io/release-notes/api-sdk/2023-07-17)
- [API / SDK 2023-07-31](https://developers.portone.io/release-notes/api-sdk/2023-07-31)
- [API / SDK 2023-08-31](https://developers.portone.io/release-notes/api-sdk/2023-08-31)
- [API / SDK 2023-12-15](https://developers.portone.io/release-notes/api-sdk/2023-12-15)
- [API / SDK 2024-01-08](https://developers.portone.io/release-notes/api-sdk/2024-01-08)
- [API / SDK 2024-01-11](https://developers.portone.io/release-notes/api-sdk/2024-01-11)
- [API / SDK 2024-01-25](https://developers.portone.io/release-notes/api-sdk/2024-01-25)
- [API / SDK 2024-01-30](https://developers.portone.io/release-notes/api-sdk/2024-01-30)
- [API / SDK 2024-02-23](https://developers.portone.io/release-notes/api-sdk/2024-02-23)
- [API / SDK 2024-03-08](https://developers.portone.io/release-notes/api-sdk/2024-03-08)
- [API / SDK 2024-03-15](https://developers.portone.io/release-notes/api-sdk/2024-03-15)
- [API / SDK 2024-03-25](https://developers.portone.io/release-notes/api-sdk/2024-03-25)
- [API / SDK 2024-04-01](https://developers.portone.io/release-notes/api-sdk/2024-04-01)
- [API / SDK 2024-04-05](https://developers.portone.io/release-notes/api-sdk/2024-04-05)
- [API / SDK 2024-04-12](https://developers.portone.io/release-notes/api-sdk/2024-04-12)
- [API / SDK 2024-05-08](https://developers.portone.io/release-notes/api-sdk/2024-05-08)
- [API / SDK 2024-05-14](https://developers.portone.io/release-notes/api-sdk/2024-05-14)
- [API / SDK 2024-06-03](https://developers.portone.io/release-notes/api-sdk/2024-06-03)
- [API / SDK 2024-06-17](https://developers.portone.io/release-notes/api-sdk/2024-06-17)
- [API / SDK 2024-06-19](https://developers.portone.io/release-notes/api-sdk/2024-06-19)
- [API / SDK 2024-06-20](https://developers.portone.io/release-notes/api-sdk/2024-06-20)
- [API / SDK 2024-07-04](https://developers.portone.io/release-notes/api-sdk/2024-07-04)
- [API / SDK 2024-07-11](https://developers.portone.io/release-notes/api-sdk/2024-07-11)
- [API / SDK 2024-09-05](https://developers.portone.io/release-notes/api-sdk/2024-09-05)
- [API / SDK 2024-09-27](https://developers.portone.io/release-notes/api-sdk/2024-09-27)
- [API / SDK 2024-12-19](https://developers.portone.io/release-notes/api-sdk/2024-12-19)
- [API / SDK 2025-01-15](https://developers.portone.io/release-notes/api-sdk/2025-01-15)
- [관리자콘솔 2023-04-24](https://developers.portone.io/release-notes/console/2023-04-24)
- [관리자콘솔 2023-05-08](https://developers.portone.io/release-notes/console/2023-05-08)
- [관리자콘솔 2023-05-22](https://developers.portone.io/release-notes/console/2023-05-22)
- [관리자콘솔 2023-07-05](https://developers.portone.io/release-notes/console/2023-07-05)
- [관리자콘솔 2023-07-07](https://developers.portone.io/release-notes/console/2023-07-07)
- [관리자콘솔 2023-07-17](https://developers.portone.io/release-notes/console/2023-07-17)
- [관리자콘솔 2023-08-23](https://developers.portone.io/release-notes/console/2023-08-23)
- [관리자콘솔 2023-09-12](https://developers.portone.io/release-notes/console/2023-09-12)
- [관리자콘솔 2023-12-27](https://developers.portone.io/release-notes/console/2023-12-27)
- [관리자콘솔 2024-09-05](https://developers.portone.io/release-notes/console/2024-09-05)
- [파트너 정산 자동화 2023-08-31](https://developers.portone.io/release-notes/platform/2023-08-31)
- [파트너 정산 자동화 2023-11-08](https://developers.portone.io/release-notes/platform/2023-11-08)
- [파트너 정산 자동화 2023-11-14](https://developers.portone.io/release-notes/platform/2023-11-14)
- [파트너 정산 자동화 2023-12-15](https://developers.portone.io/release-notes/platform/2023-12-15)
- [파트너 정산 자동화 2024-05-20](https://developers.portone.io/release-notes/platform/2024-05-20)
- [파트너 정산 자동화 2024-05-29](https://developers.portone.io/release-notes/platform/2024-05-29)
- [파트너 정산 자동화 2024-06-05](https://developers.portone.io/release-notes/platform/2024-06-05)
- [파트너 정산 자동화 2024-07-05](https://developers.portone.io/release-notes/platform/2024-07-05)
- [파트너 정산 자동화 2024-07-11](https://developers.portone.io/release-notes/platform/2024-07-11)
- [파트너 정산 자동화 2024-07-30](https://developers.portone.io/release-notes/platform/2024-07-30)
- [파트너 정산 자동화 2024-08-07](https://developers.portone.io/release-notes/platform/2024-08-07)
- [파트너 정산 자동화 2024-08-22](https://developers.portone.io/release-notes/platform/2024-08-22)
- [파트너 정산 자동화 2024-10-21](https://developers.portone.io/release-notes/platform/2024-10-21)
- [파트너 정산 자동화 2024-11-07](https://developers.portone.io/release-notes/platform/2024-11-07)
- [파트너 정산 자동화 2024-11-25](https://developers.portone.io/release-notes/platform/2024-11-25)
- [파트너 정산 자동화 2024-12-10](https://developers.portone.io/release-notes/platform/2024-12-10)
- [파트너 정산 자동화 2025-01-16](https://developers.portone.io/release-notes/platform/2025-01-16)
- [파트너 정산 자동화 2025-02-10](https://developers.portone.io/release-notes/platform/2025-02-10)
- [파트너 정산 자동화 2025-02-13](https://developers.portone.io/release-notes/platform/2025-02-13)
- [파트너 정산 자동화 2025-03-04](https://developers.portone.io/release-notes/platform/2025-03-04)
- [파트너 정산 자동화 2025-03-17](https://developers.portone.io/release-notes/platform/2025-03-17)

### 블로그

- [포트원 V2 이야기 - OOM 이슈 탐방기](https://developers.portone.io/blog/posts/2024-02/v2-oom): ZIO를 사용하면서 발생했던 OOM 이슈에 대해 원인을 분석합니다.
- [포트원 V2 이야기 - 웹훅 재시도, 어디까지 고도화해 보셨나요?](https://developers.portone.io/blog/posts/2024-02/v2-webhook): 웹훅의 중요성과 한계점을 살펴보고 포트원 V2에서 웹훅 시스템을 고도화한 이야기를 소개합니다.
- [포트원 V2 이야기 - Scala와 ZIO로 안정적인 결제 시스템 만들기](https://developers.portone.io/blog/posts/2024-02/v2-zio): 안정적인 결제 시스템을 만들기 위해 기술적으로 의사결정한 내용에 대해 소개합니다.
- [포트원이 여러 PG사의 인터페이스를 연동하는 방법](https://developers.portone.io/blog/posts/2024-03/tgs): 여러 PG사의 인터페이스를 효율적으로 연동하기 위한 결정사항들을 소개합니다.
- [Data Evolution: The Shift from AWS DMS to GCP Datastream](https://developers.portone.io/blog/posts/2024-04/gcp-datastream): Gives an overview of the PortOne Data Infrastructure and the migration story from AWS DMS to GCP Datastream.
- [Solid로 간결하게 고성능 웹앱 만들기](https://developers.portone.io/blog/posts/2024-04/solid): 포트원에서 사용하는 프론트엔드 웹 프레임워크 중 하나인 Solid에 대해 소개하고, 포트원 내에서의 활용 사례를 다룹니다.
- [포트원 V2 이야기 - Event Sourcing으로 결제 시스템 만들기 (기본편)](https://developers.portone.io/blog/posts/2024-07/v2-event-sourcing-basic): 포트원 V2 시스템의 근간을 이루고 있는 기술 중 하나인 Event Sourcing에 대해 소개합니다.


# https://developers.portone.io/api/rest-v1/_components/v1auth

---
title: V1 API 인증 방법
description: 포트원 V1 API 사용 시 인증 방법에 관한 내용입니다.
targetVersions:
  - v1
---

포트원 API를 호출할 때는 **액세스 토큰**을 `Authorization` 헤더에 넣어주어야 합니다.\
액세스 토큰은 [access\_token 발급 API - POST /users/getToken](https://developers.portone.io/schema/v1.openapi.yml)를 호출해서 발급받을 수 있습니다.

액세스 토큰 발급 API를 호출하려면 **API 키**와 **API 시크릿**을 인자로 넣어주어야 합니다.

<details>

<summary>API 키와 API 시크릿 확인하기</summary>

1. [관리자 콘솔 `상점・계정 관리` 화면](https://admin.portone.io/merchant) 접속
2. `내 식별코드・API Keys` 버튼 클릭

(이미지 첨부: API 키와 API 시크릿은 관리자 콘솔 → 상점・계정 관리 메뉴 → 내 식별코드・API Keys 모달을 열어서 확인하실 수 있습니다)

<div class="hint" data-style="danger">

**API 시크릿은 절대로 외부에 노출되어서는 안 되는 값**입니다.\
실제 구현에서 액세스 토큰 발급은 꼭 서버 사이드에서 해주세요.

</div>

</details>

<details>

<summary>액세스 토큰 발급 받기</summary>

[access\_token 발급 API - POST /users/getToken](https://developers.portone.io/schema/v1.openapi.yml) 호출

(이미지 첨부: /users/getToken API를 호출해서 액세스 토큰을 발급받습니다)

<div class="hint" data-style="info">

포트원 REST API 서버는 **Google Public NTP**의 시간과 동기화되고 있습니다.

</div>

<div class="hint" data-style="warning">

하위 상점 연동을 할 경우 액세스 토큰을 발급받을 때 **Agent 계정**의 **API 키** 와 **API 시크릿**을 사용해야 합니다.

[Agency & Tier 란?](https://developers.portone.io/opi/ko/support/agency-and-tier)

</div>

</details>

<details>

<summary>액세스 토큰 사용하기</summary>

발급받은 액세스 토큰은 다른 API를 호출할 때\
`Authorization` 헤더에 `Bearer <액세스 토큰>` 형식의 값을 넣어주면 됩니다.

자세한 내용은 [MDN - HTTP 인증 문서](https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication)를 참고해주세요.

(관련 이미지 첨부)

<div class="hint" data-style="warning">

하위 상점 연동을 할 경우 포트원 API 호출시 `Tier` 헤더에 하위 상점 티어 코드를 입력해야 합니다.

[Agency & Tier 란?](https://developers.portone.io/opi/ko/support/agency-and-tier)

(관련 이미지 첨부)

</div>

</details>

<details>

<summary>액세스 토큰 만료기한 연장</summary>

만료된 액세스 토큰으로 API를 호출하면 `401 Unauthorized` 응답을 받습니다.\
액세스 토큰의 만료 기한은 발행시간부터 **30분**입니다.

- 기존 액세스 토큰이 만료되기 전 [access\_token 발급 API - POST /users/getToken](https://developers.portone.io/schema/v1.openapi.yml)를 다시 호출했을 경우
  - 기존 액세스 토큰이 반환됩니다.\
    **만료 기한이 1분 안쪽으로 남았을 때** 요청했다면 기존 액세스 토큰의 만료 기한이 **5분 연장**됩니다.

- 기존 액세스 토큰이 만료된 다음 [access\_token 발급 API - POST /users/getToken](https://developers.portone.io/schema/v1.openapi.yml)를 다시 호출했을 경우
  - 새로운 액세스 토큰이 반환됩니다.

(관련 이미지 첨부)

<div class="hint" data-style="info">

액세스 토큰의 재사용과 만료기한 5분 연장 동작방식은 다음과 같은 상황을 고려해서 설계되었습니다.

- 한 고객사에서 여러 대의 웹서버가 동시에 경쟁적으로 REST API(`/users/getToken`)를 호출하는 상황
- 한 고객사에서 여러 대의 웹서버가 시간 동기화 되어있지 않은 상황

</div>

</details>


# https://developers.portone.io/opi/ko/console/pg

---
title: 복수 PG설정 및 사용하기
description: 복수 PG를 사용하는 경우 설정방법을 확인할 수 있습니다.
targetVersions:
  - v1
---

이 문서는 포트원 관리자 콘솔에서 복수의 PG사를 설정하여 원하는 결제 수단으로 결제창을 호출하는 방법을 설명합니다.

## PG 설정하기

추가 설정이 필요한 PG설정정보를 아래와 같이 설정해 주세요.

[포트원 관리자 콘솔](https://admin.portone.io/) > 결제 연동 > 테스트/실 연동 > 실 연동 또는 테스트
연동 선택 > PG사 / PG 모듈 선택 > \[+추가] 클릭

(관련 이미지 첨부)

## 특정 PG사의 결제창 열기 <a href="#pg" id="pg" />

결제창을 호출하기 위한 [**JavaScript SDK**](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay`를
호출할 때 `channelKey` 속성에 PG사의 채널키를 지정하여 해당 PG사의 결제창을 호출할 수 있습니다.

만약 포트원 관리자 콘솔 PG사 등록 현황이 아래와 같이 **3개의 PG설정**을 등록했다고 가정해 보면,

|          PG사         |상점아이디 (예시)|       용도      |                     채널키                     |
|:---------------------:|:---------------:|:---------------:|:----------------------------------------------:|
|**(신) 나이스페이먼츠**|      MID-a      | **인증 결제용** |channel-key-12345678-1234-5678-9012-123456789012|
|**(신) 나이스페이먼츠**|      MID-b      |**비인증 결제용**|channel-key-abcdefgh-abcd-efgh-ijkl-abcdefghijkl|
|       카카오페이      |      MID-c      |   인증 결제용   |channel-key-98765432-9876-5432-1098-987654321098|

다음과 같이 `channelKey` 속성에 `channel-key-98765432-9876-5432-1098-987654321098`를 지정하면 등록한 카카오페이 설정으로 결제창이 호출됩니다

<div class="tabs-container">

<div class="tabs-content" data-title="카카오페이 호출">

```ts
IMP.request_pay({
  channelKey: "channel-key-98765432-9876-5432-1098-987654321098", // 카카오페이 채널키
  amount: 1000,
  name: "테스트 주문",
  buyer_name: "구매자",
  buyer_email: "buyer@iamport.kr",
});
```

</div>

</div>

위에서 등록한 PG 설정 중 **(신) 나이스페이먼츠 (인증 결제용)** 와 **(신) 나이스페이먼츠 (비인증 결제용)** 의 경우 **PG사 코드값이 동일**하지만, `channelKey` 파라미터를 통해 구분이 가능합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="(신) 나이스페이먼츠 인증 결제용 호출">

```ts
IMP.request_pay({
  channelKey: "channel-key-12345678-1234-5678-9012-123456789012", // (신) 나이스페이먼츠 인증 결제용 채널키
  amount: 1000,
  name: "테스트 주문",
  buyer_name: "구매자",
  buyer_email: "buyer@iamport.kr",
});
```

</div>

<div class="tabs-content" data-title="(신) 나이스페이먼츠 비인증 결제용 호출">

```ts
IMP.request_pay({
  channelKey: "channel-key-abcdefgh-abcd-efgh-ijkl-abcdefghijkl", // (신) 나이스페이먼츠 비인증 결제용 채널키
  amount: 1000,
  name: "테스트 주문",
  buyer_name: "구매자",
  buyer_email: "buyer@iamport.kr",
});
```

</div>

</div>

<div class="hint" data-style="warning">

기존에 사용되던 `pg` 파라미터는 지원 중단 예정입니다.

JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 PG사 구분을 대체해주세요.

</div>


# https://developers.portone.io/opi/ko/support/agency-and-tier

---
title: 대표상점과 하위상점
description: 대표상점과 하위상점 설정에 대한 안내 입니다.
targetVersions:
  - v1
---

**하나의 계정으로 하위 상점별 결제대행사 이용을 원하시는 경우 포트원에서 제공하는 하위상점 기능을 사용하시면 됩니다.**

회원가입 시 대표상점이 자동으로 생성되며, 추가로 하위상점을 추가하여 하위 상점별 결제대행사 채널 등록 및 결제내역 조회(취소)가 가능합니다.
하위 상점 생성 시 `Tier Code`(영문, 숫자를 조합한 3자리 고유 코드를 지정) 이용하여 결제를 진행해야 합니다.

하위상점 생성은 포트원 콘솔 내 [하위 상점 관리](https://admin.portone.io/merchant/?tab=store)에서 생성할 수 있습니다.

## 주요 기능

**1. 하위몰별 결제대행사 채널 설정**

- 하위 상점을 추가 혹은 삭제하고, 하위 상점의 PG사 MID 설정 및 관리를 하실 수 있습니다.
- 하위 상점은 대표 상점에 추가된 채널에 한해서만 선택하여 추가할 수 있습니다.

(이미지 첨부: 하위 상점 생성 예시 화면 1)

(이미지 첨부: 하위 상점 생성 예시 화면 2)

**2. 결제 요청**

<div class="hint" data-style="info">

포트원 V1 결제 모듈의 경우 아래 방법으로 결제를 요청해야 합니다.
포트원 V2 결제 모듈의 경우 하위 상점 생성 시 채번되는 store id를 이용하여 대표상점과 동일하게 결제 요청/조회/취소를 진행할 수 있습니다.

</div>

- 하위 상점 결제요청시 **JavaScript SDK** 에서 다음과 같이 **Tier를 구분하여 호출**하실 수 있습니다.

**IMP.agency(고객사 식별코드, Tier(고유)코드 3자리)**

`ex) IMP.agency('imp12345678', '001')`

<div class="hint" data-style="info">

**REST API호출시 주의 사항**

REST API호출시에는 Header에 Tier정보를 같이 보내야 해당 Tier에 대한 접근이 가능

HTTP Header 에 아래와 같은 파라미터 설정 필요

`"Tier" : "티어코드 3자리"`

</div>


# https://developers.portone.io/opi/ko/support/flow

---
title: 포트원 결제 플로우
description: PG사 직연동과 포트원 연동시의 결제 플로우 차이점을 확인할 수 있습니다.
targetVersions:
  - v1
---

## 1. PG사 직연동시 결제 흐름도

(이미지 첨부: PG사 직연동 결제 플로우)

> PG사 모듈을 직접 연동시에는 일반적으로 결제요청은 **2-Transaction** 으로 처리됩니다.
>
> 1. 결제요청을 위한 **인증키 획득**
> 2. **실 결제요청**

> 백엔드 개발 포인트가 여러군데 존재하며 복잡한 형태의 연동 모듈과 샘플페이지
> 그리고 이해하기 어려운 연동메뉴얼 분석의 **삼중고**를 겪으시게 됩니다.

## 2. 포트원 결제 흐름도

(이미지 첨부: 포트원 결제 플로우)

> 포트원을 통해 결제연동을 진행하시는 경우 복잡한 PG사 모듈 연동부는 이미 포트원에서 처리 되었기 때문에 도식의 흐름대로 결제처리가 이루어집니다.


# https://developers.portone.io/opi/ko/support/redirect

---
title: 리디렉션이란?
description: 리디렉션의 정의를 자세히 확인할수 있습니다.
targetVersions:
  - v1
---

**현재 페이지를 다른 페이지로 이동함을 의미합니다.**

![](</gitbook-assets/ko/image (145).png>)

## 리디렉션은 왜 필요할까요?

- 기존의 페이지의 주소가 새롭게 변경되어 이동이 필요한 경우
- 불필요하거나 잘못된 서브 주소를 하나로 이동시키는 경우
- 로그인, 인증 등의 목적으로 다른 주소로 이동이 필요한 경우

**리디렉션은 아래와 같이 두 가지로 구분이 됩니다.**

- **리디렉션 301**

  - 서버사이드 및 클라이언트 언어에서 어떤 코드도 수행하지 않고 바로 리디렉션 처리

- **리디렉션 302**

  - 일시적인 방법으로 Redirect으로 스크립트나 html 태그를 이용한 방법


# https://developers.portone.io/opi/ko/support/tax

---
title: 면세금액 결제방법
description: 결제 요청 시 상황에 맞게 면세 금액를 설정할 수 있는 방법을 설명합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="info">

**이 문서는 [부가가치세법 제26조(재화 또는 용역의 공급에 대한 면세)](https://txsi.hometax.go.kr/docs/customer/comment/comment_jomun_main_internet.jsp?node_id=null\&lawid=001571\&jomunkey=0026005\&lawnm=%EB%B6%80%EA%B0%80%EA%B0%80%EC%B9%98%EC%84%B8%EB%B2%95\&jomun_nm=%EC%A0%9C26%EC%A1%B0%E3%80%90%EC%9E%AC%ED%99%94%20%EB%98%90%EB%8A%94%20%EC%9A%A9%EC%97%AD%EC%9D%98%20%EA%B3%B5%EA%B8%89%EC%97%90%20%EB%8C%80%ED%95%9C%20%EB%A9%B4%EC%84%B8%E3%80%91\&public_ilja=20161220\&public_no=14387)에 정해진 부가가치세(부가세) 면세상품을 판매하는 사업자에게 해당합니다.**

해당 조항에서 언급하는 재화 또는 서비스를 취급하지 않는 일반적인 사업자의 경우에는 PG사/카드사를 통해 자동으로 10% 부가세 적용이 이루어지기 때문에 아래의 내용은 참고사항으로 알아두셔도 됩니다.

</div>

## PG 계약 시 상점아이디 설정하기 <a href="#pg" id="pg" />

**부가세 면세 사업자의 경우** PG 계약 시 면세 사업자임을 밝히고 사업자등록증을 제출하면 면세 금액를 설정할 수 있는 상점아이디를 발급받을 수 있습니다.
`IMP.`**`request_pay`** 함수로 결제창을 호출할 때 다음 속성들을 사용하여 면세 금액를 적용할 수 있습니다.

- **`amount`**: 총 결제금액
- **`tax_free`**: 총 면세상품의 금액

일부 PG사의 경우 상점아이디의 과세/면세별로 구분을 두지 않고 하나의 상점아이디를 사용하여 `tax_free` 속성으로 면세 금액을 설정하는 경우도 있습니다.

<div class="hint" data-style="info">

**상점아이디**

각 PG사 별로 가입신청 및 계약 완료 이후 발급되는 상점아이디 명칭은 PG사 별로 다릅니다.
예를 들어, KG이니시스는 `상점 아이디(MID)`, 카카오페이는 `고객사 코드(CID)`, 그리고 네이버페이는 `파트너 ID`를 발급받습니다.

</div>

면세 기준에 따라 발급받는 상점아이디는 다음 3가지 유형이 있습니다.

> **면세 상점아이디**
>
> 면세 상품만 판매하는 사업자의 경우 면세 상점아이디를 발급 받습니다.
> 면세 상점아이디로 거래를 하면, `tax_free` 속성은 무시되고 모든 결제 건은 일괄 면세 처리 됩니다.

> **과세 상점아이디**
>
> 과세 상품만 판매하는 사업자의 경우 과세 상점아이디를 발급 받습니다.
> 과세 상점아이디로 거래를 하면, `tax_free` 속성은 무시되고 모든 결제 건은 일괄 과세 처리 됩니다.

> **복합과세 상점아이디**
>
> 과세상품과 면세상품을 함께 판매하는 사업자의 경우 판매되는 상품에 따라 면세 금액액이 달라질 수
> 있으므로, 반드시 복합 과제 상점아이디를 발급 받아야 합니다.
>
> 과세상품과 면세상품을 함께 구매하는 경우에는, `amount` 속성에 **총 결제 금액**을 지정하고
> `tax_free` 속성에는 구매하는 상품 중 **면세상품의 금액 합계**를 지정합니다.

<div class="hint" data-style="warning">

**`tax_free` 속성은 필수 입력**

복합 과세 상점아이디 거래건의 경우 **반드시 `amount` 속성과 `tax_free` 속성을 함께 설정해야** 합니다.
일부 PG사의 경우 `tax_free` 값이 누락되면 결제창 호출 단계에서 오류가 발생할 수 있습니다.

특히 KG이니시스의 경우 **모든 결제건을 일괄 면세 처리**하고 있으며 과세 상점 아이디를 사용하다가 중간에 복합 과세 상점 아이디로 변경하면 기존에 과세 결제건을 모두 일괄 면세로 변경하고 있으니 이용에 주의하시길 바랍니다.

</div>

## 상황별 tax\_free 속성 적용하기 <a href="#taxfree" id="taxfree" />

고객이 과세상품과 면세상품을 동시에 구매하는 상황을 가정하여 각각의 시나리오별로 `amount`와 `tax_free`속성을 다음과 같이 설정합니다.
다음은 한 화훼 사업자(부가세 면세사업자)가 식물 모종과 화병을 판매하는 예제입니다.

- 식물 모종: **부가세 면세 상품**, 모종 당 11,000원
- 화병: **부가세 과세 상품**, 병당 22,000원

### CASE 01. 고객이 모종(면세 상품)만 구매하는 경우

고객이 11,000원짜리 모종 1단을 구매할 때 총 결제 금액은 11,000원이며 그 중 면세항목 상품의 금액 합계는 11,000원이므로 다음과 같이 설정합니다.

```ts title="JavaScript"
IMP.request_pay(
  {
    amount: 11000, // 결제금액
    tax_free: 11000, // 면세공급가액
    // ...
  },
  function (rsp) {
    // ...
  },
);
```

위와같이 결제 속성을 지정하면 11,000원 전액이 면세적용되며 발급되는 매출전표에는 다음과 같은 내용을 확인할 수 있습니다.
(_PG사에 따라 용어가 다를 수 있습니다_)

- 면세 공급가액 : 11,000원
- 부가가치세 : 0원

### CASE 02. 고객이 화병(과세 상품)만 구매하는 경우

고객이 22,000원짜리 화병 1병을 구매할 때 총 결제 금액은 22,000원이며 그 중 면세항목 상품의 금액 합계는 0원이므로 다음과 같이 설정합니다.

```ts title="JavaScript"
IMP.request_pay(
  {
    amount: 22000, // 결제금액
    tax_free: 0, // 면세공급가액
    // ...
  },
  function (rsp) {
    // ...
  },
);
```

위와같이 결제 속성을 지정하면 22,000원에 대해 10%의 부가가치세가 적용되며, 발급되는 매출전표에는 다음과 같은 내용을 확인할 수 있습니다.

- 일반공급가액 : 20,000원
- 부가가치세 : 2,000원

### CASE 03. 고객이 모종과 화병을 동시(면세 및 과세 상품)에 구매하는 경우

고객이 모종 3단과 화병 1병을 구매할 때 총 결제 금액은 55,000원(33,000원 + 22,000원)이며 그 중
면세항목 상품의 금액 합계는 33,000원(모종 3단의 금액 합계)이므로 다음과 같이 설정합니다.

```ts title="JavaScript"
IMP.request_pay(
  {
    amount: 55000, // 결제금액
    tax_free: 33000, // 면세공급가액
    // ...
  },
  function (rsp) {
    // ...
  },
);
```

위와같이 결제 속성을 지정하면 55,000원 중 22,000원(과세금액)에 대해 10%의 부가가치세가 적용되며
33,000원에 대해 면세적용되어 발급되는 매출전표에는 다음과 같은 내용을 확인할 수 있습니다.

- 일반공급가액 : 20,000원
- 면세공급가액 : 33,000원
- 부가가치세 : 2,000원


# https://developers.portone.io/sdk/ko/v1-mobile-sdk/readme

---
title: 모바일 SDK 레퍼런스
description: 포트원에서 제공하는 네이티브 모바일 SDK(플러그인)를 통해 포트원 서비스를 연동할 수 있습니다.
targetVersions:
  - v1
versionVariants:
  v2: /sdk/ko/v2-mobile-sdk/readme
---

포트원은 고객사에서 보다 쉽게 서비스를 이용하실 수 있도록 프로그래밍 언어 / 플랫폼 별 SDK 를 오픈소스로 운영하고 있습니다.

공식 지원중인 JavaScript SDK / REST API 이외에 이와 같은 오픈소스 프로젝트들은 현재 공식 지원 범위에 포함되지 않지만, 추후 포트원 V2 모듈을 비롯해 더욱 다양한 프로그래밍 언어 및 플랫폼 SDK 를 공식 지원하며 가장 쉬운 결제 연동 경험을 위한 지원을 전폭적으로 확대할 예정입니다.

앞으로 공식 지원을 통해 제공될 SDK 또한 모두 오픈소스로 운영될 예정이니, 자유로운 참여를 부탁드립니다.

## iOS/Android <a href="#iosandroid" id="iosandroid" />

- [iOS](https://github.com/iamport/iamport-ios)
- [Android](https://github.com/iamport/iamport-android)

## Cross-Platform Frameworks <a href="#cross-platform-frameworks" id="cross-platform-frameworks" />

- [Flutter](https://github.com/iamport/iamport-flutter)
- [Ionic](https://github.com/iamport/iamport-ionic)
- [React Native](https://github.com/iamport/iamport-react-native)
- [Cordova](https://github.com/iamport/iamport-cordova)
- [Capacitor](https://github.com/iamport/iamport-Capacitor)

## REST API Client <a href="#restapiclient" id="restapiclient" />

- [REST API Client](https://github.com/iamport/iamport-rest-client)


# https://developers.portone.io/opi/ko/console/guide/api-keys

---
title: 내 식별코드, API Keys
description: ''
targetVersions:
  - v1
---

## 내 식별코드 , API Keys

## 위치

![](</gitbook-assets/ko/Untitled (8).png>)

`상점 계정 관리` 페이지 우측 상단에 `내 식별코드 , API Keys` 를 누르시면 고객사의 식별 코드 및 api 정보를 확인 및 수정하실 수 있습니다.

## 고객사 식별 코드

![](</gitbook-assets/ko/Untitled (9).png>)

포트원에서 제공하는 모듈을 사용할 때 고객사를 구분하기 위해, 관리자 페이지 가입과 동시에 자동 발급되는 고유한 문자입니다.

[고객사 식별코드란 무엇인가요?](https://portone.gitbook.io/docs/ready/3.)

## Rest API Key , API Secret Key

[REST API 키 와 secret은 어떻게 사용하나요?](https://portone.gitbook.io/docs/ready/3.)

`재발급` 버튼을 통해 api secret key 를 다시 발급받으실 수 있습니다. 해당 기능을 사용하시면 기존 secret 이 무효처리 되므로 확인 후 실행해 주세요.

## 티어코드

하위상점 설정시 티어코드를 임의로 발급해 주신뒤 `imp.init` 대신 `IMP.agency('고객사 식별코드', '티어코드')` 에서 호출해줍니다.\
\
[티어코드란 무엇인가요?](https://portone.gitbook.io/docs/tip/agency-and-tier)


# https://developers.portone.io/opi/ko/console/guide/connect

---
title: 결제 연동 하기
description: ''
targetVersions:
  - v1
---

## 결제 연동 체계

- 결제 채널이란: 결제의 객체를 칭하는 명칭으로써 결제 대행사가 발급해준 credential 단위로 이루어
  집니다. 해당 결제 채널을 고객사가 직접 사용하시거나 고객사의 하위상점에게 할당해 주실 수 있습니다.

- 실연동 : 전자 결제 신청하기를 통해서 선택 및 계약하신 결제대행사의 credential을 입력하시면 해당
  결제 채널을 생성하여 sdk `imp.request_pay()` 에 해당 정보를 넣고 실 결제를 진행하실 수 있습니다.

- 테스트 연동: 네이버 페이, 토스, 페이팔을 제외한 모든 결제대행사의 테스트 credential을 사용하실 수
  있습니다. 네이버 페이, 토스, 페이팔은 직접 결제대행사로부터 발급 받으시길 바랍니다.

- 결제 연동 화면에서는 고객사 및 고객사 소속의 하위상점 별 해당되는 위 정보를 등록, 확인, 수정 하실
  수 있습니다.

## 웹훅 관리

웹훅은 가상계좌, 정기결제를 이용하시는 경우 필수 설정사항이지만,그 외에도 안정적인 결제서비스 구축을 위해 강력히 권장드리는 기능입니다. 설정 방법은 다음과 같습니다.

[이미지 링크](<https://developers.portone.io/gitbook-assets/ko/Screen Shot 2022-11-18 at 2.56.49 PM.png>)



- 웹훅(Notification)발송 공통 URL : 웹훅통지를 받으실 고객사 서버의 url을 기재해주세요.
- 호출테스트 : 기입하신 url로 수신받으실 수 있는지 호출 테스트를 해보실 수 있습니다.

## 테스트 연동 관리

[이미지 링크](<https://developers.portone.io/gitbook-assets/ko/Screen Shot 2022-11-18 at 3.06.39 PM.png>)



- 테스트 연동 관리에서 고객사가 결제 테스트를 하실 수 있는 각 결제대행사 별 테스트 상점아이디 와 그
  외 credential 정보를 제공합니다.

- 특정 결제대행사의 결제를 테스트하기 위해서는 `imp.request_pay(pg = '테스트 PG.테스트 상점아이디')`
  방식으로 호출하시면 됩니다.

- 페이팔, 네이버페이 와 같은 결제대행사는 직접 해당 결제대행사로 부터 테스트 상점아이디를 발급받으신
  뒤 해당 결제대행사의 테스트 카드에 `정보 수정` 을 누른뒤 입력 및 등록 하신후 사용하실 수 있습니다.

## 실 연동 관리

[이미지 링크](<https://developers.portone.io/gitbook-assets/ko/Screen Shot 2022-11-18 at 3.07.49 PM.png>)



[이미지 링크](<https://developers.portone.io/gitbook-assets/ko/Screen Shot 2022-11-18 at 3.08.11 PM.png>)



- 실 연동 채널 카드는 전자 결제 신청하기를 통해 신청하신 결제대행사 결제 형태에 따라 각각 생성할 수
  있습니다. 즉 결제대행사로부터 발급 받으신 상점아이디 및 그 외 credential을 입력하실 수 있는 카드를
  모듈에 맞게 생성 하실 수 있습니다. 생성된 카드에 `정보 수정` 을 누른뒤 정보를 입력 및 저 하신뒤
  해당 결제채널 정보로 실결제를 진행하실 수 있습니다.

- 동일한 pg 사더라도 결제 수단이나 결제 유형에 따라 상이한 모듈을 생성하실 수 있습니다. 이는 각 채널
  카드에 상점아이디와 그 외 credential 을 입력하셔야 합니다.
  - 결제 유형: 결제창 방식의 일반결제, 간편결제, 정기결제 와 api 호출 방식의 키인 결제와 정기결제에
    따라서 동일 결제대행사 내에서 상점아이디가 개별로 발급됩니다.

  - 결제 수단: 동일 pg사여도 결제 수단에 따라 상점아이디가 개별 발급되는 경우가 있습니다.

  - 그 외에도 계약 과정에서 복수 MID 발급을 신청하신 경우가 있습니다.

## 추가 설정 관리

![](</gitbook-assets/ko/image (171).png>)

- 추가 설정 관리 화면에서는 `화이트리스트 설정` 과 `내 식별코드, API Keys` 를 확인하실 수 있습니다.

- 화이트 리스트 : 포트원 관리자의 IP보안설정에 입력하는 값은 IP가 아닌 CIDR 블록방식 으로 입력하셔야
  합니다. 예를 들어 입력 하시고자 하는 IP가 `1.1.1.1` 이라고 가정 했을때 해당 IP 하나만 허용하고
  싶으시다면 `1.1.1.1/32`로 작성 하셔야 하고 만약 `1.1.1.1` \~ `1.1.1.255`까지의
  IP대역을 모두 허용하고 싶으시다면 `1.1.1.0/24` 형태로 작성하시면 됩니다. 보다
  자세한 표기법은 [RFC4632](https://tools.ietf.org/html/rfc4632) 를 참고부탁드립니다.

![](</gitbook-assets/ko/image (338).png>)


# https://developers.portone.io/opi/ko/console/guide/list

---
title: 결제 내역
description: 결제가 이루어진 거래내역을 조회할 수 있는 메뉴입니다.
targetVersions:
  - v1
---

## 결제내역 체계

결제내역 화면에서는 결제가 이루어진 내역을 확인할 수 있는 화면입니다.

- 결제가 시도된 날짜의 범위를 필터할 수 있는 캘린더 필터
- 결제내역의 특정 데이터를 지정하여 혹은 미지정시 전체 데이터를 통합검색을 할수 있는 통합검색
- 결제 상태, 수단, 대행사, 유형, 모드 를 지정하여 검색 할 수 있는 필터
- 검색된 내역 결과를 상태별로 통계화 한 상태별 결제건
- 결제 상태, 고객정보, 결제 수단, 결제 대행사, 결제 금액, 구분, 요청시각, 완료시각을 확인할 수 있는 결제내역 리스트 뷰
- 해당 내역의 특정 결제건의 우측 코너를 클릭하여 MID, UID 복사 및 결제취소 기
- 해당 내역의 특정 결제건을 클릭하여 확인할 수 있는 결제내역 상세정보
- 해당 내역의 특정 결제건을 클릭하여 수행 할 수 있는 결제 취소 기능
- 해당 내역의 특정 결제건을 클릭하여 수행 할 수 있는 웹훅 재전송 기능
- 검색된 내역의 총 거래액 - 총 환불액의 계산을 통하여 통화별로 확인 할 수 있는 총 매출액 기능
- 기본 결제내역 값들과 추가적으로 고객정보, 결제 대행사 정보, 카드결제 정보, 계좌결제 정보 를 선택하여 내역을 다운받을 수 있는 엑셀 다운로드 기능

위 기능들로 구성되어 있는 화면입니다.

## 캘린더 필터

![](</gitbook-assets/ko/Screen Shot 2022-06-20 at 5.23.19 PM.png>)

- 결제 요청시각 기준으로 검색하고 싶은 결제 내역의 시작 날짜 및 시각과 끝 날짜 및 시각과 끝을 지정 합니다.
  - 결제 요청이란 고객사의 고객이 결제를 시도한 시점입니다.
  - 따라서 결제 환불 및 완료 시간 기준으로는 해당 날짜 기간안 이후로 벗어 날 수 있습니다.

- 년, 월, 일, 시, 분 단위까지 지정하실 수 있습니다.

- 편의를 위해 오늘, 어제, 과거 7일, 30일, 90일 버튼을 누르셔서 빠르게 세팅 하실 수 있습니다.

- 캘린더 UI를 통해서가 아니라 직접 기간을 입력하셔서 사용하실 수 있습니다.

## 통합 검색

![](</gitbook-assets/ko/Screen Shot 2022-06-20 at 5.36.36 PM.png>)

- 결제내역의 특정값을 지정하시거나 모든 결제관련 값에 대해서 직접 입력하신 값을 검색하는 기능입니다.

- 통합검색 필터는

  - 포트원 거래번호
  - 고객사 거래번호
  - 카드사 승인번호
  - 고객 이름
  - 고객 휴대폰번호
  - 고객 이메일
  - 결제대행사 승인번호
  - 카드번호
  - 상점아이디
  - 결제환경
  - 실시간 계좌 은행
  - 가상계좌 은행
  - 계좌번호
  - 입금자명
  - 현금영수증 발급번호
  - 고객 주소
  - 취소 사유
  - 결제환경 상세
  - 주문명

  으로 이루어져 있습니다.

- 검색 로직은 like %value 입니다. 즉 값의 맨 앞에서부터 일치하는 값을 리턴합니다.
  - 추후에 주문명과 고객 주소는 like %value%로 업데이트 될 예정입니다.

## 필터

![](</gitbook-assets/ko/Screen Shot 2022-06-20 at 6.27.42 PM.png>)

- 결제상태, 결제수단, 결제대행사, 결제 유형, 결제 모드 를 필터하신뒤 결제 내역을 검색 하실수 있습니다.
  - 결제상태: 전체, 결제예정, 결제완료, 전체취소, 부분취소, 결제실패
  - 결제수단: 사용하시는 결제 수단 값
  - 결제 대행사: 사용하시는 결제 대행사 값
  - 결제유형: 전체, 정기결제, 일반결제
  - 결제모드: 전체, 실결제, 테스트 결제

## 상태별 결제 통계

![](</gitbook-assets/ko/Screen Shot 2022-06-20 at 6.37.46 PM.png>)

- 전체, 결제완료, 결제예정, 결제실패, 결제취소 로 이루어져있습니다. 검색된 전체 내역을 상태마다 분류하여 통계를 보여줍니다.
  - 결제 실패는 부분 취소와 전액 취소가 포함된 상태값입니다.

## 결제내역 리스트

![](</gitbook-assets/ko/image (277).png>)

- 결제내역 리스트뷰는 캘린더 필터, 통합검색, 필터검색에 따라 검색된 결제 내역들을 보여줍니다.

- 캘린더 필터, 통합검색, 필터검색을 설정하지 않은체 나오는 기본 내역은 현 일자부로 6개월치 전체
  결제내역 데이터를 보여줍니다.

- 보여지는 값들은 결제상태, 고객정보, 결제수단, 결제대행사, 결제금액, 구분, 요청시각, 승인시각
  입니다.
  - 고객정보는 결제시 sdk에 입력하신 고객의 이름, 이메일, 전화번호 이며 해당 순서대로 값이 있는
    순으로 보여집니다.

  - 구분은 일반결제, 정기결제, 테스트결제를 표기하며 일반결제는 빈값으로 표기됩니다.

- 요청시각 및 승인시각은 내림차순으로 보여지며 요청시각 기준으로 보일지 승인시각 기준으로 보일지는
  해당 값을 클릭하신뒤 선택하실 수 있습니다.

- 결제내역 리스트의 특정 결제건의 우측 을 누르시면 고객사 거래번호(merchant\_uid) 및 포트원 거래번호
  (imp\_uid) 를 복사하실 수 있고 결제완료, 부분취소 건에 한해서 결제취소를 하실 수 있습니다.

## 결제내역 상세정보

![](</gitbook-assets/ko/Screen Shot 2022-06-20 at 7.06.01 PM.png>)

- 결제내역 상세정보는 고객정보 섹션과 결제정보 섹션으로 나눠집니다.

- 고객정보는 고객사가 sdk 로 전달하시는 결제하는 고객의 이름, 전화번호, 이메일, 주소 입니다.

- 결제 정보는

  - 결제상태

  - 포트원 거래번호

  - 결제수단
    - 신용카드 일경우 매입사 및 마스킹된 카드번호가 보여집니다.
    - 가상계좌일 경우 계좌 은행, 예금주, 계좌번호, 입금시간이 보여집니다.
    - 계좌이체 일 경우 계좌 은행 이 보여집니다.
    - 휴대폰 소액 결제일 경우 통신사가 보여집니다.

  - 총결제금액
    - 총 결제금액은 주문금액 - 할인금액 입니다.

  - 주문금액

  - 공급가액(부가세)

  - 포인트 결제금액
    - 포인트 결제금액은 간편결제사 및 결제 대행사의 포인트를 지칭합니다.

  - 할인금액
    - 할인금액은 pg사 전문에서 내려주는 값입니다. pg사마다 유무가 다를 수 있는점 유의해 주시기 바랍니다.

  - 카드사 승인번호

  - 상점 아이디

  - 결제대행사

  - 결제대행사 승인번호
    - 결제대행사 승인번호란 결제대행사에서 부여하는 결제 id 입니다.

  - 결제환경
    - 결제환경이란 결제된 기기 및 웹/앱의 환경값을 파씽한 값입니다.

  이 있습니다.

## 결제 취소

![](</gitbook-assets/ko/Screen Shot 2022-06-20 at 8.28.25 PM.png>)

![](</gitbook-assets/ko/Screen Shot 2022-06-20 at 8.28.37 PM (1).png>)

- 결제내역 상세 내에 결제 취소를 하실 수 있습니다. 해당 페이지는 결제 완료 및 부분취소 인 결제건에 대해서는 바로들어가실 수 있습니다.

- 기본 세팅은 전액 환불로 되있으며 부분환불을 원하시는 경우는 환불 금액을 수정해주시거나 부분환불 클릭후 수정해주신뒤 하단의 결제취소 버튼을 누르면 됩니다.

- 취소를 입력하시면 포트 데이터 및 pg사에게 취소 사유 값이 저장 및 전달됩니다.

- 해당 취소건에 면세 공급가액이 포함되있을경우 해당되는 면세 공급가액 취소분을 입력하시면 됩니다.

- 관리자 콘솔에서 취소를 하셨을시 고객사의 db에 상태 업데이트를 위해 웹훅 전송을 하게됩니다.

- 가상계좌의 경우 환불계좌 정보를 추가 입력하실 수 있습니다.
  - 환불계좌 은행
  - 환불계좌 계좌번호
  - 환불계좌 예금주

## 웹훅 재발송

![](</gitbook-assets/ko/Screen Shot 2022-06-20 at 8.44.01 PM.png>)


# https://developers.portone.io/opi/ko/extra/confirm-process/readme-v1

---
title: 컨펌 프로세스
description: 결제요청의 주체를 고객사 서버로 가져갈수 있는 서비스 입니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/extra/confirm-process/readme-v2
---

## 해당 서비스는 결제요청직전에 고객사 측에 결제의사를 최종적으로 확인하는 서비스입니다.

![](</gitbook-assets/ko/image (259).png>)

(이미지 첨부: 컨펌 프로세스)

<div class="hint" data-style="info">

**해당 서비스가 반드시 필요한 고객사는 아래와 같은 경우입니다.**

- 판매 제품이 재고적으로 소량인 경우
- 선착순방식으로 결제가 진행되는 경우
- 결제 요청전 마지막으로 고객사에서 처리하고 싶은 업무처리가 있는 경우

</div>

(이미지 첨부: 컨펌 프로세스)

## 판매 제품이 재고적으로 소량인 경우

고객사 판매 제품이 명품 또는 매우 인기가 높은 품목인 경우 결제 시 동시 접속자로 인해 경쟁이
치열해지는 경우 결제 직전 고객사 서버에서 재고수량을 한번더 확인하고 수량이 있는 경우에만 결제가
요청되도록 처리 할 수 있습니다. 만약 컨펌 프로세스를 설정하지 않는 경우 결제는 되었지만 재고가
없어서 제품 발송을 약속된 일자에 처리하지 못하거나 혹은 이로인해 취소처리가 발생하여 고객 결제 만족
경험도를 떨어트리는 상황이 발생됩니다.

![](</gitbook-assets/ko/image (217).png>)

## 선착순 방식으로 결제가 진행되는 경우

마라톤 참가 신청, 인기 콘서트 티켓팅, OO Day 와 같은 특별 할인행사 처럼 특정 시간에 결제가
활성화되는 결제방식을채택하고 있는 고객사인 경우 특정시간에 매우 많은 고객이 동시에 결제 요청이
유입되며 이에따라 결제 요청 직전에 고객사 서버에서 재고수량 파악이 필요합니다.

![](</gitbook-assets/ko/image (164).png>)

## 결제 직전 고객사에서 업무로직을 한번 더 수행하고 싶은 경우

이밖에 다른 사유로 고객사 측에서 결제 직전 자체업무 처리가 필요한 경우(결제 직전 고객사 서버 헬스체크 등) 해당 서비스를 이용합니다.

![](</gitbook-assets/ko/image (262).png>)

<div class="hint" data-style="info">

**컨펌 프로세스 신청 방법**

기술지원 메일(<support@portone.io>)로 **고객사 식별코드**를 기재하여 메일 발송

(이미지 첨부: 포트원 콘솔 내 고객사 식별코드 확인 예시)

포트원 콘솔 로그인 후 \[결제연동] → \[식별코드 ・ API Keys] → \[V1 API] 페이지에서 확인할 수 있습니다.

</div>

## 컨펌 프로세스 이용방법

컨펌 프로세스 이용시 고객사는 Javascript request\_pay() 함수 호출시 **confirm\_url** 파라미터를
정의하고 해당 파라미터의 고객사 EndPoint URL을 설정합니다.

```json title="JavaScript SDK"
{
  //...중략
  "confirm_url": "고객사 EndPoint URL 기재"
  //...중략
}
```

해당 URL이 설정되면 당사에서 결제 요청 직전 해당 URL 로 **HTTP 통신**이 진행되며 아래와 같은 Data가 POST로 요청됩니다. (Timeout : **10s**)

> `imp_uid`: 결제번호
>
> `merchant_uid`: 주문번호
>
> `amount`: 결제 금액

해당 요청에 대한 고객사 응답으로 HTTP Status **200** 응답을 주시는 경우 결제를 요청합니다.

(**200응답이 아닌 경우 결제가 진행되지 않습니다**.(**`실패처리`**)

**200** 외 응답을 통해 승인을 막음과 동시에 해당 사유를 함께 기록하고싶으실 경우 요청 응답 body에 `reason` 파라미터를 json 형태로 전달해주시면 되며

```json
{
  "reason": "재고 부족"
}
```

전달주신 `reason` 값이 `고객사 요청에 의해 결제를 중단합니다. (상세사유 : %s)`의 상세사유에 추가되어
결제 실패 사유(fail\_reason)으로 기록됩니다. (기본값 : `알 수 없음`)


# https://developers.portone.io/opi/ko/extra/link-pay/readme-v1

---
title: 결제 URL 생성하기
description: 결제 URL 생성 API 사용법을 안내합니다.
targetVersions:
  - v1
---

## 1. 개요

본 문서는 포트원에서 제공하는 결제 URL 생성 API 명세를 기술합니다. 포트원 서비스를 이용중인 고객사는
해당 서비스를 제약없이 이용 가능합니다.

## 2. API URI

해당 API는 REST 방식으로 구현되어 인터넷 웹 서비스의 형태로 제공됩니다.

> **HTTP Method : POST**
>
> **Content-Type : application/json;charset=UTF-8**

<div class="tabs-container">

<div class="tabs-content" data-title="운영">

```http title="URI"
POST https://api.iamport.co/api/supplements/v1/link/payment
```

</div>

</div>

## 3. 설명

API를 이용하여 결제가 가능한 URL을 생성하고, 고객이 해당 URL을 클릭하면 결제를 진행할 수 있습니다.
PG사가 지원하는 모든 결제수단에 대해 지원이 가능합니다. 만약 설정한 시간이 만료된 경우 해당 URL을
클릭하더라도 결제가 진행되지 않습니다.

## 4. 요청 메세시 상세

**POST** https\://api.iamport.co/api/supplements/v1/link/payment

_결제URL을 생성합니다._

HTTP Method : POST

Content-Type : Application.json;charset=UTF-8

### Parameters

#### Body

- title: string

  **브릿지 페이지 노출문구**

- user\_code: string

  **고객사식별코드**

- amount: integer

  **결제금액**

- merchant\_uid: string

  **주문번호**

- name: string

  **제품명**

- tax\_free?: integer

  **면세금액**

- currency: string

  **통화구분코드**

- language?: string

  **결제대행사 결제창 표기언어**

  - ko
  - en

- buyer\_name?: string

  **주문자명**

- buyer\_tel: string

  **주문자연락처**

- buyer\_addr?: string

  **주문자주소**

- buyer\_email?: string

  **주문자 이메일주**

- buyer\_postcode?: string

  **주문자 우편번호**

- custom\_data?: object

  **에코항목**

- notice\_url?: string

  **결제결과(성공거래)를 수신받을 URL(웹훅)**

- expired\_at: string

  **페이지 만료시각**

- display\_language?: string

  **브릿지 페이지 표기언어**

  - ko : 한국어
  - en : 영어

- pay\_methods: object\[]

  - pg?: string

    pg사 구분코드

    [pg 파라미터 가이드 바로가기](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq?v=v1#pg-string)

  - pay\_method?: string

    결제수단 구분코드

    [pay\_method 가이드 바로가기](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq?v=v1#pay_method-string)

  - label?: string

    브릿지페이지 결제수단 표현값 ex. 신용카드

- direct?: object

  - pg?: string

    pg사 구분코드 ex. paymentwall.mid

    [pg 파라미터 가이드 바로가기](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq?v=v1#pg-string)

  - pay\_method?: string

    결제수단 구분코드. (하나의 결제수단만 선택 가능합니다.)

    [pay\_method 가이드 바로가기](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq?v=v1#pay_method-string)

### Responses

**200: OK** - 성공

```json title="json"
{
  "shortenedUrl": "https://impay.link/91e8f8cc" //결제링크 생성
}
```

### 요청 JSON 전문 예시

```json title="일반 호출"
{
  "payment_info": "{\"title\":\"테스트고객사\",\"user_code\":\"imp68124833\",\"amount\":10000,\"merchant_uid\":\"merchant_1630665784552\",\"name\":\"결제링크 테스트\",\"tax_free\":\"면세공급가액\",\"currency\":\"KRW\",\"language\":\"ko\",\"buyer_name\":\"\",\"buyer_tel\":\"\",\"buyer_addr\":\"\",\"buyer_email\":\"\",\"buyer_postcode\":\"\",\"custom_data\":\"json_object\",\"notice_url\":\"결제 결과를 받을 url\",\"pay_methods\":[{\"pg\":\"INIpayTest\",\"pay_method\":\"card\",\"label\":\"신용/체크카드\"},{\"pg\":\"INIpayTest\",\"pay_method\":\"naverpay\",\"label\":\"네이버페이\"},{\"pg\":\"INIpayTest\",\"pay_method\":\"kakaopay\",\"label\":\"카카오페이\"},{\"pg\":\"INIpayTest\",\"pay_method\":\"phone\",\"label\":\"핸드폰 소액결제\"},{\"pg\":\"INIpayTest\",\"pay_method\":\"trans\",\"label\":\"계좌이체\"},{\"pg\":\"INIpayTest\",\"pay_method\":\"vbank\",\"label\":\"가상계좌\"}]}",
  "expired_at": 1634324016
}
```

```json title="PG사 결제창 다이렉트 호출"
{
  "payment_info": "{\"title\":\"테스트고객사\",\"user_code\":\"imp68124833\",\"amount\":1000,\"merchant_uid\":\"merchant_16306657845522\",\"name\":\"결제링크 테스트\",\"tax_free\":\"면세공급가액\",\"currency\":\"KRW\",\"language\":\"ko\",\"buyer_name\":\"\",\"buyer_tel\":\"\",\"buyer_addr\":\"\",\"buyer_email\":\"\",\"direct\":{\"pg\":\"tosspayments\",\"pay_method\":\"card\"}}",
  "expired_at": 1634324016
}
```

### 결제(브릿지) 페이지 화면 예시

<div class="tabs-container">

<div class="tabs-content" data-title="결제(브릿지) 페이지">

**결제 URL API 요청이 성공한경우 응답 URL 렌더링 화면 예시입니다.**

(이미지 첨부: 결제 URL 페이지 화면)

</div>

<div class="tabs-content" data-title=" 만료(브릿지) 화면">

**결제 URL 페이지 만료시각(expire\_at)이 지난 경우 표시되는 화면입니다.**

(이미지 첨부: 결제 URL만료 화면)

</div>

</div>

## 5.결제 URL 비활성화 방법

**응답**(**shortenedUrl**) **URL 마지막 String 을 결제 URI API 주소 뒤에 삽입하여 호출**

> **HTTP Method :** **PUT**

<div class="hint" data-style="success">

**API 응답이 아래와 같은경우**

```json
{ "shortenedUrl": "https://impay.link/4bdf239e" }
```

`https://api.iamport.co/api/supplements/v1/link/payment/4bdf239e`

위와 같이 호출시 결제 URL 즉시 비활성화 처리됩니다.

</div>

<div class="hint" data-style="danger">

**결제결과 획득방법**

**결제 URL API로 진행된 결제는 오직 웹훅으로만 결제 결과를 수신받을수 있습니다.**

웹훅은 결제가 성공한 경우에만 발송되기 때문에 해당 서비스를 이용하실때는 오직 승인된 결과만 받아보면문제가 없는 서비스에 한하여 해당 API를 이용하시기 바랍니다.

</div>


# https://developers.portone.io/opi/ko/extra/plugins/readme-v1

---
title: 플러그인을 통해 포트원 이용하기
description: 여러 플랫폼의 플러그인을 통해 포트원을 이용하는 방법을 안내합니다.
targetVersions:
  - v1
---



# https://developers.portone.io/opi/ko/extra/promotion/refund

---
title: 프로모션 결제 취소하기
description: 프로모션을 적용하여 승인된 결제건들에 대하여 취소/환불하는 방법을 안내합니다.
targetVersions:
  - v1
---

## 프로모션 결제 취소하기

프로모션이 적용된 결제에 대해 결제 취소가 가능합니다.
결제 취소 시 차감되었던 프로모션 예산은 다시 정책에 알맞게 조정되어 취소 후 잔여 금액에 적용되어야하는 프로모션 금액만큼을
제한 만큼 복구됩니다.

<div class="hint" data-style="info">

콘솔에서 설정한 **프로모션 예산 미복구** 옵션에 따라 복구 여부가 작동합니다.

예산 복구를 원하지 않으실 경우 프로모션 예산 미복구 옵션을 활성화 시켜주세요.

</div>

<div class="hint" data-style="danger">

결제 취소 이후 잔여 요청 금액이 프로모션 정책에 위반되고 이로 인해 취소 이후 잔여 승인 금액이 현재 잔여 승인 금액보다 커지는 경우가 존재합니다.

해당 경우 취소가 불가능합니다.

- ex) `10,000원 이상 결제 시 10% 할인` 프로모션으로 10,000원 결제 이후 500원 취소 요청.
  취소 시 프로모션 정책에 위반되어 잔여 승인 금액이 9,500원이어야하지만 최초 실 승인 금액이 9,000원이므로 취소 불가.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

### 예제 코드

```ts
// imp_uid, merchant_uid, amount, checksum, retain_promotion 등 정보를 전달받습니다.
// 포트원 결제 취소 API 호출
const onetimeResponse = await fetch("https://api.iamport.kr/payments/cancel", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    imp_uid: `imp_XXXXXXXXXXXX`, // 포트원 고유 주문번호
    merchant_uid: `order_id_XXXXXXXXXXXX`, // 고객사 주문번호
    amount: number, // 취소 요청 금액
    checksum: number, // 현 시점 취소 가능한 잔액
    reason: "단순 변심", // 취소 사유
    retain_promotion: boolean, // 프로모션 혜택 유지 여부
    // 중략...
  }),
});
```

### 주요 파라미터

- imp\_uid: string

  **포트원 고유 주문번호**

  - 취소할 결제건의 포트원 고유 주문번호를 전달합니다.
  - `imp_uid`와 `merchant_uid` 둘 중 하나는 필수입니다.

- merchant\_uid: string

  **고객사 주문번호**

  - 취소할 결제건의 결제 당시 설정한 고객사의 주문번호를 전달합니다.
  - `imp_uid`와 `merchant_uid` 둘 중 하나는 필수입니다.

- amount?: integer

  **결제 취소 요청 금액**

  - (부분)취소 요청 금액을 전달합니다.
  - 미입력시 잔여 취소 가능 금액만큼 전체 취소됩니다.

  <div class="hint" data-style="danger">

  취소 요청 금액은 프로모션 적용 금액을 고려하지 않고 전달합니다.

  ex) 10,000원 결제에 10% 할인 프로모션이 적용된 결제(실 승인 금액은 9,000원)에 대해 전체 취소 시 `amount`는 `10000`으로 전달.

  </div>

- checksum?: integer

  **현 시점 취소 가능한 잔액**

  - 현 시점 취소 가능한 잔액을 전달합니다.
  - 고객사의 계산 상 남아있는 잔여 금액과 포트원 내부 데이터 상 잔여 금액을 비교하며 불일치할 시 취소를 진행하지 않습니다.

  <div class="hint" data-style="danger">

  취소 가능한 잔액 역시 프로모션 적용 금액을 고려하지 않고 전달합니다.

  ex) 20,000원 결제에 10% 할인 프로모션이 적용된 결제(실 승인 금액은 18,000원)에 대해 `amount`를 `10000`로 하여 1차 부분취소 완료.(실 취소 승인 금액은 9,000원)

  2차 부분 취소 시 `checksum`은 `10000`으로 전달.

  </div>

- reason?: string

  **취소 사유**

- retain\_promotion?: boolean\*\*

  **프로모션 혜택 유지 여부**

  - 프로모션 결제 취소 이후 잔여 금액이 프로모션 정책에 위반되더라도 정책을 계속해서 유지할지 여부를 전달합니다. (default: `false`)

  <div class="hint" data-style="warning">

  프로모션 할인이 적용된 거래 건을 여러번 부분 취소하는 경우 처음 선택한 취소 옵션으로만 가능합니다. 예를 들어 \[프로모션 혜택 유지]로 처음 부분 취소한 경우 동일 거래 건에 대해 부분 취소를 진행하는 경우 \[프로모션 혜택 유지] 옵션으로만 취소가 가능합니다.

  </div>

  <details>

  <summary> 프로모션 혜택 유지 여부 예시 </summary>

  - 프로모션 혜택 유지 (`true`): 결제 부분 취소시 잔여 결제 금액이 할인 적용 기준 금액보다 적더라도 프로모션 할인 혜택이 그대로 유지됩니다. 할인 혜택을 동일한 수준으로 유지하기 위해 기존에 적용된 할인 조건을 할인율로 환산하여 적용하게 됩니다.
    - ex1) 프로모션 할인 조건이 `5천원 이상 결제시 10% 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5400원이 실제 결제됩니다. 이 때, 2000원 부분 취소시 **프로모션 혜택 조정** 옵션을 선택한 경우 프로모션 조건에 부합하지 않아 실제 1400원이 결제 취소 요청되며, 결제 완료 금액은 4000원이 됩니다.
    - ex2) 프로모션 할인 조건이 `5천원 이상 결제시 1000원 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5000원이 실제 결제됩니다. 이 때, 2000원 부분 취소시 **프로모션 혜택 조정** 옵션을 선택한 경우 프로모션 조건에 부합하지 않아 실제 1000원이 결제 취소 요청되며, 결제 완료 금액은 4000원이 됩니다.

  - 프로모션 혜택 조정 (`false`) : 결제 부분 취소시 잔여 결제 금액이 할인 적용 기준 금액보다 적은 경우 잔여 결제 금액에 맞추어 프로모션 할인 금액이 차감되어 적용됩니다.
    - ex1) 프로모션 할인 조건이 `5천원 이상 결제시 10% 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5400원이 실제 결제됩니다. 이 때, 2000원 부분 취소시 **프로모션 혜택 유지** 옵션을 선택한 경우 실제 1800원이 결제 취소 요청되며, 결제 완료 금액은 3600원이 됩니다. (주문금액 6000원에서 2000원 부분 취소시 주문금액은 4000원이며 기존 할인 조건인 10% 할인이 유지되어 실 결제 금액은 3600원이 됩니다.)
    - ex2) 프로모션 할인 조건이 `5천원 이상 결제시 1000원 할인`일 때 6000원 결제 요청시 프로모션 할인이 적용되어 5000원이 실제 결제됩니다. 이 때, 2000원 부분 취소시 **프로모션 혜택 유지** 옵션을 선택한 경우 실제 1800원이 결제 취소 요청되며, 결제 완료 금액은 3200원이 됩니다. (본 예시에서 기존에 적용된 할인 조건인 5천원 이상 결제시 1000원 할인은 20% 할인으로 환산됩니다. 주문금액 6000원에서 2000원 부분 취소시 남은 주문금액은 4000원이므로, 취소 이후 결제 완료 금액은 3200원이 되고 실제 취소 금액은 1800원이 됩니다.)

  </details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/integration/checklist/readme-v1

---
title: 오픈 전 체크리스트
description: 결제 오픈전 자가진단을 해볼수 있는 오픈 전 체크사항 리스트 입니다.
targetVersions:
  - v1
---

💡 서비스를 운영 시스템에 적용하기 전에 놓치기 쉬운 항목을 체크하여 운영장애를 사전에 방지합니다.

## ✍️ 서비스 공통

- **포트원 콘솔의 시스템설정이 운영정보로 설정**
  - [ ] PG사상점아이디 / PG상점 Secret 을 설정 하였습니다.
  - [ ] 테스트모드를 OFF로 설정 하였습니다.
  - [ ] 웹훅(Notification)발송 공통 URL을 운영정보로 설정 하였습니다.
  - [ ] IP보안설정이 운영서버 정보로 설정하였습니다.
  - [ ] 카드 사용/고객사 이자부담 할부설정을 확인 하였습니다.
  - [ ] m\_redirect\_URL을 운영정보로 설정 하였습니다.(리디렉션 방식(모바일/페이팔) 이용 시)
  - [ ] confirm\_URL을 운영정보로 설정 하였습니다.(서비스 이용 시 - 포트원에 사전 요청 필요)

- **결제창 정상 호출 및 결과처리**
  - [ ] 결제창 호출이 셋팅한 PG사로 호출 되었습니다.
  - [ ] 결제 이후 Callback 으로 결과 정상수신 / m\_redirect\_url로 302 리디렉션으로 결과 정상 수신하였습니다.
  - [ ] 결제 완료(paid/canceled) 시 웹훅으로 처리결과를 정상수신 하였습니다.
  - [ ] 웹훅으로 수신된 내용으로 시스템에 정상적으로 결과 반영 하였습니다.
  - [ ] 웹훅에 대해 HTTP 200으로 응답하였습니다.
  - [ ] 결제/취소 중 통신오류로 결과를 확정 지을 수 없을 경우에 대한 처리로직이 있습니다.
  - [ ] 결제/취소 실패사유 별 재처리 로직이 있습니다.(예: 취소 실패 시 재취소를 할 수 있음)
  - [ ] 결제/취소에 대한 전표내역을 확인할 수 있는 기능을 제공하거나 안내 할 수 있습니다.
  - [ ] 주요 항목으로 데이터를 확인 할 수 있습니다.(승인번호 / imp\_uid / merchant\_uid)
  - [ ] 중복으로 결과를 수신하여도 이를 처리하는 로직이 있습니다.

⚠️ 결제수단 별 확인사항을 체크합니다.

## 💳신용카드

- [ ] 모든 카드사 심사가 완료 되었으며 승인,전체/부분취소 테스트를 완료 하였습니다.
- [ ] 할부 및 무이자 설정이 결제창 내에 정상적으로 표시되는 것을 확인 하였습니다.
- [ ] 체크/신용/해외 카드에 대해 정상적으로 결제/취소 되었습니다.(해외카드는 별도의 계약 필요)
- [ ] 면세/과세 금액 설정 시 PG사 어드민 / 매출전표 표시내용과 일치합니다.
- [ ] 정기결제 시 빌키 발급 이후 결제에 성공하였습니다.
- [ ] 결제실패 시 해당 빌키를 삭제하고 새로운 결제 정보로 빌키를 새로 취득하고 결제 할 수 있습니다.

## 💵가상계좌

- [ ] 발급된 가상계좌의 은행코드로 은행명을 인식할 수 있습니다.
- [ ] 발급된 가상계좌를 납부자에게 전달하고 삭제 할 수 있습니다.
- [ ] 입급 결과를 수신하고 시스템에 반영 할 수 있습니다.
- [ ] 입금 취소 시 이를 시스템에 반영 할 수 있습니다.
- [ ] 환불 요청 시 환불을 요청하고 이를 처리 할 수 있습니다.

## 💸 계좌이체

- [ ] 출금이체 한 은행코드로 은행명을 인식할 수 있습니다.
- [ ] 환불 요청 시 환불을 요청하고 이를 처리 할 수 있습니다.

## 📱휴대전화

- [ ] 모든 통신사 심사가 완료 되었으며 승인,전체/부분취소 테스트를 완료 하였습니다.
  - KG이니시스, KCP(별도요청) 외 부분취소 불가

- [ ] 정상 승인거래에 대해 당월에 한해 취소 처리 할 수 있습니다.

## 🙋 본인인증

- [ ] 외국인 여부에 대한 확인이 필요 할 경우 계약 완료 여부를 확인하였습니다.

## 🧾현금영수증

- [ ] 발급된 영수증을 조회 및 취소 할 수 있습니다.
- [ ] 포트원을 통한 거래와 이 외 거래를 구분하여 처리 할 수 있습니다.

⚠️ 제공하는 결제환경에서 모든 케이스를 테스트 합니다.

|OS / 브라우져|IE / Edge|Chrome|Safari|FireFox|Whale|포털 웹뷰|SNS 웹뷰|
|-------------|---------|------|------|-------|-----|---------|--------|
|Window       |         |      |      |       |     |         |        |
|Mac OS       |         |      |      |       |     |         |        |
|Android      |         |      |      |       |     |         |        |
|iOS          |         |      |      |       |     |         |        |

- [ ] iOS에서 결제사 외부앱을 연동하기 위해 info.plist 을 작성하였습니다.
- [ ] 결제 이 후 고객사 앱으로 돌아오기 위해 app\_scheme을 전달합니다.


# https://developers.portone.io/opi/ko/integration/webhook/readme-v1

---
title: 웹훅 연동하기
description: 포트원 웹훅을 사용하여 포트원 서버에 저장된 결제 정보를 고객사 서버에 동기화하고 네트워크 불안정성을 보완하는 방법을 설명합니다.
cover: >-
  https://images.unsplash.com/photo-1522096823084-2d1aa8411c13?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxOTcwMjR8MHwxfHNlYXJjaHwxfHxzZW5kfGVufDB8fHx8MTY4MTcxNzQ3NQ&ixlib=rb-4.0.3&q=85
coverY: -136
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/webhook/readme-v2
---

(관련 이미지 첨부)

## 웹훅(Webhook)이란?

특정 이벤트가 발생하였을 때 타 서비스나 응용프로그램으로 알림을 보내는 기능입니다.
Webhook 프로바이더는 해당 이벤트가 발행하면 `HTTP POST` 요청을 생성하여 callback URL(endpoint)로 이벤트 정보을 보냅니다.
주기적으로 데이터를 폴링(polling)하지 않고 원하는 이벤트에 대한 정보만 수신할 수 있어서 webhook은 리소스나 통신측면에서 훨씬 더 효율적입니다.
Webhook을 활용하면 커스텀 기능이나 다른 애플리케이션과 연동하여 기능을 확장할 수 있습니다.

포트원에서는 결제 완료 등 이벤트가 발생했을 때 고객사의 서버에 전송하고 있습니다.
이벤트가 발생하면 포트원 콘솔에 등록된 웹훅 URL로 HTTP POST 요청을 보냅니다. 고객사에서는 이 요청을 받아 최신 결제 정보로 동기화하도록 구현해야 합니다.

## 웹훅 연동이 꼭 필요한가요?

안정적인 결제 처리를 위해 웹훅 연동을 강력히 권장합니다.
인터넷 연결 끊김, 브라우저 자동 새로고침 등의 이유로 클라이언트에서 결제 완료에 대한 응답을 받지 못하는 경우가 간헐적으로 발생합니다.
이런 경우 연동한 웹훅을 통해 누락 없이 결제 정보를 동기화할 수 있습니다.

## 웹훅 발생 이벤트

포트원 웹훅은 다음과 같은 이벤트에 발생됩니다.

- **결제가 승인**되었을 때(모든 결제 수단) - (status : `paid`)
- **가상계좌가 발급**되었을 때 - (status : `ready`)
- **가상계좌에 결제 금액이 입금**되었을 때 - (status : `paid`)
- **예약결제가 시도**되었을 때 - (status : `paid` or `failed`)
- **관리자 콘솔에서 결제 취소**되었을 때 - (status : `cancelled`)

<div class="hint" data-style="danger">

**결제 실패 시에는 웹훅이 호출되지 않아요!**

</div>

## 웹훅 URL 설정

웹훅 URL을 설정하면 포트원에서 이벤트 발생 시 해당 URL로 웹훅을 전송합니다.
URL은 관리자 콘솔에서 두 가지 형태로 지원하고 있습니다.
콘솔에서 설정했더라도 결제 시에 `notice_url`파라미터로 지정하여 호출하는 경우 해당 URL로 전송됩니다.

### 1. 관리자 콘솔 설정

웹훅을 통해 결제 정보를 통보받을 URL을 설정하는 과정은 다음과 같습니다.

(관련 이미지 첨부)

- 포트원 관리자 콘솔 내 \[결제 연동] → \[연동 관리] → **\[결제알림(Webhook) 관리]** 탭을 선택합니다.

- \[웹훅 버전] 항목에서 **\[결제모듈 V1]** 을 선택합니다.

- \[설정 모드] 항목에서 \[실연동] 또는 \[테스트]를 선택합니다. (연동 환경에 따라 웹훅 URL을 각각 다르게 설정할 수 있습니다.)

- **Endpoint URL**에 웹훅 데이터를 수신할 URL을 입력합니다.

- **Content Type**을 설정합니다. `Content Type`은 `application/json`
  또는 `application/x-www-form-urlencoded` 중 하나로 설정할 수 있습니다.

- `저장` 버튼을 클릭합니다.

<div class="hint" data-style="info">

`호출 테스트` 버튼을 클릭하면 저장된 URL로 테스트 웹훅이 발송됩니다. 이를 통해 올바른 URL과 Content-Type을 지정했는지 테스트할 수 있습니다.
콘솔 내 화면에서 Endpoint URL 변경 후 저장하지 않은 채 호출테스트를 시도하시면 이전에 저장된 주소로 발송되오니 주의하시길 바랍니다.

</div>

### 2. 결제 파라미터 설정

포트원 SDK의 `IMP.request_pay()` 함수 파라미터 중 `notice_url`를 통해 관리자콘솔에서 설정한 웹훅 수신 URL을 덮어쓸 수 있습니다.

```ts title="client-side"
function requestPay() {
  // IMP.request_pay(param, callback) 결제창 호출
  IMP.request_pay(
    {
      // ...
      notice_url: "https://웹훅수신 URL", //웹훅수신 URL 설정
      // ...
    },
    function (rsp) {
      // callback
      if (rsp.success) {
        console.log(rsp);
      } else {
        console.log(rsp);
      }
    },
  );
}
```

<div class="hint" data-style="info">

**웹훅 관련 정보**

웹훅은 최초 또는 재발송 통해 전송이 가능하며, 각각 타임아웃이 다릅니다.

1. **최초 웹훅**의 경우 **Connection TimeOut 설정시각은 10초**이며 가맹접 웹훅응답을 기다리는 **Read TimeOut 시각은 30초**입니다.
2. **재발송 웹훅**의 경우 **요청에 대한 전체 타임아웃이 15초**입니다.

</div>

### 3. 웹훅 요청 검증하기

웹훅 수신주소는 공개된 URL로 포트원이 아닌 서버에서 웹훅을 보낼 위험이 있기 때문에,
고객사 서버는 **웹훅을 수신하고 반드시 [결제내역 단건조회 API](https://developers.portone.io/api/rest-v1/payment?v=v1#get%20%2Fpayments%2F%7Bimp_uid%7D)를 통해
결제건을 조회하여 웹훅의 내용을 검증해야 합니다.**
결제가 정상적으로 성공하였지만, 네트워크 문제 등의 이유로 웹훅을 수신받지 못하거나 늦게 수신받는 경우가 있을 수 있습니다.
웹훅이 오지 않거나 늦은 경우 결제건을 바로 취소 처리하시면 네트워크 문제가 발생했을 때 정상적으로 결제된 결제건이 환불되어 금전 피해가 발생할 수 있습니다.
**웹훅이 수신되지 않은 경우에도 결제 취소를 하기 이전에 [결제내역 단건조회 API](https://developers.portone.io/api/rest-v1/payment?v=v1#get%20%2Fpayments%2F%7Bimp_uid%7D)를 통해
결제건의 상태를 조회하여, 결제 상태에 따라 취소 처리를 해야 합니다.**

웹훅 수신 후 고객사 서버에서 정상 응답을 한 경우에도, 네트워크 상의 문제로 웹훅의 response가 포트원 서버로 도달하지 않았다면
웹훅 재발송 기능을 설정한 고객사에 한해 웹훅이 재발송 될 수 있습니다.
만약 동일한 내용의 웹훅을 여러 번 수신받는 경우가 발생하더라도, 문제가 발생하지 않도록 처리해 주시길 권장드립니다.

```url
curl -H "Content-Type: application/json" -X POST -d '{ "imp_uid": "imp_1234567890", "merchant_uid": "order_id_8237352", "status": "paid" }' { NotificationURL }
```

> Webhook `POST` 요청의 본문은 다음의 정보를 포함합니다. 고객사 서버는 해당 정보를 수신하고 포트원 서버에서 결제 정보를 조회하여 검증 및 저장할 수 있습니다.
>
> - `imp_uid` : 결제번호
> - `merchant_uid`: 주문번호
> - `status`: 결제 결과
> - `cancellation_id`: 취소내역 아이디

웹훅 EndPoint URL 수신부 POST 요청에 대한 코드 예시

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js">

Webhook 이벤트의 `POST` 요청을 처리할 endpoint를 다음과 같이 생성하여 결제 정보를 조회하고 검증하여 저장합니다.

```ts title="server-side"
app.use(bodyParser.json());
// ...
// "/portone-webhook"에 대한 POST 요청을 처리
app.post("/portone-webhook", async (req, res) => {
  try {
    // req의 body에서 imp_uid, merchant_uid 추출
    const { imp_uid, merchant_uid } = req.body;
    // 액세스 토큰(access token) 발급 받기
    /* ...중략... */
    // imp_uid로 포트원 서버에서 결제 정보 조회
    /* ...중략... */
    const paymentData = getPaymentData.data; // 조회한 결제 정보
    // ...
    // DB에서 결제되어야 하는 금액 조회
    const order = await Orders.findById(paymentData.merchant_uid);
    const amountToBePaid = order.amount; // 결제 되어야 하는 금액
    // ...
    // 결제 검증하기
    const { amount, status } = paymentData;
    // 결제금액 일치. 결제 된 금액 === 결제 되어야 하는 금액
    if (amount === amountToBePaid) {
      // DB에 결제 정보 저장
      await Orders.findByIdAndUpdate(merchant_uid, { $set: paymentData });
      switch (status) {
        case "ready": // 가상계좌 발급
          // DB에 가상계좌 발급 정보 저장
          const { vbank_num, vbank_date, vbank_name } = paymentData;
          await Users.findByIdAndUpdate("/* 고객 id */", {
            $set: { vbank_num, vbank_date, vbank_name },
          });
          // 가상계좌 발급 안내 문자메시지 발송
          SMS.send({
            text: `가상계좌 발급이 성공되었습니다. 계좌 정보 ${vbank_num} ${vbank_date} ${vbank_name}`,
          });
          res.send({ status: "vbankIssued", message: "가상계좌 발급 성공" });
          break;
        case "paid": // 결제 완료
          res.send({ status: "success", message: "일반 결제 성공" });
          break;
      }
    } else {
      // 결제금액 불일치. 위/변조 된 결제
      throw { status: "forgery", message: "위조된 결제시도" };
    }
  } catch (e) {
    res.status(400).send(e);
  }
});
```

</div>

</div>

<details>

<summary> 포트원 IP 리스트 </summary>

포트원의 웹훅은 다음의 세 가지 IP 주소로부터 발송됩니다. Inbound 요청에 방화벽 규칙을 설정해야 하는 등 필요한 경우에 한해 사용해 주시길 바랍니다.

> - **52.78.100.19**
> - **52.78.48.223**
> - **52.78.5.241**

</details>

<div class="hint" data-style="danger">

**웹훅 처리 전에 브라우저 결제 완료 처리가 진행되는 경우**

기본적으로 포트원 서버는 웹훅을 호출한 뒤 고객사 응답을 기다리지 않고 브라우저에 302 redirect 응답을 보내기 때문에 결과 도달에 대한 순서를 보장하지 않습니다. 다만 고객사 요청이 있을 경우 webhook 호출 이후에 브라우저에 302 redirect 또는 callback 응답을 보내어 순서를 보장해 드리고 있습니다. 웹훅 우선순위 설정 요청은 <support@portone.io> 로 고객사 식별코드를 기재하여 요청해 주시면 됩니다.

</div>

<div class="hint" data-style="info">

**웹훅 재 전송이 가능한가요?**

웹훅은 기본적으로 1회 전송되도록 설정되어 있습니다. 네트워크 에러가 발생하거나 고객사 응답(HTTP 상태 코드)이 500번대인 경우, 재발송 설정을 원하신다면 웹훅이 최대 5회까지 1분 간격으로 재시도될 수 있습니다. 웹훅 재발송 설정 요청은 <support@portone.io> 로 고객사 식별코드를 기재하여 요청해 주시면 됩니다.

</div>

## localhost로 호출테스트 하기

기본적으로 webhook 호출 테스트는 **외부망에서 접근 가능한 도메인만 가능합니다.** `localhost`의 경우,
로컬머신 혹은 같은 망을 공유하고 있는 경우에만 접근이 가능하기 때문에, 포트원에서 `localhost`로
callback URL을 호출할 수 없습니다.하지만 [ngrok](http://ngrok.com/) 이라는 서비스를 통해
`localhost`를 외부망에서 접근 가능한 도메인으로 포워딩 하면 해당 도메인을 callback URL로 설정할 수
있습니다.다음은 `localhost:3000`으로 실행된 개발환경을 ngrok 을 이용해서 외부 접속 가능한 도메인으로
포워딩하는 예제입니다. 해당 도메인을 callback URL로 설정하면 호출 테스트를 할 수 있습니다.

[이미지 링크](https://developers.portone.io/gitbook-assets/ko/ngrok.gif)

<p>ngrok 사용 예시</p>


# https://developers.portone.io/opi/ko/support/code-info/card-code

---
title: 카드사 코드
description: PortOne 에서 처리하는 카드사별 코드목록 입니다.
targetVersions:
  - v1
---

| 카드사명 | code|
|:--------:|:---:|
|    BC    |`361`|
|    KB    |`381`|
|   현대   |`367`|
|   삼성   |`365`|
|   롯데   |`368`|
|    NH    |`371`|
|   우리   |`041`|
|  하나SK  |`374`|
|  새마을  |`045`|
|   제주   |`373`|
|   광주   |`364`|
|   신한   |`366`|
|    KDB   |`002`|
|   수협   |`369`|
|   신협   |`048`|
|   씨티   |`370`|
|  우체국  |`071`|
|   K뱅크  |`089`|
|   전북   |`372`|
|카카오뱅크|`090`|


# https://developers.portone.io/opi/ko/support/code-info/code

---
title: 택배사 코드
description: 에스크로 배송등록에 필요한 택배사 코드표를 확인합니다.
targetVersions:
  - v1
---

**이용하시는 PG사 상관없이 동일한 코드표가 적용됩니다.**

|택배사 코드|택배사 이름                                                        |
|-----------|-------------------------------------------------------------------|
|`HYUNDAI`  |롯데택배                                                           |
|`HANARO`   |하나로택배                                                         |
|`SAGAWA`   |SC로지스                                                           |
|`KGB`      |로젠택배                                                           |
|`YELLOWCAP`|옐로우캡                                                           |
|`DONGBU`   |동부택배                                                           |
|`EPOST`    |우체국택배                                                         |
|`CJGLS`    |CJ대한통운                                                         |
|`HANJIN`   |한진택배                                                           |
|`DAESIN`   |대신택배                                                           |
|`ETC`      |기타(위 코드표에 해당되지 않는 값이 전달되면 ETC로 자동 처리됩니다)|


# https://developers.portone.io/opi/ko/support/code-info/pg-1

---
title: PG사별 은행코드
description: 각 PG사별 은행코드를 확인할 수 있습니다.
targetVersions:
  - v1
---

<details>

<summary>NHN KCP 은행코드</summary>

- KB국민은행: `BK04`
- SC제일은행: `BK23`
- 경남은행: `BK39`
- 광주은행: `BK34`
- 기업은행: `BK03`
- 농협: `BK11`
- 대구은행: `BK31`
- 부산은행: `BK32`
- 산업은행: `BK02`
- 새마을금고: `BK45`
- 수협: `BK07`
- 신한은행: `BK88`
- 신협: `BK48`
- 하나(외환)은행: `BK81`
- 우리은행: `BK20`
- 우체국: `BK71`
- 전북은행: `BK37`
- 축협: `BK12`
- 카카오뱅크: `BK90`
- 케이뱅크: `BK89`
- 한국씨티은행: `BK27`
- 토스뱅크: `BK92`

</details>

<details>

<summary>KG이니시스 은행코드</summary>

- KB국민은행: `04`
- SC제일은행: `23`
- 경남은행: `39`
- 광주은행: `34`
- 기업은행: `03`
- 농협: `11`
- 대구은행: `31`
- 부산은행: `32`
- 산업은행: `02`
- 새마을금고: `45`
- 수협: `07`
- 신한은행: `88`
- 신협: `48`
- 하나(외환)은행: `81`
- 우리은행: `20`
- 우체국: `71`
- 전북은행: `37`
- 축협: `12`
- 카카오뱅크: `90`
- 케이뱅크: `89`
- 한국씨티은행: `27`
- 토스뱅크: `92`

</details>

<details>

<summary>키움페이 (구. 페이조아 / 다우데이타)</summary>

- KB국민은행: `04`
- SC제일은행: `11`
- 경남은행: -
- 광주은행: -
- 기업은행: `03`
- 농협: `08`
- 대구은행: -
- 부산은행: `15`
- 산업은행: -
- 새마을금고: -
- 수협: -
- 신한은행: `10`
- 신협: -
- 외환은행: `05`
- 우리은행: `09`
- 우체국: `31`
- 전북은행: -
- 축협: -
- 카카오뱅크: -
- 케이뱅크: -
- 하나은행: `12`
- 한국씨티은행: -
- 토스뱅크: -

</details>

<details>

<summary>토스페이먼츠 & 다날 & 나이스페이먼츠 & KICC & 스마트로 & 헥토파이낸셜</summary>

- KB국민은행: `004`
- SC제일은행: `023`
- 경남은행: `039`
- 광주은행: `034`
- 기업은행: `003`
- 농협: `011`
- 대구은행: `031`
- 부산은행: `032`
- 산업은행: `002`
- 새마을금고: `045`
- 수협: `007`
- 신한은행: `088`
- 신협: `048`
- 하나(외환)은행: `081`
- 우리은행: `020`
- 우체국: `071`
- 전북은행: `037`
- 축협: `012`
- 카카오뱅크: `090`
- 케이뱅크: `089`
- 한국씨티은행: `027`
- 토스뱅크: `092`

</details>

<details>

<summary>(신)나이스페이</summary>

- KB국민은행: `004`
- SC제일은행: `023`
- 광주은행: `034`
- 기업은행: `003`
- 농협: `011`
- 대구은행: `031`
- 부산은행: `032`
- 신한은행: `088`
- 하나은행: `081`
- 우리은행: `020`
- 우체국: `071`
- 케이뱅크: `089`

</details>

<details>

<summary>웰컴페이먼츠</summary>

- KB국민은행: `004`
- 광주은행: `034`
- 경남은행: `039`
- 기업은행: `003`
- 대구은행: `031`
- 부산은행: `032`
- 수협: `007`
- 신한은행: `088`
- 히니은행: `081`
- 우리은행: `020`
- 전북은행: `037`
- 케이뱅크: `089`

</details>


# https://developers.portone.io/opi/ko/support/code-info/pg-2

---
title: PG사 코드
description: JavaScript SDK PG구분코드를 확인할 수 있습니다.
targetVersions:
  - v1
---

|         PG사명        |      code      |
|:---------------------:|:--------------:|
|       KG이니시스      | `html5_inicis` |
|    (구) KG이니시스    |    `inicis`    |
|  KG이니시스 통합인증  |`inicis_unified`|
|        NHN KCP        |      `kcp`     |
|     NHN KCP (정기)    |  `kcp_billing` |
|     NHN KCP 퀵페이    |   `kcp_quick`  |
|   (구) 토스페이먼츠   |     `uplus`    |
|   (신) 토스페이먼츠   | `tosspayments` |
|  (구) 나이스페이먼츠  |     `nice`     |
|  (신) 나이스페이먼츠  |    `nice_v2`   |
|     이지페이(KICC)    |     `kicc`     |
|       카카오페이      |   `kakaopay`   |
|다날휴대폰결제/본인인증|     `danal`    |
|          다날         |  `danal_tpay`  |
|       모빌리언스      |   `mobilians`  |
|         페이코        |     `payco`    |
|      (구) 페이팔      |    `paypal`    |
|      (신) 페이팔      |   `paypal_v2`  |
|        엑심베이       |    `eximbay`   |
|   네이버페이 결제형   |   `naverpay`   |
|   네이버페이 주문형   |    `naverco`   |
|       스마일페이      |   `smilepay`   |
|키움페이((구) 페이조아)|     `daou`     |
|       페이먼트월      |  `paymentwall` |
|        토스페이       |    `tosspay`   |
|     (구) 스마트로     |    `smartro`   |
|     (신) 스마트로     |  `smartro_v2`  |
|      헥토파이낸셜     |    `settle`    |
|헥토파이낸셜 내통장결제|  `settle_acc`  |
|         KSNET         |     `ksnet`    |
|        갤럭시아       |    `galaxia`   |
|      웰컴페이먼츠     |    `welcome`   |


# https://developers.portone.io/opi/ko/support/code-info/pg-3

---
title: PG사 오류코드
description: 각 PG사별 오류코드집을 내려받을 수 있습니다.
targetVersions:
  - v1
---

## NHN KCP

(파일: NHN KCP 오류코드 다운로드)

## KG이니시스

(파일: KG이니시스 오류코드 다운로드)

## 카카오페이

(파일: 카카오페이 오류코드 다운로드)

## 토스페이먼츠

(파일: 토스페이먼츠 오류코드 다운로드)

## KG모빌리언스

(파일: KG모빌리언스 휴대폰 결제 오류코드 다운로드)

(파일: KG모빌리언스 휴대폰 결제 취소 오류코드 다운로드)

## 다날

(파일: 다날 오류코드 다운로드)

## 페이먼트월

[페이먼트월 오류코드 바로가기](https://docs.paymentwall.com/integration/direct/brick/error-codes)


# https://developers.portone.io/opi/ko/support/code-info/pg

---
title: 결제대행사별 빌링키 획득 규칙
description: 결제대행사별 빌링키 획득 규칙을 안내합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="info">

발급과 동시에 결제 기능은 포트원 결제모듈 V1에서만 지원되며, 지원 여부는 결제창 방식 기준으로 작성되었습니다.
API방식으로 연동하실 때는 [비인증 결제(일회성) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fonetime)
를 사용하시거나 [빌링키 발급 API](https://developers.portone.io/api/rest-v1/billingkey#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)
로 발급 후 결제 로직을 직접 구현하실 수 있습니다.

</div>

|       결제대행사      |코드값(pg provider)|결제창 방식|API 방식|              발급과 동시에 결제 기능 (결제창기준)              |
|:---------------------:|:-----------------:|:---------:|:------:|:--------------------------------------------------------------:|
| 나이스페이먼츠(구모듈)|        nice       |     X     |    O   |                                -                               |
| 나이스페이먼츠(신모듈)|      nice\_v2     |     X     |    O   |                                -                               |
|  토스페이먼츠(신모듈) |    tosspayments   |     O     |    O   |                             불가능                             |
|          KCP          |    kcp\_billing   |     O     |    X   |                             불가능                             |
|          KCP          |        kcp        |     X     |    O   |                                -                               |
|       KG이니시스      |   html5\_inicis   |     O     |    X   |                             불가능                             |
|       KG이니시스      |       inicis      |     X     |    O   |                                -                               |
|          다날         |    danal\_tpay    |     O     |    X   |                              가능                              |
|    다날(휴대폰결제)   |       danal       |     O     |    O   |                              가능                              |
|      헥토파이낸셜     |       settle      |     X     |    O   |                                -                               |
|     이지페이(KICC)    |        kicc       |     O     |    X   |                             불가능                             |
|        키움페이       |        daou       |     X     |    O   |                                -                               |
|      KG모빌리언스     |      moblians     |     O     |    X   |                              가능                              |
|         KSNET         |       ksnet       |     X     |    O   |                                -                               |
|    스마트로(신모듈)   |    smartro\_v2    |     O     |    X   |                             불가능                             |
|      웰컴페이먼츠     |      welcome      |     O     |    O   |발급 수단에 따라 상이함. (카드 : 불가능 / 휴대폰소액결제 : 가능)|
|       카카오페이      |      kakaopay     |     O     |    X   |                              가능                              |
|       네이버페이      |      naverpay     |     O     |    X   |                             불가능                             |
|         페이코        |       payco       |     O     |    X   |                             불가능                             |
|        토스페이       |    tosspay\_v2    |     O     |    X   |                             불가능                             |
|헥토파이낸셜 내통장결제|    settle\_acc    |     O     |    X   |                              가능                              |
|       페이먼트월      |    paymentwall    |     O     |    X   |                              가능                              |
|      페이팔 (RT)      |     paypal\_v2    |     O     |    X   |                             불가능                             |


# https://developers.portone.io/opi/ko/support/code-info/portone-code

---
title: 해외 카드코드
description: 금융결제원 기관코드가 정의되어 있지 않은 해외 카드사 코드를 확인합니다.
targetVersions:
  - v1
---

|카드코드|카드명          |
|--------|----------------|
|`10001` |해외은련카드    |
|`10002` |해외다이너스카드|
|`10003` |해외아멕스카드  |
|`10004` |해외마스터카스  |
|`10005` |해외비자카드    |
|`10006` |해외JCB카드     |


# https://developers.portone.io/opi/ko/support/code-info/readme

---
title: 코드 정보
description: PG사/카드사/택배사/은행별 코드들을 확인할 수 있습니다.
targetVersions:
  - v1
---

[결제대행사별 빌링키 획득 규칙](https://developers.portone.io/opi/ko/support/code-info/pg)

[PG사별 은행코드](https://developers.portone.io/opi/ko/support/code-info/pg-1)

[PG사 코드](https://developers.portone.io/opi/ko/support/code-info/pg-2)

[카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code)

[택배사 코드](https://developers.portone.io/opi/ko/support/code-info/code)

[PG사 오류코드](https://developers.portone.io/opi/ko/support/code-info/pg-3)

[해외 카드코드](https://developers.portone.io/opi/ko/support/code-info/portone-code)


# https://developers.portone.io/opi/ko/support/faq/undefined

---
title: 자주 묻는 질문
description: 고객사에서 빈번하게 물어보시는 질문을 확인 합니다.
cover: >-
  https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxOTcwMjR8MHwxfHNlYXJjaHwzfHxRdWVzdGlvbnxlbnwwfHx8fDE2ODE3MTczODk&ixlib=rb-4.0.3&q=85
coverY: 185
targetVersions:
  - v1
---

<details>

<summary>웹훅 발송규칙</summary>

- 기본적으로 1회 발송 됩니다.
- 재발송 설정을 희망하는 경우 1분 단위로 최대 5회까지 발송이 가능하며 고객사 응답(**HTTP STATUS**)이 **200**응답을 주시는 경우 발송은 중단됩니다.
- 관리자 콘솔에서 웹훅 재 전송이 가능합니다. (결제승인내역 -> 웹훅로그 -> 재전송)
- 웹훅주소를 변경한 경우 과거거래 재 발송시 기존 웹훅 URL로 전송됩니다.

</details>

<details>

<summary>통합 응답코드 제공 여부</summary>

결제응답으로 내려가는 오류코드 및 메세지는 원천사(PG사)가 내려주는 응답코드와 메세지를 그대로 내려드리고 있습니다. 당사와 연동되어 있는 PG사에 따라 응답코드와 메세지가 모두 상이하여 통합적으로 정리되어 있는 오류코드표는 존재하지 않습니다.

</details>

<details>

<summary>운영계정 및 개발계정 구분방법</summary>

**하나의 계정으로 실모드 & 테스트모드 운영**

기존 설정되어있던 항목에 'PG사 추가' 하여 테스트용 상점정보를 입력

- 장점: 동일한 고객사 식별코드 / API key, secret 으로 테스트가 가능
- 단점: 상용계정과 함께 운영하기 때문에 PG설정/저장에 주의필요

**\[체크사항]**

동일 PG의 경우 상점 아이디별로 결제요청을 하려면 pg 파라미터에 **PG사명.상점아이디** 로 지정하여 요청해야 합니다.

**테스트용도로 새로운 계정 생성하여 분리**

포트원 관리자페이지(<https://admin.portone.io/>) 회원가입 하시어 개발용도의 계정을 생성하시는 방법입니다.

- 장점 : 상용과 개발용을 분리함으로써 안정적인 테스트 가능
- 단점 : 고객사 식별코드 / API key, secret 정보가 달라지다보니 소스코드 분기가 필요

</details>

<div class="hint" data-style="info">

**더 많은 질문 리스트는 헬프센터를 참고해 주세요**

[헬프센터 바로가기](https://help.portone.io/category/faq)

</div>


# https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft-rt

---
title: 본인인증 결과 파라미터
description: 본인인증 요청에 대해 반환되는 응답 정보를 확인합니다.
targetVersions:
  - v1
versionVariants:
  v2: /sdk/ko/v2-sdk/identity-verification-response
---

## rsp (object) <a href="#request_pay-rsp" id="request_pay-rsp" />

- success: boolean

  **본인인증 성공여부**

- error\_code: string

  **실패코드**

- error\_msg: string

  **실패사유 문구**

- imp\_uid: string

  **고유 본인인증 번호**

- merchant\_uid: string

  **주문번호**

  본인인증창 요청시 전달된 주문번호가 그대로 반환됩니다.


# https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft

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


# https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/load-module-rt

---
title: 모듈 로드 결과 파라미터
description: 모듈로드 요청에 대해 반환되는 응답정보를 확인합니다.
targetVersions:
  - v1
---

## rsp (Object) <a href="#load-module-rsp" id="load-module-rsp" />

**PG사별 module이 돌아옵니다. 결제연동 탭의 PG사별 모듈 연동 부분을 확인해주세요.**


# https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/load-module

---
title: 모듈 로드 파라미터
description: PG사의 모듈 로딩에 필요한 파라미터 정보를 가져옵니다.
targetVersions:
  - v1
---

## 모듈로드 파라미터 정의

<div class="tabs-container">

<div class="tabs-content" data-title="모듈 로드 요청">

```ts title="Javascript SDK"
await IMP.loadModule(
  "moduleType",
  {
    userCode: "Merchant ID", //// Example: imp00000000
    tierCode: "Tier Code",
  },
  {
    //something loadModule option
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- moduleType: string

  **모듈 타입**

- userCode: string

  **고객사 식별코드**

  `IMP` 로 시작하는 고객사 식별코드입니다.

- tier\_code?: string

  **하위상점(Tier)의 고유코드**

  알파벳 대문자 또는 숫자 3자리입니다.

</details>

</div>

</div>


# https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq

---
title: 결제요청 파라미터
description: 결제요청 파라미터를 확인 할 수 있습니다.
targetVersions:
  - v1
versionVariants:
  v2: /sdk/ko/v2-sdk/payment-request
---

## 결제요청 파라미터 정의

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

  결제대행사

  - `danal`(다날 휴대폰소액결제 및 휴대폰 본인인증)
  - `danal_tpay`(다날 결제창 일반/정기결제)
  - `daou`(키움페이 결제창 일반결제 및 API 수기/정기결제)
  - `html5_inicis`(KG이니시스 결제창 일반/정기결제)
  - `inicis_unified`(KG이니시스 통합인증)
  - `inicis`(KG이니시스 API 수기/정기결제 및 신용카드 본인인증)
  - `kcp`(NHN KCP 결제창 일반/수기결제 및 API 수기/정기결제)
  - `kcp_billing`(NHN KCP 결제창 정기결제)
  - `kicc`(이지페이(한국정보통신) 결제창 일반/정기결제)
  - `ksnet`(KSNET 결제창 일반결제 및 API 수기/정기결제)
  - `mobilians`(모빌리언스 결제창 일반/정기결제)
  - `nice`(나이스페이먼츠(구모듈) 결제창 일반결제 및 API 수기/정기결제)
  - `nice_v2`(나이스페이(신모듈) 결제창 일반결제 및 API 수기/정기결제)
  - `settle`(헥토파이낸셜 결제창 일반결제 및 API 수기/정기결제)
  - `settle_acc` (헥토파이낸셜 내통장결제)
  - `smartro`(스마트로(구모듈) 결제창 일반결제 )
  - `smartro_v2`(스마트로(신모듈) 결제창 일반/정기결제 및 API 수기/정기결제)
  - `tosspayments`(토스페이먼츠(신모듈) 결제창 일반/수기/정기결제 및 API 일반/수기/정기결제)
  - `toss_brandpay`(토스페이먼츠 브랜드페이)
  - `uplus`(토스페이먼츠(구모듈) 결제창 일반결제)
  - `welcome`(웰컴페이먼츠 결제창 일반/정기결제 및 API 일반/정기결제)

  간편결제 직연동

  - `tosspay`(토스페이 일반결제)
  - `tosspay_v2` (토스페이 일반/정기결제)
  - `payco`(페이코 일반/정기결제)
  - `kakaopay`(카카오페이 일반/정기결제)
  - `naverpay`(네이버페이-결제형)
  - `naverco`(네이버페이-주문형)
  - `smilepay`(스마일페이 일반/정기결제)

  해외 결제대행사

  - `paypal`(페이팔(ExpressCheckout) 결제창 일반결제)
  - `paypal_v2`(페이팔(SPB/RT) 결제창 일반/정기결제)
  - `eximbay`(엑심베이 결제창 일반결제)
  - `paymentwall`(페이먼트월 결제창 일반 및 API 수기/정기결제)

  </details>

  <div class="hint" data-style="warning">

  pg 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method?: string

  **결제수단 구분코드**

  PG사별 지원되는 결제수단이 모두 상이합니다.

  [**결제대행사 선택하여 연동하기**](https://developers.portone.io/opi/ko/integration/pg/v1/readme)를 참고하세요

  <details>

  <summary>상세코드 확인하기</summary>

  - `card` (신용카드)
  - `trans`(실시간계좌이체)
  - `vbank`(가상계좌)
  - `phone`(휴대폰소액결제)
  - `applepay` (애플페이)
  - `naverpay`(네이버페이)
  - `samsungpay`(삼성페이)
  - `kpay`(KPay앱)
  - `kakaopay`(카카오페이)
  - `payco`(페이코)
  - `lpay`(LPAY)
  - `ssgpay`(SSG페이)
  - `tosspay`(토스페이)
  - `cultureland`(컬쳐랜드)
  - `smartculture`(스마트문상)
  - `culturegift`(문화상품권)
  - `booknlife`(도서문화상품권)
  - `point`(베네피아 포인트 / OK캐시백 포인트)
  - `wechat`(위쳇페이)
  - `alipay`(알리페이/알리페이플러스)
  - `unionpay`(유니온페이)
  - `pinpay`(핀페이)
  - `ssgpay_bank`(SSG 은행계좌)
  - `skpay`(11Pay (구.SKPay))
  - `naverpay_card`(네이버페이 - 카드)
  - `naverpay_point`(네이버페이 - 포인트)
  - `paypal`(페이팔 SPB 결제)
  - `toss_brandpay`(토스페이먼츠 브랜드페이)
  - `tosspay_card` (토스페이 - 카드)
  - `tosspay_money` (토스페이 - 머니(계좌, 포인트))

  </details>

- escrow?: boolean

  **에스크로 결제창 활성화 여부**

  일부 PG사만 지원됩니다.

  <div class="hint" data-style="info">

  에스크로 설정은 PG사와 협의 이후 진행되어야 하는 점에 유의해주세요

  </div>

- products?: object\[]

  **상품 정보**

  토스페이먼츠 신모듈(`pg`: `tosspayments.~`)을 통한 에스크로 결제(`escrow`: `true`)시에만 유효하며, 필수값은 아닙니다.

  **1개의 주문 건에 여러 상품이 결제될 때 상품에 따라 배송이 다르게 이루어지는 경우, 1개의 주문에 여러 배송 정보를 넣기 위해 사용됩니다.**

  상품을 나타내는 아래의 객체들을 갖는 **배열**을 전달해주세요.

  - id?: string

    상품 고유 ID

  - name?: string

    상품명

  - code?: string

    상품 코드

  - unitPrice?: number

    상품 단위 가격

  - quantity?: number

    수량

- merchant\_uid?: string

  **고객사 주문번호**

  - 주문번호는 매 결제 요청 시마다 항상 다른, 고유한 값으로 채번되어야 합니다.
  - **40자** 이내로 작성해주세요
  - 결제 승인완료 처리된 주문번호를 동일하게 재설정할 경우 **사전거절** 처리됩니다.

- name?: string

  **주문명**

  - 40자 이내로 작성해주세요

- amount?: number

  **결제금액**

  - 문자열이 아닌 숫자 타입으로 지정해야 하는 점에 유의하세요.

- custom\_data?: object

  **사용자 정의 데이터**

  - 결제 응답시 **echo** 로 받아보실 수 있는 필드 입니다.
  - JSON notation(string)으로 저장됩니다.
  - 주문 건에 대해 부가정보를 저장할 공간이 필요할 때 사용합니다

- tax\_free?: number

  **면세금액**

  - 결제금액 중 면세금액에 해당하는 금액을 입력합니다.

- vat\_amount?: number

  **부가세**

  - 결제금액 중 부가세에 해당하는 금액을 입력합니다. (기본값: null)

  <details>

  <summary>지원되는 PG사</summary>

  - 나이스페이먼츠
  - (신) 토스페이

  </details>

- currency?: string

  **결제통화 구분코드**

  - 미입력 시 기본값은 KRW 입니다.

  - 예외적으로, PayPal 은 원화(KRW) 미지원으로 인해 USD 가 기본값으로 적용됩니다.
    - PayPal에서 지원하는 통화는 [PayPal 지원 통화](https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/)를 참고해주세요.

  <details>

  <summary>상세코드 확인하기</summary>

  **결제통화 구분코드**

  - KRW
  - USD
  - EUR
  - JPY

  <div class="hint" data-style="info">

  - PayPal은 원화(KRW) 미 지원으로 USD가 기본
  - PayPal에서 지원하는 통화는 [PayPal 지원 통화](https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/%20target=) 참조

  </div>

  </details>

- language?: string

  **결제창 언어 설정** (지원되지 않는 일부 PG사 존재)

  <details>

  <summary>상세코드 확인하기</summary>

  - en (영어)
  - ko (한국어)
  - zh (중국어)

  </details>

- buyer\_name?: string

  **주문자명**

- buyer\_tel?: string

  **주문자 연락처**

  - 일부 PG사에서 해당 필드 누락시 오류 발생

- buyer\_email?: string

  **주문자 이메일**

  - 일부 PG사에서 해당 필드 누락시 오류 발생(페이먼트월)

- buyer\_addr?: string

  **주문자 주소**

- buyer\_postcode?: string

  **주문자 우편번호**

- confirm\_url?: string

  [**confirm\_process**](https://developers.portone.io/opi/ko/extra/confirm-process/readme-v1) **에 사용할 고객사 endpoint URL**

  - 사용 시 기술지원 메일로 별도 요청이 필요합니다. (<support@portone.io>)

- notice\_url?: string

  **웹훅(Webhook) 수신 URL**

  - 포트원 관리자 콘솔에 설정한 웹훅 URL 대신 사용할 웹훅 URL 을 결제 시마다 설정할 수 있습니다.
  - 해당 값 설정 시 관리자 콘솔에 설정한 URL 에는 웹훅 발송이 되지 않는 점에 유의해주세요.

- customer\_uid?: string

  **고객사 정의 빌링키**

  비인증 결제 이용 시 빌링키와 1:1 로 대응되는 고객사 정의 고객 빌링키입니다.

## 추가속성

- digital?: boolean

  **디지털 상품 여부**

  - 휴대폰 결제수단인 경우 필수 항목입니다.
  - 결제제품이 실물이 아닌 경우 true 로 설정합니다.
  - 실물/디지털 여부에 따라 수수료율이 상이하게 측정되니 유의하시기 바랍니다.

- vbank\_due?: string

  **가상계좌 입금기한**

  - 결제수단이 가상계좌인 경우 입금기한을 설정할 수 있습니다.

  - 다음과 같은 형식으로 설정이 가능합니다 :

    - `YYYY-MM-DD`
    - `YYYYMMDD`
    - `YYYY-MM-DD HH:mm:ss`
    - `YYYYMMDDHHmmss`

- m\_redirect\_url?: string

  **결제완료이후 이동될 URL 주소**

  - 결제창이 새로운 URL 로 리다이렉트되는 결제 방식의 경우 필수 설정 항목입니다.
  - 대부분의 모바일 결제환경에서 결제창 호출 시 필수적으로 요구됩니다.
  - 리다이렉트 환경에서 해당 필드 누락 시 결제 결과를 수신받지 못하는 점에 유의하세요.

- app\_scheme?: string

  **모바일 앱 결제 중 고객사 앱 복귀를 위한 URL scheme**

  - WebView 환경 결제시 필수 설정 항목입니다.
  - ISP/앱카드 등에서 결제정보 인증 후 기존 앱으로 복귀할 때 사용합니다.

- biz\_num?: string

  **사업자등록번호**

  - 다날 가상계좌 결제수단 사용 시 필수 항목입니다.

- useFreeInterestFromMall?: boolean

  **상점 부담 무이자 할부 사용 여부**

  고객사가 부담하는 무이자 할부 여부를 설정 할 수 있습니다.

## 부가기능

### 원하는 할부개월수만 활성화하기

```json
{
  "display": {
    "card_quota": [6] // 할부개월 6개월만 활성화
  }
}
```

**파라미터 설명**

- display?: object

  - card\_quota: number\[]

    **카드 할부 개월수 리스트**

    - `[]`: 일시불만 결제 가능
    - `[6]`: 일시불 및 6개월 할부개월만 선택 가능
    - `[2, 3, 4, 5, 6]`: 일시불을 포함해 2, 3, 4, 5, 6개월까지 할부개월 선택 가능

<div class="hint" data-style="info">

할부결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다.

</div>

### 카드사 결제모듈 바로(direct) 호출하기

```ts
const param = {
  // ....중략....
  card: {
    direct: {
      code: "367", // 카드사 금융결제원 표준 코드 (현대카드)
      quota: 3, // 지정 할부개월수 (3개월)
    },
  },
};
```

**파라미터 설명**

- card?: object

  - direct?: object

    - code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - quota?: number

      **할부 개월 수**

      일시불일 시 0 으로 설정됩니다.

<div class="hint" data-style="danger">

**주의사항**

- PG마다 다이렉트 호출 지원 여부가 상이합니다. PG별 가이드 문서 및 테스트를 통해 다이렉트 호출이 가능한지 확인해주세요.
- 일부 PG사의 경우 승인된 상점아이디에 대해서만 카드사 결제창 direct 노출 기능을 지원합니다. 반드시 포트원을 통해 현재 사용중인 상점아이디가 카드사 결제창 direct 호출이 가능한지 확인해주세요.

</div>

### 원하는 카드사만 결제창 노출하기

```json
{
  "card": {
    "detail": [
      { "card_code": "*", "enabled": false }, // 모든 카드사 비활성화
      { "card_code": "366", "enabled": true } // 특정 카드사 (신한카드) 만 활성화
    ]
  }
}
```

**파라미터 설명**

- card?: object

  - detail?: object\[]

    - card\_code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - enabled?: boolean

      **해당 카드 활성화 여부**

### 상점 부담 무이자 할부 최대 개월수 설정하기

```json
{
  "card": {
    "detail": [
      { "card_code": "366", "max_month": 5 }, // 특정 카드사 (신한카드) 상점 부담 무이자 최대 5개월 할부 설정
      { "card_code": "381", "max_month": 3 } // 특정 카드사 (KB국민카드) 상점 부담 무이자 최대 3개월 할부 설정
    ]
  },
  "useFreeInterestFromMall": true
}
```

**파라미터 설명**

- card?: object

  - detail?: object\[]

    - card\_code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - enabled?: boolean

      **해당 카드 활성화 여부**

- useFreeInterestFromMall?: boolean

  **상점 부담 무이자 할부 사용 여부**

<details>

<summary>지원되는 PG사</summary>

- 토스페이먼츠(신모듈)
- KSNET
- 나이스페이(신모듈)
- 웰컴페이먼츠
- KSNET 카드 다이렉트
- KG이니시스

</details>


# https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrt

---
title: 결제응답 파라미터
description: callback 으로 내려가는 응답 파라미터 항목을 확인할 수 있습니다.
targetVersions:
  - v1
versionVariants:
  v2: /sdk/ko/v2-sdk/payment-response
---

## 결제 요청에 대해 반환되는 응답 정보

<div class="hint" data-style="info">

PG사 또는 결제수단에 따라서 반환되는 속성들이 상이합니다.

</div>

<div class="hint" data-style="warning">

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

위 JS SDK 버전을 사용하면서 (신) 토스페이먼츠, (신) 스마트로, (신) 나이스페이먼츠, (신) 페이팔, KSNET, 웰컴페이먼츠 연동시에는
`imp_uid`, `merchant_uid`, `error_code`, `error_msg`만 제공됩니다.

결제 실패 사유와 코드 확인을 위해서는 `error_code`, `error_msg` 파라미터를 참고해주세요.

</div>

- success: boolean

  **결제 성공여부**

  결제승인 혹은 가상계좌 발급이 성공한 경우, True

  <div class="hint" data-style="warning">

  PG사/결제수단에 따라 `imp_success`로 반환됩니다.

  </div>

- error\_code: string

  **결제 실패코드**

  결제가 실패하는 경우 PG사 원천코드가 내려갑니다.

- error\_msg: string

  **결제 실패메세지**

  결제가 실패하는 경우 PG사 원천메세지가 내려갑니다.

- imp\_uid: string

  **포트원 고유 결제번호**

  success가 false이고 사전 validation에 실패한 경우, imp\_uid는 null일 수 있음

- merchant\_uid: string

  **주문번호**

- pay\_method: string

  **결제수단 구분코드**

  <details>

  <summary>상세코드 확인하기</summary>

  - `card` (신용카드)
  - `trans`(실시간 계좌이체)
  - `vbank`(가상계좌)
  - `phone`(휴대폰 소액결제)
  - `cultureland`(컬쳐랜드 상품권 (구.문화상품권))
  - `smartculture`(스마트문상 (게임 문화 상품권))
  - `booknlife`(도서 문화 상품권)
  - `culturegift`(문화상품권)
  - `samsung`(삼성페이)
  - `kakaopay`(카카오페이)
  - `naverpay`(네이버페이)
  - `payco`(페이코)
  - `lpay`(L페이)
  - `ssgpay`(SSG페이)
  - `tosspay`(토스페이)
  - `applepay`(애플페이)
  - `pinpay`(핀페이)
  - `skpay`(11Pay (구.SKPay))
  - `wechat`(위쳇페이)
  - `alipay`(알리페이)
  - `unionpay`(유니온페이)
  - `tenpay`(텐페이)
  - `paysbuy`(페이스바이)
  - `econtext`(편의점 결제)
  - `molpay`(MOL페이)
  - `point`(베네피아 포인트 등 포인트 결제)
  - `paypal`(페이팔)
  - `toss_brandpay`(토스페이먼츠 브랜드페이)
  - `naverpay_card`(네이버페이 - 카드)
  - `naverpay_point`(네이버페이 - 포인트)

  </details>

- paid\_amount: **number**

  **결제금액**

- status: string

  **결제상태**

  - `ready`(브라우저 창 이탈, 가상계좌 발급 완료 등 미결제 상태)
  - `paid`(결제완료)
  - `failed`(신용카드 한도 초과, 체크카드 잔액 부족, 브라우저 창 종료 또는 취소 버튼 클릭 등 결제실패 상태)

- name: string

  **주문자명**

- pg\_provider: string

  **PG사 구분코드**

  <details>

  <summary>상세코드 확인하기</summary>

  - `html5_inicis`(KG이니시스웹표준)
  - `inicis`(KG이니시스ActiveX결제창)
  - `kcp`(NHN KCP)
  - `kcp_billing`(NHN KCP 정기결제)
  - `uplus`((구) 토스페이먼츠(구 LG U+))
  - `nice`((구) 나이스페이먼츠)
  - `kicc`(한국정보통신)
  - `kakaopay`(카카오페이)
  - `danal`(다날 휴대폰 소액결제)
  - `danal_tpay`(다날 일반결제)
  - `mobilians`(모빌리언스)
  - `payco`(페이코)
  - `paypal`((구) 페이팔)
  - `eximbay`(엑심베이)
  - `naverpay`(네이버페이-결제형)
  - `naverco`(네이버페이-주문형)
  - `smilepay`(스마일페이)
  - `paymentwall`(페이먼트월)
  - `eximbay`(엑심베이)
  - `tosspay`(토스페이)
  - `smartro`((구) 스마트로)
  - `settle`(세틀뱅크)
  - `settle_acc`(세틀뱅크 내통장 결제)
  - `daou`(키움페이 (구. 페이조아))
  - `tosspayments` ((신) 토스페이먼츠)
  - `paypal_v2`((신) 페이팔)
  - `nice_v2`((신) 나이스페이먼츠)
  - `smartro_v2`((신) 스마트로)
  - `toss_brandpay`(토스페이먼츠 브랜드페이)
  - `welcome` (웰컴페이먼츠)

  </details>

- emb\_pg\_provider?: string

  **간편결제 구분코드**

  결제창에서 간편결제 호출시 결제 승인된 PG사 구분코드

  - [x] 일부 PG사 또는 간편결제로 결제가 발생되지 않은 경우 해당 파라미터는 생략됩니다.

  <details>

  <summary>상세코드 확인하기</summary>

  - naverpay
  - kakopay
  - payco
  - samsungpay
  - ssgpay
  - lpay
  - applepay
  - pinpay
  - tosspay
  - skpay
  - toss\_brandpay

  </details>

- pg\_tid: string

  **PG사 거래번호**

  PG사에서 거래당 고유하게 부여하는 거래번호입니다.

- buyer\_name: string

  **주문자명**

- buyer\_email: string

  **주문자 Email**

- buyer\_tel: string

  **주문자 연락처**

- buyer\_addr: string

  **주문자 주소**

- buyer\_postcode: string

  **주문자 우편번호**

- custom\_data: string

  **고객사 임의 지정 데이터**

- paid\_at: string

  **결제승인시각 (UNIX timestamp)**

  <div class="hint" data-style="info">

  **Unix timestamp 란?**

  **유닉스 시간**(영어: Unix time)은 시각을 나타내는 방식이다. **POSIX 시간**이나 **Epoch 시간**이라고 부르기도 한다. 1970년 1월 1일 00:00:00 협정 세계시(UTC) 부터의 경과 시간을 초로 환산하여 정수로 나타낸 것이다. 유닉스 시간에서 윤초는 무시된다. 유닉스 계열 운영 체제나 여러 다른 운영 체제, 그리고 파일 형식들에서 사용된다. 윤초 처리 방식 때문에 시간을 선형으로 표현하지 못하며 협정 세계시의 윤초를 표현할 수 없다..

  </div>

- receipt\_url?: string

  **거래 매출전표 URL**

## 추가속성

- apply\_num?: string

  **신용카드 승인번호**

  - 신용카드 결제수단에 한하여 제공

- vbank\_num?: string

  **가상계좌 입금 계좌번호**

  <div class="hint" data-style="warning">

  PG사로부터 전달된 정보 그대로 제공에 따라 숫자 외 dash(-) 또는 기타 기호가 포함되어 있을 수 있음

  </div>

- vbank\_name?: string

  **가상계좌 입금은행 명**

- vbank\_holder?: string

  **가상계좌 예금주**

  <div class="hint" data-style="warning">

  계약된 사업자명으로 표시됨, 단, 일부 PG사의 경우 null 을 반환하므로 자체 처리 필요

  </div>

- vbank\_date?: string

  **가상계좌 입금기한 (UNIX timestamp)**

## 결제 응답 샘플

```json title="결제 응답 sample object"
{
  "apply_num": "42827474",
  "bank_name": null,
  "buyer_addr": "서울특별시 강남구 삼성동",
  "buyer_email": "test@portone.io",
  "buyer_name": "포트원 기술지원팀",
  "buyer_postcode": "123-456",
  "buyer_tel": "010-1234-5678",
  "card_name": "신한카드",
  "card_number": "5428790000000294",
  "card_quota": 0,
  "currency": "KRW",
  "custom_data": null,
  "imp_uid": "imp_347242536261",
  "merchant_uid": "57008833-33004",
  "name": "당근 10kg",
  "paid_amount": 1004,
  "paid_at": 1648344363,
  "pay_method": "card",
  "pg_provider": "kcp",
  "pg_tid": "22336466628585",
  "pg_type": "payment",
  "receipt_url": "https://admin8.kcp.co.kr/assist/bill.BillActionNew.do?cmd=card_bill&tno=22336466628585&order_no=imp_347242536261&trade_mony=1004",
  "status": "paid",
  "success": true
}
```


# https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme

---
title: JavaScript SDK
description: 결제창 연동시 호출 및 응답 파라미터를 확인 할 수 있습니다.
targetVersions:
  - v1
versionVariants:
  v2: /sdk/ko/v2-sdk/readme
---

<div class="hint" data-style="info">

기존에 사용하신 JavaScript SDK의 문서를 원하시면 [javascript-sdk-old](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme)를 참고해주세요.

</div>

## SDK Library 로드하기 <a href="#sdk-library" id="sdk-library" />

**포트원 JavaScript SDK**를 사용하기 위해서 SDK Script Tag를 다음과 같이 페이지 HTML에 추가해야
합니다. 라이브러리가 로드되면, **IMP** 전역 객체를 **window** 객체의 프로퍼티로 접근하여 **IMP**의
함수들을 호출할 수 있습니다.

```html title="HTML"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

## 기존에 사용하시던 SDK를 업데이트하시는 경우

### 1. jQuery 의존성 삭제

더 이상 포트원 SDK를 사용하기 위해 jQuery를 추가하실 필요가 없습니다.\
고객사 페이지에서 **jQuery를 추가로 사용하지 않으시는 경우 jQuery 의존성을 삭제해주세요.**

### **2. request\_pay 응답 객체에 \`success\`가 포함되지 않습니다.**

기존에 제공되는 `success` 또는 `imp_success` 프로퍼티는 결제 성공 여부가 아닌 내부 트랜잭션 정상
종료 여부를 나타냈기에 의미가 모호하여 응답에 포함되지 않도록 수정되었습니다.

<div class="hint" data-style="danger">

**success**나 **error\_code**는 **결제 성공 여부를 나타내지 않습니다.**

포트원 REST API로 [결제 상세 내역을 조회](https://developers.portone.io/api/rest-v1/payment?v=v1#get%20%2Fpayments%2F%7Bimp_uid%7D)해야 결제 성공 여부를 받을 수 있습니다.

자세한 내용은 [인증 결제 연동하기 - 결제 완료 처리하기](https://developers.portone.io/opi/ko/integration/start/v1/auth?v=v1#4-결제-완료-처리하기-)를 참고해주세요.

</div>


# https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme

---
title: Javascript SDK
description: 결제창 연동시 호출 및 응답 파라미터를 확인 할 수 있습니다.
targetVersions:
  - v1
---

포트원 JavaScript SDK를 사용하면 웹사이트 또는 앱에서 결제창 또는 본인인증창과 연동할 수 있습니다.

## SDK Library 로드하기 <a href="#sdk-library" id="sdk-library" />

**포트원 JavaScript SDK**를 사용하기 위해서 먼저 해당 라이브러리를 다음과 같이 페이지에 추가해야 합니다.
해당 라이브러리는 CDN **(<https://cdn.iamport.kr/js/iamport.payment-{SDK-최신버전}.js>**)을 통한
사용을 권장합니다. 라이브러리가 로드되면, **IMP** 전역 객체를 **window** 객체의 프로퍼티로 접근하여 **IMP**의 함수들을 호출할 수 있습니다.

```html title="HTML"
<!-- jQuery -->
<script
  type="text/javascript"
  src="https://code.jquery.com/jquery-1.12.4.min.js"
></script>
<!-- iamport.payment.js -->
<script
  type="text/javascript"
  src="https://cdn.iamport.kr/js/iamport.payment-{SDK-최신버전}.js"
></script>
```

<div class="hint" data-style="warning">

**jQuery 1.0 이상이 설치**되어 있어야 합니다.

</div>


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/readme

---
title: 본인인증 연동하기
description: 포트원을 이용하여 간편하게 본인인증을 연동하는 방법을 확인합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/extra/identity-verification/readme-v2
---



# https://developers.portone.io/opi/ko/extra/plugins/shopify/readme-v1

---
title: Shopify 플러그인
description: Shopify 플러그인을 통해 포트원을 사용하는 방법을 안내합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="info">

이 가이드에서는 Shopify에서 PortOne을 통해 다양한 결제수단을 지원하는
플러그인의 사용법을 설명합니다. 쇼피파이 플러그인을 통하여 국내PG사와 해외PSP 이용이 가능한데,
해외PSP만 이용하신 다면 글로벌 플랫폼만 이용하시면 되고, 국내PG사까지 연동하시려면 [PortOne
한국 플랫폼](https://portone.io/korea/ko)과 [PortOne 글로벌
플랫폼](https://portone.io/global/en)을 모두 사용해야 합니다.
본 서비스는 서비스 이용 계약서 작성 후 이용이 가능하오니
[쇼피파이 이용 안내 가이드](https://help.portone.io/content/shopify-guide)를 참고 부탁드리며
플러그인 연동은 [쇼피파이 연동 가이드](https://docs-global-kr.portone.cloud/product/shopify/overview)를 참고해 주세요.

</div>

## 포트원의 Shopify plugin을 통해 이용하실 수 있는 국내PG사와 결제 수단은 아래와 같습니다.

|PG사         |지역  |타입    |결제수단            |
|-------------|------|--------|--------------------|
|KAKAOPAY     |Korea |간편결제|일체                |
|PAYCO        |Korea |간편결제|일체                |
|TOSSPAY      |Korea |간편결제|일체                |
|KG INICIS    |Korea |PG      |카드결제            |
|KG INICIS    |Korea |PG      |NAVERPAY(허브형)    |
|KG INICIS    |Korea |PG      |KAKAOPAY(허브형)    |
|KG INICIS    |Korea |PG      |PAYCO(허브형)       |
|KG INICIS    |Korea |PG      |TOSSPAY(허브형)     |
|NHN KCP      |Korea |PG      |카드결제            |
|NHN KCP      |Korea |PG      |NAVERPAY(허브형)    |
|NHN KCP      |Korea |PG      |KAKAOPAY(허브형)    |
|TOSS PAYMENTS|Korea |PG      |카드결제            |
|TOSS PAYMENTS|Korea |PG      |NAVERPAY(허브형)    |
|TOSS PAYMENTS|Korea |PG      |KAKAOPAY(허브형)    |
|TOSS PAYMENTS|Korea |PG      |계좌이체            |
|NICE PAYMENTS|Korea |PG      |카드결제            |
|NICE PAYMENTS|Korea |PG      |NAVERPAY(허브형)    |
|NICE PAYMENTS|Korea |PG      |KAKAOPAY(허브형)    |
|PAYMENTWALL  |Global|PG      |카드결제            |
|PAYMENTWALL  |Global|PG      |간편결제            |
|EXIMBAY      |Global|PG      |카드결제            |
|EXIMBAY      |Global|PG      |Alipay+             |
|EXIMBAY      |Global|PG      |WeChatPay           |
|EXIMBAY      |Global|PG      |UnionPay            |
|EXIMBAY      |Japan |PG      |eContext(편의점결제)|
|PAYLETTER    |Global|PG      |카드결제            |

## 글로벌 포트원에서 지원하는 해외PSP 목록은 아래 링크에서 문서 목록을 참고해 주세요.

<https://docs.portone.cloud/docs/payment-channels>


# https://developers.portone.io/opi/ko/extra/plugins/wordpress/button

---
title: 결제버튼생성 플러그인
description: ''
targetVersions:
  - v1
---

<div class="hint" data-style="warning">

해당 플러그인은 현재 유지보수 되지 않으며, 신규 워드프레스 버전에서는 정상작동을 보장하지 않습니다.\
연동과 관련하여 기술지원이 필요하신 경우 <support@portone.io>로 문의바랍니다.

</div>

이 문서는 워드프레스 웹사이트에서 온라인 상점 플랫폼 없이 아임포트 결제버튼 생성 플러그인을 사용하여
쉽고 빠르게 결제시스템을 연동하는 방법을 설명합니다.

## 플러그인 설치 및 구성하기

아임포트 결제버튼 생성 플러그인을 워드프레스 사이트에 설치하고 고객사 정보를 입력합니다.

### STEP1: 설치 및 활성화하기

먼저 워드프레스 관리자 페이지의 플러그인 > 플러그인 추가하기 메뉴를 클릭합니다. 플러그인 추가
페이지의 상단 플러그인 검색창에 아임포트를 검색하여 결과 목록에 있는 아임포트 결제버튼 생성
플러그인의 지금 설치하기 버튼을 눌러 설치를 진행합니다.

![](/gitbook-assets/ko/button-1.png)

설치가 완료되면 나타나는 활성화 버튼을 눌러 플러그인을 활성화합니다.

![](/gitbook-assets/ko/button-2.png)

### STEP2: 고객사 정보 입력하기

워드프레스 관리자 페이지의 아임포트 결제목록 > 아임포트 결제설정 페이지로 이동합니다. 아임포트
결제정보 설정 섹션에 아임포트 관리자 콘솔에서 확인한 고객사 정보를 입력합니다. 변경 사항 저장 버튼을
눌러 설정 내용을 저장합니다.

![](/gitbook-assets/ko/button-3.png)

## 결제버튼 및 결제창 만들기

워드프레스 페이지에 간단한 아임포트 결제버튼 숏코드(shortcode)를 삽입하여 결제창을 호출하는 버튼을 생성할 수 있습니다.

<div class="hint" data-style="info">

숏코드(shortcode)란?

숏코드는 워드프레스 내에서 작동하는 매크로로써, 짧은 코드 덩어리를 작성하여 복잡한 기능을 페이지에
추가할 수 있는 기능입니다. 예를 들어, \[gallery] 숏코드를 페이지 편집란에 작성하면 사진 갤러리를
추가할 수 있습니다.

</div>

### 1. 결제버튼 숏코드 추가하기

아임포트 결제 버튼 숏코드를 다음과 같이 추가합니다. 버튼 레이블은 시작과 종료 숏코드 사이에 입력합니다.

```php
[iamport_payment_button]결제하기[/iamport_payment_button]
```

### 2. 숏코드 속성 추가하기

다음과 같이 `iamport_payment_button` 숏코드에 속성을 추가하여 결제창에 나타나는 항목을 설정할 수 있습니다

```php
[iamport_payment_button title="결제하기" description="아래의 정보를 입력해주세요." name="에스페란토 서울 2018 세미나" amount="10000" pay_method_list="kakaopay,samsung,card, trans,vbank,phone" field_list="name,email,phone"]참가비 결제하기[/iamport_payment_button]
```

<div class="hint" data-style="info">

iamport\_payment\_button 속성

- `title`: 결제창의 제목.

- `description`: 결제창의 소제목.

- `pay_method_list`: 결제 수단 목록.
  - kakaopay(카카오페이), samsung(삼성페이), card(신용카드), trans(실시간 계좌 이체), vbank(가상계좌), phone(휴대폰 소액결제)중 입력.

- `field_list`: 입력필드 목록.
  - name(이름), email(이메일), phone(휴대폰번호)중 입력.

- `name`: 결제의 주문명.

- `amount`: 결제에 청구하는 금액. 다음의 세가지 형태로 지정할 수 있습니다.
  - amount="10000" : 고정 금액
  - amount="10000,15000,20000" : 세가지 금액 중 하나를 선택
  - amount="variable" : 사용자 지정 금액

- `style`: 결제버튼의 HTML style 속성.
  - 기본값: ‘display:inline-block;padding:6px 12px;color:#fff;background-color:#2c3e50’

- `class`: 결제버튼의 CSS class 속성.
  - 이 속성은 style 속성을 덮어 씁니다.

- `redirect_after`: 결제완료 후 이동할 웹페이지 주소.

</div>

## 결제 전 설문조사 필드 추가하기

결제 단계 전에 사용자에게서 정보를 입력받을 수 있는 설문조사 필드를 추가할 수 있습니다.

### 1. 설문조사 필드 숏코드 추가하기

결제버튼 숏코드(`iamport_payment_button`) 사이에 설문조사 필드(`iamport_payment_button_field`) 숏코드를 다음과 같이 삽입합니다.

```php
[iamport_payment_button]참가비 결제하기[iamport_payment_button_field]소속[/iamport_payment_button_field][iamport_payment_button_field]에스페란토 수준[/iamport_payment_button_field][iamport_payment_button_field]뒷풀이 참석 여부[/iamport_payment_button_field][iamport_payment_button_field]행사를 알게 된 경로[/iamport_payment_button_field][/iamport_payment_button]
```

### 2. 숏코드 속성 추가하기

다음과 같이 iamport\_payment\_button\_field 숏코드에 속성을 추가하여 설문조사 항목들을 설정할 수 있습니다.

```php
[iamport_payment_button]참가비 결제하기[iamport_payment_button_field type="text"]소속[/iamport_payment_button_field][iamport_payment_button_field type="radio" options="상, 중, 하"]에스페란토 수준[/iamport_payment_button_field][iamport_payment_button_field type="select" options="참석, 불참"]뒷풀이 참석 여부[/iamport_payment_button_field][iamport_payment_button_field type="check" options="지인의 소개,페이스북,홈페이지"]행사를 알게된 경로[/iamport_payment_button_field][/iamport_payment_button]
```

<div class="hint" data-style="info">

iamport\_payment\_button\_field 속성

- `type`: 입력란의 종류.
  - text(텍스트 입력란), radio(라디오 버튼), select(선택 드롭다운), check(체크박스), address(주소검색 및 입력)

- `options`: 입력란의 옵션.
  - radio, select, check type을 사용할 때 옵션 목록.
  - 예: options="개발팀, 기획팀, 디자인팀, 영업팀"

- `required`: 필수 입력 여부.
  - 예: required="true"

- `placeholder`: text type의 필드의 기본값(placeholder).
  - 예: placeholder="이름을 입력해주세요."

- `datafor`: 이 필드의 값을 자동으로 입력할 결제 화면의 필드 이름.
  - name(이름), email(이메일), phone(연락처) 중 선택.
  - 예: datafor="name" - 이 필드의 값이 결제 화면의 이름(name)필드에 자동으로 채워집니다.

</div>

## 사용 예제

### a. 결제버튼 + 결제창

결제버튼과 결제창을 구성하는 숏코드의 예제입니다.

```php
[iamport_payment_button title="결제하기" description="아래의 정보를 입력해주세요." name="에스페란토 서울 2018 세미나" amount="10000" pay_method_list="kakaopay,samsung,card,trans,vbank,phone" field_list="name,email,phone"]참가비 결제하기[/iamport_payment_button]
```

![](/gitbook-assets/ko/button-4.png)

### b. 결제버튼 + 설문기능 + 결제창

결제버튼, 설문조사, 결제창을 구성하는 숏코드의 예제입니다.

```php
[iamport_payment_button title="결제하기" description="아래의 정보를 입력해주세요." name="에스페란토 서울 2018 세미나" amount="10000" pay_method_list="kakaopay,samsung,card,trans,vbank,phone" field_list="name,email,phone"]참가비 결제하기[iamport_payment_button_field type="text"]소속[/iamport_payment_button_field][iamport_payment_button_field type="radio" options="상, 중, 하"]에스페란토 수준[/iamport_payment_button_field][iamport_payment_button_field type="select" options="참석, 불참"]뒷풀이 참석 여부[/iamport_payment_button_field][iamport_payment_button_field type="check" options="지인의 소개,페이스북,홈페이지"]행사를 알게된 경로[/iamport_payment_button_field][/iamport_payment_button]
```

![](/gitbook-assets/ko/button-5.png)


# https://developers.portone.io/opi/ko/extra/plugins/wordpress/edd

---
title: Easy Digital Downloads 플러그인
description: Easy Digital Downloads(EDD)용 플러그인을 통해 포트원과 연동합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="warning">

해당 플러그인은 현재 유지보수 되지 않으며, 신규 워드프레스 버전에서는 정상작동을 보장하지 않습니다.\
연동과 관련하여 기술지원이 필요하신 경우 <support@portone.io>로 문의바랍니다.

</div>

이 문서는 포트원 [Easy Digital Downloads(EDD)용
결제플러그인](http://ko.wordpress.org/plugins/iamport-for-easy-digital-downloads/)을 사용하여
워드프레스 EDD 시스템에 쉽고 빠르게 결제를 연동하는 방법을 설명합니다.

## 플러그인 설치 및 활성화하기

포트원 EDD 플러그인을 워드프레스 사이트에 설치합니다. 해당 플러그인을 사용하기 위해서 [Easy Digital
Downloads(EDD) 플러그인](http://ko.wordpress.org/plugins/easy-digital-downloads/)이 설치되어 있어야
합니다.

먼저 워드프레스 관리자 페이지에서 **플러그인 > 플러그인 추가하기** 메뉴를 클릭합니다. **플러그인
추가** 페이지의 상단 플러그인 검색창에 `아임포트`를 검색하여 결과 목록에 있는 **아임포트
결제플러그인 for Easy Digital Downloads**의 **지금 설치하기** 버튼을 눌러 설치를 진행합니다.

![](/gitbook-assets/ko/edd-1.png)

설치가 완료되면 나타나는 **활성화** 버튼을 눌러 플러그인을 활성화합니다.

![](/gitbook-assets/ko/edd-2.png)

## 일반결제 연동하기

다양한 결제수단을 제공하는 일반결제 기능을 워드프레스 EDD 시스템에 연동할 수 있습니다.

## STEP1: 결제 수단 활성화하기

워드프레스 관리자 페이지의 **Downloads > 설정 > Payment Gateways** 페이지로 이동합니다. **Payment
Gateways** 항목에 사용하고자 하는 결제 수단을 선택하여 활성화합니다. **Default Gateway** 항목에는
기본적으로 사용할 결제 수단을 선택합니다.

![](/gitbook-assets/ko/edd-3.png)

## STEP2: 고객사 정보 입력하기

**Payment Gateways** 페이지 상단에서 설정하고자 하는 포트원 결제 수단을 선택합니다.

![](/gitbook-assets/ko/edd-4.png)

페이지 하단에 [포트원 관리자 콘솔](http://admin.portone.io)에서 확인한 고객사 정보를 입력합니다.
**변경 사항 저장** 버튼을 눌러 설정 내용을 저장합니다.

![](/gitbook-assets/ko/edd-5.png)


# https://developers.portone.io/opi/ko/extra/plugins/wordpress/readme-v1

---
title: 워드프레스 플러그인
description: 워드프레스 플러그인을 통해 포트원을 사용하는 방법을 안내합니다.
targetVersions:
  - v1
---

우커머스 플러그인을 통해 워드프레스에서 포트원을 사용할 수 있습니다.

[우커머스 플러그인](https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/readme)


# https://developers.portone.io/opi/ko/integration/cancel/v1/basic

---
title: 결제취소(환불) 연동하기
description: 포트원 결제취소 API를 이용한 결제취소 방법을 안내합니다.
targetVersions:
  - v1
---

## **STEP 01.** 취소 요청하기

필요한 취소 정보를 서버로 전달하여 취소 요청을 진행합니다. 가상계좌 환불의 경우 환불수령 계좌 정보를
추가 파라미터로 전달해야 합니다. 다음은 환불요청을 하기 위해 서버로 해당 정보를 전달하는 예제입니다.

<div class="tabs-container">

<div class="tabs-content" data-title="HTML">

```html title="client-side"
<button onclick="cancelPay()">환불하기</button>
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"
></script>
<script>
      function cancelPay() {
      jQuery.ajax({
          // 예: http://www.myservice.com/payments/cancel
          "url": "{환불정보를 수신할 고객사 서비스 URL}",
          "type": "POST",
          "contentType": "application/json",
          "data": JSON.stringify({
              "merchant_uid": "{결제건의 주문번호}", // 예: ORD20180131-0000011
              "cancel_request_amount": 2000, // 환불금액
              "reason": "테스트 결제 환불" // 환불사유
              // [가상계좌 환불시 필수입력] 환불 수령계좌 예금주
              "refund_holder": "홍길동",
              // [가상계좌 환불시 필수입력] 환불 수령계좌 은행코드(예: KG이니시스의 경우 신한은행은 88번)
              "refund_bank": "88"
              // [가상계좌 환불시 필수입력] 환불 수령계좌 번호
              "refund_account": "56211105948400"
          }),
          "dataType": "json"
      });
  }
</script>
```

</div>

<div class="tabs-content" data-title="React.js">

```tsx title="client-side"
class CancelPay extends React.Component {
  cancelPay = () => {
    axios({
      url: "{환불요청을 받을 서비스 URL}", // 예: http://www.myservice.com/payments/cancel
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        merchant_uid: "{결제건의 주문번호}", // 주문번호
        cancel_request_amount: 2000, // 환불금액
        reason: "테스트 결제 환불", // 환불사유
        refund_holder: "홍길동", // [가상계좌 환불시 필수입력] 환불 수령계좌 예금주
        refund_bank: "88", // [가상계좌 환불시 필수입력] 환불 수령계좌 은행코드(예: KG이니시스의 경우 신한은행은 88번)
        refund_account: "56211105948400", // [가상계좌 환불시 필수입력] 환불 수령계좌 번호
      },
    });
  };
  render() {
    return <button onClick={this.cancelPay}>환불하기</button>;
  }
}
```

</div>

</div>

## **STEP 02.** 결제정보 조회하기

아래와 같이 결제정보를 저장하는 \*\*`Payments`\*\*라는 테이블을 생성했다고 가정합니다.

```js title="server-side"
/* ... model/payments.js ... */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PaymentsSchema = new Schema({
  imp_uid: String, // 포트원 `unique key`(환불 요청시 `unique key`로 사용)
  merchant_uid: String, // 주문번호(결제정보 조회시 사용)
  amount: { type: Number, default: 0 }, // 결제 금액(환불 가능 금액 계산시 사용)
  // 환불 된 총 금액(환불 가능 금액 계산시 사용)
  cancel_amount: { type: Number, default: 0 },
});
module.exports = mongoose.model("Payments", PaymentsSchema);
```

클라이언트에서 받은 주문번호(**`merchant_uid`**)를 사용해서 해당 주문의 결제정보를 **`Payments`** 테이블에서 조회합니다.

```js title="server-side"
/* ... 중략 ... */
const Payments = require("./models/payments");
app.post("/payments/cancel", async (req, res, next) => {
  try {
    /* 액세스 토큰(access token) 발급 */
    /* ... 중략 ... */
    /* 결제정보 조회 */
    const { body } = req;
    const { merchant_uid } = body; // 클라이언트로부터 전달받은 주문번호
    Payments.find({ merchant_uid }, async function (err, payment) {
      if (err) {
        return res.json(err);
      }
      const paymentData = payment[0]; // 조회된 결제정보
      /* 포트원 REST API로 결제환불 요청 */
      // ...
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
```

## **STEP 03.** **포트원 서버에 취소 요청하기**

취소 요청을 하기 위해서 먼저 [**REST API access token**](https://developers.portone.io/api/rest-v1/auth?v=v1#post%20%2Fusers%2FgetToken)을
발급받습니다. 발급받은 액세스 토큰(**`access token`**)을 이용하여
[**포트원 취소 API**](https://developers.portone.io/api/rest-v1/payment?v=v1#post%20%2Fpayments%2Fcancel)를 호출하여 결제 취소를 요청합니다.

<div class="hint" data-style="info">

**휴대폰 소액결제 환불 시 유의사항**

- **결제가 이루어진 월과 환불을 요청하는 월이 다를 경우, 전액환불도 불가능**합니다. 예를 들어, 1월 31일 결제건은 2월 1일에 환불할 수 없습니다.

</div>

아래는 환불요청 시 유의해야 하는 파라미터들입니다.

> **환불 `unique key`**
>
> 환불 대상 거래를 특정하기 위해서 `imp_uid` 또는 `merchant_uid`를 환불 `unique key`로 설정합니다.
> `imp_uid`의 값이 우선순위를 갖게되며 유효하지 않는 `imp_uid`값을 입력하면 `merchant_uid`값과
> 무관하게 환불요청이 실패합니다.

> **환불 금액**(`amount`)
>
> **미입력시 전액이 환불**됩니다.

> **환불 가능 금액**(`checksum`)
>
> 환불이 가능한 금액을 입력합니다. 예를 들어, 10\*\*,\*\*000원짜리 제품의 `checksum`은 10,000입니다.
> 만약 10,000원짜리 제품이 과거 1,000원 부분환불 되었다면, 이후 환불시 `checksum`은
> 9,000입니다.입력된 `checksum`을 사용해서 서버와 포트원 서버간에 환불 가능 금액이 일치하는지
> 확인합니다. 만약 일치하지 않으면 환불 요청은 실패하며 미 입력시 검증은 실행되지 않습니다.

<div class="hint" data-style="warning">

**checksum을 입력해야 하는 이유**

`checksum`은 필수입력은 아니지만 **서버와 포트원 서버간에 환불 가능 금액을 검증하기** 위해서 입력을 권장합니다.

예를 들어, 10,000원짜리 제품에 대한 1,000원 부분환불 요청이 포트원 서버에서 완료하였으나 고객사가 서버 혹은 DB오류로 이를 반영하지 못했다면? 포트원 서버의 checksum은 9,000이 되고, 고객사 서버의 checksum은 그대로 10,000이 됩니다.

이후 남은 금액을 환불하려고 할때 `checksum(10,000)`을 입력하면, 해당 값이 포트원 서버의 `checksum(9,000)`과 일치하지 않으므로 요청은 실패합니다.

</div>

아래는 환불 요청을 하는 예제입니다.

```ts title="Node.js"
/* ... 중략 ... */
app.post("/payments/cancel", async (req, res, next) => {
  try {
    /* 액세스 토큰(access token) 발급 */
    /* ... 중략 ... */
    /* 결제정보 조회 */
    const { body } = req;
    // 클라이언트로부터 전달받은 주문번호, 환불사유, 환불금액
    const { merchant_uid, reason, cancel_request_amount } = body;
    Payments.find({ merchant_uid }, async function (err, payment) {
      /* ... 중략 ... */
      const paymentData = payment[0]; // 조회된 결제정보
      // 조회한 결제정보로부터 imp_uid, amount(결제금액), cancel_amount(환불된 총 금액) 추출
      const { imp_uid, amount, cancel_amount } = paymentData;
      // 환불 가능 금액(= 결제금액 - 환불 된 총 금액) 계산
      const cancelableAmount = amount - cancel_amount;
      if (cancelableAmount <= 0) {
        // 이미 전액 환불된 경우
        return res.status(400).json({ message: "이미 전액환불된 주문입니다." });
      }
      /* 포트원 REST API로 결제환불 요청 */
      const getCancelData = await axios({
        url: "https://api.iamport.kr/payments/cancel",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token, // 포트원 서버로부터 발급받은 엑세스 토큰
        },
        data: {
          reason, // 고객사 클라이언트로부터 받은 환불사유
          imp_uid, // imp_uid를 환불 `unique key`로 입력
          amount: cancel_request_amount, // 고객사 클라이언트로부터 받은 환불금액
          checksum: cancelableAmount, // [권장] 환불 가능 금액 입력
        },
      });
      const { response } = getCancelData.data; // 환불 결과
      /* 환불 결과 동기화 */
      // ...
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
```

### **STEP 04.** 환불 결과 저장하기

#### 결제 취소가 완료되면 그 결과를 데이터베이스에 다음과 같이 저장합니다.

```ts title="Node.js"
/* ... 중략 ... */
app.post("/payments/cancel", async (req, res, next) => {
  try {
    /* 액세스 토큰(access token) 발급 */
    /* ... 중략 ... */
    /* 결제정보 조회 */
    Payments.find({ merchant_uid }, async function (err, payment) {
      /* ... 중략 ... */
      /* 포트원 REST API로 결제환불 요청 */
      /* ... 중략 ... */
      const { response } = getCancelData.data; // 환불 결과
      /* 환불 결과 동기화 */
      const { merchant_uid } = response; // 환불 결과에서 주문정보 추출
      Payments.findOneAndUpdate(
        { merchant_uid },
        response,
        { new: true },
        function (err, payment) {
          // 주문정보가 일치하는 결제정보를 추출해 동기화
          if (err) {
            return res.json(err);
          }
          res.json(payment); // 고객사 클라이언트로 환불 결과 반환
        },
      );
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
```

<div class="hint" data-style="warning">

**취소 시 유의할 점**

REST API[**(POST https://api.iamport.kr/payments/cancel)**](https://developers.portone.io/api/rest-v1/payment?v=v1#post%20%2Fpayments%2Fcancel) 요청에 대한 **응답 코드가 200**이라도 응답 body의 code가 0이 아니면 **환불에 실패했다는 의미**입니다. 실패 사유는 body의 message를 통해 확인하셔야 합니다.

</div>

### **STEP 04.** 환불 응답 처리하기

취소요청에 대한 응답을 클라이언트에게 처리하는 로직을 아래와 같이 작성합니다.

<div class="tabs-container">

<div class="tabs-content" data-title="HTML">

```html title="client-side"
<button onclick="cancelPay()">환불하기</button>
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"
></script>
<!-- jQuery CDN --->
<script>
  function cancelPay() {
    jQuery
      .ajax({
        /* ... 중략 ... */
      })
      .done(function (result) {
        // 환불 성공시 로직
        alert("환불 성공");
      })
      .fail(function (error) {
        // 환불 실패시 로직
        alert("환불 실패");
      });
  }
</script>
```

</div>

<div class="tabs-content" data-title="React.js">

```tsx title="client-side"
class CancelPay extends React.Component {
  cancelPay = () => {
    axios(/* ... 중략 ... */)
      .then((response) => {
        // 환불 성공시 로직
        alert("환불 성공");
      })
      .catch((error) => {
        // 환불 실패시 로직
        alert("환불 실패");
      });
  };
  render() {
    return <button onClick={this.cancelPay}>환불하기</button>;
  }
}
```

</div>

</div>


# https://developers.portone.io/opi/ko/integration/cancel/v1/virtual-account

---
title: 가상계좌 환불하기
description: 가상계좌 입금내역을 환불하는 방법을 확인합니다.
targetVersions:
  - v1
---

**가상계좌 환불을 위해서는 PG사 **가상계좌 특약서비스**에 가입되어 있어야 합니다.**

<div class="hint" data-style="info">

**가상계좌 특약서비스에 가입해야 하는 이유**

신용카드와는 달리 가상계좌의 경우 결제/환불에 대한 수수료는 환불대상에서 제외됩니다.예를 들어 10,000원 결제건에 대해서 고객사는

- 결제 시, 9,700원(10,000원 - 가상계좌 발행 수수료 300원)을 PG사로부터 정산받습니다.
- 환불 시, 10,300원(환불되어야할 10,000원 + 환불 계좌로의 송금 수수료 300원)을 PG사로 지불합니다.

PG사는 이런 과정에서 발생할 수 있는 혼란을 미연에 방지하고자 **가상계좌 특약서비스에 가입한 고객사에 한해서만 가상계좌 환불을 제공**하고 있습니다.

</div>

가상계좌의 경우 단방향 결제수단이여서 환불 대상을 알 수 없으므로 환불 금액 외에 다음의 환불 수령계좌 정보를 입력해야 합니다.

- `refund_holder`: 환불 수령계좌 예금주
- `refund_account`: 환불 수령계좌 번호
- `refund_bank`: 환불 수령계좌 은행코드

<div class="hint" data-style="info">

**가상계좌 은행코드는 PG사에 따라 다릅니다**

`은행코드는`같은 은행이더라도 PG사에 따라 상이하므로 \*\*은행코드(TODO)\*\*표에서 은행코드를 확인해 주세요

</div>

아래는 가상계좌 환불을 요청하는 예제입니다.

```ts title="Node.js"
/* ... 중략 ... */
app.post("/payments/cancel", async (req, res, next) => {
  try {
    /* 액세스 토큰(access token) 발급 */
    /* ... 중략 ... */
    /* 결제정보 조회 */
    const { body } = req;
    // 클라이언트로부터 전달받은 주문번호, 환불사유, 환불금액, 가상계좌 정보(예금주, 계좌번호, 은행코드)
    const {
      merchant_uid,
      reason,
      cancel_request_amount,
      refund_holder,
      refund_bank,
      refund_account,
    } = body;
    Payments.find({ merchant_uid }, async function (err, payment) {
      /* ... 중략 ... */
      const paymentData = payment[0]; // 조회된 결제정보
      // 조회한 결제정보로부터 imp_uid, amount(결제금액), cancel_amount(환불된 총 금액) 추출
      const { imp_uid, amount, cancel_amount } = paymentData;
      // 환불 가능 금액(= 결제금액 - 환불된 총 금액) 계산
      const cancelableAmount = amount - cancel_amount;
      if (cancelableAmount <= 0) {
        // 이미 전액 환불된 경우
        return res.status(400).json({ message: "이미 전액환불된 주문입니다." });
      }
      /* 포트원 REST API로 결제환불 요청 */
      const getCancelData = await axios({
        url: "https://api.iamport.kr/payments/cancel",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token, // 포트원 서버로부터 발급받은 엑세스 토큰
        },
        data: {
          reason, // 고객사 클라이언트로부터 받은 환불사유
          imp_uid, // imp_uid를 환불 `unique key`로 입력
          amount: cancel_request_amount, // 고객사 클라이언트로부터 받은 환불금액
          checksum: cancelableAmount, // [권장] 환불 가능 금액 입력
          refund_holder, // [가상계좌 환불시 필수입력] 환불 수령계좌 예금주
          refund_bank, // [가상계좌 환불시 필수입력] 환불 수령계좌 은행코드(ex. KG이니시스의 경우 신한은행은 88번)
          refund_account, // [가상계좌 환불시 필수입력] 환불 수령계좌 번호
        },
      });
      const { response } = getCancelData.data; // 환불 결과
      /* 환불 결과 동기화 */
      // ...
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
```

다음과 같이 가상계좌 환불을 요청하여 성공하면 PG사 담당자가 다음날 해당 계좌로 환불 금액을 입금합니다. 이는 통상적으로 영업일 기준 하루 정도 소요됩니다.

(이미지 첨부: 가상게좌 환불 FLOW)


# https://developers.portone.io/opi/ko/integration/pg/v1/blue

---
title: 블루월넛
description: 블루월넛 결제 연동방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 블루월넛 PG 설정하기

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
블루월넛 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)`
호출 후 **callback** 으로 수신되어
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 관리하는 주문 번호
    name: "주문명:결제테스트",
    amount: 14000,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `bluewalnut` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank(가상계좌)
  - phone (휴대폰소액결제)

- merchant\_uid: string

  **고객사 채번 주문 고유번호**

  고객사에서 매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  지정하지 않은 경우 0원입니다.

</div>

<div class="tabs-content" data-title="비 인증결제">

**포트원은 블루월넛 비 인증 결제를 지원하지 않습니다.**

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/danal

---
title: 다날
description: 다날 결제연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 다날 PG 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 호출">

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여 다날 Tpay 결제창을 호출할 수 있습니다.
**결제결과**는 PC/모바일 환경 모두 경우 IMP.request\_pay(param, callback) 호출 후 **callback** 으로 수신됩니다.

```ts title="Javascript SDK" showLineNumbers
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `danal_tpay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank(가상계좌)
  - phone(휴대폰 소액결제) : 휴대폰 결제인 경우 pg 파라미터는 **`danal`** 로 지정하면 됩니다.
  - cultureland (문화상품권)
  - booknlife (도서문화상품권)

- merchant\_uid: string

  **고객사 채번 주문 고유번호**

  고객사에서 매번 고유하게 채번되어야 합니다.

- buyer\_tel: string

  **주문자 연락처**

  미 설정 시 다날 결제창에서 오류 발생 가능

- amount: number

  **결제금액**

  지정하지 않은 경우 0원입니다.

- biz\_num?: string

  **사업자등록번호**

  가상계좌 결제창 호출 시 `사업자등록번호 10자리` 필수 입력 (미설정 시 다날 결제창에서 오류 발생 가능)

</div>

<div class="tabs-content" data-title="비인증 결제(결제창 방식)">

인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 비 인증 결제창을 호출할 수 있습니다.

<div class="hint" data-style="danger">

**amount 금액**

- 빌링키 발급시 amount 파라미터에 금액이 설정되는 경우 **실 결제와 동시에 빌링키가 발급**됩니다.
- 실결제를 원하지 않은 경우 amount 금액을 **0원**으로 설정합니다.

(amount를 0으로 지정한 경우 다날에서 최초 10원 테스트 결제를 하고 30분 쯤 후 자동 취소됩니다.)

</div>

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 'card'만 지원됩니다.
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 0, // 빌링키 발급만 진행하며 결제승인을 하지 않습니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    buyer_addr: "서울특별시 강남구 삼성동",
    period: {
      from: "20200101", //YYYYMMDD
      to: "20201231", //YYYYMMDD
    },
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `danal_tpay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: Integer

  **결제금액**

  0원으로 설정시 빌링키만 발급되며 **0원 이상 설정시 실결제와 빌링키 발급이 동시**에 이루어 집니다.

- period?: object

  정기결제시 고객이 구매하는 제품에 대한 제공기간을 명시합니다. 해당 일자가 다날 결제창에 표기 됩니다.

  - from: string

    **YYYYMMDD**

  - to: string

    **YYYYMMDD**

### 빌링키(customer\_uid)로 결제 요청하기

빌링키 발급이 성공하면 실 빌링키는 customer\_uid 와 1:1 매칭되어 **포트원 서버에 저장**됩니다. customer\_uid를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출하시면 결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>

## 3. 부가기능

<div class="tabs-container">

<div class="tabs-content" data-title="통신사 노출 제어">

```json title="특정 통신사만 노출"
{
  "phone": {
    "detail": [
      {
        "carrier": "*", // 모두 활성화
        "enabled": false
      },
      {
        "carrier": "SKT", // SKT만 활성화
        "enabled": true
      }
    ]
  }
}
```

```json title="2개 이상 통신사 노출"
{
  "phone": {
    "detail": [
      {
        "carrier": "SKT",
        "enabled": false
      },
      {
        "carrier": "KTF",
        "enabled": false
      },
      {
        "carrier": "LGT",
        "enabled": false
      },
      {
        "carrier": "CJH",
        "enabled": false
      }
    ]
  }
}
// KCT, SKL 을 제외한 나머지 통신사는 비활성화 됩니다.
```

```json title="특정 통신사만 비노출"
{
  "phone": {
    "detail": [
      {
        "carrier": "SKT",
        "enabled": false
      }
    ]
  }
}
```

<div class="hint" data-style="info">

`phone 파라미터 미 설정시`(기본값) 모든 통신사 노출됨

</div>

</div>

<div class="tabs-content" data-title="휴대폰 번호 고정">

```json
{
  "prefill": {
    "phoneNumber": "휴대폰번호" // 휴대폰번호 입력(하이픈 제거)
  }
}
```

<div class="hint" data-style="info">

휴대폰 결제시 해당 파라미터를 설정하면 휴대폰번호를 고정시킬수 있습니다.

</div>

</div>

<div class="tabs-content" data-title="카드결제 할부개월수">

```json
{
  "display": {
    "card_quota": [6] // 할부개월 6개월까지만 활성화
  }
}
```

**파라미터 설명**

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정값**

  - card\_quota: number\[]

    **할부 개월수**

    예시

    - `[]`: 일시불만 결제 가능
    - `2,3,4,5,6`: 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능
    - `3`: 일시불을 포함한 2,3개월까지 할부개월 선택 가능

<div class="hint" data-style="info">

할부결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다.

</div>

</div>

<div class="tabs-content" data-title="카드사 모듈 호출">

```json
{
  "card": {
    "direct": {
      "code": "367",
      "quota": 3,
      "usePoint": "Y"
    }
  }
}
```

**파라미터 설명**

- card?: object

  - direct?: object

    - code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - quota?: number

      **할부 개월 수**

      일시불일 시 0 으로 설정됩니다.

    - usePoint?: string

      해당 파라미터 설정시 카드사 포인트가 후취방식으로 결제됩니다.

<div class="hint" data-style="danger">

**주의사항**

- 카드사 모듈 바로 호출을 이용하기 위해서는 다날측 설정이 우선 필요 합니다.

</div>

```json
{
  "card": {
    "detail": [
      { "card_code": "*", "enabled": false }, //모든 카드사 비활성화
      { "card_code": "366", "enabled": true } //특정 카드만 활성화
    ]
  }
}
```

**파라미터 설명**

- detail?: object\[]

  **카드사 렌더링 정보**

  - card\_code?: string

    **카드사 코드**

    [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code)를 참고하세요.

  - enabled?: boolean

    **렌더링 여부**

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/eximbay

---
title: 엑심베이
description: 엑심베이 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 엑심베이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
엑심베이 결제창을 호출할 수 있습니다. **결제결과**는 **PC / 모바일** 모두 **callback** 으로 전달됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 관리하는 주문 번호
    name: "주문명:결제테스트",
    amount: 14.2,
    currency: "USD", // 기본값: USD
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    popup: false, // 팝업창 활성 비활성화 컨트롤
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `eximbay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - 신용카드: `card`
  - 알리페이 / 알리페이 플러스: `alipay` (상점아이디 설정에 따라 알리페이 혹은 알리페이 플러스로 호출됩니다. )
  - 해외카드: `card`
  - 유니온페이: `unionpay`
  - 텐페이: `tenpay`
  - 일본 편의점결제(eContext): `econtext`
  - 위챗페이: `wechat`
  - 몰페이: `molpay`

- merchant\_uid: string

  **고객사 고유주문번호**

  매번 고유하게 채번되어야 합니다.

- buyer: string

  **구매자명**

- buyer\_tel: string

  **구매자 연락처**

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- currency?: string

  **결제통화코드**

  - KRW
  - USD
  - EUR
  - GBP
  - JPY
  - THB
  - SGD
  - RUB
  - HKD
  - CAD
  - AUD
  - CNY
  - TWD
  - MYR
  - VND
  - PHP
  - MNT
  - NZD
  - AED
  - MOP
  - BRL
  - KZT
  - NOK
  - SAR
  - TRY

- language?: string

  - 한국어 : ko
  - 영어 : en
  - 중국어 : zh
  - 일본어 : jp

</div>

</div>

<div class="hint" data-style="warning">

**참고사항**

포트원은 엑심베이 정기결제를 지원하지 않습니다.

</div>

<details>

<summary>편의점 결제 테스트 방법</summary>

**편의점결제 동작 방식**

한국의 가상계좌와 같이 결제창 내에서는 등록을 한 다음에 고객에게 이메일 / 문자로 전달되는 화면을 편의점 카운터에서 지불하며 처리합니다.

- 포트원 내부에서는 `pay_method: "vbank"` 로 기록됨
- Econtext 등록이 완료되었다는 콜백함수 및 웹훅 전송 (`status: "ready"` 상태 / `vbank_num`은 `unknown`으로 고정)
- Econtext 로부터 입금확인이 되면 포트원에서 엑심베이로부터 응답을 받아 `status: "paid"`로 변경 후 결제완료처리에 대한 웹훅 전송

**편의점결제 테스트 진행순서**

가상계좌와 같이 실제 고객이 입금한 결과를 테스트해야 하므로 아래와 같이 입금완료됨을 임의적으로 통지받아보실 수 있습니다.

1. 엑심베이 테스트모드 ON상태에서 1번과 같이 결제창 진행

2. 콜백 응답 중 `pg_tid` 값을 별도로 메모 (포트원 관리자콘솔 PG사승인번호 컬럼에서 확인 가능)

3. <http://test.econ.ne.jp/site/tuchi_2/tuchi_menu_2.html>로 이동 후 계정 로그인
   (아이디 : `ectest` / 비번 : `#eg0810#`)

4. ShopID : `361301`, orderID : 2번에서 확보한 PG사승인번호 입력

5. 하단에 있는 **`登録`** 버튼 클릭

6. 다음 페이지에서 한 번 더 **`登録`** 클릭

7. 10분 후 결제상태가 `status: "paid"`로 바뀌는지 확인 (이 때 입금에 대한 웹훅 발송됨)

</details>

## 3. 기타 파라미터

<div class="tabs-container">

<div class="tabs-content" data-title="국내 결제창 호출">

엑심베이**국내 결제창**을 사용하기 위해서는 아래와 같은 방법으로 파라미터 설정이 필요합니다.

```json
{
  "bypass": {
    "issuercountry": "KR"
  }
}
```

<div class="hint" data-style="success">

**국내 결제창 카드 별 승인 통화**

**해외카드**

- VISA/MAster/JCB : KRW 승인 (자국통화승인 서비스 가능)
- AMEX/UnionPay : USD 승인  (자국통화승인 서비스 불가)

**국내카드(국내에서 발행 된 (8개) 카드사 모두 이용 가능)**

- 결제(승인)/정산 통화 : KRW만 지원

</div>

**국내 결제창을 호출하는 경우**

```ts
IMP.request_pay({
  channelKey: "{콘솔 내 연동 정보의 채널키}",
  pay_method: "card",
  merchant_uid: "order_no_0001",
  name: "주문명:결제테스트",
  amount: 14.2,
  currency: "KRW",
  buyer_email: "test@portone.io",
  buyer_name: "구매자이름",
  buyer_tel: "010-1234-5678",
  buyer_addr: "서울특별시 강남구 삼성동",
  buyer_postcode: "123-456",
  popup: false,
  bypass: {
    issuercountry: "KR",
  },
});
```

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/hyphen

---
title: 하이픈
description: 하이픈 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/hyphen
---

## 채널 설정하기

- [결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 가능한 결제 수단

- 간편 결제

  하이픈은 계좌 간편 결제를 전용으로 지원하는 PG사로, 등록한 계좌를 이용한 결제만 가능하며 다른 결제 수단은 지원하지 않습니다.

  따라서 `pay_method` 파라미터를 아래와 같이 설정해야 합니다.

  - 계좌이체 : `trans`

### 계좌 간편 결제란?

고객이 PG사에서 제공하는 결제 페이지에서 본인 명의의 계좌를 등록하고, 상품 구매 시 비밀번호 인증 등을 통해 등록된 계좌에서 출금하여 결제하는 서비스를 의미합니다.

### 계좌 간편 결제의 장점

계좌 간편 결제는 아래와 같은 장점을 제공합니다.

1. **우수한 사용성**

   보안 프로그램이나 추가 앱 설치 과정이 필요하지 않습니다.
   또한 복잡한 계좌 입력이나 인증 과정 없이 최초 한 번만 계좌를 등록하고 이후에는 비밀번호를 통해 간편하게 인증할 수 있습니다.

2. **낮은 수수료**

   바로 계좌 결제는 오픈 뱅킹 기반의 계좌 이체 서비스로, 신용카드 결제에 비해 낮은 수수료로 해당 서비스를 이용할 수 있습니다.

3. **빠른 정산 주기**

   하이픈의 계좌 간편 결제 서비스는 통상 D+2일 주기로 정산을 해드리고 있습니다. 빠른 정산을 통해 현금 흐름을 효율적으로 관리할 수 있습니다.

## SDK 결제 요청하기

하이픈 결제는 최신 SDK에서만 지원됩니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback**으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

하이픈 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "trans",
    merchant_uid: "orderMonthly0001", // 상점에서 관리하는 주문 번호
    name: "테스트결제",
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    amount: 1004,
    storeDetails: {
      businessName: "상호명",
    },
    bypass: {
      hyphen: {
        designCd: "#C1272C",
      },
    },
  },
  function (rsp) {
    // callback 로직
  },
);
```

</div>

</div>

### 주요 파라미터

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg?: string

  **PG사 구분코드**

  `hyphen.{MID}` 형태로 지정하여 사용해야 합니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  하이픈의 경우 `trans`만 지원됩니다.

- merchant\_uid: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.
  이미 승인 완료된 `merchant_uid`로 결제를 시도하는 경우 에러가 발생합니다.

- name: string

  **주문명**

  주문명으로 고객사에서 자유롭게 입력합니다.

- amount: number

  **결제 금액**

  결제 금액으로 number 형식만 허용됩니다.

- buyer\_name: string

  **구매자 이름**

  하이픈의 경우 필수로 입력해야 합니다.

- storeDetails?: object

  **상점 정보**

  - businessName?: string

    **상호명**

    - 결제창에 표시될 상호명입니다. 입력하지 않으면 포트원 대표상점명으로 표시됩니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - hyphen?: object

    **하이픈에서 제공하는 파라미터 모음**

    - designCd?: string

      **결제창 디자인 색상 코드**

      - `#`으로 시작하는 여섯자리 Hex 값을 입력합니다. (ex. `#C1272C`)

### 유의사항

<details>

<summary>`merchant_uid` 허용 문자 및 길이 제한</summary>

`merchant_uid` 에는 영문, 숫자, `_`(underscore) 만으로 이루어진 문자열만 입력할 수 있습니다.

여기에 포함되지 않는 한글이나 `♤`, `♡`, `♧` 등의 특수 문자는 허용되지 않습니다.

또한 `merchant_uid`의 최대 길이는 40자이므로, 해당 길이를 넘지 않는 값으로 결제를 요청해주세요.

</details>

<details>

<summary>`name` 길이 제한</summary>

`name`의 최대 길이는 40자입니다.

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/inicis

---
title: KG이니시스
description: KG이니시스 결제창 연동 가이드입니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/inicis-v2
---

## 1. KG이니시스 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
KG이니시스 결제창을 호출할 수 있습니다.
**결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback** 으로 수신 되며
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678", //필수 파라미터 입니다.
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    escrow: true, //에스크로 결제인 경우 설정
    vbank_due: "YYYYMMDD",
    bypass: {
      // PC 경우
      acceptmethod: "noeasypay", // 간편결제 버튼을 통합결제창에서 제외(PC)
      // acceptmethod: "cardpoint", // 카드포인트 사용시 설정(PC)
      // 모바일 경우
      P_RESERVED: "noeasypay=Y", // 간편결제 버튼을 통합결제창에서 제외(모바일)
      // P_RESERVED: "cp_yn=Y", // 카드포인트 사용시 설정(모바일)
      // P_RESERVED: "twotrs_bank=Y&iosapp=Y&app_scheme=your_app_scheme://", // iOS에서 계좌이체시 결제가 이뤄지던 앱으로 돌아가기
    },
    period: {
      from: "20200101", //YYYYMMDD
      to: "20201231", //YYYYMMDD
    },
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `html5_inicis.{PG상점아이디}`

  PG상점아이디는 KG이니시스와 계약 후 발급받을 수 있습니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  <details>

  <summary>결제수단 구분코드</summary>

  - `card` (신용카드)
  - `kakaopay` (카카오페이 허브형)
  - `naverpay` (네이버페이)
  - `samsung` (삼성페이 허브형)
  - `applepay` (애플페이 허브형)
  - `ssgpay` (SSG페이 허브형)
  - `payco` (페이코 허브형)
  - `tosspay` (토스페이 허브형)
  - `lpay` (L페이 허브형)
  - `trans` (실시간 계좌이체)
  - `vbank`(가상계좌)
  - `phone` (휴대폰소액결제)
  - `cultureland` (문화상품권)
  - `smartculture` (스마트문상)
  - `booknlife`(도서문화상품권)

  </details>

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- buyer\_tel: string

  **주문자연락처**

  필수 파라미터 입니다.

- vbank\_due?: string

  가상계좌 입금마감일시를 지정할수 있습니다.(미 지정시 Default 30일)

- period?: object

  고객이 구매하는 제품에 대한 제공기간을 명시합니다.

  - from: string

    **YYYYMMDD**

  - to: string

    **YYYYMMDD**

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

**PG사 결제창으로 카드정보를 입력받고 빌링키를 발급할수 있습니다.**

- 인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 비 인증 결제창을 호출할 수 있습니다.
- 비 인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.
- amount 파라미터에 금액을 설정하여도 실제 승인은 이루어지지 않습니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 'card'만 지원됩니다.
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 0, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `html5_inicis` 로 설정

  - KG이니시스에서 발급받은 상점아이디가 여러개(각각 일반 및 정기)인 경우에는 html5\_inicis.{상점아이디} 또는 inicis.{상점아이디}(for ActiveX)로 지정합니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: number

  **결제금액**

  결제창에 표시될 금액으로 실제 승인은 이루어지지 않습니다.(실 결제를 발생시키기 위해서는 **customer\_uid** 로 **REST API 를 이용하여 결제요청**을 해주셔야 합니다.)

**빌링키(customer\_uid)로 결제 요청하기**

빌링키 발급이 성공하면 실 빌링키는 customer\_uid 와 1:1 매칭되어 **포트원 서버에 저장**됩니다. customer\_uid를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출하시면 결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
    -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
    https://api.iamport.kr/subscribe/payments/again
```

</div>

<div class="tabs-content" data-title="비인증 API 방식">

**API 방식으로 빌링키 발급,결제요청,예약결제를 구현할수 있습니다.**

**일회성 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 일회성 결제를 요청합니다. 요청 시 전달된 카드는 포트원에 등록되지 않습니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

**빌링키 발급 요청하기**

REST [**API POST /subscribe/customers/{customer\_uid}**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 호출하여 빌링키 발급을 요청합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

**빌링키 발급 및 최초 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 빌링키 발급과 최초 결제를 요청합니다.

- **`customer_uid`** : 빌링키 등록을 위해서 지정해야 합니다.
- **`amount`** : 0원 이상 설정시 빌링키 발급과 동시에 실결제가 발생됩니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

**빌링키로 결제 요청하기**

빌링키 발급과 최초 결제가 성공하면 빌링키는 전달된 `customer_uid` 와 1:1 매칭되어 포트원에 저장됩니다. 보안상의 이유로 서버는 빌링키에 직접 접근할 수 없기 때문에 `customer_uid`를 이용해서 재결제([**POST /subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)) REST API를 다음과 같이 호출합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

**자세한 가이드는 아래 링크를 참조하세요**

[비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth)

</div>

</div>

## 3. 부가기능

<div class="tabs-container">

<div class="tabs-content" data-title="할부개월수 조정">

```json
{
  "display": {
    "card_quota": [6] // 할부개월 6개월만 활성화
  }
}
```

**파라미터 설명**

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정값**

  - card\_quota: number\[]

    **할부 개월수**

    예시

    - `[]`: 일시불만 결제 가능
    - `2,3,4,5,6`: 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능
    - `3`: 일시불을 포함한 2,3개월까지 할부개월 선택 가능

<div class="hint" data-style="info">

할부결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다.

</div>

</div>

<div class="tabs-content" data-title="카드사 모듈 바로 호출">

```json
{
  "card": {
    "direct": {
      "code": "367",
      "quota": 3
    }
  }
}
```

**파라미터 설명**

- card?: object

  - direct?: object

    - code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - quota?: number

      **할부 개월 수**

      일시불일 시 0 으로 설정됩니다.

</div>

<div class="tabs-content" data-title="카드사 노출 조작">

```json
{
  "card": {
    "detail": [
      { "card_code": "*", "enabled": false }, //모든 카드사 비활성화
      { "card_code": "366", "enabled": true } //특정 카드만 활성화
    ]
  }
}
```

**파라미터 설명**

- detail?: object\[]

  **카드사 렌더링 정보**

  - card\_code?: string

    **카드사 코드**

    [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code)를 참고하세요.

  - enabled?: boolean

    **렌더링 여부**

</div>

<div class="tabs-content" data-title="영세율">

```json
// 영세율의 경우
{
  "amount": 1000,
  "tax_free": 0,
  "vat_amount": 0
}
```

**파라미터 설명**

- vat\_amount?: number

  상점아이디(MID)에 영세율 설정된 경우 부가세(`vat_amount`) 및 면세금액(`tax_free`)를 0원으로 지정하여 영세율 결제 가능

<div class="hint" data-style="danger">

주의사항

- 취소 시 **요청된 값 그대로 KG이니시스에서 취소**가 되므로, 취소할 금액, 부가세, 면세금액을 정확하게 전달해 주셔야 부가세, 면세금액이 설정되어 정상적으로 취소가 된다는 점 주의해주시기 바랍니다.
- 실시간 계좌이체 및 가상계좌의 경우 현금영수증 발급하지 않으면 매출전표에 부가세가 나눠서 표시 되지 않습니다

</div>

</div>

<div class="tabs-content" data-title="상점부담무이자할부 설정">

<div class="hint" data-style="info">

**상점 부담 무이자 할부 설정은 사전에 반드시 KG이니시스에 협의후 KG이니시스쪽 설정이 먼저 선행되어야 합니다.**

</div>

KG이니시스 설정이 완료되었으면 아래와 같이 파라미터 설정하시면 됩니다.

```json
{
  "card": {
    "interest_free": 7 //모든 카드 7개월까지 상점분담무이자
  }
}
```

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/kakaopay

---
title: 카카오페이
description: 카카오페이 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/kakaopay
---

## 1. 카카오페이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
카카오페이 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)`
호출 후 **callback** 으로 수신 되며
모바일의 경우 **`m_redirect_url`** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="일반결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 생략가
    merchant_uid: "order_no_0001", // 상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `kakaopay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method?: string

  **결제수단 구분코드**

  생략가능

  (호출 시 선택된 값은 무시되며 카카오페이 앱에서 신용카드와 카카오머니 중 선택한 옵션으로 설정됩니다.)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

</div>

<div class="tabs-content" data-title="정기결제창 요청">

인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 정기결제창을 호출할 수 있습니다.

<div class="hint" data-style="warning">

**amount 금액**

카카오페이 간편결제는 빌링키 발급시 amount 파라미터에 금액이 설정되는 경우 **실 결제와 동시에 빌링키가 발급**됩니다.

실결제를 원하지 않은 경우 amount 금액을 **0원**으로 설정합니다.

</div>

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 0, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  **`kakaopay`** 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid?: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: number

  **결제금액**

  결제창에 표시될 금액으로 0원 이상 설정시 실 결제가 발생됩니다.

  (실 결제를 원하지 않은 경우 amount 금액을 0원으로 설정합니다.)

**빌링키(customer\_uid)로 결제 요청하기**

빌링키 발급이 성공하면 실 빌링키는 customer\_uid 와 1:1 매칭되어 **포트원 서버에 저장**됩니다. customer\_uid를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출하시면 결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
    -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
    https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>

<div class="hint" data-style="info">

## 참고사항

- 카카오페이 결제버튼이 노출되는 것을 권장 합니다.
- 카카오페이 고객사 사이니지 이미지를 [다운받아](http://biz.kakaopay.com/online/guide) 활용할 수 있습니다.

(관련 이미지 첨부)

(관련 이미지 첨부)

</div>

<div class="hint" data-style="info">

**카카오페이 간편결제는 스마트폰 카카오 앱상에서 진행됩니다.**

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/kg

---
title: KG모빌리언스
description: KG모빌리언스 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. KG모빌리언스 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
KG 모빌리언스 결제창을 호출할 수 있습니다.
**결제 결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback** 으로 수신되고
모바일의 경우 **m\_redirect\_url**로 리디렉션됩니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "phone",
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678", //필수
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

## 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `mobilians` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

**결제수단 구분 코드**}

- card (신용카드)

  - phone (휴대폰 소액 결제)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 비 인증 결제창을 호출할 수 있습니다. 비
인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "phone",
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 1004, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

<div class="hint" data-style="info">

- 비 인증 결제를 위해서는 **KG모빌리언스와 계약이 완료된 MID 정보를** 관리자콘솔에 설정하셔야 비 인증 결제창을 활성화시킬 수 있습니다.
- **KG모빌리언스 휴대폰 결제는** 빌링키 발급시 **실 결제가 발생됩니다.**
- 최초 승인일자 기준 매월 **동일한 일자에 동일 금액**이 재결제되어야 합니다.

</div>

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  **`mobilians.<KG모빌리언스와 계약이 완료된 MID>`** 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: number

  **결제금액**

  결제창에 표시될 금액으로 실제 승인이 발생됩니다.

  (실 결제를 발생시키기 위해서는 **`customer_uid`** 로 **REST API 를 이용하여 결제를 요청**해주셔야 합니다.)

### 빌링키(`customer_uid`)로 결제 요청하기

빌링키 발급이 성공하면 실 빌링키는 `customer_uid` 와 1:1 매칭되어 **포트원 서버에 저장**됩니다.
`customer_uid`를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain) 를 호출하시면
결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":1004}' \
     https://api.iamport.kr/subscribe/payments/again
```

**포트원을 통해 KG 모빌리언스를 사용할 때에는 API 방식 비 인증 결제를 사용할 수 없습니다.**


# https://developers.portone.io/opi/ko/integration/pg/v1/kicc

---
title: 이지페이(KICC)
description: 이지페이(KICC) 결제창 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 이지페이(KICC) 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제">

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여 KICC 결제창을 호출할 수 있습니다.
**결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후 **callback**으로 수신되고
모바일의 경우 **m\_redirect\_url**로 리디렉션됩니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678", // 필수
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `kicc` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card(신용카드)
  - trans(실시간 계좌이체)
  - vbank(가상계좌)
  - phone(휴대폰소액결제)

- merchant\_uid: string

  **주문번호**

  고객사에서 매번 고유하게 채번되어야 합니다.

- buyer\_tel: string

  **`주문자 연락처`**

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- escrow?: boolean

  **에스크로 설정여부**

  계좌이체, 가상계좌만 지원됩니다.

</div>

<div class="tabs-content" data-title="비인증 결제(결제창)">

인증결제창 호출 파라미터에서 **`customer_uid`** 값을 추가하면 비 인증 결제창을 호출할 수 있습니다.
비 인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 'card'만 지원됩니다.
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 1004, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

<div class="hint" data-style="info">

- 비 인증 결제를 위해서는 **KICC와 협의가 완료된 MID 정보** 관리자콘솔에 설정하셔야 비인증 결제창을 활성화 시킬수 있습니다.
- KICC는 빌링키 발급시 **실 결제가 발생되지 않습니다**.(금액을 지정해도 결제가 발생되지 않음)

</div>

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  **`kicc.<KICC와 협의가 완료된 MID>`** 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: number

  **결제금액**

  결제창에 표시될 금액으로 실제 승인은 이루어지지 않습니다.

  (실 결제를 발생시키기 위해서는 **`customer_uid`** 로 **REST API 를 이용하여 결제요청**을 해 주셔야 합니다.)

### 빌링키(`customer_uid`)로 결제 요청하기

빌링키 발급이 성공하면 실 빌링키는 `customer_uid` 와 1:1 매칭되어 **포트원 서버에 저장**됩니다. `customer_uid`를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain) 를 호출하시면 결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":1004}' \
     https://api.iamport.kr/subscribe/payments/again
```

**포트원을 통한 KICC API 방식 비 인증 결제는 지원되지 않습니다.**

</div>

</div>

## 3. 부가기능

<div class="tabs-container">

<div class="tabs-content" data-title="에스크로 설정">

KICC는 **현금성 결제수단** (실시간 계좌이체, 가상계좌)에 한하여 에스크로 결제수단을 지원합니다.

> 에스크로 설정을 위해서는 아래 파라미터를 기본적으로 설정한 후 추가적인 파라미터를
>
> 입력해야 합니다.
>
> - **`escrow: true`**

**추가 파라미터 안내**

에스크로 결제 시 다음 파라미터를 반드시 설정해야 합니다.

- `buyer_name` : 구매자 이름

- `buyer_email` : 구매자 이메일

- `buyer_tel` : 구매자 전화번호

- `kiccProducts` : 상품별 부분배송을 위한 상품 관련 정보 (4개의 필수 속성으로 구성된 객체배열). 해당 `amount` 값은 결제 금액(`param.amount`) 값과 관계가 없으며 비교검증되지 않습니다.
  - `orderNumber` : 상품주문번호
  - `name` : 상품명
  - `quantity` : 수량
  - `amount` : 상품 가격

```json
{
  "escrow": true, // 에스크로 결제인 경우 필요
  "kiccProducts": [
    {
      "orderNumber": "xxxx",
      "name": "상품A",
      "quantity": 3,
      "amount": 1000
    },
    {
      "orderNumber": "yyyy",
      "name": "상품B",
      "quantity": 2,
      "amount": 3000
    }
  ]
}
```

</div>

<div class="tabs-content" data-title="카드사 모듈 바로 호출">

```json
{
  "card": {
    "direct": {
      "code": "367",
      "quota": 3
    }
  }
}
```

**파라미터 설명**

- **`code`** : 카드사 금융결제원 표준 코드. [**링크**](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조 (**string**)
- **`quota`** : 할부 개월 수. 일시불일 시 0 으로 지정. (**number**)

<div class="hint" data-style="danger">

**주의사항**

- 일부 PG사의 경우, 모든 상점아이디에 대하여 카드사 결제창 direct 노출 기능을 지원하지 않습니다. 반드시 포트원을 통해 현재 사용중인 상점아이디가 카드사 결제창 direct 호출이 가능하도록 설정이 되어있는지 PG사에 확인이 필요합니다.

</div>

</div>

<div class="tabs-content" data-title="특정 카드사 노출">

```json
{
  "card": {
    "detail": [
      { "card_code": "*", "enabled": false }, //모든 카드사 비활성화
      { "card_code": "366", "enabled": true } //특정 카드만 활성화
    ]
  }
}
```

**파라미터 설명**

- detail?: object\[]

  **카드사 렌더링 정보**

  - card\_code?: string

    **카드사 코드**

    [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code)를 참고하세요.

  - enabled?: boolean

    **렌더링 여부**

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/naver

---
title: 네이버페이(결제형)
description: 네이버페이 결제형 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/naverpay
---

## 1. 네이버페이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 PG 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
네이버페이 결제형 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 IMP.request\_pay(param,
callback) 호출 후 **callback** 으로 수신 되며
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="일반결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001", // 상점에서 관리하는 주문 번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    naverUseCfm: "20221231", // 이용완료일자(필요시 설정합니다)
    naverPopupMode: true, // 팝업모드 활성화
    m_redirect_url: "{결제 완료 후 리디렉션 될 URL}",
    naverPurchaserName: "구매자이름",
    naverPurchaserBirthday: "20151201",
    naverChainId: "sAMplEChAINid",
    naverMerchantUserKey: "고객사의 사용자 키",
    naverCultureBenefit: true, // 문화비 소득공제 적용여부
    naverProducts: [
      {
        categoryType: "BOOK",
        categoryId: "GENERAL",
        uid: "107922211",
        name: "한국사",
        payReferrer: "NAVER_BOOK",
        sellerId: "sellerA",
        count: 10,
      },
      {
        categoryType: "MUSIC",
        categoryId: "CD",
        uid: "299911002",
        name: "러블리즈",
        payReferrer: "NAVER_BOOK",
        sellerId: "sellerB",
        count: 1,
      },
      {
        categoryType: "TRAVEL",
        categoryId: "DOMESTIC",
        uid: "11234355",
        name: "국내 호텔 여행",
        payReferrer: "NAVER_MAP",
        sellerId: "sellerC",
        count: 1,
        startDate: 20240117,
        endDate: 20240118,
      },
    ],
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `naverpay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- naverUseCfm?: string

  **이용 완료일** (`yyyyMMdd` 형식의 문자열로 **결제 당일 또는 미래의 일자**여야 함)

  - 상품 유형에 따라 네이버페이-고객사 간 필수값으로 계약되는 경우 입력합니다

- name: string

  **제품명**

  네이버페이 내부적으로 `외 2개` 의 표현이 자동생성되므로 `xxxx 외 2개` 대신`naverProducts[0].name`(첫번째 상품명)으로 설정하길 권장합니다.

- naverPopupMode?: boolean

  **결제창 팝업여부**

  `false`인 경우 페이지 리디렉션 방식으로 진행되며 `m_redirect_url`을 설정해야 합니다

- m\_redirect\_url?: string

  **리다이렉트 URL**

  리디렉션 방식으로 진행(`naverPopupMode: false`)할 경우 결제 완료 후 리디렉션 될 URL

- naverPurchaserName?: string

  **구매자 이름**

  결제 상품이 고위험 업종에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 **대상 고객사만 필수 입력**합니다.

- naverPurchaserBirthday?: string

  **구매자 생년월일(yyyyMMdd)**

  결제 상품이 고위험 업종에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 **대상 고객사만 필수 입력**합니다.

- naverProducts: object\[]

  **상품정보**

  네이버페이 매뉴얼의 **`productItems`** 파라미터와 동일합니다.

  (해당 파라미터 누락시 네이버페이 검수를 통과할 수 없습니다.)

  `naverProducts`는 다음 6개의 속성으로 하나의 상품 정보를 표현하는 객체의 배열입니다.

  - categoryType: string

    [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product) 참고

  - categoryId: string

    [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product) 참고

  - uid: string

    고객사 내부의 상품 고유 ID를 활용하는 것이 일반적이지만, 네이버페이 가이드 참고가 필요합니다. [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product)

  - name: string

    **주문상품의 명칭**

  - count: number

    **상품 주문 개수**

  - payReferrer?: string

    네이버 플랫폼의 타 서비스와 제휴계약 후 유입분석을 진행하는 경우에만 입력 [공식 매뉴얼](http://developer.pay.naver.com/docs/v2/api#etc-etc_product_ref)

  - startDate?: string

    시작일(yyyyMMdd, 예: 20160701) 결제 상품이 공연, 영화, 보험, 여행, 항공, 숙박인 경우 입력을 권장합니다. ( 숫자 허용 )

  - endDate?: string

    종료일(yyyyMMdd, 예: 20160701) 결제 상품이 공연, 영화, 보험, 여행, 항공, 숙박인 경우 입력을 권장합니다. ( 숫자 허용 )

  - sellerId?: string

    고객사가 하위 판매자를 식별하기 위한 고유 ID(영문 대소문자 및 숫자 허용)

    - 고객사의 업종이 통신판매중개업에 해당하여 네이버페이 계약 당시 별도의 안내를 받은 대상 고객사만 필수 입력합니다.
    - 비대상 고객사는 입력하지 않습니다.

- naverChainId(deprecated)?: string

  **네이버페이 그룹형 고객사용 chain id**

  포트원 콘솔에서 채널 등록 시 chain id를 추가하시고 channelKey 파라미터를 이용해 채널을 지정하신다면 설정이 필요 없는 값입니다.

  deprecated된 pg 파라미터를 이용하여 채널을 선택할 경우 설정이 필요합니다.

- naverCultureBenefit?: boolean

  **네이버페이 도서/공연 소득공제**

  도서/공연 소득공제가 필요한 경우 해당 파라미터를 설정합니다.

- naverMerchantUserKey?: string

  **고객사의 사용자 키**

  - 개인 아이디와 같은 개인정보 데이터는 제외하여 전달해야 합니다.
  - 네이버페이 기준 **고위험군 제품을 판매하는 고객사의 경우 필수** 입력합니다.
  - 비 대상 고객사는 입력하지 않습니다.

</div>

<div class="tabs-content" data-title="정기결제창 요청">

**빌링키 발급받기**

```ts title="JavaScript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    customer_uid: "gildong_0001_1234", // 빌링, 필수 입력.
    merchant_uid: "order_monthly_0001", // 상점에서 생성한 고유 주문번호
    name: "Slim 요금제(1개월 단위)",
    amount: 1004, // 실 결제는 발생되지 않습니다.
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678", // 필수 입력.
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    naverProductCode: "반복결제 상품코드",
    naverProductCount: 5,
    naverPopupMode: true, // 팝업모드 활성화
    m_redirect_url: "{등록 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `naverpay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **빌링키**

  - 정기/반복 결제 등록을 위해서 지정해야 합니다. 미 지정 시, 일반결제로 진행됩니다.
  - 등록 후 해당 키를 사용해 반복결제 승인을 요청할 수 있습니다.

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

  정기/반복 결제 등록과정에서는 결제승인이 이뤄지지 않습니다.

- naverProductCode: string

  **고객사의 상품코드**

  - 동일한 고객이 동일상품에 대해 중복으로 반복결제 등록하는 것을 방지하기 위한 파라미터입니다.
  - 기본값은 random으로 자동 생성되어 중복결제가 가능하므로 값을 지정해 주세요.

- naverProductCount: number

  **결제대상 상품 수**

- name: string

  **제품명**

  네이버페이 내부적으로 **`외 2개`** 의 표현이 자동생성되므로 **`xxxx 외 2개`** 대신`naverProducts[0].name`(첫번째 상품명)으로 설정하길 권장합니다.

- naverPopupMode?: boolean

  **결제창 팝업여부**

  `false`인 경우 페이지 리디렉션 방식으로 진행되며 `m_redirect_url`을 설정해야 합니다

- m\_redirect\_url?: string

  **리다이렉트 URL**

  리디렉션 방식으로 진행(`naverPopupMode`: **false**)할 경우 결제 완료 후 리디렉션 될 URL

- naverActionType?: string

  **신규 등록/수단 변경 여부**

  네이버페이를 통해 발급한 빌링키의 결제 수단을 변경하고자 하는 경우 포트원 빌링키인 `customer_uid`를 동일하게 입력하고, `naverActionType` 파라미터를 `CHANGE`로 입력하여 빌링키를 재발급해야 합니다.

  `naverActionType` 파라미터를 이용하지 않고 동일한 고객의 정보로 추가 빌링키를 발급 시도하면 이전의 결제 수단 정보가 구매자의 네이버페이 계정에 그대로 남아있어 문제가 발생할 수 있습니다.

  - `NEW`(default) : 신규 등록
  - `CHANGE` 결제 수단 변경

<br />

**결제요청하기**

빌링키 발급이 완료되면 설정한 **`customer_uid`** 를 이용하여 결제승인 API를 호출하여 결제를 요청하거나 결제를 예약할 수 있습니다

<br />

**결제 요청방법**

REST API [**/subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain) 를 호출하여 결제를 요청할 수 있습니다.

- customer\_uid: string

  정기/반복결제 등록 시 사용된 해당 고객의 `customer_uid`

- merchant\_uid: string

  **고객사 주문번호**

- amount: number

  **결제승인 요청금액** (결제고객 등록 시 지정된 금액과 달라도 무방함)

- tax\_free: number

  **`amount` 중 면세공급가액** (기본값: 0)

- name: string

  **주문의 명칭**

- extra.naverUseCfm: string

  **이용 완료일** (yyyyMMdd 형식의 문자열로 결제 당일 또는 미래의 일자여야 함)

  상품 유형에 따라, 네이버페이-고객사 간 필수값으로 계약되는 경우 입력합니다.

```json title="sample json"
{
  "customer_uid": "gildong_0001_1234",
  "merchant_uid": "order_monthly_0002", //재사용 불가
  "amount": 10000,
  "name": "Slim 요금제(최초과금)",
  "extra": {
    "naverUseCfm": "20201001"
  }
}
```

```http title="form-urlencoded"
customer_uid={고객사의 결제 고객을 특정하는 Unique Key}&merchant_uid={고객사 주문번호}&amount=10000&name=Slim 요금제(최초과금)&extra[naverUseCfm]=20201001
```

**결제 예약방법**

REST API [**/subscribe/payments/schedule**](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe?v=v1#post%20%2Fsubscribe%2Fpayments%2Fschedule)를 호출하여 결제예약을 할 수 있습니다.

- customer\_uid: string

  정기/반복결제 등록 시 사용된 해당 고객의 `customer_uid`

- schedules: object\[]

  **결제 예약 정보 객체 배열**

  1개 이상 설정 가능합니다.

  - merchant\_uid: string

    **고객사 주문번호**

  - schedule\_at: string

    **결제요청 예약시각**

    UNIX timestamp로 설정합니다.

  - amount: number

    **결제승인 요청금액**

    결제고객 등록 시 지정된 금액과 달라도 무방합니다.

  - extra: object

    - naverUseCfm: string

      이용 완료일(yyyyMMdd 형식의 문자열로 결제 당일 또는 미래의 일자여야 함) 상품 유형에 따라, 네이버페이-고객사 간 필수값으로 계약되는 경우 입력합니다.

```json title="sample json"
{
  "customer_uid": "gildong_0001_1234",
  "schedules": [
    {
      "merchant_uid": "order_monthly_0003", //재사용 불가
      "schedule_at": 1519862400,
      "amount": 10000,
      "extra": {
        "naverUseCfm": "20201001"
      }
    }
  ]
}
```

```http title="form-urlencoded"
customer_uid={고객사의 결제 고객을 특정하는 Unique Key}&schedules[0][merchant_uid]={고객사 주문번호}&schedules[0][schedule_at]={결제요청 예약시각 UNIX timestamp}&schedules[0][amount]=10000&schedules[0][extra][naverUseCfm]=20201001\
```

</div>

</div>

<div class="hint" data-style="warning">

**연동 주의사항**

### 에러 메세지를 가공하지 않은 상태로 노출해야합니다.

결제창 호출(IMP.request\_pay 함수)후 결제창 하단의 "취소" 버튼 클릭 등으로 결제 프로세스가 중단되거나
잔액 부족, 한도 초과, 10원 미만 결제 등의 사유로 결제에 실패하면
콜백 함수(popup 방식)/m\_redirect\_url(리디렉션 방식)로 전달되는 결제 결과(response 객체/쿼리 파라미터)에 실패 사유(error\_msg)가 전달됩니다.
이 에러 메시지는 사용자에게 가공 없이 그대로 노출되어야 합니다. 해당 내용을 준수하지 않는 경우 네이버페이 검수 진행시 수정 요청이 있을 수 있습니다.

예) error\_msg가 "잔액 부족"이라고 가정할때, "결제에 실패하였습니다. 실패 사유:" + "잔액 부족"과 같은 형태로 가공되면 안됨

### 최소 결제 금액에 대해 예외 처리해야 합니다.

네이버페이 결제형의 경우 10원 이상부터 결제가 가능합니다. 10원 미만의 경우 결제 요청에 대해 예외 처리가 필요합니다.

예) 사용자에게 최소 결제 금액이 10원이라 결제를 할 수 없다는 의미를 담는 에러 메시지가 노출되어야 함

</div>

<div class="hint" data-style="info">

**"API 호출 권한이 없습니다"**

네이버페이 결제형 연동은 **네이버페이 검수진행이 시작되기 전까지는 운영환경에서 결제창 호출시**

**위와 같은 오류가 도출**됩니다. 해당 부분은
검수가 진행되면 해결되는 부분이기 때문에 무시해주시면 됩니다.

</div>

<details>

<summary>거래 취소 시 유의사항</summary>

포트원 환불 API인 `POST` [**`/payments/cancel`**](https://developers.portone.io/api/rest-v1/payment?v=v1#post%20%2Fpayments%2Fcancel) 호출시 아래 파라미터를 반드시 설정해 주셔야 합니다.
(**해당 파라미터 누락시 네이버페이 실 검수를 통과할 수 없습니다.**)

- extra: object

  - requester: string

    **API를 호출하는 출처**

    - customer: 구매자에 의한 요청
    - admin(기본값): 어드민에 의한 요청

- reason: string

  **결제 취소 사유.**

**예시(json)**

```json
{
  "imp_uid": "imp_123412341234", //환불처리할 포트원 거래고유번호
  "amount": 3000, //환불할 금액
  "reason": "결제 취소 사유", //실제 사유와 같아야 함
  "extra": {
    "requester": "customer"
  }
}
```

**예시(form-urlencoded)**

```http
imp_uid=imp_123412341234&amount=3000&extra[requester]=customer
```

</details>

<details>

<summary>빌링키 삭제 시 유의사항</summary>

포트원 빌링키 삭제 API인 `DELETE` [**`/subscribe/customers/{customer_uid}`**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#delete%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D) 호출시 아래 파라미터를 반드시 설정해 주셔야 합니다.
(**해당 파라미터 누락시 네이버페이 실 검수를 통과할 수 없습니다.**)

- extra: object

  - requester: string

    **API를 호출하는 출처**

    - customer: 구매자에 의한 요청
    - admin(기본값): 어드민에 의한 요청

- reason: string

  **결제 취소 사유.**

**예시(Query string)**

```http
reason=사용자 요청에 의한 해지&extra[requester]=customer
```

</details>

## 3. 검수요청 하기

네이버페이(결제형)은 다른 결제대행사와 다르게 별도의 검수절차가 존재합니다.
자세한 검수 요청 가이드는 [헬프센터 > 네이버페이(결제형) 검수요청 항목](https://help.portone.io/content/naverpay-review-items) 페이지를 참고부탁드립니다.


# https://developers.portone.io/opi/ko/integration/pg/v1/nhn-kcp

---
title: NHN KCP
description: NHN KCP 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

(관련 이미지 첨부)

## 채널 설정하기

[결제대행사 채널 설정하기](../../../ready/readme#3-결제대행사-채널-설정하기)의 내용을 참고하여 PG 설정을 진행합니다.

## 일반결제

### 가능한 결제 수단

- **결제창 일반 결제**

  `pay_method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드 : `card`

  - 계좌이체 : `trans`

  - 가상계좌 : `vbank`

  - 상품권 :
    - 컬쳐랜드 문화상품권 : `cultureland`
    - 스마트 문상 : `smartculture`
    - 도서문화상품권 : `booknlife`

  - 휴대폰 소액 결제 : `phone`

  - 간편결제 :
    - 삼성페이 : `samsung`
    - 페이코 : `payco`
    - L페이 : `lpay`
    - 카카오페이 : `kakaopay`
    - 네이버페이 : `naverpay`
    - 애플페이 : `applepay`

  - 베네피아 포인트 : `point`

- **결제창 빌링키 발급**

  `pay_method` 파라미터를 결제 수단에 따라 아래와 같이 설정해야 합니다.

  - 카드: `card`

- **API 수기(키인) 결제**

  - 카드

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)
  를 참고해주시기 바랍니다.

- **API 빌링키 발급**

  - 카드

  자세한 파라미터 구성은 [REST API Docs](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 참고해주시기 바랍니다.

### SDK 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여 NHN
KCP 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback** 으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 결제 요청">

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "결제테스트", //주문명
    amount: 1004,
    company: "상호명", //해당 파라미터 설정시 통합결제창에 해당 상호명이 노출됩니다.
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    language: "ko", // en 입력 후 호출 시 영문으로 결제창이 표시됩니다.
    m_redirect_url: "https://testtest.test", //모바일에서 결제 완료 후 리디렉션 될 URL
    auth_mode: "key-in", // 키인결제(일회성 결제)이용시 설정
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

</div>

</div>

#### 주요 파라미터

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 후
  `kcp.{mid(사이트코드)}` 형식으로 채널을 지정할 때 사용됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - `card` (신용카드)
  - `trans` (실시간 계좌이체)
  - `vbank` (가상계좌)
  - `phone` (휴대폰 소액결제)
  - `cultureland` (컬쳐랜드 문화상품권)
  - `smartculture` (스마트문상)
  - `booknlife` (도서문화상품권)
  - `payco` (페이코)
  - `lpay` (L페이)
  - `kakaopay` (카카오페이)
  - `naverpay` (네이버페이)
  - `samsung` (삼성페이)
  - `applepay` (애플페이)
  - `point` (베네피아 포인트)

- merchant\_uid: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- amount: integer

  **결제금액**

<br />

#### 기타 파라미터

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정값**

  - card\_quota: number\[]

    **할부 개월수**

    예시

    - `[]`: 일시불만 결제 가능
    - `2,3,4,5,6`: 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능
    - `3`: 일시불을 포함한 2,3개월까지 할부개월 선택 가능

  예시코드

  <div class="tabs-container">

  <div class="tabs-content" data-title="할부개월수 설정">

  ```json
  {
    "display": {
      "card_quota": [6] // 할부개월 6개월까지만 활성화
    }
  }
  ```

  </div>

  </div>

- card?: oneof object

  **카드 결제시 세부 설정 정보**

  - detail?: object\[]

    **카드사 렌더링 정보**

    - card\_code?: string

      **카드사 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code)를 참고하세요.

    - enabled?: boolean

      **렌더링 여부**

  - direct?: object

    **카드사 다이렉트 호출 정보**

    - code?: string

      **카드사 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code)를 참고하세요.

    - quota?: number

      **고정 할부 개월수**

      - 일시불인 경우 0으로 입력해야 합니다.

      - 카드사별 포인트 사용시 아래 할부 개월수를 더해서 요청해야 합니다.
        - 현대카드 : 80개월
        - 국민카드, 비씨카드, 삼성카드, 하나카드, 롯데카드, 신한카드, 농협카드, 우리카드, 씨티카드 : 60개월

  예시코드

  <div class="tabs-container">

  <div class="tabs-content" data-title="카드사 다이렉트 호출">

  ```json
  {
    "card": {
      "direct": {
        "code": "367",
        "quota": 3
        //카드사 포인트 사용 경우
        //quota: 80 = 80(현대카드 포인트 할부개월) + 0(일시불)
        //quota: 93 = 80(현대카드 포인트 할부개월) + 13개월 할부
        //quota: 60 = 60(기타카드 포인트 할부개월) + 0(일시불)
        //quota: 63 = 60(기타카드 포인트 할부개월) + 3개월 할부
      }
    },
    "company": "고객사" //해당 파라미터를 설정하지 않으면 카드사 모듈 창에 iamport 로 표기
  }
  ```

  </div>

  <div class="tabs-content" data-title="특정 카드사 노출">

  ```json
  {
    "card": {
      "detail": [
        { "card_code": "*", "enabled": false }, // 모든 카드사 비활성화
        { "card_code": "366", "enabled": true } // 특정 카드만 활성화
      ]
    }
  }
  ```

  </div>

  </div>

- appCard?: boolean

  **앱카드 렌더링 여부**

  `true`로 호출시 각 카드사 앱카드 결제만 활성화됩니다.

  예시코드

  <div class="tabs-container">

  <div class="tabs-content" data-title="카드사 앱카드만 노출">

  ```json
  {
    "appCard": true //true 설정시 각 카드사 앱카드 결제만 활성화
  }
  ```

  </div>

  </div>

#### 유의사항

<details>

<summary>할부 결제는 5만원 이상 결제 요청시 이용 가능합니다.</summary>

일반적으로 결제 금액이 5만원 이상일 경우 할부 결제가 가능하며, 특정 카드사에 따라 1만원 이상일 경우에도 사용이 가능합니다.

</details>

<details>

<summary>상품권 결제시 `bypass.shop_user_id`파라미터를 필수 입력해야합니다.</summary>

결제수단 중 상품권 결제를 요청하는 경우 고객사에서 관리하는 회원ID를 아래와 같은 방법으로 파라미터를 필수로 입력해야 합니다.
해당 정보는 상품권 기관 RM 조치를 위해 입력받고 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="상품권 결제 호출 예제">

```ts
IMP.request_pay({
  channelKey: "{콘솔 내 연동 정보의 채널키}",
  pay_method: "cultureland", //컬처랜드 문화상품권
  merchant_uid: "A00021-TEST",
  name: "당근 10kg",
  amount: 1004,
  buyer_email: "test@porton.io",
  buyer_name: "포트원 기술지원팀",
  buyer_tel: "010-1234-5678",
  buyer_addr: "서울특별시 강남구 삼성동",
  buyer_postcode: "123-456",
  bypass: {
    shop_user_id: "abaddd", // 고객사 회원 id 입력
  },
});
```

</div>

</div>

</details>

<details>

<summary>휴대폰 소액결제 시 전화번호를 고정할 수 있습니다.</summary>

`prefill.phoneNumber` 파라미터에 고정할 휴대폰 번호를 입력한 후 결제를 요청합니다.

</details>

<details>

<summary>에스크로 결제관련 안내</summary>

에스크로 결제를 위해서는 **`escrow`** 파라미터를 추가하고 **true** 값으로 설정되어야 합니다.
에스크로 결제 요청시 **장바구니 상품을 묶어서 결제하는 경우**
해당 품목에 대한 정보를 전달하기 위해 해당 상품 관련 정보를 추가 파라미터(**`kcpProducts`**)로 전달해야 합니다.
**`kcpProducts`** 는 다음 4개의 필수 속성으로 구성된 객체배열입니다.

- orderNumber : 상품주문번호
- name : 상품명
- quantity : 수량
- amount : 상품 가격

**`amount`** 값은 결제 금액(`param.amount`) 값과 관계가 없으며 비교 검증하지 않습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="탭">

```ts title="JavaScript SDK"
IMP.request_pay({
  channelKey: "{콘솔 내 연동 정보의 채널키}",
  escrow: true, // 에스크로 결제인 경우 필요
  kcpProducts: [
    {
      orderNumber: "xxxx",
      name: "상품A",
      quantity: 3,
      amount: 1000,
    },
    {
      orderNumber: "yyyy",
      name: "상품B",
      quantity: 2,
      amount: 3000,
    },
  ],
});
```

</div>

</div>

</details>

<details>

<summary>결제창 내 할인쿠폰 영역 활성/비활성화 안내</summary>

`bypass.coupon_apply_yn`파라미터를 이용하여 결제창 내 할인쿠폰 영역을 활성/비활성화 할 수 있습니다.
해당 기능은 KCP와 협의 후 사용 가능합니다.

- `Y`: 활성
- `N`: 비활성

</details>

### SDK 빌링키 발급 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여 NHN
KCP 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback** 으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

빌링키 발급 요청 시에는 `customer_uid` 파라미터를 입력한 후 호출해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="SDK 빌링키 발급 요청">

```ts title="Javascript SDK" showLineNumbers
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //'card'만 지원됩니다.
    merchant_uid: "order_monthly_0001", //상점에서 생성한 고유 주문번호
    name: "정기결제",
    amount: 0, //결제창에 표시될 금액. 발급 요청시에는 결제가 승인되지 않습니다.
    customer_uid: "your-customer-unique-id", //포트원 빌링키로 필수 입력해야 합니다.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "https://testtest.test", //모바일에서 결제 완료 후 리디렉션 될 URL
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

</div>

</div>

#### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 후
  `kcp_billing.{mid(사이트코드)}` 형식으로 채널을 지정할 때 사용됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **포트원 빌링키**

  빌링 결제시 사용되는 값으로 고객사에서 입력한 후 요청해야 합니다. 해당 값은 고객이 입력한 카드정보와 1:1로 매칭됩니다.

- amount: integer

  **결제금액**

  결제창에 표시되는 금액입니다.

#### 유의사항

<details>

<summary>빌링키 발급시 사용한 `customer_uid`는 고객사에서 저장해야 합니다.</summary>

발급된 빌링키를 이용하여 단건 결제 또는 예약/반복 결제 요청시 `customer_uid`를 입력한 후 요청해야합니다.
고객사에서는 빌링키 발급 후 사용한 `customer_uid`를 고객 정보에 맵핑하여 관리하시길 권장드립니다.

</details>

<details>

<summary>빌링키 발급시 생년월일 입력 박스를 항상 표시되도록 설정할 수 있습니다.</summary>

NHN KCP 결제창을 이용한 빌링키 발급 시 PC환경에서 공인인증서 인증 절차를 생략할 수 있습니다.
인증서 인증 절차를 생략하는 경우에도 기본적으로 결제창 내에 주민등록번호 입력 박스가 표시되며,
카드 번호 8자리 입력시 주민등록번호 입력 박스가 생년월일 입력 박스로 변환됩니다.
만약 초기 화면에서 생년월일 입력 박스가 항상 표시되길 원하시면 `bypass.batch_birth_day_yn` 파라미터를 포함하여 빌링키 발급을 요청해야 합니다.

- `Y`: 생년월일 입력박스 항상 표시

</details>

### API 수기(키인)결제 요청하기

수기(키인) 결제 요청시 [`POST /subscribe/payments/onetime`](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime) API를 호출해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 수기(키인) 카드 결제 요청">

```sh
curl -H "Content-Type: application/json" \
       -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
       https://api.iamport.kr/subscribe/payments/onetime
```

</div>

</div>

### API 빌링키 발급 요청하기

빌링키 발급 요청시 [`POST /subscribe/payments/onetime`](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime) 또는
[`POST /subscribe/customers/{customer_uid}`](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D) API를 호출해야 합니다.

`POST /subscribe/payments/onetime`를 호출하시는 경우 빌링키 발급과 동시에 결제가 요청됩니다.
빌링키 발급 및 결제를 원하시는 경우 `customer_uid` 파라미터를 필수로 입력해야 합니다.

`POST /subscribe/customers/{customer_uid}`를 호출하시는 경우 빌링키만 발급됩니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 발급과 동시에 결제 요청하기">

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

</div>

<div class="tabs-content" data-title="빌링키 발급 요청하기">

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

</div>

</div>

#### 유의사항

<details>

<summary>빌링키 발급시 사용한 `customer_uid`는 고객사에서 저장해야 합니다.</summary>

발급된 빌링키를 이용하여 단건 결제 또는 예약/반복 결제 요청시 `customer_uid`를 입력한 후 요청해야합니다.
고객사에서는 빌링키 발급 후 사용한 `customer_uid`를 고객 정보에 맵핑하여 관리하시길 권장드립니다.

</details>

### API 빌링키 단건 결제 요청하기

발급된 빌링키로 단건 결제를 하기 위해서는 [`POST /subscribe/payments/again`](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)
를 이용하여 결제를 요청해야 합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 단건 결제">

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>

### API 빌링키 예약/반복 결제 요청하기

발급된 빌링키로 예약 결제를 하기 위해서는 [`POST /subscribe/payments/schedule`](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe?v=v1#post%20%2Fsubscribe%2Fpayments%2Fschedule)
를 이용하여 결제를 예약합니다.

KCP 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="API 예약/반복 결제">

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>

## 퀵페이 (자체 간편 결제)

<div class="hint" data-style="info">

KCP 퀵페이를 연동하시는 경우 포트원 JavaScript SDK 1.2.0 이상의 버전을 사용해야 합니다.

</div>

### 가능한 결제 수단

- 카드 : `card`
- 즉시출금 : `trans`

### 퀵페이 호출하기

퀵페이의 경우 결제 기능을 포함하여 결제수단 등록 및 삭제, PIN 번호 변경 및 초기화, 탈퇴 기능을 지원합니다.

KCP 퀵페이 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="결제수단 등록">

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //즉시 출금 이용 시 'trans' 입력
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "결제수단 등록테스트", //주문명
    amount: 0, //등록시 0으로 전달
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    customer_uid: "use_your_unique_id_with_pay_method_0", //결제 수단에 대한 고유 식별값
    bypass: {
      kcpQuick: {
        //KCP퀵페이 설정 정보
        actionType: "Register", //결제수단 등록
        memberCI: "djkDFJ45dFndkl", //본인인증 후 전달된 CI 값
        memeberID: "use_your_unique_id", //사용자에 대한 고유 식별값
      },
    },
    m_redirect_url: "https://testtest.test", //결제수단 등록 후 리디렉션될 URL
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

</div>

<div class="tabs-content" data-title="결제수단 삭제">

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //즉시 출금 이용 시 'trans' 입력
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "결제수단 삭제테스트", //주문명
    amount: 0, //삭제시 0으로 전달
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    customer_uid: "use_your_unique_id_with_pay_method_0", //결제 수단에 대한 고유 식별값
    bypass: {
      kcpQuick: {
        //KCP퀵페이 설정 정보
        actionType: "Deregister", //결제수단 삭제
        memberCI: "djkDFJ45dFndkl", //결제수단 등록시 입력한 CI 값
        memeberID: "use_your_unique_id", //사용자에 대한 고유 식별값
      },
    },
    m_redirect_url: "https://testtest.test", //결제수단 등록 후 리디렉션될 URL
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="결제 요청">

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //즉시 출금 이용 시 'trans' 입력
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "결제 테스트", //주문명
    amount: 1000,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    customer_uid: "use_your_unique_id_with_pay_method_0", //결제 수단에 대한 고유 식별값
    bypass: {
      kcpQuick: {
        //KCP퀵페이 설정 정보
        actionType: "Pay", //결제 요청
        memberCI: "djkDFJ45dFndkl", //결제수단 등록시 입력한 CI 값
        memeberID: "use_your_unique_id", //사용자에 대한 고유 식별값
      },
    },
    m_redirect_url: "https://testtest.test", //결제수단 등록 후 리디렉션될 URL
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="PIN번호 변경">

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //즉시 출금 이용 시 'trans' 입력
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "PIN번호 변경 테스트", //주문명
    amount: 0, //pin번호 변경시 0으로 전달
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    customer_uid: "use_your_unique_id", //memberId와 동일하게 입력
    bypass: {
      kcpQuick: {
        //KCP퀵페이 설정 정보
        actionType: "PinChange", //PIN번호 변경
        memberCI: "djkDFJ45dFndkl", //결제수단 등록시 입력한 CI 값
        memeberID: "use_your_unique_id", //사용자에 대한 고유 식별값
      },
    },
    m_redirect_url: "https://testtest.test", //결제수단 등록 후 리디렉션될 URL
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

</div>

<div class="tabs-content" data-title="PIN번호 초기화">

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //즉시 출금 이용 시 'trans' 입력
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "PIN번호 초기화 테스트", //주문명
    amount: 0, //pin번호 초기화시 0으로 전달
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    customer_uid: "use_your_unique_id", //memberId와 동일하게 입력
    bypass: {
      kcpQuick: {
        //KCP퀵페이 설정 정보
        actionType: "PinReset", //PIN번호 초기화
        memberCI: "djkDFJ45dFndkl", //결제수단 등록시 입력한 CI 값
        memeberID: "use_your_unique_id", //사용자에 대한 고유 식별값
      },
    },
    m_redirect_url: "https://testtest.test", //결제수단 등록 후 리디렉션될 URL
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="등록된 전화번호 변경">

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //즉시 출금 이용 시 'trans' 입력
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "전화번호 변경 테스트", //주문명
    amount: 0, //사용자만 등록시 0으로 전달
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    customer_uid: "use_your_unique_id", //memberId와 동일하게 입력
    bypass: {
      kcpQuick: {
        //KCP퀵페이 설정 정보
        actionType: "PhoneChange", //등록된 휴대폰 번호 변경
        memberCI: "djkDFJ45dFndkl", //본인인증 후 전달된 CI 값
        memeberID: "use_your_unique_id", //사용자에 대한 고유 식별값
      },
    },
    m_redirect_url: "https://testtest.test", //결제수단 등록 후 리디렉션될 URL
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

</div>

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="해지">

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //즉시 출금 이용 시 'trans' 입력
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "해지 테스트", //주문명
    amount: 0, //해지시 0으로 전달
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    customer_uid: "use_your_unique_id", //memberId와 동일하게 입력
    bypass: {
      kcpQuick: {
        //KCP퀵페이 설정 정보
        actionType: "Terminate", //유저 및 결제수단 삭제
        memberCI: "djkDFJ45dFndkl", //본인인증 후 전달된 CI 값
        memeberID: "use_your_unique_id", //사용자에 대한 고유 식별값
      },
    },
    m_redirect_url: "https://testtest.test", //결제수단 등록 후 리디렉션될 URL
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

</div>

</div>

<div class="hint" data-style="info">

퀵페이의 경우 m\_redirect\_url시 다음과 같이 4개의 파라미터가 Query String으로 전달됩니다.

- `imp_uid`
- `merchant_uid`
- `imp_status` : true 또는 false
- `kcp_action` : Register 또는 Dregister 또는 Pay

`kcp_action`이 Register 이고 `imp_status`가 true인 경우 결제수단 등록에 성공하였다는 것을 의미합니다.

</div>

#### 주요 파라미터

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  포트원 콘솔 내 \[연동 관리] > \[연동 정보] > \[채널 관리] 화면에서 채널 추가 후
  `kcp_quick.{mid(사이트코드)}` 형식으로 채널을 지정할 때 사용됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  결제 호출 시 결제수단을 지정할 때 사용됩니다.

  - card (카드)
  - trans (즉시출금)

- merchant\_uid: string

  **고객사 주문 고유 번호**

  고객사에서 채번하는 주문 고유 번호로 매번 고유하게 채번되어야 합니다.

- amount: integer

  **결제금액**

- customer\_uid: string

  **결제 수단에 대한 고유 식별값**

  퀵페이에 등록된 결제수단과 1:1 맵핑됩니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 파라미터들의 모음**

  - kcpQuick?: object

    **KCP 퀵페이 설정정보**

    퀵페이 결제시 필수로 입력해야 합니다.

    - actionType: string

      **호출 유형**

      - Register : 결제 수단 등록
      - Deregister : 결제 수단 삭제
      - Pay : 결제
      - PinChange : PIN번호 변경
      - PinReset : PIN번호 초기화
      - PhoneChange : 전화번호 변경
      - Terminate : 결제 수단 해지

    - memberCI: string

      **본인인증 CI값**

    - memberID: string

      **사용자 식별값**

      최대 16byte까지 입력가능하며, 고객이 여러개의 결제수단을 등록하는 경우 동일한 `memberID`를 입력해야 합니다.

    - deviceID?: string

      **디바이스 식별값**

      미 입력시 고객이 사용한 브라우저 정보가 입력됩니다.

    - noAuth?: boolean

      **무인증 등록/결제 여부**

      `true`로 입력한 경우 무인증 키가 발급되며, 이후 결제시 PIN번호 인증 과정이 생략됩니다.

      - true : 무인증 결제
      - false : 인증 결제

    - installment?: number

      **할부 개월수**

      입력하지 않는 경우 일시불로 진행됩니다.

    - useCardPoint?: boolean

      **카드사 포인트 결제 여부**

      입력하지 않는 경우 미사용으로 진행됩니다.

      - true : 카드사 포인트 사용
      - false : 카드사 포인트 미사용

#### 유의사항

<details>

<summary>`customer_uid` 파라미터 안내</summary>

결제수단 등록/삭제, 결제 요청시에는 결제수단을 식별하는 `customer_uid`를 입력한 후 사용해야 합니다.
이 외의 PIN번호 변경/확인/초기화, 사용자 등록, 해지 요청시에는 `customer_uid`에 결제수단 등록시 입력한 `memberID`를 입력해야 합니다.
위의 경우에 `customer_uid` 파라미터에 발급시 입력했던 `customer_uid`를 입력하는 경우 에러가 리턴됩니다.

</details>

<details>

<summary>결제수단을 여러개 등록할 수 있습니다.</summary>

한 고객에게 여러개의 결제수단을 등록할 수 있습니다.
고객 식별 정보(`memberID`)와 결제 수단 식별 정보(`customer_uid`)의 경우 1:N으로 맵핑되며,
이미 등록한 고객의 `memeberID`를 동일하게 입력한 후 사용하지 않은 `customer_uid`를 지정하는 경우 여러개의 결제 수단을 등록할 수 있습니다.

</details>

<details>

<summary>결제수단 삭제 요청시 등록할 때 입력한 정보를 동일하게 입력해야 합니다.</summary>

결제수단 삭제(actionType:Deregister) 요청시 결제수단 등록할 때 사용된 `customer_uid` + `memberCI` + `memberID` + `deviceID` + `noAuth` 조합을
동일하게 전송해야 합니다.

</details>

<details>

<summary>PIN번호 초기화 시 기존에 등록된 모든 결제수단이 삭제됩니다.</summary>

핀번호 초기화 시 기존에 등록된 모든 결제수단이 삭제됩니다. 이에 따라 고객사에서는 `customer_uid`로 저장된 데이터를 일괄 삭제해야 합니다.
핀번호 초기화 이후 [빌링키 삭제 API](https://developers.portone.io/api/rest-v1/billingkey?v=v1#delete%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 이용하여 일괄 삭제할 수 있습니다.
만약 핀번호 초기화 전에 삭제를 시도하는 경우 에러 메시지와 함께 삭제가 불가능합니다.

</details>

<details>

<summary>등록된 전화번호 변경 기능은 사전 협의 후 사용 가능합니다.</summary>

전화 번호 변경(actionType:PhoneChange)은 퀵페이에 등록된 전화번호를 변경할 수 있는 기능입니다.
해당 기능 사용을 원하시는 경우 KCP와 사전에 협의가 필요합니다.

</details>

<details>

<summary>결제 시 등록된 결제수단 화면을 표시할 수 있습니다.</summary>

결제(actionType:Pay)시 `customer_uid`를 빈 값 또는 생략한 경우 등록된 결제수단을 선택하는 화면이 표시됩니다.

</details>

<details>

<summary>결제 금액이 30만원 이상인 경우 ARS 인증이 진행됩니다.</summary>

결제 금액이 30만원 이상인 경우 ARS 인증이 진행되며, 퀵페이 등록시 입력된 전화 번호로 전화가 갑니다.

</details>

<details>

<summary>퀵페이 해지 안내 </summary>

해지(actionType:Terminate)시
[빌링키 삭제 API](https://developers.portone.io/api/rest-v1/billingkey?v=v1#delete%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 이용하여 등록되어 있던 결제수단을 일괄 삭제해야 합니다.

</details>

<details>

<summary>무인증 결제 안내</summary>

결제 수단 등록, PIN번호 체크시 `noAuth:true` 파라미터를 추가하여 요청한 경우 무인증 등록이 가능합니다.
등록 이후 결제 요청하는 경우 무인증 결제를 이용할 수 있습니다. 무인증 결제시 PIN번호 입력 과정이 생략되며,
바로 결제과 진행됩니다.

만약 무인증 등록과정 없이 무인증 결제가 요청되는 경우 PIN번호 입력 화면이 표시되고, 올바른 PIN번호 입력시 무인증 등록 및 결제가 진행됩니다.

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/nice

---
title: (구) 나이스페이먼츠
description: (구) 나이스페이먼츠 결제창 연동 가이드를 안내합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="warning">

**나이스페이먼츠(구모듈) 연동 방법에 관한 매뉴얼**입니다.

신규 연동 고객사이시거나 나이스페이먼츠 신모듈로 업그레이드를 원하신다면 [나이스페이먼츠(신모듈) 연동 가이드](https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/readme)를 참고하여 진행해주세요.
구모듈에 비해 신모듈에서 다양한 기능 및 결제수단을 지원하고 있습니다. 신규 고객사의 경우 가급적 신모듈로 연동하는 것을 권장드립니다.

</div>

## 1. 나이스페이먼츠 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
NICE페이먼츠 결제창을 호출할 수 있습니다.
**결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback** 으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    language: "en", // 결제창 언어 선택 파라미터  ko: 한국어, en: 영문
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    niceMobileV2: true, // 신규 모바일 버전 적용 시 설정
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `nice` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card(신용카드)
  - trans(실시간 계좌이체)
  - vbank(가상계좌)
  - phone(휴대폰소액결제)
  - kakaopay(카카오페이)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- niceMobileV2?: boolean

  나이스 모바일 신규버전 적용 여부(기본 값: `false`)

- escrow?: boolean

  **에스크로 설정여부**

- currency?: string

  **결제 통화(기본 값: KRW)**

  - KRW(한국 원)
  - USD(미국 달러)(모바일의 경우 `niceMobileV2` 파라미터가 `true`일 경우에만 사용 가능)

</div>

<div class="tabs-content" data-title="비인증 API 요청">

**API 방식으로 빌링키 발급,결제요청,예약결제를 구현할수 있습니다.**

---

**일회성 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 일회성 결제를 요청합니다. 요청 시 전달된 카드는 포트원에 등록되지 않습니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

---

**빌링키 발급 요청하기**

REST [**API POST /subscribe/customers/{customer\_uid}**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 호출하여 빌링키 발급을 요청합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

---

**빌링키 발급 및 최초 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 빌링키 발급과 최초 결제를 요청합니다.

- **`customer_uid`** : 빌링키 등록을 위해서 지정해야 합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

---

**빌링키로 결제 요청하기**

빌링키 발급과 최초 결제가 성공하면 빌링키는 전달된 `customer_uid` 와 1:1 매칭되어 포트원에 저장됩니다.
보안상의 이유로 서버는 빌링키에 직접 접근할 수 없기 때문에 `customer_uid`를 이용해서
재결제([**POST /subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)) REST API를 다음과 같이 호출합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

<div class="hint" data-style="info">

**나이스페이먼츠는 비인증 결제는 API 방식으로만 지원됩니다.**

비인증 결제를 연동하기 위해서는 카드정보를 획득할수 있는 UI를 구성해 주셔야 하며
해당 가이드는 [**비인증결제 연동하기**](https://developers.portone.io/opi/ko/integration/start/v1/non-auth)에서 확인해주시면 됩니다.

</div>

</div>

</div>

## 3. 부가기능

<div class="tabs-container">

<div class="tabs-content" data-title="할부개월수 설정">

```json
{
  "display": {
    "card_quota": [6] // 할부개월 6개월까지만 활성화
  }
}
```

**파라미터 설명**

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정값**

  - card\_quota: number\[]

    **할부 개월수**

    예시

    - `[]`: 일시불만 결제 가능
    - `2,3,4,5,6`: 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능
    - `3`: 일시불을 포함한 2,3개월까지 할부개월 선택 가능

<div class="hint" data-style="info">

할부결제는 **5만원 이상 결제 요청 시**에만 이용 가능합니다.

</div>

</div>

<div class="tabs-content" data-title="카드사 모듈 바로 호출">

```json
{
  "card": {
    "direct": {
      "code": "367",
      "quota": 3
    }
  }
}
```

**파라미터 설명**

- **`code`** : 카드사 금융결제원 표준 코드. [**링크**](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조 (**string**)
- **`quota`** : 할부 개월 수. 일시불일 시 0으로 지정. (**number**)

<div class="hint" data-style="danger">

**주의사항**

- 일부 PG사의 경우, 모든 상점아이디에 대하여 카드사 결제창 direct 노출 기능을 지원하지 않습니다. 반드시 포트원을 통해 현재 사용중인 상점아이디가 카드사 결제창 direct 호출이 가능하도록 설정이 되어있는지 PG사에 확인이 필요합니다.

</div>

</div>

<div class="tabs-content" data-title="특정 카드사 노출">

```json
{
  "card": {
    "detail": [
      { "card_code": "*", "enabled": false }, //모든 카드사 비활성화
      { "card_code": "366", "enabled": true } //특정 카드만 활성화
    ]
  }
}
```

**파라미터 설명**

- detail?: object\[]

  **카드사 렌더링 정보**

  - card\_code?: string

    **카드사 코드**

    [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code)를 참고하세요.

  - enabled?: boolean

    **렌더링 여부**

</div>

<div class="tabs-content" data-title="부가세 지정">

```json
// 영세율 결제 경우
{
  "amount": 1000,
  "tax_free": 0,
  "vat_amount": 0 // 부가세 지정
}
```

**파라미터 설명**

- vat\_amount?: number

  **부가세 지정**

  상점 아이디 설정이 영세율 방식인 경우 부가세를 지정할 수 있습니다.

<div class="hint" data-style="danger">

주의사항

- 상점 아이디 설정이 지정금액 방식인 경우에는 취소 시에 공급가액, 부가세, 봉사료, 면세금액 등을 설정하도록 하고 있습니다.([링크](http://developers.nicepay.co.kr/tip.php)의 1617 코드 참조). 취소 시 취소할 금액, 부가세, 면세금액을 정확하게 전달해 주셔야 공급가액, 부가세, 면세금액, 봉사료(0원)가 설정되어 정상적으로 취소가 된다는 점 주의해주시기 바랍니다.

</div>

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/payco

---
title: 페이코
description: 페이코 결제 연동방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 페이코 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
페이코 결제창을 호출할 수 있습니다. **결제결과**는 PC, 모바일 모두 `IMP.request_pay(param, callback)` 호출
후 **callback** 으로 수신됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001", // 상점에서 관리하는 주문 번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `payco` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- popup?: boolean

  페이코의 경우 모바일 환경에서 기본으로 iframe 방식으로 결제창이 호출됩니다.
  팝업 방식으로 결제창 호출을 원하시는 경우 `popup : true`로 설정해 주세요.

  **WebView 등 팝업이 차단되는 환경**에서는 `popup : false`로 설정하신 후 호출하시길 권장드립니다.

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank(가상계좌)

- merchant\_uid: string

  **`고객사 주문번호`**

  매번 고유하게 채번되어야 합니다.

- buyer\_tel: string

  **구매자 연락처**

  필수 파라미터 입니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

</div>

<div class="tabs-content" data-title="정기 결제창 요청">

인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 비 인증 결제창을 호출할 수 있습니다.

<div class="hint" data-style="info">

**amount 금액**

- 금액이 설정되어도 실결제는 발생되지 않습니다.

</div>

```ts title="JavaScript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "PAYCO 자동결제 등록",
    amount: 1000, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급(자동결제 등록) 성공");
    } else {
      alert("빌링키 발급(자동결제 등록) 실패");
    }
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  **`payco`** 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- popup?: boolean

  페이코의 경우 모바일에서 기본으로 iframe 방식으로 결제창이 호출됩니다. `popup : true`로 설정하시면 결제창이 팝업창으로 뜨게 됩니다.

  **WebView 등 팝업이 차단되는 환경**에서는 `popup : false`로 설정하는 것을 권장합니다.

- customer\_uid?: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: number

  **결제금액**

  금액이 설정되어도 실 결제는 발생되지 않습니다.

**빌링키(`customer_uid`)로 결제 요청하기**

빌링키 발급이 성공하면 실 빌링키는 `customer_uid` 와 1:1 매칭되어 **포트원 서버에 저장**됩니다. `customer_uid`를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출하시면 결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

<div class="tabs-content" data-title="정기결제 API 방식">

**페이코는 API 비 인증 결제를 지원하지 않습니다.**

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/paymentwall

---
title: 페이먼트월
description: 페이먼트월 결제창 연동가이드를 확인 합니다.
targetVersions:
  - v1
---

## 1. 페이먼트월 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
페이먼트월 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 IMP.request\_pay(param, callback)
호출 후 **callback** 으로 수신되며
모바일의 경우**m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 페이먼트월은 국가IP에 따라 결제수단이 활성화 됩니다.(생략가능)
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    currency: "KRW", // 필수 파라미터
    buyer_email: "test@portone.io", //필수 파라미터
    buyer_name: "Jack Son", // 반드시 Firstname Lastname 이 빈칸으로 구분되어야
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    use_test_method: true, // 테스트 결제 수단을 활성화하는 파라미터,
    bypass: {
      // 터미날3 인경우 해당 파라미터 설정, 미 설정시 Defualt(일반) 결제창 활성화
      widget_code: "t3_1",
      // 특정 결제수단만 활성화 하는 경우 사용 all 인 경우(default) 국가 지원 결제수단 모두 표
      ps: "all",
      country_code: "DE", // 코드가 지정되면 지정된 국가에서 지원하는 결제수단이 활성화됩니다.
    },
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `paymentwall`로 지정하면 됩니다. 페이먼트월 채널을 여러개 사용하는 경우 `{pg}.{mid}` 형식으로 요청해야 합니다. (예시-`paymentwall.{projeckey}`)

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method?: string

  **결제수단 구분코드**

  결제수단 제어는 [페이먼트월 홈페이지](http://api.paymentwall.com/) 안에서 Project를 활성화 하여 제어가 가능합니다. 따라서 `pay_method`의 값은 무시될 수 있습니다.

  (별도로 제어하지 않으시면 국가IP에 맞는 결제수단이 기본으로 노출됩니다)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  string 형식이 아닌 integer 형식으로 요청해야 합니다.

- name: string

  **주문명**

  페이먼트월의 경우 필수로 입력해야 합니다.

- buyer\_name: string

  **구매자 이름**

  결제시 사용되는 구매자 이름 입니다. 페이먼트월의 경우 필수로 입력해야 합니다.

- buyer\_email: string

  **구매자 email 주소**

  결제시 사용되는 구매자 이메일입니다. 페이먼트월의 경우 필수로 입력해야 합니다.

- currency: string

  **통화구분코드**

  입력하지 않는 경우 기본적으로 `KRW`로 요청하며, 해외 통화 결제 시 해당 통화 구분 코드를 입력한 후 요청해야 합니다.

- use\_test\_method?: boolean

  **테스트 결제수단 활성화 여부**

  LIVE 프로젝트에서 테스트 결제수단을 활성화 하는 경우 사용합니다.

  만약 LIVE 프로젝트가 아니라면(페이먼트월 심사 완료 전 단계), `use_test_method` 파라미터 설정과 동시에 bypass의 `ps` 파라미터를 `test`로 설정해야 테스트 결제수단 사용이 가능합니다.

  ```ts title="Javascript SDK"
  IMP.request_pay({
    use_test_method: true,
    bypass: {
      ps: "test", // LIVE 프로젝트가 아닌 경우, ps도 test로 설정해야만 테스트 결제수단이 활성화됩니다.
    },
  });
  ```

- bypass: object

  **페이먼트월 전용 파라미터**

  - widget\_code?: string

    터미날3 인 경우 `t3_1`로 파라미터를 설정해야 합니다. 미설정시 Default(일반) 결제창이 활성화됩니다.

  - ps?: string

    특정 결제수단만 활성화 하는 경우 사용됩니다. 페이먼트월 가이드를 참고하여 해당하는 코드를 입력해야 합니다. [→ 페이먼트월 가이드 바로가기](http://docs.paymentwall.com/reference/payment-system-shortcodes) ex) `kakaopaykr` = 카카오페이

  - country\_code?: string

    지정된 국가에서 지원되는 결제수단이 위젯상에 노출됩니다. 다음 문서를 참고하여 해당하는 국가코드를 입력해야 합니다. [→ 국가코드 바로가기](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

</div>

<div class="tabs-content" data-title="비 인증 결제">

인증결제창 호출 파라미터에서 `customer_uid` 값을 추가하면 비 인증 결제창을 호출할 수 있습니다.
비 인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 빌링키 결제는 오직 신용카드만 가능합니다.
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 20, // 빌링키 발급과 함께 최초 승인이 같이 이루어집니다.
    currency: "USD", // 필수 파라미터
    customer_uid: "your-customer-unique-id", // 필수 입력
    buyer_email: "test@portone.io", // 빌링키 발급시 기재한 주소와 빌링키 결제할때 기재한 주소가 동일해야 합니다.
    buyer_name: "Jack Son", // 반드시 Firstname Lastname 이 빈칸으로 구분되어야 합니다.
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `paymentwall`로 지정하면 됩니다. 페이먼트월 채널을 여러개 사용하는 경우 `{pg}.{mid}` 형식으로 요청해야 합니다. (예시-`paymentwall.{projeckey}`)

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.
  빌링키 발급이 성공하면 실 빌링키는 `customer_uid`와 1:1 매칭되어 **포트원 서버에 저장**됩니다.
  `customer_uid`를 고객사 내부서버에 저장한 후 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출하여 결제 요청을 해야합니다.

  ```sh title="server-side"
  curl -H "Content-Type: application/json" \
      -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
      https://api.iamport.kr/subscribe/payments/again
  ```

- amount: number

  **결제금액**

  string 형식이 아닌 integer 형식으로 요청해야 합니다.
  설정된 금액으로 **최초 승인이 발생**됩니다.

- name: string

  **주문명**

  페이먼트월의 경우 필수로 입력해야 합니다.

- buyer\_name: string

  **구매자 이름**

  결제시 사용되는 구매자 이름 입니다. 페이먼트월의 경우 필수로 입력해야 합니다.

- buyer\_email: string

  **구매자 email 주소**

  결제시 사용되는 구매자 이메일입니다. 페이먼트월의 경우 필수로 입력해야 합니다.

- currency: string

  **통화구분코드**

  입력하지 않는 경우 기본적으로 `KRW`로 요청하며, 해외 통화 결제 시 해당 통화 구분 코드를 입력한 후 요청해야 합니다.

</div>

</div>

<div class="hint" data-style="danger">

**배송정보 등록 API**

페이먼트월을 통한 이커머스(실물상품) 결제인 경우 아래 배송정보등록 API를 반드시 연동해야 합니다. 해당 API를 연동하지 않을 경우 정산 시 문제가 발생할 수 있습니다.

[→ 페이먼트월 배송등록 API 바로가기](https://developers.portone.io/api/rest-v1/pg.paymentwall)

</div>

<div class="hint" data-style="danger">

페이먼트월의 경우 빌링키 발급 시 빌링키 발급과 동시에 결제가 이루어지는 방식으로만 제공하고 있습니다.
페이먼트월 정책에 따라 최초 결제 승인 없이 **빌링키만 발급하는 방식은 지원되지 않습니다.**

또한, 빌링키만 발급하기 위해 임의의 결제를 발생시켜 승인 후 즉시 취소하는 경우 카드사 정책에 따라 이용이 중지될 수 있습니다.

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/paypal

---
title: 페이팔(Express Checkout)
description: 페이팔(Express Checkout) 결제연동 방법을 안내합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="danger">

페이팔 Express checkout 방식으로 신규 가입 및 연동이 불가합니다.
페이팔 연동을 원하는 경우, [페이팔 일반 결제(Smart Payment Buttons) 연동 가이드](https://developers.portone.io/opi/ko/integration/pg/v1/spb/readme)
또는 [페이팔 정기 결제(Reference Transaciton) 연동 가이드](https://developers.portone.io/opi/ko/integration/pg/v1/rt/readme)를 참고하여 진행해주세요.

</div>

## 1. 페이팔 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
페이팔 결제창을 호출할 수 있습니다. **결제결과**는 **PC / 모바일** 모두
**`m_redirect_url`** 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 관리하는 주문 번호
    name: "주문명:결제테스트",
    amount: 14.2,
    currency: "USD", // 기본값: USD(원화 KRW는 페이팔 정책으로 인해 지원하지 않음)
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `paypal` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)

- merchant\_uid: string

  **`고객사 주문번호`**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- currency: string

  **결제통화코드**

  지원 가능한 모든 통화는 [페이팔 공식 문서](http://developer.paypal.com/docs/api/reference/currency-codes/#paypal-account-payments)를 참고해주세요

- m\_redirect\_url: string

  **결제결과 수신 URL**

  PC환경 모바일 환경 모두 해당 값을 필수로 설정해야 결과를 받아볼수 있습니다.

</div>

</div>

## 추가 기능 <a href="#additional-features" id="additional-features" />

Paypal에서는 고위험업종(게임, 디지털 콘텐츠) 고객사의 경우 판매자 보호 및 더 높은 수준의 위험관리를
위해 STC API(SetTransactionContext API)를 제공합니다.

고위험거래를 안전하게 요청하기 위해서는 거래를 증명할 추가적인 정보(STC API로 전달할 정보)가
필요하며, 아래 예제와 같이 `request_pay`에 파라미터를 추가하여 고위험거래를 요청할 수 있습니다.

```ts
IMP.request_pay({
  /* 요청 객체 */
  // Paypal 전용 파라미터로 결제요청 파라미터 문서에 존재하지 않습니다.
  optional: {
    use_stc_api: true,
    stc_data: {
      // Paypal과 협의한 STC(SetTransactionContext) 데이터를 넣어주세요.
      sender_account_id: "A12345N343",
    },
  },
});
```

고위험거래인 경우에만 해당 파라미터가 제공될 수 있도록 사용에 유의해주세요.

자세한 내용은 [Paypal Transaction Risk](http://developer.paypal.com/limited-release/raas/) 문서를 참고해주세요.

<div class="hint" data-style="info">

STC API를 사용하기 위해서는 **Paypal과의 STC 데이터 협의**가 필요하며,
**포트원 지원팀(<support@portone.io>)을 통해 요청**해주시면 협의 프로세스를 안내해드리고 있습니다.

연동을 원하시는 경우 원활한 연동절차를 위해 요청 전 **아래 pdf의 Create REST API Application 섹션을 완료**해주세요.

</div>

(파일 다운로드 링크)

<div class="hint" data-style="warning">

**참고사항**

포트원은 페이팔 정기결제를 지원하지 않습니다.

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/readme

---
title: 결제대행사 선택하여 연동하기
description: 각 결제대행사(PG)사별 결제 연동 방법 및 유의사항을 확인할 수 있습니다.
cover: >-
  https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxOTcwMjR8MHwxfHNlYXJjaHw2fHxjb21wYW55fGVufDB8fHx8MTY4MTcxNzYyNg&ixlib=rb-4.0.3&q=85
coverY: 0
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/readme
---

## 국내결제

[나이스페이먼츠 (신모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/readme)

[(구) 나이스페이먼츠](https://developers.portone.io/opi/ko/integration/pg/v1/nice)

[NHN KCP](https://developers.portone.io/opi/ko/integration/pg/v1/nhn-kcp)

[KG이니시스](https://developers.portone.io/opi/ko/integration/pg/v1/inicis)

[토스페이먼츠(신모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/newtoss/readme)

[토스페이먼츠(구모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/toss)

[스마트로(신모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/readme)

[스마트로(구모듈)](https://developers.portone.io/opi/ko/integration/pg/v1/smartro)

[다날](https://developers.portone.io/opi/ko/integration/pg/v1/danal)

[키움페이 (다우데이타/페이조아)](https://developers.portone.io/opi/ko/integration/pg/v1/daou/readme)

[헥토파이낸셜](https://developers.portone.io/opi/ko/integration/pg/v1/settle/readme)

[KG모빌리언스](https://developers.portone.io/opi/ko/integration/pg/v1/kg)

[KSNET](https://developers.portone.io/opi/ko/integration/pg/v1/ksnet/readme)

[이지페이(KICC)](https://developers.portone.io/opi/ko/integration/pg/v1/kicc)

[웰컴페이먼츠](https://developers.portone.io/opi/ko/integration/pg/v1/welcome/readme)

## 국내 간편결제

[네이버페이(결제형)](https://developers.portone.io/opi/ko/integration/pg/v1/naver)

[카카오페이](https://developers.portone.io/opi/ko/integration/pg/v1/kakaopay)

[페이코](https://developers.portone.io/opi/ko/integration/pg/v1/payco)

[스마일페이](https://developers.portone.io/opi/ko/integration/pg/v1/smilepay)

[토스페이(tosspay\_v2)](https://developers.portone.io/opi/ko/integration/pg/v1/tosspay-v2/readme)

[토스페이(tosspay)](https://developers.portone.io/opi/ko/integration/pg/v1/tosspay)

[토스페이먼츠 브랜드페이](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/readme)

[하이픈](https://developers.portone.io/opi/ko/integration/pg/v1/hyphen)

## 해외결제

[엑심베이](https://developers.portone.io/opi/ko/integration/pg/v1/eximbay)

[페이먼트월](https://developers.portone.io/opi/ko/integration/pg/v1/paymentwall)

[페이팔(Smart Payment Buttons) 일반결제](https://developers.portone.io/opi/ko/integration/pg/v1/spb/readme)

[페이팔(Reference Transaction) 정기결제](https://developers.portone.io/opi/ko/integration/pg/v1/rt/readme)

[페이팔(Express Checkout)](https://developers.portone.io/opi/ko/integration/pg/v1/paypal)


# https://developers.portone.io/opi/ko/integration/pg/v1/smartro

---
title: 스마트로(구모듈)
description: 스마트로 연동 방법을 안내합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="warning">

**스마트로(구모듈) 연동 방법에 관한 매뉴얼**입니다.

신규 연동 고객사이시거나 스마트로 신모듈로의 업그레이드를 원하신다면 [스마트로(신모듈) 연동 가이드](https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/readme)를 참고하여 진행해주세요.
구모듈에 비해 신모듈에서 다양한 기능 및 결제수단을 지원하고 있습니다. 신규 고객사의 경우 가급적 신모듈로 연동하는 것을 권장드립니다.

</div>

## 1. 스마트로 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
스마트로 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)`
호출 후 **callback**으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `smartro` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank(가상계좌)

- merchant\_uid: string

  **`고객사 주문번호`**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/smilepay

---
title: 스마일페이
description: 스마일페이 결제 연동방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 스마일페이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
스마일페이 결제창을 호출할 수 있습니다.
**결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후 **callback** 으로 수신되며
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```javascript title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_no_0001", // 상점에서 관리하는 주문 번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `smilepay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)

- merchant\_uid: string

  **`고객사 주문번호`**

  매번 고유하게 채번되어야 합니다.

- buyer\_tel: string

  **구매자 연락처**

  필수 파라미터 입니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/toss

---
title: 토스페이먼츠(구모듈)
description: 토스페이먼츠 연동 방법을 확인합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="warning">

**토스페이먼츠(구모듈) 연동 방법에 관한 매뉴얼**입니다.

신규 연동 고객사이시거나 토스페이먼츠 신모듈로의 업그레이드를 원하신다면 [토스페이먼츠(신모듈) 연동 가이드](https://developers.portone.io/opi/ko/integration/pg/v1/newtoss/readme)로 참고하여 진행해주세요.
구모듈에 비해 신모듈에서 다양한 기능 및 결제수단을 지원하고 있습니다. 신규 고객사의 경우 가급적 신모듈로 연동하는 것을 권장드립니다.

</div>

## 1. 토스페이먼츠 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 결제창 호출

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
토스페이먼츠 결제창을 호출할 수 있습니다.
**결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback** 으로 수신되어
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

예시 코드는 아래와 같습니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", //상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    appCard: true, // 설정시 신용카드 결제모듈에서 앱카드 결제만 활성화됩니다.
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `uplus` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card(신용카드)
  - trans(실시간 계좌이체)
  - vbank(가상계좌)
  - phone(휴대폰소액결제)
  - applepay(애플페이)
  - tosspay(토스페이)
  - naverpay(네이버페이)
  - kakaopay(카카오페이)
  - lpay(엘페이)
  - payco(페이코)
  - samsung(삼성페이)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- escrow?: boolean

  **에스크로 설정여부**


# https://developers.portone.io/opi/ko/integration/pg/v1/tosspay

---
title: 토스페이(tosspay)
description: 토스페이 연동 방법을 안내합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="info">

토스페이(tosspay)는 일반결제만 지원됩니다. 일반결제 및 정기결제 모두 사용하시는 고객사께서는 [토스페이(tosspay\_v2) 연동 가이드](https://developers.portone.io/opi/ko/integration/pg/v1/tosspay-v2/readme)를 참고하여 진행해주세요.
신규 고객사의 경우 가급적 토스페이(tosspay\_v2)로 연동하는 것을 권장드립니다.

</div>

## 1. 토스페이 채널설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여
토스간편결제 결제창을 호출할 수 있습니다.
**결제결과**는 PC 환경은 **callback**,
모바일 환경은 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="일반결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트", // 필수 파라미터 입니다.
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `tosspay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method?: string

  **결제수단 구분코드**

  신용카드 : `card` | 계좌이체 : `trans`

- name: string

  **제품명**

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

</div>

</div>

<div class="hint" data-style="info">

**토스페이 간편결제는 스마트폰 토스 앱상에서 결제가 진행됩니다.**

</div>


# https://developers.portone.io/opi/ko/integration/start/v1/auth

---
title: 인증 결제 연동하기
description: PG 결제창을 이용하는 인증 결제를 연동합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/start/v2/checkout
---

## 인증 결제란? <span id="definition" />

인증 결제는 결제 시 PG사로부터 결제에 대한 인증 결과 수신 이후 해당 인증키로 결제를 요청하는
결제 방식을 지칭합니다. 국내에서 제일 많이 볼 수 있는 결제 방식으로 결제 주문 페이지에서 결제가
요청되면 각 PG사의 결제창이 활성화되고, 그 후 고객이 선택한 카드사에 따른 카드사 전용 결제 모듈에서
인증이 완료되면 해당 인증값을 통해 결제를 요청하는 흐름으로 결제가 진행됩니다.

(이미지 첨부: 일반적인 인증 결제 플로우)

<div class="hint" data-style="info">

실제 결제 요청을 위한 통신은 고객사 서버와 PG사 서버 간에 직접적으로 이루어지며,
해당 결제 요청 과정에 카드 정보는 포함되지 않습니다.

</div>

인증 결제는 인증 방법에 따라 전통적으로 아래 두 가지 형태로 구분됩니다.

- ISP 결제 : 공개 키 기반의 전자인증서를 통해 사전에 등록된 카드 정보를 인증하는 방식
- MPI 결제 : 카드 번호, CVC, 안심클릭 비밀번호를 입력하여 카드 정보를 인증하는 방식

최근에는 대부분의 카드사에서 카드사 자체 간편결제를 지원하고 있으며, 고객은 사전에 카드를
등록하고 결제 시 결제 비밀번호를 이용하여 간편하게 결제를 요청할 수 있는 구조를 가지고
있습니다.

(이미지 첨부: 인증 결제 사용 예시)

## 인증 결제 연동하기

<details>

<summary>

<strong>영상으로 보기</strong>

</summary>

[포트원 인증 결제의 이해 - 쇼핑몰 멀티PG 연동하기](https://www.youtube.com/watch?v=DhcQFLYV9Q8)

</details>

### 1. 포트원 SDK 설치하기 <span id="sdk-installation" />

포트원은 다양한 PG의 결제창을 통일된 방법으로 호출할 수 있도록 자바스크립트 SDK를 제공합니다.
브라우저에서 포트원 SDK를 호출하여 결제를 진행하게 됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제창 연동을 진행할 주문 페이지에 아래 JS 라이브러리를 추가합니다.

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

[포트원 라이브러리 추가하기](https://www.youtube.com/watch?v=FLyOmbtnr48)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

### 2. 결제 요청하기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

#### SDK 초기화하기 <span id="sdk-initialization" />

포트원 SDK를 사용하여 결제창을 호출하려면, 먼저 포트원 SDK를 초기화하여야 합니다.

먼저, 관리자 콘솔의 결제 연동 페이지에서 **고객사 식별코드**를 확인해 주세요.

그리고 결제창을 호출할 페이지에서 다음과 같이 포트원 SDK를 초기화합니다.

<div class="hint" data-style="warning">

아래 초기화 함수를 2회 이상 중복 호출하지 않도록 주의해 주세요.

</div>

```ts
IMP.init("고객사 식별코드"); // 예: 'imp00000000'
```

##### 하위 상점에서 SDK 초기화하기

하위 상점에서 SDK를 초기화하려면, `IMP.init()` 함수 대신 `IMP.agency()` 함수를 사용합니다.

```ts
IMP.agency("고객사 식별코드", "티어코드"); // 예: 'imp00000000', '123'
```

#### 결제창 불러오기

SDK의 `IMP.request_pay()` 함수를 호출하여 결제 수단에 따른 결제창을 열 수 있습니다.

아래와 같이 [결제 요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq)를 `request_pay()` 함수의
첫 인자로 설정하여 호출합니다.

```ts
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: `payment-${crypto.randomUUID()}`, // 주문 고유 번호
    name: "노르웨이 회전 의자",
    amount: 64900,
    buyer_email: "gildong@gmail.com",
    buyer_name: "홍길동",
    buyer_tel: "010-4242-4242",
    buyer_addr: "서울특별시 강남구 신사동",
    buyer_postcode: "01181",
  },
  function (response) {
    // 결제 종료 시 호출되는 콜백 함수
    // response.imp_uid 값으로 결제 단건조회 API를 호출하여 결제 결과를 확인하고,
    // 결제 결과를 처리하는 로직을 작성합니다.
  },
);
```

[결제하기 버튼 생성 및 결제창 호출](https://www.youtube.com/watch?v=Gq7r5AUoMKs)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

SDK의 `PortOne.requestPayment()` 함수를 호출하여 결제 수단에 따른 결제창을 열 수 있습니다.

먼저, 관리자 콘솔의 결제 연동 페이지에서 **Store ID**와 사용할 채널의 **채널 키**를 확인해 주세요.

그리고 아래와 같이 [결제 요청 파라미터](https://developers.portone.io/sdk/ko/v2-sdk/payment-request)를
`requestPayment()` 함수의 첫 인자로 설정하여 호출합니다.

```ts
const response = await PortOne.requestPayment({
  // Store ID 설정
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
  // 채널 키 설정
  channelKey: "channel-key-893597d6-e62d-410f-83f9-119f530b4b11",
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
  payMethod: "CARD",
});
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<div class="hint" data-style="info">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

**주문 고유 번호(`merchant_uid`) 관련 유의사항**

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

**주문 고유 번호(`paymentId`) 관련 유의사항**

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

- 주문 고유 번호는 개별 결제 요청을 구분하기 위해 사용되는 문자열입니다.

- 따라서 주문 고유 번호는 결제 요청 시 항상 **고유한 값**으로 채번되어야 하며,
  결제 완료 이후 결제 기록 조회나 위변조 대사 작업 시 사용되기 때문에
  고객사 **DB 상에 별도로 저장**해야 합니다.

</div>

### 3. 결제 결과 처리하기 <span id="handle-result" />

결제창이 활성화되는 방식에 따라 결제 결과를 획득하는 방법이 상이합니다.

일반적으로 PC 환경에서는 iframe 또는 팝업 방식으로 페이지 이동 없이 결제창이 활성화되며,
따라서 SDK의 반환값을 통해서 결제 결과를 받아 볼 수 있습니다.
반면, 모바일 환경에서는 일반적으로 새로운 페이지로 리다이렉트되는 방식으로 결제창이 활성화되고,
SDK의 반환값 대신 URL의 [쿼리 문자열](http://en.wikipedia.org/wiki/Query_string) 형태로
결제 결과를 받아볼 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

결제창이 활성화되는 방식은 `windowType` 파라미터를 통해 명시적으로 설정할 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

#### SDK 반환값으로 처리하기 <span id="handle-callback" />

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

**`request_pay()`** 함수의 두 번째 인자인 **callback** 함수를 통해 결제 결과를 확인할 수 있습니다.

```ts
IMP.request_pay(
  {
    /* 파라미터 생략 */
  },
  async (response) => {
    if (response.error_code != null) {
      return alert(`결제에 실패하였습니다. 에러 내용: ${response.error_msg}`);
    }

    // 고객사 서버에서 /payment/complete 엔드포인트를 구현해야 합니다.
    // (다음 목차에서 설명합니다)
    const notified = await fetch(`${SERVER_BASE_URL}/payment/complete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // imp_uid와 merchant_uid, 주문 정보를 서버에 전달합니다
      body: JSON.stringify({
        imp_uid: response.imp_uid,
        merchant_uid: response.merchant_uid,
        // 주문 정보...
      }),
    });
  },
);
```

결제가 완료되면 반환되는 응답 객체([response](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme))의
에러 여부에 따라 처리 로직을 콜백 함수에 작성합니다.
요청이 성공했을 경우에 결제번호(`imp_uid`)와 주문번호(`merchant_uid`)를
서버에 전달하는 로직을 위와 같이 작성합니다.

<div class="hint" data-style="danger">

최종 결제 결과 처리는 반드시 [웹훅](https://developers.portone.io/opi/ko/integration/webhook/readme-v1)을 이용하여
안정적으로 처리해 주셔야 합니다.

웹훅 연동을 생략하시는 경우 결제 결과를 정상적으로 수신받지 못하는 상황이 발생합니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

`PortOne.requestPayment()` 함수의 반환값을 통해 결제 요청의 결과를 확인할 수 있습니다.

`code`가 있으면 결제 과정에서 오류가 발생한 것이므로 적절히 처리하여야 합니다.

결제가 성공한 경우 `paymentId`를 서버에 전달하여 서버 측에서 결제 완료 처리를 진행하도록 합니다.
(가상 계좌 결제의 경우 결제가 아직 완료되지 않은 상태일 수 있습니다)

```ts
async function requestPayment() {
  const response = await PortOne.requestPayment({
    /* 파라미터 생략 */
  });

  if (response.code !== undefined) {
    // 오류 발생
    return alert(response.message);
  }

  // 고객사 서버에서 /payment/complete 엔드포인트를 구현해야 합니다.
  // (다음 목차에서 설명합니다)
  const notified = await fetch(`${SERVER_BASE_URL}/payment/complete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // paymentId와 주문 정보를 서버에 전달합니다
    body: JSON.stringify({
      paymentId: paymentId,
      // 주문 정보...
    }),
  });
}
```

결과값에 들어 있는 필드는 다음과 같습니다.

|필드명     |설명      |비고        |
|-----------|----------|------------|
|`paymentId`|결제 건 ID|공통        |
|`code`     |오류 코드 |실패 시 포함|
|`message`  |오류 문구 |실패 시 포함|

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

#### URL 쿼리 문자열로 처리하기 <span id="handle-redirect" />

모바일 환경에서의 결제는 대부분 리다이렉트 방식으로 이루어집니다.
리다이렉트 방식에서는 브라우저가 결제창으로 리다이렉트되었다가,
결제창에서의 작업이 끝나면 지정한
<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->`m_redirect_url`<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END --><!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->`redirectUrl`<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->로
다시 리다이렉트됩니다.
이 경우에는 함수 호출 결과를 이용할 수 없고,
결제 성공 여부 등은 [쿼리 문자열](http://en.wikipedia.org/wiki/Query_string)로 전달받게 됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts
IMP.request_pay({
  /* 기타 파라미터 생략 */
  m_redirect_url: `${BASE_URL}/payment-redirect`,
}); // 리다이렉트 방식의 경우 콜백은 실행되지 않습니다.
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

```ts
PortOne.requestPayment({
  /* 기타 파라미터 생략 */
  redirectUrl: `${BASE_URL}/payment-redirect`,
});
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

쿼리 문자열로 전달되는 내용은 다음과 같습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

|키            |설명                 |비고        |
|--------------|---------------------|------------|
|`imp_uid`     |포트원 결제 ID       |공통        |
|`merchant_uid`|고객사 주문 고유 번호|공통        |
|`error_code`  |오류 코드            |실패 시 포함|
|`error_msg`   |오류 문구            |실패 시 포함|

예를 들어 `merchant_uid`가 `payment-39ecfa97`, `m_redirect_url`이 `https://example.com/payment-redirect`인 경우,
결제 성공 시에 `https://example.com/payment-redirect?merchant_uid=payment-39ecfa97`로 리다이렉트됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

|키          |설명      |비고        |
|------------|----------|------------|
|`payment_id`|결제 건 ID|공통        |
|`code`      |오류 코드 |실패 시 포함|
|`message`   |오류 문구 |실패 시 포함|

예를 들어 `paymentId`가 `payment-39ecfa97`, `redirectUrl`이 `https://example.com/payment-redirect`인 경우,
결제 성공 시에 `https://example.com/payment-redirect?payment_id=payment-39ecfa97`로 리다이렉트됩니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 4. 결제 완료 처리하기 <span id="complete" />

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

`imp_uid`와 `merchant_uid`를 서버에 전달하면, 서버는 포트원의 [결제 조회 API](https://developers.portone.io/api/rest-v1/payment#get%20%2Fpayments%2F%7Bimp_uid%7D)를
호출하여 해당 결제 건의 상태를 확인하고 결제 완료 처리를 진행하여야 합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

`paymentId`를 서버에 전달하면, 서버는 포트원의 [결제 조회 API](https://developers.portone.io/api/rest-v2/payment#get%20%2Fpayments%2F%7BpaymentId%7D)를
호출하여 해당 결제 건의 상태를 확인하고 결제 완료 처리를 진행하여야 합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<div class="hint" data-style="info">

**결제 검증 필수**

인증 결제의 흐름상 결제 금액 등 정보가 고객의 브라우저 측에서 처리되므로,
의도한 결제 내용이 맞는지 서버 측에서 꼭 확인하여야 위변조를 막을 수 있습니다.

</div>

예시로, 위에서 사용했던 `/payment/complete` 엔드포인트를 다음과 같이 구현할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts title="Express"
// JSON 요청을 처리하기 위해 body-parser 미들웨어 세팅
app.use(bodyParser.json());

// POST 요청을 받는 /payments/complete
app.post("/payment/complete", async (req, res) => {
  try {
    // 요청의 body로 imp_uid와 merchant_uid가 전달되기를 기대합니다.
    const { imp_uid, merchant_uid } = req.body;

    // 1. 포트원 API 엑세스 토큰 발급
    const tokenResponse = await fetch("https://api.iamport.kr/users/getToken", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imp_key: "imp_apikey", // REST API 키
        imp_secret: "ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW", // REST API Secret
      }),
    });
    if (!tokenResponse.ok)
      throw new Error(`tokenResponse: ${await tokenResponse.json()}`);
    const { response } = await tokenResponse.json();
    const { access_token } = response;

    // 2. 포트원 결제내역 단건조회 API 호출
    const paymentResponse = await fetch(
      `https://api.iamport.kr/payments/${imp_uid}`,
      { headers: { Authorization: access_token } },
    );
    if (!paymentResponse.ok)
      throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
    const payment = await paymentResponse.json();

    // 3. 고객사 내부 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
    const order = await OrderService.findById(merchant_uid);
    if (order.amount === payment.amount) {
      switch (payment.status) {
        case "ready": {
          // 가상 계좌가 발급된 상태입니다.
          // 계좌 정보를 이용해 원하는 로직을 구성하세요.
          break;
        }
        case "paid": {
          // 모든 금액을 지불했습니다! 완료 시 원하는 로직을 구성하세요.
          break;
        }
      }
    } else {
      // 결제 금액이 불일치하여 위/변조 시도가 의심됩니다.
    }
  } catch (e) {
    // 결제 검증에 실패했습니다.
    res.status(400).send(e);
  }
});
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[PORTONE\_API\_SECRET](https://developers.portone.io/opi/ko/integration/ready/readme?v=v2#4-2-v2-api-secret-%EB%B0%9C%EA%B8%89%ED%95%98%EA%B8%B0)
은 V2 전용 시크릿으로, 포트원 콘솔 내 결제연동 탭에서 발급받을 수 있습니다.

```ts title="Express"
// JSON 요청을 처리하기 위해 body-parser 미들웨어 세팅
app.use(bodyParser.json());

// POST 요청을 받는 /payments/complete
app.post("/payment/complete", async (req, res) => {
  try {
    // 요청의 body로 paymentId가 전달되기를 기대합니다.
    const { paymentId, orderId } = req.body;

    // 1. 포트원 결제내역 단건조회 API 호출
    const paymentResponse = await fetch(
      `https://api.portone.io/payments/${paymentId}`,
      { headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` } },
    );
    if (!paymentResponse.ok)
      throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
    const payment = await paymentResponse.json();

    // 2. 고객사 내부 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
    const order = await OrderService.findById(orderId);
    if (order.amount === payment.amount.total) {
      switch (payment.status) {
        case "VIRTUAL_ACCOUNT_ISSUED": {
          // 가상 계좌가 발급된 상태입니다.
          // 계좌 정보를 이용해 원하는 로직을 구성하세요.
          break;
        }
        case "PAID": {
          // 모든 금액을 지불했습니다! 완료 시 원하는 로직을 구성하세요.
          break;
        }
      }
    } else {
      // 결제 금액이 불일치하여 위/변조 시도가 의심됩니다.
    }
  } catch (e) {
    // 결제 검증에 실패했습니다.
    res.status(400).send(e);
  }
});
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/integration/start/v1/non-auth

---
title: 비인증결제 연동하기
description: 카드 정보를 직접 입력하여 일회성 결제 또는 빌링키를 발급 및 정기결제 이용 방법을 안내합니다.
targetVersions:
  - v1
---

## 비인증 결제란?

카드 번호, 유효기간, 카드 소유주 생년월일, 비밀번호 2자리 등 카드 정보를 직접 입력하여 일회성 결제(키인(수기)결제)
방식과 카드 정보를 이용하여 빌링키를 발급하고 판매자가 원하는 시점에 고객의 별도 인증 없이 결제를 요청하는 방식을 통칭합니다.

<div class="hint" data-style="info">

구매자의 인증 없이도 결제를 진행할 수 있어 간편하다는 장점이 있지만 구매자 인증 과정이 생략되는만큼
서비스 운영 중 보안상의 이슈가 발생할 확률이 높아 **결제대행사 가입 시 입점심사가 까다롭게 진행**된다는 점 참고해주세요.

</div>

## 키인결제

구매자 인증 없이 카드정보만으로 결제되는 방식(일회성 결제)입니다.
키인(수기) 결제는 카드 정보를 입력하는 것만으로 별도 인증절차 없이 결제가 이루어지며,
결제는 일회성으로 진행되고 카드정보를 저장하지 않기 때문에 결제 요청 시 매번 카드정보를 입력해야 합니다.

<div class="hint" data-style="info">

주로 ARS를 통해 고객분께 카드 정보를 획득하여 결제를 요청하는 콜센타 또는
인증결제의 번거로움을 회피하기 위해 일부 고객사에서 사용하는 방식입니다.
최근에는 인증결제가 간편결제방식으로 전환되면서
매번 카드정보를 기입해야 하는 번거로움 때문에 많이 사용되지 않은 방식입니다.

</div>

카드 정보를 바탕으로 [비 인증 결제(일회성) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fonetime)
를 이용하여 결제를 진행하는 방식입니다.

- **지원 결제대행사**
  - KG이니시스
  - NHN KCP
  - 나이스페이먼츠 (구모듈, 신모듈)
  - 토스페이먼츠 (신모듈)
  - 키움페이
  - KSNET
  - 웰컴페이먼츠
  - 헥토파이낸셜

```ts title="server-side"
// card_number, expiry, birth, pwd_2digit 등 정보를 전달받습니다.
// 포트원 비인증 결제(일회성) API 호출
const onetimeResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/onetime",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pg: `${pg_provider}.${pg_mid}`,
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      // 중략...
    }),
  },
);
```

## 빌링키 결제

카드 정보를 바탕으로 빌링키를 발급한 후 해당 빌링키를 이용하여 결제되는 방식입니다.
빌링키를 이용하여 즉시 결제 또는 결제를 예약하여 정기결제 형식으로 이용할 수 있습니다.

<div class="hint" data-style="info">

**빌링키란?**

구독형 정기결제, 종량제 과금결제 등 구현 시 원하는 시점에 재 결제를 진행할 수 있는 결제용 암호화 키 입니다.
고객사가 고객의 카드 정보를 소유할 수 없기 때문에 카드사로부터 해당 카드에 대응하는 빌링키를
발급받아 저장하고, 이후 원하는 시점에 해당 빌링키로 결제를 청구하기 위해 사용합니다.

</div>

### 빌링키 발급하기

빌링키는 결제대행사에 따라 다음 두 가지 방식을 이용하여 발급받을 수 있습니다.

#### REST API 방식

고객 결제 정보를 이용하여 [빌링키 발급 API](https://developers.portone.io/api/rest-v1/billingkey#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를
호출하면 포트원 서버가 결제대행사를 통해 빌링키를 발급받습니다.

이 과정에서 고객의 카드 정보는 포트원 서버에 기록되지 않습니다.

브라우저로부터 결제 정보를 전달 받은 뒤, 서버에서 포트원 API를 호출하세요.

- **장점**
  - 고객사가 원하는 형태의 화면으로 **카드정보 입력란을 커스터마이징**할 수 있습니다.
  - 고객사 UI/UX 친화적인 결제 환경을 계획하고 계시다면 API 연동 개발을 선택하시길 권장드립니다.

- **단점**
  - **개인정보 이용약관**을 명시해야 하며 PG사 및 카드사 심사가 까다롭고 개인정보 유출에 유의해야 합니다.

- **지원 결제대행사**
  - KG이니시스
  - NHN KCP
  - 나이스페이먼츠 (구모듈, 신모듈)
  - 토스페이먼츠 (신모듈)
  - 키움페이
  - KSNET
  - 웰컴페이먼츠
  - 헥토파이낸셜

```ts title="server-side"
// customer_uid, card_number, expiry, birth, pwd_2digit 등 정보를 전달받습니다.
// 포트원 빌링키 발급 API 호출
const issueResponse = await fetch(
  `https://api.iamport.kr/subscribe/customers/${customer_uid}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pg: `${pg_provider}.${pg_mid}`,
      customer_id: customer_id, //고객 식별 정보로 고객사에서 기입
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      // 중략...
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
const {
  billingKeyInfo: { customer_uid },
} = await issueResponse.json();
// 빌링키가 발급되었습니다! 빌링키를 저장하거나 결제하는 로직을 구성하세요.
```

#### 결제창(SDK) 방식

결제창을 이용해 빌링키를 발급할 때는 포트원 SDK를 이용합니다.

포트원 SDK를 설치하는 방법은
[포트원 SDK 설치하기](https://developers.portone.io/opi/ko/integration/start/v1/auth?v=v1#1-포트원-sdk-설치하기-) 문서를 참고하세요.

`IMP.request_pay()` 함수를 호출 시 `customer_uid` 파라미터를 포함하는 경우 빌링키를 발급하기 위한
결제창을 열 수 있습니다.

브라우저에서 포트원 SDK를 호출하여 빌링키를 발급하고, 서버로 빌링키를 전달합니다.

- **장점**
  - 결제 수단 정보가 고객사나 포트원의 서버를 거치지 않고 직접 PG사로 전달되기 때문에 보안 문제가 일어날 가능성이 적습니다.

- **단점**
  - PG사의 일반결제창을 통해 카드정보를 입력받기 때문에 웹브라우저를 통해서만 빌링키 발급이 이루어지며,
    **카드정보 입력란을 커스터마이징 할 수 없습니다.**

- **지원 결제대행사**
  - KG이니시스
  - NHN KCP
  - 토스페이먼츠 (신모듈)
  - 다날
  - 이지페이(KICC)
  - 모빌리언스 (휴대폰 소액결제 한정)
  - 웰컴페이먼츠
  - 스마트로 (신모듈)
  - 헥토파이낸셜 (내통장 결제 한정)
  - 카카오페이
  - 네이버페이 (결제형 한정)
  - 페이코
  - 스마일페이
  - 토스페이 (신모듈)
  - 페이먼트월
  - 페이팔 (RT)

```ts
IMP.request_pay(
  {
    customer_uid: "gildong_0001_1234", // 카드(빌링키)와 1:1로 대응하는 값
    /* ...생략... */
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // 빌링키 발급 성공
    } else {
      // 빌링키 발급 실패
    }
  },
);
```

#### 유의사항

<div class="hint" data-style="info">

**`customer_uid` 란?**

PG사가 발급한 빌링키와 1:1로 맵핑되는, 고객사가 지정한 고유한 값입니다.
`customer_uid`는 카드 번호 단위로 구분하여 저장되어야 합니다.

예) **홍길동** 고객이 **A 카드** 빌링키를 요청하는 경우
`customer_uid`는 **회원별 카드 번호 단위**로 고유하게 발급되어야 합니다.

</div>

<div class="hint" data-style="danger">

이전 빌링키 발급에 사용된 `customer_uid`를 재사용하는 경우 가장 마지막 빌링키 발급에 사용된
카드번호의 빌링키로 대체됩니다. (**기존에 발급된 빌링키는 자동으로 해지되지 않습니다.**)

</div>

#### 빌링키 발급 방식에 따른 인증과정 필수 여부

빌링키를 발급 받는 단계에서 인증과정은 다음과 같이 구분할 수 있습니다.

1. PG사의 결제창을 띄우는 방식

   - PG사의 결제창 안에서 '공인인증(본인인증)' 절차를 요구하게 됩니다.

2. API 호출 방식

   - API 호출만으로 빌링키 발급이 가능하기 때문에 인증 절차가 없습니다.

인증과정 포함 여부는 결제대행사별로 다르므로 상세 내용은 아래 링크에서 확인하세요.

- [정기결제의 인증 과정 필수 여부](https://help.portone.io/content/schedule-requirement)

### 빌링키 결제 요청하기

발급 받은 포트원 빌링키를 이용하여 [비 인증 결제(빌링키) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)
또는 [결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule)
를 호출하여 즉시 결제 및 결제 예약을 진행합니다.

#### 즉시 결제

<div class="hint" data-style="info">

**빌링키 발급과 결제 요청을 한번에 하기**

[결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule)를
사용하면 등록된 customer\_uid가 없는 경우 빌링키 신규 발급을 먼저 진행한 후 schedule정보를 예약합니다.(카드정보 필수사항)

</div>

[비 인증 결제(빌링키) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)
를 참고하여 파라미터를 입력한 후 결제 요청해야 합니다.

```ts title="server-side"
// 포트원 빌링키 결제 API 호출
const paymentResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/again",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_uid,
      merchant_uid,
      name: "월간 이용권 정기결제",
      // 빌링키 결제 API를 참고해 고객 정보를 채워주세요.
      amount: {
        total: 8900,
      },
      currency: "KRW",
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

#### 예약/반복결제

**1. 결제 예약하기**

미래 특정 시점에 결제가 진행되도록 결제를 예약할 수 있습니다.
포트원 [결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule)
를 이용하여 원하시는 시점에 결제 예약을 손쉽게 등록할 수 있습니다.

```ts title="server-side"
// 결제 예약
axios({
  url: `https://api.iamport.kr/subscribe/payments/schedule`,
  method: "post",
  headers: { Authorization: access_token },
  data: {
    customer_uid: "gildong_0001_1234", // 카드(빌링키)와 1:1로 대응하는 값
    schedules: [
      {
        merchant_uid: "order_monthly_0001", // 주문 번호
        schedule_at: 1519862400, // 결제 시도 시각 in Unix Time Stamp. 예: 다음 달 1일
        amount: 8900,
        name: "월간 이용권 정기결제",
        buyer_name: "홍길동",
        buyer_tel: "01012345678",
        buyer_email: "gildong@gmail.com",
      },
    ],
  },
});
```

**2. 결제 결과 수신하기**

예약한 시간에 결제가 시도되면 Webhook 이벤트가 발생하여 지정한 서버의 callback URL로 결제
번호(`imp_uid`)와 주문 번호(`merchant_uid`)가 전달됩니다. 웹훅으로 예약결제에 대한 결과를 수신하면
결제결과 완료 로직 처리를 진행합니다.

<div class="hint" data-style="info">

**포트원 Webhook**

포트원 Webhook의 개념과 URL 설정 방법은 [**포트원 Webhook**](https://developers.portone.io/opi/ko/integration/webhook/readme-v1) 문서를 참고하세요.

</div>

```ts title="server-side"
// "/iamport-callback/schedule"에 대한 POST 요청을 처리
app.post("/iamport-callback/schedule", async (req, res) => {
  try {
    const { imp_uid, merchant_uid } = req.body;
    // 액세스 토큰(access token) 발급 받기
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      method: "post", // POST method
      headers: { "Content-Type": "application/json" },
      data: {
        imp_key: "imp_apikey", // REST API 키
        imp_secret:
          "ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f",
      },
    });
    const { access_token } = getToken.data; // 인증 토큰
    // imp_uid로 포트원 서버에서 결제 정보 조회
    const getPaymentData = await axios({
      url: `https://api.iamport.kr/payments/${imp_uid}`, // imp_uid 전달
      method: "get", // GET method
      headers: { Authorization: access_token },
    });
    const paymentData = getPaymentData.data; // 조회한 결제 정보
    const { status } = paymentData;
    if (status === "paid") {
      // 결제 성공적으로 완료
      // DB에 결제 정보 저장
      await Orders.findByIdAndUpdate(merchant_uid, { $set: paymentData }); // Mongoose
      // ...
    } else {
      // 재결제 시도
    }
  } catch (e) {
    res.status(400).send(e);
  }
});
```

**3. 반복결제 구현하기**

포트원 서버에 결제 예약 요청을 하고 예약한 시간에 결제가 시도되면 지정된 웹훅 URL을 통해서
서버에 알리는 과정을 반복적으로 수행하여 반복 결제를 구현할 수 있습니다.

(관련 이미지 첨부)

예약된 결제가 시도되었을 때 발생하는 webhook 이벤트를 처리하는 로직에서 예약된 결제가 정상적으로 완료되고 결제 내역이 저장되면 다음 결제를 예약하는 예제입니다.

```ts title="server-side"
// "/iamport-callback/schedule"에 대한 POST 요청을 처리
app.post("/iamport-callback/schedule", async (req, res) => {
  try {
    const { imp_uid, merchant_uid } = req.body;
    // 액세스 토큰(access token) 발급 받기
    /* ...중략 ... */
    // imp_uid로 포트원 서버에서 결제 정보 조회
    /* ...중략 ... */
    const paymentData = getPaymentData.data; // 조회한 결제 정보
    const { status } = paymentData;
    if (status === "paid") {
      // 결제 성공적으로 완료
      // DB에 결제 정보 저장
      await Orders.findByIdAndUpdate(merchant_uid, { $set: paymentData });
      // ...
      // 새로운 결제 예약
      axios({
        url: "{결제예약을 받을 서비스 URL}",
        method: "post",
        // 인증 토큰 Authorization header에 추가
        headers: { Authorization: access_token },
        data: {
          customer_uid: "gildong_0001_1234", // 카드(빌링키)와 1:1로 대응하는 값
          schedules: [
            {
              // 주문 번호
              merchant_uid: "order_monthly_0001",
              // 결제 시도 시각 in Unix Time Stamp. 예: 다음 달 1일
              schedule_at: 1519516800,
              amount: 8900,
              name: "월간 이용권 정기결제",
              // ...
            },
          ],
        },
      });
    } else {
      // 재결제 시도
    }
  } catch (e) {
    res.status(400).send(e);
  }
});
```


# https://developers.portone.io/opi/ko/integration/start/v1/readme

---
title: 결제 연동 시작하기
description: 결제 연동을 시작합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/start/v2/readme
---



# https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/0

---
title: 통합인증 준비하기
description: 통합인증 연동을 시작하기 위한 준비작업을 소개합니다.
targetVersions:
  - v1
---

## 1. 포트원 SDK 설치하기 <span id="sdk-installation" />

포트원은 다양한 PG의 본인인증창을 통일된 방법으로 호출할 수 있도록 자바스크립트 SDK를 제공합니다.
브라우저에서 포트원 SDK를 호출하여 본인인증을 진행하게 됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제창 연동을 진행할 주문 페이지에 아래 JS 라이브러리를 추가합니다.

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

[포트원 라이브러리 추가하기](https://www.youtube.com/watch?v=FLyOmbtnr48)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## 2. SDK 초기화하기 <span id="sdk-installation" />

포트원 SDK를 사용하여 결제창을 호출하려면, 먼저 포트원 SDK를 초기화하여야 합니다.

먼저, 관리자 콘솔의 결제 연동 페이지에서 **고객사 식별코드**를 확인해 주세요.

그리고 결제창을 호출할 페이지에서 다음과 같이 포트원 SDK를 초기화합니다.

```ts title="client-side"
IMP.init("{고객사 식별코드}"); // 예: imp00000000
```


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/1

---
title: 통합인증 요청하기
description: 통합인증 페이지를 호출하는 방법을 확인합니다.
targetVersions:
  - v1
---

통합인증은 아래 두 가지 방법으로 호출할 수 있습니다.

> **팝업**(**Default**) 방식
>
> 통합인증 본인인증 팝업창이 열리고 본인인증를 완료하면 두 번째 인자로 지정된 `callback` 함수가 실행됩니다.

> **리디렉션**(redirect)방식(**Mobile** 환경에서만 적용)
>
> 모바일 환경에서 `param.popup`을 **`false`**`(기본값)`로 설정하면 본인인증 페이지로 리디렉션되고 본인인증을 완료하면 `param.m_redirect_url`로 다시 리디렉션됩니다.
>
> `param.popup`을 **`true`** 로 설정하면 팝업(기본) 방식으로 작동합니다.
>
> **WebView 등 팝업이 차단되는 환경**에서는 `popup : false`로 설정하는 것을 권장합니다

아래는 JavaScript SDK [**IMP.certification**](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft) 함수를 이용하여 통합인증
본인인증창을 호출하는 예제입니다.

```ts title="client-side"
// IMP.certification(param, callback) 호출
IMP.certification(
  {
    // param
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "ORD20180131-0000011", // 주문 번호
    m_redirect_url: "{리디렉션 될 URL}", // 모바일환경에서 popup:false(기본값) 인 경우 필수, 예: https://www.myservice.com/payments/complete/mobile
    popup: false, // PC환경에서는 popup 파라미터가 무시되고 항상 true 로 적용됨
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // 인증 성공 시 로직
    } else {
      // 인증 실패 시 로직
    }
  },
);
```


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/2

---
title: 인증 완료정보 전달하기
description: 통합인증 이후 획득된 정보를 처리하는 방법을 안내합니다.
targetVersions:
  - v1
---

인증 프로세스가 완료되면 반환되는 응답 객체(**`rsp`**)의 인증 성공 여부에 따라 처리 로직을 **`callback`** 함수에 작성합니다. 요청이 성공했을 경우에 **인증번호(`imp_uid`)를 서버에 전달**하는 로직을 다음 예제를 참고하여 작성합니다. 인증 성공시 [**반환되는 값**](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft-rt)을 확인하세요

## 1. callback Data 전달 예제

<div class="tabs-container">

<div class="tabs-content" data-title="JavaScript">

```ts title="client-side"
IMP.certification(
  {
    /* ...중략... */
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // 인증 성공 시
      // jQuery로 HTTP 요청
      jQuery.ajax({
        url: "{서버의 인증 정보를 받는 endpoint}",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { imp_uid: rsp.imp_uid },
      });
    } else {
      alert("인증에 실패하였습니다. 에러 내용: " + rsp.error_msg);
    }
  },
);
```

</div>

<div class="tabs-content" data-title="JS ES Next">

```ts title="client-side"
IMP.certification(
  {
    /* ...중략... */
  },
  (rsp) => {
    // callback
    if (rsp.success) {
      // 인증 성공 시 axios로 HTTP 요청
      axios({
        url: "{서버의 인증 정보를 받는 endpoint}",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: { imp_uid: rsp.imp_uid },
      });
    } else {
      alert(`인증에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
    }
  },
);
```

</div>

</div>

### 2. 리디렉션 전달 예제

`IMP.`**`certification`** 호출 시 설정한 **`m_redirect_url`** 로 인증 정보와 함께 다음과 같이 리디렉션됩니다.

```http title="Query String"
GET {m_redirect_url}?imp_uid={}&merchant_uid={본인인증 건의 merchant_uid}&success={true 또는 false}
```


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/3

---
title: 인증정보 조회 및 활용하기
description: 인증정보를 획득하고 활용하는 방법을 안내합니다.
targetVersions:
  - v1
---

통합인증 완료이후 획득한 `imp_uid`를 이용하여 고객 인증정보를 조회할 수 있습니다.

## **STEP 01.** 인증정보(imp\_uid) 서버단에서 획득하기

아래는 본인인증 앞단에서 넘어온 값을 서버단에서 수신받은 예제 입니다.

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js(팝업방식)">

```ts title="server-side"
app.use(bodyParser.json());

// "/certifications"에 대한 POST 요청을 처리하는 controller
app.post("/certifications", async (request, response) => {
  // request의 body에서 imp_uid 추출
  const { imp_uid } = request.body;
});
```

</div>

<div class="tabs-content" data-title="Node.js(리디렉션 방식)">

```ts title="server-side"
app.use(bodyParser.json());

// "/certifications/redirect"에 대한 GET 요청을 처리하는 controller
app.get("/certifications/redirect", async (request, response) => {
  // request의 query에서 imp_uid 추출
  const { imp_uid } = request.query;
});
```

</div>

</div>

## **STEP 02.** 인증 정보 조회하기

포트원 서버에서 인증 정보를 조회하기 위해서 먼저 [**REST API access token**](https://developers.portone.io/api/rest-v1/auth?v=v1#post%20%2Fusers%2FgetToken)을 발급받습니다.
발급받은 액세스 토큰(`access_token`)과 인증번호(`imp_uid`)로 **본인인증 결과조회 REST API** 를 호출하여 인증 정보를 조회하는 예제입니다.

```ts title="server-side(Node.js)"
app.use(bodyParser.json());

// "/certifications"에 대한 POST 요청을 처리하는 controller
app.post("/certifications", async (request, response) => {
  // request의 body에서 imp_uid 추출
  const { imp_uid } = request.body;
  try {
    // 인증 토큰 발급 받기
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      // POST method
      method: "post",
      // "Content-Type": "application/json"
      headers: { "Content-Type": "application/json" },
      data: {
        // REST API키
        imp_key: "imp_apikey",
        // REST API Secret
        imp_secret:
          "ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f",
      },
    });
    // 인증 토큰
    const { access_token } = getToken.data;
    // imp_uid로 인증 정보 조회
    const getCertifications = await axios({
      // imp_uid 전달
      url: `https://api.iamport.kr/certifications/\${imp_uid}`,
      // GET method
      method: "get",
      // 인증 토큰 Authorization header에 추가
      headers: { Authorization: access_token },
    });
    // 조회한 인증 정보
    const certificationsInfo = getCertifications.data;
  } catch (e) {
    console.error(e);
  }
});
```

## **STEP 03.** 인증 정보 활용하기

조회한 인증 정보에서 다음의 고객 정보를 추출하는 서비스 코드 예제입니다.\
필요 시, 예제와 같이 고객 정보를 사용하여 연령 제한을 검사할 수 있습니다.

- `name`: 이름
- `gender`: 성별
- `birth`: 생년월일
- `unique_key`: CI 값과 동일. 온라인 주민번호와 같은 개인고유식별키
- `phone :`휴대폰 번호

```ts title="Node.js"
// "/certifications"에 대한 POST 요청을 처리하는 controller
app.post("/certifications", async (request, response) => {
  const { imp_uid } = request.body; // request의 body에서 imp_uid 추출
  try {
    // 인증 토큰 발급 받기
    /* ...중략... */
    // imp_uid로 인증 정보 조회
    /* ...중략... */
    const certificationsInfo = getCertifications.data; // 조회한 인증 정보
    const { name, birth } = certificationsInfo;
    // 연령 제한 로직
    if (new Date(birth).getFullYear() <= 1999) {
      // 연령 만족
    } else {
      // 연령 미달
    }
  } catch (e) {
    console.error(e);
  }
});
```

<div class="hint" data-style="info">

**\<KG이니시스 통합본인인증\_특징(중요)>**

- KG이니시스 통합인증서비스는 **DI 정보는 제공되지 않습니다**.
- KG이니시스 통합인증서비스는 **카카오 인증의 경우, CI값 제공 가능하나 KG이니시스와 계약시 별도 서류 작성 절차가 필요합니다**.

</div>


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/all/readme

---
title: 통합인증 연동하기
description: 통합인증 기능을 구현하는 방법을 설명합니다.
targetVersions:
  - v1
---

## 통합인증 서비스란 ?

카카오톡 인증서, 네이버 인증서 등의 민간 인증서를 통한 인증 절차를 거쳐 본인 여부와 입력한 정보의
정확성을 확인하여 주는 서비스입니다. 통합인증은 **KG이니시스**를 통해 제공되며 민간 인증서를
이용하거나 사용자 본인이 가입된 간편인증을 통해 인증요청을 보내고 간편인증 페이지에서 인증처리를
하는 방식으로 이루어 집니다.

> **이용가능 수단 : 네이버 / PASS / 페이코 / TOSS / 금융인증서 / 카카오 / 신한 / KB모바일 / 삼성패스**

[이미지 링크](<https://developers.portone.io/gitbook-assets/ko/image (24) (2).png>)


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/1

---
title: 1. 본인인증 준비하기
description: 신용카드 본인인증을 시작하기 위한 안내입니다.
targetVersions:
  - v1
---

## 1. 포트원 SDK 설치하기 <span id="sdk-installation" />

포트원은 다양한 PG의 본인인증창을 통일된 방법으로 호출할 수 있도록 자바스크립트 SDK를 제공합니다.
브라우저에서 포트원 SDK를 호출하여 본인인증을 진행하게 됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제창 연동을 진행할 주문 페이지에 아래 JS 라이브러리를 추가합니다.

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

[포트원 라이브러리 추가하기](https://www.youtube.com/watch?v=FLyOmbtnr48)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## 2. SDK 초기화하기 <span id="sdk-installation" />

포트원 SDK를 사용하여 결제창을 호출하려면, 먼저 포트원 SDK를 초기화하여야 합니다.

먼저, 관리자 콘솔의 결제 연동 페이지에서 **고객사 식별코드**를 확인해 주세요.

그리고 결제창을 호출할 페이지에서 다음과 같이 포트원 SDK를 초기화합니다.

```ts title="client-side"
IMP.init("{고객사 식별코드}"); // 예: imp00000000
```


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/2

---
title: 2. 본인인증 요청하기
description: 신용카드 본인인증 창을 호출하는 방법을 안내합니다.
targetVersions:
  - v1
---

신용카드 본인인증은 아래 두가지 방법으로 호출할 수 있습니다.

> **팝업**(Default) 방식
>
> 신용카드 본인인증 팝업창이 열리고 본인인증를 완료하면 두 번째 인자로 지정된 `callback` 함수가 실행됩니다.

> **리디렉션**(redirect)방식(**Mobile** 환경에서만 적용)
>
> 모바일 환경에서 `param.popup`을 **`false`**`(기본값)`로 설정하면 본인인증 페이지로 리디렉션되고 본인인증을 완료하면 `param.m_redirect_url`로 다시 리디렉션됩니다.
>
> `param.popup`을 **`true`** 로 설정하면 팝업(기본) 방식으로 작동합니다.
>
> **WebView 등 팝업이 차단되는 환경**에서는 `popup : false`로 설정하는 것을 권장합니다

아래는 JavaScript SDK [**IMP.certification**](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft) 함수를 이용하여 신용카드
본인인증창을 호출하는 예제입니다.

<div class="tabs-container">

<div class="tabs-content" data-title="JavaScript">

```ts title="client-side"
// IMP.certification(param, callback) 호출
IMP.certification(
  {
    // param
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "ORD20180131-0000011", // 주문 번호
    // 모바일환경에서 popup:false(기본값) 인 경우 필수
    m_redirect_url: "{리디렉션 될 URL}",
    popup: false, // PC환경에서는 popup 파라미터가 무시되고 항상 true 로 적용됨
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // 인증 성공 시 로직
    } else {
      // 인증 실패 시 로직
    }
  },
);
```

</div>

<div class="tabs-content" data-title="ES Next">

```ts title="client-side"
// IMP.certification(param, callback) 호출
IMP.certification(
  {
    // param
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "ORD20180131-0000011", // 주문 번호
    m_redirect_url: "{리디렉션 될 URL}", // 모바일환경에서 popup:false(기본값) 인 경우 필수
    popup: false, // PC환경에서는 popup 파라미터가 무시되고 항상 true 로 적용됨
  },
  (rsp) => {
    // callback
    if (rsp.success) {
      // 인증 성공 시 로직
    } else {
      // 인증 실패 시 로직
    }
  },
);
```

</div>

</div>


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/3

---
title: 3. 인증 완료정보 전달하기
description: 신용카드 본인인증 이후 획득된 정보를 처리하는 방법을 안내합니다.
targetVersions:
  - v1
---

인증 프로세스가 완료되면 반환되는 응답 객체(**`rsp`**)의 인증 성공 여부에 따라 처리 로직을 **`callback`** 함수에 작성합니다. 요청이 성공했을 경우에 **인증번호(`imp_uid`)를 서버에 전달**하는 로직을 다음 예제를 참고하여 작성합니다. 인증 성공시 [**반환되는 값**](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft-rt)을 확인하세요

## 1. callback Data 전달 예제

<div class="tabs-container">

<div class="tabs-content" data-title="JavaScript">

```ts title="client-side"
IMP.certification(
  {
    /* ...중략... */
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // 인증 성공 시
      // jQuery로 HTTP 요청
      jQuery.ajax({
        url: "{서버의 인증 정보를 받는 endpoint}",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { imp_uid: rsp.imp_uid },
      });
    } else {
      alert("인증에 실패하였습니다. 에러 내용: " + rsp.error_msg);
    }
  },
);
```

</div>

<div class="tabs-content" data-title="JS ES Next">

```ts title="client-side"
IMP.certification(
  {
    /* ...중략... */
  },
  (rsp) => {
    // callback
    if (rsp.success) {
      // 인증 성공 시 axios로 HTTP 요청
      axios({
        url: "{서버의 인증 정보를 받는 endpoint}",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: { imp_uid: rsp.imp_uid },
      });
    } else {
      alert(`인증에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
    }
  },
);
```

</div>

</div>

## 2. 리디렉션 전달 예제

`IMP.`**`certification`** 호출 시 설정한 **`m_redirect_url`** 로 인증 정보와 함께 다음과 같이 리디렉션됩니다.

```http title="Query String"
GET {m_redirect_url}?imp_uid={}&merchant_uid={본인인증 건의 merchant_uid}&success={true 또는 false}
```


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/4

---
title: 4. 인증정보 조회 및 활용하기
description: 인증정보를 획득하고 활용하는 방법을 안내합니다.
targetVersions:
  - v1
---

본인인증 완료이후 획득한 \*\*`imp_uid`\*\*를 이용하여 고객 인증정보를 조회할 수 있습니다.

## **STEP 01.** 인증정보(imp\_uid) 서버단에서 획득하기

아래는 본인인증 앞단에서 넘어온 값을 서버단에서 수신받은 예제 입니다.

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js(팝업방식)">

```ts title="server-side"
app.use(bodyParser.json());
// "/certifications"에 대한 POST 요청을 처리하는 controller
app.post("/certifications", async (request, response) => {
  // request의 body에서 imp_uid 추출
  const { imp_uid } = request.body;
});
```

</div>

<div class="tabs-content" data-title="Node.js(리디렉션 방식)">

```ts title="server-side"
app.use(bodyParser.json());
// "/certifications/redirect"에 대한 GET 요청을 처리하는 controller
app.get("/certifications/redirect", async (request, response) => {
  const { imp_uid } = request.query; // request의 query에서 imp_uid 추출
});
```

</div>

</div>

## **STEP 02.** 인증 정보 조회하기

포트원 서버에서 인증 정보를 조회하기 위해서 먼저 [**REST API access token**](https://developers.portone.io/api/rest-v1/auth?v=v1#post%20%2Fusers%2FgetToken)을 발급받습니다. 발급받은 액세스 토큰(`access_token`)과 인증번호(`imp_uid`)로 **본인인증 결과조회 REST API** 를 호출하여 인증 정보를 조회하는 예제입니다.

```ts title="server-side"
app.use(bodyParser.json());
// "/certifications"에 대한 POST 요청을 처리하는 controller
app.post("/certifications", async (request, response) => {
  const { imp_uid } = request.body; // request의 body에서 imp_uid 추출
  try {
    // 인증 토큰 발급 받기
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      // POST method
      method: "post",
      // "Content-Type": "application/json"
      headers: { "Content-Type": "application/json" },
      data: {
        imp_key: "imp_apikey", // REST API키
        imp_secret:
          "ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f", // REST API Secret
      },
    });
    const { access_token } = getToken.data; // 인증 토큰
    // imp_uid로 인증 정보 조회
    const getCertifications = await axios({
      // imp_uid 전달
      url: `https://api.iamport.kr/certifications/${imp_uid}`,
      // GET method
      method: "get",
      // 인증 토큰 Authorization header에 추가
      headers: { Authorization: access_token },
    });
    const certificationsInfo = getCertifications.data; // 조회한 인증 정보
    // ...
  } catch (e) {
    console.error(e);
  }
});
```

## **STEP 03.** 인증 정보 활용하기

조회한 인증 정보에서 다음의 고객 정보를 추출하는 서비스 코드 예제입니다.

- `name`: 이름
- `gender`: 성별
- `birth`: 생년월일
- `unique_key`: CI 값과 동일. 온라인 주민번호와 같은 개인고유식별키
- `unique_in_site`: DI 값과 동일. 상점아이디(사이트)별로 할당되는 식별키

<div class="hint" data-style="info">

**unique\_key와 unique\_in\_site**

본인인증에 사용된 신용카드가 여러 장이어도 신용카드 소유자가 같다면 매번 `unique_key` 와 `unique_in_site`는 같은 값이 응답됩니다.

</div>

```ts title="Node.js"
// "/certifications"에 대한 POST 요청을 처리하는 controller
app.post("/certifications", async (request, response) => {
  const { imp_uid } = request.body; // request의 body에서 imp_uid 추출
  try {
    // 인증 토큰 발급 받기
    /* ...중략... */
    // imp_uid로 인증 정보 조회
    /* ...중략... */
    const certificationsInfo = getCertifications.data; // 조회한 인증 정보
    // unique_key: 개인식별 고유 키, unique_in_site: 사이트 별 개인식별 고유 키
    const { unique_key, unique_in_site, name, gender, birth } =
      certificationsInfo;
    // 연령 제한 로직
    if (new Date(birth).getFullYear() <= 1999) {
      // 연령 만족
    } else {
      // 연령 미달
    }
    // 1인 1계정 허용 로직
    // DB에서 unique_key 조회 후 가입여부 검사
    Users.find({ certificationKey: unique_key }).then((user) => {
      if (!user) {
        // 신규 고객
      } else {
        // 이미 가입된 고객
      }
    });
  } catch (e) {
    console.error(e);
  }
});
```


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/credit-auth/readme

---
title: 신용카드 본인인증 연동
description: 신용카드 본인인증 기능을 구현하는 방법을 설명합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="info">

신용카드본인인증 서비스는 현재 서비스 중단으로 신규계약이 불가합니다.\
(기존에 이용중인 고객사는 지속 사용 가능)

</div>

**신용카드 본인인증 서비스란** 신용카드 인증을 통하여 해당 신용카드 소지자의 개인정보(이름, 생년월일, 성별, 외국인여부, KISA 고유식별값)를 확인할 수 있는 서비스입니다.

(이미지 첨부: 신용카드 본인인증 화면 예시)


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/1

---
title: 1. 본인인증 준비하기
description: 휴대폰 본인인증 연동을 위한 준비
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/extra/identity-verification/readme-v2
---

## 1. 포트원 SDK 설치하기 <span id="sdk-installation" />

포트원은 다양한 PG의 본인인증창을 통일된 방법으로 호출할 수 있도록 자바스크립트 SDK를 제공합니다.
브라우저에서 포트원 SDK를 호출하여 본인인증을 진행하게 됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제창 연동을 진행할 주문 페이지에 아래 JS 라이브러리를 추가합니다.

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

[포트원 라이브러리 추가하기](https://www.youtube.com/watch?v=FLyOmbtnr48)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## 2. SDK 초기화하기 <span id="sdk-installation" />

포트원 SDK를 사용하여 결제창을 호출하려면, 먼저 포트원 SDK를 초기화하여야 합니다.

먼저, 관리자 콘솔의 결제 연동 페이지에서 **고객사 식별코드**를 확인해 주세요.

그리고 결제창을 호출할 페이지에서 다음과 같이 포트원 SDK를 초기화합니다.

```ts title="client-side"
IMP.init("{고객사 식별코드}"); // 예: imp00000000
```


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/2

---
title: 2. 본인인증창 호출하기
description: 본인인증 창 호출방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/extra/identity-verification/readme-v2
---

휴대폰 본인인증은 아래 두가지 방법으로 호출할 수 있습니다.

> **팝업**(Default) 방식
>
> 휴대폰 본인인증 팝업창이 열리고 본인인증를 완료하면 두 번째 인자로 지정된 `callback` 함수가 실행됩니다.

> **리디렉션**(redirect)방식(**Mobile** 환경에서만 적용)
>
> 모바일 환경에서 `param.popup`을 **`false`**`(기본값)`로 설정하면 본인인증 페이지로 리디렉션되고 본인인증을 완료하면 `param.m_redirect_url`로 다시 리디렉션됩니다.
>
> `param.popup`을 **`true`** 로 설정하면 팝업(기본) 방식으로 작동합니다.
>
> **WebView 등 팝업이 차단되는 환경**에서는 `popup : false`로 설정하는 것을 권장합니다.

아래는 휴대폰 본인인증창을 호출하는 예제입니다.

<div class="tabs-container">

<div class="tabs-content" data-title="JavaScript">

```ts title="client-side"
// IMP.certification(param, callback) 호출
IMP.certification(
  {
    // param
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    // 주문 번호
    merchant_uid: "ORD20180131-0000011",
    // 모바일환경에서 popup:false(기본값) 인 경우 필수
    m_redirect_url: "{리디렉션 될 URL}",
    // PC환경에서는 popup 파라미터가 무시되고 항상 true 로 적용됨
    popup: false,
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // 인증 성공 시 로직
    } else {
      // 인증 실패 시 로직
    }
  },
);
```

휴대폰 본인인증창을 호출하기 위한 [**파라미터 목록**](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft)을 확인하세요

</div>

<div class="tabs-content" data-title="JS ES Next">

```ts title="client-side"
// IMP.certification(param, callback) 호출
IMP.certification(
  {
    // param
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    // 주문 번호
    merchant_uid: "ORD20180131-0000011",
    // 모바일환경에서 popup:false(기본값) 인 경우 필수
    m_redirect_url: "{리디렉션 될 URL}",
    // PC환경에서는 popup 파라미터가 무시되고 항상 true 로 적용됨
    popup: false,
  },
  (rsp) => {
    // callback
    if (rsp.success) {
      // 인증 성공 시 로직
    } else {
      // 인증 실패 시 로직
    }
  },
);
```

</div>

</div>


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/3

---
title: 3. 인증 완료정보 전달하기
description: 휴대폰 본인인증 이후 획득된 정보를 처리하는 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/extra/identity-verification/readme-v2
---

인증 프로세스가 완료되면 반환되는 응답 객체(**`rsp`**)의 인증 성공 여부에 따라 처리 로직을 **`callback`** 함수에 작성합니다. 요청이 성공했을 경우에 **인증번호(`imp_uid`)를 서버에 전달**하는 로직을 다음 예제를 참고하여 작성합니다. 인증 성공시 [**반환되는 값**](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/cft-rt)을 확인하세요

## 1. callback Data 전달 예제

<div class="tabs-container">

<div class="tabs-content" data-title="JavaScript">

```ts title="client-side"
IMP.certification(
  {
    /* ...중략... */
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // 인증 성공 시 jQuery로 HTTP 요청
      jQuery.ajax({
        url: "{서버의 인증 정보를 받는 endpoint}",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { imp_uid: rsp.imp_uid },
      });
    } else {
      alert("인증에 실패하였습니다. 에러 내용: " + rsp.error_msg);
    }
  },
);
```

</div>

<div class="tabs-content" data-title="JS ES Next">

```ts title="client-side"
IMP.certification(
  {
    /* ...중략... */
  },
  (rsp) => {
    // callback
    if (rsp.success) {
      // 인증 성공 시
      // axios로 HTTP 요청
      axios({
        url: "{서버의 인증 정보를 받는 endpoint}",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: { imp_uid: rsp.imp_uid },
      });
    } else {
      alert(`인증에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
    }
  },
);
```

</div>

</div>

## 2. 리디렉션 전달 예제

`IMP.`**`certification`** 호출 시 설정한 **`m_redirect_url`** 로 인증 정보와 함께 다음과 같이 리디렉션됩니다.

```http title="Query String"
GET {m_redirect_url}?imp_uid={}&merchant_uid={본인인증 건의 merchant_uid}&success={true 또는 false}
```


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/4

---
title: 4. 인증정보 조회 및 활용하기
description: 인증정보를 획득하고 활용하는 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/extra/identity-verification/readme-v2
---

휴대폰 본인인증 완료이후 획득한 `imp_uid`를 이용하여 고객 인증정보를 조회할 수 있습니다.

## **STEP 01.** 인증정보(imp\_uid) 서버단에서 획득하기

아래는 휴대폰 본인인증 앞단에서 넘어온 값을 서버단에서 수신받은 예제 입니다.

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js(팝업방식)">

```ts title="server-side"
app.use(bodyParser.json());
// "/certifications"에 대한 POST 요청을 처리하는 controller
app.post("/certifications", async (request, response) => {
  // request의 body에서 imp_uid 추출
  const { imp_uid } = request.body;
});
```

</div>

<div class="tabs-content" data-title="Node.js(리디렉션 방식)">

```ts title="server-side"
app.use(bodyParser.json());
// "/certifications/redirect"에 대한 GET 요청을 처리하는 controller
app.get("/certifications/redirect", async (request, response) => {
  const { imp_uid } = request.query; // request의 query에서 imp_uid 추출
});
```

</div>

</div>

## **STEP 02.** 인증 정보 조회하기

포트원 서버에서 인증 정보를 조회하기 위해서 먼저 [**REST API access token**](https://developers.portone.io/api/rest-v1/auth?v=v1#post%20%2Fusers%2FgetToken)을 발급받습니다. 발급받은 액세스 토큰(`access_token`)과 인증번호(`imp_uid`)로 **본인인증 결과조회 REST API** 를 호출하여 인증 정보를 조회하는 예제입니다.

```ts title="server-side"
app.use(bodyParser.json());
// "/certifications"에 대한 POST 요청을 처리하는 controller
app.post("/certifications", async (request, response) => {
  const { imp_uid } = request.body; // request의 body에서 imp_uid 추출
  try {
    // 인증 토큰 발급 받기
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      // POST method
      method: "post",
      // "Content-Type": "application/json"
      headers: { "Content-Type": "application/json" },
      data: {
        imp_key: "imp_apikey", // REST API키
        imp_secret:
          "ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f", // REST API Secret
      },
    });
    const { access_token } = getToken.data.response; // 인증 토큰
    // imp_uid로 인증 정보 조회
    const getCertifications = await axios({
      // imp_uid 전달
      url: `https://api.iamport.kr/certifications/${imp_uid}`,
      // GET method
      method: "get",
      // 인증 토큰 Authorization header에 추가
      headers: { Authorization: access_token },
    });
    const certificationsInfo = getCertifications.data; // 조회한 인증 정보
    // ...
  } catch (e) {
    console.error(e);
  }
});
```

## **STEP 03.** 인증 정보 활용하기

조회한 인증 정보에서 다음의 고객 정보를 추출하는 서비스 코드 예제입니다.

- `name`: 이름
- `gender`: 성별
- `birth`: 생년월일
- `unique_key`: CI 값과 동일. 온라인 주민번호와 같은 개인고유식별키
- `unique_in_site`: DI 값과 동일. 상점아이디(사이트)별로 할당되는 식별키

<div class="hint" data-style="info">

위의 정보 외에 휴대폰 번호(**`phone`**) 및 통신사(**`carrier`**) 또는 외국인(**`foreigner`**) 여부는 **개인정보 제공동의 약관을 사이트에 게재**한 후 **<cs@portone.io>로 신청**하여 취득할 수 있습니다. 해당 부분은 당사 계약 이후 다날PG사로 요청 후 승인이 완료되면 이용 가능한 점 참고해 주시기 바랍니다.

**메일 요청 신청 양식**

- 상호명 :
- 사업자번호 :
- 본인인증용 다날 상점ID(CPID) :
- 업종 :
- 필요사유 :
- 개인정보취급방침 url : 앱서비스로 URL형태로 전달이 어려우신 경우 '개인정보취급방침' 경로를 캡쳐하여 전달주시기 바랍니다.

**참고 - 포트원 이용 고객사의 개인정보처리방침 적용 예시**

- `(주)마플 : https://marpple.shop/kr/@/privacy`
- `(주)브레이브모바일 / 숨고 : https://soomgo.com/terms/privacy`
- `(주)마켓잇 : https://static.marketit.asia/static/privacy-terms.pdf`

</div>

```ts title="Node.js"
// "/certifications"에 대한 POST 요청을 처리하는 controller
app.post("/certifications", async (request, response) => {
  const { imp_uid } = request.body; // request의 body에서 imp_uid 추출
  try {
    // 인증 토큰 발급 받기
    /* ...중략... */
    // imp_uid로 인증 정보 조회
    /* ...중략... */
    const certificationsInfo = getCertifications.data; // 조회한 인증 정보
    // unique_key: 개인식별 고유 키, unique_in_site: 사이트 별 개인식별 고유 키
    const { unique_key, unique_in_site, name, gender, birth } =
      certificationsInfo;
    // 연령 제한 로직
    if (new Date(birth).getFullYear() <= 1999) {
      // 연령 만족
    } else {
      // 연령 미달
    }
    // 1인 1계정 허용 로직
    // DB에서 unique_key 조회 후 가입여부 검사
    Users.find({ certificationKey: unique_key }).then((user) => {
      if (!user) {
        // 신규 고객
      } else {
        // 이미 가입된 고객
      }
    });
  } catch (e) {
    console.error(e);
  }
});
```


# https://developers.portone.io/opi/ko/extra/identity-verification/v1/phone/readme

---
title: 휴대폰 본인인증 연동하기
description: 포트원을 이용하여 간편하게 휴대폰 본인인증을 연동하는 방법을 확인합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/extra/identity-verification/readme-v2
---

**휴대폰 본인인증 서비스**란 본인 명의로 개통한 휴대폰을 이용하여 최소한의 개인정보를 입력하는 인증 절차를 거쳐 본인 여부와 입력한 정보의 정확성을 확인하여 주는 서비스입니다.

고객은 웹사이트에 가입, 결제, 또는 성인 인증 등을 위해 본인인증을 시행합니다.
본인인증은 모바일 기기에 설치된 본인인증 전용 앱을 이용하거나 사용자 본인 정보(**이름, 생년월일, 휴대폰번호**)를 인증요청 페이지에 입력한 후
문자로 온 인증번호를 기입하는 방식으로 이루어집니다.

(이미지 첨부: 휴대폰 본인인증 화면예)

포트원을 이용한 휴대폰 본인인증의 Flow는 JavaScript SDK 를 이용하여 휴대폰 본인인증을 완료하고
고객사 서버에서 포트원 REST API를 이용하여 **인증완료정보를 획득**하는 방법으로 진행됩니다.


# https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-1

---
title: PortOne(KR) 가입 및 PG 계약
description: Shopify 연동을 위해 선행해야할 내용을 설명합니다.
targetVersions:
  - v1
---

1. 먼저 포트원(KR) 계정을 생성하고, 원하는 PG사에 대해 가입을 신청합니다.

   (관련 이미지 첨부)

2. 가입 신청 후 계약이 진행되는 과정에서 PG사의 Credential을 메일이나 PG사 어드민을 통해 획득하게 됩니다.

3. PG사로부터 Credential을 획득한 뒤 콘솔에 접속하여 연동을 원하는 PG사를 추가합니다.

   (관련 이미지 첨부)


# https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-2

---
title: PortOne(Global) 가입 및 결제수단 설정
description: Shopify 연동을 위해 선행해야할 내용을 설명합니다.
targetVersions:
  - v1
---

## 1. PortOne 글로벌 가입하기

PortOne 글로벌 어드민에 접속하여 가입합니다.

(이미지 첨부: 포트원 글로벌 사이트 어드민 Register 화면)

(이미지 첨부: 포트원 글로벌 가입 후 최초 로그인 화면)

## 2. 어드민 설정하기

포트원 글로벌 어드민에서 PortOne을 선택하고 PortOne(KR)의 Key값들을 추가합니다.

(이미지 첨부: 포트원 글로벌 어드민 > Payment Channels > Filters: South Korea)

(이미지 첨부: 포트원(KR) 콘솔 > 결제연동 > 내 식별코드/API Keys 를 통해 key값들을 확인할 수 있습니다.)

(이미지 첨부: 포트원(Global) 콘솔로 돌아와서 포트원(KR) 의 Key값을 입력하고 Fetch MIDs를 클릭하면 등록된 PG사들의 MID값들을 불러옵니다.)

(이미지 첨부: 포트원(Global) 콘솔로 돌아와서 포트원(KR) 의 Key 값을 입력하고 Fetch MIDs를 클릭하면 등록된 PG사들의 MID값들을 불러옵니다.)

(이미지 첨부: 결제가 발생할 지역별로 Wallet(간편결제) Credit/Debit Cards(신용/체크카드) 등 결제수단 별 디폴트 PG사를 설정합니다.)

(이미지 첨부: 특정 결제수단들을 활성화(Enable) 시키거나, 동일한 결제수단을 다른 PG를 통해 설정하는 경우 디폴트로 설정(Make Default)할 수 있습니다.)

(관련 이미지 첨부)


# https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-3

---
title: PortOne(Global) 에 Shopify 스토어 등록
description: Shopify 스토어 등록방법을 설명합니다.
targetVersions:
  - v1
---

## 1. Shopify 채널 추가

PortOne(Global) 어드민 > Payment Channel 메뉴에서 Shopify 를 선택하여 Shopify 스토어의 URL을 추가합니다.

(이미지 첨부: Payment Channels >Filters: Global > Shopify 선택합니다.)

(이미지 첨부: Shopify > Add keys 클릭하여 Shopify 스토어 URL 을 등록해야 합니다.)

(이미지 첨부: Shopify 대쉬보드에 접속하면 스토어 URL 을 복사할 수 있습니다.)


# https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-4

---
title: Shopify 스토어에 PortOne 연결하기
description: Shopify 스토어에 PortOne 연결방법을 설명합니다.
targetVersions:
  - v1
---

## 1. Shopify 앱 추가

먼저 Shopify 앱스토어에서 [PortOne Payments](https://apps.shopify.com/chaiport-payments) 링크를 통해 앱을 추가합니다.
(또는 지급(Payments) > 결제방법 추가 > 공급업체로 검색에서 \[PortOne Payments]를 검색하여 설치하실 수 있습니다.)

(이미지 첨부: \`앱 추가\` 버튼을 클릭합니다.)

(이미지 첨부: 우측 상단에 \`Install app\`을 클릭하여 플러그인을 설치합니다.)

## 2. 결제수단 선택

Shopify 스토어의 `Settings > Payments` 페이지에서 PortOne Payments 앱이 제공하는 결제수단을 선택해 줍니다.
이 부분은 엔드유저에게 스토어에서 제공하는 결제수단에 대한 마크를 노출시킵니다. 실제로 제공되는 결제수단과는 무관합니다.

(이미지 첨부: Visa, Mastercard 등의 결제수단 마크를 추가할 수 있습니다.)

## 3. Portone Payments 선택

Shopify 스토어의 `PortOne Payments` 설정페이지에서 Key 값을 추가하고, `Verify Now` 합니다.

`Shopify > Settings > Payments` 페이지 상단에 `Manage` 버튼을 클릭하여 PortOne Payments 세팅 페이지에 접속합니다.
PortOne Key 값을 입력하게 되어있습니다.

(이미지 첨부: \`Payment Channels >Filters: Global > Shopify\` 선택합니다.)

(이미지 첨부: \`PortOne(Global) 어드민 > Management > General\` 화면에서 Key 값을 확인하고 복사합니다.)

(이미지 첨부: Key 값을 입력한 후 \`Verify Now\` 버튼을 클릭하여 연동상태를 확인합니다. 이제 모든 연동이 완료되었습니다!)


# https://developers.portone.io/opi/ko/extra/plugins/shopify/shopify/shopify-5

---
title: 엔드유저의 Shopify 결제 경험
description: 실 고객의 Shopify 결제 화면을 설명합니다.
targetVersions:
  - v1
---

## 구매 플로우

1. 엔드유저는 고객사의 Shopify 스토어에서 상품을 장바구니에 추가하여 최종 구매페이지에 도달하게 됩니다.

(관련 이미지 첨부)

(관련 이미지 첨부)

(관련 이미지 첨부)

(관련 이미지 첨부)

2. 최종 체크아웃 페이지에 도달하면 결제가 PortOne Payment 로 진행된다는 안내문구를 확인할 수 있습니다.

(관련 이미지 첨부)

3. Pay now 를 클릭하면 유저는 PortOne 의 체크아웃 창으로 이동하게 되고
   Shopify 스토어에 설정된 Currency 와 PortOne(Global) 어드민에서 설정된 조건에 따라 결제수단이 노출되고 최종결제가 이루어집니다.

(관련 이미지 첨부)


# https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/payment

---
title: 일반결제 연동하기
description: 우커머스 플러그인을 통해 일반결제를 연동합니다.
targetVersions:
  - v1
---

이 문서는 우커머스 플러그인을 사용하여 일반결제 기능을 연동하는 방법을 설명합니다.

## STEP1: 포트원SDK 버전 설정하기

워드프레스 관리자 페이지의 우커머스 > 설정 > 포트원 페이지로 이동합니다. 인증결제를 위해 SDK버젼 설정이 필요합니다.

(관련 이미지 첨부)

## STEP2: 결제 수단 활성화하기

워드프레스 관리자 페이지의 우커머스 > 설정 > 결제 페이지로 이동합니다. 사용하고자 하는 포트원 결제 수단을 활성화하고 관리 버튼을 통해 설정 페이지로 이동합니다.

(관련 이미지 첨부)

## STEP3: 고객사 정보 입력하기

포트원 관리자 콘솔 > 결제연동 > 내 식별정보에서 확인한 고객사 정보를 입력합니다. 변경 사항 저장 버튼을 눌러 설정 내용을 저장합니다.

(관련 이미지 첨부)

## STEP4: PG사 및 상점아이디 설정하기

연동하실 PG사와 PG사의 상점아이디를 입력해주세요.

(관련 이미지 첨부)

## STEP5: 결제 수단별 설정하기

결제 수단별 옵션들을 다음과 같이 설정할 수 있습니다.

### 신용카드, 카카오페이, PAYCO, Eximbay, Paymentwall

- 추가 옵션이 없습니다.

### 휴대폰 소액결제

- 디지털 상품: 실물이 아닌 디지털 상품은 활성화해야 합니다.

### 실시간 계좌이체

- 실시간 계좌이체 에스크로: 활성화하여 우커머스의 실시간 계좌이체 결제 수단을 에스크로 방식으로 변경할 수 있습니다.

### 가상계좌

- 가상계좌 에스크로: 활성화하여 우커머스의 가상계좌 결제 수단을 에스크로 방식으로 변경할 수 있습니다.
- 가상계좌 입금통지 설정: 가상계좌 입금통지를 받기 위해 반드시 설정해야 합니다. (필수)
- 사업자등록번호: 다날 - 신용카드/계좌이체/가상계좌를 PG사로 사용할때 반드시 입력해야 합니다.

<div class="hint" data-style="info">

가상계좌 입금통지 설정

가상계좌를 사용하는 경우에는 가상계좌 입금통지 설정을 반드시 설정해야 합니다.

</div>


# https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/readme

---
title: 우커머스 플러그인
description: 포트원 우커머스 플러그인 사용방법을 안내합니다.
targetVersions:
  - v1
---

이 문서는 포트원 우커머스용 결제플러그인을 사용하여 쉽고 빠르게 결제를 연동하는 방법을 설명합니다.

## 플러그인 설치 및 활성화하기

포트원 우커머스용 플러그인을 워드프레스 사이트에 설치합니다. 해당 플러그인을 사용하기 위해서
[우커머스 플러그인](https://ko.wordpress.org/plugins/woocommerce/)이 설치되어 있어야 합니다.

먼저 워드프레스 관리자 페이지에서 **플러그인** 메뉴를 클릭합니다. 페이지의 상단 플러그인 검색창에 포트원을 검색하여 결과 목록에 있는 **포트원
우커머스 결제**를 선택합니다.

(관련 이미지 첨부)

플러그인을 설치하고 플러그인을 활성화 합니다.

(관련 이미지 첨부)

## 결제 연동하기

일반결제 또는 정기결제 기능을 워드프레스 우커머스 플러그인을 사용하여 연동할 수 있습니다.

[일반결제 연동하기](https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/payment)

[정기결제 연동하기](https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/subscription)


# https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/subscription

---
title: 정기결제 연동하기
description: 우커머스 플러그인을 통해 정기결제를 연동합니다.
targetVersions:
  - v1
---

이 문서는 우커머스 플러그인을 사용하여 정기결제 기능을 연동하는 방법을 설명합니다.

<div class="hint" data-style="info">

Woocommerce Subscriptions 플러그인

플러그인의 정기결제 기능을 사용하기 위해서는 우커머스에서 제공하는 [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) 플러그인(유료, $199)이 반드시 설치되어 있어야 합니다.

</div>

## STEP1: WooCommerce Subscriptions 다운로드 및 설치

**WooCommerce Subscriptions** 플러그인을 구매하여 다운로드 받습니다. 다운로드 받은 파일내에 담겨있는
`woocommerce-subscriptions.zip` 파일을 업로드하고 **지금 설치하기** 버튼을 눌러 플러그인을
설치합니다.

![](/gitbook-assets/ko/woosub-1.png)

설치가 완료되면, **플러그인을 활성화** 버튼을 눌러 플러그인을 활성화합니다.

![](/gitbook-assets/ko/woosub-2.png)

## STEP2: 결제 수단 선택하기

워드프레스 관리자 페이지의 **우커머스 > 설정 > 결제 페이지**로 이동하여, 사용하고자 하는 포트원 정기결제 수단을 선택합니다.

다음 PG사의 경우, 정기결제 수단을 다음과 같이 선택합니다.

- **나이스페이먼츠**: 포트원(KEY-IN결제/정기결제)
- **KG이니시스 / 다날(신용카드, 휴대폰소액결제)**: 포트원(정기결제-결제창방식)

결제 수단을 포트원(정기결제-결제창방식)으로 선택한 화면입니다.

(관련 이미지 첨부)

## STEP3: 고객사 정보 입력하기

결제 페이지 하단에 [포트원 관리자 콘솔](https://admin.portone.io)에서 확인한 고객사 정보를 입력합니다. 변경 사항 저장 버튼을 눌러 설정 내용을 저장합니다.

(관련 이미지 첨부)

## STEP4: 상품 생성하기

워드프레스 관리자 페이지의 **우커머스 > 상품 > 추가하기** 페이지로 이동합니다. 하단의 **상품
데이터** 항목을 Simple subscription으로 설정하고, 정기결제에 필요한 옵션들을 설정합니다.
매월 9,900원(Subscription price: 9900, every, month)을 과금하고 가입비(Sign-up fee)를 100,000원으로
설정하는 예제입니다.

![](/gitbook-assets/ko/woosub-5.png)

상품을 공개하면, 다음과 같이 정기결제 상품이 추가됩니다.

![](/gitbook-assets/ko/woosub-6.png)


# https://developers.portone.io/opi/ko/extra/plugins/wordpress/woocommerce/vbank

---
title: 가상계좌 입금통보 URL 설정하기
description: 우커머스 플러그인에서 가상계좌 입금통지 URL을 설정합니다.
targetVersions:
  - v1
---

이 문서는 가상계좌를 결제수단으로 사용하기 위해서 필요한 입금통지 URL을 설정하는 방법을 설명합니다.
결제 금액이 가상계좌에 입금되었을 때, 해당 정보를 워드프레스 사이트에 통지하기 위해서 다음과 같이
설정합니다.

## STEP1: 가상계좌 입금통지 URL 복사하기

먼저 워드프레스 관리자 페이지의 우커머스 > 설정 > 결제 페이지로 이동합니다. 페이지 상단에서 아임포트(가상계좌)를 선택하고 가상계좌 입금통지설정란의 URL을 복사합니다.

![](/gitbook-assets/ko/vbank-1.png)

## STEP2: 결제알림(Webhook) URL 입력하기

[포트원 관리자 콘솔](http://admin.portone.io) 내 \[결제 연동] - \[연동 관리] - \[결제알림(Webhook) 관리]
탭을 선택합니다. \[결제모듈 V1] 선택 후 설정 모드를 \[실연동]으로 선택한 후 Endpoint URL란에
전 단계에서 복사한 값을 입력하고, 하단의 저장 버튼을 눌러 설정을 저장합니다.

(관련 이미지 첨부)

## STEP3: 입금통지 테스트하기

입금통지를 설정한 후, 가상계좌 거래가 원활하게 이루어지는지 테스트할 수 있습니다.

### 1. NHN KCP 선택하기

포트원 콘솔 내 \[결제 연동] - \[연동 관리] - \[채널 관리] 탭을 선택합니다.
\[+ 채널 추가]를 클릭한 후 연동 모드를 \[테스트]로 선택합니다. 결제대행사에서 NHN KCP를 선택한 후
\[결제창 일반/수기결제 및 API 수기/정기결제]를 선택한 후 \[다음]을 클릭합니다.
\[PG상점아이디 (사이트코드)]를 클릭하여 \*\*KCP 결제창 일반결제 (AO09C)\*\*를 클릭한 후 \[저장]을 클릭합니다.
(해당 테스팅 기능은 KCP에서만 제공합니다.)

(관련 이미지 첨부)

### 2. 구매 시도하기

그 다음, 가상계좌 결제수단으로 상품 구매를 시도하여 결제 프로세스를 완료합니다.

![](/gitbook-assets/ko/vbank-4.png)

우커머스 주문내역을 조회하면 해당 주문이 가상계좌 입금대기중 상태라는 것을 확인할 수 있습니다.

![](/gitbook-assets/ko/vbank-5.png)

### 3. 입금내역 통지하기

[포트원 관리자 콘솔](http://admin.portone.io) 내 \[결제] - \[상세 내역 조회] 페이지에서 \[필터]를
클릭한 후 \[결제모드]에서 \[테스트 결제]를 체크합니다.

(관련 이미지 첨부)

테스트 결제 내역을 조회하여 가상계좌로 결제를 시도한 주문건을 확인합니다.
결제 건을 클릭한 후 상세 모달에서 \[테스트 입금 웹훅통지] 버튼을 눌러 워드프레스에 입금내역 통지를 테스트 합니다.

(관련 이미지 첨부)

우커머스 주문내역을 조회하면 해당 주문건이 완료 상태로 변경된 것을 확인할 수 있습니다.

![](/gitbook-assets/ko/vbank-7.png)


# https://developers.portone.io/opi/ko/integration/pg/v1/daou/readme

---
title: 키움페이 (다우데이타/페이조아)
description: 키움페이 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 키움페이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을 호출하여 다우 페이조아 결제창을 호출할 수 있습니다. **결제 결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후 **callback**으로 수신되고 모바일의 경우 **m\_redirect\_url**로 리디렉션됩니다.

<div class="hint" data-style="warning">

**페이조아 결제창 연동을 위해서는 ****JS SDK Version 1.2.0**** 이상을 사용하셔야 합니다.**

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "mid_1234567890",
    escrow: false,
    amount: 1004,
    name: "노스페이스 롱패딩 M",
    buyer_name: "홍길동",
    buyer_email: "hello@world.com",
    buyer_tel: "01012345678",
    digital: false, // 디지털로 계약되었다면 true로 설정
    m_redirect_url: "https://allerts.com/payments/complete",
    bypass: {
      // 페이조아(다우데이타) 전용 파라미터
      daou: {
        PRODUCTCODE: "portone",
        CASHRECEIPTFLAG: 0,
      },
    },
    app_scheme: "portoneappscheme",
  },
  function (rsp) {
    // callback 로직
    // * ...중략... *
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `daou` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card(신용카드)
  - trans(실시간 계좌이체)
  - vbank(가상계좌)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- digital: string

  **디지털 컨텐츠 여부**

  고객사 <-> 페이조아간 계약 상태에 따라 정해진 올바른 값을 넣어야 함. 그렇지 않은 경우 결제 진행 불가

- bypass.daou.PRODUCTCODE?: string

  **결제 상품 고유 번호**

  값에 대해 정해진 규격이 없고 보내지 않을 경우 포트원에서 기본값(iamport)을 설정해 페이조아 측으로 전달

- bypass.daou.CASHRECEIPTFLAG?: number

  **현금영수증 발급 구분코드**

  비 신용결제(계좌,가상)시 페이조아에서 자동발급 여부 구분코드

  - `1`: 허용
  - `0`: 차단

- app\_scheme?: string

  **모바일 앱 URL Scheme**

  모바일 앱 환경에서 결제시 필수 파라미터

- amount: number

  **결제금액**

  **string** 이 아닌 점에 유의하세요.

- escrow?: boolean

  **에스크로 설정여부**

  계좌이체,가상계좌만 지원됩니다.

</div>

<div class="tabs-content" data-title="비 인증 API 요청">

**API 방식으로 빌링키 발급,결제요청,예약결제를 구현할수 있습니다.**

**일회성 결제 요청하기**

REST API [**POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 일회성 결제를 요청합니다. 요청 시 전달된 카드는 포트원에 등록되지 않습니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

**빌링키 발급 요청하기**

REST API [**POST /subscribe/customers/{customer\_uid}**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 호출하여 빌링키 발급을 요청합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

**빌링키 발급 및 최초 결제 요청하기**

REST API [**POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 빌링키 발급과 최초 결제를 요청합니다.

- **`customer_uid`** : 빌링키 등록을 위해서 지정해야 합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

**빌링키로 결제 요청하기**

빌링키 발급과 최초 결제가 성공하면 빌링키는 전달된 `customer_uid` 와 1:1 매칭되어 포트원에 저장됩니다. 보안상의 이유로 서버는 빌링키에 직접 접근할 수 없기 때문에 `customer_uid`를 이용해서 재결제([**POST /subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)) REST API를 다음과 같이 호출합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

**자세한 가이드는 아래 링크를 참조하세요**

[비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth)

</div>

</div>

## 3. 부가기능

<div class="tabs-container">

<div class="tabs-content" data-title="할부개월수 설정">

```json
{
  "display": {
    "card_quota": [6] // 할부개월 6개월까지만 활성화
  }
}
```

**파라미터 설명**

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정값**

  - card\_quota: number\[]

    **할부 개월수**

    예시

    - `[]`: 일시불만 결제 가능
    - `2,3,4,5,6`: 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능
    - `3`: 일시불을 포함한 2,3개월까지 할부개월 선택 가능

<div class="hint" data-style="info">

할부결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다.

</div>

</div>

<div class="tabs-content" data-title="카드사 모듈 바로 호출">

```json
{
  "card": {
    "direct": {
      "code": "367",
      "quota": 3
    }
  }
}
```

**파라미터 설명**

- card?: object

  - direct?: object

    - code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - quota?: number

      **할부 개월 수**

      일시불일 시 0 으로 설정됩니다.

</div>

<div class="tabs-content" data-title="에스크로 결제">

에스크로 결제를 위해서는 **`escrow`** 파라미터를 추가하고 **true** 값으로 설정해야 합니다. 에스크로 결제가 완료되면 고객사는 배송정보 등록을 진행해야 하며 해당 작업이 누락되는 경우 **정산이 진행되지 않습니다**. [**배송정보 등록**](https://developers.portone.io/api/rest-v1/escrow?v=v1#post%20%2Fescrows%2Flogis%2F%7Bimp_uid%7D) 및 [**배송수정 API**](https://developers.portone.io/api/rest-v1/escrow?v=v1#put%20%2Fescrows%2Flogis%2F%7Bimp_uid%7D) 를 이용하여 배송정보를 관리할 수 있습니다.

```json title="API Body 예시"
{
  "logis": {
    "invoice": "1728384716123",
    "company": "CJGLS",
    "receiving_at": "20220215",
    "address": "성수이로20길16"
  },
  "receiver": {
    "name": "홍길동"
  },
  "sender": {
    "relationship": "본인"
  }
}
```

<div class="hint" data-style="danger">

**주의사항**

- 에스크로 배송정보 등록/수정 시 고객사가 전달한 배송정보(운송장 번호, 택배사 이름 등)에 대해 페이조아 측에서 유효성 체크를 하지 않습니다.

</div>

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/daou/undefined

---
title: 키움페이 유의사항
description: 결제 연동시 유의사항을 안내합니다.
targetVersions:
  - v1
---

## 키움페이 결제 특이사항

<details>

<summary>PC 결제는 `success`, 모바일 결제는 `imp_success` 전달</summary>

PC와 모바일에서 결제창이 각기 다른 방식으로 호출되기 때문에, 결제 후속 프로세스에도 차이가 있습니다.
PC 결제의 경우 키움페이 결제창이 iframe 방식으로 호출되기 때문에 결제 프로세스 완료 후 콜백 함수
(`IMP.request_pay` 함수 호출시 전달한 두 번째 파라미터)가 호출되지만, 모바일 결제의 경우 키움페이 결제창이 키움페이 URL로
리디렉션되기 때문에 결제 프로세스 완료 후 지정된 URL(`m_redirect_url`)로 302 리디렉션 됩니다.
이때 결제 실패/성공 여부를 의미하는 파라미터가 전달되는데, PC 결제시에는 `success`, 모바일 결제시에는 `imp_success`로
파라미터 명이 다르오니 유의하시기 바랍니다. 아래 예시를 참고해 주세요.

- \[PC결제] iframe → 콜백 함수 호출 → 콜백 함수로 전달되는 response 객체에 `success` 키 값으로 전달

  ```tsx
  IMP.request_pay(
    {
      // 중략
    },
    function (response) {
      const { success } = response; // 결제 성공 또는 실패 여부
      if (success) {
        // 결제 성공 시 프로세스
      } else {
        // 결제 실패 시 프로세스
      }
    },
  );
  ```

- \[모바일 결제] 리디렉션 → m\_redirect\_url로 302 리디렉션 → `imp_success` 쿼리 파라미터 전달

  ```text
  /**
   * m_redirect_url을 https://myservice.com/payments/complete로 설정한 후
   * 결제 프로세스 종료 됐을때 302 리디렉션 되는 URL 예시
   */
  https://myservice.com/payments/complete?**imp_success=true**&imp_uid=imp1234567890&merchant_uid=mid_123467890
  ```

**`imp_success`와 `success`는 deprecated** 되었습니다.

`imp_success` 파라미터와 `success` 파라미터는 **deprecated** 되었기 때문에 해당 파라미터를 기반으로
결제 실패/성공 여부를 판단하시는걸 지양해주세요.

해당 파라미터는 단순히 포트원에서 고객사 클라이언트로 응답되는 시기의 결제 실패/성공 여부를 내려주기 때문에
이 값은 키움페이에서 포트원으로 결제 결과를 통지하고 포트원의 DB 업데이트가 완료된 시점인 경우에만
정확합니다.

그런데 **키움페이 → 포트원으로의 결제 결과 전달 → 포트원 DB 업데이트 및 포트원 → 고객사 클라이언트로의 응답이 비동기로 동작**하기 때문에
**실제로는 결제가 정상적으로 완료된 경우에도 포트원 DB에 업데이트 시점에 따라 고객사 클라이언트로 응답되는
`imp_success` 또는 `success` 파라미터가 `false`일 수** 있습니다.

따라서 포트원 → 고객사 클라이언트로 응답되는 결과 데이터 중 포트원 거래 번호(`imp_uid`)와 고객사 주문 번호(`merchant_uid`)를 이용하여
포트원 결제내역 조회 API([GET /payments/{imp\_uid}](https://developers.portone.io/api/rest-v1/payment#get%20%2Fpayments%2F%7Bimp_uid%7D))를 호출한 후
결제 상태(`status`)를 보고 결제 실패(`failed`)/성공(`paid`) 여부를 판단하시길 권장드립니다.

</details>

<details>

<summary>사파리 브라우저 - 하나카드 / NH앱캐시 결제시 유의사항</summary>

사파리 브라우저에서 하나카드 / NH앱캐시(계좌이체) 결제 시 아래와 같이
`세션 유효기간이 초과되어 카드사와 연결이 종료되었습니다`와 같은 메시지가 렌더링되며 결제 진행이 불가능한 경우가 발생할 수 있습니다.

[참고이미지](<https://developers.portone.io/gitbook-assets/ko/image (116).png>)

이러한 현상이 발생한 경우, 사파리 환경설정에서 아래와 같이 `크로스 사이트 추적 방지` 해제 및 `모든 쿠키 차단`이 모두 해제하신 후 다시 시도하시길 바랍니다.

[참고이미지](<https://developers.portone.io/gitbook-assets/ko/image (159).png>)

</details>

<details>

<summary>사파리/파이어폭스 브라우저 - BC카드 결제시 유의사항</summary>

사파리와 파이어폭스에서 키움페이 결제창을 호출한 뒤 BC카드 선택 후 다음 버튼 클릭시 `지불에 실패하였습니다`라는 알림창이 뜨면서 결제 진행이
불가능한 경우가 발생할 수 있습니다.

[참고이미지](<https://developers.portone.io/gitbook-assets/ko/image (223).png>)

이러한 현상이 발생한 경우, 사파리 환경설정에서 아래와 같이 `*.payjoa.co.kr` 도메인에 대해 팝업을 `허용`으로 설정해야 합니다.

[참고이미지](<https://developers.portone.io/gitbook-assets/ko/image (256).png>)

</details>

<details>

<summary>실시간 계좌이체 유의사항 </summary>

키움페이의 경우 내부적으로 토스페이먼츠에서 제공하는 계좌이체를 사용하고 있어
토스 퀵계좌결제로 연결됩니다.

</details>

<details>

<summary>가상계좌 입금 완료시, 송금자 이름 정보만 저장됨</summary>

키움페이는 (발급된)가상계좌에 입금 완료시, 송금자의 정보(은행명, 계좌번호, 송금인) 중 송금자 이름 정보만 저장됩니다.
따라서 포트원 결제내역 조회([**GET /payments/{imp\_uid}**](https://developers.portone.io/api/rest-v1/payment#get%20%2Fpayments%2F%7Bimp_uid%7D))시
송금자의 은행코드(`bank_code`)과 은행명(`bank_name`)은 모두 NULL로 내려가며,
송금자 이름을 확인하기 위해서는 아래 예시와 같이 별도의 쿼리 파라미터(`extension`)를 `true`로 설정해주셔야 합니다.

```http
GET http://api.iamport.kr/payments/{포트원 번호}?**extension=true**
```

```json
{
  // ... 중략
  "bank_code": null, // 송금자 은행 코드 알 수 없음
  "bank_name": null, // 송금자 은행 이름 알 수 없음
  "extension": {
    // ... 중략
    "REMITTER": "홍길동" // 송금자 이름
  }
}
```

</details>

<details>

<summary>가상계좌 결제 취소시, PG사와 특약 필요</summary>

가상계좌 입금 완료 건에 대한 결제 취소(환불)는 가상계좌 발급 시 수수료가 부과되기 때문에 키움페이와
특약을 계약한 후 사용할 수 있습니다. 특약을 계약하지 않는 경우 기본적으로 가상계좌 결제 건의 환불은 불가능합니다.

</details>

<details>

<summary>가상계좌 결제 취소시, 실제 환불 금액 입금까지 7 영업일 이상 소요</summary>

가상계좌 결제 취소(환불)을 진행하는 경우 키움페이 측에서 수기로 확인한 후 환불 처리가 진행되기 때문에
환불 금액이 실제로 입금 될 때까지 7 영업일 이상 소요될 수 있습니다.

</details>

<details>

<summary>과세/면세/복합과세를 하나의 CPID로 이용하시는 경우</summary>

키움페이와 계약 진행 시 사용할 CPID 설정을 `건별구분`으로 발급 요청해 주셔야 합니다.
건별구분으로 발급된 경우에만 하나의 CPID로 과세/면세/복합과세 거래 건을 모두 처리할 수 있습니다.

</details>

<details>

<summary>면세금액은 카드 결제만 설정 가능</summary>

결제창(`IMP.request_pay` 함수) 호출시 총 결제 금액(`amount`)중 면세 금액(`tax_free`)을 설정할 수 있습니다.
단, 키움페이 시스템 상 면세 금액은 카드 결제(`pay_method: "card"`) 시에만 가능하고 계좌이체 / 가상계좌 결제 시에는
설정할 수 없어 전액 과세 처리 됩니다.

</details>

<details>

<summary>에스크로 결제 시 구매자 전화번호 자동 입력 불가</summary>

에스크로 결제시 결제 요청 시 입력된 구매자 전화번호가 결제창에 자동 완성되지 않습니다.

[참고이미지](<https://developers.portone.io/gitbook-assets/ko/image (253).png>)

</details>

<details>

<summary>비인증 결제 API 호출시 초당 호출 횟수 제한</summary>

비인증 결제 API 호출시 **초당 50건 이하**로 호출 하는 것을 권장합니다.
초당 50건 이상의 비인증 결제 API가 호출될 경우 오류가 발생할 수 있습니다.

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/ksnet/readme

---
title: KSNET
description: KSNET 결제창 연동 가이드입니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/ksnet
---

(이미지 첨부: KSNET)

## 1. KSNET 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여
채널 설정을 진행합니다.

## 2. 결제 요청하기

[JavaScript SDK (신규)](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)의 `IMP.request_pay(param, callback)`을 호출하여
KSNET 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback**으로 수신되고 모바일의 경우 **m\_redirect\_url**로 리디렉션됩니다.

<div class="hint" data-style="info">

KSNET 결제는 최신 SDK에서만 지원됩니다.
기존 JavaScript SDK를 사용 중이신 경우 [JavaScript SDK (신규)](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) 문서를 참고하여 업데이트를 진행해주세요.

**KSNET을 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다.**

</div>

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="danger">

**기존에 deprecated된 응답들은 모두 제거**됐습니다.

KSNET 연동시에 사용되는 신규 JS SDK는 기존 모듈에서 제공했던 CallBack 파라미터가 대부분 삭제되었습니다.(특히 deprecated 로 명시된 파라미터는 모두 삭제되었습니다.)

해당 JS SDK 사용시 Callback 으로 내려받을수 있는 데이터는 오직 아래 두가지 입니다.

**`imp_uid`, `merchant_uid`**

따라서 해당 SDK를 사용하실때는 `IMP.request_pay`로부터 응답된 객체(또는 쿼리 파라미터)에서 `imp_uid`를 가지고 **아임포트 REST API(GET `/payments/imp_uid`)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여 응답 파라미터 중 status 파라미터로 결제 상태를 파악하셔야 합니다.

</div>

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="JavaScript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_id_1667634130160", // 상점에서 채번하는 고유 주문 번호
    name: "나이키 와플 트레이너 2 SD",
    pay_method: "card",
    escrow: false,
    amount: "109000",
    tax_free: 3000,
    buyer_name: "홍길동",
    buyer_email: "buyer@example.com",
    buyer_tel: "02-1670-5176",
    buyer_addr: "성수이로 20길 16",
    buyer_postcode: "04783",
    app_scheme: "portone://",
    m_redirect_url: "https://helloworld.com/payments/result",
    notice_url: "https://helloworld.com/api/v1/payments/notice",
    confirm_url: "https://helloworld.com/api/v1/payments/confirm",
    currency: "KRW",
    digital: false,
    period: {
      from: "2022-12-01",
      to: "2023-01-01",
    },
    custom_data: { userId: 30930 },
    display: { card_quota: [0, 6] },
    bypass: {
      ksnet: {
        sndQpayType: "0",
      },
    },
  },
  function (rsp) {
    // callback 로직
    //* ...중략... *//
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `ksnet.{PG 상점 아이디}`

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - vbank (가상계좌)
  - trans (계좌이체)
  - phone (휴대폰소액결제)
  - lpay (LPAY)
  - ssgpay (SSGPAY)
  - kakaopay (카카오페이)
  - naverpay (네이버페이)
  - payco (페이코)

- merchant\_uid: string

  **고객사 채번 주문 고유번호**

  고객사에서 매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  지정하지 않은 경우 0원입니다.

- tax\_free?: number

  **면세금액**

  지정하지 않은 경우 0원입니다.

  <div class="hint" data-style="info">

  포트원을 통해 KSNET를 사용하는 경우 과세 설정이 `복합과세`이므로 면세금액을 반드시 입력해야 합니다.

  </div>

- buyer\_name: string

  **구매자명**

- buyer\_tel?: string

  **구매자 전화번호**

- currency: string

  **결제 통화**

  결제통화로 KSNET 카드 다이렉트의 경우 `KRW` 만 허용됩니다.

- digital?: boolean

  **디지털 상품 유형 여부**

  <div class="hint" data-style="info">

  해당 필드는 **휴대폰 결제**에서만 사용되며, 상점이 `디지털 상품유형`으로 설정된 경우 항상 `true`로 전달해야 합니다.

  </div>

- appCard?: boolean

  **카드 결제시, 카드 결제창에 앱카드만 선택 가능하도록 할지 여부 (기본값: **false**)**

- useFreeInterestFromMall?: boolean

  **상점 부담 무이자 할부 사용 여부**

  고객사가 부담하는 무이자 할부 여부를 설정 할 수 있습니다.

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정**

  - card\_quota?: number\[]

    **할부 개월수 설정**

    `[0]` : 일시불
    `[2,3,4]` : 2,3,4 개월

- card?: object

  **카드 결제시 세부 설정 정보**

  - direct?: object

    **카드사 다이렉트 호출시 설정 정보**

    - code?: string

      **카드사 코드**

- storeDetails?: object

  **상점 세부 정보**

  - businessName?: string

    **상점 사업자 명**

  - businessRegistrationNumber?: string

    **상점 사업자 번호**

    - 하이픈(-) 을 제외한, 숫자만 전달하여야합니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사 그대로 bypass할 값들의 모음**

  - ksnet?: string

    **KSNET 전용 파라미터**

    - sndQpayType?: string

      **카드 결제 시 결제창에 간편 결제 수단 표시 여부**

      0 : 간편결제 수단 표시하지 않음 / 1 : 간편결제 수단 표시함

    - tcode?: string

      **통신사 구분**

      통신사에 따라 LG는 `lgt`, KT는 `kgf`, SKT는 `skt`로 입력해야 하며, 통신사 구분이 어려우신 경우
      임의의 값을 입력하여 요청해도 무방합니다.

    - url?: string

      **고객사 url**

      - 결제를 요청하는 사이트의 url을 입력하여야 합니다.

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

**KSNET은 결제창 기반 비인증 결제를 지원하지 않습니다.**

</div>

<div class="tabs-content" data-title="API 결제">

### 일회성 결제 요청하기

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 일회성 결제를 요청합니다.
요청 시 전달된 카드 정보는 포트원에 등록되지 않습니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

### 빌링키 발급 요청하기

REST [**API POST /subscribe/customers/{customer\_uid}**](https://developers.portone.io/api/rest-v1/billingkey#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 호출하여 빌링키 발급을 요청합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

### 빌링키로 결제 요청하기

빌링키 발급과 최초 결제가 성공하면 빌링키는 전달된 `customer_uid` 와 1:1 매칭되어 포트원에 저장됩니다.
보안상의 이유로 서버는 빌링키에 직접 접근할 수 없기 때문에 `customer_uid`를 이용해서
재결제([**POST /subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)) REST API를 다음과 같이 호출합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid": "your-customer-unique-id", "merchant_uid": "order_id_8237352", "amount": 3000, "product_type": "digital"}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>

## 3. API 기능

### 승인 취소(환불)

결제 승인 완료 건에 대해 승인 취소(환불)를 할 수 있는 API입니다.\
REST [**API POST /payments/cancel**](https://developers.portone.io/api/rest-v1/payment#post%20%2Fpayments%2Fcancel)를
호출하여 승인 취소(환불)을 요청합니다.

### 현금영수증 등록

포트원을 통한 거래건이지만 결제창에서 현금영수증 등록을 하지 못한 경우 API를 통해 현금영수증을 등록할 수 있습니다.\
REST [**API POST /receipts/{imp\_uid}**](https://developers.portone.io/api/rest-v1/receipt#post%20%2Freceipts%2F%7Bimp_uid%7D)를
호출하여 현금영수증을 요청합니다.

- `product_type`(디지털: `"digital"`, 실물: `"real"`), `buyer_name` 파라미터는 KSNET 필수 입력 대상입니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"identifier": "1178178260", "identifier_type": "business", "type": "company", "product_type": "digital"}' \
     https://api.iamport.kr/receipts/{imp_uid}
```

### 외부 현금영수증 등록

포트원을 통한 거래건이 아닌 현금성 거래의 경우에도 API를 통해 현금영수증을 등록할 수 있습니다.\
REST [**API POST /receipts/external/{merchant\_uid}**](https://developers.portone.io/api/rest-v1/receipt#post%20%2Freceipts%2Fexternal%2F%7Bmerchant_uid%7D)를
호출하여 현금영수증을 요청합니다.

- `product_type`, `pg`, `buyer_name` 파라미터는 KSNET 필수 입력 대상입니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid": "order_id_1667643230720", "name": "나이키 와플 트레이너 2 SD", "amount": 109000, "identifier": "1178178260",  "identifier_type": "business", "type": "company", "product_type": "digital", "tax_free": "3000", "pg": "ksnet"}' \
     https://api.iamport.kr/receipts/external/{merchant_uid}
```

## 4. 부가기능

### 할부개월수 렌더링

결제창 호출 시 표시할 할부개월수를 설정할 수 있습니다.

```json
{
  //...중략
  "display": {
    "card_quota": [5, 6] // 할부개월 5,6개월만 활성화
  }
}
```

상점 부담 무이자 할부의 경우 card.detail 파라미터를 사용하여 최대 할부개월수 설정이 가능합니다.

```json
{
  "card": {
    "detail": [
      { "card_code": "366", "max_month": 5 }, // 특정 카드사 (신한카드) 상점 부담 무이자 최대 5개월 할부 설정
      { "card_code": "381", "max_month": 3 } // 특정 카드사 (KB국민카드) 상점 부담 무이자 최대 3개월 할부 설정
    ]
  }
}
```

<div class="hint" data-style="info">

KB 앱카드 결제 시, card.useInstallment 파라미터 true 설정 시에만 할부 개월 수 설정이 가능합니다.

</div>

자세한 상점 부담 무이자 할부 설정 가이드는  [\[API\&SDK\] - \[브라우저 SDK\] - \[결제요청 파라미터\] - \[상점 부담 무이자 할부 최대 개월수 설정하기](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq?v=v1#상점-부담-무이자-할부-최대-개월수-설정하기) 에서 확인 가능합니다.

**파라미터 설명**

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정**

  - card\_quota?: number\[]

    **할부 개월수 설정**

    `[0]` : 일시불
    `[2,3,4]` : 2,3,4 개월

- useFreeInterestFromMall?: boolean

  **상점 부담 무이자 할부 사용 여부**

- card?: object

  **카드 결제시, 카드 결제에 대한 세부 정보 설정**

  - useInstallment?: boolean

    **할부 가능 여부**

  - detail?: object\[]

    **카드사 렌더링 정보**

    - card\_code?: string

      **카드사 코드**

    - max\_month?: number

      **상점 부담 무이자 할부 최대 개월수**

<div class="hint" data-style="info">

할부 결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다. (현대카드의 경우 1만원 이상 결제 요청시 사용 가능)

</div>

### 카드사 다이렉트 호출

카드사 다이렉트 호출 시 결제대행사의 통합결제창을 거치지 않고, 지정한 카드사의 결제화면이 호출됩니다.

```json
{
  //...중략
  "card": {
    "direct": {
      "code": "361" // 카드사 지정
    }
  }
}
```

**파라미터 설명**

- card?: object

  **카드 결제시 세부 설정 정보**

  - direct?: object

    **카드사 다이렉트 호출시 설정 정보**

    - code?: string

      **카드사 코드**

      [카드사 코드 바로가기](https://developers.portone.io/opi/ko/support/code-info/card-code?v=v1)

#### 유의사항

<details>

<summary> 필수 파라미터 안내</summary>

- KSNET을 통한 카드사 다이렉트 호출 시 `buyer_name` 파라미터는 필수 입력해야 합니다.

- 모바일 환경에서 **BC카드, 수협카드, 전북카드, 광주카드, 카카오뱅크카드** 를 다이렉트 호출하는 경우
  `buyer_tel`, `bypass.ksnet.tcode` 파라미터를 필수 입력해야 합니다.

- **국민카드, 우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를
  다이렉트 호출하는 경우 `storeDetails.businessName`, `storeDetails.businessRegistrationNumber` 파라미터를
  필수 입력해야 합니다.

- **우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드** 를 다이렉트
  호출하는 경우 `bypass.ksnet.url` 파라미터를 필수 입력해야 합니다.

</details>

<details>

<summary> 일부 카드사의 경우 다이렉트 호출과 할부개월 리스트 렌더링을 함께 사용할 수 없습니다.</summary>

- 우리카드, 하나카드, 농협카드, 삼성카드, 현대카드, 롯데카드, 신한카드, 씨티카드의 경우 다이렉트 호출 시
  렌더링할 할부개월 리스트를 지정할 수 없습니다.

</details>

### 간편결제 다이렉트 호출

```json
{
  //...중략
  "bypass": {
    "ksnet": {
      "easyPayDirect": true
    }
  },
  "pay_method": "naverpay",
  "storeDetails": {
    "ceoFullName": "홍길동",
    "address": "서울시 ...",
    "phoneNumber": "01000000000",
    "businessName": "상호명",
    "businessRegistrationNumber": "000000000"
  }
}
```

- KSNET 간편결제 다이렉트는 아래의 결제 방식을 지원합니다.
  - 네이버페이 카드
  - 카카오페이 카드 및 머니
  - 페이코
  - L페이 카드

- 네이버페이 머니·포인트의 경우 현재 KSNET에서는 다이렉트 호출을 지원하지 않습니다.

- 간편결제 다이렉트를 사용하기 위해서는 `bypass.ksnet.easyPayDirect`를 `true`로 설정하고, `pay_method`를 `naverpay`, `kakaopay`, `payco`, `lpay` 중 하나로 지정합니다.

- 구매자 이름(`buyer_name`)을 입력해야 합니다.

- 네이버페이의 경우
  - 현재 카드 결제만 가능
  - 상점명(`storeDetails.businessName`) 필수
  - `buyer_email`, `buyer_tel` 선택
  - 할부 개월 수 표시 설정 가능
  - 이용 가능 카드사 설정 가능 (신한, BC, 국민, 농협, 롯데, 삼성, 시티, 우리, 하나, 현대)

- 카카오페이의 경우
  - 상점 대표자명(`storeDetails.ceoFullName`) 필수
  - 상점 주소(`storeDetails.address`) 필수
  - 상점 전화번호(`storeDetails.phoneNumber`) 필수
  - `buyer_email`, `buyer_tel` 필수
  - 할부 개월 수 표시 설정 가능
  - 이용 가능 카드사 설정 가능 (신한, BC, 국민, 농협, 롯데, 삼성, 시티, 우리, 하나, 현대)

- 페이코의 경우
  - 상점명(`storeDetails.businessName`) 필수
  - 사업자등록번호(`storeDetails.businessRegistrationNumber`) 필수
  - `buyer_email`, `buyer_tel` 필수

- L페이의 경우
  - `buyer_email`, `buyer_tel` 선택


# https://developers.portone.io/opi/ko/integration/pg/v1/ksnet/warning

---
title: 연동 주의사항
description: KSNET 연동 시 주의사항을 확인할 수 있습니다.
targetVersions:
  - v1
---

<details>

<summary>계약 확인사항</summary>

**포트원을 통한 KSNET 이용 고객사의 상점아이디 과세 설정은 반드시 `복합과세`로 설정되어 있어야 합니다. 일반과세, 면세 설정은 지원하지 않습니다.**

- 키인결제

- 고객사 부담 무이자 할부 설정

- 가상계좌 마감일시 지정

- 가상계좌 환불

- 간편결제 사용

- 할부 사용

- 에스크로 사용, 배송 에스크로만 지원
  - KSNET에서 일반 에스크로, 배송 에스크로 두 가지 유형의 에스크로를 제공합니다. 포트원을 통해 KSNET 에스크로를 사용하려는 경우 반드시 **배송 에스크로** 설정이 되어 있어야 합니다.

- 휴대폰 결제 시 상품 유형 설정(실물 혹은 디지털)

</details>

<details>

<summary>특정카드사 고객사 부담 무이자 할부 설정 불가</summary>

KSNET에서 고객사 부담 무이자 할부 설정에 필요한 카드 코드 정보를 일부 카드사에 대해서만 제공하고 있습니다. 카드코드가 제공되지 않는 일부 카드사의 경우 고객사 부담 무이자 할부를 설정할 수 없습니다.

</details>

<details>

<summary>계좌이체 </summary>

## 결제창에서 현금영수증 발급 시 사업자번호, 휴대폰 번호에 숫자만 입력해야합니다.

계좌이체 결제창을 통한 현금영수증 발급 시 휴대폰번호, 사업자 번호는 **숫자만** 입력해야 합니다. 하이픈(-)을 포함한 다른 문자가 포함되는 경우 별다른 에러 표시 없이 결제는 진행되지만 현금영수증이 발급되지 않습니다.

</details>

<details>

<summary>가상계좌</summary>

## 예금주명 지정 불가

가상계좌의 예금주명은 고객사명으로 고정되며 별도 지정이 불가합니다.

## 부가세, 면세 금액 설정 지원 안 함

KSNET는 일회성 가상계좌의 경우 부가세, 면세 금액 설정을 지원하지 않습니다.

## 가상계좌 입금기한은 필수 입력 항목

KSNET에서 가상계좌 입금기한은 선택 입력 항목으로 안내하고 있지만 입력하지 않을 경우 가상계좌 입금기한을 특정할 수 없고 오동작할 가능성이 있어 필수로 입력해야합니다. (포트원에서는 필수 값으로 제한하고 있습니다.)

## 가상계좌 입금기한은 **초 단위 UNIX TIMESTAMP 사용**

`vbank_due` 파라미터로 전달하는 가상계좌 입금기한은 초 단위의 UNIX TIMESTAMP(통상 10자리 자연수)로 입력하여야 합니다. (`api로 가상계좌를 발급하는 경우에만 해당합니다.`)

</details>

<details>

<summary>에스크로 서비스</summary>

## 주문자 이메일 필수 입력

구매 확인을 받기 위한 주문자 이메일을 필수로 입력하여야 합니다.

## 등록 소요 시간 존재

에스크로 거래는 30분 \~ 1시간 뒤 [ksta.ksnet.co.kr](http://ksta.ksnet.co.kr/) > PG 거래내역 > 배송 에스크로 거래조회에서 확인이 가능합니다. 에스크로 정보 수정의 경우도 등록이 완료된 이후부터 가능합니다.

## 배송정보 발송일시는 **초 단위 UNIX TIMESTAMP 사용**

`logis.sent_at` 파라미터로 전달하는 배송정보 발송일시는 초 단위의 UNIX TIMESTAMP(통상 10자리 자연수)로 입력하여야 합니다.

</details>

<details>

<summary>키인결제</summary>

판매 상품에 대한 구분값으로 **`product_type`** 파라미터를 사용해야 결제가 가능합니다.

고객사 부담 무이자를 원하시는 경우 PG사와의 별도의 계약 후 **`interest_free_by_merchant`** 파라미터를 사용해야 합니다.

카드번호와 유효기간만으로 결제를 요청하는 비인증 승인 API만 연동되어 있어

**`birth`**(생년월일 6자리 혹은 사업자 등록번호 10자리)와 **`pwd_2digit`**(비밀번호 앞 2자리)는 검증하지 않습니다.

</details>

<details>

<summary>빌링키 결제</summary>

판매 상품에 대한 구분값으로 **`product_type`** 을 파라미터로 사용해야 결제가 가능합니다.

고객사 부담 무이자를 원하시는 경우 pg 사와의 별도의 계약 후 **`interest_free_by_merchant`** 파라미터를 사용해야 합니다.

</details>

<details>

<summary>빌링키 등록</summary>

`card_number`, `expiry`, `pwd_2digit`, `birth` 파라미터 입력은 필수 입니다.

</details>

<details>

<summary>기타</summary>

- 휴대폰 결제는 부분취소 불가능.

- 카드, 간편결제 외 결제의 경우 매출 전표 확인 불가능.

- 간편결제(카카오페이, 페이코) 카드 결제의 경우 KSNET 측에서 카드정보(카드번호, bin) 정보를 제공해주지 않아 결제 정보에 카드사 정보가 제공되지 않습니다.

- USD 결제는 순수 해외카드로만 결제 가능합니다.

- 카카오페이 사용 시 상점정보(대표자명, 주소, 전화번호)를 필수로 입력해야합니다

- 부분취소는 총 9회까지 가능합니다. (카드결제, 가상계좌, 계좌이체, 간편결제)

- 취소는 결제일 기준 6개월 이내에만 가능합니다.

- 가상계좌 환불은 23:00\~06:00 시간 외에만 가능합니다.

- 계좌입금 거래 시 결제창에서 발급한 현금영수증은 경우 거래 취소 시 자동으로 취소 되지 않습니다.

- 복합과세의 계좌입금 거래를 부분취소하는 경우 기존에 발급한 현금영수증을 취소하고 부분취소 금액이 반영된 금액 정보로 다시 현금영수증을 발급해야합니다.

- 매출 전표 확인 시 자동으로 인쇄 기능이 호출됩니다. 오동작이 아닌 KSNET의 의도된 기능입니다.

- 간편 결제 수단에서 고객사 부담 무이자 설정은 사용 불가능합니다.

- 간편 결제 수단에서 할부 개월 수 표시 설정은 일부 간편결제사에서만 가능합니다.
  - 네이버페이, 카카오페이, LPay: 할부 개월 수 표시 설정 가능
  - Payco, SSGPay: 할부 개월 수 표시 설정 불가, 5만원 이상 시 1\~12 개월 표시 고정

</details>

<div class="hint" data-style="danger">

특이사항

- 카드, 간편결제를 외 결제 수단 에서는 매출전표를 제공하지 않습니다.
- KSNET은 KRW, USD 만 지원합니다.
- USD 결제의 경우 순수 해외 카드만 결제 가능합니다.
- 페이코, 카카오페이의 경우 카드번호 혹은 카드bin 정보를 제공하지 않습니다.
- 주문자 이메일(`buyer_email`)은 선택 입력 항목이지만 에스크로 결제에서 구매확인 이메일 수신을 위해 필수로 입력해야 합니다.
- 발급사가 비씨,국민,하나,삼성,신한,현대,롯데,농협인 경우에 `고객사 무이자 할부`를 설정할 수 있습니다.
- 결제 취소 시 부분취소는 9회까지 가능합니다. (카드결제, 가상계좌, 계좌이체)
- 취소는 결제일 기준으로 6개월까지만 가능합니다.
- 가상계좌 환불은 23:00\~06:00 시간 외에만 가능합니다.
- 가상계좌 환불은 특약이 있는 고객사만 사용 가능합니다.
- 휴대폰 결제는 부분취소를 지원하지 않습니다.
- 계좌입금 거래 시 발급한 현금영수증은 경우 거래 취소 시 자동으로 취소 되지 않습니다. 수동으로 취소해야 합니다.
- **포트원을 통한 KSNET 이용 고객사의 상점아이디의 과세설정은 `복합과세`만 지원합니다.**

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/newtoss/readme

---
title: 토스페이먼츠(신모듈)
description: 토스페이먼츠 (신모듈 / 2022-07-27 버전) 연동 방법을 확인합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/tosspayments
---

## 1. 토스페이먼츠 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 최신 JavaScript SDK로 업데이트하기

토스페이먼츠 신모듈 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**토스페이먼츠 신모듈을 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다**

</div>

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)문서를 통해 최신 SDK를 설치해주세요.

## 3. 결제 요청하기

신규 SDK가 제공하는 `IMP` 모듈에서 `request_pay` 함수를 호출합니다.

`pg` 파라미터를 `tosspayments`로 지정하여 토스페이먼츠 신 모듈 연동임을 명시해주세요.

토스페이먼츠 신 모듈을 기준으로 작성한 예시 코드는 아래와 같습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts showLineNumbers
const userCode = "고객사 식별코드";
IMP.init(userCode); // 고객사 식별 코드를 넣어 모듈을 초기화해주세요.

IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    merchant_uid: "order_id_1667634130160",
    name: "나이키 와플 트레이너 2 SD",
    pay_method: "card",
    escrow: false,
    amount: "109000",
    tax_free: 3000,
    buyer_name: "홍길동",
    buyer_email: "buyer@example.com",
    buyer_tel: "02-1670-5176",
    buyer_addr: "성수이로 20길 16",
    buyer_postcode: "04783",
    m_redirect_url: "https://helloworld.com/payments/result", // 모바일 환경에서 필수 입력
    notice_url: "https://helloworld.com/api/v1/payments/notice",
    confirm_url: "https://helloworld.com/api/v1/payments/confirm",
    currency: "KRW",
    locale: "ko",
    custom_data: { userId: 30930 },
    display: { card_quota: [0, 6] },
    appCard: false,
    useCardPoint: true,
    bypass: {
      tosspayments: {
        useInternationalCardOnly: true, // 영어 결제창 활성화
      },
    },
  },
  (response) => {
    // PC 환경에서 결제 프로세스 완료 후 실행 될 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `tosspayments` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method?: string

  - 카드 (card)
  - 계좌이체(trans)
  - 가상계좌(vbank)
  - 휴대폰 소액결제(phone)
  - 도서문화상품권(booknlife)
  - 스마트문상(smartculture)
  - 컬쳐랜드(cultureland)
  - 카카오페이 (kakaopay)
  - 네이버페이 (naverpay)
  - 엘페이 (lpay)
  - 삼성페이(samsung)
  - SSGpay (ssgpay)
  - 애플페이 (applepay)
  - 페이코 (payco)
  - 토스간편결제 (tosspay)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- buyer\_name: string

  **구매자 이름**

- buyer\_email?: string

  **구매자 email 주소**

- currency?: string

  **통화구분코드**

- appCard?: boolean

  카드 결제시, 카드 결제창에 앱카드만 선택 가능하도록 할지 여부 (기본값: **false**)

- useCardPoint?: boolean

  카드 결제시, 카드 포인트 사용 허용할지 여부

</details>

<details>

<summary>**기타 파라미터 설명**</summary>

- bypass?: object

  - isCulturalExpense?: boolean

    문화비 지출여부

  - useInternationalCardOnly?: boolean

    해외카드(Visa, MasterCard, UnionPay) 결제 여부입니다. 값이 `true`면 해외카드 결제가 가능한 영문 결제창이 열립니다.

  - cashReceiptType?: string

    현금성 결제(계좌이체, 가상계좌)창에서 선택할 수 있는 현금영수증 발급 유형 (기본값: 결제창에서 선택 가능)

    - anonymous (미발행, 자진발급)
    - personal (소득공제)
    - corporate (지출증빙)

```json
{
  "pay_method": "trans",
  "bypass": {
    "isCulturalExpense": true,
    "cashReceiptType": "personal"
  }
}
```

</details>

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 비 인증 결제창을 호출할 수 있습니다. 비 인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 'card'만 지원됩니다.
    merchant_uid: "order_monthly_0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    amount: 0, // 실제 승인은 발생되지 않고 오직 빌링키만 발급됩니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    customer_id: "matthew", //고객사가 회원에게 부여한 고유 ID
  },
  function (rsp) {
    // callback 로직
  },
);
```

<div class="hint" data-style="info">

- 비인증 결제를 위해서는 **토스페이먼츠로 부터 발급받은 MID정보**를 포트원 관리자콘솔에 설정하셔야 비 인증 결제창을 활성화 시킬수 있습니다.
- 빌링키 발급시 **실 결제는 발생되지 않습니다**.(금액을 지정해도 결제가 발생되지 않음)

</div>

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `tosspayments` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid: string

  **카드 빌링키**

  비 인증 결제창에서 고객이 입력한 카드정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount: number

  **결제금액**

  결제창에 표시될 금액으로 실제 승인은 이루어지지 않습니다.(실 결제를 발생시키기 위해서는 **customer\_uid** 로 **REST API 를 이용하여 결제요청**을 해주셔야 합니다.)

- customer\_id?: string

  **`구매자 식별자`**

  빌링키를 발급한 고객의 고유 ID 를 지정합니다.(회원ID) 해당 값 설정시 빌링키와 고객을 맵핑할 수 있습니다. 누락시 포트원에서 임의의 값을 설정합니다.

**빌링키(customer\_uid)로 결제 요청하기**

빌링키 발급이 성공하면 실 빌링키는 customer\_uid 와 1:1 매칭되어 **포트원 서버에 저장**됩니다. customer\_uid를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)를 호출하시면 결제를 발생시킬 수 있습니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

<div class="tabs-content" data-title="비인증 API 방식">

**API 방식으로 빌링키 발급,결제요청,예약결제를 구현할수 있습니다.**

<div class="hint" data-style="danger">

**MID 발급시 주의사항**

토스페이먼츠로 부터 MID 발급시 **API version** 은 반드시 **1.4** 이어야 합니다.

</div>

**일회성 결제 요청하기**

[**REST API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 일회성 결제를 요청합니다. 요청 시 전달된 카드는 포트원에 등록되지 않습니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

**빌링키 발급 요청하기**

REST [**API POST /subscribe/customers/{customer\_uid}**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 호출하여 빌링키 발급을 요청합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

**빌링키 발급 및 최초 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 빌링키 발급과 최초 결제를 요청합니다.

- **`customer_uid`** : 빌링키 등록을 위해서 지정해야 합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

**빌링키로 결제 요청하기**

빌링키 발급과 최초 결제가 성공하면 빌링키는 전달된 `customer_uid` 와 1:1 매칭되어 포트원에 저장됩니다. 보안상의 이유로 서버는 빌링키에 직접 접근할 수 없기 때문에 `customer_uid`를 이용해서 재결제([**POST /subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)) REST API를 다음과 같이 호출합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>

## 4. 부가기능

<div class="tabs-container">

<div class="tabs-content" data-title="할부개월수 설정">

```json title="javascript"
{
  "display": {
    "card_quota": [6], // 할부개월 6개월만 활성화
    "only_installment": true // 일시불 항목은 제외
  }
}
```

**파라미터 설명**

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정값**

  - card\_quota: number\[]

    **할부 개월수**

    예시

    - `[]`: 일시불만 결제 가능
    - `2,3,4,5,6`: 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능
    - `3`: 일시불을 포함한 2,3개월까지 할부개월 선택 가능

  - only\_installment?: boolean

    `true` 인 경우 `card_quota` 에 설정한 할부개월수만 표시

<div class="hint" data-style="info">

할부결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다.

</div>

</div>

<div class="tabs-content" data-title="카드사 모듈 바로 호출">

```json title="javascript"
{
  "card": {
    "direct": {
      "code": "367",
      "quota": 3
    }
  }
}
```

**파라미터 설명**

- card?: object

  - direct?: object

    - code?: string

      **카드사 금융결제원 표준 코드**

      [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 참조

    - quota?: number

      **할부 개월 수**

      일시불일 시 0 으로 설정됩니다.

</div>

<div class="tabs-content" data-title="고정식 가상계좌 발급">

토스페이먼츠 고정식 가상계좌 발급 서비스를 이용하기 위해서는 **토스페이먼츠 측과 협의**를 통해 결제에 이용하는 MID에 고정식 가상계좌 설정이 반드시 선행되어야 합니다.

해당 설정이 완료되면 두가지 방식으로 고정식 가상계좌를 발급할 수 있습니다.

- [API 방식](https://developers.portone.io/api/rest-v1/vbank?v=v1#post%20%2Fvbanks)
- 결제창 방식

두 방식 모두 **고유식별번호**가 유입되어야 하며 해당 값은 각 고객을 특정할수 있는 고유값이어야 합니다.

결제창 방식을 이용하기 위해서 고객에게 사전에 해당 고유식별번호가 안내되어야 하며 가상계좌 발급단계에서 아래 첨부이미지처럼 고유식별번호 란에 해당 값이 유입되어야 합니다.

(관련 이미지 첨부)

API 방식 또한 `vbank_key` 파라미터가 고유식별번호에 대응되는 값으로 API방식은 고객사에서 직접 해당 값을 기재해서 호출할수 있기 때문에 고객 편의차원에서 훨씬 간편한 고정식 가상계좌 서비스를 제공할수 있습니다.

고정식 가상계좌 발급이 정상적으로 이루어지면 아래와 같이 고객휴대폰 번호로 SMS가 발송되며 고객은 해당 정보를 보고 입금을 할수 있습니다.(비용: 무료)

(관련 이미지 첨부)

</div>

</div>

## 5. 사용가능 기능

토스페이먼츠 신모듈을 통해서 사용가능한 추가 기능들은 다음과 같습니다. 자세한 내용은 API 문서를 참고해주세요.

- [결제금액 사전등록 API](https://developers.portone.io/api/rest-v1/payment.validation?v=v1#post%20%2Fpayments%2Fprepare)
- [결제취소 API](https://developers.portone.io/api/rest-v1/payment?v=v1#post%20%2Fpayments%2Fcancel)
- [현금영수증 API](https://developers.portone.io/api/rest-v1/receipt?v=v1)
- [현금영수증 발급(외부) API](https://developers.portone.io/api/rest-v1/receipt?v=v1#post%20%2Freceipts%2Fexternal%2F%7Bmerchant_uid%7D)

<div class="hint" data-style="danger">

**기존에 deprecated된 응답들은 모두 제거됐습니다. ⚠️**

신 토스페이먼츠 모듈 연동시에 사용되는 신규 JS SDK는 기존 모듈에서 제공했던 CallBack 파라미터가 대부분 삭제되었습니다.(특히 deprecated 로 명시된 파라미터는 모두 삭제되었습니다.)

해당 JS SDK 사용시 Callback 으로 내려받을수 있는 데이터는 오직 아래 두가지 입니다.

**`imp_uid`, `merchant_uid`**

따라서 해당 SDK를 사용하실때는 `IMP.request_pay()`로부터 응답된 객체(또는 쿼리 파라미터)에서 `imp_uid`를 가지고 **아임포트 REST API(GET `/payments/imp_uid`)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여 응답 파라미터 중 status 파라미터로 결제 상태를 파악하셔야 합니다.

</div>

<div class="hint" data-style="info">

```html
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

위 JS SDK 를 이용하여 토스페이먼츠,케이에스넷 연동시 callback Data는
아래와 같이 두가지 형태로만 내려갑니다.

- `imp_uid`
- `merchant_uid`

위 PG사를 제외한 다른 PG사는 `imp_success` 파라미터가 기존처럼 내려가지만
해당 파리미터는 deprecated 된 값이기 때문에 해당 값에 의존성을 가진 프로그램 로직은 모두 삭제하시는
방향성을 잡아가셔야 하는점 유념하시기 바랍니다.

</div>

<div class="hint" data-style="info">

**토스페이먼츠 API 버전 설정**

- [토스페이먼츠 개발자센터](http://app.tosspayments.com/signin?redirectUrl=https%3A%2F%2Fdevelopers.tosspayments.com%2Fmy%2Fapi-keys) 로그인

- 왼쪽 네비게이션 메뉴 API 키 선택 → API 버전을 **2022-07-27**로 선택

  API 버전을 다르게 설정하면 결제 승인 / 실패 시 실제 응답과 다른 응답을 받아볼 수 있으니 **반드시 API 버전을 2022-07-27로** 맞춰주시기 바랍니다

(관련 이미지 첨부)

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/newtoss/warning

---
title: 연동 유의사항
description: 토스페이먼츠 (신 모듈) 연동 유의사항을 소개합니다.
targetVersions:
  - v1
---

## 토스페이먼츠와 사전 계약이 필요한 경우

아래 기능을 사용하시려면 토스페이먼츠에 사전 신청 후 계약이 완료되어야 합니다.

계약 하지 않은 경우 해당 기능 이용시 결제 승인에 실패하거나, 승인에 성공하더라도 의도한 바와는 다른
응답(결제창에서 에스크로 결제를 했으나 비-에스크로 결제 응답을 받음)을 얻게 될 수 있습니다.

- 간편결제 사용
- 면세 / 복합과세 사용
- 할부 사용
- 상점 부담 무이자 할부 사용
- 상품권 결제 사용
- 카드사 포인트 사용
- 에스크로 사용

## 카드 결제

<details>

<summary>appCard 파라미터는 일부 카드사에 대해서만 적용 됨</summary>

토스페이먼츠의 경우 카드 결제시, 앱 카드로만 결제할 수 있도록 제한하는 appCard 파라미터를 지원하지만 지원 범위가 아래와 같이 제한적입니다.

- 지원 가능 카드: 국민, 농협, 롯데, 삼성, 신한, 현대, 우리, 하나
- 지원 불가 카드: 씨티

</details>

<details>

<summary>display.card\_quota 파라미터는 다른 PG사와 다르게 동작 함</summary>

display.card\_quota 파라미터로 결제창에 렌더링 될 할부 개월수 리스트를 제어할 수 있습니다. 다른 PG사는 전달한 값만 렌더링 되지만, 토스페이먼츠의 경우에는 토스페이먼츠 자체 정책에 따라 **일시불 \~ 전달한 값 중 최대값까지 모두 렌더링**됩니다.

- 예1. 일시불만 허용

  ```json
  {
    "display": {
      "card_quota": [0]
    }
  }
  ```

- 예2. 5개월만 허용

  ```json
  {
    "display": {
      "card_quota": [5]
    }
  }
  ```

- 예3. \[토스페이먼츠] 일시불 \~ 5개월까지 허용

  ```json
  {
    "display": {
      "card_quota": [3, 5] // 3과 5 중에 최대값이 5이기 때문에 일시불 ~ 5개월까지 모두 렌더링 된다
    }
  }
  ```

- 예3. \[타 PG사] 일시불 \~ 5개월까지 허용

  ```json
  {
    "display": {
      "card_quota": [0, 1, 2, 3, 4, 5]
    }
  }
  ```

- 예4. \[토스페이먼츠] 3개월과 5개월만 허용 → **불가능**

- 예5. \[타 PG사] 3개월과 5개월만 허용

</details>

<details>

<summary>무이자 할부가 적용 되어도 ISP 계열 카드로 결제시에는 “무이자” 표기가 되지 않음</summary>

고객사는 토스페이먼츠와 사전 계약 또는 카드사 정책에 따라 무이자 할부 기능을 사용할 수 있습니다. 이에 따라 결제창 내에서 각 카드 사별 최대 무이자 할부 개월수에 따라 할부 개월수 옆에 “무이자” 또는 “무”라고 표기 됩니다.

- 예1. 삼성카드 - 최대 3개월 무이자 할부 적용 → 3개월까지 “무” 표기

  (관련 이미지 첨부)

하지만 ISP 계열 카드의 경우에는 실제로 무이자가 적용된다고 하더라도 “무이자” 여부가 표기되지 않습니다.

- 예2. BC카드 - 최대 12개월 무이자 할부 적용 → 표기 없음 → 실제 결제 승인시 무이자 할부 적용은 됨

  (관련 이미지 첨부)

이는 ISP 계열 카드사 결제시 사용되는 페이북 앱 특성에 따른 것으로 실제 결제 승인시에는 정상적으로 무이자 할부가 적용됩니다.

</details>

<details>

<summary>할부 기간 선택 관련 이슈</summary>

모바일 웹 - 카드 결제시 토스페이먼츠 결제창 내에서 간편결제의 경우 할부 기간 선택이 불가능하고, 간편결제 외의 모든 카드사의 경우엔 할부 기간 선택이 가능합니다.

- 모바일 웹 - 간편결제 외 카드사: 할부 기간 선택 가능\
  ![](</gitbook-assets/ko/image (178).png>)

- 모바일 웹 - 간편결제: 할부 기간 선택 불가능\
  ![](</gitbook-assets/ko/image (351).png>)

반면, PC - 카드 결제 - ISP계열의 경우에는 토스페이먼츠 결제창 내에서도 할부 기간 선택이 불가능 하며, 대신 ISP 페이북 팝업에서는 선택이 가능합니다.

- PC - 카드결제 - ISP 선택: 할부 기간 선택 불가능

  [이미지 링크](<https://developers.portone.io/gitbook-assets/ko/image (184).png>)

- PC - 카드결제 - ISP 선택 - 페이북 팝업: 할부 기간 선택 가능

다소 헷갈릴 수 있으나 간편결제는 간편결제 앱에서 할부 개월수를 선택할 수 있어 토스페이먼츠 결제창에서 선택할 수 없다는 토스 답변이 있었습니다.

</details>

<details>

<summary>카카오페이 13개월 이상 할부 개월수 불가능한 이슈</summary>

카카오페이 자체에서 13개월 이상 할부 결제를 지원하지 않기 때문에, 카카오페이로는 최대 12개월까지 할부 결제가 가능합니다.

</details>

<details>

<summary>카카오페이 일부 카드의 경우 카드 정보를 확인할 수 없는 이슈</summary>

카카오페이로 결제시 일부 카드(2022년 6월 이후 카드사 측에서 신규 생성 된 카드)의 경우, 카카오페이 → 토스페이먼츠로 카드 정보를 정상적으로 내려주지 않기 때문에 포트원 REST API로 결제내역 조회(GET /payments/{imp\_uid})시 카드사 정보(card\_code: 카드 코드, card\_name: 카드 이름)를 확인할 수 없습니다.

</details>

## 카드사 다이렉트 호출

<details>

<summary>고정 할부 개월수(card.direct.quota)를 보내지 않으면 무조건 일시불로 결제 됨</summary>

토스페이먼츠는 카드사 다이렉트 호출시 **quota 값을 전달하지 않는 경우에는 무조건 일시불로 결제**가 됩니다.

따라서 카드사 다이렉트 호출시에는 반드시 구매자가 할부 개월수를 선택할 수 있는 UI/UX를 만들어주신 후 결제창 호출(IMP.request\_pay)시 card.direct.quota값을 넘겨야 합니다.

- 예1. 현대카드 다이렉트 호출 → 무조건 일시불로 결제 됨

  ```json
  {
    "card": {
      "direct": {
        "code": "367"
      }
    }
  }
  ```

- 예2. 삼성카드 다이렉트 호출 + 5개월 고정 할부 개월수 지정 → 5개월 할부 적용

  ```json
  {
    "card": {
      "direct": {
        "code": "365",
        "quota": 5
      }
    }
  }
  ```

</details>

<details>

<summary>고정 할부 개월수(card.direct.quota)를 보내도 카드 결제창에서 결제 될 할부 개월수를 확인할 수 없음</summary>

카드사 다이렉트 호출시 quota 값을 보내도 **실제로 카드사 결제창에서는 결제시 적용 될 할부 개월수를 확인할 수 없습니다.** (물론 실제 승인시에는 전달한 quota값 만큼 할부 적용이 됨)

단, ISP 계열의 카드사인 경우에는 페이북 팝업에서 확인이 가능하며 이 값을 사용자가 변경 할 수는 없습니다.

- 예. BC카드 다이렉트 호출 + 5개월 고정 할부 개월수 지정\\

  [이미지 링크](<https://developers.portone.io/gitbook-assets/ko/image (181).png>)



```json
{
  "card": {
    "direct": {
      "code": "361",
      "quota": 5
    }
  }
}
```

</details>

<details>

<summary>페이북을 통한 ISP 계열 카드 결제시, 카드 번호가 정상적으로 내려오지 않음</summary>

페이북 통한 ISP 계열 카드 결제시 토스페이먼츠로부터 실제 카드 번호와 다른 9200으로 시작하는 카드 번호가 내려오고 있어 결제 승인 내역 조회(POST `/payments/{imp_uid}`)시 응답되는 카드 번호(`card_numer`)가 정확하지 않습니다.

</details>

<details>

<summary>사파리 브라우저에서 ISP 계열 카드 결제 불가능</summary>

사파리 브라우저에서 ISP 계열 카드 결제를 위한 페이북 팝업 호출에 이슈가 있습니다. 이는 토스페이먼츠 결제창에서 페이북으로 넘어가는 과정에서 발생하는 이슈로 포트원과는 무관합니다.

</details>

## 가상계좌

<details>

<summary>가상계좌 발급 가능 은행</summary>

토스페이먼츠를 통한 가상계좌는 경남은행, 광주은행, KB국민은행, IBK기업은행, NH농협은행, DGB대구은행, 부산은행, 새마을금고, Sh수협은행, 신한은행, 우리은행, 우체국예금보험, 하나은행에서 발급받을 수 있습니다.

</details>

<details>

<summary>가상계좌 발급 완료시 예금주 명 알 수 없음</summary>

토스페이먼츠는 가상계좌 발급 완료시 발급 된 가상계좌의 **예금주 명을 전달해주지 않습니다**. 따라서 포트원 REST API로 결제내역 조회(GET `/payments/{imp_uid}`)시 `vbank_holder`가 null로 전달됩니다.

실제 가상계좌 예금주 명은 토스페이먼츠와 계약된 고객사 이름과 동일하다고 하니, 참고 부탁드립니다.

</details>

## 간편결제

<details>

<summary>대부분의 간편결제에 대해 결제 테스트 불가능</summary>

토스페이먼츠는 SSGPAY, 네이버페이, 카카오페이, 페이코 등 대부분의 간편결제에 대해 결제 테스트 기능을 제공하고 있지 않습니다. 따라서 테스트용 설정으로 간편결제를 시도하면 `[PAY_PROCESS_ABORTED] Toss Payments와 계약된 결제수단(SSG)이 아닙니다.` 와 같은 에러 메시지가 리턴되면서 결제창이 호출되지 않습니다. 이 경우 토스페이먼츠와 실 상점 계약을 하여 실 상점 정보를 포트원 관리자페이지에 다시 등록한 후 시도하셔야 합니다.

</details>

<details>

<summary>카드 외 복합 결제 건에 대해서는 정확한 결제 수단 정보 확인 불가능</summary>

간편결제로는 여러가지 결제수단으로 결제 할 수도 있고 각 결제 수단을 혼합하여 복합 결제를 할 수도 있습니다. 이때 토스페이먼츠는 구매자가 정확히 어떤 방식으로 결제했는지 데이터를 내려주지 않으며 그 내용은 아래와 같습니다.

1. 카드로 결제한 경우에는 카드 정보(카드사, 카드 유형 등)를 확인할 수 있습니다.
2. 하지만 카드 외의 결제 수단으로 결제를 한 경우에는, 결제 수단 세부 정보(어떤 은행, 포인트, 머니인지)를 확인할 수 없습니다.
3. 카드가 포함 된 결제 건인지 아닌지는 구분이 됩니다. 따라서 카드가 포함 된 결제 건이면 결제 수단을 `card` 로 기록합니다.
4. 하지만 계좌 / 포인트 / 머니 중 어떤 것으로 결제 됐는지 구분되지 않습니다. 따라서 카드가 포함 되지 않은 결제 건이면 결제 수단을 `point`로 기록합니다. 실제로 등록된 계좌로 결제 됐다고 하더라도 포인트나 머니로 결제 된 것과 구분되지 않기 때문에 결제 수단을 `trans`로 저장하지 않습니다.

</details>

<details>

<summary>고정 할부 개월수 적용해도 일시불과 함께 표기</summary>

네이버페이, L페이, 토스페이, 삼성페이 등 일부 간편결제사의 경우 해당 간편결제사의 정책에 따라 **고정 할부 개월수를 설정하더라도 일시불과 함께 렌더링**됩니다.

- 예. 네이버페이 - 5개월 고정 할부 설정시, 일시불과 5개월 할부 모두 선택 가능

  ```json
  {
    "pay_method": "naverpay",
    "display": {
      "card_quota": [5]
    }
  }
  ```

  (관련 이미지 첨부)

</details>

## 기타

- 상품권 결제는 부분취소가 불가능
- 테스트 결제 건은 매출 전표 확인이 불가능
- 간편결제 - 카드 외의 결제 건은 매출 전표 확인이 불가능
- 간편결제 - L페이 결제창 배경 화면 투명도 이슈로 겹쳐보이는 현상
- `cashReceiptType` 파라미터로 인한 오동작 관련 이슈

<details>

<summary>지출증빙 발급번호 이슈</summary>

`bypass.cashReceiptType`(현금성 결제시, 결제창 내에 현금영수증 발급 유형 설정 값)을 corporate(지출 증빙)으로 설정하고 결제창을 호출하면 토스페이먼츠 결제창에서 현금영수증 발급 유형이 “지출증빙”으로 표기되어있으나 발급 번호가 사업자등록번호가 아닌 주민등록번호로 설정되어있으며 이를 변경할 수 없는 토스 버그가 있습니다. 따라서 구매자는 현금영수증 발급 유형을 지출증빙용이 아닌 소득공제용이나 미발행으로 바꿔서 선택한 후 다시 지출증빙용을 선택해야합니다.

[이미지 링크](<https://developers.portone.io/gitbook-assets/ko/image (180).png>)

</details>

<details>

<summary>간편결제 - SSG페이 결제시 토스페이먼츠 결제창에서 휴대폰 번호를 입력하지 않아도 다음으로 넘어가는 이슈</summary>

간편결제 - SSG페이 결제시 토스페이먼츠 결제창에서 휴대폰 번호를 입력해야 구매자의 휴대폰에 깔린 SSG 페이 앱에서 푸쉬 알림이 오면서 결제를 할 수 있는데, 현재 토스페이먼츠 결제창에서 휴대폰 번호를 입력하지 않아도 다음 단계로 이동되기 때문에 구매자는 이 경우 무한 대기를 하게 됩니다. 휴대폰 번호를 입력을 하지 않은 경우엔 다음 단계로 이동할 수 없도록 토스 측의 조치가 필요합니다.![](</gitbook-assets/ko/image (188).png>)

</details>

<details>

<summary>삼성페이 결제 중단시 결제창 잘림 현상</summary>

삼성페이 결제창 렌더링 후 장시간 대기했다가 우측 상단 X 버튼을 눌러 결제 프로세스를 중단하면 아래와 같이 잘린 화면이 렌더링됩니다. 가로 스크롤도 동작하지 않아(스크롤은 움직이지만 화면은 고정) 사용자 경험이 다소 저해됩니다.

[이미지 링크](<https://developers.portone.io/gitbook-assets/ko/image (177).png>)

</details>

<details>

<summary>현금영수증 발급 API 호출시 유효성 검사를 하지 않음</summary>

예를 들어 현금영수증 발급 유형(type)을 소득공제(person)으로 보내고 현금영수증 발급 번호(identifier)를 사업자 등록번호로 보내면 실제로는 현금영수증 발급에 실패해야하지만 토스페이먼츠에서 유효성 검사를 하지 않아 그대로 성공 응답을 보내고 있습니다.

따라서 원활한 현금영수증 발급을 위해서는 현금영수증 발급 API 호출시 현금영수증 정보를 정확하게 입력하셔야 합니다.

</details>

<details>

<summary>사파리 / 파이어폭스 브라우저 내 팝업 블로커 이슈</summary>

사파리 / 파이어폭스 브라우저에서 설정에서 팝업이 차단되어있는 경우 페이북 결제시 팝업이 뜨지 않아 결제 진행이 되지 않거나 가상계좌 발급이나 휴대폰 소액결제시 승인에 실패하는 등 결제가 원활하게 진행되지 않을 수 있으니, 반드시 팝업을 해제하시고 시도해주시기 바랍니다.

</details>

<details>

<summary>IE 브라우저 - 카드결제 - 페이코 선택시 아래와 같이 결제창이 잘리는 이슈</summary>

이에 대해 토스로부터 “IE 에서 fade out 이 되고 있으므로 수정에 우선순위를 두기 어려울것 같습니다.”라는 답변을 받았습니다.

</details>

<details>

<summary>IE 브라우저 결제 중단시 에러 메시지 인코딩 이슈</summary>

IE 브라우저에서 결제 중단(결제 승인/실패 이전에 결제창을 명시적으로 닫을때)시 토스페이먼츠로부터 아래와 같이 인코딩 된 에러 메시지가 전달되는 이슈가 있습니다. (이를 디코딩해보면 “사용자가결제를취소하였습니다”라는 메시지)

`%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B0%80 %EA%B2%B0%EC%A0%9C%EB%A5%BC %EC%B7%A8%EC%86%8C%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4`

이에 대해 토스로부터 “IE 의 인코딩 이슈라서 저희가 수정해 드리기가 애매하고, 내부적으로 IE 는 fadeout 되어 더 이상 공식적으로 지원을 하지 않고 있습니다.”라는 답변을 받았습니다.

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/billing-api-caution

---
title: 빌링키 발급 / API 연동 유의사항
description: (신)나이스페이먼츠 비인증 결제 연동 유의사항을 소개합니다.
targetVersions:
  - v1
---

## API 지원 기능

- 빌링키 발급
- 빌링키 결제
- 키인 결제
- 예약 결제
- 결제 취소(가상계좌 환불 포함)
- 에스크로 배송 정보 등록, 조회(수정 불가능)
- 가상계좌 발급, 회수(수정 불가능)
- 포트원 외부 결제 건 현금영수증 발급, 조회, 취소

## 빌링키 발급

(신) 나이스페이먼츠 빌링키 발급은 API 방식(`POST /subscribe/customers/{customer_uid}`)만 지원합니다.

## 비인증 결제

(신) 나이스페이먼츠는 발급 된 빌링키로 재결제(`POST /subscribe/payemnts/again`),
키인 결제(`POST /subscribe/payments/onetime`) 그리고 스케줄 결제(`POST /subscribe/payments/schedule`)를
모두 지원하며 기본 파라미터 외에 아래 3개의 파라미터를 추가로 지원합니다.

|파라미터                     |데이터 타입           |의미                                                                                               |
|-----------------------------|----------------------|---------------------------------------------------------------------------------------------------|
|vat\_amount                  |double                |총 결제 금액 중 부가세 금액. 부가세 직접 입력 방식을 위해 사용. 단, 나이스페이먼츠와 사전 협의 필요|
|intereset\_free\_by\_merchant|boolean(기본값: false)|상점 부담 무이자 할부 적용 여부. 단, 나이스페이먼츠와 사전 협의 필요                               |
|use\_card\_point             |boolean(기본값: false)|카드사 포인트 사용 여부. 단, 나이스페이먼츠와 사전 협의 필요                                       |

## 가상계좌

### 가상계좌 API 발급시 `business_registration_number` 파라미터 추가 지원

|파라미터                      |데이터 타입|의미                   |
|------------------------------|-----------|-----------------------|
|business\_registration\_number|string     |구매자 사업자 등록 번호|

(신) 나이스페이먼츠의 경우 API를 통한 가상 계좌 발급 시, 향후 해당 거래 건을 에스크로 배송 정보로 등록할 때
사용될 구매자의 사업자 번호를 `business_registration_number` 파라미터로 입력받고 있습니다.

### API로 가상계좌 채번은 가능하나 발급된 가상계좌 정보는 수정 불가능

(신) 나이스페이먼츠는 `POST /vbanks` API로 가상 계좌를 채번 할 수 있지만 `PUT /vbanks` API로
**이미 채번 된 가상계좌 정보(입금 기한, 입금 금액)를 수정할 수 없습니다.**

## 에스크로 결제

### 배송 정보 등록시 `send_email` 파라미터 추가 지원

|파라미터   |데이터 타입|의미                                                                                     |
|-----------|-----------|-----------------------------------------------------------------------------------------|
|send\_email|boolean    |에스크로 구매 확정시 결제 창에 입력했던 이메일로 해당 사실을 전송할지 여부 (기본값: true)|

(신) 나이스페이먼츠의 경우 에스크로 결제건에 대해 배송 정보 등록 API 호출 시 `send_email` 파라미터를
이용하여 구매 확정됐을 때 결제창에 입력한 이메일로 구매 확정 내용을 전송할지 여부를 제어할 수 있습니다.
기본 값은 true(구매 확정 여부 이메일 전송)이며 false로 입력 시 구매가 확정되어도 이메일로 안내되지 않습니다.

### 배송 정보 수정 불가

(신) 나이스페이먼츠는 `POST /escrow/logis/{imp_uid}` API로 에스크로 배송 정보 등록은 가능하지만
`PUT /escrow/logis/{imp_uid}` API로 **수정은 불가능**합니다.

## 현금영수증

### 결제창에서 발급 받지 못한 현금영수증은 API로 발급 불가능

(신) 나이스페이먼츠의 경우 현금성 결제(가상계좌, 계좌이체, 네이버페이 포인트 결제 등)시 승인 단계에서
현금영수증을 발급 요청할 수 있습니다. 이때 결제 승인 단계에서 현금영수증을 발급 요청하지 못한 경우,
현금영수증 발급 API(`POST /receipts/{imp_uid}`)를 사용한다고 하더라도 발급이 되지 않으니 참고 부탁드립니다.

### API로 현금영수증 발급 시, 현금영수증 카드 사용 불가능

API로 현금영수증 발급(`POST /receipts/{imp_uid}`)시 발급 받을 현금영수증 정보(현금영수증 발급 유형,
현금영수증 발행 식별 정보, 현금영수증 발행 식별 정보 유형)를 전달해야 합니다.
단, (신) 나이스페이먼츠의 경우 **현금영수증 카드 번호로 현금영수증 발급이 불가능**하오니 참고 부탁드립니다.

<details>

<summary>\[가능] 사업자 등록번호로 지출증빙용 현금영수증 발급</summary>

```http
POST /receipts/{imp_uid}

{
  // ...중략
  "type": "company", // 현금영수증 발급 유형: 지출증빙
  "identifier": "1178178260", // 현금영수증 발행 식별 정보: 사업자 등록번호
  "identifier_type": "business" // 현금영수증 발행 식별 정보 유형: 사업자 등록번호
}
```

</details>

<details>

<summary>\[가능] 휴대폰 번호로 소득공제용 현금영수증 발급</summary>

```http
POST /receipts/{imp_uid}

{
  // ...중략
  "type": "personal", // 현금영수증 발급 유형: 소득공제
  "identifier": "01012345678", // 현금영수증 발행 식별 정보: 휴대폰 번호
  "wdentifier_type": "phone" // 현금영수증 발행 식별 정보 유형: 휴대폰 번호
}
```

</details>

<details>

<summary>\[가능] 주민등록번호로 소득공제용 현금영수증 발급</summary>

```http
POST /receipts/{imp_uid}

{
  // ...중략
  "type": "personal", // 현금영수증 발급 유형: 소득공제
  "identifier": "9010102012345", // 현금영수증 발행 식별 정보: 주민등록번호
  "identifier_type": "person" // 현금영수증 발행 식별 정보 유형: 주민등록번호
}
```

</details>

<details>

<summary>\[불가능] 현금영수증 카드번호로 소득공제용 현금영수증 발급</summary>

```http
POST /receipts/{imp_uid}

{
  // ...중략
  "type": "personal", // 현금영수증 발급 유형: 소득공제
  "identifier": "123456789012", // 현금영수증 발행 식별 정보: 현금영수증 카드번호
  "identifier_type": "taxcard" // 현금영수증 발행 식별 정보 유형: 현금영수증 카드번호
}
```

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/payment-caution

---
title: 일반결제 연동 유의사항
description: 나이스페이먼츠(신모듈) 일반결제 연동 유의사항을 소개합니다.
targetVersions:
  - v1
---

## 결제창 호출 실패 사유 알 수 없음

상점 아이디 설정 이슈, 파라미터 설정 오류 등으로 결제창 호출이 불가능한 경우
PG사로부터 정확한 사유를 전달받지 못하기 때문에 다음과 같이
“알 수 없는 이유로 결제가 중단되었습니다. 나이스페이로 문의(1661-0808)하세요.” 에러를 리턴합니다.
이 메시지를 받으신 경우 결제창 호출 시 사용한 파라미터 전문과 함께 포트원으로 문의해 주시길 바랍니다.

## 카드 결제

|기능                                 |사용 가능 여부                                                                                |
|-------------------------------------|----------------------------------------------------------------------------------------------|
|상점 부담 무이자 할부                |가능                                                                                          |
|다이렉트 호출                        |<span style="color:red"> **단독 사용 불가능** </span> (고정 할부 개월수가 함께 전달 되어야 함)|
|다이렉트 호출 + 고정 할부 개월수     |가능                                                                                          |
|다이렉트 호출 + 리스트 할부 개월수   |<span style="color:red"> **불가능** </span>                                                   |
|비 다이렉트 호출 + 고정 할부 개월수  |**PC만 가능**                                                                                 |
|비 다이렉트 호출 + 리스트 할부 개월수|**PC만 가능**                                                                                 |

### 토스뱅크 카드사 다이렉트 호출 미지원

나이스페이먼츠(신모듈)의 경우 토스뱅크 카드(card.direct.code = "092") 다이렉트 호출이 불가능합니다.

### 카드사 다이렉트 호출시 고정 할부 개월수 필수 입력

나이스페이먼츠(신모듈)는 **카드사 다이렉트 호출시
고정 할부 개월수를 <span style="color:red"> 필수 </span>로 입력**해야 합니다.
결제 금액이 할부 지원 금액 미만(일반적으로 50,000원 이상 결제 시 할부 기능을 지원하나
카드사에 따라 다를 수 있습니다.)인 경우 **할부 개월수를 0(일시불)으로 전달**해야 합니다.

<details>

<summary>BC 카드 다이렉트 호출 + 5개월 고정 할부</summary>

```ts
IMP.request_pay(
  {
    // ...중략
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    card: {
      direct: {
        // 다이렉트 호출할 카드사 코드와 고정 할부 개월수를 모두 지정해야 함
        code: "361", // BC카드
        quota: 5, // 5개월 할부
      },
    },
  },
  // 콜백함수
);
```

</details>

<details>

<summary>삼성 카드 다이렉트 호출 + 일시불</summary>

```ts
IMP.request_pay(
  {
    // ...중략
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    card: {
      direct: {
        // 다이렉트 호출 할 카드사 코드와 고정 할부 개월수를 모두 지정해야 함
        code: "365", // 삼성카드
        quota: 0, // 일시불
      },
    },
  },
  // 콜백함수
);
```

</details>

### 모바일 환경에서는 다이렉트 호출시에만 할부 옵션 설정 가능

나이스페이먼츠(신모듈)의 경우 일반 카드 결제 시(간편결제 제외) 할부 옵션(고정 할부 개월수)사용이 가능하나
**모바일 환경**에서는 **카드사 다이렉트 호출할 때만 할부 옵션 사용이 가능합니다.** 만약 모바일 환경에서 다이렉트 호출 코드 없이
할부 옵션을 전달하는 경우 무시됩니다.

<details>

<summary>모바일 환경에서 리스트 할부 개월수만 전달 → 전달한 파라미터가 무시되고 모든 할부 개월수 렌더링</summary>

```ts
IMP.request_pay(
  {
    // ...중략
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    display: { card_quota: [2, 3, 4, 5, 6] }, // 2 ~ 6 개월 리스트 할부 개월수 적용 시도
  },
  // 콜백함수
);
```

(관련 이미지 첨부)

</details>

<details>

<summary>모바일 환경에서 3개월 고정 할부 개월수만 전달 → 전달한 파라미터가 무시되고 모든 할부 개월수 렌더링</summary>

```ts
// ...중략
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    display: { card_quota: [3] }, // 3개월 고정 할부 개월수 적용 시도
  },
  // 콜백함수
);
```

(관련 이미지 첨부)

</details>

## 가상계좌

### 가상계좌 입금 기한(`vbank_due`) 필수 입력

나이스페이먼츠(신모듈) 가상 계좌 발급 시, 입금 기한은 필수 입력해야 하며 아래 4가지 형식만 유효합니다.
입금 기한을 입력하지 않거나, 유효하지 않은 형식을 입력할 경우 가상계좌 발급 결제창이 호출되지 않고 "결제 창 호출에 실패하였습니다.
나이스페이 V2 가상계좌 발급시 유효한 입금 기한을 필수로 입력해야 합니다." 라는 에러 메세지가 리턴되오니 유의하시기 바랍니다.

- YYYY-MM-DD HH:mm:ss
- YYYYMMDDHHmmss
- YYYY-MM-DD
- YYYYMMDD

## 계좌이체

### 계좌이체 다이렉트 호출시 은행 코드 지정 불가능

나이스페이먼츠(신모듈) 계좌이체 다이렉트 호출은 은행 코드를 지정하지 않고 바로 뱅크페이 결제창이 띄워지는 구조입니다.

### 계좌이체 다이렉트 호출시 현금영수증 정보는 필수 입력

계좌이체 거래는 계좌에서 현금성 결제로 현금영수증 발급이 가능하므로 현금영수증 정보를 필수로 입력해야 합니다.
만약 입력하지 않을 경우 나이스페이먼츠(신모듈) 계좌이체 다이렉트 호출 시 **현금영수증 발급 유형은 필수 입력**입니다.
라는 에러 메시지가 뜨면서 결제창이 호출되지 않으니 유의하시기 바랍니다.

### 계좌이체 에스크로 결제시에는 다이렉트 호출 불가능

나이스페이먼츠 정책상 계좌이체 + 에스크로 결제시에는 다이렉트 호출이 불가능합니다.
아래와 같이 계좌이체 + 에스크로 + 다이렉트 호출을 위한 파라미터를 설정할 경우
"나이스페이 V2 계좌이체 에스크로 결제시 다이렉트 호출은 불가능합니다."라는 에러 메시지가 뜨면서
결제창이 호출되지 않으니 유의하시기 바랍니다.

### 계좌이체 에스크로 결제시 결제창에 올바른 이메일을 입력해야 함

존재하지 않는 이메일을 입력할 경우 **이메일 주소 오류**라는 에러 메시지와 함께 승인에 실패합니다.
또한 실제로 존재하는 이메일 도메인이더라도 나이스페이먼츠 정책상 유효하지 않다고 취급하는
이메일 주소(예: .finance로 끝나는 이메일 주소)를 입력한 경우 승인은 정상적으로 되지만
**이후 API로 에스크로 등록시 에스크로 구매 확정 이메일이 전송되지 않습니다.**

<details>

<summary>자세히 보기</summary>

```ts
IMP.request_pay(
  {
    // ...중략
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "trans", // 계좌이체 결제
    escrow: true, // 에스크로 결제
  },
  // 콜백함수
);
```

(관련 이미지 첨부)

</details>

## 휴대폰 소액결제

### 실물/컨텐츠 여부(`digital`) 필수 입력

휴대폰 소액결제시 실물/컨텐츠 여부(digital) 파라미터는 필수 입력입니다.
입력하지 않는 경우 "나이스페이 V2 휴대폰 소액결제시 상품 유형 파라미터는 필수 입력입니다." 라는
에러 메시지가 뜨면서 결제창이 호출되지 않으니 유의하시기 바랍니다.

|digital|의미  |
|-------|------|
|true   |컨텐츠|
|false  |실물  |

또한 상점 아이디 설정과 실물/컨텐츠 여부가 불일치할 경우 "CPID 설정 오류"라는 메시지가 리턴되며
결제창 호출에 실패하니 유의하시기 바랍니다.

## 상품권 결제

### 컬쳐랜드(`cultureland`)만 지원

나이스페이먼츠(신모듈)은 상품권 결제시 컬쳐랜드만 지원하며 북앤라이프, 스마트문상 등은 지원하지 않습니다.

### MallUserID(`bypass.nice_v2.MallUserID`)는 필수 입력

나이스페이먼츠(신모듈) 상품권 결제시 고객사 구매자 ID를 의미하는 MalluserID는 필수 입력이며, bypass 파라미터로 전달할 수 있습니다.

### 승인 완료시 나이스페이먼츠로부터 승인번호(`apply_num`)가 전달되지 않음

나이스페이먼츠(신모듈)은 상품권 결제시에는 승인 번호를 전달하지 않아 승인번호 확인이 어렵습니다.
따라서 결제 내역 조회시 승인 번호는 null로 리턴됩니다.

<details>

<summary>결제내역 조회 API 호출 결과</summary>

```http
GET /payments/{imp_uid}

{
  // ...중략
  "status": "paid",
  "pay_method": "cultureland",
  "pg": "nice_v2",
  "apply_num": null
}
```

</details>

## 카카오페이

|기능                                 |사용 가능 여부                                                                                         |
|-------------------------------------|-------------------------------------------------------------------------------------------------------|
|상점 부담 무이자 할부                |<span style="color:red"> **불가능** </span>                                                            |
|다이렉트 호출                        |BC, 국민, 삼성, 신한, 현대, 롯데, 씨티, NH농협 그리고 하나 카드만 가능                                 |
|다이렉트 호출 + 고정 할부 개월수     |BC, 국민, 삼성, 신한, 현대, 롯데, 씨티, NH농협 그리고 하나 카드만 가능                                 |
|다이렉트 호출 + 리스트 할부 개월수   |<span style="color:red"> **불가능** </span>                                                            |
|비 다이렉트 호출 + 고정 할부 개월수  |<span style="color:red"> **단독 사용 불가능** </span> (다이렉트 호출 할 카드사 코드를 함께 전달해야 함)|
|비 다이렉트 호출 + 리스트 할부 개월수|<span style="color:red"> **불가능** </span>                                                            |

## 네이버페이

|기능                                 |사용 가능 여부                                                                                         |
|-------------------------------------|-------------------------------------------------------------------------------------------------------|
|상점 부담 무이자 할부                |<span style="color:red"> **불가능** </span>                                                            |
|다이렉트 호출                        |BC, 국민, 삼성, 신한, 현대, 롯데, 씨티, NH농협 그리고 하나 카드만 가능                                 |
|다이렉트 호출 + 고정 할부 개월수     |BC, 국민, 삼성, 신한, 현대, 롯데, 씨티, NH농협 그리고 하나 카드만 가능                                 |
|다이렉트 호출 + 리스트 할부 개월수   |가능(단, **일시불이 항상 포함** 됨)                                                                    |
|비 다이렉트 호출 + 고정 할부 개월수  |<span style="color:red"> **단독 사용 불가능** </span> (다이렉트 호출 할 카드사 코드를 함께 전달해야 함)|
|비 다이렉트 호출 + 리스트 할부 개월수|가능(단, **일시불이 항상 포함** 됨)                                                                    |

### 결제 수단 지정 시 카드 또는 포인트 지정 필요

나이스페이먼츠(신모듈)를 통한 네이버페이 결제 시 카드 또는 포인트 결제를 지정하여 호출해야합니다.
결제 수단(`pay_method`) 파라미터에 `naverpay` 입력은 불가능하며 `naverpay_card`(카드)
또는 `naverpay_point`(포인트/머니) 둘 중 하나로 입력해야 정상적으로 결제창이 호출되오니 유의하시기 바랍니다.

### 네이버페이 머니와 포인트 복합 결제시, 포인트가 먼저 사용 됨

네이버페이 포인트 결제시 네이버페이 머니, 포인트 또는 복합(머니와 포인트 함께 사용) 방식으로 결제가 가능하며,
만약 복합 방식으로 결제할 경우 포인트 금액이 먼저 차감됩니다.

### 네이버페이 포인트 결제시 현금영수증 정보 필수 입력

네이버페이 포인트 결제 시 현금영수증 발급이 가능하며 **현금영수증 정보를 필수로 입력**해야 합니다.
만약 입력하지 않을 경우 "나이스페이 V2 네이버페이 포인트 결제시 현금영수증 발급 유형은 필수 입력입니다."라는
에러 메시지가 뜨면서 결제창이 호출되지 않으니 유의하시기 바랍니다.
단, **네이버페이 머니로 결제할 경우에만 현금영수증이 발급**됩니다.
결제 금액 모두 네이버페이 포인트로 결제하는 경우에는 결제창 호출시 현금영수증 정보를 전달하더라도 발급되지 않습니다.

## 페이코

|기능                                 |사용 가능 여부                             |
|-------------------------------------|-------------------------------------------|
|상점 부담 무이자 할부                |가능                                       |
|다이렉트 호출                        |가능                                       |
|다이렉트 호출 + 고정 할부 개월수     |가능                                       |
|다이렉트 호출 + 리스트 할부 개월수   |가능                                       |
|비 다이렉트 호출 + 고정 할부 개월수  |<span style="color:red"> **불가능** </span>|
|비 다이렉트 호출 + 리스트 할부 개월수|가능                                       |

## 삼성페이/11Pay (구.SKPay)/SSGPAY

|기능                                 |사용 가능 여부                             |
|-------------------------------------|-------------------------------------------|
|상점 부담 무이자 할부                |가능                                       |
|다이렉트 호출                        |<span style="color:red"> **불가능** </span>|
|다이렉트 호출 + 고정 할부 개월수     |<span style="color:red"> **불가능** </span>|
|다이렉트 호출 + 리스트 할부 개월수   |<span style="color:red"> **불가능** </span>|
|비 다이렉트 호출 + 고정 할부 개월수  |<span style="color:red"> **불가능** </span>|
|비 다이렉트 호출 + 리스트 할부 개월수|<span style="color:red"> **불가능** </span>|

## 애플페이/LPAY

|기능                                 |사용 가능 여부                             |
|-------------------------------------|-------------------------------------------|
|상점 부담 무이자 할부                |<span style="color:red"> **불가능** </span>|
|다이렉트 호출                        |<span style="color:red"> **불가능** </span>|
|다이렉트 호출 + 고정 할부 개월수     |<span style="color:red"> **불가능** </span>|
|다이렉트 호출 + 리스트 할부 개월수   |<span style="color:red"> **불가능** </span>|
|비 다이렉트 호출 + 고정 할부 개월수  |<span style="color:red"> **불가능** </span>|
|비 다이렉트 호출 + 리스트 할부 개월수|<span style="color:red"> **불가능** </span>|

## SSG 은행계좌 결제

### SSGPAY 은행 계좌 결제 시 주문 번호에 특수 문자를 사용 불가능

SSGPAY 정책상 은행 계좌 결제시에는 **주문 번호(`merchant_uid`)에 특수 문자가 허용되지 않습니다.**
주문 번호에 특수문자 입력 시 "나이스페이 V2 SSGPAY 은행 계좌 결제시 주문 번호에 특수문자는 허용되지 않습니다."와 같은
에러 메시지가 리턴되면서 결제창이 호출되지 않으니 참고 부탁드립니다.

### SSGPAY 은행 계좌 결제시 현금영수증 정보는 필수 입력

SSGPAY 은행 계좌 거래는 현금성 결제로 현금영수증 발급이 가능하므로 **현금영수증 정보는 필수 입력**입니다.
만약 입력하지 않을 경우 "나이스페이 V2 SSGPAY 은행 계좌 결제시 현금영수증 발급 유형은 필수 입력입니다."라는
에러 메시지가 뜨면서 결제창이 호출되지 않으니 유의하시기 바랍니다.

<details>

<summary>파라미터 예시</summary>

```ts
IMP.request_pay({
  // ...중략
  channelKey: "{콘솔 내 연동 정보의 채널키}",
  pay_method: "ssgpay_bank",
  bypass: {
    cashReceiptType: "corporate", // 현금영수증 발급 유형(corporate: 지출증빙, personal: 소득공제)
    customerIdentifier: "1178178260", // 현금영수증 발행 식별 정보(사업자 등록번호 또는 휴대폰 번호)
  },
});
```

</details>

### SSGPAY 은행 계좌 결제시 현금영수증 발급 정보를 확인할 수 없음

SSGPAY 은행 계좌 결제 시 현금영수증 발급 정보를 입력하여 정상적으로 발급되더라도
승인 완료(status: paid)시 나이스페이먼츠에서 현금영수증 발급 정보를 전달하지 않아
포트원 API로 결제/현금영수증 발급 내역 조회 또는 포트원 콘솔에서 현금영수증 내역을 확인할 수 없습니다.
단, 나이스페이먼츠 어드민에서는 확인이 가능합니다.

<details>

<summary>결제내역 조회 API 호출 결과</summary>

```http
GET /payments/{imp_uid}

{
  // ...중략
  "pay_method": "trans",
  "emb_pg_provider": "ssgpay",
  "pg": "nice_v2",
  "status": "paid",
  "cash_receipt_issued": false // 실제로는 현금영수증이 발급됐으나 포트원에 정보가 없으므로 false로 내려감
}
```

</details>

<details>

<summary>현금영수증 발급 내역 조회 API 호출 결과</summary>

```http
GET /receipts/{imp_uid}

{
  "code": -1,
  "message": "해당 아임포트 고유 번호({아임포트 번호})로 현금영수증을 발급 한 내역이 존재하지 않습니다.",
  "data": null
}
```

</details>

<details>

<summary>V1 콘솔 현금영수증 발급 내역</summary>

(관련 이미지 첨부)

</details>

## 현금영수증

### 현금영수증 발급 유형 지원 여부

현금영수증 발급 유형(`cashReceiptType`)이 소득 공제(`personal`)인 경우,
현금영수증 발급 유형(`customerIdentifier`)은 휴대폰 번호만 가능하며 주민등록번호 입력시 "현금영수증 식별 번호가 올바르지 않습니다."라는
에러 메시지가 리턴되며 결제창이 호출되지 않으니 유의하시기 바랍니다.

**계좌이체 다이렉트 호출, 네이버페이 포인트 결제, SSGPAY 은행 계좌 결제시 현금영수증 정보는 필수 입력**입니다.

<details>

<summary>파라미터 예시</summary>

```ts
IMP.request_pay(
  {
    // ...중략
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "naverpay_point", // 네이버페이 포인트 결제
    bypass: {
      cashReceiptType: "personal", // 소득공제
      customerIdentifier: "01012345678", // 핸드폰 번호 입력(주민등록번호 불가능)
    },
  },
  // 콜백함수
);
```

</details>

### 가상계좌, 계좌이체 결제 시 현금영수증 파라미터 사용이 불가능한 경우

결제창을 통한 가상계좌 발급 또는 계좌이체 비 다이렉트 호출 시에는 현금영수증 정보를
파라미터로 전달할 수 없기(전달해도 결제창에 자동 입력되지 않음)때문에 구매자가 결제창에 직접 현금영수증 정보를 입력해야 합니다.


# https://developers.portone.io/opi/ko/integration/pg/v1/nice-v2/readme

---
title: 나이스페이먼츠 (신모듈)
description: 나이스페이먼츠 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/nice-v2
---

## 1. 나이스페이먼츠(신모듈) 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

아래 기능을 사용하시려면 나이스페이먼츠에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 PG창 호출에 실패하거나, 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답을 얻게 될 수 있으니 주의 해주시기 바랍니다.

- 모든 결제 수단(간편결제 포함)

- 면세 / 복합과세 사용

- 부가세 지정 금액 방식 사용(영세율 포함)

- 부분 취소

- 할부 사용

- 상점 부담 무이자 할부 사용

- 카드사 포인트 사용

- 에스크로 사용

- 해외 결제 사용

- 일부 bypass 파라미터
  - UserCI
  - MallUserID
  - DirectCouponYN
  - PaycoClientId, PaycoAccessToken
  - SamPayMallType

## 2. 최신 JavaScript SDK로 업데이트하기 <a href="#2." id="2." />

나이스페이먼츠(신모듈) 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**(신) 나이스페이먼츠를 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다**

</div>

<div class="hint" data-style="danger">

## **기존에 deprecated된 콜백 응답은 모두 제거**됐습니다.

신규 JS SDK는 기존 모듈에서 제공했던 CallBack 응답 파라미터가 대부분 삭제되었습니다.
(특히 deprecated 로 명시된 파라미터는 모두 삭제되었습니다.)

해당 JS SDK 사용시 Callback 으로 내려받을수 있는 데이터는 오직 아래 두가지 입니다.

**`imp_uid`, `merchant_uid`**

따라서 해당 SDK를 사용하실때는 `IMP.request_pay`로부터 응답된 객체(또는 쿼리 파라미터)에서
`imp_uid`를 가지고 **아임포트 REST API(GET `/payments/imp_uid`)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여
응답 파라미터 중 `status` 파라미터로 결제 상태를 파악하셔야 합니다.

</div>

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) 문서를 통해 최신 SDK를 설치해주세요.

## 3.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
(신) 나이스페이먼츠 결제창을 호출할 수 있습니다. **결제 결과**는 PC의 경우 `IMP.request_pay(param,
callback)` 호출 후 **callback**으로 수신되고 모바일의 경우
**m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `nice_v2` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank (가상계좌)
  - phone (휴대폰소액결제)
  - cultureland (컬쳐랜드)
  - naverpay\_card (네이버페이 - 카드)
  - naverpay\_point (네이버페이 - 포인트)
  - kakaopay (카카오페이)
  - payco (페이코)
  - samsungpay (삼성페이)
  - skpay (11Pay (구.SKPay))
  - ssgpay (SSGPAY)
  - ssgpay\_bank (SSGPAY 은행계좌)
  - lpay (LPAY)
  - applepay (애플페이)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- name: string

  **상품명**

  **40Byte** 이내로 작성해주세요

  **특수문자 유의사항**

  - 사용 가능 : **\_**
  - 사용 불가 : **% & | $ - + = \[ ]**
  - 사용 가능하나 권장하지 않음 : **( )**

- amount: number

  **결제금액**

  소수점 두번째 자리까지 허용합니다.

- buyer\_tel: string

  **구매자 전화번호**

- vbank\_due: string

  **가상계좌 입금기한 (YYYY-MM-DD)**

  (신) 나이스페이먼츠의 경우 필수 입력이며 날짜는 무조건 23:59:59로 설정 됨

- escrow: boolean

  **에스크로 결제 여부**

- period?: object

  **서비스 제공 기간**

  날짜만 입력이 가능하며(시간은 무시) 시작 날짜와 종료 날짜를 모두 입력해야 합니다.

  - from: string

    **YYYYMMDD**

  - to: string

    **YYYYMMDD**

</details>

<details>

<summary>

<strong>결제 가능 결제수단</strong>

</summary>

- card + 에스크로, 다이렉트
- vbank + 에스크로
- trans + 에스크로, 다이렉트(은행 지정 X)
- phone + 다이렉트(통신사 지정 X)
- cultureland
- naverpay\_card
- naverpay\_point
- kakaopay
- payco
- samsungpay
- skpay
- ssgpay
- ssgpay\_bank
- lpay
- applepay

</details>

</div>

</div>

<details>

<summary>

<strong>가능한 결제 환경</strong>

</summary>

- PC (iframe)
- 모바일 (리디렉션)

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/rt/readme

---
title: 페이팔(Reference Transaction) 정기결제
description: 페이팔(Reference Transaction) 빌링키 발급 및 정기결제 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/paypal-v2
---

<div class="hint" data-style="info">

페이팔 정기결제의 경우 RT(Reference Transaction) 방식만 지원합니다.

</div>

## 페이팔 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

<div class="hint" data-style="warning">

페이팔 빌링키 발급 및 정기결제는 **SDK 1.3.0 부터 사용 가능**합니다.

SDK 스크립트의 주소가 `https://cdn.iamport.kr/v1/iamport.js` 인지 확인해주세요.

위 JS SDK 를 이용하여 페이팔 정기결제 연동시 callback Data는 아래와 같이 두가지 형태로만 내려갑니다.

- `imp_uid`
- `merchant_uid`

해당 SDK를 사용하실때는 IMP.request\_pay로부터 응답된 객체(또는 쿼리 파라미터)에서
imp\_uid를 가지고 **포트원 REST API(GET /payments/imp\_uid)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여
응답 파라미터 중 status(결제 상태)파라미터에 따라 추가 로직을 구현해야 합니다.

</div>

## 페이팔 정기결제 버튼 렌더링

페이팔 정기결제 빌링키 발급은 고객사 체크아웃 페이지에 페이팔 정기결제 버튼(아래 이미지 참고)을 렌더링 한 후,
버튼을 클릭해 페이팔 빌링키 발급 창을 호출하는 방식입니다.

(관련 이미지 첨부)

따라서 다른 PG사와 빌링키 발급 플로우가 상이하기 때문에 고객사는 **체크아웃 페이지가 렌더링 되는 시점에** `IMP.request_pay` 함수 대신
**`IMP.loadUI`라는 별도의 함수를 호출해 페이팔 정기결제 버튼을 렌더링 해야**합니다.

(이미지 첨부: 페이팔 정기결제 빌링키 발급 연동 플로우)

```html
<!--
1. 고객사 체크아웃 페이지가 렌더링됩니다.
   페이팔 버튼을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣어줍니다.
   향후 비슷한 플로우로 동작하는 PG사가 생기거나, 2개 이상의 dom element가 렌더링 될 것을 대비해
   data-portone-ui-type을 paypal-rt로 설정합니다.
-->
<div class="portone-ui-container" data-portone-ui-type="paypal-rt">
  <!-- 3. 여기에 페이팔 버튼이 생성됩니다. -->
</div>

<script>
  window.onload = function() {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달 해 포트원 객체를 초기화합니다.
    IMP.init(고객사 식별코드);

    // 2-2. "빌링키 발급 요청 데이터"와 빌링키 발급 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 PG사 버튼 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI('paypal-rt', 빌링키 발급 요청 데이터, 콜백 함수);

    // 4. 구매자가 PG사 버튼을 누르면 PG사 빌링키 발급 창이 렌더링 됩니다.
    // 5. 이때 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출합니다.
    // 6-7. 포트원 DB에 미결제(ready) 빌링키 발급 건이 생성됩니다.
    // 8. PG사 빌링키 발급 창이 호출됩니다.
    // 9. 빌링키 발급 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };
</script>
```

<div class="hint" data-style="info">

### 페이팔 정기결제 버튼이 보이지 않을 때

`portone-ui-container` 라는 class 이름을 갖는 div
element를 찾지 못할 경우 "portone-ui-container를 찾을 수 없습니다." 라는 에러가 발생합니다.

`portone-ui-container` element가 2개 이상인데, `data-portone-ui-type`
attribute가 `paypal-rt`인 element를 찾지 못할 경우, "data-portone-ui-type에 올바른
UI 타입을 입력해주세요."라는 에러가 발생합니다.

`portone-ui-container` element가 2개 이상이고, `data-portone-ui-type`
attribute가 `paypal-rt`인 elemente도 2개 이상인 경우, “동일한 data-portone-ui-type을
갖는 DOM element가 2개 이상 존재합니다."라는 에러가 발생합니다.

</div>

## 빌링키 발급 요청 데이터 업데이트

페이팔 정기결제 동작의 특성상, 고객사 체크아웃 페이지가 렌더링 될 때
빌링키 발급 요청 데이터가 결정 되어야 합니다.
때문에 고객사 체크아웃 페이지 등에서 구매자가 등록 할 결제 수단을 변경하는 등의 행위로 빌링키 발급 정보가 바뀌는 경우에는
그 다음 페이지로 이동해 최종적으로 결정 된 빌링키 발급 정보를 기준으로 페이팔 버튼을 렌더링 시켜야 합니다.
페이팔 데모 페이지에서도 같은 방식으로 구현되어있습니다.

하지만 페이팔 정기결제 때문에 페이지를 하나 더 만드는 것은 고객사 입장에서 매우 번거로운 일이기 때문에
포트원에서는 처음 페이팔 버튼을 렌더링 시킨 후, 페이팔 버튼을 누르기 전 빌링키 발급 정보가 바뀌었을때
“빌링키 발급 요청 데이터”를 업데이트 할 수 있는 `IMP.updateLoadUIRequest` 함수를 제공하고 있습니다.

구매자 입력으로 인해 **빌링키 발급 요청 데이터가 변경될때 `IMP.updateLoadUIRequest`함수를 호출**하시면
구매자가 페이팔 정기결제 버튼을 누를때 최종적으로 변경 된 빌링키 발급 요청 데이터로 페이팔 빌링키 발급 창이 호출됩니다.

(관련 이미지 첨부)

```html
<form>
  <!-- 빌링키 발급 요청 데이터를 입력 받는 form -->
  <!-- ...중략 -->
  <!-- 4. 구매자가 등록 할 결제 수단을 변경해 빌링키 발급 주문 명이 변경(예) 카카오페이로 등록 -> 페이팔로 등록)되었습니다. -->
  <input
    id="name"
    name="name"
    value="카카오페이로 등록"
    onchange="onChangeName()"
  />
</form>

<!-- 1. 고객사 체크아웃 페이지가 렌더링됩니다. -->
<!-- 페이팔 버튼을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣어줍니다. -->
<!-- 향후 비슷한 플로우로 동작하는 PG사가 생기거나, 2개 이상의 dom element가 렌더링 될 것을 대비해 data-portone-ui-type을 paypal-rt로 설정합니다. -->
<div class="portone-ui-container" data-portone-ui-type="paypal-rt">
  <!-- 3. 여기에 페이팔 버튼이 생성됩니다. -->
</div>

<script>
  var requestData = {
    channelKey: '{콘솔 내 연동 정보의 채널키}',
    name: '카카오페이로 등록',
    // ...중략
  }
  window.onload = function() {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달 해 포트원 객체를 초기화합니다.
    IMP.init(고객사 식별코드)
    // 2-2. requestData(빌링키 발급 요청 데이터)와 빌링키 발급 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 PG사 버튼 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI('paypal-rt', requestData, 콜백 함수)
    // 6. 구매자가 PG사 버튼을 누르면 PG사 빌링키 발급 창이 렌더링 됩니다.
    // 7. 이때 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출하며
    // 빌링키 발급 주문 명은 '카카오페이로 등록'에서 '페이팔로 등록'으로 변경됩니다.
    // 8-9. 포트원 DB에 미결제(ready) 빌링키 발급 건이 생성됩니다.
    // 10. PG사 빌링키 발급 창이 호출됩니다.
    // 11. 빌링키 발급 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };

  function onChangeName() {
    // 5. 빌링키 발급 주문 명이 변경되면 고객사가 선언한 onChangeName 함수가 호출됩니다.
    // IMP.updateLoadUIRequest에 최종적으로 변경 된 빌링키 발급 요청 데이터를 전달합니다.
    requestData.name = document.getElementById('name').value
    IMP.updateLoadUIRequest('paypal-rt',requestData)
  }
</script>
```

## loadUI 요청 객체

|파라미터          |데이터타입|필수여부    |의미                                                                                                                                                                                                                                                               |
|------------------|----------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|merchant\_uid     |string    |required    |주문 번호 (고객사에서 고유하게 채번하여 사용해야 합니다.)                                                                                                                                                                                                          |
|name              |string    |optional    |제품명                                                                                                                                                                                                                                                             |
|~~pg(deprecated)~~|~~string~~|~~required~~|~~결제대행사 구분 값 (코드 구분 값 : paypal\_v2)~~                                                                                                                                                                                                                 |
|channelKey        |string    |required    |<p>paypal\_v2 채널의 채널 키 </p><p>(포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.)</p>                                                                                                                                          |
|pay\_method       |string    |required    |<p>결제수단 (코드 구분 값 : paypal)</p><p>(페이팔의 경우 결제수단은 paypal로 지정한 후 호출해야 합니다.)</p>                                                                                                                                                       |
|customer\_uid     |string    |required    |<p>포트원 빌링키</p><p>(고객사에서 빌링키 발급 시 고유하게 채번하여 요청해야 합니다. 빌링키 결제 시 해당 값을 이용하여 결제를 요청해야 하기 때문에 고객사에서 별도로 저장하셔야 합니다.)</p>                                                                       |
|customer\_id      |string    |optional    |<p>고객 식별 아이디</p><p>(고객사에서 구매자를 특정하기 위해 고유하게 채번하여 사용하는 아이디로 빌링키 발급시 필수 입력해야 합니다.)</p>                                                                                                                          |
|notice\_url       |string    |optional    |<p>웹훅 수신 주소</p><p>(결제창에서 빌링키 발급 완료 후 발송되는 웹훅 수신 주소로 URL string 또는 string\[]로 N개 설정 가능합니다.</p><p>웹훅 발송 여부는 콘솔 내 \[결제 > 상세 내역 조회] 메뉴에서 해당 거래 건 클릭하여 웹훅 발송 내역을 확인할 수 있습니다.)</p>|
|custom\_data      |object    |optional    |<p>사용자 정의 데이터</p><p>(빌링키 발급 정보와 함께 고객사에서 관리하고 싶은 데이터를 저장할 수 있으며 JSON 형식으로 요청해야합니다.)</p>                                                                                                                         |

<div class="hint" data-style="warning">

**파라미터 유의사항**

아래 링크로 반드시 유의사항을 숙지하셔야 합니다.

[연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/rt/warning)

</div>

<div class="hint" data-style="warning">

**(신) 페이팔 정기결제 유의사항**

구매자 계정이 한국인 경우 해당 서비스 이용이 불가합니다.

</div>

<p>연동 특이 사항</p>

## 비동기 처리

### 결제 처리

페이팔 결제 건은 승인 요청 시 바로 승인 되지 않고 일정 시간 후 처리되는 `승인 대기(pending)` 상태가 존재합니다.
따라서 고객사는 트랜잭션 종료시 콜백 함수로 전달되는 포트원 거래 번호(imp\_uid)로
결제 내역을 조회([GET /payments/{imp\_uid}](https://developers.portone.io/api/rest-v1/payment?v=v1#get%20%2Fpayments%2F%7Bimp_uid%7D))한 후 응답 되는 status를 보고
각 상황에 맞는 후 처리 로직을 작성해야 합니다.

승인 대기 상태에서는 최종적으로 승인(paid)이 될 수도 있고 승인이 되지 않을 수도(failed) 있기 때문에
고객사는 반드시 (가상계좌나 정기결제와 같이 결제가 비동기로 승인되는 경우 포트원 → 고객사로 결제 결과를 통보해주는)
**웹훅 기능을 연동해야** 합니다.

### 취소 처리

페이팔 결제 취소 요청 시 취소 요청이 바로 승인 되지 않고 일정 시간 후 승인처리되는 경우가 존재합니다.
고객사는 결제 취소 요청 응답 처리 시 취소가 승인되었는지 여부를 확인해야 합니다.

결제 취소 API를 통해 취소 요청을 한 경우 API 응답의 status와 cancel\_history 값을 기준으로 취소 승인 여부를 판단해야 합니다.
status가 cancelled 이고 cancel\_history에 취소 요청 내역이 있는 경우 취소가 승인된 것이고 그렇지 않은 경우 취소 승인대기 상태입니다.

콘솔을 통한 취소 요청이 승인대기인 경우 결제내역에서 결제상태는 결제취소로 변경되지 않고 진행중인 취소요청 내역이 있음이 표시되며 결제내역 상세 화면에서 취소요청내역이 조회됩니다.
취소 요청이 승인대기 상태인 경우 최종적으로 승인되거나 승인되지 않을 수 있기 때문에 고객사는 최종 취소 처리 결과를 전달받기 위해 고객사 통보 웹훅 기능을 연동해야 합니다.

<details>

<summary>취소 요청이 승인대기 중인 결제상태</summary>

(관련 이미지 첨부)

</details>

<details>

<summary>취소 요청이 승인대기 중인 결제내역 상세</summary>

(관련 이미지 첨부)

</details>

### Magnes & Fraudnet 이상 거래 대응

페이팔은 이상 거래를 줄이기 위해 Risk Data Acquisition 정책을 시행하고 있습니다.
일반 결제나 빌링키 발급은 페이팔 버튼을 통해 진행되기 때문에 페이팔이 이상 거래 판단을 위한 구매자 접속 정보를 얻을 수 있지만,
발급 된 빌링키로 재결제 (again API 호출) 할때는 고객사 서버에서 포트원 API를 통해 페이팔 API가 호출되는 구조이기 때문에
이상 거래 판단을 위한 구매자 접속 정보를 얻을 수 없습니다.

따라서 발급 된 빌링키로 재결제를 할때는 구매자의 브라우저/디바이스 접속 정보를 페이팔에 전달할 수 있도록
**again API가 호출되는 고객사 클라이언트 페이지에 반드시 페이팔 Fraudnet 스크립트/Magnes SDK를 아래와 같이 추가해야** 합니다.

**페이팔 정기결제를 통한 again API 호출시에는 Magnes & Fraudnet 조치가
필수적으로 요구됩니다.**

브라우저/앱에 페이팔 Fraudnet Script/Magnes SDK를 추가한 후 again API를 호출할때 진행되는 플로우는 아래와 같습니다.

(관련 이미지 첨부)

#### 브라우저

```html
<!-- again API가 호출되는 고객사 클라이언트 -->
<script
  type="application/json"
  fncls="fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"
>
  {
    "f": "RISK_SESSION_CORRELATION_ID",
    "s": "SOURCE_IDENTIFIER",
    "sandbox": true
  }
</script>
<script type="text/javascript" src="https://c.paypal.com/da/r/fb.js"></script>
<noscript>
  <img
    src="https://c.paypal.com/v1/r/d/b/ns?f=RISK_SESSION_CORRELATION_ID&s=SOURCE_IDENTIFIER&js=0&r=1"
  />
</noscript>
```

|파라미터|의미                                                     |예시                                         |
|--------|---------------------------------------------------------|---------------------------------------------|
|fncls   |fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99로 항상 고정|fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99|
|f       |주문번호(merchant\_uid) 전달                             |mid\_1683690731602                           |
|s       |string                                                   |7WBB3CKT63FRG\_checkout-page                 |
|sandbox |페이팔 Account ID가 테스트 용인지 운영 용인지 여부       |true                                         |

#### 앱

#### 안드로이드

[**Android Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/android/)
가이드 문서에 따라 아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야합니다.
이때 두번째 파라미터(paypalClientMetaDataId)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```java
MagnesResult magnesResult = MagnesSDK.getInstance()
   .collectAndSubmit(Context context, String paypalClientMetaDataId,
     HashMap<String, String>
     additionalData)
```

#### IOS Switft

[**iOS Swift SDK Integration**](http://developer.paypal.com/limited-release/magnes/integrate/ios-swift/)
가이드 문서에 따라 아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야합니다.
이때 첫번째 파라미터(withPayPalClientMetadataId)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```swift
let magnesResult:MagnesResult =
MagnesSDK.shared().collectAndSubmit(withPayPalClientMetadataId:
  "YOUR-PAYPAL-CLIENT-METADATA-ID", withAdditionalData: [String: String])
```

#### IOS Objective-C

[**iOS Objective-C SDK Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/ios-objective-c/)
가이드 문서에 따라 아래와 같이 collectAndSubmitWithPayPalClientMetadataId 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야합니다.
이때 첫번째 파라미터(YOUR-PAYPAL-CLIENT-METADATA-ID)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```objective-c
//PPRMOCMagnesSDK *magnesSDK = [PPRMOCMagnesSDK shared];
PPRMOCMagnesSDKResult *magnesResult =
[magnesSDK
collectAndSubmitWithPayPalClientMetadataId:@"YOUR-PAYPAL-CLIENT-METADATA-ID"
withAdditionalData:@{}];
```

### 고위험 결제 처리

페이팔은 판매자 보호 정책을 통해 고객사 거래에서 이상 거래나 사기 등이 발생 시,
판매자 보호 정책을 통해 고객사가 손해 입을 수 있는 부분을 보존하는 판매자 보호 프로그램을 가지고 있습니다.
이 판매자 보호 정책을 적용하기 위해서는 페이팔 측에서 제공하는 STC 기능을 사용해야 합니다.

STC 기능을 사용하시기 위해 다음 정보를 확인하셔야 합니다.

1. 페이팔 Business 계정 가입시 산업 종류(Industry)를 결정하는데, 계정의 산업 종류를 확인해야 합니다.

2. 계정의 산업 종류를 확인하신 뒤, loadUI 호출 해 빌링키를 발급 받을때 그리고 발급 된 빌링키로 재결제(again API 호출)할 때
   모두 bypass.paypal\_v2 객체에 아래와 같은 형식으로 전달해주셔야 합니다.

<details>

<summary>빌링키 발급시 STC 적용하기</summary>

```javascript
IMP.loadUI(
  "paypal-rt",
  {
    //...중략
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "paypal",
    merchant_uid: "mid_1234567890", // 주문 번호
    customer_uid: "cuid_1234567890", // [필수 입력] 빌링키와 1:1 매핑되는 UUID
    bypass: {
      paypal_v2: {
        additional_data: [
          {
            key: "sender_account_id", // 고객사 account ID(merchant-id)
            value: "A12345N343",
          },
          {
            key: "sender_first_name", // 고객사의 account에 등록 된 구매자의 이름
            value: "John",
          },
          {
            key: "sender_last_name", // 고객사의 account에 등록 된 구매자의 이름
            value: "Doe",
          },
          {
            key: "sender_email", // 고객사의 account에 등록 된 구매자의 이메일 주소
            value: "example@example.com",
          },
          {
            key: "sender_phone", // 고객사의 account에 등록 된 구매자의 연락처
            value: "(02)16705176",
          },
          {
            key: "sender_country_code", // 고객사 계정에 등록된 국가 코드
            value: "KR", // ISO Alpha-2 형식 국가 코드
          },
          {
            key: "sender_create_date", // 고객사 고객 계정이 생성된 날짜
            value: "2023-10-10T23:59:59+09:00", // IOS8601 형식
          },
        ],
      },
    },
  },
  (response) => {
    //...중략
  },
);
```

</details>

<details>

<summary>

발급 된 빌링키로 단건 결제(again API 호출)시 STC 적용하기

</summary>

```ts
await fetch("https://api.iamport.kr/subscribe/payments/again", {
  method: "POST",
  headers: {
    Authorization: `Basic ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    customer_uid, // [필수 입력] 빌링키 발급시 전달 한 빌링키와 1:1 매핑되는 UUID
    merchant_uid, // [필수 입력] 주문 번호
    currency, // [필수 입력] 결제 통화 (페이팔은 KRW 불가능)
    amount, // [필수 입력] 결제 금액
    name, // 주문명
    bypass: JSON.stringify({
      paypal_v2: {
        additional_data: [
          {
            key: "sender_account_id", // 고객사 account ID(merchant-id)
            value: "A12345N343",
          },
          {
            key: "sender_first_name", // 고객사의 account에 등록 된 구매자의 이름
            value: "John",
          },
          {
            key: "sender_last_name", // 고객사의 account에 등록 된 구매자의 이름
            value: "Doe",
          },
          {
            key: "sender_email", // 고객사의 account에 등록 된 구매자의 이메일 주소
            value: "example@example.com",
          },
          {
            key: "sender_phone", // 고객사의 account에 등록 된 구매자의 연락처
            value: "(02)16705176",
          },
          {
            key: "sender_country_code", // 고객사의 account에 등록 된 국가 코드
            value: "KR", // ISO Alpha-2 형식 국가 코드
          },
          {
            key: "sender_create_date", // 고객사의 account에 등록 된 국가 코드
            value: "2023-10-10T23:59:59+09:00", // IOS8601 형식
          },
        ],
      },
    }), // end of bypass string
  }), // end of body
});
```

</details>

<div class="hint" data-style="warning">

**고위험 산업(게임과 같은 디지털 상품, 중고거래)의 경우에는 STC API를 통해 판매자 보호 정책을 적용하는 것을 페이팔에서 필수로 요구하고 있습니다.**

**판매자 보호 정책에 관한 자세한 내용과 협의가 필요하시다면 페이팔 측에 직접 문의를 하셔야 합니다.**

**고위험 산업이 아닌 경우에도 STC API를 연동하는 것을 권장하고 있습니다.**

<br />

---

<br />

고위험 산업에 해당하는 산업군들은 다음과 같습니다.

각 산업별 STC에 필요한 요청 파라미터들이 달라, 고위험 산업에 해당하는 고객사 분들께는 페이팔 전자결제 신청 시 포트원 지원팀에서 안내가 될 예정입니다.

1. 이벤트/티켓 판매 산업

2. 연료 산업

3. 게임/디지털 상품 산업

4. 마켓플레이스 사업

5. 온라인 여행 산업(렌터카, 숙박, 여행 패키지, 교통)

6. P2P 산업

7. 소매, 식품 산업
   - **소매, 식품 산업의 경우 다음과 같은 경우에만 STC 연동이 필요합니다.**
     - 모바일 기기를 통해 매장 내 구매가 가능한 산업

   - **다음 산업의 경우에는 STC 연동이 필요하지 않습니다.**
     - 타사 배송업체를 통해 주소로 실물 상품을 배송하는 산업
     - 자체 배송 트럭을 통해 주소로 실물 상품을 배송하는 산업
     - 소비자가 수령할 수 있도록 자체 매장으로 실물 상품을 배송하는 산업

8. 택시, 공유 이동수단 사업

9. 통신사

10. 결제 시스템 보안 서비스 산업

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/rt/warning

---
title: 연동 유의사항
description: (신)페이팔 정기결제(RT) 이용시 특이사항을 확인할수 있습니다.
targetVersions:
  - v1
---

## RT 연동 유의사항

<details>

<summary>빌링키 발급 수단 및 정보를 알 수 없음</summary>

페이팔을 통해 다양한 수단으로 빌링키 발급이 가능하지만, 페이팔이 승인 된 빌링키 발급 수단 및 정보를 알려주지 않습니다. 따라서 페이팔 빌링키 발급 건의 결제 수단(pay\_method)은 모두 paypal로 일괄 저장되며 [발급 된 빌링키 정보 조회](https://developers.portone.io/api/rest-v1/billingkey?v=v1#get%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)시 카드 정보는 모두 null로 내려갑니다.

```http
GET /subscribe/customers/{customer_uid}

{
  // ...중략
  "pg_provider": "paypal_v2",
  "customer_uid": "{customer_uid}",
  "card_name": null,
  "card_code": null,
  "card_number": null,
  "card_type": null
}
```

</details>

<details>

<summary>Magnes & Fraudnet 이상 거래 대응 필요</summary>

페이팔은 이상 거래를 줄이기 위해 Risk Data Acquisition 정책을 시행하고 있습니다.
일반 결제나 빌링키 발급은 페이팔 버튼을 통해 진행되기 때문에
페이팔이 이상 거래 판단을 위한 구매자 접속 정보를 얻을 수 있지만,
브라우저에서 발급 된 빌링키로 재결제 (again API 호출) 할때는 고객사 브라우저에서 포트원 API를 통해
페이팔 API가 호출되는 구조이기 때문에 이상 거래 판단을 위한 구매자 접속 정보를 얻을 수 없습니다.

따라서 발급 된 빌링키로 재결제를 할때는 구매자의 브라우저/디바이스 접속 정보를
페이팔에 전달할 수 있도록 **again API가 호출되는 고객사 클라이언트 페이지에
반드시 페이팔 Fraudnet 스크립트/Magnes SDK를 아래와 같이 추가해야** 합니다.

**페이팔 RT를 통한 again API 호출시에는 Magnes & Fraudnet 조치가 필수적으로 요구됩니다.**

브라우저/앱에 페이팔 Fraudnet Script/Magnes SDK를 추가한 후 again API를 호출할때 진행되는 플로우는 아래와 같습니다.

(관련 이미지 첨부)

### 브라우저

```html
<!-- again API가 호출되는 고객사 클라이언트 -->
<script
  type="application/json"
  fncls="fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"
>
  {
    "f": "RISK_SESSION_CORRELATION_ID",
    "s": "SOURCE_IDENTIFIER",
    "sandbox": true
  }
</script>
<script type="text/javascript" src="https://c.paypal.com/da/r/fb.js"></script>
<noscript>
  <img
    src="https://c.paypal.com/v1/r/d/b/ns?f=RISK_SESSION_CORRELATION_ID&s=SOURCE_IDENTIFIER&js=0&r=1"
  />
</noscript>
```

|파라미터 |설명                                                                           |예시                                           |
|---------|-------------------------------------------------------------------------------|-----------------------------------------------|
|`fncls`  |`fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99`로 항상 고정                    |`fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99`|
|`f`      |주문번호(`merchant_uid`) 전달                                                  |`mid_1683690731602`                            |
|`s`      |string (`{페이팔 Account ID}_{페이지 유형}` 형식. 페이지 유형은 아래 목록 참고)|`7WBB3CKT63FRG_checkout-page`                  |
|`sandbox`|페이팔 Account ID가 테스트 용인지 운영 용인지 여부                             |`true`                                         |

**\[페이지 유형]**

- `home-page`
- `search-result-page`
- `category-page`
- `product-detail-page`
- `cart-page`
- `inline-cart-page`
- `checkout-page`

### 앱

#### 안드로이드

[**Android Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/android/) 가이드 문서에 따라
아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야 합니다.
이때 두번째 파라미터(paypalClientMetaDataId)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```java
MagnesResult magnesResult = MagnesSDK.getInstance()
   .collectAndSubmit(Context context, String paypalClientMetaDataId,
     HashMap<String, String>
     additionalData)
```

### IOS Switft

[**iOS Swift SDK Integration**](http://developer.paypal.com/limited-release/magnes/integrate/ios-swift/) 가이드 문서에 따라
아래와 같이 collectAndSubmit 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야 합니다.
이때 첫번째 파라미터(withPayPalClientMetadataId)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```swift
let magnesResult:MagnesResult =
MagnesSDK.shared().collectAndSubmit(withPayPalClientMetadataId:
  "YOUR-PAYPAL-CLIENT-METADATA-ID", withAdditionalData: [String: String])
```

### IOS Objective-C

[**iOS Objective-C SDK Integration of Magnes**](http://developer.paypal.com/limited-release/magnes/integrate/ios-objective-c/) 가이드 문서에 따라
아래와 같이 collectAndSubmitWithPayPalClientMetadataId 메소드 호출을 통해 페이팔로 디바이스 정보를 보내야 합니다.
이때 첫번째 파라미터(YOUR-PAYPAL-CLIENT-METADATA-ID)로는 주문번호(merchant\_uid)를 전달해주시면 됩니다.

```objective-c
//PPRMOCMagnesSDK *magnesSDK = [PPRMOCMagnesSDK shared];
PPRMOCMagnesSDKResult *magnesResult =
[magnesSDK
collectAndSubmitWithPayPalClientMetadataId:@"YOUR-PAYPAL-CLIENT-METADATA-ID"
withAdditionalData:@{}];
```

</details>

<details>

<summary>파라미터 유의사항</summary>

### `name`

빌링키 발급 창 내 “판매자가 보낸 메모” 하단에 표기할 메시지를 name 파라미터로 전달할 수 있습니다.

(관련 이미지 첨부)

### `pg`

필수 입력이며 페이팔의 경우 `paypal_v2` 또는 `paypal_v2.{페이팔 Account ID}`를 입력해야 합니다. **paypal로 입력시 빌링키 발급이 불가능**합니다.

### `pay_method`

`paypal`만 입력 가능하며 다른 값을 입력하면 “페이팔에서 제공하지 않는 빌링키 발급 수단입니다.”라는 에러 메시지와 함께 빌링키 발급 창이 호출되지 않습니다.

또한 pay\_method를 `paypal`로 입력 후 카드, 계좌 등 어떤 결제 수단으로 빌링키를 발급 받아도 빌링키 발급 수단은 무조건 `paypal`로 저장됩니다. 이는 페이팔이 실제 발급 된 빌링키 종류를 구분해 알려주지 않고 모두 `paypal`로 일괄 응답해주기 때문입니다.

### `bypass.paypal_v2.style`

페이팔 RT 버튼을 커스터마이징 하기 위한 파라미터입니다. 자세한 내용은 [페이팔에서 제공하는 문서](http://developer.paypal.com/sdk/js/reference/#link-style)를 참고하세요.

### `bypass.paypal_v2.shipping_address`

페이팔은 기본적으로 구매자가 페이팔에 가입할때 입력 한 배송 정보를 빌링키 발급 창에 자동으로 입력해줍니다. 만약 이 배송 정보를 override하고 싶다면 shipping\_address 파라미터에 override할 주소를 입력하고 shipping\_address.recipient\_name에 override할 수령인 이름을 입력하면 됩니다.

배송 정보 중 **`line1`, `city` 그리고 `country_code`는 필수 입력**입니다. 전달하지
않을 경우 에러가 리턴되며 빌링키 발급 창이 호출되지 않습니다.

```json
{
  "bypass": {
    "paypal_v2": {
      // ...중략
      "shipping_address": {
        // 상품 수령 주소
        "recipient_name": "홍길동", // 수령인 이름
        "line1": "세종대로 110", // 도로명 주소
        "line2": "서울특별시청", // 아파트 동 호수
        "city": "중구", // 시(Los Angeles, New York)
        "state": "서울특별시", // 주(CA, NY)
        "postal_code": "04524", // 상품 수령지 우편번호
        "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
      }
    } // end-of paypal_v2
  } // end-of-bypass
}
```

(이미지 첨부: shipping\_address를 전달하지 않은 경우 가입시 설정된 기본 정보(수령인 이름: John Doe / 배송 주소: 1 Main St, San Jose, CA 95131, UnitedStates)로 설정됩니다.)

(이미지 첨부: shipping\_address에 수령인 이름과 배송 정보를 전달한 경우 수령인 이름과 배송 정보가 override 됩니다.)

</details>

<details>

<summary>사용 불가능한 파라미터</summary>

### `amount/tax_free`

결제/면세 금액 파라미터는 결제 시에만 제공되기 때문에 빌링키 발급 시에는 무조건 0으로 저장됩니다.

### `country`

빌링키 발급 국가를 의미하는 country 파라미터로 페이팔 sandbox 모드에서만 유의미하며 **운영 모드에서는 구매자가 접속한 환경에 따라 자동 적용되기 때문에 전달한 파라미터가 무시**됩니다.

### `currency`

결제 통화를 의미하는 currency 파라미터로 빌링키 발급시에는 결제가 되지 않기 때문에 해당 파라미터는 무시됩니다.

### `buyer_addr`

페이팔 빌링키 발급 창 내에는 상품 배송지(shipping address)가 표기되는데, 이 상품 배송지는 페이팔 회원가입시 기입한 정보가 자동으로 입력됩니다.

단, 이때의 주소는 총 5개의 영역으로 나누어진 상세 주소로 기존에 포트원이 제공하던 buyer\_addr 파라미터로는 커버가 불가능하므로 페이팔 전용 파라미터(`bypass.paypal_v2.shipping_address`)를 사용하셔야 합니다. 자세한 내용은 하단의 예제 코드를 참고해주세요.

```json
{
  "bypass": {
    "paypal_v2": {
      // ...중략
      "shipping_address": {
        // 상품 수령 주소
        "recipient_name": "홍길동", // 수령인 이름
        "line1": "세종대로 110", // 도로명 주소
        "line2": "서울특별시청", // 아파트 동 호수
        "city": "중구", // 시(Los Angeles, New York)
        "state": "서울특별시", // 주(CA, NY)
        "postal_code": "04524", // 상품 수령지 우편번호
        "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
      }
    } // end-of paypal_v2
  } // end-of-bypass
}
```

### `popup`

페이팔의 경우 빌링키 발급 창이 무조건 팝업으로 렌더링되기 때문에 해당 파라미터는 무시 됩니다.

### `m_redirect_url`

페이팔의 경우 PC와 모바일 모두 팝업으로 빌링키 발급 창이 렌더링되기 때문에 빌링키 발급 프로세스 종료시 모두 콜백 함수가 호촐됩니다. 따라서 m\_redirect\_url 파라미터는 무시됩니다.

### `app_scheme`

페이팔의 경우 외부 앱으로 이동하는 경우가 없기 때문에 해당 파라미터는 무시됩니다.

### `escrow`

페이팔의 경우 에스크로 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

### `language`

빌링키 발급 창 언어 설정을 의미하는 language 파라미터는 구매자가 접속한 환경에 따라 자동 적용되기 때문에 전달한 파라미터가 무시됩니다.

### `bypass.isCulturalExpense`

페이팔의 경우 문화비 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `bypass.cashReceiptType`

페이팔의 경우 현금영수증 발급이 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `bypass.customerIdentifier`

페이팔의 경우 현금영수증 발급이 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `bypass.useInternationalFreeFromMall`

페이팔의 경우 상점 부담 무이자 할부가 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `card`

페이팔의 경우 카드사 다이렉트 호출, 상점 부담 무이자 할부, 렌더링 될 카드 종류 제어 등이 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `display`

카드 할부 개월수를 의미하는 display: { card\_quota } 파라미터는 결제 시에만 적용되므로 빌링키 발급 시에는 무시됩니다.

### `vbank_due`

페이팔의 경우 가상계좌 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

### `appCard`

페이팔의 경우 앱카드 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `useCardPoint`

페이팔의 경우 카드 포인트 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

### `period`

페이팔은 빌링키 발급 창 내 제공 기간 정보 노출을 지원하지 않아 해당 파라미터가 무시됩니다.

### `storeDetails`

페이팔은 상점 세부 정보를 입력할 필요가 없기 때문에 해당 파라미터가 무시됩니다.

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/settle/mybank

---
title: 내통장결제
description: 헥토파이낸셜에서 제공하는 오픈뱅킹 기반 계좌간편결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 내통장결제 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을
호출하여 내통장 결제 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 IMP.request\_pay(param,
callback) 호출 후 **callback** 으로 수신되며,
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    // param
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "trans",
    merchant_uid: "ORD20180131-0000011",
    name: "노르웨이 회전 의자",
    buyer_email: "gildong@gmail.com",
    buyer_name: "홍길동",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    amount: 1000,
    bypass: {
      settle: {
        addDeductionYn: "N", // 추가공제구분 (대중교통:Y, 도서,공연비:C, 추가공제없음:N)
        criPsblYn: "N", // 현금영수증 발행가능 여부 ( Y or N or ""빈문자열은 Y로인식)
        custCi: "<회원 연계정보(Connecting Information)>", // 고객사가 보유한 회원 CI를 설정하면 내통장 결제에 등록한 CI와 비교하여 동일인인지 자동검증되며 일치하지 않은 경우 결제가 중단됩니다.
      },
    },
  },
  function (rsp) {
    // callback
    // 생략
  },
);
```

### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `settle_acc.MID` 형태로 지정해야 합니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  `trans`만 사용 가능합니다.

- merchant\_uid: string

  **고객사 고유주문번호**

  매번 고유하게 채번되어야 합니다.

- buyer\_tel: string

  **구매자 연락처**

  필수 파라미터 입니다.

- amount: integer

  **결제금액**

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 값들의 모음**

  - custCi: string

    **주문자 CI**

    <div class="hint" data-style="warning">

    **2024년 6월부터 필수 파라미터로 변경되었습니다.** (신규 계약 고객의 경우 해당 파라미터를 누락한 채
    결제 요청하실 경우, 결제가 중단될 수 있습니다. 다만, 기존 고객의 경우 당분간은 해당 파라미터를 제외한 채
    결제가 가능하오나 자세한 사항은 헥토파이낸셜에 문의해 주시기 바랍니다.)

    </div>

    고객사가 보유한 회원 CI를 설정하면 내통장 결제에 등록한 CI와 비교하여 동일인인지 자동검증되며
    일치하지 않은 경우 결제가 중단됩니다.

  - addDeductionYn?: string

    **추가공제구분**

    대중교통: Y, 도서 및 공연비: C, 추가공제없음: N

    계약 후 사용 가능합니다.

  - criPsblYn?: string

    **현금영수증 발행가능 여부**

    Y or N or "", 빈문자열은 Y로 인식

<div class="hint" data-style="info">

1. **내통장결제는 팝업 형태로 제공됩니다.**
2. **매출전표가** 제공되지 않습니다.
3. 선불충전금 ( ex: 카카오페이, 네이버페이 충전금)으로만 결제하는 경우 계좌정보(은행코드)가 제공되지 않습니다.

</div>

</div>

<div class="tabs-content" data-title="정기 결제 요청">

인증결제창 호출 파라미터에서 **customer\_uid** 값을 추가하면 빌링키 발급 결제창을 호출할 수 있습니다.
결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "trans",
    merchant_uid: "ORD20180131-0000011",
    name: "노르웨이 회전 의자",
    buyer_email: "gildong@gmail.com",
    buyer_name: "홍길동",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    customer_uid: "A00001-001", // 빌링키와 맵핑되는
    amount: 1000,
    bypass: {
      settle: {
        addDeductionYn: "N", // 추가공제구분 (대중교통:Y, 도서,공연비:C, 추가공제없음:N)
        criPsblYn: "N", // 현금영수증 발행가능 여부 ( Y or N or ""빈문자열은 Y로인식)
        custCi: "<회원 연계정보(Connecting Information)>", // 고객사가 보유한 회원 CI를 설정하면 내통장 결제에 등록한 CI와 비교하여 동일인인지 자동검증되며 일치하지 않은 경우 결제가 중단됩니다.
      },
    },
  },
  function (rsp) {
    if (rsp.success) {
      alert("빌링키 발급 성공");
    } else {
      alert("빌링키 발급 실패");
    }
  },
);
```

<div class="hint" data-style="info">

- 헥토파이낸셜과 정기결제 계약 후 사용 가능합니다.

- 일반적으로 빌링키 발급과 동시에 결제가 발생합니다. 빌링키만 발급하시려면 `amount`를 `0` 으로
  입력하신 후 요청하세요.

</div>

#### 주요 파라미터 설명

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- customer\_uid?: string

  **빌링키**

  등록 계좌정보와 1:1로 매칭될 빌링키를 지정합니다.

- amount?: integer

  **결제금액**

  0원으로 입력시 빌링키만 발급됩니다. 금액 설정시 결제와 동시에 빌링키가 발급됩니다.

- bypass?: oneof object

  **PG사 결제창 호출 시 PG사로 그대로 bypass할 값들의 모음**

  - custCi: string

    **주문자 CI**

    <div class="hint" data-style="warning">

    **2024년 6월부터 필수 파라미터로 변경되었습니다.** (신규 계약 고객의 경우 해당 파라미터를 누락한 채
    결제 요청하실 경우, 결제가 중단될 수 있습니다. 다만, 기존 고객의 경우 당분간은 해당 파라미터를 제외한 채
    결제가 가능하오나 자세한 사항은 헥토파이낸셜에 문의해 주시기 바랍니다.)

    </div>

    고객사가 보유한 회원 CI를 설정하면 내통장 결제에 등록한 CI와 비교하여 동일인인지 자동검증되며
    일치하지 않은 경우 결제가 중단됩니다.

  - addDeductionYn?: string

    **추가공제구분**

    대중교통: Y, 도서 및 공연비: C, 추가공제없음: N

    계약 후 사용 가능합니다.

  - criPsblYn?: string

    **현금영수증 발행가능 여부**

    Y or N or "", 빈문자열은 Y로 인식

#### 빌링키(customer\_uid)로 결제 요청하기

빌링키 발급이 성공하면 실 빌링키는 customer\_uid 와 1:1 매칭되어 **포트원 서버에 저장**됩니다.
customer\_uid를 고객사 내부서버에 저장하시고 [**비 인증 결제요청 REST API**](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)
호출 시 해당 값을 지정하신 후 호출해야 합니다.

```sh title="server-side"
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/settle/readme

---
title: 헥토파이낸셜
description: 헥토파이낸셜 결제 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 헥토파이낸셜 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk-old/readme) `IMP.request_pay(param, callback)`을
호출하여 헥토파이낸셜 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)`
호출 후 **`callback`** 으로 수신되며
모바일의 경우 **`m_redirect_url`** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "order_no_0001", // 상점에서 생성한 고유 주문번호
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678", // 누락시 오류 발생
    buyer_addr: "서울특별시 강남구 삼성동",
    company: "포트원", // 가상계좌 발급시 권고사항
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

**주요 파라미터 설명**

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `settle` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank(가상계좌)
  - phone (휴대폰소액결제)

- merchant\_uid: string

  **고객사 고유주문번호**

  매번 고유하게 채번되어야 합니다.

- buyer\_tel: string

  **구매자 연락처**

  필수 파라미터 입니다.

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

- name?: string

  **상품명**

  **휴대폰** 결제 요청인 경우 필수 파라미터

- company?: string

  **회사명**

  **휴대폰, 가상계좌** 결제 요청인 경우 필수 파라미터

- company\_en?: string

  **회사명(영문)**

  **휴대폰** 결제 요청인 경우 필수 파라미터

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

**세틀뱅크는 비 인증 결제창을 지원하지 않습니다.**

</div>

<div class="tabs-content" data-title="비인증 API  결제요청">

**API 방식으로 결제요청,예약결제를 구현할수 있습니다.**

**일회성 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 일회성 결제를 요청합니다. 요청 시 전달된 카드는 포트원에 등록되지 않습니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

**빌링키 발급 요청하기**

REST [**API POST /subscribe/customers/{customer\_uid}**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)를 호출하여 빌링키 발급을 요청합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"card_number":"1234-1234-1234-1234", "expiry":"2025-12", "birth":"820213", "pwd_2digit":"00"}' \
     https://api.iamport.kr/subscribe/customers/your-customer-unique-id
```

<div class="hint" data-style="info">

**세틀뱅크** [**빌링키 단독 발급 API**](https://developers.portone.io/api/rest-v1/billingkey?v=v1#post%20%2Fsubscribe%2Fcustomers%2F%7Bcustomer_uid%7D)**는 별도 계약 후 사용가능합니다..**

</div>

**빌링키 발급 및 최초 결제 요청하기**

REST [**API POST /subscribe/payments/onetime**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fonetime)을 호출하여 빌링키 발급과 최초 결제를 요청합니다.

- **`customer_uid`** : 빌링키 등록을 위해서 지정해야 합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "card_number":"1234-1234-1234-1234", "expiry":"2019-01", "birth":"123456", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/onetime
```

**빌링키로 결제 요청하기**

빌링키 발급과 최초 결제가 성공하면 빌링키는 전달된 `customer_uid` 와 1:1 매칭되어 포트원에 저장됩니다. 보안상의 이유로 서버는 빌링키에 직접 접근할 수 없기 때문에 `customer_uid`를 이용해서 재결제([**POST /subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)) REST API를 다음과 같이 호출합니다.

```sh
curl -H "Content-Type: application/json" \
     -X POST -d '{"customer_uid":"your-customer-unique-id", "merchant_uid":"order_id_8237352", "amount":3000}' \
     https://api.iamport.kr/subscribe/payments/again
```

**자세한 비 인증 결제 가이드는 아래 링크를 참조하세요**

[비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth)

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/api

---
title: API 연동
description: 스마트로 API 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 지원 기능

- 빌링키 결제
- 예약 결제
- 에스크로 등록, 조회
- 가상계좌 발급 ,회수
- 결제건 환불
- 현금영수증 발급, 조회, 취소
- 외부 결제건 현금영수증 발급, 조회, 취소

## 추가된 파라미터

### `product_count` 파라미터 추가

- 결제 상품의 개수를 설정하는 파라미터 `product_count` 가 추가되었습니다. 설정을 하지 않을 경우 디폴트로 1개가 설정됩니다.

- 사용가능한 API
  - 빌링키 결제 API, 예약결제 API, 가상계좌 발급 API

### `formed_address` 파라미터 추가

에스크로 배송 정보 등록시 지번주소/도로명 주소 와 상세주소를 입력받는 파라미터 `formed_address`가 추가되었습니다.
스마트로의 경우 기존 파라미터인 `addr`가 아닌 해당 파라미터를 이용한 주소 설정이 필요합니다.

```json
{
  "formed_address": {
    "address_line_1": "지번주소 또는 도로명주소(스마트로 신모듈의 경우 필수)",
    "address_line_2": "상세주소(스마트로 신모듈의 경우 필수)"
  }
}
```

## API 별 상세 설명

### 빌링키 결제

- 요청 URL: `https://api.iamport.kr/subscribe/again`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `customer_uid`
  - `merchant_uid`
  - `amount`
  - `buyer_name`
  - `buyer_email`
  - `buyer_tel`

- 주의사항
  - `smartro_v2`는 `merchant_uid` 파라미터에 특수문자 포함이 불가능합니다.

### 예약 결제

- 요청 URL: `https://api.iamport.kr/subscribe/schedule`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `customer_uid`
  - `schedules.merchant_uid`
  - `schedules.amount`
  - `schedules.buyer_name`
  - `schedules.buyer_email`
  - `schedules.buyer_tel`

- 주의 사항
  - `smartro_v2`는 API 방식으로 빌링키 발급을 지원하지 않기 때문에, 예약결제시 새로운 빌링키 발급은 지원하지 않습니다.
  - `smartro_v2`는 **`merchant_uid`** 파라미터에 특수문자 포함이 불가능합니다.

### 가상계좌 발급

- 요청 URL: `https://api.iamport.kr/vbanks`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `merchant_uid`
  - `amount`
  - `vbank_code`
  - `vbank_due`
  - `vbank_holder`
  - `buyer_name`
  - `buyer_email`
  - `buyer_tel`

- 주의 사항
  - `smartro_v2`는 **`merchant_uid`** 파라미터에 특수문자 포함이 불가능합니다.

  - 계좌 발급 받거나 환불금액을 입금받을 수 있는 은행 목록과 코드는
    [https://api.iamport.kr/#vbank\_codes](http://api.iamport.kr/#vbank_codes)에서 확인 가능합니다.

### 에스크로 배송 정보 등록

- 요청 URL: `https://api.iamport.kr/escrows/logis/{imp_uid}`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `imp_uid`
  - `sender.name`
  - `sender.tel`
  - `sender.postcode`
  - `sender.formed_address`
  - `receiver.name`
  - `receiver.tel`
  - `receiver.postcode`
  - `receiver.formed_address`
  - `logis.company`
  - `logis.invoice`
  - `logis.sent_at`

- 주의 사항
  - `smartro_v2`는 배송수정시, 지번주소/도로명주소와 상세주소를 구분하여 받고있기 때문에, 발신자의
    주소와 수신자의 주소 정보를 기존의 `sender.addr`와 `receiver.addr` 파라미터 대신 새로 추가된
    파라미터 **`formed_address`** 의 `address_line_1`(지번주소 또는 도로명주소)와
    `address_line_2`(상제주소)에 설정해야 합니다.

### 에스크로 배송 정보 수정

- 요청 URL: `https://api.iamport.kr/escrows/logis/{imp_uid}`
  - 요청 메소드: `PUT`

- **스마트로 필수 파라미터**
  - `imp_uid`
  - `logis.company`
  - `logis.invoice`
  - `logis.sent_at`

- 주의 사항
  - `smartro_v2`는 배송 정보 수정시, 지번주소/도로명주소와 상세주소를 구분하여 받고 있기 때문에,
    발신자의 주소와 수신자의 주소 정보를 기존의 `sender.addr`와 `receiver.addr` 파라미터 대신
    새로 추가된 파라미터 **`formed_address`** 의 `address_line_1`(지번주소 또는 도로명주소)와
    `address_line_2`(상세주소)에 설정해야 합니다.

### 현금영수증 발급 (포트원 결제건)

- 요청 URL: `https://api.iamport.kr/receipts/{imp_uid}`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `imp_uid`
  - `identifier`
  - `type`
  - `buyer_name`
  - `buyer_tel`

- 주의사항
  - 스마트로 신모듈은 현금영수증 발급 API를 통해 발급받은 경우는 현금영수증을 발급 받은 거래건 취소
    시 현금영수증 자동 발급 취소를 지원하지 않기 때문에, 따로 현금영수증 발급 취소 API를 통해
    취소해야 합니다.

### 현금영수증 발급 (외부 결제건)

- 요청 URL: `https://api.iamport.kr/receipts/external/{imp_uid}`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `merchant_uid`
  - `name`
  - `amount`
  - `identifier`
  - `type`
  - `buyer_name`
  - `buyer_tel`

### 결제 취소

- 요청 URL: `https://api.iamport.kr/payments/cancel`

- 요청 메소드: `POST`

- **스마트로 필수 파라미터**
  - `imp_uid`
  - `refund_holder` (가상계좌, 계좌이체 거래건)
  - `refund_account` (가상계좌, 계좌이체 거래건)
  - `refund_bank` (가상계좌, 계좌이체 거래건)
  - `refund_tel` (가상계좌, 계좌이체 거래건)

- 주의 사항
  - 부분취소시 면세 금액이 포함된 경우 반드시 취소 면세금액(`tax_free`)을 포함하여 요청해야합니다.

  - 가상 계좌 결제건 취소에 한해 스마트로에 취소 요청이후 즉시 환불 처리가 되는 것이 아니라,
    스마트로에서 입력한 환불계좌로 최종 환불 처리하면 결과를 핑백(웹훅)으로 고객사에 내리면 고객사는
    해당 핑백을 응답받은 뒤 최종 취소완료처리를 해주셔야 합니다.

  - 현금영수증 미발행 가상 계좌 결제건은 스마트로에서 면세금액에 대한 검증을 따로 지원하지 않기
    때문에, 취소시 정확한 취소 면세금액을 요청해야합니다.


# https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/caution

---
title: 연동 유의사항
description: 스마트로 연동 유의사항을 소개합니다.
targetVersions:
  - v1
---

## 스마트로와 사전 계약이 필요한 경우

아래 기능을 사용하시려면 스마트로에 사전 신청 후 계약이 완료되어야 합니다.
그렇지 않은 상태에서 해당 기능 이용시 결제 승인에 실패하거나,
승인에 성공하더라도 의도한 바와는 다른 응답
(예: 결제창에서 에스크로 결제를 했으나 비-에스크로 결제 응답을 받음)을 얻게 될 수 있으니 주의해주시기 바랍니다.

- 간편결제 사용
- 면세 / 복합과세 사용
- 할부 사용
- 상점 부담 무이자 할부 사용
- 카드사 포인트 사용
- 에스크로 사용
- \[TBD] 해외 결제 사용

## 테스트모드 유의사항

### 체크카드 결제시, 부분취소 불가능

테스트 모드로 연동시에는 체크카드 결제 건의 경우 전액 취소만 가능하며 부분취소는 불가능합니다.

### 국민카드(카카오뱅크) 결제 불가능

테스트 모드로 연동시에는 국민카드 또는 카카오뱅크로 결제가 불가능합니다.

### 카카오페이 / 페이코 결제시, 삼성/현대/농협/신한 카드 외 결제 불가능

카카오페이 / 페이코 - 테스트 모드 연동시 삼성, 현대, 농협, 신한 카드 외의 카드로는 결제가 불가능합니다.

### 일부 은행(예: K뱅크)의 경우 가상계좌 발급 불가능

테스트 모드로 연동시에는 일부 은행(예: K뱅크, 국민, 전북, 광주, 대구 등)의 경우 가상계좌 발급이 불가능합니다.

### 카카오페이 - 등록된 카드로 결제시, 반드시 직접 취소 필요

테스트모드로 연동시에는 카카오페이 - 등록된 카드로 결제 시, 결제된 금액이 자동으로 취소되지 않으므로
반드시 포트원 REST cancel API(`POST /payments/cancel`)로 직접 취소하셔야 합니다.

## 카드 결제시 유의사항

### 할부 개월수 리스트를 제어할 수 없음

다른 PG사는 `display: { card_quota }` 파라미터로 구매자에게 노출될 할부개월수 리스트 제어가 가능하나
스마트로는 해당 기능을 지원하지 않습니다.

### 무이자 할부 개월수 리스트를 제어할 수 없음

다른 PG사는 `card: { detail }` 파라미터로 구매자에게 노출될 무이자 할부개월수 리스트 제어가 가능하나
스마트로는 해당 기능을 지원하지 않으며 상점 아이디에 등록된 무이자 정보에 따라 자동 표기됩니다.

### 다이렉트 호출시에만 고정 할부 개월수 필수 입력

스마트로의 경우 **카드사 다이렉트 호출시 고정 할부 개월수는 필수 입력**입니다.
마찬가지로 **고정 할부 개월수 지정시 다이렉트 호출 할 카드사 코드는 필수 입력**입니다.
즉, 둘 다 지정하거나 둘 다 지정하지 않거나 둘 중에 하나만 가능합니다.

예를 들어, 5개월 할부로 지정하고 싶은 경우 다른 PG사는 `display: { card_quota: [5] }`
또는 `card: { direct: quota: 5 }`만 지정하면 되지만 스마트로의 경우
고정 할부 개월수는 다이렉트 호출시에만 지원하기 때문에 다이렉트 호출 할 카드사 코드까지 함께 넘겨야 합니다.

마찬가지로 BC카드 다이렉트 호출을 하고 싶은 경우
다른 PG사는 `card: { direct: { code: '361' } }`만 지정하면 되지만
스마트로의 경우 카드사 다이렉트 호출시 고정 할부 개월수는 필수 입력이기 때문에 할부 개월수를 함께 넘겨야 하니다.

<details>

<summary>파라미터 예제 코드</summary>

```json
// 예. BC카드 5개월 할부
{
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "pay_method": "card",
  "card": {
    "direct": {
      // 다이렉트 호출할 카드사 코드와 고정 할부개월수를 모두 지정해야 함
      "code": "361", // BC카드
      "quota": 5 // 5개월 할부
    }
  }
}
```

```json
// 예. 결제창에서 카드사와 할부개월수 선택
{
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "pay_method": "card"
}

// 다이렉트 호출할 카드사와 고정 할부개월수 모두 지정하지 않아야 함
```

</details>

### 카드사 포인트 사용 여부 파라미터 제어 불가능

스마트로는 상점 아이디 설정에 카드사 포인트 사용 여부가 결정되는 방식입니다.
따라서 다른 PG사와는 달리 `useCardPoint` 파라미터로 카드사 포인트 사용 여부를 설정할 수 없습니다.

### 전북카드와 카카오뱅크 카드 다이렉트 호출은 윈도우 OS에서만 가능

스마트로의 경우 전북 카드(`code: "372"`)와 카카오뱅크 카드(`code: "090"`) 다이렉트 호출은
윈도우 OS에서만 가능하기 때문에 맥 OS에서는 사용이 불가능합니다.

## 간편 결제 시 유의사항

### 구매자 식별값 `customer_id`는 필수 입력

스마트로는 **간편결제시 구매자를 식별할 수 있는 고유 번호인 `customer_id`를 필수**로 입력 받고 있으며, 입력 길이는 **20자로 제한**됩니다.
이는 빌링키 발급 시에도 마찬가지입니다.

### 네이버페이는 카드 결제만 가능

스마트로를 통한 네이버페이 결제 시 등록된 카드로만 결제가 가능하고 네이버페이 포인트/머니 결제는 불가능합니다.
단, 카드 결제창에서 네이버페이를 선택한 경우에는 네이버페이 포인트/머니 결제 또는
네이버페이 카드 결제 둘 중 하나를 선택할 수 있으니 네이버페이 포인트/머니로 결제를 원하시면
카드 결제창 내에서 네이버페이를 선택하여 결제해주시기 바랍니다.

## 가상계좌 결제시 유의사항

### `vbank_due` 파라미터는 필수 입력

스마트로의 경우 **가상계좌 발급시 입금 기한을 의미하는 `vbank_due` 파라미터가 필수**로 요구되며
`YYYYMMDD` 형식의 유효한 날짜(시각은 무조건 `23:59:59`로 설정 됨)만 허용됩니다.

`vbank_due` 파라미터를 전달하지 않거나, 유효하지 않은 날짜를 입력하면 결제창이 호출되지 않습니다.

### 현금영수증 정보 전달 불가능

구매자는 가상계좌나 계좌이체와 같은 현금성 결제시 결제창에서 현금영수증 정보(현금영수증 발급 유형, 현금영수증 발행 식별 번호)를 선택할 수 있습니다.
스마트로의 경우 현금영수증 정보를 파라미터로 받고 있으며, 파라미터로 전달시 결제창에 자동 입력됩니다.

단, 가상계좌 결제 시에는 스마트로 정책상 다이렉트 호출시에만 현금영수증 정보를 파라미터로 전달할 수 있는데
V1에서는 가상계좌 다이렉트 호출을 지원하지 않기 때문에 **가상계좌 결제시에는 현금영수증 정보를 파라미터로 전달할 수 없**으니 참고 바랍니다.

## 휴대폰 소액결제시 유의사항

### `digital` 파라미터는 필수 입력

스마트로의 경우 **휴대폰 소액결제시 상품 유형을 구분 짓는 `digital` 파라미터가 필수**로 요구됩니다.
상품 유형이 디지털 컨텐츠인 경우 `true`를, 실물인 경우엔 `false`를 전달합니다.

### `digital` 파라미터가 올바르지 않은 경우 결제 불가

스마트로 상점 아이디 설정에 따라 올바른 `digital` 파라미터 값이 정해져 있습니다.
만약 해당 상점 아이디 설정이 디지털 컨텐츠 판매용인 경우, `digital` 파라미터를 `true`로 보내야 하는데
이를 보내지 않거나 `false`로 보내는 경우엔 아래와 같은 팝업이 노출되며 결제를 더 이상 진행할 수 없습니다.

<details>

<summary>고객사 설정 정보와 다른 `digital` 파라미터가 입력 된 경우</summary>

(관련 이미지 첨부)

</details>

## 빌링키 발급시 유의사항

### 빌링키 발급 창에서는 언어 설정 미지원

스마트로는 결제창 언어로 한글(`language: "ko"`)과 영어(`language: "en"`)를 지원하지만, 빌링키 발급 창에서는 한글만 지원합니다.

### 구매자 식별값 `customer_id`는 필수 입력

스마트로는 **빌링키 발급시 구매자를 식별할 수 있는 고유 번호인 `customer_id`를 필수**로 입력 받고 있으며,
입력 길이는 **20자로 제한**됩니다. 이는 간편결제 시에도 마찬가지입니다.

### 본인인증 프로세스 존재

스마트로는 다른 PG사와는 다르게 **빌링키 발급시 휴대폰 본인인증 프로세스가 존재**합니다.
단, 한 번 인증 받은 "구매자"는 다시 인증 받을 필요가 없는데 이 "구매자"를 식별하기 위해 위에 언급한 `customer_id`가 사용되고 있습니다.

즉, 기존에 빌링키 발급 시 사용한 `customer_id`를 재사용하면 휴대폰 본인인증 프로세스가 생략되지만,
새로운 `customer_id`로 빌링키 발급을 시도하면 휴대폰 본인인증 후 빌링키 발급이 진행됩니다.

|customer\_id|customer\_uid|카드사  |빌링키 발급 프로세스                                                                                                       |
|------------|-------------|--------|---------------------------------------------------------------------------------------------------------------------------|
|cid\_A      |cuid\_A      |현대카드|본인인증 <br /> → 현대카드로 빌링키 발급                                                                                   |
|            |cuid\_B      |우리카드|이미 본인인증을 완료 한 customer\_id이므로 본인인증 생략 <br /> → 우리카드로 빌링키 발급                                   |
|            |cuid\_A      |신한카드|이미 본인인증을 완료 한 customer\_id이므로 본인인증 생략 <br /> → cuid\_A에 신한카드가 override / cuid\_B는 여전히 우리카드|
|cid\_B      |cuid\_C      |삼성카드|새로운 customer\_id이므로 본인인증 <br /> → 삼성카드로 빌링키 발급                                                         |

## 에스크로 결제시 유의사항

### 에스크로 결제시 카드사/가상계좌 은행 다이렉트 호출 불가능

스마트로는 에스크로 결제 시 카드사 다이렉트 호출 및 가상계좌 은행 다이렉트 호출(V2만 사용 가능)이 불가능합니다.
만약 에스크로 결제 시 아래와 같이 다이렉트 호출을 할 경우 결제창이 호출되지 않으니 유의하시기 바랍니다.

<details>

<summary>V1 에스크로 + 카드사 다이렉트 호출</summary>

```tsx {5-11}
IMP.request_pay({
  channelKey: "{콘솔 내 연동 정보의 채널키}",
  pay_method: "card",
  amount: 50000,
  escrow: true, // 에스크로 결제
  card: {
    direct: {
      code: "361", // 카드사 다이렉트 호출
      quota: 5,
    },
  },
});
```

</details>

<details>

<summary>V2 에스크로 + 카드사 다이렉트 호출</summary>

```tsx {5-13}
PortOne.requestPayment({
  pgProvider: "SMARTRO_V2",
  payMethod: "CARD",
  totalAmount: 50000,
  isEscrow: true, // 에스크로 결제
  card: {
    cardCompany: "BC_CARD", // 카드사 다이렉트 호출
    installment: {
      monthOption: {
        fixedMonth: 5,
      },
    },
  },
});
```

</details>

<details>

<summary>V2 에스크로 + 가상계좌 다이렉트 호출</summary>

```tsx {5-8}
PortOne.requestPayment({
  pgProvider: "SMARTRO_V2",
  payMethod: "VIRTUAL_ACCOUNT",
  totalAmount: 50000,
  isEscrow: true, // 에스크로 결제
  virtualAccount: {
    bankCode: "SHINHAN_BANK", // 은행 다이렉트 호출
  },
});
```

</details>

### 에스크로 + 계좌이체 결제 시 현금영수증 자동 입력 불가능

스마트로는 계좌이체 결제 시 결제창에 자동으로 입력될 현금영수증 정보(`cashReceiptType`: 현금영수증 유형,
`customerIdentifier`: 현금영수증 식별 값)를 파라미터로 전달할 수 있습니다.
단, 에스크로 결제 시에는 전달이 불가능합니다. 만약 에스크로 + 계좌이체 결제시 아래와 같이
현금영수증 정보를 전달할 경우 결제창이 호출되지 않으니 유의하시기 바랍니다.

<details>

<summary>V1 에스크로 + 계좌이체 + 현금영수증 정보 전달</summary>

```tsx {4-10}
IMP.request_pay({
  channelKey: "{콘솔 내 연동 정보의 채널키}",
  amount: 50000,
  pay_method: "trans", // 계좌이체 결제
  escrow: true, // 에스크로 결제
  bypass: {
    // 현금영수증 정보 전달
    cashReceiptType: "company",
    customerIdentiifer: "1178178260",
  },
});
```

</details>

<details>

<summary>V2 에스크로 + 계좌이체 + 현금영수증 정보 전달</summary>

```tsx {4-10}
PortOne.requestPayment({
  pgProvider: "SMARTRO_V2",
  totalAmount: 50000,
  payMethod: "TRANSFER", // 계좌이체 결제
  isEscrow: true, // 에스크로 결제
  transfer: {
    // 현금영수증 정보 전달
    cashReceiptType: "company",
    customerIdentiifer: "1178178260",
  },
});
```

</details>

## 기타 유의사항

### 주문 번호에 특수문자 입력 불가능

스마트로는 주문 번호(`merchant_uid`)에 특수문자를 허용하고 있지 않습니다.
따라서 결제창에서 일반결제를 할 때와 발급된 빌링키로 API를 통해 재결제를 하는 경우
숫자, 문자(알파벳 소문자와 대문자) 또는 그 조합으로 이루어진 주문 번호를 사용해주세요.

### 주문 번호 40자 길이 제한

스마트로는 주문 번호(`merchant_uid`)가 최대 40자를 넘을 수 없습니다.
40자가 넘을 경우 40자까지 잘려서 저장되기 때문에 유의 바랍니다.

### 결제 통화 파라미터 제어 불가능

스마트로는 상점 아이디 설정에 따라 사용 가능한 통화가 자동으로 정해지는 방식입니다.
따라서 다른 PG사와는 달리 currency 파라미터로 결제 통화를 설정할 수 없습니다.

단, 스마트로가 지원하지 않는 화폐(KRW와 USD를 제외한 값)를 전달할 경우
`"스마트로가 지원하지 않는 화폐입니다"`라는 에러가 발생하며 결제를 진행할 수 없으니 유의 바랍니다.

또한 스마트로 이슈로 인해 당분간 **USD 결제는 불가능하며 KRW 결제만 가능**하니 참고 바랍니다.

### 제공 기간은 시작 날짜와 종료 날짜를 모두 입력해야 함

스마트로는 결제창 내 서비스 제공 기간을 노출시킬 수 있도록 period 파라미터를 optional로 제공하고 있습니다.
단, 시작 날짜(`from`)와 종료 날짜(`to`)를 모두 입력해야 결제창에 정상적으로 노출되며
**둘 중 하나만 입력하거나 유효(`YYYMMDD`)하지 않은 날짜 형식을 입력하면 결제창에 노출되지 않**습니다.

<details>

<summary>파라미터 예시</summary>

```json
{
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "period": {
    // 서비스 제공 시작 날짜와 종료 날짜를 모두 입력해야 함
    "from": "2023-01-01", // 서비스 제공 시작 날짜
    "to": "2023-03-31" // 서비스 제공 종료 날짜
  }
}
```

(관련 이미지 첨부)

</details>

### 현금성 결제 시 `cashReceiptType` 값에 따라 `customerIdentifier` 입력 정책이 달라짐

스마트로의 경우 현금성 결제 시, bypass 파라미터에 현금영수증 발급 정보를 아래와 같이 전달할 수 있습니다.

<div class="hint" data-style="info">

단, 가상계좌 결제 시에는 스마트로 정책상 다이렉트 호출 시에만 현금영수증 정보를 파라미터로 전달할 수 있는데
V1에서는 가상계좌 다이렉트 호출을 지원하지 않기 때문에
**가상계좌 결제시에는 현금영수증 정보를 파라미터로 전달할 수 없**으니 참고 바랍니다.

</div>

```json
{
  "bypass": {
    "cashReceiptType": "corporate", // 현금영수증 발급 유형
    "customerIdentifier": "1178178260" // 현금영수증 발행 대상 식별 정보
  }
}
```

이때 전달하는 `cashReceiptType` 파라미터 값에 따라 `customerIdentifier` 파라미터 입력 정책이 아래와 같이 달라지기 때문에 주의가 요구됩니다.

|cashReceiptType|customerIdentifier                                                     |
|---------------|-----------------------------------------------------------------------|
|미입력         |입력 불가(결제창에서 입력)                                             |
|anonymous      |입력 불가(결제창에서도 입력 불가)                                      |
|personal       |핸드폰 번호, 주민등록번호, 국세청 현금영수증 카드 번호 중 1개 필수 입력|
|corporate      |사업자 등록번호 필수 입력                                              |

만약 `cashReceiptType: "anonymous"` 또는 입력하지 않은 상태로 `customerIdentifier`를 입력하거나
`cashReceiptType`이 `"personal"` 또는 `"corporate"`인데 `customerIdentifier`를 입력하지 않으면
에러가 리턴되면서 결제창이 호출되지 않습니다.


# https://developers.portone.io/opi/ko/integration/pg/v1/smartro-v2/readme

---
title: 스마트로(신모듈)
description: 스마트로 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/smartro-v2
---

## 1. 스마트로 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 최신 JavaScript SDK로 업데이트하기 <a href="#2." id="2." />

스마트로(신모듈) 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**스마트로 신모듈을 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다**

</div>

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)문서를 통해 최신 SDK를 설치해주세요.

## 3.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
스마트로 결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)`
호출 후 **callback**으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "orderNo0001", // 상점에서 생성한 고유 주문번호 주의: 스마트로 일반결제시 주문 번호에 특수문자 사용 불가
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    buyer_addr: "서울특별시 강남구 삼성동",
    buyer_postcode: "123-456",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    period: {
      from: "20230512", //YYYYMMDD
      to: "20230515", //YYYYMMDD
    },
  },
  function (rsp) {
    // callback 로직
    /* ...중략... */
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `smartro_v2` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank(가상계좌)
  - phone (휴대폰소액결제)
  - lpay (LPAY)
  - kakaopay (카카오페이)
  - naverpay (네이버페이)
  - payco (페이코)
  - pinpay (핀페이)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.
  주의: 스마트로 일반결제시 주문 번호에 특수문자 사용 불가

- amount: number

  **결제금액**

  **string** 이 아닌점에 유의하세요

  소수점 두번째 자리까지 허용합니다.

- buyer\_tel: string

  **구매자 전화번호**

  주의: 스마트로 일반 결제시 필수 입력

- vbank\_due: string

  **가상계좌 입금기한 (YYYY-MM-DD)**

  스마트로의 경우 필수 입력이며 날짜는 무조건 23:59:59로 설정 됨

- escrow: boolean

  **에스크로 결제 여부**

- period?: object

  **서비스 제공 기간**

  날짜만 입력이 가능하며(시간은 무시) 시작 날짜와 종료 날짜를 모두 입력해야 합니다.

  - from: string

    **YYYYMMDD**

  - to: string

    **YYYYMMDD**

</details>

<details>

<summary>

<strong>결제 가능 결제수단</strong>

</summary>

- card + 에스크로, 다이렉트
- vbank + 에스크로
- trans + 에스크로
- phone
- lpay
- naverpay
- kakaopay
- pinpay
- payco

</details>

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

인증결제창 호출 파라미터에서 **customer\_uid**, **customer\_id**값을 추가하면 비 인증 결제창을 호출할 수 있습니다.
비 인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 'card'만 지원됩니다.
    merchant_uid: "orderMonthly0001", // 상점에서 관리하는 주문 번호 주의: 스마트로 일반결제시 주문 번호에 특수문자 사용 불가
    name: "최초인증결제",
    amount: 1000, // 실제 승인은 발생되지 않고 오직 빌링키만 발급됩니다.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    customer_id: "matthew", //고객사가 회원에게 부여한 고유 ID로 필수 입력.
  },
  function (rsp) {
    // callback 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `smartro_v2` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

  주의: 스마트로 일반결제시 주문 번호에 특수문자 사용 불가

- customer\_uid: string

  **빌링키 발급을 위한 결제 수단을 특정하는 고유 번호**

  빌링키 발급시 필수 입력

- customer\_id: string

  **구매자 식별자**

  주의: 스마트로 빌링키 발급시 필수 입력으로 입력 길이는 **20자**로 제한됩니다.

- m\_redirect\_url: string

  **리다이렉트 URL**

  리디렉션 방식으로 진행할 경우, 트랜잭션 종료 이후 302 리디렉션 될 고객사 URL

  스마트로의 경우 모바일 환경에서 **리디렉션 방식으로 빌링키 발급창이 렌더링 되기 때문에 필수입력입니다.**

</details>

</div>

</div>

<details>

<summary>

<strong>가능한 결제 환경</strong>

</summary>

- PC (iframe)
- 모바일 (리디렉션)

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/spb/readme

---
title: 페이팔(Smart Payment Buttons) 일반결제
description: 페이팔(Smart Payment Buttons) 일반결제 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/paypal-v2
---

<div class="hint" data-style="info">

페이팔 일반결제의 경우 SPB(Smart Payment Button) 방식만 지원합니다.

</div>

## 페이팔 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

<div class="hint" data-style="warning">

페이팔 일반결제는 **SDK 1.3.0 부터 사용 가능**합니다.

SDK 스크립트의 주소가 `https://cdn.iamport.kr/v1/iamport.js 인지 확인해주세요.`

위 JS SDK 를 이용하여 페이팔 정기결제 연동시 callback Data는 아래와 같이 두가지 형태로만 내려갑니다.

- `imp_uid`
- `merchant_uid`

해당 SDK를 사용하실때는 IMP.request\_pay로부터 응답된 객체(또는 쿼리 파라미터)에서 imp\_uid를 가지고
**포트원 REST API(GET /payments/imp\_uid)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여
응답 파라미터 중 status(결제 상태) 파라미터에 따라 추가 로직을 구현해야 합니다.

</div>

## 페이팔 일반결제 버튼 렌더링

페이팔 일반결제는 고객사 체크아웃 페이지에 페이팔 일반결제 버튼(아래 이미지 참고)을 렌더링 한 후,
이 일반결제 버튼을 클릭해 페이팔 결제창을 호출하는 방식입니다.

[이미지 링크](<https://developers.portone.io/gitbook-assets/ko/image (6) (1) (1).png>)



따라서 다른 PG사와 결제 플로우가 상이하기 때문에 고객사는 **체크아웃 페이지가 렌더링 되는 시점에**
`IMP.request_pay` 함수 대신 **`IMP.loadUI`라는 별도의 함수를 호출해 페이팔 일반결제 버튼을 렌더링 해야**합니다.

(이미지 첨부: 페이팔 정기결제 빌링키 발급 연동 플로우)

```html
<!--
1. 고객사 체크아웃 페이지가 렌더링됩니다.
   페이팔 버튼을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣어줍니다.
   향후 비슷한 플로우로 동작하는 PG사가 생기거나, 2개 이상의 dom element가 렌더링 될 것을 대비해
   data-portone-ui-type을 paypal-spb로 설정합니다.
-->
<div class="portone-ui-container" data-portone-ui-type="paypal-spb">
  <!-- 3. 여기에 페이팔 버튼이 생성됩니다. -->
</div>

<script>
  window.onload = function() {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달 해 포트원 객체를 초기화합니다.
    IMP.init(고객사 식별코드);

    // 2-2. "결제 요청 데이터"와 결제 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 PG사 버튼 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI('paypal-spb', 결제 요청 데이터, 콜백 함수);

    // 4. 구매자가 PG사 버튼을 누르면 PG사 결제창이 렌더링 됩니다.
    // 5. 이때 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출합니다.
    // 6-7. 포트원 DB에 미결제(ready) 결제 건이 생성됩니다.
    // 8. PG사 결제창이 호출됩니다.
    // 9. 결제 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };
</script>
```

<div class="hint" data-style="info">

### 페이팔 일반결제 버튼이 보이지 않을 때

`portone-ui-container` 라는 class 이름을 갖는 div
element를 찾지 못할 경우 "portone-ui-container를 찾을 수 없습니다." 라는 에러가 발생합니다.

`portone-ui-container` element가 2개 이상인데, `data-portone-ui-type`
attribute가 `paypal-spb`인 element를 찾지 못할 경우, "data-portone-ui-type에 올바른
UI 타입을 입력해주세요."라는 에러가 발생합니다.

`portone-ui-container` element가 2개 이상이고, `data-portone-ui-type`
attribute가 `paypal-spb`인 elemente도 2개 이상인 경우, “동일한 data-portone-ui-type을
갖는 DOM element가 2개 이상 존재합니다."라는 에러가 발생합니다.

</div>

## 결제 요청 데이터 업데이트

페이팔 일반결제 동작의 특성상, 고객사 체크아웃 페이지가 렌더링 될 때 결제 요청 데이터가 결정 되어야 합니다.
때문에 고객사 체크아웃 페이지 등에서 구매자의 정보(이름, 주소 등)를 입력한다거나
포인트 등을 적용하여 결제 금액이 바뀌는 경우에는 그 다음 페이지로 이동해 최종적으로 결정 된 구매 정보를 기준으로 페이팔 버튼을 렌더링 시켜야 합니다.
페이팔 데모 페이지에서도 같은 방식으로 구현되어있습니다.

하지만 페이팔 일반결제 때문에 페이지를 하나 더 만드는 것은 고객사 입장에서 매우 번거로운 일이기 때문에
포트원에서는 처음 페이팔 버튼을 렌더링 시킨 후,
페이팔 버튼을 누르기 전 주문 정보가 바뀌었을때
“결제 요청 데이터”를 업데이트 할 수 있는 `IMP.updateLoadUIRequest` 함수를 제공하고 있습니다.

구매자 입력으로 인해 **결제 요청 데이터가 변경될때 `IMP.updateLoadUIRequest`함수를 호출**하시면
구매자가 페이팔 결제 버튼을 누를때 최종적으로 변경 된 결제 요청 데이터로 페이팔 결제창이 호출됩니다.

(관련 이미지 첨부)

```html
<form>
  <!-- 결제 요청 데이터를 입력 받는 form -->
  <!-- ...중략 -->
  <label for="amount">결제 금액</label>
  <!-- 4. 구매자가 쿠폰을 적용해 결제 요청 금액이 변경(예) 1000 -> 2000)되었습니다. -->
  <input id="amount" name="amount" value="1000" onchnage="onChangeAmount()" />
</form>

<!--
1. 고객사 체크아웃 페이지가 렌더링됩니다.
   페이팔 버튼을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣어줍니다.
   향후 비슷한 플로우로 동작하는 PG사가 생기거나, 2개 이상의 dom element가 렌더링 될 것을 대비해
   data-portone-ui-type을 paypal-spb로 설정합니다.
-->
<div class="portone-ui-container" data-portone-ui-type="paypal-spb">
  <!-- 3. 여기에 페이팔 버튼이 생성됩니다. -->
</div>

<script>
  var requestData = {
    channelKey: '{콘솔 내 연동 정보의 채널키}',
    pay_method: 'paypal',
    amount: 1000,
    // ...중략
  }
  window.onload = function() {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달 해 포트원 객체를 초기화합니다.
    IMP.init(고객사 식별코드);

    // 2-2. requestData(결제 요청 데이터)와 결제 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 PG사 버튼 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI('paypal-spb', requestData, 콜백 함수);

    // 6. 구매자가 PG사 버튼을 누르면 PG사 결제창이 렌더링 됩니다.
    // 7. 이떄 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출하며
    // 결제 요청 금액은 1000에서 2000으로 변경됩니다.

    // 8-9. 포트원 DB에 미결제(ready) 결제 건이 생성됩니다.
    // 10. PG사 결제창이 호출됩니다.
    // 11. 결제 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };

  function onChangeAmount() {
    // 5. 결제 요청 금액이 변경되면 고객사가 선언한 onChangeAmount 함수가 호출됩니다.
    // IMP.updateLoadUIRequest에 최종적으로 변경 된 결제 요청 데이터를 전달합니다.
    requestData.amount = document.getElementById('amount').value
    IMP.updateLoadUIRequest('paypal-spb',requestData)
  }
</script>
```

## loadUI 요청 객체

|파라미터                                                                                              |데이터타입|필수여부    |의미                                                                                                                                                                                                                                                                                                                                                                                                                              |
|------------------------------------------------------------------------------------------------------|----------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|merchant\_uid                                                                                         |string    |required    |고객사 채번 주문 고유 번호                                                                                                                                                                                                                                                                                                                                                                                                        |
|name                                                                                                  |string    |optional    |제품명                                                                                                                                                                                                                                                                                                                                                                                                                            |
|amount                                                                                                |number    |required    |금액                                                                                                                                                                                                                                                                                                                                                                                                                              |
|\~\~pg(deprecated)\`\`                                                                                |~~string~~|~~required~~|~~paypal\_v2~~                                                                                                                                                                                                                                                                                                                                                                                                                    |
|channelKey                                                                                            |string    |required    |<p>paypal\_v2 채널의 채널 키 </p><p>(포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.)</p>                                                                                                                                                                                                                                                                                                         |
|pay\_method                                                                                           |string    |required    |paypal (결제수단)                                                                                                                                                                                                                                                                                                                                                                                                                 |
|[country](http://chaifinance.notion.site/country-29b79aaa067846cea251a7875b0f6ed4)                    |string    |optional    |<p>국가 코드</p><p>주의: 페이팔 일반결제 테스트 모드시에만 유효</p>                                                                                                                                                                                                                                                                                                                                                               |
|customer\_id                                                                                          |string    |optional    |고객사가 구매자를 특정하기 위해 채번한 고유 번호                                                                                                                                                                                                                                                                                                                                                                                  |
|buyer\_name                                                                                           |string    |optional    |구매자 전체 이름                                                                                                                                                                                                                                                                                                                                                                                                                  |
|[buyer\_first\_name](http://chaifinance.notion.site/buyer_first_name-b40318cbf8e2489385a58cc59ae7ab7e)|string    |optional    |구매자 이름 주의: 페이팔에서만 유효하며 buyer\_name이 아닌 buyer\_first\_name과 buyer\_last\_name 입력을 권장                                                                                                                                                                                                                                                                                                                     |
|[buyer\_last\_name](http://chaifinance.notion.site/buyer_last_name-0571c7432cf44c0ab6f3fddf34238666)  |string    |optional    |구매자 성 주의: 페이팔에서만 유효하며 buyer\_name이 아닌 buyer\_first\_name과 buyer\_last\_name 입력을 권장                                                                                                                                                                                                                                                                                                                       |
|buyer\_tel                                                                                            |string    |optional    |구매자 전화번호                                                                                                                                                                                                                                                                                                                                                                                                                   |
|buyer\_email                                                                                          |string    |optional    |구매자 이메일 주소                                                                                                                                                                                                                                                                                                                                                                                                                |
|notice\_url                                                                                           |string    |optional    |<p>결제 창에서 결제 승인 완료 또는 가상계좌 발급 완료시 고객사에게 노티 될 웹훅 URL string 또는 string\[]로 N개 설정 가능</p><p>웹훅이 잘 발송 됐는지는 결제 승인 내역에서 아임포트 번호를 눌러봤을때 웹훅 발송 내역을 보고 확인할 수 있음</p>                                                                                                                                                                                    |
|confirm\_url                                                                                          |string    |optional    |<p>결제창이 호출되고 구매자가 최종 결제 승인을 하기까지 수량 소진 등 모종의 사유로 더이상 결제가 불가능 하게 되는 상황을 대비해, 최종 결제 승인 직전 최종 결제 승인 여부를 질의할 고객사 웹서버 endpoint</p><p>아임포트가 해당 endpoint로 최종 결제 승인 질의시, 200 외의 응답을 받으면 최종 결제 승인을 시키지 않고 결제 실패 상태로 기록함</p><p /><p>

<strong>주의: 아임포트 CS팀으로 해당 기능 사용 신청을 해야 함</strong>

</p>|
|[products](http://chaifinance.notion.site/products-9107dec19480457bbfeb06e9244eb31c)                  |array     |optional    |결제 상품 정보                                                                                                                                                                                                                                                                                                                                                                                                                    |
|[currency](http://chaifinance.notion.site/currency-196b9c5e6a8543df9059ff20199028fc)                  |string    |optional    |결제 통화 (기본값: USD)                                                                                                                                                                                                                                                                                                                                                                                                           |
|custom\_data                                                                                          |object    |optional    |결제 정보와 함께 관리하고 싶은 고객사 커스텀 JSON 데이터                                                                                                                                                                                                                                                                                                                                                                          |

<div class="hint" data-style="warning">

**파라미터 유의사항**

아래 링크로 반드시 유의사항을 숙지하셔야 합니다.

[연동 유의사항](https://developers.portone.io/opi/ko/integration/pg/v1/spb/warning)

</div>

<div class="hint" data-style="warning">

**결제 유의사항**

판매자/구매자 계정이 모두 한국 계정인 경우 결제가 불가합니다.
(단, 예외적으로 테스트 환경에서는 결제 테스트가 가능합니다.)

판매자 계정이 해외 계정인 경우 구매자 계정 국가에 상관없이 자유롭게 결제가 가능합니다. (해외 판매자 계정 <-> 한국 구매자 계정 간 거래 가능)

</div>

## 비동기 처리

### 결제 처리

페이팔 결제 건은 승인 요청 시 바로 승인 되지 않고 일정 시간 후 처리되는 `승인 대기(pending)` 상태가 존재합니다.
따라서 고객사는 트랜잭션 종료시 콜백 함수로 전달되는 포트원 번호(imp\_uid)로
결제 내역을 조회([GET /payments/{imp\_uid}](https://developers.portone.io/api/rest-v1/payment?v=v1#get%20%2Fpayments%2F%7Bimp_uid%7D))한 후
응답 되는 status를 보고 각 상황에 맞는 후 처리 로직을 작성해야 합니다.

승인 대기 상태에서는 최종적으로 승인(paid)이 될 수도 있고 승인이 되지 않을 수도(failed) 있기 때문에
고객사는 반드시 (가상계좌나 정기결제와 같이 결제가 비동기로 승인되는 경우 포트원 → 고객사로 결제 결과를 통보해주는) **웹훅 기능을 연동해야** 합니다.

### 취소 처리

페이팔 결제 취소 요청 시 취소 요청이 바로 승인 되지 않고 일정 시간 후 승인처리되는 경우가 존재합니다.
고객사는 결제 취소 요청 응답 처리 시 취소가 승인되었는지 여부를 확인해야 합니다.

결제 취소 API를 통해 취소 요청을 한 경우 API 응답의 status와 cancel\_history 값을 기준으로 취소 승인 여부를 판단해야 합니다.
status가 cancelled 이고 cancel\_history에 취소 요청 내역이 있는 경우 취소가 승인된 것이고 그렇지 않은 경우 취소 승인대기 상태입니다.

콘솔을 통한 취소 요청이 승인대기인 경우 결제내역에서 결제상태는 결제취소로 변경되지 않고
진행중인 취소요청 내역이 있음이 표시되며 결제내역 상세 화면에서 취소요청내역이 조회됩니다.
취소 요청이 승인대기 상태인 경우 최종적으로 승인되거나 승인되지 않을 수 있기 때문에
고객사는 최종 취소 처리 결과를 전달받기 위해 고객사 통보 웹훅 기능을 연동해야 합니다.

<details>

<summary>취소 요청이 승인대기 중인 결제상태</summary>

(관련 이미지 첨부)

</details>

<details>

<summary>취소 요청이 승인대기 중인 결제내역 상세</summary>

(관련 이미지 첨부)

</details>

### 고위험 결제 처리

페이팔은 판매자 보호 정책을 통해 고객사 거래에서 이상거래나 사기 등이 발생 시,
판매자 보호 정책을 통해 고객사가 손해 입을 수 있는 부분을 보존하는 판매자 보호 프로그램을 가지고 있습니다.
이 판매자 보호 정책을 적용하기 위해서는 페이팔 측에서 제공하는 STC 기능을 사용해야 합니다.

STC 기능을 사용하시기 위해 다음 정보를 확인하셔야 합니다.

1. 페이팔 Business 계정 가입시 산업 종류(Industry)를 결정하는데, 계정의 산업 종류를 확인해야 합니다.
2. 계정의 산업 종류를 확인하신 뒤, 해당 산업에 맞는 파라미터를 아래와 같은 형식으로 loadUI 호출 시 bypass.paypal\_v2 객체에 작성해 추가해 주시면 됩니다.

<details>

<summary>결제 요청시 STC 적용하기</summary>

```json
// 해당 파라미터들은 산업군 별로 추가가 필요하거나 제외해도 되는 파라미터들이 있습니다.
{
  "additional_data": [
    {
      "key": "sender_account_id", // 고객사 account ID(merchant-id)
      "value": "A12345N343"
    },
    {
      "key": "sender_first_name", // 고객사의 account에 등록 된 구매자의 이름
      "value": "John"
    },
    {
      "key": "sender_last_name", // 고객사의 account에 등록 된 구매자의 이름
      "value": "Doe"
    },
    {
      "key": "sender_email", // 고객사의 account에 등록 된 구매자의 이메일 주소
      "value": "example@example.com"
    },
    {
      "key": "sender_phone", // 고객사의 account에 등록 된 구매자의 연락처
      "value": "(02)16705176"
    },
    {
      "key": "sender_country_code", // 고객사의 account에 등록 된 국가 코드
      "value": "KR" // ISO Alpha-2 형식 국가 코드
    },
    {
      "key": "sender_create_date", // 고객사의 account에 등록 된 국가 코드
      "value": "2023-10-10T23:59:59+09:00" // IOS8601 형식
    }
  ]
}
```

</details>

<div class="hint" data-style="warning">

**고위험 산업(게임과 같은 디지털 상품, 중고거래)의 경우에는 STC API를 통해 판매자 보호 정책을 적용하는 것을 페이팔에서 필수로 요구하고 있습니다.**

**판매자 보호 정책에 관한 자세한 내용과 협의가 필요하시다면 페이팔 측에 직접 문의를 하셔야 합니다.**

**고위험 산업이 아닌 경우에도 STC API를 연동하는 것을 권장하고 있습니다.**

<br />

---

<br />

고위험 산업에 해당하는 산업군들은 다음과 같습니다.

1. 이벤트/티켓 판매 산업

2. 연료 산업

3. 게임/디지털 상품 산업

4. 마켓플레이스 사업

5. 온라인 여행 산업(렌터카, 숙박, 여행 패키지, 교통)

6. P2P 산업

7. 소매, 식품 산업
   - **소매, 식품 산업의 경우 다음과 같은 경우에만 STC 연동이 필요합니다.**
     - 모바일 기기를 통해 매장 내 구매가 가능한 산업

   - **다음 산업의 경우에는 STC 연동이 필요하지 않습니다.**
     - 타사 배송업체를 통해 주소로 실물 상품을 배송하는 산업
     - 자체 배송 트럭을 통해 주소로 실물 상품을 배송하는 산업
     - 소비자가 수령할 수 있도록 자체 매장으로 실물 상품을 배송하는 산업

8. 택시, 공유 이동수단 사업

9. 통신사

10. 결제 시스템 보안 서비스 산업

</div>

<details>

<summary>연동가능 결제수단</summary>

- card

- credit(PayPal Credit (US, UK))

- paylater
  - Pay Later (US): 4개월 무이자 할부 또는 6, 12, 24개월 할부
  - Pay Later (UK): 3개월 무이자 할부 또는 4개월 무이자 할부 + 이후 유이자 할부
  - Pay in 4 (AU): 매 2주마다 4회에 걸쳐 지불
  - 4X PayPal (France): 90일 내 4회에 걸쳐 지불
  - Später Bezahlen (Germany): 3, 6, 12, 24개월 할부 또는 30일 이내 지불
  - Italy: 3개월 할부
  - Spain: 3개월 할부

- bancontact(BE / EUR)

- blik(PL / PLN)

- eps(AT / EUR)

- giropay(DE / EUR)

- ideal(NL / EUR)

- mybank(IT / EUR)

- sepa(DE / EUR)

- p24(PL / PLN, EUR)

- sofort(AT, BE, DE, ES, NL / EUR 또는 GB / GBP)

</details>

<details>

<summary>간편결제 </summary>

### Alternative Methods

페이팔은 간편 결제를 Alternative Methods라고 부르고 있습니다. Alternative Methods도 Pay Later 처럼 결제가 가능한 국가와 통화는 매우 제한적입니다.

- Bancontact
  - 구매자: BE / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- BLIK
  - 구매자: PL/ PLN
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- eps
  - 구매자: AT / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- giropay
  - 구매자: DE / EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- iDEAL
  - 구매자: IT / EUR

- MyBank
  - 구매자: IT
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- Przelewy24
  - 구매자: PL / PLN, EUR
  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

- SEPA-Lastschrift
  - 구매자: DE

- SOFORT
  - 구매자
    - AT, BE, DE, ES, NL / EUR
    - GB / GBP

  - 머천트: 브라질, 러시아, 일본을 제외한 모든 국가

단, **Venmo(US)와 Pay upon Invoice(DE)는 지원하지 않습니다.**

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/spb/stc

---
title: 고위험 거래 상세 정보
description: (신)페이팔 일반결제(SPB) 이용시 특이사항을 확인할수 있습니다.
targetVersions:
  - v1
---

페이팔에서 지원하는 판매자 보호 정책(Seller Protection Policy) 적용을 위해서, 결제 시에 산업군 별 파라미터를 추가해 보내셔야합니다.
해당 문서의 파라미터들은 모두 optional이지만, 고위험 거래 처리를 위해 하나 이상의 필드를 추가해 보내셔야합니다.
페이팔에서는 위험도 분석을 위해, 제공하실 수 있는 최대한의 데이터를 전달하는 것을 권장하고 있습니다.

모든 파라미터는 String 타입으로 보내셔야 합니다. Format이 작성되어 있지 않은 필드들은 자유 형식으로 보내주시면 됩니다.

## 산업군 별 파라미터

<details>

<summary>이벤트/티켓 판매 산업</summary>

|Field Name           |Description                                            |Format                                                                   |
|---------------------|-------------------------------------------------------|-------------------------------------------------------------------------|
|sender\_account\_id  |구매자 계정의 id                                       |                                                                         |
|sender\_first\_name  |구매자의 이름                                          |                                                                         |
|sender\_last\_name   |구매자의 성                                            |                                                                         |
|sender\_email        |구매자의 이메일                                        |E.123 - Email Address                                                    |
|sender\_phone        |구매자의 휴대전화 번호                                 |E.123 - Telephone Number (national notation)                             |
|sender\_country\_code|구매자의 국가 코드                                     |ISO Alpha-2 Country Code                                                 |
|sender\_create\_date |구매자의 계정 생성일                                   |ISO 8601 date format                                                     |
|dg\_delivery\_method |발신 방법                                              |(`email`, `phone`, `venue_pickup`, `kiosk_pickup`) 중의 하나로 전송해야함|
|cd\_string\_one      |여분 필드 1(행사일 등의 정보 입력, 중요도 낮음)        |                                                                         |
|cd\_string\_two      |여분 필드 2 (행사 카테고리 등의 정보 입력, 중요도 낮음)|                                                                         |
|cd\_int\_one         |티켓의 수(중요도 낮음)                                 |                                                                         |

</details>

<details>

<summary>연료 산업</summary>

|Field Name           |Description           |Format                                      |
|---------------------|----------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id      |                                            |
|sender\_first\_name  |구매자의 이름         |                                            |
|sender\_last\_name   |구매자의 성           |                                            |
|sender\_email        |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>게임/디지털 상품 산업</summary>

|Field Name           |Description           |Format                                      |
|---------------------|----------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id      |                                            |
|sender\_first\_name  |구매자의 이름         |                                            |
|sender\_last\_name   |구매자의 성           |                                            |
|sender\_email        |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>마켓플레이스 산업</summary>

|Field Name                      |Description                                                                                                                                                        |Format                                      |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
|sender\_account\_id             |구매자/발신자 계정의 id                                                                                                                                            |                                            |
|sender\_first\_name             |구매자/발신자의 이름                                                                                                                                               |                                            |
|sender\_last\_name              |구매자/발신자의 성                                                                                                                                                 |                                            |
|sender\_email                   |구매자/발신자의 이메일                                                                                                                                             |E.123 - Email Address                       |
|sender\_phone                   |구매자/발신자의 휴대전화 번호                                                                                                                                      |E.123 - Telephone Number (national notation)|
|sender\_address\_zip            |(미국 머천트 한정) 구매자/발신자가 고객사 계정에 등록한 우편번호                                                                                                   |                                            |
|sender\_country\_code           |구매자/발신자의 국가 코드                                                                                                                                          |ISO Alpha-2 Country Code                    |
|sender\_create\_date            |구매자/발신자의 계정 생성일                                                                                                                                        |ISO 8601 date format                        |
|sender\_signup\_ip              |구매자/발신자의 회원 가입 시점의 IP 주소                                                                                                                           |IP(IPv4 / IPv6)                             |
|sender\_popularity\_score       |구매자/발신자의 신용도 점수                                                                                                                                        |(high, medium, low) 중의 하나               |
|receiver\_account\_id           |판매자/수신자 계정의 id                                                                                                                                            |                                            |
|receiver\_create\_date          |판매자/수신자의 계정 생성일                                                                                                                                        |ISO 8601 date format                        |
|receiver\_email                 |판매자/수신자의 이메일                                                                                                                                             |E.123 - Email Address                       |
|receiver\_address\_country\_code|판매자/수신자의 국가 코드                                                                                                                                          |ISO Alpha-2 Country Code                    |
|business\_name                  |판매자/수신자가 계정에 등록한 사업용 이름                                                                                                                          |                                            |
|recipient\_popularity\_score    |판매자/수신자의 신용도 점수                                                                                                                                        |(high, medium, low) 중의 하나               |
|first\_interaction\_date        |발신자/수신자의 첫 번째 상호작용 날짜. '상호작용'의 정의는 고객사에서 정의합니다. ex)발신자와 수신자 간의 첫 번째 거래 시도, 발신자와 수신자 간의 친구 추가 날짜 등|ISO 8601 date format                        |
|txn\_count\_total               |발신자/구매자가 현재까지 고객사에서 진행한 총 거래 횟수(PayPal 또는 기타 결제수단을 통해)                                                                          |Number                                      |
|transaction\_is\_tangible       |판매자/수신자의 거래가 유형 거래인지, 무형 거래인지를 나타내는 필드                                                                                                |유형 거래인 경우 1, 무형 거래인 경우 0      |

</details>

<details>

<summary>온라인 여행 산업(렌터카, 숙박, 여행 패키지, 교통)</summary>

|Field Name               |Description                                                                                              |Format                                      |
|-------------------------|---------------------------------------------------------------------------------------------------------|--------------------------------------------|
|sender\_account\_id      |구매자 계정의 id                                                                                         |                                            |
|sender\_first\_name      |구매자의 이름                                                                                            |                                            |
|sender\_last\_name       |구매자의 성                                                                                              |                                            |
|sender\_email            |구매자의 이메일                                                                                          |E.123 - Email Address                       |
|sender\_phone            |구매자의 휴대전화 번호                                                                                   |E.123 - Telephone Number (national notation)|
|sender\_country\_code    |구매자의 국가 코드                                                                                       |ISO Alpha-2 Country Code                    |
|sender\_create\_date     |구매자의 계정 생성일                                                                                     |ISO 8601 date format                        |
|ota\_type                |여행 산업 종류(숙박인 경우 hotel 등, 교통인 경우 train 등의 종류 입력)                                   |                                            |
|ota\_service\_start\_date|서비스 제공 시작일                                                                                       |ISO 8601 date format                        |
|ota\_service\_end\_date  |서비스 제공 종료일                                                                                       |ISO 8601 date format                        |
|ota\_service\_guest\_t\_f|게스트(서비스를 받는 사람) 변경 가능 여부, 사기범들이 변경 가능 서비스에 비용을 지불하는 경향이 있습니다.|변경 가능시 1, 아닐시 0                     |
|ota\_start\_country      |서비스를 시작한 국가 (ex: 차 렌트, 숙박이 예약된 국가)                                                   |ISO Alpha-2 Country Code                    |
|ota\_start\_city         |서비스를 시작한 도시                                                                                     |                                            |
|ota\_start\_zip\_code    |서비스 시작 장소의 우편 번호                                                                             |                                            |
|cd\_string\_one          |여분 필드 1, 여행 산업 - 교통에 해당하는 머천트만 사용, 티켓 종류 입력                                   |ISO 8601 date format                        |

</details>

<details>

<summary>P2P 산업</summary>

|Field Name                      |Description           |Format                                      |
|--------------------------------|----------------------|--------------------------------------------|
|sender\_account\_id             |구매자 계정의 id      |                                            |
|sender\_first\_name             |구매자의 이름         |                                            |
|sender\_last\_name              |구매자의 성           |                                            |
|sender\_email                   |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone                   |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code           |구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date            |구매자의 계정 생성일  |ISO 8601 date format                        |
|receiver\_account\_id           |수신자 계정의 id      |                                            |
|receiver\_create\_date          |수신자의 계정 생성일  |ISO 8601 date format                        |
|receiver\_email                 |수신자의 이메일       |E.123 - Email Address                       |
|receiver\_address\_country\_code|수신자의 국가 코드    |ISO Alpha-2 Country Code                    |

</details>

<details>

<summary>소매, 식품 산업</summary>

|Field Name           |Description                           |Format                                      |
|---------------------|--------------------------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id                      |                                            |
|sender\_first\_name  |구매자의 이름                         |                                            |
|sender\_last\_name   |구매자의 성                           |                                            |
|sender\_email        |구매자의 이메일                       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호                |E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드                    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일                  |ISO 8601 date format                        |
|dg\_delivery\_method |발신 방법                             |(`email`, `phone`) 중의 하나로 전송해야함   |
|highrisk\_txn\_flag  |고객사에서 고위험으로 분류한 상품 여부|위험 상품인 경우 1, 아닐 시 0               |

</details>

<details>

<summary>택시, 공유 이동수단 산업</summary>

|Field Name           |Description                                                     |Format                                      |
|---------------------|----------------------------------------------------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id                                                |                                            |
|sender\_first\_name  |구매자의 이름                                                   |                                            |
|sender\_last\_name   |구매자의 성                                                     |                                            |
|sender\_email        |구매자의 이메일                                                 |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호                                          |E.123 - Telephone Number (national notation)|
|sender\_address\_zip |(미국 머천트 한정) 구매자/발신자가 고객사 계정에 등록한 우편번호|                                            |
|sender\_country\_code|구매자의 국가 코드                                              |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일                                            |ISO 8601 date format                        |
|highrisk\_txn\_flag  |차량 예약과 같은 고객사에서 고위험으로 분류한 결제 건 여부      |위험 거래인 경우 1, 아닐 시 0               |
|cd\_string\_one      |여분 필드 1                                                     |                                            |

</details>

<details>

<summary>통신사</summary>

|Field Name           |Description           |Format                                      |
|---------------------|----------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id      |                                            |
|sender\_first\_name  |구매자의 이름         |                                            |
|sender\_last\_name   |구매자의 성           |                                            |
|sender\_email        |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>결제 시스템 보안 서비스 산업</summary>

|Field Name           |Description           |Format                                      |
|---------------------|----------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id      |                                            |
|sender\_first\_name  |구매자의 이름         |                                            |
|sender\_last\_name   |구매자의 성           |                                            |
|sender\_email        |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>기타 산업</summary>

|Field Name           |Description           |Format                                      |
|---------------------|----------------------|--------------------------------------------|
|sender\_account\_id  |구매자 계정의 id      |                                            |
|sender\_first\_name  |구매자의 이름         |                                            |
|sender\_last\_name   |구매자의 성           |                                            |
|sender\_email        |구매자의 이메일       |E.123 - Email Address                       |
|sender\_phone        |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender\_country\_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender\_create\_date |구매자의 계정 생성일  |ISO 8601 date format                        |
|cd\_string\_one      |여분 필드 1           |                                            |
|cd\_string\_two      |여분 필드 2           |                                            |
|cd\_int\_one         |여분 숫자필드 1       |Number                                      |

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/spb/warning

---
title: 연동 유의사항
description: (신)페이팔 일반결제(SPB) 이용시 특이사항을 확인할수 있습니다.
targetVersions:
  - v1
---

<details>

<summary>결제수단을 알수 없음</summary>

페이팔을 통해 카드 결제 외 BanContact, BLIK, eps, giropay 등 다양한 결제 수단으로 결제가 가능하지만,
**페이팔이 승인 된 결제 수단을 알려주지 않기 때문**에 페이팔의 모든 결제 건의 결제 수단은 paypal로 일괄 저장됩니다.

</details>

<details>

<summary>할부 결제 여부와 할부 개월수를 알 수 없음</summary>

Pay Later를 이용하면 할부 결제가 가능합니다. 하지만 **페이팔이 승인 된 할부 정보를 알려주지 않기 때문**에
실제로 할부로 결제가 됐는지, 됐다면 몇 개월 할부로 결제 됐는지 알 수 없습니다.

</details>

<details>

<summary>접속한 국가에 따라 렌더링 되는 결제 버튼이 다름</summary>

페이팔은 **구매자가 접속한 나라에 따라 이용 가능한 결제 수단이 달라지는 방식**입니다.
따라서 구매자가 접속한 나라에 따라 렌더링 되는 버튼의 종류와 개수가 달라집니다.

(관련 이미지 첨부)

(관련 이미지 첨부)

</details>

<details>

<summary>회원 / 비회원 결제 플로우가 다름</summary>

페이팔은 네이버페이와 같이 구매자가 페이팔에 가입한 계정으로 로그인한 후
등록된 결제 수단(없다면 새로 등록 또는 카드 정보 직접 입력)으로 결제를 하는 방식입니다.

페이팔에 가입되어있지 않은 구매자도 비회원으로 결제가 가능하지만,
회원으로 로그인했을 때와 사용 가능한 결제 수단과 렌더링 되는 결제창에 다소 차이가 있습니다.
회원 / 비회원간 적용/사용 가능한 기능 차이를 간략하게 정리하면 아래와 같습니다.

(관련 이미지 첨부)

</details>

<details>

<summary>Pay Later 버튼은 enable-funding 파라미터에 반드시 paylater를 넣어야 렌더링 됨</summary>

페이팔은 할부 결제를 Pay Later로 부르고 있습니다.
포트원은 Pay Later를 버튼 형태로 제공하고 있으며, **해당 버튼을 렌더링 하기 위해서는 enable-funding 파라미터에 `paylater` 값을 반드시 넣어주셔야** 합니다.
넣지 않으면 Pay Later를 지원하는 국가에서 접속한다고 하더라도 자동으로 렌더링 되지 않습니다. (단, 미국 제외)

```tsx
IMP.loadUI({
  // ...중략
  bypass: {
    paypal_v2: {
      //  ...중략
      "enable-funding": "paylater",
    },
  },
});
```

Pay Later Button은 기본적으로 **구매자가 접속한 국가에 따라 해당 국가에 맞는 버튼이 렌더링** 되며,
**Pay Later 기능을 제공하지 않는 국가에서 접속했을 땐** enable-funding 파라미터에 `paylater` 값을 전달해도 **Pay Later 버튼이 렌더링되지 않**습니다.

(이미지 첨부: 접속 국가: 벨기에 enable-funding: “paylater” → 아무 버튼도 렌더링 되지 않음)

(이미지 첨부: 접속 국가: 프랑스  enable-funding: “paylater” → 4X Paypal 버튼이 렌더링 됨)

(이미지 첨부: 접속 국가: 이탈리아 enable-funding: “paylater” → Paga in 3 rate 버튼이 렌더링 됨)

</details>

<details>

<summary>Pay Later를 지원하는 국가 별로 페이팔 계정을 별도로 만들어야 함</summary>

Pay Later로 결제가 가능한 국가와 통화는 매우 제한적이며 그 방식 또한 국가 별로 상이합니다. 자세한 내용은 아래 국가별 정책을 참고해주세요.

- **US(미국) / USD(달러)**

  - Pay in 4

    Eligible US buyers can pay in four interest-free payments for purchases of $30 to $1,500.

    30 \~ 1,500 달러 결제시에 4개월 무이자 할부

    - 자세히 보기 (ex. 700달러 결제)

      (관련 이미지 첨부)

  - Pay Monthly

    Eligible US buyers can pay in 6, 12, or 24 monthly installments for purchases of $199 to $10,000.

    199 \~ 10,000 달러 결제시 6, 12, 24개월 (유이자) 할부 중 선택하는 방식

    - 자세히 보기 (ex. 700달러 결제)

      (관련 이미지 첨부)

- **AU(호주) / AUD(호주 달러)**

  - Pay in 4

    Pay Later in Australia includes Pay in 4, which eligible AU buyers can use to pay in four interest-free payments for purchases of $30 to $2,000 AUD. The first payment is due at the time of the transaction, and subsequent payments are due every two weeks.

    30 \~ 2,000 호주 달러까지의 결제 건에 대해 2주마다 4번에 걸쳐 결제

    - 자세히 보기 (ex. AUD 호주 달러 결제)

      (관련 이미지 첨부)

- **GE(독일) / EUR(유로화)**

  - PayPal Ratenzahlung

    Eligible German buyers can pay in 3, 6, 12, or 24 monthly installments for purchases of 99€ to 5,000€.

    99 \~ 5,000 유로까지의 결제 건에 대해 3, 6, 12, 24개월 (유이자) 할부 중 선택하는 방식

    - 자세히 보기 (ex. 700 유로 결제)

      (관련 이미지 첨부)

  - Pay in 30

    Eligible German buyers can pay within 30 days for purchases of 1€ to 1,000€.

    1 \~ 1,000 유로까지의 결제 건에 대해 30일 안에 결제하는 방식. 30일 안에 자동으로 결제 될 은행 계좌(IBAN, International Bank Account Number)를 등록해야 한다.

- **ES(스페인) / EUR(유로화)**

  - Pay in 3 installments

    Pay Later in Spain includes Pay in 3 instalments, which eligible buyers in Spain can use to pay in three interest-free payments for purchases of 30€ – 2,000€. The first payment is due at the time of the transaction, and subsequent payments are due every month.

    30 \~ 2,000 유료까지의 결제 건에 대해 3개월 무이자 할부

    - 자세히 보기 (ex. 700 유로 결제)

      (관련 이미지 첨부)

- **IT(이탈리아) / EUR(유로화)**

  - Pay in 3 installments

    Pay Later in Italy includes Pay in 3 installments, which eligible buyers in Italy can use to pay in three interest-free payments for purchases of 30€ – 2,000€. The first payment is due at the time of the transaction, and subsequent payments are due every month.

    30 \~ 2,000 유료까지의 결제 건에 대해 3개월 무이자 할부

    - 자세히 보기 (ex. 700 유로 결제)

      (관련 이미지 첨부)

- **FR(프랑스) / EUR(유로화)**

  - Pay in 4X

    Pay Later in France includes Pay in 4X, which is an installment offer that allows consumers to spread the cost of a purchases across four equal payments for transactions between 30€ – 2,000€. The first payment is due at the time of the transaction. The subsequent payments spread across 90 days.

    30 \~ 2,000유로까지의 결제 금액에 대해 90일에 걸쳐 4번 분할 무이자 결제

    - 자세히 보기 (ex. 700유로 결제)

      (관련 이미지 첨부)

- **GB(영국) / GBP(영국 파운드화)**

  - Pay in 3

    Eligible UK buyers can pay in three interest-free payments for purchases of £30 – £2,000.

    30 \~ 2,000 파운드까지의 결제 금액에 대해 3개월 무이자 할부

    - 자세히 보기(ex. 700 파운드 결제)

      (관련 이미지 첨부)

  - PayPal Credit - Eligible UK buyers receive a revolving line of credit that they can use to pay over time. PayPal Credit offers either 0% interest for 4 months on purchases over £99 or a merchant-specific Installment offers. For the 0% interest for 4 months offer, any remaining balance due after the promotional period or any transactions under £99 are charged interest at the standard variable rate. Terms and conditions apply.

    99 파운드 이상의 결제 금액에 대해 첫 4개월 간 무이자 할부. 4개월 이상 할부 결제 시 5개월째부터는 유이자 할부 적용

즉, 예를 들어 고객사가 독일, 스페인, 이탈리아 이렇게 3개 나라에 대해 서비스를 제공하고 각 나라별 Pay Later 기능도 함께 제공한다고 가정합니다. 이 경우 고객사는 독일, 스페인, 이탈리아용 **페이팔 머천트 계정을 각각 따로 만들어야** 합니다.

가입 후 부여 받은 페이팔 Account ID(IMP.loadUI 함수 호출시 pg 파라미터로 전달)가 각각 D, E, I라고 한다면, **고객사는 구매자가 접속한 국가에 따라 올바른 Account ID를 전달해야** 합니다. 즉, 구매자가 독일에서 접속 한 경우엔 pg: "paypal\_v2.D", 스페인에서 접속 한 경우에는 pg: "paypal\_v2.E" 마지막으로 이탈리아에서 접속 한 경우에는 pg: "paypal\_v2.I"로 입력해줘야합니다.

</details>

<details>

<summary>Pay Later 버튼을 클릭했을때 렌더링 되는 화면은 구매자의 국가를 따라 감</summary>

페이팔은 머천트든 구매자든 가입시 국가를 설정하도록 되어있습니다. **Pay Later 버튼을 클릭했을때 렌더링 되는 화면은 구매자가 페이팔에 가입시 설정한 국가에 따라 달라집**니다.

예를 들어 Pay Later 버튼이 프랑스 용 4X PayPal이라고 하더라도, 미국 구매자 계정으로 로그인을 하면 미국의 Pay Later 정책이 적용 된 (미국의 Pay Later 버튼을 클릭했을때 나오는 화면과 동일한) 화면이 렌더링 됩니다.

(이미지 첨부: 프랑스용 Pay Later 버튼을 누르고 미국으로 설정 된 페이팔 계정으로 로그인 한 경우, 미국의 Pay Later 정책(Pay in 4, Pay Monthly)이 적용 된 화면이 렌더링 됨 (언어도 영어))

(이미지 첨부: 프랑스용 Pay Later 버튼을 누르고 프랑스로 설정 된 페이팔 계정으로 로그인 한 경우, 정상적으로 프랑스의 Pay Later 정책이 적용 된 화면이 렌더링 됨 (언어도 프랑스어))

단, 구매자 계정에 설정 된 국가가 Pay Later를 제공하지 않는 국가인 경우, 일반 카드 결제 화면이 렌더링됩니다. 예를 들어 위와 같이 프랑스 용 Pay Later 버튼을 클릭한 후 Pay Later 를 제공하지 않는 한국 계정으로 로그인하면 일반 카드 결제 화면이 렌더링 됩니다.

</details>

<details>

<summary>enable-funding 파라미터에 Alternative Method 식별자를 필수로 입력해야 하는 경우가 있음</summary>

IMP.loadUI 함수를 호출해 페이팔 결제 버튼을 렌더링하면 구매자가 접속한 국가에 따라 이용 가능한 버튼들이 자동으로 렌더링 됩니다. 하지만 **일부 버튼의 경우엔 자동으로 렌더링되지 않고 있으며 그 기준이 매우 불명확해 페이팔에 확인 요청을 드린 상태**입니다.

따라서 현재로서는 나라별로 지원 가능한 Alternative Method 식별자를 enable-funding 파라미터에 아래와 같이 comma(,)로 구분 된 string(문자열) 형식으로 넣어주셔야 정상적으로 렌더링 됩니다.

💡 예) enable-funding: “paylater,bancontact”

렌더링 할 수 있는 버튼의 종류는 아래와 같습니다.

(관련 이미지 첨부)

</details>

<details>

<summary>배송지 국가가 해당 Alternative Method 지원 국가와 일치해야 함</summary>

페이팔은 기본적으로 구매자가 페이팔에 가입할때 입력 한 배송 주소를 결제 창에 자동으로 입력해줍니다. 만약 이 배송 주소를 override하고 싶다면 purchase\_units\[].shipping.address 파라미터에 override할 주소를 입력하면 됩니다.

이때 국가 코드(purchase\_units\[].shipping.address.country\_code)는 필수 입력인데 **Alternative Method로 결제시에는 이 country\_code가 해당 Alternative Method 결제가 불가능한 나라인 경우엔 결제가 불가능**하기 때문에 주의가 요구됩니다.

예를 들어 벨기에(국가코드 BE)에서만 사용 가능한 BanContact로 결제시, purchase\_units\[].shipping.address.country\_code를 BE가 아닌 다른 값으로 입력하고 BanContact 버튼을 누르면 아래와 같은 일반 카드 결제 화면이 렌더링 됩니다.

(관련 이미지 첨부)

</details>

<details>

<summary>파라미터 유의사항</summary>

- name?: string

  주문명은 비회원으로 결제시에만 결제창에 표기 됩니다.

  (관련 이미지 첨부)

  (관련 이미지 첨부)

  회원으로 결제시에는 결제창에 표기되지 않습니다.

  (관련 이미지 첨부)

  (관련 이미지 첨부)

- pay\_method: 'paypal'

  `paypal`만 입력 가능하며 다른 값을 입력하면 “페이팔에서 제공하지 않는 결제 수단입니다.”라는 에러 메시지와 함께 결제창이 호출되지 않습니다.

  또한 pay\_method를 `paypal`로 입력 후 카드, 계좌 등 어떤 결제 수단으로 결제를 해도 결제 수단은 무조건 `paypal`로 저장됩니다. 이는 페이팔이 실제 결제 된 수단을 구분해 알려주지 않고 모두 `paypal`로 일괄 응답해주기 때문입니다.

- buyer\_tel?: string

  구매자의 휴대폰 번호를 의미하며 [E164 형식](http://www.itu.int/rec/T-REC-E.164-201011-I/en)으로 입력해주셔야 합니다. 예를 들어 01012345678이라는 휴대폰 번호를 갖는 한국 사용자는 국가 번호 82와 앞에 0을 제외한 10123456778을 입력하셔야 합니다. 입력 된 휴대폰 번호는 페이팔 비회원으로 결제시 연락처 정보에 자동 입력됩니다.

  (관련 이미지 첨부)

  만약 접속 국가 형식과 맞지 않는 휴대폰 번호를 입력한 경우엔 무시(자동 완성 되지 않음)됩니다. 예를 들어 미국에서 접속했는데 한국식 번호인 “1012345678”을 입력하면 자동 완성되지 않으며 미국식 번호인 “8317578646”을 입력하면 자동 완성됩니다.

- products?: object\[]

  구매 상품 상세 정보를 의미하며 전달 한 값 중 name(상품 명), quantity(상품 수량), unitPrice(상품 단위 금액)만 결제창에 표기됩니다. **페이팔은 해당 파라미터 입력을 강력 권장**하고 있으니, 되도록 입력해주시기 바랍니다.

  ```json
  {
    "products": [
      {
        "id": "1666779119262",
        "name": "시그니처 핫 초콜릿",
        "code": "DRINK_SIGNITURE_HOT_CHOCOLATE",
        "unitPrice": 5700,
        "quantity": 2,
        "tag": "TAG-1"
      },
      {
        "id": "1666779134572",
        "name": "아이스 아메리카노",
        "code": "DRINK_AMERICANO",
        "unitPrice": 4800,
        "quantity": 3,
        "tag": "TAG-2"
      }
    ]
  }
  ```

  (관련 이미지 첨부)

  (관련 이미지 첨부)

  💡 **각 상품의 수량 \* 단위 가격의 총 합이 주문 총 금액과 반드시 일치해야**합니다. 일치하지 않는 경우 에러 메시지가 리턴되면서 결제창이 호출되지 않습니다. 예를 들어 위 예시의 경우 5,700달러 \* 2개 + 4,800달러 \* 3개 = 총 합 25,800달러이기 때문에 주문 총 금액(amount)를 25800으로 입력해야 합니다.

- currency?: string

  결제 통화를 의미합니다. 페이팔의 경우 사용 가능한 통화는 아래와 같으며, 페이팔에서 사용 불가능한 통화로 결제 시도시 에러 메시지가 리턴되며 결제창이 호출되지 않습니다.

  (관련 이미지 첨부)

  간혹, 접속 국가나 결제 수단에 따라 사용 가능한 통화가 정해져있는 경우가 있는데 이 경우 사용 불가능한 통화를 입력하면 에러 메시지가 리턴되면서 결제창이 호출되지 않습니다.

- digital?: boolean

  컨텐츠 상품 판매 시, 실물 여부 파라미터인 digital의 값에 따라 배송 주소 입력 칸의 유/무가 달라집니다.

  **digital이 false인 경우**

  (관련 이미지 첨부)

  **digital이 true인 경우**

  (관련 이미지 첨부)

- buyer\_first\_name?: string

- buyer\_last\_name?: string

  `buyer_first_name`과 `buyer_last_name`은 페이팔 **비회원으로 결제시** 결제창 내 자동 입력 될 청구 인(payer)의 이름 정보입니다. 회원으로 결제시에는 **회원 가입시 입력 한 이름 정보가 자동으로 입력**되기 때문에 buyer\_first\_name과 buyer\_last\_name으로 override 되지 않습니다.

  페이팔은 해외 결제이기 때문에 이름 전체를 의미하는 기존 buyer\_name 파라미터 대신 buyer\_fist\_name(이름)과 buyer\_last\_name(성)을 구분해 입력해 주셔야 결제창 내 정상적으로 자동 입력됩니다.

  (관련 이미지 첨부)

- bypass?: object

  - paypal\_v2?: object

    - style?: object

      페이팔 결제 버튼을 커스터마이징 하기 위한 파라미터입니다. 자세한 내용은 페이팔에서 제공하는 문서([https://developer.paypal.com/sdk/js/reference/#link-style](http://developer.paypal.com/sdk/js/reference/#link-style))를 참고하세요.

      **hotizontal 스타일 적용시 버튼이 최대 2개까지 밖에 렌더링 되지 않음**

      페이팔 버튼은 기본적으로 vertical(수직)로 렌더링 되지만, 아래와 같이 bypass 파라미터를 사용하면 horizontal(수평)로 렌더링 시킬 수 있습니다.

      ```tsx
      IMP.loadUI(
        {
          // ...중략
          bypass: {
            paypal_v2: {
              style: {
                // ...중략
                layout: "horizontal",
              },
            },
          },
        },
        // 콜백 함수
      );
      ```

      단, 이 경우 버튼이 최대 2개까지만 렌더링 되기 때문에, 페이팔에서도 layout을 horizontal이 아닌 vertical로 설정하도록 권고하고 있습니다.

      (관련 이미지 첨부)

      (관련 이미지 첨부)

    - enable-funding?: string

      렌더링을 허용할 페이팔 버튼 종류를 comma(,) separated string으로 표현한 값으로 가능한 모든 종류는 아래와 같습니다.

      (관련 이미지 첨부)

      (이미지 첨부: 접속 국가: 독일 enable-funding: “paylater”)

      (이미지 첨부: 접속 국가: 독일 enable-funding: “paylater”)

      (이미지 첨부: 접속 국가: 한국)

      (이미지 첨부: 접속 국가: 이탈리아 enable-funding: “paylater”)

    - disable-funding?: string

      렌더링을 허용 하지 않을 페이팔 버튼 종류를 comma(,) separated string으로 표현한 값으로 가능한 모든 종류는 enable-funding과 동일합니다.

      (이미지 첨부: 접속 국가: 이탈리아 enable-funding: “paylater”)

      (이미지 첨부: 접속 국가: 이탈리아 enable-funding: “paylater” disable-funding: “mybank”)

    - purchase\_units: object\[]

      페이팔 주문 상세 정보를 의미하는 배열로 각각의 element에 배송 정보를 담을 수 있습니다.

      💡 포트원을 통해 페이팔을 연동하는 고객사는 **purchase\_units의 길이가 항상 0 또는 1이어야** 합니다.

      페이팔은 구매자가 페이팔에 가입할때 입력 한 배송주소를 결제창에 기본적으로 렌더링하지만, 이를 override하고 싶을때 purchase\_units\[].shipping.address에 override할 주소를 입력할 수 있습니다. 단, **주소가 유효하지 않거나 address\_line\_1을 입력하지 않은 경우엔 override가 되지 않**습니다.

      💡 배송 정보 중 `admin_area_2`와 `country_code`는 필수 입력입니다.

      purchase\_units\[]에 입력 된 배송 정보는 기본적으로 결제창에 자동 완성되지만, 페이팔 회원으로 결제할 때와 비회원으로 결제할 때 각각 다른 정책이 적용됩니다.

      - **페이팔 회원으로 결제시**

        - **shipping.address 정보 미입력**

          (이미지 첨부: bypass.paypal\\\_v2.purchase\\\_units\\\[\\].shipping 미입력 → 가입시 설정한 배송 주소로 자동 입력 됨)

        - **shipping.address 정보 입력**

          ```json
          {
            "bypass": {
              "paypal_v2": {
                // ...중략
                "purchase_units": [
                  {
                    "shipping": {
                      "address": {
                        // 상품 수령 주소
                        "address_line_1": "세종대로 110", // 도로명 주소
                        "address_line_2": "서울특별시청", // 아파트 동 호수
                        "admin_area_1": "서울특별시", // 주(CA, NY)
                        "admin_area_2": "중구", // 시(Los Angeles, New York)
                        "postal_code": "04524", // 상품 수령지 우편번호
                        "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
                      },
                      "name": {
                        "full_name": "홍길동" // 상품 수령인 이름
                      }
                    }
                  }
                ]
              } // end-of paypal_v2
            } // end-of-bypass
          }
          ```

      (이미지 첨부: bypass.paypal\\\_v2.purchase\\\_units\\\[\\].shipping 입력 → 입력한 배송 주소로 override 됨)

      - **페이팔 비회원으로 결제시**

        - **payer.address 정보 미입력 && shipping.address 정보 입력**

          구매자의 청구 주소(bypass.paypal\_v2.payer.address)를 입력하지 않고 배송 주소(bypass.paypal\_v2.shipping.address)만 입력 한 경우엔, 청구 주소란에 배송 주소가 자동 완성됩니다.

          ```json
          {
            "bypass": {
              "paypal_v2": {
                // ...중략
                "purchase_units": [
                  {
                    "shipping": {
                      "address": {
                        // 상품 수령 주소
                        "address_line_1": "세종대로 110", // 도로명 주소
                        "address_line_2": "서울특별시청", // 아파트 동 호수
                        "admin_area_1": "서울특별시", // 주(CA, NY)
                        "admin_area_2": "중구", // 시(Los Angeles, New York)
                        "postal_code": "04524", // 상품 수령지 우편번호
                        "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
                      },
                      "name": {
                        "full_name": "홍길동" // 상품 수령인 이름
                      }
                    }
                  }
                ]
              } // end-of paypal_v2
            } // end-of-bypass
          }
          ```

      (이미지 첨부: \[체크박스 선택 된 모습] payer 정보 없이 shipping 정보만 입력한 경우, 청구 주소에 shipping 정보가 자동 입력됩니다.)

      (이미지 첨부: \[체크박스 해제 된 모습] payer 정보 없이 shipping 정보만 입력한 경우, 청구 주소와 배송 주소에 모두 shipping 정보가 자동 입력됩니다.)

      - **payer.address 정보 입력 && shipping.address 정보 입력**

        구매자의 청구 주소(bypass.paypal\_v2.payer.address)와 배송 주소(bypass.paypal\_v2.shipping.address)를 모두 입력한 경우엔, “청구 주소와 동일한 배송주소” 체크박스를 해제했을때 하단에 렌더링 되는 배송 정보란에 배송 주소가 자동 완성됩니다.

        ```json
        {
          "bypass": {
            "paypal_v2": {
              // ...중략
              "purchase_units": [
                {
                  "shipping": {
                    "address": {
                      // 상품 수령 주소
                      "address_line_1": "세종대로 110", // 도로명 주소
                      "address_line_2": "서울특별시청", // 아파트 동 호수
                      "admin_area_1": "서울특별시", // 주(CA, NY)
                      "admin_area_2": "중구", // 시(Los Angeles, New York)
                      "postal_code": "04524", // 상품 수령지 우편번호
                      "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
                    },
                    "name": {
                      "full_name": "홍길동" // 상품 수령인 이름
                    }
                  }
                }
              ],
              "payer": {
                "address": {
                  "address_line_1": "고산자로 270", // 도로명 주소
                  "address_line_2": "성동구청", // 아파트 동 호수
                  "admin_area_1": "서울특별시", // 주(CA, NY)
                  "admin_area_2": "성동구", // 시(Los Angeles, New York)
                  "postal_code": "04750", // 상품 수령지 우편번호
                  "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
                }
              }
            } // end-of paypal_v2
          } // end-of-bypass
        }
        ```

      (이미지 첨부: \[체크박스 선택 된 모습] payer 정보와 shipping 정보를 모두 입력한 경우, 청구 주소란에 payer 정보가 자동 입력됩니다.)

      (이미지 첨부: \[체크박스 해제 된 모습] payer 정보와 shipping 정보를 모두 입력한 경우, payer 정보는 청구 주소란에 shipping 정보는 배송 주소란에 정상적으로 자동 입력됩니다.)

      - shipping.address 국가가 접속 국가와 일치하지 않는 경우

        페이팔 결제창에 렌더링 되는 주소 형식은 구매자의 접속 국가에 따라 결정됩니다. 배송 주소의 국가와 구매자의 접속 국가를 다른 경우, 국가 간 주소 체계가 다르기 때문에 정상적으로 자동입력 되지 않으니, 이 점 유념해주시기 바랍니다.

      - (이미지 첨부: 미국에서 접속시, payer 정보와 shipping 정보를 모두 한국으로 입력한 경우 청구 주소는 일부만 자동 입력되고 배송 주소는 아예 자동 입력이 되지 않습니다.)

    - payer?: object

      - tax\_info?: object

        구매자의 세금 정보로 브라질(에서 접속한 또는 브라질 계정으로 로그인 한) 구매자에 한 해 필수 입력입니다.

      - address

        구매자의 결제 금액 청구지 주소를 의미하며, 전달한 파라미터는 페이팔 결제창 내 청구지 주소(billing address) 정보에 자동으로 입력됩니다.

        💡 **청구 주소 정보 중** `country_code`**는 필수 입력입니다.**

        단, 페이팔 비 회원으로 결제시에만 해당되며, 회원으로 결제시에는 회원 가입시 입력한 billing address가 자동 입력되기 때문에 해당 파라미터는 무시됩니다.

        - **페이팔 회원으로 결제시**

          - payer.address 정보 입력

            입력 된 정보는 무시되고 페이팔 가입시 기입한 구매자의 청구 주소가 자동 입력됩니다.

            ```json
            {
              "bypass": {
                "paypal_v2": {
                  // ...중략
                  "payer": {
                    "address": {
                      "address_line_1": "200 N Spring St", // 도로명 주소
                      "address_line_2": "Los Angeles City Hall", // 아파트 동 호수
                      "admin_area_1": "CA", // 주(CA, NY)
                      "admin_area_2": "Los Angeles", // 시(Los Angeles, New York)
                      "postal_code": "90012", // 상품 수령지 우편번호
                      "country_code": "US" // [필수 입력] 상품 수령지 국가 코드
                    }
                  }
                } // end-of paypal_v2
              } // end-of-bypass
            }
            ```

            (관련 이미지 첨부)

            ![payer.address를 입력했으나 페이팔 가입시 기입한 정보로 자동 입력됩니다.](http://s3-us-west-2.amazonaws.com/secure.notion-static.com/204c59fb-cb39-42fe-9920-d55f9e1f6291/Untitled.png)

          - payer.address를 입력했으나 페이팔 가입시 기입한 정보로 자동 입력됩니다.

        - **페이팔 비회원으로 결제시**

          - payer.address 정보 입력

            입력 된 정보가 구매자의 청구 주소지란에 자동 입력됩니다.

            ```json
            {
              "bypass": {
                "paypal_v2": {
                  // ...중략
                  "payer": {
                    "address": {
                      "address_line_1": "200 N Spring St", // 도로명 주소
                      "address_line_2": "Los Angeles City Hall", // 아파트 동 호수
                      "admin_area_1": "CA", // 주(CA, NY)
                      "admin_area_2": "Los Angeles", // 시(Los Angeles, New York)
                      "postal_code": "90012", // 상품 수령지 우편번호
                      "country_code": "US" // [필수 입력] 상품 수령지 국가 코드
                    }
                  }
                } // end-of paypal_v2
              } // end-of-bypass
            }
            ```

          (관련 이미지 첨부)

        **payer.address 국가가 접속 국가와 일치하지 않는 경우**

        - 페이팔 결제창에 렌더링 되는 주소 형식은 구매자의 접속 국가에 따라 결정됩니다. 청구 주소의 국가와 구매자의 접속 국가가 다른 경우, 국가 간 주소 체계가 다르기 때문에 정상적으로 자동 입력 되지 않으니, 이 점 유념해주시기 바랍니다.

        (이미지 첨부: 미국에서 접속시, payer.address 정보를 한국으로 입력한 경우 청구 주소는 일부만 자동 입력됩니다. state에 “서울특별시”가 없기 때문입니다.)

</details>

<details>

<summary>사용 불가능한 파라미터</summary>

**`tax_free`**

페이팔은 면세/복합과세를 지원하지 않기 때문에 tax\_free를 입력한 경우 “taxFreeAmount must be 0 in Paypal!”이라는 에러 메시지가 리턴되면서 결제창이 호출되지 않습니다.

**`country`**

결제 국가를 의미하는 country 파라미터로 페이팔 sandbox 모드에서만 유의미하며 **운영 모드에서는 구매자가 접속한 환경에 따라 자동 적용되기 때문에 전달한 파라미터가 무시**됩니다.

예를 들어, country를 “US”로 입력했으나 구매자가 접속한 환경이 “KR(한국)”이라면 한국 사용자가 사용 가능한 결제 버튼들만 렌더링되기 때문에 Pay Later 버튼은 렌더링되지 않습니다.

**`buyer_addr`**

페이팔 결제창 내 표기되는 주소는 결제 금액 청구지(billing information address)와 상품 배송지(shipping address) 이렇게 2가지가 있습니다. 여기서 결제 금액 청구지의 경우 페이팔 회원으로 결제할때는 회원가입시 기입한 정보가 자동 입력되기 때문에 결제창에 노출되지 않으며, 비회원으로 결제할때만 전달 된 파라미터를 기준으로 결제창에 자동 입력됩니다.

단, 이때의 주소는 총 5개의 영역으로 나누어진 상세 주소로 기존에 포트원이 제공하던 buyer\_addr 파라미터로는 커버가 불가능하므로 페이팔 전용 파라미터(`bypass.paypal_v2.payer.address`)를사용하셔야 합니다.

```json
{
  "bypass": {
    "paypal_v2": {
      // ...중략
      "payer": {
        "address": {
          "address_line_1": "고산자로 270", // 도로명 주소
          "address_line_2": "성동구청", // 아파트 동 호수
          "admin_area_1": "서울특별시", // 주(CA, NY)
          "admin_area_2": "성동구", // 시(Los Angeles, New York)
          "postal_code": "04750", // 상품 수령지 우편번호
          "country_code": "KR" // [필수 입력] 상품 수령지 국가 코드
        }
      }
    } // end-of paypal_v2
  } // end-of-bypass
}
```

(이미지 첨부: 회원으로 결제시 청구 주소는 노출되지 않고 배송 주소만 노출되는 모습)

(이미지 첨부: 비회원으로 결제시 전달한 파라미터대로 청구 주소가 자동 입력 된 화면)

**`popup`**

페이팔의 경우 결제창이 무조건 팝업으로 렌더링되기 때문에 해당 파라미터는 무시 됩니다.

**`m_redirect_url`**

페이팔의 경우 PC와 모바일 모두 팝업으로 결제창이 렌더링되기 때문에 결제 프로세스 종료시 모두 콜백 함수가 호촐됩니다. 따라서 m\_redirect\_url 파라미터는 무시됩니다.

**`app_scheme`**

페이팔의 경우 외부 앱으로 이동하는 경우가 없기 때문에 해당 파라미터는 무시됩니다.

**`escrow`**

페이팔의 경우 에스크로 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

**`language`**

결제창 언어 설정을 의미하는 language 파라미터는 구매자가 접속한 환경에 따라 자동 적용되기 때문에 전달한 파라미터가 무시됩니다.

**`bypass.isCulturalExpense`**

페이팔의 경우 문화비 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`bypass.cashReceiptType`**

페이팔의 경우 현금영수증 발급이 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`bypass.customerIdentifier`**

페이팔의 경우 현금영수증 발급이 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`bypass.useInternationalFreeFromMall`**

페이팔의 경우 상점 부담 무이자 할부가 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`card`**

페이팔의 경우 카드사 다이렉트 호출, 상점 부담 무이자 할부, 렌더링 될 카드 종류 제어 등이 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`display`**

페이팔의 경우 Pay Later Button으로 할부 결제가 가능하지만, 국가 그리고 결제 금액별로 가능한 할부 개월수가 정해져있기 때문에 결제창에 표시 될 카드 할부 개월수를 의미하는 display: { card\_quota } 파라미터는 무시됩니다.

**`vbank_due`**

페이팔의 경우 가상계좌 결제를 지원하지 않기 때문에 해당 파라미터는 무시됩니다.

**`appCard`**

페이팔의 경우 앱카드 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`useCardPoint`**

페이팔의 경우 카드 포인트 결제가 불가능하기 때문에 해당 파라미터는 무시됩니다.

**`period`**

페이팔은 결제창 내 제공 기간 정보 노출을 지원하지 않아 해당 파라미터가 무시됩니다.

**`storeDetails`**

페이팔은 상점 세부 정보를 입력할 필요가 없기 때문에 해당 파라미터가 무시됩니다.

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/module

---
title: 모듈 로딩 연동
description: 토스페이먼츠 브랜드페이의 모듈 로딩에 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 모듈 로드 파라미터 정의

<div class="tabs-container">

<div class="tabs-content" data-title="모듈 로드 요청">

```ts title="Javascript SDK"
await IMP.loadModule(
  "toss-brandpay",
  {
    userCode: "imp00000000", //// 관리자 콘솔 - 결제 연동 페이지에서 확인 가능합니다.
  },
  {
    customerKey: "d005f081-830a-4b9c-b5e2-73e56fbe6ac3",
    loadBrandpayOptions: {
      ui: {
        buttonStyle: "default",
        highlightColor: "#3182f6",
        navigationBar: {
          visible: true,
          paddingTop: 10,
        },
        labels: {
          oneTouchPay: "원터치결제",
        },
      },
    },
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- moduleType: string

  **모듈 타입**

  브랜드페이의 경우 `toss-brandpay` 를 사용합니다.

- userCode: string

  **고객사 식별코드**

  `IMP` 로 시작하는 포트원 고객사 식별코드입니다.

- tier\_code?: string

  **하위상점(Tier)의 고유코드**

  \[상점·계정 관리]-\[하위 상점 관리]에서 하위 상점을 생성한 경우에만 사용 가능합니다. 하위상점 고유코드는 알파벳 대문자 또는 숫자만 입력가능하며, 3자까지 입력 가능합니다.

- loadBrandpayOptions?: object

  브랜드페이의 모듈 로딩에 필요한 추가 파라미터입니다.
  `moduleType`을 `toss-brandpay`로 설정하는 경우 필요합니다.

- loadBrandpayOptions.customer\_id: string

  **구매자 ID**

  고객 ID입니다. 다른사용자에게 노출될 경우, 악의적 사용에 대한 문제가 있음으로 자동 증가하는 숫자는 허용되지 않습니다.
  UUID 등 유추가 불가능한 무작위 값을 사용하시길 권장드립니다.

- loadBrandpayOptions.ui?: object

  브랜드페이의 경우 결제창의 UI를 커스터마이징이 가능하며, 아래의 옵션들을 제공하고 있습니다.
  포트원을 통한 연동 후 `IMP.request_pay` 호출 시 `bypass.toss_brandpay.ui` 객체 정보를 추가하여 UI 커스터마이징 기능을 사용할 수 있습니다.

- loadBrandpayOptions.ui.buttonStyle?: string

  **버튼스타일 구분코드**

  버튼 스타일입니다. 값을 넣지 않으면 기본값인 `default`로 설정됩니다.
  `default`로 설정하면 모서리가 둥글고 주변에 여백을 가진 버튼을 사용할 수 있고, `full`로 설정하면 하단 영역이 전부 채워지는 형태의 버튼을 사용할 수 있습니다.

- loadBrandpayOptions.ui.highlightColor?: string

  **UI 메인 색상**

  UI의 메인 색상입니다. 값을 넣지 않으면 기본 색상인 `#3182f6`로 설정됩니다. [웹에서 사용할 수 있는 색상 코드 형식](http://developer.mozilla.org/ko/docs/Web/CSS/color_value)을 모두 사용할 수 있습니다.

- loadBrandpayOptions.ui.navigationBar.visible?: boolean

  **내비게이션 바 사용 여부**

  화면 뒤로 가기 기능을 제공하는 내비게이션 바 사용 여부입니다. 값을 넣지 않으면 기본값인 `true`로 설정됩니다. 내비게이션 바를 사용하지 않으려면 `false`로 설정해야 합니다.

- loadBrandpayOptions.ui.navigationBar.paddingTop?: number

  **내비게이션 바 상단 여백**

  내비게이션 바 위쪽에 설정할 여백 값입니다. 값의 단위는 `px`입니다.

- loadBrandpayOptions.ui.labels.oneTouchPay?: string

  **원터치결제 대체 텍스트**

  UI에 표시되는 `원터치결제`를 대신해 사용할 텍스트입니다. 값을 넣지 않으면 `원터치결제`로 표시됩니다.

</details>

</div>

</div>

## 모듈로드 결과값 정의

<div class="tabs-container">

<div class="tabs-content" data-title="모듈 로드 요청">

```ts title="Javascript SDK"
const brandpayModule = await IMP.loadModule(
  "toss-brandpay",
  {
    userCode: "imp00000000", //// 관리자 콘솔 - 결제 연동 페이지에서 확인 가능합니다.
  },
  {
    customerKey: "d005f081-830a-4b9c-b5e2-73e56fbe6ac3",
    loadBrandpayOptions: {
      ui: {
        buttonStyle: "default",
        highlightColor: "#3182f6",
        navigationBar: {
          visible: true,
          paddingTop: 10,
        },
        labels: {
          oneTouchPay: "원터치결제",
        },
      },
    },
  },
);

brandpayModule.setupPassword();
brandpayModule.getPaymentMethods();
brandpayModule.openSettings();
```

</div>

<details>

<summary>

<strong>setupPassword 설명</strong>

</summary>

결제할 때 사용할 비밀번호를 설정할 수 있는 메서드입니다. 비밀번호 등록・변경이 완료되면 Promise가 resolve됩니다.

자세한 내용은 [토스페이먼츠의 개발자센터 문서](http://docs.tosspayments.com/reference/brandpay-sdk#setuppassword) 를 참고하세요.

```ts title="Javascript SDK"
brandpayModule.setupPassword().catch(function (error) {
  if (error.code === "USER_CANCEL") {
    // 사용자가 창을 닫아 취소한 경우에 대한 처리
  }
});
```

</details>

<details>

<summary>

<strong>getPaymentMethods 설명</strong>

</summary>

등록되어 있는 결제 수단을 조회하는 메서드입니다. 조회가 성공했을 때 Promise가 resolve되고 고객의 결제수단 정보(BrandpayMethodResponse)가 반환됩니다.

자세한 내용은 [토스페이먼츠의 개발자센터 문서](http://docs.tosspayments.com/reference/brandpay-sdk#getpaymentmethods) 를 참고하세요.

```ts title="Javascript SDK"
brandpayModule
  .getPaymentMethods()
  .then(function (methods) {
    // 성공 처리
  })
  .catch(function (error) {
    if (error.code === "USER_CANCEL") {
      // 사용자가 결제창을 닫은 경우 에러 처리
    }
  });
```

</details>

<details>

<summary>

<strong>openSettings 설명</strong>

</summary>

브랜드페이에서 사용하는 결제수단, 비밀번호 설정을 관리하는 결제 관리창을 열 수 있습니다.

자세한 내용은 [토스페이먼츠의 개발자센터 문서](http://docs.tosspayments.com/reference/brandpay-sdk#opensettings) 를 참고하세요.

```ts title="Javascript SDK"
brandpayModule.openSettings().catch(function (error) {
  if (error.code === "USER_CANCEL") {
    // 사용자가 창을 닫아 취소한 경우에 대한 처리
  }
});
```

</details>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/readme

---
emoji: ⌨
title: 토스페이먼츠 브랜드페이
description: 토스페이먼츠 브랜드페이 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 토스페이먼츠 브랜드페이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 최신 JavaScript SDK로 업데이트하기

토스페이먼츠 브랜드페이 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**토스페이먼츠 브랜드페이를 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다**

</div>

<div class="hint" data-style="danger">

## **기존에 deprecated된 콜백 응답은 모두 제거**됐습니다.

신규 JS SDK는 기존 모듈에서 제공했던 CallBack 응답 파라미터가 대부분 삭제되었습니다.
(특히 deprecated 로 명시된 파라미터는 모두 삭제되었습니다.)

해당 JS SDK 사용시 Callback 으로 내려받을수 있는 데이터는 오직 아래 두가지 입니다.

**`imp_uid`, `merchant_uid`**

따라서 해당 SDK를 사용하실때는 `IMP.request_pay`로부터 응답된 객체(또는 쿼리 파라미터)에서
`imp_uid`를 가지고 **아임포트 REST API(GET `/payments/imp_uid`)로 결제 상세 내역(승인 상태, 승인 결과 등등)을 조회**하여
응답 파라미터 중 `status` 파라미터로 결제 상태를 파악하셔야 합니다.

</div>

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) 문서를 통해 최신 SDK를 설치해주세요.

## 3. 결제 요청하기

- [JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
  브랜드페이 결제창을 호출할 수 있습니다.

- **결제 결과**는 PC 환경과 모바일 환경 모두 **callback**으로
  수신됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "toss_brandpay",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    customer_id: "d005f081-830a-4b9c-b5e2-73e56fbe6ac3",
    bypass: {
      isCulturalExpense: true,
    },
  },
  function (rsp) {
    // callback 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `toss_brandpay` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  `toss_brandpay` 로 지정하면 됩니다.

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- name: string

  **주문명**

- amount: number

  **결제금액**

  브랜드페이는 원화 결제만 지원합니다. KRW 기준으로 금액을 입력해주세요.

- buyer\_email?: string

  **구매자 email 주소**

- customer\_id: string

  **구매자 ID**

  고객 ID입니다. 다른사용자에게 노출될 경우, 악의적 사용에 대한 문제가 있음으로 자동 증가하는 숫자는 허용되지 않습니다.\
  UUID 등 유추가 불가능한 무작위 값을 사용하시길 권장드립니다.

- bypass?: object

  - isCulturalExpense: string

    **도서 문화비 결제 여부**

    도서 문화비 소득 공제 결제 여부를 나타내는 파라미터입니다. 기본값은 `false`입니다.

</details>

</div>

</div>

## 3. UI 커스터마이징

- 브랜드페이의 경우 결제창의 UI를 커스터마이징이 가능하며, 아래의 옵션들을 제공하고 있습니다.

- 포트원을 통한 연동 후 `IMP.request_pay` 호출 시 `bypass.toss_brandpay.ui` 객체 정보를 추가하여 UI
  커스터마이징 기능을 사용할 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="UI 커스터마이징">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "toss_brandpay",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    bypass: {
      toss_brandpay: {
        brandpayOptions: {
          ui: {
            buttonStyle: "default",
            highlightColor: "#3182f6",
            navigationBar: {
              visible: true,
              paddingTop: 10,
            },
            labels: {
              oneTouchPay: "원터치결제",
            },
          },
        },
      },
    },
  },
  function (rsp) {
    // callback 로직
  },
);
```

- bypass?: object

  - toss\_brandpay?: object

    - brandpayOptions?: object

      - buttonStyle?: string

        **버튼스타일 구분코드**

        - 버튼 스타일입니다. 값을 넣지 않으면 기본값인 `default`로 설정됩니다.
        - `default`로 설정하면 모서리가 둥글고 주변에 여백을 가진 버튼을 사용할 수 있고, `full`로 설정하면 하단 영역이 전부 채워지는 형태의 버튼을 사용할 수 있습니다.

      - highlightColor?: string

        **UI 메인 색상**

        - UI의 메인 색상입니다.
        - 값을 넣지 않으면 기본 색상인 `#3182f6`로 설정됩니다.
        - [웹에서 사용할 수 있는 색상 코드 형식](http://developer.mozilla.org/ko/docs/Web/CSS/color_value)을 모두 사용할 수 있습니다.

      - navigationBar.visible?: boolean

        **내비게이션 바 사용 여부**

        - 화면 뒤로 가기 기능을 제공하는 내비게이션 바 사용 여부입니다.
        - 값을 넣지 않으면 기본값인 `true`로 설정됩니다.
        - 내비게이션 바를 사용하지 않으려면 `false`로 설정해야 합니다.

      - navigationBar.paddingTop?: number

        **내비게이션 바 상단 여백**

        - 내비게이션 바 위쪽에 설정할 여백 값입니다. 값의 단위는 `px`입니다.

      - labels.oneTouchPay?: string

        **원터치결제 대체 텍스트**

        - UI에 표시되는 `원터치결제`를 대신해 사용할 텍스트입니다. 값을 넣지 않으면 `원터치결제`로 표시됩니다.

</div>

</div>

## 4. 결제수단 지정 바로 결제

- 브랜드페이에 등록된 각 결제수단은 `methodId`라는 결제 수단 ID가 맵핑됩니다.

- 결제창 호출 시 `methodId` 중 하나를 지정하는 경우 UI에서 결제수단을 선택하지 않고 해당
  결제수단으로 바로 결제를 할 수 있습니다.

- `methodId`는 [`IMP.loadModule()`](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/module)을 호출 후 사용할 수
  있는, `getPaymentMethods()` 함수를 통해 확인할 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="바로 결제">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "toss_brandpay",
    merchant_uid: "orderNo0001",
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    customer_id: "d005f081-830a-4b9c-b5e2-73e56fbe6ac3",
    useCardPoint: true,
    display: {
      card_quota: [6],
    },
    bypass: {
      cashReceiptType: "personal",
      customerIdentifier: "01000000000",
      toss_brandpay: {
        methodId: "3nKLoSBV7l8zUHU14cZxK",
        discountCode: "001",
      },
    },
  },
  function (rsp) {
    // callback 로직
  },
);
```

### 기타 파라미터

아래 파라미터를 사용하기 위해서는 결제 수단 ID인 `methodId`를 지정하여 함께 결제 요청해야 합니다.

<div class="hint" data-style="danger">

#### **브랜드페이 위젯에서 사용할 수 없는 파라미터** 가 포함되어 있습니다.

아래 파라미터는 브랜드페이 위젯에서는 사용할 수 없습니다.

- **`display.card_quot`**
- **`useCardPoint`**
- **`bypass.cashReceiptType`**
- **`bypass.customerIdentifier`**

</div>

- useCardPoint?: boolean

  **카드사 포인트 사용 여부**

  - 카드사 포인트를 사용 여부를 지정하는 값입니다.
  - `true` 입력 시 카드사 포인트 사용이 가능하며, 입력하지 않는 경우 기본값은 `false`입니다.
  - (단, 카드사 포인트를 사용하기 위해서는 사전에 토스페이먼츠를 통해 계약이 진행되어야 합니다.)

- display?: object

  **결제창에 렌더링될 카드 할부 개월수 리스트 설정값**

  할부결제는 **5만원 이상 결제 요청시**에만 이용 가능합니다.

  - card\_quota: number\[]

    **할부 개월수**

    예시

    - `[]`: 일시불만 결제 가능
    - `2,3,4,5,6`: 일시불을 포함한 2, 3, 4, 5, 6개월까지 할부개월 선택 가능
    - `3`: 일시불을 포함한 2,3개월까지 할부개월 선택 가능

- bypass?: object

  - cashReceiptType?: string

    **현금영수증 발급 타입**

    - `unable`로 설정시 현금영수증을 발행하지 않으며, `personal`로 설정 시에는 소득 공제용, `corporate`으로 설정 시에는 지출 증빙용으로 현금영수증을 발급합니다.
    - `anonymous`으로 설정하는 경우 현금영수증 자진발급됩니다. 기본값은 `unable`입니다.

  - customerIdentifier?: string

    **현금영수증 발급 식별번호**

    - 현금영수증 발급을 위한 식별번호입니다.
    - 현금영수증 종류에 따라 휴대폰번호, 사업자등록번호, 현금영수증 카드번호를 입력할 수 있습니다.

  - toss\_brandpay?: object

    - discountCode?: string

      **카드사 즉시 할인 코드**

      - 토스페이먼츠의 [카드혜택 조회 API](http://docs.tosspayments.com/reference#%EC%B9%B4%EB%93%9C-%ED%98%9C%ED%83%9D-%EC%A1%B0%ED%9A%8C-1)로 적용할 수 있는 할인 코드 목록을 조회할 수 있습니다.
      - 해당 API는 포트원을 통해 지원이 불가능하므로, 직접 토스페이먼츠 API를 연동하여 사용해야 합니다.

### 브랜드페이 위젯 전용 파라미터

아래 파라미터를 사용하기 위해서는 결제 수단 ID인 `methodId`를 지정하여 함께 결제 요청해야 합니다.

<div class="hint" data-style="info">

#### 브랜드페이 위젯에서만 사용 가능한 파라미터입니다.

`bypass.toss_brandpay.widgetOptions` 에 설정되어야 합니다.

</div>

- methodType?: string

  **위젯에 보여줄 결제 수단**

  - 위젯에 보여줄 결제수단을 선택합니다.
  - `카드`, `계좌` 중 하나입니다. 예를 들어 `카드`를 선택하면 등록한 결제수단 중 `카드`만 노출됩니다.

- methodId?: string

  **위젯에서 기본 결제수단으로 선택할 결제수단의 ID**

  - 위젯을 열었을때, 해당 methodId에 해당하는 결제수단이 가장 먼저 보여집니다.
  - 가장 최근에 결제한 카드를 보여주거나, 유저가 선호하는 카드를 보여줄 때 사용할 수 있습니다.

- ui.promotionSection.summary.visible?: boolean

  **혜택 배지 영역 표시여부**

  - 해택 배지 영역에서는 즉시 할인 대상 카드 정보 등을 간략히 보여줍니다. 기본값은 `true`입니다.

- ui.promotionSection.description.visible?: boolean

  **혜택 배지 영역 표시여부**

  - 결제 해택 영역을 보여주거나 숨깁니다. 기본값은 `true`입니다.

- ui.promotionSection.description.defaultOpen?: boolean

  **결제 혜택 상세 설명 표시 여부**

  - 결제 혜택의 상세 설명을 보여주거나 숨깁니다.
  - `true`인 경우, 결제 카드사의 결제 혜택을 자세히 설명합니다. 기본값은 `false`입니다.

</div>

</div>


# https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/warning

---
title: 연동 유의사항
description: 토스페이먼츠 브랜드페이 연동 유의사항을 소개합니다.
targetVersions:
  - v1
---

## 카드 결제

### 고정 할부 개월 수 결제

- 포트원을 통해 다른 결제대행사(PG)를 이용하는 경우 `display.card_quota` 파라미터에 할부 개월 수를
  입력하여 결제 요청을 하면, 구매자에게 노출할 할부 개월 수 정보를 리스트로 제어가 가능합니다.

- 하지만 포트원을 통해 브랜드페이를 이용하는 경우 해당 파라미터 값을 입력 후 결제 요청 시 입력한
  할부 개월 수로 결제가 진행됩니다.

<details>

<summary>파라미터 사용 예시</summary>

- 예1. 6개월 할부로 결제를 하고자 하는 경우

```json
{
  "display": {
    "card_quota": [6]
  },
  "bypass": {
    "toss_brandpay": {
      "methodId": "c_j429K3djbS01dlk" // 브랜드페이에 등록된 결제 수단의 ID
    }
  }
}
```

</details>

## 현금영수증 유의사항

### 소득공제용 자진발급

- 결제창 내에서 현금영수증 미발행을 선택한 후 결제 승인이 되면 현금영수증이 소득공제용 자진발급으로
  발급됩니다.

- 브랜드페이 결제 요청 시 `methodId` 와 함께 `bypass.cashReceiptType`을 `anonymous`로 입력한 후 결제
  요청 및 승인이 완료되면 현금영수증이 소득공제용 자진발급으로 발급됩니다.

<details>

<summary>파라미터 사용 예시</summary>

```json
{
  "bypass": {
    "cashReceiptType": "anonymous",
    "toss_brandpay": {
      "methodId": "c_j429K3djbS01dlk" // 브랜드페이에 등록된 결제 수단의 ID
    }
  }
}
```

</details>

## 취소관련 유의사항

### 잔여 면세금액 계산

- 부분 취소 및 전체 취소시, 남은 면세 금액을 정확하게 계산하여 요청해야합니다.

## 테스트 관련 유의사항

### 더미 데이터 리턴

- 브랜드페이의 경우 토스페이먼츠의 정책상 테스트 환경의 API 키를 이용하여 결제 요청 및 승인을 하면 더미 데이터 값이 리턴됩니다.
- 연동 후 정상적인 데이터를 확인하기 위해서는 브랜드페이의 라이브 API 키를 이용해서 결제 요청 및 승인을 진행해야 합니다.

### 토스페이먼츠 제공 API 사용

- 결제 취소를 제외한 현금영수증 발급 API 및 결제조회 API는 토스페이먼츠에서 제공하는 API를 이용해야 합니다.


# https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/widget

---
emoji: ⌨
title: 브랜드페이 위젯 연동
description: 토스페이먼츠 브랜드페이 위젯 연동 방법을 안내합니다.
targetVersions:
  - v1
---

- 브랜드페이의 경우 고객사의 주문 페이지에 바로 브랜드페이를 통한 결제가 가능하도록 브랜드페이 UI를
  렌더링 할 수 있는 위젯 기능을 제공합니다.

- 위젯 기능을 연동하기 위해서는 일반적으로 포트원 SDK에서 사용하던 함수가 아닌 `IMP.loadUI` 함수와
  `IMP.updateLoadUIRequest` 함수를 사용해야 합니다.

(관련 이미지 첨부)

## 브랜드페이 위젯 렌더링

- 브랜드페이 위젯은 고객사 체크아웃 페이지에 결제수단 선택 UI를 렌더링 한 후, 결제버튼 클릭시
  브랜드페이로 결제를 하는 방식입니다.

- 따라서 다른 PG사와 결제 플로우가 상이하기 때문에 고객사는 **체크아웃 페이지가 렌더링 되는 시점에
  `IMP.request_pay` 함수 대신 `IMP.loadUI`라는 별도의 함수를 호출해 위젯을 렌더링 해야**합니다.

(관련 이미지 첨부)

```html
<!--
  1. 고객사 체크아웃 페이지가 렌더링됩니다.
  브랜드페이 위젯을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣습니다.
  data-portone-ui-type는 브랜드페이 위젯용임을 나타내는 toss-brandpay-widget로 설정합니다.
  결제하기 버튼 역할을 하는 element의 경우 id를 "portone-toss-brandpay-widget-button"로 설정해야 합니다.
  포트원 SDK는 해당 id를 가지는 element를 찾아 결제하기 event를 등록합니다.
-->
<div class="portone-ui-container" data-portone-ui-type="toss-brandpay-widget">
  <!-- 3. 여기에 결제수단 위젯이 생성됩니다. -->
</div>

<div id="portone-toss-brandpay-widget-button">
  <!-- 1-1. 결제하기 버튼 구현 -->
</div>

<script>
  window.onload = function () {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달해 포트원 객체를 초기화합니다.
    IMP.init(고객사_식별코드);

    // 2-2. "결제 요청 데이터"와 결제 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 브랜드페이 위젯 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI("toss-brandpay-widget", 결제_요청_데이터, 콜백_함수);

    // 4. 구매자가 결제하기 버튼을 누르면 PG사 결제창이 렌더링 됩니다.
    // 5. 이때 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출합니다.
    // 6-7. 포트원 DB에 미결제(ready) 결제 건이 생성됩니다.
    // 8. PG사 결제창이 호출됩니다.
    // 9. 결제 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };
</script>
```

<div class="hint" data-style="info">

### 위젯이 렌더링 되지 않을 때

`portone-ui-container` 라는 class 이름을 갖는 div
element를 찾지 못할 경우 **portone-ui-container를 찾을 수 없습니다.** 라는 에러가
발생합니다.

`portone-ui-container` element가 2개 이상인데, `data-portone-ui-type`
attribute가 `toss-brandpay-widget`인 element를 찾지 못할 경우, **data-portone-ui-type에
올바른 UI 타입을 입력해주세요.** 라는 에러가 발생합니다.

`portone-ui-container` element가 2개 이상이고, `data-portone-ui-type`
attribute가 `oss-brandpay-widget`인 elemente도 2개 이상인 경우, **동일한 data-portone-ui-type을
갖는 DOM element가 2개 이상 존재합니다.** 라는 에러가 발생합니다.

</div>

## 결제 요청 데이터 업데이트

- 브랜드페이의 특성상, 고객사 체크아웃 페이지가 렌더링 될 때 결제 요청 데이터가 결정 되어야 합니다.
  때문에 고객사 체크아웃 페이지에서 포인트나 쿠폰을 적용 해 결제 금액이 바뀌는 경우에 이를 다시
  업데이트 할 수 있는 방법이 제공돼야 합니다.

- 포트원 SDK는 위와 같은 경우에 대응하기 위해 결제 정보를 업데이트 할 수 있는
  `IMP.updateLoadUIRequest` 함수를 제공하고 있습니다.  구매자 입력으로 인해 결제 요청 데이터가
  변경될때 **IMP.updateLoadUIRequest 함수를 호출**하시면 구매자가 결제 버튼을 누를때 최종적으로 변경
  된 결제 요청 데이터로 브랜드페이 결제창이 호출됩니다.

(관련 이미지 첨부)

```html
<form>
  <!-- 결제 요청 데이터를 입력 받는 form -->
  <!-- ...중략 -->
  <label for="amount">결제 금액</label>
  <!-- 4. 구매자가 쿠폰을 적용해 결제 요청 금액이 변경(예) 1000 -> 2000)되었습니다. -->
  <input id="amount" name="amount" value="1000" onchnage="onChangeAmount()" />
</form>

<!--
  1. 고객사 체크아웃 페이지가 렌더링됩니다.
  브랜드페이 위젯을 렌더링 하고 싶은 위치에 "portone-ui-container"라는 class 이름을 갖는 div element를 넣습니다.
  data-portone-ui-type는 브랜드페이 위젯용임을 나타내는 toss-brandpay-widget로 설정합니다.
  결제하기 버튼 역할을 하는 element의 경우 id를 "portone-toss-brandpay-widget-button"로 설정해야 합니다.
  포트원 SDK는 해당 id를 가지는 element를 찾아 결제하기 event를 등록합니다.
-->
<div class="portone-ui-container" data-portone-ui-type="toss-brandpay-widget">
  <!-- 3. 여기에 결제수단 위젯이 생성됩니다. -->
</div>

<div id="portone-toss-brandpay-widget-button">
  <!-- 1-1. 결제하기 버튼 구현 -->
</div>

<script>
  var requestData = {
    pg: "toss_brandpay",
    amount: 1000,
    // ...중략
  };
  window.onload = function () {
    // 2. 고객사 체크아웃 페이지가 렌더링 되면
    // 2-1. "고객사 식별코드"를 전달 해 포트원 객체를 초기화합니다.
    IMP.init(고객사_식별코드);

    // 2-2. "결제 요청 데이터"와 결제 프로세스가 종료되면 호출 될 "콜백 함수"를 전달하여 브랜드페이 위젯 렌더링을 시도합니다.
    // 이때 전달하는 파라미터는 IMP.request_pay 함수 호출시 전달하는 파라미터와 동일합니다.
    IMP.loadUI("toss-brandpay-widget", requestData, 콜백_함수);

    // 6. 구매자가 결제하기 버튼을 누르면 PG사 결제창이 렌더링 됩니다.
    // 7. 이떄 포트원은 내부적으로 IMP.request_pay 함수를 고객사 대신 호출하며
    // 결제 요청 금액은 1000에서 2000으로 변경됩니다.

    // 8-9. 포트원 DB에 미결제(ready) 결제 건이 생성됩니다.
    // 10. PG사 결제창이 호출됩니다.
    // 11. 결제 프로세스가 종료되면 2-2번에 두번째 파라미터로 전달 한 콜백 함수가 호출됩니다.
  };

  function onChangeAmount() {
    // 5. 결제 요청 금액이 변경되면 고객사가 선언한 onChangeAmount 함수가 호출됩니다.
    // IMP.updateLoadUIRequest에 최종적으로 변경 된 결제 요청 데이터를 전달합니다.
    requestData.amount = document.getElementById("amount").value;
    IMP.updateLoadUIRequest("toss-brandpay-widget", requestData);
  }
</script>
```

## loadUI 요청 객체

loadUI 호출시 파라미터인 결제요청 데이터의 경우 IMP.request\_pay의 요청데이터와 동일한 객체이므로, [브랜드페이 연동문서](https://developers.portone.io/opi/ko/integration/pg/v1/toss-brandpay/readme)를 참고해주세요.


# https://developers.portone.io/opi/ko/integration/pg/v1/welcome/api

---
title: API 연동
description: 웰컴페이먼츠 API 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 지원 기능

- 가상 계좌 발급, 회수
- 현금영수증 발급, 취소, 조회
- 외부 결제건 현금영수증 발급, 취소, 조회
- 빌링키 발급
- 예약결제
- 에스크로 등록, 조회
- 결제건 환불

## 추가된 파라미터

### `pay_method` 파라미터 추가

- 포트원을 통하지 않은 외부 결제건에 대한 현금영수증 발급시 필수로 요구되는 파라미터로 trans(계좌이체), vbank(가상계좌) 만 지정 가능합니다.

- 사용가능한 API
  - 현금영수증 발급(외부) API

### `products` 파라미터 추가

에스크로 배송 정보 등록 및 수정 시 상품들에 대한 정보를 입력하는 파라미터로 필수로 요구됩니다.

```json
{
  "products": {
    "id": "상품 고유 아이디 (required)",
    "name": "상품 이름",
    "code": "상품 고유 코드",
    "amount": "상품 단위 가격 (required)",
    "currency": "상품 단위 가격 화폐 (default: KRW)",
    "quantity": "상품 수량 (defatul: 1)",
    "tag": "상품의 카테고리"
  }
}
```

### `corp_reg_no` 파라미터 추가

외부 결제건의 현금영수증 발급 시, 사업자 등록번호를 입력하는 파라미터로 필수로 요구됩니다.

- 계좌이체 : trans
- 가상계좌 : vbank

## API 별 상세 설명

### 빌링키 결제

- 요청 URL: `https://api.iamport.kr/subscribe/again`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**
  - `customer_uid`
  - `merchant_uid`
  - `amount`
  - `buyer_name`

- 주의사항
  - `tax_free` 파라미터는 `부가세업체정함` 설정 고객사에 한해 사용 가능합니다.

  - `vat_amount` 파라미터는 `부가세업체정함` 설정업체에 한해 사용 가능하며 전체금액의 10%이하로 설정
    해야합니다. vat\_amount 가 총 상품가격의 10% 초과할 경우는 결제가 거절됩니다.

### 키인 결제

- 요청 URL: `https://api.iamport.kr/subscribe/onetime`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**

  - `merchant_uid`
  - `card_number`
  - `expiry`
  - `buyer_name`

- 주의사항
  - `tax_free` 파라미터는 `부가세업체정함` 설정 고객사에 한해 사용 가능합니다.

  - `vat_amount` 파라미터는 `부가세업체정함` 설정업체에 한해 사용 가능하며 전체금액의 10%이하로 설정
    해야합니다. vat\_amount 가 총 상품가격의 10% 초과할 경우는 결제가 거절됩니다.

### 예약 결제

- 요청 URL: `https://api.iamport.kr/subscribe/schedule`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**

  - `schedules.merchant_uid`
  - `schedules.amount`
  - `schedules.buyer_name`

- 주의 사항

  - `tax_free` 파라미터는 `부가세업체정함` 설정 고객사에 한해 사용 가능합니다.

  - `vat_amount` 파라미터는 `부가세업체정함` 설정업체에 한해 사용 가능하며 전체금액의 10%이하로 설정
    해야합니다. vat\_amount 가 총 상품가격의 10% 초과할 경우는 결제가 거절됩니다.

### 가상계좌 발급

- 요청 URL: `https://api.iamport.kr/vbanks`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**

  - `merchant_uid`
  - `amount`
  - `vbank_code`
  - `vbank_due`
  - `buyer_name`

- 주의 사항
  - `vbank_holder` 경우 적용되지 않고 고객사명이 사용됩니다.

  - 계좌 발급 받거나 환불금액을 입금받을 수 있는 은행 목록과 코드는
    [https://api.iamport.kr/#vbank\_codes](http://api.iamport.kr/#vbank_codes)에서 확인 가능합니다.

### 에스크로 배송 정보 등록

- 요청 URL: `https://api.iamport.kr/escrows/logis/{imp_uid}`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**
  - `imp_uid`
  - `sender.name`
  - `sender.tel`
  - `sender.postcode`
  - `sender.formed_address`
  - `receiver.name`
  - `receiver.tel`
  - `receiver.postcode`
  - `receiver.formed_address`
  - `logis.company`
  - `logis.invoice`
  - `logis.sent_at`
  - `products.id`
  - `products.name`
  - `products.amount`

- 주의 사항
  - `welcome`는 배송수정시, 지번주소/도로명주소와 상세주소를 구분하여 받고있기 때문에, 발신자의
    주소와 수신자의 주소 정보를 기존의 `sender.addr`와 `receiver.addr` 파라미터 대신 새로 추가된
    파라미터 `formed_address`의 `address_line_1`(지번주소 또는 도로명주소)와
    `address_line_2`(상제주소)에 설정해야합니다.

### 에스크로 배송 정보 수정

- 요청 URL: `https://api.iamport.kr/escrows/logis/{imp_uid}`
  - 요청 메소드: `PUT`

- **웰컴페이먼츠 필수 파라미터**
  - `imp_uid`
  - `logis.company`
  - `logis.invoice`
  - `logis.sent_at`
  - `products.id`
  - `products.name`
  - `products.amount`

- 주의 사항
  - `welcome`는 배송 정보 수정시, 지번주소/도로명주소와 상세주소를 구분하여 받고있기 때문에,
    발신자의 주소와 수신자의 주소 정보를 기존의 `sender.addr`와 `receiver.addr` 파라미터 대신 새로
    추가된 파라미터 `formed_address`의 `address_line_1`(지번주소 또는 도로명주소)와
    `address_line_2`(상제주소)에 설정해야합니다.

### 현금영수증 발급 (아임포트 결제건)

- 요청 URL: `https://api.iamport.kr/receipts/{imp_uid}`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**
  - `imp_uid`
  - `identifier`
  - `type`
  - `buyer_tel`
  - `corp_reg_no`

### 현금영수증 발급 (외부 결제건)

- 요청 URL: `https://api.iamport.kr/receipts/external/{imp_uid}`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**
  - `merchant_uid`
  - `name`
  - `amount`
  - `identifier`
  - `type`
  - `buyer_tel`
  - `corp_reg_no`
  - `pay_method`

### 결제 취소

- 요청 URL: `https://api.iamport.kr/payments/cancel`

- 요청 메소드: `POST`

- **웰컴페이먼츠 필수 파라미터**
  - `imp_uid`
  - `refund_holder` (가상계좌, 계좌이체 거래건)
  - `refund_account` (가상계좌, 계좌이체 거래건)
  - `refund_bank` (가상계좌, 계좌이체 거래건)
  - `refund_tel` (가상계좌, 계좌이체 거래건)

- 주의 사항
  - 부분 취소는 지불수단 별로 **부분환불 사용 서비스 신청 고객사에 한 해** 지원 가능합니다. 부분 환불
    사용 서비스 사용 신청 및 사용 여부 문의는 웰컴페이먼츠 계약 담당자에게 확인해주시기를 바랍니다.

  - tax\_free 파라미터는 `부가세업체정함` 설정 고객사에 한 해 결제 시 면세 금액을 지정했던 경우
    **필수** 입력 바랍니다.

  - vat\_amount 파라미터는 `부가세업체정함` 설정 고객사에 한 해 결제 시 부가세를 지정했던 경우 **필수**
    입력 바랍니다.


# https://developers.portone.io/opi/ko/integration/pg/v1/welcome/caution

---
title: 연동 유의사항
description: 웰컴페이먼츠 연동 유의사항을 소개합니다.
targetVersions:
  - v1
---

## 웰컴페이먼츠와 사전 계약이 필요한 경우

아래 기능을 사용하시려면 웰컴페이먼츠에 사전 신청 후 계약이 완료되어야 합니다. 그렇지 않은 상태에서
해당 기능 이용시 결제 승인에 실패하거나, 승인에 성공하더라도 의도한 바와는 다른 응답(예: 결제창에서
에스크로 결제를 했으나 비-에스크로 결제 응답을 받음)을 얻게 될 수 있으니 주의 해주시기 바랍니다.

- 간편결제 사용
- 면세 / 복합과세 / 지정금액 방식 사용
- 할부 사용
- 상점 부담 무이자 할부 사용
- 카드사 포인트 사용
- 에스크로 사용
- 휴대폰 실물 / 컨텐츠 사용
- 휴대폰 빌링키 발급과 동시에 결제 실물 / 컨텐츠 사용

## 테스트 모드 유의사항

### 테스트 모드에서 확인 불가능한 일부 기능/파라미터 존재

- 일부 간편결제(LPAY, 페이코) 결제 테스트 불가능
- 카드사 포인트 사용(useCardPoint 파라미터) 테스트 불가능
- 계좌이체 뱅크페이 QR 코드 결제 불가능

### 실제 카드사와 통신을 하지 않기 때문에 결제창 호출시 전달 한 결제 정보 그대로 승인 결과가 내려감

예를 들어 체크 카드는 할부 결제가 불가능하기 때문에, 운영 환경에서는 할부 파라미터를 설정 후 실제 카드사 앱에서 체크 카드로 결제시 승인에 실패합니다.

하지만 테스트 환경의 경우, 할부 파라미터를 설정 후 실제 카드사 앱에서 체크 카드로 결제해도 승인에
성공하며, 승인 결과로 할부 개월수는 0(일시불)이 아닌, 결제창 호출시 전달 한 값 그대로 리턴됩니다.

<details>

<summary>파라미터 예제 코드</summary>

1. 국민카드 5개월 할부 다이렉트 호출

   ```json
   {
     "channelKey": "{콘솔 내 연동 정보의 채널키}",
     "pay_method": "card",
     "amount": "50000",
     "card": {
       "direct": {
         // 국민카드 5개월 할부 다이렉트 호출
         "code": "381",
         "quota": 5
       }
     }
   }
   ```

2. 국민카드 앱에서 체크카드로 결제

3. 승인 응답 결과 할부 개월수가 5로 전달 됨

   ```json
   // GET /payments/{imp_uid}
   {
     "card_quota": 5
   }
   ```

</details>

## 공통 유의사항

### 구매자 연락처(PC만), 이름, 주문명, 주문번호는 필수 입력

웰컴페이먼츠의 경우 구매자 연락처(PC만), 이름, 주문명 그리고 주문번호는 필수 입력입니다.

### IOS 앱 결제시 고객사 커스텀 앱 URL 스킴 파라미터(`app_scheme`)는 필수 입력

IOS 앱 결제시, 고객사 커스텀 앱 URL 스킴 파라미터(예) `portone://`)는 필수로 입력하셔야 합니다.

단, **반드시 모바일 앱일때만 입력**하셔야 하며 모바일 웹일때 입력하실 경우, 정상적으로 동작하지 않을 수 있으니 유의하시기 바랍니다.

### IOS에서 서드 파티 앱에서 인증 후 수동으로 복귀해야 함

IOS 모바일 웹/인앱 브라우저에서 결제창 호출 후 카드사 앱으로 이동해 인증을 완료한 경우, 다시 브라우저로 복귀하기 위해서는 수동으로 이동해주셔야 합니다.

### 현금영수증 옵션은 자진 발급만 지원

웰컴페이먼츠 가상계좌 발급, 계좌이체와 같은 현금성 결제시 현금영수증 옵션을 전달할 수 있습니다.

단, 현금영수증 자진발급(`anonymous`) 옵션만 지원하기 때문에 현금영수증 발행 식별 정보 파라미터(`customerIdentifier`)는 지원하지 않습니다.

<details>

<summary>지원 가능: 현금영수증 자진 발급</summary>

```json
{
  // 현금영수증 자진 발급
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "pay_method": "vbank",
  "bypass": {
    "cashReceiptType": "anonymous"
  }
}
```

</details>

<details>

<summary>지원 불가: 현금영수증 소득공제/지출증빙</summary>

```json
// 현금영수증 소득공제
{
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "pay_method": "trans",
  "bypass": {
    "cashReceiptType": "personal",
    "customerIdentifier": "01012345678"
  }
}
// 웰컴페이먼츠에서 제공하지 않는 현금영수증 발급 유형(CASH_RECEIPT_TYPE_PERSONAL)입니다.
```

```json
// 현금영수증 지출증빙
{
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "pay_method": "trans",
  "bypass": {
    "cashReceiptType": "corporate",
    "customerIdentifier": "1178178260"
  }
}
// 웰컴페이먼츠에서 제공하지 않는 현금영수증 발급 유형(CASH_RECEIPT_TYPE_CORPORATE)입니다.
```

</details>

## 제공기간 파라미터(`period`)

### 날짜(`from`과 `to`)와 간격(`interval`) 둘 중 하나만 사용 가능

제공기간 파라미터는 (from과 to) 또는 interval만 입력 가능하며 셋 다 입력은 불가능합니다.

<details>

<summary>파라미터 예제 코드</summary>

```json
// period: { from: "2023-01-01", to: "2023-03-01", interval: "1m" }
{
  "error_msg": "제공 기간은 range와 interval 둘 중 하나만 입력해주세요"
}
```

</details>

또한 from과 to를 입력하는 경우 둘 다 입력해야하며 둘 중 하나만 입력은 불가능합니다.

<details>

<summary>파라미터 예제 코드</summary>

```json
// period: { from: "2023-01-01" }
{
  "error_msg": "웰컴페이먼츠의 경우 제공 기간은 시작 날짜와 종료 날짜를 모두 입력하셔야 합니다. (둘 중 하나만 입력 불가)"
}
```

```json
// period: { to: "2023-03-01" }
{
  "error_msg": "웰컴페이먼츠의 경우 제공 기간은 시작 날짜와 종료 날짜를 모두 입력하셔야 합니다. (둘 중 하나만 입력 불가)"
}
```

</details>

### 날짜(`from`과 `to`)의 경우 PC와 모바일 지원 형식이 다름

웰컴페이먼츠의 경우 제공기간 파라미터에 대해 PC의 경우 날짜까지만 표기되지만 모바일의 경우 분까지 표기됩니다.

<details>

<summary>파라미터 예제 코드</summary>

```json
{
  "period": { "from": "2023-01-01 00:00:00", "to": "2023-03-01 23:59:59" }
}
// PC에서는 "2023-01-01 ~ 2023-03-01"로 표기(시간 정보 무시)
// 모바일에서는 "2023-01-01 00:00 ~ 2023-03-01 23:59"로 표기(초 정보 무시)
```

</details>

### 간격(`interval`)은 1m 또는 1y만 허용 됨

웰컴페이먼츠의 경우 제공 기간을 간격으로 입력하는 경우, 1m 또는 1y만 허용됩니다.

<details>

<summary>파라미터 예제 코드</summary>

```json
// 옵션1. interval을 1m로 설정
{
  "period": { "interval": "1m" }
}
```

```json
// 옵션2. interval을 1y로 설정
{
  "period": { "interval": "1y" }
}
```

```json
// 옵션 3. interval을 1d로 설정
{
  "period": { "interval": "1d" }
}
// -> 웰컴페이먼츠 제공 기간 주기가 올바르지 않습니다. 1m 또는 1y만 허용됩니다.
```

</details>

### 모바일 환경 - 휴대폰 결제시 제공 기간 파라미터(`period`)를 지원하지 않음

모바일 환경에서는 휴대폰 결제 / 빌링키 발급과 동시에 결제시 제공 기간 파라미터(`period`)를 지원하지 않습니다.

## 휴대폰 일반 결제/빌링키 발급과 동시에 결제

### 상품 유형 파라미터(`digital`)는 필수 입력

웰컴페이먼츠의 경우 **휴대폰 소액결제시 상품 유형을 구분 짓는 `digital` 파라미터가 필수**로 요구됩니다.
상품 유형이 디지털 컨텐츠인 경우 `true`를, 실물인 경우엔 `false`를 전달합니다.

### 렌더링을 허용 할 통신사 리스트 옵션과 기본 선택 될 통신사 옵션은 함께 사용할 수 없음

렌더링을 허용 할 통신사 리스트(`phone.detail`) 옵션과 기본 선택 될 통신사 옵션(`bypass.welcome.acceptmethod.hppdefaultcorp(통신사)`/`P_RESERVED.hpp_default_corp=통신사`)은 함께 사용할 경우 정상적으로 동작하지 않아 둘 중 하나만 사용해야 합니다.

<details>

<summary>파라미터 예제 코드</summary>

```json
// 옵션1. SKT와 KT만 렌더링을 허용 -> 정상 동작
{
  "phone": {
    "detail": [
      { "carrier": "SKT", "enabled": true },
      { "carrier": "KTF", "enabled": true }
    ]
  }
}
```

```json
// 옵션2. SKT를 기본 선택 -> 정상 동작
{
  "bypass": {
    "welcome": {
      "acceptmethod": ["hppdefaultcorp(SKT)"],
      "P_RESERVED": ["hpp_default_corp=SKT"]
    }
  }
}
```

```json
// 옵션3. 옵션 1 + 옵션 2 -> 정상 동작하지 않음
{
  "phone": {
    "detail": [
      { "carrier": "SKT", "enabled": true },
      { "carrier": "KTF", "enabled": true }
    ]
  },
  "bypass": {
    "welcome": {
      "acceptmethod": ["hppdefaultcorp(SKT)"],
      "P_RESERVED": ["hpp_default_corp=SKT"]
    }
  }
}
```

</details>

## 일반결제 유의사항

### 카드 결제

#### PC 환경에서는 할부 개월수에 일시불이 기본 포함 됨

웰컴페이먼츠의 경우 PC 환경에서는 일시불이 기본으로 포함되기 때문에, 할부 개월수에 0(일시불)을 넣지 않더라도 결제창에 자동으로 표기됩니다.

<details>

<summary>파라미터 예제 코드</summary>

```json
{
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "pay_method": "card",
  "display": {
    "card_quota": [2, 3, 4, 5, 6] // 일시불 + 2개월 ~ 6개월까지 결제창에 표기
  }
}
```

</details>

#### PC 환경에서는 할부 옵션을 설정하지 않는 경우 무조건 일시불로 결제 됨

웰컴페이먼츠의 경우 PC 환경에서 \*\*할부 옵션을 전달하지 않는 경우 `무조건 일시불만 표기`\*\*되니 주의하시기 바랍니다.

<details>

<summary>파라미터 예제 코드</summary>

```json
// 일시불만 표기
{
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "pay_method": "card"
}
```

```json
// 일시불 + 2개월 ~ 6개월까지 결제창에 표기
{
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "pay_method": "card",
  "display": {
    "card_quota": [2, 3, 4, 5, 6] // 일시불 + 2개월 ~ 6개월까지 결제창에 표기
  }
}
```

</details>

#### 카드사 다이렉트 호출시 고정 할부 개월수는 필수 입력

웰컴페이먼츠의 경우 **카드사 다이렉트 호출시 고정 할부 개월수는 필수 입력**입니다.
따라서 카드사 다이렉트 호출시 리스트 할부 개월수는 입력할 수 없습니다.

예를 들어, BC카드 다이렉트 호출을 하고 싶은 경우 다른 PG사는 `card: { direct: { code: '361' } }`만
지정하면 되지만 웰컴페이먼츠의 경우 카드사 다이렉트 호출시 고정 할부 개월수는 필수 입력이기 때문에
할부 개월수를 함께 넘겨야 하니다.

<details>

<summary>파라미터 예제 코드</summary>

```json
// 예. BC카드 5개월 할부
{
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "pay_method": "card",
  "card": {
    "direct": {
      // 다이렉트 호출 할 카드사 코드와 고정 할부 개월수를 모두 지정해야 함
      "code": "361", // BC카드
      "quota": 5 // 5개월 할부
    }
  }
}
```

```json
// 예. 결제창에서 카드사와 할부 개월수 선택
{
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "pay_method": "card"
}

// 다이렉트 호출 할 카드사와 고정 할부 개월수 모두 지정하지 않아야 함
```

</details>

#### 카드사 포인트 사용 불가 옵션 사용 불가능

웰컴 페이먼츠에서 카드사 포인트 사용 불가 옵션(useCardPoint: false)은 지원하지 않기 때문에 카드사
포인트 사용(useCardPoint: true) 또는 기본값(=파라미터 전달하지 않음, 결제창에서 고객이 카드사 포인트
사용 여부 결정)만 사용 가능합니다.

카드사 포인트 사용 불가 옵션 설정시 “결제 창 호출에 실패하였습니다. 웰컴페이먼츠의 경우 카드사
포인트 사용 불가 옵션은 사용할 수 없습니다.”라는 에러 메시지가 리턴되면서 결제창이 호출되지 않으니
참고 부탁드립니다.

#### 카카오뱅크 카드는 일시불만 지원함

카카오뱅크 카드로 결제시 결제 금액이 5만원 이상이라고 하더라도 할부가 불가능하기 때문에 무조건 일시불로 결제됩니다.

#### ISP 계열 카드의 경우 할부 개월수에 무이자 표기 되지 않음

ISP 계열 카드의 경우, 결제 요청시 페이북 팝업/앱으로 넘어가는데 무이자 할부 적용 조건이 되더라도 할부 개월수 리스트에 (무) 표기가 되지 않습니다.

단, 해당 카드사, 결제 금액, 할부 개월수가 무이자 조건을 만족하는 경우 승인시 무이자가 자동 적용됩니다.

#### 모바일 환경에서 고정/리스트 할부 개월수 최대 값은 36

모바일 환경에서 웰컴페이먼츠 카드 결제시, 고정/리스트할부 개월수 최대 값은 36으로 37 이상의 값을 입력할 경우 결제창이 호출되지 않으니 참고하시기 바랍니다.

PC 환경에서는 별도 제한이 없습니다.

### 가상계좌 발급

#### `vbank_due` 파라미터는 "분" 까지만 유효하며 시간 값은 무시 됨

가상계좌 발급시 입금 기한을 의미하는 `vbank_due` 파라미터는 아래 4가지 형식 중 하나로 입력이 가능합니다.

- YYYYMMDD
- YYYYMMDDHHmmss
- YYYY-MM-DD
- YYYY-MM-DD HH:mm:ss

단, 웰컴페이먼츠의 경우 전달 한 초 값은 무시되며 무조건 59초로 설정되니 유의하시기 바랍니다.

<details>

<summary>파라미터 예제 코드</summary>

```json
{
  "vbank_due": "2023-01-01 12:34:56"
}
// 입금 기한이 "2023-01-01 12:34:59"로 설정 됨
```

</details>

### 상품권 결제

#### 문화 상품권(culturegift)만 지원

웰컴페이먼츠의 경우 상품권 결제시 문화상품권만 지원하며 북앤라이프, 컬쳐랜드 그리고 스마트 문상은 지원하지 않습니다.

### 간편 결제

#### 토스페이의 경우, 할부 개월수 리스트는 전달한 값과 카드사가 제공하는 무이자 할부 개월 수의 최대값까지 표기 됨

예를 들어 할부 개월수 리스트를 3개월까지 렌더링 되도록 설정했으나, 현재 해당 카드사에서 6개월까지 무이자 할부 이벤트가 진행되고 있다면 할부 개월수는 6개월까지 표기 됩니다.

<details>

<summary>파라미터 예제 코드</summary>

```json
// 예) 할부 개월수를 3개월까지 렌더링 되도록 설정
{
  "channelKey": "{콘솔 내 연동 정보의 채널키}",
  "pay_method": "card",
  "display": {
    "card_quota": [2, 3]
  }
}

// 결과) 테스트 당시 우리카드가 6개월까지 무이자 할부 이벤트가 진행중이기 때문에 6개월까지 할부 개월수가 렌더링 됨
```

</details>

#### 카카오페이의 경우, 카드 정보를 제공하지 않음

카카오페이에 등록 된 카드로 결제시 카카오페이에서 카드 정보를 내려주지 않기 때문에 카드 정보를 확인할 수 없습니다.

## 빌링키 발급 유의사항

### 빌링키 발급 수단(`pay_method`)은 필수 입력이며 카드(`card`)만 허용 됨

웰컴페이먼츠의 경우 빌링키 발급 수단은 카드만 허용되며, 휴대폰의 경우 빌링키 발급과 동시에 결제만 가능합니다.

### 실제 승인이 되지 않고 빌링키 발급만 됨

금액(amount) 파라미터는 필수 입력이며, **전달 한 금액(amount)만큼 실제로 승인이 되지 않고** 단순히 빌링키 발급 창에 표기 될 용도로만 사용됩니다.

### 면세 금액(tax\_free)과 부가세(vat\_amount)는 지원하지 않음

빌링키 발급만 되고 실제 승인은 되지 않기 때문에 면세 금액과 부가세는 지원하지 않으며, 전달해도 무시됩니다.

## 빌링키 발급과 동시에 결제 유의사항

### 빌링키 발급 및 결제 수단(`pay_method`)은 필수 입력이며 휴대폰(`phone`)만 허용 됨

웰컴페이먼츠의 경우 빌링키 발급 및 결제 수단은 휴대폰만 허용되며, 카드의 경우 빌링키 발급만 가능합니다.

### 실제 승인이 됨

금액(amount) 파라미터는 필수 입력이며, **전달 한 금액(amount)만큼 실제로 승인이 됩니다.**

### 면세 금액(tax\_free)과 부가세(vat\_amount)는 지원하지 않음

웰컴페이먼츠의 경우 빌링키 발급과 동시에 결제시, 실제 승인이 되지만 면세 금액과 부가세는 지원하지 않으며, 전달해도 무시됩니다.

### 제공기간 파라미터(`phone`)는 지원하지 않으며 무조건 “월 자동결제”로 표기 됨

웰컴페이먼츠 빌링키 발급 및 결제는 휴대폰만 허용하고 휴대폰의 경우 통신사 정책에 의해 무조건 매월 자동결제만 허용됩니다.

따라서 제공기간 파라미터는 지원되지 않으며, PG 창의 제공기간 영역에 무조건 "월 자동결제"로 표기됩니다.

## 에스크로 유의사항

### 에스크로 결제의 경우 고객사가 임의로 취소할 수 없음

에스크로 결제건의 경우에는 기본적으로 구매자가 구매거절을 하지 않으면 고객사가 임의로 거래를 취소할 수 없습니다.

만약 에스크로 구매동의와 관계없이 고객사가 거래를 취소할 수 있도록 설정하고 싶은 경우에는 웰컴페이먼츠와 별도로 협의가 필요합니다.


# https://developers.portone.io/opi/ko/integration/pg/v1/welcome/readme

---
title: 웰컴페이먼츠
description: 웰컴페이먼츠 연동 방법을 안내합니다.
targetVersions:
  - v1
---

## 1. 웰컴페이먼츠 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

## 2. 최신 JavaScript SDK로 업데이트하기 <a href="#2." id="2." />

웰컴페이먼츠 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**웰컴페이먼츠를 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다**

</div>

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) 문서를 통해 최신 SDK를 설치해주세요.

## 3.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
웰컴페이먼츠 결제/빌링키 발급/빌링키 발급과 동시에 결제창을 호출할 수 있습니다. **트랜잭션 결과**는
PC의 경우 **callback** 함수로 전달되고
모바일의 경우 **m\_redirect\_url**로 302 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="일반 결제 창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card",
    merchant_uid: "orderNo0001", // 고객사에서 채번한 주문 고유 번호입니다.
    name: "주문명:결제테스트",
    amount: 1004,
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    const { imp_uid, merchant_uid } = rsp;

    // 콜백 함수로 전달 받은 imp_uid로 포트원 결제 내역 조회 API를 통해 결제 상태를 판단합니다.
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - card (신용카드)
  - trans (실시간 계좌이체)
  - vbank (가상계좌)
  - phone (휴대폰소액결제)
  - culturegift (문화상품권)
  - lpay (LPAY)
  - kakaopay (카카오페이)
  - payco (페이코)
  - tosspay (토스페이)

- merchant\_uid: string

  **주문 번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제 금액**

  **string** 이 아닌 점에 유의하세요.

- tax\_free?: number

  **면세 금액**

- vat\_amount?: number

  **부가세 금액**

  상점 아이디가 “부가세 업체 정함”으로 설정 된 경우일때만 전달 가능합니다.

  주의: 전체 금액의 10% 이하만 허용 됩니다.

- buyer\_name: string

  **구매자 이름**

  주의: 웰컴페이먼츠의 경우 구매자 이름은 필수 입력입니다.

- buyer\_tel: string

  **구매자 연락처**

  주의: 웰컴페이먼츠의 경우 구매자 연락처는 필수 입력입니다.

- buyer\_email?: string

  **구매자 이메일 주소**

- m\_redirect\_url?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  주의: 웰컴페이먼츠의 경우 **모바일 환경에서 필수 입력**입니다.

- notice\_url?: string 또는 **string\[]**

  **트랜잭션 종료 후 웹훅이 발송 될 고객사 서버 URL**

  주의: notice\_url 파라미터 설정시, 콘솔에 설정 된 웹훅 URL은 override 되며 notice\_url에 전달 한 주소로만 웹훅이 발송됩니다.

- confirm\_url?: string

  **트랜잭션 승인 직전 최종 승인 여부를 질의 할 고객사 서버 URL**

  트랜잭션 승인 직전, 포트원 서버에서 confirm\_url로 트랜잭션 최종 승인 여부를 질의하게 되며 200 외의 응답을 받은 경우 트랜잭션은 중단됩니다.

- app\_scheme?: string

  **IOS 앱에서 결제시 카드/은행 앱에서 인증 후 복귀 될 고객사 커스텀 앱 URL Scheme**

  - 예: portone://
  - 주의: **IOS 앱 결제시 필수** 입력이며 **앱이 아닌 모바일 웹 결제시에는 입력하지 마세요.**

- currency?: 'KRW'

  **결제 통화**

  웰컴페이먼츠의 경우 KRW만 허용되며, 미 입력시 KRW로 자동 적용됩니다.

- language?: string

  **결제창 언어 설정**

  - ko(한국어, 기본값)
  - en(영어)
  - zh(중국어)

- digital?: boolean

  **휴대폰 소액결제시 실물/컨텐츠 여부**

  주의: **휴대폰 소액결제시 필수 입력**입니다.

- vbank\_due: string

  **가상계좌 입금기한**

  - YYYY-MM-DD
  - YYYY-MM-DD HH:mm:ss
  - YYYYMMDD
  - YYYYMMDDHHmmss

  주의: 웰컴페이먼츠의 경우 무시되며 무조건 59초로 설정 됩니다.

- escrow?: boolean

  **에스크로 결제 여부**

  웰컴페이먼츠의 경우, 카드/계좌이체/가상계좌 결제시 에스크로 결제가 허용됩니다.

- useCardPoint?: boolean

  **카드사 포인트 사용 여부**

  웰컴페이먼츠의 경우, 카드사 포인트 사용 불가 옵션(useCardPoint: false)은 지원하지 않습니다.

  카드사 포인트 사용(useCardPoint: true) 또는 기본값(=파라미터 전달하지 않음, 결제창에서 고객이 카드사 포인트 사용 여부 결정)만 사용 가능합니다.

- useFreeInterestFromMall?: boolean

  **상점 부담 무이자 할부 사용 여부**

- period?: object

  **서비스 제공 기간**

  (from과 to) 또는 interval 중 하나만 입력 가능합니다.

  주의: 모바일 환경 - 휴대폰 소액결제시엔 지원하지 않습니다.

  (from과 to) 웰컴페이먼츠의 경우

  - PC: 날짜까지만 입력 가능하며 시간은 무시됩니다.
  - 모바일: 날짜와 시간 모두 입력 가능하며 초는 무시됩니다.

  * from: string

    **서비스 제공 시작 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * to: string

    **서비스 제공 종료 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * interval?: string

    **서비스 제공 간격**

    - 1m: 매월 정기결제
    - 1y: 매년 정기결제

- bypass?: object

  - welcome?: object

    - logo\_url?: string

      결제창에 노출 될 메인 로고 URL(크기: 89x19)로 **PC 전용** 파라미터입니다.

    - logo\_2nd?: string

      결제창에 노출 될 서브 로고 URL(크기: 64x13)로 **PC 전용** 파라미터입니다.

    - P\_CARD\_OPTION?: object

      **모바일 카드/간편결제 전용** 파라미터입니다.

      1. 신용카드 우선 선택 옵션

         예) selcode=14

         - 해당 카드 코드에 해당하는 카드가 선택된 채로 Display
         - 간편결제는 불가능 (타 카드 선택 가능)

      2. 선택적 표시 옵션

         예1) onlycard=visa3d
         예2) selcode=14:onlycard=visa3d

         - 안심결제: visa3d
         - ISP: isp
         - 간편결제: easypay 중 선택 적 표시
         - bypass.P\_ONLY\_EASYPAYCODE?: string

      카드 결제창 내 렌더링 될 간편 결제 리스트를 의미하며 **모바일 전용** 파라미터입니다.

      예) 카카오페이, 엘페이, 페이코만 렌더링 →
      ”KAKAOPAY:LPAY:PAYCO” 전달

      - 카카오페이: KAKAOPAY
      - 엘페이: LPAY
      - 페이코: PAYCO
      - 토스페이: TOSSPAY

    - acceptmethod?: string\[]

      **PC - 카드 결제 전용 파라미터**

      |형식                             |설명                                                                                                                                                                                                                               |
      |---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
      |SKIN(색상코드)                   |결제 창의 배경 색상 <br /> - 기본값 : #c1272c <br /> - 예시: SKIN(#fc6b2d)                                                                                                                                                         |
      |below1000                        |1,000원 미만 결제 허용 여부 <br /> - 기본값: 허용하지 않음                                                                                                                                                                         |
      |paypopup                         |안심클릭을 팝업 형태로 렌더링 시킬지 여부 <br /> - 기본값: 레이어                                                                                                                                                                  |
      |onlyeasypaycode(간편 결제 리스트)|카드 결제창 내 렌더링 될 간편 결제 리스트 <br /> 예) 카카오페이, 엘페이, 페이코만 렌더링 → ”kakaopay:lpay:payco” 전달 <br /> - 카카오페이: `kakaopay` <br /> - 엘페이: `lpay` <br /> - 페이코: `payco` <br /> - 토스페이: `tosspay`|
      |SLIMQUOTA(슬림 할부 설정)        |부분 무이자 설정. 슬림 할부 <br /> - 형식) SLIMQUOTA(코드-개월:개월^코드-개월:개월 <br /> - 예시) SLIMQUOTA(11-2:3^34-2:3)                                                                                                         |

      **PC - 휴대폰 소액 결제 전용 파라미터**

      |형식                       |설명                                                                                                                                                                                                                                                                                                                                                         |
      |---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
      |hppdefaultcorp(통신사 코드)|휴대폰 소액결제시 기본 선택되어있는 통신사 <br /> - 기본: 기본 선택되어있는 통신사 없음 <br /> 예) KT 기본 선택 → ”hppdefaultcorp(KT)” 전달 <br /> - SKT: `SKT` <br /> - KT: `KTF` <br /> - LG 유플러스: `LGT` <br /> - 알뜰폰 전체: `MVNO` <br /> - 알뜰폰 CJ 헬로 모바일: `CJH` <br /> - 알뜰폰 티플러스: `KCT` <br /> - 알뜰폰 SK 세븐모바일: `SKL` <br />|
      |hppnofix(N 또는 Y)         |휴대폰 소액결제창에 자동 입력되는 `buyer_tel`값을 수정할 수 있는지 여부 <br /> - 기본값: 수정 가능 <br /> - Y : 수정 불가능 <br /> - N : 수정 가능(기본) <br />                                                                                                                                                                                              |

      ```json
      {
        "channelKey": "{콘솔 내 연동 정보의 채널키}",
        "bypass": {
          "welcome": {
            "acceptmethod": [
              "SKIN(#fc6b2d)", // 결제창 배경 색상 #fc6b2d
              "below1000", // 1,000원 이하 결제 허용
              "paypopup", // 안심 클릭을 팝업으로 렌더링
              "onlyeasypaycode(kakaopay:payco)", // 카드 결제창 내 간편결제는 카카오페이와 페이코만 렌더링
              "hppdefaultcorp(KT)", // 휴대폰 소액결제시 KT 기본 선택
              "hppnofix(Y)" // 휴대폰 소액결제시 결제 창 내에서 구매자 전화번호 수정 불가능
            ]
          }
        }
      }
      ```

    - P\_RESERVED: string\[]

      **모바일 - 카드 결제 전용 파라미터**

      |형식       |설명                                                      |
      |-----------|----------------------------------------------------------|
      |below1000=Y|1,000원 미만 결제 허용 여부 <br /> - 기본값: 허용하지 않음|

      **모바일 - 휴대폰 소액 결제 전용 파라미터**

      |형식                          |설명                                                                                                                                                                                                                                                                                                                                                     |
      |------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
      |hpp\_default\_corp=통신사 코드|휴대폰 소액결제시 기본 선택되어있는 통신사 <br /> - 기본: 기본 선택되어있는 통신사 없음 <br /> 예) KT 기본 선택 → ”hpp\_default\_corp=KT” 전달 <br /> - SKT: `SKT` <br /> - KT: `KTF` <br /> - LG 유플러스: `LGT` <br /> - 알뜰폰 전체: `MVNO` <br /> - 알뜰폰 CJ 헬로 모바일: `CJH` <br /> - 알뜰폰 티플러스: `KCT` <br /> - 알뜰폰 SK 세븐모바일: `SKL`|
      |hpp\_nofix=Y 또는 N           |휴대폰 소액결제창에 자동 입력되는 buyer\_tel값을 수정할 수 있는지 여부 <br /> - 기본: 수정 가능 <br /> - Y : 수정 불가능 <br /> - N : 수정 가능(기본) <br />                                                                                                                                                                                             |

      ```json
      {
        "channelKey": "{콘솔 내 연동 정보의 채널키}",
        "bypass": {
          "welcome": {
            "P_RESERVED": [
              "below1000=Y", // 1,000원 이하 결제 허용
              "hpp_default_corp=KT", // 휴대폰 소액결제시 KT 기본 선택
              "hppnofix=Y" // 휴대폰 소액결제시 결제 창 내에서 구매자 전화번호 수정 불가능
            ]
          }
        }
      }
      ```

</details>

<details>

<summary>

<strong>웰컴페이먼츠 지원 결제 수단</strong>

</summary>

- card + 에스크로, 다이렉트
- vbank + 에스크로
- trans + 에스크로
- phone
- culturegift
- lpay
- kakaopay
- payco
- tosspay

</details>

</div>

<div class="tabs-content" data-title="빌링키 발급 창 요청">

일반 결제 창 호출 파라미터에서 **customer\_uid**, **customer\_id**값을 추가하면 빌링키 발급 창을 호출할 수 있습니다.
빌링키 발급 창에서 빌링키를 발급 받은 후, 빌링 결제 API를 호출해 해당 빌링키로 결제를 할 수 있습니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", // 빌링키 발급 수단입니다. 웰컴페이먼츠의 경우 'card'만 지원됩니다.
    merchant_uid: "orderMonthly0001", // 고객사에서 채번한 주문 고유 번호입니다.
    name: "빌링키 발급",
    amount: 1000, // 전달한 결제 금액 만큼 실제로 승인되지는 않으며, 단순히 빌링키 발급 창에 표기 용도입니다.
    customer_uid: "your-customer-unique-id", // 고객사가 구매자의 결제 수단을 특정하기 위해 채번한 고유 ID로 빌링키 발급시 필수 입력입니다.
    customer_id: "matthew", // 고객사가 회원에게 부여한 고유 ID입니다.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 빌링키 발급 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    const { imp_uid, merchant_uid } = rsp;

    // 콜백 함수로 전달 받은 imp_uid로 포트원 결제 내역 조회 API를 통해 빌링키 발급 상태를 판단합니다.
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- pg(deprecated)?: 'welcome'

  **PG사 구분코드**

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- merchant\_uid: string

  **주문 번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제 금액**

  **string** 이 아닌 점에 유의하세요.

  전달한 결제 금액 만큼 실제로 승인되지는 않으며, 단순히 빌링키 발급 창에 표기 용도입니다.

- pay\_method: 'card'

  **빌링키 발급 수단**

  웰컴페이먼츠의 경우, 빌링키 발급 수단은 `card`만 허용되며 **반드시 `card`를 필수로 입력해주셔야** 합니다.

- customer\_uid: string

  **빌링키 발급 수단 고유 ID**

  고객사가 구매자의 빌링키 발급 수단을 특정하기 위해 채번한 고유 번호로 빌링키 발급시 필수 입력입니다.

- customer\_id?: string

  **구매자 고유 ID**

  고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다.

- buyer\_name: string

  **구매자 이름**

  주의: 웰컴페이먼츠의 경우 구매자 이름은 필수 입력입니다.

- buyer\_tel: string

  **구매자 연락처**

  주의: 웰컴페이먼츠의 경우 구매자 연락처는 필수 입력입니다.

- buyer\_email?: string

  **구매자 이메일 주소**

- m\_redirect\_url?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  주의: 웰컴페이먼츠의 경우 **모바일 환경에서 필수 입력**입니다.

- notice\_url?: string | string\[]

  **트랜잭션 종료 후 웹훅이 발송 될 고객사 서버 URL**

  주의: notice\_url 파라미터 설정시, 콘솔에 설정 된 웹훅 URL은 override 되며 notice\_url에 전달 한 주소로만 웹훅이 발송됩니다.

- period?: object

  **서비스 제공 기간**

  (from과 to) 또는 interval 중 하나만 입력 가능합니다.

  (from과 to) 웰컴페이먼츠의 경우

  - PC: 날짜까지만 입력 가능하며 시간은 무시됩니다.
  - 모바일: 날짜와 시간 모두 입력 가능하며 초는 무시됩니다.

  * from: string

    **서비스 제공 시작 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * to: string

    **서비스 제공 종료 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * interval?: string

    **서비스 제공 간격**

    - 1m: 매월 정기결제
    - 1y: 매년 정기결제

  - bypass?: object

    - welcome?: object

      - logo\_url?: string

        결제창에 노출 될 메인 로고 URL(크기: 89x19)로 **PC 전용** 파라미터입니다.

      - logo\_2nd?: string

        결제창에 노출 될 서브 로고 URL(크기: 64x13)로 **PC 전용** 파라미터입니다.

</details>

<details>

<summary>

<strong>웰컴페이먼츠 지원 빌링키 발급 수단</strong>

</summary>

- card

</details>

</div>

<div class="tabs-content" data-title="빌링키 발급과 동시에 결제 창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "phone", // 빌링키 발급 및 결제 수단입니다. 웰컴페이먼츠의 경우 'phone'만 지원합니다.
    merchant_uid: "orderNo0001", // 고객사에서 채번한 주문 고유 번호입니다.
    name: "주문명:결제테스트",
    amount: 1000, // 전달한 금액 만큼 실제로 승인이 됩니다.
    customer_uid: "your-customer-unique-id", // 고객사가 구매자의 결제 수단을 특정하기 위해 채번한 고유 ID로 빌링키 발급시 필수 입력입니다.
    customer_id: "matthew", // 고객사가 회원에게 부여한 고유 ID입니다.
    buyer_email: "test@portone.io",
    buyer_name: "구매자이름",
    buyer_tel: "010-1234-5678",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
  },
  function (rsp) {
    // callback 로직
    const { imp_uid, merchant_uid } = rsp;

    // 콜백 함수로 전달 받은 imp_uid로 포트원 결제 내역 조회 API를 통해 결제 상태를 판단합니다.
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- pg(deprecated)?: 'welcome'

  **PG사 구분코드**

- merchant\_uid: string

  **주문 번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제 금액**

  **string** 이 아닌 점에 유의하세요.

- pay\_method: 'phone'

  **빌링키 발급 및 결제 수단**

  - phone (휴대폰소액결제)

  웰컴페이먼츠의 경우, 빌링키 발급 동시에 결제 수단은 `phone`만 허용되며 **반드시 `phone`을 필수로 입력해주셔야** 합니다.

  **빌링키 발급 수단 고유 ID**

  고객사가 구매자의 빌링키 발급 수단을 특정하기 위해 채번한 고유 번호로 빌링키 발급시 필수 입력입니다.

- customer\_id?: string

  **구매자 고유 ID**

  고객사가 구매자를 특정하기 위해 채번한 고유 번호입니다.

- buyer\_name: string

  **구매자 이름**

  주의: 웰컴페이먼츠의 경우 구매자 이름은 필수 입력입니다.

- buyer\_tel: string

  **구매자 연락처**

  주의: 웰컴페이먼츠의 경우 구매자 연락처는 필수 입력입니다.

- buyer\_email?: string

  **구매자 이메일 주소**

- m\_redirect\_url?: string

  **모바일 환경에서 트랜잭션 종료 후 302 리디렉션 될 URL**

  주의: 웰컴페이먼츠의 경우 **모바일 환경에서 필수 입력**입니다.

- notice\_url?: string 또는 **string\[]**

  **트랜잭션 종료 후 웹훅이 발송 될 고객사 서버 URL**

  주의: notice\_url 파라미터 설정시, 콘솔에 설정 된 웹훅 URL은 override 되며 notice\_url에 전달 한 주소로만 웹훅이 발송됩니다.

- confirm\_url?: string

  **트랜잭션 승인 직전 최종 승인 여부를 질의 할 고객사 서버 URL**

  트랜잭션 승인 직전, 포트원 서버에서 confirm\_url로 트랜잭션 최종 승인 여부를 질의하게 되며 200 외의 응답을 받은 경우 트랜잭션은 중단됩니다.

- currency?: 'KRW'

  **결제 통화**

  웰컴페이먼츠의 경우 KRW만 허용되며, 미 입력시 KRW로 자동 적용됩니다.

- digital: boolean

  **실물/컨텐츠 여부**

- period?: object

  **서비스 제공 기간**

  (from과 to) 또는 interval 중 하나만 입력 가능합니다.

  (from과 to) 웰컴페이먼츠의 경우

  - PC: 날짜까지만 입력 가능하며 시간은 무시됩니다.
  - 모바일: 날짜와 시간 모두 입력 가능하며 초는 무시됩니다.

  * from: string

    **서비스 제공 시작 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * to: string

    **서비스 제공 종료 시각**

    - YYYY-MM-DD
    - YYYY-MM-DD HH:mm:ss
    - YYYYMMDD
    - YYYYMMDDHHmmss

  * interval?: string

    **서비스 제공 간격**

    - 1m: 매월 정기결제
    - 1y: 매년 정기결제

- bypass?: object

  - welcome?: object

    - acceptmethod?: string\[]

      **PC - 휴대폰 소액 결제 전용 파라미터**

      |형식                       |설명                                                                                                                                                                                                                                                                                                                                                         |
      |---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
      |hppdefaultcorp(통신사 코드)|휴대폰 소액결제시 기본 선택되어있는 통신사 <br /> - 기본: 기본 선택되어있는 통신사 없음 <br /> 예) KT 기본 선택 → ”hppdefaultcorp(KT)” 전달 <br /> - SKT: `SKT` <br /> - KT: `KTF` <br /> - LG 유플러스: `LGT` <br /> - 알뜰폰 전체: `MVNO` <br /> - 알뜰폰 CJ 헬로 모바일: `CJH` <br /> - 알뜰폰 티플러스: `KCT` <br /> - 알뜰폰 SK 세븐모바일: `SKL` <br />|
      |hppnofix(N 또는 Y)         |휴대폰 소액결제창에 자동 입력되는 `buyer_tel`값을 수정할 수 있는지 여부 <br /> - 기본값: 수정 가능 <br /> - Y : 수정 불가능 <br /> - N : 수정 가능(기본) <br />                                                                                                                                                                                              |

      ```json
      {
        "channelKey": "{콘솔 내 연동 정보의 채널키}",
        "bypass": {
          "welcome": {
            "acceptmethod": [
              "SKIN(#fc6b2d)", // 결제창 배경 색상 #fc6b2d
              "below1000", // 1,000원 이하 결제 허용
              "paypopup", // 안심 클릭을 팝업으로 렌더링
              "onlyeasypaycode(kakaopay:payco)", // 카드 결제창 내 간편결제는 카카오페이와 페이코만 렌더링
              "hppdefaultcorp(KT)", // 휴대폰 소액결제시 KT 기본 선택
              "hppnofix(Y)" // 휴대폰 소액결제시 결제 창 내에서 구매자 전화번호 수정 불가능
            ]
          }
        }
      }
      ```

    - P\_RESERVED?: string\[]

      **모바일 - 휴대폰 소액 결제 전용 파라미터**

      |형식                          |설명                                                                                                                                                                                                                                                                                                                                                     |
      |------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
      |hpp\_default\_corp=통신사 코드|휴대폰 소액결제시 기본 선택되어있는 통신사 <br /> - 기본: 기본 선택되어있는 통신사 없음 <br /> 예) KT 기본 선택 → ”hpp\_default\_corp=KT” 전달 <br /> - SKT: `SKT` <br /> - KT: `KTF` <br /> - LG 유플러스: `LGT` <br /> - 알뜰폰 전체: `MVNO` <br /> - 알뜰폰 CJ 헬로 모바일: `CJH` <br /> - 알뜰폰 티플러스: `KCT` <br /> - 알뜰폰 SK 세븐모바일: `SKL`|
      |hpp\_nofix=Y 또는 N           |휴대폰 소액결제창에 자동 입력되는 buyer\_tel값을 수정할 수 있는지 여부 <br /> - 기본: 수정 가능 <br /> - Y : 수정 불가능 <br /> - N : 수정 가능(기본) <br />                                                                                                                                                                                             |

      ```json
      {
        "channelKey": "{콘솔 내 연동 정보의 채널키}",
        "bypass": {
          "welcome": {
            "P_RESERVED": [
              "below1000=Y", // 1,000원 이하 결제 허용
              "hpp_default_corp=KT", // 휴대폰 소액결제시 KT 기본 선택
              "hppnofix=Y" // 휴대폰 소액결제시 결제 창 내에서 구매자 전화번호 수정 불가능
            ]
          }
        }
      }
      ```

</details>

<details>

<summary>

<strong>웰컴페이먼츠 지원 빌링키 발급과 동시에 결제 수단</strong>

</summary>

- phone

</details>

</div>

</div>

<details>

<summary>

<strong>가능한 트랜잭션 환경</strong>

</summary>

- PC (iframe)
- 모바일 (리디렉션)

</details>


# https://developers.portone.io/opi/ko/integration/pg/v1/tosspay-v2/caution

---
title: 연동 유의사항
description: (신) 토스페이 연동 유의사항을 소개합니다.
targetVersions:
  - v1
---

## 토스페이와 사전 계약이 필요한 경우

아래 기능을 사용하시려면 토스페이에 사전 신청 후 계약이 완료되어야 합니다.

- 비인증 결제

## 공통사항

### 매출전표

카드결제인 경우에만 매출전표가 제공됩니다.

### 현금영수증 발급

토스페이의 경우, 현금영수증 발급에 대한 정보를 따로 입력받지 않고, 앱에 저장된 식별정보로 현금영수증을 발급합니다.
이 떄문에 현금영수증 타입을 `personal`, `corporate`로 지정하더라도 실제로는 다른 타입의 현금영수증이 발급될 수 있습니다.

## 비인증 결제 관련

### 빌링키 발급 웹훅 연동 권장

토스페이 빌링키 발급시 빌링키 발급 웹훅을 반드시 연동하는 것이 좋습니다. `request_pay` 함수의
`notice_url`을 입력하거나 콘솔에서 웹훅 URL을 입력하여 웹훅을 전달받을 수 있습니다. 만약 웹훅을
연동하지 않은 경우 구매자가 빌링키 발급 도중 팝업이나 브라우저를 끄는 행위등으로 인해 고객사의 SDK
콜백 코드가 실행되지 않아 실제로 빌링키가 발급됐지만 발급정보가 누락되는 케이스가 생길 수 있습니다.

- 웹훅 바디는 아래와 같은 형식으로 전달됩니다. 고객사에서는 `merchant_uid`와 `customer_uid`의
  매핑관계를 따로 저장하고 웹훅으로 전달받은 `merchant_uid`와 매핑된 `customer_uid`를 이용해 빌링키
  정보 조회 API를 호출하여 빌링키 정보를 가져올 수 있습니다.

```json title="웹훅 바디 예시"
{
  "imp_uid": "imp_895265444670",
  "merchant_uid": "oid_a12512basbasdasdfqwfasd",
  "status": "paid"
}
```

### customer\_uid 재사용 주의

새로운 빌링키를 발급할 때 기존에 발급했던 빌링키와 동일한 `customer_uid`를 사용하여 기존에 발급된
빌링키를 덮어씌우지 않도록 주의하세요. 토스페이의 경우 한번 빌링키를 발급했던 수단을 재사용 할 수
없으므로 기존에 사용하던 `customer_uid`를 재사용하는 경우 이전에 빌링키를 발급했던 수단은 더 이상
사용 불가능합니다.

### 빌링키 정보 최신화

빌링키가 발급된후에 토스페이앱에서 구매자가 직접 빌링키에 연결된 결제수단을 변경할 수 있습니다. 만약
빌링키에 연결된 결제수단을 서비스 내부적으로 사용하고 있다면 해당 정보를 보여주기 전 포트원의 빌링키
정보 조회 API를 호출하여 데이터를 최신화하기를 권장합니다.

## 결제 취소 관련

### 부가세를 직접 지정한 결제의 부분 취소 요청 시 부가세 입력은 필수

부가세를 직접 지정한 결제를 부분 취소 요청하는 경우 취소 금액의 부가세를 입력해야 합니다. 만약 부분
취소 요청 시 부가세를 입력하지 않는 경우 남은 결제금액의 부가세, 과세금액 정보가 올바르지 않게 될 수
있으며 이후 추가 부분취소 요청 시 취소 가능 과세금액 계산 오류로 취소 요청이 불가능할 수 있습니다.


# https://developers.portone.io/opi/ko/integration/pg/v1/tosspay-v2/readme

---
title: 토스페이(tosspay_v2)
description: 토스페이 연동 방법을 안내합니다.
targetVersions:
  - v1
versionVariants:
  v2: /opi/ko/integration/pg/v2/tosspay-v2
---

<div class="hint" data-style="info">

토스페이(tosspay\_v2)에서는 일반결제 및 정기결제 모두 지원하고 있습니다.
신규 연동하시는 고객사께서는 해당 가이드를 참고하여 진행해주세요.

</div>

## 1. 토스페이 채널 설정하기

[결제대행사 채널 설정하기](https://developers.portone.io/opi/ko/integration/ready/readme#3-결제대행사-채널-설정하기) 페이지의 내용을 참고하여 채널 설정을 진행합니다.

(관련 이미지 첨부)

## 2. 최신 JavaScript SDK로 업데이트하기 <a href="#2." id="2." />

토스페이 결제는 최신 SDK에서만 지원되는 기능입니다.

```html title="JS SDK"
<script src="https://cdn.iamport.kr/v1/iamport.js"></script>
```

<div class="hint" data-style="info">

**토스페이를 연동하기 위해서는 위에 안내된 JS SDK를 이용하셔야 합니다.**

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)문서를 통해 최신 SDK를 설치해주세요.

</div>

## 3.결제 요청하기

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme) `IMP.request_pay(param, callback)`을 호출하여
결제창을 호출할 수 있습니다. **결제결과**는 PC의 경우 `IMP.request_pay(param, callback)` 호출 후
**callback**으로 수신되고
모바일의 경우 **m\_redirect\_url** 로 리디렉션됩니다.

<div class="tabs-container">

<div class="tabs-content" data-title="인증 결제창 요청">

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "tosspay", // 'tosspay_card', 'tosspay_money' 도 지원됩니다.
    merchant_uid: "orderMonthly0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    amount: 1004,
    card: {
      useInstallment: false,
    },
    bypass: {
      expiredTime: "2023-12-02 11:00:00", //결제 만료시간
      cashReceiptTradeOption: "CULTURE", //현금영수증 발급타입
    },
  },
  function (rsp) {
    // callback 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `tosspay_v2` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  - `tosspay_money` : 계좌결제만 허용합니다.
  - `tosspay_card` : 카드결제만 허용합니다.
  - `tosspay` : 모든 결제수단을 허용합니다.

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- amount: number

  **결제금액**

  string 이 아닌점에 유의하세요

- card.useInstallment: boolean

  **할부 사용 가능 여부**

- bypass?: object

  - expiredTime: string

    **결제 만료 기한**

    `yyyy-MM-dd HH:mm:ss` 의 형식입니다.

    입력하지 않을 경우, 기본값인 15분으로 설정됩니다. 최대 60분까지 설정할 수 있습니다.

  - cashReceiptTradeOption: string

    **현금영수증 발급 대상 타입**

    전달하지 않을경우, 기본값은 `GENERAL` 입니다.

    - `GENERAL`: 일반 (default)
    - `CULTURE`: 문화비
    - `PUBLIC_TP`: 교통비

</details>

</div>

<div class="tabs-content" data-title="비인증 결제창 요청">

인증결제창 호출 파라미터에서 **customer\_uid**, **customer\_id**값을 추가하면 비인증 결제창을 호출할 수 있습니다.
비인증 결제창에서 빌링키를 발급받은 후 해당 빌링키로 결제를 요청합니다.

```ts title="Javascript SDK"
IMP.request_pay(
  {
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "tosspay", // 'tosspay'만 지원됩니다.
    merchant_uid: "orderMonthly0001", // 상점에서 관리하는 주문 번호
    name: "최초인증결제",
    customer_id: "matthew", //고객사가 회원에게 부여한 고유 ID로 필수 입력.
    customer_uid: "your-customer-unique-id", // 필수 입력.
    buyer_email: "test@portone.io",
    buyer_name: "포트원",
    buyer_tel: "02-1234-1234",
    m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
    notice_url: "{빌링키 발급 결과를 받을 URL}",
  },
  function (rsp) {
    // callback 로직
  },
);
```

<details>

<summary>

<strong>주요 파라미터 설명</strong>

</summary>

- channelKey: string

  **채널키**

  결제를 진행할 채널을 지정합니다.

  포트원 콘솔 내 \[결제 연동] - \[연동 정보] - \[채널 관리] 에서 확인 가능합니다.

  (최신 JavaScript SDK 버전부터 사용 가능합니다.)

- pg(deprecated)?: string

  **PG사 구분코드**

  `tosspay_v2` 로 지정하면 됩니다.

  <div class="hint" data-style="warning">

  `pg` 파라미터는 지원 중단 예정입니다.

  JS SDK를 가장 최신 버전으로 업그레이드 후 `channelKey` 파라미터로 채널 설정(PG사 구분)을 대체해주세요.

  </div>

- pay\_method: string

  **결제수단 구분코드**

  `tosspay` 로 지정하면 됩니다.

- merchant\_uid: string

  **주문번호**

  매번 고유하게 채번되어야 합니다.

- customer\_uid: string

  **빌링키 발급을 위한 결제 수단을 특정하는 고유 번호**

  빌링키 발급시 필수 입력

- customer\_id: string

  **구매자 식별자**

  주의: (신) 토스페이 빌링키 발급시 필수 입력으로 입력 길이는 **50자**로 제한됩니다.

- m\_redirect\_url: string

  **리다이렉트 URL**

  리디렉션 방식으로 진행할 경우, 트랜잭션 종료 이후 302 리디렉션 될 고객사 URL

  (신) 토스페이의 경우 모바일 환경에서 **리디렉션 방식으로 빌링키 발급창이 렌더링 되기 때문에 필수입력입니다.**

- notice\_url?: string

  **빌링키 발급 완료 웹훅 전달 URL**

  빌링키 발급이 완료됐을 때 웹훅이 전달될 URL입니다. 해당 파라미터가 전달되지 않은 경우 콘솔에 등록한 웹훅 주소로 웹훅이 발송됩니다. **(신) 토스페이의 경우 SDK 콜백만으로 빌링키 발급여부를 체크하는 경우 정보 유실 가능성이 있기 때문에, 반드시 웹훅으로 빌링키 발급여부를 체크하길 권장합니다**.

</details>

</div>

<div class="tabs-content" data-title="비인증 결제 API">

**빌링키로 결제 요청하기**

빌링키 발급 시 전달한 `customer_uid`를 이용해서 재결제([**POST /subscribe/payments/again**](https://developers.portone.io/api/rest-v1/nonAuthPayment?v=v1#post%20%2Fsubscribe%2Fpayments%2Fagain)) REST API를 다음과 같이 호출합니다.

```ts
await fetch("https://api.iamport.kr/subscribe/payments/again", {
  method: "POST",
  headers: {
    Authorization: `Basic ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    customer_uid: "customer_uid", // [필수 입력] 빌링키 발급시 전달 한 빌링키와 1:1 매핑되는 ID
    merchant_uid: "merchant_uid", // [필수 입력] 주문 번호
    amount: 1000, // [필수 입력] 결제 금액
    name: "주문명", // 주문명
    cash_recipt_type: "person", // 현금영수증 발급 타입
    bypass: {
      tosspay_v2: {
        cashReceiptTradeType: "GENERAL", // 현금영수증 발급 대상 타입
        sendFailPush: false, // 결제 실패 시 토스페이앱 푸시알람 발송 여부
      },
    },
  }),
});
```

### (신) 토스페이 빌링키 결제 전용 파라미터

- bypass?: object

  - tosspay\_v2?: object

    - cashReceiptTradeOption?: string

      **현금영수증 발급 대상 타입**

      - `GENERAL`: 일반 (default)
      - `CULTURE`: 문화비
      - `PUBLIC_TP`: 교통비

    - tosspay\_v2.cashReceiptTradeOption?: boolean

      **결제실패 푸시알람 사용 여부**

      - `false`: 미사용 (default)
      - `true`: 사용

</div>

</div>


# https://developers.portone.io/api/backward-compatibility

---
title: API 하위호환성 지원
description: 포트원이 보장하는 V1, V2 API 하위호환성에 대한 내용입니다.
targetVersions:
  - v1
  - v2
---

### 하위호환성

포트원이 제공하는 모든 Stable API에 대해 아래와 같은 하위호환성이 보장됩니다.

1. 현재 사용 가능한 입력 형식은 앞으로도 사용할 수 있습니다.
   - 입력 형식 내 필드 정의가 삭제되지 않습니다.

   - 필수 입력 정보가 추가되거나, 선택 입력 정보가 필수로 변경되지 않습니다.
     - 오로지 선택 입력 정보만 추가될 수 있습니다.

   - 하위 필드의 형식(타입) 또한 위 규칙을 지키며 변경됩니다.

   - enum 타입의 값이 삭제되지 않습니다.

2. 출력 형식이 확장될 수 있지만, 축소되지 않습니다.
   - 출력 형식 내 필드 정의가 삭제되지 않습니다.

   - 사용 중인 필수 출력 정보가 선택사항으로 변경되거나 출력 시 누락되지 않습니다.
     - 이미 존재하는 용례 내에서는 필수 출력 정보가 언제나 유지됩니다.
     - 단, **기능이 추가 및 확장되는 등 새로운 용례로 사용될 때의 출력 정보에 한하여 선택사항으로 변경될 수 있습니다.**

   - 하위 필드의 형식(타입) 또한 위 규칙을 지키며 변경됩니다.

   - 단, **새로운 필드 또는 enum 값, oneOf 케이스가 추가될 수 있습니다.**
     - 알지 못하는 필드 및 값이 주어지더라도 crash가 발생하지 않도록 유의하여 개발해주세요.
     <!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

     - 새로운 필드 및 값이 추가되는 경우 사전 공지를 통해 안내드립니다.

     <!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

`UNSTABLE`이 표기된 일부 API의 경우, 위 하위호환성 정책과 무관하게 변경 및 지원 종료될 수 있으니 이용에 유의하세요.


# https://developers.portone.io/opi/ko/etc/recon

---
title: PG 거래대사 가이드
description: >-
  PG 거래대사는 PG사와 간편결제사로부터 정산 받는 금액 및 상세내역을 포트원 콘솔에서 PG가 여러 개여도 한 번에 자동 대사된 데이터를
  확인할 수 있는 통합 조회 서비스입니다.
---

## PG 거래대사 유의사항

- 포트원을 통해 연동된 아래 12개의 PG사 내역을 조회할 수 있습니다.
  - 지원 PG : **KCP, KG이니시스, 나이스페이먼츠, 토스페이, 네이버페이, 다날, 페이코, (구)토스페이먼츠, 토스페이먼츠, 카카오페이, 엑심베이, 헥토파이낸셜**
  - 고객사가 포트원을 통하지 않고 PG 직연동한 경우 지원 불가
  - 9/26 이후 지원 예정 PG사 : KPN, 하이픈, KSNET

- 고객사 주문번호를 정확하게 확인하기 위해서는 **실제 사용하시는 주문번호의 연동**이 필요합니다.

- 네이버페이를 연동하실 경우 정산 API 키 등록이 필요합니다.

## 거래대사 및 정산/입금대사 소개

### 1. 거래대사

- 포트원을 통해 발생한 고객사 주문 데이터와 PG사의 결제 데이터를 비교하여 신뢰도 높은 데이터를 제공합니다.

- **주요 기능**
  - 일별로 고객사 거래 데이터와 PG 정산 데이터를 매칭합니다.
  - 여러 PG사와 결제수단을 한 번에 관리할 수 있습니다.
  - PG사 어드민에서 직접 취소한 거래 건도 확인하실 수 있습니다.

### 2. 정산/입금대사

- 입금된 정산금의 상세 내역을 확인할 수 있는 자료를 제공합니다.

- **주요 기능**
  - 해당일의 PG 정산금 상세내역을 통해 입금 금액의 상세내역을 쉽게 확인할 수 있습니다.

### 3. 어떤 점이 좋나요?

- 다양한 PG사와 결제수단, 통화를 통합하여 일관된 기준으로 거래 및 정산 데이터를 제공하므로,
  매출 및 결제 내역의 일치성을 높여주고 매출 인식에 참조할 수 있습니다.

- 거래대사를 통해 고객사 거래 데이터와 PG사의 데이터를 비교하고 정산이 확정된 정산금 데이터를 추가하므로,
  데이터 오류를 최소화할 수 있습니다.

## 상세 기능 설명

### 1. 거래내역

- 일 총거래건수와 거래금액, 총 거래 이상 건수, 거래이상금액을 확인 가능합니다.

### 2. 정산내역

- 일 정산금과 수수료를 확인 가능할 수 있습니다.

### 3. 거래건별조회

- 고객사 주문번호, PG 거래번호, 포트원 거래번호를 하나의 엑셀에서 볼 수 있습니다.
- 결제수단별 상세내역을 확인할 수 있습니다.
- 공급가액, 면세가액, 부가세, PG 정산 수수료, PG 정산 수수료 부가세

## 메뉴별 기능 설명

### 1. 거래 정산내역

거래일 기준 고객사 거래데이터, 혹은 정산일 기준 정산데이터를 확인할 수 있습니다.

- **정산내역**에서는 정산일 기준으로 데이터가 조회됩니다.

- **거래내역**에서는 거래일 기준으로 데이터가 조회되고 이는 PG사와 동일한 기준입니다.

- 조회 기간으로 기본 조회 후, 조회기간 내 상점아이디와 PG 고객 식별아이디, 그리고 대사상태값으로
  필터링 가능합니다.
  - 아무 것도 선택하지 않았을 경우 이번달 1일부터 어제까지의 기간이 선택됩니다.

#### 1.1 거래 내역

(관련 이미지 첨부)

**(1) 요약대시보드**

- 설정한 조건으로 조회한 거래 결과의 요약을 확인할 수 있습니다.

- 총 거래건수와 거래금액 : 설정한 조건으로 조회한 총 거래 건수와 거래 금액을 확인할 수 있습니다.

- 총 거래 이상건수와 총 거래 이상 금액 : 설정한 조건으로 조회한 총 거래 이상 건수와 거래 이상 금액을 확인할 수 있습니다.
  - 통화를 선택하여 통화별로 확인하실 수 있으며 통화가 다른 경우 KRW 로 환산하지 않습니다.
  - 거래 이상 금액 : PG사 결제 금액과 고객사가 포트원에 연동한 주문금액을 비교했을 때 불일치하거나, PG사와 고객사 정보 어느 한 쪽이 없어서 비교할 수 없는 경우의 금액의 합계

**(2) 필터**

- 대사상태, PG 고객식별아이디와 상점아이디로 필터링할 수 있습니다. (복수 선택 가능)
- 필터 초기화 선택 시 조회기간과 필터가 모두 초기화됩니다.

**(3) 표 설정**

- 표시되는 항목을 선택하여 항목을 **커스터마이징** 할 수 있습니다.

(관련 이미지 첨부)

- 초기 설정값은 모두 선택사항으로 설정 화면에서 제외할 수 있습니다.
- 초기화를 통해 초기 설정값으로 되돌아갈 수 있습니다.

**(4) 엑셀 다운로드**

- 조회 조건에 해당하는 **전체 데이터를 엑셀로 다운로드**할 수 있습니다.

**(5) 테이블 조회**

- 일별 합계 (해당 날짜에 대한 상점아이디, PG 고객 식별아이디의 전체 합계)
  - 합계 내 PG 고객 식별 아이디로 상세 조회 가능

- 개별 항목
  - 거래내역 - 거래일, 대사상태(대사일치, 불일치, 불능, 수집이전거래건), 상점아이디,
    PG 고객 식별아이디&결제대행사, 거래건수, 거래금액, 취소건수, 취소금액, 거래 이상 건수, 거래 이상 금액

- 조회일자가 같고, 통화가 다를 경우 다음 열에 표시됩니다.

- 참고 사항
  - 수집이전 거래건 : 오래된 거래건이 늦게 정산되어, PG사에서 수집 가능한 거래정보가 없는 경우에 해당합니다.
    정산정보 외에 일부 거래정보가 누락되어 있을 수 있습니다.

#### 1.2 정산 내역

(관련 이미지 첨부)

**(1) 요약대시보드**

- 설정한 조건으로 조회한 거래 결과의 요약을 확인할 수 있습니다.
- 총 정산과 정산금액 : 설정한 조건으로 조회한 총 정산 건수와 정산 금액을 확인할 수 있습니다.

**(2) 필터**

- PG 고객식별아이디와 상점아이디로 적용 가능 (복수 선택 가능)
- 필터 초기화 선택 시 조회기간과 필터가 모두 초기화됩니다.

**(3) 표 설정**

- 표시되는 항목을 선택하여 항목을 **커스터마이징** 할 수 있습니다.

(관련 이미지 첨부)

- 초기 설정값은 모두 선택사항으로 설정 화면에서 제외할 수 있습니다.
- 초기화를 통해 초기 설정값으로 되돌아갈 수 있습니다.

**(4) 엑셀 다운로드**  조회 조건에 해당하는 **전체 데이터를 엑셀로 다운로드**할 수 있습니다.

**(5) 테이블 조회**

- 일별 합계 (해당 날짜에 대한 상점아이디, PG 고객 식별아이디의 전체 합계)
  - 선택하여 합계 내 PG 고객 식별 아이디로 상세 조회 가능
  - 정산내역 - 정산일, 상점아이디, PG 고객식별아이디&결제대행사, 정산건수, 정산금액, 취소건수, 취소금액, 거래금액, PG 수수료, PG 수수료 부가세

- 조회일자가 같고, 통화가 다를 경우 다음 열에 표시됩니다.

### 2. 거래 건별조회

고객사 거래정산데이터 상세내역을 확인할 수 있습니다.

- 조회 기간으로 기본 조회 후, 조회기간 내 상점아이디와 PG 고객 식별아이디, 대사상태, 거래상태(승인, 부분취소, 취소, 기타 취소)값으로 필터링 가능합니다.
  - 아무 것도 선택하지 않았을 경우 이번달 1일부터 어제까지의 기간이 선택됩니다.

- 기타 취소는 식별할 수 없는 취소건(unclassified cancel) 에 해당합니다.

(관련 이미지 첨부)

**(1) 검색**

- 설정한 조건에 해당하는 **조회 리스트**에서, 검색명과 정확히 일치하는 내역을 확인할 수 있습니다.
  - 주문명 검색
  - PG 거래 번호
  - 고객사 거래 번호
  - 포트원 거래 번호

- 참고 사항 : 유사 검색 기능은 지원되지 않습니다.
  ex) “포트원”을 검색하기 위해 “포트”를 검색하여도 “포트원”이 조회되지 않습니다.

**(2) 요약대시보드**

- 설정한 조건으로 조회한 거래 결과의 요약을 확인할 수 있습니다.

- 총 거래금액 : 설정한 조건으로 조회한 총 거래 금액을 확인할 수 있습니다.

- 총 거래 이상 금액 : 설정한 조건으로 조회한 총 거래 이상 금액을 확인할 수 있습니다.
  - 거래이상금액 : PG사 결제 금액과 고객사가 포트원에 연동한 주문금액을 비교했을 때 불일치하거나,
    PG사와 고객사 정보 어느 한 쪽이 없어서 비교할 수 없는 경우의 금액의 합계

**(3) 조회기준일**

- 거래일/정산일 을 선택할 수 있습니다.

**(4) 필터**

- 대사상태, 거래 구분, 거래 유형, PG 고객식별아이디와 상점아이디 적용 가능 (복수 선택 가능)
- 필터 초기화 선택 시 조회기간과 필터가 모두 초기화됩니다.
- 대사 상태 - “대사 불일치” 상태값의 종류

|사유                |설명                                                                                                     |비고                                                                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|결제 금액 불일치    |두 원장의 결제 금액이 불일치합니다.                                                                      |금액 차이가 있으면 무조건 불일치로 표시                                                                                                                      |
|면세 금액 불일치    |두 원장의 면세금액이 불일치합니다.                                                                       |금액 차이가 있으면 무조건 불일치로 표시                                                                                                                      |
|부가세 금액 불일치  |두 원장의 부가세 금액이 불일치합니다.                                                                    |금액 차이가 있으면 무조건 불일치로 표시                                                                                                                      |
|에스크로 여부 불일치|두 원장에서 에스크로(안전결제)여부가 불일치합니다.                                                       |Y/N 다르면 불일치 표시                                                                                                                                       |
|할부 개월 수 불일치 |두 원장의 카드 할부개월 수가 불일치합니다.                                                               |할부개월수 다르면 불일치 표시                                                                                                                                |
|결제일자 불일치     |두 원장의 결제일시가 불일치합니다. 시스템으로 인해 차이날 수 있는 근소한 차이의 경우는 일치로 처리합니다.|두 원장의 결제일시가 다른 일자에 일어나면 불일치 표시 (자정 기점으로 PG와 포트원간의 전송시간에 의해 거래일자가 변경되는 경우도 다른 일자일 경우 불일치 표시)|

**(5) 표 설정** 표시되는 항목을 선택하여 항목을 **커스터마이징** 할 수 있습니다.

(관련 이미지 첨부)

- 초기 설정값은 모두 선택사항으로 설정 화면에서 제외할 수 있습니다.
- 초기화를 통해 초기 설정값으로 되돌아갈 수 있습니다.

**(6) 엑셀 다운로드**

- 조회 조건에 해당하는 **전체 데이터를 엑셀로 다운로드**할 수 있습니다.

**(7) 테이블 조회**

- 조회조건 반영
  - 거래정산내역에서 검색을 원하는 리스트를 선택하여 거래건별조회로 진입했을 경우 해당 조건으로 조회된 결과가 보여집니다.
    - 조회기준일, 조회기간, 필터가 반영됩니다.

  - 사이드바 메뉴에서 직접 선택하여 거래건별조회로 진입했을 경우 이번달 1일부터 어제까지의 모든 데이터가 조회됩니다.

- 개별 항목
  - 거래일, 대사상태(대사일치, 불일치, 불능, 수집이전거래건), 상점아이디, PG 고객 식별아이디&결제대행사, 고객사 결제번호(주문번호), PG 결제번호, 포트원 결제번호, 주문명, 거래유형, 거래금액, 공급가액, 면세가액, 부가세, PG수수료, PG수수료 부가세, 정산금액, 거래 이상 금액, 에스크로

**(8) 거래유형 상세정보**

- 거래 유형에 마우스오버시 카드 형태로 상세 정보가 보여집니다.

|거래유형   |상세내용                                      |
|-----------|----------------------------------------------|
|카드       |발급사, 매입사, 카드 승인번호, 카드 할부개월수|
|상품권     |타입, 승인번호                                |
|계좌이체   |은행이름, 승인번호                            |
|가상계좌   |은행이름, 승인번호                            |
|간편결제   |간편결제사 이름                               |
|모바일 결제|통신사                                        |
|기타       |기타                                          |

## 수식 설명

|금액                 |공식                                                                                                                          |
|---------------------|------------------------------------------------------------------------------------------------------------------------------|
|정산건수             |조회기간내 (승인 건수 - (취소) - (부분 취소)) + 기타정산건(수집이전거래건수; 승인과 취소, 부분 취소 데이터가 없는 정산 데이터)|
|정산금액             |조회기간 내 (승인금액 - (취소 금액) - (부분 취소 금액) - (수수료) - 수수료 VAT)                                               |
|거래 건수            |조회기간 내 (승인) 건수                                                                                                       |
|거래 금액            |조회기간 내 승인 금액                                                                                                         |
|취소 건수            |조회기간내 (취소) + (부분취소) + (기타취소) 건수                                                                              |
|취소 금액            |조회기간 내 (취소 금액) + (부분취소) + (기타취소) 금액                                                                        |
|공급가액             |거래금액-(할인금액)-(면세가액)-(부가세)                                                                                       |
|과세사업자 면세가액=0|                                                                                                                              |
|부가세               |(거래금액-면세가액)/11 후 반올림                                                                                              |
|과세사업자 면세가액=0|                                                                                                                              |
|거래 이상금액        |거래불일치 금액 절대값 + 거래대사 불능금액                                                                                    |
|PG 수수료 부가세     |PG사에서 값을 주지 않을 경우 PG수수료/10 후 반올림                                                                            |

## FAQ

- 데이터는 전체 기간 조회 가능한가요?
  - 최대 3개월까지 조회가능합니다.

- 여러 PG사의 데이터를 통합할 때, 각 PG사별 특성이나 차이점을 어떻게 반영하나요?
  - PG사 데이터를 모두 확인할 수 있는 통합 인터페이스를 만들었고, 공통으로 가져올 수 있는 값들을 기본값으로 반영하고,
    PG사에 따라 제공하는 값들은 있는 경우 제공하고 있습니다.

- 거래대사 작업 후 불일치하는 데이터가 발견될 경우, 어떤 프로세스로 해결하나요?
  - 고객사가 인지할 수 있도록 어떤 건이 있는지, 총액은 얼마인지, 어디의 불일치인지 알려줍니다.
    재무데이터를 임의로 수정하는 것은 서비스 제공사가 할 수 있는 일이 아닙니다.

- 실시간 데이터 업데이트가 가능한가요? 아니면 일별 업데이트인가요?
  - 전날 기준 거래, 정산데이터를 가져와서 매일 업데이트합니다.

- 복합 결제(예: 신용카드+포인트)의 경우, 데이터 처리는 어떻게 이루어지나요?
  - 별도로 구분되지 않고 간편결제로 표시됩니다.

- 환불, 부분 취소 등의 예외 케이스는 어떻게 처리되나요?
  - 거래 상태값에 부분취소, 취소가 있습니다.

- 다국어 및 다중 통화 지원 계획은 어떻게 되나요?
  - 데이터에 있으면 모든 통화를 보여줍니다.

- 누락 시 대응 계획은 무엇인가요?
  - 데이터 수집시 PG사에 데이터가 없거나, 타임 아웃 등으로 누락이 일어나면 포트원에서 자동으로 파악이
    가능하여 개발팀이 확인하고 다시 수집합니다.


# https://developers.portone.io/opi/ko/readme

---
title: 포트원 결제 연동 Doc
description: 포트원 결제 연동 가이드입니다. 빠른 시간 안에 결제를 연동할 수 있게 도와드립니다.
targetVersions:
  - v1
  - v2
---



<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="danger">

2024년 9월 1일부로 포트원 V1 API에 대해 일부 보안 규격이 지원 종료됩니다.

자세한 사항은 [TLS 지원 범위](https://developers.portone.io/opi/ko/support/tls-support?v=v1)를 참고해주세요.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## 연동 준비하기

결제 연동 전 회원 가입부터 채널 연동 방법까지 확인할 수 있습니다.

[결제 연동 준비하기](https://developers.portone.io/opi/ko/integration/ready/readme)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

## 결제 연동하기

해당 가이드를 통해 결제창을 손쉽게 연동할 수 있습니다.

[인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/auth)

[비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth)

[결제취소(환불) 연동하기](https://developers.portone.io/opi/ko/integration/cancel/v1/basic)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

## 인증결제 연동하기

해당 가이드를 통해 결제창(SDK) 결제를 손쉽게 연동할 수 있습니다.

[인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout)

## 수기(키인)결제 연동하기

해당 가이드를 통해 API 결제를 손쉽게 연동할 수 있습니다.

[수기(키인) 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/keyin)

## 빌링키 결제 연동하기

해당 가이드를 통해 빌링키 결제를 손쉽게 연동할 수 있습니다.

[빌링키 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/readme)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 결제 결과 누락 없이 수신받기

해당 가이드를 통해 안정적으로 결제 결과를 수신받을 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

[웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v1)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

## 본인인증 연동하기

해당 가이드를 통해 본인인증을 손쉽게 연동할 수 있습니다.

[본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/readme-v2)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

## 기타 서비스 연동하기

해당 가이드를 통해 부가적인 서비스 연동을 손쉽게 처리할 수 있습니다.

[본인인증 연동하기](https://developers.portone.io/opi/ko/extra/identity-verification/v1/readme)

[결제 URL 생성하기](https://developers.portone.io/opi/ko/extra/link-pay/readme-v1)

## TIP

결제창 연동 시 꼭 확인해 보세요.

[면세금액 결제방법](https://developers.portone.io/opi/ko/support/tax)

[오픈 전 체크리스트](https://developers.portone.io/opi/ko/integration/checklist/readme-v1)

[컨펌 프로세스](https://developers.portone.io/opi/ko/extra/confirm-process/readme-v1)

[포트원 결제 플로우](https://developers.portone.io/opi/ko/support/flow)

[대표상점과 하위상점](https://developers.portone.io/opi/ko/support/agency-and-tier)

[결제대행사별 빌링키 획득 규칙](https://developers.portone.io/opi/ko/support/code-info/pg)

[PG사별 은행코드](https://developers.portone.io/opi/ko/support/code-info/pg-1)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## 관리자 콘솔 사용하기

관리자 콘솔 사용 방법을 안내합니다.

[관리자 콘솔 소개](https://developers.portone.io/opi/ko/console/guide/readme)

## API

포트원에서 제공하는 API 명세를 확인할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<a class="m-4" href="https://developers.portone.io/api/rest-v1">

<span>API 문서 바로가기</span>

<i class="i-ic-baseline-chevron-right inline-block text-2xl" />

</a>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<a class="m-4" href="https://developers.portone.io/api/rest-v2">

<span>API 문서 바로가기</span>

<i class="i-ic-baseline-chevron-right inline-block text-2xl" />

</a>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## SDK

결제 연동 JS SDK 명세를 확인할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[JavaScript SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-sdk/readme)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

## FAQ

[자주 묻는 질문](https://developers.portone.io/opi/ko/support/faq/undefined)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## PG사별 결제 연동 가이드

각 PG사별 결제 연동 가이드를 안내합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

[결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v1/readme)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v2/readme)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/support/contact

---
title: 직접 문의하기
description: 기술지원 문의를 위한 연락처 정보입니다.
targetVersions:
  - v1
  - v2
---

포트원 결제 연동 및 운영 과정에서 기술적인 어려움을 겪고 있다면, 아래 메일로 문의하세요.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- V1: <support@portone.io>
- V2: <tech.support@portone.io>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- V2: <tech.support@portone.io>
- V1: <support@portone.io>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/support/tls-support

---
title: TLS 지원 범위
description: 포트원 v1 API의 TLS 지원 범위 및 설정 가이드를 확인할 수 있습니다.
---

2024년 9월 1일부터 포트원을 이용하는 고객님들의 개인정보 및 결제정보를 더욱 안전하게 보호하기 위해
v1 API 서버(api.iamport.kr)의 TLS 버전 및 Cipher Suite 지원 범위가 변경됩니다.

## 변경사항 요약

- HTTP 평문 통신에 대한 지원이 중단됩니다.
- TLS 1.0, 1.1 버전에 대한 지원이 중단됩니다.
- 보안성이 떨어지는 일부 Legacy Cipher Suite 들에 대한 지원이 중단됩니다.

<table class="table-tls-support">

<thead>

<tr>

<th>Protocol</th>
<th>Cipher Suite</th>
<th>2024-09-01 전</th>
<th>2024-09-01 이후</th>

</tr>

</thead>

<tbody>

<tr>

<td>HTTP</td>
<td>

<i>N/A</i>

</td>
<td rowspan="3" class="supported">O</td>
<td rowspan="3" class="unsupported">X</td>

</tr>

<tr>

<td>TLSv1.0</td>
<td>

<i>(omitted)</i>

</td>

</tr>

<tr>

<td>TLSv1.1</td>
<td>

<i>(omitted)</i>

</td>

</tr>

<tr>

<td rowspan="18">TLSv1.2</td>
<td>AES256-SHA</td>
<td rowspan="10" class="supported">O</td>
<td rowspan="10" class="unsupported">X</td>

</tr>

<tr>

<td>AES128-SHA</td>

</tr>
<tr>

<td>AES128-GCM-SHA256</td>

</tr>
<tr>

<td>AES128-SHA256</td>

</tr>
<tr>

<td>AES256-GCM-SHA384</td>

</tr>
<tr>

<td>AES256-SHA256</td>

</tr>
<tr>

<td>ECDHE-ECDSA-AES128-SHA</td>

</tr>
<tr>

<td>ECDHE-RSA-AES128-SHA</td>

</tr>
<tr>

<td>ECDHE-RSA-AES256-SHA</td>

</tr>
<tr>

<td>ECDHE-ECDSA-AES256-SHA</td>

</tr>

<tr>

<td style="display:none" />

<td>ECDHE-ECDSA-AES128-SHA256</td>
<td rowspan="8" class="supported">O</td>
<td rowspan="8" class="supported">O</td>

</tr>

<tr>

<td>ECDHE-RSA-AES128-SHA256</td>

</tr>
<tr>

<td>ECDHE-ECDSA-AES256-SHA384</td>

</tr>
<tr>

<td>ECDHE-RSA-AES256-SHA384</td>

</tr>
<tr>

<td>ECDHE-ECDSA-AES128-GCM-SHA256</td>

</tr>
<tr>

<td>ECDHE-RSA-AES128-GCM-SHA256</td>

</tr>
<tr>

<td>ECDHE-ECDSA-AES256-GCM-SHA384</td>

</tr>
<tr>

<td>ECDHE-RSA-AES256-GCM-SHA384</td>

</tr>

<tr>

<td rowspan="3">TLSv1.3</td>
<td>TLS-AES-128-GCM-SHA256</td>
<td rowspan="3" class="supported">O</td>
<td rowspan="3" class="supported">O</td>

</tr>

<tr>

<td>TLS-AES-256-GCM-SHA384</td>

</tr>
<tr>

<td>TLS-CHACHA20-POLY1305-SHA256</td>

</tr>

</tbody>

</table>

<br />

<details>

<summary>

<strong>HTTP 평문 통신 지원을 중단하는 이유</strong>

</summary>

TLS를 이용하지 않는 평문 HTTP 통신은 데이터를 암호화하지 않고 평문 상태로 전송하기 때문에 다양한
종류의 공격에 몹시 취약합니다. 먼저 별도의 암호화가 없기 때문에 모든 종류의 [도청]과
[스니핑 공격]에 의해 API 키나 민감한 고객정보가 공격자에게 쉽게 노출될 수 있습니다.
뿐만 아니라 [DNS spoofing]이나 [ARP spoofing]과 같은 [Active MITM 공격][MITM]을 통해
공격자가 결제 API 요청이나 응답을 변조하는 것까지도 가능하기 때문에, 정보 유출뿐 아니라
결제금액을 위조하거나 결제상품, 결제사용자를 바꿔치기하는 유형의 공격도 가능합니다.

따라서 암호화되지 않은 평문 HTTP 통신을 실제 운영환경에서 사용하여선 절대 안 됩니다. 포트원 v1
API를 평문 HTTP 통신으로 호출하고 계시는 고객님께선 즉시 API endpoint를 <http://api.iamport.kr> 에서
<https://api.iamport.kr> 로 바꿔주셔서, TLS를 활성화시켜주셔야만 합니다.

[도청]: https://en.wikipedia.org/wiki/Network_eavesdropping

[스니핑 공격]: https://en.wikipedia.org/wiki/Sniffing_attack

[DNS spoofing]: https://en.wikipedia.org/wiki/DNS_spoofing

[ARP spoofing]: https://en.wikipedia.org/wiki/ARP_spoofing

[MITM]: https://en.wikipedia.org/wiki/Man-in-the-middle_attack

</details>

<details>

<summary>

<strong>TLS 1.0, 1.1 지원을 중단하는 이유</strong>

</summary>

TLS 1.0과 1.1은 각각 1999년, 2006년에 공개된 보안 표준으로, [POODLE]이나 [BEAST]와 같은 널리
알려진 여러 공격들에 취약합니다. 국제 인터넷 표준화 기구인 IETF는 2021-03-23 [RFC 8996]를 통해
TLS 1.0과 1.1을 deprecate 시켰으며, AWS, Google[^tls-1.0-chrome], Apple, Microsoft 등 많은 국제 기업들이 자사 제품
및 API 이용 시 TLS 1.2 미만 버전에 대해 제한을 두고 있습니다.[^tls-1.0-browsers] TLS 1.0 및 1.1에 존재하는 문제
및 취약점들은 아래와 같습니다.

[POODLE]: https://en.wikipedia.org/wiki/POODLE

[BEAST]: https://en.wikipedia.org/wiki/Transport_Layer_Security#BEAST_attack

[RFC 8996]: https://www.rfc-editor.org/rfc/rfc8996.html

1. [BEAST] (Browser Exploit Against SSL/TLS) 공격

   [BEAST] 공격은 [중간자 공격][MITM]을 동반하는 공격으로, TLS 1.1 미만 버전에 적용 가능합니다.

   1.1 버전 미만의 TLS는 [스트림 암호] 대신 [블록 암호]를 사용할경우, [Mode of operation]으로
   무조건 [CBC]를 사용해야만 했습니다. [CBC] 모드는 예측 가능한 [IV]를 사용할 경우
   Chosen-plaintext attack에 취약해진다는 문제를 갖고있는데, TLS 1.0은 이후 버전들과는 다르게
   항상 이전 블록의 암호화 결과를 사용하도록 만들어져있어, IV의 예측이 가능했고, HTTP는 특성상
   헤더 부분의 정보 엔트로피가 낮아 공격자가 높은 확률로 암호문을 복호화하는데에 성공할 수
   있었습니다.

   [0/n split, 1/n-1 split]과 같은 취약점 우회수단이 몇가지 존재하나 이는 클라이언트측에서만
   적용할 수 있는 우회수단이고, TLS 1.0을 사용하면서 서버측에서 BEAST 취약점을 우회하려면
   [블록 암호] 자체를 사용하지 않아야 합니다. 문제는 TLS 1.0에서 블록 암호를 비활성화할 경우 사용할 수
   있는 남은 유일한 암호화 수단은 더더욱 취약한것으로 알려진 [RC4] 뿐이기 때문에, 결론적으로 TLS
   1.0은 사용하지 않아야 합니다.

   TLS 1.2는 AES [GCM]과 같은 [AEAD] 지원, [ChaCha20]과 같은 안전한 [스트림 암호] 지원을 통해 이
   문제를 해결하였습니다.

   [스트림 암호]: https://en.wikipedia.org/wiki/Stream_cipher

   [블록 암호]: https://en.wikipedia.org/wiki/Block_cipher

   [Mode of operation]: https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation

   [CBC]: https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_block_chaining_\(CBC\)

   [IV]: https://en.wikipedia.org/wiki/Initialization_vector

   [0/n split, 1/n-1 split]: https://www.cryptologie.net/article/378/1n-1-split-to-circumvent-beast/

   [RC4]: https://en.wikipedia.org/wiki/RC4

   [GCM]: https://en.wikipedia.org/wiki/Galois/Counter_Mode

   [AEAD]: https://en.wikipedia.org/wiki/Authenticated_encryption

   [ChaCha20]: https://en.wikipedia.org/wiki/Salsa20#ChaCha_variant

2. 약한 해시 함수 사용

   TLS 1.2 이후 버전과는 달리, TLS 1.0과 1.1은 [cryptographic hash function]이 필요한 곳에 무조건
   [MD5]나 [SHA-1]과 같이 오래되고 약한 해시함수를 쓰도록 정해져있습니다. [MD5], [SHA-1] 모두
   지금은 상당히 낮은 비용의 [chosen-prefix collision attack]이 발견되어서[^sha-1-collision],
   [HMAC] 이외의 용도로는 사용하지 말아야합니다. 따라서 TLS 1.2 미만 버전은 사용하지
   않아야합니다.

   [cryptographic hash function]: https://en.wikipedia.org/wiki/Cryptographic_hash_function

   [MD5]: https://en.wikipedia.org/wiki/MD5

   [SHA-1]: https://en.wikipedia.org/wiki/SHA-1

   [chosen-prefix collision attack]: https://en.wikipedia.org/wiki/Collision_attack#Chosen-prefix_collision_attack

   [HMAC]: https://en.wikipedia.org/wiki/HMAC

</details>

<details>

<summary>

<strong>일부 Legacy Cipher Suite 들에 대한 지원을 중단하는 이유</strong>

</summary>

Cipher Suite란 TLS 통신시 사용되는 암호 알고리즘의 집합을 의미합니다. TLS 1.2는 다양한 Cipher
Suite들을 지원하지만 이들 모두가 안전한 것은 아닙니다. 포트원은 아래 기준을 모두 충족하는 안전한
Cipher Suite들만을 지원하도록 정책을 변경하였습니다.

- [완전 순방향 비밀성(Perfect Forward Secrecy)][PFS]을 보장할 것

  TLS 통신 중 잠재적으로 발생할 수 있는 위험 요소 중 하나는, 키교환 알고리즘에 의해 생성된
  세션키가 유출되었을 때 해당 세션키의 수명이 일시적이지 않다면 과거 세션에서 주고받았던
  데이터들까지 모두 해독될 수 있다는 것입니다. [완전 순방향 비밀성][PFS]을 보장한다는 것은 매
  세션마다 새로운 키를 생성함으로써 키가 유출되더라도 과거의 통신이 해독되는 것을 막는 것입니다.
  완전 순방향 비밀성이 보장될 경우, TLS 프로토콜에 새로운 취약점이 발견되어 통신이 복호화당하는
  사태가 발생하더라도, 공격자에게 노출하는 기밀의 범위를 크게 줄일 수 있습니다.

- [MD5], [SHA-1] 등 약한 해시 함수를 쓰지 않을 것

- [RC4], 3DES 등 약한 암호화 알고리즘을 사용하지 않을 것, 국제표준 암호화 알고리즘만을 사용할 것

[PFS]: https://en.wikipedia.org/wiki/Forward_secrecy

</details>

---

## TLS 버전 및 Cipher Suite 업그레이드 가이드

포트원은 TLS 1.3 으로의 업그레이드를 권장합니다.

### Java 6

Java 6은 기본적으로 TLS 1.2를 지원하지 않습니다.

(이미지 첨부: 출처: https\://www\.ateam-oracle.com/post/transport-level-security-tls-and-java)

JDK 6u121 버전부터는 TLS 1.2를 지원하지만 default TLS 버전은 여전히 1.0일뿐더러 Java 6의 JCE(Java
Cryptography Extension) Provider가 타원곡선 암호화 알고리즘을 지원하지 않기때문에 [완전 순방향
비밀성][PFS]이 보장되지 않아 여전히 Legacy Cipher Suite를 써야합니다.

따라서, Java 6에서 TLS 통신을 안전하게 하려면 아래 두 방법 중 하나를 택해야 합니다.

<details>

<summary>

<strong>JDK 8u261 이상으로 버전 업그레이드</strong>

</summary>

가장 바람직한 방법은 공식 지원이 이미 종료된 Java 6의 사용을 멈추고, Java 8 이상의 버전으로
업그레이드하는 것입니다. Java 8 부터 기본 TLS 버전이 1.2이고, JDK 8u261 이상부터는 TLS 1.3 통신을
지원하기때문에 TLS 통신을 안전하게 할 수 있습니다.

Java 7의 경우, Java 6과 마찬가지로 보안 업데이트가 중단된 상태이고 기본으로 TLS 1.0을 사용하기
때문에 Java 7로의 업그레이드는 권장하지 않습니다.

</details>

<details>

<summary>

<strong>서드파티 라이브러리를 통한 TLS 버전 업데이트</strong>

</summary>

자바 업그레이드가 곤란할 경우, 서드파티 라이브러리를 사용해 TLS 버전을 업그레이드할 수 있습니다.

TLS 1.2 및 [완전 순방향 비밀성][PFS]를 지원하는 서드파티 JCE(Java Cryptography Extension) 및
JSSE(Java Secure Socket Extension) 구현체를 설치할 경우, 자바 업그레이드 없이 TLS 통신을 안전하게
할 수 있습니다.

본 가이드에서는 [Bouncy Castle]이라는 오픈소스 라이브러리를 이용한 예시를 설명합니다.

1. [Bouncy Castle] 홈페이지에서 아래의 세 파일을 다운받습니다.

   - bcprov-jdk15to18-_VERSION_.jar
   - bctls-jdk15to18-_VERSION_.jar
   - bcutil-jdk15to18-_VERSION_.jar

2. 세 jar 파일을 `${JAVA_HOME}/jre/lib/ext` 디렉토리에 복사합니다.

3. `${JAVA_HOME}/jre/lib/security` 디렉토리의 "java.security" 파일을 아래와 같이 수정합니다.



4. 오라클이 배포하는 "[jce\_policy-6.zip][jce_policy-6.zip]" 파일을 다운로드 받습니다.

5. 압축을 푼 후 "US\_export\_policy.jar", "local\_policy.jar" 두 파일을 \
   `${JAVA_HOME}/jre/lib/security` 디렉토리 내에 덮어씌웁니다.

[Bouncy Castle]: https://www.bouncycastle.org/latest_releases.html

[jce_policy-6.zip]: https://www.oracle.com/java/technologies/jce-6-download.html

</details>

### Java 7

Java 7의 경우 TLS 1.2를 지원하기는 하나 default TLS 버전은 여전히 1.0입니다.

(이미지 첨부: 출처: https\://www\.ateam-oracle.com/post/transport-level-security-tls-and-java)

뿐만 아니라 JDK 버전에 따라 포트원에서 허용하는 Cipher Suite 조건인 "Forward secrecy 지원"과 "SHA-1 미사용"을 만족하는
Cipher Suite를 지원하지 않기도 합니다.
본 가이드에서는 Java 7에서 포트원 보안 규격에 맞는 TLS 버전 및 Cipher suite 설정에 대한 방법 3가지를 제공합니다.

<details>

<summary>

<strong>JDK 8u261 이상으로 버전 업그레이드</strong>

</summary>

가장 바람직한 방법은 공식 지원이 이미 종료된 Java 7의 사용을 멈추고, Java 8 이상의 버전으로
업그레이드하는 것입니다. Java 8 부터 기본 TLS 버전이 1.2이고, JDK 8u261 이상부터는 TLS 1.3 통신을
지원하기때문에 TLS 통신을 안전하게 할 수 있습니다.

</details>

<details>

<summary>

<strong>JDK 7u321 이상으로 버전 업그레이드, 1.2 사용 설정</strong>

</summary>

JDK 7u321 버전부터 기본 Cipher Suite가 [완전 순방향 비밀성][PFS]을 지원하고 [SHA-1] 등 약한 해시를
사용하지 않는것으로 변경되었습니다. 따라서 JDK 7u321 이상으로 업그레이드 할 경우, 기본 TLS 버전
수정을 제외한 별도의 설정이 필요하지 않습니다. JDK 7u321 미만의 버전을 사용할 경우, 최소한 JDK
7u191 이상의 버전을 사용해야 안전한 Cipher Suite들을 사용할 수 있습니다.

JDK 버전업이 완료되었다면, 아래 두 방법 중 하나를 골라 기본 TLS 버전을 1.0에서 1.2로 올려야 합니다.

1. System property

   Java 애플리케이션 구동 시 아래와 같은 system property 설정을 추가하면, 기본 TLS 버전이 1.2로
   변경됩니다.

   ```bash
   java -Djdk.tls.client.protocols="TLSv1.2" ...
   ```

   코드에 강제로 TLS 1.2 이외의 버전을 사용하도록 하는 코드가 있을 경우, 에러가 발생할 수
   있습니다.

2. Socket client의 TLS 버전 지정

   아래와 같이 자바 코드수준에서도 TLS socket client가 사용할 TLS 버전을 직접 지정해줄 수
   있습니다.

   ```java
   // SSLSocket, SSLEngine, SSLServerSocket API를 사용하는 경우
   sslSocket.setEnabledProtocols(new String[] {"TLSv1.2"});

   // SSLContext 생성자를 사용하는 경우
   SSLContext ctx = SSLContext.getInstance("TLSv1.2");

   // SSLParameters API를 사용하는 경우
   sslParameters.setProtocols(new String[] {"TLSv1.2"});
   ```

</details>

<details>

<summary>

<strong>서드파티 라이브러리를 통한 TLS 버전 업데이트</strong>

</summary>

Java 6 가이드와 마찬가지 방법으로 서드파티 라이브러리를 통해 TLS 버전을 업데이트할 수 있습니다.

</details>

<p style="height:5rem" />

---

[^tls-1.0-chrome]: ["TLS 1.0 and TLS 1.1 - Chrome Platform Status"](https://chromestatus.com/feature/5759116003770368). chromestatus.com. Retrieved 2024-03-25.

[^tls-1.0-browsers]: Bright, Peter (2018-10-17). ["Apple, Google, Microsoft, and Mozilla come together to end TLS 1.0"](https://arstechnica.com/gadgets/2018/10/browser-vendors-unite-to-end-support-for-20-year-old-tls-1-0/). Retrieved 2024-03-25.

[^sha-1-collision]: Gaëtan Leurent; Thomas Peyrin (2020-01-05). ["SHA-1 is a Shambles - First Chosen-Prefix Collision on SHA-1 and Application to the PGP Web of Trust"](https://eprint.iacr.org/2020/014.pdf) (PDF).


# https://developers.portone.io/sdk/ko/readme

---
title: 포트원 SDK 소개
description: 포트원에서 제공하는 SDK 가이드입니다.
targetVersions:
  - v1
  - v2
---

포트원은 고객사에서 보다 쉽게 서비스를 이용하실 수 있도록 프로그래밍 언어 / 플랫폼 별 SDK를 제공하고 있습니다.

## 브라우저 SDK

브라우저 환경에서 포트원 서비스를 연동할 때 사용하는 자바스크립트 SDK입니다. 브라우저에서 포트원 SDK를 호출하여 결제, 본인인증 등을 진행하게 됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

[JavaScript SDK](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/readme)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[JavaScript SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-sdk/readme)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 모바일 SDK

JS SDK를 모바일 환경에서 모바일 플랫폼 네이티브 코드(Kotlin, Swift 등) 으로 쉽게 사용할 수 있도록 만들어진 SDK입니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

[모바일 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v1-mobile-sdk/readme)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

[모바일 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-mobile-sdk/readme)

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

## 서버 SDK

웹훅을 포함한 포트원 V2 REST API를 여러 언어에서 쉽게 사용할 수 있도록 만들어진 SDK입니다.

[서버 SDK 레퍼런스](https://developers.portone.io/sdk/ko/v2-server-sdk/readme)

## 샘플 프로젝트

SDK를 지원하지 않는 플랫폼을 포함하여 다양한 플랫폼에서 결제 연동 예시를 확인하실 수 있도록 [portone-sample GitHub 저장소](https://github.com/portone-io/portone-sample)에서 샘플 프로젝트를 제공하고 있습니다.
일부 플랫폼의 경우 devcontainers 환경에서 바로 실행해보실 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/console/guide/account

---
title: 상점 계정 관리
description: >-
  포트원 콘솔에서 하위 상점을 생성하여 상점별로 결제 거래 건을 분리하여 관리할 수 있으며, 해당 상점을 관리할 수 있는 계정을 별도로
  생성하여 권한을 나눌 수 있습니다. 이에 대해 안내합니다.
---

## 포트원 관리자콘솔 계정 체계

- 최고 관리자 계정 (Owner): 관리자 콘솔 가입시 회원가입한 계정을 고객사를 대표하는
  관리자 계정으로 칭합니다. 해당 계정은 모든 기능을 사용할 수 있습니다.
  - 하위 상점 및 하위 계정 생성이 가능합니다.
  - 긴급 연락처 관리, 사업자 정보 등록이 가능합니다.
  - 해당 계정을 **탈퇴하는 경우** 고객 정보와 종속되어 있는 하위 상점 및 하위 계정이 모두 삭제됩니다.

- 관리자 계정 (Admin) : Owner가 생성할 수 있으며, 모든 기능을 사용할 수 있습니다.
  - 상점 당 1개만 생성가능합니다.
  - 하위 상점 및 하위 계정 생성이 가능합니다.
  - 긴급 연락처 관리, 사업자 정보 등록이 가능합니다.

- 고객사 매니저 계정 (Manager) : Owner 또는 Admin이 생성할 수 있습니다.
  - 상점 계정 관리 및 결제 연동은 조회만 가능합니다.
  - 나머지 관리자콘솔 기능은 사용할 수 있습니다.
  - 해당 권한으로 계정 생성 개수 제한이 없습니다.

- 고객사 개발 계정 (Dev):  Owner 또는 Admin이 생성할 수 있습니다.
  - 결제 연동 기능만 사용이 가능하며, 상점 계정 관리는 조회만 가능합니다.
  - 이 외의 관리자콘솔 기능은 사용할 수 없습니다.
  - 해당 권한으로 계정 생성은 10개까지 가능합니다.

- 고객사 조회 계정 (Read Only) : Owner 또는 Admin 또는 Manager가 생성할 수 있습니다.
  - 해당 계정은 모든 기능의 조회만 가능합니다.
  - 엑셀 다운로드 권한은 별로도 설정할 수 있습니다.

- 하위 상점 매니저 계정(Manager) : Owner 또는 Admin 또는 하위 상점의 Manager가 생성할 수 있습니다.
  - 해당 계정은 소속된 하위 상점의 모든 기능을 사용할 수 있습니다.
  - 상점 계정 관리 및 사업자 정보를 조회할 수 있습니다.

- 하위 상점 조회 계정(Read Only) : Owner 또는 Admin 또는 하위 상점의 Manager가 생성할 수 있습니다.
  - 해당 계정은 소속된 하위 상점의 모든 기능에 대해 조회만 가능합니다.

## 관리자 계정 관리

_파란색 부분은 사용 가능한 버튼 표기입니다_

(이미지 첨부: 관리자 계정 시점)

(이미지 첨부: 그 외 계정 시점)

- 관리자 계정은 해당 화면에서 고객사에 소속된 계정들을 신규 생성, 발급, 역할 및 정보 수정, 삭제 하실 수 있습니다.
- 나머지 계정은 해당 화면을 통해 고객사에 소속된 계정들을 조회하실 수 있습니다.

![](</gitbook-assets/ko/image (175).png>) ![](</gitbook-assets/ko/image (126).png>)

## 고객사, 하위 상점 체계

- 고객사: 포트원에서 고객사이란 고유한 사업자등록번호를 가지고있는 사업체로 정의합니다.
  유일한 예외는 타 고객사들을 위해 결제를 개발해주시는 에이전시 뿐 입니다.

- 하위상점: 고객사는 서비스 및 상품군 별, 지역별, 등등 사업을 나누어 관리자 콘솔로 관리하고
  결제를 연동할 수 있습니다. 해당사항으로 나뉘는 단위를 하위상점으로 정의합니다.
  - 결제 연동: 고객사가 신청한 결제수단 및 대행사를 특정 하위상점에 관리자 콘솔에서 할당할 수 있습니다.
  - 하위상점 계정: 하위상점에 소속된 계정은 하위상점관련된 기능 및 결제건만 확인 하실 수 있습니다.

## 하위 상점 관리

### 고객사 관리자 계정 시점

(이미지 첨부: 고객사 관리자 계정 계정 시점)

- 고객사 관리자 계정은 하위상점을 추가, 수정 할 수 있으며 해당 하위상점의 소속된 계정을 생성, 수정, 삭제 하실 수 있으십니다.

#### 하위상점 추가 및 수정

![](</gitbook-assets/ko/image (237).png>) ![](</gitbook-assets/ko/image (200).png>)

- 상점 명 입력, 사용할 결제채널 선택, 서비스 url 입력, 담당자 정보 입력, 티어코드 입력 후 하위상점을 추가하실 수 있습니다
  - 사용할 결제 채널은 전자결제 신청하기를 통해서 발급되고 연동에서 관리중인 고객사의 결제채널을 할당 해 줄 수 있습니다.
  - 타 하위상점에게 이미 할당된 결제 채널은 중복 할당할 수 없습니다.
  - 티어코드는 하위상점 url에서 포트원 결제 sdk 호출시 import.agency(‘티어코드’)로 결제를 호출 하실 수 있습니다.

#### 하위계정 추가

![](</gitbook-assets/ko/image (267).png>) ![](</gitbook-assets/ko/image (173).png>)

- 계정 아이디, 역할 (Manager, Read Only), 메모를 입력하신 뒤 하위계정을 생성 하실 수 있습니다.

### 그 외 계정 시점

(이미지 첨부: 관리자 계정 외 고객사 계정 시점)

(이미지 첨부: 하위 상점 매니저 계정 시점)

(이미지 첨부: 매니저 계정 외 하위 상점 계정 시점)

## 하위상점별 웹훅 설정 <a href="#agency-webhook" id="agency-webhook" />

하위상점 수정에서 결제알림 동일 설정 옵션을 해제하면 하위상점별 웹훅 설정을 할 수 있습니다.

1. 상점/계정 관리에서 하위상점 관리 > 별도로 웹훅을 설정할 하위상점 선택
2. 하위상점 수정에서 `결제알림은 대표 상점과 동일하게 설정할게요` 체크박스 해제
3. 결제 연동에서 별도로 웹훅을 설정할 하위상점으로 변경
4. 결제알림(Webhook) 관리 탭에서 설정

(관련 이미지 첨부)

하단의 결제알림 동일설정 체크박스를 해제해주세요

(관련 이미지 첨부)

웹훅 연동을 원하시는 하위상점을 선택한 뒤 결제알림 관리 탭에서 웹훅을 수정해주세요.


# https://developers.portone.io/opi/ko/console/guide/billing-payments

---
title: 빌링결제 내역 조회
description: >-
  포트원을 통해 발생한 빌링키 결제 내역을 상태별로 조회하고 결제 예약일 변경, 예약 해지, 결제 재시도, 결제 재예약 기능을 이용하여 빌링
  결제 건을 관리할 수 있으며, 결제 실패 건에 대한 일괄 재시도를 자동화해주는 리커버리 기능에 대해 안내합니다.
targetVersions:
  - v1
  - v2
---

<div class="hint" data-style="info">

빌링결제 상세 내역 조회 및 캘린더의 경우 상점별로 데이터가 표시됩니다.
하위상점을 생성하여 사용하시는 경우 오른쪽 상단의 상점을 선택하여 해당 상점의 데이터를 확인할 수 있습니다.

</div>

## 상세 내역 조회

(이미지 첨부: \[결제] - \[빌링결제 내역 조회] 예시 화면)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

발급한 빌링키를 이용하여 [비 인증 결제(빌링키) API](https://developers.portone.io/api/rest-v1/nonAuthPayment#post%20%2Fsubscribe%2Fpayments%2Fagain)
혹은 [결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule)로
시도된 거래 건을 상태별로 조회할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

발급한 빌링키를 이용하여 [빌링키 결제 API](https://developers.portone.io/api/rest-v2/payment#post%20%2Fpayments%2F%7BpaymentId%7D%2Fbilling-key)
혹은 [결제 예약 API](https://developers.portone.io/api/rest-v2/payment.paymentSchedule#post%20%2Fpayments%2F%7BpaymentId%7D%2Fschedule)로
시도된 거래 건을 상태별로 조회할 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 조회 기준

- **상태별 최종 업데이트 일시**(default) : 예약, 성공, 실패, 해지 상태 건에 대해 최종 업데이트 일시를 기준으로 조회합니다.
  (결제 예약건의 경우 예약 예정 시각을 기준으로 조회됩니다.)

- **빌링결제 등록 일시** : 예약결제의 경우 예약건이 등록된 일시를 기준으로,
  빌링키 일회성 결제 건의 경우 결제를 시도한 일시를 기준으로 조회합니다.

- **오늘** : 오늘 00시 00분 00초부터 23시 59분 59초로 설정됩니다.

- **최근7일** : 오늘을 기준으로 D-7일로 설정됩니다.

- **이번 달** : 이번달 1일부터 말일까지로 설정됩니다.

- **올해** : 올해 1월 1일부터 12월 31일까지로 설정됩니다.

### 필터

필터에 따라 빌링 결제 내역을 필터링하여 조회할 수 있습니다. 필터는 결제대행사에 따라 다중 선택할 수 있습니다.

#### 결제대행사

- **전체** : 모든 결제대행사의 거래를 조회합니다.

- 결제대행사 필터는 하나의 결제대행사에 모든 `pg_provider`가 포함됩니다.
  - KG이니시스 : inicis, html5\_inicis, inicis\_v2
  - 나이스페이먼츠 : nice, nice\_v2
  - 페이팔 : paypal, paypal\_v2
  - 스마트로 : smartro, smartro\_v2
  - 토스페이 : tosspay, tosspay\_v2
  - 토스페이먼츠 : uplus, tosspayments

### 내역검색

빌링 결제 정보를 검색하여 거래건을 특정할 수 있습니다.

<ul>

<li>**빌링결제 아이디** : 빌링결제 아이디(`schedule_id`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>**고객사 거래번호** : 고객사 거래번호(`merchant_uid`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**포트원 빌링키** : 포트원 빌링키(`customer_uid`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 식별 정보** : 고객식별정보 (`customer_id`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 이름** : 고객 이름 (`buyer_name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**상품 이름** : 상품 이름 (`name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>**고객사 거래번호** : 고객사 거래번호(`paymentId`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**포트원 빌링키** : 포트원 빌링키(`billingKey`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 식별 정보** : 고객식별정보 (`customer.id`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 이름**: 고객 이름 (`customer.name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**상품 이름** : 상품 이름 (`orderName`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</ul>

### 리커버리

(이미지 첨부: \[결제] - \[빌링결제 내역 조회] - \[리커버리] 화면 예시)

전날 실패한 모든 빌링결제를 매일 설정한 시간에 자동으로 재시도합니다.
예를 들어 리커버리 시간을 16시로 설정한 경우 매일 16시에 전날 00시\~23시59분까지 발생한 결제 실패 건에 대해
일괄 재시도를 시도합니다. 이 때, 결제 실패된 경우 다음 날 리커버리 항목에 포함되며, 결제 성공 상태가 될 때까지
계속해서 시도합니다.

리커버리 시간 설정은 01시부터 23시까지 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

결제예약 API(Schedule API)를 이용한 결제 예약 건 중 결제 실패 상태인 거래 건에 한하여 리커버리 기능을 사용할 수 있습니다.
비 인증 결제(빌링키) API(Again API) 건에 대한 리커버리 기능은 상반기 내로 업데이트될 예정입니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

빌링키 결제 API 및 결제 예약 API를 이용한 결제 건 중 결제 실패 상태인 거래 건에 한하여 리커버리 기능을 사용할 수 있습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 상태별 상세조회

- **전체** : 모든 빌링 결제 상태의 거래를 조회합니다.
- **예약** : 예약 (status : `Scheduled`) 상태인 거래 건만 표시됩니다.
- **성공** : 결제 대기 (status : `Pending`) 및 결제 성공 (status : `Succeeded`) 상태인 거래 건만 표시됩니다.
- **실패** : 실패 (status : `Failed`) 상태인 거래 건만 표시됩니다.
- **해지** : 해지 (status : `Revoked`) 상태인 거래 건만 표시됩니다.

#### 예약

<ul>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>결제예약 API(Schedule API)를 이용한 결제 예약 건 중 결제 예약 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>결제 예약 API를 이용한 결제 예약 건 중 결제 예약 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<li>예약 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.</li>

<li>

해당 모달에서 결제 건의 상세정보, 예약해지 및 변경, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있습니다.

- 예약 해지 변경 카테고리에서는 예약 해지 또는 예약일 변경을 할 수 있습니다.

  <details>

  <summary>예약 상태 건 클릭 시 상세 조회 화면 예시</summary>

  (관련 이미지 첨부)

  </details>

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

</li>

</ul>

#### 성공

<ul>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>결제예약 API(Schedule API)를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되어 결제 성공 상태인 거래 건입니다.</li>
<li>비 인증 결제(빌링키) API(Again API)를 이용한 결제 건 중 정상적으로 결제가 진행되어 결제 성공 상태인 겨래 건입니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>결제 예약 API를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되어 결제 성공 상태인 거래 건입니다.</li>
<li>빌링키 결제 API를 이용한 결제 건 중 정상적으로 결제가 진행되어 결제 성공 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<li>성공 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.</li>

<li>

해당 모달에서 결제 건의 상세정보, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있으며,
  해당 건의 결제 내역 조회 화면으로 이동할 수 있습니다.

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

</li>

</ul>

#### 실패

<ul>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>결제예약 API(Schedule API)를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되지 못해 결제 실패 상태인 거래 건입니다.</li>
<li>비 인증 결제(빌링키) API(Again API)를 이용한 결제 건 중 정상적으로 결제가 진행되지 못해 결제 실패 상태인 겨래 건입니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>결제 예약 API를 이용한 결제 예약 건 중 정상적으로 예약 결제가 진행되지 못해 결제 실패 상태인 거래 건입니다.</li>
<li>빌링키 결제 API를 이용한 결제 건 중 정상적으로 결제가 진행되지 못해 결제 실패 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<li>

빌링 결제 실패는 한도초과, 잔액부족, 정지된 카드, 유효기간 만료 등 사용자 이유
혹은 사용 불가한 빌링키, 올바르지 않은 결제 요청 등의 이유로 발생할 수 있습니다.

</li>

<li>실패 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.</li>

<li>

해당 모달에서 결제 건의 상세정보, 재시도 재예약, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있습니다.

- 재시도 재예약 카테고리에서는 해당 건을 즉시 재시도하거나 결제를 재예약할 수 있습니다.

  <details>

  <summary>실패 상태 건 클릭 시 상세 조회 화면 예시</summary>

  (관련 이미지 첨부)

  </details>

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

</li>

</ul>

#### 해지

<ul>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>결제예약 API(Schedule API)를 이용한 결제 예약 건 중 예약 해지 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>결제 예약 API를 이용한 결제 예약 건 중 예약 해지 상태인 거래 건입니다.</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<li>해지 상태의 빌링 결제 건을 클릭하면 오른쪽에 모달이 표시됩니다.</li>

<li>

해당 모달에서 결제 건의 상세정보, 재예약, 예약 결제 히스토리를 확인할 수 있습니다.

- 상세정보 카테고리에서는 고객정보, 예약정보 등을 확인할 수 있습니다.

- 재예약 카테고리에서는 해당 건을 다시 재예약할 수 있습니다.

  <details>

  <summary>해지 상태 건 클릭 시 상세 조회 화면 예시</summary>

  (관련 이미지 첨부)

  </details>

- 예약 결제 히스토리 카테고리에서는 해당 거래 건의 상태 변경 히스토리를 확인할 수 있습니다.

</li>

</ul>

## 빌링결제 캘린더

(이미지 첨부: \[결제] - \[빌링결제 캘린더] 예시 화면)

빌링결제 캘린더에서는 빌링결제 건에 대한 월간/일간 데이터를 확인할 수 있습니다.

### 기준

- 페이지 최초 진입 시 해당 월을 기준으로 데이터가 표시되며, 월을 조정하여
  해당 월의 빌링결제 데이터를 확인할 수 있습니다.

- 기본적으로 거래 **금액**을 기준으로 표시되며, 토글을 클릭하여 **건수**를 기준으로 데이터 확인이 가능합니다.

- 기본적으로 **KRW**를 기준으로 표시되며, 해외 통화 빌링 결제 거래건이 있는 경우 해당 통화를 선택할 수 있으며
  각 통화별 빌링결제 데이터를 확인할 수 있습니다.

- 해당 월의 결제예약 / 결제성공 / 결제실패 / 예약해지 상태별로 거래 금액 혹은 건수 데이터를 확인할 수 있습니다.

- 해당 일의 결제예약 / 결제성공 / 결제실패 / 예약해지 상태별로 거래 금액 혹은 건수 데이터를 확인할 수 있습니다.


# https://developers.portone.io/opi/ko/console/guide/channel-manage

---
title: 연동 정보
description: >-
  포트원 결제 모듈을 사용하기 위한 연동 설정을 관리할 수 있습니다. 결제대행사 채널 관리, 식별코드 및 API Keys, 결제알림(웹훅)
  관리, 추가 설정 관리 방법에 대해 안내합니다. 
targetVersions:
  - v1
  - v2
---

## 채널 관리

포트원 결제 모듈 연동 시 사용할 결제대행사 채널을 추가합니다. 결제대행사 선택 후 결제 모듈에 따라 지원되는 결제 방식 및 결제 수단, 포트원 결제 모듈이 다르므로
고객사에 알맞은 채널을 선택하여 추가해야 합니다.

### 연동 방법

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

<div class="hint" data-Style="info">

채널 등록 시 결제대행사별 저장하는 파라미터가 다릅니다. 파라미터 정보 확인은 하단의 \[결제대행사 선택하여 연동하기]를 확인해주세요.

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

<div class="hint" data-Style="info">

채널 등록 시 결제대행사별 저장하는 파라미터가 다릅니다. 파라미터 정보 확인은 하단의 \[결제대행사 선택하여 연동하기]를 확인해주세요.

</div>

</div>

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="hint" data-style="info">

채널 추가 시 입력해야 하는 값은 결제대행사별로 다르므로
[결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v2/readme)
를 참고하여 확인 후 입력 및 저장해야합니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

채널 추가 시 입력해야 하는 값은 결제대행사별로 다르므로
[결제대행사 선택하여 연동하기](https://developers.portone.io/opi/ko/integration/pg/v1/readme)
를 참고하여 확인 후 입력 및 저장해야합니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

## 식별코드 및 API Keys

포트원 결제 연동시 필요한 연동 정보를 확인할 수 있습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] → \[식별코드·API Keys] 메뉴에서 \[V1 API]를 선택하여 고객사 식별코드, REST API Key, REST API Secret을 확인할 수 있습니다.

(관련 이미지 첨부)

### 고객사 식별코드

- 포트원 가입 시 사용자에게 자동으로 생성되는 **고유값**입니다.
- 결제창 연동 시 사용되며, 결제 호출 시 \[객체 초기화]에 사용됩니다.
- **기술 문의** 시 해당 값을 공유해 주시면 빠르게 문제 해결을 도와드릴 수 있습니다.

### REST API Key, REST API Secret란?

- V1 API 호출 시 사용되는 Access Token을 발급할 때 사용되는 값입니다.
- REST API Secret은 재발급이 가능하며, 재발급 즉시 기존의 Secret은 사용이 불가능합니다.

<div class="hint" data-style="danger">

REST API Key, REST API Secret **결제 거래 건을 컨트롤할 수 있는 민감 정보**로 외부로 유출되지 않도록 주의가 필요합니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

### 스토어 아이디(Store ID) 복사하기

포트원 V2 결제 모듈 연동 시 필요한 스토어 아이디(Store ID)를 복사할 수 있습니다.

(관련 이미지 첨부)

- 관리자 콘솔 화면에서 \[결제 연동] → \[연동 관리] 화면에서 스토어 아이디를 복사할 수 있습니다.

<div class="hint" data-style="info">

**스토어 아이디(Store ID)란?**

- 포트원 가입 시 \[대표 상점]이 생성되며, 자동으로 생성되는 고유값 입니다.
- 추가로 하위 상점을 생성하는 경우 **상점마다 고유하게 부여**됩니다.
- 결제창 연동 시 사용되며, 결제 호출 시 `storeId` 파라미터에 해당 값을 넣어야 합니다.
- **기술 문의 시 해당 값을 공유**해 주시면 빠르게 문제 해결을 도와드릴 수 있습니다.

</div>

### V2 API Secret 발급하기

V2 API를 연동하기 위해서는 V2 API Secret을 별도로 발급한 후 사용이 가능합니다.
V2 API Secret 은 **Owner, Admin** 계정에서만 발급 및 삭제가 가능합니다.

(관련 이미지 첨부)

- 관리자 콘솔 화면에서 \[결제연동] → \[연동 관리] → \[식별코드·API Keys] 메뉴에서 \[V2 API]를 선택합니다.
- `새로운 API Secret 발급`을 클릭합니다.
- Secret 목록에 표시될 `Secret 이름`을 입력하고 `만료 기한`을 선택한 후 `생성`을 클릭합니다.
- 생성된 Secret을 복사합니다. `API Secret을 확인했습니다`를 누른 후엔 Secret 값을 확인할 수 없으니 주의해 주세요.

<div class="hint" data-style="danger">

API Secret 발급 직후에만 값을 확인할 수 있습니다. 페이지를 벗어나면 API Secret 확인이 불가하오니 복사한 후 임의의 장소에 저장하여 사용하세요.
만약, API Secret 값을 잊어버리신 경우 새로 발급받아 사용해야 합니다.

</div>

<div class="hint" data-style="info">

**API Secret이란?**

- API 사용 시 Authorization 헤더 인증을 위해 사용되는 값입니다.

- API Secret을 발급받으신 후, 선호하는 [인증 방식](https://developers.portone.io/api/rest-v2?v=v2#auth)
  을 선택하여 API를 사용하실 수 있습니다.

</div>

<div class="hint" data-style="danger">

API Secret은 **결제 거래 건을 컨트롤할 수 있는 민감 정보**로 고객사 서버에서만 사용되어야 하며,
브라우저 등 외부에 노출되어서는 안 됩니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 결제알림(Webhook) 관리

결제 거래 건에 이벤트 발생 시 포트원에서 고객사가 설정한 URL로 웹훅을 전송합니다.
최신 상태의 결제 결과 처리를 위해서 결제 연동 시 웹훅 연동을 함께 구현하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

웹훅에 대한 자세한 설명은 [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v1?v=v1)를 참고하세요.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

웹훅에 대한 자세한 설명은 [웹훅 연동하기](https://developers.portone.io/opi/ko/integration/webhook/readme-v2?v=v2)를 참고하세요.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 웹훅 URL 관리자 콘솔 설정

웹훅을 통해 결제 정보를 통보받을 URL을 설정하는 과정은 다음과 같습니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

URL은 관리자 콘솔에서 두 가지 형태로 지원하고 있습니다.
콘솔에서 설정했더라도 결제 시에 `notice_url`파라미터로 지정하여 호출하는 경우 해당 URL로 전송됩니다.

웹훅을 통해 결제 정보를 통보받을 URL을 설정하는 과정은 다음과 같습니다.

(관련 이미지 첨부)

- 포트원 관리자 콘솔 내 \[결제 연동] → \[연동 관리] → **\[결제알림(Webhook) 관리]** 탭을 선택합니다.

- \[웹훅 버전] 항목에서 **\[결제모듈 V1]** 을 선택합니다.

- \[설정 모드] 항목에서 \[실연동] 또는 \[테스트]를 선택합니다. (연동 환경에 따라 웹훅 URL을 각각 다르게 설정할 수 있습니다.)

- **Endpoint URL**에 웹훅 데이터를 수신할 URL을 입력합니다.

- **Content Type**을 설정합니다. `Content Type`은 `application/json`
  또는 `application/x-www-form-urlencoded` 중 하나로 설정할 수 있습니다.

- `저장` 버튼을 클릭합니다.

<div class="hint" data-style="info">

`호출 테스트` 버튼을 클릭하면 저장된 URL로 테스트 웹훅이 발송됩니다. 이를 통해 올바른 URL과 Content-Type을 지정했는지 테스트할 수 있습니다.
콘솔 내 화면에서 Endpoint URL 변경 후 저장하지 않은 채 호출테스트를 시도하시면 이전에 저장된 주소로 발송되오니 주의하시길 바랍니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

(관련 이미지 첨부)

- 포트원 관리자 콘솔 내 \[결제 연동] → \[연동 관리] → **\[결제알림(Webhook) 관리]** 탭을 선택합니다.

- \[웹훅 버전] 항목에서 **\[결제모듈 V2]** 를 선택합니다.

- \[설정 모드] 항목에서 \[실연동] 또는 \[테스트]를 선택합니다. (연동 환경에 따라 웹훅 URL을 각각 다르게 설정할 수 있습니다.)

- **Endpoint URL**에 웹훅 데이터를 수신할 URL을 입력합니다.

- **Content Type**을 설정합니다. `Content Type`은 `application/json` 또는
  `application/x-www-form-urlencoded` 중 하나로 설정할 수 있습니다.

- `저장` 버튼을 클릭합니다.

<div class="hint" data-style="info">

`호출 테스트` 버튼을 클릭하면 저장된 URL로 테스트 웹훅이 발송됩니다. 이를 통해 올바른 URL과 Content-Type을 지정했는지 테스트할 수 있습니다.
콘솔 내 화면에서 Endpoint URL 변경 후 저장하지 않은 채 호출테스트를 시도하시면 이전에 저장된 주소로 발송되오니 주의하시길 바랍니다.

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 추가 설정 관리

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

### 화이트리스트(whitelist) 관리

(관련 이미지 첨부)

- 결제 요청 시 허용할 IP대역대를 관리할 수 있습니다.

- 포트원 관리자의 IP보안설정에 입력하는 값은 IP가 아닌 CIDR 블록방식 으로 입력하셔야 합니다.
  예를 들어 입력 하시고자 하는 IP가 `1.1.1.1` 이라고 가정 했을때 해당 IP 하나만 허용하고 싶으시다면
  `1.1.1.1/32`로 작성 하셔야 하고 만약 `1.1.1.1` \~ `1.1.1.255`까지의 IP대역을 모두 허용하고 싶으시다면
  `1.1.1.0/24` 형태로 작성하시면 됩니다. 보다 자세한 표기법은 RFC4632 를 참고부탁드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

포트원 V2 결제 모듈에서는 화이트리스트 기능을 지원하지 않습니다.

해당 기능을 필요로 하시는 경우 V2 기술지원 메일(<tech.support@portone.io>)로 문의 부탁드립니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/console/guide/home

---
title: 홈
description: >-
  포트원 콘솔 홈화면에서는 결제 현황 대시보드, 공지사항, FAQ, 포트원 새소식, 포트원 서비스 가이드 링크를 제공하고 있으며, 이에 대해
  안내합니다.
---

(이미지 첨부: 관리자콘솔-홈 화면 예시)

## 대시보드

1주/1개월/6개월/사용자 선택 기간에 따른 일간 결제 데이터를 확인할 수 있습니다.
아직 실 결제가 일어나지 않은 경우 오른쪽 상단에 \[테스트 데이터]를 활성화하여 대시보드 그래프 예시 등을
확인할 수 있습니다.

- 거래액 : 결제승인이 발생한 모든 금액이 표시됩니다. 현재 결제 상태가 승인(`PAID`)
  혹은 취소(`CANCELLED`/`PARTIAL_CANCELLED`) 거래건이 모두 집계됩니다.

- 거래취소액 : 결제 승인 이후 결제 취소된 금액이 표시됩니다. 전액 취소(`CANCELLED`) 및 부분 취소(`PARTIAL_CANCELLED`) 거래건이 모두 집계됩니다.

- 순거래액 : 거래액에서 거래취소액을 제외한 금액이 표시됩니다.

## 공지사항

포트원의 최신 공지사항을 확인할 수 있습니다. 우측 상단의 \[더보기]를 클릭하여 더 많은 공지사항을 확인해 보세요.

## FAQ

포트원의 FAQ를 확인할 수 있습니다. 우측 상단의 \[더보기]를 클릭하여 더 많은 FAQ를 확인해 보세요.

## 포트원 새소식

포트원의 새로운 소식을 확인할 수 있습니다. 우측 상단의 \[더보기]를 클릭하여 포트원 블로그에서 더 많은 소식을 확인해 보세요.

## 포트원 서비스 가이드

포트원 서비스에 대한 이용 가이드를 확인할 수 있습니다.


# https://developers.portone.io/opi/ko/console/guide/integration

---
title: 연동 관리
description: >-
  포트원 결제 모듈을 사용하기 위한 연동 설정을 관리할 수 있습니다. 결제대행사 채널 관리, 식별코드 및 API Keys, 결제알림(웹훅)
  관리, 추가 설정 관리 방법에 대해 안내합니다. 
targetVersions:
  - v1
  - v2
---

포트원 연동 시 필요한 사항들을 설정 및 관리할 수 있습니다.

연동 정보 탭에서는 채널관리, 식별코드·API Keys, 결제알림(Webhook)관리, 추가 설정 관리 등을 설정할 수 있고,
스마트 라우팅 탭에서는 스마트 라우팅 그룹을 설정할 수 있습니다.

[연동 정보](https://developers.portone.io/opi/ko/console/guide/channel-manage)

[스마트 라우팅](https://developers.portone.io/opi/ko/console/guide/smartrouting)


# https://developers.portone.io/opi/ko/console/guide/pay

---
title: 결제
description: 포트원을 관리자콘솔을 통해 발생한 거래를 조회 및 관리하는 방법을 안내합니다.
---

포트원을 통해 발생한 결제 거래 건을 조회하고 부분 취소 및 전체 취소 기능을 이용하여 결제 건을 관리할 수 있습니다.
엑셀 다운로드 기능을 제공하여 화면에서 필터링된 결제 내역을 다운로드 받아 활용할 수 있습니다.

또한 발급한 빌링키를 이용한 결제 거래 건을 별도 내역으로 확인할 수 있으며, 빌링 결제 예약건을 상태별로
관리할 수 있고, 빌링 결제 캘린더에서 일간/월간 결제 데이터를 확인할 수 있습니다.

[결제 내역 조회](https://developers.portone.io/opi/ko/console/guide/payments)

[빌링결제 내역 조회](https://developers.portone.io/opi/ko/console/guide/billing-payments)


# https://developers.portone.io/opi/ko/console/guide/payments

---
title: 결제 내역 조회
description: >-
  포트원을 통해 발생한 결제 내역을 상태별로 조회하고, 부분 취소 및 전체 취소 기능을 이용하여 결제 건을 관리할 수 있으며, 이에 대해
  안내합니다.
targetVersions:
  - v1
  - v2
---

(관련 이미지 첨부)

## 기준 시각

- **상태 승인 시각**(default) : 최종 결제 상태로 업데이트된 시각을 기준으로 조회합니다.
  (결제 취소건의 경우 취소 시각을 기준으로 조회됩니다.)

- **결제 요청 시각** : 결제를 요청한 시각을 기준으로 결제 건을 조회합니다.

<div class="hint" data-style="info">

**기준 시각에 따라 조회 결과가 다르게 표시됩니다.**

예를 들어 4/1 결제 후 4/5에 결제 취소한 경우, 상태 승인 시각을 기준으로 4/1\~4/4로 기간을 설정한 후
검색하면 해당 거래건은 결과에 포함되지 않습니다.

</div>

## 내역 검색

결제 정보를 검색하여 거래건을 특정할 수 있습니다.

<ul>

<li>

**전체** : 입력한 단어와 여러 결제 정보 필드 중 매칭되는 거래 건을 표시합니다.
여러 필드에서 일부 혹은 전부 일치하는 경우 검색 결과에 표시됩니다.
또한, 검색의 경우 단어의 앞에서부터 일치하는 경우에만 표시되며 중간만 일치하는 경우 원하는 검색 결과를 얻지 못할 수 있습니다.

</li>

<li>**포트원 거래번호** : 포트원 거래번호 (`imp_uid`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>**가맹점 거래번호** : 가맹점 거래번호 (`merchant_uid`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**주문명** : 주문명 (`name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**카드사 승인번호** : 카드사 승인번호 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 이름** : 고객 이름 (`buyer_name`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 휴대폰 번호** : 고객 휴대폰 번호 (`buyer_tel`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 이메일** : 고객 이메일 (`buyer_email`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 주소** : 고객 주소 (`buyer_addr`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 우편번호** : 고객 우편번호(`buyer_postcode`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>**가맹점 거래번호** : 가맹점 거래번호 (`paymentId`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**주문명** : 주문명 (`orderName`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**카드사 승인번호** : 카드사 승인번호 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 이름** : 고객 이름 (`customer.fullname`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 휴대폰 번호** : 고객 휴대폰 번호 (`customer.phoneNumber`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 이메일** : 고객 이메일 (`customer.email`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 주소** : 고객 주소 (`customer.address`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**고객 우편번호** : 고객 우편번호(`customer.zipcode`) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<li>**결제대행사 승인번호** : 결제대행사(PG사) 승인번호 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

<li>

**카드번호** : 카드번호 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
카드 번호의 경우 결제대행사에 따라 마스킹되는 부분이 다르므로, 앞에 6\~8자리(BIN)번호 혹은 뒷 4자리로 검색하시길 권장드립니다.

</li>

<li>**상점아이디** : 결제대행사 상점아이디 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**결제환경** : 결제환경(PC/MOBILE/API) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다. 검색하는 경우 대문자로 검색해야 합니다.</li>

<li>

**실시간 계좌 은행** : 실시간 계좌이체 거래 건에 한하여 실시간 계좌 은행 데이터 중 입력한 택스트와 일치하는 데이터가 표시됩니다.
(ex. 실시간 계좌이체 거래 건의 계좌은행이 토스뱅크인 경우 )

</li>

<li>**가상계좌 은행** : 가상계좌 거래 건에 한하여 가상계좌 은행 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**계좌번호** : 가상계좌 거래 건에 한하여 계좌번호 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**입금자명** : 가상계좌 거래 건에 한하여 입금자명 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

<li>

**현금영수증 발급번호** : 실시간 계좌이체 또는 가상계좌 거래 시 현금영수증을 발급한 거래 건에 한하여
현금영수증 발급번호(국세청 승인번호) 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.

</li>

<li>

**취소 사유** : 결제 취소 건에 한하여 취소 사유 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.
포트원 어드민콘솔에서 취소한 경우 취소 사유는 **관리자페이지취소**로 일괄 입력됩니다.

</li>

<li>**카드사명** : 카드사명 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>
<li>**할부개월수** : 카드 결제 시 할부가 적용된 거래 건에 한하여 할부개월수 데이터 중 입력한 텍스트와 일치하는 데이터가 표시됩니다.</li>

</ul>

## 필터

필터에 따라 결제 내역을 필터링하여 조회할 수 있습니다. 필터는 결제상태, 결제수단, 결제대행사, 결제유형, 결제모드에 따라 다중 선택할 수 있습니다.

### 결제상태

- **전체** : 모든 결제 상태의 거래를 조회합니다.

- **결제 완료** : **결제 완료** (status : PAID) 상태인 거래 건만 표시됩니다. 결제 취소건은 포함되지 않습니다.

- **결제 예정** : **결제 예정** (status : READY) 상태인 거래 건만 표시됩니다.
  - 결제창이 화면에 표시되는 순간 결제 예정 상태로 거래 건이 저장됩니다.

  - 일반적으로 결제 승인이되면 결제 완료 상태로 업데이트 됩니다. 다만, 결제 도중 모종의 이유로 고객이 결제창을 이탈하는 경우에는
    해당 거래 건은 계속 결제 예정 상태로 남게 됩니다.

- **결제 실패** : **결제 실패** (status : FAILED) 상태인 거래 건만 표시됩니다.

- **결제 취소** : **전체 취소** (status : CANCELLED) 및 **부분 취소** (PARTIAL\_CANCELLED) 상태인 거래 건만 표시됩니다.

- **승인 대기** : **승인 대기** (status : PENDING) 상태인 거래 건만 표시됩니다.
  - 승인 대기 상태는 페이팔(SPB/RT) 거래 건에서만 발생하며, 결제 및 환불 요청 완료 후 실제 승인되기까지 결제상태를 의미합니다.

### 결제수단

<ul>

<li>**전체** : 모든 결제 수단의 거래를 조회합니다.</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<li>

**카드결제** : 결제 요청 시 결제 수단을 카드(`pay_method : card`)로 지정하여 호출한 뒤
신용카드, 체크카드, 법인카드, 기프트카드 등 카드로 진행된 거래 건만 표시됩니다.

</li>

<li>

**실시간 계좌이체** :  결제 요청 시 결제 수단을 실시간 계좌이체(`pay_method : trans`)로
지정하여 호출한 뒤 계좌이체로 진행된 거래 건만 표시됩니다.

</li>

<li>

**가상계좌** : 결제 요청 시 결제 수단을 가상계좌 (`pay_method : vbank`)로
지정하여 호출한 뒤 가상계좌로 진행된 거래 건만 표시됩니다.

</li>

<li>

**휴대폰 소액결제** : 결제 요청 시 결제 수단을 휴대폰 소액결제 (`pay_method : phome`)로
지정하여 호출한 뒤 휴대폰 소액결제로 진행된 거래 건만 표시됩니다.

</li>

<li>

**문화상품권** : 결제 요청 시 결제 수단을 문화상품권 (`pay_method : culturegift`)로 지정하여 호출한 뒤
문화상품권으로 진행된 거래 건만 표시됩니다. 문화상품권의 경우 웰컴페이먼츠만 지원합니다.

</li>

<li>

**컬쳐랜드** : 결제 요청 시 결제 수단을 컬쳐랜드 문화상품권 (`pay_method : cultureland`)로 지정하여 호출한 뒤
컬쳐랜드 문화상품권으로 진행된 거래 건만 표시됩니다.

</li>

<li>

**스마트문상** : 결제 요청 시 결제 수단을 스마트문상(`pay_method : smartculture`)로 지정하여 호출한 뒤
스마트문상 ((구)게임문화상품권)으로 진행된 거래 건만 표시됩니다.

</li>

<li>

**북앤라이프** : 결제 요청 시 결제 수단을 북앤라이프(`pay_method : booknlife`)로 지정하여 호출한 뒤
도서문화상품권으로 진행된 거래 건만 표시됩니다.

</li>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<li>

**카드결제** : 결제 요청 시 결제 수단을 카드(`payMethod : CARD`)로 지정하여 호출한 뒤
신용카드, 체크카드, 법인카드, 기프트카드 등 카드로 진행된 거래 건만 표시됩니다.

</li>

<li>

**실시간 계좌이체** :  결제 요청 시 결제 수단을 실시간 계좌이체(`payMethod : TRANSFER`)로
지정하여 호출한 뒤 계좌이체로 진행된 거래 건만 표시됩니다.

</li>

<li>

**가상계좌** : 결제 요청 시 결제 수단을 가상계좌 (`payMethod : VIRTUAL_ACCOUNT`)로
지정하여 호출한 뒤 가상계좌로 진행된 거래 건만 표시됩니다.

</li>

<li>

**휴대폰 소액결제** : 결제 요청 시 결제 수단을 휴대폰 소액결제 (`payMethod : MOBILE`)로
지정하여 호출한 뒤 휴대폰 소액결제로 진행된 거래 건만 표시됩니다.

</li>

<li>**문화상품권** : 문화상품권의 경우 V1 결제모듈의 웰컴페이먼츠만 지원합니다.</li>

<li>

**컬쳐랜드** : 결제 요청 시 결제 수단을 컬쳐랜드 문화상품권
(`payMethod : GIFT_CERTIFICATE`, `giftCertificate.giftCertificateType : CULTURELAND`)로 지정하여 호출한 뒤
컬쳐랜드 문화상품권으로 진행된 거래 건만 표시됩니다.

</li>

<li>

**스마트문상** : 결제 요청 시 결제 수단을 스마트문상
(`payMethod : GIFT_CERTIFICATE`, `giftCertificate.giftCertificateType : SMART_MUNSANG`)로 지정하여 호출한 뒤
스마트문상 ((구)게임문화상품권)으로 진행된 거래 건만 표시됩니다.

</li>

<li>

**북앤라이프** : 결제 요청 시 결제 수단을 북앤라이프
(`payMethod : GIFT_CERTIFICATE`, `giftCertificate.giftCertificateType : BOOKNLIFE`)로 지정하여 호출한 뒤
도서문화상품권으로 진행된 거래 건만 표시됩니다.

</li>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<li>

**포인트결제** : 실제 승인된 결제가 포인트로 진행된 거래 건만 표시됩니다.

- 예를 들어 네이버페이 포인트 사용 결제 건 등이 해당됩니다.

</li>

<li>**기타** : 결제 수단을 알 수 없거나 해외 현지 결제 수단으로 진행된 거래 건만 표시됩니다.</li>

</ul>

### 결제대행사

- **전체** : 모든 결제대행사의 거래를 조회합니다.
- 결제대행사 필터는 `pg_provider`를 기준으로 구분됩니다.

### 결제유형

- **전체** : 모든 결제유형의 거래를 조회합니다.
- **정기 결제** : 발급한 빌링키로 시도된 결제 거래 건만 표시됩니다.
- **일반 결제** : SDK 및 API로 시도된 일회성 결제 거래 건만 표시됩니다.

### 결제모드

- **전체** : 모든 결제모드의 거래를 조회합니다.

- **실결제** : 실연동 채널로 시도된 결제 거래 건만 표시됩니다.

- **테스트 결제** : 테스트 채널로 시도된 결제 거래 건만 표시됩니다. 기본적으로 체크 표시가 해제되어있으니
  테스트 거래 건을 조회할 실 때 필터에서 체크한 후 검색을 해야 합니다.

## 순거래액

총 거래액, 총 거래취소 금액, 순 거래액 집계 금액은 홈 대시보드에서 확인하시거나 결제 데이터 분석 서비스에서 상세히 확인하실 수 있습니다.

## 엑셀다운로드

조회된 거래 내역을 엑셀 파일 형식으로 로컬에 다운로드 받을 수 있습니다. 엑셀 다운로드 클릭 시 원하는 정보를 선택하여 커스텀할 수 있습니다.


# https://developers.portone.io/opi/ko/console/guide/promotion

---
title: 프로모션
description: 카드사 할인을 사용하기 위한 프로모션 설정을 관리할 수 있습니다. 관리자콘솔 내 프로모션 설정 방법을 안내합니다.
targetVersions:
  - v1
  - v2
---

## 프로모션이란?

고객사가 카드사와 계약하여 사용자에게 즉시 할인을 제공하는 카드 즉시 할인 서비스입니다.

고객사의 매출을 성장시키는데 가장 효율이 좋은 방법 중 하나입니다.
예를 들어, 포트원의 고객사 중 K사의 경우 카드 프로모션 진행 기간동안 동기간 대비(1일 평균) 전체 거래액이 1.6x 이상 증가하였고,
프로모션 예산 대비 거래액 ROAS는 평균 1780%, 최대 2270% 로 가장 효율 높은 매출 성장을 이끌어낼 수 있었습니다.

프로모션 도입을 원하시는 고객사의 경우 세일즈팀 메일(<sales@portone.io>)으로 문의 주시기 바랍니다.

<div class="hint" data-style="info">

프로모션 메뉴의 경우 도입 고객사에 한하여 포트원 콘솔 내에서 확인하실 수 있습니다.

프로모션 결제를 이용하시려면 관리자콘솔에서 프로모션 생성 후 프로모션 아이디를 포함하여 결제를 요청해야 합니다.
프로모션 연동 방법이 궁금하다면 [프로모션 결제 연동하기](https://developers.portone.io/opi/ko/extra/promotion/integration)를 확인해 보세요.

</div>

## 프로모션 생성하기

프로모션 결제를 사용하기 위해서는 포트원 관리자콘솔 내 \[프로모션]에서 프로모션 설정이 필요합니다.
프로모션은 상점별로 생성하여 사용할 수 있으며, 하위상점을 사용하시는 고객사의 경우 프로모션을 각각 생성하여 사용하시길 권장드립니다.

1. 포트원 콘솔 내에서 \[프로모션]을 클릭하세요.
2. \[+ 프로모션 추가]를 클릭하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 1)

3. **프로모션 추가** 화면에서 다음 정보를 입력하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 2)

- \[프로모션 이름] : 생성된 프로모션을 고객사에서 구분할 수 있는 이름을 입력하시길 권장드립니다.

- \[프로모션 일정] : 프로모션 시작일과 종료일을 선택하세요. 시작일이 미래인 경우 생성 후 **예정** 상태이며,
  설정된 시작일이 경과되면 **진행중** 상태로 변경되며 프로모션 할인이 적용됩니다.

- \[카드사] : 프로모션 할인을 제공할 카드사를 선택하세요. 카드사는 한 프로모션 당 한 곳만 설정할 수 있습니다.

- \[프로모션 예산] : 프로모션을 진행할 전체 예산으로 할인 금액으로 사용할 예산을 입력하세요.
  예산이 100% 소진된 이후 결제 건에 대해서는 프로모션이 적용되지 않습니다.

- \[할인방식] : 할인율 또는 할인금액을 선택할 수 있으며, 입력된 수치에 따라 정률 또는 정액으로 할인 금액이 적용됩니다.

- \[최소 결제 금액] : 최소 결제 금액 설정시 주문 금액이 최소 결제 금액 이상인 경우에만 프로모션 할인이 적용됩니다.
  만약 최소 결제 금액을 입력하지 않는 경우 해당 카드로 결제되는 모든 건에 프로모션 할인이 적용됩니다.

- \[최대 할인 금액] : 할인방식 중 할인율로 설정한 경우에만 입력 가능하며, 최대 할인 금액 설정시 프로모션 할인 금액이
  최대 할인 금액을 초과할 수 없습니다. 최대 할인 금액을 설정하지 않는 경우 주문 금액에 정률로 계산되어 프로모션 할인이 적용됩니다.

4. \[저장]을 클릭하세요.

## 프로모션 수정하기

1. 생성된 프로모션 우측에 \[...]을 클릭하세요.
2. \[수정]을 클릭하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 3)

3. **프로모션 수정** 화면에서 원하는 정보를 수정하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 4)

- **예정** 상태인 경우, 프로모션 아이디를 제외한 모든 정보를 수정할 수 있습니다.
- **일시중지**, **진행중**, **예산소진** 상태인 경우 프로모션 이름 및 프로모션 일정만 수정할 수 있습니다.
- **종료** 상태인 경우 모든 정보를 수정할 수 없습니다.

## 프로모션 상태 안내

생성된 프로모션은 총 5개의 상태로 구분할 수 있으며, 상태에 따라 프로모션 아이디를 지정하여 결제 요청했더라도
프로모션 할인 금액이 적용되지 않을 수 있습니다.

### 예정

프로모션 생성 후 프로모션 시작일이 경과되지 않은 경우 **예정**상태로 표시됩니다.
예정 상태인 경우 프로모션 아이디를 제외한 모든 정보를 수정할 수 있습니다.

예정 상태인 프로모션을 일시중지하는 경우 프로모션 시작일이 경과되어도 프로모션이 진행중 상태로 변경되지 않으며,
프로모션 아이디를 지정하여 결제를 요청하더라도 프로모션 할인이 적용되지 않습니다.

예정 상태인 프로모션을 종료하는 경우 종료 상태로 변경되며 상태 변경이 불가능합니다.

### 진행중

프로모션 생성 후 프로모션 시작일이 경과된 경우 **진행중**상태로 표시됩니다.
진행중 상태인 경우 프로모션 이름 및 프로모션 일정만 수정할 수 있습니다.

진행중 상태인 경우 결제 요청 시 프로모션 아이디를 지정하면 프로모션 할인이 적용됩니다.

진행중 상태인 프로모션을 일시중지하는 경우 직후 결제 요청 건부터 프로모션 아이디를 지정했더라도 프로모션 할인이 적용되지 않습니다.
다만, 일시중지 직전 결제 요청되었으나 결제 승인이 완료되지 않은 건의 경우 프로모션 할인 금액이 적용될 수 있습니다.

진행중 상태인 프로모션을 종료하는 경우 종료 상태로 변경되며 상태 변경이 불가능합니다.

### 일시중지

사용자가 직접 생성된 프로모션을 일시중지할 수 있으며 예정, 진행중, 예산소진 상태인 경우 일시중지가 가능합니다.

예정이거나 진행중 혹은 예산소진 상태에서 일시중지 상태로 변경된 경우 프로모션 이름 및
프로모션 일정 중 종료일만 변경할 수 있으며, 시작일은 변경이 불가능합니다.

일시중지하는 경우 프로모션 시작일이 경과되거나 예산이 남아있어도 프로모션 할인은 적용되지 않습니다.
재시작하여 프로모션이 원 상태로 변경되며, 다시 사용이 가능합니다.

### 예산소진

프로모션 할인금액이 설정된 예산만큼 모두 소진된 경우 **예산소진**상태로 표시됩니다.
예산소진 상태인 경우 프로모션 아이디를 지정하여 결제 요청하더라도 프로모션 할인이 적용되지 않습니다.

만약 프로모션 할인이 적용된 거래건이 취소되는 경우 해당 거래 건에 적용되었던 할인 금액만큼 예산에 귀속되며,
이후 거래 요청 시 할인 금액이 적용됩니다.

### 종료

프로모션 종료일이 경과되거나 사용자가 종료한 경우 **종료**상태로 표시됩니다.
종료된 프로모션은 재시작할 수 없습니다.

프르모션이 종료되는 경우 즉시 프로모션 할인이 적용되지 않습니다. 다만, 종료 직전 결제 요청한 경우 프로모션 종료 이후
결제 승인이 완료되면 프로모션 할인금액이 적용됩니다.

## 프로모션 엑셀 다운로드

엑셀 다운로드 클릭 시 **프로모션 내역**, **거래 내역** 두 가지 유형으로 데이터를 다운로드 받을 수 있습니다.

- 프로모션 내역 : 조회 기간 내 전체 프로모션 내역에 대해 다운로드할 수 있습니다.
  - 프로모션 아이디, 프로모션 이름, 상태, 카드사, 예산, 소진금액, 할인율/할인금액, 최소 결제 금액, 최대 할인 금액, 프로모션 생성날짜,
    프로모션 수정 날짜, 프로모션 시작 날짜, 프로모션 종료 예정 날짜, 프로모션 실제 종료 날짜가 포함됩니다.

- 거래 내역 : 조회 기간 내 전체 프로모션이 적용된 건별 거래 내역에 대해 다운로드 할 수 있습니다.
  - 고객사 주문번호, 포트원 거래번호, 프로모션 아이디, PG사 승인번호, 카드사 승인번호 등 거래 데이터가 포함됩니다.
  - 만약 특정 프로모션이 적용된 거래 내역 확인을 원하시는 경우 해당 프로모션의 `...` 버튼 클릭 후 `거래내역 다운로드`를 클릭하세요.


# https://developers.portone.io/opi/ko/console/guide/readme

---
title: 관리자 콘솔 소개
description: 포트원 관리자 콘솔 사용법을 안내합니다.
---

포트원 관리자콘솔은 포트원 계정 생성 및 하위상점 관리, 전자결제 신청, 결제대행사 연동 설정을 통합하여 관리할 수 있는 페이지입니다.

또한, 결제 내역 조회 및 결제 취소를 할 수 있으며, 예약된 결제 내역 및 예약 변경, 해지 기능을 제공하며 통합된 결제대행산 정산 내역을 확인할 수 있습니다.

별도로 포트원에서 제공하는 파트너 정산 자동화 및 결제 데이터 분석도 이용하실 수 있습니다.

[포트원 관리자콘솔 바로가기](https://admin.portone.io)

[전자결제 신청](https://developers.portone.io/opi/ko/console/guide/reg)

[홈](https://developers.portone.io/opi/ko/console/guide/home)

[결제](https://developers.portone.io/opi/ko/console/guide/pay)

[연동 관리](https://developers.portone.io/opi/ko/console/guide/integration)

[상점 계정 관리](https://developers.portone.io/opi/ko/console/guide/account)


# https://developers.portone.io/opi/ko/console/guide/reg

---
title: 전자결제 신청
description: 결제대행사 및 결제수단을 선택하고 전자결제를 신청하는 과정을 안내합니다.
---

포트원 관리자콘솔에서 [로그인](https://admin.portone.io/auth/signin)을 한 뒤 좌측 상단에 있는
**\[전자결제 신청]** 버튼을 클릭하면 고객사가 사용하고자 하는 모든 결제 수단과 이를 지원하는 결제대행사를
신청할 수 있는 페이지로 이동합니다.

(관련 이미지 첨부)

## 시작하기

(관련 이미지 첨부)

- \[개인정보 제 3자 제공], \[개인정보 수집 및 이용] 약관을 확인하시고 동의하는 경우 체크합니다.

- `개발 연동 테스트` 를 누르면 `결제 연동` 페이지로 이동합니다.
  `결제 연동` 페이지에서 테스트 채널을 추가하여 전자결제 신청 전에 결제 테스트를 해볼 수 있습니다.

- `시작하기`를 누르면 `비즈니스 인증` 페이지로 이동합니다.
  `비즈니스 인증` 페이지에서 사업자 정보를 추가한 후 전자결제 신청을 진행할 수 있습니다.

- 우측 상단 `서비스 둘러보기`를 클릭하면 해당 페이지에서 벗어나 포트원 관리자콘솔을 둘러볼 수 있습니다.

- 우측 상단 `이미 가입된 결제대행사가 있어요`를 클릭하면 포트원 고객센터로 연결됩니다.
  문의사항이 있으신 경우 메세지를 남겨주시면 결제 대행사 추가 가입 절차에 대해 안내 드리겠습니다.

## 비즈니스 인증

### 사업자 정보 등록

(관련 이미지 첨부)

- 전자결제신청(결제대행사 계약)을 진행할 사업자 등록증 사본을 첨부해 주세요.

- 사업자 등록증 업로드 시 파일 상태에 따라 일부 정보는 자동으로 적용됩니다.
  만약 자동으로 적용되지 않은 정보가 있다면 안내에 따라 직접 입력해 주세요.

- 포트원 가입 계정과 대표자 이메일 주소가 다를 경우 `포트원 계정으로 사용할게요` 체크박스를 해제한 후 대표자 이메일 주소를 입력해 주세요.

- 사업자 등록증이 없는 경우 전자결제 신청이 불가능합니다. 사업자 등록 이후 서비스를 신청해 주세요.
  - `아직 사업자 등록증이 없어요`를 클릭한 후 `개발 연동 테스트` 또는 `서비스 둘러보기`를 클릭하여 페이지를 벗어날 수 있습니다.

- 비즈니스 인증을 중단하려면 우측 상단의 \[나가기]를 클릭하세요.

- 비즈니스 인증 정보를 임시 저장하려면 우측 상단의 \[임시 저장]을 클릭하세요.

### 담당자 정보 등록

(관련 이미지 첨부)

- 전자결제 신청 완료 후 결제대행사 및 포트원의 안내를 받을 담당자 정보를 등록해 주세요.
- 사업자 등록증상의 대표자 정보와 담당자 정보가 일치하는 경우 `대표자 1 정보 불러오기` 를 선택해 주세요.

### 서비스 정보 등록

(관련 이미지 첨부)

- 상세 판매 품목 : 판매하시는 서비스 유형(업종)을 선택해 주세요. (중복 선택 가능)

- 서비스 형태 선택 : 연동하시는 서비스의 형태를 선택해 주세요. (웹/앱)

- 서비스 URL 입력 : 결제대행사 계약을 진행하기 위해서는 운영중인 서비스(웹/앱)의 URL을 입력해야 합니다.
  원활한 계약을 위해서 아래 서비스 기본 구성 요건을 확인하신 후 서비스에 반영이 필요합니다.

  - 결제대행사 계약을 위한 서비스 기본 구성 요건 \[[바로가기](https://guide.portone.io/6e20063c-1305-475f-a71a-c4d5cd5f3556)]

- 요청/추가 메모 : 기타 전달할 내용이 있는 경우 해당 항목에 작성해 주시면 확인 후 안내 드리겠습니다.

### 최종 확인

(관련 이미지 첨부)

- 등록된 정보를 최종적으로 확인합니다.

- 정보 수정이 필요하시면 `정보 수정하기` 버튼을 클릭해 주세요.

- 비즈니스 인증 `제출하기` 클릭 시, `전자결제 신청하기` 페이지로 이동합니다.

- 주의 : 제출 이후 이미 등록한 비즈니스 정보에 대해서 수정이 필요한 경우 `상점·계정관리`의 사업자
  정보에서 `정보 수정 요청`을 클릭하여 [포트원 고객센터](https://x06k7.channel.io/lounge)를 통해
  수정이 가능합니다.

## 전자결제 신청

### 포트원 추천 패키지

(관련 이미지 첨부)

- 이용하실 결제수단 및 결제형태를 선택해 주세요.

- 선호하는 결제수단을 선택하면, 그에 따라 포트원 추천 패키지가 노출됩니다.
  결제대행사 선택이 어려우신 경우 추천패키지로 쉽고 간편하게 신청이 가능합니다.

### 결제대행사 직접 선택하기

(관련 이미지 첨부)

- 우측 상단 `전자결제 직접 선택하기` 버튼을 클릭하시면 원하시는 결제대행사(PG사)를 직접 선택하여
  신청하실 수 있습니다.

- 일반결제, 간편결제, 해외결제, 본인인증 총 4개의 서비스별로 포트원이 지원하는 결제대행사와 결제
  수단을 확인할 수 있습니다. 판매하시는 서비스 형태 및 필요한 형태에 따라 선택해주세요.

- 결제수단을 선택하면 장바구니에 담기며, 선택한 결제대행사와 결제수단의 개수는 장바구니 아이콘에
  표기됩니다.

- 주의사항: 사이트를 워드프레스 우커머스 플러그인으로 제작하시는 경우, 지원 가능한 PG사가 구분되어
  있으니 참고하시어 선택해 주세요. \[[워드프레스 우커머스 플러그인 지원 PG
  목록](https://help.portone.io/content/wordpress-available-pg)]

### 결제수단 담기

- 원하는 결제대행사의 결제수단을 클릭하면 장바구니에 담기고, 장바구니에서 선택한 결제대행사 및
  결제수단을 확인할 수 있습니다.

- 장바구니에서 특정 결제대행사를 삭제하고 싶은 경우, \[`X`]버튼 클릭 후 \[`저장`] 을 클릭하세요.
  결제수단 추가를 원하는 경우 \[`돌아가기`]버튼을 클릭하여 다시 선택이 가능합니다.

### 추가 정보 입력

(관련 이미지 첨부)

- 특정 결제대행사의 경우, 계약에 필요한 상세 정보 입력이 필요합니다. 내용을 확인하고 꼼꼼히 상세 정보를 입력해주세요.

### 최종 확인

(관련 이미지 첨부)

- 선택하신 결제대행사와 결제수단을 확인해주세요.
- 추가 신청이 필요한 경우 `이전으로 가기` 버튼을 클릭해 주세요.

## 신청 내역 확인

(관련 이미지 첨부)

- 신청한 결제대행사와 결제수단을 확인할 수 있습니다.

- 추가 신청이 필요하시면 `전자 결제를 추가할게요`를 클릭해 주세요.

- 실제 PG사 계약 상태와 콘솔 내 노출되는 상태값이 상이할 수 있습니다. 확인이 필요한 경우, 콘솔
  하단의 [상담톡](https://x06k7.channel.io/lounge)을 통해 문의주시기 바랍니다.

- 신청 후, 약 3 영업일내 PG사 계약 담당자가 직접 연락을 드립니다.

- 일부 PG사는 추가 접수 절차가 필요하여, 포트원에서 별도 안내된 이메일을 참고하시어 진행을
  부탁드립니다.

## (참고) 결제 연동

- 결제대행사(PG사)와 계약을 위해서는 신청하신 PG사의 모듈 연동이 필요합니다.

- [V1 연동 매뉴얼 바로가기](https://developers.portone.io/opi/ko/integration/ready/readme?v=v1)

- [V2 연동 매뉴얼 바로가기](https://developers.portone.io/opi/ko/integration/ready/readme?v=v2)

- 연동과 관련하여 궁금하신 사항은 **포트원 기술지원 이메일 <support@portone.io>**
  또는 채널톡으로 문의 주시기 바랍니다.


# https://developers.portone.io/opi/ko/extra/promotion/console-guide

---
title: 프로모션 생성하기
description: 프로모션 기간, 예산, 할인 조건 등 설정 방법을 안내합니다.
targetVersions:
  - v1
  - v2
---

## 프로모션 생성하기

프로모션 결제를 사용하기 위해서는 포트원 관리자콘솔 내 \[프로모션]에서 프로모션 설정이 필요합니다.
프로모션은 상점별로 생성하여 사용할 수 있으며, 하위상점을 사용하시는 고객사의 경우 프로모션을 각각 생성하여 사용하시길 권장드립니다.

1. 포트원 콘솔 내에서 \[프로모션]을 클릭하세요.
2. \[+ 프로모션 추가]를 클릭하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 1)

3. **프로모션 추가** 화면에서 다음 정보를 입력하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 2)

- \[프로모션 이름] : 생성된 프로모션을 고객사에서 구분할 수 있는 이름을 입력하시길 권장드립니다.

- \[프로모션 일정] : 프로모션 시작일과 종료일을 선택하세요. 시작일이 미래인 경우 생성 후 **예정** 상태이며,
  설정된 시작일이 경과되면 **진행중** 상태로 변경되며 프로모션 할인이 적용됩니다.

- \[카드사] : 프로모션 할인을 제공할 카드사를 선택하세요. 카드사는 한 프로모션 당 한 곳만 설정할 수 있습니다.

- \[프로모션 예산] : 프로모션을 진행할 전체 예산으로 할인 금액으로 사용할 예산을 입력하세요.
  예산이 100% 소진된 이후 결제 건에 대해서는 프로모션이 적용되지 않습니다.

- \[프로모션 예산 미복구] : 프로모션 할인이 적용된 거래 건이 부분취소 혹은 전체취소 되었을 때,
  적용되었던 프로모션 금액을 예산에 다시 포함시킬지 여부를 설정할 수 있습니다.
  기본적으로 취소된 프로모션 금액이 예산에 복구되며, 프로모션 예산 미복구를 활성화하는 경우 복구되지 않습니다.
  프로모션 예산 미복구를 활성화하는 경우, 환불 예상 비율 혹은 환불 예상 금액을 입력하여 여유 예산을 설정할 수 있습니다.

- \[할인방식] : 할인율 또는 할인금액을 선택할 수 있으며, 입력된 수치에 따라 정률 또는 정액으로 할인 금액이 적용됩니다.
  할인율 방식을 선택한 경우, \[최대 할인 금액]을 설정할 수 있으며 최대 할인 금액 설정시 프로모션 할인 금액이
  최대 할인 금액을 초과할 수 없습니다. 최대 할인 금액을 설정하지 않는 경우 주문 금액에 정률로 계산되어 프로모션 할인이 적용됩니다.

- \[할인 조건 설정] : 할인 조건을 최대 5개까지 설정할 수 있습니다. 최소 결제 금액을 기준으로 구간별
  할인금액 / 할인율을 설정할 수 있습니다.

  - \[최소 결제 금액] : 최소 결제 금액 설정시 주문 금액이 최소 결제 금액 이상인 경우에만 프로모션 할인이 적용됩니다.
    만약 최소 결제 금액을 0으로 입력하는 경우 해당 카드로 결제되는 모든 건에 프로모션 할인이 적용됩니다.

  - \[할인율] : 입력된 할인율만큼 주문 금액을 기준으로 정률로 계산되어 할인이 적용됩니다.

  - \[할인금액] : 입력된 할인 금액만큼 할인이 적용됩니다.

  - 예를 들어, `10000원 이상 결제 시 10% 할인, 50000원 이상 결제 시 20% 할인` 과 같은 정책을 생성하고 싶다면
    조건 1을 **최소 결제 금액 10000원, 할인율 10%**, 조건 2를 **최소 결제 금액 50000원, 할인율 20%** 와 같이 설정하시기 바랍니다.

<div class="hint" data-style="info">

1. 할인 조건의 경우 생성 후 수정이 불가능하므로 변경을 원하시면 삭제 후 다시 추가해야 합니다.

2. 추가 할인 조건의 경우 앞서 생성된 조건의 할인비율보다 크게 설정해야합니다.
   할인 금액 방식으로 입력하는 경우에도 (할인 금액 / 최소 결제 금액) \* 100으로 할인율을 계산하며,
   만약 할인율이 낮아지는 경우 금액 입력이 불가능 합니다.

</div>

4. \[저장]을 클릭하세요.

## 프로모션 수정하기

1. 생성된 프로모션 우측에 \[...]을 클릭하세요.
2. \[수정]을 클릭하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 3)

3. **프로모션 수정** 화면에서 원하는 정보를 수정하세요.

(이미지 첨부: 콘솔 내 프로모션 화면 예시 4)

- **예정** 상태인 경우, 프로모션 아이디를 제외한 모든 정보를 수정할 수 있습니다.
- **일시중지**, **진행중**, **예산소진** 상태인 경우 프로모션 이름 및 프로모션 일정만 수정할 수 있습니다.
- **종료** 상태인 경우 모든 정보를 수정할 수 없습니다.

## 프로모션 상태 안내

생성된 프로모션은 총 5개의 상태로 구분할 수 있으며, 상태에 따라 프로모션 아이디를 지정하여 결제 요청했더라도
프로모션 할인 금액이 적용되지 않을 수 있습니다.

### 예정

프로모션 생성 후 프로모션 시작일이 경과되지 않은 경우 **예정**상태로 표시됩니다.
예정 상태인 경우 프로모션 아이디를 제외한 모든 정보를 수정할 수 있습니다.

예정 상태인 프로모션을 일시중지하는 경우 프로모션 시작일이 경과되어도 프로모션이 진행중 상태로 변경되지 않으며,
프로모션 아이디를 지정하여 결제를 요청하더라도 프로모션 할인이 적용되지 않습니다.

예정 상태인 프로모션을 종료하는 경우 종료 상태로 변경되며 상태 변경이 불가능합니다.

### 진행중

프로모션 생성 후 프로모션 시작일이 경과된 경우 **진행중**상태로 표시됩니다.
진행중 상태인 경우 프로모션 이름 및 프로모션 일정만 수정할 수 있습니다.

진행중 상태인 경우 결제 요청 시 프로모션 아이디를 지정하면 프로모션 할인이 적용됩니다.

진행중 상태인 프로모션을 일시중지하는 경우 직후 결제 요청 건부터 프로모션 아이디를 지정했더라도 프로모션 할인이 적용되지 않습니다.
다만, 일시중지 직전 결제 요청되었으나 결제 승인이 완료되지 않은 건의 경우 프로모션 할인 금액이 적용될 수 있습니다.

진행중 상태인 프로모션을 종료하는 경우 종료 상태로 변경되며 상태 변경이 불가능합니다.

### 일시중지

사용자가 직접 생성된 프로모션을 일시중지할 수 있으며 예정, 진행중, 예산소진 상태인 경우 일시중지가 가능합니다.

예정이거나 진행중 혹은 예산소진 상태에서 일시중지 상태로 변경된 경우 프로모션 이름 및
프로모션 일정 중 종료일만 변경할 수 있으며, 시작일은 변경이 불가능합니다.

일시중지하는 경우 프로모션 시작일이 경과되거나 예산이 남아있어도 프로모션 할인은 적용되지 않습니다.
재시작하여 프로모션이 원 상태로 변경되며, 다시 사용이 가능합니다.

### 예산소진

프로모션 할인금액이 설정된 예산만큼 모두 소진된 경우 **예산소진**상태로 표시됩니다.
예산소진 상태인 경우 프로모션 아이디를 지정하여 결제 요청하더라도 프로모션 할인이 적용되지 않습니다.

만약 프로모션 할인이 적용된 거래건이 취소되는 경우 해당 거래 건에 적용되었던 할인 금액만큼 예산에 귀속되며,
이후 거래 요청 시 할인 금액이 적용됩니다.

### 종료

프로모션 종료일이 경과되거나 사용자가 종료한 경우 **종료**상태로 표시됩니다.
종료된 프로모션은 재시작할 수 없습니다.

프르모션이 종료되는 경우 즉시 프로모션 할인이 적용되지 않습니다. 다만, 종료 직전 결제 요청한 경우 프로모션 종료 이후
결제 승인이 완료되면 프로모션 할인금액이 적용됩니다.

## 프로모션 엑셀 다운로드

엑셀 다운로드 클릭 시 **프로모션 내역**, **거래 내역** 두 가지 유형으로 데이터를 다운로드 받을 수 있습니다.

- 프로모션 내역 : 조회 기간 내 전체 프로모션 내역에 대해 다운로드할 수 있습니다.

- 프로모션 아이디, 프로모션 이름, 상태, 카드사, 예산, 소진금액, 할인조건, 최대 할인 금액, 프로모션 생성날짜,
  프로모션 수정 날짜, 프로모션 시작 날짜, 프로모션 종료 예정 날짜, 프로모션 실제 종료 날짜가 포함됩니다.

- 거래 내역 : 조회 기간 내 전체 프로모션이 적용된 건별 거래 내역에 대해 다운로드 할 수 있습니다.

- 고객사 주문번호, 포트원 거래번호, 프로모션 아이디, PG사 승인번호, 카드사 승인번호 등 거래 데이터가 포함됩니다.

- 만약 특정 프로모션이 적용된 거래 내역 확인을 원하시는 경우 해당 프로모션의 `...` 버튼 클릭 후 `거래내역 다운로드`를 클릭하세요.


# https://developers.portone.io/opi/ko/extra/promotion/integration

---
title: 프로모션 결제 연동하기
description: 프로모션 할인금액을 적용하는 방법을 안내합니다.
targetVersions:
  - v1
  - v2
---

## 프로모션 결제 연동하기

고객사에서 카드사 즉시할인을 쉽게 적용하고 운영 관리하실 수 있도록 프로모션 기능을 제공하고 있습니다.
포트원 콘솔 내 **프로모션** 메뉴에서 카드사 별 프로모션을 생성 후 결제 요청 시 적용할 수 있으며,
프로모션에 설정된 예산, 할인방식, 할인금액/할인률에 따라 자동으로 계산되어 결제가 승인됩니다.

<div class="hint" data-style="info">

프로모션 메뉴의 경우 도입 고객사에 한하여 포트원 콘솔 내에서 확인하실 수 있습니다.

프로모션 결제를 연동하시려면 관리자콘솔에서 프로모션을 먼서 생성해야합니다.
프로모션 생성 방법이 궁금하다면 [프로모션 설정 가이드](https://developers.portone.io/opi/ko/extra/promotion/console-guide)를 확인해 보세요.

</div>

### 프로모션 할인 금액 표시하기

포트원에서 제공하는 프로모션을 이용하시는 경우 결제 요청 전 고객사에서 주문 페이지를 구현하여 사용하시길 권장드립니다.

고객사의 주문 페이지에 프로모션 할인 금액을 표시하시려면 [프로모션 단건 조회 API](https://developers.portone.io/api/rest-v2/promotion?v=v2)를 참고하여
사용할 프로모션 아이디로 API를 조회한 후 응답 필드의 `discountPolicy.partitions[]` 내의 `scheme`과 `amountFrom` 데이터를 갖고 직접 계산해서 사용하시길 권장드립니다.

**프로모션 할인 정책 조회 예시**

예를 들어 조회할 프로모션의 할인 정책이 `10000원 이상 결제 시 10% 할인, 50000원 이상 결제 시 20% 할인` 이라면 `discountPolicy` 필드는 아래와 같이 조회가 될 것입니다.

```javascript
const promotion = {
  // ... other fields
  discountPolicy: {
    partitions: [
      {
        amountFrom: 10000,
        scheme: {
          type: "PERCENT",
          percent: 10,
        },
      },
      {
        amountFrom: 50000,
        scheme: {
          type: "PERCENT",
          percent: 20,
        },
      },
    ],
  },
};
```

아래와 같은 로직으로 프로모션이 적용된 이후의 금액을 계산하실 수 있습니다.

```ts
const selectDiscountScheme = (partitions, amount) => {
  const select = (partitions) => {
    const [head, ...tail] = partitions;
    if (tail.length === 0) {
      return head.scheme;
    }

    const from = head.amountFrom;
    const to = tail[0].amountFrom;

    if (from <= amount && amount < to) return head.scheme;
    else return select(tail);
  };

  if (partitions[0].amountFrom > amount) return null;
  else return select(partitions);
};

const getPaymentAmount = (discountScheme, amount) => {
  if (discountScheme.type == "PERCENT") {
    // 정률 할인
    return amount - (amount * discountScheme.percent) / 100;
  } else {
    // 정액 할인
    return amount - discountScheme.amount;
  }
};

const orderAmount = getOrderAmount();
const response = await fetch(
  `https://api.portone.io/promotions/${promotionId}`,
  {
    method: "GET",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
  },
);
const promotion = await response.json();

// 금액 구간에 맞는 할인 정책을 구합니다.
const discountScheme = selectDiscountScheme(
  promotion.discountPolicy.partitions,
  orderAmount,
);
// 프로모션이 적용된 실결제 금액을 구합니다.
const paymentAmount = getPaymentAmount(discountScheme, orderAmount);
```

## SDK(결제창) 인증결제 연동하기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

SDK를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotion_id`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

SDK를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotionId`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

프로모션 결제의 경우 특정 카드사 결제 시 적용되므로 결제 호출 시 **카드 다이렉트**호출 방식만 지원되며,
해당 프로모션의 카드사와 다이렉트 호출 카드사가 일치하는 경우에만 프로모션 조건이 적용됩니다.

만약, 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 진행이 불가하오니 유의하시길 바랍니다.

이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/auth) 및 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
IMP.request_pay(
  {
    isPromotion: true, //프로모션 사용 여부
    promotion_id: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력 (Ex. 현대카드 프로모션)
    channelKey: "{콘솔 내 연동 정보의 채널키}",
    pay_method: "card", //결제수단 선택
    card: {
      direct: {
        code: "367", //현대카드 다이렉트 호출
      },
    },
    merchant_uid: "ORD20180131-0000011", //고객사 주문번호
    name: "Norway swivel chair", //주문명
    amount: 1000, // 결제 금액
    //고객 정보
    buyer_email: "gildong@gmail.com",
    buyer_name: "Hong Gildong",
    buyer_tel: "010-4242-4242",
    buyer_addr: "Shinsa-dong, Gangnam-gu, Seoul",
    buyer_postcode: "01181",
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // Payment is successful
    } else {
      // Payment failed
    }
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout) 및 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v2-sdk/payment-request) 문서를 참고하시기 바랍니다.

### 예제 코드

```tsx
//포트원 인증결제 SDK 호출
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
  promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력 (Ex. 현대카드 프로모션)
  //카드 다이렉트 호출
  card: {
    cardCompany: "HYUNDAI_CARD",
  },
  //기타 인증결제 파라미터 설정
  channelKey: "channel-key-f042e8e2-92f1-4f68-ad61-cec6ede41529",
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
  payMethod: "CARD",
  customer: {
    fullName: "홍길동",
    phoneNumber: "010-1234-5678",
    email: "test@test.com",
  },
});
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- promotion\_id?: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

- card?: object

  **카드 결제 옵션 설정**

  - direct?: object

    **카드 다이렉트 호출**

  - code?: string

    **카드사 코드**

    카드 다이렉트 호출 시 [카드사 코드](https://developers.portone.io/opi/ko/support/code-info/card-code) 문서를 참조하여 프로모션과 동일한 카드사로 지정해야 합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- promotionId?: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

- card?: object

  **카드 정보**

  - cardCompany?: string

    **카드사 다이렉트 호출 시 필요한 카드사 식별 값**

    카드 다이렉트 호출 시 [카드사 식별 값](https://developers.portone.io/sdk/ko/v2-sdk/payment-request?v=v2#card-object) 문서를 참조하여 프로모션과 동일한 카드사로 지정해야 합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 프로모션 결제를 이용하는 경우 카드 다이렉트 호출 방식으로 결제를 요청해야합니다. </summary>

결제 요청 시 프로모션 아이디를 지정했더라도 카드 다이렉트 방식으로 호출하지 않는 경우 에러가 리턴됩니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary> 프로모션 생성시 카드사와 결제 호출시 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 결제 호출시 `card.direct.code`에 지정한 카드사가 일치하지 않는 경우 에러가 리턴됩니다.
결제 요청시 동일한 카드사로 매칭하여 호출해야 합니다.

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션 생성시 카드사와 결제 호출시 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 결제 호출시 `card.cardCompany`에 지정한 카드사가 일치하지 않는 경우 에러가 리턴됩니다.
결제 요청시 동일한 카드사로 매칭하여 호출해야 합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## API 수기(키인)결제 연동하기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

API를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotion_id`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

API를 이용하는 경우 결제 호출 시 생성한 프로모션의 ID를 전용 파라미터인 `promotionId`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

해당 프로모션의 카드사와 수기(키인) 결제 요청 시 입력한 카드의 카드사가 일치하는 경우에만 프로모션 조건이 적용됩니다.
(입력한 카드의 카드사 정보는 카드 BIN번호를 기준으로 체크됩니다.)
만약, 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 진행이 불가하오니 유의하시길 바랍니다.

이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
// card_number, expiry, birth, pwd_2digit 등 정보를 전달받습니다.
// 포트원 비인증 결제(일회성) API 호출
const onetimeResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/onetime",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pg: `${pg_provider}.${pg_mid}`,
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력
      // 중략...
    }),
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [수기(키인)결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/keyin) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
// 포트원 수기(키인)결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/instant`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelKey: "channel-key-f042e8e2-92f1-4f68-ad61-cec6ede41529",
      //적용할 프로모션 아이디 입력
      promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e",
      orderName: "1개월 이용권",
      // 수기 결제 API를 참고해 고객 정보를 채워주세요.
      customer: {
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",

      // 수기(키인)결제 API를 참고해 카드 정보를 채워주세요.
      method: {
        card: {
          cardCredintial: {
            number: "0000123400001234", // 16자리 숫자만 입력해야 합니다.
            expiryYear: "26", // 연도의 뒤 2자리를 입력해야 합니다.
            expiryMonth: "12",
            birthOrBusinessRegistrationNumber: "900101", // 생년월일 6자리 또는 사업자 등록번호 10자리를 입력해야 합니다.
            passwordTwoDigits: "00", // 카드 비밀번호 앞 2자리 입력해야 합니다.
          },
        },
      },
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- promotion\_id: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- promotionId: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 프로모션 생성시 카드사와 결제 요청시 입력된 카드의 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 결제 요청시 입력한 카드 정보의 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 실패 처리됩니다.

</details>

## API 정기결제 연동하기

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

발급된 빌링키를 이용하여 단건 결제 API 또는 예약 결제 API를 이용하는 경우
API 요청시 생성한 프로모션의 ID를 전용 파라미터인 `promotion_id`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

발급된 빌링키를 이용하여 단건 결제 API 또는 예약 결제 API를 이용하는 경우
API 요청시 생성한 프로모션의 ID를 전용 파라미터인 `promotionId`에 지정하여 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

해당 프로모션의 카드사와 발급된 빌링키의 카드사가 일치하는 경우에만 프로모션 조건이 적용됩니다.
만약, 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 진행이 불가하오니 유의하시길 바랍니다.

예약 결제를 사용하시는 경우 결제가 실행되는 시점에 예약 시 입력한 프로모션 아이디를 기반으로 예산 및 조건을 확인한 후
적용됩니다. 만약 결제가 실행되는 시점에 예산 소진 상태이거나 프로모션이 종료된 상태인 경우 할인이 적용되지 않습니다.

이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

예약 결제와 관련된 자세한 내용은 [결제 예약 API](https://developers.portone.io/api/rest-v1/nonAuthPayment.subscribe#post%20%2Fsubscribe%2Fpayments%2Fschedule) 문서를 참고하시기 바랍니다.

### 예제 코드

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 결제">

```ts
// 포트원 빌링키 결제 API 호출
const paymentResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/again",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_uid,
      merchant_uid,
      name: "월간 이용권 정기결제",
      // 빌링키 결제 API를 참고해 고객 정보를 채워주세요.
      amount: {
        total: 8900,
      },
      currency: "KRW",
      //적용할 프로모션 아이디 입력
      promotion_id: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e",
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

```ts
// 결제 예약
axios({
  url: `https://api.iamport.kr/subscribe/payments/schedule`,
  method: "post",
  headers: { Authorization: access_token },
  data: {
    customer_uid: "gildong_0001_1234", // 카드(빌링키)와 1:1로 대응하는 값
    promotion_id: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 값
    schedules: [
      {
        merchant_uid: "order_monthly_0001", // 주문 번호
        schedule_at: 1519862400, // 결제 시도 시각 in Unix Time Stamp. 예: 다음 달 1일
        amount: 8900,
        name: "월간 이용권 정기결제",
        buyer_name: "홍길동",
        buyer_tel: "01012345678",
        buyer_email: "gildong@gmail.com",
      },
    ],
  },
});
```

</div>

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

빌링키 결제와 관련된 자세한 내용은 [빌링결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/readme) 문서를 참고하시기 바랍니다.

### 예제 코드

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 결제">

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/billing-key`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
      promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력
      orderName: "후불 결제",
      customer: {
        id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
        phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
        email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/schedule`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payment: {
        billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
        promotionId: "promotion-id-86e1ff2a-2c3a-451c-bdd3-e5cd1664bc3e", //적용할 프로모션 아이디 입력
        orderName: "월간 이용권 정기 결제",
        customer: {
          id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
          name: {
            full: "김포트", // 고객 이름을 입력해야 합니다.
          },
          phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
          email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
        },
        amount: {
          total: 8900,
        },
        currency: "KRW",
      },
      timeToPay: "2024-05-01T00:00:00+09:00", // ISO8601 형식으로 입력해야 합니다.
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

</div>

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- promotion\_id: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- promotionId: string

  **프로모션 ID**

  관리자 콘솔의 \[프로모션] 메뉴에서 확인할 수 있습니다.

  프로모션 ID 지정 및 카드 다이렉트 방식으로 결제창을 호출하면, 프로모션 내 설정된 할인 조건 및 금액에 따라
  할인 금액이 적용되어 결제가 진행됩니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 프로모션 생성시 카드사와 발급된 빌링키의 카드사가 일치해야 합니다. </summary>

프로모션 생성시 지정한 카드사와 발급된 빌링키의 카드사가 일치하지 않는 경우 에러가 리턴되며 결제 실패 처리됩니다.

</details>

## 공통 유의사항

<div class="hint" data-style="info">

프로모션 서비스에서 제공하는 로직은 내부 사정에 의해 변동될 수 있으며, 변동 시 고객사에 사전 고지될 예정입니다.

</div>

<details>

<summary> 프로모션이 진행중이 아닌 경우 할인 적용이 되지 않습니다. </summary>

결제 요청 시 프로모션 아이디를 지정했더라도 프로모션이 **진행중** 상태가 아닌 경우 프로모션 할인 적용 없이
일반 결제와 동일한 프로세스로 결제가 진행됩니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션 결제 완료 건 취소시 예산이 복구됩니다. </summary>

프로모션 할인이 적용된 결제 완료(`status:paid`)건을 취소하는 경우 기본적으로 적용되었던 할인 금액이 프로모션 예산에 복구됩니다.
만약 예산 복구 기능 사용을 원하지 않는 경우 프로모션 추가/수정시 **프로모션 예산 미복구**를 활성화해 주세요.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<details>

<summary> 프로모션 할인 적용 시점 안내 </summary>

결제창을 호출하는 시점에 프로모션 예산에서 할인 금액에 대해 선점하고 있기 때문에, 실제 예산이 모두 소진되지 않더라도 선점된 프로모션 금액을 포함하여
예산을 초과하는 경우 할인 금액이 적용되지 않습니다.

만약 결제 시도 중 결제 실패 혹은 사용자가 결제 승인 전 취소하는 경우 선점되었던 할인 금액은 즉시 예산으로 귀속됩니다.
이후 결제 요청 고객에게 다시 할인 금액이 적용됩니다.

</details>

<details>

<summary> 프로모션 할인 미적용 케이스 안내 </summary>

생성한 프로모션의 최소 결제 금액 조건에 따라 프로모션 할인이 적용되지 않을 수 있습니다.
또한 할인 조건에 따라 적용되어야 하는 할인 금액보다 예산이 적은 경우 프로모션 할인이 적용되지 않습니다.

예시) 프로모션 A의 상태가 남은 예산 금액 : 1,000원, 할인율 : 10%일 때,
주문 금액이 200,000원인 경우 적용되어야 하는 할인 금액이 2,000원이므로 고객이 결제 요청 시 프로모션 할인이 적용되지 않습니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션이 할인 적용 건 부분 취소 안내 </summary>

프로모션 할인이 적용된 거래 건을 부분 취소하는 경우 상품의 주문금액(프로모션 할인이 적용되지 않은 원래 금액)
을 입력해야 합니다.

결제 취소 시 콘솔 내 결제취소 상세 모달에서 \[프로모션 예산 설정] 옵션을 선택할 수 있으며, 결제 취소 API 이용시
`promotionDiscountRetainOption` 파라미터로 옵션을 선택할 수 있습니다.

- 프로모션 혜택 조정 (기본설정) : 결제 부분 취소시 잔여 결제 금액이 할인 적용 기준 금액보다 적은 경우
  잔여 결제 금액에 맞추어 프로모션 할인 금액이 차감되어 적용됩니다.

  - 예시 1 :
    프로모션 할인 조건이 `5천원 이상 결제시 10% 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5400원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 조정** 옵션을 선택한 경우 프로모션 조건에 부합하지 않아 실제 1400원이 결제 취소 요청되며,
    결제 완료 금액은 4000원이 됩니다.

  - 예시 2 :
    프로모션 할인 조건이 `5천원 이상 결제시 1000원 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5000원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 조정** 옵션을 선택한 경우 프로모션 조건에 부합하지 않아 실제 1000원이 결제 취소 요청되며,
    결제 완료 금액은 4000원이 됩니다.

- 프로모션 혜택 유지 : 결제 부분 취소시 잔여 결제 금액이 할인 적용 기준 금액보다 적더라도 프로모션 할인 혜택이
  그대로 유지됩니다. 할인 혜택을 동일한 수준으로 유지하기 위해 기존에 적용된 할인 조건을 할인율로 환산하여 적용하게 됩니다.

  - 예시 1 :
    프로모션 할인 조건이 `5천원 이상 결제시 10% 할인`일 때, 6000원 결제 요청시 프로모션 할인이 적용되어 5400원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 유지** 옵션을 선택한 경우 실제 1800원이 결제 취소 요청되며,
    결제 완료 금액은 3600원이 됩니다.
    (주문금액 6000원에서 2000원 부분 취소시 주문금액은 4000원이며 기존 할인 조건인 10% 할인이 유지되어 실 결제 금액은 3600원이 됩니다.)

  - 예시 2 :
    프로모션 할인 조건이 `5천원 이상 결제시 1000원 할인`일 때 6000원 결제 요청시 프로모션 할인이 적용되어 5000원이 실제 결제됩니다.
    이 때, 2000원 부분 취소시 **프로모션 혜택 유지** 옵션을 선택한 경우 실제 1800원이 결제 취소 요청되며,
    결제 완료 금액은 3200원이 됩니다.
    (본 예시에서 기존에 적용된 할인 조건인 `5천원 이상 결제시 1000원 할인`은 20% 할인으로 환산됩니다. 주문금액 6000원에서 2000원 부분 취소시
    남은 주문금액은 4000원이므로, 취소 이후 결제 완료 금액은 3200원이 되고 실제 취소 금액은 1800원이 됩니다.)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 프로모션 할인이 적용된 건에 여러번 부분 취소 요청하는 경우 안내 </summary>

프로모션 할인이 적용된 거래 건을 여러번 부분 취소하는 경우 처음 선택한 취소 옵션으로만 가능합니다.
예를 들어 \[프로모션 혜택 유지]로 처음 부분 취소한 경우 동일 거래 건에 대해 부분 취소를 진행하는 경우
\[프로모션 혜택 유지] 옵션으로만 취소가 가능합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/extra/promotion/intro

---
title: 프로모션
description: 카드 즉시 할인을 쉽게 운영 및 관리할 수 있는 서비스입니다.
targetVersions:
  - v1
  - v2
---

## 프로모션이란?

고객사가 카드사와 계약하여 사용자에게 즉시 할인을 제공하는 **카드 즉시 할인 서비스**를 운영하고 관리할
수 있는 서비스 입니다.

카드 즉시 할인 서비스를 이용시 필요한 **프로모션 관리 시스템**과 **프로모션 정산 대사 시스템** 을 제공합니다.
포트원 콘솔에서 기간, 할인 조건, 예산 등 다양한 옵션의 프로모션을 설정할 수 있으며,
생성된 프로모션 아이디를 포함하여 결제 요청시 즉시 할인을 적용할 수 있습니다.
또한, 프로모션이 종료된 후 할인이 적용된 거래 건들만 모아 엑셀로 다운로드하여 한 번에 결제 내역 정리 및 정산 금액 대사를 할 수 있습니다.

프로모션은 일부 고객사에 한하여 제공하고 있으며, 프로모션 도입을 원하시는 고객사의 경우 포트원으로 문의 주시기 바랍니다.

<div class="hint" data-style="info">

프로모션 메뉴의 경우 도입 고객사에 한하여 포트원 콘솔 내에서 확인하실 수 있습니다.

</div>

[프로모션 생성하기](https://developers.portone.io/opi/ko/extra/promotion/console-guide)

[프로모션 결제 연동하기](https://developers.portone.io/opi/ko/extra/promotion/integration)


# https://developers.portone.io/opi/ko/extra/smart-routing/console-guide

---
title: 스마트 라우팅 - 콘솔 가이드
description: 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
targetVersions:
  - v1
  - v2
---

<div class="hint" data-style="info">

스마트 라우팅 기능이 궁금하다면 [스마트 라우팅 기능 소개](https://developers.portone.io/opi/ko/extra/smart-routing/intro)를 확인해 보세요!

</div>

## 스마트 라우팅 그룹 생성하기

스마트 라우팅을 사용하기 위해서는 포트원 관리자콘솔 내 \[연동 관리] - \[스마트 라우팅]에서 그룹 설정이 필요합니다.

1. (관련 이미지 첨부)

   포트원 콘솔 내에서 \[연동 관리] - \[스마트 라우팅]을 클릭하세요.

2. \[스마트 라우팅 그룹 생성하기]를 클릭하세요.

3. (관련 이미지 첨부)

   연동할 환경을 선택하세요. \[실연동], \[테스트] 선택 시 해당 환경으로 등록된 채널만 표시됩니다.
   스마트 라우팅 그룹 내에 동일한 환경의 채널끼리만 설정이 가능합니다.

4. \[그룹 이름]은 필수로 입력해야 합니다. 그룹 이름은 별칭과 같이 사용되므로 그룹의 특징을
   잘 나타내는 이름으로 작성하시길 권장드립니다.

5. \[그룹 아이디]의 경우 그룹 생성 후 자동으로 채번되며, 결제 요청 시 사용됩니다.

6. \[+채널 추가]를 클릭하세요.

7. (관련 이미지 첨부)

   그룹에 사용할 채널을 선택하세요. [지원 PG사 확인 바로가기](https://developers.portone.io/opi/ko/extra/smart-routing/intro?v=v2#사용-가능한-pg사-및-결제수단-)

8. 채널은 최소 1개부터 최대 10개까지 설정이 가능합니다.

9. 채널 추가 후 **비활성화** 하는 경우 해당 채널은 입력된 비율과 상관없이 라우팅 시 배제됩니다.

10. 비율의 합은 100% 미만이거나 초과될 수 없습니다. 총 합이 100%여야만 합니다.

11. 채널 설정을 완료하였으면 \[저장] 버튼을 클릭하여 그룹을 생성합니다.

## 스마트 라우팅 그룹 수정하기

1. (관련 이미지 첨부)

   생성된 그룹은 위와 같이 표시됩니다.

2. 그룹 설정을 변경하고 싶으신 경우 해당 그룹을 클릭하세요.

3. (관련 이미지 첨부)

   이미 생성된 그룹 내에서 결제대행사를 추가 혹은 삭제할 수 있습니다.

4. 결제대행사별 비율을 변경할 수 있습니다.

5. \[예약 시간 설정]을 체크한 후 시간을 설정하면 변경 시점을 예약할 수 있습니다. 예약 시간은 시간 단위로
   선택 가능하며, 미래 시점으로만 예약할 수 있습니다.

6. 즉시 적용을 원하시는 경우 \[예약 시간 설정]을 체크하지 않은 채 \[저장]을 클릭하세요.

## 스마트 라우팅 그룹 삭제하기

1. 수정 모드에서 \[그룹 삭제]를 클릭하세요.

2. 삭제된 그룹은 복원되지 않으며, 결제 요청 파라미터 변경 없이 그룹을 삭제하는 경우 결제가
   원활하지 않을 수 있습니다. 삭제 시 신중히 진행하시길 권장드립니다.


# https://developers.portone.io/opi/ko/extra/smart-routing/integration

---
title: 스마트 라우팅 - 연동하기
description: 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
targetVersions:
  - v1
  - v2
---

<div class="hint" data-style="info">

스마트 라우팅 기능이 궁금하다면 [스마트 라우팅 기능 소개](https://developers.portone.io/opi/ko/extra/smart-routing/intro)를 확인해 보세요!

스마트 라우팅을 이용하시려면 관리자콘솔에서 스마트 라우팅 그룹을 먼저 설정해야합니다.
그룹 설정 방법이 궁금하다면 [스마트 라우팅 그룹 설정 가이드](https://developers.portone.io/opi/ko/extra/smart-routing/console-guide)를 확인해 보세요.

</div>

## SDK(결제창) 인증결제 연동하기

SDK를 이용하는 경우 결제 호출 시 생성한 스마트 라우팅 그룹의 ID를 전용 파라미터인 `channelGroupId`에
지정하여 사용이 가능합니다.
이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다. 단, 결제대행사 별로 지원하는 기능이 다를 수 있으니
그룹 내에서 사용하는 모든 결제대행사에서 지원하는 기능만 사용하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/auth) 문서를 참고하시기 바랍니다.

### 예제 코드

```ts
IMP.request_pay(
  {
    // 결제대행사를 지정할 때 사용한 channelKey, pg 대신
    // channelGroupId 파라미터에 스마트 라우팅 그룹 ID를 설정합니다.
    channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",
    pay_method: "card", //결제수단 선택
    merchant_uid: "ORD20180131-0000011", //고객사 주문번호
    name: "Norway swivel chair", //주문명
    amount: 1000, // 결제 금액
    //고객 정보
    buyer_email: "gildong@gmail.com",
    buyer_name: "Hong Gildong",
    buyer_tel: "010-4242-4242",
    buyer_addr: "Shinsa-dong, Gangnam-gu, Seoul",
    buyer_postcode: "01181",
  },
  function (rsp) {
    // callback
    if (rsp.success) {
      // Payment is successful
    } else {
      // Payment failed
    }
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

인증결제와 관련된 자세한 내용은 [인증 결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/checkout) 문서를 참고하시기 바랍니다.

### 예제 코드

```tsx
//포트원 인증결제 SDK 호출
PortOne.requestPayment({
  storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",

  // 결제대행사를 지정할 때 사용한 channelKey 대신
  // channelGroupId 파라미터에 스마트 라우팅 그룹 ID를 설정합니다.
  channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",

  // 기타 인증결제 파라미터 설정
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
  payMethod: "CARD",

  // 스마트 라우팅 사용 시 필수 파라미터 추가 설정
  customer: {
    fullName: "홍길동",
    phoneNumber: "010-1234-5678",
    email: "test@test.com",
  },
});
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

- channelGroupId: string

  **스마트 라우팅 그룹 ID**

  관리자 콘솔의 \[연동 관리] → \[스마트 라우팅] 메뉴에서 확인할 수 있습니다.

  스마트 라우팅 그룹 ID를 지정하여 결제창을 호출하면, 스마트 라우팅 그룹 내 설정된 채널 비율에 따라
  확률 기반으로 하나의 결제대행사가 호출됩니다.

### 필수 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

각 파라미터에 대한 상세한 설명은 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq) 문서를 참고하시기 바랍니다.

- merchant\_uid: string

  **고객사 주문번호**

- name: string

  **주문명**

- amount: number

  **결제금액**

- pay\_method: string

  **결제수단 구분코드**

- custom\_data: object

  **사용자 정의 데이터**

  결제 응답시 **echo** 로 받아보실 수 있는 필드 입니다.

  JSON notation(string)으로 저장됩니다.

  주문 건에 대해 부가정보를 저장할 공간이 필요할 때 사용합니다

- tax\_free: number

  **면세금액**

  결제금액 중 면세금액에 해당하는 금액을 입력합니다.

- vat\_amount: number

  **부가세**

  결제금액 중 부가세에 해당하는 금액을 입력합니다. (기본값: null)

- vbank\_due: string

  **가상계좌 입금기한**

  스마트 라우팅을 이용한 가상계좌 결제 사용 시 필수 입력해야 합니다.

  다음과 같은 형식으로 설정이 가능합니다 :

  `YYYY-MM-DD`

  `YYYYMMDD`

  `YYYY-MM-DD HH:mm:ss`

  `YYYYMMDDHHmmss`

- buyer\_tel: string

  **주문자 연락처**

  일부 PG사에서 해당 필드 누락시 오류 발생

- buyer\_email: string

  **주문자 이메일**

  일부 PG사에서 해당 필드 누락시 오류 발생(페이먼트월)

기타 파라미터는 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v1-sdk/javascript-sdk/payrq) 문서를 참고하시길 바랍니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

각 파라미터에 대한 상세한 설명은 [결제요청 파라미터](https://developers.portone.io/sdk/ko/v2-sdk/payment-request) 문서를 참고하시기 바랍니다.

- storeId: string

  **고객사 ID**

- paymentId: string

  **고객사 주문 고유 번호**

- orderName: string

  **주문명**

- totalAmount: number

  **결제 금액**

- currency: string

  **결제 통화**

- payMethod: string

  **결제수단 구분코드**

- virtualAccount?: object

  가상계좌 결제 사용 시 필요한 파라미터입니다.

  - accountExpiry: object

    **가상계좌 입금 만료기한**

    스마트 라우팅을 이용한 가상계좌 결제 사용 시 필수 입력해야 합니다.

    - validHours?: number

      **가상계좌 입금 유효 시간**

    - dueDate?: string

      **가상계좌 입금 유효 시각**

- easyPay?: object

  **간편결제 정보**

  스마트 라우팅을 이용한 간편결제 다이렉트 호출 시 필수 입력해야 합니다.

  - easyPayProvider?: string

    **간편결제 수단**

- productType: string

  **상품 유형**

  스마트 라우팅을 이용한 휴대폰 소액결제 사용 시 필수 입력해야 합니다.

- customer: object

  **구매자 정보**

  - fullName: string

    **구매자 전체 이름**

    `fullName` 파라미터 대신 `firstName`과 `lastName` 파라미터를 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

  - email: string

    **구매자 이메일 주소**

기타 파라미터는 \[결제요청 파라미터]\(/sdk/ko/v2-sdk/payment-request 문서를 참고하시길 바립니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 스마트 라우팅 내 새로운 결제대행사 채널 추가 시 테스트 후 사용하시길 권장드립니다. </summary>

결제대행사별로 결제 수단에 따라 필수 파라미터가 다르므로 그룹 내 새로운 결제대행사 추가 시 테스트 환경에서
테스트를 진행한 후 실환경에 반영하시길 권장 드립니다.
필수 파라미터 조건을 충족하지 못하는 경우 에러가 리턴되며, 결제창이 정상적으로 호출되지 않을 수 있습니다.

</details>

<details>

<summary> 간편결제 사용을 원하시는 경우 허브형으로 사용하시길 권장드립니다. </summary>

**간편결제 허브형을 사용하시는 경우**, 결제대행사 별 계약에 따라 결제창에 표시되는 간편결제가 상이할 수 있습니다.

**간편결제 다이렉트 호출을 사용하시는 경우**, 결제대행사 별 계약에 따라 결제 호출 시 에러가 리턴되며 결제창이
호출되지 않을 수 있습니다. 가급적 결제대행사 별 동일한 간편결제 수단을 모두 계약하신 후 사용하시길 권장드립니다.

단, **간편결제 직연동**의 경우 스마트 라우팅 기능을 제공하지 않습니다.

</details>

## API 수기(키인)결제 연동하기

API를 이용하는 경우 결제 호출 시 생성한 스마트 라우팅 그룹의 ID를 전용 파라미터인 `channelGroupId`에
지정하여 사용이 가능합니다.
이 외에 다른 결제 기능들은 기존과 동일하게 사용이 가능합니다. 단, 결제대행사 별로 지원하는 기능이 다를 수 있으니
그룹 내에서 사용하는 모든 결제대행사에서 지원하는 기능만 사용하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

수기(키인)결제와 관련된 자세한 내용은 [수기(키인)결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/keyin) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 예제 코드

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts title="server-side"
// card_number, expiry, birth, pwd_2digit 등 정보를 전달받습니다.
// 포트원 비인증 결제(일회성) API 호출
const onetimeResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/onetime",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      // 중략...
    }),
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<div class="tabs-container">

<div class="tabs-content" data-title="카드 결제">

```ts
// 포트원 수기(키인)결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/instant`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // channelGroupId 파라미터에 스마트 라우팅 그룹 ID를 설정합니다.
      channelGroupId: "channel-group-test-94ab2b51-b7e1-4b74-9a9c-9fb6e117a6ac",
      orderName: "월간 이용권 정기결제",
      // 수기 결제 API를 참고해 고객 정보를 채워주세요.
      customer: {
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",

      // 수기(키인)결제 API를 참고해 카드 / 가상계좌 정보를 채워주세요.
      method: {
        card: {
          credential: {
            number: "0000123400001234", // 16자리 숫자만 입력해야 합니다.
            expiryYear: "26", // 연도의 뒤 2자리를 입력해야 합니다.
            expiryMonth: "12",
            birthOrBusinessRegistrationNumber: "900101", // 생년월일 6자리 또는 사업자 등록번호 10자리를 입력해야 합니다.
            passwordTwoDigits: "00", // 카드 비밀번호 앞 2자리 입력해야 합니다.
          },
        },
      },
      productType: "PHYSICAL", // 상품이 실물인 경우 `PHYSICAL`, 디지털인 경우 `DIGITAL` 입력해야 합니다.
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

</div>

<div class="tabs-content" data-title="가상계좌 결제">

```ts
// 포트원 수기(키인)결제 API 호출
const paymentResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/instant`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelGroupId: "channel-group-live-94ab2b51-b7e1-4b74-9a9c-9fb6e117a6ac",
      orderName: "월간 이용권 정기결제",
      // 수기 결제 API를 참고해 고객 정보를 채워주세요.
      customer: {
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
        phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
        email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",

      // 수기(키인)결제 API를 참고해 카드 / 가상계좌 정보를 채워주세요.
      method: {
        virtaulAccount: {
          bank: "KOOKMIN", // 은행별 enum 확인 후 발급할 은행 값을 입력해야 합니다.
          expiry: {
            dueDate: "2023-12-21T00:00:00+09:00", // RFC 3339 형식으로 입력해야 합니다.
          },
          option: {
            type: "NORMAL", // 일반 가상계좌 (회전식)인 경우 `NORMAL`로 입력해야 합니다.
          },
          cashReceipt: {
            type: "PERSONAL", // 소득공제용인 경우 `PERSONAL`, 지출증빙용인 경우 `CORPORATE`로 입력해야 합니다.
            customerIdentityNumber: "01000001234", // 현금영수증 발급 번호
          },
          remitteeName: "포트원", // 가상계좌 예금주명을 입력해야 합니다.
        },
        productCount: 1, // 상품 개수를 입력해야 합니다.
      },
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

</div>

</div>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 주요 파라미터

- channelGroupId: string

  **스마트 라우팅 그룹 ID**

  관리자 콘솔의 \[연동 관리] → \[스마트 라우팅] 메뉴에서 확인할 수 있습니다.

  스마트 라우팅 그룹 ID를 지정하여 결제창을 호출하면, 스마트 라우팅 그룹 내 설정된 채널 비율에 따라
  확률 기반으로 하나의 결제대행사가 호출됩니다.

### 필수 파라미터

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- merchant\_uid: string

  **고객사 거래 고유번호**

- amount: number

  **주문 금액**

- card\_number: string

  **카드번호**

  (dddd-dddd-dddd-dddd) 기재 양식을 유의하세요.

- expiry: string

  **카드 유효기간**

  (YYYY-MM) 기재 양식을 유의하세요.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- orderName: string

  **주문명**

- amount: object

  **주문 금액**

  - total: number

    **결제 금액**

- currency: string

  **결제 통화**

- customer: object

  **구매자 정보**

  - name: object

    **구매자 이름**

    - full: string

      **구매자 전체 이름**

      `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

    가상계좌 발급 시 필수 입력해야 합니다.

  - email: string

    **구매자 이메일 주소**

    가상계좌 발급 시 필수 입력해야 합니다.

- method: object

  **결제 수단**

  - card: object

    **카드 결제**

    - credential: object

      **카드 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **카드 유효기간 중 연도**

      - expiryMonth: string

        **카드 유효기간 중 월**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자번호**

      - passwordTwoDigits: string

        **카드 비밀번호 앞 2자리**

  - virtualAccount: object

    **가상 계좌**

    - bank: object

      **은행 정보**

    - expiry: object

      **만료 기한**

      - dueDate: string

        **만료 시점**

    - option: object

      **가상계좌 발급 방식**

      - type: string

        **가상계좌 발급 유형**

        일반 가상계좌 (회전식)인 경우 `NOMAL`를 입력해야 합니다.

    - cashReceipt: object

      **현금영수증 정보**

      - type: string

        **현금영수증 발급 유형**

      - customerIdentityNumber: string

        **현금영수증 발급 식별 정보**

    - remitteeName: string

      **가상계좌 예금주명**

- productType: string

  **상품 유형**

  KSNET로 카드 결제시에만 MID 설정 정보와 검증을 진행합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

- productCount: string

  **상품 개수**

  스마트로로 가상계좌 발급시에만 정보가 유효합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 유의사항

<details>

<summary> 실제로 결제된 결제대행사 정보는 결제 조회 시 확인할 수 있습니다. </summary>

실제로 결제를 요청하여 결제 승인, 실패된 경우 결제대행사 정보를 확인할 수 있습니다.
<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->결제대행사 정보는 콘솔 결제내역 또는 결제 조회 API의 `pg_provider` 파라미터에서 확인 가능합니다.<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->
<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->결제대행사 정보는 콘솔 결제내역 또는 결제 조회 API의 `channel` 파라미터에서 확인 가능합니다.<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</details>

<details>

<summary> 수기(키인) 결제 시 카드를 이용하는 경우 결제대행사 계약을 사전에 확인하시길 바랍니다. </summary>

카드 결제의 경우 결제대행사에 따라 카드번호, 유효기간, 비밀번호, 생년월일 4가지 정보를 다르게 요구할 수 있습니다.
스마트 라우팅 사용 시 4개의 정보를 전부 입력하시거나 사용하시는 결제대행사의 계약 조건을 모두 충족할 수 있도록
파라미터를 입력한 후 결제 요청을 해야합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary> 가상계좌 발급 이용 시 고정식 가상계좌 사용을 권장하지 않습니다.</summary>

고정식 가상계좌의 경우 결제대행사별로 발급 유형이 다르므로 스마트 라우팅 이용 시 가상계좌 발급이
올바르지 않을 수 있습니다.
가상계좌 발급을 이용하시는 경우 일반(회전식) 가상계좌를 이용하시길 권장드립니다.

</details>

<details>

<summary> 가상계좌 발급 이용 시 `virtualAccount.expiry.validHours` 사용을 권장하지 않습니다.</summary>

스마트 라우팅 이용 시 가상계좌 만료시간 파라미터 중 `virtualAccount.expiry.validHours` 사용을 권장하지 않습니다.
해당 파라미터의 경우 지원하는 PG사가 한정적이기 때문에 해당 파라미터를 사용하는 경우 일부 PG사에 한하여
정상적으로 가상계좌 발급이 불가능할 수 있습니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## API 빌링키 발급 및 정기결제 연동하기

빌링키 발급 API 호출 시 생성한 스마트 라우팅 그룹의 ID를 전용 파라미터인 `channelGroupId`에
지정하여 사용이 가능합니다.
`channelGroupId`를 지정하여 빌링키 발급 요청 시 그룹 내 모든 채널로 빌링키 발급을 시도합니다.
이후 발급된 결제대행사의 빌링키가 모두 포트원 빌링키에 맵핑됩니다.

<div class="hint" data-style="info">

스마트 라우팅 기능을 이용하여 발급된 포트원 빌링키는 **슈퍼빌링키**라고 부릅니다.

</div>

해당 빌링키로 빌링키 결제 또는 예약결제 API를 이용하여 결제 요청 시 해당 스마트 라우팅 그룹 내 채널
비율 설정에 따라 결제를 요청합니다.

이 외에 빌링키 발급 및 결제 요청 시 다른 기능들은 기존과 동일하게 사용이 가능합니다.
단, 결제대행사 별로 지원하는 기능이 다를 수 있으니 그룹 내에서 사용하는 모든 결제대행사에서 지원하는
기능만 사용하시길 권장드립니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

빌링키 결제와 관련된 자세한 내용은 [비인증결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v1/non-auth) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

빌링키 결제와 관련된 자세한 내용은 [빌링결제 연동하기](https://developers.portone.io/opi/ko/integration/start/v2/billing/readme) 문서를 참고하시기 바랍니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

### 예제 코드

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 발급">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts
const issueResponse = await fetch(
  `https://api.iamport.kr/subscribe/customers/${customer_uid}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelGroupId: "channel-group-live-f042e8e2-92f1-4f68-ad61-cec6ede41529",
      customer_id: customer_id, //고객 식별 정보로 고객사에서 기입
      card_number: "YYYY-YYYY-YYYY-YYYY", // 카드 번호 16자리
      expiry: "YYYY-MM", // 카드 유효기간
      birth: "YYMMDD", // 생년 월일. 무기명 법인카드의 경우 사업자 번호 10자리 입력
      pwd_2digit: "NN", //카드 비밀번호 앞 2자리
      // 중략...
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
const {
  billingKeyInfo: { customer_uid },
} = await issueResponse.json();
// 빌링키가 발급되었습니다! 빌링키를 저장하거나 결제하는 로직을 구성하세요.
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

```ts
const issueResponse = await fetch("https://api.portone.io/billing-keys", {
  method: "POST",
  headers: {
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chanenlGroupId: "channel-group-live-94ab2b51-b7e1-4b74-9a9c-9fb6e117a6ac",
    customer: {
      id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
      name: {
        full: "김포트", // 고객 이름을 입력해야 합니다.
      },
      phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
      email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
    },
    method: {
      card: {
        credential: {
          number: "0000123400001234", // 16자리 숫자만 입력해야 합니다.
          expiryYear: "26", // 연도의 뒤 2자리를 입력해야 합니다.
          expiryMonth: "12",
          birthOrBusinessRegistrationNumber: "900101", // 생년월일 6자리 또는 사업자 등록번호 10자리를 입력해야 합니다.
          passwordTwoDigits: "00", // 카드 비밀번호 앞 2자리 입력해야 합니다.
        },
      },
    },
  }),
});
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);

const {
  billingKeyInfo: { billingKey, channels },
  channelSpecificFailures,
} = await issueResponse.json();

// `channels` 필드에 사용 가능한 채널 여러 개가 포함된 것을 확인할 수 있습니다.
// 이 필드는 빌링키 조회에서도 확인 가능합니다.
console.log(`빌링키: ${billingKey}`);
console.log(`발급 성공한 채널: ${channels}`);

if (channelSpecificFailures.length !== 0)
  console.log(`발급에 실패한 채널이 있습니다: ${channelSpecificFailures}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts
// 포트원 빌링키 결제 API 호출
const paymentResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/again",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_uid: "customer_uid", // 슈퍼 빌링키
      merchant_uid: "merchant_uid",
      name: "월간 이용권 정기결제",
      // 빌링키 결제 API를 참고해 고객 정보를 채워주세요.
      amount: {
        total: 8900,
      },
      currency: "KRW",
    }),
  },
);
if (!paymentResponse.ok)
  throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/billing-key`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
      orderName: "후불 결제",
      customer: {
        id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
        name: {
          full: "김포트", // 고객 이름을 입력해야 합니다.
        },
        phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
        email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
      },
      amount: {
        total: 8900,
      },
      currency: "KRW",
      productType: "PHYSICAL", // 상품이 실물인 경우 `PHYSICAL`, 디지털인 경우 `DIGITAL` 입력해야 합니다.
      productCount: 1, // 상품 개수를 입력해야 합니다.
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

```ts title="server-side"
// 결제 예약
const paymentResponse = await fetch(
  "https://api.iamport.kr/subscribe/payments/schedule",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_uid: "gildong_0001_1234", // 슈퍼 빌링키
      schedules: [
        {
          merchant_uid: "order_monthly_0001", // 주문 번호
          schedule_at: 1519862400, // 결제 시도 시각 in Unix Time Stamp. 예: 다음 달 1일
          amount: 8900,
          name: "월간 이용권 정기결제",
          buyer_name: "홍길동",
          buyer_tel: "01012345678",
          buyer_email: "gildong@gmail.com",
          // 중략...
        },
      ],
    }),
  },
);
```

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

```ts
const issueResponse = await fetch(
  `https://api.portone.io/payments/${encodeURIComponent(UNIQUE_PAYMENT_ID)}/schedule`,
  {
    method: "POST",
    headers: {
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payment: {
        billingKey: "billing-key-018fa367-cdd9-d8fd-2256-c43ce0e475d6", // 발급된 빌링키 값을 입력해야 합니다.
        orderName: "월간 이용권 정기 결제",
        customer: {
          id: "customerId_2333", // 고객사가 지정한 고객 식별정보를 입력해야 합니다.
          name: {
            full: "김포트", // 고객 이름을 입력해야 합니다.
          },
          phoneNumber: "01000001234", // 고객 전화번호를 입력해야 합니다.
          email: "port@portone.io", // 고객 이메일을 입력해야 합니다.
        },
        amount: {
          total: 8900,
        },
        currency: "KRW",
        productType: "PHYSICAL", // 상품이 실물인 경우 `PHYSICAL`, 디지털인 경우 `DIGITAL` 입력해야 합니다.
        productCount: 1, // 상품 개수를 입력해야 합니다.
      },
      timeToPay: "2024-05-01T00:00:00+09:00", // ISO8601 형식으로 입력해야 합니다.
    }),
  },
);
if (!issueResponse.ok)
  throw new Error(`issueResponse: ${await issueResponse.json()}`);
```

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

</div>

### 주요 파라미터

- channelGroupId: string

  **스마트 라우팅 그룹 ID**

  관리자 콘솔의 \[연동 관리] → \[스마트 라우팅] 메뉴에서 확인할 수 있습니다.

  스마트 라우팅 그룹 ID를 지정하여 결제창을 호출하면, 스마트 라우팅 그룹 내 설정된 채널 비율에 따라
  확률 기반으로 하나의 결제대행사가 호출됩니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

스마트 라우팅 그룹 ID를 지정하여 빌링키 발급 API를 호출하면, 스마트 라우팅 그룹 내 활성화 된 채널들에 대해 빌링키 발급을 시도합니다.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

### 필수 파라미터

<div class="tabs-container">

<div class="tabs-content" data-title="빌링키 발급">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- customer\_uid: string

  **구매자의 결제 수단 식별 고유번호**

- card\_number: string

  **카드번호**

  (dddd-dddd-dddd-dddd) 기재 양식을 유의하세요.

- expiry: string

  **카드 유효기간**

  (YYYY-MM) 기재 양식을 유의하세요.

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- customer: object

  **구매자 정보**

  - name: object

    **구매자 이름**

    - full: string

      **구매자 전체 이름**

      `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

    가상계좌 발급 시 필수 입력해야 합니다.

  - email: string

    **구매자 이메일 주소**

    가상계좌 발급 시 필수 입력해야 합니다.

- method: object

  **결제 수단**

  - card: object

    **카드 결제**

    - credential: object

      **카드 정보**

      - number: string

        **카드 번호**

      - expiryYear: string

        **카드 유효기간 중 연도**

      - expiryMonth: string

        **카드 유효기간 중 월**

      - birthOrBusinessRegistrationNumber: string

        **생년월일 또는 사업자번호**

      - passwordTwoDigits: string

        **카드 비밀번호 앞 2자리**

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- customer\_uid: string

  **구매자의 결제 수단 식별 고유번호**

- merchant\_uid: string

  **고객사 주문번호**

  동일한 주문 번호로 중복 결제가 불가하며, 스마트로 신모듈의 경우 특수문자 포함이 불가능합니다.

- amount: number

  **결제금액**

- name: string

  **제품명**

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- orderName: string

  **주문명**

- amount: object

  **주문 금액**

  - total: number

    **결제 금액**

- currency: string

  **결제 통화**

- customer: object

  **구매자 정보**

  - id: string

    **구매자 식별정보**

  - name: object

    **구매자 이름**

    - full: string

      **구매자 전체 이름**

      `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

  - phoneNumber: string

    **구매자 연락처**

    가상계좌 발급 시 필수 입력해야 합니다.

  - email: string

    **구매자 이메일 주소**

    가상계좌 발급 시 필수 입력해야 합니다.

- productType: string

  **상품 유형**

  KSNET로 카드 결제시에만 MID 설정 정보와 검증을 진행합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

- productCount: string

  **상품 개수**

  스마트로로 가상계좌 발급시에만 정보가 유효합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

<div class="tabs-content" data-title="빌링키 예약 결제">

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

- customer\_uid: string

  **구매자의 결제 수단 식별 고유번호**

- schedules.merchant\_uid: string

  **고객사의 주문번호**

  동일한 주문 번호로 중복 결제가 불가하며, 스마트로 신모듈의 경우 특수문자 포함이 불가능합니다.

- schedules.schedule\_at: integer

  **예약시각**

- schedules.currency: string

  **결제 통화**

  e.g) KRW, USD 등 (단, 페이팔 신모듈의 경우 KRW 결제가 불가능하므로 반드시 유효한 값을 필수로 입력해야합니다.)

- schedules.amount: number

  **결제금액**

- schedules.name: string

  **주문명**

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

- paymentId: string

  **고객사 주문 고유 번호**

- payment: object

  **결제 정보**

  - billingKey: string

    **빌링키**

  - orderName: string

    **주문명**

  - amount: object

    **주문 금액**

    - total: number

      **결제 금액**

  - currency: string

    **결제 통화**

  - customer: object

    **구매자 정보**

    - name: object

      **구매자 이름**

      - full: string

        **구매자 전체 이름**

        `full` 파라미터 대신 `separated.first` 와 `separated.last` 파라미터로 사용해도 됩니다.

    - phoneNumber: string

      **구매자 연락처**

      가상계좌 발급 시 필수 입력해야 합니다.

    - email: string

      **구매자 이메일 주소**

      가상계좌 발급 시 필수 입력해야 합니다.

  - productType: string

    **상품 유형**

    KSNET로 카드 결제시에만 MID 설정 정보와 검증을 진행합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

  - productCount: string

    **상품 개수**

    스마트로로 가상계좌 발급시에만 정보가 유효합니다. 다른 PG사 결제 요청시에는 별도로 검증하지 않습니다.

- timeToPay: string

  **결제 예정 시점**

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

</div>

</div>

### 유의사항

<details>

<summary> 빌링키 발급 요청 시 지정한 그룹 내 모든 채널로 빌링키를 발급합니다. </summary>

그룹 내 채널을 활성화한 채로 비율을 0으로 설정한 경우 해당 채널로도 빌링키 발급을 요청합니다.
빌링키 발급을 원하지 않는 경우 채널을 비활성화 상태로 두거나 그룹 내에서 삭제해야 합니다.

</details>

<details>

<summary> 슈퍼빌링키 발급 시 일부 PG사에 대해서만 발급될 수 있습니다.  </summary>

슈퍼 빌링키를 발급 요청 시 일부 PG사는 요청은 성공하고, 일부 PG사는 요청은 실패하는 경우가 발생할 수 있습니다.
이 경우 포트원 빌링키(슈퍼빌링키)는 정상적으로 발급되지만 사용 가능한 빌링키는 요청이 성공한
결제대행사의 빌링키로 제한됩니다.

요청이 실패한 결제대행사 목록은 API 응답의 `channelSpecificFailures` 필드로 확인할 수 있고,
이 배열에 항목이 있는 경우 필요에 따라 빌링키 발급 실패로 취급하여 사용할 수 있습니다.

</details>

<details>

<summary> 슈퍼빌링키 결제 시 특정 PG사를 지정할 수 있습니다.  </summary>

슈퍼 빌링키를 이용해 결제를 요청할 때 결제 요청에 `channelKey` 파라미터를 전달하는 경우 해당 채널로
결제를 요청합니다.

</details>

<details>

<summary> 슈퍼빌링키 결제 시 그룹 설정에 따라 결제됩니다.  </summary>

`channelKey`를 별도로 전달하지 않은 경우 아래와 같이 자동으로 채널이 결정됩니다.

- 슈퍼 빌링키 발급에 사용된 스마트 라우팅 그룹의 현재 설정된 채널 비율에 따라 확률에 기반하여
  자동으로 선택합니다.

- 만약 결제 시점에 스마트 라우팅 그룹 내에 새로운 결제대행사 채널이 추가되어 있는 경우,
  해당 결제대행사의 빌링키가 발급되어 있지 않으므로 채널 선택 시 제외됩니다.

예를 들어 PG사 A, B, C에 대해 슈퍼 빌링키가 발급되었고,
이후 그룹 설정을 B 10%, C 30%, D 60%로 변경한 후 결제 요청을 하면
빌링키가 B와 C에 대해서만 존재하기 때문에 B와 C의 설정된 비율에 따라 확률에 기반하여 자동으로 선택됩니다.

</details>

<details>

<summary> 슈퍼 빌링키를 이용하여 결제 요청 시 불가피하게 그룹 내 비율이 0인 채널로 진행될 수 있습니다. </summary>

슈퍼 빌링키를 이용하여 결제 요청했을 때, 슈퍼 빌링키에 맵핑된 결제대행사 빌링키 중 그룹 비율에 따라
사용 가능한 빌링키가 없는 경우 그룹 내 채널 비율이 0으로 설정되어있더라도 해당 결제대행사로 결제가
일어날 수 있습니다.

예를 들어, 그룹 내에 나이스페이먼츠, KG이니시스, 토스페이먼츠 총 3개의 결제대행사를 설정한 경우 빌링키
발급 시 3개의 결제대행사로부터 빌링키를 발급 받은 후 슈퍼 빌링키에 맵핑 됩니다.
이후 그룹 설정을 토스페이먼츠 0%, 스마트로 100%로 변경한 경우 위에 발급한 슈퍼 빌링키로 결제 요청 시
토스페이먼츠 빌링키만 사용이 가능하기 때문에 0%로 결제 비율이 설정되어있음에도 토스페이먼츠로 결제가
발생하게 됩니다.
만약 기존에 발급한 결제대행사 채널이 모두 비활성화되어 있거나 그룹 내에서 삭제된 경우 결제가 실패되오니
그룹 설정 변경 시 유의하시기 바랍니다.

</details>


# https://developers.portone.io/opi/ko/extra/smart-routing/intro

---
title: 스마트 라우팅
description: 멀티PG 환경을 클릭 한 번으로 쉽게 만들 수 있는 결제 트래픽 분산 자동화 서비스 입니다.
targetVersions:
  - v1
  - v2
---

## 스마트 라우팅이란?

(관련 이미지 첨부)

스마트 라우팅은 원클릭 결제 트래픽 자동 분산 서비스로 최초 연동 이후 포트원 관리자콘솔 내에서
결제대행사 추가/삭제 및 결제대행사 별 결제 요청 비율을 설정할 수 있습니다.
노코드 방식으로 고객사에서 멀티 PG 인프라를 구성하는데 필요한 개발 리소스를 확 줄였습니다.

SDK 일반결제 및 API 키인(수기) 결제 요청 시 스마트 라우팅 그룹 아이디를 지정하여 호출하는 경우
설정하신 그룹 내 결제대행사 비율에 따라 확률에 기반하여 결제를 요청합니다.

API 빌링키 발급 요청 시 스마트 라우팅 그룹 아이디를 지정하여 호출하는 경우 설정하신 그룹 내
모든 결제대행사로 빌링키를 발급 요청합니다. 하나의 포트원 빌링키에 발급된 모든 결제대행사의 빌링키가
맵핑되며 이를 **슈퍼 빌링키**라고 부릅니다. 슈퍼 빌링키를 이용하여 빌링키 결제 또는 예약 결제 시
그룹 내 결제대행사 비율에 따라 확률에 기반하여 그 중 하나의 결제대행사 빌링키로 결제를 요청합니다.

## 사용 가능한 PG사 및 결제수단 <span id="available-pg" />

스마트 라우팅 기능은 아래 PG사에 한하여 제공하고 있습니다.
(추후 지원 PG사 확대 예정)

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

### 결제창(SDK) 인증결제

- **나이스페이먼츠(신모듈)** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **(구) 나이스페이먼츠** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **NHN KCP** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **KG 이니시스** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **토스페이먼츠(신모듈)** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **토스페이먼츠(구모듈)** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **스마트로(신모듈)** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **스마트로(구모듈)** : 카드 / 실시간 계좌이체 / 가상계좌
- **다날** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **키움페이** : 카드 / 실시간 계좌이체 / 가상계좌
- **헥토파이낸셜** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **KG모빌리언스** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **KSNET** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **이지페이(KICC)** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **웰컴페이먼츠** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **엑심베이** : 카드
- **하이픈** : 실시간 계좌이체

### API 수기(키인)결제

- **나이스페이먼츠(신모듈)** : 카드
- **NHN KCP** : 카드
- **KG 이니시스** : 카드
- **토스페이먼츠(신모듈)** : 카드
- **키움페이** : 카드
- **KSNET** : 카드

### API 빌링키 발급 및 정기결제

- **나이스페이먼츠 (신모듈)** : 카드
- **(구) 나이스페이먼츠** : 카드
- **NHN KCP** : 카드
- **KG이니시스** : 카드
- **토스페이먼츠(신모듈)** : 카드
- **키움페이** : 카드
- **헥토파이낸셜** : 카드
- **KSNET** : 카드
- **웰컴페이먼츠** : 카드

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

### 결제창(SDK) 인증결제

- **나이스페이먼츠** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **KG이니시스** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **토스페이먼츠** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **한국결제네트웍스(KPN)** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **KSNET** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **스마트로** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제
- **NHN KCP** : 카드 / 실시간 계좌이체 / 가상계좌 / 휴대폰 소액결제

### API 수기(키인)결제

- **나이스페이먼츠** : 카드 / 가상계좌
- **KG이니시스** : 카드 / 가상계좌
- **토스페이먼츠** : 카드 / 가상계좌
- **한국결제네트웍스(KPN)** : 카드 / 가상계좌
- **KSNET** : 카드 / 가상계좌
- **스마트로** : 가상계좌
- **NHN KCP** : 카드 / 가상계좌

### API 빌링키 발급 및 정기결제

- **나이스페이먼츠** : 카드
- **KG이니시스** : 카드
- **토스페이먼츠** : 카드
- **한국결제네트웍스(KPN)** : 카드
- **KSNET** : 카드
- **스마트로** : 카드
- **NHN KCP** : 카드

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 스마트 라우팅 연동 안내

(관련 이미지 첨부)

스마트 라우팅을 사용하기 위해서는 포트원 관리자콘솔 내 \[연동 관리] - \[스마트 라우팅]에서 그룹 설정이 필요합니다.
자세한 내용은 [스마트 라우팅 그룹 설정 가이드](https://developers.portone.io/opi/ko/extra/smart-routing/console-guide)에서 확인할 수 있습니다.

그룹 설정 후 결제 요청 시 `channelGroupId` 파라미터를 지정하여 호출해야 합니다.
자세한 내용은 [스마트 라우팅 연동하기](https://developers.portone.io/opi/ko/extra/smart-routing/integration)에서 확인할 수 있습니다.

## 스마트 라우팅 FAQ

<details>

<summary> 스마트 라우팅 그룹 이용 시 지원되는 모든 결제수단을 사용할 수 있는건가요? </summary>

스마트 라우팅 그룹을 지정하여 결제 호출 시 결제 수단에 대한 제약은 없습니다.
다만, 스마트 라우팅 이용 시 동일한 그룹 내에 설정된 채널은 가급적 동일한 결제수단으로 계약이 완료되어 있어야 합니다.

ex) 카드 및 가상계좌 이용을 원하시는 경우 스마트 라우팅 그룹에서 사용할 모든 PG사와
카드 및 가상계좌 사용 계약이 필요합니다.

그렇지 않는 경우 결제 호출 시 결제 수단에 따라 에러가 리턴될 수 있으며, 결제창 호출이 불가능할 수 있습니다.

</details>

<details>

<summary> 간편결제도 스마트 라우팅 기능을 사용할 수 있나요? </summary>

**간편결제 허브형을 사용하시는 경우**, 결제대행사 별 계약에 따라 결제창에 표시되는 간편결제가 상이할 수 있습니다.

**간편결제 다이렉트 호출을 사용하시는 경우**, 결제대행사 별 계약에 따라 결제 호출 시 에러가 리턴되며 결제창이
호출되지 않을 수 있습니다. 가급적 결제대행사 별 동일한 간편결제 수단을 모두 계약하신 후 사용하시길 권장드립니다.

단, **간편결제 직연동**의 경우 스마트 라우팅 기능을 제공하지 않습니다.

</details>

<details>

<summary> SDK(결제창) 빌링키 발급할 때도 사용하고 싶어요!</summary>

SDK(결제창) 빌링키 발급의 경우 해당 기능을 지원하지 않습니다. 빌링키 발급 시 스마트 라우팅 기능을 사용하고
싶으신 경우 API 방식으로 빌링키를 발급하여 사용하시길 권장드립니다.

</details>


# https://developers.portone.io/opi/ko/integration/ready/readme

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


# https://developers.portone.io/opi/ko/integration/virtual-account/readme

---
title: 가상계좌 입금통보 설정
description: 결제대행사별 입금통보 URL을 안내합니다.
targetVersions:
  - v1
  - v2
---

가상계좌 결제를 이용하는 고객사의 경우 가상계좌 발급 후 고객이 입금 완료 했을 때 입금통보를 받을 수 있도록 아래와 같이 사전 설정을 진행해야 합니다.

## 결제대행사별 가상계좌 입금통보 URL

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

|결제대행사            |코드값 (pg provider)|입금통보 주소                                                                                                                                                                                                                                                              |
|----------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|KG이니시스            |html5\_inicis       |[https://service.iamport.kr/inicis\_payments/notice\_vbank](http://service.iamport.kr/inicis_payments/notice_vbank)                                                                                                                                                        |
|NHN KCP               |kcp                 |[https://service.iamport.kr/kcp\_payments/notice\_vbank](http://service.iamport.kr/kcp_payments/notice_vbank)                                                                                                                                                              |
|이지페이(KICC)        |kicc                |[https://service.iamport.kr/kicc\_payments/notice\_vbank](http://service.iamport.kr/kicc_payments/notice_vbank)                                                                                                                                                            |
|헥토파이낸셜          |settle              |[https://service.iamport.kr/settle\_payments/notice\_vbank](http://service.iamport.kr/settle_payments/notice_vbank)                                                                                                                                                        |
|키움페이              |daou                |<ul><li>발행 통지 URL: [https://service.iamport.kr/daou\_payments/result](http://service.iamport.kr/daou_payments/result)</li> <li>결과 통지 URL: [https://service.iamport.kr/daou\_payments/notice\_vbank](http://service.iamport.kr/daou_payments/notice_vbank)</li></ul>|
|토스페이먼츠(신모듈)  |tosspayments        |[https://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments](http://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments)                                                                                              |
|스마트로(신모듈)      |smartro\_v2         |입금 통보, 환불이체 URL 동일: [https://tx-gateway-service.prod.iamport.co/smartro-v2](http://tx-gateway-service.prod.iamport.co/smartro-v2)                                                                                                                                |
|나이스페이먼츠(구모듈)|nice                |[https://service.iamport.kr/nice\_payments/notice\_vbank](http://service.iamport.kr/nice_payments/notice_vbank)                                                                                                                                                            |
|나이스페이먼츠(신모듈)|nice\_v2            |[https://tx-gateway-service.prod.iamport.co/nicepay-v2](http://tx-gateway-service.prod.iamport.co/nicepay-v2)                                                                                                                                                              |
|웰컴페이먼츠          |welcome             |[https://tx-gateway-service.prod.iamport.co/welcome](http://tx-gateway-service.prod.iamport.co/welcome)                                                                                                                                                                    |

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

|PG              |코드값 (pg provider)|입금통보 주소                                                                                                                                                                | |
|----------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-|
|토스페이먼츠    |tosspaysments       |[https://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments](http://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments)| |
|스마트로        |smartro\_v2         |입금 통보, 환불이체 URL 동일: [https://tx-gateway-service.prod.iamport.co/smartro-v2](http://tx-gateway-service.prod.iamport.co/smartro-v2)                                  | |
|나이스페이먼츠  |nice\_v2            |[https://tx-gateway-service.prod.iamport.co/nicepay-v2](http://tx-gateway-service.prod.iamport.co/nicepay-v2)                                                                | |
|KG이니시스      |inicis\_v2          |[https://tx-gateway-service.prod.iamport.co/inicis-v2](http://tx-gateway-service.prod.iamport.co/inicis-v2)                                                                  | |
|한국결제네트웍스|kpn                 |[https://tx-gateway-service.prod.iamport.co/kpn/virtual-account](http://tx-gateway-service.prod.iamport.co/kpn/virtual-account)                                              | |
|NHN KCP         |kcp\_v2             |[https://tx-gateway-service.prod.iamport.co/kcp-v2](http://tx-gateway-service.prod.iamport.co/kcp-v2)                                                                        | |

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

## 결제대행사별 가상계좌 입금통보 URL 설정 방법

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<details>

<summary>KG이니시스 설정 방법</summary>

1. [KG이니시스 가맹점관리자](http://iniweb.inicis.com/security/login.do) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[결제수단 정보]를 클릭합니다.
3. \[가상계좌] 항목 중 \[입금내역 통보]를 **실시간통보함**으로 설정해주세요.
4. \[입금통보 URL(IP)]를 `https://service.iamport.kr/inicis_payments/notice_vbank` 로 설정해주세요.
5. \[통보전문]을 **URL수신사용(일반)** 으로 설정해주세요.
6. \[채번방식]을 **건별채번**으로 설정해주세요.

(이미지 첨부: KG이니시스 가맹점관리자 내 입금통보 URL 설정 화면)

</details>

<details>

<summary>KCP 설정 방법</summary>

1. \[KCP 파트너관리자]\([https://partner.kcp.co.kr/](http://partner.kcp.co.kr/)) 접속 후 로그인을 합니다.
2. \[기술관리센터]→\[웹훅(Webhook) 관리]→\[웹훅URL 설정]을 클릭합니다.
3. \[변경 결제결과URL]을 `https://service.iamport.kr/kcp_payments/notice_vbank`로 설정해주세요.
4. \[인코딩 설정]을 `UTF-8`로 설정해주세요.

(이미지 첨부: KCP 파트너관리자 내 웹훅 URL 설정 화면)

</details>

<details>

<summary>나이스페이먼츠(구모듈) 설정 방법</summary>

1. [나이스페이먼츠 가맹점 관리자](http://npg.nicepay.co.kr/merchant/mkeyMngForm.do) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[기본정보]를 클릭합니다.
3. \[결제데이터통보] 항목에서 **가상계좌**의 \[URL/IP]를 `https://service.iamport.kr/nice_payments/notice_vbank` 로 설정해주세요.
4. \[재전송 간격]은 1분, \[재전송 횟수]는 3회로 설정해주세요.
5. \[OK체크] 체크 여부는 선택이며, 체크하지 않아도 무관합니다.

- 정상적인 입금통보 전송, 재전송을 위해 **암호화 전송 여부, 미전송시 체크를 해제**해야 합니다.
- 재전송 간격: 최소 1분 \~ 최대 10분까지만 입력 가능합니다.
- 재전송 횟수: 최소 1회 \~ 최대 10회까지 재전송 가능합니다.(전송 실패 건에 대해 자동 재전송)

(이미지 첨부: 나이스페이먼츠 가맹점 관리자 내 입금통보 URL 설정 화면)

</details>

<details>

<summary>이지페이(KICC) 설정 방법</summary>

이지페이(KICC) MID 발급 시 입금통보 URL이 자동으로 등록됩니다.
만약, 가상계좌 입금통보가 정상적으로 동작하지 않는 경우 KICC 영업담당자 혹은 대표 연락처(1644-2004, <easypay_cs@kicc.co.kr>)를 통해 \[가상계좌 입금통보 URL] 설정을 확인하시기 바랍니다.

</details>

<details>

<summary>헥토파이낸셜 설정 방법</summary>

헥토파이낸셜 MID 발급 후 헥토파이낸셜 담당자 및 기술팀에 메일로 요청해야 합니다.
<settle_pgdev@settlebank.co.kr>(개발팀)에 발급받은 MID 정보와 함께 아래와 같이 메일을 발송하여 요청을 진행해주세요.

> 헥토파이낸셜의 가상계좌 기능을 이용하기 위해 포트원의 vbank API를 사용하고자 합니다.
> 관련해서 정상적인 입금확인 절차가 이루어질 수 있도록 지정된 MID에 대한 가상계좌 통보 URL을 설정해 주시기 바랍니다.
>
> MID: XXXXXX 입금통보 URL: [https://service.iamport.kr/settle\_payments/notice\_vbank](http://service.iamport.kr/settle_payments/notice_vbank)
>
> 설정이 완료되면 회신 부탁드립니다.

</details>

<details>

<summary>키움페이 설정 방법</summary>

1. [키움페이 상점관리자](http://agent.kiwoompay.co.kr/) 접속 후 로그인을 합니다.
2. \[고객지원]→\[기술지원]→\[연동정보설정]를 클릭합니다.
3. \[CPID]를 선택한 후 \[조회하기]을 클릭합니다.
4. \[발행 통지 URL]을 [https://service.iamport.kr/daou\_payments/result](http://service.iamport.kr/daou_payments/result)로 설정해주세요.
5. \[결과 통지 URL]을 [https://service.iamport.kr/daou\_payments/notice\_vbank](http://service.iamport.kr/daou_payments/notice_vbank)로 설정해주세요.

(이미지 첨부: 키움페이 상점관리자 내 입금통보 URL 설정 화면 1)

(이미지 첨부: 키움페이 상점관리자 내 입금통보 URL 설정 화면 2)

(이미지 첨부: 키움페이 상점관리자 내 입금통보 URL 설정 화면 3)

</details>

<details>

<summary>웰컴페이먼츠 설정 방법</summary>

1. [웰컴페이먼츠 관리자시스템](http://wbiz.paywelcome.co.kr/) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[결제수단 정보]를 클릭합니다.
3. \[가상계좌] 항목 중 \[입금내역 통보]를 **실시간통보함**으로 설정해주세요.
4. \[입금통보 URL(IP)]를 `https://tx-gateway-service.prod.iamport.co/welcome`로 설정해주세요.
5. \[통보전문]을 **URL수신사용(일반)** 으로 설정해주세요.

(이미지 첨부: 웰컴페이먼츠 관리자시스템 내 입금통보 URL 설정 화면 1)

(이미지 첨부: 웰컴페이먼츠 관리자시스템 내 입금통보 URL 설정 화면 2)

</details>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<details>

<summary>KSNET 설정 방법</summary>

KSNET은 포트원을 통해 발급된 MID에 대해 자동으로 입금통보 URL이 설정됩니다.
만약 입금통보를 받지 못하는 경우 KSNET 담당자에게 메일을 통해 확인 요청 후 변경이 필요합니다.

</details>

<details>

<summary>토스페이먼츠(신모듈) 설정 방법</summary>

1. [토스페이먼츠 개발자센터](http://developers.tosspayments.com/) 접속 후 로그인을 합니다.
2. \[내 개발정보]를 클릭합니다.
3. \[상점]을 선택한 후 \[웹훅]을 클릭합니다.
4. \[+ 웹훅 등록하기]를 클릭합니다.
5. \[이름]을 입력하고, \[URL]은 `https://tx-gateway-service.prod.iamport.co/virtual-account/webhook-event/tosspayments`로 설정해주세요.
6. \[구독할 이벤트]에서 `DEPOSIT_CALLBACK`을 체크한 후 \[등록하기]를 클릭합니다.

(이미지 첨부: 토스페이먼츠 개발자센터 내 입금통보 URL 설정 화면 1)

(이미지 첨부: 토스페이먼츠 개발자센터 내 입금통보 URL 설정 화면 2)

</details>

<details>

<summary>나이스페이먼츠(신모듈) 설정 방법</summary>

1. [나이스페이먼츠 가맹점 관리자](http://npg.nicepay.co.kr/merchant/mkeyMngForm.do) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[기본정보]를 클릭합니다.
3. \[결제데이터통보] 항목에서 **가상계좌**의 \[URL/IP]를 `https://tx-gateway-service.prod.iamport.co/nicepay-v2` 로 설정해주세요.
4. \[재전송 간격]은 1분, \[재전송 횟수]는 3회로 설정해주세요.
5. \[OK체크] 체크 여부는 선택이며, 체크하지 않아도 무관합니다.

- 정상적인 입금통보 전송, 재전송을 위해 **암호화 전송 여부, 미전송시 체크를 해제**해야 합니다.
- 재전송 간격: 최소 1분 \~ 최대 10분까지만 입력 가능합니다.
- 재전송 횟수: 최소 1회 \~ 최대 10회까지 재전송 가능합니다.(전송 실패 건에 대해 자동 재전송)

(이미지 첨부: 나이스페이먼츠 가맹점 관리자 내 입금통보 URL 설정 화면 )

</details>

<details>

<summary>스마트로(신모듈) 설정 방법</summary>

1. [스마트로 스마일비즈](http://www.smilebiz.co.kr/index.html) 접속 후 로그인을 합니다.
2. \[가맹점정보]→\[기본정보]를 클릭합니다.
3. \[결제 데이터 통보] 항목 중 \[가상계좌] 및 \[환불]항목에 다음과 같이 설정해주세요.
4. \[통보 티입]은 **신통보** 를 선택합니다.
5. \[인코딩 타입]은 **UTF-8** 를 선택합니다.
6. \[URL/IP]는 `https://tx-gateway-service.prod.iamport.co/smartro-v2`로 입력해주세요.
7. \[재전송 간격]은 1분, \[재전송 횟수]는 5회로 입력한 후 \[저장]을 클릭합니다.

- 재전송 간격: 최소 1분 \~ 최대 10분까지만 입력 가능합니다.
- 재전송 횟수: 최소 1회 \~ 최대 10회까지 재전송 가능합니다.(전송 실패 건에 대해 자동 재전송)

(이미지 첨부: 스마트로 스마일비즈 내 입금통보 URL 설정 화면)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary>KG이니시스 설정 방법</summary>

1. [KG이니시스 가맹점관리자](http://iniweb.inicis.com/security/login.do) 접속 후 로그인을 합니다.
2. \[상점정보]→\[계약정보]→\[결제수단 정보]를 클릭합니다.
3. \[가상계좌] 항목 중 \[입금내역 통보]를 **실시간통보함**으로 설정해주세요.
4. \[입금통보 URL(IP)]를 `https://tx-gateway-service.prod.iamport.co/inicis-v2` 로 설정해주세요.
5. \[통보전문]을 **URL수신사용(일반)** 으로 설정해주세요.
6. \[채번방식]을 **건별채번**으로 설정해주세요.

(이미지 첨부: KG이니시스 가맹점관리자 내 입금통보 URL 설정 화면)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary>한국결제네트웍스(KPN) 설정 방법</summary>

한국결제네트웍스(KPN)는 계약 이후, 발급된 MID에 대해 **가상계좌 백노티 기능**을 별도로 요청해야 합니다.

한국결제네트웍스(KPN) 담당자에게 MID 정보와 함께 입금 통보 URL을 전달하여 가상계좌 백노티 기능 요청을 진행해주세요.

만약 입금통보를 받지 못하는 경우 한국결제네트웍스(KPN) 담당자에게 메일을 통해 확인 요청 후 변경이 필요합니다.

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

<details>

<summary>NHN KCP 설정 방법</summary>

1. [KCP 파트너관리자](http://partner.kcp.co.kr) 접속 후 로그인을 합니다.
2. \[기술관리센터]→\[웹훅(Webhook) 관리]→\[웹훅URL 설정]을 클릭합니다.
3. \[웹훅 URL]을 `https://tx-gateway-service.prod.iamport.co/kcp-v2`로 설정해주세요.
4. \[인코딩 설정]을 `UTF-8`로 설정해주세요.
5. \[저장]을 클릭합니다.

(이미지 첨부: KCP 파트너관리자 내 웹훅 URL 설정 화면)

</details>

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->


# https://developers.portone.io/opi/ko/quick-guide/payment

---
title: 퀵 가이드
description: 결제연동 퀵 가이드
customLayout: InteractiveDocs
targetVersion:
  - v2
versionVariants:
  v1: /opi/ko/integration/ready/readme?v=v1
---

퀵 가이드 내용을 포함한 포트원 결제 연동 샘플 프로젝트를 [GitHub 저장소](https://github.com/portone-io/portone-sample)에서 추가로 확인하실 수 있습니다.

## 브라우저 측

### 포트원 브라우저 SDK 불러오기

포트원 브라우저 SDK를 불러옵니다.

<!-- CONDITIONAL CONTENT language=frontend/React START -->

아래 명령어로 브라우저 SDK를 설치합니다.

![NPM Version](https://img.shields.io/npm/v/%40portone%2Fbrowser-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="npm">

```shell
npm install --save @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="yarn">

```shell
yarn add @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="pnpm">

```shell
pnpm add @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="bun">

```shell
bun add @portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="deno">

```shell
deno add npm:@portone/browser-sdk
```

</div>

<div class="tabs-content" data-title="ni">

```shell
ni @portone/browser-sdk
```

</div>

</div>

<!-- CONDITIONAL CONTENT language=frontend/React END -->

### 상품 정보 불러오기

서버로부터 결제할 상품의 정보를 불러옵니다.

### 결제 요청

포트원 브라우저 SDK를 사용하여 결제를 요청합니다.

- storeId: string

  **상점 아이디**

  포트원 계정에 생성된 상점을 식별하는 고유한 값으로 [관리자 콘솔 > 연동 정보](https://admin.portone.io/integration-v2/manage/channel) 우측 상단에서 확인할 수 있습니다.

- channelKey: string

  **채널키**

  [관리자 콘솔 > 연동 정보](https://admin.portone.io/integration-v2/manage/channel)에서 채널 연동 시 생성된 채널키입니다.

- paymentId: string

  **고객사 주문 고유 번호**

  주문을 식별하는 고유 번호로, 포트원에서 제공하지 않고 직접 입력합니다.

  이미 승인이 완료된 `paymentId`로 결제나 가상계좌 발급을 시도하는 경우 에러가 발생합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 영문 대소문자, 숫자, `-`, `_`만 허용되며, 6자 이상 64자 이하로 입력합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

  <div class="hint" data-style="warning">

  KCP의 경우 영문 대소문자, 숫자만 허용되며, 40자 이하로 입력합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

  <div class="hint" data-style="warning">

  스마트로의 경우 영문 대소문자, 숫자만 허용되며, 40자 이하로 입력합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 영문 대소문자, 숫자만 허용되며, 32자 이하로 입력합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스의 경우 ASCII 문자만 허용되며, 40자 이하로 입력합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

- orderName: string

  **주문명**

  주문명으로 자유롭게 입력합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

  <div class="hint" data-style="warning">

  나이스페이먼츠의 경우 최대 40바이트까지 입력할 수 있으며, 사용 가능한 특수문자는 아래와 같습니다.

  - 사용 가능: `_`
  - 사용 불가: `% & | $ - + = [ ]`
  - 사용 가능하나 권장하지 않음: `( )`

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

  <div class="hint" data-style="warning">

  KCP의 경우 최대 100바이트까지 입력할 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

  <div class="hint" data-style="warning">

  스마트로의 경우 최대 40바이트까지 입력할 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 최대 256바이트까지 입력할 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스의 경우 최대 40바이트까지 입력할 수 있으며, 40바이트 초과시 37바이트에서 잘리고 "..."가 추가됩니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

- totalAmount: number

  **결제 금액**

  결제 금액을 정수로 입력합니다.

  - 해외 통화의 경우 통화의 최소 단위를 기준으로 합니다. 예를 들어, USD의 최소 단위는 센트(0.01 USD)이므로, 6 USD의 경우 100배하여 600으로 입력합니다.

  - 통화의 최소 단위는 [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)에 의해 표준화된 minor unit입니다.
    - KRW: 1배
    - USD: 100배
    - JPY: 1배

- currency: string

  **결제 통화**

  [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)에 의해 표준화된 알파벳 통화 코드를 입력합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

  <div class="hint" data-style="warning">

  토스페이먼츠는 `KRW`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

  <div class="hint" data-style="warning">

  나이스페이먼츠는 `KRW`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

  <div class="hint" data-style="warning">

  스마트로는 `KRW`와 `USD`만을 지원합니다. 상점 아이디의 설정에 따라 결제 통화가 고정되어 `currency`와 일치하지 않을 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스는 `KRW`와 `USD`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'ksnet' START -->

  <div class="hint" data-style="warning">

  KSNET은 `KRW`와 `USD`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'ksnet' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

  <div class="hint" data-style="warning">

  KCP는 `KRW`와 `USD`만을 지원합니다. `USD`의 경우 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'inicis' && payMethods === 'card' START -->

  <div class="hint" data-style="warning">

  KG이니시스 카드 결제는 `KRW`와 `USD`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'inicis' && payMethods === 'card' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'inicis' && payMethods !== 'card' START -->

  <div class="hint" data-style="warning">

  카드 결제를 제외한 KG이니시스는 `KRW`만을 지원합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'inicis' && payMethods !== 'card' END -->

- payMethod: string

  **결제 수단**

  사용할 결제 수단에 맞는 값을 입력합니다.

  <details>

  <summary>지원 결제 수단 코드</summary>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  <div class="hint" data-style="warning">

  휴대폰 소액결제, 간편결제, 상품권 결제는 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'nice' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'nice' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'smartro' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kpn' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'ksnet' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'ksnet' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kcp' START -->

  - 카드: `CARD`
  - 실시간 계좌이체: `TRANSFER`
  - 가상계좌: `VIRTUAL_ACCOUNT`
  - 휴대폰 소액결제: `MOBILE`
  - 간편결제: `EASY_PAY`
  - 상품권: `GIFT_CERTIFICATE`

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kcp' END -->

  </details>

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "card" START -->

- card?: object

  **카드 결제 추가 정보**

  `payMethod`가 `CARD`인 경우 카드 결제와 관련한 추가 정보를 입력할 수 있습니다.

  - cardCompany?: string

    **단독 노출 카드사**

    구매자가 카드사를 선택하지 않고 입력한 카드사 화면으로 바로 이동하도록 합니다.

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 카드사 단독 노출과 동시에 할부를 설정하려면 `card.installment.monthOption.fixedMonth`를 반드시 전달해야 하며, 그렇지 않을 경우 일시불로 결제됩니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 카드사 단독 노출 시 `card.installment.monthOption.fixedMonth`를 필수로 지정해야 합니다.
    결제 금액이 할부 지원 금액 미만인 경우 할부 개월 수를 `0`으로 전달해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    <div class="hint" data-style="warning">

    스마트로의 경우 전북카드, 카카오뱅크 카드는 Windows에서만 단독 노출이 가능합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

    <div class="hint" data-style="warning">

    KCP의 경우 카드사 단독 노출 시 `bypass.kcp_v2.site_name`을 필수로 지정해야 할 수 있습니다.
    자세한 사항은 해당 파라미터 설명을 참조해 주세요.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

    <div class="hint" data-style="warning">

    한국결제네트웍스의 경우 카드사 단독 노출 시에 아래 3가지 약관 동의 절차가 고객사 페이지 내에 있어야 합니다.

    - `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=1` (전자금융거래 이용약관)
    - `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=3` (개인정보 수집 및 이용처리 동의)
    - `https://www.firstpay.co.kr/jsp/common/agreementPopup.jsp?type=4` (개인정보 제3자 제공 동의)

    영어 약관이 필요한 경우 URL 뒤에 `&langType=ENG`을 추가하여 사용할 수 있습니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

    <div class="hint" data-style="warning">

    KG이니시스의 경우 카드사 단독 노출 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

    <details>

    <summary>지원 카드사 코드 목록</summary>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST`(우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['nice', 'smartro', 'kpn', 'inicis', 'ksnet', 'kcp'].includes(name) START -->

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST` (우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['nice', 'smartro', 'kpn', 'inicis', 'ksnet', 'kcp'].includes(name) END -->

    </details>

  - availableCards?: string\[]

    **카드사 일부 노출**

    지정한 일부 카드사만을 목록에 노출할 수 있습니다. 상단의 카드사 식별 값 항목을 참고해주세요.

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'kpn', 'inicis'].includes(name) START -->

  - useFreeInterestFromMall?: boolean

    **상점 분담 무이자 활성화 여부**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 상점 분담 무이자 할부 이용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'kpn', 'inicis'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'inicis'].includes(name) START -->

  - useInstallment?: boolean

    **할부 사용 여부**

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'inicis'].includes(name) END -->

  - installment?: object

    **할부 설정**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 신용카드 할부 이용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    <div class="hint" data-style="warning">

    스마트로의 경우 신용카드 할부 이용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

    - freeInstallmentPlans?: object\[]

      **무이자 할부 설정**

      고객사가 부담하는 무이자 할부 설정입니다.

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

      <div class="hint" data-style="warning">

      스마트로의 경우 상점 부담 무이자 할부 이용 시 별도 계약이 필요합니다.

      </div>

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

      <div class="hint" data-style="warning">

      한국결제네트웍스의 경우 상점 부담 무이자 할부 이용 시 별도 계약이 필요합니다.

      </div>

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

      <div class="hint" data-style="warning">

      KG이니시스의 경우 상점 부담 무이자 할부 이용 시 별도 계약이 필요합니다.

      </div>

      <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

      - cardCompany: string

        **무이자 할부를 제공하는 카드사 식별 값**

        상단의 카드사 식별 값 항목을 참고해주세요.

      - months: number\[]

        **무이자 할부를 제공하는 개월 수**

    - monthOption?: object

      **할부 개월 수 설정**

      할부 결제 시 할부 개월 수를 설정할 수 있습니다.

      <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name !== 'kcp' START -->

      `fixedMonth`와 `availableMonthList` 중 하나만 제공해주세요.

      <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name !== 'kcp' END -->

      - fixedMonth: number

        **구매자가 선택할 수 없도록 고정된 할부 개월 수**

        구매자가 할부 개월 수를 선택할 수 있도록 하려면 `availableMonthList`를 사용해주세요.

      <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'smartro', 'inicis'].includes(name) START -->

      - availableMonthList: number\[]

        **구매자가 선택할 수 있는 할부 개월 수 목록**

      <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'smartro', 'inicis'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'smartro'].includes(name) START -->

  - useCardPoint?: boolean

    **카드사 포인트 사용 여부**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 카드사 포인트 사용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 카드사 포인트 사용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

    <div class="hint" data-style="warning">

    KG이니시스의 경우 카드사 포인트 사용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => !['kcp', 'smartro'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => !['kpn', 'inicis'].includes(name) START -->

  - useAppCardOnly?: boolean

    **앱 카드만 허용할지 여부**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 씨티카드는 적용이 불가능합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => !['kpn', 'inicis'].includes(name) END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "card" END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "virtualAccount" START -->

- virtualAccount?: object

  **가상계좌 발급 추가 정보**

  `payMethod`가 `VIRTUAL_ACCOUNT`인 경우 가상계좌와 관련한 추가 정보를 입력할 수 있습니다.

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => name !== 'kcp' START -->

  - cashReceiptType?: string

    **결제창에서 발급 가능한 현금영수증 발급 유형**

    - `PERSONAL` (소득공제용)
    - `CORPORATE` (지출증빙용)
    - `ANONYMOUS` (미발행(국세청번호 자동발급))

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    <div class="hint" data-style="warning">

    스마트로의 경우 `cashReceiptType`과 `bankCode`를 같이 사용해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => name !== 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kpn', 'kcp'].includes(name) START -->

  - customerIdentifier?: string

    **현금영수증 발행 대상 식별 정보**

    소득공제용(`PERSONAL`)의 경우 전화번호를, 지출증빙용(`CORPORATE`)의 경우 사업자번호를 입력하며, 미발행(`ANONYMOUS`)의 경우 무시됩니다.

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    <div class="hint" data-style="warning">

    스마트로의 경우 `cashReceiptType`에 `ANONYMOUS` 외의 값이 설정되면 올바른 `customerIdentifier`를 반드시 입력해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kpn', 'kcp'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kcp', 'kpn'].includes(name) START -->

  - fixedOption?: oneof object

    **고정식 가상계좌 설정**

    - `pgAccountId`와 `accountNumber` 중 하나만 입력해주세요.

    * pgAccountId?: string

      결제대행사로부터 사전에 가상계좌를 발급받은 경우, 그 번호를 입력해주세요.

    * accountNumber?: string

      고정하여 사용할 가상계좌 번호를 입력해주세요.

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kcp', 'kpn'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kcp', 'kpn'].includes(name) START -->

  - bankCode?: string

    **단독 노출 은행**

    구매자가 은행을 선택하지 않고 입력한 은행이 자동 선택되도록 합니다.

    <details>

    <summary>지원 은행 코드</summary>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    - `KYONGNAM_BANK` (경남은행)
    - `GWANGJU_BANK` (광주은행)
    - `KOOKMIN_BANK` (국민은행)
    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `KFCC` (새마을금고)
    - `SUHYUP_BANK` (수협은행)
    - `SHINHAN_BANK` (신한은행)
    - `WOORI_BANK` (우리은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `K_BANK` (케이뱅크)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `K_BANK` (케이뱅크)
    - `SUHYUP_BANK` (수협은행)
    - `JEONBUK_BANK` (전북은행)
    - `KYONGNAM_BANK` (경남은행)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `CITI_BANK_KOREA` (한국씨티은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `KYONGNAM_BANK` (경남은행)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'ksnet' START -->

    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `KOOKMIN_BANK` (국민은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `WOORI_BANK` (우리은행)
    - `SC_BANK_KOREA` (SC제일은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `GWANGJU_BANK` (광주은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)
    - `SHINHAN_BANK` (신한은행)
    - `JEONBUK_BANK` (전북은행)
    - `KYONGNAM_BANK` (경남은행)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'ksnet' END -->

    </details>

  <!-- CONDITIONAL CONTENT when=({ pg: {name }}) => !['kcp', 'kpn'].includes(name) END -->

  - accountExpiry?: object

    **가상계좌 입금 만료기한**

    `validHours`와 `dueDate` 중 하나만 입력해주세요.

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 입금 만료기한을 필수로 입력해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

    - validHours?: number

      **가상계좌 입금 유효 시간**

      가상계좌 입금 유효기간을 시간 단위로 입력해주세요.

      - `3`을 전달하면 지금으로부터 3시간 후에 만료됩니다.

    - dueDate?: string

      **가상계좌 입금 만료 시각**

      - 아래 형식 중 하나로 입력해주세요.
        - `YYYYMMDD`
        - `YYYYMMDDHHmmss`
        - `YYYY-MM-DD`
        - `YYYY-MM-DD HH:mm:ss`

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "virtualAccount" END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "transfer" START -->

- transfer?: object

  **계좌이체 추가 정보**

  `payMethod`가 `TRANSFER`인 경우 계좌이체와 관련한 추가 정보를 입력할 수 있습니다.

  - cashReceiptType?: string

    **결제창에서 발급 가능한 현금영수증 발급 유형**

    - `PERSONAL` (소득공제용)
    - `CORPORATE` (지출증빙용)
    - `ANONYMOUS` (미발행(국세청번호 자동발급))

  - customerIdentifier?: string

    **현금영수증 발행 대상 식별 정보**

  - bankCode?: string

    **단독 노출 은행**

    구매자가 은행을 선택하지 않고 입력한 은행이 자동 선택되도록 합니다.

    <details>

    <summary>지원 은행 코드</summary>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    - `KYONGNAM_BANK` (경남은행)
    - `GWANGJU_BANK` (광주은행)
    - `KOOKMIN_BANK` (국민은행)
    - `INDUSTRIAL_BANK_OF_KOREA` (기업은행)
    - `NH_NONGHYUP_BANK` (NH농협은행)
    - `DAEGU_BANK` (대구은행)
    - `BUSAN_BANK` (부산은행)
    - `KFCC` (새마을금고)
    - `SUHYUP_BANK` (수협은행)
    - `SHINHAN_BANK` (신한은행)
    - `WOORI_BANK` (우리은행)
    - `EPOST` (우체국)
    - `HANA_BANK` (하나은행)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    </details>

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "transfer" END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "mobile" START -->

- mobile?: object

  **휴대폰 소액결제 추가 정보**

  `payMethod`가 `MOBILE`인 경우 휴대폰 소액결제와 관련한 추가 정보를 입력할 수 있습니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - carrier?: string

    **단독 호출 통신사**

    구매자가 통신사를 선택하지 않고 입력한 통신사가 자동 선택되도록 합니다.

    - `SKT` (SKT)
    - `KT` (KT)
    - `LGU` (LGU)
    - `HELLO` (LG 헬로모바일)
    - `KCT` (티플러스)
    - `SK7` (SK 세븐모바일)

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - availableCarriers?: string\[]

    **통신사 일부 노출**

    지정한 일부 통신사만을 목록에 노출할 수 있습니다. 상단의 통신사 식별 값 항목을 참고해주세요.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "mobile" END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "giftCertificate" START -->

- giftCertificate?: object

  **상품권 추가 정보**

  `payMethod`가 `GIFT_CERTIFICATE`인 경우 상품권과 관련한 추가 정보를 입력할 수 있습니다.

  - giftCertificateType?: string

    **상품권 유형**

    <details>

    <summary>지원 상품권 유형 코드</summary>

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" START -->

    - `BOOKNLIFE` (도서문화상품권)
    - `SMART_MUNSANG` (스마트문상, (구)게임문화상품권)
    - `CULTURELAND` (문화상품권)

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "nice" START -->

    - `CULTURELAND` (문화상품권)

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "nice" END -->

    </details>

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "giftCertificate" END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "easyPay" START -->

- easyPay?: object

  **간편결제 추가 정보**

  `payMethod`가 `EASY_PAY`인 경우 간편결제와 관련한 추가 정보를 입력할 수 있습니다.

  - easyPayProvider?: string

    **간편결제 수단**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

    <div class="hint" data-style="warning">

    한국결제네트웍스의 경우 간편결제 수단을 직접 지정하려면 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

    <div class="hint" data-style="warning">

    KG이니시스의 경우 간편결제 수단 설정 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

    <details>

    <summary>지원 간편결제 코드</summary>

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' START -->

    - `PAYCO` (페이코)
    - `SAMSUNGPAY` (삼성페이)
    - `APPLEPAY` (애플페이)
    - `SSGPAY` (SSG페이)
    - `KAKAOPAY` (카카오페이)
    - `NAVERPAY` (네이버페이)
    - `LPAY` (L페이)
    - `TOSSPAY` (토스페이)

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kpn' START -->

    - `KAKAOPAY` (카카오페이)
    - `SAMSUNGPAY` (삼성페이)
    - `TOSSPAY` (토스페이)
    - `PAYCO` (페이코)

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'kpn' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' START -->

    - `KAKAOPAY` (카카오페이)
    - `NAVERPAY` (네이버페이)
    - `SAMSUNGPAY` (삼성페이)
    - `SSGPAY` (SSG페이)
    - `APPLEPAY` (애플페이)
    - `LPAY` (L페이)
    - `TOSSPAY` (토스페이)
    - `PAYCO` (페이코)

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' END -->

    </details>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - useFreeInterestFromMall?: boolean

    **상점분담 무이자 활성화 여부**

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - useCardPoint?: boolean

    **카드사 포인트 사용 여부**

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - availableCards?: string\[]

    **카드사 일부 노출**

    지정한 일부 카드사만을 목록에 노출할 수 있습니다.

    <details>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST`(우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['nice', 'smartro', 'kpn', 'inicis', 'ksnet'].includes(name) START -->

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST` (우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEONBUK_CARD` (전북카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['nice', 'smartro', 'kpn', 'inicis', 'ksnet'].includes(name) END -->

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

    - `KOREA_DEVELOPMENT_BANK` (KDB산업은행 카드)
    - `KFCC` (새마을금고 카드)
    - `SHINHYUP` (신협 카드)
    - `EPOST` (우체국 카드)
    - `SAVINGS_BANK_KOREA` (저축은행 카드)
    - `KAKAO_BANK` (카카오뱅크 카드)
    - `WOORI_CARD` (우리카드)
    - `BC_CARD` (BC카드)
    - `GWANGJU_CARD` (광주카드)
    - `SAMSUNG_CARD` (삼성카드)
    - `SHINHAN_CARD` (신한카드)
    - `HYUNDAI_CARD` (현대카드)
    - `LOTTE_CARD` (롯데카드)
    - `SUHYUP_CARD` (수협카드)
    - `CITI_CARD` (씨티카드)
    - `NH_CARD` (NH농협카드)
    - `JEJU_CARD` (제주카드)
    - `HANA_CARD` (하나카드)
    - `KOOKMIN_CARD` (국민카드)
    - `K_BANK` (케이뱅크 카드)
    - `TOSS_BANK` (토스뱅크 카드)

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

    </details>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - installment?: object

    **할부 설정**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 할부 사용 시 별도 계약이 필요합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

    - freeInstallmentPlans?: object\[]

      **무이자 할부 설정**

      고객사가 부담하는 무이자 할부 설정입니다.

      - cardCompany: string

        **무이자 할부를 제공하는 카드사 식별 값**

        상단의 카드사 식별 값 항목을 참고해주세요.

      - months: number\[]

        **무이자 할부를 제공하는 개월 수**

    - monthOption?: object

      **할부 개월 수 설정**

      할부 결제 시 할부 개월 수를 설정할 수 있습니다.

      `fixedMonth`와 `availableMonthList` 중 하나만 제공해주세요.

      - fixedMonth: number

        **구매자가 선택할 수 없도록 고정된 할부 개월 수**

        구매자가 할부 개월 수를 선택할 수 있도록 하려면 `availableMonthList`를 사용해주세요.

      - availableMonthList: number\[]

        **구매자가 선택할 수 있는 할부 개월 수 목록**

        <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

        <div class="hint" data-style="warning">

        토스페이먼츠의 경우 자체 정책에 따라 **일시불부터 전달한 값 중 최댓값까지 모두 표시**됩니다.

        </div>

        <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - cashReceiptType?: string

    **결제창에서 발급 가능한 현금영수증 발급 유형**

    - `PERSONAL` (소득공제용)
    - `CORPORATE` (지출증빙용)
    - `ANONYMOUS` (미발행(국세청번호 자동발급))

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - customerIdentifier?: string

    **현금영수증 발행 대상 식별 정보**

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' START -->

  - availablePayMethods?: string\[]

    **노출할 간편결제 방식**

    - `CARD` (카드 결제)
    - `CHARGE` (포인트 충전 및 적립 결제)
    - `MONEY` (토스페이 머니 결제)
    - `TRANSFER` (계좌 결제)

    <!-- CONDITIONAL CONTENT when=({ pg: {name}}) => name === "nice" START -->

    <div class="hint" data-style="warning">

    나이스페이먼츠의 경우 일부 간편결제 수단에 대해 `availablePayMethods`가 필수입니다.

    - 네이버페이: 카드 결제인 경우 `CARD`, 포인트 혹은 머니 결제인 경우 `CHARGE`를 입력합니다.
    - SSG페이: 계좌 결제를 노출하는 `TRANSFER`만 유효하며, 카드 혹은 머니 결제인 경우 `availablePayMethods`를 생략해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: {name}}) => name === "nice" END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name !== 'kpn' END -->

<!-- CONDITIONAL CONTENT when=({ pg: { payMethods }}) => payMethods === "easyPay" END -->

- taxFreeAmount?: number

  **면세 금액**

  결제 금액 중 면세금액에 해당하는 금액을 입력합니다.

  - 미입력 시 0으로 취급됩니다.
  - 결제 금액과 동일하게 통화별 scale factor가 적용된 금액으로 전달해주세요.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' START -->

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 면세 및 복합과세 이용 시 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'toss' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

  <div class="hint" data-style="warning">

  나이스페이먼츠와 계약 시 지정된 면세금액을 반드시 입력해야 합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

  <div class="hint" data-style="warning">

  KCP의 경우 면세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.
  계약을 진행하지 않고 값을 지정하는 경우 요청한 내용과 다른 금액으로 결제가 발생할 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 면세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.
  계약을 진행하지 않고 값을 지정하는 경우 요청한 내용과 다른 금액으로 결제가 발생할 수 있습니다.
  면세 금액이 지정된 경우, MID에 지정된 면세 및 과세 여부보다 지정된 금액을 우선합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스의 경우 면세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

- vatAmount?: number

  **부가세**

  부가세 금액을 입력합니다.

  - 미입력 시 과세 금액의 1/11 로 자동 계산됩니다.
  - 결제 금액과 동일하게 통화별 scale factor가 적용된 금액으로 전달해주세요.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' START -->

  <div class="hint" data-style="warning">

  KCP의 경우 부가세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.
  계약을 진행하지 않고 값을 지정하는 경우 요청한 내용과 다른 금액으로 결제가 발생할 수 있습니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kcp' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스의 경우 부가세 금액을 직접 지정하기 위해서는 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

- customer?: object

  **구매자 정보**

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'ksnet' START -->

  <div class="hint" data-style="warning">

  KSNET 결제 시 구매자 이름을 필수로 입력해야 합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'ksnet' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스 결제 시 PC 환경에서는 구매자 이름, 연락처, 이메일을 필수로 입력해야 합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'inicis' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'smartro' START -->

  <div class="hint" data-style="warning">

  스마트로 결제 시 구매자 연락처를 필수로 입력해야 합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'smartro' END -->

  - customerId?: string

    **구매자 고유 아이디**

    구매자를 식별하는 고유 번호로, 자유롭게 입력합니다.

  - fullName?: string

    **구매자 전체 이름**

    - `fullName`과 (`firstName`, `lastName`) 쌍 중 하나만 입력해 주세요.

  - firstName?: string

    **구매자의 성을 제외한 이름**

    - `firstName`과 `lastName`은 함께 입력해야 합니다. 전체 이름은 `{firstName} {lastName}`으로 기록됩니다.

  - lastName?: string

    **구매자의 성**

    - `firstName`과 `lastName`은 함께 입력해야 합니다. 전체 이름은 `{firstName} {lastName}`으로 기록됩니다.

  - phoneNumber?: string

    **구매자 연락처**

  - email?: string

    **구매자 이메일 주소**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

    <div class="hint" data-style="warning">

    KG이니시스의 경우 특수문자는 `@`와 `.`만 허용됩니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

  - address?: object

    **구매자 주소**

    - country?: string

      **국가**

      [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html)에 의해 표준화된 2글자 국가 코드입니다.

    - addressLine1: string

      **일반 주소**

    - addressLine2: string

      **상세 주소**

    - city?: string

      **도시**

    - province?: string

      **주, 도, 시**

  - zipcode?: string

    **구매자 우편번호**

  - gender?: string

    **구매자 성별**

    - `MALE`, `FEMALE`, `OTHER` 중 하나를 입력해주세요.

  - birthYear?: string

    **구매자 출생년도**

    - `1990`과 같이 숫자 4자리로 입력해 주세요.

  - birthMonth?: string

    **구매자 출생월**

    - `07`과 같이 숫자 2자리로 입력해 주세요.

  - birthDay?: string

    **구매자 출생일**

    - `08`과 같이 숫자 2자리로 입력해 주세요.

- customData?: object

  `customData`에는 임의의 데이터를 저장할 수 있습니다.
  서버에서 결제건 조회 시에 확인할 수 있으며, 상품 정보를 전달하여 서버가 인식한 상품 정보와 일치하는지 확인할 수 있습니다.

- bypass?: object

  **결제대행사 고유 기능**

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" START -->

  - tosspayments?: object

    - discountCode?: string

      - 결제수단에 프로모션을 적용할 경우 토스페이먼츠로부터 제공받은 코드를 입력합니다.

    - useInternationalCardOnly?: boolean

      - `true`로 설정하면 해외 카드로만 결제를 허용합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "nice" START -->

  - nice\_v2?: object

    - LogoImage?: string

      **결제창 로고 이미지 URL**

    - NPDisableScroll?: string

      **PC환경 결제창 스크롤 미사용 여부**

      기본값은 `N`입니다.

      - `Y`: 미사용
      - `N`: 사용

    - SkinType?: string

      **결제창 스킨 색상**

      `red`, `green`, `purple`, `gray`, `dark` 중 하나를 입력해주세요.

    - UserCI?: string

      **문화상품권 결제 시 구매자 CI 정보**

      아이디/비밀번호 외 추가로 CI 인증이 필요한 경우 사용합니다.

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - MallUserID?: string

      **구매자 식별 번호**

      <div class="hint" data-style="warning">

      문화 상품권 결제 시 필수 입력입니다.

      </div>

    - DirectCouponYN?: string

      **신용카드 쿠폰 자동 적용 여부**

      기본값은 `N`입니다.

      - `Y`: 사전 등록된 선 할인 쿠폰을 자동 적용
      - `N`: 쿠폰 미적용

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - DirectShowOpt?: string

      **단독 호출 결제 수단**

      - `BANK`: 계좌이체
      - `CELLPHONE`: 휴대폰 소액결제

    - CardShowOpt?: string

      **카드사별 호출 방식**

      `카드 코드:노출 유형` 값의 목록을 `|`로 구분하여 입력해주세요.

      - 카드 코드
        - `02` (국민)
        - `04` (삼성)
        - `06` (신한)
        - `07` (현대)
        - `08` (롯데)
        - `12` (NH)
        - `15` (우리)

      - 노출 유형
        - `1` (안심클릭)
        - `2` (간편결제)
        - `3` (앱카드 직접 호출)

      - `08:3|02:3`의 경우 롯데카드와 국민카드 선택시 앱카드를 직접 호출합니다.

    - PaycoClientId?: string

      **페이코에서 고객사에 발급한 Client Id**

      페이코 계정 자동 로그인 기능을 사용하는 경우 입력합니다.

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - PaycoAccessToken?: string

      **페이코 접속 토큰**

      페이코 계정 자동 로그인 기능을 사용하는 경우 입력합니다.

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

    - SamsungPayType?: string

      **삼성페이 고객사 유형**

      기본값은 `99`입니다.

      - `01`: 삼성페이 내 쇼핑
      - `99`: 기타

      <div class="hint" data-style="warning">

      나이스페이먼츠와 별도 계약이 필요합니다.

      </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "nice" END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

  - smartro\_v2?: object

    - GoodsCnt?: number

      **결제 상품 품목 개수**

    - SkinColor?: string

      **결제창 색상**

      `RED`, `GREEN`, `BLUE`, `PURPLE`을 선택할 수 있으며, 기본값은 `RED`입니다.

    - OpenType?: string

      **허용 카드 국가 설정**

      - `KR`: 국내 카드만 허용 (기본값)
      - `EN`: 해외 카드만 허용

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  - kpn: object

    - CardSelect?: string\[]

      **카드결제 특수 결제방식 노출**

      카드결제 시에 특정 카드사에 해당하지 않는 특수 결제방식을 노출할 수 있습니다.

      - `GLOBAL`: 해외 카드(Visa, Mastercard, JCB)를 노출합니다.
      - `LEGACY_AUTH`: 구 인증결제 방식을 노출합니다.
      - `KEY_IN`: 키인 결제를 노출합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "kcp" START -->

  - kcp\_v2?: object

  * site\_logo?: string

    **결제창 로고 URL**

    - 결제창 좌측 상단에 표시됩니다.
    - 이미지 사이즈는 가로 150px, 세로 50px 미만으로 설정해야 하며, GIF, JPG 파일만 지원됩니다.

  * skin\_indx?: number

    **결제창 색상**

    PC로 결제창 호출 시 결제창 색상을 변경합니다.

    - 1: 청색 (#207bba, 기본값)
    - 2: 자주색 (#b52ecb)
    - 3: 갈색 (#9a6d3f)
    - 4: 분홍색 (#e41f7d)
    - 5: 남색 (#284c8c)
    - 6: 청록색 (#319cb9)
    - 7: 황토색 (#a77f1d)
    - 8: 주황색 (#b2b2b2)
    - 9: 초록색 (#3cc871)
    - 10: 다홍색 (#ee3b34)
    - 11: 검은색 (#000000)
    - 12: 은색 (#f4f4f4)

  * kcp\_pay\_title?: string

    **결제창 상단 문구**

    결제창의 상단에 `NHN KCP - 결제의 중심!` 대신 표시될 문구입니다.

  * shop\_user\_id?: string

    **기관에 따라 리스크 관리 조치를 위한 쇼핑몰 관리 ID**

    - 상품권, 휴대폰 결제 시 필수로 입력해야 합니다.

  * site\_name?: string

    **카드사 단독 노출 시 결제창에 표기될 상호명**

    - PC의 경우 신한, 현대, 삼성, 농협, 하나, 외환, 롯데, 씨티, 우리카드 단독 노출 시 필수로 입력해야 합니다.
    - 모바일의 경우 필수로 입력해야 합니다.

  * disp\_tax\_yn?: string

    **현금영수증 노출 여부**

    결제창에서 현금영수증 노출 여부를 설정합니다. 실시간 계좌이체 또는 가상계좌 결제 시 사용할 수 있습니다.

    - `Y`: 노출
    - `N`: 노출하지 않음
    - `R`: 소득공제로 노출
    - `E`: 지출증빙으로 노출

  * deli\_term?: string

    **에스크로 결제 예상 배송 소요일**

    에스크로 결제 시, 결제 상품의 예상 배송 소요일입니다. 에스크로 결제 사용 시 입력을 권장하고 있습니다.

    - 기본값은 `00`입니다.
    - 항상 두 자리 수로 입력되어야 합니다. 예상 배송 소요기간이 3일인 경우, `03`으로 입력합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "kcp" END -->

- redirectUrl?: string

  **리디렉션 방식에서 결제 프로세스 완료 후 이동될 고객사 URL**

  - 대부분의 모바일 결제환경에서 반드시 입력해야 합니다.

- noticeUrls?: string\[]

  **결제 웹훅 수신 URL**

  관리자 콘솔에서 설정한 웹훅 주소 대신 사용할 주소입니다.

  - 해당 값 설정시 관리자 콘솔에 설정한 주소로는 웹훅이 발송되지 않습니다.

- appScheme?: string

  **모바일 결제 후 고객사 앱으로 복귀하기 위한 URL scheme**

  ISP/앱카드에서 결제 완료 후 고객사 앱으로 복귀할 때 사용합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" START -->

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 `myappscheme://` 형식으로 입력해 주세요.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" END -->

- productType?: string

  **상품 유형**

  - 실물 상품: `PRODUCT_TYPE_REAL`
  - 디지털 상품: `PRODUCT_TYPE_DIGITAL`

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods }}) => name === "nice" && payMethods === 'mobile' START -->

  <div class="hint" data-style="warning">

  나이스페이먼츠 휴대폰 소액결제 시 `productType`는 필수 입력이며, 상점에 설정된 상품 유형과 입력된 상품 유형이 다른 경우 결제가 실패합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods }}) => name === "nice" && payMethods === 'mobile' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'smartro' && payMethods === 'mobile' START -->

  <div class="hint" data-style="warning">

  스마트로 휴대폰 소액결제 시 `productType`는 필수 입력이며, 상점에 설정된 상품 유형과 입력된 상품 유형이 다른 경우 결제가 실패합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'smartro' && payMethods === 'mobile' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'kpn' && payMethods === 'mobile' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스 휴대폰 소액결제 시 `productType`는 필수 입력입니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name, payMethods } }) => name === 'kpn' && payMethods === 'mobile' END -->

- offerPeriod?: oneof object

  **서비스 제공 기간**

  `range`와 `interval` 중 하나만 입력해주세요.

  - range?: object

    **서비스 제공 기간 범위**

    - from?: string

      **시작 시점**

    - to?: string

      **종료 시점**

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' START -->

    <div class="hint" data-style="warning">

    스마트로의 경우 `from`과 `to`를 동시에 입력해야 합니다.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'smartro' END -->

  - interval?: string

    **제공 기간**

    - `{number}d` (`{number}`일)
    - `{number}m` (`{number}`분)
    - `{number}y` (`{number}`년)

- products?: object\[]

  **구매 상품 상세 정보**

  - id: string

    **상품 아이디**

  - name: string

    **상품명**

  - code?: string

    **상품 코드**

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' START -->

    <div class="hint" data-style="warning">

    토스페이먼츠의 경우 반드시 입력해주세요.

    </div>

    <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' END -->

  - amount: number

    **상품 단위 가격**

    - 결제 금액과 동일하게 통화별 scale factor가 적용된 금액으로 전달해주세요.

  - quantity: number

    **상품 수량**

  - tag?: string

    **상품 태그**

- storeDetails?: object

  **상점 정보**

  - ceoFullName?: string

    **상점 대표자 이름**

  - phoneNumber?: string

    **상점 연락처**

  - address?: string

    **상점 주소**

  - zipcode?: string

    **상점 우편번호**

- isCulturalExpense?: boolean

  **문화비 지출 여부**

  도서, 공연, 박물관 등 문화비 지출 여부

- isEscrow?: boolean

  **에스크로 결제 여부**

  `true`로 설정하면 에스크로를 사용합니다.

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" START -->

  <div class="hint" data-style="warning">

  토스페이먼츠의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === "toss" END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' START -->

  <div class="hint" data-style="warning">

  나이스페이먼츠의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'nice' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' START -->

  <div class="hint" data-style="warning">

  한국결제네트웍스의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'kpn' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  <div class="hint" data-style="warning">

  KG이니시스의 경우 에스크로 사용 시 별도 계약이 필요합니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => ['kcp', 'kpn', 'inicis'].includes(name) START -->

  - locale?: string

  **결제창 언어**

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['kcp', 'kpn'].includes(name) START -->

  - 한국어: `KO_KR`
  - 영어: `EN_US`

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => ['kcp', 'kpn'].includes(name) END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' START -->

  - 한국어: `KO_KR`
  - 영어: `EN_US`
  - 중국어(간체): `ZH_CN`

  <div class="hint" data-style="warning">

  KG이니시스의 경우 중국어(간체)는 PC 결제 시에만 지원됩니다.

  </div>

  <!-- CONDITIONAL CONTENT when=({ pg: { name } }) => name === 'inicis' END -->

  <!-- CONDITIONAL CONTENT when=({ pg: { name }}) => ['kcp', 'kpn', 'inicis'].includes(name) END -->

- country?: string

  **결제 국가**

  [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html)에 의해 표준화된 2글자 국가 코드입니다.

- popup?: object

  **결제창이 팝업 방식일 경우 결제창에 적용할 속성**

  - center?: boolean

    `true`로 설정하면 결제창이 브라우저 화면의 정중앙에 표시됩니다.

### 결제 오류 처리

결제 중 오류가 발생하여 결제가 완료되지 않은 경우를 처리합니다.

`SDK`의 반환 값에 `code`가 있는 경우 오류 상태로 `message` 필드에 오류 메시지가 존재합니다.
결제대행사로부터 오류를 전달받은 경우 `code`는 `FAILURE_TYPE_PG`이고, 결제대행사의 오류 코드인 `pgCode`를 기반으로 결제 오류를 처리할 수 있습니다.

### 서버 측으로 결제 완료 요청

완료된 결제의 `paymentId`를 서버로 전송하여 결제 상태를 반영합니다.

<!-- CONDITIONAL CONTENT when=({ pg }) => pg.payMethods !== "virtualAccount"  START -->

### 결제 완료 상태 처리

서버로부터 검증 후 결제가 완료된 경우를 처리합니다.

<!-- CONDITIONAL CONTENT when=({ pg }) => pg.payMethods !== "virtualAccount"  END -->

<!-- CONDITIONAL CONTENT when=({ pg }) => pg.payMethods === "virtualAccount"  START -->

### 가상계좌 발급 상태 처리

서버로부터 검증 후 가상계좌가 발급된 경우를 처리합니다.

<!-- CONDITIONAL CONTENT when=({ pg }) => pg.payMethods === "virtualAccount"  END -->

### 결제 실패 상태 처리

서버로부터 검증 결과를 획득하여, 결제가 최종적으로 실패한 경우를 처리합니다.

## 서버 측

### 포트원 서버 SDK 불러오기

포트원 서버 SDK를 불러옵니다.

<!-- CONDITIONAL CONTENT language=backend/Express START -->

아래 명령어로 서버 SDK를 설치합니다.

![NPM Version](https://img.shields.io/npm/v/%40portone%2Fserver-sdk)

![JSR Version](https://img.shields.io/jsr/v/%40portone/server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="npm">

```shell
npm install --save @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="yarn">

```shell
yarn add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="pnpm">

```shell
pnpm add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="bun">

```shell
bun add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="deno">

```shell
deno add jsr:@portone/server-sdk
```

</div>

<div class="tabs-content" data-title="ni">

```shell
ni @portone/server-sdk
```

</div>

</div>

Node.js의 경우 v20 이상에서 정상 동작하며, v20 미만 버전은 폴리필이 필요합니다.

<details>

<summary>폴리필 방법</summary>

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js v18 이상 v20 미만">

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
globalThis.crypto = require("node:crypto").webcrypto;
```

```javascript title="ESM"
import { webcrypto } from "node:crypto";
globalThis.crypto = webcrypto;
```

</div>

<div class="tabs-content" data-title="Node.js v18 미만">

[@whatwg-node/fetch](https://www.npmjs.com/package/@whatwg-node/fetch) 패키지를 의존성에 추가해 주세요.

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
const { fetch, crypto } = require("@whatwg-node/fetch");
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

```javascript title="ESM"
import { crypto, fetch } from "@whatwg-node/fetch";
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

</div>

</div>

</details>

<!-- CONDITIONAL CONTENT language=backend/Express END -->

<!-- CONDITIONAL CONTENT language=backend/FastAPI START -->

아래 명령어로 서버 SDK를 설치합니다.

![PyPI - Version](https://img.shields.io/pypi/v/portone-server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="uv">

```shell
uv add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="poetry">

```shell
poetry add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="rye">

```shell
rye add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pipenv">

```shell
pipenv install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Conda">

```shell
conda install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Hatch">

```toml title="pyproject.toml"
[project]
dependencies = [
  "portone-server-sdk~=x.x.x"
]
```

</div>

<div class="tabs-content" data-title="PDM">

```shell
pdm add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pip requirements">

```shell title="requirements.txt"
portone-server-sdk ~= x.x.x
```

</div>

</div>

<!-- CONDITIONAL CONTENT language=backend/FastAPI END -->

<!-- CONDITIONAL CONTENT language=backend/Flask START -->

아래 명령어로 서버 SDK를 설치합니다.

![PyPI - Version](https://img.shields.io/pypi/v/portone-server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="uv">

```shell
uv add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="poetry">

```shell
poetry add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="rye">

```shell
rye add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pipenv">

```shell
pipenv install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Conda">

```shell
conda install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Hatch">

```toml title="pyproject.toml"
[project]
dependencies = [
  "portone-server-sdk~=x.x.x"
]
```

</div>

<div class="tabs-content" data-title="PDM">

```shell
pdm add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pip requirements">

```shell title="requirements.txt"
portone-server-sdk ~= x.x.x
```

</div>

</div>

<!-- CONDITIONAL CONTENT language=backend/Flask END -->

<!-- CONDITIONAL CONTENT language=backend/Spring_Kotlin START -->

Maven Central을 통해 서버 SDK를 설치합니다.

[![Maven Central Version](https://img.shields.io/maven-central/v/io.portone/server-sdk)](https://central.sonatype.com/artifact/io.portone/server-sdk)

[![javadoc](https://javadoc.io/badge2/io.portone/server-sdk/javadoc.svg)](https://javadoc.io/doc/io.portone/server-sdk)

<div class="tabs-container">

<div class="tabs-content" data-title="Apache Maven">

```xml
<dependency>
  <groupId>io.portone</groupId>
  <artifactId>server-sdk</artifactId>
  <version>x.x.x</version>
</dependency>
```

</div>

<div class="tabs-content" data-title="Gradle (Kotlin)">

```kotlin
implementation("io.portone:server-sdk:x.x.x")
```

</div>

<div class="tabs-content" data-title="Gradle (Groovy)">

```groovy
implementation 'io.portone:server-sdk:x.x.x'
```

</div>

</div>

<!-- CONDITIONAL CONTENT language=backend/Spring_Kotlin END -->

### 포트원 API Secret 설정

서버 SDK를 사용하기 위해 포트원 V2 API Secret을 설정합니다.
API Secret은 포트원 관리자콘솔의 [결제 연동 > 연동 정보 > 식별코드 ・ API Keys > V2 API](https://admin.portone.io/integration-v2/manage/api-keys?version=v2)에서 발급받으실 수 있습니다.

### 결제 완료 요청

완료된 결제의 실제 상태를 조회해 시스템에 반영합니다. 브라우저 SDK를 통해 결제하는 경우 모든 결제 과정이 브라우저에서 진행되므로 결제가 조작되는 것을 막기 위해 서버에서 검증이 필요합니다.

### 결제 정보 조회

브라우저에서 전송한 `paymentId`를 통해 실제 결제 상태를 조회합니다.

<!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' START -->

<div class="hint" data-style="warning">

ISP/페이북을 통한 결제 시 토스페이먼츠가 실제 카드 번호와 다른 카드 번호를 전달하고 있어 결제 내역 단건 조회시 응답되는 `payment_method_detail.card.detail.bin` 정보가 정확하지 않을 수 있습니다.

</div>

<!-- CONDITIONAL CONTENT when=({ pg: { name }}) => name === 'toss' END -->

### 결제 정보 일치 검증

포트원에 전달한 `customData`로 조회한 상품 정보와 결제 정보가 일치하는지 검증합니다.

### 웹훅 수신

결제 상태의 변화를 실시간으로 확인해야 한다면 웹훅을 사용할 수 있습니다.

### HTTP Body 수신 설정

웹훅 내용을 검증하기 위해서는 HTTP Body를 문자열 형태로 수신해야 합니다.

### 웹훅 검증

수신한 웹훅이 위조되지 않았는지 포트원 서버 SDK를 사용하여 검증합니다.

### 결제 상태 업데이트

검증된 웹훅 결과를 바탕으로 결제 상태를 업데이트합니다.


# https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/inicis

---
title: 결제대행사별 연동 정보 확인하기 - KG이니시스
targetVersions:
  - v1
  - v2
---

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

<div class="hint" data-style="info">

- **INILite Key**는 정기결제 시 필수로 입력해야 합니다.
- **INIAPI Key**, **INIAPI IV** 하위 상점 관련 API 사용시 필수로 입력해야 합니다. [영수증 내 하위 상점 거래 등록 API 바로가기](https://developers.portone.io/api/rest-v1/partner#post%20%2Fpartners%2Freceipts%2F%7Bimp_uid%7D)

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


# https://developers.portone.io/opi/ko/integration/ready/_components/integration-guide/tosspayments

---
title: 결제대행사별 연동 정보 확인하기 - 토스페이먼츠 (신모듈)
targetVersions:
  - v1
  - v2
---

1. [토스페이먼츠 개발자센터](http://developers.tosspayments.com/) 접속 후 로그인을 합니다.
2. \[내 개발정보]를 클릭합니다.
3. \[API키] 메뉴에서 \[상점아이디(MID)]와 \[클라이언트키], \[시크릿키]를 확인합니다.
4. API 버전은 `2022-07-27`로 설정해야합니다.

(이미지 첨부: 토스페이먼츠 개발자센터 내 API 키 조회 화면)

5. 포트원 콘솔에서 채널 추가 시 \[상점아이디(MID)]와 \[클라이언트키], \[시크릿키]를 입력한 후 `저장`을 클릭합니다.


# https://developers.portone.io/platform/ko/guides/dictionary

---
title: 용어 사전
description: ''
---

|   용어   |                                             설명                                             |                                                         비고                                                        |
|:--------:|:--------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------:|
|   콘솔   |  포트원의 거래내역을 확인하고 파트너와 정산을 등록하고 내역을 확인 할 수 있는 솔루션입니다.  |                                   [관리자콘솔 바로가기](https://admin.portone.io)                                   |
|  고객사  |                   포트원의 결제서비스를 이용하고 있는 포트원의 고객입니다.                   |                                                                                                                     |
|  파트너  |              고객사가 결제사정산 이후 하위정산을 받을 고객사의 파트너사 입니다.              |                                                                                                                     |
|결제사정산|          포트원의 결제 이후 결제대행사(PG) 또는 간편결제사로부터 고객사가 받는 정산          |                                                                                                                     |
|파트너정산|                      결제사정산 이후에 고객사가 파트너에게 내려주는 정산                     |                                                                                                                     |
|   계약   |            고객사와 파트너 사이에 정산이 이루어지기 위한 조건(중개수수료, 주기 등)           |                                                                                                                     |
|  영업일  |                            은행이 영업을 하는 날로, 휴일이 아닌 날                           |10일(금), 11일(토), 12(일), 13(월)이라고 할 때, 11,12,13일의 전영업일은 10일이고, 10,11,12일의 후영업일은 13일입니다.|
|  달력일  |                                    휴일과 상관없는 단순일                                    |                                                                                                                     |
|  수수료  |                               절차 및 중개 등 때 수수하는 금전                               |                                                                                                                     |
|  부가세  |상품(재화)의 거래나 서비스(용역)의 제공과정에서 얻어지는 부가가치(이윤)에 대하여 과세하는 세금|                일반과세자는 10%의 세율이 적용함으로, 수수료가 3천원 일 경우, 부가세는 300원으로 계산                |
|할인분담금|                    할인금액에 대해 고객사와 파트너가 나누어 부담하는 금액                    |                                                                                                                     |
|   정률   |                        수수료를 계산하는 방식으로 백분율을 곱하는 방식                       |                               3만원에 대해 3%의 수수료로 계약 했을 시, 수수료는 900원                               |
|   정액   |                수수료를 계산하는 방식으로 고정된 금액 또는 건수에 곱하는 방식                |                                                   판매 건당 1천원                                                   |


# https://developers.portone.io/platform/ko/guides/process

---
title: 서비스 프로세스
description: ''
---

## ✔️ 파트너 정산 자동화 서비스 프로세스

<div class="hint" data-style="etc">

📘  **파트너정산은 간단한 API연동과 관리자 콘솔 등록을 통해 파트너정산을 자동화 하는 서비스 입니다.**

</div>

전반적인 프로세스는 다음과 같으며 포트원의 결제 서비스를 이용하고 있다고 가정합니다.

- 포트원 고객사는 API/콘솔을 통해 **파트너와 포트원 고객사간의 계약을 등록**합니다.
  - 중개 수수료, 정산 주기, 추가 수수료 등 정산정보를 등록합니다.

- 포트원 고객사는 API/콘솔을 통해 **파트너(하위셀러)를 등록**합니다.
  - 파트너 아이디, 파트너 계좌 등 파트너 정보를 등록합니다.
  - 파트너에게 기본으로 적용될 계약을 등록합니다.

- 포트원 고객사가 정산 API를 통해 **결제 아이디와 할인금액, 상품정보와 같은 주문정보, 파트너 아이디를 전달**합니다.
  - 포트원 결제 sdk/api 처리 이후 정산 api를 통해 결제 아이디, 할인금액, 주문정보, 파트너 아이디를 전달합니다.

- 포트원은 정산 API를 통해 **주문정보 기반으로 정산금액을 계산**합니다.
  - 파트너 아이디 를 통해 정산대상 파트너를 찾습니다.
  - 해당 파트너로 등록된 기본계약 아이디를 통해 중개수수료를 계산하고 정산주기를 통해 해당 정산건의 정산일을 계산합니다.
  - 할인금액을 반영하여 결제금액과 합하여 주문금액을 계산합니다.
  - 할인아이디를 통해 할인금액의 파트너 분담금을 계산합니다.
  - 추가수수료 아이디를 통해 해당 주문건에 적용되어야할 추가 과금을 계산합니다.

- 포트원은 파트너별로 **누적된 정산금액을 정산일에 맞춰 이체할 금액을 계산**합니다.


# https://developers.portone.io/platform/ko/readme

---
title: 파트너 정산 자동화 서비스 가이드
description: ''
---

## ✔️ 파트너 정산 자동화 서비스란?

<div class="hint" data-style="etc">

👍 **매달 반복되는 모든 파트너(하위셀러) 정산을 한 번에 처리하는 원스톱 정산 솔루션입니다.**

</div>

포트원의 파트너 정산 자동화 서비스를 이용하여 **마켓플레이스**, **플랫폼 사업자**들이 간단한 API연동과
포트원 관리자 콘솔을 통해서 간편하게 하위정산을 처리할 수 있습니다.

플랫폼 사업을 운영하는 포트원의 고객사분들의 다양한 요청을 통해 기획된 본 서비스는,
모든 정산 케이스들을 매우 편리하게 처리할 수 있습니다.

**하위셀러 정산 시스템 구축**을 위해 고객사 자체 개발에 드는 많은 비용과 시간을,
포트원 파트너 정산 자동화 서비스로 재무, 개발 공수를 획기적으로 줄여보세요.

## ✔️ 어떤 비지니스에 파트너 정산 자동화 서비스가 필요할까요?

파트너정산 서비스를 통해 정산 금액을 계산 및 관리하고 정산주기에 맞춰서 이체하실 수 있습니다.

각 주문건별로 중개수수료, 부가세, 할인 분담금 등을 파트너정산 서비스에서는 자동으로 정산금액을 계산합니다.

### 🛒 커머스 마켓플레이스

- 셀러가 마켓플레이스에 입점하여 상품을 판매하는 경우, 셀러에게 중개 수수료 및 할인분담금 등을 정산하는 경우
- 마케팅 채널 비용, 풀필먼트와 같이 추가로 발생하는 비용을 정산하는 경우

### 🖥 온라인 강의 플랫폼

- 크리에이터와 Revenue Share를 통해 주문건 마다 수익을 나누는 경우 (크리에이터, 파트너와 각 주문건별로 Revenue Share를 처리하는 경우)

### 🛵 배달 플랫폼

- 앱에서 이루어진 주문건별로 배달업체 및 식당과 수수료를 정산하는 경우

### 🤝 중고거래 플랫폼

- 앱에서 이루어진 거래건당 중개 수수료를 정산하는 경우
- 매입상품 플랫폼 커머스, 주기적으로 매입하는 상품에 대한 정산을 처리하는 경우

## ✔️ 왜 파트너 정산 자동화 서비스를 꼭 써야할까요?

포트원 결제 연동 서비스에서 확장하여 복잡한 정산도 손쉽게 처리가 가능합니다!

### 간단한 정산 API를 통해 실시간 정산 데이터 등록 및 관리

- 주문정보를 통한 손쉬운 정산 관리
- 주문건 외 추가 처리 필요한 정산건별

### 단순 중개수수료 처리부터 다양한 파트너 과금 모델 지원

- 쿠폰 및 포인트에 적용되는 할인 분담율
- 마케팅 비용 분담, 풀필먼트 수수료와 같은 주문별 추가 수수료
- 정산 시 수식 편집 가능

### 뱅킹앱 엑셀 다운로드 및 지급대행을 통한 이체 자동화

[파트너 정산 자동화 서비스 가이드](https://www.youtube.com/watch?v=tLeo78Ko4h4)


# https://developers.portone.io/platform/ko/usages/client

---
title: 고객사 예시
description: ''
---

## 사전 조건

- 가맹점 : 커머스 마켓플레이스

- 파트너 : 셀러 A, 셀러 B

- 계약 조건

  |파트너|중개수수료|           정산주기           |
  |:----:|:--------:|:----------------------------:|
  |   A  |    10%   |D+2, 매월 31일, 전 영업일 기준|
  |   B  |    20%   |D+2, 매월 31일, 전 영업일 기준|


# https://developers.portone.io/platform/ko/usages/contract

---
title: 계약 예시
description: ''
---

## 사전 조건

| 계약|중개수수료|           정산주기           |
|:---:|:--------:|:----------------------------:|
|계약1|    10%   |D+2, 매월 31일, 전 영업일 기준|

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
contract_payload = {
"platformFee": {
  "fixedRate": 10000
  }, # 10% 수수료. 료율 표시 기준은 1/100000 입니다. 따라서 소수점 5자리까지 표시 가능합니다.
"platformFeeVatPayer": "PARTNER", # 부가세 부담 여부. 파트너 부담("PARTNER"), 파트너 미부담("MERCHANT") 가 있습니다.
"id": "contractA",
"memo": "contract A",
"settlementCycle": { #정산주기
  "lagDays": 2, #정산 지연일 (d+n)일
  "datePolicy": "HOLIDAY_BEFORE", # 전 영업일 기준
  "method": { #'daily','weekly','monthly' 'manualDates' 중 하나를 선택하셔야 합니다.
    'monthly':{
      "daysOfMonth":[31] # 매월 31일. 31일은 월말 기준으로 합니다.
      }
    }
  }
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

contract_A = requests.post('https://api.portone.io/platform/contracts/', headers=headers, json=contract_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
// 10% 수수료. 료율 표시 기준은 1/100000 입니다. 따라서 소수점 5자리까지 표시 가능합니다.
const contract_payload = {
  platformFee: { fixedRate: 10000 },
  // 부가세 부담 여부. 파트너 부담("PARTNER"), 파트너 미부담("MERCHANT") 가 있습니다.
  platformFeeVatPayer: "PARTNER",
  id: "contractA",
  memo: "contract A",
  //정산주기
  settlementCycle: {
    //정산 지연일 (d+n)일
    lagDays: 2,
    // 전 영업일 기준
    datePolicy: "HOLIDAY_BEFORE",
    // 'daily','weekly','monthly' 'manualDates' 중 하나를 선택하셔야 합니다.
    method: {
      // 매월 31일. 31일은 월말 기준으로 합니다.
      monthly: { daysOfMonth: [31] },
    },
  },
};

axios
  .post("https://api.portone.io/platform/contracts", contract_payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "contract": {
    "id": "contractA",
    "graphqlId": "NTpjb250cmFjdEE=",
    "memo": "contract A",
    "platformFee": {
      "type": "FIXED_RATE",
      "rate": 10000
    },
    "settlementCycle": {
      "lagDays": 2,
      "datePolicy": "HOLIDAY_BEFORE",
      "method": {
        "type": "MONTHLY",
        "daysOfMonth": [31]
      }
    },
    "platformFeeVatPayer": "PARTNER",
    "isHidden": false,
    "appliedAt": "2023-08-11T11:18:52.944447Z" // 업데이트 된 순간을 뜻합니다. 추후 해당 계약에대한 업데이트가 있을 때 해당 시점을 보여줍니다.
  }
}
```

</div>

</div>


# https://developers.portone.io/platform/ko/usages/discount

---
title: 할인 예시
description: ''
---

## 사전 조건

- 할인 정책 1 : 할인 금액 50% 파트너 분담

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
discount_payload = {
"id": "discount_2", #할인 아이디
"partnerShareRate": 50000, # 10^5기준, 50% 분담
"memo": "테스트 할인"
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

discount_A = requests.post('https://api.portone.io/platform/discount-share-policies', headers=headers, json=discount_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const discount_payload = {
  id: "discount_2", //할인 아이디
  partnerShareRate: 50000, // 10^5기준, 50% 분담
  memo: "테스트 할인",
};

axios
  .post(
    "https://api.portone.io/platform/discount-share-policies",
    discount_payload,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `PortOne ${PORTONE_API_SECRET}`,
      },
    },
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "discountSharePolicy": {
    "id": "discount_2",
    "graphqlId": "MjpkaXNjb3VudF8y",
    "partnerShareRate": 50000,
    "memo": "테스트 할인",
    "isHidden": false,
    "appliedAt": "2023-08-13T10:41:02.385833Z"
  }
}
```

</div>

</div>


# https://developers.portone.io/platform/ko/usages/fee

---
title: 추가 수수료 예시
description: ''
---

## 사전 조건

- 추가수수료 정책 1 : 추가수수료 5% 파트너 분담

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
additionalfees_payload = {
  "id": "addtional_fee_3",
  "fee": {
    "fixedRate": 5,
  },
  "memo": "테스트 추가수수료",
  "vatPayer": "PARTNER"
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

fee_A = requests.post('https://api.portone.io/platform/additional-fee-policies', headers=headers, json=additionalfees_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const additionalfees_payload = {
  id: "addtional_fee_3", //추가 수수료 아이디
  fee: {
    fixedRate: 5, // 5%분담
  },
  memo: "테스트 추가수수료",
  vatPayer: "PARTNER",
};

axios
  .post(
    "https://api.portone.io/platform/additional-fee-policies",
    additionalfees_payload,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `PortOne ${PORTONE_API_SECRET}`,
      },
    },
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "additionalFeePolicy": {
    "id": "addtional_fee_3",
    "graphqlId": "MzphZGR0aW9uYWxfZmVlXzM=",
    "fee.type": "FIXED_RATE",
    "fee.rate": 5,
    "memo": "테스트 추가수수료",
    "vatPayer": "PARTNER",
    "isHidden": false,
    "appliedAt": "2023-08-13T12:31:50.822913Z"
  }
}
```

</div>

</div>


# https://developers.portone.io/platform/ko/usages/order

---
title: 주문정산 예시
description: ''
---

## 주문 정산 생성

주문 정산을 생성하는 예시입니다.

### 사전 조건

- 주문금액 : 10,000원
- 결제금액 : 10,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
import requests
# ... 결제 요청 및 결제 완료 로직 생략. 포트원 결제일경우 https://developers.portone.io/opi/ko/authpay/guide?v=v2 를 참고하세요

# 주문 정산 요청

orderTransferData = {
"partnerId": "partner_A", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_1", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
"orderAmount": 10000,
},
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 주문 정산 요청
const orderTransferData = {
  partnerId: "partner_A", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_1", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000,
  },
  settlementStartDate: null, // 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

axios
  .post("https://api.portone.io/platform/transfer/order", orderTransferData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7MCX58SGYCNVN1CWY3HXM6D",
    "graphqlId": "NjowMUg3TUNYNThTR1lDTlZOMUNXWTNIWE02RA==",
    "partner": {
      // 파트너 정보 생략
    },
    "status": "IN_PROCESS", // 정산 상태값. 정산 api 문서에서 보다 자세하게 확인하실 수 있습니다.
    "settlementDate": "2023-08-31", //정산일
    "settlementCurrency": "KRW", //포트원 결제 통화를 따릅니다.
    "isForTest": false,
    "amount": {
      "settlement": 8900, //최종 정산금액
      "payment": 10000, //결제금액
      "order": 10000, //주문금액
      "platformFee": 1000, //중개 수수료 10%
      "platformFeeVat": 100, //중개수수료 부가세
      "additionalFee": 0, //추가 수수료
      "additionalFeeVat": 0, //추가 수수료 부가세
      "discount": 0, //할인금액
      "discountShare": 0 //할인금액 중 파트너가 부담하는 금액
    },
    "contract": {
      //적용된 계약 정보. 파트너 A의 대표 계약이 적용됩니다.
      "id": "contractA",
      "graphqlId": "NTpjb250cmFjdEE=",
      "memo": "contract A",
      "platformFee": {
        "type": "FIXED_RATE",
        "rate": 10000
      },
      "payment": {
        "id": "payment_1",
        "orderName": "string",
        "currency": "KRW",
        "method": {
          "card": {}
        },
        "paidAt": "2023-08-11T08:21:01.241Z"
      }
    },
    "settlementStartDate": "2023-08-11", //기본값으로 결제 완료 시점을 따릅니다.
    "orderLines": [],
    "additionalFees": [],
    "discounts": []
  }
}
```

</div>

</div>

## 주문 취소 정산 등록

주문 정산건에 대해서 주문 취소가 일어났을 때 주문취소 정산을 등록하는 예시입니다.

### 사전 조건

- 취소금액 : 5,000원
- 결제 취소금액 : 5,000원
- 판매 파트너 : A
- 정산시작일 (결제 취소 완료 시점): 2023-08-12

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
# 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
# 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
# ... 중략....

# 주문취소 정산 요청
orderCancelTransferData ={
  "partnerId": "partner_A",
  "paymentId": "payment_1", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  "cancellationId": "cancellation_1", # 포트원 결제시 결제 취소 아이디
  "orderDetail": {
  "orderAmount": 5000,
  },
  "settlementStartDate": None, #결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  "isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderCancelTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderCancelTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
// 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
// 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
// ... 중략....

// 주문취소 정산 요청
const orderCancelTransferData = {
  partnerId: "partner_A",
  paymentId: "payment_1", // 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  cancellationId: "cancellation_1", // 포트원 결제시 결제 취소 아이디
  orderDetail: {
    orderAmount: 5000,
  },
  settlementStartDate: null, // 결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

axios
  .post(
    "https://api.portone.io/platform/transfer/order",
    orderCancelTransferData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `PortOne ${PORTONE_API_SECRET}`,
      },
    },
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER_CANCEL",
    "id": "01H7J87XQ4JAS28RWZBC29YCJ1",
    "graphqlId": "NjowMUg3Sjg3WFE0SkFTMjhSV1pCQzI5WUNKMQ==",
    "partner": {
      // 파트너 정보 생략 ...
    },
    "status": "SCHEDULED", // 정산 상태값. 미래 시점인경우 SCHEDULED 상태입니다.
    "settlementDate": "2023-08-3", //정산일
    "settlementCurrency": "KRW", //포트원 결제 통화를 따릅니다.
    "isForTest": false,
    "amount": {
      "settlement": 4450, //최종 정산취소금액
      "payment": 5000, //결제 취소 금액
      "order": 5000, //주문 취소 금액
      "platformFee": 500, //중개 수수료 10%
      "platformFeeVat": 50, //중개수수료 부가세
      "additionalFee": 0, //추가 수수료
      "additionalFeeVat": 0, //추가 수수료 부가세
      "discount": 0, //할인금액
      "discountShare": 0 //할인금액 중 파트너가 부담하는 금액
    },
    "contract": {
      //계약 정보 생략 ...
    },
    "payment": {
      "id": "payment_1",
      "orderName": "string",
      "currency": "KRW",
      "method": {
        "card": {}
      },
      "paidAt": "2023-08-11T08:21:01.241Z"
    }
  },
  "settlementStartDate": "2023-08-12", //기본값으로 결제 취소 시점을 따릅니다.
  "orderLines": [],
  "additionalFees": [],
  "discounts": [],
  "cancellation": {
    // 결제 취소 정보
    "id": "cancellation_1",
    "cancelledAt": "2023-08-12T11:57:15.292Z"
  }
}
```

</div>

</div>

## 상품 정보를 통한 주문 정산

상품 정보를 통한 주문 정산을 생성하는 예시입니다.

### 사전 조건

- 주문금액 : 14,000원
- 결제금액 : 14,000원
- 판매 파트너 : A, 정산시작일 (결제완료 시점): 2023-08-11

|상품|  가격 |갯수|
|:--:|:-----:|:--:|
|  A |2,000원| 5개|
|  B |4,000원| 1개|

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# 주문정산과 차이나는 부분만 기재하였습니다.
orderTransferData ={
  # 생략 ...
  "orderDetail":{
    "orderLines":[
      {
        "product": {
          "id": "product_A", # 상품아이디
          "name": "상품 A", # 상품명
          "amount": 2000, # 상품 가격
          "tag": "과일", # 상품 태그 에시
        },
        "quantity": 5,
        "discounts": [], # 해당 상품에만 적용되는 할인정보
        "additionalFees": [], # 해당 상품에만 적용되는 추가 수수료 정보
      },
      {
        "product": {
          "id": "product_B", # 상품아이디
          "name": "상품 B", # 상품명
          "amount": 4000, # 상품 가격
          "tag": "과일", # 상품 태그 예시
        },
        "quantity": 1,
        "discounts": [], # 해당 상품에만 적용되는 할인정보
        "additionalFees": [], # 해당 상품에만 적용되는 추가 수수료 정보
      }
    ]
  }
# 생략 ...
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 위 주문정산1과 차이나는 부분만 기재하였습니다.
const orderTransferData = {
  // ... 생략 ...
  orderDetail: {
    orderLines: [
      {
        product: {
          id: "product_A", // 상품 아이디
          name: "상품 A", // 상품 명
          amount: 2000, // 상품 가격
          tag: "과일", // 상품 태그 에시
        },
        quantity: 5,
        discounts: [], // 해당 상품에만 적용되는 할인정보
        additionalFees: [], // 해당 상품에만 적용되는 추가 수수료 정보
      },
      {
        product: {
          id: "product_B", // 상품 아이시
          name: "상품 B", // 상품 명
          amount: 4000, // 상품 가격
          tag: "과일", // 상품 태그 예시
        },
        quantity: 1,
        discounts: [], // 해당 상품에만 적용되는 할인정보
        additionalFees: [], // 해당 상품에만 적용되는 추가 수수료 정보
      },
    ],
  },
  // ... 생략 ...
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

axios
  .post("https://api.portone.io/platform/transfer/order", orderTransferData, {
    headers: headers,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7MCX58SGYCNVN1CWY3HXM6D",
    "graphqlId": "NjowMUg3TUNYNThTR1lDTlZOMUNXWTNIWE02RA==",
    "partner": {
      // 파트너 정보 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      // 전체 주문건에 대한 정산정보
      "settlement": 12460, // 전체 주문건에 대한 정산 금액
      "payment": 14000,
      "order": 14000,
      "platformFee": 1400,
      "platformFeeVat": 140,
      "additionalFee": 0,
      "additionalFeeVat": 0,
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      //계약 정보 생략
    },
    "payment": {
      "id": "payment_1",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [
      // 상품별 주문 및 정산정보
      {
        "product": {
          "id": "product_A",
          "name": "상품 A",
          "amount": 2000,
          "tag": "과일"
        },
        "quantity": 5,
        "discounts": [],
        "additionalFees": [],
        "amount": {
          //상품 별 정산정보. 참고로 전체 주문에대한 할인 및 추가수수료 정보는 전체 주문건에 대한 정산정보에 포함됩니다.
          "settlement": 8900,
          "payment": 10000,
          "order": 10000,
          "platformFee": 1000,
          "platformFeeVat": 100,
          "additionalFee": 0,
          "additionalFeeVat": 0,
          "discount": 0,
          "discountShare": 0
        }
      },
      {
        "product": {
          "id": "product_B",
          "name": "상품 B",
          "amount": 4000,
          "tag": "과일"
        },
        "quantity": 1,
        "discounts": [],
        "additionalFees": [],
        "amount": {
          "settlement": 3560,
          "payment": 4000,
          "order": 4000,
          "platformFee": 400,
          "platformFeeVat": 40,
          "additionalFee": 0,
          "additionalFeeVat": 0,
          "discount": 0,
          "discountShare": 0
        }
      }
    ],
    "additionalFees": [], //전체 주문건에 대한 추가 수수료 정문
    "discounts": [] //전체 주문건에 대한 할인정보
  }
}
```

</div>

</div>

## 상품 정보를 통한 주문 취소 정산

상품 정보를 통한 주문 취소 정산을 등록하는 예시입니다.

### 사전 조건

- 주문취소 금액 : 4,000원
- 취소 상품 A 가격: 2,000
- 취소 갯수: 2개
- 결제 취소금액 4,000원

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
# 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
# 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
# ... 중략....

# 주문취소 정산 요청
orderCancelTransferData ={
  "partnerId": "partner_A",
  "paymentId": "payment_1", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  "cancellationId": "cancellation_1", # 포트원 결제시 결제 취소 아이디
  "orderDetail": {
  "orderAmount": 4000,
  "orderLines": [
    {
    "productId": "product_A", # 상품 A 아이디
    "quantity": "2" # 상품 취소 갯수
  }
],
  },
  "settlementStartDate": None, #결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  "isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderCancelTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderCancelTransferData)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

// 결제 취소 후 결제취소 아이디(cancellation_id)를 확인합니다.
// 결제취소 아이디 (cancellation_id)는 결제 취소 API (POST https://api.portone.io/v2/payments/{paymentId}/cancel)로 취소시 응답에 포함됩니다.
// 또는 결제내역 단건조회 API (GET https://api.portone.io/v2/payments/{paymentId}) 조회시 응답에 포함됩니다.
// ... 중략....

// 주문취소 정산 요청
const orderCancelTransferData = {
  partnerId: "partner_A",
  paymentId: "payment_1", // 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  cancellationId: "cancellation_1", // 포트원 결제시 결제 취소 아이디
  orderDetail: {
    orderAmount: 5000,
    orderLines: [
      {
        productId: "product_A", // 상품 A 아이디
        quantity: "2", // 상품 취소 갯수
      },
    ],
  },
  settlementStartDate: null, // 결제취소 완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

axios
  .post(
    "https://api.portone.io/platform/transfer/order",
    orderCancelTransferData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `PortOne ${PORTONE_API_SECRET}`,
      },
    },
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER_CANCEL",
    "id": "01H7J87XQ4JAS28RWZBC29YCJ1",
    "graphqlId": "NjowMUg3Sjg3WFE0SkFTMjhSV1pCQzI5WUNKMQ==",
    "partner": {
      // 파트너 정보 생략 ...
    },
    "status": "SCHEDULED", // 정산 상태값. 미래 시점인경우 SCHEDULED 상태입니다.
    "settlementDate": "2023-08-3", //정산일
    "settlementCurrency": "KRW", //포트원 결제 통화를 따릅니다.
    "isForTest": false,
    "amount": {
      "settlement": 3560, //최종 정산취소금액
      "payment": 4000, //결제 취소 금액
      "order": 4000, //주문 취소 금액
      "platformFee": 400, //중개 수수료 10%
      "platformFeeVat": 40, //중개수수료 부가세
      "additionalFee": 0, //추가 수수료
      "additionalFeeVat": 0, //추가 수수료 부가세
      "discount": 0, //할인금액
      "discountShare": 0 //할인금액 중 파트너가 부담하는 금액
    },
    "contract": {
      //계약 정보 생략 ...
    },
    "payment": {
      "id": "payment_1",
      "orderName": "string",
      "currency": "KRW",
      "method": {
        "card": {}
      },
      "paidAt": "2023-08-11T08:21:01.241Z"
    }
  },
  "settlementStartDate": "2023-08-12", //기본값으로 결제 취소 시점을 따릅니다.
  "orderLines": [],
  "additionalFees": [],
  "discounts": [],
  "cancellation": {
    // 결제 취소 정보
    "id": "cancellation_1",
    "cancelledAt": "2023-08-12T11:57:15.292Z"
  }
}
```

</div>

</div>

## 주문 : 정산 파트너가 1:N일 때

정산 API는 현재 1명의 파트너에 대해 1개의 정산건만 지원하고 있습니다.

따라서 단일 주문에 여러 파트너가 정산을 해야한다면 파트너의 주문금액 기준으로 정산건을 분리하여 별도의
정산건을 생성하셔야 합니다.

이는 orderLines를 통한 정산API에도 동일하게 적용됩니다.

(추후 상품관리 기능을 통해 각 상품별 정산 파트너를 지정할 수 있도록 개선할 예정입니다.)

### 사전 조건

- 전체 주문금액 : 10,000원
- 결제금액 10,000원
- 판매 파트너 A, B
- 파트너 A 할당 주문금액 5,000원
- 파트너 B 할당 주문금액 5,000원

### 샘플 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
# ... 결제 요청 및 결제 완료 로직 생략. 포트원 결제일경우 https://developers.portone.io/opi/ko/authpay/guide?v=v2 를 참고하세요

# 주문건에 대해서 주문금액 기준으로 직접 파트너별로 분리하여 정산건을 생성합니다.

orderTransferData_A ={
"partnerId": "partner_A", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_3", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
"orderAmount": 5000,
},
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": False # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse_A =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData_A)

orderTransferData_B ={
"partnerId": "partner_B", # 파트너 B 파트너 아이디 등록 가정
"paymentId": "payment_3", # 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
"orderAmount": 5000,
},
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": False # 테스트 정산 여부
}

orderTransferResponse_B =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransferData_B)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
// ... 결제 요청 및 결제 완료 로직 생략. 포트원 결제일경우 https://developers.portone.io/opi/ko/authpay/guide?v=v2 를 참고하세요
// 주문건에 대해서 주문금액 기준으로 직접 파트너별로 분리하여 정산건을 생성합니다.

const orderTransferData_A = {
  partnerId: "partner_A", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_3", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 5000,
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

const orderTransferData_B = {
  partnerId: "partner_B", // 파트너 B 파트너 아이디 등록 가정
  paymentId: "payment_3", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 5000,
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function sendOrderTransfer(data) {
  try {
    const response = await axios.post(
      "https://api.portone.io/platform/transfer/order",
      data,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error sending order transfer:", error);
  }
}

(async () => {
  const orderTransferResponse_A = await sendOrderTransfer(orderTransferData_A);
  console.log(orderTransferResponse_A);

  const orderTransferResponse_B = await sendOrderTransfer(orderTransferData_B);
  console.log(orderTransferResponse_B);
})();
```

</div>

</div>

## 주문 정산 할인 반영

할인 정책 생성은 쿠폰 또는 포인트와 같은 할인 유형에 대해서 분담율을 설정하신 후 생성 하실 수 있습니다.

할인 정책 생성은 콘솔이나 api를 통해서 하실 수 있습니다. 생성 후 `discounts` 파라미터에 `sharePolicyId`
와 `amount` (할인금액)을 전달하시면 됩니다.

### 사전 조건

- 주문금액 : 10,000원
- 할인금액 :2,000원
- 결제금액 : 8,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 할인 정책: 파트너 분담율 50%

### 샘플코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_4", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
    "orderAmount": 10000, # 주문금액
  },
"settlementStartDate": None, # 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
"discounts": [ # 주문에 적용될 할인 정책. 리스트로써 할인 유형별 여러개를 전달하실 수 있습니다.
  {
    "sharePolicyId": "discount_2", # 할인 정책 아이디
    "amount": 2000 # 할인 금액
  }
]
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransfer_A = request.post ('https://api.portone.io/platform/transfers/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransfer_payload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_4", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
  discounts: [
    // 주문에 적용될 할인 정책. 할인 유형별 여러개를 전달하실 수 있습니다.
    {
      sharePolicyId: "discount_2", // 할인 정책 아이디
      amount: 2000, // 할인 금액
    },
  ],
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function post_platform_api(endpoint, payload) {
  try {
    const response = await axios.post(
      `https://api.portone.io/${endpoint}`,
      payload,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error posting to platform API:", error);
  }
}

(async () => {
  const orderTransfer_A = await post_platform_api(
    "platform/transfers/order",
    orderTransfer_payload,
  );
  console.log(orderTransfer_A);
})();
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7Q7WKY98R1TKM8XBHSQ1J6F",
    "graphqlId": "NjowMUg3UTdXS1k5OFIxVEtNOFhCSFNRMUo2Rg==",
    "partner": {
      // 파트너 정보 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      //주문건 정산 정보
      "settlement": 7900, // 정산금액
      "payment": 8000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 0,
      "additionalFeeVat": 0,
      "discount": 2000, // 적용된 할인금액
      "discountShare": 1000 //파트너가 부담할 할인금액 (할인 정책의 파트너 분담율이 50% 이기 때문에)
    },
    "contract": {
      // 계약 정보 생략
    },
    "payment": {
      "id": "payment_4",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [],
    "additionalFees": [],
    "discounts": [
      //적용된 할인 정보
      {
        "sharePolicy": {
          //적용된 할인 정책
          "id": "discount_2",
          "graphqlId": "MjpkaXNjb3VudF8y",
          "partnerShareRate": 50000,
          "memo": "테스트 할인",
          "isHidden": false,
          "appliedAt": "2023-08-13T10:41:02.385833Z"
        },
        "amount": 2000,
        "shareAmount": 1000
      }
    ]
  }
}
```

</div>

</div>

## 주문 정산 상품 할인 반영

주문 전체가 아닌 특정 상품에대해서 할인 정책을 적용하고 싶으시면 orderLines 의 각 상품 항목의 discounts 파라미터에 전달하시면 됩니다.

### 사전 조건

- A 상품 금액 : 10,000원
- A 상품 할인금액 : 2000원
- 구매 갯수 : 2개
- 결제금액 : 16,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 할인 정책: 파트너 분담율 50%

### 샘플코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_4", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
    "orderAmount": 20000, # 주문금액
    "orderLines": [
    {
      "product": {
        "id": "product_A",
        "name": "A상품",
        "amount": 10000
      },
      "quantity": 2,
      "discounts": [
        {
          "sharePolicyId": "discount_2", # 할인 정책 아이디
          "amount": 2000 # 할인 금액
        }
      ],
     }
    ]
  },
"settlementStartDate": None, # 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
}

 headers = {
  'Authorization': f'PortOne ${PORTONE_API_SECRET}',
  'Content-Type': 'application/json'
}
orderTransfer_A = requests.post ('https://api.portone.io/platform/transfers/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransfer_payload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_4", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
    orderLines: [
      {
        product: {
          id: "product_A",
          name: "A상품",
          amount: 10000,
        },
        quantity: 2,
        discounts: [
          {
            sharePolicyId: "discount_2", // 할인 정책 아이디
            amount: 2000, // 할인 금액
          },
        ],
      },
    ],
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function post_platform_api(endpoint, payload) {
  try {
    const response = await axios.post(
      `https://api.portone.io/${endpoint}`,
      payload,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error posting to platform API:", error);
  }
}

(async () => {
  const orderTransfer_A = await post_platform_api(
    "platform/transfers/order",
    orderTransfer_payload,
  );
  console.log(orderTransfer_A);
})();
```

</div>

</div>

## 주문 정산 추가 수수료 반영

추가수수료 정책 생성 은 로켓배송, 마케팅채널 수수료 등 특정 주문건에 적용되는 수수료 입니다.
관리자 콘솔이나 API를 통해서 적용하실 수 있습니다.
`additionalFees` 파라미터에 `policyId` 를 전달하시면 됩니다.

### 사전 조건

- 주문금액 : 10,000원
- 추가수수료(로켓배송) : 2,000원
- 결제금액 : 8,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 추가 수수료 정책: 수수료율 5%, 부가세 파트너 부담

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_5", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
    "orderAmount": 10000, # 주문금액
  },
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
"additionalFees": [ # 주문에 추가수수료 정책들. 리스트로써 여러개를 전달하실 수 있습니다.
  {
    "policyId": "addtional_fee_3", # 추가수수료 정책 아이디
  }
]
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransfer_A =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

async function postPlatformApi(endpoint, payload) {
  const baseURL = "https://api.portone.io/";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
  };

  try {
    const response = await axios.post(baseURL + endpoint, payload, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

const orderTransferPayload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_5", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
  additionalFees: [
    // 주문에 추가수수료 정책들. 리스트로써 여러개를 전달하실 수 있습니다.
    {
      policyId: "addtional_fee_3", // 추가수수료 정책 아이디
    },
  ],
};

// Using the function
(async () => {
  const orderTransferA = await postPlatformApi(
    "platform/transfers/order",
    orderTransferPayload,
  );
  console.log(orderTransferA);
})();
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7QEET738MFFY40NP4V7WW4V",
    "graphqlId": "NjowMUg3UUVFVDczOE1GRlk0ME5QNFY3V1c0Vg==",
    "partner": {
      //파트너 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      //주문건 정산 정보
      "settlement": 8350,
      "payment": 10000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 500, //추가수수료
      "additionalFeeVat": 50, //추가수수료 부가세
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      // 계약 생약
    },
    "payment": {
      "id": "payment_5",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [],
    "additionalFees": [
      // 적용된 추가수수료 정책 정보
      {
        "policy": {
          "id": "addtional_fee_3",
          "graphqlId": "MzphZGR0aW9uYWxfZmVlXzM=",
          "fee": {
            "type": "FIXED_RATE",
            "rate": 5000
          },
          "memo": "테스트 추가수수료",
          "vatPayer": "PARTNER",
          "isHidden": false,
          "appliedAt": "2023-08-13T12:31:50.822913Z"
        },
        "amount": 500,
        "vat": 50
      }
    ],
    "discounts": []
  }
}
```

</div>

</div>

## 주문 정산 상품별 추가 수수료 반영

주문 전체가 아닌 특정 상품에대해서 할인 정책영 적용하고 싶으시면 `orderLines` 의 각 상품 항목의
`additionalFees` 파라미터에 전달하시면 됩니다.

### 사전 조건

- A 상품 금액 : 10,000원
- A 상품 갯수 : 2개
- A 추가수수료(로켓배송) : 2,000원
- 결제금액 : 16,000원
- 판매 파트너 : A
- 정산시작일 (결제완료 시점): 2023-08-11
- 추가 수수료 정책: 수수료율 5%, 부가세 파트너 부담

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_5", # 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
"orderDetail": {
  "orderAmount": 20000, # 주문금액
    "orderLines": [{
      "product": {
        "id": "product_A",
        "name": "A상품",
        "amount": 10000
      },
      "quantity": 2,
      "additionalFees": [{
          "policyId": "fee_1" # 상품별 추가 수수료 정책
          }
        ]
      }
    ]
  },
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransfer_A =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");

async function postPlatformApi(endpoint, payload) {
  const baseURL = "https://api.portone.io/";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `PortOne ${PORTONE_API_SECRET}`,
  };

  try {
    const response = await axios.post(baseURL + endpoint, payload, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

const orderTransferPayload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_5", // 포트원 결제시 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
    orderLines: [
      {
        product: {
          id: "product_A",
          name: "A상품",
          amount: 10000,
        },
        quantity: 2,
        additionalFees: [
          {
            policyId: "fee_1", // 상품별 추가 수수료 정책
          },
        ],
      },
    ],
  },
  settlementStartDate: null, //결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  isForTest: false, // 테스트 정산 여부
};

// Using the function
(async () => {
  const orderTransferA = await postPlatformApi(
    "platform/transfers/order",
    orderTransferPayload,
  );
  console.log(orderTransferA);
})();
```

</div>

</div>

## 포트원 결제가 아닌 주문 정산

`externalPaymentDetail` 에 결제정보를 전달주시면 됩니다. `paymentId` 는 고객사에서 사용한 고유
주문번호를 전달해주시면 됩니다.

### 예시 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_5", # 고객사 주문번호
"orderDetail": {
    "orderAmount": 10000, # 주문금액
  },
"settlementStartDate": None, #결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
"isForTest": false, # 테스트 정산 여부
"externalPaymentDetail": { # 포트원 결제가 아닌 주문 정산시 전달하시면 됩니다.
    "currency": "KRW", # 결제 통화 정보
    "orderName": "테스트 주문",
    "paidAt": "2023-08-11T08:21:01.241Z", # 결제 완료 시점. settlementStartDate을 전달하지 않으실경우 꼭 전달하셔야 됩니다.
    "method": {
      "card": {},
    }
  },
"additionalFees": [ # 주문에 추가수수료 정책들. 여러개를 전달하실 수 있습니다.
  {
    "policyId": "addtional_fee_3", # 추가수수료 정책 아이디
  }
]
}

orderTransfer_A = request.post ('https://api.portone.io/platform/transfers/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransferPayload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_5", // 고객사 주문번호
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  // 결제완료 시점으로 등록을 원하실 경우 전달하지 않으셔도 됩니다.
  settlementStartDate: null,
  isForTest: false, // 테스트 정산 여부
  externalPaymentDetail: {
    // 포트원 아닌 결제건 정보
    currency: "KRW",
    orderName: "테스트 주문",
    paidAt: "2023-08-11T08:21:01.241Z",
    method: {
      card: {},
    },
  },
  additionalFees: [
    // 주문에 추가수수료 정책들
    {
      policyId: "addtional_fee_3", // 추가수수료 정책 아이디
    },
  ],
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function postPlatformApi(endpoint, data) {
  try {
    const response = await axios.post(endpoint, data, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting to API:", error);
    return null;
  }
}

const orderTransferA = postPlatformApi(
  "platform/transfers/order",
  orderTransferPayload,
);
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7QEET738MFFY40NP4V7WW4V",
    "graphqlId": "NjowMUg3UUVFVDczOE1GRlk0ME5QNFY3V1c0Vg==",
    "partner": {
      //파트너 정보 생략
    },
    "status": "IN_PROCESS",
    "settlementDate": "2023-08-31",
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      "settlement": 8350,
      "payment": 10000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 500,
      "additionalFeeVat": 50,
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      //계약 정보 생략
    },
    "payment": {
      "type": "EXTERNAL", //포트원 결제가 아닐경우 결제일 경우 EXTERNAL로 표기됩니다.
      "id": "payment_5",
      "orderName": "테스트 주문",
      "currency": "KRW",
      "method": {
        "type": "CARD"
      },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-08-11",
    "orderLines": [],
    "additionalFees": [
      // 추가수수료 정보 생략
    ],
    "discounts": []
  }
}
```

</div>

</div>

## 정산 시작일을 지정해서 보내는 경우

정산고려를 배달완료, 수강오픈, 이용완료 등의 시점부터 하고 싶으시면 `settlementStartDate` 파라미터에
해당시점을 `YYYY-MM-DD`형식으로 전달하시면 됩니다.

해당 시점이 정해졌을 때 정산 api를 호출하시면 됩니다.

### 예시 코드

#### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
orderTransfer_payload = {
"partnerId": "partnerA", # 파트너 A 파트너 아이디 등록 가정
"paymentId": "payment_6", # 포트원 결제시 가맹점 주문번호 (merchant_uid)
"orderDetail": {
  "orderAmount": 10000, # 주문금액
},
"settlementStartDate": '2023-09-01', # 배송완료 시점 (예시)
"isForTest": false, # 테스트 정산 여부
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

orderTransferResponse =requests.post('https://api.portone.io/platform/transfer/order', headers=headers, json=orderTransfer_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const orderTransfer_payload = {
  partnerId: "partnerA", // 파트너 A 파트너 아이디 등록 가정
  paymentId: "payment_6", // 기존 결제의 고객사 주문번호 (V1 결제 모듈 이용 시 merchant_uid 입력)
  orderDetail: {
    orderAmount: 10000, // 주문금액
  },
  settlementStartDate: "2023-09-01", // 배송완료 시점 (예시)
  isForTest: false, // 테스트 정산 여부
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `PortOne ${PORTONE_API_SECRET}`,
};

async function sendOrderTransfer(data) {
  try {
    const response = await axios.post(
      "https://api.portone.io/platform/transfer/order",
      data,
      {
        headers: headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error sending order transfer:", error);
  }
}
```

</div>

</div>

#### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "transfer": {
    "type": "ORDER",
    "id": "01H7QHWNSNHCT9RF9GYKSKXRBZ",
    "graphqlId": "NjowMUg3UUhXTlNOSENUOVJGOUdZS1NLWFJCWg==",
    "partner": {
      //파트너 정보 생략
    },
    "status": "SCHEDULED", // 정산 시작일이 미래이므로 SCHEDULED 상태로 표기됩니다.
    "settlementDate": "2023-09-27", //설날을 고려하여 그 전 영업일이 됐습니다.
    "settlementCurrency": "KRW",
    "isForTest": false,
    "amount": {
      "settlement": 8900,
      "payment": 10000,
      "order": 10000,
      "platformFee": 1000,
      "platformFeeVat": 100,
      "additionalFee": 0,
      "additionalFeeVat": 0,
      "discount": 0,
      "discountShare": 0
    },
    "contract": {
      // 계약 정보 생약
    },
    "payment": {
      "id": "payment_6",
      "orderName": "string",
      "currency": "KRW",
      "method": { "card": {} },
      "paidAt": "2023-08-11T08:21:01.241Z"
    },
    "settlementStartDate": "2023-09-01",
    "orderLines": [],
    "additionalFees": [],
    "discounts": []
  }
}
```

</div>

</div>


# https://developers.portone.io/platform/ko/usages/partner

---
title: 파트너 예시
description: ''
---

## 샘플 코드

### Request

<div class="tabs-container">

<div class="tabs-content" data-title="Python">

```py
partner_payload = {
"id": "partnerA", # 파트너 아이디
"name": "파이썬 강사", # 파트너 이름 및 사업자명
"email": "admin@portone.io",
"businessRegistrationNumber": "1178178260", #파트너 사업자 등록번호. 필수는 아닙니다
"account": {
  "bank": "SHINHAN", # 파트너 계좌 은행. 국내 은행일경우 영문 대문자로 보내줘야 하며 이에대한 enum 값을 api문서에서 확인 가능합니다.
  "currency": "KRW", # 계좌 입금 통화
  "number": "10358907249", # 계좌 번호
  "holder": "김포트" # 예금주
},
"defaultContractId": "contractA", # 해당 파트너에게 적용하길 원하는 대표계약
"memo": "파트너 테스트 생성",
"tags": [
  "파이썬"
]
}

headers = {
'Authorization': f'PortOne ${PORTONE_API_SECRET}',
'Content-Type': 'application/json'
}

partner_A = requests.post('https://api.portone.io/platform/partners/', headers=headers, json=partner_payload)
```

</div>

<div class="tabs-content" data-title="Node">

```js
const axios = require("axios");
const partnerPayload = {
  id: "partnerA", // 파트너 아이디
  name: "파이썬 강사", // 파트너 이름 및 사업자명
  email: "admin@portone.io",
  businessRegistrationNumber: "1178178260", // 파트너 사업자 등록번호. 필수는 아닙니다
  account: {
    bank: "SHINHAN", // 파트너 계좌 은행. 국내 은행일경우 영문 대문자로 보내줘야 하며 이에 대한 enum 값을 api문서에서 확인 가능합니다.
    currency: "KRW", // 계좌 입금 통화
    number: "10358907249", // 계좌 번호
    holder: "김포트", // 예금주
  },
  defaultContractId: "contractA", // 해당 파트너에게 적용하길 원하는 대표계약
  memo: "파트너 테스트 생성",
  tags: ["파이썬"],
};

axios
  .post("https://api.portone.io/platform/partners", partnerPayload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `PortOne ${PORTONE_API_SECRET}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
```

</div>

</div>

### Response (snippet)

<div class="tabs-container">

<div class="tabs-content" data-title="snippet">

```json
{
  "partner": {
    "id": "partnerA",
    "graphqlId": "NDpwYXJ0bmVyQQ==",
    "name": "파이썬 강사",
    "email": "admin@portone.io",
    "businessRegistrationNumber": "1178178260",
    "account": {
      "bank": "SHINHAN",
      "currency": "KRW",
      "number": "10358907249",
      "holder": "김포트",
      "status": "VERIFIED" // 계좌 인증 상태
    },
    "status": "APPROVED",
    "defaultContractId": "contractA",
    "memo": "파트너 테스트 생성",
    "tags": ["파이썬"],
    "isHidden": false,
    "appliedAt": "2023-08-11T11:19:58.829787Z"
  }
}
```

</div>

</div>


# https://developers.portone.io/release-notes/api-sdk/2023-04-24

---
releasedAt: 2023-04-24T00:00:00.000Z
writtenAt: 2023-04-27T00:00:00.000Z
---

## 수정사항

### ✔️ 비인증 결제에서 웹훅 재전송이 작동하지 않던 오류를 수정했습니다

비인증 결제건의 웹훅 응답이 500으로 전송되는 경우, 1분 간격으로 최대 5회 웹훅이 재전송 됩니다.


# https://developers.portone.io/release-notes/api-sdk/2023-05-08

---
releasedAt: 2023-05-08T00:00:00.000Z
writtenAt: 2023-05-11T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 결제내역 대용량 조회 API를 이용할 수 있습니다

결제내역 대용량 조회 API를 통해 5만건 이상의 결제내역을 한 번에 조회할 수 있습니다. 1회 호출 시
1,000건의 결제내역이 나타나며, 추가 호출을 통해 5만건 이상의 결제내역을 확인할 수 있습니다.

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다. [→ 결제내역 다건조회 API](https://developers.portone.io/api/rest-v2/payment?v=v2#get%20%2Fpayments-by-cursor)

## 기타 수정사항

### ✔️ 네이버페이 구매확정 API 에서 요청인을 설정할 수 있습니다

기존 네이버페이 구매확정 시 admin(store)이 기본값으로 구현되어 있었으나, `/requester` 파라미터를
추가하여 customer 로 구매확정할 수 있습니다.

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다. [→ \[결제형-네이버페이\] 에스크로 주문 확정 API](https://api.iamport.kr/)


# https://developers.portone.io/release-notes/api-sdk/2023-05-12

---
releasedAt: 2023-05-12T00:00:00.000Z
writtenAt: 2023-05-15T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 스마트로의 새로운 결제모듈을 이용할 수 있습니다

기존 결제모듈을 통해 제공되는 결제기능은 제한적이었으나, 이번 업데이트를 통해 이용 가능한 결제기능이
대폭 확대되었습니다. 그럼, 새로운 스마트로 결제모듈의 주요 기능을 바로 소개합니다.

- REST API 를 이용해 연동합니다
- 기존에 발급된 연동키값(MID, 서명, 결제취소 비밀번호)을 그대로 새로운 결제모듈에서 이용할 수 있습니다
- 정기결제를 지원합니다
- 허브형 간편결제를 지원합니다
- KRW, USD 결제를 지원합니다
- 카드사 결제창 다이렉트 호출이 가능합니다
- 에스크로 결제를 지원합니다
- 에스크로 배송 정보를 수정할 수 있습니다
- 면세 금액을 직접 설정할 수 있습니다
- 회전식/고정식 가상계좌를 발급할 수 있습니다

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다. [→ 스마트로 PG 설정하기](https://developers.portone.io/docs/ko/pg/payment-gateway/smartro-v2/readme)


# https://developers.portone.io/release-notes/api-sdk/2023-05-22

---
releasedAt: 2023-05-22T00:00:00.000Z
writtenAt: 2023-05-25T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 페이팔 정기결제를 이용 가능합니다

기존에 해외 정기결제를 연동하기 위해서는 페이먼트월이 유일한 선택지였지만 이번 업데이트를 통해 보다 다양한 선택지를 제공합니다.
그럼, 페이팔 정기결제를 이용하기 위한 주요 절차를 소개합니다.

- 포트원 SDK 1.3.0 부터 빌링키를 발급할 수 있습니다

- 빌링키 발급을 위해서는 포트원의 페이팔 파트너 계정으로 사전에 등록해야 합니다
  - 기존 페이팔 SPB 를 이용 중인 고객은 바로 이용 가능합니다

- 결제창 호출을 위해서는 페이팔 SPB 버튼 렌더링이 필요합니다

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다.
[→ 페이팔 RT 빌링키 발급 연동가이드 바로가기](https://developers.portone.io/docs/ko/pg/payment-gateway/rt)

<br />

### ✔️ 네이버페이(결제형)을 이용 중인 경우, 모바일 결제창이 표시됩니다

네이버페이의 업데이트에 따라, 네이버페이(결제형)을 이용 중인 경우 PC에서 결제창 호출 시 모바일 UI의 결제창이 표시되도록 수정했습니다.
또한 결제창 호출 시, 열린 웹페이지의 전체화면으로 결제창이 표시됩니다.

전체화면이 아닌 팝업으로 결제창을 나타나도록 하기 위해서는 `naverPopupMode` 파라미터 설정이 필요합니다.

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다.
[→ 네이버페이(결제형) 팝업 모드 설정하기](https://developers.portone.io/docs/ko/pg/simple/naver)

<br />

### ✔️ 워드프레스 우커머스를 통해 네이버페이(주문형)을 이용 중인 경우, 구매자의 배송지 변경 사항이 자동 반영됩니다

이번 업데이트를 통해 우커머스에서 배송지 정보를 간편하게 확인할 수 있습니다.

구매자가 배송지 변경 시 주문 건의 \[상세정보] - \[상태] 항목은 ‘배송지 변경’으로 표시되며, \[배송] 항목에서 변경된 배송지를 확인할 수 있습니다.
이와 함께 \[주문 메모]에 변경 내역이 기록됩니다.

본 기능 이용을 위해서는 아임포트 우커머스 플러그인 `2.2.36` 버전으로 업데이트하시기 바랍니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/api-sdk/2023-05-25

---
releasedAt: 2023-05-25T00:00:00.000Z
writtenAt: 2023-05-31T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 우리카드 독자 결제망을 이용할 수 있습니다

우리카드가 독자 결제망을 구축함에 따라 우리카드 결제건의 매입도 우리카드를 통해 실행됩니다.\
이러한 변경은 5월 26일부터 발급되는 모든 우리카드에 적용됩니다.

이번 업데이트를 통해 우리카드 결제창을 다이렉트 호출할 수 있습니다.
우리카드 결제 건에 대해 관리자콘솔에서 결제내역 조회 시, 결제수단에서 바로 '우리카드'로 구별할 수 있으며
API 결제내역 조회 시 카드사 코드번호(금융결제원 표준코드번호) '041' 로 구별할 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2023-06-19

---
releasedAt: 2023-06-19T00:00:00.000Z
writtenAt: 2023-06-21T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ KG이니시스를 통해 애플페이를 이용할 수 있습니다

KG이니시스 간편결제수단으로 애플페이를 이용할 수 있습니다. 이번 업데이트를 통해 포트원은 토스, KCP, KG이니시스, 총 3개 PG사를 통해 애플페이를 지원합니다.

기존에 KG이니시스를 이용 중이라면 결제수단 추가 계약을 통해 애플페이를 연동할 수 있습니다. 하단의 일반
문의 채널을 통해 관련 문의를 남겨주시면 포트원 고객지원팀이 안내드리겠습니다.

### ✔️ 기타 수정사항

- 블루월넛 가상계좌 만료일자가 실제 만료일자로 저장됩니다
- 엑심베이 결제 취소 안내 메일이 결제시 설정된 언어로 발송됩니다
- 페이먼트월 결제대기(pending) 단계에서 결제실패로 웹훅이 발송되던 오류를 수정했습니다
- 카카오페이 이용시 `partner_user_id`를 고객 식별 파라미터로 설정 가능합니다


# https://developers.portone.io/release-notes/api-sdk/2023-07-03

---
releasedAt: 2023-07-03T00:00:00.000Z
writtenAt: 2023-07-05T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ (구)토스페이먼츠 SDK(결제창) 결제 요청 시 아이패드 기기에서 모바일 환경의 결제창이 표시됩니다

iOS13 이후 아이패드 기기에서 결제 요청 시 PC 환경의 결제창이 표시되어 결제가 정상적으로 진행되지
않았습니다. 이번 업데이트를 통해 아이패드에서도 모바일 환경의 결제창이 표시되어 정상적으로 결제를
진행할 수 있습니다.

### ✔️ 헥토파이낸셜 빌링키 발급을 위한 API를 이용할 수 있습니다

기존 헥토파이낸셜의 경우 API를 통한 빌링키 발급 요청 시 결제가 함께 진행되었으나, 이번 업데이트를 통해 결제 없이 빌링키만 독립적으로 발급할 수 있습니다.

본 기능 사용을 위한 자세한 내용은 관련 연동가이드를 확인 바랍니다. [→ 헥토파이낸셜 빌링키 발급 요청하기](https://developers.portone.io/docs/ko/pg/payment-gateway/settle/readme)

## 기타 수정사항

### ✔️ KG모빌리언스를 통해 신용카드 결제를 이용할 수 있습니다

KG모빌리언스와 계약을 통해 새로운 결제수단으로 신용카드를 이용할 수 있습니다. 하단의 일반 문의 채널을 통해 관련 문의를 남겨주시면 포트원 고객지원팀이 안내드리겠습니다.

본 기능 설정을 위한 자세한 내용은 관련 연동가이드를 확인 바랍니다. [→ KG모빌리언스](https://developers.portone.io/docs/ko/pg/payment-gateway/kg)


# https://developers.portone.io/release-notes/api-sdk/2023-07-10

---
releasedAt: 2023-07-10T00:00:00.000Z
writtenAt: 2023-07-12T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ 나이스페이먼츠의 새로운 결제창을 이용할 수 있습니다

포트원을 통해 나이스페이먼츠의 새로운 결제창(이하 ‘(신) 나이스페이먼츠’)을 이용할 수 있습니다. 이번
업데이트를 통해 기존 모듈보다 확장된 결제수단을 제공하며, 모든 간편결제에 대해 허브형과 다이렉트
호출을 지원합니다.

(신) 나이스페이먼츠에서 이용 가능한 간편결제는 다음과 같습니다.

- 카카오페이
- 네이버페이
- 페이코
- 삼성페이
- 11Pay (구.SKPay)
- SSG Pay
- L Pay
- 애플페이

이 외에도 SDK/API 빌링키 발급, 에스크로, API 가상계좌 발급 및 회수, 면세 및 부가세 금액 지정(영세율 포함), 상점분담무이자 등의 기능을 지원합니다.

(신) 나이스페이먼츠 이용시 고려해야 하는 조건들이 있으니 다음 문서를 참고하시기 바랍니다.

[→ (신)나이스페이먼츠 일반결제 연동 유의사항](https://developers.portone.io/docs/ko/pg/payment-gateway/nice-v2/payment-caution)

[→ (신)나이스페이먼츠 비인증결제 연동 유의사항(빌링키 발급 및 API 연동)](https://developers.portone.io/docs/ko/pg/payment-gateway/nice-v2/billing-api-caution)

기존에 나이스페이먼츠를 이용 중이라면 간편결제사와 별도의 계약없이 간단한 신청만으로 간편결제를
이용할 수 있습니다. 하단의 일반 문의 채널을 통해 관련 문의를 남겨주시면 포트원 고객지원팀이
안내드리겠습니다.


# https://developers.portone.io/release-notes/api-sdk/2023-07-17

---
releasedAt: 2023-07-17T00:00:00.000Z
writtenAt: 2023-07-19T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ KCP를 통해 PC환경에서 애플페이 허브형과 다이렉트형을 이용할수 있습니다

기존에 KCP를 통해 애플페이를 이용하기 위해서는 모바일 환경에서만 가능했지만,
이번 업데이트를 통해 PC환경에서 애플페이 허브형과 다이렉트형을 모두 지원합니다.

### **결제 모듈 V1**✔️ PG MID 복수조회 API (`GET /users/pg`) 호출시 `channel_name`과 `channel_key`를&#xA;받아볼 수 있습니다

API를 통해 PG 설정 정보 호출시 channel\_name과 channel\_key 응답을 받아볼 수 있습니다.

본 기능 설정을 위한 자세한 내용은 관련 API 문서를 확인 바랍니다.
[→ PG MID 복수조회 API 호출하기](https://developers.portone.io/docs/ko/api/miscellaneous-api/pg/pg-mid-api)

<br />

## 기타 수정사항

### **결제 모듈 V1**✔️ 네이버페이 웹훅 수신 시점에 거래 취소시 콜백을 수신합니다

웹훅 우선순위 설정 후 네이버페이 결제시, 웹훅 수신 포인트에서 결제상태가 결제취소여도 콜백을 수신합니다.

### **결제 모듈 V1**✔️ 페이먼트월 취소 요청 시점에 고객사 웹훅을 호출하지 않습니다

기존에는 결제 취소 요청시 즉시 결제상태가 변경되는 웹훅이 전송되어 잘못된 결제상태를 수신하는 문제가 있었으나,
이번 업데이트를 통해 페이먼트월 결제 취소 요청시 콜백을 수신하는 시점에 결제상태를 결제취소로 변경합니다.


# https://developers.portone.io/release-notes/api-sdk/2023-07-31

---
releasedAt: 2023-07-31T00:00:00.000Z
writtenAt: 2023-07-31T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ KCP 결제창 내 할인쿠폰 적용 여부 파라미터 기능 추가

KCP 인증결제창에서 할인쿠폰 적용 여부를 컨트롤 할수 있는 파라미터가 추가되었습니다.
할인쿠폰기능을 사용하기 위해서는 KCP와 협의가 먼저 선행되어야 하는점 유의하세요

본 기능 설정을 위한 자세한 내용은 SDK 가이드 문서를 확인 해주세요
[→ KCP SDK 연동가이드 확인하기](https://developers.portone.io/docs/ko/pg/payment-gateway/nhn-kcp#4-%EA%B8%B0%ED%83%80-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0)


# https://developers.portone.io/release-notes/api-sdk/2023-08-31

---
releasedAt: 2023-09-01T00:00:00.000Z
writtenAt: 2023-09-01T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ 엑심베이 브라우저 팝업 차단 해제 문구 default 언어를 영문으로 변경

엑심베이는 해외결제를 지원하는 PG사이기에 글로벌 언어인 영어로
팝업차단 해제 문구가 고객에게 안내되도록 변경하였습니다.

### **결제 모듈 V1**✔️ NHN KCP 빌링키 발급 시 주민등록입력/생년월일 파라미터로 노출 여부

NHN KCP결제창을 통한 빌링키 발급시 파라미터를 통해 빌링키 발급을 위한 정보입력 과정에서 필요한 항목중 개인정보에 해당되는 주민등록번호/생년월일 항목을
선택할수 있도록 하였습니다.

본 기능 설정을 위한 자세한 내용은 SDK 가이드 문서를 확인 해주세요
[→ KCP SDK 연동가이드 확인하기](https://developers.portone.io/docs/ko/pg/payment-gateway/nhn-kcp#4-%EA%B8%B0%ED%83%80-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0)

### **결제 모듈 V1**✔️ 결제 URL 생성 API 지원 PG사 확대

이번 업데이트를 통해 아래 PG사도 결제 URL 생성 API를 통해 결제를 발생시킬수 있게되었습니다.

- (신)토스페이먼츠
- (신)스마트로
- KSNET
- (신)페이팔 일반결제/정기결제
- (신)나이스페이먼츠


# https://developers.portone.io/release-notes/api-sdk/2023-12-15

---
releasedAt: 2023-12-15T00:00:00.000Z
writtenAt: 2023-12-15T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ (신) 토스페이먼츠 SDK(결제창) 빌링키 발급 시 결제창 백그라운드 변경

기존에는 토스페이먼츠 결제창의 백그라운드가 모서리 부분에만 표시되었으나 결제창 호출 시 전체 백그라운드를 동일한 색상으로 처리하여 깔끔하게 표시되도록 하였습니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/api-sdk/2024-01-08

---
releasedAt: 2024-01-08T00:00:00.000Z
writtenAt: 2024-01-08T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 신모듈에서 나이스페이먼츠 결제를 지원합니다.

이제 포트원 V2를 통해 나이스페이먼츠 일반결제/정기결제가 가능합니다. 이번 업데이트를 통해 다양한 결제수단을 제공하며, 모든 간편결제에 대해 허브형과 다이렉트 호출을 지원합니다.

나이스페이먼츠에서 지원하는 결제수단 아래와 같습니다.

- 카드

- 실시간 계좌이체

- 가상계좌 (회전식/고정식)

- 휴대폰 소액결제

- 상품권 (컬쳐랜드)

- 간편결제 (허브형/다이렉트)
  - 카카오페이
  - 네이버페이
  - 페이코
  - 삼성페이
  - 애플페이
  - 11Pay (구.SKPay)
  - SSGPay
  - LPay

이 외에도 SDK/API 빌링키 발급, 에스크로, API 가상계좌 발급 및 말소, 면세 및 부가세 금액 지정(영세율 포함), 상점분담무이자 등의 기능을 지원합니다.

나이스페이먼츠 연동에 대해 자세히 알고 싶다면 [→ 나이스페이먼츠 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/nice-v2?v=v2) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-01-11

---
releasedAt: 2024-01-11T00:00:00.000Z
writtenAt: 2024-01-11T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ 토스페이 정기결제 이용이 가능합니다.

기존에는 토스페이 일반결제만 지원하였으나 이번 업데이트를 통해 토스페이 일반결제와 정기결제를
이용하실 수 있습니다. 그럼, 토스페이 정기결제를 이용하기 위한 주요 절차를 소개합니다.

- 포트원 SDK 1.3.0 부터 빌링키 발급 및 정기결제를 사용할 수 있습니다.
- 토스페이 일반결제 / 정기결제를 사용하시려면 (신)토스페이(tosspay\_v2)로 연동해야 합니다.
- (신)토스페이 결제 시 카드결제, 계좌결제를 지정할 수 있습니다.

(신)토스페이 연동에 대해 자세히 알고 싶다면
[→ (신)토스페이 연동가이드](https://developers.portone.io/docs/ko/pg/simple/tosspay-v2/readme?v=v1) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-01-25

---
releasedAt: 2024-01-24T00:00:00.000Z
writtenAt: 2024-01-25T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ 네이버페이 결제형에서 10원부터 결제할 수 있습니다.

네이버페이 결제형의 기존 최소주문금액 100원이었으나, 10원으로 수정되었습니다.

### **관리자 콘솔**✔️ 가상계좌 발급취소/말소 API를 이용하여 가상계좌를 말소한 경우 결제실패로&#xA;분류되어 표시됩니다.

가상계좌 발급 후 입금 전에 API를 이용해 가상계좌를 말소한 경우, 관리자콘솔 \[결제 상세 내역 조회]에서
결제실패로 분류됩니다. 가상계좌 말소 건은 엑셀 다운로드시 실패 상세 항목에 **계좌말소**로 표시되어
구분할 수 있습니다.

### **관리자 콘솔**✔️ 엑셀 내의 `PG계정` 컬럼명이 `PG상점아이디(MID)` 로 변경되었습니다.

\[결제 상세 내역 조회]에서 엑셀 다운로드시 기존에 PG계정으로 표시되던 컬럼명이 **PG상점아이디(MID)** 로 표시됩니다.

<br />

## 기타 수정사항

### **결제 모듈 V1**✔️ Microsoft Edge 브라우저에서 adblock extension과 충돌하는 현상이 수정되었습니다.

Microsoft Edge 브라우저 환경에서 결제 모듈 호출 시 adblock extension과 충돌을 일으켜 결제창이
정상적으로 호출되지 않는 현상이 간헐적으로 발생하였으나 현재는 수정되어 정상적으로 호출이
가능합니다.

### **결제 모듈 V1**✔️ (신) 페이팔 결제 요청 시 컨텐츠 상품인 경우 배송지 입력란이 표시되지 않습니다.

기존에는 디지털 상품인 경우에도 배송지 입력란이 표시되었으나 결제 요청 시 `digital:true`로
입력한 경우 청구주소로 배송 체크박스 및 상세 주소 입력 칸이 표시되지 않습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-01-30

---
releasedAt: 2024-01-31T00:00:00.000Z
writtenAt: 2024-02-01T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ easyPay.easyPayProvider(간편결제수단) 파라미터에 대한 동작이 변경되었습니다.

기존에는 토스페이먼츠 결제창(SDK) 결제 요청 시 `payMethod:EASY_PAY` 입력 후
`easyPay.easyPayProvider` 파라미터를 입력하지 않은 경우 통합결제창이 호출되었으나,
`payMethod:EASY_PAY` 입력 후 `easyPay.easyPayProvider` 파라미터를 입력하지 않은 경우 **에러를
리턴**합니다.

따라서, 통합결제창 호출을 원하시는 경우 `payMehtod:CARD` 로 변경하여 호출하시고, 간편결제 다이렉트
호출을 원하시는 경우 `payMethod:EASY_PAY`로 입력하신 후 `easyPayProvider`를 입력하여 호출하시기
바랍니다.

(빌링키 발급 및 정기결제를 사용하시는 경우 위의 변경으로 인한 영향을 받지 않습니다.)


# https://developers.portone.io/release-notes/api-sdk/2024-02-23

---
releasedAt: 2024-02-23T00:00:00.000Z
writtenAt: 2024-02-26T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 신모듈에서 페이팔 결제를 지원합니다.

이제 포트원 V2를 통해 페이팔 일반결제 및 정기결제를 이용할 수 있습니다. 포트원에서는 페이팔
일반결제는 SPB(Smart Payment Button) 방식으로, 정기결제는 RT(Reference Transaction) 방식으로
제공합니다.

페이팔 연동에 대해 자세히 알고 싶다면 [→ 페이팔 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/paypal-v2?v=v2) 에서 확인하실 수 있습니다.

### **결제 모듈 V1**✔️ 결제 취소 시 발송되는 웹훅에 취소내역 아이디 (`cancellation_id`)가 포함됩니다.

기존에는 웹훅 발송 시 결제번호(`imp_uid`), 주문번호(`merchant_uid`), 결제 결과(`status`) 정보만
전달하였으나, 이제 취소내역 아이디(`cancellation_id`)도 포함하여 전달됩니다.

### **결제 모듈 V1**✔️ Schedule API의 `checking_amount` 파라미터 입력시 `currency`가 `KRW`로 자동 입력됩니다.

기존에는 `checking_amount` 파라미터를 사용할 때, 직접 `currency` 파라미터를 입력해야 정상적으로 결제 및 취소 처리가 가능했습니다.

이번 업데이트에서는 고객 편의성을 높이고자 자동으로 `currency` 파라미터가 `KRW`로 적용되도록 변경했습니다.
따라서 해외 통화 결제를 이용하는 경우 반드시 `currency` 파라미터에 해당 국가 통화를 입력하여 이용하시기 바랍니다.


# https://developers.portone.io/release-notes/api-sdk/2024-03-08

---
releasedAt: 2024-03-08T00:00:00.000Z
writtenAt: 2024-03-11T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 신모듈에서 스마트로 API 정기결제를 지원합니다.

이제 포트원 V2를 통해 스마트로에서도 API를 이용하여 빌링키를 발급할 수 있습니다.

스마트로 API 빌링키 발급에 대해 자세히 알고싶다면 [→ 스마트로 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/smartro-v2?v=v2) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-03-15

---
releasedAt: 2024-03-15T00:00:00.000Z
writtenAt: 2024-03-18T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ 결제 요청 시 파라미터 유효성 검증이 추가되었습니다.

결제 요청 시 필수 파라미터인 `amount`와 `merchant_uid`에 대한 유효성 검증 로직이 추가되었습니다.
`amount`는 number 형식으로, `merchant_uid`는 string 형식으로 요청해야 합니다.
형식이 올바르지 않는 경우 에러가 리턴되며 결제창 호출이 실패하니 유의하시기 바랍니다.

### **결제 모듈 V1****결제 모듈 V2**✔️ 토스페이먼츠(신모듈) 간편결제를 IFRAME으로 이용할 수 있습니다.

토스페이먼츠를 통해 카카오페이, 페이코, 삼성페이, Lpay, 토스페이 호출 시 기존에는 POPUP 방식으로 호출되었으나
이번 업데이트를 통해 IFRAME으로 이용 가능하여 간편결제 창을 닫은 후에도 정상적으로 실패응답을 확인할 수 있습니다.

<br />

## 기타 수정사항

### **결제 모듈 V1**✔️ 엑심베이 결제 취소시 호출되는 API 버전이 업그레이드 되었습니다.

기존에 포트원이 제공하던 알리페이가 알리페이 플러스로 변경됨에 따라 결제 취소시 호출되는 API 버전이 업그레이드 되었습니다.
결제 취소의 경우 기존과 동일한 방법으로 이용할 수 있습니다.

### **결제 모듈 V2**✔️ 모바일 환경에서 웰컴페이먼츠를 통해 가상계좌 결제 요청시 입금 기한을 설정할 수 있습니다.

기존에는 모바일 환경에서 웰컴페이먼츠를 통해 가상계좌 결제 요청시 입금 기한 설정이 불가능했으나, 이제 입금 기한 파라미터에 입력된 날짜로 설정할 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-03-25

---
releasedAt: 2024-03-25T00:00:00.000Z
writtenAt: 2024-03-25T00:00:00.000Z
---

## 주요 업데이트 사항

### **관리자 콘솔**✔️ 결제 연동 페이지가 새롭게 단장했습니다.

- **\[채널 관리]**
  - 기존 연동 관리와 달리 채널 추가 시 결제 모듈 별 지원되는 기능 및 결제 수단 정보를 쉽게 확인할 수 있습니다.
  (관련 이미지 첨부)
  - 자세한 채널 추가 방법은 가이드를 참고해 주세요. [→ 포트원 V1 채널 연동 가이드 바로가기](../../../../docs/ko/ready/readme)

- **\[식별코드·API Keys]**
  - V2 API Secret을 발급할 수 있습니다.
  - V2 API Secret의 경우 유효기간에 따라 갯수에 제한없이 발급이 가능합니다.
  (관련 이미지 첨부)

- **\[결제알림(Webhook) 관리]**
  - 포트원 V2 결제모듈에서 사용하는 웹훅 데이터 형식으로도 테스트할 수 있습니다.
  - 포트원 V1/V2 결제 모듈 모두 테스트/실환경에 대해 웹훅을 각각 설정할 수 있습니다.
  (관련 이미지 첨부)


# https://developers.portone.io/release-notes/api-sdk/2024-04-01

---
releasedAt: 2024-03-29T00:00:00.000Z
writtenAt: 2024-04-04T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 신모듈에서 KG이니시스 결제를 지원합니다.

이제 포트원 V2를 통해 KG이니시스 일반결제 및 정기결제가 가능합니다. 이번 업데이트를 통해 다양한 결제수단을 제공하며, 모든 간편결제에 대해 허브형과 다이렉트 호출을 지원합니다.

KG이니시스에서 지원하는 결제수단 아래와 같습니다.

- 카드

- 실시간 계좌이체

- 가상계좌 (회전식/고정식)

- 휴대폰 소액결제

- 상품권 (컬쳐랜드/스마트문상/해피머니/도서문화상품권)

- 간편결제 (허브형/다이렉트)
  - 카카오페이
  - 네이버페이
  - 페이코
  - 삼성페이
  - 애플페이
  - 토스페이
  - SSGPay
  - LPay

이 외에도 SDK/API 빌링키 발급, 에스크로, API 가상계좌 발급 및 말소, 면세 및 부가세 금액 지정, 상점분담무이자,
하위 사업자 정보로 현금영수증 발급 등의 기능을 지원합니다.

KG이니시스 연동에 대해 자세히 알고 싶다면 [→ KG이니시스 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/inicis-v2?v=v2) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-04-05

---
releasedAt: 2024-04-03T00:00:00.000Z
writtenAt: 2024-04-04T00:00:00.000Z
---

## 기타 수정사항

### **관리자 콘솔**✔️ 결제 내역 엑셀 내의 카드유형 정보가 추가되었습니다.

\[결제 상세 내역 조회]에서 엑셀 다운로드시 신용카드, 체크카드, 기프트카드에 대한 정보가 표시됩니다.


# https://developers.portone.io/release-notes/api-sdk/2024-04-12

---
releasedAt: 2024-04-12T00:00:00.000Z
writtenAt: 2024-04-12T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 신모듈에서 한국결제네트웍스(KPN) 결제를 지원합니다.

이제 포트원 V2를 통해 한국결제네트웍스 일반결제 및 정기결제가 가능합니다. 이번 업데이트를 통해 다양한 결제수단을 제공하며,
일부 간편결제에 대해 허브형과 다이렉트 호출을 지원합니다.

한국결제네트웍스에서 지원하는 결제수단은 아래와 같습니다.

- 카드

- 실시간 계좌이체

- 가상계좌 (회전식)

- 휴대폰 소액결제

- 간편결제 (허브형/다이렉트)
  - 카카오페이
  - 네이버페이 (다이렉트 호출 불가)
  - 페이코
  - 삼성페이
  - 토스페이

이 외에도 SDK/API 빌링키 발급, 에스크로, API 가상계좌 발급 및 말소, 면세 금액 지정, 상점분담무이자 등의 기능을 지원합니다.

한국결제네트웍스 연동에 대해 자세히 알고 싶다면 [→ 한국결제네트웍스 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/kpn?v=v2) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-05-08

---
releasedAt: 2024-05-08T00:00:00.000Z
writtenAt: 2024-05-08T00:00:00.000Z
---

## 주요 업데이트 사항

### **관리자 콘솔**✔️ 빌링결제 내역조회 페이지가 새롭게 오픈했습니다.

새로운 빌링결제 내역 조회 페이지에서는 빌링키 결제 및 결제 예약건에 대해 한 번에 조회 및 관리할 수 있습니다.

- **\[상세 내역 조회]**

  - 빌링키 결제 내역을 상태별로 조회할 수 있습니다.

  - 콘솔 화면에서 결제 예약일 변경, 예약 해지, 결제 즉시 재시도, 결제 재예약을 할 수 있습니다.

  - 리커버리 기능을 설정하여 결제 실패 건에 대한 일괄 재시도를 자동화할 수 있습니다.
    - 포트원 V1 결제 서비스의 경우 결제예약 API(Schedule API)를 이용한 결제 예약 건 중 결제 실패 상태인
      거래 건에 한하여 리커버리 기능을 사용할 수 있습니다. 비 인증 결제(빌링키) API(Again API) 건에 대한
      리커버리 기능은 상반기 내로 업데이트될 예정입니다.

    - 포트원 V2 결제 서비스의 경우 빌링키 결제 API 및 결제 예약 API를 이용한 결제 건 중 결제 실패
      상태인 거래 건에 한하여 리커버리 기능을 사용할 수 있습니다.

  (관련 이미지 첨부)

- **\[빌링결제 캘린더]**

  - 빌링결제 건에 대한 월간/일간 데이터를 확인할 수 있습니다.

  (관련 이미지 첨부)

  - 자세한 내용은 가이드를 참고해 주세요. [→ 포트원 빌링결제 내역 가이드 바로가기](../../../../docs/ko/console/guide/billing-payments)


# https://developers.portone.io/release-notes/api-sdk/2024-05-14

---
releasedAt: 2024-05-14T00:00:00.000Z
writtenAt: 2024-05-17T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ KSNET을 통한 카드사 다이렉트 기능을 지원합니다.

이제 포트원 V1의 KSNET을 통해 카드사 다이렉트 결제가 가능합니다. 이번 업데이트를 통해 카드사 결제창을
바로 호출하여 사용하세요.

KSNET 카드사 다이렉트 연동에 대해 자세히 알고 싶다면
[→ KSNET 연동가이드](https://developers.portone.io/docs/ko/pg/payment-gateway/ksnet/readme?v=v1#%EC%B9%B4%EB%93%9C%EC%82%AC-%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8A%B8-%ED%98%B8%EC%B6%9C)
에서 확인하실 수 있습니다.

(\* 포트원 V2 결제 모듈의 경우 추후에 KSNET을 통한 카드사 다이렉트 기능이 지원될 예정입니다.)


# https://developers.portone.io/release-notes/api-sdk/2024-06-03

---
releasedAt: 2024-06-03T00:00:00.000Z
writtenAt: 2024-06-03T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 스마트 라우팅 기능이 새롭게 출시되었습니다.

포트원 V2에서 스마트 라우팅 기능을 제공합니다.

(관련 이미지 첨부)

### 스마트 라우팅이란?

스마트 라우팅은 원클릭 결제 트래픽 자동 분산 서비스로 최초 연동 이후 포트원 관리자콘솔 내에서
결제대행사 추가/삭제 및 결제대행사 별 결제 요청 비율을 설정할 수 있습니다.
노코드 방식으로 고객사에서 멀티 PG 인프라를 구성하는데 필요한 개발 리소스를 확 줄였습니다.

**지원 범위**

- 결제창(SDK) 인증결제
- API 수기(키인) 결제
- API 빌링키 발급 및 빌링키결제/예약결제

**지원 기능**

1. 스마트 라우팅 그룹 설정에 따른 결제 트래픽 분산 자동화
2. 슈퍼빌링키 발급

- 스마트 라우팅 그룹 내 모든 결제대행사에 대해 빌링키 발급 요청 및 저장

**지원 결제대행사**

- 나이스페이먼츠
- KG이니시스
- 토스페이먼츠
- 스마트로
- KSNET
- KPN
- NHN KCP (6월 중 제공 예정)

이번 업데이트를 통해 스마트 라우팅 그룹을 생성하고 자동화된 결제 트래픽 분산 서비스를 경험해보세요.

스마트 라우팅에 대해 자세히 알고 싶다면
[→ 스마트 라우팅 소개](https://developers.portone.io/opi/ko/extra/smart-routing/intro) 및
[→ 스마트 라우팅 연동하기](https://developers.portone.io/opi/ko/extra/smart-routing/integration)
문서에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-06-17

---
releasedAt: 2024-06-17T00:00:00.000Z
writtenAt: 2024-06-17T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 결제모듈에서 NHN KCP 결제를 지원합니다.

이제 포트원 V2를 통해 NHN KCP 일반결제 및 정기결제가 가능합니다. 이번 업데이트를 통해 다양한 결제수단을 제공하며,
일부 간편결제에 대해 허브형과 다이렉트 호출을 지원합니다.

NHN KCP에서 지원하는 결제수단은 아래와 같습니다.

- 카드

- 실시간 계좌이체

- 가상계좌

- 휴대폰 소액결제

- 상품권 결제(컬쳐랜드/해피머니/도서문화상품권)

- 간편결제 (허브형/다이렉트)
  - 카카오페이
  - 네이버페이
  - 페이코
  - SSG페이
  - L페이
  - 삼성페이
  - 애플페이
  - 토스페이

이 외에도 SDK/API 빌링키 발급, 에스크로, API 가상계좌 발급, 면세 금액 지정, 상점분담무이자 등의 기능을 지원합니다.

NHN KCP 연동에 대해 자세히 알고 싶다면 [→ NHN KCP 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/kcp-v2?v=v2) 에서 확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-06-19

---
releasedAt: 2024-06-19T00:00:00.000Z
writtenAt: 2024-06-19T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 결제모듈에서 토스페이 결제 직연동을 지원합니다.

이제 포트원 V2를 통해 토스페이 직연동이 가능합니다. 이번 업데이트를 통해 일반결제 및 정기결제를 지원합니다.

토스페이에서 지원하는 결제수단은 아래와 같습니다.

- 카드
- 계좌
- 토스머니

토스페이 연동에 대해 자세히 알고 싶다면 [→ 토스페이 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/tosspay-v2?v=v2) 에서 확인하실 수 있습니다.

### **결제 모듈 V2**✔️ 웹훅 신버전이 추가되었습니다.

V2 결제모듈을 이용하시는 경우 빌링키 발급 관련 웹훅을 받아보실 수 있습니다.
웹훅을 연동하여 이벤트 발생 시 결제 건의 상태를 동기화할 수 있습니다.

웹훅 버전에 대한 자세한 내용은 [웹훅 연동하기](https://developers.portone.io/docs/ko/v2-payment/webhook?v=v2#웹훅-버전에-따른-스키마-안내)에서 확인하실 수 있습니다.

### **결제 모듈 V2**✔️ 웹훅 시크릿 기능이 추가되었습니다.

V2 결제모듈을 이용하시는 경우 웹훅 시크릿을 사용하여 포트원이 생성한 웹훅 요청인지 출처를 확인할 수 있으며,
악의적인 공격자가 보낸 웹훅 요청을 차단할 수 있습니다.

웹훅 시크릿에 대한 자세한 내용은 [웹훅 연동하기](https://developers.portone.io/docs/ko/v2-payment/webhook?v=v2#웹훅-요청-검증하기)에서 확인하실 수 있습니다.

## 기타 업데이트 사항

### **결제 모듈 V1**✔️ KG이니시스 통합인증 시 보안성이 강화되었습니다.

이제 포트원을 통한 KG이니시스 통합인증 이용시 민감정보를 암호화하여 처리할 수 있습니다.
고객사에서는 별도로 추가 대응 없이 바로 적용되어 사용하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-06-20

---
releasedAt: 2024-06-27T00:00:00.000Z
writtenAt: 2024-07-01T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1****결제 모듈 V2**✔️ 빌링키 다건조회 API가 추가되었습니다.

이제 포트원을 통해 발급된 빌링키를 한 번에 조회할 수 있습니다.

빌링키 다건조회 API에 대한 자세한 내용은 [빌링키 다건조회 API](https://developers.portone.io/api/rest-v2/billingKey#get%20%2Fbilling-keys)에서
확인하실 수 있습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-07-04

---
releasedAt: 2024-07-05T00:00:00.000Z
writtenAt: 2024-07-08T00:00:00.000Z
---

## 기타 업데이트 사항

### **결제 모듈 V1**✔️ 엑심베이 Econtext 결제 시 일부 건에 대한 결제 상태 처리 로직이 변경되었습니다.

결제 승인이 완료된 경우 브라우저 새로고침 등의 이유로 결제 프로세스가 비정상적으로 종료된 경우에도
결제 상태가 `결제 완료`로 유지됩니다.

### **결제 모듈 V1**✔️ 엑심베이 결제 시 금액 위변조가 발생하는 경우 결제 취소 처리되도록 변경되었습니다.

승인 결과 처리 단계에서 결제 요청 당시 결제 금액과 승인 결제 금액이 다른 경우 자동으로 결제 취소 됩니다.


# https://developers.portone.io/release-notes/api-sdk/2024-07-11

---
releasedAt: 2024-07-10T00:00:00.000Z
writtenAt: 2024-07-10T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V1**✔️ KG이니시스 통합인증 결과 중 성별 정보를 확인할 수 있습니다.

이제 KG이니시스 통합인증을 통해 인증 시 응답에 성별 정보가 포함되며, 인증 후 내역 조회 시 응답 필드에도
성별 정보가 포함됩니다.

성별 정보를 활용하시려면 이전 인증 내역의 경우 Null로 응답됩니다.

### **결제 모듈 V2**✔️ 한국결제네트웍스(KPN)을 통한 카드 다이렉트 결제가 지원됩니다.

이제 한국결제네트웍스(KPN)을 이용하시는 고객사에서도 아래 지원되는 카드사에 한하여 카드 다이렉트
결제를 이용하실 수 있습니다.

**지원 카드 목록**

- BC카드
- 신한카드
- 삼성카드
- 현대카드
- 롯데카드
- KB국민카드
- NH농협카드
- 씨티카드
- 우리카드
- 하나카드
- 우체국은행카드
- 카카오뱅크카드
- 케이뱅크카드
- 신협카드
- KDB산업은행
- 저축은행카드
- 새마을금고카드

KPN 카드 다이렉트에 대한 자세한 내용은 [KPN 연동가이드](https://developers.portone.io/docs/ko/v2-payment/pg/kpn)에서 확인하실 수 있습니다.

## 기타 업데이트 사항

### **결제 모듈 V2**✔️ redirectUrl 파라미터 입력 형식 유효성 검증 기준이 완화되었습니다.

기존에는 http 또는 https 프로토콜인 경우에만 입력 가능하였으나, 이제 다른 프로토콜로 입력한 경우에도
정상적으로 결제 요청이 가능하도록 유효성 검증 기준을 완화하였습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-09-05

---
releasedAt: 2024-09-05T00:00:00.000Z
writtenAt: 2024-09-05T00:00:00.000Z
---

## 주요 업데이트 사항

### **결제 모듈 V2**✔️ 포트원 V2 결제모듈에서 KG이니시스 통합인증을 지원합니다.

이제 포트원 V2를 통해 KG이니시스 통합인증이 가능합니다.
이번 업데이트를 통해 통신사PASS, 토스 인증서, 카카오 인증서, 네이버 인증서 등 민간인증서를 이용하여
본인인증을 진행할 수 있습니다.

통합인증에서 지원하는 인증수단은 아래와 같습니다.

- 통신사PASS
- 토스
- 카카오
- 네이버
- 페이코
- 금융결제원
- KB국민은행
- 신한은행
- 하나은행
- 우리은행
- IBK기업은행
- NH농협은행
- 카카오뱅크
- 삼성패스

KG이니시스 통합인증 연동에 대해 자세히 알고 싶다면 [→ KG이니시스 통합인증 연동가이드](https://developers.portone.io/opi/ko/integration/pg/v2/inicis-unified-identity-verification?v=v2) 에서 확인하실 수 있습니다.

### **결제 모듈 V1**✔️ 포트원 V1 결제모듈에서 KCP 간편결제 다이렉트 호출 결제 이용시 해당 거래건에 결제수단 정보를 표시하는 방식이 일부 변경되었습니다.

KCP 간편결제 다이렉트 호출 결제의 경우 기존에 결제수단(`pay_method`)이 `naverpay`, `payco`, `kakaopay와` 같은
간편결제사로 분류하는 코드였으나 9월 2일 거래건부터 결제 승인 시 결제수단에 따라 `point` 혹은 `card`로 표시되도록 변경되었습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-09-27

---
releasedAt: 2024-09-27T00:00:00.000Z
writtenAt: 2024-09-30T00:00:00.000Z
---

## 주요 업데이트 사항

### **PG 거래대사**✔️ 이제 콘솔 내 PG 거래대사에서 조회한 데이터를 엑셀로 다운로드하여 사용해 보세요.

(관련 이미지 첨부)

PG 거래대사 내의 **거래 정산 내역** 메뉴에서 정산일 또는 거래일을 기준으로,
**거래 건별 조회** 메뉴에서는 정산일을 기준으로 최대 3개월 분량의 데이터를 엑셀로 다운로드할 수 있습니다.

### **PG 거래대사**✔️ KSNET, KPN, 하이픈에서 발생한 거래 건도 PG 거래대사에서 데이터 확인이 가능해집니다.

기존에 12개 PG사 (KCP, KG이니시스, 나이스페이먼츠, 토스페이, 네이버페이, 다날, 페이코, (구)토스페이먼츠,
토스페이먼츠, 카카오페이, 엑심베이, 헥토파이낸셜) 에서만 지원하던 **PG 거래대사**가 KSNET, KPN, 하이픈까지 확장하여
총 15개 PG사 데이터에 한하여 제공됩니다.

(참고 : PG 거래대사 메뉴의 경우 클로즈 베타로 운영되고 있으며,
사용을 원하시는 고객께서는 [PG거래대사 베타서비스 신청 바로가기](https://forms.gle/cZAqJLGqovC1STrS8)에서 신청해 주시길 바랍니다.)

### **결제 모듈 V1**✔️ 엑심베이 결제시 결제 금액 위변조 확인이 강화됩니다.

기존에는 엑심베이로부터 전달받은 값 자체에 위변조 내용이 있는지 hash만 검증했으나
앞으로는 hash 검증에 추가로 실제 결제금액까지 비교하여 금액을 위변조하여 결제가 승인되지 않도록 로직을 추가하였습니다.


# https://developers.portone.io/release-notes/api-sdk/2024-12-19

---
releasedAt: 2024-12-19T00:00:00.000Z
writtenAt: 2024-12-12T00:00:00.000Z
---

안녕하세요 원 페이먼트 인프라팀입니다.

24년 12월 19일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 아래 3가지 개선으로 보다 좋은 사용성을 제공합니다.

1. 통합 결제 내역 - 상점별 내역 조회 기능이 추가되었습니다.
2. 통합 결제 내역 - 일괄 웹훅 재전송 기능이 추가되었습니다.
3. 통합 결제 내역 - 필터 사용성을 개선하였습니다.

### **관리자 콘솔**

## 주요 업데이트 사항

### ✔️ 통합 결제 내역 - 상점별 내역 조회

- **상점별 내역 조회**
  - 전체 또는 하위 상점별로 나누어 통합 결제 내역을 확인할 수 있습니다.

이를 통해, 기존에 전체 내역에서 수동으로 분류해서 확인해야 하는 번거로움을 대폭 줄이고 쉽게 상점별로 결제 내역을 조회할 수 있게 되었습니다.

(관련 이미지 첨부)

### ✔️ 통합 결제 내역 - 일괄 웹훅 재전송

- **웹훅 일괄 재전송**
  - 웹훅 수신에 실패한 결제 건들에 대해 일괄로 웹훅을 재전송할 수 있도록 기능이 추가되었습니다.
  - 조회된 기간 내에 웹훅 수신에 실패한 결제 건 수를 한 번에 파악할 수 있습니다.

- **상점별 구분 발송**
  - 전체 또는 하위 상점별로 나누어 웹훅 일괄 재전송 기능을 사용할 수 있습니다.

이를 통해, 기존에 웹훅 재전송을 개별 건마다 적용하던 불편함을 개선하고 웹훅 재전송을 일괄적으로 빠르게 적용할 수 있게 되었습니다.

(관련 이미지 첨부)

### ✔️ 통합 결제 내역 - 필터 사용성 개선

- **옵션 배열 방식 변경**
  - 선택 항목이 많은 경우, 기존 **horizontal 배열**에서 **vertical 배열**로 변경하여 가독성과 사용성을 개선하였습니다.

- **“전체 선택” 기능 확장**
  - 기존 “전체 선택” 기능이 일괄 적용만 가능했던 점을 개선하여, 각 항목별로도 “전체 선택” 기능을 추가했습니다. 이를 통해 더 세부적으로 선택 및 해제가 가능하도록 했습니다.

이를 통해, 기존에 비해 한눈에 옵션을 확인할 수 있어 선택 과정이 간소화되었고 필요한 옵션만 빠르고 정확하게 설정할 수 있도록 편의성을 향상시켰습니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/api-sdk/2025-01-15

---
releasedAt: 2025-01-15T00:00:00.000Z
writtenAt: 2025-01-15T00:00:00.000Z
---

안녕하세요 원 페이먼트 인프라팀입니다.

25년 1월 15일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 아래 3가지 새로운 기능을 통해 조금 더 편리한 원 페이먼트 인프라를 경험하실 수 있습니다.

1. **PG 거래대사** 메뉴를 이용하실 수 있습니다.
2. **결제 데이터 분석** 메뉴를 이용하실 수 있습니다.
3. **제품 온보딩 가이드** 기능을 이용하실 수 있습니다.

### **관리자 콘솔**

## 주요 업데이트 사항

### ✔️ PG 거래대사 메뉴 가이드

PG 거래대사 메뉴를 통해 아래 2가지의 업무에 쉽게 활용하실 수 있습니다.

- **거래 대사**
  - 거래 정산 내역 - 거래 내역 탭
    - 포트원을 통해 연동된 고객사 주문 데이터와 PG사의 결제 정보를 자동 비교 / 대사하여 거래 이상 건수 및 금액을 쉽게 확인할 수 있습니다.
    - 거래일 기준으로 포트원 거래 데이터와 PG사 거래 데이터를 자동 대사합니다.
    - 다양한 PG사와 결제수단, 통화를 통합하여 일관된 기준으로 거래 및 정산 데이터를 제공합니다.

(관련 이미지 첨부)

- **정산 내역 확인**
  - 거래 정산 내역 - 정산 내역 탭
    - 정산금의 상세 내역을 확인할 수 있는 자료를 제공합니다.
    - 정산일 기준으로 정산 금액이 어떤 거래 데이터들로 이루어져 있는지 쉽게 확인할 수 있습니다.
    - 미래 정산금액 / 일자를 확인하여 현금 흐름 예측에 활용할 수 있습니다.

(관련 이미지 첨부)

이를 통해, PG 를 통해 받아야 하는 금액에 이상이 없는지 체크하고 특정 기간 내에 받을 정산 금액을 쉽게 확인할 수 있어 현금 흐름 예측하는 데에 용이하게 활용하실 수 있습니다.

### ✔️ 결제 데이터 분석 메뉴 가이드

결제 데이터 분석 메뉴를 통해 결제 수단, PG 트렌드를 분석하고 현재 우리의 고객은 어떤 결제 수단을 통해 많이 결제하고 있는지 파악할 수 있어 추후 프로모션 등에 데이터 활용을 할 수 있는 기반을 마련할 수 있습니다.

- **결제 현황 분석**
  - 비교 기간 대비 거래액 및 거래 건수 추이를 한 눈에 파악이 가능합니다.
  - 비교 기간 대비 건별 평균 거래액 및 고객당 평균 거래액 추이를 확인할 수 있습니다.
  - 기간 내 취소 및 환불률을 확인할 수 있으며 통화별로도 분리하여 확인이 가능합니다.

(관련 이미지 첨부)

- **결제수단별 인사이트**
  - 검색한 기간 내에 결제수단별로 거래액 및 거래 건수 순위를 쉽게 파악할 수 있습니다.
  - 카드사별로 구분하여 거래액 추이를 쉽게 파악할 수 있습니다.
  - 간편결제별로 구분하여 거래액 추이를 쉽게 파악할 수 있습니다.

(관련 이미지 첨부)

- **결제대행사별 인사이트**
  - 결제대행사별로 구분하여 거래액 및 거래 건수를 쉽게 파악할 수 있습니다.

(관련 이미지 첨부)

### ✔️ 제품 온보딩 가이드 기능 추가

- **포트원 사용 가이드**
  - 유의사항 : Owner, Admin 계정만 확인 가능합니다.
  - 포트원을 통해 온라인 결제를 사용하기 위해 필수적으로 진행해야 하는 단계 중 아직 완료되지 않은 사항들을 빠르게 확인하고 진행할 수 있습니다.

(관련 이미지 첨부)

- **제품별 온보딩 가이드**
  - 여러 서비스 중 원하는 목적에 맞는 제품을 바로 확인하고 메뉴로 이동할 수 있도록 제품별 온보딩 가이드를 추가하였습니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/console/2023-04-24

---
releasedAt: 2023-04-24T00:00:00.000Z
writtenAt: 2023-04-27T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 결제내역 조회 시 상태 승인 시각을 기준으로 확인할 수 있습니다

관리자콘솔 `[결제 상세 내역 조회]` 메뉴 - `[기준 시각]`을 `'상태 승인 시각'`으로 선택해 보세요.\
다섯 가지 결제 상태에 따라 가장 최근에 업데이트된 시각을 확인할 수 있습니다.

앞으로는 결제건의 결제 상태와 더불어 마지막 결제 상태가 업데이트된 시각도 함께 볼 수 있습니다.

<div class="hint" data-style="info">

**Tip**: 포트원 관리자콘솔은 결제 상태를 결제완료, 결제예정, 결제실패, 결제취소, 승인대기로 분류하고 있습니다.

</div>

(관련 이미지 첨부)

## 기타 수정사항

### ✔️ 매니저 권한을 부여받은 계정으로 정산 서비스를 이용할 수 있습니다

포트원 관리자콘솔은 계정 권한을 총 다섯 가지로 분류하고 있습니다.

1. **Admin(Owner)**: 모든 기능 접근 가능, 계정 삭제 시 상점 삭제
2. **Admin**: 모든 기능 접근 가능
3. **Dev**: 결제 연동 설정, 결제 내역 조회
4. **Manager**: 결제 내역 조회 및 수정, 리포트 조회, 계정 관리
5. **Read Only**: 결제 내역 조회, 리포트 조회

### ✔️ 결제연동 설정 시, 결제대행사로 다날 또는 KG이니시스를 선택하는 경우에만 본인인증을 선택할 수 있습니다

관리자콘솔 `[결제연동]` 메뉴 - `[테스트/실 연동 관리]` 탭에서 결제대행사 설정 및 추가를 진행할 때
본인인증 서비스를 제공하는 다날과 KG이니시스를 선택하는 경우에만 채널 속성에서 `'본인인증'` 선택이
활성화 됩니다. 이 외 결제대행사 선택 시 `'본인인증'` 선택은 비활성화 됩니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/console/2023-05-08

---
releasedAt: 2023-05-08T00:00:00.000Z
writtenAt: 2023-05-11T00:00:00.000Z
---

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/console/2023-05-22

---
releasedAt: 2023-05-22T00:00:00.000Z
writtenAt: 2023-05-25T00:00:00.000Z
---

(관련 이미지 첨부)

<br />

## 주요 업데이트 사항

### ✔️ 페이코 직연동을 이용 중인 경우, 판매자용 매출전표가 표시됩니다

이번 업데이트를 통해 판매자용 매출전표가 표시되도록 수정했습니다.
관리자콘솔 \[결제 상세 내역 조회] - 결제 건 선택 - ‘승인 영수증’을 선택해 확인해보세요.


# https://developers.portone.io/release-notes/console/2023-07-05

---
releasedAt: 2023-07-05T00:00:00.000Z
writtenAt: 2023-07-05T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 전자결제 신청시 포트원 추천 패키지를 선택할 수 있습니다.

수많은 결제수단과 결제대행사 중 어떤 것이 우리 서비스에 알맞을지 고민됐다면, 포트원이 추천하는 결제수단과 결제대행사를 선택해서 전자결제를 신청하세요.

결제 데이터를 기반으로 증명된, 온라인 서비스를 운영 중인 기업이 가장 많이 이용하는 결제수단 네
가지를 제안합니다. 결제수단 선택시 포트원이 추천하는 결제대행사를 즉시 확인할 수 있습니다.

포트원 추천 패키지는 결제수단, 결제대행사 이용 비용, 결제형태와 연동방식을 종합적으로 고려하여
선별했습니다. 특정 결제수단과 결제대행사를 이용을 원한다면 \[전자결제 직접 선택하기]를 통해 자유롭게
골라보세요.

(관련 이미지 첨부)

### ✔️ 전자결제 신청시 결제서비스의 모든 구성을 커스텀할 수 있습니다.

기존에는 결제수단을 선택한 후 다음 페이지에서 결제대행사와 결제형태를 확인할 수 있었기에 전자결제 신청 과정이 번거로웠습니다.

앞으로는 한 페이지에서 결제수단별로 이용 가능한 결제대행사를 확인하고, 결제형태까지 선택해보세요. 선택한 결제서비스는 장바구니에 담겨 즉시 확인하고 수정할 수 있습니다.

결제대행사별로 제공하는 결제수단이 궁금하다면, 우측 상단의 \[모든 결제대행사 보기]를 통해 포트원에서 지원하는 모든 결제대행사와 결제수단, 수수료까지 한 눈에 살펴보세요.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/console/2023-07-07

---
releasedAt: 2023-07-07T00:00:00.000Z
writtenAt: 2023-07-10T00:00:00.000Z
---

## 주요 업데이트 사항

### **PG 거래대사**✔️ 엑심베이의 정산내역을 확인할 수 있습니다

이번 업데이트를 통해 처음으로 해외결제건의 정산내역을 조회할 수 있습니다.
관리자콘솔 \[정산]메뉴 - \[통합 내역 조회]에서 정산내역을 조회할 수 있으며, 엑심베이를 통한 7월 5일 결제건부터 확인할 수 있습니다.\
엑심베이는 결제일로부터 2일 후에 결제일의 정산내역을 수신합니다.
이용에 참고바랍니다.

📍정산통합조회 서비스의 기능이 궁금하다면 [→ 서비스소개 보기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍이용 중인 PG사도 정산내역 조회가 가능한지 궁금하다면
[→ 지원 PG사 확인하기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍정산통합조회 서비스의 이용방법이 궁금하다면 [→ 이용방법 보기](https://guide.portone.io/92af7604-5813-48fa-a186-82e8e7356a3e)

### **PG 거래대사**✔️ 정산 통화별로 정산내역을 조회할 수 있습니다

기존에는 원화로만 정산내역을 조회할 수 있엇지만, 이번 업데이트를 통해 결제통화 및 정산통화별로 정산내역을 조회할 수 있습니다.
또한 \[통합 내역 조회] 메뉴의 조회 기준일이 정산예정일에 맞추어 자동으로 설정됩니다.

(관련 이미지 첨부)


# https://developers.portone.io/release-notes/console/2023-07-17

---
releasedAt: 2023-07-17T00:00:00.000Z
writtenAt: 2023-07-19T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ KG이니시스 승인 영수증에서 신규 매출전표가 표시됩니다

이번 업데이트를 통해 관리자콘솔의 \[결제 내역 상세 조회] 메뉴에서 KG이니시스 결제건 선택시 승인 영수증에서 신규 매출전표가 표시됩니다.

<br />

## 기타 수정사항

- 클래식 콘솔에서 결제내역 조회시 모든 PG사를 필터로 추가하여 검색할 수 있습니다


# https://developers.portone.io/release-notes/console/2023-08-23

---
releasedAt: 2023-08-23T00:00:00.000Z
writtenAt: 2023-08-23T00:00:00.000Z
---

## 주요 업데이트 사항

### **PG 거래대사**✔️ KG이니시스의 정산내역을 확인할 수 있습니다.

이번 업데이트를 통해 KG이니시스를 포함한 주요 10개 결제대행사(PG)/간편결제사의 정산 내역을 조회할 수 있습니다.
관리자콘솔 메뉴 \[결제사 정산] - \[통합 내역 조회]에서 정산 내역을 조회할 수 있으며, KG이니시스의 경우 8월 1일 결제건부터 조회가 가능하오니 이용에 참고하시기 바랍니다.

📍 정산 통합 조회 서비스의 기능이 궁금하다면
[→ 서비스 소개 보기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍 이용 중인 결제대행사(PG사)도 정산 내역 조회가 가능한지 궁금하다면
[→ 지원 결제대행사(PG)사 확인하기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍 정산 통합 조회 서비스의 이용 방법이 궁금하다면 [→ 이용 방법 보기](https://guide.portone.io/92af7604-5813-48fa-a186-82e8e7356a3e)


# https://developers.portone.io/release-notes/console/2023-09-12

---
releasedAt: 2023-09-15T00:00:00.000Z
writtenAt: 2023-09-15T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 전자결제 신청하기 페이지 리뉴얼

이번 업데이트를 통해 전자결제 신청 후 계약 진행 상황을 실시간을 볼 수 있는 상태값 조회 페이지가 개선되었습니다.
이외에 자세한 리뉴얼 상황은 아래와 같습니다.

📍 결제대행사별로, 계약 건별로 상황을 확인할 수 있습니다.\
📍 계약 과정에서 필요한 서류 등 체크리스트를 확인할 수 있습니다.\
📍 워드프레스/ 우커머스 사이트를 지원하는 결제대행사 정보를 확인하실 수 있습니다.\
📍 포트원 추천패키지 상세 가이드가 추가되었습니다.


# https://developers.portone.io/release-notes/console/2023-12-27

---
releasedAt: 2023-12-27T00:00:00.000Z
writtenAt: 2024-01-02T00:00:00.000Z
---

## 주요 업데이트 사항

### **PG 거래대사**✔️ 헥토파이낸셜의 정산내역을 확인할 수 있습니다.

이번 업데이트를 통해 헥토파이낸셜을 포함한 11개 PG사와 간편결제사의 정산 내역을 조회할 수 있습니다.
관리자콘솔 메뉴 \[결제사 정산] - \[통합 내역 조회]에서 정산 내역을 조회할 수 있으며,
헥토파이낸셜의 경우 8월 1일 결제건부터 조회가 가능하오니 이용에 참고하시기 바랍니다.

📍 정산 통합 조회 서비스의 기능이 궁금하다면
[→ 서비스 소개 보기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍 이용 중인 결제대행사(PG사)도 정산 내역 조회가 가능한지 궁금하다면
[→ 지원 결제대행사(PG)사 확인하기](https://guide.portone.io/a89f61e5-4545-41ae-9b72-14f506adcac6)\
📍 정산 통합 조회 서비스의 이용 방법이 궁금하다면 [→ 이용 방법 보기](https://guide.portone.io/92af7604-5813-48fa-a186-82e8e7356a3e)

## 기타 수정사항

### **결제 모듈 V1**✔️ KG이니시스 결제 시 결제 통화 위/변조 검사가 추가되었습니다.

PC 환경에서 KG이니시스의 승인 요청시 결제 통화 및 결제 금액 위/변조 검사를 진행합니다.


# https://developers.portone.io/release-notes/console/2024-09-05

---
releasedAt: 2024-09-05T00:00:00.000Z
writtenAt: 2024-09-05T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 좌측 메뉴 영역이 새롭게 변경되었습니다.

(관련 이미지 첨부)

기존 \[파트너 정산] 메뉴는 \[파트너 정산 자동화], \[애널리틱스] 메뉴는 \[결제 데이터 분석]으로 변경됩니다.

- **\[메뉴 접기]**

  - 메뉴 접기 아이콘을 클릭하여 좌측 메뉴 영역을 접을 수 있습니다.
  - 메뉴가 접힌 상태에서 한번 더 클릭하는 경우 다시 메뉴를 펼칠 수 있습니다.

- **\[전자결제 신청]**
  - 전자결제 신청을 원하시는 경우 좌측 메뉴 영역 하단의 \[전자결제 신청]을 클릭해 주세요.

- **\[로그아웃]**
  - 좌측 메뉴 영역 상단의 \[계정 정보]를 클릭한 후 \[로그아웃]을 클릭해 주세요.


# https://developers.portone.io/release-notes/platform/2023-08-31

---
releasedAt: 2023-08-31T00:00:00.000Z
writtenAt: 2023-09-01T00:00:00.000Z
---

## 주요 업데이트 사항

### **파트너 정산 자동화**✔️ 파트너정산 서비스가 출시되었습니다.

플랫폼 및 마켓플레이스 사업자가 손쉽게 하위정산 할 수 있는 파트너정산 서비스가 런칭 되었습니다.
파트너(셀러) 등록, 계약 등록, 정산등록 과 같은 정산의 세밀한 모든 부분을 관리자 콘솔로 관리하세요!
해당 서비스는 유료 서비스입니다. 문의를 원하시면 신청(<https://platform.contact.portone.io/>)하시면
영업일 2일안에 연락드리겠습니다.

[→ 파트너 정산 자동화 서비스 소개](https://portone.io/korea/ko/service/platform)
[→ 파트너 정산 자동화 연동가이드 확인하기](https://developers.portone.io/platform/ko/readme)


# https://developers.portone.io/release-notes/platform/2023-11-08

---
releasedAt: 2023-11-08T00:00:00.000Z
writtenAt: 2023-11-09T00:00:00.000Z
---

조금 더 일관성 있는 변수 체계를 만들기 위해 정산 수식에서 쓸 수 있는 변수의 명칭이 변경되며,
플랫폼중개수수료액 수식이 추가 지원됩니다.

## 주요 업데이트 사항

### ✔️ 수식 변수 명칭이 변경되었습니다.

- DISCOUNT\_SHARE\_RATE(할인분담률) , PLATFORM\_FEE\_RATE(플랫폼중개수수료률) , ADD\_FEE\_RATE(추가수수료률)
  → **FIXED\_RATE**(정률)

- ADD\_FEE\_AMOUNT(추가수수료액) , PLATFORM\_FEE\_AMOUNT(플랫폼중개수수료액) → **FIXED\_AMOUNT**(정액)

### ✔️ 추가 수수료 수식에서 신규 변수를 지원합니다.

추가 수수료 수식에서는 플랫폼 중개 수수료 수식을 통해 계산된 PLATFORM\_FEE\_AMOUNT(플랫폼중개수수료액)이
추가로 지원됩니다. 이를 통해 추가 수수료를 부여할 때, 결제 혹은 주문 금액 중에서 중개 수수료를 제외한
금액만 추가 수수료를 부여하실 수 있습니다.

## 수식 별 변수 지원 현황

이번 릴리즈를 통해서 각 수식 별로 사용 가능 변수는 아래와 같습니다.

|      영문 변수 명     |     한글 변수 명     |플랫폼수수료수식|할인분담수식|추가수수료수식|
|:---------------------:|:--------------------:|:--------------:|:----------:|:------------:|
|     ORDER\_AMOUNT     |       주문금액       |        O       |      X     |       O      |
|    PAYMENT\_AMOUNT    |       결제금액       |        O       |      X     |       O      |
|    DISCOUNT\_AMOUNT   |       할인금액       |        O       |      O     |       O      |
|      FIXED\_RATE      |         정률         |        O       |      O     |       O      |
|     FIXED\_AMOUNT     |         정액         |        O       |      X     |       O      |
|DISCOUNT\_SHARE\_AMOUNT|      할인분담금      |        O       |      X     |       O      |
| PLATFORM\_FEE\_AMOUNT |  플랫폼중개수수료액  |        X       |      X     |       O      |
|   PLATFORM\_FEE\_VAT  |플랫폼중개수수료부가세|        X       |      X     |       O      |


# https://developers.portone.io/release-notes/platform/2023-11-14

---
releasedAt: 2023-11-14T00:00:00.000Z
writtenAt: 2023-11-15T00:00:00.000Z
---

주문 정산 등록 API가 개선되며, 인증 토큰 발급과 관련하여 변경 사항이 있습니다.

## 주요 업데이트 사항

### ✔️ 주문 정산 등록 API가 개선되었습니다.

- **paymentId** 기반으로 파트너당 여러 건의 주문 정산 건을 등록할 수 있게됩니다.
- 추후 정산 아이디(transferId) 기반으로 주문 취소 정산을 등록할 수 있는 API도 개발 예정이며, 곧 안내드리겠습니다.

### ✔️ 주문 정산 삭제 API가 추가되었습니다.

- 정산 아이디(transferId)를 기반하여 정산이 완료되지 않은(상태: 정산 예정, 정산 중) 정산 건을 삭제할 수 있습니다.
- `DELETE /platform/transfers/{$id}` 요청 본문 없이 호출하여 사용하실 수 있습니다.

### ✔️ 인증 토큰 발급 시 일부 사항이 변경되었습니다.

- graphql 중 `loginViaApiKey` mutation이 `loginViaApiSecret` 로 변경됩니다.

- 따라서 rest api 중 `/login/api-key` api는 **deprecate**되고
  [API secret 를 사용한 토큰 발급 api](https://developers.portone.io/api/rest-v2/auth#post%20%2Flogin%2Fapi-secret)가
  추가됩니다.

- `/login/api-key`의 경우, 하위 호환성 보장을 위해 24년 3월까지 사용이 가능하나, 가급적 변경해주시길 바랍니다.


# https://developers.portone.io/release-notes/platform/2023-12-15

---
releasedAt: 2023-12-15T00:00:00.000Z
writtenAt: 2023-12-15T00:00:00.000Z
---

## 주요 업데이트 사항

### **파트너 정산 자동화**✔️ 정산 건을 삭제할 수 있도록 변경

주문 정산 건, 취소 주문 정산 건, 수동 정산 건을 삭제할 수 있습니다. 단, 정산 건의 상태가 정산 예정, 정산 중일 경우에만 삭제가 가능합니다.
주문 정산 건의 경우 동일한 paymentId를 가진 취소 주문 정산 건이 등록되어있는 경우에는 삭제가 불가능합니다.


# https://developers.portone.io/release-notes/platform/2024-05-20

---
releasedAt: 2024-05-20T00:00:00.000Z
writtenAt: 2024-05-20T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 상세 내역 다운로드 API가 추가되었습니다.

- \[상세 내역 조회] 페이지에서 정산 상세 내역을 CSV 파일로 다운로드할 수 있습니다.
- 파일 다운로드 후 상세 내역을 확인하고 정산 명세서를 손쉽게 정리해보세요.

(관련 이미지 첨부)

### ✔️ 예금주 조회 API 응답 본문이 변경되었습니다.

- 예금주 조회 API 요청 후 정상 인증 완료 시 응답 본문에 `accountVerificationId`가 추가되었습니다.

### ✔️ 파트너 관리 API 요청/응답 본문이 일부 변경되었습니다.

- 파트너 생성/다건 생성/수정 API 요청 시 파트너 유형이 비사업자 (원천징수납세자)인 경우,
  생년월일을 선택적으로 등록할 수 있습니다.
  - 생년월일을 입력할 경우, 8자리로 입력 가능합니다. ex. (YYYYMMDD/YYYY-MM-DD)로 입력 가능

- 파트너 조회/다건 조회/생성/다건 생성/수정/보관/복원 API 응답 시 파트너 사업자 상태 필드(`businessStatus`)가
  추가되었습니다. 사업자등록번호(`businessRegistrationNumber`)가 변경되거나 기입하여 생성한 경우에 사업자
  상태가 업데이트 됩니다.

- 파트너 생성/수정 API 요청 시 예금주 계좌조회에 실패하더라도 파트너를 등록할 수 있습니다. 계좌조회가
  어려운 경우 고객사가 직접 계좌 정보를 입력할 수 있습니다.
  - 예금주 조회에서 발급받은 `accountVerificationId`를 사용하여 추가적인 계좌 인증을 생략할 수 있습니다.


# https://developers.portone.io/release-notes/platform/2024-05-29

---
releasedAt: 2024-05-29T00:00:00.000Z
writtenAt: 2024-05-29T00:00:00.000Z
---

안녕하세요. 포트원 파트너정산 팀입니다.

송금대행 서비스가 출시되어 상세 이용 방법 안내 드립니다.

송금대행 서비스 이용을 원하시는 경우, 전용 가상계좌 부여를 위해 포트원 고객센터에 문의를 남겨주시기 바랍니다.

## 주요 업데이트 사항

### ✔️ 송금대행 서비스가 출시되었습니다!

(이미지 첨부: \[송금대행 일괄지급] 예시 화면)

전용 가상계좌에 정산금을 충전하면 실시간으로 잔액을 조회할 수 있으며,
계산된 정산금을 한 번의 버튼 클릭으로 대량 지급할 수 있습니다.
지급 결과는 실시간으로 조회 가능하며, 성공/실패 금액 및 실패 사유 또한 확인할 수 있습니다.

### ✔️ 새로운 정산 처리 구조 소개

(이미지 첨부: 변경된 정산 처리 구조 흐름)

- 주문정산/수기 정산을 기반으로 정산 API를 생성할 경우, 미리 설정한 계약 / 정산 주기 조건 등에 따라서
  정산일을 기준으로 정산 내역을 생성합니다.

- 정산내역 중 지급할 내역을 선택한 뒤 일괄지급을 실행하면 전자서명 후 실제 송금이 이루어집니다.
  이를 통해 정산금 계산부터 일괄지급까지 전 영역을 자동화할 수 있습니다.

### ✔️ 용어

- 정산 상세 내역 : 주문, 수기(수동) 정산 내역을 의미합니다.
  **\[정산 상세내역 조회]** 페이지에서 정산 API를 호출한 모든 내역을 건 별로 조회할 수 있습니다.

- 정산 내역 : 파트너, 계약, 정산 유형, 정산일을 기준으로 정산금을 계산하여 집계한 내역입니다.
  **\[정산 내역 관리]** 페이지에서 모든 정산 건을 조회할 수 있으며, 정산일이 생성된 경우 과거 데이터와
  미래 데이터 모두 조회할 수 있습니다.

- 지급 내역 : 여러 정산 건을 파트너 단위로 묶어서 지급하기 위한 내역입니다.
  지급 내역은 파트너 아이디를 기반으로 집계됩니다. **\[지급 내역 관리]** 페이지에서 모든 지급 건의 목록을 조회할 수 있습니다.

- 일괄 지급(구: 대량이체) : 일괄 지급 현황을 관리하는 관리 단위로, 정산 내역을 기반으로 파트너에게
  지급할 복수의 정산 건을 선택할 때 생성됩니다. \[일괄지급 내역 관리] 페이지에서 모든 일괄 지급 건을 조회할 수 있습니다.

### ✔️ 가상계좌

(이미지 첨부: 가상계좌 할당 예시 화면)

- 송금 대행 기능 이용을 원하시는 고객사에 한해 고객사별 전용 가상계좌를 할당해 드립니다.
  송금대행 서비스 이용을 원하시는 경우 전용 가상계좌 부여를 위해 파트너스 슬랙 혹은 채널톡 고객센터를
  통해 연락해 주시기를 바랍니다.

- 언제든지 자유롭게 입금이 가능하며, 잔액 조회 버튼을 클릭하면 현재의 잔액을 즉시 확인할 수 있습니다.
  가상계좌 즉시 출금 기능은 6월 중 개발 예정이며 해당 기능이 출시되기 전까지 출금을 원하시는 경우
  포트원 개발팀으로 문의 주시면 즉시 출금 처리를 도와드리겠습니다.

### ✔️ 정산 내역 관리

(이미지 첨부: \[정산 내역 관리] 예시 화면)

- 정산 관리 내역은 1시간마다 배치를 통해 동기화됩니다. 등록한 정산 상세 내역 중 \[정산일]이 도래한
  정산 건은 자동 취합되며, 정산 내역 관리 페이지에서 조회할 수 있습니다.

- 이미 생성된 정산 내역이 있더라도 API 혹은 콘솔의 수기 정산 기능으로 해당 정산일에 추가 정산 내역을
  등록하면, 정산 금액은 합산됩니다.

- 다만 기존의 정산 건이 지급실패/지급보류 상태로 변경된 경우, 추가 정산 내역을 등록하더라도 정산
  금액은 합산되지 않고 새로운 정산 건이 별도로 생성됩니다.

### ✔️ 송금대행 일괄지급

**요약**

- \[대량 이체] 기능은 \[일괄 지급] 기능으로 변경되었습니다. \[일괄 지급] 시,
  원하는 정산 건을 선택하여 파트너 단위의 지급 내역을 생성할 수 있습니다.

**이용 가이드**

- \[정산 내역 관리]에서 일괄지급을 희망하는 \[정산일]을 선택합니다. 최대 10개의 정산일 선택할 수 있습니다.

- \[송금대행 일괄지급] 버튼을 클릭하면 \[송금대행 일괄지급 선택] 페이지에 진입하여 지급할 정산 내역을
  자유롭게 선택할 수 있습니다.

  (이미지 첨부: \[송금대행 일괄지급 선택] 예시 화면)

- 선택한 정산 내역을 기반으로 \[선택 완료] 버튼 클릭 시 \[송금대행 일괄지급 실행] 페이지로 이동되며,
  자동으로 \[지급 내역]이 생성됩니다.

  - 통장 메모 관리
    - 보내는 이 통장메모, 받는 이 통장메모를 건별로, 대량으로 기입할 수 있습니다.

    - 받는 이 통장 메모는 입금 계좌에 적요로 사용되며 “OO사 1월 정산금 지급”과 파트너가 이해할 수 있는
      적절한 설명을 기입해주시기 바랍니다.

    - 보내는 이 통장 메모의 경우 내부적인 관리 용도로 사용 가능합니다.

  - 지급 금액 확인
    - \[총 지급 금액과 가상계좌 잔액을 확인했습니다] 를 체크하고 지급을 실행합니다.
    - 충전 금액이 부족할 경우, 일괄지급을 실행할 수 없습니다.
    - 충전금액의 잔액은 실시간으로 반영됩니다.

  (이미지 첨부: \[송금대행 일괄지급 실행] 예시 화면)

- 공인인증서 인증을 완료하면 송금대행 일괄지급이 실행됩니다.

  - 총액과 건수를 확인한 뒤, 공인인증서 비밀번호를 입력합니다.

  - 법인용 공인인증서에 저장되어 있는 사업자등록번호를 기반으로 인증이 완료되면, 송금대행 일괄지급이 시작됩니다.

  - 특이사항: 전자서명 검증을 위해서는 사업자번호가 등록된 상태여야 합니다.
    회원 가입 단계에서 사업자번호 등록이 누락된 경우,  관리자콘솔 메뉴의 \[상점·계정 관리] → \[사업자 정보]를 확인해주시고,
    \[채널톡 아이콘] 을 통해서 포트원 고객 센터로 문의해주세요.

  (이미지 첨부: 공인인증서 예시 화면)

### ✔️ 일괄지급 내역 관리

(이미지 첨부: \[일괄지급 내역 관리] 예시 화면)

- \[일괄지급 내역 관리]에서 일괄 지급 현황을 실시간으로 확인할 수 있습니다.
  지급 오류를 방지하기 위해 지급은 시스템에서 차례로 진행되며, 2개 이상의 일괄지급을 동시에 진행할 수 없습니다.

- 정보 오기입 등의 사유로 송금대행 일괄 지급 중단이 필요하신 경우 \[중단] 버튼을 이용하여 즉시 지급을
  중단할 수 있습니다. 지급중단 처리는 준비완료, 진행 중 상태일 때 가능합니다

### ✔️ 지급 내역 관리

(이미지 첨부: \[지급 내역 관리] 예시 화면)

- 지급 내역 페이지에서 진행 중인 지급 현황을 확인할 수 있습니다.

- 지급이 실패한 경우, 실패 사유를 확인할 수 있습니다. 지급 실패 건에 대해 지급을 재시도하고자 하는 경우,
  \[정산내역관리] 페이지에서 ‘지급실패’ 상태 탭에서 해당 지급 건을 확인한 뒤 새롭게 일괄지급을 실행할 수 있습니다.

## 기타 개선 사항

### ✔️ 파트너 검색 / 계약 검색 기능 추가

(이미지 첨부: 검색 예시 화면)

- 파트너 및 계약 검색 기능이 추가되었습니다. 더 쉽고 정확하게 내역 검색이 가능합니다.
  - 파트너 검색 : 파트너 이름, 파트너 아이디, 파트너 연락처, 사업자등록번호
  - 계약 검색 : 계약 이름, 계약 아이디, 계약 메모

### ✔️ Notes

- 테스트모드로 일괄 지급을 실행하는 경우 실제 송금은 진행되지 않고, 전체 내역이 성공 처리됩니다.

- 원화(KRW)를 제외한 외국 통화에 대해서는 아래의 통화만 지원됩니다. 이외의 통화 지원은 추후 검토 예정입니다.
  - 정산 API 지원 통화 : KRW, USD, JPY, EUR, CNY , TWD, AUD, THB, HKD

- 원화(KRW)를 제외한 모든 외국 통화에 대해서는 현재 일괄 지급을 지원하지 않습니다.

- 기존 “직접 지급”(수기 상태 관리)형태의 일괄 지급은 현재 지원되지 않고 있으며 3분기 지원 예정입니다.

- 예치금 반환 기능은 현재 제공되지 않으며 영업 시간 내 파트너스 슬랙 채널 혹은 채널톡 고객센터로 요청 시
  즉시 반환해 드립니다. 예치금 반환은 기능은 6월 중 제공 예정입니다.


# https://developers.portone.io/release-notes/platform/2024-06-05

---
releasedAt: 2024-06-05T00:00:00.000Z
writtenAt: 2024-06-05T00:00:00.000Z
---

## 주요 업데이트 사항

### ✔️ 파트너 관리 기능 업데이트

(관련 이미지 첨부)

- 과세 유형 등록 기능 업데이트
  - 파트너가 사업자인 경우, 과세 유형을 등록하고 수정할 수 있습니다.
  - 일반 과세 사업자, 간이 과세 사업자 - 세금계산서 발행 유형, 간이 과세 사업자 - 세금계산서 미발행 유형, 면세 사업자를 구분하여 저장할 수 있습니다.
  - 등록한 과세 유형은 파트너 관리 테이블에서 확인할 수 있습니다.

- 파트너 관리 테이블 업데이트
  - 파트너별 과세 유형을 파트너 관리 테이블에서 확인할 수 있습니다.

- 담당자 연락처 선택값으로 변경
  - 파트너 등록/수정 시 필수적으로 입력해야했던 담당자 정보 (휴대폰 번호)를 선택값으로 변경하였습니다.
  - 파트너의 휴대폰 번호가 없을 경우, 공란으로 등록/수정할 수 있습니다.

### ✔️ API 업데이트

- 파트너 생성/조회/수정 API
  - 사업자 유형에 과세 유형(`taxationType`)이 추가되었습니다.

- 파트너 생성 API
  - 담당자 정보의 휴대폰 번호(`phoneNumber`)가 선택 값으로 변경되었습니다.


# https://developers.portone.io/release-notes/platform/2024-07-05

---
releasedAt: 2024-07-05T00:00:00.000Z
writtenAt: 2024-07-05T00:00:00.000Z
---

안녕하세요. 파트너 정산 자동화팀입니다.

24년 07월 05일, 서비스 개선 사항 안내드립니다.

보안 강화 및 데이터 보호를 위한 사용자 권한별 사용 기능이 신설되었으며

정산내역관리 페이지에서 파트너 과세 유형을 확인하고 엑셀 다운로드할 수 있습니다.

## 주요 업데이트 사항

### ✔️ 권한별 기능 제한 안내

(관련 이미지 첨부)

- 안전한 정산 데이터 관리를 위한 역할별 권한 관리 체계 신설

- Owner 혹은 Admin 계정에 한해 데이터 편집 권한이 부여, 그 외의 계정은 데이터 조회 권한 부여

- 사용자 별 권한 부여 및 수정은 \[상점계정관리 페이지> 관리자권한 관리 탭] 에서 Owner 혹은 Admin 계정이 직접 관리 가능

- 상세 내용은 아래 표 참조

  |권한 / 역할   |Owner    |Admin    |Dev |Manager|Read Only|Read Only <br />(엑셀 다운로드 불가)|API Secret|
  |--------------|---------|---------|----|-------|---------|------------------------------------|----------|
  |정산 관리 정책|조회/편집|조회/편집|조회|조회   |조회     |조회                                |조회/편집 |
  |파트너 관리   |조회/편집|조회/편집|조회|조회   |조회     |조회                                |조회/편집 |
  |정산 상세 조회|조회/편집|조회/편집|조회|조회   |조회     |조회                                |조회/편집 |
  |정산 내역 관리|조회/편집|조회/편집|조회|조회   |조회     |조회                                |조회/편집 |
  |지급 내역 관리|조회/편집|조회/편집|조회|조회   |조회     |조회                                |조회      |
  |일괄 지급 관리|조회/편집|조회/편집|조회|조회   |조회     |조회                                |조회      |
  |내역 다운로드 |가능     |가능     |가능|가능   |가능     |불가능                              |가능      |

## 개선 사항

### ✔️ 파트너 업데이트 API - 과세 유형 기본값 적용

- 파트너 수정 API에서 파트너의 사업 유형 변경 시(비사업자 → 사업자)에 과세 유형이 필수값에서 선택값으로 변경
- 에러 유형이 더욱 상세하게 반환되도록 수정

### ✔️ 정산 내역 관리 - 엑셀 다운로드 시 파트너 과세 유형 지원

(관련 이미지 첨부)

- 정산 내역 관리에서 엑셀 다운로드 시 과세 유형 확인 가능


# https://developers.portone.io/release-notes/platform/2024-07-11

---
releasedAt: 2024-07-11T00:00:00.000Z
writtenAt: 2024-07-11T00:00:00.000Z
---

안녕하세요. 파트너 정산 자동화팀입니다.

24년 07월 11일, 서비스 개선 사항 안내드립니다.

가상계좌의 잔액에 대한 출금을 지원하며, 파트너 관리에 원천징수 비대상자 유형이 추가되었습니다.

또한, 지급 금액을 기준으로한 원천징수 세액 계산 기능이 출시되었으니 많은 이용 부탁드립니다.

## 주요 업데이트 사항

### ✔️ 가상계좌 잔액 출금 기능

(이미지 첨부: 정산 내역 관리 > 내 가상계좌 잔액)

정산 금액을 지급하기 위해 예치한 금액을 임의의 계좌로 출금하는 기능이 출시되었습니다.
파트너정산 > 정산 내역 관리 페이지 > 내 가상계좌 잔액의 \[출금] 버튼을 클릭할 경우 가상계좌 출금 페이지로 이동합니다.

(이미지 첨부: 가상계좌 출금)

해당 페이지에서 계좌 정보와 출금 액수를 기재 후 전자서명을 완료하면 해당 계좌로 입력 잔액이 출금됩니다.
해당 기능은 \[관리자] 권한을 가진 사용자만 이용할 수 있습니다.

### ✔️ 파트너 관리 - 원천징수 비대상자, 소득 유형 추가

(이미지 첨부: 파트너관리 > 파트너 등록)

세무 처리를 고려하여 정산금을 계산할 수 있도록 파트너 유형이 확장되었으며, 원천징수 대상자와 원천징수 비대상자를 구분하여 등록할 수 있습니다.

\[원천징수 대상자] 탭에 소득 유형을 추가하였고, 원하는 경우 \[정산 정책 관리 > 정산 규칙 관리 페이지]에서
정산금에서 원천징수 세액을 자동으로 차감하도록 설정할 수 있습니다.
다만 \[원천징수 비대상자]는 원천징수세액 관련 설정을 완료하더라도 원천징수 세액이 차감되지 않습니다.

### ✔️ 지급 금액에서 원천징수세액 제외 지원

(이미지 첨부: 정산 정책 관리 > 정산 규칙 관리 > 원천징수세액 정산금 차감 기준 설정)

정산 정책 관리 페이지의 정산 규칙 관리 탭에서 원천징수세액 정산금 차감 기준을 설정할 수 있습니다.

파트너 유형이 원천징수 대상자인 경우, 지급 금액에서 자동으로 \[원천징수세액]를 제외한 후 지급할 수 있습니다.
기존에는 \[추가수수료] 기능을 통해 원천세에 대한 기능을 우회 처리할 수 있었으나, 더욱 간편하게 설정할 수 있도록 세부 설정 기능을 제공하게 되었습니다.

\[지급금액에 원천징수세액 제외] 옵션을 선택하면, 세액을 자동 차감한 뒤 최종 정산금을 계산하도록 설정할 수 있고,
\[지급금액에 원천징수세액 포함]을 선택하여 기존의 계산 방식대로 원천세를 포함하여 지급 후 파트너가 별도로 신고할 수 있도록 설정도 가능합니다.

(이미지 첨부: 정산 내역 관리 > 일괄 지급 실행)

\[지급금액에 원천징수세액 제외]가 설정되어 있는 경우, 일괄 지급 실행 시 해당 금액 만큼 계산되어 차감하여 지금액이 확정됩니다.

(이미지 첨부: 지급 내역 관리)

지급이 완료된 경우 계산된 원천징수세액을 지급 내역에서도 내용을 확인할 수 있습니다.

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-07-30

---
releasedAt: 2024-07-30T00:00:00.000Z
writtenAt: 2024-07-30T00:00:00.000Z
---

안녕하세요. 파트너 정산 자동화팀입니다.

24년 07월 30일, 서비스 개선 사항 안내드립니다.

파트너와 정산내역에 관한 사용자 정의 속성을 등록/ 관리할 수 있는 기능이 출시되었습니다.

## 주요 업데이트 사항

### ✔️ 파트너 사용자 정의 속성

(이미지 첨부: 파트너 관리 > 파트너 사용자 정의 속성)

- 파트너 관리 페이지에서 파트너 사용자 정의 속성을 등록할 수 있으며 최대 10개까지 추가 가능합니다.
- 속성 이름은 등록 후에도 수정 가능합니다.
- 보안에 민감한 정보도 관리할 수 있도록 각각의 속성 값의 조회 권한을 설정할 수 있습니다.
- 등록된 값은 \[파트너 관리] 페이지와 \[정산 상세 조회] 페이지에서 확인 가능합니다.

(이미지 첨부: 파트너 관리 > 파트너 정보 수정)

- 파트너 정보 등록 / 파트너 정보 수정 시 속성 값을 지정할 수 있습니다.

### ✔️ 정산 사용자 정의 속성

(이미지 첨부: 정산 상세 조회 > 정산 사용자 정의 속성)

- 정산 상세 조회 페이지에서 정산 사용자 정의 속성을 등록할 수 있으며 최대 10개까지 추가 가능합니다.
- 속성 이름은 등록 후에도 수정 가능합니다.
- 보안에 민감한 정보도 관리할 수 있도록 각 속성 값의 조회 권한을 설정할 수 있습니다.

(이미지 첨부: 정산 상세 조회)

- 파트너 사용자 정의 속성값과 정산 사용자 정의 속성 값은 \[정산 상세 조회] 페이지에서 확인할 수 있습니다.
- 관리자만 조회 가능할 수 있는 속성 칼럼은 비관리자가 조회 시 노출되지 않습니다.

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-08-07

---
releasedAt: 2024-08-07T00:00:00.000Z
writtenAt: 2024-08-07T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 8월 7일, 서비스 업데이트 사항 안내드립니다.

지급 및 정산 내역의 다건 조회를 위한 API가 추가되었습니다.

## 주요 업데이트 사항

### ✔️ 지급/정산 내역 조회 API 지원

(이미지 첨부: 정산 내역 관련 API > 정산 내역 다건 조회)

- 정산내역 다건 조회 API가 추가되었습니다.

(이미지 첨부: 지급 내역 관련 API > 지급 내역 다건 조회)

- 지급 내역 다건 조회 API가 추가되었습니다.

(이미지 첨부: 일괄 지급 내역 관련 API > 일괄 지급 내역 다건 조회)

- 일괄 지급 내역 다건 조회 API가 추가되었습니다.

### ✔️ 수기 정산 건 임의 정산일 지원

- 임의의 정산일을 지정해 수기 정산건을 등록할 수 있도록 변경되었습니다.
- 모든 정산일을 지원함에 따라 PlatformUnavailableSettlementDateError 에러가 삭제되었습니다.

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-08-22

---
releasedAt: 2024-08-22T00:00:00.000Z
writtenAt: 2024-08-22T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 8월 22일, 서비스 업데이트 사항 안내드립니다.

정산 상세 API 중 주문 정산 등록 시 할인 금액 중 면세 금액(이하. 면세 할인 금액)을 지원합니다.

- 주문 정산, 주문 취소 정산 시 면세 할인 금액을 지정하여 정확한 주문 금액 중 면세금액과 결제 금액 중 면세금액을 지원합니다.
- 해당 주문 면세 금액과 결제 면세 금액, 할인 면세 금액에 대해서 정산 금액 결과에 반영되며 현재는 API 상에서 확인 가능합니다.

더불어 이체 내역 다건 조회 API가 추가되었습니다. 가상 계좌 내 충전, 파트너 정산 송금, 송금 이체 내역들을 조회할 수 있습니다.

## 주요 업데이트 사항

### ✔️ 면세 할인 금액 지원

주문 정산건과 주문 취소 정산건 생성 시 `discounts`에 면세 할인 금액(`taxFreeAmount`)을 지정하여 면세 주문 금액에서 면세 할인 금액을 차감하고, 면세 할인 분담 금액을 계산하실 수 있습니다.

현재는 콘솔에서 할인 면세 금액과 관련된 필드를 확인하실 수 없고 API를 통해서만 확인하실 수 있습니다. 추후 콘솔에서도 확인하실 수 있도록 업데이트될 예정입니다.

#### API 변경사항

**주문 정산건 생성 요청**

- **`discounts`:[\[CreatePlatformOrderTransferBodyDiscount\[\]\]](/api/rest-v2/type-def#CreatePlatformOrderTransferBodyDiscount)** 할인 정보에 면세 할인 금액 필드가 추가되었습니다.
  - **`taxFreeAmount?: integer`** 면세 할인 금액

**주문 취소 정산건 생성 요청**

- **`discounts`:[\[CreatePlatformOrderCancelTransferBodyDiscount\[\]\]](/api/rest-v2/type-def#CreatePlatformOrderCancelTransferBodyDiscount)** 할인 정보에 면세 할인 금액 필드가 추가되었습니다.
  - **`taxFreeAmount?: integer`** 면세 할인 금액

**주문 정산건 생성, 주문 취소 정산건 생성 응답**

- **`amount`:[\[PlatformOrderSettlementAmount\]](/api/rest-v2/type-def#PlatformOrderSettlementAmount)** 정산 금액 정보에 필드가 추가되었습니다.
  - **`paymentTaxFree: integer`** 결제 면세 금액
    - 기존 `taxFree`를 대체하는 필드입니다. `taxFree`를 사용하고 계셨다면 `paymentTaxFree`를 대신 사용해 주세요

  - **`paymentSupply: integer`** 결제 공급가액
    - 기존 `supply`를 대체하는 필드입니다. `supply`를 사용하고 계셨다면 `paymentSupply`를 대신 사용해 주세요

  - **`orderTaxFree: integer`** 면세 주문 금액

  - **`discountTaxFree: integer`** 면세 할인 금액

  - **`discountShareTaxFree: integer`** 면세 할인 분담 금액

- **`discounts`:[\[PlatformOrderTransferDiscount\[\]\]](/api/rest-v2/type-def#PlatformOrderTransferDiscount)** 정산 금액 계산 시 사용된 할인 정보에 필드가 추가되었습니다.
  - **`taxFreeAmount: integer`** 면세 할인 금액
  - **`shareTaxFreeAmount: integer`** 면세 할인 분담 금액

**정산 상세 내역 다운로드 필드 추가**

- **`fields?`:[\[PlatformTransferSheetField\[\]\]](/api/rest-v2/type-def#PlatformTransferSheetField)** 다운로드 할 시트 필드가 추가되었습니다.
  - **`SETTLEMENT_PAYMENT_SUPPLY_AMOUNT`**: 결제 공급가액
    - 기존 `SETTLEMENT_SUPPLY_AMOUNT`를 대체하는 필드입니다. `SETTLEMENT_SUPPLY_AMOUNT`를 사용하고 계셨다면 `SETTLEMENT_PAYMENT_SUPPLY_AMOUNT`를 대신 사용해 주세요

  - **`SETTLEMENT_PAYMENT_TAX_FREE_AMOUNT`**: 결제 면세 금액
    - 기존 `SETTLEMENT_TAX_FREE_AMOUNT`를 대체하는 필드입니다. `SETTLEMENT_TAX_FREE_AMOUNT`를 사용하고 계셨다면 `SETTLEMENT_PAYMENT_TAX_FREE_AMOUNT`를 대신 사용해 주세요

  - **`SETTLEMENT_ORDER_TAX_FREE_AMOUNT`**: 면세 주문 금액

  - **`SETTLEMENT_DISCOUNT_TAX_FREE_AMOUNT`**: 면세 할인 금액

  - **`SETTLEMENT_DISCOUNT_SHARE_TAX_FREE_AMOUNT`**: 면세 할인 분담 금액

**주문 정산건 생성 응답 에러 타입 추가 & 변경**

- 에러 타입 추가
  - **PlatformSettlementAmountExceededError**: 정산 가능한 금액을 초과한 경우 에러 타입이 추가되었습니다.
    - **`type: AmountExceededType`** 필드로 요청받은 금액과 초과한 금액의 타입을 알 수 있습니다.
      - **`DISCOUNT_THAN_ORDER`**: 할인금액이 주문금액을 초과
      - **`DISCOUNT_TAX_FREE_THAN_DISCOUNT`**: 면세 할인금액이 할인금액을 초과
      - **`DISCOUNT_TAX_FREE_THAN_ORDER_TAX_FREE`**: 면세 할인금액이 면세 주문금액을 초과
      - **`PAYMENT_TAX_FREE_THAN_PAYMENT`**: 면세 결제금액이 결제금액을 초과

- 에러 타입 변경
  - **PlatformDiscountExceededOrderAmountError**: 할인 금액이 주문 금액을 초과한 경우
  - **PlatformTaxFreeAmountOverFlowError**: 결제 면세 금액이 결제금액을 초과한 경우
  - 위의 두 에러 타입이 제거되고 **PlatformSettlementAmountExceededError** 타입으로 통합되었습니다.

**주문 취소 정산건 생성 응답 에러 타입 추가 & 변경**

- 에러 타입 추가
  - **PlatformSettlementAmountExceededError**: 정산 가능한 금액을 초과한 경우 에러 타입이 추가되었습니다.
    - **`type: AmountExceededType`** 필드로 요청받은 금액과 초과한 금액의 타입을 알 수 있습니다.
      - **`DISCOUNT_THAN_ORDER`**: 할인금액이 주문금액을 초과
      - **`DISCOUNT_TAX_FREE_THAN_DISCOUNT`**: 면세 할인금액이 할인금액을 초과
      - **`DISCOUNT_TAX_FREE_THAN_ORDER_TAX_FREE`**: 면세 할인금액이 면세 주문금액을 초과
      - **`PAYMENT_TAX_FREE_THAN_PAYMENT`**: 면세 결제금액이 결제금액을 초과

- 에러 타입 변경
  - **PlatformDiscountCancelExceededOrderCancelAmountError**: 취소 할인 금액이 취소 주문 금액을 초과한 경우
  - **PlatformTaxFreeAmountOverFlowError**: 결제 면세 금액이 결제금액을 초과한 경우
  - 위의 두 에러 타입이 제거되고 **PlatformSettlementAmountExceededError** 타입으로 통합되었습니다.

### ✔️ 이체 내역 조회 지원

(이미지 첨부: 이체 내역 다건 조회 API)

- 이체 내역 다건 조회 기능이 추가되었습니다. 가상 계좌 내 충전, 파트너 정산 송금, 송금 이체 내역들을 조회할 수 있습니다.

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-10-21

---
releasedAt: 2024-10-21T00:00:00.000Z
writtenAt: 2024-10-21T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 10월 21일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 그간 고객사에서 특히 요청이 많았던 기능들을 추가 제공합니다.

1. **송금대행 일괄지급 예약 기능을 지원합니다.**
2. **수기정산 일괄등록 기능을 지원합니다.**

## 주요 업데이트 사항

### ✔️ 송금대행 일괄지급 예약 기능

(이미지 첨부: 송금대행 일괄지급 실행)

- 송금대행 일괄지급은 기존에 **즉시 지급**만 가능하였으나, 이번 업데이트로 즉시 지급과 **예약 지급을 선택**하여 지급을 실행할 수 있습니다. 내부 정책에 맞게 지급 일시를 유연하게 관리해보세요!

### ✔️ 송금대행 일괄지급 예약 내역 관리 기능

(이미지 첨부: 정산 내역 관리)

- **예약내역을 확인**할 수 있습니다.
- 일괄지급 **예약시간**은 실제 실행 전까지 자유로이 **변경하거나 취소**할 수 있습니다.

### ✔️ 수기정산 내역 일괄 등록 기능

(이미지 첨부: 수기 정산 일괄 등록)

- 수기정산 내역 일괄 등록 기능이 출시되었습니다.
- 포트원이 제공하는 양식을 다운로드하여 데이터를 업로드하면 **자동으로 콘솔에 반영**됩니다.

### API 변경사항

#### ✔️ 일괄 지급 내역 다건 조회

일괄 지급 내역 다건 조회 응답값이 수정되었습니다.

- **`items`: [PlatformBulkPayout\[\]](/api/rest-v2/type-def#PlatformBulkPayout)** 일괄 지급 내역에 필드가 추가되었습니다.
  - **`scheduledAt?: string`** 일괄지급 예정일시
  - **`status`: [PlatformBulkPayoutStatus](/api/rest-v2/type-def#PlatformBulkPayoutStatus)** 일괄지급 상태에 `SCHEDULED` (예약됨) 상태가 추가되었습니다.

- **`counts`: [PlatformBulkPayoutStatusStats](/api/rest-v2/type-def#PlatformBulkPayoutStatusStats)** 일괄지급 상태별 통계에 `scheduled`상태인 일괄지급 건 수가 추가되었습니다.
  - **`scheduled: integer`** 예약된 일괄지급 건 수

#### ✔️ 지급 내역 다건 조회

지급 내역 다건 조회 응답값이 수정되었습니다.

- **`items`: [PlatformPayout\[\]](/api/rest-v2/type-def#PlatformPayout)** 지급 내역에 필드가 추가되었습니다.
  - **`scheduledAt?: string`** 지급 예정일시
  - **`status`: [PlatformPayoutStatus](/api/rest-v2/type-def#PlatformPayoutStatus)** 지급 상태에 `SCHEDULED` (예약됨) 상태가 추가되었습니다.

- **`counts`: [PlatformPayoutStatusStats](/api/rest-v2/type-def#PlatformPayoutStatusStats)** 지급 상태별 통계에 `scheduled` 상태인 지급 건 수가 추가되었습니다.
  - **`scheduled: integer`** 예약된 지급 건 수

#### ✔️ 정산 내역 다건 조회

정산 내역 다건 조회 응답값이 수정되었습니다.

- **`items`: [PlatformPartnerSettlement\[\]](/api/rest-v2/type-def#PlatformPartnerSettlement)** 정산 내역에 필드가 추가되었습니다.
  - **`status`: [PlatformPartnerSettlementStatus](/api/rest-v2/type-def#PlatformPartnerSettlementStatus)** 정산 상태에 `PAYOUT_SCHEDULED` (지급 예약) 상태가 추가되었습니다.

- **`counts`: [PlatformPartnerSettlementStatusStats](/api/rest-v2/type-def#PlatformPartnerSettlementStatusStats)** 정산 상태별 통계에 payoutScheduled 상태인 정산 내역 건 수가 추가되었습니다.
  - **`payoutScheduled: integer`** 지급 예약된 정산 내역 건 수

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-11-07

---
releasedAt: 2024-11-07T00:00:00.000Z
writtenAt: 2024-11-07T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 11월 7일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 파트너 등록 기능과 유효성 검증 기능을 고도화했습니다.

1. 파트너 일괄 등록을 지원합니다.
2. 휴폐업 상태, 예금주 검증 상태를 파트너 관리 테이블에서 조회할 수 있습니다.

## 주요 업데이트 사항

## ✔️ 파트너 일괄 등록 기능

(이미지 첨부: 파트너 일괄 등록)

- **\[파트너 관리] 페이지에서 파트너 정보를 대량으로 등록하는 기능**이 신설되었습니다.
- 포트원이 제공하는 **CSV 양식을 다운로드**하여 데이터를 업로드하면 **자동으로 콘솔**에 반영됩니다.
- 파트너 일괄 등록 시 **일괄 휴폐업 조회, 일괄 예금주 조회를 진행**합니다.
- 예금주 검증 상태에 따라 예금주가 존재하는 경우 **정확한 예금주로 정보를 치환하여 자동 저장할** 수 있습니다.

### ✔️ 파트너 휴폐업 조회 상태, 예금주 검증 상태 조회

(이미지 첨부: 파트너 관리)

- 파트너가 국세청에 등록된 사업자라면 휴폐업 상태를 \[파트너 관리] 테이블에서 손쉽게 조회할 수 있습니다.
- 계좌번호 정보가 있다면 예금주 검증 상태를 \[파트너 관리] 테이블에서 조회할 수 있습니다.

### ✔️ 휴폐업 조회 상태, 예금주 검증 상태 필터 기능

(이미지 첨부: 파트너 관리)

- \[필터] 기능을 통해 휴폐업 상태와 예금주 검증 상태별 파트너 데이터를 조회할 수 있습니다.

## API 변경사항

## ✔️ 파트너 관리

**계좌 상태 코드 변경**

- 신설 `VERIFY_ERROR` : 계좌 인증 오류
- 제거 `VERIFYING` : 해당 에러는 미사용 코드로 제거되었습니다.
- 제거 `EXPIRED` : 해당 에러는 미사용 코드로 제거되었습니다.

**휴폐업 상태 코드 변경**

- 변경 `VERIFY_FAILED` → `VERIFY_ERROR` : 조회 오류
- 제거 `VERIFYING` : 해당 에러는 미사용 코드로 제거되었습니다.

**파트너 다건 조회 - 필터 조건 추가**

파트너 내역을 검색 및 조회 시에 파트너의 계좌 상태, 사업자 상태를 기반하여 조회가 가능합니다.

- `filter.accountStatus` : 파트너 계좌 상태
- `filter.businessStatuses` : 파트너 사업자 상태

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-11-25

---
releasedAt: 2024-11-25T00:00:00.000Z
writtenAt: 2024-11-25T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 11월 25일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 세금계산서 역발행 신규 기능을 제공합니다.

1. 파트너 다수에게 대량으로 세금계산서 발행 승인 요청을 보낼 수 있어 일일이 작업하는 노고를 줄여 드립니다.
2. 국세청 사이트에 방문하지 않고도 세금계산서 발행 및 수정 세금계산서 작성이 가능합니다.

## 세금계산서 역발행 신규 업데이트 사항

### ✔️ 국세청 연동

- 콘솔 우측 최상단 \[세금계산서 연동관리]에서 공동인증서를 **1회만 연동** 완료하면, 손쉽게 역발행 세금계산서를 작성/관리 할 수 있습니다.

(이미지 첨부: 세금계산서 연동 관리)

### ✔️ 세금계산서 작성

- 세금계산서를 작성 중 **임시저장** 할 수 있습니다.

(이미지 첨부: 세금계산서 작성)

- **국세청에서 제공하는 전자세금계산서 양식**으로 편리하게 사용할 수 있습니다.

(이미지 첨부: 세금계산서 작성)

### ✔️ 세금계산서 일괄 등록

- 포트원에서 제공하는 양식에 맞추어 csv 파일 작성 완료 후 콘솔에 업데이트 하면, **자동으로 데이터가 입력**됩니다.

(이미지 첨부: 세금계산서 일괄 등록)

- 세금계산서의 역발행 **승인 요청 / 발행 / 국세청 전송 상태**를 **간편하게 확인**할 수 있습니다.

(이미지 첨부: 세금계산서 목록)

### ✔️ 파트너 국세청 연동 및 세금계산서 조회/승인/거부

- 공급자는 **이메일에서** 최초 1회 공동인증서를 **연동 완료**한 후, 세금계산서 조회/승인/거부할 수 있습니다.

(이미지 첨부: 전자세금계산서 조회)

### ✔️ 수정 세금계산서 작성

- 세금계산서를 국세청에 전송한 이후에 수정이 필요한 경우, **국세청 홈페이지 방문 없이** 포트원 콘솔에서 수정 세금계산서 작성이 가능합니다.

(이미지 첨부: 수정 세금계산서 작성)

## API 변경사항

### ✔️ 파트너 관련 API

파트너 다건 조회 요청 본문이 수정되었습니다.

- `PlatformPartnerFilterInput` 파트너 필터 입력 정보에 필드가 추가되었습니다.
  - `types` : PlatformPartnerTypeName 파트너 유형 필터가 추가되었습니다.
  - `taxationTypes` : PlatformPartnerTaxationType 파트너 과세 유형 필터가 추가되었습니다.
  - `memberCompanyConnectionStatuses` : PlatformPartnerMemberCompanyConnectionStatus 파트너 연동 사업자 연결 상태 필터가 추가되었습니다.

파트너 관련 API들의 응답 본문이 수정되었습니다.

- `PlatformPartnerTypeBusiness` 파트너 사업자 정보에 필드가 추가되었습니다.
  - `memberCompanyConnectionStatus` :  PlatformPartnerMemberCompanyConnectionStatus 파트너 연동 사업자 연결 상태가 추가되었습니다.
  - `memberCompanyConnectionFailedReason?`: String  연동사업자 연결 실패 사유가 추가되었습니다.

### ✔️ 사업자 조회

- 사업자 조회 API가 추가 되었습니다.

(이미지 첨부: 사업자 조회 API)

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2024-12-10

---
releasedAt: 2024-12-10T00:00:00.000Z
writtenAt: 2024-12-10T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

24년 12월 10일, 서비스 업데이트 사항 안내드립니다.

이번 업데이트에서는 아래 5가지 개선으로 보다 좋은 사용성을 제공합니다.

1. **파트너 엑셀 다운로드** 기능을 지원합니다.
2. **기본 통장메모 일괄 설정**을 제공하여 한 번 설정해두면, 송금대행 일괄지급 시 **반복 기입할 필요가 없습니다.**
3. 기존 1건만 제공되던 **송금대행 일괄지급 예약**을 **10건**까지 제공합니다.
4. 일괄지급 선택 페이지에서 **파트너별 정산 상계 금액 확인**이 가능합니다.
5. 상세 조회 페이지에서 **보다 편리하게** 디자인이 개선되었습니다.

## 주요 업데이트 사항

### ✔️ 파트너 엑셀 다운로드

- \[파트너 관리] 에서 조회한 파트너를 **csv 파일로 다운로드** 할 수 있습니다.

(이미지 첨부: 파트너 관리)

### ✔️ 기본 통장메모 일괄 설정

- \[정산 내역 관리]의 우상단 \[일괄지급 기본 설정]을 클릭하여 **기본 통장메모를 일괄 설정**할 수 있습니다.
- 보내는 이와 받는 이에게 노출되는 통장메모 입력 후 **1회만 저장**하면, 이후 송금대행 일괄지급 실행 시 통장메모가 **자동으로 적용되어 노출**됩니다.

(이미지 첨부: 일괄지급 기본 설정)

### ✔️ 송금대행 일괄지급 예약 10건까지 생성 가능

- 송금대행 일괄지급 예약 시, 기존에는 1건만 예약이 가능했으나 총 10건까지 예약할 수 있도록 개선되었습니다.

(이미지 첨부: 정산 내역 관리)

### ✔️ 파트너별 정산 상계 금액 확인

- \[송금대행 일괄지급 선택] 에서 정산 상계 금액을 **자동계산**해 노출합니다.
- 정산내역이 **파트너별로 정렬되며,** 파트너별 최종 지급예정 금액이 **마이너스인 금액을 빨간색으로 표기**해 정정 대상에 대한 **가시성을 높였습니다.**

(이미지 첨부: 송금대행 일괄지급 선택)

### ✔️ 정산 상세 조회 디자인 업데이트

- \[정산 상세 조회] 에서 **표 설정이 추가**되었습니다.
- **원하는 조건**으로 보다 편하게 정산 상세 내역을 조회할 수 있습니다.

(이미지 첨부: 정산 상세 조회)

- **테이블 가독성을 증대하고, 보다 편리한 필터 사용**이 가능하도록 디자인을 개선하였습니다.

(이미지 첨부: 정산 상세 조회)

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2025-01-16

---
releasedAt: 2025-01-16T00:00:00.000Z
writtenAt: 2025-01-16T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

금번 정기 업데이트 개선사항 공유 드립니다.

이번 업데이트는 소소하지만 확실한 편리함을 드릴 수 있는 개선사항들로 꾸려졌습니다.

1. 역발행 세금계산서 **이메일 재발송**

2. 역발행 세금계산서 **공급자 랜딩 페이지 내 토큰 만료 오류 케이스 추가**
   1. 이메일 재발송 시 기존 이메일 토큰 만료 에러
   2. 기존 세금계산서 토큰 유효기간 만료 에러

3. **정산내역관리/지급내역관리 표 헤더 상단고정**

## ✔️ 역발행 세금계산서 이메일 재발송

- 아래 2가지 발송경로를 통하여 **역발행 세금계산서 이메일 재발송** 기능을 지원합니다.
  - 세금계산서 목록에서 최우측으로 스크롤하여, \[메일 재전송] 버튼을 클릭
  - 세금계산서 목록에서 세금계산서 단건을 클릭하여 세금계산서 조회 페이지 진입 후, 좌측 하단의 \[메일 재전송] 버튼을 클릭

- 메일 재발송을 하면 **기존 페이지의 토큰은 만료**되고, 새로 발송한 메일에 대하여 **신규 토큰이 생성**됩니다. 이에 따라 토큰의 기간도 **이메일 재발송 후, 2달로 갱신**됩니다.

(이미지 첨부: 발송경로 1. 세금계산서 목록에서 최우측으로 스크롤하여, \[메일 재전송] 버튼 클릭)

(이미지 첨부: 발송경로 2. 세금계산서 목록에서 세금계산서 단건을 클릭하여 세금계산서 조회 페이지 진입 후, 좌측 하단의 \[메일 재전송] 버튼 클릭)

## ✔️ 역발행 세금계산서 공급자 랜딩 페이지 내 토큰 만료 오류 케이스 추가

**이메일 재발송 시 기존 이메일 토큰 만료 에러**

- 세금계산서 발행 요청 **이메일을 재발송**할 경우, 기존 이메일 **토큰 만료되어 조회 불가**한 케이스에 대하여 에러 메시지를 노출합니다.

(관련 이미지 첨부)

**기존 세금계산서 토큰 유효기간 만료 에러**

- **토큰이 만료(이메일 발송일로부터 2달 경과)된 세금계산서**에 대하여 에러 메시지를 노출합니다.

(관련 이미지 첨부)

## ✔️ 정산내역관리/지급내역관리 표 헤더 상단고정

- 정산/지급내역관리의 **표 리스트를 스크롤**하는 경우, **컬럼명을 고정**하여 각 컬럼 항목에 해당하는 데이터를 명확하게 인지할 수 있도록 개선하였습니다.

(관련 이미지 첨부)

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2025-02-10

---
releasedAt: 2025-02-10T00:00:00.000Z
writtenAt: 2025-02-10T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

이번 업데이트에서는 **정산정책관리 및 정산금 계산관리 기능**이 더욱 강력해졌습니다.

**다양한 정산 정책과 복잡한 정산 수식**을 보다 쉽게 설정하고 자동화할 수 있도록 기능을 개선했습니다.

## ✔️ 정산정책관리 및 정산금 계산관리 기능 고도화

### 1️⃣ **맞춤형 정산 파라미터 설정**

- 각 플랫폼에서 필요한 정산 입력 값을 **직접 설정**할 수 있도록 지원합니다.
- **사업자 유형, 구매자 유형, 다양한 할인 정책, 수수료, 부가세 정책** 등을 고려한 **맞춤형 설정**이 가능합니다.

### 2️⃣ **사용자 정의 정산 수식 지원**

- 플랫폼의 정책에 맞춰 **사용자 정의 수식** 을 작성할 수 있습니다.

### 3️⃣ **자유로운 계산 순서 조정**

- **여러 개의 정산 수식을 조합**하여 원하는 **순서대로 적용**할 수 있습니다.
- 예를 들어, **할인 금액 차감 후 수수료 적용** 등의 시나리오 설정 가능합니다.

### 4️⃣ 수식별 소수점 및 부가세 처리 기준 제공

- **회계 기준에 맞는** 부가세 및 정산 금액에 대한 **소수부 처리 기준**을 설정하여 **정밀한 정산**이 가능합니다.

(관련 이미지 첨부)

### ✅ **이제 정산 자동화, 더 쉽고 유연하게!**

이번 개선을 통해 **정산 정책이 복잡한 플랫폼 비즈니스에서도 자동화가 더욱 쉬워집니다.**

다양한 예외 사항을 고려한 정산 구조를 설정하고, 플랫폼에 맞는 정산 정책을 더욱 유연하게 운영해 보세요!

<br />

📢 **업데이트 사용 방법:** \[파트너 정산 자동화] → \[정산 정책 관리] → \[계산 관리]

<br />

<br />

### 🚧 API 변경사항

이제 [주문 정산건 생성](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#post%20%2Fplatform%2Ftransfers%2Forder)하실 때에 정산 파라미터를 활용하실 수 있습니다.

(관련 이미지 첨부)

사용자 정의 함수의 계산 결과와 파라미터에 지정된 값을 응답 메세지에서 확인할 수 있습니다.

> 영향 API : [정산건 조회](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#get%20%2Fplatform%2Ftransfers%2F%7Bid%7D), [주문 정산건 생성](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#post%20%2Fplatform%2Ftransfers%2Forder), [주문 취소 정산건 생성](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#post%20%2Fplatform%2Ftransfers%2Forder-cancel), [정산건 다건 조회](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#get%20%2Fplatform%2Ftransfer-summaries)

- 사용자 정의 함수 :  [PlatformOrderTransfer](https://developers.portone.io/api/rest-v2/type-def?v=v2#PlatformOrderTransfer).amount.**userDefinedFormulas**
- 정산 파라미터 : [PlatformOrderTransfer](https://developers.portone.io/api/rest-v2/type-def?v=v2#PlatformOrderTransfer).**parameters**

더 궁금한 점이 있다면 고객 지원팀에 문의해 주세요! 🚀

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2025-02-13

---
releasedAt: 2025-02-13T00:00:00.000Z
writtenAt: 2025-02-13T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화팀입니다.

세금계산서 발행을 위한 **파트너 국세청 연동/연동해제 기능**을 REST API로 지원합니다.

이제 더욱 유연하게 파트너 정보를 국세청 시스템과 연동할 수 있습니다.

## ✔️ 파트너 국세청 연동/연동해제 REST API 제공

- **단건 연동/연동해제 API** 지원
- **다양한 필터링 조건**을 통한 **다건 연동/연동해제 API** 추가

신규 API 스키마는 개발자 센터에서 참조하실 수 있습니다.  \[[개발자센터 바로 가기](https://developers.portone.io/api/rest-v2/platform.partner?v=v2#post%20%2Fplatform%2Fpartners%2Fmember-company-connect%2F%7Bid%7D)]

이제 API를 활용하여 **세금계산서 발행 프로세스를 더욱 간편하게 자동화**하세요! 🚀

(관련 이미지 첨부)

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2025-03-04

---
releasedAt: 2025-03-04T00:00:00.000Z
writtenAt: 2025-03-04T00:00:00.000Z
---

안녕하세요, 파트너 정산 자동화팀입니다.

금번 업데이트 사항 공유 드립니다.

## ✅ 주요 업데이트

## ✔️ 1. 수기정산건 등록 시 즉시반영

- **기존:** 정산 완료 상태의 수기 정산건 등록 후 **10분 후** 정산내역 관리에 반영

- **변경:** 정산 완료 상태의 수기 정산건 등록 시 **즉시** 정산내역 관리에 반영
  - 수기 정산건 등록 후, **정산 내역 관리 페이지**에서 수기 정산건에 등록한 정산일이 포함된 기간으로 조회하면 **수기 정산건이 반영된 정산 내역을 즉시 확인 가능**

- **경로:** 정산 상세 조회 > **수기 정산 등록 > 정산 내역 관리 페이지**에서 확인 가능

(이미지 첨부: Step 1. 정산 상세 조회 페이지에서 수기정산건 등록)

(이미지 첨부: Step 2. 수기 정산건 등록 시 정산 내역 관리 목록에서 즉시 확인 가능)

<br />

## ✔️ 2. 국세청 미연동 사업자번호 세금계산서 발행 제한

- **기존:** 국세청 연동되지 않은 사업자번호도 세금계산서 **발행 요청 가능** → 공급자가 발행 페이지에서 오류 확인

- **변경:** 국세청 미연동 사업자번호의 세금계산서 **발행 요청이 실패**하도록 개선 → 파트너의 오류 경험을 사전에 방지

- **경로:**
  - 세금계산서 > 세금계산서 작성 > **일괄등록 (단건등록은 기존에도 국세청 미연동자 세금계산서 발행 제한)**
  - 세금계산서 > 세금계산서 목록 > **요청실패**

(관련 이미지 첨부)

<br />

늘 파트너정산자동화 서비스를 이용해주셔 감사합니다.

자세한 사항은 [업데이트 상세보기](https://developers.portone.io/release-notes) 페이지에서 확인할 수 있습니다.

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/release-notes/platform/2025-03-17

---
releasedAt: 2025-03-17T00:00:00.000Z
writtenAt: 2025-03-17T00:00:00.000Z
---

안녕하세요 파트너 정산 자동화 팀입니다.

세금계산서 역발행 기능에 대해 두 가지 주요 업데이트를 안내드립니다.

## ✔️ 1. 세금계산서 역발행 상태 변화 웹훅 기능 지원

- 세금계산서 및 연동사업자의 상태 변경 시, **웹훅을 통해 실시간 알림을 제공합니다.**
- 웹훅 사용을 희망하는 고객사는 문의 부탁드립니다. (상세 스펙 및 설정 지원)

## ✔️ 2. 사업자등록 정보조회 API 지원

- **사업자등록번호만으로** 해당 사업자에 대한 **상세 정보를 조회**할 수 있습니다. [(API 확인하기)](https://developers.portone.io/api/rest-v2/platform.company?v=v2#post%20%2Fb2b%2Fcompanies%2Fbusiness-info)

- 사업자등록번호를 입력하면 아래 항목들이 응답값으로 제공됩니다. (다건 지원이며, 건당 비용 발생)
  - **응답 항목:**
    사업자등록번호, 상호, 대표자명, 우편번호, 주소, 사업자유형, 사업상태, 과세유형, 간이과세-일반과세전환일, 폐업일, 개업일, 업태, 종목, 업종코드, 법인등록번호, 전화번호, 관할세무서코드, 관할세무서명

- 본 API를 활용하면 세금계산서 역발행 시 **파트너사의 사업자 정보를 자동으로 최신 상태로 업데이트**하여 **업무 효율성을 극대화**할 수 있습니다.

## 🔹 **사용 문의 경로**

- 기존 파트너정산자동화 제품을 이용하고 계신 고객이더라도, 세금계산서 역발행 기능 사용을 위해서는 별도 문의가 필요합니다.

- 세금계산서 상태변화 웹훅 및 사업자번호 기업정보조회 API 연동이 필요하신 고객사는
  [📩 support.b2b@portone.io](mailto:support.b2b@portone.io)로 문의해 주세요.

포트원의 전체 업데이트 소식은 [개발자센터 릴리즈노트](https://developers.portone.io/release-notes) 페이지에서 확인할 수 있습니다.

늘 파트너정산자동화 서비스를 이용해주셔 감사합니다.

---

감사합니다.

파트너정산 자동화 팀 드림


# https://developers.portone.io/blog/posts/2024-02/v2-oom

---
title: 포트원 V2 이야기 - OOM 이슈 탐방기
description: ZIO를 사용하면서 발생했던 OOM 이슈에 대해 원인을 분석합니다.
author: BaekGeunYoung
date: 2024-02-28T15:00:01.000Z
tags:
  - Core V2
  - Backend
  - Scala
  - ZIO
---

본 글은 ZIO에 대한 기본적인 이해를 전제로 하고 있으니, ZIO에 대한 간략한 소개는 [포트원 V2 이야기 -
Scala와 ZIO로 안정적인 결제 시스템 만들기](../v2-zio)를 참고해주세요.

## 사전 배경: CQRS 패턴의 도입

포트원 V2 모듈은 CQRS 패턴을 활용하고 있습니다. 앞선 [글](../v2-zio)에서 소개드렸듯이 포트원 V2는
이벤트 소싱이라는 디자인 패턴을 도입했는데, 이벤트 소싱을 하게 되면 데이터가 훨씬 상세하게 남는다는
장점이 있지만 상태가 아닌 개별 이벤트들이 DB에 저장되므로 다양한 필터를 통한 조회 요구사항에는
적절하지 않습니다. 하지만 포트원 콘솔에는 다양한 필터 조건을 걸고, 정렬을 하며, 심지어는 full-text
search 까지 지원해야 하는 등의 고도화된 조회 요구사항이 존재합니다. 이러한 요구사항을 만족하기 위해
Write DB와 Read DB를 분리해서 사용하기로 결정했는데, 이러한 데이터 접근 패턴을 CQRS 패턴이라고
부릅니다.

## 문제 상황

CQRS 패턴을 구현하기 위해서는 Write DB에서 발생한 변경 사항을 Read DB에도 반영시켜주는 파이프라인이
필요한데, Read DB를 통해 포트원에서 발생한 모든 결제건을 누락없이 볼 수 있어야 하므로 이
파이프라인의 신뢰성을 높이는 것은 매우 중요합니다. 포트원 V2의 코어 모듈은 이 파이프라인의
시작점이라고 할 수 있는데, Write DB에 발생한 변경사항을 주기적으로 캐치하여 Kafka로 publish를 해주는
background job이 존재합니다.

(관련 이미지 첨부)

이러한 job은 recursive하게 자기 자신을 주기적으로 호출하는 방식으로 작성되어 있었는데, 대략 아래와 같은 코드로 단순하게 표현할 수 있을 것입니다.

```scala
private def scrapAndPublish: UIO[Nothing] =
  for {
    events  <- getEvents
    _       <- publish(events)
    nothing <- scrapAndPublish.delay(1.second)
  } yield nothing
```

해당 코드를 배포하고 난 직후엔 아무 문제 없이 의도한대로 잘 동작하였으나, 코드를 배포한 지 며칠이
지나자 OOM이 발생해 어플리케이션이 강제로 재시작되었고 다시 며칠동안은 문제가 없다가 OOM이
발생하기를 반복했습니다. 아래의 두 사진 중 위의 것은 문제가 된 인스턴스의 JVM old generation size
추이를 나타낸 그래프이고, 아래의 사진은 같은 메트릭에 대해 문제가 없는 인스턴스의 일반적인
그래프입니다.

(관련 이미지 첨부)

(관련 이미지 첨부)

그래프를 통해 계속적인 재귀 호출로 인해 메모리가 정리되지 않고 계속해서 쌓이고 있음을 짐작할 수
있었고, 이 이슈를 해결하기 위해 몇 가지 실험과 ZIO의 코드 분석을 진행했습니다.

## 무한 재귀인데 OOM이 나는 이유

그런데 무언가 이상했습니다. 상황을 확인하고 가장 먼저 든 생각은 “무한 재귀 호출로 인해 문제가
생긴거라면 `OutOfMemoryError`가 아니라 `StackOverflowError`가 발생해야 하는 것 아닌가?”하는
것이었습니다. 일반적으로 함수의 호출은 스택이라는 메모리 공간에 스택 프레임을 생성하기 때문에 함수
호출의 깊이가 매우 깊어지면 스택에 남은 공간이 없어질 것이기 때문이죠. 예를 들어 아래와 같은
`Option`을 이용한 무한 재귀 호출 코드는 `StackOverflowError`를 발생시킬 것입니다.

```scala
def optionInfRec(n: Int): Option[Nothing] =
  Some(n).flatMap(_ => optionInfRec(n + 1))

optionInfRec(0)

--- 실행결과 ---
java.lang.StackOverflowError
  at scala.Option.flatMap(Option.scala:283)
  at io.portone.tx.InfRecSpec$.optionInfRec$1(InfRecSpec.scala:11)
  at io.portone.tx.InfRecSpec$.$anonfun$spec$2(InfRecSpec.scala:12)
  at io.portone.tx.InfRecSpec$.$anonfun$spec$2$adapted(InfRecSpec.scala:11)
  at scala.Option.flatMap(Option.scala:283)
  at io.portone.tx.InfRecSpec$.optionInfRec$1(InfRecSpec.scala:11)
  at io.portone.tx.InfRecSpec$.$anonfun$spec$2(InfRecSpec.scala:12)
  at io.portone.tx.InfRecSpec$.$anonfun$spec$2$adapted(InfRecSpec.scala:11)
```

하지만 ZIO를 이용한 무한 재귀 호출 코드는 `StackOverflowError`를 발생시키지 않습니다.

```scala
def zioInfRec(n: Int): UIO[Nothing] =
  ZIO.succeed(n).flatMap(_ => zioInfRec(n + 1))

unsafeRun(zioInfRec(0))
```

### ZIO의 Lazy Evaluation

ZIO의 경우에만 `StackOverflowError` 가 발생하지 않는 이유는 우선 ZIO는 `flatMap`의 인자로 전달 받은 함수를 즉시 평가하지 않기 때문입니다.
지난 글에서 ZIO는 동작을 기술하는 data type일 뿐이라고 소개했던 것을 기억하시나요?
ZIO에서 제공하는 `flatMap`이라는 함수에서는 파라미터로 받은 `k` 함수를 평가하지 않고 `OnSuccess`라는 data type에 그대로 넣어주고 있습니다.

```scala
def flatMap[R1 <: R, E1 >: E, B](k: A => ZIO[R1, E1, B])(implicit trace: Trace): ZIO[R1, E1, B] =
    ZIO.OnSuccess(trace, self, k) // OnSuccess는 ZIO의 subtype입니다.
```

반면 Option의 `flatMap` 구현을 보면 파라미터로 받은 f 함수를 즉시 평가하고 있습니다.

```scala
@inline final def flatMap[B](f: A => Option[B]): Option[B] =
    if (isEmpty) None else f(this.get)
```

다시 말해 위의 무한 재귀 호출 코드에서 재귀 호출이 일어나는 부분은 lambda 함수로 감싸져 있는데,
ZIO는 이 함수를 즉시 평가하지 않기 때문에 이 코드는 실제로는 재귀 호출을 하지 않는 코드가 되는
것이죠! 이를 확인하기 위해 우리가 만든 ZIO를 한번 콘솔에 출력해보겠습니다.

```scala
OnSuccess(
  io.portone.tx.InfRecSpec.zioInfRec(InfRecSpec.scala:10),
  Sync(
    io.portone.tx.InfRecSpec.zioInfRec(InfRecSpec.scala:10),
    io.portone.tx.InfRecSpec$$$Lambda$1000/0x00000008012be5e8@398d44c6
  ),
  io.portone.tx.InfRecSpec$$$Lambda$1001/0x00000008012be8a8@781006f6
)
```

실제로 `OnSuccess`가 계속해서 nested된 형태가 아니라, lambda 함수의 reference만 들어있는 것을 확인할 수 있습니다.

## ZIO가 실제로 실행되는 원리

여기까지 확인을 했다면, **“이건 단순히 평가 시점을 뒤로 미룬 것 뿐이고, 나중에 lambda가 실제로
평가될 때는 결국 문제가 발생하는거 아닌가?”** 하는 생각이 들 수 있습니다. 이 부분에 대한 궁금증을
해소하기 위해서는 우선 단순한 데이터 타입에 불과한 ZIO가 어떻게 실제로 실행되는지에 대해 이해해야
하는데요, 이 때 알아야 하는 개념이 `Fiber`와 `FiberRuntime`입니다.

### Fiber와 FiberRuntime

ZIO는 `Fiber`라는 객체 위에서 실행되고 그 실행 환경을 구체적으로 정의한 구현체를 `FiberRuntime`이라고 부릅니다.

```scala
// 실행하고자 하는 zio 객체를 이용해 Fiber를 만듭니다.
val fiber = makeFiber(zio)
// Fiber.start 함수를 호출하면 zio가 실제로 평가됩니다.
fiber.start(zio)
```

`FiberRuntime` 에는 실제로 ZIO를 한 단계씩 실행해나가는 `runLoop` 라는 함수가 존재하는데, 이 함수는
ZIO를 바깥에서부터 하나씩 처리하고 다음 평가할 ZIO를 만들어 이어서 처리하는 식으로 구현되어
있습니다. 위에서 소개한 `OnSuccess` 객체를 처리하는 로직은 어떻게 작성되어 있을까요? `OnSuccess` 는
순차 실행을 추상화한 데이터 타입이며, 그렇기 때문에 가장 기본적이고도 가장 강력한 Effect 조합기라고
할 수 있습니다. 이를 처리하는 코드를 직접 살펴보겠습니다. (편의를 위해 코드를 단순화했으며, 실제
ZIO의 코드와는 상이한 부분이 있을 수 있습니다.)

```scala
private def runLoop(effect: ZIO[Any, Any, Any], currentDepth: Int): AnyRef = {
  ...

  effect match {
    case onSuccess: OnSuccess[_, _, _, _] =>
      val first = onSuccess.first
      val andThen = onSuccess.successK

      // 첫번째 effect를 runLoop 함수를 재귀호출하여 평가하고,
      // andThen 함수에 이 결과를 넣어 이어서 평가할 ZIO 객체를 만듭니다.
      val continuation = andThen(runLoop(first, currentDepth + 1))
      ...

    case ... // handling other cases
  }
}
```

### Stack Safety를 위한 Trampoline

위 코드에서 하는 일은 첫번째 ZIO를 `runLoop` 함수를 재귀호출하여 먼저 평가하고, 그 결과를 가지고
`andThen` 함수를 호출해 이어서 평가할 ZIO 객체를 만드는 것입니다. 어쨌거나 `runLoop` 함수를 재귀
호출하기 때문에 원래 가졌던 궁금증처럼 여기서도 결국 `StackOverflowError`가 발생할 가능성이
있어보입니다. 하지만 그럼에도 실제로는 `StackOverflowError`가 발생하지 않았던 이유는 무엇일까요? 그
이유는 함수 호출의 깊이가 특정 임계값에 도달하면 즉시 스택을 비우고 연산을 한번 중지했다가 다시
시작하는 로직이 존재하기 때문입니다. `runLoop` 함수의 파라미터로 `currentDepth` 가 존재하는 것이
보이시나요? 재귀 호출을 할 때마다 이 값을 하나씩 늘려 호출을 하고, 함수의 첫 시작 부분에는 이 값이
임계치에 도달했는지를 확인하는 로직이 존재합니다.

```scala
if (currentDepth >= FiberRuntime.MaxDepthBeforeTrampoline) {
  ...

  throw Trampoline(effect, false)
}
```

여기서 발생한 `Trampoline` 이라는 에러를 catch하는 로직은 아래와 같습니다.

```scala
...
catch {
  case trampoline: Trampoline =>
    tell(FiberMessage.Resume(trampoline.effect))
}
```

이렇게 연산을 실제로 이어나가는 대신, “연산을 재개해라”라는 명령을 추상화한 객체를 만듦으로써
명시적으로 스택을 비워 stack safety를 달성할 수 있습니다. Exception의 이름이 `Trampoline` 이라는
것이 조금 특이한데, 사실 Trampoline이란 이렇게 **함수의 stack safety를 보장하기 위해 stack 대신
heap을 사용해 연산을 이어나가는 일반화된 패턴**을 의미하는 용어입니다. Trampoline은 stack safety를
보장할 수 있는 우아한 함수형 기법이지만, heap을 이용하기 때문에 메모리 동적 할당에 따른 오버헤드를
감수해야 하고 메모리에 random access를 해야 하기 때문에 stack을 일반적으로 이용하는 것보다
locality가 떨어져 cache 효율성이 낮아질 수 있습니다.

## 이제 진짜 원인 파악을 해보자

여기까지 이해를 했다면, 원래의 코드에서 왜 문제가 생겼는지를 쉽게 이해할 수 있습니다. 사실 `runLoop`
함수에서 하는 일이 한 가지 더 있는데, 함수 호출의 깊이가 깊어져 trampoline이 발생하게 되면 현재
effect를 나중에 평가하기 위해 stack에 쌓아두는 것입니다. 이 작업을 추가한 `runLoop` 코드는 다음과
같습니다.

```scala
private def runLoop(effect: ZIO[Any, Any, Any], currentDepth: Int): AnyRef = {
  ...

  effect match {
    case onSuccess: OnSuccess[_, _, _, _] =>
      val first = onSuccess.first
      val andThen = onSuccess.successK

      // 첫번째 effect를 runLoop 함수를 재귀호출하여 평가하고,
      // andThen 함수에 이 결과를 넣어 이어서 평가할 ZIO 객체를 만듭니다.
      try {
        val continuation = andThen(runLoop(first, currentDepth + 1))
      } catch {
        case trampoline: Trampoline =>
          // trampoline이 발생하면 나중에 effect를 다시 실행하기 위해 stack에 저장합니다.
          self.reifiedStack += effect

          throw trampoline
      }

      ...

    case ... // handling other cases
  }
}
```

우리의 코드는 trampoline이 무한히 발생해 stack에도 effect들이 무한히 쌓이게 되므로 OOM이 발생하는 것이었습니다!

(관련 이미지 첨부)

## 해결 방법

원인을 파악하기까지 꽤나 힘들었지만, 해결 방법은 단순합니다. 그것은 Scala의 for-comprehension을
사용하지 않는 것인데요, for-comprehension으로 만들어진 코드는 우리가 정확히 원하는 코드와는 약간의
차이가 있습니다. 윗부분에서 소개한 `zioInfRec` 함수를 for-comprehension 스타일로 바꾼다면 아래와
같이 작성할 수 있을 것입니다.

```scala
def withForComprehension(n: Int): UIO[Nothing] =
  for {
    _       <- ZIO.succeed(n)
    nothing <- withForComprehension(n + 1)
  } yield nothing
```

그리고 이 코드는 아래의 코드와 동치입니다.

```scala
def withForComprehension2(n: Int): UIO[Nothing] =
  ZIO
    .succeed(n)
    .flatMap(_ => withForComprehension2(n + 1).map(nothing => nothing))
```

가장 마지막 부분에 `.map(nothing => nothing)` 이 붙는 것이 보이시나요? 이 부분은 사실 없어도 되는
코드이지만, for-comprehension의 변환 규칙에 의해 어쩔 수 없이 붙게 되는 코드입니다. 의미적으로는
사실상 같은 일을 하는 코드이지만, 만들어지는 ZIO의 구성 자체는 분명한 차이점을 가지고 있으며 이를
`FiberRuntime` 위에서 실행할 때도 동작 방식에서 큰 차이를 갖게 됩니다.

### for-comprehension 사용 유무에 따른 구조적 차이

마지막 부분에 `.map(nothing => nothing)` 이 추가된 경우와 그렇지 않은 경우를 각각 콘솔에
출력해보았습니다. (이해를 돕기 위해 단순화하여 편집한 출력입니다. 크게 신경쓰지 않아도 되는
파라미터는 생략하였으며, lambda 함수의 reference들은 단순하게 `lambda` 라고만 표기하였습니다.)

```scala
// 1. map(nothing => nothing)이 추가되지 않은 경우
OnSuccess(
  Sync(lambda),
  lambda
)

// 2. map(nothing => nothing)이 추가된 경우
OnSuccess(
  OnSuccess(
    Sync(lambda),
    lambda
  ),
  lambda
)
```

두 ZIO의 구조적인 차이가 확인되시나요?
1번의 경우 `OnSuccess` 가 한 겹만 존재하는데 반해, 2번의 경우는 `OnSuccess` 안에 다시 `OnSuccess` 가 존재하는 구조입니다.
이렇게 `OnSuccess` 가 한 겹 더 생기는 이유는 `map` 함수는 단순히 `flatMap` 함수 호출을 wrapping하는 식으로 구현되어 있기 때문입니다.

```scala
def map[B](f: A => B): ZIO[R, E, B] = flatMap(a => ZIO.succeed(f(a)))
```

1번의 경우 `OnSuccess` 케이스를 `FiberRuntime` 에서 처리할 때 재귀호출 하는 `runLoop` 의 파라미터로
항상 `Sync` 를 넣어주기 때문에 해당 재귀 호출은 중첩된 재귀 호출을 하지 않고 곧바로 리턴될 것입니다.
반면 2번의 경우 `OnSuccess` 가 두 번 겹쳐 있으므로, `runLoop` 재귀 호출의 파라미터로 `OnSuccess` 를
넣어주게 되고 이는 중첩된 `runLoop` 재귀 호출을 유발합니다. 중첩된 재귀 호출은 Trampoline을 일으킬
것이고, 이 때 stack에 있던 중첩된 effect들이 heap (`reifiedStack`)으로 옮겨가면서 메모리를 차지하게
됩니다.

### 문제 해결

다시 맨 첫부분의 `scrapAndPublish` 예시로 돌아가서, 해당 함수를 아래와 같이 for-comprehension을
사용하지 않도록 바꿈으로써 문제를 해결할 수 있습니다.

```scala
private def scrapAndPublish: UIO[Nothing] =
  getEvents
    .flatMap(events => publish(events))
    .flatMap(_ => scrapAndPublish.delay(1.second))
```

또한
[better-monadic-for](https://github.com/oleg-py/better-monadic-for?tab=readme-ov-file#final-map-optimization)이라는
Scala compile plugin을 적용하면 for-comprehension을 없애지 않고도 문제를 해결할 수 있습니다! 이
글에서 설명하는 경우와 같이 마지막 부분에 불필요한 `map` 함수를 해당 플러그인이 제거해줍니다.

## 마무리

이번 글에서는 ZIO를 사용하면서 겪었던 OOM 이슈에 대해 그 원인과 해결 방법을 알아보았습니다. 원인을
분석해보면서 ZIO의 FiberRuntime 개념, Trampoline 패턴, for-comprehension의 작동 방식 등 흥미로운
여러 주제들에 대해서도 함께 공부할 수 있는 시간이었던 것 같습니다.

우리는 기술을 통해 온라인 결제 시장을 혁신하고자 하는 팀입니다.
이와 같은 기술적인 고민을 함께 하며 포트원의 미션에 동참하고 싶으신 분들은 언제든지 포트원의 문을 두드려주시면 감사하겠습니다!


# https://developers.portone.io/blog/posts/2024-02/v2-webhook

---
title: 포트원 V2 이야기 - 웹훅 재시도, 어디까지 고도화해 보셨나요?
description: 웹훅의 중요성과 한계점을 살펴보고 포트원 V2에서 웹훅 시스템을 고도화한 이야기를 소개합니다.
author: LimJiGyu
date: 2024-02-28T15:00:02.000Z
tags:
  - Core V2
  - Backend
  - Scala
  - Webhook
  - Architecture
---

포트원의 V2 시스템은 고객들에게 더 나은 가치를 제공하기 위해 다양한 방면으로 기술적 고도화를
진행했습니다. 기존에 결제 서비스를 운영하며 발생했던 여러 문제들에 대해 새롭게 고민했고, 그 중에는
결제 과정에서 반드시 필요한 웹훅 기능도 있었습니다.

웹훅은 포트원과 고객사 서버의 상태를 동기화하는 매우 중요한 수단인데, 기존 시스템을 운영하며 웹훅과
관련한 몇 가지 문제점을 발견했고 이를 해결하기 위해 많은 기술적 고민을 거쳤습니다. 지금부터, V2
시스템을 설계하며 웹훅과 관련해 고민했던 여러 기술적 문제들과 그 해결 과정을 공유하고자 합니다.

## 웹훅이란?

웹훅은 하나의 시스템이 다른 시스템에 어떤 이벤트가 발생했음을 알리는 방법입니다.

일반적으로 네트워크 통신은 서비스를 제공받는 클라이언트 앱에서 서비스를 제공하는 서버 앱을 호출하는
방향으로 이루어지지만, 서비스를 이용하는 과정에서 서버 앱에 특정 이벤트가 발생했는지 확인해야 하는
경우가 생길 수 있습니다. 이 경우, 클라이언트는 서버에게 데이터를 조회하는 요청을 규칙적인 주기로
전송하여 확인하고자 하는 특정 이벤트가 발생했는지를 반복적으로 확인해야 하는데 이를
폴링(Polling)이라고 합니다.

그러나 이는 특정 이벤트가 어느 시점에 발생할 지 모르는 상황에서 클라이언트가 서버를 확인하는 작업을
반복하는 것이기 때문에 이벤트가 발생하기 전까지의 무의미한 네트워크 호출 과정에서 인프라 자원의
비효율을 발생시키며, 이벤트 처리에 대한 실시간성 역시 좋지 않은 방식입니다. 따라서 특정 이벤트가
발생한 경우, 서버 측에서 클라이언트 측으로 HTTP 요청을 발송하여 정보를 역방향으로 전달하는 방식을
사용할 수 있고 이를 웹훅이라고 합니다. 그리고 이러한 특성 때문에 웹훅은 Reverse API, Push API 라고도
불립니다.

(관련 이미지 첨부)

웹훅을 사용하게 되면 클라이언트는 더 이상 이벤트의 발생 시점을 확인하기 위해 서버를 폴링할 필요가
없어지게 됩니다. 그 대신 서버에게 클라이언트 측 URL을 미리 전달하고, 이벤트가 발생하면 해당
엔드포인트로 서버가 발송한 이벤트 관련 데이터(Payload)를 통해 적절한 이벤트 처리 로직을 실행시킬 수
있습니다. 이는 이벤트가 발생한 시점에 서버가 직접 요청하기 때문에 실시간성 또한 매우 높은 방식이라고
할 수 있습니다.

## 포트원의 웹훅 사용 방식

포트원은 이러한 웹훅의 특성을 잘 활용하고 있으며 결제 서비스를 제공하는 과정에서 발생하는 여러 이벤트들을 고객사에 전달하고 있습니다.

한 번의 결제 과정에서도 여러 상황에 대한 웹훅을 발송하고 있지만, 비동기 이벤트에 대한 알림을
전달하는 웹훅의 특성을 가장 잘 설명하는 대표적인 사례는 가상계좌 결제에서 찾아볼 수 있습니다.

가상계좌 결제란 사용자에게 일시적으로 할당된 계좌로 결제할 수 있는 방법을 말합니다. 이 방식에서는
사용자가 계좌를 생성한 이후 입금 기한 내에 계좌로 돈을 입금하면 상품 또는 서비스에 대한 결제로
처리됩니다. 이는 전통적인 신용카드 결제와 달리, 고객사 페이지에서 가상계좌가 생성 처리되는 시점
이후에 입금이 비동기적으로 이루어지는 결제 방식입니다.

이러한 결제 방식에서, 고객이 입금을 완료했는지를 실시간으로 확인하기 위해 폴링 방식을 사용하는 것은
비효율적입니다. 입금 시점 전까지 반복적으로 대역폭을 불필요하게 소모하고, 서버에 부담을 주며, 결제
확인에 대한 지연을 초래하기 때문입니다. 반면, 웹훅을 사용하면 입금이 확인되는 즉시 서버에서 고객사의
지정된 웹훅 URL로 알림을 보냄으로써 이러한 비효율을 없앨 수 있습니다.

현재 포트원은 가상계좌 방식 입금 통보 외에도 결제 성공 혹은 실패와 같은 다양한 이벤트에 대해서도
웹훅을 전달하며, 이는 고객사가 결제 상태를 실시간으로 추적하고 관리하는 데에 도움을 줍니다

포트원에서 웹훅은 단순한 알림 기능을 넘어서는 중요한 역할을 하기도 합니다. 예를 들어, 고객이 결제
과정 중에 문제를 겪어 고객사 페이지로 콜백이 오기 전에 결제 창을 비정상적으로 종료하더라도, 포트원
서버에서는 결제 승인 시 웹훅을 발송하기 때문에 고객사 서버에서는 이 결제 건을 적절히 처리할 수
있습니다. 이는 고객의 결제 경험을 개선하고, 잠재적인 매출 손실을 방지하는 데 도움이 됩니다.

결국, 웹훅은 포트원이 제공하는 결제 시스템에서 여러 이벤트를 처리하기 위해 꼭 필요한 요소이며, 이를
통해 고객사는 더 빠르고 효율적인 결제 처리와 함께 향상된 사용자 경험을 제공할 수 있습니다. 포트원은
이러한 웹훅 기술을 통해 결제 서비스의 신뢰성과 효율성을 동시에 높이고 있습니다.

## 웹훅 시스템에서 발생하는 문제점

웹훅은 효율적인 이벤트 알림 메커니즘을 제공하지만, 그 자체로 완벽하지는 않습니다. 가장 큰 문제 중 하나는 웹훅 호출이 실패할 경우 발생합니다.

웹훅 호출의 실패는 고객사의 결제 데이터와 이벤트 처리 로직의 누락으로 이어질 수 있기 때문에 적절한
처리가 필요합니다. 이 때 웹훅의 재시도 정책이 그에 대한 좋은 방법이 될 수 있습니다. 단순히 한 번의
네트워크 호출 실패로 인해 전체 서비스의 비즈니스 로직을 실패로 처리하거나 대체 로직(fallback)으로
전환하는 것은, 네트워크 호출을 재시도하는 것과 비교하여 더 큰 리소스 낭비가 될 수 있기 때문입니다.

또한 실제로 웹훅이 실패하는 대부분의 원인은, 웹훅을 받는 시스템에 큰 장애가 발생했거나 명확한
비즈니스 로직상의 실패 응답을 주는 경우보다, 네트워크의 일시적인 장애가 있거나 간헐적인 실패
응답으로 인해 발생하는 경우가 더 많기 때문에 재시도 정책은 이러한 일시적 문제를 극복하고 웹훅이
중요한 데이터를 성공적으로 전송하는 데에 큰 도움을 줍니다.

그러나 단순히 재시도를 하는 것이 문제를 해결하지는 않습니다. 이를테면 네트워크 문제로 인한 시간
초과가 발생한 경우, 문제가 해결될 때까지 지속적으로 웹훅이 실패할 수 있습니다. 그리고 이러한
상황에서 재시도를 일정 간격 없이 바로 실행한다면, 이는 문제가 있는 네트워크에 더 큰 부담을 주고
오히려 상황을 악화시킬 수 있습니다. 만약 서버 또는 중간 네트워크에 일시적인 과부하가 발생하여 요청이
지연되고 있는 상황에서, 모든 클라이언트가 연속적으로 최대 3회 재시도를 한다면 네트워크 트래픽은
예상치 못하게 최대 3배까지 증가할 수 있습니다.

위와 같은 문제를 방지하기 위해 재시도의 적절한 간격을 결정하기 위한 정책이 필요합니다. 그리고 재시도
간격에 대한 정책을 결정하더라도, 이러한 재시도 정책을 기술적으로 구현하여 원하는 웹훅 발송 시점에
적절히 재시도를 실행해야 하고, 재시도 이벤트가 시스템의 변경이나 배포 과정에서도 누락되지 않도록
안전하게 관리되는 시스템을 설계해야 합니다.

이제부터, 포트원 V2가 어떻게 이러한 문제들을 해결하고 안전한 웹훅 시스템을 설계했는지 살펴보겠습니다.

## 문제 해결, 재시도 시스템 고도화

포트원 V2는 웹훅 시스템의 이러한 문제점들을 해결하기 위해 웹훅 재시도 시스템을 고도화하는 데에
중점을 두었습니다. 그리고 이 과정에서 구현한 몇 가지의 핵심 전략들을 소개하고자 합니다.

### 1. Exponential Backoff

Exponential Backoff는 재시도 간의 대기 시간을 지수함수(exponential)의 형태로 점차 증가시키는 방법입니다.

예를 들어, 첫 번째 시도를 위한 대기 시간이 1분이면, 두 번째 시도의 대기 시간은 2분, 세 번째 시도는
4분이 됩니다. 이렇게 함으로써, 네트워크에 갑작스럽게 부하를 주는 것을 방지하고, 동시에 많은 요청이
집중되는 것을 피할 수 있습니다.

만약 모든 재시도 요청이 동일한 시간 간격으로 이루어진다면, 장애 시간동안 재시도 해야할 요청들이
누적됨에 따라 네트워크 트래픽이 기하급수적으로 증가하게 됩니다. 따라서 네트워크 트래픽이 적절히
분산되도록 만들기 위해 재시도 간격 또한 기하급수적(exponential)으로 증가시킨다고 생각하면 쉽게
이해할 수 있습니다. 이를 통해 장애 시간 동안 재시도 해야 할 요청 수가 증가하더라도 단위 시간 당
네트워크 트래픽이 고루 분산되어 웹훅을 수신하는 서버의 부담을 줄일 수 있습니다.

아래는 현재 Scala로 구현된 V2 Core 컴포넌트에서 재시도 간격을 계산하는 코드입니다. 첫 번째 웹훅
시도는 바로 진행하기 때문에 0 으로 시작하며 이후부터는 동일한 웹훅에 대한 재시도 횟수가 증가함에
따라 1 → 2 → 4 .. → 256 까지 지수함수의 형태로 증가하도록 구현되어 있습니다. 이 때 단위는 분이지만
함수를 호출하는 코드에서 사용하기 위해 초 단위로 변경하여 응답하고 있습니다.

```scala
def calculateDelaySeconds: Duration = {
    """
    현재 시도 횟수에 따른 지연 시간(초) 계산
    시도 횟수에 따라 0 -> 1 -> 4 -> 16 -> 64 -> 256 순으로 간격 설정
    """
    if (currentExecutionCount == 1)
      // 첫 번째 시도는 backoff 없이 바로 시도
      return Duration.fromSeconds(0.minute.toSeconds)
    else
      // 두 번째 시도부터 4의 지수 형태로 증가
      return Duration.fromSeconds(
        math.pow(4, currentExecutionCount - 2).toInt.minute.toSeconds
      )
  }
```

우리는 Exponential Backoff 전략을 통해 장애 시간 동안 누적되는 재시도 요청들이 단위 시간 당 네트워크
트래픽을 기하급수적으로 증가시키는 현상을 막을 수 있었습니다. 그러나, 이 전략을 사용하더라도 여전히
동일한 시간대에 발생한 모든 요청은 동일한 시간 간격으로 함께 수행된다는 한계가 존재합니다. 따라서
우리는 이러한 한계를 극복하기 위해 Jitter 라는 또 다른 전략을 함께 사용하여 문제를 해결합니다.

### 2. Jitter

Jitter는 정해진 시간 간격에 무작위성(randomness)을 추가하여, 모든 재시도가 동시에 이루어지지 않도록
합니다. 이는 동일한 시간대에 실패한 각 재시도 이벤트들이 서로 다른 시간에 재시도하도록 만들고 결국,
네트워크 트래픽이 골고루 분산되도록 만드는 효과를 가져옵니다. 이 또한 Exponential Backoff 전략과
함께 트래픽 급증이나 네트워크 오버로드로 인한 장애를 방지하는 데 도움이 됩니다.

아래 코드는 위에서 보았던 재시도 간격 계산 함수 `calculateDelaySeconds` 에 jittered 함수를 추가로
사용한 코드입니다. 내용을 정리하면 Exponential Backoff 전략을 통해 계산된 시간 간격(delay)에 0부터
1사이의 무작위 숫자를 곱해서 확률적으로 지연 시간을 결정하는 방식입니다.

이 때 min, max 라는 변수는 무작위 결과가 나올 수 있는 범위를 결정하는 요소라고 볼 수 있습니다.
Jitter 방식은 다시 Full Jitter, Equal Jitter 로 나눠지는데 이는 무작위 결과가 산출되는 범위를 전체
범위로 할 것인지 아니면 최소 지연 시간을 결정하고 남은 범위로 할 것인지의 차이를 가집니다. 예를 들면
현재 재시도 간격이 4분으로 정해졌다면, Full Jitter의 경우 0-4분 사이에서 무작위로 선택하지만 Equal
Jitter의 경우 최소 지연 시간을 2분이라고 설정한 뒤 2-4분 사이에서 무작위로 선택하는 방식입니다.

두 가지 방식 모두 장단점이 있으나 현재 포트원은 성능상 네트워크 트래픽을 더 고루 분산시키는 Full
Jitter 방식을 사용하고 있으며 이에 따라 min 값을 0으로 사용하고 있습니다.

(만약 이 주제에 대해 더 자세하게 알아보고 싶으시면 [AWS Architecture Blog 에서 소개한
글](https://aws.amazon.com/ko/blogs/architecture/exponential-backoff-and-jitter/)을 읽어보셔도
좋습니다)

```scala
def calculateDelaySeconds: Duration = {
    """
    무작위 시간 추가 (jitter)
    """
    if (currentExecutionCount == 1)
      // 첫 번째 시도는 backoff 없이 바로 시도
      return Duration.fromSeconds(
        jittered(
          0.minute.toSeconds
        ).toLong
      )
    else
      // 두 번째 시도부터 4의 지수 형태로 증가
      return Duration.fromSeconds(
        jittered(
          math.pow(4, currentExecutionCount - 2).toInt.minute.toSeconds
        ).toLong
      )
  }

private def jittered(delay: Long) = {
    // min, max 를 설정하여 무작위로 정해질 시간의 범위를 조정
    val min    = 0.0
    val max    = 1.0
    val random = scala.util.Random.nextDouble()
    delay * min * (1 - random) + delay * max * random
  }
```

앞서 살펴본 Exponential Backoff, Jitter 전략은 단순히 재시도 간격을 늘리는 것을 넘어서, 전체적인
네트워크 부하를 전략적으로 분산시키고 이를 통해 고객사의 장애 상황에 최대한 영향을 주지 않도록
시스템을 설계합니다.

우리는 앞서 세운 전략들로 적절한 재시도 간격을 결정할 수 있게 되었습니다. 그렇다면, 이제 기술적으로
이러한 정책을 구현할 수 있는 시스템이 필요합니다. 결정된 시간이 지난 후 어떻게 원하는 시점에 실제
재시도 요청이 이루어지도록 할 수 있을까요? 그리고 만약 새로운 버전이 배포되면서 서버가 종료되었을
때에도 재시도 해야 할 이벤트들이 누락되지 않도록 하려면 어떻게 해야할까요?

### 3. Message Queue - SQS

포트원 V2에서는 위와 같은 요구사항을 달성하기 위해 메시지 큐(SQS)를 활용하여 시스템을 설계했습니다.

물론 재시도 간격을 기술적으로 구현하기 위한 방법에는 여러 가지가 있겠지만, 가장 처음 생각할 수 있는
단순한 방법은 외부 인프라를 이용하지 않고 언어나 라이브러리에서 제공하는 타이머를 이용하는
방법입니다. 그러나 만약, 서버가 언어 혹은 라이브러리에서 지원하는 타이머와 비동기 구현의 조합을
활용하여 직접 애플리케이션 메모리에 재시도 할 이벤트들을 보유하게 되면, 새로운 버전의 배포 시
메모리에 저장된 재시도 이벤트들이 모두 손실되는 문제가 발생할 수 있습니다. 이는 웹훅 데이터의
누락으로 이어질 수 있어, 안정적인 시스템 운영에 큰 장애가 됩니다. 이를 해결하기 위해, 재시도
이벤트들을 서버가 아닌 외부 인프라에 저장할 필요가 있었습니다.

이 때, 데이터를 저장할 수 있는 외부 인프라에는 다양한 종류가 있지만 우리의 시나리오는 재시도 할
이벤트들을 일회성으로 등록하고 처리하는 것이었기 때문에 메시지 큐를 사용하는 것이 가장 적합하다고
판단했습니다. 그리고 Kafka, Kinesis, RabbitMQ, SQS 등 여러 종류의 메시지 큐 중에서도 SQS를
선택했는데, 그 이유는 다음과 같습니다.

#### Delay Queue 기능 자체 지원

Exponential Backoff와 Jitter와 같은 기법을 적용하기 위해 메시지 처리를 일정 시간 지연시킬 필요가
있습니다. 만약 메시지가 지연되지 않고 반복적으로 애플리케이션에 짧은 주기로 도달한다면 인프라 비용이
상당히 비효율적으로 소모될 것이기 때문입니다.

SQS는 큐 자체적으로 이러한 지연 처리 기능을 지원하며, 각 메시지의 생산 시점에 원하는 지연 시간을 매
번 설정할 수 있는 기능을 제공합니다. 이는 결정된 재시도 간격의 기술적 구현을 별도의 로직이나
커스터마이징 없이도 SQS 기능만으로 간단하게 달성할 수 있게 해줍니다.

#### FIFO 정책을 강제하지 않는 Standard 모드 지원

모든 재시도 이벤트들은 큐에 전송된 순서에 관계 없이 서로 다른 지연시간을 가지고 독립적으로 처리되어야 합니다.

예를 들어, 먼저 전송된 메시지는 16분 후에 처리되어야 하지만 이후에 전송된 다른 메시지는 1분의
지연시간을 가질 수 있습니다. 이 때, FIFO 정책이 엄격하게 지켜진다면 어느 메시지의 지연 시간에
맞추더라도 두 메시지의 지연 처리 요구사항을 모두 만족시키는 것은 불가능합니다.

그러나 SQS는 Standard와 FIFO 두 가지 종류를 가지고 있는데, Standard 모드에서는 FIFO(First-In,
First-Out) 정책을 강제하지 않습니다. 이는 각 메시지가 서로 다른 지연시간을 가질 수 있게 하여,
메시지들이 독립적으로 운영될 수 있도록 해야 한다는 요구사항을 쉽게 만족시킵니다.

#### Dead Letter Queue(DLQ)를 통한 실패 관리

최대 재시도 횟수를 초과한 메시지는 DLQ(Dead Letter Queue)로 전송됩니다. 이를 통해 실패한 메시지에
대한 검사와 관리가 가능해져, 시스템의 안정성과 신뢰성을 향상시킬 수 있습니다.

#### AWS Fully Managed Service의 이점

SQS는 AWS에서 제공하는 완전 관리형 서비스입니다. 따라서 추가적인 인프라 관리를 필요로 하는 다른 메시지 큐들과 달리 시스템에 쉽게 통합할 수 있다는 장점을 가지고 있습니다.

즉, SQS를 통해 앞서 설계한 우리의 재시도 정책을 기술적으로 간단하게 구현하면서도 애플리케이션의
변경이나 시스템의 장애에도 손실을 최소화할 수 있는 웹훅 시스템을 구축할 수 있었습니다.

## 최종 아키텍처

최종적으로, 웹훅 시스템의 아키텍처를 그림으로 표현하면 다음과 같습니다.

(관련 이미지 첨부)

Transaction Service는 V2 시스템에서 결제의 코어 기능을 담당하는 컴포넌트이며 실질적으로 웹훅을
발송하는 주체입니다. 그리고 Transaction Webhook Service 는 SQS를 구독하여 웹훅 재전송을 위한 단순한
로직을 반복하는 작은 컴포넌트입니다. 이 컴포넌트가 하는 작업은 SQS에 처리할 메시지가 있는지
지속적으로 확인하고, 만약 메시지가 있으면 Transaction Service로 웹훅 재전송을 요청한 뒤 메시지를
삭제하는 것이 전부입니다. 즉, 웹훅의 발송을 담당하는 컴포넌트와 메시지 큐를 폴링하여 전달하는
컴포넌트가 협업하는 구조입니다.

이 시스템이 동작하는 시나리오를 간단히 설명하면 다음과 같습니다.

1. 고객사 서버로 최초 웹훅을 발송합니다.

2. 고객사로부터 응답을 받습니다. 이 때, 정상 응답을 받은 경우 웹훅 프로세스는 완료됩니다.
   하지만 실패 응답을 받았을 경우 재시도 프로세스가 시작됩니다.

3. 재시도 할 웹훅에 대한 정보를 담아 SQS에 메시지를 전송합니다. 이 때, SQS의 지연 발송 기능을 이용하여
   재시도 간격 이후에 메시지가 수신될 수 있도록 합니다.

4. 정해진 지연 시간이 지나면 Transaction Webhook Service가 메시지를 수신하고, 재시도 로직을 시작합니다.

5. Transaction Service로 웹훅을 재발송 하라는 요청을 전송합니다.
   Transaction Service는 간단한 Validation 이후 고객사 서버로 웹훅을 재발송합니다.
   이 때, 성공하면 프로세스가 완료되며 다시 실패한 경우 3번 로직으로 돌아갑니다.
   그리고 Transaction Webhook Service로 처리가 완료되었다는 응답을 전송합니다.

6. 웹훅 재발송에 대한 응답을 받습니다.

7. 처리한 메시지를 삭제합니다. 웹훅의 성공 여부와 관계없이 정상적으로 응답이 오기만 했다면
   해당 재발송 이벤트는 이미 처리된 것이기 때문에 메시지를 삭제해도 문제 없습니다.
   만약 웹훅이 실패했다면, 다음 재발송 이벤트를 위한 SQS 메시지는 Transaction Service가 새롭게 전송했을 것입니다.

포트원 V2 코어에서는 위와 같은 아키텍처로 앞서 설명한 요구사항들을 모두 만족시키는 웹훅 시스템을 구현할 수 있었습니다.

## 마무리

지금까지 포트원의 결제 기능에서 핵심적인 역할을 하는 웹훅에 대해 알아보았으며, V2 시스템에서
안전하고 효과적으로 웹훅을 제공하기 위해 시도한 여러 가지 고도화 방법들을 탐구해보았습니다.

V2는 이러한 웹훅 시스템 고도화를 통해 고객의 결제 데이터 손실을 최소화하고, 고객사 서버의 장애
상황으로 인한 웹훅 재시도 상황에서도 트래픽 부하를 매우 효율적으로 관리할 수 있게 되었습니다.

이 글을 통해 소개한 웹훅 시스템의 고도화 이외에도, 포트원의 V2 시스템은 다양한 기술적 도전과 혁신을
통해 계속해서 발전하고 있으며, 앞으로 더 많은 주제와 기술적 성과들을 여러분과 공유할 예정입니다.
포트원의 기술 여정에 여러분을 초대하며, 다음 주제에 대한 기대감을 가져주시길 부탁드립니다. 저희는
여러분과 함께 성장하며, 더 나은 서비스를 제공하기 위해 끊임없이 노력할 것입니다. 다음 주제에서
뵙겠습니다!


# https://developers.portone.io/blog/posts/2024-02/v2-zio

---
title: 포트원 V2 이야기 - Scala와 ZIO로 안정적인 결제 시스템 만들기
description: 안정적인 결제 시스템을 만들기 위해 기술적으로 의사결정한 내용에 대해 소개합니다.
author: BaekGeunYoung
date: 2024-02-28T15:00:00.000Z
tags:
  - Core V2
  - Backend
  - Scala
  - ZIO
---

## 포트원 라이트닝 프로젝트

지난 10년간 포트원은 고객에게 ‘편리한 결제 연동 경험’을 제공했고, 지금까지 많은 사랑을 받고 있습니다.
많은 서비스들이 연동의 편의성을 강조하며 모듈을 출시하고 있지만, 연동 편의성은 오랜 노하우를 축적한 포트원이 가장 잘하는 영역입니다.
2023년 하반기, 포트원은 혁신적인 결제 경험을 위해 새로 ‘라이트닝 프로젝트’에 돌입했습니다.

_'연동 방식, 지금이 과연 최선의 방법일까?'_

_'결제 연동을 진행하는 개발자들이 시스템을 더 쉽게 이해하려면 어떻게 해야 할까?'_

_'휴먼 에러를 가장 효과적으로 줄일 수 있는 방법은 무엇일까?'_

지금까지의 운영 경험을 바탕으로 포트원을 연동하는 개발자들이 더욱 쉽게 시스템을 이해하고 결제를 연동할 수 있도록,
내부 시스템 개선으로 더 많은 결제 트래픽을 수용할 수 있는 새로운 V2 결제 모듈을 만들었습니다.

야심찬 목표를 가지고 시작한 프로젝트인 만큼, 개발 조직에서 목표를 달성하기 위해 어떤 기술적 노력들을 했는지
"포트원 V2 이야기"라는 대주제로 기술블로그를 통해 많은 분들과 공유하고자 합니다.
그 이야기의 첫 시작으로 이번 글에서는 포트원 V2의 코드베이스를 구성하고 있는 가장 근본적인 기술들에 대해 이야기해보고자 하는데요,
크게 2가지 정도로 기술의 갈래를 나누어볼 수 있을 것 같습니다.

- **Programming Language: Scala**
- **Effect System: ZIO**

## Programming Language: Scala

프로그래밍 언어는 저마다 다른 철학과 특징을 가지고 있으며, 이로 인해 각각의 언어는 서로 다른 영역에서 효과적으로 활용될 수 있습니다.
어플리케이션이 만족해야 하는 거시적인 요구사항에 따라 적절한 프로그래밍 언어를 선택하는 것은 단순히 개발을 넘어 비즈니스 관점에서도 매우 중요한 의사결정 문제입니다.
프로그래밍 언어를 선택하기에 앞서, 포트원의 결제 모듈은 어떤 요구사항을 만족해야 하는지를 먼저 알아보겠습니다.

1. **버그 없는 제품을 만들어야 합니다.**

포트원은 결제 시스템이기 때문에 버그에 매우 민감합니다.
제품이 의도대로 동작하지 않을 시 포트원의 고객사는 즉시 금전적인 손해를 입게 될 것입니다.
인간에 의한 버그 발생 가능성을 최소화할 수 있도록, 코드의 예측 가능성과 테스트 용이성을 극대화할 수 있는 언어를 선택해야 합니다.

2. **제품을 빠른 속도로 발전시킬 수 있어야 합니다.**

포트원은 디지털 커머스 회사들의 성장을 가속화하고자 하는 미션을 가지고 있습니다.
급성장하는 이커머스 시장의 트렌드에 맞게, 포트원은 고객사의 성장을 돕는 결제 관련 핵심 기능들을 앞으로 매우 많이, 빠르게 만들어 제공해야 합니다.
이러한 요구사항을 만족하기 위해 우리는 추상화와 모듈화를 가능케 하는 언어를 선택함으로써 유지보수 용이성을 높이고, 핵심 비즈니스 영역에만 집중할 수 있습니다.
또한 보일러 플레이트 코드를 줄여 개발 생산성을 높일 수 있는 메타프로그래밍 지원까지 있다면 매우 좋을 것 같습니다.

포트원 개발팀은 이러한 요구사항을 만족하는 언어로 [스칼라(Scala)][scala]를 선택했습니다.
Scala는 국내에서는 많이 쓰이지 않는 생소한 언어이지만 포트원의 결제 모듈을 만들기에 적합한 특징을 많이 가지고 있는데, 그 특징에 대해 하나씩 소개해보겠습니다.

### Multi-paradigm 지원 (OOP + FP)

#### OOP 지원

Scala는 OOP(Object Oriented Programming, 객체 지향 프로그래밍)를 지원합니다.
Scala는 Java Bytecode로 컴파일되어 JVM 위에서 실행되는 언어인데, Java와 완전히 같지는 않지만 비슷한 방식으로 Inheritance(상속) 기능을 제공합니다.
Inheritance는 객체의 인터페이스와 구현체를 분리할 수 있는 OOP의 핵심 기능으로, 이 기능을 통해 관심사를 분리하고 적절한 추상화를 달성할 수 있습니다.

Inheritance를 이용한 관심사의 분리를 예시 코드로 알아보겠습니다.
포트원은 다양한 방식의 결제를 지원하며, 그 중 본인인증을 별도로 거치지 않고 카드 정보만으로 즉시 결제가 이루어지는 수기(키인)결제 방식이 존재합니다.
수기결제의 비즈니스 로직을 먼저 한글로 풀어보겠습니다.

1. 수기결제를 시작한다는 내용의 이벤트 저장
2. 사용자가 넘긴 channel key를 이용해 채널(PG사별 연동 정보가 담긴 엔티티)을 얻어오기
3. 채널 정보 요청 결과를 이벤트로 저장
4. 채널을 이용해 PG사에 수기결제 요청하기
5. 수기 결제 요청 결과를 이벤트로 저장

중간중간 이벤트를 저장하는 부분이 눈에 띄는데, 이는 포트원 V2 모듈이 Event Sourcing이라는 디자인 패턴을 활용하고 있기 때문입니다.
이 패턴에 대해서는 추후에 별도 주제로 다루겠습니다.

위 비즈니스 로직을 실행하기 위해 아래와 같이 3가지의 인터페이스가 필요합니다.

```scala
// 이벤트 저장
trait Persist[Evt] {
  def apply(events: Evt*): UIO[Unit]
}

// 채널 정보 가져오기
trait ChannelService {
  def fetchChannel(
      storeId: Store.Id,
      channelKey: NonEmptyString
  ): IO[FetchChannelError, Channel]
}

// PG사에 수기(키인)결제 요청하기
trait InstantPayGatewayService {
  def pay(
      base: Base,
      channel: Channel,
      paymentMethodForm: InstantPaymentMethodForm,
  ): IO[InstantGatewayService.Failure, PayResponse]
}
```

해당 인터페이스의 구현체 코드까지 본 글에서 소개하진 않겠습니다만, 분명 구현체 코드들은 특정 기술이나 프로토콜, 외부 서비스 등에 의존한 채로 작성될 것입니다.
핵심 비즈니스 로직을 작성할 때는 구현에 대한 세부사항을 모른 채로 해당 함수들의 시그니쳐에만 의존해서 로직을 작성할 수 있습니다.

```scala
for {
  // 1. 수기결제를 시작한다는 내용의 이벤트 저장
  _ <- persist(Event.CommandReceived(id, form, store, customer, paymentMethodForm))

  // 2. 사용자가 넘긴 channel key를 이용해 channel 얻어오기
  channel <- channelService
               .fetchChannel(store.id, form.channelKey)
               .flatMapError(e => fail(Event.FetchingChannelFailed(form.channelKey, e)))

  // 3. 채널 정보 요청 결과를 이벤트로 저장
  _ <- persist(Event.FetchingChannelSucceeded(channel))

  // 4. 채널을 이용해 PG사에 수기결제 요청하기
  resp <- instantGatewayService
            .pay(base, channel, paymentMethodForm)
            .flatMapError(e => failWithWebhook(base, channel, Event.TgsFailed(e)))

  // 5. 수기 결제 요청 결과를 이벤트로 저장
  _ <- persist(Event.TgsSucceeded(resp))

  ...
} yield ??
```

#### FP 지원

Scala는 위에서 확인한 것처럼 OOP도 지원하지만 FP(Functional Programming, 함수형 프로그래밍) 패러다임 또한
동시에 지원한다는 큰 특징을 가지고 있습니다.
1985년 발표된 John Hudges의 [**“Why Functional Programming Matters”**][why-fp-matters] 라는 논문에서는
아래와 같이 Functional Programming의 주요 특징 및 장점을 요약하고 있습니다.

> **Why Functional Programming Matters 인용**
>
> Functional programs contain no assignment statements,
> so variables, once given a value, never change.
> More generally, functional programs contain no side-effects at all.
> A function call can have no effect other than to compute its result.
> This eliminates a major source of bugs, and also makes the order of execution irrelevant — since
> no sideeffect can change an expression’s value, it can be evaluated at any time.
> This relieves the programmer of the burden of prescribing the flow of control.
> Since expressions can be evaluated at any time, one can freely replace variables
> by their values and vice versa — that is, programs are “referentially transparent”.
> This freedom helps make functional programs more tractable
> mathematically than their conventional counterparts.

다시 말해 함수형 프로그래밍이란 부수 효과가 없는 순수 함수를 중심으로 코드의 예측 가능성과 재사용성을 높이는 프로그래밍 방식을 뜻합니다.
부수 효과의 대표적인 예시로는 Exception이 있는데, 어떤 함수가 내부 구현에서 throw하는 Exception은
함수의 시그니쳐에 드러나지 않기 때문에 함수를 순수하지 않게 만듭니다.
(Java의 경우 `throws` 키워드를 이용해 특정 Checked Exception의 발생 가능성을 표현하는 등,
일부 언어에서는 Exception에 국한된 Effect System을 언어 차원에서 제공하기도 합니다.)
함수형 프로그래밍 패러다임에서는 일반적으로 `Either` 라는 타입을 리턴 타입으로 사용해 에러의 발생 가능성을 표현하고 함수를 순수하게 만들 수 있습니다.
아래는 클라이언트가 넘겨준 request를 우리의 도메인 모델로 변환하는 코드의 예시입니다.
도메인 모델마다 제약 사항이 있으므로, 클라이언트의 request를 변환할 때 실패할 가능성이 있을 것입니다.
이를 `Either[Errors, SomeDomainType]` 라는 타입으로 표현할 수 있고, 이 타입을 리턴하는 `decode` 함수를 만들어 사용할 수 있습니다.

```scala
// raw String을 Store.Id 타입으로 변환합니다. (실패할 수 있음을 Either 타입으로 표현)
def decodeStoreId(raw: String): Either[Error, Store.Id] = ???

// raw String을 Payment.Id 타입으로 변환합니다. (실패할 수 있음을 Either 타입으로 표현)
def decodePaymentId(raw: String): Either[Error, Payment.Id] = ???
```

그리고 `Either` 는 `flatMap` 함수를 통한 chaining을 지원하는데, 이를 이용해 request의 여러 필드들을 차례로 변환하는 코드를 작성할 수 있습니다.
(가독성을 위해 Scala의 [for-comprehension][]을 이용했습니다.)

```scala
// request.storeId와 request.paymentId를 각각 적절한 도메인 타입으로 변환합니다.
// 둘 중 하나라도 변환에 실패하면 해당 타입은 에러를 담고 있을 것입니다.
val validated: Either[Error, (Store.Id, Payment.Id)] =
  for {
    storeId   <- decodeStoreId(request.storeId)
    paymentId <- decodePaymentId(request.paymentId)
  } yield (storeId, paymentId)
```

이렇게 Exception을 사용하지 않고 `Either` type을 이용하면 어떤 코드 블락이 어떤 에러들을 리턴할 수 있는지를
타입을 통해 명확히 문서화할 수 있고, 코드의 플로우에 대한 예측 가능성이 한 층 향상된다는 장점이 있습니다.
이 부분에서는 Exception이라는 부수 효과를 type으로 encoding하는 방법에 대해 간략히 소개드렸지만, 실제로는 훨씬 더 많은 종류의 부수 효과가 존재합니다.
(외부 리소스의 획득 및 해제, mutable 변수의 값 변경, I/O operation 등등…)
이러한 모든 부수 효과를 타입으로 표현하고자 하는 시스템을 Effect System이라고 부르는데, 이에 대해서는 뒷부분에서 다시 자세하게 설명하겠습니다.

### 강력한 매크로 지원

Scala는 소스의 [AST(Abstract Syntax Tree)][ast]에 접근하고, 수정하고, 새로운 AST를 만들어낼 수 있는 강력한 매크로 기능을 지원합니다.
매크로를 적절히 이용하면 여러 곳에서 기계적이고 반복적으로 작성해야만 하는 코드의 양을 획기적으로 줄일 수 있고, 이를 통해 개발 생산성의 향상을 도모할 수 있습니다.

포트원에서는 마이크로서비스들 간의 통신에서 gRPC를 사용하고 있는데, 응답으로 나가는
protobuf message를 정의할 때 아래와 같은 형식을 따르도록 컨벤션을 맞추었습니다.

```proto
message SomeResponse {
  oneof result {
    Error error = 1;
    Data data = 2;
    ...
  }

  message Error {
    oneof error {
      // ex) InvalidArgument invalid_argument = 1;
      [ErrorName] [error_name] = 1;
      [ErrorName] [error_name] = 2;
      ...
    }
  }

  message Data {
    ...
  }
}
```

준수한 표현력을 가진 message이지만, 이를 통해 자동 생성된 Scala class 정의에 맞게
응답을 만들어주기 위해서는 아래와 같이 복잡한 객체 생성 코드를 작성해야 합니다.

```scala
val invalidArgument =
  SomeResponse(
    SomeResponse.Result.Error(
      SomeResponse.Error(
        SomeResponse.Error.Error.InvalidArgument(InvalidArgument()),
      ),
    ),
  )
```

어떤 RPC가 여러 개의 에러를 발생시킬 가능성이 있다고 하면, 에러가 발생하는 경우마다 모두 이런 복잡한 에러 응답 생성 코드를 작성해야 할 것입니다.
아래 코드는 포트원 V2에 존재하는 `빌링키 삭제` 기능에서, 경우에 맞게 에러 응답을 만들어주는 코드 예시입니다.

```scala
private def mapDeleteSchedulesError(failure: ScheduleService.DeleteFailure): DeleteSchedulesResponse =
  failure match {
    case ScheduleService.DeleteFailure.BillingKeyDeleted(_)  =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.BillingKeyAlreadyDeleted(grpc.BillingKeyAlreadyDeleted()),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.BillingKeyNotFound(_) =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.BillingKeyNotFound(grpc.BillingKeyNotFound()),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.NotFound(ids)         =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.BillingKeyNotFound(grpc.BillingKeyNotFound()),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.AlreadyDeleted(ids)   =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.ScheduleAlreadyDeleted(grpc.ScheduleAlreadyDeleted(ids)),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.AlreadyProcessed(ids) =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.ScheduleAlreadyProcessed(grpc.ScheduleAlreadyProcessed(ids)),
          ),
        ),
      )
  }
```

클래스 간의 계층 구조가 매우 복잡하기 때문에 이러한 코드는 결코 쉽게 작성할 수 없으며, 각각의 RPC에 존재하는 메세지가
하나의 추상 클래스로 묶이는 것도 아니기 때문에 일반적인 방법으로는 해당 코드를 공통화하는 것도 불가능합니다.

하지만 이 코드들은 분명한 패턴을 가지고 있기 때문에 기계적으로 작성할 수 있고, 그렇다면 매크로를 사용해 코드 생성을 자동화하는 것이 가능합니다.
매크로를 사용하면 위 코드를 아래와 같이 단순하게 만들 수 있습니다.
(해당 매크로의 구현은 다소 복잡하기 때문에 본 글에서 소개하지는 않고, 매크로를 주제로 한 별도의 글로 추후에 다시 소개하겠습니다.)

```scala
private def mapDeleteSchedulesError(failure: ScheduleService.DeleteFailure): DeleteSchedulesResponse =
  failure match {
    case ScheduleService.DeleteFailure.BillingKeyDeleted(_)  =>
      genErrorResponse[DeleteSchedulesResponse](grpc.BillingKeyAlreadyDeleted())
    case ScheduleService.DeleteFailure.BillingKeyNotFound(_) =>
      genErrorResponse[DeleteSchedulesResponse](grpc.BillingKeyNotFound())
    case ScheduleService.DeleteFailure.NotFound(ids)         =>
      genErrorResponse[DeleteSchedulesResponse](grpc.ScheduleNotFound(ids))
    case ScheduleService.DeleteFailure.AlreadyDeleted(ids)   =>
      genErrorResponse[DeleteSchedulesResponse](grpc.ScheduleAlreadyDeleted(ids))
    case ScheduleService.DeleteFailure.AlreadyProcessed(ids) =>
      genErrorResponse[DeleteSchedulesResponse](grpc.ScheduleAlreadyProcessed(ids))
  }
```

## Effect System: ZIO

Scala는 강력한 타입 시스템을 탑재한 것으로 잘 알려져 있습니다.
Effect System 은 타입 시스템의 확장으로, 어떤 프로그램이 실행되는 과정에서 발생할 수 있는 부수 효과들 또한 타입으로 표현하는 시스템을 말합니다.
Effect System을 이용하면 코드가 어떤 부수 효과를 가지고 있는지 명시적으로 표현할 수 있으므로
버그 발생 가능성을 낮추고 예측 가능성을 높인다는 기존 타입 시스템의 장점을 강화할 수 있으며,
더불어 effect를 type으로 추상화함으로써 재사용성과 테스트 용이성을 높일 수 있습니다.
위에서 소개한 `Either` 또한 실패 타입을 명시하고 Exception이라는 부수 효과를 제거할 수 있으므로 Effect System의 일부라고 할 수 있지만,
현실 세계에서는 Exception 이외에도 훨씬 많은 종류의 부수 효과가 존재합니다.
(I/O operation, mutable 변수의 값 변경, 외부 리소스의 획득/해제 등..)
이러한 모든 종류의 부수 효과를 타입으로 표현하는 Effect System 라이브러리가 Scala 진영에는 다수 존재했으며,
부수 효과를 명시적으로 표현하고 제어할 수 있다는 점은 버그가 없는 어플리케이션을 만들어야 하는 포트원의 상황에 잘 적용될 수 있다고 생각해
Effect System을 도입하기로 결정했습니다.

많은 Effect System 라이브러리 중 [ZIO][zio]는 가장 늦게 만들어졌음에도 불구하고 효율적인 런타임 구현과 실용적인 API로 많은 사랑을 받으며
최근 Scala 진영에서 가장 인기 있는 Effect System 라이브러리가 되었습니다.

(이미지 첨부: Scala Effect System별 GitHub Star History)

모든 기술이 그렇듯 Effect System 또한 장점만을 가지고 있는 것은 아닙니다.
Effect System을 이용하게 되면 함수가 가지고 있는 부수 효과의 종류에 따라 적절한 Effect Type 을 매번 골라야 하며
하나의 함수가 여러 종류의 부수 효과를 동시에 가지고 있는 경우 타입 구성이 복잡해져 오히려 유지보수 용이성을 떨어뜨리고
의도치 않게 runtime overhead 를 발생시키는 등의 단점 또한 존재합니다.
ZIO 는 이러한 단점을 보완하기 위해 많은 프로그램에서 흔히 사용되는 부수 효과들을 하나로 합쳐
다양한 상황에서 보편적으로 사용할 수 있는 단 하나의 Effect Type 을 제공합니다.
이 type 의 이름은 라이브러리 이름과 동일한 `ZIO` 이고, 해당 함수의 타입 파라미터 구성은 아래와 같습니다.

### `ZIO[R, E, A]`

- **R - Environment Type**. 해당 Effect 가 R type 의 의존성을 필요로 한다는 의미입니다.
- **E – Failure Type**. 해당 Effect 는 E type 의 값으로 실패할 수 있다는 의미입니다.
- **A – Success Type**. 해당 Effect 는 A type 의 값으로 성공할 수 있다는 의미입니다.

한마디로 `ZIO[R, E, A]` 타입은 `R` type 의 의존성을 필요로 하며, 실패했을 때는 `E` type 의 값을 produce하고
성공했을 때는 `A` type의 값을 produce하는 어떤 Effect를 의미합니다.
다시 말해 해당 타입은 `R => Either[E, A]` 타입의 effectful 한 버전이라고 할 수 있습니다.

### ZIO는 데이터 타입에 불과하다

ZIO는 순수 함수형 Effect System으로 함수형 프로그래밍 철학을 충실히 따르고 있으며,
ZIO data type은 그 자체로는 아무런 부수 효과를 발생시키지 않는 정적인 data type입니다.
그렇기 때문에 ZIO를 이용해 작성한 함수는 부수 효과를 실제로 발생시키는 것이 아닌 부수 효과를 “서술”하는 일을 하게 되며,
단순히 ZIO의 data type을 만드는 일을 하게 됩니다.
그렇게 만들어진 ZIO는 동작에 대한 서술을 모두 담고 있어 나중에 원할 때면 언제든 평가(evaluation)될 수 있으며,
이미 만들어진 ZIO를 다른 ZIO와 합치거나 반복/재시도 등의 새로운 기능을 덧붙이는 등의 작업을 매우 안전하고 손쉽게 할 수 있습니다.

이렇게 동작에 대한 서술(description)과 평가(evaluation)을 분리하는 테크닉을 Lazy Evaluation이라고 합니다.
우리는 Lazy Evaluation을 통해 **코드의 합성 가능성/유지보수 용이성/예측 가능성 등을 극대화**할 수 있게 됩니다.

### **ZIO를 이용해 Effect 조립하기**

동시성 프로그래밍 혹은 비동기 프로그래밍을 할 때 이러한 Lazy Evaluation을 잘 활용할 수 있는데,
포트원 콘솔을 통해 가입한 상점의 정보를 얻어오는 코드를 예시로 들어보겠습니다.
기본적인 상점 정보와 더불어 결제에 관한 구체적인 정보도 가져와야 하는데,
이 둘은 각각 `getStore`와 `getPaymentSettings` 라는 RPC를 호출하여 가져올 수 있습니다.

```scala
val getStore: IO[StatusException, GetStoreResponse] =
  storeService.getStore(getStoreRequest)

val getPaymentSettings: IO[StatusException, GetPaymentSettingsResponse] =
  storeService.getPaymentSettings(getPaymentSettingsRequest)
```

위 코드에서 주목할 점은 두 RPC가 리턴하는 타입이 `Response`가 아니라 `IO[StatusException, Response]` 라는 점입니다.
해당 RPC들은 실제로 부수 효과를 발생시키는 것이 아닌, 부수 효과를 서술하는 ZIO 타입을 리턴하고 있습니다.
(`IO[E, A]` 타입은 `ZIO[Any, E, A]` 타입의 alias입니다.)
Functional Effect System을 사용하지 않는 코드라면 아마 `getStore` 와 `getPaymentSettings` 함수를
호출하는 즉시 I/O가 발생할 것이고, 이 두 I/O는 병렬화되지 못하고 순차적으로 발생할 것입니다.
하지만 우리는 ZIO 타입을 이용해 함수를 순수하게 만들었으므로 이 Effect들을 우리가 원하는대로 조립할 수 있습니다.

```scala
val getStore: IO[StatusException, GetStoreResponse] =
  storeService.getStore(getStoreRequest)

val getPaymentSettings: IO[StatusException, GetPaymentSettingsResponse] =
  storeService.getPaymentSettings(getPaymentSettingsRequest)

// Effect 조립하기: zipPar(2개의 Effect를 concurrent하게 실행)를 이용
val getStoreAndSettings = getStore.zipPar(getPaymentSettings)
```

위 예시는 두 개의 작업을 동시에 실행해 결과를 Tuple로 모으는 코드라면, 두 개의 작업을 동시에 실행한 후 먼저 도착한 것만 취하고
다른 작업의 실행을 즉시 취소하는 코드는 어떻게 작성할 수 있을까요?
실행 흐름 간 경쟁을 Effect System 없이 구현하려면
훨씬 더 복잡하고 난해한 low level API를 이용해 로직을 작성해야 할 것입니다.
아래는 Java에서 스레드 간 경쟁을 구현하는 코드입니다.

```java
import java.util.Random;
import java.util.concurrent.CountDownLatch;

public class RaceExample {
  public static void main(String[] args) throws InterruptedException {
    Random rand = new Random();
    int numThreads = 2; // 2개의 스레드 생성
    CountDownLatch latch = new CountDownLatch(1);

    WorkerThread[] threads = new WorkerThread[numThreads];

    for (int i = 0; i < numThreads; i++) {
      threads[i] = new WorkerThread(i, latch, rand);
      threads[i].start();
    }

    // 두 개의 스레드 중 먼저 완료되는 한 스레드만을 기다립니다.
    latch.await();

    // 아직 실행 중인 다른 하나의 스레드를 interrupt 합니다.
    for (int i = 0; i < numThreads; i++) {
      if (!threads[i].isDone()) {
        threads[i].interrupt();
      }
    }
  }

  static class WorkerThread extends Thread {
    private int id;
    private CountDownLatch latch;
    private volatile boolean done = false;
    private Random rand;

    public WorkerThread(int id, CountDownLatch latch, Random rand) {
      this.id = id;
      this.latch = latch;
      this.rand = rand;
    }

    @Override
    public void run() {
      try {
        // 스레드에서 특정 작업을 수행합니다.
        System.out.println("[Thread " + id + "] COMPLETED");
        done = true;
      } catch (InterruptedException e) {
        System.out.println("[Thread " + id + "] INTERRUPTED");
      } finally {
        latch.countDown(); // CountDownLatch 를 감소시켜 작업이 완료됐음을 알립니다.
      }
    }

    public boolean isDone() {
      return done;
    }
  }
}
```

얼핏 봐도 상당히 복잡해보이는 코드입니다.
Java의 Thread와 CountDownLatch, volatile 키워드 등 난해한 low level API를
많이 사용해야 하므로 이는 생산성을 떨어뜨리고 버그의 발생 가능성을 높입니다.
ZIO를 이용하면 `raceEither` 함수를 이용해 동시 작업 간 경쟁 코드를 쉽고 안전하게 구현할 수 있습니다.
(Java의 Thread는 void 값만을 리턴하는 반면 ZIO는 실행이 완료된 후 type-safe하게 값을 리턴한다는 점도 큰 장점입니다.)

```scala
// raceEither를 이용하여 먼저 실행이 완료된 ZIO만 취하기
val getStoreOrSettings = getStore.raceEither(getPaymentSettings)
```

### ZIO를 이용해 반복 작업 구현하기

특정한 작업을 우리가 원하는 주기로 반복하고 싶은 경우에는 어떻게 해야 할까요?
ZIO에서는 실행 계획을 추상화한 `Schedule` 객체를 제공하고 있어, 적절한 Schedule을 만들고 이를 ZIO에 적용하기만 하면 됩니다.
아래의 코드는 ZIO에서 제공하는 기본적인 Schedule 생성 함수의 예시입니다.

```scala
// 예시1) 딜레이 없이 5회 반복
val recurs = Schedule.recurs(5)

// 예시2) 10ms의 주기로 영원히 반복
val spaced = Schedule.spaced(10.milliseconds)

// 예시3) 10ms에서 시작해 exponential하게 주기를 늘려가며 반복
val exponential = Schedule.exponential(10.milliseconds)
```

또한 아래와 같이 실행 계획을 합성할 수도 있습니다.

```scala
// 예시 1) 1초 간격으로 10번 동안 반복
val schedule = Schedule.recurs(10) && Schedule.spaced(1.second)

// 예시 2) 반복 주기를 exponential하게 증가시키되, 최대 주기는 10초
val schedule = Schedule.exponential(100.milliseconds) && Schedule.spaced(10.second)

// schedule을 이용하여 ZIO를 반복 실행하기
val getStoreRepeatedly =
  storeService.getStore(getStoreRequest).schedule(schedule)
```

지금까지 ZIO를 이용해 함수의 부수 효과를 제거하고,
ZIO는 순수한 데이터 타입이라는 점을 이용해 ZIO를 자유롭게 합성하고 조작하는 방법에 대해 알아보았습니다.
처음엔 이러한 접근법이 다소 낯설게 느껴질 수 있으나,
타입으로 효과를 표현한다는 것은 이미 여러번 언급했듯이 함수가 하는 일을 훨씬 더 명시적으로 표현하여
버그의 발생 가능성을 낮추고 코드의 예측 가능성을 높이는 데 기여합니다.
실제로 ZIO 라이브러리를 꽤 오랜 기간 동안 사용하면서 그 실효성과 사용성을 검증해 온 포트원 개발팀의 입장에서는
Effect System을 도입하기로 한 것이 초반의 러닝 커브를 감안하고도 적절한 의사결정이었다고 생각하고 있습니다.

흔히 라이브러리는 외부 의존성으로 취급되어 어플리케이션을 만들 때면 이 라이브러리 의존성을 격리하여 언제든 대체할 수 있는 형태로 아키텍쳐를 구성하곤 합니다.
그러나 Effect System 을 사용하게 되면 프로젝트 도처에 해당 의존성을 가지는 코드가 존재하게 되므로 Effect System 라이브러리는
사실상 프로젝트를 구성하는 핵심 요소로 기능하게 될 것입니다.
대체하기가 힘든 만큼, 우리가 사용하는 Effect System은 효과적인 런타임과 사용성 있는 API를 제공해야 하며,
해당 Effect System을 중심으로 견고한 생태계가 형성되어 있어야 합니다.
ZIO는 그러한 조건에 잘 부합하는 Effect System이었고 현재까지는 아주 만족스럽게 사용 중입니다.

## 마무리

이번 글에서는 포트원 V2 이야기의 첫 시작으로, 포트원 V2 모듈의 코드베이스를 구성하고 있는 핵심 기술들에 대해 살펴보았습니다.
포트원은 수많은 고객사의 결제 요청을 감당해야 하는 시스템인 만큼 버그 없이 안정적으로 서빙할 수 있어야 하며,
디지털 커머스 회사들의 성장을 가속화한다는 포트원의 미션에 맞게 더 혁신적인 기능들을 빠르게 추가할 수도 있어야 합니다.
이러한 요구사항을 만족하기 위해 신중한 고민을 거쳐 의사결정을 했고, 그렇게 탄생한 포트원 V2 모듈은 수많은 디지털 커머스 회사들과 함께할 준비를 마쳤습니다.
포트원 V2에서는 커머스 회사들이 결제와 관련된 고민을 덜 수 있도록 멋진 기능들을 많이 출시할 예정이니, 앞으로 포트원 V2 모듈의 행보를 지켜봐주세요!

[scala]: https://scala-lang.org/

[why-fp-matters]: https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf

[for-comprehension]: https://docs.scala-lang.org/tour/for-comprehensions.html

[ast]: https://en.wikipedia.org/wiki/Abstract_syntax_tree

[zio]: https://zio.dev/


# https://developers.portone.io/blog/posts/2024-03/tgs

---
title: 포트원이 여러 PG사의 인터페이스를 연동하는 방법
description: 여러 PG사의 인터페이스를 효율적으로 연동하기 위한 결정사항들을 소개합니다.
author: ChanceKim
date: 2024-03-11T15:00:00.000Z
tags:
  - Backend
  - MSA
  - gRPC
  - DDD
  - Typed Error
---

소프트웨어 엔지니어로서 새로운 서비스를 개발하다 보면 결제 기능을 구현해야 하는 경우가 생깁니다.
일반적으로 엔지니어들은 결제 기능을 구현하기 위해 특정 PG사가 제공하는 연동 가이드를 따라가며 개발을 진행하고, 서비스를 런칭합니다.
그러나 포트원은 여러 PG사의 인터페이스를 추상화하여 어떤 PG사를 사용하는지와 관계없이 통일된 인터페이스를 제공하는 것을 핵심 가치로 삼고 있습니다.
따라서 포트원의 엔지니어들은 일반적인 PG 연동 작업과는 다른 차원의 문제들을 해결해 나가야 합니다.

다른 한편으로 포트원은 현재 모놀리식 아키텍처(V1)에서 MSA(V2)로의 전환을 진행중입니다.
V1을 완전히 버리고 V2로 넘어가는 것이 아니기 때문에 하나의 PG사를 새로 연동할 때, V1과 V2 모두에 연동해주어야 하죠.
흔히 잘 운영되는 시스템의 특정 모듈을 변경하는 작업을 달리는 자동차의 바퀴를 갈아 끼우는 일에 빗대어 이야기하곤 하는데,
포트원의 현재 상황은 나란히 달리고 있는 구형 자동차와 신형 자동차의 바퀴를 한꺼번에 갈아 끼워야 하는 상황입니다.

이 글에서는 이와 같은 어려움 속에서 최적의 업무 효율을 달성하기 위해 선택한 아키텍처 레벨 및 단일 서비스 레벨의 결정사항에 대해 설명드리려 합니다.

## PG사 간의 인터페이스 차이

먼저, PG사 간의 인터페이스가 얼마나 다른지를 살펴보기 위해 예시를 들어 보겠습니다.
아래는 대표적인 간편결제사 두 곳에서 결제창을 생성하기 위해 필요한 파라미터 목록입니다.

- 카카오페이 결제 파라미터

|       Name       |   타입   |필수여부|                                                         설명                                                         |
|:----------------:|:--------:|:------:|:--------------------------------------------------------------------------------------------------------------------:|
|        cid       |  String  |    O   |                                                   가맹점 코드, 10자                                                  |
|    cid\_secret   |  String  |    X   |                                   가맹점 코드 인증키, 24자, 숫자와 영문 소문자 조합                                  |
|partner\_order\_id|  String  |    O   |                                              가맹점 주문번호, 최대 100자                                             |
| partner\_user\_id|  String  |    O   |                                              가맹점 회원 id, 최대 100자                                              |
|    item\_name    |  String  |    O   |                                                  상품명, 최대 100자                                                  |
|    item\_code    |  String  |    X   |                                                 상품코드, 최대 100자                                                 |
|     quantity     |  Integer |    O   |                                                       상품 수량                                                      |
|   total\_amount  |  Integer |    O   |                                                       상품 총액                                                      |
| tax\_free\_amount|  Integer |    O   |                                                   상품 비과세 금액                                                   |
|    vat\_amount   |  Integer |    X   |상품 부가세 금액 값을 보내지 않을 경우 다음과 같이 VAT 자동 계산 (상품총액 - 상품 비과세 금액)/11 : 소숫점 이하 반올림|
|  green\_deposit  |  Integer |    X   |                                                       컵 보증금                                                      |
|   approval\_url  |  String  |    O   |                                         결제 성공 시 redirect url, 최대 255자                                        |
|    cancel\_url   |  String  |    O   |                                         결제 취소 시 redirect url, 최대 255자                                        |
|     fail\_url    |  String  |    O   |                                         결제 실패 시 redirect url, 최대 255자                                        |
| available\_cards |JSON Array|    X   |                             결제 수단으로써 사용 허가할 카드사를 지정해야 하는 경우 사용                             |

- 네이버페이 결제 파라미터

|           Name          |  타입 |필수여부|                                                                                                                                                                                                                                                         설명                                                                                                                                                                                                                                                         |
|:-----------------------:|:-----:|:------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|      merchantPayKey     | String|    O   |                                                                                                                                                                                                                      가맹점 주문내역 확인 가능한 가맹점 결제번호 또는 주문번호를 전달해야 합니다                                                                                                                                                                                                                     |
|merchantPayTransactionKey| String|        |                                                                                                                                                                                                      가맹점 주문내역 히스토리 확인이 가능한 가맹점 결제 트랜잭션 번호 또는 주문 트랜잭션 번호를 전달해야 합니다.                                                                                                                                                                                                     |
|     merchantUserKey     | String|        |                                                                                                                                                                                                                   가맹점의 사용자 키(개인 아이디와 같은 개인정보 데이터는 제외하여 전달해야 합니다)                                                                                                                                                                                                                  |
|       productName       | String|    O   |                                                                                                                                                                                                                                대표 상품명. 예: 장미의 이름 외 1건(X), 장미의 이름(O)                                                                                                                                                                                                                                |
|       productCount      | Number|    O   |                                                                                                                                                                                                                         상품 수량 예: A 상품 2개 + B 상품 1개의 경우 productCount 3으로 전달                                                                                                                                                                                                                         |
|      totalPayAmount     | Number|    O   |                                                                                                                                                                                                                                          총 결제 금액. 최소 결제금액은 10원                                                                                                                                                                                                                                          |
|      taxScopeAmount     | Number|    O   |                                                                                                                                                                                                                과세 대상 금액. 과세 대상 금액 + 면세 대상 금액 + 컵 보증금 금액 (옵션) = 총 결제 금액                                                                                                                                                                                                                |
|     taxExScopeAmount    | Number|    O   |                                                                                                                                                                                                                면세 대상 금액. 과세 대상 금액 + 면세 대상 금액 + 컵 보증금 금액 (옵션) = 총 결제 금액                                                                                                                                                                                                                |
| environmentDepositAmount| Number|        |                                                                                                                                                                    1회용 컵에 담은 상품의 결제건인 경우에만 필수값이며, 그 외에는 전달할 필요가 없습니다.  컵 보증금 금액. 과세 대상 금액 + 면세 대상 금액 + 컵 보증금 금액 (옵션) = 총 결제 금액                                                                                                                                                                    |
|        returnUrl        | String|    O   |                                                                                                                    결제 인증 결과 전달 URL, 결제 완료 후 이동할 URL(returnUrl + 가맹점 파라미터 전달이 가능합니다) 네이버페이는 결제 작업 완료 후, 가맹점이 등록한 returnUrl로 리디렉션을 수행합니다 가맹점은 이를 활용하여 내부 처리를 수행하거나 구매자에게 결제 결과 화면을 노출할 수 있습니다                                                                                                                    |
|      purchaserName      | String|        |                                                                                                                                                                                                       구매자 성명. 결제 상품이 보험 및 위험 업종 등인 경우에만 필수 값입니다. 그 외에는 전달할 필요가 없습니다                                                                                                                                                                                                       |
|    purchaserBirthday    | String|        |                                                                                                                                                                                                구매자 생년월일(yyyymmdd). 결제 상품이 보험 및 위험 업종 등인 경우에만 필수 값입니다. 그 외에는 전달할 필요가 없습니다                                                                                                                                                                                                |
|      extraDeduction     |Boolean|        |                                                                                                                                              도서 / 공연 / 영화 소득공제 대상 여부. 문화체육관광부에서 인증한 소득공제 제공 사업자가 대상 상품을 판매하는 경우 필수 값입니다. 해당 파라미터를 사용하기 위해서는 별도 요청을 주셔야 합니다. true : 대상, false : 비 대상                                                                                                                                              |
|        useCfmYmdt       | String|        |이용완료일(yyyymmdd) 가맹점 타입이 이용완료일 정산 또는 이용완료일 포인트 적립인 경우 필수 해당 값을 기준으로 이용완료일 정산의 경우 '정산기준일' 또는 이용완료일 포인트 적립인 경우 '포인트적립 기준일'이 지정됩니다. 이용완료일은 반드시 결제일과 같거나 결제일 이후여야 하며, 이용완료일이 결제일자 이전으로 적용될 경우 에러(InvalidUseCfmYmdt)가 발생됩니다. 이용완료일이 결제일자 기준으로 1년을 초과할 경우 별도 에러가 발생되지는 않으나 전달한 이용완료일(useCfmYmdt) 값이 결제일자 +365일로 조정 처리됩니다.|
|  merchantExtraParameter | String|        |                                                                                                                                                                                            가맹점 자체적으로 추가 구분값으로 활용 가능한 별도의 예비 필드 (개인 아이디와 같은 개인정보 데이터는 제외하여 전달해야 합니다)                                                                                                                                                                                            |
|       productItems      | Array |    O   |                                                                                                                                                                                                                                                   productItem 배열                                                                                                                                                                                                                                                   |
|     subMerchantInfo     | Object|        |                                                                                                                                                                                                                                하부가맹점 정보. PG 업종 가맹점인 경우에만 필수값입니다                                                                                                                                                                                                                               |

위처럼 같은 기능을 하는 인터페이스임에도 PG사에 따라 파라미터 명과 파라미터 타입, 필수 파라미터 목록 모두 상이한 것을 볼 수 있습니다.
심지어 사용하는 통신 프로토콜마저 PG사마다 상이하죠.
2개의 PG사만을 비교해도 이러한 차이가 뚜렷한데, 포트원은 30개가 넘는 PG사 모듈을 제공하고 있기 때문에 인터페이스를 효과적으로 추상화하는 것이 매우 중요한 과제입니다.

## 아키텍처 레벨 결정사항

### 추상화만을 담당하는 마이크로서비스

앞서 설명드린 것처럼 현재 포트원은 모놀리식 아키텍처(V1)에서 MSA(V2)로의 전환 작업을 진행 중입니다.
이러한 전환 과정에서 V1과 V2를 모두 운영하며 새로운 PG를 연동하려면 V1과 V2 양쪽에 모두 연동 작업을 수행해야 합니다.
이는 개발 리소스를 두 배로 소모하는 일이며 매우 비효율적인 작업입니다.

이러한 비효율을 최소화하기 위해 저희는 V1과 V2에서 모두 사용 가능한 PG 인터페이스 추상화용 마이크로서비스인
TGS(Transaction Gateway Service)를 도입했습니다.
이 서비스 도입을 통해 V1과 V2에서 고객사의 요청을 처리하는 서비스들은 어떤 PG사로 결제가 이루어지든 통일된 인터페이스를 이용해 결제를 발생시킬 수 있습니다.
포트원이 고객사에게 주는 편리함을 포트원 내부에서는 TGS가 다른 서비스들에게 제공하는 것이죠.

다만 TGS의 도입에 앞서 선행돼야 하는 작업이 있었습니다.
모놀리식 서비스인 V1의 코드를 일부 수정하여 PG사의 인터페이스를 직접 호출하는 것이 아니라 TGS의 인터페이스를 호출하도록 변경해주어야 했습니다.
이 작업 역시 작지 않은 작업이었지만 V1과 V2가 언제까지 함께 운영될지 모르는 상황에서
서비스를 계속해서 발전시켜 나가려면 어느 정도 시간이 들더라도 반드시 해야만 하는 일이라는 결론에 도달했습니다.

TGS가 PG의 인터페이스를 추상화하는 역할을 담당하게 되면서 외부로부터 결제 요청을 처리하는 서비스는 결제 데이터를 저장하고 서빙하는 본연의 역할에 충실할 수 있게 됐습니다.

### gRPC를 통한 API 제공

(이미지 첨부: 효율적인 PG사 연동을 위한 아키텍처)

TGS가 API를 제공하는 방식 역시 아키텍처를 설계할 때의 주요 결정사항 중 하나였습니다.
가장 흔히 사용되는 방식으로는 REST API가 있지만 저희는 gRPC를 이용하여 API를 제공하기로 결정했습니다.
저희는 gRPC가 가지는 여러 장점 중 아래 두 가지에 집중했습니다.

#### 1. 인터페이스 우선 개발

TGS는 포트원의 내부 서비스와 PG사의 중간 다리 역할을 하는 만큼 신규로 연동할 PG사가 기존에 연동된 PG사에서 요구하던 파라미터 이외의 파라미터를 요구하거나,
기존에 연동된 PG사가 새로운 파라미터를 제공하는 경우에는 인터페이스의 수정이 불가피합니다.
만약 이런 수정 작업 중 TGS의 작업자가 변경된 인터페이스의 공유를 깜빡하는 경우에는 외부로 API를 제공하는 서비스들에서 해당 기능을 제공하기 어려워지기 때문에,
TGS 작업자는 다른 서비스로 인터페이스를 공유하는 것이 매우 중요합니다.

gRPC를 사용하는 경우 proto file로 인터페이스를 우선 정의하고 해당 파일을 기반으로 생성된 서버/클라이언트 코드를 사용하여 통신하게 됩니다.
인터페이스가 먼저 정의가 돼야지만 서버 기능 추가가 가능하기 때문에, proto file에 수정이 있는 경우 클라이언트가 되는 서비스의 개발자들로부터
반드시 리뷰를 받도록 PR 정책을 수립하면 인터페이스가 공유되지 않는 상황을 프로세스적으로 방지할 수 있습니다.

#### 2. 언어별로 자동 생성되는 클라이언트

위에서 언급했듯이 gRPC는 proto file로 작성된 인터페이스를 기반으로 클라이언트 코드를 생성할 수 있습니다.
현재 V1, V2는 각각 PHP와 Scala를 사용하여 개발 돼 있기 때문에 proto file을 기반으로 클라이언트 코드를 생성할 수 있다면,
TGS의 인터페이스가 변경되더라도 각기 다른 언어로 작성된 클라이언트 코드를 수정해주어야 한다는 부담이 사라지게 됩니다.

물론 REST API의 경우 이미 널리 사용되고 있어 학습을 위한 기간이 거의 필요하지 않고, 다양한 라이브러리들이 지원된다는 장점이 있지만,
포트원 내부 서비스와 PG사들 사이에서 인터페이스를 추상화해 주어야 한다는 목적에 맞춰 보았을 때
위 2가지의 장점이 REST API가 가지는 장점보다 더 많은 이득을 준다고 판단되어 최종적으로 gRPC를 사용하고 있습니다.

## 서비스 레벨의 결정사항

### Domain Driven Design(DDD)

TGS는 PG사마다 다른 용어와 개념을 공통화하여 도메인 영역을 최대한 간결하게 만들어야 합니다.
만약 PG사에서 사용되는 용어가 도메인 영역에 침범하도록 개발을 진행한다면
도메인 영역은 너무 많은 개념을 담게 되어 처음부터 개발을 해온 사람이 아니라면 도저히 이해할 수 없는 서비스가 돼버릴 것입니다.

실제로 TGS의 초기 구현은 이와 같은 문제를 가진 채로 개발이 진행됐습니다.
TGS는 프레젠테이션, 어플리케이션, 도메인, 인프라 레이어로 이루어진
[레이어드 아키텍처](https://www.baeldung.com/cs/layered-architecture)를 따릅니다.
아래 사진은 이런 구조에서 토스페이먼츠를 위한 클래스들이 도메인 레이어를 침범하여 포트원 도메인 클래스와 혼재되어 있는 모습을 보여주는 사진입니다.

(이미지 첨부: 개발초기 TGS의 도메인 레이어)

이대로 계속 개발을 진행했다면 TGS에 연동하는 PG사가 늘어남에 따라 도메인 레이어가 계속해서 비대해질 수밖에 없었을 것입니다.
어플리케이션 레이어의 경우에는 상황이 더 심각합니다.
비즈니스 로직은 포트원 도메인 엔티티에 정의돼 있기 때문에 어플리케이션 로직에서는 PG사별 객체를 포트원 엔티티로 전환한 후 비즈니스 로직을 실행하고,
이를 다시 프레젠테이션 레이어로 올려보내주어야 하죠.
이렇게 프레젠테이션 레이어를 제외한 모든 레이어에 구석구석 침투해 있는 PG사별 클래스로 인해 프로젝트 전체 구조를 파악하지 못한 경우에
신규 기능 연동이 매우 어려운 상황이었습니다.

이와 같은 문제를 해결하기 위해서 TGS에는 DDD 방법론을 도입하여,
도메인 영역에서 사용되는 용어들을 정리하고 이를 기반으로 어플리케이션 및 프레젠테이션 영역을 보다 깔끔하게 만들어 주기로 결정했습니다.
TGS에 DDD를 도입하는 과정은 크게 3단계로 나누어 진행됐습니다.

#### 1. 보편 언어(Ubiquitous Language) 정리

보편 언어를 정리하는 일은 DDD의 시작이라고 할 수 있습니다.
명확하게 정리된 보편 언어는 도메인을 이해하기 쉽게 만들어주고, 구성원들간의 미스 커뮤니케이션이 일어나지 않도록 도움을 줍니다.
TGS는 여러 PG사와의 통신을 담당하는 서비스인 만큼, 여러 PG 연동을 경험한 분들에게 도움의 받아 보편 언어를 정리했습니다.
정리된 보편 언어는 항상 접근이 간편한 곳에 위치해 있어야 하기 때문에 저희는 이를 위한 레포지토리를 생성하고 용어들을 마크다운 파일로 정리했습니다.

(이미지 첨부: 보편 언어를 위한 레파지토리)

#### 2. 보편 언어를 이용해 도메인 엔티티와 값 객체(VO) 정의

정리된 보편 언어는 코드에도 그대로 녹아들어야 합니다. 그래야만 엔지니어와 관련자 사이에 통일된 언어로 커뮤니케이션이 가능하기 때문이죠.
리팩토링 전 KSNET의 API를 통해 발생한 거래를 저장하기 위한 클래스와 리팩토링 후의 클래스 모습입니다.
변경 전에는 `aid`, `tid`, `tradeDate` 처럼 PG사에서 사용하는 언어를 이용해 데이터를 저장했다면,
변경 후에는 포트원의 보편 언어로 모두 대체된 모습을 볼 수 있습니다.

<div class="hint" data-style="info">

클래스명에 PG사의 명칭이 들어가있어서 도메인 엔티티가 아니라고 느껴질 수 있지만,
각 PG사와의 거래는 분명하게 TGS의 [bounded context](https://martinfowler.com/bliki/BoundedContext.html) 안에 존재하는 개념이기에 PG사의 명칭을 클래스명에 포함시켰습니다.

</div>

(이미지 첨부: 보편 언어를 사용하는 클래스)

#### 3. 각 PG사를 위한 데이터 클래스는 인프라 레이어로 이동

도메인 레이어를 보편 언어를 이용한 엔티티와 값 객체로 채우게 되면서 PG사를 위한 클래스들은 자연스럽게 인프라 레이어로 이동시켰습니다.
그리고 인프라 레이어에서 PG사의 클래스를 도메인 엔티티와 값 객체로 변환하여 반환하게 만들었습니다.
이제 PG사의 클래스들은 인프라 레이어에서 DTO로써만 존재하게 됐습니다.
그리고 자연스럽게 PG사와 통신하는 Client 구현체는 부패 방지 계층의 역할을 띄게 됩니다.
부패 방지 계층이란 연동하고자 하는 시스템과 기존 시스템 사이에 존재하는 도메인 모델의 차이를 기존 시스템에 맞게 변환하기 위한 계층으로,
도메인 레이어를 외부의 용어와 완벽하게 분리할 수 있게 도와줍니다.

(이미지 첨부: 인프라 레이어에 존재하는 PG사별 Client 구현체)

도메인 레이어와 어플리케이션 레이어를 수정하는 개발자는 더 이상 인프라 레이어의 구현에 대해서 알 필요가 없습니다.
그저 Client가 반환한 도메인 엔티티와 값 객체를 이용해 로직을 구성하기만 하면 되는 것이죠.

3단계로 진행된 리팩토링 과정에서 사실 대단한 DDD 기법을 사용하지는 않았습니다.
Aggregate, CQRS, 이벤트 소싱 등의 기법은 전혀 등장하지 않았죠.
그렇지만 보편 언어를 정의하여 커뮤니케이션의 효율을 높이고,
기술 의존도가 없는 도메인 레이어에 비즈니스 로직을 응축해 놓음으로써 이식성이 높아졌기에 DDD가 추구하던 본질적인 장점은 취할 수 있게 되었습니다.
덤으로 간단해진 어플리케이션 레이어 로직 덕분에 PG 연동 속도도 빨라지게 되어 생산성도 비약적으로 증가했습니다.

### Typed Error 활용

결제 도메인에서 에러 처리는 다른 도메인보다 특히나 중요합니다. 잘못된 에러 처리로 인해 결제 내역이 사라진다거나 결제가 여러 번 처리된다면 매우 큰 혼란이 생길 것입니다.
명확한 에러 처리를 위해서는 특정 함수에서 어떤 에러가 발생할 수 있는지 문서화하는 것이 중요하나,
문서와 주석은 outdated 되기 쉽다는 단점이 있습니다.
저희는 이런 문제를 해결하기 위한 방법으로 함수형 프로그래밍을 위한 Kotlin 라이브러리인
[Arrow](https://arrow-kt.io/)의 typed error를 적극적으로 활용하고 있습니다.

Typed error를 사용하면 특정 함수에서 발생할 수 있는 에러를 코드를 통해 문서화할 수 있기 때문에 outdated 될 염려가 없고,
에러 처리가 강제되기 때문에 특정 에러 케이스를 놓친다거나 하는 문제가 발생할 염려가 적습니다.
예를 들어, Arrow를 사용해 함수 시그니처에 typed error를 적용하면 아래와 같은 코드를 작성하게 됩니다.
Typed error를 적용함으로써 예시 코드의 `pay()` 함수에선 `AmountTooBig`, `InvalidCardInfo`, `TransactionAlreadyExists`
에러가 발생할 수 있다는 것을 코드 레벨에서 확인할 수 있습니다.

```kotlin
interface Example {
    fun pay(): Effect<PayError, Unit>

    sealed interface PayError {
      data object AmountTooBig: PayError
      data object InvalidCardInfo: PayError
      data object TransactionAlreadyExists: PayError
    }
}
```

반면 typed error를 사용하는 코드는 이런 의문을 가지게 합니다. ‘Kotlin에서 의도적으로 삭제한 checked exception를 다시 되살리는 것 아닌가?’.
네, typed error는 checked exception과 거의 동일한 의도로 사용됩니다.
Kotlin에서 checked exception을 삭제한 주요 이유는 대부분의 exception은 처리할 수 없는 exception이기 때문입니다.
하지만 저희는 꼭 처리해 주어야 하는 예외 케이스가 있다면 checked exception을 사용하는 것이 그렇지 않은 경우보다 코드 퀄리티를 높여줄 수 있다고 생각했으며,
결제가 예외 처리에 매우 민감한 도메인이라는 점을 감안하여 checked exception을 대신할 수 있는 typed error를 사용하고 있습니다.

물론 typed error를 잘못 사용할 경우에는 checked exception이 가지던 문제점들이 그대로 발생할 수 있습니다.
때문에 올바른 방법으로 사용하는 것이 매우 중요하며, 이에 대한 내용은 추후 별도의 글에서 다뤄보도록 하겠습니다.

## 마치며

지금까지 포트원이 여러 PG사의 인터페이스를 효율적으로 연동하기 위해 논의했던 기술적 결정사항들에 대해 알아보았습니다.
부디 이 글이 비슷한 문제를 해결하고자 하는 분들에게 작게나마 도움이 된다면 좋겠습니다.

포트원은 지금도 고객사에게 더 좋은 결제 경험을 제공하기 위해 노력하고 있습니다.
저희와 함께 간편한 결제 연동이라는 문제를 함께 풀어나가고 싶으신 분이 계시다면 포트원의 문을 두드려 주시면 감사하겠습니다!


# https://developers.portone.io/blog/posts/2024-04/gcp-datastream

---
title: 'Data Evolution: The Shift from AWS DMS to GCP Datastream'
description: >-
  Gives an overview of the PortOne Data Infrastructure and the migration story
  from AWS DMS to GCP Datastream.
author: chandulal
date: 2024-04-03T15:00:00.000Z
tags:
  - Data Infra
  - Data Ingestion
  - GCP
  - Data Engineering
---

<div class="hint" data-style="info">이 글은 PortOne Global 소속 엔지니어가 작성한 글입니다.</div>

## Introduction

At PortOne, we use AWS DMS to capture changes from our service databases
using Change Data Capture (CDC) and ingest them into our Data Lake.
We store all our CDC data in AWS S3 and merge it with the BigQuery table
every hour using Airflow as a scheduler.
Our pipeline code, written in Python's Pandas library,
merges incremental changes into the BigQuery table.
We have multiple mart tables built on top of the raw tables in BigQuery.

Although this solution has worked well for us, we encountered several challenges along the way:

- **High Latency:** at least an hour.

- **Manual Backfill:** requires multiple steps to backfill data
  from the source database to the BigQuery table.

- **Missing Rows:** There are instances of missing records if there are delays or complications
  with the writing process of AWS DMS.

- **High Maintenance:** the solution requires multiple components to maintain,
  such as AWS DMS, Airflow, and a Kubernetes cluster to run all our pipelines.

Our approach involves utilizing GCP Datastream as our Change Data Capture (CDC) solution
to address and overcome the aforementioned challenges.

### About GCP Datastream

GCP Datastream is a managed CDC service provided by Google Cloud Platform (GCP)
that enables real-time, automated, and reliable data replication
from various sources to target destinations.
It is a serverless and easy-to-use change data capture and replication service
that directly ingests data from sources such as MySQL and Postgres into BigQuery.

It supports integrating various Google Cloud services,
including BigQuery, Cloud Storage, and Pub/Sub.

## Data Infrastructure Change

### Before

(이미지 첨부: Architecture using AWS DMS)

Here, we utilize AWS Database Migration Service(DMS) to capture changes in data
from six to seven databases. The DMS consistently copies CDC data from RDS
to Amazon S3 with hourly partitioning on S3.
Next, Airflow initiates a DAG every hour to combine new CDC data from S3 to BigQuery.
The underlying job, written in Pandas DataFrame,
runs on Kubernetes and upserts the data in BigQuery.

### After

(이미지 첨부: Architecture using GCP Datastream)

Here, we simplified the previous architecture
by removing AWS DMS, AWS S3, and Data Pipelines run by Airflow.
Instead, we utilize GCP Datastream, which directly connects to databases like PostgreSQL and MySQL,
copies CDC data, and merges it into BigQuery.
It provides the option to specify the staleness
to balance BigQuery query performance and cost versus data freshness.
Further details will be covered later in this blog.

## Data Partitioning

Data partitioning allows for more efficient and scalable data processing
by dividing data into smaller, manageable segments.
This can lead to faster query performance, reduced costs, and improved data availability.
It also allows for easier data management by providing the ability
to load or delete data partitions selectively.
Data partitioning plays a crucial role as we pay for the data
scanned by the queries we run in BigQuery.

The main challenge with GCP Datastream is its lack of support
for partitioning when writing data into BigQuery.
As a result, all mart tables, which build incrementally every hour,
must scan the full table ingested by Datastream, causing our BigQuery costs to skyrocket.

We manually created a partition for all large tables to mitigate this issue.
Although this solution worked for us, we do not recommend it
because it can affect your data ingestion.
Please use it cautiously and consult GCP support if you encounter any issues.

Here are the steps we took to add a partition to the table ingested using Datastream.
For example, we have a _**transaction**_ table with over 100 million rows
being ingested via Datastream and want to add a partition.

- Pause the Datastream that ingests the _**transaction**_ table.

- Create a new _**transaction\_v2**_ table using the same Data Definition Language (DDL)
  as the original _**transaction**_ table but by appending the partition clause.

  Find the DDL for the existing _**transaction**_ table.

  ```sql
  SELECT
    ddl
  FROM
    `<project-id>`.`region-<region-anme>`.INFORMATION_SCHEMA.TABLES
  WHERE
    table_name="transaction" and table_schema='<dataset name>'
  ```

  Use the DDL statement retrieve from above query
  and add your partition using `PARTITION BY` clause.

  ```sql
  CREATE TABLE transaction_v2
  (
    id INT64,
    amount NUMERIC
  )
  PARTITION BY DATE(updated_at)
  CLUSTER BY id;
  ```

- Insert data from the _**transaction**_ into _**transaction\_v2**_.

- Drop the _**transaction**_ table.

- Create a new _**transaction**_ table using the DDL of _**transaction\_v2**_,
  which has the partition clause.

- Insert data from _**transaction\_v2**_ into the new _**transaction**_ table.

- Drop the _**transaction\_v2**_ table.

- Resume the Datastream.

Using **updated\_at** as a partition column in the raw tables
allows us to retrieve any new changes from the raw table
without scanning the entire table for mart table updates.

## Data Transformation

**Key Features**

We started using GCP Dataform for data transformation,
enabling users to define, test, and deploy data models in a reproducible and modular manner.
It helps data teams manage complex pipelines and maintain data quality efficiently.

- **SQL-based Data Transformations:** Define and run SQL transformations on your data,
  and build complex pipelines with reusable scripts.

- **Dependency Management:** Ensure transformations are executed in the right order
  and manage dependencies among them.

- **Version Control:** Version control your data transformation code with Git,
  track changes, collaborate, and revert to previous versions if needed.

- **Testing and Validation:** Write tests and validations for your data,
  and define rules and expectations to ensure quality and integrity.

- **Incremental Builds:** Optimize the execution time of your data pipelines
  by processing only changed data since the last build.

- **Collaboration and Sharing:** Share and reuse data transformation code with your team,
  create and manage projects, grant access, and promote code reuse across projects.

- **Scheduler Integration:** Automate execution of your data pipelines at specified intervals
  with scheduling tools like Airflow or Google Cloud Scheduler.

- **Extensibility:** Extend Dataform through plugins and custom JavaScript code,
  write custom logic, integrate with external systems,
  or implement advanced data processing tasks using JavaScript.

We haven't used GCP Dataform extensively at this time.
We will share more information in the future after using it more.

## Security

### Datastream security

GCP Datastream is designed with security in mind and provides several features
to ensure the security of data replication.
Key features include encryption at rest and in transit, VPC service control,
IAM roles and permissions, and audit logging.

### PII column security

Our GCP Datastream-based pipeline uses two methods to handle
Personally Identifiable Information (PII) columns.
The first method completely blocks specific PII column(s) from being included in the Datastream.
This ensures that Datastream does not ingest PII columns into BigQuery.

In some cases, our customer support or marketing team needs the PII of our customers,
such as email, phone number, etc.
In those cases, we ingest the PII column(s) into BigQuery and mask them
using the dynamic data masking feature of BigQuery.

**About Dynamic Data Masking**

BigQuery provides dynamic data masking at the column level,
enabling access to a column while obscuring its data for privileged user groups.
Combining data masking with column-level access control allows you to configure
access to column data at different levels based on user privileges.
This simplifies data sharing, eliminates the need to modify existing queries,
allows scalability when applying data access policies, and enables attribute-based access control.

Here are the benefits of using BigQuery for dynamic data masking at the column level:

- Simplifies data sharing with larger groups by masking sensitive columns.

- Existing queries automatically mask column data based on user roles,
  eliminating the need to exclude inaccessible columns.

- Enables scalability of data access policies by writing a policy tag once
  and applying it to any number of columns.

- Provides contextual data access based on data policy and associated principals
  through attribute-based access control.

## Cost

### Ingest required columns only

When using GCP Datastream, it is important to be mindful of the volume of data
being ingested into BigQuery.
Datastream charges based on the amount of data processed through it,
so ensure to ingest only necessary tables and columns.

### Use staleness settings

Data staleness in Datastream refers to the amount of time between
when a change is made in the source database and when that change is captured
and replicated in the target destination.
Datastream provides an option to specify the staleness
to balance BigQuery query performance and cost versus data freshness.
By setting the staleness settings, merging costs can be reduced.
However, setting too low of a staleness value can result in higher costs
due to more frequent querying of the target destination.

To increase or decrease the staleness in the existing tables ingesting via Datastream.

```sql
ALTER TABLE <dataset-name>.<table_name>
SET OPTIONS (
  max_staleness = INTERVAL 30 MINUTE
);
```

### Use BigQuery reservation for backfill

Setting reservation pricing before starting the backfill of large tables
is important to reduce high backfill costs.
In our case, we started the backfill of a large table without using BigQuery reservation,
and the cost was 2 times higher than it would have been with reservation pricing.

(이미지 첨부: BigQuery Cost during the Backfill without Reservation)

(이미지 첨부: BigQuery Cost during the Backfill with Reservation)

## The bottleneck of GCP Datastream

### Lack of data partitioning

GCP Datastream is a powerful tool for real-time data replication,
but it can still be improved in some areas.
One major bottleneck is the lack of built-in partitioning.
When a large table is ingested through Datastream,
there should be an option to create a partition in the target table.

### Lack of pre-transformation

Another challenge with GCP Datastream is the absence of pre-transformation.
There is no option to transform the data before it is sent to the target system.
This feature can help encrypt source columns, create derived columns, etc.

### Full table scan while merging incremental changes

GCP Datastream scans the full table to apply a few incremental rows.
This approach can be inefficient and expensive.
To optimize the performance of GCP Datastream,
developing a more efficient way of scanning the table and applying incremental rows is essential.

## What’s Next?

We have made significant changes in our latest solution for ingesting real-time data
from our source database to BigQuery.
We have replaced AWS DMS with GCP Datastream.
This has allowed us to take advantage of the unique features that GCP Datastream offers.

Additionally, we have implemented GCP Dataform for data modelling and mart tables.
This has given us more flexibility and control over our data.

However, we have encountered a few challenges with GCP Datastream.
It does not support pre-transformation, which is essential for our use case.
To address this, we are considering using Dataflow for real-time pre-transformation.
This would allow us to apply transformations to the data before it is ingested into BigQuery,
giving us more control over the quality and consistency of our data.
Overall, we believe that these changes have greatly improved the efficiency and effectiveness
of our data ingestion process.


# https://developers.portone.io/blog/posts/2024-04/solid

---
title: Solid로 간결하게 고성능 웹앱 만들기
description: 포트원에서 사용하는 프론트엔드 웹 프레임워크 중 하나인 Solid에 대해 소개하고, 포트원 내에서의 활용 사례를 다룹니다.
author: XiNiHa
date: 2024-04-14T15:00:00.000Z
tags:
  - Frontend
  - Solid
  - SolidStart
---

포트원에서는 프로덕트를 개발할 때 각 제품의 특성에 따라 다양한 프레임워크들을 검토 후 적용하고 있으며,
이 중 [Solid]의 경우 몇몇 프로덕트에 대해 프로덕션에서 적용하여 성공적으로 운영하고 있습니다.
이번 글에서는 Solid에 대한 간단한 소개부터, Solid가 가진 여러 특징들을 살펴보고,
포트원이 Solid를 도입한 방식과 도입 이후의 경험들에 대해서 이야기해보려 합니다.

## Solid?

아마 이 글을 읽으시는 분들 대부분은 React 혹은 Vue를 사용하는 프론트엔드 개발자이실 텐데요,
Solid는 이러한 프론트엔드 프레임워크들을 대체하기 위해서 만들어진 프레임워크로,
기존의 VDOM 및 컴포넌트 기반 프레임워크들이 가지고 있던 성능 및 편의성 측면의 단점을 개선하고,
그러면서도 Suspense와 스트리밍 SSR과 같은 다양한 최신 기능들을 지원하는 등,
다방면에서 뛰어난 모습을 보여 주는 프레임워크입니다.
앞서 언급된 프레임워크들에 비해 상대적으로 최근에 출시된 프레임워크라는 점 때문에
생태계 측면에서 부족한 부분들도 있지만,
코어 프레임워크 자체는 굉장히 안정적이고, 사용하기 간편하며,
다양한 기능들과 뛰어난 성능을 모두 갖추고 있습니다.

Solid는 2021년에 버전 v1.0이 출시된 프레임워크이며,
이후 [JavaScript Framework Benchmark] 등에서 최상위권의 성능을 보여주며 주목받기 시작했습니다.
Solid의 특징들은 이후 Angular나 Vue, Svelte 등에 간접적인 영향을 주거나,
Qwik이나 Leptos 등의 프레임워크들에 직접적으로 영향을 주는 등,
전반적인 프론트엔드 생태계에 큰 변화를 가져왔습니다.
과연 Solid의 어떤 점이 매력적이었길래 이렇게 많은 관심을 받고 있는 것일까요?
한번 Solid의 기반부터 짚어 나가면서 Solid의 여러 특징들을 살펴보도록 하겠습니다.

## Solid 시작하기

### 반응형 시스템

Solid의 가장 핵심적인 특징은 아마 Signal로 대표되는 반응형 시스템일 것입니다.
여기서 “반응형 시스템”은 단일 상태의 변화에 따라서 이 상태에 의존하는
파생 상태들과 부수 효과들이 연달아서 _반응하며_ 갱신 및 실행되는 시스템을 의미하는데요,
Solid는 Signal을 바탕으로 매우 간편하게 상태 그래프를 구성할 수 있는 반응형 시스템을 제공합니다.
한번 코드를 살펴볼까요?

```tsx
import { createEffect, createMemo, createSignal } from "solid-js";

// SolidJS가 변화를 추적할 수 있는 상태(Signal)를 생성합니다.
const [count, setCount] = createSignal(0);

// Signal의 값은 함수 호출을 통해 읽을 수 있습니다.
console.log(count());

// 다른 상태에 의존하는 새로운 상태를 생성합니다.
const doubleCount = createMemo(() => {
  // createMemo 등의 함수 내에서 Signal의 값을 가져올 경우,
  // 해당 Signal의 값 변화를 자동으로 구독하며,
  // 값이 변화할 경우 함수를 재실행합니다.
  return count() * 2;
});

// 의존하는 상태가 변화할 때마다 실행되는 부수 효과를 생성합니다.
createEffect(() => {
  console.log(`doubleCount: ${doubleCount()}`);
});

// 한 상태를 업데이트하면, 해당 상태에 의존하는 모든 부수 효과가 순차적으로 실행됩니다.
setInterval(() => {
  // 상태가 업데이트될 때, 부수 효과가 동기적으로 실행됩니다.
  setCount(count() + 1);
  console.log(`count update completed`);
}, 1000);

// 위 코드는 다음을 출력합니다.
//
// 0
// doubleCount: 0
// (1초 후)
// doubleCount: 2
// count update completed
// (1초 후)
// doubleCount: 4
// count update completed
// ...
```

(이미지 첨부: 예제 코드로 생성된 반응형 그래프)

예제 코드에서도 드러나듯이, Solid의 반응형 유틸리티들을 활용하면
컴포넌트나 Rules of Hooks 같은 거추장스러운 규칙들 혹은 다른 복잡한 구조를 도입하지 않고도
매우 간단한 방식으로 각종 상태와 다양한 부수 효과들을 관리할 수 있습니다.
또한 이 방식은 상태가 업데이트됨에 따라서 꼭 재실행이 필요한 코드들만 다시 실행되기 때문에,
컴포넌트 단위로 상태 업데이트를 관리하는 React와 같은 프레임워크들에 비해
많은 상황에서 뛰어난 성능을 보여줍니다.

### 반응형 시스템으로 DOM 조작하기

앞서 살펴보았듯이, Solid의 반응형 시스템을 사용하면 상태 변화에 따라서 실행되는
부수 효과를 손쉽게 생성할 수 있습니다.
그렇다면, 이걸 활용해서 DOM 요소가 상태의 변화에 따라서 함께 변화하도록 할 수 있지 않을까요?

```tsx
import { createEffect, createSignal } from "solid-js";

// 1초마다 1씩 증가하는 count 상태를 만듭니다.
const [count, setCount] = createSignal(0);
setInterval(() => setCount(count() + 1), 1000);

const div = document.createElement("div");
createEffect(() => {
  // count 상태가 변화할 때마다 div의 textContent를 업데이트합니다.
  div.textContent = count();
});
```

위 코드를 보면 알 수 있듯이, Solid에서는 매우 간단하게
상태의 변화에 따라 변화하는 DOM 요소를 만들 수 있습니다.
`render()` 함수나 컴포넌트 같은 것을 사용할 필요도 없이,
단순히 Solid에서 제공하는 몇 가지 함수들만 가지고도
손쉽게 상태에 따라 변화하는 UI를 만드는 것이 가능한데요,
Solid는 여기서 한 발 더 나아가서 JSX로부터 위와 같이
DOM을 구성하는 코드를 자동으로 생성해내는 기능을 제공하여,
단순함과 성능에 더해 편의성까지 챙겼습니다.

### JSX 컴파일러

Solid는 JSX를 효율적으로 컴파일하기 위해 [dom-expressions]라는 패키지를 Babel 플러그인 형태로 제공합니다.
이 플러그인은 소스 코드 내의 JSX를 Solid와 함께 사용할 수 있는 형태로 컴파일하는데요,

```tsx
// VDOM 객체가 아닌, 실제 HTMLDivElement를 반환합니다.
const div = <div width={100} />;
```

위 JSX를 컴파일하면, 다음과 같은 코드가 됩니다.

```tsx
import { template as _$template } from "solid-js/web";
const _tmpl$ = _$template(`<div width="100">`);
const div = _tmpl$();
```

`_$template()` 함수는 인자로 입력받은 템플릿을 DOM 노드로 생성하고,
호출 시 이 노드를 복제하는 함수인 `_tmpl$()` 함수를 반환합니다.
따라서 `_tmpl$()` 함수를 호출해서 `div` 변수에 넣으면
변수 안에는 실제 DOM 노드가 들어가게 되는 것입니다. 좀 더 복잡한 예제를 살펴볼까요?

```tsx
import { createSignal } from "solid-js";

const [count, setCount] = createSignal(0);
const [height, setHeight] = createSignal(100);

// 1초마다 count를 1 증가시킵니다.
setInterval(() => setCount(count() + 1), 1000);
// 500ms마다 height를 0~300 사이의 랜덤한 값으로 설정합니다.
setInterval(() => setHeight(Math.random() * 300), 500);

const div = <div height={height()}>{`Count: ${count()}`}</div>;
```

위 예제를 컴파일하면, 다음과 같은 코드가 됩니다.

```tsx
// 컴파일된 JSX에서 사용하는 import들과 _tmpl$들이 상단에 먼저 배치됩니다.
import { template as _$template } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
const _tmpl$ = _$template(`<div>`);
// 여기부터 사용자가 작성한 코드가 시작됩니다.
import { createSignal } from "solid-js";
const [count, setCount] = createSignal(0);
const [height, setHeight] = createSignal(100);
setInterval(() => setCount(count() + 1), 1000);
setInterval(() => setHeight(Math.random() * 300), 500);
const div = (() => {
  const _el$ = _tmpl$();
  _$insert(_el$, () => `Count: ${count()}`);
  _$effect(() => _$setAttribute(_el$, "height", height()));
  return _el$;
})();
```

다른 부분은 제쳐두고, `"const div = (() => {"`로 시작하는,
JSX에 해당하는 부분부터 한번 살펴보겠습니다.
먼저 `_tmpl$()` 함수를 통해서 `_el$`을 생성하는 부분까지는 이전 예제와 동일합니다.
이후 `_$insert()`를 통해서 `_el$` 내에 텍스트를 집어넣는데,
`_$insert()` 함수는 `createEffect()`를 약간 변형한 함수로,
두 번째 인자로 전달된 콜백(이 경우 ``"() => `Count: ${count()}`"``)의 반환값을
첫 번째 인자로 전달된 DOM 노드 안에 삽입하는데,
결국 아까 JSX 없이 `createEffect()`만으로 DOM을 조작했을 때와 기능적으로 유사한 코드입니다.
다음은 `_$effect()` 함수와 `_$setAttribute()` 함수를 통해서 `height` 상태의 값이 변할 때마다
DOM 노드의 `height` 애트리뷰트도 함께 변경시켜주는 코드이고,
이것들이 적용된 DOM 노드인 `_el$`을 반환하면서 JSX 코드가 마무리됩니다.

위 코드에서 찾아볼 수 있는 특별한 점이 하나 있는데요,
바로 `count`의 변화에 따라 `div` 내부의 텍스트를 변화시키는 동작과,
`height`의 변화에 따라 `div`의 `height`를 변화시키는 동작이 별개로 이루어진다는 점입니다.
따라서 `height`가 변화할 때에도 `div` 내부의 텍스트를 변화시키는 동작은 실행되지 않고,
`count`가 변화할 때에도 `div`의 `height`를 변화시키는 동작은 실행되지 않습니다.
이는 React의 컴포넌트 단위 리렌더 모델과는 크게 차이가 존재하는 부분이며,
Solid가 뛰어난 성능을 보여줄 수 있는 비결입니다.
이렇게 DOM을 업데이트하는 방식을 Fine-grained DOM Update라고 부르며,
이 방식은 Solid를 시작으로 Svelte 5나 Vue (Vapor Mode) 등의 프레임워크에도
적용되기 시작한 방식이기도 합니다.

### 컴포넌트

Solid의 컴포넌트는 React 등의 일반적인 프레임워크의 컴포넌트와는 성격이 많이 다른데요,
일반적인 프레임워크들이 컴포넌트를 상태 업데이트를 위한 최소 단위로 삼는 반면,
Solid는 앞서 살펴보았듯이 JSX 자체가 반응성을 가지고 UI를 업데이트하기 때문에,
렌더링 퍼포먼스에 대한 고민 없이 컴포넌트를 온전히 코드를 정돈하기 위한
단위의 용도로 사용할 수 있습니다.
Solid를 사용할 때 컴포넌트는 그저 하나의 함수일 뿐인 것인데요, 한번 살펴볼까요?

```tsx
import { createSignal } from "solid-js";
import { render } from "solid-js/web";

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
  );
}

render(() => <Counter />, document.getElementById("app"));
```

`<div />` 과 같은 일반적인 JSX와 달리, `<Counter />` 같이
컴포넌트에 대한 JSX는 마치 함수 호출처럼 동작합니다.
따라서 `<Counter />` 는 `Counter` 함수를 1번 실행시킬 것이고,
이에 따라 반환되는 `<button>` DOM 노드가 `render()` 함수에 전달되어 `#app`에 그려질 것입니다.
동작 방식을 보면 알 수 있듯이, 리액트의 컴포넌트와 달리 Solid의 컴포넌트는 최초 1번만 실행되기 때문에,
early return 같은 패턴을 사용할 수 없고, 최초 리턴 시에 모든 UI 요소를 전부 반환해야 합니다.
초기 리액트가 장점으로 내세웠던 “UI를 매번 새로 그리는 것처럼 코드를 짤 수 있도록 해 준다”는
부분에 대해서는 다소 부족한 부분이 있다고 볼 수도 있지만,
“상태 변화에 따라서 UI가 변화하는 그래프를 만든다”는 식으로 사고방식을 바꾸어 접근한다면
훨씬 더 수월하게 코드를 작성할 수 있을 것입니다.

### UI 유틸리티 컴포넌트

Solid는 다양한 UI 패턴을 위한 몇 가지 유틸리티 컴포넌트들을 제공합니다.

```tsx
import { For, Match, Show, Switch } from "solid-js";

// 조건에 따라 표시할 UI는 <Show>를 통해 표현합니다.
const [visible, setVisible] = createSignal(false);
const conditional = (
  <Show when={visible()}>
    <p>Visible</p>
  </Show>
);

// 배열을 순회할 때는 <For>를 사용합니다.
const [items, setItems] = createSignal(["foo", "bar"]);
const list = (
  <ul>
    <For each={items()}>{(item) => <li>{item}</li>}</For>
  </ul>
);

// 여러 조건에 대해 비교할 때는 <Switch>를 사용합니다.
const [route, setRoute] = createSignal("home");
const view = (
  <Switch fallback={<p>Not Found</p>}>
    <Match when={route() === "home"}>
      <p>Home</p>
    </Match>
    <Match when={route() === "login"}>
      <p>Login</p>
    </Match>
  </Switch>
);
```

사실 React나 Vue의 JSX에서는 위 UI 패턴들을 순수 JS 문법으로 표현할 수 있고,
이것은 Solid에서도 동일합니다. 하지만 Solid에서는 위 컴포넌트를 사용했을 때
내부적으로 DOM 요소를 재사용하는 등의 최적화를 통해 최상의 성능을 보장해 주며,
따라서 순수 JS 문법을 사용하기보다는 위 컴포넌트를 사용하는 것이 권장됩니다.
이는 VDOM을 사용하지 않는 Solid의 특성상, 불필요한 요소를 생성하는 것의 오버헤드가
더욱 크기 때문이기도 합니다.

### 에러 처리

Solid에서는 컴포넌트 렌더링 도중에 발생할 수 있는 다양한 종류의 에러를 처리하기 위해
`<ErrorBoundary>` 컴포넌트를 제공합니다.
에러가 발생할 수 있는 UI 요소를 별도 컴포넌트로 분리해야만 하는 React와 달리,
Solid에서는 `<ErrorBoundary>` 하위에서 에러가 발생하기만 했다면
따로 컴포넌트를 분리하지 않아도 올바르게 에러를 처리해 줍니다.

```tsx
import { ErrorBoundary } from "solid-js";

const readData = () => {
  throw new Error("Not implemented!");
};

const Component = () => {
  const data = readData();
  return <>{data}</>;
};

const view = (
  // 렌더링 시 Error: Not implemented! 가 표시됩니다.
  <ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
    {/* 바로 호출한 함수에서 에러가 발생한 경우에도 올바르게 처리되며, */}
    {readData()}
    {/* 컴포넌트 내부에서 에러가 발생한 경우에도 올바르게 처리됩니다. */}
    <Component />
  </ErrorBoundary>
);
```

### 데이터 가져오기

Solid는 비동기 함수를 사용하여 데이터를 가져올 수 있는 `createResource()`라는 유틸리티를 제공합니다.
이 유틸리티를 사용하면 데이터 로딩을 위한 별도의 라이브러리를 사용하지 않고도
간단한 데이터 로딩을 손쉽게 구현할 수 있습니다.

```tsx
import { createResource, ErrorBoundary, Show, Suspense } from "solid-js";

const [data] = createResource(async () => {
  const res = await fetch("https://my-api.com");
  const json = await res.json();
  return json;
});

// 데이터가 로딩되는 동안은 Loading...이,
// 에러가 발생하면 Error!가,
// 데이터가 완전히 로딩되면 value 값이 표시됩니다.
const view = (
  <>
    {/* 1. data 리소스의 추가 속성 사용 */}
    <Show when={!data.error} fallback={<div>Error!</div>}>
      <Show when={!data.loading} fallback={<div>Loading...</div>}>
        {data()?.value}
      </Show>
    </Show>
    {/* 2. <ErrorBoundary>와 <Suspense> 사용 */}
    <ErrorBoundary fallback={<div>Error!</div>}>
      <Suspense fallback={<div>Loading...</div>}>{data()?.value}</Suspense>
    </ErrorBoundary>
  </>
);
```

`createResource()`를 사용할 때는 선호하는 API 스타일에 따라서
리소스 내의 `loading`이나 `error`와 같은 추가적인 속성을 활용할 수도 있고,
`<ErrorBoundary>`나 `<Suspense>` 같은 컴포넌트를 활용할 수도 있습니다.
다만 `<Suspense>` 컴포넌트를 활용할 경우 `useTransition()`이나
스트리밍 SSR과 같은 추가적인 기능들을 활용할 수 있기 때문에,
아주 간단한 경우를 제외하고는 `<Suspense>` 컴포넌트를 활용하는 방향이 더욱 권장됩니다.

Solid는 이외에도 다양한 UI 패턴들을 위한 여러 기능들을 제공하는데,
자세히 알아보시려면 [Solid의 공식 튜토리얼][solid tutorial],
[레퍼런스 문서][solid reference] 등을 참고하거나,
다양한 JS 프레임워크들 간의 코드를 비교해서 보여주는 [Component Party] 등을
참고해보시면 좋을 것 같습니다.

## 라이브러리 생태계

이때까지 Solid의 기본적인 특징들을 살펴 보았는데요,
이제부터는 Solid를 활용하여 본격적으로 다양한 애플리케이션을 만들기 위한
다양한 라이브러리 생태계를 살펴 보겠습니다.

### 프로젝트 세팅

현 시점에서 Solid로 웹 애플리케이션을 개발하기 위해 가장 권장되는 방법은
Solid의 공식 메타프레임워크(Next, Nuxt와 같이, 프레임워크를 기반으로 만든 프레임워크)인
[SolidStart]를 활용하는 것입니다.
SolidStart는 [Vite]와 [Nitro]를 기반으로 하는 프레임워크인데, SSR과 CSR을 모두 지원하고,
파일 시스템 라우팅과 커스텀 라우팅을 모두 사용할 수 있으며, `"use server"`를 활용한 서버 함수나,
NodeJS/Vercel/Cloudflare/AWS Lambda 등 다양한 플랫폼에 배포하기 위한 여러 프리셋들도 제공합니다.
그 외에도 상황 및 취향에 따라서 SolidStart를 사용하는 대신 Vite을 그대로 사용하거나,
상대적으로 정적인 콘텐츠로 이뤄진 사이트에서 [Astro]와 Solid를 조합하여 사용하는 등
다양한 선택지가 존재합니다.
또한 [Tauri] 등을 사용하면 Solid를 활용하여 데스크탑 앱을 만드는 것 역시 가능합니다.

### 코어 라이브러리

Solid 팀에서는 Solid로 애플리케이션을 개발할 때 활용할 수 있는 몇 가지 코어 라이브러리들을 제공합니다.
먼저 [Solid Router]는 기본적인 클라이언트 라우팅 기능부터 중첩 라우팅이나 라우터 중심 데이터 플로우까지
다양한 기능을 제공하는 라이브러리로, SolidStart와도 함께 사용할 수 있는 매우 유용한 라이브러리입니다.
[Solid Meta]는 `<head>` 내의 `<title>`이나 `<meta>`와 같은 태그들을 렌더링하기 위한 라이브러리로,
SSR 상황이나 비동기 렌더링을 활용하는 상황, 클라이언트 라우팅이나 중첩 라우팅 등을 활용하는 상황 등을
모두 고려하여 설계되어, 어떤 상황에서도 간편하게 사용할 수 있습니다.
이외에 styled-components의 Solid 버전인 [solid-styled-components] 역시 존재합니다.

### 커뮤니티 라이브러리

커뮤니티 내에서 개발한 오픈소스 라이브러리 역시 다양하게 존재하는데요,
react-use나 VueUse 같이 작은 유틸리티들을 모아서 라이브러리화한 [Solid Primitives],
Radix UI처럼 WAI-ARIA 기반으로 접근성을 준수한 컴포넌트 라이브러리인 [Kobalte],
손쉬운 Form 제작을 위한 [Modular Forms] 등 Solid를 위한 다양한 라이브러리가 존재하고,
또한 [TanStack]의 Query/Virtual/Table/Form, Web Animation API 기반 애니메이션 라이브러리인 [Motion One] 등
다양한 라이브러리들이 Solid 어댑터를 제공하여 React 혹은 Vue에서와 유사하게 사용이 가능합니다.
이외에도 Radix 대신 Kobalte를 활용하여 shadcn/ui를 Solid로 포팅한 [Solid UI]도 존재하고,
MDX 등을 활용하기 위한 다양한 플러그인들 역시 존재합니다.

### 기타 유틸리티

Solid로 애플리케이션을 개발하는 과정에서 활용할 수 있는 다양한 유틸리티들도 존재하는데요,
Solid의 반응형 상태 그래프를 시각화해서 확인할 수 있도록 도와주는 [Solid Developer Tools],
Solid를 사용하는 과정에서 권장되지 않는 코드 패턴들을 검사해 주는 [eslint-plugin-solid],
테스트 과정에서 사용할 수 있는 [Solid Testing Library] 등을 활용하면
전반적인 개발 경험을 크게 향상시킬 수 있습니다.

## 포트원에서의 Solid

이때까지는 Solid 프레임워크와 그 생태계를 소개하는 것에 초점을 두었는데,
다음으로는 포트원 내에서 저희가 Solid를 활용하는 방법에 대해 이야기해보도록 하겠습니다.
포트원은 현재 두 프로젝트에서 Solid를 적용하여 사용하고 있는데요,
결제 브릿지 페이지와 포트원 홈페이지가 그것으로,
두 프로젝트 모두에서 SolidStart를 적용하여 사용하고 있습니다.

### 결제 브릿지 페이지

(관련 이미지 첨부)

포트원의 결제 브릿지 페이지는 고객사에서 포트원 결제 모듈을 사용할 때
PG사의 결제창을 대체하여 사용할 수 있는 포트원의 커스텀 결제창을 제공하는 제품입니다.
해당 제품을 위한 기술을 선택할 때, 결제창이라는 특성을 고려하여 다음 요소들을 중심으로 평가를 진행했습니다.

- **빠른 초기 로딩**

  결제창은 고객사의 페이지에서 별도의 페이지를 렌더링하는 방식으로 로딩되며,
  따라서 웹사이트에 최초 진입하는 것과 같은 방식으로 페이지가 그려집니다.
  특히 결제창은 사용자가 결제 버튼을 누른 이후 최대한 빨리 로딩되어야 사용자의 이탈을 최소화할 수 있는데,
  따라서 페이지의 초기 로딩 성능을 측정하는 데 도움을 주는 TTFB, FCP, LCP 등의
  [Web Vitals] 메트릭을 최적화하는 데에 중점을 두었습니다.

- **서버 측 데이터 로딩**

  결제 브릿지 페이지는 제품 특성상 결제창을 띄우기 위한
  다양한 정보(카드사별 최대 할부 개월수, 무이자 혜택 정보, 카드사 프로모션 정보 등)를
  API로 불러와야 했는데, 이때 내부 API를 사용하는 과정에서 추가적인 인증 절차를 최소화하기 위해
  서버 사이드에서 API 시크릿을 직접 사용하여 API를 호출하는 방식으로 데이터 로딩을 구현할 필요가 있었습니다.
  따라서 서버 없이 CSR 방식으로 클라이언트에서만 화면을 그리기보다는,
  서버에서 데이터 로딩을 진행하고 SSR 중에 로딩된 데이터를 스트리밍하는 방식으로
  퍼포먼스를 최적화할 수 있도록 하는 데 중점을 두었습니다.

- **UI 반응성 및 사용성**

  결제 브릿지 페이지는 상대적으로 동적인 요소들을 많이 가지고 있는 제품이며,
  특히 각 UI 요소를 클릭했을 때 사용자가 느끼는 불편함 없이 최대한 부드럽게 동작할 필요가 있었습니다.
  따라서 서버 사이드에서만 렌더링되는 템플릿 위주의 스택을 선택하기보다는,
  적정량의 JS를 활용하여 우수한 사용자 경험을 제공하는 방향이 적절하다고 판단했습니다.

이러한 요소들을 모두 고려하여 SolidStart의 스트리밍 SSR을 활용하기로 결정했는데요,
스트리밍 SSR은 서버에서 데이터를 로딩하는 상황에서 페이지의 초기 로딩 속도를 향상시키기 위한
최적의 방법 중 하나이며, SolidStart는 현존하는 프레임워크들 중 가장 스트리밍 SSR을
잘 지원하는 프레임워크 중 하나였습니다.
또한 SSR 성능이나 애플리케이션의 JS 번들 크기 역시 페이지의 로딩 속도에 큰 영향을 미치는 요소이고,
해당 측면에서 Solid와 SolidStart가 매우 뛰어난 모습을 보여 준다는 점 역시 긍정적인 요소였습니다.

SolidStart를 도입한 결과는 아주 만족스러웠는데요,
반응형 시스템을 기반으로 이해하기 쉽게 구성된 코드 구조부터,
별다른 노력 없이도 손쉽게 적용 가능했던 서버 사이드 데이터 로딩과 스트리밍 SSR,
Vercel Edge Functions로의 간편한 배포, 그리고 이것들이 합쳐져서 보여주는 뛰어난 성능까지
모두 흠잡을 데가 없었습니다.
스트리밍 SSR 과정에서 간혹 SSR 및 Hydration 관련 버그가 발생하기도 하였으나,
모두 빠르게 고쳐져서 버전업만 틈틈이 해주면 별다른 문제 없이 사용할 수 있었습니다.
이후 유지보수 과정에서도 별다른 문제가 발생하지 않았으며,
현재 월마다 약 30만건 이상의 요청을 무리 없이 처리하고 있습니다.

### 포트원 홈페이지

(관련 이미지 첨부)

포트원 홈페이지는 대체로 정적인 콘텐츠로 구성되었으나 페이지의 사용성을 위해
일부 동적인 컴포넌트가 적용된 형태인데요,
이러한 요구사항에 완벽히 대응하기 위해 포트원에서는 SolidStart의
Islands Router 기능을 활용하기로 결정했습니다.
Islands Router는 SolidStart 0.2에서 실험적으로 제공하던 기능으로,
페이지의 대부분을 서버에서만 렌더링하고,
일부 컴포넌트에 대해서만 Hydration을 진행하는 방식으로
다운로드 및 실행될 JS의 양을 최소화할 수 있도록 돕는 기능입니다.
이는 포트원 홈페이지에 적용하기 아주 적합한 특성을 가진 기능이었고,
실험적으로 제공되던 기능임에도 불구하고 특유의 강력함에 집중하여 기능 적용을 결정하였습니다.
그러나 이후 SolidStart가 0.4로 업그레이드되는 과정에서 해당 기능이 일시적으로 삭제되었고,
현재 최신 버전의 SolidStart에서는 사용할 수 없는 상태가 되었습니다.
따라서 포트원에서는 추후 SolidStart가 해당 기능을 다시 추가할 때까지
SolidStart의 구버전을 사용하면서 필요에 따라 프레임워크 코드를 자체적으로 패치하는 방향으로
대응하여 사용하고 있습니다.

포트원 홈페이지에 SolidStart와 Islands Router를 적용하면서 얻은 가장 큰 수확은 역시 성능인데요,
꼭 필요한 컴포넌트가 아니면 서버에서만 컴포넌트를 렌더링한다는 특성상,
다운로드 및 실행해야 할 JS의 양이 매우 적은 덕에 페이지의
전반적인 로딩 및 동작 단계에서의 성능이 뛰어난 모습을 보여줍니다.
또한 이렇게 성능을 챙기는 와중에도 동적인 컴포넌트들은 모두 클라이언트에서 실행되고,
페이지 이동 역시 클라이언트 사이드 라우팅의 형태로 이뤄지기 때문에
페이지의 사용성 역시 희생하지 않을 수 있었습니다.
이는 React Server Components나 NextJS의 App 라우터를 사용했을 때에도 유사하게 얻을 수 있는 장점이나,
Solid와 SolidStart는 React와 NextJS 대비 프레임워크의 번들 사이즈, SSR 및 Hydration 성능 등에서
큰 이점을 보여 주기 때문에, 전반적으로 더 나은 성능을 달성할 수 있었습니다.

## 정리

이때까지 Solid의 특징들부터 시작해서, Solid 주변 생태계,
그리고 포트원 내에서의 Solid 활용 사례까지 살펴보았습니다.
포트원에서 Solid를 도입하는 것을 초기부터 푸시하고, 이후 프로덕트 개발과 유지보수까지 경험해본 사람으로서,
Solid는 이미 프로덕션에도 충분히 적용해볼 만한, 많은 장점을 가지면서도 동시에 안정적인 프레임워크라고 생각하는데요,
여러분도 이번 기회에 Solid를 비롯한 프론트엔드 생태계 내의 다양한 프레임워크들을 한번 둘러보시면 어떨까요?

[solid]: https://www.solidjs.com/

[javascript framework benchmark]: https://krausest.github.io/js-framework-benchmark/current.html

[dom-expressions]: https://github.com/ryansolid/dom-expressions

[solid tutorial]: https://www.solidjs.com/tutorial/introduction_basics

[solid reference]: https://docs.solidjs.com

[component party]: https://component-party.dev

[solidstart]: https://docs.solidjs.com/solid-start

[vite]: https://vitejs.dev

[nitro]: https://nitro.unjs.io

[astro]: https://astro.build

[tauri]: https://tauri.app

[solid router]: https://docs.solidjs.com/solid-router

[solid meta]: https://github.com/solidjs/solid-meta

[solid-styled-components]: https://github.com/solidjs/solid-styled-components

[solid primitives]: https://primitives.solidjs.community

[kobalte]: https://kobalte.dev

[modular forms]: https://modularforms.dev

[tanstack]: https://tanstack.com

[motion one]: https://github.com/solidjs-community/solid-motionone

[solid ui]: https://www.solid-ui.com

[solid developer tools]: https://github.com/thetarnav/solid-devtools

[eslint-plugin-solid]: https://github.com/solidjs-community/eslint-plugin-solid

[solid testing library]: https://github.com/solidjs/solid-testing-library

[web vitals]: https://web.dev/articles/vitals?hl=ko


# https://developers.portone.io/blog/posts/2024-07/v2-event-sourcing-basic

---
title: 포트원 V2 이야기 - Event Sourcing으로 결제 시스템 만들기 (기본편)
description: 포트원 V2 시스템의 근간을 이루고 있는 기술 중 하나인 Event Sourcing에 대해 소개합니다.
author: BaekGeunYoung
date: 2024-07-07T15:00:00.000Z
tags:
  - Core V2
  - Backend
  - Event Sourcing
---

안녕하세요. 포트원 V2 이야기로 다시 돌아온 포트원 엔지니어 Kai입니다.
포트원 V2 시스템을 구성하고 있는 핵심 기술들 중 이번에 소개해 드릴 것은 Event Sourcing이라는 기술입니다.
Event Sourcing이 무엇인지, 포트원이 결제 시스템을 구축하는 데에 왜 이 기술을 도입하기로 결정했는지,
도입을 결정하면서 함께 신경 쓴 것들은 무엇인지, 직접 기술을 적용하면서 느낀 챌린지는 무엇인지 등에 대해 정리해 보도록 하겠습니다.
(참고로 Event Sourcing에 관한 글은 기본편과 심화편으로 나누어 업로드될 예정입니다!)

## Event Sourcing이란?

Event Sourcing이란 DB에 데이터를 저장하는 방식에 관한 기술입니다.
일반적으로 백엔드 어플리케이션을 만들 때, DB에는 보통 State(상태)를 저장하곤 합니다.
이러한 방식은 직관적이어서 이해하기 쉽다는 장점이 있지만, 항상 엔티티의 최종 상태만을 담고 있기 때문에 변경된 기록을 정확하게 추적할 수 없고,
한 데이터에 대해 검색 및 변경 요청이 빈번하게 발생하기 때문에 동시성으로 인한 문제를 피하려 많은 고민을 해야 합니다.

반면 Event Sourcing 방식에서는 종 상태만을 저장하는 것이 아니라, 엔티티의 상태를 변경하기 위해 발생하는 하나하나의 사건(Event)들을 모두 DB에 저장합니다.
때문에 특정 엔티티에 대한 변경 내역을 모두 추적할 수 있으며, 이벤트는 한 번 발생한 이후 수정되지 않기 때문에 Update나 Delete 없이 항상 Insert 작업만 일어납니다.

## 결제와 Event Sourcing

포트원은 이러한 Event Sourcing이라는 기술을 왜 도입하기로 결정했을까요?
아시다시피 포트원은 오랜 시간 동안 PG 통합 결제 모듈을 제공해왔고 그동안 많은 시행착오와 노하우를 쌓아왔습니다.
Event Sourcing을 사용하기로 결정하는 데에는 기존의 시스템을 운영하면서 가지고 있던 아쉬움들이 큰 영향을 주었는데요,
크게 두 가지 정도를 소개 드릴 수 있을 것 같습니다.

### 1. 정확한 내역 파악의 필요성

기존 시스템을 운영하면서 느꼈던 가장 큰 pain point는 결제건에 대한 변경 내역을 정확히 알 수 없다는 것이었는데요,
아래와 같이 구체적인 변경 내역을 물어오는 문의들이 여러 고객사로부터 자주 있었습니다.

- 어떤 결제건에 부분 환불 요청을 총 몇 번 / 각각 언제 했는지
- 어떤 결제건의 특정 타입의 웹훅이 몇 번 재시도 되었는지
- 어떤 결제건의 PG사 승인 응답 전문이 무엇인지

기존에는 이러한 문의가 들어오면 로그를 확인해 보곤 하는데, 로그는 영원히 검색 엔진에 올려둘 수가 없기 때문에
시간이 오래 지난 변경 내역은 확인하기가 힘듭니다. 따라서 완벽한 답변을 드릴 수 없었던 경우도 종종 있었는데,
Event Sourcing을 도입하게 되면 엔티티에 가해진 모든 이벤트가 DB에 저장되기 때문에 이렇게 맥락 파악을 요청하는 문의에 완벽하게 대응할 수 있을 것이라고 생각했습니다.
또한 포트원은 데이터를 기반으로 여러 가지 인사이트를 제공하고 운영 효율화를 도와줄 수 있는 B2B SaaS 기업으로의 도약을 계획하고 있었는데,
이러한 상황에서 Event Sourcing 방식으로 쌓인 풍부한 raw data는 앞으로 포트원의 발전을 뒷받침할 든든한 뿌리가 될 것이라고 생각했습니다.
종합해 보면, 무엇보다 결제라는 행위는 돈을 주고받는 것이기 때문에 결제 서비스를 제공하는 입장에서 데이터를 최대한 정확하게 보관하는 것이 매우 중요하다고 생각하여 Event Sourcing이 매력적인 선택지로 다가왔던 것 같습니다.

### 2. 자유로운 스키마 발전의 필요성

기존 시스템이 갖고 있던 또 하나의 pain point는 DB Schema에 관한 것인데요,
아시다시피 포트원은 국내외의 여러 PG사 결제 모듈을 하나의 인터페이스, 하나의 플로우로 통합해 주는 PG 통합 연동 모듈을 제공하고 있습니다.
때문에 어떤 PG사를 포트원에서 추가적으로 지원하기 위해 작업을 할 땐 해당 PG사에서 지원하는 파라미터 목록을 확인한 후,
포트원에서 이미 정의한 파라미터로 맵핑할 수 있는지를 검사합니다. 만약 맵핑할만한 파라미터가 마땅히 존재하지 않는다면 포트원에서는 새로이 인터페이스에 파라미터를 추가하고 내부 디비에도 해당 데이터를 저장할 수 있도록 스키마를 발전시켜야 합니다.
포트원의 기존 시스템은 MySQL을 사용하고 있었고, DB 스키마의 지원을 받아 데이터를 정형화하여 관리하고 있었습니다.
때문에 스키마에 필드를 추가하고 싶을 땐 `ALTER TABLE ADD COLUMN` 과 같은 DDL을 실행해야 하는데요,
기술이 많이 발전했다고 해도 Online DDL 실행은 여전히 개발자들에게 어렵고 부담스러운 작업입니다.
처리해야 할 데이터의 양이 많다면 DDL 실행이 완료되기까지 시간이 굉장히 오래 걸릴 수 있으며,
그동안 DB Server의 자원을 많이 점유해 실 서비스에 영향을 줄 수도 있습니다.

반면 Event Sourcing을 하게 되면 DB Schema에 의존하지 않고 자체적인 Event 포맷 정의 및 직렬화/역직렬화 전략을 구성하게 되기 때문에 이러한 문제로부터 완전히 자유로울 수 있습니다.
사실 스키마를 자유롭게 구성할 수 있다는 점이 백엔드 개발에서 큰 장점이 되는 경우가 많지는 않은데,
포트원은 여러 PG사의 인터페이스를 통합하는 특성을 갖고 있기 때문에 이 점을 큰 장점으로 생각하게 되었습니다.

## Event Sourcing과 잘 어울리는 DB 고르기

### 1. Event Sourcing의 DB 접근 특징

Event Sourcing은 한마디로 DB에 최종 상태만을 저장하는 것이 아니라 개별 이벤트를 모두 저장하는 기술인데요,
이 때문에 어플리케이션에서 DB에 접근하는 패턴이나 DB를 다루는 방식이 어느 정도의 특징을 띠게 됩니다. 이를 대략적으로 정리해보면 아래와 같습니다.

- Update/Delete 없이 항상 Insert와 Select만 발생한다.
- 이벤트의 형태는 매우 다양하므로, DB Schema에 의존하지 않는 자체적인 Event 직렬화 전략이 필요하다.
- 쿼리가 다양하지 않고 단일하다. (Insert 쿼리 한 개, Select 쿼리 한 개)
- 상태가 아닌 개별 이벤트를 저장하므로 굉장히 많은 양의 데이터가 쌓인다.

### 2. 특징에 어울리는 DB 고르기

그리고 이러한 특징들과 잘 어울리는 DB로는 어떤 것이 있을까요?
이 특징들을 잘 서포트하는 DB를 고르기 위해서는 DB가 갖추어야 하는 기능과 갖추지 않아도 되는 기능을 정리해 볼 필요가 있습니다.

- Insert와 Select query만 발생하며 쿼리가 복잡하지 않음 → Transaction 지원이 그다지 필요하지 않음
- DB Schema를 활용해 데이터를 정형화할 필요가 없음 → Schemaless DB를 사용해도 무방
- 데이터가 매우 많이 쌓임 → Scale out이 자유로운 DB를 사용해야 함

위와 같은 요구사항을 잘 만족하는 DB는 무엇일까요?
많은 선택지가 있을 수 있겠지만 일반적으로 NoSQL DB를 우선 떠올릴 수 있습니다.
포트원에서도 Cassandra라는 NoSQL DB를 Event Sourcing을 위한 DB로 사용하고 있는데요,
Cassandra는 특히 peer-to-peer architecture를 갖는 Dynamo Style의 DB로 이론상 무제한에 가까운 Scalability를 제공하기 때문에 Event Sourcing에서 사용하기에 적합하다고 판단했습니다.

### 3. 이외 고려할 것들

물론 위에 적은 내용들만을 고려해서 DB를 선택할 수 있는 것은 아닙니다.
무엇보다 어플리케이션에 존재하는 모든 영속 엔티티를 Event Sourcing 방식으로 관리할 필요는 없기 때문에 보다 일반적인 용례를 커버할 수도 있어야 하는데,
이 점을 생각한다면 SQL 인터페이스를 제공하며 Transaction 지원도 되고 수평 확장도 용이한 [Google Spanner](https://cloud.google.com/spanner/)나 [CockroachDB](https://github.com/cockroachdb/cockroach) 등을 사용하는 것을 고려해 볼 수도 있습니다.
이러한 DB를 사용하지 않은 이유를 정리해 보면 크게 아래와 같습니다.

**1) 검증되지 않은 DB**

Google Spanner나 CochroachDB와 같이 NoSQL과 SQL의 장점을 융합하려는 시도는 비교적 최근에 이루어지고 있는 것이고, 해당 DB에 대해 아주 잘 알고 있는 개발자가 사내에 존재하는 것이 아니라면 충분히 검증된 다른 DB를 사용하는 것이 낫다고 판단했습니다.

**2) MSA 환경**

저희는 Microservice Architecture를 구성해두었기 때문에 Event Sourcing이 필요한 Bounded Context가 꽤 명확한 편이었습니다.
따라서 해당 Context 내에서는 Event Sourcing으로 커버하기 힘든 유스케이스가 거의 없다는 점도 의사결정의 주된 고려 사항이었습니다.

**3) AuroraDB 도입을 위한 환경이 이미 마련되어 있음**

저희 아키텍처의 다른 마이크로 서비스들은 모두 AuroraDB를 활발하게 사용하고 있었기 때문에 NoSQL로 커버할 수 없는 용례가 나타나더라도 언제든 AuroraDB를 쉽게 도입할 수 있었습니다.

결과적으로 저희는 대부분의 상황에서 NoSQL을 이용해 Event Sourcing을 하고 있고, 내부적으로 존재하는 사소한 유스케이스에 대해서는 AuroraDB를 사용하여 서비스를 운영하고 있습니다.

## Event Sourcing 구현 살펴보기

Event Sourcing의 특징과 의사결정 배경을 살펴보았으니, 이제 실제 구현에 대해서도 간단하게 살펴보겠습니다.
Event Sourcing은 생소한 기술이긴 하지만 핵심 아이디어 자체는 매우 간단합니다.
로직을 수행하는 과정에서 일어난 사건들을 이벤트로 저장하고, 이 이벤트들을 이용해 외부로 노출될 상태를 만들어내는 것입니다.
이러한 아이디어를 구현하는 데에 필요한 핵심적인 함수 두 가지가 있습니다.

- `commandHandler: (Command, State) => Response`
- `eventHandler: (State, Seq[Event]) => State`

이 두 함수에 대해 알아보기 이전에 `Command`, `Event`, `State`가 무엇인지를 먼저 설명하겠습니다.

- `Command`: 특정 로직의 수행을 지시하는 명령입니다. HTTP에 비유하자면 Request의 역할을 한다고 이해하시면 좋을 것 같습니다.
- `Event`: `Command`를 받아 로직을 수행하는 과정에서 발생하는 사건들을 표현하는 객체입니다. 이 `Event` 들은 DB에 저장되어 Single Source Of Truth의 역할을 합니다.
- `State`: 일련의 `Event`들이 모여 결과적으로 만들어지는 상태를 뜻합니다. 일반적으로 백엔드 애플리케이션에서 흔히 다루는 도메인 엔티티라고 생각하시면 됩니다.

기본적인 개념에 대해 알았으니, 이제 `commandHandler` 와 `eventHandler` 가 무엇인지는 쉽게 이해할 수 있을 것 같습니다.

- `commandHandler`: 현재 상태(State)에서 명령(Command)를 받아 도메인 로직을 수행하고, 응답을 리턴하는 함수입니다. 로직을 수행하는 과정에서 이벤트를 쌓을 때마다 `eventHandler`를 호출합니다.
- `eventHandler`: 현재 상태(State)에서 어떤 이벤트(Event)가 새로 쌓이게 되면 어떤 새로운 상태로 전이할지를 정의하는 함수입니다.

그다지 어렵지 않죠? `commandHandler`는 일반적인 어플리케이션에서 작성하는 도메인 로직과 유사하지만 DB에 상태를 직접 업데이트하는 것이 아니라 이벤트를 쌓을 뿐이고,
새롭게 쌓인 이벤트를 가지고 최신 상태를 만들어내는 코드가 `eventHandler`에 정의되는 것입니다. `commandHandler`의 예시를 하나 들어보겠습니다. 수기 결제 요청을 받아 수행하는 commandHandler입니다.

```scala
// commandHandler: 설명을 위해 단순화한 예시 코드입니다.
for {
  // 1. 수기결제를 시작한다는 내용의 이벤트 저장
  _ <- persist(Event.CommandReceived(id, form, store, customer))

  // 2. 사용자가 넘긴 channel key를 이용해 channel 얻어오기
  channel <- channelService
               .fetchChannel(store.id, form.channelKey)
               .flatMapError(e => fail(Event.FetchingChannelFailed(form.channelKey, e)))

  // 3. 채널 정보 요청 결과를 이벤트로 저장
  _ <- persist(Event.FetchingChannelSucceeded(channel))

  // 4. 채널을 이용해 PG사에 수기결제 요청하기
  result <- txGatewayService
            .payInstantly(base, channel, paymentMethodForm)
            .flatMapError(e => fail(base, channel, Event.TgsFailed(e)))

  // 5. 수기 결제 요청 결과를 이벤트로 저장
  _ <- persist(Event.TgsSucceeded(result))

  ...
} yield Response.Succeeded(result)
```

위 코드에서 `persist`함수를 호출할 때마다 DB에 이벤트가 쌓이게 되고, eventHandler를 거쳐 상태가 업데이트되는데요,
`persist`함수를 어떻게 주입하고 있는지도 확인해 보겠습니다.
eventHandler 역할을 하는 `handleEvent` 함수에서 상태가 어떻게 전이되는지 확인할 수 있습니다.

```scala
val persist = new Persist[E] {
  def apply(event: E): UIO[Unit] =
  for {
      state    <- current.get
      newState  = handleEvent(state, event)
      _        <- eventRepository.insert(entityId, state.sequenceNr, event)
      _        <- current.update(_ => newState)
    } yield ()
}

// eventHandler: 설명을 위해 단순화한 예시 코드입니다.
private def handleEvent(state: State, event: Event): State =
  (state, event) match {
    case (_: State.Empty, _: Event.CommandReceived)          => State.Initialized(???)
    case (_: State.Empty, _: Event.FetchingChannelSucceeded) => State.ChannelSelected(???)
    case (_: State.ChannelSelected, _: TgsSucceeded)         => State.Paid(???)

    ...
  }
```

위 예시에선 설명을 위해 단순화한 부분이 많지만, Event Sourcing 구현의 핵심을 이루는 `commandHandler` 와 `eventHandler` 가 어떻게 구성되는지에 대해 충분히 감을 잡으셨을 것이라고 생각합니다.
Event Sourcing의 구현에 있어 더 디테일하게 신경 써야 할 부분들에 대해서는 심화편에서 좀 더 깊게 다루어보도록 하겠습니다!

## Event Sourcing 도입에 따른 Challenge

저희가 Event Sourcing을 도입하게 된 것은 분명 해당 위에서 설명드린 여러 가지 장점을 누리기 위해서이지만,
반대로 해당 기술을 도입하면서 추가적으로 신경 써야 할 것들 또한 적지 않았습니다.
혹시 Event Sourcing의 도입을 고려하고 있지만 어떠한 챌린지가 있을지를 몰라 의사결정에 어려움을 겪고 계신 분들이 있다면,
그런 분들께 도움을 드리고자 제가 느낀 챌린지들을 공유하고자 합니다.

### Challenge 1. Event 직렬화/역직렬화에 각별히 신경 써야 한다.

글의 윗부분에서 Event Sourcing의 특징에 대해 소개할 때, 해당 기술을 도입하게 되면 DB Schema에 의존하지 않는 자체적인 데이터 포맷 정의 및 직렬화/역직렬화 전략을 구성해야 한다고 말씀드렸는데요,
이는 장점과 단점이 공존하는 특징인 것 같습니다.
DB Schema에 얽매이지 않고 자유롭게 데이터의 형식을 정의할 수 있게 되는 대신, 모든 이벤트를 DB에 저장할 수 있는 형태로 직렬화하고, 반대로 역직렬화하는 코드를 모두 수동으로 작성해야 합니다.
그리고 직렬화 포맷의 특성을 이해하고 이벤트가 하위 호환성을 유지할 수 있도록 많은 신경을 써주어야 합니다.

### Challenge 2. DB를 직접 조작하기가 힘들다.

일반적으로 DB의 내용은 항상 어플리케이션을 통해서만 수정하는 것이 바람직하지만, 드물게는 개발자가 DB에 직접 접속해 데이터를 강제로 조작하는 경우도 있습니다.
이는 위험한 행동이긴 하지만 어쩔 수 없는 상황에서는 분명 유용할 수 있는 프랙티스입니다.
다만 이러한 접근은 DB에 담긴 데이터가 human-readable/human-updatable 할 때만 유용하며, Event Sourcing DB에는 직렬화된 데이터가 담기기 때문에 이 데이터를 사람이 수동으로 조작하는 것에는 한계가 있습니다.
이런 경우 강제 업데이트를 위한 별도의 기능을 어플리케이션에 개발해야 할 것입니다.

### Challenge 3. 조회를 위한 별도의 모델이 필요하다.

사용자가 조회를 통해 얻고 싶은 것은 상태이지만, Event Sourcing DB의 record에는 개별 이벤트가 담겨있습니다.
따라서 Event Sourcing을 도입하게 되면 특정 조건으로 필터를 걸어 조건을 만족하는 엔티티를 한 번에 조회하는 등의 요구사항에 대응할 수 없습니다.
Event Sourcing을 사용하면서 동시에 이러한 요구사항에 대응하기 위해서는 조회를 위한 별도의 모델이 필요합니다.
보통 Event Sourcing DB로부터 주기적으로 데이터를 전달받아 조회에 특화된 별도 DB에 데이터를 동기화하고 이 별도 DB를 조회 요구사항을 만족하는 식으로 접근하게 되는데,
이러한 접근 방식을 CQRS(Command-Query Responsibility Segregation) 패턴이라고 부릅니다.
CQRS 패턴을 구현하기 위해서는 신뢰성 있는 데이터 동기화 아키텍처를 구성해야 하며, 이 아키텍처가 충분히 성숙해지기까지 꽤 많은 리소스를 들여야 할 것입니다.

## 정리

포트원 V2 시스템의 근간을 이루고 있는 Event Sourcing 기술의 개념과 도입 배경, 간단한 구현과 Challenge까지 개괄적인 내용을 함께 살펴보았습니다.
Event Sourcing의 경우 굉장히 낯선 기술이고, 국내에서 해당 기술을 도입한 사례를 거의 찾아볼 수 없었기 때문에 저희도 실제로 이 기술을 도입하면서 많은 시행착오가 있었는데요,
많은 분들이 본 글을 읽고 Event Sourcing 기술이 가지는 특징과 장단점에 대해 더 깊게 이해하게 되셨기를 바래봅니다.

과감한 결정을 한 만큼 장기적으로 그 효과는 강력할 것이라고 생각합니다.
Event Sourcing이라는 단단한 뿌리 위에서 폭발적으로 성장하는 포트원을 지켜봐 주세요!
