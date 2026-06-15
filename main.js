// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile burger menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Contact form intercept (works with Formspree but also shows success state locally)
const form = document.getElementById('contactForm');
const successDiv = document.getElementById('formSuccess');
if (form) {
  form.addEventListener('submit', async (e) => {
    const action = form.getAttribute('action');
    // If Formspree ID not set, show success demo
    if (!action || action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      form.style.display = 'none';
      if (successDiv) successDiv.style.display = 'block';
      return;
    }
    // Otherwise let Formspree handle it
  });
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .prod-item, .value-card, .contact-card, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
