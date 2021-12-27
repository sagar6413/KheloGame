const firstRandom = Math.floor(Math.random() * 6) + 1;
const secondRandom = Math.floor(Math.random() * 6) + 1;

const firstDiceImage = "dice" + firstRandom + ".png";
const secondDiceImage = "dice" + secondRandom + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);
document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

let choice = 0;

up.addEventListener("click", () => {
  choice = 8;
});
down.addEventListener("click", () => {
  choice = 6;
});
up.addEventListener("click", () => {
  choice = 7;
});
roll.addEventListener("click", () => {
  checkWinner();
});
const checkWinner = () => {
  const firstRandom = Math.floor(Math.random() * 6) + 1;
  const secondRandom = Math.floor(Math.random() * 6) + 1;

  const firstDiceImage = "dice" + firstRandom + ".png";
  const secondDiceImage = "dice" + secondRandom + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);
  document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

  if (choice > 7) {
    if (firstRandom + secondRandom > 7) {
      document.querySelector("h1").innerHTML = "You Won!";
    } else {
      document.querySelector("h1").innerHTML = "You Lost";
    }
  } else if (choice < 7) {
    if (firstRandom + secondRandom < 7) {
      document.querySelector("h1").innerHTML = "You Won!";
    } else {
      document.querySelector("h1").innerHTML = "You Lost";
    }
  } else {
    if (firstRandom + secondRandom === 7) {
      document.querySelector("h1").innerHTML = "You Won!";
    } else {
      document.querySelector("h1").innerHTML = "You Lost";
    }
  }
};
