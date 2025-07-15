import { exec as execCallback } from "node:child_process";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import * as yaml from "js-yaml";

const exec = promisify(execCallback);

async function runDocsForLlms(
  repoPath: string,
  nodeVersion: number,
): Promise<string> {
  console.log(`Running 'pnpm docs-for-llms' in ${repoPath}...`);

  try {
    const stats = await fs.stat(repoPath);
    if (!stats.isDirectory()) {
      throw new Error(`The provided path '${repoPath}' is not a directory`);
    }
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      throw new Error(
        `The provided path '${repoPath}' does not exist or is not a directory`,
      );
    }
    throw error;
  }

  try {
    const pkgPath = path.join(repoPath, "package.json");
    await fs.access(pkgPath);
  } catch (_error) {
    throw new Error(
      `The provided path '${repoPath}' does not appear to be a valid repository (no package.json found)`,
    );
  }

  try {
    const shellCommand = `. "$NVM_DIR/nvm.sh" && nvm use ${nodeVersion} && corepack enable && pnpm install && pnpm docs-for-llms`;

    const { stdout, stderr } = await exec(shellCommand, {
      cwd: repoPath,
      shell: process.env.SHELL || "/bin/bash",
      env: process.env,
    });
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (e) {
    const error = e as Error & { stdout?: string; stderr?: string };
    console.error(`Error: ${error.message}`);
    if (error.stdout) console.error(`stdout: ${error.stdout}`);
    if (error.stderr) console.error(`stderr: ${error.stderr}`);
    throw error;
  }

  const generatedDocsPath = path.join(repoPath, "docs-for-llms");
  try {
    const stats = await fs.stat(generatedDocsPath);
    if (!stats.isDirectory()) {
      throw new Error();
    }
  } catch (_error) {
    throw new Error(
      `Expected generated docs at ${generatedDocsPath}, but directory was not found`,
    );
  }

  return generatedDocsPath;
}

async function fetchAndSave(
  url: string,
  targetPath: string,
  frontmatter: Record<string, any> | null,
): Promise<void> {
  console.log(`Fetching content from ${url}...`);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    await fs.mkdir(path.dirname(targetPath), { recursive: true });

    const contentBuffer = Buffer.from(await response.arrayBuffer());

    if (frontmatter) {
      const frontmatterYaml = yaml.dump(frontmatter, {
        sortKeys: false,
      });
      const frontmatterBlock = Buffer.from(
        `---\n${frontmatterYaml}---\n\n`,
        "utf-8",
      );
      await fs.writeFile(
        targetPath,
        Buffer.concat([frontmatterBlock, contentBuffer]),
      );
    } else {
      await fs.writeFile(targetPath, contentBuffer);
    }

    console.log(`Content saved to ${targetPath}`);
  } catch (error) {
    console.error(`Error fetching content from ${url}: ${error}`);
  } finally {
    clearTimeout(timeoutId);
  }
}

async function updateServerSdkDocs(targetDocsDir: string): Promise<void> {
  await fetchAndSave(
    "https://raw.githubusercontent.com/portone-io/server-sdk/refs/heads/main/javascript/README.md",
    path.join(targetDocsDir, "sdk", "ko", "v2-server-sdk", "javascript.md"),
    {
      title: "포트원 V2 JavaScript, TypeScript 서버 SDK",
      description:
        "JavaScript, TypeScript를 위한 포트원 V2 서버 SDK 사용 방법을 안내합니다.",
      targetVersions: ["v2"],
    },
  );

  await fetchAndSave(
    "https://raw.githubusercontent.com/portone-io/server-sdk/refs/heads/main/jvm/README.md",
    path.join(targetDocsDir, "sdk", "ko", "v2-server-sdk", "jvm.md"),
    {
      title: "포트원 V2 JVM 서버 SDK",
      description:
        "JVM 환경(Java, Kotlin, Scala 등)을 위한 포트원 V2 서버 SDK 사용 방법을 안내합니다.",
      targetVersions: ["v2"],
    },
  );

  await fetchAndSave(
    "https://raw.githubusercontent.com/portone-io/server-sdk/refs/heads/main/python/README.md",
    path.join(targetDocsDir, "sdk", "ko", "v2-server-sdk", "python.md"),
    {
      title: "포트원 V2 Python 서버 SDK",
      description: "Python을 위한 포트원 V2 서버 SDK 사용 방법을 안내합니다.",
      targetVersions: ["v2"],
    },
  );
}

async function updateMobileSdkDocs(targetDocsDir: string): Promise<void> {
  await fetchAndSave(
    "https://raw.githubusercontent.com/portone-io/android-sdk/refs/heads/main/README.md",
    path.join(targetDocsDir, "sdk", "ko", "v2-mobile-sdk", "android.md"),
    {
      title: "포트원 V2 Android 모바일 SDK",
      description:
        "Android를 위한 포트원 V2 모바일 SDK 사용 방법을 안내합니다.",
      targetVersions: ["v2"],
    },
  );

  await fetchAndSave(
    "https://raw.githubusercontent.com/portone-io/react-native-sdk/refs/heads/main/README.md",
    path.join(targetDocsDir, "sdk", "ko", "v2-mobile-sdk", "react-native.md"),
    {
      title: "포트원 V2 React Native 모바일 SDK",
      description:
        "React Native를 위한 포트원 V2 모바일 SDK 사용 방법을 안내합니다.",
      targetVersions: ["v2"],
    },
  );
}

async function updateMcpDocs(
  developersRepoPath: string,
  helpRepoPath: string,
): Promise<void> {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const targetDocsDir = path.join(scriptDir, "assets", "docs");

  console.log(`Removing existing docs directory at ${targetDocsDir}...`);
  await fs.rm(targetDocsDir, { recursive: true, force: true });

  await fs.mkdir(path.dirname(targetDocsDir), { recursive: true });

  const generatedDevDocsPath = await runDocsForLlms(developersRepoPath, 23);
  console.log(
    `Copying new docs from ${generatedDevDocsPath} to ${targetDocsDir}...`,
  );
  await fs.cp(generatedDevDocsPath, targetDocsDir, { recursive: true });

  const generatedHelpDocsPath = await runDocsForLlms(helpRepoPath, 20);
  const helpTargetDir = path.join(targetDocsDir, "help");
  console.log(
    `Copying new docs from ${generatedHelpDocsPath} to ${helpTargetDir}...`,
  );
  await fs.cp(generatedHelpDocsPath, helpTargetDir, { recursive: true });

  await updateServerSdkDocs(targetDocsDir);
  await updateMobileSdkDocs(targetDocsDir);

  console.log("Documentation update completed successfully!");
}

async function getRepoPath(
  envVarName: string,
  promptMessage: string,
): Promise<string> {
  let repoPath = process.env[envVarName] || "";

  if (!repoPath) {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.log(promptMessage);
    repoPath = (await rl.question("")).trim();
    rl.close();
  }

  if (repoPath.startsWith("~")) {
    repoPath = path.join(os.homedir(), repoPath.slice(1));
  }

  return repoPath;
}

async function main() {
  try {
    const developersRepoPath = await getRepoPath(
      "DEVELOPERS_PORTONE_IO_PATH",
      "Enter the path to the local developers.portone.io repository:",
    );
    const helpRepoPath = await getRepoPath(
      "HELP_PORTONE_IO_PATH",
      "Enter the path to the local help.portone.io repository:",
    );
    await updateMcpDocs(developersRepoPath, helpRepoPath);
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    process.exit(1);
  }
}

await main();
