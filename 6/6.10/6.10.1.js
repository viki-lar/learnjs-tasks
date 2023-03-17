// Связанная функция как метод

//Что выведет функция?
//функция выведет null

"use strict";

function f() {
  console.log(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g();
