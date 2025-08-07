import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents } from "../types.ts";
import { docPathToUrl } from "./utils/docPathToUrl.ts";

export const name = "getPortoneDocsUrl";

const OutputSchema = z.object({
  url: z
    .string()
    .array()
    .describe(
      "문서를 웹으로 접근 가능한 링크가 입력한 문서 순서대로 주어집니다.",
    ),
});

export const config = {
  title: "포트원 문서 웹 링크 조회",
  description: `포트원 개별 문서들의 경로를 통해 해당 포트원 문서의 웹으로 접근 가능한 링크를 가져옵니다.

Note:
  문서가 1개뿐인 경우에는 readPortoneDoc을 사용하면 문서 내용과 메타 정보도 획득할 수 있습니다.
  getPortoneDocsUrl은 여러 문서의 링크를 가져올 수 있습니다.`,
  inputSchema: {
    path: z.string().array().describe("읽을 포트원 문서들의 경로 목록"),
  },
  outputSchema: OutputSchema.shape,
};

export function init(
  documents: Documents,
): ToolCallback<typeof config.inputSchema> {
  return ({ path: paths }) => {
    const { markdownDocs } = documents;

    const found: string[] = [];
    const notFound: string[] = [];
    for (const path of paths) {
      if (path in markdownDocs) {
        found.push(docPathToUrl(markdownDocs[path].path));
      } else {
        notFound.push(path);
      }
    }

    if (notFound.length > 0) {
      return {
        content: [
          {
            type: "text",
            text: `Document not found at paths: ${notFound}`,
          },
        ],
        isError: true,
      };
    }

    const structuredContent: z.infer<typeof OutputSchema> = {
      url: found,
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
