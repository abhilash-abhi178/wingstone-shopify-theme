window.Wingstone = window.Wingstone || {};

(() => {
  const roots = document.querySelectorAll('[data-product-root]');
  if (!roots.length) return;

  const formatMoney = (cents) => window.Wingstone.formatMoney(cents);

  roots.forEach((root) => {
    const productDataEl = root.querySelector('[data-product-json]');
    if (!productDataEl) return;

    const product = JSON.parse(productDataEl.textContent || '{}');
    const variants = product.variants || [];
    const form = root.querySelector('[data-ajax-cart-form]');
    const variantInput = root.querySelector('[data-product-variant-input]');
    const priceWrap = root.querySelector('.price');
    const currentPrice = root.querySelector('.price__current');
    const comparePrice = root.querySelector('.price__compare');
    const stockNote = root.querySelector('.pdp__stock-note');
    const addButton = root.querySelector('.pdp__action--primary');
    const buyNowButton = root.querySelector('[data-buy-now]');
    const quantityInput = root.querySelector('[data-quantity-input]');
    const quantityButtons = root.querySelectorAll('[data-quantity-change]');
    const optionGroups = root.querySelectorAll('[data-option-group]');
    const selectedLabels = root.querySelectorAll('[data-selected-option]');
    const accordionButtons = root.querySelectorAll('[data-accordion-button]');
    const mediaSwiperEl = root.querySelector('[data-product-swiper]');
    const thumbSwiperEl = root.querySelector('[data-product-thumbs]');
    const recommendationsEl = root.querySelector('[data-recommendations-swiper]');
    const buttonValues = [];

    const getSelectedValues = () => optionGroups ? [...optionGroups].map((group) => {
      const active = group.querySelector('.is-active[data-option-value]');
      return active ? active.dataset.optionValue : (group.querySelector('[data-option-value]')?.dataset.optionValue || '');
    }) : [];

    const findVariant = (selectedValues) => variants.find((variant) => selectedValues.every((value, index) => variant.options[index] === value));

    const updateVariant = () => {
      const selectedValues = getSelectedValues();
      const variant = findVariant(selectedValues) || variants[0];
      if (!variant) return;

      if (variantInput) variantInput.value = variant.id;

      if (currentPrice) currentPrice.textContent = formatMoney(variant.price);
      if (comparePrice) {
        if (variant.compare_at_price && variant.compare_at_price > variant.price) {
          comparePrice.textContent = formatMoney(variant.compare_at_price);
          comparePrice.hidden = false;
        } else {
          comparePrice.hidden = true;
        }
      }

      if (stockNote) {
        stockNote.textContent = variant.available
          ? `Hurry, only ${Math.max(1, variant.inventory_quantity || 9)} items left in stock.`
          : 'Sold out for now. Check back for the next restock.';
      }

      if (addButton) addButton.disabled = !variant.available;
      if (buyNowButton) buyNowButton.disabled = !variant.available;

      optionGroups.forEach((group, index) => {
        const selectedText = group.querySelector('.is-active[data-option-value]')?.dataset.optionValue || '';
        if (selectedLabels[index]) selectedLabels[index].textContent = selectedText;
      });
    };

    optionGroups.forEach((group) => {
      group.querySelectorAll('[data-option-value]').forEach((button) => {
        button.addEventListener('click', () => {
          group.querySelectorAll('[data-option-value]').forEach((item) => item.classList.remove('is-active'));
          button.classList.add('is-active');
          updateVariant();
        });
      });
    });

    quantityButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const step = Number(button.dataset.quantityChange || 0);
        const current = Number(quantityInput?.value || 1);
        if (quantityInput) quantityInput.value = String(Math.max(1, current + step));
      });
    });

    accordionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const accordion = button.closest('.pdp__accordion');
        if (!accordion) return;
        accordion.classList.toggle('is-open');
      });
    });

    if (mediaSwiperEl && window.Swiper) {
      const thumbs = thumbSwiperEl
        ? new Swiper(thumbSwiperEl, { slidesPerView: 4, spaceBetween: 10, watchSlidesProgress: true, breakpoints: { 0: { slidesPerView: 4 }, 720: { slidesPerView: 5 }, 1100: { slidesPerView: 6 } } })
        : null;

      const main = new Swiper(mediaSwiperEl, {
        slidesPerView: 1,
        speed: 650,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        thumbs: thumbs ? { swiper: thumbs } : undefined
      });

      root.querySelectorAll('[data-product-thumb]').forEach((thumb) => {
        thumb.addEventListener('click', () => {
          const index = Number(thumb.dataset.index || 0);
          main.slideTo(index);
        });
      });
    }

    if (recommendationsEl && window.Swiper) {
      new Swiper(recommendationsEl, {
        slidesPerView: 1.15,
        spaceBetween: 14,
        breakpoints: {
          720: { slidesPerView: 2.1, spaceBetween: 16 },
          1100: { slidesPerView: 3.2, spaceBetween: 18 }
        }
      });
    }

    if (buyNowButton && form) {
      buyNowButton.addEventListener('click', async () => {
        if (buyNowButton.disabled) return;

        const formData = new FormData(form);
        formData.set('quantity', quantityInput ? quantityInput.value : '1');
        buyNowButton.disabled = true;

        try {
          await window.Wingstone.cart.addItem(formData);
          window.location.href = '/checkout';
        } catch (error) {
          window.Wingstone.showToast('Unable to add item');
        } finally {
          buyNowButton.disabled = false;
        }
      });
    }

    updateVariant();
  });
})();
