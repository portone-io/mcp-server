import yaml from "js-yaml";

export function getFromYamlPath(data: any, path: string): any {
  const parts = path.split(".");
  let current = data;

  for (const part of parts) {
    if (current === null || current === undefined) {
      return undefined;
    }

    // Handle array index notation like items[0]
    const arrayMatch = part.match(/^(.+)\[(\d+)\]$/);
    if (arrayMatch) {
      const [, key, index] = arrayMatch;
      current = current[key];
      if (Array.isArray(current)) {
        current = current[parseInt(index, 10)];
      } else {
        return undefined;
      }
    } else {
      current = current[part];
    }
  }

  return current;
}

export function summarizeYaml(data: any, maxDepth = 3, currentDepth = 0): any {
  if (currentDepth >= maxDepth) {
    if (typeof data === "object" && data !== null) {
      return Array.isArray(data) ? "[...]" : "{...}";
    }
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => summarizeYaml(item, maxDepth, currentDepth + 1));
  }

  if (typeof data === "object" && data !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(data)) {
      result[key] = summarizeYaml(value, maxDepth, currentDepth + 1);
    }
    return result;
  }

  return data;
}

export function parseYaml(content: string): any {
  try {
    return yaml.load(content);
  } catch (error) {
    throw new Error(`Failed to parse YAML: ${error}`);
  }
}

export function stringifyYaml(data: any): string {
  try {
    return yaml.dump(data, { indent: 2, lineWidth: -1 });
  } catch (error) {
    throw new Error(`Failed to stringify YAML: ${error}`);
  }
}
