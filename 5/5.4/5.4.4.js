/*Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

function sumInput() {
  let arr = [];
  let number;
  let sum = 0;

  do {
    number = prompt("Введите число");
    if (isFinite(number)) {
      arr.push(+number);
    } else {
      return 0;
    }
  } while (number !== null);

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum;
}
console.log(sumInput());
