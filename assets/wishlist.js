/**
 * WINGSTONE — wishlist.js
 * Handle wishlist toggle action using event delegation
 */
document.addEventListener('DOMContentLoaded', () => {
  const updateState = (btn, wishlisted) => {
    btn.setAttribute('aria-pressed', wishlisted ? 'true' : 'false');
    btn.classList.toggle('active', wishlisted);
    const card = btn.closest('.product-card');
    if (card) {
      const titleEl = card.querySelector('.product-card__title');
      const title = titleEl ? titleEl.textContent.trim() : 'product';
      btn.setAttribute('aria-label',
        wishlisted
          ? `Remove ${title} from wishlist`
          : `Add ${title} to wishlist`
      );
    }
  };

  const getWishlistKey = (id) => 'wl_' + id;
  const isWishlisted = (id) => localStorage.getItem(getWishlistKey(id)) !== null;

  const updateWishlistCount = () => {
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).startsWith('wl_')) {
        count++;
      }
    }
    document.querySelectorAll('[data-wishlist-count]').forEach(el => {
      if (count > 0) {
        el.textContent = count;
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });
  };

  window.updateWishlistCount = updateWishlistCount;

  // Initialize all wishlist buttons on page load
  document.querySelectorAll('[data-wishlist-toggle]').forEach(btn => {
    const id = btn.dataset.productId;
    if (id) {
      updateState(btn, isWishlisted(id));
    }
  });

  updateWishlistCount();

  // Listen to delegated clicks on wishlist buttons
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-wishlist-toggle]');
    if (!btn) return;

    e.preventDefault();
    const id = btn.dataset.productId;
    if (!id) return;
    
    const key = getWishlistKey(id);
    const next = !isWishlisted(id);

    if (next) {
      const productData = {
        id: id,
        handle: btn.dataset.productHandle,
        title: btn.dataset.productTitle,
        url: btn.dataset.productUrl,
        img: btn.dataset.productImg,
        price: btn.dataset.productPrice,
        comparePrice: btn.dataset.productComparePrice || null
      };
      localStorage.setItem(key, JSON.stringify(productData));
    } else {
      localStorage.removeItem(key);
    }

    updateState(btn, next);
    updateWishlistCount();

    /* Micro-animation */
    btn.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ], { duration: 280, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' });
  });
});
