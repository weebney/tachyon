> **Note**
>
>我个人不会说中文，所以我雇佣了一个非常便宜的翻译。如果有错误，请[提交问题](https://github.com/weebney/tachyon/issues)，我会尽力修复！
>
>谢谢


<div align="center">
<img src="../docs/content/tachyon-white.svg">


# Tachyon

<strong>
<samp>

[English](readme.md) · [简体中文](localized/readme.zh-CN.md) · [繁體中文](localized/readme.zh-TW.md) · [한국어](localized/readme.ko.md)

</samp>
</strong>
</div>

Tachyon 是一種小巧的腳本，可以讓您的網站感到快如閃電。它通過在用戶導航到它們之前預渲染頁面，使頁面轉換幾乎瞬間完成

快速链接：
- [网站](https://fasterthanlight.net)
- [NPM包](https://www.npmjs.com/package/tachyonjs)
- [包源代码](https://github.com/weebney/tachyon/tree/main/tachyon)
- [Tachyon的存在意义](https://fasterthanlight.net/#the-why-the-how)

易于设置的说明：
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
    <td>大小</td>
    <td><b>738 b</b></td>
    <td>3.14 kb<br>（大约为Tachyon的4.3倍）</td>
    <td>60.1 kb<br>（大约为Tachyon的83倍）</td>
    <td>111 kb<br>（大约为Tachyon的153倍）</td>
  </tr>
 <tr>
    <td>带宽<br>开销</td>
    <td><b>最低</b></td>
    <td>低</td>
    <td>最高</td>
    <td>高</td>
</tr>
  <tr>
    <td>预渲染<br>（最快加载）</td>
    <td>✅</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
</tr>

  <tr>
    <td>不需要额外<br>的代码</td>
    <td>✅</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
</tr>
  <tr>
    <td>适用于<br>所有链接</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
</tr>
  <tr>
    <td>白名单和<br>黑名单</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
</tr>
</table>

## 使用Tachyon

使用Tachyon是非常容易的；它非常小，所以你可以直接把它嵌入到页面里。你只需要复制下面的`<script></script>`标签并将它们放在你网站的某个位置就可以了。

```html
<script type="module" defer>/* tachyon 2.0.1 */var e=document.body.dataset;const o="tachyonWhitelist"in e,n="tachyonSameOrigin"in e,a=e.tachyonTimer||50;let r=null;function i(){r=r?null:this;const t="tachyon";var e=document.getElementById(t);e?e.remove():setTimeout(()=>{var e;r===this&&((e=document.createElement("link")).id=t,e.href=this.href,e.rel="prerender",document.head.appendChild(e))},a)}function t(t){var e;t.dataset&&(e="tachyon"in t.dataset,"A"!==t.tagName||!t.href||e!=o&&!n||n&&!e&&t.origin!==window.location.origin||["mouseover","mouseout","touchstart","touchend"].forEach(e=>t.addEventListener(e,i,{passive:!0})))}new MutationObserver(e=>e.forEach(e=>e.addedNodes.forEach(t))).observe(document.body,{childList:!0,subtree:!0}),document.querySelectorAll("a").forEach(t);</script>
```

现在，你的网站比光速还要快了！

如果你浏览网站，还会发现 [Google Tag Manager](https://fasterthanlight.net/#easy-setup-instructions)、[Shopify](https://fasterthanlight.net/#easy-setup-instructions)、[WordPress](https://fasterthanlight.net/#easy-setup-instructions)等网站的易于安装的说明。

Tachyon也可以通过npm安装，包名称为`tachyonjs`。

```sh
npm i tachyonjs
```

你也可以从任何JavaScript CDN中获取Tachyon——建议使用[unpkg](https://unpkg.com/browse/tachyonjs@2.0.1/)。

```html
<script src="https://unpkg.com/tachyonjs@2.0.1/tachyon.min.js" integrity="sha384-4iJteL1FYnj4Ju83AJvNthpx5gZ1QaXCamXhY3lxhAjTNXUN+NXq5LQV/fXOSRme" type="module" crossorigin defer></script>
```

## Tachyon的工作原理

Tachyon充分利用用户浏览器中内置的功能，生成`<link rel="prerender" href="...">`标签以在用户将光标悬停在任何`<a href="..."></a>`标签上超过50毫秒（默认值）时预加载内容。

基本上，这告诉浏览器在用户实际点击/轻击链接之前开始加载将要访问的页面。这告诉Web浏览器在后台开始准备它。

当用户实际点击链接并准备进入下一页时，该页面已经准备好，并已被拉入页面框架-这会导致页面加载时间显着缩短。

Tachyon是免费且开源的软件，根据极其宽松的[MIT许可证](https://raw.githubusercontent.com/weebney/tachyon/main/LICENSE)进行许可。

### 为什么；如何

Tachyon的核心是简单易用，这不是偶然的。这种关注简单性的特点允许每个使用Tachyon的人，从管理员到终端用户，都能在性能、可扩展性、可维护性、安全性和易用性方面获得优势。

Tachyon对于每个替代方案的主要改进之一是使用`<link rel="prerender" href="...">`而不是常见的`<link rel="prefetch" href="...">`，使页面加载___显著___更快。两者之间的差异应该是不言自明的；`prefetch`只下载页面，而`prerender`下载并开始渲染页面。

Tachyon还以比替代方案更有效且不会产生多余影响的方式实现了预加载行为-它只在可能被点击的页面上预加载，并且***当用户光标离开链接时停止预加载页面***。这实际上是我创建Tachyon的原因，直到今天我仍然不知道为什么替代方案不这样做。因此，与任何替代方案相比，Tachyon实际上只会给您的站点增加一小部分带宽负载。

它并不像Tachyon提供的功能少于其他项目一样（它与instant.page具有虚拟功能平等性以及一些额外功能）；只不过Tachyon的功能是以比其他项目更简洁明了的方式实现的。它支持移动端并无需配置，实现了[白名单](#白名单)、[黑名单](#黑名单)、[自定义定时](#自定义计时)和[同源限制](#仅同源)，使这些功能在使用上较为易于操作。如果您需要非常复杂的功能，则Tachyon可能不是您的最佳选择-对于其他人，Tachyon是从头开始构建为最佳选项。

## 默认行为

**默认情况下，Tachyon将在所有`<a href="...">`标签上运行。**当终端用户将光标悬停在链接上超过50毫秒时，Tachyon将为锚的`href="..."`属性生成一个`<link id="tachyon" rel="prerender" href="...">`标签。这将导致浏览器在后台开始下载`href="..."`的页面内容，因此当用户通过链接单击时，该页面已经在下载并准备好要加载到框架中。

当用户将光标从链接上移开时，Tachyon将删除`<link id="tachyon" rel="prerender" href="...">`标签，取消下载。这样做是为了防止浏览器下载用户可能不会单击的内容，并避免浪费带宽。一次仅会有一个页面预加载，从而节省了额外的带宽。

这些预加载请求具有[极低的优先级](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)；它们不会干扰其他请求的速度。

## 高级配置

Tachyon允许您通过几个简单的属性对脚本进行微调。绝大多数Tachyon用户不需要更改它们，但它们适用于那些希望这么做的用户。

Tachyon的配置特性是通过`data-tachyon-*`属性进行切换的。

### 自定义计时

如果您能够确定50毫秒的默认计时对您的站点不理想，您可以通过将 `data-tachyon-timer` 属性添加到网站的 `<body>` 标签来更改它。这个属性需要一个整数（毫秒）来修改脚本的行为，例如，如果您想将计时设置为100毫秒，那么您的body标签应该像下面这样：

```html
<body data-tachyon-timer="100">
    ...
</body>
```

### 黑名单

如果您希望Tachyon忽略某些链接，请将`data-tachyon`添加到`<a>`标签上。黑名单是Tachyon的默认行为，因此您不需要进行任何操作来启用它，只需用`data-tachyon`属性标记`<a>`标签即可。

在以下示例中，第一个`<a>`标签将被Tachyon忽略，不会被预装，但是第二个`<a>`标签将会被预装，因为它没有`data-tachyon`属性，因此不在黑名单中。

```html
<body>
    <a href="https://example.com" data-tachyon>❌❌❌</a>
    <a href="https://example.com">✅✅✅</a>
</body>
```

### 白名单

要启用白名单模式，请将`data-tachyon-whitelist`添加到页面的`<body>`标签中。Tachyon的白名单与黑名单完全相反。在白名单模式下，Tachyon将**仅**在具有`data-tachyon`属性的`<a>`标签上运行。

在以下示例中，第二个`<a>`标签将被Tachyon忽略，不会被预装，但是第一个`<a>`标签将会被预装，因为它具有`data-tachyon`属性，因此在白名单上。

```html
<body data-tachyon-whitelist>
    <a href="https://example.com" data-tachyon>✅✅✅</a>
    <a href="https://example.com">❌❌❌</a>
</body>
```

### 仅同源

默认情况下，Tachyon将预加载来自***任何域***的内容。如果要使Tachyon仅从同一域预加载内容，您可以将`data-tachyon-same-origin`添加到`<body>`标签中。**启用此功能还将启用[白名单](#白名单)。**这意味着您可以使用`data-tachyon`属性根据需要选择预加载站点外的链接。

```html
<body data-tachyon-same-origin>
    <a href="https://mywebsite.com/cart.php">✅✅✅</a>
    <a href="https://mywebsite.com/info.php">✅✅✅</a>
    <a href="https://some.otherwebsite.com">❌❌❌</a>
    <a href="https://shop.store.com" data-tachyon>✅✅✅</a>
</body>
```

上面的示例假设您的域是`mywebsite.com`。

## 问题

Tachyon秉承以下哲学：

- 如果这个项目对你没有帮助，那么就是有bug；
- 如果你在使用这个项目时遇到了困难，那么就是有bug；
- 如果文档令人困惑，那么就是有bug；
- 如果这个项目有bug，那么我们可以一起努力修复。

网站上有一个[已知问题](https://fasterthanlight.net/#known-issues)列表——如果还有其他问题，请在[问题跟踪器](https://github.com/weebney/tachyon/issues/)中[提交问题](https://github.com/weebney/tachyon/issues/)。

## 致谢

- [Alexandre Dieulot](https://dieulot.fr/)——[instant.page](https://instant.page/)的创建者，无疑为Tachyon铺平了道路。
- [frontendfoc.us](https://frontendfoc.us/)在这个项目还处于起步阶段时出乎意料地给了这个项目[正面评价](https://frontendfoc.us/issues/582)。
