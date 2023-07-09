const popup = document.querySelector('.big-picture');
const commentElementTemplate = popup.querySelector('.social__comment');
const moreLoaderButton = popup.querySelector('.social__comments-loader');

/**
 * Отрисовывает большую картинку (popup)
 * @param {Picture} data
 */
function renderPopup(data) {
  popup.querySelector('.big-picture__img img').setAttribute('src', data.url);
  popup.querySelector('.big-picture__img img').setAttribute('alt', data.description);
  popup.querySelector('.likes-count').textContent = String(data.likes);
  popup.querySelector('.social__caption').textContent = String(data.description);

  showPopup(popup); //Ф1
  // onCancelButtonClick(popup);  // у академии лежит внутри Ф1
  // onDocumentKeydown(popup); //// у академии лежит внутри Ф1
  popup.querySelector('.cancel').addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);

  renderComments(data.comments);
}


/**
 * Показывает всплывающее окно popup
 * @param {Element} popup
 */
function showPopup(popup) {
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

let showNextFiveComments;
/**
 * Отрисовывает комментарии
 * @param  {Array<PictureComment>} data
 */
function renderComments(data, step = 5) {
  const commentsList = popup.querySelector('.social__comments');
  commentsList.innerHTML = '';

  //Счетчики комментов
  let [shownComments, totalComments] = popup.querySelectorAll('.comments-count');
  let totalCommentsCount = data.length;
  totalComments.textContent = totalCommentsCount;
  data = structuredClone(data);

  showNextComments();
  /**
   * Отрисовывает 5 комментариев
  */
  function showNextComments() {
    commentsList.append(...data.splice(0, step).map(createComment));
    let restCommentsNumber = data.length;
    moreLoaderButton.classList.toggle('hidden', data.length === 0);
    shownComments.textContent = totalCommentsCount - restCommentsNumber;
  }

  showNextFiveComments = showNextComments;
  moreLoaderButton.addEventListener('click', onMoreButtonClick);
}

/**
 * Создает один html элемент с комментарием
 * @param {PictureComment} data
*/
function createComment(data) {
  const commentElement = commentElementTemplate.cloneNode(true);

  commentElement.querySelector('.social__picture').setAttribute('src', data.avatar);
  commentElement.querySelector('.social__text').textContent = data.message;

  return commentElement;

}

/**
//  * cb для EventListener. Прячет popup по 'Esc'
//  * @param {KeyboardEvent} event
//  */
function onDocumentKeydown(event) {
  event.preventDefault();
  if (event.key.startsWith('Esc')) {
    hidePopup(popup);
  }
}


/**
 *  Обработчик клика на кнопке "Закрыть". Вызывает функцию, которая прячет окно
 */
function onCancelButtonClick() {
  hidePopup(popup);
}

/**
 * Прячет всплывающее окно popup
 * @param {Element} popup
 */
function hidePopup(popup) {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');

  popup.querySelector('.cancel').removeEventListener('click', onCancelButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

/**
 * Обработчик клика на кнопке "Загрузить еще". Показывает следующие пять комментов
 */
function onMoreButtonClick() {
  showNextFiveComments();
}


export { renderPopup };
