---
title: 키움페이 유의사항
description: 결제 연동시 유의사항을 안내합니다.
targetVersions:
  - v1
---

## 키움페이 결제 특이사항

<details>

<summary>PC 결제는 `success`, 모바일 결제는 `imp_success` 전달</summary>

PC와 모바일에서 결제창이 각기 다른 방식으로 호출되기 때문에, 결제 후속 프로세스에도 차이가 있습니다.
PC 결제의 경우 키움페이 결제창이 iframe 방식으로 호출되기 때문에 결제 프로세스 완료 후 콜백 함수
(`IMP.request_pay` 함수 호출시 전달한 두 번째 파라미터)가 호출되지만, 모바일 결제의 경우 키움페이 결제창이 키움페이 URL로
리디렉션되기 때문에 결제 프로세스 완료 후 지정된 URL(`m_redirect_url`)로 302 리디렉션 됩니다.
이때 결제 실패/성공 여부를 의미하는 파라미터가 전달되는데, PC 결제시에는 `success`, 모바일 결제시에는 `imp_success`로
파라미터 명이 다르오니 유의하시기 바랍니다. 아래 예시를 참고해 주세요.

- \[PC결제] iframe → 콜백 함수 호출 → 콜백 함수로 전달되는 response 객체에 `success` 키 값으로 전달

  ```tsx
  IMP.request_pay(
    {
      // 중략
    },
    function (response) {
      const { success } = response; // 결제 성공 또는 실패 여부
      if (success) {
        // 결제 성공 시 프로세스
      } else {
        // 결제 실패 시 프로세스
      }
    },
  );
  ```

- \[모바일 결제] 리디렉션 → m\_redirect\_url로 302 리디렉션 → `imp_success` 쿼리 파라미터 전달

  ```text
  /**
   * m_redirect_url을 https://myservice.com/payments/complete로 설정한 후
   * 결제 프로세스 종료 됐을때 302 리디렉션 되는 URL 예시
   */
  https://myservice.com/payments/complete?**imp_success=true**&imp_uid=imp1234567890&merchant_uid=mid_123467890
  ```

**`imp_success`와 `success`는 deprecated** 되었습니다.

`imp_success` 파라미터와 `success` 파라미터는 **deprecated** 되었기 때문에 해당 파라미터를 기반으로
결제 실패/성공 여부를 판단하시는걸 지양해주세요.

해당 파라미터는 단순히 포트원에서 고객사 클라이언트로 응답되는 시기의 결제 실패/성공 여부를 내려주기 때문에
이 값은 키움페이에서 포트원으로 결제 결과를 통지하고 포트원의 DB 업데이트가 완료된 시점인 경우에만
정확합니다.

그런데 **키움페이 → 포트원으로의 결제 결과 전달 → 포트원 DB 업데이트 및 포트원 → 고객사 클라이언트로의 응답이 비동기로 동작**하기 때문에
**실제로는 결제가 정상적으로 완료된 경우에도 포트원 DB에 업데이트 시점에 따라 고객사 클라이언트로 응답되는
`imp_success` 또는 `success` 파라미터가 `false`일 수** 있습니다.

따라서 포트원 → 고객사 클라이언트로 응답되는 결과 데이터 중 포트원 거래 번호(`imp_uid`)와 고객사 주문 번호(`merchant_uid`)를 이용하여
포트원 결제내역 조회 API([GET /payments/{imp\_uid}](https://developers.portone.io/api/rest-v1/payment#get%20%2Fpayments%2F%7Bimp_uid%7D))를 호출한 후
결제 상태(`status`)를 보고 결제 실패(`failed`)/성공(`paid`) 여부를 판단하시길 권장드립니다.

</details>

<details>

<summary>사파리 브라우저 - 하나카드 / NH앱캐시 결제시 유의사항</summary>

사파리 브라우저에서 하나카드 / NH앱캐시(계좌이체) 결제 시 아래와 같이
`세션 유효기간이 초과되어 카드사와 연결이 종료되었습니다`와 같은 메시지가 렌더링되며 결제 진행이 불가능한 경우가 발생할 수 있습니다.

[참고이미지](<https://developers.portone.io/gitbook-assets/ko/image (116).png>)

이러한 현상이 발생한 경우, 사파리 환경설정에서 아래와 같이 `크로스 사이트 추적 방지` 해제 및 `모든 쿠키 차단`이 모두 해제하신 후 다시 시도하시길 바랍니다.

[참고이미지](<https://developers.portone.io/gitbook-assets/ko/image (159).png>)

</details>

<details>

<summary>사파리/파이어폭스 브라우저 - BC카드 결제시 유의사항</summary>

사파리와 파이어폭스에서 키움페이 결제창을 호출한 뒤 BC카드 선택 후 다음 버튼 클릭시 `지불에 실패하였습니다`라는 알림창이 뜨면서 결제 진행이
불가능한 경우가 발생할 수 있습니다.

[참고이미지](<https://developers.portone.io/gitbook-assets/ko/image (223).png>)

이러한 현상이 발생한 경우, 사파리 환경설정에서 아래와 같이 `*.payjoa.co.kr` 도메인에 대해 팝업을 `허용`으로 설정해야 합니다.

[참고이미지](<https://developers.portone.io/gitbook-assets/ko/image (256).png>)

</details>

<details>

<summary>실시간 계좌이체 유의사항 </summary>

키움페이의 경우 내부적으로 토스페이먼츠에서 제공하는 계좌이체를 사용하고 있어
토스 퀵계좌결제로 연결됩니다.

</details>

<details>

<summary>가상계좌 입금 완료시, 송금자 이름 정보만 저장됨</summary>

키움페이는 (발급된)가상계좌에 입금 완료시, 송금자의 정보(은행명, 계좌번호, 송금인) 중 송금자 이름 정보만 저장됩니다.
따라서 포트원 결제내역 조회([**GET /payments/{imp\_uid}**](https://developers.portone.io/api/rest-v1/payment#get%20%2Fpayments%2F%7Bimp_uid%7D))시
송금자의 은행코드(`bank_code`)과 은행명(`bank_name`)은 모두 NULL로 내려가며,
송금자 이름을 확인하기 위해서는 아래 예시와 같이 별도의 쿼리 파라미터(`extension`)를 `true`로 설정해주셔야 합니다.

```http
GET http://api.iamport.kr/payments/{포트원 번호}?**extension=true**
```

```json
{
  // ... 중략
  "bank_code": null, // 송금자 은행 코드 알 수 없음
  "bank_name": null, // 송금자 은행 이름 알 수 없음
  "extension": {
    // ... 중략
    "REMITTER": "홍길동" // 송금자 이름
  }
}
```

</details>

<details>

<summary>가상계좌 결제 취소시, PG사와 특약 필요</summary>

가상계좌 입금 완료 건에 대한 결제 취소(환불)는 가상계좌 발급 시 수수료가 부과되기 때문에 키움페이와
특약을 계약한 후 사용할 수 있습니다. 특약을 계약하지 않는 경우 기본적으로 가상계좌 결제 건의 환불은 불가능합니다.

</details>

<details>

<summary>가상계좌 결제 취소시, 실제 환불 금액 입금까지 7 영업일 이상 소요</summary>

가상계좌 결제 취소(환불)을 진행하는 경우 키움페이 측에서 수기로 확인한 후 환불 처리가 진행되기 때문에
환불 금액이 실제로 입금 될 때까지 7 영업일 이상 소요될 수 있습니다.

</details>

<details>

<summary>과세/면세/복합과세를 하나의 CPID로 이용하시는 경우</summary>

키움페이와 계약 진행 시 사용할 CPID 설정을 `건별구분`으로 발급 요청해 주셔야 합니다.
건별구분으로 발급된 경우에만 하나의 CPID로 과세/면세/복합과세 거래 건을 모두 처리할 수 있습니다.

</details>

<details>

<summary>면세금액은 카드 결제만 설정 가능</summary>

결제창(`IMP.request_pay` 함수) 호출시 총 결제 금액(`amount`)중 면세 금액(`tax_free`)을 설정할 수 있습니다.
단, 키움페이 시스템 상 면세 금액은 카드 결제(`pay_method: "card"`) 시에만 가능하고 계좌이체 / 가상계좌 결제 시에는
설정할 수 없어 전액 과세 처리 됩니다.

</details>

<details>

<summary>에스크로 결제 시 구매자 전화번호 자동 입력 불가</summary>

에스크로 결제시 결제 요청 시 입력된 구매자 전화번호가 결제창에 자동 완성되지 않습니다.

[참고이미지](<https://developers.portone.io/gitbook-assets/ko/image (253).png>)

</details>

<details>

<summary>비인증 결제 API 호출시 초당 호출 횟수 제한</summary>

비인증 결제 API 호출시 **초당 50건 이하**로 호출 하는 것을 권장합니다.
초당 50건 이상의 비인증 결제 API가 호출될 경우 오류가 발생할 수 있습니다.

</details>
