import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticationComponent} from '../authentication/authentication.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateBoardComponent implements OnInit {
  error;
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  constructor(
    public dialogRef: MatDialogRef<CreateBoardComponent>, private dataService: DataService, private route: Router) {
  }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  // tslint:disable-next-line:typedef
  createBoard() {
    this.dataService.createNewBoard(this.nameFormControl.value).subscribe(response => {
      console.log(response);
    }, err => {
      this.error = err.error.debugMessage;
    });
  }
  // tslint:disable-next-line:typedef
  disableButton(){
    return this.nameFormControl.valid;
  }
}
