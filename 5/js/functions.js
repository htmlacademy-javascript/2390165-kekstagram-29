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


