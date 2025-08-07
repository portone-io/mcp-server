import packageJson from "../../../package.json" with { type: "json" };

export const USER_AGENT = `${packageJson.name} ${packageJson.version}`;
