window.Wingstone = window.Wingstone || {};

(() => {
  const overlay = document.querySelector('[data-search-overlay]');
  const backdrop = document.querySelector('[data-search-backdrop]');
  const input = document.querySelector('[data-search-input]');
  const results = document.querySelector('[data-search-results]');
  const form = document.querySelector('[data-search-form]');

  const open = () => {
    if (!overlay || !backdrop) return;
    overlay.hidden = false;
    backdrop.hidden = false;
    overlay.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.classList.add('search-open');
    if (input) input.focus();
  };

  const close = () => {
    if (!overlay || !backdrop) return;
    overlay.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.classList.remove('search-open');
    window.setTimeout(() => {
      overlay.hidden = true;
      backdrop.hidden = true;
    }, 220);
  };

  const renderResults = (items) => {
    if (!results) return;

    results.innerHTML = items.length
      ? items.map((item) => `
        <a class="search-overlay__result" href="${item.url}">
          ${item.image ? `<img src="${item.image}" alt="${item.title.replace(/"/g, '&quot;')}">` : ''}
          <strong>${item.title}</strong>
          <span>${item.vendor || 'Wingstone'}</span>
        </a>
      `).join('')
      : '<p class="search-overlay__hint">Start typing to find products, collections, and stories.</p>';
  };

  const search = async (query) => {
    if (!query || query.trim().length < 2) {
      renderResults([]);
      return;
    }

    try {
      const response = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=8&section_id=predictive-search`);
      const payload = await response.json();
      const items = (payload.resources?.results || []).map((item) => ({
        title: item.title,
        url: item.url,
        image: item.featured_image?.url,
        vendor: item.vendor
      }));
      renderResults(items);
    } catch (error) {
      renderResults([]);
    }
  };

  let timer;
  if (input) {
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => search(input.value), 180);
    });
  }

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-open-search]')) {
      event.preventDefault();
      open();
    }

    if (event.target.closest('[data-close-search]') || event.target.closest('[data-search-backdrop]')) {
      event.preventDefault();
      close();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay?.classList.contains('is-open')) close();
  });

  if (form) {
    form.addEventListener('submit', (event) => {
      if (!input || input.value.trim().length < 2) event.preventDefault();
    });
  }

  window.Wingstone.search = { open, close };
  document.addEventListener('DOMContentLoaded', () => renderResults([]));
})();
