const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const submenu = document.querySelector('.submenu');
const nestedMenu = document.querySelector('.nested-menu');
const menuLinks = document.querySelectorAll('.menu__link');
const submenuTitles = document.querySelectorAll('.submenu__title');
const submenuLinks = document.querySelectorAll('.submenu__link');
const nestedMenuTitles = document.querySelectorAll('.nested-menu__title');
try {
  menuLinks.forEach((link) => {
    //   let dropdownPosition = { right: '', left: '' };
    //   if (container) {
    //     const containerDomRect = container.getBoundingClientRect();
    //     const dropdownDomRect = dropdown.getBoundingClientRect();
    //     const dropdownHeight = dropdownDomRect.height;

    // if (containerDomRect.bottom + dropdownHeight > window.innerHeight) {
    //   dropdownPosition.bottom =
    //     window.innerHeight - containerDomRect.top + 2 + 'px';
    // } else {
    //   dropdownPosition.top = containerDomRect.bottom + 2 + 'px';
    // }

    // dropdownPosition.left = containerDomRect.left + 'px';
    link.addEventListener('mouseover', (e) => {
      // link.nextElementSibling
      //   ? link.nextElementSibling.classList.add('open')
      //   : '';

      if (link.nextElementSibling) {
        // let subMenuPosition = { right: '', left: '' };

        let subMenuWidth = link.nextElementSibling.getBoundingClientRect();
        const submenuaa = subMenuWidth.width;
        const linkDomRect = link.getBoundingClientRect();
        // console.log(subMenuPosition, 'subMenuPosition');
        console.log(subMenuWidth, 'subMenuWidth');
        console.log(submenuaa, 'subMenuWidth');
        console.log(linkDomRect, 'linkDomRect');
        console.log(window.innerWidth);

        if (linkDomRect.right + subMenuWidth > window.innerWidth) {
          // link.nextElementSibling.classList.add('open');
          // subMenuPosition.left = linkDomRect.right + 2 + 'px';
          console.log(1);
          link.nextElementSibling.style.right = 'auto';
          link.nextElementSibling.style.left = 0 + 'px';
        } else {
          console.log(3);
          link.nextElementSibling.classList.add('open');
          // subMenuPosition.left = linkDomRect.right + 2 + 'px';
          // console.log(subMenuPosition);
          link.nextElementSibling.style.right = 0 + 'px';
          link.nextElementSibling.style.left = 'auto';
        }
        // return subMenuPosition;
      }
    });
    link.addEventListener('mouseout', (e) => {
      link.nextElementSibling
        ? link.nextElementSibling.classList.remove('open')
        : '';
    });
  });
  (function mobileMenu() {
    // BURGER

    if (window.matchMedia('(max-width: 991px)').matches) {
      burger.addEventListener('click', () => {
        burger.classList.contains('active')
          ? burger.classList.toggle('not-active')
          : burger.classList.toggle('active');
        menu.classList.toggle('open');
        body.classList.toggle('is-lock');
        submenu.classList.remove('open');
        nestedMenu.classList.remove('open');
      });
      // MENU
      menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          link.nextElementSibling
            ? link.nextElementSibling.classList.add('open')
            : '';
        });
      });
      submenuTitles.forEach((title) => {
        title.addEventListener('click', (e) => {
          e.preventDefault();
          title.parentElement.classList.remove('open');
        });
      });
      submenuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          link.nextElementSibling
            ? link.nextElementSibling.classList.add('open')
            : '';
        });
      });
      nestedMenuTitles.forEach((title) => {
        title.addEventListener('click', (e) => {
          e.preventDefault();
          title.parentElement.classList.remove('open');
        });
      });
    }
  })();
  // const calcDropDownPosition = (container, dropdown) => {
  //   let dropdownPosition = { right: '', left: '' };
  //   if (container) {
  //     const containerDomRect = container.getBoundingClientRect();
  //     const dropdownDomRect = dropdown.getBoundingClientRect();
  //     const dropdownHeight = dropdownDomRect.height;

  //     // if (containerDomRect.bottom + dropdownHeight > window.innerHeight) {
  //     //   dropdownPosition.bottom =
  //     //     window.innerHeight - containerDomRect.top + 2 + 'px';
  //     // } else {
  //     //   dropdownPosition.top = containerDomRect.bottom + 2 + 'px';
  //     // }

  //     // dropdownPosition.left = containerDomRect.left + 'px';
  //   }

  //   console.log(dropdownPosition);
  //   return dropdownPosition;
  // };
  // calcDropDownPosition();
} catch (error) {}
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
