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

  subject$ = webSocket('ws://localhost:3000/connection');

  userName!: string;

  constructor() {
    this.subject$.subscribe((game: any) => this._game$.next(game));
    this.subject$.subscribe(console.log);
  }

  get(): Observable<any> {
    return this.subject$;
  }

  set(row: number, cell: number): void {
    this.subject$.next({ row, cell });
  }

  setName(player: string): void {
    this.userName = player;
    this.subject$.next({ player });
  }
}
