import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents } from "../types.ts";
import { calculateBm25Scores } from "./utils/bm25.ts";
import { formatDocumentMetadata } from "./utils/markdown.ts";

interface SearchOccurrence {
  startIndex: number;
  endIndex: number;
  context: string;
}

export const name = "regexSearchPortoneDocs";

export const config = {
  title: "포트원 문서 정규표현식 검색",
  description: `특정 경로 하위의 포트원 문서의 내용 중 Node.js RegExp 형식의 query가 매칭된 부분을 모두 찾아 반환합니다.
정규식 기반으로 관련 포트원 문서를 찾고 싶은 경우 이 도구를 사용하며, 메타 정보와 문서 내용 모두 검색합니다.`,
  inputSchema: {
    paths: z
      .string()
      .array()
      .optional()
      .describe(
        "설정 시 이 경로를 접두사로 가지는 문서에서만 검색을 수행합니다. 예를 들어 OPI 문서의 경우 opi/를 입력합니다.",
      ),
    query: z
      .string()
      .describe(`Node.js RegExp 형식의 문자열을 입력해야 하며, 영어 알파벳 대소문자는 구분 없이 매칭됩니다.
절대 query에 공백을 포함시키지 마세요. 여러 키워드를 한 번에 검색하고 싶다면, 공백 대신 | 연산자를 사용하여 구분합니다.
단어 글자 사이에 공백이 있는 경우도 매칭하고 싶다면, 공백 대신 \\s*를 사용하세요.`),
    contextSize: z
      .number()
      .default(0)
      .describe(`0보다 큰 값을 설정할 경우, 검색 결과의 컨텍스트 크기로, 문자 수를 기준으로 합니다. 0 또는 50 정도를 추천합니다.
query 매치가 발견된 시작 인덱스를 idx라고 할 때,
max(0, idx - contextSize)부터 min(contentLength, idx + len(query) + contextSize) - 1까지의 내용을 반환합니다.
단, 이전 검색결과와 겹치는 컨텍스트는 병합되어 반환됩니다.`),
    limit: z
      .number()
      .default(1000)
      .describe(
        `반환할 최대 문자열 길이입니다. 출력이 이 길이를 초과하면 잘리고 truncation 메시지가 추가됩니다.`,
      ),
    page: z
      .number()
      .default(0)
      .describe(
        `결과 문자열의 페이지네이션을 위한 시작 인덱스입니다. 한 페이지의 글자 수는 limit 입니다.`,
      ),
    showMetadata: z
      .boolean()
      .default(false)
      .describe(
        "true이면 문서의 메타데이터(제목, 설명, 대상 버전)을 결과에 포함합니다.",
      ),
  },
  outputSchema: {
    result: z
      .string()
      .describe(
        `포트원 문서를 찾으면 해당 문서의 경로와 길이, 메타데이터, query가 매칭된 주변 컨텍스트를 반환합니다.`,
      ),
  },
};

function formatOccurrence(occurrence: SearchOccurrence): string {
  if (occurrence.context.length === 0)
    return `\`\`\`txt startIndex=${occurrence.startIndex} endIndex=${occurrence.endIndex}\`\`\`\n`;
  return `\`\`\`txt startIndex=${occurrence.startIndex} endIndex=${occurrence.endIndex}\n${occurrence.context}\n\`\`\`\n`;
}

export function init(
  documents: Documents,
): ToolCallback<typeof config.inputSchema> {
  return ({ paths, query, contextSize, page, limit, showMetadata }) => {
    const { markdownDocs } = documents;
    let occurrenceCount = 0;
    let docCount = 0;
    let result = "";

    const filteredDocs =
      paths == null
        ? markdownDocs
        : Object.fromEntries(
            Object.entries(markdownDocs).filter(([path]) =>
              paths.some((searchPath) => path.startsWith(searchPath)),
            ),
          );
    try {
      // First, get documents sorted by BM25 score
      const bm25Scores = calculateBm25Scores(query, filteredDocs);

      // Process documents in BM25 score order
      for (const [path, _score] of bm25Scores) {
        const doc = markdownDocs[path];
        const contentLen = doc.content.length;
        const occurrences: SearchOccurrence[] = [];
        let lastContextEnd = 0;

        // Check frontmatter
        if (
          doc.frontmatter &&
          JSON.stringify(doc.frontmatter).match(new RegExp(query, "i"))
        ) {
          lastContextEnd = Math.min(contentLen, contextSize);
          occurrences.push({
            startIndex: 0,
            endIndex: lastContextEnd,
            context:
              contextSize === 0 ? "" : doc.content.substring(0, lastContextEnd),
          });
        }

        // Find all occurrences of query in doc.content using regex
        const regex = new RegExp(query, "gi");
        let match = regex.exec(doc.content);
        while (match !== null) {
          match = regex.exec(doc.content);
          if (match === null) {
            break;
          }
          const idx = match.index;
          const matchLen = match[0].length;

          // Calculate context boundaries
          const contextStart = Math.max(0, idx - contextSize);
          const contextEnd = Math.min(contentLen, idx + matchLen + contextSize);

          if (contextStart < lastContextEnd) {
            // if overlapped
            // Merge occurrences
            const newOccurrence = {
              startIndex: occurrences[occurrences.length - 1].startIndex,
              endIndex: contextEnd,
              context:
                contextSize === 0
                  ? ""
                  : doc.content.substring(
                      occurrences[occurrences.length - 1].startIndex,
                      contextEnd,
                    ),
            };
            occurrences[occurrences.length - 1] = newOccurrence;
          } else {
            const context =
              contextSize === 0
                ? ""
                : doc.content.substring(contextStart, contextEnd);
            occurrences.push({
              startIndex: contextStart,
              endIndex: contextEnd,
              context: context,
            });
          }

          lastContextEnd = contextEnd;
        }

        if (occurrences.length > 0) {
          docCount++;
          occurrenceCount += occurrences.length;

          result += doc.path;
          result += "\n";
          if (showMetadata) {
            result += formatDocumentMetadata(doc);
          }
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
          isError: true,
        };
      } else {
        let fullResult = `${docCount} documents and ${occurrenceCount} occurrences found with query '${query}'\n\n${result}`;

        // Apply pagination by slicing from startIndex
        if (page > 0) {
          const offset = page * limit;
          if (offset >= fullResult.length) {
            return {
              content: [
                {
                  type: "text",
                  text: `No more results. Total page count: ${Math.ceil(fullResult.length / limit)}`,
                },
              ],
              isError: true,
            };
          }
          fullResult = fullResult.substring(offset);
        }

        // Truncate if exceeds limit
        if (fullResult.length > limit) {
          const truncationMsg = `\n\n... (output truncated due to length limit. Use page: ${page + 1} for next page)`;
          const structuredContent = {
            result: fullResult.substring(0, limit) + truncationMsg,
          };
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(structuredContent, null, 2),
              },
            ],
            structuredContent,
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
        isError: true,
      };
    }
  };
}
