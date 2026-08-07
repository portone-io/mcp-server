import z from "zod";
import type { PaymentRecord } from "../request/getPaymentsByCursor.ts";

/**
 * 결제 대용량 다건 조회로 수집한 원시 데이터를 집계하기 위한 공통 로직입니다.
 *
 * REST V2 `/payments-by-cursor` 는 서버측 필터·집계를 제공하지 않으므로
 * - 결제 건을 집계에 필요한 최소 필드로 정규화(normalize)하고
 * - 시계열 버킷팅 / 그룹핑 / 실패 사유 분류를 모두 이 모듈에서 수행합니다.
 */

/** 알 수 없는 차원 값의 표기. */
export const UNKNOWN = "UNKNOWN";
/** 해당 없음(예: 에스크로 미사용)의 표기. */
export const NONE = "NONE";

// ---------------------------------------------------------------------------
// 공통 입력 스키마 조각
// ---------------------------------------------------------------------------

/** 타임존을 포함한 ISO 8601 일시 문자열. */
export const DateTimeString = z
  .string()
  .datetime({ offset: true })
  .describe(
    "ISO 8601 형식의 일시. 타임존을 반드시 포함합니다. (예: 2026-08-01T00:00:00+09:00)",
  );

export const TimestampType = z.enum(["CREATED_AT", "STATUS_CHANGED_AT"]);
export type TimestampType = z.infer<typeof TimestampType>;

export const Granularity = z.enum(["HOUR", "DAY", "MONTH"]);
export type Granularity = z.infer<typeof Granularity>;

/**
 * REST V2 결제 상태 값. `PAY_PENDING` 은 V2, `PENDING` 은 V1 결제 건 호환을
 * 위해 함께 허용합니다.
 */
export const PaymentStatusValue = z.enum([
  "READY",
  "PENDING",
  "PAY_PENDING",
  "VIRTUAL_ACCOUNT_ISSUED",
  "PAID",
  "FAILED",
  "PARTIAL_CANCELLED",
  "CANCELLED",
]);
export type PaymentStatusValue = z.infer<typeof PaymentStatusValue>;

/** 수집 상한. 기본값 20,000건 (1,000건 × 20회 요청). */
export const MaxPayments = z
  .number()
  .int()
  .min(1)
  .max(200000)
  .default(20000)
  .describe(
    "수집할 최대 결제 건수입니다. 상한에 도달하면 응답의 collection.truncated 가 true 가 되며 집계는 부분 데이터 기준입니다.",
  );

export const StoreId = z
  .string()
  .optional()
  .describe(
    "조회할 하위 상점 아이디. 생략하면 인증 정보에 연결된 고객사 전체를 조회합니다.",
  );

// ---------------------------------------------------------------------------
// 정규화
// ---------------------------------------------------------------------------

/** 집계에 사용하는 정규화된 결제 건. */
export type NormalizedPayment = {
  status: string;
  currency: string;
  /** 결제 건 생성시점 (requestedAt). */
  createdAt: string | null;
  /** 마지막 상태 변경 시점. */
  statusChangedAt: string | null;
  /** 총 결제금액. */
  total: number;
  /** 실제 결제(승인)된 금액. */
  paid: number;
  /** 총 취소금액. */
  cancelled: number;
  customerId: string | null;
  /** CARD / EASY_PAY / TRANSFER 등. */
  methodType: string;
  pgProvider: string;
  /** LIVE / TEST. */
  channelType: string;
  cardBrand: string;
  /** 에스크로 상태. 에스크로 결제가 아니면 NONE. */
  escrow: string;
  /** SDK_PC / SDK_MOBILE / API. */
  platformType: string;
  failureReason: string | null;
  failurePgCode: string | null;
  failurePgMessage: string | null;
};

/** `PaymentMethod` 의 oneOf 스키마 이름 → 결제수단 코드. */
const METHOD_TYPE_BY_SCHEMA: Record<string, string> = {
  PaymentMethodCard: "CARD",
  PaymentMethodTransfer: "TRANSFER",
  PaymentMethodVirtualAccount: "VIRTUAL_ACCOUNT",
  PaymentMethodGiftCertificate: "GIFT_CERTIFICATE",
  PaymentMethodMobile: "MOBILE",
  PaymentMethodEasyPay: "EASY_PAY",
  PaymentMethodConvenienceStore: "CONVENIENCE_STORE",
  PaymentMethodCrypto: "CRYPTO",
};

/** 결제수단 코드 → 한국어 라벨. */
export const METHOD_LABELS: Record<string, string> = {
  CARD: "카드",
  TRANSFER: "계좌이체",
  VIRTUAL_ACCOUNT: "가상계좌",
  GIFT_CERTIFICATE: "상품권",
  MOBILE: "휴대폰 소액결제",
  EASY_PAY: "간편결제",
  CONVENIENCE_STORE: "편의점 결제",
  CRYPTO: "암호화폐",
};

/** 결제 상태 → 한국어 라벨. */
export const STATUS_LABELS: Record<string, string> = {
  READY: "결제 준비",
  PENDING: "결제 완료 대기",
  PAY_PENDING: "결제 완료 대기",
  VIRTUAL_ACCOUNT_ISSUED: "가상계좌 발급 완료",
  PAID: "결제 완료",
  FAILED: "결제 실패",
  PARTIAL_CANCELLED: "부분 취소",
  CANCELLED: "결제 취소",
};

/** 결제 요청 플랫폼 → 한국어 라벨. */
export const PLATFORM_TYPE_LABELS: Record<string, string> = {
  SDK_PC: "PC (SDK)",
  SDK_MOBILE: "모바일 (SDK)",
  API: "API",
};

/** 채널 타입 → 한국어 라벨. */
export const CHANNEL_TYPE_LABELS: Record<string, string> = {
  LIVE: "실연동",
  TEST: "테스트",
};

/** 에스크로 상태 → 한국어 라벨. */
export const ESCROW_LABELS: Record<string, string> = {
  NONE: "에스크로 미사용",
  BEFORE_REGISTERED: "등록 전",
  REGISTERED: "등록 완료",
  DELIVERED: "배송 완료",
  CONFIRMED: "구매 확정",
  REJECTED: "구매 거절",
  REJECT_CONFIRMED: "거절 확정",
  CANCELLED: "취소",
};

function methodTypeOf(payment: PaymentRecord): string {
  const raw = payment.method?.type;
  if (raw == null || raw === "") return UNKNOWN;
  return METHOD_TYPE_BY_SCHEMA[raw] ?? raw;
}

function cardBrandOf(payment: PaymentRecord): string {
  const brand =
    payment.method?.card?.brand ?? payment.method?.easyPayMethod?.card?.brand;
  return brand == null || brand === "" ? UNKNOWN : brand;
}

/** 원시 결제 건을 집계용 형태로 정규화합니다. */
export function normalizePayment(payment: PaymentRecord): NormalizedPayment {
  const amount = payment.amount;
  return {
    status: payment.status,
    currency: payment.currency ?? UNKNOWN,
    createdAt: payment.requestedAt ?? null,
    statusChangedAt: payment.statusChangedAt ?? payment.updatedAt ?? null,
    total: amount?.total ?? 0,
    paid: amount?.paid ?? 0,
    cancelled: amount?.cancelled ?? 0,
    customerId:
      payment.customer?.id == null || payment.customer.id === ""
        ? null
        : payment.customer.id,
    methodType: methodTypeOf(payment),
    pgProvider: payment.channel?.pgProvider ?? UNKNOWN,
    channelType: payment.channel?.type ?? UNKNOWN,
    cardBrand: cardBrandOf(payment),
    escrow: payment.escrow?.status ?? NONE,
    platformType: payment.origin?.platformType ?? UNKNOWN,
    failureReason: payment.failure?.reason ?? null,
    failurePgCode: payment.failure?.pgCode ?? null,
    failurePgMessage: payment.failure?.pgMessage ?? null,
  };
}

/** 정규화된 결제 건에서 기준 시각을 선택합니다. */
export function timestampOf(
  payment: NormalizedPayment,
  timestampType: TimestampType,
): string | null {
  return timestampType === "STATUS_CHANGED_AT"
    ? payment.statusChangedAt
    : payment.createdAt;
}

// ---------------------------------------------------------------------------
// 차원(dimension)
// ---------------------------------------------------------------------------

export const Dimension = z.enum([
  "METHOD",
  "PG_PROVIDER",
  "STATUS",
  "CARD_BRAND",
  "ESCROW",
  "CHANNEL_TYPE",
  "PLATFORM_TYPE",
]);
export type Dimension = z.infer<typeof Dimension>;

/** 결제 건에서 차원 값(그룹 키)을 추출합니다. */
export function dimensionValue(
  payment: NormalizedPayment,
  dimension: Dimension,
): string {
  switch (dimension) {
    case "METHOD":
      return payment.methodType;
    case "PG_PROVIDER":
      return payment.pgProvider;
    case "STATUS":
      return payment.status;
    case "CARD_BRAND":
      return payment.cardBrand;
    case "ESCROW":
      return payment.escrow;
    case "CHANNEL_TYPE":
      return payment.channelType;
    case "PLATFORM_TYPE":
      return payment.platformType;
  }
}

/** 차원 값에 대응하는 한국어 라벨. 매핑이 없으면 값을 그대로 반환합니다. */
export function dimensionLabel(dimension: Dimension, value: string): string {
  const table: Record<string, string> | null =
    dimension === "METHOD"
      ? METHOD_LABELS
      : dimension === "STATUS"
        ? STATUS_LABELS
        : dimension === "PLATFORM_TYPE"
          ? PLATFORM_TYPE_LABELS
          : dimension === "CHANNEL_TYPE"
            ? CHANNEL_TYPE_LABELS
            : dimension === "ESCROW"
              ? ESCROW_LABELS
              : null;
  return table?.[value] ?? value;
}

// ---------------------------------------------------------------------------
// 시계열 버킷팅
// ---------------------------------------------------------------------------

/**
 * ISO 8601 문자열의 UTC 오프셋을 분 단위로 추출합니다.
 * `Z` 는 0, 오프셋이 없으면 null 을 반환합니다.
 */
export function parseUtcOffsetMinutes(iso: string): number | null {
  const matched = /(Z|[+-]\d{2}:?\d{2})$/.exec(iso.trim());
  if (matched == null) return null;
  const token = matched[1];
  if (token === "Z") return 0;
  const sign = token.startsWith("-") ? -1 : 1;
  const digits = token.slice(1).replace(":", "");
  const hours = Number(digits.slice(0, 2));
  const minutes = Number(digits.slice(2, 4));
  return sign * (hours * 60 + minutes);
}

/** 분 단위 오프셋을 `+09:00` 형태로 표기합니다. */
export function formatUtcOffset(offsetMinutes: number): string {
  const sign = offsetMinutes < 0 ? "-" : "+";
  const abs = Math.abs(offsetMinutes);
  const hours = String(Math.floor(abs / 60)).padStart(2, "0");
  const minutes = String(abs % 60).padStart(2, "0");
  return `${sign}${hours}:${minutes}`;
}

/**
 * 기준 시각을 시계열 버킷 라벨로 변환합니다.
 *
 * 버킷 경계는 `offsetMinutes` 로 지정한 타임존 기준으로 계산되므로,
 * KST(+09:00) 로 조회하면 KST 자정 기준으로 일별 집계가 이루어집니다.
 *
 */
export function bucketOf(
  iso: string,
  granularity: Granularity,
  offsetMinutes: number,
): string | null {
  const time = Date.parse(iso);
  if (Number.isNaN(time)) return null;
  const shifted = new Date(time + offsetMinutes * 60_000);
  const year = shifted.getUTCFullYear();
  const month = String(shifted.getUTCMonth() + 1).padStart(2, "0");
  const day = String(shifted.getUTCDate()).padStart(2, "0");
  const hour = String(shifted.getUTCHours()).padStart(2, "0");
  const offset = formatUtcOffset(offsetMinutes);

  switch (granularity) {
    case "MONTH":
      return `${year}-${month}`;
    case "DAY":
      return `${year}-${month}-${day}`;
    case "HOUR":
      return `${year}-${month}-${day}T${hour}:00${offset}`;
  }
}

// ---------------------------------------------------------------------------
// 집계
// ---------------------------------------------------------------------------

/** 금액·건수 누적값. */
export type Accumulator = {
  count: number;
  total: number;
  paid: number;
  cancelled: number;
  /** 상태가 PAID 또는 PARTIAL_CANCELLED 인 건수. */
  paidCount: number;
  /** 실제 결제금액이 0보다 큰 건수. 취소된 건도 승인은 있었으므로 포함합니다. */
  approvedCount: number;
  failedCount: number;
  cancelledCount: number;
};

export function emptyAccumulator(): Accumulator {
  return {
    count: 0,
    total: 0,
    paid: 0,
    cancelled: 0,
    paidCount: 0,
    approvedCount: 0,
    failedCount: 0,
    cancelledCount: 0,
  };
}

/** 승인(결제)이 이루어진 건인지 여부. 평균 거래액의 분모로 사용합니다. */
export function isApproved(payment: NormalizedPayment): boolean {
  return payment.paid > 0;
}

export function accumulate(
  target: Accumulator,
  payment: NormalizedPayment,
): void {
  target.count += 1;
  target.total += payment.total;
  target.paid += payment.paid;
  target.cancelled += payment.cancelled;
  if (payment.status === "PAID" || payment.status === "PARTIAL_CANCELLED") {
    target.paidCount += 1;
  }
  if (isApproved(payment)) {
    target.approvedCount += 1;
  }
  if (payment.status === "FAILED") {
    target.failedCount += 1;
  }
  if (
    payment.status === "CANCELLED" ||
    payment.status === "PARTIAL_CANCELLED"
  ) {
    target.cancelledCount += 1;
  }
}

/** 키별로 누적합니다. 없으면 새 누적값을 만듭니다. */
export function accumulateInto<K>(
  map: Map<K, Accumulator>,
  key: K,
  payment: NormalizedPayment,
): void {
  let bucket = map.get(key);
  if (bucket == null) {
    bucket = emptyAccumulator();
    map.set(key, bucket);
  }
  accumulate(bucket, payment);
}

/** 통화별로 결제 건을 분류합니다. */
export function groupByCurrency(
  payments: NormalizedPayment[],
): Map<string, NormalizedPayment[]> {
  const grouped = new Map<string, NormalizedPayment[]>();
  for (const payment of payments) {
    const bucket = grouped.get(payment.currency);
    if (bucket == null) {
      grouped.set(payment.currency, [payment]);
    } else {
      bucket.push(payment);
    }
  }
  return grouped;
}

/** 통화별 금액 합계 맵을 만듭니다. */
export function amountByCurrency(
  payments: NormalizedPayment[],
  pick: (payment: NormalizedPayment) => number = (payment) => payment.total,
): Record<string, number> {
  const result: Record<string, number> = {};
  for (const payment of payments) {
    result[payment.currency] = (result[payment.currency] ?? 0) + pick(payment);
  }
  return result;
}

/** 소수점 4자리까지의 비율. 분모가 0이면 0. */
export function ratio(value: number, base: number): number {
  if (base === 0) return 0;
  return Math.round((value / base) * 10000) / 10000;
}

/** 소수점 2자리까지 반올림. */
export function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

/** 증감률(소수점 4자리). 기준값이 0이면 null. */
export function changeRate(current: number, previous: number): number | null {
  if (previous === 0) return null;
  return Math.round(((current - previous) / previous) * 10000) / 10000;
}

/** 서로 다른 고객 수와 고객 정보가 없는 건수. */
export function countCustomers(payments: NormalizedPayment[]): {
  uniqueCustomers: number;
  unknownCustomerCount: number;
} {
  const ids = new Set<string>();
  let unknown = 0;
  for (const payment of payments) {
    if (payment.customerId == null) {
      unknown += 1;
    } else {
      ids.add(payment.customerId);
    }
  }
  return { uniqueCustomers: ids.size, unknownCustomerCount: unknown };
}

/** 상태별 건수. */
export function statusCounts(
  payments: NormalizedPayment[],
): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const payment of payments) {
    counts[payment.status] = (counts[payment.status] ?? 0) + 1;
  }
  return counts;
}

// ---------------------------------------------------------------------------
// 실패 사유 대분류
// ---------------------------------------------------------------------------

/**
 * PG사별 실패 메시지는 표준화되어 있지 않으므로, `failure.reason` 과
 * `failure.pgMessage` 의 키워드를 기준으로 대분류합니다.
 * pgCode 는 PG사마다 의미가 달라 분류 기준으로 쓰지 않고, 대표 사례로만 노출합니다.
 *
 * 규칙은 위에서 아래로 평가되며, 먼저 일치한 분류를 사용합니다.
 */
const FAILURE_RULES: {
  category: string;
  label: string;
  keywords: string[];
}[] = [
  {
    category: "USER_CANCELLED",
    label: "사용자 취소/중단",
    keywords: [
      "사용자 취소",
      "사용자취소",
      "사용자가 취소",
      "고객 취소",
      "고객취소",
      "결제를 취소",
      "결제 취소",
      "취소하였습니다",
      "취소했습니다",
      "결제창 종료",
      "창을 닫",
      "결제 포기",
      "결제포기",
      "사용자 중단",
      "결제 중단",
      "user cancel",
      "cancelled by user",
      "canceled by user",
      "user closed",
    ],
  },
  {
    category: "DUPLICATED",
    label: "중복 결제",
    keywords: ["중복", "duplicate", "already paid", "이미 결제"],
  },
  {
    category: "LIMIT_EXCEEDED",
    label: "한도 초과",
    keywords: [
      "한도초과",
      "한도 초과",
      "이용한도",
      "승인한도",
      "한도를 초과",
      "limit exceed",
      "exceed the limit",
      "exceeds limit",
      "over limit",
    ],
  },
  {
    category: "INSUFFICIENT_BALANCE",
    label: "잔액 부족",
    keywords: [
      "잔액부족",
      "잔액 부족",
      "출금가능금액",
      "insufficient",
      "not enough balance",
    ],
  },
  {
    category: "INVALID_CARD_INFO",
    label: "카드 정보 오류",
    keywords: [
      "카드번호",
      "카드 번호",
      "유효기간",
      "카드정보",
      "카드 정보",
      "등록되지 않은 카드",
      "유효하지 않은 카드",
      "무효한 카드",
      "cvc",
      "invalid card",
      "card number",
      "expiry",
      "expired card",
    ],
  },
  {
    category: "AUTH_FAILED",
    label: "인증 실패",
    keywords: [
      "인증실패",
      "인증 실패",
      "비밀번호",
      "본인인증",
      "인증번호",
      "otp",
      "서명",
      "authentication fail",
      "auth fail",
      "verification fail",
      "3ds",
    ],
  },
  {
    category: "ISSUER_DECLINED",
    label: "카드사/발급사 거절",
    keywords: [
      "거래거절",
      "거래 거절",
      "승인거절",
      "승인 거절",
      "카드사 거절",
      "카드사거절",
      "도난",
      "분실",
      "거래정지",
      "정지된",
      "사고카드",
      "declined",
      "decline",
      "do not honor",
      "refused",
      "reject",
    ],
  },
  {
    category: "NOT_SUPPORTED",
    label: "미지원 결제수단/가맹점",
    keywords: [
      "지원하지 않",
      "미지원",
      "사용불가",
      "사용 불가",
      "취급 불가",
      "가맹점이 아닙",
      "등록되지 않은 가맹점",
      "not supported",
      "unsupported",
      "not allowed",
      "not available",
    ],
  },
  {
    category: "TIMEOUT_OR_NETWORK",
    label: "타임아웃/네트워크",
    keywords: [
      "시간초과",
      "시간 초과",
      "타임아웃",
      "응답이 없",
      "응답 없음",
      "통신 오류",
      "통신오류",
      "연결 실패",
      "timeout",
      "timed out",
      "network",
      "connection",
      "socket",
    ],
  },
  {
    category: "INVALID_REQUEST",
    label: "요청 정보 오류",
    keywords: [
      "필수",
      "파라미터",
      "유효하지 않은 요청",
      "형식 오류",
      "형식이 올바르지",
      "금액 오류",
      "금액이 올바르지",
      "잘못된 요청",
      "잘못된 값",
      "invalid request",
      "invalid parameter",
      "bad request",
      "validation",
    ],
  },
  {
    category: "PG_OR_SYSTEM_ERROR",
    label: "PG/시스템 오류",
    keywords: [
      "시스템 오류",
      "시스템오류",
      "서버 오류",
      "내부 오류",
      "처리 중 오류",
      "일시적",
      "점검",
      "system error",
      "internal error",
      "server error",
      "unavailable",
      "unknown error",
      "오류가 발생",
    ],
  },
];

/** 대분류 코드 → 한국어 라벨. */
export const FAILURE_CATEGORY_LABELS: Record<string, string> = {
  ...Object.fromEntries(
    FAILURE_RULES.map((rule) => [rule.category, rule.label]),
  ),
  UNKNOWN: "사유 미기재",
  ETC: "기타",
};

/** 실패 사유 대분류 코드 목록 (분류 우선순위 순). */
export const FAILURE_CATEGORIES = [
  ...FAILURE_RULES.map((rule) => rule.category),
  "UNKNOWN",
  "ETC",
];

/**
 * 실패 사유 텍스트를 대분류합니다.
 *
 * @returns 매칭되는 분류 코드. 텍스트가 없으면 `UNKNOWN`, 어떤 규칙에도
 *          해당하지 않으면 `ETC`.
 */
export function classifyFailure(
  reason: string | null | undefined,
  pgMessage?: string | null,
): string {
  const haystack = [reason, pgMessage]
    .filter((value): value is string => value != null && value.trim() !== "")
    .join(" ")
    .toLowerCase();
  if (haystack === "") return "UNKNOWN";
  for (const rule of FAILURE_RULES) {
    if (rule.keywords.some((keyword) => haystack.includes(keyword))) {
      return rule.category;
    }
  }
  return "ETC";
}

// ---------------------------------------------------------------------------
// 공통 출력 스키마 조각
// ---------------------------------------------------------------------------

/** 원시 데이터 수집 상황. 집계 신뢰도를 판단하는 데 사용합니다. */
export const CollectionInfo = z.object({
  fetched: z.number().describe("수집한 결제 건수"),
  truncated: z
    .boolean()
    .describe(
      "maxPayments 상한에 도달해 일부만 수집했는지 여부. true 면 집계는 부분 데이터 기준입니다.",
    ),
  requestCount: z.number().describe("수행한 API 요청 횟수"),
  cached: z
    .boolean()
    .describe("이전 호출에서 수집한 캐시 데이터를 재사용했는지 여부"),
  fetchedAt: z.string().describe("원시 데이터를 수집한 시각 (ISO 8601)"),
});

export const MoneyTotals = z.object({
  count: z.number().describe("건수"),
  amount: z.number().describe("총 결제금액 합계 (amount.total)"),
  paidAmount: z.number().describe("실제 결제금액 합계 (amount.paid)"),
  cancelledAmount: z.number().describe("총 취소금액 합계 (amount.cancelled)"),
  netAmount: z.number().describe("실 결제금액 - 취소금액"),
});

export function toMoneyTotals(
  accumulator: Accumulator,
): z.infer<typeof MoneyTotals> {
  return {
    count: accumulator.count,
    amount: accumulator.total,
    paidAmount: accumulator.paid,
    cancelledAmount: accumulator.cancelled,
    netAmount: accumulator.paid - accumulator.cancelled,
  };
}
