//Структура моего объекта
/*
Наш объект состоит из пяти свойств
*/
const myObj = {
  id: '',
  url: '',
  description: '',
  likes: '',
  comments: [{
    id: '',
    avatar: '',
    message: '',
    name: ''
  }]
};

/**
 * 1. Функция генерации случайного целого положительного уникального числа
 * в заданных пределах
 * */
const getRandomInteger = function (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
 * 2. Функция генерирует рандомный уникальный id в диапазоне от 1 до 25 включительно
 */
const createRandomIdGenerator = (min, max) =>{
  const counter = [];
  return () => {
    let randomNumber = getRandomInteger(min, max);
    if (counter.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${min} до ${max}`);
      return null;
    }
    while (counter.includes(randomNumber)) {
      randomNumber = getRandomInteger(min, max);
    }
    counter.push(randomNumber);
    return randomNumber;
  };
};
const createPhotoId = createRandomIdGenerator(1,25);


/**
 * Создает объект с заданной структурой
 */
const createPhotoDescripton = () => ({
  id: createPhotoId(),
  url: 'fdfs',
  description: 'sdfd',
  likes: 'dsf',
  // comments: [{
  //   id: '',
  //   avatar: '',
  //   message: '',
  //   name: ''
  // }]
});
  // console.log(createPhotoDescripton());


const similarWizards = Array.from({length:25}, createPhotoDescripton);
console.log(similarWizards);
