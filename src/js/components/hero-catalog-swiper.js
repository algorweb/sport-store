// Подключение слайдера Swiper JS
import Swiper, { Navigation, Pagination } from '../vendor/swiper.js';

const swiperCatalog = new Swiper(".catalog-slider__container", {
  slidesPerView: 1,
  speed: 700,
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
