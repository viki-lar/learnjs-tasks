//Отфильтруйте анаграммы

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();

  for (let element of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = element.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, element);
  }

  return Array.from(map.values());
}

console.log(aclean(arr));
