function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector (".color");
const body = document.querySelector ("body");


btnChangeColor.addEventListener("click", () => {

  body.style.backgroundColor = getRandomHexColor();

  spanColor.innerHTML = getRandomHexColor();
});