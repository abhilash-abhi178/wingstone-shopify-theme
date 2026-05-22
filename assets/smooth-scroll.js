/**
 * WINGSTONE — smooth-scroll.js
 * Premium scroll-motion utility handling anchor links and custom scrolling curves
 */
document.addEventListener('DOMContentLoaded', () => {
  const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const scrollToTarget = (targetElement, duration = 800) => {
    if (!targetElement) return;
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutCubic(Math.min(timeElapsed / duration, 1));
      window.scrollTo(0, startPosition + distance * run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Ensure exact final position
        window.scrollTo(0, targetPosition);
      }
    };

    requestAnimationFrame(animation);
  };

  // Intercept anchor clicks
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        scrollToTarget(target, 1000);
      }
    });
  });

  // Motion Reveal Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.05
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.motion-reveal').forEach(el => {
    revealObserver.observe(el);
  });
});
