# npm staging and GitHub/DXT releases

CD retains the existing Changesets version PR and manifest synchronization.
The pinned Changesets v1.9.0 action recognizes published packages only by
"New tag:" output. We intentionally use it for versioning only, not a fake
published signal from staging.

On a main push which changes package.json's version and has no changesets:
- The pinned package manager (pnpm 11.22.0) reads the exact published versions.
  Registry/authentication/JSON errors fail closed.
- A fresh npm stage must return the expected name/version and a valid stageId.
  OIDC, the npm environment and provenance remain enabled. The existing npm
  trusted publisher must allow staging; this change does not configure it.
- GitHub's vVERSION tag and changelog release are created explicitly at the
  exact workflow SHA. Notes distinguish staging from npm availability.
- The DXT is built/uploaded independently from local source. build-dxt.ts
  copies server/assets/manifest/package.json and installs production dependencies;
  it does not install the not-yet-approved @portone/mcp-server version.
- The maintainer still reviews/approves the npm stage with 2FA.

The stage ID and source SHA are recorded in GitHub release notes before the DXT
build. Rerunning the same failed workflow can complete a failed DXT build/upload
without re-staging. Existing release/tag SHAs must match; tags are never moved.
The receipt records submission, not current approval status. An exact public
npm version is reported as already published. No stage-list call is made:
OIDC publishing credentials must not be assumed to authorize stage listing.

Unrelated pushes do not stage the same version again. If staging succeeds but
the job fails before recording the GitHub receipt, automatic recovery stops
rather than inferring success from an error. Inspect the recorded CLI stage ID
on npmjs.com, approve/reject as appropriate, and rerun after approval (the public
version check avoids re-staging). A rejected stage requires a new reviewed
release version; removing a receipt is not an automatic retry mechanism.

There is no configured Slack notifier in this repo. Approval guidance goes to
the Actions summary; no webhook/secret is invented.

## Local checks (no release writes)
node --test scripts/stage-release.test.mjs
