// Модуль - точка входа
import createPhotoArray from './data.js';
import {renderGallery} from './galleryRender.js';
import './upload.js';

renderGallery(createPhotoArray());

