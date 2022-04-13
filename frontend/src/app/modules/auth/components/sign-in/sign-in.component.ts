import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.control.value);
  }
}
