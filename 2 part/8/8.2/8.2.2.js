//Создайте новый объект с помощью уже существующего

// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно,
// но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так? да,если мы ничего не меняем, то свойство constructor будет доступно всем через [[Prototype]]:

let obj2 = new obj.constructor();
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.

function Rabbit() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (свойство получено из прототипа
//  И пример функции - конструктора, с которой такой код поведёт себя неправильно.

function Rabbit() {}
Rabbit.prototype = {
  jumps: true,
};

let rabbit2 = new Rabbit();
alert(rabbit.constructor === Rabbit); // false
