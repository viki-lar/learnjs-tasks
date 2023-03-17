let ball = document.querySelector("#ball");
console.log(ball.clientWidth);
let field = document.querySelector("#field");
console.log(field.clientWidth);
console.log(field.clientHeight);

ball.style.top = field.clientHeight / 2 - ball.clientHeight / 2 + "px";
ball.style.left = field.clientWidth / 2 - ball.clientWidth / 2 + "px";
