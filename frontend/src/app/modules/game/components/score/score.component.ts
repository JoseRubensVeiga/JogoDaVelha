import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from '../../services/tic-tac-toe';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  game$ = this.ticTacToeService.game$;

  constructor(private ticTacToeService: TicTacToeService) {}

  ngOnInit(): void {}
}
