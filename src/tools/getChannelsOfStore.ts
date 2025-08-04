import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { listChannels } from "./request/listChannels.ts";
import { getToken, type TokenProvider } from "./utils/key.ts";
import { filterFieldsV2 } from "./utils/portoneRest.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "getChannelsOfStore";

const Channel = z.object({
  id: z
    .string()
    .describe(
      "채널 ID로 채널 수정 시마다 변경됩니다. 모든 결제건은 채널 ID와 햠께 저장되어 채널 수정 후에도 이전 ID를 유지합니다.",
    ),
  pg: z
    .string()
    .describe(
      "PG사 결제 모듈의 식별자로, PG사별로 여러 모듈이 있을 수 있습니다.",
    ),
  mid: z.string().describe("PG사에서 고객사를 구분하기 위한 ID"),
  name: z.string().describe("채널명"),
  usage: z
    .array(z.enum(["PAYMENT", "IDENTITY"]))
    .describe("채널을 사용 가능한 용도"),
  createdAt: z.string().describe("생성 시각"),
  modifiedAt: z.string().default("마지막 수정 시각"),
  taxType: z.string().describe("정산 시에만 참고하는, MID의 과세 정보"),
  key: z.string().describe("채널 키"),
  canV2: z.boolean().describe("V2 사용 가능 여부"),
  manualConfirm: z.boolean().describe("수동 승인 (2-transaction) 사용 여부"),
});
type Channel = z.infer<typeof Channel>;

const InputSchema = z.object({
  store: z.string().describe("채널을 검색할 상점 아이디"),
  fields: z.array(Channel.keyof()).describe("결과로 받을 채널 정보 목록"),
});

const OutputSchema = z.object({
  items: z.array(Channel.partial()).describe("조회된 채널 목록"),
});

export const config = {
  title: "포트원 상점 내 채널 목록 조회",
  description: `고객사의 상점에 존재하는 모든 채널 정보를 가져옵니다.`,
  inputSchema: InputSchema.shape,
  outputSchema: OutputSchema.shape,
};

export function init(
  tokenProvider: TokenProvider,
): ToolCallback<typeof config.inputSchema> {
  return async ({ store, fields }) => {
    const token = await getToken(tokenProvider);
    if (token.type === "error") {
      return toolErrorResult(token);
    }

    const list = await listChannels({
      storeId: store,
      authorization: token.data,
    });
    if (list.type === "error") {
      return toolErrorResult(list);
    }

    const fieldsSet = new Set(fields);
    const channels = list.data.channels
      .filter(({ deleted }) => !deleted)
      .map(
        ({
          channelId,
          pgProvider,
          pgMerchantId,
          channelName,
          isForPayment,
          isForIdentityCertification,
          boundAt,
          modifiedAt,
          taxType,
          channelKey,
          isSupportingV2,
          manualConfirm,
        }): Partial<Channel> => {
          const usage: Channel["usage"] = [];
          if (isForPayment) usage.push("PAYMENT");
          if (isForIdentityCertification) usage.push("IDENTITY");
          return filterFieldsV2(fieldsSet, {
            id: channelId,
            pg: pgProvider,
            mid: pgMerchantId,
            name: channelName,
            usage,
            createdAt: boundAt,
            modifiedAt,
            taxType,
            key: channelKey,
            canV2: isSupportingV2,
            manualConfirm,
          });
        },
      );

    const structuredContent: z.infer<typeof OutputSchema> = {
      items: channels,
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
  };
}
