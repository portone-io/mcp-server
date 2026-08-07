import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as getPaymentBreakdown from "../src/tools/getPaymentBreakdown.ts";
import * as getPaymentFailureReasons from "../src/tools/getPaymentFailureReasons.ts";
import * as getPaymentStatusBreakdownByDimension from "../src/tools/getPaymentStatusBreakdownByDimension.ts";
import * as getPaymentSummary from "../src/tools/getPaymentSummary.ts";
import * as getRealtimePaymentPulse from "../src/tools/getRealtimePaymentPulse.ts";
import {
  collectPaymentsByCursor,
  type PaymentRecord,
} from "../src/tools/request/getPaymentsByCursor.ts";
import {
  bucketOf,
  changeRate,
  classifyFailure,
  countCustomers,
  dimensionLabel,
  dimensionValue,
  formatIsoWithOffset,
  formatUtcOffset,
  normalizePayment,
  parseUtcOffsetMinutes,
  ratio,
  statusCounts,
} from "../src/tools/utils/paymentAnalytics.ts";
import {
  clearPaymentCache,
  collectNormalizedPayments,
} from "../src/tools/utils/paymentCache.ts";

const KST = 9 * 60;

function payment(overrides: Partial<PaymentRecord> = {}): PaymentRecord {
  return {
    status: "PAID",
    currency: "KRW",
    requestedAt: "2026-08-01T10:00:00Z",
    statusChangedAt: "2026-08-01T10:00:05Z",
    amount: { total: 10000, paid: 10000, cancelled: 0 },
    ...overrides,
  } as PaymentRecord;
}

describe("타임존/버킷팅", () => {
  it("ISO 오프셋을 분 단위로 추출한다", () => {
    expect(parseUtcOffsetMinutes("2026-08-01T00:00:00+09:00")).toBe(540);
    expect(parseUtcOffsetMinutes("2026-08-01T00:00:00-0330")).toBe(-210);
    expect(parseUtcOffsetMinutes("2026-08-01T00:00:00Z")).toBe(0);
    expect(parseUtcOffsetMinutes("2026-08-01T00:00:00")).toBeNull();
  });

  it("오프셋을 +09:00 형태로 표기한다", () => {
    expect(formatUtcOffset(540)).toBe("+09:00");
    expect(formatUtcOffset(-210)).toBe("-03:30");
    expect(formatUtcOffset(0)).toBe("+00:00");
  });

  it("일별 버킷 경계는 조회 타임존 기준으로 계산된다", () => {
    // UTC 15:30 은 KST 로 다음 날 00:30 이므로 KST 기준 8월 2일에 속한다.
    expect(bucketOf("2026-08-01T15:30:00Z", "DAY", KST)).toBe("2026-08-02");
    expect(bucketOf("2026-08-01T15:30:00Z", "DAY", 0)).toBe("2026-08-01");
  });

  it("시간/월 버킷을 만든다", () => {
    expect(bucketOf("2026-08-01T15:30:00Z", "HOUR", KST)).toBe(
      "2026-08-02T00:00+09:00",
    );
    expect(bucketOf("2026-08-01T15:30:00Z", "MONTH", KST)).toBe("2026-08");
  });

  it("분 단위 버킷은 bucketMinutes 로 내림 정렬한다", () => {
    expect(bucketOf("2026-08-01T10:07:59Z", "MINUTE", 0, 5)).toBe(
      "2026-08-01T10:05+00:00",
    );
    expect(bucketOf("2026-08-01T10:07:59Z", "MINUTE", 0, 1)).toBe(
      "2026-08-01T10:07+00:00",
    );
  });

  it("잘못된 일시는 null 을 반환한다", () => {
    expect(bucketOf("not-a-date", "DAY", 0)).toBeNull();
  });

  it("오프셋을 포함한 ISO 문자열을 만든다", () => {
    expect(formatIsoWithOffset(new Date("2026-08-01T15:30:00Z"), KST)).toBe(
      "2026-08-02T00:30:00+09:00",
    );
  });
});

describe("정규화", () => {
  it("결제수단 스키마 이름을 결제수단 코드로 변환한다", () => {
    expect(
      normalizePayment(payment({ method: { type: "PaymentMethodCard" } }))
        .methodType,
    ).toBe("CARD");
    expect(
      normalizePayment(payment({ method: { type: "PaymentMethodEasyPay" } }))
        .methodType,
    ).toBe("EASY_PAY");
    // 이미 정규화된 값이나 알 수 없는 값은 그대로 노출합니다.
    expect(
      normalizePayment(payment({ method: { type: "SOMETHING_NEW" } }))
        .methodType,
    ).toBe("SOMETHING_NEW");
  });

  it("간편결제 하위 결제수단의 카드 브랜드도 인식한다", () => {
    const normalized = normalizePayment(
      payment({
        method: {
          type: "PaymentMethodEasyPay",
          easyPayMethod: { type: "PaymentMethodCard", card: { brand: "VISA" } },
        },
      }),
    );
    expect(normalized.methodType).toBe("EASY_PAY");
    expect(normalized.cardBrand).toBe("VISA");
  });

  it("누락된 차원 값은 UNKNOWN, 에스크로 미사용은 NONE 으로 표기한다", () => {
    const normalized = normalizePayment(payment());
    expect(normalized.methodType).toBe("UNKNOWN");
    expect(normalized.pgProvider).toBe("UNKNOWN");
    expect(normalized.channelType).toBe("UNKNOWN");
    expect(normalized.platformType).toBe("UNKNOWN");
    expect(normalized.cardBrand).toBe("UNKNOWN");
    expect(normalized.escrow).toBe("NONE");
    expect(normalized.customerId).toBeNull();
  });

  it("금액이 없으면 0 으로 집계한다", () => {
    const normalized = normalizePayment(
      payment({ amount: null, currency: null }),
    );
    expect(normalized.total).toBe(0);
    expect(normalized.paid).toBe(0);
    expect(normalized.currency).toBe("UNKNOWN");
  });

  it("차원 값과 라벨을 추출한다", () => {
    const normalized = normalizePayment(
      payment({
        method: { type: "PaymentMethodCard" },
        channel: { type: "LIVE", pgProvider: "TOSSPAYMENTS" },
        origin: { platformType: "SDK_MOBILE" },
      }),
    );
    expect(dimensionValue(normalized, "METHOD")).toBe("CARD");
    expect(dimensionValue(normalized, "PG_PROVIDER")).toBe("TOSSPAYMENTS");
    expect(dimensionValue(normalized, "CHANNEL_TYPE")).toBe("LIVE");
    expect(dimensionValue(normalized, "PLATFORM_TYPE")).toBe("SDK_MOBILE");
    expect(dimensionLabel("METHOD", "CARD")).toBe("카드");
    expect(dimensionLabel("PLATFORM_TYPE", "SDK_MOBILE")).toBe("모바일 (SDK)");
    // 라벨 매핑이 없는 차원은 값을 그대로 사용합니다.
    expect(dimensionLabel("PG_PROVIDER", "TOSSPAYMENTS")).toBe("TOSSPAYMENTS");
  });
});

describe("집계 보조", () => {
  it("상태별 건수를 센다", () => {
    const payments = [
      normalizePayment(payment({ status: "PAID" })),
      normalizePayment(payment({ status: "PAID" })),
      normalizePayment(payment({ status: "FAILED" })),
    ];
    expect(statusCounts(payments)).toEqual({ PAID: 2, FAILED: 1 });
  });

  it("고객 수를 세고 고객 정보가 없는 건을 분리한다", () => {
    const payments = [
      normalizePayment(payment({ customer: { id: "c1" } })),
      normalizePayment(payment({ customer: { id: "c1" } })),
      normalizePayment(payment({ customer: { id: "c2" } })),
      normalizePayment(payment()),
    ];
    expect(countCustomers(payments)).toEqual({
      uniqueCustomers: 2,
      unknownCustomerCount: 1,
    });
  });

  it("비율과 증감률을 계산한다", () => {
    expect(ratio(1, 3)).toBe(0.3333);
    expect(ratio(1, 0)).toBe(0);
    expect(changeRate(110, 100)).toBe(0.1);
    expect(changeRate(50, 100)).toBe(-0.5);
    expect(changeRate(10, 0)).toBeNull();
  });
});

describe("실패 사유 대분류", () => {
  it("대표 사유를 각 대분류로 매핑한다", () => {
    expect(classifyFailure("사용자가 결제를 취소하였습니다")).toBe(
      "USER_CANCELLED",
    );
    expect(classifyFailure("카드 한도초과")).toBe("LIMIT_EXCEEDED");
    expect(classifyFailure("잔액부족")).toBe("INSUFFICIENT_BALANCE");
    expect(classifyFailure("유효기간 오류")).toBe("INVALID_CARD_INFO");
    expect(classifyFailure("비밀번호 오류")).toBe("AUTH_FAILED");
    expect(classifyFailure("카드사 거래거절")).toBe("ISSUER_DECLINED");
    expect(classifyFailure("지원하지 않는 결제수단입니다")).toBe(
      "NOT_SUPPORTED",
    );
    expect(classifyFailure("중복 결제 요청")).toBe("DUPLICATED");
    expect(classifyFailure("PG 응답 timeout")).toBe("TIMEOUT_OR_NETWORK");
    expect(classifyFailure("필수 파라미터가 누락되었습니다")).toBe(
      "INVALID_REQUEST",
    );
    expect(classifyFailure("PG사 시스템 오류")).toBe("PG_OR_SYSTEM_ERROR");
  });

  it("pgMessage 도 함께 판단하고, 사유가 없으면 UNKNOWN 이다", () => {
    expect(classifyFailure(null, "Do not honor")).toBe("ISSUER_DECLINED");
    expect(classifyFailure(null, null)).toBe("UNKNOWN");
    expect(classifyFailure("   ")).toBe("UNKNOWN");
  });

  it("어떤 규칙에도 맞지 않으면 ETC 로 분류한다", () => {
    expect(classifyFailure("XZ-9931")).toBe("ETC");
  });
});

// ---------------------------------------------------------------------------
// 커서 페이징
// ---------------------------------------------------------------------------

function page(count: number, startIndex: number) {
  return {
    items: Array.from({ length: count }, (_, index) => ({
      payment: payment({ transactionId: `tx-${startIndex + index}` }),
      cursor: `cursor-${startIndex + index}`,
    })),
  };
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status });
}

describe("커서 기반 전체 페이징 수집", () => {
  beforeEach(() => {
    clearPaymentCache();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("마지막 페이지가 요청 크기보다 작을 때까지 커서를 따라간다", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(jsonResponse(page(2, 0)))
      .mockResolvedValueOnce(jsonResponse(page(2, 2)))
      .mockResolvedValueOnce(jsonResponse(page(1, 4)));
    vi.stubGlobal("fetch", fetchMock);

    const result = await collectPaymentsByCursor({
      authorization: "PortOne secret",
      from: "2026-08-01T00:00:00+09:00",
      until: "2026-08-02T00:00:00+09:00",
      maxRecords: 100,
      pageSize: 2,
    });

    expect(result.type).toBe("success");
    if (result.type !== "success") return;
    expect(result.data.payments).toHaveLength(5);
    expect(result.data.requestCount).toBe(3);
    expect(result.data.truncated).toBe(false);

    // 두 번째 요청부터 직전 페이지 마지막 건의 커서를 전달합니다.
    const secondCall = new URL(fetchMock.mock.calls[1][0]);
    const body = JSON.parse(secondCall.searchParams.get("requestBody") ?? "{}");
    expect(body).toMatchObject({ cursor: "cursor-1", size: 2 });
  });

  it("maxRecords 상한에 도달하면 truncated 를 표시한다", async () => {
    const fetchMock = vi.fn(() => Promise.resolve(jsonResponse(page(2, 0))));
    vi.stubGlobal("fetch", fetchMock);

    const result = await collectPaymentsByCursor({
      authorization: "PortOne secret",
      from: "2026-08-01T00:00:00+09:00",
      until: "2026-08-02T00:00:00+09:00",
      maxRecords: 4,
      pageSize: 2,
    });

    expect(result.type).toBe("success");
    if (result.type !== "success") return;
    expect(result.data.payments).toHaveLength(4);
    expect(result.data.truncated).toBe(true);
  });

  it("커서가 진전되지 않으면 무한 루프 없이 중단한다", async () => {
    const stuck = {
      items: [{ payment: payment(), cursor: "same" }],
    };
    const fetchMock = vi.fn(() => Promise.resolve(jsonResponse(stuck)));
    vi.stubGlobal("fetch", fetchMock);

    const result = await collectPaymentsByCursor({
      authorization: "PortOne secret",
      from: "2026-08-01T00:00:00+09:00",
      until: "2026-08-02T00:00:00+09:00",
      maxRecords: 100,
      pageSize: 1,
    });

    expect(result.type).toBe("success");
    if (result.type !== "success") return;
    // 첫 페이지는 size 와 같은 개수를 반환하지만 커서가 그대로이므로 중단합니다.
    expect(result.data.requestCount).toBe(2);
  });

  it("401 응답에는 인증 설정 안내를 포함한다", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve(
          jsonResponse({ type: "UNAUTHORIZED", message: "invalid token" }, 401),
        ),
      ),
    );

    const result = await collectPaymentsByCursor({
      authorization: "Bearer expired",
      from: "2026-08-01T00:00:00+09:00",
      until: "2026-08-02T00:00:00+09:00",
      maxRecords: 100,
    });

    expect(result.type).toBe("error");
    if (result.type !== "error") return;
    expect(JSON.stringify(result.data)).toContain("PORTONE_API_SECRET");
  });

  it("동일 조건 재호출은 캐시를 재사용한다", async () => {
    const fetchMock = vi.fn(() => Promise.resolve(jsonResponse(page(1, 0))));
    vi.stubGlobal("fetch", fetchMock);

    const args = {
      authorization: "PortOne secret",
      from: "2026-08-01T00:00:00+09:00",
      until: "2026-08-02T00:00:00+09:00",
      maxRecords: 100,
    };
    const first = await collectNormalizedPayments(args);
    const second = await collectNormalizedPayments(args);

    expect(first.type).toBe("success");
    expect(second.type).toBe("success");
    if (first.type !== "success" || second.type !== "success") return;
    expect(first.data.cached).toBe(false);
    expect(second.data.cached).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("인증 주체가 다르면 캐시를 공유하지 않는다", async () => {
    const fetchMock = vi.fn(() => Promise.resolve(jsonResponse(page(1, 0))));
    vi.stubGlobal("fetch", fetchMock);

    const base = {
      from: "2026-08-01T00:00:00+09:00",
      until: "2026-08-02T00:00:00+09:00",
      maxRecords: 100,
    };
    await collectNormalizedPayments({ ...base, authorization: "Bearer a" });
    const other = await collectNormalizedPayments({
      ...base,
      authorization: "Bearer b",
    });

    expect(other.type).toBe("success");
    if (other.type !== "success") return;
    expect(other.data.cached).toBe(false);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});

describe("도구 설정", () => {
  const tools = [
    getPaymentSummary,
    getPaymentBreakdown,
    getPaymentFailureReasons,
    getPaymentStatusBreakdownByDimension,
    getRealtimePaymentPulse,
  ];

  it("각 도구는 고유한 이름과 입출력 스키마를 노출한다", () => {
    const names = tools.map((tool) => tool.name);
    expect(new Set(names).size).toBe(names.length);
    for (const tool of tools) {
      expect(tool.name).toBeTruthy();
      expect(tool.config.title).toBeTruthy();
      expect(tool.config.inputSchema).toHaveProperty("store");
      expect(tool.config.outputSchema).toHaveProperty("collection");
    }
  });

  it("기간 조회 도구는 from/to 를 받는다", () => {
    for (const tool of [
      getPaymentSummary,
      getPaymentBreakdown,
      getPaymentFailureReasons,
      getPaymentStatusBreakdownByDimension,
    ]) {
      expect(tool.config.inputSchema).toHaveProperty("from");
      expect(tool.config.inputSchema).toHaveProperty("to");
      expect(tool.config.inputSchema).toHaveProperty("maxPayments");
    }
  });

  it("준실시간 도구는 창 크기를 분 단위로 받는다", () => {
    expect(getRealtimePaymentPulse.config.inputSchema).toHaveProperty(
      "windowMinutes",
    );
    expect(getRealtimePaymentPulse.config.inputSchema).toHaveProperty(
      "bucketMinutes",
    );
  });
});

// ---------------------------------------------------------------------------
// 도구 실행 (원시 응답 → 집계 결과)
// ---------------------------------------------------------------------------

/** 브라우저 로그인 없이 인증된 것으로 처리하는 TokenProvider 스텁. */
const tokenProviderStub = {
  getToken: async () => ({
    state: "authorized" as const,
    authorization: "PortOne test-secret",
  }),
} as any;

const FIXTURE = [
  {
    status: "PAID",
    currency: "KRW",
    requestedAt: "2026-08-01T10:00:00+09:00",
    statusChangedAt: "2026-08-01T10:00:05+09:00",
    amount: { total: 10000, paid: 10000, cancelled: 0 },
    customer: { id: "c1" },
    method: { type: "PaymentMethodCard", card: { brand: "LOCAL" } },
    channel: { type: "LIVE", pgProvider: "TOSSPAYMENTS" },
    origin: { platformType: "SDK_PC" },
  },
  {
    status: "PAID",
    currency: "KRW",
    requestedAt: "2026-08-01T20:00:00+09:00",
    statusChangedAt: "2026-08-01T20:00:05+09:00",
    amount: { total: 20000, paid: 20000, cancelled: 0 },
    customer: { id: "c1" },
    method: {
      type: "PaymentMethodEasyPay",
      easyPayMethod: { type: "PaymentMethodCard", card: { brand: "VISA" } },
    },
    channel: { type: "LIVE", pgProvider: "KAKAOPAY" },
    origin: { platformType: "SDK_MOBILE" },
  },
  {
    status: "FAILED",
    currency: "KRW",
    requestedAt: "2026-08-02T09:00:00+09:00",
    statusChangedAt: "2026-08-02T09:00:03+09:00",
    amount: { total: 5000, paid: 0, cancelled: 0 },
    customer: { id: "c2" },
    method: { type: "PaymentMethodCard" },
    channel: { type: "LIVE", pgProvider: "TOSSPAYMENTS" },
    origin: { platformType: "SDK_MOBILE" },
    failure: { reason: "카드 한도초과", pgCode: "51" },
  },
  {
    status: "CANCELLED",
    currency: "KRW",
    requestedAt: "2026-08-02T11:00:00+09:00",
    statusChangedAt: "2026-08-02T15:00:00+09:00",
    amount: { total: 7000, paid: 7000, cancelled: 7000 },
    method: { type: "PaymentMethodCard" },
    channel: { type: "LIVE", pgProvider: "TOSSPAYMENTS" },
    origin: { platformType: "API" },
  },
];

const RANGE = {
  from: "2026-08-01T00:00:00+09:00",
  to: "2026-08-03T00:00:00+09:00",
};

/** 입력 기본값을 적용해 도구 콜백을 실행하고, 출력 스키마로 검증한 결과를 반환합니다. */
async function callTool(tool: any, input: Record<string, unknown>) {
  const z = (await import("zod")).default;
  const args = z.object(tool.config.inputSchema).parse(input);
  const result = await tool.init(tokenProviderStub)(args, {} as never);
  expect(result.isError).toBeFalsy();
  // MCP SDK 는 structuredContent 를 outputSchema 로 검증하므로 동일하게 검증합니다.
  return z.object(tool.config.outputSchema).parse(result.structuredContent);
}

describe("도구 실행", () => {
  beforeEach(() => {
    clearPaymentCache();
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve(
          jsonResponse({
            items: FIXTURE.map((payment, index) => ({
              payment,
              cursor: `cursor-${index}`,
            })),
          }),
        ),
      ),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("거래 현황 요약과 일별 시계열을 집계한다", async () => {
    const output = await callTool(getPaymentSummary, {
      ...RANGE,
      granularity: "DAY",
    });

    expect(output.range.timeZoneOffset).toBe("+09:00");
    expect(output.totalCount).toBe(4);
    expect(output.currencies).toEqual(["KRW"]);

    const krw = output.byCurrency[0];
    expect(krw.totals).toMatchObject({
      count: 4,
      amount: 42000,
      paidAmount: 37000,
      cancelledAmount: 7000,
      netAmount: 30000,
      paidCount: 2,
      approvedCount: 3,
      failedCount: 1,
      uniqueCustomers: 2,
      approvedUniqueCustomers: 1,
      unknownCustomerCount: 1,
      avgPaidAmountPerCustomer: 37000,
    });
    expect(krw.totals.statusCounts).toEqual({
      PAID: 2,
      FAILED: 1,
      CANCELLED: 1,
    });
    // 37000 / 3 (승인 건수)
    expect(krw.totals.avgPaidAmountPerPayment).toBeCloseTo(12333.33, 2);

    // KST 자정 기준으로 8/1, 8/2 두 개의 버킷이 만들어집니다.
    expect(krw.series.map((point) => point.bucket)).toEqual([
      "2026-08-01",
      "2026-08-02",
    ]);
    expect(krw.series[0]).toMatchObject({ count: 2, amount: 30000 });
    expect(krw.series[1]).toMatchObject({ count: 2, amount: 12000 });
  });

  it("결제 완료 건만 결제수단별로 집계한다", async () => {
    const output = await callTool(getPaymentBreakdown, {
      ...RANGE,
      groupBy: "METHOD",
      statuses: ["PAID"],
    });

    expect(output.totalCount).toBe(2);
    const groups = output.byCurrency[0].groups;
    // 금액 내림차순 정렬
    expect(groups.map((group: { key: string }) => group.key)).toEqual([
      "EASY_PAY",
      "CARD",
    ]);
    expect(groups[0]).toMatchObject({
      label: "간편결제",
      count: 1,
      amount: 20000,
      countShare: 0.5,
      amountShare: 0.6667,
    });
  });

  it("실패 사유를 대분류로 집계한다", async () => {
    const output = await callTool(getPaymentFailureReasons, RANGE);

    expect(output.totalCount).toBe(4);
    expect(output.failedCount).toBe(1);
    expect(output.failureRate).toBe(0.25);
    expect(output.categories).toHaveLength(1);
    expect(output.categories[0]).toMatchObject({
      category: "LIMIT_EXCEEDED",
      label: "한도 초과",
      count: 1,
      share: 1,
      amountByCurrency: { KRW: 5000 },
    });
    expect(output.categories[0].topReasons[0]).toMatchObject({
      reason: "카드 한도초과",
      pgCode: "51",
      count: 1,
    });
  });

  it("결제수단 × 상태 교차 집계를 만든다", async () => {
    const output = await callTool(getPaymentStatusBreakdownByDimension, {
      ...RANGE,
      dimension: "METHOD",
    });

    expect(output.statuses).toEqual(["PAID", "FAILED", "CANCELLED"]);
    const card = output.rows.find((row: { key: string }) => row.key === "CARD");
    expect(card).toMatchObject({
      label: "카드",
      total: 3,
      byStatus: { PAID: 1, FAILED: 1, CANCELLED: 1 },
    });
    expect(card?.shareByStatus.PAID).toBeCloseTo(0.3333, 4);
  });

  it("금액 지표는 통화가 섞여 있으면 통화 지정을 요구한다", async () => {
    const z = (await import("zod")).default;
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve(
          jsonResponse({
            items: [
              { payment: FIXTURE[0], cursor: "c0" },
              {
                payment: { ...FIXTURE[1], currency: "USD" },
                cursor: "c1",
              },
            ],
          }),
        ),
      ),
    );

    const tool: any = getPaymentStatusBreakdownByDimension;
    const args = z.object(tool.config.inputSchema).parse({
      ...RANGE,
      dimension: "METHOD",
      metric: "AMOUNT",
    });
    const result = await tool.init(tokenProviderStub)(args, {} as never);
    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain("currency");
  });

  it("준실시간 모니터링은 창과 신선도 정보를 함께 반환한다", async () => {
    const output = await callTool(getRealtimePaymentPulse, {
      windowMinutes: 30,
      bucketMinutes: 5,
    });

    expect(output.window.windowMinutes).toBe(30);
    expect(output.window.bucketMinutes).toBe(5);
    expect(output.totalCount).toBe(4);
    expect(output.freshness.cached).toBe(false);
    expect(output.freshness.ttlSeconds).toBeGreaterThan(0);
    expect(output.notes.join(" ")).toContain("준실시간");
  });

  it("여러 집계 도구가 같은 구간을 조회하면 원시 데이터를 재사용한다", async () => {
    await callTool(getPaymentSummary, { ...RANGE, granularity: "DAY" });
    await callTool(getPaymentBreakdown, { ...RANGE, groupBy: "PG_PROVIDER" });
    const output = await callTool(getPaymentFailureReasons, RANGE);

    expect(output.collection.cached).toBe(true);
    expect((globalThis.fetch as any).mock.calls).toHaveLength(1);
  });
});
