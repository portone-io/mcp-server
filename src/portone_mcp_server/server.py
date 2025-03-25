from mcp.server.fastmcp import FastMCP

from .loader import load_all
from .tools import list_all_docs, read_doc, read_doc_metadata, regex_search


def run_server():
    # Load documents
    documents = load_all()

    # Initialize the MCP server
    mcp = FastMCP(
        "portone-mcp-server",
        instructions=(
            "portone-mcp-server는 포트원의 문서를 검색하고 읽을 수 있는 도구를 제공합니다.\n"
            "포트원 관련 내용에 대해서는 이 도구를 사용하여 확인할 수 있습니다.\n"
            "포트원 관련 내용에 대해서는 이미 알고 있는 내용이더라도 portone-mcp-server가 제공하는 도구들을 통해"
            " 포트원 문서를 읽고 더블체크하는 것을 권장합니다.\n\n"
        )
        + documents.readme,
    )

    # Initialize tools
    mcp.add_tool(list_all_docs.initialize(documents))
    mcp.add_tool(read_doc_metadata.initialize(documents))
    mcp.add_tool(read_doc.initialize(documents))
    mcp.add_tool(regex_search.initialize(documents))

    # Run the server
    mcp.run("stdio")
