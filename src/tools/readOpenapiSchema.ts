import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Schema } from "../types.js";
import { getFromYamlPath, stringifyYaml } from "./utils/yaml.js";

export const name = "read_portone_openapi_schema";

export const config = {
  title: "포트원 OpenAPI 스키마 읽기",
  description: `포트원 OpenAPI 스키마의 특정 부분을 읽습니다.

Args:
  version: API 버전 (V1 또는 V2)
  yaml_path: 읽을 스키마의 YAML 경로 (예: components.schemas.Payment)

Returns:
  지정된 경로의 스키마 데이터 (YAML 형식)`,
  inputSchema: {
    version: z.enum(["V1", "V2"]).describe("API 버전"),
    yaml_path: z.string().describe("YAML 경로"),
  },
};

export function init(schema: Schema): ToolCallback<typeof config.inputSchema> {
  return ({ version, yaml_path }) => {
    let schemaData: any;

    if (version === "V1") {
      schemaData = schema.openapiV1Yml;
    } else if (version === "V2") {
      schemaData = schema.openapiV2Yml;
    } else {
      return {
        content: [
          {
            type: "text",
            text: `Invalid version: ${version}. Must be V1 or V2.`,
          },
        ],
      };
    }

    const result = getFromYamlPath(schemaData, yaml_path);

    if (result === undefined) {
      return {
        content: [
          {
            type: "text",
            text: `Path not found in ${version} OpenAPI schema: ${yaml_path}`,
          },
        ],
      };
    }

    try {
      const yamlOutput = stringifyYaml(result);
      return {
        content: [
          {
            type: "text",
            text: yamlOutput,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error formatting output: ${error}`,
          },
        ],
      };
    }
  };
}
