# Wingstone Theme Agent Handoff

## Purpose
This document is the single working brief for future updates to the Wingstone Shopify theme. It captures the folder structure, brand system, key integrations, current implementation patterns, and the rules to follow so future changes stay consistent.

## Repository Structure

```text
wingstone-shopify-theme/
├─ assets/
│  ├─ animations.css
│  ├─ base.css
│  ├─ cart-drawer.js
│  ├─ components.css
│  ├─ global.js
│  ├─ product-gallery.js
│  ├─ smooth-scroll.js
│  ├─ theme.js
│  ├─ utilities.css
│  └─ wingstone-hero.css
├─ config/
│  ├─ settings_data.json
│  └─ settings_schema.json
├─ docs/
│  └─ METAFIELDS.md
├─ layout/
│  ├─ password.liquid
│  └─ theme.liquid
├─ locales/
│  └─ en.default.json
├─ scratch/
│  ├─ live_theme/
│  └─ live_theme_check/
├─ sections/
│  ├─ brand-values.liquid
│  ├─ cinematic-banner.liquid
│  ├─ contact-page.liquid
│  ├─ dynamic-product.liquid
│  ├─ editorial-grid.liquid
│  ├─ featured-collection.liquid
│  ├─ footer.liquid
│  ├─ header.liquid
│  ├─ hero-video.liquid
│  ├─ hero-wingstone.liquid
│  ├─ main-404.liquid
│  ├─ main-cart-items.liquid
│  ├─ main-collection.liquid
│  ├─ main-login.liquid
│  ├─ main-page.liquid
│  ├─ main-product.liquid
│  ├─ newsletter.liquid
│  ├─ product-template.liquid
│  ├─ search-results.liquid
│  └─ tech-specs.liquid
├─ snippets/
│  ├─ button-primary.liquid
│  ├─ icon-arrow.liquid
│  ├─ icon-heart.liquid
│  ├─ icon-star.liquid
│  ├─ motion-reveal.liquid
│  ├─ page-loader.liquid
│  └─ product-card.liquid
├─ templates/
│  ├─ 404.json
│  ├─ cart.json
│  ├─ collection.json
│  ├─ gift_card.liquid
│  ├─ index.json
│  ├─ page.about.json
│  ├─ page.contact.json
│  ├─ page.json
│  ├─ product.json
│  ├─ search.json
│  └─ customers/login.json
└─ README.md
```

## Brand And Design System

### Core palette
Use the Wingstone brand palette consistently across layout, components, and UI states.

- Ink navy: `#1D2C43`
- Frost blue: `#D5DFF5`
- Steel blue: `#5E789B`
- Paper: `#FFFFFF`
- Soft border: `#B9C7DE`
- Accent: `#8EA4C6`

### Theme settings palette
The active theme settings map to these values and should remain the source of truth for UI colors:

- `color_ink`
- `color_frost`
- `color_steel`
- `color_paper`
- `color_line`
- `color_accent`

### Typography
- Heading font and body font are configurable in theme settings.
- Preserve the premium editorial feel.
- Favor strong hierarchy, generous spacing, and restrained uppercase labels for utility UI.

### Visual language
- Overall tone: cinematic, premium, cool-toned, minimal but not sterile.
- Backgrounds should feel layered, not flat.
- Use soft borders, subtle shadows, glass or frosted surfaces where appropriate.
- Motion should feel deliberate, not playful.
- Maintain strong contrast and readable typography on mobile.

### Component style rules
- Buttons should be bold and clearly tappable.
- Cards should use consistent border radius, padding, and spacing.
- Forms should feel clean and readable with clear focus states.
- Mobile navigation and drawers should use smooth transitions and layered overlays.
- Product cards should keep quick-add actions visually distinct but not noisy.

## Key Integrations

### Shopify theme integration points
- `layout/theme.liquid` is the global shell.
- It loads the base styles and front-end scripts.
- It renders the header, footer, page loader, cart drawer, and toast container.
- It should remain the only place that wires global storefront assets.

### Scripts and responsibilities
- `assets/global.js` handles the mobile menu drawer and header interactions.
- `assets/theme.js` handles menu toggles, silent quick-add submits, product form updates, and cart badge refresh behavior.
- `assets/cart-drawer.js` manages the AJAX cart drawer UI, item quantity changes, and cart state rendering.
- `assets/product-gallery.js` handles gallery behavior on product pages.
- `assets/smooth-scroll.js` handles scrolling enhancements.

### Stylesheet responsibilities
- `assets/base.css` contains the core theme styling and the cart drawer styling.
- `assets/components.css` contains reusable component styles such as product cards and primary buttons.
- `assets/utilities.css` contains responsive utility rules and mobile tweaks.
- `assets/animations.css` contains motion primitives.
- `assets/wingstone-hero.css` contains hero-specific presentation.

### Product and cart behavior
- Quick add buttons on product cards should add items silently and update cart state without opening the drawer.
- PDP add-to-cart should follow the same silent update pattern unless a specific design requires otherwise.
- Cart drawer open behavior should be reserved for explicit cart actions, not for all add-to-cart submits.
- Cart badge updates should stay in sync after add, remove, or quantity changes.

### Metafields
The theme expects these product metafields from `docs/METAFIELDS.md`:

- `custom.theme_style`
- `custom.drop_name`
- `custom.subtitle`
- `custom.story`
- `custom.accent_color`

These fields drive richer product storytelling and dynamic product presentation.

## Page And Template Map

### Global layout
- `layout/theme.liquid` provides the header/footer shell, global overlays, and script/style loading.
- `layout/password.liquid` is the password-gated storefront entry.

### Sections
- `sections/header.liquid` controls the site header, desktop nav, mobile menu trigger, and cart trigger.
- `sections/footer.liquid` controls the site footer.
- `sections/hero-wingstone.liquid` and `sections/hero-video.liquid` provide home-page hero presentation.
- `sections/featured-collection.liquid` and `sections/editorial-grid.liquid` drive product discovery and editorial content.
- `sections/product-template.liquid`, `sections/dynamic-product.liquid`, and `sections/main-product.liquid` support product detail page rendering and interactions.
- `sections/main-cart-items.liquid` renders the cart page.
- `sections/main-collection.liquid`, `sections/search-results.liquid`, `sections/main-page.liquid`, `sections/contact-page.liquid`, and `sections/main-404.liquid` cover the supporting storefront pages.

### Snippets
- `snippets/product-card.liquid` is the main product grid card and quick-add entry point.
- `snippets/button-primary.liquid` is the primary CTA helper.
- `snippets/icon-*` provide shared iconography.
- `snippets/motion-reveal.liquid` handles reveal behavior.
- `snippets/page-loader.liquid` provides the initial page loader.

### Templates
- JSON templates wire sections together for the storefront pages.
- `templates/product.json` and `templates/index.json` are the main customer-facing entry points.
- `templates/cart.json`, `templates/collection.json`, `templates/search.json`, `templates/page.json`, and customer templates support the secondary flows.

## Current Implementation Notes

- The mobile menu requires `assets/global.js` to be loaded by `layout/theme.liquid`.
- The cart drawer styles live in `assets/base.css` and must match the generated cart drawer HTML in `assets/cart-drawer.js`.
- Cart drawer and quick-add flows should not fight each other. Silent add flows should stay silent.
- `assets/theme.js` already contains the preferred silent quick-add path for product cards and PDP add-to-cart behavior.
- Avoid reintroducing duplicate cart-open handlers in other scripts.
- Keep responsive rules coordinated between `base.css`, `components.css`, and `utilities.css`.

## Update Rules For Future Agents

1. Prefer the smallest change that fixes the root cause.
2. Check whether the behavior belongs in markup, JS, or CSS before editing.
3. Do not duplicate cart or menu handlers across files.
4. When adding UI elements, make sure the corresponding CSS exists in the stylesheet that owns that component.
5. Preserve the existing palette, typography, spacing, and motion language.
6. Validate edited files with targeted error checks after changes.
7. Do not remove unrelated user changes.
8. Keep storefront behavior accessible on keyboard and mobile.

## Known Good Patterns

- Global assets are loaded in `layout/theme.liquid`.
- Header and drawers use a shared, consistent overlay model.
- Product card quick-add should update state without forcing a drawer open.
- Theme settings are the source of truth for brand color customization.
- Metafields should be used for richer product storytelling instead of hard-coded content.

## Practical Handoff Summary

If you are making future updates, start with the relevant owning file:

- Header/menu changes: `sections/header.liquid`, `assets/global.js`, `assets/base.css`
- Cart drawer changes: `assets/cart-drawer.js`, `assets/base.css`, `layout/theme.liquid`
- Quick-add changes: `snippets/product-card.liquid`, `assets/theme.js`, `assets/components.css`
- Product page changes: `sections/product-template.liquid`, `sections/main-product.liquid`, `assets/theme.js`
- Brand/system styling: `config/settings_schema.json`, `assets/base.css`, `assets/components.css`, `assets/utilities.css`
- Metafield-driven product content: `docs/METAFIELDS.md`, product metafields in Shopify admin

This brief is intended to keep future work aligned with the current structure and reduce accidental regressions.
