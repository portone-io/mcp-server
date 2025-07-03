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


def mask_customer(customer: dict) -> dict:
    filtered = {}
    copy_if_exists(customer, filtered, "id")
    return filtered


def mask_selected_channel(channel: dict) -> dict:
    filtered = {}
    for known_key in ("type", "key", "name", "pgProvider", "pgMerchantId"):
        copy_if_exists(channel, filtered, known_key)
    return filtered


def mask_billing_key_info(info: dict) -> dict:
    filtered = {}
    for known_key in ("status", "billingKey", "storeId", "customData", "issueId", "issueName", "requestedAt", "issuedAt", "channelGroup", "deletedAt"):
        copy_if_exists(info, filtered, known_key)
    methods = info.get("methods")
    if methods is not None:
        filtered["methods"] = [mask_payment_method(method) for method in methods]
    channels = info.get("channels")
    if channels is not None:
        filtered["channels"] = [mask_selected_channel(channel) for channel in channels]
    customer = info.get("customer")
    if customer is not None:
        filtered["customer"] = mask_customer(customer)
    return filtered


def mask_payment(payment: dict) -> dict:
    filtered = {}
    for known_key in (
        "status",
        "id",
        "transactionId",
        "storeId",
        "channelGroup",
        "version",
        "scheduleId",
        "billingKey",
        "requestedAt",
        "updatedAt",
        "statusChangedAt",
        "orderName",
        "amount",
        "currency",
        "promotionId",
        "isCulturalExpense",
        "escrow",
        "products",
        "productCount",
        "customData",
        "country",
        "paidAt",
        "pgTxId",
        "cashReceipt",
        "receiptUrl",
        "disputes",
        "cancellations",
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
    customer = payment.get("customer")
    if customer is not None:
        filtered["customer"] = mask_customer(customer)
    return filtered


def mask_identity_verification(iv: dict) -> dict:
    filtered = {}
    for known_key in (
        "status",
        "id",
        "customData",
        "requestedAt",
        "updatedAt",
        "statusChangedAt",
        "failure",
        "version",
        "cancellations",
        "cancelledAt",
        "failedAt",
        "failure",
    ):
        copy_if_exists(iv, filtered, known_key)
    channel = iv.get("channel")
    if channel is not None:
        filtered["channel"] = mask_selected_channel(channel)
    requested_customer = iv.get("requestedCustomer")
    if requested_customer is not None:
        filtered["requestedCustomer"] = mask_customer(requested_customer)
    verified_customer = iv.get("verifiedCustomer")
    if verified_customer is not None:
        filtered["verifiedCustomer"] = mask_customer(verified_customer)
    return filtered
