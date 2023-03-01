//Какой день месяца был много дней назад?
/*Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:*/

let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  let dateAgo = new Date(date);

  dateAgo.setDate(date.getDate() - days);
  return dateAgo.getDate();
}

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
