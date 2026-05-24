/**
 * WINGSTONE MOBILE ENHANCEMENTS
 * Smooth interactions, touch gestures, and performance improvements
 * Place in assets/mobile-enhancements.js
 */

(function () {
  'use strict';

  /* ─── Utilities ─────────────────────────────────────── */
  const isMobile = () => window.innerWidth <= 640;
  const isTouch  = () => ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cartDrawer = document.querySelector('[data-cart-drawer]');

  /* ─── 1. Remove no-js class (already in theme.js) ───── */
  document.documentElement.classList.remove('no-js');

  /* ─── 2. Header scroll shrink effect ────────────────── */
  const header = document.querySelector('.site-header');
  if (header) {
    let lastScrollY = 0;
    let ticking = false;

    const onScroll = () => {
      const scrollY = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(() => {
          // Shrink header on scroll down, restore on scroll up
          if (scrollY > 80 && scrollY > lastScrollY) {
            header.classList.add('is-compact');
          } else if (scrollY < lastScrollY || scrollY < 40) {
            header.classList.remove('is-compact');
          }

          // Hide on fast scroll down (mobile), show on scroll up
          if (isMobile()) {
            if (scrollY > 200 && scrollY - lastScrollY > 4) {
              header.style.transform = 'translateY(-100%)';
            } else if (lastScrollY - scrollY > 2) {
              header.style.transform = 'translateY(0)';
            }
          }

          lastScrollY = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ─── 3. Smooth image gallery swipe (PDP) ───────────── */
  const mainImg = document.getElementById('pdpMainImgEl');
  const thumbsWrap = document.getElementById('pdpThumbs');

  if (mainImg && thumbsWrap && isTouch()) {
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    const thumbs = [...thumbsWrap.querySelectorAll('.pdp-thumb')];
    let currentIndex = 0;

    const goToThumb = (index) => {
      if (index < 0 || index >= thumbs.length) return;
      currentIndex = index;
      const thumb = thumbs[index];
      if (!thumb) return;

      thumbs.forEach((t, i) => {
        t.classList.toggle('is-active', i === index);
        t.setAttribute('aria-current', i === index ? 'true' : 'false');
      });

      if (thumb.dataset.full) {
        mainImg.style.opacity = '0.6';
        mainImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
          mainImg.src = thumb.dataset.full;
          mainImg.alt = thumb.dataset.alt || '';
          mainImg.style.opacity = '1';
          mainImg.style.transform = 'scale(1)';
        }, prefersReducedMotion ? 0 : 120);
      }
    };

    // Add smooth transition to main image
    if (!prefersReducedMotion) {
      mainImg.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    }

    // Touch swipe on main image
    const mainImgContainer = mainImg.closest('.pdp-main-img') || mainImg.parentElement;

    mainImgContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = false;
    }, { passive: true });

    mainImgContainer.addEventListener('touchmove', (e) => {
      const dx = Math.abs(e.touches[0].clientX - startX);
      const dy = Math.abs(e.touches[0].clientY - startY);
      if (dx > dy && dx > 8) {
        isDragging = true;
      }
    }, { passive: true });

    mainImgContainer.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goToThumb(Math.min(currentIndex + 1, thumbs.length - 1));
        } else {
          goToThumb(Math.max(currentIndex - 1, 0));
        }
      }
    }, { passive: true });

    // Set current index tracking when thumbs are clicked
    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => {
        currentIndex = i;
      });
    });
  }

  /* ─── 4. Size button haptic-style feedback ───────────── */
  document.querySelectorAll('.pdp-size-btn:not(.disabled)').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!prefersReducedMotion) {
        btn.animate([
          { transform: 'scale(0.94)' },
          { transform: 'scale(1.04)' },
          { transform: 'scale(1)' }
        ], { duration: 200, easing: 'ease-out' });
      }

      // Haptic feedback if supported
      if (navigator.vibrate) {
        navigator.vibrate(8);
      }
    });
  });

  /* ─── 5. Smooth quantity +/- with long-press ─────────── */
  const qtyInput = document.getElementById('qtyInput');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus  = document.getElementById('qtyPlus');

  if (qtyInput && qtyMinus && qtyPlus) {
    let pressTimer = null;
    let pressInterval = null;

    const changeQty = (delta) => {
      const current = parseInt(qtyInput.value, 10) || 1;
      const next = Math.max(1, Math.min(99, current + delta));
      qtyInput.value = next;
      qtyInput.dispatchEvent(new Event('change', { bubbles: true }));
    };

    const startPress = (btn, delta) => {
      changeQty(delta);
      pressTimer = setTimeout(() => {
        pressInterval = setInterval(() => changeQty(delta), 80);
      }, 400);
    };

    const endPress = () => {
      clearTimeout(pressTimer);
      clearInterval(pressInterval);
    };

    [
      [qtyMinus, -1],
      [qtyPlus, +1]
    ].forEach(([btn, delta]) => {
      btn.addEventListener('mousedown', () => startPress(btn, delta));
      btn.addEventListener('touchstart', () => startPress(btn, delta), { passive: true });
      btn.addEventListener('mouseup', endPress);
      btn.addEventListener('mouseleave', endPress);
      btn.addEventListener('touchend', endPress);
      btn.addEventListener('touchcancel', endPress);
    });
  }

  /* ─── 6. Cart drawer swipe-to-close on mobile ────────── */
  const cartDrawer = document.querySelector('[data-cart-drawer]');
  if (cartDrawer && isTouch()) {
    let touchStartX = 0;

    cartDrawer.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    cartDrawer.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (diff > 80) {
        // Swipe right to close
        const closeBtn = cartDrawer.querySelector('[data-cart-drawer-close]');
        if (closeBtn) closeBtn.click();
      }
    }, { passive: true });
  }

  /* ─── 7. Scroll-based reveal for sections ────────────── */
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealTargets = document.querySelectorAll(
      '.product-card, .feature-item, .section-title, .eyebrow, .hero__stat'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        entry.target.animate([
          { opacity: 0, transform: 'translateY(16px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], {
          duration: 480,
          delay: (i % 4) * 60,
          easing: 'cubic-bezier(0.2, 0, 0, 1)',
          fill: 'forwards'
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

  /* ─── 8. Product card image lazyload fade ────────────── */
  if (!prefersReducedMotion) {
    document.querySelectorAll('.product-card img[loading="lazy"]').forEach((img) => {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.35s ease';

      if (img.complete) {
        img.style.opacity = '1';
      } else {
        img.addEventListener('load', () => {
          img.style.opacity = '1';
        });
      }
    });
  }

  /* ─── 9. Sticky bar add-to-cart – visual feedback ────── */
  const mobileAddBtn = document.querySelector('[data-mobile-add-to-cart]');
  const mainAddBtn   = document.getElementById('addToCartBtn');

  if (mobileAddBtn && mainAddBtn) {
    mobileAddBtn.addEventListener('click', () => {
      mainAddBtn.click();

      if (!prefersReducedMotion) {
        mobileAddBtn.animate([
          { transform: 'scale(0.96)' },
          { transform: 'scale(1)' }
        ], { duration: 180, easing: 'ease-out' });
      }
    });
  }

  /* ─── 10. Prevent body scroll when overlays open ─────── */
  const lockBodyScroll = (lock) => {
    if (isMobile()) {
      document.body.style.removeProperty('overflow');
      document.body.removeEventListener('touchmove', preventDefault);
      return;
    }

    document.body.style.overflow = lock ? 'hidden' : '';
    // iOS fix: also prevent touchmove
    if (lock) {
      document.body.addEventListener('touchmove', preventDefault, { passive: false });
    } else {
      document.body.removeEventListener('touchmove', preventDefault);
    }
  };

  const preventDefault = (e) => { e.preventDefault(); };

  // Watch for cart drawer
  const observer = new MutationObserver(() => {
    const drawer = document.querySelector('[data-cart-drawer]');
    if (drawer) {
      lockBodyScroll(drawer.classList.contains('is-open'));
    }
  });

  if (cartDrawer) {
    lockBodyScroll(cartDrawer.classList.contains('is-open'));
    observer.observe(cartDrawer, { attributes: true, attributeFilter: ['class'] });
  }

  window.addEventListener('pageshow', () => lockBodyScroll(false));

  /* ─── 11. Smooth anchor link scrolling ───────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();

      const headerH = header ? header.offsetHeight + 16 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;

      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });

  /* ─── 12. Keyboard nav for color cards ───────────────── */
  document.querySelectorAll('.pdp-color-grid').forEach((grid) => {
    const cards = [...grid.querySelectorAll('.pdp-color-card')];
    cards.forEach((card, i) => {
      card.setAttribute('tabindex', '0');
      card.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          cards[(i + 1) % cards.length].focus();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          cards[(i - 1 + cards.length) % cards.length].focus();
        }
      });
    });
  });

  /* ─── 13. Size chart table – make scrollable on mobile ── */
  document.querySelectorAll('.pdp-sc-table').forEach((table) => {
    if (!table.closest('.pdp-sc-table-wrap')) {
      const wrap = document.createElement('div');
      wrap.className = 'pdp-sc-table-wrap';
      wrap.style.cssText = 'overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:8px;';
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    }
  });

  /* ─── 14. Active state for mobile touch links ─────────── */
  if (isTouch()) {
    document.querySelectorAll('.product-card, .pdp-color-card, .pdp-size-btn').forEach((el) => {
      el.addEventListener('touchstart', () => {
        el.classList.add('touch-active');
      }, { passive: true });

      el.addEventListener('touchend', () => {
        setTimeout(() => el.classList.remove('touch-active'), 200);
      }, { passive: true });

      el.addEventListener('touchcancel', () => {
        el.classList.remove('touch-active');
      }, { passive: true });
    });
  }

  /* ─── 15. Fix footer brand text rendering ────────────── */
  // Force footer brand to reflow if it renders incorrectly
  const footerBrand = document.querySelector('.site-footer__brand');
  if (footerBrand) {
    footerBrand.style.display = 'block';
    footerBrand.style.whiteSpace = 'nowrap';
    footerBrand.style.overflow = 'hidden';
    footerBrand.style.textOverflow = 'ellipsis';
    footerBrand.style.wordBreak = 'normal';
    footerBrand.style.letterSpacing = '0.12em';
  }

})();
