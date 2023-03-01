//Сумма свойств объекта
/*Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sumSalaries = 0;
  for (let value of Object.values(salaries)) {
    sumSalaries += value;
  }

  return sumSalaries;
}
console.log(sumSalaries(salaries)); // 650
