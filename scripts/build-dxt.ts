#!/usr/bin/env node --experimental-strip-types
import { execSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

const log = {
  info: (msg: string) => console.log(`${YELLOW}${msg}${RESET}`),
  success: (msg: string) => console.log(`${GREEN}${msg}${RESET}`),
  error: (msg: string) => console.error(`${RED}${msg}${RESET}`),
};

const projectRoot = join(import.meta.dirname, "..");
const deployDir = join(projectRoot, "deploy");
const outputFile = join(projectRoot, "portone-mcp.dxt");

async function buildDxt() {
  try {
    // 1. 기존 파일/디렉토리 정리
    log.info("🧹 기존 deploy 디렉토리 정리 중...");
    if (existsSync(deployDir)) {
      rmSync(deployDir, { recursive: true, force: true });
    }
    if (existsSync(outputFile)) {
      rmSync(outputFile);
    }

    // 2. deploy 디렉토리 생성
    log.info("📁 deploy 디렉토리 생성 중...");
    execSync(`mkdir -p ${deployDir}`);

    // 3. 필요한 파일 복사
    log.info("📋 파일 복사 중...");
    const filesToCopy = ["package.json", "assets", "server", "manifest.json"];
    filesToCopy.forEach((file) => {
      execSync(`cp -r ${join(projectRoot, file)} ${deployDir}/`);
    });

    // 4. 프로덕션 의존성 설치
    log.info("📦 프로덕션 의존성 설치 중...");
    execSync("npm i --omit=dev", { cwd: deployDir, stdio: "inherit" });

    // 5. dxt 파일 생성
    log.info("🗜️  dxt 파일 생성 중...");
    execSync("zip -r ../portone-mcp.dxt * -D", { cwd: deployDir });

    // 6. 파일 크기 확인
    const stats = execSync(`ls -lh ${outputFile}`, { encoding: "utf-8" });
    log.success("✅ portone-mcp.dxt 파일이 생성되었습니다!");
    console.log(stats.trim());

    // 7. deploy 디렉토리 삭제 (옵션)
    const cleanupAnswer = !process.argv.includes("--no-cleanup");
    if (cleanupAnswer) {
      log.info("🧹 deploy 디렉토리 정리 중...");
      rmSync(deployDir, { recursive: true, force: true });
    }
  } catch (error) {
    log.error("❌ 빌드 중 오류가 발생했습니다:");
    console.error(error);
    process.exit(1);
  }
}

// 스크립트 실행
buildDxt();