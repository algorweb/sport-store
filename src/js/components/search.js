import vars from '../_vars';

if (vars.$searchFormBtn) {
  let openSearchForm = false;
  vars.$searchFormBtn.addEventListener('click', (e) => {
    if (!openSearchForm) {
      vars.$searchForm.classList.add('search-form--open');
      openSearchForm = true;
    } else {
      vars.$searchForm.classList.remove('search-form--open');
      openSearchForm = false;
    }
  });
}
