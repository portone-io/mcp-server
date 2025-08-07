import { match, P } from "ts-pattern";
import z from "zod";
import { CHANNEL_SERVICE_URL } from "../../url.ts";
import type { Result } from "../utils/result.ts";
import { USER_AGENT } from "../utils/userAgent.ts";

const StatusResponse = z
  .object({
    code: z.unknown(),
    message: z.string(),
    details: z.unknown(),
  })
  .partial();

const SharedTestChannelResponse = z.object({
  pgProvider: z.string(),
  pgMerchantId: z.string(),
  pgpCredential: z.object({}).passthrough(),
  channelName: z.string(),
  isForPayment: z.boolean(),
  isForIdentityCertification: z.boolean(),
});

const ListV2SharedTestChannelResponse = z.object({
  channels: z.array(SharedTestChannelResponse),
});

type ListV2SharedTestChannelResponse = z.infer<
  typeof ListV2SharedTestChannelResponse
>;

export async function listV2SharedTestChannel({
  authorization,
}: {
  authorization: string;
}): Promise<Result<ListV2SharedTestChannelResponse>> {
  try {
    const response = await fetch(
      new URL("/v2/shared-test-channels", CHANNEL_SERVICE_URL),
      {
        method: "GET",
        headers: {
          Authorization: authorization,
          "User-Agent": USER_AGENT,
        },
      },
    );
    const text = await response.text();
    try {
      const parsed = await ListV2SharedTestChannelResponse.or(
        StatusResponse,
      ).parseAsync(JSON.parse(text));
      return match(parsed)
        .returnType<Result<ListV2SharedTestChannelResponse>>()
        .with({ channels: P.nonNullable }, (success) => ({
          type: "success",
          data: success,
        }))
        .otherwise(({ code, message, details }) => ({
          type: "error",
          data: {
            message: message ?? "테스트 채널 정보를 가져오지 못했습니다.",
            code,
            details,
            status: response.status,
          },
        }));
    } catch (parseError) {
      return {
        type: "error",
        data: {
          message: "올바르지 않은 형식의 서버 응답",
          cause: parseError,
        },
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        type: "error",
        data: error,
      };
    } else {
      return {
        type: "error",
        data: {
          message: `알 수 없는 오류가 발생했습니다.`,
          cause: error,
        },
      };
    }
  }
}
