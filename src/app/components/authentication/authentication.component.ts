import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AuthenticationComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  loginFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  rePasswordFormControl = new FormControl('', [
    Validators.required,
  ]);
  isGood = false;

  constructor(
    public dialogRef: MatDialogRef<AuthenticationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.isGood = this.data;
  }

  // tslint:disable-next-line:typedef
  testMouseOver() {
    document.getElementById('test').style.height = '500px';
  }
}
