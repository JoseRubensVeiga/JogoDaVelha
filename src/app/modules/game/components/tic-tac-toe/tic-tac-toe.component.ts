import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { TicTacToeService } from '../../services/tic-tac-toe';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements OnInit {
  game$ = this.ticTacToeService.game$;

  constructor(
    private ticTacToeService: TicTacToeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadParams();
  }

  onCellClick(rowIndex: number, cellIndex: number): void {
    this.ticTacToeService.set(rowIndex, cellIndex);
  }

  restart(): void {
    this.ticTacToeService.restart();
  }

  canSelect(rowIndex: number, cellIndex: number): Observable<boolean> {
    return this.game$.pipe(
      map((game) => {
        const playerType =
          game.xPlayerName === this.ticTacToeService.userName ? 'X' : 'O';

        if (game.currentPlayer === playerType) {
          return !game.ticTacToe[rowIndex][cellIndex];
        }

        return false;
      })
    );
  }

  private loadParams(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.ticTacToeService.setName(params.name, params.player);
    });
  }
}
