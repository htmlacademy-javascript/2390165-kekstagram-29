import { createRandomIdGenerator, getRandomInteger, createIdGenerator } from './utils.js';

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

//модуль, который создаёт данные
const createPhotoId = createRandomIdGenerator(1, 25);
const createUrlId = createRandomIdGenerator(1, 25);

/**
 * 1.2. Функция генерирует url
 */
const generateUrl = () => {
  const photoDir = 'photos/';
  return (`${photoDir}${createUrlId()}`);
};

/**
 * 1.3. Функция генерирует description
 */
const createDescription = () => DESCRIPTIONS[createRandomIdGenerator(0, 25)];

/**
 * 1.4. Функция генерирует лайки от 15 до 200
 */
const createLikes = () => getRandomInteger(15, 200);

//2.2 Функция генерирует путь к аватарке
/*
img/avatar-{{случайное число от 1 до 6}}.svg.
Аватарки подготовлены в директории img.*/
const createAvatarDir = () => (`img/avatar${getRandomInteger(1, 6)}.svg`);

//2.3 Функция генерирует текст комментария
const createMessageGenerator = () => {
  const randomIndexMessage = getRandomInteger(0, COMMENTS_MESSAGE.length - 1);
  return COMMENTS_MESSAGE[randomIndexMessage];
};

//2.4 Функция генерирует имена авторов комменариев
const createAuthorCommentsName = () => {
  const namesIndex = getRandomInteger(0, AUTHOR_COMMENTS_NAMES.length - 1);
  return AUTHOR_COMMENTS_NAMES[namesIndex];
};
// 3. СБОРКА ОБЪЕКТА КОММЕНТОВ
const createCommetnsId = createIdGenerator();

// 3.1 Функция собирает образец объекта Комментарии с заданной структурой
const createComments = () =>
  ({
    id: createCommetnsId(),
    avatar: createAvatarDir(),
    message: createMessageGenerator(),
    name: createAuthorCommentsName()
  });

//  3.2 Функция создает массив с рандомным числом комментариев
const createCommentsArray = () => {
  const commentsAmount = getRandomInteger(0, 30);
  return Array.from({ length: commentsAmount }, createComments);
};
// 4. ИТОГО. Создаем готовый объект с заданной структурой

//4.1 Функция собирает образец объекта
const createPhoto = () =>
  ({
    id: createPhotoId(),
    url: generateUrl(),
    description: createDescription(),
    likes: createLikes(),
    comments: createCommentsArray()
  });

//4.2 Функция создает 25 вариантов собранного образца
const createPhotoArray = (length = 20) => Array.from({ length }, createPhoto);
// console.log(PhotoDescripton);

export default createPhotoArray;
