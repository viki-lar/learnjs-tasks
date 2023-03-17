//Вычислить факториал
//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
//P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
