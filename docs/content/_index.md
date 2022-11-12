---
title: ""
date: 2022-11-07T14:15:24-05:00
draft: false
---
<script src="required.js"></script>
<script src="https://unpkg.com/tachyonjs@latest/tachyon-min.js" crossorigin defer></script>

<link rel="stylesheet" href="wave.css">

![](/tachyon.svg)

<h1 style="text-align: center;">Tachyon</h1>

Tachyon is a byte-sized script that improves the user experience of your website by making navigation between pages significantly quicker.

On average, Tachyon could benefit your site with:

<div style="transform: translateX(0.33vw);">

🤯 **Instant feeling page loads**

🤑 **2% increase in conversion rate** [^2]

😍 **8% increase in customer satisfaction** [^3]

🧐 **5% increase in page views** [^3]

😳 **0.0003% increase in page weight** [^4]

🤓 **Developed by an industry leading growth hacker**

🤩 **Completely set up in one minute or less**

</div>

Tachyon uses browsers' built in features to markedly improve the speed of your website, resulting in a better user experience and potentially even significantly more conversions. [^5] [^6] [^7] [^8] [^9]

<span style="font-size:110%;"><span style="">**To test if Tachyon would've helped</span>,** <button id="confetti"><span id="clickMe" style="font-weight:bold;">click
                            me!</span></button></span>
                        <span class="hidden" id="no">No!</span> <span class="hidden" id="yes">Yes!</span>
                        <span class="hidden" id="result">*(Saved <span class="hidden"
                                id="timeSpan"></span><span>)*</span><span class="hidden" id="error">Remove
                          cursor!</span>

In the above demo, "saved" refers to additional time that would have been spent loading the page without Tachyon.

## Using Tachyon

<span id="copyText">`<script src="https://unpkg.com/tachyonjs@0.3.0/tachyon.min.js" integrity="sha384-umSCiduUXC3WjlGsseGIEmhM6tRFPRIGLWINkZ/s7v/ql175CtYIh1c7C0SrUx3s" type="module" crossorigin data-tachyon defer></script>`</span>

<div style="text-align:right;">
<button id="copier">
<strong>Click me to copy!</strong>
</button>
</div>

Deploying Tachyon to your site is extremely easy.
For most people the steps will look like this:

1. Copy the `<script>` tags above.

2. Add them between your website's `<head></head>` tags.

3. That's it! Your website will now feel **blazingly fast 🔥🔥**

For more advanced users, Tachyon can be downloaded [via GitHub](https://github.com/weebney/tachyon) for use without a CDN; it is also available via [npm](https://www.npmjs.com/package/tachyonjs) as tachyonjs.

### Easy Setup Instructions

Provided below are instructions for adding Tachyon to popular content management systems (CMSs) and e-commerce platforms.

- [Google Tag Manager](/cms/google-tag-manager)
- [Shopify](/cms/shopify)
- [Squarespace](/cms/squarespace)
- [Webflow](/cms/webflow)
- [Wix](/cms/wix)
- [WordPress](/cms/wordpress)
    
## Technical Details

Tachyon leverages features built into browsers through vanilla javascript; it generates `<link rel="prefetch" href="...">` tags to preload content when a user hovers their cursor on any `<a href="..."></a>` tag for more than 50ms (by default). The browser then begins downloading the page content of `href="..."`, so when the user clicks through the link, the page is already being downloaded and ready to begin loading into frame.

These prefetch requests are given [extremely low priority](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf); they will not interfere with the speed of other requests.

If you're worried about Tachyon using up your bandwidth, fear not- Tachyon only prefetches pages that the user is likely to visit, and only prefetches them once. If you still have concerns, you can look into adjusting tachyon's timings or utilizing the blacklist/whitelist, with instructions in the [advanced configuration](#advanced-configuration) section below.

Tachyon's is free-and-open-source software (source available on [GitHub](https://github.com/weebney/tachyon)), licensed under the [MIT License](https://raw.githubusercontent.com/weebney/tachyon/main/LICENSE).

### Security & CDN

Tachyon is completely safe to use on your website. It does not contain any tracking, analytics, or other malicious code- it's [completely open-source](https://github.com/weebney/tachyon/tree/main/tachyon) and plenty of sites trust Tachyon in production right now.

Tachyon is hosted on [unpkg](https://unpkg.com/), a CDN that is trusted by many popular websites and powered by [Cloudflare](https://www.cloudflare.com/cdn/). Subresource integrity is used to ensure that the script delivered to your users' browsers hasn't been tampered with. It's also available via [JsDelivr](https://cdn.jsdelivr.net/npm/tachyonjs@latest/).

### Tachyon & Alternatives

Tachyon could be considered an alternative to projects like [instant.page](https://web.archive.org/web/20221110043446/https://instant.page/) or , which offer a similar feature set. That being said, Tachyon has some serious advantages compared to other similar projects.

To get an idea at a glance, in many cases **Tachyon improves your website's speed significantly more than instant.page yet is 3.7x smaller**.

Compared to other alternatives, Tachyon is incredibly simple by design; it's a single script that you can easily add to your website with no necessary configuration for an instant speed boost. Tachyon's code is incredibly simple yet robust, leading to its small size and ease of maintenance & extensibility. It is also extremely easy to set up, and can be fully configured and deployed in one minute or less with virtually no impact on page weight.

### Advanced Configuration

Tachyon implements two easy-to-use customizations that allow you to fine tune the script to your site's needs. The vast majority of Tachyon users will not need to change these, but they are available for those who wish to do so.

#### Custom Timing
If you're able to determine that the 50ms default timing is not optimal for your site, you can change it by adding the `data-timer` attribute to Tachyon's `<script>` tag. This attribute takes an integer (in milliseconds) that will alter the script's behavior as such- for example, if you want to set the timing to 100ms, you would add `data-timer="100"` to Tachyon's `<script>` tag.

#### Blacklist
***By default, Tachyon will run on all anchor tags.*** If you want Tachyon to ignore certain links, add `data-tachyon` to the `<a>` tag. 

In the following example, the link will be **ignored** by Tachyon and will not be prefetched. 

`<a href="https://example.com" `<span style="text-decoration:underline wavy;">`data-tachyon`</span>`>Sample Text</a>`

#### Whitelist
Tachyon's whitelist works in the exact opposite way of the blacklist. In whitelist mode, Tachyon will **only** run on `<a>` tags that have the `data-tachyon` attribute. To enable whitelist mode, add `data-whitelist` to the end of Tachyon's `<script>` tag. 

Assuming the whitelist is enabled, in the following example the link will be **ignored** by Tachyon and will not be prefetched.

`<a href="https://example.com">Sample Text</a>`

### Known Issues

Many privacy and ad-blocking extensions, disable the functionality that Tachyon relies on. Please keep this in mind as you test your site's implementation of the script.

#### Firefox Support
Prefetching is supported but incorrectly implemented in Firefox- it will only work as intended if the prefetched page is fully downloaded and cached. This is a known issue (and has been for years) that will likely be fixed in a future release of Firefox; the issue had its severity updated as recently as October 2022. 

#### Safari Support
Prefetching is currently disabled by default on both desktop and mobile versions of Safari. It is unclear if this behavior will change in the future.

#### ⚠ Tachyon is in active development.

Though there has not been any breaking changes so far, there may be breaking changes between versions related to the [advanced configurations](https://fasterthanlight.net/#advanced-configuration) in the future. Please check back here for updates between versions.

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