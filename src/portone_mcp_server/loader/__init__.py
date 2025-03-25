import importlib.resources
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


def load_documents(docs_package: str) -> Documents:
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
    schema_package = docs_package + ".schema"
    schema = load_schema(schema_package)

    # Initialize Documents
    documents = Documents(readme=readme.content, markdown_docs=markdown_docs, schema=schema)

    return documents


@dataclass
class Resources:
    instructions: str
    documents: Documents


def load_resources(resources_package: str = "portone_mcp_server.resources") -> Resources:
    instructions = importlib.resources.read_text(resources_package, "instructions.md")
    documents = load_documents(resources_package + ".docs")

    return Resources(instructions=instructions, documents=documents)
