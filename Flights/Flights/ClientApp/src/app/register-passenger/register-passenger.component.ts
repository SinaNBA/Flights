import { Component, OnInit } from '@angular/core';
import { PassengerService } from './../api/services/passenger.service';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register-passenger',
  templateUrl: './register-passenger.component.html',
  styleUrls: ['./register-passenger.component.css'],
})
export class RegisterPassengerComponent implements OnInit {
  constructor(
    private PassengerService: PassengerService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  form = this.fb.group({
    email: [''],
    firstName: [''],
    lastName: [''],
    isFemale: [true],
  });

  ngOnInit(): void {}

  checkPassenger(): void {
    const params = { email: this.form.get('email')?.value };
  }

  register() {
    console.log('Form Values: ', this.form.value);

    this.PassengerService.registerPassenger({
      body: this.form.value,
    }).subscribe(
      (_) =>
        this.authService.LoginUser({ email: this.form.get('email')?.value }),
      console.error
    );
  }
}
