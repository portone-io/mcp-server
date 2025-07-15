---
title: Solid로 간결하게 고성능 웹앱 만들기
description: 포트원에서 사용하는 프론트엔드 웹 프레임워크 중 하나인 Solid에 대해 소개하고, 포트원 내에서의 활용 사례를 다룹니다.
author: XiNiHa
date: 2024-04-14T15:00:00.000Z
tags:
  - Frontend
  - Solid
  - SolidStart
---

포트원에서는 프로덕트를 개발할 때 각 제품의 특성에 따라 다양한 프레임워크들을 검토 후 적용하고 있으며,
이 중 [Solid]의 경우 몇몇 프로덕트에 대해 프로덕션에서 적용하여 성공적으로 운영하고 있습니다.
이번 글에서는 Solid에 대한 간단한 소개부터, Solid가 가진 여러 특징들을 살펴보고,
포트원이 Solid를 도입한 방식과 도입 이후의 경험들에 대해서 이야기해보려 합니다.

## Solid?

아마 이 글을 읽으시는 분들 대부분은 React 혹은 Vue를 사용하는 프론트엔드 개발자이실 텐데요,
Solid는 이러한 프론트엔드 프레임워크들을 대체하기 위해서 만들어진 프레임워크로,
기존의 VDOM 및 컴포넌트 기반 프레임워크들이 가지고 있던 성능 및 편의성 측면의 단점을 개선하고,
그러면서도 Suspense와 스트리밍 SSR과 같은 다양한 최신 기능들을 지원하는 등,
다방면에서 뛰어난 모습을 보여 주는 프레임워크입니다.
앞서 언급된 프레임워크들에 비해 상대적으로 최근에 출시된 프레임워크라는 점 때문에
생태계 측면에서 부족한 부분들도 있지만,
코어 프레임워크 자체는 굉장히 안정적이고, 사용하기 간편하며,
다양한 기능들과 뛰어난 성능을 모두 갖추고 있습니다.

Solid는 2021년에 버전 v1.0이 출시된 프레임워크이며,
이후 [JavaScript Framework Benchmark] 등에서 최상위권의 성능을 보여주며 주목받기 시작했습니다.
Solid의 특징들은 이후 Angular나 Vue, Svelte 등에 간접적인 영향을 주거나,
Qwik이나 Leptos 등의 프레임워크들에 직접적으로 영향을 주는 등,
전반적인 프론트엔드 생태계에 큰 변화를 가져왔습니다.
과연 Solid의 어떤 점이 매력적이었길래 이렇게 많은 관심을 받고 있는 것일까요?
한번 Solid의 기반부터 짚어 나가면서 Solid의 여러 특징들을 살펴보도록 하겠습니다.

## Solid 시작하기

### 반응형 시스템

Solid의 가장 핵심적인 특징은 아마 Signal로 대표되는 반응형 시스템일 것입니다.
여기서 “반응형 시스템”은 단일 상태의 변화에 따라서 이 상태에 의존하는
파생 상태들과 부수 효과들이 연달아서 _반응하며_ 갱신 및 실행되는 시스템을 의미하는데요,
Solid는 Signal을 바탕으로 매우 간편하게 상태 그래프를 구성할 수 있는 반응형 시스템을 제공합니다.
한번 코드를 살펴볼까요?

```tsx
import { createEffect, createMemo, createSignal } from "solid-js";

// SolidJS가 변화를 추적할 수 있는 상태(Signal)를 생성합니다.
const [count, setCount] = createSignal(0);

// Signal의 값은 함수 호출을 통해 읽을 수 있습니다.
console.log(count());

// 다른 상태에 의존하는 새로운 상태를 생성합니다.
const doubleCount = createMemo(() => {
  // createMemo 등의 함수 내에서 Signal의 값을 가져올 경우,
  // 해당 Signal의 값 변화를 자동으로 구독하며,
  // 값이 변화할 경우 함수를 재실행합니다.
  return count() * 2;
});

// 의존하는 상태가 변화할 때마다 실행되는 부수 효과를 생성합니다.
createEffect(() => {
  console.log(`doubleCount: ${doubleCount()}`);
});

// 한 상태를 업데이트하면, 해당 상태에 의존하는 모든 부수 효과가 순차적으로 실행됩니다.
setInterval(() => {
  // 상태가 업데이트될 때, 부수 효과가 동기적으로 실행됩니다.
  setCount(count() + 1);
  console.log(`count update completed`);
}, 1000);

// 위 코드는 다음을 출력합니다.
//
// 0
// doubleCount: 0
// (1초 후)
// doubleCount: 2
// count update completed
// (1초 후)
// doubleCount: 4
// count update completed
// ...
```

(이미지 첨부: 예제 코드로 생성된 반응형 그래프)

예제 코드에서도 드러나듯이, Solid의 반응형 유틸리티들을 활용하면
컴포넌트나 Rules of Hooks 같은 거추장스러운 규칙들 혹은 다른 복잡한 구조를 도입하지 않고도
매우 간단한 방식으로 각종 상태와 다양한 부수 효과들을 관리할 수 있습니다.
또한 이 방식은 상태가 업데이트됨에 따라서 꼭 재실행이 필요한 코드들만 다시 실행되기 때문에,
컴포넌트 단위로 상태 업데이트를 관리하는 React와 같은 프레임워크들에 비해
많은 상황에서 뛰어난 성능을 보여줍니다.

### 반응형 시스템으로 DOM 조작하기

앞서 살펴보았듯이, Solid의 반응형 시스템을 사용하면 상태 변화에 따라서 실행되는
부수 효과를 손쉽게 생성할 수 있습니다.
그렇다면, 이걸 활용해서 DOM 요소가 상태의 변화에 따라서 함께 변화하도록 할 수 있지 않을까요?

```tsx
import { createEffect, createSignal } from "solid-js";

// 1초마다 1씩 증가하는 count 상태를 만듭니다.
const [count, setCount] = createSignal(0);
setInterval(() => setCount(count() + 1), 1000);

const div = document.createElement("div");
createEffect(() => {
  // count 상태가 변화할 때마다 div의 textContent를 업데이트합니다.
  div.textContent = count();
});
```

위 코드를 보면 알 수 있듯이, Solid에서는 매우 간단하게
상태의 변화에 따라 변화하는 DOM 요소를 만들 수 있습니다.
`render()` 함수나 컴포넌트 같은 것을 사용할 필요도 없이,
단순히 Solid에서 제공하는 몇 가지 함수들만 가지고도
손쉽게 상태에 따라 변화하는 UI를 만드는 것이 가능한데요,
Solid는 여기서 한 발 더 나아가서 JSX로부터 위와 같이
DOM을 구성하는 코드를 자동으로 생성해내는 기능을 제공하여,
단순함과 성능에 더해 편의성까지 챙겼습니다.

### JSX 컴파일러

Solid는 JSX를 효율적으로 컴파일하기 위해 [dom-expressions]라는 패키지를 Babel 플러그인 형태로 제공합니다.
이 플러그인은 소스 코드 내의 JSX를 Solid와 함께 사용할 수 있는 형태로 컴파일하는데요,

```tsx
// VDOM 객체가 아닌, 실제 HTMLDivElement를 반환합니다.
const div = <div width={100} />;
```

위 JSX를 컴파일하면, 다음과 같은 코드가 됩니다.

```tsx
import { template as _$template } from "solid-js/web";
const _tmpl$ = _$template(`<div width="100">`);
const div = _tmpl$();
```

`_$template()` 함수는 인자로 입력받은 템플릿을 DOM 노드로 생성하고,
호출 시 이 노드를 복제하는 함수인 `_tmpl$()` 함수를 반환합니다.
따라서 `_tmpl$()` 함수를 호출해서 `div` 변수에 넣으면
변수 안에는 실제 DOM 노드가 들어가게 되는 것입니다. 좀 더 복잡한 예제를 살펴볼까요?

```tsx
import { createSignal } from "solid-js";

const [count, setCount] = createSignal(0);
const [height, setHeight] = createSignal(100);

// 1초마다 count를 1 증가시킵니다.
setInterval(() => setCount(count() + 1), 1000);
// 500ms마다 height를 0~300 사이의 랜덤한 값으로 설정합니다.
setInterval(() => setHeight(Math.random() * 300), 500);

const div = <div height={height()}>{`Count: ${count()}`}</div>;
```

위 예제를 컴파일하면, 다음과 같은 코드가 됩니다.

```tsx
// 컴파일된 JSX에서 사용하는 import들과 _tmpl$들이 상단에 먼저 배치됩니다.
import { template as _$template } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
const _tmpl$ = _$template(`<div>`);
// 여기부터 사용자가 작성한 코드가 시작됩니다.
import { createSignal } from "solid-js";
const [count, setCount] = createSignal(0);
const [height, setHeight] = createSignal(100);
setInterval(() => setCount(count() + 1), 1000);
setInterval(() => setHeight(Math.random() * 300), 500);
const div = (() => {
  const _el$ = _tmpl$();
  _$insert(_el$, () => `Count: ${count()}`);
  _$effect(() => _$setAttribute(_el$, "height", height()));
  return _el$;
})();
```

다른 부분은 제쳐두고, `"const div = (() => {"`로 시작하는,
JSX에 해당하는 부분부터 한번 살펴보겠습니다.
먼저 `_tmpl$()` 함수를 통해서 `_el$`을 생성하는 부분까지는 이전 예제와 동일합니다.
이후 `_$insert()`를 통해서 `_el$` 내에 텍스트를 집어넣는데,
`_$insert()` 함수는 `createEffect()`를 약간 변형한 함수로,
두 번째 인자로 전달된 콜백(이 경우 ``"() => `Count: ${count()}`"``)의 반환값을
첫 번째 인자로 전달된 DOM 노드 안에 삽입하는데,
결국 아까 JSX 없이 `createEffect()`만으로 DOM을 조작했을 때와 기능적으로 유사한 코드입니다.
다음은 `_$effect()` 함수와 `_$setAttribute()` 함수를 통해서 `height` 상태의 값이 변할 때마다
DOM 노드의 `height` 애트리뷰트도 함께 변경시켜주는 코드이고,
이것들이 적용된 DOM 노드인 `_el$`을 반환하면서 JSX 코드가 마무리됩니다.

위 코드에서 찾아볼 수 있는 특별한 점이 하나 있는데요,
바로 `count`의 변화에 따라 `div` 내부의 텍스트를 변화시키는 동작과,
`height`의 변화에 따라 `div`의 `height`를 변화시키는 동작이 별개로 이루어진다는 점입니다.
따라서 `height`가 변화할 때에도 `div` 내부의 텍스트를 변화시키는 동작은 실행되지 않고,
`count`가 변화할 때에도 `div`의 `height`를 변화시키는 동작은 실행되지 않습니다.
이는 React의 컴포넌트 단위 리렌더 모델과는 크게 차이가 존재하는 부분이며,
Solid가 뛰어난 성능을 보여줄 수 있는 비결입니다.
이렇게 DOM을 업데이트하는 방식을 Fine-grained DOM Update라고 부르며,
이 방식은 Solid를 시작으로 Svelte 5나 Vue (Vapor Mode) 등의 프레임워크에도
적용되기 시작한 방식이기도 합니다.

### 컴포넌트

Solid의 컴포넌트는 React 등의 일반적인 프레임워크의 컴포넌트와는 성격이 많이 다른데요,
일반적인 프레임워크들이 컴포넌트를 상태 업데이트를 위한 최소 단위로 삼는 반면,
Solid는 앞서 살펴보았듯이 JSX 자체가 반응성을 가지고 UI를 업데이트하기 때문에,
렌더링 퍼포먼스에 대한 고민 없이 컴포넌트를 온전히 코드를 정돈하기 위한
단위의 용도로 사용할 수 있습니다.
Solid를 사용할 때 컴포넌트는 그저 하나의 함수일 뿐인 것인데요, 한번 살펴볼까요?

```tsx
import { createSignal } from "solid-js";
import { render } from "solid-js/web";

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
  );
}

render(() => <Counter />, document.getElementById("app"));
```

`<div />` 과 같은 일반적인 JSX와 달리, `<Counter />` 같이
컴포넌트에 대한 JSX는 마치 함수 호출처럼 동작합니다.
따라서 `<Counter />` 는 `Counter` 함수를 1번 실행시킬 것이고,
이에 따라 반환되는 `<button>` DOM 노드가 `render()` 함수에 전달되어 `#app`에 그려질 것입니다.
동작 방식을 보면 알 수 있듯이, 리액트의 컴포넌트와 달리 Solid의 컴포넌트는 최초 1번만 실행되기 때문에,
early return 같은 패턴을 사용할 수 없고, 최초 리턴 시에 모든 UI 요소를 전부 반환해야 합니다.
초기 리액트가 장점으로 내세웠던 “UI를 매번 새로 그리는 것처럼 코드를 짤 수 있도록 해 준다”는
부분에 대해서는 다소 부족한 부분이 있다고 볼 수도 있지만,
“상태 변화에 따라서 UI가 변화하는 그래프를 만든다”는 식으로 사고방식을 바꾸어 접근한다면
훨씬 더 수월하게 코드를 작성할 수 있을 것입니다.

### UI 유틸리티 컴포넌트

Solid는 다양한 UI 패턴을 위한 몇 가지 유틸리티 컴포넌트들을 제공합니다.

```tsx
import { For, Match, Show, Switch } from "solid-js";

// 조건에 따라 표시할 UI는 <Show>를 통해 표현합니다.
const [visible, setVisible] = createSignal(false);
const conditional = (
  <Show when={visible()}>
    <p>Visible</p>
  </Show>
);

// 배열을 순회할 때는 <For>를 사용합니다.
const [items, setItems] = createSignal(["foo", "bar"]);
const list = (
  <ul>
    <For each={items()}>{(item) => <li>{item}</li>}</For>
  </ul>
);

// 여러 조건에 대해 비교할 때는 <Switch>를 사용합니다.
const [route, setRoute] = createSignal("home");
const view = (
  <Switch fallback={<p>Not Found</p>}>
    <Match when={route() === "home"}>
      <p>Home</p>
    </Match>
    <Match when={route() === "login"}>
      <p>Login</p>
    </Match>
  </Switch>
);
```

사실 React나 Vue의 JSX에서는 위 UI 패턴들을 순수 JS 문법으로 표현할 수 있고,
이것은 Solid에서도 동일합니다. 하지만 Solid에서는 위 컴포넌트를 사용했을 때
내부적으로 DOM 요소를 재사용하는 등의 최적화를 통해 최상의 성능을 보장해 주며,
따라서 순수 JS 문법을 사용하기보다는 위 컴포넌트를 사용하는 것이 권장됩니다.
이는 VDOM을 사용하지 않는 Solid의 특성상, 불필요한 요소를 생성하는 것의 오버헤드가
더욱 크기 때문이기도 합니다.

### 에러 처리

Solid에서는 컴포넌트 렌더링 도중에 발생할 수 있는 다양한 종류의 에러를 처리하기 위해
`<ErrorBoundary>` 컴포넌트를 제공합니다.
에러가 발생할 수 있는 UI 요소를 별도 컴포넌트로 분리해야만 하는 React와 달리,
Solid에서는 `<ErrorBoundary>` 하위에서 에러가 발생하기만 했다면
따로 컴포넌트를 분리하지 않아도 올바르게 에러를 처리해 줍니다.

```tsx
import { ErrorBoundary } from "solid-js";

const readData = () => {
  throw new Error("Not implemented!");
};

const Component = () => {
  const data = readData();
  return <>{data}</>;
};

const view = (
  // 렌더링 시 Error: Not implemented! 가 표시됩니다.
  <ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
    {/* 바로 호출한 함수에서 에러가 발생한 경우에도 올바르게 처리되며, */}
    {readData()}
    {/* 컴포넌트 내부에서 에러가 발생한 경우에도 올바르게 처리됩니다. */}
    <Component />
  </ErrorBoundary>
);
```

### 데이터 가져오기

Solid는 비동기 함수를 사용하여 데이터를 가져올 수 있는 `createResource()`라는 유틸리티를 제공합니다.
이 유틸리티를 사용하면 데이터 로딩을 위한 별도의 라이브러리를 사용하지 않고도
간단한 데이터 로딩을 손쉽게 구현할 수 있습니다.

```tsx
import { createResource, ErrorBoundary, Show, Suspense } from "solid-js";

const [data] = createResource(async () => {
  const res = await fetch("https://my-api.com");
  const json = await res.json();
  return json;
});

// 데이터가 로딩되는 동안은 Loading...이,
// 에러가 발생하면 Error!가,
// 데이터가 완전히 로딩되면 value 값이 표시됩니다.
const view = (
  <>
    {/* 1. data 리소스의 추가 속성 사용 */}
    <Show when={!data.error} fallback={<div>Error!</div>}>
      <Show when={!data.loading} fallback={<div>Loading...</div>}>
        {data()?.value}
      </Show>
    </Show>
    {/* 2. <ErrorBoundary>와 <Suspense> 사용 */}
    <ErrorBoundary fallback={<div>Error!</div>}>
      <Suspense fallback={<div>Loading...</div>}>{data()?.value}</Suspense>
    </ErrorBoundary>
  </>
);
```

`createResource()`를 사용할 때는 선호하는 API 스타일에 따라서
리소스 내의 `loading`이나 `error`와 같은 추가적인 속성을 활용할 수도 있고,
`<ErrorBoundary>`나 `<Suspense>` 같은 컴포넌트를 활용할 수도 있습니다.
다만 `<Suspense>` 컴포넌트를 활용할 경우 `useTransition()`이나
스트리밍 SSR과 같은 추가적인 기능들을 활용할 수 있기 때문에,
아주 간단한 경우를 제외하고는 `<Suspense>` 컴포넌트를 활용하는 방향이 더욱 권장됩니다.

Solid는 이외에도 다양한 UI 패턴들을 위한 여러 기능들을 제공하는데,
자세히 알아보시려면 [Solid의 공식 튜토리얼][solid tutorial],
[레퍼런스 문서][solid reference] 등을 참고하거나,
다양한 JS 프레임워크들 간의 코드를 비교해서 보여주는 [Component Party] 등을
참고해보시면 좋을 것 같습니다.

## 라이브러리 생태계

이때까지 Solid의 기본적인 특징들을 살펴 보았는데요,
이제부터는 Solid를 활용하여 본격적으로 다양한 애플리케이션을 만들기 위한
다양한 라이브러리 생태계를 살펴 보겠습니다.

### 프로젝트 세팅

현 시점에서 Solid로 웹 애플리케이션을 개발하기 위해 가장 권장되는 방법은
Solid의 공식 메타프레임워크(Next, Nuxt와 같이, 프레임워크를 기반으로 만든 프레임워크)인
[SolidStart]를 활용하는 것입니다.
SolidStart는 [Vite]와 [Nitro]를 기반으로 하는 프레임워크인데, SSR과 CSR을 모두 지원하고,
파일 시스템 라우팅과 커스텀 라우팅을 모두 사용할 수 있으며, `"use server"`를 활용한 서버 함수나,
NodeJS/Vercel/Cloudflare/AWS Lambda 등 다양한 플랫폼에 배포하기 위한 여러 프리셋들도 제공합니다.
그 외에도 상황 및 취향에 따라서 SolidStart를 사용하는 대신 Vite을 그대로 사용하거나,
상대적으로 정적인 콘텐츠로 이뤄진 사이트에서 [Astro]와 Solid를 조합하여 사용하는 등
다양한 선택지가 존재합니다.
또한 [Tauri] 등을 사용하면 Solid를 활용하여 데스크탑 앱을 만드는 것 역시 가능합니다.

### 코어 라이브러리

Solid 팀에서는 Solid로 애플리케이션을 개발할 때 활용할 수 있는 몇 가지 코어 라이브러리들을 제공합니다.
먼저 [Solid Router]는 기본적인 클라이언트 라우팅 기능부터 중첩 라우팅이나 라우터 중심 데이터 플로우까지
다양한 기능을 제공하는 라이브러리로, SolidStart와도 함께 사용할 수 있는 매우 유용한 라이브러리입니다.
[Solid Meta]는 `<head>` 내의 `<title>`이나 `<meta>`와 같은 태그들을 렌더링하기 위한 라이브러리로,
SSR 상황이나 비동기 렌더링을 활용하는 상황, 클라이언트 라우팅이나 중첩 라우팅 등을 활용하는 상황 등을
모두 고려하여 설계되어, 어떤 상황에서도 간편하게 사용할 수 있습니다.
이외에 styled-components의 Solid 버전인 [solid-styled-components] 역시 존재합니다.

### 커뮤니티 라이브러리

커뮤니티 내에서 개발한 오픈소스 라이브러리 역시 다양하게 존재하는데요,
react-use나 VueUse 같이 작은 유틸리티들을 모아서 라이브러리화한 [Solid Primitives],
Radix UI처럼 WAI-ARIA 기반으로 접근성을 준수한 컴포넌트 라이브러리인 [Kobalte],
손쉬운 Form 제작을 위한 [Modular Forms] 등 Solid를 위한 다양한 라이브러리가 존재하고,
또한 [TanStack]의 Query/Virtual/Table/Form, Web Animation API 기반 애니메이션 라이브러리인 [Motion One] 등
다양한 라이브러리들이 Solid 어댑터를 제공하여 React 혹은 Vue에서와 유사하게 사용이 가능합니다.
이외에도 Radix 대신 Kobalte를 활용하여 shadcn/ui를 Solid로 포팅한 [Solid UI]도 존재하고,
MDX 등을 활용하기 위한 다양한 플러그인들 역시 존재합니다.

### 기타 유틸리티

Solid로 애플리케이션을 개발하는 과정에서 활용할 수 있는 다양한 유틸리티들도 존재하는데요,
Solid의 반응형 상태 그래프를 시각화해서 확인할 수 있도록 도와주는 [Solid Developer Tools],
Solid를 사용하는 과정에서 권장되지 않는 코드 패턴들을 검사해 주는 [eslint-plugin-solid],
테스트 과정에서 사용할 수 있는 [Solid Testing Library] 등을 활용하면
전반적인 개발 경험을 크게 향상시킬 수 있습니다.

## 포트원에서의 Solid

이때까지는 Solid 프레임워크와 그 생태계를 소개하는 것에 초점을 두었는데,
다음으로는 포트원 내에서 저희가 Solid를 활용하는 방법에 대해 이야기해보도록 하겠습니다.
포트원은 현재 두 프로젝트에서 Solid를 적용하여 사용하고 있는데요,
결제 브릿지 페이지와 포트원 홈페이지가 그것으로,
두 프로젝트 모두에서 SolidStart를 적용하여 사용하고 있습니다.

### 결제 브릿지 페이지

(관련 이미지 첨부)

포트원의 결제 브릿지 페이지는 고객사에서 포트원 결제 모듈을 사용할 때
PG사의 결제창을 대체하여 사용할 수 있는 포트원의 커스텀 결제창을 제공하는 제품입니다.
해당 제품을 위한 기술을 선택할 때, 결제창이라는 특성을 고려하여 다음 요소들을 중심으로 평가를 진행했습니다.

- **빠른 초기 로딩**

  결제창은 고객사의 페이지에서 별도의 페이지를 렌더링하는 방식으로 로딩되며,
  따라서 웹사이트에 최초 진입하는 것과 같은 방식으로 페이지가 그려집니다.
  특히 결제창은 사용자가 결제 버튼을 누른 이후 최대한 빨리 로딩되어야 사용자의 이탈을 최소화할 수 있는데,
  따라서 페이지의 초기 로딩 성능을 측정하는 데 도움을 주는 TTFB, FCP, LCP 등의
  [Web Vitals] 메트릭을 최적화하는 데에 중점을 두었습니다.

- **서버 측 데이터 로딩**

  결제 브릿지 페이지는 제품 특성상 결제창을 띄우기 위한
  다양한 정보(카드사별 최대 할부 개월수, 무이자 혜택 정보, 카드사 프로모션 정보 등)를
  API로 불러와야 했는데, 이때 내부 API를 사용하는 과정에서 추가적인 인증 절차를 최소화하기 위해
  서버 사이드에서 API 시크릿을 직접 사용하여 API를 호출하는 방식으로 데이터 로딩을 구현할 필요가 있었습니다.
  따라서 서버 없이 CSR 방식으로 클라이언트에서만 화면을 그리기보다는,
  서버에서 데이터 로딩을 진행하고 SSR 중에 로딩된 데이터를 스트리밍하는 방식으로
  퍼포먼스를 최적화할 수 있도록 하는 데 중점을 두었습니다.

- **UI 반응성 및 사용성**

  결제 브릿지 페이지는 상대적으로 동적인 요소들을 많이 가지고 있는 제품이며,
  특히 각 UI 요소를 클릭했을 때 사용자가 느끼는 불편함 없이 최대한 부드럽게 동작할 필요가 있었습니다.
  따라서 서버 사이드에서만 렌더링되는 템플릿 위주의 스택을 선택하기보다는,
  적정량의 JS를 활용하여 우수한 사용자 경험을 제공하는 방향이 적절하다고 판단했습니다.

이러한 요소들을 모두 고려하여 SolidStart의 스트리밍 SSR을 활용하기로 결정했는데요,
스트리밍 SSR은 서버에서 데이터를 로딩하는 상황에서 페이지의 초기 로딩 속도를 향상시키기 위한
최적의 방법 중 하나이며, SolidStart는 현존하는 프레임워크들 중 가장 스트리밍 SSR을
잘 지원하는 프레임워크 중 하나였습니다.
또한 SSR 성능이나 애플리케이션의 JS 번들 크기 역시 페이지의 로딩 속도에 큰 영향을 미치는 요소이고,
해당 측면에서 Solid와 SolidStart가 매우 뛰어난 모습을 보여 준다는 점 역시 긍정적인 요소였습니다.

SolidStart를 도입한 결과는 아주 만족스러웠는데요,
반응형 시스템을 기반으로 이해하기 쉽게 구성된 코드 구조부터,
별다른 노력 없이도 손쉽게 적용 가능했던 서버 사이드 데이터 로딩과 스트리밍 SSR,
Vercel Edge Functions로의 간편한 배포, 그리고 이것들이 합쳐져서 보여주는 뛰어난 성능까지
모두 흠잡을 데가 없었습니다.
스트리밍 SSR 과정에서 간혹 SSR 및 Hydration 관련 버그가 발생하기도 하였으나,
모두 빠르게 고쳐져서 버전업만 틈틈이 해주면 별다른 문제 없이 사용할 수 있었습니다.
이후 유지보수 과정에서도 별다른 문제가 발생하지 않았으며,
현재 월마다 약 30만건 이상의 요청을 무리 없이 처리하고 있습니다.

### 포트원 홈페이지

(관련 이미지 첨부)

포트원 홈페이지는 대체로 정적인 콘텐츠로 구성되었으나 페이지의 사용성을 위해
일부 동적인 컴포넌트가 적용된 형태인데요,
이러한 요구사항에 완벽히 대응하기 위해 포트원에서는 SolidStart의
Islands Router 기능을 활용하기로 결정했습니다.
Islands Router는 SolidStart 0.2에서 실험적으로 제공하던 기능으로,
페이지의 대부분을 서버에서만 렌더링하고,
일부 컴포넌트에 대해서만 Hydration을 진행하는 방식으로
다운로드 및 실행될 JS의 양을 최소화할 수 있도록 돕는 기능입니다.
이는 포트원 홈페이지에 적용하기 아주 적합한 특성을 가진 기능이었고,
실험적으로 제공되던 기능임에도 불구하고 특유의 강력함에 집중하여 기능 적용을 결정하였습니다.
그러나 이후 SolidStart가 0.4로 업그레이드되는 과정에서 해당 기능이 일시적으로 삭제되었고,
현재 최신 버전의 SolidStart에서는 사용할 수 없는 상태가 되었습니다.
따라서 포트원에서는 추후 SolidStart가 해당 기능을 다시 추가할 때까지
SolidStart의 구버전을 사용하면서 필요에 따라 프레임워크 코드를 자체적으로 패치하는 방향으로
대응하여 사용하고 있습니다.

포트원 홈페이지에 SolidStart와 Islands Router를 적용하면서 얻은 가장 큰 수확은 역시 성능인데요,
꼭 필요한 컴포넌트가 아니면 서버에서만 컴포넌트를 렌더링한다는 특성상,
다운로드 및 실행해야 할 JS의 양이 매우 적은 덕에 페이지의
전반적인 로딩 및 동작 단계에서의 성능이 뛰어난 모습을 보여줍니다.
또한 이렇게 성능을 챙기는 와중에도 동적인 컴포넌트들은 모두 클라이언트에서 실행되고,
페이지 이동 역시 클라이언트 사이드 라우팅의 형태로 이뤄지기 때문에
페이지의 사용성 역시 희생하지 않을 수 있었습니다.
이는 React Server Components나 NextJS의 App 라우터를 사용했을 때에도 유사하게 얻을 수 있는 장점이나,
Solid와 SolidStart는 React와 NextJS 대비 프레임워크의 번들 사이즈, SSR 및 Hydration 성능 등에서
큰 이점을 보여 주기 때문에, 전반적으로 더 나은 성능을 달성할 수 있었습니다.

## 정리

이때까지 Solid의 특징들부터 시작해서, Solid 주변 생태계,
그리고 포트원 내에서의 Solid 활용 사례까지 살펴보았습니다.
포트원에서 Solid를 도입하는 것을 초기부터 푸시하고, 이후 프로덕트 개발과 유지보수까지 경험해본 사람으로서,
Solid는 이미 프로덕션에도 충분히 적용해볼 만한, 많은 장점을 가지면서도 동시에 안정적인 프레임워크라고 생각하는데요,
여러분도 이번 기회에 Solid를 비롯한 프론트엔드 생태계 내의 다양한 프레임워크들을 한번 둘러보시면 어떨까요?

[solid]: https://www.solidjs.com/

[javascript framework benchmark]: https://krausest.github.io/js-framework-benchmark/current.html

[dom-expressions]: https://github.com/ryansolid/dom-expressions

[solid tutorial]: https://www.solidjs.com/tutorial/introduction_basics

[solid reference]: https://docs.solidjs.com

[component party]: https://component-party.dev

[solidstart]: https://docs.solidjs.com/solid-start

[vite]: https://vitejs.dev

[nitro]: https://nitro.unjs.io

[astro]: https://astro.build

[tauri]: https://tauri.app

[solid router]: https://docs.solidjs.com/solid-router

[solid meta]: https://github.com/solidjs/solid-meta

[solid-styled-components]: https://github.com/solidjs/solid-styled-components

[solid primitives]: https://primitives.solidjs.community

[kobalte]: https://kobalte.dev

[modular forms]: https://modularforms.dev

[tanstack]: https://tanstack.com

[motion one]: https://github.com/solidjs-community/solid-motionone

[solid ui]: https://www.solid-ui.com

[solid developer tools]: https://github.com/thetarnav/solid-devtools

[eslint-plugin-solid]: https://github.com/solidjs-community/eslint-plugin-solid

[solid testing library]: https://github.com/solidjs/solid-testing-library

[web vitals]: https://web.dev/articles/vitals?hl=ko
