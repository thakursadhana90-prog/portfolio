console.log('script.js loaded');
document.addEventListener('DOMContentLoaded', () => document.body.classList.add('debug-loaded'));

// mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
navToggle && navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth',block:'start'});
      navList.classList.remove('open');
    }
  })
});

// simple contact form handler
const form = document.getElementById('contact-form');
form && form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  alert(`Thanks, ${name || 'there'}! I will contact you at ${email || 'your email'}.`);
  form.reset();
});
