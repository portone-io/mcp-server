import re
from dataclasses import dataclass

from ..loader import Documents
from .utils.bm25 import calculate_bm25_scores
from .utils.markdown import format_document_metadata


@dataclass
class SearchOccurrence:
    start_index: int
    end_index: int
    context: str

    def __str__(self) -> str:
        return f"```txt startIndex={self.start_index} endIndex={self.end_index}\n{self.context}\n```\n"


def initialize(documents: Documents):
    def regex_search_portone_docs(query: str, context_size: int, limit: int = 50000, start_index: int = 0) -> str:
        """포트원 문서의 내용 중 파이썬 re 정규표현식 형식의 query가 매칭된 부분을 모두 찾아 반환합니다.
        정규식 기반으로 관련 포트원 문서를 찾고 싶은 경우 이 도구를 사용하며, 메타 정보와 문서 내용 모두 검색합니다.

        Args:
            query: Python re 패키지가 지원하는 Regular Expression 형식의 문자열을 입력해야 하며, 영어 알파벳 대소문자는 구분 없이 매칭됩니다.
                   절대 query에 공백을 포함시키지 마세요. 여러 키워드를 한 번에 검색하고 싶다면, 공백 대신 | 연산자를 사용하여 구분합니다.
                   단어 글자 사이에 공백이 있는 경우도 매칭하고 싶다면, 공백 대신 \\s*를 사용하세요.
            context_size: 검색 결과의 컨텍스트 크기로, 문자 수를 기준으로 합니다.
                          query 매치가 발견된 시작 인덱스를 idx라고 할 때,
                          max(0, idx - context_size)부터 min(contentLength, idx + len(query) + context_size) - 1까지의 내용을 반환합니다.
                          단, 이전 검색결과와 겹치는 컨텍스트는 병합되어 반환됩니다.
            limit: 반환할 최대 문자열 길이입니다. 기본값은 50000입니다.
                   출력이 이 길이를 초과하면 잘리고 truncation 메시지가 추가됩니다.
            start_index: 결과 문자열의 페이지네이션을 위한 시작 인덱스입니다. 기본값은 0입니다.
                         전체 결과 문자열에서 start_index 위치부터 limit 길이만큼의 부분 문자열을 반환합니다.
                         동일한 query, context_size로 다른 start_index를 사용해 다음 결과를 얻을 수 있습니다.

        Returns:
            포트원 문서를 찾으면 해당 문서의 경로와 길이, 제목, 설명, 대상 버전과 함께, query가 매칭된 주변 컨텍스트를 반환합니다.
            찾지 못하면 오류 메시지를 반환합니다.
        """
        occurrence_count = 0
        doc_count = 0

        result = ""

        # First, get documents sorted by BM25 score
        bm25_scores = calculate_bm25_scores(query, documents.markdown_docs)

        # Process documents in BM25 score order
        for path, _ in bm25_scores:
            doc = documents.markdown_docs[path]
            content_len = len(doc.content)
            occurrences: list[SearchOccurrence] = []

            last_context_end = 0

            # Check frontmatter
            if doc.frontmatter and doc.frontmatter.search(query):
                last_context_end = min(content_len, context_size)
                occurrences.append(SearchOccurrence(start_index=0, end_index=last_context_end, context=doc.content[:last_context_end]))

            # Find all occurrences of query in doc.content using regex
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
            full_result = f"{doc_count} documents and {occurrence_count} occurrences found with query '{query}'\n\n" + result

            # Apply pagination by slicing from start_index
            if start_index > 0:
                if start_index >= len(full_result):
                    return f"No more results. Total result length: {len(full_result)}"
                full_result = full_result[start_index:]

            # Truncate if exceeds limit
            if len(full_result) > limit:
                truncation_msg = f"\n\n... (output truncated due to length limit. Use start_index={start_index + limit} for next page)"
                return full_result[:limit] + truncation_msg

            return full_result

    return regex_search_portone_docs
