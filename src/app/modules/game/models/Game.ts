import { FinishMode } from '../enums/FinishMode';
import { PlayerType } from '../enums/PlayerType';
import { Score } from './Score';
import { TicTacToe } from './TicTacToe';

export interface Game {
  ticTacToe: TicTacToe;
  currentPlayer: PlayerType;
  isFinished: boolean;
  finishMode?: FinishMode;
  winnerName?: string;
  xPlayerName: string;
  oPlayerName: string;
  score: Score;
}
