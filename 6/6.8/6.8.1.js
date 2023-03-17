// Вывод каждую секунду
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
//

//Используя setInterval.

function printNumbers(from, to) {
  let printNumber = from;

  let timerId = setInterval(function () {
    if (printNumber > to) clearInterval(timerId);
    else {
      console.log(printNumber);
      printNumber++;
    }
  }, 1000);
}

printNumbers(2, 5);

// Используя рекурсивный setTimeout.

function printNumbers2(from, to) {
  setTimeout(function timer() {
    console.log(from++);
    if (from <= to) {
      setTimeout(timer, 1000);
    }
  }, 1000);
}

printNumbers2(2, 5);
