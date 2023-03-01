//Максимальная зарплата
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let nameTopSalary;
  let maxSalary = 0;
  for (let [key, value] of Object.entries(salaries)) {
    if (value > maxSalary) {
      maxSalary = value;
      nameTopSalary = key;
    }
  }

  return nameTopSalary;
}
console.log(topSalary(salaries));
