import yaml from "js-yaml";
import type { Schema } from "../types.js";

export function getTool() {
  return {
    name: "read_portone_openapi_schema",
    title: "포트원 OpenAPI 스키마 읽기",
    description:
      "요청된 포트원 버전에서 제공하는 OpenAPI 스키마 내 특정 path의 데이터를 반환합니다.",
    inputSchema: {
      type: "object",
      properties: {
        version: {
          type: "string",
          enum: ["V1", "V2"],
          description: "포트원 버전",
        },
        path: {
          type: "array",
          items: {
            type: ["string", "number"],
          },
          description:
            "OpenAPI 스키마 내의 yaml path (키 또는 인덱스를 포함할 수 있음)",
        },
      },
      required: ["version"],
    },
  };
}

function traversePath(data: any, path: (string | number)[]): any {
  let current = data;
  for (const key of path) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[key];
  }
  return current;
}

function summarizeData(
  data: any,
  depth: number = 0,
  maxDepth: number = 3,
): any {
  if (depth >= maxDepth) {
    if (Array.isArray(data)) {
      return `[Array with ${data.length} items]`;
    } else if (typeof data === "object" && data !== null) {
      return `[Object with keys: ${Object.keys(data).slice(0, 5).join(", ")}${Object.keys(data).length > 5 ? "..." : ""}]`;
    }
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => summarizeData(item, depth + 1, maxDepth));
  } else if (typeof data === "object" && data !== null) {
    const summarized: any = {};
    for (const [key, value] of Object.entries(data)) {
      summarized[key] = summarizeData(value, depth + 1, maxDepth);
    }
    return summarized;
  }

  return data;
}

export async function handler(
  schema: Schema,
  args: { version: "V1" | "V2"; path?: (string | number)[] },
): Promise<string> {
  const { version, path = [] } = args;

  let schemaData;
  if (version === "V1") {
    schemaData = schema.openapiV1Yml;
  } else {
    schemaData = schema.openapiV2Yml;
  }

  let result = traversePath(schemaData, path);

  if (result === undefined) {
    return `경로를 찾을 수 없습니다: ${path.join(" -> ")}`;
  }

  // Summarize the result
  const summarized = summarizeData(result);

  // Convert to YAML format
  try {
    return yaml.dump(summarized, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
    });
  } catch (error) {
    return JSON.stringify(summarized, null, 2);
  }
}
