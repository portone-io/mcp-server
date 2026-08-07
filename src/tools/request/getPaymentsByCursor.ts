import z from "zod";
import { API_URL } from "../../url.ts";
import { filterOutNone } from "../utils/mapping.ts";
import type { Result } from "../utils/result.ts";
import { USER_AGENT } from "../utils/userAgent.ts";

/**
 * 포트원 REST V2 `GET /payments-by-cursor` (결제 대용량 다건 조회) 클라이언트입니다.
 *
 * 이 엔드포인트는 **결제 건 생성시점(requestedAt)** 을 기준으로 주어진 기간 내
 * 모든 결제 건을 커서 기반으로 반환합니다. 상태·결제수단 등의 서버측 필터는
 * 제공하지 않으므로, 집계용 필터링/그룹핑은 수집한 원시 데이터에 대해
 * 클라이언트에서 수행합니다.
 */

/** 한 번의 요청으로 조회할 수 있는 최대 건수 (API 제약). */
export const MAX_PAGE_SIZE = 1000;

/** 무한 루프 방지용 최대 요청 횟수. */
const MAX_REQUESTS = 500;

const ErrorResponse = z
  .object({
    type: z.string().nullish(),
    message: z.string().nullish(),
  })
  .passthrough();

const AmountResponse = z
  .object({
    total: z.number().nullish(),
    taxFree: z.number().nullish(),
    vat: z.number().nullish(),
    supply: z.number().nullish(),
    discount: z.number().nullish(),
    paid: z.number().nullish(),
    cancelled: z.number().nullish(),
    cancelledTaxFree: z.number().nullish(),
  })
  .passthrough();

const CardResponse = z
  .object({
    brand: z.string().nullish(),
    type: z.string().nullish(),
    ownerType: z.string().nullish(),
    issuer: z.string().nullish(),
    publisher: z.string().nullish(),
    name: z.string().nullish(),
  })
  .passthrough();

/**
 * 간편결제(EASY_PAY)의 하위 결제수단에도 카드 정보가 들어올 수 있어
 * card 를 한 단계 더 중첩해 받습니다.
 */
const MethodResponse = z
  .object({
    type: z.string().nullish(),
    card: CardResponse.nullish(),
    provider: z.string().nullish(),
    easyPayMethod: z
      .object({
        type: z.string().nullish(),
        card: CardResponse.nullish(),
      })
      .passthrough()
      .nullish(),
    bank: z.string().nullish(),
  })
  .passthrough();

const PaymentRecord = z
  .object({
    status: z.string(),
    id: z.string().nullish(),
    transactionId: z.string().nullish(),
    storeId: z.string().nullish(),
    currency: z.string().nullish(),
    orderName: z.string().nullish(),
    requestedAt: z.string().nullish(),
    statusChangedAt: z.string().nullish(),
    updatedAt: z.string().nullish(),
    amount: AmountResponse.nullish(),
    customer: z
      .object({
        id: z.string().nullish(),
      })
      .passthrough()
      .nullish(),
    channel: z
      .object({
        type: z.string().nullish(),
        id: z.string().nullish(),
        key: z.string().nullish(),
        name: z.string().nullish(),
        pgProvider: z.string().nullish(),
        pgMerchantId: z.string().nullish(),
      })
      .passthrough()
      .nullish(),
    method: MethodResponse.nullish(),
    origin: z
      .object({
        platformType: z.string().nullish(),
      })
      .passthrough()
      .nullish(),
    escrow: z
      .object({
        status: z.string().nullish(),
      })
      .passthrough()
      .nullish(),
    failure: z
      .object({
        reason: z.string().nullish(),
        pgCode: z.string().nullish(),
        pgMessage: z.string().nullish(),
      })
      .passthrough()
      .nullish(),
  })
  .passthrough();
export type PaymentRecord = z.infer<typeof PaymentRecord>;

const PaymentsByCursorResponse = z
  .object({
    items: z.array(
      z
        .object({
          payment: PaymentRecord,
          cursor: z.string().nullish(),
        })
        .passthrough(),
    ),
  })
  .passthrough();

/** 수집 결과. */
export type PaymentCollection = {
  /** 수집된 결제 건 원시 데이터. */
  payments: PaymentRecord[];
  /** maxRecords 제한에 걸려 전체를 수집하지 못했는지 여부. */
  truncated: boolean;
  /** 실제로 수행한 API 요청 횟수. */
  requestCount: number;
};

async function requestPage({
  authorization,
  storeId,
  from,
  until,
  cursor,
  size,
}: {
  authorization: string;
  storeId?: string | undefined;
  from: string;
  until: string;
  cursor?: string | undefined;
  size: number;
}): Promise<Result<z.infer<typeof PaymentsByCursorResponse>>> {
  const url = new URL("/payments-by-cursor", API_URL);
  url.searchParams.set(
    "requestBody",
    JSON.stringify(filterOutNone({ storeId, from, until, cursor, size })),
  );

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: authorization,
      "User-Agent": USER_AGENT,
    },
  });
  const text = await response.text();

  let json: unknown;
  try {
    json = JSON.parse(text);
  } catch (parseError) {
    return {
      type: "error",
      data: {
        message: "올바르지 않은 형식의 서버 응답",
        status: response.status,
        cause: parseError,
      },
    };
  }

  if (!response.ok) {
    const parsed = ErrorResponse.safeParse(json);
    const detail = parsed.success ? parsed.data : undefined;
    const hint =
      response.status === 401 || response.status === 403
        ? " REST V2 API 인증에 실패했습니다. PORTONE_API_SECRET 환경 변수에 포트원 콘솔에서 발급한 V2 API 시크릿을 설정하거나, 콘솔 로그인 계정에 해당 상점 조회 권한이 있는지 확인해주세요."
        : "";
    return {
      type: "error",
      data: {
        message: `결제 대용량 다건 조회에 실패했습니다.${hint}`,
        status: response.status,
        type: detail?.type ?? undefined,
        detail: detail?.message ?? text.slice(0, 500),
      },
    };
  }

  const parsed = PaymentsByCursorResponse.safeParse(json);
  if (!parsed.success) {
    return {
      type: "error",
      data: {
        message: "결제 조회 응답을 해석하지 못했습니다.",
        cause: parsed.error.issues.slice(0, 5),
      },
    };
  }
  return { type: "success", data: parsed.data };
}

/**
 * 주어진 기간의 결제 건을 커서 기반으로 끝까지(또는 maxRecords 까지) 수집합니다.
 *
 * @param maxRecords 수집 상한. 상한에 도달하면 `truncated: true` 로 반환합니다.
 */
export async function collectPaymentsByCursor({
  authorization,
  storeId,
  from,
  until,
  maxRecords,
  pageSize = MAX_PAGE_SIZE,
}: {
  authorization: string;
  storeId?: string | undefined;
  from: string;
  until: string;
  maxRecords: number;
  pageSize?: number;
}): Promise<Result<PaymentCollection>> {
  const payments: PaymentRecord[] = [];
  let cursor: string | undefined;
  let requestCount = 0;
  let truncated = false;

  try {
    while (payments.length < maxRecords) {
      if (requestCount >= MAX_REQUESTS) {
        truncated = true;
        break;
      }
      const size = Math.min(
        Math.min(pageSize, MAX_PAGE_SIZE),
        maxRecords - payments.length,
      );
      const page = await requestPage({
        authorization,
        storeId,
        from,
        until,
        cursor,
        size,
      });
      if (page.type === "error") {
        return page;
      }
      requestCount += 1;

      const items = page.data.items;
      for (const item of items) {
        payments.push(item.payment);
      }
      // 요청한 개수보다 적게 왔다면 구간의 마지막 페이지입니다.
      if (items.length < size) {
        break;
      }
      // 더 남아 있을 수 있는데 상한에 도달했다면 부분 수집으로 표시합니다.
      if (payments.length >= maxRecords) {
        truncated = true;
        break;
      }
      const nextCursor = items[items.length - 1]?.cursor;
      // 커서가 없거나 진전이 없으면 무한 루프를 피하기 위해 중단합니다.
      if (nextCursor == null || nextCursor === cursor) {
        break;
      }
      cursor = nextCursor;
    }

    return {
      type: "success",
      data: { payments, truncated, requestCount },
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        type: "error",
        data: { message: error.message, type: error.name },
      };
    }
    return {
      type: "error",
      data: {
        message: "알 수 없는 오류가 발생했습니다.",
        cause: String(error),
      },
    };
  }
}
