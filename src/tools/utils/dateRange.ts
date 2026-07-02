/**
 * 거래대사/정산 조회 기간 제약을 검증합니다.
 *
 * - 조회 시작일(from)은 최근 LOOKBACK_MONTHS(6)개월 이내여야 합니다.
 *   (게이트웨이의 데이터 조회 한도와 동일한 제약을 클라이언트에서 선제 검증)
 * - 한 번에 조회 가능한 구간(maxRange)은 도구마다 다릅니다.
 *   정산 요약/통계는 1개월, 건별 거래대사 내역은 2주.
 *
 * from/to 는 "YYYY-MM-DD" 형식의 문자열입니다.
 */
export const LOOKBACK_MONTHS = 6;

/** 한 번에 조회 가능한 최대 구간. months 또는 days 중 하나로 지정합니다. */
export type MaxRange = { months: number } | { days: number };

function maxRangeLabel(maxRange: MaxRange): string {
  if ("months" in maxRange) {
    return `${maxRange.months}개월`;
  }
  if (maxRange.days % 7 === 0) {
    return `${maxRange.days / 7}주`;
  }
  return `${maxRange.days}일`;
}

/**
 * @param maxRange from 기준 허용되는 최대 조회 구간 (예: { months: 1 }, { days: 14 })
 * @returns 제약 위반 시 사용자용 에러 메시지, 유효하면 null
 */
export function validateReconciliationDateRange(
  from: string,
  to: string,
  maxRange: MaxRange,
): string | null {
  const fromDate = new Date(`${from}T00:00:00Z`);
  const toDate = new Date(`${to}T00:00:00Z`);
  if (Number.isNaN(fromDate.getTime()) || Number.isNaN(toDate.getTime())) {
    return "날짜 형식이 올바르지 않습니다 (YYYY-MM-DD).";
  }
  if (toDate < fromDate) {
    return "조회 종료일(to)은 시작일(from)보다 빠를 수 없습니다.";
  }

  const now = new Date();
  const earliest = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
  earliest.setUTCMonth(earliest.getUTCMonth() - LOOKBACK_MONTHS);
  if (fromDate < earliest) {
    return `조회 시작일(from)은 최근 ${LOOKBACK_MONTHS}개월 이내여야 합니다. ${earliest
      .toISOString()
      .slice(0, 10)} 이후로 지정해주세요.`;
  }

  const maxTo = new Date(fromDate);
  if ("months" in maxRange) {
    maxTo.setUTCMonth(maxTo.getUTCMonth() + maxRange.months);
  } else {
    maxTo.setUTCDate(maxTo.getUTCDate() + maxRange.days);
  }
  if (toDate > maxTo) {
    return `조회 구간은 최대 ${maxRangeLabel(maxRange)}까지 가능합니다. from(${from}) 기준 ${maxTo
      .toISOString()
      .slice(0, 10)} 이내로 to를 지정해주세요.`;
  }

  return null;
}
