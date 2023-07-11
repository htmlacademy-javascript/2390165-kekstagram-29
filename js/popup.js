/**
 * Показывает всплывающее окно popup
 * @param {Element} popup
 */
function showPopup(popup) {
  popup.classList.remove('hidden');
  popup.scroll(0, 0);
  document.body.classList.add('modal-open');

  popup.addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

/**
 * Прячет всплывающее окно popup
 * @param {Element} popup
 */
function hidePopup(popup) {
  popup.classList.add('hidden');
  popup.removeEventListener('click', onCancelButtonClick);

  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

  popup.dispatchEvent(new Event('hide'));
}

/**
 *  Обработчик клика на кнопке "Закрыть". Вызывает функцию, которая прячет окно
 * @param {MouseEvent & {target: Element, currentTarget: Element}} event
 */
function onCancelButtonClick(event) {
  if (event.target.closest('.cancel')) {
    hidePopup(event.currentTarget);
  }
}

/**
//  * cb для EventListener. Прячет popup по 'Esc'
//  * @param {KeyboardEvent & {target: Element}} event
//  */
function onDocumentKeydown(event) {
  const isTextField = event.target.matches('input[type = "text"], textarea');

  const isEscapeKey = event.key.startsWith('Esc');
  if (isEscapeKey && !isTextField) {
    hidePopup(document.querySelector('.overlay:not(.hidden)'));
  }
}

export { showPopup, hidePopup };
