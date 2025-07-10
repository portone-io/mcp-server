import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import {
  maskIdentityVerification,
  PgProviderSchema,
} from "./utils/portoneRest.js";
import { HttpClient } from "../types.js";
import { filterOutNone } from "./utils/mapping.js";
import {
  GetIdentityVerificationsResponse,
  IdentityVerification,
} from "@portone/server-sdk/identityVerification";

const IdentityVerificationTimeStamp = z.enum([
  "REQUESTED_AT",
  "VERIFIED_AT",
  "FAILED_AT",
  "STATUS_UPDATED_AT",
]);
const IdentityVerificationStatus = z.enum(["READY", "VERIFIED", "FAILED"]);
const Carrier = z.enum(["SKT", "KT", "LGU", "SKT_MVNO", "KT_MVNO", "LGU_MVNO"]);

export const name = "get_portone_identity_verifications_by_filter";

export const config = {
  title: "포트원 본인인증 내역 검색",
  description: `포트원 서버에서 주어진 조건을 모두 만족하는 본인인증 정보를 검색합니다.

Returns:
  조건을 만족하는 본인인증 건의 개수와, 그중 최대 10개 인증 건의 정보를 반환하고, 찾지 못하면 오류를 반환합니다.

Note:
  UNAUTHORIZED 에러의 경우 MCP 서버의 API_SECRET 환경변수 설정이 잘못되었을 가능성이 있습니다.
  날짜 및 시간 정보 입출력 시에는 반드시 타임존을 명시합니다.`,
  inputSchema: {
    from_time: z
      .string()
      .datetime({ offset: true })
      .describe("조회 시작 시간 (ISO 8601 형식)"),
    until_time: z
      .string()
      .datetime({ offset: true })
      .describe("조회 종료 시간 (ISO 8601 형식)"),
    timestamp_type: IdentityVerificationTimeStamp.default(
      "STATUS_UPDATED_AT",
    ).describe(`조회 범위의 기준이 본인인증을 처음 시도한 시각이면 "REQUESTED_AT",
본인인증이 완료된 시각이면 "VERIFIED_AT", 실패한 시각이면 "FAILED_AT",
마지막으로 상태가 변경된 시각이면 "STATUS_UPDATED_AT"입니다.`),
    store_id: z
      .string()
      .optional()
      .describe(
        "하위 상점을 포함한 특정 상점의 인증 건만을 조회할 경우에만 입력합니다. `store-id-{uuid}` 형식입니다.",
      ),
    status: z
      .array(IdentityVerificationStatus)
      .optional()
      .describe("포함할 본인인증 상태 목록입니다."),
    pg_provider: z
      .array(PgProviderSchema)
      .optional()
      .describe("본인인증이 일어난 결제대행사 목록입니다."),
    version: z
      .enum(["V1", "V2"])
      .optional()
      .describe("포함할 포트원 버전입니다. 미입력 시 모두 검색됩니다."),
    carrier: z
      .array(Carrier)
      .optional()
      .describe("포함할 통신사 목록입니다. MVNO는 알뜰폰을 뜻합니다."),
    customer_name: z
      .string()
      .optional()
      .describe("발급자의 성명 일부분입니다."),
    pg_merchant_id: z
      .string()
      .optional()
      .describe("결제대행사에서 제공한 상점아이디 (MID) 일부분입니다."),
    is_test: z
      .boolean()
      .default(true)
      .describe(
        "테스트 인증 건을 포함할지 여부입니다. 미입력 시 `true`입니다.",
      ),
  },
};

export function init(
  httpClient: HttpClient,
): ToolCallback<typeof config.inputSchema> {
  return async ({
    from_time,
    until_time,
    timestamp_type,
    store_id,
    status,
    pg_provider,
    carrier,
    customer_name,
    version,
    pg_merchant_id,
    is_test,
  }) => {
    const searchFilter = filterOutNone({
      from: from_time,
      until: until_time,
      timeRangeField: timestamp_type,
      storeId: store_id,
      statuses: status,
      pgProviders: pg_provider,
      version: version,
      carriers: carrier,
      pgMerchantId: pg_merchant_id,
      isTest: is_test,
      customer: filterOutNone({
        name: customer_name,
      }),
    });

    const response = await httpClient.get(
      `/identity-verifications?requestBody=${encodeURIComponent(
        JSON.stringify({
          filter: searchFilter,
          page: {
            number: 0,
            size: 10,
          },
        }),
      )}`,
    );

    if (!response.ok) {
      const text = await response.text();
      return { content: [{ type: "text", text }], isError: true };
    }

    try {
      const data = (await response.json()) as GetIdentityVerificationsResponse;
      const maskedItems = data.items.map(maskIdentityVerification);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(maskedItems, null, 2),
          },
        ],
      };
    } catch {
      return {
        content: [{ type: "text", text: "서버로부터 잘못된 응답 수신" }],
        isError: true,
      };
    }
  };
}
