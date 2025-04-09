---
title: 매출전표는 어떻게 확인하나요?
category: 자주 묻는 질문 (일반 문의) > 결제서비스 > 결제서비스
seo:
  title: 영수증 확인방법
  description: >-
    포트원을 통한 영수증 확인방법을 안내드립니다. 포트원은 PG사에서 제공하는 매출전표 URL을 그대로 전달하고 있습니다. 현재 URL
    형태로만 제공되며 PG사에 따라 URL 접속시 구매정보를 인증할 수도 있습니다.
  keywords:
    - 영수증
tags:
  - 공통
  - 영수증
pgCompanies:
  - 공통
searchTags:
  - 승인전표
  - 매출전표 조회
  - 매출전표
---

<Callout content="포트원은 PG사에서 제공하는 매출전표의 URL을 그대로 전달드리고 있습니다.
영수증은 현재 URL 형태로만 제공되고 있으며 PG사에 따라 URL 접속시 구매정보를 인증해야할 수 있습니다." />

### **매출전표 확인방법**

**1. 포트원 관리자콘솔 내 조회**

- [포트원 관리자 콘솔](https://admin.portone.io/) > 결제내역 > 확인이 필요한 결제 행 클릭 > 결제내역 상세 > 승인영수증



##### **2. API 호출 후 응답**

##### API 호출하시면 매출전표 URL을 나타내는 receipt\_url 파라미터가 응답됩니다.

- 결제정보 조회 API : GET /payments/`{imp_uid}`
- 결제정보 조회 API : GET /payments/`{imp_uid}`
