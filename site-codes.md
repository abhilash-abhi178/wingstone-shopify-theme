# Entire Site Codes

This document contains all text-based tracked files in the repository.

## `.gitattributes`

```
# Auto detect text files and perform LF normalization
* text=auto
```

## `.gitignore`

```

```

## `README.md`

```markdown
# Wingstone Shopify Theme

This theme uses the supplied Wingstone logo palette:

- Ink navy: `#1D2C43`
- Frost blue: `#D5DFF5`
- Steel blue: `#5E789B`
- Paper: `#FFFFFF`
- Soft border: `#B9C7DE`
- Accent: `#8EA4C6`

## Upload

1. Zip the contents of this folder.
2. In Shopify Admin, open **Online Store > Themes**.
3. Choose **Add theme > Upload zip file**.
4. Upload `wingstone-shopify-theme.zip`.
5. Open **Customize** and connect your menus, collections, hero image, and logo.

The logo file is included at `assets/wingstone-logo.png` and is used automatically when no custom logo is selected.
```

## `assets/animations.css`

```css
/* ============================================================
   WINGSTONE — animations.css
   All keyframes + motion system
   ============================================================ */

/* ── Timing presets ── */
:root {
  --ease-luxury:   cubic-bezier(0.25, 0.10, 0.00, 1.00);
  --ease-snap:     cubic-bezier(0.20, 0.90, 0.20, 1.00);
  --ease-out:      cubic-bezier(0.00, 0.00, 0.20, 1.00);
  --dur-fast:      180ms;
  --dur-med:       340ms;
  --dur-slow:      600ms;
  --dur-luxury:    900ms;
}

/* ── Keyframes ── */
@keyframes backdrop-drift {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  33%       { transform: translate(-51%, -51%) scale(1.012); }
  66%       { transform: translate(-49%, -50%) scale(0.992); }
}

@keyframes content-rise {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes hero-ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes header-promo {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes rule-glow {
  0%, 100% { opacity: .55; }
  50%       { opacity: 1; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes rise-fade {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes loader-spin {
  to { transform: rotate(360deg); }
}

@keyframes loader-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: .5; transform: scale(0.94); }
}

@keyframes slide-up-fade {
  from { opacity: 0; transform: translateY(48px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Scroll-reveal system ── */
.motion-reveal,
.js-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity var(--dur-luxury) var(--ease-luxury),
    transform var(--dur-luxury) var(--ease-luxury);
  will-change: opacity, transform;
}

.motion-reveal.is-visible,
.js-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.motion-reveal--fade {
  transform: none;
  transition: opacity var(--dur-luxury) var(--ease-luxury);
}

.motion-reveal--scale {
  transform: scale(0.96);
  transition:
    opacity var(--dur-luxury) var(--ease-luxury),
    transform var(--dur-luxury) var(--ease-luxury);
}

.motion-reveal--scale.is-visible {
  transform: scale(1);
}

/* Stagger siblings */
.js-stagger > *:nth-child(1) { transition-delay: 0ms; }
.js-stagger > *:nth-child(2) { transition-delay: 80ms; }
.js-stagger > *:nth-child(3) { transition-delay: 160ms; }
.js-stagger > *:nth-child(4) { transition-delay: 240ms; }
.js-stagger > *:nth-child(5) { transition-delay: 320ms; }
.js-stagger > *:nth-child(6) { transition-delay: 400ms; }

/* Hero content stagger */
.hero-content > * {
  animation: rise-fade var(--dur-luxury) var(--ease-luxury) both;
}
.hero-content > *:nth-child(1) { animation-delay: 200ms; }
.hero-content > *:nth-child(2) { animation-delay: 340ms; }
.hero-content > *:nth-child(3) { animation-delay: 460ms; }
.hero-content > *:nth-child(4) { animation-delay: 560ms; }
.hero-content > *:nth-child(5) { animation-delay: 640ms; }

/* ── Hover micro-interactions ── */
.hover-lift {
  transition: transform var(--dur-med) var(--ease-luxury), box-shadow var(--dur-med) var(--ease-luxury);
}
.hover-lift:hover { transform: translateY(-4px); }

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .motion-reveal,
  .motion-reveal--fade,
  .motion-reveal--scale {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .hero-content > * {
    animation: none;
    opacity: 1;
  }
}
```

## `assets/base.css`

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --space-xs: clamp(.5rem, 1vw, .75rem);
  --space-sm: clamp(.85rem, 1.5vw, 1.15rem);
  --space-md: clamp(1.5rem, 3vw, 2.25rem);
  --space-lg: clamp(3rem, 6vw, 4.5rem);
  --page-max-width: 1240px;
  /* Hero2 layout tokens */
  --hw-gutter: clamp(1.25rem, 4vw, 2.5rem);
  --hw-max: 1240px;
  --hw-pad-l: max(var(--hw-gutter), calc((100vw - var(--hw-max)) / 2 + var(--hw-gutter)));
  --hw-gap: clamp(2rem, 5vw, 5rem);
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

    /* =========================================
       WINGSTONE PREMIUM HERO STYLES
       Appended by assistant
    ========================================= */
  
body {
  margin: 0;
  color: var(--color-ink);
  background:
    radial-gradient(circle at 12% 8%, color-mix(in srgb, var(--color-accent), transparent 84%), transparent 26rem),
    radial-gradient(circle at 92% 18%, color-mix(in srgb, var(--color-steel), transparent 86%), transparent 30rem),
    linear-gradient(180deg, var(--color-paper) 0%, var(--color-frost) 38%, color-mix(in srgb, var(--color-paper), var(--color-frost) 62%) 100%);
  font-family: var(--font-body-family);
  font-size: clamp(15px, 1vw + 14px, 16px);
  line-height: 1.55;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

.skip-link {
  position: absolute;
  left: -999px;
  top: 1rem;
  z-index: 100;
  background: var(--color-paper);
  color: var(--color-ink);
  padding: .75rem 1rem;
  border: 1px solid var(--color-line);
}

.skip-link:focus {
  left: 1rem;
}

.page-width {
  width: min(var(--page-max-width), calc(100% - clamp(1.25rem, 4vw, 2.5rem)));
  margin: 0 auto;
}

.section {
  padding: var(--space-lg) 0;
  animation: content-rise .7s ease both;
}

.js-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .72s ease, transform .72s ease;
}

.js-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  margin: 0 0 1rem;
  color: var(--color-ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.25rem, 5vw, 5rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0;
  overflow-wrap: anywhere;
}

.section-subtext {
  max-width: 520px;
  margin: 0 auto clamp(2rem, 5vw, 4rem);
  color: var(--color-steel);
  font-size: clamp(.95rem, 1.15vw, 1.08rem);
  line-height: 1.75;
  text-align: center;
}

.eyebrow {
  margin: 0 0 .65rem;
  color: var(--color-steel);
  font-size: clamp(.7rem, .7rem + .12vw, .8rem);
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
  animation: content-rise .62s ease both;
}

.rte,
.page-content,
.contact-page__lede,
.login-page__text,
.site-footer__philosophy,
.pdp-description {
  max-width: 70ch;
}

.button,
.shopify-payment-button__button,
button.shopify-payment-button__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .65rem;
  min-height: 62px;
  border-radius: 2px;
  border: 1px solid var(--color-ink);
  background: linear-gradient(135deg, var(--color-ink), color-mix(in srgb, var(--color-ink), var(--color-steel) 22%));
  color: var(--color-paper);
  padding: clamp(.85rem, 1.2vw, 1rem) clamp(1.25rem, 2.2vw, 1.75rem);
  font-family: var(--font-body-family);
  font-weight: 700;
  font-size: .82rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 14px 34px color-mix(in srgb, var(--color-ink), transparent 84%);
  transition: transform .25s var(--ease-luxury, ease), background .25s ease, color .25s ease, border-color .25s ease, box-shadow .25s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
  background: color-mix(in srgb, var(--color-paper), transparent 4%);
  color: var(--color-ink);
  border-color: var(--color-accent);
  box-shadow: 0 18px 44px color-mix(in srgb, var(--color-accent), transparent 76%);
}

.button--secondary {
  background: transparent;
  color: var(--color-ink);
  box-shadow: none;
  border-color: color-mix(in srgb, var(--color-ink), transparent 70%);
}

.button--secondary:hover,
.button--secondary:focus-visible {
  background: var(--color-ink);
  color: var(--color-paper);
  border-color: var(--color-ink);
}

.button--gold {
  background: linear-gradient(135deg, #735c00 0%, var(--color-accent) 50%, #e8d48a 100%);
  border-color: var(--color-accent);
  color: #fff;
  box-shadow: 0 14px 40px color-mix(in srgb, var(--color-accent), transparent 78%);
}

.button--gold:hover,
.button--gold:focus-visible {
  transform: translateY(-2px) scale(1.01);
  filter: brightness(1.05);
  background: linear-gradient(135deg, #735c00 0%, var(--color-accent) 50%, #e8d48a 100%);
  color: #fff;
  border-color: var(--color-accent);
  box-shadow: 0 20px 50px color-mix(in srgb, var(--color-accent), transparent 72%);
}

.field {
  width: 100%;
  min-height: 52px;
  border: 1px solid var(--color-line);
  border-radius: 2px;
  background: var(--color-paper);
  color: var(--color-ink);
  padding: clamp(.78rem, 1vw, .92rem) clamp(.95rem, 1.5vw, 1.1rem);
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: grid;
  gap: 0;
  pointer-events: none;
  border-bottom: 1px solid color-mix(in srgb, var(--color-line), transparent 20%);
  background: color-mix(in srgb, var(--color-frost), transparent 10%);
  box-shadow: 0 16px 46px color-mix(in srgb, var(--color-ink), transparent 90%);
  backdrop-filter: blur(18px);
}

.site-header__promo,
.site-header__shell {
  pointer-events: auto;
}

.site-header__promo {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border: 0;
  border-bottom: 1px solid color-mix(in srgb, var(--color-line), transparent 35%);
  border-radius: 0;
  background: var(--color-ink);
  color: color-mix(in srgb, var(--color-paper), var(--color-accent) 12%);
  box-shadow: none;
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.site-header__promo-track {
  display: flex;
  width: max-content;
  gap: 1.5rem;
  padding: .42rem 0;
  font-size: .68rem;
  font-weight: 900;
  letter-spacing: .18em;
  line-height: 1.2;
  text-transform: uppercase;
  animation: header-promo 28s linear infinite;
}

.site-header__promo-track span {
  white-space: nowrap;
}

.site-header__shell {
  width: min(1180px, calc(100% - 32px));
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  backdrop-filter: none;
}

.site-header__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 72px;
  gap: 1rem;
  padding: 0 .9rem;
}

.site-header__left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 0;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .75rem;
  font-family: var(--font-heading-family);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: .18em;
  text-transform: uppercase;
  min-width: 0;
}

.site-header__logo {
  max-width: min(118px, 30vw);
}

.site-nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: clamp(.9rem, 2.4vw, 2rem);
}

.site-nav a,
.site-header__action {
  color: var(--color-ink);
  font-size: .82rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  transition: color .18s ease, opacity .18s ease;
}

.site-nav a:hover,
.site-header__action:hover {
  color: var(--color-accent);
}

.site-header__actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  min-width: 0;
}

.site-header__action {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 84%);
  background: color-mix(in srgb, var(--color-paper), transparent 18%);
}

.site-header__action svg {
  width: 20px;
  height: 20px;
}

.site-header__badge {
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 19px;
  height: 19px;
  padding: 0 5px;
  border-radius: 999px;
  background: var(--color-ink);
  color: var(--color-paper);
  font-size: .66rem;
  font-weight: 800;
  line-height: 19px;
  text-align: center;
}

.main {
  padding-top: 104px;
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--color-line);
  border-radius: 6px;
  background: transparent;
  color: var(--color-ink);
}

.menu-toggle__line {
  display: block;
  width: 18px;
  height: 2px;
  margin: 2px auto;
  background: currentColor;
}

.wingstone-menu-trigger {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--color-line);
  border-radius: 6px;
  background: transparent;
  color: var(--color-ink);
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  line-height: 1;
}

.hero {
  min-height: calc(100svh - 58px);
  display: grid;
  align-items: center;
  overflow: hidden;
}

.featured-products {
  scroll-margin-top: 70px;
}

.featured-products .page-width {
  position: relative;
}

.featured-products .eyebrow,
.featured-products .section-title {
  text-align: center;
}

.featured-products .section-title {
  margin-bottom: clamp(1.5rem, 4vw, 2.6rem);
}

.featured-products__actions {
  display: flex;
  justify-content: center;
  margin-top: clamp(1.5rem, 4vw, 2.5rem);
}

@keyframes header-promo {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes content-rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes backdrop-drift {

  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }

  50% {
    transform: translate(-50%, calc(-50% - 8px)) scale(1.015);
  }
}













/* Toast confirmation */
.cart-toast {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 120;
  display: grid;
  place-items: center;
}

.cart-toast[hidden] {
  display: none;
}

.cart-toast__inner {
  display: flex;
  align-items: center;
  gap: .6rem;
  background: rgba(4, 16, 47, 0.96);
  color: #fff;
  padding: .72rem 1.1rem;
  border-radius: 10px;
  box-shadow: 0 12px 40px rgba(2, 6, 23, 0.5);
  transform: translateY(14px);
  opacity: 0;
  transition: transform .32s cubic-bezier(.2, .9, .2, 1), opacity .32s ease;
  font-weight: 600;
  font-size: .85rem;
}

.cart-toast.show .cart-toast__inner,
.cart-toast.is-active .cart-toast__inner {
  transform: translateY(0);
  opacity: 1;
}

/* price badge on current price */
.purchase-price__current {
  font-size: 1.35rem;
  font-weight: 800;
  color: color-mix(in srgb, var(--color-accent), black 8%)
}

/* responsive tweaks */
@media(max-width:980px) {
  .product-buttons {
    flex-direction: column
  }

  .color-card img {
    height: 84px
  }
}

/* ── Premium Cart Drawer ── */
.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(420px, 96vw);
  background: color-mix(in srgb, var(--color-frost), white 8%);
  backdrop-filter: blur(18px);
  box-shadow: -4px 0 60px color-mix(in srgb, var(--color-ink), transparent 88%);
  transform: translateX(110%);
  will-change: transform;
  transition: transform .32s cubic-bezier(.2, .9, .2, 1);
  z-index: 110;
  display: flex;
  flex-direction: column;
  border-left: 1px solid color-mix(in srgb, var(--color-line), transparent 30%);
}

.cart-drawer.is-open {
  transform: translateX(0);
}

.cart-drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(4, 16, 47, 0.42);
  opacity: 0;
  will-change: opacity;
  transition: opacity .28s ease;
  z-index: 100;
  pointer-events: none;
  backdrop-filter: blur(2px);
}

.cart-drawer-backdrop.is-open {
  opacity: 1;
  pointer-events: auto;
}

.cart-drawer__shell {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cart-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid var(--color-line);
  flex-shrink: 0;
}

.cart-drawer__header-left {
  display: flex;
  flex-direction: column;
  gap: .18rem;
}

.cart-drawer__eyebrow {
  font-size: .66rem;
  font-weight: 800;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.cart-drawer__title {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.45rem;
  font-weight: 400;
  letter-spacing: -.01em;
  color: var(--color-ink);
  line-height: 1.1;
}

.cart-drawer__count {
  font-size: .9rem;
  color: var(--color-steel);
  font-family: var(--font-body-family);
  font-weight: 400;
}

.cart-drawer__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--color-line);
  background: transparent;
  color: var(--color-ink);
  cursor: pointer;
  transition: background .18s ease, border-color .18s ease;
}

.cart-drawer__close:hover {
  background: var(--color-ink);
  color: var(--color-paper);
  border-color: var(--color-ink);
}

/* Shipping progress */
.cart-drawer__ship-progress {
  padding: .85rem 1.5rem;
  border-bottom: 1px solid var(--color-line);
  flex-shrink: 0;
}

.cart-drawer__ship-track {
  height: 3px;
  background: color-mix(in srgb, var(--color-line), transparent 20%);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: .55rem;
}

.cart-drawer__ship-fill {
  height: 100%;
  background: var(--color-accent);
  border-radius: 999px;
  transition: width .5s cubic-bezier(.2,.9,.2,1);
}

.cart-drawer__ship-label {
  margin: 0;
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: .04em;
  color: var(--color-steel);
}

.cart-drawer__ship-label strong {
  color: var(--color-accent);
}

.cart-drawer__ship-label.is-free strong {
  color: #1f8a5f;
}

/* Body scroll area */
.cart-drawer__body {
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  padding: 1rem 1.5rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--color-line) transparent;
}

.cart-drawer__body::-webkit-scrollbar {
  width: 4px;
}

.cart-drawer__body::-webkit-scrollbar-thumb {
  background: var(--color-line);
  border-radius: 4px;
}

/* Loading spinner */
.cart-drawer__loading-spinner {
  display: flex;
  justify-content: center;
  padding: 3rem 0;
}

.cart-drawer__loading-spinner span {
  width: 28px;
  height: 28px;
  border: 2px solid var(--color-line);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: spin .7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Cart items */
.cart-drawer__items {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.cart-drawer__item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-line), transparent 30%);
}

.cart-drawer__item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.cart-drawer__item-image {
  aspect-ratio: 3 / 4;
  border-radius: 6px;
  overflow: hidden;
  background: var(--color-frost);
  border: 1px solid var(--color-line);
}

.cart-drawer__item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.cart-drawer__item-details {
  display: flex;
  flex-direction: column;
  gap: .4rem;
}

.cart-drawer__item-title {
  margin: 0;
  font-size: .88rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-ink);
}

.cart-drawer__item-title a {
  color: inherit;
  text-decoration: none;
  transition: color .18s ease;
}

.cart-drawer__item-title a:hover {
  color: var(--color-accent);
}

.cart-drawer__item-variant {
  margin: 0;
  font-size: .74rem;
  color: var(--color-steel);
  letter-spacing: .04em;
}

.cart-drawer__item-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: .4rem;
}

.cart-drawer__qty-selector {
  display: flex;
  align-items: center;
  gap: 0;
  border: 1px solid var(--color-line);
  border-radius: 6px;
  overflow: hidden;
}

.cart-drawer__qty-selector button {
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  color: var(--color-ink);
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .15s ease;
  line-height: 1;
}

.cart-drawer__qty-selector button:hover {
  background: var(--color-frost);
}

.cart-drawer__qty-selector input {
  width: 36px;
  height: 30px;
  text-align: center;
  border: none;
  border-left: 1px solid var(--color-line);
  border-right: 1px solid var(--color-line);
  background: transparent;
  font-size: .82rem;
  font-weight: 600;
  color: var(--color-ink);
  -moz-appearance: textfield;
}

.cart-drawer__qty-selector input::-webkit-inner-spin-button,
.cart-drawer__qty-selector input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.cart-drawer__item-price-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: .15rem;
}

.cart-drawer__item-price {
  font-size: .9rem;
  font-weight: 800;
  color: var(--color-ink);
}

.cart-drawer__item-price-compare {
  font-size: .72rem;
  color: var(--color-steel);
  text-decoration: line-through;
}

.cart-drawer__item-remove {
  align-self: flex-start;
  margin-top: .25rem;
  background: none;
  border: none;
  padding: 0;
  font-size: .68rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--color-steel);
  cursor: pointer;
  transition: color .18s ease;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.cart-drawer__item-remove:hover {
  color: #cc0c39;
}

/* Empty state */
.cart-drawer__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1rem;
  gap: 1.25rem;
}

.cart-drawer__empty-icon {
  font-size: 2.5rem;
  opacity: .3;
}

.cart-drawer__empty-text {
  margin: 0;
  font-size: .95rem;
  color: var(--color-steel);
  line-height: 1.6;
}

/* Footer */
.cart-drawer__footer {
  padding: 1.25rem 1.5rem calc(1.25rem + env(safe-area-inset-bottom));
  border-top: 1px solid var(--color-line);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: .85rem;
  background: color-mix(in srgb, var(--color-frost), white 12%);
}

.cart-drawer__totals {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-drawer__totals-label {
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--color-steel);
}

.cart-drawer__totals-value {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-ink);
}

.cart-drawer__tax-note {
  margin: 0;
  font-size: .72rem;
  color: var(--color-steel);
  text-align: center;
}

.cart-drawer__checkout-form .btn-primary,
.cart-drawer__checkout-form button {
  width: 100%;
  min-height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  border-radius: 2px;
  border: none;
  background: linear-gradient(135deg, #735c00 0%, var(--color-accent) 50%, #e8d48a 100%);
  color: #fff;
  font-family: var(--font-body-family);
  font-size: .82rem;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 14px 40px color-mix(in srgb, var(--color-accent), transparent 78%);
  transition: transform .22s ease, box-shadow .22s ease, filter .22s ease;
}

.cart-drawer__checkout-form button:hover {
  transform: translateY(-2px) scale(1.005);
  filter: brightness(1.06);
  box-shadow: 0 20px 50px color-mix(in srgb, var(--color-accent), transparent 72%);
}

.w-full { width: 100%; }

/* Product card microinteraction */
.product-card {
  transition: transform .24s ease, box-shadow .24s ease;
  will-change: transform;
}

.product-card:hover,
.product-card:focus-within {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 18px 40px color-mix(in srgb, var(--color-ink), transparent 88%);
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .js-reveal,
  .cart-drawer,
  .button,
  .product-card {
    transition: none !important;
    animation: none !important;
  }
}

/* Search results grid */
.search-results__form {
  margin-bottom: 1.25rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.search-results__more {
  text-align: center;
  margin-top: 1rem;
}

.search-results .section-title {
  margin-top: 0;
}

.search-results p {
  color: var(--color-steel);
}


@keyframes rule-glow {

  0%,
  100% {
    opacity: .55;
    transform: scaleX(.8);
  }

  50% {
    opacity: 1;
    transform: scaleX(1.15);
  }
}

.hero--tones {
  position: relative;
  min-height: calc(100svh - 104px);
  border-bottom: 1px solid color-mix(in srgb, var(--color-line), transparent 40%);
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--color-ink), transparent 93%) 0%, transparent 70%),
    radial-gradient(ellipse 50% 40% at 80% 80%, color-mix(in srgb, var(--color-ink), transparent 95%) 0%, transparent 60%),
    var(--color-frost);
}

.hero__bg,
.hero__pattern {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__bg {
  background:
    radial-gradient(circle at 50% 8%, color-mix(in srgb, var(--color-accent), transparent 86%), transparent 26rem),
    radial-gradient(circle at 10% 80%, color-mix(in srgb, var(--color-ink), transparent 94%), transparent 22rem);
}

.hero__pattern {
  opacity: .035;
  background-image:
    linear-gradient(var(--color-ink) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-ink) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero__inner {
  position: relative;
  min-height: inherit;
  display: grid;
  place-items: center;
}

.hero__backdrop {
  position: absolute;
  /* center relative to the full-width .hero container */
  left: 50%;
  top: 50%;
  z-index: 0;
  width: max-content;
  max-width: 100%;
  margin: 0;
  color: color-mix(in srgb, var(--color-ink), transparent 95%);
  font-family: Georgia, "Times New Roman", serif;
  /* Reduce extremes so the backdrop scales but doesn't overflow on common screens */
  font-size: clamp(3.5rem, 12vw, 10rem);
  font-weight: 400;
  line-height: .74;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  overflow-wrap: anywhere;
  white-space: nowrap;
  pointer-events: none;
  animation: backdrop-drift 9s ease-in-out infinite;
}

/* Allow the huge backdrop word to wrap on small viewports so it doesn't overflow or shift visually */
@media (max-width: 560px) {
  .hero__backdrop {
    /* Allow wrapping and reduce size on small viewports so it fits vertically */
    white-space: normal;
    font-size: clamp(2.25rem, 10vw, 5rem);
    transform: translate(-50%, -60%);
  }
}

.hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  padding: clamp(4rem, 9vw, 7rem) 0;
  text-align: center;
  width: min(660px, 100%);
  animation: content-rise .78s ease both;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  margin-bottom: 2rem;
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 88%);
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-ink), transparent 94%);
  color: var(--color-ink);
  padding: .42rem 1rem;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .12em;
  line-height: 1.25;
  text-transform: uppercase;
  animation: content-rise .8s .12s ease both;
}

.hero__badge span {
  color: var(--color-accent);
}

.hero__offer {
  max-width: 900px;
  margin: 0 0 1.2rem;
  color: color-mix(in srgb, var(--color-ink), #000 16%);
  font-family: Georgia, "Times New Roman", serif;
  /* Slightly reduce headline scale for better cross-device fit */
  font-size: clamp(2rem, 6.5vw, 4rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0;
  overflow-wrap: anywhere;
}

.hero__offer::after {
  display: none;
}

.hero__text {
  max-width: 560px;
  margin: 0 0 2.4rem;
  color: var(--color-steel);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 400;
  line-height: 1.75;
}

.hero__text p {
  margin: 0;
}

.hero__text strong {
  color: var(--color-ink);
  font-weight: 800;
}

.hero__ticker {
  width: min(620px, calc(100vw - 48px));
  margin-top: 3.4rem;
  overflow: hidden;
  color: var(--color-steel);
  font-size: .72rem;
  font-weight: 800;
  letter-spacing: .18em;
  line-height: 1.4;
  text-transform: uppercase;
  mask-image: linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent);
}

.hero__stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(1rem, 4vw, 3rem);
  margin-top: clamp(3rem, 7vw, 5rem);
  animation: content-rise .8s .35s ease both;
}

.hero__stat {
  min-width: 96px;
  text-align: center;
}

.hero__stat strong {
  display: block;
  color: var(--color-ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 600;
  line-height: 1;
}

.hero__stat span {
  display: block;
  margin-top: .35rem;
  color: var(--color-steel);
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.hero__stat-divider {
  width: 1px;
  min-height: 48px;
  background: color-mix(in srgb, var(--color-ink), transparent 88%);
}

.hero__ticker-track {
  display: flex;
  width: max-content;
  gap: 1.35rem;
  animation: hero-ticker 22s linear infinite;
}

.hero__ticker-track span {
  white-space: nowrap;
}

@keyframes hero-ticker {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

.hero__buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .75rem;
  margin: 1rem 0;
}

.hero--with-media .hero__inner {
  gap: clamp(1.5rem, 4vw, 4rem);
}

@media (min-width: 900px) {
  .hero--with-media .hero__inner {
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.8fr);
    align-items: center;
  }

  .hero--with-media .hero__content {
    justify-items: start;
    text-align: left;
  }

  .hero--with-media .hero__buttons,
  .hero--with-media .hero__stats {
    justify-content: flex-start;
  }
}

.hero__media {
  position: relative;
  z-index: 1;
  width: min(100%, 520px);
  margin: 2rem auto 0;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 88%);
  box-shadow: 0 24px 60px color-mix(in srgb, var(--color-ink), transparent 90%);
  background: color-mix(in srgb, var(--color-paper), var(--color-ink) 2%);
}

.hero__media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--color-ink), transparent 94%) 100%);
  pointer-events: none;
}

.hero__image {
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  transform: scale(1.01);
}

@media (min-width: 900px) {
  .hero--with-media .hero__media {
    margin: 0;
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 1.8rem);
  border: 0;
  background: transparent;
}

.product-card {
  background: var(--color-paper);
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 90%);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  transition: background .3s ease, transform .3s ease, box-shadow .3s ease;
  box-shadow: 0 10px 28px color-mix(in srgb, var(--color-ink), transparent 94%);
}

.product-card::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width .4s ease;
}

.product-card:hover {
  background: var(--color-paper);
  transform: translateY(-6px);
  box-shadow: 0 22px 56px color-mix(in srgb, var(--color-ink), transparent 90%);
}

.product-card:hover::after {
  width: 100%;
}

.product-card:hover .product-card__image img:first-child {
  transform: scale(1.04);
}

.product-card__image {
  aspect-ratio: 1 / 1.05;
  background: color-mix(in srgb, var(--color-paper), var(--color-frost) 55%);
  display: grid;
  place-items: center;
}

.product-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .35s ease;
}

.product-card__body {
  display: grid;
  gap: .65rem;
  padding: clamp(1rem, 2vw, 1.35rem);
}

.product-card__deal {
  width: fit-content;
  border-radius: 2px;
  background: #cc0c39;
  color: #fff;
  padding: .24rem .48rem;
  font-size: .78rem;
  font-weight: 800;
  line-height: 1.1;
}

.product-card__badges {
  display: flex;
  flex-wrap: wrap;
  gap: .35rem;
}

.product-card__title {
  margin: 0;
  color: var(--color-ink);
  font-family: var(--font-body-family);
  font-size: clamp(.95rem, 1.3vw, 1.05rem);
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0;
  overflow-wrap: anywhere;
}

.product-card__signal {
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 2px;
  background: color-mix(in srgb, var(--color-accent), transparent 78%);
  color: color-mix(in srgb, var(--color-ink), #000 10%);
  padding: .22rem .45rem;
  font-size: .72rem;
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
}

.product-card__pricing {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: .45rem;
}

.product-card__price {
  color: color-mix(in srgb, var(--color-ink), #000 12%);
  font-size: 1rem;
  font-weight: 900;
}

.product-card__pricing s {
  color: var(--color-steel);
  font-size: .74rem;
}

.product-card__delivery {
  margin: 0;
  color: var(--color-steel);
  font-size: .74rem;
  line-height: 1.35;
}

.product-card__form {
  margin-top: .15rem;
}

.product-card__quick-add,
.product-card__button {
  width: 100%;
  min-height: 42px;
  border: 1px solid var(--color-ink);
  border-radius: 2px;
  background: var(--color-ink);
  color: var(--color-paper);
  padding: .65rem 1rem;
  font-family: var(--font-body-family);
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform .18s ease, background .18s ease, color .18s ease;
}

.product-card__quick-add:hover:not(:disabled),
.product-card__button:hover:not(:disabled),
.product-card__button:focus-visible {
  background: transparent;
  color: var(--color-ink);
  transform: translateY(-1px);
}

.product-card__quick-add:disabled,
.product-card__button[disabled] {
  background: color-mix(in srgb, var(--color-line), var(--color-paper) 35%);
  border-color: var(--color-line);
  color: var(--color-steel);
  cursor: not-allowed;
  transform: none;
}

.page-shell__inner {
  display: grid;
  gap: 1.5rem;
}

.page-shell__intro,
.contact-page__hero {
  display: grid;
  gap: .6rem;
  max-width: 72ch;
}

.page-shell__lede,
.contact-page__lede {
  margin: 0;
  color: var(--color-steel);
  line-height: 1.65;
  font-size: 1rem;
}

.page-shell__card,
.contact-form,
.contact-details {
  padding: clamp(1.1rem, 2.5vw, 1.6rem);
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 88%);
  border-radius: 16px;
  background: color-mix(in srgb, var(--color-paper), var(--color-frost) 30%);
  box-shadow: 0 16px 48px rgba(29, 44, 67, .06);
}

.page-content {
  color: var(--color-ink);
  line-height: 1.75;
}

.page-content> :first-child {
  margin-top: 0;
}

.page-content> :last-child {
  margin-bottom: 0;
}

.page-content ul,
.page-content ol {
  padding-left: 1.2rem;
  margin: 1rem 0;
}

.page-content li+li {
  margin-top: .35rem;
}

.page-content a {
  color: var(--color-accent);
}

.page-content a:hover,
.page-content a:focus-visible {
  text-decoration: underline;
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(280px, .7fr);
  gap: 1.25rem;
  align-items: start;
}

.contact-form,
.contact-details {
  display: grid;
  gap: 1rem;
}

.contact-details h3 {
  margin: .25rem 0 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.05rem;
}

.contact-details p {
  margin: 0;
  color: var(--color-steel);
  line-height: 1.7;
}

@media (max-width: 860px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: .75rem;
  margin-top: clamp(1.5rem, 4vw, 2.5rem);
}

.pagination__link,
.pagination__current {
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 84%);
  border-radius: 2px;
  padding: .75rem 1rem;
  font-weight: 800;
}

.pagination__link {
  background: var(--color-ink);
  color: var(--color-paper);
}

.feature-band {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% -10%, color-mix(in srgb, var(--color-accent), transparent 90%), transparent 55%),
    color-mix(in srgb, var(--color-ink), #000 28%);
  color: color-mix(in srgb, var(--color-paper), var(--color-frost) 12%);
}

.feature-band .section-title,
.feature-band .eyebrow {
  color: var(--color-paper);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: color-mix(in srgb, var(--color-paper), transparent 78%);
  border: 1px solid color-mix(in srgb, var(--color-paper), transparent 78%);
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 30px 90px rgba(0, 0, 0, .18);
}

.feature-item {
  min-height: 220px;
  padding: clamp(1.25rem, 3vw, 2rem);
  background: color-mix(in srgb, var(--color-ink), #000 16%);
  transition: transform .22s ease, background .22s ease;
}

.feature-item:hover {
  transform: translateY(-3px);
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--color-ink), var(--color-accent) 14%), var(--color-ink));
}

.feature-item__number {
  color: var(--color-accent);
  font-weight: 900;
  letter-spacing: .14em;
}

.feature-item h3 {
  margin: 2rem 0 .6rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.55rem;
  letter-spacing: 0;
}

.newsletter {
  background:
    radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--color-accent), transparent 82%), transparent 22rem),
    linear-gradient(180deg, color-mix(in srgb, var(--color-paper), var(--color-frost) 50%), var(--color-frost));
  text-align: center;
}

.newsletter .page-width {
  max-width: 820px;
}

.newsletter form {
  display: flex;
  gap: .75rem;
  max-width: 560px;
  margin: 1.5rem auto 0;
  padding: .4rem;
  border: 1px solid color-mix(in srgb, var(--color-line), transparent 18%);
  border-radius: 4px;
  background: color-mix(in srgb, var(--color-paper), transparent 8%);
  box-shadow: 0 20px 60px rgba(29, 44, 67, .1);
}

.newsletter .field {
  border-color: transparent;
  background: transparent;
}

.site-footer {
  background:
    radial-gradient(circle at 80% 0%, color-mix(in srgb, var(--color-accent), transparent 82%), transparent 22rem),
    linear-gradient(180deg, color-mix(in srgb, var(--color-ink), var(--color-steel) 10%), var(--color-ink));
  color: var(--color-paper);
  padding: 40px 0;
}

.site-footer__inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
}

.site-footer__inner--accordion {
  align-items: start;
}

.site-footer__brand-block {
  display: grid;
  gap: .45rem;
}

.site-footer__brand {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: .18em;
  text-transform: uppercase;
  white-space: nowrap;
  overflow-wrap: normal;
  word-break: normal;
}

.site-footer__philosophy {
  margin: .65rem 0 0;
  max-width: 36ch;
  color: color-mix(in srgb, var(--color-paper), transparent 22%);
  font-size: .92rem;
  line-height: 1.65;
}

.site-footer__accordion-group {
  display: grid;
  gap: .9rem;
}

.site-footer__accordion {
  padding-top: .9rem;
  border-top: 1px solid color-mix(in srgb, var(--color-paper), transparent 82%);
}

.site-footer__accordion:first-child {
  padding-top: 0;
  border-top: 0;
}

.site-footer__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  list-style: none;
  color: var(--color-paper);
  font-family: var(--font-heading-family);
  font-size: .9rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  cursor: pointer;
}

.site-footer__summary::-webkit-details-marker {
  display: none;
}

.site-footer__summary::after {
  content: '+';
  color: color-mix(in srgb, var(--color-paper), transparent 22%);
  font-size: 1.15rem;
  line-height: 1;
}

.site-footer__accordion[open] .site-footer__summary::after {
  content: '−';
}

.site-footer__panel {
  display: grid;
  gap: .7rem;
  padding-top: .95rem;
}

.site-footer__panel a {
  color: color-mix(in srgb, var(--color-paper), transparent 10%);
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-decoration: none;
  text-transform: uppercase;
}

.site-footer__panel a:hover,
.site-footer__panel a:focus-visible {
  color: var(--color-paper);
  text-decoration: underline;
}

.site-footer__meta-links a:hover,
.site-footer__meta-links a:focus-visible {
  text-decoration: underline;
}

.collection-toolbar,
.product {
  display: grid;
  gap: 2rem;
}

.product {
  grid-template-columns: minmax(0, 1fr) minmax(320px, .78fr);
  align-items: start;
}

.product__media,
.cart-table {
  background: var(--color-paper);
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 88%);
  border-radius: 4px;
  overflow: hidden;
}

.product__media {
  padding: 1rem;
}

.product-gallery {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
}

.product-gallery__thumbs {
  display: flex;
  flex-direction: column;
  gap: .75rem;
}

.product-gallery__thumb {
  display: block;
  width: 100%;
  padding: 0;
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 82%);
  border-radius: 4px;
  background: var(--color-paper);
  overflow: hidden;
  cursor: pointer;
  transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
}

.product-gallery__thumb img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.product-gallery__thumb:hover,
.product-gallery__thumb:focus-visible,
.product-gallery__thumb.is-active {
  border-color: var(--color-accent);
  box-shadow: 0 10px 24px color-mix(in srgb, var(--color-accent), transparent 84%);
  transform: translateY(-1px);
}

.product-gallery__main {
  min-width: 0;
}

.product-gallery__main img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.product__info {
  position: sticky;
  top: 104px;
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 88%);
  border-radius: 16px;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--color-paper), white 8%), color-mix(in srgb, var(--color-paper), var(--color-frost) 42%));
  box-shadow: 0 22px 60px rgba(29, 44, 67, .08);
}

.product__title {
  margin: 0 0 .75rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.75rem, 4vw, 3rem);
  line-height: .98;
  text-transform: uppercase;
}

.purchase-price {
  display: flex;
  align-items: baseline;
  gap: .65rem;
  margin-bottom: 1rem;
}

.purchase-price__current,
.price {
  color: color-mix(in srgb, var(--color-accent), var(--color-ink) 30%);
  font-size: 1.25rem;
  font-weight: 900;
}

.purchase-price__compare {
  color: var(--color-steel);
  font-size: .95rem;
  font-weight: 700;
  text-decoration: line-through;
}

.product__description {
  margin-top: 1.4rem;
  color: var(--color-steel);
  line-height: 1.65;
  font-size: .95rem;
}

.product__description p {
  margin: 0 0 .85rem;
}

.product-form {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.product-form label {
  display: grid;
  gap: .45rem;
}

.product-form .button[disabled] {
  opacity: .72;
  cursor: not-allowed;
  box-shadow: none;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table th,
.cart-table td {
  border-bottom: 1px solid var(--color-line);
  padding: 1rem;
  text-align: left;
}

.cart-total {
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.gift-card {
  min-height: 100svh;
  display: grid;
  align-items: center;
}

.gift-card__inner {
  max-width: 720px;
}

.login-page {
  min-height: calc(100svh - 104px);
  display: grid;
  align-items: center;
}

.login-page__shell {
  display: grid;
  place-items: center;
}

.login-page__card {
  width: min(520px, 100%);
  padding: clamp(1.25rem, 3vw, 2.25rem);
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 88%);
  border-radius: 8px;
  background: color-mix(in srgb, var(--color-paper), var(--color-frost) 36%);
  box-shadow: 0 24px 70px rgba(29, 44, 67, .12);
}

.login-page__text {
  margin: -.25rem 0 1.5rem;
  color: var(--color-steel);
  line-height: 1.6;
}

.login-form {
  display: grid;
  gap: 1rem;
}

.login-page__links {
  display: flex;
  justify-content: space-between;
  gap: .75rem;
  flex-wrap: wrap;
  color: var(--color-steel);
  font-size: .92rem;
}

.login-page__links a:hover,
.login-page__links a:focus-visible {
  color: var(--color-accent);
}

.cart-drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 70;
  background: rgba(10, 14, 22, .42);
  backdrop-filter: blur(2px);
}

.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 80;
  width: min(420px, 100vw);
  height: 100dvh;
  background: color-mix(in srgb, var(--color-paper), var(--color-frost) 20%);
  border-left: 1px solid color-mix(in srgb, var(--color-ink), transparent 88%);
  box-shadow: -24px 0 70px rgba(29, 44, 67, .18);
  transform: translateX(100%);
  transition: transform .28s ease;
}

.cart-drawer.is-open {
  transform: translateX(0);
}

.cart-drawer__shell {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
}

.cart-drawer__header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
  padding: 1rem 1rem .9rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-ink), transparent 88%);
  background: color-mix(in srgb, var(--color-paper), transparent 8%);
}

.cart-drawer__title {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.2rem;
  line-height: 1.1;
}

.cart-drawer__close {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 84%);
  border-radius: 999px;
  background: var(--color-paper);
  color: var(--color-ink);
  font-size: 1.4rem;
  cursor: pointer;
}

.cart-drawer__body {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 0;
  overflow: hidden;
}

.cart-drawer__content {
  overflow: auto;
  padding: 1rem;
}

.cart-drawer__loading,
.cart-drawer__empty {
  margin: 0;
  color: var(--color-steel);
}

.cart-drawer__items {
  display: grid;
  gap: .8rem;
}

.cart-drawer__item {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: .8rem;
  padding: .75rem;
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 90%);
  border-radius: 8px;
  background: var(--color-paper);
}

.cart-drawer__item img {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 6px;
}

.cart-drawer__item-title {
  margin: 0 0 .25rem;
  font-size: .95rem;
  line-height: 1.25;
}

.cart-drawer__item-meta,
.cart-drawer__item-price {
  color: var(--color-steel);
  font-size: .82rem;
}

.cart-drawer__footer {
  padding: 1rem;
  border-top: 1px solid color-mix(in srgb, var(--color-ink), transparent 88%);
  background: color-mix(in srgb, var(--color-paper), transparent 6%);
}

.cart-drawer__summary {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  margin-bottom: .9rem;
  font-weight: 800;
}

.cart-drawer__actions {
  display: grid;
  gap: .65rem;
}

.cart-drawer__actions .button {
  width: 100%;
}

body.cart-drawer-open {
  overflow: hidden;
}

@media (max-width: 560px) {
  .cart-drawer {
    width: 100vw;
  }
}

@media (max-width: 640px) {
  body {
    padding-bottom: env(safe-area-inset-bottom);
  }

  .site-footer__brand {
    font-size: clamp(1.4rem, 8vw, 1.85rem);
    letter-spacing: .14em;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .variant-card-list--color {
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
  }

  .variant-card-list--color::-webkit-scrollbar {
    display: none;
  }

  .variant-card {
    flex: 0 0 min(168px, 72vw);
  }

  .purchase-actions,
  .purchase-actions__buy-now .shopify-payment-button,
  .purchase-actions__buy-now .shopify-payment-button__button {
    min-width: 0;
  }

  .purchase-actions {
    padding-bottom: env(safe-area-inset-bottom);
  }
}

@media (max-width: 860px) {
  .size-chart-modal {
    padding: 12px;
  }

  .size-chart-modal__card {
    width: min(720px, calc(100vw - 24px));
    max-height: calc(100dvh - 24px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  }

  .size-chart-modal__body {
    max-height: calc(100dvh - 94px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}

@media (max-width: 860px) {
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}

.gift-card__panel {
  background: color-mix(in srgb, var(--color-paper), transparent 9%);
  border: 1px solid var(--color-line);
  border-radius: 8px;
  padding: clamp(1.5rem, 5vw, 3rem);
  text-align: center;
  box-shadow: 0 24px 64px rgba(29, 44, 67, .12);
}

.gift-card__logo {
  display: grid;
  place-items: center;
  margin-bottom: 1.5rem;
}

.gift-card__logo img {
  width: min(260px, 72vw);
}

.gift-card__balance {
  margin: 0 0 1rem;
  color: var(--color-ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.6rem, 8vw, 5rem);
.cart-drawer__item-title a {
  color: inherit;
  text-decoration: none;
}
.cart-drawer__item-details {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.cart-drawer__item-variant {
  margin: 0 0 .35rem;
  color: var(--color-steel);
  font-size: .82rem;
}
.cart-drawer__item-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: .75rem;
  margin-top: .55rem;
}
.cart-drawer__qty-selector {
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 84%);
  border-radius: 999px;
  background: var(--color-paper);
}
.cart-drawer__qty-selector button {
  width: 34px;
  height: 34px;
  border: 0;
  background: color-mix(in srgb, var(--color-ink), transparent 94%);
  color: var(--color-ink);
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
}
.cart-drawer__qty-selector input {
  width: 46px;
  height: 34px;
  border: 0;
  background: transparent;
  color: var(--color-ink);
  font: inherit;
  text-align: center;
}
.cart-drawer__qty-selector input::-webkit-outer-spin-button,
.cart-drawer__qty-selector input::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}
.cart-drawer__qty-selector input[type="number"] {
  appearance: textfield;
}
.cart-drawer__item-price-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: .15rem;
  text-align: right;
}
.cart-drawer__item-price-compare {
  color: var(--color-steel);
  font-size: .78rem;
}
.cart-drawer__item-remove {
  align-self: flex-start;
  margin-top: .65rem;
  border: 0;
  background: transparent;
  color: color-mix(in srgb, var(--color-ink), var(--color-steel) 16%);
  font-size: .78rem;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}
.cart-drawer__item-remove:hover,
.cart-drawer__item-remove:focus-visible {
  color: var(--color-ink);
}
  font-weight: 900;
  line-height: .9;
}

.gift-card__code {
.cart-drawer__actions .btn-primary {
  justify-content: center;
}
.cart-drawer__actions .w-full {
  width: 100%;
}
  margin: 1.25rem auto;
  border: 1px dashed var(--color-steel);
  border-radius: 4px;
  background: var(--color-frost);
  padding: 1rem;
  color: var(--color-ink);
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: 900;
  letter-spacing: .08em;
  overflow-wrap: anywhere;
}

.gift-card__qr {
  margin: 1rem auto;
}

.gift-card__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .75rem;
  margin-top: 1.5rem;
}

@media (max-width: 900px) {
  .site-header {
    top: 0;
    gap: 0;
  }

  .site-header__promo {
    width: 100%;
  }

  .site-header__shell {
    width: min(100% - 24px, 1180px);
  }

  .site-header__inner {
    grid-template-columns: auto 1fr auto;
    min-height: 56px;
    gap: .65rem;
  }

  .menu-toggle {
    display: inline-grid;
    place-items: center;
  }

  .site-nav {
    position: fixed;
    top: 104px;
    left: 12px;
    right: 12px;
    bottom: auto;
    display: none;
    flex-direction: column;
    align-items: stretch;
    background: color-mix(in srgb, var(--color-paper), var(--color-frost) 46%);
    border: 1px solid color-mix(in srgb, var(--color-line), transparent 18%);
    border-radius: 8px;
    box-shadow: 0 24px 70px rgba(29, 44, 67, .2);
    padding: 1rem;
  }

  .wingstone-menu-trigger {
    display: inline-grid;
    place-items: center;
  }

  /* ========================================
     WINGSTONE MOBILE DRAWER
  ======================================== */

  .wingstone-menu-overlay {

    position: fixed;

    inset: 0;

    background:
      rgba(15,23,42,0.38);

    backdrop-filter: blur(8px);

    opacity: 0;

    visibility: hidden;

    transition: all 0.4s ease;

    z-index: 998;
  }

  .wingstone-mobile-menu {

    position: fixed;

    top: 0;
    left: 0;

    width: min(88%, 420px);

    height: 100vh;

    background:
      rgba(255,255,255,0.94);

    backdrop-filter: blur(20px);

    border-right:
      1px solid rgba(15,23,42,0.06);

    transform: translateX(-100%);

    transition:
      transform 0.45s cubic-bezier(.77,0,.18,1);

    z-index: 999;

    display: flex;

    flex-direction: column;

    padding: 26px;
  }

  .wingstone-mobile-menu.active {

    transform: translateX(0);
  }

  .wingstone-menu-overlay.active {

    opacity: 1;

    visibility: visible;
  }

  .wingstone-menu-header {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 50px;
  }

  .wingstone-menu-close {

    border: none;

    background: transparent;

    font-size: 26px;

    cursor: pointer;

    color: #0f172a;
  }

  .wingstone-menu-logo {

    font-size: 18px;

    letter-spacing: 4px;

    font-weight: 800;

    color: #0f172a;
  }

  .wingstone-menu-links {

    display: flex;

    flex-direction: column;

    gap: 28px;
  }

  .wingstone-menu-links a {

    text-decoration: none;

    font-size: 13px;

    letter-spacing: 3px;

    color: #0f172a;

    font-weight: 700;

    transition: all 0.3s ease;
  }

  .wingstone-menu-links a:hover {

    transform: translateX(6px);

    color: #d4af37;
  }

  .site-nav.is-open {
    display: flex;
  }

  .site-nav a {
    padding: .9rem 0;
  }

  .site-header__actions {
    gap: .65rem;
  }

  .product {
    grid-template-columns: 1fr;
  }

  .product__info {
    position: static;
  }

  .product-gallery {
    grid-template-columns: 1fr;
  }

  .product-gallery__thumbs {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: .25rem;
  }

  .product-gallery__thumb {
    flex: 0 0 72px;
  }

  .hero {
    min-height: auto;
  }

  .wingstone-mobile-menu,
  .wingstone-menu-overlay {

    display: flex;
  }

  .main {
    padding-top: 104px;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.15rem;
    margin-top: 1.5rem;

    .feature-grid,
    .purchase-options {
      display: grid;
      gap: 1.25rem;
    }

    .purchase-option {
      grid-template-columns: 1fr;
      gap: .7rem;
    }

    .purchase-option__header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
    }

    .purchase-option__heading {
      display: flex;
      flex-wrap: wrap;
      gap: .35rem .5rem;
      align-items: baseline;
    }

    .purchase-option__label {
      color: var(--color-steel);
      font-size: .75rem;
      font-weight: 800;
      letter-spacing: .18em;
      text-transform: uppercase;
    }

    .purchase-option__selected {
      color: var(--color-ink);
      font-size: .92rem;
      font-weight: 700;
    }

    .purchase-option__size-chart-trigger {
      display: inline-flex;
      align-items: center;
      gap: .35rem;
      border: 0;
      padding: 0;
      background: transparent;
      color: var(--color-steel);
      font-size: .75rem;
      font-weight: 800;
      letter-spacing: .14em;
      text-transform: uppercase;
      cursor: pointer;
      transition: color .2s ease, transform .2s ease;
    }

    .purchase-option__size-chart-trigger:hover,
    .purchase-option__size-chart-trigger:focus-visible {
      color: var(--color-accent);
      transform: translateY(-1px);
    }

    .variant-card-list {
      display: flex;
      gap: .85rem;
    }

    .variant-card-list--color {
      overflow-x: auto;
      padding-bottom: .25rem;
      scroll-snap-type: x mandatory;
    }

    .variant-card {
      flex: 0 0 168px;
      display: grid;
      gap: .7rem;
      padding: .65rem;
      border: 1px solid color-mix(in srgb, var(--color-line), transparent 12%);
      border-radius: 16px;
      background: color-mix(in srgb, var(--color-paper), white 4%);
      box-shadow: 0 10px 24px rgba(29, 44, 67, .05);
      cursor: pointer;
      text-align: left;
      transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease, background .2s ease;
      scroll-snap-align: start;
    }

    .variant-card:hover,
    .variant-card:focus-visible {
      transform: translateY(-2px);
      border-color: color-mix(in srgb, var(--color-accent), var(--color-ink) 30%);
      box-shadow: 0 16px 34px rgba(29, 44, 67, .1);
    }

    .variant-card.is-active {
      border-color: #3f7df3;
      box-shadow: 0 14px 36px rgba(63, 125, 243, .2);
      transform: translateY(-1px);
    }

    .variant-card.is-out-of-stock {
      opacity: .5;
      filter: grayscale(.35);
      text-decoration: line-through;
    }

    .variant-card__media {
      display: grid;
      place-items: center;
      min-height: 108px;
      border-radius: 12px;
      overflow: hidden;
      background: linear-gradient(180deg, color-mix(in srgb, var(--color-frost), white 12%), color-mix(in srgb, var(--color-paper), var(--color-frost) 40%));
    }

    .variant-card__media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .variant-card__fallback {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: linear-gradient(135deg, color-mix(in srgb, var(--color-steel), white 18%), color-mix(in srgb, var(--color-frost), var(--color-accent) 18%));
    }

    .variant-card__info {
      display: grid;
      gap: .2rem;
    }

    .variant-card__title {
      color: var(--color-ink);
      font-size: .88rem;
      font-weight: 800;
    }

    .variant-card__meta {
      color: var(--color-steel);
      font-size: .78rem;
      font-weight: 700;
    }

    .size-pill-list {
      display: flex;
      flex-wrap: wrap;
      gap: .7rem;
    }

    .size-pill {
      min-width: 54px;
      padding: .78rem 1rem;
      border: 1px solid color-mix(in srgb, var(--color-line), transparent 10%);
      border-radius: 999px;
      background: color-mix(in srgb, var(--color-paper), white 6%);
      color: var(--color-ink);
      font-size: .88rem;
      font-weight: 700;
      cursor: pointer;
      transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease, background .2s ease;
    }

    .size-pill:hover,
    .size-pill:focus-visible {
      transform: translateY(-1px);
      border-color: color-mix(in srgb, var(--color-accent), var(--color-ink) 30%);
      box-shadow: 0 10px 24px rgba(29, 44, 67, .08);
    }

    .size-pill.is-active {
      background: linear-gradient(135deg, var(--color-ink), color-mix(in srgb, var(--color-ink), var(--color-steel) 20%));
      color: var(--color-paper);
      border-color: var(--color-ink);
      box-shadow: 0 12px 28px rgba(29, 44, 67, .18);
    }

    .size-pill.is-out-of-stock {
      opacity: .42;
      text-decoration: line-through;
      cursor: not-allowed;
    }

    .purchase-quantity {
      display: grid;
      gap: .55rem;
    }

    .purchase-quantity__label {
      color: var(--color-steel);
      font-size: .75rem;
      font-weight: 800;
      letter-spacing: .18em;
      text-transform: uppercase;
    }

    .purchase-quantity__control {
      display: inline-flex;
      align-items: center;
      width: min(100%, 220px);
      border: 1px solid color-mix(in srgb, var(--color-line), transparent 10%);
      border-radius: 16px;
      overflow: hidden;
      background: color-mix(in srgb, var(--color-paper), white 4%);
      box-shadow: 0 10px 24px rgba(29, 44, 67, .05);
    }

    .purchase-quantity__button {
      width: 48px;
      height: 48px;
      border: 0;
      background: transparent;
      color: var(--color-ink);
      font-size: 1.2rem;
      font-weight: 700;
      cursor: pointer;
      transition: background .2s ease, color .2s ease, transform .2s ease;
    }

    .purchase-quantity__button:hover,
    .purchase-quantity__button:focus-visible {
      background: color-mix(in srgb, var(--color-frost), white 12%);
      color: var(--color-accent);
    }

    .purchase-quantity__input {
      width: 100%;
      min-width: 0;
      border: 0;
      border-left: 1px solid color-mix(in srgb, var(--color-line), transparent 12%);
      border-right: 1px solid color-mix(in srgb, var(--color-line), transparent 12%);
      border-radius: 0;
      background: transparent;
      text-align: center;
      font-size: 1rem;
      font-weight: 800;
    }

    .purchase-trust {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: .75rem;
    }

    .purchase-trust__item {
      display: inline-flex;
      align-items: center;
      gap: .55rem;
      padding: .8rem .9rem;
      border: 1px solid color-mix(in srgb, var(--color-line), transparent 6%);
      border-radius: 14px;
      background: color-mix(in srgb, var(--color-paper), white 4%);
      color: var(--color-steel);
      font-size: .84rem;
      font-weight: 700;
    }

    .purchase-trust__icon {
      display: inline-grid;
      place-items: center;
      width: 22px;
      height: 22px;
      border-radius: 999px;
      background: color-mix(in srgb, var(--color-accent), white 80%);
      color: var(--color-ink);
      font-size: .75rem;
      font-weight: 900;
    }

    .purchase-stock {
      margin: 0;
      padding: .85rem 1rem;
      border-radius: 14px;
      background: color-mix(in srgb, var(--color-accent), white 88%);
      color: var(--color-ink);
      font-size: .88rem;
      font-weight: 700;
    }

    .purchase-actions {
      display: grid;
      gap: .8rem;
    }

    .purchase-actions__add,
    .purchase-actions .shopify-payment-button__button,
    .purchase-actions .shopify-payment-button__button--unbranded {
      width: 100%;
      min-height: 54px;
      border-radius: 16px;
    }

    .purchase-actions__buy-now .shopify-payment-button,
    .purchase-actions__buy-now .shopify-payment-button__button {
      width: 100%;
    }

    .purchase-actions__buy-now .shopify-payment-button__button {
      background: transparent;
      color: var(--color-ink);
      border: 1px solid color-mix(in srgb, var(--color-ink), transparent 76%);
      box-shadow: none;
    }

    .purchase-actions__buy-now .shopify-payment-button__button:hover,
    .purchase-actions__buy-now .shopify-payment-button__button:focus-visible {
      transform: translateY(-1px);
      border-color: var(--color-accent);
    }

    .purchase-meta {
      display: grid;
      gap: .65rem;
    }

    .purchase-meta__item {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding: .9rem 1rem;
      border: 1px solid color-mix(in srgb, var(--color-line), transparent 10%);
      border-radius: 14px;
      background: color-mix(in srgb, var(--color-paper), white 5%);
    }

    .purchase-meta__item strong {
      color: var(--color-ink);
      font-size: .84rem;
    }

    .purchase-meta__item span {
      color: var(--color-steel);
      font-size: .84rem;
      text-align: right;
    }

    .purchase-security-note {
      margin: 0;
      color: var(--color-steel);
      font-size: .82rem;
    }

    .size-chart-modal {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity .28s ease, visibility .28s ease;
    }

    .size-chart-modal.is-open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .size-chart-modal__backdrop {
      position: absolute;
      inset: 0;
      background: rgba(10, 14, 22, .48);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    .size-chart-modal__card {
      position: relative;
      z-index: 1;
      width: min(720px, 100%);
      max-height: min(88vh, 860px);
      overflow: auto;
      border: 1px solid color-mix(in srgb, var(--color-ink), transparent 88%);
      border-radius: 18px;
      background: linear-gradient(180deg, color-mix(in srgb, var(--color-paper), white 6%), color-mix(in srgb, var(--color-paper), var(--color-frost) 28%));
      box-shadow: 0 20px 50px rgba(15, 25, 40, .28);
    }

    .size-chart-modal__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.1rem 1.25rem;
      border-bottom: 1px solid color-mix(in srgb, var(--color-line), transparent 10%);
    }

    .size-chart-modal__title {
      margin: 0;
      color: var(--color-ink);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.2rem;
    }

    .size-chart-modal__close {
      display: inline-grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border: 0;
      border-radius: 999px;
      background: transparent;
      color: var(--color-steel);
      cursor: pointer;
      transition: background .2s ease, color .2s ease, transform .2s ease;
    }

    .size-chart-modal__close:hover,
    .size-chart-modal__close:focus-visible {
      background: color-mix(in srgb, var(--color-frost), white 8%);
      color: var(--color-ink);
      transform: rotate(90deg);
    }

    .size-chart-modal__body {
      padding: 1.25rem;
    }

    .size-chart-tabs {
      display: inline-flex;
      width: 100%;
      padding: .35rem;
      margin-bottom: 1rem;
      border: 1px solid color-mix(in srgb, var(--color-line), transparent 10%);
      border-radius: 999px;
      background: rgba(245, 247, 250, .94);
    }

    .size-chart-tab {
      flex: 1;
      min-height: 44px;
      border: 0;
      border-radius: 999px;
      background: transparent;
      color: var(--color-steel);
      font-size: .8rem;
      font-weight: 800;
      letter-spacing: .08em;
      text-transform: uppercase;
      cursor: pointer;
      transition: background .2s ease, color .2s ease, box-shadow .2s ease;
    }

    .size-chart-tab.is-active {
      background: var(--color-paper);
      color: var(--color-ink);
      box-shadow: 0 4px 14px rgba(15, 25, 40, .12);
    }

    .size-chart-content {
      display: none;
    }

    .size-chart-content.is-active {
      display: block;
    }

    .size-chart-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      border: 1px solid color-mix(in srgb, var(--color-line), transparent 10%);
      border-radius: 14px;
      overflow: hidden;
      background: var(--color-paper);
    }

    .size-chart-table th,
    .size-chart-table td {
      padding: .9rem 1rem;
      border-bottom: 1px solid color-mix(in srgb, var(--color-line), transparent 10%);
      border-right: 1px solid color-mix(in srgb, var(--color-line), transparent 10%);
      color: var(--color-ink);
    }

    .size-chart-table th:last-child,
    .size-chart-table td:last-child {
      border-right: 0;
    }

    .size-chart-table tr:last-child td {
      border-bottom: 0;
    }

    .size-chart-table th {
      background: linear-gradient(180deg, rgba(245, 247, 250, .98), rgba(239, 243, 247, .98));
      color: var(--color-steel);
      font-size: .72rem;
      font-weight: 800;
      letter-spacing: .12em;
      text-transform: uppercase;
    }

    .size-chart-table tr:hover td {
      background: color-mix(in srgb, var(--color-frost), white 24%);
    }

    .size-chart-modal__note {
      margin: .95rem 0 0;
      color: var(--color-steel);
      font-size: .76rem;
      line-height: 1.55;
    }

    .product-form .button[disabled] {
      opacity: .72;
      cursor: not-allowed;
      box-shadow: none;
    }

    @media (max-width: 860px) {
      .product__info {
        position: static;
        top: auto;
        border-radius: 18px;
      }

      .variant-card-list--color {
        padding-bottom: .5rem;
      }

      .variant-card {
        flex-basis: 150px;
      }

      .purchase-trust {
        grid-template-columns: 1fr;
      }

      .purchase-actions {
        position: sticky;
        bottom: 0;
        z-index: 20;
        padding: .9rem;
        margin: 0 -1rem -1rem;
        border-top: 1px solid color-mix(in srgb, var(--color-line), transparent 10%);
        background: color-mix(in srgb, var(--color-paper), white 10%);
        backdrop-filter: blur(14px);
      }

      .size-chart-modal {
        padding: 12px;
      }

      .size-chart-modal__body {
        padding: 1rem;
      }

      .size-chart-table th,
      .size-chart-table td {
        padding: .78rem .8rem;
      }
    }

    .site-footer__inner {
      text-align: left;
    }

    .site-footer__inner--accordion {
      grid-template-columns: 1fr;
    }

    .site-footer__accordion-group {
      gap: 0;
    }

    .site-footer__accordion {
      padding: .95rem 0;
    }

    .newsletter form {
      flex-direction: column;
      border-radius: 20px;
    }

    .newsletter .button {
      width: 100%;
    }
  }

  @media (max-width: 560px) {
    .page-width {
      width: min(100% - 24px, 1180px);
    }

    .section {
      padding: clamp(36px, 12vw, 58px) 0;
    }

    .section-title {
      font-size: clamp(2rem, 12vw, 3.2rem);
    }

    .eyebrow {
      font-size: .68rem;
      letter-spacing: .13em;
    }

    .site-header__shell {
      width: min(100% - 18px, 1180px);
    }

    .site-header__inner {
      padding: 0 .35rem;
    }

    .site-header__promo-track {
      font-size: .62rem;
    }

    .site-header__brand {
      font-size: 1rem;
    }

    .site-header__logo {
      max-width: min(96px, 28vw);
    }

    .site-footer {
      padding: 28px 0;
    }

    .site-footer__brand {
      font-size: clamp(1.5rem, 7vw, 1.9rem);
      letter-spacing: .14em;
    }

    .site-footer__summary {
      font-size: .84rem;
    }

    .menu-toggle {
      width: 40px;
      height: 40px;
    }

    .product-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: .75rem;
    }

    .hero--tones {
      min-height: calc(100svh - 104px);
    }

    .hero__backdrop {
      font-size: clamp(4rem, 22vw, 7rem);
      white-space: normal;
    }

    .hero__content {
      padding: clamp(3.2rem, 16vw, 5rem) 0;
    }

    .hero__badge {
      margin-bottom: 1.3rem;
      font-size: .62rem;
      letter-spacing: .1em;
      text-align: center;
    }

    .hero__offer {
      font-size: clamp(2.7rem, 15vw, 4.35rem);
      line-height: 1;
    }

    .hero__text {
      margin-bottom: 1.6rem;
      font-size: .95rem;
      line-height: 1.65;
    }

    .hero__buttons {
      width: 100%;
    }

    .hero__buttons .button {
      width: 100%;
    }

    .hero__ticker {
      width: calc(100vw - 28px);
      margin-top: 2rem;
      font-size: .64rem;
      letter-spacing: .14em;
    }

    .hero__stats {
      gap: .9rem;
      margin-top: 2.2rem;
    }

    .hero__stat {
      min-width: 76px;
    }

    .hero__stat-divider {
      display: none;
    }

    .product-card__body,
    .feature-item {
      padding: .8rem;
    }

    .product-card__image {
      aspect-ratio: 1 / 1.08;
    }

    .product-card__title {
      font-size: .82rem;
      line-height: 1.32;
    }

    .product-card__signal {
      font-size: .62rem;
    }

    .product-card__price {
      font-size: 1rem;
    }

    .product-card__delivery,
    .product-card__pricing s {
      font-size: .7rem;
    }

    .product-card__deal {
      font-size: .68rem;
    }

    .product-card__button {
      min-height: 38px;
      font-size: .78rem;
      padding: .55rem .7rem;
    }

    .feature-item {
      min-height: 180px;
    }

    .newsletter form {
      max-width: 100%;
    }

    .field,
    .button,
    .shopify-payment-button__button,
    button.shopify-payment-button__button {
      width: 100%;
    }

    .cart-table,
    .cart-table tbody,
    .cart-table tr,
    .cart-table td {
      display: block;
      width: 100%;
    }

    .cart-table thead {
      display: none;
    }

    .cart-table td {
      padding: .85rem;
    }

    .cart-total {
      justify-content: stretch;
    }

    .cart-total .button {
      width: 100%;
    }
  }

  @media (max-width: 380px) {
    .page-width {
      width: min(100% - 18px, 1180px);
    }

    .site-header__shell {
      width: min(100% - 18px, 1180px);
    }

    .site-header__inner {
      gap: .4rem;
    }

    .site-header__brand {
      letter-spacing: .1em;
    }

    .site-header__logo {
      max-width: min(82px, 26vw);
    }

    .site-header__action--cart {
      max-width: 72px;
    }

    .hero__backdrop {
      font-size: clamp(3.25rem, 19vw, 5.2rem);
    }

    .hero__offer {
      font-size: clamp(2.35rem, 14vw, 3.5rem);
    }

    .product-grid {
      gap: .6rem;
    }

    .product-card__body {
      padding: .68rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
}
.product {
  position: relative;
}

.product::before {
  content: '';
  position: absolute;
  top: 20%;
  right: -120px;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(212,175,55,0.08), transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

  /* ============================================================
   HERO 2 — Full-bleed split layout
   ============================================================ */

  .hero2 {
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(ellipse 65% 50% at 20% 45%,
        color-mix(in srgb, var(--color-accent), transparent 91%) 0%,
        transparent 60%),
      radial-gradient(ellipse 50% 40% at 72% 15%,
        color-mix(in srgb, var(--color-steel), transparent 92%) 0%,
        transparent 55%),
      linear-gradient(165deg,
        var(--color-paper) 0%,
        var(--color-frost) 52%,
        color-mix(in srgb, var(--color-paper), var(--color-frost) 65%) 100%);
    display: flex;
    flex-direction: column;
  }

  /* ── Backdrop watermark ── */
  .hero2__backdrop {
    position: absolute;
    left: 50%;
    top: 44%;
    z-index: 0;
    margin: 0;
    font-family: var(--font-heading-family), Georgia, serif;
    font-size: clamp(4rem, 15vw, 13rem);
    font-weight: 900;
    letter-spacing: .05em;
    line-height: 1;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--color-ink), transparent 94%);
    white-space: nowrap;
    pointer-events: none;
    transform: translate(-50%, -50%);
    animation: backdrop-drift 12s ease-in-out infinite;
    user-select: none;
  }

  /* ── Full-bleed 2-column grid ── */
  .hero2__grid {
    position: relative;
    z-index: 1;
    display: grid;
    /* mobile: single column */
    grid-template-columns: 1fr;
    min-height: calc(100svh - 104px - 80px - 34px);
    /* minus header + stats + ticker */
  }

  @media (min-width: 860px) {
    .hero2__grid {
      /* 55% content, 45% image */
      grid-template-columns: minmax(0, 1.2fr) minmax(280px, 1fr);
      align-items: stretch;
    }
  }

  /* ── LEFT: content wrapper provides page-aligned padding ── */
  .hero2__content-wrap {
    display: flex;
    align-items: center;
    /* on mobile: standard horizontal padding */
    padding: clamp(3rem, 7vw, 5rem) var(--hw-gutter);
  }

  @media (min-width: 860px) {
    .hero2__content-wrap {
      /* left pad aligns content to page-width left edge */
      padding: clamp(3.5rem, 7vw, 6rem) var(--hw-gap) clamp(3rem, 6vw, 5rem) var(--hw-pad-l);
    }
  }

  .hero2__content {
    display: flex;
    flex-direction: column;
    gap: 0;
    max-width: 520px;
    width: 100%;
  }

  /* Eyebrow */
  .hero2__eyebrow {
    margin: 0 0 .9rem;
    color: var(--color-steel);
    font-size: clamp(.62rem, .62rem + .08vw, .72rem);
    font-weight: 800;
    letter-spacing: .22em;
    text-transform: uppercase;
    animation: content-rise .5s ease both;
  }

  /* Heading */
  .hero2__heading {
    margin: 0 0 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0;
    animation: content-rise .65s .05s ease both;
  }

  .hero2__line {
    display: block;
    font-family: var(--font-heading-family), Georgia, serif;
    font-size: clamp(2.4rem, 5.5vw, 4rem);
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -.01em;
    text-transform: uppercase;
  }

  .hero2__line--dark {
    color: color-mix(in srgb, var(--color-ink), #000 8%);
  }

  .hero2__line--blue {
    color: var(--color-accent);
  }

  /* Description */
  .hero2__desc {
    margin: 0 0 1.9rem;
    color: var(--color-steel);
    font-size: clamp(.88rem, 1vw + .4rem, 1rem);
    line-height: 1.7;
    animation: content-rise .7s .1s ease both;
  }

  .hero2__desc p {
    margin: 0;
  }

  /* Buttons */
  .hero2__btns {
    display: flex;
    flex-wrap: wrap;
    gap: .65rem;
    margin-bottom: 2rem;
    animation: content-rise .75s .15s ease both;
  }

  .hero2__btn {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    padding: .75rem 1.45rem;
    font-size: .78rem;
    font-weight: 800;
    letter-spacing: .1em;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    transition: transform .2s ease, background .2s ease, box-shadow .2s ease, border-color .2s ease;
  }

  .hero2__btn--solid {
    background: var(--color-ink);
    color: var(--color-paper);
    border: 1px solid var(--color-ink);
    box-shadow: 0 8px 28px color-mix(in srgb, var(--color-ink), transparent 84%);
  }

  .hero2__btn--solid:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 38px color-mix(in srgb, var(--color-ink), transparent 80%);
  }

  .hero2__btn--outline {
    background: transparent;
    color: var(--color-ink);
    border: 1px solid color-mix(in srgb, var(--color-ink), transparent 68%);
  }

  .hero2__btn--outline:hover {
    transform: translateY(-2px);
    border-color: var(--color-ink);
    background: color-mix(in srgb, var(--color-ink), transparent 97%);
  }

  /* Trust badges */
  .hero2__trust {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    animation: content-rise .8s .2s ease both;
  }

  .hero2__trust-item {
    display: inline-flex;
    align-items: center;
    gap: .38rem;
    color: var(--color-steel);
    font-size: .7rem;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .hero2__trust-item svg {
    flex-shrink: 0;
    opacity: .65;
  }

  /* ── RIGHT: image panel ── */
  .hero2__media {
    position: relative;
    overflow: hidden;
    min-height: 360px;
  }

  /* on desktop bleed image to right viewport edge */
  @media (min-width: 860px) {
    .hero2__media {
      min-height: 0;
    }

    /* subtle fade from left so it blends into the content side */
    .hero2__media::before {
      content: '';
      position: absolute;
      inset: 0;
      width: 38%;
      background: linear-gradient(to right, var(--color-frost) 0%, transparent 100%);
      z-index: 2;
      pointer-events: none;
    }
  }

  .hero2__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 10%;
    animation: content-rise .85s ease both;
  }

  /* Placeholder when no image set */
  .hero2__img-placeholder {
    width: 100%;
    height: 100%;
    min-height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg,
        color-mix(in srgb, var(--color-steel), transparent 60%) 0%,
        color-mix(in srgb, var(--color-ink), transparent 75%) 100%);
  }

  .hero2__img-placeholder svg {
    width: 100%;
    height: 100%;
    min-height: 360px;
  }

  /* ── Stats bar ── */
  .hero2__stats {
    position: relative;
    z-index: 2;
    border-top: 1px solid color-mix(in srgb, var(--color-line), transparent 28%);
    background: color-mix(in srgb, var(--color-frost), var(--color-paper) 50%);
  }

  .hero2__stats-inner {
    display: flex;
    align-items: center;
    width: min(var(--hw-max), calc(100% - var(--hw-gutter) * 2));
    margin: 0 auto;
    padding: 1.35rem 0;
  }

  .hero2__stat {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: .3rem;
  }

  .hero2__stat strong {
    display: block;
    color: var(--color-accent);
    font-family: var(--font-heading-family), Georgia, serif;
    font-size: clamp(1.5rem, 3.2vw, 2.1rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -.01em;
  }

  .hero2__stat span {
    display: block;
    color: var(--color-steel);
    font-size: .66rem;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .hero2__divider {
    width: 1px;
    height: 38px;
    background: color-mix(in srgb, var(--color-ink), transparent 88%);
    flex-shrink: 0;
  }

  /* ── Ticker ── */
  .hero2__ticker {
    position: relative;
    z-index: 2;
    border-top: 1px solid color-mix(in srgb, var(--color-line), transparent 30%);
    background: var(--color-ink);
    overflow: hidden;
    mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
  }

  .hero2__ticker-inner {
    display: flex;
    width: max-content;
    align-items: center;
    gap: 2rem;
    padding: .5rem 0;
    animation: hero-ticker 28s linear infinite;
  }

  .hero2__ticker-inner span {
    white-space: nowrap;
    color: color-mix(in srgb, var(--color-paper), transparent 14%);
    font-size: .64rem;
    font-weight: 800;
    letter-spacing: .2em;
    text-transform: uppercase;
  }

  .hero2__ticker-sep {
    color: var(--color-accent) !important;
    font-size: .8rem !important;
  }

  /* ── Mobile adjustments ── */
  @media (max-width: 859px) {
    .hero2__grid {
      min-height: auto;
    }

    .hero2__media {
      max-height: 52vw;
    }

    .hero2__img,
    .hero2__img-placeholder {
      max-height: 52vw;
    }

    .hero2__line {
      font-size: clamp(2.1rem, 9.5vw, 3rem);
    }

    .hero2__trust {
      flex-direction: column;
      gap: .6rem;
    }

    .hero2__stats-inner {
      padding: .95rem 0;
    }
  }

  @media (max-width: 480px) {
    .hero2__line {
      font-size: clamp(1.9rem, 12vw, 2.6rem);
    }

    .hero2__btns {
      flex-direction: column;
    }

    .hero2__btn {
      width: 100%;
      justify-content: center;
    }

    .hero2__backdrop {
      font-size: clamp(3rem, 20vw, 5.5rem);
    }
  }
  /* ========================================
   WINGSTONE MOBILE DRAWER
======================================== */

.wingstone-menu-overlay {

  position: fixed;

  inset: 0;

  background:
    rgba(15,23,42,0.38);

  backdrop-filter: blur(8px);

  opacity: 0;

  visibility: hidden;

  transition: all 0.4s ease;

  z-index: 998;
}

.wingstone-mobile-menu {

  position: fixed;

  top: 0;
  left: 0;

  width: min(88%, 420px);

  height: 100vh;

  background:
    rgba(255,255,255,0.94);

  backdrop-filter: blur(20px);

  border-right:
    1px solid rgba(15,23,42,0.06);

  transform: translateX(-100%);

  transition:
    transform 0.45s cubic-bezier(.77,0,.18,1);

  z-index: 999;

  display: flex;

  flex-direction: column;

  padding: 26px;
}

/* ACTIVE */

.wingstone-mobile-menu.active {

  transform: translateX(0);
}

.wingstone-menu-overlay.active {

  opacity: 1;

  visibility: visible;
}

/* HEADER */

.wingstone-menu-header {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 50px;
}

.wingstone-menu-close {

  border: none;

  background: transparent;

  font-size: 26px;

  cursor: pointer;

  color: #0f172a;
}

.wingstone-menu-logo {

  font-size: 18px;

  letter-spacing: 4px;

  font-weight: 800;

  color: #0f172a;
}

/* LINKS */

.wingstone-menu-links {

  display: flex;

  flex-direction: column;

  gap: 28px;
}

.wingstone-menu-links a {

  text-decoration: none;

  font-size: 13px;

  letter-spacing: 3px;

  color: #0f172a;

  font-weight: 700;

  transition: all 0.3s ease;
}

.wingstone-menu-links a:hover {

  transform: translateX(6px);

  color: #d4af37;
}

/* HIDE DESKTOP */

@media (min-width: 990px) {

  .wingstone-mobile-menu,
  .wingstone-menu-overlay {

    display: none;
  }

}
```

## `assets/cart-drawer.js`

```javascript
/**
 * WINGSTONE — cart-drawer.js
 * Premium AJAX Cart Drawer with shipping progress, glass UI, and gold accents
 */

class CartDrawer {
  constructor() {
    this.drawer   = document.querySelector('[data-cart-drawer]');
    this.backdrop = document.querySelector('[data-cart-drawer-backdrop]');
    this.closeButtons = document.querySelectorAll('[data-cart-drawer-close]');
    this.toggles  = document.querySelectorAll('[data-cart-drawer-toggle]');
    this.content  = document.querySelector('[data-cart-drawer-content]');
    this.badge    = document.querySelector('.site-header__badge');
    this.cartCount = document.querySelector('[data-cart-count]');
    this.shipFill  = document.querySelector('[data-ship-fill]');
    this.shipLabel = document.querySelector('[data-ship-label]');
    this.shipRemaining = document.querySelector('[data-ship-remaining]');
    this.cartToast = document.getElementById('cartToast');
    this.cartToastMessage = document.getElementById('cartToastMessage');

    /* Configurable free shipping threshold in paise/cents (₹999) */
    this.freeShipThreshold = (window.WINGSTONE && window.WINGSTONE.freeShippingThreshold) || 99900;

    this.init();
  }

  init() {
    /* Toggle (open) */
    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    });

    /* Close buttons */
    this.closeButtons.forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });

    /* Backdrop click */
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }

    /* Escape key */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.drawer && this.drawer.classList.contains('is-open')) {
        this.close();
      }
    });

    /* Delegated click: qty adjust & remove */
    if (this.content) {
      this.content.addEventListener('click', (e) => {
        const adjustBtn = e.target.closest('[data-cart-qty-adjust]');
        const removeBtn = e.target.closest('[data-cart-remove]');

        if (adjustBtn) {
          const key = adjustBtn.dataset.itemKey;
          const currentQty = parseInt(adjustBtn.dataset.itemQty, 10);
          const adjustment = parseInt(adjustBtn.dataset.cartQtyAdjust, 10);
          this.updateQuantity(key, currentQty + adjustment);
        }

        if (removeBtn) {
          e.preventDefault();
          const key = removeBtn.dataset.itemKey;
          this.updateQuantity(key, 0);
        }
      });

      /* Direct qty input change */
      this.content.addEventListener('change', (e) => {
        const input = e.target.closest('[data-cart-qty-input]');
        if (!input) return;
        const key = input.dataset.itemKey;
        const qty = Math.max(0, parseInt(input.value, 10) || 0);
        this.updateQuantity(key, qty);
      });
    }

    /* Listen for external add-to-cart events (from product forms) */
    document.addEventListener('cart:add', (e) => {
      if (e.detail && e.detail.item) {
        this.showToast(`${e.detail.item.title} added to cart`);
        this.fetchCart();
      }
    });
  }

  open() {
    if (!this.drawer) return;
    this.drawer.removeAttribute('hidden');
    this.drawer.setAttribute('aria-hidden', 'false');
    if (this.backdrop) this.backdrop.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    /* Animate in on next tick */
    setTimeout(() => {
      this.drawer.classList.add('is-open');
      if (this.backdrop) this.backdrop.classList.add('is-open');
    }, 12);

    this.fetchCart();
  }

  close() {
    if (!this.drawer) return;
    this.drawer.classList.remove('is-open');
    if (this.backdrop) this.backdrop.classList.remove('is-open');
    document.body.style.overflow = '';

    setTimeout(() => {
      this.drawer.setAttribute('hidden', 'true');
      this.drawer.setAttribute('aria-hidden', 'true');
      if (this.backdrop) this.backdrop.setAttribute('hidden', 'true');
    }, 320);
  }

  fetchCart() {
    this.renderLoading();
    fetch('/cart.js')
      .then(r => r.json())
      .then(cart => {
        this.renderCart(cart);
        this.updateBadge(cart.item_count);
        this.updateShippingProgress(cart.total_price);
      })
      .catch(err => {
        console.error('CartDrawer: fetch error', err);
        if (this.content) {
          this.content.innerHTML = `<p class="cart-drawer__error">Failed to load cart. Please refresh.</p>`;
        }
      });
  }

  addProduct(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.setAttribute('disabled', 'disabled');
      submitBtn.dataset.originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Adding…</span>';
    }

    const formData = new FormData(form);

    fetch('/cart/add.js', { method: 'POST', body: formData })
      .then(r => {
        if (!r.ok) throw new Error('Cart add failed');
        return r.json();
      })
      .then(item => {
        this.showToast(`${item.title} added to cart`);
        this.fetchCart();
      })
      .catch(err => {
        console.error('CartDrawer: add error', err);
        this.showToast('Could not add item. Please try again.');
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.removeAttribute('disabled');
          submitBtn.innerHTML = submitBtn.dataset.originalText || 'Add to cart';
        }
      });
  }

  updateQuantity(key, qty) {
    this.renderLoading();
    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ id: key, quantity: qty })
    })
      .then(r => r.json())
      .then(cart => {
        this.renderCart(cart);
        this.updateBadge(cart.item_count);
        this.updateShippingProgress(cart.total_price);
      })
      .catch(err => console.error('CartDrawer: update error', err));
  }

  updateBadge(count) {
    /* Header badge */
    document.querySelectorAll('.site-header__badge, [data-cart-badge]').forEach(badge => {
      if (count > 0) {
        badge.textContent = count;
        badge.style.display = '';
      } else {
        badge.style.display = 'none';
      }
    });

    /* Drawer header count */
    if (this.cartCount) {
      this.cartCount.textContent = count > 0 ? `(${count})` : '';
    }

    /* If no badge exists in header, create one */
    const cartToggle = document.querySelector('[data-cart-drawer-toggle]');
    if (count > 0 && cartToggle && !cartToggle.querySelector('.site-header__badge')) {
      const badge = document.createElement('span');
      badge.className = 'site-header__badge';
      badge.textContent = count;
      cartToggle.appendChild(badge);
    }
  }

  updateShippingProgress(totalPaise) {
    if (!this.shipFill && !this.shipLabel) return;
    const threshold = this.freeShipThreshold;
    const pct = Math.min(100, Math.round((totalPaise / threshold) * 100));
    const remaining = threshold - totalPaise;

    if (this.shipFill) {
      this.shipFill.style.width = `${pct}%`;
    }

    if (this.shipLabel) {
      if (totalPaise >= threshold) {
        this.shipLabel.innerHTML = `🎉 You've unlocked <strong>FREE SHIPPING</strong>`;
        this.shipLabel.classList.add('is-free');
      } else {
        this.shipLabel.classList.remove('is-free');
        if (this.shipRemaining) {
          this.shipRemaining.textContent = this.formatMoney(remaining);
        } else {
          this.shipLabel.innerHTML = `Add <strong>${this.formatMoney(remaining)}</strong> more for free shipping`;
        }
      }
    }
  }

  renderLoading() {
    if (!this.content) return;
    this.content.innerHTML = `
      <div class="cart-drawer__loading-spinner">
        <span></span>
      </div>
    `;
  }

  renderCart(cart) {
    if (!this.content) return;

    if (cart.item_count === 0) {
      this.content.innerHTML = `
        <div class="cart-drawer__empty">
          <div class="cart-drawer__empty-icon" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <path d="M3 6h18M16 10a4 4 0 01-8 0"/>
            </svg>
          </div>
          <p class="cart-drawer__empty-text">Your cart is empty.<br>Start exploring our collection.</p>
          <button class="button button--gold" type="button" data-cart-drawer-close style="font-size:.72rem;padding:.7rem 1.5rem;min-height:44px;border-radius:2px;">
            Continue Shopping
          </button>
        </div>
      `;
      return;
    }

    /* Build items HTML */
    let itemsHtml = '<div class="cart-drawer__items">';

    cart.items.forEach(item => {
      const price    = this.formatMoney(item.final_line_price);
      const compare  = item.original_line_price > item.final_line_price ? this.formatMoney(item.original_line_price) : '';
      const imgSrc   = item.image || '';
      const hasVariant = item.variant_title && item.variant_title !== 'Default Title';

      itemsHtml += `
        <div class="cart-drawer__item" data-item-key="${item.key}">
          <div class="cart-drawer__item-image">
            ${imgSrc
              ? `<a href="${item.url}"><img src="${imgSrc}" alt="${this.escapeHtml(item.product_title)}" loading="lazy"></a>`
              : ''
            }
          </div>
          <div class="cart-drawer__item-details">
            <h4 class="cart-drawer__item-title">
              <a href="${item.url}">${this.escapeHtml(item.product_title)}</a>
            </h4>
            ${hasVariant ? `<p class="cart-drawer__item-variant">${this.escapeHtml(item.variant_title)}</p>` : ''}

            <div class="cart-drawer__item-meta">
              <div class="cart-drawer__qty-selector">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  data-cart-qty-adjust="-1"
                  data-item-key="${item.key}"
                  data-item-qty="${item.quantity}"
                >−</button>
                <input
                  type="number"
                  value="${item.quantity}"
                  min="0"
                  max="99"
                  aria-label="Quantity"
                  data-cart-qty-input
                  data-item-key="${item.key}"
                >
                <button
                  type="button"
                  aria-label="Increase quantity"
                  data-cart-qty-adjust="1"
                  data-item-key="${item.key}"
                  data-item-qty="${item.quantity}"
                >+</button>
              </div>

              <div class="cart-drawer__item-price-wrap">
                ${compare ? `<s class="cart-drawer__item-price-compare">${compare}</s>` : ''}
                <span class="cart-drawer__item-price">${price}</span>
              </div>
            </div>

            <button
              class="cart-drawer__item-remove"
              type="button"
              aria-label="Remove ${this.escapeHtml(item.product_title)} from cart"
              data-cart-remove
              data-item-key="${item.key}"
            >Remove</button>
          </div>
        </div>
      `;
    });

    itemsHtml += '</div>';

    /* Footer */
    const subtotal = this.formatMoney(cart.total_price);
    const footerHtml = `
      <div class="cart-drawer__footer">
        <div class="cart-drawer__totals">
          <span class="cart-drawer__totals-label">Subtotal</span>
          <span class="cart-drawer__totals-value">${subtotal}</span>
        </div>
        <p class="cart-drawer__tax-note">Shipping &amp; taxes calculated at checkout</p>
        <form action="/checkout" method="post" class="cart-drawer__checkout-form">
          <button type="submit" name="checkout">
            Proceed to Checkout
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </form>
        <a href="/cart" class="cart-drawer__view-cart">View full cart</a>
      </div>
    `;

    this.content.innerHTML = itemsHtml + footerHtml;
  }

  formatMoney(cents) {
    if (window.Shopify && window.Shopify.formatMoney) {
      return window.Shopify.formatMoney(cents, window.Shopify.money_format || '₹{{amount}}');
    }
    /* Fallback INR formatter */
    const whole = Math.floor(cents / 100);
    const paise = (cents % 100).toString().padStart(2, '0');
    return `₹${whole.toLocaleString('en-IN')}.${paise}`;
  }

  escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str || '';
    return d.innerHTML;
  }

  showToast(message) {
    if (!this.cartToast || !this.cartToastMessage) return;
    this.cartToastMessage.textContent = message;
    this.cartToast.removeAttribute('hidden');
    this.cartToast.classList.add('is-active');

    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      this.cartToast.classList.remove('is-active');
      setTimeout(() => this.cartToast.setAttribute('hidden', 'true'), 300);
    }, 3500);
  }
}

/* ── Cart page view-cart link style ── */
const viewCartLinkCss = `
  .cart-drawer__view-cart {
    display: block;
    text-align: center;
    font-size: .7rem;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--color-steel, #455373);
    text-decoration: none;
    margin-top: .5rem;
    transition: color .15s ease;
  }
  .cart-drawer__view-cart:hover { color: var(--color-ink, #04102f); }
`;

const styleEl = document.createElement('style');
styleEl.textContent = viewCartLinkCss;
document.head.appendChild(styleEl);

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  window.cartDrawer = new CartDrawer();
});
```

## `assets/cart-notification.js`

```javascript
class CartNotification extends HTMLElement {
  constructor() {
    super();

    this.notification = document.getElementById('cart-notification');
    this.header = document.querySelector('sticky-header');
    this.onBodyClick = this.handleBodyClick.bind(this);

    this.notification.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );
  }

  open() {
    this.notification.classList.add('animate', 'active');

    this.notification.addEventListener(
      'transitionend',
      () => {
        this.notification.focus();
        trapFocus(this.notification);
      },
      { once: true }
    );

    document.body.addEventListener('click', this.onBodyClick);
  }

  close() {
    this.notification.classList.remove('active');
    document.body.removeEventListener('click', this.onBodyClick);

    removeTrapFocus(this.activeElement);
  }

  renderContents(parsedState) {
    this.cartItemKey = parsedState.key;
    this.getSectionsToRender().forEach((section) => {
      document.getElementById(section.id).innerHTML = this.getSectionInnerHTML(
        parsedState.sections[section.id],
        section.selector
      );
    });

    if (this.header) this.header.reveal();
    this.open();
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-notification-product',
        selector: `[id="cart-notification-product-${this.cartItemKey}"]`,
      },
      {
        id: 'cart-notification-button',
      },
      {
        id: 'cart-icon-bubble',
      },
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }

  handleBodyClick(evt) {
    const target = evt.target;
    if (target !== this.notification && !target.closest('cart-notification')) {
      const disclosure = target.closest('details-disclosure, header-menu');
      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
      this.close();
    }
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-notification', CartNotification);
```

## `assets/cart.js`

```javascript
class CartRemoveButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', (event) => {
      event.preventDefault();
      const cartItems = this.closest('cart-items') || this.closest('cart-drawer-items');
      cartItems.updateQuantity(this.dataset.index, 0, event);
    });
  }
}

customElements.define('cart-remove-button', CartRemoveButton);

class CartItems extends HTMLElement {
  constructor() {
    super();
    this.lineItemStatusElement =
      document.getElementById('shopping-cart-line-item-status') || document.getElementById('CartDrawer-LineItemStatus');

    const debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, ON_CHANGE_DEBOUNCE_TIMER);

    this.addEventListener('change', debouncedOnChange.bind(this));
  }

  cartUpdateUnsubscriber = undefined;

  connectedCallback() {
    this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
      if (event.source === 'cart-items') {
        return;
      }
      return this.onCartUpdate();
    });
  }

  disconnectedCallback() {
    if (this.cartUpdateUnsubscriber) {
      this.cartUpdateUnsubscriber();
    }
  }

  resetQuantityInput(id) {
    const input = this.querySelector(`#Quantity-${id}`);
    input.value = input.getAttribute('value');
    this.isEnterPressed = false;
  }

  setValidity(event, index, message) {
    event.target.setCustomValidity(message);
    event.target.reportValidity();
    this.resetQuantityInput(index);
    event.target.select();
  }

  validateQuantity(event) {
    const inputValue = parseInt(event.target.value);
    const index = event.target.dataset.index;
    let message = '';

    if (inputValue < event.target.dataset.min) {
      message = window.quickOrderListStrings.min_error.replace('[min]', event.target.dataset.min);
    } else if (inputValue > parseInt(event.target.max)) {
      message = window.quickOrderListStrings.max_error.replace('[max]', event.target.max);
    } else if (inputValue % parseInt(event.target.step) !== 0) {
      message = window.quickOrderListStrings.step_error.replace('[step]', event.target.step);
    }

    if (message) {
      this.setValidity(event, index, message);
    } else {
      event.target.setCustomValidity('');
      event.target.reportValidity();
      this.updateQuantity(
        index,
        inputValue,
        event,
        document.activeElement.getAttribute('name'),
        event.target.dataset.quantityVariantId
      );
    }
  }

  onChange(event) {
    this.validateQuantity(event);
  }

  onCartUpdate() {
    if (this.tagName === 'CART-DRAWER-ITEMS') {
      return fetch(`${routes.cart_url}?section_id=cart-drawer`)
        .then((response) => response.text())
        .then((responseText) => {
          const html = new DOMParser().parseFromString(responseText, 'text/html');
          const selectors = ['cart-drawer-items', '.cart-drawer__footer'];
          for (const selector of selectors) {
            const targetElement = document.querySelector(selector);
            const sourceElement = html.querySelector(selector);
            if (targetElement && sourceElement) {
              targetElement.replaceWith(sourceElement);
            }
          }
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      return fetch(`${routes.cart_url}?section_id=main-cart-items`)
        .then((response) => response.text())
        .then((responseText) => {
          const html = new DOMParser().parseFromString(responseText, 'text/html');
          const sourceQty = html.querySelector('cart-items');
          this.innerHTML = sourceQty.innerHTML;
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }

  getSectionsToRender() {
    return [
      {
        id: 'main-cart-items',
        section: document.getElementById('main-cart-items').dataset.id,
        selector: '.js-contents',
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section',
      },
      {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section',
      },
      {
        id: 'main-cart-footer',
        section: document.getElementById('main-cart-footer').dataset.id,
        selector: '.js-contents',
      },
    ];
  }

  updateQuantity(line, quantity, event, name, variantId) {
    const eventTarget = event.currentTarget instanceof CartRemoveButton ? 'clear' : 'change';
    const cartPerformanceUpdateMarker = CartPerformance.createStartingMarker(`${eventTarget}:user-action`);

    this.enableLoading(line);

    const body = JSON.stringify({
      line,
      quantity,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname,
    });

    fetch(`${routes.cart_change_url}`, { ...fetchConfig(), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);

        CartPerformance.measure(`${eventTarget}:paint-updated-sections`, () => {
          const quantityElement =
            document.getElementById(`Quantity-${line}`) || document.getElementById(`Drawer-quantity-${line}`);
          const items = document.querySelectorAll('.cart-item');

          if (parsedState.errors) {
            quantityElement.value = quantityElement.getAttribute('value');
            this.updateLiveRegions(line, parsedState.errors);
            return;
          }

          this.classList.toggle('is-empty', parsedState.item_count === 0);
          const cartDrawerWrapper = document.querySelector('cart-drawer');
          const cartFooter = document.getElementById('main-cart-footer');

          if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
          if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);

          this.getSectionsToRender().forEach((section) => {
            const elementToReplace =
              document.getElementById(section.id).querySelector(section.selector) ||
              document.getElementById(section.id);
            elementToReplace.innerHTML = this.getSectionInnerHTML(
              parsedState.sections[section.section],
              section.selector
            );
          });
          const updatedValue = parsedState.items[line - 1] ? parsedState.items[line - 1].quantity : undefined;
          let message = '';
          if (items.length === parsedState.items.length && updatedValue !== parseInt(quantityElement.value)) {
            if (typeof updatedValue === 'undefined') {
              message = window.cartStrings.error;
            } else {
              message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
            }
          }
          this.updateLiveRegions(line, message);

          const lineItem =
            document.getElementById(`CartItem-${line}`) || document.getElementById(`CartDrawer-Item-${line}`);
          if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
            cartDrawerWrapper
              ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name="${name}"]`))
              : lineItem.querySelector(`[name="${name}"]`).focus();
          } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
            trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'));
          } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
            trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'));
          }
        });

        publish(PUB_SUB_EVENTS.cartUpdate, { source: 'cart-items', cartData: parsedState, variantId: variantId });
      })
      .catch(() => {
        this.querySelectorAll('.loading__spinner').forEach((overlay) => overlay.classList.add('hidden'));
        const errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');
        errors.textContent = window.cartStrings.error;
      })
      .finally(() => {
        this.disableLoading(line);
        CartPerformance.measureFromMarker(`${eventTarget}:user-action`, cartPerformanceUpdateMarker);
      });
  }

  updateLiveRegions(line, message) {
    const lineItemError =
      document.getElementById(`Line-item-error-${line}`) || document.getElementById(`CartDrawer-LineItemError-${line}`);
    if (lineItemError) lineItemError.querySelector('.cart-item__error-text').textContent = message;

    this.lineItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus =
      document.getElementById('cart-live-region-text') || document.getElementById('CartDrawer-LiveRegionText');
    cartStatus.setAttribute('aria-hidden', false);

    setTimeout(() => {
      cartStatus.setAttribute('aria-hidden', true);
    }, 1000);
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }

  enableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.add('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading__spinner`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading__spinner`);

    [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) => overlay.classList.remove('hidden'));

    document.activeElement.blur();
    this.lineItemStatusElement.setAttribute('aria-hidden', false);
  }

  disableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.remove('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading__spinner`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading__spinner`);

    cartItemElements.forEach((overlay) => overlay.classList.add('hidden'));
    cartDrawerItemElements.forEach((overlay) => overlay.classList.add('hidden'));
  }
}

customElements.define('cart-items', CartItems);

if (!customElements.get('cart-note')) {
  customElements.define(
    'cart-note',
    class CartNote extends HTMLElement {
      constructor() {
        super();

        this.addEventListener(
          'input',
          debounce((event) => {
            const body = JSON.stringify({ note: event.target.value });
            fetch(`${routes.cart_update_url}`, { ...fetchConfig(), ...{ body } }).then(() =>
              CartPerformance.measureFromEvent('note-update:user-action', event)
            );
          }, ON_CHANGE_DEBOUNCE_TIMER)
        );
      }
    }
  );
}
```

## `assets/component-card.css`

```css
.collection-card { min-width: 0; }
.collection-card__link { display: block; color: inherit; text-decoration: none; }
.collection-card__media { position: relative; }
.collection-card__image,
.collection-card__placeholder { display: block; width: 100%; height: 100%; object-fit: cover; }
```

## `assets/component-collection-hero.css`

```css
.collection-hero {
  padding: 1.5rem 0 0;
}

.collection-hero__inner {
  display: grid;
  gap: 1.5rem;
  align-items: center;
}

.collection-hero__description {
  margin-top: .75rem;
  max-width: 70ch;
}

.collection-hero__image-container {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 14px 30px rgba(10, 18, 30, .08);
}

.collection-hero__image-container img {
  display: block;
  width: 100%;
  height: auto;
}

@media (min-width: 750px) {
  .collection-hero__inner {
    grid-template-columns: minmax(0, 1.3fr) minmax(280px, .9fr);
  }
}
```

## `assets/component-facets.css`

```css
.facets {
  display: block;
  margin-top: 1.5rem;
}

.collection-toolbar--filters {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
  margin-bottom: 1rem;
}

.sorting {
  display: flex;
  align-items: center;
  gap: .75rem;
}

.sorting__select,
.field__input {
  min-height: 44px;
}

.active-facets {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin: 0 0 1rem;
}

.active-facets__button,
.active-facets__button-remove {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: .45rem .8rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 84%);
  background: var(--color-paper);
  color: var(--color-ink);
  text-decoration: none;
}

.facets__disclosure-vertical {
  border-top: 1px solid color-mix(in srgb, var(--color-ink), transparent 88%);
  padding-top: 1rem;
  margin-top: 1rem;
}

.facets__summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.facets__list {
  display: grid;
  gap: .5rem;
  margin-top: .75rem;
}

/* Reset list markers for facet lists (checkbox lists) */
.facets__list,
.list-unstyled {
  list-style: none;
  padding: 0;
  margin: 0;
}
.facets__list .facets__item {
  margin-left: 0;
}

.facets__label {
  display: flex;
  gap: .75rem;
  align-items: center;
}

.facets__price {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .75rem;
  margin-top: .75rem;
}

@media (max-width: 749px) {
  .collection-toolbar--filters {
    flex-direction: column;
    align-items: stretch;
  }

  .facets__price {
    grid-template-columns: 1fr;
  }
}
```

## `assets/component-pagination.css`

```css
.pagination-wrapper {
  margin-top: 2rem;
}

.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: .75rem;
}

.pagination__item,
.pagination__current {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0 .9rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 84%);
  background: var(--color-paper);
}

.pagination__item {
  text-decoration: none;
  color: inherit;
}
```

## `assets/components.css`

```css
/* ============================================================
   WINGSTONE — components.css
   Hero video, product card (editorial), buttons, new sections
   ============================================================ */

/* ── Hero Video Section ── */
/* ========================================
   WINGSTONE PREMIUM PRODUCT SECTION
======================================== */

.wingstone-product-actions {
  margin-top: 40px;
}

.wingstone-label {
  display: block;
  margin-bottom: 14px;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #6b7280;
  font-weight: 600;
}

.wingstone-quantity-box {
  display: flex;
  align-items: center;
  width: 180px;
  height: 62px;
  background: rgba(255,255,255,0.82);
  border: 1px solid rgba(15,23,42,0.08);
  border-radius: 22px;
  overflow: hidden;
  backdrop-filter: blur(12px);
  box-shadow:
    0 10px 30px rgba(15,23,42,0.05),
    inset 0 1px 0 rgba(255,255,255,0.7);
}

.qty-btn {
  width: 60px;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #111827;
}

.qty-btn:hover {
  background: rgba(15,23,42,0.04);
}

.wingstone-quantity-box input {
  width: 60px;
  border: none;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  background: transparent;
  outline: none;
  color: #111827;
}

.wingstone-buttons {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.wingstone-cart-btn {
  position: relative;
  height: 74px;
  border: none;
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;
  background:
    radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 35%),
    linear-gradient(135deg, var(--color-ink, #04102f) 0%, color-mix(in srgb, var(--color-ink, #04102f), var(--color-steel, #455373) 18%) 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.45s ease;
  box-shadow:
    0 20px 40px rgba(15,23,42,0.18),
    inset 0 1px 0 rgba(255,255,255,0.08);
}

.wingstone-cart-btn:hover {
  transform: translateY(-3px);
  box-shadow:
    0 25px 50px rgba(15,23,42,0.24),
    inset 0 1px 0 rgba(255,255,255,0.1);
}

.btn-icon {
  opacity: 0.8;
  font-size: 16px;
}

.btn-arrow {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.wingstone-cart-btn:hover .btn-arrow {
  transform: translateX(5px);
}

.shopify-payment-button__button {
  height: 74px !important;
  border-radius: 28px !important;
  background:
    linear-gradient(135deg, #d4af37 0%, #f3d58a 50%, #c89b2f 100%) !important;
  color: #111827 !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  letter-spacing: 3px !important;
  text-transform: uppercase !important;
  transition: all 0.45s ease !important;
  box-shadow:
    0 18px 40px rgba(212,175,55,0.24) !important;
}

.shopify-payment-button__button:hover {
  transform: translateY(-3px);
  filter: brightness(1.03);
}

.wingstone-benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-top: 34px;
}

.benefit-card {
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(15,23,42,0.08);
  border-radius: 26px;
  padding: 28px 20px;
  text-align: center;
  backdrop-filter: blur(14px);
  transition: all 0.4s ease;
  box-shadow:
    0 10px 25px rgba(15,23,42,0.04),
    inset 0 1px 0 rgba(255,255,255,0.8);
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 18px 40px rgba(15,23,42,0.08);
}

.benefit-icon {
  font-size: 28px;
  margin-bottom: 18px;
  color: #d4af37;
}

.benefit-card h4 {
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #111827;
}

.benefit-card p {
  font-size: 13px;
  line-height: 1.7;
  color: #6b7280;
}

.wingstone-mini-trust {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  font-size: 11px;
  letter-spacing: 4px;
  color: #6b7280;
  text-transform: uppercase;
}

/* MOBILE */

@media (max-width: 768px) {

  .wingstone-benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .wingstone-cart-btn,
  .shopify-payment-button__button {
    height: 64px !important;
    border-radius: 22px !important;
    font-size: 14px !important;
    padding: 0 20px !important;
  }

  .benefit-card {
    padding: 22px 16px;
  }

  .wingstone-mini-trust {
    gap: 10px;
    font-size: 10px;
    letter-spacing: 2px;
  }

}
.hero-video {
  position: relative;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  background: var(--color-paper, #f5f5f3);
  display: flex;
  align-items: center;
}

.hero-video__media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
}

/* Gradient overlay — strong left, fades right */
.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      105deg,
      color-mix(in srgb, var(--color-paper, #f5f5f3), transparent 8%) 0%,
      color-mix(in srgb, var(--color-paper, #f5f5f3), transparent 55%) 45%,
      transparent 75%
    );
  z-index: 1;
}

/* Bottom vignette */
.hero-overlay::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 35%;
  background: linear-gradient(to top, var(--color-paper, #f5f5f3) 0%, transparent 100%);
}

/* Hero content positioning */
.hero-video .hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 0 max(2.5rem, calc((100vw - 1240px) / 2 + 2.5rem));
  max-width: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
}

.hero-subtitle {
  margin: 0 0 1.1rem;
  color: var(--color-steel, #6b7280);
  font-size: clamp(.62rem, .7vw, .78rem);
  font-weight: 800;
  letter-spacing: .24em;
  text-transform: uppercase;
}

.hero-title {
  margin: 0 0 1.5rem;
  font-family: var(--font-heading-family, Georgia, serif);
  font-size: clamp(3.5rem, 7.5vw, 8rem);
  font-weight: 600;
  line-height: .92;
  letter-spacing: -.04em;
  color: var(--color-ink, #111827);
}

.hero-title span {
  color: var(--color-steel, #94a3b8);
}

.hero-description {
  margin: 0 0 2.2rem;
  max-width: 440px;
  color: var(--color-steel, #4b5563);
  font-size: clamp(.9rem, 1.1vw, 1.1rem);
  line-height: 1.65;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: .85rem;
}

/* ── Luxury Buttons ── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: .65rem;
  background: var(--color-ink, #0f172a);
  color: var(--color-paper, #f5f5f3);
  padding: .9rem 2rem;
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid var(--color-ink, #0f172a);
  border-radius: 2px;
  transition:
    background 300ms var(--ease-luxury, ease),
    color 300ms var(--ease-luxury, ease),
    transform 300ms var(--ease-luxury, ease),
    box-shadow 300ms var(--ease-luxury, ease);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px color-mix(in srgb, var(--color-ink, #0f172a), transparent 78%);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: .65rem;
  background: transparent;
  color: var(--color-ink, #111827);
  padding: .9rem 2rem;
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid color-mix(in srgb, var(--color-ink, #111827), transparent 72%);
  border-radius: 2px;
  transition:
    border-color 300ms var(--ease-luxury, ease),
    background 300ms var(--ease-luxury, ease),
    transform 300ms var(--ease-luxury, ease);
}

.btn-secondary:hover {
  border-color: var(--color-ink, #111827);
  background: color-mix(in srgb, var(--color-ink, #111827), transparent 96%);
  transform: translateY(-2px);
}

/* ── Editorial Product Card ── */
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--color-paper, #f9f9ff);
  border: 1px solid color-mix(in srgb, var(--color-ink, #04102f), transparent 90%);
  border-radius: 4px;
  overflow: hidden;
  padding: 12px;
  box-shadow: 0 8px 24px color-mix(in srgb, var(--color-ink, #04102f), transparent 93%);
  transition:
    transform 380ms cubic-bezier(.25,.46,.45,.94),
    box-shadow 380ms cubic-bezier(.25,.46,.45,.94),
    border-color 380ms ease;
}

.product-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent, #cba72f);
  border-radius: 0;
  transition: width 380ms cubic-bezier(.25,.46,.45,.94);
}

.product-card:hover {
  transform: translateY(-7px);
  box-shadow:
    0 4px 8px color-mix(in srgb, var(--color-ink, #04102f), transparent 94%),
    0 20px 48px color-mix(in srgb, var(--color-ink, #04102f), transparent 88%);
  border-color: color-mix(in srgb, var(--color-accent, #cba72f), transparent 65%);
}

.product-card:hover::after {
  width: 100%;
}

.product-card__image {
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
  aspect-ratio: 3 / 4;
  border-radius: 8px;
}

/* Primary image */
.product-card__image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain !important;
  padding: 10%;
  box-sizing: border-box;
  mix-blend-mode: multiply;
  opacity: 1;
  transition: transform 700ms var(--ease-luxury, ease), opacity 350ms ease;
}

.product-card__image img:first-child {
  z-index: 1;
}

.product-card__image .hover-image {
  z-index: 2;
}

/* Hover / second image */
.product-card__image .hover-image {
  opacity: 0;
  transform: scale(1.02);
  transition: opacity 450ms var(--ease-luxury, ease), transform 700ms var(--ease-luxury, ease);
}

.product-card:hover .product-card__image img:first-child {
  opacity: 0;
  transform: scale(1.02);
}

.product-card:hover .hover-image {
  opacity: 1;
  transform: scale(1);
}

/* Floating wishlist button */
.product-card__wishlist-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 5;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 200ms ease, background-color 200ms ease;
}

.product-card__wishlist-btn svg {
  width: 16px;
  height: 16px;
  color: #64748b;
  fill: none;
  transition: transform 200ms ease, fill 200ms ease, color 200ms ease;
}

.product-card__wishlist-btn:hover {
  transform: scale(1.08);
}

.product-card__wishlist-btn:hover svg,
.product-card__wishlist-btn.active svg {
  color: var(--color-accent, #cba72f);
  fill: var(--color-accent, #cba72f);
}

/* Floating discount badge */
.product-card__discount-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 5;
  background: #ef4444;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}

/* Product info */
.product-card__info {
  padding: 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex-grow: 1;
}

.product-card__badges {
  display: flex;
  gap: .4rem;
  margin-bottom: .4rem;
}

.product-card__badge {
  display: inline-block;
  font-size: .6rem;
  font-weight: 800;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--color-steel, #6b7280);
}

.product-card__title {
  margin: 0;
  font-size: .9rem;
  font-weight: 600;
  letter-spacing: .06em;
  color: var(--color-ink, #111827);
  line-height: 1.3;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.6em;
}

.product-card__meta {
  font-size: .72rem;
  color: var(--color-steel, #6b7280);
  letter-spacing: .06em;
}

.product-card__vendor {
  font-variant: all-small-caps;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
}



.product-card__variants {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
  padding-top: 8px;
}

.product-card__swatches {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

.product-card__swatch--color {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease;
}

.product-card__swatch--color:hover {
  transform: scale(1.15);
  border-color: var(--color-ink, #111827);
}

.product-card__swatch--size {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 20px;
  padding: 0 4px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 10px;
  font-weight: 500;
  color: var(--color-steel, #6b7280);
  background: #fafafa;
  cursor: pointer;
  transition: all 0.15s ease;
}

.product-card__swatch--size:hover {
  border-color: var(--color-ink, #111827);
  color: var(--color-ink, #111827);
}

.product-card__swatch-more {
  font-size: 10px;
  font-weight: 600;
  color: var(--color-steel, #6b7280);
}

.product-card__form {
  margin-top: auto;
  width: 100%;
}

.product-card__quick-add {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  background: var(--color-ink, #0f172a);
  color: #ffffff;
  border: 1px solid var(--color-ink, #0f172a);
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
}

.product-card__quick-add:hover:not(:disabled) {
  background: transparent;
  color: var(--color-ink, #0f172a);
}

.product-card__quick-add:disabled {
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
  color: var(--color-steel, #94a3b8);
  cursor: not-allowed;
}

.product-card__quick-add svg {
  width: 12px;
  height: 12px;
  transition: transform 0.2s ease;
}

.product-card__quick-add:hover svg {
  transform: translateX(2px);
}

.product-card__pricing {
  display: flex;
  align-items: baseline;
  gap: .5rem;
  margin-top: .2rem;
}

.product-card__price {
  font-size: .9rem;
  font-weight: 700;
  color: var(--color-ink, #111827);
}

.product-card__price--compare {
  font-size: .78rem;
  color: var(--color-steel, #6b7280);
  text-decoration: line-through;
}

.product-card__price--sale {
  font-size: .98rem;
  font-weight: 800;
  color: var(--color-ink, #0f172a);
}

/* ── Cinematic Banner ── */
.cinematic-banner {
  position: relative;
  overflow: hidden;
  height: clamp(460px, 65vh, 820px);
  display: flex;
  align-items: flex-end;
}

.cinematic-banner__media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
}

.cinematic-banner__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 12, 18, .85) 0%,
    rgba(10, 12, 18, .2) 55%,
    transparent 100%
  );
  z-index: 1;
}

.cinematic-banner__content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 3rem max(2.5rem, calc((100vw - 1240px) / 2 + 2.5rem));
}

.cinematic-banner__eyebrow {
  margin: 0 0 .8rem;
  color: rgba(255,255,255,.5);
  font-size: .66rem;
  font-weight: 800;
  letter-spacing: .22em;
  text-transform: uppercase;
}

.cinematic-banner__heading {
  margin: 0 0 1.1rem;
  font-family: var(--font-heading-family, Georgia, serif);
  font-size: clamp(2.4rem, 5.5vw, 5rem);
  font-weight: 600;
  line-height: .95;
  letter-spacing: -.03em;
  color: #fff;
}

.cinematic-banner__text {
  margin: 0 0 1.8rem;
  max-width: 420px;
  color: rgba(255,255,255,.65);
  font-size: .95rem;
  line-height: 1.65;
}

/* ── Tech Specs Section ── */
.tech-specs {
  padding: clamp(4rem, 8vw, 7rem) 0;
  background: color-mix(in srgb, var(--color-frost, #f3f4f6), white 4%);
  overflow: hidden;
}

.tech-specs__header {
  padding: 0 max(2.5rem, calc((100vw - 1240px) / 2 + 2.5rem));
  margin-bottom: 3rem;
}

.tech-specs__eyebrow {
  display: block;
  margin-bottom: .7rem;
  color: var(--color-steel, #6b7280);
  font-size: .66rem;
  font-weight: 800;
  letter-spacing: .22em;
  text-transform: uppercase;
}

.tech-specs__title {
  margin: 0;
  font-family: var(--font-heading-family, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -.03em;
  color: var(--color-ink, #111827);
}

.tech-specs__track {
  display: flex;
  gap: 1.5rem;
  padding: 0 max(2.5rem, calc((100vw - 1240px) / 2 + 2.5rem));
  overflow-x: auto;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.tech-specs__track::-webkit-scrollbar { display: none; }

.tech-spec-card {
  flex: 0 0 220px;
  padding: 2rem 1.6rem;
  border: 1px solid color-mix(in srgb, var(--color-ink, #111827), transparent 90%);
  border-radius: 4px;
  background: color-mix(in srgb, var(--color-paper, #f5f5f3), white 8%);
  scroll-snap-align: start;
}

.tech-spec-card__icon {
  margin-bottom: 1.2rem;
  color: var(--color-steel, #6b7280);
}

.tech-spec-card__label {
  display: block;
  margin-bottom: .3rem;
  color: var(--color-steel, #6b7280);
  font-size: .62rem;
  font-weight: 800;
  letter-spacing: .2em;
  text-transform: uppercase;
}

.tech-spec-card__value {
  display: block;
  color: var(--color-ink, #111827);
  font-family: var(--font-heading-family, Georgia, serif);
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.2;
}

/* ── Editorial Grid Section ── */
.editorial-grid {
  padding: clamp(4rem, 8vw, 7rem) 0;
}

.editorial-grid__inner {
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: .85rem;
  padding: 0 max(2.5rem, calc((100vw - 1240px) / 2 + 2.5rem));
  height: clamp(480px, 72vh, 860px);
}

.editorial-cell {
  position: relative;
  overflow: hidden;
  background: color-mix(in srgb, var(--color-steel, #6b7280), transparent 60%);
  border-radius: 2px;
  cursor: pointer;
}

.editorial-cell:first-child {
  grid-row: span 2;
}

.editorial-cell__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 800ms var(--ease-luxury, ease);
}

.editorial-cell:hover .editorial-cell__img {
  transform: scale(1.05);
}

.editorial-cell__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(5,8,15,.75) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 350ms var(--ease-luxury, ease);
}

.editorial-cell:hover .editorial-cell__overlay {
  opacity: 1;
}

.editorial-cell__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  transform: translateY(10px);
  opacity: 0;
  transition:
    opacity 350ms var(--ease-luxury, ease),
    transform 350ms var(--ease-luxury, ease);
}

.editorial-cell:hover .editorial-cell__content {
  opacity: 1;
  transform: translateY(0);
}

.editorial-cell__label {
  display: block;
  margin-bottom: .4rem;
  color: rgba(255,255,255,.55);
  font-size: .6rem;
  font-weight: 800;
  letter-spacing: .2em;
  text-transform: uppercase;
}

.editorial-cell__heading {
  margin: 0;
  color: #fff;
  font-family: var(--font-heading-family, Georgia, serif);
  font-size: clamp(1rem, 2.2vw, 1.6rem);
  font-weight: 600;
  line-height: 1.1;
}

/* ── Page Loader ── */
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-paper, #f5f5f3);
  transition: opacity 650ms var(--ease-luxury, ease), visibility 650ms var(--ease-luxury, ease);
}

.page-loader.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.page-loader video {
  max-width: 260px;
  max-height: 260px;
  object-fit: contain;
}

/* CSS fallback logo animation */
.page-loader__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
}

.page-loader__letter {
  font-family: var(--font-heading-family, Georgia, serif);
  font-size: 5rem;
  font-weight: 900;
  color: var(--color-ink, #111827);
  letter-spacing: -.05em;
  animation: loader-pulse 1.8s var(--ease-luxury, ease) infinite;
}

/* ── Collection header ── */
.collection-header {
  padding: clamp(3rem, 6vw, 5rem) 0 clamp(2rem, 4vw, 3rem);
}

.collection-header__eyebrow {
  display: block;
  margin-bottom: .7rem;
  color: var(--color-steel, #6b7280);
  font-size: .66rem;
  font-weight: 800;
  letter-spacing: .22em;
  text-transform: uppercase;
}

.collection-header__title {
  margin: 0 0 .8rem;
  font-family: var(--font-heading-family, Georgia, serif);
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -.03em;
  color: var(--color-ink, #111827);
}

.collection-header__desc {
  max-width: 560px;
  color: var(--color-steel, #6b7280);
  font-size: .95rem;
  line-height: 1.65;
}

/* ── Liquid Glass Footer Styles ── */
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.site-footer--liquid-glass {
  width: 100%;
  border-radius: 1.5rem; /* 24px */
  padding: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8rem;
  box-sizing: border-box;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

@media (min-width: 768px) {
  .site-footer--liquid-glass {
    padding: 2.5rem;
    margin-top: 16rem;
  }
}

.site-footer__top-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .site-footer__top-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 3rem;
  }
}

.site-footer__brand-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

@media (min-width: 768px) {
  .site-footer__brand-col {
    grid-column: span 5 / span 5;
  }
}

.site-footer__brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #ffffff;
}

.site-footer__brand-title {
  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  letter-spacing: 0.05em;
  font-family: inherit;
}

.site-footer__brand-desc {
  font-size: 0.875rem; /* 14px */
  line-height: 1.625;
  max-width: 24rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.site-footer__links-wrapper {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
}

@media (min-width: 768px) {
  .site-footer__links-wrapper {
    grid-column: span 7 / span 7;
  }
}

@media (min-width: 901px) {
  .site-footer__links-wrapper {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.site-footer__links-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.site-footer__links-heading {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  font-weight: 500;
  margin: 0 0 0.5rem;
}

.site-footer__links-list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  list-style: none;
  padding: 0;
  margin: 0;
}

.site-footer__links-list a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.site-footer__links-list a:hover {
  color: #ffffff;
}

.site-footer__bottom-bar {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .site-footer__bottom-bar {
    flex-direction: row;
    gap: 1rem;
  }
}

.site-footer__curated {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.5;
  margin: 0;
}

.site-footer__socials-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.site-footer__socials-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.5;
}

.site-footer__social-icons {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.site-footer__social-icon-link {
  color: inherit;
  opacity: 0.7;
  transition: opacity 0.2s ease, color 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.site-footer__social-icon-link:hover {
  opacity: 1;
  color: #ffffff;
}

.site-footer__social-icon-link svg {
  width: 16px;
  height: 16px;
  display: block;
}

/* ── Footer Accordion Mobile Overrides & Styling ── */
.site-footer--liquid-glass .site-footer__summary {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  font-weight: 500;
  font-family: inherit;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.875rem 0;
  margin: 0;
}

.site-footer--liquid-glass .site-footer__summary::-webkit-details-marker {
  display: none;
}

.site-footer--liquid-glass .site-footer__links-list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  list-style: none;
  padding: 0;
  margin: 0;
}

.site-footer--liquid-glass .site-footer__links-list a {
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  text-transform: none; /* keep lowercase/sentence-case */
  text-decoration: none;
  transition: color 0.3s ease;
}

.site-footer--liquid-glass .site-footer__links-list a:hover {
  color: #ffffff;
  text-decoration: none;
}

/* On mobile/tablet, show accordion borders and chevrons */
@media (max-width: 900px) {
  .site-footer--liquid-glass .site-footer__links-wrapper {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .site-footer--liquid-glass .site-footer__accordion {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0;
    display: block !important;
  }
  .site-footer--liquid-glass .site-footer__accordion:first-child {
    border-top: none;
  }
  .site-footer--liquid-glass .site-footer__summary::after {
    content: '+';
    font-size: 1.25rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.6);
  }
  .site-footer--liquid-glass .site-footer__accordion[open] .site-footer__summary::after {
    content: '−';
  }
  .site-footer--liquid-glass .site-footer__panel {
    padding-bottom: 1rem;
    padding-top: 0.25rem;
    display: grid;
    gap: 0.625rem;
  }
}

/* On desktop, hide chevrons, prevent accordion borders and actions */
@media (min-width: 901px) {
  .site-footer--liquid-glass .site-footer__summary::after {
    display: none !important;
  }
  .site-footer--liquid-glass .site-footer__accordion {
    border: none !important;
    padding: 0 !important;
    pointer-events: none; /* disable toggling */
    display: block !important;
  }
  .site-footer--liquid-glass .site-footer__summary {
    cursor: default;
    padding-top: 0;
    padding-bottom: 0.5rem;
  }
  .site-footer--liquid-glass .site-footer__panel {
    padding-top: 0;
    display: grid;
    gap: 0.625rem;
  }
}

```

## `assets/constants.js`

```javascript
const ON_CHANGE_DEBOUNCE_TIMER = 300;

const PUB_SUB_EVENTS = {
  cartUpdate: 'cart-update',
  quantityUpdate: 'quantity-update',
  optionValueSelectionChange: 'option-value-selection-change',
  variantChange: 'variant-change',
  cartError: 'cart-error',
};
```

## `assets/details-disclosure.js`

```javascript
class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;

    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
    } else {
      this.animations.forEach((animation) => animation.cancel());
    }
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('.header-wrapper');
  }

  onToggle() {
    if (!this.header) return;
    this.header.preventHide = this.mainDetailsToggle.open;

    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
    document.documentElement.style.setProperty(
      '--header-bottom-position-desktop',
      `${Math.floor(this.header.getBoundingClientRect().bottom)}px`
    );
  }
}

customElements.define('header-menu', HeaderMenu);
```

## `assets/details-modal.js`

```javascript
class DetailsModal extends HTMLElement {
  constructor() {
    super();
    this.detailsContainer = this.querySelector('details');
    this.summaryToggle = this.querySelector('summary');

    this.detailsContainer.addEventListener('keyup', (event) => event.code.toUpperCase() === 'ESCAPE' && this.close());
    this.summaryToggle.addEventListener('click', this.onSummaryClick.bind(this));
    this.querySelector('button[type="button"]').addEventListener('click', this.close.bind(this));

    this.summaryToggle.setAttribute('role', 'button');
  }

  isOpen() {
    return this.detailsContainer.hasAttribute('open');
  }

  onSummaryClick(event) {
    event.preventDefault();
    event.target.closest('details').hasAttribute('open') ? this.close() : this.open(event);
  }

  onBodyClick(event) {
    if (!this.contains(event.target) || event.target.classList.contains('modal-overlay')) this.close(false);
  }

  open(event) {
    this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this);
    event.target.closest('details').setAttribute('open', true);
    document.body.addEventListener('click', this.onBodyClickEvent);
    document.body.classList.add('overflow-hidden');

    trapFocus(
      this.detailsContainer.querySelector('[tabindex="-1"]'),
      this.detailsContainer.querySelector('input:not([type="hidden"])')
    );
  }

  close(focusToggle = true) {
    removeTrapFocus(focusToggle ? this.summaryToggle : null);
    this.detailsContainer.removeAttribute('open');
    document.body.removeEventListener('click', this.onBodyClickEvent);
    document.body.classList.remove('overflow-hidden');
  }
}

customElements.define('details-modal', DetailsModal);
```

## `assets/facets.js`

```javascript
class FacetFiltersForm extends HTMLElement {
  constructor() {
    super();
    this.onActiveFilterClick = this.onActiveFilterClick.bind(this);

    this.debouncedOnSubmit = debounce((event) => {
      this.onSubmitHandler(event);
    }, 800);

    const facetForm = this.querySelector('form');
    facetForm.addEventListener('input', this.debouncedOnSubmit.bind(this));

    const facetWrapper = this.querySelector('#FacetsWrapperDesktop');
    if (facetWrapper) facetWrapper.addEventListener('keyup', onKeyUpEscape);
  }

  static setListeners() {
    const onHistoryChange = (event) => {
      const searchParams = event.state ? event.state.searchParams : FacetFiltersForm.searchParamsInitial;
      if (searchParams === FacetFiltersForm.searchParamsPrev) return;
      FacetFiltersForm.renderPage(searchParams, null, false);
    };
    window.addEventListener('popstate', onHistoryChange);
  }

  static toggleActiveFacets(disable = true) {
    document.querySelectorAll('.js-facet-remove').forEach((element) => {
      element.classList.toggle('disabled', disable);
    });
  }

  static renderPage(searchParams, event, updateURLHash = true) {
    FacetFiltersForm.searchParamsPrev = searchParams;
    const sections = FacetFiltersForm.getSections();
    const countContainer = document.getElementById('ProductCount');
    const countContainerDesktop = document.getElementById('ProductCountDesktop');
    const loadingSpinners = document.querySelectorAll(
      '.facets-container .loading__spinner, facet-filters-form .loading__spinner'
    );
    loadingSpinners.forEach((spinner) => spinner.classList.remove('hidden'));
    document.getElementById('ProductGridContainer').querySelector('.collection').classList.add('loading');
    if (countContainer) {
      countContainer.classList.add('loading');
    }
    if (countContainerDesktop) {
      countContainerDesktop.classList.add('loading');
    }

    sections.forEach((section) => {
      const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
      const filterDataUrl = (element) => element.url === url;

      FacetFiltersForm.filterData.some(filterDataUrl)
        ? FacetFiltersForm.renderSectionFromCache(filterDataUrl, event)
        : FacetFiltersForm.renderSectionFromFetch(url, event);
    });

    if (updateURLHash) FacetFiltersForm.updateURLHash(searchParams);
  }

  static renderSectionFromFetch(url, event) {
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        const html = responseText;
        FacetFiltersForm.filterData = [...FacetFiltersForm.filterData, { html, url }];
        FacetFiltersForm.renderFilters(html, event);
        FacetFiltersForm.renderProductGridContainer(html);
        FacetFiltersForm.renderProductCount(html);
        if (typeof initializeScrollAnimationTrigger === 'function') initializeScrollAnimationTrigger(html.innerHTML);
      });
  }

  static renderSectionFromCache(filterDataUrl, event) {
    const html = FacetFiltersForm.filterData.find(filterDataUrl).html;
    FacetFiltersForm.renderFilters(html, event);
    FacetFiltersForm.renderProductGridContainer(html);
    FacetFiltersForm.renderProductCount(html);
    if (typeof initializeScrollAnimationTrigger === 'function') initializeScrollAnimationTrigger(html.innerHTML);
  }

  static renderProductGridContainer(html) {
    document.getElementById('ProductGridContainer').innerHTML = new DOMParser()
      .parseFromString(html, 'text/html')
      .getElementById('ProductGridContainer').innerHTML;

    document
      .getElementById('ProductGridContainer')
      .querySelectorAll('.scroll-trigger')
      .forEach((element) => {
        element.classList.add('scroll-trigger--cancel');
      });
  }

  static renderProductCount(html) {
    const count = new DOMParser().parseFromString(html, 'text/html').getElementById('ProductCount').innerHTML;
    const container = document.getElementById('ProductCount');
    const containerDesktop = document.getElementById('ProductCountDesktop');
    container.innerHTML = count;
    container.classList.remove('loading');
    if (containerDesktop) {
      containerDesktop.innerHTML = count;
      containerDesktop.classList.remove('loading');
    }
    const loadingSpinners = document.querySelectorAll(
      '.facets-container .loading__spinner, facet-filters-form .loading__spinner'
    );
    loadingSpinners.forEach((spinner) => spinner.classList.add('hidden'));
  }

  static renderFilters(html, event) {
    const parsedHTML = new DOMParser().parseFromString(html, 'text/html');
    const facetDetailsElementsFromFetch = parsedHTML.querySelectorAll(
      '#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter, #FacetFiltersPillsForm .js-filter'
    );
    const facetDetailsElementsFromDom = document.querySelectorAll(
      '#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter, #FacetFiltersPillsForm .js-filter'
    );

    Array.from(facetDetailsElementsFromDom).forEach((currentElement) => {
      if (!Array.from(facetDetailsElementsFromFetch).some(({ id }) => currentElement.id === id)) {
        currentElement.remove();
      }
    });

    const matchesId = (element) => {
      const jsFilter = event ? event.target.closest('.js-filter') : undefined;
      return jsFilter ? element.id === jsFilter.id : false;
    };

    const facetsToRender = Array.from(facetDetailsElementsFromFetch).filter((element) => !matchesId(element));
    const countsToRender = Array.from(facetDetailsElementsFromFetch).find(matchesId);

    facetsToRender.forEach((elementToRender, index) => {
      const currentElement = document.getElementById(elementToRender.id);
      if (currentElement) {
        document.getElementById(elementToRender.id).innerHTML = elementToRender.innerHTML;
      } else {
        if (index > 0) {
          const { className: previousElementClassName, id: previousElementId } = facetsToRender[index - 1];
          if (elementToRender.className === previousElementClassName) {
            document.getElementById(previousElementId).after(elementToRender);
            return;
          }
        }

        if (elementToRender.parentElement) {
          document.querySelector(`#${elementToRender.parentElement.id} .js-filter`).before(elementToRender);
        }
      }
    });

    FacetFiltersForm.renderActiveFacets(parsedHTML);
    FacetFiltersForm.renderAdditionalElements(parsedHTML);

    if (countsToRender) {
      const closestJSFilterID = event.target.closest('.js-filter').id;

      if (closestJSFilterID) {
        FacetFiltersForm.renderCounts(countsToRender, event.target.closest('.js-filter'));
        FacetFiltersForm.renderMobileCounts(countsToRender, document.getElementById(closestJSFilterID));

        const newFacetDetailsElement = document.getElementById(closestJSFilterID);
        const newElementSelector = newFacetDetailsElement.classList.contains('mobile-facets__details')
          ? `.mobile-facets__close-button`
          : `.facets__summary`;
        const newElementToActivate = newFacetDetailsElement.querySelector(newElementSelector);

        const isTextInput = event.target.getAttribute('type') === 'text';

        if (newElementToActivate && !isTextInput) newElementToActivate.focus();
      }
    }
  }

  static renderActiveFacets(html) {
    const activeFacetElementSelectors = ['.active-facets-mobile', '.active-facets-desktop'];

    activeFacetElementSelectors.forEach((selector) => {
      const activeFacetsElement = html.querySelector(selector);
      if (!activeFacetsElement) return;
      document.querySelector(selector).innerHTML = activeFacetsElement.innerHTML;
    });

    FacetFiltersForm.toggleActiveFacets(false);
  }

  static renderAdditionalElements(html) {
    const mobileElementSelectors = ['.mobile-facets__open', '.mobile-facets__count', '.sorting'];

    mobileElementSelectors.forEach((selector) => {
      if (!html.querySelector(selector)) return;
      const targetElement = document.querySelector(selector);
      if (targetElement) {
        targetElement.innerHTML = html.querySelector(selector).innerHTML;
      }
    });

    const mobileFiltersForm = document.getElementById('FacetFiltersFormMobile');
    const mobileMenuDrawer = mobileFiltersForm ? mobileFiltersForm.closest('menu-drawer') : null;
    if (mobileMenuDrawer && typeof mobileMenuDrawer.bindEvents === 'function') {
      mobileMenuDrawer.bindEvents();
    }
  }

  static renderCounts(source, target) {
    const targetSummary = target.querySelector('.facets__summary');
    const sourceSummary = source.querySelector('.facets__summary');

    if (sourceSummary && targetSummary) {
      targetSummary.outerHTML = sourceSummary.outerHTML;
    }

    const targetHeaderElement = target.querySelector('.facets__header');
    const sourceHeaderElement = source.querySelector('.facets__header');

    if (sourceHeaderElement && targetHeaderElement) {
      targetHeaderElement.outerHTML = sourceHeaderElement.outerHTML;
    }

    const targetWrapElement = target.querySelector('.facets-wrap');
    const sourceWrapElement = source.querySelector('.facets-wrap');

    if (sourceWrapElement && targetWrapElement) {
      const isShowingMore = Boolean(target.querySelector('show-more-button .label-show-more.hidden'));
      if (isShowingMore) {
        sourceWrapElement
          .querySelectorAll('.facets__item.hidden')
          .forEach((hiddenItem) => hiddenItem.classList.replace('hidden', 'show-more-item'));
      }

      targetWrapElement.outerHTML = sourceWrapElement.outerHTML;
    }
  }

  static renderMobileCounts(source, target) {
    const targetFacetsList = target.querySelector('.mobile-facets__list');
    const sourceFacetsList = source.querySelector('.mobile-facets__list');

    if (sourceFacetsList && targetFacetsList) {
      targetFacetsList.outerHTML = sourceFacetsList.outerHTML;
    }
  }

  static updateURLHash(searchParams) {
    history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
  }

  static getSections() {
    return [
      {
        section: document.getElementById('product-grid').dataset.id,
      },
    ];
  }

  createSearchParams(form) {
    const formData = new FormData(form);
    return new URLSearchParams(formData).toString();
  }

  onSubmitForm(searchParams, event) {
    FacetFiltersForm.renderPage(searchParams, event);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const sortFilterForms = document.querySelectorAll('facet-filters-form form');
    if (event.srcElement.className == 'mobile-facets__checkbox') {
      const searchParams = this.createSearchParams(event.target.closest('form'));
      this.onSubmitForm(searchParams, event);
    } else {
      const forms = [];
      const isMobile = event.target.closest('form').id === 'FacetFiltersFormMobile';

      sortFilterForms.forEach((form) => {
        if (!isMobile) {
          if (form.id === 'FacetSortForm' || form.id === 'FacetFiltersForm' || form.id === 'FacetSortDrawerForm') {
            forms.push(this.createSearchParams(form));
          }
        } else if (form.id === 'FacetFiltersFormMobile') {
          forms.push(this.createSearchParams(form));
        }
      });
      this.onSubmitForm(forms.join('&'), event);
    }
  }

  onActiveFilterClick(event) {
    event.preventDefault();
    FacetFiltersForm.toggleActiveFacets();
    const url =
      event.currentTarget.href.indexOf('?') == -1
        ? ''
        : event.currentTarget.href.slice(event.currentTarget.href.indexOf('?') + 1);
    FacetFiltersForm.renderPage(url);
  }
}

FacetFiltersForm.filterData = [];
FacetFiltersForm.searchParamsInitial = window.location.search.slice(1);
FacetFiltersForm.searchParamsPrev = window.location.search.slice(1);
customElements.define('facet-filters-form', FacetFiltersForm);
FacetFiltersForm.setListeners();

class PriceRange extends HTMLElement {
  constructor() {
    super();
    this.querySelectorAll('input').forEach((element) => {
      element.addEventListener('change', this.onRangeChange.bind(this));
      element.addEventListener('keydown', this.onKeyDown.bind(this));
    });
    this.setMinAndMaxValues();
  }

  onRangeChange(event) {
    this.adjustToValidValues(event.currentTarget);
    this.setMinAndMaxValues();
  }

  onKeyDown(event) {
    if (event.metaKey) return;

    const pattern = /[0-9]|\.|,|'| |Tab|Backspace|Enter|ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Delete|Escape/;
    if (!event.key.match(pattern)) event.preventDefault();
  }

  setMinAndMaxValues() {
    const inputs = this.querySelectorAll('input');
    const minInput = inputs[0];
    const maxInput = inputs[1];
    if (maxInput.value) minInput.setAttribute('data-max', maxInput.value);
    if (minInput.value) maxInput.setAttribute('data-min', minInput.value);
    if (minInput.value === '') maxInput.setAttribute('data-min', 0);
    if (maxInput.value === '') minInput.setAttribute('data-max', maxInput.getAttribute('data-max'));
  }

  adjustToValidValues(input) {
    const value = Number(input.value);
    const min = Number(input.getAttribute('data-min'));
    const max = Number(input.getAttribute('data-max'));

    if (value < min) input.value = min;
    if (value > max) input.value = max;
  }
}

customElements.define('price-range', PriceRange);

class FacetRemove extends HTMLElement {
  constructor() {
    super();
    const facetLink = this.querySelector('a');
    facetLink.setAttribute('role', 'button');
    facetLink.addEventListener('click', this.closeFilter.bind(this));
    facetLink.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.code.toUpperCase() === 'SPACE') this.closeFilter(event);
    });
  }

  closeFilter(event) {
    event.preventDefault();
    const form = this.closest('facet-filters-form') || document.querySelector('facet-filters-form');
    form.onActiveFilterClick(event);
  }
}

customElements.define('facet-remove', FacetRemove);
```

## `assets/global.js`

```javascript
function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      "summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"
    )
  );
}

function debounce(callback, wait = 300) {
  let timeout;

  return (...args) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => callback(...args), wait);
  };
}

const trapFocusHandlers = {};

function trapFocus(container, elementToFocus = container) {
  const elements = getFocusableElements(container);
  const first = elements[0];
  const last = elements[elements.length - 1];

  removeTrapFocus();

  trapFocusHandlers.focusin = (event) => {
    if (event.target !== container && event.target !== last && event.target !== first) return;

    document.addEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.focusout = function () {
    document.removeEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.keydown = function (event) {
    if (event.code.toUpperCase() !== 'TAB') return;

    if (event.target === last && !event.shiftKey) {
      event.preventDefault();
      first.focus();
    }

    if ((event.target === container || event.target === first) && event.shiftKey) {
      event.preventDefault();
      last.focus();
    }
  };

  document.addEventListener('focusout', trapFocusHandlers.focusout);
  document.addEventListener('focusin', trapFocusHandlers.focusin);

  elementToFocus.focus();

  if (
    elementToFocus.tagName === 'INPUT' &&
    ['search', 'text', 'email', 'url'].includes(elementToFocus.type) &&
    elementToFocus.value
  ) {
    elementToFocus.setSelectionRange(0, elementToFocus.value.length);
  }
}

function removeTrapFocus(elementToFocus = null) {
  document.removeEventListener('focusin', trapFocusHandlers.focusin);
  document.removeEventListener('focusout', trapFocusHandlers.focusout);
  document.removeEventListener('keydown', trapFocusHandlers.keydown);

  if (elementToFocus) elementToFocus.focus();
}

function onKeyUpEscape(event) {
  if (event.code.toUpperCase() !== 'ESCAPE') return;

  const openDetailsElement = event.target.closest('details[open]');
  if (!openDetailsElement) return;

  const summaryElement = openDetailsElement.querySelector('summary');
  openDetailsElement.removeAttribute('open');
  summaryElement.setAttribute('aria-expanded', false);
  summaryElement.focus();
}

/* ========================================
   WINGSTONE MOBILE MENU
======================================== */

document.addEventListener("DOMContentLoaded", () => {

  const trigger = document.querySelector(".wingstone-menu-trigger");
  const drawer = document.querySelector(".wingstone-mobile-menu");
  const overlay = document.querySelector(".wingstone-menu-overlay");
  const closeBtn = document.querySelector(".wingstone-menu-close");

  if (!trigger || !drawer || !overlay) return;

  const setMenuScrollLock = (lock) => {
    if (window.innerWidth <= 768) {
      document.body.style.removeProperty('overflow');
      return;
    }

    document.body.style.overflow = lock ? 'hidden' : '';
  };

  drawer.classList.remove("active");
  overlay.classList.remove("active");
  setMenuScrollLock(false);

  const closeMenu = () => {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    setMenuScrollLock(false);
  };

  trigger.addEventListener("click", () => {
    drawer.classList.add("active");
    overlay.classList.add("active");
    setMenuScrollLock(true);
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  overlay.addEventListener("click", closeMenu);

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("scroll", () => {
    if (drawer.classList.contains("active")) {
      closeMenu();
    }
  }, { passive: true });

  document.addEventListener("click", (event) => {
    const cartToggle = event.target.closest("[data-cart-drawer-toggle]");
    const searchToggle = event.target.closest("[data-search-toggle], [data-search-open], [href*='/search']");

    if (cartToggle || searchToggle) {
      closeMenu();
    }
  }, true);

});
```

## `assets/hero-video.mp4`

```

```

## `assets/hero-visual.js`

```javascript
/* hero-visual.js
   Lightweight dragger for the hero visual section preview.
   - Allows dragging the image to change X/Y offset (percent of container).
   - Updates the inline transform so the preview reflects the change.
   - Also updates visible range inputs (if the customizer sidebar exists) so merchants
     can persist the values using the theme editor sliders.
*/

(function () {
  if (typeof window === 'undefined') return;

  function initDragger(container) {
    var wrap = container.querySelector('.hero-visual__wrap');
    var img = container.querySelector('.hero-visual__image');
    if (!wrap || !img) return;

    var rect = wrap.getBoundingClientRect();
    var start = null;
    var baseX = 0, baseY = 0;

    function toPercent(dx, dy) {
      var px = (dx / rect.width) * 100;
      var py = (dy / rect.height) * 100;
      return { x: px, y: py };
    }

    function pointerDown(e) {
      e.preventDefault();
      rect = wrap.getBoundingClientRect();
      start = { x: e.clientX || (e.touches && e.touches[0].clientX), y: e.clientY || (e.touches && e.touches[0].clientY) };

      // read current transform (assumes translate(X%, Y%))
      var style = window.getComputedStyle(wrap);
      var m = style.transform || '';
      baseX = 0; baseY = 0;
      var translateMatch = m.match(/translate\(([-0-9.]+)%?,\s*([-0-9.]+)%?\)/);
      if (translateMatch) {
        baseX = parseFloat(translateMatch[1]);
        baseY = parseFloat(translateMatch[2]);
      }

      window.addEventListener('pointermove', pointerMove);
      window.addEventListener('pointerup', pointerUp);
    }

    function pointerMove(e) {
      if (!start) return;
      var cx = e.clientX || (e.touches && e.touches[0].clientX);
      var cy = e.clientY || (e.touches && e.touches[0].clientY);
      var dx = cx - start.x;
      var dy = cy - start.y;
      var p = toPercent(dx, dy);

      var nx = baseX + p.x;
      var ny = baseY + p.y;

      // clamp to reasonable values
      nx = Math.max(-50, Math.min(50, nx));
      ny = Math.max(-50, Math.min(50, ny));

      wrap.style.transform = 'translate(' + nx + '%, ' + ny + '%)';
      wrap.setAttribute('data-x', nx.toFixed(2));
      wrap.setAttribute('data-y', ny.toFixed(2));

      // if there are range inputs for this section in the parent (customizer), update them
      try {
        var sectionId = wrap.getAttribute('data-section-id');
        if (sectionId && window.parent && window.parent.document) {
          // range inputs live in the Theme Editor iframe's parent document; try to find them
          var editor = window.parent.document;
          var xInput = editor.querySelector('input[name="section_' + sectionId + '[x_offset]"]') || editor.querySelector('input[id*="' + sectionId + '"][name*="x_offset"]');
          var yInput = editor.querySelector('input[name="section_' + sectionId + '[y_offset]"]') || editor.querySelector('input[id*="' + sectionId + '"][name*="y_offset"]');
          if (xInput) xInput.value = nx;
          if (yInput) yInput.value = ny;
        }
      } catch (err) {
        // cross-origin parent may block access — ignore silently
      }
    }

    function pointerUp() {
      start = null;
      window.removeEventListener('pointermove', pointerMove);
      window.removeEventListener('pointerup', pointerUp);
    }

    img.style.touchAction = 'none';
    img.addEventListener('pointerdown', pointerDown);
  }

    /* Image dragger for images not inside slides (wrap mode) */

    /* Drag handler for images inside slides (visual-only, does not persist) */
    function initImageDragFor(img) {
      if (!img) return;
      var start = null;
      var baseX = 0, baseY = 0;
      var rect = img.getBoundingClientRect();

      function toPercent(dx, dy) {
        var px = (dx / rect.width) * 100;
        var py = (dy / rect.height) * 100;
        return { x: px, y: py };
      }

      function pointerDown(e) {
        e.preventDefault();
        rect = img.getBoundingClientRect();
        start = { x: e.clientX || (e.touches && e.touches[0].clientX), y: e.clientY || (e.touches && e.touches[0].clientY) };
        var m = img.style.transform || '';
        var match = m.match(/translate\(([-0-9.]+)%?,\s*([-0-9.]+)%?\)/);
        baseX = match ? parseFloat(match[1]) : 0;
        baseY = match ? parseFloat(match[2]) : 0;
        window.addEventListener('pointermove', pointerMove);
        window.addEventListener('pointerup', pointerUp);
      }

      function pointerMove(e) {
        if (!start) return;
        var cx = e.clientX || (e.touches && e.touches[0].clientX);
        var cy = e.clientY || (e.touches && e.touches[0].clientY);
        var dx = cx - start.x;
        var dy = cy - start.y;
        var p = toPercent(dx, dy);
        var nx = baseX + p.x;
        var ny = baseY + p.y;
        nx = Math.max(-100, Math.min(100, nx));
        ny = Math.max(-100, Math.min(100, ny));
        img.style.transform = 'translate(' + nx + '%, ' + ny + '%)';
      }

      function pointerUp() {
        start = null;
        window.removeEventListener('pointermove', pointerMove);
        window.removeEventListener('pointerup', pointerUp);
      }

      img.style.touchAction = 'none';
      img.addEventListener('pointerdown', pointerDown);
    }

    /* Simple carousel for .hero-visual__slides */
    function initCarousel(container) {
      var slidesEl = container;
      var slides = Array.prototype.slice.call(slidesEl.querySelectorAll('.hero-visual__slide'));
      if (!slides.length) return;
      var prev = slidesEl.querySelector('.hero-visual__prev');
      var next = slidesEl.querySelector('.hero-visual__next');
      var current = 0;
      var autoplay = true;
      var autoplayMs = 4000;
      var autoplayId = null;

      function show(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach(function (s, i) {
          s.style.transform = 'translateX(' + ((i - current) * 100) + '%)';
          s.setAttribute('aria-hidden', i === current ? 'false' : 'true');
        });
      }

      function nextSlide() { show(current + 1); }
      function prevSlide() { show(current - 1); }

      if (next) next.addEventListener('click', function (e) { e.preventDefault(); nextSlide(); resetAutoplay(); });
      if (prev) prev.addEventListener('click', function (e) { e.preventDefault(); prevSlide(); resetAutoplay(); });

      // Init positions
      slides.forEach(function (s, i) { s.style.position = 'absolute'; s.style.left = 0; s.style.top = 0; s.style.width = '100%'; });
      slidesEl.style.position = 'relative';
      slidesEl.style.overflow = 'hidden';
      show(0);

      // enable dragging of images inside slides (visual only)
      slides.forEach(function (s) { var img = s.querySelector('.hero-visual__image'); if (img) initImageDragFor(img); });

      function startAutoplay() { if (!autoplay) return; autoplayId = setInterval(nextSlide, autoplayMs); }
      function stopAutoplay() { if (autoplayId) { clearInterval(autoplayId); autoplayId = null; } }
      function resetAutoplay() { stopAutoplay(); startAutoplay(); }

      slidesEl.addEventListener('pointerenter', stopAutoplay);
      slidesEl.addEventListener('pointerleave', startAutoplay);
      startAutoplay();
    }

    function initAll() {
      // init single-image draggers
      var wraps = document.querySelectorAll('.hero-visual__wrap');
      wraps.forEach(function (c) { initDragger(c); });

      // init carousels
      var carousels = document.querySelectorAll('.hero-visual__slides');
      carousels.forEach(function (c) { initCarousel(c); });
    }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initAll();
  } else {
    document.addEventListener('DOMContentLoaded', initAll);
  }

})();
```

## `assets/localization-form.js`

```javascript
if (!customElements.get('localization-form')) {
  customElements.define(
    'localization-form',
    class LocalizationForm extends HTMLElement {
      constructor() {
        super();
        this.mql = window.matchMedia('(min-width: 750px)');
        this.header = document.querySelector('.header-wrapper');
        this.elements = {
          input: this.querySelector('input[name="locale_code"], input[name="country_code"]'),
          button: this.querySelector('button.localization-form__select'),
          panel: this.querySelector('.disclosure__list-wrapper'),
          search: this.querySelector('input[name="country_filter"]'),
          closeButton: this.querySelector('.country-selector__close-button'),
          resetButton: this.querySelector('.country-filter__reset-button'),
          searchIcon: this.querySelector('.country-filter__search-icon'),
          liveRegion: this.querySelector('#sr-country-search-results'),
        };
        this.addEventListener('keyup', this.onContainerKeyUp.bind(this));
        this.addEventListener('keydown', this.onContainerKeyDown.bind(this));
        this.addEventListener('focusout', this.closeSelector.bind(this));
        this.elements.button.addEventListener('click', this.openSelector.bind(this));

        if (this.elements.search) {
          this.elements.search.addEventListener('keyup', this.filterCountries.bind(this));
          this.elements.search.addEventListener('focus', this.onSearchFocus.bind(this));
          this.elements.search.addEventListener('blur', this.onSearchBlur.bind(this));
          this.elements.search.addEventListener('keydown', this.onSearchKeyDown.bind(this));
        }
        if (this.elements.closeButton) {
          this.elements.closeButton.addEventListener('click', this.hidePanel.bind(this));
        }
        if (this.elements.resetButton) {
          this.elements.resetButton.addEventListener('click', this.resetFilter.bind(this));
          this.elements.resetButton.addEventListener('mousedown', (event) => event.preventDefault());
        }

        this.querySelectorAll('a').forEach((item) => item.addEventListener('click', this.onItemClick.bind(this)));
      }

      hidePanel() {
        this.elements.button.setAttribute('aria-expanded', 'false');
        this.elements.panel.setAttribute('hidden', true);
        if (this.elements.search) {
          this.elements.search.value = '';
          this.filterCountries();
          this.elements.search.setAttribute('aria-activedescendant', '');
        }
        document.body.classList.remove('overflow-hidden-mobile');
        document.querySelector('.menu-drawer').classList.remove('country-selector-open');
        this.header.preventHide = false;
      }

      onContainerKeyDown(event) {
        const focusableItems = Array.from(this.querySelectorAll('a')).filter(
          (item) => !item.parentElement.classList.contains('hidden')
        );
        let focusedItemIndex = focusableItems.findIndex((item) => item === document.activeElement);
        let itemToFocus;

        switch (event.code.toUpperCase()) {
          case 'ARROWUP':
            event.preventDefault();
            itemToFocus =
              focusedItemIndex > 0 ? focusableItems[focusedItemIndex - 1] : focusableItems[focusableItems.length - 1];
            itemToFocus.focus();
            break;
          case 'ARROWDOWN':
            event.preventDefault();
            itemToFocus =
              focusedItemIndex < focusableItems.length - 1 ? focusableItems[focusedItemIndex + 1] : focusableItems[0];
            itemToFocus.focus();
            break;
        }

        if (!this.elements.search) return;

        setTimeout(() => {
          focusedItemIndex = focusableItems.findIndex((item) => item === document.activeElement);
          if (focusedItemIndex > -1) {
            this.elements.search.setAttribute('aria-activedescendant', focusableItems[focusedItemIndex].id);
          } else {
            this.elements.search.setAttribute('aria-activedescendant', '');
          }
        });
      }

      onContainerKeyUp(event) {
        event.preventDefault();

        switch (event.code.toUpperCase()) {
          case 'ESCAPE':
            if (this.elements.button.getAttribute('aria-expanded') == 'false') return;
            this.hidePanel();
            event.stopPropagation();
            this.elements.button.focus();
            break;
          case 'SPACE':
            if (this.elements.button.getAttribute('aria-expanded') == 'true') return;
            this.openSelector();
            break;
        }
      }

      onItemClick(event) {
        event.preventDefault();
        const form = this.querySelector('form');
        this.elements.input.value = event.currentTarget.dataset.value;
        if (form) form.submit();
      }

      openSelector() {
        this.elements.button.focus();
        this.elements.panel.toggleAttribute('hidden');
        this.elements.button.setAttribute(
          'aria-expanded',
          (this.elements.button.getAttribute('aria-expanded') === 'false').toString()
        );
        if (!document.body.classList.contains('overflow-hidden-tablet')) {
          document.body.classList.add('overflow-hidden-mobile');
        }
        if (this.elements.search && this.mql.matches) {
          this.elements.search.focus();
        }
        if (this.hasAttribute('data-prevent-hide')) {
          this.header.preventHide = true;
        }
        document.querySelector('.menu-drawer').classList.add('country-selector-open');
      }

      closeSelector(event) {
        if (
          event.target.classList.contains('country-selector__overlay') ||
          !this.contains(event.target) ||
          !this.contains(event.relatedTarget)
        ) {
          this.hidePanel();
        }
      }

      normalizeString(str) {
        return str
          .normalize('NFD')
          .replace(/\p{Diacritic}/gu, '')
          .toLowerCase();
      }

      filterCountries() {
        const searchValue = this.normalizeString(this.elements.search.value);
        const popularCountries = this.querySelector('.popular-countries');
        const allCountries = this.querySelectorAll('a');
        let visibleCountries = allCountries.length;

        this.elements.resetButton.classList.toggle('hidden', !searchValue);

        if (popularCountries) {
          popularCountries.classList.toggle('hidden', searchValue);
        }

        allCountries.forEach((item) => {
          const countryName = this.normalizeString(item.querySelector('.country').textContent);
          if (countryName.indexOf(searchValue) > -1) {
            item.parentElement.classList.remove('hidden');
            visibleCountries++;
          } else {
            item.parentElement.classList.add('hidden');
            visibleCountries--;
          }
        });

        if (this.elements.liveRegion) {
          this.elements.liveRegion.innerHTML = window.accessibilityStrings.countrySelectorSearchCount.replace(
            '[count]',
            visibleCountries
          );
        }

        this.querySelector('.country-selector').scrollTop = 0;
        this.querySelector('.country-selector__list').scrollTop = 0;
      }

      resetFilter(event) {
        event.stopPropagation();
        this.elements.search.value = '';
        this.filterCountries();
        this.elements.search.focus();
      }

      onSearchFocus() {
        this.elements.searchIcon.classList.add('country-filter__search-icon--hidden');
      }

      onSearchBlur() {
        if (!this.elements.search.value) {
          this.elements.searchIcon.classList.remove('country-filter__search-icon--hidden');
        }
      }

      onSearchKeyDown(event) {
        if (event.code.toUpperCase() === 'ENTER') {
          event.preventDefault();
        }
      }
    }
  );
}
```

## `assets/media-gallery.js`

```javascript
if (!customElements.get('media-gallery')) {
  customElements.define(
    'media-gallery',
    class MediaGallery extends HTMLElement {
      constructor() {
        super();
        this.elements = {
          liveRegion: this.querySelector('[id^="GalleryStatus"]'),
          viewer: this.querySelector('[id^="GalleryViewer"]'),
          thumbnails: this.querySelector('[id^="GalleryThumbnails"]'),
        };
        this.mql = window.matchMedia('(min-width: 750px)');
        if (!this.elements.thumbnails) return;

        this.elements.viewer.addEventListener('slideChanged', debounce(this.onSlideChanged.bind(this), 500));
        this.elements.thumbnails.querySelectorAll('[data-target]').forEach((mediaToSwitch) => {
          mediaToSwitch
            .querySelector('button')
            .addEventListener('click', this.setActiveMedia.bind(this, mediaToSwitch.dataset.target, false));
        });
        if (this.dataset.desktopLayout.includes('thumbnail') && this.mql.matches) this.removeListSemantic();
      }

      onSlideChanged(event) {
        const thumbnail = this.elements.thumbnails.querySelector(
          `[data-target="${event.detail.currentElement.dataset.mediaId}"]`
        );
        this.setActiveThumbnail(thumbnail);
      }

      setActiveMedia(mediaId, prepend) {
        const activeMedia =
          this.elements.viewer.querySelector(`[data-media-id="${mediaId}"]`) ||
          this.elements.viewer.querySelector('[data-media-id]');
        if (!activeMedia) {
          return;
        }
        this.elements.viewer.querySelectorAll('[data-media-id]').forEach((element) => {
          element.classList.remove('is-active');
        });
        activeMedia?.classList?.add('is-active');

        if (prepend) {
          activeMedia.parentElement.firstChild !== activeMedia && activeMedia.parentElement.prepend(activeMedia);

          if (this.elements.thumbnails) {
            const activeThumbnail = this.elements.thumbnails.querySelector(`[data-target="${mediaId}"]`);
            activeThumbnail.parentElement.firstChild !== activeThumbnail && activeThumbnail.parentElement.prepend(activeThumbnail);
          }

          if (this.elements.viewer.slider) this.elements.viewer.resetPages();
        }

        this.preventStickyHeader();
        window.setTimeout(() => {
          if (!this.mql.matches || this.elements.thumbnails) {
            activeMedia.parentElement.scrollTo({ left: activeMedia.offsetLeft });
          }
          const activeMediaRect = activeMedia.getBoundingClientRect();
          if (activeMediaRect.top > -0.5) return;
          const top = activeMediaRect.top + window.scrollY;
          window.scrollTo({ top: top, behavior: 'smooth' });
        });
        this.playActiveMedia(activeMedia);

        if (!this.elements.thumbnails) return;
        const activeThumbnail = this.elements.thumbnails.querySelector(`[data-target="${mediaId}"]`);
        this.setActiveThumbnail(activeThumbnail);
        this.announceLiveRegion(activeMedia, activeThumbnail.dataset.mediaPosition);
      }

      setActiveThumbnail(thumbnail) {
        if (!this.elements.thumbnails || !thumbnail) return;

        this.elements.thumbnails
          .querySelectorAll('button')
          .forEach((element) => element.removeAttribute('aria-current'));
        thumbnail.querySelector('button').setAttribute('aria-current', true);
        if (this.elements.thumbnails.isSlideVisible(thumbnail, 10)) return;

        this.elements.thumbnails.slider.scrollTo({ left: thumbnail.offsetLeft });
      }

      announceLiveRegion(activeItem, position) {
        const image = activeItem.querySelector('.product__modal-opener--image img');
        if (!image) return;
        image.onload = () => {
          this.elements.liveRegion.setAttribute('aria-hidden', false);
          this.elements.liveRegion.innerHTML = window.accessibilityStrings.imageAvailable.replace('[index]', position);
          setTimeout(() => {
            this.elements.liveRegion.setAttribute('aria-hidden', true);
          }, 2000);
        };
        image.src = image.src;
      }

      playActiveMedia(activeItem) {
        window.pauseAllMedia();
        const deferredMedia = activeItem.querySelector('.deferred-media');
        if (deferredMedia) deferredMedia.loadContent(false);
      }

      preventStickyHeader() {
        this.stickyHeader = this.stickyHeader || document.querySelector('sticky-header');
        if (!this.stickyHeader) return;
        this.stickyHeader.dispatchEvent(new Event('preventHeaderReveal'));
      }

      removeListSemantic() {
        if (!this.elements.viewer.slider) return;
        this.elements.viewer.slider.setAttribute('role', 'presentation');
        this.elements.viewer.sliderItems.forEach((slide) => slide.setAttribute('role', 'presentation'));
      }
    }
  );
}
```

## `assets/mobile-enhancements.js`

```javascript
/**
 * WINGSTONE MOBILE ENHANCEMENTS
 * Smooth interactions, touch gestures, and performance improvements
 * Place in assets/mobile-enhancements.js
 */

(function () {
  'use strict';

  /* ─── Utilities ─────────────────────────────────────── */
  const isMobile = () => window.innerWidth <= 640;
  const isTouch  = () => ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cartDrawer = document.querySelector('[data-cart-drawer]');
  const preventDefault = (e) => { e.preventDefault(); };

  /* ─── 1. Remove no-js class (already in theme.js) ───── */
  document.documentElement.classList.remove('no-js');

  /* ─── 2. Header scroll shrink effect ────────────────── */
  const header = document.querySelector('.site-header');
  if (header) {
    let lastScrollY = 0;
    let ticking = false;

    const onScroll = () => {
      const scrollY = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(() => {
          // Shrink header on scroll down, restore on scroll up
          if (scrollY > 80 && scrollY > lastScrollY) {
            header.classList.add('is-compact');
          } else if (scrollY < lastScrollY || scrollY < 40) {
            header.classList.remove('is-compact');
          }

          // Hide on fast scroll down (mobile), show on scroll up
          if (isMobile()) {
            if (scrollY > 200 && scrollY - lastScrollY > 4) {
              header.style.transform = 'translateY(-100%)';
            } else if (lastScrollY - scrollY > 2) {
              header.style.transform = 'translateY(0)';
            }
          }

          lastScrollY = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const clearPageScrollLock = () => {
    document.body.style.removeProperty('overflow');
    document.body.classList.remove('cart-drawer-open');
    document.body.removeEventListener('touchmove', preventDefault);
  };

  clearPageScrollLock();

  /* ─── 3. Smooth image gallery swipe (PDP) ───────────── */
  const mainImg = document.getElementById('pdpMainImgEl');
  const thumbsWrap = document.getElementById('pdpThumbs');

  if (mainImg && thumbsWrap && isTouch()) {
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    const thumbs = [...thumbsWrap.querySelectorAll('.pdp-thumb')];
    let currentIndex = 0;

    const goToThumb = (index) => {
      if (index < 0 || index >= thumbs.length) return;
      currentIndex = index;
      const thumb = thumbs[index];
      if (!thumb) return;

      thumbs.forEach((t, i) => {
        t.classList.toggle('is-active', i === index);
        t.setAttribute('aria-current', i === index ? 'true' : 'false');
      });

      if (thumb.dataset.full) {
        mainImg.style.opacity = '0.6';
        mainImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
          mainImg.src = thumb.dataset.full;
          mainImg.alt = thumb.dataset.alt || '';
          mainImg.style.opacity = '1';
          mainImg.style.transform = 'scale(1)';
        }, prefersReducedMotion ? 0 : 120);
      }
    };

    // Add smooth transition to main image
    if (!prefersReducedMotion) {
      mainImg.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    }

    // Touch swipe on main image
    const mainImgContainer = mainImg.closest('.pdp-main-img') || mainImg.parentElement;

    mainImgContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = false;
    }, { passive: true });

    mainImgContainer.addEventListener('touchmove', (e) => {
      const dx = Math.abs(e.touches[0].clientX - startX);
      const dy = Math.abs(e.touches[0].clientY - startY);
      if (dx > dy && dx > 8) {
        isDragging = true;
      }
    }, { passive: true });

    mainImgContainer.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goToThumb(Math.min(currentIndex + 1, thumbs.length - 1));
        } else {
          goToThumb(Math.max(currentIndex - 1, 0));
        }
      }
    }, { passive: true });

    // Set current index tracking when thumbs are clicked
    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => {
        currentIndex = i;
      });
    });
  }

  /* ─── 4. Size button haptic-style feedback ───────────── */
  document.querySelectorAll('.pdp-size-btn:not(.disabled)').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!prefersReducedMotion) {
        btn.animate([
          { transform: 'scale(0.94)' },
          { transform: 'scale(1.04)' },
          { transform: 'scale(1)' }
        ], { duration: 200, easing: 'ease-out' });
      }

      // Haptic feedback if supported
      if (navigator.vibrate) {
        navigator.vibrate(8);
      }
    });
  });

  /* ─── 5. Smooth quantity +/- with long-press ─────────── */
  const qtyInput = document.getElementById('qtyInput');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus  = document.getElementById('qtyPlus');

  if (qtyInput && qtyMinus && qtyPlus) {
    let pressTimer = null;
    let pressInterval = null;

    const changeQty = (delta) => {
      const current = parseInt(qtyInput.value, 10) || 1;
      const next = Math.max(1, Math.min(99, current + delta));
      qtyInput.value = next;
      qtyInput.dispatchEvent(new Event('change', { bubbles: true }));
    };

    const startPress = (btn, delta) => {
      changeQty(delta);
      pressTimer = setTimeout(() => {
        pressInterval = setInterval(() => changeQty(delta), 80);
      }, 400);
    };

    const endPress = () => {
      clearTimeout(pressTimer);
      clearInterval(pressInterval);
    };

    [
      [qtyMinus, -1],
      [qtyPlus, +1]
    ].forEach(([btn, delta]) => {
      btn.addEventListener('mousedown', () => startPress(btn, delta));
      btn.addEventListener('touchstart', () => startPress(btn, delta), { passive: true });
      btn.addEventListener('mouseup', endPress);
      btn.addEventListener('mouseleave', endPress);
      btn.addEventListener('touchend', endPress);
      btn.addEventListener('touchcancel', endPress);
    });
  }

  /* ─── 6. Cart drawer swipe-to-close on mobile ────────── */
  const cartDrawer = document.querySelector('[data-cart-drawer]');
  if (cartDrawer && isTouch()) {
    let touchStartX = 0;

    cartDrawer.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    cartDrawer.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (diff > 80) {
        // Swipe right to close
        const closeBtn = cartDrawer.querySelector('[data-cart-drawer-close]');
        if (closeBtn) closeBtn.click();
      }
    }, { passive: true });
  }

  /* ─── 7. Scroll-based reveal for sections ────────────── */
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealTargets = document.querySelectorAll(
      '.product-card, .feature-item, .section-title, .eyebrow, .hero__stat'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        entry.target.animate([
          { opacity: 0, transform: 'translateY(16px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], {
          duration: 480,
          delay: (i % 4) * 60,
          easing: 'cubic-bezier(0.2, 0, 0, 1)',
          fill: 'forwards'
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

  /* ─── 8. Product card image lazyload fade ────────────── */
  if (!prefersReducedMotion) {
    document.querySelectorAll('.product-card img[loading="lazy"]').forEach((img) => {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.35s ease';

      if (img.complete) {
        img.style.opacity = '1';
      } else {
        img.addEventListener('load', () => {
          img.style.opacity = '1';
        });
      }
    });
  }

  /* ─── 9. Sticky bar add-to-cart – visual feedback ────── */
  const mobileAddBtn = document.querySelector('[data-mobile-add-to-cart]');
  const mainAddBtn   = document.getElementById('addToCartBtn');

  if (mobileAddBtn && mainAddBtn) {
    mobileAddBtn.addEventListener('click', () => {
      mainAddBtn.click();

      if (!prefersReducedMotion) {
        mobileAddBtn.animate([
          { transform: 'scale(0.96)' },
          { transform: 'scale(1)' }
        ], { duration: 180, easing: 'ease-out' });
      }
    });
  }

  /* ─── 10. Prevent body scroll when overlays open ─────── */
  const lockBodyScroll = (lock) => {
    if (isMobile()) {
      clearPageScrollLock();
      return;
    }

    document.body.style.overflow = lock ? 'hidden' : '';
    // iOS fix: also prevent touchmove
    if (lock) {
      document.body.addEventListener('touchmove', preventDefault, { passive: false });
    } else {
      document.body.removeEventListener('touchmove', preventDefault);
    }
  };

  // Watch for cart drawer
  const observer = new MutationObserver(() => {
    const drawer = document.querySelector('[data-cart-drawer]');
    if (drawer) {
      lockBodyScroll(drawer.classList.contains('is-open'));
    }
  });

  if (cartDrawer) {
    lockBodyScroll(cartDrawer.classList.contains('is-open'));
    observer.observe(cartDrawer, { attributes: true, attributeFilter: ['class'] });
  }

  window.addEventListener('pageshow', () => lockBodyScroll(false));

  /* ─── 11. Smooth anchor link scrolling ───────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();

      const headerH = header ? header.offsetHeight + 16 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;

      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });

  /* ─── 12. Keyboard nav for color cards ───────────────── */
  document.querySelectorAll('.pdp-color-grid').forEach((grid) => {
    const cards = [...grid.querySelectorAll('.pdp-color-card')];
    cards.forEach((card, i) => {
      card.setAttribute('tabindex', '0');
      card.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          cards[(i + 1) % cards.length].focus();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          cards[(i - 1 + cards.length) % cards.length].focus();
        }
      });
    });
  });

  /* ─── 13. Size chart table – make scrollable on mobile ── */
  document.querySelectorAll('.pdp-sc-table').forEach((table) => {
    if (!table.closest('.pdp-sc-table-wrap')) {
      const wrap = document.createElement('div');
      wrap.className = 'pdp-sc-table-wrap';
      wrap.style.cssText = 'overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:8px;';
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    }
  });

  /* ─── 14. Active state for mobile touch links ─────────── */
  if (isTouch()) {
    document.querySelectorAll('.product-card, .pdp-color-card, .pdp-size-btn').forEach((el) => {
      el.addEventListener('touchstart', () => {
        el.classList.add('touch-active');
      }, { passive: true });

      el.addEventListener('touchend', () => {
        setTimeout(() => el.classList.remove('touch-active'), 200);
      }, { passive: true });

      el.addEventListener('touchcancel', () => {
        el.classList.remove('touch-active');
      }, { passive: true });
    });
  }

  /* ─── 15. Fix footer brand text rendering ────────────── */
  // Force footer brand to reflow if it renders incorrectly
  const footerBrand = document.querySelector('.site-footer__brand');
  if (footerBrand) {
    footerBrand.style.display = 'block';
    footerBrand.style.whiteSpace = 'nowrap';
    footerBrand.style.overflow = 'hidden';
    footerBrand.style.textOverflow = 'ellipsis';
    footerBrand.style.wordBreak = 'normal';
    footerBrand.style.letterSpacing = '0.12em';
  }

})();
```

## `assets/mobile-fixes.css`

```css
/* =====================================================
   WINGSTONE MOBILE & RESPONSIVE FIXES
   Drop this into assets/mobile-fixes.css and add:
   {{ 'mobile-fixes.css' | asset_url | stylesheet_tag }}
   to layout/theme.liquid <head>
   ===================================================== */

/* ─── 1. GLOBAL RESETS & SMOOTH EXPERIENCE ─────────── */
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


button,
a,
input,
select,
textarea,
[role="button"],
[data-cart-drawer-toggle],
[data-menu-toggle] {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

img, video {
  max-width: 100%;
  height: auto;
}

/* ─── 2. FIX BROKEN FOOTER WORDMARK ────────────────── */
/* The stacked "W I N G S T O N E" letters is a font-loading /
   overflow issue. Force it to render correctly on all screens. */

.site-footer__brand {
  font-size: clamp(1.6rem, 8vw, 2.4rem) !important;
  word-break: normal !important;
  overflow-wrap: normal !important;
  white-space: nowrap !important;
  line-height: 1.2 !important;
  letter-spacing: 0.12em !important;
}

/* Footer layout fix – stacked on mobile, side-by-side on desktop */
.site-footer__inner {
  display: grid !important;
  grid-template-columns: 1fr !important;
  gap: 2rem !important;
  text-align: left !important;
}

@media (min-width: 640px) {
  .site-footer__inner {
    grid-template-columns: 1fr auto !important;
    align-items: start !important;
  }
}

.site-footer__meta-links {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 0.6rem 1.2rem !important;
  justify-content: flex-start !important;
}

/* ─── 3. HEADER IMPROVEMENTS ────────────────────────── */
.site-header {
  /* Ensure header doesn't jump on scroll */
  will-change: transform;
  backface-visibility: hidden;
}

/* Better touch targets for header actions */
.site-header__action {
  min-width: 44px !important;
  min-height: 44px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.menu-toggle {
  min-width: 44px !important;
  min-height: 44px !important;
}

/* Promo banner – prevent layout shift */
.site-header__promo {
  overflow: hidden !important;
  min-height: 28px !important;
}

/* Mobile nav – full-screen overlay feel */
@media (max-width: 900px) {
  .site-nav {
    top: 100% !important;
    left: 0 !important;
    right: 0 !important;
    border-radius: 0 0 12px 12px !important;
    padding: 0.5rem 1rem 1rem !important;
    border-top: 0 !important;
    gap: 0 !important;
  }

  .site-nav a {
    display: block !important;
    padding: 0.85rem 0 !important;
    font-size: 0.9rem !important;
    border-bottom: 1px solid color-mix(in srgb, var(--color-line), transparent 30%) !important;
  }

  .site-nav a:last-child {
    border-bottom: 0 !important;
  }
}

/* ─── 4. HERO SECTION MOBILE FIX ────────────────────── */
.hero--tones {
  min-height: 100svh !important;
}

@media (max-width: 640px) {
  .hero--tones {
    min-height: calc(100svh - 100px) !important;
  }

  .hero__offer {
    font-size: clamp(2.2rem, 12vw, 3.5rem) !important;
    line-height: 1.05 !important;
  }

  .hero__text {
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin-bottom: 1.5rem !important;
  }

  .hero__backdrop {
    font-size: clamp(3rem, 20vw, 6rem) !important;
    white-space: normal !important;
    word-break: break-word !important;
    line-height: 0.85 !important;
    opacity: 0.04 !important;
  }

  .hero__buttons {
    flex-direction: column !important;
    gap: 0.6rem !important;
  }

  .hero__buttons .button {
    width: 100% !important;
    text-align: center !important;
  }

  .hero__stats {
    gap: 1rem !important;
    margin-top: 2rem !important;
  }

  .hero__stat strong {
    font-size: 1.6rem !important;
  }

  .hero__stat-divider {
    display: none !important;
  }
}

/* ─── 5. PRODUCT GRID RESPONSIVE ────────────────────── */
.product-grid {
  display: grid !important;
  gap: clamp(0.75rem, 2.5vw, 1.5rem) !important;
}

@media (max-width: 399px) {
  .product-grid {
    grid-template-columns: 1fr !important;
  }
}

@media (min-width: 400px) and (max-width: 699px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (min-width: 700px) and (max-width: 991px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (min-width: 992px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

/* Product card touch improvements */
.product-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
  border-radius: 10px !important;
  overflow: hidden !important;
}

@media (hover: none) {
  /* Disable hover effects on touch devices */
  .product-card:hover {
    transform: none !important;
  }
  .product-card:hover img {
    transform: none !important;
  }
  .product-card__image .hover-image {
    display: none !important;
  }
  .product-card:hover .hover-image {
    display: none !important;
  }
  .product-card::after {
    display: none !important;
  }
}

.product-card__button {
  min-height: 44px !important;
  font-size: 0.82rem !important;
  border-radius: 8px !important;
}

/* ─── 6. PDP – PRODUCT DETAIL PAGE MOBILE FIX ───────── */

/* Two-column layout: stack on mobile */
.pdp-layout {
  display: grid !important;
  gap: 1.5rem !important;
}

@media (max-width: 860px) {
  .pdp-layout {
    grid-template-columns: 1fr !important;
  }
}

@media (min-width: 861px) {
  .pdp-layout {
    grid-template-columns: minmax(0, 520px) minmax(0, 1fr) !important;
    align-items: start !important;
  }
}

/* Gallery: horizontal thumbs on mobile */
@media (max-width: 640px) {
  .pdp-gallery {
    flex-direction: column-reverse !important;
    gap: 10px !important;
    position: static !important;
  }

  .pdp-thumbs {
    flex-direction: row !important;
    max-height: none !important;
    overflow-x: auto !important;
    overflow-y: visible !important;
    padding-bottom: 4px !important;
    -webkit-overflow-scrolling: touch !important;
    scrollbar-width: none !important;
    gap: 8px !important;
  }

  .pdp-thumbs::-webkit-scrollbar {
    display: none !important;
  }

  .pdp-thumb {
    flex: 0 0 60px !important;
    width: 60px !important;
    height: 60px !important;
  }

  .pdp-main-img {
    aspect-ratio: 1 / 1 !important;
    border-radius: 12px !important;
  }
}

/* Size buttons – bigger touch targets */
.pdp-size-btn {
  min-width: 52px !important;
  min-height: 46px !important;
  font-size: 14px !important;
  border-radius: 8px !important;
  cursor: pointer !important;
  transition: all 0.15s ease !important;
  -webkit-tap-highlight-color: transparent !important;
  user-select: none !important;
}

.pdp-size-grid {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 8px !important;
}

/* Color cards – better mobile scroll */
.pdp-color-grid {
  display: flex !important;
  flex-wrap: nowrap !important;
  gap: 10px !important;
  overflow-x: auto !important;
  padding-bottom: 6px !important;
  -webkit-overflow-scrolling: touch !important;
  scrollbar-width: none !important;
  scroll-snap-type: x mandatory !important;
}

.pdp-color-grid::-webkit-scrollbar {
  display: none !important;
}

.pdp-color-card {
  flex: 0 0 72px !important;
  scroll-snap-align: start !important;
  cursor: pointer !important;
  border-radius: 10px !important;
  overflow: hidden !important;
  transition: transform 0.15s ease, border-color 0.15s ease !important;
}

@media (min-width: 480px) {
  .pdp-color-grid {
    flex-wrap: wrap !important;
    overflow-x: visible !important;
  }
}

/* Quantity row */
.pdp-qty-row {
  display: flex !important;
  align-items: stretch !important;
}

.pdp-qty-btn {
  min-width: 44px !important;
  min-height: 44px !important;
  font-size: 20px !important;
  cursor: pointer !important;
  transition: background 0.15s ease !important;
}

.pdp-qty-input {
  min-height: 44px !important;
  font-size: 16px !important; /* prevents iOS zoom on focus */
}

/* ─── 7. STICKY MOBILE CTA BAR ───────────────────────── */
/* Fix the bottom bar – better spacing, safe area support */
.pdp-mobile-bar {
  display: none !important;
}

@media (max-width: 640px) {
  .pdp-mobile-bar {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 10px !important;
    position: fixed !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    z-index: 100 !important;
    padding: 12px 16px !important;
    padding-bottom: calc(12px + env(safe-area-inset-bottom)) !important;
    background: rgba(255, 255, 255, 0.96) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border-top: 1px solid rgba(0, 0, 0, 0.08) !important;
    box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.10) !important;
  }

  .pdp-mobile-bar .pdp-btn {
    height: 50px !important;
    border-radius: 10px !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    letter-spacing: 0.04em !important;
    max-width: none !important;
    margin: 0 !important;
  }

  .pdp-mobile-bar .pdp-btn--cart {
    background: var(--color-ink, #04102f) !important;
    color: var(--color-paper, #f9f9ff) !important;
    box-shadow: 0 4px 14px color-mix(in srgb, var(--color-ink, #04102f), transparent 82%) !important;
  }

  .pdp-mobile-bar .pdp-btn--buy {
    background: linear-gradient(135deg, #735c00 0%, var(--color-accent, #cba72f) 50%, #e8d48a 100%) !important;
    color: #fff !important;
    box-shadow: 0 4px 14px color-mix(in srgb, var(--color-accent, #cba72f), transparent 76%) !important;
  }

  /* Make room for the sticky bar */
  .pdp {
    padding-bottom: calc(90px + env(safe-area-inset-bottom)) !important;
  }

  /* Hide desktop CTAs on mobile to avoid duplication */
  .pdp-cta {
    display: none !important;
  }
}

/* ─── 8. TRUST BADGES – RESPONSIVE ──────────────────── */
.pdp-trust {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 8px !important;
}

@media (min-width: 480px) {
  .pdp-trust {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

.pdp-trust-item {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 5px !important;
  padding: 12px 8px !important;
  border-radius: 10px !important;
  font-size: 10px !important;
  text-align: center !important;
  line-height: 1.3 !important;
}

/* ─── 9. SIZE CHART MODAL – MOBILE FIX ──────────────── */
.pdp-modal-backdrop {
  padding: 12px !important;
  align-items: flex-end !important;
}

@media (min-width: 480px) {
  .pdp-modal-backdrop {
    align-items: center !important;
  }
}

.pdp-modal {
  width: 100% !important;
  max-width: 560px !important;
  max-height: 85vh !important;
  border-radius: 16px !important;
  padding: 20px !important;
  overscroll-behavior: contain !important;
}

@media (max-width: 480px) {
  .pdp-modal {
    border-radius: 16px 16px 0 0 !important;
    max-height: 80vh !important;
  }
}

/* Scrollable table on mobile */
.pdp-sc-table-wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 8px;
}

.pdp-sc-table {
  min-width: 320px !important;
}

/* ─── 10. CART DRAWER – MOBILE IMPROVEMENTS ─────────── */
@media (max-width: 480px) {
  .cart-drawer {
    width: 100vw !important;
    border-left: 0 !important;
  }
}

.cart-drawer__item {
  gap: 12px !important;
}

.cart-drawer__close {
  min-width: 44px !important;
  min-height: 44px !important;
}

/* ─── 11. NEWSLETTER SECTION ────────────────────────── */
@media (max-width: 560px) {
  .newsletter form {
    flex-direction: column !important;
    gap: 10px !important;
    padding: 12px !important;
    border-radius: 14px !important;
  }

  .newsletter .field {
    border-color: var(--color-line) !important;
    border-radius: 8px !important;
  }

  .newsletter .button {
    width: 100% !important;
    border-radius: 8px !important;
  }
}

/* ─── 12. COLLECTION PAGE ───────────────────────────── */
@media (max-width: 640px) {
  .collection-toolbar {
    gap: 1rem !important;
  }

  .section-title {
    font-size: clamp(1.8rem, 8vw, 2.8rem) !important;
  }
}

/* ─── 13. SMOOTH SCROLL & ANIMATIONS ────────────────── */

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .site-header__promo-track,
  .hero__ticker-track {
    animation: none !important;
  }
}

/* Smooth page transitions */
.js-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.js-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── 14. TOAST NOTIFICATION ────────────────────────── */
.cart-toast {
  position: fixed !important;
  bottom: 80px !important;
  right: 16px !important;
  left: auto !important;
  z-index: 200 !important;
}

@media (max-width: 640px) {
  .cart-toast {
    bottom: calc(80px + env(safe-area-inset-bottom)) !important;
    right: 12px !important;
    left: 12px !important;
  }

  .cart-toast__inner {
    text-align: center !important;
    border-radius: 10px !important;
  }
}

/* ─── 15. FORM INPUTS – PREVENT IOS ZOOM ────────────── */
/* iOS zooms in on any input with font-size < 16px */
input[type="text"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="password"],
textarea,
select {
  font-size: 16px !important;
}

/* ─── 16. BREADCRUMB – PREVENT OVERFLOW ─────────────── */
.pdp-breadcrumb {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: flex !important;
  flex-wrap: wrap !important;
}

.pdp-breadcrumb > *:last-child {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  max-width: 200px !important;
}

/* ─── 17. PAGE WIDTH CONTAINER ──────────────────────── */
.page-width {
  width: min(1220px, calc(100% - 32px)) !important;
  margin: 0 auto !important;
}

@media (max-width: 400px) {
  .page-width {
    width: min(1220px, calc(100% - 24px)) !important;
  }
}

/* ─── 18. BUTTON TOUCH IMPROVEMENTS ─────────────────── */
.button,
button,
[role="button"] {
  min-height: 44px !important;
  cursor: pointer !important;
}

/* Disabled state feedback */
.button:disabled,
button:disabled,
.pdp-btn:disabled {
  opacity: 0.5 !important;
  cursor: not-allowed !important;
  pointer-events: none !important;
}

/* ─── 19. PRICE DISPLAY FORMATTING ──────────────────── */
.pdp-price-block {
  padding: 14px 0 !important;
}

@media (max-width: 480px) {
  .pdp-price-main {
    font-size: 28px !important;
  }
}

/* ─── 20. FEATURE BAND GRID ─────────────────────────── */
@media (max-width: 700px) {
  .feature-grid {
    grid-template-columns: 1fr !important;
  }

  .feature-item {
    min-height: auto !important;
    padding: 1.25rem !important;
  }
}

@media (min-width: 701px) and (max-width: 1000px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

/* ─── 21. PRODUCT INFO STICKY PANEL ─────────────────── */
@media (max-width: 860px) {
  .product__info,
  .pdp-info {
    position: static !important;
    top: auto !important;
  }
}

/* ─── 22. CART PAGE TABLE ───────────────────────────── */
@media (max-width: 560px) {
  .cart-table,
  .cart-table tbody,
  .cart-table tr,
  .cart-table td {
    display: block !important;
    width: 100% !important;
  }

  .cart-table thead {
    display: none !important;
  }

  .cart-table td {
    padding: 0.75rem 0 !important;
    border: 0 !important;
    border-bottom: 1px solid var(--color-line) !important;
  }

  .cart-table tr {
    margin-bottom: 1rem !important;
    padding: 1rem !important;
    border: 1px solid var(--color-line) !important;
    border-radius: 10px !important;
  }

  .cart-total {
    flex-direction: column !important;
    align-items: stretch !important;
  }

  .cart-total .button {
    width: 100% !important;
    text-align: center !important;
  }
}

/* ─── 23. SCROLLBAR STYLING (WEBKIT) ────────────────── */
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--color-line);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-steel);
}

/* ─── 24. FOCUS VISIBLE – ACCESSIBILITY ─────────────── */
:focus-visible {
  outline: 2px solid var(--color-accent) !important;
  outline-offset: 3px !important;
  border-radius: 4px !important;
}

:focus:not(:focus-visible) {
  outline: none !important;
}

/* ─── 25. IMAGE LOADING PLACEHOLDER ─────────────────── */
img {
  background: var(--color-frost, #f4f7fd);
}

img[loading="lazy"] {
  transition: opacity 0.3s ease;
}

/* ─── 26. PDP TITLE ON MOBILE ───────────────────────── */
@media (max-width: 480px) {
  .pdp-title {
    font-size: 18px !important;
    line-height: 1.3 !important;
    margin-bottom: 8px !important;
  }

  .pdp-vendor {
    font-size: 11px !important;
    letter-spacing: 1px !important;
  }
}

/* ─── 27. PRODUCT BADGE POSITIONING ─────────────────── */
.pdp-badge {
  font-size: 10px !important;
  padding: 4px 8px !important;
  border-radius: 4px !important;
}

/* ─── 28. OPTION LABEL LAYOUT ───────────────────────── */
@media (max-width: 400px) {
  .pdp-option-label {
    flex-wrap: wrap !important;
    gap: 4px !important;
  }
}

/* ─── 29. PAGE SECTION SPACING ──────────────────────── */
@media (max-width: 480px) {
  .section {
    padding: 48px 0 !important;
  }
}

/* ─── 30. LOGO SIZE RESPONSIVE ──────────────────────── */
@media (max-width: 360px) {
  .site-header__logo {
    max-width: 80px !important;
  }
}
```

## `assets/pickup-availability.js`

```javascript
if (!customElements.get('pickup-availability')) {
  customElements.define(
    'pickup-availability',
    class PickupAvailability extends HTMLElement {
      constructor() {
        super();

        if (!this.hasAttribute('available')) return;

        this.errorHtml = this.querySelector('template').content.firstElementChild.cloneNode(true);
        this.onClickRefreshList = this.onClickRefreshList.bind(this);
        this.fetchAvailability(this.dataset.variantId);
      }

      fetchAvailability(variantId) {
        if (!variantId) return;

        let rootUrl = this.dataset.rootUrl;
        if (!rootUrl.endsWith('/')) {
          rootUrl = rootUrl + '/';
        }
        const variantSectionUrl = `${rootUrl}variants/${variantId}/?section_id=pickup-availability`;

        fetch(variantSectionUrl)
          .then((response) => response.text())
          .then((text) => {
            const sectionInnerHTML = new DOMParser()
              .parseFromString(text, 'text/html')
              .querySelector('.shopify-section');
            this.renderPreview(sectionInnerHTML);
          })
          .catch((e) => {
            const button = this.querySelector('button');
            if (button) button.removeEventListener('click', this.onClickRefreshList);
            this.renderError();
          });
      }

      onClickRefreshList() {
        this.fetchAvailability(this.dataset.variantId);
      }

      update(variant) {
        if (variant?.available) {
          this.fetchAvailability(variant.id);
        } else {
          this.removeAttribute('available');
          this.innerHTML = '';
        }
      }

      renderError() {
        this.innerHTML = '';
        this.appendChild(this.errorHtml);

        this.querySelector('button').addEventListener('click', this.onClickRefreshList);
      }

      renderPreview(sectionInnerHTML) {
        const drawer = document.querySelector('pickup-availability-drawer');
        if (drawer) drawer.remove();
        if (!sectionInnerHTML.querySelector('pickup-availability-preview')) {
          this.innerHTML = '';
          this.removeAttribute('available');
          return;
        }

        this.innerHTML = sectionInnerHTML.querySelector('pickup-availability-preview').outerHTML;
        this.setAttribute('available', '');

        document.body.appendChild(sectionInnerHTML.querySelector('pickup-availability-drawer'));
        const colorClassesToApply = this.dataset.productPageColorScheme.split(' ');
        colorClassesToApply.forEach((colorClass) => {
          document.querySelector('pickup-availability-drawer').classList.add(colorClass);
        });

        const button = this.querySelector('button');
        if (button)
          button.addEventListener('click', (evt) => {
            document.querySelector('pickup-availability-drawer').show(evt.target);
          });
      }
    }
  );
}

if (!customElements.get('pickup-availability-drawer')) {
  customElements.define(
    'pickup-availability-drawer',
    class PickupAvailabilityDrawer extends HTMLElement {
      constructor() {
        super();

        this.onBodyClick = this.handleBodyClick.bind(this);

        this.querySelector('button').addEventListener('click', () => {
          this.hide();
        });

        this.addEventListener('keyup', (event) => {
          if (event.code.toUpperCase() === 'ESCAPE') this.hide();
        });
      }

      handleBodyClick(evt) {
        const target = evt.target;
        if (
          target != this &&
          !target.closest('pickup-availability-drawer') &&
          target.id != 'ShowPickupAvailabilityDrawer'
        ) {
          this.hide();
        }
      }

      hide() {
        this.removeAttribute('open');
        document.body.removeEventListener('click', this.onBodyClick);
        document.body.classList.remove('overflow-hidden');
        removeTrapFocus(this.focusElement);
      }

      show(focusElement) {
        this.focusElement = focusElement;
        this.setAttribute('open', '');
        document.body.addEventListener('click', this.onBodyClick);
        document.body.classList.add('overflow-hidden');
        trapFocus(this);
      }
    }
  );
}
```

## `assets/predictive-search.js`

```javascript
class PredictiveSearch extends SearchForm {
  constructor() {
    super();
    this.cachedResults = {};
    this.predictiveSearchResults = this.querySelector('[data-predictive-search]');
    this.allPredictiveSearchInstances = document.querySelectorAll('predictive-search');
    this.isOpen = false;
    this.abortController = new AbortController();
    this.searchTerm = '';

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.input.form.addEventListener('submit', this.onFormSubmit.bind(this));

    this.input.addEventListener('focus', this.onFocus.bind(this));
    this.addEventListener('focusout', this.onFocusOut.bind(this));
    this.addEventListener('keyup', this.onKeyup.bind(this));
    this.addEventListener('keydown', this.onKeydown.bind(this));
  }

  getQuery() {
    return this.input.value.trim();
  }

  onChange() {
    super.onChange();
    const newSearchTerm = this.getQuery();
    if (!this.searchTerm || !newSearchTerm.startsWith(this.searchTerm)) {
      this.querySelector('#predictive-search-results-groups-wrapper')?.remove();
    }

    this.updateSearchForTerm(this.searchTerm, newSearchTerm);

    this.searchTerm = newSearchTerm;

    if (!this.searchTerm.length) {
      this.close(true);
      return;
    }

    this.getSearchResults(this.searchTerm);
  }

  onFormSubmit(event) {
    if (!this.getQuery().length || this.querySelector('[aria-selected="true"] a')) event.preventDefault();
  }

  onFormReset(event) {
    super.onFormReset(event);
    if (super.shouldResetForm()) {
      this.searchTerm = '';
      this.abortController.abort();
      this.abortController = new AbortController();
      this.closeResults(true);
    }
  }

  onFocus() {
    const currentSearchTerm = this.getQuery();

    if (!currentSearchTerm.length) return;

    if (this.searchTerm !== currentSearchTerm) {
      this.onChange();
    } else if (this.getAttribute('results') === 'true') {
      this.open();
    } else {
      this.getSearchResults(this.searchTerm);
    }
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  onKeyup(event) {
    if (!this.getQuery().length) this.close(true);
    event.preventDefault();

    switch (event.code) {
      case 'ArrowUp':
        this.switchOption('up');
        break;
      case 'ArrowDown':
        this.switchOption('down');
        break;
      case 'Enter':
        this.selectOption();
        break;
    }
  }

  onKeydown(event) {
    if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
      event.preventDefault();
    }
  }

  updateSearchForTerm(previousTerm, newTerm) {
    const searchForTextElement = this.querySelector('[data-predictive-search-search-for-text]');
    const currentButtonText = searchForTextElement?.innerText;
    if (currentButtonText) {
      if (currentButtonText.match(new RegExp(previousTerm, 'g')).length > 1) {
        return;
      }
      const newButtonText = currentButtonText.replace(previousTerm, newTerm);
      searchForTextElement.innerText = newButtonText;
    }
  }

  switchOption(direction) {
    if (!this.getAttribute('open')) return;

    const moveUp = direction === 'up';
    const selectedElement = this.querySelector('[aria-selected="true"]');

    const allVisibleElements = Array.from(this.querySelectorAll('li, button.predictive-search__item')).filter(
      (element) => element.offsetParent !== null
    );
    let activeElementIndex = 0;

    if (moveUp && !selectedElement) return;

    let selectedElementIndex = -1;
    let i = 0;

    while (selectedElementIndex === -1 && i <= allVisibleElements.length) {
      if (allVisibleElements[i] === selectedElement) {
        selectedElementIndex = i;
      }
      i++;
    }

    this.statusElement.textContent = '';

    if (!moveUp && selectedElement) {
      activeElementIndex = selectedElementIndex === allVisibleElements.length - 1 ? 0 : selectedElementIndex + 1;
    } else if (moveUp) {
      activeElementIndex = selectedElementIndex === 0 ? allVisibleElements.length - 1 : selectedElementIndex - 1;
    }

    if (activeElementIndex === selectedElementIndex) return;

    const activeElement = allVisibleElements[activeElementIndex];

    activeElement.setAttribute('aria-selected', true);
    if (selectedElement) selectedElement.setAttribute('aria-selected', false);

    this.input.setAttribute('aria-activedescendant', activeElement.id);
  }

  selectOption() {
    const selectedOption = this.querySelector('[aria-selected="true"] a, button[aria-selected="true"]');

    if (selectedOption) selectedOption.click();
  }

  getSearchResults(searchTerm) {
    const queryKey = searchTerm.replace(' ', '-').toLowerCase();
    this.setLiveRegionLoadingState();

    if (this.cachedResults[queryKey]) {
      this.renderSearchResults(this.cachedResults[queryKey]);
      return;
    }

    fetch(`${routes.predictive_search_url}?q=${encodeURIComponent(searchTerm)}&section_id=predictive-search`, {
      signal: this.abortController.signal,
    })
      .then((response) => {
        if (!response.ok) {
          var error = new Error(response.status);
          this.close();
          throw error;
        }

        return response.text();
      })
      .then((text) => {
        const resultsMarkup = new DOMParser()
          .parseFromString(text, 'text/html')
          .querySelector('#shopify-section-predictive-search').innerHTML;
        this.allPredictiveSearchInstances.forEach((predictiveSearchInstance) => {
          predictiveSearchInstance.cachedResults[queryKey] = resultsMarkup;
        });
        this.renderSearchResults(resultsMarkup);
      })
      .catch((error) => {
        if (error?.code === 20) {
          return;
        }
        this.close();
        throw error;
      });
  }

  setLiveRegionLoadingState() {
    this.statusElement = this.statusElement || this.querySelector('.predictive-search-status');
    this.loadingText = this.loadingText || this.getAttribute('data-loading-text');

    this.setLiveRegionText(this.loadingText);
    this.setAttribute('loading', true);
  }

  setLiveRegionText(statusText) {
    this.statusElement.setAttribute('aria-hidden', 'false');
    this.statusElement.textContent = statusText;

    setTimeout(() => {
      this.statusElement.setAttribute('aria-hidden', 'true');
    }, 1000);
  }

  renderSearchResults(resultsMarkup) {
    this.predictiveSearchResults.innerHTML = resultsMarkup;
    this.setAttribute('results', true);

    this.setLiveRegionResults();
    this.open();
  }

  setLiveRegionResults() {
    this.removeAttribute('loading');
    this.setLiveRegionText(this.querySelector('[data-predictive-search-live-region-count-value]').textContent);
  }

  getResultsMaxHeight() {
    this.resultsMaxHeight =
      window.innerHeight - document.querySelector('.section-header')?.getBoundingClientRect().bottom;
    return this.resultsMaxHeight;
  }

  open() {
    this.predictiveSearchResults.style.maxHeight = this.resultsMaxHeight || `${this.getResultsMaxHeight()}px`;
    this.setAttribute('open', true);
    this.input.setAttribute('aria-expanded', true);
    this.isOpen = true;
  }

  close(clearSearchTerm = false) {
    this.closeResults(clearSearchTerm);
    this.isOpen = false;
  }

  closeResults(clearSearchTerm = false) {
    if (clearSearchTerm) {
      this.input.value = '';
      this.removeAttribute('results');
    }
    const selected = this.querySelector('[aria-selected="true"]');

    if (selected) selected.setAttribute('aria-selected', false);

    this.input.setAttribute('aria-activedescendant', '');
    this.removeAttribute('loading');
    this.removeAttribute('open');
    this.input.setAttribute('aria-expanded', false);
    this.resultsMaxHeight = false;
    this.predictiveSearchResults.removeAttribute('style');
  }
}

customElements.define('predictive-search', PredictiveSearch);
```

## `assets/price-per-item.js`

```javascript
if (!customElements.get('price-per-item')) {
  customElements.define(
    'price-per-item',
    class PricePerItem extends HTMLElement {
      constructor() {
        super();
        this.variantId = this.dataset.variantId;
        this.input = document.getElementById(`Quantity-${this.dataset.sectionId || this.dataset.variantId}`);
        if (this.input) {
          this.input.addEventListener('change', this.onInputChange.bind(this));
        }

        this.getVolumePricingArray();
      }

      updatePricePerItemUnsubscriber = undefined;
      variantIdChangedUnsubscriber = undefined;

      connectedCallback() {
        this.variantIdChangedUnsubscriber = subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
          this.variantId = event.data.variant.id.toString();
          this.getVolumePricingArray();
        });

        this.updatePricePerItemUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (response) => {
          if (!response.cartData) return;

          if (response.cartData['variant_id'] !== undefined) {
            if (response.productVariantId === this.variantId) this.updatePricePerItem(response.cartData.quantity);
          } else if (response.cartData.item_count !== 0) {
            const isVariant = response.cartData.items.find((item) => item.variant_id.toString() === this.variantId);
            if (isVariant && isVariant.id.toString() === this.variantId) {
              this.updatePricePerItem(isVariant.quantity);
            } else {
              this.updatePricePerItem(0);
            }
          } else {
            this.updatePricePerItem(0);
          }
        });
      }

      disconnectedCallback() {
        if (this.updatePricePerItemUnsubscriber) {
          this.updatePricePerItemUnsubscriber();
        }
        if (this.variantIdChangedUnsubscriber) {
          this.variantIdChangedUnsubscriber();
        }
      }

      onInputChange() {
        this.updatePricePerItem();
      }

      updatePricePerItem(updatedCartQuantity) {
        if (this.input) {
          this.enteredQty = parseInt(this.input.value);
          this.step = parseInt(this.input.step);
        }

        this.currentQtyForVolumePricing =
          updatedCartQuantity === undefined
            ? this.getCartQuantity(updatedCartQuantity) + this.enteredQty
            : this.getCartQuantity(updatedCartQuantity) + parseInt(this.step);

        if (this.classList.contains('variant-item__price-per-item')) {
          this.currentQtyForVolumePricing = this.getCartQuantity(updatedCartQuantity);
        }
        for (let pair of this.qtyPricePairs) {
          if (this.currentQtyForVolumePricing >= pair[0]) {
            const pricePerItemCurrent = document.querySelector(
              `price-per-item[id^="Price-Per-Item-${this.dataset.sectionId || this.dataset.variantId}"] .price-per-item span`
            );
            this.classList.contains('variant-item__price-per-item')
              ? (pricePerItemCurrent.innerHTML = window.quickOrderListStrings.each.replace('[money]', pair[1]))
              : (pricePerItemCurrent.innerHTML = pair[1]);
            break;
          }
        }
      }

      getCartQuantity(updatedCartQuantity) {
        return updatedCartQuantity || updatedCartQuantity === 0 ? updatedCartQuantity : parseInt(this.input.dataset.cartQuantity);
      }

      getVolumePricingArray() {
        const volumePricing = document.getElementById(`Volume-${this.dataset.sectionId || this.dataset.variantId}`);
        this.qtyPricePairs = [];

        if (volumePricing) {
          volumePricing.querySelectorAll('li').forEach((li) => {
            const qty = parseInt(li.querySelector('span:first-child').textContent);
            const price = li.querySelector('span:not(:first-child):last-child').dataset.text;
            this.qtyPricePairs.push([qty, price]);
          });
        }
        this.qtyPricePairs.reverse();
      }
    }
  );
}
```

## `assets/product-form.js`

```javascript
if (!customElements.get('product-form')) {
  customElements.define(
    'product-form',
    class ProductForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector('form');
        this.variantIdInput.disabled = false;
        this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
        this.cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
        this.submitButton = this.querySelector('[type="submit"]');
        this.submitButtonText = this.submitButton.querySelector('span');

        if (document.querySelector('cart-drawer')) this.submitButton.setAttribute('aria-haspopup', 'dialog');

        this.hideErrors = this.dataset.hideErrors === 'true';
      }

      onSubmitHandler(evt) {
        evt.preventDefault();
        if (this.submitButton.getAttribute('aria-disabled') === 'true') return;

        this.handleErrorMessage();

        this.submitButton.setAttribute('aria-disabled', true);
        this.submitButton.classList.add('loading');
        this.querySelector('.loading__spinner').classList.remove('hidden');

        const config = fetchConfig('javascript');
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        delete config.headers['Content-Type'];

        const formData = new FormData(this.form);
        if (this.cart) {
          formData.append(
            'sections',
            this.cart.getSectionsToRender().map((section) => section.id)
          );
          formData.append('sections_url', window.location.pathname);
          this.cart.setActiveElement(document.activeElement);
        }
        config.body = formData;

        fetch(`${routes.cart_add_url}`, config)
          .then((response) => response.json())
          .then((response) => {
            if (response.status) {
              publish(PUB_SUB_EVENTS.cartError, {
                source: 'product-form',
                productVariantId: formData.get('id'),
                errors: response.errors || response.description,
                message: response.message,
              });
              this.handleErrorMessage(response.description);

              const soldOutMessage = this.submitButton.querySelector('.sold-out-message');
              if (!soldOutMessage) return;
              this.submitButton.setAttribute('aria-disabled', true);
              this.submitButtonText.classList.add('hidden');
              soldOutMessage.classList.remove('hidden');
              this.error = true;
              return;
            } else if (!this.cart) {
              window.location = window.routes.cart_url;
              return;
            }

            const startMarker = CartPerformance.createStartingMarker('add:wait-for-subscribers');
            if (!this.error)
              publish(PUB_SUB_EVENTS.cartUpdate, {
                source: 'product-form',
                productVariantId: formData.get('id'),
                cartData: response,
              }).then(() => {
                CartPerformance.measureFromMarker('add:wait-for-subscribers', startMarker);
              });
            this.error = false;
            const quickAddModal = this.closest('quick-add-modal');
            if (quickAddModal) {
              document.body.addEventListener(
                'modalClosed',
                () => {
                  setTimeout(() => {
                    CartPerformance.measure("add:paint-updated-sections", () => {
                      this.cart.renderContents(response);
                    });
                  });
                },
                { once: true }
              );
              quickAddModal.hide(true);
            } else {
              CartPerformance.measure("add:paint-updated-sections", () => {
                this.cart.renderContents(response);
              });
            }
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => {
            this.submitButton.classList.remove('loading');
            if (this.cart && this.cart.classList.contains('is-empty')) this.cart.classList.remove('is-empty');
            if (!this.error) this.submitButton.removeAttribute('aria-disabled');
            this.querySelector('.loading__spinner').classList.add('hidden');

            CartPerformance.measureFromEvent("add:user-action", evt);
          });
      }

      handleErrorMessage(errorMessage = false) {
        if (this.hideErrors) return;

        this.errorMessageWrapper =
          this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
        if (!this.errorMessageWrapper) return;
        this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

        this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

        if (errorMessage) {
          this.errorMessage.textContent = errorMessage;
        }
      }

      toggleSubmitButton(disable = true, text) {
        if (disable) {
          this.submitButton.setAttribute('disabled', 'disabled');
          if (text) this.submitButtonText.textContent = text;
        } else {
          this.submitButton.removeAttribute('disabled');
          this.submitButtonText.textContent = window.variantStrings.addToCart;
        }
      }

      get variantIdInput() {
        return this.form.querySelector('[name=id]');
      }
    }
  );
}
```

## `assets/product-gallery.js`

```javascript
/**
 * WINGSTONE — product-gallery.js
 * Interactive product gallery: thumbnail switching, active states, and mobile slider sync
 */
class ProductGallery {
  constructor(container) {
    this.container = container;
    this.mainImage = container.querySelector('[data-gallery-main]');
    this.thumbs = container.querySelectorAll('[data-gallery-thumb]');
    
    this.init();
  }

  init() {
    if (!this.mainImage || this.thumbs.length === 0) return;

    this.thumbs.forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchImage(thumb);
      });

      // Keyboard support
      thumb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.switchImage(thumb);
        }
      });
    });
  }

  switchImage(selectedThumb) {
    // Reset active states
    this.thumbs.forEach(t => {
      t.classList.remove('is-active');
      t.setAttribute('aria-current', 'false');
    });

    // Set new active
    selectedThumb.classList.add('is-active');
    selectedThumb.setAttribute('aria-current', 'true');

    // Get image attributes from thumbnail
    const newSrc = selectedThumb.dataset.masterSrc;
    const newWidth = selectedThumb.dataset.masterWidth;
    const newHeight = selectedThumb.dataset.masterHeight;
    const newAlt = selectedThumb.querySelector('img')?.alt || '';

    if (newSrc && this.mainImage) {
      // Fade transition effect
      this.mainImage.style.opacity = '0';
      
      setTimeout(() => {
        this.mainImage.src = newSrc;
        if (newWidth) this.mainImage.setAttribute('width', newWidth);
        if (newHeight) this.mainImage.setAttribute('height', newHeight);
        this.mainImage.alt = newAlt;
        this.mainImage.style.opacity = '1';
      }, 150);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const galleries = document.querySelectorAll('[data-product-gallery]');
  galleries.forEach(gallery => {
    new ProductGallery(gallery);
  });
});
```

## `assets/product-info.js`

```javascript
if (!customElements.get('product-info')) {
  customElements.define(
    'product-info',
    class ProductInfo extends HTMLElement {
      quantityInput = undefined;
      quantityForm = undefined;
      onVariantChangeUnsubscriber = undefined;
      cartUpdateUnsubscriber = undefined;
      abortController = undefined;
      pendingRequestUrl = null;
      preProcessHtmlCallbacks = [];
      postProcessHtmlCallbacks = [];

      constructor() {
        super();

        this.quantityInput = this.querySelector('.quantity__input');
      }

      connectedCallback() {
        this.initializeProductSwapUtility();

        this.onVariantChangeUnsubscriber = subscribe(
          PUB_SUB_EVENTS.optionValueSelectionChange,
          this.handleOptionValueChange.bind(this)
        );

        this.initQuantityHandlers();
        this.dispatchEvent(new CustomEvent('product-info:loaded', { bubbles: true }));
      }

      addPreProcessCallback(callback) {
        this.preProcessHtmlCallbacks.push(callback);
      }

      initQuantityHandlers() {
        if (!this.quantityInput) return;

        this.quantityForm = this.querySelector('.product-form__quantity');
        if (!this.quantityForm) return;

        this.setQuantityBoundries();
        if (!this.dataset.originalSection) {
          this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, this.fetchQuantityRules.bind(this));
        }
      }

      disconnectedCallback() {
        this.onVariantChangeUnsubscriber();
        this.cartUpdateUnsubscriber?.();
      }

      initializeProductSwapUtility() {
        this.preProcessHtmlCallbacks.push((html) =>
          html.querySelectorAll('.scroll-trigger').forEach((element) => element.classList.add('scroll-trigger--cancel'))
        );
        this.postProcessHtmlCallbacks.push((newNode) => {
          window?.Shopify?.PaymentButton?.init();
          window?.ProductModel?.loadShopifyXR();
        });
      }

      handleOptionValueChange({ data: { event, target, selectedOptionValues } }) {
        if (!this.contains(event.target)) return;

        this.resetProductFormState();

        const productUrl = target.dataset.productUrl || this.pendingRequestUrl || this.dataset.url;
        this.pendingRequestUrl = productUrl;
        const shouldSwapProduct = this.dataset.url !== productUrl;
        const shouldFetchFullPage = this.dataset.updateUrl === 'true' && shouldSwapProduct;

        this.renderProductInfo({
          requestUrl: this.buildRequestUrlWithParams(productUrl, selectedOptionValues, shouldFetchFullPage),
          targetId: target.id,
          callback: shouldSwapProduct
            ? this.handleSwapProduct(productUrl, shouldFetchFullPage)
            : this.handleUpdateProductInfo(productUrl),
        });
      }

      resetProductFormState() {
        const productForm = this.productForm;
        productForm?.toggleSubmitButton(true);
        productForm?.handleErrorMessage();
      }

      handleSwapProduct(productUrl, updateFullPage) {
        return (html) => {
          this.productModal?.remove();

          const selector = updateFullPage ? "product-info[id^='MainProduct']" : 'product-info';
          const variant = this.getSelectedVariant(html.querySelector(selector));
          this.updateURL(productUrl, variant?.id);

          if (updateFullPage) {
            document.querySelector('head title').innerHTML = html.querySelector('head title').innerHTML;

            HTMLUpdateUtility.viewTransition(
              document.querySelector('main'),
              html.querySelector('main'),
              this.preProcessHtmlCallbacks,
              this.postProcessHtmlCallbacks
            );
          } else {
            HTMLUpdateUtility.viewTransition(
              this,
              html.querySelector('product-info'),
              this.preProcessHtmlCallbacks,
              this.postProcessHtmlCallbacks
            );
          }
        };
      }

      renderProductInfo({ requestUrl, targetId, callback }) {
        this.abortController?.abort();
        this.abortController = new AbortController();

        fetch(requestUrl, { signal: this.abortController.signal })
          .then((response) => response.text())
          .then((responseText) => {
            this.pendingRequestUrl = null;
            const html = new DOMParser().parseFromString(responseText, 'text/html');
            callback(html);
          })
          .then(() => {
            document.querySelector(`#${targetId}`)?.focus();
          })
          .catch((error) => {
            if (error.name === 'AbortError') {
              console.log('Fetch aborted by user');
            } else {
              console.error(error);
            }
          });
      }

      getSelectedVariant(productInfoNode) {
        const selectedVariant = productInfoNode.querySelector('variant-selects [data-selected-variant]')?.innerHTML;
        return !!selectedVariant ? JSON.parse(selectedVariant) : null;
      }

      buildRequestUrlWithParams(url, optionValues, shouldFetchFullPage = false) {
        const params = [];

        !shouldFetchFullPage && params.push(`section_id=${this.sectionId}`);

        if (optionValues.length) {
          params.push(`option_values=${optionValues.join(',')}`);
        }

        return `${url}?${params.join('&')}`;
      }

      updateOptionValues(html) {
        const variantSelects = html.querySelector('variant-selects');
        if (variantSelects) {
          HTMLUpdateUtility.viewTransition(this.variantSelectors, variantSelects, this.preProcessHtmlCallbacks);
        }
      }

      handleUpdateProductInfo(productUrl) {
        return (html) => {
          const variant = this.getSelectedVariant(html);

          this.pickupAvailability?.update(variant);
          this.updateOptionValues(html);
          this.updateURL(productUrl, variant?.id);
          this.updateVariantInputs(variant?.id);

          if (!variant) {
            this.setUnavailable();
            return;
          }

          this.updateMedia(html, variant?.featured_media?.id);

          const updateSourceFromDestination = (id, shouldHide = (source) => false) => {
            const source = html.getElementById(`${id}-${this.sectionId}`);
            const destination = this.querySelector(`#${id}-${this.dataset.section}`);
            if (source && destination) {
              destination.innerHTML = source.innerHTML;
              destination.classList.toggle('hidden', shouldHide(source));
            }
          };

          updateSourceFromDestination('price');
          updateSourceFromDestination('Sku', ({ classList }) => classList.contains('hidden'));
          updateSourceFromDestination('Inventory', ({ innerText }) => innerText === '');
          updateSourceFromDestination('Volume');
          updateSourceFromDestination('Price-Per-Item', ({ classList }) => classList.contains('hidden'));

          this.updateQuantityRules(this.sectionId, html);
          this.querySelector(`#Quantity-Rules-${this.dataset.section}`)?.classList.remove('hidden');
          this.querySelector(`#Volume-Note-${this.dataset.section}`)?.classList.remove('hidden');

          this.productForm?.toggleSubmitButton(
            html.getElementById(`ProductSubmitButton-${this.sectionId}`)?.hasAttribute('disabled') ?? true,
            window.variantStrings.soldOut
          );

          publish(PUB_SUB_EVENTS.variantChange, {
            data: {
              sectionId: this.sectionId,
              html,
              variant,
            },
          });
        };
      }

      updateVariantInputs(variantId) {
        this.querySelectorAll(
          `#product-form-${this.dataset.section}, #product-form-installment-${this.dataset.section}`
        ).forEach((productForm) => {
          const input = productForm.querySelector('input[name="id"]');
          input.value = variantId ?? '';
          input.dispatchEvent(new Event('change', { bubbles: true }));
        });
      }

      updateURL(url, variantId) {
        this.querySelector('share-button')?.updateUrl(
          `${window.shopUrl}${url}${variantId ? `?variant=${variantId}` : ''}`
        );

        if (this.dataset.updateUrl === 'false') return;
        window.history.replaceState({}, '', `${url}${variantId ? `?variant=${variantId}` : ''}`);
      }

      setUnavailable() {
        this.productForm?.toggleSubmitButton(true, window.variantStrings.unavailable);

        const selectors = ['price', 'Inventory', 'Sku', 'Price-Per-Item', 'Volume-Note', 'Volume', 'Quantity-Rules']
          .map((id) => `#${id}-${this.dataset.section}`)
          .join(', ');
        document.querySelectorAll(selectors).forEach(({ classList }) => classList.add('hidden'));
      }

      updateMedia(html, variantFeaturedMediaId) {
        if (!variantFeaturedMediaId) return;

        const mediaGallerySource = this.querySelector('media-gallery ul');
        const mediaGalleryDestination = html.querySelector(`media-gallery ul`);

        const refreshSourceData = () => {
          if (this.hasAttribute('data-zoom-on-hover')) enableZoomOnHover(2);
          const mediaGallerySourceItems = Array.from(mediaGallerySource.querySelectorAll('li[data-media-id]'));
          const sourceSet = new Set(mediaGallerySourceItems.map((item) => item.dataset.mediaId));
          const sourceMap = new Map(
            mediaGallerySourceItems.map((item, index) => [item.dataset.mediaId, { item, index }])
          );
          return [mediaGallerySourceItems, sourceSet, sourceMap];
        };

        if (mediaGallerySource && mediaGalleryDestination) {
          let [mediaGallerySourceItems, sourceSet, sourceMap] = refreshSourceData();
          const mediaGalleryDestinationItems = Array.from(mediaGalleryDestination.querySelectorAll('li[data-media-id]'));
          const destinationSet = new Set(mediaGalleryDestinationItems.map(({ dataset }) => dataset.mediaId));
          if (
            destinationSet.difference(sourceSet).size ||
            sourceSet.difference(destinationSet).size ||
            sourceSet.intersection(destinationSet).size !== sourceSet.size
          ) {
            mediaGallerySource.innerHTML = mediaGalleryDestination.innerHTML;
            if (this.hasAttribute('data-zoom-on-hover')) enableZoomOnHover(2);

            mediaGallerySourceItems = Array.from(mediaGallerySource.querySelectorAll('li[data-media-id]'));
            sourceMap = new Map(
              mediaGallerySourceItems.map((item, index) => [item.dataset.mediaId, { item, index }])
            );
          }

          mediaGallerySource.querySelector('[data-media-id].is-active')?.classList.remove('is-active');

          let activeMedia = mediaGallerySource.querySelector(`[data-media-id="${variantFeaturedMediaId}"]`);
          const mediaPosition = sourceMap.get(variantFeaturedMediaId)?.index || 0;

          if (!activeMedia) {
            activeMedia = mediaGallerySource.querySelector('[data-media-id]');
          }

          if (!activeMedia) return;

          activeMedia.classList.add('is-active');

          if (this.elements?.thumbnails) {
            this.elements.thumbnails.querySelectorAll('[aria-current="true"]').forEach((item) => item.removeAttribute('aria-current'));
            const activeThumbnail = this.elements.thumbnails.querySelector(`[data-target="${variantFeaturedMediaId}"]`);
            if (activeThumbnail) activeThumbnail.querySelector('button').setAttribute('aria-current', true);
          }
        }
      }
    }
  );
}
```

## `assets/product-modal.js`

```javascript
if (!customElements.get('product-modal')) {
  customElements.define(
    'product-modal',
    class ProductModal extends ModalDialog {
      constructor() {
        super();
      }

      hide() {
        super.hide();
      }

      show(opener) {
        super.show(opener);
        this.showActiveMedia();
      }

      showActiveMedia() {
        this.querySelectorAll(
          `[data-media-id]:not([data-media-id="${this.openedBy.getAttribute('data-media-id')}"])`
        ).forEach((element) => {
          element.classList.remove('active');
        });
        const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute('data-media-id')}"]`);
        const activeMediaTemplate = activeMedia.querySelector('template');
        const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
        activeMedia.classList.add('active');
        activeMedia.scrollIntoView();

        const container = this.querySelector('[role="document"]');
        container.scrollLeft = (activeMedia.width - container.clientWidth) / 2;

        if (
          activeMedia.nodeName == 'DEFERRED-MEDIA' &&
          activeMediaContent &&
          activeMediaContent.querySelector('.js-youtube')
        )
          activeMedia.loadContent();
      }
    }
  );
}
```

## `assets/product-model.js`

```javascript
if (!customElements.get('product-model')) {
  customElements.define(
    'product-model',
    class ProductModel extends DeferredMedia {
      constructor() {
        super();
      }

      loadContent() {
        super.loadContent();

        Shopify.loadFeatures([
          {
            name: 'model-viewer-ui',
            version: '1.0',
            onLoad: this.setupModelViewerUI.bind(this),
          },
        ]);
      }

      setupModelViewerUI(errors) {
        if (errors) return;

        this.modelViewerUI = new Shopify.ModelViewerUI(this.querySelector('model-viewer'));
      }
    }
  );
}

window.ProductModel = {
  loadShopifyXR() {
    Shopify.loadFeatures([
      {
        name: 'shopify-xr',
        version: '1.0',
        onLoad: this.setupShopifyXR.bind(this),
      },
    ]);
  },

  setupShopifyXR(errors) {
    if (errors) return;

    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', () => this.setupShopifyXR());
      return;
    }

    document.querySelectorAll('[id^="ProductJSON-"]').forEach((modelJSON) => {
      window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent));
      modelJSON.remove();
    });
    window.ShopifyXR.setupXRElements();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  if (window.ProductModel) window.ProductModel.loadShopifyXR();
});
```

## `assets/pubsub.js`

```javascript
let subscribers = {};

function subscribe(eventName, callback) {
  if (subscribers[eventName] === undefined) {
    subscribers[eventName] = [];
  }

  subscribers[eventName] = [...subscribers[eventName], callback];

  return function unsubscribe() {
    subscribers[eventName] = subscribers[eventName].filter((cb) => {
      return cb !== callback;
    });
  };
}

function publish(eventName, data) {
  if (subscribers[eventName]) {
    const promises = subscribers[eventName].map((callback) => callback(data));
    return Promise.all(promises);
  } else {
    return Promise.resolve();
  }
}
```

## `assets/recipient-form.js`

```javascript
if (!customElements.get('recipient-form')) {
  customElements.define(
    'recipient-form',
    class RecipientForm extends HTMLElement {
      constructor() {
        super();
        this.recipientFieldsLiveRegion = this.querySelector(`#Recipient-fields-live-region-${this.dataset.sectionId}`);
        this.checkboxInput = this.querySelector(`#Recipient-checkbox-${this.dataset.sectionId}`);
        this.checkboxInput.disabled = false;
        this.hiddenControlField = this.querySelector(`#Recipient-control-${this.dataset.sectionId}`);
        this.hiddenControlField.disabled = true;
        this.emailInput = this.querySelector(`#Recipient-email-${this.dataset.sectionId}`);
        this.nameInput = this.querySelector(`#Recipient-name-${this.dataset.sectionId}`);
        this.messageInput = this.querySelector(`#Recipient-message-${this.dataset.sectionId}`);
        this.sendonInput = this.querySelector(`#Recipient-send-on-${this.dataset.sectionId}`);
        this.offsetProperty = this.querySelector(`#Recipient-timezone-offset-${this.dataset.sectionId}`);
        if (this.offsetProperty) this.offsetProperty.value = new Date().getTimezoneOffset().toString();

        this.errorMessageWrapper = this.querySelector('.product-form__recipient-error-message-wrapper');
        this.errorMessageList = this.errorMessageWrapper?.querySelector('ul');
        this.errorMessage = this.errorMessageWrapper?.querySelector('.error-message');
        this.defaultErrorHeader = this.errorMessage?.innerText;
        this.currentProductVariantId = this.dataset.productVariantId;
        this.addEventListener('change', this.onChange.bind(this));
        this.onChange();
      }

      cartUpdateUnsubscriber = undefined;
      variantChangeUnsubscriber = undefined;
      cartErrorUnsubscriber = undefined;

      connectedCallback() {
        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
          if (event.source === 'product-form' && event.productVariantId.toString() === this.currentProductVariantId) {
            this.resetRecipientForm();
          }
        });

        this.variantChangeUnsubscriber = subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
          if (event.data.sectionId === this.dataset.sectionId) {
            this.currentProductVariantId = event.data.variant.id.toString();
          }
        });

        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartError, (event) => {
          if (event.source === 'product-form' && event.productVariantId.toString() === this.currentProductVariantId) {
            this.displayErrorMessage(event.message, event.errors);
          }
        });
      }

      disconnectedCallback() {
        if (this.cartUpdateUnsubscriber) {
          this.cartUpdateUnsubscriber();
        }

        if (this.variantChangeUnsubscriber) {
          this.variantChangeUnsubscriber();
        }

        if (this.cartErrorUnsubscriber) {
          this.cartErrorUnsubscriber();
        }
      }

      onChange() {
        if (this.checkboxInput.checked) {
          this.enableInputFields();
          this.recipientFieldsLiveRegion.innerText = window.accessibilityStrings.recipientFormExpanded;
        } else {
          this.clearInputFields();
          this.disableInputFields();
          this.clearErrorMessage();
          this.recipientFieldsLiveRegion.innerText = window.accessibilityStrings.recipientFormCollapsed;
        }
      }

      inputFields() {
        return [this.emailInput, this.nameInput, this.messageInput, this.sendonInput];
      }

      disableableFields() {
        return [...this.inputFields(), this.offsetProperty];
      }

      clearInputFields() {
        this.inputFields().forEach((field) => (field.value = ''));
      }

      enableInputFields() {
        this.disableableFields().forEach((field) => (field.disabled = false));
      }

      disableInputFields() {
        this.disableableFields().forEach((field) => (field.disabled = true));
      }

      displayErrorMessage(title, body) {
        this.clearErrorMessage();
        this.errorMessageWrapper.hidden = false;
        if (typeof body === 'object') {
          this.errorMessage.innerText = this.defaultErrorHeader;
          return Object.entries(body).forEach(([key, value]) => {
            const errorMessageId = `RecipientForm-${key}-error-${this.dataset.sectionId}`;
            const fieldSelector = `#Recipient-${key}-${this.dataset.sectionId}`;
            const message = `${value.join(', ')}`;
            const errorMessageElement = this.querySelector(`#${errorMessageId}`);
            const errorTextElement = errorMessageElement?.querySelector('.error-message');
            if (!errorTextElement) return;

            if (this.errorMessageList) {
              this.errorMessageList.appendChild(this.createErrorListItem(fieldSelector, message));
            }

            errorTextElement.innerText = `${message}.`;
            errorMessageElement.classList.remove('hidden');

            const inputElement = this[`${key}Input`];
            if (!inputElement) return;

            inputElement.setAttribute('aria-invalid', true);
            inputElement.setAttribute('aria-describedby', errorMessageId);
          });
        }

        this.errorMessage.innerText = body;
      }

      createErrorListItem(target, message) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', target);
        a.innerText = message;
        li.appendChild(a);
        li.className = 'error-message';
        return li;
      }

      clearErrorMessage() {
        this.errorMessageWrapper.hidden = true;

        if (this.errorMessageList) this.errorMessageList.innerHTML = '';

        this.querySelectorAll('.recipient-fields .form__message').forEach((field) => {
          field.classList.add('hidden');
          const textField = field.querySelector('.error-message');
          if (textField) textField.innerText = '';
        });

        [this.emailInput, this.messageInput, this.nameInput, this.sendonInput].forEach((inputElement) => {
          inputElement.setAttribute('aria-invalid', false);
          inputElement.removeAttribute('aria-describedby');
        });
      }

      resetRecipientForm() {
        if (this.checkboxInput.checked) {
          this.checkboxInput.checked = false;
          this.clearInputFields();
          this.clearErrorMessage();
        }
      }
    }
  );
}
```

## `assets/search-form.js`

```javascript
class SearchForm extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input[type="search"]');
    this.resetButton = this.querySelector('button[type="reset"]');

    if (this.input) {
      this.input.form.addEventListener('reset', this.onFormReset.bind(this));
      this.input.addEventListener(
        'input',
        debounce((event) => {
          this.onChange(event);
        }, 300).bind(this)
      );
    }
  }

  toggleResetButton() {
    const resetIsHidden = this.resetButton.classList.contains('hidden');
    if (this.input.value.length > 0 && resetIsHidden) {
      this.resetButton.classList.remove('hidden');
    } else if (this.input.value.length === 0 && !resetIsHidden) {
      this.resetButton.classList.add('hidden');
    }
  }

  onChange() {
    this.toggleResetButton();
  }

  shouldResetForm() {
    return !document.querySelector('[aria-selected="true"] a');
  }

  onFormReset(event) {
    event.preventDefault();

    if (this.shouldResetForm()) {
      this.input.value = '';
      this.input.focus();
      this.toggleResetButton();
    }
  }
}

customElements.define('search-form', SearchForm);
```

## `assets/show-more.js`

```javascript
if (!customElements.get('show-more-button')) {
  customElements.define(
    'show-more-button',
    class ShowMoreButton extends HTMLElement {
      constructor() {
        super();
        const button = this.querySelector('button');
        button.addEventListener('click', (event) => {
          this.expandShowMore(event);
          const nextElementToFocus = event.target.closest('.parent-display').querySelector('.show-more-item');
          if (
            nextElementToFocus &&
            !nextElementToFocus.classList.contains('hidden') &&
            nextElementToFocus.querySelector('input')
          ) {
            nextElementToFocus.querySelector('input').focus();
          }
        });
      }

      expandShowMore(event) {
        const parentDisplay = event.target.closest('[id^="Show-More-"]').closest('.parent-display');
        const parentWrap = parentDisplay.querySelector('.parent-wrap');
        this.querySelectorAll('.label-text').forEach((element) => element.classList.toggle('hidden'));
        parentDisplay.querySelectorAll('.show-more-item').forEach((item) => item.classList.toggle('hidden'));
        if (!this.querySelector('.label-show-less')) {
          this.classList.add('hidden');
        }
      }
    }
  );
}
```

## `assets/smooth-scroll.js`

```javascript
/**
 * WINGSTONE — smooth-scroll.js
 * Premium scroll-motion utility handling anchor links and custom scrolling curves
 */
document.addEventListener('DOMContentLoaded', () => {
  const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const scrollToTarget = (targetElement, duration = 800) => {
    if (!targetElement) return;
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutCubic(Math.min(timeElapsed / duration, 1));
      window.scrollTo(0, startPosition + distance * run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Ensure exact final position
        window.scrollTo(0, targetPosition);
      }
    };

    requestAnimationFrame(animation);
  };

  // Intercept anchor clicks
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        scrollToTarget(target, 1000);
      }
    });
  });

  // Motion Reveal Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.05
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.motion-reveal').forEach(el => {
    revealObserver.observe(el);
  });
});
```

## `assets/template-collection.css`

```css
.product-grid-shell {
  margin-top: 1.5rem;
}

.collection-toolbar {
  margin-bottom: 1.25rem;
  padding: clamp(1rem, 2vw, 1.5rem);
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.92), rgba(247,247,247,.85));
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 90%);
  box-shadow: 0 16px 36px rgba(10, 18, 30, .06);
}

.collection-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(.9rem, 1.4vw, 1.25rem);
  margin-top: 1rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.collection-grid__item {
  min-width: 0;
}

.collection-grid .product-card {
  height: 100%;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 14px 34px rgba(10, 18, 30, .08);
  background: linear-gradient(180deg, rgba(255,255,255,.98), rgba(248,248,248,.92));
  border: 1px solid color-mix(in srgb, var(--color-ink), transparent 90%);
  transition: transform .25s ease, box-shadow .25s ease;
}

.collection-grid .product-card:hover,
.collection-grid .product-card:focus-within {
  transform: translateY(-4px);
  box-shadow: 0 20px 42px rgba(10, 18, 30, .12);
}

@media (max-width: 749px) {
  .collection-toolbar {
    padding: 1rem;
    border-radius: 18px;
  }

  .collection-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 990px) {
  .collection-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
```

## `assets/theme.js`

```javascript
document.documentElement.classList.remove('no-js');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const cartDrawer = document.querySelector('[data-cart-drawer]');
const cartDrawerBackdrop = document.querySelector('[data-cart-drawer-backdrop]');
const cartDrawerContent = document.querySelector('[data-cart-drawer-content]');
let _lastActiveElement = null;
let _cartKeydownHandler = null;

const formatMoney = (cents) => {
  if (typeof Shopify !== 'undefined' && Shopify.formatMoney) {
    return Shopify.formatMoney(cents);
  }

  return `₹${(cents / 100).toFixed(2)}`;
};

const openCartDrawer = async () => {
  if (!cartDrawer || !cartDrawerBackdrop || !cartDrawerContent) return;

  _lastActiveElement = document.activeElement;

  cartDrawer.hidden = false;
  cartDrawerBackdrop.hidden = false;
  cartDrawer.setAttribute('aria-hidden', 'false');
  cartDrawerBackdrop.classList.add('is-open');
  cartDrawer.classList.add('is-open');
  document.body.classList.add('cart-drawer-open');

  cartDrawerContent.innerHTML = '<p class="cart-drawer__loading">Loading cart...</p>';

  const response = await fetch('/cart.js', { headers: { Accept: 'application/json' } });
  const cart = await response.json();

  const itemsMarkup = cart.items.length
    ? cart.items.map((item) => {
        const imageUrl = item.image ? item.image.replace(/\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i, '_120x120.$1$2') : '';
        return `
          <div class="cart-drawer__item">
            ${imageUrl ? `<img src="${imageUrl}" alt="${item.product_title.replace(/"/g, '&quot;')}">` : ''}
            <div>
              <h3 class="cart-drawer__item-title">${item.product_title}</h3>
              <div class="cart-drawer__item-meta">${item.variant_title === 'Default Title' ? '' : item.variant_title}</div>
              <div class="cart-drawer__item-meta">Qty ${item.quantity}</div>
              <div class="cart-drawer__item-price">${formatMoney(item.final_line_price)}</div>
            </div>
          </div>`;
      }).join('')
    : '<p class="cart-drawer__empty">Your cart is empty.</p>';

  cartDrawerContent.innerHTML = `
    <div class="cart-drawer__content">
      <div class="cart-drawer__items">${itemsMarkup}</div>
    </div>
    <div class="cart-drawer__footer">
      <div class="cart-drawer__summary">
        <span>Subtotal</span>
        <strong>${formatMoney(cart.total_price)}</strong>
      </div>
      <div class="cart-drawer__actions">
        <a class="button button--secondary" href="/cart">View cart</a>
        <a class="button" href="/checkout">Checkout</a>
      </div>
    </div>
  `;

  // Focus management & accessible keyboard handling
  const closeBtn = cartDrawer.querySelector('[data-cart-drawer-close]') || cartDrawer.querySelector('.cart-drawer__close');
  if (closeBtn) {
    closeBtn.focus();
  }

  _cartKeydownHandler = (e) => {
    if (e.key === 'Escape') closeCartDrawer();
    if (e.key === 'Tab') {
      const focusable = cartDrawer.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  document.addEventListener('keydown', _cartKeydownHandler);
};

// Toast helper
const showToast = (msg, duration = 2200) => {
  const toast = document.getElementById('cartToast');
  const msgEl = document.getElementById('cartToastMessage');
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.hidden = false;
  toast.classList.add('show');
  if (toast._timeout) clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => { toast.hidden = true; }, 340);
  }, duration);
};

const closeCartDrawer = () => {
  if (!cartDrawer || !cartDrawerBackdrop) return;

  cartDrawer.classList.remove('is-open');
  cartDrawerBackdrop.classList.remove('is-open');
  document.body.classList.remove('cart-drawer-open');
  cartDrawer.setAttribute('aria-hidden', 'true');

  if (_cartKeydownHandler) {
    document.removeEventListener('keydown', _cartKeydownHandler);
    _cartKeydownHandler = null;
  }

  window.setTimeout(() => {
    cartDrawer.hidden = true;
    cartDrawerBackdrop.hidden = true;
    if (_lastActiveElement && typeof _lastActiveElement.focus === 'function') {
      _lastActiveElement.focus();
    }
    _lastActiveElement = null;
  }, prefersReducedMotion ? 0 : 280);
};

document.addEventListener('click', (event) => {
  const cartToggle = event.target.closest('[data-cart-drawer-toggle]');
  if (cartToggle) {
    event.preventDefault();
    openCartDrawer();
    return;
  }

  const cartClose = event.target.closest('[data-cart-drawer-close]');
  if (cartClose) {
    closeCartDrawer();
    return;
  }

  if (event.target.closest('[data-cart-drawer-backdrop]')) {
    closeCartDrawer();
    return;
  }
});

document.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-menu-toggle]');
  if (!toggle) return;

  const nav = document.querySelector('[data-site-nav]');
  if (!nav) return;

  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

const cartForms = [...document.querySelectorAll('#pdpForm, .product-form, .product-card__form')];

cartForms.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Unable to add item to cart');
      }

      // For PDP form submissions we want a silent update (no drawer).
      if (form.id === 'pdpForm') {
        try {
          const cartRes = await fetch('/cart.js', { headers: { Accept: 'application/json' } });
          const cart = await cartRes.json();

          // update header badge (create if needed)
          let badge = document.querySelector('.site-header__badge');
          if (!badge) {
            const cartToggle = document.querySelector('.site-header__action--cart');
            if (cartToggle) {
              badge = document.createElement('span');
              badge.className = 'site-header__badge';
              cartToggle.appendChild(badge);
            }
          }
          if (badge) badge.textContent = String(cart.item_count || 0);

          // quick feedback on the submit button
          if (submitButton) {
            const label = submitButton.querySelector('.pdp-btn__label');
            const original = label ? label.textContent : submitButton.textContent;
            if (label) label.textContent = 'Added'; else submitButton.textContent = 'Added';
            showToast('Added to cart');
            setTimeout(() => { if (label) label.textContent = original; else submitButton.textContent = original; }, 1800);
          }
        } catch (e) {
          // ignore silent update errors
          console.warn('Silent cart update failed', e);
        }
      } else {
        // For quick-add / product-card adds, perform a silent update: refresh cart badge and show toast.
        try {
          const cartRes = await fetch('/cart.js', { headers: { Accept: 'application/json' } });
          const cart = await cartRes.json();

          // update header badge (create if needed)
          let badge = document.querySelector('.site-header__badge');
          if (!badge) {
            const cartToggle = document.querySelector('.site-header__action--cart');
            if (cartToggle) {
              badge = document.createElement('span');
              badge.className = 'site-header__badge';
              cartToggle.appendChild(badge);
            }
          }
          if (badge) badge.textContent = String(cart.item_count || 0);

          // give user quick feedback
          showToast('Added to cart');
        } catch (e) {
          // fallback: open drawer if silent update fails
          console.warn('Silent cart update failed', e);
          await openCartDrawer();
        }
      }
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
});

document.querySelectorAll('.product-form').forEach((form) => {
  const variantData = form.querySelector('[data-product-variants]');
  const idInput = form.querySelector('input[name="id"]');
  const submit = form.querySelector('button[type="submit"], [type="submit"]');
  if (!variantData || !idInput || !submit) return;

  const variants = JSON.parse(variantData.textContent);
  const optionGroups = [...form.querySelectorAll('[data-option-group]')];
  const optionButtons = optionGroups.map(group => [...group.querySelectorAll('[data-option-value]')]);
  const currentPrice = form.querySelector('[data-current-price]');
  const comparePrice = form.querySelector('[data-compare-price]');
  const stockNote = form.querySelector('[data-stock-note]');
  const quantityInput = form.querySelector('[data-quantity-input]');
  const quantityButtons = [...form.querySelectorAll('[data-quantity-change]')];
  const sizeChartModal = document.querySelector('[data-size-chart-modal]');
  const sizeChartTriggers = [...document.querySelectorAll('[data-size-chart-trigger]')];
  const sizeChartTabs = sizeChartModal ? [...sizeChartModal.querySelectorAll('[data-tab-target]')] : [];
  const sizeChartPanels = sizeChartModal ? [...sizeChartModal.querySelectorAll('.size-chart-content')] : [];

  // compute selected values from active buttons inside each option group
  const getSelectedValues = () => optionGroups.map((group) => {
    const active = group.querySelector('[data-option-value].is-active');
    if (active) return active.dataset.optionValue;
    // fallback to first available button's value
    const first = group.querySelector('[data-option-value]');
    return first ? first.dataset.optionValue : '';
  });

  const findVariant = (selectedValues) => variants.find((variant) => selectedValues.every((value, index) => variant.options[index] === value));

  const isOptionAvailable = (optionIndex, candidateValue, selectedValues) => variants.some((variant) => {
    if (variant.options[optionIndex] !== candidateValue) return false;

    return selectedValues.every((value, index) => {
      if (index === optionIndex) return true;
      return variant.options[index] === value;
    });
  });

  const syncButtonStates = () => {
    const selectedValues = getSelectedValues();

    optionGroups.forEach((group) => {
      const optionIndex = Number(group.dataset.optionIndex) - 1;
      const selectedValue = selectedValues[optionIndex] || '';
      const label = group.querySelector('[data-selected-value-label]');
      const buttons = [...group.querySelectorAll('[data-option-value]')];

      if (label) {
        label.textContent = selectedValue;
      }

      buttons.forEach((button) => {
        const candidateValue = button.dataset.optionValue;
        const available = isOptionAvailable(optionIndex, candidateValue, selectedValues);
        const active = candidateValue === selectedValue;

        button.classList.toggle('is-active', active);
        button.classList.toggle('is-out-of-stock', !available);
        button.disabled = !available;
        button.setAttribute('aria-pressed', String(active));
        button.setAttribute('aria-disabled', String(!available));
      });
    });
  };

  const updateVariant = () => {
    const selectedValues = getSelectedValues();
    const variant = findVariant(selectedValues);

    if (!variant) {
      return;
    }

    idInput.value = variant.id;
    submit.disabled = !variant.available;
    const submitLabel = submit.querySelector('.pdp-btn__label');
    if (submitLabel) submitLabel.textContent = variant.available ? 'Add to cart' : 'Sold out'; else submit.textContent = variant.available ? 'Add to cart' : 'Sold out';

    if (currentPrice) {
      currentPrice.textContent = formatMoney(variant.price);
    }

    if (comparePrice) {
      if (variant.compare_at_price && variant.compare_at_price > variant.price) {
        comparePrice.textContent = formatMoney(variant.compare_at_price);
        comparePrice.hidden = false;
      } else {
        comparePrice.hidden = true;
      }
    }

    if (stockNote) {
      const inventory = Number(variant.inventory_quantity);
      if (variant.available && Number.isFinite(inventory) && inventory > 0 && inventory <= 5) {
        stockNote.textContent = `Only ${inventory} left in stock. Order soon.`;
        stockNote.hidden = false;
      } else {
        stockNote.hidden = true;
      }
    }

    syncButtonStates();
  };

  // wire custom option buttons to update selected state and variant
  optionGroups.forEach((group, idx) => {
    const buttons = [...group.querySelectorAll('[data-option-value]')];
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.disabled) return;

        // toggle active state within group
        buttons.forEach(b => b.classList.toggle('is-active', b === button));
        // sync label if present
        const label = group.querySelector('[data-selected-value-label]') || group.querySelector('#selectedSize') || group.querySelector('#selectedColor');
        if (label) label.textContent = button.dataset.optionValue;
        // update the hidden variant id by computing selected values
        updateVariant();
      });
    });
  });



  if (quantityInput) {
    quantityInput.addEventListener('change', () => {
      const parsed = Math.max(1, Number.parseInt(quantityInput.value, 10) || 1);
      quantityInput.value = String(parsed);
    });
  }

  quantityButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!quantityInput) return;

      const delta = button.dataset.quantityChange === 'increase' ? 1 : -1;
      const parsed = Math.max(1, Number.parseInt(quantityInput.value, 10) || 1);
      quantityInput.value = String(Math.max(1, parsed + delta));
      quantityInput.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });

  const openSizeChart = () => {
    if (!sizeChartModal) return;
    sizeChartModal.classList.add('is-open');
    sizeChartModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('size-chart-open');
  };

  const closeSizeChart = () => {
    if (!sizeChartModal) return;
    sizeChartModal.classList.remove('is-open');
    sizeChartModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('size-chart-open');
  };

  sizeChartTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => openSizeChart());
  });

  if (sizeChartModal) {
    sizeChartModal.addEventListener('click', (event) => {
      const closeTarget = event.target.closest('[data-size-chart-close]');
      if (closeTarget) {
        closeSizeChart();
        return;
      }
    });

    sizeChartTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tabTarget;

        sizeChartTabs.forEach((otherTab) => {
          const isActive = otherTab === tab;
          otherTab.classList.toggle('is-active', isActive);
          otherTab.setAttribute('aria-selected', String(isActive));
        });

        sizeChartPanels.forEach((panel) => {
          panel.classList.toggle('is-active', panel.id === `size-chart-${target}`);
        });
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && sizeChartModal.classList.contains('is-open')) {
        closeSizeChart();
      }
    });
  }

  updateVariant();
});

document.querySelectorAll('[data-product-gallery]').forEach((gallery) => {
  const mainImage = gallery.querySelector('[data-product-gallery-main-image]');
  const thumbs = [...gallery.querySelectorAll('[data-product-gallery-thumb]')];
  if (!mainImage || thumbs.length === 0) return;

  const setActiveThumb = (activeThumb) => {
    thumbs.forEach((thumb) => {
      const isActive = thumb === activeThumb;
      thumb.classList.toggle('is-active', isActive);
      thumb.setAttribute('aria-current', String(isActive));
    });
  };

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const full = thumb.dataset.full;
      const alt = thumb.dataset.alt;

      if (full) mainImage.src = full;
      if (alt) mainImage.alt = alt;
      setActiveThumb(thumb);
    });
  });

  setActiveThumb(thumbs[0]);
});

const revealItems = document.querySelectorAll('.section, .product-card, .feature-item, .newsletter form, .site-footer__inner');

const footerAccordions = [...document.querySelectorAll('[data-footer-accordion]')];
const footerAccordionQuery = window.matchMedia('(min-width: 901px)');

const syncFooterAccordions = () => {
  if (!footerAccordions.length) return;

  // Leave footer accordions collapsed by default so they act as clickable
  // dropdowns on all screen sizes (desktop included). For accessibility
  // we do not force-open them.
  footerAccordions.forEach((accordion) => {
    accordion.open = false;
  });
};

syncFooterAccordions();

if (typeof footerAccordionQuery.addEventListener === 'function') {
  footerAccordionQuery.addEventListener('change', syncFooterAccordions);
} else if (typeof footerAccordionQuery.addListener === 'function') {
  footerAccordionQuery.addListener(syncFooterAccordions);
}

if ('IntersectionObserver' in window) {
  revealItems.forEach((item) => item.classList.add('js-reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      if (prefersReducedMotion) {
        entry.target.classList.add('is-visible');
      } else {
        // small stagger for visual polish
        setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
      }
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
}

// ── Header Scroll Blur & Shrink Effect ──
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.querySelector('.site-header');
  if (headerEl) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        headerEl.classList.add('site-header--scrolled');
      } else {
        headerEl.classList.remove('site-header--scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
});
```

## `assets/utilities.css`

```css
/* ============================================================
   WINGSTONE — utilities.css
   Spacing, typography, layout, responsive helpers
   ============================================================ */

/* ── Additional design tokens ── */
:root {
  /* Semantic aliases from settings colours */
  --bg:         var(--color-paper, #f8f8f6);
  --text:       var(--color-ink,   #111827);
  --muted:      var(--color-steel, #6b7280);
  --border:     var(--color-line,  #e5e7eb);
  --accent:     var(--color-accent);

  /* Container */
  --container:  1440px;

  /* Spacing scale */
  --space-xs:   .5rem;
  --space-sm:   1rem;
  --space-md:   2rem;
  --space-lg:   4rem;
  --space-xl:   8rem;
}

/* ── Container ── */
.container {
  width: min(var(--container), calc(100% - clamp(2.5rem, 8vw, 5rem) * 2));
  margin-inline: auto;
}

/* ── Typography utilities ── */
.text-muted       { color: var(--muted); }
.text-accent      { color: var(--accent); }
.text-xs          { font-size: .72rem; }
.text-sm          { font-size: .84rem; }
.text-lg          { font-size: 1.2rem; }
.text-xl          { font-size: 1.5rem; }

.eyebrow-label {
  display: block;
  color: var(--muted);
  font-size: .66rem;
  font-weight: 800;
  letter-spacing: .22em;
  text-transform: uppercase;
}

.display-text {
  font-family: var(--font-heading-family, Georgia, serif);
  font-weight: 600;
  line-height: .92;
  letter-spacing: -.04em;
}

.body-text {
  line-height: 1.65;
  color: var(--muted);
}

/* ── Layout utilities ── */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }

.flex-center { display: flex; align-items: center; justify-content: center; }
.flex-between { display: flex; align-items: center; justify-content: space-between; }

/* ── Spacing ── */
.u-mt-xs  { margin-top: var(--space-xs); }
.u-mt-sm  { margin-top: var(--space-sm); }
.u-mt-md  { margin-top: var(--space-md); }
.u-mt-lg  { margin-top: var(--space-lg); }
.u-mt-xl  { margin-top: var(--space-xl); }
.u-mb-xs  { margin-bottom: var(--space-xs); }
.u-mb-sm  { margin-bottom: var(--space-sm); }
.u-mb-md  { margin-bottom: var(--space-md); }
.u-mb-lg  { margin-bottom: var(--space-lg); }
.u-mb-xl  { margin-bottom: var(--space-xl); }

/* ── Section spacer ── */
.section-gap {
  padding-top:    clamp(4rem, 8vw, 7rem);
  padding-bottom: clamp(4rem, 8vw, 7rem);
}

/* ── Divider line ── */
.rule {
  border: 0;
  border-top: 1px solid var(--border);
  margin: 0;
}

/* ── Visually hidden ── */
.sr-only,
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ── Overflow helpers ── */
.overflow-hidden { overflow: hidden; }
.nowrap          { white-space: nowrap; }

/* ── Aspect ratios ── */
.aspect-square   { aspect-ratio: 1 / 1; }
.aspect-portrait { aspect-ratio: 3 / 4; }
.aspect-video    { aspect-ratio: 16 / 9; }
.aspect-cinema   { aspect-ratio: 21 / 9; }

/* ── Image fill ── */
.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ──────────────────────────────────────────────────────────
   RESPONSIVE — Mobile First
   ────────────────────────────────────────────────────────── */

/* ── Tablet — 860px ── */
@media (max-width: 860px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }

  .editorial-grid__inner {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    height: auto;
    min-height: 520px;
  }

  .editorial-cell:first-child {
    grid-column: span 2;
    grid-row: span 1;
    min-height: 280px;
  }
}

/* ── Mobile — 768px ── */
@media (max-width: 768px) {
  /* Hero */
  .hero-video {
    height: 85svh;
    min-height: 520px;
  }

  .hero-video .hero-content {
    padding: 0 1.5rem;
    padding-bottom: 2rem;
    justify-content: flex-end;
  }

  .hero-overlay {
    background: linear-gradient(
      180deg,
      transparent 0%,
      color-mix(in srgb, var(--color-paper, #f5f5f3), transparent 12%) 50%,
      color-mix(in srgb, var(--color-paper, #f5f5f3), transparent 4%) 100%
    );
  }

  .hero-title {
    font-size: clamp(3rem, 12vw, 4.5rem);
  }

  .hero-description {
    max-width: 100%;
    font-size: .95rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  /* Grids */
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
    gap: .75rem;
  }

  /* Cinematic banner */
  .cinematic-banner {
    height: clamp(360px, 60vh, 560px);
  }

  .cinematic-banner__content {
    padding: 2rem 1.5rem;
  }

  .cinematic-banner__heading {
    font-size: clamp(2rem, 8vw, 3rem);
  }

  /* Tech specs */
  .tech-specs__header,
  .tech-specs__track {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  /* Editorial grid */
  .editorial-grid__inner {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0 1.5rem;
    gap: .6rem;
  }

  .editorial-cell {
    min-height: 220px;
  }

  .editorial-cell:first-child {
    min-height: 320px;
  }

  /* Product card: show quick-add on mobile too */
  .product-card__quick-add {
    opacity: 1;
    transform: none;
    position: static;
    margin-top: .65rem;
    border-radius: 2px;
  }
}

/* ── Small mobile — 480px ── */
@media (max-width: 480px) {
  .hero-title {
    font-size: clamp(2.6rem, 14vw, 3.5rem);
  }

  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
    gap: .5rem;
  }

  .tech-spec-card {
    flex-basis: 180px;
  }
}
```

## `assets/wingstone-hero.css`

```css
/* ========================================
   WINGSTONE HERO
======================================== */

.wingstone-hero * {
  box-sizing: border-box;
}

.wingstone-hero {
  position: relative;
  overflow: hidden;
  min-height: 100vh;

  background:
    radial-gradient(circle at 20% 50%, rgba(94,120,155,0.18), transparent 55%),
    radial-gradient(circle at 80% 20%, rgba(142,164,198,0.12), transparent 45%),
    linear-gradient(160deg, #1D2C43 0%, #101827 60%, #0a1020 100%);

  padding: 120px 0 180px;
}

/* VIDEO */

.wingstone-hero-video-wrap {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.wingstone-hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: 0.22;

  mix-blend-mode: luminosity;
}

.wingstone-video-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(13,20,35,0.85) 0%,
      rgba(13,20,35,0.55) 45%,
      rgba(29,44,67,0.40) 100%
    );
}

/* CONTAINER */

.wingstone-hero-container {
  position: relative;
  z-index: 5;

  width: min(1400px, calc(100% - 60px));

  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 40px;
}

/* WATERMARK */

.wingstone-watermark {
  position: absolute;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  font-size: clamp(120px, 18vw, 340px);

  font-weight: 800;

  color: rgba(213,223,245,0.04);

  letter-spacing: -8px;

  z-index: 2;

  pointer-events: none;
}

/* LIGHT SWEEP */

.wingstone-light-sweep {
  position: absolute;

  top: -10%;
  left: 45%;

  width: 260px;
  height: 140%;

  background:
    linear-gradient(
      to right,
      transparent,
      rgba(213,223,245,0.06),
      transparent
    );

  transform: rotate(12deg);

  animation: sweep 9s cubic-bezier(.22,1,.36,1) infinite;

  z-index: 2;
}

@keyframes sweep {

  0% {
    transform: translateX(-200px) rotate(12deg);
  }

  100% {
    transform: translateX(500px) rotate(12deg);
  }

}

/* LEFT */

.wingstone-hero-content {
  max-width: 620px;
}

.wingstone-mini-label {
  font-size: 11px;
  letter-spacing: 4px;
  color: #8EA4C6;
  margin-bottom: 20px;
  font-weight: 700;
}

.wingstone-hero-heading {
  font-size: clamp(56px, 7vw, 110px);

  line-height: 0.95;

  letter-spacing: -4px;

  color: #D5DFF5;

  margin-bottom: 30px;

  font-weight: 800;
}

.wingstone-hero-heading span {
  color: #d4af37;
}

.wingstone-hero-description {
  font-size: 18px;

  line-height: 1.8;

  color: #8EA4C6;

  margin-bottom: 40px;

  max-width: 520px;
}

/* BUTTONS */

.wingstone-hero-buttons {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;

  margin-bottom: 35px;
}

.wingstone-btn-primary,
.wingstone-btn-secondary {
  height: 62px;

  padding: 0 34px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 18px;

  text-decoration: none;

  font-size: 13px;
  letter-spacing: 2px;

  transition: all 0.35s ease;
}

.wingstone-btn-primary {
  background: linear-gradient(135deg, #D5DFF5, #8EA4C6);

  color: #1D2C43;

  font-weight: 700;

  box-shadow: 0 18px 40px rgba(213,223,245,0.15);
}

.wingstone-btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 50px rgba(213,223,245,0.22);
  transition: all 0.55s cubic-bezier(.22,1,.36,1);
}

.wingstone-btn-secondary {
  border: 1px solid rgba(213,223,245,0.18);

  background: rgba(213,223,245,0.06);

  backdrop-filter: blur(16px);

  color: #D5DFF5;

  font-weight: 700;
}

.wingstone-btn-secondary:hover {
  transform: translateY(-4px);
  background: rgba(213,223,245,0.12);
  transition: all 0.55s cubic-bezier(.22,1,.36,1);
}

/* TAGS */

.wingstone-hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.wingstone-hero-tags span {
  font-size: 11px;
  letter-spacing: 2px;
  color: #5E789B;
  font-weight: 700;
}

/* RIGHT */

.wingstone-hero-visual {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
}

.wingstone-product-image {
  position: relative;

  z-index: 5;

  animation: float 5s ease-in-out infinite;

  filter:
    drop-shadow(0 40px 80px rgba(15,23,42,0.12));

  /* Restrict vertical size so hero doesn't dominate viewport */
  max-height: 520px;
  height: auto;

  /* Let width flow from the image's intrinsic ratio while capping size */
  width: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  object-fit: contain;
  /* nudge image slightly down so it aligns with left text */
  margin-top: 24px;
}

@keyframes float {

  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-14px);
  }

  100% {
    transform: translateY(0px);
  }

}

.wingstone-orbit {
  position: absolute;

  width: 500px;
  height: 500px;

  border-radius: 50%;

  border:
    1px solid rgba(255,255,255,0.6);
}

/* BOTTOM BAR */

.wingstone-bottom-bar {
  position: relative;
  z-index: 10;

  width: min(1400px, calc(100% - 60px));

  margin: 60px auto 0;

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 20px;

  background: rgba(29,44,67,0.55);

  backdrop-filter: blur(20px);

  border-radius: 24px;

  padding: 34px;

  border: 1px solid rgba(213,223,245,0.10);

  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
}

.wingstone-bottom-item {
  display: flex;
  gap: 18px;
  align-items: center;
}

.wingstone-bottom-icon {
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 48px;
  /* small downward nudge to sit visually centered with text */
  transform: translateY(3px);
}

/* Material symbol styling for bottom bar icons */
.wingstone-bottom-icon .material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48;
  font-size: 25px;
  color: var(--color-frost);
  display: inline-block;
  line-height: 1;
}

.wingstone-bottom-item h4 {
  font-size: 13px;

  letter-spacing: 2px;

  margin-bottom: 8px;

  color: #D5DFF5;
}

.wingstone-bottom-item p {
  font-size: 14px;

  color: #5E789B;
}

/* MOBILE */

@media (max-width: 1100px) {

  .wingstone-hero-container {
    grid-template-columns: 1fr;

    text-align: center;
  }

  .wingstone-hero-content {
    margin: 0 auto;
  }

  .wingstone-hero-buttons,
  .wingstone-hero-tags {
    justify-content: center;
  }

  .wingstone-hero-visual {
    order: -1;
  }

  .wingstone-product-image {
    max-width: 520px;
    width: auto;
  }

  .wingstone-bottom-bar {
    grid-template-columns: repeat(2, 1fr);
  }

}

@media (max-width: 768px) {

  .wingstone-hero {

    background:
      radial-gradient(circle at 50% 30%, rgba(94,120,155,0.20), transparent 60%),
      linear-gradient(180deg, #1D2C43 0%, #101827 100%);

    padding: 70px 0 50px;

    min-height: 90vh;

    overflow: hidden;
  }

  .wingstone-hero-content {

    order: 2;

    text-align: left;

    align-items: flex-start;

    justify-content: flex-start;

    max-width: 100%;

    width: 100%;

    margin-top: 0;

    position: relative;

    z-index: 20;

    padding-left: 6px;
  }

  .wingstone-hero-buttons {

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    justify-content: flex-start;

    gap: 14px;

    width: 100%;

    margin-bottom: 24px;
  }

  .wingstone-btn-primary,
  .wingstone-btn-secondary {

    width: 100%;

    justify-content: center;

    height: 58px;

    padding: 0 24px;

    border-radius: 18px;

    font-size: 11px;

    letter-spacing: 1.5px;
  }

  .wingstone-hero-tags {

    display: flex;

    flex-wrap: wrap;

    justify-content: flex-start;

    align-items: center;

    gap: 12px;
  }

  .wingstone-mini-label {

    font-size: 9px;

    letter-spacing: 2px;

    margin-bottom: 14px;

    text-align: left;
  }

  .wingstone-hero-heading {

    font-size: 48px;

    line-height: 0.92;

    letter-spacing: -3px;

    margin-bottom: 18px;

    max-width: 260px;

    text-align: left;
  }

  .wingstone-hero-description {

    font-size: 14px;

    line-height: 1.75;

    color: #8EA4C6;

    margin-bottom: 26px;

    max-width: 320px;

    text-align: left;
  }

  .wingstone-bottom-bar {
    grid-template-columns: 1fr;
  }

  .wingstone-watermark {

    font-size: 72px;

    top: 28%;

    opacity: 0.7;
  }

}

/* On narrow screens, push the visual lower and to the right so it sits in the area marked */
@media (max-width: 768px) {
  .wingstone-hero-visual {
    justify-content: flex-end;
    align-items: flex-start;
  }

  .wingstone-product-image {
    /* small downward offset to align with heading area */
    margin-top: 34px;
    margin-left: auto;
    margin-right: 0;
    /* slightly cap height for narrow devices */
    max-height: 360px;
  }
}

/* Smaller caps for product image on narrow screens */
@media (max-width: 1100px) {
  .wingstone-product-image {
    max-height: 420px;
    width: min(100%, 520px);
  }
}

@media (max-width: 480px) {
  .wingstone-product-image {
    max-height: 320px;
    width: auto;
    max-width: 100%;
  }
}

@media (max-width: 480px) {

  .wingstone-hero-heading {
    font-size: 44px;

    letter-spacing: -2px;
  }

  .wingstone-mini-label {
    letter-spacing: 2px;
  }

}

/* Slideshow controls (hero visual) */
.hero-visual__prev,
.hero-visual__next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(213,223,245,0.08);
  border: 1px solid rgba(213,223,245,0.06);
  backdrop-filter: blur(8px);
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  color: #D5DFF5;
  box-shadow: 0 6px 18px rgba(0,0,0,0.25);
}

.hero-visual__prev { left: 12px; }
.hero-visual__next { right: 12px; }

.hero-visual__prev .material-symbols-outlined,
.hero-visual__next .material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48;
  font-size: 20px;
  line-height: 1;
}

.hero-visual__prev:hover,
.hero-visual__next:hover {
  transform: translateY(-50%) scale(1.06);
  background: rgba(213,223,245,0.12);
}
```

## `config/settings_data.json`

```json
{
  "current": {
    "color_ink": "#04102f",
    "color_frost": "#f9f9ff",
    "color_steel": "#455373",
    "color_paper": "#f9f9ff",
    "color_line": "#dde3f0",
    "color_accent": "#cba72f",
    "heading_font": "georgia_n4",
    "body_font": "assistant_n4",
    "favicon": "shopify://shop_images/ChatGPT_Image_May_19_2026_04_43_21_PM.png",
    "brand_logo": "shopify://shop_images/wingstone-logo.png",
    "sections": {
      "header": {
        "type": "header",
        "settings": {
          "logo": "shopify://shop_images/wingstone-logo.png",
          "promo_text": "Extra 10% off with TFV10 / Free shipping on prepaid orders / New Wingstone drops live now"
        }
      },
      "footer": {
        "type": "footer",
        "settings": {
          "menu": "footer"
        }
      }
    },
    "content_for_index": []
  }
}
```

## `config/settings_schema.json`

```json
[
  {
    "name": "Theme info",
    "settings": [
      {
        "type": "paragraph",
        "content": "Wingstone theme built around a premium navy, ice, and muted gold palette."
      }
    ]
  },
  {
    "name": "Brand colors",
    "settings": [
      {
        "type": "color",
        "id": "color_ink",
        "label": "Ink navy",
        "default": "#04102f"
      },
      {
        "type": "color",
        "id": "color_frost",
        "label": "Ice pale",
        "default": "#f9f9ff"
      },
      {
        "type": "color",
        "id": "color_steel",
        "label": "Muted text",
        "default": "#455373"
      },
      {
        "type": "color",
        "id": "color_paper",
        "label": "Paper",
        "default": "#f9f9ff"
      },
      {
        "type": "color",
        "id": "color_line",
        "label": "Soft border",
        "default": "#dde3f0"
      },
      {
        "type": "color",
        "id": "color_accent",
        "label": "Accent",
        "default": "#cba72f"
      }
    ]
  },
  {
    "name": "Typography",
    "settings": [
      {
        "type": "font_picker",
        "id": "heading_font",
        "label": "Heading font",
        "default": "georgia_n4"
      },
      {
        "type": "font_picker",
        "id": "body_font",
        "label": "Body font",
        "default": "assistant_n4"
      }
    ]
  },
  {
    "name": "Brand assets",
    "settings": [
      {
        "type": "image_picker",
        "id": "favicon",
        "label": "Favicon"
      },
      {
        "type": "image_picker",
        "id": "brand_logo",
        "label": "Default logo"
      }
    ]
  }
]
```

## `design.md`

```markdown
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

```

## `docs/AGENT_HANDOFF.md`

```markdown
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
```

## `docs/METAFIELDS.md`

```markdown
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
```

## `layout/password.liquid`

```liquid
{{ content_for_header }}{{ content_for_layout }}
```

## `layout/theme.liquid`

```liquid
<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="theme-color" content="#04102f">
    <link rel="canonical" href="{{ canonical_url }}">
    {% if settings.favicon != blank %}
      <link rel="icon" href="{{ settings.favicon | image_url: width: 96, height: 96 }}" type="image/png">
    {% endif %}

    <title>
      {{ page_title }}
      {%- if current_tags %} &ndash; tagged "{{ current_tags | join: ', ' }}"{% endif -%}
      {%- if current_page != 1 %} &ndash; Page {{ current_page }}{% endif -%}
      {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}
    </title>

    {% if page_description %}
      <meta name="description" content="{{ page_description | escape }}">
    {% endif %}

    {{ content_for_header }}

    <!-- Google Fonts: Assistant (body) — Georgia is system serif, no import needed -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    {{ 'base.css' | asset_url | stylesheet_tag }}
    {{ 'wingstone-hero.css' | asset_url | stylesheet_tag }}
    {{ 'animations.css' | asset_url | stylesheet_tag }}
    {{ 'components.css' | asset_url | stylesheet_tag }}
    {{ 'utilities.css' | asset_url | stylesheet_tag }}
    {{ 'mobile-fixes.css' | asset_url | stylesheet_tag }}

    <script src="{{ 'constants.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'pubsub.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'smooth-scroll.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'global.js' | asset_url }}" defer="defer"></script>
    <script>
      window.routes = {
        root_url: {{ routes.root_url | json }},
        cart_url: {{ routes.cart_url | json }},
        cart_add_url: {{ routes.cart_add_url | json }},
        cart_change_url: {{ routes.cart_change_url | json }},
        cart_update_url: {{ routes.cart_update_url | json }},
        predictive_search_url: {{ routes.predictive_search_url | json }}
      };
      window.variantStrings = {
        addToCart: {{ 'products.product.add_to_cart' | t | json }},
        soldOut: {{ 'products.product.sold_out' | t | json }},
        unavailable: {{ 'products.product.unavailable' | t | json }}
      };
      window.cartStrings = {
        error: {{ 'sections.cart.cart_error' | t | json }},
        quantityError: {{ 'sections.cart.quantity_error' | t: quantity: '[quantity]' | json }}
      };
      window.quickOrderListStrings = {
        each: {{ 'sections.quick_order_list.each' | t: money: '[money]' | json }},
        min_error: {{ 'sections.quick_order_list.min_error' | t: min: '[min]' | json }},
        max_error: {{ 'sections.quick_order_list.max_error' | t: max: '[max]' | json }},
        step_error: {{ 'sections.quick_order_list.step_error' | t: step: '[step]' | json }}
      };
      window.accessibilityStrings = {
        imageAvailable: {{ 'products.product.media.image_available' | t: index: '[index]' | json }},
        countrySelectorSearchCount: {{ 'localization.country_selector.search_results' | t: count: '[count]' | json }},
        recipientFormExpanded: {{ 'products.recipient_form.expanded' | t | json }},
        recipientFormCollapsed: {{ 'products.recipient_form.collapsed' | t | json }}
      };
      window.fetchConfig = function(type = 'json') {
        return {
          method: 'POST',
          headers: {
            'Content-Type': type === 'json' ? 'application/json' : 'application/x-www-form-urlencoded',
            Accept: 'application/json'
          }
        };
      };
      window.CartPerformance = window.CartPerformance || {
        createStartingMarker() { return performance.now(); },
        measureFromMarker() {},
        measure() {},
        measureFromEvent() {}
      };
      /* Stitch design tokens exposed to JS */
      window.WINGSTONE = {
        colors: {
          navy: '#04102f',
          gold: '#cba72f',
          surface: '#f9f9ff',
          text: '#091b37'
        },
        freeShippingThreshold: 99900 /* ₹999 in paise */
      };
    </script>
    <script src="{{ 'details-disclosure.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'details-modal.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'search-form.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'predictive-search.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'facets.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'localization-form.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'recipient-form.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'show-more.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'cart.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'cart-notification.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'cart-drawer.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'product-gallery.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'theme.js' | asset_url }}" defer="defer"></script>
    <script src="{{ 'mobile-enhancements.js' | asset_url }}" defer="defer"></script>

    <style>
      /* ── Stitch Design Tokens (pinned, override Shopify settings) ── */
      :root {
        --color-ink:    #04102f;
        --color-frost:  #f9f9ff;
        --color-steel:  #455373;
        --color-paper:  #f9f9ff;
        --color-line:   #dde3f0;
        --color-accent: #cba72f;
        --color-accent-dk: #8a6e18;
        --color-accent-lt: #e8d48a;
        --color-surface: #f9f9ff;
        --color-text:   #091b37;

        /* Typography — Georgia system serif for headings, Assistant for body */
        --font-heading-family: Georgia, 'Times New Roman', serif;
        --font-body-family: 'Assistant', system-ui, -apple-system, sans-serif;

        /* Stitch spacing rhythm */
        --space-xs: clamp(.5rem, 1vw, .75rem);
        --space-sm: clamp(.85rem, 1.5vw, 1.15rem);
        --space-md: clamp(1.5rem, 3vw, 2.25rem);
        --space-lg: clamp(3rem, 6vw, 4.5rem);
        --page-max-width: 1240px;

        /* Cinematic easing */
        --ease-luxury: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      {{ settings.heading_font | font_face: font_display: 'swap' }}
      {{ settings.body_font | font_face: font_display: 'swap' }}
    </style>
  </head>

  <body>
    {% render 'page-loader' %}
    <a class="skip-link" href="#MainContent">Skip to content</a>
    {% section 'header' %}
    <main id="MainContent" class="main" role="main" tabindex="-1">
      {{ content_for_layout }}
    </main>
    {% section 'footer' %}

    <!-- Cart Drawer Backdrop -->
    <div class="cart-drawer-backdrop" data-cart-drawer-backdrop hidden></div>

    <!-- Premium Cart Drawer -->
    <aside class="cart-drawer" data-cart-drawer aria-hidden="true" aria-label="Shopping cart" role="dialog" aria-modal="true" hidden>
      <div class="cart-drawer__shell">

        <!-- Drawer Header -->
        <div class="cart-drawer__header">
          <div class="cart-drawer__header-left">
            <span class="cart-drawer__eyebrow">YOUR BAG</span>
            <h2 class="cart-drawer__title">Cart <span class="cart-drawer__count" data-cart-count></span></h2>
          </div>
          <button class="cart-drawer__close" type="button" data-cart-drawer-close aria-label="Close cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Shipping Progress Bar -->
        <div class="cart-drawer__ship-progress" data-ship-progress>
          <div class="cart-drawer__ship-track">
            <div class="cart-drawer__ship-fill" data-ship-fill style="width: 0%"></div>
          </div>
          <p class="cart-drawer__ship-label" data-ship-label>Add <strong data-ship-remaining></strong> more for free shipping</p>
        </div>

        <!-- Cart Items Body -->
        <div class="cart-drawer__body" data-cart-drawer-content>
          <p class="cart-drawer__loading">Loading cart…</p>
        </div>

      </div>
    </aside>

    <!-- Toast confirmation (global) -->
    <div id="cartToast" class="cart-toast" role="status" aria-live="polite" hidden>
      <div class="cart-toast__inner">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cba72f" stroke-width="2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>
        <span id="cartToastMessage"></span>
      </div>
    </div>
  </body>
</html>
```

## `locales/en.default.json`

```json
{
  "general": {
    "accessibility": {
      "skip_to_content": "Skip to content"
    }
  },
  "sections": {
    "collection_template": {
      "title": "Collection"
    },
    "collection_list": {
      "view_all": "View all"
    }
  }
  ,
  "products": {
    "facets": {
      "product_count_simple": {
        "one": "{{ count }} product",
        "other": "{{ count }} products"
      },
      "product_count": {
        "one": "{{ product_count }} of {{ count }} product",
        "other": "{{ product_count }} of {{ count }} products"
      }
    }
  }
}

```

## `scripts/make_logo_transparent.py`

```python
from PIL import Image
import os

base = os.path.dirname(os.path.dirname(__file__))
assets = os.path.join(base, 'assets')
logo_path = os.path.join(assets, 'wingstone-logo.png')
backup_path = os.path.join(assets, 'wingstone-logo.png.bak')

if not os.path.exists(logo_path):
    print('Logo not found at', logo_path)
    raise SystemExit(1)

# Backup
if not os.path.exists(backup_path):
    os.replace(logo_path, backup_path)
    print('Backed up original to', backup_path)
    src = backup_path
else:
    src = backup_path

img = Image.open(src).convert('RGBA')
width, height = img.size
pixels = img.load()

# Sample corners to detect background color
samples = []
corner_coords = [(0,0), (width-1,0), (0,height-1), (width-1,height-1)]
for x,y in corner_coords:
    samples.append(pixels[x,y])

# Average color (RGB)
avg = [0,0,0]
for r,g,b,a in samples:
    avg[0] += r
    avg[1] += g
    avg[2] += b
avg = [int(c/len(samples)) for c in avg]

# Tolerance: allow close colors
tolerance = 30

for y in range(height):
    for x in range(width):
        r,g,b,a = pixels[x,y]
        if abs(r-avg[0]) <= tolerance and abs(g-avg[1]) <= tolerance and abs(b-avg[2]) <= tolerance:
            # make transparent
            pixels[x,y] = (r,g,b,0)

# Save result overwriting original path
img.save(logo_path)
print('Saved transparent logo to', logo_path)
print('Original backed up at', backup_path)
```

## `sections/brand-values.liquid`

```liquid
<section id="trust" class="section feature-band">
  <div class="page-width">
    {% if section.settings.eyebrow != blank %}
      <p class="eyebrow">{{ section.settings.eyebrow }}</p>
    {% endif %}
    <h2 class="section-title">{{ section.settings.heading }}</h2>
    <div class="feature-grid">
      {% for block in section.blocks %}
        <article class="feature-item" {{ block.shopify_attributes }}>
          <div class="feature-item__number">{{ forloop.index | prepend: '0' }}</div>
          <h3>{{ block.settings.title }}</h3>
          <p>{{ block.settings.text }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Brand values",
  "settings": [
    {
      "type": "text",
      "id": "eyebrow",
      "label": "Eyebrow",
      "default": "Wingstone standard"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Sharp, calm, exact"
    }
  ],
  "blocks": [
    {
      "type": "value",
      "name": "Value",
      "settings": [
        {
          "type": "text",
          "id": "title",
          "label": "Title",
          "default": "Clean silhouette"
        },
        {
          "type": "textarea",
          "id": "text",
          "label": "Text",
          "default": "Strong shapes, restrained details, and a visual system that keeps the product in focus."
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Brand values",
      "blocks": [
        {
          "type": "value",
          "settings": {
            "title": "Clean silhouette",
            "text": "Strong shapes, restrained details, and a visual system that keeps the product in focus."
          }
        },
        {
          "type": "value",
          "settings": {
            "title": "Frosted palette",
            "text": "A cool blue foundation balanced by deep navy, steel accents, and bright product space."
          }
        },
        {
          "type": "value",
          "settings": {
            "title": "Premium rhythm",
            "text": "Editorial scale, crisp spacing, and clear shopping paths from first view to checkout."
          }
        }
      ]
    }
  ]
}
{% endschema %}
```

## `sections/cinematic-banner.liquid`

```liquid
<section class="cinematic-banner" id="cinematicBanner-{{ section.id }}">
  {% if section.settings.image != blank %}
    {{ section.settings.image | image_url: width: 1800 | image_tag: class: 'cinematic-banner__media', loading: 'lazy' }}
  {% else %}
    <div class="cinematic-banner__media" style="background-color: var(--color-frost, #e5e7eb);"></div>
  {% endif %}

  <div class="cinematic-banner__overlay"></div>

  <div class="page-width cinematic-banner__content">
    {% if section.settings.eyebrow != blank %}
      <p class="cinematic-banner__eyebrow">{{ section.settings.eyebrow }}</p>
    {% endif %}

    <h2 class="cinematic-banner__heading">{{ section.settings.heading }}</h2>

    {% if section.settings.text != blank %}
      <div class="cinematic-banner__text">{{ section.settings.text }}</div>
    {% endif %}

    {% if section.settings.button_label != blank %}
      <a class="btn-primary" href="{{ section.settings.button_link }}">
        {{ section.settings.button_label }}
        {% render 'icon-arrow' %}
      </a>
    {% endif %}
  </div>
</section>

{% schema %}
{
  "name": "Cinematic Banner",
  "settings": [
    {
      "type": "image_picker",
      "id": "image",
      "label": "Banner Image"
    },
    {
      "type": "text",
      "id": "eyebrow",
      "label": "Eyebrow",
      "default": "ATMOSPHERIC SHOT"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "SYSTEM OUTLINES"
    },
    {
      "type": "richtext",
      "id": "text",
      "label": "Description",
      "default": "<p>A visual exploration of form and function. Adapting to conditions, engineered for the daily transit.</p>"
    },
    {
      "type": "text",
      "id": "button_label",
      "label": "Button Label",
      "default": "View lookbook"
    },
    {
      "type": "url",
      "id": "button_link",
      "label": "Button Link"
    }
  ],
  "presets": [
    {
      "name": "Cinematic Banner"
    }
  ]
}
{% endschema %}
```

## `sections/collection-list.liquid`

```liquid
{{ 'component-card.css' | asset_url | stylesheet_tag }}

{%- style -%}
  .section-{{ section.id }}-padding {
    padding-top: {{ section.settings.padding_top | times: 0.75 | round: 0 }}px;
    padding-bottom: {{ section.settings.padding_bottom | times: 0.75 | round: 0 }}px;
  }

  @media screen and (min-width: 750px) {
    .section-{{ section.id }}-padding {
      padding-top: {{ section.settings.padding_top }}px;
      padding-bottom: {{ section.settings.padding_bottom }}px;
    }
  }

  .collection-list-shell {
    background:
      radial-gradient(circle at top left, color-mix(in srgb, var(--color-accent), transparent 84%) 0%, transparent 34%),
      linear-gradient(180deg, color-mix(in srgb, var(--color-paper), white 18%) 0%, var(--color-paper) 100%);
  }

  .collection-list-title-wrap {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.4rem;
  }

  .collection-list-title {
    margin: 0;
    letter-spacing: -.03em;
  }

  .collection-list-view-all-link {
    flex: none;
    color: var(--color-ink);
    text-decoration: none;
    font-weight: 600;
  }

  .collection-list-slider {
    position: relative;
  }

  .collection-list {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(78%, 1fr);
    gap: clamp(.9rem, 1.4vw, 1.25rem);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    padding-bottom: .25rem;
  }

  .collection-list::-webkit-scrollbar {
    display: none;
  }

  .collection-list__item {
    scroll-snap-align: start;
    min-width: 0;
  }

  .slider-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .9rem;
    margin-top: 1rem;
  }

  .slider-button {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--color-ink), transparent 84%);
    background: rgba(255,255,255,.88);
    color: var(--color-ink);
    cursor: pointer;
    box-shadow: 0 10px 24px rgba(10, 18, 30, .08);
  }

  .slider-counter {
    min-width: 4.5rem;
    text-align: center;
    font-size: .8rem;
    color: var(--color-steel);
  }

  .collection-list-view-all {
    margin-top: 1.5rem;
  }

  @media (min-width: 750px) {
    .collection-list.page-width-desktop {
      grid-auto-columns: minmax(24%, 1fr);
    }
  }

  @media (max-width: 749px) {
    .collection-list-title-wrap {
      align-items: center;
    }
  }
{%- endstyle -%}

{%- liquid
  assign collections_to_show = section.settings.collections_to_show | default: 4
  assign collection_count = 0
  assign shown_any = false
  assign show_mobile_slider = false
  if section.settings.swipe_on_mobile and collections_to_show > 1
    assign show_mobile_slider = true
  endif
-%}

<div class="collection-list-shell color-{{ section.settings.color_scheme }} gradient">
  <div class="collection-list-wrapper page-width isolate{% if show_mobile_slider %} page-width-desktop{% endif %}{% if section.settings.title == blank %} no-heading{% endif %}{% if section.settings.show_view_all == false %} no-mobile-link{% endif %} section-{{ section.id }}-padding">
    {%- unless section.settings.title == blank -%}
      <div class="collection-list-title-wrap{% if show_mobile_slider %} title-wrapper--self-padded-tablet-down{% else %} title-wrapper--self-padded-mobile{% endif %} title-wrapper--no-top-margin">
        <h2 id="SectionHeading-{{ section.id }}" class="collection-list-title inline-richtext {{ section.settings.heading_size }}">
          {{ section.settings.title }}
        </h2>

        {%- if section.settings.show_view_all and show_mobile_slider -%}
          <a href="{{ routes.collections_url }}" class="collection-list-view-all-link large-up-hide" aria-labelledby="ViewAll-{{ section.id }} SectionHeading-{{ section.id }}">
            {{- 'sections.collection_list.view_all' | t -}}
          </a>
        {%- endif -%}
      </div>
    {%- endunless -%}

    <div class="collection-list-slider">
      <ul class="collection-list contains-card contains-card--collection{% if settings.card_style == 'standard' %} contains-card--standard{% endif %}{% if section.settings.swipe_on_mobile %} slider slider--tablet grid--peek{% endif %} collection-list--auto-items" id="Slider-{{ section.id }}" role="list">
        {%- for collection in collections -%}
          {%- if collection.handle == 'all' or collection.handle == 'frontpage' -%}
            {%- continue -%}
          {%- endif -%}
          {%- if collection.products_count == 0 -%}
            {%- continue -%}
          {%- endif -%}
          {%- if collection_count >= collections_to_show -%}
            {%- break -%}
          {%- endif -%}

          {%- assign collection_count = collection_count | plus: 1 -%}
          {%- assign placeholder_image_index = collection_count | modulo: 4 | plus: 1 -%}
          {%- assign placeholder_image = 'collection-apparel-' | append: placeholder_image_index -%}
          <li id="Slide-{{ section.id }}-{{ collection_count }}" class="collection-list__item{% if show_mobile_slider %} slider__slide{% endif %}{% if settings.animations_reveal_on_scroll %} scroll-trigger animate--slide-in{% endif %}">
            {% render 'card-collection',
              card_collection: collection,
              media_aspect_ratio: section.settings.image_ratio,
              columns: 3,
              placeholder_image: placeholder_image
            %}
          </li>
          {%- assign shown_any = true -%}
        {%- endfor -%}
      </ul>

      {%- if show_mobile_slider and shown_any -%}
        <div class="slider-buttons" data-slider-buttons>
          <button type="button" class="slider-button slider-button--prev" name="previous" aria-label="Previous collections">‹</button>
          <div class="slider-counter caption">
            <span class="slider-counter--current">1</span>
            <span aria-hidden="true"> / </span>
            <span class="visually-hidden">of</span>
            <span class="slider-counter--total">{{ collection_count }}</span>
          </div>
          <button type="button" class="slider-button slider-button--next" name="next" aria-label="Next collections">›</button>
        </div>
      {%- endif -%}
    </div>

    {%- if section.settings.show_view_all and shown_any -%}
      <div class="center collection-list-view-all{% if show_mobile_slider %} small-hide medium-hide{% endif %}">
        <a href="{{ routes.collections_url }}" class="button" id="ViewAllButton-{{ section.id }}" aria-labelledby="ViewAllButton-{{ section.id }} SectionHeading-{{ section.id }}">
          {{- 'sections.collection_list.view_all' | t -}}
        </a>
      </div>
    {%- endif -%}
  </div>
</div>

<script>
  (() => {
    const slider = document.getElementById('Slider-{{ section.id }}');
    if (!slider) return;

    const root = slider.closest('.collection-list-wrapper');
    const prevButton = root?.querySelector('.slider-button--prev');
    const nextButton = root?.querySelector('.slider-button--next');
    const currentCounter = root?.querySelector('.slider-counter--current');
    const totalCounter = root?.querySelector('.slider-counter--total');
    const slides = Array.from(slider.querySelectorAll('.collection-list__item'));

    if (totalCounter) totalCounter.textContent = String(slides.length || 0);
    if (!prevButton || !nextButton || !slides.length) return;

    const stepSize = () => {
      const firstSlide = slides[0];
      if (!firstSlide) return slider.clientWidth * 0.8;
      return firstSlide.getBoundingClientRect().width + parseFloat(getComputedStyle(slider).gap || '0');
    };

    const updateCounter = () => {
      if (!currentCounter) return;
      const centerPoint = slider.scrollLeft + slider.clientWidth / 2;
      let activeIndex = 0;

      slides.forEach((slide, index) => {
        const start = slide.offsetLeft;
        const end = start + slide.offsetWidth;
        if (centerPoint >= start && centerPoint <= end) activeIndex = index;
      });

      currentCounter.textContent = String(activeIndex + 1);
    };

    prevButton.addEventListener('click', () => {
      slider.scrollBy({ left: -stepSize(), behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
      slider.scrollBy({ left: stepSize(), behavior: 'smooth' });
    });

    slider.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateCounter);
    }, { passive: true });

    updateCounter();
  })();
</script>

{% schema %}
{
  "name": "Collection list",
  "settings": [
    { "type": "inline_richtext", "id": "title", "default": "Collections", "label": "Title" },
    {
      "type": "select",
      "id": "heading_size",
      "options": [
        { "value": "h2", "label": "H2" },
        { "value": "h1", "label": "H1" },
        { "value": "h0", "label": "H0" },
        { "value": "hxl", "label": "HXL" },
        { "value": "hxxl", "label": "HXXL" }
      ],
      "default": "h1",
      "label": "Heading size"
    },
    {
      "type": "select",
      "id": "image_ratio",
      "options": [
        { "value": "adapt", "label": "Adapt" },
        { "value": "portrait", "label": "Portrait" },
        { "value": "square", "label": "Square" }
      ],
      "default": "square",
      "label": "Image ratio"
    },
    { "type": "range", "id": "collections_to_show", "min": 2, "max": 12, "step": 1, "default": 4, "label": "Collections to show" },
    { "type": "color_scheme", "id": "color_scheme", "label": "Color scheme", "default": "scheme-1" },
    { "type": "checkbox", "id": "show_view_all", "default": true, "label": "Show view all" },
    {
      "type": "select",
      "id": "columns_mobile",
      "options": [
        { "value": "1", "label": "1" },
        { "value": "2", "label": "2" }
      ],
      "default": "1",
      "label": "Columns mobile"
    },
    { "type": "checkbox", "id": "swipe_on_mobile", "default": true, "label": "Swipe on mobile" },
    { "type": "header", "content": "Spacing" },
    { "type": "range", "id": "padding_top", "min": 0, "max": 60, "step": 4, "default": 24, "label": "Padding top" },
    { "type": "range", "id": "padding_bottom", "min": 0, "max": 60, "step": 4, "default": 36, "label": "Padding bottom" }
  ],
  "presets": [
    {
      "name": "Collection list"
    }
  ]
}
{% endschema %}
```

## `sections/contact-page.liquid`

```liquid
<section class="section contact-page">
  <div class="page-width">
    <div class="contact-page__hero">
      <p class="eyebrow">Support</p>
      <h1 class="section-title">Contact us</h1>
      <p class="contact-page__lede">Questions about an order, a drop, or a sizing detail? Send a note and we’ll keep the path simple.</p>
    </div>

    <div class="contact-grid">
      <div class="contact-form page-shell__card">
        {% form 'contact' %}
          <div>
            <label for="ContactName">Name</label>
            <input id="ContactName" name="contact[name]" type="text" class="field" required>
          </div>

          <div>
            <label for="ContactEmail">Email</label>
            <input id="ContactEmail" name="contact[email]" type="email" class="field" required>
          </div>

          <div>
            <label for="ContactMessage">Message</label>
            <textarea id="ContactMessage" name="contact[body]" class="field" rows="6" required></textarea>
          </div>

          <div>
            <button class="button" type="submit">Send message</button>
          </div>
        {% endform %}
      </div>

      <div class="contact-details page-shell__card">
        <h3>Our address</h3>
        <p>Wingstone HQ<br>123 Example Street<br>City, Country</p>
        <h3>Support</h3>
        <p>Email: support@wingstone.example</p>
        <h3>Hours</h3>
        <p>Mon-Fri, 9am-6pm</p>
      </div>
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Contact page",
  "settings": []
}
{% endschema %}
```

## `sections/dynamic-product.liquid`

```liquid
{%- comment -%}
========================================
WINGSTONE DYNAMIC PRODUCT ENHANCEMENTS
Basic Starter Code
Place this file in sections/ and include it in product templates or use as a standalone section.
========================================
Add inside:
sections/main-product.liquid
or custom product section
{%- endcomment -%}

{%- assign theme_style = product.metafields.custom.theme_style | downcase -%}
{%- assign drop_name = product.metafields.custom.drop_name -%}
{%- assign subtitle = product.metafields.custom.subtitle -%}
{%- assign story = product.metafields.custom.story -%}
{%- assign accent = product.metafields.custom.accent_color -%}


<style>
/* =========================
DYNAMIC BACKGROUND THEMES
========================= */

.product-page {
  padding: 40px;
  border-radius: 24px;
}

{% case theme_style %}

{% when 'cyberpunk' %}
.product-page{
  background:#0f1115;
  color:white;
}
.dynamic-btn{
  background:#ff2d55;
  color:white;
}

{% when 'luxury' %}
.product-page{
  background:#F5F5F2;
  color:#111;
}
.dynamic-btn{
  background:black;
  color:white;
}

{% when 'minimal' %}
.product-page{
  background:#EFEFEF;
  color:#111;
}
.dynamic-btn{
  background:#222;
  color:white;
}

{% else %}
.product-page{
  background:white;
  color:black;
}
.dynamic-btn{
  background:black;
  color:white;
}
{% endcase %}



/* =========================
PRODUCT TITLE
========================= */

.dynamic-title{
  font-size:42px;
  font-weight:800;
  letter-spacing:-1px;
  margin-bottom:8px;
}

.dynamic-subtitle{
  opacity:.7;
  font-size:15px;
  margin-bottom:20px;
}



/* =========================
PRICE
========================= */

.dynamic-price{
  font-size:32px;
  font-weight:700;
}

.compare-price{
  text-decoration:line-through;
  opacity:.5;
  margin-left:10px;
}


/* =========================
BADGES
========================= */

.product-badges{
  display:flex;
  gap:10px;
  margin:20px 0;
}

.badge{
  padding:8px 14px;
  border-radius:999px;
  font-size:12px;
  font-weight:700;
  background:black;
  color:white;
}



/* =========================
BUTTONS
========================= */

.dynamic-btn{
  width:100%;
  padding:18px;
  border:none;
  border-radius:16px;
  font-size:16px;
  font-weight:700;
  cursor:pointer;
  transition:.3s ease;
}

.dynamic-btn:hover{
  transform:translateY(-2px);
  opacity:.9;
}



/* =========================
TRUST ICONS
========================= */

.trust-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:12px;
  margin-top:25px;
}

.trust-box{
  padding:16px;
  border:1px solid rgba(0,0,0,.08);
  border-radius:14px;
  text-align:center;
  font-size:13px;
}



/* =========================
STICKY MOBILE CTA
========================= */

.mobile-sticky{
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  background:white;
  padding:14px;
  box-shadow:0 -5px 20px rgba(0,0,0,.08);
  display:none;
}

@media(max-width:768px){
  .mobile-sticky{
    display:block;
  }
}

</style>


<div class="product-page">

  <!-- DROP -->
  {% if drop_name != blank %}
    <div class="dynamic-drop">
      {{ drop_name }}
    </div>
  {% endif %}



  <!-- TITLE -->
  <h1 class="dynamic-title">
    {{ product.title }}
  </h1>



  <!-- SUBTITLE -->
  {% if subtitle != blank %}
    <div class="dynamic-subtitle">
      {{ subtitle }}
    </div>
  {% endif %}



  <!-- PRICE -->
  <div class="dynamic-price">

    {{ product.price | money }}

    {% if product.compare_at_price > product.price %}
      <span class="compare-price">
        {{ product.compare_at_price | money }}
      </span>
    {% endif %}

  </div>



  <!-- BADGES -->
  <div class="product-badges">

    {% if product.available %}
      <div class="badge">IN STOCK</div>
    {% endif %}

    {% if product.compare_at_price > product.price %}
      <div class="badge">LIMITED OFFER</div>
    {% endif %}

    {% if product.tags contains 'best-seller' %}
      <div class="badge">BEST SELLER</div>
    {% endif %}

    {% if product.inventory_quantity < 10 %}
      <div class="badge">LOW STOCK</div>
    {% endif %}

  </div>



  <!-- STORY -->
  {% if story != blank %}
    <div class="product-story">
      {{ story }}
    </div>
  {% endif %}



  <!-- BUTTON -->
  <button class="dynamic-btn">
    ADD TO CART
  </button>



  <!-- TRUST -->
  <div class="trust-grid">

    <div class="trust-box">
      Premium Fabric
    </div>

    <div class="trust-box">
      Fade Resistant Print
    </div>

    <div class="trust-box">
      Easy Returns
    </div>

    <div class="trust-box">
      Free Shipping
    </div>

  </div>

</div>


<!-- MOBILE STICKY CTA -->

<div class="mobile-sticky">

  <button class="dynamic-btn">
    ADD TO CART — {{ product.price | money }}
  </button>

</div>
```

## `sections/editorial-grid.liquid`

```liquid
<section class="editorial-grid" id="editorialGrid-{{ section.id }}">
  <div class="editorial-grid__inner">
    {% for block in section.blocks limit: 3 %}
      <div class="editorial-cell" {{ block.shopify_attributes }}>
        {% if block.settings.image != blank %}
          {{ block.settings.image | image_url: width: 1200 | image_tag: class: 'editorial-cell__img', loading: 'lazy' }}
        {% else %}
          <div class="editorial-cell__img" style="background-color: var(--color-frost, #e5e7eb); height: 100%; width: 100%;"></div>
        {% endif %}
        
        <div class="editorial-cell__overlay"></div>
        
        <div class="editorial-cell__content">
          {% if block.settings.label != blank %}
            <span class="editorial-cell__label">{{ block.settings.label }}</span>
          {% endif %}
          {% if block.settings.heading != blank %}
            <h3 class="editorial-cell__heading">{{ block.settings.heading }}</h3>
          {% endif %}
          {% if block.settings.link != blank %}
            <a href="{{ block.settings.link }}" class="stretched-link" aria-label="{{ block.settings.heading | default: 'Read story' }}"></a>
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
</section>

{% schema %}
{
  "name": "Editorial Grid",
  "max_blocks": 3,
  "settings": [],
  "blocks": [
    {
      "type": "grid_item",
      "name": "Grid Item",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Cell Image"
        },
        {
          "type": "text",
          "id": "label",
          "label": "Label",
          "default": "SYSTEMS"
        },
        {
          "type": "text",
          "id": "heading",
          "label": "Heading",
          "default": "Modular Shell Systems"
        },
        {
          "type": "url",
          "id": "link",
          "label": "Link"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Editorial Grid",
      "blocks": [
        {
          "type": "grid_item",
          "settings": {
            "label": "SERIES 01",
            "heading": "Cinematic Shells & Outerwear"
          }
        },
        {
          "type": "grid_item",
          "settings": {
            "label": "01 DETAILS",
            "heading": "Utility Pocket Structures"
          }
        },
        {
          "type": "grid_item",
          "settings": {
            "label": "02 DETAILS",
            "heading": "Weatherproof Fabric Testing"
          }
        }
      ]
    }
  ]
}
{% endschema %}
```

## `sections/featured-collection.liquid`

```liquid
<section id="featured-products" class="section-gap featured-products">
  <div class="container">
    {% if section.settings.eyebrow != blank %}
      <span class="eyebrow-label u-mb-xs">{{ section.settings.eyebrow }}</span>
    {% endif %}
    <h2 class="display-text u-mb-sm">{{ section.settings.heading }}</h2>
    {% if section.settings.subtext != blank %}
      <p class="body-text u-mb-md" style="max-width: 560px;">{{ section.settings.subtext }}</p>
    {% endif %}

    <div class="grid-4 u-mb-lg">
      {% assign collection = collections[section.settings.collection] %}
      {% if collection == blank %}
        {% assign collection = collections.all %}
      {% endif %}
      {% if collection != blank and collection.products_count > 0 %}
        {% for product in collection.products limit: section.settings.products_to_show %}
          {% render 'product-card', product: product %}
        {% endfor %}
      {% else %}
        {% for i in (1..4) %}
          <article class="product-card">
            <div class="product-card__image">
              {{ 'product-' | append: i | placeholder_svg_tag: 'img-cover' }}
            </div>
            <div class="product-card__info">
              <h3 class="product-card__title">Wingstone product</h3>
              <div class="product-card__pricing">
                <span class="product-card__price">$0.00</span>
              </div>
            </div>
          </article>
        {% endfor %}
      {% endif %}
    </div>

    {% if collection != blank and collection.url != blank %}
      <div class="flex-center">
        <a class="btn-secondary" href="{{ collection.url }}">
          <span>View more products</span>
          {% render 'icon-arrow' %}
        </a>
      </div>
    {% endif %}
  </div>
</section>

{% schema %}
{
  "name": "Featured collection",
  "settings": [
    {
      "type": "text",
      "id": "eyebrow",
      "label": "Eyebrow",
      "default": "Featured"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Built in navy"
    },
    {
      "type": "textarea",
      "id": "subtext",
      "label": "Subtext",
      "default": "Every product is presented with a premium rhythm, clear details, and confident shopping paths."
    },
    {
      "type": "collection",
      "id": "collection",
      "label": "Collection"
    },
    {
      "type": "range",
      "id": "products_to_show",
      "min": 2,
      "max": 12,
      "step": 1,
      "label": "Products to show",
      "default": 8
    }
  ],
  "presets": [
    {
      "name": "Featured collection"
    }
  ]
}
{% endschema %}
```

## `sections/footer.liquid`

```liquid
<footer class="site-footer site-footer--liquid-glass liquid-glass page-width">
  <!-- Top Grid -->
  <div class="site-footer__top-grid">
    <!-- Logo/Brand Column -->
    <div class="site-footer__brand-col">
      <div class="site-footer__brand-logo">
        <img src="{{ 'wingstone-logo.png' | asset_url }}" alt="WINGSTONES" class="site-footer__logo-img" width="1254" height="1254" style="max-height: 28px; width: auto; filter: brightness(0) invert(1);" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';">
        <span class="site-footer__brand-title" style="display: none;">WINGSTONES</span>
      </div>
      <p class="site-footer__brand-desc">
        Future-focused streetwear with a quieter, more premium shopping experience.
      </p>
    </div>

    <!-- Links Columns -->
    <div class="site-footer__links-wrapper">
      <!-- Column 1 -->
      <details class="site-footer__links-col site-footer__accordion" data-footer-accordion>
        <summary class="site-footer__links-heading site-footer__summary">{{ linklists[section.settings.menu_1].title | default: 'Get to Know Us' }}</summary>
        <ul class="site-footer__links-list site-footer__panel">
          {%- if linklists[section.settings.menu_1].links.size > 0 -%}
            {%- for link in linklists[section.settings.menu_1].links -%}
              <li><a href="{{ link.url }}">{{ link.title }}</a></li>
            {%- endfor -%}
          {%- else -%}
            <li><a href="{{ routes.root_url }}">About Us</a></li>
            <li><a href="{{ routes.root_url }}#contact">Contact Us</a></li>
            <li><a href="{{ routes.root_url }}">Investment Opportunity</a></li>
            <li><a href="{{ routes.root_url }}">Influencer Hiring</a></li>
          {%- endif -%}
        </ul>
      </details>

      <!-- Column 2 -->
      <details class="site-footer__links-col site-footer__accordion" data-footer-accordion>
        <summary class="site-footer__links-heading site-footer__summary">{{ linklists[section.settings.menu_2].title | default: 'Policies' }}</summary>
        <ul class="site-footer__links-list site-footer__panel">
          {%- if linklists[section.settings.menu_2].links.size > 0 -%}
            {%- for link in linklists[section.settings.menu_2].links -%}
              <li><a href="{{ link.url }}">{{ link.title }}</a></li>
            {%- endfor -%}
          {%- else -%}
            <li><a href="{{ routes.cart_url }}">Track Order</a></li>
            <li><a href="{{ routes.cart_url }}">Exchange/Return Request</a></li>
            <li><a href="{{ routes.root_url }}">Terms and Conditions</a></li>
            <li><a href="{{ routes.root_url }}">Privacy Policy</a></li>
            <li><a href="{{ routes.root_url }}">Return &amp; Exchange Policy</a></li>
            <li><a href="{{ routes.root_url }}">Shipping and Delivery Policy</a></li>
          {%- endif -%}
        </ul>
      </details>

      <!-- Column 3 -->
      <details class="site-footer__links-col site-footer__accordion" data-footer-accordion>
        <summary class="site-footer__links-heading site-footer__summary">{{ linklists[section.settings.menu_3].title | default: 'Follow Us' }}</summary>
        <ul class="site-footer__links-list site-footer__panel">
          {%- if linklists[section.settings.menu_3].links.size > 0 -%}
            {%- for link in linklists[section.settings.menu_3].links -%}
              <li><a href="{{ link.url }}">{{ link.title }}</a></li>
            {%- endfor -%}
          {%- else -%}
            <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
          {%- endif -%}
        </ul>
      </details>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="site-footer__bottom-bar">
    <p class="site-footer__curated">
      &copy; {{ 'now' | date: '%Y' }} WINGSTONES. Curated by @GotInGeorgiG
    </p>
    <div class="site-footer__socials-wrapper">
      <span class="site-footer__socials-label">Join the Journey:</span>
      <div class="site-footer__social-icons">
        <a href="#music" class="site-footer__social-icon-link" aria-label="Music">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </a>
        <a href="#facebook" class="site-footer__social-icon-link" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href="#twitter" class="site-footer__social-icon-link" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
        <a href="#youtube" class="site-footer__social-icon-link" aria-label="Youtube">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
          </svg>
        </a>
        <a href="#instagram" class="site-footer__social-icon-link" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

{% schema %}
{
  "name": "Footer",
  "settings": [
    {
      "type": "link_list",
      "id": "menu_1",
      "label": "Discover Menu"
    },
    {
      "type": "link_list",
      "id": "menu_2",
      "label": "The Mission Menu"
    },
    {
      "type": "link_list",
      "id": "menu_3",
      "label": "Concierge Menu"
    }
  ]
}
{% endschema %}
```

## `sections/header.liquid`

```liquid
<header class="site-header" data-site-header>
  {% if section.settings.promo_text != blank %}
    <div class="site-header__promo" aria-label="{{ section.settings.promo_text | escape }}">
      <div class="site-header__promo-track">
        {% for i in (1..4) %}
          <span>{{ section.settings.promo_text }}</span>
          <span aria-hidden="true">·</span>
        {% endfor %}
      </div>
    </div>
  {% endif %}

  <div class="page-width site-header__shell">
    <div class="site-header__inner">

      <!-- LEFT: Hamburger + Desktop Nav -->
      <div class="site-header__left">
        <button class="wingstone-menu-trigger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
          <span class="wingstone-menu-trigger__bar"></span>
          <span class="wingstone-menu-trigger__bar"></span>
          <span class="wingstone-menu-trigger__bar"></span>
        </button>

        <nav class="site-nav" aria-label="Main navigation" data-site-nav>
          <a href="{{ routes.all_products_collection_url }}"
             class="site-nav__link{% if request.path == routes.all_products_collection_url %} is-active{% endif %}"
          >SHOP</a>

          <!-- Apparel Dropdown -->
          <div class="site-nav__dropdown-wrap">
            <a href="{{ routes.collections_url }}"
               class="site-nav__link site-nav__link--has-dropdown"
               aria-haspopup="true"
               aria-expanded="false"
            >APPAREL
              <svg class="site-nav__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </a>
            <div class="site-nav__dropdown" aria-hidden="true">
              <a href="{{ routes.collections_url }}/jackets" class="site-nav__dropdown-link">Jackets</a>
              <a href="{{ routes.collections_url }}/trousers" class="site-nav__dropdown-link">Trousers</a>
              <a href="{{ routes.collections_url }}/base-layers" class="site-nav__dropdown-link">Base Layers</a>
              <a href="{{ routes.collections_url }}/accessories" class="site-nav__dropdown-link">Accessories</a>
            </div>
          </div>

          <!-- Equipment Dropdown -->
          <div class="site-nav__dropdown-wrap">
            <a href="{{ routes.collections_url }}"
               class="site-nav__link site-nav__link--has-dropdown"
               aria-haspopup="true"
               aria-expanded="false"
            >EQUIPMENT
              <svg class="site-nav__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </a>
            <div class="site-nav__dropdown" aria-hidden="true">
              <a href="{{ routes.collections_url }}/packs" class="site-nav__dropdown-link">Packs</a>
              <a href="{{ routes.collections_url }}/footwear" class="site-nav__dropdown-link">Footwear</a>
              <a href="{{ routes.collections_url }}/gear" class="site-nav__dropdown-link">Gear</a>
            </div>
          </div>

          <a href="{{ routes.collections_url }}/expeditions"
             class="site-nav__link"
          >EXPEDITIONS</a>

          <a href="{{ pages.journal.url | default: routes.root_url }}"
             class="site-nav__link"
          >JOURNAL</a>

          <!-- LOOKBOOK — fixed: uses pages.lookbook Shopify page -->
          <a href="{{ pages.lookbook.url | default: routes.root_url }}"
             class="site-nav__link{% if request.page_type == 'page' and request.path contains 'lookbook' %} is-active{% endif %}"
          >LOOKBOOK</a>
        </nav>
      </div>

      <!-- CENTER: Brand Logo -->
      <a class="site-header__brand" href="{{ routes.root_url }}" aria-label="{{ shop.name }} — Home">
        {% if section.settings.logo != blank %}
          {{ section.settings.logo | image_url: width: 380 | image_tag:
            class: 'site-header__logo',
            alt: shop.name,
            loading: 'eager',
            width: section.settings.logo.width,
            height: section.settings.logo.height
          }}
        {% elsif settings.brand_logo != blank %}
          {{ settings.brand_logo | image_url: width: 380 | image_tag:
            class: 'site-header__logo',
            alt: shop.name,
            loading: 'eager'
          }}
        {% else %}
          <img
            class="site-header__logo"
            src="{{ 'wingstone-logo.png' | asset_url }}"
            alt="{{ shop.name | default: 'Wingstone' }}"
            width="1254"
            height="1254"
            loading="eager"
          >
        {% endif %}
      </a>

      <!-- RIGHT: Account + Cart -->
      <div class="site-header__actions">
        {% if shop.customer_accounts_enabled %}
          <a class="site-header__action site-header__action--account"
             href="{{ routes.account_url }}"
             aria-label="Account"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="20" height="20">
              <path d="M12 12.5a4.5 4.5 0 1 0-4.5-4.5 4.5 4.5 0 0 0 4.5 4.5Zm0 2c-4.42 0-8 2.31-8 5.17V21h16v-1.33c0-2.86-3.58-5.17-8-5.17Z" fill="currentColor"/>
            </svg>
          </a>
        {% endif %}
        <a class="site-header__action site-header__action--cart"
           href="{{ routes.cart_url }}"
           aria-label="Cart ({{ cart.item_count }} items)"
           data-cart-drawer-toggle
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="20" height="20">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6h18M16 10a4 4 0 01-8 0" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {% if cart.item_count > 0 %}
            <span class="site-header__badge">{{ cart.item_count }}</span>
          {% endif %}
        </a>
      </div>
    </div>
  </div>

  <!-- Mobile Menu Overlay -->
  <div class="wingstone-menu-overlay" data-menu-overlay aria-hidden="true"></div>

  <!-- Mobile Menu Drawer -->
  <nav class="wingstone-mobile-menu" id="mobileMenu" aria-label="Mobile navigation" aria-hidden="true" role="dialog">
    <div class="wingstone-menu-header">
      <button class="wingstone-menu-close" type="button" aria-label="Close menu" data-menu-close>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <span class="wingstone-menu-logo">WINGSTONE</span>
    </div>

    <div class="wingstone-menu-links">
      <a href="{{ routes.all_products_collection_url }}">SHOP</a>
      <a href="{{ routes.collections_url }}">APPAREL</a>
      <a href="{{ routes.collections_url }}">EQUIPMENT</a>
      <a href="{{ routes.collections_url }}/expeditions">EXPEDITIONS</a>
      <a href="{{ pages.journal.url | default: routes.root_url }}">JOURNAL</a>
      <!-- LOOKBOOK — fixed route using Shopify pages object -->
      <a href="{{ pages.lookbook.url | default: routes.root_url }}">LOOKBOOK</a>
    </div>

    <div class="wingstone-menu-footer">
      {% if shop.customer_accounts_enabled %}
        <a href="{{ routes.account_url }}" class="wingstone-menu-footer-link">Account</a>
      {% endif %}
      <a href="{{ routes.cart_url }}" class="wingstone-menu-footer-link" data-cart-drawer-toggle>Cart ({{ cart.item_count }})</a>
    </div>
  </nav>
</header>

<style>
/* ── Site Header Core ── */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: grid;
  gap: 0;
  pointer-events: none;
  background: color-mix(in srgb, var(--color-frost, #f9f9ff), transparent 8%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid color-mix(in srgb, var(--color-line, #dde3f0), transparent 30%);
  box-shadow: 0 4px 30px color-mix(in srgb, var(--color-ink, #04102f), transparent 95%);
  transition: transform .28s cubic-bezier(.2,.9,.2,1), box-shadow .28s ease;
}

.site-header.is-hidden {
  transform: translateY(-100%);
}

.site-header.is-scrolled {
  box-shadow: 0 8px 40px color-mix(in srgb, var(--color-ink, #04102f), transparent 90%);
}

.site-header__promo,
.site-header__shell {
  pointer-events: auto;
}

/* Promo bar */
.site-header__promo {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid color-mix(in srgb, var(--color-line, #dde3f0), transparent 35%);
  background: var(--color-ink, #04102f);
  color: color-mix(in srgb, var(--color-paper, #f9f9ff), var(--color-accent, #cba72f) 10%);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.site-header__promo-track {
  display: flex;
  width: max-content;
  gap: 1.5rem;
  padding: .42rem 0;
  font-size: .65rem;
  font-weight: 800;
  letter-spacing: .18em;
  text-transform: uppercase;
  animation: header-promo 28s linear infinite;
}

.site-header__promo-track span {
  white-space: nowrap;
}

/* Header shell */
.site-header__shell {
  width: min(1180px, calc(100% - 32px));
  background: transparent;
  margin: 0 auto;
}

.site-header__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 72px;
  gap: 1rem;
  padding: 0 .9rem;
}

.site-header__left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  min-width: 0;
}

/* Brand logo */
.site-header__brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}

.site-header__logo {
  max-width: min(118px, 30vw);
  height: auto;
  display: block;
}

/* Desktop nav */
.site-nav {
  display: none;
  align-items: center;
  gap: clamp(.7rem, 2vw, 1.8rem);
}

@media (min-width: 900px) {
  .site-nav { display: flex; }
}

.site-nav__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: .28rem;
  color: var(--color-ink, #04102f);
  font-size: .75rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  text-decoration: none;
  padding: .25rem 0;
  transition: color .18s ease;
  white-space: nowrap;
}

.site-nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--color-accent, #cba72f);
  border-radius: 999px;
  transition: width .25s cubic-bezier(.25,.46,.45,.94);
}

.site-nav__link:hover,
.site-nav__link.is-active {
  color: var(--color-accent, #cba72f);
}

.site-nav__link:hover::after,
.site-nav__link.is-active::after {
  width: 100%;
}

.site-nav__chevron {
  transition: transform .2s ease;
  flex-shrink: 0;
}

/* Dropdown wraps */
.site-nav__dropdown-wrap {
  position: relative;
}

.site-nav__dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: -1rem;
  min-width: 180px;
  background: color-mix(in srgb, var(--color-frost, #f9f9ff), white 6%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--color-line, #dde3f0);
  border-radius: 4px;
  box-shadow: 0 16px 48px color-mix(in srgb, var(--color-ink, #04102f), transparent 90%);
  padding: .5rem 0;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-8px);
  transition: opacity .22s ease, transform .22s cubic-bezier(.25,.46,.45,.94);
  z-index: 20;
}

.site-nav__dropdown-wrap:hover .site-nav__dropdown,
.site-nav__dropdown-wrap:focus-within .site-nav__dropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.site-nav__dropdown-wrap:hover .site-nav__chevron,
.site-nav__dropdown-wrap:focus-within .site-nav__chevron {
  transform: rotate(180deg);
}

.site-nav__dropdown-link {
  display: block;
  padding: .6rem 1.25rem;
  color: var(--color-ink, #04102f);
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: .06em;
  text-decoration: none;
  transition: background .15s ease, color .15s ease, padding-left .15s ease;
}

.site-nav__dropdown-link:hover {
  background: color-mix(in srgb, var(--color-accent, #cba72f), transparent 90%);
  color: var(--color-accent, #cba72f);
  padding-left: 1.6rem;
}

/* Header actions */
.site-header__actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: .6rem;
  min-width: 0;
}

.site-header__action {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--color-ink, #04102f), transparent 84%);
  background: color-mix(in srgb, var(--color-paper, #f9f9ff), transparent 18%);
  color: var(--color-ink, #04102f);
  text-decoration: none;
  transition: background .18s ease, border-color .18s ease, color .18s ease;
}

.site-header__action:hover {
  background: var(--color-ink, #04102f);
  color: var(--color-paper, #f9f9ff);
  border-color: var(--color-ink, #04102f);
}

.site-header__badge {
  position: absolute;
  top: -5px;
  right: -5px;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: 999px;
  background: var(--color-accent, #cba72f);
  color: var(--color-ink, #04102f);
  font-size: .6rem;
  font-weight: 800;
  line-height: 18px;
  text-align: center;
}

/* Hamburger trigger */
.wingstone-menu-trigger {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  border: 1px solid color-mix(in srgb, var(--color-line, #dde3f0), transparent 20%);
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: background .18s ease;
}

@media (min-width: 900px) {
  .wingstone-menu-trigger { display: none; }
}

.wingstone-menu-trigger:hover {
  background: color-mix(in srgb, var(--color-ink, #04102f), transparent 94%);
}

.wingstone-menu-trigger__bar {
  display: block;
  width: 18px;
  height: 1.5px;
  background: var(--color-ink, #04102f);
  border-radius: 999px;
  transition: transform .25s ease, opacity .25s ease;
}

/* Mobile menu overlay */
.wingstone-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(4, 16, 47, 0.5);
  z-index: 60;
  opacity: 0;
  pointer-events: none;
  transition: opacity .28s ease;
  backdrop-filter: blur(3px);
}

.wingstone-menu-overlay.is-open {
  opacity: 1;
  pointer-events: auto;
}

/* Mobile menu drawer */
.wingstone-mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: min(320px, 88vw);
  background: var(--color-frost, #f9f9ff);
  border-right: 1px solid var(--color-line, #dde3f0);
  box-shadow: 4px 0 40px color-mix(in srgb, var(--color-ink, #04102f), transparent 90%);
  transform: translateX(-110%);
  transition: transform .32s cubic-bezier(.2,.9,.2,1);
  z-index: 70;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.wingstone-mobile-menu.is-open {
  transform: translateX(0);
}

.wingstone-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--color-line, #dde3f0);
  flex-shrink: 0;
}

.wingstone-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--color-line, #dde3f0);
  background: transparent;
  color: var(--color-ink, #04102f);
  cursor: pointer;
  transition: background .18s ease;
}

.wingstone-menu-close:hover {
  background: var(--color-ink, #04102f);
  color: var(--color-paper, #f9f9ff);
}

.wingstone-menu-logo {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: .08em;
  color: var(--color-ink, #04102f);
  text-transform: uppercase;
}

.wingstone-menu-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
}

.wingstone-menu-links a {
  display: block;
  padding: .85rem 1.75rem;
  color: var(--color-ink, #04102f);
  font-size: .82rem;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid color-mix(in srgb, var(--color-line, #dde3f0), transparent 50%);
  transition: color .15s ease, padding-left .15s ease, background .15s ease;
}

.wingstone-menu-links a:hover {
  color: var(--color-accent, #cba72f);
  padding-left: 2.25rem;
  background: color-mix(in srgb, var(--color-accent, #cba72f), transparent 94%);
}

.wingstone-menu-footer {
  display: flex;
  gap: 1rem;
  padding: 1.25rem 1.75rem;
  border-top: 1px solid var(--color-line, #dde3f0);
  flex-shrink: 0;
}

.wingstone-menu-footer-link {
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--color-steel, #455373);
  text-decoration: none;
  transition: color .15s ease;
}

.wingstone-menu-footer-link:hover {
  color: var(--color-ink, #04102f);
}

.main { padding-top: 104px; }

@media (max-width: 899px) {
  .main { padding-top: 88px; }
}
</style>

<script>
/* ── Mobile menu toggle ── */
(function() {
  const trigger  = document.querySelector('.wingstone-menu-trigger');
  const menu     = document.querySelector('.wingstone-mobile-menu');
  const overlay  = document.querySelector('.wingstone-menu-overlay');
  const closeBtn = document.querySelector('.wingstone-menu-close');
  const header   = document.querySelector('.site-header');

  if (!trigger || !menu) return;

  const openMenu = () => {
    menu.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  trigger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  /* Escape key closes menu */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });

  /* ── Header hide/show on scroll ── */
  if (header) {
    let lastY = 0;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y > 120 && y > lastY + 4) {
            header.classList.add('is-hidden');
          } else if (y < lastY - 4 || y < 40) {
            header.classList.remove('is-hidden');
          }
          header.classList.toggle('is-scrolled', y > 40);
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
</script>

{% schema %}
{
  "name": "Header",
  "settings": [
    {
      "type": "image_picker",
      "id": "logo",
      "label": "Logo"
    },
    {
      "type": "text",
      "id": "promo_text",
      "label": "Moving promo text",
      "default": "Extra 10% off with TFV10 / Free shipping on prepaid orders / New Wingstone drops live now"
    }
  ]
}
{% endschema %}
```

## `sections/hero-video.liquid`

```liquid
<section class="hero-video" id="heroVideo-{{ section.id }}">
  {% if section.settings.video_url != blank %}
    <video class="hero-video__media" autoplay loop muted playsinline poster="{{ section.settings.poster_image | image_url: width: 1800 }}">
      <source src="{{ section.settings.video_url }}" type="video/mp4">
    </video>
  {% elsif section.settings.shopify_video != blank %}
    <video class="hero-video__media" autoplay loop muted playsinline poster="{{ section.settings.poster_image | image_url: width: 1800 }}">
      <source src="{{ section.settings.shopify_video.sources[0].url }}" type="video/mp4">
    </video>
  {% elsif section.settings.poster_image != blank %}
    {{ section.settings.poster_image | image_url: width: 1800 | image_tag: class: 'hero-video__media', loading: 'eager' }}
  {% else %}
    <div class="hero-video__media hero-video__media--placeholder" style="background-color: var(--color-frost, #e5e7eb);"></div>
  {% endif %}

  <div class="hero-overlay"></div>

  <div class="page-width hero-content">
    {% if section.settings.eyebrow != blank %}
      <p class="hero-subtitle">{{ section.settings.eyebrow }}</p>
    {% endif %}

    <h1 class="hero-title">
      {% if section.settings.headline_line1 != blank %}
        <span>{{ section.settings.headline_line1 }}</span><br>
      {% endif %}
      {% if section.settings.headline_line2 != blank %}
        {{ section.settings.headline_line2 }}
      {% endif %}
    </h1>

    {% if section.settings.text != blank %}
      <div class="hero-description">{{ section.settings.text }}</div>
    {% endif %}

    <div class="hero-buttons">
      {% if section.settings.primary_label != blank %}
        <a class="btn-primary" href="{{ section.settings.primary_link }}">
          {{ section.settings.primary_label }}
          {% render 'icon-arrow' %}
        </a>
      {% endif %}
      {% if section.settings.secondary_label != blank %}
        <a class="btn-secondary" href="{{ section.settings.secondary_link }}">
          {{ section.settings.secondary_label }}
        </a>
      {% endif %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Cinematic Hero Video",
  "settings": [
    {
      "type": "text",
      "id": "video_url",
      "label": "External MP4 Video URL"
    },
    {
      "type": "video",
      "id": "shopify_video",
      "label": "Shopify Hosted Video"
    },
    {
      "type": "image_picker",
      "id": "poster_image",
      "label": "Poster / Fallback Image"
    },
    {
      "type": "text",
      "id": "eyebrow",
      "label": "Eyebrow",
      "default": "NEW ARRIVALS"
    },
    {
      "type": "text",
      "id": "headline_line1",
      "label": "Headline Line 1",
      "default": "SYSTEMS"
    },
    {
      "type": "text",
      "id": "headline_line2",
      "label": "Headline Line 2",
      "default": "FOR MODERN AGENTS"
    },
    {
      "type": "richtext",
      "id": "text",
      "label": "Description",
      "default": "<p>A high-performance technical shell engineered with a water-resistant membrane and functional modular capabilities.</p>"
    },
    {
      "type": "text",
      "id": "primary_label",
      "label": "Primary Button Label",
      "default": "Explore collection"
    },
    {
      "type": "url",
      "id": "primary_link",
      "label": "Primary Button Link"
    },
    {
      "type": "text",
      "id": "secondary_label",
      "label": "Secondary Button Label",
      "default": "Technical specifications"
    },
    {
      "type": "url",
      "id": "secondary_link",
      "label": "Secondary Button Link"
    }
  ],
  "presets": [
    {
      "name": "Cinematic Hero Video"
    }
  ]
}
{% endschema %}
```

## `sections/hero-visual.liquid`

```liquid
{% comment %}
Hero visual section — allows the product/visual image to be placed as its own section
with editable image, max height, and X/Y offset sliders. Includes a lightweight
dragger in the preview so merchants can drag the image; offsets are saved via
the section settings (use the sliders to persist changes).
{% endcomment %}

<div id="hero-visual-{{ section.id }}" class="hero-visual-section">
  {% if section.blocks.size > 0 %}
    <div class="hero-visual__slides" data-section-id="{{ section.id }}">
      {% for block in section.blocks %}
        <div class="hero-visual__slide" data-block-id="{{ block.id }}">
          {% assign slide_image = block.settings.image | default: settings.image %}
          {% if slide_image != blank %}
            <img
              src="{{ slide_image | img_url: '2048x2048' }}"
              alt="{{ block.settings.image_alt | default: settings.image_alt }}"
              class="hero-visual__image"
              width="{{ slide_image.width }}"
              height="{{ slide_image.height }}"
              style="max-height: {{ settings.max_height }}px; width: auto; max-width: 100%; object-fit: {{ settings.object_fit }}; display: block;"
            />
          {% else %}
            <div class="hero-visual__placeholder">Select an image for this slide</div>
          {% endif %}

          {% if block.settings.heading or block.settings.text or block.settings.link != blank %}
            <div class="hero-visual__slide-caption">
              {% if block.settings.heading %}
                <h3>{{ block.settings.heading }}</h3>
              {% endif %}
              {% if block.settings.text %}
                <p>{{ block.settings.text }}</p>
              {% endif %}
              {% if block.settings.link != blank %}
                <a href="{{ block.settings.link }}" class="hero-visual__slide-link">{{ block.settings.link_label }}</a>
              {% endif %}
            </div>
          {% endif %}
        </div>
      {% endfor %}

      <button class="hero-visual__prev" aria-label="Previous slide"><span class="material-symbols-outlined">arrow_back</span></button>
      <button class="hero-visual__next" aria-label="Next slide"><span class="material-symbols-outlined">arrow_forward</span></button>
    </div>
  {% else %}
    <div class="hero-visual__wrap" data-section-id="{{ section.id }}" style="transform: translate({{ settings.x_offset }}%, {{ settings.y_offset }}%);">
      {% if settings.image != blank %}
        <img
          src="{{ settings.image | img_url: '2048x2048' }}"
          alt="{{ settings.image_alt }}"
          class="hero-visual__image"
          width="{{ settings.image.width }}"
          height="{{ settings.image.height }}"
          style="max-height: {{ settings.max_height }}px; width: auto; max-width: 100%; object-fit: {{ settings.object_fit }}; display: block;"
        />
      {% else %}
        <div class="hero-visual__placeholder">Select an image in the section settings</div>
      {% endif %}
    </div>
  {% endif %}

  {% comment %} Load the dragger/slider JS asset (only when section present) {% endcomment %}
  <script src="{{ 'hero-visual.js' | asset_url }}" defer="defer"></script>
</div>

{% schema %}
{
  "name": "Hero visual (draggable)",
  "tag": "section",
  "settings": [
    {
      "type": "image_picker",
      "id": "image",
      "label": "Image"
    },
    {
      "type": "text",
      "id": "image_alt",
      "label": "Image alt text",
      "default": "Hero visual"
    },
    {
      "type": "range",
      "id": "x_offset",
      "label": "Horizontal offset (%)",
      "min": -50,
      "max": 50,
      "step": 1,
      "default": 0
    },
    {
      "type": "range",
      "id": "y_offset",
      "label": "Vertical offset (%)",
      "min": -50,
      "max": 50,
      "step": 1,
      "default": 0
    },
    {
      "type": "range",
      "id": "max_height",
      "label": "Max height (px)",
      "min": 150,
      "max": 1200,
      "step": 10,
      "default": 520
    },
    {
      "type": "select",
      "id": "object_fit",
      "label": "Object fit",
      "options": [
        {"value": "contain", "label": "Contain"},
        {"value": "cover", "label": "Cover"}
      ],
      "default": "contain"
    }
  ],
  "blocks": [
    {
      "type": "slide",
      "name": "Slide",
      "settings": [
        { "type": "image_picker", "id": "image", "label": "Slide image" },
        { "type": "text", "id": "image_alt", "label": "Image alt text" },
        { "type": "text", "id": "heading", "label": "Heading" },
        { "type": "textarea", "id": "text", "label": "Text" },
        { "type": "url", "id": "link", "label": "Link" },
        { "type": "text", "id": "link_label", "label": "Link label", "default": "Learn more" }
      ]
    }
  ],
  "presets": [
    {
      "name": "Hero visual (draggable)",
      "category": "Hero"
    }
  ]
}
{% endschema %}
```

## `sections/hero-wingstone.liquid`

```liquid
<section class="wingstone-hero">

  <!-- VIDEO BACKGROUND -->
  <div class="wingstone-hero-video-wrap">

    <!-- REPLACE VIDEO -->
    <video
      class="wingstone-hero-video"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="{{ 'hero-video.mp4' | asset_url }}" type="video/mp4">
    </video>

    <div class="wingstone-video-overlay"></div>

  </div>

  <!-- WATERMARK -->
  <div class="wingstone-watermark">
    WINGSTONE
  </div>

  <!-- LIGHT SWEEP -->
  <div class="wingstone-light-sweep"></div>

  <div class="wingstone-hero-container">

    <!-- LEFT CONTENT -->
    <div class="wingstone-hero-content">

      <p class="wingstone-mini-label">
        FUTURISTIC STREETWEAR FOR THE NEXT ERA
      </p>

      <h1 class="wingstone-hero-heading">
        STREETWEAR <br>
        FOR THE <br>
        <span>NEXT ERA</span>
      </h1>

      <p class="wingstone-hero-description">
        Cinematic drops, sharp silhouettes, and a quieter premium
        experience built for the Wingstone world.
      </p>

      <div class="wingstone-hero-buttons">

        <a href="{{ routes.all_products_collection_url }}" class="wingstone-btn-primary">
          SHOP DROP →
        </a>

        <a href="{{ pages.about.url | default: routes.root_url }}" class="wingstone-btn-secondary">
          EXPLORE STORY
        </a>

      </div>

      <div class="wingstone-hero-tags">

        <span>✦ LIMITED RELEASE</span>
        <span>◈ PREMIUM QUALITY</span>
        <span>◎ FUTURE READY</span>

      </div>

    </div>

    

  </div>

  <!-- BOTTOM BAR -->
  <div class="wingstone-bottom-bar">

    <div class="wingstone-bottom-item">
      <div class="wingstone-bottom-icon"><span class="material-symbols-outlined">shield_lock</span></div>

      <div>
        <h4>SECURE CHECKOUT</h4>
        <p>Your data is 100% protected</p>
      </div>
    </div>

    <div class="wingstone-bottom-item">
      <div class="wingstone-bottom-icon"><span class="material-symbols-outlined">replay</span></div>

      <div>
        <h4>EASY RETURNS</h4>
        <p>Hassle-free returns within 14 days</p>
      </div>
    </div>

    <div class="wingstone-bottom-item">
      <div class="wingstone-bottom-icon"><span class="material-symbols-outlined">delivery_truck_bolt</span></div>

      <div>
        <h4>FREE SHIPPING</h4>
        <p>On all orders worldwide</p>
      </div>
    </div>

    <div class="wingstone-bottom-item">
      <div class="wingstone-bottom-icon"><span class="material-symbols-outlined">payments</span></div>

      <div>
        <h4>CASH ON DELIVERY</h4>
        <p>Pay when your order arrives</p>
      </div>
    </div>

  </div>

</section>

{% schema %}
{
  "name": "Wingstone Hero",
  "settings": [],
  "presets": [
    {
      "name": "Wingstone Hero"
    }
  ]
}
{% endschema %}
```

## `sections/main-404.liquid`

```liquid
<section class="section">
  <div class="page-width">
    <p class="eyebrow">404</p>
    <h1 class="section-title">Page not found</h1>
    <p>The page you were looking for does not exist.</p>
    <a class="button" href="{{ routes.root_url }}">Return home</a>
  </div>
</section>

{% schema %}
{
  "name": "404",
  "settings": []
}
{% endschema %}
```

## `sections/main-cart-items.liquid`

```liquid
<section class="cart-page" aria-label="Shopping cart">
  <div class="cart-page__container">

    {% if cart.item_count > 0 %}

      <!-- Page heading -->
      <div class="cart-page__heading">
        <p class="cart-page__eyebrow">YOUR ORDER</p>
        <h1 class="cart-page__title">Shopping Cart
          <span class="cart-page__count">({{ cart.item_count }} {% if cart.item_count == 1 %}item{% else %}items{% endif %})</span>
        </h1>
      </div>

      <div class="cart-page__layout">

        <!-- Items Column -->
        <div class="cart-page__items-col">
          <form action="{{ routes.cart_url }}" method="post" class="cart-form" id="cartForm">

            {% for item in cart.items %}
              <div class="cart-item" data-item-key="{{ item.key }}">

                <!-- Product image -->
                <div class="cart-item__image-wrap">
                  <a href="{{ item.url }}" aria-label="{{ item.product.title | escape }}">
                    {% if item.image %}
                      {{ item.image | image_url: width: 300 | image_tag:
                        loading: 'lazy',
                        alt: item.product.title,
                        class: 'cart-item__img'
                      }}
                    {% else %}
                      {{ 'product-1' | placeholder_svg_tag: 'cart-item__img' }}
                    {% endif %}
                  </a>
                </div>

                <!-- Product info -->
                <div class="cart-item__body">
                  <div class="cart-item__top">
                    <div class="cart-item__meta">
                      <span class="cart-item__vendor">{{ item.product.vendor }}</span>
                      <a href="{{ item.url }}" class="cart-item__title">{{ item.product.title }}</a>
                      {% unless item.product.has_only_default_variant or item.variant.title == 'Default Title' %}
                        <p class="cart-item__variant">{{ item.variant.title }}</p>
                      {% endunless %}
                    </div>

                    <!-- Remove button (top right) -->
                    <button
                      type="button"
                      class="cart-item__remove"
                      aria-label="Remove {{ item.product.title | escape }} from cart"
                      data-cart-remove-item="{{ item.key }}"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
                        <path d="M18 6L6 18M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>

                  <div class="cart-item__bottom">
                    <!-- Quantity selector -->
                    <div class="cart-item__qty-wrap">
                      <label class="cart-item__qty-label" for="qty_{{ item.key }}">Qty</label>
                      <div class="cart-item__qty-selector">
                        <button type="button" class="cart-item__qty-btn" aria-label="Decrease quantity" data-qty-minus="{{ item.key }}">−</button>
                        <input
                          type="number"
                          id="qty_{{ item.key }}"
                          class="cart-item__qty-input"
                          name="updates[]"
                          value="{{ item.quantity }}"
                          min="0"
                          aria-label="Quantity for {{ item.product.title | escape }}"
                          data-qty-input="{{ item.key }}"
                        >
                        <button type="button" class="cart-item__qty-btn" aria-label="Increase quantity" data-qty-plus="{{ item.key }}">+</button>
                      </div>
                    </div>

                    <!-- Price -->
                    <div class="cart-item__pricing">
                      {% if item.original_line_price > item.final_line_price %}
                        <span class="cart-item__price-compare">{{ item.original_line_price | money }}</span>
                      {% endif %}
                      <span class="cart-item__price">{{ item.final_line_price | money }}</span>
                    </div>
                  </div>
                </div>

              </div><!-- /cart-item -->
            {% endfor %}

            <!-- Cart update button (hidden, used via JS) -->
            <button type="submit" name="update" class="cart-form__update sr-only">Update cart</button>
          </form>

          <!-- Continue shopping -->
          <div class="cart-page__back">
            <a href="{{ routes.all_products_collection_url }}" class="cart-page__back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
                <path d="M19 12H5M5 12l7 7M5 12l7-7"/>
              </svg>
              Continue Shopping
            </a>
          </div>
        </div>

        <!-- Order Summary Sidebar -->
        <aside class="cart-page__summary" aria-label="Order summary">

          <!-- Free shipping progress -->
          {%- assign free_threshold_paise = 99900 -%}
          {%- assign total_paise = cart.total_price -%}
          {%- assign pct_to_free = total_paise | times: 100 | divided_by: free_threshold_paise -%}
          {%- if pct_to_free > 100 -%}{%- assign pct_to_free = 100 -%}{%- endif -%}

          <div class="cart-summary__ship">
            <div class="cart-summary__ship-track">
              <div class="cart-summary__ship-fill" style="width: {{ pct_to_free }}%"></div>
            </div>
            {% if total_paise >= free_threshold_paise %}
              <p class="cart-summary__ship-label cart-summary__ship-label--achieved">
                🎉 You've unlocked <strong>FREE SHIPPING</strong>
              </p>
            {% else %}
              {%- assign remaining = free_threshold_paise | minus: total_paise -%}
              <p class="cart-summary__ship-label">
                Add <strong>{{ remaining | money }}</strong> more for free shipping
              </p>
            {% endif %}
          </div>

          <div class="cart-summary__card">
            <h2 class="cart-summary__title">Order Summary</h2>

            <div class="cart-summary__rows">
              <div class="cart-summary__row">
                <span>Subtotal ({{ cart.item_count }} item{{ cart.item_count | pluralize: '', 's' }})</span>
                <span class="cart-summary__amount">{{ cart.total_price | money }}</span>
              </div>
              <div class="cart-summary__row">
                <span>Shipping</span>
                <span class="cart-summary__amount cart-summary__amount--free">
                  {% if total_paise >= free_threshold_paise %}Free{% else %}Calculated at checkout{% endif %}
                </span>
              </div>
              {% if cart.total_discount > 0 %}
                <div class="cart-summary__row cart-summary__row--discount">
                  <span>Discount</span>
                  <span class="cart-summary__amount">−{{ cart.total_discount | money }}</span>
                </div>
              {% endif %}
            </div>

            <div class="cart-summary__divider"></div>

            <div class="cart-summary__total">
              <span>Total</span>
              <span class="cart-summary__total-amount">{{ cart.total_price | money }}</span>
            </div>

            <p class="cart-summary__tax-note">Taxes included. Shipping calculated at checkout.</p>

            <!-- Checkout CTA -->
            <form action="/checkout" method="post" class="cart-summary__checkout">
              <button type="submit" name="checkout" class="cart-summary__checkout-btn" aria-label="Proceed to checkout">
                <span>Proceed to Checkout</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>

            <!-- Trust signals -->
            <div class="cart-summary__trust">
              <span title="Secure checkout">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Secure Checkout
              </span>
              <span title="Easy returns">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                Easy Returns
              </span>
              <span title="Cash on delivery">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                COD Available
              </span>
            </div>
          </div>

        </aside>
      </div>

    {% else %}

      <!-- Empty cart state -->
      <div class="cart-page__empty">
        <div class="cart-page__empty-icon" aria-hidden="true">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <path d="M3 6h18M16 10a4 4 0 01-8 0"/>
          </svg>
        </div>
        <h1 class="cart-page__empty-title">Your cart is empty</h1>
        <p class="cart-page__empty-desc">Looks like you haven't found anything yet. Start exploring our collections.</p>
        <a href="{{ routes.all_products_collection_url }}" class="cart-page__empty-cta">
          Explore Collection
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

    {% endif %}

  </div>
</section>

<style>
/* ── Cart Page Layout ── */
.cart-page {
  padding: clamp(2rem, 5vw, 3.5rem) 0 clamp(3rem, 6vw, 5rem);
  background: var(--color-frost, #f9f9ff);
  min-height: 60vh;
}

.cart-page__container {
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
}

.cart-page__heading {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: .3rem;
}

.cart-page__eyebrow {
  font-size: .65rem;
  font-weight: 800;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--color-accent, #cba72f);
  margin: 0;
}

.cart-page__title {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.75rem, 4vw, 2.4rem);
  font-weight: 400;
  color: var(--color-ink, #04102f);
  margin: 0;
  line-height: 1.1;
}

.cart-page__count {
  font-family: var(--font-body-family, sans-serif);
  font-size: .85rem;
  font-weight: 400;
  color: var(--color-steel, #455373);
  margin-left: .4rem;
}

.cart-page__layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 2rem;
  align-items: start;
}

@media (max-width: 900px) {
  .cart-page__layout {
    grid-template-columns: 1fr;
  }
}

/* ── Cart Items ── */
.cart-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-line, #dde3f0);
}

.cart-item:first-child {
  border-top: 1px solid var(--color-line, #dde3f0);
}

.cart-item__image-wrap {
  border-radius: 6px;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  background: var(--color-frost, #f9f9ff);
  border: 1px solid var(--color-line, #dde3f0);
}

.cart-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .3s ease;
}

.cart-item__image-wrap:hover .cart-item__img {
  transform: scale(1.03);
}

.cart-item__body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item__top {
  display: flex;
  align-items: flex-start;
  gap: .75rem;
}

.cart-item__meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: .25rem;
}

.cart-item__vendor {
  font-size: .66rem;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--color-accent, #cba72f);
}

.cart-item__title {
  font-size: .95rem;
  font-weight: 700;
  color: var(--color-ink, #04102f);
  text-decoration: none;
  line-height: 1.3;
  transition: color .15s ease;
}

.cart-item__title:hover {
  color: var(--color-accent, #cba72f);
}

.cart-item__variant {
  margin: 0;
  font-size: .76rem;
  color: var(--color-steel, #455373);
}

.cart-item__remove {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--color-line, #dde3f0);
  background: transparent;
  color: var(--color-steel, #455373);
  cursor: pointer;
  transition: background .15s ease, color .15s ease, border-color .15s ease;
}

.cart-item__remove:hover {
  background: #fff0f0;
  color: #cc0c39;
  border-color: rgba(204, 12, 57, .2);
}

.cart-item__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.cart-item__qty-wrap {
  display: flex;
  align-items: center;
  gap: .6rem;
}

.cart-item__qty-label {
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--color-steel, #455373);
}

.cart-item__qty-selector {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-line, #dde3f0);
  border-radius: 6px;
  overflow: hidden;
}

.cart-item__qty-btn {
  width: 34px;
  height: 34px;
  border: none;
  background: transparent;
  color: var(--color-ink, #04102f);
  font-size: 1.05rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .15s ease;
}

.cart-item__qty-btn:hover {
  background: var(--color-frost, #f9f9ff);
}

.cart-item__qty-input {
  width: 42px;
  height: 34px;
  text-align: center;
  border: none;
  border-left: 1px solid var(--color-line, #dde3f0);
  border-right: 1px solid var(--color-line, #dde3f0);
  background: transparent;
  font-size: .85rem;
  font-weight: 600;
  color: var(--color-ink, #04102f);
  -moz-appearance: textfield;
}

.cart-item__qty-input::-webkit-inner-spin-button,
.cart-item__qty-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.cart-item__pricing {
  display: flex;
  align-items: baseline;
  gap: .4rem;
}

.cart-item__price {
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-ink, #04102f);
}

.cart-item__price-compare {
  font-size: .78rem;
  color: var(--color-steel, #455373);
  text-decoration: line-through;
}

/* Continue shopping link */
.cart-page__back {
  margin-top: 1.5rem;
}

.cart-page__back-link {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--color-steel, #455373);
  text-decoration: none;
  transition: color .15s ease, gap .2s ease;
}

.cart-page__back-link:hover {
  color: var(--color-ink, #04102f);
  gap: .75rem;
}

/* ── Summary Sidebar ── */
.cart-summary__ship {
  margin-bottom: 1.25rem;
  background: var(--color-paper, #f9f9ff);
  border: 1px solid var(--color-line, #dde3f0);
  border-radius: 8px;
  padding: 1rem 1.25rem;
}

.cart-summary__ship-track {
  height: 4px;
  background: var(--color-line, #dde3f0);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: .65rem;
}

.cart-summary__ship-fill {
  height: 100%;
  background: var(--color-accent, #cba72f);
  border-radius: 999px;
  transition: width .6s cubic-bezier(.2,.9,.2,1);
}

.cart-summary__ship-label {
  margin: 0;
  font-size: .76rem;
  font-weight: 600;
  color: var(--color-steel, #455373);
}

.cart-summary__ship-label strong {
  color: var(--color-accent, #cba72f);
}

.cart-summary__ship-label--achieved {
  color: #1f8a5f;
}

.cart-summary__card {
  background: var(--color-paper, #f9f9ff);
  border: 1px solid var(--color-line, #dde3f0);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 8px 30px color-mix(in srgb, var(--color-ink, #04102f), transparent 94%);
}

.cart-summary__title {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--color-ink, #04102f);
  margin: 0;
}

.cart-summary__rows {
  display: flex;
  flex-direction: column;
  gap: .65rem;
}

.cart-summary__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .84rem;
  color: var(--color-steel, #455373);
}

.cart-summary__row--discount {
  color: #1f8a5f;
}

.cart-summary__amount {
  font-weight: 700;
  color: var(--color-ink, #04102f);
}

.cart-summary__amount--free {
  color: #1f8a5f;
}

.cart-summary__divider {
  height: 1px;
  background: var(--color-line, #dde3f0);
}

.cart-summary__total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .9rem;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
  color: var(--color-ink, #04102f);
}

.cart-summary__total-amount {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
}

.cart-summary__tax-note {
  margin: 0;
  font-size: .7rem;
  color: var(--color-steel, #455373);
  text-align: center;
}

.cart-summary__checkout-btn {
  width: 100%;
  min-height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  border: none;
  border-radius: 2px;
  background: linear-gradient(135deg, #735c00 0%, var(--color-accent, #cba72f) 50%, #e8d48a 100%);
  color: #fff;
  font-family: var(--font-body-family, sans-serif);
  font-size: .82rem;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 14px 40px color-mix(in srgb, var(--color-accent, #cba72f), transparent 78%);
  transition: transform .22s ease, filter .22s ease, box-shadow .22s ease;
}

.cart-summary__checkout-btn:hover {
  transform: translateY(-2px) scale(1.005);
  filter: brightness(1.06);
  box-shadow: 0 20px 50px color-mix(in srgb, var(--color-accent, #cba72f), transparent 72%);
}

.cart-summary__trust {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: .5rem;
  padding-top: .5rem;
  border-top: 1px solid var(--color-line, #dde3f0);
}

.cart-summary__trust span {
  display: flex;
  align-items: center;
  gap: .3rem;
  font-size: .66rem;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--color-steel, #455373);
}

.cart-summary__trust svg {
  flex-shrink: 0;
}

/* ── Empty state ── */
.cart-page__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: clamp(3rem, 8vw, 6rem) 1rem;
  gap: 1.25rem;
  max-width: 520px;
  margin: 0 auto;
}

.cart-page__empty-icon {
  color: color-mix(in srgb, var(--color-ink, #04102f), transparent 72%);
}

.cart-page__empty-title {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 400;
  color: var(--color-ink, #04102f);
  margin: 0;
}

.cart-page__empty-desc {
  margin: 0;
  color: var(--color-steel, #455373);
  font-size: .95rem;
  line-height: 1.65;
}

.cart-page__empty-cta {
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  padding: .85rem 1.75rem;
  border-radius: 2px;
  background: linear-gradient(135deg, #735c00 0%, var(--color-accent, #cba72f) 50%, #e8d48a 100%);
  color: #fff;
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  text-decoration: none;
  transition: transform .2s ease, filter .2s ease;
  box-shadow: 0 12px 36px color-mix(in srgb, var(--color-accent, #cba72f), transparent 80%);
}

.cart-page__empty-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.06);
}

/* ── Screen reader only ── */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
}
</style>

<script>
/* Cart page — inline quantity controls with AJAX update */
(function() {
  const form = document.getElementById('cartForm');
  if (!form) return;

  function updateCart(key, qty) {
    fetch(window.routes ? window.routes.cart_change_url : '/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ id: key, quantity: qty })
    })
    .then(r => r.json())
    .then(cart => {
      /* If qty reaches 0, remove the row */
      if (qty === 0) {
        const row = document.querySelector(`[data-item-key="${key}"]`);
        if (row) row.remove();
        /* Reload if cart empty */
        if (cart.item_count === 0) window.location.reload();
      }
    })
    .catch(console.error);
  }

  /* Quantity +/- buttons */
  form.addEventListener('click', (e) => {
    const minus = e.target.closest('[data-qty-minus]');
    const plus  = e.target.closest('[data-qty-plus]');
    const rem   = e.target.closest('[data-cart-remove-item]');

    if (minus) {
      const key = minus.dataset.qtyMinus;
      const input = form.querySelector(`[data-qty-input="${key}"]`);
      if (input) {
        const next = Math.max(0, parseInt(input.value, 10) - 1);
        input.value = next;
        updateCart(key, next);
      }
    }
    if (plus) {
      const key = plus.dataset.qtyPlus;
      const input = form.querySelector(`[data-qty-input="${key}"]`);
      if (input) {
        const next = Math.min(99, parseInt(input.value, 10) + 1);
        input.value = next;
        updateCart(key, next);
      }
    }
    if (rem) {
      const key = rem.dataset.cartRemoveItem;
      updateCart(key, 0);
    }
  });

  /* Manual qty input change */
  form.addEventListener('change', (e) => {
    const input = e.target.closest('[data-qty-input]');
    if (!input) return;
    const key = input.dataset.qtyInput;
    const qty = Math.max(0, parseInt(input.value, 10) || 0);
    input.value = qty;
    updateCart(key, qty);
  });
})();
</script>

{% schema %}
{
  "name": "Cart items",
  "settings": []
}
{% endschema %}
```

## `sections/main-collection-banner.liquid`

```liquid
{{ 'component-collection-hero.css' | asset_url | stylesheet_tag }}

<section class="collection-hero section">
  <div class="page-width collection-hero__inner">
    <div class="collection-hero__text-wrapper">
      <p class="eyebrow">{{ collection.products_count }} products</p>
      <h1 class="section-title">
        <span class="visually-hidden">{{ 'sections.collection_template.title' | t }}: </span>
        {{ collection.title | escape }}
      </h1>
      {%- if section.settings.show_collection_description and collection.description != blank -%}
        <div class="collection-hero__description rte">{{ collection.description }}</div>
      {%- endif -%}
    </div>

    {%- if section.settings.show_collection_image and collection.image -%}
      <div class="collection-hero__image-container">
        <img
          srcset="
            {%- if collection.image.width >= 165 -%}{{ collection.image | image_url: width: 165 }} 165w,{%- endif -%}
            {%- if collection.image.width >= 360 -%}{{ collection.image | image_url: width: 360 }} 360w,{%- endif -%}
            {%- if collection.image.width >= 535 -%}{{ collection.image | image_url: width: 535 }} 535w,{%- endif -%}
            {%- if collection.image.width >= 750 -%}{{ collection.image | image_url: width: 750 }} 750w,{%- endif -%}
            {{ collection.image | image_url }} {{ collection.image.width }}w
          "
          src="{{ collection.image | image_url: width: 750 }}"
          alt="{{ collection.image.alt | escape }}"
          width="{{ collection.image.width }}"
          height="{{ collection.image.height }}"
          loading="lazy"
        >
      </div>
    {%- endif -%}
  </div>
</section>

{% schema %}
{
  "name": "Main collection banner",
  "class": "section",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_collection_description",
      "default": true,
      "label": "Show collection description"
    },
    {
      "type": "checkbox",
      "id": "show_collection_image",
      "default": false,
      "label": "Show collection image"
    }
  ]
}
{% endschema %}
```

## `sections/main-collection-product-grid.liquid`

```liquid
{{ 'template-collection.css' | asset_url | stylesheet_tag }}
{{ 'component-facets.css' | asset_url | stylesheet_tag }}
{{ 'component-pagination.css' | asset_url | stylesheet_tag }}
<script src="{{ 'facets.js' | asset_url }}" defer="defer"></script>

{%- style -%}
  .section-{{ section.id }}-padding {
    padding-top: {{ section.settings.padding_top | times: 0.75 | round: 0 }}px;
    padding-bottom: {{ section.settings.padding_bottom | times: 0.75 | round: 0 }}px;
  }

  @media screen and (min-width: 750px) {
    .section-{{ section.id }}-padding {
      padding-top: {{ section.settings.padding_top }}px;
      padding-bottom: {{ section.settings.padding_bottom }}px;
    }
  }
{%- endstyle -%}

<div class="section-{{ section.id }}-padding gradient color-{{ section.settings.color_scheme }}">
  {%- paginate collection.products by section.settings.products_per_page -%}
    <facet-filters-form class="facets facets-vertical page-width">
      <form id="FacetFiltersForm" class="facets__form-vertical" action="{{ collection.url }}" method="get">
        {%- if collection.terms -%}
          <input type="hidden" name="q" value="{{ collection.terms | escape }}">
          <input name="options[prefix]" type="hidden" value="last">
        {%- endif -%}

        <div class="collection-toolbar collection-toolbar--filters">
          <div>
            <h2 class="section-title section-title--small">Filter &amp; sort</h2>
          </div>

          {%- if section.settings.enable_sorting -%}
            <div class="sorting">
              <label class="sorting__label" for="SortBy">Sort by</label>
              {%- assign sort_by = collection.sort_by | default: collection.default_sort_by -%}
              <select name="sort_by" id="SortBy" class="sorting__select">
                {%- for option in collection.sort_options -%}
                  <option value="{{ option.value | escape }}"{% if option.value == sort_by %} selected="selected"{% endif %}>
                    {{ option.name | escape }}
                  </option>
                {%- endfor -%}
              </select>
            </div>
          {%- endif -%}
        </div>

        {%- if section.settings.enable_filtering -%}
          {% render 'facets', results: collection, enable_filtering: true, enable_sorting: section.settings.enable_sorting, filter_type: section.settings.filter_type, paginate: paginate %}
        {%- endif -%}
      </form>
    </facet-filters-form>

    <div class="page-width product-grid-shell" id="ProductGridContainer">
      {%- if collection.products.size == 0 -%}
        <div class="collection collection--empty page-width" id="product-grid" data-id="{{ section.id }}">
          <div class="title-wrapper center">
            <h2 class="title title--primary">No products found in this collection.</h2>
          </div>
        </div>
      {%- else -%}
        <div class="collection">
          <div id="ProductCount" class="product-count-vertical light" role="status">
            <h2 class="product-count__text text-body">
              <span id="ProductCountDesktop">
                {%- if collection.results_count -%}
                  {{ 'templates.search.results_with_count' | t: terms: collection.terms, count: collection.results_count }}
                {%- elsif collection.products_count == collection.all_products_count -%}
                  {{ 'products.facets.product_count_simple' | t: count: collection.products_count }}
                {%- else -%}
                  {{ 'products.facets.product_count' | t: product_count: collection.products_count, count: collection.all_products_count }}
                {%- endif -%}
              </span>
            </h2>
          </div>

          <ul id="product-grid" data-id="{{ section.id }}" class="collection-grid">
            {%- for product in collection.products -%}
              <li class="collection-grid__item">
                {% render 'product-card', product: product %}
              </li>
            {%- endfor -%}
          </ul>

          {%- if paginate.pages > 1 -%}
            {% render 'pagination', paginate: paginate, anchor: '' %}
          {%- endif -%}
        </div>
      {%- endif -%}
    </div>
  {%- endpaginate -%}
</div>

{% schema %}
{
  "name": "Collection products",
  "class": "section",
  "settings": [
    {
      "type": "range",
      "id": "products_per_page",
      "min": 8,
      "max": 36,
      "step": 4,
      "default": 16,
      "label": "Products per page"
    },
    {
      "type": "range",
      "id": "columns_desktop",
      "min": 1,
      "max": 6,
      "step": 1,
      "default": 4,
      "label": "Columns desktop"
    },
    {
      "type": "select",
      "id": "columns_mobile",
      "default": "2",
      "label": "Columns mobile",
      "options": [
        { "value": "1", "label": "1" },
        { "value": "2", "label": "2" }
      ]
    },
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color scheme",
      "default": "scheme-1"
    },
    {
      "type": "checkbox",
      "id": "enable_filtering",
      "default": true,
      "label": "Enable filtering"
    },
    {
      "type": "checkbox",
      "id": "enable_sorting",
      "default": true,
      "label": "Enable sorting"
    },
    {
      "type": "select",
      "id": "filter_type",
      "default": "vertical",
      "label": "Filter type",
      "options": [
        { "value": "vertical", "label": "Vertical" },
        { "value": "horizontal", "label": "Horizontal" },
        { "value": "drawer", "label": "Drawer" }
      ]
    },
    {
      "type": "range",
      "id": "padding_top",
      "min": 0,
      "max": 60,
      "step": 4,
      "default": 24,
      "label": "Padding top"
    },
    {
      "type": "range",
      "id": "padding_bottom",
      "min": 0,
      "max": 60,
      "step": 4,
      "default": 36,
      "label": "Padding bottom"
    }
  ]
}
{% endschema %}
```

## `sections/main-collection.liquid`

```liquid
<section class="section">
  <div class="page-width collection-toolbar">
    <div>
      <p class="eyebrow">{{ collection.products_count }} products</p>
      <h1 class="section-title">{{ collection.title }}</h1>
      {% if collection.description != blank %}
        <div>{{ collection.description }}</div>
      {% endif %}
    </div>

    {% paginate collection.products by 16 %}
      <div class="product-grid">
        {% for product in collection.products %}
          {% render 'product-card', product: product %}
        {% else %}
          <p>No products found in this collection.</p>
        {% endfor %}
      </div>

      {% if paginate.pages > 1 %}
        <nav class="pagination" aria-label="Collection pagination">
          {% if paginate.previous %}
            <a class="pagination__link" href="{{ paginate.previous.url }}">Previous</a>
          {% endif %}
          <span class="pagination__current">Page {{ paginate.current_page }} of {{ paginate.pages }}</span>
          {% if paginate.next %}
            <a class="pagination__link" href="{{ paginate.next.url }}">View more</a>
          {% endif %}
        </nav>
      {% endif %}
    {% endpaginate %}
  </div>
</section>

{% schema %}
{
  "name": "Main collection",
  "settings": []
}
{% endschema %}
```

## `sections/main-list-collections.liquid`

```liquid
{{ 'component-card.css' | asset_url | stylesheet_tag }}
{{ 'component-pagination.css' | asset_url | stylesheet_tag }}

{%- style -%}
  .section-{{ section.id }}-padding {
    padding-top: {{ section.settings.padding_top | times: 0.75 | round: 0 }}px;
    padding-bottom: {{ section.settings.padding_bottom | times: 0.75 | round: 0 }}px;
  }

  @media screen and (min-width: 750px) {
    .section-{{ section.id }}-padding {
      padding-top: {{ section.settings.padding_top }}px;
      padding-bottom: {{ section.settings.padding_bottom }}px;
    }
  }

  .collection-index-shell {
    background:
      radial-gradient(circle at top left, color-mix(in srgb, var(--color-accent), transparent 86%) 0%, transparent 36%),
      linear-gradient(180deg, color-mix(in srgb, var(--color-paper), white 16%) 0%, var(--color-paper) 100%);
  }

  .collection-index-header {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .collection-index-title {
    margin: 0;
    letter-spacing: -.03em;
  }

  .collection-index-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(.9rem, 1.4vw, 1.25rem);
  }

  .collection-index-grid__item {
    min-width: 0;
  }

  @media (min-width: 900px) {
    .collection-index-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  @media (max-width: 749px) {
    .collection-index-header {
      align-items: center;
    }
  }
{%- endstyle -%}

{%- liquid
  assign collection_count = 0
-%}

<section class="collection-index-shell">
  <div class="page-width isolate section-{{ section.id }}-padding">
    <div class="collection-index-header">
      <div>
        <p class="eyebrow">{{ section.settings.eyebrow | default: 'Product Collections' }}</p>
        <h1 class="collection-index-title">{{ section.settings.title | default: 'Collections' }}</h1>
      </div>
      <a class="button button--secondary" href="{{ routes.root_url }}">Back to home</a>
    </div>

    <div class="collection-index-grid">
      {%- for collection in collections -%}
        {%- if collection.handle == 'all' or collection.handle == 'frontpage' -%}
          {%- continue -%}
        {%- endif -%}
        {%- if collection.products_count == 0 -%}
          {%- continue -%}
        {%- endif -%}
        {%- if collection_count >= section.settings.collections_to_show -%}
          {%- break -%}
        {%- endif -%}
        {%- assign collection_count = collection_count | plus: 1 -%}
        <div class="collection-index-grid__item">
          {% render 'card-collection', card_collection: collection, media_aspect_ratio: section.settings.image_ratio, columns: section.settings.columns_desktop %}
        </div>
      {%- endfor -%}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Collections index",
  "class": "section",
  "settings": [
    { "type": "text", "id": "eyebrow", "default": "Product Collections", "label": "Eyebrow" },
    { "type": "text", "id": "title", "default": "Collections", "label": "Title" },
    {
      "type": "select",
      "id": "image_ratio",
      "options": [
        { "value": "adapt", "label": "Adapt" },
        { "value": "portrait", "label": "Portrait" },
        { "value": "square", "label": "Square" }
      ],
      "default": "square",
      "label": "Image ratio"
    },
    { "type": "range", "id": "columns_desktop", "min": 2, "max": 4, "step": 1, "default": 4, "label": "Columns desktop" },
    { "type": "range", "id": "collections_to_show", "min": 2, "max": 20, "step": 1, "default": 12, "label": "Collections to show" },
    { "type": "range", "id": "padding_top", "min": 0, "max": 60, "step": 4, "default": 24, "label": "Padding top" },
    { "type": "range", "id": "padding_bottom", "min": 0, "max": 60, "step": 4, "default": 36, "label": "Padding bottom" }
  ]
}
{% endschema %}
```

## `sections/main-login.liquid`

```liquid
<section class="section login-page">
  <div class="page-width login-page__shell">
    <div class="login-page__card">
      <p class="eyebrow">Account access</p>
      <h1 class="section-title">Sign in</h1>
      <p class="login-page__text">Use your Wingstone account to track orders, manage details, and check out faster.</p>

      {% form 'customer_login', class: 'login-form' %}
        {{ form.errors | default_errors }}

        <label>
          <span class="eyebrow">Email</span>
          <input class="field" type="email" name="customer[email]" autocomplete="email" required>
        </label>

        <label>
          <span class="eyebrow">Password</span>
          <input class="field" type="password" name="customer[password]" autocomplete="current-password" required>
        </label>

        <button class="button" type="submit">Sign in</button>

        <div class="login-page__links">
          <a href="{{ routes.account_register_url }}">Create account</a>
          <a href="{{ routes.account_recover_url }}">Forgot password?</a>
        </div>
      {% endform %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Main login",
  "settings": []
}
{% endschema %}
```

## `sections/main-page.liquid`

```liquid
<section class="section page-shell">
  <div class="page-width page-shell__inner">
    <div class="page-shell__intro">
      <p class="eyebrow">Wingstone</p>
      <h1 class="section-title">{{ page.title }}</h1>
      <p class="page-shell__lede">Editorial brand pages, clear product stories, and no default Shopify clutter.</p>
    </div>

    <article class="page-shell__card rte page-content">
      {{ page.content }}
    </article>

    <div class="page-shell__actions">
      <a class="button" href="{{ routes.root_url }}#featured-products">Shop drops</a>
      <a class="button button--secondary" href="{{ routes.root_url }}#trust">Brand values</a>
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Main page",
  "settings": []
}
{% endschema %}
```

## `sections/main-product.liquid`

```liquid
<style>
  /* ─── Reset & Base ──────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --clr-bg:        var(--color-frost);
    --clr-surface:   var(--color-paper);
    --clr-border:    color-mix(in srgb, var(--color-line), var(--color-paper) 16%);
    --clr-border-2:  var(--color-line);
    --clr-text:      var(--color-ink);
    --clr-muted:     var(--color-steel);
    --clr-accent:    var(--color-accent);
    --clr-accent-dk: color-mix(in srgb, var(--color-accent), var(--color-ink) 16%);
    --clr-gold:      color-mix(in srgb, var(--color-accent), var(--color-paper) 28%);
    --clr-buy:       color-mix(in srgb, var(--color-ink), var(--color-accent) 8%);
    --clr-buy-dk:    color-mix(in srgb, var(--color-ink), black 10%);
    --clr-thumb-active: var(--color-accent);
    --radius-sm:  6px;
    --radius-md:  10px;
    --radius-lg:  16px;
    --shadow-sm:  0 1px 3px rgba(0,0,0,.08);
    --shadow-md:  0 4px 16px rgba(0,0,0,.10);
    --shadow-lg:  0 12px 40px rgba(0,0,0,.14);
    --font-head:  var(--font-heading-family);
    --font-body:  var(--font-body-family);
    --transition: .18s cubic-bezier(.4,0,.2,1);
    --pdp-vh-offset: 160px; /* space for headers/controls when fitting image to viewport */
  }

  body { background: var(--clr-bg); font-family: var(--font-body); color: var(--clr-text); }

  /* ─── Section wrapper ──────────────────────────────────────── */
  .pdp { max-width: 1280px; margin: 0 auto; padding: 28px 20px 60px; }

  /* ─── Breadcrumb ───────────────────────────────────────────── */
  .pdp-breadcrumb {
    display: flex; align-items: center; gap: 6px;
    font-size: 12px; color: var(--clr-muted); margin-bottom: 20px; flex-wrap: wrap;
  }
  .pdp-breadcrumb a { color: var(--clr-muted); text-decoration: none; transition: color .18s ease; }
  .pdp-breadcrumb a:hover { text-decoration: underline; color: var(--clr-accent); }
  .pdp-breadcrumb span { color: var(--clr-muted); }

  /* ─── Two-column layout ────────────────────────────────────── */
  .pdp-layout {
    display: grid;
    grid-template-columns: minmax(0, 560px) minmax(0, 1fr);
    gap: 36px;
    align-items: start;
  }
  @media (max-width: 860px) {
    .pdp-layout { grid-template-columns: 1fr; }
  }

  /* ─── Gallery ──────────────────────────────────────────────── */
  .pdp-gallery { display: flex; gap: 12px; position: sticky; top: 20px; }

  .pdp-thumbs {
    display: flex; flex-direction: column; gap: 8px;
    max-height: 560px; overflow-y: auto; padding-right: 2px;
  }
  .pdp-thumbs::-webkit-scrollbar { width: 3px; }
  .pdp-thumbs::-webkit-scrollbar-thumb { background: var(--clr-border-2); border-radius: 4px; }

  .pdp-thumb {
    width: 64px; height: 64px; flex-shrink: 0;
    border: 2px solid var(--clr-border);
    border-radius: var(--radius-sm);
    overflow: hidden; cursor: pointer;
    transition: border-color var(--transition), transform var(--transition);
    background: #fff;
  }
  .pdp-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .pdp-thumb:hover { border-color: var(--clr-muted); transform: scale(1.04); }
  .pdp-thumb.is-active { border-color: var(--clr-thumb-active); box-shadow: 0 0 0 1px var(--clr-thumb-active); }

  .pdp-main-img {
    flex: 1; border-radius: var(--radius-md);
    overflow: hidden; background: transparent;
    border: 1px solid var(--clr-border);
    aspect-ratio: 1 / 1.05;
    position: relative; cursor: zoom-in;
    width: 100%;
    max-width: 560px;
    margin-inline: auto;
    box-shadow: 0 8px 24px rgba(10,18,30,0.06);
  }
  .pdp-main-img {
    display: flex; align-items: center; justify-content: center;
  }
  .pdp-main-img.pdp-main-img--portrait { aspect-ratio: 3 / 4; }
  .pdp-main-img.pdp-main-img--landscape { aspect-ratio: 4 / 3; }
  .pdp-gallery-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    width: 44px;
    height: 44px;
    border: 1px solid color-mix(in srgb, var(--clr-border), white 18%);
    border-radius: 999px;
    background: rgba(255,255,255,.88);
    color: var(--clr-text);
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 10px 24px rgba(10,18,30,.14);
    transition: transform .18s ease, background-color .18s ease, box-shadow .18s ease;
    backdrop-filter: blur(10px);
  }
  .pdp-gallery-nav:hover,
  .pdp-gallery-nav:focus-visible {
    transform: translateY(-50%) scale(1.06);
    background: #fff;
    box-shadow: 0 14px 28px rgba(10,18,30,.18);
  }
  .pdp-gallery-nav--prev { left: 14px; }
  .pdp-gallery-nav--next { right: 14px; }
  .pdp-gallery-nav .material-symbols-outlined { font-size: 24px; line-height: 1; }
    .pdp-main-img img {
      width: auto; height: auto; max-width: 100%;
      max-height: calc(100vh - var(--pdp-vh-offset));
      object-fit: contain; object-position: center;
      display: block; padding: 6px;
      transition: transform .35s ease;
      background: transparent;
    }
  .pdp-main-img:hover img { transform: scale(1.06); }

  .pdp-badge {
    position: absolute; top: 12px; left: 12px;
    background: #cc0c39; color: #fff;
    font-family: var(--font-head); font-size: 11px; font-weight: 600;
    padding: 4px 8px; border-radius: 4px; letter-spacing: .5px;
  }

  /* ─── Info panel ───────────────────────────────────────────── */
  .pdp-info { display: flex; flex-direction: column; gap: 0; }

  /* Social proof strip */
  .pdp-social-proof {
    font-size: 13px; color: var(--clr-muted);
    margin-bottom: 10px;
  }
  .pdp-social-proof strong { color: var(--clr-text); }

  .pdp-vendor {
    font-family: var(--font-head); font-size: 13px;
    color: var(--clr-accent); font-weight: 600; margin-bottom: 6px;
    text-transform: uppercase; letter-spacing: .8px;
  }
  .pdp-vendor:hover { text-decoration: underline; cursor: pointer; }

  /* Title */
  .pdp-title {
    font-family: var(--font-head); font-size: 22px;
    font-weight: 600; line-height: 1.3; color: var(--clr-text);
    margin-bottom: 10px;
  }

  /* Rating — placeholder for real review app integration */
  .pdp-rating {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 14px; font-size: 13px;
  }
  .pdp-stars { color: var(--clr-accent); font-size: 15px; letter-spacing: 1px; }
  .pdp-rating-link { color: var(--clr-accent); text-decoration: none; }
  .pdp-rating-link:hover { text-decoration: underline; color: var(--clr-accent-dk); }
  .pdp-rating-sep { color: var(--clr-border-2); }

  /* Divider */
  .pdp-divider { height: 1px; background: var(--clr-border); margin: 14px 0; }

  /* Price block */
  .pdp-price-block { margin-bottom: 4px; }
  .pdp-price-label { font-size: 12px; color: var(--clr-muted); margin-bottom: 2px; }
  .pdp-price-row { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
  .pdp-price-currency { font-size: 16px; font-weight: 500; color: var(--clr-text); }
  .pdp-price-main {
    font-family: var(--font-head); font-size: 34px;
    font-weight: 700; color: var(--clr-text); line-height: 1;
  }
  .pdp-price-compare {
    font-size: 16px; color: var(--clr-muted);
    text-decoration: line-through;
  }
  .pdp-price-save {
    font-size: 13px; color: #cc0c39; font-weight: 600;
  }
  .pdp-badges { display:flex; gap:8px; margin-bottom:10px; align-items:center; }
  .pdp-flag { background: var(--product-accent, var(--clr-accent)); color: #fff; font-weight:800; padding:6px 8px; border-radius:999px; font-size:11px; letter-spacing:.08em; }
  .pdp-flag--lowstock { background: #c72a2a; }
  .pdp-flag--limited { background: #a33a00; }
  .pdp-flag--bestseller { background: #1f8a5f; }
  .pdp-flag--newdrop { background: #2b6cff; }
  .pdp-subtitle { color: var(--clr-muted); font-weight:700; margin-bottom:8px; }
  .pdp-story { color: var(--clr-base); margin-bottom:16px; line-height:1.5; max-width:60ch; }
  .pdp-shipping-note {
    font-size: 12.5px; color: var(--clr-muted); margin-top: 6px;
  }
  .pdp-shipping-note a { color: var(--clr-accent); text-decoration: none; }
  .pdp-shipping-note a:hover { text-decoration: underline; }

  /* ─── Variant Options ──────────────────────────────────────── */
  .pdp-variants { margin-top: 4px; }

  .pdp-option-group { margin-bottom: 18px; }

  .pdp-option-label {
    font-size: 13.5px; font-weight: 500; color: var(--clr-text);
    margin-bottom: 10px; display: flex; align-items: center; gap: 6px;
  }
  .pdp-option-label span.val {
    font-weight: 700; color: var(--clr-text);
  }
  .pdp-option-label a {
    margin-left: auto; font-size: 12px; color: var(--clr-accent);
    text-decoration: none; font-weight: 400;
  }
  .pdp-option-label a:hover { text-decoration: underline; color: var(--clr-accent-dk); }

  /* Color cards */
  .pdp-color-grid {
    display: flex; flex-wrap: wrap; gap: 8px;
  }
  .pdp-color-card {
    width: 68px; cursor: pointer;
    border: 2px solid var(--clr-border);
    border-radius: var(--radius-sm);
    overflow: hidden; background: #fff;
    transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
    position: relative;
  }
  .pdp-color-card img {
    width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block;
  }
  .pdp-color-card .price-tag {
    font-size: 10px; text-align: center; padding: 3px 2px;
    color: var(--clr-muted); white-space: nowrap; overflow: hidden;
    text-overflow: ellipsis; border-top: 1px solid var(--clr-border);
    background: #fafafa;
  }
  .pdp-color-card:hover { border-color: var(--clr-muted); transform: translateY(-2px); }
  .pdp-color-card.is-active {
    border-color: var(--clr-thumb-active);
    box-shadow: 0 0 0 1px var(--clr-thumb-active);
  }
  .pdp-color-card.is-active::after {
    content: '✓';
    position: absolute; top: 3px; right: 4px;
    font-size: 10px; color: var(--clr-thumb-active);
    font-weight: 700;
  }

  /* Color pagination dots */
  .pdp-color-pager {
    display: flex; align-items: center; gap: 6px;
    margin-top: 8px; font-size: 12px; color: var(--clr-muted);
  }
  .pdp-color-pager button {
    width: 26px; height: 26px; border: 1px solid var(--clr-border);
    border-radius: 50%; background: #fff; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; color: var(--clr-text);
    transition: background var(--transition), border-color var(--transition);
  }
  .pdp-color-pager button:hover { background: var(--clr-bg); border-color: var(--clr-muted); }
  .pdp-color-pager .page-btn {
    min-width: 26px; border-radius: 4px; font-weight: 600;
  }
  .pdp-color-pager .page-btn.is-active {
    background: var(--clr-thumb-active); color: #fff; border-color: var(--clr-thumb-active);
  }

  /* Size buttons */
  .pdp-size-grid { display: flex; flex-wrap: wrap; gap: 8px; }

  .pdp-size-btn {
    min-width: 52px; height: 40px; padding: 0 14px;
    border: 1.5px solid var(--clr-border-2);
    border-radius: var(--radius-sm); background: #fff;
    font-family: var(--font-head); font-size: 13.5px; font-weight: 500;
    color: var(--clr-text); cursor: pointer;
    transition: border-color var(--transition), background var(--transition), box-shadow var(--transition);
    position: relative;
  }
  .pdp-size-btn:hover:not(.disabled) {
    border-color: var(--clr-text); background: #fafafa;
  }
  .pdp-size-btn.is-active {
    border-color: var(--clr-thumb-active);
    box-shadow: 0 0 0 1.5px var(--clr-thumb-active);
    background: color-mix(in srgb, var(--clr-thumb-active), transparent 90%);
    color: var(--clr-thumb-active);
    font-weight: 700;
  }
  .pdp-size-btn.disabled {
    color: #bbb; cursor: not-allowed;
    background: repeating-linear-gradient(
      135deg, transparent, transparent 4px,
      #f3f3f1 4px, #f3f3f1 8px
    );
  }
  .pdp-size-btn.disabled::after {
    content: ''; position: absolute;
    top: 18px; left: 4px; right: 4px;
    height: 1px; background: #ccc;
  }

  /* Quantity */
  .pdp-qty-group { margin-bottom: 20px; }
  .pdp-qty-row { display: flex; align-items: center; gap: 0; width: fit-content; }
  .pdp-qty-btn {
    width: 36px; height: 36px; border: 1.5px solid var(--clr-border-2);
    background: #f7f7f5; cursor: pointer;
    font-size: 18px; color: var(--clr-text); line-height: 1;
    transition: background var(--transition);
    display: flex; align-items: center; justify-content: center;
  }
  .pdp-qty-btn:first-child { border-radius: var(--radius-sm) 0 0 var(--radius-sm); border-right: none; }
  .pdp-qty-btn:last-child  { border-radius: 0 var(--radius-sm) var(--radius-sm) 0; border-left: none; }
  .pdp-qty-btn:hover { background: var(--clr-border); }
  .pdp-qty-input {
    width: 52px; height: 36px; border: 1.5px solid var(--clr-border-2);
    text-align: center; font-size: 14px; font-weight: 600;
    font-family: var(--font-head);
    -moz-appearance: textfield; outline: none;
    color: var(--clr-text);
  }
  .pdp-qty-input::-webkit-inner-spin-button,
  .pdp-qty-input::-webkit-outer-spin-button { -webkit-appearance: none; }

  /* CTA Buttons */
  .pdp-cta { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }

  .pdp-btn {
    width: 100%; max-width: 360px; height: 48px;
    border: none; border-radius: 100px; cursor: pointer;
    font-family: var(--font-head); font-size: 15px; font-weight: 600;
    letter-spacing: .3px; transition: all var(--transition);
    position: relative; overflow: hidden;
  }
  .pdp-btn::after {
    content: ''; position: absolute; inset: 0;
    background: rgba(0,0,0,.0); transition: background var(--transition);
  }
  .pdp-btn:hover::after { background: rgba(0,0,0,.06); }
  .pdp-btn:active { transform: scale(.98); }

  .pdp-btn--cart {
    background: var(--clr-buy);
    color: #ffffff;
    box-shadow: 0 2px 6px rgba(4, 16, 47, 0.15);
  }
  .pdp-btn--cart:hover { background: var(--clr-buy-dk); box-shadow: 0 4px 12px rgba(4, 16, 47, 0.25); }

  .pdp-btn--buy {
    background: linear-gradient(135deg, #735c00 0%, var(--clr-accent) 50%, #e8d48a 100%);
    color: #ffffff;
    box-shadow: 0 8px 28px rgba(203,167,47,.3);
  }
  .pdp-btn--buy:hover { filter: brightness(1.06); box-shadow: 0 12px 36px rgba(203,167,47,.38); }

  .pdp-btn:disabled {
    background: var(--clr-border); color: var(--clr-muted); cursor: not-allowed; box-shadow: none;
  }

  .pdp-mobile-bar {
    display: none;
  }

  .pdp-mobile-bar__note {
    margin: .55rem 0 0;
    color: var(--clr-muted);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    text-align: center;
  }

  /* Trust badges */
  .pdp-trust {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 8px; margin-bottom: 18px;
  }
  .pdp-trust-item {
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    background: #fff; border: 1px solid var(--clr-border);
    border-radius: var(--radius-sm); padding: 10px 4px;
    font-size: 10.5px; color: var(--clr-muted); text-align: center;
    font-weight: 500; line-height: 1.3;
  }
  .pdp-trust-icon { width: 20px; height: 20px; color: var(--clr-accent); display: block; flex-shrink: 0; }
  .pdp-trust-item span { color: var(--clr-text); font-size: 13px; font-weight: 600; margin-top: 4px; }
  @media (max-width: 540px) {
    .pdp-trust { grid-template-columns: repeat(2,1fr); }
  }

  /* Delivery & meta */
  .pdp-delivery {
    display: flex; gap: 6px;
    font-size: 13px; align-items: flex-start;
    margin-bottom: 14px;
  }
  .pdp-delivery-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
  .pdp-delivery-text { line-height: 1.5; }
  .pdp-delivery-text strong { color: #007600; }

  /* Stock note */
  .pdp-stock {
    font-size: 13.5px; color: #cc0c39; font-weight: 600;
    margin-bottom: 14px; display: none;
  }
  .pdp-stock.show { display: block; }

  /* Description */
  .pdp-description {
    margin-top: 8px;
    font-size: 14px; color: var(--clr-muted); line-height: 1.7;
  }
  .pdp-description ul { padding-left: 18px; margin: 6px 0; }
  .pdp-description li { margin-bottom: 4px; }

  /* ─── Size Chart Modal ─────────────────────────────────────── */
  .pdp-modal-backdrop {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(0,0,0,.5); backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none;
    transition: opacity var(--transition);
  }
  .pdp-modal-backdrop.is-open { opacity: 1; pointer-events: all; }

  .pdp-modal {
    background: #fff; border-radius: var(--radius-lg);
    width: min(560px, 95vw); max-height: 88vh;
    overflow-y: auto; padding: 28px 28px 32px;
    transform: translateY(24px) scale(.97);
    transition: transform .2s cubic-bezier(.34,1.56,.64,1);
    box-shadow: var(--shadow-lg);
  }
  .pdp-modal-backdrop.is-open .pdp-modal { transform: translateY(0) scale(1); }

  .pdp-modal-header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 20px;
  }
  .pdp-modal-title { font-family: var(--font-head); font-size: 20px; font-weight: 700; }
  .pdp-modal-close {
    width: 32px; height: 32px; border: 1px solid var(--clr-border);
    border-radius: 50%; background: #fff; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; color: var(--clr-muted);
    transition: background var(--transition), color var(--transition);
  }
  .pdp-modal-close:hover { background: var(--clr-text); color: #fff; }

  /* Tab switcher */
  .pdp-tabs {
    display: flex; gap: 4px; background: var(--clr-bg);
    border-radius: 8px; padding: 4px; margin-bottom: 20px;
  }
  .pdp-tab {
    flex: 1; height: 34px; border: none; border-radius: 6px;
    background: transparent; cursor: pointer;
    font-family: var(--font-head); font-size: 13px; font-weight: 500;
    color: var(--clr-muted); transition: all var(--transition);
  }
  .pdp-tab.is-active {
    background: #fff; color: var(--clr-text); font-weight: 600;
    box-shadow: var(--shadow-sm);
  }

  .pdp-tab-panel { display: none; }
  .pdp-tab-panel.is-active { display: block; }

  /* Size chart table */
  .pdp-sc-table {
    width: 100%; border-collapse: collapse; font-size: 13.5px;
  }
  .pdp-sc-table th {
    background: var(--clr-bg); font-family: var(--font-head);
    font-size: 12px; font-weight: 600; text-transform: uppercase;
    letter-spacing: .6px; padding: 10px 12px;
    border-bottom: 2px solid var(--clr-border);
    color: var(--clr-muted); text-align: left;
  }
  .pdp-sc-table td {
    padding: 9px 12px; border-bottom: 1px solid var(--clr-border);
    color: var(--clr-text);
  }
  .pdp-sc-table tbody tr:last-child td { border-bottom: none; }
  .pdp-sc-table tbody tr:hover td { background: #fafaf8; }
  .pdp-sc-table td:first-child { font-weight: 700; }

  .pdp-sc-note {
    font-size: 12px; color: var(--clr-muted); margin-top: 14px;
    padding: 10px 14px; background: #fffbf0;
    border-left: 3px solid var(--clr-gold); border-radius: 4px;
  }

  /* ─── Responsive adjustments ───────────────────────────────── */
  @media (max-width: 640px) {
    .pdp {
      padding: 16px 14px calc(140px + env(safe-area-inset-bottom));
      overflow-x: hidden;
      max-width: 100vw;
    }
    .pdp-layout > * { min-width: 0; }
    .pdp-gallery { flex-direction: column; position: static; }
    .pdp-thumbs { flex-direction: row; max-height: none; overflow-x: auto; padding-bottom: 2px; }
    .pdp-thumb { width: 56px; height: 56px; }
    :root { --pdp-vh-offset: calc(140px + env(safe-area-inset-bottom)); }
    .pdp-main-img {
      width: 100%;
      max-width: 100%;
      aspect-ratio: 1 / 1;
      max-height: calc(100vh - var(--pdp-vh-offset));
      display: flex; align-items: center; justify-content: center;
      background: transparent;
      box-shadow: 0 8px 20px rgba(10,18,30,0.06);
    }
    .pdp-main-img img {
      width: 100%;
      height: 100%;
      padding: 6px;
      max-width: 100%;
      max-height: calc(100vh - var(--pdp-vh-offset));
      object-fit: contain;
      background: transparent;
    }
    .pdp-gallery-nav {
      width: 38px;
      height: 38px;
    }
    .pdp-gallery-nav--prev { left: 10px; }
    .pdp-gallery-nav--next { right: 10px; }
    .pdp-btn { max-width: 100%; }
    .pdp-title { font-size: 18px; }
    .pdp-price-main { font-size: 28px; }
    .pdp-size-btn {
      min-width: 48px;
      height: 44px;
      padding: 0 16px;
      font-size: 14px;
    }
    .pdp input,
    .pdp select,
    .pdp textarea {
      font-size: 16px;
    }
    .pdp-mobile-bar {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: .65rem;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 65;
      padding: .85rem .9rem calc(.85rem + env(safe-area-inset-bottom));
      background: color-mix(in srgb, var(--clr-surface), white 12%);
      border-top: 1px solid var(--clr-border);
      box-shadow: 0 -16px 40px rgba(10, 18, 30, .12);
      backdrop-filter: blur(16px);
    }
    .pdp-mobile-bar .pdp-btn {
      height: 48px;
      margin: 0;
      max-width: none;
      font-size: 12px;
      letter-spacing: .12em;
    }
    .pdp-mobile-bar .pdp-btn--buy {
      background: linear-gradient(135deg, #735c00 0%, var(--clr-accent) 50%, #e8d48a 100%);
      color: #ffffff;
      box-shadow: 0 10px 24px rgba(203,167,47,.24);
    }
  }

  @media (max-width: 1024px) {
    .pdp-main-img {
      max-width: min(100%, 620px);
    }
  }
</style>

{% comment %} product-scoped accent color (falls back to theme setting) {% endcomment %}
{% assign prod_accent = product.metafields.custom.accent_color | default: settings.color_accent %}
<section class="pdp" style="--product-accent: {{ prod_accent }};">

  <!-- Breadcrumb -->
  <nav class="pdp-breadcrumb" aria-label="Breadcrumb">
    <a href="{{ routes.root_url }}">Home</a>
    <span>›</span>
    <a href="{{ routes.all_products_collection_url }}">{{ collection.title | default: 'All Products' }}</a>
    <span>›</span>
    <span>{{ product.title | truncate: 40 }}</span>
  </nav>

  <div class="pdp-layout">

    <!-- ── Gallery ── -->
    <div class="pdp-gallery">
        {% assign product_images = product.images %}
      <div class="pdp-thumbs" id="pdpThumbs" aria-label="Product image thumbnails">
        {% for image in product_images %}
          <button
            class="pdp-thumb{% if forloop.first %} is-active{% endif %}"
            type="button"
            data-full="{{ image | image_url: width: 1400 }}"
            data-alt="{{ image.alt | default: product.title | escape }}"
            aria-label="View image {{ forloop.index }} of {{ product_images.size }}"
            {% if forloop.first %}aria-current="true"{% endif %}
          >
            <img src="{{ image | image_url: width: 180 }}" alt="{{ image.alt | default: product.title | escape }}" loading="lazy" width="{{ image.width }}" height="{{ image.height }}">
          </button>
        {% endfor %}
      </div>

      <div class="pdp-main-img" id="pdpMainImg">
        {% if product.compare_at_price_max > product.price_min %}
          {% assign save_pct = product.compare_at_price_max | minus: product.price_min | times: 100 | divided_by: product.compare_at_price_max %}
          <span class="pdp-badge">-{{ save_pct }}%</span>
        {% endif %}
        {% if product_images.size > 1 %}
          <button class="pdp-gallery-nav pdp-gallery-nav--prev" type="button" id="pdpGalleryPrev" aria-label="Previous product image">
            <span class="material-symbols-outlined" aria-hidden="true">chevron_left</span>
          </button>
          <button class="pdp-gallery-nav pdp-gallery-nav--next" type="button" id="pdpGalleryNext" aria-label="Next product image">
            <span class="material-symbols-outlined" aria-hidden="true">chevron_right</span>
          </button>
        {% endif %}
        <img
          id="pdpMainImgEl"
          src="{{ product.featured_image | image_url: width: 1400 }}"
          alt="{{ product.title | escape }}"
          loading="eager"
          width="{{ product.featured_image.width }}"
          height="{{ product.featured_image.height }}"
        >
      </div>
    </div><!-- /gallery -->

    <!-- ── Info ── -->
    <div class="pdp-info">

      <p class="pdp-vendor">{{ product.vendor | default: shop.name }}</p>

      <!-- Dynamic badges -->
      <div class="pdp-badges">
        {% assign inv = product.selected_or_first_available_variant.inventory_quantity | default: 0 %}
        {% if product.selected_or_first_available_variant.available and inv != nil and inv <= 10 and inv > 0 %}
          <span class="pdp-flag pdp-flag--lowstock">LOW STOCK</span>
        {% endif %}

        {% if product.selected_or_first_available_variant.compare_at_price > product.selected_or_first_available_variant.price %}
          <span class="pdp-flag pdp-flag--limited">LIMITED OFFER</span>
        {% endif %}

        {% if product.tags contains 'best-seller' %}
          <span class="pdp-flag pdp-flag--bestseller">BEST SELLER</span>
        {% endif %}

        {% if product.tags contains 'new-drop' or product.tags contains 'new' %}
          <span class="pdp-flag pdp-flag--newdrop">NEW DROP</span>
        {% endif %}
      </div>

      <h1 class="pdp-title">{{ product.title }}</h1>

      {% if product.metafields.custom.subtitle != blank %}
        <div class="pdp-subtitle">{{ product.metafields.custom.subtitle }}</div>
      {% elsif product.type != blank %}
        <div class="pdp-subtitle">{{ product.type }}</div>
      {% endif %}
      {% if product.metafields.custom.story != blank %}
        <div class="pdp-story">{{ product.metafields.custom.story }}</div>
      {% endif %}

      <div class="pdp-divider"></div>

      <!-- Price -->
      <div class="pdp-price-block">
        <div class="pdp-price-label">Price</div>
        <div class="pdp-price-row">
          {% if product.selected_or_first_available_variant.compare_at_price > product.selected_or_first_available_variant.price %}
            <span class="pdp-price-compare" data-compare-price>
              ₹{{ product.selected_or_first_available_variant.compare_at_price | money_without_currency }}
            </span>
            <span class="pdp-price-save" data-save-label>Save ₹{{ product.selected_or_first_available_variant.compare_at_price | minus: product.selected_or_first_available_variant.price | money_without_currency }}</span>
          {% endif %}
          <span class="pdp-price-currency">₹</span>
          <span class="pdp-price-main" data-price-display>
            {{ product.selected_or_first_available_variant.price | divided_by: 100.0 | floor }}
          </span>
          <sup style="font-size:14px;color:var(--clr-text);font-weight:600;align-self:flex-start;margin-top:8px">
            {{ product.selected_or_first_available_variant.price | modulo: 100 | prepend: '.' }}
          </sup>
        </div>
        <p class="pdp-shipping-note">
          Shipping &amp; taxes calculated at checkout
          <a href="#" onclick="return false">Details ▾</a>
        </p>
      </div>

      <div class="pdp-divider"></div>

      {% form 'product', product, id: 'pdpForm', class: 'pdp-variants' %}
        <input type="hidden" name="id" id="variantId" value="{{ product.selected_or_first_available_variant.id }}">

        {% unless product.has_only_default_variant %}
          {% assign color_option = nil %}
          {% assign size_option = nil %}
          {% for option in product.options_with_values %}
            {% assign opt_lower = option.name | downcase %}
            {% if opt_lower contains 'color' or opt_lower contains 'colour' %}
              {% assign color_option = option %}
            {% elsif opt_lower contains 'size' %}
              {% assign size_option = option %}
            {% endif %}
          {% endfor %}

          <!-- Color Selector -->
          {% if color_option %}
            {% assign color_idx = color_option.position | minus: 1 %}
            <div class="pdp-option-group">
              <div class="pdp-option-label">
                COLOR: <span class="val" id="colorLabel">{{ color_option.selected_value }}</span>
              </div>
              <div class="pdp-color-grid" id="colorGrid" data-option-index="{{ color_option.position }}">
                {% for value in color_option.values %}
                  {% assign matching_variant = nil %}
                  {% for variant in product.variants %}
                    {% if variant.options[color_idx] == value %}
                      {% assign matching_variant = variant %}
                      {% break %}
                    {% endif %}
                  {% endfor %}
                  <div
                    class="pdp-color-card{% if color_option.selected_value == value %} is-active{% endif %}"
                    data-option-value="{{ value | escape }}"
                    data-option-index="{{ color_option.position }}"
                    data-variant-image="{% if matching_variant.image %}{{ matching_variant.image | image_url: width: 1400 }}{% endif %}"
                    data-price="{{ matching_variant.price | money_without_currency }}"
                    role="radio" aria-checked="{% if color_option.selected_value == value %}true{% else %}false{% endif %}"
                    tabindex="0"
                    aria-label="{{ value }}"
                  >
                    <img
                      src="{% if matching_variant and matching_variant.image %}{{ matching_variant.image | image_url: width: 240, height: 240, crop: 'center' }}{% else %}{{ product.featured_image | image_url: width: 240, height: 240, crop: 'center' }}{% endif %}"
                      alt="{{ value | escape }}"
                      loading="lazy"
                      width="240"
                      height="240"
                    >
                    <div class="price-tag">₹{{ matching_variant.price | money_without_currency }}</div>
                  </div>
                {% endfor %}
              </div>
            </div>
          {% endif %}

          <!-- Size Selector -->
          {% if size_option %}
            {% assign size_idx = size_option.position | minus: 1 %}
            <div class="pdp-option-group">
              <div class="pdp-option-label">
                SIZE: <span class="val" id="sizeLabel">{{ size_option.selected_value }}</span>
                <a href="#" id="sizeChartTrigger">Size Chart</a>
              </div>
              <div class="pdp-size-grid" id="sizeGrid" data-option-index="{{ size_option.position }}">
                {% for value in size_option.values %}
                  {% assign is_available = false %}
                  {% for variant in product.variants %}
                    {% if variant.options[size_idx] == value and variant.available %}
                      {% assign is_available = true %}
                      {% break %}
                    {% endif %}
                  {% endfor %}
                  <button
                    type="button"
                    class="pdp-size-btn{% unless is_available %} disabled{% endunless %}{% if size_option.selected_value == value %} is-active{% endif %}"
                    data-option-value="{{ value | escape }}"
                    data-option-index="{{ size_option.position }}"
                    {% unless is_available %}disabled aria-disabled="true"{% endunless %}
                    aria-label="Size {{ value }}{% unless is_available %} - unavailable{% endunless %}"
                  >{{ value }}</button>
                {% endfor %}
              </div>
            </div>
          {% endif %}

        {% endunless %}

        <!-- Wingstone product actions (replaced variant/qty/CTA/trust block) -->
        <div class="wingstone-product-actions">
  
  <div class="wingstone-quantity-wrapper">
    <label class="wingstone-label">Quantity</label>

    <div class="wingstone-quantity-box">
      <button class="qty-btn" name="minus" type="button">−</button>
      <input type="number" name="quantity" value="1" min="1">
      <button class="qty-btn" name="plus" type="button">+</button>
    </div>
  </div>

  <div class="wingstone-buttons">

    <button type="submit" name="add" class="wingstone-cart-btn">
      <span class="btn-icon">✦</span>
      <span>Add To Cart</span>
      <span class="btn-arrow">→</span>
    </button>

    {{ form | payment_button }}

  </div>

  <div class="wingstone-benefits-grid">

    <div class="benefit-card">
      <div class="benefit-icon">🛡</div>
      <h4>Secure Checkout</h4>
      <p>Your data is fully encrypted</p>
    </div>

    <div class="benefit-card">
      <div class="benefit-icon">↺</div>
      <h4>Easy Returns</h4>
      <p>14 day hassle-free returns</p>
    </div>

    <div class="benefit-card">
      <div class="benefit-icon">✈</div>
      <h4>Free Shipping</h4>
      <p>Worldwide delivery available</p>
    </div>

    <div class="benefit-card">
      <div class="benefit-icon">◈</div>
      <h4>Cash On Delivery</h4>
      <p>Available across India</p>
    </div>

  </div>

  <div class="wingstone-mini-trust">
    <span>SECURE CHECKOUT</span>
    <span>•</span>
    <span>EASY RETURNS</span>
    <span>•</span>
    <span>COD AVAILABLE</span>
  </div>

</div>

      {% endform %}

      <!-- Description -->
      {% if product.description != blank %}
        {% capture cleaned_description %}
          {% assign description_blocks = product.description | split: '</p>' %}
          {% for block in description_blocks %}
            {% assign block_text = block | strip_html | strip | downcase %}
            {% unless block_text contains 'product weight' or block_text contains 'ship weight' or block_text contains 'length (cm)' or block_text contains 'breadth (cm)' or block_text contains 'height (cm)' %}
              {% if block != blank %}
                <p>{{ block }}</p>
              {% endif %}
            {% endunless %}
          {% endfor %}
        {% endcapture %}
        {% assign cleaned_text = cleaned_description | strip_html | strip %}
        {% if cleaned_text != blank %}
          <div class="pdp-divider"></div>
          <div class="pdp-description">{{ cleaned_description }}</div>
        {% endif %}
      {% endif %}

    </div><!-- /info -->
  </div><!-- /layout -->

  <!-- ── Mobile Sticky Add-to-Cart Bar ── -->
  <div class="pdp-mobile-sticky-atc" id="mobileSticky" aria-hidden="true">
    <div class="pdp-mobile-sticky-atc__inner">
      <div class="pdp-mobile-sticky-atc__info">
        <span class="pdp-mobile-sticky-atc__title">{{ product.title | truncate: 28 }}</span>
        <span class="pdp-mobile-sticky-atc__price" data-mobile-sticky-price>
          {{ product.selected_or_first_available_variant.price | money }}
        </span>
      </div>
      <button
        class="pdp-mobile-sticky-atc__btn"
        type="button"
        data-mobile-add-to-cart
        id="addToCartBtnMobile"
        aria-label="Add {{ product.title | escape }} to cart"
        {% unless product.available %}disabled{% endunless %}
      >
        {% if product.available %}ADD TO CART{% else %}SOLD OUT{% endif %}
      </button>
    </div>
  </div>

  <style>
  /* Mobile Sticky ATC */
  .pdp-mobile-sticky-atc {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 40;
    padding: .75rem 1rem calc(.75rem + env(safe-area-inset-bottom));
    background: color-mix(in srgb, var(--color-frost, #f9f9ff), white 6%);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-top: 1px solid var(--color-line, #dde3f0);
    box-shadow: 0 -8px 30px color-mix(in srgb, var(--color-ink, #04102f), transparent 92%);
    transform: translateY(100%);
    transition: transform .32s cubic-bezier(.2,.9,.2,1);
  }

  @media (max-width: 860px) {
    .pdp-mobile-sticky-atc { display: block; }
  }

  .pdp-mobile-sticky-atc.is-visible {
    transform: translateY(0);
  }

  .pdp-mobile-sticky-atc__inner {
    display: flex;
    align-items: center;
    gap: .75rem;
    max-width: 640px;
    margin: 0 auto;
  }

  .pdp-mobile-sticky-atc__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .15rem;
    min-width: 0;
  }

  .pdp-mobile-sticky-atc__title {
    font-size: .78rem;
    font-weight: 600;
    color: var(--color-ink, #04102f);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pdp-mobile-sticky-atc__price {
    font-size: .92rem;
    font-weight: 800;
    color: var(--color-ink, #04102f);
  }

  .pdp-mobile-sticky-atc__btn {
    flex-shrink: 0;
    height: 48px;
    padding: 0 1.5rem;
    border: none;
    border-radius: 2px;
    background: linear-gradient(135deg, #735c00 0%, var(--color-accent, #cba72f) 50%, #e8d48a 100%);
    color: #fff;
    font-family: var(--font-body-family, sans-serif);
    font-size: .72rem;
    font-weight: 800;
    letter-spacing: .12em;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform .18s ease, filter .18s ease;
    box-shadow: 0 8px 24px color-mix(in srgb, var(--color-accent, #cba72f), transparent 76%);
  }

  .pdp-mobile-sticky-atc__btn:hover:not(:disabled) {
    transform: scale(1.02);
    filter: brightness(1.06);
  }

  .pdp-mobile-sticky-atc__btn:disabled {
    background: var(--color-line, #dde3f0);
    color: var(--color-steel, #455373);
    cursor: not-allowed;
    box-shadow: none;
  }
  </style>

  <script>
  /* Mobile sticky ATC — show on scroll past the main ATC button */
  (function() {
    const sticky = document.getElementById('mobileSticky');
    const mainAtc = document.getElementById('addToCartBtn');
    if (!sticky || !mainAtc || window.innerWidth > 860) return;

    let revealed = false;

    const onScroll = () => {
      const rect = mainAtc.getBoundingClientRect();
      const pastBtn = rect.bottom < 0;
      if (pastBtn !== revealed) {
        revealed = pastBtn;
        sticky.classList.toggle('is-visible', revealed);
        sticky.setAttribute('aria-hidden', String(!revealed));
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();
  </script>

</section>

<!-- ── Size Chart Modal ── -->
<div class="pdp-modal-backdrop" id="sizeChartModal" aria-hidden="true" role="dialog" aria-labelledby="scTitle">
  <div class="pdp-modal" role="document">
    <div class="pdp-modal-header">
      <h2 class="pdp-modal-title" id="scTitle">Size Chart</h2>
      <button class="pdp-modal-close" id="sizeChartClose" aria-label="Close">✕</button>
    </div>
    <div class="pdp-tabs" role="tablist">
      <button class="pdp-tab is-active" data-tab="inches" role="tab" aria-selected="true">Inches</button>
      <button class="pdp-tab" data-tab="cm" role="tab" aria-selected="false">Centimeters</button>
    </div>
    <div class="pdp-tab-panel is-active" id="tab-inches" role="tabpanel">
      <table class="pdp-sc-table">
        <thead><tr><th>Size</th><th>Chest (in)</th><th>Length (in)</th><th>Sleeve (in)</th></tr></thead>
        <tbody>
          <tr><td>XS</td><td>36</td><td>26</td><td>24</td></tr>
          <tr><td>S</td><td>38</td><td>27</td><td>24.5</td></tr>
          <tr><td>M</td><td>40</td><td>28</td><td>25</td></tr>
          <tr><td>L</td><td>42</td><td>29</td><td>25.5</td></tr>
          <tr><td>XL</td><td>44</td><td>30</td><td>26</td></tr>
          <tr><td>XXL</td><td>46</td><td>31</td><td>26.5</td></tr>
        </tbody>
      </table>
    </div>
    <div class="pdp-tab-panel" id="tab-cm" role="tabpanel">
      <table class="pdp-sc-table">
        <thead><tr><th>Size</th><th>Chest (cm)</th><th>Length (cm)</th><th>Sleeve (cm)</th></tr></thead>
        <tbody>
          <tr><td>XS</td><td>91</td><td>66</td><td>61</td></tr>
          <tr><td>S</td><td>97</td><td>69</td><td>62</td></tr>
          <tr><td>M</td><td>102</td><td>71</td><td>64</td></tr>
          <tr><td>L</td><td>107</td><td>74</td><td>65</td></tr>
          <tr><td>XL</td><td>112</td><td>76</td><td>66</td></tr>
          <tr><td>XXL</td><td>117</td><td>79</td><td>67</td></tr>
        </tbody>
      </table>
    </div>
    <p class="pdp-sc-note">* All measurements are of the actual garment. Please allow 0.5"–1" tolerance due to manual measurement.</p>
  </div>
</div>

<script type="application/json" id="pdpVariantsData">{{ product.variants | json }}</script>

<script>
(function () {
  'use strict';

  /* ── Data ── */
  const variants = JSON.parse(document.getElementById('pdpVariantsData').textContent);
  const state = {
    options: {},      // { optionPosition: value }
    quantity: 1,
  };

  /* Pre-fill state from first available variant */
  const firstVariant = variants.find(v => v.available) || variants[0];
  if (firstVariant) {
    firstVariant.options.forEach((val, i) => { state.options[i + 1] = val; });
  }

  /* ── DOM refs ── */
  const mainImg       = document.getElementById('pdpMainImgEl');
  const thumbsWrap    = document.getElementById('pdpThumbs');
  const variantIdIn   = document.getElementById('variantId');
  const priceDisplay  = document.querySelector('[data-price-display]');
  const comparePrice  = document.querySelector('[data-compare-price]');
  const saveLabel     = document.querySelector('[data-save-label]');
  const stockNote     = document.getElementById('pdpStock');
  const addToCartBtn  = document.getElementById('addToCartBtn');
  const colorLabel    = document.getElementById('colorLabel');
  const sizeLabel     = document.getElementById('sizeLabel');
  const colorGrid     = document.getElementById('colorGrid');
  const sizeGrid      = document.getElementById('sizeGrid');
  const qtyInput      = document.getElementById('qtyInput');
  const qtyMinus      = document.getElementById('qtyMinus');
  const qtyPlus       = document.getElementById('qtyPlus');
  const mobileAddBtn  = document.querySelector('[data-mobile-add-to-cart]');

  function normalizeImageKey(url) {
    if (!url) return '';
    try {
      const parsed = new URL(url, window.location.origin);
      const filename = (parsed.pathname.split('/').pop() || '').toLowerCase();
      return filename.replace(/_(pico|icon|thumb|small|compact|medium|large|grande|original|master|[0-9]+x[0-9]*|x[0-9]+)(?=\.[^.]+$)/i, '');
    } catch (error) {
      return String(url).toLowerCase();
    }
  }

  function setActiveThumbBySrc(src) {
    if (!thumbsWrap || !src) return;

    const srcKey = normalizeImageKey(src);
    if (!srcKey) return;

    let matchedThumb = null;
    thumbsWrap.querySelectorAll('.pdp-thumb').forEach((thumb) => {
      const thumbKey = normalizeImageKey(thumb.dataset.full);
      if (!matchedThumb && thumbKey && thumbKey === srcKey) {
        matchedThumb = thumb;
      }
    });

    if (!matchedThumb) return;

    thumbsWrap.querySelectorAll('.pdp-thumb').forEach((thumb) => {
      thumb.classList.remove('is-active');
      thumb.removeAttribute('aria-current');
    });
    matchedThumb.classList.add('is-active');
    matchedThumb.setAttribute('aria-current', 'true');
  }

  function setMainImage(src, altText) {
    if (!mainImg || !src) return;
    mainImg.src = src;
    if (typeof altText === 'string' && altText.length) {
      mainImg.alt = altText;
    }
    // adjust active thumb
    setActiveThumbBySrc(src);

    // adjust container for portrait/landscape images to avoid tall empty panels
    try {
      const probe = new Image();
      probe.onload = function () {
        const container = mainImg.closest('.pdp-main-img');
        if (!container) return;
        if (probe.naturalHeight > probe.naturalWidth) {
          container.classList.add('pdp-main-img--portrait');
          container.classList.remove('pdp-main-img--landscape');
        } else {
          container.classList.add('pdp-main-img--landscape');
          container.classList.remove('pdp-main-img--portrait');
        }
      };
      probe.src = src;
    } catch (e) {
      /* ignore */
    }
  }

  function getActiveThumbIndex() {
    if (!thumbsWrap) return -1;
    const thumbs = Array.from(thumbsWrap.querySelectorAll('.pdp-thumb'));
    return thumbs.findIndex((thumb) => thumb.classList.contains('is-active'));
  }

  function moveGallery(direction) {
    if (!thumbsWrap) return;
    const thumbs = Array.from(thumbsWrap.querySelectorAll('.pdp-thumb'));
    if (thumbs.length < 2) return;

    const activeIndex = getActiveThumbIndex();
    const currentIndex = activeIndex >= 0 ? activeIndex : 0;
    const nextIndex = (currentIndex + direction + thumbs.length) % thumbs.length;
    const nextThumb = thumbs[nextIndex];

    if (nextThumb) {
      setMainImage(nextThumb.dataset.full, nextThumb.dataset.alt || '');
    }
  }

  /* ── Gallery ── */
  if (thumbsWrap) {
    thumbsWrap.querySelectorAll('.pdp-thumb').forEach(btn => {
      btn.addEventListener('click', () => {
        setMainImage(btn.dataset.full, btn.dataset.alt || '');
      });
    });
  }

  const galleryPrev = document.getElementById('pdpGalleryPrev');
  const galleryNext = document.getElementById('pdpGalleryNext');
  if (galleryPrev) galleryPrev.addEventListener('click', () => moveGallery(-1));
  if (galleryNext) galleryNext.addEventListener('click', () => moveGallery(1));

  /* ── Variant matching ── */
  function findVariant() {
    return variants.find(v => {
      return v.options.every((val, i) => {
        const pos = i + 1;
        return !(pos in state.options) || state.options[pos] === val;
      });
    });
  }

  function formatMoney(cents) {
    const whole = Math.floor(cents / 100);
    const frac  = (cents % 100).toString().padStart(2, '0');
    return `₹${whole.toLocaleString('en-IN')}.${frac}`;
  }

  function updateUI() {
    const v = findVariant();
    if (!v) return;

    /* Price */
    if (priceDisplay) {
      priceDisplay.textContent = (v.price / 100).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    if (comparePrice) {
      if (v.compare_at_price && v.compare_at_price > v.price) {
        comparePrice.textContent = formatMoney(v.compare_at_price);
        comparePrice.style.display = '';
        if (saveLabel) {
          const saved = v.compare_at_price - v.price;
          saveLabel.textContent = `Save ${formatMoney(saved)}`;
          saveLabel.style.display = '';
        }
      } else {
        comparePrice.style.display = 'none';
        if (saveLabel) saveLabel.style.display = 'none';
      }
    }

    /* Variant id */
    if (variantIdIn) variantIdIn.value = v.id;

    /* Stock */
    if (stockNote) {
      if (!v.available) {
        stockNote.textContent = 'Currently out of stock.';
        stockNote.classList.add('show');
      } else if (v.inventory_quantity > 0 && v.inventory_quantity <= 5) {
        stockNote.textContent = `Only ${v.inventory_quantity} left in stock – order soon!`;
        stockNote.classList.add('show');
      } else {
        stockNote.textContent = '';
        stockNote.classList.remove('show');
      }
    }

    /* Add to cart btn */
    if (addToCartBtn) {
      addToCartBtn.disabled = !v.available;
      const lbl = addToCartBtn.querySelector('.pdp-btn__label');
      if (lbl) lbl.textContent = v.available ? 'Add to cart' : 'Sold out'; else addToCartBtn.textContent = v.available ? 'Add to cart' : 'Sold out';
    }

    if (mobileAddBtn) mobileAddBtn.disabled = !v.available;

    /* Main image – switch to variant image if present */
    if (v.featured_image && mainImg) {
      setMainImage(v.featured_image.src, mainImg.alt || '');
    }
  }

  /* ── Color option clicks ── */
  if (colorGrid) {
    colorGrid.querySelectorAll('.pdp-color-card').forEach(card => {
      const activate = () => {
        const optIdx = parseInt(card.dataset.optionIndex, 10);
        const val    = card.dataset.optionValue;

        /* Update state */
        state.options[optIdx] = val;

        /* Update active classes */
        colorGrid.querySelectorAll('.pdp-color-card').forEach(c => {
          c.classList.remove('is-active');
          c.setAttribute('aria-checked', 'false');
        });
        card.classList.add('is-active');
        card.setAttribute('aria-checked', 'true');

        /* Update label */
        if (colorLabel) colorLabel.textContent = val;

        /* Swap main image to variant image if available */
        if (card.dataset.variantImage && mainImg) {
          setMainImage(card.dataset.variantImage, val);
        }
        updateUI();
      };
      card.addEventListener('click', activate);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
    });
  }

  /* ── Size option clicks ── */
  if (sizeGrid) {
    sizeGrid.querySelectorAll('.pdp-size-btn:not(.disabled)').forEach(btn => {
      btn.addEventListener('click', () => {
        const optIdx = parseInt(btn.dataset.optionIndex, 10);
        const val    = btn.dataset.optionValue;
        state.options[optIdx] = val;

        sizeGrid.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        if (sizeLabel) sizeLabel.textContent = val;
        updateUI();
      });
    });
  }

  /* ── Quantity ── */
  function setQty(n) {
    state.quantity = Math.max(1, Math.min(99, n));
    if (qtyInput) qtyInput.value = state.quantity;
  }
  if (qtyMinus) qtyMinus.addEventListener('click', () => setQty(state.quantity - 1));
  if (qtyPlus)  qtyPlus.addEventListener('click',  () => setQty(state.quantity + 1));
  if (qtyInput) {
    qtyInput.addEventListener('change', () => setQty(parseInt(qtyInput.value, 10) || 1));
  }

  if (mobileAddBtn && addToCartBtn) {
    mobileAddBtn.addEventListener('click', () => addToCartBtn.click());
  }

  /* ── Buy Now ── */
  const buyNowBtn = document.getElementById('buyNowBtn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      const v = findVariant();
      if (!v || !v.available) return;
      const acceleratedCheckout = document.querySelector('.shopify-payment-button__button');
      if (acceleratedCheckout) {
        acceleratedCheckout.click();
        return;
      }
      window.location.href = `/cart/${v.id}:${state.quantity}`;
    });
  }

  /* ── Size Chart Modal ── */
  const modal          = document.getElementById('sizeChartModal');
  const sizeChartTrig  = document.getElementById('sizeChartTrigger');
  const sizeChartClose = document.getElementById('sizeChartClose');

  function openModal() {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (sizeChartTrig) {
    sizeChartTrig.addEventListener('click', e => { e.preventDefault(); openModal(); });
  }
  if (sizeChartClose) sizeChartClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  /* ── Size chart tabs ── */
  if (modal) {
    modal.querySelectorAll('.pdp-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        modal.querySelectorAll('.pdp-tab').forEach(t => {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
        modal.querySelectorAll('.pdp-tab-panel').forEach(p => p.classList.remove('is-active'));
        const panel = document.getElementById(`tab-${target}`);
        if (panel) panel.classList.add('is-active');
      });
    });
  }

  /* ── Initial render ── */
  updateUI();
  if (mainImg) setActiveThumbBySrc(mainImg.src);

})();
</script>

{% schema %}
{
  "name": "Main product",
  "settings": []
}
{% endschema %}
{% comment %} force CLI sync comment 1 {% endcomment %}
```

## `sections/newsletter.liquid`

```liquid
<section id="contact" class="section newsletter">
  <div class="page-width">
    {% if section.settings.eyebrow != blank %}
      <p class="eyebrow">{{ section.settings.eyebrow }}</p>
    {% endif %}
    <h2 class="section-title">{{ section.settings.heading }}</h2>
    {% if section.settings.text != blank %}
      <div>{{ section.settings.text }}</div>
    {% endif %}

    {% form 'customer' %}
      <input type="hidden" name="contact[tags]" value="newsletter">
      <input class="field" type="email" name="contact[email]" aria-label="Email" placeholder="Email address" required>
      <button class="button" type="submit">{{ section.settings.button_label }}</button>
    {% endform %}
  </div>
</section>

{% schema %}
{
  "name": "Newsletter",
  "settings": [
    {
      "type": "text",
      "id": "eyebrow",
      "label": "Eyebrow",
      "default": "Private list"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Join Wingstone"
    },
    {
      "type": "richtext",
      "id": "text",
      "label": "Text",
      "default": "<p>New drops, restocks, and early access notes.</p>"
    },
    {
      "type": "text",
      "id": "button_label",
      "label": "Button label",
      "default": "Subscribe"
    }
  ],
  "presets": [
    {
      "name": "Newsletter"
    }
  ]
}
{% endschema %}
```

## `sections/product-template.liquid`

```liquid
<style>
  /* ─── Reset & Base ──────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --clr-bg:        var(--color-frost);
    --clr-surface:   var(--color-paper);
    --clr-border:    color-mix(in srgb, var(--color-line), var(--color-paper) 16%);
    --clr-border-2:  var(--color-line);
    --clr-text:      var(--color-ink);
    --clr-muted:     var(--color-steel);
    --clr-accent:    var(--color-accent);
    --clr-accent-dk: color-mix(in srgb, var(--color-accent), var(--color-ink) 16%);
    --clr-gold:      color-mix(in srgb, var(--color-accent), var(--color-paper) 28%);
    --clr-buy:       color-mix(in srgb, var(--color-ink), var(--color-accent) 8%);
    --clr-buy-dk:    color-mix(in srgb, var(--color-ink), black 10%);
    --clr-thumb-active: var(--color-accent);
    --radius-sm:  6px;
    --radius-md:  10px;
    --radius-lg:  16px;
    --shadow-sm:  0 1px 3px rgba(0,0,0,.08);
    --shadow-md:  0 4px 16px rgba(0,0,0,.10);
    --shadow-lg:  0 12px 40px rgba(0,0,0,.14);
    --font-head:  var(--font-heading-family);
    --font-body:  var(--font-body-family);
    --transition: .18s cubic-bezier(.4,0,.2,1);
    --pdp-vh-offset: 160px; /* space for headers/controls when fitting image to viewport */
  }

  body { background: var(--clr-bg); font-family: var(--font-body); color: var(--clr-text); }

  /* ─── Section wrapper ──────────────────────────────────────── */
  .pdp { max-width: 1280px; margin: 0 auto; padding: 28px 20px 60px; }

  /* ─── Breadcrumb ───────────────────────────────────────────── */
  .pdp-breadcrumb {
    display: flex; align-items: center; gap: 6px;
    font-size: 12px; color: var(--clr-muted); margin-bottom: 20px; flex-wrap: wrap;
  }
  .pdp-breadcrumb a { color: var(--clr-muted); text-decoration: none; }
  .pdp-breadcrumb a:hover { text-decoration: underline; color: var(--clr-accent); }
  .pdp-breadcrumb span { color: var(--clr-muted); }

  /* ─── Two-column layout ────────────────────────────────────── */
  .pdp-layout {
    display: grid;
    grid-template-columns: minmax(0, 560px) minmax(0, 1fr);
    gap: 36px;
    align-items: start;
  }
  @media (max-width: 860px) {
    .pdp-layout { grid-template-columns: 1fr; }
  }

  /* ─── Gallery ──────────────────────────────────────────────── */
  .pdp-gallery { display: flex; gap: 12px; position: sticky; top: 20px; }

  .pdp-thumbs {
    display: flex; flex-direction: column; gap: 8px;
    max-height: 560px; overflow-y: auto; padding-right: 2px;
  }
  .pdp-thumbs::-webkit-scrollbar { width: 3px; }
  .pdp-thumbs::-webkit-scrollbar-thumb { background: var(--clr-border-2); border-radius: 4px; }

  .pdp-thumb {
    width: 64px; height: 64px; flex-shrink: 0;
    border: 2px solid var(--clr-border);
    border-radius: var(--radius-sm);
    overflow: hidden; cursor: pointer;
    transition: border-color var(--transition), transform var(--transition);
    background: #fff;
  }
  .pdp-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .pdp-thumb:hover { border-color: var(--clr-muted); transform: scale(1.04); }
  .pdp-thumb.is-active { border-color: var(--clr-thumb-active); box-shadow: 0 0 0 1px var(--clr-thumb-active); }

  .pdp-main-img {
    flex: 1; border-radius: var(--radius-md);
    overflow: hidden; background: transparent;
    border: 1px solid var(--clr-border);
    aspect-ratio: 1 / 1.05;
    position: relative; cursor: zoom-in;
    width: 100%;
    max-width: 560px;
    margin-inline: auto;
    box-shadow: 0 8px 24px rgba(10,18,30,0.06);
  }
  .pdp-main-img {
    display: flex; align-items: center; justify-content: center;
  }
  .pdp-main-img.pdp-main-img--portrait { aspect-ratio: 3 / 4; }
  .pdp-main-img.pdp-main-img--landscape { aspect-ratio: 4 / 3; }
    .pdp-main-img img {
      width: auto; height: auto; max-width: 100%;
      max-height: calc(100vh - var(--pdp-vh-offset));
      object-fit: contain; object-position: center;
      display: block; padding: 6px;
      transition: transform .35s ease;
      background: transparent;
    }
  .pdp-main-img:hover img { transform: scale(1.06); }

  .pdp-badge {
    position: absolute; top: 12px; left: 12px;
    background: #cc0c39; color: #fff;
    font-family: var(--font-head); font-size: 11px; font-weight: 600;
    padding: 4px 8px; border-radius: 4px; letter-spacing: .5px;
  }

  /* ─── Info panel ───────────────────────────────────────────── */
  .pdp-info { display: flex; flex-direction: column; gap: 0; }

  /* Social proof strip */
  .pdp-social-proof {
    font-size: 13px; color: var(--clr-muted);
    margin-bottom: 10px;
  }
  .pdp-social-proof strong { color: var(--clr-text); }

  /* Vendor */
  .pdp-vendor {
    font-family: var(--font-head); font-size: 13px;
    color: var(--clr-text); font-weight: 500; margin-bottom: 6px;
    text-transform: uppercase; letter-spacing: .8px;
  }
  .pdp-vendor:hover { text-decoration: underline; cursor: pointer; }

  /* Title */
  .pdp-title {
    font-family: var(--font-head); font-size: 22px;
    font-weight: 600; line-height: 1.3; color: var(--clr-text);
    margin-bottom: 10px;
  }

  /* Rating */
  .pdp-rating {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 14px; font-size: 13px;
  }
  .pdp-stars { color: var(--clr-gold); font-size: 15px; letter-spacing: 1px; }
  .pdp-rating-link { color: var(--clr-muted); text-decoration: none; }
  .pdp-rating-link:hover { text-decoration: underline; color: var(--clr-accent); }
  .pdp-rating-sep { color: var(--clr-border-2); }

  /* Divider */
  .pdp-divider { height: 1px; background: var(--clr-border); margin: 14px 0; }

  /* Price block */
  .pdp-price-block { margin-bottom: 4px; }
  .pdp-price-label { font-size: 12px; color: var(--clr-muted); margin-bottom: 2px; }
  .pdp-price-row { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
  .pdp-price-currency { font-size: 16px; font-weight: 500; color: var(--clr-text); }
  .pdp-price-main {
    font-family: var(--font-head); font-size: 34px;
    font-weight: 700; color: var(--clr-text); line-height: 1;
  }
  .pdp-price-compare {
    font-size: 16px; color: var(--clr-muted);
    text-decoration: line-through;
  }
  .pdp-price-save {
    font-size: 13px; color: #cc0c39; font-weight: 600;
  }
  .pdp-badges { display:flex; gap:8px; margin-bottom:10px; align-items:center; }
  .pdp-flag { background: var(--product-accent, var(--clr-accent)); color: #fff; font-weight:800; padding:6px 8px; border-radius:999px; font-size:11px; letter-spacing:.08em; }
  .pdp-flag--lowstock { background: #c72a2a; }
  .pdp-flag--limited { background: #a33a00; }
  .pdp-flag--bestseller { background: #1f8a5f; }
  .pdp-flag--newdrop { background: #2b6cff; }
  .pdp-subtitle { color: var(--clr-muted); font-weight:700; margin-bottom:8px; }
  .pdp-story { color: var(--clr-base); margin-bottom:16px; line-height:1.5; max-width:60ch; }
  .pdp-shipping-note {
    font-size: 12.5px; color: var(--clr-muted); margin-top: 6px;
  }
  .pdp-shipping-note a { color: var(--clr-accent); text-decoration: none; }
  .pdp-shipping-note a:hover { text-decoration: underline; }

  /* ─── Variant Options ──────────────────────────────────────── */
  .pdp-variants { margin-top: 4px; }

  .pdp-option-group { margin-bottom: 18px; }

  .pdp-option-label {
    font-size: 13.5px; font-weight: 500; color: var(--clr-text);
    margin-bottom: 10px; display: flex; align-items: center; gap: 6px;
  }
  .pdp-option-label span.val {
    font-weight: 700; color: var(--clr-text);
  }
  .pdp-option-label a {
    margin-left: auto; font-size: 12px; color: var(--clr-accent);
    text-decoration: none; font-weight: 400;
  }
  .pdp-option-label a:hover { text-decoration: underline; color: var(--clr-accent-dk); }

  /* Color cards */
  .pdp-color-grid {
    display: flex; flex-wrap: wrap; gap: 8px;
  }
  .pdp-color-card {
    width: 68px; cursor: pointer;
    border: 2px solid var(--clr-border);
    border-radius: var(--radius-sm);
    overflow: hidden; background: #fff;
    transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
    position: relative;
  }
  .pdp-color-card img {
    width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block;
  }
  .pdp-color-card .price-tag {
    font-size: 10px; text-align: center; padding: 3px 2px;
    color: var(--clr-muted); white-space: nowrap; overflow: hidden;
    text-overflow: ellipsis; border-top: 1px solid var(--clr-border);
    background: #fafafa;
  }
  .pdp-color-card:hover { border-color: var(--clr-muted); transform: translateY(-2px); }
  .pdp-color-card.is-active {
    border-color: var(--clr-thumb-active);
    box-shadow: 0 0 0 1px var(--clr-thumb-active);
  }
  .pdp-color-card.is-active::after {
    content: '✓';
    position: absolute; top: 3px; right: 4px;
    font-size: 10px; color: var(--clr-thumb-active);
    font-weight: 700;
  }

  /* Color pagination dots */
  .pdp-color-pager {
    display: flex; align-items: center; gap: 6px;
    margin-top: 8px; font-size: 12px; color: var(--clr-muted);
  }
  .pdp-color-pager button {
    width: 26px; height: 26px; border: 1px solid var(--clr-border);
    border-radius: 50%; background: #fff; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; color: var(--clr-text);
    transition: background var(--transition), border-color var(--transition);
  }
  .pdp-color-pager button:hover { background: var(--clr-bg); border-color: var(--clr-muted); }
  .pdp-color-pager .page-btn {
    min-width: 26px; border-radius: 4px; font-weight: 600;
  }
  .pdp-color-pager .page-btn.is-active {
    background: var(--clr-thumb-active); color: #fff; border-color: var(--clr-thumb-active);
  }

  /* Size buttons */
  .pdp-size-grid { display: flex; flex-wrap: wrap; gap: 8px; }

  .pdp-size-btn {
    min-width: 52px; height: 40px; padding: 0 14px;
    border: 1.5px solid var(--clr-border-2);
    border-radius: var(--radius-sm); background: #fff;
    font-family: var(--font-head); font-size: 13.5px; font-weight: 500;
    color: var(--clr-text); cursor: pointer;
    transition: border-color var(--transition), background var(--transition), box-shadow var(--transition);
    position: relative;
  }
  .pdp-size-btn:hover:not(.disabled) {
    border-color: var(--clr-text); background: #fafafa;
  }
  .pdp-size-btn.is-active {
    border-color: var(--clr-thumb-active);
    box-shadow: 0 0 0 1.5px var(--clr-thumb-active);
    background: #fff4f0;
    color: var(--clr-thumb-active);
    font-weight: 700;
  }
  .pdp-size-btn.disabled {
    color: #bbb; cursor: not-allowed;
    background: repeating-linear-gradient(
      135deg, transparent, transparent 4px,
      #f3f3f1 4px, #f3f3f1 8px
    );
  }
  .pdp-size-btn.disabled::after {
    content: ''; position: absolute;
    top: 18px; left: 4px; right: 4px;
    height: 1px; background: #ccc;
  }

  /* Quantity */
  .pdp-qty-group { margin-bottom: 20px; }
  .pdp-qty-row { display: flex; align-items: center; gap: 0; width: fit-content; }
  .pdp-qty-btn {
    width: 36px; height: 36px; border: 1.5px solid var(--clr-border-2);
    background: #f7f7f5; cursor: pointer;
    font-size: 18px; color: var(--clr-text); line-height: 1;
    transition: background var(--transition);
    display: flex; align-items: center; justify-content: center;
  }
  .pdp-qty-btn:first-child { border-radius: var(--radius-sm) 0 0 var(--radius-sm); border-right: none; }
  .pdp-qty-btn:last-child  { border-radius: 0 var(--radius-sm) var(--radius-sm) 0; border-left: none; }
  .pdp-qty-btn:hover { background: var(--clr-border); }
  .pdp-qty-input {
    width: 52px; height: 36px; border: 1.5px solid var(--clr-border-2);
    text-align: center; font-size: 14px; font-weight: 600;
    font-family: var(--font-head);
    -moz-appearance: textfield; outline: none;
    color: var(--clr-text);
  }
  .pdp-qty-input::-webkit-inner-spin-button,
  .pdp-qty-input::-webkit-outer-spin-button { -webkit-appearance: none; }

  /* CTA Buttons */
  .pdp-cta { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }

  .pdp-btn {
    width: 100%; max-width: 360px; height: 48px;
    border: none; border-radius: 100px; cursor: pointer;
    font-family: var(--font-head); font-size: 15px; font-weight: 600;
    letter-spacing: .3px; transition: all var(--transition);
    position: relative; overflow: hidden;
  }
  .pdp-btn::after {
    content: ''; position: absolute; inset: 0;
    background: rgba(0,0,0,.0); transition: background var(--transition);
  }
  .pdp-btn:hover::after { background: rgba(0,0,0,.06); }
  .pdp-btn:active { transform: scale(.98); }

  .pdp-btn--cart {
    background: var(--clr-buy);
    color: #ffffff;
    box-shadow: 0 2px 6px rgba(240,172,0,.35);
  }
  .pdp-btn--cart:hover { background: var(--clr-buy-dk); box-shadow: 0 4px 12px rgba(240,172,0,.4); }

  .pdp-btn--buy {
    background: linear-gradient(135deg, #735c00 0%, var(--clr-accent) 50%, #e8d48a 100%);
    color: #ffffff;
    box-shadow: 0 8px 28px rgba(203,167,47,.3);
  }
  .pdp-btn--buy:hover { filter: brightness(1.06); box-shadow: 0 12px 36px rgba(203,167,47,.38); }

  .pdp-btn:disabled {
    background: var(--clr-border); color: var(--clr-muted); cursor: not-allowed; box-shadow: none;
  }

  .pdp-mobile-bar {
    display: none;
  }

  .pdp-mobile-bar__note {
    margin: .55rem 0 0;
    color: var(--clr-muted);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    text-align: center;
  }

  /* Trust badges */
  .pdp-trust {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 8px; margin-bottom: 18px;
  }
  .pdp-trust-item {
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    background: #fff; border: 1px solid var(--clr-border);
    border-radius: var(--radius-sm); padding: 10px 4px;
    font-size: 10.5px; color: var(--clr-muted); text-align: center;
    font-weight: 500; line-height: 1.3;
  }
  .pdp-trust-icon { width: 20px; height: 20px; color: var(--clr-accent); display: block; flex-shrink: 0; }
  .pdp-trust-item span { color: var(--clr-text); font-size: 13px; font-weight: 600; margin-top: 4px; }
  @media (max-width: 540px) {
    .pdp-trust { grid-template-columns: repeat(2,1fr); }
  }

  /* Delivery & meta */
  .pdp-delivery {
    display: flex; gap: 6px;
    font-size: 13px; align-items: flex-start;
    margin-bottom: 14px;
  }
  .pdp-delivery-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
  .pdp-delivery-text { line-height: 1.5; }
  .pdp-delivery-text strong { color: #007600; }

  /* Stock note */
  .pdp-stock {
    font-size: 13.5px; color: #cc0c39; font-weight: 600;
    margin-bottom: 14px; display: none;
  }
  .pdp-stock.show { display: block; }

  /* Description */
  .pdp-description {
    margin-top: 8px;
    font-size: 14px; color: var(--clr-muted); line-height: 1.7;
  }
  .pdp-description ul { padding-left: 18px; margin: 6px 0; }
  .pdp-description li { margin-bottom: 4px; }

  /* ─── Size Chart Modal ─────────────────────────────────────── */
  .pdp-modal-backdrop {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(0,0,0,.5); backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none;
    transition: opacity var(--transition);
  }
  .pdp-modal-backdrop.is-open { opacity: 1; pointer-events: all; }

  .pdp-modal {
    background: #fff; border-radius: var(--radius-lg);
    width: min(560px, 95vw); max-height: 88vh;
    overflow-y: auto; padding: 28px 28px 32px;
    transform: translateY(24px) scale(.97);
    transition: transform .2s cubic-bezier(.34,1.56,.64,1);
    box-shadow: var(--shadow-lg);
  }
  .pdp-modal-backdrop.is-open .pdp-modal { transform: translateY(0) scale(1); }

  .pdp-modal-header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 20px;
  }
  .pdp-modal-title { font-family: var(--font-head); font-size: 20px; font-weight: 700; }
  .pdp-modal-close {
    width: 32px; height: 32px; border: 1px solid var(--clr-border);
    border-radius: 50%; background: #fff; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; color: var(--clr-muted);
    transition: background var(--transition), color var(--transition);
  }
  .pdp-modal-close:hover { background: var(--clr-text); color: #fff; }

  /* Tab switcher */
  .pdp-tabs {
    display: flex; gap: 4px; background: var(--clr-bg);
    border-radius: 8px; padding: 4px; margin-bottom: 20px;
  }
  .pdp-tab {
    flex: 1; height: 34px; border: none; border-radius: 6px;
    background: transparent; cursor: pointer;
    font-family: var(--font-head); font-size: 13px; font-weight: 500;
    color: var(--clr-muted); transition: all var(--transition);
  }
  .pdp-tab.is-active {
    background: #fff; color: var(--clr-text); font-weight: 600;
    box-shadow: var(--shadow-sm);
  }

  .pdp-tab-panel { display: none; }
  .pdp-tab-panel.is-active { display: block; }

  /* Size chart table */
  .pdp-sc-table {
    width: 100%; border-collapse: collapse; font-size: 13.5px;
  }
  .pdp-sc-table th {
    background: var(--clr-bg); font-family: var(--font-head);
    font-size: 12px; font-weight: 600; text-transform: uppercase;
    letter-spacing: .6px; padding: 10px 12px;
    border-bottom: 2px solid var(--clr-border);
    color: var(--clr-muted); text-align: left;
  }
  .pdp-sc-table td {
    padding: 9px 12px; border-bottom: 1px solid var(--clr-border);
    color: var(--clr-text);
  }
  .pdp-sc-table tbody tr:last-child td { border-bottom: none; }
  .pdp-sc-table tbody tr:hover td { background: #fafaf8; }
  .pdp-sc-table td:first-child { font-weight: 700; }

  .pdp-sc-note {
    font-size: 12px; color: var(--clr-muted); margin-top: 14px;
    padding: 10px 14px; background: #fffbf0;
    border-left: 3px solid var(--clr-gold); border-radius: 4px;
  }

  /* ─── Responsive adjustments ───────────────────────────────── */
  @media (max-width: 640px) {
    .pdp { padding: 16px 14px calc(140px + env(safe-area-inset-bottom)); }
    .pdp-gallery { flex-direction: column; position: static; }
    .pdp-thumbs { flex-direction: row; max-height: none; overflow-x: auto; padding-bottom: 2px; }
    .pdp-thumb { width: 56px; height: 56px; }
    :root { --pdp-vh-offset: calc(140px + env(safe-area-inset-bottom)); }
    .pdp-main-img {
      max-width: 100%;
      aspect-ratio: 1 / 1;
      max-height: calc(100vh - var(--pdp-vh-offset));
      display: flex; align-items: center; justify-content: center;
      background: transparent;
      box-shadow: 0 8px 20px rgba(10,18,30,0.06);
    }
    .pdp-main-img img {
      padding: 6px; max-width: 100%; max-height: calc(100vh - var(--pdp-vh-offset));
      background: transparent;
    }
    .pdp-btn { max-width: 100%; }
    .pdp-title { font-size: 18px; }
    .pdp-price-main { font-size: 28px; }
    .pdp-size-btn {
      min-width: 48px;
      height: 44px;
      padding: 0 16px;
      font-size: 14px;
    }
    .pdp input,
    .pdp select,
    .pdp textarea {
      font-size: 16px;
    }
    .pdp-mobile-bar {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: .65rem;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 65;
      padding: .85rem .9rem calc(.85rem + env(safe-area-inset-bottom));
      background: color-mix(in srgb, var(--clr-surface), white 12%);
      border-top: 1px solid var(--clr-border);
      box-shadow: 0 -16px 40px rgba(10, 18, 30, .12);
      backdrop-filter: blur(16px);
    }
    .pdp-mobile-bar .pdp-btn {
      height: 48px;
      margin: 0;
      max-width: none;
      font-size: 12px;
      letter-spacing: .12em;
    }
    .pdp-mobile-bar .pdp-btn--buy {
      background: linear-gradient(135deg, #735c00 0%, var(--clr-accent) 50%, #e8d48a 100%);
      color: #ffffff;
      box-shadow: 0 10px 24px rgba(203,167,47,.24);
    }
  }

  @media (max-width: 1024px) {
    .pdp-main-img {
      max-width: min(100%, 620px);
    }
  }
</style>

{% comment %} product-scoped accent color (falls back to theme setting) {% endcomment %}
{% assign prod_accent = product.metafields.custom.accent_color | default: settings.color_accent %}
<section class="pdp" style="--product-accent: {{ prod_accent }};">

  <!-- Breadcrumb -->
  <nav class="pdp-breadcrumb" aria-label="Breadcrumb">
    <a href="{{ routes.root_url }}">Home</a>
    <span>›</span>
    <a href="{{ routes.all_products_collection_url }}">{{ collection.title | default: 'All Products' }}</a>
    <span>›</span>
    <span>{{ product.title | truncate: 40 }}</span>
  </nav>

  <div class="pdp-layout">

    <!-- ── Gallery ── -->
    <div class="pdp-gallery">
      <div class="pdp-thumbs" id="pdpThumbs" aria-label="Product image thumbnails">
        {% assign product_images = product.images %}
        {% for image in product_images %}
          <button
            class="pdp-thumb{% if forloop.first %} is-active{% endif %}"
            type="button"
            data-full="{{ image | image_url: width: 1400 }}"
            data-alt="{{ image.alt | default: product.title | escape }}"
            aria-label="View image {{ forloop.index }} of {{ product_images.size }}"
            {% if forloop.first %}aria-current="true"{% endif %}
          >
            <img src="{{ image | image_url: width: 180 }}" alt="{{ image.alt | default: product.title | escape }}" loading="lazy" width="{{ image.width }}" height="{{ image.height }}">
          </button>
        {% endfor %}
      </div>

      <div class="pdp-main-img" id="pdpMainImg">
        {% if product.compare_at_price_max > product.price_min %}
          {% assign save_pct = product.compare_at_price_max | minus: product.price_min | times: 100 | divided_by: product.compare_at_price_max %}
          <span class="pdp-badge">-{{ save_pct }}%</span>
        {% endif %}
        <img
          id="pdpMainImgEl"
          src="{{ product.featured_image | image_url: width: 1400 }}"
          alt="{{ product.title | escape }}"
          loading="eager"
          width="{{ product.featured_image.width }}"
          height="{{ product.featured_image.height }}"
        >
      </div>
    </div><!-- /gallery -->

    <!-- ── Info ── -->
    <div class="pdp-info">

      <p class="pdp-vendor">{{ product.vendor | default: shop.name }}</p>

      <!-- Dynamic badges -->
      <div class="pdp-badges">
        {% assign inv = product.selected_or_first_available_variant.inventory_quantity | default: 0 %}
        {% if product.selected_or_first_available_variant.available and inv != nil and inv <= 10 and inv > 0 %}
          <span class="pdp-flag pdp-flag--lowstock">LOW STOCK</span>
        {% endif %}

        {% if product.selected_or_first_available_variant.compare_at_price > product.selected_or_first_available_variant.price %}
          <span class="pdp-flag pdp-flag--limited">LIMITED OFFER</span>
        {% endif %}

        {% if product.tags contains 'best-seller' %}
          <span class="pdp-flag pdp-flag--bestseller">BEST SELLER</span>
        {% endif %}

        {% if product.tags contains 'new-drop' or product.tags contains 'new' %}
          <span class="pdp-flag pdp-flag--newdrop">NEW DROP</span>
        {% endif %}
      </div>

      <h1 class="pdp-title">{{ product.title }}</h1>

      {% if product.metafields.custom.subtitle != blank %}
        <div class="pdp-subtitle">{{ product.metafields.custom.subtitle }}</div>
      {% elsif product.type != blank %}
        <div class="pdp-subtitle">{{ product.type }}</div>
      {% endif %}
      {% if product.metafields.custom.story != blank %}
        <div class="pdp-story">{{ product.metafields.custom.story }}</div>
      {% endif %}

      <div class="pdp-divider"></div>

      <!-- Price -->
      <div class="pdp-price-block">
        <div class="pdp-price-label">Price</div>
        <div class="pdp-price-row">
          {% if product.selected_or_first_available_variant.compare_at_price > product.selected_or_first_available_variant.price %}
            <span class="pdp-price-compare" data-compare-price>
              ₹{{ product.selected_or_first_available_variant.compare_at_price | money_without_currency }}
            </span>
            <span class="pdp-price-save" data-save-label>Save ₹{{ product.selected_or_first_available_variant.compare_at_price | minus: product.selected_or_first_available_variant.price | money_without_currency }}</span>
          {% endif %}
          <span class="pdp-price-currency">₹</span>
          <span class="pdp-price-main" data-price-display>
            {{ product.selected_or_first_available_variant.price | divided_by: 100.0 | floor }}
          </span>
          <sup style="font-size:14px;color:var(--clr-text);font-weight:600;align-self:flex-start;margin-top:8px">
            {{ product.selected_or_first_available_variant.price | modulo: 100 | prepend: '.' }}
          </sup>
        </div>
        <p class="pdp-shipping-note">
          Shipping &amp; taxes calculated at checkout
          <a href="#" onclick="return false">Details ▾</a>
        </p>
      </div>

      <div class="pdp-divider"></div>

      {% form 'product', product, id: 'pdpForm', class: 'pdp-variants' %}
        <input type="hidden" name="id" id="variantId" value="{{ product.selected_or_first_available_variant.id }}">

        {% unless product.has_only_default_variant %}
          {% assign color_option = nil %}
          {% assign size_option = nil %}
          {% for option in product.options_with_values %}
            {% assign opt_lower = option.name | downcase %}
            {% if opt_lower contains 'color' or opt_lower contains 'colour' %}
              {% assign color_option = option %}
            {% elsif opt_lower contains 'size' %}
              {% assign size_option = option %}
            {% endif %}
          {% endfor %}

          <!-- Color Selector -->
          {% if color_option %}
            {% assign color_idx = color_option.position | minus: 1 %}
            <div class="pdp-option-group">
              <div class="pdp-option-label">
                COLOR: <span class="val" id="colorLabel">{{ color_option.selected_value }}</span>
              </div>
              <div class="pdp-color-grid" id="colorGrid" data-option-index="{{ color_option.position }}">
                {% for value in color_option.values %}
                  {% assign matching_variant = nil %}
                  {% for variant in product.variants %}
                    {% if variant.options[color_idx] == value %}
                      {% assign matching_variant = variant %}
                      {% break %}
                    {% endif %}
                  {% endfor %}
                  <div
                    class="pdp-color-card{% if color_option.selected_value == value %} is-active{% endif %}"
                    data-option-value="{{ value | escape }}"
                    data-option-index="{{ color_option.position }}"
                    data-variant-image="{% if matching_variant.image %}{{ matching_variant.image | image_url: width: 1400 }}{% endif %}"
                    data-price="{{ matching_variant.price | money_without_currency }}"
                    role="radio" aria-checked="{% if color_option.selected_value == value %}true{% else %}false{% endif %}"
                    tabindex="0"
                    aria-label="{{ value }}"
                  >
                    <img
                      src="{% if matching_variant and matching_variant.image %}{{ matching_variant.image | image_url: width: 240, height: 240, crop: 'center' }}{% else %}{{ product.featured_image | image_url: width: 240, height: 240, crop: 'center' }}{% endif %}"
                      alt="{{ value | escape }}"
                      loading="lazy"
                      width="240"
                      height="240"
                    >
                    <div class="price-tag">₹{{ matching_variant.price | money_without_currency }}</div>
                  </div>
                {% endfor %}
              </div>
            </div>
          {% endif %}

          <!-- Size Selector -->
          {% if size_option %}
            {% assign size_idx = size_option.position | minus: 1 %}
            <div class="pdp-option-group">
              <div class="pdp-option-label">
                SIZE: <span class="val" id="sizeLabel">{{ size_option.selected_value }}</span>
                <a href="#" id="sizeChartTrigger">Size Chart</a>
              </div>
              <div class="pdp-size-grid" id="sizeGrid" data-option-index="{{ size_option.position }}">
                {% for value in size_option.values %}
                  {% assign is_available = false %}
                  {% for variant in product.variants %}
                    {% if variant.options[size_idx] == value and variant.available %}
                      {% assign is_available = true %}
                      {% break %}
                    {% endif %}
                  {% endfor %}
                  <button
                    type="button"
                    class="pdp-size-btn{% unless is_available %} disabled{% endunless %}{% if size_option.selected_value == value %} is-active{% endif %}"
                    data-option-value="{{ value | escape }}"
                    data-option-index="{{ size_option.position }}"
                    {% unless is_available %}disabled aria-disabled="true"{% endunless %}
                    aria-label="Size {{ value }}{% unless is_available %} - unavailable{% endunless %}"
                  >{{ value }}</button>
                {% endfor %}
              </div>
            </div>
          {% endif %}

        {% endunless %}

        <!-- Quantity -->
        <div class="pdp-option-group pdp-qty-group">
          <div class="pdp-option-label">QUANTITY</div>
          <div class="pdp-qty-row">
            <button type="button" class="pdp-qty-btn" id="qtyMinus" aria-label="Decrease quantity">−</button>
            <input type="number" class="pdp-qty-input" id="qtyInput" name="quantity" value="1" min="1" max="99" inputmode="numeric">
            <button type="button" class="pdp-qty-btn" id="qtyPlus" aria-label="Increase quantity">+</button>
          </div>
        </div>

        <!-- Delivery: removed per user request -->

        <!-- Stock -->
        <p class="pdp-stock" id="pdpStock" data-stock-note></p>

        <!-- CTAs -->
        <div class="pdp-cta">
          <button
            class="pdp-btn pdp-btn--cart"
            type="submit"
            name="add"
            id="addToCartBtn"
            {% unless product.available %}disabled{% endunless %}
          >
            <span class="pdp-btn__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" focusable="false"><path d="M7 6h14l-2 8H9L7 6Zm0 0-1-2H2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/><circle cx="10" cy="19" r="1.4" fill="currentColor"/><circle cx="17" cy="19" r="1.4" fill="currentColor"/></svg>
            </span>
            <span class="pdp-btn__label">{% if product.available %}Add to cart{% else %}Sold out{% endif %}</span>
            <span class="pdp-btn__end" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" focusable="false"><path d="M10 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
            </span>
          </button>
          {% if product.available %}
            <div>{{ form | payment_button }}</div>
          {% endif %}
        </div>

        <!-- Trust Badges -->
        <div class="pdp-trust" aria-label="Purchase reassurances">
          <div class="pdp-trust-item">
            <svg class="pdp-trust-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <rect x="5" y="9" width="14" height="8" rx="2" stroke="currentColor" stroke-width="1.4" fill="none"></rect>
              <path d="M9 9V7a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
            </svg>
            <span>Secure Checkout</span>
          </div>
          <div class="pdp-trust-item">
            <svg class="pdp-trust-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path d="M20 7v6a2 2 0 01-2 2H9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
              <path d="M20 7l-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
            </svg>
            <span>Easy Returns</span>
          </div>
          <div class="pdp-trust-item">
            <svg class="pdp-trust-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path d="M3 7h11v6H3z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
              <circle cx="7" cy="17" r="1.6" fill="currentColor"></circle>
              <circle cx="18" cy="17" r="1.6" fill="currentColor"></circle>
            </svg>
            <span>Free Shipping</span>
          </div>
          <div class="pdp-trust-item">
            <svg class="pdp-trust-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" stroke-width="1.4" fill="none"></rect>
              <path d="M8 12h8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
            </svg>
            <span>Cash on Delivery</span>
          </div>
        </div>

        <div class="pdp-mobile-bar" aria-label="Quick purchase actions">
          <button class="pdp-btn pdp-btn--cart" type="button" data-mobile-add-to-cart>
            <span class="pdp-btn__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" focusable="false"><path d="M7 6h14l-2 8H9L7 6Zm0 0-1-2H2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/><circle cx="10" cy="19" r="1.4" fill="currentColor"/><circle cx="17" cy="19" r="1.4" fill="currentColor"/></svg>
            </span>
            <span class="pdp-btn__label">Add to cart</span>
            <span class="pdp-btn__end" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" focusable="false"><path d="M10 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
            </span>
          </button>
          <button class="pdp-btn pdp-btn--buy" type="button" id="buyNowBtn">
            <span class="pdp-btn__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" focusable="false"><path d="M6 12s1.5-3 6-3 6 3 6 3-1.5 3-6 3-6-3-6-3z" fill="currentColor"/></svg>
            </span>
            <span class="pdp-btn__label">Buy now</span>
            <span class="pdp-btn__end" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" focusable="false"><path d="M10 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
            </span>
          </button>
        </div>
        <p class="pdp-mobile-bar__note">Secure checkout • Easy returns • COD available</p>

      {% endform %}

      <!-- Description -->
      {% if product.description != blank %}
        {% capture cleaned_description %}
          {% assign description_blocks = product.description | split: '</p>' %}
          {% for block in description_blocks %}
            {% assign block_text = block | strip_html | strip | downcase %}
            {% unless block_text contains 'product weight' or block_text contains 'ship weight' or block_text contains 'length (cm)' or block_text contains 'breadth (cm)' or block_text contains 'height (cm)' %}
              {% if block != blank %}
                <p>{{ block }}</p>
              {% endif %}
            {% endunless %}
          {% endfor %}
        {% endcapture %}
        {% assign cleaned_text = cleaned_description | strip_html | strip %}
        {% if cleaned_text != blank %}
          <div class="pdp-divider"></div>
          <div class="pdp-description">{{ cleaned_description }}</div>
        {% endif %}
      {% endif %}

    </div><!-- /info -->
  </div><!-- /layout -->

</section>

<!-- ── Size Chart Modal ── -->
<div class="pdp-modal-backdrop" id="sizeChartModal" aria-hidden="true" role="dialog" aria-labelledby="scTitle">
  <div class="pdp-modal" role="document">
    <div class="pdp-modal-header">
      <h2 class="pdp-modal-title" id="scTitle">Size Chart</h2>
      <button class="pdp-modal-close" id="sizeChartClose" aria-label="Close">✕</button>
    </div>
    <div class="pdp-tabs" role="tablist">
      <button class="pdp-tab is-active" data-tab="inches" role="tab" aria-selected="true">Inches</button>
      <button class="pdp-tab" data-tab="cm" role="tab" aria-selected="false">Centimeters</button>
    </div>
    <div class="pdp-tab-panel is-active" id="tab-inches" role="tabpanel">
      <table class="pdp-sc-table">
        <thead><tr><th>Size</th><th>Chest (in)</th><th>Length (in)</th><th>Sleeve (in)</th></tr></thead>
        <tbody>
          <tr><td>XS</td><td>36</td><td>26</td><td>24</td></tr>
          <tr><td>S</td><td>38</td><td>27</td><td>24.5</td></tr>
          <tr><td>M</td><td>40</td><td>28</td><td>25</td></tr>
          <tr><td>L</td><td>42</td><td>29</td><td>25.5</td></tr>
          <tr><td>XL</td><td>44</td><td>30</td><td>26</td></tr>
          <tr><td>XXL</td><td>46</td><td>31</td><td>26.5</td></tr>
        </tbody>
      </table>
    </div>
    <div class="pdp-tab-panel" id="tab-cm" role="tabpanel">
      <table class="pdp-sc-table">
        <thead><tr><th>Size</th><th>Chest (cm)</th><th>Length (cm)</th><th>Sleeve (cm)</th></tr></thead>
        <tbody>
          <tr><td>XS</td><td>91</td><td>66</td><td>61</td></tr>
          <tr><td>S</td><td>97</td><td>69</td><td>62</td></tr>
          <tr><td>M</td><td>102</td><td>71</td><td>64</td></tr>
          <tr><td>L</td><td>107</td><td>74</td><td>65</td></tr>
          <tr><td>XL</td><td>112</td><td>76</td><td>66</td></tr>
          <tr><td>XXL</td><td>117</td><td>79</td><td>67</td></tr>
        </tbody>
      </table>
    </div>
    <p class="pdp-sc-note">* All measurements are of the actual garment. Please allow 0.5"–1" tolerance due to manual measurement.</p>
  </div>
</div>

<script type="application/json" id="pdpVariantsData">{{ product.variants | json }}</script>

<script>
(function () {
  'use strict';

  /* ── Data ── */
  const variants = JSON.parse(document.getElementById('pdpVariantsData').textContent);
  const state = {
    options: {},      // { optionPosition: value }
    quantity: 1,
  };

  /* Pre-fill state from first available variant */
  const firstVariant = variants.find(v => v.available) || variants[0];
  if (firstVariant) {
    firstVariant.options.forEach((val, i) => { state.options[i + 1] = val; });
  }

  /* ── DOM refs ── */
  const mainImg       = document.getElementById('pdpMainImgEl');
  const thumbsWrap    = document.getElementById('pdpThumbs');
  const variantIdIn   = document.getElementById('variantId');
  const priceDisplay  = document.querySelector('[data-price-display]');
  const comparePrice  = document.querySelector('[data-compare-price]');
  const saveLabel     = document.querySelector('[data-save-label]');
  const stockNote     = document.getElementById('pdpStock');
  const addToCartBtn  = document.getElementById('addToCartBtn');
  const colorLabel    = document.getElementById('colorLabel');
  const sizeLabel     = document.getElementById('sizeLabel');
  const colorGrid     = document.getElementById('colorGrid');
  const sizeGrid      = document.getElementById('sizeGrid');
  const qtyInput      = document.getElementById('qtyInput');
  const qtyMinus      = document.getElementById('qtyMinus');
  const qtyPlus       = document.getElementById('qtyPlus');
  const mobileAddBtn  = document.querySelector('[data-mobile-add-to-cart]');

  function normalizeImageKey(url) {
    if (!url) return '';
    try {
      const parsed = new URL(url, window.location.origin);
      const filename = (parsed.pathname.split('/').pop() || '').toLowerCase();
      return filename.replace(/_(pico|icon|thumb|small|compact|medium|large|grande|original|master|[0-9]+x[0-9]*|x[0-9]+)(?=\.[^.]+$)/i, '');
    } catch (error) {
      return String(url).toLowerCase();
    }
  }

  function setActiveThumbBySrc(src) {
    if (!thumbsWrap || !src) return;

    const srcKey = normalizeImageKey(src);
    if (!srcKey) return;

    let matchedThumb = null;
    thumbsWrap.querySelectorAll('.pdp-thumb').forEach((thumb) => {
      const thumbKey = normalizeImageKey(thumb.dataset.full);
      if (!matchedThumb && thumbKey && thumbKey === srcKey) {
        matchedThumb = thumb;
      }
    });

    if (!matchedThumb) return;

    thumbsWrap.querySelectorAll('.pdp-thumb').forEach((thumb) => {
      thumb.classList.remove('is-active');
      thumb.removeAttribute('aria-current');
    });
    matchedThumb.classList.add('is-active');
    matchedThumb.setAttribute('aria-current', 'true');
  }

  function setMainImage(src, altText) {
    if (!mainImg || !src) return;
    mainImg.src = src;
    if (typeof altText === 'string' && altText.length) {
      mainImg.alt = altText;
    }
    // adjust active thumb
    setActiveThumbBySrc(src);

    // adjust container for portrait/landscape images to avoid tall empty panels
    try {
      const probe = new Image();
      probe.onload = function () {
        const container = mainImg.closest('.pdp-main-img');
        if (!container) return;
        if (probe.naturalHeight > probe.naturalWidth) {
          container.classList.add('pdp-main-img--portrait');
          container.classList.remove('pdp-main-img--landscape');
        } else {
          container.classList.add('pdp-main-img--landscape');
          container.classList.remove('pdp-main-img--portrait');
        }
      };
      probe.src = src;
    } catch (e) {
      /* ignore */
    }
  }

  /* ── Gallery ── */
  if (thumbsWrap) {
    thumbsWrap.querySelectorAll('.pdp-thumb').forEach(btn => {
      btn.addEventListener('click', () => {
        setMainImage(btn.dataset.full, btn.dataset.alt || '');
      });
    });
  }

  /* ── Variant matching ── */
  function findVariant() {
    return variants.find(v => {
      return v.options.every((val, i) => {
        const pos = i + 1;
        return !(pos in state.options) || state.options[pos] === val;
      });
    });
  }

  function formatMoney(cents) {
    const whole = Math.floor(cents / 100);
    const frac  = (cents % 100).toString().padStart(2, '0');
    return `₹${whole.toLocaleString('en-IN')}.${frac}`;
  }

  function updateUI() {
    const v = findVariant();
    if (!v) return;

    /* Price */
    if (priceDisplay) {
      priceDisplay.textContent = (v.price / 100).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    if (comparePrice) {
      if (v.compare_at_price && v.compare_at_price > v.price) {
        comparePrice.textContent = formatMoney(v.compare_at_price);
        comparePrice.style.display = '';
        if (saveLabel) {
          const saved = v.compare_at_price - v.price;
          saveLabel.textContent = `Save ${formatMoney(saved)}`;
          saveLabel.style.display = '';
        }
      } else {
        comparePrice.style.display = 'none';
        if (saveLabel) saveLabel.style.display = 'none';
      }
    }

    /* Variant id */
    if (variantIdIn) variantIdIn.value = v.id;

    /* Stock */
    if (stockNote) {
      if (!v.available) {
        stockNote.textContent = 'Currently out of stock.';
        stockNote.classList.add('show');
      } else if (v.inventory_quantity > 0 && v.inventory_quantity <= 5) {
        stockNote.textContent = `Only ${v.inventory_quantity} left in stock – order soon!`;
        stockNote.classList.add('show');
      } else {
        stockNote.textContent = '';
        stockNote.classList.remove('show');
      }
    }

    /* Add to cart btn */
    if (addToCartBtn) {
      addToCartBtn.disabled = !v.available;
      const lbl = addToCartBtn.querySelector('.pdp-btn__label');
      if (lbl) lbl.textContent = v.available ? 'Add to cart' : 'Sold out'; else addToCartBtn.textContent = v.available ? 'Add to cart' : 'Sold out';
    }

    if (mobileAddBtn) mobileAddBtn.disabled = !v.available;

    /* Main image – switch to variant image if present */
    if (v.featured_image && mainImg) {
      setMainImage(v.featured_image.src, mainImg.alt || '');
    }
  }

  /* ── Color option clicks ── */
  if (colorGrid) {
    colorGrid.querySelectorAll('.pdp-color-card').forEach(card => {
      const activate = () => {
        const optIdx = parseInt(card.dataset.optionIndex, 10);
        const val    = card.dataset.optionValue;

        /* Update state */
        state.options[optIdx] = val;

        /* Update active classes */
        colorGrid.querySelectorAll('.pdp-color-card').forEach(c => {
          c.classList.remove('is-active');
          c.setAttribute('aria-checked', 'false');
        });
        card.classList.add('is-active');
        card.setAttribute('aria-checked', 'true');

        /* Update label */
        if (colorLabel) colorLabel.textContent = val;

        /* Swap main image to variant image if available */
        if (card.dataset.variantImage && mainImg) {
          setMainImage(card.dataset.variantImage, val);
        }
        updateUI();
      };
      card.addEventListener('click', activate);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
    });
  }

  /* ── Size option clicks ── */
  if (sizeGrid) {
    sizeGrid.querySelectorAll('.pdp-size-btn:not(.disabled)').forEach(btn => {
      btn.addEventListener('click', () => {
        const optIdx = parseInt(btn.dataset.optionIndex, 10);
        const val    = btn.dataset.optionValue;
        state.options[optIdx] = val;

        sizeGrid.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        if (sizeLabel) sizeLabel.textContent = val;
        updateUI();
      });
    });
  }

  /* ── Quantity ── */
  function setQty(n) {
    state.quantity = Math.max(1, Math.min(99, n));
    if (qtyInput) qtyInput.value = state.quantity;
  }
  if (qtyMinus) qtyMinus.addEventListener('click', () => setQty(state.quantity - 1));
  if (qtyPlus)  qtyPlus.addEventListener('click',  () => setQty(state.quantity + 1));
  if (qtyInput) {
    qtyInput.addEventListener('change', () => setQty(parseInt(qtyInput.value, 10) || 1));
  }

  if (mobileAddBtn && addToCartBtn) {
    mobileAddBtn.addEventListener('click', () => addToCartBtn.click());
  }

  /* ── Buy Now ── */
  const buyNowBtn = document.getElementById('buyNowBtn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      const v = findVariant();
      if (!v || !v.available) return;
      const acceleratedCheckout = document.querySelector('.shopify-payment-button__button');
      if (acceleratedCheckout) {
        acceleratedCheckout.click();
        return;
      }
      window.location.href = `/cart/${v.id}:${state.quantity}`;
    });
  }

  /* ── Size Chart Modal ── */
  const modal          = document.getElementById('sizeChartModal');
  const sizeChartTrig  = document.getElementById('sizeChartTrigger');
  const sizeChartClose = document.getElementById('sizeChartClose');

  function openModal() {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (sizeChartTrig) {
    sizeChartTrig.addEventListener('click', e => { e.preventDefault(); openModal(); });
  }
  if (sizeChartClose) sizeChartClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  /* ── Size chart tabs ── */
  if (modal) {
    modal.querySelectorAll('.pdp-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        modal.querySelectorAll('.pdp-tab').forEach(t => {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
        modal.querySelectorAll('.pdp-tab-panel').forEach(p => p.classList.remove('is-active'));
        const panel = document.getElementById(`tab-${target}`);
        if (panel) panel.classList.add('is-active');
      });
    });
  }

  /* ── Initial render ── */
  updateUI();
  if (mainImg) setActiveThumbBySrc(mainImg.src);

})();
</script>

{% schema %}
{
  "name": "Product template",
  "settings": []
}
{% endschema %}
{% comment %} force CLI sync comment 1 {% endcomment %}
```

## `sections/search-results.liquid`

```liquid
<section class="search-results section">
  <div class="page-width">
    <form action="{{ routes.search_url }}" method="get" role="search" class="search-results__form">
      <label for="SearchQuery" class="skip-link">Search</label>
      <div style="display:flex;gap:.5rem;align-items:center;">
        <input id="SearchQuery" name="q" type="search" value="{{ search.terms }}" placeholder="Search products" class="field" />
        <button class="button" type="submit">Search</button>
      </div>
    </form>

    <h2 class="section-title">Search results{% if search.terms %} for "{{ search.terms }}"{% endif %}</h2>

    {% if search.results_count > 0 %}
      <div class="product-grid">
        {% for result in search.results %}
          {% if result.object_type == 'product' %}
            {% render 'product-card', product: result %}
          {% endif %}
        {% endfor %}
      </div>
      {% if search.results_count > search.results.size %}
        <div class="search-results__more">
          <a class="button button--secondary" href="{{ routes.search_url }}?q={{ search.terms | url_encode }}&page=2">View more results</a>
        </div>
      {% endif %}
    {% else %}
      <p>No results found. Try different keywords or browse our collections.</p>
    {% endif %}
  </div>
</section>

{% schema %}
{
  "name": "Search results",
  "settings": [
    {
      "type": "text",
      "id": "no_results_text",
      "label": "No results message",
      "default": "No results found. Try different keywords or browse our collections."
    }
  ]
}
{% endschema %}
```

## `sections/tech-specs.liquid`

```liquid
<section class="tech-specs" id="techSpecs-{{ section.id }}">
  <div class="tech-specs__header">
    {% if section.settings.eyebrow != blank %}
      <span class="tech-specs__eyebrow">{{ section.settings.eyebrow }}</span>
    {% endif %}
    <h2 class="tech-specs__title">{{ section.settings.heading }}</h2>
  </div>

  <div class="tech-specs__track">
    {% for block in section.blocks %}
      <div class="tech-spec-card" {{ block.shopify_attributes }}>
        <div class="tech-spec-card__icon">
          {% if block.settings.custom_svg != blank %}
            {{ block.settings.custom_svg }}
          {% else %}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          {% endif %}
        </div>
        <span class="tech-spec-card__label">{{ block.settings.label }}</span>
        <span class="tech-spec-card__value">{{ block.settings.value }}</span>
      </div>
    {% endfor %}
  </div>
</section>

{% schema %}
{
  "name": "Technical Specifications",
  "settings": [
    {
      "type": "text",
      "id": "eyebrow",
      "label": "Eyebrow",
      "default": "SYSTEM PERFORMANCE"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Specs & Materials"
    }
  ],
  "blocks": [
    {
      "type": "spec_card",
      "name": "Spec Card",
      "settings": [
        {
          "type": "html",
          "id": "custom_svg",
          "label": "Custom SVG Icon (Optional)"
        },
        {
          "type": "text",
          "id": "label",
          "label": "Label",
          "default": "MATERIAL"
        },
        {
          "type": "text",
          "id": "value",
          "label": "Value",
          "default": "Gore-Tex Pro"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Technical Specifications",
      "blocks": [
        {
          "type": "spec_card",
          "settings": {
            "label": "FABRIC",
            "value": "3L Shell Membrane"
          }
        },
        {
          "type": "spec_card",
          "settings": {
            "label": "RATING",
            "value": "20,000mm Waterproof"
          }
        },
        {
          "type": "spec_card",
          "settings": {
            "label": "UTILITY",
            "value": "6 Gravity Pockets"
          }
        },
        {
          "type": "spec_card",
          "settings": {
            "label": "FIT",
            "value": "Modular / Interlock"
          }
        }
      ]
    }
  ]
}
{% endschema %}
```

## `snippets/button-primary.liquid`

```liquid
{%- comment -%}
  Renders a primary button
  Accepts:
  - label: {String} Button label (required)
  - url: {String} Link URL (optional)
  - id: {String} Element ID (optional)
  - class: {String} Additional classes (optional)
  - type: {String} Button type (optional, defaults to 'button')
  - attr: {String} Additional attributes (optional)
{%- endcomment -%}

{%- if url != blank -%}
  <a href="{{ url }}" 
     {% if id != blank %}id="{{ id }}"{% endif %} 
     class="btn-primary {{ class }}" 
     {{ attr }}>
    <span>{{ label }}</span>
    {% render 'icon-arrow' %}
  </a>
{%- else -%}
  <button type="{{ type | default: 'button' }}" 
          {% if id != blank %}id="{{ id }}"{% endif %} 
          class="btn-primary {{ class }}" 
          {{ attr }}>
    <span>{{ label }}</span>
    {% render 'icon-arrow' %}
  </button>
{%- endif -%}
```

## `snippets/card-collection.liquid`

```liquid
{% comment %}
  Collection card used by the homepage collection slider.
{% endcomment %}

{%- liquid
  assign ratio = 1
  if card_collection and card_collection.featured_image and media_aspect_ratio == 'portrait'
    assign ratio = 0.8
  elsif card_collection and card_collection.featured_image and media_aspect_ratio == 'adapt'
    assign ratio = card_collection.featured_image.aspect_ratio
  endif
  if ratio == 0 or ratio == null
    assign ratio = 1
  endif
-%}

<article class="collection-card">
  <a class="collection-card__link" href="{{ card_collection.url | default: routes.collections_url }}">
    <div class="collection-card__media" style="--ratio-percent: {{ 1 | divided_by: ratio | times: 100 }}%;">
      {%- if card_collection and card_collection.featured_image -%}
        {{ card_collection.featured_image | image_url: width: 1200 | image_tag: loading: 'lazy', alt: card_collection.title, class: 'collection-card__image' }}
      {%- else -%}
        {{ placeholder_image | placeholder_svg_tag: 'collection-card__placeholder' }}
      {%- endif -%}
    </div>

    <div class="collection-card__body">
      <h3 class="collection-card__title">
        {%- if card_collection and card_collection.title != blank -%}
          {{ card_collection.title | escape }}
        {%- else -%}
          Your collection's name
        {%- endif -%}
      </h3>
      <span class="collection-card__arrow" aria-hidden="true">→</span>
    </div>
  </a>
</article>

<style>
  .collection-card {
    min-width: 0;
  }

  .collection-card__link {
    display: block;
    color: inherit;
    text-decoration: none;
    transform: translateY(0);
    transition: transform .25s ease;
  }

  .collection-card__link:hover,
  .collection-card__link:focus-visible {
    transform: translateY(-4px);
  }

  .collection-card__media {
    position: relative;
    border-radius: 22px;
    overflow: hidden;
    background: linear-gradient(145deg, rgba(255,255,255,.96), rgba(244,244,244,.94));
    box-shadow: 0 18px 40px rgba(10, 18, 30, .08), inset 0 1px 0 rgba(255,255,255,.7);
    border: 1px solid color-mix(in srgb, var(--color-ink), transparent 90%);
  }

  .collection-card__media::before {
    content: '';
    display: block;
    padding-top: var(--ratio-percent);
  }

  .collection-card__image,
  .collection-card__placeholder {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform .45s ease;
  }

  .collection-card__link:hover .collection-card__image,
  .collection-card__link:hover .collection-card__placeholder {
    transform: scale(1.03);
  }

  .collection-card__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .75rem;
    padding: 1rem .15rem 0;
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-ink);
  }

  .collection-card__title {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  .collection-card__arrow {
    flex: none;
    color: var(--color-steel);
    transition: transform .25s ease, color .25s ease;
  }

  .collection-card__link:hover .collection-card__arrow,
  .collection-card__link:focus-visible .collection-card__arrow {
    transform: translateX(3px);
    color: var(--color-ink);
  }
</style>
```

## `snippets/facets.liquid`

```liquid
{% comment %}
  Simplified collection facets used by the Wingstone collection grid.
  Expects to be rendered inside a form with id "FacetFiltersForm".
{% endcomment %}

{%- liquid
  assign sort_by = results.sort_by | default: results.default_sort_by
  assign results_url = results.url | default: collection.url
-%}

<div class="active-facets active-facets-desktop">
  <div class="active-facets__header">
    <facet-remove>
      <a href="{{ results_url }}" class="active-facets__button-remove underlined-link">
        <span>Clear all</span>
      </a>
    </facet-remove>
  </div>

  {%- for filter in results.filters -%}
    {%- for value in filter.active_values -%}
      <facet-remove>
        <a href="{{ value.url_to_remove }}" class="active-facets__button active-facets__button--light">
          <span class="active-facets__button-inner button button--tertiary">
            {{ filter.label | escape }}: {{ value.label | escape }}
            <span class="visually-hidden">Clear filter</span>
          </span>
        </a>
      </facet-remove>
    {%- endfor -%}

    {%- if filter.type == 'price_range' -%}
      {%- assign min = filter.min_value.value -%}
      {%- assign max = filter.max_value.value -%}
      {%- if min != null or max != null -%}
        <facet-remove>
          <a href="{{ filter.url_to_remove }}" class="active-facets__button active-facets__button--light">
            <span class="active-facets__button-inner button button--tertiary">
              {{ min | default: 0 | money }} - {{ max | default: filter.range_max | money }}
              <span class="visually-hidden">Clear filter</span>
            </span>
          </a>
        </facet-remove>
      {%- endif -%}
    {%- endif -%}
  {%- endfor -%}
</div>

{%- for filter in results.filters -%}
  {%- case filter.type -%}
    {%- when 'boolean', 'list' -%}
      <details class="facets__disclosure-vertical js-filter" id="Details-{{ filter.param_name | escape }}-{{ section.id }}" {% if forloop.first %}open{% endif %}>
        <summary class="facets__summary caption-large focus-offset">
          <div>
            <span class="facets__summary-label">{{ filter.label | escape }}</span>
            <span class="facets__selected{% if filter.active_values.size == 0 %} hidden{% endif %}">({{ filter.active_values.size }})</span>
          </div>
        </summary>

        <div class="facets__display-vertical" id="Facet-{{ forloop.index }}-{{ section.id }}">
          <fieldset class="facets-wrap facets-wrap-vertical">
            <legend class="visually-hidden">{{ filter.label | escape }}</legend>
            <ul class="facets__list list-unstyled" role="list">
              {%- for value in filter.values -%}
                {%- assign input_id = 'Filter-' | append: filter.param_name | escape | append: '-' | append: forloop.index -%}
                {%- assign is_disabled = false -%}
                {%- if value.count == 0 and value.active == false -%}
                  {%- assign is_disabled = true -%}
                {%- endif -%}
                <li class="list-menu__item facets__item">
                  <label for="{{ input_id }}" class="facets__label facet-checkbox{% if is_disabled %} disabled{% endif %}{% if value.active %} active{% endif %}">
                    <input
                      type="checkbox"
                      name="{{ value.param_name }}"
                      value="{{ value.value }}"
                      id="{{ input_id }}"
                      {% if value.active %}checked{% endif %}
                      {% if is_disabled %}disabled{% endif %}
                    >
                    <span class="facet-checkbox__text" aria-hidden="true">
                      <span class="facet-checkbox__text-label">{{ value.label | escape }}</span>
                      <span>({{ value.count }})</span>
                    </span>
                  </label>
                </li>
              {%- endfor -%}
            </ul>
          </fieldset>
        </div>
      </details>

    {%- when 'price_range' -%}
      <details class="facets__disclosure-vertical js-filter" id="Details-{{ filter.param_name | escape }}-{{ section.id }}" {% if forloop.first %}open{% endif %}>
        <summary class="facets__summary caption-large focus-offset">
          <div>
            <span class="facets__summary-label">{{ filter.label | escape }}</span>
          </div>
        </summary>

        <div class="facets__display-vertical" id="Facet-{{ forloop.index }}-{{ section.id }}">
          <price-range class="facets__price">
            <div class="field">
              <input
                class="field__input"
                name="{{ filter.min_value.param_name }}"
                id="Filter-{{ filter.label | escape }}-GTE"
                {% if filter.min_value.value %}value="{{ filter.min_value.value | money_without_currency }}"{% endif %}
                type="text"
                inputmode="decimal"
                placeholder="0"
                data-min="0"
                data-max="{{ filter.range_max | money_without_currency }}"
              >
              <label class="field__label" for="Filter-{{ filter.label | escape }}-GTE">From</label>
            </div>

            <div class="field">
              <input
                class="field__input"
                name="{{ filter.max_value.param_name }}"
                id="Filter-{{ filter.label | escape }}-LTE"
                {% if filter.max_value.value %}value="{{ filter.max_value.value | money_without_currency }}"{% endif %}
                type="text"
                inputmode="decimal"
                placeholder="{{ filter.range_max | money_without_currency }}"
                data-min="0"
                data-max="{{ filter.range_max | money_without_currency }}"
              >
              <label class="field__label" for="Filter-{{ filter.label | escape }}-LTE">To</label>
            </div>
          </price-range>
        </div>
      </details>
  {%- endcase -%}
{%- endfor -%}
```

## `snippets/icon-arrow.liquid`

```liquid
<svg class="icon icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="16" height="16">
  <line x1="5" y1="12" x2="19" y2="12"></line>
  <polyline points="12 5 19 12 12 19"></polyline>
</svg>
```

## `snippets/icon-heart.liquid`

```liquid
<svg class="icon icon-heart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>
```

## `snippets/icon-star.liquid`

```liquid
{% comment %}
  Renders a star icon.
  Accepts:
  - filled: {Boolean} Whether the star is filled (default: false)
{% endcomment %}
<svg class="icon icon-star" viewBox="0 0 24 24" fill="{% if filled %}currentColor{% else %}none{% endif %}" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

## `snippets/motion-reveal.liquid`

```liquid
{%- comment -%}
  Renders a motion-reveal wrapper
  Accepts:
  - content: {String} HTML content inside the wrapper
  - class: {String} Additional classes (optional)
  - delay: {Number} Transition delay in milliseconds (optional)
  - attributes: {String} Additional HTML attributes (optional)
{%- endcomment -%}

<div class="motion-reveal {{ class }}" 
     {% if delay != blank %}style="transition-delay: {{ delay }}ms;"{% endif %}
     {{ attributes }}>
  {{ content }}
</div>
```

## `snippets/page-loader.liquid`

```liquid
<div class="page-loader" id="pageLoader" role="status" aria-label="Loading page">
  <div class="page-loader__logo">
    <span class="page-loader__letter">W</span>
  </div>
</div>

<script>
  window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hide');
      }, 750); // Premium slow transition reveal
    }
  });
</script>
```

## `snippets/pagination.liquid`

```liquid
{% comment %}
  Simple pagination used by the collection grid.
{% endcomment %}

{%- if paginate.pages > 1 -%}
  <div class="pagination-wrapper" data-page="{{ paginate.current_page }}">
    <nav class="pagination" role="navigation" aria-label="Pagination">
      {%- if paginate.previous -%}
        <a class="pagination__item pagination__item--prev" href="{{ paginate.previous.url }}{{ anchor }}" aria-label="Previous page">Previous</a>
      {%- endif -%}

      <span class="pagination__current">Page {{ paginate.current_page }} of {{ paginate.pages }}</span>

      {%- if paginate.next -%}
        <a class="pagination__item pagination__item--next" href="{{ paginate.next.url }}{{ anchor }}" aria-label="Next page">Next</a>
      {%- endif -%}
    </nav>
  </div>
{%- endif -%}
```

## `snippets/product-card.liquid`

```liquid
<article class="product-card" data-product-id="{{ product.id }}">
  <div class="product-card__image">
    <a href="{{ product.url }}" aria-label="{{ product.title | escape }}" tabindex="-1">
      {% if product.featured_media %}
        {{ product.featured_media | image_url: width: 720 | image_tag:
          loading: 'lazy',
          alt: product.title,
          class: 'primary-image',
          width: product.featured_media.preview_image.width,
          height: product.featured_media.preview_image.height
        }}
      {% else %}
        {{ 'product-1' | placeholder_svg_tag: 'img-cover' }}
      {% endif %}

      {% if product.images.size > 1 %}
        {{ product.images[1] | image_url: width: 720 | image_tag:
          loading: 'lazy',
          alt: product.title,
          class: 'hover-image'
        }}
      {% endif %}
    </a>

    <!-- Wishlist Button (localStorage persistence) -->
    <button
      type="button"
      class="product-card__wishlist-btn"
      aria-label="Add {{ product.title | escape }} to wishlist"
      aria-pressed="false"
      data-wishlist-toggle
      data-product-id="{{ product.id }}"
    >
      {% render 'icon-heart' %}
    </button>

    <!-- Discount Badge -->
    {% if product.compare_at_price > product.price %}
      {% assign discount = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round %}
      <span class="product-card__discount-badge" aria-label="{{ discount }}% off">{{ discount }}% OFF</span>
    {% endif %}
  </div>

  <div class="product-card__info">
    <!-- Tag badges -->
    <div class="product-card__badges" aria-hidden="true">
      {% if product.tags contains 'new' or product.tags contains 'new-drop' %}
        <span class="product-card__badge product-card__badge--new">New Drop</span>
      {% endif %}
      {% if product.tags contains 'best-seller' %}
        <span class="product-card__badge product-card__badge--best">Best Seller</span>
      {% endif %}
    </div>

    <!-- Vendor / Category -->
    <div class="product-card__meta">
      <span class="product-card__vendor">{{ product.vendor | default: 'Wingstone' }}</span>
    </div>

    <!-- Title -->
    <a href="{{ product.url }}" class="product-card__title-link">
      <h3 class="product-card__title">{{ product.title }}</h3>
    </a>

    <!-- Pricing -->
    <div class="product-card__pricing">
      {% if product.compare_at_price > product.price %}
        <span class="product-card__price--compare">{{ product.compare_at_price | money }}</span>
        <span class="product-card__price product-card__price--sale">{{ product.price | money }}</span>
      {% else %}
        <span class="product-card__price">{{ product.price | money }}</span>
      {% endif %}
    </div>

    <!-- Color & Size Swatches — fixed multi-word parser -->
    {%- if product.variants.size > 0 -%}
      <div class="product-card__variants">
        {%- for option in product.options_with_values -%}
          {%- assign option_name = option.name | downcase -%}

          {%- if option_name == 'color' or option_name == 'colour' -%}
            <div class="product-card__swatches product-card__swatches--color" role="list" aria-label="{{ option.name }}">
              {%- for value in option.values limit: 5 -%}
                {%- assign swatch_handle = value | handleize -%}

                {%- comment -%} Check for metafield-driven swatch color first {%- endcomment -%}
                {%- assign meta_swatch = product.metafields.custom['swatch_color_' | append: swatch_handle] -%}

                {%- if meta_swatch != blank -%}
                  {%- assign swatch_css = meta_swatch -%}
                {%- else -%}
                  {%- comment -%} Built-in color name map for common fashion colors {%- endcomment -%}
                  {%- case swatch_handle -%}
                    {%- when 'deep-navy', 'navy', 'dark-navy', 'midnight-navy' -%}{%- assign swatch_css = '#04102f' -%}
                    {%- when 'obsidian', 'black', 'jet-black', 'onyx' -%}{%- assign swatch_css = '#0b0d12' -%}
                    {%- when 'stone-grey', 'stone-gray', 'slate', 'charcoal' -%}{%- assign swatch_css = '#6b7280' -%}
                    {%- when 'off-white', 'cream', 'ivory', 'chalk', 'ecru' -%}{%- assign swatch_css = '#faf9f6' -%}
                    {%- when 'white', 'alpine-white' -%}{%- assign swatch_css = '#ffffff' -%}
                    {%- when 'sand', 'dune', 'khaki', 'desert' -%}{%- assign swatch_css = '#c2a97a' -%}
                    {%- when 'forest-green', 'pine', 'olive', 'sage' -%}{%- assign swatch_css = '#3a5a40' -%}
                    {%- when 'red', 'crimson', 'scarlet', 'ruby' -%}{%- assign swatch_css = '#9e1b32' -%}
                    {%- when 'gold', 'amber', 'bronze', 'caramel' -%}{%- assign swatch_css = '#cba72f' -%}
                    {%- when 'cobalt', 'blue', 'royal-blue' -%}{%- assign swatch_css = '#1e3a5f' -%}
                    {%- when 'burnt-orange', 'terracotta', 'rust' -%}{%- assign swatch_css = '#b55a30' -%}
                    {%- else -%}
                      {%- comment -%} Attempt raw value as CSS color — works for hex, rgb, named colors {%- endcomment -%}
                      {%- assign swatch_css = value | downcase -%}
                  {%- endcase -%}
                {%- endif -%}

                <span
                  class="product-card__swatch product-card__swatch--color"
                  style="background-color: {{ swatch_css }};"
                  title="{{ value }}"
                  role="listitem"
                  aria-label="{{ value }}"
                ></span>
              {%- endfor -%}
              {%- if option.values.size > 5 -%}
                <span class="product-card__swatch-more" aria-label="{{ option.values.size | minus: 5 }} more colors">+{{ option.values.size | minus: 5 }}</span>
              {%- endif -%}
            </div>

          {%- elsif option_name == 'size' -%}
            <div class="product-card__swatches product-card__swatches--size" role="list" aria-label="{{ option.name }}">
              {%- for value in option.values limit: 4 -%}
                <span class="product-card__swatch product-card__swatch--size" title="{{ value }}" role="listitem">{{ value }}</span>
              {%- endfor -%}
              {%- if option.values.size > 4 -%}
                <span class="product-card__swatch-more">+{{ option.values.size | minus: 4 }}</span>
              {%- endif -%}
            </div>
          {%- endif -%}
        {%- endfor -%}
      </div>
    {%- endif -%}

    <!-- Quick Add Form -->
    {%- assign product_form_id = 'product-form-' | append: product.id -%}
    {%- form 'product', product, id: product_form_id, class: 'product-card__form' -%}
      <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
      <button
        class="product-card__quick-add"
        type="submit"
        aria-label="{{ product.title | escape }} — {% if product.available %}Add to cart{% else %}Sold out{% endif %}"
        {% unless product.available %}disabled{% endunless %}
      >
        <span>{% if product.available %}Quick Add{% else %}Sold Out{% endif %}</span>
        {% if product.available %}{% render 'icon-arrow' %}{% endif %}
      </button>
    {%- endform -%}
  </div>
</article>

<script>
/* Wishlist localStorage logic — scoped to this card */
(function() {
  const card = document.querySelector('[data-product-id="{{ product.id }}"]');
  if (!card) return;
  const btn = card.querySelector('[data-wishlist-toggle]');
  if (!btn) return;

  const productId = '{{ product.id }}';
  const key = 'wl_' + productId;

  const isWishlisted = () => localStorage.getItem(key) === '1';

  const updateState = (wishlisted) => {
    btn.setAttribute('aria-pressed', wishlisted ? 'true' : 'false');
    btn.classList.toggle('active', wishlisted);
    btn.setAttribute('aria-label',
      wishlisted
        ? 'Remove {{ product.title | escape | replace: "'", "" }} from wishlist'
        : 'Add {{ product.title | escape | replace: "'", "" }} to wishlist'
    );
  };

  /* Init state from storage */
  updateState(isWishlisted());

  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const next = !isWishlisted();
    if (next) {
      localStorage.setItem(key, '1');
    } else {
      localStorage.removeItem(key);
    }
    updateState(next);

    /* Micro-animation */
    btn.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ], { duration: 280, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' });
  });
})();
</script>
```

## `templates/404.json`

```json
{
  "sections": {
    "main": {
      "type": "main-404",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

## `templates/cart.json`

```json
{
  "sections": {
    "main": {
      "type": "main-cart-items",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

## `templates/collection.json`

```json
{
  "sections": {
    "banner": {
      "type": "main-collection-banner",
      "settings": {
        "show_collection_description": true,
        "show_collection_image": false
      }
    },
    "product-grid": {
      "type": "main-collection-product-grid",
      "settings": {
        "products_per_page": 16,
        "columns_desktop": 4,
        "columns_mobile": "2",
        "color_scheme": "scheme-1",
        "enable_filtering": true,
        "enable_sorting": true,
        "filter_type": "vertical",
        "padding_top": 24,
        "padding_bottom": 36
      }
    }
  },
  "order": ["banner", "product-grid"]
}
```

## `templates/customers/login.json`

```json
{
  "sections": {
    "main": {
      "type": "main-login",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

## `templates/gift_card.liquid`

```liquid
<section class="section gift-card">
  <div class="page-width gift-card__inner">
    <p class="eyebrow">{{ shop.name }}</p>
    <h1 class="section-title">Gift card</h1>

    <div class="gift-card__panel">
      <div class="gift-card__logo">
        <img src="{{ 'wingstone-logo.png' | asset_url }}" alt="{{ shop.name | default: 'Wingstone' }}" width="1254" height="1254">
      </div>

      <p class="gift-card__balance">{{ gift_card.balance | money }}</p>

      {% if gift_card.enabled == false or gift_card.expired %}
        <p>This gift card is no longer active.</p>
      {% else %}
        <p>Use this code at checkout.</p>
      {% endif %}

      <div class="gift-card__code" aria-label="Gift card code">
        {{ gift_card.code | format_code }}
      </div>

      {% if gift_card.qr_identifier %}
        {% # theme-check-disable UnknownFilter %}
        <img
          class="gift-card__qr"
          src="{{ gift_card.qr_identifier | qr_code_url: size: 240 }}"
          alt="Gift card QR code"
          width="240"
          height="240"
        >
        {% # theme-check-enable UnknownFilter %}
      {% endif %}

      <div class="gift-card__actions">
        <a class="button" href="{{ shop.url }}">Shop now</a>
        <button class="button button--secondary" type="button" onclick="window.print()">Print</button>
      </div>
    </div>
  </div>
</section>
```

## `templates/index.json`

```json
{
  "sections": {
    "hero": {
      "type": "hero-wingstone",
      "settings": {
        "badge": "DROP_01 // CYBER ASCENSION",
        "eyebrow": "FUTURISTIC STREETWEAR FOR THE NEXT ERA",
        "heading": "Wingstone",
        "text": "<p>Cinematic drops, sharp silhouettes, and a quieter premium experience built for the Wingstone world.</p>",
        "announcement_text": "LIMITED RELEASE / NEW DROP / FUTURE STREETWEAR / WINGSTONE WORLD / EDITORIAL FITS",
        "primary_label": "Shop drop",
        "primary_link": "#featured-products",
        "secondary_label": "Explore story",
        "secondary_link": "#trust",
        "stat_one_number": "01",
        "stat_one_label": "Featured drop",
        "stat_two_number": "24/7",
        "stat_two_label": "Order support",
        "stat_three_number": "5.0",
        "stat_three_label": "Brand feel"
      }
    },
    "featured": {
      "type": "featured-collection",
      "settings": {
        "eyebrow": "Featured drop",
        "heading": "Built like a campaign, not a catalog.",
        "subtext": "Each product card should feel editorial, collectible, and clearly part of the Wingstone universe.",
        "products_to_show": 12
      }
    },
    "collections": {
      "type": "collection-list",
      "settings": {
        "title": "Collections",
        "collections_to_show": 4,
        "image_ratio": "square",
        "columns_mobile": "1",
        "swipe_on_mobile": true,
        "show_view_all": true
      }
    },
    "values": {
      "type": "brand-values",
      "settings": {
        "eyebrow": "Wingstone standard",
        "heading": "Sharp, calm, exact"
      },
      "blocks": {
        "quality": {
          "type": "value",
          "settings": {
            "title": "Cinematic presentation",
            "text": "Large imagery, restrained spacing, and strong type make each product feel like a drop, not a listing."
          }
        },
        "shipping": {
          "type": "value",
          "settings": {
            "title": "Cleaner navigation",
            "text": "Fewer choices, better labels, and a route structure that keeps people moving through the brand world."
          }
        },
        "offers": {
          "type": "value",
          "settings": {
            "title": "Meaningful drops",
            "text": "Tags, metafields, and collection naming work together so the storefront can evolve without new templates."
          }
        }
      },
      "block_order": ["quality", "shipping", "offers"]
    },
    "newsletter": {
      "type": "newsletter",
      "settings": {
        "eyebrow": "Private access",
        "heading": "Get early access",
        "text": "<p>New drops, restocks, and release notes before the storefront goes public.</p>",
        "button_label": "Subscribe"
      }
    }
  },
  "order": ["hero", "featured", "collections", "values", "newsletter"]
}
```

## `templates/list-collections.json`

```json
{
  "sections": {
    "main": {
      "type": "main-list-collections",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

## `templates/page.about.json`

```json
{
  "sections": {
    "main": {
      "type": "main-page",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

## `templates/page.contact.json`

```json
{
  "sections": {
    "contact": {
      "type": "contact-page",
      "settings": {}
    }
  },
  "order": ["contact"]
}
```

## `templates/page.json`

```json
{
  "sections": {
    "main": {
      "type": "main-page",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

## `templates/product.json`

```json
/*
 * ------------------------------------------------------------
 * IMPORTANT: The contents of this file are auto-generated.
 *
 * This file may be updated by the Shopify admin theme editor
 * or related systems. Please exercise caution as any changes
 * made to this file may be overwritten.
 * ------------------------------------------------------------
 */
{
  "sections": {
    "main": {
      "type": "main-product",
      "settings": {}
    }
  },
  "order": ["main"]
}
```

## `templates/search.json`

```json
{
  "sections": {
    "search": {
      "type": "search-results",
      "settings": {
        "no_results_text": "No results found. Try different keywords or browse our collections."
      }
    }
  },
  "order": ["search"]
}
```

