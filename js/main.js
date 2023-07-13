// Модуль - точка входа
import {renderGallery} from './galleryRender.js';
import './upload.js';
import { request } from './utils.js';

/**
 * @type {Array<Picture>}
 */
const data = await request('https://29.javascript.pages.academy/kekstagram/data');

renderGallery(data);
