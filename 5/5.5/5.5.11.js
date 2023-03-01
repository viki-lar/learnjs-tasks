//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users) {
  let averageAge = 0;
  users.forEach((element) => {
    averageAge = averageAge + element.age;
  });

  return averageAge / users.length;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
