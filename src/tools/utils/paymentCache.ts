import { createHash } from "node:crypto";
import {
  collectPaymentsByCursor,
  type PaymentCollection,
} from "../request/getPaymentsByCursor.ts";
import {
  type NormalizedPayment,
  normalizePayment,
} from "./paymentAnalytics.ts";
import type { Result } from "./result.ts";

/**
 * 결제 원시 데이터 수집 결과를 짧은 기간 재사용하는 프로세스 내 캐시입니다.
 *
 * 집계 도구 5종은 모두 동일한 원시 데이터(`/payments-by-cursor` 전체 페이징)를
 * 필요로 하므로, 같은 구간을 연달아 조회할 때 수십 회의 API 요청을 반복하지
 * 않도록 캐시합니다. 준실시간 모니터링 도구는 짧은 TTL 로 폴링합니다.
 *
 * 캐시 키에 Authorization 해시를 포함해, 한 프로세스에서 인증 주체가 바뀌어도
 * 다른 주체의 데이터가 재사용되지 않도록 합니다.
 */

/** 집계 도구의 기본 캐시 유효 시간. */
export const DEFAULT_TTL_MILLIS = 60_000;

/** 캐시에 보관할 최대 항목 수. */
const MAX_ENTRIES = 8;

type CacheEntry = {
  expiresAt: number;
  fetchedAt: number;
  collection: PaymentCollection;
  normalized: NormalizedPayment[];
};

const cache = new Map<string, CacheEntry>();

function cacheKey(parts: {
  authorization: string;
  storeId?: string | undefined;
  from: string;
  until: string;
  maxRecords: number;
}): string {
  const authHash = createHash("sha256")
    .update(parts.authorization)
    .digest("hex")
    .slice(0, 16);
  return [
    authHash,
    parts.storeId ?? "",
    parts.from,
    parts.until,
    parts.maxRecords,
  ].join("|");
}

/** 테스트/디버깅용 캐시 초기화. */
export function clearPaymentCache(): void {
  cache.clear();
}

export type CachedPayments = {
  collection: PaymentCollection;
  payments: NormalizedPayment[];
  fetchedAt: number;
  cached: boolean;
};

/** 수집 결과를 도구 출력용 `collection` 객체로 변환합니다. */
export function collectionInfoOf(data: CachedPayments): {
  fetched: number;
  truncated: boolean;
  requestCount: number;
  cached: boolean;
  fetchedAt: string;
} {
  return {
    fetched: data.collection.payments.length,
    truncated: data.collection.truncated,
    requestCount: data.collection.requestCount,
    cached: data.cached,
    fetchedAt: new Date(data.fetchedAt).toISOString(),
  };
}

/**
 * 결제 원시 데이터를 수집하고 정규화합니다. 유효한 캐시가 있으면 재사용합니다.
 */
export async function collectNormalizedPayments({
  authorization,
  storeId,
  from,
  until,
  maxRecords,
  ttlMillis = DEFAULT_TTL_MILLIS,
}: {
  authorization: string;
  storeId?: string | undefined;
  from: string;
  until: string;
  maxRecords: number;
  ttlMillis?: number;
}): Promise<Result<CachedPayments>> {
  const key = cacheKey({ authorization, storeId, from, until, maxRecords });
  const now = Date.now();
  const hit = cache.get(key);
  if (hit != null && hit.expiresAt > now) {
    return {
      type: "success",
      data: {
        collection: hit.collection,
        payments: hit.normalized,
        fetchedAt: hit.fetchedAt,
        cached: true,
      },
    };
  }

  const result = await collectPaymentsByCursor({
    authorization,
    storeId,
    from,
    until,
    maxRecords,
  });
  if (result.type === "error") {
    return result;
  }

  const normalized = result.data.payments.map(normalizePayment);
  const fetchedAt = Date.now();
  if (cache.size >= MAX_ENTRIES) {
    const oldest = cache.keys().next();
    if (!oldest.done) {
      cache.delete(oldest.value);
    }
  }
  cache.set(key, {
    expiresAt: fetchedAt + ttlMillis,
    fetchedAt,
    collection: result.data,
    normalized,
  });

  return {
    type: "success",
    data: {
      collection: result.data,
      payments: normalized,
      fetchedAt,
      cached: false,
    },
  };
}
