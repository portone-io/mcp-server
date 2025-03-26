from typing import Any, Dict

import requests


def initialize(api_base_path: str):
    def read_portone_v2_payment_frontend_code(
        framework: str | None = None,
        pg: str | None = None,
        pay_method: str | None = None,
        smart_routing: bool | None = None,
    ) -> str:
        """
        지정된 매개변수에 따라 포트원 V2 프론트엔드 코드 예제를 가져옵니다.
        포트원 V2에 관련해 어떤 상황이든 프로그래밍 언어로 코드를 작성해야 한다면, 예외 없이 가장 먼저 이 도구를 호출해 예시 코드를 참고한 후 사용자를 도우세요.
        framework를 제외한 모든 Args는 선택사항이며, 특정되지 않은 경우 비워두세요.

        Args:
            framework: 사용할 프레임워크. 일치하지 않더라도 현재 맥락에서 가장 유사한 프레임워크를 명시합니다. 옵션: html, react
            pg: 사용할 결제 게이트웨이. 옵션: toss, nice, smartro, kpn, inicis, ksnet, kcp, kakao,
                naver, tosspay, hyphen, eximbay
            pay_method: 사용할 결제 방법. 옵션: card, virtualAccount, easyPay, transfer,
                mobile, giftCertificate
            smart_routing: 스마트 라우팅 사용 여부. 옵션: true 또는 false

        Returns:
            프론트엔드 코드 예제를 마크다운 형식으로 반환하거나, 요청이 실패한 경우 오류 메시지를 반환합니다.
        """
        # Construct the API endpoint URL
        url = f"{api_base_path}/opi/ko/quick-guide/payment/frontend-code"

        # Prepare query parameters, excluding None values
        params: Dict[str, Any] = {}
        if framework is not None:
            params["framework"] = framework
        if pg is not None:
            params["pg"] = pg
        if pay_method is not None:
            params["payMethod"] = pay_method
        if smart_routing is not None:
            params["smartRouting"] = smart_routing

        try:
            # Make the GET request to the API
            response = requests.get(url, params=params)

            # Check if the request was successful
            if response.status_code == 200:
                return response.text
            else:
                return f"Error: request failed with status code {response.status_code}.\n{response.text}"

        except Exception as e:
            return f"Error: Failed to fetch frontend code.\n{str(e)}"

    return read_portone_v2_payment_frontend_code
