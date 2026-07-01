/**
 * 거래대사/정산 조회 기간 제약을 검증합니다.
 *
 * - 조회 시작일(from)은 최근 LOOKBACK_MONTHS(6)개월 이내여야 합니다.
 *   (게이트웨이의 데이터 조회 한도와 동일한 제약을 클라이언트에서 선제 검증)
 * - 한 번에 조회 가능한 구간은 최대 MAX_RANGE_MONTHS(3)개월입니다.
 *
 * from/to 는 "YYYY-MM-DD" 형식의 문자열입니다.
 *
 * @returns 제약 위반 시 사용자용 에러 메시지, 유효하면 null
 */
export const LOOKBACK_MONTHS = 6;
export const MAX_RANGE_MONTHS = 3;

export function validateReconciliationDateRange(
  from: string,
  to: string,
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
  maxTo.setUTCMonth(maxTo.getUTCMonth() + MAX_RANGE_MONTHS);
  if (toDate > maxTo) {
    return `조회 구간은 최대 ${MAX_RANGE_MONTHS}개월까지 가능합니다. from(${from}) 기준 ${maxTo
      .toISOString()
      .slice(0, 10)} 이내로 to를 지정해주세요.`;
  }

  return null;
}
