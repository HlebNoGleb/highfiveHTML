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

window.hf.components.menu.init('.header-nav');

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