//Функция для проверки длины строки
function testStringLength(string, max) {
  string = String(string);
  string = string.replaceAll(' ', '');
  return (string.length <= max);
}
testStringLength('проверяемая строка', 17);

// Палиндром
function isPalindrome(string) {
  string = string.toLowerCase().replaceAll(' ', '');
  let word = '';
  for (let i = string.length - 1; i >= 0; i--) {
    word += string[i];
  }
  return (string === word);
}
isPalindrome('Лёша на полке клопа нашёл');

//Дополнительная функция
function getNumbersFromString(str) {
  str = String(str);
  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      word += str[i];
    }
  }
  return +word;
}

getNumbersFromString('1 кефир, 0.5 батона');
getNumbersFromString('агент 007');
getNumbersFromString(-1);

// Задание 5-2
/*
true если встреча не выходит за рамки рабочего дня.
false если выходит
 Значит
есть переменная = конец рабочего дня 17:30
есть переменная = начало 08:00
есть переменная = продолжительность встречи в минутах
4 параметра
*/

/**
 * Функция конвертирует принятые значения в часах в минуты
 */
const convertToMinutes = function (time) {
  time = String(time);
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

/**
 * Проверяет укладывается ли начало и конец встречи в границы рабочего дня
 */
const isWithin = (...arrayOfTime) => {
  const meetingPeriod = arrayOfTime.pop();
  const minutesRange = arrayOfTime.map(convertToMinutes);
  const [start, end, meetingStart] = minutesRange;

  return (start <= meetingStart)
    && (end >= (meetingStart + meetingPeriod));
};

isWithin('08:00', '17:30', '14:00', 90);

