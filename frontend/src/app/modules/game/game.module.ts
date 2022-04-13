import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { TicTacToeComponent } from './components/tic-tac-toe';
import { CurrentTimeComponent } from './components/current-time';
import { ScoreComponent } from './components/score';
import { SignInComponent } from './components/sign-in';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TicTacToeComponent,
    CurrentTimeComponent,
    ScoreComponent,
    SignInComponent,
  ],
  imports: [CommonModule, GameRoutingModule, ReactiveFormsModule, FormsModule],
})
export class GameModule {}
