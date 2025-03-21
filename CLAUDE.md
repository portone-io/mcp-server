# PortOne MCP Server Development Guidelines

## Build & Test Commands

- Setup: `uv venv && uv sync --extra dev`
- Run server: `uv run portone-mcp-server`
- Run all tests: `uv run pytest`
- Run single test: `uv run pytest tests/test_loader.py::TestParseMarkdownContent::test_parse_markdown_without_frontmatter -v`
- Lint code: `uv run ruff check .`
- Format code: `uv run ruff format .`

## Code Style Guidelines

- Python 3.12+ required
- Use type hints for all function parameters and return values
- Follow PEP 8 conventions
- Use dataclasses for data containers
- Organize imports: standard library first, then third-party, then local
- Error handling: use descriptive exception messages
- Naming: snake_case for functions/variables, PascalCase for classes
- Documentation: document classes and functions with docstrings
- Tests: write unit tests for critical functions

