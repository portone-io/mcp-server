from ..loader import Documents
from .utils.markdown import format_document_metadata


def initialize(documents: Documents):
    def read_portone_doc_metadata(path: str) -> str:
        """포트원 개별 문서의 경로를 통해 해당 포트원 문서의 제목, 설명, 대상 버전 등 메타 정보만 가져옵니다.

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

    return read_portone_doc_metadata
