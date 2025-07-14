import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents } from "../types.js";
import { calculateBm25Scores } from "./utils/bm25.js";
import { formatDocumentMetadata } from "./utils/markdown.js";

interface SearchOccurrence {
  startIndex: number;
  endIndex: number;
  context: string;
}

export const name = "regex_search_portone_docs";

export const config = {
  title: "포트원 문서 정규표현식 검색",
  description: `포트원 문서의 내용 중 Node.js RegExp 형식의 query가 매칭된 부분을 모두 찾아 반환합니다.
정규식 기반으로 관련 포트원 문서를 찾고 싶은 경우 이 도구를 사용하며, 메타 정보와 문서 내용 모두 검색합니다.`,
  inputSchema: {
    query: z.string().describe(`Node.js RegExp 형식의 문자열을 입력해야 하며, 영어 알파벳 대소문자는 구분 없이 매칭됩니다.
절대 query에 공백을 포함시키지 마세요. 여러 키워드를 한 번에 검색하고 싶다면, 공백 대신 | 연산자를 사용하여 구분합니다.
단어 글자 사이에 공백이 있는 경우도 매칭하고 싶다면, 공백 대신 \\s*를 사용하세요.`),
    context_size: z.number().describe(`검색 결과의 컨텍스트 크기로, 문자 수를 기준으로 합니다.
query 매치가 발견된 시작 인덱스를 idx라고 할 때,
max(0, idx - context_size)부터 min(contentLength, idx + len(query) + context_size) - 1까지의 내용을 반환합니다.
단, 이전 검색결과와 겹치는 컨텍스트는 병합되어 반환됩니다.`),
    limit: z.number().default(50000).describe(`반환할 최대 문자열 길이입니다. 기본값은 50000입니다.
출력이 이 길이를 초과하면 잘리고 truncation 메시지가 추가됩니다.`),
    start_index: z.number().default(0).describe(`결과 문자열의 페이지네이션을 위한 시작 인덱스입니다. 기본값은 0입니다.
전체 결과 문자열에서 start_index 위치부터 limit 길이만큼의 부분 문자열을 반환합니다.
동일한 query, context_size로 다른 start_index를 사용해 다음 결과를 얻을 수 있습니다.`),
  },
  outputSchema: {
    result: z.string().describe(`포트원 문서를 찾으면 해당 문서의 경로와 길이, 제목, 설명, 대상 버전과 함께, query가 매칭된 주변 컨텍스트를 반환합니다.`
  }
};

function formatOccurrence(occurrence: SearchOccurrence): string {
  return `\`\`\`txt startIndex=${occurrence.startIndex} endIndex=${occurrence.endIndex}\n${occurrence.context}\n\`\`\`\n`;
}

export function init(
  documents: Documents,
): ToolCallback<typeof config.inputSchema> {
  return ({ query, context_size, start_index, limit }) => {
    const { markdownDocs } = documents;
    let occurrenceCount = 0;
    let docCount = 0;
    let result = "";

    try {
      // First, get documents sorted by BM25 score
      const bm25Scores = calculateBm25Scores(query, markdownDocs);

      // Process documents in BM25 score order
      for (const [path, _score] of bm25Scores) {
        const doc = markdownDocs[path];
        const contentLen = doc.content.length;
        const occurrences: SearchOccurrence[] = [];
        let lastContextEnd = 0;

        // Check frontmatter
        if (doc.frontmatter && JSON.stringify(doc.frontmatter).match(new RegExp(query, "i"))) {
          lastContextEnd = Math.min(contentLen, context_size);
          occurrences.push({
            startIndex: 0,
            endIndex: lastContextEnd,
            context: doc.content.substring(0, lastContextEnd)
          });
        }

        // Find all occurrences of query in doc.content using regex
        const regex = new RegExp(query, "gi");
        let match: RegExpExecArray | null;
        while ((match = regex.exec(doc.content)) !== null) {
          const idx = match.index;
          const matchLen = match[0].length;

          // Calculate context boundaries
          const contextStart = Math.max(0, idx - context_size);
          const contextEnd = Math.min(contentLen, idx + matchLen + context_size);

          if (contextStart < lastContextEnd) { // if overlapped
            // Merge occurrences
            const newOccurrence = {
              startIndex: occurrences[occurrences.length - 1].startIndex,
              endIndex: contextEnd,
              context: doc.content.substring(occurrences[occurrences.length - 1].startIndex, contextEnd)
            };
            occurrences[occurrences.length - 1] = newOccurrence;
          } else {
            const context = doc.content.substring(contextStart, contextEnd);
            occurrences.push({
              startIndex: contextStart,
              endIndex: contextEnd,
              context: context
            });
          }

          lastContextEnd = contextEnd;
        }

        if (occurrences.length > 0) {
          docCount++;
          occurrenceCount += occurrences.length;

          result += "---\n";
          result += formatDocumentMetadata(doc);
          result += "---\n";
          for (const occurrence of occurrences) {
            result += formatOccurrence(occurrence);
          }
          result += "\n";
        }
      }

      // Document not found
      if (occurrenceCount === 0) {
        return {
          content: [
            {
              type: "text",
              text: `Document with query '${query}' not found.`,
            },
          ],
        };
      } else {
        let fullResult = `${docCount} documents and ${occurrenceCount} occurrences found with query '${query}'\n\n${result}`;

        // Apply pagination by slicing from start_index
        if (start_index > 0) {
          if (start_index >= fullResult.length) {
            return {
              content: [
                {
                  type: "text",
                  text: `No more results. Total result length: ${fullResult.length}`,
                },
              ],
            };
          }
          fullResult = fullResult.substring(start_index);
        }

        // Truncate if exceeds limit
        if (fullResult.length > limit) {
          const truncationMsg = `\n\n... (output truncated due to length limit. Use start_index=${start_index + limit} for next page)`;
          return {
            content: [
              {
                type: "text",
                text: fullResult.substring(0, limit) + truncationMsg,
              },
            ],
          };
        }

        return {
          content: [
            {
              type: "text",
              text: fullResult,
            },
          ],
        };
      }
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error: Invalid regular expression pattern: ${error}`,
          },
        ],
      };
    }
  };
}
