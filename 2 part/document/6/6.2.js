// Сделайте внешние ссылки оранжевыми

// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// Ссылка является внешней, если:

// Её href содержит ://
// Но не начинается с http://internal.com.

// добавление стиля для одной ссылки

let links = document.querySelectorAll("a");

for (let link of links) {
  let href = link.getAttribute("href");
  if (href && href.includes("://") && !href.includes("http://internal.com")) {
    link.style.color = "orange";
  }
}
