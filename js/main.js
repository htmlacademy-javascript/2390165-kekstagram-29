// Модуль - точка входа
import createPhotoArray from './data.js';
import {renderGallery} from './galleryRender.js';
import {closePopup} from './popup.js';

renderGallery(createPhotoArray());
// mapData(createPhotoArray());
closePopup();

