import { renderPopup } from './gallery-popup.js';
/**
 * Заготовка для одного элемента миниатюры в галереи
 * @type {HTMLTemplateElement}
 */
const pictureTemplate = document.querySelector('#picture');
const gallery = document.querySelector('.pictures');
const menu = document.querySelector('.img-filters');

/**
 * @param {Array<Picture>} data
 */
function initGallery(data) {
  menu.classList.remove('img-filters--inactive');
  menu.addEventListener('click', onMenuClick);
  renderThumbnails(data);
}

/**
 * @param {MouseEvent & {target: Element}} event
 */
function onMenuClick(event) {
  const selectedButton = event.target.closest('button');

  if (selectedButton) {
    menu.querySelectorAll('button').forEach((button) => {
      button.classList.toggle('img-filters__button--active', button === selectedButton);
    });
    selectedButton.dispatchEvent(new Event('toggle'));
  }
}

/**
 * Отрисовывает галерею миниатюрами
 * @param {Array<Picture>} data
 */
function renderThumbnails(data) {
  gallery.append(...data.map(createThumbnail));
}

/**
 * Клонирует template, настраивает поля
 * @param {Picture} data
 * @returns {HTMLAnchorElement}
 */
function createThumbnail(data) {
  const pictureClone =
    pictureTemplate.content.querySelector('.picture').cloneNode(true);
  const picturePhoto = pictureClone.querySelector('.picture__img');
  const pictureLikes = pictureClone.querySelector('.picture__likes');
  const pictureComments = pictureClone.querySelector('.picture__comments');

  picturePhoto.setAttribute('src', data.url);
  picturePhoto.setAttribute('alt', data.description);
  pictureLikes.textContent = String(data.likes);
  pictureComments.textContent = String(data.comments.length);

  pictureClone.addEventListener('click', (event) => {
    event.preventDefault();
    renderPopup(data);
  });

  return pictureClone;
}



export default initGallery;
// export { renderThumbnails as renderGallery };

