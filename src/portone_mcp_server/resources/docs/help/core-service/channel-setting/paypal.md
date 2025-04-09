---
keywords:
  - 페이팔
  - 일반결제
  - 정기결제
  - 결제연동
  - 채널설정방법
  - 채널추가
title: 페이팔 채널설정방법
category: 결제서비스 (채널설정 및 이용안내) > 채널설정 > 채널설정
tags:
  - 페이팔
  - 결제
  - 채널설정방법
pgCompanies:
  - 페이팔
searchTags:
  - 페이팔
  - 페이팔 일반결제
  - 페이팔 SPB
  - SPB
  - 페이팔 정기결제
  - 페이팔 RT
  - RT
  - 페이팔연동
  - 페이팔 해외결제
  - 페이팔 관리자콘솔
  - 페이팔설정
  - 페이팔 테스트연동
  - 페이팔 테스트모드
  - 페이팔 실연동
  - 페이팔 실모드
  - 테스트연동
  - 테스트결제
  - 실연동
  - 채널추가
  - 결제연동
datetime: 2024-01-25T15:00:00.000Z
---

<Callout content="결제 연동을 위한 채널 설정 방법을 안내해 드립니다.
결제 연동을 위해서 채널설정은 필수이며 결제대행사와 연동방식별로 설정하는 정보는 상이할 수 있습니다.
또한 채널 설정 없이 결제 연동을 하실 경우 정상적인 호출이 불가하며, 오류가 발생됩니다." />

<Highlight url="#7_간편결제-일반결제" text="페이팔(Express Checkout) 설정 바로가기 ↓" />

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
- 정기결제 : 구매자의 결제정보를 저장해놓고 재결제하는 결제 (정기 / 비 정기결제)
" title="참고사항" icon="💡" />

## <Highlight text="결제창 일반결제(SPB)/정기결제(RT)" />

- 포트원 결제모듈 V1/V2에서 지원됩니다.

### **테스트 연동**

결제대행사와 계약 전에 미리 연동/개발이 가능한 테스트 연동환경입니다. 테스트 연동은 기본적인 결제 로직을 구현하실 수 있도록 미리 제공되는 범용적인 Key 입니다. 보다 자세한 테스트 연동 환경의 특징은 아래 가이드를 자세히 참조해주세요.

- [테스트 연동 특징 바로가기↗](https://help.portone.io/category/procedure/payment-integration/test?page=1)

<Callout content="1. 페이팔은 별도의 계약없이 포트원을 통해 가입신청 후 바로 서비스 이용이 가능합니다.
2. 테스트 환경에서 판매자계정은 반드시 포트원에서 제공하는 공용 계정으로 이용해주셔야 합니다.
3. 제공드리는 국가 외 다른 국가 결제테스트가 필요하신 경우 포트원 고객센터를 통해 별도 문의 주시기 바랍니다.
4. 테스트용 미국 계정은 간헐적으로 오류가 발생되므로 미국 대신 영국으로 테스트하시길 권장드립니다.
5. 페이팔 정책상 판매자와 구매자의 국가가 모두 한국으로 설정되는 경우 결제가 불가합니다." title="참고사항" icon="💡" />



#### **설정경로**

- [포트원 관리자콘솔↗](https://admin.portone.io/) > 결제 연동 > 채널관리 > + 채널 추가
  - 연동 모드 : 테스트 연동
  - 결제대행사 : 페이팔
  - 결제모듈 : 결제창 일반결제(SPB)/정기결제(RT)

#### **설정방법**

- 채널 이름 : 상점 정보만으로는 채널(PG)의 성격을 파악하기 어려워 채널(PG)의 이름을 설정하는 용도로 구분하기 위한 필수 설정값으로 임의값으로 설정이 가능합니다(단, 숫자, 공백, 글자, \_, - 만 가능)
- 채널 속성 : 결제
- PG상점아이디 (PayPal Merchant ID) : (지원 국가 / 판매자 ID)
  - US(미국) : 7WBB3CKT63FRG
  - JP(일본) : PX5CTVZJTRXG4
  - IT(이탈리아) : YGVQ2YJLD33W8
  - AU(오스트레일리아) : 4WUX57522RQDA
  - FR(프랑스) : BEYAGWPTTDCHE
  - ES(스페인) : NWF4AFCDU5T68
  - UK(영국) : PA4DULN9V66L6
  - DE(독일) : NKSW9H8SBFNHS
  - KR(한국) : UFYSG9T7RFW2A
- 과세설정 : [포트원 결제사정산 서비스↗ ](https://admin.portone.io/reconciliation/summary)이용시 단순 과세계산을 위해 사용되는 항목으로 미 이용시 설정하지 않으셔도 무방합니다. 거래의 과세/면세 여부와는 관계없습니다.

#### **테스트용** **구매자** **계정** **설정/조회** **방법**

- [페이팔 테스트용 계정정보 가입하러가기↗](https://developer.paypal.com/dashboard/accounts)
- Sandbox Accounts 의 Country 가  US인  Personal(구매자) 계정으로 테스트해야 합니다.
- 페이팔 SPB(일반결제)
  - 판매자 계정 국가 : 해외 →  구매자 계정 국가 : 해외/국내(한국)
  - 판매자 계정 국가 : 국내(한국) → 구매자 계정 국가 : 해외 (국내(한국) 구매자 이용불가)
- 페이팔 RT(정기결제)
  - 판매자 계정 국가 : 해외 → 구매자 계정 국가 : 해외 (국내(한국) 구매자 이용불가)
  - 판매자 계정 국가 : 국내(한국) → 구매자’ 계정 국가 : 해외 (국내(한국) 구매자 이용불가)
- [페이팔 테스트 결제용 카드 정보 보러가기↗](https://developer.paypal.com/api/rest/sandbox/card-testing/#link-creditcardgeneratorfortesting)



### **실 연동**

결제대행사와의 모든 계약을 마친 후 원천사(카드사. 은행 등)의 심사가 진행됩니다. 실 연동을 위한 특징은 아래 가이드를 통해 확인하실 수 있습니다.

- [실 연동 특징 보러가기↗](https://help.portone.io/category/procedure/payment-integration/real?page=1)

<Callout content="페이팔 일반결제 와 정기결제를 모두 이용하시는 경우 **전자결제 신청은 각각 접수해주시기 바랍니다.** 
대신, 포트원과 페이팔의 계정 조회 및 설정은 한번만 진행해주시면 됩니다." icon="💡" title="참고사항" />



#### **설정경로**

- [포트원 관리자콘솔↗](https://admin.portone.io/) > 결제 연동 > 채널관리 > + 채널 추가
  - 연동 모드 : 실 연동
  - 결제대행사 : 페이팔
  - 결제모듈 : 결제창 일반결제(SPB)/정기결제(RT)

#### **설정방법**

- 채널 이름 : 상점 정보만으로는 채널(PG)의 성격을 파악하기 어려워 채널(PG)의 이름을 설정하는 용도로 구분하기 위한 필수 설정값으로 임의값으로 설정이 가능합니다(단, 숫자, 공백, 글자, \_, - 만 가능)
- 채널 속성 : 결제
- PG상점아이디 (PayPal Merchant ID) 클릭 (지원 국가 / 판매자 ID)
  - 페이팔 홈페이지 로그인 후 계정 ID 확인

#### **포트원 서비스 사용 설정 절차** <Highlight text="(필수)" />

- [포트원 관리자콘솔 ↗](https://admin.portone.io/) 전자결제 신청 후  담당자님 메일로 수신받으신 메일 내 링크로 접속하여 로그인 및 회원가입하여 아래와 같이 PortOne과 연동되도록 합니다.



<Callout title="V2 페이팔 개발가이드 보러가기↗" />

<Callout title="V1 페이팔(SPB) 개발가이드 보러가기↗" />

<Callout title="V1 페이팔(RT) 개발가이드 보러가기↗" />

## <Highlight text="결제창 일반결제(Express Checkout)" />

- 포트원 결제모듈 V1에서만 지원됩니다.
- 일회성 일반결제만 가능합니다.
- 페이팔 Express Checkout 방식의 경우 신규 신청 및 연동이 불가합니다. \
  페이팔 자체적으로도 페이팔 SPB 또는 RT 방식을 권고드리고 있어 신규 계약시에는 SPB(일반결제,), RT(정기결제)를 이용하시길 권장드립니다.

### **테스트 연동**

결제대행사와 계약 전에 미리 연동/개발이 가능한 테스트 연동환경입니다.

페이팔 Express Checkout 는 범용 테스트 Key가 발급되지 않아 아래 방법으로 테스트용 key를 직접 조회하시어 연동개발 하실 수 있습니다.

- [테스트 연동 특징 바로가기↗](https://help.portone.io/category/procedure/payment-integration/test?page=1)

<Callout content="1. 페이팔 페이지는 일반 운영용 URL과 **[Sandbox 페이지]**의 URL이 상이하오니 유의하시어 로그인하시기 바랍니다.
2. Business 계정이 Sandbox이면 구매자 계정도 Sandbox Accounts 목록에 존재하는 Personal 계정으로 결제(사용)해야 합니다.
3. Sandbox Accounts 의 Country 가  US인  Personal 계정으로 테스트해야 합니다.
4. **판매자와 구매자 계정 국가가 한국인 경우 페이팔 정책상 결제가 불가하며, 판매자는 한국이고 구매자가 미국인 경우는 가능합니다.**
5. 포트원 관리자콘솔 내 설정된 **`API 사용자 이름`**이 Business(DEFAULT) 계정정보에서 조회된 값으로 세팅되어야 합니다." title="참고사항" icon="💡" />



#### 설**정경로**

- [포트원 관리자콘솔↗](https://admin.portone.io/) > 결제 연동 > 채널관리 > + 채널 추가
  - 연동 모드 : 실 연동
  - 결제대행사 : 페이팔
  - 결제모듈 : 결제창 일반결제(Express Checkout)

#### **설정방법**

- 채널 이름 : 상점 정보만으로는 채널(PG)의 성격을 파악하기 어려워 채널(PG)의 이름을 설정하는 용도로 구분하기 위한 필수 설정값으로 임의값으로 설정이 가능합니다(단, 숫자, 공백, 글자, \_, - 만 가능)
- 채널 속성 : 결제
- PG상점아이디 (API Username) 클릭 (지원 국가 / 판매자 ID)
  - 페이팔 API credentials의 Username
  - 페이팔 API credentials의 Password
  - 페이팔 API credentials의 Signature

#### **판매자 테스트용 계정정보 조회 방법**

- [페이팔(Express Checkout) Developer↗](https://developer.paypal.com/dashboard/accounts) 로그인 > Testing Tools > SANDBOX Accounts > DEFAULT Business 계정의 \[View/edit account] 클릭





#### **구매자 테스트용 정보 조회 방법**

- (페이팔 Developer↗ ]\([https://developer.paypal.com/dashboard/accounts)로그인](https://developer.paypal.com/dashboard/accounts\)%EB%A1%9C%EA%B7%B8%EC%9D%B8) > Testing Tools > SANDBOX Accounts > DEFAULT Personal 계정의 \[View/edit account] 클릭





#### **페이팔 테스트용 테스트 머니 설정 방법**

- [페이팔 Developer↗](https://developer.paypal.com/dashboard/accounts) 로그인 > SANDBOX Accounts > DEFAULT Personal 계정의 \[Duplicate account] 클릭 > 팝업창에 금액 설정



### **실 연동**

페이팔의 경우 예외적으로 별도 계약절차가 없으므로 페이팔 페이지에서 확인된 연동 key를 활용하여 바로 실 운영환경으로 연동하실 수 있습니다.

- [실 연동 특징 보러가기↗](https://help.portone.io/category/procedure/payment-integration/real?page=1)

<Callout content="1. **판매자와 구매자 계정 국가가 한국인 경우 페이팔 정책상 결제가 불가하며, 판매자는 한국이고 구매자가 미국인 경우는 가능합니다.**
2. 페이팔 정책상 원화결제(KRW) 지원이 불가합니다." title="참고사항" icon="💡" />



#### **설정경로**

- [포트원 관리자콘솔↗](https://admin.portone.io/) > 결제 연동 > 채널관리 > + 채널 추가
  - 연동 모드 : 실 연동
  - 결제대행사 : 페이팔
  - 결제모듈 : 결제창 일반결제(Express Checkout)

#### **설정방법**

- 채널 이름 : 상점 정보만으로는 채널(PG)의 성격을 파악하기 어려워 채널(PG)의 이름을 설정하는 용도로 구분하기 위한 필수 설정값으로 임의값으로 설정이 가능합니다(단, 숫자, 공백, 글자, \_, - 만 가능)
- 채널 속성 : 결제
- PG상점아이디 (API Username) : 페이팔 홈페이지 로그인하여  API credentials 정보조회
- 페이팔 API credentials의 API Password : 페이팔 홈페이지 로그인하여  API credentials 정보조회
- 페이팔 API credentials의 Signature : 페이팔 홈페이지 로그인하여  API credentials 정보조회

#### **판매자 실 운영 환경 계정정보 조회 방법**

- [PayPal 로그인 ↗](https://www.paypal.com/kr/business) > 우측 상단의 계정 클릭 > 계정 설정 에서 "계정 엑세스" 메뉴의 "API 엑세스"의 업데이트 클릭



<Callout title="페이팔(Express Checkout) 개발가이드 보러가기↗" />
