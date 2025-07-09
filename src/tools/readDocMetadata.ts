import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents } from "../types.js";
import { formatDocumentMetadata } from "./utils/markdown.js";

export const name = "read_portone_doc_metadata";

export const config = {
  title: "포트원 문서 메타데이터 읽기",
  description: `지정된 경로의 포트원 문서 메타데이터를 읽습니다.

Args:
  path: 문서의 경로 (예: opi/ko/readme, api/rest-v2/payment)

Returns:
  문서의 메타데이터 (제목, 설명, 대상 버전 등)`,
  inputSchema: {
    path: z.string().describe("문서의 경로"),
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
          text: formatDocumentMetadata(doc),
        },
      ],
    };
  };
}
