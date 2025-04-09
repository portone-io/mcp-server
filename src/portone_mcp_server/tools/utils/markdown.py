import yaml

from ...loader.markdown import MarkdownDocument


def format_document_metadata(doc: MarkdownDocument) -> str:
    """
    Format a document's metadata including its essential frontmatter info into a string.

    Args:
        doc: a MarkdownDocument object

    Returns:
        Formatted string with document path, length and frontmatter fields
    """
    dict = {
        "path": doc.path,
        "contentLength": len(doc.content),
    }
    if doc.frontmatter:
        frontmatter = doc.frontmatter
        if frontmatter.title:
            dict["title"] = frontmatter.title
        if frontmatter.description:
            dict["description"] = frontmatter.description
        if frontmatter.targetVersions:
            dict["targetVersions"] = frontmatter.targetVersions

    dict_string = yaml.dump(dict, default_flow_style=False, allow_unicode=True, sort_keys=False)

    return dict_string
