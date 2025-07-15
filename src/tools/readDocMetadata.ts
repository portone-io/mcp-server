import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents } from "../types.ts";
import { formatDocumentMetadata } from "./utils/markdown.ts";

export const name = "read_portone_doc_metadata";

export const config = {
  title: "포트원 문서 메타데이터 읽기",
  description: `지정된 경로의 포트원 문서 메타데이터를 읽습니다.`,
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
