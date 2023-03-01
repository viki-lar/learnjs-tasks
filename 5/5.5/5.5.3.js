/*Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
 которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.*/

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    // удалить, если за пределами интервала
    if (element < a || element > b) {
      arr.splice(i, 1);
      // возвращается к проверке для сдвинутого элемета
      i--;
    }
  }
}

let arr = [6, 9, 11, 3, 5, 12, 15];

filterRangeInPlace(arr, 3, 8);
console.log(arr);
