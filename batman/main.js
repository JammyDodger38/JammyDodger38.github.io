const swiper = new Swiper('.main-slider', {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.main-slider__arrow',
  },
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
      },
    }
});

let burger = document.querySelector('.menu-burger');
let closeMenu = document.querySelector('.header__menu-close');
let menuMobile = document.querySelector('.header');

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main__button-play');

burger.addEventListener('click', () => {
  menuMobile.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
})

buttonModal.addEventListener('click', (e) => {
  modalWindow.classList.add('active');
})

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal) {
    modalWindow.classList.remove('active');
  }
})