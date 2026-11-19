import assert from "node:assert/strict";
import test from "node:test";
import { githubRelease, recordedStage } from "./github-release.mjs";
import { releaseNotes, stageRelease } from "./stage-release.mjs";

const id = "123e4567-e89b-12d3-a456-426614174000";
const sha = "a".repeat(40);
const pkg = {
  name: "@portone/mcp-server",
  version: "1.2.3",
  previousVersion: "1.2.2",
};
const context = {
  version: pkg.version,
  sha,
  repository: "portone-io/mcp-server",
};
function mock(responses) {
  const calls = [];
  return {
    calls,
    run(command, args) {
      calls.push([command, ...args]);
      const result = responses.shift();
      if (result instanceof Error) throw result;
      assert.notEqual(
        result,
        undefined,
        `unexpected command: ${calls.at(-1).join(" ")}`,
      );
      return typeof result === "string" ? result : JSON.stringify(result);
    },
  };
}
test("unrelated push is an offline no-op", () => {
  const m = mock([]);
  assert.deepEqual(
    stageRelease({ ...pkg, previousVersion: pkg.version }, m.run),
    { state: "unchanged", release: false },
  );
  assert.equal(m.calls.length, 0);
});
test("actual stage receipt is required", () => {
  const m = mock([
    ["1.2.2"],
    { [pkg.name]: { name: pkg.name, version: pkg.version, stageId: id } },
  ]);
  assert.equal(stageRelease(pkg, m.run).stageId, id);
  assert.deepEqual(m.calls[1], [
    "pnpm",
    "stage",
    "publish",
    "--provenance",
    "--access",
    "public",
    "--tag",
    "latest",
    "--json",
  ]);
});
test("already live is not staged again", () => {
  const m = mock([[pkg.version]]);
  assert.equal(stageRelease(pkg, m.run).state, "published");
  assert.equal(m.calls.length, 1);
});
test("recorded stage resumes DXT without list/restage", () => {
  const m = mock([[]]);
  assert.equal(
    stageRelease({ ...pkg, recordedStageId: id }, m.run).state,
    "already-staged",
  );
  assert.equal(m.calls.length, 1);
});
test("registry auth/errors and malformed responses fail closed", () => {
  for (const response of [new Error("auth"), {}, "not-json"]) {
    const m = mock([response]);
    assert.throws(() => stageRelease(pkg, m.run));
    assert.equal(m.calls.length, 1);
  }
});
test("stage failure, empty summary, wrong version and missing receipt fail", () => {
  for (const response of [
    new Error("stage failed"),
    {},
    { [pkg.name]: { name: pkg.name, version: "0.0.0", stageId: id } },
    { [pkg.name]: { name: pkg.name, version: pkg.version } },
  ]) {
    assert.throws(() => stageRelease(pkg, mock([[], response]).run));
  }
});
test("prerelease tag forwarded", () => {
  const pre = { ...pkg, version: "1.2.3-beta.1", tag: "beta" };
  const m = mock([
    [],
    { [pkg.name]: { name: pkg.name, version: pre.version, stageId: id } },
  ]);
  stageRelease(pre, m.run);
  assert.equal(m.calls[1].at(-2), "beta");
});
test("release notes retain exact changelog and truthful staging receipt", () => {
  const notes = releaseNotes(
    "# Changelog\n\n## 1.2.3\n\n- change\n\n## 1.2.2\n- old",
    pkg.version,
    "staged",
    id,
    sha,
  );
  assert.match(notes, /awaits maintainer approval/);
  assert.match(notes, /- change/);
  assert.doesNotMatch(notes, /- old/);
  assert.match(notes, /npm-stage:/);
  assert.throws(() => releaseNotes("## 0.0.0", pkg.version, "staged"));
});
test("create stage-time GitHub release before DXT; resume upload", () => {
  const m = mock([[[]], "", ""]);
  githubRelease({ ...context, upload: false }, m.run);
  assert.equal(m.calls.at(-1)[2], "create");
  assert.ok(m.calls.at(-1).includes(sha));
  const retry = mock([
    [[{ tag_name: "v1.2.3" }]],
    { object: { type: "commit", sha } },
    "",
  ]);
  githubRelease(context, retry.run);
  assert.equal(retry.calls.at(-1)[2], "upload");
  assert.equal(retry.calls.filter((call) => call[2] === "create").length, 0);
});
test("receipt requires exact release source; wrong/orphan tag rejected", () => {
  const receipt = `<!-- npm-stage:${id} source:${sha} -->`;
  assert.equal(
    recordedStage(
      context,
      mock([
        [[{ tag_name: "v1.2.3", body: receipt }]],
        { object: { type: "commit", sha } },
      ]).run,
    ),
    id,
  );
  assert.throws(() =>
    recordedStage(
      context,
      mock([
        [[{ tag_name: "v1.2.3", body: receipt }]],
        { object: { type: "commit", sha: "b".repeat(40) } },
      ]).run,
    ),
  );
  assert.throws(() =>
    githubRelease(
      context,
      mock([[[]], `${"b".repeat(40)}\trefs/tags/v1.2.3`]).run,
    ),
  );
});
