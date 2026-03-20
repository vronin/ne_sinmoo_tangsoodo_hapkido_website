// ===== VIDEO CARD — WHOLE CARD CLICKABLE =====
document.querySelectorAll('.video-card').forEach(card => {
  const mainLink = card.querySelector('.video-card-link');
  if (!mainLink) return;

  card.style.cursor = 'pointer';
  card.addEventListener('click', (e) => {
    // If the click landed on any <a> inside the card, let the browser handle it
    if (e.target.closest('a')) return;
    window.open(mainLink.href, '_blank');
  });
});

// ===== NAV MOBILE TOGGLE =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// ===== ACCORDION =====
document.querySelectorAll('.accordion-header').forEach(header => {
  // Skip headers inside a static (non-collapsible) accordion
  if (header.closest('[data-no-accordion]')) return;

  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const isActive = header.classList.contains('active');

    // Close all interactive accordion headers
    document.querySelectorAll('.accordion-header').forEach(h => {
      if (h.closest('[data-no-accordion]')) return;
      h.classList.remove('active');
      h.nextElementSibling.classList.remove('open');
    });

    // Open this one if it wasn't active
    if (!isActive) {
      header.classList.add('active');
      body.classList.add('open');
    }
  });
});

// Open first interactive accordion item by default if present
const firstHeader = document.querySelector('.accordion:not([data-no-accordion]) .accordion-header');
if (firstHeader) {
  firstHeader.classList.add('active');
  firstHeader.nextElementSibling.classList.add('open');
}
