import type { CallToolResult } from "@modelcontextprotocol/sdk/types.ts";

export type Result<T> =
  | {
      type: "success";
      data: T;
    }
  | {
      type: "error";
      data: object;
    };

export function toolErrorResult(error: {
  type: "error";
  data: object;
}): CallToolResult {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(error.data, null, 2),
      },
    ],
    isError: true,
  };
}
