# WINGSTONE — Premium Shopify Fashion Theme

> A production-focused Shopify storefront theme built for **WINGSTONE**, a premium luxury streetwear brand. Designed as both a real e-commerce product and a portfolio project demonstrating modern Shopify theme development, responsive UI engineering, JavaScript interactions, and conversion-focused commerce UX.

[![Shopify](https://img.shields.io/badge/Shopify-Theme-7AB55C?logo=shopify&logoColor=white)](https://www.shopify.com/)
[![Liquid](https://img.shields.io/badge/Liquid-Shopify-7AB55C)](https://shopify.dev/docs/api/liquid)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS](https://img.shields.io/badge/CSS-Responsive-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Product Launch

**WINGSTONE Shopify Theme** is a premium storefront experience created to combine luxury fashion aesthetics with practical e-commerce functionality.

The theme uses a refined **navy, ice, and muted-gold visual system**, editorial typography, responsive layouts, animated interactions, and a custom shopping experience. The implementation is built around Shopify's native theme architecture so the storefront can work with Shopify's products, collections, cart, localization, and theme settings.

## Why I Built This

This project was created to solve a practical problem: how to build a premium fashion storefront that feels like a modern luxury brand while remaining maintainable inside Shopify's theme ecosystem.

It demonstrates my ability to work across:

- Shopify theme architecture
- Liquid templating
- HTML/CSS responsive UI development
- JavaScript-based storefront interactions
- E-commerce UX and conversion flows
- Product, collection, search, wishlist, and cart experiences
- SEO and structured metadata
- Design systems and reusable components

## Key Features

### Premium Brand Experience

- Luxury editorial visual direction
- Navy, ice, and muted-gold design system
- Responsive typography and spacing tokens
- Custom page-loader experience
- Smooth scrolling and cinematic animation system
- Mobile-specific UI enhancements

### E-commerce Experience

- Product and collection storefront layouts
- Product gallery interactions
- Add-to-cart functionality
- Premium cart drawer
- Cart quantity updates
- Cart notifications and toast feedback
- Free-shipping progress indicator
- Wishlist functionality
- Predictive search
- Faceted filtering support
- Localization support

### SEO & Social Sharing

The theme includes built-in metadata handling for:

- Canonical URLs
- Page titles and descriptions
- Open Graph metadata
- Twitter/X card metadata
- Organization JSON-LD
- Product structured data
- Product price and availability metadata

### Theme Customization

The Shopify Theme Editor can be used to configure:

- Brand colors
- Typography
- Logo and favicon
- Free-shipping threshold
- Heading and body fonts

## Tech Stack

| Technology | Purpose |
|---|---|
| **Shopify Liquid** | Server-rendered storefront templates and theme logic |
| **HTML5** | Semantic storefront structure |
| **CSS3** | Responsive layouts, design system, animations, and components |
| **JavaScript** | Cart, search, wishlist, gallery, mobile, and interactive UI behavior |
| **Shopify Theme Architecture** | Sections, snippets, templates, assets, configuration, and localization |
| **JSON-LD** | Search-engine structured data |

## Project Structure

```text
wingstone-shopify-theme/
├── assets/        # CSS, JavaScript, and theme assets
├── config/        # Theme settings and configuration
├── docs/          # Project documentation
├── layout/        # Main Shopify theme layout
├── locales/       # Localization and translation files
├── scripts/       # Theme development utilities
├── sections/      # Reusable Shopify sections
├── snippets/      # Reusable Liquid components
└── templates/     # Page and resource templates
```

## Design System

The theme uses a centralized visual language to keep the storefront consistent.

### Core Palette

- **Ink Navy:** `#04102F`
- **Ice / Frost:** `#F9F9FF`
- **Muted Steel:** `#455373`
- **Muted Gold:** `#CBA72F`
- **Soft Border:** `#DDE3F0`

### Typography

- **Headings:** Georgia / system serif
- **Body:** Assistant / system sans-serif

The design tokens are exposed centrally so the visual language can be reused across theme components.

## Getting Started

### Requirements

- A Shopify store
- Access to the Shopify Theme Editor or Shopify CLI
- A modern web browser

### Using Shopify CLI

Install Shopify CLI according to the official Shopify documentation, authenticate with your store, and run the theme locally.

```bash
shopify theme dev
```

Then open the local preview URL provided by Shopify CLI.

### Uploading the Theme

The repository follows Shopify's standard theme directory structure. It can be uploaded as a theme through the Shopify admin or developed and pushed using Shopify CLI.

Before publishing, review:

1. Store branding and logo assets
2. Product and collection data
3. Navigation menus
4. Theme settings
5. Free-shipping threshold
6. Localization settings
7. Cart and checkout configuration

## Development Notes

The main layout loads the core theme assets and exposes Shopify routes and storefront strings to JavaScript. The theme also defines shared design tokens for colors, typography, spacing, easing, and the page width system.

The cart experience is implemented as a custom drawer with asynchronous storefront behavior, shipping-progress feedback, cart notifications, and accessibility-oriented dialog attributes.

## Portfolio / Resume Value

This project is included in my portfolio to demonstrate practical full-stack-adjacent frontend and e-commerce engineering skills.

### Skills Demonstrated

- **Shopify Development:** Liquid, sections, snippets, templates, theme settings
- **Frontend Engineering:** HTML, CSS, JavaScript, responsive design
- **E-commerce:** Product discovery, cart UX, wishlist, search, filtering
- **UI/UX:** Luxury editorial design, responsive interaction design, micro-interactions
- **SEO:** Semantic metadata, canonical URLs, Open Graph, Twitter cards, JSON-LD
- **Architecture:** Reusable components, centralized design tokens, maintainable theme structure
- **Product Thinking:** Designed around brand identity, usability, conversion, and real storefront requirements

## What I Learned

Building WINGSTONE helped me understand that an e-commerce project is more than a visually attractive homepage. A production-oriented storefront needs consistent design systems, reliable cart interactions, responsive behavior, SEO metadata, accessibility considerations, maintainable code, and a clear path from product discovery to checkout.

## Roadmap

- [ ] Add a public live-store demo link
- [ ] Add production screenshots and storefront walkthrough GIFs
- [ ] Add automated theme validation to CI
- [ ] Expand localization coverage
- [ ] Add performance benchmarking and Lighthouse tracking
- [ ] Document component-level customization
- [ ] Add a formal open-source license if the project is released for reuse

## Project Status

**Status:** Product / Portfolio Project

**Repository:** [`abhilash-abhi178/wingstone-shopify-theme`](https://github.com/abhilash-abhi178/wingstone-shopify-theme)

The repository is public and maintained as part of my software-development portfolio.

## Author

**Abhilash B S**

Computer Science student and software developer focused on building practical products across web development, e-commerce, automation, and AI.

- GitHub: [@abhilash-abhi178](https://github.com/abhilash-abhi178)

## License

No open-source license is currently specified for this repository. Unless otherwise stated, the source remains the author's work and should not be redistributed or reused as a packaged product without permission.
