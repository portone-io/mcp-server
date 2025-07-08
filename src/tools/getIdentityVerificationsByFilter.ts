import axios from "axios";
import type { IdentityVerificationFilter } from "../types.js";
import { filterOutNone, maskIdentityVerification } from "./utils/portone.js";

export function getTool(apiSecret: string) {
  return {
    name: "get_identity_verifications_by_filter",
    description: "포트원 본인인증 목록을 필터링하여 조회합니다.",
    inputSchema: {
      type: "object",
      properties: {
        store_id: { type: "string", description: "스토어 ID" },
        status: {
          type: "string",
          enum: ["READY", "PENDING", "FAILED", "VERIFIED"],
          description: "본인인증 상태",
        },
        from: { type: "string", description: "조회 시작 시간 (ISO 8601)" },
        until: { type: "string", description: "조회 종료 시간 (ISO 8601)" },
        cursor: { type: "string", description: "페이지네이션 커서" },
        limit: { type: "number", description: "조회 개수 (최대 100)" },
      },
    },
  };
}

export async function handler(
  apiSecret: string,
  args: IdentityVerificationFilter,
): Promise<string | Record<string, any>> {
  const params = filterOutNone({
    storeId: args.store_id,
    status: args.status,
    from: args.from,
    until: args.until,
    cursor: args.cursor,
    limit: args.limit,
  });

  try {
    const response = await axios.get(
      "https://api.portone.io/identity-verifications",
      {
        params,
        headers: {
          Authorization: `PortOne ${apiSecret}`,
        },
      },
    );

    const data = response.data;
    if (data.items) {
      data.items = data.items.map((item: any) =>
        maskIdentityVerification(item),
      );
    }

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return (
        error.response?.data || `본인인증 목록 조회 실패: ${error.message}`
      );
    }
    return `본인인증 목록 조회 실패: ${error}`;
  }
}
