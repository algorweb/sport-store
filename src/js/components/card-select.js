import vars from '../_vars';

if (vars.$colorSelect) {
  vars.$colorSelect.addEventListener('click', (e) => {
    if (e.target.parentNode.parentNode.classList.contains('color-select__btn')) {

      document.querySelectorAll('.color-select__btn').forEach(el => el.classList.remove('primary-link--current'));

      let alementButton = e.target.parentNode.parentNode;
      let color = alementButton.dataset.color;

      e.currentTarget.querySelector('.color-select__selected span').textContent = color;

      alementButton.classList.add('primary-link--current');
    }
  });

}

if (vars.$sizeSelect) {
  let size = '';

  vars.$sizeSelect.addEventListener('click', (e) => {
    if (e.target.classList.contains('size-select__btn')) {

      e.currentTarget.querySelector('.size-select__clear').style.display = 'inline-flex';

      let color = e.target.dataset.color;

      e.currentTarget.querySelector('.size-select__selected span').textContent = color;

      e.target.classList.toggle('size-select__btn--active');

      if (e.target.classList.contains('size-select__btn--active')) {
        let currentSize = e.target.textContent;

        size += currentSize + ', ';
      } else {
        let currentSize = e.target.textContent + ', ';

        size = size.replace(currentSize, '');
      }

      e.currentTarget.querySelector('.size-select__selected span').textContent = size;

      if (!size) {
        e.currentTarget.querySelector('.size-select__selected span').textContent = 'Выберите размер';
      }
    }

    if (e.target.classList.contains('size-select__clear')) {
      e.currentTarget.querySelector('.size-select__selected span').textContent = 'Выберите размер';
      document.querySelectorAll('.size-select__btn').forEach(el => el.classList.remove('size-select__btn--active'));
      e.target.style.display = 'none';
      size = '';
    }
  });

}

