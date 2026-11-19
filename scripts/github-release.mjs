import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

function releaseContext({ version, sha, repository }, run) {
  if (
    !/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(version) ||
    !/^[0-9a-f]{40}$/.test(sha) ||
    repository !== "portone-io/mcp-server"
  )
    throw new Error("Invalid release context");
  const tag = `v${version}`;
  const pages = JSON.parse(
    run("gh", ["api", `repos/${repository}/releases`, "--paginate", "--slurp"]),
  );
  const release = pages.flat().find((item) => item.tag_name === tag);
  if (release) {
    let ref = JSON.parse(
      run("gh", ["api", `repos/${repository}/git/ref/tags/${tag}`]),
    ).object;
    for (let depth = 0; ref.type === "tag" && depth < 5; depth++)
      ref = JSON.parse(
        run("gh", ["api", `repos/${repository}/git/tags/${ref.sha}`]),
      ).object;
    if (ref.type !== "commit" || ref.sha !== sha)
      throw new Error("Existing release tag has a different source");
  }
  return { tag, release };
}

export function recordedStage(context, run) {
  const { release } = releaseContext(context, run);
  if (!release) return undefined;
  const match = (release.body ?? "").match(
    /<!-- npm-stage:([0-9a-f-]{36}) source:([0-9a-f]{40}) -->/,
  );
  if (!match || match[2] !== context.sha)
    throw new Error(
      "Existing release lacks a matching stage receipt; inspect before retrying",
    );
  return match[1];
}

export function githubRelease({ upload = true, ...context }, run) {
  const { version, sha } = context;
  const { tag, release } = releaseContext(context, run);
  if (!release) {
    const refs = run("git", [
      "ls-remote",
      "origin",
      `refs/tags/${tag}`,
      `refs/tags/${tag}^{}`,
    ]);
    if (refs) {
      const rows = refs.split("\n").map((row) => row.split(/\s+/));
      const resolved = rows.find((row) => row[1].endsWith("^{}")) ?? rows[0];
      if (resolved[0] !== sha)
        throw new Error("Existing tag has a different source");
    }
    const args = [
      "release",
      "create",
      tag,
      "--target",
      sha,
      "--title",
      tag,
      "--notes-file",
      "RELEASE_NOTES",
    ];
    if (version.includes("-")) args.push("--prerelease");
    run("gh", args);
  }
  if (upload)
    run("gh", [
      "release",
      "upload",
      tag,
      "portone-mcp-server.dxt",
      "--clobber",
    ]);
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  githubRelease(
    {
      version: process.env.VERSION,
      sha: process.env.GITHUB_SHA,
      repository: process.env.GITHUB_REPOSITORY,
    },
    (command, args) =>
      execFileSync(command, args, {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "inherit"],
      }).trim(),
  );
}
