//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
  str = str[0].toUpperCase() + str.slice(1);
  return str;
}

console.log(ucFirst("мама"));
