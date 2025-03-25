from dataclasses import dataclass
from typing import Dict

from .markdown import MarkdownDocument, load_markdown_docs
from .schema import Schema, load_schema


@dataclass
class Documents:
    """Class representing all documents and schema files."""

    readme: str
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
        Documents object containing readme, all markdown files, and schema files
    """
    # Load all markdown docs including README.md
    markdown_docs = load_markdown_docs(docs_package)

    # Find README.md in the docs and remove it from the dictionary.
    readme = markdown_docs.get("README.md")
    markdown_docs.pop("README.md", None)

    # If README.md wasn't found, raise an error
    if readme is None:
        raise ValueError(f"README.md not found in {docs_package}")

    # Load schema files
    schema = load_schema(schema_package)

    # Initialize Documents
    documents = Documents(readme=readme.content, markdown_docs=markdown_docs, schema=schema)

    return documents
