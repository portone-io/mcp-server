import { join } from "node:path";
import type { Resources } from "../types.js";
import { loadDocuments } from "./documents.js";

export async function loadResources(assetsPath: string): Promise<Resources> {
  // Load instructions
  const instructionsPath = join(assetsPath, "instructions.md");
  const instructions = await loadInstructions(instructionsPath);

  // Load documents
  const documents = await loadDocuments(assetsPath);

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
