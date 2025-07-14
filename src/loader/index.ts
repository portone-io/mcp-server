import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { Resources } from "../types.js";
import { loadDocuments } from "./documents.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function loadResources(): Promise<Resources> {
  const resourcesPath = join(
    __dirname,
    "../../src/portone_mcp_server/resources",
  );

  // Load instructions
  const instructionsPath = join(resourcesPath, "instructions.md");
  const instructions = await loadInstructions(instructionsPath);

  // Load documents
  const documents = await loadDocuments(resourcesPath);

  return {
    instructions,
    documents,
  };
}

async function loadInstructions(path: string): Promise<string> {
  try {
    const { readFileSync } = await import("node:fs");
    return readFileSync(path, "utf-8");
  } catch (error) {
    console.error(`Failed to load instructions from ${path}:`, error);
    return "";
  }
}
