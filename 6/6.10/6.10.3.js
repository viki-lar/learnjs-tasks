// Свойство функции после bind

// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

"use strict";
function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

console.log(bound.test); // что выведет? почему?
//выведет underfined, у bound нет свойства test, тк.в него передано только sayHi
