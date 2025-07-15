#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

// package.json에서 버전 읽기
const packagePath = path.join(process.cwd(), 'package.json');
const manifestPath = path.join(process.cwd(), 'manifest.json');

if (!fs.existsSync(packagePath) || !fs.existsSync(manifestPath)) {
  console.log('package.json 또는 manifest.json 파일을 찾을 수 없습니다.');
  process.exit(0);
}

const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const manifestJson = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// 버전이 다르면 manifest.json 업데이트
if (packageJson.version !== manifestJson.version) {
  manifestJson.version = packageJson.version;
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifestJson, null, 2)}\n`);
  console.log(`manifest.json 버전을 ${packageJson.version}으로 업데이트했습니다.`);
} else {
  console.log('manifest.json 버전이 이미 최신입니다.');
}
