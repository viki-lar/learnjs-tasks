// Поиск элементов

// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
"use strict";

let table = document.getElementById("age-table");
console.log(table);
// Все элементы label внутри этой таблицы (их три).
let label = table.querySelectorAll("label");
console.log(label);
// Первый td в этой таблице (со словом «Age»).
let td = table.querySelector("td");
console.log(td);
// Форму form с именем name="search".
let form = document.querySelector('form[name="search"]');
console.log(form);
// Первый input в этой форме.
let firstInput = form.querySelector("input");
console.log(firstInput);
// Последний input в этой форме.
let lastInput = form.getElementsByTagName("input")[form.length - 1];

console.log(lastInput);
