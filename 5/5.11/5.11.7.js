//Сколько секунд осталось до завтра?

//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
  let date = new Date();

  let secondsToTomorrow =
    86400 -
    (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());

  return secondsToTomorrow;
}

console.log(getSecondsToTomorrow());
