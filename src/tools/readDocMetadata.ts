import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents } from "../types.ts";
import { formatDocumentMetadata } from "./utils/markdown.ts";

export const name = "readPortoneDocMetadata";

export const config = {
  title: "포트원 문서 메타데이터 읽기",
  description: `포트원 개별 문서의 경로를 통해 해당 포트원 문서의 제목, 설명, 대상 버전을 포함한 메타 정보 전체를 가져옵니다.`,
  inputSchema: {
    path: z.string().describe("읽을 포트원 문서의 경로"),
  },
  outputSchema: {
    result: z.string().describe("찾은 포트원 문서의 메타데이터"),
  },
};

export function init(
  documents: Documents,
): ToolCallback<typeof config.inputSchema> {
  return ({ path }) => {
    const { markdownDocs } = documents;
    const doc = markdownDocs[path];

    if (!doc) {
      return {
        content: [
          {
            type: "text",
            text: `Document not found at path: ${path}`,
          },
        ],
        isError: true,
      };
    }

    const structuredContent = {
      result: formatDocumentMetadata(doc),
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
