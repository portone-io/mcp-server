---
title: 현금영수증은 어떻게 확인할 수 있나요?
category: 자주 묻는 질문 (일반 문의) > 결제서비스 > 결제서비스
tags:
  - 공통
  - 영수증
pgCompanies:
  - 공통
searchTags:
  - 현금영수증발행
  - 자진발급
  - 영수증발급방법
  - 현금영수증
---

### **현금영수증 발급 방법**

- 현금영수증 유형은 세가지 유형으로 구분될 수 있으며, 해당 설정은 결제대행사와 계약시 설정됩니다.
- 현재 이용중이신 상점아이디에 설정된 사항은 이용하시는 결제대행사를 통해 확인가능합니다.

#### **1. 구매자 요청등록**

- 결제시 PG사 결제창내에서 고객이 입력한 정보로 현금영수증이 발급 됩니다.

<Callout content="고객이 현금영수증 발급 체크 UI에서 현금영수증 정보를 입력하지 않는 경우에는 국세청이 지정한 코드 **&quot;010-000-1234&quot;**로 현금영수증이 발급됩니다.
해당 경우에는 포트원 관리자콘솔 내에서 현금영수증 발급 조회가 되지 않습니다." icon="💡" title="참고사항" />

#### **2. 직접 발행**

- 결제대행사를 통해서는 자동발행 되지 않고, 필요시 고객사에서 현금영수증 발행요청(개별등록) 하여 별도 발급하는 경우입니다.

<Callout content="포트원 현금영수증 발행/취소발행(삭제) API지원 : https://developers.portone.io/api/rest-v1/receipt
(지원 PG사 확인필요)" title="참고사항" icon="💡" />

#### **3. 자진발급**

- 발급대상 거래건에 대해 현금영수증이 발급되고 발급 미신청 거래도 국세청에서 지정한 코드 "010-000-1234"로 발급이 됩니다.
- "자진발급"의 경우 현금영수증 발급 체크 UI 가 노출된다 하더라도 고객이 현금영수증 발급 체크 UI에서 현금영수증 정보를 입력하시면 입력값으로 현금영수증 발급되고, 
  고객이 현금영수증 발급 체크 UI에서 현금영수증 정보를 입력하지 않으시면 국세청이 지정한 코드 ‘010-000-1234’로 현금영수증 발급됩니다.
- PG사별로 차이가 있을 수 있지만, 결제창 내 현금영수증 발급 항목을 노출/비노출 제어는 "자진발급"으로 신청하신 경우 가능합니다.

<Callout content="PG사별로 차이가 있을 수 있지만, 결제창 내 현금영수증 발급 항목을 노출/비노출 제어는 &quot;자진발급&quot;으로 신청하신 경우 가능합니다." title="참고사항" icon="💡" />

<Callout content="&quot;자진발급&quot;은 국세청에서 지정한 코드(가상의 휴대폰번호) &quot;010-000-1234&quot; 로  현금영수증이 발행되어 소득공제시에 공제 대상(구매자(고객))을 알 수 가 없어, 구매자(고객)이 현금영수증 발행하여 소득공제를 받으려면 010-000-1234로 발행했을 때 응답되는 발행번호를 국세청 사이트에 등록하면서 자기 실제 주민번호나 휴대폰번호를 등록하면 그 사람의 소득공제에 속하게 되는 구조 입니다.

따라서, 자진발급 처리하게 되었을 때 &quot;현금영수증 발행 번호&quot;를 고객사에서 해당 고객에게 매번 알려줘야 하는 이슈가 있으므로(해당 고객이 실제 소득공제 등록을 하기 위해서) 고객사 입장에서는 번거로운 일이 될 수 있으니 참고부탁드립니다." title="유의사항" icon="❗" />

### 포트원을 통해 현금영수증 발행/삭제/조회 하기

1\. 포트원을 통한 결제 (포트원 관리자콘솔>현금영수증 발급내역> 포트원거래분)

- 발행 API : [POST `/receipts/{imp_uid}`↗](https://developers.portone.io/api/rest-v1/receipt#post%20%2Freceipts%2F%7Bimp_uid%7D)
- 삭제 API : [DELETE `/receipts/{imp_uid}`↗](https://developers.portone.io/api/rest-v1/receipt#delete%20%2Freceipts%2F%7Bimp_uid%7D)
- 조회 API : [GET `/receipts/{imp_uid}`↗](https://developers.portone.io/api/rest-v1/receipt#get%20%2Freceipts%2F%7Bimp_uid%7D)
- 지원 가능한 PG : <Tag text="KG이니시스" /> <Tag text="NHN KCP" /> <Tag text="나이스페이먼츠" /> <Tag text="KICC" /> <Tag text="헥토파이낸셜" /> <Tag text="토스페이먼츠(신모듈)" /> <Tag text="KSPAY" /> <Tag text="페이조아" />

2\. 포트원과 별개의 현금결제 (포트원 관리자콘솔>현금영수증 발급내역>고객사 자체거래분)

- 발행 API : [POST `/receipts/external/{merchant_uid}`↗](https://developers.portone.io/api/rest-v1/receipt#post%20%2Freceipts%2Fexternal%2F%7Bmerchant_uid%7D)
- 삭제 API : [DELETE `/receipts/external/{merchant_uid}`↗](https://developers.portone.io/api/rest-v1/receipt#delete%20%2Freceipts%2Fexternal%2F%7Bmerchant_uid%7D)
- 조회 API : [GET `/receipts/external/{merchant_uid}`↗](https://developers.portone.io/api/rest-v1/receipt#get%20%2Freceipts%2Fexternal%2F%7Bmerchant_uid%7D)
- 지원 가능한 PG : <Tag text="KG이니시스" /> <Tag text="NHN KCP" /> <Tag text="나이스페이먼츠" /> <Tag text="KICC" /> <Tag text="헥토파이낸셜" /> <Tag text="토스페이먼츠(신모듈)" /> <Tag text="KSPAY" />

<Callout title="영수증 API 가이드 보러가기↗" />
