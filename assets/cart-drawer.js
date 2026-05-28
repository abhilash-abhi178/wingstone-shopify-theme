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
