/* ========================================
   WINGSTONE MOBILE MENU
======================================== */

document.addEventListener("DOMContentLoaded", () => {

  const trigger = document.querySelector(".wingstone-menu-trigger");
  const drawer = document.querySelector(".wingstone-mobile-menu");
  const overlay = document.querySelector(".wingstone-menu-overlay");
  const closeBtn = document.querySelector(".wingstone-menu-close");

  if (!trigger || !drawer || !overlay) return;

  const closeMenu = () => {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  trigger.addEventListener("click", () => {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  overlay.addEventListener("click", closeMenu);

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("scroll", () => {
    if (drawer.classList.contains("active")) {
      closeMenu();
    }
  }, { passive: true });

  document.addEventListener("click", (event) => {
    const cartToggle = event.target.closest("[data-cart-drawer-toggle]");
    const searchToggle = event.target.closest("[data-search-toggle], [data-search-open], [href*='/search']");

    if (cartToggle || searchToggle) {
      closeMenu();
    }
  }, true);

});