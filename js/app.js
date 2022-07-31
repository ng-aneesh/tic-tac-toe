import { Board } from "./ui.js";
import { Game } from "./game.js";

const board = new Board();

let boardContainer = document.querySelector("#board-container");
boardContainer.innerHTML = board.boardHtml;

const game = new Game();
game.setBoardMatrix();

let userDetails = document.querySelector("#user-details");
userDetails.innerHTML = `<span>Player Turn: ${game.currentTurn}</span>`;

let boardButtons = document.querySelectorAll("#board-container button");

const turn = (ev) => {
  game.playCompleted++;
  game.boardMatrix[ev.target.getAttribute("data-x")][
    ev.target.getAttribute("data-y")
  ] = game.currentTurn;
  ev.target.innerHTML = game.currentTurn;
  ev.target.setAttribute("disabled", true);
  if (game.checkWinner()) {
    userDetails.innerHTML = `<span>Player ${game.currentTurn} is the winner</span>`;
  } else if (game.playCompleted == 9) {
    userDetails.innerHTML = `<span>Match Drawn! </span>`;
  } else {
    game.currentTurn = game.checkTurn();
    userDetails.innerHTML = `<span>Player Turn: ${game.currentTurn}</span>`;
  }
};

boardButtons.forEach((button) => {
  button.addEventListener("click", turn, this);
});
