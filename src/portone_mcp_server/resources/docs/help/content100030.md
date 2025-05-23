---
title: '[점검] 카카오페이 시스템 점검 공지'
category: 공지사항
tags:
  - 카카오페이
  - 공지사항
datetime: 2024-03-18T10:02:37.923Z
---

안녕하세요, 포트원 고객지원팀입니다.

2023년 9월 17(일) 01:00 \~ 07:00 (6시간) 일자에 카카오페이 내부적으로 시스템 점검 일정이 예정되어있어 미리 공지· 공유드립니다.

아래 내용 참고하시어 운영간 차질 없으시기 바랍니다.

감사합니다.

---

안녕하세요, 카카오페이입니다.\
항상 카카오페이 서비스를 이용해 주셔서 진심으로 감사드립니다.

카카오페이 전체 시스템 작업이 9월 17일(일)로 예정되어 있어 안내드리오니

아래 상세 내용을 업무에 참고하시기 바랍니다.

(중요) 2023년 9월 17일(일) 새벽 \[방화벽 교체를 위한 서비스 점검]

가. 내용

\- 카카오페이 네트워크 대역폭 개선 및 신규 방화벽 장비로 교체

\- 방화벽 설정값이 기존과 동일하도록 진행하여 작업 후 서비스 이슈 없도록 진행

나. 일정

\- 2023년 9월 17(일) 01:00 \~ 07:00 (6시간) (\*모니터링 시간 포함)

\*작업 진행 상황에 따라 종료 시간이 변경될 수 있습니다.

다. 서비스 영향

\- 작업시간 동안 카카오페이 모든 서비스 중단

\- 카카오톡페이 및 카카오페이 앱 내 "서비스 점검" 문구 노출

\- 파트너어드민 접속 시 "서비스 점검" 문구 노출

\- 매입/차액정산 (제휴사 ⇒ 카카오페이) 송신: 07:00 이후 송신 가능

\- 파일서비스 (대사파일) 수신: 13:00 이후 수신 가능

※ 온라인 결제 API 요청 시, http 에러응답 및 에러코드/메세지 응답

\*작업 상황에 따라 상세 메세지 `extra{}` 추가 제공될 수 있습니다.

```json
{
  "code": -7,
  "message": "service unavailable.",
  "extras": {
    "method_result_code": "9999",
    "method_result_message": "서비스를 점검하고 있습니다.\\\n빠르고 안정적인 서비스를 위해 노력중이니 조금만 기다려주세요.\\\n(%time)"
  }
}
```

라. 작업 진행 사유

\- 방화벽 가용량 최대치 확보하여 트래픽 증가 상황에 철저히 대응

\- 방화벽 패치 진행으로 운영 안정성 향상

담당자가 아닌 경우 관련 내용을 반드시 담당부서에 이관 부탁드리며

궁금하신 사항은 온라인결제 그룹메일(<kakaopay_pg@kakaopaycorp.com>)로 문의해주시기 바랍니다.

마음 놓고 사용할 수 있는 안전하고 편리한 서비스를 제공하기 위해 꾸준히 노력하겠습니다.

감사합니다.

카카오페이 드림.
