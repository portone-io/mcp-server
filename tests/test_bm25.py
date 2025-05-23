from portone_mcp_server.loader.markdown import Frontmatter, MarkdownDocument
from portone_mcp_server.tools.utils.bm25 import calculate_bm25_scores, get_top_documents


class TestBM25Scoring:
    """Test cases for BM25 scoring functions."""

    def test_calculate_bm25_scores_empty_documents(self):
        """Test BM25 calculation with empty document collection."""
        result = calculate_bm25_scores("test", {})
        assert result == []

    def test_calculate_bm25_scores_no_matches(self):
        """Test BM25 calculation when query doesn't match any documents."""
        documents = {
            "doc1.md": MarkdownDocument(
                path="doc1.md",
                content="This is a document about Python programming.",
            ),
            "doc2.md": MarkdownDocument(
                path="doc2.md",
                content="Another document about web development.",
            ),
        }

        result = calculate_bm25_scores("nonexistent", documents)
        assert result == []

    def test_calculate_bm25_scores_single_match(self):
        """Test BM25 calculation with a single matching document."""
        documents = {
            "doc1.md": MarkdownDocument(
                path="doc1.md",
                content="Python is a great programming language. Python is versatile.",
            ),
            "doc2.md": MarkdownDocument(
                path="doc2.md",
                content="JavaScript is used for web development.",
            ),
        }

        result = calculate_bm25_scores("Python", documents)
        assert len(result) == 1
        assert result[0][0] == "doc1.md"
        # When term appears in 1 out of 2 docs, IDF can be 0
        assert result[0][1] >= 0

    def test_calculate_bm25_scores_multiple_matches(self):
        """Test BM25 calculation with multiple matching documents."""
        documents = {
            "doc1.md": MarkdownDocument(
                path="doc1.md",
                content="Python programming is fun. Python is easy to learn.",
            ),
            "doc2.md": MarkdownDocument(
                path="doc2.md",
                content="I love Python programming.",
            ),
            "doc3.md": MarkdownDocument(
                path="doc3.md",
                content="Java is another programming language.",
            ),
        }

        result = calculate_bm25_scores("Python", documents)
        assert len(result) == 2
        # Both documents contain "Python"
        doc_paths = [r[0] for r in result]
        assert "doc1.md" in doc_paths
        assert "doc2.md" in doc_paths
        # BM25 scores can be negative when IDF is negative
        # (term appears in most documents)

    def test_calculate_bm25_scores_with_frontmatter(self):
        """Test BM25 calculation including frontmatter content."""
        frontmatter = Frontmatter(
            title="Python Tutorial",
            description="Learn Python basics",
            raw_string="---\ntitle: Python Tutorial\ndescription: Learn Python basics\n---",
        )

        documents = {
            "doc1.md": MarkdownDocument(
                path="doc1.md",
                content="This is a programming tutorial.",
                frontmatter=frontmatter,
            ),
            "doc2.md": MarkdownDocument(
                path="doc2.md",
                content="JavaScript tutorial content.",
            ),
        }

        result = calculate_bm25_scores("Python", documents)
        assert len(result) == 1
        assert result[0][0] == "doc1.md"

    def test_calculate_bm25_scores_regex_pattern(self):
        """Test BM25 calculation with regex patterns."""
        documents = {
            "doc1.md": MarkdownDocument(
                path="doc1.md",
                content="Error code: ERR-001. Another error: ERR-002.",
            ),
            "doc2.md": MarkdownDocument(
                path="doc2.md",
                content="Success message: OK-200.",
            ),
        }

        result = calculate_bm25_scores(r"ERR-\d+", documents)
        assert len(result) == 1
        assert result[0][0] == "doc1.md"

    def test_calculate_bm25_scores_invalid_regex(self):
        """Test BM25 calculation with invalid regex pattern."""
        documents = {
            "doc1.md": MarkdownDocument(
                path="doc1.md",
                content="Some content",
            ),
        }

        result = calculate_bm25_scores("[invalid(regex", documents)
        assert result == []

    def test_calculate_bm25_scores_case_insensitive(self):
        """Test that BM25 scoring is case insensitive."""
        documents = {
            "doc1.md": MarkdownDocument(
                path="doc1.md",
                content="PYTHON is great. python is fun. Python rocks!",
            ),
        }

        result = calculate_bm25_scores("python", documents)
        assert len(result) == 1
        assert result[0][0] == "doc1.md"

    def test_get_top_documents_limits_results(self):
        """Test that get_top_documents returns only top_k results."""
        documents = {}
        for i in range(20):
            documents[f"doc{i}.md"] = MarkdownDocument(
                path=f"doc{i}.md",
                content=f"Document {i} contains the word test." + " test" * i,
            )

        result = get_top_documents("test", documents, top_k=5)
        assert len(result) == 5
        # Verify ordering (documents with more "test" occurrences should rank higher)
        for i in range(len(result) - 1):
            assert result[i][1] >= result[i + 1][1]

    def test_get_top_documents_fewer_than_k(self):
        """Test get_top_documents when there are fewer matching docs than k."""
        documents = {
            "doc1.md": MarkdownDocument(
                path="doc1.md",
                content="Python programming",
            ),
            "doc2.md": MarkdownDocument(
                path="doc2.md",
                content="Java programming",
            ),
        }

        result = get_top_documents("Python", documents, top_k=10)
        assert len(result) == 1

    def test_bm25_parameters_affect_scoring(self):
        """Test that k1 and b parameters affect the scoring."""
        documents = {
            "short.md": MarkdownDocument(
                path="short.md",
                content="Python Python",
            ),
            "long.md": MarkdownDocument(
                path="long.md",
                content="Python is a programming language. " * 20 + " Python",
            ),
        }

        # Test with different b values (length normalization)
        result_b0 = calculate_bm25_scores("Python", documents, k1=1.2, b=0.0)
        result_b1 = calculate_bm25_scores("Python", documents, k1=1.2, b=1.0)

        # With b=0, document length shouldn't matter
        # With b=1, longer documents should be penalized more
        assert result_b0[0][1] != result_b1[0][1]
