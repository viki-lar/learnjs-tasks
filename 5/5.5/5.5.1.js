//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

function camelize(str) {
  let arr = [];
  str = str.split("-");
  str.forEach((element, index) => {
    if (index == 0) {
      arr.push(element);
    } else {
      arr.push((element = element[0].toUpperCase() + element.slice(1)));
    }
  });
  console.log(arr);

  str = arr.join("");

  return str;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
