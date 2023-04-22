---
title: "Tachyon"
date: 2022-11-07T14:15:24-05:00
draft: false
---
<script src="required.js" defer></script>
<script src="https://unpkg.com/tachyonjs@latest/tachyon.min.js" crossorigin defer type="module"></script>

<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-std.css" />
<link rel="stylesheet" href="wave.css">

![](/tachyon.svg)

<h1 style="text-align: center;">Tachyon</h1>

Tachyon is a byte-sized script that improves the user experience of your website by making navigation between pages significantly quicker.

<span style="font-size:110%;"><span style="">**To test if Tachyon would've helped</span>,** <button id="confetti"><span id="clickMe" style="font-weight:bold;">click
                            me!</span></button></span>
                        <span class="hidden" id="no">No!</span> <span class="hidden" id="yes">Yes!</span>
                        <span class="hidden" id="result">*(Saved <span class="hidden"
                                id="timeSpan"></span><span>)*</span><span class="hidden" id="error">Remove
                          cursor!</span>

On average, Tachyon could benefit your site with:

<div style="transform: translateX(0.33vw);">

🤯 **Instant feeling page loads**

🤑 **2% increase in conversion rate** [^2]

😍 **8% increase in customer satisfaction** [^3]

🧐 **5% increase in page views** [^3]

😳 **0.0003% increase in page weight** [^4]

</div>

And just when you thought it couldn't get any better...

<div style="transform: translateX(0.33vw);">

🤪 **Full support for mobile browsers**

🤓 **Developed by an industry leading growth hacker**

🤩 **Completely set up in one minute or less on any website**

</div>


Tachyon cleverly loads pages in advance to improve the speed of your website, resulting in a better user experience and potentially even significantly more conversions. [^5] [^6] [^7] [^8] [^9]

In the above demo, the time "saved" refers to time that would have been wasted watching the next page load without Tachyon.

## Using Tachyon

<span id="copyText" style="inline-size: min-content;overflow-wrap: break-word;">`<script src="https://unpkg.com/tachyonjs@2.0.0/tachyon.min.js" integrity="sha384-w8efYzZSanBkhmSezV71UPT1uzvN9Ecr4ehP5gizbGl1esC0V/+2w7lqiT6FkUOe" type="module" crossorigin defer></script>`</span>

<div style="text-align:right;">
<button id="copier">
<strong>Click me to copy!</strong>
</button>
</div>

Deploying Tachyon to your site is extremely easy.
For most people the steps will look like this:

1. Copy the `<script>` tags above.

2. Add them between your website's `<head></head>` tags.

3. That's it! Your website will now feel **blazingly fast 🔥**

For more advanced users, Tachyon can be downloaded [via GitHub](https://github.com/weebney/tachyon) for use without a CDN; it is also available via [npm](https://www.npmjs.com/package/tachyonjs) as tachyonjs.

### Easy Setup Instructions

Provided below are instructions for adding Tachyon to popular content management systems, website builders, and e-commerce platforms.

- [Google Tag Manager](/cms/google-tag-manager) ⭐
- [Shopify](/cms/shopify)
- [Squarespace](/cms/squarespace)
- [Webflow](/cms/webflow)
- [Wix](/cms/wix)
- [WordPress](/cms/wordpress)

## How Tachyon Works

Tachyon leverages features built into your user's web browser; it generates `<link rel="prerender" href="...">` tags to preload content when a user hovers their cursor on any `<a href="..."></a>` tag for more than 50ms (by default).

Basically, this tells the browser to start loading the page the user is about to visit *before* they actually click/tap on the link. This tells the web browser to start getting it ready in the background.

When the user actually clicks on the link and is ready to go to the next page, that page is already prepared and is pulled into frame- this results in a significantly faster page load time.

Tachyon is free and open source software licensed under the highly permissive [MIT License](https://raw.githubusercontent.com/weebney/tachyon/main/LICENSE). You can view the [source code](https://github.com/weebney/tachyon) on GitHub.

***

## Tachyon & Alternatives

Tachyon could be considered an alternative to projects like [instant.page](https://web.archive.org/web/20221110043446/https://instant.page/) or [quicklink](https://github.com/GoogleChromeLabs/quicklink) which offer a similar feature set. That being said, Tachyon has some serious advantages compared to competing projects.

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
    <td><b>723 b</b></td>
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
    <td>No Coding<br>Required</td>
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

### The Why; The How

Tachyon is built with simplicity at its core, and this is [no accident](#tachyons-philosophy). This focus on simplicity allows everyone that uses Tachyon, from admins to end-users, to reap the benefits in performance, extensibility, maintainability, security, and ease of use.

One of the major improvements Tachyon makes over every alternative is the use of `<link rel="`<span style="text-decoration:underline wavy;">`prerender`</span>`" href="...">` instead of the common `<link rel="`<span style="text-decoration:underline wavy;">`prefetch`</span>`" href="...">` making page loads ___significantly___ faster. The difference between the two should be self-evident; `prefetch` just downloads the page, and `prerender` downloads and begins rendering the page.

Tachyon also implements the preloading behavior in a way that is much more efficient and less intrusive than alternatives- it only preloads pages that are likely to be clicked, and it ***stops preloading pages when the user's cursor leaves the link.*** This was actually the reason I created Tachyon, and to this day I still have no idea why the alternatives don't do this. As a result, Tachyon will add literally a fraction of the bandwidth load to your site compared to any alternative.

It's not like Tachyon offers less features than other projects, either (it has virtual feature parity with instant.page plus some extra features); it's just that Tachyon's features are implemented in a more concise manner than other projects. It supports mobile with no configuration, implements [whitelisting](#whitelist), [blacklisting](#blacklist), [custom timing](#custom-timing), and [same origin restriction](#same-origin-only), and it makes these features arguably easier to use. If you need something ultra complex, Tachyon may not be the best option for you- for everyone else, Tachyon is built from the ground up to be the best option.

## Default Behavior

**By default, Tachyon will run on all `<a href="...">` tags.** When an end-user hovers their cursor over a link for more than 50ms, Tachyon will generate a `<link id="tachyon" rel="prerender" href="...">` tag for the anchor's `href="..."` attribute. This will cause the browser to begin downloading the page content of `href="..."` in the background, so when the user clicks through the link, the page is already being downloaded and ready to begin loading into frame.

When a user unhovers their cursor from a link, Tachyon will remove the `<link id="tachyon" rel="prerender" href="...">` tag, canceling the download. This is done to prevent the browser from downloading content that the user may not click on and to avoid wasting bandwidth. There will only ever be one page prerendering at a time, saving additional bandwidth.

These preload requests are given [extremely low priority](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf); they will not interfere with the speed of other requests.

## Security

Tachyon is completely safe to use on your website. It does not contain any tracking, analytics, or other malicious code- it's [completely open-source](https://github.com/weebney/tachyon) and plenty of sites trust Tachyon in production right now.

Tachyon leverages [unpkg](https://unpkg.com/), a CDN that is trusted by many popular websites and powered by [Cloudflare](https://www.cloudflare.com/). Subresource integrity is used to ensure that the script delivered to your users' browsers hasn't been tampered with.

The [npm package](https://www.npmjs.com/tachyonjs) (which is unpkg's source for Tachyon) is published from a dedicated machine; the subresource integrity hash and minified script are computed locally and updated on the dev branch of the [GitHub repository](https://github.com/weebney/tachyon) ahead of  new versions being published to npm.

All official Tachyon pages, i.e. this website and the repository, are hosted by GitHub.

## Advanced Configuration

Tachyon allows you to fine tune the script to your site's needs with a few simple properties. The vast majority of Tachyon users will not need to change these, but they are available for those who wish to do so.

Tachyon's configuration features are toggled on with `data-tachyon-*` attributes.

### Custom Timing

If you're able to determine that the 50ms default timing is not optimal for your site, you can change it by adding the `data-tachyon-timer` attribute to website's `<body>` tag. This attribute takes an integer (in milliseconds) that will alter the script's behavior as such, i.e. if you want to set the timing to 100ms, your body tag should look like the following:

```html
<body data-tachyon-timer="100">
    ...
</body>
```

### Blacklist

If you want Tachyon to ignore certain links, add `data-tachyon` to the `<a>` tag. The blacklist is the default behavior of Tachyon, so you don't need to do anything to enable it, just flag the `<a>` tag with the `data-tachyon` attribute.

In the following example the first `<a>` tag will be ignored by Tachyon and will not be preloaded, but the second `<a>` tag will be preloaded as it does not have the `data-tachyon` attribute and is therefore not on the blacklist.

```html
<body>
    <a href="https://example.com" data-tachyon>Blacklisted! ☠️</a>
    <a href="https://example.com">I'll prerender, though!</a>
</body>
```

### Whitelist

To enable whitelist mode, add `data-tachyon-whitelist` to the page's `<body>` tag. Tachyon's whitelist works in the exact opposite way of the blacklist. In whitelist mode, Tachyon will **only** run on `<a>` tags that have the `data-tachyon` attribute.

In the following example the second `<a>` tag will be ignored by Tachyon and will not be preloaded, but the first `<a>` tag will be preloaded as it has the `data-tachyon` attribute and is therefore on the whitelist.

```html
<body data-tachyon-whitelist>
    <a href="https://example.com" data-tachyon>Whitelisted! 😇</a>
    <a href="https://example.com">Not on the list! ❌❌❌</a>
</body>
```

### Same-Origin Only

By default, Tachyon will preload content from ***any domain***. If you want Tachyon to only preload content from the same domain, you can add `data-tachyon-same-origin` to the `<body>` tag. **Enabling this will also enable the [Whitelist](#whitelist).** That means you can choose to preload links outside of your website as needed using the `data-tachyon` attribute.

```html
<body data-tachyon-same-origin>
    <a href="https://mywebsite.com/cart.php">This will load!</a>
    <a href="https://mywebsite.com/info.php">This one too!</a>
    <a href="https://some.otherwebsite.com">❌❌❌</a>
    <a href="https://shop.store.com" data-tachyon>This also loads!</a>
</body>
```

The above example assumes your domain is `mywebsite.com`.

## Tachyon's Philosophy

The web is extremely bloated. In a perfect world, we would all do our part to fix this- I personally try to build things as leanly as possible, but unfortunately wishful thinking does little to improve the state of affairs. 

As a consultant, I've seen first-hand how this bloat negatively impacts the user experience and conversion rates of websites. As much as I wish it were true, I don't have the time, resources, or bargaining power to have my clients completely re-engineer their websites. For this reason I created a script to function as a quick-and-easy yet adaptable patch for the bloat problem to simplify my job of delivering on growth goals for clients; Tachyon is the direct descendent of this script, adapted for general use.

As I have taken this concept and fleshed it out for public use, I have focused on simplicity in two areas:

- **Tachyon should be simple to use by everyone.** 

I want to make it as easy as possible for anyone, regardless of their technical prowess, to use Tachyon; everything from how Tachyon's features are implemented to how this website documents Tachyon's usage should be as easy to utilize as possible.

- **Tachyon's codebase should be as simple as possible.**

Simplicity is baked into Tachyon's design. Any person with a basic understanding of JavaScript should be able to understand Tachyon's code with very little thought. This simplicity serves multiple functions: it makes Tachyon highly performant, easy to use, easy to maintain/extend by both myself and other developers, and it makes Tachyon extremely easy to audit and verify that it is safe to use on your website.

## Known Issues

Many privacy and ad-blocking extensions disable the functionality that Tachyon relies on. Please keep this in mind as you test your site's implementation of the script.

#### Single Page Applications
Tachyon does not work with single page applications/client-side routing. It shouldn't break anything, but it won't do anything either- this is because Tachyon relies on native preloading functionality, which doesn't work with single page applications because client side routers hijack `<a>` tags.

#### Firefox Support
Preloading content is not currently supported in Firefox- [it is planned](https://wiki.mozilla.org/Gecko:Prefetching), though! As some consolation, none of the other alternatives to Tachyon work in Firefox either; `prefetch` has been broken since it was introduced.

#### Safari Support
Prerendering is currently disabled by default on both desktop and mobile versions of Safari. It is unclear if this behavior will change in the future.

#### ⚠ Tachyon is in active development.

Please report any bugs or issues you come across in the [issue tracker](https://github.com/weebney/tachyon/issues) of the [GitHub repository](https://github.com/weebney/tachyon/).

[^1]: Ellis, C. (2022, June 27). [Website Loading Time Statistics (2022) - 4 billion web visits analyzed](https://www.tooltester.com/en/blog/website-loading-time-statistics/). Tooltester. 
    
[^2]: Zuzana Padychova. (2017, April 7). [How Page Load Time Affects Conversion Rates: 12 Case Studies](https://blog.hubspot.com/marketing/page-load-time-conversion-rates). Hubspot.com. 

[^3]: Dooley, R. (2012, December 4). [Don’t Let a Slow Website Kill Your Bottom Line](https://www.forbes.com/sites/rogerdooley/2012/12/04/fast-sites/?sh=322ea4dd53cf). Forbes. 
‌
[^4]: Teague, J. (2021, December 1). [The 2021 Web Almanac: Page Weight](https://almanac.httparchive.org/en/2021/page-weight) (B. Pollard, Ed.). Web Almanac by HTTP Archive.

[^5]: [How Website Performance Affects Conversion Rates](https://www.cloudflare.com/learning/performance/more/website-performance-conversion-rates/) | Cloudflare. (n.d.). Cloudflare. Retrieved November 9, 2022
‌
[^6]: [The State of Online Retail Performance](https://s3.amazonaws.com/sofist-marketing/State+of+Online+Retail+Performance+Spring+2017+-+Akamai+and+SOASTA+2017.pdf). (2017). Akamai. 

[^7]: [Milliseconds Make Millions](https://www.thinkwithgoogle.com/_qs/documents/9382/Milliseconds_Make_Millions_report.pdf). (2020). Deloitte Digital. 
‌
[^8]: Jeffers, J. (2019, August 20). [Site Speed is (Still) Impacting Your Conversion Rate](https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm). Portent. 

[^9]: Breibon, A. (2018, June 27). [How Does Page Speed Really Affect your Conversions?](https://www.abtasty.com/blog/page-speed-conversions/) AB Tasty. 
  
