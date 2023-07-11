import {showPopup} from './popup.js';

const popup = document.querySelector('.big-picture');
const commentElementTemplate = popup.querySelector('.social__comment');
const moreLoaderButton = popup.querySelector('.social__comments-loader');


/**
 * Отрисовывает большую картинку (popup)
 * @param {Picture} data
 */
function renderPopup(data) {
  popup.querySelector('.big-picture__img img').setAttribute('src', data.url);
  popup.querySelector('.likes-count').textContent = String(data.likes);
  popup.querySelector('.social__caption').textContent = String(data.description);

  showPopup(popup);
  renderComments(data.comments);

  popup.addEventListener('click', onPopupClick);
}

let showNextFiveComments = '';
/**
 * Отрисовывает комментарии
 * @param  {Array<PictureComment>} data
 */
function renderComments(data, step = 5) {
  const commentsList = popup.querySelector('.social__comments');
  commentsList.innerHTML = '';

  //Счетчики комментов
  const [shownComments, totalComments] = popup.querySelectorAll('.comments-count');
  const totalCommentsCount = data.length;
  totalComments.textContent = totalCommentsCount;
  data = structuredClone(data);

  showNextComments();
  /**
 * Отрисовывает 5 комментариев
*/
  function showNextComments() {
    commentsList.append(...data.splice(0, step).map(createComment));

    let restCommentsNumber = data.length;
    shownComments.textContent = totalCommentsCount - restCommentsNumber;

    moreLoaderButton.classList.toggle('hidden', data.length === 0);
  }
  showNextFiveComments = showNextComments;

  moreLoaderButton.addEventListener('click', onMoreButtonClick);
}

// /**
//  * Обработчик клика на кнопке "Загрузить еще". Показывает следующие пять комментов
//  */
// function onMoreButtonClick() {
//   showNextFiveComments();
// }

/**
 * Создает один html элемент с комментарием
 * @param {PictureComment} data
 * @returns {HTMLLIElement}
*/
function createComment(data) {
  const commentElement = /** @type {HTMLLIElement}*/ (commentElementTemplate.cloneNode(true));

  commentElement.querySelector('.social__picture').setAttribute('src', data.avatar);
  commentElement.querySelector('.social__picture').setAttribute('alt', data.name);
  commentElement.querySelector('.social__text').textContent = data.message;

  return commentElement;

}

/**
 * @param {MouseEvent & {target: Element}} event
 */
function onPopupClick(event) {
  if (event.target.closest('.comments-loader')) {
    showNextFiveComments();
  }
}

export {renderPopup};
