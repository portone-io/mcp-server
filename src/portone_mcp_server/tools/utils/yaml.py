from typing import Any


def prune_yaml(data: Any, max_depth: int) -> Any:
    """Prune a YAML data structure to a specified maximum depth.

    Args:
        data: The YAML data structure to prune
        max_depth: The maximum depth to allow

    Returns:
        The pruned YAML data structure
    """

    def _prune_yaml(data: Any, max_depth: int, current_depth: int) -> Any:
        # Base case: reached max depth or data is a primitive type
        if current_depth >= max_depth or data is None or isinstance(data, (str, int, float, bool)):
            return data

        # Handle dictionaries
        if isinstance(data, dict):
            pruned_dict = {}
            for key, value in data.items():
                if current_depth == max_depth - 1:
                    # At the last allowed depth, just indicate the type of nested data
                    if isinstance(value, dict):
                        pruned_dict[key] = "<dict with {} keys>".format(len(value))
                    elif isinstance(value, list):
                        pruned_dict[key] = "<list with {} items>".format(len(value))
                    else:
                        pruned_dict[key] = value
                else:
                    # Recurse for nested structures
                    pruned_dict[key] = _prune_yaml(value, max_depth, current_depth + 1)
            return pruned_dict

        # Handle lists
        if isinstance(data, list):
            if current_depth == max_depth - 1:
                # At the last allowed depth, summarize the list
                return ["<list with {} items>".format(len(data))]
            else:
                # Recurse for each item in the list
                return [_prune_yaml(item, max_depth, current_depth + 1) for item in data]

        # Handle any other types
        return str(data)

    return _prune_yaml(data, max_depth, current_depth=0)


def sub_yaml(data: Any, path: list[str]) -> Any:
    """Navigate through a nested YAML data structure using a path.

    Args:
        data: The YAML data structure to navigate
        path: A list of string keys/indices to follow through the data structure

    Returns:
        The sub-data found at the specified path, or None if the path is invalid

    Examples:
        >>> data = {'a': {'b': {'c': 42}}}
        >>> sub_yaml(data, ['a', 'b', 'c'])
        42

        >>> data = {'items': [{'name': 'first'}, {'name': 'second'}]}
        >>> sub_yaml(data, ['items', '1', 'name'])
        'second'
    """
    if not path or data is None:
        return data

    current = data
    for segment in path:
        # Handle numeric indices for lists
        if isinstance(current, list) and segment.isdigit():
            index = int(segment)
            if 0 <= index < len(current):
                current = current[index]
            else:
                return None  # Index out of range
        # Handle dictionary keys
        elif isinstance(current, dict) and segment in current:
            current = current[segment]
        else:
            return None  # Path segment not found

    return current
