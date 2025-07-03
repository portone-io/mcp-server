import json
from datetime import datetime
from typing import Literal, Optional

from httpx import Client

from portone_mcp_server.tools.utils.mapping import filter_out_none
from portone_mcp_server.tools.utils.portone_rest import PgProvider, mask_billing_key_info

type BillingKeyTimeStampType = Literal["REQUESTED_AT", "ISSUED_AT", "DELETED_AT", "STATUS_TIMESTAMP"]
type BillingKeyStatus = Literal["ISSUED", "DELETED"]
type BillingKeyPaymentMethodType = Literal["CARD", "MOBILE", "EASY_PAY", "TRANSFER"]


def initialize(portone_client: Client):
    def get_billing_keys_by_filter(
        from_time: datetime,
        until_time: datetime,
        timestamp_type: Optional[BillingKeyTimeStampType],
        store_id: Optional[str],
        status: Optional[list[BillingKeyStatus]],
        methods: Optional[list[BillingKeyPaymentMethodType]],
        pg_provider: Optional[list[PgProvider]],
        version: Optional[Literal["V1", "V2"]],
        customer_name: Optional[str],
        customer_email: Optional[str],
        pg_merchant_id: Optional[str],
    ) -> str | list[dict]:
        """포트원 서버에서 주어진 조건을 모두 만족하는 빌링키 정보를 검색합니다.

        Args:
            from_time: 조회할 시작 시각입니다.
            until_time: 조회할 끝 시각입니다.
            timestamp_type: 조회 범위의 기준이 빌링키 발급을 처음 시도한 시각 기준이면 `REQUESTED_AT`,
                빌링키가 발급된 시각이면 `ISSUED_AT`, 빌링키가 삭제된 시각이면 `DELETED_AT`,
                마지막으로 빌링키 상태가 변경된 시각 기준이면 `STATUS_TIMESTAMP`입니다.
                미입력 시 `STATUS_CHANGED_AT`입니다.
            store_id: 하위 상점을 포함한 특정 상점의 빌링키만을 조회할 경우에만 입력합니다.
                `store-id-{uuid}` 형식입니다.
            status: 포함할 빌링키 상태 목록입니다.
            methods: 포함할 빌링키 발급 수단 목록입니다.
            pg_provider: 빌링키 발급이 일어난 결제대행사 목록입니다.
            version: 포함할 포트원 버전입니다. 미입력 시 모두 검색됩니다.
            customer_name: 발급자의 성명 일부분입니다.
            customer_email: 발급자의 이메일 일부분입니다.
            pg_merchant_id: 결제대행사에서 제공한 상점아이디 (MID) 일부분입니다.

        Returns:
            조건을 만족하는 빌링키의 개수와, 그중 최대 10개 빌링키의 정보를 반환하고, 찾지 못하면 오류를 반환합니다.

        Note:
            UNAUTHORIZED 에러의 경우 MCP 서버의 API_SECRET 환경변수 설정이 잘못되었을 가능성이 있습니다.
            포트원 V2 SDK를 통해서 자동 생성한 빌링키는 `billing-key-{uuid}` 형식이며, 그 외는 V1이거나 이관에 의한 빌링키일 가능성이 있습니다.
            날짜 및 시간 정보 입출력 시에는 반드시 타임존을 명시합니다.
            customer_name, customer_email, pg_merchant_id 중 한 번에 하나만 사용 가능합니다.
        """
        text_search = [
            {"field": key, "value": value}
            for key, value in {
                "CUSTOMER_NAME": customer_name,
                "CUSTOMER_EMAIL": customer_email,
                "PG_MERCHANT_ID": pg_merchant_id,
            }.items()
            if value is not None
        ]

        search_filter = filter_out_none(
            {
                "from": from_time.isoformat("T"),
                "until": until_time.isoformat("T"),
                "timeRangeField": timestamp_type,
                "storeId": store_id,
                "status": status,
                "methods": methods,
                "pgProviders": pg_provider,
                "version": version,
                "textSearch": text_search[0] if text_search else None,
            }
        )
        response = portone_client.get(
            "/billing-keys",
            params={
                "requestBody": json.dumps(
                    {
                        "filter": search_filter,
                        "page": {
                            "number": 0,
                            "size": 10,
                        },
                    }
                ),
            },
        )
        if response.is_error:
            return response.text
        try:
            data = json.loads(response.text)
        except ValueError:
            return "서버로부터 잘못된 응답 수신"
        return [mask_billing_key_info(billing_key) for billing_key in data["items"]]

    return get_billing_keys_by_filter
