---
title: '파트너를 엑셀로 업로드하여 등록할 수 있나요? '
category: 자주 묻는 질문 (일반 문의) > 파트너정산자동화 > 파트너정산자동화
seo:
  title: 파트너 정산 자동화, 파트너 엑셀 업로드 기능
  description: '파트너 일괄 등록 기능을 소개하고, 엑셀 양식 데이터 기입 시 주의해야할 점을 안내합니다. '
tags:
  - 파트너관리
  - 노코드
pgCompanies:
  - 공통
searchTags:
  - 파트너엑셀등록
  - 엑셀
  - 파트너등록
  - 파트너관리
  - 파트너정산자동화
datetime: 2024-01-25T15:00:00.000Z
---

<Callout content="파트너 일괄 등록 기능을 소개하고, 엑셀 양식 데이터 기입 시 주의해야할 점을 안내합니다. " title="" />

### 파트너 일괄 등록이란?

- 포트원 파트너정산자동화 제품 이용 시, 개발 연동 없이도 파트너를 일괄 등록할 수 있는 기능입니다.
- 파트너 관리 페이지 > \[파트너 일괄 등록] 페이지에서 일괄 등록 양식을 다운로드 받은 뒤, 파일을 업로드하여 파트너를 등록할 수 있습니다.
- 파트너 등록을 완료하면, 사업자 휴폐업 조회와 예금주 검증이 자동으로 진행되어 최종 상태값을 조회할 수 있습니다.

### 요약

1. 파트너 관리 페이지에서 \[파트너 일괄 등록] 버튼을 눌려주세요.
2. 파트너 일괄 등록 시트에서 \[일괄 등록 양식 다운로드] 버튼을 눌러주세요.
3. 다운로드를 받은 CSV 파일을 열고 필수 정보와 선택 정보를 구분하여 기입해 주세요. 파일을 저장할 때, CSV 파일로 저장해주세요.
4. \[파일 첨부] 버튼을 눌러서 양식을 업로드해주세요. 파트너 정보를 즉시 확인할 수 있습니다.
5. \[예금주 조회 결과로 예금주명을 자동 변경 후 등록할게요] 체크박스를 누를지 확인해주세요. 예금주 조회 결과로 정확한 예금주 명으로 자동으로 치환하여 저장합니다.
6. \[등록] 버튼을 눌러주세요.
7. 모든 정보가 올바르다면, 파트너 등록이 완료됩니다. 올바르지 않은 정보를 입력한 뒤 \[등록] 버튼을 누르면 에러메시지가 노출됩니다. 첨부 파일을 수정한 뒤 다시 첨부해주세요.

<Indent level="1">

- 아직 한번도 회원가입하신 적이 없을 경우 새롭게 회원가입을 하신 후 로그인해주시기 바랍니다.
- 또한 이미 회원가입이 되어있을 경우 로그인하신 계정이 Owner 권한의 계정인지 확인해주시기 바랍니다.

</Indent>

### 정보 기입 가이드

#### 기본 계약 아이디 필수값

정산 API 호출 시 필요한 식별값입니다. \[정산 정책 관리] - \[계약 관리] 에서 생성 가능합니다.

#### 은행 코드 필수값

한글 또는 영문으로 입력 가능하며, 정확한 코드명으로 입력해주세요. \
상세 리스트는 아래 \[은행 코드 가이드]를 참조해주세요.

#### 통화 필수값

포트원이 지원하는 정산 통화를 정확한 영문명으로 기입해주세요. \
상세 리스트는 아래 \[통화 가이드]를 참조해주세요.

#### 파트너 유형 필수값

파트너 유형은 사업자, 원천징수 비대상자, 원천징수 대상자 중 하나를 입력해주세요. \
띄어쓰기를 포함하여 정확한 값을 입력해주셔야 합니다.

- 사업자
- 원천징수 비대상자
- 원천징수 대상자

#### 과세·소득 유형 선택값

과세·소득 유형은 파트너 유형이 \[사업자] 인 경우에만 기입해주세요. \
띄어쓰기를 포함하여 정확한 값을 입력해주셔야 합니다.

- 일반 과세
- 간이 과세(세금계산서 발행)
- 간이 과세(세금계산서 미발행)
- 면세

#### 대표자 생년월일 선택값

대표자 생년월일은 파트녀 유형이 \[원천징수대상자] 혹은 \[원천징수비대상자]인 경우에만 기입해주세요.

### 은행 코드 가이드

#### 주의사항

1. 아래 가이드에 따라 정확한 데이터를 기입해주세요.
2. 영문 코드 혹은 국문 코드 모두 입력 가능합니다.
3. 리스트는 [이 링크](https://docs.google.com/spreadsheets/d/1LpM8H4qLtknqBeHyQIIiM3XL6AhffPDE4mq9krqArPc/edit?usp=sharing "은행코드 가이드 (엑셀 다운받기)")에서 다운로드 받을 수 있습니다.
4. 미지원 은행사 정보에 대해 추가 문의가 있으시다면,  기술 문의 지원 이메일로 연락주세요. 추가 지원에 대해 검토해보고 답변 드리겠습니다.

<Callout title="기술 문의 지원  이메일" content="b2b.support@portone.io" />

#### 지원하는 은행 리스트

| 영문 코드                      | 국문 코드               |
| -------------------------- | ------------------- |
| BANK\_OF\_KOREA            | 한국은행                |
| KDB                        | 산업은행                |
| IBK                        | 기업은행                |
| KOOKMIN                    | 국민은행                |
| SUHYUP                     | 수협은행                |
| KEXIM                      | 수출입은행               |
| NONGHYUP                   | NH농협은행              |
| LOCAL\_NONGHYUP            | 지역농축협               |
| WOORI                      | 우리은행                |
| STANDARD\_CHARTERED        | SC제일은행              |
| CITI                       | 한국씨티은행              |
| DAEGU                      | 아이엠뱅크               |
| BUSAN                      | 부산은행                |
| KWANGJU                    | 광주은행                |
| JEJU                       | 제주은행                |
| JEONBUK                    | 전북은행                |
| KYONGNAM                   | 경남은행                |
| KFCC                       | 새마을금고               |
| SHINHYUP                   | 신협                  |
| SAVINGS\_BANK              | 저축은행                |
| MORGAN\_STANLEY            | 모간스탠리은행             |
| HSBC                       | HSBC은행              |
| DEUTSCHE                   | 도이치은행               |
| JPMC                       | 제이피모간체이스은행          |
| MIZUHO                     | 미즈호은행               |
| MUFG                       | 엠유에프지은행             |
| BANK\_OF\_AMERICA          | BOA은행               |
| BNP\_PARIBAS               | 비엔피파리바은행            |
| NFCF                       | 산림조합중앙회             |
| POST                       | 우체국                 |
| HANA                       | 하나은행                |
| SHINHAN                    | 신한은행                |
| K\_BANK                    | 케이뱅크                |
| KAKAO                      | 카카오뱅크               |
| TOSS                       | 토스뱅크                |
| MISC\_FOREIGN              | 기타 외국계은행(중국 농업은행 등) |
| YUANTA\_SECURITIES         | 유안타증권               |
| KB\_SECURITIES             | KB증권                |
| SANGSANGIN\_SECURITIES     | 상상인증권               |
| HANYANG\_SECURITIES        | 한양증권                |
| LEADING\_SECURITIES        | 리딩투자증권              |
| BNK\_SECURITIES            | BNK투자증권             |
| IBK\_SECURITIES            | IBK투자증권             |
| DAOL\_SECURITIES           | 다올투자증권              |
| MIRAE\_ASSET\_SECURITIES   | 미래에셋증권              |
| SAMSUNG\_SECURITIES        | 삼성증권                |
| KOREA\_SECURITIES          | 한국투자증권              |
| NH\_SECURITIES             | NH투자증권              |
| KYOBO\_SECURITIES          | 교보증권                |
| HI\_SECURITIES             | 하이투자증권              |
| HYUNDAI\_MOTOR\_SECURITIES | 현대차증권               |
| KIWOOM\_SECURITIES         | 키움증권                |
| EBEST\_SECURITIES          | LS증권                |
| SK\_SECURITIES             | SK증권                |
| DAISHIN\_SECURITIES        | 대신증권                |
| HANHWA\_SECURITIES         | 한화투자증권              |
| HANA\_SECURITIES           | 하나증권                |
| TOSS\_SECURITIES           | 토스증권                |
| SHINHAN\_SECURITIES        | 신한투자증권              |
| DB\_SECURITIES             | DB금융투자              |
| EUGENE\_SECURITIES         | 유진투자증권              |
| MERITZ\_SECURITIES         | 메리츠증권               |
| KAKAO\_PAY\_SECURITIES     | 카카오페이증권             |
| BOOKOOK\_SECURITIES        | 부국증권                |
| SHINYOUNG\_SECURITIES      | 신영증권                |
| CAPE\_SECURITIES           | 케이프투자증권             |
| KOREA\_SECURITIES\_FINANCE | 한국증권금융              |
| KOREA\_FOSS\_SECURITIES    | 한국포스증권              |
| WOORI\_INVESTMENT\_BANK    | 우리종합금융              |

### 통화 가이드

#### 주의사항

1. 아래 가이드에 따라 정확한 데이터를 기입해주세요.
2. 영문 대문자로 입력해주세요.

#### 지원하는 통화 리스트

1. KRW
2. USD
3. JYP
4. EUR
5. CNY
6. TWD
7. AUD
8. THB
9. HKD 

<Callout content="기술 문의 지원 이메일
b2b.support@portone.io" />
