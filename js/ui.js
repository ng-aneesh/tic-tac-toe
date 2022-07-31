export class Square {
  renderHtml;
  constructor(id, x, y, value) {
    this.renderHtml = `<div class='cell-container'><button id=${id} data-x="${x}" data-y="${y}">${value}</button></div>`;
  }
  getSqaureHtml() {
    return this.renderHtml;
  }
}

export class Board {
  boardHtml = "";
  constructor() {
    for (let index = 0; index < 3; index++) {
      for (let jIndex = 0; jIndex < 3; jIndex++) {
        const newSquare = new Square("cell-" + index + "-" + jIndex, index, jIndex, "-");
        this.boardHtml = this.boardHtml + newSquare.getSqaureHtml();
      }
    }
  }
}
