from ..loader import Documents


def initialize(documents: Documents):
    def read_portone_doc(path: str) -> str:
        """포트원 개별 문서의 경로를 통해 해당 포트원 문서의 내용을 가져옵니다.

        Args:
            path: 읽을 포트원 문서의 경로

        Returns:
            포트원 문서를 찾으면 해당 내용을 반환하고, 찾지 못하면 오류 메시지를 반환합니다

        Note:
            먼저 list_all_portone_docs를 통해 포트원 문서 목록을 확인하고,
            그 중 원하는 문서의 path를 read_portone_doc에 전달하여 내용을 확인할 수 있습니다.
        """
        # Check in markdown documents - direct dictionary access
        if path in documents.markdown_docs:
            return documents.markdown_docs[path].content

        # Document not found
        return f"Error: Document with path '{path}' not found."

    return read_portone_doc
