// Создать уведомление

// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым.
// Уведомление должно автоматически исчезнуть через 1, 5 секунды.

// Пример объекта options:

let options = {
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome", // дополнительный класс для div (необязательно)
};

function showNotification(options) {
  let div = document.createElement("div");
  div.classList.add("notification");
  div.style.top = "10px";
  div.style.right = "10px";
  div.textContent = options.html;
  div.style.position = "fixed";
  div.style.zIndex = "1000";
  document.body.append(div);
}

setTimeout(() => showNotification(options), 1500);
