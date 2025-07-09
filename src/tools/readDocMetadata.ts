import type { Documents } from "../types.js";

export function getTool() {
  return {
    name: "read_portone_doc_metadata",
    title: "포트원 문서 메타데이터 읽기",
    description:
      "포트원 개별 문서의 경로를 통해 해당 포트원 문서의 제목, 설명, 대상 버전을 포함한 메타 정보 전체를 가져옵니다.",
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
    return `포트원 문서를 찾을 수 없습니다: ${path}`;
  }

  if (!doc.frontmatter) {
    return `문서 "${path}"에는 메타데이터가 없습니다.`;
  }

  return JSON.stringify(doc.frontmatter.allFieldsDict, null, 2);
}
