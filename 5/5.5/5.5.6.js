//Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
/*Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате 
«ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.*/

function Calculator() {
  //создаем метод
  this.methods = {
    //добавляем методы сложения и вычитания
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  // преобразуем полученную строку в аргументы и оператор
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];
    //проверяем на наличие всех значений
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };
  //добавляем метод
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
