import { readdirSync, readFileSync, statSync } from "fs";
import { join, relative } from "path";
import type { Documents, MarkdownDocument } from "../types.js";
import { parseMarkdown } from "./markdown.js";
import { loadSchema } from "./schema.js";

export async function loadDocuments(resourcesPath: string): Promise<Documents> {
  const docsPath = join(resourcesPath, "docs");

  // Load README
  const readmePath = join(docsPath, "README.md");
  const readme = readFileSync(readmePath, "utf-8");

  // Load markdown documents
  const markdownDocs = await loadMarkdownDocs(docsPath);

  // Load schema files
  const schemaPath = join(docsPath, "schema");
  const schema = await loadSchema(schemaPath);

  return {
    readme,
    markdownDocs,
    schema,
  };
}

async function loadMarkdownDocs(
  docsPath: string,
): Promise<Record<string, MarkdownDocument>> {
  const docs: Record<string, MarkdownDocument> = {};
  const excludedFiles = ["v1-docs-full.md", "v2-docs-full.md"];

  function walkDir(dir: string) {
    const files = readdirSync(dir);

    for (const file of files) {
      const fullPath = join(dir, file);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (file.endsWith(".md") && !excludedFiles.includes(file)) {
        const relativePath = relative(docsPath, fullPath);
        const content = readFileSync(fullPath, "utf-8");
        const parsed = parseMarkdown(content);

        docs[relativePath] = {
          path: relativePath,
          ...parsed,
        };
      }
    }
  }

  walkDir(docsPath);
  return docs;
}
