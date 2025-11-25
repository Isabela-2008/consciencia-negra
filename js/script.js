// Header nav current link highlight (works on file URLs too)
(function(){
  const links = document.querySelectorAll('.site-nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    if (a.getAttribute('href') === current) {
      a.setAttribute('aria-current','page');
    }
  });
})();

// Simple mobile nav toggle (if you later add a button)
(function(){
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded);
  });
})();

// Image lazy-fade (enhance visuals)
document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  imgs.forEach(img => {
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.style.opacity = '0';
      img.style.transition = 'opacity .6s ease';
      img.addEventListener('load', () => { img.style.opacity = '1'; });
    }
  });
});
