import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  box!: any[];
  xIsNext!: boolean;
  winner!: string | void | null;
  boardDisplay!: boolean;
  draw!: string | null | void;


  constructor() { }

  ngOnInit(): void {

  }

  newGame() {
    this.boardDisplay = true;
    this.box = Array(9).fill(null); //Creating a Array with 9 element and fill with no value intisial
    this.winner = null;
    this.xIsNext = true;
  }
  get Player() {
    return this.xIsNext ? 'X' : 'O'; // Which player will play next
  }
  makeMove(idx: number) {
    if (!this.box[idx]) {
      this.box.splice(idx, 1, this.Player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();

  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.box[a] && this.box[a] === this.box[b] && this.box[a] === this.box[c]) {
        return this.box[a];
      }
    }
    return null;
  }

}

