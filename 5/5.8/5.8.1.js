//Хранение отметок "не прочитано"

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

//для задачи нужно использовать WeakSet
//WeakSet хранит только объекты и удаляет их, как только они становятся недостижимыми иными путями.
