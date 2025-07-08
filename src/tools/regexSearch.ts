import type { Documents, SearchOccurrence } from "../types.js";

export function getTool(documents: Documents) {
  return {
    name: "regex_search",
    description: "정규표현식을 사용하여 문서 내용을 검색합니다.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: {
          type: "string",
          description: "검색할 정규표현식 패턴",
        },
        directory_path: {
          type: "string",
          description: "검색할 디렉토리 경로 (선택사항)",
        },
        limit: {
          type: "number",
          description: "최대 검색 결과 수 (기본값: 20)",
          default: 20,
        },
      },
      required: ["pattern"],
    },
  };
}

export async function handler(
  documents: Documents,
  args: { pattern: string; directory_path?: string; limit?: number },
): Promise<string> {
  const { pattern, directory_path: directoryPath, limit = 20 } = args;
  const { markdownDocs } = documents;

  let regex: RegExp;
  try {
    regex = new RegExp(pattern, "gi");
  } catch (error) {
    return `유효하지 않은 정규표현식입니다: ${error}`;
  }

  const results: SearchOccurrence[] = [];

  for (const [path, doc] of Object.entries(markdownDocs)) {
    if (directoryPath && !path.startsWith(directoryPath)) {
      continue;
    }

    const lines = doc.content.split("\n");
    const matchedLines: string[] = [];
    const lineNumbers: number[] = [];

    lines.forEach((line, index) => {
      if (regex.test(line)) {
        matchedLines.push(line.trim());
        lineNumbers.push(index + 1);
      }
    });

    if (matchedLines.length > 0) {
      results.push({
        path,
        title: doc.frontmatter?.title,
        targetVersions: doc.frontmatter?.targetVersions,
        content: doc.content.substring(0, 200) + "...",
        matchedLines,
        lineNumbers,
      });
    }

    if (results.length >= limit) {
      break;
    }
  }

  if (results.length === 0) {
    return "검색 결과가 없습니다.";
  }

  const outputLines: string[] = [`검색 결과 (${results.length}개):`];

  for (const result of results) {
    outputLines.push("");
    outputLines.push(`파일: ${result.path}`);
    if (result.title) {
      outputLines.push(`제목: ${result.title}`);
    }
    outputLines.push(`매칭된 라인 수: ${result.matchedLines.length}`);
    outputLines.push("매칭된 라인:");
    result.matchedLines.slice(0, 5).forEach((line, i) => {
      outputLines.push(`  ${result.lineNumbers[i]}: ${line}`);
    });
    if (result.matchedLines.length > 5) {
      outputLines.push(`  ... 그 외 ${result.matchedLines.length - 5}개 라인`);
    }
  }

  return outputLines.join("\n");
}
