from typing import Literal

type PgProvider = Literal[
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
]
type PortOneVersion = Literal["V1", "V2"]

# MCP에 불필요한 정보나 개인정보를 삭제
# API 응답에는 예고 없이 필드가 추가될 수 있으므로 allowlist 기반으로 마스킹


def copy_if_exists(src: dict, dest: dict, key: str) -> None:
    value = src.get(key)
    if value is not None:
        dest[key] = value


def mask_payment_method(method: dict) -> dict:
    filtered = {}
    copy_if_exists(method, filtered, "type")
    nested = method.get("method")
    if nested:
        filtered["method"] = mask_payment_method(nested)
    return filtered


def mask_selected_channel(channel: dict) -> dict:
    filtered = {}
    for known_key in ("type", "name", "pgProvider"):
        copy_if_exists(channel, filtered, known_key)
    return filtered


def mask_escrow(escrow: dict) -> dict:
    filtered = {}
    for known_key in ("status", "company", "sentAt", "appliedAt", "isAutomaticallyConfirmed"):
        copy_if_exists(escrow, filtered, known_key)
    return filtered


def mask_cash_receipt(cash_receipt: dict) -> dict:
    filtered = {}
    for known_key in ("status", "type", "totalAmount", "taxFreeAmount", "currency", "issuedAt", "cancelledAt"):
        copy_if_exists(cash_receipt, filtered, known_key)
    return filtered


def mask_payment_cancellation(cancellation: dict) -> dict:
    filtered = {}
    for known_key in ("status", "id", "totalAmount", "taxFreeAmount", "vatAmount", "easyPayDiscountAmount", "reason", "cancelledAt", "requestedAt", "trigger"):
        copy_if_exists(cancellation, filtered, known_key)
    return filtered


def mask_dispute(dispute: dict) -> dict:
    filtered = {}
    for known_key in ("status", "reason", "createdAt", "resolvedAt"):
        copy_if_exists(dispute, filtered, known_key)
    return filtered


def mask_channel_group(channel_group: dict) -> dict:
    filtered = {}
    for known_key in ("name", "isForTest"):
        copy_if_exists(channel_group, filtered, known_key)
    return filtered


def mask_payment(payment: dict) -> dict:
    filtered = {}
    for known_key in (
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
    ):
        copy_if_exists(payment, filtered, known_key)
    method = payment.get("method")
    if method is not None:
        filtered["method"] = mask_payment_method(method)
    channel = payment.get("channel")
    if channel is not None:
        filtered["channel"] = mask_selected_channel(channel)
    escrow = payment.get("escrow")
    if escrow is not None:
        filtered["escrow"] = mask_escrow(escrow)
    cash_receipt = payment.get("cashReceipt")
    if cash_receipt is not None:
        filtered["cashReceipt"] = mask_cash_receipt(cash_receipt)
    cancellations = payment.get("cancellations")
    if cancellations is not None:
        filtered["cancellations"] = [mask_payment_cancellation(cancellation) for cancellation in cancellations]
    disputes = payment.get("disputes")
    if disputes is not None:
        filtered["disputes"] = [mask_dispute(dispute) for dispute in disputes]
    channel_group = payment.get("channelGroup")
    if channel_group is not None:
        filtered["channelGroup"] = mask_channel_group(channel_group)

    return filtered


def mask_identity_verification(iv: dict) -> dict:
    filtered = {}
    for known_key in (
        "status",
        "id",
        "requestedAt",
        "updatedAt",
        "statusChangedAt",
        "failure",
        "version",
    ):
        copy_if_exists(iv, filtered, known_key)
    channel = iv.get("channel")
    if channel is not None:
        filtered["channel"] = mask_selected_channel(channel)
    return filtered
