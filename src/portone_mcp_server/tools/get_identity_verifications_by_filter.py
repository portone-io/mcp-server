import json
from datetime import datetime
from typing import Literal, Optional

from httpx import Client

from portone_mcp_server.tools.utils.mapping import filter_out_none
from portone_mcp_server.tools.utils.portone_rest import PgProvider, mask_identity_verification

type IdentityVerificationTimeStampType = Literal["REQUESTED_AT", "VERIFIED_AT", "FAILED_AT", "STATUS_UPDATED_AT"]
type IdentityVerificationStatus = Literal["READY", "VERIFIED", "FAILED"]
type Carrier = Literal["SKT", "KT", "LGU", "SKT_MVNO", "KT_MVNO", "LGU_MVNO"]


def initialize(portone_client: Client):
    def get_identity_verifications_by_filter(
        from_time: datetime,
        until_time: datetime,
        timestamp_type: Optional[IdentityVerificationTimeStampType],
        store_id: Optional[str],
        status: Optional[list[IdentityVerificationStatus]],
        pg_provider: Optional[list[PgProvider]],
        version: Optional[Literal["V1", "V2"]],
        carrier: Optional[list[Carrier]],
        customer_name: Optional[str],
        pg_merchant_id: Optional[str],
        is_test: Optional[bool],
    ) -> str | list[dict]:
        """포트원 서버에서 주어진 조건을 모두 만족하는 본인인증 정보를 검색합니다.

        Args:
            from_time: 조회할 시작 시각입니다.
            until_time: 조회할 끝 시각입니다.
            timestamp_type: 조회 범위의 기준이 본인인증을 처음 시도한 시각이면 `REQUESTED_AT`,
                본인인증이 완료된 시각이면 `VERIFIED_AT`, 실패한 시각이면 `FAILED_AT`,
                마지막으로 상태가 변경된 시각이면 `STATUS_UPDATED_AT`입니다.
                미입력 시 `STATUS_UPDATED_AT`입니다.
            store_id: 하위 상점을 포함한 특정 상점의 본인인증 건만을 조회할 경우에만 입력합니다.
                `store-id-{uuid}` 형식입니다.
            status: 포함할 본인인증 상태 목록입니다.
            pg_provider: 본인인증이 일어난 결제대행사 목록입니다.
            version: 포함할 포트원 버전입니다. 미입력 시 모두 검색됩니다.
            carrier: 포함할 통신사 목록입니다. MVNO는 알뜰폰을 뜻합니다.
            customer_name: 발급자의 성명 일부분입니다.
            pg_merchant_id: 결제대행사에서 제공한 상점아이디 (MID) 일부분입니다.
            is_test: 테스트 인증 건을 포함할지 여부입니다. 미입력 시 `true`입니다.

        Returns:
            조건을 만족하는 본인인증 건의 개수와, 그중 최대 10개 인증 건의 정보를 반환하고, 찾지 못하면 오류를 반환합니다.

        Note:
            UNAUTHORIZED 에러의 경우 MCP 서버의 API_SECRET 환경변수 설정이 잘못되었을 가능성이 있습니다.
            날짜 및 시간 정보 입출력 시에는 반드시 타임존을 명시합니다.
        """
        search_filter = filter_out_none(
            {
                "from": from_time.isoformat("T"),
                "until": until_time.isoformat("T"),
                "timeRangeField": timestamp_type,
                "storeId": store_id,
                "statuses": status,
                "pgProviders": pg_provider,
                "version": version,
                "carriers": carrier,
                "pgMerchantId": pg_merchant_id,
                "isTest": is_test,
                "customer": filter_out_none(
                    {
                        "name": customer_name,
                    }
                ),
            }
        )
        response = portone_client.get(
            "/identity-verifications",
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
        return [mask_identity_verification(iv) for iv in data["items"]]

    return get_identity_verifications_by_filter
