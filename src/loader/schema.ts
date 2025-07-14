import { readFileSync } from "node:fs";
import { join } from "node:path";
import { load } from "js-yaml";
import type { Schema } from "../types.js";

export async function loadSchema(schemaPath: string): Promise<Schema> {
  return {
    openapiV1Json: {
      content: readFileSync(join(schemaPath, "v1.openapi.json"), "utf-8"),
    },
    openapiV1Yml: load(
      readFileSync(join(schemaPath, "v1.openapi.yml"), "utf-8"),
    ),
    openapiV2Json: {
      content: readFileSync(join(schemaPath, "v2.openapi.json"), "utf-8"),
    },
    openapiV2Yml: load(
      readFileSync(join(schemaPath, "v2.openapi.yml"), "utf-8"),
    ),
    browserSdkV2Yml: load(
      readFileSync(join(schemaPath, "browser-sdk.yml"), "utf-8"),
    ),
    graphqlV2: {
      content: readFileSync(join(schemaPath, "v2.graphql"), "utf-8"),
    },
  };
}
