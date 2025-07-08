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
