const swiper = new Swiper('.main-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.main-slider__arrow',
    },
    breakpoints: {
        // when window width is >= 320px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        
      }
  });