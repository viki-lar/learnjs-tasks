//Создайте объект calculator (калькулятор) с тремя методами:
const calculator = {
  read() {
    this.a = +prompt("введите значение a", 0);
    this.b = +prompt("введите значение b", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
