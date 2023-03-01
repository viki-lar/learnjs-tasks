//Каким будет результат при обращении к свойству объекта ref? Почему?
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name);

//выдаст ошибку, т.к.this может использоваться только в вызове методов объекта.
