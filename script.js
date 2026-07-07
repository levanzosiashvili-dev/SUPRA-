// ============================================
// 1. MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close the mobile menu whenever a link is clicked
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// 2. MENU TABS
// Clicking a course button (e.g. "Grill") shows
// only that course's list and hides the rest.
// ============================================
const tabButtons = document.querySelectorAll('.tab-btn');
const menuPanels = document.querySelectorAll('.menu-list');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const course = button.dataset.course; // reads data-course="grill" etc.

    // Reset all buttons and panels
    tabButtons.forEach(btn => btn.classList.remove('active'));
    menuPanels.forEach(panel => panel.classList.remove('active'));

    // Activate the one that was clicked
    button.classList.add('active');
    document.querySelector(`.menu-list[data-panel="${course}"]`).classList.add('active');
  });
});

// ============================================
// 3. CONTACT FORM
// This is a front-end-only demo: it doesn't send
// a real email yet, it just confirms the submission.
// See the note below the code for how to connect it
// to a real inbox for free.
// ============================================
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // stops the page from reloading
  formResponse.textContent = 'Thank you — we will confirm your table by phone shortly.';
  contactForm.reset();
});
