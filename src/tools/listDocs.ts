import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Documents } from "../types.ts";
import { formatDocumentMetadata } from "./utils/markdown.ts";

export const name = "listPortoneDocs";

export const config = {
  title: "포트원 문서 목록 조회",
  description: `특정 경로 하위에 있는 모든 포트원 문서 목록을 트리 형태로 조회합니다.
목록에는 문서 경로, 제목, 설명, 대상 버전 등 축약된 문서 정보가 포함되어 있습니다.

Returns:
  필터링된 문서 목록 (각 문서의 파일명, 길이, 제목, 설명, 대상 버전 등)

Note:
  문서 목록은 대량의 데이터이므로 상위 디렉토리를 조회할 경우 omitFiles를 true로 설정합니다.`,
  inputSchema: {
    paths: z
      .string()
      .array()
      .default([])
      .describe(
        "하위 목록을 조회할 경로들입니다. 미입력 시 전체 목록을 조회합니다.",
      ),
    onlyPaths: z
      .boolean()
      .default(false)
      .describe(
        "true인 경우 문서를 제외한 디렉토리 목록만 표시하고, 디렉토리 하위에 readme.md가 있는 경우 해당 파일의 설명을 표시합니다.",
      ),
  },
};

export function init(
  documents: Documents,
): ToolCallback<typeof config.inputSchema> {
  return ({ paths, onlyPaths }) => {
    const { markdownDocs } = documents;

    const filteredDocs = [];
    type DocTree = Map<string, DocTree>;
    const docTree: DocTree = new Map();

    for (const [path, doc] of Object.entries(markdownDocs)) {
      const isSubpath =
        paths.length === 0 ||
        paths.some((searchPath) => path.startsWith(searchPath));
      if (!isSubpath) continue;
      filteredDocs.push(doc);
      let treeNode = docTree;
      const components = path.split("/");
      if (onlyPaths) components.pop();
      for (const pathComp of components) {
        const child = treeNode.get(pathComp);
        if (child) {
          treeNode = child;
        } else {
          const newChild = new Map();
          treeNode.set(pathComp, newChild);
          treeNode = newChild;
        }
      }
    }

    if (filteredDocs.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: "No documents found with the specified filters.",
          },
        ],
      };
    }

    const treeLines: string[] = [];
    for (const rootPath of Array.from(docTree.keys()).sort()) {
      const rootNode = docTree.get(rootPath);
      if (rootNode) formatTree(0, rootPath, rootPath, rootNode);
    }

    function formatTree(
      level: number,
      path: string,
      filename: string,
      node: DocTree,
    ) {
      const indent = "  ".repeat(level);
      treeLines.push(`${indent}${filename}`);
      const docs = markdownDocs[path];
      if (docs) {
        const metadata = formatDocumentMetadata(docs).trim();
        if (metadata.length > 0) {
          treeLines.push(metadata);
        }
      }
      if (onlyPaths) {
        const readme = markdownDocs[`${path}/readme.md`];
        if (readme) {
          const metadata = formatDocumentMetadata(readme).trim();
          if (metadata.length > 0) {
            treeLines.push(metadata);
          }
        }
      }
      for (const child of Array.from(node.keys()).sort()) {
        const childNode = node.get(child);
        if (childNode)
          formatTree(level + 1, `${path}/${child}`, child, childNode);
      }
    }

    return {
      content: [
        {
          type: "text",
          text: treeLines.join("\n"),
        },
      ],
    };
  };
}
