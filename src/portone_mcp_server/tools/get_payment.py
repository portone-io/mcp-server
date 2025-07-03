import json
from typing import Optional

from httpx import Client

from portone_mcp_server.tools.utils.mapping import filter_out_none
from portone_mcp_server.tools.utils.portone_rest import mask_payment


def initialize(portone_client: Client):
    def get_payment(payment_id: str, store_id: Optional[str]) -> str | dict:
        """고객사 거래번호로 포트원 서버에서 결제 내역을 검색합니다.
        고객사 거래번호는 포트원 V1에서는 merchant_uid이며, V2에서는 paymentId에 해당합니다.

        Args:
            payment_id: 고객사에서 발급한 거래번호입니다.
            store_id: 하위 상점을 포함한 특정 상점의 결제 건만을 조회할 경우에만 입력합니다.
                `store-id-{uuid}` 형식입니다.

        Returns:
            결제 건을 찾으면 상세 정보를 반환하고, 찾지 못하면 오류를 반환합니다.

        Note:
            UNAUTHORIZED 에러의 경우 MCP 서버의 API_SECRET 환경변수 설정이 잘못되었을 가능성이 있습니다.
            소문자 imp_ 혹은 imps_ 로 시작하는 거래번호는 고객사 거래번호가 아닌 V1 포트원 거래번호(imp_uid)일 가능성이 있습니다.
            날짜 및 시간 정보 해석에는 타임존에 유의하세요. 포트원에서는 RFC 3339를 사용하며, Z는 Zulu Time을 의미합니다.
        """
        response = portone_client.get(f"/payments/{payment_id}", params=filter_out_none({"storeId": store_id}))
        if response.is_error:
            return response.text
        try:
            data = json.loads(response.text)
        except ValueError:
            return "서버로부터 잘못된 응답 수신"
        return mask_payment(data)

    return get_payment
