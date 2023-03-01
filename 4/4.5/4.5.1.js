//
// Возможно ли создать функции A и B, чтобы new A() == new B()

let obj = {
  name: "Ivan",
};
function A() {
  return obj;
}

function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log(a == b);
