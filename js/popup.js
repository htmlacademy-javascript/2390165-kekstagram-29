//ищу все миниатюры внутри галереи
const thumbnails = document.querySelector('.pictures').children;
const thumbnail = document.querySelector('.picture__img');
console.log(thumbnails);


//ищу большое изображение
const popup = document.querySelector('.big-picture');

//пишу отдельно коллбэк. Что он умеет?
// убирает класс hidden у  big-picture
// добавляет нужный url для картинки внутри big-picture
/**
 * @param {Picture} data
 */
function renderPopup(data) {
  popup.querySelector('.big-picture__img img').setAttribute('src', data.url);
  popup.querySelector('.big-picture__img img').setAttribute('alt', data.description);
  popup.querySelector('.comments-count').textContent = data.comments.length;
  popup.querySelector('.likes-count').textContent = data.likes;

  popup.classList.remove('hidden');
}
// function onClick

//Функция которая зкрывает по крестику
function closePopup() {
  popup.querySelector('.big-picture__cancel')
    .addEventListener('click', () => popup.classList.add('hidden'));

  document.addEventListener('keydown', (event) => {
    if (event.key.startsWith('Esc')) {
      popup.classList.add('hidden');
    }
  });

}


export { renderPopup as openPopup, closePopup };
