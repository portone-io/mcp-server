from mcp.server.fastmcp import FastMCP
from .loader import load_all
from .tools import initialize_tools


def main():
    # Load documents
    documents = load_all()

    # Initialize the MCP server
    mcp = FastMCP(
        "portone-mcp-server",
        description="포트원의 문서와 스키마 파일을 쉽게 검색하고 읽을 수 있는 도구를 AI 에이전트에게 제공합니다. 포트원 관련 내용에 대해서는 이 도구를 사용하여 확인할 수 있습니다.",
    )

    # Initialize tools
    initialize_tools(mcp, documents)

    # Run the server
    mcp.run("stdio")


if __name__ == "__main__":
    main()
