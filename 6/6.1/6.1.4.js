//Вывод односвязного списка
// Напишите функцию printList(list), которая выводит элементы списка по одному.
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

  while (elem) {
    console.log(elem.value);
    elem = elem.next;
  }
}

printListWhile(list);

//  через рекурсию.

function printList(list) {
  console.log(list.value); //  элемент списка

  if (list.next) {
    printList(list.next);
  }
}

printList(list);
