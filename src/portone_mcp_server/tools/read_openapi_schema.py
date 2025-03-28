from typing import Literal

import yaml

from ..loader import Schema
from .utils.yaml import sub_yaml


def initialize(schema: Schema):
    def read_portone_openapi_schema(version: Literal["V1", "V2"], path: list[str]) -> str:
        """요청된 포트원 버전에서 제공하는 OpenAPI 스키마 내 특정 path의 데이터를 반환합니다.

        Args:
            version: 포트원 버전 ("V1" or "V2")
            path: OpenAPI 스키마 내의 yaml path (list of strings)
                  키 또는 인덱스(0부터 시작)를 포함할 수 있습니다.

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

        # Get the sub-data from the path
        sub_data = sub_yaml(yaml_data, path)

        # Convert the sub-data to a YAML string
        return yaml.dump(sub_data, default_flow_style=False, sort_keys=False, allow_unicode=True)

    return read_portone_openapi_schema
