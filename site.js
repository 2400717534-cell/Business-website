document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar-collapse');
  document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => link.addEventListener('click', () => {
    if (nav?.classList.contains('show') && window.bootstrap) window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
  }));
  const hero = document.querySelector('.hero');
  const video = document.querySelector('.hero-video');
  if (video && hero) {
    video.addEventListener('error', () => hero.classList.add('hero-video-fallback'));
    video.addEventListener('stalled', () => hero.classList.add('hero-video-fallback'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(max-width: 640px)').matches) {
      video.pause();
      hero.classList.add('hero-video-fallback');
    }
  }
  const revealItems = document.querySelectorAll('.section, .service, .product, .photo, .featured-work');
  revealItems.forEach((item) => item.classList.add('reveal'));
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reveal-ready');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  }
});
