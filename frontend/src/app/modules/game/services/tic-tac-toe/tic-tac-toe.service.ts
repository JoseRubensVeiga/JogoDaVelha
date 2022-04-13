import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlayerType } from '../../enums/PlayerType';
import { TicTacToe } from '../../models/TicTacToe';

@Injectable({
  providedIn: 'root',
})
export class TicTacToeService {
  private _ticTacToe$ = new BehaviorSubject<TicTacToe>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  get ticTacToe$(): Observable<TicTacToe> {
    return this._ticTacToe$.asObservable();
  }

  private _currentPlayer$ = new BehaviorSubject<PlayerType>('X');

  get currentPlayer$(): Observable<PlayerType> {
    return this._currentPlayer$.asObservable();
  }

  constructor() {}

  selectCell(rowIndex: number, cellIndex: number): void {
    const value = this._ticTacToe$.getValue();

    value[rowIndex][cellIndex] = this._currentPlayer$.getValue();

    this._ticTacToe$.next(value);
    this.toggleCurrentPlayer();
  }

  private clearCells(): void {
    this._ticTacToe$.next([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  }

  private toggleCurrentPlayer(): void {
    const value = this._currentPlayer$.getValue();

    this._currentPlayer$.next(value === 'O' ? 'X' : 'O');
  }
}
