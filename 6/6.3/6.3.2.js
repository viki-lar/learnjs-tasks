//Объект счётчика

// Здесь объект счётчика создан с помощью функции-конструктора.

// Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

// счетчик будет работать

alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); //1

// счетчик будет работать
