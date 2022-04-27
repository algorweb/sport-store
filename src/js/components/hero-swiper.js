// Подключение слайдера Swiper JS
import Swiper, { Navigation, Pagination } from '../vendor/swiper.js';

const swiperHero = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  speed: 700,
  pagination: {
    el: ".slider-pagination",
    clickable: true,
    type: 'bullets',
  },
});
