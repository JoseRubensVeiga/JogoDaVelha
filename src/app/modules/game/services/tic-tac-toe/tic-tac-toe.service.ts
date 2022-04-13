import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { Game } from '../../models/Game';

@Injectable({
  providedIn: 'root',
})
export class TicTacToeService {
  private _game$ = new ReplaySubject<Game>(1);

  get game$(): Observable<Game> {
    return this._game$.asObservable();
  }

  subject$ = webSocket('wss://immense-sea-50163.herokuapp.com/connection');
  // subject$ = webSocket('ws://localhost:5000/connection');

  userName!: string;
  player!: 1 | 0;

  constructor() {
    this.subject$.subscribe((game: any) => this._game$.next(game));
    this.subject$.subscribe(console.log);
  }

  get(): Observable<any> {
    return this.subject$;
  }

  set(row: number, cell: number): void {
    this.subject$.next({ row, cell, player: this.player });
  }

  setName(playerName: string, player: 1 | 0): void {
    this.userName = playerName;
    this.player = player;
    this.subject$.next({ playerName, player });
  }

  restart(): void {
    this.subject$.next({ action: 'restart' });
  }
}
