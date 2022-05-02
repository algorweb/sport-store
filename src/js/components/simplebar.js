// Подключение плагина кастом-скролла
import 'simplebar';

if (document.querySelector('[data-bar]')) {
  new SimpleBar(document.querySelector('.card-description__navigation'));
}
