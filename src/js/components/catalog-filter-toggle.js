import vars from '../_vars';

if (document.querySelector('.page__catalog')) {
  vars.$catalogFiltersTop.forEach(el => {
    el.addEventListener('click', (e) => {
      e.currentTarget.closest('.catalog-filters__group').classList.toggle('catalog-filters__group--open');
    });
  });

  vars.$hideFilters.addEventListener('click', (e) => {
    vars.$catalogFiltersTop.forEach(el => {
      el.closest('.catalog-filters__group').classList.remove('catalog-filters__group--open');
    });
  });

  const createChoiceItem = (text) => {
    return (
      `
      <button class="btn-reset catalog-choice__item" data-choice-text="${text}">
        ${text}
        <svg aria-hidden="true">
          <use xlink:href="img/sprite.svg#close"></use>
        </svg>
      </button>
    `
    );
  };

  vars.$catalogFilterItems.forEach(el => {
    el.querySelector('input').addEventListener('change', (e) => {
      console.log(el.querySelector('input'))
      let checked = el.querySelector('input').checked;

      if (checked) {

        el.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
        let text = el.querySelector('.custom-checkbox__text').textContent;

        vars.$catalogChoice.insertAdjacentHTML('afterbegin', createChoiceItem(text));

      } else {
        el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');

        let text = el.querySelector('.custom-checkbox').dataset.text;

        document.querySelector(`[data-choice-text="${text}"]`).remove();
      }

      el.closest('.catalog-filters__group').querySelector('.catalog-filters__quantity').textContent = el.closest('.catalog-filters__items').querySelectorAll('.custom-checkbox--active').length;
      console
      let activeCheckboxes = document.querySelectorAll('.custom-checkbox--active');

      if (activeCheckboxes.length > 0) {
        vars.$catalogChoice.style.display = 'block';
      } else {
        vars.$catalogChoice.style.display = 'none';
      }

    });
  });

  vars.$catalogChoice.addEventListener('click', (e) => {
    if (e.target.classList.contains('catalog-choice__item')) {
      e.target.remove();

      let text = e.target.textContent.trimLeft().trimRight();

      document.querySelector(`[data-text="${text}"]`).querySelector('input').checked = false;
      document.querySelector(`[data-text="${text}"]`).classList.remove('custom-checkbox--active');
    }

    if (e.target.classList.contains('catalog-choice__clear')) {
      Array.from(e.currentTarget.children).forEach(el => {
        if (!el.classList.contains('catalog-choice__clear')) {
          el.remove();
        }

        document.querySelectorAll('.catalog-filters__quantity').forEach(el => el.textContent = 0);

        vars.$catalogFilterItems.forEach(el => {
          el.querySelector('input').checked = false;
          el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
        })
      });

      e.currentTarget.style.display = 'none';
    }

    if (e.currentTarget.children.length === 1) {
      e.currentTarget.style.display = 'none';
    }

  });
}
