import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AuthenticationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AuthenticationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean, private dataService: DataService) {
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
  loginSignInFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordSignInFormControl = new FormControl('', [
    Validators.required,
  ]);
  alreadyGotAccount = false;
  error = '';
  message = '';
  afterRegistration = '';

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
  formIsValidLoginButton() {
    if (this.passwordSignInFormControl.valid && this.loginSignInFormControl.valid) {
      return false;
    }
    return true;
  }

  // tslint:disable-next-line:typedef
  createAccount() {
    this.dataService.registerUser(this.loginFormControl.value, this.passwordFormControl.value, this.emailFormControl.value)
      .subscribe(response => {
        this.alreadyGotAccount = true;
        this.afterRegistration = 'Account created, confirm you account';
      }, err => {
        this.error = err.error.debugMessage;
      });
  }

  // tslint:disable-next-line:typedef
  switchView() {
    this.alreadyGotAccount = !this.alreadyGotAccount;
    this.message = '';
    this.error = '';
    this.afterRegistration = '';
    this.emailFormControl.reset();
    this.loginFormControl.reset();
    this.passwordFormControl.reset();
    this.rePasswordFormControl.reset();
    this.loginSignInFormControl.reset();
    this.passwordSignInFormControl.reset();
  }
}

