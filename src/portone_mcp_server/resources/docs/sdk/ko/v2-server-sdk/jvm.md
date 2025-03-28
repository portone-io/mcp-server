---
title: 포트원 V2 JVM 서버 SDK
description: JVM 환경(Java, Kotlin, Scala 등)을 위한 포트원 V2 서버 SDK 사용 방법을 안내합니다.
targetVersions:
- v2
---

# PortOne Server SDK for JVM

JVM 서버 환경에서 포트원 V2 결제 시스템에 연동하기 위한 SDK입니다. 코틀린,
스칼라, 자바 등의 언어에서 사용할 수 있습니다.

## 의존성

JVM 8 이상이 필요합니다.

현대적인 코틀린 환경을 사용해 구현합니다. 내부 HTTP 클라이언트로는 OkHttp 엔진의
Ktor를 사용합니다. JSON 직렬화를 위해 kotlinx.serialization을 사용합니다.

## 설치

[![Maven Central Version](https://img.shields.io/maven-central/v/io.portone/server-sdk)](https://central.sonatype.com/artifact/io.portone/server-sdk)
[![javadoc](https://javadoc.io/badge2/io.portone/server-sdk/javadoc.svg)](https://javadoc.io/doc/io.portone/server-sdk)

메이븐 중앙 저장소를 통해 설치합니다.
의존성 버전이 호환되지 않는 경우에는 `all` classifier을 적용하여 shading 버전을 사용합니다.

### 그래들

```Gradle Kotlin DSL
dependencies {
    implementation("io.portone:server-sdk:x.y.z")
    
    // shading 버전의 경우
    implementation("io.portone:server-sdk:x.y.z:all")
}

repositories {
    mavenCentral()
}
```

### 메이븐

```XML
<dependencies>
    <dependency>
        <groupId>io.portone</groupId>
        <artifactId>server-sdk</artifactId>
        <version>x.y.z</version>
        <!-- shading 버전의 경우 -->
        <classifier>all</classifier>
    </dependency>
</dependencies>
```

### 앰퍼

```YAML
dependencies:
  - io.portone:server-sdk:x.y.z
  
  # shading 버전의 경우
  - io.portone:server-sdk:x.y.z:all
```

## 사용법

### 포트원 REST API

먼저 [포트원 개발자콘솔](https://admin.portone.io/integration-v2/manage/api-keys?version=v2)에서 API Secret을 발급받습니다.

발급받은 API Secret을 사용해 필요한 API에 맞는 Client를 생성합니다.

```kotlin
// 결제 관련 API를 사용하는 경우
val paymentClient = PaymentClient(apiSecret = PORTONE_API_SECRET)
paymentClient.getPayment(/* ... */)

// 전체 API를 사용하는 경우
val portoneClient = PortOneClient(apiSecret = PORTONE_API_SECRET)
// 상위 Client를 생성한 경우 하위 Client에 접근 가능합니다.
portoneClient.payment.getPayment(/* ... */)
```

Client의 각 메서드는 메서드마다 고유한 Exception 인터페이스를 가집니다.

```kotlin
val payment = try {
    paymentClient.getPayment(/* ... */)
} catch (error: PortOneException) {
    if (error is GetPaymentException) {
        when (error) {
            is UnknownException -> /* ... */
            is ForbiddenException -> /* ... */
            is InvalidRequestException -> /* ... */
            is PaymentNotFoundException -> /* ... */
            is UnauthorizedException -> /* ... */
        }
    }
    throw error
}
```

포트원 REST API로부터 현재 SDK 버전에서 지원하지 않는 응답을 받을 수 있습니다.
이 경우를 구분하기 위하여 `Recognized` 및 `Unrecognized` 타입인지를 체크해야 합니다.

```kotlin
println(payment.amount.total) // Error: Unresolved reference 'amount'.
if (payment is Payment.Recognized) {
    println(payment.amount.total)
}
```

### 웹훅 검증

먼저 [포트원 개발자콘솔](https://admin.portone.io/integration-v2/manage/webhook?version=V2)에서 웹훅 시크릿을 발급받습니다.

WebhookVerifier.verify 메서드로 웹훅 내용을 검증할 수 있습니다.

**주의: 웹훅 내용은 서버에서 전달한 body를 JSON 형태로 파싱하지 않고, 문자열 형태로 그대로 입력합니다.**

```kotlin
val payload = """{"type":"BillingKey.Issued","timestamp":"2024-04-25T10:00:00.000Z","data":{"storeId":"store-61e0db3d-b967-47db-8b50-96002da90d55","billingKey":"billing-key-75ae3cab-6afe-422d-bf34-3a7b1762451d"}}"""
val webhookVerifier = WebhookVerifier(PORTONE_WEBHOOK_SECRET)
val webhook = webhookVerifier.verify(
    msgBody = payload,
    msgId = "test-id", // webhook-id 헤더 값
    msgSignature = "v1,aW52YWxpZCBzaWduYXR1cmU=", // webhook-signature 헤더 값
    msgTimestamp = "100", // webhook-timestamp 헤더 값
)
```

WebhookVerifier.verify 메서드는 body를 Webhook 타입으로 변환하여 반환합니다.

```kotlin
println(webhook.data.paymentId) // Error: Unresolved reference 'data'.
if (webhook is WebhookTransaction) {
    println(webhook.data.paymentId)
}
```

## 버전

[유의적 버전 2.0.0](https://semver.org/spec/v2.0.0.html)을 사용합니다.

현재 주(主) 버전은 0입니다. 이는 라이브러리 공개 API가 아직 고정되지 않았음을
의미합니다. 주 버전이 1이 되기 전에도 릴리스 버전(프리릴리스가 아닌 버전)의
SDK를 프로덕션에서 사용할 수 있으며, 포트원은 관련 기술 지원을 제공합니다.

## API 안정성

포트원 V2는 REST API의 하위 호환을 보장합니다. 본 SDK는 REST API에 의존하므로,
한 버전의 SDK로 연동한 뒤에는 해당 버전에 특별한 버그가 없는 한 연동이 깨지지
않습니다.

SDK의 버전을 업데이트한 경우 코드 호환성이 깨질 수 있습니다. 이 경우 코드 작업이
필요합니다.

## 기술 지원

- tech.support@portone.io
