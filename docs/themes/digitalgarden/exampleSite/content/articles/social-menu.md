---
title: 4. Social Menu
date: 2021-12-18
---

The social menu can be used to configure all the social icons in the sidebar. Add links to your social media in the website config to show the icons.

```toml
[[menu.social]]
  name = 'Twitter'
  url = 'https://twitter.com'
  weight = 1
```

The `name` of the social menu needs to be unique and should be one of the supported values.

Supported values for the social menu item name:

- Twitter
- GitHub
- LinkedIn
- Instagram
- Dribbble
- Codepen
- Twitch
- Email
- RSS

→ [Configure newsletter](/articles/newsletter)
