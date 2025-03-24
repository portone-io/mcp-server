---
title: TLS 지원 범위
description: 포트원 v1 API의 TLS 지원 범위 및 설정 가이드를 확인할 수 있습니다.
---

2024년 9월 1일부터 포트원을 이용하는 고객님들의 개인정보 및 결제정보를 더욱 안전하게 보호하기 위해
v1 API 서버(api.iamport.kr)의 TLS 버전 및 Cipher Suite 지원 범위가 변경됩니다.

## 변경사항 요약

- HTTP 평문 통신에 대한 지원이 중단됩니다.
- TLS 1.0, 1.1 버전에 대한 지원이 중단됩니다.
- 보안성이 떨어지는 일부 Legacy Cipher Suite 들에 대한 지원이 중단됩니다.

<table class="table-tls-support">

<thead>

<tr>

<th>Protocol</th>
<th>Cipher Suite</th>
<th>2024-09-01 전</th>
<th>2024-09-01 이후</th>

</tr>

</thead>

<tbody>

<tr>

<td>HTTP</td>
<td>

<i>N/A</i>

</td>
<td rowspan="3" class="supported">O</td>
<td rowspan="3" class="unsupported">X</td>

</tr>

<tr>

<td>TLSv1.0</td>
<td>

<i>(omitted)</i>

</td>

</tr>

<tr>

<td>TLSv1.1</td>
<td>

<i>(omitted)</i>

</td>

</tr>

<tr>

<td rowspan="18">TLSv1.2</td>
<td>AES256-SHA</td>
<td rowspan="10" class="supported">O</td>
<td rowspan="10" class="unsupported">X</td>

</tr>

<tr>

<td>AES128-SHA</td>

</tr>
<tr>

<td>AES128-GCM-SHA256</td>

</tr>
<tr>

<td>AES128-SHA256</td>

</tr>
<tr>

<td>AES256-GCM-SHA384</td>

</tr>
<tr>

<td>AES256-SHA256</td>

</tr>
<tr>

<td>ECDHE-ECDSA-AES128-SHA</td>

</tr>
<tr>

<td>ECDHE-RSA-AES128-SHA</td>

</tr>
<tr>

<td>ECDHE-RSA-AES256-SHA</td>

</tr>
<tr>

<td>ECDHE-ECDSA-AES256-SHA</td>

</tr>

<tr>

<td style="display:none" />

<td>ECDHE-ECDSA-AES128-SHA256</td>
<td rowspan="8" class="supported">O</td>
<td rowspan="8" class="supported">O</td>

</tr>

<tr>

<td>ECDHE-RSA-AES128-SHA256</td>

</tr>
<tr>

<td>ECDHE-ECDSA-AES256-SHA384</td>

</tr>
<tr>

<td>ECDHE-RSA-AES256-SHA384</td>

</tr>
<tr>

<td>ECDHE-ECDSA-AES128-GCM-SHA256</td>

</tr>
<tr>

<td>ECDHE-RSA-AES128-GCM-SHA256</td>

</tr>
<tr>

<td>ECDHE-ECDSA-AES256-GCM-SHA384</td>

</tr>
<tr>

<td>ECDHE-RSA-AES256-GCM-SHA384</td>

</tr>

<tr>

<td rowspan="3">TLSv1.3</td>
<td>TLS-AES-128-GCM-SHA256</td>
<td rowspan="3" class="supported">O</td>
<td rowspan="3" class="supported">O</td>

</tr>

<tr>

<td>TLS-AES-256-GCM-SHA384</td>

</tr>
<tr>

<td>TLS-CHACHA20-POLY1305-SHA256</td>

</tr>

</tbody>

</table>

<br />

<details>

<summary>

<strong>HTTP 평문 통신 지원을 중단하는 이유</strong>

</summary>

TLS를 이용하지 않는 평문 HTTP 통신은 데이터를 암호화하지 않고 평문 상태로 전송하기 때문에 다양한
종류의 공격에 몹시 취약합니다. 먼저 별도의 암호화가 없기 때문에 모든 종류의 [도청]과
[스니핑 공격]에 의해 API 키나 민감한 고객정보가 공격자에게 쉽게 노출될 수 있습니다.
뿐만 아니라 [DNS spoofing]이나 [ARP spoofing]과 같은 [Active MITM 공격][MITM]을 통해
공격자가 결제 API 요청이나 응답을 변조하는 것까지도 가능하기 때문에, 정보 유출뿐 아니라
결제금액을 위조하거나 결제상품, 결제사용자를 바꿔치기하는 유형의 공격도 가능합니다.

따라서 암호화되지 않은 평문 HTTP 통신을 실제 운영환경에서 사용하여선 절대 안 됩니다. 포트원 v1
API를 평문 HTTP 통신으로 호출하고 계시는 고객님께선 즉시 API endpoint를 <http://api.iamport.kr> 에서
<https://api.iamport.kr> 로 바꿔주셔서, TLS를 활성화시켜주셔야만 합니다.

[도청]: https://en.wikipedia.org/wiki/Network_eavesdropping

[스니핑 공격]: https://en.wikipedia.org/wiki/Sniffing_attack

[DNS spoofing]: https://en.wikipedia.org/wiki/DNS_spoofing

[ARP spoofing]: https://en.wikipedia.org/wiki/ARP_spoofing

[MITM]: https://en.wikipedia.org/wiki/Man-in-the-middle_attack

</details>

<details>

<summary>

<strong>TLS 1.0, 1.1 지원을 중단하는 이유</strong>

</summary>

TLS 1.0과 1.1은 각각 1999년, 2006년에 공개된 보안 표준으로, [POODLE]이나 [BEAST]와 같은 널리
알려진 여러 공격들에 취약합니다. 국제 인터넷 표준화 기구인 IETF는 2021-03-23 [RFC 8996]를 통해
TLS 1.0과 1.1을 deprecate 시켰으며, AWS, Google[^tls-1.0-chrome], Apple, Microsoft 등 많은 국제 기업들이 자사 제품
및 API 이용 시 TLS 1.2 미만 버전에 대해 제한을 두고 있습니다.[^tls-1.0-browsers] TLS 1.0 및 1.1에 존재하는 문제
및 취약점들은 아래와 같습니다.

[POODLE]: https://en.wikipedia.org/wiki/POODLE

[BEAST]: https://en.wikipedia.org/wiki/Transport_Layer_Security#BEAST_attack

[RFC 8996]: https://www.rfc-editor.org/rfc/rfc8996.html

1. [BEAST] (Browser Exploit Against SSL/TLS) 공격

   [BEAST] 공격은 [중간자 공격][MITM]을 동반하는 공격으로, TLS 1.1 미만 버전에 적용 가능합니다.

   1.1 버전 미만의 TLS는 [스트림 암호] 대신 [블록 암호]를 사용할경우, [Mode of operation]으로
   무조건 [CBC]를 사용해야만 했습니다. [CBC] 모드는 예측 가능한 [IV]를 사용할 경우
   Chosen-plaintext attack에 취약해진다는 문제를 갖고있는데, TLS 1.0은 이후 버전들과는 다르게
   항상 이전 블록의 암호화 결과를 사용하도록 만들어져있어, IV의 예측이 가능했고, HTTP는 특성상
   헤더 부분의 정보 엔트로피가 낮아 공격자가 높은 확률로 암호문을 복호화하는데에 성공할 수
   있었습니다.

   [0/n split, 1/n-1 split]과 같은 취약점 우회수단이 몇가지 존재하나 이는 클라이언트측에서만
   적용할 수 있는 우회수단이고, TLS 1.0을 사용하면서 서버측에서 BEAST 취약점을 우회하려면
   [블록 암호] 자체를 사용하지 않아야 합니다. 문제는 TLS 1.0에서 블록 암호를 비활성화할 경우 사용할 수
   있는 남은 유일한 암호화 수단은 더더욱 취약한것으로 알려진 [RC4] 뿐이기 때문에, 결론적으로 TLS
   1.0은 사용하지 않아야 합니다.

   TLS 1.2는 AES [GCM]과 같은 [AEAD] 지원, [ChaCha20]과 같은 안전한 [스트림 암호] 지원을 통해 이
   문제를 해결하였습니다.

   [스트림 암호]: https://en.wikipedia.org/wiki/Stream_cipher

   [블록 암호]: https://en.wikipedia.org/wiki/Block_cipher

   [Mode of operation]: https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation

   [CBC]: https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_block_chaining_\(CBC\)

   [IV]: https://en.wikipedia.org/wiki/Initialization_vector

   [0/n split, 1/n-1 split]: https://www.cryptologie.net/article/378/1n-1-split-to-circumvent-beast/

   [RC4]: https://en.wikipedia.org/wiki/RC4

   [GCM]: https://en.wikipedia.org/wiki/Galois/Counter_Mode

   [AEAD]: https://en.wikipedia.org/wiki/Authenticated_encryption

   [ChaCha20]: https://en.wikipedia.org/wiki/Salsa20#ChaCha_variant

2. 약한 해시 함수 사용

   TLS 1.2 이후 버전과는 달리, TLS 1.0과 1.1은 [cryptographic hash function]이 필요한 곳에 무조건
   [MD5]나 [SHA-1]과 같이 오래되고 약한 해시함수를 쓰도록 정해져있습니다. [MD5], [SHA-1] 모두
   지금은 상당히 낮은 비용의 [chosen-prefix collision attack]이 발견되어서[^sha-1-collision],
   [HMAC] 이외의 용도로는 사용하지 말아야합니다. 따라서 TLS 1.2 미만 버전은 사용하지
   않아야합니다.

   [cryptographic hash function]: https://en.wikipedia.org/wiki/Cryptographic_hash_function

   [MD5]: https://en.wikipedia.org/wiki/MD5

   [SHA-1]: https://en.wikipedia.org/wiki/SHA-1

   [chosen-prefix collision attack]: https://en.wikipedia.org/wiki/Collision_attack#Chosen-prefix_collision_attack

   [HMAC]: https://en.wikipedia.org/wiki/HMAC

</details>

<details>

<summary>

<strong>일부 Legacy Cipher Suite 들에 대한 지원을 중단하는 이유</strong>

</summary>

Cipher Suite란 TLS 통신시 사용되는 암호 알고리즘의 집합을 의미합니다. TLS 1.2는 다양한 Cipher
Suite들을 지원하지만 이들 모두가 안전한 것은 아닙니다. 포트원은 아래 기준을 모두 충족하는 안전한
Cipher Suite들만을 지원하도록 정책을 변경하였습니다.

- [완전 순방향 비밀성(Perfect Forward Secrecy)][PFS]을 보장할 것

  TLS 통신 중 잠재적으로 발생할 수 있는 위험 요소 중 하나는, 키교환 알고리즘에 의해 생성된
  세션키가 유출되었을 때 해당 세션키의 수명이 일시적이지 않다면 과거 세션에서 주고받았던
  데이터들까지 모두 해독될 수 있다는 것입니다. [완전 순방향 비밀성][PFS]을 보장한다는 것은 매
  세션마다 새로운 키를 생성함으로써 키가 유출되더라도 과거의 통신이 해독되는 것을 막는 것입니다.
  완전 순방향 비밀성이 보장될 경우, TLS 프로토콜에 새로운 취약점이 발견되어 통신이 복호화당하는
  사태가 발생하더라도, 공격자에게 노출하는 기밀의 범위를 크게 줄일 수 있습니다.

- [MD5], [SHA-1] 등 약한 해시 함수를 쓰지 않을 것

- [RC4], 3DES 등 약한 암호화 알고리즘을 사용하지 않을 것, 국제표준 암호화 알고리즘만을 사용할 것

[PFS]: https://en.wikipedia.org/wiki/Forward_secrecy

</details>

---

## TLS 버전 및 Cipher Suite 업그레이드 가이드

포트원은 TLS 1.3 으로의 업그레이드를 권장합니다.

### Java 6

Java 6은 기본적으로 TLS 1.2를 지원하지 않습니다.

(이미지 첨부: 출처: https\://www\.ateam-oracle.com/post/transport-level-security-tls-and-java)

JDK 6u121 버전부터는 TLS 1.2를 지원하지만 default TLS 버전은 여전히 1.0일뿐더러 Java 6의 JCE(Java
Cryptography Extension) Provider가 타원곡선 암호화 알고리즘을 지원하지 않기때문에 [완전 순방향
비밀성][PFS]이 보장되지 않아 여전히 Legacy Cipher Suite를 써야합니다.

따라서, Java 6에서 TLS 통신을 안전하게 하려면 아래 두 방법 중 하나를 택해야 합니다.

<details>

<summary>

<strong>JDK 8u261 이상으로 버전 업그레이드</strong>

</summary>

가장 바람직한 방법은 공식 지원이 이미 종료된 Java 6의 사용을 멈추고, Java 8 이상의 버전으로
업그레이드하는 것입니다. Java 8 부터 기본 TLS 버전이 1.2이고, JDK 8u261 이상부터는 TLS 1.3 통신을
지원하기때문에 TLS 통신을 안전하게 할 수 있습니다.

Java 7의 경우, Java 6과 마찬가지로 보안 업데이트가 중단된 상태이고 기본으로 TLS 1.0을 사용하기
때문에 Java 7로의 업그레이드는 권장하지 않습니다.

</details>

<details>

<summary>

<strong>서드파티 라이브러리를 통한 TLS 버전 업데이트</strong>

</summary>

자바 업그레이드가 곤란할 경우, 서드파티 라이브러리를 사용해 TLS 버전을 업그레이드할 수 있습니다.

TLS 1.2 및 [완전 순방향 비밀성][PFS]를 지원하는 서드파티 JCE(Java Cryptography Extension) 및
JSSE(Java Secure Socket Extension) 구현체를 설치할 경우, 자바 업그레이드 없이 TLS 통신을 안전하게
할 수 있습니다.

본 가이드에서는 [Bouncy Castle]이라는 오픈소스 라이브러리를 이용한 예시를 설명합니다.

1. [Bouncy Castle] 홈페이지에서 아래의 세 파일을 다운받습니다.

   - bcprov-jdk15to18-_VERSION_.jar
   - bctls-jdk15to18-_VERSION_.jar
   - bcutil-jdk15to18-_VERSION_.jar

2. 세 jar 파일을 `${JAVA_HOME}/jre/lib/ext` 디렉토리에 복사합니다.

3. `${JAVA_HOME}/jre/lib/security` 디렉토리의 "java.security" 파일을 아래와 같이 수정합니다.



4. 오라클이 배포하는 "[jce\_policy-6.zip][jce_policy-6.zip]" 파일을 다운로드 받습니다.

5. 압축을 푼 후 "US\_export\_policy.jar", "local\_policy.jar" 두 파일을 \
   `${JAVA_HOME}/jre/lib/security` 디렉토리 내에 덮어씌웁니다.

[Bouncy Castle]: https://www.bouncycastle.org/latest_releases.html

[jce_policy-6.zip]: https://www.oracle.com/java/technologies/jce-6-download.html

</details>

### Java 7

Java 7의 경우 TLS 1.2를 지원하기는 하나 default TLS 버전은 여전히 1.0입니다.

(이미지 첨부: 출처: https\://www\.ateam-oracle.com/post/transport-level-security-tls-and-java)

뿐만 아니라 JDK 버전에 따라 포트원에서 허용하는 Cipher Suite 조건인 "Forward secrecy 지원"과 "SHA-1 미사용"을 만족하는
Cipher Suite를 지원하지 않기도 합니다.
본 가이드에서는 Java 7에서 포트원 보안 규격에 맞는 TLS 버전 및 Cipher suite 설정에 대한 방법 3가지를 제공합니다.

<details>

<summary>

<strong>JDK 8u261 이상으로 버전 업그레이드</strong>

</summary>

가장 바람직한 방법은 공식 지원이 이미 종료된 Java 7의 사용을 멈추고, Java 8 이상의 버전으로
업그레이드하는 것입니다. Java 8 부터 기본 TLS 버전이 1.2이고, JDK 8u261 이상부터는 TLS 1.3 통신을
지원하기때문에 TLS 통신을 안전하게 할 수 있습니다.

</details>

<details>

<summary>

<strong>JDK 7u321 이상으로 버전 업그레이드, 1.2 사용 설정</strong>

</summary>

JDK 7u321 버전부터 기본 Cipher Suite가 [완전 순방향 비밀성][PFS]을 지원하고 [SHA-1] 등 약한 해시를
사용하지 않는것으로 변경되었습니다. 따라서 JDK 7u321 이상으로 업그레이드 할 경우, 기본 TLS 버전
수정을 제외한 별도의 설정이 필요하지 않습니다. JDK 7u321 미만의 버전을 사용할 경우, 최소한 JDK
7u191 이상의 버전을 사용해야 안전한 Cipher Suite들을 사용할 수 있습니다.

JDK 버전업이 완료되었다면, 아래 두 방법 중 하나를 골라 기본 TLS 버전을 1.0에서 1.2로 올려야 합니다.

1. System property

   Java 애플리케이션 구동 시 아래와 같은 system property 설정을 추가하면, 기본 TLS 버전이 1.2로
   변경됩니다.

   ```bash
   java -Djdk.tls.client.protocols="TLSv1.2" ...
   ```

   코드에 강제로 TLS 1.2 이외의 버전을 사용하도록 하는 코드가 있을 경우, 에러가 발생할 수
   있습니다.

2. Socket client의 TLS 버전 지정

   아래와 같이 자바 코드수준에서도 TLS socket client가 사용할 TLS 버전을 직접 지정해줄 수
   있습니다.

   ```java
   // SSLSocket, SSLEngine, SSLServerSocket API를 사용하는 경우
   sslSocket.setEnabledProtocols(new String[] {"TLSv1.2"});

   // SSLContext 생성자를 사용하는 경우
   SSLContext ctx = SSLContext.getInstance("TLSv1.2");

   // SSLParameters API를 사용하는 경우
   sslParameters.setProtocols(new String[] {"TLSv1.2"});
   ```

</details>

<details>

<summary>

<strong>서드파티 라이브러리를 통한 TLS 버전 업데이트</strong>

</summary>

Java 6 가이드와 마찬가지 방법으로 서드파티 라이브러리를 통해 TLS 버전을 업데이트할 수 있습니다.

</details>

<p style="height:5rem" />

---

[^tls-1.0-chrome]: ["TLS 1.0 and TLS 1.1 - Chrome Platform Status"](https://chromestatus.com/feature/5759116003770368). chromestatus.com. Retrieved 2024-03-25.

[^tls-1.0-browsers]: Bright, Peter (2018-10-17). ["Apple, Google, Microsoft, and Mozilla come together to end TLS 1.0"](https://arstechnica.com/gadgets/2018/10/browser-vendors-unite-to-end-support-for-20-year-old-tls-1-0/). Retrieved 2024-03-25.

[^sha-1-collision]: Gaëtan Leurent; Thomas Peyrin (2020-01-05). ["SHA-1 is a Shambles - First Chosen-Prefix Collision on SHA-1 and Application to the PGP Web of Trust"](https://eprint.iacr.org/2020/014.pdf) (PDF).
