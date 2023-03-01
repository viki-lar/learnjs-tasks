//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let date = new Date(2014, 0, 3);

function getWeekDay(date) {
  let week = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  console.log(week[date.getDay()]);
}
getWeekDay(date);
