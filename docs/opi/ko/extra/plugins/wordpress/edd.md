---
title: Easy Digital Downloads 플러그인
description: Easy Digital Downloads(EDD)용 플러그인을 통해 포트원과 연동합니다.
targetVersions:
  - v1
---

<div class="hint" data-style="warning">

해당 플러그인은 현재 유지보수 되지 않으며, 신규 워드프레스 버전에서는 정상작동을 보장하지 않습니다.\
연동과 관련하여 기술지원이 필요하신 경우 <support@portone.io>로 문의바랍니다.

</div>

이 문서는 포트원 [Easy Digital Downloads(EDD)용
결제플러그인](http://ko.wordpress.org/plugins/iamport-for-easy-digital-downloads/)을 사용하여
워드프레스 EDD 시스템에 쉽고 빠르게 결제를 연동하는 방법을 설명합니다.

## 플러그인 설치 및 활성화하기

포트원 EDD 플러그인을 워드프레스 사이트에 설치합니다. 해당 플러그인을 사용하기 위해서 [Easy Digital
Downloads(EDD) 플러그인](http://ko.wordpress.org/plugins/easy-digital-downloads/)이 설치되어 있어야
합니다.

먼저 워드프레스 관리자 페이지에서 **플러그인 > 플러그인 추가하기** 메뉴를 클릭합니다. **플러그인
추가** 페이지의 상단 플러그인 검색창에 `아임포트`를 검색하여 결과 목록에 있는 **아임포트
결제플러그인 for Easy Digital Downloads**의 **지금 설치하기** 버튼을 눌러 설치를 진행합니다.

![](/gitbook-assets/ko/edd-1.png)

설치가 완료되면 나타나는 **활성화** 버튼을 눌러 플러그인을 활성화합니다.

![](/gitbook-assets/ko/edd-2.png)

## 일반결제 연동하기

다양한 결제수단을 제공하는 일반결제 기능을 워드프레스 EDD 시스템에 연동할 수 있습니다.

## STEP1: 결제 수단 활성화하기

워드프레스 관리자 페이지의 **Downloads > 설정 > Payment Gateways** 페이지로 이동합니다. **Payment
Gateways** 항목에 사용하고자 하는 결제 수단을 선택하여 활성화합니다. **Default Gateway** 항목에는
기본적으로 사용할 결제 수단을 선택합니다.

![](/gitbook-assets/ko/edd-3.png)

## STEP2: 고객사 정보 입력하기

**Payment Gateways** 페이지 상단에서 설정하고자 하는 포트원 결제 수단을 선택합니다.

![](/gitbook-assets/ko/edd-4.png)

페이지 하단에 [포트원 관리자 콘솔](http://admin.portone.io)에서 확인한 고객사 정보를 입력합니다.
**변경 사항 저장** 버튼을 눌러 설정 내용을 저장합니다.

![](/gitbook-assets/ko/edd-5.png)
