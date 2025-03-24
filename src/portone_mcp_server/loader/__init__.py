from dataclasses import dataclass
from typing import Dict

from .markdown import MarkdownDocument, load_markdown_docs
from .schema import Schema, load_schema


@dataclass
class Documents:
    """Class representing all documents and schema files."""

    readme: MarkdownDocument
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
        Documents object containing README.md, all markdown files, and schema files
    """
    # Load all markdown docs including README.md
    markdown_docs = load_markdown_docs(docs_package)

    # Find README.md in the docs directory
    readme = markdown_docs.get("README.md")

    # If README.md wasn't found, create an empty one
    if readme is None:
        readme = MarkdownDocument(path="README.md", content="", frontmatter=None)

    # Load schema files
    schema = load_schema(schema_package)

    # Initialize Documents with the readme
    documents = Documents(readme=readme, markdown_docs=markdown_docs, schema=schema)

    return documents
