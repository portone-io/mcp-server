from typing import Literal

import yaml

from ..loader import Schema
from .utils.yaml import prune_yaml


def initialize(schema: Schema):
    def read_portone_openapi_schema_summary(version: Literal["V1", "V2"]) -> str:
        """요청된 포트원 버전에서 제공하는 OpenAPI 스키마를 요약해 문자열로 반환합니다.
        해당 요약에는 요청된 포트원 버전에서 제공하는 모든 REST API가 포함되어 있습니다.

        Args:
            version: 포트원 버전 ("V1" or "V2")

        Returns:
            OpenAPI 스키마를 최대 depth 3으로 요약한 YAML 형식의 문자열을 반환합니다.
        """
        # Get the parsed YAML data from the schema
        if version == "V2":
            yaml_data = schema.openapi_v2_yml
        elif version == "V1":
            yaml_data = schema.openapi_v1_yml
        else:
            return f"Error: Invalid version '{version}'. You need to specify 'V1' or 'V2'."

        # Prune the YAML data
        pruned_data = prune_yaml(yaml_data, max_depth=3)

        # Convert the pruned data back to a YAML string
        return yaml.dump(pruned_data, default_flow_style=False, sort_keys=False, allow_unicode=True)

    return read_portone_openapi_schema_summary
