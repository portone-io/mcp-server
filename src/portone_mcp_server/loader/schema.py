import importlib.resources
from dataclasses import dataclass, field
from typing import Dict


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
    browser_sdk_v2_yml: SchemaFile
    graphql_v2: SchemaFile
    # Additional schema files can be stored here
    additional_schemas: Dict[str, SchemaFile] = field(default_factory=dict)


def load_schema(package_name: str) -> Schema:
    """
    Load all schema files from the schema package.

    Args:
        package_name: Name of the package containing schema files

    Returns:
        Schema object containing all schema files
    """
    # Create empty Schema
    empty_file = SchemaFile(path="", content="", file_type="")
    schema = Schema(
        openapi_v1_json=empty_file,
        openapi_v1_yml=empty_file,
        openapi_v2_json=empty_file,
        openapi_v2_yml=empty_file,
        browser_sdk_v2_yml=empty_file,
        graphql_v2=empty_file,
    )

    try:
        # Get schema directory files
        root = importlib.resources.files(package_name)
        if not root.is_dir():
            return schema

        # Map to correct attribute based on filename
        file_map = {
            "v1.openapi.json": "openapi_v1_json",
            "v1.openapi.yml": "openapi_v1_yml",
            "v2.openapi.json": "openapi_v2_json",
            "v2.openapi.yml": "openapi_v2_yml",
            "browser-sdk.yml": "browser_sdk_v2_yml",
            "v2.graphql": "graphql_v2",
        }

        # Process each file directly (no subdirectories in schema)
        for resource in root.iterdir():
            if not resource.is_file():
                continue

            # Get file details
            rel_path = resource.name
            file_type = rel_path.split(".")[-1] if "." in rel_path else "unknown"
            content = resource.read_text(encoding="utf-8")

            # Create schema file
            schema_file = SchemaFile(path=rel_path, content=content, file_type=file_type)

            if rel_path in file_map:
                setattr(schema, file_map[rel_path], schema_file)
            else:
                schema.additional_schemas[rel_path] = schema_file

    except Exception as e:
        print(f"Error loading schema package '{package_name}': {e}")

    return schema
