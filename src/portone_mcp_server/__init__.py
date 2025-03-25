# PortOne MCP Server package
import importlib.metadata

from .server import run_server

__version__ = importlib.metadata.version("portone-mcp-server")


def main():
    run_server()
