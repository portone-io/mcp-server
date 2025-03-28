from mcp.server.fastmcp import FastMCP

from .loader import load_resources
from .tools import (
    list_all_docs,
    read_doc,
    read_doc_metadata,
    read_openapi_schema,
    read_openapi_schema_summary,
    read_v2_payment_backend_code,
    read_v2_payment_frontend_code,
    regex_search,
)


def run_server():
    # Load documents
    resources = load_resources()
    documents = resources.documents

    # Initialize the MCP server
    mcp = FastMCP(
        "portone-mcp-server",
        instructions=resources.instructions + "\n" + documents.readme,
    )

    # Initialize tools
    mcp.add_tool(list_all_docs.initialize(documents))
    mcp.add_tool(read_doc_metadata.initialize(documents))
    mcp.add_tool(read_doc.initialize(documents))
    mcp.add_tool(regex_search.initialize(documents))
    mcp.add_tool(read_openapi_schema_summary.initialize(documents.schema))
    mcp.add_tool(read_openapi_schema.initialize(documents.schema))

    api_base_path = "https://developers.portone.io"
    mcp.add_tool(read_v2_payment_backend_code.initialize(api_base_path))
    mcp.add_tool(read_v2_payment_frontend_code.initialize(api_base_path))

    # Run the server
    mcp.run("stdio")
