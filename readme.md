> [!IMPORTANT]
> <h3> This package has been deprecated since January 14, 2024 due to changes (previous and upcoming) to prefetch/prerender behavior. Don't use it! </h3>

<div align="center">
<img src="docs/content/tachyon-white.svg">

# Tachyon

<strong>
<samp>

[English](readme.md) · [简体中文](localized/readme.zh-CN.md) · [繁體中文](localized/readme.zh-TW.md) · [한국어](localized/readme.ko.md)

</samp>
</strong>

[![npm downloads](https://img.shields.io/npm/dm/tachyonjs)](https://npmjs.com/package/tachyonjs)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/tachyonjs)](https://bundlephobia.com/result?p=tachyonjs)
[![GitHub last commit](https://img.shields.io/github/last-commit/weebney/tachyon?color=rebeccapurple)](https://github.com/weebney/tachyon/commits/main)

<br>

</div>


Tachyon is a byte sized script that makes your website feel blazingly fast. It does this by prerendering pages before a user navigates to them, making page transitions virtually instant.

**Documentation for Tachyon lives at [fasterthanlight.net](https://fasterthanlight.net)**

Quick Links:
- [Website](https://fasterthanlight.net) (Start here)
- [NPM package](https://www.npmjs.com/package/tachyonjs)
- [Package source](https://github.com/weebney/tachyon/tree/main/tachyon)
- [Why Tachyon exists](https://fasterthanlight.net/#the-why-the-how)

Easy Setup Instructions:
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
    <td>Size</td>
    <td><b>738 b</b></td>
    <td>3.14 kb<br>(4.3x larger)</td>
    <td>60.1 kb<br>(83x larger)</td>
    <td>111 kb<br>(153x larger)</td>
  </tr>
 <tr>
    <td>Bandwidth<br>Overhead</td>
    <td><b>Lowest</b></td>
    <td>Low</td>
    <td>Highest</td>
    <td>High</td>
</tr>
  <tr>
    <td>Prerendering<br>(Fastest Loads)</td>
    <td>✅</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
</tr>

  <tr>
    <td>No Addl.<br>Code Required</td>
    <td>✅</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
</tr>
  <tr>
    <td>Works on<br>ALL links</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
</tr>
  <tr>
    <td>Whitelist &<br>Blacklist</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
</tr>
</table> 

## Using Tachyon

Using Tachyon is unbelieveably easy; it's super tiny, so you can just inline it. All you have to do is copy the `<script></script>` tags below and put them somewhere on your site.

```html
<script type="module" defer>/* tachyon 2.0.1 */var e=document.body.dataset;const o="tachyonWhitelist"in e,n="tachyonSameOrigin"in e,a=e.tachyonTimer||50;let r=null;function i(){r=r?null:this;const t="tachyon";var e=document.getElementById(t);e?e.remove():setTimeout(()=>{var e;r===this&&((e=document.createElement("link")).id=t,e.href=this.href,e.rel="prerender",document.head.appendChild(e))},a)}function t(t){var e;t.dataset&&(e="tachyon"in t.dataset,"A"!==t.tagName||!t.href||e!=o&&!n||n&&!e&&t.origin!==window.location.origin||["mouseover","mouseout","touchstart","touchend"].forEach(e=>t.addEventListener(e,i,{passive:!0})))}new MutationObserver(e=>e.forEach(e=>e.addedNodes.forEach(t))).observe(document.body,{childList:!0,subtree:!0}),document.querySelectorAll("a").forEach(t);</script>
```

Et voila! Your website is now faster than light!

If you look on the website, there are also easy install instructions for [Google Tag Manager](https://fasterthanlight.net/#easy-setup-instructions), [Shopify](https://fasterthanlight.net/#easy-setup-instructions), [WordPress](https://fasterthanlight.net/#easy-setup-instructions), and more.

Tachyon is also available via npm as `tachyonjs`.

```sh
npm i tachyonjs
```

You can also get Tachyon from any Javascript CDN—[unpkg](https://unpkg.com/browse/tachyonjs@2.0.1/) is recommended, though!

```html
<script src="https://unpkg.com/tachyonjs@2.0.1/tachyon.min.js" integrity="sha384-4iJteL1FYnj4Ju83AJvNthpx5gZ1QaXCamXhY3lxhAjTNXUN+NXq5LQV/fXOSRme" type="module" crossorigin defer></script>
```

### Configuration

Tachyon implements the following using `data-tachyon-*` attributes:

- [Custom Timing](https://fasterthanlight.net/#custom-timing)
- [Whitelist](https://fasterthanlight.net/#whitelist)
- [Blacklist](https://fasterthanlight.net/#blacklist)
- [Same-Origin Only](https://fasterthanlight.net/#same-origin-only) *(Breaking changes in 2.0.0)*

## Issues

Tachyon subscribes to the following philosophy:

- If this project is not helping you, then there is a bug
- If you are having a bad time using this project, then there is a bug
- If the documentation is confusing, then the documentation is buggy
- If there is a bug in this project, then we can work together to fix it.

There is a [list of known issues](https://fasterthanlight.net/#known-issues) on the website—if anything else comes up, though, please do [open an issue](https://github.com/weebney/tachyon/issues/) in the [issue tracker](https://github.com/weebney/tachyon/issues/).

## Cheers To

- [You](https://en.wikipedia.org/wiki/You_(Time_Person_of_the_Year)) (the reader) for your support, contribution, and time; I'm glad this project has been beneficial to you
- [Alexandre Dieulot](https://dieulot.fr/), creator of [instant.page](https://instant.page/) which undoubtedly paved the way for Tachyon
- [frontendfoc.us](https://frontendfoc.us/) for the completely unexpected [positive press](https://frontendfoc.us/issues/582) while this project was still in its infancy

![Star History Chart](https://api.star-history.com/svg?repos=weebney/tachyon&type=Date)
