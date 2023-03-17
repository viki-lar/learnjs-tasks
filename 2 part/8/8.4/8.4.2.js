//Разница между вызовами
// важность: 5
// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // выведет Rabbit
Rabbit.prototype.sayHi(); // выведет underfined
Object.getPrototypeOf(rabbit).sayHi(); // выведет underfined
rabbit.__proto__.sayHi(); // выведет underfined
