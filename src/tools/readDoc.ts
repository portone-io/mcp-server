import type { Documents } from "../types.js";
import { formatDocumentMetadata } from "./utils/markdown.js";

export function getTool(documents: Documents) {
  return {
    name: "read_doc",
    description: "포트원 관련 문서를 읽습니다.",
    inputSchema: {
      type: "object",
      properties: {
        doc_path: {
          type: "string",
          description:
            '읽을 문서의 경로. 예: "help/content100000.md", "opi/ko/quick-guide/payment.md"',
        },
      },
      required: ["doc_path"],
    },
  };
}

export async function handler(
  documents: Documents,
  args: { doc_path: string },
): Promise<string> {
  const { doc_path: docPath } = args;
  const { markdownDocs } = documents;

  const doc = markdownDocs[docPath];

  if (!doc) {
    return `문서를 찾을 수 없습니다: ${docPath}\n\n사용 가능한 문서 목록을 보려면 list_portone_docs 도구를 사용하세요.`;
  }

  const lines: string[] = [];

  // Add metadata
  lines.push(formatDocumentMetadata(doc));
  lines.push("");

  // Add content
  lines.push(doc.content);

  return lines.join("\n");
}
