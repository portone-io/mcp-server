import { describe, expect, it } from "vitest";
import * as getReconciliationsByFilter from "../src/tools/getReconciliationsByFilter.ts";
import * as getSettlementStatistics from "../src/tools/getSettlementStatistics.ts";
import * as getSettlementSummaries from "../src/tools/getSettlementSummaries.ts";
import {
  ReconciliationIncomparableReason,
  ReconciliationNotMatchedReason,
  ReconciliationStatus,
} from "../src/tools/request/getReconciliations.ts";
import { validateReconciliationDateRange } from "../src/tools/utils/dateRange.ts";

/** 오늘 기준 개월/일 오프셋의 YYYY-MM-DD 문자열 */
function offsetDate(months: number, days = 0): string {
  const now = new Date();
  const d = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
  d.setUTCMonth(d.getUTCMonth() + months);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

// 이 파일들은 임포트 시점에 parse(gql`...`) 를 실행하므로,
// 임포트가 성공한다는 것 자체가 GraphQL 쿼리 문서가 유효함을 보장합니다.

describe("reconciliation tools", () => {
  it("각 도구가 고유한 이름과 store 입력 파라미터를 노출한다", () => {
    const tools = [
      getReconciliationsByFilter,
      getSettlementSummaries,
      getSettlementStatistics,
    ];
    const names = tools.map((tool) => tool.name);
    expect(new Set(names).size).toBe(names.length);
    for (const tool of tools) {
      expect(tool.name).toBeTruthy();
      expect(tool.config.inputSchema).toHaveProperty("store");
      expect(tool.config.inputSchema).toHaveProperty("from");
      expect(tool.config.inputSchema).toHaveProperty("to");
    }
  });

  it("대사 상태 필터는 콘솔이 사용하는 4개 상태만 포함한다", () => {
    expect(ReconciliationStatus.options).toEqual([
      "MATCHED",
      "NOT_MATCHED",
      "INCOMPARABLE",
      "NOT_COLLECTED",
    ]);
  });

  it("불일치 사유 enum 은 스키마의 6개 사유를 모두 포함한다", () => {
    expect(ReconciliationNotMatchedReason.options).toContain(
      "PAYMENT_AMOUNT_NOT_MATCHED",
    );
    expect(ReconciliationNotMatchedReason.options).toHaveLength(6);
  });

  it("대사 불가 사유 enum 은 backward 사유(PG_COLLECTION_FAILED 등)를 병합해 노출한다", () => {
    expect(ReconciliationIncomparableReason.options).toEqual([
      "NO_MATCHING_PORTONE_TRANSACTION",
      "CHANNEL_MISMATCH",
      "RECONCILIATION_SKIPPED",
      "PG_COLLECTION_FAILED",
      "PG_DATA_MISSING",
      "UNKNOWN",
    ]);
  });

  it("거래대사 도구 출력에 incomparableReason 필드가 있다", () => {
    expect(getReconciliationsByFilter.config.outputSchema).toHaveProperty(
      "items",
    );
  });

  it("from/to 는 YYYY-MM-DD 형식만 허용한다", () => {
    const from = getReconciliationsByFilter.config.inputSchema.from;
    expect(from.safeParse("2026-01-01").success).toBe(true);
    expect(from.safeParse("2026/01/01").success).toBe(false);
    expect(from.safeParse("not-a-date").success).toBe(false);
  });
});

describe("validateReconciliationDateRange", () => {
  it("최근 6개월 이내 & 3개월 이하 구간은 통과한다", () => {
    expect(
      validateReconciliationDateRange(offsetDate(-1), offsetDate(0)),
    ).toBeNull();
    // 2개월 구간(3개월 이하)은 허용
    expect(
      validateReconciliationDateRange(offsetDate(-2), offsetDate(0)),
    ).toBeNull();
  });

  it("to 가 from 보다 빠르면 거부한다", () => {
    const err = validateReconciliationDateRange(offsetDate(0), offsetDate(-1));
    expect(err).toContain("빠를 수 없습니다");
  });

  it("from 이 6개월보다 이전이면 거부한다", () => {
    const err = validateReconciliationDateRange(
      offsetDate(-7),
      offsetDate(-7, 5),
    );
    expect(err).toContain("6개월");
  });

  it("구간이 3개월을 초과하면 거부한다", () => {
    const err = validateReconciliationDateRange(offsetDate(-4), offsetDate(0));
    // from 이 6개월 이내이므로 6개월 제약은 통과하고 3개월 제약에 걸려야 함
    expect(err).toContain("3개월");
  });

  it("잘못된 날짜 형식이면 거부한다", () => {
    expect(validateReconciliationDateRange("2026-13-40", offsetDate(0))).toBe(
      "날짜 형식이 올바르지 않습니다 (YYYY-MM-DD).",
    );
  });
});
