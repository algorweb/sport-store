export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  $pageCatalog: document.querySelector('.page__catalog'),
  $pageCard: document.querySelector('.page__card'),
  $headerLogoLink: document.querySelector('.header__logo-lnk'),

  $searchForm: document.querySelector('.search-form'),
  $searchFormBtn: document.querySelector('.search-form__btn'),

  $catalogFiltersTop: document.querySelectorAll('.catalog-filters__group'),
  $hideFilters: document.querySelector('.catalog-filters__hide-content'),
  $catalogColumns: document.querySelector('.catalog-columns__list'),
  $catalogGridContent: document.querySelector('.catalog-grid__content'),
  $catalogFilterItems: document.querySelectorAll('.catalog-filters__item'),
  $catalogChoice: document.querySelector('.catalog-choice'),
  $customSelect: document.querySelectorAll('.custom-select'),
  $freeDeliveryBtn: document.querySelector('.free-delivery__btn'),
  $colorSelect: document.querySelector('.color-select'),
  $sizeSelect: document.querySelector('.size-select'),
  $stepper: document.querySelector('.stepper'),
  $cardSliderThumbs: document.querySelector('.card-slider__thumbs'),
  $cardSliderItems: document.querySelectorAll('.card-slider__thumb'),
  $sliderImg: document.querySelector('.card-slider__main img'),
  $sliderPicture: document.querySelector('.card-slider__main picture'),
  $cardDescrLink: document.querySelectorAll('.card-description__link'),
  $burger: document.querySelector('.burger'),
  $navClose: document.querySelector('.nav__close'),
  $nav: document.querySelector('.nav'),
  $mobileFiltersOpen: document.querySelector('.catalog-mobile-filters'),
  $catalogFilters: document.querySelector('.catalog-filters'),
}
