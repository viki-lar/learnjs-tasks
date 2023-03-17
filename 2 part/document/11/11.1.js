// Найдите координаты точек относительно окна браузера

// В ифрейме ниже располагается документ с зелёным «полем».

// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

// В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.

let coords = elem.getBoundingClientRect();

//верхний левый, внешний угол (это просто).

let answer1 = [coords.left, coords.top];
//нижний правый, внешний угол (тоже просто).

let answer2 = [coords.right, coords.bottom];

//верхний левый, внутренний угол (чуть сложнее).

let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];

//нижний правый, внутренний угол (есть несколько способов, выберите один).
let answer4 = [
  coords.left + elem.clientLeft + elem.clientWidth,
  coords.top + elem.clientTop + elem.clientHeight,
];
