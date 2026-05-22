/**
 * WINGSTONE — cart-drawer.js
 * AJAX Cart Drawer functionality with custom animations and event handlers
 */
class CartDrawer {
  constructor() {
    this.drawer = document.querySelector('[data-cart-drawer]');
    this.backdrop = document.querySelector('[data-cart-drawer-backdrop]');
    this.closeButtons = document.querySelectorAll('[data-cart-drawer-close]');
    this.toggles = document.querySelectorAll('[data-cart-drawer-toggle]');
    this.content = document.querySelector('[data-cart-drawer-content]');
    this.badge = document.querySelector('.site-header__badge');
    this.cartToast = document.getElementById('cartToast');
    this.cartToastMessage = document.getElementById('cartToastMessage');
    
    this.init();
  }

  init() {
    // Open cart drawer
    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    });

    // Close cart drawer
    this.closeButtons.forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });

    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }

    // Intercept form submissions for product adds
    document.addEventListener('submit', (e) => {
      const form = e.target;
      if (form.action && form.action.includes('/cart/add')) {
        e.preventDefault();
        this.addProduct(form);
      }
    });

    // Delegated click handlers for items in the cart
    if (this.content) {
      this.content.addEventListener('click', (e) => {
        const target = e.target;
        if (target.matches('[data-cart-qty-adjust]')) {
          const key = target.dataset.itemKey;
          const currentQty = parseInt(target.dataset.itemQty, 10);
          const adjustment = parseInt(target.dataset.cartQtyAdjust, 10);
          this.updateQuantity(key, currentQty + adjustment);
        } else if (target.matches('[data-cart-remove]')) {
          e.preventDefault();
          const key = target.dataset.itemKey;
          this.updateQuantity(key, 0);
        }
      });

      this.content.addEventListener('change', (e) => {
        const target = e.target;
        if (target.matches('[data-cart-qty-input]')) {
          const key = target.dataset.itemKey;
          const qty = parseInt(target.value, 10);
          if (!isNaN(qty)) {
            this.updateQuantity(key, qty);
          }
        }
      });
    }
  }

  open() {
    if (!this.drawer) return;
    this.drawer.removeAttribute('hidden');
    this.drawer.setAttribute('aria-hidden', 'false');
    if (this.backdrop) this.backdrop.removeAttribute('hidden');
    
    // Animate in
    setTimeout(() => {
      this.drawer.classList.add('is-open');
      if (this.backdrop) this.backdrop.classList.add('is-open');
    }, 10);

    this.fetchCart();
  }

  close() {
    if (!this.drawer) return;
    this.drawer.classList.remove('is-open');
    if (this.backdrop) this.backdrop.classList.remove('is-open');

    setTimeout(() => {
      this.drawer.setAttribute('hidden', 'true');
      this.drawer.setAttribute('aria-hidden', 'true');
      if (this.backdrop) this.backdrop.setAttribute('hidden', 'true');
    }, 300);
  }

  fetchCart() {
    this.renderLoading();
    fetch('/cart.js')
      .then(res => res.json())
      .then(cart => {
        this.renderCart(cart);
        this.updateBadge(cart.item_count);
      })
      .catch(err => {
        console.error('Error fetching cart:', err);
        if (this.content) {
          this.content.innerHTML = `<p class="cart-drawer__error">Failed to load cart. Please try again.</p>`;
        }
      });
  }

  addProduct(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.setAttribute('disabled', 'disabled');
      submitBtn.dataset.originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Adding...';
    }

    const formData = new FormData(form);

    fetch('/cart/add.js', {
      method: 'POST',
      body: formData
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to add product');
        return res.json();
      })
      .then(item => {
        this.showToast(`${item.title} added to cart.`);
        this.open();
      })
      .catch(err => {
        console.error('Error adding product:', err);
        this.showToast('Could not add item to cart. Out of stock?');
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.removeAttribute('disabled');
          submitBtn.innerHTML = submitBtn.dataset.originalText || 'Quick add';
        }
      });
  }

  updateQuantity(key, qty) {
    this.renderLoading();
    fetch('/cart/change.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: key,
        quantity: qty
      })
    })
      .then(res => res.json())
      .then(cart => {
        this.renderCart(cart);
        this.updateBadge(cart.item_count);
      })
      .catch(err => {
        console.error('Error updating quantity:', err);
      });
  }

  updateBadge(count) {
    // Update count in header
    let headerBadge = document.querySelector('.site-header__badge');
    const cartToggle = document.querySelector('[data-cart-drawer-toggle]');
    
    if (count > 0) {
      if (!headerBadge && cartToggle) {
        headerBadge = document.createElement('span');
        headerBadge.className = 'site-header__badge';
        cartToggle.appendChild(headerBadge);
      }
      if (headerBadge) headerBadge.textContent = count;
    } else {
      if (headerBadge) headerBadge.remove();
    }
  }

  renderLoading() {
    if (this.content) {
      this.content.innerHTML = `<div class="cart-drawer__loading-spinner"><span></span></div>`;
    }
  }

  renderCart(cart) {
    if (!this.content) return;

    if (cart.item_count === 0) {
      this.content.innerHTML = `
        <div class="cart-drawer__empty">
          <p class="cart-drawer__empty-text">Your cart is currently empty.</p>
          <button class="btn-primary" type="button" data-cart-drawer-close>Continue shopping</button>
        </div>
      `;
      return;
    }

    let itemsHtml = '<div class="cart-drawer__items">';
    
    cart.items.forEach(item => {
      const priceFormatted = this.formatMoney(item.final_line_price);
      const originalPriceFormatted = item.original_line_price > item.final_line_price ? this.formatMoney(item.original_line_price) : '';
      const imageSrc = item.image ? item.image : '';

      itemsHtml += `
        <div class="cart-drawer__item" data-item-key="${item.key}">
          <div class="cart-drawer__item-image">
            ${imageSrc ? `<img src="${imageSrc}" alt="${item.product_title}" loading="lazy">` : ''}
          </div>
          <div class="cart-drawer__item-details">
            <h4 class="cart-drawer__item-title">
              <a href="${item.url}">${item.product_title}</a>
            </h4>
            ${item.variant_title ? `<p class="cart-drawer__item-variant">${item.variant_title}</p>` : ''}
            
            <div class="cart-drawer__item-meta">
              <div class="cart-drawer__qty-selector">
                <button type="button" data-cart-qty-adjust="-1" data-item-key="${item.key}" data-item-qty="${item.quantity}">-</button>
                <input type="number" value="${item.quantity}" min="0" data-cart-qty-input data-item-key="${item.key}">
                <button type="button" data-cart-qty-adjust="1" data-item-key="${item.key}" data-item-qty="${item.quantity}">+</button>
              </div>
              
              <div class="cart-drawer__item-price-wrap">
                ${originalPriceFormatted ? `<s class="cart-drawer__item-price-compare">${originalPriceFormatted}</s>` : ''}
                <span class="cart-drawer__item-price">${priceFormatted}</span>
              </div>
            </div>
            
            <button class="cart-drawer__item-remove" type="button" data-cart-remove data-item-key="${item.key}">Remove</button>
          </div>
        </div>
      `;
    });

    itemsHtml += '</div>';

    const subtotalFormatted = this.formatMoney(cart.total_price);
    
    const footerHtml = `
      <div class="cart-drawer__footer">
        <div class="cart-drawer__totals">
          <span class="cart-drawer__totals-label">Subtotal</span>
          <span class="cart-drawer__totals-value">${subtotalFormatted}</span>
        </div>
        <p class="cart-drawer__tax-note">Shipping & taxes calculated at checkout</p>
        <form action="/checkout" method="post" class="cart-drawer__checkout-form">
          <button type="submit" name="checkout" class="btn-primary w-full">Proceed to checkout</button>
        </form>
      </div>
    `;

    this.content.innerHTML = itemsHtml + footerHtml;
  }

  formatMoney(cents) {
    // Custom fallback simple formatter (assuming USD/CAD/INR etc.)
    // Shopify.formatMoney is ideal if available, otherwise fallback
    if (window.Shopify && window.Shopify.formatMoney) {
      return window.Shopify.formatMoney(cents);
    }
    return `$${(cents / 100).toFixed(2)}`;
  }

  showToast(message) {
    if (!this.cartToast || !this.cartToastMessage) return;
    this.cartToastMessage.textContent = message;
    this.cartToast.removeAttribute('hidden');
    this.cartToast.classList.add('is-active');

    setTimeout(() => {
      this.cartToast.classList.remove('is-active');
      setTimeout(() => {
        this.cartToast.setAttribute('hidden', 'true');
      }, 300);
    }, 3500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cartDrawer = new CartDrawer();
});
