import { DEVELOPERS_URL, HELP_CENTER_URL } from "../../url.ts";

export function docPathToUrl(path: string): string {
  if (path.startsWith("help/")) {
    return `${HELP_CENTER_URL}/category/${path.slice(5)}`;
  }
  return `${DEVELOPERS_URL}/${path}`;
}
