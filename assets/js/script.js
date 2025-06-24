const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  });
}

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

window.hf.components.menu.init('.menu', {
  menuItemSelector: 'li a',
  menuItemWrapperSelector: 'li',
  subLinksWrapperSelector: 'ul',
  buttonBackInject: true,
  buttonBackHtml: '<button class="button link-button back">Назад</button>',
});

const steps = new Swiper('.steps .swiper', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '"><span class="num">' +
        0 +
        (index + 1) +
        "</span><span class='dot'></span></span>"
      );
    },
  },
});

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
