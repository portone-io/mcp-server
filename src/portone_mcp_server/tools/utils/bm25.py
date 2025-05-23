import math
import re
from collections import Counter
from typing import Dict, List, Tuple

from ...loader.markdown import MarkdownDocument


def calculate_bm25_scores(
    query: str,
    documents: Dict[str, MarkdownDocument],
    k1: float = 1.2,
    b: float = 0.75,
) -> List[Tuple[str, float]]:
    """
    Calculate BM25 scores for documents based on a regex query.

    This implementation uses the provided regex query to find all matching strings
    within each document. Each unique matched string is then treated as a distinct
    "term" for the BM25 calculation. The scores for all such terms found in a
    document are summed up to produce the document's final BM25 score.

    Args:
        query: Regex query string. Matches from this regex will become the terms.
        documents: Dictionary of document paths to MarkdownDocument objects.
        k1: BM25 parameter, controls term frequency saturation (default: 1.2).
        b: BM25 parameter, controls length normalization (default: 0.75).

    Returns:
        List of tuples containing (document_path, bm25_score) sorted by score descending.
    """
    if not documents:
        return []

    # Compile regex pattern
    try:
        pattern = re.compile(query, re.IGNORECASE)
    except re.error:
        # If invalid regex, treat as literal string and escape special characters
        escaped_query = re.escape(query)
        pattern = re.compile(escaped_query, re.IGNORECASE)

    # Calculate document lengths and average length
    doc_lengths = {}
    total_length = 0

    for path, doc in documents.items():
        # Combine content and frontmatter for search
        searchable_text = doc.content
        if doc.frontmatter and doc.frontmatter.raw_string:
            searchable_text = doc.frontmatter.raw_string + "\n" + searchable_text

        doc_lengths[path] = len(searchable_text.split())
        total_length += doc_lengths[path]

    avg_doc_length = total_length / len(documents) if documents else 0

    # Calculate term frequencies and document frequencies
    term_frequencies = {}
    doc_frequencies = Counter()

    for path, doc in documents.items():
        # Combine content and frontmatter for search
        searchable_text = doc.content
        if doc.frontmatter and doc.frontmatter.raw_string:
            searchable_text = doc.frontmatter.raw_string + "\n" + searchable_text

        # Find all matches of the regex pattern
        matches = list(pattern.finditer(searchable_text))

        if matches:
            # Count occurrences of each matched term
            term_counts = Counter()
            for match in matches:
                term = match.group().lower()
                term_counts[term] += 1

            term_frequencies[path] = term_counts

            # Update document frequencies
            for term in term_counts:
                doc_frequencies[term] += 1

    # Calculate BM25 scores
    scores = []
    N = len(documents)  # Total number of documents

    for path, doc in documents.items():
        score = 0.0

        if path in term_frequencies:
            doc_tf = term_frequencies[path]
            doc_len = doc_lengths[path]

            for term, tf in doc_tf.items():
                # Standard BM25 IDF calculation: log((N - df + 0.5) / (df + 0.5))
                df = doc_frequencies[term]
                idf = math.log((N - df + 0.5) / (df + 0.5))

                # BM25 formula
                numerator = tf * (k1 + 1)
                denominator = tf + k1 * (1 - b + b * (doc_len / avg_doc_length))

                score += idf * (numerator / denominator)

            # Calculate total term frequency for tie-breaking
            total_tf = sum(term_frequencies[path].values())
            scores.append((path, score, total_tf))

    # Sort by score in descending order, then by total term frequency
    scores.sort(key=lambda x: (x[1], x[2]), reverse=True)

    # Return only path and score
    return [(path, score) for path, score, _ in scores]


def get_top_documents(
    query: str,
    documents: Dict[str, MarkdownDocument],
    top_k: int = 10,
    k1: float = 1.2,
    b: float = 0.75,
) -> List[Tuple[str, float]]:
    """
    Get the top-k documents ranked by BM25 score for a given query.

    Args:
        query: Regex query string to search for
        documents: Dictionary of document paths to MarkdownDocument objects
        top_k: Number of top documents to return (default: 10)
        k1: Controls term frequency saturation (default: 1.2)
        b: Controls length normalization (default: 0.75)

    Returns:
        List of top-k tuples containing (document_path, bm25_score)
    """
    scores = calculate_bm25_scores(query, documents, k1=k1, b=b)
    return scores[:top_k]
