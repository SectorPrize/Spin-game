const wheel = document.getElementById("wheel");
const button = document.getElementById("spinButton");
const count = document.querySelector(".count");
const repeat = document.querySelector(".repeat");
const splen = document.querySelector(".splen");
const arrow = document.querySelector(".arrow");
let spinning = false;

button.addEventListener("click", () => {
  if (spinning) return;

  spinning = true;
  wheel.style.animation = "spin-one 5s forwards";
  count.textContent = count.textContent - 1;
  setTimeout(function () {
    repeat.style.opacity = "1";
  }, 5000);
  setTimeout(function () {
    button.addEventListener("click", () => {
      if (count.textContent > 0) count.textContent = count.textContent - 1;
      wheel.style.animation = "spin-two 5s forwards";
      setTimeout(function () {
        repeat.style.opacity = "0";
        splen.style.opacity = "1";
        button.src = "images/utilizzare il bonus.png";

        button.style.top = "88vh";
        button.style.scale = "1.7";

        setTimeout(function () {
          arrow.style = "z-index: 3";
        }, 1000);

        button.setAttribute(
          "onclick",
          'window.location.replace("https://yandex.ru/games/category/casino")'
        );
      }, 5000);
    });
  }, 5000);
});
