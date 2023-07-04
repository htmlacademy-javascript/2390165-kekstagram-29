// import {
//   createDescription,
//   createLikes,
//   createCommentsArray,
// } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const gallery = document.querySelector('.pictures');
/**
 * Клонирует template, настраивает поля
 *
 */
function createPicture(data) {
  const pictureTemplateClone = pictureTemplate.cloneNode(true);
  // console.log('sfsf',pictureTemplateClone)
  const imageAvatar = pictureTemplateClone.querySelector('.picture__img');
  const imageLikes = pictureTemplateClone.querySelector('.picture__likes');
  const imageComments = pictureTemplateClone.querySelector('.picture__comments');

  imageAvatar.src =
  imageAvatar.alt =
  imageLikes.textContent = createLikes();
  imageComments.textContent = createCommentsArray();

  return pictureTemplateClone;
}


function renderGallery() {
  for (let i = 0; i <= 20; i++) {
    const galleryPicture = createPicture();
    gallery.append(galleryPicture);
  }

}

export {renderGallery};

