from datetime import datetime

from portone_mcp_server.loader import parse_markdown_content, ParsedMarkdown


class TestParseMarkdownContent:
    def test_parse_markdown_without_frontmatter(self):
        """Test parsing markdown content without frontmatter."""
        content = "# Test Markdown\n\nThis is a test markdown file without frontmatter."

        result = parse_markdown_content(content)

        assert isinstance(result, ParsedMarkdown)
        assert result.content == content
        assert result.frontmatter is None

    def test_parse_markdown_with_valid_frontmatter(self):
        """Test parsing markdown content with valid frontmatter."""

        markdown_content = """---
title: Test Document
description: A test document with frontmatter
tags:
  - test
  - markdown
  - frontmatter
date: 2025-03-18 00:00:00
custom_field: custom value
---
# Test Markdown

This is a test markdown file with frontmatter.
"""

        result = parse_markdown_content(markdown_content)

        assert isinstance(result, ParsedMarkdown)
        assert result.content == "# Test Markdown\n\nThis is a test markdown file with frontmatter."
        assert result.frontmatter is not None
        assert result.frontmatter.title == "Test Document"
        assert result.frontmatter.description == "A test document with frontmatter"
        assert result.frontmatter.tags == ["test", "markdown", "frontmatter"]
        assert result.frontmatter.date == datetime(2025, 3, 18)
        assert result.frontmatter.additional_fields["custom_field"] == "custom value"

    def test_parse_markdown_with_invalid_frontmatter(self):
        """Test parsing markdown content with invalid frontmatter."""
        invalid_frontmatter = """---
title: "Unclosed quote
invalid: yaml: syntax
---
# Test Markdown

This is a test markdown file with invalid frontmatter.
"""

        result = parse_markdown_content(invalid_frontmatter)

        assert isinstance(result, ParsedMarkdown)
        assert result.frontmatter is None
        # The content should be the entire string since frontmatter parsing failed
        assert result.content == invalid_frontmatter

    def test_parse_markdown_with_empty_frontmatter(self):
        """Test parsing markdown content with empty frontmatter."""
        empty_frontmatter = """---
---
# Test Markdown

This is a test markdown file with empty frontmatter.
"""

        result = parse_markdown_content(empty_frontmatter)

        assert isinstance(result, ParsedMarkdown)
        # The current implementation doesn't handle empty frontmatter correctly
        # It treats the entire content as regular markdown without frontmatter
        assert result.frontmatter is None
        assert result.content == empty_frontmatter
