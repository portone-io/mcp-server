from dataclasses import dataclass
from typing import Dict

from .markdown import MarkdownDocument, load_markdown_docs
from .schema import Schema, load_schema


@dataclass
class Documents:
    """Class representing all documents and schema files."""

    guide: str
    markdown_docs: Dict[str, MarkdownDocument]
    schema: Schema


def load_all(
    docs_package: str = "portone_mcp_server.resources",
    schema_package: str = "portone_mcp_server.resources.schema",
) -> Documents:
    """
    Load all documents and schema files.

    Args:
        docs_package: Package name for the docs
        schema_package: Package name for the schema

    Returns:
        Documents object containing guide, all markdown files, and schema files
    """
    # Load all markdown docs including guide-for-llms.md
    markdown_docs = load_markdown_docs(docs_package)

    # Find guide-for-llms.md in the docs and remove it from the dictionary.
    guide = markdown_docs.get("guide-for-llms.md")
    markdown_docs.pop("guide-for-llms.md", None)

    # If guide-for-llms.md wasn't found, raise an error
    if guide is None:
        raise ValueError("guide-for-llms.md not found in docs package")

    # Load schema files
    schema = load_schema(schema_package)

    # Initialize Documents
    documents = Documents(guide=guide.content, markdown_docs=markdown_docs, schema=schema)

    return documents
