import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GetIdentityVerificationsResponse } from "@portone/server-sdk/identityVerification";
import z from "zod";
import type { HttpClient } from "../types.ts";
import { filterOutNone } from "./utils/mapping.ts";
import {
  filterFields,
  IdentityVerificationField,
  PgProviderSchema,
} from "./utils/portoneRest.ts";

const IdentityVerificationTimeStamp = z.enum([
  "REQUESTED_AT",
  "VERIFIED_AT",
  "FAILED_AT",
  "STATUS_UPDATED_AT",
]);
const IdentityVerificationStatus = z.enum(["READY", "VERIFIED", "FAILED"]);
const Carrier = z.enum(["SKT", "KT", "LGU", "SKT_MVNO", "KT_MVNO", "LGU_MVNO"]);

export const name = "getIdentityVerificationsByFilter";

export const config = {
  title: "포트원 본인인증 내역 검색",
  description: `포트원 서버에서 주어진 조건을 모두 만족하는 본인인증 정보를 검색합니다.

Note:
  UNAUTHORIZED 에러의 경우 MCP 서버의 API_SECRET 환경변수 설정이 잘못되었을 가능성이 있습니다.
  소문자 imp_ 혹은 imps_ 로 시작하는 거래번호는 고객사 거래번호가 아닌 V1 포트원 거래번호(imp_uid)일 가능성이 있습니다.
  날짜 및 시간 정보 입출력 시에는 반드시 타임존을 명시합니다.`,
  inputSchema: {
    fromTime: z
      .string()
      .datetime({ offset: true })
      .describe("조회 시작 시간 (ISO 8601 형식)"),
    untilTime: z
      .string()
      .datetime({ offset: true })
      .describe("조회 종료 시간 (ISO 8601 형식)"),
    pageIndex: z
      .number()
      .min(0)
      .describe("검색할 페이지 위치입니다. 0부터 시작합니다."),
    pageSize: z
      .number()
      .min(1)
      .default(10)
      .describe("한 페이지에 반환할 결과의 수입니다."),
    fields: z
      .array(IdentityVerificationField)
      .describe("검색 결과로 받을 필드 목록입니다."),
    timestampType: IdentityVerificationTimeStamp.default(
      "STATUS_UPDATED_AT",
    ).describe(`조회 범위의 기준이 본인인증을 처음 시도한 시각이면 "REQUESTED_AT",
본인인증이 완료된 시각이면 "VERIFIED_AT", 실패한 시각이면 "FAILED_AT",
마지막으로 상태가 변경된 시각이면 "STATUS_UPDATED_AT"입니다.`),
    storeId: z
      .string()
      .optional()
      .describe(
        "하위 상점을 포함한 특정 상점의 인증 건만을 조회할 경우에만 입력합니다. `store-id-{uuid}` 형식입니다.",
      ),
    status: z
      .array(IdentityVerificationStatus)
      .optional()
      .describe("포함할 본인인증 상태 목록입니다."),
    pgProvider: z
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
    customerName: z.string().optional().describe("발급자의 성명 일부분입니다."),
    pgMerchantId: z
      .string()
      .optional()
      .describe("결제대행사에서 제공한 상점아이디 (MID) 일부분입니다."),
    isTest: z
      .boolean()
      .default(true)
      .describe(
        "테스트 인증 건을 포함할지 여부입니다. 미입력 시 `true`입니다.",
      ),
  },
  outputSchema: {
    items: z
      .array(z.object({}).passthrough())
      .describe("조회된 본인인증 건의 목록"),
    totalCount: z.number().describe("조건에 맞는 본인인증 건의 총 개수"),
  },
};

export function init(
  httpClient: HttpClient,
): ToolCallback<typeof config.inputSchema> {
  return async ({
    fromTime,
    untilTime,
    pageIndex,
    pageSize,
    fields,
    timestampType,
    storeId,
    status,
    pgProvider,
    carrier,
    customerName,
    version,
    pgMerchantId,
    isTest,
  }) => {
    const searchFilter = filterOutNone({
      from: fromTime,
      until: untilTime,
      timeRangeField: timestampType,
      storeId: storeId,
      statuses: status,
      pgProviders: pgProvider,
      version: version,
      carriers: carrier,
      pgMerchantId: pgMerchantId,
      isTest: isTest,
      customer: filterOutNone({
        name: customerName,
      }),
    });

    const response = await httpClient.get(
      `/identity-verifications?requestBody=${encodeURIComponent(
        JSON.stringify({
          filter: searchFilter,
          page: {
            number: pageIndex,
            size: pageSize,
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
      const maskedItems = filterFields(fields, data.items);
      const structuredContent = {
        items: maskedItems,
        totalCount: data.page.totalCount,
      };
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(structuredContent, null, 2),
          },
        ],
        structuredContent,
      };
    } catch {
      return {
        content: [{ type: "text", text: "서버로부터 잘못된 응답 수신" }],
        isError: true,
      };
    }
  };
}
