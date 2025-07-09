import type { Documents } from "../types.js";
import { formatDocumentMetadata } from "./utils/markdown.js";

export function getTool(documents: Documents) {
  return {
    name: "regex_search_portone_docs",
    title: "정규표현식으로 포트원 문서 검색",
    description: `포트원 문서의 내용 중 파이썬 re 정규표현식 형식의 query가 매칭된 부분을 모두 찾아 반환합니다.
정규식 기반으로 관련 포트원 문서를 찾고 싶은 경우 이 도구를 사용하며, 메타 정보와 문서 내용 모두 검색합니다.`,
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Python re 패키지가 지원하는 Regular Expression 형식의 문자열. 영어 알파벳 대소문자는 구분 없이 매칭됩니다. 공백 대신 `|` 연산자나 `\\s*`를 사용해야 합니다.",
        },
        context_size: {
          type: "number",
          description: "검색 결과의 컨텍스트 크기 (문자 수 기준)",
          default: 100,
        },
        limit: {
          type: "number",
          description: "반환할 최대 문자열 길이",
          default: 50000,
        },
        start_index: {
          type: "number",
          description: "결과 문자열의 페이지네이션을 위한 시작 인덱스",
          default: 0,
        },
      },
      required: ["query"],
    },
  };
}

export async function handler(
  documents: Documents,
  args: { query: string; context_size?: number; limit?: number; start_index?: number },
): Promise<string> {
  const { query, context_size = 100, limit = 50000, start_index = 0 } = args;
  const { markdownDocs } = documents;

  let regex: RegExp;
  try {
    regex = new RegExp(query, "gi");
  } catch (error) {
    return `유효하지 않은 정규표현식입니다: ${error}`;
  }

  const outputParts: string[] = [];

  for (const [path, doc] of Object.entries(markdownDocs)) {
    const matches: Array<{ index: number; match: string; context: string }> = [];
    
    // Search in metadata
    const metadataStr = JSON.stringify(doc.frontmatter || {});
    let match;
    
    // Reset regex lastIndex
    regex.lastIndex = 0;
    while ((match = regex.exec(metadataStr)) !== null) {
      const contextStart = Math.max(0, match.index - context_size);
      const contextEnd = Math.min(metadataStr.length, match.index + match[0].length + context_size);
      const context = metadataStr.slice(contextStart, contextEnd);
      matches.push({
        index: match.index,
        match: match[0],
        context: `[메타데이터] ...${context}...`,
      });
    }
    
    // Search in content
    regex.lastIndex = 0;
    while ((match = regex.exec(doc.content)) !== null) {
      const contextStart = Math.max(0, match.index - context_size);
      const contextEnd = Math.min(doc.content.length, match.index + match[0].length + context_size);
      const context = doc.content.slice(contextStart, contextEnd);
      matches.push({
        index: match.index,
        match: match[0],
        context: `...${context}...`,
      });
    }
    
    if (matches.length > 0) {
      outputParts.push("---");
      outputParts.push(formatDocumentMetadata(doc));
      outputParts.push(`매칭 횟수: ${matches.length}개`);
      outputParts.push("");
      
      for (const { context } of matches) {
        outputParts.push(context.replace(/\n/g, " "));
        outputParts.push("");
      }
    }
  }

  if (outputParts.length === 0) {
    return "포트원 문서에서 매칭되는 내용을 찾을 수 없습니다.";
  }

  // Apply pagination
  const fullOutput = outputParts.join("\n");
  if (fullOutput.length <= limit) {
    return fullOutput;
  }
  
  const paginatedOutput = fullOutput.slice(start_index, start_index + limit);
  const hasMore = fullOutput.length > start_index + limit;
  
  if (hasMore) {
    return paginatedOutput + `\n\n[결과가 너무 길어 잘렸습니다. 다음 페이지를 보려면 start_index=${start_index + limit}로 다시 검색하세요.]`;
  }
  
  return paginatedOutput;
}