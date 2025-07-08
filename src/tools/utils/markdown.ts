import type { MarkdownDocument } from "../../types.js";

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
