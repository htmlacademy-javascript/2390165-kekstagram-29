import { renderPopup } from './gallery-popup.js';

/**
 * Заготовка для одного элемента миниатюры в галереи
 * @type {HTMLTemplateElement}
 */
const pictureTemplate = document.querySelector('#picture');
const gallery = document.querySelector('.pictures');
/**
 * Клонирует template, настраивает поля
 * @param {Picture} data
 * @returns {HTMLAnchorElement}
 */
function createPicture(data) {
  const pictureClone =
    pictureTemplate.content.querySelector('.picture').cloneNode(true);
  const picturePhoto = pictureClone.querySelector('.picture__img');
  const pictureLikes = pictureClone.querySelector('.picture__likes');
  const pictureComments = pictureClone.querySelector('.picture__comments');

  picturePhoto.setAttribute('src', data.url);
  picturePhoto.setAttribute('alt', data.description);
  pictureLikes.textContent = String(data.likes);
  pictureComments.textContent = String(data.comments.length);

  // кладу в миниатюру методы
  // обработчик клика на эту картинку
  pictureClone.addEventListener('click', (event) => {
    event.preventDefault();
    renderPopup(data);
  });

  return pictureClone;
}

// function renderGallery(items) {
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     const galleryPicture = createPicture(item);
//     gallery.append(galleryPicture);
//   }
// }

// Современный способ БЕЗ for:
/**
 * Отрисовывает галерею миниатюрами
 * @param {Array<Picture>} data
 */
function renderGallery(data) {
  //максималити продвинуто в одну строку:
  gallery.append(...data.map(createPicture));

  //немного проще и немного понятнее:
  // gallery.append(...data.map((value) => createPicture(value)));

  //еще проще и еще понятнее:
  // const refinedPicture = data.map((value) => createPicture(value));
  // gallery.append(...refinedPicture);
}

export { renderGallery };

