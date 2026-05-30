(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setVisible = (el) => el.classList.add('is-visible');

  const revealSelectors = [
    '.wingstone-hero-content',
    '.wingstone-bottom-item',
    '.site-header__inner',
    '.site-footer__accordion',
    '.collection-toolbar',
    '.collection-grid__item',
    '.collection-list__item',
    '.product-card',
    '.collection-card',
    '.pdp-layout > *',
    '.pdp-option-group',
    '.pdp-buy-box',
    '.pdp-specs',
    '.pdp-main-img',
    '.cart-drawer__item',
    '.cart-drawer__footer'
  ];

  const magneticSelectors = [
    '.button',
    '.shopify-payment-button__button',
    '.wingstone-btn-primary',
    '.wingstone-btn-secondary',
    '.site-header__action',
    '.wingstone-menu-trigger',
    '.wingstone-menu-close',
    '.product-card__quick-add',
    '.cart-drawer__close',
    '.site-footer__social-icon-link',
    '.pdp-gallery-nav',
    '.collection-list-view-all-link'
  ];

  const addRevealClass = (element) => {
    if (!element) return;
    element.classList.add('js-reveal');
  };

  revealSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach(addRevealClass);
  });

  if (reducedMotion) {
    document.querySelectorAll('.js-reveal').forEach(setVisible);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });

  document.querySelectorAll('.js-reveal').forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 36, 240)}ms`;
    observer.observe(element);
  });

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const attachMagneticEffect = (element) => {
    if (!element) return;

    let frame = null;

    const reset = () => {
      if (frame) cancelAnimationFrame(frame);
      element.style.transform = '';
    };

    const move = (event) => {
      const rect = element.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left - rect.width / 2) / rect.width;
      const offsetY = (event.clientY - rect.top - rect.height / 2) / rect.height;

      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        element.style.transform = `translate3d(${clamp(offsetX * 10, -10, 10)}px, ${clamp(offsetY * 10, -10, 10)}px, 0)`;
      });
    };

    element.addEventListener('pointermove', move);
    element.addEventListener('pointerleave', reset);
    element.addEventListener('blur', reset);
  };

  magneticSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach(attachMagneticEffect);
  });

  const hero = document.querySelector('.wingstone-hero');
  if (hero) {
    const layers = {
      video: hero.querySelector('.wingstone-hero-video-wrap'),
      sweep: hero.querySelector('.wingstone-light-sweep'),
      watermark: hero.querySelector('.wingstone-watermark')
    };

    const moveHero = (event) => {
      const rect = hero.getBoundingClientRect();
      const ratioX = (event.clientX - rect.left) / rect.width - 0.5;
      const ratioY = (event.clientY - rect.top) / rect.height - 0.5;

      if (layers.video) {
        layers.video.style.transform = `translate3d(${ratioX * -12}px, ${ratioY * -10}px, 0) scale(1.05)`;
      }
      if (layers.sweep) {
        layers.sweep.style.transform = `translate3d(${ratioX * 18}px, ${ratioY * 10}px, 0)`;
      }
      if (layers.watermark) {
        layers.watermark.style.transform = `translate3d(${ratioX * -20}px, calc(-50% + ${ratioY * -16}px), 0)`;
      }
    };

    const resetHero = () => {
      if (layers.video) layers.video.style.transform = '';
      if (layers.sweep) layers.sweep.style.transform = '';
      if (layers.watermark) layers.watermark.style.transform = '';
    };

    hero.addEventListener('pointermove', moveHero);
    hero.addEventListener('pointerleave', resetHero);
  }
})();