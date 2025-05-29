const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"><span class="num">'+ 0 + (index + 1) + "</span><span class='dot'></span></span>";
    },
  },
});

window.hf.components.tabs.init();