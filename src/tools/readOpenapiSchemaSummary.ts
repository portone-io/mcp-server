import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import type { Schema } from "../types.ts";
import { pruneYaml, stringifyYaml } from "./utils/yaml.ts";

export const name = "readPortoneOpenapiSchemaSummary";

export const config = {
  title: "포트원 OpenAPI 스키마 요약",
  description: `요청된 포트원 버전에서 제공하는 OpenAPI 스키마를 요약해 문자열로 반환합니다. 해당 요약에는 요청된 포트원 버전에서 제공하는 모든 REST API가 포함되어 있습니다.`,
  inputSchema: {
    version: z.enum(["V1", "V2"]).describe("포트원 버전"),
  },
  outputSchema: {
    result: z
      .string()
      .describe("OpenAPI 스키마를 최대 depth 3으로 요약한 YAML 형식의 문자열"),
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
        isError: true,
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
        isError: true,
      };
    }

    try {
      const pruned_data = pruneYaml(schemaData, 3);
      const yamlOutput = stringifyYaml(pruned_data);

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
            text: `Error generating summary: ${error}`,
          },
        ],
        isError: true,
      };
    }
  };
}
