import type { Documents } from "../types.js";

export function getTool(documents: Documents) {
  return {
    name: "read_doc_metadata",
    description: "문서의 메타데이터를 조회합니다.",
    inputSchema: {
      type: "object",
      properties: {
        doc_path: {
          type: "string",
          description: "메타데이터를 조회할 문서의 경로",
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
    return `문서를 찾을 수 없습니다: ${docPath}`;
  }

  if (!doc.frontmatter) {
    return `문서 "${docPath}"에는 메타데이터가 없습니다.`;
  }

  return JSON.stringify(doc.frontmatter.allFieldsDict, null, 2);
}
