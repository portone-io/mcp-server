import json
from typing import Optional

from httpx import Client

from portone_mcp_server.tools.utils.mapping import filter_out_none
from portone_mcp_server.tools.utils.portone_rest import mask_billing_key_info


def initialize(portone_client: Client):
    def get_billing_key(billing_key: str, store_id: Optional[str]) -> str | dict:
        """포트원 서버에서 빌링키를 검색합니다.

        Args:
            billing_key: 빌링키 값으로, V2의 경우 일반적으로는 `billing-key-{uuid}` 형식입니다.
            store_id: 하위 상점을 포함한 특정 상점의 인증 건만을 조회할 경우에만 입력합니다.
                `store-id-{uuid}` 형식입니다.

        Returns:
            빌링키를 찾으면 상세 정보를 반환하고, 찾지 못하면 오류를 반환합니다.

        Note:
            UNAUTHORIZED 에러의 경우 MCP 서버의 API_SECRET 환경변수 설정이 잘못되었을 가능성이 있습니다.
            날짜 및 시간 정보 해석에는 타임존에 유의하세요. 포트원에서는 RFC 3339를 사용하며, Z는 Zulu Time을 의미합니다.
        """
        response = portone_client.get(f"/billing-keys/{billing_key}", params=filter_out_none({"storeId": store_id}))
        if response.is_error:
            return response.text
        try:
            data = json.loads(response.text)
        except ValueError:
            return "서버로부터 잘못된 응답 수신"
        return mask_billing_key_info(data)

    return get_billing_key
