---
title: 프로모션 결제 취소하기
description: 프로모션을 적용하여 승인된 결제건들에 대하여 취소/환불하는 방법을 안내합니다.
targetVersions:
  - v1
  - v2
---

## 프로모션 결제 취소하기

프로모션이 적용된 결제에 대해 결제 취소가 가능합니다.
결제 취소 시 취소 정책에 따라 적용된 프로모션 금액 중 회수된 금액만큼 프로모션 예산 금액으로 복구됩니다.

<div class="hint" data-style="info">

콘솔에서 프로모션 생성시 설정한 **프로모션 예산 미복구** 옵션에 따라 예산 복구 여부가 결정됩니다.

예산 복구를 원하지 않는 경우 프로모션 예산 미복구 옵션을 **활성화** 상태로 설정해 주세요.

</div>

<div class="hint" data-style="danger">

결제 취소시 경우에 따라 결제 건이 프로모션 정책에 해당되지 않을 수 있습니다.
이로 인해 취소 이후 잔여 승인 금액 (잔여 실 결제 금액)이 현재 잔여 승인 금액보다 커질 수 있으며, 이런 경우 취소가 불가능합니다.

- ex) `10,000원 이상 결제 시 10% 할인` 프로모션을 적용한 후 10,000원을 결제 요청한 경우
  실제 9,000원이 결제됩니다. 이후 500원을 취소 요청하게 되면 프로모션 정책에 해당하지 않게 되고,
  실제 결제되어야 하는 금액이 9,500원이 되어야 합니다.
  하지만 기존에 실제 승인된 금액이 9,000원이므로 이런 경우 결제 취소가 불가합니다.

</div>

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT START -->

### 예제 코드

```ts
// imp_uid, merchant_uid, amount, checksum, retain_promotion 등 정보를 전달받습니다.
// 포트원 결제 취소 API 호출
const onetimeResponse = await fetch("https://api.iamport.kr/payments/cancel", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    imp_uid: `imp_XXXXXXXXXXXX`, // 포트원 고유 주문번호
    merchant_uid: `order_id_XXXXXXXXXXXX`, // 고객사 주문번호
    amount: number, // 취소 요청 금액
    checksum: number, // 현 시점 취소 가능한 잔액
    reason: "단순 변심", // 취소 사유
    retain_promotion: boolean, // 프로모션 혜택 유지 여부
    // 중략...
  }),
});
```

### 주요 파라미터

- imp\_uid: string

  **포트원 고유 주문번호**

  - 취소할 결제건의 포트원 고유 주문번호를 전달합니다.
  - `imp_uid`와 `merchant_uid` 둘 중 하나는 필수입니다.

- merchant\_uid: string

  **고객사 주문번호**

  - 취소할 결제건의 결제 당시 설정한 고객사의 주문번호를 전달합니다.
  - `imp_uid`와 `merchant_uid` 둘 중 하나는 필수입니다.

- amount?: integer

  **결제 취소 요청 금액**

  - (부분)취소 요청 금액을 전달합니다.
  - 미입력시 잔여 취소 가능 금액만큼 전체 취소됩니다.

  <div class="hint" data-style="danger">

  취소 요청 금액은 프로모션 적용 금액을 고려하지 않고 전달합니다.

  ex) `10,000원 결제에 10% 할인` 프로모션이 적용되어 10,000을 결제 요청한 경우 실 승인 금액은 9,000원이고,
  이에 대해 전체 취소를 요청하는 경우 `amount`는 `10000`으로 전달해야 합니다.

  </div>

- checksum?: integer

  **현 시점 취소 가능한 잔액**

  - 현 시점 취소 가능한 잔액을 전달합니다.
  - 고객사의 계산 상 남아있는 잔여 금액과 포트원 내부 데이터 상 잔여 금액을 비교하며 불일치할 시 취소를 진행하지 않습니다.

  <div class="hint" data-style="danger">

  취소 요청 금액은 프로모션이 적용되지 않은 주문금액을 기준으로 전달합니다.

  ex) 20,000원 결제에 10% 할인 프로모션이 적용된 결제(실 승인 금액은 18,000원)에 대해 `amount`를 `10000`로 하여 1차 부분취소 완료.(실 취소 승인 금액은 9,000원)

  2차 부분 취소 시 `checksum`은 `10000`으로 전달.

  </div>

- reason?: string

  **취소 사유**

- retain\_promotion?: boolean

  **프로모션 혜택 유지 여부**

  - 프로모션 결제 취소 이후 잔여 금액이 프로모션 정책에 위반되더라도 정책을 계속해서 유지할지 여부를 전달합니다. (default: `false`)

  <div class="hint" data-style="warning">

  프로모션 할인이 적용된 거래 건을 여러번 부분 취소하는 경우 처음 선택한 취소 옵션으로만 가능합니다. 예를 들어 \[프로모션 혜택 유지]로 처음 부분 취소한 경우 동일 거래 건에 대해 부분 취소를 진행하는 경우 \[프로모션 혜택 유지] 옵션으로만 취소가 가능합니다.

  </div>

  - \<Parameter.Type>true\</Parameter.Type>

    **프로모션 할인 혜택 유지**

    부분 취소 후 남은 결제 금액이 원래 프로모션 적용 기준보다 낮아지더라도, 최초 적용된 할인 혜택을 그대로 유지합니다.
    이 경우 최초 할인 적용 시 산출된 할인율 또는 할인액을 기준으로, 부분 취소 후 남은 주문금액에 동일 할인 비율을
    재적용하여 최종 결제 금액을 계산합니다.

    - **할인율 적용 예시:**
      - **조건:** '5천원 이상 결제 시 10% 할인'

      - **처리:**
        1. 주문금액 6,000원에 10% 할인 적용 → 최종 결제액: 6,000원 x 90% = 5,400원
        2. 2,000원 부분 취소 시 남은 주문금액: 6,000원 - 2,000원 = 4,000원
        3. 유지 옵션에 따라 10% 할인 재적용: 4,000원 x 10% = 400원 할인
        4. 재계산 최종 결제액: 4,000원 - 400원 = 3,600원
        5. **취소 요청 금액:** 5,400원 - 3,600원 = 1,800원

    - **할인액 적용 예시:**
      - **조건:** '5천원 이상 결제 시 1,000원 할인'

      - **처리:**
        1. 주문금액 6,000원에서 1,000원 할인 적용 → 최종 결제액: 6,000원 - 1,000원 = 5,000원
        2. 2,000원 부분 취소 시 남은 주문금액: 6,000원 - 2,000원 = 4,000원
        3. 할인 효과는 5,000원 기준으로 1,000원 할인, 즉 20% 할인으로 해석됨
        4. 유지 옵션에 따라 20% 할인 재적용: 4,000원 x 20% = 800원 할인
        5. 재계산 최종 결제액: 4,000원 - 800원 = 3,200원
        6. **취소 요청 금액:** 5,000원 - 3,200원 = 1,800원

  - \<Parameter.Type>false\</Parameter.Type>

    **프로모션 할인 혜택 조정**

    부분 취소 후 남은 주문금액이 원래 프로모션 적용 기준(예: 5천원 이상)에 미달하면, 할인 혜택이 제거되어
    재적용되지 않습니다. 이 경우 남은 주문금액에서 할인 혜택을 적용하지 않고, 할인 미적용 금액 그대로 결제 금액을
    산출합니다.

    - **할인율 적용 예시:**
      - **조건:** '5천원 이상 결제 시 10% 할인'

      - **처리:**
        1. 주문금액 6,000원에 10% 할인 적용 → 최종 결제액: 6,000원 x 90% = 5,400원
        2. 2,000원 부분 취소 시 남은 주문금액: 6,000원 - 2,000원 = 4,000원
        3. 할인 조건 미충족으로 할인 혜택 제거 → 재계산 최종 결제액: 4,000원
        4. **취소 요청 금액:** 5,400원 - 4,000원 = 1,400원

    - **할인액 적용 예시:**
      - **조건:** '5천원 이상 결제 시 1,000원 할인'

      - **처리:**
        1. 주문금액 6,000원에서 1,000원 할인 적용 → 최종 결제액: 6,000원 - 1,000원 = 5,000원
        2. 2,000원 부분 취소 시 남은 주문금액: 6,000원 - 2,000원 = 4,000원
        3. 할인 조건 미충족으로 할인 혜택 제거 → 재계산 최종 결제액: 4,000원
        4. **취소 요청 금액:** 5,000원 - 4,000원 = 1,000원

<!-- VERSION-SPECIFIC: V1 ONLY CONTENT END -->

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT START -->

### 예제 코드

```ts
import { GetPaymentError, PaymentClient } from "@portone/server-sdk/payment";

const portone = PaymentClient({ secret: PORTONE_API_SECRET });

async function cancelPayment() {
  try {
    // 포트원 결제 취소 API 호출
    const cancelPaymentResponse = await portone.cancelPayment({
      paymentId: "1234567890",
      reason: "단순 변심",
      amount: 1000,
      promotionDiscountRetainOption: "RETAIN",
    });
    return cancelPaymentResponse;
  } catch (e) {
    if (e instanceof CancelPaymentError) {
      return e.data;
    }
    throw e;
  }
}
```

### 주요 파라미터

자세한 파라미터 구성은 [결제 취소 API 문서](https://developers.portone.io/api/rest-v2/payment?v=v2#post%20%2Fpayments%2F%7BpaymentId%7D%2Fcancel)를 참고해주시기 바랍니다.

- paymentId: string

  **결제 건 아이디**

  - 취소할 결제건의 결제 아이디 입니다.

- storeId?: string

  **상점 아이디**

  접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디로 취소 요청됩니다.

- amount?: integer

  **결제 취소 요청 금액**

  - (부분)취소 요청 금액을 전달합니다.
  - 미입력시 잔여 취소 가능 금액만큼 전체 취소됩니다.

  <div class="hint" data-style="danger">

  취소 요청 금액은 프로모션이 적용되지 않은 주문금액을 기준으로 전달합니다.

  ex) `10,000원 결제에 10% 할인` 프로모션이 적용되어 10,000을 결제 요청한 경우 실 승인 금액은 9,000원이고,
  이에 대해 전체 취소를 요청하는 경우 `amount`는 `10000`으로 전달해야 합니다.

  </div>

- reason?: string

  **취소 사유**

- promotionDiscountRetainOption?: <>
  &#x20; \<Parameter.Type>"RETAIN"\</Parameter.Type>
  &#x20; {" | "}
  &#x20; \<Parameter.Type>"RELEASE"\</Parameter.Type>
  \</>

  **프로모션 혜택 유지 여부**

  - 프로모션 결제 취소 이후 잔여 금액이 프로모션 정책에 위반되더라도 정책을 계속해서 유지할지 여부를 전달합니다. (기본값: "RELEASE")

  <div class="hint" data-style="warning">

  프로모션 할인이 적용된 거래 건을 여러번 부분 취소하는 경우 처음 선택한 취소 옵션으로만 가능합니다.
  예를 들어 \[프로모션 혜택 유지]로 처음 부분 취소한 경우 동일 거래 건에 대해 부분 취소를 진행하는 경우 \[프로모션 혜택 유지] 옵션으로만 취소가 가능합니다.

  </div>

  - \<Parameter.Type>"RETAIN"\</Parameter.Type>

    **프로모션 할인 혜택 유지**

    부분 취소 후 남은 결제 금액이 원래 프로모션 적용 기준보다 낮아지더라도, 최초 적용된 할인 혜택을 그대로 유지합니다.
    이 경우 최초 할인 적용 시 산출된 할인율 또는 할인액을 기준으로, 부분 취소 후 남은 주문금액에 동일 할인 비율을
    재적용하여 최종 결제 금액을 계산합니다.

    - **할인율 적용 예시:**
      - **조건:** '5천원 이상 결제 시 10% 할인'

      - **처리:**
        1. 주문금액 6,000원에 10% 할인 적용 → 최종 결제액: 6,000원 x 90% = 5,400원
        2. 2,000원 부분 취소 시 남은 주문금액: 6,000원 - 2,000원 = 4,000원
        3. 유지 옵션에 따라 10% 할인 재적용: 4,000원 x 10% = 400원 할인
        4. 재계산 최종 결제액: 4,000원 - 400원 = 3,600원
        5. **취소 요청 금액:** 5,400원 - 3,600원 = 1,800원

    - **할인액 적용 예시:**
      - **조건:** '5천원 이상 결제 시 1,000원 할인'

      - **처리:**
        1. 주문금액 6,000원에서 1,000원 할인 적용 → 최종 결제액: 6,000원 - 1,000원 = 5,000원
        2. 2,000원 부분 취소 시 남은 주문금액: 6,000원 - 2,000원 = 4,000원
        3. 할인 효과는 5,000원 기준으로 1,000원 할인, 즉 20% 할인으로 해석됨
        4. 유지 옵션에 따라 20% 할인 재적용: 4,000원 x 20% = 800원 할인
        5. 재계산 최종 결제액: 4,000원 - 800원 = 3,200원
        6. **취소 요청 금액:** 5,000원 - 3,200원 = 1,800원

  - \<Parameter.Type>"RELEASE"\</Parameter.Type>

    **프로모션 할인 혜택 조정**

    부분 취소 후 남은 주문금액이 원래 프로모션 적용 기준보다 낮아지면, 할인 혜택이 제거됩니다 .
    이 경우 남은 주문금액에서 할인 혜택을 적용하지 않고, 할인 미적용 금액 그대로 결제 금액을 산출합니다.

    - **할인율 적용 예시:**
      - **조건:** '5천원 이상 결제 시 10% 할인'

      - **처리:**
        1. 주문금액 6,000원에 10% 할인 적용 → 최종 결제액: 6,000원 x 90% = 5,400원
        2. 2,000원 부분 취소 시 남은 주문금액: 6,000원 - 2,000원 = 4,000원
        3. 할인 조건 미충족으로 할인 혜택 제거 → 재계산 최종 결제액: 4,000원
        4. **취소 요청 금액:** 5,400원 - 4,000원 = 1,400원

    - **할인액 적용 예시:**
      - **조건:** '5천원 이상 결제 시 1,000원 할인'

      - **처리:**
        1. 주문금액 6,000원에서 1,000원 할인 적용 → 최종 결제액: 6,000원 - 1,000원 = 5,000원
        2. 2,000원 부분 취소 시 남은 주문금액: 6,000원 - 2,000원 = 4,000원
        3. 할인 조건 미충족으로 할인 혜택 제거 → 재계산 최종 결제액: 4,000원
        4. **취소 요청 금액:** 5,000원 - 4,000원 = 1,000원

<!-- VERSION-SPECIFIC: V2 ONLY CONTENT END -->
