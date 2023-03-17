//Числа Фибоначчи
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(77));

function fibFor(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibFor(77));
