// Модуль - точка входа
import {renderGallery} from './galleryRender.js';
import renderStatus from './status.js';
import './upload.js';
import { request } from './utils.js';

try {
  /**
   * @type {Array<Picture>}
   */
  const data = await request('https://29.javascript.pages.academy/kekstagram/data.');

  renderGallery(data);

} catch (error) {
  const title = `Ошибка: ${error.message}`;
  const button = 'Закрыть';

  renderStatus('error', {title, button});
}
