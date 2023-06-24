<div align="center">
<svg width="255" height="190" viewBox="0 0 255 190" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M177.984 94.9857C177.984 119.464 158.14 139.308 133.662 139.308C109.183 139.308 89.3399 119.464 89.3399 94.9857C89.3399 70.5074 109.183 50.6638 133.662 50.6638C158.14 50.6638 177.984 70.5074 177.984 94.9857Z" stroke="white" stroke-width="7"/>
<path d="M65.3047 93.2357L64.3061 94.9654L65.2871 96.705L86.9906 135.191C81.0388 137.952 74.5336 139.364 67.9434 139.306C60.1826 139.237 52.5759 137.132 45.8842 133.2C39.1925 129.269 33.6505 123.649 29.8125 116.904C25.9745 110.158 23.9751 102.523 24.0144 94.7615C24.0537 87.0005 26.1302 79.3859 30.0362 72.6793C33.9422 65.9727 39.5408 60.4094 46.272 56.5459C53.0031 52.6823 60.6307 50.654 68.3918 50.6638C74.9823 50.6722 81.4728 52.1499 87.3965 54.9717L65.3047 93.2357Z" stroke="white" stroke-width="7"/>
<path d="M253.598 97.4606C254.965 96.0938 254.965 93.8777 253.598 92.5109L231.325 70.237C229.958 68.8702 227.742 68.8702 226.375 70.237C225.008 71.6038 225.008 73.8199 226.375 75.1868L246.174 94.9857L226.375 114.785C225.008 116.152 225.008 118.368 226.375 119.734C227.742 121.101 229.958 121.101 231.325 119.734L253.598 97.4606ZM133.662 98.4857H251.123V91.4857H133.662V98.4857Z" fill="white"/>
</svg>


# Tachyon

<br>

<strong>
<samp>
<br>

[English](readme.md) · [简体中文](localized/readme.zh-CN.md) · [繁體中文](localized/readme.zh-TW.md) · [한국어](localized/readme.ko.md)

#

</samp>
</strong>
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

You can get also get Tachyon from any Javascript CDN—[unpkg](https://unpkg.com/browse/tachyonjs@2.0.1/) is recommended, though!

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
