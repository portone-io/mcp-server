# PortOne MCP Server

포트원을 사용하는 개발자를 위한 MCP(Model Context Protocol) 서버입니다. 이 서버는 PortOne 개발자센터 문서 내용을 LLM(Large Language Model)에 제공하여 관련 정보를 쉽고 정확하게 조회할 수 있도록 합니다.

## MCP 서버 등록하기

1. [uv](https://docs.astral.sh/uv/getting-started/installation/) 및 Python 3.12 이상이 설치되어 있어야 합니다.
1. Claude Desktop -> Settings -> Developer -> Edit Config를 통해 아래 내용을 추가합니다.

   ```json
   "mcpServers": {

     // 기존 설정

     "portone-mcp-server": {
       "command": "uvx",
       "args": [
         "portone-mcp-server"
       ]
     }
   }
   ```

1. Claude Desktop을 재시작해 portone-mcp-server 및 해당 서버가 제공하는 도구들이 잘 등록되었는지 확인합니다.

1. Cursor, Windsurf 등 MCP를 지원하는 IDE에 대해서도 동일한 방식으로 MCP 서버를 등록할 수 있습니다.

## 개발하기

### 요구사항

- Python 3.12 이상
- [uv (Python 패키지 관리 도구)](https://docs.astral.sh/uv/getting-started/installation/)

1. 저장소를 클론한 후 필요한 패키지 설치하기

   ```bash
   uv venv
   uv sync --extra dev
   ```

1. MCP 서버 실행

   ```bash
   uv run portone-mcp-server
   ```

1. 테스트

   ```bash
   uv run pytest
   ```

1. 코드 린팅

   ```bash
   uv run ruff check .
   uv run ruff format .
   ```

## 라이선스

[Apache License 2.0](LICENSE)
