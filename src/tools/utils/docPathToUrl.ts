import { DEVELOPERS_URL, HELP_CENTER_URL } from "../../url.ts";

export function docPathToUrl(path: string): string {
  if (path.startsWith("help/")) {
    // Get last component
    const slug = path.slice(path.lastIndexOf("/") + 1, -3);
    return `${HELP_CENTER_URL}/content/${slug}`;
  }
  return `${DEVELOPERS_URL}/${path}`;
}
