/* hero-visual.js
   Lightweight dragger for the hero visual section preview.
   - Allows dragging the image to change X/Y offset (percent of container).
   - Updates the inline transform so the preview reflects the change.
   - Also updates visible range inputs (if the customizer sidebar exists) so merchants
     can persist the values using the theme editor sliders.
*/

(function () {
  if (typeof window === 'undefined') return;

  function initDragger(container) {
    var wrap = container.querySelector('.hero-visual__wrap');
    var img = container.querySelector('.hero-visual__image');
    if (!wrap || !img) return;

    var rect = wrap.getBoundingClientRect();
    var start = null;
    var baseX = 0, baseY = 0;

    function toPercent(dx, dy) {
      var px = (dx / rect.width) * 100;
      var py = (dy / rect.height) * 100;
      return { x: px, y: py };
    }

    function pointerDown(e) {
      e.preventDefault();
      rect = wrap.getBoundingClientRect();
      start = { x: e.clientX || (e.touches && e.touches[0].clientX), y: e.clientY || (e.touches && e.touches[0].clientY) };

      // read current transform (assumes translate(X%, Y%))
      var style = window.getComputedStyle(wrap);
      var m = style.transform || '';
      baseX = 0; baseY = 0;
      var translateMatch = m.match(/translate\(([-0-9.]+)%?,\s*([-0-9.]+)%?\)/);
      if (translateMatch) {
        baseX = parseFloat(translateMatch[1]);
        baseY = parseFloat(translateMatch[2]);
      }

      window.addEventListener('pointermove', pointerMove);
      window.addEventListener('pointerup', pointerUp);
    }

    function pointerMove(e) {
      if (!start) return;
      var cx = e.clientX || (e.touches && e.touches[0].clientX);
      var cy = e.clientY || (e.touches && e.touches[0].clientY);
      var dx = cx - start.x;
      var dy = cy - start.y;
      var p = toPercent(dx, dy);

      var nx = baseX + p.x;
      var ny = baseY + p.y;

      // clamp to reasonable values
      nx = Math.max(-50, Math.min(50, nx));
      ny = Math.max(-50, Math.min(50, ny));

      wrap.style.transform = 'translate(' + nx + '%, ' + ny + '%)';
      wrap.setAttribute('data-x', nx.toFixed(2));
      wrap.setAttribute('data-y', ny.toFixed(2));

      // if there are range inputs for this section in the parent (customizer), update them
      try {
        var sectionId = wrap.getAttribute('data-section-id');
        if (sectionId && window.parent && window.parent.document) {
          // range inputs live in the Theme Editor iframe's parent document; try to find them
          var editor = window.parent.document;
          var xInput = editor.querySelector('input[name="section_' + sectionId + '[x_offset]"]') || editor.querySelector('input[id*="' + sectionId + '"][name*="x_offset"]');
          var yInput = editor.querySelector('input[name="section_' + sectionId + '[y_offset]"]') || editor.querySelector('input[id*="' + sectionId + '"][name*="y_offset"]');
          if (xInput) xInput.value = nx;
          if (yInput) yInput.value = ny;
        }
      } catch (err) {
        // cross-origin parent may block access — ignore silently
      }
    }

    function pointerUp() {
      start = null;
      window.removeEventListener('pointermove', pointerMove);
      window.removeEventListener('pointerup', pointerUp);
    }

    img.style.touchAction = 'none';
    img.addEventListener('pointerdown', pointerDown);
  }

    /* Image dragger for images not inside slides (wrap mode) */

    /* Drag handler for images inside slides (visual-only, does not persist) */
    function initImageDragFor(img) {
      if (!img) return;
      var start = null;
      var baseX = 0, baseY = 0;
      var rect = img.getBoundingClientRect();

      function toPercent(dx, dy) {
        var px = (dx / rect.width) * 100;
        var py = (dy / rect.height) * 100;
        return { x: px, y: py };
      }

      function pointerDown(e) {
        e.preventDefault();
        rect = img.getBoundingClientRect();
        start = { x: e.clientX || (e.touches && e.touches[0].clientX), y: e.clientY || (e.touches && e.touches[0].clientY) };
        var m = img.style.transform || '';
        var match = m.match(/translate\(([-0-9.]+)%?,\s*([-0-9.]+)%?\)/);
        baseX = match ? parseFloat(match[1]) : 0;
        baseY = match ? parseFloat(match[2]) : 0;
        window.addEventListener('pointermove', pointerMove);
        window.addEventListener('pointerup', pointerUp);
      }

      function pointerMove(e) {
        if (!start) return;
        var cx = e.clientX || (e.touches && e.touches[0].clientX);
        var cy = e.clientY || (e.touches && e.touches[0].clientY);
        var dx = cx - start.x;
        var dy = cy - start.y;
        var p = toPercent(dx, dy);
        var nx = baseX + p.x;
        var ny = baseY + p.y;
        nx = Math.max(-100, Math.min(100, nx));
        ny = Math.max(-100, Math.min(100, ny));
        img.style.transform = 'translate(' + nx + '%, ' + ny + '%)';
      }

      function pointerUp() {
        start = null;
        window.removeEventListener('pointermove', pointerMove);
        window.removeEventListener('pointerup', pointerUp);
      }

      img.style.touchAction = 'none';
      img.addEventListener('pointerdown', pointerDown);
    }

    /* Simple carousel for .hero-visual__slides */
    function initCarousel(container) {
      var slidesEl = container;
      var slides = Array.prototype.slice.call(slidesEl.querySelectorAll('.hero-visual__slide'));
      if (!slides.length) return;
      var prev = slidesEl.querySelector('.hero-visual__prev');
      var next = slidesEl.querySelector('.hero-visual__next');
      var current = 0;
      var autoplay = true;
      var autoplayMs = 4000;
      var autoplayId = null;

      function show(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach(function (s, i) {
          s.style.transform = 'translateX(' + ((i - current) * 100) + '%)';
          s.setAttribute('aria-hidden', i === current ? 'false' : 'true');
        });
      }

      function nextSlide() { show(current + 1); }
      function prevSlide() { show(current - 1); }

      if (next) next.addEventListener('click', function (e) { e.preventDefault(); nextSlide(); resetAutoplay(); });
      if (prev) prev.addEventListener('click', function (e) { e.preventDefault(); prevSlide(); resetAutoplay(); });

      // Init positions
      slides.forEach(function (s, i) { s.style.position = 'absolute'; s.style.left = 0; s.style.top = 0; s.style.width = '100%'; });
      slidesEl.style.position = 'relative';
      slidesEl.style.overflow = 'hidden';
      show(0);

      // enable dragging of images inside slides (visual only)
      slides.forEach(function (s) { var img = s.querySelector('.hero-visual__image'); if (img) initImageDragFor(img); });

      function startAutoplay() { if (!autoplay) return; autoplayId = setInterval(nextSlide, autoplayMs); }
      function stopAutoplay() { if (autoplayId) { clearInterval(autoplayId); autoplayId = null; } }
      function resetAutoplay() { stopAutoplay(); startAutoplay(); }

      slidesEl.addEventListener('pointerenter', stopAutoplay);
      slidesEl.addEventListener('pointerleave', startAutoplay);
      startAutoplay();
    }

    function initAll() {
      // init single-image draggers
      var wraps = document.querySelectorAll('.hero-visual__wrap');
      wraps.forEach(function (c) { initDragger(c); });

      // init carousels
      var carousels = document.querySelectorAll('.hero-visual__slides');
      carousels.forEach(function (c) { initCarousel(c); });
    }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initAll();
  } else {
    document.addEventListener('DOMContentLoaded', initAll);
  }

})();
