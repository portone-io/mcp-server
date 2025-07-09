import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Schema } from "../types.js";
import { stringifyYaml, summarizeYaml } from "./utils/yaml.js";

export const name = "read_portone_openapi_schema_summary";

export const config = {
  title: "포트원 OpenAPI 스키마 요약",
  description: `포트원 OpenAPI 스키마의 요약을 조회합니다.
깊이 3까지의 구조만 표시하여 전체 구조를 파악하기 쉽게 합니다.

Args:
  version: API 버전 (V1 또는 V2)

Returns:
  OpenAPI 스키마의 요약 (최대 깊이 3)`,
  inputSchema: {
    version: z.enum(["V1", "V2"]).describe("API 버전"),
  },
};

export function init(schema: Schema): ToolCallback<typeof config.inputSchema> {
  return ({ version }) => {
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

    if (!schemaData) {
      return {
        content: [
          {
            type: "text",
            text: `${version} OpenAPI schema not available.`,
          },
        ],
      };
    }

    try {
      const summary = summarizeYaml(schemaData, 3);
      const yamlOutput = stringifyYaml(summary);

      return {
        content: [
          {
            type: "text",
            text: `${version} OpenAPI Schema Summary (depth 3):\n\n${yamlOutput}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error generating summary: ${error}`,
          },
        ],
      };
    }
  };
}
