const firstRandom = Math.floor(Math.random() * 6) + 1;
const secondRandom = Math.floor(Math.random() * 6) + 1;

const firstDiceImage = "qmark.jpg";
const secondDiceImage = "qmark.jpg";

document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);
document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

let choice = 0;

up.addEventListener("click", () => {
  choice = 8;
  document.querySelector(".up").style.background = "#00FF00";
});
down.addEventListener("click", () => {
  choice = 6;
  document.querySelector(".down").style.background = "#00FF00";
});
lucky.addEventListener("click", () => {
  choice = 7;
  document.querySelector(".lucky").style.background = "#00FF00";
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
  setTimeout(() => {
    const firstDiceImage = "qmark.jpg";
    const secondDiceImage = "qmark.jpg";
    document.querySelector("h1").innerHTML = "Play Again";
    document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);
    document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);
    document.querySelectorAll(".play")[0].style.background = "#f7b7f7";
    document.querySelectorAll(".play")[1].style.background = "#f7b7f7";
    document.querySelectorAll(".play")[2].style.background = "#f7b7f7";
  }, 2500);
};
