import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Schema } from "../types.js";
import { getFromYamlPath, stringifyYaml } from "./utils/yaml.js";

export const name = "read_portone_openapi_schema";

export const config = {
  title: "포트원 OpenAPI 스키마 읽기",
  description: `요청된 포트원 버전에서 제공하는 OpenAPI 스키마 내 특정 path의 데이터를 반환합니다.`,
  inputSchema: {
    version: z.enum(["V1", "V2"]).describe("포트원 버전"),
    yaml_path: z
      .array(z.string())
      .describe(
        "OpenAPI 스키마 내의 yaml path (list of strings)\n키 또는 인덱스(0부터 시작)를 포함할 수 있습니다.",
      ),
  },
  outputSchema: {
    result: z
      .string()
      .describe(" OpenAPI 스키마를 최대 depth 3으로 요약한 YAML 형식의 문자열"),
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
        isError: true,
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
        isError: true,
      };
    }

    try {
      const yamlOutput = stringifyYaml(result);
      const structuredContent = {
        result: yamlOutput,
      };

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(structuredContent, null, 2),
          },
        ],
        structuredContent,
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error formatting output: ${error}`,
          },
        ],
        isError: true,
      };
    }
  };
}
