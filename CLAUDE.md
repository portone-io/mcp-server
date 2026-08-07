# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# PortOne MCP Server Development Guidelines

## Build & Test Commands

- Setup: `pnpm install`
- Run server: `pnpm dev`
- Run all tests: `pnpm test`
- Run single test: `pnpm test tests/loader.test.ts`
- Lint code: `pnpm lint`
- Format code: `pnpm format`
- Build: `pnpm build`
- Type check: `pnpm typecheck`

## Code Style Guidelines

- Node.js 22+ and TypeScript 5+ required
- Use type annotations for all function parameters and return values
- Follow TypeScript/JavaScript conventions
- Use interfaces and types for data structures
- Organize imports: Node.js built-ins first, then third-party, then local
- Error handling: use descriptive error messages
- Naming: camelCase for functions/variables, PascalCase for classes/interfaces
- Documentation: document classes and functions with JSDoc comments
- Tests: write unit tests using Vitest for critical functions
- Code formatting and linting excludes: `dist/`, `assets/`, and `server/` directories

## Dependencies

Key dependencies include:
- `@modelcontextprotocol/sdk`: MCP server framework
- `@portone/server-sdk`: PortOne SDK for server-side operations
- `graphql` & `graphql-request`: GraphQL client for API communication
- `h3`: HTTP server for OAuth callback handling
- `open`: Cross-platform library for opening URLs in browser
- `gray-matter`: YAML frontmatter parsing
- `js-yaml`: YAML processing
- `zod`: Schema validation
- `ts-pattern`: Pattern matching for TypeScript

## Architecture Overview

This is an MCP (Model Context Protocol) server that provides AI tools for accessing PortOne documentation. Key components:

### Resource Loading System
- `loader/` module handles document parsing and resource loading
- Markdown documents are parsed with YAML frontmatter support
- Schema files (OpenAPI, GraphQL) are loaded from the `assets/docs/schema/` directory
- All resources are loaded at server startup via `load_resources()`

### MCP Tools
Each tool in `tools/` follows a pattern:
- Has an `initialize()` function that returns a FastMCP tool
- Accepts documents/schema objects for data access
- Returns structured responses for AI consumption

Available tools:
- `list_all_docs`: Lists all available documentation
- `read_doc`: Reads specific documentation by path
- `read_doc_metadata`: Gets document metadata
- `regex_search`: Searches documents using regex
- `read_openapi_schema`: Reads OpenAPI specifications
- `read_v2_backend_code`: Fetches backend code examples
- `read_v2_frontend_code`: Fetches frontend code examples
- `list_stores`: Lists available stores (requires OAuth authentication)
- `list_shared_test_channels`: Lists available shared test channels (requires OAuth authentication)
- `get_channels_of_store`: Gets all channels for a specific store (requires OAuth authentication)
- `add_test_channel`: Adds a test channel to a store (requires OAuth authentication)
- `getPaymentsByFilter`: Searches individual payment records with filters — 결제 내역 단건 조회 (requires OAuth authentication)
- `getPaymentSummary`: Aggregates transaction totals, time series (hour/day/month) and average amounts per payment/customer (requires OAuth authentication or `PORTONE_API_SECRET`)
- `getPaymentBreakdown`: Groups payments by method / PG provider / status / card brand / escrow / channel type / platform type
- `getPaymentFailureReasons`: Classifies `failure.reason` + `failure.pgMessage` into coarse categories and aggregates them
- `getPaymentStatusBreakdownByDimension`: Cross-tabulates payment status against a dimension (stacked bar)
- `getReconciliationsByFilter`: Lists per-transaction reconciliation records for a store, including discrepancy reasons (requires OAuth authentication)
- `getSettlementSummaries`: Gets daily settlement summaries for a store (requires OAuth authentication)
- `getSettlementStatistics`: Gets settlement statistics (range totals + daily) for a store (requires OAuth authentication)

### OAuth Authentication System
The server now uses OAuth authentication for accessing PortOne APIs:
- `TokenProvider` class handles OAuth token management and refresh
- Automatically opens a browser window for OAuth consent flow when needed
- Tokens are securely stored and refreshed as needed
- GraphQL client integration for API communication
- No longer requires API_SECRET environment variable for most operations

### Payment Aggregation Tools (결제 내역 다건 조회)
- Raw data comes from REST V2 `GET /payments-by-cursor`, paged to the end via
  `src/tools/request/getPaymentsByCursor.ts`. That endpoint has no server-side filters and
  always ranges over the payment creation timestamp, so all filtering, bucketing and
  grouping happens client-side in `src/tools/utils/paymentAnalytics.ts`.
- `src/tools/utils/apiAuth.ts` resolves the REST auth header: `PORTONE_API_SECRET`
  (`Authorization: PortOne <secret>`) if set, otherwise the console OAuth bearer token.
- `src/tools/utils/paymentCache.ts` caches collected + normalized payments per
  (auth, store, range, limit) for a short TTL so the five tools don't re-page the same window.
- Amounts are only ever summed per currency (`byCurrency` in every output).

### Document Structure
- Documentation is stored in `assets/docs/`
- Contains both developer docs (`opi/`, `sdk/`, etc.) and help center docs (`help/`)
- Documents can have YAML frontmatter with title, description, and targetVersions

### Publishing Process
1. Update version in `package.json`
2. Clean build directory: `rm -rf dist`
3. Install dependencies: `pnpm install`
4. Build package: `pnpm build`
5. Publish to npm: `pnpm publish`

### Document Updates
The `update_docs.py` script updates documentation from external repositories:
- Requires local clones of `developers.portone.io` and `help.portone.io`
- Uses `pnpm docs-for-llms` to generate documentation
- Fetches additional SDK documentation from GitHub
- Environment variables: `DEVELOPERS_PORTONE_IO_PATH`, `HELP_PORTONE_IO_PATH`
