import { describe, expect, it } from "vitest";
import { config, init } from "../src/tools/regexSearch.ts";
import type { Documents } from "../src/types.ts";

function search(content: string, query: string) {
  const documents = {
    markdownDocs: { "test.md": { path: "test.md", content } },
  } as Documents;
  return init(documents)(
    { query, contextSize: 0, limit: 1000, page: 0, showMetadata: false },
    {} as never,
  );
}

describe("regex search", () => {
  it("returns matches for a normal query", async () => {
    const result = await search("hello hello", "hello");
    expect(result.isError).toBeUndefined();
    expect(result.content).toEqual([
      {
        type: "text",
        text: "1 documents and 1 occurrences found with query 'hello'\n\ntest.md\n```txt startIndex=6 endIndex=11```\n\n",
      },
    ]);
  });

  it("interrupts catastrophic backtracking", async () => {
    const start = performance.now();
    const result = await search(`${"a".repeat(10000)}!`, "(a+)+$");
    expect(performance.now() - start).toBeLessThan(5000);
    expect(result.isError).toBe(true);
    expect(result.content).toEqual([
      { type: "text", text: expect.stringContaining("simpler pattern") },
    ]);
  });

  it("limits query length", () => {
    expect(config.inputSchema.query.safeParse("a".repeat(1000)).success).toBe(
      true,
    );
    expect(config.inputSchema.query.safeParse("a".repeat(1001)).success).toBe(
      false,
    );
  });
});
