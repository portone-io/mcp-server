import z from "zod";

export const PgProviderSchema = z.enum([
  "HTML5_INICIS",
  "PAYPAL",
  "PAYPAL_V2",
  "INICIS",
  "DANAL",
  "NICE",
  "DANAL_TPAY",
  "JTNET",
  "UPLUS",
  "NAVERPAY",
  "KAKAO",
  "SETTLE",
  "KCP",
  "MOBILIANS",
  "KAKAOPAY",
  "NAVERCO",
  "SYRUP",
  "KICC",
  "EXIMBAY",
  "SMILEPAY",
  "PAYCO",
  "KCP_BILLING",
  "ALIPAY",
  "PAYPLE",
  "CHAI",
  "BLUEWALNUT",
  "SMARTRO",
  "SMARTRO_V2",
  "PAYMENTWALL",
  "TOSSPAYMENTS",
  "KCP_QUICK",
  "DAOU",
  "GALAXIA",
  "TOSSPAY",
  "KCP_DIRECT",
  "SETTLE_ACC",
  "SETTLE_FIRM",
  "INICIS_UNIFIED",
  "KSNET",
  "PINPAY",
  "NICE_V2",
  "TOSS_BRANDPAY",
  "WELCOME",
  "TOSSPAY_V2",
  "INICIS_V2",
  "KPN",
  "KCP_V2",
  "HYPHEN",
  "EXIMBAY_V2",
  "INICIS_JP",
  "PAYLETTER_GLOBAL",
]);

export const PortOneVersion = z.enum(["V1", "V2"]);

export const PAYMENT_FIELDS = [
  "status",
  "id",
  "transactionId",
  "storeId",
  "version",
  "scheduleId",
  "requestedAt",
  "updatedAt",
  "statusChangedAt",
  "orderName",
  "amount",
  "currency",
  "promotionId",
  "isCulturalExpense",
  "products",
  "productCount",
  "country",
  "paidAt",
  "cancelledAt",
  "failedAt",
  "failure",
  "method.type",
  // 간편결제
  "method.method.type",
  "channel.type",
  "channel.name",
  "channel.pgProvider",
  "escrow.status",
  "escrow.company",
  "escrow.sentAt",
  "escrow.appliedAt",
  "escrow.isAutomaticallyConfirmed",
  "cashReceipt.status",
  "cashReceipt.type",
  "cashReceipt.totalAmount",
  "cashReceipt.taxFreeAmount",
  "cashReceipt.currency",
  "cashReceipt.issuedAt",
  "cashReceipt.cancelledAt",
  "cancellations.status",
  "cancellations.id",
  "cancellations.totalAmount",
  "cancellations.taxFreeAmount",
  "cancellations.vatAmount",
  "cancellations.easyPayDiscountAmount",
  "cancellations.reason",
  "cancellations.cancelledAt",
  "cancellations.requestedAt",
  "cancellations.trigger",
  "disputes.status",
  "disputes.reason",
  "disputes.createdAt",
  "disputes.resolvedAt",
  "channelGroup.name",
  "channelGroup.isForTest",
] as const;
export const PaymentField = z.enum(PAYMENT_FIELDS);

export const IDENTITY_VERIFICATION_FIELDS = [
  "status",
  "id",
  "requestedAt",
  "updatedAt",
  "statusChangedAt",
  "failure",
  "version",
  "channel.type",
  "channel.name",
  "channel.pgProvider",
] as const;
export const IdentityVerificationField = z.enum(IDENTITY_VERIFICATION_FIELDS);

const JsonLiteral = z.string().or(z.number()).or(z.boolean());
type JsonLiteral = z.infer<typeof JsonLiteral>;
type JsonValue = JsonLiteral | { [key: string]: JsonValue } | JsonValue[];
const JsonValue: z.ZodType<JsonValue> = z.lazy(() =>
  JsonLiteral.or(z.array(JsonValue)).or(z.record(JsonValue)),
);

export function filterFields(
  fields: readonly string[],
  data: unknown,
): JsonValue {
  const withPrefixes = new Set(fields);
  for (const field of fields) {
    let searchPos = 0;
    while (true) {
      const dot = field.indexOf(".", searchPos);
      if (dot === -1) break;
      withPrefixes.add(field.slice(0, dot));
      searchPos = dot + 1;
    }
  }
  const parsed = JsonValue.safeParse(data);
  if (parsed.success) {
    return filterFieldsPath(parsed.data, "");
  } else {
    throw parsed.error;
  }

  function filterFieldsPath(data: JsonValue, currentPath: string): JsonValue {
    if (typeof data === "object") {
      if (Array.isArray(data)) {
        return data.map((item) => filterFieldsPath(item, currentPath));
      } else {
        return Object.fromEntries(
          Object.entries(data).flatMap(([key, value]) => {
            const childPath =
              currentPath === "" ? key : `${currentPath}.${key}`;
            if (withPrefixes.has(childPath)) {
              return [[key, filterFieldsPath(value, childPath)]];
            } else {
              return [];
            }
          }),
        );
      }
    } else {
      return data;
    }
  }
}
