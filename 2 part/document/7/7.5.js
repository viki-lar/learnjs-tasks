// Создайте дерево из объекта
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

"use strict";

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

//создаем блок
let wrapper = document.createElement("div");
document.body.append(wrapper);
wrapper.setAttribute("id", "container");

//рекурсия, которая перебирает вложенные объекты
function createTreeText(obj) {
  // отдельная рекурсивная функция
  let li = "";
  let ul;
  for (let key in obj) {
    li += "<li>" + key + createTreeText(obj[key]) + "</li>";
  }
  if (li) {
    ul = "<ul>" + li + "</ul>";
  }
  return ul || "";
}

//функция вывода дерева
function createTree(container, obj) {
  container.innerHTML = createTreeText(obj);
}

createTree(container, data);
