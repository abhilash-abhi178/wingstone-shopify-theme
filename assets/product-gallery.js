/**
 * WINGSTONE — product-gallery.js
 * Interactive product gallery: thumbnail switching, active states, and mobile slider sync
 */
class ProductGallery {
  constructor(container) {
    this.container = container;
    this.mainImage = container.querySelector('[data-gallery-main]');
    this.thumbs = container.querySelectorAll('[data-gallery-thumb]');
    
    this.init();
  }

  init() {
    if (!this.mainImage || this.thumbs.length === 0) return;

    this.thumbs.forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchImage(thumb);
      });

      // Keyboard support
      thumb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.switchImage(thumb);
        }
      });
    });
  }

  switchImage(selectedThumb) {
    // Reset active states
    this.thumbs.forEach(t => {
      t.classList.remove('is-active');
      t.setAttribute('aria-current', 'false');
    });

    // Set new active
    selectedThumb.classList.add('is-active');
    selectedThumb.setAttribute('aria-current', 'true');

    // Get image attributes from thumbnail
    const newSrc = selectedThumb.dataset.masterSrc;
    const newWidth = selectedThumb.dataset.masterWidth;
    const newHeight = selectedThumb.dataset.masterHeight;
    const newAlt = selectedThumb.querySelector('img')?.alt || '';

    if (newSrc && this.mainImage) {
      // Fade transition effect
      this.mainImage.style.opacity = '0';
      
      setTimeout(() => {
        this.mainImage.src = newSrc;
        if (newWidth) this.mainImage.setAttribute('width', newWidth);
        if (newHeight) this.mainImage.setAttribute('height', newHeight);
        this.mainImage.alt = newAlt;
        this.mainImage.style.opacity = '1';
      }, 150);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const galleries = document.querySelectorAll('[data-product-gallery]');
  galleries.forEach(gallery => {
    new ProductGallery(gallery);
  });
});
