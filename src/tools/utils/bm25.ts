export class BM25 {
  private k1: number;
  private b: number;
  private avgDocLength: number = 0;
  private docFreq: Map<string, number>;
  private idf: Map<string, number>;
  private docLengths: Map<string, number>;

  constructor(
    private corpus: { id: string; text: string }[],
    k1 = 1.2,
    b = 0.75,
  ) {
    this.k1 = k1;
    this.b = b;
    this.docFreq = new Map();
    this.idf = new Map();
    this.docLengths = new Map();

    this.initialize();
  }

  private initialize(): void {
    let totalLength = 0;

    // Calculate document frequencies and lengths
    for (const doc of this.corpus) {
      const tokens = this.tokenize(doc.text);
      const uniqueTokens = new Set(tokens);

      this.docLengths.set(doc.id, tokens.length);
      totalLength += tokens.length;

      for (const token of uniqueTokens) {
        this.docFreq.set(token, (this.docFreq.get(token) || 0) + 1);
      }
    }

    this.avgDocLength = totalLength / this.corpus.length;

    // Calculate IDF scores
    const numDocs = this.corpus.length;
    for (const [token, freq] of this.docFreq) {
      this.idf.set(token, Math.log((numDocs - freq + 0.5) / (freq + 0.5) + 1));
    }
  }

  private tokenize(text: string): string[] {
    return text.toLowerCase().match(/\w+/g) || [];
  }

  score(query: string, docId: string, docText: string): number {
    const queryTokens = this.tokenize(query);
    const docTokens = this.tokenize(docText);
    const docLength = this.docLengths.get(docId) || 0;

    const tokenFreq = new Map<string, number>();
    for (const token of docTokens) {
      tokenFreq.set(token, (tokenFreq.get(token) || 0) + 1);
    }

    let score = 0;
    for (const token of queryTokens) {
      const freq = tokenFreq.get(token) || 0;
      const idf = this.idf.get(token) || 0;
      const numerator = freq * (this.k1 + 1);
      const denominator =
        freq +
        this.k1 * (1 - this.b + (this.b * docLength) / this.avgDocLength);
      score += idf * (numerator / denominator);
    }

    return score;
  }

  search(
    query: string,
    topK = 10,
  ): { id: string; score: number; text: string }[] {
    const results = this.corpus.map((doc) => ({
      id: doc.id,
      text: doc.text,
      score: this.score(query, doc.id, doc.text),
    }));

    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .filter((result) => result.score > 0);
  }
}
