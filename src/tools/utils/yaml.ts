import yaml from "js-yaml";

export function subYaml(data: any, path: string[]): any {
  if (!path || path.length === 0 || data === null || data === undefined) {
    return data;
  }

  let current = data;
  for (const segment of path) {
    if (Array.isArray(current) && /^\d+$/.test(segment)) {
      const index = parseInt(segment, 10);
      if (index >= 0 && index < current.length) {
        current = current[index];
      } else {
        return null;
      }
    } else if (
      typeof current === "object" &&
      current !== null &&
      segment in current
    ) {
      current = current[segment];
    } else {
      return null;
    }
  }

  return current;
}

export const getFromYamlPath = subYaml;

export function pruneYaml(data: any, maxDepth: number): any {
  function _pruneYaml(data: any, maxDepth: number, currentDepth: number): any {
    if (
      currentDepth >= maxDepth ||
      data === null ||
      data === undefined ||
      typeof data === "string" ||
      typeof data === "number" ||
      typeof data === "boolean"
    ) {
      return data;
    }

    if (typeof data === "object" && !Array.isArray(data)) {
      const prunedDict: any = {};
      for (const [key, value] of Object.entries(data)) {
        if (currentDepth === maxDepth - 1) {
          if (typeof value === "object" && value !== null) {
            if (Array.isArray(value)) {
              prunedDict[key] = `<list with ${value.length} items>`;
            } else {
              prunedDict[key] = `<dict with ${Object.keys(value).length} keys>`;
            }
          } else {
            prunedDict[key] = value;
          }
        } else {
          prunedDict[key] = _pruneYaml(value, maxDepth, currentDepth + 1);
        }
      }
      return prunedDict;
    }

    if (Array.isArray(data)) {
      if (currentDepth === maxDepth - 1) {
        return [`<list with ${data.length} items>`];
      } else {
        return data.map((item) => _pruneYaml(item, maxDepth, currentDepth + 1));
      }
    }

    return String(data);
  }

  return _pruneYaml(data, maxDepth, 0);
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
