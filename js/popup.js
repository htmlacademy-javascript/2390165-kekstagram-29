//ищу все миниатюры внутри галереи
const thumbnails = document.querySelector('.pictures').children;
const thumbnail = document.querySelector('.picture__img');
console.log(thumbnails);


//ищу большое изображение
const popup = document.querySelector('.big-picture');

/**
 * Отрисовывает большую картинку (popup)
 * @param {Picture} data
 */
function renderPopup(data) {
  popup.querySelector('.big-picture__img img').setAttribute('src', data.url);
  popup.querySelector('.big-picture__img img').setAttribute('alt', data.description);
  popup.querySelector('.comments-count:last-child').textContent = String(data.comments.length);
  popup.querySelector('.likes-count').textContent = String(data.likes);
  popup.querySelector('.social__caption').textContent = String(data.description);



  showPopup(popup); //Ф1
  // onCancelButtonClick(popup);  // у академии лежит внутри Ф1
  // onDocumentKeydown(popup); //// у академии лежит внутри Ф1
  popup.querySelector('.cancel').addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

/**
 * Показывает всплывающее окно popup
 * @param {Element} popup
 */
function showPopup(popup) {
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  popup.querySelector('.social__comment-count').classList.add('hidden');
  popup.querySelector('.comments-loader').classList.add('hidden');
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

// /**
//  * Прячет переданный в нее popup по 'Esc'
//  * @param {Element} popup
//  */
// function onDocumentKeydown(popup) {
//   document.addEventListener('keydown', (event) => {
//     if (event.key.startsWith('Esc')) {
//       hidePopup(popup);

//     }
//   });
// }

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

// /**
//  * Прячет переданный popup кнопкой cancel
//  * @param {Element} popup
//  */
// function onCancelButtonClick(popup) {
//   popup.querySelector('.cancel').addEventListener('click', () => {
//     hidePopup(popup);
//   });

// }
function onCancelButtonClick() {
  hidePopup(popup);
}


export { renderPopup };
