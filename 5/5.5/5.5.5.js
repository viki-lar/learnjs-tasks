//Скопировать и отсортировать массив
let arr = ["HTML", "JavaScript", "CSS"];
let sorted;

function copySorted(array) {
  sorted = array.slice();
  sorted = sorted.sort();

  return sorted;
}

copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
