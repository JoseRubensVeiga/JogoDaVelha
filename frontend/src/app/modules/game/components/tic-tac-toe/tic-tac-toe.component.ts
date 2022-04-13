import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from '../../services/tic-tac-toe';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements OnInit {
  ticTacToe$ = this.ticTacToeService.ticTacToe$;

  constructor(private ticTacToeService: TicTacToeService) {}

  ngOnInit(): void {}

  onCellClick(rowIndex: number, cellIndex: number): void {
    this.ticTacToeService.selectCell(rowIndex, cellIndex);
  }
}
