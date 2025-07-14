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
