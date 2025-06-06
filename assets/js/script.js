// const swiper = new Swiper('.swiper', {
//   loop: true,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     renderBullet: function (index, className) {
//       return (
//         '<span class="' +
//         className +
//         '"><span class="num">' +
//         0 +
//         (index + 1) +
//         "</span><span class='dot'></span></span>"
//       );
//     },
//   },
// });

// window.hf.components.tabs.init('.tabs1', {
//   openFirst: true,
// });

// window.hf.components.accordion.init('.accordion1', {
//   closeOthers: true,
//   openFirst: true,
// });

// window.hf.components.accordion.init('.accordion2', {
//   closeOthers: true,
//   openFirst: true,
// });

// window.hf.components.tabs.init('.packages', {
//   openFirst: true,
// });

// BURGER
const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const wrapMenu = document.querySelector('.wrap-menu');
burger.addEventListener('click', () => {
  burger.classList.contains('active')
    ? burger.classList.toggle('not-active')
    : burger.classList.toggle('active');
  wrapMenu.classList.toggle('open');
  body.classList.toggle('is-lock');
  wrapSubmenu.classList.remove('open');
  listSubmenu.classList.remove('open');
});
// MENU

const itemsMenu = document.querySelectorAll('.menu > li > p');
const itemsSubmenu = document.querySelectorAll('.submenu > p');
const itemsListSubmenu = document.querySelectorAll('.submenu > ul > li > p');
const itemsTitleListSubmenu = document.querySelectorAll('.submenu div > p');
const wrapSubmenu = document.querySelector('.wrap-submenu');
const listSubmenu = document.querySelector('.submenu div');

itemsMenu.forEach((item, i) => {
  item.addEventListener('click', () => {
    item.nextElementSibling
      ? item.nextElementSibling.classList.add('open')
      : '';
  });
});
itemsSubmenu.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.parentElement.classList.remove('open');
  });
});
itemsListSubmenu.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(item.nextElementSibling);
    item.nextElementSibling
      ? item.nextElementSibling.classList.add('open')
      : '';
  });
});
itemsTitleListSubmenu.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.classList.remove('open');
  });
});
