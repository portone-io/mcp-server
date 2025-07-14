import type { MarkdownDocument } from "../../types.js";

export function calculateBm25Scores(
  query: string,
  documents: Record<string, MarkdownDocument>,
  k1 = 1.2,
  b = 0.75,
): Array<[string, number]> {
  if (Object.keys(documents).length === 0) {
    return [];
  }

  // Compile regex pattern
  let pattern: RegExp;
  try {
    pattern = new RegExp(query, "i");
  } catch {
    // If invalid regex, treat as literal string and escape special characters
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    pattern = new RegExp(escapedQuery, "i");
  }

  // Calculate document lengths and average length
  const docLengths: Record<string, number> = {};
  let totalLength = 0;

  for (const [path, doc] of Object.entries(documents)) {
    // Combine content and frontmatter for search
    let searchableText = doc.content;
    if (doc.frontmatter?.rawString) {
      searchableText = doc.frontmatter.rawString + "\n" + searchableText;
    }

    const wordCount = searchableText.split(/\s+/).length;
    docLengths[path] = wordCount;
    totalLength += wordCount;
  }

  const avgDocLength = totalLength / Object.keys(documents).length || 0;

  // Calculate term frequencies and document frequencies
  const termFrequencies: Record<string, Record<string, number>> = {};
  const docFrequencies: Record<string, number> = {};

  for (const [path, doc] of Object.entries(documents)) {
    // Combine content and frontmatter for search
    let searchableText = doc.content;
    if (doc.frontmatter?.rawString) {
      searchableText = doc.frontmatter.rawString + "\n" + searchableText;
    }

    // Find all matches of the regex pattern
    const matches = Array.from(
      searchableText.matchAll(new RegExp(pattern, "gi")),
    );

    if (matches.length > 0) {
      // Count occurrences of each matched term
      const termCounts: Record<string, number> = {};
      for (const match of matches) {
        const term = match[0].toLowerCase();
        termCounts[term] = (termCounts[term] || 0) + 1;
      }

      termFrequencies[path] = termCounts;

      // Update document frequencies
      for (const term of Object.keys(termCounts)) {
        docFrequencies[term] = (docFrequencies[term] || 0) + 1;
      }
    }
  }

  // Calculate BM25 scores
  const scores: Array<[string, number, number]> = [];
  const N = Object.keys(documents).length; // Total number of documents

  for (const [path] of Object.entries(documents)) {
    let score = 0.0;

    if (path in termFrequencies) {
      const docTf = termFrequencies[path];
      const docLen = docLengths[path];

      for (const [term, tf] of Object.entries(docTf)) {
        // Standard BM25 IDF calculation: log((N - df + 0.5) / (df + 0.5))
        const df = docFrequencies[term];
        const idf = Math.log((N - df + 0.5) / (df + 0.5));

        // BM25 formula
        const numerator = tf * (k1 + 1);
        const denominator = tf + k1 * (1 - b + b * (docLen / avgDocLength));

        score += idf * (numerator / denominator);
      }

      // Calculate total term frequency for tie-breaking
      const totalTf = Object.values(termFrequencies[path]).reduce(
        (a, b) => a + b,
        0,
      );
      scores.push([path, score, totalTf]);
    }
  }

  // Sort by score in descending order, then by total term frequency
  scores.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }
    return b[2] - a[2];
  });

  // Return only path and score
  return scores.map(([path, score]) => [path, score]);
}
