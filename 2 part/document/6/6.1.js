// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
"use strict";
let div = document.querySelector("[data-widget-name]");

console.log(div.getAttribute("data-widget-name"));
