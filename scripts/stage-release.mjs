import { execFileSync } from "node:child_process";
import { appendFileSync, readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { githubRelease, recordedStage } from "./github-release.mjs";

const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const semver = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;
export function stageRelease(
  { name, version, previousVersion, recordedStageId, tag = "latest" },
  run,
) {
  if (name !== "@portone/mcp-server" || !semver.test(version))
    throw new Error("Unexpected release package/version");
  if (version === previousVersion)
    return { state: "unchanged", release: false };
  const versions = JSON.parse(
    run("pnpm", ["view", name, "versions", "--json"]),
  );
  if (!Array.isArray(versions) || !versions.every((v) => typeof v === "string"))
    throw new Error("Invalid registry version response");
  if (versions.includes(version)) return { state: "published", release: true };
  if (recordedStageId) {
    if (!uuid.test(recordedStageId))
      throw new Error("Invalid recorded stage receipt");
    return { state: "already-staged", release: true, stageId: recordedStageId };
  }
  const result = JSON.parse(
    run("pnpm", [
      "stage",
      "publish",
      "--provenance",
      "--access",
      "public",
      "--tag",
      tag,
      "--json",
    ]),
  );
  const staged = result[name];
  if (
    staged?.name !== name ||
    staged.version !== version ||
    !uuid.test(staged.stageId)
  )
    throw new Error(
      "Stage command did not confirm the expected version and stage ID",
    );
  return { state: "staged", release: true, stageId: staged.stageId };
}
export function releaseNotes(changelog, version, state, stageId, sha) {
  const lines = changelog.split("\n");
  const start = lines.findIndex((line) => line.trim() === `## ${version}`);
  if (start < 0) throw new Error("Version missing from CHANGELOG.md");
  let end = lines.findIndex((line, i) => i > start && line.startsWith("## "));
  if (end < 0) end = lines.length;
  const npm =
    state === "published"
      ? "This exact npm version is already published."
      : "At release creation, the npm package was submitted to staging and awaits maintainer approval (2FA). Check npm for its current approval status.";
  const receipt = stageId
    ? `<!-- npm-stage:${stageId} source:${sha} -->\n`
    : "";
  return (
    receipt +
    npm +
    "\nThe DXT below is built independently from this release's source.\n\n" +
    lines
      .slice(start + 1, end)
      .join("\n")
      .trim() +
    "\n"
  );
}
function run(command, args) {
  return execFileSync(command, args, {
    encoding: "utf8",
    maxBuffer: 16 * 1024 * 1024,
    stdio: ["ignore", "pipe", "inherit"],
  }).trim();
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const pkg = JSON.parse(readFileSync("package.json", "utf8"));
  const before = process.env.BEFORE_SHA;
  if (!/^[0-9a-f]{40}$/.test(before ?? "") || /^0+$/.test(before))
    throw new Error("A valid previous push SHA is required");
  const previous = JSON.parse(run("git", ["show", `${before}:package.json`]));
  let tag = "latest";
  try {
    const pre = JSON.parse(readFileSync(".changeset/pre.json", "utf8"));
    if (pre.mode === "pre") tag = pre.tag;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  if (
    !/^[a-zA-Z][\w.-]*$/.test(tag) ||
    (pkg.version.includes("-") && tag === "latest")
  )
    throw new Error(
      "Prerelease requires an explicit Changesets prerelease tag",
    );
  const context = {
    version: pkg.version,
    sha: process.env.GITHUB_SHA,
    repository: process.env.GITHUB_REPOSITORY,
  };
  const receipt =
    pkg.version !== previous.version ? recordedStage(context, run) : undefined;
  const result = stageRelease(
    {
      ...pkg,
      previousVersion: previous.version,
      recordedStageId: receipt,
      tag,
    },
    run,
  );
  appendFileSync(
    process.env.GITHUB_OUTPUT,
    "release=" +
      result.release +
      "\nstate=" +
      result.state +
      "\nversion=" +
      pkg.version +
      "\n",
  );
  if (result.release) {
    writeFileSync(
      "RELEASE_NOTES",
      releaseNotes(
        readFileSync("CHANGELOG.md", "utf8"),
        pkg.version,
        result.state,
        result.stageId,
        context.sha,
      ),
    );
  }
  const detail = result.stageId
    ? "Review stage " +
      result.stageId +
      " on npmjs.com or with npm stage view; approval requires 2FA."
    : result.state === "published"
      ? "Already available on npm; completing GitHub/DXT release if needed."
      : "Version unchanged; no staging or release.";
  appendFileSync(
    process.env.GITHUB_STEP_SUMMARY,
    `### npm: ${result.state}\n\n${detail}\n`,
  );
  // Keep the receipt in the summary even if GitHub release creation fails.
  if (result.release) githubRelease({ ...context, upload: false }, run);
}
