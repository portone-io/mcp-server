#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
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

export async function runServer() {
  // Load documents
  const resources = await loadResources();
  const documents = resources.documents;

  // Initialize the MCP server
  const server = new Server(
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

  // Register tools
  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
      listDocs.getTool(),
      readDocMetadata.getTool(),
      readDoc.getTool(),
      regexSearch.getTool(),
      readOpenapiSchemaSummary.getTool(documents.schema),
      readOpenapiSchema.getTool(documents.schema),
      readV2BackendCode.getTool(apiBaseUrl),
      readV2FrontendCode.getTool(apiBaseUrl),
      ...(apiSecret
        ? [
            getPayment.getTool(apiSecret),
            getIdentityVerification.getTool(apiSecret),
            getPaymentsByFilter.getTool(apiSecret),
            getIdentityVerificationsByFilter.getTool(apiSecret),
          ]
        : []),
    ],
  }));

  // Handle tool calls
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    const toolHandlers: Record<string, (args: any) => Promise<any>> = {
      list_portone_docs: () => listDocs.handler(documents, args),
      read_doc_metadata: () => readDocMetadata.handler(documents, args),
      read_doc: () => readDoc.handler(documents, args),
      regex_search: () => regexSearch.handler(documents, args),
      read_openapi_schema_summary: () =>
        readOpenapiSchemaSummary.handler(documents.schema, args),
      read_openapi_schema: () =>
        readOpenapiSchema.handler(documents.schema, args),
      read_v2_backend_code: () => readV2BackendCode.handler(apiBaseUrl, args),
      read_v2_frontend_code: () => readV2FrontendCode.handler(apiBaseUrl, args),
      ...(apiSecret
        ? {
            get_payment: () => getPayment.handler(apiSecret, args),
            get_identity_verification: () =>
              getIdentityVerification.handler(apiSecret, args),
            get_payments_by_filter: () =>
              getPaymentsByFilter.handler(apiSecret, args),
            get_identity_verifications_by_filter: () =>
              getIdentityVerificationsByFilter.handler(apiSecret, args),
          }
        : {}),
    };

    const handler = toolHandlers[name];
    if (!handler) {
      throw new Error(`Unknown tool: ${name}`);
    }

    return {
      tools: [
        {
          name: "test",
        },
      ],
    };

    const result = await handler(args);
    return {
      content: [
        {
          type: "text",
          text:
            typeof result === "string"
              ? result
              : JSON.stringify(result, null, 2),
        },
      ],
    };
  });

  // Run the server
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

// Main entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  await runServer().catch((error) => {
    console.error("Server error:", error);
    process.exit(1);
  });
}
