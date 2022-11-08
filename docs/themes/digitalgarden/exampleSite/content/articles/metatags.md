---
title: 7. Metatags
date: 2021-12-18
---

Metatags are used to provide additional information about the page, usualy used by search engines and social media websites / apps. It allows to customize your page's title, description, preview image and more.

### Configure default tags

// config.toml

```toml
title = "Personal Digital Garden"

[Params]
  description = "My Digital Garden on the Internet"
  images = ['/digital-garden-logo.png']
```

Setting the above values will be used as default for all pages unless its overridden in a specific page's markdown.

### Customize specific page's tags

Open the markdown file of the page for which you need to customize the tags and set the following properties

// custom-page.md

```toml
title = 'Custom Page'
description = "My Custom page in the Digital Garden"
images = ['/custom-page.png']
```

These values will be used for open graph tags and twitter cards.

---

<div class="not-prose">
If you like this theme, support by sharing it with friends on Twitter － <a href="https://twitter.com/intent/tweet?text=Digital%20Garden%20theme%20for%20Hugo%0Ahttps%3A//github.com/apvarun/digital-garden-hugo-theme"><img class="inline" alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fapvarun%2Fdigital-garden-hugo-theme"></a>
</div>
