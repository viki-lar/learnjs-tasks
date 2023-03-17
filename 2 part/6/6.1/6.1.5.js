// Вывод односвязного списка в обратном порядке
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

//  используя цикл
function printListWhile(list) {
  let elem = list;
  let arr = [];

  while (elem) {
    arr.push(elem.value);
    elem = elem.next;
  }
  arr = arr.reverse();

  for (let key of arr) console.log(key);
}

printListWhile(list);

//  через рекурсию.

function printList(list) {
  if (list.next) {
    printList(list.next);
  }
  console.log(list.value); //  элемент списка
}

printList(list);
