import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AuthenticationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AuthenticationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean) {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  loginFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('^[a-zA-Z0-9]{1,}$')
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  rePasswordFormControl = new FormControl('', [
    Validators.required,
  ]);
  alreadyGotAccount = false;
  error = '';
  message = '';

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.message = '';
    this.error = '';
    // przesylanie danych
    this.alreadyGotAccount = this.data;
  }

  // tslint:disable-next-line:typedef
  formIsValidSubmitButton() {
    if (this.emailFormControl.valid && this.loginFormControl.valid && this.passwordFormControl.valid && this.rePasswordFormControl.valid) {
      return false;
    }
    return true;
  }

  // tslint:disable-next-line:typedef
  createAccount() {
    console.log('create account');
  }
}

