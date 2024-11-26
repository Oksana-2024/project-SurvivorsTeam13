const menuBtn = document.querySelector('.js-menu-open');
const mobileMenu = document.querySelector('.js-mobile-menu');
const closeBtn = document.querySelector('.js-mobile-menu-close');
const menuLinks = document.querySelectorAll('.js-nav-link');

window.addEventListener('DOMContentLoaded', () => {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.classList.add('no-scroll');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
});
