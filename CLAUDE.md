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

- Node.js 18+ and TypeScript 5+ required
- Use type annotations for all function parameters and return values
- Follow TypeScript/JavaScript conventions
- Use interfaces and types for data structures
- Organize imports: Node.js built-ins first, then third-party, then local
- Error handling: use descriptive error messages
- Naming: camelCase for functions/variables, PascalCase for classes/interfaces
- Documentation: document classes and functions with JSDoc comments
- Tests: write unit tests using Vitest for critical functions

## Architecture Overview

This is an MCP (Model Context Protocol) server that provides AI tools for accessing PortOne documentation. Key components:

### Resource Loading System
- `loader/` module handles document parsing and resource loading
- Markdown documents are parsed with YAML frontmatter support
- Schema files (OpenAPI, GraphQL) are loaded from the `resources/docs/schema/` directory
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
- `get_payment`: Retrieves payment information (requires API_SECRET)
- `get_payments_by_filter`: Searches payments with filters (requires API_SECRET)
- `get_identity_verification`: Retrieves identity verification information (requires API_SECRET)
- `get_identity_verifications_by_filter`: Searches identity verifications with filters (requires API_SECRET)

### Document Structure
- Documentation is stored in `src/portone_mcp_server/resources/docs/`
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
