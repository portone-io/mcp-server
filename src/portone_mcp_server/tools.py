import re
from dataclasses import dataclass

from mcp.server.fastmcp import FastMCP

from .loader import Documents
from .loader.markdown import MarkdownDocument


def initialize_tools(mcp: FastMCP, documents: Documents):
    """
    Initialize the Tools class with a Documents object.

    Args:
        mcp: FastMCP instance
        documents: Documents object containing README.md, markdown docs, and schema files
    """

    @mcp.tool()
    def read_portone_doc(path: str) -> str:
        """포트원 개별 문서의 경로를 통해 해당 포트원 문서의 내용을 가져옵니다.

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
    def read_portone_doc_metadata(path: str) -> str:
        """포트원 개별 문서의 경로를 통해 해당 포트원 문서의 메타 정보를 가져옵니다.

        Args:
            path: 읽을 포트원 문서의 경로

        Returns:
            포트원 문서를 찾으면 해당 메타 정보를 반환하고, 찾지 못하면 오류 메시지를 반환합니다
        """
        # Check in markdown documents - direct dictionary access
        if path in documents.markdown_docs:
            return format_document_metadata(documents.markdown_docs[path])

        # Document not found
        return f"Error: Document with path '{path}' not found."

    @dataclass
    class SearchOccurrence:
        start_index: int
        end_index: int
        context: str

        def __str__(self) -> str:
            return f"```txt start_index={self.start_index} end_index={self.end_index}\n{self.context}\n```\n"

    @mcp.tool()
    def regex_search_portone_docs(query: str, context_size: int) -> str:
        """포트원 문서의 내용 중 파이썬 re 정규표현식 형식의 query가 매칭된 부분을 모두 찾아 반환합니다.
        정규식 기반으로 관련 포트원 문서를 찾고 싶은 경우 이 도구를 사용합니다.

        Args:
            query: Python re 패키지가 지원하는 Regular Expression 형식의 문자열을 입력해야 합니다.
                   절대 query에 공백을 포함시키지 마세요. 여러 키워드를 한 번에 검색하고 싶다면, 공백 대신 | 연산자를 사용하여 구분합니다.
                   단어 글자 사이에 공백이 있는 경우도 매칭하고 싶다면, \\s*를 사용하세요.
            context_size: 검색 결과의 컨텍스트 크기로, 문자 수를 기준으로 합니다.
                          query 매치가 발견된 시작 인덱스를 idx라고 할 때,
                          max(0, idx - context_size)부터 min(contentLength, idx + len(query) + context_size) - 1까지의 내용을 반환합니다.
                          단, 이전 검색결과와 겹치는 컨텍스트는 병합되어 반환됩니다.

        Returns:
            포트원 문서를 찾으면 해당 문서의 경로와 제목, 설명을 비롯한 메타 정보와 함께, query가 매칭된 주변 컨텍스트를 반환합니다.
            찾지 못하면 오류 메시지를 반환합니다.
        """
        occurrence_count = 0
        doc_count = 0

        result = ""

        # Check in markdown documents - direct dictionary access
        for doc in documents.markdown_docs.values():
            content_len = len(doc.content)
            occurrences: list[SearchOccurrence] = []

            # Find all occurrences of query in doc.content using regex
            last_context_end = 0
            for match in re.finditer(query, doc.content):
                idx = match.start()
                match_len = match.end() - match.start()

                # Calculate context boundaries
                context_start = max(0, idx - context_size)
                context_end = min(content_len, idx + match_len + context_size)

                if context_start < last_context_end:  # if overlapped
                    # Merge occurrences
                    new_occurrence = SearchOccurrence(
                        start_index=occurrences[-1].start_index,
                        end_index=context_end,
                        context=doc.content[occurrences[-1].start_index : context_end],
                    )
                    occurrences[-1] = new_occurrence
                else:
                    context = doc.content[context_start:context_end]
                    occurrences.append(SearchOccurrence(start_index=context_start, end_index=context_end, context=context))

                last_context_end = context_end

            if occurrences:
                doc_count += 1
                occurrence_count += len(occurrences)

                result += "---\n"
                result += format_document_metadata(doc)
                result += "---\n"
                for occurrence in occurrences:
                    result += str(occurrence)
                result += "\n"

        # Document not found
        if occurrence_count == 0:
            return f"Document with query '{query}' not found."
        else:
            return f"{doc_count} documents and {occurrence_count} occurrences found with query '{query}'\n\n" + result

    @mcp.tool()
    def list_all_portone_docs() -> str:
        """포트원 문서 가이드와 함께 모든 포트원 개별 문서 각각의 경로와 제목, 설명, 해당 버전 등 메타 정보를 목록으로 가져옵니다.
        포트원 관련 내용에 대해서는 이미 알고 있는 내용이더라도 본 도구를 통해 포트원 문서 목록을 확인하고, read_portone_doc을 통해 관련 내용을 더블체크하는 것을 권장합니다.
        """
        formatted_result = documents.readme + "\n---\n\n"

        # Add all markdown documents
        docs_list = []
        for doc in documents.markdown_docs.values():
            docs_list.append(doc)

        # Format each document
        for i, doc in enumerate(docs_list):
            # Add document path and frontmatter
            formatted_result += format_document_metadata(doc)

            # Add separator between documents (except after the last one)
            if i < len(docs_list) - 1:
                formatted_result += "\n---\n\n"

        return formatted_result


def format_document_metadata(doc: MarkdownDocument) -> str:
    """
    Format a document's metadata including its frontmatter into a string.

    Args:
        doc: a MarkdownDocument object

    Returns:
        Formatted string with document path, length and frontmatter fields
    """
    formatted_result = f"path: {doc.path}\n"

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

        formatted_result += f"contentLength: {len(doc.content)}\n"

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

    return formatted_result
