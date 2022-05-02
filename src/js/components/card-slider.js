const { default: _vars } = require("../_vars");
import vars from '../_vars';

if (vars.$cardSliderThumbs) {
  vars.$cardSliderThumbs.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-slider__thumb')) {

      let src = e.target.querySelector('img').dataset.src;

      vars.$sliderImg.setAttribute('src', src);

      vars.$cardSliderItems.forEach(el => {
        el.classList.remove('card-slider__thumb--current');
      });

      e.target.classList.add('card-slider__thumb--current');

      vars.$sliderPicture.querySelectorAll('source').forEach(el => {

        if (el.getAttribute('type')) {

          let attributeType = el.getAttribute('type');

          if (attributeType.includes('image/avif')) {
            if (src.includes('.jpg') || src.includes('.png')) {
              let indexOfDot = src.indexOf('.');
              let srcPath = src.substring(0,indexOfDot);
              srcPath = srcPath + '.avif';
              el.setAttribute('srcset', srcPath);
            }
          } else if (attributeType.includes('image/webp')) {
            if (src.includes('.jpg') || src.includes('.png')) {
              let indexOfDot = src.indexOf('.');
              let srcPath = src.substring(0,indexOfDot);
              srcPath = srcPath + '.webp';
              el.setAttribute('srcset', srcPath);
            }
          }
        }
      });
    }
  });
}

