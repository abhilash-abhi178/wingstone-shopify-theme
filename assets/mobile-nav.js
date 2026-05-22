window.Wingstone = window.Wingstone || {};

(() => {
  const drawer = document.querySelector('[data-mobile-menu-drawer]');
  const backdrop = document.querySelector('[data-mobile-menu-backdrop]');
  const nav = document.querySelector('[data-mobile-bottom-nav]');

  const open = () => {
    if (!drawer || !backdrop) return;
    drawer.hidden = false;
    backdrop.hidden = false;
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.classList.add('nav-open');
  };

  const close = () => {
    if (!drawer || !backdrop) return;
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    window.setTimeout(() => {
      drawer.hidden = true;
      backdrop.hidden = true;
    }, 220);
  };

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-open-mobile-menu]')) {
      event.preventDefault();
      open();
    }

    if (event.target.closest('[data-close-mobile-menu]') || event.target.closest('[data-mobile-menu-backdrop]')) {
      event.preventDefault();
      close();
    }

    if (event.target.closest('[data-mobile-open-search]')) {
      event.preventDefault();
      window.Wingstone.search?.open();
    }

    if (event.target.closest('[data-mobile-open-cart]')) {
      event.preventDefault();
      window.Wingstone.cart?.open();
    }
  });

  const updateActiveItem = () => {
    if (!nav) return;
    const current = window.location.pathname.replace(/\/+$/, '') || '/';
    nav.querySelectorAll('[data-mobile-link]').forEach((link) => {
      try {
        const href = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, '') || '/';
        link.classList.toggle('is-active', href === current);
      } catch (error) {
        /* ignore */
      }
    });
  };

  document.addEventListener('DOMContentLoaded', updateActiveItem);
  window.addEventListener('popstate', updateActiveItem);

  window.Wingstone.mobileNav = { open, close };
})();
