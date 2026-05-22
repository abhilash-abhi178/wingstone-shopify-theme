document.addEventListener('DOMContentLoaded', () => {
  if (!window.gsap) return;

  gsap.registerPlugin(window.ScrollTrigger);

  document.querySelectorAll('[data-parallax-layer]').forEach((layer) => {
    gsap.to(layer, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: layer.closest('[data-parallax-root]') || layer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  document.querySelectorAll('[data-split-fade]').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 24,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 82%'
      }
    });
  });
});
