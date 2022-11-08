---
title: 1. Theme Installation
date: 2021-12-19
images: 
- https://raw.githubusercontent.com/apvarun/digital-garden-hugo-theme/main/images/digital-garden-logo.png
---

Create a new hugo website or open your existing hugo site.

#### Add the theme to your hugo site

Use as a git submodule:

```sh
git submodule add https://github.com/apvarun/digital-garden-hugo-theme.git themes/digitalgarden
```

Clone the repository (one-off, updating the theme may be harder later): 

```sh
git clone https://github.com/apvarun/digital-garden-hugo-theme.git themes/digitalgarden
```

#### Setup

1. Copy `package.json`, `package-lock.json` and `tailwind.config.js` files from the theme/digitalgarden folder to the root folder of your the website
2. Run `npm install` to install required packages for theme
3. Run `npm i -g postcss-cli` to use PostCSS with Hugo build
4. Set `theme = 'digitalgarden'` in config.toml
5. Run `npm run dev` to start your local server

When deploying to services like Netlify or Vercel, use the following command for building your site:

```sh
npm i -g postcss-cli && npm run build
```

→ [Understanding the theme structure](/articles/structure)
