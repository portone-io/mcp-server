import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents, SearchOccurrence } from "../types.js";
import { BM25 } from "./utils/bm25.js";
import {
  formatSearchResult,
  getContextAroundMatches,
} from "./utils/markdown.js";

export const name = "regex_search_portone_docs";

export const config = {
  title: "포트원 문서 정규표현식 검색",
  description: `정규표현식을 사용하여 포트원 문서를 검색합니다.
검색 결과는 BM25 알고리즘을 사용하여 관련성 순으로 정렬됩니다.

Args:
  pattern: 검색할 정규표현식 패턴
  context_size: 매칭된 줄 주변에 포함할 컨텍스트 줄 수 (기본값: 2)
  start_index: 결과 시작 인덱스 (페이지네이션용, 기본값: 0)
  limit: 반환할 최대 문서 수 (기본값: 10)

Returns:
  매칭된 문서 목록과 각 문서의 매칭 위치 및 컨텍스트`,
  inputSchema: {
    pattern: z.string().describe("검색할 정규표현식 패턴"),
    context_size: z.number().default(2).describe("컨텍스트 줄 수"),
    start_index: z.number().default(0).describe("시작 인덱스"),
    limit: z.number().default(10).describe("최대 결과 수"),
  },
};

export function init(
  documents: Documents,
): ToolCallback<typeof config.inputSchema> {
  return ({ pattern, context_size, start_index, limit }) => {
    const { markdownDocs } = documents;

    try {
      const regex = new RegExp(pattern, "gim");
      const occurrences: SearchOccurrence[] = [];

      // Search all documents
      for (const [path, doc] of Object.entries(markdownDocs)) {
        const lines = doc.content.split("\n");
        const matchedLineNumbers: number[] = [];

        lines.forEach((line, index) => {
          if (regex.test(line)) {
            matchedLineNumbers.push(index);
          }
          regex.lastIndex = 0; // Reset regex state
        });

        if (matchedLineNumbers.length > 0) {
          const contextResult = getContextAroundMatches(
            lines,
            matchedLineNumbers,
            context_size,
          );

          occurrences.push({
            path,
            title: doc.frontmatter?.title,
            targetVersions: doc.frontmatter?.targetVersions,
            content: contextResult.content,
            matchedLines: matchedLineNumbers.map((n) => lines[n]),
            lineNumbers: contextResult.lineNumbers,
          });
        }
      }

      if (occurrences.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: "No matches found for the given pattern.",
            },
          ],
        };
      }

      // Prepare corpus for BM25
      const corpus = occurrences.map((occ, idx) => ({
        id: idx.toString(),
        text: occ.content,
      }));

      // Sort by BM25 relevance
      const bm25 = new BM25(corpus);
      const searchResults = bm25.search(pattern, occurrences.length);

      // Map back to occurrences
      const sortedOccurrences = searchResults.map(
        (result) => occurrences[parseInt(result.id)],
      );

      // Apply pagination
      const paginatedResults = sortedOccurrences.slice(
        start_index,
        start_index + limit,
      );

      // Format results
      const formattedResults = paginatedResults
        .map((occ) => formatSearchResult(occ))
        .join("\n\n---\n\n");

      const totalCount = sortedOccurrences.length;
      const resultCount = paginatedResults.length;

      return {
        content: [
          {
            type: "text",
            text: `Found ${totalCount} documents matching the pattern.\nShowing results ${start_index + 1}-${start_index + resultCount}:\n\n${formattedResults}`,
          },
        ],
      };
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
