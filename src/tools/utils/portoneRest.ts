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

function copyIfExists(
  src: Record<string, unknown>,
  dest: Record<string, unknown>,
  key: string,
): void {
  const value = src[key];
  if (value !== undefined) {
    dest[key] = value;
  }
}

export function maskPaymentMethod(method: unknown): unknown {
  if (!method || typeof method !== "object") {
    return method;
  }

  const methodObj = method as Record<string, unknown>;
  const filtered: Record<string, unknown> = {};

  copyIfExists(methodObj, filtered, "type");

  const nested = methodObj.method;
  if (nested) {
    filtered.method = maskPaymentMethod(nested);
  }

  return filtered;
}

export function maskSelectedChannel(channel: unknown): unknown {
  if (!channel || typeof channel !== "object") {
    return channel;
  }

  const channelObj = channel as Record<string, unknown>;
  const filtered: Record<string, unknown> = {};

  const knownKeys = ["type", "name", "pgProvider"];
  for (const key of knownKeys) {
    copyIfExists(channelObj, filtered, key);
  }

  return filtered;
}

export function maskEscrow(escrow: unknown): unknown {
  if (!escrow || typeof escrow !== "object") {
    return escrow;
  }

  const escrowObj = escrow as Record<string, unknown>;
  const filtered: Record<string, unknown> = {};

  const knownKeys = [
    "status",
    "company",
    "sentAt",
    "appliedAt",
    "isAutomaticallyConfirmed",
  ];
  for (const key of knownKeys) {
    copyIfExists(escrowObj, filtered, key);
  }

  return filtered;
}

export function maskCashReceipt(cashReceipt: unknown): unknown {
  if (!cashReceipt || typeof cashReceipt !== "object") {
    return cashReceipt;
  }

  const cashReceiptObj = cashReceipt as Record<string, unknown>;
  const filtered: Record<string, unknown> = {};

  const knownKeys = [
    "status",
    "type",
    "totalAmount",
    "taxFreeAmount",
    "currency",
    "issuedAt",
    "cancelledAt",
  ];
  for (const key of knownKeys) {
    copyIfExists(cashReceiptObj, filtered, key);
  }

  return filtered;
}

export function maskPaymentCancellation(cancellation: unknown): unknown {
  if (!cancellation || typeof cancellation !== "object") {
    return cancellation;
  }

  const cancellationObj = cancellation as Record<string, unknown>;
  const filtered: Record<string, unknown> = {};

  const knownKeys = [
    "status",
    "id",
    "totalAmount",
    "taxFreeAmount",
    "vatAmount",
    "easyPayDiscountAmount",
    "reason",
    "cancelledAt",
    "requestedAt",
    "trigger",
  ];
  for (const key of knownKeys) {
    copyIfExists(cancellationObj, filtered, key);
  }

  return filtered;
}

export function maskDispute(dispute: unknown): unknown {
  if (!dispute || typeof dispute !== "object") {
    return dispute;
  }

  const disputeObj = dispute as Record<string, unknown>;
  const filtered: Record<string, unknown> = {};

  const knownKeys = ["status", "reason", "createdAt", "resolvedAt"];
  for (const key of knownKeys) {
    copyIfExists(disputeObj, filtered, key);
  }

  return filtered;
}

export function maskChannelGroup(channelGroup: unknown): unknown {
  if (!channelGroup || typeof channelGroup !== "object") {
    return channelGroup;
  }

  const channelGroupObj = channelGroup as Record<string, unknown>;
  const filtered: Record<string, unknown> = {};

  const knownKeys = ["name", "isForTest"];
  for (const key of knownKeys) {
    copyIfExists(channelGroupObj, filtered, key);
  }

  return filtered;
}

export function maskPayment(payment: unknown): unknown {
  if (!payment || typeof payment !== "object") {
    return payment;
  }

  const paymentObj = payment as Record<string, unknown>;
  const filtered: Record<string, unknown> = {};

  const knownKeys = [
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
  ];

  for (const key of knownKeys) {
    copyIfExists(paymentObj, filtered, key);
  }

  const method = paymentObj.method;
  if (method !== undefined) {
    filtered.method = maskPaymentMethod(method);
  }

  const channel = paymentObj.channel;
  if (channel !== undefined) {
    filtered.channel = maskSelectedChannel(channel);
  }

  const escrow = paymentObj.escrow;
  if (escrow !== undefined) {
    filtered.escrow = maskEscrow(escrow);
  }

  const cashReceipt = paymentObj.cashReceipt;
  if (cashReceipt !== undefined) {
    filtered.cashReceipt = maskCashReceipt(cashReceipt);
  }

  const cancellations = paymentObj.cancellations;
  if (cancellations !== undefined && Array.isArray(cancellations)) {
    filtered.cancellations = cancellations.map((cancellation) =>
      maskPaymentCancellation(cancellation),
    );
  }

  const disputes = paymentObj.disputes;
  if (disputes !== undefined && Array.isArray(disputes)) {
    filtered.disputes = disputes.map((dispute) => maskDispute(dispute));
  }

  const channelGroup = paymentObj.channelGroup;
  if (channelGroup !== undefined) {
    filtered.channelGroup = maskChannelGroup(channelGroup);
  }

  return filtered;
}

export function maskIdentityVerification(
  verification: unknown,
): Record<string, unknown> {
  const iv = verification as Record<string, unknown>;
  const filtered: Record<string, unknown> = {};

  const knownKeys = [
    "status",
    "id",
    "requestedAt",
    "updatedAt",
    "statusChangedAt",
    "failure",
    "version",
  ] as const;

  for (const key of knownKeys) {
    copyIfExists(iv, filtered, key);
  }

  const channel = iv.channel;
  if (channel !== undefined) {
    filtered.channel = maskSelectedChannel(channel);
  }

  return filtered;
}
