---
title: '[릴리즈노트] 2025-02-10 파트너 정산 자동화 업데이트'
category: 업데이트
tags:
  - 파트너정산
  - 업데이트
searchTags:
  - 업데이트
  - 릴리즈노트
  - 정산금
  - 정산정책
  - 파트너정산
datetime: 2025-06-10T05:56:46.664Z
---

<Callout title="2025년 2월 10일 파트너 정산 자동화 업데이트 소식을 안내드립니다." />



<Callout content="안녕하세요 파트너 정산 자동화팀입니다.

이번 업데이트에서는 정산정책관리 및 정산금 계산관리 기능이 더욱 강력해졌습니다.

다양한 정산 정책과 복잡한 정산 수식을 보다 쉽게 설정하고 자동화할 수 있도록 기능을 개선했습니다.

" />

## **주요 업데이트 사항**

#### **✔️**정산정책관리 및 정산금 계산관리 기능 고도화

#####  1️⃣맞춤형 정산 파라미터 설정

- 각 플랫폼에서 필요한 정산 입력 값을 직접 설정할 수 있도록 지원합니다.
- 사업자 유형, 구매자 유형, 다양한 할인 정책, 수수료, 부가세 정책 등을 고려한 맞춤형 설정이 가능합니다.

##### 2️⃣사용자 정의 정산 수식 지원

- 플랫폼의 정책에 맞춰 사용자 정의 수식 을 작성할 수 있습니다.

##### 3️⃣자유로운 계산 순서 조정

- 여러 개의 정산 수식을 조합하여 원하는 순서대로 적용할 수 있습니다.
- 예를 들어, 할인 금액 차감 후 수수료 적용 등의 시나리오 설정 가능합니다.

##### 4️⃣수식별 소수점 및 부가세 처리 기준 제공

- 회계 기준에 맞는 부가세 및 정산 금액에 대한 소수부 처리 기준을 설정하여 정밀한 정산이 가능합니다.



#### **✔️**이제 정산 자동화, 더 쉽고 유연하게!

이번 개선을 통해 정산 정책이 복잡한 플랫폼 비즈니스에서도 자동화가 더욱 쉬워집니다.

다양한 예외 사항을 고려한 정산 구조를 설정하고, 플랫폼에 맞는 정산 정책을 더욱 유연하게 운영해 보세요!

📢 업데이트 사용 방법: \[파트너 정산 자동화] → \[정산 정책 관리] → \[계산 관리]

### 🚧 API 변경사항

이제 [주문 정산건 생성](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#post%20%2Fplatform%2Ftransfers%2Forder)하실 때에 정산 파라미터를 활용하실 수 있습니다.



사용자 정의 함수의 계산 결과와 파라미터에 지정된 값을 응답 메세지에서 확인할 수 있습니다.

> 영향 API : [정산건 조회](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#get%20%2Fplatform%2Ftransfers%2F%7Bid%7D), [주문 정산건 생성](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#post%20%2Fplatform%2Ftransfers%2Forder), [주문 취소 정산건 생성](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#post%20%2Fplatform%2Ftransfers%2Forder-cancel), [정산건 다건 조회](https://developers.portone.io/api/rest-v2/platform.transfer?v=v2#get%20%2Fplatform%2Ftransfer-summaries)

- 사용자 정의 함수 : [PlatformOrderTransfer](https://developers.portone.io/api/rest-v2/type-def?v=v2#PlatformOrderTransfer).amount.userDefinedFormulas
- 정산 파라미터 : [PlatformOrderTransfer](https://developers.portone.io/api/rest-v2/type-def?v=v2#PlatformOrderTransfer).parameters

#####

##### [\[파트너정산 릴리즈노트\] 2025-02-10업데이트 보러가기↗](https://developers.portone.io/release-notes/platform/2025-02-10)
