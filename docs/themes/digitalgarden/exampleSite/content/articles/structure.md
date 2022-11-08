---
title: 2. Structure
date: 2021-12-18
---

Understand the structure of the theme's setup to create content for your website.

#### Theme's content structure

```
.
├── ...
├── content                 # Hosts all Markdown content
│   ├── articles            # Contains the list of markdown files for notes/posts
│   │   ├── article-1.md
│   │   ├── article-2.md
│   │   └── article-3.md
│   └── portfolio           # List of portfolio projects or case studies
│       ├── project-1.md
│       └── project-2.md
├── data                    # Test files (alternatively `spec` or `tests`)
│   └── stack.json          # Data used for rendering the list in Stack page
└── ...
```

Note that articles, portfolio and also stack pages require you to create `_index.md` inside of it. Refer the [exampleSite](https://github.com/apvarun/digital-garden-hugo-theme/tree/main/exampleSite) in theme.

All of these sections are optional and you can decide not to utilize those layouts.

→ [Configure Primary Menu](/articles/primary-menu)
