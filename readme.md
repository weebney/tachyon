# Tachyon

Tachyon is a byte sized script that makes your website feel blazingly fast. It does this by prerendering pages before a user navigates to them, making page transitions virtually instant.

**Documentation for Tachyon lives at [fasterthanlight.net](fasterthanlight.net)**

Quick Links:
- [Website](https://fasterthanlight.net) (Start here)
- [NPM package](https://www.npmjs.com/package/tachyonjs)
- [Package source](https://github.com/weebney/tachyon/tree/main/tachyon)
- [Why Tachyon exists](https://fasterthanlight.net/#the-why-the-how)

Easy Setup Instructions:
- [Google Tag Manager](https://fasterthanlight/cms/google-tag-manager) ⭐
- [Shopify](https://fasterthanlight/cms/shopify)
- [Squarespace](https://fasterthanlight/cms/squarespace)
- [Webflow](https://fasterthanlight/cms/webflow)
- [Wix](https://fasterthanlight/cms/wix)
- [WordPress](https://fasterthanlight/cms/wordpress)

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
    <td><b>760 b</b></td>
    <td>2.88 kb<br>(3.8x bigger)</td>
    <td>60.1 kb<br>(80x bigger)</td>
    <td>111 kb<br>(146x bigger)</td>
  </tr>
 <tr>
    <td>Bandwidth Overhead</td>
    <td><b>Lowest</b></td>
    <td>Low</td>
    <td>Highest</td>
    <td>High</td>
</tr>
  <tr>
    <td>Prerendering (Fastest Loads)</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
</tr>

  <tr>
    <td>No Addl. Code Required</td>
    <td>✅</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
</tr>
  <tr>
    <td>Works on ALL links</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
</tr>
  <tr>
    <td>Whitelist & Blacklist</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
</tr>
</table> 

## Using Tachyon
Using Tachyon is unbelieveably easy. If you're not using node, you can just include it via script tags. Provided below is the script hosted by [unpkg](https://unpkg.com/). The source itself lives in the [tachyon directory](https://github.com/weebney/tachyon/tree/main/tachyon).

```html
<script src="https://unpkg.com/tachyonjs@1.1.1/tachyon.min.js" integrity="sha384-eAVplf5NYzHCSEB5NSZ5vabWAMYIb9Y2E4SKcU78UTIjukDs0tMxFQX0FLmBVYi8" type="module" crossorigin defer></script>
```

If you look on the website, there are also easy install instructions for [Google Tag Manager](https://fasterthanlight/#easy-setup-instructions), [Shopify](https://fasterthanlight/#easy-setup-instructions), [WordPress](https://fasterthanlight/#easy-setup-instructions), and more.

### Node

```sh
npm i tachyonjs
```

Then import it somewhere useful, like `index.js`:

```js
import 'tachyonjs';
```

### Inline

Tachyon is super tiny, so you can also inline it. If you use the following inlined `<script>` tags, you are waived from the legal requirement to include a copy of the license.

```html
<script type="module" defer>/* tachyon 1.1.1 */var e=document.body.dataset;const o="tachyonWhitelist"in e,n="tachyonSameOrigin"in e,a=e.tachyonTimer||50;let r=null;function i(){r=r?null:this;const t="tachyon";var e=document.getElementById(t);e?document.head.removeChild(e):setTimeout(()=>{var e;r===this&&((e=document.createElement("link")).id=t,e.href=this.href,e.rel="prerender",document.head.appendChild(e))},a)}function t(t){var e;n&&t.origin!==window.location.origin||(e="tachyon"in t.dataset,o==e&&["mouseover","mouseout","touchstart","touchend"].forEach(e=>t.addEventListener(e,i,{passive:!0})))}document.querySelectorAll("a").forEach(t),new MutationObserver(e=>{e.flatMap(e=>Array.from(e.addedNodes)).filter(e=>"A"===e.tagName&&e.href).forEach(t)}).observe(document.body,{childList:!0,subtree:!0});</script>
```

### Configuration

Tachyon implements the following using `data-tachyon-*` attributes:

- [Custom Timing](https://fasterthanlight.net/#custom-timing)
- [Same-Origin Only](https://fasterthanlight.net/#same-origin-only)
- [Whitelist](https://fasterthanlight.net/#whitelist)
- [Blacklist](https://fasterthanlight.net/#blacklist)

## Issues

This project follows [jordansissel](https://github.com/jordansissel)'s issue guidelines:

- If this project is not helping you, then there is a bug
- If you are having a bad time with this project, then there is a bug
- If the documentation is confusing, then this is a bug
- If there is a bug in this project, then we can work together to fix it.

There is a [list of known issues](https://fasterthanlight.net/#known-issues) on the website- if anything else comes up, though, please do [open an issue](https://github.com/weebney/tachyon/issues/new) in the [issue tracker](https://github.com/weebney/tachyon/issues/).

## Cheers To

- [You](https://en.wikipedia.org/wiki/You_(Time_Person_of_the_Year)) (the reader) for your support, contribution, and time; I'm glad this project has been beneficial to you
- [Alexandre Dieulot](https://dieulot.fr/), creator of [instant.page](https://instant.page/) which undoubtedly paved the way for Tachyon
- [Jordan Sissel](https://github.com/jordansissel) for reminding us what attitude we should approach free and open software with 
- [frontendfoc.us](https://frontendfoc.us/) for the completely unexpected [positive press](https://frontendfoc.us/issues/582) while this project was still in its infancy

![Star History Chart](https://api.star-history.com/svg?repos=weebney/tachyon&type=Date)
