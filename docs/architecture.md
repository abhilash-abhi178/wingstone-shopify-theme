# WINGSTONE Architecture

## Storefront

The `main` branch is the production Shopify theme. Shopify renders the storefront using Liquid, JSON templates, sections, snippets, assets, and theme settings.

```text
Customer
   |
   v
WINGSTONE storefront
   |
   +--> Products / Collections / Search
   |
   +--> Cart / Wishlist
   |
   v
Shopify Checkout
   |
   v
Order
```

## Repository responsibilities

- `assets/` — CSS, JavaScript, images, and other theme assets
- `config/` — Theme Editor settings
- `layout/` — Global HTML shell and shared runtime
- `locales/` — Translation strings
- `sections/` — Theme Editor sections and page components
- `snippets/` — Reusable Liquid fragments
- `templates/` — JSON/Liquid resource templates

## Shopify responsibilities

Shopify Admin remains the source of truth for products, collections, navigation, customers, orders, payment, checkout configuration, and store data.

Checkout UI files are not part of this repository.

## Checkout return

The current post-checkout issue is a domain/redirect concern: Shopify's checkout can return customers to the Shopify-hosted `myshopify.com` storefront. The separate `shopify-redirect-theme` branch is kept isolated from `main` so it can be deployed as the redirect layer without replacing the real WINGSTONE storefront.

## Safe change workflow

1. Create a feature or fix branch.
2. Run Shopify Theme Check.
3. Run `shopify theme dev`.
4. Test desktop and mobile.
5. Test product, collection, search, cart, and checkout entry.
6. Test the post-checkout return path.
7. Merge only after validation.
8. Publish the Shopify theme manually after reviewing the target theme.
