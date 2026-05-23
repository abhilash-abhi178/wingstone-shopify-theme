# Wingstone Shopify Theme — Design

## Purpose

Provide a clean, modern, and performance-focused Shopify storefront for Wingstone products. The theme emphasizes large media, clear product detail, and an approachable, editorial aesthetic.

## Brand & Visuals
- **Primary Color:** #0F172A — deep navy for headers and anchors
- **Accent Color:** #7C3AED — brand accent for buttons and highlights
- **Secondary:** #F43F5E — action/alert accents
- **Background:** #FFFFFF / #F8FAFC — light surfaces
- **Muted:** #6B7280 — secondary text and meta

Use generous white space, subtle card shadows, and large imagery for product hero sections.

## Typography
- **Display / Headings:** Inter (600–800) or system sans-serif fallback
- **Body:** Inter (400) or system sans-serif
- **Scale:** H1 ~48px, H2 ~34px, H3 ~24px, Body ~16px, Small ~13px

Prefer variable fonts when available; fall back to system stacks for speed.

## Layout & Grid
- Responsive grid with breakpoints: mobile (<=640px), tablet (641–1024px), desktop (>=1024px)
- 12-column grid on desktop, simplified stacking on smaller screens
- Max content width: 1200px for product and collection content

## Key Components
- **Hero:** full-bleed imagery or video with headline and CTA
- **Header / Nav:** compact, sticky on scroll with search and cart icon
- **Product Card:** image, title, price, quick-add action, rounded corners
- **Product Page:** gallery, zoom/lightbox, sticky add-to-cart, details tab
- **Collection Page:** filters (left or collapsible panel on mobile), sort
- **Cart Drawer:** slide-over panel with item list and checkout CTA
- **Footer:** compact links, newsletter signup, social links

Match component anatomy with files in sections/ and snippets/ for easy mapping.

## Interaction & Animations
- Subtle motion for hover states and reveal animations (use prefers-reduced-motion media query)
- Keep animations GPU-accelerated and short (100–300ms)

## Accessibility
- Use semantic HTML elements and ARIA roles where appropriate
- Ensure color contrast meets WCAG AA for body text and large headings
- Keyboard navigable: focus states for all interactive controls
- Provide meaningful alt text for all content images

## Assets & Performance
- Serve responsive images with `srcset` and modern formats (WebP/AVIF) where possible
- Lazy-load offscreen images and defer non-critical JS
- Minimize critical CSS and inline small above-the-fold styles

## Theming & Customization
- Settings are exposed through `config/settings_schema.json` and `settings_data.json`
- Keep tokens (colors, spacing, typography) configurable to allow brand variations

## File Structure (high-level)
- `assets/` — CSS, JS, fonts, images
- `sections/` — editable theme sections (hero, header, footer, product)
- `snippets/` — small reusable Liquid pieces (buttons, icons)
- `templates/` — page templates and JSON templates

## Developer Notes
- Follow the existing CSS convention (utility classes + component CSS files)
- Keep JavaScript modular and avoid polluting global scope
- Use progressive enhancement: HTML-first, then CSS, then JS

## Contribution
1. Open an issue describing the design change.
2. Implement in a feature branch and include visual diffs/screenshots.
3. Run a quick accessibility check and performance audit before PR.

---
Generated on 2026-05-23.

## Single-file Implementation — Design + Logical Code

The following section collects the theme's core design tokens and minimal example implementations (CSS, Liquid, JS) in one place so engineers can copy/paste and adapt.

### CSS — Design Tokens & Utilities
```css
:root{
	--color-primary:#0F172A;
	--color-accent:#7C3AED;
	--color-secondary:#F43F5E;
	--color-bg:#FFFFFF;
	--color-muted:#6B7280;
	--max-width:1200px;
	--space-1:8px; --space-2:16px; --space-3:24px; --space-4:32px;
	--font-sans: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

/* Base layout */
html,body{height:100%;margin:0;font-family:var(--font-sans);background:var(--color-bg);color:var(--color-primary)}
.container{max-width:var(--max-width);margin:0 auto;padding:0 var(--space-2)}

/* Simple responsive grid */
.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:var(--space-3)}
.col-6{grid-column:span 6}
.col-12{grid-column:span 12}

/* Buttons */
.btn{display:inline-flex;align-items:center;justify-content:center;padding:10px 16px;border-radius:8px;border:0;background:var(--color-primary);color:#fff;cursor:pointer}
.btn--accent{background:var(--color-accent)}

/* Hero utilities */
.hero{position:relative;display:grid;align-items:center}
.hero__media{width:100%;height:min(60vh,640px);object-fit:cover}
.hero__content{position:absolute;left:var(--space-3);top:50%;transform:translateY(-50%);color:#fff;max-width:520px}

@media (max-width:640px){
	.grid{grid-template-columns:repeat(4,1fr)}
	.col-6{grid-column:span 4}
}
```

### Liquid — Minimal Hero Section
```liquid
<!-- sections/hero.liquid (example) -->
<section class="hero">
	<picture class="hero__media">
		{% if section.settings.image %}
			<source srcset="{{ section.settings.image | img_url: '2048x' }}" media="(min-width:1024px)">
			<img src="{{ section.settings.image | img_url: '1024x' }}" alt="{{ section.settings.image.alt | escape }}" class="hero__media">
		{% endif %}
	</picture>
	<div class="container hero__content">
		<h1>{{ section.settings.heading }}</h1>
		<p>{{ section.settings.subheading }}</p>
		{% if section.settings.cta_text %}
			<a href="{{ section.settings.cta_url }}" class="btn btn--accent">{{ section.settings.cta_text }}</a>
		{% endif %}
	</div>
</section>
```

### Snippet — Product Card (Liquid)
```liquid
<!-- snippets/product-card.liquid -->
<article class="product-card">
	<a href="{{ product.url }}">
		<img src="{{ product.featured_image | img_url: '600x' }}" alt="{{ product.featured_image.alt }}">
		<h3>{{ product.title }}</h3>
	</a>
	<div class="product-card__meta">
		<span class="price">{{ product.price | money }}</span>
		<button class="btn add-to-cart" data-product-id="{{ product.id }}">Add</button>
	</div>
</article>
```

### JS — Minimal Cart Drawer Logic
```javascript
// assets/cart-drawer.js — simple progressive-enhancement
(() => {
	const openBtn = document.querySelector('[data-open-cart]');
	const drawer = document.querySelector('#cart-drawer');
	if (!openBtn || !drawer) return;
	openBtn.addEventListener('click', () => drawer.classList.add('is-open'));
	drawer.addEventListener('click', (e) => { if (e.target === drawer || e.target.closest('[data-close-cart]')) drawer.classList.remove('is-open') });
	// minimal add-to-cart handler
	document.addEventListener('click', async (e) => {
		const btn = e.target.closest('.add-to-cart');
		if (!btn) return;
		const id = btn.dataset.productId;
		btn.disabled = true;
		try{
			await fetch('/cart/add.js',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id,quantity:1})});
			drawer.classList.add('is-open');
			// fetch and render cart contents (left as exercise)
		}catch(err){console.error(err)}finally{btn.disabled=false}
	});
})();
```

---
If you'd like, I can also:
- extract these snippets into `sections/hero.liquid`, `snippets/product-card.liquid`, and `assets/cart-drawer.js` files
- add minimal CSS into `assets/wingstone-hero.css` or a new `assets/design-tokens.css`

