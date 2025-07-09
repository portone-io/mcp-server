#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { loadResources } from "./loader/index.js";
import { listDocs } from "./tools/index.js";

export async function runServer() {
  // Load documents
  const resources = await loadResources();
  const documents = resources.documents;

  // Initialize the MCP server
  const mcp = new McpServer(
    {
      name: "portone-mcp-server",
      version: "0.12.1",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  // Initialize tools
  const apiBaseUrl = "https://developers.portone.io";
  const apiSecret = process.env.API_SECRET;

  mcp.registerTool(listDocs.name, listDocs.config, listDocs.init(documents));

  // Run the server
  const transport = new StdioServerTransport();
  await mcp.connect(transport);
}

// Main entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  await runServer().catch((error) => {
    console.error("Server error:", error);
    process.exit(1);
  });
}
