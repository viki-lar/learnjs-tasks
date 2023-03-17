// Выведите список потомков в дереве
// Есть дерево, организованное в виде вложенных списков ul/li.
// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

//

"use strict";
//находим все элементы
let list = document.querySelectorAll("li");
// для каждого элемента считаем длину
for (let li of list) {
  //если длина больше 0, то добавляем значение
  if (li.querySelectorAll("li").length > 0) {
    li.firstChild.data += " [" + li.querySelectorAll("li").length + "]";
  }
}
