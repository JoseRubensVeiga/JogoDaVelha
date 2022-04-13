import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { PlayerType } from '../../enums/PlayerType';
import { TicTacToeService } from '../../services/tic-tac-toe';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentTimeComponent implements OnInit {
  currentPlayer$ = this.ticTacToeService.currentPlayer$;

  constructor(private ticTacToeService: TicTacToeService) {}

  ngOnInit(): void {}
}
