console.log("Welcome to TicTacToe");
let bg_music = new Audio("music.mp3");
let turn_music = new Audio("ting.mp3");
let gameover_music = new Audio("gameover.mp3");
let turn = "X";
let gameOver = false;

//Function to check turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Function to check winner
const checkWinner = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " WON";
      document.getElementsByClassName("game-info").innerHTML =
        "<h1>Congratulations</h1>";
      gameOver = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "250px";
      gameover_music.play();
      bg_music.play();
      setTimeout(() => {
        bg_music.pause();
      }, 5000);
      document.querySelector(".line").style.width = "20vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && !gameOver) {
      boxtext.innerText = turn;
      turn = changeTurn();
      turn_music.play();
      checkWinner();
      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn For " + turn;
      }
    }
  });
});
//Add onclick listner to reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameOver = false;
  document.getElementsByClassName("info")[0].innerText = "Turn For" + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
  bg_music.pause();
  document.querySelector(".line").style.width = "0";
});
