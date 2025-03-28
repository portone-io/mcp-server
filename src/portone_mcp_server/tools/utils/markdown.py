from ...loader.markdown import MarkdownDocument


def format_document_metadata(doc: MarkdownDocument) -> str:
    """
    Format a document's metadata including its frontmatter into a string.

    Args:
        doc: a MarkdownDocument object

    Returns:
        Formatted string with document path, length and frontmatter fields
    """
    formatted_result = f"path: {doc.path}\n"

    # Add frontmatter fields if they exist
    if doc.frontmatter:
        # Handle title
        if doc.frontmatter.title is not None:
            formatted_result += f"title: {doc.frontmatter.title}\n"

        # Handle description
        if doc.frontmatter.description is not None:
            formatted_result += f"description: {doc.frontmatter.description}\n"

        # Handle targetVersions
        if doc.frontmatter.targetVersions is not None:
            formatted_result += f"targetVersions: {doc.frontmatter.targetVersions}\n"

        formatted_result += f"contentLength: {len(doc.content)}\n"

        # Handle releasedAt
        if doc.frontmatter.releasedAt is not None:
            formatted_result += f"releasedAt: {doc.frontmatter.releasedAt.isoformat()}\n"

        # Handle writtenAt
        if doc.frontmatter.writtenAt is not None:
            formatted_result += f"writtenAt: {doc.frontmatter.writtenAt.isoformat()}\n"

        # Handle author
        if doc.frontmatter.author is not None:
            formatted_result += f"author: {doc.frontmatter.author}\n"

        # Handle date
        if doc.frontmatter.date is not None:
            formatted_result += f"date: {doc.frontmatter.date.isoformat()}\n"

        # Handle tags
        if doc.frontmatter.tags is not None:
            formatted_result += f"tags: {doc.frontmatter.tags}\n"

        # Handle additional fields
        for key, value in doc.frontmatter.additional_fields.items():
            if value is not None:
                formatted_result += f"{key}: {value}\n"

    return formatted_result
