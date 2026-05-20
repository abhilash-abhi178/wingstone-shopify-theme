# Metafields for Dynamic Product Enhancements

Create these metafield definitions in your Shopify admin (Settings → Custom data → Products → Add definition) or via the Shopify CLI / Admin API.

Required definitions (namespace: `custom`):

- `theme_style` — Single line text
- `drop_name` — Single line text
- `subtitle` — Single line text
- `story` — Multi-line text (rich text or plain)
- `accent_color` — Color

Example (Shopify Admin):
1. Settings → Custom data → Products → Add definition
2. Name: Theme style, Namespace and key: `custom.theme_style`, Content type: Single line text
3. Repeat for the other keys above.

Quick CLI (Shopify CLI / REST example):
You can create metafield definitions with the Admin API. Example GraphQL mutation (replace `YOUR_STORE` auth):

mutation createDef {
  metafieldDefinitionCreate(definition: {
    name: "Theme style",
    namespace: "custom",
    key: "theme_style",
    type: "single_line_text_field",
    ownerType: PRODUCT
  }) {
    createdDefinition { id }
    userErrors { field message }
  }
}

Repeat for `drop_name` and `subtitle` (use `single_line_text_field`), `story` (use `multi_line_text_field`), and `accent_color` (use `color` if supported or `single_line_text_field` storing a hex code).

Example product values (for reference):

Mecha Geisha
- `theme_style`: cyberpunk
- `drop_name`: DROP_01 // CYBER ASCENSION
- `subtitle`: Heavyweight Oversized Hoodie
- `story`: A collision of machine precision and warrior elegance.

Minimal Tee
- `theme_style`: luxury
- `drop_name`: ESSENTIALS_02
- `subtitle`: Premium Everyday Tee
- `story`: Built for effortless daily wear with understated luxury.

Notes:
- Use hex color strings (e.g. `#ffd814`) for `accent_color`, or use Shopify's color field if available in your plan.
- After creating definitions, populate them on product detail pages in the Shopify Admin or via bulk APIs.
