import matter from "gray-matter";
import type { Frontmatter } from "../types.ts";

interface ParsedMarkdown {
  content: string;
  frontmatter?: Frontmatter;
}

export function parseMarkdown(content: string): ParsedMarkdown {
  try {
    const { data, content: body, matter: rawMatter } = matter(content);

    if (Object.keys(data).length === 0) {
      return { content };
    }

    const frontmatter: Frontmatter = {
      title: data.title,
      description: data.description,
      targetVersions: data.targetVersions,
      allFieldsDict: data,
      rawString: rawMatter || "",
    };

    return {
      content: body,
      frontmatter,
    };
  } catch (error) {
    console.error("Error parsing markdown frontmatter:", error);
    return { content };
  }
}
