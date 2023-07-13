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
 * */
function getRandomInteger (min, max) {
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
}


//Функция генерирует идентификатор для комментариев. Любое число без повторов
const createIdGenerator = () => {
  let counter = 1;
  return () => counter++;
};

//Функция принимает массив и рандомно выдает из него значение
function getRandomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

/**
 * @param {string} url
 * @param {RequestInit} [options]
 */
async function request(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(String(response.status));
  }

  return response.json();
}

export {
  makeElement,
  getRandomInteger,
  createIdGenerator,
  getRandomValueFromArray,
  request,
};
