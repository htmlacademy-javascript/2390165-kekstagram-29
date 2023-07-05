import {
  getRandomInteger,
  createIdGenerator,
  getRandomValueFromArray
} from './utils.js';

// import * as util from './util.js';

const DESCRIPTIONS = [
  'белый попугай',
  'лес зимой',
  'лес летом',
  'лес весной',
  'лес осенью',
  'звездное небо',
  'кот сиамский',
  'коты персидские',
  'коты сфинксы',
  'коты дворовые',
  'iphone 4',
  'iphone 5',
  'iphone 6S',
  'iphone XS',
  'автомобиль купэ',
  'автомобиль кабриолет',
  'автомобиль хэчбэк',
  'автомобиль универсал',
  'автомобиль BMW',
  'автомобиль Mercedes',
  'автомобиль KIA',
  'автомобиль Ford',
  'автомобиль Lada',
  'мост Дворцовый',
  'мост Литейный',
];
// console.log(DESCRIPTIONS);

const COMMENTS_MESSAGE = [
  'В целом всё неплохо. Но не всё',
  'Всё отлично!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
];

const AUTHOR_COMMENTS_NAMES = [
  'Антон',
  'Сергей',
  'Анна',
  'Валентин',
  'Александр',
  'Степан',
  'Валентина',
  'Нина',
  'Наталья',
  'Игорь',
  'Белый медведь'
];

////Функция генерирует путь к аватарке
/*
img/avatar-{{случайное число от 1 до 6}}.svg.
Аватарки подготовлены в директории img.*/
const createAvatarDir = () => (`img/avatar${getRandomInteger(1, 6)}.svg`);

// 1. СБОРКА ОБЪЕКТА КОММЕНТОВ
const createCommetnsId = createIdGenerator();

// 1.1 Функция собирает образец объекта Комментарии с заданной структурой
function createComments() {
  const id = createCommetnsId();
  const avatar = createAvatarDir();
  const message = getRandomValueFromArray(COMMENTS_MESSAGE);
  const name = getRandomValueFromArray(AUTHOR_COMMENTS_NAMES);

  return { id, avatar, message, name };
}

//  1.2 Функция создает массив с рандомным числом комментариев
function createCommentsArray() {
  const commentsAmount = getRandomInteger(0, 30);
  const items = new Array(commentsAmount).fill('');

  return items.map(createComments);
}
// 2. ИТОГО. Создаем готовый объект с заданной структурой

//2.1 Функция собирает образец объекта
function createPhoto(id) {
  const url = (`photos/${id}.jpg`);
  const description = getRandomValueFromArray(DESCRIPTIONS);
  const likes = getRandomInteger(15, 200);
  const comments = createCommentsArray();

  return { id, url, description, likes, comments };
}

//2.2
//Функция создает 25 вариантов собранного образца
// const createPhotoArray = (length = 20) => Array.from({ length }, createPhoto);
//Новый крутейший способ с помощью new Array  и дальнейшего map
function createPhotoArray(length = 25) {
  const items = new Array(length).fill(1);
  return items.map((value, index) => createPhoto(index + value));
}

export default createPhotoArray;


