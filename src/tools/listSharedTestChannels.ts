import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { listV2SharedTestChannel } from "./request/listV2SharedTestChannel.ts";
import { getToken, type TokenProvider } from "./utils/key.ts";
import { PgProviderSchema } from "./utils/portoneRest.ts";
import { toolErrorResult } from "./utils/result.ts";

export const name = "listSharedTestChannels";

const SharedTestChannel = z.object({
  pg: z
    .string()
    .describe(
      "PG사 결제 모듈의 식별자로, PG사별로 여러 모듈이 있을 수 있습니다.",
    ),
  mid: z.string().describe("PG사에서 고객사를 구분하기 위한 ID"),
  name: z.string().describe("포트원에서 지정한 채널의 이름"),
  usage: z
    .array(z.enum(["PAYMENT", "IDENTITY"]))
    .describe("채널을 사용 가능한 용도"),
});

const OutputSchema = z.object({
  items: z
    .array(SharedTestChannel)
    .describe("조회된 채널 목록으로, MID가 포함됩니다."),
});

export const config = {
  title: "포트원 공용 테스트 채널 목록 조회",
  description: "포트원에서 테스트 용도로 제공하는 채널의 목록을 가져옵니다.",
  inputSchema: {
    pgProviders: z
      .array(PgProviderSchema)
      .optional()
      .describe("목록에 있는 PG사(미설정 시 모든 PG사)만 보여줍니다."),
  },
  outputSchema: OutputSchema.shape,
};

export function init(
  tokenProvider: TokenProvider,
): ToolCallback<typeof config.inputSchema> {
  return async () => {
    const token = await getToken(tokenProvider);
    if (token.type === "error") {
      return toolErrorResult(token);
    }

    const list = await listV2SharedTestChannel({
      authorization: token.data,
    });

    if (list.type === "error") {
      return toolErrorResult(list);
    }

    const structuredContent: z.infer<typeof OutputSchema> = {
      items: list.data.channels.map(
        ({
          pgProvider,
          pgMerchantId,
          channelName,
          isForPayment,
          isForIdentityCertification,
        }) => {
          const usage: z.infer<typeof SharedTestChannel>["usage"] = [];
          if (isForPayment) usage.push("PAYMENT");
          if (isForIdentityCertification) usage.push("IDENTITY");
          return {
            pg: pgProvider,
            mid: pgMerchantId,
            name: channelName,
            usage,
          };
        },
      ),
    };
    return {
      structuredContent,
      content: [
        {
          type: "text",
          text: JSON.stringify(structuredContent, null, 2),
        },
      ],
    };
  };
}
