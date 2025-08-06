#!/usr/bin/env node

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { GraphQLClient } from "graphql-request";
import packageJson from "../package.json" with { type: "json" };
import { loadResources } from "./loader/index.ts";
import {
  addTestChannel,
  getChannelsOfStore,
  getPaymentsByFilter,
  listDocs,
  listSharedTestChannels,
  listStores,
  readDoc,
  readOpenapiSchema,
  readOpenapiSchemaSummary,
  readV2BackendCode,
  readV2FrontendCode,
  regexSearch,
} from "./tools/index.ts";
import { TokenProvider } from "./tools/utils/key.ts";
import { GRAPHQL_URL } from "./tools/utils/url.ts";
import { USER_AGENT } from "./tools/utils/userAgent.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function runServer() {
  // Load documents
  const assetsPath = join(__dirname, "../assets");
  const resources = await loadResources(assetsPath);
  const documents = resources.documents;

  // Initialize the MCP server
  const mcp = new McpServer(
    {
      name: "portone-mcp-server",
      version: packageJson.version,
    },
    {
      instructions: `${resources.instructions}\n${documents.readme}`,
    },
  );

  // Initialize tools
  mcp.registerTool(listDocs.name, listDocs.config, listDocs.init(documents));
  mcp.registerTool(readDoc.name, readDoc.config, readDoc.init(documents));
  mcp.registerTool(
    regexSearch.name,
    regexSearch.config,
    regexSearch.init(documents),
  );
  mcp.registerTool(
    readOpenapiSchema.name,
    readOpenapiSchema.config,
    readOpenapiSchema.init(documents.schema),
  );
  mcp.registerTool(
    readOpenapiSchemaSummary.name,
    readOpenapiSchemaSummary.config,
    readOpenapiSchemaSummary.init(documents.schema),
  );

  const apiBaseUrl = "https://developers.portone.io";
  mcp.registerTool(
    readV2BackendCode.name,
    readV2BackendCode.config,
    readV2BackendCode.init(apiBaseUrl),
  );
  mcp.registerTool(
    readV2FrontendCode.name,
    readV2FrontendCode.config,
    readV2FrontendCode.init(apiBaseUrl),
  );

  const graphClient = new GraphQLClient(GRAPHQL_URL, {
    headers: { "User-Agent": USER_AGENT },
  });
  const tokenProvider = new TokenProvider();
  tokenProvider.launchRefresher();
  mcp.registerTool(
    listStores.name,
    listStores.config,
    listStores.init(tokenProvider, graphClient),
  );
  mcp.registerTool(
    listSharedTestChannels.name,
    listSharedTestChannels.config,
    listSharedTestChannels.init(tokenProvider),
  );
  mcp.registerTool(
    getChannelsOfStore.name,
    getChannelsOfStore.config,
    getChannelsOfStore.init(tokenProvider),
  );
  mcp.registerTool(
    addTestChannel.name,
    addTestChannel.config,
    addTestChannel.init(tokenProvider, graphClient),
  );
  mcp.registerTool(
    getPaymentsByFilter.name,
    getPaymentsByFilter.config,
    getPaymentsByFilter.init(tokenProvider, graphClient),
  );

  // Run the server
  const transport = new StdioServerTransport();
  await mcp.connect(transport);
}

await runServer().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
