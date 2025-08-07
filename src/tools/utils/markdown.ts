import type { MarkdownDocument, SearchOccurrence } from "../../types.ts";

export function formatDocumentMetadata(doc: MarkdownDocument): string {
  const lines: string[] = [];

  lines.push(`파일: ${doc.path}`);
  if (doc.frontmatter) {
    if (doc.frontmatter.title) {
      lines.push(`제목: ${doc.frontmatter.title}`);
    }
    if (doc.frontmatter.description) {
      lines.push(`설명: ${doc.frontmatter.description}`);
    }
    if (
      doc.frontmatter.targetVersions &&
      doc.frontmatter.targetVersions.length > 0
    ) {
      lines.push(`대상 버전: ${doc.frontmatter.targetVersions.join(", ")}`);
    }
  }

  return lines.join("\n");
}

export function formatSearchResult(occurrence: SearchOccurrence): string {
  const lines: string[] = [];

  lines.push(`파일: ${occurrence.path}`);

  if (occurrence.title) {
    lines.push(`제목: ${occurrence.title}`);
  }

  if (occurrence.targetVersions && occurrence.targetVersions.length > 0) {
    lines.push(`대상 버전: ${occurrence.targetVersions.join(", ")}`);
  }

  lines.push(`줄 번호: ${occurrence.lineNumbers.join(", ")}`);
  lines.push("");
  lines.push("매칭된 부분:");
  lines.push(occurrence.content);

  return lines.join("\n");
}

export function getContextAroundMatches(
  lines: string[],
  matchedLineNumbers: number[],
  contextSize: number,
): { content: string; lineNumbers: number[] } {
  const contextLines = new Set<number>();

  for (const lineNum of matchedLineNumbers) {
    for (
      let i = Math.max(0, lineNum - contextSize);
      i <= Math.min(lines.length - 1, lineNum + contextSize);
      i++
    ) {
      contextLines.add(i);
    }
  }

  const sortedLineNumbers = Array.from(contextLines).sort((a, b) => a - b);
  const contentLines: string[] = [];

  let prevLineNum = -1;
  for (const lineNum of sortedLineNumbers) {
    if (prevLineNum !== -1 && lineNum - prevLineNum > 1) {
      contentLines.push("...");
    }
    contentLines.push(`${lineNum + 1}: ${lines[lineNum]}`);
    prevLineNum = lineNum;
  }

  return {
    content: contentLines.join("\n"),
    lineNumbers: matchedLineNumbers.map((n) => n + 1),
  };
}
