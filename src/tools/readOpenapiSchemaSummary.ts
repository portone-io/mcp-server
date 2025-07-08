import type { Schema } from "../types.js";

export function getTool(schema: Schema) {
  return {
    name: "read_openapi_schema_summary",
    description: "OpenAPI 스키마의 요약 정보를 조회합니다.",
    inputSchema: {
      type: "object",
      properties: {
        version: {
          type: "string",
          enum: ["v1", "v2"],
          description: "API 버전",
        },
      },
      required: ["version"],
    },
  };
}

export async function handler(
  schema: Schema,
  args: { version: "v1" | "v2" },
): Promise<string> {
  const { version } = args;

  const openapiSchema =
    version === "v1" ? schema.openapiV1Yml : schema.openapiV2Yml;

  if (!openapiSchema || typeof openapiSchema !== "object") {
    return `OpenAPI ${version} 스키마를 불러올 수 없습니다.`;
  }

  const paths = openapiSchema.paths || {};
  const endpoints: string[] = [];

  for (const [path, methods] of Object.entries(paths)) {
    if (typeof methods === "object" && methods !== null) {
      for (const method of Object.keys(methods)) {
        if (
          ["get", "post", "put", "patch", "delete"].includes(
            method.toLowerCase(),
          )
        ) {
          endpoints.push(`${method.toUpperCase()} ${path}`);
        }
      }
    }
  }

  const info = openapiSchema.info || {};
  const components = openapiSchema.components || {};
  const schemas = components.schemas || {};

  const lines: string[] = [
    `OpenAPI ${version} 스키마 요약`,
    "",
    `제목: ${info.title || "N/A"}`,
    `버전: ${info.version || "N/A"}`,
    `설명: ${info.description || "N/A"}`,
    "",
    `엔드포인트 수: ${endpoints.length}`,
    `스키마 수: ${Object.keys(schemas).length}`,
    "",
    "주요 엔드포인트:",
  ];

  endpoints.slice(0, 10).forEach((endpoint) => {
    lines.push(`- ${endpoint}`);
  });

  if (endpoints.length > 10) {
    lines.push(`... 그 외 ${endpoints.length - 10}개 엔드포인트`);
  }

  return lines.join("\n");
}
