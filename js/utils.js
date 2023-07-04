/**
 * Функция генерирует подэлементы
 */
function makeElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
}

//----------------------------------------------------

// Модуль со вспомогательными функциями

/**
 * Функция генерации случайного целого числа
 * в заданных границах
 * @param{number} min - нижняя граница
 * @param{number} max - верхняя граница
 * @return{number} Целое рандомное число между [min,max]
 *
 * */
function getRandomInteger (min, max) {
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
}

//1. ПЕРВАЯ ЧАСТЬ
/**РЕФАЧУ!!
 * Надо избавиться от этой функции, заменив на альтернативный способ создания уникального номера
 * 1.1. Функция генерирует рандомный уникальный id в указанном диапазоне
 */
// const createRandomIdGenerator = (min, max) => {
//   const counter = [];
//   return () => {
//     let randomNumber = getRandomInteger(min, max);
//     if (counter.length >= (max - min + 1)) {
//       console.error(`Перебраны все числа из диапазона от ${min} до ${max}`);
//       return null;
//     }
//     while (counter.includes(randomNumber)) {
//       randomNumber = getRandomInteger(min, max);
//     }
//     counter.push(randomNumber);
//     return randomNumber;
//   };
// };

//2. ВТОРАЯ ЧАСТЬ
// Работаем с комментариями


//2.1 Функция генерирует идентификатор для комментариев. Любое число без повторов
const createIdGenerator = () => {
  let counter = 1;
  return () => counter++;
};

//Функция принимает массив и рандомно выдает из него значение
function getRandomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

export {
  makeElement,
  getRandomInteger,
  createIdGenerator,
  getRandomValueFromArray
};
