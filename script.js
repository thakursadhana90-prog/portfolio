const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
const form = document.getElementById('contact-form');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

navToggle && navToggle.addEventListener('click', () => {
  navList?.classList.toggle('open');
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navList?.classList.remove('open');
    }
  });
});

form && form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  alert(`Thanks, ${name || 'there'}! I will contact you at ${email || 'your email'}.`);
  form.reset();
});
