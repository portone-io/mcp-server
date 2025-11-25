---
title: '[공지] 포트원 V1 API 응답 필드 추가 안내'
category: 공지사항
tags:
  - 공지사항
  - V1
searchTags:
  - 공지
  - 응답필드 추가
  - 빌링키정보
  - 샌드박스 추가
datetime: 2025-11-24T00:00:00.000Z
---

안녕하세요, 코리아포트원 개발팀입니다.

항상 저희 코리아포트원 서비스를 이용해주셔서 감사드리며,
**포트원 V1 REST API 응답 관련 변경 사항**이 있어 아래와 같이 안내드립니다.

<Highlight text="1.변경 개요" />

- **결제 내역 및 빌링키 정보**를 반환하는 V1 API의 응답 객체에 **\`sandbox\`(boolean)** 필드가 추가됩니다.

<Highlight text="2.추가 필드 의미" />

- 결제/빌링키 발급 시 사용된 포트원 결제 채널의 연동 모드를 나타냅니다.

<Indent level="1">\* **true** : 테스트 \* **false** : 실연동</Indent>

<Highlight text="3.대상 API" />

- 결제 내역이 응답에 포함되는 API

| 카테고리            | API 설명                | HTTP 메서드 / 경로                                             |
| --------------- | --------------------- | --------------------------------------------------------- |
| 결제 관련 API       | 결제내역 단건조회             | GET /payments/`{imp_uid}`                                 |
|                 | 결제내역 복수조회             | GET /payments                                             |
|                 | 고객사 주문번호 기준 결제내역 단건조회 | GET /payments/find/`{merchant_uid}`/`{payment_status}`    |
|                 | 고객사 주문번호 기준 결제내역 복수조회 | GET /payments/findAll/`{merchant_uid}`/`{payment_status}` |
|                 | 결제 상태 기준 결제내역 복수조회    | GET /payments/status/`{payment_status}`                   |
|                 | 결제 취소                 | POST /payments/cancel                                     |
| 비인증 결제 관련 API   | 비 인증 결제(일회성)          | POST /subscribe/payments/onetime                          |
|                 | 비 인증 결제(빌링키)          | POST /subscribe/payments/again                            |
| 정기 결제 관련 API    | 결제 실패 재시도             | POST /subscribe/payments/schedule/`{merchant_uid}`/retry  |
| 빌링키 관련 API      | 빌링키 결제 복수조회           | GET /subscribe/customers/`{customer_uid}`/payments        |
| 가상계좌 관련 API     | 가상계좌 발급               | POST /vbanks                                              |
|                 | 가상계좌 발급정보 수정          | PUT /vbanks/`{imp_uid}`                                   |
|                 | 가상계좌 발급취소             | DELETE /vbanks/`{imp_uid}`                                |
| 편의점 결제 관련 API   | 수납번호 발급               | POST /cvs                                                 |
|                 | 수납취소                  | DELETE /cvs                                               |
| 베네피아 포인트 관련 API | 포인트 결제 요청             | POST /benepia/payment                                     |
| KCP 퀵페이 관련 API  | KCP 선불머니 결제           | POST /kcpquick/payment/money                              |

- 빌링키 정보가 응답에 포함되는 API

| 카테고리       | API 설명      | HTTP / 메서드                                   |
| ---------- | ----------- | -------------------------------------------- |
| 빌링키 관련 API | 빌링키 정보 단건조회 | GET /subscribe/customers/`{customer_uid}`    |
|            | 빌링키 정보 복수조회 | GET /subscribe/customers                     |
|            | 빌링키 발급      | POST /subscribe/customers/`{customer_uid}`   |
|            | 빌링키 삭제      | DELETE /subscribe/customers/`{customer_uid}` |

<Highlight text="4. 하위호환성 및 동작" />

본 변경은 개발자 센터에 명시된 하위호환성 보장 정책을 준수하며 무결성을 보장합니다.

<Highlight text="5. 적용 일정" />

- **2026년 1월 26일 월요일**

<Callout icon="💡" title="참고 및 유의사항" content="- 엄격한 역직렬화, 스키마 검증 시 추가 필드를 허용하지 않도록 설정 하고 있는 경우 오류가 발생할 수 있습니다.
- 기존 서비스 제공에 이상이 없도록 하위호환성 보장을 준수해주시기 바랍니다." />

코리아포트원 서비스를 이용해주시어 감사드리며 더 나은 서비스 제공을 위해 항상 노력하겠습니다. \
궁금한 사항이나 추가적인 정보가 필요하시면 언제든지 **<tech.support@portone.io>** 문의 주시기 바랍니다.

감사합니다.\
코리아포트원 개발팀 드림
