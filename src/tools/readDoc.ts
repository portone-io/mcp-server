import type { Documents } from "../types.js";
import { formatDocumentMetadata } from "./utils/markdown.js";

export function getTool() {
  return {
    name: "read_portone_doc",
    title: "포트원 문서 읽기",
    description: `포트원 개별 문서의 경로를 통해 해당 포트원 문서의 내용을 가져옵니다.

먼저 list_portone_docs을 사용해 포트원 문서 목록을 확인하고, 그 중 원하는 문서의 path를 read_portone_doc에 전달하여 내용을 확인할 수 있습니다.`,
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "읽을 포트원 문서의 경로",
        },
      },
      required: ["path"],
    },
  };
}

export async function handler(
  documents: Documents,
  args: { path: string },
): Promise<string> {
  const { path } = args;
  const { markdownDocs } = documents;

  const doc = markdownDocs[path];

  if (!doc) {
    return `포트원 문서를 찾을 수 없습니다: ${path}\n\n사용 가능한 문서 목록을 보려면 list_portone_docs 도구를 사용하세요.`;
  }

  const lines: string[] = [];

  // Add metadata
  lines.push(formatDocumentMetadata(doc));
  lines.push("");

  // Add content
  lines.push(doc.content);

  return lines.join("\n");
}
