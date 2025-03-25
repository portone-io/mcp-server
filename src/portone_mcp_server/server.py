from mcp.server.fastmcp import FastMCP

from .loader import load_all
from .tools import guide, list_all_docs, read_doc, read_doc_metadata, regex_search


def run_server():
    # Load documents
    documents = load_all()

    # Initialize the MCP server
    mcp = FastMCP(
        "portone-mcp-server",
        instructions=(
            "포트원의 문서와 스키마 파일을 쉽게 검색하고 읽을 수 있는 도구를 AI 에이전트에게 제공합니다."
            "포트원 관련 내용에 대해서는 이 도구를 사용하여 확인할 수 있습니다."
        ),
    )

    # Initialize tools
    mcp.add_tool(guide.initialize(documents))
    mcp.add_tool(list_all_docs.initialize(documents))
    mcp.add_tool(read_doc_metadata.initialize(documents))
    mcp.add_tool(read_doc.initialize(documents))
    mcp.add_tool(regex_search.initialize(documents))

    # Run the server
    mcp.run("stdio")
