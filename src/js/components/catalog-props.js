import vars from '../_vars';

if (document.querySelector('.page__catalog')) {
  vars.$catalogColumns.addEventListener('click', (e) => {
    if (e.target.classList.contains('.catalog-columns__btn') || e.target.closest('.catalog-columns__item')) {
      let columns = e.target.dataset.columns;
      let $columnsBtn = document.querySelectorAll('.catalog-columns__btn');

      $columnsBtn.forEach(el => {
        el.classList.remove('catalog-columns__btn--current');
      });

      e.target.classList.add('catalog-columns__btn--current');

      vars.$catalogGridContent.dataset.gridColumns = columns;
    }
  });
}

if (vars.$customSelect) {
  vars.$customSelect.forEach(el => {
    el.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('custom-select--open');

      if (e.target.classList.contains('custom-select__item')) {
        let text = e.target.textContent;
        e.currentTarget.querySelector('.custom-select__top').textContent = text;
      }
    });
  });
}


