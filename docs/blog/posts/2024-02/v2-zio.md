---
title: 포트원 V2 이야기 - Scala와 ZIO로 안정적인 결제 시스템 만들기
description: 안정적인 결제 시스템을 만들기 위해 기술적으로 의사결정한 내용에 대해 소개합니다.
author: BaekGeunYoung
date: 2024-02-28T15:00:00.000Z
tags:
  - Core V2
  - Backend
  - Scala
  - ZIO
---

## 포트원 라이트닝 프로젝트

지난 10년간 포트원은 고객에게 ‘편리한 결제 연동 경험’을 제공했고, 지금까지 많은 사랑을 받고 있습니다.
많은 서비스들이 연동의 편의성을 강조하며 모듈을 출시하고 있지만, 연동 편의성은 오랜 노하우를 축적한 포트원이 가장 잘하는 영역입니다.
2023년 하반기, 포트원은 혁신적인 결제 경험을 위해 새로 ‘라이트닝 프로젝트’에 돌입했습니다.

_'연동 방식, 지금이 과연 최선의 방법일까?'_

_'결제 연동을 진행하는 개발자들이 시스템을 더 쉽게 이해하려면 어떻게 해야 할까?'_

_'휴먼 에러를 가장 효과적으로 줄일 수 있는 방법은 무엇일까?'_

지금까지의 운영 경험을 바탕으로 포트원을 연동하는 개발자들이 더욱 쉽게 시스템을 이해하고 결제를 연동할 수 있도록,
내부 시스템 개선으로 더 많은 결제 트래픽을 수용할 수 있는 새로운 V2 결제 모듈을 만들었습니다.

야심찬 목표를 가지고 시작한 프로젝트인 만큼, 개발 조직에서 목표를 달성하기 위해 어떤 기술적 노력들을 했는지
"포트원 V2 이야기"라는 대주제로 기술블로그를 통해 많은 분들과 공유하고자 합니다.
그 이야기의 첫 시작으로 이번 글에서는 포트원 V2의 코드베이스를 구성하고 있는 가장 근본적인 기술들에 대해 이야기해보고자 하는데요,
크게 2가지 정도로 기술의 갈래를 나누어볼 수 있을 것 같습니다.

- **Programming Language: Scala**
- **Effect System: ZIO**

## Programming Language: Scala

프로그래밍 언어는 저마다 다른 철학과 특징을 가지고 있으며, 이로 인해 각각의 언어는 서로 다른 영역에서 효과적으로 활용될 수 있습니다.
어플리케이션이 만족해야 하는 거시적인 요구사항에 따라 적절한 프로그래밍 언어를 선택하는 것은 단순히 개발을 넘어 비즈니스 관점에서도 매우 중요한 의사결정 문제입니다.
프로그래밍 언어를 선택하기에 앞서, 포트원의 결제 모듈은 어떤 요구사항을 만족해야 하는지를 먼저 알아보겠습니다.

1. **버그 없는 제품을 만들어야 합니다.**

포트원은 결제 시스템이기 때문에 버그에 매우 민감합니다.
제품이 의도대로 동작하지 않을 시 포트원의 고객사는 즉시 금전적인 손해를 입게 될 것입니다.
인간에 의한 버그 발생 가능성을 최소화할 수 있도록, 코드의 예측 가능성과 테스트 용이성을 극대화할 수 있는 언어를 선택해야 합니다.

2. **제품을 빠른 속도로 발전시킬 수 있어야 합니다.**

포트원은 디지털 커머스 회사들의 성장을 가속화하고자 하는 미션을 가지고 있습니다.
급성장하는 이커머스 시장의 트렌드에 맞게, 포트원은 고객사의 성장을 돕는 결제 관련 핵심 기능들을 앞으로 매우 많이, 빠르게 만들어 제공해야 합니다.
이러한 요구사항을 만족하기 위해 우리는 추상화와 모듈화를 가능케 하는 언어를 선택함으로써 유지보수 용이성을 높이고, 핵심 비즈니스 영역에만 집중할 수 있습니다.
또한 보일러 플레이트 코드를 줄여 개발 생산성을 높일 수 있는 메타프로그래밍 지원까지 있다면 매우 좋을 것 같습니다.

포트원 개발팀은 이러한 요구사항을 만족하는 언어로 [스칼라(Scala)][scala]를 선택했습니다.
Scala는 국내에서는 많이 쓰이지 않는 생소한 언어이지만 포트원의 결제 모듈을 만들기에 적합한 특징을 많이 가지고 있는데, 그 특징에 대해 하나씩 소개해보겠습니다.

### Multi-paradigm 지원 (OOP + FP)

#### OOP 지원

Scala는 OOP(Object Oriented Programming, 객체 지향 프로그래밍)를 지원합니다.
Scala는 Java Bytecode로 컴파일되어 JVM 위에서 실행되는 언어인데, Java와 완전히 같지는 않지만 비슷한 방식으로 Inheritance(상속) 기능을 제공합니다.
Inheritance는 객체의 인터페이스와 구현체를 분리할 수 있는 OOP의 핵심 기능으로, 이 기능을 통해 관심사를 분리하고 적절한 추상화를 달성할 수 있습니다.

Inheritance를 이용한 관심사의 분리를 예시 코드로 알아보겠습니다.
포트원은 다양한 방식의 결제를 지원하며, 그 중 본인인증을 별도로 거치지 않고 카드 정보만으로 즉시 결제가 이루어지는 수기(키인)결제 방식이 존재합니다.
수기결제의 비즈니스 로직을 먼저 한글로 풀어보겠습니다.

1. 수기결제를 시작한다는 내용의 이벤트 저장
2. 사용자가 넘긴 channel key를 이용해 채널(PG사별 연동 정보가 담긴 엔티티)을 얻어오기
3. 채널 정보 요청 결과를 이벤트로 저장
4. 채널을 이용해 PG사에 수기결제 요청하기
5. 수기 결제 요청 결과를 이벤트로 저장

중간중간 이벤트를 저장하는 부분이 눈에 띄는데, 이는 포트원 V2 모듈이 Event Sourcing이라는 디자인 패턴을 활용하고 있기 때문입니다.
이 패턴에 대해서는 추후에 별도 주제로 다루겠습니다.

위 비즈니스 로직을 실행하기 위해 아래와 같이 3가지의 인터페이스가 필요합니다.

```scala
// 이벤트 저장
trait Persist[Evt] {
  def apply(events: Evt*): UIO[Unit]
}

// 채널 정보 가져오기
trait ChannelService {
  def fetchChannel(
      storeId: Store.Id,
      channelKey: NonEmptyString
  ): IO[FetchChannelError, Channel]
}

// PG사에 수기(키인)결제 요청하기
trait InstantPayGatewayService {
  def pay(
      base: Base,
      channel: Channel,
      paymentMethodForm: InstantPaymentMethodForm,
  ): IO[InstantGatewayService.Failure, PayResponse]
}
```

해당 인터페이스의 구현체 코드까지 본 글에서 소개하진 않겠습니다만, 분명 구현체 코드들은 특정 기술이나 프로토콜, 외부 서비스 등에 의존한 채로 작성될 것입니다.
핵심 비즈니스 로직을 작성할 때는 구현에 대한 세부사항을 모른 채로 해당 함수들의 시그니쳐에만 의존해서 로직을 작성할 수 있습니다.

```scala
for {
  // 1. 수기결제를 시작한다는 내용의 이벤트 저장
  _ <- persist(Event.CommandReceived(id, form, store, customer, paymentMethodForm))

  // 2. 사용자가 넘긴 channel key를 이용해 channel 얻어오기
  channel <- channelService
               .fetchChannel(store.id, form.channelKey)
               .flatMapError(e => fail(Event.FetchingChannelFailed(form.channelKey, e)))

  // 3. 채널 정보 요청 결과를 이벤트로 저장
  _ <- persist(Event.FetchingChannelSucceeded(channel))

  // 4. 채널을 이용해 PG사에 수기결제 요청하기
  resp <- instantGatewayService
            .pay(base, channel, paymentMethodForm)
            .flatMapError(e => failWithWebhook(base, channel, Event.TgsFailed(e)))

  // 5. 수기 결제 요청 결과를 이벤트로 저장
  _ <- persist(Event.TgsSucceeded(resp))

  ...
} yield ??
```

#### FP 지원

Scala는 위에서 확인한 것처럼 OOP도 지원하지만 FP(Functional Programming, 함수형 프로그래밍) 패러다임 또한
동시에 지원한다는 큰 특징을 가지고 있습니다.
1985년 발표된 John Hudges의 [**“Why Functional Programming Matters”**][why-fp-matters] 라는 논문에서는
아래와 같이 Functional Programming의 주요 특징 및 장점을 요약하고 있습니다.

> **Why Functional Programming Matters 인용**
>
> Functional programs contain no assignment statements,
> so variables, once given a value, never change.
> More generally, functional programs contain no side-effects at all.
> A function call can have no effect other than to compute its result.
> This eliminates a major source of bugs, and also makes the order of execution irrelevant — since
> no sideeffect can change an expression’s value, it can be evaluated at any time.
> This relieves the programmer of the burden of prescribing the flow of control.
> Since expressions can be evaluated at any time, one can freely replace variables
> by their values and vice versa — that is, programs are “referentially transparent”.
> This freedom helps make functional programs more tractable
> mathematically than their conventional counterparts.

다시 말해 함수형 프로그래밍이란 부수 효과가 없는 순수 함수를 중심으로 코드의 예측 가능성과 재사용성을 높이는 프로그래밍 방식을 뜻합니다.
부수 효과의 대표적인 예시로는 Exception이 있는데, 어떤 함수가 내부 구현에서 throw하는 Exception은
함수의 시그니쳐에 드러나지 않기 때문에 함수를 순수하지 않게 만듭니다.
(Java의 경우 `throws` 키워드를 이용해 특정 Checked Exception의 발생 가능성을 표현하는 등,
일부 언어에서는 Exception에 국한된 Effect System을 언어 차원에서 제공하기도 합니다.)
함수형 프로그래밍 패러다임에서는 일반적으로 `Either` 라는 타입을 리턴 타입으로 사용해 에러의 발생 가능성을 표현하고 함수를 순수하게 만들 수 있습니다.
아래는 클라이언트가 넘겨준 request를 우리의 도메인 모델로 변환하는 코드의 예시입니다.
도메인 모델마다 제약 사항이 있으므로, 클라이언트의 request를 변환할 때 실패할 가능성이 있을 것입니다.
이를 `Either[Errors, SomeDomainType]` 라는 타입으로 표현할 수 있고, 이 타입을 리턴하는 `decode` 함수를 만들어 사용할 수 있습니다.

```scala
// raw String을 Store.Id 타입으로 변환합니다. (실패할 수 있음을 Either 타입으로 표현)
def decodeStoreId(raw: String): Either[Error, Store.Id] = ???

// raw String을 Payment.Id 타입으로 변환합니다. (실패할 수 있음을 Either 타입으로 표현)
def decodePaymentId(raw: String): Either[Error, Payment.Id] = ???
```

그리고 `Either` 는 `flatMap` 함수를 통한 chaining을 지원하는데, 이를 이용해 request의 여러 필드들을 차례로 변환하는 코드를 작성할 수 있습니다.
(가독성을 위해 Scala의 [for-comprehension][]을 이용했습니다.)

```scala
// request.storeId와 request.paymentId를 각각 적절한 도메인 타입으로 변환합니다.
// 둘 중 하나라도 변환에 실패하면 해당 타입은 에러를 담고 있을 것입니다.
val validated: Either[Error, (Store.Id, Payment.Id)] =
  for {
    storeId   <- decodeStoreId(request.storeId)
    paymentId <- decodePaymentId(request.paymentId)
  } yield (storeId, paymentId)
```

이렇게 Exception을 사용하지 않고 `Either` type을 이용하면 어떤 코드 블락이 어떤 에러들을 리턴할 수 있는지를
타입을 통해 명확히 문서화할 수 있고, 코드의 플로우에 대한 예측 가능성이 한 층 향상된다는 장점이 있습니다.
이 부분에서는 Exception이라는 부수 효과를 type으로 encoding하는 방법에 대해 간략히 소개드렸지만, 실제로는 훨씬 더 많은 종류의 부수 효과가 존재합니다.
(외부 리소스의 획득 및 해제, mutable 변수의 값 변경, I/O operation 등등…)
이러한 모든 부수 효과를 타입으로 표현하고자 하는 시스템을 Effect System이라고 부르는데, 이에 대해서는 뒷부분에서 다시 자세하게 설명하겠습니다.

### 강력한 매크로 지원

Scala는 소스의 [AST(Abstract Syntax Tree)][ast]에 접근하고, 수정하고, 새로운 AST를 만들어낼 수 있는 강력한 매크로 기능을 지원합니다.
매크로를 적절히 이용하면 여러 곳에서 기계적이고 반복적으로 작성해야만 하는 코드의 양을 획기적으로 줄일 수 있고, 이를 통해 개발 생산성의 향상을 도모할 수 있습니다.

포트원에서는 마이크로서비스들 간의 통신에서 gRPC를 사용하고 있는데, 응답으로 나가는
protobuf message를 정의할 때 아래와 같은 형식을 따르도록 컨벤션을 맞추었습니다.

```proto
message SomeResponse {
  oneof result {
    Error error = 1;
    Data data = 2;
    ...
  }

  message Error {
    oneof error {
      // ex) InvalidArgument invalid_argument = 1;
      [ErrorName] [error_name] = 1;
      [ErrorName] [error_name] = 2;
      ...
    }
  }

  message Data {
    ...
  }
}
```

준수한 표현력을 가진 message이지만, 이를 통해 자동 생성된 Scala class 정의에 맞게
응답을 만들어주기 위해서는 아래와 같이 복잡한 객체 생성 코드를 작성해야 합니다.

```scala
val invalidArgument =
  SomeResponse(
    SomeResponse.Result.Error(
      SomeResponse.Error(
        SomeResponse.Error.Error.InvalidArgument(InvalidArgument()),
      ),
    ),
  )
```

어떤 RPC가 여러 개의 에러를 발생시킬 가능성이 있다고 하면, 에러가 발생하는 경우마다 모두 이런 복잡한 에러 응답 생성 코드를 작성해야 할 것입니다.
아래 코드는 포트원 V2에 존재하는 `빌링키 삭제` 기능에서, 경우에 맞게 에러 응답을 만들어주는 코드 예시입니다.

```scala
private def mapDeleteSchedulesError(failure: ScheduleService.DeleteFailure): DeleteSchedulesResponse =
  failure match {
    case ScheduleService.DeleteFailure.BillingKeyDeleted(_)  =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.BillingKeyAlreadyDeleted(grpc.BillingKeyAlreadyDeleted()),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.BillingKeyNotFound(_) =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.BillingKeyNotFound(grpc.BillingKeyNotFound()),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.NotFound(ids)         =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.BillingKeyNotFound(grpc.BillingKeyNotFound()),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.AlreadyDeleted(ids)   =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.ScheduleAlreadyDeleted(grpc.ScheduleAlreadyDeleted(ids)),
          ),
        ),
      )
    case ScheduleService.DeleteFailure.AlreadyProcessed(ids) =>
      DeleteSchedulesResponse(
        DeleteSchedulesResponse.Result.Error(
          DeleteSchedulesResponse.Error(
            DeleteSchedulesResponse.Error.Error.ScheduleAlreadyProcessed(grpc.ScheduleAlreadyProcessed(ids)),
          ),
        ),
      )
  }
```

클래스 간의 계층 구조가 매우 복잡하기 때문에 이러한 코드는 결코 쉽게 작성할 수 없으며, 각각의 RPC에 존재하는 메세지가
하나의 추상 클래스로 묶이는 것도 아니기 때문에 일반적인 방법으로는 해당 코드를 공통화하는 것도 불가능합니다.

하지만 이 코드들은 분명한 패턴을 가지고 있기 때문에 기계적으로 작성할 수 있고, 그렇다면 매크로를 사용해 코드 생성을 자동화하는 것이 가능합니다.
매크로를 사용하면 위 코드를 아래와 같이 단순하게 만들 수 있습니다.
(해당 매크로의 구현은 다소 복잡하기 때문에 본 글에서 소개하지는 않고, 매크로를 주제로 한 별도의 글로 추후에 다시 소개하겠습니다.)

```scala
private def mapDeleteSchedulesError(failure: ScheduleService.DeleteFailure): DeleteSchedulesResponse =
  failure match {
    case ScheduleService.DeleteFailure.BillingKeyDeleted(_)  =>
      genErrorResponse[DeleteSchedulesResponse](grpc.BillingKeyAlreadyDeleted())
    case ScheduleService.DeleteFailure.BillingKeyNotFound(_) =>
      genErrorResponse[DeleteSchedulesResponse](grpc.BillingKeyNotFound())
    case ScheduleService.DeleteFailure.NotFound(ids)         =>
      genErrorResponse[DeleteSchedulesResponse](grpc.ScheduleNotFound(ids))
    case ScheduleService.DeleteFailure.AlreadyDeleted(ids)   =>
      genErrorResponse[DeleteSchedulesResponse](grpc.ScheduleAlreadyDeleted(ids))
    case ScheduleService.DeleteFailure.AlreadyProcessed(ids) =>
      genErrorResponse[DeleteSchedulesResponse](grpc.ScheduleAlreadyProcessed(ids))
  }
```

## Effect System: ZIO

Scala는 강력한 타입 시스템을 탑재한 것으로 잘 알려져 있습니다.
Effect System 은 타입 시스템의 확장으로, 어떤 프로그램이 실행되는 과정에서 발생할 수 있는 부수 효과들 또한 타입으로 표현하는 시스템을 말합니다.
Effect System을 이용하면 코드가 어떤 부수 효과를 가지고 있는지 명시적으로 표현할 수 있으므로
버그 발생 가능성을 낮추고 예측 가능성을 높인다는 기존 타입 시스템의 장점을 강화할 수 있으며,
더불어 effect를 type으로 추상화함으로써 재사용성과 테스트 용이성을 높일 수 있습니다.
위에서 소개한 `Either` 또한 실패 타입을 명시하고 Exception이라는 부수 효과를 제거할 수 있으므로 Effect System의 일부라고 할 수 있지만,
현실 세계에서는 Exception 이외에도 훨씬 많은 종류의 부수 효과가 존재합니다.
(I/O operation, mutable 변수의 값 변경, 외부 리소스의 획득/해제 등..)
이러한 모든 종류의 부수 효과를 타입으로 표현하는 Effect System 라이브러리가 Scala 진영에는 다수 존재했으며,
부수 효과를 명시적으로 표현하고 제어할 수 있다는 점은 버그가 없는 어플리케이션을 만들어야 하는 포트원의 상황에 잘 적용될 수 있다고 생각해
Effect System을 도입하기로 결정했습니다.

많은 Effect System 라이브러리 중 [ZIO][zio]는 가장 늦게 만들어졌음에도 불구하고 효율적인 런타임 구현과 실용적인 API로 많은 사랑을 받으며
최근 Scala 진영에서 가장 인기 있는 Effect System 라이브러리가 되었습니다.

(이미지 첨부: Scala Effect System별 GitHub Star History)

모든 기술이 그렇듯 Effect System 또한 장점만을 가지고 있는 것은 아닙니다.
Effect System을 이용하게 되면 함수가 가지고 있는 부수 효과의 종류에 따라 적절한 Effect Type 을 매번 골라야 하며
하나의 함수가 여러 종류의 부수 효과를 동시에 가지고 있는 경우 타입 구성이 복잡해져 오히려 유지보수 용이성을 떨어뜨리고
의도치 않게 runtime overhead 를 발생시키는 등의 단점 또한 존재합니다.
ZIO 는 이러한 단점을 보완하기 위해 많은 프로그램에서 흔히 사용되는 부수 효과들을 하나로 합쳐
다양한 상황에서 보편적으로 사용할 수 있는 단 하나의 Effect Type 을 제공합니다.
이 type 의 이름은 라이브러리 이름과 동일한 `ZIO` 이고, 해당 함수의 타입 파라미터 구성은 아래와 같습니다.

### `ZIO[R, E, A]`

- **R - Environment Type**. 해당 Effect 가 R type 의 의존성을 필요로 한다는 의미입니다.
- **E – Failure Type**. 해당 Effect 는 E type 의 값으로 실패할 수 있다는 의미입니다.
- **A – Success Type**. 해당 Effect 는 A type 의 값으로 성공할 수 있다는 의미입니다.

한마디로 `ZIO[R, E, A]` 타입은 `R` type 의 의존성을 필요로 하며, 실패했을 때는 `E` type 의 값을 produce하고
성공했을 때는 `A` type의 값을 produce하는 어떤 Effect를 의미합니다.
다시 말해 해당 타입은 `R => Either[E, A]` 타입의 effectful 한 버전이라고 할 수 있습니다.

### ZIO는 데이터 타입에 불과하다

ZIO는 순수 함수형 Effect System으로 함수형 프로그래밍 철학을 충실히 따르고 있으며,
ZIO data type은 그 자체로는 아무런 부수 효과를 발생시키지 않는 정적인 data type입니다.
그렇기 때문에 ZIO를 이용해 작성한 함수는 부수 효과를 실제로 발생시키는 것이 아닌 부수 효과를 “서술”하는 일을 하게 되며,
단순히 ZIO의 data type을 만드는 일을 하게 됩니다.
그렇게 만들어진 ZIO는 동작에 대한 서술을 모두 담고 있어 나중에 원할 때면 언제든 평가(evaluation)될 수 있으며,
이미 만들어진 ZIO를 다른 ZIO와 합치거나 반복/재시도 등의 새로운 기능을 덧붙이는 등의 작업을 매우 안전하고 손쉽게 할 수 있습니다.

이렇게 동작에 대한 서술(description)과 평가(evaluation)을 분리하는 테크닉을 Lazy Evaluation이라고 합니다.
우리는 Lazy Evaluation을 통해 **코드의 합성 가능성/유지보수 용이성/예측 가능성 등을 극대화**할 수 있게 됩니다.

### **ZIO를 이용해 Effect 조립하기**

동시성 프로그래밍 혹은 비동기 프로그래밍을 할 때 이러한 Lazy Evaluation을 잘 활용할 수 있는데,
포트원 콘솔을 통해 가입한 상점의 정보를 얻어오는 코드를 예시로 들어보겠습니다.
기본적인 상점 정보와 더불어 결제에 관한 구체적인 정보도 가져와야 하는데,
이 둘은 각각 `getStore`와 `getPaymentSettings` 라는 RPC를 호출하여 가져올 수 있습니다.

```scala
val getStore: IO[StatusException, GetStoreResponse] =
  storeService.getStore(getStoreRequest)

val getPaymentSettings: IO[StatusException, GetPaymentSettingsResponse] =
  storeService.getPaymentSettings(getPaymentSettingsRequest)
```

위 코드에서 주목할 점은 두 RPC가 리턴하는 타입이 `Response`가 아니라 `IO[StatusException, Response]` 라는 점입니다.
해당 RPC들은 실제로 부수 효과를 발생시키는 것이 아닌, 부수 효과를 서술하는 ZIO 타입을 리턴하고 있습니다.
(`IO[E, A]` 타입은 `ZIO[Any, E, A]` 타입의 alias입니다.)
Functional Effect System을 사용하지 않는 코드라면 아마 `getStore` 와 `getPaymentSettings` 함수를
호출하는 즉시 I/O가 발생할 것이고, 이 두 I/O는 병렬화되지 못하고 순차적으로 발생할 것입니다.
하지만 우리는 ZIO 타입을 이용해 함수를 순수하게 만들었으므로 이 Effect들을 우리가 원하는대로 조립할 수 있습니다.

```scala
val getStore: IO[StatusException, GetStoreResponse] =
  storeService.getStore(getStoreRequest)

val getPaymentSettings: IO[StatusException, GetPaymentSettingsResponse] =
  storeService.getPaymentSettings(getPaymentSettingsRequest)

// Effect 조립하기: zipPar(2개의 Effect를 concurrent하게 실행)를 이용
val getStoreAndSettings = getStore.zipPar(getPaymentSettings)
```

위 예시는 두 개의 작업을 동시에 실행해 결과를 Tuple로 모으는 코드라면, 두 개의 작업을 동시에 실행한 후 먼저 도착한 것만 취하고
다른 작업의 실행을 즉시 취소하는 코드는 어떻게 작성할 수 있을까요?
실행 흐름 간 경쟁을 Effect System 없이 구현하려면
훨씬 더 복잡하고 난해한 low level API를 이용해 로직을 작성해야 할 것입니다.
아래는 Java에서 스레드 간 경쟁을 구현하는 코드입니다.

```java
import java.util.Random;
import java.util.concurrent.CountDownLatch;

public class RaceExample {
  public static void main(String[] args) throws InterruptedException {
    Random rand = new Random();
    int numThreads = 2; // 2개의 스레드 생성
    CountDownLatch latch = new CountDownLatch(1);

    WorkerThread[] threads = new WorkerThread[numThreads];

    for (int i = 0; i < numThreads; i++) {
      threads[i] = new WorkerThread(i, latch, rand);
      threads[i].start();
    }

    // 두 개의 스레드 중 먼저 완료되는 한 스레드만을 기다립니다.
    latch.await();

    // 아직 실행 중인 다른 하나의 스레드를 interrupt 합니다.
    for (int i = 0; i < numThreads; i++) {
      if (!threads[i].isDone()) {
        threads[i].interrupt();
      }
    }
  }

  static class WorkerThread extends Thread {
    private int id;
    private CountDownLatch latch;
    private volatile boolean done = false;
    private Random rand;

    public WorkerThread(int id, CountDownLatch latch, Random rand) {
      this.id = id;
      this.latch = latch;
      this.rand = rand;
    }

    @Override
    public void run() {
      try {
        // 스레드에서 특정 작업을 수행합니다.
        System.out.println("[Thread " + id + "] COMPLETED");
        done = true;
      } catch (InterruptedException e) {
        System.out.println("[Thread " + id + "] INTERRUPTED");
      } finally {
        latch.countDown(); // CountDownLatch 를 감소시켜 작업이 완료됐음을 알립니다.
      }
    }

    public boolean isDone() {
      return done;
    }
  }
}
```

얼핏 봐도 상당히 복잡해보이는 코드입니다.
Java의 Thread와 CountDownLatch, volatile 키워드 등 난해한 low level API를
많이 사용해야 하므로 이는 생산성을 떨어뜨리고 버그의 발생 가능성을 높입니다.
ZIO를 이용하면 `raceEither` 함수를 이용해 동시 작업 간 경쟁 코드를 쉽고 안전하게 구현할 수 있습니다.
(Java의 Thread는 void 값만을 리턴하는 반면 ZIO는 실행이 완료된 후 type-safe하게 값을 리턴한다는 점도 큰 장점입니다.)

```scala
// raceEither를 이용하여 먼저 실행이 완료된 ZIO만 취하기
val getStoreOrSettings = getStore.raceEither(getPaymentSettings)
```

### ZIO를 이용해 반복 작업 구현하기

특정한 작업을 우리가 원하는 주기로 반복하고 싶은 경우에는 어떻게 해야 할까요?
ZIO에서는 실행 계획을 추상화한 `Schedule` 객체를 제공하고 있어, 적절한 Schedule을 만들고 이를 ZIO에 적용하기만 하면 됩니다.
아래의 코드는 ZIO에서 제공하는 기본적인 Schedule 생성 함수의 예시입니다.

```scala
// 예시1) 딜레이 없이 5회 반복
val recurs = Schedule.recurs(5)

// 예시2) 10ms의 주기로 영원히 반복
val spaced = Schedule.spaced(10.milliseconds)

// 예시3) 10ms에서 시작해 exponential하게 주기를 늘려가며 반복
val exponential = Schedule.exponential(10.milliseconds)
```

또한 아래와 같이 실행 계획을 합성할 수도 있습니다.

```scala
// 예시 1) 1초 간격으로 10번 동안 반복
val schedule = Schedule.recurs(10) && Schedule.spaced(1.second)

// 예시 2) 반복 주기를 exponential하게 증가시키되, 최대 주기는 10초
val schedule = Schedule.exponential(100.milliseconds) && Schedule.spaced(10.second)

// schedule을 이용하여 ZIO를 반복 실행하기
val getStoreRepeatedly =
  storeService.getStore(getStoreRequest).schedule(schedule)
```

지금까지 ZIO를 이용해 함수의 부수 효과를 제거하고,
ZIO는 순수한 데이터 타입이라는 점을 이용해 ZIO를 자유롭게 합성하고 조작하는 방법에 대해 알아보았습니다.
처음엔 이러한 접근법이 다소 낯설게 느껴질 수 있으나,
타입으로 효과를 표현한다는 것은 이미 여러번 언급했듯이 함수가 하는 일을 훨씬 더 명시적으로 표현하여
버그의 발생 가능성을 낮추고 코드의 예측 가능성을 높이는 데 기여합니다.
실제로 ZIO 라이브러리를 꽤 오랜 기간 동안 사용하면서 그 실효성과 사용성을 검증해 온 포트원 개발팀의 입장에서는
Effect System을 도입하기로 한 것이 초반의 러닝 커브를 감안하고도 적절한 의사결정이었다고 생각하고 있습니다.

흔히 라이브러리는 외부 의존성으로 취급되어 어플리케이션을 만들 때면 이 라이브러리 의존성을 격리하여 언제든 대체할 수 있는 형태로 아키텍쳐를 구성하곤 합니다.
그러나 Effect System 을 사용하게 되면 프로젝트 도처에 해당 의존성을 가지는 코드가 존재하게 되므로 Effect System 라이브러리는
사실상 프로젝트를 구성하는 핵심 요소로 기능하게 될 것입니다.
대체하기가 힘든 만큼, 우리가 사용하는 Effect System은 효과적인 런타임과 사용성 있는 API를 제공해야 하며,
해당 Effect System을 중심으로 견고한 생태계가 형성되어 있어야 합니다.
ZIO는 그러한 조건에 잘 부합하는 Effect System이었고 현재까지는 아주 만족스럽게 사용 중입니다.

## 마무리

이번 글에서는 포트원 V2 이야기의 첫 시작으로, 포트원 V2 모듈의 코드베이스를 구성하고 있는 핵심 기술들에 대해 살펴보았습니다.
포트원은 수많은 고객사의 결제 요청을 감당해야 하는 시스템인 만큼 버그 없이 안정적으로 서빙할 수 있어야 하며,
디지털 커머스 회사들의 성장을 가속화한다는 포트원의 미션에 맞게 더 혁신적인 기능들을 빠르게 추가할 수도 있어야 합니다.
이러한 요구사항을 만족하기 위해 신중한 고민을 거쳐 의사결정을 했고, 그렇게 탄생한 포트원 V2 모듈은 수많은 디지털 커머스 회사들과 함께할 준비를 마쳤습니다.
포트원 V2에서는 커머스 회사들이 결제와 관련된 고민을 덜 수 있도록 멋진 기능들을 많이 출시할 예정이니, 앞으로 포트원 V2 모듈의 행보를 지켜봐주세요!

[scala]: https://scala-lang.org/

[why-fp-matters]: https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf

[for-comprehension]: https://docs.scala-lang.org/tour/for-comprehensions.html

[ast]: https://en.wikipedia.org/wiki/Abstract_syntax_tree

[zio]: https://zio.dev/
