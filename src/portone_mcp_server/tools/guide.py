from ..loader import Documents


def initialize(documents: Documents):
    def portone_docs_guide() -> str:
        """포트원 문서를 활용하는 방법에 대한 가이드입니다.
        portone-mcp-server의 다른 MCP Tool을 활용하기 전에 반드시 한 번 호출하여 가이드 내용을 확인하세요.
        """

        return documents.readme

    return portone_docs_guide
