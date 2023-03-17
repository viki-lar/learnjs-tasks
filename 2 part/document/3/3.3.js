// Выделите ячейки по диагонали

// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
// //  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';

"use strict";
let table = document.body.children[0];

let numberRows = table.rows.length;

for (let i = 0; i < numberRows; i++) {
  table.rows[i].cells[i].style.background = "red";
}
