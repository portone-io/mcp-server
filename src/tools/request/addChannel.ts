import { match, P } from "ts-pattern";
import z from "zod";
import type { Result } from "../utils/result.ts";
import { CHANNEL_SERVICE_URL } from "../utils/url.ts";
import { USER_AGENT } from "../utils/userAgent.ts";

const StatusResponse = z
  .object({
    code: z.unknown(),
    message: z.string(),
    details: z.unknown(),
  })
  .partial();

const AddChannelResponse = z.object({
  channel: z.object({
    channelKey: z.string(),
  }),
});

type AddChannelResponse = z.infer<typeof AddChannelResponse>;

const channelTypeMapper = {
  LIVE: "CHANNEL_TYPE_REQUEST_LIVE",
  TEST: "CHANNEL_TYPE_REQUEST_MERCHANT_TEST",
};

const taxTypeMapper = {
  TAXATION: "TAX_TYPE_TAXATION_CHANNEL",
  TAX_FREE: "TAX_TYPE_TAX_FREE_CHANNEL",
  COMPOUND: "TAX_TYPE_COMPOUND_TAXATION",
};

export async function addChannel({
  channelType,
  pgpCredential,
  channelName,
  pgMerchantId,
  storeId,
  taxType,
  manualConfirm,
  isForPayment,
  isForIdentityCertification,
  authorization,
}: {
  channelType: keyof typeof channelTypeMapper;
  pgpCredential: object;
  channelName: string;
  pgMerchantId: string;
  storeId: string;
  taxType?: keyof typeof taxTypeMapper;
  manualConfirm: boolean;
  isForPayment: boolean;
  isForIdentityCertification: boolean;
  authorization: string;
}): Promise<Result<AddChannelResponse>> {
  const request = {
    channelType: channelTypeMapper[channelType],
    pgpCredential,
    channelName,
    pgMerchantId,
    isForPayment,
    isForIdentityCertification,
    storeId,
    taxType,
    manualConfirm,
  };
  try {
    const response = await fetch(new URL("/v2/channels", CHANNEL_SERVICE_URL), {
      method: "POST",
      headers: {
        Authorization: authorization,
        "Content-Type": "application/json",
        "User-Agent": USER_AGENT,
      },
      body: JSON.stringify(request),
    });
    const text = await response.text();
    try {
      const parsed = await AddChannelResponse.or(StatusResponse).parseAsync(
        JSON.parse(text),
      );
      return match(parsed)
        .returnType<Result<AddChannelResponse>>()
        .with({ channel: P.nonNullable }, (success) => ({
          type: "success",
          data: success,
        }))
        .otherwise(({ code, message, details }) => ({
          type: "error",
          data: {
            message: message ?? "채널을 올바르게 추가하지 못했습니다.",
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
