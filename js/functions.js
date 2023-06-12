//Функция для проверки длины строки
function testString(string, max) {
  string = String(string);
  string = string.replaceAll(" ", "");
  // console.log(string);
  // console.log(string.length);
  console.log(string.length <= max);
}
testString('проверяемая строка', 17);

// Полиндром
function poly(string) {
  string = string.toLowerCase().replaceAll(' ', "")
  let word = "";
  for (let i = string.length - 1; i >= 0; i--) {
    word += string[i];
  }
  // console.log(word);
  console.log(string === word);
}
poly('Лёша на полке клопа нашёл');

//Дополнительная функция
function fn(str) {
  str = String(str);
  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      word += str[i];
    }
  }
  word = word.replaceAll(' ', '');
  console.log('word', Math.abs(word));
}

fn('1 кефир, 0.5 батона')
fn('агент 007')
fn(-1)


