---
title: 나이스페이먼츠 채널설정 방법
category: 결제서비스 (채널설정 및 이용안내) > 채널설정 > 채널설정
seo:
  title: 나이스페이먼츠 채널설정 방법
  description: >-
    나이스페이먼츠 연동을 위한 채널 설정 방법을 안내드립니다. '테스트 연동, 실 연동, 결제 연동' 순으로 이뤄지며, 결제대행사와
    연동방식별로 설정하는 정보는 상이할 수 있습니다.
  keywords:
    - 나이스페이먼츠
    - 일반결제
    - 정기결제
    - 결제연동
    - 채널설정방법
    - 채널추가
tags:
  - 나이스페이먼츠
  - 결제
  - 채널설정방법
pgCompanies:
  - 나이스페이먼츠
searchTags:
  - 나이스페이먼츠
  - 나이스페이먼츠 테스트연동
  - 나이스페이먼츠 테스트모드
  - 나이스페이먼츠 실연동
  - 나이스페이먼츠 실모드
  - 나이스페이먼츠 일반결제
  - 나이스페이먼츠 정기결제
  - 나이스페이먼츠 결제실패
  - 테스트연동
  - 테스트결제
  - 실연동
  - 채널추가
  - 결제연동
  - 나이스페이먼츠 API
  - 나이스페이먼츠 구모듈
  - 나이스페이먼츠 신모듈
datetime: 2024-03-07T15:00:00.000Z
---

<Callout content="결제 연동을 위한 채널 설정 방법을 안내해 드립니다.
결제 연동을 위해서 채널설정은 필수이며 결제대행사와 연동방식별로 설정하는 정보는 상이할 수 있습니다.
또한 채널 설정 없이 결제 연동을 하실 경우 정상적인 호출이 불가하며, 오류가 발생됩니다." />

<Highlight url="#8_(구모듈)-결제창-일반결제-및-API-수기/정기결제" text="나이스페이먼츠 구모듈 설정 바로가기 ↓" />

<Callout content="[연동방식]
- 결제창 : 결제대행사(PG사)의 결제창을 띄워서 그 안에서 결제수단 선택 후 결제하는 방식
- API : 직접 구현한 UI를 통해 결제 수단 정보를 입력받아 API를 통해 결제하는 방식

[모듈버전]
- V1 : 포트원 결제모듈 V1. 다양한 결제대행사와 수단을 지원
- V2 : 포트원 차세대 결제 모듈로 직관적인 인터페이스를 지원
- 신모듈 : 결제대행사의 최신 버전의 모듈
- 구모듈 : 결제대행사의 구 버전의 모듈

[결제방식]
- 일반결제 : 구매자의 결제정보를 저장하지 않는 일회성 결제 (단건결제)
- 정기결제 : 구매자의 결제정보를 저장해놓고 재결제하는 결제 (정기 / 비 정기결제)" icon="💡" title="참고사항" />

## <Highlight text="(신모듈) 결제창 일반결제 및 API 수기/정기결제" />

- 포트원 결제모듈 V1/V2에서 지원됩니다.

### **테스트 연동**

결제대행사와 계약 전에 미리 연동/개발이 가능한 테스트 연동환경입니다. 테스트 연동은 기본적인 결제 로직을 구현하실 수 있도록 미리 제공되는 범용적인 Key 입니다. 보다 자세한 테스트 연동 환경의 특징은 아래 가이드를 자세히 참조해주세요.

- [테스트 연동 특징 보러가기↗](https://help.portone.io/category/procedure/payment-integration/test?page=1)

<Callout content="나이스페이먼츠 테스트 모드의 경우 실제 출금 되지만 매일 23:00~23:50분 사이 자동 취소됩니다.
나이스페이먼츠 테스트 모드에서는 아래 결제 방식을 사용할 수 없습니다. 실사용 시에만 이용 가능합니다.
- 신용카드 : NH농협카드 , KB국민카드 이용불가
- 휴대폰 소액결제 : KT 통신사 이용불가" title="체크사항" icon="💡 " />



#### **설정경로**

- [포트원 관리자콘솔↗](https://admin.portone.io/) > 결제 연동 > 채널관리 > + 채널 추가
- 연동 모드 : 테스트 연동
- 결제대행사 : 나이스페이먼츠
- 결제모듈 : 신모듈 결제창 일반결제ㅣ API 수기/정기결제

#### **설정방법**

- 채널 이름 : 상점 정보만으로는 채널(PG)의 성격을 파악하기 어려워 채널(PG)의 이름을 설정하는 용도로 구분하기 위한 필수 설정값으로 임의값으로 설정이 가능합니다(단, 숫자, 공백, 글자, \_, - 만 가능)
- 채널 속성 : 결제
- PG상점아이디 (MID) 클릭
  - 나이스페이먼츠 일반결제 가상계좌 결제창 : iamport03m 선택
  - 나이스페이먼츠 일반결제 결제창 : iamport00m 선택
  - 나이스페이먼츠 API 수기결제 : iamport01m 선택
- 과세설정 : [포트원 결제사정산 서비스↗ ](https://admin.portone.io/reconciliation/summary)이용 시 단순 과세 계산을 위해 사용되는 항목으로 미 이용 시 설정하지 않으셔도 무방합니다. 거래의 과세/면세 여부와는 관계없습니다.

### **실 연동**

<Callout content="1. 발급된 상점 아이디의 카드사 심사가 이루어지지 않았을 경우 결제가 실패되오니 카드사 심사 완료 여부를 체크해 주세요.
2. 나이스페이는 일반결제, 정기결제용 MID가 다르므로 연동하시는 결제방식에 맞는 MID가 맞는지 확인해주세요.
3. 여러 개의 상점 아이디를 설정한 경우 결제모듈 V1을 이용하여 결제창 호출(IMP.request_pay)시 pg 파라메터로 상점 아이디를 구분할 수 있습니다.
**pg : {pg 정의 값}.{상점 아이디}**
" title="체크사항" icon="💡" />

####

#### 설정경로

- [포트원 관리자콘솔↗](https://admin.portone.io/) > 결제 연동 > 채널관리 > + 채널 추가
- 연동 모드 : 실연동
- 결제대행사 : 나이스페이먼츠
- 결제모듈 : 결제창 일반결제ㅣ API 수기/정기결제

#### 설정방법

- 채널 이름 : 상점 정보만으로는 채널(PG)의 성격을 파악하기 어려워 채널(PG)의 이름을 설정하는 용도로 구분하기 위한 필수 설정값으로 임의값으로 설정이 가능합니다(단, 숫자, 공백, 글자, \_, - 만 가능)
- 채널 속성 : 결제
- PG상점아이디(MID) : 나이스페이먼츠 계약 후 메일로 전달받는 상점아이디 (10자리, IMP 로 시작합니다)
- Key : 나이스페이먼츠 계약 후 메일로 전달받는 key
- 과세설정 : [포트원 결제사정산 서비스↗](https://admin.portone.io/reconciliation/summary) 이용 시 단순 과세계산을 위해 사용되는 항목으로 실제 거래의 과세/면세 여부와는 관계없습니다.

<Callout title="V2 나이스페이먼츠 개발가이드 보러가기↗" />

<Callout title="V1 나이스페이먼츠(신모듈) 개발가이드 보러가기↗" />

## <Highlight text="(구모듈) 결제창 일반결제 및 API 수기/정기결제" />

- 포트원 결제모듈 V1에서만 지원됩니다.
- 간편결제 허브형은 카카오페이만 가능합니다.

### **테스트 연동**

결제대행사와 계약 전에 미리 연동/개발이 가능한 테스트 연동환경입니다. 테스트 연동은 기본적인 결제 로직을 구현하실 수 있도록 미리 제공되는 범용적인 Key 입니다. 보다 자세한 테스트 연동 환경의 특징은 아래 가이드를 자세히 참조해주세요.

- [테스트 연동 특징 보러가기↗](https://help.portone.io/category/procedure/test-mode?page=1)

<Callout content="1. 나이스페이먼츠 테스트모드의 경우 실제 출금 되지만 매일 23:00~23:50분 사이 자동 취소됩니다.
2. 나이스페이먼츠 테스트모드에서는 아래 결제 방식을 사용할 수 없으며,실사용 시에만 이용 가능합니다.
- 신용카드 : NH농협카드 , KB국민카드 이용불가
- 휴대폰 소액결제 : KT 통신사 이용불가" title="참고사항" icon="💡" />



#### **설정경로**

- [포트원 관리자콘솔↗](https://admin.portone.io/) > 결제 연동 > 채널관리 > + 채널 추가
- 연동 모드 : 테스트 연동
- 결제대행사 : 나이스페이먼츠
- 결제모듈 : 구모듈 결제창 일반결제ㅣAPI 수기/정기결제

#### **설정방법**

- 채널 이름 : 상점 정보만으로는 채널(PG)의 성격을 파악하기 어려워 채널(PG)의 이름을 설정하는 용도로 구분하기 위한 필수 설정값으로 임의값으로 설정이 가능합니다(단, 숫자, 공백, 글자, \_, - 만 가능)
- 채널 속성 : 결제
- PG상점아이디 (MID) 클릭
  - 나이스페이먼츠 일반결제 가상계좌 결제창 : iamport02m 선택
  - 나이스페이먼츠 일반결제 결제창 : iamport00m 선택
  - 나이스페이먼츠 API 수기결제 : iamport01m 선택
- 과세설정 : [포트원 결제사정산 서비스↗ ](https://admin.portone.io/reconciliation/summary)이용 시 단순 과세 계산을 위해 사용되는 항목으로 미 이용 시 설정하지 않으셔도 무방합니다. 거래의 과세/면세 여부와는 관계없습니다.

### **실 연동**

<Callout content="1. 발급된 상점아이디의 카드사 심사가 완료 되지 않았을 경우 결제가 실패되오니 꼭! 체크해 주세요.
2. 나이스페이먼츠는 일반결제,정기결제 용 MID가 다르므로 결제방식에 맞는 MID인지 꼭 확인해주세요.
3. 여러 개의 상점아이디를 설정한 경우 결제창 호출(IMP.request_pay)시 pg파라미터로 상점아이디를 구분할 수 있습니다.
- pg: {pg 정의 값}.{상점 아이디}" icon="💡" title="참고사항" />



#### **설정경로**

- [포트원 관리자콘솔↗](https://admin.portone.io/) > 결제 연동 > 채널관리 > + 채널 추가
- 연동 모드 : 실연동
- 결제대행사 : 나이스페이먼츠
- 결제모듈 : 구모듈결제창 일반결제ㅣ API 수기/정기결제

#### **설정방법**

- 채널 이름 : 상점 정보만으로는 채널(PG)의 성격을 파악하기 어려워 채널(PG)의 이름을 설정하는 용도로 구분하기 위한 필수 설정값으로 임의값으로 설정이 가능합니다(단, 숫자, 공백, 글자, \_, - 만 가능)
- 채널 속성 : 결제
- PG상점아이디(MID) : 나이스페이먼츠 계약 후 메일로 전달받는 상점아이디 (10자리, IMP 로 시작합니다)
- Key : 나이스페이먼츠 계약 후 메일로 전달받는 key
- 결제취소 비밀번호 : 나이스페이에 설정한 거래취소비밀번호와 동일한 값 설정
  - 설정경로 : [나이스페이먼츠 상점관리페이지↗](https://npg.nicepay.co.kr/logIn.do) > 가맹점정보 > 비밀번호관리 > 거래취소비밀번호 에서 설정(최대 10자리) 가능(포트원 관리자콘솔에도 동일하게 설정해주세요)
- 과세설정 : [포트원 결제사정산 서비스↗](https://admin.portone.io/reconciliation/summary) 이용 시 단순 과세계산을 위해 사용되는 항목으로 실제 거래의 과세/면세 여부와는 관계없습니다.

<Callout title="나이스페이먼츠(구모듈) 개발가이드 보러가기↗" />

### **가상계좌 입금통보 및 포트원 웹훅(Notification)설정 방법**

아래 두가지 사항은 가상계좌 혹은 정기결제 서비스를 이용하신다면 필수설정 항목입니다. \
가상계좌와 정기결제를 모두 이용하지 않으셔도 웹훅은 결제 안정화를 위해 최대한 설정하시는 것을 권장드립니다.

##### **1. PG사 → 포트원 서버 입금완료 통지 (가상계좌 입금통보 설정)**

가상계좌에 입금이 되면 <Highlight text=" PG사 → 포트원" />으로 입금완료 통지가 전달되며, 통지를 받을 포트원의 URL을 나이스페이먼츠 상점관리자페이지에 설정합니다. (MID별로 개별설정)

- 설정방법
  - 나이스페이먼츠(신모듈)
    [나이스페이먼츠 상점관리페이지↗](https://npg.nicepay.co.kr/logIn.do) > 가맹점 정보 > 기본정보 메뉴> 결제데이터통보 의 가상계좌 부분에 <https://tx-gateway-service.prod.iamport.co/nicepay-v2> 입력, 재전송간격 1분 , 재전송 횟수 3회 입력 후 \[저장] 버튼 클릭 합니다. OK체크 여부는 선택이며, 체크하지 않아도 무방합니다.
    정상적인 입금통보 전송, 재전송을 위해 **암호화 전송 여부**, **미전송시 체크를 해제**해야 합니다.
  - 나이스페이먼츠(구모듈)
    [나이스페이먼츠 상점관리페이지↗](https://npg.nicepay.co.kr/logIn.do) > 가맹점 정보 > 기본정보 메뉴> 결제데이터통보 의 가상계좌 부분에 <https://service.iamport.kr/nice_payments/notice_vbank> 입력, 재전송간격 1분 , 재전송 횟수 회혹은 그 이상으로 설정, OK체크, 가맹점 이메일 입력 후 \[저장] 버튼 클릭 합니다.



##### **2. 포트원 서버 → 고객사 서버 로 통지(웹훅 설정)**

가상계좌 채번시 및 입금완료시 <Highlight text="포트원 → 고객사" /> 서버로 통지가 즉시 이루어집니다. PG사에서 통지 받는대로 포트원 서버가 일종의 클라이언트 역할을 하여 지정된 URL로 POST요청을 보내는 개념으로 해당 URL을 통해 가상계좌 입금 여부 확인 가능합니다. (워드프레스로 연동하시는 경우 웹훅이 자동으로 설정됩니다)

- **설정방법 :** [포트원 관리자콘솔↗](https://admin.portone.io/) > 결제연동 > 결제 알림(Webhook) 관리에서 설정
