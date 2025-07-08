import type {
  PrimitiveSchemaDefinition,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import type { Documents } from "../types.js";
import { formatDocumentMetadata } from "./utils/markdown.js";

export function getTool(): Tool {
  return {
    name: "list_portone_docs",
    title: "포트원 문서 목록 조회",
    description: `포트원 문서 목록을 카테고리별로 필터링하여 조회합니다.
목록에는 문서 경로, 제목, 설명, 대상 버전 등 축약된 문서 정보가 포함되어 있습니다.`,
    inputSchema: {
      type: "object",
      properties: {
        dev_docs: {
          type: "boolean",
          description:
            "개발자를 위한 문서 포함 여부 (blog/, release-notes/, help/로 시작하지 않는 모든 문서)",
          default: true,
        },
        tech_blog: {
          type: "boolean",
          description: "기술 블로그 포스트 (blog/) 포함 여부",
          default: false,
        },
        release_notes: {
          type: "boolean",
          description: "개발자센터 릴리즈 노트 (release-notes/) 포함 여부",
          default: false,
        },
        help_docs: {
          type: "boolean",
          description:
            "개발과 무관하게 서비스 관련 내용을 일반적으로 담는 헬프센터 문서 (help/) 포함 여부",
          default: false,
        },
      } satisfies Record<string, PrimitiveSchemaDefinition>,
    },
  };
}

export async function handler(
  documents: Documents,
  args: {
    dev_docs?: boolean;
    tech_blog?: boolean;
    release_notes?: boolean;
    help_docs?: boolean;
  },
): Promise<string> {
  const {
    dev_docs = true,
    tech_blog = false,
    release_notes = false,
    help_docs = false,
  } = args;
  const { markdownDocs } = documents;

  const filteredDocs = [];

  for (const [path, doc] of Object.entries(markdownDocs)) {
    // Categorize documents based on their path
    if (path.startsWith("blog/") && tech_blog) {
      filteredDocs.push(doc);
    } else if (path.startsWith("release-notes/") && release_notes) {
      filteredDocs.push(doc);
    } else if (path.startsWith("help/") && help_docs) {
      filteredDocs.push(doc);
    } else if (
      dev_docs &&
      !["blog/", "release-notes/", "help/"].some((prefix) =>
        path.startsWith(prefix),
      )
    ) {
      // All other documents are dev docs
      filteredDocs.push(doc);
    }
  }

  if (filteredDocs.length === 0) {
    return "No documents found with the specified filters.";
  }

  const formattedResult = filteredDocs
    .map((doc) => formatDocumentMetadata(doc))
    .join("\n---\n");

  return formattedResult;
}
