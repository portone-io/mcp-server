export function filterFields<T extends object>(
  fields: readonly string[],
  data: T,
): Partial<T> {
  const withPrefixes = new Set(fields);
  for (const field of fields) {
    let searchPos = 0;
    while (true) {
      const dot = field.indexOf(".", searchPos);
      if (dot === -1) break;
      withPrefixes.add(field.slice(0, dot));
      searchPos = dot + 1;
    }
  }
  return filterFieldsPath(data, "");

  function filterFieldsPath<T extends object>(
    data: T,
    currentPath: string,
  ): Partial<T> {
    return Object.fromEntries(
      Object.entries(data).flatMap(([key, value]) => {
        const childPath = currentPath === "" ? key : `${currentPath}.${key}`;
        if (withPrefixes.has(childPath)) {
          if (Array.isArray(value)) {
            return [
              [
                key,
                value.map((item) =>
                  typeof item === "object"
                    ? filterFieldsPath(item, childPath)
                    : item,
                ),
              ],
            ];
          } else if (typeof value === "object") {
            return [[key, filterFieldsPath(value, childPath)]];
          } else {
            return [[key, value]];
          }
        } else {
          return [];
        }
      }),
    ) as Partial<T>;
  }
}
