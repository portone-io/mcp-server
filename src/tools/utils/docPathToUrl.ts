import { DEVELOPERS_URL, HELP_CENTER_URL } from "../../url.ts";

const overridenPaths = new Map<string, string>([
  [
    "sdk/ko/v2-server-sdk/javascript",
    "https://github.com/portone-io/server-sdk/tree/main/javascript#readme",
  ],
  [
    "sdk/ko/v2-server-sdk/python",
    "https://github.com/portone-io/server-sdk/tree/main/python#readme",
  ],
  [
    "sdk/ko/v2-server-sdk/jvm",
    "https://github.com/portone-io/server-sdk/tree/main/jvm#readme",
  ],
  [
    "sdk/ko/v2-mobile-sdk/android",
    "https://github.com/portone-io/android-sdk/tree/main#readme",
  ],
  [
    "sdk/ko/v2-mobile-sdk/react-native",
    "https://github.com/portone-io/react-native-sdk/tree/main#readme",
  ],
]);

export function docPathToUrl(path: string): string {
  const withoutMd = path.endsWith(".md") ? path.slice(0, -3) : path;
  const overriden = overridenPaths.get(withoutMd);
  if (overriden != null) {
    return overriden;
  }
  if (withoutMd.startsWith("help/")) {
    // Get last component
    const slug = withoutMd.slice(path.lastIndexOf("/") + 1);
    return `${HELP_CENTER_URL}/content/${slug}`;
  }
  return `${DEVELOPERS_URL}/${withoutMd}`;
}
