window.Wingstone = window.Wingstone || {};

(() => {
  const drawer = document.querySelector('[data-cart-drawer]');
  const backdrop = document.querySelector('[data-cart-drawer-backdrop]');
  const body = document.body;

  const getDrawerContent = () => document.querySelector('[data-cart-drawer-content]');

  const updateBadge = (count) => {
    document.querySelectorAll('[data-cart-count]').forEach((badge) => {
      badge.textContent = String(count);
      badge.hidden = count <= 0;
    });
  };

  const syncBadge = async () => {
    try {
      const response = await fetch('/cart.js', { headers: { Accept: 'application/json' } });
      const cart = await response.json();
      updateBadge(cart.item_count || 0);
      return cart;
    } catch (error) {
      return null;
    }
  };

  const renderItems = (cart) => {
    const content = getDrawerContent();
    if (!content) return;

    const items = cart.items || [];
    const threshold = Number(drawer?.dataset.freeShippingThreshold || 0);
    const progress = threshold > 0 ? Math.min(100, (cart.total_price / threshold) * 100) : 100;
    const remaining = threshold > cart.total_price ? threshold - cart.total_price : 0;

    content.innerHTML = items.length
      ? `
        <div class="cart-drawer__progress">
          <div class="cart-drawer__summary">
            <span>${remaining > 0 ? `Add ${Wingstone.formatMoney(remaining)} more for free shipping` : 'Free shipping unlocked'}</span>
            <strong class="cart-drawer__subtotal">${Wingstone.formatMoney(cart.total_price)}</strong>
          </div>
          <div class="cart-drawer__progress-bar" aria-hidden="true"><div class="cart-drawer__progress-fill" data-progress-fill="${progress}"></div></div>
        </div>
        <div class="cart-drawer__items">
          ${items.map((item) => `
            <div class="cart-item" data-cart-line="${item.key}">
              <a class="cart-item__media" href="${item.url}">
                ${item.image ? `<img src="${item.image}" alt="${item.product_title.replace(/"/g, '&quot;')}">` : ''}
              </a>
              <div class="cart-item__content">
                <p class="cart-item__title">${item.product_title}</p>
                <p class="cart-item__meta">${item.variant_title === 'Default Title' ? '' : item.variant_title}</p>
                <div class="cart-item__quantity">
                  <button type="button" class="cart-item__qty" data-cart-change="-1" data-key="${item.key}" aria-label="Decrease quantity">−</button>
                  <span>${item.quantity}</span>
                  <button type="button" class="cart-item__qty" data-cart-change="1" data-key="${item.key}" aria-label="Increase quantity">+</button>
                </div>
              </div>
              <div class="cart-item__price-wrap">
                <strong class="cart-item__price">${Wingstone.formatMoney(item.final_line_price)}</strong>
              </div>
            </div>
          `).join('')}
        </div>
      `
      : `
        <div class="cart-drawer__empty-state">
          <p class="cart-drawer__empty">Your cart is empty.</p>
          <a class="button" href="${window.Shopify?.routes?.all_products_collection_url || '/collections/all'}">Shop the collection</a>
        </div>
      `;
  };

  const open = async () => {
    if (!drawer || !backdrop) return;
    drawer.hidden = false;
    backdrop.hidden = false;
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    body.classList.add('cart-open');

    const cart = await syncBadge();
    if (cart) renderItems(cart);
  };

  const close = () => {
    if (!drawer || !backdrop) return;
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    body.classList.remove('cart-open');
    window.setTimeout(() => {
      drawer.hidden = true;
      backdrop.hidden = true;
    }, 240);
  };

  const addItem = async (formData) => {
    const response = await fetch('/cart/add.js', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData
    });

    if (!response.ok) throw new Error('Unable to add item to cart');

    const cart = await syncBadge();
    if (cart && drawer?.classList.contains('is-open')) renderItems(cart);
    Wingstone.showToast('Added to cart');
    return cart;
  };

  const changeItem = async (key, delta) => {
    const cart = await (await fetch('/cart.js', { headers: { Accept: 'application/json' } })).json();
    const item = (cart.items || []).find((line) => line.key === key);
    if (!item) return;

    await fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ id: key, quantity: Math.max(0, item.quantity + delta) })
    });

    const updated = await syncBadge();
    if (updated && drawer?.classList.contains('is-open')) renderItems(updated);
  };

  window.Wingstone.cart = { open, close, addItem, changeItem, syncBadge };

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-open-cart]')) {
      event.preventDefault();
      open();
    }

    if (event.target.closest('[data-close-cart]') || event.target.closest('[data-cart-drawer-backdrop]')) {
      event.preventDefault();
      close();
    }

    const adjust = event.target.closest('[data-cart-change]');
    if (adjust) {
      event.preventDefault();
      changeItem(adjust.dataset.key, Number(adjust.dataset.cartChange || 0));
    }
  });

  document.addEventListener('submit', async (event) => {
    const form = event.target.closest('[data-ajax-cart-form]');
    if (!form) return;

    event.preventDefault();
    const button = form.querySelector('[type="submit"]');
    if (button) button.disabled = true;

    try {
      const cart = await addItem(new FormData(form));
      if (cart && form.dataset.openCart !== 'false') await open();
    } finally {
      if (button) button.disabled = false;
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer?.classList.contains('is-open')) close();
  });

  document.addEventListener('DOMContentLoaded', syncBadge);
})();
