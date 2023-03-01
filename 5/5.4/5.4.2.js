//операции с массивами

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.lenght - 1) / 2)] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
