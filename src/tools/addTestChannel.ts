import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GraphQLClient } from "graphql-request";
import z from "zod";
import { addChannel } from "./request/addChannel.ts";
import { listStores } from "./request/listStores.ts";
import { listV2SharedTestChannel } from "./request/listV2SharedTestChannel.ts";
import { getToken, type TokenProvider } from "./utils/key.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "addTestChannel";

const InputSchema = z.object({
  mid: z.string().describe("테스트 채널의 PG사 MID"),
  manualConfirm: z
    .boolean()
    .optional()
    .default(false)
    .describe("수동 승인 사용 여부"),
});

const OutputSchema = z.object({
  channelKey: z.string().describe("추가된 채널의 채널키"),
});

export const config = {
  title: "포트원 테스트 채널 추가",
  description: `고객사의 대표상점에 공용 테스트 채널을 추가합니다.

NOTE:
  반드시 listSharedTestChannels를 통해 얻은 MID를 사용하세요.`,
  inputSchema: InputSchema.shape,
  outputSchema: OutputSchema.shape,
};

export function init(
  tokenProvider: TokenProvider,
  client: GraphQLClient,
): ToolCallback<typeof config.inputSchema> {
  return async ({ mid, manualConfirm }) => {
    const token = await getToken(tokenProvider);
    if (token.type === "error") {
      return toolErrorResult(token);
    }
    const authorization = token.data;

    // 채널 추가는 대표상점만 가능
    const stores = await listStores({
      client,
      authorization,
    });
    if (stores.type === "error") {
      return toolErrorResult(stores);
    }
    const storeId = stores.data.main?.plainId;
    if (storeId == null) {
      return {
        content: [
          {
            type: "text",
            text: "대표상점 정보가 없습니다.",
          },
        ],
        isError: true,
      };
    }

    const list = await listV2SharedTestChannel({
      authorization,
    });
    if (list.type === "error") {
      return toolErrorResult(list);
    }

    const channelToAdd = list.data.channels.find(
      ({ pgMerchantId }) => pgMerchantId === mid,
    );
    if (channelToAdd == null) {
      return {
        content: [
          {
            type: "text",
            text: `${mid}에 해당하는 테스트 채널 정보가 없습니다.`,
          },
        ],
        isError: true,
      };
    }

    const add = await addChannel({
      authorization,
      channelType: "TEST",
      manualConfirm,
      ...channelToAdd,
      storeId,
    });

    if (add.type === "error") {
      return toolErrorResult(add);
    }

    const structuredContent: z.infer<typeof OutputSchema> = add.data.channel;
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
