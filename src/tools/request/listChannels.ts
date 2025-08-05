import { match, P } from "ts-pattern";
import z from "zod";
import type { Result } from "../utils/result.ts";
import { CHANNEL_SERVICE_URL } from "../utils/url.ts";

const StatusResponse = z.object({
  code: z.number(),
  message: z.string().optional(),
  details: z.array(z.object({}).passthrough()).optional(),
});

const ChannelResponse = z.object({
  channelId: z.string(),
  pgProvider: z.string(),
  channelType: z.string(),
  liveChannel: z
    .object({
      merchantId: z.string(),
      storeIds: z.array(z.string()),
    })
    .optional(),
  merchantTestChannel: z
    .object({
      merchantId: z.string(),
    })
    .optional(),
  channelName: z.string(),
  pgMerchantId: z.string(),
  isForPayment: z.boolean(),
  isForIdentityCertification: z.boolean(),
  isFromV1UserPgs: z.boolean(),
  isFromV1SbcrUsers: z.boolean(),
  deleted: z.boolean(),
  boundAt: z.string(),
  modifiedAt: z.string(),
  taxType: z.string().optional(),
  channelKey: z.string(),
  pgCompany: z.string(),
  isSupportingV2: z.boolean(),
  manualConfirm: z.boolean(),
});

const ListChannelsResponse = z.object({
  channels: z.array(ChannelResponse),
});

type ListChannelsResponse = z.infer<typeof ListChannelsResponse>;

export async function listChannels({
  storeId,
  authorization,
}: {
  storeId: string;
  authorization: string;
}): Promise<Result<ListChannelsResponse>> {
  try {
    const url = new URL("/v2/channels", CHANNEL_SERVICE_URL);
    url.searchParams.set("storeId", storeId);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        authorization,
      },
    });
    const text = await response.text();
    try {
      const parsed = await ListChannelsResponse.or(StatusResponse).parseAsync(
        JSON.parse(text),
      );
      return match(parsed)
        .returnType<Result<ListChannelsResponse>>()
        .with({ channels: P.nonNullable }, (success) => ({
          type: "success",
          data: success,
        }))
        .otherwise(({ code, message, details }) => ({
          type: "error",
          data: {
            message: message ?? "상점의 채널 정보를 가져오지 못했습니다.",
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
          message: "알 수 없는 오류가 발생했습니다.",
          cause: error,
        },
      };
    }
  }
}
