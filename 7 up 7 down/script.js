const firstRandom = Math.floor(Math.random() * 6) + 1;
const secondRandom = Math.floor(Math.random() * 6) + 1;

const firstDiceImage = "dice" + firstRandom + ".png";
const secondDiceImage = "dice" + secondRandom + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);
document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

//Logic winner
if (firstRandom > secondRandom) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (firstRandom < secondRandom) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
