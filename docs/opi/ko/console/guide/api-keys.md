---
title: 내 식별코드, API Keys
description: ''
targetVersions:
  - v1
---

## 내 식별코드 , API Keys

## 위치

![](</gitbook-assets/ko/Untitled (8).png>)

`상점 계정 관리` 페이지 우측 상단에 `내 식별코드 , API Keys` 를 누르시면 고객사의 식별 코드 및 api 정보를 확인 및 수정하실 수 있습니다.

## 고객사 식별 코드

![](</gitbook-assets/ko/Untitled (9).png>)

포트원에서 제공하는 모듈을 사용할 때 고객사를 구분하기 위해, 관리자 페이지 가입과 동시에 자동 발급되는 고유한 문자입니다.

[고객사 식별코드란 무엇인가요?](https://portone.gitbook.io/docs/ready/3.)

## Rest API Key , API Secret Key

[REST API 키 와 secret은 어떻게 사용하나요?](https://portone.gitbook.io/docs/ready/3.)

`재발급` 버튼을 통해 api secret key 를 다시 발급받으실 수 있습니다. 해당 기능을 사용하시면 기존 secret 이 무효처리 되므로 확인 후 실행해 주세요.

## 티어코드

하위상점 설정시 티어코드를 임의로 발급해 주신뒤 `imp.init` 대신 `IMP.agency('고객사 식별코드', '티어코드')` 에서 호출해줍니다.\
\
[티어코드란 무엇인가요?](https://portone.gitbook.io/docs/tip/agency-and-tier)
