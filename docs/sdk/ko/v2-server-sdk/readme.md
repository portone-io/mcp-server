---
title: 서버 SDK 레퍼런스
description: 웹훅 및 REST API 연동시 사용되는 SDK에 대한 설명 문서입니다.
targetVersions:
  - v2
versionVariants:
  v1: /sdk/ko/readme
---

포트원 서버 SDK는 웹훅을 포함한 포트원 V2 REST API를 여러 언어에서 별도의 보일러플레이트 없이 사용 가능하도록 만들어진 SDK입니다.

현재 JavaScript, Python, JVM을 지원하고 있으며, Go, PHP 등을 지원할 예정입니다.

## JavaScript

![NPM Version](https://img.shields.io/npm/v/%40portone%2Fserver-sdk)

![JSR Version](https://img.shields.io/jsr/v/%40portone/server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/javascript)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/js)

JavaScript 및 TypeScript에서 사용 가능한 JavaScript SDK는 [npm](https://www.npmjs.com/package/@portone/server-sdk)과 [jsr](https://jsr.io/@portone/server-sdk)을 통해 배포되고 있습니다.
`@portone/server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="npm">

```shell
npm install --save @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="yarn">

```shell
yarn add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="pnpm">

```shell
pnpm add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="bun">

```shell
bun add @portone/server-sdk
```

</div>

<div class="tabs-content" data-title="deno">

```shell
deno add jsr:@portone/server-sdk
```

</div>

<div class="tabs-content" data-title="ni">

```shell
ni @portone/server-sdk
```

</div>

</div>

Node.js의 경우 v20 이상에서 정상 동작하며, v20 미만 버전은 폴리필이 필요합니다.

<details>

<summary>폴리필 방법</summary>

<div class="tabs-container">

<div class="tabs-content" data-title="Node.js v18 이상 v20 미만">

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
globalThis.crypto = require("node:crypto").webcrypto;
```

```javascript title="ESM"
import { webcrypto } from "node:crypto";
globalThis.crypto = webcrypto;
```

</div>

<div class="tabs-content" data-title="Node.js v18 미만">

[@whatwg-node/fetch](https://www.npmjs.com/package/@whatwg-node/fetch) 패키지를 의존성에 추가해 주세요.

애플리케이션 코드 시작 부분에 아래 코드를 삽입해 주세요.

```javascript title="CommonJS"
const { fetch, crypto } = require("@whatwg-node/fetch");
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

```javascript title="ESM"
import { crypto, fetch } from "@whatwg-node/fetch";
globalThis.fetch = fetch;
globalThis.crypto = crypto;
```

</div>

</div>

</details>

## Python

![PyPI - Version](https://img.shields.io/pypi/v/portone-server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/python)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/py)

Python SDK는 [PyPI](https://pypi.org/project/portone-server-sdk)를 통해 배포되고 있습니다.
`portone-server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="uv">

```shell
uv add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="poetry">

```shell
poetry add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="rye">

```shell
rye add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pipenv">

```shell
pipenv install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Conda">

```shell
conda install portone-server-sdk
```

</div>

<div class="tabs-content" data-title="Hatch">

```toml title="pyproject.toml"
[project]
dependencies = [
  "portone-server-sdk~=x.x.x"
]
```

</div>

<div class="tabs-content" data-title="PDM">

```shell
pdm add portone-server-sdk
```

</div>

<div class="tabs-content" data-title="pip requirements">

```shell title="requirements.txt"
portone-server-sdk ~= x.x.x
```

</div>

</div>

Python 3.9 이상에서 정상 동작합니다.

## JVM

[![Maven Central Version](https://img.shields.io/maven-central/v/io.portone/server-sdk)](https://central.sonatype.com/artifact/io.portone/server-sdk)

[![javadoc](https://javadoc.io/badge2/io.portone/server-sdk/javadoc.svg)](https://javadoc.io/doc/io.portone/server-sdk)

- [GitHub 저장소](https://github.com/portone-io/server-sdk/tree/main/jvm)
- [API 레퍼런스](https://portone-io.github.io/server-sdk/jvm)

Java, Kotlin, Scala 등에서 사용 가능한 JVM SDK는 [Maven](https://central.sonatype.com/artifact/io.portone/server-sdk)을 통해 배포되고 있습니다.

`io.portone:server-sdk` 패키지를 의존성에 추가하여 사용하실 수 있습니다.

<div class="tabs-container">

<div class="tabs-content" data-title="Apache Maven">

```xml
<dependency>
  <groupId>io.portone</groupId>
  <artifactId>server-sdk</artifactId>
  <version>x.x.x</version>
</dependency>
```

</div>

<div class="tabs-content" data-title="Gradle (Kotlin)">

```kotlin
implementation("io.portone:server-sdk:x.x.x")
```

</div>

<div class="tabs-content" data-title="Gradle (Groovy)">

```groovy
implementation 'io.portone:server-sdk:x.x.x'
```

</div>

<div class="tabs-content" data-title="sbt">

```scala
libraryDependencies += "io.portone" % "server-sdk" % "x.x.x"
```

</div>

</div>
