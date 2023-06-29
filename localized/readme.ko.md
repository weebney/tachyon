> **Note**
>
>이 페이지 번역은 매우 싼 지역 번역사를 고용해서 작업하였습니다. 만약 명확한 문제 또는 혼란스러운 부분이 있다면 이슈나 풀 리퀘스트를 올려주시기 바랍니다.
>
>감사합니다!

<div align="center">
<img src="../docs/content/tachyon-white.svg">
  
# Tachyon

<strong>
<samp>

[English](../readme.md) · [简体中文](./readme.zh-CN.md) · [繁體中文](./readme.zh-TW.md) · [한국어](./readme.ko.md)

</samp>
</strong>
</div>

Tachyon(타키온)은 웹사이트를 빠르게 연출할 수 있는 바이트 사이즈 스크립트입니다. 이 스크립트는 사용자가 페이지 탐색하기 전에 페이지를 사전 렌더링해 페이지 전환이 거의 즉시 일어나도록 합니다.

퀵 링크:
- [웹사이트](https://fasterthanlight.net)
- [NPM 패키지](https://www.npmjs.com/package/tachyonjs)
- [패키지 소스](https://github.com/weebney/tachyon/tree/main/tachyon)
- [Tachyon의 등장 배경](https://fasterthanlight.net/#the-why-the-how)

쉬운 설치 방법:
- [Google Tag Manager](https://fasterthanlight.net/cms/google-tag-manager) ⭐
- [Shopify](https://fasterthanlight.net/cms/shopify)
- [Squarespace](https://fasterthanlight.net/cms/squarespace)
- [Webflow](https://fasterthanlight.net/cms/webflow)
- [Wix](https://fasterthanlight.net/cms/wix)
- [WordPress](https://fasterthanlight.net/cms/wordpress)

<table>
  <tr>
    <th></th>
    <th>Tachyon</th>
    <th>Instant.Page</th>
    <th>Quicklink</th>
    <th>Turbolinks</th>
  </tr>
  <tr>
    <td>크기</td>
    <td><b>738 b</b></td>
    <td>3.14 kb<br>(4.3배 더 큼)</td>
    <td>60.1 kb<br>(83배 더 큼)</td>
    <td>111 kb<br>(153배 더 큼)</td>
  </tr>
 <tr>
    <td>대역폭<br>오버헤드</td>
    <td><b>가장 낮음</b></td>
    <td>낮음</td>
    <td>가장 높음</td>
    <td>높음</td>
</tr>
  <tr>
    <td>사전 렌더링<br>(가장 빠른 로드)</td>
    <td>✅</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
</tr>

  <tr>
    <td>추가 코드<br>불필요</td>
    <td>✅</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
</tr>
  <tr>
    <td>모든 링크에서<br>작동함</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
</tr>
  <tr>
    <td>화이트리스트 &<br>블랙리스트</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
</tr>
</table>

## Tachyon 사용 방법

Tachyon을 사용하는 것은 믿을 수 없을만큼 쉬운데, 이 스크립트는 매우 작기 때문에 단순히 인라인 처리하면 됩니다. 아래의 `<script></script>` 태그를 복사해서 웹사이트 어디에든 붙여넣으면 됩니다.

```html
<script type="module" defer>/* tachyon 2.0.1 */var e=document.body.dataset;const o="tachyonWhitelist"in e,n="tachyonSameOrigin"in e,a=e.tachyonTimer||50;let r=null;function i(){r=r?null:this;const t="tachyon";var e=document.getElementById(t);e?e.remove():setTimeout(()=>{var e;r===this&&((e=document.createElement("link")).id=t,e.href=this.href,e.rel="prerender",document.head.appendChild(e))},a)}function t(t){var e;t.dataset&&(e="tachyon"in t.dataset,"A"!==t.tagName||!t.href||e!=o&&!n||n&&!e&&t.origin!==window.location.origin||["mouseover","mouseout","touchstart","touchend"].forEach(e=>t.addEventListener(e,i,{passive:!0})))}new MutationObserver(e=>e.forEach(e=>e.addedNodes.forEach(t))).observe(document.body,{childList:!0,subtree:!0}),document.querySelectorAll("a").forEach(t);</script>
```

그러면 이제 웹사이트가 빛보다 빠릅니다!

웹사이트에서 [Google Tag Manager](https://fasterthanlight.net/#easy-setup-instructions), [Shopify](https://fasterthanlight.net/#easy-setup-instructions), [WordPress](https://fasterthanlight.net/#easy-setup-instructions) 등의 쉬운 설치 안내도 제공됩니다.

또한, `tachyonjs`로 npm에서 Tachyon을 설치할 수 있습니다.

```sh
npm i tachyonjs
```

아래의 Javascript CDN에서 Tachyon도 사용할 수 있습니다. 그러나 [unpkg](https://unpkg.com/browse/tachyonjs@2.0.1/)를 권장합니다!

```html
<script src="https://unpkg.com/tachyonjs@2.0.1/tachyon.min.js" integrity="sha384-4iJteL1FYnj4Ju83AJvNthpx5gZ1QaXCamXhY3lxhAjTNXUN+NXq5LQV/fXOSRme" type="module" crossorigin defer></script>
```

## Tachyon이 어떻게 작동합니까?

Tachyon은 사용자의 웹 브라우저에 내장된 기능을 활용합니다. 사용자가 50ms 이상 `<a href="..."></a>` 태그 위에 커서를 올리면 `<link rel="prerender" href="...">` 태그를 생성하여 콘텐츠를 미리로드합니다. 

이것은 사용자가 실제로 링크를 클릭하기 *전에* 방문하는 페이지를 브라우저에 미리 로딩하도록 하는 것입니다. 이것은 웹 브라우저에서 사전에 준비하여 백그라운드에서 가져올 수 있게 합니다.

사용자가 실제로 링크를 클릭하면 다음 페이지가 준비되어 프레임에 들어가므로 페이지 로드 시간이 크게 단축됩니다.

Tachyon은 [MIT 라이선스](https://raw.githubusercontent.com/weebney/tachyon/main/LICENSE)에 따라 무료 및 오픈 소스 소프트웨어입니다.

### 왜 이렇게? 어떻게?

Tachyon은 핵심적으로 간결함에 초점을 맞추어 제작되었습니다. 이것은 우연이 아닙니다. 이러한 간결성은 Tachyon을 사용하는 모든 사람들, 관리자부터 최종 사용자까지 모두 성능, 확장성, 유지 관리성, 보안 및 사용 편의성에서 이점을 누릴 수 있도록 합니다.

Tachyon이 모든 대안보다 주요 개선점 중 하나는 일반적인 `<link rel="prefetch" href="...">` 대신 `<link rel="prerender" href="...">`을 사용하여 페이지 불러오기를 ___현저히___ 빠르게 한다는 것입니다. 둘 사이의 차이는 명백하게 알 수 있습니다. `prefetch`는 페이지를 다운로드하는 반면, `prerender`는 페이지를 다운로드하고 렌더링을 시작합니다.

또한 Tachyon은 대안보다 훨씬 효율적이고 방해가 되지 않는 방식으로 사전로드 동작을 구현하며, ***사용자의 커서가 링크를 벗어나면 페이지의 사전로드를 중단합니다.*** 이것이 Tachyon을 만든 이유이며 왜 대체물이 이것을 하지 않는지 아직까지 모릅니다. 결과적으로 Tachyon은 어떤 대안보다도 웹사이트의 대역폭 부하를 거의 줄일 수 있습니다.

또한 Tachyon은 다른 프로젝트보다 같은 기능을 제공하지 않습니다. Tachyon의 기능은 다른 프로젝트보다 더 간결하게 구현됩니다. 이는 모바일을 지원하고, [화이트리스트](#화이트리스트), [블랙리스트](#블랙리스트), [사용자 정의 타이밍](#커스텀-타이밍) 및 [동일 출처 제한](#동일-출처만) 등의 기능을 구현하며, 이러한 기능을 사용하기 쉽게 만듭니다. 극도로 복잡한 것이 필요하면 Tachyon은 최상의 옵션이 아닐 수 있습니다. 그러나 다른 모든 사용자에게 Tachyon은 최상의 옵션으로 만들어졌습니다.

## 기본 동작

**기본적으로 Tachyon은 모든 `<a href="...">` 태그에서 작동합니다.** 엔드 유저가 링크 위에 커서를 올려 50ms 이상 대기할 때, Tachyon은 앵커의 `href="..."` 속성에 대한 `<link id="tachyon" rel="prerender" href="...">` 태그를 생성합니다. 이는 브라우저가 `href="..."`의 페이지 콘텐츠를 백그라운드에서 다운로드하도록 하여 사용자가 링크를 클릭할 때 페이지가 이미 다운로드되어 프레임으로 로딩되기 시작할 수 있게 합니다.

사용자가 링크에서 커서를 벗어나면 Tachyon은 `<link id="tachyon" rel="prerender" href="...">` 태그를 제거하여 다운로드를 취소합니다. 이렇게 함으로써 사용자가 클릭하지 않을 콘텐츠를 브라우저가 다운로드하는 것을 방지하고 대역폭을 절약할 수 있게 됩니다. 추가 대역폭을 절약하기 위해 동시에 하나의 페이지만 프리렌더링됩니다.

이러한 프리로드 요청은 [매우 낮은 우선순위](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)를 가지며, 다른 요청의 속도에 영향을 미치지 않습니다.


## 구성

Tachyon을 사용하면 몇 가지 간단한 속성으로 스크립트를 사이트에 맞게 조정할 수 있습니다. 대부분의 Tachyon 사용자는 이러한 속성을 변경할 필요가 없지만, 필요한 경우 사용할 수 있습니다.

Tachyon의 구성 기능은 `data-tachyon-*` 속성을 사용하여 토글됩니다.

### 커스텀 타이밍

50ms의 기본 타이밍이 사이트에 최적이 아닌 경우 `data-tachyon-timer` 속성을 웹 사이트의 `<body>` 태그에 추가하여 변경할 수 있습니다. 이 속성은 정수 (밀리초)를 취합니다. 예를 들어 타이밍을 100ms로 설정하려면 `<body>` 태그는 다음과 같아야 합니다.

```html
<body data-tachyon-timer="100">
    ...
</body>
```

### 블랙리스트

특정 링크를 무시하도록 Tachyon을 구성하려면 `<a>` 태그에 `data-tachyon`을 추가하십시오. 블랙리스트는 Tachyon의 기본 동작입니다. 그러므로 `data-tachyon` 속성을 사용하여 `<a>` 태그를 플래그 처리하는 것 외에 별도의 구성 작업이 필요하지 않습니다.

다음 예제에서 첫 번째 `<a>` 태그는 Tachyon에서 무시되어 사전로드 되지 않지만, 두 번째 `<a>` 태그는 `data-tachyon` 속성이 없기 때문에 블랙리스트에 없으므로 사전로드 됩니다.

```html
<body>
    <a href="https://example.com" data-tachyon>❌❌❌</a>
    <a href="https://example.com">✅✅✅</a>
</body>
```

### 화이트리스트

화이트리스트 모드를 활성화하려면 페이지의 `<body>` 태그에 `data-tachyon-whitelist`을 추가하십시오. Tachyon의 화이트리스트는 블랙리스트의 정확히 반대 방향으로 작동합니다. 화이트리스트 모드에서 Tachyon은 `data-tachyon` 속성을 가진 `<a>` 태그에서만 실행됩니다.

다음 예제에서는 두 번째 `<a>` 태그가 `data-tachyon` 속성이 없으므로 Tachyon에 의해 무시되어 사전로드되지 않지만, 첫 번째 `<a>` 태그는 `data-tachyon` 속성이 있으므로 화이트리스트에 있는 태그이므로 사전로드 됩니다.

```html
<body data-tachyon-whitelist>
    <a href="https://example.com" data-tachyon>✅✅✅</a>
    <a href="https://example.com">❌❌❌</a>
</body>
```

### 동일 출처만

기본적으로 Tachyon은 ***어떤 도메인***에서도 콘텐츠를 사전로드합니다. Tachyon이 동일한 도메인에서만 콘텐츠를 사전로드하도록 설정하려면 `<body>` 태그에 `data-tachyon-same-origin`을 추가하십시오. **이 기능이 활성화되면 [화이트리스트](#화이트리스트)가 활성화됩니다.** 따라서 `data-tachyon` 속성을 사용하여 필요한 경우 웹 사이트 외부의 링크를 사전로드할 수 있습니다.

```html
<body data-tachyon-same-origin>
    <a href="https://mywebsite.com/cart.php">✅✅✅</a>
    <a href="https://mywebsite.com/info.php">✅✅✅</a>
    <a href="https://some.otherwebsite.com">❌❌❌</a>
    <a href="https://shop.store.com" data-tachyon>✅✅✅</a>
</body>
```

## 문제점

Tachyon은 다음과 같은 철학을 따릅니다:

- 이 프로젝트가 도움 되지 않으면 버그가 있습니다.
- 이 프로젝트를 사용하는 것이 어렵다면 버그가 있습니다.
- 문서가 혼란스럽다면 문서에 버그가 있습니다.
- 이 프로젝트에 버그가 있다면 함께 수정할 수 있습니다.

웹사이트에는 [알려진 문제점 목록](https://fasterthanlight.net/#known-issues)이 있습니다. 그 외에 다른 문제가 있으면 [이슈 트래커](https://github.com/weebney/tachyon/issues/)에서 [이슈](https://github.com/weebney/tachyon/issues/)를 열어주십시오.

## 감사의 말

- [Alexandre Dieulot](https://dieulot.fr/)은 [instant.page](https://instant.page/)를 만들어 Tachyon을 만들 수 있게 해 주었습니다.
- [frontendfoc.us](https://frontendfoc.us/)는 이 프로젝트가 초기 단계인 동안 완전히 예상치 못한 [양호한 보도](https://frontendfoc.us/issues/582)를 제공하여 큰 도움이 되었습니다.

![Star History Chart](https://api.star-history.com/svg?repos=weebney/tachyon&type=Date)
