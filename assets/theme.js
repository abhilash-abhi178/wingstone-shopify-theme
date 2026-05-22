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

      // Keep PDP and quick-add card submits silent so they only update cart state.
      if (form.id === 'pdpForm' || form.classList.contains('product-card__form')) {
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
        await openCartDrawer();
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

  // Additional wiring for Amazon-style classes if present
  const colorCards = form.querySelectorAll('.color-card');
  if (colorCards.length) {
    colorCards.forEach((card) => {
      card.addEventListener('click', () => {
        if (card.classList.contains('disabled')) return;
        const group = card.closest('[data-option-group]');
        const buttons = [...group.querySelectorAll('.color-card')];
        buttons.forEach(b => b.classList.toggle('is-active', b === card));
        const selectedColor = form.querySelector('#selectedColor');
        if (selectedColor) selectedColor.textContent = card.querySelector('.variant-name') ? card.querySelector('.variant-name').innerText : card.dataset.optionValue;
        updateVariant();
      });
    });
  }

  const sizeButtons = form.querySelectorAll('.size-btn');
  if (sizeButtons.length) {
    sizeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) return;
        const group = btn.closest('[data-option-group]');
        const buttons = [...group.querySelectorAll('.size-btn')];
        buttons.forEach(b => b.classList.toggle('is-active', b === btn));
        const selectedSize = form.querySelector('#selectedSize');
        if (selectedSize) selectedSize.textContent = btn.textContent.trim();
        updateVariant();
      });
    });
  }

  // Wire quantity plus/minus in Amazon layout
  const qtyInputAlt = form.querySelector('.qty-input');
  const plus = form.querySelector('.qty-btn.plus');
  const minus = form.querySelector('.qty-btn.minus');
  if (qtyInputAlt) {
    if (plus) plus.addEventListener('click', () => { qtyInputAlt.value = String(Math.max(1, Number(qtyInputAlt.value || 0) + 1)); qtyInputAlt.dispatchEvent(new Event('change',{bubbles:true})); });
    if (minus) minus.addEventListener('click', () => { const val = Math.max(1, Number(qtyInputAlt.value || 1) - 1); qtyInputAlt.value = String(val); qtyInputAlt.dispatchEvent(new Event('change',{bubbles:true})); });
    qtyInputAlt.addEventListener('change', () => { qtyInputAlt.value = String(Math.max(1, Number(qtyInputAlt.value || 1))); });
  }

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

  footerAccordions.forEach((accordion) => {
    accordion.open = footerAccordionQuery.matches;
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
