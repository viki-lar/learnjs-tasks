//Обязателен ли "else"?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Родители разрешили?");
  }
}
//Будет ли эта функция работать как - то иначе, если убрать else?
//функция будет работать также как с else
