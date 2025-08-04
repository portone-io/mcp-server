import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GraphQLClient } from "graphql-request";
import z from "zod";
import { listStores, type StoreResponse } from "./request/listStores.ts";
import { getToken, type TokenProvider } from "./utils/key.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "listStores";

const Store = z.object({
  id: z.string().describe("거래 다건 조회용 상점 식별자"),
  storeId: z.string().describe("포트원 상점아이디"),
  name: z.string().describe("상점명"),
  userId: z.number().optional().describe("V1 유저 아이디"),
  userCode: z.string().optional().describe("V1 고객 식별번호"),
  tierCode: z.string().optional().describe("티어코드"),
});

const OutputSchema = z.object({
  main: Store.optional().describe("대표상점"),
  items: z.array(Store).describe("하위상점 목록"),
});

export const config = {
  title: "상점 목록 조회",
  description: "포트원 계정에 연결된 대표상점 및 하위상점의 정보를 가져옵니다.",
  inputSchema: {},
  outputSchema: OutputSchema.shape,
};

export function init(
  tokenProvider: TokenProvider,
  client: GraphQLClient,
): ToolCallback<typeof config.inputSchema> {
  return async () => {
    const token = await getToken(tokenProvider);

    if (token.type === "error") {
      return toolErrorResult(token);
    }

    const list = await listStores({
      client,
      authorization: token.data,
    });

    if (list.type === "error") {
      return toolErrorResult(list);
    }

    const structuredContent: z.infer<typeof OutputSchema> = {
      main: list.data.main == null ? undefined : renameStore(list.data.main),
      items: list.data.items.map((store) => renameStore(store)),
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

function renameStore(store: StoreResponse): z.infer<typeof Store> {
  const { plainId, ...rest } = store;
  return {
    storeId: plainId,
    ...rest,
  };
}
