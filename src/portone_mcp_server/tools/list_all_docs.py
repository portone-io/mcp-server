from ..loader import Documents
from .utils.markdown import format_document_metadata


def initialize(documents: Documents):
    def list_all_portone_docs() -> str:
        """모든 포트원 개별 문서 각각의 경로와 제목, 설명, 해당 버전 등 메타 정보를 목록으로 가져옵니다."""

        formatted_result = "---\n".join([format_document_metadata(doc) for doc in documents.markdown_docs.values()])

        return formatted_result

    return list_all_portone_docs
