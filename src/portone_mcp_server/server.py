import importlib.metadata
from os import environ

from httpx import Client
from mcp.server import FastMCP

from .loader import load_resources
from .tools import (
    get_billing_key,
    get_billing_keys_by_filter,
    get_identity_verification,
    get_identity_verifications_by_filter,
    get_payment,
    get_payments_by_filter,
    list_docs,
    read_doc,
    read_doc_metadata,
    read_openapi_schema,
    read_openapi_schema_summary,
    read_v2_backend_code,
    read_v2_frontend_code,
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
    mcp.add_tool(list_docs.initialize(documents))
    mcp.add_tool(read_doc_metadata.initialize(documents))
    mcp.add_tool(read_doc.initialize(documents))
    mcp.add_tool(regex_search.initialize(documents))
    mcp.add_tool(read_openapi_schema_summary.initialize(documents.schema))
    mcp.add_tool(read_openapi_schema.initialize(documents.schema))

    api_base_path = "https://developers.portone.io"
    mcp.add_tool(read_v2_backend_code.initialize(api_base_path))
    mcp.add_tool(read_v2_frontend_code.initialize(api_base_path))

    api_secret = environ.get("API_SECRET")
    if api_secret:
        version = importlib.metadata.version("portone-mcp-server")
        portone_client = Client(
            headers={
                "Authorization": f"PortOne {api_secret}",
                "User-Agent": f"portone-mcp-server {version}",
            },
            base_url="https://api.portone.io",
        )
        mcp.add_tool(get_payment.initialize(portone_client))
        mcp.add_tool(get_billing_key.initialize(portone_client))
        mcp.add_tool(get_identity_verification.initialize(portone_client))
        mcp.add_tool(get_payments_by_filter.initialize(portone_client))
        mcp.add_tool(get_billing_keys_by_filter.initialize(portone_client))
        mcp.add_tool(get_identity_verifications_by_filter.initialize(portone_client))

    # Run the server
    mcp.run("stdio")
