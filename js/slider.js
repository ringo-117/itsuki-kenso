const slideCount = document.querySelectorAll('.swiper-slide').length;
const swiper = new Swiper(".swiper", {
  slidesPerView: 1.2,
  // centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  // loop: true,
  effect: 'slide',
  speed: 800,

  //  autoplay: {
  //   delay: 3000,        // 3秒ごとにスライド
  //   disableOnInteraction: false // ユーザーが操作しても自動再生を止めない
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
      // slidesPerView: 1.1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    // 640px以上（タブレットなど）
    640: {
      // slidesPerView: 1.8,
      slidesPerView: 2.01,
      spaceBetween: 32,
      // spaceBetween: 25,
      centeredSlides: false,

    },
    // 1024px以上（PC）
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 35,
    },
    // 1450px以上（PC）
    1400: {
      slidesPerView: 2.3,
      spaceBetween: 35,
    }
  }
});