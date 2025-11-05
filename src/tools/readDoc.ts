import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents } from "../types.ts";
import { docPathToUrl } from "./utils/docPathToUrl.ts";
import { filterFields } from "./utils/filterFields.ts";
import { formatDocumentMetadata } from "./utils/markdown.ts";

export const name = "readPortoneDoc";

const OutputSchema = z
  .object({
    content: z.string().describe("찾은 포트원 문서의 내용"),
    metadata: z.string().describe("찾은 포트원 문서의 메타 정보"),
    url: z.string().describe("문서를 웹으로 접근 가능한 링크"),
  })
  .partial();

export const config = {
  title: "포트원 문서 읽기",
  description: `포트원 개별 문서의 경로를 통해 해당 포트원 문서의 내용, 메타 정보(제목, 설명, 대상 버전 등), 웹으로 접근 가능한 링크를 가져옵니다.

Note:
  먼저 listPortoneDocs을 사용해 포트원 문서 목록을 확인하고,
  그 중 원하는 문서의 path를 readPortoneDoc에 전달하여 내용을 확인할 수 있습니다.`,
  inputSchema: {
    path: z.string().describe("읽을 포트원 문서의 경로"),
    fields: OutputSchema.keyof().array().describe("받을 필드 목록"),
    startIndex: z
      .number()
      .optional()
      .describe("읽어올 범위 시작 인덱스. 미설정 시 처음부터 읽어옵니다."),
    endIndex: z
      .number()
      .optional()
      .describe("읽어올 범위 끝 인덱스. 미설정 시 끝까지 읽어옵니다."),
  },
  outputSchema: OutputSchema.shape,
};

export function init(
  documents: Documents,
): ToolCallback<typeof config.inputSchema> {
  return ({ path, fields, startIndex, endIndex }) => {
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

    const structuredContent: z.infer<typeof OutputSchema> = filterFields(
      fields,
      {
        content: doc.content.slice(startIndex, endIndex),
        metadata: formatDocumentMetadata(doc),
        url: docPathToUrl(doc.path),
      },
    );

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
