const slideCount = document.querySelectorAll('.swiper-slide').length;
// const enableLoop = slideCount > 5;
const swiper = new Swiper(".swiper", {
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  effect: 'slide',
  speed: 800,

  // pagination: {
  //   el: ".swiper-pagination",
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 画面幅によって設定を変える
  breakpoints: {
    // 0px以上（スマホなど）
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    // 640px以上（タブレットなど）
    640: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    // 1024px以上（PC）
    1024: {
      slidesPerView: 1.4,
      spaceBetween: 30,
      loop: true,

    },
    // 1450px以上（PC）
    // 1400: {
    //   slidesPerView: 1.5,
    //   spaceBetween: 30,
    // }
  }
});