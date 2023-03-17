// Считаем потомков

// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:
"use strict";
let elementsLi = document.querySelectorAll("li");
for (let li of elementsLi) {
  console.log(li);
  // Какой в нём текст (без поддерева) ?
  console.log(li.firstChild.textContent);

  // Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
  let count = li.getElementsByTagName("li").length;
  console.log(count);
}
