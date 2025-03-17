from mcp.server.fastmcp import FastMCP


def main():
    print("Hello from portone-mcp-server!")

    mcp = FastMCP("portone-mcp-server")

    mcp.run("stdio")


if __name__ == "__main__":
    main()
