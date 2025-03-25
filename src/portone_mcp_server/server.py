from mcp.server.fastmcp import FastMCP

from .loader import load_resources
from .tools import list_all_docs, read_doc, read_doc_metadata, regex_search


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

    # Run the server
    mcp.run("stdio")
