import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TicTacToeService } from '../../services/tic-tac-toe';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  control = new FormControl();

  get hasValue(): boolean {
    return !!this.control.value;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.router.navigate(['game', 'play'], {
      queryParams: {
        name: this.control.value,
      },
    });
  }
}
