const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
});
window.hf.components.tabs.init('.tabs1', {
  openFirst: true,
});

window.hf.components.accordion.init('.accordion1', {
  closeOthers: true,
  openFirst: true,
});

window.hf.components.accordion.init('.accordion2', {
  closeOthers: true,
  openFirst: true,
});

window.hf.components.tabs.init('.packages', {
  openFirst: true,
});

window.hf.components.menu.init('.menu');

const partners = new Swiper('.partners .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 32,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});
