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

|Field Name         |Description                                            |Format                                                                   |
|-------------------|-------------------------------------------------------|-------------------------------------------------------------------------|
|sender_account_id  |구매자 계정의 id                                       |                                                                         |
|sender_first_name  |구매자의 이름                                          |                                                                         |
|sender_last_name   |구매자의 성                                            |                                                                         |
|sender_email       |구매자의 이메일                                        |E.123 - Email Address                                                    |
|sender_phone       |구매자의 휴대전화 번호                                 |E.123 - Telephone Number (national notation)                             |
|sender_country_code|구매자의 국가 코드                                     |ISO Alpha-2 Country Code                                                 |
|sender_create_date |구매자의 계정 생성일                                   |ISO 8601 date format                                                     |
|dg_delivery_method |발신 방법                                              |(`email`, `phone`, `venue_pickup`, `kiosk_pickup`) 중의 하나로 전송해야함|
|cd_string_one      |여분 필드 1(행사일 등의 정보 입력, 중요도 낮음)        |                                                                         |
|cd_string_two      |여분 필드 2 (행사 카테고리 등의 정보 입력, 중요도 낮음)|                                                                         |
|cd_int_one         |티켓의 수(중요도 낮음)                                 |                                                                         |

</details>

<details>

<summary>연료 산업</summary>

|Field Name         |Description           |Format                                      |
|-------------------|----------------------|--------------------------------------------|
|sender_account_id  |구매자 계정의 id      |                                            |
|sender_first_name  |구매자의 이름         |                                            |
|sender_last_name   |구매자의 성           |                                            |
|sender_email       |구매자의 이메일       |E.123 - Email Address                       |
|sender_phone       |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender_country_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender_create_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>게임/디지털 상품 산업</summary>

|Field Name         |Description           |Format                                      |
|-------------------|----------------------|--------------------------------------------|
|sender_account_id  |구매자 계정의 id      |                                            |
|sender_first_name  |구매자의 이름         |                                            |
|sender_last_name   |구매자의 성           |                                            |
|sender_email       |구매자의 이메일       |E.123 - Email Address                       |
|sender_phone       |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender_country_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender_create_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>마켓플레이스 산업</summary>

|Field Name                   |Description                                                                                                                                                        |Format                                      |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
|sender_account_id            |구매자/발신자 계정의 id                                                                                                                                            |                                            |
|sender_first_name            |구매자/발신자의 이름                                                                                                                                               |                                            |
|sender_last_name             |구매자/발신자의 성                                                                                                                                                 |                                            |
|sender_email                 |구매자/발신자의 이메일                                                                                                                                             |E.123 - Email Address                       |
|sender_phone                 |구매자/발신자의 휴대전화 번호                                                                                                                                      |E.123 - Telephone Number (national notation)|
|sender_address_zip           |(미국 머천트 한정) 구매자/발신자가 고객사 계정에 등록한 우편번호                                                                                                   |                                            |
|sender_country_code          |구매자/발신자의 국가 코드                                                                                                                                          |ISO Alpha-2 Country Code                    |
|sender_create_date           |구매자/발신자의 계정 생성일                                                                                                                                        |ISO 8601 date format                        |
|sender_signup_ip             |구매자/발신자의 회원 가입 시점의 IP 주소                                                                                                                           |IP(IPv4 / IPv6)                             |
|sender_popularity_score      |구매자/발신자의 신용도 점수                                                                                                                                        |(high, medium, low) 중의 하나               |
|receiver_account_id          |판매자/수신자 계정의 id                                                                                                                                            |                                            |
|receiver_create_date         |판매자/수신자의 계정 생성일                                                                                                                                        |ISO 8601 date format                        |
|receiver_email               |판매자/수신자의 이메일                                                                                                                                             |E.123 - Email Address                       |
|receiver_address_country_code|판매자/수신자의 국가 코드                                                                                                                                          |ISO Alpha-2 Country Code                    |
|business_name                |판매자/수신자가 계정에 등록한 사업용 이름                                                                                                                          |                                            |
|recipient_popularity_score   |판매자/수신자의 신용도 점수                                                                                                                                        |(high, medium, low) 중의 하나               |
|first_interaction_date       |발신자/수신자의 첫 번째 상호작용 날짜. '상호작용'의 정의는 고객사에서 정의합니다. ex)발신자와 수신자 간의 첫 번째 거래 시도, 발신자와 수신자 간의 친구 추가 날짜 등|ISO 8601 date format                        |
|txn_count_total              |발신자/구매자가 현재까지 고객사에서 진행한 총 거래 횟수(PayPal 또는 기타 결제수단을 통해)                                                                          |Number                                      |
|transaction_is_tangible      |판매자/수신자의 거래가 유형 거래인지, 무형 거래인지를 나타내는 필드                                                                                                |유형 거래인 경우 1, 무형 거래인 경우 0      |

</details>

<details>

<summary>온라인 여행 산업(렌터카, 숙박, 여행 패키지, 교통)</summary>

|Field Name            |Description                                                                                              |Format                                      |
|----------------------|---------------------------------------------------------------------------------------------------------|--------------------------------------------|
|sender_account_id     |구매자 계정의 id                                                                                         |                                            |
|sender_first_name     |구매자의 이름                                                                                            |                                            |
|sender_last_name      |구매자의 성                                                                                              |                                            |
|sender_email          |구매자의 이메일                                                                                          |E.123 - Email Address                       |
|sender_phone          |구매자의 휴대전화 번호                                                                                   |E.123 - Telephone Number (national notation)|
|sender_country_code   |구매자의 국가 코드                                                                                       |ISO Alpha-2 Country Code                    |
|sender_create_date    |구매자의 계정 생성일                                                                                     |ISO 8601 date format                        |
|ota_type              |여행 산업 종류(숙박인 경우 hotel 등, 교통인 경우 train 등의 종류 입력)                                   |                                            |
|ota_service_start_date|서비스 제공 시작일                                                                                       |ISO 8601 date format                        |
|ota_service_end_date  |서비스 제공 종료일                                                                                       |ISO 8601 date format                        |
|ota_service_guest_t_f |게스트(서비스를 받는 사람) 변경 가능 여부, 사기범들이 변경 가능 서비스에 비용을 지불하는 경향이 있습니다.|변경 가능시 1, 아닐시 0                     |
|ota_start_country     |서비스를 시작한 국가 (ex: 차 렌트, 숙박이 예약된 국가)                                                   |ISO Alpha-2 Country Code                    |
|ota_start_city        |서비스를 시작한 도시                                                                                     |                                            |
|ota_start_zip_code    |서비스 시작 장소의 우편 번호                                                                             |                                            |
|cd_string_one         |여분 필드 1, 여행 산업 - 교통에 해당하는 머천트만 사용, 티켓 종류 입력                                   |ISO 8601 date format                        |

</details>

<details>

<summary>P2P 산업</summary>

|Field Name                   |Description           |Format                                      |
|-----------------------------|----------------------|--------------------------------------------|
|sender_account_id            |구매자 계정의 id      |                                            |
|sender_first_name            |구매자의 이름         |                                            |
|sender_last_name             |구매자의 성           |                                            |
|sender_email                 |구매자의 이메일       |E.123 - Email Address                       |
|sender_phone                 |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender_country_code          |구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender_create_date           |구매자의 계정 생성일  |ISO 8601 date format                        |
|receiver_account_id          |수신자 계정의 id      |                                            |
|receiver_create_date         |수신자의 계정 생성일  |ISO 8601 date format                        |
|receiver_email               |수신자의 이메일       |E.123 - Email Address                       |
|receiver_address_country_code|수신자의 국가 코드    |ISO Alpha-2 Country Code                    |

</details>

<details>

<summary>소매, 식품 산업</summary>

|Field Name         |Description                           |Format                                      |
|-------------------|--------------------------------------|--------------------------------------------|
|sender_account_id  |구매자 계정의 id                      |                                            |
|sender_first_name  |구매자의 이름                         |                                            |
|sender_last_name   |구매자의 성                           |                                            |
|sender_email       |구매자의 이메일                       |E.123 - Email Address                       |
|sender_phone       |구매자의 휴대전화 번호                |E.123 - Telephone Number (national notation)|
|sender_country_code|구매자의 국가 코드                    |ISO Alpha-2 Country Code                    |
|sender_create_date |구매자의 계정 생성일                  |ISO 8601 date format                        |
|dg_delivery_method |발신 방법                             |(`email`, `phone`) 중의 하나로 전송해야함   |
|highrisk_txn_flag  |고객사에서 고위험으로 분류한 상품 여부|위험 상품인 경우 1, 아닐 시 0               |

</details>

<details>

<summary>택시, 공유 이동수단 산업</summary>

|Field Name         |Description                                                     |Format                                      |
|-------------------|----------------------------------------------------------------|--------------------------------------------|
|sender_account_id  |구매자 계정의 id                                                |                                            |
|sender_first_name  |구매자의 이름                                                   |                                            |
|sender_last_name   |구매자의 성                                                     |                                            |
|sender_email       |구매자의 이메일                                                 |E.123 - Email Address                       |
|sender_phone       |구매자의 휴대전화 번호                                          |E.123 - Telephone Number (national notation)|
|sender_address_zip |(미국 머천트 한정) 구매자/발신자가 고객사 계정에 등록한 우편번호|                                            |
|sender_country_code|구매자의 국가 코드                                              |ISO Alpha-2 Country Code                    |
|sender_create_date |구매자의 계정 생성일                                            |ISO 8601 date format                        |
|highrisk_txn_flag  |차량 예약과 같은 고객사에서 고위험으로 분류한 결제 건 여부      |위험 거래인 경우 1, 아닐 시 0               |
|cd_string_one      |여분 필드 1                                                     |                                            |

</details>

<details>

<summary>통신사</summary>

|Field Name         |Description           |Format                                      |
|-------------------|----------------------|--------------------------------------------|
|sender_account_id  |구매자 계정의 id      |                                            |
|sender_first_name  |구매자의 이름         |                                            |
|sender_last_name   |구매자의 성           |                                            |
|sender_email       |구매자의 이메일       |E.123 - Email Address                       |
|sender_phone       |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender_country_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender_create_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>결제 시스템 보안 서비스 산업</summary>

|Field Name         |Description           |Format                                      |
|-------------------|----------------------|--------------------------------------------|
|sender_account_id  |구매자 계정의 id      |                                            |
|sender_first_name  |구매자의 이름         |                                            |
|sender_last_name   |구매자의 성           |                                            |
|sender_email       |구매자의 이메일       |E.123 - Email Address                       |
|sender_phone       |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender_country_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender_create_date |구매자의 계정 생성일  |ISO 8601 date format                        |

</details>

<details>

<summary>기타 산업</summary>

|Field Name         |Description           |Format                                      |
|-------------------|----------------------|--------------------------------------------|
|sender_account_id  |구매자 계정의 id      |                                            |
|sender_first_name  |구매자의 이름         |                                            |
|sender_last_name   |구매자의 성           |                                            |
|sender_email       |구매자의 이메일       |E.123 - Email Address                       |
|sender_phone       |구매자의 휴대전화 번호|E.123 - Telephone Number (national notation)|
|sender_country_code|구매자의 국가 코드    |ISO Alpha-2 Country Code                    |
|sender_create_date |구매자의 계정 생성일  |ISO 8601 date format                        |
|cd_string_one      |여분 필드 1           |                                            |
|cd_string_two      |여분 필드 2           |                                            |
|cd_int_one         |여분 숫자필드 1       |Number                                      |

</details>
