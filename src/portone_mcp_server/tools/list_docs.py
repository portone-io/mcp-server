from ..loader import Documents
from .utils.markdown import format_document_metadata


def initialize(documents: Documents):
    def list_portone_docs(
        dev_docs: bool = True,
        help_docs: bool = True,
        tech_blog: bool = False,
        release_notes: bool = False,
    ) -> str:
        """
        포트원 문서 목록을 카테고리별로 필터링하여 조회합니다.
        목록에는 문서 경로, 제목, 설명, 대상 버전 등 축약된 문서 정보가 포함되어 있습니다.

        Args:
            dev_docs: 개발자를 위한 문서 포함 여부 (blog/, release-notes/, help/로 시작하지 않는 모든 문서)
            tech_blog: 기술 블로그 포스트 (blog/) 포함 여부
            release_notes: 개발자센터 릴리즈 노트 (release-notes/) 포함 여부
            help_docs: 개발과 무관하게 서비스 관련 내용을 일반적으로 담는 헬프센터 문서 (help/) 포함 여부

        Returns:
            필터링된 문서 목록 (각 문서의 경로, 길이, 제목, 설명, 대상 버전 등)
        """

        filtered_docs = []

        for path, doc in documents.markdown_docs.items():
            # Categorize documents based on their path
            if path.startswith("blog/") and tech_blog:
                filtered_docs.append(doc)
            elif path.startswith("release-notes/") and release_notes:
                filtered_docs.append(doc)
            elif path.startswith("help/") and help_docs:
                filtered_docs.append(doc)
            elif dev_docs and not any(path.startswith(prefix) for prefix in ["blog/", "release-notes/", "help/"]):
                # All other documents are dev docs
                filtered_docs.append(doc)

        if not filtered_docs:
            return "No documents found with the specified filters."

        formatted_result = "---\n".join([format_document_metadata(doc) for doc in filtered_docs])

        return formatted_result

    return list_portone_docs
