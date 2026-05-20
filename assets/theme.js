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

  // Set staggered delay for items
  const drawerItems = cartDrawer.querySelectorAll('.cart-drawer__item');
  drawerItems.forEach((item, index) => {
    item.style.setProperty('--item-delay', `${index * 60}ms`);
  });

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

const cartForms = [...document.querySelectorAll('.product-form, .product-card__form')];

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

      await openCartDrawer();
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
});

document.querySelectorAll('.product-form').forEach((form) => {
  const variantData = form.querySelector('[data-product-variants]');
  const idInput = form.querySelector('input[name="id"]');
  const submit = form.querySelector('button[type="submit"]');
  if (!variantData || !idInput || !submit) return;

  const variants = JSON.parse(variantData.textContent);
  const selects = [...form.querySelectorAll('[data-option-index]')];

  // Swatch elements
  const swatchGroups = form.querySelectorAll('.swatch-group');
  
  // Find thumbnails if on product page
  const gallery = document.querySelector('[data-product-gallery]');
  const thumbs = gallery ? [...gallery.querySelectorAll('[data-product-gallery-thumb]')] : [];

  const updateVariant = () => {
    const selected = selects.map((select) => select.value);
    const variant = variants.find((item) => selected.every((value, index) => item.options[index] === value));
    if (!variant) return;

    idInput.value = variant.id;
    submit.disabled = !variant.available;
    submit.textContent = variant.available ? 'Add to cart' : 'Sold out';

    // Synchronize gallery image if matching variant image exists
    if (variant.featured_image && thumbs.length > 0) {
      const cleanUrl = (url) => {
        if (!url) return '';
        // Extract base filename before size parameters like _180x, _120x120, _1400x
        return url.split('?')[0].split('/').pop().replace(/_(?:[0-9]+x[0-9]*|[0-9]*x[0-9]+)\.[a-zA-Z]+$/, '').split('_')[0];
      };
      
      const variantBase = cleanUrl(variant.featured_image.src);
      const matchingThumb = thumbs.find(thumb => {
        const thumbFull = thumb.dataset.full;
        return thumbFull && cleanUrl(thumbFull) === variantBase;
      });

      if (matchingThumb) {
        // Toggle active thumbnail styling by simulating a click
        matchingThumb.click();
      }
    }
  };

  // Helper to check availability of a specific option value combination
  const isCombinationAvailable = (optionIndex, value) => {
    const currentSelected = selects.map((select) => select.value);
    currentSelected[optionIndex] = value;
    
    return variants.some((variant) => {
      if (variant.options[optionIndex] !== value) return false;
      
      for (let i = 0; i < selects.length; i++) {
        if (i === optionIndex) continue;
        if (variant.options[i] !== currentSelected[i]) return false;
      }
      return variant.available;
    });
  };

  const updateSwatchAvailability = () => {
    swatchGroups.forEach((group) => {
      const optionIndex = parseInt(group.dataset.optionIndex, 10) - 1;
      const buttons = group.querySelectorAll('[data-swatch-value]');
      
      buttons.forEach((btn) => {
        const val = btn.dataset.swatchValue;
        const available = isCombinationAvailable(optionIndex, val);
        
        if (available) {
          btn.classList.remove('is-out-of-stock');
          btn.removeAttribute('disabled');
          btn.disabled = false;
          btn.setAttribute('aria-disabled', 'false');
        } else {
          btn.classList.add('is-out-of-stock');
          try { btn.disabled = true; } catch (e) {}
          btn.setAttribute('aria-disabled', 'true');
        }
      });
    });
  };

  swatchGroups.forEach((group) => {
    const optionIndex = parseInt(group.dataset.optionIndex, 10);
    const select = form.querySelector(`select[data-option-index="${optionIndex}"]`);
    const labelVal = group.querySelector('[data-selected-value-label]');
    const buttons = group.querySelectorAll('[data-swatch-value]');
    
    if (!select) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        // Ignore clicks on out-of-stock swatches
        if (btn.classList.contains('is-out-of-stock') || btn.getAttribute('aria-disabled') === 'true' || btn.disabled) {
          e.preventDefault();
          return;
        }

        const val = btn.dataset.swatchValue;

        select.value = val;
        select.dispatchEvent(new Event('change'));

        buttons.forEach((b) => b.classList.toggle('is-active', b === btn));
        if (labelVal) {
          labelVal.textContent = val;
        }

        updateSwatchAvailability();
      });
    });
  });

  selects.forEach((select) => select.addEventListener('change', updateVariant));

  // Initialize availability styles on load
  updateSwatchAvailability();
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

// Stagger delay based on index in their parent grid
const gridContainers = document.querySelectorAll('.grid, .featured-products__grid, .feature-band__grid');
gridContainers.forEach(container => {
  const children = container.querySelectorAll('.product-card, .feature-item');
  children.forEach((child, index) => {
    child.style.setProperty('--reveal-delay', `${index * 80}ms`);
  });
});

const revealItems = document.querySelectorAll('.section, .product-card, .feature-item, .newsletter form, .site-footer__inner');

if ('IntersectionObserver' in window) {
  revealItems.forEach((item) => item.classList.add('js-reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
}

// Scroll progress bar and site header scroll state
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.querySelector('.scroll-progress-bar');
  const siteHeader = document.querySelector('.site-header');

  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Update scroll progress
    if (progressBar && docHeight > 0) {
      const scrollPct = Math.min(1, Math.max(0, scrollTop / docHeight));
      progressBar.style.transform = `scaleX(${scrollPct})`;
    }

    // Toggle header scroll state
    if (siteHeader) {
      if (scrollTop > 24) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run once on load
});

// Interactive floating particles canvas
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('ambient-particles');
  if (!canvas || prefersReducedMotion) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  // Track colors dynamically
  let accentColor = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim() || '#2a5a5b';
  let inkColor = getComputedStyle(document.documentElement).getPropertyValue('--color-ink').trim() || '#111';

  // Listen to resize
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(60, Math.floor((width * height) / 25000));
  
  class Particle {
    constructor() {
      this.reset();
      // start at random position
      this.x = Math.random() * width;
      this.y = Math.random() * height;
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 50; // spawn offscreen bottom
      this.size = Math.random() * 3 + 1.2;
      this.speedX = Math.random() * 0.4 - 0.2;
      this.speedY = -(Math.random() * 0.5 + 0.15); // move upwards
      this.opacity = Math.random() * 0.35 + 0.1;
      this.color = Math.random() > 0.4 ? accentColor : inkColor;
    }

    update(mouseX, mouseY) {
      this.x += this.speedX;
      this.y += this.speedY;

      // Mouse interactive push
      if (mouseX !== null && mouseY !== null) {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          this.x += (dx / dist) * force * 1.8;
          this.y += (dy / dist) * force * 1.8;
        }
      }

      // Reset if out of bounds or completely faded
      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
    }
  }

  // Init particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Mouse coords tracking
  let mouse = { x: null, y: null };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update(mouse.x, mouse.y);
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
});

// 3D Card Tilt Effect
document.addEventListener('DOMContentLoaded', () => {
  if (prefersReducedMotion) return;

  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within card
      const y = e.clientY - rect.top;  // y position within card

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate degrees of rotation (-8 to 8 deg max)
      const rotateY = ((x - centerX) / centerX) * 8;
      const rotateX = -((y - centerY) / centerY) * 8;

      card.style.setProperty('--tilt-x', `${rotateX}deg`);
      card.style.setProperty('--tilt-y', `${rotateY}deg`);
    });

    card.addEventListener('mouseleave', () => {
      // Smoothly reset
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
});

// Magnetic Header Navigation Links & Actions
document.addEventListener('DOMContentLoaded', () => {
  if (prefersReducedMotion) return;

  const magneticElements = document.querySelectorAll('.site-nav a, .site-header__action');

  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Magnetic pull (max 8px movement)
      const pullX = x * 0.35;
      const pullY = y * 0.35;

      el.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.04)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
});
