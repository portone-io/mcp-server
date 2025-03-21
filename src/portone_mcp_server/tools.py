from mcp.server.fastmcp import FastMCP
from .loader import Documents


def initialize_tools(mcp: FastMCP, documents: Documents):
    """
    Initialize the Tools class with a Documents object.

    Args:
        mcp: FastMCP instance
        documents: Documents object containing README.md, markdown docs, and schema files
    """

    @mcp.tool()
    def read_portone_doc(path: str) -> str:
        """포트원 문서 경로를 통해 해당 포트원 문서의 내용을 가져옵니다.

        Args:
            path: 읽을 포트원 문서의 경로

        Returns:
            포트원 문서를 찾으면 해당 내용을 반환하고, 찾지 못하면 오류 메시지를 반환합니다

        Note:
            먼저 list_all_portone_docs를 통해 포트원 문서 목록을 확인하고, 그 중 원하는 문서의 path를 read_portone_doc에 전달하여 내용을 확인할 수 있습니다.
            포트원 관련 내용에 대해서는 이미 알고 있는 내용이더라도 본 도구를 통해 포트원 문서를 읽고 더블체크하는 것을 권장합니다.
        """
        # Check in markdown documents - direct dictionary access
        if path in documents.markdown_docs:
            return documents.markdown_docs[path].content

        # Document not found
        return f"Error: Document with path '{path}' not found."

    @mcp.tool()
    def list_all_portone_docs() -> str:
        """모든 포트원 문서 각각의 경로와 메타 정보를 목록으로 가져옵니다.

        Returns:
            포트원 문서 경로와 메타 정보를 포함한 형식화된 문자열

        Note:
            포트원 관련 내용에 대해서는 이미 알고 있는 내용이더라도 본 도구를 통해 포트원 문서 목록을 확인하고, read_portone_doc을 통해 내용을 더블체크하는 것을 권장합니다.
        """
        formatted_result = ""
        docs_list = []

        # Add all markdown documents
        for doc in documents.markdown_docs.values():
            docs_list.append(doc)

        # Format each document
        for i, doc in enumerate(docs_list):
            # Add document path
            formatted_result += f"path: {doc.path}\n"

            # Add frontmatter fields if they exist
            if doc.frontmatter:
                # Handle title
                if doc.frontmatter.title is not None:
                    formatted_result += f"title: {doc.frontmatter.title}\n"

                # Handle description
                if doc.frontmatter.description is not None:
                    formatted_result += f"description: {doc.frontmatter.description}\n"

                # Handle targetVersions
                if doc.frontmatter.targetVersions is not None:
                    formatted_result += f"targetVersions: {doc.frontmatter.targetVersions}\n"

                # Handle releasedAt
                if doc.frontmatter.releasedAt is not None:
                    formatted_result += f"releasedAt: {doc.frontmatter.releasedAt.isoformat()}\n"

                # Handle writtenAt
                if doc.frontmatter.writtenAt is not None:
                    formatted_result += f"writtenAt: {doc.frontmatter.writtenAt.isoformat()}\n"

                # Handle author
                if doc.frontmatter.author is not None:
                    formatted_result += f"author: {doc.frontmatter.author}\n"

                # Handle date
                if doc.frontmatter.date is not None:
                    formatted_result += f"date: {doc.frontmatter.date.isoformat()}\n"

                # Handle tags
                if doc.frontmatter.tags is not None:
                    formatted_result += f"tags: {doc.frontmatter.tags}\n"

                # Handle additional fields
                for key, value in doc.frontmatter.additional_fields.items():
                    if value is not None:
                        formatted_result += f"{key}: {value}\n"

            # Add separator between documents (except after the last one)
            if i < len(docs_list) - 1:
                formatted_result += "\n---\n\n"

        return formatted_result
