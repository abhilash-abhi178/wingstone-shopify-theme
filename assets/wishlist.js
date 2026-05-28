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
  const isWishlisted = (id) => localStorage.getItem(getWishlistKey(id)) === '1';

  // Initialize all wishlist buttons on page load
  document.querySelectorAll('[data-wishlist-toggle]').forEach(btn => {
    const id = btn.dataset.productId;
    if (id) {
      updateState(btn, isWishlisted(id));
    }
  });

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
      localStorage.setItem(key, '1');
    } else {
      localStorage.removeItem(key);
    }

    updateState(btn, next);

    /* Micro-animation */
    btn.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ], { duration: 280, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' });
  });
});
