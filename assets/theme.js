document.documentElement.classList.remove('no-js');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const formatMoney = (cents) => {
  if (window.Shopify && window.Shopify.formatMoney) {
    return window.Shopify.formatMoney(cents, window.Shopify.money_format || '₹{{amount}}');
  }
  return `₹${(cents / 100).toFixed(2)}`;
};


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
    if (window.cartDrawer) {
      const openDrawer = (form.id !== 'pdpForm');
      window.cartDrawer.addProduct(form, openDrawer);
    } else {
      form.submit();
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

// ── Dropdown Menu Accessibility ──
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.site-nav__dropdown-wrap').forEach(wrap => {
    const trigger = wrap.querySelector('.site-nav__link--has-dropdown');
    const dropdown = wrap.querySelector('.site-nav__dropdown');
    if (!trigger || !dropdown) return;

    const show = () => {
      trigger.setAttribute('aria-expanded', 'true');
      dropdown.setAttribute('aria-hidden', 'false');
    };
    const hide = () => {
      trigger.setAttribute('aria-expanded', 'false');
      dropdown.setAttribute('aria-hidden', 'true');
    };

    wrap.addEventListener('mouseenter', show);
    wrap.addEventListener('mouseleave', hide);
    wrap.addEventListener('focusin', show);
    wrap.addEventListener('focusout', (e) => {
      if (!wrap.contains(e.relatedTarget)) {
        hide();
      }
    });
  });
});

// ── Footer Logo Error Fallback (CSP Compliant) ──
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.site-footer__logo-img').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const fallback = img.nextElementSibling;
      if (fallback) fallback.style.display = 'inline-block';
    });
    if (img.naturalWidth === 0 && img.src) {
      img.dispatchEvent(new Event('error'));
    }
  });
});
