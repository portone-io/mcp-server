import os
import re
import yaml
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Any


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
    docs_dir: str = "docs", exclude_files: List[str] = []
) -> List[MarkdownDocument]:
    """
    Load all markdown content from the docs directory, excluding specified files.
    If a markdown file has frontmatter, it will be parsed as metadata.

    Args:
        docs_dir: Path to the docs directory
        exclude_files: List of filenames to exclude (e.g., ["v1-docs-full.md", "v2-docs-full.md"])

    Returns:
        List of MarkdownDocument containing the markdown content and metadata
    """
    exclude_files.extend(["v1-docs-full.md", "v2-docs-full.md", "README.md"])

    docs_path = Path(docs_dir)
    if not docs_path.exists() or not docs_path.is_dir():
        raise ValueError(f"Directory '{docs_dir}' does not exist or is not a directory")

    markdown_files = []

    # Find all markdown files recursively
    for root, _, files in os.walk(docs_path):
        for file in files:
            if file.lower().endswith(".md") and file not in exclude_files:
                file_path = Path(root) / file
                markdown_files.append(file_path)

    result = []

    for file_path in markdown_files:
        parsed_doc = parse_markdown_file(file_path)

        # Create relative path from docs directory
        relative_path = file_path.relative_to(docs_path)

        # Create a MarkdownDocument with the parsed content
        doc = MarkdownDocument(
            path=str(relative_path),
            content=parsed_doc.content,
            frontmatter=parsed_doc.frontmatter,
        )

        result.append(doc)

    return result


@dataclass
class ParsedMarkdown:
    """Class representing the result of parsing a markdown file."""

    content: str
    frontmatter: Optional[Frontmatter] = None


def parse_markdown_file(file_path: Path) -> ParsedMarkdown:
    """
    Parse a markdown file and extract its content and frontmatter metadata if present.

    Args:
        file_path: Path to the markdown file

    Returns:
        ParsedMarkdown object containing the content and optional metadata
    """
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

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
            print(f"Error parsing frontmatter in {file_path}: {e}")
            return ParsedMarkdown(content=content)

    # No frontmatter found
    return ParsedMarkdown(content=content)


@dataclass
class SchemaFile:
    """Class representing a schema file."""

    path: str  # Relative path from schema directory
    content: str  # Raw content of the schema file
    file_type: str  # File extension/type (json, yml, graphql)


@dataclass
class Schema:
    """Class representing all schema files."""

    openapi_v1_json: SchemaFile
    openapi_v1_yml: SchemaFile
    openapi_v2_json: SchemaFile
    openapi_v2_yml: SchemaFile
    graphql_v2: SchemaFile
    # Additional schema files can be stored here
    additional_schemas: Dict[str, SchemaFile] = field(default_factory=dict)


@dataclass
class Documents:
    """Class representing all documents and schema files."""

    readme: MarkdownDocument
    markdown_docs: Dict[str, MarkdownDocument] = field(default_factory=dict)
    schema: Schema = field(
        default_factory=lambda: Schema(
            openapi_v1_json=SchemaFile(path="", content="", file_type=""),
            openapi_v1_yml=SchemaFile(path="", content="", file_type=""),
            openapi_v2_json=SchemaFile(path="", content="", file_type=""),
            openapi_v2_yml=SchemaFile(path="", content="", file_type=""),
            graphql_v2=SchemaFile(path="", content="", file_type=""),
        )
    )


def load_all(
    docs_dir: str = "docs", schema_dir: str = "docs/schema", root_dir: str = "."
) -> Documents:
    """
    Load all documents and schema files.

    Args:
        docs_dir: Path to the docs directory
        schema_dir: Path to the schema directory
        root_dir: Path to the root directory (for README.md)

    Returns:
        Documents object containing README.md, all markdown files, and schema files
    """
    # Load README.md
    readme_path = Path(root_dir) / "README.md"
    if readme_path.exists() and readme_path.is_file():
        parsed_readme = parse_markdown_file(readme_path)
        readme_doc = MarkdownDocument(
            path="README.md",
            content=parsed_readme.content,
            frontmatter=parsed_readme.frontmatter,
        )
    else:
        # Create an empty README document if it doesn't exist
        readme_doc = MarkdownDocument(path="README.md", content="", frontmatter=None)

    # Initialize Documents with the readme
    documents = Documents(readme=readme_doc)

    # Load markdown docs (excluding README.md) into a dictionary
    markdown_docs_list = load_markdown_docs(docs_dir)
    for doc in markdown_docs_list:
        documents.markdown_docs[doc.path] = doc

    # Load schema files
    documents.schema = load_schema(schema_dir)

    return documents


def load_schema(schema_dir: str = "docs/schema") -> Schema:
    """
    Load all schema files from the schema directory.

    Args:
        schema_dir: Path to the schema directory

    Returns:
        Schema object containing all schema files
    """
    schema_path = Path(schema_dir)
    if not schema_path.exists() or not schema_path.is_dir():
        raise ValueError(
            f"Directory '{schema_dir}' does not exist or is not a directory"
        )

    # Create empty SchemaFile instances for required fields
    empty_schema_file = SchemaFile(path="", content="", file_type="")

    schema = Schema(
        openapi_v1_json=empty_schema_file,
        openapi_v1_yml=empty_schema_file,
        openapi_v2_json=empty_schema_file,
        openapi_v2_yml=empty_schema_file,
        graphql_v2=empty_schema_file,
    )

    # Find all schema files in the directory (recursive)
    for file_path in schema_path.glob("**/*"):
        if file_path.is_file():
            relative_path = file_path.relative_to(schema_path)
            file_type = file_path.suffix.lstrip(".")

            # Handle files with no extension (like graphql)
            if file_type == "":
                file_type = file_path.name

            # Read file content
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            schema_file = SchemaFile(
                path=str(relative_path), content=content, file_type=file_type
            )

            # Map to specific schema attributes based on filename
            if file_path.name == "v1.openapi.json":
                schema.openapi_v1_json = schema_file
            elif file_path.name == "v1.openapi.yml":
                schema.openapi_v1_yml = schema_file
            elif file_path.name == "v2.openapi.json":
                schema.openapi_v2_json = schema_file
            elif file_path.name == "v2.openapi.yml":
                schema.openapi_v2_yml = schema_file
            elif file_path.name == "v2.graphql":
                schema.graphql_v2 = schema_file
            else:
                # Store any additional schema files
                schema.additional_schemas[file_path.name] = schema_file

    return schema


if __name__ == "__main__":
    # Example usage of load_all
    all_docs = load_all()
    print(f"Loaded {len(all_docs.markdown_docs)} markdown documents as a dictionary")

    # Display README.md info
    print("\nREADME.md:")
    if all_docs.readme.frontmatter:
        print(
            f"  Title: {all_docs.readme.frontmatter.title if all_docs.readme.frontmatter.title else 'Not specified'}"
        )
    # Only show content preview if there is content
    if all_docs.readme.content:
        print(f"  Content preview: {all_docs.readme.content[:200]}...")
    else:
        print("  No content available")

    # Try to find a blog post with rich frontmatter
    blog_post = None
    for path, doc in all_docs.markdown_docs.items():
        if (
            doc.frontmatter is not None
            and path.startswith("blog/")
            and doc.frontmatter.author is not None
        ):
            blog_post = doc
            break

    # If no blog post found, find any document with frontmatter
    frontmatter_doc = blog_post
    if frontmatter_doc is None:
        for path, doc in all_docs.markdown_docs.items():
            if doc.frontmatter is not None:
                frontmatter_doc = doc
                break

    if frontmatter_doc:
        print(f"\nExample document with frontmatter: {frontmatter_doc.path}")
        print("Frontmatter:")
        if frontmatter_doc.frontmatter:
            print(
                f"  Title: {frontmatter_doc.frontmatter.title if frontmatter_doc.frontmatter.title else 'Not specified'}"
            )
            print(
                f"  Description: {frontmatter_doc.frontmatter.description if frontmatter_doc.frontmatter.description else 'Not specified'}"
            )
            if frontmatter_doc.frontmatter.targetVersions:
                print(
                    f"  Target Versions: {frontmatter_doc.frontmatter.targetVersions}"
                )
            if frontmatter_doc.frontmatter.author:
                print(f"  Author: {frontmatter_doc.frontmatter.author}")
            if frontmatter_doc.frontmatter.date:
                print(f"  Date: {frontmatter_doc.frontmatter.date}")
            if frontmatter_doc.frontmatter.tags:
                print(f"  Tags: {frontmatter_doc.frontmatter.tags}")
            if frontmatter_doc.frontmatter.additional_fields:
                print(
                    f"  Additional Fields: {frontmatter_doc.frontmatter.additional_fields}"
                )
        print(f"Content preview: {frontmatter_doc.content[:200]}...")
    else:
        # Print the first document as a fallback
        if all_docs.markdown_docs:
            first_path = next(iter(all_docs.markdown_docs))
            first_doc = all_docs.markdown_docs[first_path]
            print(f"\nExample document: {first_path}")
            if first_doc.frontmatter is not None:
                print(f"Frontmatter: {first_doc.frontmatter}")
            print(f"Content preview: {first_doc.content[:200]}...")

    # Display schema info
    schema = all_docs.schema
    print("\nLoaded schema files:")
    # Check if schema files have content (non-empty path means they were found)
    if schema.openapi_v1_json.path:
        print(f"  OpenAPI v1 (JSON): {schema.openapi_v1_json.path}")
    if schema.openapi_v1_yml.path:
        print(f"  OpenAPI v1 (YAML): {schema.openapi_v1_yml.path}")
    if schema.openapi_v2_json.path:
        print(f"  OpenAPI v2 (JSON): {schema.openapi_v2_json.path}")
    if schema.openapi_v2_yml.path:
        print(f"  OpenAPI v2 (YAML): {schema.openapi_v2_yml.path}")
    if schema.graphql_v2.path:
        print(f"  GraphQL v2: {schema.graphql_v2.path}")
    if schema.additional_schemas:
        print(f"  Additional schemas: {list(schema.additional_schemas.keys())}")
