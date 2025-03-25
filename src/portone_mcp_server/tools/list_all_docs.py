from ..loader import Documents
from .utils import format_document_metadata


def initialize(documents: Documents):
    def list_all_portone_docs() -> str:
        """모든 포트원 개별 문서 각각의 경로와 제목, 설명, 해당 버전 등 메타 정보를 목록으로 가져옵니다.
        포트원 관련 내용에 대해서는 이미 알고 있는 내용이더라도 본 도구를 통해 포트원 문서 목록을 확인하고,
        read_portone_doc을 통해 관련 내용을 더블체크하는 것을 권장합니다.
        """

        formatted_result = "---\n".join([format_document_metadata(doc) for doc in documents.markdown_docs.values()])

        return formatted_result

    return list_all_portone_docs
