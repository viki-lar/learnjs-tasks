// Цепь вызовов
//Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};
