import yaml

from ...loader.markdown import MarkdownDocument


def format_document_metadata(doc: MarkdownDocument, full: bool = False) -> str:
    """
    Format a document's metadata into a string.

    Args:
        doc: a MarkdownDocument object
        full: whether to include all frontmatter fields. If False, only title, description, and targetVersions are included.

    Returns:
        Formatted string with document path, length and frontmatter fields
    """

    dict = {
        "path": doc.path,
        "contentLength": len(doc.content),
    }

    if doc.frontmatter:
        frontmatter = doc.frontmatter
        if full:
            dict.update(frontmatter.all_fields_dict)
        else:
            if frontmatter.title:
                dict["title"] = frontmatter.title
            if frontmatter.description:
                dict["description"] = frontmatter.description
            if frontmatter.targetVersions:
                dict["targetVersions"] = frontmatter.targetVersions

    dict_string = yaml.dump(dict, default_flow_style=False, allow_unicode=True, sort_keys=False)

    return dict_string
