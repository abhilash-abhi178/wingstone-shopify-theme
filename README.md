# WINGSTONE — Premium Shopify Fashion Theme

> A production-focused Shopify storefront theme for WINGSTONE, a premium streetwear brand. Built as a real e-commerce project and portfolio piece demonstrating Shopify Liquid, frontend engineering, responsive UI, e-commerce UX, and SEO.

## Overview

WINGSTONE is a premium Shopify storefront built around a refined navy, ice, and muted-gold visual system. The theme combines editorial fashion design with practical e-commerce functionality and Shopify's native theme architecture.

## Features

- Premium fashion-oriented storefront design
- Responsive desktop and mobile layouts
- Product and collection experiences
- Product gallery and product interactions
- AJAX cart drawer and cart notifications
- Free-shipping progress indicator
- Wishlist functionality
- Predictive search
- Faceted filtering
- Localization support
- Customizable colors, typography, logo, favicon, and shipping threshold
- Canonical, Open Graph, Twitter/X, and JSON-LD metadata
- Product structured data
- Smooth scrolling and micro-interactions
- Mobile-specific enhancements

## Tech Stack

| Technology | Purpose |
|---|---|
| Shopify Liquid | Templates, sections, snippets, and theme logic |
| HTML5 | Semantic storefront structure |
| CSS3 | Design system, responsive layouts, and animation |
| JavaScript | Cart, search, wishlist, gallery, and UI interactions |
| Shopify Theme Architecture | Configuration, templates, sections, snippets, assets, and locales |
| JSON-LD | Structured data for search engines |

## Project Structure

```text
wingstone-shopify-theme/
├── .gitattributes
├── .gitignore
├── README.md
├── assets/
├── config/
├── layout/
├── locales/
├── sections/
├── snippets/
└── templates/
```

## Local Development

Requirements: Shopify store access, Shopify CLI, and a modern browser.

```bash
shopify theme dev
```

After testing locally:

```bash
shopify theme push
```

Always review the target theme before publishing to the live store.

## Checkout Architecture

The storefront and Shopify checkout are separate concerns. Shopify controls the checkout UI and checkout files, so those files are not expected in this GitHub repository.

The `main` branch contains the actual WINGSTONE storefront theme. The separate `shopify-redirect-theme` branch contains the optional redirect theme used to send visitors from the Shopify-hosted Online Store back to `https://wingstone.studio/` after checkout.

## Maintenance

Keep `main` production-ready. Commit only files required to build, configure, document, or maintain the storefront.

Do not commit:

- Temporary AI/agent notes
- One-off asset-generation scripts
- Empty media placeholders
- Local editor files
- Secrets or API credentials
- Build output or generated files

Use small, descriptive commits:

```text
feat: improve product gallery
fix: resolve cart drawer quantity update
style: refine mobile navigation
perf: optimize homepage assets
docs: update setup instructions
chore: remove unused asset
```

Before publishing a significant change, test desktop, mobile, products, collections, cart, search, checkout entry, and the post-checkout return flow.

## GitHub vs Shopify

**GitHub:** source code, version history, documentation, and development.

**Shopify Admin:** products, collections, menus, customers, orders, checkout configuration, theme settings, and store data.

## Portfolio Value

This project demonstrates practical skills in Shopify theme development, Liquid templating, frontend engineering, responsive UI/UX, e-commerce architecture, cart interactions, SEO, structured data, design systems, and production-oriented debugging.

## Project Status

**Status:** Product / Portfolio Project

**Storefront:** https://wingstone.studio

**Repository:** https://github.com/abhilash-abhi178/wingstone-shopify-theme

## Author

**Abhilash B S**

Computer Science student and software developer building practical products across web development, e-commerce, automation, and AI.

## License

No open-source license is currently specified. Unless otherwise stated, the source remains the author's work and should not be redistributed or reused as a packaged product without permission.
