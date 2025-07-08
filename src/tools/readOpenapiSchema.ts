import type { Schema } from "../types.js";

export function getTool(schema: Schema) {
  return {
    name: "read_openapi_schema",
    description: "OpenAPI 스키마 전체를 조회합니다.",
    inputSchema: {
      type: "object",
      properties: {
        version: {
          type: "string",
          enum: ["v1", "v2"],
          description: "API 버전",
        },
        format: {
          type: "string",
          enum: ["json", "yaml"],
          description: "스키마 포맷",
        },
      },
      required: ["version", "format"],
    },
  };
}

export async function handler(
  schema: Schema,
  args: { version: "v1" | "v2"; format: "json" | "yaml" },
): Promise<string> {
  const { version, format } = args;

  if (version === "v1") {
    if (format === "json") {
      return schema.openapiV1Json.content;
    } else {
      return JSON.stringify(schema.openapiV1Yml, null, 2);
    }
  } else {
    if (format === "json") {
      return schema.openapiV2Json.content;
    } else {
      return JSON.stringify(schema.openapiV2Yml, null, 2);
    }
  }
}
