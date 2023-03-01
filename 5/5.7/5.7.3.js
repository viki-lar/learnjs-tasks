//Перебираемые ключи

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
//map.keys() возвращает итерируемый объект, а не массив.
keys.push("more");
