# WINGSTONE Shopify Redirect Theme

This branch contains a small Shopify theme used only as a redirect layer for the WINGSTONE headless/custom storefront.

## Purpose

Shopify's hosted checkout can return customers to the shop's `*.myshopify.com` storefront. This redirect theme makes that Shopify storefront send visitors back to the real WINGSTONE storefront at `https://wingstone.studio`.

This follows Shopify's documented headless redirect-theme pattern. The official Shopify redirect theme uses `layout/theme.liquid` for client-side redirection while keeping the bot-protection checkpoint available.

## Important

This is **not** the main WINGSTONE storefront theme. Do not replace the production storefront theme with this branch.

Upload this branch as a separate theme in:

**Shopify Admin → Online Store → Themes → Add theme → Upload zip**

Then configure/publish it as the redirect layer for the Shopify Online Store.

## Configuration

The default setting is already configured as:

`wingstone.studio`

If needed, open **Theme settings → Storefront** and set the hostname to:

`wingstone.studio`

Do not include `https://`.

## Expected flow

```text
wingstone.studio
      ↓
Custom storefront
      ↓
Shopify cart / Storefront API
      ↓
Shopify checkout
      ↓
Order completed
      ↓
Continue Shopping
      ↓
y1g1mr-tp.myshopify.com/
      ↓
Redirect theme
      ↓
https://wingstone.studio/
```

The checkout itself remains hosted by Shopify. Only traffic that lands on the Shopify Online Store is redirected.
