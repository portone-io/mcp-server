import json
from datetime import datetime
from typing import Literal, Optional

from httpx import Client

from portone_mcp_server.tools.utils.mapping import filter_out_none
from portone_mcp_server.tools.utils.portone_rest import PgProvider, PortOneVersion, mask_payment

type PaymentTimeRangeField = Literal["CREATED_AT", "STATUS_CHANGED_AT"]
type PaymentStatus = Literal["READY", "PENDING", "VIRTUAL_ACCOUNT_ISSUED", "PAID", "FAILED", "PARTIAL_CANCELLED", "CANCELLED"]
type PaymentMethodType = Literal["CARD", "TRANSFER", "VIRTUAL_ACCOUNT", "GIFT_CERTIFICATE", "MOBILE", "EASY_PAY", "CONVENIENCE_STORE"]


def initialize(portone_client: Client):
    def get_payments_by_filter(
        from_time: datetime,
        until_time: datetime,
        timestamp_type: Optional[PaymentTimeRangeField],
        store_id: Optional[str],
        status: Optional[list[PaymentStatus]],
        methods: Optional[list[PaymentMethodType]],
        pg_provider: Optional[list[PgProvider]],
        is_test: Optional[bool],
        version: Optional[PortOneVersion],
        currency: Optional[str],
        payment_id: Optional[str],
        order_name: Optional[str],
        customer_name: Optional[str],
        customer_email: Optional[str],
        pg_merchant_id: Optional[str],
    ) -> str | list[dict]:
        """포트원 서버에서 주어진 조건을 모두 만족하는 결제 내역을 검색합니다.

        Args:
            from_time: 조회할 시작 시각입니다.
            until_time: 조회할 끝 시각입니다.
            timestamp_type: 조회 범위가 결제를 처음 시도한 시각 기준이면 `CREATED_AT`,
                마지막으로 결제 상태가 변경된 시각 기준이면 `STATUS_CHANGED_AT`입니다.
                미입력 시 `STATUS_CHANGED_AT`입니다.
            store_id: 하위 상점을 포함한 특정 상점의 결제 건만을 조회할 경우에만 입력합니다.
                `store-id-{uuid}` 형식입니다.
            status: 포함할 결제 상태 목록입니다.
            methods: 포함할 결제 수단 목록입니다.
            pg_provider: 포함할 결제가 일어난 결제대행사 목록입니다.
            is_test: 테스트 결제를 포함할지 여부입니다. 미입력 시 `true`입니다.
            version: 포함할 포트원 버전입니다. 미입력 시 모두 검색됩니다.
            currency: 포함할 결제 통화를 나타내는 세 자리 통화 코드입니다.
            payment_id: 고객사에서 발급한 거래번호 일부분입니다. V2에서는 paymentId, V1에서는 merchant_uid에 대응됩니다.
            order_name: 결제 주문명 일부분입니다.
            customer_name: 구매자의 성명 일부분입니다.
            customer_email: 구매자의 이메일 일부분입니다.
            pg_merchant_id: 결제대행사에서 제공한 상점아이디 (MID) 일부분입니다.

        Returns:
            조건을 만족하는 결제 건의 개수와, 그중 최대 10개 결제 건의 정보를 반환하고, 찾지 못하면 오류를 반환합니다.

        Note:
            UNAUTHORIZED 에러의 경우 MCP 서버의 API_SECRET 환경변수 설정이 잘못되었을 가능성이 있습니다.
            소문자 imp_ 혹은 imps_ 로 시작하는 거래번호는 고객사 거래번호가 아닌 V1 포트원 거래번호(imp_uid)일 가능성이 있습니다.
            날짜 및 시간 정보 입출력 시에는 반드시 타임존을 명시합니다.
        """
        text_search = [
            {"field": key, "value": value}
            for key, value in {
                "PAYMENT_ID": payment_id,
                "ORDER_NAME": order_name,
                "CUSTOMER_NAME": customer_name,
                "CUSTOMER_EMAIL": customer_email,
                "PG_MERCHANT_ID": pg_merchant_id,
            }.items()
        ]
        search_filter = filter_out_none(
            {
                "from": from_time.isoformat("T"),
                "until": until_time.isoformat("T"),
                "timestampType": timestamp_type,
                "storeId": store_id,
                "status": status,
                "methods": methods,
                "pgProvider": pg_provider,
                "isTest": is_test,
                "version": version,
                "currency": currency,
                "textSearch": text_search,
            }
        )
        response = portone_client.get(
            "/payments",
            params={
                "requestBody": json.dumps(
                    {
                        "filter": search_filter,
                        "page": {
                            "number": 0,
                            "size": 10,
                        },
                    },
                    ensure_ascii=False,
                ),
            },
        )
        if response.is_error:
            return response.text
        try:
            data = json.loads(response.text)
        except ValueError:
            return "서버로부터 잘못된 응답 수신"
        return [mask_payment(payment) for payment in data["items"]]

    return get_payments_by_filter
