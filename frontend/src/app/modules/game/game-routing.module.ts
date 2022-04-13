import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicTacToeComponent } from './components/tic-tac-toe';

const routes: Routes = [{ path: '', component: TicTacToeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
