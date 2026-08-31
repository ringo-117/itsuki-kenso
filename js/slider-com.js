const slideCount = document.querySelectorAll('.swiper-slide').length;
const swiper = new Swiper(".swiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  grabCursor: true,
  effect: 'slide',
  speed: 800,
  loop: false,


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 画面幅によって設定を変える
  breakpoints: {
    // 0px以上（スマホなど）
    0: {
      centeredSlides: true,
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    // 640px以上（タブレットなど）
    640: {
      centeredSlides: false,
      // slidesPerView: 1.5,
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    // 1024px以上（PC）
    1024: {
      // slidesPerView: 1.4,
      slidesPerView: 2.1,
      spaceBetween: 30,
      // loop: true,
    },
    // 1400px以上（PC）
    1400: {
      // slidesPerView: 1.4,
      slidesPerView: 2.01,
      spaceBetween: 30,
      // loop: true,
    }
  }
});