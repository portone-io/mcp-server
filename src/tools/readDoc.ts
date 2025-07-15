import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents } from "../types.ts";

export const name = "readPortoneDoc";

export const config = {
  title: "포트원 문서 읽기",
  description: `포트원 개별 문서의 경로를 통해 해당 포트원 문서의 내용을 가져옵니다.

Note:
  먼저 listPortoneDocs을 사용해 포트원 문서 목록을 확인하고,
  그 중 원하는 문서의 path를 readPortoneDoc에 전달하여 내용을 확인할 수 있습니다.`,
  inputSchema: {
    path: z.string().describe("읽을 포트원 문서의 경로"),
  },
  outputSchema: {
    result: z.string().describe("찾은 포트원 문서의 내용"),
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
      result: doc.content,
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
