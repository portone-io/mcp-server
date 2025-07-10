import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents } from "../types.js";

export const name = "read_portone_doc";

export const config = {
  title: "포트원 문서 읽기",
  description: `지정된 경로의 포트원 문서 내용을 읽습니다.

Returns:
  문서의 전체 내용`,
  inputSchema: {
    path: z
      .string()
      .describe("문서의 경로 (예: opi/ko/readme, api/rest-v2/payment)"),
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
      };
    }

    return {
      content: [
        {
          type: "text",
          text: doc.content,
        },
      ],
    };
  };
}
