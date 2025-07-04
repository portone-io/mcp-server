from collections.abc import Mapping


def filter_out_none[Key, Value](mapping: Mapping[Key, Value]) -> dict[Key, Value]:
    return {key: value for key, value in mapping.items() if value is not None}
