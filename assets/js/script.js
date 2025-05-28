const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">'+ 0 + (index + 1) + "</span>";
        },
      },
});