// Модуль со вспомогательными функциями



/**
 * Функция генерации случайного целого положительного уникального числа
 * в заданных пределах
 * */
const getRandomInteger = (a, b) => {
  const result = Math.random() * (a - b + 1) + b;
  return Math.floor(result);
};

//1. ПЕРВАЯ ЧАСТЬ
/**
 * 1.1. Функция генерирует рандомный уникальный id в указанном диапазоне
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


//2. ВТОРАЯ ЧАСТЬ
// Работаем с комментариями


//2.1 Функция генерирует идентификатор для комментариев. Любое число без повторов
const createIdGenerator = () => {
  let counter = 1;
  return () => counter++;
};
export {getRandomInteger, createRandomIdGenerator, createIdGenerator};
