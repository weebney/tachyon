---
title: ""
date: 2022-11-07T14:15:24-05:00
draft: false
---
<script src="required.js"></script>
<script src="https://unpkg.com/tachyonjs@0.2.1/tachyon-min.js" integrity="sha384-IE6iBy2sYJkfNOmq6qCwTD+E4W7MntLKEGZ7ns6MbgNftCh2WRaSq3O5v9xCvNa1" crossorigin></script>

   <link rel="stylesheet" href="wave.css">

![](/tachyon.svg)

<h1 style="text-align: center;">Tachyon</h1>

Tachyon is a 685 byte script that improves the user experience of your website by making navigation between pages significantly quicker.

On average, Tachyon could benefit your site with:

<div style="transform: translateX(0.33vw);">

🤯 **20%+ faster page loads** [^1]

🤑 **2%+ increase in conversion rate** [^2]

😍 **8%+ increase in customer satisfaction** [^3]

🧐 **5%+ increase in page views** [^3]

😳 **0.0003% increase in page weight** [^4]

🤓 **Developed by an industry leading growth hacker**

🤩 **Completely set up in one minute or less**

</div>

Tachyon uses browsers' built in features to markedly improve the speed of your website, resulting in a better user experience and potentially even [significantly more conversions](https://archive.ph/0RPcN). 

<span style="font-size:110%;"><span style="">**To test if Tachyon would've helped</span>,** <button id="confetti"><span id="clickMe" style="font-weight:bold;">click
                            me!</span></button></span>
                        <span class="hidden" id="no">No!</span> <span class="hidden" id="yes">Yes!</span>
                        <span class="hidden" id="result">*(Saved <span class="hidden"
                                id="timeSpan"></span><span>)*</span><span class="hidden" id="error">Remove
                          cursor!</span>


## Using Tachyon


<span id="copyText">`<script src="https://unpkg.com/tachyonjs@0.2.1/tachyon-min.js" integrity="sha384-IE6iBy2sYJkfNOmq6qCwTD+E4W7MntLKEGZ7ns6MbgNftCh2WRaSq3O5v9xCvNa1" crossorigin></script>`</span>

<div style="text-align:right;">
<button id="copier">
<strong>Click me to copy!</strong>
</button>
</div>


Deploying Tachyon to your site is extremely easy.
For most people the steps will look like this:

1. Copy the `<script>` tag above.

2. Add it between your website's `<head></head>` tags.

3. That's it! Your website will now feel **blazingly fast 🔥🔥**

For more advanced users, Tachyon can be downloaded [here](https://github.com/weebney/tachyon) for use without a CDN; it is also available via [npm](https://www.npmjs.com/package/tachyonjs) as tachyonjs. 

## Technical Details

Tachyon leverages features built into browsers through vanilla javascript; it automatically generates `<link rel="prefetch" href="...">` tags to preload content when a user hovers their cursor on any `<a href="..."></a>` tag for more than 50ms (by default). The browser then begins downloading the page content of `href="..."`, so when the user clicks through the anchor, the page is already being downloaded and ready to begin loading.

These prefetch requests are given [extremely low priority](https://archive.ph/fL4Ki); they will not interfere with the speed of other requests.

If you're worried about Tachyon using up your bandwidth, fear not- Tachyon only prefetches pages that the user is likely to visit, and only prefetches them once. If you still have concerns, you can look into adjusting tachyon's timings or enabling the whitelist, with instructions in the [advanced configuration](#advanced-configuration) section below.

Tachyon's repository is available [here](https://github.com/weebney/tachyon). It is free-and-open-source software, licensed under the [2-Clause BSD License](https://raw.githubusercontent.com/weebney/tachyon/main/LICENSE).

### Security & CDN

Tachyon is completely safe to use on your website. It does not contain any tracking, analytics, or other malicious code- it's [completely open-source](https://github.com/weebney/tachyon/tree/main/tachyon) and plenty of sites trust Tachyon in production right now.

Tachyon is hosted on [unpkg](https://unpkg.com/), a CDN that is trusted by many popular websites and powered by [Cloudflare](https://www.cloudflare.com/cdn/). Subresource integrity is used to ensure that the script delivered to your users' browsers hasn't been tampered with. It's also available via [JsDelivr](https://cdn.jsdelivr.net/npm/tachyonjs@latest/).

### Tachyon & Alternatives

Tachyon could be considered an alternative to projects like [instant.page](https://archive.ph/mWmJA), which offer a similar feature set. That being said, Tachyon has some serious advantages compared to other similar projects.

To get an idea at a glance, in many cases **Tachyon improves your website's speed significantly more than instant.page yet is 4.1x smaller**.

Tachyon's code is incredibly simple yet robust, leading to its small size and ease of maintenance & extensibility. It is also extremely easy to set up, and can be fully configured and deployed in one minute or less with virtually no impact on page weight.

### Advanced Configuration

Tachyon implements two easy-to-use customizations that allow you to fine tune the script to your site's needs. The vast majority of Tachyon users will not need to change these, but they are available for those who wish to do so.

#### Custom Timing
If you're able to determine that the 50ms default timing is not optimal for your site, you can change it by adding the `data-timer` attribute to Tachyon's `<script>` tag. This attribute takes an integer (in milliseconds) that will alter the script's behavior as such- for example, if you want to set the timing to 100ms, you would add `data-timer="100"` to Tachyon's `<script>` tag.

#### Whitelist
Tachyon implements a simple whitelist. ***By default, Tachyon will run on all anchor tags.*** If you want to whitelist specific links, you can do so by adding `data-whitelist` to the `<script>` tag. 

In whitelist mode, Tachyon will ***only*** run on anchor tags (`<a>`) that have the attribute, i.e. `<a data-tachyon href="...">`. This is useful if you have links that you don't want to be affected by Tachyon, such as links to external sites.

#### Blacklist
If whitelist mode is disabled, Tachyon will use the opposite behavior. It will run on all anchor tags ***except*** those that have the `data-tachyon` attribute, i.e. `<a data-tachyon href="...">`. This is useful if you have links that you want to be ignored by Tachyon, such as links with query parameters that cause some action, i.e. logging a user out.


### Known Issues

Many privacy and ad-blocking extensions, disable the functionality that Tachyon relies on. Please keep this in mind as you test your site's implementation of the script.

#### Firefox Support

Prefetching is supported but incorrectly implemented in Firefox- it will only work as intended if the prefetched page is fully downloaded and cached. This is a known issue (and has been for years) that will likely be fixed in a future release of Firefox; the issue had its severity updated as recently as October 2022. 

#### Safari Support

Prefetching is currently disabled by default in Safari. It is unclear if this behavior will change in the future.

#### ⚠ Tachyon is in active development.

Please report any bugs or issues you come across in the [issue tracker](https://github.com/weebney/tachyon/issues) in the [GitHub repository](https://github.com/weebney/tachyon/).

[^1]: Ellis, C. (2022, June 27). Website Loading Time Statistics (2022) - 4 billion web visits analyzed. Tooltester. https://www.tooltester.com/en/blog/website-loading-time-statistics/
    
[^2]: Weigand, M. (2019, August 20). Site Speed is (Still) Impacting Your Conversion Rate. Portent. https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm

[^3]: Dooley, R. (2012, December 4). Don’t Let a Slow Website Kill Your Bottom Line. Forbes. https://www.forbes.com/sites/rogerdooley/2012/12/04/fast-sites/?sh=322ea4dd53cf
‌
[^4]: Teague, J. (2021, December 1). The 2021 Web Almanac: Page Weight (B. Pollard, Ed.). Web Almanac by HTTP Archive. https://almanac.httparchive.org/en/2021/page-weight