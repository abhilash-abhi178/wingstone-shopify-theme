function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      "summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"
    )
  );
}

function debounce(callback, wait = 300) {
  let timeout;

  return (...args) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => callback(...args), wait);
  };
}

const trapFocusHandlers = {};

function trapFocus(container, elementToFocus = container) {
  const elements = getFocusableElements(container);
  const first = elements[0];
  const last = elements[elements.length - 1];

  removeTrapFocus();

  trapFocusHandlers.focusin = (event) => {
    if (event.target !== container && event.target !== last && event.target !== first) return;

    document.addEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.focusout = function () {
    document.removeEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.keydown = function (event) {
    if (event.code.toUpperCase() !== 'TAB') return;

    if (event.target === last && !event.shiftKey) {
      event.preventDefault();
      first.focus();
    }

    if ((event.target === container || event.target === first) && event.shiftKey) {
      event.preventDefault();
      last.focus();
    }
  };

  document.addEventListener('focusout', trapFocusHandlers.focusout);
  document.addEventListener('focusin', trapFocusHandlers.focusin);

  elementToFocus.focus();

  if (
    elementToFocus.tagName === 'INPUT' &&
    ['search', 'text', 'email', 'url'].includes(elementToFocus.type) &&
    elementToFocus.value
  ) {
    elementToFocus.setSelectionRange(0, elementToFocus.value.length);
  }
}

function removeTrapFocus(elementToFocus = null) {
  document.removeEventListener('focusin', trapFocusHandlers.focusin);
  document.removeEventListener('focusout', trapFocusHandlers.focusout);
  document.removeEventListener('keydown', trapFocusHandlers.keydown);

  if (elementToFocus) elementToFocus.focus();
}

function onKeyUpEscape(event) {
  if (event.code.toUpperCase() !== 'ESCAPE') return;

  const openDetailsElement = event.target.closest('details[open]');
  if (!openDetailsElement) return;

  const summaryElement = openDetailsElement.querySelector('summary');
  openDetailsElement.removeAttribute('open');
  summaryElement.setAttribute('aria-expanded', false);
  summaryElement.focus();
}

/* ========================================
   WINGSTONE MOBILE MENU
======================================== */

document.addEventListener("DOMContentLoaded", () => {

  const trigger = document.querySelector(".wingstone-menu-trigger");
  const header = document.querySelector(".site-header");
  const template = document.querySelector("[data-mobile-menu-template]");
  const mobileQuery = window.matchMedia("(max-width: 989px)");
  let drawer = null;
  let overlay = null;
  let closeBtn = null;
  let cleanupHandlers = [];

  if (!trigger || !header || !template) return;

  const setMenuScrollLock = (lock) => {
    document.body.style.overflow = lock ? 'hidden' : '';
  };

  const closeMenu = () => {
    if (!drawer || !overlay) return;
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    trigger.setAttribute("aria-expanded", "false");
    setMenuScrollLock(false);
  };

  const openMenu = () => {
    if (!drawer || !overlay || !mobileQuery.matches) return;
    drawer.classList.add("active");
    overlay.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    trigger.setAttribute("aria-expanded", "true");
    setMenuScrollLock(true);
  };

  const addBoundListener = (target, eventName, handler, options) => {
    target.addEventListener(eventName, handler, options);
    cleanupHandlers.push(() => target.removeEventListener(eventName, handler, options));
  };

  const bindMobileMenu = () => {
    addBoundListener(trigger, "click", openMenu);

    if (closeBtn) {
      addBoundListener(closeBtn, "click", closeMenu);
    }

    addBoundListener(overlay, "click", closeMenu);

    drawer.querySelectorAll("a").forEach((link) => {
      addBoundListener(link, "click", closeMenu);
    });

    addBoundListener(window, "scroll", () => {
      if (drawer && drawer.classList.contains("active")) {
        closeMenu();
      }
    }, { passive: true });

    addBoundListener(document, "click", (event) => {
      if (!drawer) return;
      const cartToggle = event.target.closest("[data-cart-drawer-toggle]");
      const searchToggle = event.target.closest("[data-search-toggle], [data-search-open], [href*='/search']");

      if (cartToggle || searchToggle) {
        closeMenu();
      }
    }, true);
  };

  const unmountMobileMenu = () => {
    closeMenu();
    cleanupHandlers.forEach((cleanup) => cleanup());
    cleanupHandlers = [];
    if (drawer) drawer.remove();
    if (overlay) overlay.remove();
    drawer = null;
    overlay = null;
    closeBtn = null;
  };

  const mountMobileMenu = () => {
    if (drawer || !mobileQuery.matches) return;
    header.appendChild(template.content.cloneNode(true));
    drawer = header.querySelector(".wingstone-mobile-menu");
    overlay = header.querySelector(".wingstone-menu-overlay");
    closeBtn = header.querySelector(".wingstone-menu-close");

    if (!drawer || !overlay) {
      unmountMobileMenu();
      return;
    }

    drawer.classList.remove("active");
    overlay.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    trigger.setAttribute("aria-expanded", "false");
    bindMobileMenu();
  };

  const syncMenuMode = () => {
    const isMobile = mobileQuery.matches;
    trigger.hidden = !isMobile;
    if (isMobile) {
      mountMobileMenu();
    } else {
      unmountMobileMenu();
      setMenuScrollLock(false);
    }
  };

  mobileQuery.addEventListener('change', syncMenuMode);
  syncMenuMode();

});

