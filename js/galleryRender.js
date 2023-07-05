// import {
//   createDescription,
//   createLikes,
//   createCommentsArray,
// } from './data.js';

const pictureTemplate = document.querySelector('#picture');
const gallery = document.querySelector('.pictures');
/**
 * Клонирует template, настраивает поля
 *
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
function renderGallery(data) {
  //максималити продвинуто в одну строку:
  gallery.append(...data.map(createPicture));

  //немного проще и немного понятнее:
  // gallery.append(...data.map((value) => createPicture(value)));

  //еще проще и еще понятнее:
  // const refinedPicture = data.map((value) => createPicture(value));
  // gallery.append(...refinedPicture);


}

export {renderGallery};

