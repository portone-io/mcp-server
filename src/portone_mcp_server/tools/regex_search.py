import re
from dataclasses import dataclass

from ..loader import Documents
from .utils.markdown import format_document_metadata


@dataclass
class SearchOccurrence:
    start_index: int
    end_index: int
    context: str

    def __str__(self) -> str:
        return f"```txt start_index={self.start_index} end_index={self.end_index}\n{self.context}\n```\n"


def initialize(documents: Documents):
    def regex_search_portone_docs(query: str, context_size: int) -> str:
        """포트원 문서의 내용 중 파이썬 re 정규표현식 형식의 query가 매칭된 부분을 모두 찾아 반환합니다.
        정규식 기반으로 관련 포트원 문서를 찾고 싶은 경우 이 도구를 사용합니다.

        Args:
            query: Python re 패키지가 지원하는 Regular Expression 형식의 문자열을 입력해야 하며, 영어 알파벳 대소문자는 구분 없이 매칭됩니다.
                   절대 query에 공백을 포함시키지 마세요. 여러 키워드를 한 번에 검색하고 싶다면, 공백 대신 | 연산자를 사용하여 구분합니다.
                   단어 글자 사이에 공백이 있는 경우도 매칭하고 싶다면, 공백 대신 \\s*를 사용하세요.
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
            for match in re.finditer(query, doc.content, re.IGNORECASE):
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

    return regex_search_portone_docs
