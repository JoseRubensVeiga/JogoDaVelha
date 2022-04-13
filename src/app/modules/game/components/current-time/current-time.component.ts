import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { pluck } from 'rxjs';
import { TicTacToeService } from '../../services/tic-tac-toe';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentTimeComponent implements OnInit {
  currentPlayer$ = this.ticTacToeService.game$.pipe(pluck('currentPlayer'));

  constructor(private ticTacToeService: TicTacToeService) {}

  ngOnInit(): void {}
}
