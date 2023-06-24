> **Note**
>我個人不懂中文，所以我僱用了一個非常便宜的翻譯員。如果有明顯錯誤，請提交問題或請求拉取。
>
>謝謝，weebney

<div align="center">
<svg width="255" height="190" viewBox="0 0 255 190" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M177.984 94.9857C177.984 119.464 158.14 139.308 133.662 139.308C109.183 139.308 89.3399 119.464 89.3399 94.9857C89.3399 70.5074 109.183 50.6638 133.662 50.6638C158.14 50.6638 177.984 70.5074 177.984 94.9857Z" stroke="white" stroke-width="7"/>
<path d="M65.3047 93.2357L64.3061 94.9654L65.2871 96.705L86.9906 135.191C81.0388 137.952 74.5336 139.364 67.9434 139.306C60.1826 139.237 52.5759 137.132 45.8842 133.2C39.1925 129.269 33.6505 123.649 29.8125 116.904C25.9745 110.158 23.9751 102.523 24.0144 94.7615C24.0537 87.0005 26.1302 79.3859 30.0362 72.6793C33.9422 65.9727 39.5408 60.4094 46.272 56.5459C53.0031 52.6823 60.6307 50.654 68.3918 50.6638C74.9823 50.6722 81.4728 52.1499 87.3965 54.9717L65.3047 93.2357Z" stroke="white" stroke-width="7"/>
<path d="M253.598 97.4606C254.965 96.0938 254.965 93.8777 253.598 92.5109L231.325 70.237C229.958 68.8702 227.742 68.8702 226.375 70.237C225.008 71.6038 225.008 73.8199 226.375 75.1868L246.174 94.9857L226.375 114.785C225.008 116.152 225.008 118.368 226.375 119.734C227.742 121.101 229.958 121.101 231.325 119.734L253.598 97.4606ZM133.662 98.4857H251.123V91.4857H133.662V98.4857Z" fill="white"/>
</svg>


# Tachyon

<strong>
<samp>

[English](readme.md) · [简体中文](localized/readme.zh-CN.md) · [繁體中文](localized/readme.zh-TW.md) · [한국어](localized/readme.ko.md)

</samp>
</strong>
</div>

Tachyon是一種微小的腳本，可使您的網站感覺飛快。它通過在用戶導航到它們之前預渲染頁面來實現這一點，使頁面轉換幾乎瞬間完成。

快速鏈接：
- [網站](https://fasterthanlight.net)
- [NPM套件](https://www.npmjs.com/package/tachyonjs)
- [套件源代碼](https://github.com/weebney/tachyon/tree/main/tachyon)
- [Tachyon存在的原因](https://fasterthanlight.net/#the-why-the-how)

簡單的設置說明：
- [Google Tag Manager](https://fasterthanlight.net/cms) ⭐
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
    <td>3.14 kb<br>（大約是Tachyon的4.3倍）</td>
    <td>60.1 kb<br>（大約是Tachyon的83倍）</td>
    <td>111 kb<br>（大約是Tachyon的153倍）</td>
  </tr>
 <tr>
    <td>帶寬開銷</td>
    <td><b>最低</b></td>
    <td>低</td>
    <td>最高</td>
    <td>高</td>
</tr>
  <tr>
    <td>預渲染<br>（最快的加載速度）</td>
    <td>✅</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
</tr>

  <tr>
    <td>無需額外<br>代碼</td>
    <td>✅</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
</tr>
  <tr>
    <td>在所有<br>鏈接上工作</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
</tr>
  <tr>
    <td>白名單和<br>黑名單</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
</tr>
</table>

## 使用Tachyon

使用Tachyon非常簡單；它非常小，因此您可以直接內嵌它。您只需要將以下`<script></script>`標記複製並將它們放在網站的某個位置即可。

```html
<script type="module" defer>/* tachyon 2.0.1 */var e=document.body.dataset;const o="tachyonWhitelist"in e,n="tachyonSameOrigin"in e,a=e.tachyonTimer||50;let r=null;function i(){r=r?null:this;const t="tachyon";var e=document.getElementById(t);e?e.remove():setTimeout(()=>{var e;r===this&&((e=document.createElement("link")).id=t,e.href=this.href,e.rel="prerender",document.head.appendChild(e))},a)}function t(t){var e;t.dataset&&(e="tachyon"in t.dataset,"A"!==t.tagName||!t.href||e!=o&&!n||n&&!e&&t.origin!==window.location.origin||["mouseover","mouseout","touchstart","touchend"].forEach(e=>t.addEventListener(e,i,{passive:!0})))}new MutationObserver(e=>e.forEach(e=>e.addedNodes.forEach(t))).observe(document.body,{childList:!0,subtree:!0}),document.querySelectorAll("a").forEach(t);</script>
```

要完成了！您的網站現在比光速還要快！

如果您查看網站，那裡還有簡單的安裝說明，包括[Google Tag Manager](https://fasterthanlight.net/#easy-setup-instructions)、[Shopify](https://fasterthanlight.net/#easy-setup-instructions)、[WordPress](https://fasterthanlight.net/#easy-setup-instructions)等等。

Tachyon也可以通過npm作為`tachyonjs`使用。

```sh
npm i tachyonjs
```

您也可以從任何JavaScript CDN獲取Tachyon-建議使用[unpkg](https://unpkg.com/browse/tachyonjs@2.0.1/)。

```html
<script src="https://unpkg.com/tachyonjs@2.0.1/tachyon.min.js" integrity="sha384-4iJteL1FYnj4Ju83AJvNthpx5gZ1QaXCamXhY3lxhAjTNXUN+NXq5LQV/fXOSRme" type="module" crossorigin defer></script>
```

## 緣由及方式

Tachyon 的核心是簡潔易用，這不是 by chance 的。這種專注於簡潔的特點使得使用 Tachyon 的人，從管理員到終端使用者，都能從中獲得性能、可擴展性、可維護性、安全性和易用性方面的好處。

Tachyon 在比其他選擇方案更好的地方之一是使用了`<link rel="prerender" href="...">`，而不是常見的`<link rel="prefetch" href="...">`這使得___頁面加載的速度顯著地___更快。二者之間的差異就不言而喻了：`prefetch`只下載該頁面，而`prerender`則下載和開始渲染該頁面。

Tachyon 還以比其他選擇方案更高效，更不具侵入性的方式實現了預加載。它只預加載可能被單擊的頁面。當用戶的鼠標離開該鏈接時，它會停止預先加載頁面。這正是我創建 Tachyon 的原因，迄今為止我仍然不知道其他替代品為什麼不這樣做。因此，Tachyon 對網站的帶寬負載比任何其他替代方案都低得多。

它不像 Tachyon 提供的特點比其他項目少（它具有與 instant.page 的虛擬特點相當，以及一些額外的特點）；只是 Tachyon 的特點比其他項目更簡潔明了。它支持移動設備，而無需進行任何配置，還實現了[白名單](#白名單)、[黑名單](#黑名單)、[自定義時間](#自定義時間)和[同源約束](#僅限來源)，並使這些特點變得更易於使用。如果您需要超級複雜的東西，Tachyon 可能不是您最佳的選擇-對於其他所有人，Tachyon 從一開始就建立了成為最佳選擇的基礎。

## 預設行為

**默認情況下，Tachyon 將運行在所有`<a href="...">`標記上。** 當終端使用者將鼠標懸停在一個鏈接上超過 50 毫秒時，Tachyon 就會為該錨點的 `href="..."` 屬性生成一個 `<link id="tachyon" rel="prerender" href="...">` 標記。這會導致瀏覽器開始在後台下載 `href="..."`的頁面內容，因此，當用戶單擊該鏈接時，該頁面已在下載並準備好開始加載到框架中。

當用戶將鼠標移開鏈接時，Tachyon 將刪除 `<link id="tachyon" rel="prerender" href="...">` 標記，取消下載。這是為了防止瀏覽器下載用戶可能不會單擊的內容，以避免浪費帶寬。同一時間只會預先加載一個頁面，節省額外的帶寬。

這些預加載請求給予了[極低的優先級](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)；它們不會影響其他請求的速度。

## 高級配置

Tachyon 允許您通過幾個簡單的屬性對腳本進行微調以滿足您的網站需求。絕大多數的 Tachyon 使用者不需要更改這些配置，但它們對於希望進行更改的人是可用的。

Tachyon 的配置特點通過使用`data-tachyon-*`屬性進行切換。

### 自定義時間

如果您能夠確定 50 毫秒的默認時序不適合您的網站，您可以通過向網站的`<body>`標記添加`data-tachyon-timer`屬性來更改默認值。該屬性接受一個整數（毫秒）作為值，這將改變腳本的行為。例如，如果您想將定時器設置為 100 毫秒，您的 body 標記應該如下所示：

```html
<body data-tachyon-timer="100">
    ...
</body>
```

### 黑名單

如果您想讓 Tachyon 忽略某些鏈接，可以在`<a>`標記上添加`data-tachyon`。黑名單是 Tachyon 的默認行為，因此您無需採取任何措施即可啟用它，只需將`<a>`標記標記為 `data-tachyon` 屬性即可。

在以下示例中，第一個`<a>`標記將被 Tachyon 忽略並且不會被預加載，但是第二個`<a>`標記將被預加載，因為它沒有`data-tachyon`屬性，因此不在黑名單上。

```html
<body>
    <a href="https://example.com" data-tachyon>❌❌❌</a>
    <a href="https://example.com">✅✅✅</a>
</body>
```

### 白名單

要啟用白名單模式，請在頁面的`<body>`標記上添加`data-tachyon-whitelist`。Tachyon 的白名單以與黑名單完全相反的方式工作。在白名單模式下，Tachyon 將**僅**在具有 `data-tachyon` 屬性的`<a>`標記上運行。

在以下示例中，第二個`<a>`標記將被 Tachyon 忽略並且不會被預加載，但是第一個`<a>`標記將被預加載，因為它具有 `data-tachyon` 屬性，因此在白名單上。

```html
<body data-tachyon-whitelist>
    <a href="https://example.com" data-tachyon>✅✅✅</a>
    <a href="https://example.com">❌❌❌</a>
</body>
```

### 僅限來源

默認情況下，Tachyon 將從***任何域名***預先加載內容。如果您希望 Tachyon 僅從同一域名預先加載內容，請在`<body>`標記上添加`data-tachyon-same-origin`。**啟用此功能還將啟用[白名單](#白名單)。**這意味著您可以使用 `data-tachyon` 屬性選擇預先加載網站外的鏈接。

```html
<body data-tachyon-same-origin>
    <a href="https://mywebsite.com/cart.php">✅✅✅</a>
    <a href="https://mywebsite.com/info.php">✅✅✅</a>
    <a href="https://some.otherwebsite.com">❌❌❌</a>
    <a href="https://shop.store.com" data-tachyon>✅✅✅</a>
</body>
```

以上示例假設您的域名為 `mywebsite.com`。

## 問題

Tachyon遵循以下哲學：

- 如果這個項目沒有幫助到您，那麼就存在一個錯誤
- 如果您在使用這個項目時遇到困難，那麼就存在一個錯誤
- 如果文檔令人困惑，那麼文檔存在錯誤
- 如果項目中有錯誤，那麼我們可以一起修復它。

網站上有一個[已知問題列表](https://fasterthanlight.net/#known-issues) -如果還有其他問題，請在[問題跟踪器](https://github.com/weebney/tachyon/issues/)中[提出問題](https://github.com/weebney/tachyon/issues/)。

## 致敬

- [Alexandre Dieulot](https://dieulot.fr/)，[instant.page](https://instant.page/)的創建者，無疑為Tachyon鋪平了道路
- [frontendfoc.us](https://frontendfoc.us/)在這個項目還處於初創階段時提供了完全出乎意料的正面評價的感謝之情。