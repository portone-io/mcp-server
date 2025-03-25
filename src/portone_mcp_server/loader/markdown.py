import importlib.resources
import re
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any, Dict, List, Optional

import yaml


@dataclass
class Frontmatter:
    """Class representing the frontmatter of a markdown document."""

    title: Optional[str] = None
    description: Optional[str] = None
    targetVersions: Optional[List[str]] = None
    releasedAt: Optional[datetime] = None
    writtenAt: Optional[datetime] = None
    author: Optional[str] = None
    date: Optional[datetime] = None
    tags: Optional[List[str]] = None
    # Additional fields can be stored here
    additional_fields: Dict[str, Any] = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: Optional[Dict[str, Any]]) -> Optional["Frontmatter"]:
        """Create a Frontmatter instance from a dictionary."""
        if data is None:
            return None

        # Extract known fields
        known_fields = {
            "title",
            "description",
            "targetVersions",
            "releasedAt",
            "writtenAt",
            "author",
            "date",
            "tags",
        }

        # Create kwargs for known fields
        kwargs = {}
        additional_fields = {}

        for key, value in data.items():
            if key in known_fields:
                kwargs[key] = value
            else:
                additional_fields[key] = value

        kwargs["additional_fields"] = additional_fields
        return cls(**kwargs)


@dataclass
class MarkdownDocument:
    """Class representing a parsed markdown document with optional frontmatter."""

    path: str
    content: str
    frontmatter: Optional[Frontmatter] = None


def load_markdown_docs(
    package_name: str,
    exclude_files: List[str] = ["v1-docs-full.md", "v2-docs-full.md"],
) -> Dict[str, MarkdownDocument]:
    """
    Load all markdown content from the package, excluding specified files.
    If a markdown file has frontmatter, it will be parsed as metadata.

    Args:
        package_name: Name of the package to load documents from
        exclude_files: List of filenames to exclude (e.g., ["v1-docs-full.md", "v2-docs-full.md"])

    Returns:
        Dictionary with relative path as key and MarkdownDocument as value
    """
    result_dict = {}
    root = importlib.resources.files(package_name)

    # Find all markdown files recursively - returns (resource, rel_path) tuples
    for path, rel_path in walk_resources(root):
        # Skip files that are in the exclude list or not markdown
        if path.name in exclude_files or not path.name.lower().endswith(".md"):
            continue

        # Read content and parse markdown
        content = path.read_text(encoding="utf-8")
        parsed_doc = parse_markdown_content(content)

        # Create MarkdownDocument and add to result
        doc = MarkdownDocument(
            path=rel_path,
            content=parsed_doc.content,
            frontmatter=parsed_doc.frontmatter,
        )
        result_dict[rel_path] = doc

    return result_dict


def walk_resources(resource_path):
    """
    Walk through resource path recursively, yielding tuples of (resource, relative_path).

    Args:
        resource_path: The resource path to walk

    Yields:
        Tuples of (resource, relative_path)
    """

    # Nested function to handle recursion with relative paths
    def _walk_with_rel_path(current_path, rel_path=""):
        if not current_path.is_dir():
            # For files, yield the resource and its relative path
            yield (current_path, rel_path or current_path.name)
            return

        # Process directory contents
        for item in current_path.iterdir():
            # Calculate the new relative path
            item_rel_path = f"{rel_path}/{item.name}" if rel_path else item.name

            if item.is_dir():
                # Recursively process directories
                yield from _walk_with_rel_path(item, item_rel_path)
            else:
                # Yield files with their relative paths
                yield (item, item_rel_path)

    # Start traversal from the root
    yield from _walk_with_rel_path(resource_path)


@dataclass
class ParsedMarkdown:
    """Class representing the result of parsing a markdown file."""

    content: str
    frontmatter: Optional[Frontmatter] = None


def parse_markdown_content(content: str) -> ParsedMarkdown:
    """
    Parse markdown content and extract its frontmatter metadata if present.

    Args:
        content: Markdown content as string

    Returns:
        ParsedMarkdown object containing the content and optional metadata
    """
    # Check for frontmatter (delimited by --- at the start of the file)
    frontmatter_match = re.match(r"^---\n(.+?)\n---\n(.*)$", content, re.DOTALL)

    if frontmatter_match:
        # Extract frontmatter and content
        frontmatter_text = frontmatter_match.group(1)
        content_text = frontmatter_match.group(2)

        # Parse frontmatter as YAML
        try:
            frontmatter_dict = yaml.safe_load(frontmatter_text)
            frontmatter = Frontmatter.from_dict(frontmatter_dict)
            return ParsedMarkdown(content=content_text.strip(), frontmatter=frontmatter)
        except yaml.YAMLError as e:
            print(f"Error parsing frontmatter: {e}")
            return ParsedMarkdown(content=content)

    # No frontmatter found
    return ParsedMarkdown(content=content)
