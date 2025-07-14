#!/usr/bin/env node

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import packageJson from "../package.json" with { type: "json" };
import { loadResources } from "./loader/index.js";
import {
  getIdentityVerification,
  getIdentityVerificationsByFilter,
  getPayment,
  getPaymentsByFilter,
  listDocs,
  readDoc,
  readDocMetadata,
  readOpenapiSchema,
  readOpenapiSchemaSummary,
  readV2BackendCode,
  readV2FrontendCode,
  regexSearch,
} from "./tools/index.js";

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
    readDocMetadata.name,
    readDocMetadata.config,
    readDocMetadata.init(documents),
  );
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

  const apiSecret = process.env.API_SECRET;
  if (apiSecret) {
    const httpClient = {
      get: async (url: string) => {
        return fetch(`https://api.portone.io${url}`, {
          headers: {
            Authorization: `PortOne ${apiSecret}`,
            "User-Agent": `portone-mcp-server ${packageJson.version}`,
          },
        });
      },
    };

    mcp.registerTool(
      getPayment.name,
      getPayment.config,
      getPayment.init(httpClient),
    );
    mcp.registerTool(
      getPaymentsByFilter.name,
      getPaymentsByFilter.config,
      getPaymentsByFilter.init(httpClient),
    );
    mcp.registerTool(
      getIdentityVerification.name,
      getIdentityVerification.config,
      getIdentityVerification.init(httpClient),
    );
    mcp.registerTool(
      getIdentityVerificationsByFilter.name,
      getIdentityVerificationsByFilter.config,
      getIdentityVerificationsByFilter.init(httpClient),
    );
  }

  // Run the server
  const transport = new StdioServerTransport();
  await mcp.connect(transport);
}

await runServer().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
