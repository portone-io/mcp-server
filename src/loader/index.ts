import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { Resources } from "../types.js";
import { loadDocuments } from "./documents.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function loadResources(): Promise<Resources> {
  const assetsPath = join(
    __dirname,
    "../../assets",
  );

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
