// Добавьте пункт к выпадающему списку

// Имеется <select>:

// Используя JavaScript:

// Выведите значение и текст выбранного пункта.
let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);
alert(selectedOption.text);

// Добавьте пункт: <option value="classic">Классика</option>.

let newOption = new Option("Классика", "classic");
genres.append(newOption);
// Сделайте его выбранным.

newOption.selected = true;
