//Преобразуйте объект в JSON, а затем обратно в обычный объект

let user = {
  name: "Василий Иванович",
  age: 35,
};
let user2 = JSON.parse(JSON.stringify(user));
console.log(user2); // Hare,Krishna,:-O
