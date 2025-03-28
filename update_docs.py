#!/usr/bin/env python3

import os
import shutil
import subprocess
import sys
from pathlib import Path


def run_docs_for_llms(developers_repo_path):
    """
    Run 'pnpm docs-for-llms' in the developers.portone.io repository

    Args:
        developers_repo_path: Path to the developers.portone.io repository

    Returns:
        Path to the generated docs-for-llms directory
    """
    print(f"Running 'pnpm docs-for-llms' in {developers_repo_path}...")

    # Ensure the path exists and is a directory
    dev_repo = Path(developers_repo_path)
    if not dev_repo.exists() or not dev_repo.is_dir():
        raise ValueError(f"The provided path '{developers_repo_path}' does not exist or is not a directory")

    # Check if package.json exists to validate it's likely the correct repository
    if not (dev_repo / "package.json").exists():
        raise ValueError(f"The provided path '{developers_repo_path}' does not appear to be a valid repository (no package.json found)")

    # Run the pnpm command
    try:
        subprocess.run(["pnpm", "docs-for-llms"], cwd=str(dev_repo), check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    except subprocess.CalledProcessError as e:
        print(f"Error running 'pnpm docs-for-llms': {e}")
        print(f"stdout: {e.stdout}")
        print(f"stderr: {e.stderr}")
        raise

    # Return the path to the generated docs directory
    generated_docs_path = dev_repo / "docs-for-llms"
    if not generated_docs_path.exists():
        raise FileNotFoundError(f"Expected generated docs at {generated_docs_path}, but directory was not found")

    return generated_docs_path


def update_mcp_docs(developers_repo_path):
    """
    Update the MCP server documentation with the latest from developers.portone.io

    Args:
        developers_repo_path: Path to the developers.portone.io repository
    """
    # Get the current script's directory
    script_dir = Path(os.path.dirname(os.path.abspath(__file__)))

    # Define the target docs directory
    target_docs_dir = script_dir / "src" / "portone_mcp_server" / "resources" / "docs"

    # Run the docs-for-llms command and get the path to the generated docs
    generated_docs_path = run_docs_for_llms(developers_repo_path)

    # Remove the existing docs directory
    print(f"Removing existing docs directory at {target_docs_dir}...")
    if target_docs_dir.exists():
        shutil.rmtree(target_docs_dir)

    # Create the parent directory if it doesn't exist
    target_docs_dir.parent.mkdir(parents=True, exist_ok=True)

    # Copy the generated docs to the target directory
    print(f"Copying new docs from {generated_docs_path} to {target_docs_dir}...")
    shutil.copytree(generated_docs_path, target_docs_dir)

    print("Documentation update completed successfully!")


def main():
    # Check if the path is provided as an environment variable
    developers_repo_path = os.environ.get("DEVELOPERS_PORTONE_IO_PATH", "")

    # If not found in environment variables, prompt the user
    if not developers_repo_path:
        print("Enter the path to the local developers.portone.io repository:")
        developers_repo_path = input().strip()

        if not developers_repo_path:
            print("Error: Repository path cannot be empty", file=sys.stderr)
            sys.exit(1)

    # Expand the tilde (~) to the user's home directory if present
    if developers_repo_path.startswith("~"):
        developers_repo_path = os.path.expanduser(developers_repo_path)

    update_mcp_docs(developers_repo_path)


if __name__ == "__main__":
    main()
