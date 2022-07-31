export class Game {
  users;
  currentTurn;
  boardMatrix = [];
  playCompleted
  winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  constructor() {
    this.user = ["X", "O"];
    this.currentTurn = this.user[0];
    this.playCompleted = 0;
  }

  setBoardMatrix() {
    for (let index = 0; index < 3; index++) {
      this.boardMatrix[index] = [];
      for (let jIndex = 0; jIndex < 3; jIndex++) {
        this.boardMatrix[index][jIndex] = "-";
      }
    }
    // return this.boardMatrix;
  }

  checkTurn() {
    this.currentTurn = this.currentTurn == "X" ? "O" : "X";
    return this.currentTurn;
  }

  checkWinner() {
    for (const key in this.winningCombinations) {
      let combCheck = [];
      const comb = this.winningCombinations[key];
      comb.forEach((c) => {
        let square = this.getSquare(c);
        if (square == this.currentTurn) {
          combCheck.push(this.currentTurn);
        }
      });
      const checkTurn =
        this.currentTurn + "" + this.currentTurn + "" + this.currentTurn;
      if (combCheck.join("") == checkTurn) {
        return true;
      }
    }
    return false;
  }

  getSquare(value) {
    const sq = this.getCoords(value);
    return this.boardMatrix[sq.x][sq.y];
  }

  getCoords(value) {
    return {
      x: Math.floor(value / 3),
      y: value % 3,
    };
  }
}
