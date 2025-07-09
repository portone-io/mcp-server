import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { filterOutNone, maskIdentityVerification } from "./utils/portone.js";

interface HttpClient {
  get: (url: string, options?: any) => Promise<Response>;
}

export const name = "get_portone_identity_verifications_by_filter";

export const config = {
  title: "포트원 본인인증 내역 검색",
  description: `조건에 맞는 포트원 본인인증 내역을 검색합니다.
최대 10개의 결과만 반환되며, 민감한 정보는 마스킹됩니다.

Args:
  from_time: 조회 시작 시간 (ISO 8601 형식)
  until_time: 조회 종료 시간 (ISO 8601 형식)
  timestamp_type: 타임스탬프 타입 (REQUESTED_AT, STATUS_CHANGED_AT, VERIFIED_AT)
  status: 인증 상태 (READY, PENDING, VERIFIED, FAILED)
  pg_provider: PG사 (DANAL_NICE, INICIS_UNIFIED)
  carrier: 통신사 (SKT, KTF, LGU, SKT_MVNO, KTF_MVNO, LGU_MVNO)
  customer_name: 고객명
  customer_phone_number: 고객 전화번호
  store_id: 상점 ID
  cursor: 페이지네이션 커서
  limit: 조회 개수 (최대 10)

Returns:
  검색된 본인인증 내역 목록 (마스킹됨)`,
  inputSchema: {
    from_time: z.string().optional().describe("조회 시작 시간"),
    until_time: z.string().optional().describe("조회 종료 시간"),
    timestamp_type: z
      .enum(["REQUESTED_AT", "STATUS_CHANGED_AT", "VERIFIED_AT"])
      .optional()
      .describe("타임스탬프 타입"),
    status: z
      .enum(["READY", "PENDING", "VERIFIED", "FAILED"])
      .optional()
      .describe("인증 상태"),
    pg_provider: z
      .enum(["DANAL_NICE", "INICIS_UNIFIED"])
      .optional()
      .describe("PG사"),
    carrier: z
      .enum(["SKT", "KTF", "LGU", "SKT_MVNO", "KTF_MVNO", "LGU_MVNO"])
      .optional()
      .describe("통신사"),
    customer_name: z.string().optional().describe("고객명"),
    customer_phone_number: z.string().optional().describe("고객 전화번호"),
    store_id: z.string().optional().describe("상점 ID"),
    cursor: z.string().optional().describe("페이지네이션 커서"),
    limit: z.number().max(10).default(10).describe("조회 개수"),
  },
};

export function init(
  httpClient: HttpClient,
): ToolCallback<typeof config.inputSchema> {
  return async ({
    from_time,
    until_time,
    timestamp_type,
    status,
    pg_provider,
    carrier,
    customer_name,
    customer_phone_number,
    store_id,
    cursor,
    limit,
  }) => {
    const params = filterOutNone({
      from: from_time,
      until: until_time,
      timestampType: timestamp_type,
      status,
      pgProvider: pg_provider,
      carrier,
      customerName: customer_name,
      customerPhoneNumber: customer_phone_number,
      storeId: store_id,
      cursor,
      limit: Math.min(limit || 10, 10),
    });

    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      searchParams.set(key, String(value));
    }

    const url = `/identity-verifications?${searchParams.toString()}`;

    try {
      const response = await httpClient.get(url);

      if (!response.ok) {
        const errorText = await response.text();
        return {
          content: [
            {
              type: "text",
              text: `Error searching identity verifications: ${response.status} ${response.statusText}\n${errorText}`,
            },
          ],
        };
      }

      const data = (await response.json()) as {
        items?: any[];
        hasNext?: boolean;
        cursor?: string;
      };
      const verifications = data.items || [];
      const maskedVerifications = verifications.map(maskIdentityVerification);

      const result = {
        items: maskedVerifications,
        hasNext: data.hasNext,
        cursor: data.cursor,
      };

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error searching identity verifications: ${error}`,
          },
        ],
      };
    }
  };
}
