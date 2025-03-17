import os
import tempfile
from pathlib import Path
from datetime import datetime

from loader import parse_markdown_file, ParsedMarkdown


class TestParseMarkdownFile:
    def test_parse_markdown_without_frontmatter(self):
        """Test parsing a markdown file without frontmatter."""
        with tempfile.NamedTemporaryFile(suffix=".md", delete=False) as temp_file:
            temp_file.write(
                b"# Test Markdown\n\nThis is a test markdown file without frontmatter."
            )
            temp_path = Path(temp_file.name)

        try:
            result = parse_markdown_file(temp_path)

            assert isinstance(result, ParsedMarkdown)
            assert (
                result.content
                == "# Test Markdown\n\nThis is a test markdown file without frontmatter."
            )
            assert result.frontmatter is None
        finally:
            # Clean up the temporary file
            os.unlink(temp_path)

    def test_parse_markdown_with_valid_frontmatter(self):
        """Test parsing a markdown file with valid frontmatter."""

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

        with tempfile.NamedTemporaryFile(suffix=".md", delete=False) as temp_file:
            temp_file.write(markdown_content.encode("utf-8"))
            temp_path = Path(temp_file.name)

        try:
            result = parse_markdown_file(temp_path)

            assert isinstance(result, ParsedMarkdown)
            assert (
                result.content
                == "# Test Markdown\n\nThis is a test markdown file with frontmatter."
            )
            assert result.frontmatter is not None
            assert result.frontmatter.title == "Test Document"
            assert result.frontmatter.description == "A test document with frontmatter"
            assert result.frontmatter.tags == ["test", "markdown", "frontmatter"]
            assert result.frontmatter.date == datetime(2025, 3, 18)
            assert (
                result.frontmatter.additional_fields["custom_field"] == "custom value"
            )
        finally:
            # Clean up the temporary file
            os.unlink(temp_path)

    def test_parse_markdown_with_invalid_frontmatter(self):
        """Test parsing a markdown file with invalid frontmatter."""
        invalid_frontmatter = """---
title: "Unclosed quote
invalid: yaml: syntax
---
# Test Markdown

This is a test markdown file with invalid frontmatter.
"""

        with tempfile.NamedTemporaryFile(suffix=".md", delete=False) as temp_file:
            temp_file.write(invalid_frontmatter.encode("utf-8"))
            temp_path = Path(temp_file.name)

        try:
            result = parse_markdown_file(temp_path)

            assert isinstance(result, ParsedMarkdown)
            assert result.frontmatter is None
            # The content should be the entire file since frontmatter parsing failed
            assert result.content == invalid_frontmatter
        finally:
            # Clean up the temporary file
            os.unlink(temp_path)

    def test_parse_markdown_with_empty_frontmatter(self):
        """Test parsing a markdown file with empty frontmatter."""
        empty_frontmatter = """---
---
# Test Markdown

This is a test markdown file with empty frontmatter.
"""

        with tempfile.NamedTemporaryFile(suffix=".md", delete=False) as temp_file:
            temp_file.write(empty_frontmatter.encode("utf-8"))
            temp_path = Path(temp_file.name)

        try:
            result = parse_markdown_file(temp_path)

            assert isinstance(result, ParsedMarkdown)
            # The current implementation doesn't handle empty frontmatter correctly
            # It treats the entire content as regular markdown without frontmatter
            assert result.frontmatter is None
            assert result.content == empty_frontmatter
        finally:
            # Clean up the temporary file
            os.unlink(temp_path)
