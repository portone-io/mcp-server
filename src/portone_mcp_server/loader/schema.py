import importlib.resources
from dataclasses import dataclass
from typing import Any

import yaml


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
    openapi_v1_yml: Any  # Parsed YAML content
    openapi_v2_json: SchemaFile
    openapi_v2_yml: Any  # Parsed YAML content
    browser_sdk_v2_yml: Any  # Parsed YAML content
    graphql_v2: SchemaFile


def load_schema(package_name: str) -> Schema:
    """
    Load all schema files from the schema package and parse YAML content.

    Args:
        package_name: Name of the package containing schema files

    Returns:
        Schema object containing schema files with YAML files parsed
    """
    # Create empty SchemaFile for non-YAML files
    empty_file = SchemaFile(path="", content="", file_type="")
    schema = Schema(
        openapi_v1_json=empty_file,
        openapi_v1_yml=None,
        openapi_v2_json=empty_file,
        openapi_v2_yml=None,
        browser_sdk_v2_yml=None,
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

            # Create schema file or parse YAML content
            if file_type.lower() in ["yml", "yaml"]:
                # Parse YAML content
                parsed_content = yaml.safe_load(content)
                if rel_path in file_map:
                    setattr(schema, file_map[rel_path], parsed_content)
            else:
                # For other types, keep as SchemaFile
                schema_file = SchemaFile(path=rel_path, content=content, file_type=file_type)
                if rel_path in file_map:
                    setattr(schema, file_map[rel_path], schema_file)

    except Exception as e:
        print(f"Error loading schema package '{package_name}': {e}")

    return schema
