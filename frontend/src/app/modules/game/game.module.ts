import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { CurrentTimeComponent } from './components/current-time/current-time.component';

@NgModule({
  declarations: [
    TicTacToeComponent,
    CurrentTimeComponent
  ],
  imports: [CommonModule, GameRoutingModule],
})
export class GameModule {}
