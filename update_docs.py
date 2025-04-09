# /// script
# requires-python = ">=3.12"
# dependencies = [
#     "pyyaml",
#     "requests",
# ]
# ///
import os
import shutil
import subprocess
from pathlib import Path
from typing import Any

import requests
import yaml


def run_docs_for_llms(
    repo_path: str,
    node_version: int,
) -> Path:
    """
    Run 'pnpm docs-for-llms' in the developers.portone.io repository

    Args:
        developers_repo_path: Path to the developers.portone.io repository

    Returns:
        Path to the generated docs-for-llms directory
    """
    print(f"Running 'pnpm docs-for-llms' in {repo_path}...")

    # Ensure the path exists and is a directory
    dev_repo = Path(repo_path)
    if not dev_repo.exists() or not dev_repo.is_dir():
        raise ValueError(f"The provided path '{repo_path}' does not exist or is not a directory")

    # Check if package.json exists to validate it's likely the correct repository
    if not (dev_repo / "package.json").exists():
        raise ValueError(f"The provided path '{repo_path}' does not appear to be a valid repository (no package.json found)")

    # Run nvm, corepack, and pnpm commands in a single shell command
    try:
        # Create a shell command that sources NVM, sets Node.js version, enables corepack, and runs pnpm
        # We need to source NVM first because it's a shell function, not a standalone executable
        shell_command = f'. "$NVM_DIR/nvm.sh" && nvm use {node_version} && corepack enable && pnpm install && pnpm docs-for-llms'

        # Run the combined shell command, inheriting environment variables
        subprocess.run(shell_command, cwd=str(dev_repo), check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, shell=True, env=os.environ)
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        print(f"stdout: {e.stdout}")
        print(f"stderr: {e.stderr}")
        raise

    # Return the path to the generated docs directory
    generated_docs_path = dev_repo / "docs-for-llms"
    if not generated_docs_path.exists():
        raise FileNotFoundError(f"Expected generated docs at {generated_docs_path}, but directory was not found")

    return generated_docs_path


def fetchAndSave(url: str, target_path: Path, frontmatter: dict[str, Any] | None):
    """
    Fetch content from a URL and save it to the specified path

    Args:
        url: The URL to fetch content from
        target_path: The path where the content should be saved
        frontmatter: The yaml frontmatter to add to the file
    """

    print(f"Fetching content from {url}...")
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()  # Raise an exception for HTTP errors

        # Create parent directories if they don't exist
        target_path.parent.mkdir(parents=True, exist_ok=True)

        # Write the content to the file with frontmatter
        with open(target_path, "wb") as f:
            # If frontmatter is provided, add it before the content
            if frontmatter:
                # Convert frontmatter to YAML format
                frontmatter_yaml = yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True, sort_keys=False)
                # Create the frontmatter block with --- delimiters
                frontmatter_block = f"---\n{frontmatter_yaml}---\n\n".encode("utf-8")
                f.write(frontmatter_block)

            # Write the response content
            f.write(response.content)

        print(f"Content saved to {target_path}")
    except requests.RequestException as e:
        print(f"Error fetching content from {url}: {e}")


def update_server_sdk_docs(target_docs_dir: Path):
    fetchAndSave(
        url="https://raw.githubusercontent.com/portone-io/server-sdk/refs/heads/main/javascript/README.md",
        target_path=target_docs_dir / "sdk" / "ko" / "v2-server-sdk" / "javascript.md",
        frontmatter={
            "title": "포트원 V2 JavaScript, TypeScript 서버 SDK",
            "description": "JavaScript, TypeScript를 위한 포트원 V2 서버 SDK 사용 방법을 안내합니다.",
            "targetVersions": ["v2"],
        },
    )

    fetchAndSave(
        url="https://raw.githubusercontent.com/portone-io/server-sdk/refs/heads/main/jvm/README.md",
        target_path=target_docs_dir / "sdk" / "ko" / "v2-server-sdk" / "jvm.md",
        frontmatter={
            "title": "포트원 V2 JVM 서버 SDK",
            "description": "JVM 환경(Java, Kotlin, Scala 등)을 위한 포트원 V2 서버 SDK 사용 방법을 안내합니다.",
            "targetVersions": ["v2"],
        },
    )

    fetchAndSave(
        url="https://raw.githubusercontent.com/portone-io/server-sdk/refs/heads/main/python/README.md",
        target_path=target_docs_dir / "sdk" / "ko" / "v2-server-sdk" / "python.md",
        frontmatter={
            "title": "포트원 V2 Python 서버 SDK",
            "description": "Python을 위한 포트원 V2 서버 SDK 사용 방법을 안내합니다.",
            "targetVersions": ["v2"],
        },
    )


def update_mobile_sdk_docs(target_docs_dir: Path):
    fetchAndSave(
        url="https://raw.githubusercontent.com/portone-io/android-sdk/refs/heads/main/README.md",
        target_path=target_docs_dir / "sdk" / "ko" / "v2-mobile-sdk" / "android.md",
        frontmatter={
            "title": "포트원 V2 Android 모바일 SDK",
            "description": "Android를 위한 포트원 V2 모바일 SDK 사용 방법을 안내합니다.",
            "targetVersions": ["v2"],
        },
    )

    fetchAndSave(
        url="https://raw.githubusercontent.com/portone-io/react-native-sdk/refs/heads/main/README.md",
        target_path=target_docs_dir / "sdk" / "ko" / "v2-mobile-sdk" / "react-native.md",
        frontmatter={
            "title": "포트원 V2 React Native 모바일 SDK",
            "description": "React Native를 위한 포트원 V2 모바일 SDK 사용 방법을 안내합니다.",
            "targetVersions": ["v2"],
        },
    )


def update_mcp_docs(developers_repo_path: str, help_repo_path: str):
    """
    Update the MCP server documentation with the latest from developers.portone.io

    Args:
        developers_repo_path: Path to the developers.portone.io repository
    """
    # Get the current script's directory
    script_dir = Path(os.path.dirname(os.path.abspath(__file__)))

    # Define the target docs directory
    target_docs_dir = script_dir / "src" / "portone_mcp_server" / "resources" / "docs"

    # Remove the existing docs directory
    print(f"Removing existing docs directory at {target_docs_dir}...")
    if target_docs_dir.exists():
        shutil.rmtree(target_docs_dir)

    # Create the parent directory if it doesn't exist
    target_docs_dir.parent.mkdir(parents=True, exist_ok=True)

    # Run the docs-for-llms command and get the path to the generated docs
    generated_dev_docs_path = run_docs_for_llms(repo_path=developers_repo_path, node_version=23)

    # Copy the generated docs to the target directory
    print(f"Copying new docs from {generated_dev_docs_path} to {target_docs_dir}...")
    shutil.copytree(generated_dev_docs_path, target_docs_dir)

    # Run the docs-for-llms command and get the path to the generated docs
    generated_help_docs_path = run_docs_for_llms(repo_path=help_repo_path, node_version=20)

    # Copy the generated docs to the target directory
    print(f"Copying new docs from {generated_help_docs_path} to {target_docs_dir}...")
    shutil.copytree(generated_help_docs_path, target_docs_dir / "help")

    update_server_sdk_docs(target_docs_dir)
    update_mobile_sdk_docs(target_docs_dir)

    print("Documentation update completed successfully!")


def get_repo_path(env_var_name: str, prompt_message: str) -> str:
    """
    Get a repository path from environment variable or user input

    Args:
        env_var_name: Name of the environment variable to check
        prompt_message: Message to display when prompting the user

    Returns:
        The repository path
    """
    # Check if the path is provided as an environment variable
    repo_path = os.environ.get(env_var_name, "")

    # If not found in environment variables, prompt the user
    if not repo_path:
        print(prompt_message)
        repo_path = input().strip()

    # Expand the tilde (~) to the user's home directory if present
    if repo_path.startswith("~"):
        repo_path = os.path.expanduser(repo_path)

    return repo_path


def main():
    # Get repository paths
    developers_repo_path = get_repo_path("DEVELOPERS_PORTONE_IO_PATH", "Enter the path to the local developers.portone.io repository:")

    help_repo_path = get_repo_path("HELP_PORTONE_IO_PATH", "Enter the path to the local help.portone.io repository:")

    update_mcp_docs(developers_repo_path, help_repo_path)


if __name__ == "__main__":
    main()
