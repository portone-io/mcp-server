import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents } from "../types.ts";
import { formatDocumentMetadata } from "./utils/markdown.ts";

export const name = "list_portone_docs";

export const config = {
  title: "포트원 문서 목록 조회",
  description: `포트원 문서 목록을 카테고리별로 필터링하여 조회합니다. 목록에는 문서 경로, 제목, 설명, 대상 버전 등 축약된 문서 정보가 포함되어 있습니다.`,
  inputSchema: {
    dev_docs: z
      .boolean()
      .default(true)
      .describe(
        "개발자를 위한 문서 포함 여부 (blog/, release-notes/, help/로 시작하지 않는 모든 문서)",
      ),
    tech_blog: z
      .boolean()
      .default(false)
      .describe("기술 블로그 포스트 (blog/) 포함 여부"),
    release_notes: z
      .boolean()
      .default(false)
      .describe("개발자센터 릴리즈 노트 (release-notes/) 포함 여부"),
    help_docs: z
      .boolean()
      .default(true)
      .describe(
        "개발과 무관하게 서비스 관련 내용을 일반적으로 담는 헬프센터 문서 (help/) 포함 여부",
      ),
  },
  outputSchema: {
    result: z.string().describe("필터링된 문서 목록"),
  },
};

export function init(
  documents: Documents,
): ToolCallback<typeof config.inputSchema> {
  return ({ dev_docs, help_docs, tech_blog, release_notes }) => {
    const { markdownDocs } = documents;

    const filteredDocs = [];

    for (const [path, doc] of Object.entries(markdownDocs)) {
      if (tech_blog && path.startsWith("blog/")) {
        filteredDocs.push(doc);
      }
      if (release_notes && path.startsWith("release-notes/")) {
        filteredDocs.push(doc);
      }
      if (help_docs && path.startsWith("help/")) {
        filteredDocs.push(doc);
      }
      if (
        dev_docs &&
        !["blog/", "release-notes/", "help/"].some((prefix) =>
          path.startsWith(prefix),
        )
      ) {
        filteredDocs.push(doc);
      }
    }

    if (filteredDocs.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: "No documents found with the specified filters.",
          },
        ],
        isError: true,
      };
    }

    const formattedResult = filteredDocs
      .map((doc) => formatDocumentMetadata(doc))
      .join("\n---\n");
    const structuredContent = {
      result: formattedResult,
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
  };
}
