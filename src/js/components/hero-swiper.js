// Подключение слайдера Swiper JS
import Swiper, { Navigation, Pagination } from '../vendor/swiper.js';
// import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper('.hero__slider', {
  slidesPerView: 1,
  pagination: {
    el: ".slider-pagination",
    clickable: true,
    type: 'bullets',
  },
});
